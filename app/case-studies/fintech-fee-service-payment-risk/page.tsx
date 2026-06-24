import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

const risks = ['Wrong fee tier or rule applied', 'Stale or inconsistent balance state', 'Limit boundary errors', 'Backend/UI transaction state mismatch', 'Failed, pending or retried operations causing incorrect user-facing behavior'];
const work = ['Built and reviewed risk-based scenarios for fee and payment behavior', 'Covered user-facing behavior, not only backend calculations', 'Structured edge cases around limits, states, transaction outcomes and fee variations', 'Helped transform scattered checks into a clearer payment-risk matrix'];

export default function FintechFeeServiceCase() {
  return (
    <main>
      <SiteNav active="case-studies" locale="en" enHref="/case-studies/fintech-fee-service-payment-risk" uaHref="/ua/case-studies" />
      <section className="section hero caseHero">
        <div className="eyebrow">FinTech / Web3 / QA Risk</div>
        <h1>FinTech Fee Service & Payment Risk</h1>
        <p className="lead">Risk-based validation of fee logic, transaction states, limits, balances and edge cases where product behavior directly affects money movement and user trust.</p>
      </section>
      <section className="section caseBody">
        <h2>Context</h2>
        <p>A fintech product had business-critical user-facing flows involving fees, limits, balances, transaction states and payment-related edge cases. The risk was not only technical correctness, but user trust, money-flow integrity and release confidence.</p>
        <h2>Risk surface</h2>
        <ul>{risks.map((item) => <li key={item}>{item}</li>)}</ul>
        <h2>Work performed</h2>
        <ul>{work.map((item) => <li key={item}>{item}</li>)}</ul>
        <h2>Reusable lesson</h2>
        <p>Payment systems rarely fail only because of a wrong formula. They fail because state, timing, retries, limits, fees, balances and user-facing communication drift apart.</p>
        <div className="ctaRow"><a className="button primary" href="/case-studies">Back to case studies</a><a className="button secondary" href="https://github.com/IRozinko/payment-flow-risk-matrix" target="_blank" rel="noreferrer">Related proof asset</a></div>
      </section>
      <SiteFooter locale="en" />
    </main>
  );
}
