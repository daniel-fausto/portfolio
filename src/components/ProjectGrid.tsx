"use client";

import Image from "next/image";
import { useState } from "react";
import type { Category, Dictionary, Project } from "@/app/content";
import { ExternalIcon, LayersIcon, PlusIcon } from "./icons";

type Props = { dict: Dictionary["projects"] };
type Filter = "all" | Category;

const FILTERS: Filter[] = ["all", "software", "hardware"];

function ProductSystem() {
  return (
    <div className="product-system" aria-label="Genius POS and XKM technology stack">
      <div className="system-top">
        <span className="tiny-label">ENTERPRISE SOFTWARE</span>
        <span className="system-icon">
          <LayersIcon />
        </span>
      </div>
      <div className="system-name">
        POS<span>+</span>XKM
      </div>
      <div className="system-layers">
        <div>
          <span>01 / POS</span>
          <strong>Angular · TypeScript · SQLite</strong>
        </div>
        <div>
          <span>02 / KITCHEN</span>
          <strong>Vue 3 · Electron</strong>
        </div>
        <div>
          <span>03 / QUALITY</span>
          <strong>Jest · Playwright</strong>
        </div>
      </div>
    </div>
  );
}

type CardProps = { p: Project; index: number; total: number; hidden: boolean; dict: Props["dict"] };

function ProjectCard({ p, index, total, hidden, dict }: CardProps) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <article className={`project${p.featured ? " featured" : ""}`} id={p.id} hidden={hidden}>
      {p.featured && <ProductSystem />}
      {p.image && (
        <a className="project-shot" href={p.image.href} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
          <Image src={p.image.src} alt={p.image.alt} width={1280} height={800} sizes="(max-width: 800px) 100vw, 50vw" />
        </a>
      )}
      <div className="project-content">
        <div className="project-meta">
          <span>{p.kind}</span>
          <span>
            {pad(index + 1)} / {pad(total)}
          </span>
        </div>
        <h3>{p.title}</h3>
        <p className="project-sub">{p.sub}</p>
        <p>{p.text}</p>
        <ul className="tags">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <details className="case">
          <summary>
            {dict.explore}
            <span className="expand-icon">
              <PlusIcon />
            </span>
          </summary>
          <div className="case-content">
            <h4>{dict.caseLabels.context}</h4>
            <p>{p.context}</p>
            <h4>{dict.caseLabels.contribution}</h4>
            <p>{p.contribution}</p>
            <h4>{dict.caseLabels.evidence}</h4>
            <p>{p.evidence}</p>
          </div>
        </details>
        {p.links.length > 0 && (
          <div className="project-links">
            {p.links.map((l) => (
              <a key={l.href} className="text-link" href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
                <ExternalIcon />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function ProjectGrid({ dict }: Props) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = dict.items.filter((p) => filter === "all" || p.category.includes(filter));

  return (
    <>
      <div className="project-toolbar">
        <div className="filters" role="group" aria-label={dict.filterLabel}>
          {FILTERS.map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {dict.filters[f]}
            </button>
          ))}
        </div>
        <p className="project-count" aria-live="polite">
          {visible.length} {dict.countSuffix}
        </p>
      </div>
      <div className="project-grid">
        {dict.items.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} total={dict.items.length} hidden={!visible.includes(p)} dict={dict} />
        ))}
      </div>
    </>
  );
}
