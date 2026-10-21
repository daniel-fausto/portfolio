"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./icons";

export function BackToTop({ label }: { label: string }) {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("about");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), {
      rootMargin: "-90px 0px 0px 0px",
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a className="back-to-top" hidden={hidden} href="#top" aria-label={label} title={label}>
      <ArrowUpIcon />
      <span>{label}</span>
    </a>
  );
}
