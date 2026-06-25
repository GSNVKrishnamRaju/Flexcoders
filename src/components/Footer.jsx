import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo-dark.png" alt="FlexCoders" className="footer-logo" />
            <p>Empowering the next generation of professionals with industry-focused education, expert mentorship, and career-ready skills.</p>
            <div className="footer-social">
              <a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" title="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4>Courses</h4>
            <ul className="footer-links">
              <li><Link to="/course/1">Agentic AI</Link></li>
              <li><Link to="/course/2">Cybersecurity</Link></li>
              <li><Link to="/course/3">Web Development</Link></li>
              <li><Link to="/course/4">Digital Marketing</Link></li>
              <li><Link to="/courses">View All</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="footer-links">
               <li><i className="fas fa-map-marker-alt" style={{ marginRight: 8 }}></i> Hyderabad, Telangana, India</li>
              <li><i className="fas fa-phone" style={{ marginRight: 8 }}></i> +91 90307 21969</li>
              <li><i className="fas fa-envelope" style={{ marginRight: 8 }}></i> info@flexcoders.in</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} FlexCoders. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
