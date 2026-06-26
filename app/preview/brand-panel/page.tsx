import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

export default function BrandPanelPreview() {
  return (
    <main>
      <SiteNav active="home" locale="en" enHref="/preview/brand-panel" uaHref="/ua" />
      <section className="heroShell heroWithPanel">
        <div className="heroCopy">
          <div className="eyebrow withLine">Variant B · Brand panel</div>
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
            <a className="button ghost" href="/preview/typographic">Compare variant A</a>
          </div>
          <p className="previewNote">More NorthBridge presence, but still no fake illustrated office scene.</p>
        </div>
        <aside className="heroPanel" aria-label="NorthBridge positioning">
          <div className="heroPanelMark">NB</div>
          <p>NorthBridge</p>
          <span>Technical Leadership & Advisory</span>
        </aside>
      </section>
      <SiteFooter locale="en" />
    </main>
  );
}
