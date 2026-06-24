import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

const auditAreas = ['Architecture and ownership boundaries', 'CI/CD and release gates', 'QA strategy and automation coverage', 'Platform reliability and cloud infrastructure', 'Observability and incident readiness', 'Security and compliance evidence', 'Payment / transaction / money-flow risks', 'AI agent / LLM workflow risks', 'Embedded-to-cloud boundary risks', 'Team process and delivery risk'];

export default function UkrainianNorthbridgePage() {
  return (
    <main>
      <SiteNav active="northbridge" locale="ua" enHref="/northbridge" uaHref="/ua/northbridge" />
      <section className="section hero"><div className="eyebrow">Northbridge Critical Systems</div><h1>Technical-risk and resilience advisory для систем, де помилка коштує дорого.</h1><p className="lead">Northbridge — advisory layer навколо critical systems risk, platform reliability, release readiness, payment/Web3 risk, AI reliability та regulated delivery.</p></section>
      <section className="section split"><div><div className="eyebrow">Core offer</div><h2>Critical Systems Risk Audit</h2><p>Компактний engagement, який мапить highest technical and operational risks у prioritized remediation roadmap для founders, CTOs та engineering leaders.</p></div><div className="card accent"><h3>Assessment areas</h3><ul>{auditAreas.map((area) => <li key={area}>{area}</li>)}</ul></div></section>
      <section className="section grid two"><a className="card repo" href="https://github.com/IRozinko/northbridge-critical-systems" target="_blank" rel="noreferrer"><h3>Northbridge repository</h3><p>Frameworks, audit structure та public advisory materials.</p></a><a className="card repo" href="/ua/services"><h3>Послуги</h3><p>Advisory packages and engagement types.</p></a></section>
      <SiteFooter locale="ua" />
    </main>
  );
}
