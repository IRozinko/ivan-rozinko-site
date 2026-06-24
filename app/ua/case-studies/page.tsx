import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

const cases = [
  ['FinTech Fee Service & Payment Risk', 'Risk-based review of fee logic, user-facing transaction states, limits, balances та edge cases, де product behavior напряму впливає на trust і money movement.', 'FinTech / Web3 / QA Risk', '/case-studies/fintech-fee-service-payment-risk'],
  ['QA Strategy for Cloud Microservices', 'Release-confidence approach для cloud-native services: API behavior, integration risk, automation priorities, regression scope та CI/CD quality gates.', 'QA / AQA / Release Risk', '/case-studies/qa-strategy-cloud-microservices'],
  ['Platform Reliability & CI/CD Control', 'Operational readiness across deployment pipelines, infrastructure, monitoring, rollback paths та production ownership.', 'Platform / SRE / DevOps', '/case-studies/platform-reliability-cicd-control'],
  ['Firmware-to-Software Systems Thinking', 'Low-level engineering experience як спосіб краще бачити state, constraints, timing, boundaries та hidden failure modes.', 'Firmware / Software', '/case-studies/firmware-to-software-systems-thinking'],
  ['Regulated IT & Audit-Ready Delivery', 'Technical documentation, stakeholder alignment та evidence-ready delivery у regulated environments.', 'Regulated Systems', '/case-studies/regulated-it-audit-ready-delivery'],
];

export default function UkrainianCaseStudiesPage() {
  return (
    <main>
      <SiteNav active="case-studies" locale="ua" enHref="/case-studies" uaHref="/ua/case-studies" />
      <section className="section hero">
        <div className="eyebrow">Кейси</div>
        <h1>Selected experience patterns across critical systems, fintech risk, platform reliability та regulated delivery.</h1>
        <p className="lead">Public, NDA-safe summaries, сфокусовані на risk, operating context та reusable engineering lessons.</p>
      </section>
      <section className="section grid two">{cases.map(([title, text, tag, url]) => <a className="card repo" href={url} key={title}><div className="eyebrow">{tag}</div><h3>{title}</h3><p>{text}</p></a>)}</section>
      <SiteFooter locale="ua" />
    </main>
  );
}
