type Locale = 'en' | 'ua';

type FooterProps = {
  locale?: Locale;
};

const copy = {
  en: {
    title: 'NorthBridge',
    line: 'Technical Leadership & Advisory — led by Ivan Rozinko',
    text: 'Platform reliability, delivery control, QA strategy, fintech/Web3 risk, AI readiness and regulated engineering.',
    email: 'Email',
  },
  ua: {
    title: 'NorthBridge',
    line: 'Technical Leadership & Advisory — Іван Розінко',
    text: 'Platform reliability, delivery control, QA strategy, fintech/Web3 risk, AI readiness та regulated engineering.',
    email: 'Email',
  },
};

export function SiteFooter({ locale = 'en' }: FooterProps) {
  const c = copy[locale];

  return (
    <footer className="footer">
      <div>
        <div className="footerBrand">
          <span className="nbMark small">NB</span>
          <h3>{c.title}</h3>
        </div>
        <p>{c.line}</p>
        <p>{c.text}</p>
      </div>
      <div className="footerLinks">
        <a href="mailto:ivan.rozinko@gmail.com">{c.email}</a>
        <a href="https://github.com/IRozinko" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://github.com/IRozinko/northbridge-critical-systems" target="_blank" rel="noreferrer">NorthBridge proof</a>
      </div>
    </footer>
  );
}
