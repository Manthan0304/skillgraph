import { useState } from "react";
import API from "../api/courseApi";
import { toast } from "react-toastify";

function AddCourse() {
  const [course, setCourse] = useState({
    title: "",
    students: "",
    description: "",
    category: "Frontend",
    level: "Beginner",
    duration: "",
    instructor: "",
    rating: "4.8",
    price: "",
    featured: false,
    tags: "",
    outcomes: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (!course.title || !course.students || !course.description || !course.duration || !course.instructor || !course.price) {
      toast.error("All Fields Required");
      return;
    }

    try {
      await API.post("/courses", {
        ...course,
        students: Number(course.students),
        rating: Number(course.rating),
        price: Number(course.price),
        tags: course.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
        outcomes: course.outcomes.split("\n").map((item) => item.trim()).filter(Boolean),
        syllabus: []
      });
      toast.success("Course Added Successfully");
      setCourse({
        title: "",
        students: "",
        description: "",
        category: "Frontend",
        level: "Beginner",
        duration: "",
        instructor: "",
        rating: "4.8",
        price: "",
        featured: false,
        tags: "",
        outcomes: ""
      });
    } catch (error) {
      toast.error("Failed To Add Course");
    }
  }

  return (
    <div className="page-container surface-panel form-panel">
      <div className="section-header">
        <div>
          <h1>Add Course</h1>
          <p>Create a richer course record with details, outcomes, and tags.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-group">
          <label>Course Title</label>
          <input type="text" placeholder="Course title" value={course.title} onChange={(e) => setCourse({ ...course, title: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Students</label>
          <input type="number" placeholder="120" value={course.students} onChange={(e) => setCourse({ ...course, students: e.target.value })} />
        </div>
        <div className="form-group full-width">
          <label>Description</label>
          <textarea rows="4" placeholder="Short course description" value={course.description} onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select value={course.category} onChange={(e) => setCourse({ ...course, category: e.target.value })}>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Data Science</option>
            <option>AI</option>
            <option>Cloud</option>
          </select>
        </div>
        <div className="form-group">
          <label>Level</label>
          <select value={course.level} onChange={(e) => setCourse({ ...course, level: e.target.value })}>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
        <div className="form-group">
          <label>Duration</label>
          <input type="text" placeholder="6 weeks" value={course.duration} onChange={(e) => setCourse({ ...course, duration: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Instructor</label>
          <input type="text" placeholder="Instructor name" value={course.instructor} onChange={(e) => setCourse({ ...course, instructor: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" placeholder="79" value={course.price} onChange={(e) => setCourse({ ...course, price: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Rating</label>
          <input type="number" step="0.1" min="0" max="5" value={course.rating} onChange={(e) => setCourse({ ...course, rating: e.target.value })} />
        </div>
        <div className="form-group full-width">
          <label>Tags</label>
          <input type="text" placeholder="React, UI, JavaScript" value={course.tags} onChange={(e) => setCourse({ ...course, tags: e.target.value })} />
        </div>
        <div className="form-group full-width">
          <label>Learning Outcomes</label>
          <textarea rows="4" placeholder={`Enter one outcome per line\nBuild reusable components\nUse hooks confidently`} value={course.outcomes} onChange={(e) => setCourse({ ...course, outcomes: e.target.value })} />
        </div>
        <label className="checkbox-row">
          <input type="checkbox" checked={course.featured} onChange={(e) => setCourse({ ...course, featured: e.target.checked })} />
          <span>Mark as featured course</span>
        </label>
        <div className="form-actions full-width">
          <button type="submit" className="btn btn-primary">Add Course</button>
        </div>
      </form>
    </div>
  );
}

export default AddCourse;
