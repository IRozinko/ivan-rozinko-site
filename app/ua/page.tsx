import { SiteFooter } from '../components/SiteFooter';
import { SiteNav } from '../components/SiteNav';

const metrics = [
  {
    value: '12+',
    label: 'Years in IT',
    text: 'Software, QA, delivery, infrastructure та leadership across complex systems.',
  },
  {
    value: '5+',
    label: 'Years in Leadership',
    text: 'Teams, quality, release control, delivery ownership та technical direction.',
  },
  {
    value: 'Critical',
    label: 'Systems Focus',
    text: 'FinTech, regulated environments, platform reliability та operational risk.',
  },
  {
    value: 'Business',
    label: 'Impact',
    text: 'Engineering decisions aligned with reliability, speed та risk reduction.',
  },
];

const services = [
  {
    title: 'Engineering Leadership',
    text: 'Technical direction, team operating model, delivery ownership та leadership across complex engineering initiatives.',
    href: '/ua/services',
  },
  {
    title: 'Platform & Architecture',
    text: 'Cloud, infrastructure, CI/CD, reliability, observability та architecture decisions that support long-term business goals.',
    href: '/ua/services',
  },
  {
    title: 'Risk & Compliance',
    text: 'Technical risk mapping across fintech, Web3, regulated delivery, payment flows, audit readiness та production controls.',
    href: '/ua/services',
  },
  {
    title: 'Delivery Optimization',
    text: 'Release quality, QA strategy, rollback readiness, SDLC, incident readiness та delivery predictability at scale.',
    href: '/ua/services',
  },
];

const cases = [
  {
    tag: 'FINTECH',
    title: 'Reduced payment-flow risk and improved release confidence for a critical transaction platform.',
    href: '/ua/case-studies',
  },
  {
    tag: 'PLATFORM',
    title: 'Strengthened CI/CD, observability and platform readiness across cloud and microservice environments.',
    href: '/ua/case-studies',
  },
  {
    tag: 'REGULATED SYSTEMS',
    title: 'Improved audit-ready delivery, operational evidence and technical-risk visibility for enterprise systems.',
    href: '/ua/case-studies',
  },
];

const proof = [
  ['Critical Systems Readiness', 'Release readiness, platform reliability, QA strategy та operational-risk frameworks.', 'https://github.com/IRozinko/critical-systems-readiness'],
  ['Payment Flow Risk Matrix', 'Risk matrix for fees, balances, limits, transaction states та wallet/payment edge cases.', 'https://github.com/IRozinko/payment-flow-risk-matrix'],
  ['AI Agent Reliability Kit', 'Evaluation and regression-testing framework for AI agents та LLM workflows.', 'https://github.com/IRozinko/ai-agent-reliability-kit'],
  ['Embedded Cloud Reliability', 'Reliability framework for device → firmware → backend → cloud → monitoring systems.', 'https://github.com/IRozinko/embedded-cloud-reliability'],
];

export default function UkrainianHome() {
  return (
    <main>
      <SiteNav active="home" locale="ua" enHref="/" uaHref="/ua" />

      <section id="top" className="heroShell heroTypographic">
        <div className="heroCopy">
          <div className="eyebrow withLine">Technical Leadership & Advisory</div>
          <h1>
            Ship better software.<br />
            Run stable platforms.<br />
            <span>Reduce technical risk.</span>
          </h1>
          <p className="lead">
            Іван Розінко — senior cross-layer engineering leader and advisor. Допомагаю командам будувати reliable systems, strengthen delivery and reduce risk across software, cloud, QA strategy, fintech/Web3, AI readiness and regulated industries.
          </p>
          <div className="ctaRow">
            <a className="button primary" href="/ua/services/critical-systems-risk-audit">Risk Audit <span aria-hidden="true">→</span></a>
            <a className="button secondary" href="/ua/case-studies">Кейси</a>
            <a className="button ghost" href="mailto:ivan.rozinko@gmail.com">Написати</a>
          </div>
        </div>
      </section>

      <section className="metricBar" aria-label="Experience and positioning">
        {metrics.map((item) => (
          <article className="metric" key={item.label}>
            <div className="metricIcon" />
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section id="services" className="section serviceIntro">
        <div>
          <div className="eyebrow withLine">Послуги</div>
          <h2>Where I add value</h2>
        </div>
        <p>
          Leadership, architecture and advisory across the full software and platform lifecycle — from strategy and delivery to reliability, risk and production control.
        </p>
        <div className="serviceGrid">
          {services.map((service) => (
            <a className="serviceCard" href={service.href} key={service.title}>
              <div className="cardIcon" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span>→</span>
            </a>
          ))}
        </div>
      </section>

      <section id="case-studies" className="section casesSection">
        <div className="sectionHeader">
          <div>
            <div className="eyebrow withLine">Кейси</div>
            <h2>Real impact. Measurable results.</h2>
          </div>
          <a className="textLink" href="/ua/case-studies">View all case studies →</a>
        </div>
        <div className="caseGrid">
          {cases.map((item) => (
            <a className="caseCard" href={item.href} key={item.tag}>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <em>View case study →</em>
            </a>
          ))}
        </div>
      </section>

      <section className="section split premiumSplit">
        <div>
          <div className="eyebrow withLine">Advisory offer</div>
          <h2>Critical Systems Risk Audit</h2>
          <p>
            Compact advisory engagement that maps the top technical and operational risks across architecture, platform, CI/CD, QA, monitoring, release process, incident readiness and business-critical flows.
          </p>
          <div className="ctaRow">
            <a className="button primary" href="/ua/services/critical-systems-risk-audit">View audit offer</a>
            <a className="button secondary" href="/ua/northbridge">NorthBridge Advisory</a>
          </div>
        </div>
        <div className="card accent">
          <h3>Output</h3>
          <ul>
            <li>Risk map and top failure modes</li>
            <li>Release-readiness and observability gaps</li>
            <li>30/60/90 remediation roadmap</li>
            <li>Executive summary for founders, CTOs or stakeholders</li>
          </ul>
        </div>
      </section>

      <section id="proof" className="section proofSection">
        <div className="sectionHeader">
          <div>
            <div className="eyebrow withLine">Public proof assets</div>
            <h2>Frameworks and repositories</h2>
          </div>
          <a className="textLink" href="https://github.com/IRozinko" target="_blank" rel="noreferrer">GitHub →</a>
        </div>
        <div className="grid two">
          {proof.map(([title, text, url]) => (
            <a className="card repo" href={url} target="_blank" rel="noreferrer" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div>
          <div className="eyebrow withLine">Contact</div>
          <h2>Для ролей, advisory, audits або technical-risk review.</h2>
          <p>Best fit: Principal / Staff / Platform / SRE / Head-level roles або advisory work in fintech, Web3, AI, SaaS, platform, embedded-to-cloud та regulated systems.</p>
        </div>
        <div className="ctaRow">
          <a className="button primary" href="mailto:ivan.rozinko@gmail.com">Email</a>
          <a className="button secondary" href="https://github.com/IRozinko" target="_blank" rel="noreferrer">GitHub</a>
          <a className="button secondary" href="/">English</a>
        </div>
      </section>

      <SiteFooter locale="ua" />
    </main>
  );
}
