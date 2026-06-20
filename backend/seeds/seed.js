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
      {
        title: 'React for Beginners',
        students: 120,
        description: 'Learn React fundamentals, components, hooks, state management, and modern front-end workflow.',
        category: 'Frontend',
        level: 'Beginner',
        duration: '6 weeks',
        instructor: 'Ayesha Khan',
        rating: 4.9,
        price: 79,
        featured: true,
        outcomes: ['Build reusable React components', 'Use hooks confidently', 'Ship a responsive SPA'],
        syllabus: [
          { week: 'Week 1', topic: 'React Foundations', summary: 'JSX, props, and component architecture.' },
          { week: 'Week 2', topic: 'State and Events', summary: 'useState, forms, and user interactions.' },
          { week: 'Week 3', topic: 'Routing and Data', summary: 'React Router and API integration.' }
        ],
        tags: ['React', 'Frontend', 'JavaScript']
      },
      {
        title: 'Node.js Mastery',
        students: 95,
        description: 'Build production-ready APIs with Express, authentication, validation, and MongoDB.',
        category: 'Backend',
        level: 'Intermediate',
        duration: '8 weeks',
        instructor: 'Rahul Mehta',
        rating: 4.8,
        price: 99,
        featured: true,
        outcomes: ['Design REST APIs', 'Add auth and validation', 'Work with MongoDB'],
        syllabus: [
          { week: 'Week 1', topic: 'Node Fundamentals', summary: 'Runtime, modules, and async patterns.' },
          { week: 'Week 2', topic: 'Express APIs', summary: 'Routing, controllers, middleware, and errors.' },
          { week: 'Week 3', topic: 'Database Integration', summary: 'Mongoose models and data flow.' }
        ],
        tags: ['Node.js', 'Express', 'MongoDB']
      },
      {
        title: 'Python Data Science',
        students: 200,
        description: 'Analyze data, visualize trends, and build practical data workflows using Python.',
        category: 'Data Science',
        level: 'Beginner',
        duration: '7 weeks',
        instructor: 'Neha Verma',
        rating: 4.7,
        price: 89,
        featured: false,
        outcomes: ['Clean and analyze datasets', 'Create insightful charts', 'Build reusable notebooks'],
        syllabus: [
          { week: 'Week 1', topic: 'Python Basics', summary: 'Syntax, data types, and control flow.' },
          { week: 'Week 2', topic: 'Pandas and NumPy', summary: 'Data wrangling and numerical analysis.' },
          { week: 'Week 3', topic: 'Visualization', summary: 'Charts, graphs, and storytelling with data.' }
        ],
        tags: ['Python', 'Data', 'Analytics']
      },
      {
        title: 'Frontend Engineering',
        students: 75,
        description: 'Level up your UI engineering with performance, accessibility, and component systems.',
        category: 'Frontend',
        level: 'Advanced',
        duration: '5 weeks',
        instructor: 'Sara Ali',
        rating: 4.9,
        price: 109,
        featured: false,
        outcomes: ['Create design systems', 'Optimize performance', 'Improve accessibility'],
        syllabus: [
          { week: 'Week 1', topic: 'Design Systems', summary: 'Tokens, components, and consistency.' },
          { week: 'Week 2', topic: 'Performance', summary: 'Bundle size, memoization, and rendering costs.' },
          { week: 'Week 3', topic: 'Accessibility', summary: 'Keyboard support, semantics, and contrast.' }
        ],
        tags: ['UI', 'Accessibility', 'Performance']
      },
      {
        title: 'Machine Learning Basics',
        students: 180,
        description: 'Understand core machine learning concepts, training loops, and model evaluation.',
        category: 'AI',
        level: 'Intermediate',
        duration: '9 weeks',
        instructor: 'Dr. Omar Hussain',
        rating: 4.8,
        price: 119,
        featured: true,
        outcomes: ['Train predictive models', 'Evaluate model performance', 'Understand ML workflows'],
        syllabus: [
          { week: 'Week 1', topic: 'ML Fundamentals', summary: 'Supervised vs unsupervised learning.' },
          { week: 'Week 2', topic: 'Feature Engineering', summary: 'Preparing and selecting data.' },
          { week: 'Week 3', topic: 'Model Evaluation', summary: 'Metrics, validation, and tuning.' }
        ],
        tags: ['ML', 'AI', 'Python']
      }
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
