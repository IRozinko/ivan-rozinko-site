const auditAreas = ['Architecture and ownership boundaries', 'CI/CD and release gates', 'QA strategy and automation coverage', 'Platform reliability and cloud infrastructure', 'Observability and incident readiness', 'Security and compliance evidence', 'Payment / transaction / money-flow risks', 'AI agent / LLM workflow risks', 'Embedded-to-cloud boundary risks', 'Team process and delivery risk'];

export default function NorthbridgePage() {
  return (
    <main>
      <nav className="nav"><a className="brand" href="/">IR</a><div><a href="/about">About</a><a href="/services">Services</a><a href="/case-studies">Case studies</a><a href="/cv">CV</a><span className="langSwitch"><a className="active" href="/northbridge">EN</a><a href="/ua">UA</a></span></div></nav>
      <section className="section hero">
        <div className="eyebrow">Northbridge Critical Systems</div>
        <h1>Technical-risk and resilience advisory for systems where failure is expensive.</h1>
        <p className="lead">Northbridge is the advisory layer: a focused practice around critical systems risk, platform reliability, release readiness, payment/Web3 risk, AI reliability and regulated delivery.</p>
      </section>
      <section className="section split">
        <div>
          <div className="eyebrow">Core offer</div>
          <h2>Critical Systems Risk Audit</h2>
          <p>A compact engagement that maps the highest technical and operational risks into a prioritized remediation roadmap for founders, CTOs and engineering leaders.</p>
        </div>
        <div className="card accent"><h3>Assessment areas</h3><ul>{auditAreas.map((area) => <li key={area}>{area}</li>)}</ul></div>
      </section>
      <section className="section grid two">
        <a className="card repo" href="https://github.com/IRozinko/northbridge-critical-systems" target="_blank" rel="noreferrer"><h3>Northbridge repository</h3><p>Frameworks, audit structure and public advisory materials.</p></a>
        <a className="card repo" href="/services"><h3>Services</h3><p>Review advisory packages and engagement types.</p></a>
      </section>
    </main>
  );
}
