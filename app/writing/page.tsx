const articles = [
  ['QA is not a department. It is a risk-control system.', 'Moving from test cases and late validation to release-risk ownership and business-critical quality signals.'],
  ['Most payment bugs are not calculation bugs. They are state bugs.', 'A fintech note about balances, fees, retries, callbacks, provider timing and user-facing transaction states.'],
  ['Platform engineering is not DevOps rebranding.', 'A technical leadership note about internal platforms, golden paths, operational ownership and delivery discipline.'],
  ['AI agents need release gates too.', 'A practical perspective on AI reliability, prompt regression, tool-use permissions, audit trails and production readiness.'],
  ['Embedded-to-cloud systems fail at boundaries.', 'A cross-layer reliability note about firmware, telemetry, backend assumptions, support tooling and field operations.'],
];

export default function WritingPage() {
  return (
    <main>
      <nav className="nav"><a className="brand" href="/">IR</a><div><a href="/about">About</a><a href="/services">Services</a><a href="/case-studies">Case studies</a><a href="/cv">CV</a><span className="langSwitch"><a className="active" href="/writing">EN</a><a href="/ua">UA</a></span></div></nav>
      <section className="section hero">
        <div className="eyebrow">Writing</div>
        <h1>Field notes on critical systems, platform reliability, fintech risk and AI production readiness.</h1>
        <p className="lead">Short, high-signal essays for engineering leaders who care about release confidence, operational resilience, payment correctness, AI reliability and systems that have to work under pressure.</p>
      </section>
      <section className="section grid two">
        {articles.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
      </section>
    </main>
  );
}
