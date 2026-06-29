import { SiteFooter } from '../../../components/SiteFooter';
import { SiteNav } from '../../../components/SiteNav';

const areas = [
  'Architecture and ownership boundaries',
  'CI/CD, release gates and rollback readiness',
  'QA strategy, automation coverage and regression risk',
  'Platform reliability, cloud infrastructure and scaling paths',
  'Observability, incident response and operational evidence',
  'Security controls and compliance readiness',
  'Payment, wallet, transaction and money-flow risks',
  'AI workflow, LLM agent and automation risks',
  'Team process, delivery predictability and decision ownership',
];

const deliverables = [
  ['01', 'Risk map', 'Prioritized view of the highest technical, delivery and operational risks across the system.'],
  ['02', 'Failure modes', 'Clear statements of where the system can fail, why it matters and what control is missing.'],
  ['03', 'Evidence review', 'Review of logs, alerts, release controls, test coverage, runbooks, diagrams and operational documentation.'],
  ['04', '30/60/90 roadmap', 'Pragmatic remediation plan for the highest-impact gaps.'],
];

const process = [
  ['Discovery', 'Clarify business-critical flows, system boundaries, current pain points and required decisions.'],
  ['Technical review', 'Review architecture, platform, CI/CD, QA, observability, incident process and risk-sensitive flows.'],
  ['Risk scoring', 'Score failure modes by likelihood, impact, detectability, ownership and remediation effort.'],
  ['Executive output', 'Deliver a concise risk summary, remediation roadmap and recommended next actions.'],
];

export default function UkrainianCriticalSystemsRiskAuditPage() {
  return (
    <main>
      <SiteNav active="services" locale="ua" enHref="/services/critical-systems-risk-audit" uaHref="/ua/services/critical-systems-risk-audit" />

      <section className="section hero heroTight">
        <div className="eyebrow withLine">Core advisory offer</div>
        <h1>Critical Systems Risk Audit</h1>
        <p className="lead">
          Compact technical-risk review для систем, де failure впливає на revenue, trust, compliance, delivery або operations. Мета проста: зробити найдорожчі ризики видимими, prioritized і actionable.
        </p>
        <div className="ctaRow">
          <a className="button primary" href="mailto:ivan.rozinko@gmail.com">Request audit</a>
          <a className="button secondary" href="/ua/case-studies">Кейси</a>
        </div>
      </section>

      <section className="section split auditBand">
        <div>
          <div className="eyebrow withLine">Main question</div>
          <h2>Where can this system fail, and what should be fixed first?</h2>
          <p>
            Audit поєднує engineering reality з business risk: architecture, release process, test strategy, platform reliability, observability, incident readiness, security controls і critical product flows.
          </p>
        </div>
        <div className="card accent">
          <h3>Best fit</h3>
          <ul>
            <li>FinTech, Web3, SaaS, AI and regulated teams</li>
            <li>Payment, wallet, commission, transaction or partner-platform flows</li>
            <li>Cloud-native platforms, Kubernetes, CI/CD and observability gaps</li>
            <li>Major release, migration, audit or scale step</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <div>
            <div className="eyebrow withLine">Deliverables</div>
            <h2>Executive clarity, technical depth.</h2>
          </div>
        </div>
        <div className="deliverableGrid">
          {deliverables.map(([number, title, text]) => (
            <article className="card deliverableCard" key={title}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <div className="eyebrow withLine">Process</div>
          <h2>Focused review, not a bloated consulting exercise.</h2>
          <p>
            Output має допомогти прийняти рішення: what to fix now, what to monitor, what to document, what to automate and what to defer safely.
          </p>
        </div>
        <div className="numberedList">
          {process.map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="eyebrow withLine">Assessment areas</div>
        <h2>Cross-layer review.</h2>
        <div className="chips">
          {areas.map((area) => <span key={area}>{area}</span>)}
        </div>
      </section>

      <section className="section contact">
        <div>
          <div className="eyebrow withLine">Next step</div>
          <h2>Use it before a major release, migration, audit, incident pattern or scale step.</h2>
          <p>Best fit: fintech, SaaS, Web3, AI, regulated systems, platform reliability and critical product flows.</p>
        </div>
        <div className="ctaRow">
          <a className="button primary" href="mailto:ivan.rozinko@gmail.com">Email Ivan</a>
          <a className="button secondary" href="/ua/northbridge">NorthBridge</a>
        </div>
      </section>

      <SiteFooter locale="ua" />
    </main>
  );
}
