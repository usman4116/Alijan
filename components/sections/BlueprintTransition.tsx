export function BlueprintTransition() {
  return (
    <section className="blueprint-scene" id="engineering" aria-labelledby="blueprint-title">
      <div className="blueprint-grid" aria-hidden="true" />
      <svg className="blueprint-drawing" viewBox="0 0 1200 700" role="img" aria-label="Conceptual structural drawing transforming into a building frame">
        <path className="blueprint-line" d="M100 610H1100" />
        <path className="blueprint-line" d="M185 610V230H440V610M440 610V120H770V610M770 610V280H1030V610" />
        <path className="blueprint-line" d="M185 510H1030M185 405H1030M185 300H1030M440 195H770" />
        <path className="blueprint-line" d="M185 230L440 120M770 120L1030 280M100 650H1100M100 638V662M1100 638V662" />
        <path className="blueprint-line blueprint-line--fine" d="M240 510V610M330 510V610M505 510V610M620 510V610M705 510V610M835 510V610M940 510V610" />
        <path className="blueprint-line blueprint-line--fine" d="M60 610V120M48 120H72M48 610H72" />
      </svg>
      <div className="blueprint-notes" aria-hidden="true"><span>EL +12.600</span><span>GRID B / 04</span><span>SECTION A–A</span><span>1:100</span></div>
      <div className="blueprint-copy page-shell" data-reveal>
        <span className="eyebrow">Real construction → technical intent</span>
        <h2 id="blueprint-title">From design<br />to <em>execution.</em></h2>
        <p>Plans establish intent. Coordination, inspection and documentation carry that intent into the built environment.</p>
      </div>
    </section>
  );
}
