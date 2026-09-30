import Image from "next/image";

const scenes = [
  { index: "A", title: "Infrastructure", label: "Road construction", copy: "Planning, traffic separation, heavy equipment and disciplined work-zone execution.", image: "/media/road-work.jpg", alt: "Road crew operating asphalt machinery at night" },
  { index: "B", title: "Structural thinking", label: "Bridge systems", copy: "Loads, material interfaces, inspection access and the clarity of engineered connections.", image: "/media/bridge.jpg", alt: "Pillars and suspension cables of a modern bridge" },
  { index: "C", title: "Project execution", label: "Vertical construction", copy: "Drawing intent carried through sequencing, supervision, inspection and safe site coordination.", image: "/media/tower.jpg", alt: "Concrete high-rise buildings and a tower crane" },
];

export function InfrastructureJourney() {
  return (
    <section className="infrastructure" aria-labelledby="infrastructure-title">
      <header className="infrastructure-head page-shell" data-reveal>
        <span className="eyebrow">Engineering environments / editorial context</span>
        <h2 id="infrastructure-title">Scale changes.<br /><em>Discipline remains.</em></h2>
        <p>These licensed images establish industry context. They are not Ali Jan&apos;s projects or worksites.</p>
      </header>
      <div className="journey-panels">
        {scenes.map((scene) => (
          <article className="journey-panel" key={scene.index}>
            <div className="journey-media"><Image src={scene.image} alt={scene.alt} fill sizes="100vw" /></div>
            <div className="journey-shade" />
            <div className="journey-copy page-shell" data-reveal>
              <span>Scene {scene.index} / {scene.label}</span>
              <h3>{scene.title}</h3><p>{scene.copy}</p>
            </div>
            <p className="editorial-note">Licensed editorial context — not an Ali Jan project</p>
          </article>
        ))}
      </div>
    </section>
  );
}
