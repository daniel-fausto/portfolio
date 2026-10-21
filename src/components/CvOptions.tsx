import type { Dictionary } from "@/app/content";
import { DownloadIcon } from "./icons";

export function CvOptions({ cv }: { cv: Dictionary["cv"] }) {
  return (
    <>
      {cv.options.map((o) => (
        <a key={o.href} className="cv-option" href={o.href} download>
          <div>
            <span className="tiny-label">{o.label}</span>
            <h3>{o.title}</h3>
            <p>{o.text}</p>
          </div>
          <span className="download-icon">
            <DownloadIcon />
          </span>
          <span className="sr-only">{cv.download}</span>
        </a>
      ))}
      <p className="cv-other">
        {cv.otherLabel}{" "}
        {cv.other.map((o, i) => (
          <span key={o.href}>
            {i > 0 && " · "}
            <a className="text-link" href={o.href} download>
              {o.label}
            </a>
          </span>
        ))}
      </p>
    </>
  );
}
