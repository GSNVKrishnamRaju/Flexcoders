import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';

const jobs = [
  {
    title: 'Business Development Associate',
    type: 'Full-Time',
    location: 'Hyderabad',
    details: `About the Role:

We are looking for an enthusiastic and self-motivated Business Development Associate (Fresher) to join our growing team. This role is perfect for someone eager to kickstart their career in sales, marketing, and client relations. You'll work closely with our business team to identify new opportunities, engage with clients, and contribute to the company's growth.

Key Responsibilities:

• Identify and generate new business leads through research, networking, and outreach
• Maintain relationships with existing and potential clients to understand their needs
• Assist in preparing business proposals, presentations, and marketing materials
• Conduct market research to identify trends, competitors, and customer preferences
• Collaborate with the sales and marketing team to achieve revenue targets
• Schedule and follow up on client meetings, calls, and product demos
• Update and manage data in CRM tools for lead tracking and reporting
• Support senior business managers in strategic planning and business expansion

Required Skills:

• Strong communication and presentation skills (verbal and written)
• Good understanding of sales and marketing concepts
• Ability to work independently and as part of a team
• Positive attitude, eagerness to learn, and passion for growth
• Basic knowledge of MS Office (Word, Excel, PowerPoint)
• Good analytical and problem-solving abilities

Educational Qualification:

• Bachelor's Degree in Business Administration, Marketing, Commerce, or related field (MBA preferred but not required)
• Fresh graduates or candidates with up to 1 year of experience can apply

What We Offer:

• Comprehensive training and mentorship
• Performance-based incentives and career growth opportunities
• A supportive and dynamic work environment
• Exposure to client interaction and real-world business strategy`,
  },
  {
    title: 'Business Development Executive',
    type: 'Internship',
    location: 'Hyderabad',
    details: `About the Role:

We are looking for an enthusiastic and self-motivated Business Development Executive (Fresher) to join our growing team. This role is perfect for someone eager to kickstart their career in sales, marketing, and client relations. You'll work closely with our business team to identify new opportunities, engage with clients, and contribute to the company's growth.

Key Responsibilities:

• Identify and generate new business leads through research, networking, and outreach
• Maintain relationships with existing and potential clients to understand their needs
• Assist in preparing business proposals, presentations, and marketing materials
• Conduct market research to identify trends, competitors, and customer preferences
• Collaborate with the sales and marketing team to achieve revenue targets
• Schedule and follow up on client meetings, calls, and product demos
• Update and manage data in CRM tools for lead tracking and reporting
• Support senior business managers in strategic planning and business expansion

Required Skills:

• Strong communication and presentation skills (verbal and written)
• Good understanding of sales and marketing concepts
• Ability to work independently and as part of a team
• Positive attitude, eagerness to learn, and passion for growth
• Basic knowledge of MS Office (Word, Excel, PowerPoint)
• Good analytical and problem-solving abilities

Educational Qualification:

• Bachelor's Degree in Business Administration, Marketing, Commerce, or related field (MBA preferred but not required)
• Fresh graduates or candidates with up to 1 year of experience can apply

What We Offer:

• Comprehensive training and mentorship
• Performance-based incentives and career growth opportunities
• A supportive and dynamic work environment
• Exposure to client interaction and real-world business strategy`,
  },
  {
    title: 'HR Specialist & Manager',
    type: 'Full-Time',
    location: 'Hyderabad',
    details: `Job Summary:

We are looking for a proactive and detail-oriented HR Specialist to join our growing team. This entry-level role is ideal for recent graduates passionate about recruitment, employee engagement, and human resource management. You'll assist in managing day-to-day HR operations and help build a positive workplace culture.

Key Responsibilities:

• Support the HR team in recruitment, onboarding, and training processes
• Maintain and update employee records and HR databases
• Assist with employee engagement programs, events, and internal communication
• Help manage payroll documentation and attendance tracking
• Coordinate performance review processes and feedback collection
• Ensure compliance with HR policies and procedures
• Contribute ideas to improve HR operations and employee experience

Required Skills:

• Strong communication and interpersonal skills
• Basic understanding of HR functions and labor laws
• Good organizational and multitasking abilities
• Proficiency in MS Office (Word, Excel, PowerPoint)
• Attention to detail and willingness to learn

Qualifications:

• Bachelor's degree in Human Resource Management, Business Administration, or a related field
• Freshers are encouraged to apply — training will be provided`,
  },
  {
    title: 'Digital Marketing',
    type: 'Full-Time',
    location: 'Hyderabad',
    details: `About the Role:

We are looking for a creative and motivated Digital Marketing Executive (Fresher) to join our growing marketing team. This role is perfect for individuals who are passionate about social media, SEO, online advertising, and content creation. You'll work closely with our digital marketing experts to execute campaigns that boost brand visibility and engagement across various digital platforms.

Key Responsibilities:

• Assist in planning and executing digital marketing campaigns (Google Ads, Meta Ads, etc.)
• Manage and grow the company's social media presence (Instagram, LinkedIn, Facebook, X, YouTube)
• Support in content creation — posts, blogs, reels, and marketing copies
• Conduct keyword research and assist in SEO optimization for websites and blogs
• Monitor campaign performance using analytics tools like Google Analytics, Search Console, and Meta Insights
• Assist in creating and sending email marketing campaigns
• Keep up with the latest digital trends and tools to improve campaign effectiveness

Required Skills:

• Basic understanding of Digital Marketing concepts (SEO, SEM, SMM, Content, Email Marketing)
• Familiarity with tools like Canva, Google Analytics, Meta Business Suite, or Mailchimp
• Strong communication and creative thinking skills
• Ability to work collaboratively in a team environment
• Eagerness to learn and adapt to new marketing trends

Education:

• Bachelor's degree in Marketing, Business, Communications, or any related field
• Certification or coursework in Digital Marketing is a plus`,
  },
];

