import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <Link to="/" className="logo">
          <img src="/assets/images/sssalu-logo.png" alt="SSSALU" />
        </Link>
        
        <nav className={isMenuOpen ? 'active' : ''}>
          <ul>
            <li>
              <Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            
            <li className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
              <button 
                className="dropdown-toggle" 
                onClick={() => toggleDropdown('about')}
              >
                About <i className="fas fa-chevron-down"></i>
              </button>
              <ul className="dropdown-menu">
                <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>History</Link></li>
                <li><Link to="/leadership" onClick={() => setIsMenuOpen(false)}>Leadership</Link></li>
                <li><Link to="/alumni" onClick={() => setIsMenuOpen(false)}>Alumni</Link></li>
              </ul>
            </li>
            
            <li className={`dropdown ${activeDropdown === 'activities' ? 'active' : ''}`}>
              <button 
                className="dropdown-toggle" 
                onClick={() => toggleDropdown('activities')}
              >
                Activities <i className="fas fa-chevron-down"></i>
              </button>
              <ul className="dropdown-menu">
                <li><Link to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
                <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
              </ul>
            </li>
            
            <li className={`dropdown ${activeDropdown === 'community' ? 'active' : ''}`}>
              <button 
                className="dropdown-toggle" 
                onClick={() => toggleDropdown('community')}
              >
                Community <i className="fas fa-chevron-down"></i>
              </button>
              <ul className="dropdown-menu">
                <li><Link to="/news" onClick={() => setIsMenuOpen(false)}>News</Link></li>
                <li><Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
              </ul>
            </li>
            
            <li>
              <Link to="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
