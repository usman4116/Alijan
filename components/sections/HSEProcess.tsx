import { Check, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const process = [
  ["Identify", "Observe the task, environment, people and interfaces."],
  ["Assess", "Consider likelihood, consequence and who may be affected."],
  ["Control", "Apply appropriate hierarchy and defined work controls."],
  ["Monitor", "Inspect conditions, communication and ongoing compliance."],
  ["Improve", "Document, coordinate and carry learning forward."],
];

const supported = [
  "Site and work-area inspection",
  "PPE checks and compliance support",
  "Hazard identification and risk-control recommendations",
  "Toolbox talks and safety documentation",
  "Hot-work fire prevention monitoring",
  "Confined-space communication and atmospheric monitoring",
  "Gas-level checks and detection equipment use",
  "Unsafe-condition and emergency response support",
];

export function HSEProcess() {
  return (
    <section className="hse-process dark-scene" aria-labelledby="hse-process-title">
      <div className="page-shell">
        <SectionHeading light eyebrow="Health · Safety · Environment" title="Safety is built into the project." copy={<p>Supported HSE responsibilities presented alongside a clear, generic control process.</p>} />
        <div className="process-line" aria-label="HSE improvement process">
          {process.map(([title, copy], index) => (
            <article key={title} data-reveal><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p>{index < process.length - 1 && <ChevronRight aria-hidden="true" />}</article>
          ))}
        </div>
        <div className="hse-evidence" data-reveal>
          <div><span className="eyebrow eyebrow--amber">Documented practice areas</span><h3>From entry control to hazardous-work watch.</h3></div>
          <ul>{supported.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
