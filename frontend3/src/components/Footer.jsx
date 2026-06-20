function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h3>SkillHub</h3>
          <p className="muted">Modern learning for product builders, engineers, and creators.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <p>Courses</p>
          <p>Add Course</p>
          <p>Contact</p>
        </div>
        <div>
          <h4>Platform</h4>
          <p>Responsive UI</p>
          <p>Real-time search</p>
          <p>MongoDB content</p>
        </div>
      </div>
      <div className="footer-bottom">© {year} SkillHub Learning Platform</div>
    </footer>
  );
}

export default Footer;
