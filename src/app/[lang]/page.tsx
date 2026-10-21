import { notFound } from "next/navigation";
import { BackToTop } from "@/components/BackToTop";
import { CopyEmail } from "@/components/CopyEmail";
import { CvDialog } from "@/components/CvDialog";
import { CvOptions } from "@/components/CvOptions";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SiteHeader } from "@/components/SiteHeader";
import { ArrowUpIcon, CapIcon, ChipIcon, ExternalIcon, MailIcon, PlusIcon } from "@/components/icons";
import { BRANDS, INTEL_PRESS, SITE_URL, dictionaries, hasLocale, profile } from "../content";
import { getYears } from "../years";

function Heading({ eyebrow, title, intro }: { eyebrow: string; title: [string, string]; intro?: string }) {
  return (
    <div className="section-head">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>
          {title[0]}
          <br />
          {title[1]}
        </h2>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = dictionaries[lang];
  const years = await getYears();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: `${SITE_URL}/${lang}`,
    image: `${SITE_URL}/og.png`,
    jobTitle: "Full-Stack Developer",
    description: t.meta.description.replace("{years}", String(years)),
    email: profile.email,
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: ["TypeScript", "Angular", "React", "Vue.js", "Node.js", "POS systems", "Payments", "Automated testing", "Embedded systems", "Robotics"],
    knowsLanguage: ["Spanish", "English", "French"],
    alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad Modelo" },
    address: { "@type": "PostalAddress", addressLocality: "Mérida", addressRegion: "Yucatán", addressCountry: "MX" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <a href="#main" className="skip">
        {t.skip}
      </a>
      <SiteHeader lang={lang} shortName={profile.shortName} dict={t} />

      <main id="main">
        <section className="hero" id="about" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="hero-greeting">{t.hero.greeting}</p>
              <p className="hero-name">{profile.name}</p>
              <h1 id="hero-title" className="hero-role">
                {t.hero.role}
              </h1>
              <p className="hero-stack">{t.hero.stack}</p>
              <p className="hero-intro">
                {t.hero.introPrefix} <strong>{t.hero.introLead}</strong> {t.hero.introRest}
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  {t.hero.ctaWork}
                </a>
                <a className="button button-outline" href={`mailto:${profile.email}`}>
                  {t.hero.ctaContact}
                  <MailIcon />
                </a>
                <CvDialog label={t.hero.ctaCv} cv={t.cv} />
              </div>
              <div className="hero-socials">
                <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                  <ExternalIcon />
                </a>
                <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  <ExternalIcon />
                </a>
              </div>
              <p className="availability">{t.hero.availability}</p>
            </div>
            <aside className="hero-board">
              <div className="board-label">
                <span className="tiny-label">{t.hero.boardLabel}</span>
                <span className="board-symbol">
                  <ChipIcon />
                </span>
              </div>
              <h2>
                {t.hero.boardTitle[0]}
                <br />
                {t.hero.boardTitle[1]}
              </h2>
              <div className="board-rows">
                {t.hero.boardRows.map((r, i) => (
                  <div key={r.label}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <p>
                      {r.label}
                      <strong>{r.value}</strong>
                    </p>
                  </div>
                ))}
              </div>
              <div className="board-location">
                <span className="location-dot" aria-hidden="true" />
                {t.hero.location}
                <br />
                <span>{t.hero.languages}</span>
              </div>
            </aside>
          </div>
          <div className="container metrics">
            <div>
              <strong>{years}+</strong>
              <span>{t.metrics.years}</span>
            </div>
            <div>
              <strong>{BRANDS.length}+</strong>
              <span>{t.metrics.brands}</span>
            </div>
            <div>
              <strong>#1</strong>
              <span>{t.metrics.award}</span>
            </div>
          </div>
          <div className="container brands">
            <p className="tiny-label">{t.brandsLabel}</p>
            <ul>
              {BRANDS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section container" id="experience">
          <Heading eyebrow={t.experience.eyebrow} title={t.experience.title} intro={t.experience.intro} />
          <div className="timeline">
            {t.experience.jobs.map((job) => (
              <article className="experience-row" key={job.period}>
                <div className="timeline-date">
                  <span className="timeline-dot" />
                  {job.current && <span className="current">{t.experience.current}</span>}
                  <p>{job.period}</p>
                  <span>{t.experience.remote}</span>
                </div>
                <div className="experience-content">
                  <h3>{job.role}</h3>
                  <p className="company">
                    {job.company} {job.companyNote && <span>{job.companyNote}</span>}
                  </p>
                  <p>{job.summary}</p>
                  <ul className="work-list">
                    {job.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <details className="earlier">
            <summary>
              {t.experience.earlierSummary}
              <span className="expand-icon">
                <PlusIcon />
              </span>
            </summary>
            <div>
              {t.experience.earlier.map((e) => (
                <p key={e.title}>
                  <strong>{e.title}</strong> {e.text}
                </p>
              ))}
            </div>
          </details>
        </section>

        <section className="projects-section" id="projects">
          <div className="container section">
            <Heading eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro} />
            <ProjectGrid dict={t.projects} />
          </div>
        </section>

        <section id="recognition" className="award-section">
          <div className="container award-grid">
            <div className="award-mark" aria-hidden="true">
              <span className="award-star">✳</span>
              <span>INTEL PARTNER CONNECT</span>
              <strong>2020</strong>
              <span>ARTIFICIAL INTELLIGENCE</span>
            </div>
            <div>
              <Heading eyebrow={t.recognition.eyebrow} title={t.recognition.title} />
              <p className="award-text">
                <strong>{t.recognition.lead}</strong> {t.recognition.text}
              </p>
              <a className="text-link light-link" href={INTEL_PRESS} target="_blank" rel="noopener noreferrer">
                {t.recognition.link}
                <ExternalIcon />
              </a>
              <p className="award-small">{t.recognition.small}</p>
            </div>
          </div>
        </section>

        <section className="section container" id="skills">
          <Heading eyebrow={t.skills.eyebrow} title={t.skills.title} intro={t.skills.intro} />
          <div className="skills-grid">
            {t.skills.groups.map((g, i) => (
              <article className="skill-group" key={g.title}>
                <span className="skill-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{g.title}</h3>
                  <p>{g.text}</p>
                  <ul className="tags">
                    {g.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <details className="all-skills">
            <summary>
              {t.skills.allLabel}
              <span className="expand-icon">
                <PlusIcon />
              </span>
            </summary>
            <dl>
              {t.skills.all.map((s) => (
                <div key={s.term}>
                  <dt>{s.term}</dt>
                  <dd>{s.desc}</dd>
                </div>
              ))}
            </dl>
          </details>
        </section>

        <section className="education-section" id="education">
          <div className="container section">
            <Heading eyebrow={t.education.eyebrow} title={t.education.title} />
            <div className="education-grid">
              <article className="degree">
                <span className="education-icon">
                  <CapIcon />
                </span>
                <span className="tiny-label">{t.education.degree.label}</span>
                <h3>{t.education.degree.title}</h3>
                <p>{t.education.degree.text}</p>
              </article>
              <div className="training">
                <article>
                  <span className="tiny-label">{t.education.platzi.label}</span>
                  <h3>{t.education.platzi.title}</h3>
                  <ul>
                    {t.education.platzi.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article>
                  <span className="tiny-label">{t.education.trailblazer.label}</span>
                  <h3>{t.education.trailblazer.title}</h3>
                  <p>{t.education.trailblazer.text}</p>
                  <a className="text-link" href={t.education.trailblazer.href} target="_blank" rel="noopener noreferrer">
                    {t.education.trailblazer.link}
                    <ExternalIcon />
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section container contact-section" id="contact">
          <div>
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>
              {t.contact.title[0]}
              <br />
              {t.contact.title[1]}
            </h2>
            <p>{t.contact.text}</p>
            <a className="email-link" href={`mailto:${profile.email}`}>
              {profile.email}
              <MailIcon />
            </a>
            <div className="contact-links">
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
                <ExternalIcon />
              </a>
              <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
                <ExternalIcon />
              </a>
              <CopyEmail email={profile.email} label={t.contact.copy} copied={t.contact.copied} failed={t.contact.copyFailed} />
            </div>
          </div>
          <div className="cv-downloads">
            <p className="tiny-label">{t.cv.eyebrow}</p>
            <CvOptions cv={t.cv} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <a className="footer-name" href="#top">
            {profile.name}
          </a>
          <p>{t.footer.tagline}</p>
          <a href="#top" className="text-link">
            {t.footer.backToTop}
            <ArrowUpIcon />
          </a>
        </div>
      </footer>
      <BackToTop label={t.footer.backToTop} />
    </>
  );
}
