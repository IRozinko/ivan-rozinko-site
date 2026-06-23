const drafts = [
  ['QA is not a department. It is a risk-control system.', 'A positioning article about moving from test cases to release-risk ownership.'],
  ['Most payment bugs are not calculation bugs. They are state bugs.', 'A fintech note about balances, fees, retries, callbacks and user-facing statuses.'],
  ['Platform engineering is not DevOps rebranding.', 'A technical leadership post about internal platforms, golden paths and operational ownership.'],
  ['AI agents need release gates too.', 'A practical post about AI reliability, prompt regression, tool-use permissions and audit trails.'],
  ['Embedded-to-cloud systems fail at boundaries.', 'A cross-layer reliability note about firmware, telemetry, backend assumptions and operations.'],
];

export default function WritingPage() {
  return (
    <main>
      <nav className="nav"><a className="brand" href="/">IR</a><div><a href="/about">About</a><a href="/services">Services</a><a href="/case-studies">Case studies</a><a href="/cv">CV Pack</a></div></nav>
      <section className="section hero">
        <div className="eyebrow">Writing</div>
        <h1>Notes on critical systems, platform reliability, fintech risk and AI production readiness.</h1>
        <p className="lead">This page is a placeholder for short, high-signal articles and LinkedIn-style essays. The initial topics are designed to support the market positioning.</p>
      </section>
      <section className="section grid two">
        {drafts.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
      </section>
    </main>
  );
}
