import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

export default function TypographicPreview() {
  return (
    <main>
      <SiteNav active="home" locale="en" enHref="/preview/typographic" uaHref="/ua" />
      <section className="heroShell heroTypographic">
        <div className="heroCopy">
          <div className="eyebrow withLine">Variant A · Typographic</div>
          <h1>
            Ship better software.<br />
            Run stable platforms.<br />
            <span>Reduce technical risk.</span>
          </h1>
          <p className="lead">
            Senior cross-layer engineering leader and advisor. I help organizations build reliable systems, strengthen delivery, and reduce risk across software, cloud, QA strategy, fintech/Web3, AI readiness and regulated industries.
          </p>
          <div className="ctaRow">
            <a className="button primary" href="/services">Explore services <span aria-hidden="true">→</span></a>
            <a className="button secondary" href="/case-studies">View case studies</a>
            <a className="button ghost" href="/preview/brand-panel">Compare variant B</a>
          </div>
          <p className="previewNote">Clean typography, less branding panel, maximum focus on the offer.</p>
        </div>
      </section>
      <SiteFooter locale="en" />
    </main>
  );
}
