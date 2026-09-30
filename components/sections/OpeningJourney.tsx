import Image from "next/image";
import { Check, HardHat, ShieldCheck } from "lucide-react";

const siteLabels = ["Structural frame", "Reinforcement", "Foundation", "Site execution"];
const inspectionSteps = ["Site entry", "PPE check", "Work area inspection", "Equipment check", "Hazard identification", "Risk control", "Compliance"];

export function OpeningJourney() {
  return (
    <>
      <section className="construction-scene dark-scene" id="site-entry">
        <div className="scene-photo scene-photo--steel"><Image src="/media/steel-work.jpg" alt="Steel framework and workers in high-visibility clothing at a construction site" fill sizes="100vw" /></div>
        <div className="scene-overlay" />
        <div className="page-shell scene-content">
          <span className="scene-index">SITE / STRUCTURE</span>
          <div className="scene-title" data-reveal><p>Civil engineering</p><h2>Design.<br />Build. <em>Execute.</em></h2></div>
          <div className="site-annotations" aria-label="Engineering context">
            {siteLabels.map((label, index) => <span key={label} style={{ "--i": index } as React.CSSProperties}>{label}<i /></span>)}
          </div>
        </div>
        <p className="editorial-note">Editorial construction context — not an Ali Jan project</p>
      </section>

      <section className="safety-gate dark-scene" id="hse">
        <div className="gate-bars" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="page-shell gate-content">
          <div className="gate-sign" data-reveal><HardHat aria-hidden="true" /><span>Controlled access</span></div>
          <div className="gate-copy" data-reveal>
            <span className="eyebrow eyebrow--amber">Enter the safety zone</span>
            <h2>Safety<br /><em>first.</em></h2>
            <p>Safety is not an additional task. It is part of every successful project.</p>
          </div>
          <div className="ppe-strip" data-reveal>
            {[["01", "Helmet"], ["02", "Vest"], ["03", "Boots"], ["04", "Gloves"]].map(([n, label]) => <div key={n}><small>{n}</small><strong>{label}</strong><Check aria-hidden="true" /></div>)}
          </div>
        </div>
      </section>

      <section className="inspection-section">
        <div className="inspection-media"><Image src="/media/safety-team.jpg" alt="Construction workers wearing helmets and safety vests" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className="inspection-console">
          <div className="console-head"><span>HSE inspection sequence</span><ShieldCheck aria-hidden="true" /></div>
          <h2>Observe the work.<br /><em>Control the risk.</em></h2>
          <ol className="inspection-list">
            {inspectionSteps.map((step, index) => <li key={step} data-reveal><small>{String(index + 1).padStart(2, "0")}</small><span>{step}</span><i>{index < 4 ? "CHECK" : "CONTROL"}</i></li>)}
          </ol>
          <p className="interface-disclaimer">Illustrative HSE workflow—not a record of site inspection results.</p>
        </div>
      </section>
    </>
  );
}
