import { useEffect, useState } from "react";
import API from "../api/courseApi";
import CourseCard from "../components/CourseCard";
import { FaLayerGroup, FaStar } from "react-icons/fa";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");

  useEffect(() => {
    getCourses();
  }, []);

  async function getCourses() {
    try {
      const response = await API.get("/courses");
      setCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const categories = ["All", ...new Set(courses.map((course) => course.category))];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = category === "All" || course.category === category;
    const matchesLevel = level === "All" || course.level === level;
    return matchesCategory && matchesLevel;
  });

  return (
    <div className="page-stack">
      <section className="page-container surface-panel">
        <div className="section-header">
          <div>
            <h1>Course Library</h1>
            <p>Browse the complete catalog and filter by category or level.</p>
          </div>
          <div className="course-summary-strip">
            <div>
              <FaLayerGroup />
              <strong>{courses.length}</strong>
              <span>Total</span>
            </div>
            <div>
              <FaStar />
              <strong>{courses.filter((course) => course.featured).length}</strong>
              <span>Featured</span>
            </div>
          </div>
        </div>

        <div className="filters-row">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            {levels.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </section>

      <section className="courses-grid">
        {filteredCourses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </section>
    </div>
  );
}

export default Courses;
