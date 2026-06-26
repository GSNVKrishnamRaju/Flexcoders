import { useState } from 'react';
import Reveal from '../components/Reveal';

const REFER_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxd41LrrTjYbKpdMkngCjyq1yH0zBFcHtRfav4Dk7dzI33aW040UO8Ne36_Mgf0nVIC3w/exec';

export default function ReferEarn() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.target);
    fetch(REFER_SCRIPT_URL, { method: 'POST', body: fd })
      .then(() => { setSubmitted(true); setSubmitting(false); })
      .catch(() => { setSubmitted(true); setSubmitting(false); });
  };

  const resetForm = () => {
    setShowForm(false);
    setSubmitted(false);
  };

  return (
    <div className="refer-page">
      {/* HERO */}
      <section className="refer-hero">
        <div className="refer-hero-inner">
          <div className="refer-hero-content">
            <span className="refer-badge">REFER</span>
            <h1 className="refer-heading">
              Refer <br/>
              <span style={{whiteSpace:'nowrap'}}>someone</span><br />
              and Earn upto<br />
              <span className="refer-amount">₹500</span>
            </h1>
            <p className="refer-desc">Cashback/Vouchers on every successful enrollment.</p>
            <button className="refer-btn" onClick={() => setShowForm(true)}>Start Referring</button>
          </div>
          <div className="refer-hero-visual">
            <div className="coin-scene-clip">
              <div className="coin-scene">
                <div className="coin-glow-bg"></div>
                <div className="coin c1"><span>₹</span></div>
                <div className="coin c2"><span>₹</span></div>
                <div className="coin c3"><span>₹</span></div>
                <div className="coin c4"><span>₹</span></div>
                <div className="coin c5"><span>₹</span></div>
                <div className="coin c6"><span>₹</span></div>
                <div className="coin c7"><span>₹</span></div>
                <div className="coin c8"><span>₹</span></div>
                <div className="coin c9"><span>₹</span></div>
                <div className="coin c10"><span>₹</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <Reveal><h2>How It Works</h2></Reveal>
            <Reveal><p>Three simple steps to start earning rewards.</p></Reveal>
          </div>
          <div className="features-grid">
            {[
              { icon: '🔗', title: '1. Share Your Link', desc: 'Share your unique referral link with friends, family, and colleagues looking to upskill.' },
              { icon: '📝', title: '2. They Enroll', desc: 'Your referral signs up and enrolls in any course using your link.' },
              { icon: '💰', title: '3. Earn Rewards', desc: <>You earn <span className="refer-amount-inline">₹500</span> cashback per successful referral. No upper limit!</> },
            ].map((s, i) => (
              <Reveal key={i}>
                <div className="feature-card">
                  <div className="feature-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REWARDS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <Reveal><h2>Rewards &amp; Benefits</h2></Reveal>
            <Reveal><p>Great incentives for every successful referral.</p></Reveal>
          </div>
          <div className="features-grid">
            {[
              { icon: '🎁', title: '₹500 Per Referral', desc: <>Earn <span className="refer-amount-inline">₹500</span> cashback for every friend who enrolls. Refer as many as you like!</> },
              { icon: '💸', title: 'Quick Payout', desc: 'Rewards are processed within 7 days of your referral completing their first month.' },
              { icon: '📉', title: 'Friend Gets 10% Off', desc: 'Your referred friend gets an instant 10% discount on course fees — a win-win!' },
            ].map((r, i) => (
              <Reveal key={i}>
                <div className="feature-card">
                  <div className="feature-icon">{r.icon}</div>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REFERRAL POPUP */}
      {showForm && (
        <div className="refer-popup-overlay" onClick={resetForm}>
          <div className="refer-popup" onClick={(e) => e.stopPropagation()}>
            <button className="refer-popup-close" onClick={resetForm}>&times;</button>
            {!submitted ? (
              <>
                <h3 style={{ marginBottom: 20, fontSize: '1.4rem' }}>Refer &amp; Earn</h3>
                <form onSubmit={handleSubmit} className="refer-form">
                  <h4 className="refer-form-heading">Your Details</h4>
                  <input type="text" name="your_name" placeholder="Your Name" required />
                  <input type="tel" name="your_phone" placeholder="Your Phone Number" required />
                  <input type="email" name="your_email" placeholder="Your Email" required />
                  <h4 className="refer-form-heading">Referral Details</h4>
                  <input type="text" name="ref_name" placeholder="Referral's Name" required />
                  <input type="tel" name="ref_phone" placeholder="Referral's Phone Number" required />
                  <input type="email" name="ref_email" placeholder="Referral's Email" required />
                  <textarea name="message" placeholder="Message (optional)" rows={3}></textarea>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                    {submitting ? <><i className="fas fa-spinner fa-spin"></i> Submitting...</> : <><i className="fas fa-paper-plane"></i> Submit</>}
                  </button>
                </form>
              </>
            ) : (
              <div className="refer-thankyou">
                <div className="refer-thankyou-icon"><i className="fas fa-check-circle"></i></div>
                <h3>Thank You!</h3>
                <p>Your referral details have been submitted.<br />Our team will reach out soon.</p>
                <button className="btn btn-primary" onClick={resetForm}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
