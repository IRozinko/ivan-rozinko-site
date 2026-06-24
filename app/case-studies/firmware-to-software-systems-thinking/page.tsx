import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';

const risks = ['State assumptions not matching real device behavior', 'Boundary failures between firmware and backend', 'Timing and retry issues', 'Data serialization or protocol mismatch', 'Weak observability into device-side failures'];
const work = ['Applied low-level systems thinking to broader software and platform decisions', 'Reasoned about state, boundaries, constraints and failure modes', 'Used firmware/embedded experience as a reliability lens for backend and cloud systems', 'Connected engineering implementation with operational diagnosis'];

export default function FirmwareSystemsCase() {
  return (
    <main>
      <SiteNav active="case-studies" locale="en" enHref="/case-studies/firmware-to-software-systems-thinking" uaHref="/ua/case-studies" />
      <section className="section hero caseHero">
        <div className="eyebrow">Firmware / Software</div>
        <h1>Firmware-to-Software Systems Thinking</h1>
        <p className="lead">Low-level engineering experience translated into stronger reasoning about state, constraints, timing, boundaries and hidden failure modes in modern software systems.</p>
      </section>
      <section className="section caseBody">
        <h2>Context</h2>
        <p>Low-level and firmware work creates a different engineering mindset: constraints, state machines, timing, hardware/software boundaries, data integrity and failure behavior matter from the start.</p>
        <h2>Risk surface</h2>
        <ul>{risks.map((item) => <li key={item}>{item}</li>)}</ul>
        <h2>Work performed</h2>
        <ul>{work.map((item) => <li key={item}>{item}</li>)}</ul>
        <h2>Reusable lesson</h2>
        <p>Firmware experience is not only a separate technical past. It is a way to see system behavior beneath the surface of web, cloud and product software.</p>
        <div className="ctaRow"><a className="button primary" href="/case-studies">Back to case studies</a><a className="button secondary" href="https://github.com/IRozinko/embedded-cloud-reliability" target="_blank" rel="noreferrer">Related proof asset</a></div>
      </section>
      <SiteFooter locale="en" />
    </main>
  );
}
