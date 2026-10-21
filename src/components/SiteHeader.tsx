"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/app/content";

const SECTIONS = ["about", "experience", "projects", "recognition", "skills", "education", "contact"] as const;

type Props = {
  lang: Locale;
  shortName: string;
  dict: Pick<Dictionary, "nav" | "siteTagline" | "langLabel" | "menuOpen">;
};

export function SiteHeader({ lang, shortName, dict }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

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
        <a className="site-name" href="#about" aria-label={shortName}>
          <strong>{shortName}</strong>
          <span>{dict.siteTagline}</span>
        </a>
        <nav className="desktop-nav" aria-label="Main">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} aria-current={active === l.id ? "location" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="language" role="group" aria-label={dict.langLabel}>
            <Link href="/es" lang="es" hrefLang="es" aria-current={lang === "es" ? "page" : undefined}>
              ES
            </Link>
            <Link href="/en" lang="en" hrefLang="en" aria-current={lang === "en" ? "page" : undefined}>
              EN
            </Link>
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
          <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
