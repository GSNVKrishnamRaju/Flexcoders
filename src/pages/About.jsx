import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

function GrowthChart() {
  const data = [
    { year: '2025', Students: 4000, Courses: 6 },
    { year: '2026', Students: 10000, Courses: 20 },
  ];
  return (
    <Reveal>
      <div style={{ background: 'var(--card-bg)', borderRadius: 20, padding: 32, marginTop: 20, boxShadow: 'var(--shadow)' }}>
        <h3 style={{ textAlign: 'center', marginBottom: 28, fontWeight: 700 }}>Growth Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 20, right: 40, left: 20, bottom: 10 }}>
            <defs>
              <linearGradient id="studentsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6c63ff" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6c63ff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="coursesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00b894" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00b894" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="year" tick={{ fill: 'var(--text-secondary)', fontSize: 14, fontWeight: 600 }} />
            <YAxis yAxisId="students" tick={{ fill: 'var(--text-secondary)' }} />
            <YAxis yAxisId="courses" orientation="right" tick={{ fill: 'var(--text-secondary)' }} />
            <Area yAxisId="students" type="monotone" dataKey="Students" stroke="#6c63ff" strokeWidth={3} fill="url(#studentsGrad)" dot={{ r: 6, fill: '#6c63ff', strokeWidth: 0 }} animationDuration={1500} />
            <Area yAxisId="courses" type="monotone" dataKey="Courses" stroke="#00b894" strokeWidth={3} fill="url(#coursesGrad)" dot={{ r: 6, fill: '#00b894', strokeWidth: 0 }} animationDuration={1500} />
          </AreaChart>
        </ResponsiveContainer>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginTop: 12 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#6c63ff' }}>4K → 10K</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Students</div>
          </div>
          <div style={{ width: 1, background: 'var(--border-color)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00b894' }}>6 → 20+</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Courses</div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <>
      <PageHeader title="About Us" subtitle="Discover our mission, meet our founders, and learn what drives us." />

      {/* ABOUT CONTENT */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <Reveal className="reveal-left">
              <div className="about-text">
                <h2>Shaping the Future of Education</h2>
                <p>FlexCoders was founded with a singular vision — to bridge the gap between academic learning and industry requirements. We believe that education should be practical, accessible, and aligned with the evolving needs of the global job market.</p>
                <p>Over the years, we have trained over 50,000 students, partnered with 1,500+ companies, and built a community of passionate learners and expert mentors. Our programs are designed in collaboration with industry leaders to ensure you gain the skills that matter.</p>
                <p>From data science to web development, cybersecurity to cloud computing — our comprehensive curriculum, hands-on projects, and dedicated placement support have helped thousands of professionals transform their careers.</p>
                <Link to="/courses" className="btn btn-primary"><i className="fas fa-book-open"></i> Explore Our Courses</Link>
              </div>
            </Reveal>
            <Reveal className="reveal-right">
              <div className="about-images">
                <div className="about-image-main">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                    alt="Students and professionals collaborating in a modern coding institute"
                    className="about-img-tag"
                  />
                </div>
                <div className="about-image-row">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
                    alt="Modern tech workspace and learning environment at a coding school"
                    className="about-img-tag"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                    alt="Team of developers working together on laptops in a tech institute"
                    className="about-img-tag"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="mission-vision">
            <Reveal className="reveal-left">
              <div className="mv-card">
                <div className="mv-icon">🎯</div>
                <h2>Our Mission</h2>
                <p>To democratize quality education and make industry-relevant skills accessible to everyone. We strive to create learning experiences that are practical, engaging, and career-focused.</p>
              </div>
            </Reveal>
            <Reveal className="reveal-right">
              <div className="mv-card">
                <div className="mv-icon">🔭</div>
                <h2>Our Vision</h2>
                <p>To be the most trusted learning platform that empowers millions of professionals worldwide to achieve their career goals through expert-led education and unwavering support.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <Reveal><h2>Meet Our Founders</h2></Reveal>
            <Reveal><p>The visionaries behind FlexCoders dedicated to transforming education.</p></Reveal>
          </div>
          <div className="founders-grid">
            {[
              { image: '👨‍💼', name: 'Dr. Arjun Mehta', role: 'CEO & Co-Founder', desc: 'With over 20 years in education and technology, Dr. Mehta has been at the forefront of edtech innovation. He previously founded two successful startups and holds a PhD in Computer Science from MIT.' },
              { image: '👩‍💼', name: 'Priya Sharma', role: 'COO & Co-Founder', desc: 'A seasoned education leader with 15+ years of experience in curriculum design and operations. Priya has helped scale multiple edtech platforms and is passionate about accessible education.' },
              { image: '👨‍💻', name: 'Vikram Patel', role: 'CTO & Co-Founder', desc: 'Vikram brings deep technical expertise from his years at top tech companies including Google and Microsoft. He leads our platform development and ensures cutting-edge learning experiences.' },
            ].map((f, i) => (
              <Reveal key={i}>
                <div className="founder-card">
                  <div className="founder-image">{f.image}</div>
                  <h3>{f.name}</h3>
                  <div className="founder-role">{f.role}</div>
                  <p>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE AT FLEXCODERS */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <Reveal>
            <div className="mv-card" style={{ padding: 40 }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 16, textAlign: 'center' }}>Life at FlexCoders</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 700, margin: '0 auto 32px', lineHeight: 1.8, textAlign: 'center' }}>
                At FlexCoders, we believe in fostering a culture of innovation, collaboration, and continuous learning. 
                Our team is a family of passionate educators, developers, and creative thinkers who work together to 
                transform lives through quality education.
              </p>
              <div className="life-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                {[
                  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=280&fit=crop',
                  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=280&fit=crop',
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=280&fit=crop',
                  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=280&fit=crop',
                ].map((url, i) => (
                  <img key={i} src={url} alt="Team at work" loading="lazy" style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 14, boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR PARTNERS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <Reveal><h2>Our Partners</h2></Reveal>
            <Reveal><p>We are proud to be associated with these prestigious organizations.</p></Reveal>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            {[
              { name: 'Skill India', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Skill_India.png', desc: 'National skill development initiative empowering youth with industry-relevant training.', accent: '#ff9933' },
              { name: 'Startup India', logo: 'https://officechai.com/wp-content/uploads/2016/12/standup-india-1-1024x570.jpg', desc: 'Government flagship initiative to build a strong ecosystem for nurturing innovation.', accent: '#138808' },
              { name: 'Grad Skilt', logo: 'https://gradskilt.com/wp-content/uploads/2023/01/GradSkilt-Logo.png', desc: 'Bridging the gap between academia and industry through skill-based learning.', accent: '#6c63ff' },
            ].map((p, i) => (
              <Reveal key={i}>
                <div className="partner-card" style={{
                  width: 260,
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'default',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  <div style={{ height: 4, background: p.accent }} />
                  <div style={{ padding: '28px 24px 24px', textAlign: 'center' }}>
                    <img src={p.logo} alt={p.name} style={{ height: 70, marginBottom: 14, objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                    <div style={{ fontSize: '2.5rem', marginBottom: 14, display: 'none' }}>{['🇮🇳','🚀','🎓'][i]}</div>
                    <h3 style={{ margin: '0 0 6px', fontSize: '1.15rem' }}>{p.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <Reveal><h2>Our Journey</h2></Reveal>
            <Reveal><p>Key milestones that shaped FlexCoders.</p></Reveal>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {[
              { year: '🚀 2025', text: 'Our company started with 4,000 students and 6 courses, laying the foundation for quality online education.' },
              { year: '📈 2026', text: 'Expanded to 10,000+ students with 20+ courses, growing our community and curriculum significantly.' },
            ].map((m, i) => (
              <Reveal key={i}>
                <div className="mv-card" style={{ marginBottom: 16 }}>
                  <h3>{m.year}</h3>
                  <p>{m.text}</p>
                </div>
              </Reveal>
            ))}

            <GrowthChart />
          </div>
        </div>
      </section>
    </>
  );
}
