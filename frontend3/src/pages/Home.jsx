import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";
import API from "../api/courseApi";
import { FaFilter, FaLayerGroup } from "react-icons/fa";

function Home() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    try {
      const response = await API.get("/courses");
      setCourses(response.data);
    } catch (err) {
      setError("Unable to Load Courses");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <h2>Loading Courses...</h2>;
  if (error) return <h2>{error}</h2>;

  const featuredCourses = courses.filter((course) => course.featured);
  const visibleCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-stack">
      <Hero />
      <section className="dashboard-grid">
        <div className="stat-card">
          <FaLayerGroup />
          <div>
            <strong>{courses.length}</strong>
            <span>Total courses</span>
          </div>
        </div>
        <div className="stat-card">
          <FaFilter />
          <div>
            <strong>{featuredCourses.length}</strong>
            <span>Featured courses</span>
          </div>
        </div>
      </section>

      <div className="section-header">
        <div>
          <h2>Discover courses</h2>
          <p>Search by title or category to quickly find the best fit.</p>
        </div>
        <input
          className="search search-wide"
          type="text"
          placeholder="Search by title or category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {featuredCourses.length > 0 && (
        <section className="section-block">
          <div className="section-header compact">
            <div>
              <h2>Featured courses</h2>
              <p>High-value courses with the strongest engagement and ratings.</p>
            </div>
          </div>
          <div className="courses-grid">
            {featuredCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </section>
      )}

      <section className="section-block">
        <div className="section-header compact">
          <div>
            <h2>All courses</h2>
            <p>{visibleCourses.length} results matching your search.</p>
          </div>
        </div>
        <div className="courses-grid">
          {visibleCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </section>
      </div>
  );
}

export default Home;
