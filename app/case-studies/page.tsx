import { SiteFooter } from '../components/SiteFooter';
import { SiteNav } from '../components/SiteNav';

const cases = [
  ['FinTech Fee Service & Payment Risk', 'Risk-based review of fee logic, user-facing transaction states, limits, balances and edge cases where product behavior directly affects trust and money movement.', 'FinTech / Web3 / QA Risk', '/case-studies/fintech-fee-service-payment-risk'],
  ['QA Strategy for Cloud Microservices', 'A release-confidence approach for cloud-native services: API behavior, integration risk, automation priorities, regression scope and CI/CD quality gates.', 'QA / AQA / Release Risk', '/case-studies/qa-strategy-cloud-microservices'],
  ['Platform Reliability & CI/CD Control', 'Operational readiness across deployment pipelines, infrastructure, monitoring, rollback paths and production ownership for business-critical systems.', 'Platform / SRE / DevOps', '/case-studies/platform-reliability-cicd-control'],
  ['Firmware-to-Software Systems Thinking', 'Low-level engineering experience translated into stronger reasoning about state, constraints, timing, boundaries and hidden failure modes in modern software systems.', 'Firmware / Software', '/case-studies/firmware-to-software-systems-thinking'],
  ['Regulated IT & Audit-Ready Delivery', 'Technical documentation, stakeholder alignment and evidence-ready delivery in environments where systems must satisfy business, operational and regulatory expectations.', 'Regulated Systems', '/case-studies/regulated-it-audit-ready-delivery'],
];

export default function CaseStudiesPage() {
  return (
    <main>
      <SiteNav active="case-studies" locale="en" enHref="/case-studies" uaHref="/ua/case-studies" />
      <section className="section hero">
        <div className="eyebrow">Case studies</div>
        <h1>Selected experience patterns across critical systems, fintech risk, platform reliability and regulated delivery.</h1>
        <p className="lead">Public, NDA-safe summaries focused on risk, operating context and reusable engineering lessons rather than confidential client details.</p>
      </section>
      <section className="section grid two">
        {cases.map(([title, text, tag, url]) => (
          <a className="card repo" href={url} key={title}>
            <div className="eyebrow">{tag}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </a>
        ))}
      </section>
      <SiteFooter locale="en" />
    </main>
  );
}
