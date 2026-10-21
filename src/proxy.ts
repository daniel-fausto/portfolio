import { NextResponse, type NextRequest } from "next/server";

function preferredLocale(header: string | null): "es" | "en" {
  const ranked = (header ?? "")
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().slice(0, 2), q: q ? Number(q) : 1 };
    })
    .filter((l) => l.lang === "es" || l.lang === "en")
    .sort((a, b) => b.q - a.q);
  return ranked[0]?.lang === "es" ? "es" : "en";
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request.headers.get("accept-language"))}`;
  return NextResponse.redirect(url);
}

export const config = { matcher: "/" };
