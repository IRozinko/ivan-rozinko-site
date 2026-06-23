const services = [
  ['Critical Systems Risk Audit', 'Cross-layer review of architecture, CI/CD, QA strategy, platform reliability, observability, incident readiness, delivery process and business-critical flows.', ['Risk map', 'Top failure modes', '30/60/90 remediation roadmap', 'Executive summary']],
  ['Platform & Release Readiness', 'Readiness review for teams preparing important releases, migrations, scaling work or production hardening.', ['SLO/SLI review', 'Release gates', 'Rollback readiness', 'Monitoring coverage']],
  ['FinTech / Web3 Risk Review', 'Focused review for payment, wallet, fee, limit, transaction-state and crypto/Web3 flows.', ['Payment state matrix', 'Fee and limit risks', 'Wallet/transaction coverage', 'Edge-case backlog']],
  ['AI Reliability Review', 'Production-readiness review for AI features, LLM workflows and agentic systems.', ['Prompt regression', 'Tool-use risks', 'Audit trails', 'Guardrail gaps']],
  ['Embedded-to-Cloud Reliability Review', 'Boundary-risk review for device, firmware, backend, cloud, telemetry and operations.', ['Device state model', 'OTA risks', 'Telemetry gaps', 'Incident patterns']],
  ['Fractional CTO / Advisor', 'Ongoing advisory for founders, CTOs and engineering leaders who need senior technical judgement without a full-time executive hire.', ['Technical roadmap', 'Risk prioritization', 'Vendor review', 'Operating model']],
];

export default function ServicesPage() {
  return (
    <main>
      <nav className="nav"><a className="brand" href="/">IR</a><div><a href="/about">About</a><a href="/case-studies">Case studies</a><a href="/cv">CV Pack</a><a href="/northbridge">Northbridge</a></div></nav>
      <section className="section hero">
        <div className="eyebrow">Services</div>
        <h1>Advisory for business-critical systems under technical, delivery or compliance pressure.</h1>
        <p className="lead">The services are designed around one question: where can this system fail in production, in delivery, in audit or in customer-facing financial logic — and what should be fixed first?</p>
      </section>
      <section className="section grid two">
        {services.map(([title, text, items]) => (
          <article className="card" key={title as string}>
            <h3>{title as string}</h3>
            <p>{text as string}</p>
            <ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </section>
    </main>
  );
}
