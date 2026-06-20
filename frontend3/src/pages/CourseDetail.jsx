import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../api/courseApi";
import { FaBookOpen, FaClock, FaStar, FaUsers, FaTag, FaArrowLeft } from "react-icons/fa";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCourse() {
      try {
        const response = await API.get(`/courses/${id}`);
        setCourse(response.data);
      } catch (err) {
        setError("Unable to load course details.");
      } finally {
        setLoading(false);
      }
    }

    fetchCourse();
  }, [id]);

  if (loading) return <div className="page-container">Loading course details...</div>;
  if (error) return <div className="page-container">{error}</div>;
  if (!course) return <div className="page-container">Course not found.</div>;

  return (
    <div className="page-stack">
      <section className="detail-hero page-container">
        <Link to="/courses" className="back-link"><FaArrowLeft /> Back to all courses</Link>
        <div className="detail-hero-grid">
          <div>
            <div className="badge-row">
              <span className="chip">{course.category}</span>
              <span className="chip chip-highlight">{course.level}</span>
              {course.featured && <span className="chip chip-success">Featured</span>}
            </div>
            <h1>{course.title}</h1>
            <p className="detail-lead">{course.description}</p>
            <div className="meta-row detail-meta">
              <span><FaUsers /> {course.students} students</span>
              <span><FaClock /> {course.duration}</span>
              <span><FaStar /> {course.rating?.toFixed(1)}</span>
              <span><FaTag /> ${course.price}</span>
            </div>
          </div>
          <div className="detail-sidebar">
            <div>
              <strong>Instructor</strong>
              <p>{course.instructor}</p>
            </div>
            <div>
              <strong>Learning focus</strong>
              <p>{course.tags?.join(" • ")}</p>
            </div>
            <button className="btn btn-primary">Enroll Now</button>
            <button className="btn btn-secondary">Save to Wishlist</button>
          </div>
        </div>
      </section>

      <section className="detail-grid">
        <div className="page-container">
          <h2>What you will learn</h2>
          <div className="feature-list">
            {course.outcomes?.map((outcome) => (
              <div key={outcome} className="feature-item">
                <FaBookOpen />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="page-container">
          <h2>Syllabus</h2>
          <div className="syllabus-list">
            {course.syllabus?.map((item) => (
              <article key={item.week} className="syllabus-item">
                <span>{item.week}</span>
                <h3>{item.topic}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseDetail;