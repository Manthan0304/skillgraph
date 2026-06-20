import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <h3>Categories</h3>
        <Link to="/courses?category=Frontend">Frontend</Link>
        <Link to="/courses?category=Backend">Backend</Link>
        <Link to="/courses?category=Data%20Science">Data Science</Link>
        <Link to="/courses?category=AI">AI</Link>
      </div>
      <hr />
      <div>
        <h3>Quick Menu</h3>
        <Link to="/">Dashboard</Link>
        <Link to="/add-course">Add Course</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </aside>
  );
}

export default Sidebar;
