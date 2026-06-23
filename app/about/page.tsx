const layers = [
  ['Firmware & low-level', 'C/C++, FPGA and embedded-level thinking: constraints, state, timing, boundaries and failure modes.'],
  ['Software engineering', 'Java, Go, Node.js and backend/product delivery across business-critical services.'],
  ['QA / AQA leadership', 'Automation, test strategy, risk-based coverage, release confidence and quality gates.'],
  ['Platform / DevOps', 'Cloud, Kubernetes, Terraform, CI/CD, monitoring, incident readiness and operational ownership.'],
  ['FinTech / Web3', 'Wallets, fees, balances, limits, transaction states, crypto/payment flows and edge-case thinking.'],
  ['Regulated systems', 'Audit-ready documentation, SAP/DataHub/NKREKP-style work, compliance evidence and stakeholder communication.'],
];

export default function AboutPage() {
  return (
    <main>
      <nav className="nav"><a className="brand" href="/">IR</a><div><a href="/services">Services</a><a href="/case-studies">Case studies</a><a href="/cv">CV Pack</a><a href="/northbridge">Northbridge</a></div></nav>
      <section className="section hero">
        <div className="eyebrow">About</div>
        <h1>Cross-layer technical leadership for systems where failure is expensive.</h1>
        <p className="lead">My background sits across firmware, software engineering, QA/AQA, cloud/platform, fintech/Web3, CTO-level ownership and regulated enterprise environments. The common thread is not a single stack. It is the ability to see how complex systems fail across boundaries and turn that risk into a controlled engineering plan.</p>
      </section>
      <section className="section grid two">
        <div>
          <div className="eyebrow">Operating model</div>
          <h2>From code and firmware to production, audit and business impact.</h2>
          <p>I work best where teams need more than implementation: architecture judgement, release discipline, risk prioritization, system boundaries, observability, quality strategy and stakeholder-ready communication.</p>
        </div>
        <div className="card accent">
          <h3>Positioning</h3>
          <p>Critical Systems / Platform / Reliability Engineering Leader helping fintech, Web3, SaaS, AI and regulated teams reduce platform, delivery and operational risk.</p>
        </div>
      </section>
      <section className="section">
        <div className="eyebrow">Experience layers</div>
        <h2>What the T-shaped experience becomes</h2>
        <div className="grid three">
          {layers.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
    </main>
  );
}
