"use client";

import { useRef } from "react";
import type { Dictionary } from "@/app/content";
import { CvOptions } from "./CvOptions";
import { CloseIcon, DownloadIcon } from "./icons";

export function CvDialog({ label, cv }: { label: string; cv: Dictionary["cv"] }) {
  const ref = useRef<HTMLDialogElement>(null);
  const close = () => ref.current?.close();

  return (
    <>
      <button type="button" className="button button-outline" onClick={() => ref.current?.showModal()}>
        {label}
        <DownloadIcon />
      </button>
      <dialog
        ref={ref}
        aria-labelledby="cv-dialog-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
          else if ((e.target as HTMLElement).closest("a[download]")) close();
        }}
      >
        <button type="button" className="dialog-close" aria-label={cv.close} onClick={close}>
          <CloseIcon />
        </button>
        <p className="eyebrow">{cv.eyebrow}</p>
        <h2 id="cv-dialog-title">{cv.dialogTitle}</h2>
        <p>{cv.dialogText}</p>
        <CvOptions cv={cv} />
      </dialog>
    </>
  );
}
