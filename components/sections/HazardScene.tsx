import { AlertTriangle, ArrowDown, ShieldCheck } from "lucide-react";

const hazards = [
  { code: "WAH", name: "Working at height", risk: "Fall from an elevated work area", control: "Appropriate fall protection and controlled access" },
  { code: "EXC", name: "Excavation", risk: "Collapse, fall or contact with services", control: "Shoring, barriers, access planning and service checks" },
  { code: "HME", name: "Heavy machinery", risk: "Collision, crush points or restricted visibility", control: "Segregated routes, exclusion zones and communication" },
  { code: "ELE", name: "Electrical work", risk: "Shock, arc or contact with live systems", control: "Isolation, verification and authorized access" },
  { code: "FOB", name: "Falling objects", risk: "Materials or tools striking people below", control: "Secure loads, exclusion zones and head protection" },
  { code: "CSE", name: "Confined spaces", risk: "Hazardous atmosphere and restricted rescue", control: "Atmospheric monitoring, communication and controlled entry" },
];

export function HazardScene() {
  return (
    <section className="hazard-section" aria-labelledby="hazard-title">
      <div className="hazard-head page-shell" data-reveal>
        <span className="eyebrow">Hazard intelligence / 06 controls</span>
        <h2 id="hazard-title">Identify what can harm.<br /><em>Control what can happen.</em></h2>
        <p>Responsible execution begins before work starts. Each control below is general safety context, not site-specific instruction.</p>
      </div>
      <div className="hazard-grid page-shell">
        {hazards.map((hazard, index) => (
          <article className="hazard-card" key={hazard.code} data-reveal>
            <header><span>{hazard.code}</span><small>{String(index + 1).padStart(2, "0")}</small></header>
            <AlertTriangle aria-hidden="true" />
            <h3>{hazard.name}</h3>
            <div className="hazard-flow"><span>Hazard</span><ArrowDown aria-hidden="true" /><span>Risk</span><ArrowDown aria-hidden="true" /><span>Control</span></div>
            <dl><div><dt>Risk</dt><dd>{hazard.risk}</dd></div><div><dt><ShieldCheck size={14} aria-hidden="true" /> Control</dt><dd>{hazard.control}</dd></div></dl>
          </article>
        ))}
      </div>
    </section>
  );
}
