import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes, FaSearch } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <nav className="topbar">
      <Link to="/" className="brand">
        <span className="brand-mark">S</span>
        <span>SkillHub</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <div className="menu-item">
          <button type="button" onClick={() => setOpen(!open)} className="menu-trigger">
            Courses
          </button>
          {open && (
            <div className="dropdown">
              <Link to="/courses" onClick={() => setOpen(false)}>All Courses</Link>
              <Link to="/add-course" onClick={() => setOpen(false)}>Add Course</Link>
            </div>
          )}
        </div>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-actions">
        <div className="nav-search">
          <FaSearch />
          <input type="text" placeholder="Search courses" aria-label="Search courses" readOnly />
        </div>
        <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
          {dark ? <FaSun /> : <FaMoon />}
        </button>
        <button className="mobile-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation menu">
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/courses" onClick={() => setMobileOpen(false)}>All Courses</Link>
          <Link to="/add-course" onClick={() => setMobileOpen(false)}>Add Course</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
