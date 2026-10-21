import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { SITE_URL, dictionaries, hasLocale, locales } from "../content";
import { getYears } from "../years";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = dictionaries[lang];
  const description = meta.description.replace("{years}", String(await getYears()));
  const url = `${SITE_URL}/${lang}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description,
    alternates: {
      canonical: url,
      languages: { es: `${SITE_URL}/es`, en: `${SITE_URL}/en`, "x-default": `${SITE_URL}/en` },
    },
    openGraph: {
      type: "profile",
      url,
      title: meta.title,
      description,
      locale: meta.ogLocale,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: meta.title }],
    },
    twitter: { card: "summary_large_image", title: meta.title, description, images: ["/og.png"] },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body id="top">{children}</body>
    </html>
  );
}
