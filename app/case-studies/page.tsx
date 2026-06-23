const cases = [
  ['FinTech Fee Service & Payment Risk', 'Risk-based validation of fee logic, user-facing states, limits and transaction edge cases in a fintech environment.', 'FinTech / Web3 / QA Risk'],
  ['QA Strategy for Cloud Microservices', 'Automation and release-confidence strategy for a cloud-native microservice product with API, backend and CI/CD risks.', 'QA / AQA / Release Risk'],
  ['Platform Reliability & CI/CD Control', 'Operational-readiness work across CI/CD, infrastructure, monitoring, rollback and release gates.', 'Platform / SRE / DevOps'],
  ['Firmware-to-Software Systems Thinking', 'Low-level engineering background applied to complex systems, state boundaries and reliability thinking.', 'Firmware / Software'],
  ['Regulated IT & Audit-Ready Delivery', 'Technical documentation, stakeholder alignment and delivery support in a regulated enterprise environment.', 'Regulated Systems'],
];

export default function CaseStudiesPage() {
  return (
    <main>
      <nav className="nav"><a className="brand" href="/">IR</a><div><a href="/about">About</a><a href="/services">Services</a><a href="/cv">CV Pack</a><a href="/northbridge">Northbridge</a></div></nav>
      <section className="section hero">
        <div className="eyebrow">Case studies</div>
        <h1>Draft case studies built from real experience patterns and ready for factual refinement.</h1>
        <p className="lead">These drafts are intentionally written without confidential client names or NDA details. They are designed to be edited into accurate public versions.</p>
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
