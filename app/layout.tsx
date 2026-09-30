import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import { SiteMotion } from "@/components/animations/SiteMotion";
import "./globals.css";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const body = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://alijan.engineer"),
  title: "Ali Jan",
  description: "Ali Jan is a civil engineering and HSE professional with experience in construction supervision, architectural drafting, site safety and project execution.",
  keywords: ["Ali Jan", "Civil Engineer", "HSE Professional", "Safety Professional", "Construction Engineer", "Project Execution", "NEBOSH"],
  openGraph: { title: "Ali Jan", description: "Civil Engineering · Construction · HSE · Project Execution", type: "profile", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AJ — Civil Engineering and HSE" }] },
  twitter: { card: "summary_large_image", title: "Ali Jan", description: "Civil Engineering · Construction · HSE · Project Execution", images: ["/opengraph-image"] },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Ali Jan",
    jobTitle: "Civil Engineer & HSE Professional",
    description: "Civil engineering professional with construction supervision, architectural drafting and HSE experience.",
    email: "mailto:alijan.official6@gmail.com",
    sameAs: ["https://www.linkedin.com/in/ali-jan-034a51309/"],
    knowsAbout: ["Civil engineering", "Construction supervision", "Health, safety and environment", "Architectural drafting", "AutoCAD"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <SiteMotion />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
