import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import FaqSection from '../components/FaqSection';

const GOOGLE_FORM_ACTION = ''; // TODO: Replace with Google Form action URL
const ENTRY = {
  fname: 'entry.xxxxx',
  lname: 'entry.xxxxx',
  email: 'entry.xxxxx',
  phone: 'entry.xxxxx',
  subject: 'entry.xxxxx',
  message: 'entry.xxxxx',
};

const faqItems = [
  { q: 'What courses does FlexCoders offer?', a: 'We offer a wide range of industry-focused programs including Data Science, Full Stack Web Development, Cybersecurity, Cloud Computing, Digital Marketing, Mobile App Development, AI & Deep Learning, and Python Programming. Each course is designed in collaboration with industry experts.' },
  { q: 'What is the duration of the courses?', a: 'Course durations vary from 3 months (Python Programming) to 8 months (Full Stack Web Development). Most programs are 4-6 months long. You can find specific durations on each course\'s detail page.' },
  { q: 'Are the classes live or recorded?', a: 'We offer live interactive classes conducted by industry experts. All sessions are recorded and made available in your LMS dashboard, so you can revisit them anytime. This hybrid approach ensures flexibility in learning.' },
  { q: 'Do you provide placement assistance?', a: 'Yes! We provide comprehensive placement support including resume building, LinkedIn profile optimization, mock interviews, aptitude training, and direct referrals to our 1,500+ partner companies. Our placement rate is over 95%.' },
  { q: 'What is the fee structure? Is there EMI available?', a: 'Course fees range from ₹29,999 to ₹59,999 depending on the program. We offer flexible EMI options with 0% interest for up to 12 months. Group discounts and early bird offers are also available.' },
  { q: 'Will I receive a certificate after completing the course?', a: 'Absolutely! You will receive an industry-recognized certificate upon successful completion of the course and submission of capstone projects. Our certificates are verified and accepted by partner companies.' },
  { q: 'Can I get a refund if I\'m not satisfied?', a: 'Yes, we offer a 7-day money-back guarantee. If you\'re not satisfied within the first week, we\'ll provide a full refund. We\'re confident in the quality of our programs and want you to learn with peace of mind.' },
];

export default function Contact() {
  const firstInputRef = useRef(null);
  const formRef = useRef(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('ref') === 'enroll' && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    if (!GOOGLE_FORM_ACTION) e.preventDefault();
    alert('Thank you! We will get back to you shortly.');
    e.target.reset();
    if (GOOGLE_FORM_ACTION) setTimeout(() => formRef.current?.reset(), 500);
  };

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Have questions? We'd love to hear from you. Reach out to us anytime." />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <Reveal className="reveal-left">
              <div>
                <h2 className="contact-heading">Get In Touch</h2>
                <form ref={formRef} className="contact-form" action={GOOGLE_FORM_ACTION || '#'} method="POST" target={GOOGLE_FORM_ACTION ? 'hidden_iframe' : '_self'} onSubmit={handleSubmit}>
                  <div className="contact-name-grid">
                    <input ref={firstInputRef} type="text" name={ENTRY.fname} placeholder="First Name" required />
                    <input type="text" name={ENTRY.lname} placeholder="Last Name" required />
                  </div>
                  <input type="email" name={ENTRY.email} placeholder="Email Address" required />
                  <input type="tel" name={ENTRY.phone} placeholder="Phone Number" />
                  <select name={ENTRY.subject} required>
                    <option value="">Select Subject</option>
                    <option>Course Inquiry</option>
                    <option>Placement Support</option>
                    <option>Partnership Opportunity</option>
                    <option>General Feedback</option>
                    <option>Other</option>
                  </select>
                  <textarea name={ENTRY.message} placeholder="Your Message" required></textarea>
                  <button type="submit" className="btn btn-primary"><i className="fas fa-paper-plane"></i> Send Message</button>
                </form>
                {GOOGLE_FORM_ACTION && <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>}
              </div>
            </Reveal>
            <Reveal className="reveal-right">
              <div className="contact-info">
                {[
                  { icon: '📍', title: 'Visit Us', detail: <>Madhapur, Hyderabad, Telangana, India</> },
                  { icon: '📞', title: 'Call Us', detail: <>+91 9989783404</> },
                  { icon: '✉️', title: 'Email Us', detail: <>info@flexcoders.in </> },
                  { icon: '🕐', title: 'Working Hours', detail: <>Mon - Sat: 10:00 AM - 07:00 PM<br />Sunday: Closed </> },
                ].map((c, i) => (
                  <div className="contact-info-card" key={i}>
                    <div className="contact-info-icon">{c.icon}</div>
                    <div>
                      <h4>{c.title}</h4>
                      <p>{c.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section" style={{ padding: '0 0 60px' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Location</h2>
            <p>Visit us at our campus for a personal consultation.</p>
          </div>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6591.391643131647!2d78.38913424303044!3d17.4521991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9136fc7f7665%3A0x65271cecad4703c3!2sFlexcoders!5e1!3m2!1sen!2sin!4v1781874339109!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="map-iframe"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Flexcoders Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <Reveal><h2>Frequently Asked Questions</h2></Reveal>
            <Reveal><p>Find quick answers to common questions. Can't find what you're looking for? Contact us directly.</p></Reveal>
          </div>
          <Reveal>
            <FaqSection items={faqItems} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
