import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

const tracks = [
  ['Principal Systems / Platform Engineer', 'Для Staff, Principal, Platform Architect та Principal SRE roles.'],
  ['Head of Engineering / CTO', 'Для Head, Director, VP Engineering, CTO та Fractional CTO roles.'],
  ['Platform / SRE / DevOps Lead', 'Для platform, cloud, infrastructure, DevOps та SRE leadership roles.'],
  ['FinTech / Web3 Quality & Risk Lead', 'Для fintech, Web3, QA leadership, release-risk та payment-risk roles.'],
];

export default function UkrainianCVPage() {
  return (
    <main>
      <SiteNav active="cv" locale="ua" enHref="/cv" uaHref="/ua/cv" />
      <section className="section hero"><div className="eyebrow">CV</div><h1>Targeted CV available on request.</h1><p className="lead">Я тримаю окремі CV versions для різних ринків замість одного generic resume. Це зберігає точний signal для recruiters, CTOs, founders та advisory clients.</p><div className="ctaRow"><a className="button primary" href="mailto:ivan.rozinko@gmail.com">Request CV</a><a className="button secondary" href="https://github.com/IRozinko" target="_blank" rel="noreferrer">GitHub</a></div></section>
      <section className="section"><div className="eyebrow">Available tracks</div><h2>Один профіль, різні buying contexts</h2><div className="grid two">{tracks.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <SiteFooter locale="ua" />
    </main>
  );
}
