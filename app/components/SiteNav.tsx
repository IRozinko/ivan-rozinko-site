type Locale = 'en' | 'ua';

type NavProps = {
  locale?: Locale;
  active?: string;
  enHref?: string;
  uaHref?: string;
};

const labels = {
  en: [
    ['About', '/about', 'about'],
    ['Services', '/services', 'services'],
    ['Case studies', '/case-studies', 'case-studies'],
    ['Advisory focus', '/northbridge', 'northbridge'],
    ['Insights', '/writing', 'writing'],
    ['CV', '/cv', 'cv'],
  ],
  ua: [
    ['Про мене', '/ua/about', 'about'],
    ['Послуги', '/ua/services', 'services'],
    ['Кейси', '/ua/case-studies', 'case-studies'],
    ['Консалтинг', '/ua/northbridge', 'northbridge'],
    ['Нотатки', '/ua/writing', 'writing'],
    ['CV', '/ua/cv', 'cv'],
  ],
};

const ctaLabels = {
  en: 'Work with me',
  ua: 'Написати',
};

export function SiteNav({ locale = 'en', active = 'home', enHref = '/', uaHref = '/ua' }: NavProps) {
  return (
    <nav className="nav">
      <a className="brandLockup" href={locale === 'ua' ? '/ua' : '/'} aria-label="NorthBridge home">
        <span className="nbMark">NB</span>
        <span className="brandText">
          <strong>NorthBridge</strong>
          <small>Technical Advisory</small>
        </span>
      </a>
      <div className="navLinks">
        {labels[locale].map(([label, href, key]) => (
          <a className={active === key ? 'current' : undefined} href={href} key={href}>{label}</a>
        ))}
        <a className="navCta" href="mailto:ivan.rozinko@gmail.com">{ctaLabels[locale]}</a>
        <span className="langSwitch">
          <a className={locale === 'en' ? 'active' : undefined} href={enHref}>EN</a>
          <a className={locale === 'ua' ? 'active' : undefined} href={uaHref}>UA</a>
        </span>
      </div>
    </nav>
  );
}
