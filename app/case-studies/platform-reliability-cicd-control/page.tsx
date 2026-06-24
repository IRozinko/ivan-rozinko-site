import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

const risks = ['Unclear release gates', 'Fragile or inconsistent pipelines', 'Weak rollback readiness', 'Limited production observability', 'Unclear ownership during incident response'];
const work = ['Reviewed CI/CD and release-readiness flow', 'Connected pipeline checks with critical paths and risk', 'Focused on rollback, monitoring, operational readiness and ownership', 'Used QA-risk thinking to make platform work more business-oriented'];

export default function PlatformReliabilityCase() {
  return (
    <main>
      <SiteNav active="case-studies" locale="en" enHref="/case-studies/platform-reliability-cicd-control" uaHref="/ua/case-studies" />
      <section className="section hero caseHero">
        <div className="eyebrow">Platform / SRE / DevOps</div>
        <h1>Platform Reliability & CI/CD Control</h1>
        <p className="lead">Operational readiness across deployment pipelines, infrastructure, monitoring, rollback paths and production ownership for business-critical systems.</p>
      </section>
      <section className="section caseBody">
        <h2>Context</h2>
        <p>A delivery environment required stronger control over CI/CD, release readiness, infrastructure visibility and operational risk. The technical problem was not only tooling, but the reliability of the engineering operating model.</p>
        <h2>Risk surface</h2>
        <ul>{risks.map((item) => <li key={item}>{item}</li>)}</ul>
        <h2>Work performed</h2>
        <ul>{work.map((item) => <li key={item}>{item}</li>)}</ul>
        <h2>Reusable lesson</h2>
        <p>Platform reliability is not only Kubernetes, Terraform or monitoring. It is the ability to release, observe, rollback and explain critical systems under pressure.</p>
        <div className="ctaRow"><a className="button primary" href="/case-studies">Back to case studies</a><a className="button secondary" href="https://github.com/IRozinko/critical-systems-readiness" target="_blank" rel="noreferrer">Related proof asset</a></div>
      </section>
      <SiteFooter locale="en" />
    </main>
  );
}
