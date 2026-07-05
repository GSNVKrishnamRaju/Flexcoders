import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Reveal from '../components/Reveal';
import { allCourses } from '../data/coursesData';

export default function CourseDetail() {
  const { id } = useParams();
  const course = allCourses.find((c) => c.id === Number(id));
  const [openCurriculum, setOpenCurriculum] = useState(null);
  const [showCurriculumModal, setShowCurriculumModal] = useState(false);
  const [showEnrollPopup, setShowEnrollPopup] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);
  const [enrollSubmitted, setEnrollSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleEnrollChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const resetEnrollForm = () => {
    setShowEnrollPopup(false);
    setTimeout(() => { setForm({ name: '', email: '', phone: '', message: '' }); setEnrollSubmitted(false); }, 300);
  };

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    setEnrollSubmitted(true);
  };

  if (!course) {
    return (
      <section className="section" style={{ textAlign: 'center', paddingTop: 140 }}>
        <div className="container">
          <h1 className="not-found-heading">Course Not Found</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 32 }}>The course you're looking for doesn't exist.</p>
          <Link to="/courses" className="btn btn-primary">View All Courses</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="course-detail-header">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <Reveal><h1>{course.title}</h1></Reveal>
            <Reveal>
              <div className="course-meta" style={{ justifyContent: 'center' }}>
                <span className="course-meta-item"><i className="far fa-clock"></i> {course.duration}</span>
                <span className="course-meta-item"><i className="fas fa-video"></i> {course.mode}</span>
                <span className="course-meta-item"><i className="fas fa-signal"></i> {course.badge}</span>
              </div>
            </Reveal>
          </div>
          <div className="cd-layout">
            <div className="cd-left">
              <Reveal>
                <div className="course-detail-image">
                  <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </Reveal>
              <Reveal>
                <div className="cd-price-row">
                  <span className="course-price" style={{ margin: 0 }}>{course.price}</span>
                  <button className="btn-logo" onClick={() => alert('Payment gateway coming soon!')}>
                    <i className="fas fa-credit-card"></i> Pay Now
                  </button>
                </div>
              </Reveal>
            </div>
            <div className="cd-right">
              <Reveal>
                <p className="cd-desc">{course.fullDesc}</p>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <div className="cd-btn-row">
              <button className="cd-btn-half" onClick={() => setShowEnrollPopup(true)}>
                <span className="cd-btn-icon"><i className="fas fa-graduation-cap"></i></span>
                <span className="cd-btn-content">
                  <span className="cd-btn-label">Enroll Now</span>
                  <span className="cd-btn-desc">Register for this course and secure your spot</span>
                </span>
                <span className="cd-btn-arrow"><i className="fas fa-chevron-right"></i></span>
              </button>
              <button className="cd-btn-half" onClick={() => setShowCurriculumModal(true)}>
                <span className="cd-btn-icon"><i className="fas fa-list"></i></span>
                <span className="cd-btn-content">
                  <span className="cd-btn-label">Curriculum</span>
                  <span className="cd-btn-desc">View the complete course syllabus</span>
                </span>
                <span className="cd-btn-arrow"><i className="fas fa-chevron-right"></i></span>
              </button>
              <button className="cd-btn-half" onClick={() => setShowCertModal(true)}>
                <span className="cd-btn-icon"><i className="fas fa-certificate"></i></span>
                <span className="cd-btn-content">
                  <span className="cd-btn-label">Certificate</span>
                  <span className="cd-btn-desc">See a sample of your certificate</span>
                </span>
                <span className="cd-btn-arrow"><i className="fas fa-chevron-right"></i></span>
              </button>
            </div>
          </Reveal>
          <Reveal>
            <a href={`/${course.brochure}`} download className="btn-logo btn-logo-wide">
              <i className="fas fa-download"></i> Download Brochure
            </a>
          </Reveal>
        </div>
      </section>

      {/* Curriculum Modal */}
      {showCurriculumModal && (
        <div className="curriculum-modal-overlay" onClick={() => setShowCurriculumModal(false)}>
          <div className="curriculum-modal" onClick={(e) => e.stopPropagation()}>
            <button className="curriculum-modal-close" onClick={() => setShowCurriculumModal(false)}>&times;</button>
            <h2>{course.title} - Curriculum</h2>
            <div className="curriculum-list" style={{ marginTop: 20 }}>
              {course.curriculum.map((module, i) => (
                <div className="curriculum-item" key={i}>
                  <div className="curriculum-header" onClick={() => setOpenCurriculum(openCurriculum === i ? null : i)}>
                    <span>Module {i + 1}: {module.title}</span>
                    <span className="arrow" style={{ transform: openCurriculum === i ? 'rotate(180deg)' : 'none' }}>
                      <i className="fas fa-chevron-down"></i>
                    </span>
                  </div>
                  <div className="curriculum-body" style={{ maxHeight: openCurriculum === i ? '300px' : '0' }}>
                    <ul>
                      {module.topics.map((topic, j) => <li key={j}>{topic}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Enroll Popup */}
      {showEnrollPopup && (
        <div className="refer-popup-overlay" onClick={resetEnrollForm}>
          <div className="refer-popup" onClick={(e) => e.stopPropagation()}>
            <button className="refer-popup-close" onClick={resetEnrollForm}>&times;</button>
            {enrollSubmitted ? (
              <div className="refer-thankyou">
                <div className="refer-thankyou-icon">&#10003;</div>
                <h3>Enrollment Request Received!</h3>
                <p>Thank you for your interest in {course.title}. Our team will get in touch with you shortly.</p>
                <button className="btn-logo" onClick={resetEnrollForm}>Close</button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: '1.3rem', marginBottom: 4 }}>Enroll in {course.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 16 }}>Fill in your details and we'll reach out to you.</p>
                <form className="refer-form" onSubmit={handleEnrollSubmit}>
                  <div className="refer-form-heading">Full Name *</div>
                  <input type="text" name="name" value={form.name} onChange={handleEnrollChange} placeholder="Enter your full name" required />
                  <div className="refer-form-heading">Email Address *</div>
                  <input type="email" name="email" value={form.email} onChange={handleEnrollChange} placeholder="Enter your email address" required />
                  <div className="refer-form-heading">Phone Number *</div>
                  <input type="tel" name="phone" value={form.phone} onChange={handleEnrollChange} placeholder="Enter your phone number" required />
                  <div className="refer-form-heading">Message (Optional)</div>
                  <textarea name="message" value={form.message} onChange={handleEnrollChange} placeholder="Any specific questions or preferences..." rows={3}></textarea>
                  <button type="submit" className="btn-logo" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}>
                    <i className="fas fa-paper-plane"></i> Submit Enrollment
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {showCertModal && (
        <div className="curriculum-modal-overlay" onClick={() => setShowCertModal(false)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <button className="curriculum-modal-close" onClick={() => setShowCertModal(false)}>&times;</button>
            <h2>Course Certificates</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
              Upon completion of {course.title}, you will receive both certificates.
            </p>
            <div className="cert-grid">
              <div className="cert-card">
                <div className="cert-badge">Completion</div>
                <div className="cert-image-wrapper">
                  <img src="/images/certificate-completion.png" alt="Completion Certificate" className="cert-image" />
                </div>
              </div>
              <div className="cert-card">
                <div className="cert-badge cert-badge-secondary">Participation</div>
                <div className="cert-image-wrapper">
                  <img src="/images/certificate-participation.png" alt="Participation Certificate" className="cert-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <Reveal><h2>What Will You Get</h2></Reveal>
            <Reveal><p>Everything you need to succeed in your learning journey.</p></Reveal>
          </div>
          <div className="features-grid">
            {[
              { icon: '💻', title: 'Live Classes', desc: 'Interactive live sessions with industry experts. Get your doubts resolved in real-time.' },
              { icon: '📝', title: 'Assignments', desc: 'Hands-on assignments after every module to reinforce your learning and track progress.' },
              { icon: '🚀', title: 'Projects', desc: 'Real-world projects that build your portfolio and demonstrate your skills to employers.' },
              { icon: '🎓', title: 'Certificate', desc: 'Industry-recognized certificate upon completion to boost your career prospects.' },
              { icon: '💼', title: 'Placement Assistance', desc: 'Resume building, mock interviews, and direct referrals to our partner companies.' },
              { icon: '♾️', title: 'Lifetime Access', desc: 'Access course materials, recordings, and updates forever — even after completion.' },
            ].map((item, i) => (
              <Reveal key={i}>
                <div className="feature-card">
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
            <Reveal><h2>Course Curriculum</h2></Reveal>
            <Reveal><p>Explore the full module breakdown of {course.title}.</p></Reveal>
          </div>
          <Reveal>
            <div className="curriculum-list" style={{ maxWidth: 800, margin: '0 auto' }}>
              {course.curriculum.map((module, i) => (
                <div className="curriculum-item" key={i}>
                  <div className="curriculum-header" onClick={() => setOpenCurriculum(openCurriculum === i ? null : i)}>
                    <span>Module {i + 1}: {module.title}</span>
                    <span className="arrow" style={{ transform: openCurriculum === i ? 'rotate(180deg)' : 'none' }}>
                      <i className="fas fa-chevron-down"></i>
                    </span>
                  </div>
                  <div className="curriculum-body" style={{ maxHeight: openCurriculum === i ? '300px' : '0' }}>
                    <ul>
                      {module.topics.map((topic, j) => <li key={j}>{topic}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="cta-heading">Ready to Get Started?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 32, fontSize: '1.1rem' }}>Enroll now and take the first step towards your career.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact?ref=enroll" className="btn-logo"><i className="fas fa-graduation-cap"></i> Enroll Now — {course.price}</Link>
            <Link to="/courses" className="btn-outline-logo"><i className="fas fa-arrow-left"></i> Back to Courses</Link>
          </div>
        </div>
      </section>
    </>
  );
}
