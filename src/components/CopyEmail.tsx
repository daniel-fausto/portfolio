"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

type Props = { email: string; label: string; copied: string; failed: string };

export function CopyEmail({ email, label, copied, failed }: Props) {
  const [status, setStatus] = useState("");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus(copied);
    } catch {
      setStatus(failed);
      const target = document.querySelector(".email-link");
      const selection = window.getSelection();
      if (target && selection) {
        const range = document.createRange();
        range.selectNodeContents(target);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };

  return (
    <>
      <button type="button" className="copy-email text-link" onClick={copy}>
        {status === copied ? <CheckIcon /> : <CopyIcon />}
        {status === copied ? copied : label}
      </button>
      <span className="sr-only" role="status">
        {status}
      </span>
    </>
  );
}
