import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none' }}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={theme === 'dark' ? '/logo-dark.png' : '/logo.png'} alt="FlexCoders" className="nav-logo" />
        </Link>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/courses" className={linkClass} onClick={() => setMenuOpen(false)}>Courses</NavLink></li>
          <li><NavLink to="/careers" className={linkClass} onClick={() => setMenuOpen(false)}>Careers</NavLink></li>
          <li><NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          <li><NavLink to="/refer-earn" className={linkClass} onClick={() => setMenuOpen(false)}>Refer & Earn</NavLink></li>
          <li><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>LMS</a></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
              <span className="sun">☀️</span>
              <span className="moon">🌙</span>
              <span className="toggle-icon">
                <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
              </span>
            </button>
          </li>
        </ul>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? 'rotate-45' : ''}></span>
          <span className={menuOpen ? 'opacity-0' : ''}></span>
          <span className={menuOpen ? 'rotate-neg45' : ''}></span>
        </button>
      </div>
    </nav>
  );
}
