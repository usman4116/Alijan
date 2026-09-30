import Image from "next/image";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function ClosingScene() {
  return (
    <>
      <section className="values-section" aria-label="Professional principles">
        <div className="values-track">
          <span>Safety first</span><i>+</i><span>Engineering excellence</span><i>+</i><span>Quality execution</span><i>+</i><span>Continuous improvement</span>
        </div>
      </section>
      <section className="completion-scene" aria-labelledby="completion-title">
        <Image src="/media/hero-site.jpg" alt="Construction site in misty early-morning light" fill sizes="100vw" />
        <div className="completion-shade" />
        <div className="completion-sequence" aria-hidden="true"><span>Build</span><i /><span>Inspect</span><i /><span>Protect</span><i /><span>Execute</span><i /><span>Deliver</span></div>
        <div className="completion-copy page-shell" data-reveal><span className="eyebrow eyebrow--amber">The completed-project mindset</span><h2 id="completion-title">Engineering<br /><em>with purpose.</em></h2><p>Civil engineering <span>•</span> HSE <span>•</span> Project execution</p><a className="button button--primary" href="#contact">Let&apos;s connect <ArrowRight aria-hidden="true" /></a></div>
        <p className="editorial-note">Licensed editorial context — not an Ali Jan project</p>
      </section>
      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-lines" aria-hidden="true" />
        <div className="page-shell contact-grid">
          <div data-reveal><span className="eyebrow">Contact / Open to conversation</span><h2 id="contact-title">Build something safer.<br /><em>Build something better.</em></h2></div>
          <div className="contact-actions" data-reveal>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" /><span><small>Professional network</small><strong>Connect on LinkedIn</strong></span><ArrowRight aria-hidden="true" /></a>
            <a href={`mailto:${profile.email}`}><Mail aria-hidden="true" /><span><small>Direct enquiry</small><strong>{profile.email}</strong></span><ArrowRight aria-hidden="true" /></a>
            <a href={`mailto:${profile.email}?subject=CV%20request`}><span className="cv-mark">CV</span><span><small>Public-safe copy</small><strong>Request my CV</strong></span><ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </>
  );
}