export default function Careers() {
  const [expanded, setExpanded] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', resume: '' });

  const toggleJob = (i) => setExpanded(expanded === i ? null : i);

  const openApply = (title) => {
    setSelectedJob(title);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', resume: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader title="Careers" subtitle="Find Your Relevant Internships & Jobs" />

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <Reveal><h2>Why Join FlexCoders?</h2></Reveal>
            <Reveal><p>We invest in our people. Here's what makes working with us different.</p></Reveal>
          </div>
          <div className="features-grid why-join-grid">
            {[
              { icon: '📈', title: 'Growth & Learning', desc: 'Continuous upskilling programs, certifications, and mentorship to accelerate your career trajectory.' },
              { icon: '💡', title: 'Innovative Culture', desc: 'Work on cutting-edge edtech solutions with autonomy to experiment, ideate, and own your projects.' },
              { icon: '🤝', title: 'Collaborative Team', desc: 'Join a tight-knit team that values transparency, open communication, and mutual support.' },
              { icon: '🎯', title: 'Real Impact', desc: 'Shape the careers of thousands of learners. Your work directly transforms lives through education.' },
            ].map((item, i) => (
              <Reveal key={i}>
                <div className="feature-card" style={{ padding: '28px 20px' }}>
                  <div className="feature-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <Reveal><h2>We are hiring...</h2></Reveal>
            <Reveal><p>Join our team and be part of something great.</p></Reveal>
          </div>
          <div className="cdc-job-list">
            {jobs.map((job, i) => (
              <Reveal key={i}>
                <div className="cdc-job-card">
                  <div className="cdc-job-header" onClick={() => toggleJob(i)}>
                    <div className="cdc-job-info">
                      <h3>{job.title}</h3>
                      <p className="cdc-job-meta"><i className="fas fa-briefcase"></i> {job.type} &nbsp; <i className="fas fa-map-marker-alt"></i> {job.location}</p>
                    </div>
                    <button className="btn-logo cdc-apply-btn" onClick={(e) => { e.stopPropagation(); expanded === i ? null : toggleJob(i); }}>
                      {expanded === i ? <><i className="fas fa-chevron-up"></i> Less</> : 'Apply'}
                    </button>
                  </div>
                  <div className={`cdc-job-details ${expanded === i ? 'cdc-expanded' : ''}`}>
                    <div className="cdc-job-description">
                      {job.details.split('\n').map((line, j) => {
                        if (line.startsWith('•')) return <p key={j} className="cdc-bullet">{line.slice(2)}</p>;
                        if (line.match(/^[A-Za-z\s]+:$/)) return <h4 key={j} className="cdc-section-title">{line}</h4>;
                        if (line.trim() === '') return <br key={j} />;
                        return <p key={j}>{line}</p>;
                      })}
                    </div>
                    <div className="cdc-apply-now-row">
                      <button className="btn-logo" onClick={() => openApply(job.title)}>
                        <i className="fas fa-paper-plane"></i> Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Popup */}
      {showPopup && (
        <div className="refer-popup-overlay" onClick={closePopup}>
          <div className="refer-popup" onClick={(e) => e.stopPropagation()}>
            <button className="refer-popup-close" onClick={closePopup}>&times;</button>
            {submitted ? (
              <div className="refer-thankyou">
                <div className="refer-thankyou-icon">&#10003;</div>
                <h3>Application Submitted!</h3>
                <p>Thank you for applying for {selectedJob}. Our team will review your application and get back to you.</p>
                <button className="btn-logo" onClick={closePopup}>Close</button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: '1.3rem', marginBottom: 4 }}>Apply for {selectedJob}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 16 }}>Fill in your details and we'll get in touch.</p>
                <form className="refer-form" onSubmit={handleSubmit}>
                  <div className="refer-form-heading">Full Name *</div>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Enter your full name" required />
                  <div className="refer-form-heading">Email Address *</div>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Enter your email address" required />
                  <div className="refer-form-heading">Phone Number *</div>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Enter your phone number" required />
                  <div className="refer-form-heading">Resume Link (Google Drive) *</div>
                  <input type="url" value={form.resume} onChange={(e) => setForm({ ...form, resume: e.target.value })} placeholder="Paste your Google Drive resume link" required />
                  <button type="submit" className="btn-logo" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}>
                    <i className="fas fa-paper-plane"></i> Submit Application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
