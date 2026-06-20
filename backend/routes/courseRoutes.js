const express = require("express");
const router = express.Router();
const { getCourses, getCourseById, addCourse } = require("../controllers/courseController");

router.get("/", getCourses);
router.get("/:id", getCourseById);
router.post("/", addCourse);

module.exports = router;
