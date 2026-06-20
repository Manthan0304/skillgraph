import { Link } from "react-router-dom";
import { FaUsers, FaStar, FaClock, FaBookmark } from "react-icons/fa";
import { useState } from "react";

function CourseCard({ course }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="card course-card">
      <div className="card-top">
        <span className="chip">{course.category}</span>
        {course.featured && <span className="chip chip-highlight">Featured</span>}
      </div>
      <h2>{course.title}</h2>
      <p className="card-description">{course.description}</p>
      <div className="meta-row">
        <span><FaUsers /> {course.students} students</span>
        <span><FaStar /> {course.rating?.toFixed(1)}</span>
        <span><FaClock /> {course.duration}</span>
      </div>
      <div className="card-footer-actions">
        <Link to={`/courses/${course._id}`} className="btn btn-primary">View Course</Link>
        <button type="button" className="btn btn-secondary" onClick={() => setSaved(!saved)}>
          <FaBookmark /> {saved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
