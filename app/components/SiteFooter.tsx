type Locale = 'en' | 'ua';

type FooterProps = {
  locale?: Locale;
};

const copy = {
  en: {
    title: 'Ivan Rozinko',
    line: 'Critical Systems / Platform / Reliability Engineering Leader',
    text: 'Software, firmware, cloud, QA strategy, fintech/Web3 risk, AI readiness and regulated delivery — for systems where failure is expensive.',
    contact: 'Contact',
    proof: 'Proof',
    email: 'Email',
  },
  ua: {
    title: 'Іван Розінко',
    line: 'Critical Systems / Platform / Reliability Engineering Leader',
    text: 'Software, firmware, cloud, QA strategy, fintech/Web3 risk, AI readiness та regulated delivery — для систем, де помилка коштує дорого.',
    contact: 'Контакт',
    proof: 'Proof',
    email: 'Email',
  },
};

export function SiteFooter({ locale = 'en' }: FooterProps) {
  const c = copy[locale];

  return (
    <footer className="footer">
      <div>
        <h3>{c.title}</h3>
        <p>{c.line}</p>
        <p>{c.text}</p>
      </div>
      <div className="footerLinks">
        <a href="mailto:ivan.rozinko@gmail.com">{c.email}</a>
        <a href="https://github.com/IRozinko" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://github.com/IRozinko/northbridge-critical-systems" target="_blank" rel="noreferrer">Northbridge</a>
      </div>
    </footer>
  );
}
