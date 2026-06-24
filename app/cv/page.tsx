const tracks = [
  ['Principal Systems / Platform Engineer', 'For Staff, Principal, Platform Architect and Principal SRE roles.'],
  ['Head of Engineering / CTO', 'For Head, Director, VP Engineering, CTO and Fractional CTO roles.'],
  ['Platform / SRE / DevOps Lead', 'For platform, cloud, infrastructure, DevOps and SRE leadership roles.'],
  ['FinTech / Web3 Quality & Risk Lead', 'For fintech, Web3, QA leadership, release-risk and payment-risk roles.'],
];

export default function CVPage() {
  return (
    <main>
      <nav className="nav"><a className="brand" href="/">IR</a><div><a href="/about">About</a><a href="/services">Services</a><a href="/case-studies">Case studies</a><a href="/northbridge">Northbridge</a></div></nav>
      <section className="section hero">
        <div className="eyebrow">CV</div>
        <h1>Targeted CV available on request.</h1>
        <p className="lead">I keep separate CV versions for different markets instead of sending one generic resume everywhere. That keeps the positioning precise and avoids mixing unrelated signals for recruiters, CTOs and advisory clients.</p>
        <div className="ctaRow">
          <a className="button primary" href="mailto:ivan.rozinko@gmail.com">Request CV</a>
          <a className="button secondary" href="https://github.com/IRozinko" target="_blank" rel="noreferrer">View GitHub</a>
        </div>
      </section>
      <section className="section">
        <div className="eyebrow">Available tracks</div>
        <h2>One profile, different buying contexts</h2>
        <div className="grid two">
          {tracks.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
      <section className="section split">
        <div>
          <div className="eyebrow">Why not one public resume?</div>
          <h2>Different roles buy different evidence.</h2>
          <p>A Principal Platform role needs infrastructure, systems and reliability signals. A Head of Engineering role needs leadership, delivery and stakeholder ownership. A FinTech/Web3 role needs payment-risk and QA strategy. Publishing every version publicly creates noise; sending the right version creates clarity.</p>
        </div>
        <div className="card accent">
          <h3>Best request format</h3>
          <p>Send the role, company, seniority level and hiring context. I will provide the most relevant version.</p>
        </div>
      </section>
    </main>
  );
}
