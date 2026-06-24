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
    ['CV', '/cv', 'cv'],
    ['Northbridge', '/northbridge', 'northbridge'],
    ['Writing', '/writing', 'writing'],
  ],
  ua: [
    ['Про мене', '/ua/about', 'about'],
    ['Послуги', '/ua/services', 'services'],
    ['Кейси', '/ua/case-studies', 'case-studies'],
    ['CV', '/ua/cv', 'cv'],
    ['Northbridge', '/ua/northbridge', 'northbridge'],
    ['Нотатки', '/ua/writing', 'writing'],
  ],
};

export function SiteNav({ locale = 'en', active = 'home', enHref = '/', uaHref = '/ua' }: NavProps) {
  return (
    <nav className="nav">
      <a className="brand" href={locale === 'ua' ? '/ua' : '/'}>IR</a>
      <div>
        {labels[locale].map(([label, href, key]) => (
          <a className={active === key ? 'current' : undefined} href={href} key={href}>{label}</a>
        ))}
        <span className="langSwitch">
          <a className={locale === 'en' ? 'active' : undefined} href={enHref}>EN</a>
          <a className={locale === 'ua' ? 'active' : undefined} href={uaHref}>UA</a>
        </span>
      </div>
    </nav>
  );
}
