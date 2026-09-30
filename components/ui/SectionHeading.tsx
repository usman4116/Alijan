import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  copy?: ReactNode;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, copy, light = false }: SectionHeadingProps) {
  return (
    <header className={`section-heading${light ? " section-heading--light" : ""}`} data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <div className="section-intro">{copy}</div>}
    </header>
  );
}
