import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

const layers = [
  ['Firmware & low-level systems', 'C/C++, FPGA, constraints, state, timing, boundaries та failure modes.'],
  ['Software engineering', 'Java, Go, Node.js, backend та product delivery для business-critical services.'],
  ['QA / AQA leadership', 'Automation, test strategy, risk-based coverage, release confidence та quality gates.'],
  ['Platform / DevOps', 'Cloud, Kubernetes, Terraform, CI/CD, monitoring, incident readiness та operational ownership.'],
  ['FinTech / Web3 systems', 'Wallets, fees, balances, limits, transaction states, crypto/payment flows та edge-case thinking.'],
  ['Regulated systems', 'Audit-ready documentation, SAP/DataHub/NKREKP-style work, compliance evidence та stakeholder communication.'],
];

export default function UkrainianAboutPage() {
  return (
    <main>
      <SiteNav active="about" locale="ua" enHref="/about" uaHref="/ua/about" />
      <section className="section hero">
        <div className="eyebrow">Про мене</div>
        <h1>Cross-layer technical leadership для систем, де помилка коштує дорого.</h1>
        <p className="lead">Мій досвід знаходиться на перетині firmware, software engineering, QA/AQA, cloud/platform, fintech/Web3, engineering leadership та regulated enterprise environments.</p>
      </section>
      <section className="section grid two"><div><div className="eyebrow">Operating model</div><h2>Від коду та інфраструктури до production, audit і business impact.</h2><p>Я найкраще працюю там, де команді потрібна не лише реалізація, а senior judgement: architecture, release discipline, risk prioritization, observability, quality strategy та stakeholder-ready communication.</p></div><div className="card accent"><h3>Positioning</h3><p>Critical Systems / Platform / Reliability Engineering Leader для fintech, Web3, SaaS, AI та regulated teams.</p></div></section>
      <section className="section"><div className="eyebrow">Experience layers</div><h2>Один профіль, кілька поверхонь ризику</h2><div className="grid three">{layers.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <SiteFooter locale="ua" />
    </main>
  );
}
