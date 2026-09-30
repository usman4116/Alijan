"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SiteMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1 });
    const update = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      gsap.to(".hero-media", {
        scale: 1.13,
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(".hero-content", {
        yPercent: -18,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "20% top", end: "bottom top", scrub: 1 },
      });

      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 42, opacity: 0.45 }, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 86%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".journey-panel").forEach((panel) => {
        const media = panel.querySelector(".journey-media");
        if (media) gsap.fromTo(media, { scale: 1.12 }, {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: panel, start: "top bottom", end: "bottom top", scrub: 1 },
        });
      });

      const blueprint = gsap.utils.toArray<SVGPathElement>(".blueprint-line");
      blueprint.forEach((line) => {
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
      });
      gsap.to(blueprint, {
        strokeDashoffset: 0,
        stagger: 0.07,
        ease: "none",
        scrollTrigger: { trigger: ".blueprint-scene", start: "top 70%", end: "bottom 75%", scrub: 1 },
      });

      gsap.to(".progress-line", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.2 },
      });
    });

    return () => {
      context.revert();
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <div className="progress-line" aria-hidden="true" />;
}
