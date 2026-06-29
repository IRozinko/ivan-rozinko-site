import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

const auditAreas = [
  'Architecture and ownership boundaries',
  'CI/CD and release gates',
  'QA strategy and automation coverage',
  'Platform reliability and cloud infrastructure',
  'Observability and incident readiness',
  'Security and compliance evidence',
  'Payment / transaction / money-flow risks',
  'AI agent / LLM workflow risks',
  'Embedded-to-cloud boundary risks',
  'Team process and delivery risk',
];

const outcomes = [
  ['Risk clarity', 'Shared view of the highest technical and operational risks before they become production, trust or revenue problems.'],
  ['Decision support', 'Practical 30/60/90 roadmap: what to fix, monitor, document, automate or defer.'],
  ['Execution bridge', 'Path from audit findings to stabilization sprints, platform hardening or ongoing advisory.'],
];

const engagementModels = [
  ['Critical Systems Risk Audit', 'Focused risk review and executive summary.', '/ua/services/critical-systems-risk-audit'],
  ['Stabilization Sprint', 'Short delivery push to close urgent reliability, release, observability or quality gaps.', '/ua/services'],
  ['Advisory Retainer', 'Ongoing technical judgement for founders, CTOs and engineering leaders.', '/ua/services'],
];

export default function UkrainianNorthbridgePage() {
  return (
    <main>
      <SiteNav active="northbridge" locale="ua" enHref="/northbridge" uaHref="/ua/northbridge" />

      <section className="section hero heroTight">
        <div className="eyebrow withLine">NorthBridge Critical Systems</div>
        <h1>Technical-risk and resilience advisory для систем, де помилка коштує дорого.</h1>
        <p className="lead">NorthBridge — advisory layer навколо critical systems risk, platform reliability, release readiness, payment/Web3 risk, AI reliability та regulated delivery.</p>
        <div className="ctaRow">
          <a className="button primary" href="/ua/services/critical-systems-risk-audit">Risk Audit</a>
          <a className="button secondary" href="/ua/case-studies">Кейси</a>
          <a className="button ghost" href="mailto:ivan.rozinko@gmail.com">Написати</a>
        </div>
      </section>

      <section className="section split auditBand">
        <div>
          <div className="eyebrow withLine">Positioning</div>
          <h2>From hidden engineering risk to visible business decisions.</h2>
          <p>
            NorthBridge sits between software engineering, platform reliability, QA strategy, delivery control, fintech/Web3 risk, AI readiness and regulated environments.
          </p>
          <p>
            Це для команд, у яких вже є engineers, але потрібне senior judgement across boundaries: architecture, release process, testing, cloud, observability, incident readiness and business-critical flows.
          </p>
        </div>
        <div className="card accent">
          <h3>Core question</h3>
          <p>Where can this system fail in production, delivery, audit, customer trust or money-flow integrity — and what should be fixed first?</p>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <div>
            <div className="eyebrow withLine">Outcomes</div>
            <h2>What leaders get.</h2>
          </div>
        </div>
        <div className="outcomeStrip">
          {outcomes.map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <div className="eyebrow withLine">Core offer</div>
          <h2>Critical Systems Risk Audit</h2>
          <p>Компактний engagement, який мапить highest technical and operational risks у prioritized remediation roadmap для founders, CTOs та engineering leaders.</p>
          <div className="ctaRow">
            <a className="button primary" href="/ua/services/critical-systems-risk-audit">View audit offer</a>
          </div>
        </div>
        <div className="card accent"><h3>Assessment areas</h3><ul>{auditAreas.map((area) => <li key={area}>{area}</li>)}</ul></div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <div>
            <div className="eyebrow withLine">Engagement models</div>
            <h2>Start with clarity. Continue with execution where needed.</h2>
          </div>
        </div>
        <div className="grid three">
          {engagementModels.map(([title, text, href]) => (
            <a className="card repo servicePackage" href={href} key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="textLink">View →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section grid two">
        <a className="card repo" href="https://github.com/IRozinko/northbridge-critical-systems" target="_blank" rel="noreferrer"><h3>NorthBridge repository</h3><p>Frameworks, audit structure та public advisory materials.</p></a>
        <a className="card repo" href="/ua/services"><h3>Послуги</h3><p>Advisory packages and engagement types.</p></a>
      </section>

      <SiteFooter locale="ua" />
    </main>
  );
}
