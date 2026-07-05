import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Stats from '../components/Stats';
import { allCourses } from '../data/coursesData';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  const popular = allCourses.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>Empower Your Future With <span>Expert-Led Learning</span></h1>
            <p>Industry-focused courses, hands-on projects, and personalized mentorship to launch your dream career.</p>
            <div className="hero-buttons">
              <Link to="/courses" className="btn btn-primary"><i className="fas fa-book-open"></i> Explore Courses</Link>
              <Link to="/contact?ref=enroll" className="btn btn-secondary"><i className="fas fa-question-circle"></i> Enquiry Now</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>10000+</h3>
                <p>Students</p>
              </div>
              <div className="hero-stat">
                <h3>25+</h3>
                <p>Trainers</p>
              </div>
            </div>
          </div>
            <div className="hero-image">
            <div className="hero-image-placeholder" style={{ overflow: 'hidden', boxShadow: 'var(--shadow-lg)', borderRadius: 30, width: '100%', maxWidth: 500 }}>
              <img src={theme === 'dark' ? '/hero-image-dark.png' : '/hero-image.png'} alt="Students learning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <Reveal><h2>Why Choose Us</h2></Reveal>
            <Reveal><p>We provide a comprehensive learning ecosystem designed for your success.</p></Reveal>
          </div>
          <div className="features-grid">
            {[
              { icon: '🎓', title: 'Expert Mentors', desc: 'Learn from 25+ industry professionals who bring real-world experience and deep domain expertise to every session.' },
              { icon: '💻', title: 'Hands-On Learning', desc: 'Build real projects and case studies that prepare you for actual job challenges from day one.' },
              { icon: '🏆', title: 'Certification', desc: 'Earn industry-recognized certificates that validate your skills and boost your career profile.' },
              { icon: '🚀', title: 'Placement Assistance', desc: 'Get dedicated placement support, resume reviews, mock interviews and direct referrals.' },
              { icon: '📅', title: 'Flexible Scheduling', desc: 'Learn at your own pace with weekday and weekend batches designed for working professionals.' },
              { icon: '👥', title: 'Community', desc: 'Join a vibrant network of learners, alumni and mentors who support your growth journey.' },
            ].map((f, i) => (
              <Reveal key={i}>
                <div className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <Reveal><h2>Popular Courses</h2></Reveal>
            <Reveal><p>Explore our most sought-after programs designed for today's job market.</p></Reveal>
          </div>
          <div className="courses-grid">
            {popular.map((c) => (
              <Reveal key={c.id}>
                <div className="course-card">
                  <div className="course-card-image"><img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                  <div className="course-card-body">
                    <span className="course-card-badge">{c.badge}</span>
                    <h3>{c.title}</h3>
                    <p>{c.shortDesc}</p>
                    <div className="course-card-meta">
                      <span><i className="far fa-clock"></i> {c.duration}</span>
                      <span><i className="fas fa-video"></i> {c.mode}</span>
                      <span><i className="fas fa-signal"></i> {c.badge}</span>
                    </div>
                    <Link to={`/course/${c.id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/courses" className="btn btn-secondary">View All Courses <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      <Stats />

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <Reveal><h2>What Our Students Say</h2></Reveal>
            <Reveal><p>Hear from our alumni about their learning journey.</p></Reveal>
          </div>
          <style>{`
            .testimonials-track {
              display: flex;
              gap: 24px;
              width: max-content;
              animation: scrollLeft 40s linear infinite;
            }
            .testimonials-track:hover {
              animation-play-state: paused;
            }
            @keyframes scrollLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .testimonials-wrapper {
              overflow: hidden;
              mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
              -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
            }
          `}</style>
          <div className="testimonials-wrapper">
            <div className="testimonials-track">
              {[
                { name: 'Chaitanya Pittala', role: 'Data Analytics', avatar: 'CP', text: 'The trainers explain concepts clearly and focus on practical learning rather than just theory. The mentors are supportive and clear doubts during and after classes. They also provide recorded sessions and learning resources which is very helpful for revision.' },
                { name: 'Puja', role: 'Data Analytics', avatar: 'PU', text: 'Flexcoders helped me go from zero to a data analyst in under 6 months. Unlike other platforms, the placement support is real, and the curriculum is aligned with current industry needs. The mentors actually care about your journey.' },
                { name: 'Chandini Narsupalli', role: 'Web Development', avatar: 'CN', text: 'The teaching was clear and easy to understand, even for beginners. The mentors were supportive and always ready to help. The projects and practical sessions really helped me improve my coding skills.' },
                { name: 'Charan Karri', role: 'Full Stack Development', avatar: 'CK', text: 'After trying several platforms, Flexcoders is by far the best. The curriculum is perfectly structured, and the instructors are industry pros. I loved the ability to pick the right course for my needs.' },
                { name: 'Hemanthsai Rama', role: 'Cybersecurity', avatar: 'HR', text: 'I joined the cybersecurity course and the way of teaching is very good. For every class they record and send the videos. The faculty is very friendly and helpful for every student.' },
                { name: 'Pavan Kalyan', role: 'Internship Program', avatar: 'PK', text: 'Had a great internship experience at Flexcoders. Learned practical skills, worked on real-time tasks, and gained valuable knowledge with supportive mentors.' },
                { name: 'Rakesh Pasupula', role: 'SQL Training', avatar: 'RP', text: 'I am currently taking SQL training and the teaching quality, guidance, and support were excellent. Highly recommended for anyone looking to upskill.' },
                { name: 'Aravind Bhupanapu', role: 'Full Stack Development', avatar: 'AB', text: 'My go to skill up place. The course structure is well maintained and crafted in a very useful way. The lecturing is top notch and mock tests are a game changer.' },
                { name: 'Charmi Shreya', role: 'Online Training', avatar: 'CS', text: 'Way of teaching is good. Having a separate LMS portal and app with facility to see recorded videos is very helpful. Good support from mentors throughout.' },
                { name: 'Rishi Kone', role: 'Technical Skills', avatar: 'RK', text: 'Great platform to learn and improve technical skills. The trainers are supportive, classes are practical, and the learning environment is very good for students.' },
              ].map((t, i) => (
                <div className="testimonial-card" key={i}>
                  <div className="stars">{'★'.repeat(5)}</div>
                  <p>"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.avatar}</div>
                    <div>
                      <h4>{t.name}</h4>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
              {[
                { name: 'Chaitanya Pittala', role: 'Data Analytics', avatar: 'CP', text: 'The trainers explain concepts clearly and focus on practical learning rather than just theory. The mentors are supportive and clear doubts during and after classes. They also provide recorded sessions and learning resources which is very helpful for revision.' },
                { name: 'Puja', role: 'Data Analytics', avatar: 'PU', text: 'Flexcoders helped me go from zero to a data analyst in under 6 months. Unlike other platforms, the placement support is real, and the curriculum is aligned with current industry needs. The mentors actually care about your journey.' },
                { name: 'Chandini Narsupalli', role: 'Web Development', avatar: 'CN', text: 'The teaching was clear and easy to understand, even for beginners. The mentors were supportive and always ready to help. The projects and practical sessions really helped me improve my coding skills.' },
                { name: 'Charan Karri', role: 'Full Stack Development', avatar: 'CK', text: 'After trying several platforms, Flexcoders is by far the best. The curriculum is perfectly structured, and the instructors are industry pros. I loved the ability to pick the right course for my needs.' },
                { name: 'Hemanthsai Rama', role: 'Cybersecurity', avatar: 'HR', text: 'I joined the cybersecurity course and the way of teaching is very good. For every class they record and send the videos. The faculty is very friendly and helpful for every student.' },
                { name: 'Pavan Kalyan', role: 'Internship Program', avatar: 'PK', text: 'Had a great internship experience at Flexcoders. Learned practical skills, worked on real-time tasks, and gained valuable knowledge with supportive mentors.' },
                { name: 'Rakesh Pasupula', role: 'SQL Training', avatar: 'RP', text: 'I am currently taking SQL training and the teaching quality, guidance, and support were excellent. Highly recommended for anyone looking to upskill.' },
                { name: 'Aravind Bhupanapu', role: 'Full Stack Development', avatar: 'AB', text: 'My go to skill up place. The course structure is well maintained and crafted in a very useful way. The lecturing is top notch and mock tests are a game changer.' },
                { name: 'Charmi Shreya', role: 'Online Training', avatar: 'CS', text: 'Way of teaching is good. Having a separate LMS portal and app with facility to see recorded videos is very helpful. Good support from mentors throughout.' },
                { name: 'Rishi Kone', role: 'Technical Skills', avatar: 'RK', text: 'Great platform to learn and improve technical skills. The trainers are supportive, classes are practical, and the learning environment is very good for students.' },
              ].map((t, i) => (
                <div className="testimonial-card" key={`dup-${i}`}>
                  <div className="stars">{'★'.repeat(5)}</div>
                  <p>"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.avatar}</div>
                    <div>
                      <h4>{t.name}</h4>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section newsletter">
        <div className="container">
          <Reveal>
            <div className="newsletter-box">
              <h2>Stay Updated</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Get the latest course updates, industry insights, and career tips delivered to your inbox.</p>
              <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); e.target.reset(); }}>
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
