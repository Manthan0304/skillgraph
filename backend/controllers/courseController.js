const Course = require("../models/Course");

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addCourse = async (req, res) => {
  try {
    const course = await Course.create({
      title: req.body.title,
      students: Number(req.body.students),
      description: req.body.description,
      category: req.body.category,
      level: req.body.level,
      duration: req.body.duration,
      instructor: req.body.instructor,
      rating: Number(req.body.rating || 4.8),
      price: Number(req.body.price),
      featured: Boolean(req.body.featured),
      outcomes: req.body.outcomes || [],
      syllabus: req.body.syllabus || [],
      tags: req.body.tags || []
    });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCourses, getCourseById, addCourse };
