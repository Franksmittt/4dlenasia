import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { StickyBookingFooter } from "@/components/interaction/StickyBookingFooter";
import { PreviewLock } from "@/components/lockscreen/PreviewLock";
import { ClarityAnalytics } from "@/components/analytics/ClarityAnalytics";
import { clinicSchema } from "@/lib/seo/schema";
import { PREVIEW_LOCKED, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Premium 4D Baby Scans in Lenasia`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Meet your baby before they are born. Warm, unhurried 2D gender and 4D ultrasound experiences in Lenasia, guided by Nasreen Ali, B.Tech Radiography (UJ).",
  openGraph: {
    title: `${SITE.name} | Meet Your Baby Before They Are Born`,
    description:
      "Johannesburg South's boutique ultrasound studio. 2D gender and 4D bonding scans with clinical expertise and maternal care.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_ZA",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 900, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Meet Your Baby Before They Are Born`,
    description:
      "Johannesburg South's boutique ultrasound studio. 2D gender and 4D bonding scans with clinical expertise and maternal care.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: SITE.url },
  robots: PREVIEW_LOCKED ? { index: false, follow: false } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = PREVIEW_LOCKED ? null : clinicSchema();

  return (
    <html
      lang="en-ZA"
      className={`${outfit.variable} ${fraunces.variable} h-full`}
    >
      <body
        className={cn(
          "min-h-full flex flex-col antialiased bg-canvas text-ink",
          PREVIEW_LOCKED && "overflow-hidden",
        )}
      >
        {PREVIEW_LOCKED ? (
          <PreviewLock />
        ) : (
          <>
            {schema ? (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
              />
            ) : null}
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <StickyBookingFooter />
          </>
        )}
        <Analytics />
        <ClarityAnalytics />
      </body>
    </html>
  );
}
