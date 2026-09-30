import { MapPin } from "lucide-react";
import { experiences } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceTimeline() {
  return (
    <section className="experience-section paper-section" id="experience" aria-labelledby="experience-title">
      <div className="page-shell">
        <SectionHeading eyebrow="Professional journey" title="A career line across construction and HSE." copy={<p>Roles are presented in reverse chronology exactly as listed in the supplied profile. Dates overlap, so no cumulative-years claim is made.</p>} />
        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="timeline-entry" key={experience.id} data-reveal>
              <div className="timeline-date"><span>{experience.period}</span><small><MapPin aria-hidden="true" />{experience.location}</small></div>
              <div className="timeline-node"><i /><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="timeline-content">
                <small>{experience.company}</small><h3>{experience.role}</h3>
                {experience.detailStatus === "title-only" ? <p className="source-note">Role and dates are listed in the supplied profile; no responsibilities were provided.</p> : <ul>{experience.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>}
                <div className="timeline-tags">{experience.disciplines.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
