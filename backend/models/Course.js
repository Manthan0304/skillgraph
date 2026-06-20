const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    students: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner"
    },
    duration: {
      type: String,
      required: true
    },
    instructor: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      default: 4.8
    },
    price: {
      type: Number,
      required: true
    },
    featured: {
      type: Boolean,
      default: false
    },
    outcomes: {
      type: [String],
      default: []
    },
    syllabus: {
      type: [
        {
          week: String,
          topic: String,
          summary: String
        }
      ],
      default: []
    },
    tags: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
