import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

const articles = [
  ['QA is not a department. It is a risk-control system.', 'From test cases to release-risk ownership.'],
  ['Payment bugs are often state bugs.', 'Balances, fees, retries, callbacks and user-facing transaction states.'],
  ['Platform engineering is not DevOps rebranding.', 'Internal platforms, golden paths, operational ownership and delivery discipline.'],
  ['AI agents need release gates too.', 'Prompt regression, tool-use permissions, audit trails and production readiness.'],
  ['Embedded-to-cloud systems fail at boundaries.', 'Firmware, telemetry, backend assumptions and field operations.'],
];

export default function UkrainianWritingPage() {
  return (
    <main>
      <SiteNav active="writing" locale="ua" enHref="/writing" uaHref="/ua/writing" />
      <section className="section hero"><div className="eyebrow">Нотатки</div><h1>Field notes on critical systems, platform reliability, fintech risk and AI production readiness.</h1><p className="lead">Short, high-signal essays для engineering leaders, які думають про release confidence, operational resilience, AI reliability та systems under pressure.</p></section>
      <section className="section grid two">{articles.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</section>
      <SiteFooter locale="ua" />
    </main>
  );
}
