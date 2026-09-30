import Image from "next/image";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function HeroScene() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <Image src="/media/hero-site.jpg" alt="" fill priority sizes="100vw" />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-rail" aria-hidden="true"><span>31° 28′ N</span><span>SITE / 001</span></div>
      <div className="hero-content page-shell">
        <div className="hero-main-row">
          <div className="hero-headline-group">
            <p className="hero-kicker">Civil Engineering <i /> Health, Safety & Environment</p>
            <h1 id="hero-title">ALI<br /><em>JAN</em></h1>
          </div>
          <div className="hero-square-container" data-reveal aria-label="Ali Jan tilted portrait">
            <div className="hero-square-wireframe" aria-hidden="true">
              <span className="square-tick tick-tl">+</span>
              <span className="square-tick tick-tr">+</span>
              <span className="square-tick tick-bl">+</span>
              <span className="square-tick tick-br">+</span>
            </div>
            <div className="hero-square-frame">
              <div className="hero-square-tag-top">
                <span>AJ // SITE 001</span>
                <span className="square-status"><i />Active</span>
              </div>
              <div className="hero-square-media">
                <Image
                  src={profile.avatar}
                  alt="Ali Jan - Civil Engineer and HSE Professional"
                  fill
                  priority
                  sizes="(max-width: 800px) 280px, (max-width: 1200px) 340px, 420px"
                />
                <div className="hero-square-grid" aria-hidden="true" />
              </div>
              <div className="hero-square-tag-bottom">
                <strong>Ali Jan</strong>
                <small>Civil & HSE</small>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-lower">
          <div>
            <p className="hero-role">Civil Engineer & HSE Professional</p>
            <p className="hero-support">Civil Engineering <span>•</span> Construction <span>•</span> Safety <span>•</span> Project Execution</p>
          </div>
          <div className="hero-actions">
            <a className="button button--primary" href="#projects">Explore my work <ArrowRight aria-hidden="true" /></a>
            <a className="button button--line" href={`mailto:${profile.email}`}>Contact me <Mail aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#site-entry"><span>Scroll to enter site</span><ArrowDown aria-hidden="true" /></a>
      <p className="editorial-note">Editorial construction context — not an Ali Jan project</p>
    </section>
  );
}
