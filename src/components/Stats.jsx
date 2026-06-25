import { useEffect, useRef } from 'react';

export default function Stats() {
  const counters = useRef([]);
  const counted = useRef(new Set());

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseFloat(el.dataset.target);
            if (!counted.current.has(el) && !isNaN(target)) {
              counted.current.add(el);
              animate(el, target);
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.current.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

    function animate(el, target) {
      let current = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = el.dataset.decimal ? current.toFixed(1) : Math.floor(current).toLocaleString();
      }, 25);
    }

    const stats = [
      { value: 10000, label: 'Students Trained', suffix: '+' },
      { value: 25, label: 'Industry Mentors', suffix: '+' },
      { value: 4.9, label: 'Google Rating', decimal: true },
    ];

  return (
    <section className="section stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-number">
                <span data-target={s.value} data-decimal={s.decimal ? 'true' : ''} ref={(el) => (counters.current[i] = el)}>0</span>
                {s.suffix || ''}
              </div>
              <div className="stat-label">{s.label}{s.label === 'Google Rating' ? ' ⭐' : ''}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
