import { Award, BookOpen, DraftingCompass, Route } from "lucide-react";
import { education } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

const toolkit = [
  { icon: DraftingCompass, label: "AutoCAD", type: "Technical drafting" },
  { icon: Award, label: "NEBOSH", type: "Professional development" },
  { icon: Route, label: "TMS", type: "Profile-listed skill" },
  { icon: BookOpen, label: "Fire safety", type: "Profile-listed skill" },
];

export function Credentials() {
  return (
    <section className="credentials-section paper-section" id="certifications" aria-labelledby="credentials-title">
      <div className="page-shell">
        <SectionHeading eyebrow="Education & professional development" title="Technical grounding. Safety discipline." copy={<p id="credentials-title">Credential titles and dates follow the supplied profile; no unprovided grades, IDs or expiry dates are implied.</p>} />
        <div className="credential-layout">
          <div className="education-list">
            {education.map((entry, index) => (
              <article key={`${entry.title}-${entry.period}`} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><small>{entry.type} · {entry.period}</small><h3>{entry.title}</h3><p>{entry.institution}</p></div>
              </article>
            ))}
          </div>
          <aside className="toolkit" data-reveal>
            <span className="eyebrow">Engineering toolkit</span>
            <h3>Tools and profile-listed skills.</h3>
            <div>{toolkit.map(({ icon: Icon, label, type }) => <article key={label}><Icon aria-hidden="true" /><span><strong>{label}</strong><small>{type}</small></span></article>)}</div>
            <p>Also listed: Transportation and Qatar Gas Approved. The latter is presented as a profile descriptor, not an independently verified credential.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
