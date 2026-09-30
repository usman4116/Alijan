import Image from "next/image";
import { DraftingCompass, HardHat, Shield, Wrench } from "lucide-react";
import { capabilities, profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutCapabilities() {
  return (
    <>
      <section className="about-section paper-section" id="about">
        <div className="page-shell about-grid">
          <div className="identity-plate" data-reveal>
            <div className="identity-photo-bg" aria-hidden="true">
              <Image
                src={profile.avatar}
                alt="Ali Jan - Civil Engineer and HSE Professional"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
              <div className="identity-photo-tint" />
            </div>
            <div className="identity-grid" aria-hidden="true" />
            <div className="identity-top-row">
              <span className="identity-code">PROFILE / AJ–01</span>
              <span className="identity-badge"><i />Field Engineer</span>
            </div>
            <strong className="identity-initials" aria-hidden="true">AJ</strong>
            <div className="identity-bottom-info">
              <div className="identity-disciplines"><span>Civil</span><span>Construction</span><span>HSE</span></div>
              <small>Professional Identity Plate<br />Ali Jan · Civil & HSE Professional</small>
            </div>
          </div>
          <div className="about-copy">
            <SectionHeading eyebrow="Engineer behind the work" title="Built across drawing, site and safety." />
            <p className="about-lead">{profile.summary}</p>
            <p>Ali Jan&apos;s documented experience spans construction planning and supervision, architectural drafting, site inspection, safety coordination and hazardous-work watch responsibilities.</p>
            <blockquote>“{profile.statement}”</blockquote>
            <div className="profile-facts">
              <div><HardHat aria-hidden="true" /><small>Focus</small><strong>Civil + HSE</strong></div>
              <div><Shield aria-hidden="true" /><small>Training</small><strong>NEBOSH</strong></div>
              <div><DraftingCompass aria-hidden="true" /><small>Technical</small><strong>AutoCAD</strong></div>
              <div><Wrench aria-hidden="true" /><small>Practice</small><strong>Site execution</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities-section paper-section">
        <div className="page-shell">
          <SectionHeading eyebrow="Engineering capabilities" title="Practical disciplines. One execution mindset." copy={<p>Capabilities below are grounded in the supplied professional profile—never percentage-rated or inflated.</p>} />
          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <article className="capability-item" key={capability.name} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{capability.name}</h3><p>{capability.description}</p></div>
                <div className="capability-tags">{capability.disciplines.map((tag) => <small key={tag}>{tag}</small>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
