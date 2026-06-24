import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

const risks = ['Useful technical work failing approval because the evidence is unclear', 'Audit pain caused by weak documentation', 'Procurement or implementation delays due to ambiguous scope', 'Stakeholders misunderstanding system purpose and value', 'Technical decisions not mapped to business and legal obligations'];
const work = ['Prepared and structured technical documentation for regulated IT initiatives', 'Connected technical scope with business, operational and regulatory justification', 'Worked with SAP/DataHub/website/compliance-style materials and stakeholder-facing documents', 'Turned scattered technical context into submission-ready explanations, roadmaps and evidence packs'];

export default function RegulatedItCase() {
  return (
    <main>
      <SiteNav active="case-studies" locale="en" enHref="/case-studies/regulated-it-audit-ready-delivery" uaHref="/ua/case-studies" />
      <section className="section hero caseHero">
        <div className="eyebrow">Regulated Systems</div>
        <h1>Regulated IT & Audit-Ready Delivery</h1>
        <p className="lead">Technical documentation, stakeholder alignment and evidence-ready delivery in environments where systems must satisfy business, operational and regulatory expectations.</p>
      </section>
      <section className="section caseBody">
        <h2>Context</h2>
        <p>A regulated enterprise environment required technical documentation, implementation justification, stakeholder alignment and evidence preparation for audits, inspections or investment-program style submissions.</p>
        <h2>Risk surface</h2>
        <ul>{risks.map((item) => <li key={item}>{item}</li>)}</ul>
        <h2>Work performed</h2>
        <ul>{work.map((item) => <li key={item}>{item}</li>)}</ul>
        <h2>Reusable lesson</h2>
        <p>In regulated environments, technical leadership includes evidence design. A system is not ready if the team cannot explain why it exists, how it works and how compliance can verify it.</p>
        <div className="ctaRow"><a className="button primary" href="/case-studies">Back to case studies</a><a className="button secondary" href="/northbridge">Northbridge</a></div>
      </section>
      <SiteFooter locale="en" />
    </main>
  );
}
