import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

const tracks = [
  ['Platform / SRE / DevOps', 'Для Senior Platform Engineer, SRE, DevOps Lead, AWS/EKS/ECS, Kubernetes, Terraform та production-reliability roles.'],
  ['Software Architect / AI Product Engineer', 'Для R&D, distributed systems, Python/Go, agentic SDLC, data-platform та AI-assisted delivery roles.'],
  ['QA Strategy / Payments Risk', 'Для Senior QA, AQA, backend quality, payments, partner platform, transaction-risk та release-confidence roles.'],
  ['Head of Engineering / Technical Director', 'Для leadership roles around engineering operating model, delivery control, architecture, risk та stakeholder ownership.'],
];

const proof = [
  ['Website', 'NorthBridge advisory, services and case studies.', '/ua'],
  ['Risk Audit', 'Critical Systems Risk Audit offer and delivery model.', '/ua/services/critical-systems-risk-audit'],
  ['GitHub', 'Public proof assets, frameworks and repositories.', 'https://github.com/IRozinko'],
];

export default function UkrainianCVPage() {
  return (
    <main>
      <SiteNav active="cv" locale="ua" enHref="/cv" uaHref="/ua/cv" />
      <section className="section hero heroTight">
        <div className="eyebrow withLine">Профіль</div>
        <h1>Targeted CV available on request.</h1>
        <p className="lead">
          Я тримаю окремі CV versions для різних hiring contexts замість одного generic resume. Це зберігає precise signal для recruiters, CTOs, founders та advisory clients.
        </p>
        <div className="ctaRow">
          <a className="button primary" href="mailto:ivan.rozinko@gmail.com">Request targeted CV</a>
          <a className="button secondary" href="/ua/case-studies">Кейси</a>
          <a className="button ghost" href="https://github.com/IRozinko" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <section className="section split auditBand">
        <div>
          <div className="eyebrow withLine">Positioning</div>
          <h2>Critical Systems Engineering Leader.</h2>
          <p>
            Cross-layer engineering leader across software, platform reliability, QA strategy, fintech/Web3 risk, AI readiness and regulated delivery. Best fit: roles або advisory work where reliability, delivery, money-flow correctness, operational evidence або technical-risk visibility matter.
          </p>
        </div>
        <div className="card accent">
          <h3>Why not one public resume?</h3>
          <p>Platform role needs infrastructure and reliability evidence. QA Payments role needs risk and correctness evidence. Head/Director role needs leadership and operating-model evidence. The right CV version depends on context.</p>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <div>
            <div className="eyebrow withLine">CV tracks</div>
            <h2>Один профіль, різні role contexts.</h2>
          </div>
        </div>
        <div className="grid two">
          {tracks.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <div>
            <div className="eyebrow withLine">Public proof</div>
            <h2>What to review before asking for CV.</h2>
          </div>
        </div>
        <div className="grid three">
          {proof.map(([title, text, href]) => (
            <a className="card repo servicePackage" href={href} key={title} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="textLink">Open →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section contact">
        <div>
          <div className="eyebrow withLine">Best request format</div>
          <h2>Send the role, company, seniority level and hiring context.</h2>
          <p>I will provide the most relevant CV version for that context.</p>
        </div>
        <div className="ctaRow">
          <a className="button primary" href="mailto:ivan.rozinko@gmail.com">Email Ivan</a>
          <a className="button secondary" href="/ua/services/critical-systems-risk-audit">Risk Audit</a>
        </div>
      </section>

      <SiteFooter locale="ua" />
    </main>
  );
}
