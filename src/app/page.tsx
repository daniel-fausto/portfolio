"use client";

import { useEffect, useState } from "react";
import { content, profile, yearsOfExperience, type Locale } from "./data";

function LangToggle({ lang, setLang }: { lang: Locale; setLang: (l: Locale) => void }) {
  return (
    <div className="flex items-center gap-1 rounded-md border border-white/15 p-0.5 text-xs">
      {(["en", "es"] as Locale[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded px-2 py-1 font-semibold uppercase transition-colors ${
            lang === l ? "bg-accent text-[#0b1120]" : "text-slate-300 hover:text-accent"
          }`}
          aria-pressed={lang === l}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function Nav({ lang, setLang }: { lang: Locale; setLang: (l: Locale) => void }) {
  const t = content[lang];
  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1120]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-bold text-accent">
          DFF<span className="text-slate-400">.dev</span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-slate-300 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </nav>
    </header>
  );
}

function Hero({ lang }: { lang: Locale }) {
  const t = content[lang];
  const cvFile = lang === "es" ? "/Daniel_Fausto_Franco_CV_ES.pdf" : "/Daniel_Fausto_Franco_CV_EN.pdf";
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.15),transparent)]" />
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <p className="font-mono text-sm text-accent">{t.hero.greeting}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-6xl">{profile.name}</h1>
        <h2 className="mt-2 text-2xl font-semibold text-slate-400 sm:text-4xl">{t.hero.role}</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">{t.hero.tagline}</p>
        <p className="mt-6 max-w-2xl leading-relaxed text-slate-300">{t.hero.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-[#0b1120] transition-opacity hover:opacity-90"
          >
            {t.hero.ctaWork}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md border border-accent/50 px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
          >
            {t.hero.ctaContact}
          </a>
          <a
            href={cvFile}
            download
            className="rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-accent hover:text-accent"
          >
            {t.hero.ctaCV}
          </a>
        </div>
        <div className="mt-8 flex gap-5 text-sm text-slate-400">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <span>📍 {t.hero.location}</span>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ n, title }: { n: string; title: string }) {
  return (
    <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold text-white">
      <span className="font-mono text-base text-accent">{n}.</span>
      {title}
      <span className="h-px flex-1 bg-white/10" />
    </h2>
  );
}

function About({ lang, years }: { lang: Locale; years: number }) {
  const t = content[lang];
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle n="01" title={t.sectionTitles.about} />
      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-3 space-y-4 text-slate-300">
          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="mt-2 inline-flex items-baseline gap-2 rounded-lg border border-accent/30 bg-accent/5 px-4 py-2">
            <span className="text-3xl font-bold text-accent">{years}+</span>
            <span className="text-sm text-slate-300">{t.about.yearsLabel}</span>
          </div>
        </div>
        <ul className="md:col-span-2 space-y-2 text-sm text-slate-300">
          {t.about.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Projects({ lang }: { lang: Locale }) {
  const t = content[lang];
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle n="02" title={t.sectionTitles.projects} />
      <div className="grid gap-6 md:grid-cols-2">
        {t.projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/40"
          >
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            </div>
            <p className="font-mono text-xs text-accent">{p.tag}</p>
            {p.highlight && (
              <p className="mt-2 inline-block w-fit rounded bg-amber-400/10 px-2 py-0.5 text-xs font-semibold text-amber-300">
                {p.highlight}
              </p>
            )}
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((tech) => (
                <li key={tech} className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-slate-300">
                  {tech}
                </li>
              ))}
            </ul>
            {p.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-accent/40 px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
                  >
                    {l.label}
                    <span aria-hidden>↗</span>
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills({ lang }: { lang: Locale }) {
  const t = content[lang];
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle n="03" title={t.sectionTitles.skills} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.map((s) => (
          <div key={s.group} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="mb-3 font-semibold text-accent">{s.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <li key={i} className="rounded bg-white/5 px-2 py-1 text-xs text-slate-300">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience({ lang }: { lang: Locale }) {
  const t = content[lang];
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle n="04" title={t.sectionTitles.experience} />
      <ol className="relative border-l border-white/10">
        {t.experience.map((e) => (
          <li key={e.role + e.company} className="mb-10 ml-6">
            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">{e.role}</h3>
              <span className="font-mono text-xs text-slate-400">{e.period}</span>
            </div>
            <p className="text-sm text-accent">{e.company}</p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-300">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contact({ lang }: { lang: Locale }) {
  const t = content[lang];
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="font-mono text-sm text-accent">{t.contact.kicker}</p>
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{t.contact.title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-slate-300">{t.contact.text}</p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block rounded-md border border-accent px-8 py-3 font-semibold text-accent transition-colors hover:bg-accent/10"
      >
        {profile.email}
      </a>
      <div className="mt-8 flex justify-center gap-6 text-sm text-slate-400">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Locale>("en");
  const [years, setYears] = useState(7);
  const [year, setYear] = useState(2026);

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Locale | null;
    if (saved === "en" || saved === "es") setLang(saved);
    else if (navigator.language.toLowerCase().startsWith("es")) setLang("es");
    setYears(yearsOfExperience());
    setYear(new Date().getFullYear());
  }, []);

  const changeLang = (l: Locale) => {
    setLang(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };

  return (
    <>
      <div className="aurora" aria-hidden>
        <span className="l1" />
        <span className="l2" />
        <span className="l3" />
      </div>
      <Nav lang={lang} setLang={changeLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} years={years} />
        <Projects lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        {content[lang].footer} · © {year} {profile.name}
      </footer>
    </>
  );
}
