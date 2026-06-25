import { useState } from 'react';

export default function FaqSection({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div className="faq-item" key={i}>
          <div className="faq-question" onClick={() => toggle(i)}>
            <span>{item.q}</span>
            <span className="faq-icon" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'none' }}>
              <i className="fas fa-plus"></i>
            </span>
          </div>
          <div className="faq-answer" style={{ maxHeight: openIndex === i ? '300px' : '0' }}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
