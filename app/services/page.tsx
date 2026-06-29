import { SiteFooter } from '../components/SiteFooter';
import { SiteNav } from '../components/SiteNav';

const services = [
  {
    title: 'Critical Systems Risk Audit',
    text: 'Cross-layer review of architecture, CI/CD, QA strategy, platform reliability, observability, incident readiness, delivery process and business-critical flows.',
    items: ['Risk map', 'Top failure modes', '30/60/90 remediation roadmap', 'Executive summary'],
    href: '/services/critical-systems-risk-audit',
  },
  {
    title: 'Platform & Release Readiness',
    text: 'Readiness review for teams preparing important releases, migrations, scaling work or production hardening.',
    items: ['SLO/SLI review', 'Release gates', 'Rollback readiness', 'Monitoring coverage'],
    href: '/case-studies/platform-reliability-cicd-control',
  },
  {
    title: 'FinTech / Web3 Risk Review',
    text: 'Focused review for payment, wallet, fee, limit, transaction-state and crypto/Web3 flows.',
    items: ['Payment state matrix', 'Fee and limit risks', 'Wallet/transaction coverage', 'Edge-case backlog'],
    href: '/case-studies/fintech-fee-service-payment-risk',
  },
  {
    title: 'AI Reliability Review',
    text: 'Production-readiness review for AI features, LLM workflows and agentic systems.',
    items: ['Prompt regression', 'Tool-use risks', 'Audit trails', 'Guardrail gaps'],
    href: 'https://github.com/IRozinko/ai-agent-reliability-kit',
  },
  {
    title: 'Embedded-to-Cloud Reliability Review',
    text: 'Boundary-risk review for device, firmware, backend, cloud, telemetry and operations.',
    items: ['Device state model', 'OTA risks', 'Telemetry gaps', 'Incident patterns'],
    href: 'https://github.com/IRozinko/embedded-cloud-reliability',
  },
  {
    title: 'Fractional CTO / Advisor',
    text: 'Ongoing advisory for founders, CTOs and engineering leaders who need senior technical judgement without a full-time executive hire.',
    items: ['Technical roadmap', 'Risk prioritization', 'Vendor review', 'Operating model'],
    href: '/northbridge',
  },
];

export default function ServicesPage() {
  return (
    <main>
      <SiteNav active="services" locale="en" enHref="/services" uaHref="/ua/services" />
      <section className="section hero heroTight">
        <div className="eyebrow withLine">Services</div>
        <h1>Advisory for business-critical systems under technical, delivery or compliance pressure.</h1>
        <p className="lead">The work is designed around one executive question: where can this system fail in production, delivery, audit, customer trust or money-flow integrity — and what should be fixed first?</p>
        <div className="ctaRow">
          <a className="button primary" href="/services/critical-systems-risk-audit">Critical Systems Risk Audit</a>
          <a className="button secondary" href="mailto:ivan.rozinko@gmail.com">Discuss advisory</a>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <div>
            <div className="eyebrow withLine">Selected offers</div>
            <h2>Focused reviews, not abstract consulting.</h2>
          </div>
        </div>
        <div className="grid two">
          {services.map((service) => (
            <a className="card repo servicePackage" href={service.href} key={service.title} target={service.href.startsWith('http') ? '_blank' : undefined} rel={service.href.startsWith('http') ? 'noreferrer' : undefined}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <span className="textLink">View details →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section contact">
        <div>
          <div className="eyebrow withLine">Best fit</div>
          <h2>FinTech, Web3, SaaS, AI, platform and regulated teams that need clarity before risk becomes expensive.</h2>
          <p>Useful before major releases, migrations, audits, funding diligence, recurring incidents, platform scaling or payments/transaction-flow changes.</p>
        </div>
        <div className="ctaRow">
          <a className="button primary" href="mailto:ivan.rozinko@gmail.com">Email Ivan</a>
          <a className="button secondary" href="/case-studies">Case studies</a>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
