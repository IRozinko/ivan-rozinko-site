import { SiteFooter } from './components/SiteFooter';
import { SiteNav } from './components/SiteNav';

const repos = [
  ['Critical Systems Readiness', 'Release readiness, platform reliability, QA strategy and operational-risk frameworks.', 'https://github.com/IRozinko/critical-systems-readiness'],
  ['Payment Flow Risk Matrix', 'Risk matrix for fees, balances, limits, transaction states and wallet/payment edge cases.', 'https://github.com/IRozinko/payment-flow-risk-matrix'],
  ['AI Agent Reliability Kit', 'Evaluation and regression-testing framework for AI agents and LLM workflows.', 'https://github.com/IRozinko/ai-agent-reliability-kit'],
  ['Embedded Cloud Reliability', 'Reliability framework for device → firmware → backend → cloud → monitoring systems.', 'https://github.com/IRozinko/embedded-cloud-reliability'],
];

const services = [
  ['Critical Systems Risk Audit', 'Architecture, CI/CD, QA strategy, platform reliability, observability, incident readiness and delivery-risk map.', '/services'],
  ['Platform & Release Readiness', 'SLOs, pipelines, release gates, rollback readiness, monitoring coverage and production ownership.', '/services'],
  ['FinTech / Web3 Risk Review', 'Payment flows, wallet states, balances, fees, limits, transaction lifecycles and edge-case coverage.', '/services'],
  ['AI Reliability Review', 'Agent workflow risks, prompt regression, tool-use boundaries, audit trails and production readiness.', '/services'],
  ['Embedded-to-Cloud Review', 'Boundary risks between firmware, devices, backend, cloud ingestion, telemetry and support operations.', '/services'],
  ['Fractional CTO / Advisor', 'Technical strategy, engineering operating model, risk prioritization, vendor and roadmap review.', '/services'],
];

const experience = [
  'Firmware / C / C++ / FPGA and low-level systems thinking',
  'Java, Go, Node.js, backend and product software delivery',
  'QA / AQA leadership, test strategy, release confidence and automation',
  'AWS / GCP, Kubernetes, Terraform, CI/CD, monitoring and incident readiness',
  'FinTech, Web3, wallets, fee services, payment and transaction-risk thinking',
  'CTO / Head-level ownership, regulated enterprise systems and audit-ready documentation',
];

const pages = [
  ['About', 'Cross-layer engineering background and positioning.', '/about'],
  ['Services', 'Audit, readiness and advisory offers.', '/services'],
  ['Case studies', 'Public, NDA-safe experience summaries.', '/case-studies'],
  ['CV', 'Targeted CV versions available on request.', '/cv'],
];

const availability = [
  ['Senior technical roles', 'Principal / Staff / Platform / SRE / Head-level roles where the system is complex and the cost of failure is high.'],
  ['Advisory engagements', 'Risk audits, release-readiness reviews, platform stabilization, fintech/Web3 flow reviews and AI reliability assessments.'],
  ['Fractional leadership', 'Technical judgement, roadmap review, operating model design and delivery-risk control without a full-time executive commitment.'],
  ['Delivery pod', 'A trusted network of developers, QA/AQA and DevOps engineers can be brought in for scoped stabilization or implementation work.'],
];

export default function Home() {
  return (
    <main>
      <SiteNav active="home" locale="en" enHref="/" uaHref="/ua" />

      <section id="top" className="hero section">
        <div className="eyebrow">Critical Systems · Platform Reliability · FinTech/Web3 Risk</div>
        <h1>Ivan Rozinko helps teams stabilize business-critical systems before failures become incidents, audit pain or revenue loss.</h1>
        <p className="lead">
          Cross-layer engineering leader across software, firmware, cloud, QA strategy, platform reliability, AI readiness, fintech/Web3 and regulated systems.
        </p>
        <div className="ctaRow">
          <a className="button primary" href="/services">Explore services</a>
          <a className="button secondary" href="/case-studies">View case studies</a>
          <a className="button secondary" href="https://github.com/IRozinko" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <section id="work" className="section grid two">
        <div>
          <div className="eyebrow">Positioning</div>
          <h2>Not just QA. Not just DevOps. Not just software or firmware.</h2>
          <p>
            The value is cross-layer ownership: seeing how code, infrastructure, firmware, release process, observability, testing, payment logic and compliance interact as one risk surface.
          </p>
        </div>
        <div className="card">
          <h3>Core operating sentence</h3>
          <p>
            I help fintech, Web3, SaaS, AI and regulated teams reduce platform, delivery and operational risk across the full technical stack.
          </p>
        </div>
      </section>

      <section className="section availability">
        <div className="eyebrow">Available for</div>
        <h2>Roles, advisory and scoped delivery where engineering risk needs senior ownership.</h2>
        <div className="grid four">
          {availability.map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="eyebrow">Site map</div>
        <h2>Start here</h2>
        <div className="grid four">
          {pages.map(([title, text, url]) => (
            <a className="card repo" href={url} key={url}>
              <h3>{title}</h3>
              <p>{text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="eyebrow">Experience map</div>
        <div className="chips">
          {experience.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="services" className="section">
        <div className="eyebrow">Advisory areas</div>
        <h2>Where I can help</h2>
        <div className="grid three">
          {services.map(([title, text, url]) => (
            <a className="card repo" href={url} key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <div className="eyebrow">Offer</div>
          <h2>Critical Systems Risk Audit</h2>
          <p>
            A compact advisory engagement that maps the top technical and operational risks across architecture, platform, CI/CD, QA, monitoring, release process, incident readiness and business-critical flows.
          </p>
          <div className="ctaRow">
            <a className="button primary" href="/northbridge">Northbridge</a>
            <a className="button secondary" href="/cv">Request CV</a>
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

      <section id="proof" className="section">
        <div className="eyebrow">Public proof assets</div>
        <h2>Frameworks and repositories</h2>
        <div className="grid two">
          {repos.map(([title, text, url]) => (
            <a className="card repo" href={url} target="_blank" rel="noreferrer" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div>
          <div className="eyebrow">Contact</div>
          <h2>For roles, advisory, audits or technical-risk review.</h2>
          <p>Best fit: Principal / Staff / Head / Fractional CTO roles or advisory work in fintech, Web3, AI, SaaS, platform, embedded-to-cloud and regulated systems.</p>
        </div>
        <div className="ctaRow">
          <a className="button primary" href="mailto:ivan.rozinko@gmail.com">Email</a>
          <a className="button secondary" href="https://github.com/IRozinko" target="_blank" rel="noreferrer">GitHub</a>
          <a className="button secondary" href="https://github.com/IRozinko/northbridge-critical-systems" target="_blank" rel="noreferrer">Northbridge</a>
        </div>
      </section>
      <SiteFooter locale="en" />
    </main>
  );
}
