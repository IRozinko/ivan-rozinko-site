const cases = [
  ['FinTech Fee Service & Payment Risk', 'Risk-based review of fee logic, user-facing transaction states, limits, balances and edge cases where product behavior directly affects trust and money movement.', 'FinTech / Web3 / QA Risk'],
  ['QA Strategy for Cloud Microservices', 'A release-confidence approach for cloud-native services: API behavior, integration risk, automation priorities, regression scope and CI/CD quality gates.', 'QA / AQA / Release Risk'],
  ['Platform Reliability & CI/CD Control', 'Operational readiness across deployment pipelines, infrastructure, monitoring, rollback paths and production ownership for business-critical systems.', 'Platform / SRE / DevOps'],
  ['Firmware-to-Software Systems Thinking', 'Low-level engineering experience translated into stronger reasoning about state, constraints, timing, boundaries and hidden failure modes in modern software systems.', 'Firmware / Software'],
  ['Regulated IT & Audit-Ready Delivery', 'Technical documentation, stakeholder alignment and evidence-ready delivery in environments where systems must satisfy business, operational and regulatory expectations.', 'Regulated Systems'],
];

export default function CaseStudiesPage() {
  return (
    <main>
      <nav className="nav"><a className="brand" href="/">IR</a><div><a href="/about">About</a><a href="/services">Services</a><a href="/cv">CV</a><a href="/northbridge">Northbridge</a><span className="langSwitch"><a className="active" href="/case-studies">EN</a><a href="/ua">UA</a></span></div></nav>
      <section className="section hero">
        <div className="eyebrow">Case studies</div>
        <h1>Selected experience patterns across critical systems, fintech risk, platform reliability and regulated delivery.</h1>
        <p className="lead">These case studies are written as public, NDA-safe summaries. They focus on risk, operating context and reusable engineering lessons rather than confidential client details.</p>
      </section>
      <section className="section grid two">
        {cases.map(([title, text, tag]) => (
          <article className="card" key={title}>
            <div className="eyebrow">{tag}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
