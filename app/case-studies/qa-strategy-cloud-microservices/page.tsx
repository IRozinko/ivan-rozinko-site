import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

const risks = ['Critical flows without clear coverage', 'API and integration risks discovered too late', 'Regression scope that changes from release to release', 'Automation disconnected from delivery risk', 'Release acceptance without enough evidence'];
const work = ['Structured test strategy around critical flows and risk areas', 'Connected automation priorities with release-readiness goals', 'Worked across API, backend and CI/CD boundaries', 'Helped turn QA from late-stage validation into a release-risk control system'];

export default function QaStrategyCase() {
  return (
    <main>
      <SiteNav active="case-studies" locale="en" enHref="/case-studies/qa-strategy-cloud-microservices" uaHref="/ua/case-studies" />
      <section className="section hero caseHero">
        <div className="eyebrow">QA / AQA / Release Risk</div>
        <h1>QA Strategy for Cloud Microservices</h1>
        <p className="lead">A release-confidence approach for cloud-native services: API behavior, integration risk, automation priorities, regression scope and CI/CD quality gates.</p>
      </section>
      <section className="section caseBody">
        <h2>Context</h2>
        <p>A cloud-native product with multiple backend services required stronger release confidence across API, backend, integration and regression layers. The environment included distributed ownership, CI/CD and business-critical flows where late defects could create release delays or production risk.</p>
        <h2>Risk surface</h2>
        <ul>{risks.map((item) => <li key={item}>{item}</li>)}</ul>
        <h2>Work performed</h2>
        <ul>{work.map((item) => <li key={item}>{item}</li>)}</ul>
        <h2>Reusable lesson</h2>
        <p>Quality engineering is not the same as test execution. In cloud microservices, QA becomes valuable when it controls risk across service boundaries, data contracts, release gates and business-critical paths.</p>
        <div className="ctaRow"><a className="button primary" href="/case-studies">Back to case studies</a><a className="button secondary" href="https://github.com/IRozinko/critical-systems-readiness" target="_blank" rel="noreferrer">Related proof asset</a></div>
      </section>
      <SiteFooter locale="en" />
    </main>
  );
}
