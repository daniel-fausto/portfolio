"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary, Locale } from "@/app/content";

const SECTIONS = ["about", "experience", "projects", "recognition", "skills", "education", "contact"] as const;
const HEADER_OFFSET = 120;
const LANG_SWITCH_KEY = "lang-switch-position";

type Props = {
  lang: Locale;
  shortName: string;
  dict: Pick<Dictionary, "nav" | "siteTagline" | "langLabel" | "menuOpen">;
};

const pageTop = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY;

export function SiteHeader({ lang, shortName, dict }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("about");
  // While an anchor click is smooth-scrolling, intermediate sections must not steal the highlight.
  const locked = useRef(false);
  const pinned = useRef<string | null>(null);
  const releaseTimer = useRef<number | undefined>(undefined);

  const compute = useCallback(() => {
    if (pinned.current) {
      const el = document.getElementById(pinned.current);
      const top = el?.getBoundingClientRect().top ?? Infinity;
      if (el && top < window.innerHeight && top > -el.offsetHeight) return setActive(pinned.current);
    }
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) return setActive(SECTIONS[SECTIONS.length - 1]);
    let current: string = SECTIONS[0];
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top - HEADER_OFFSET <= 0) current = id;
    }
    setActive(current);
  }, []);

  const armRelease = useCallback(() => {
    window.clearTimeout(releaseTimer.current);
    releaseTimer.current = window.setTimeout(() => {
      locked.current = false;
      compute();
    }, 150);
  }, [compute]);

  const goTo = (id: string) => {
    setActive(id);
    pinned.current = id;
    locked.current = true;
    armRelease();
    setOpen(false);
  };

  useEffect(() => {
    const saved = sessionStorage.getItem(LANG_SWITCH_KEY);
    if (saved) {
      sessionStorage.removeItem(LANG_SWITCH_KEY);
      const { id, offset } = JSON.parse(saved) as { id: string; offset: number };
      const el = document.getElementById(id);
      if (el) {
        pinned.current = id;
        locked.current = true;
        window.scrollTo({ top: pageTop(el) + offset, behavior: "instant" });
        armRelease();
      }
    }

    let frame = 0;
    const onScroll = () => {
      if (locked.current) return armRelease();
      pinned.current = null;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(compute);
    };
    frame = requestAnimationFrame(compute);
    const layout = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(compute);
    });
    layout.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      layout.disconnect();
      window.clearTimeout(releaseTimer.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [compute, armRelease]);

  const rememberPosition = () => {
    if (window.scrollY === 0) return;
    const el = document.getElementById(active);
    if (el) sessionStorage.setItem(LANG_SWITCH_KEY, JSON.stringify({ id: active, offset: window.scrollY - pageTop(el) }));
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const wide = window.matchMedia("(min-width: 1081px)");
    const onWide = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  const links = SECTIONS.map((id) => ({ id, label: dict.nav[id] }));

  return (
    <header className="header">
      <div className="nav-wrap">
        <a className="site-name" href="#about" aria-label={shortName} onClick={() => goTo("about")}>
          <strong>{shortName}</strong>
          <span>{dict.siteTagline}</span>
        </a>
        <nav className="desktop-nav" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? "location" : undefined}
              onClick={() => goTo(l.id)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="language" role="group" aria-label={dict.langLabel}>
            {(["es", "en"] as const).map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                lang={l}
                hrefLang={l}
                aria-current={lang === l ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  if (lang === l) return;
                  rememberPosition();
                  // Full load so Next's post-navigation scroll can't override the restored position.
                  window.location.assign(`/${l}`);
                }}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-label={dict.menuOpen}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile" hidden={!open}>
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => goTo(l.id)}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
