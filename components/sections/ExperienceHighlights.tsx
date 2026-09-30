import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { highlights } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceHighlights() {
  return (
    <section className="highlights-section" id="projects" aria-labelledby="highlights-title">
      <div className="highlights-image"><Image src="/media/scaffold.jpg" alt="Silhouetted workers on a scaffolding structure" fill sizes="(max-width: 900px) 100vw, 42vw" /><span>Licensed editorial context<br />not an Ali Jan project</span></div>
      <div className="highlights-content">
        <SectionHeading light eyebrow="Selected work / evidence-led" title="Experience highlights." copy={<p id="highlights-title">The supplied profile contains no named projects. These case notes stay strictly within documented roles and responsibilities.</p>} />
        <div className="highlight-list">
          {highlights.map((highlight) => (
            <article key={highlight.number} data-reveal>
              <span>{highlight.number}</span><div><small>{highlight.context}</small><h3>{highlight.title}</h3><p>{highlight.description}</p><div>{highlight.tags.map((tag) => <em key={tag}>{tag}</em>)}</div></div><ArrowUpRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
