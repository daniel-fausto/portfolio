import type { ReactNode } from "react";

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export const MailIcon = () => (
  <Svg>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Svg>
);

export const DownloadIcon = () => (
  <Svg>
    <path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4" />
  </Svg>
);

export const ExternalIcon = () => (
  <Svg>
    <path d="M15 3h6v6M21 3l-9 9" />
    <path d="M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
  </Svg>
);

export const PlusIcon = () => (
  <Svg>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const ArrowUpIcon = () => (
  <Svg>
    <path d="M12 20V4m-7 7 7-7 7 7" />
  </Svg>
);

export const CloseIcon = () => (
  <Svg>
    <path d="m6 6 12 12M18 6 6 18" />
  </Svg>
);

export const LayersIcon = () => (
  <Svg>
    <path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5" />
  </Svg>
);

export const ChipIcon = () => (
  <Svg>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
  </Svg>
);

export const CapIcon = () => (
  <Svg>
    <path d="m2 8 10-5 10 5-10 5L2 8Zm4 2v7c4 3 8 3 12 0v-7M22 8v8" />
  </Svg>
);

export const CopyIcon = () => (
  <Svg>
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
  </Svg>
);

export const CheckIcon = () => (
  <Svg>
    <path d="m5 12 5 5 9-10" />
  </Svg>
);

function Brand({ d }: { d: string }) {
  return (
    <svg className="icon brand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d={d} />
    </svg>
  );
}

export const GitHubIcon = () => (
  <Brand d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.6-2.67-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.62-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
);

export const LinkedInIcon = () => (
  <Brand d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0h.01Z" />
);
