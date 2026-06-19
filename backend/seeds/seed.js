const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('../config/db');
const Course = require('../models/Course');
const Contact = require('../models/Contact');

const seedData = async () => {
  try {
    await connectDB();

    await Course.deleteMany({});
    await Contact.deleteMany({});

    const courses = [
      { title: 'React for Beginners', students: 120 },
      { title: 'Node.js Mastery', students: 95 },
      { title: 'Python Data Science', students: 200 },
      { title: 'Frontend Engineering', students: 75 },
      { title: 'Machine Learning Basics', students: 180 }
    ];

    const contacts = [
      { name: 'Alice Johnson', email: 'alice@example.com', message: 'Great platform!' },
      { name: 'Bob Smith', email: 'bob@example.com', message: 'I have a question about the React course.' },
      { name: 'Carol Lee', email: 'carol@example.com', message: 'How do I get a refund?' }
    ];

    await Course.insertMany(courses);
    await Contact.insertMany(contacts);

    console.log('Seeding completed. Inserted', courses.length, 'courses and', contacts.length, 'contacts.');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedData();
