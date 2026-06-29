import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

const services = [
  {
    title: 'Critical Systems Risk Audit',
    text: 'Cross-layer review of architecture, CI/CD, QA strategy, platform reliability, observability, incident readiness, delivery process та business-critical flows.',
    items: ['Risk map', 'Top failure modes', '30/60/90 remediation roadmap', 'Executive summary'],
    href: '/ua/services/critical-systems-risk-audit',
  },
  {
    title: 'Platform & Release Readiness',
    text: 'Readiness review для важливих релізів, migrations, scaling work або production hardening.',
    items: ['SLO/SLI review', 'Release gates', 'Rollback readiness', 'Monitoring coverage'],
    href: '/ua/case-studies',
  },
  {
    title: 'FinTech / Web3 Risk Review',
    text: 'Focused review для payment, wallet, fee, limit, transaction-state та crypto/Web3 flows.',
    items: ['Payment state matrix', 'Fee and limit risks', 'Wallet/transaction coverage', 'Edge-case backlog'],
    href: '/ua/case-studies',
  },
  {
    title: 'AI Reliability Review',
    text: 'Production-readiness review для AI features, LLM workflows та agentic systems.',
    items: ['Prompt regression', 'Tool-use risks', 'Audit trails', 'Guardrail gaps'],
    href: 'https://github.com/IRozinko/ai-agent-reliability-kit',
  },
  {
    title: 'Embedded-to-Cloud Reliability Review',
    text: 'Boundary-risk review для device, firmware, backend, cloud, telemetry та operations.',
    items: ['Device state model', 'OTA risks', 'Telemetry gaps', 'Incident patterns'],
    href: 'https://github.com/IRozinko/embedded-cloud-reliability',
  },
  {
    title: 'Fractional CTO / Advisor',
    text: 'Ongoing advisory для founders, CTOs та engineering leaders, яким потрібне senior technical judgement.',
    items: ['Technical roadmap', 'Risk prioritization', 'Vendor review', 'Operating model'],
    href: '/ua/northbridge',
  },
];

export default function UkrainianServicesPage() {
  return (
    <main>
      <SiteNav active="services" locale="ua" enHref="/services" uaHref="/ua/services" />
      <section className="section hero heroTight">
        <div className="eyebrow withLine">Послуги</div>
        <h1>Advisory для business-critical systems під technical, delivery або compliance pressure.</h1>
        <p className="lead">Головне питання: де ця система може зламатися у production, delivery, audit, customer trust або money-flow integrity — і що потрібно виправити першим?</p>
        <div className="ctaRow">
          <a className="button primary" href="/ua/services/critical-systems-risk-audit">Critical Systems Risk Audit</a>
          <a className="button secondary" href="mailto:ivan.rozinko@gmail.com">Обговорити</a>
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
          <p>Корисно перед major releases, migrations, audits, recurring incidents, platform scaling або payments/transaction-flow changes.</p>
        </div>
        <div className="ctaRow">
          <a className="button primary" href="mailto:ivan.rozinko@gmail.com">Email Ivan</a>
          <a className="button secondary" href="/ua/case-studies">Кейси</a>
        </div>
      </section>

      <SiteFooter locale="ua" />
    </main>
  );
}
