import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-copy">
        <span className="eyebrow">Premium learning platform</span>
        <h1>Learn modern skills with a cleaner, smarter experience.</h1>
        <p>Explore curated courses in React, Node.js, Python, AI, and frontend engineering with richer details and better discovery.</p>
        <div className="hero-actions">
          <Link to="/courses" className="btn btn-primary">Browse Courses</Link>
          <Link to="/add-course" className="btn btn-secondary">Add Course</Link>
        </div>
      </div>
      <div className="hero-stats">
        <div>
          <strong>5+</strong>
          <span>Courses</span>
        </div>
        <div>
          <strong>1000+</strong>
          <span>Students</span>
        </div>
        <div>
          <strong>4.9★</strong>
          <span>Average rating</span>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
