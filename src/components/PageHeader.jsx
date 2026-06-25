import Reveal from './Reveal';

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header">
      <div className="container">
        <Reveal><h1>{title}</h1></Reveal>
        <Reveal><p>{subtitle}</p></Reveal>
      </div>
    </section>
  );
}
