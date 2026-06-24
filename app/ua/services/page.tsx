import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

const services = [
  ['Critical Systems Risk Audit', 'Cross-layer review of architecture, CI/CD, QA strategy, platform reliability, observability, incident readiness, delivery process та business-critical flows.', ['Risk map', 'Top failure modes', '30/60/90 remediation roadmap', 'Executive summary']],
  ['Platform & Release Readiness', 'Readiness review для важливих релізів, migrations, scaling work або production hardening.', ['SLO/SLI review', 'Release gates', 'Rollback readiness', 'Monitoring coverage']],
  ['FinTech / Web3 Risk Review', 'Focused review для payment, wallet, fee, limit, transaction-state та crypto/Web3 flows.', ['Payment state matrix', 'Fee and limit risks', 'Wallet/transaction coverage', 'Edge-case backlog']],
  ['AI Reliability Review', 'Production-readiness review для AI features, LLM workflows та agentic systems.', ['Prompt regression', 'Tool-use risks', 'Audit trails', 'Guardrail gaps']],
  ['Embedded-to-Cloud Reliability Review', 'Boundary-risk review для device, firmware, backend, cloud, telemetry та operations.', ['Device state model', 'OTA risks', 'Telemetry gaps', 'Incident patterns']],
  ['Fractional CTO / Advisor', 'Ongoing advisory для founders, CTOs та engineering leaders, яким потрібне senior technical judgement.', ['Technical roadmap', 'Risk prioritization', 'Vendor review', 'Operating model']],
];

export default function UkrainianServicesPage() {
  return (
    <main>
      <SiteNav active="services" locale="ua" enHref="/services" uaHref="/ua/services" />
      <section className="section hero">
        <div className="eyebrow">Послуги</div>
        <h1>Advisory для business-critical systems під technical, delivery або compliance pressure.</h1>
        <p className="lead">Головне питання: де ця система може зламатися у production, delivery, audit, customer trust або money-flow integrity — і що потрібно виправити першим?</p>
      </section>
      <section className="section grid two">{services.map(([title, text, items]) => <article className="card" key={title as string}><h3>{title as string}</h3><p>{text as string}</p><ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul></article>)}</section>
      <SiteFooter locale="ua" />
    </main>
  );
}
