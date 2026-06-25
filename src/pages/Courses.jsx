import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { allCourses } from '../data/coursesData';

export default function Courses() {
  return (
    <>
      <PageHeader title="Our Courses" subtitle="Industry-focused programs designed to launch your career. Choose from 8+ expert-led courses." />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <Reveal><h2>All Programs</h2></Reveal>
            <Reveal><p>Explore our comprehensive range of courses tailored for today's job market.</p></Reveal>
          </div>
          <div className="courses-grid">
            {allCourses.map((c) => (
              <Reveal key={c.id}>
                <div className="course-card">
                  <div className="course-card-image">
                    <img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
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
        </div>
      </section>
    </>
  );
}
