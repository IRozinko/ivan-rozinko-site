import { SiteFooter } from '../components/SiteFooter';
import { SiteNav } from '../components/SiteNav';

const repos = [
  ['Critical Systems Readiness', 'Фреймворки для готовності релізів, platform reliability, QA strategy та операційних ризиків.', 'https://github.com/IRozinko/critical-systems-readiness'],
  ['Payment Flow Risk Matrix', 'Матриця ризиків для комісій, балансів, лімітів, станів транзакцій та wallet/payment edge cases.', 'https://github.com/IRozinko/payment-flow-risk-matrix'],
  ['AI Agent Reliability Kit', 'Підхід до оцінки, regression testing та production-readiness для AI agents і LLM workflows.', 'https://github.com/IRozinko/ai-agent-reliability-kit'],
  ['Embedded Cloud Reliability', 'Reliability framework для ланцюга device → firmware → backend → cloud → monitoring.', 'https://github.com/IRozinko/embedded-cloud-reliability'],
];

const services = [
  ['Critical Systems Risk Audit', 'Оцінка ризиків архітектури, CI/CD, QA strategy, platform reliability, observability, incident readiness та delivery process.'],
  ['Platform & Release Readiness', 'SLO, pipelines, release gates, rollback readiness, monitoring coverage та production ownership.'],
  ['FinTech / Web3 Risk Review', 'Payment flows, wallet states, balances, fees, limits, transaction lifecycle та edge-case coverage.'],
  ['AI Reliability Review', 'Ризики agent workflows, prompt regression, tool-use boundaries, audit trails та production readiness.'],
  ['Embedded-to-Cloud Review', 'Boundary risks між firmware, devices, backend, cloud ingestion, telemetry та support operations.'],
  ['Fractional CTO / Advisor', 'Technical strategy, engineering operating model, risk prioritization, vendor та roadmap review.'],
];

const experience = [
  'Firmware / C / C++ / FPGA та low-level systems thinking',
  'Java, Go, Node.js, backend та product software delivery',
  'QA / AQA leadership, test strategy, release confidence та automation',
  'AWS / GCP, Kubernetes, Terraform, CI/CD, monitoring та incident readiness',
  'FinTech, Web3, wallets, fee services, payment та transaction-risk thinking',
  'CTO / Head-level ownership, regulated enterprise systems та audit-ready documentation',
];

export default function UkrainianHome() {
  return (
    <main>
      <SiteNav active="home" locale="ua" enHref="/" uaHref="/ua" />
      <section className="hero section">
        <div className="eyebrow">Critical Systems · Platform Reliability · FinTech/Web3 Risk</div>
        <h1>Іван Розінко допомагає командам стабілізувати критичні системи до того, як ризики стануть інцидентами або аудит-болем.</h1>
        <p className="lead">Cross-layer engineering leader на перетині software, firmware, cloud, QA strategy, platform reliability, AI readiness, fintech/Web3 та regulated systems.</p>
        <div className="ctaRow"><a className="button primary" href="/ua/services">Послуги</a><a className="button secondary" href="/ua/case-studies">Кейси</a><a className="button secondary" href="https://github.com/IRozinko" target="_blank" rel="noreferrer">GitHub</a></div>
      </section>
      <section className="section grid two">
        <div><div className="eyebrow">Positioning</div><h2>Не просто QA. Не просто DevOps. Не просто software або firmware.</h2><p>Цінність — у cross-layer ownership: бачити, як код, інфраструктура, firmware, релізний процес, observability, тестування, payment logic та compliance працюють як єдина поверхня ризику.</p></div>
        <div className="card"><h3>Core operating sentence</h3><p>Я допомагаю fintech, Web3, SaaS, AI та regulated teams знижувати platform, delivery та operational risk across the full technical stack.</p></div>
      </section>
      <section className="section"><div className="eyebrow">Experience map</div><div className="chips">{experience.map((item) => <span key={item}>{item}</span>)}</div></section>
      <section className="section"><div className="eyebrow">Advisory areas</div><h2>Де я можу бути корисним</h2><div className="grid three">{services.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="section"><div className="eyebrow">Public proof assets</div><h2>Frameworks and repositories</h2><div className="grid two">{repos.map(([title, text, url]) => <a className="card repo" href={url} target="_blank" rel="noreferrer" key={title}><h3>{title}</h3><p>{text}</p></a>)}</div></section>
      <section className="section contact"><div><div className="eyebrow">Contact</div><h2>Для ролей, advisory, audits або technical-risk review.</h2><p>Best fit: Principal / Staff / Head / Fractional CTO roles або advisory work у fintech, Web3, AI, SaaS, platform, embedded-to-cloud та regulated systems.</p></div><div className="ctaRow"><a className="button primary" href="mailto:ivan.rozinko@gmail.com">Email</a><a className="button secondary" href="https://github.com/IRozinko" target="_blank" rel="noreferrer">GitHub</a><a className="button secondary" href="/">English</a></div></section>
      <SiteFooter locale="ua" />
    </main>
  );
}
