const cvs = [
  ['Principal Systems / Platform Engineer', 'For Staff, Principal, Platform Architect and Principal SRE roles.', '/cv/principal-systems-platform-engineer.md'],
  ['Head of Engineering / CTO', 'For Head, Director, VP Engineering, CTO and Fractional CTO roles.', '/cv/head-of-engineering-cto.md'],
  ['Platform / SRE / DevOps Lead', 'For platform, cloud, infrastructure, DevOps and SRE leadership roles.', '/cv/platform-sre-devops-lead.md'],
  ['FinTech / Web3 Quality & Risk Lead', 'For fintech, Web3, QA leadership, release-risk and payment-risk roles.', '/cv/fintech-web3-quality-risk-lead.md'],
];

export default function CVPage() {
  return (
    <main>
      <nav className="nav"><a className="brand" href="/">IR</a><div><a href="/about">About</a><a href="/services">Services</a><a href="/case-studies">Case studies</a><a href="/northbridge">Northbridge</a></div></nav>
      <section className="section hero">
        <div className="eyebrow">CV Pack</div>
        <h1>Four market-specific CV versions built from one cross-layer engineering profile.</h1>
        <p className="lead">Each version emphasizes a different buying context while preserving the same core identity: Critical Systems / Platform / Reliability Engineering Leader.</p>
      </section>
      <section className="section grid two">
        {cvs.map(([title, text, url]) => <a className="card repo" href={url} key={title}><h3>{title}</h3><p>{text}</p></a>)}
      </section>
    </main>
  );
}
