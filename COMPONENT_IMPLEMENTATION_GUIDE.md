# SkillHub - React Component Implementation Guide
## Modern Design System Code Examples

---

## 📦 Installation & Setup

### 1. Install Required Dependencies

```bash
npm install -D tailwindcss postcss autoprefixer @tailwindcss/forms lucide-react
npm install framer-motion react-hook-form zod @hookform/resolvers
```

### 2. Font Setup (Add to HTML Head)

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

### 3. Tailwind Configuration

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F6F5FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#4F46E5',
          600: '#4338CA',
          700: '#3730A3',
          800: '#312E81',
          900: '#1E1B4B',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
```

---

## 🧩 Component Examples

### 1. Modern Navbar Component

```jsx
// components/Navbar.jsx
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { Moon, Sun, Search, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-40 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h2 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent hover:from-primary-700 hover:to-primary-600 transition-all">
                SkillHub
              </h2>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link 
                to="/" 
                className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* Courses Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Courses
                  <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg overflow-hidden"
                    >
                      <Link
                        to="/courses"
                        className="block px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        📚 All Courses
                      </Link>
                      <Link
                        to="/add-course"
                        className="block px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 transition-colors border-t border-neutral-200 dark:border-neutral-700"
                        onClick={() => setDropdownOpen(false)}
                      >
                        ➕ Add Course
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/contact" 
                className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center gap-4">
              {/* Search Bar */}
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
                searchFocus 
                  ? 'border-primary-500 bg-white dark:bg-neutral-800 shadow-md ring-1 ring-primary-500/10' 
                  : 'border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800'
              }`}>
                <Search size={18} className="text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  onFocus={() => setSearchFocus(true)}
                  onBlur={() => setSearchFocus(false)}
                  className="bg-transparent outline-none text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 w-32"
                />
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-200 transition-all"
                aria-label="Toggle theme"
              >
                {dark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800"
            >
              <div className="px-4 py-4 space-y-3">
                <Link to="/" className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900/20">
                  Home
                </Link>
                <Link to="/courses" className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900/20">
                  All Courses
                </Link>
                <Link to="/add-course" className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900/20">
                  Add Course
                </Link>
                <Link to="/contact" className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900/20">
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
```

---

### 2. Modern Hero Section

```jsx
// components/Hero.jsx
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl overflow-hidden shadow-xl mb-8"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-24 lg:px-16 lg:py-32 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
        >
          Master Modern Tech Skills
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
        >
          Learn React, Node.js, Python, and more through structured, hands-on courses. Build real-world applications with industry experts.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Link
            to="/courses"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-all hover:shadow-lg hover:-translate-y-1"
          >
            Start Learning
            <ArrowRight size={20} />
          </Link>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all hover:shadow-lg">
            Browse Courses
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-12 border-t border-white/20"
        >
          <div>
            <div className="text-3xl font-bold text-white mb-1">5+</div>
            <div className="text-sm text-white/80 flex items-center gap-1">
              <BookOpen size={16} /> Courses
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">1000+</div>
            <div className="text-sm text-white/80 flex items-center gap-1">
              <Users size={16} /> Students
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">4.9★</div>
            <div className="text-sm text-white/80">Rating</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
```

---

### 3. Modern Course Card

```jsx
// components/CourseCard.jsx
import { motion } from "framer-motion";
import { Users, Star, Bookmark, BookOpen } from "lucide-react";
import { useState } from "react";

export default function CourseCard({ title, students, category = "General" }) {
  const [saved, setSaved] = useState(false);

  return (
    <motion.div
      whileHover={{ translateY: -4 }}
      className="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 transition-all"
    >
      {/* Card Header */}
      <div className="relative h-32 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 flex items-center justify-center overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <BookOpen className="absolute top-2 right-2 text-primary-600" size={48} />
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>

        {/* Save Button */}
        <button
          onClick={() => setSaved(!saved)}
          className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-white dark:bg-neutral-700 shadow-sm hover:shadow-md transition-all"
        >
          <Bookmark
            size={18}
            className={`transition-all ${
              saved
                ? 'fill-accent-500 text-accent-500'
                : 'text-neutral-400 hover:text-accent-500'
            }`}
          />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          Master essential skills and boost your career with structured lessons
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-6 py-4 border-t border-b border-neutral-200 dark:border-neutral-700">
          <div className="flex items-center gap-1">
            <Users size={16} className="text-neutral-500" />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {students} students
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-accent-500 fill-accent-500" />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              4.8
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all hover:shadow-md active:scale-95">
            View Course
          </button>
          <button className="flex-1 px-4 py-2.5 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-neutral-900 dark:text-white font-medium rounded-lg transition-all border border-neutral-200 dark:border-neutral-600">
            Preview
          </button>
        </div>
      </div>
    </motion.div>
  );
}
```

---

### 4. Modern Form Component

```jsx
// components/FormField.jsx
import { AlertCircle, CheckCircle } from "lucide-react";

export default function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  success,
  hint,
  required = false,
  ...props
}) {
  return (
    <div className="mb-6">
      {/* Label */}
      {label && (
        <label htmlFor={name} className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-offset-0 ${
            error
              ? 'border-error focus:border-error focus:ring-error/10 bg-error/5'
              : success
              ? 'border-success focus:border-success focus:ring-success/10 bg-success/5'
              : 'border-neutral-200 dark:border-neutral-700 focus:border-primary-500 focus:ring-primary-500/10 bg-white dark:bg-neutral-800'
          } text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 font-medium`}
          {...props}
        />

        {/* Status Icons */}
        {error && (
          <AlertCircle className="absolute right-3 top-3 text-error" size={20} />
        )}
        {success && !error && (
          <CheckCircle className="absolute right-3 top-3 text-success" size={20} />
        )}
      </div>

      {/* Help Text */}
      {hint && !error && (
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{hint}</p>
      )}

      {/* Error Message */}
      {error && (
        <p className="mt-2 text-sm text-error flex items-center gap-1">
          <AlertCircle size={16} />
          {error}
        </p>
      )}

      {/* Success Message */}
      {success && !error && (
        <p className="mt-2 text-sm text-success flex items-center gap-1">
          <CheckCircle size={16} />
          {success}
        </p>
      )}
    </div>
  );
}
```

---

### 5. Modern Button Component

```jsx
// components/Button.jsx
import { motion } from "framer-motion";
import { Loader } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  className = "",
  ...props
}) {
  const baseStyles = "font-semibold rounded-lg transition-all inline-flex items-center justify-center gap-2 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 disabled:bg-neutral-300",
    secondary: "bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600",
    accent: "bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500",
    success: "bg-success hover:bg-emerald-600 text-white focus:ring-success",
    error: "bg-error hover:bg-red-600 text-white focus:ring-error",
    ghost: "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      {...props}
    >
      {isLoading && <Loader size={18} className="animate-spin" />}
      {children}
    </motion.button>
  );
}
```

---

### 6. Modern Sidebar

```jsx
// components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, Plus, Mail, LogOut } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: BookOpen, label: "All Courses", path: "/courses" },
  { icon: Plus, label: "Add Course", path: "/add-course" },
  { icon: Mail, label: "Contact", path: "/contact" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden md:flex md:w-64 flex-col bg-neutral-50 dark:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-700">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
        <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wide">
          Navigation
        </h3>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                isActive
                  ? "bg-primary-600 text-white shadow-md"
                  : "text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400"
              }`}
            >
              <Icon size={20} />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
          <LogOut size={18} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
```

---

## 🎨 Color Usage Examples

```jsx
// Text Colors
<p className="text-neutral-900 dark:text-white">Primary text</p>
<p className="text-neutral-600 dark:text-neutral-400">Secondary text</p>
<p className="text-neutral-500 dark:text-neutral-500">Tertiary text</p>

// Backgrounds
<div className="bg-primary-50 dark:bg-primary-900/10">Light primary bg</div>
<div className="bg-primary-600">Primary action</div>
<div className="bg-neutral-100 dark:bg-neutral-800">Secondary bg</div>

// Borders
<div className="border border-neutral-200 dark:border-neutral-700">Default border</div>
<div className="border border-primary-300 dark:border-primary-700">Focus border</div>

// Hover States
<button className="hover:bg-primary-700 hover:shadow-lg">Elevated on hover</button>
<a className="hover:text-primary-600 hover:underline">Link hover</a>
```

---

## 🎬 Animation Examples

```jsx
// Framer Motion Examples

// Fade In
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Slide Up
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Scale on Hover
<motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  Interactive
</motion.div>

// Stagger Children
<motion.div>
  {items.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## 📱 Responsive Patterns

```jsx
// Mobile-first responsive

// Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Flex
<div className="flex flex-col md:flex-row gap-4">

// Hidden elements
<div className="hidden md:block">Desktop only</div>
<div className="md:hidden">Mobile only</div>

// Padding responsive
<div className="px-4 md:px-6 lg:px-8">

// Text size responsive
<h1 className="text-2xl md:text-3xl lg:text-4xl">
```

---

## ✅ Implementation Checklist

- [ ] Install Tailwind CSS and dependencies
- [ ] Configure Tailwind with custom colors
- [ ] Import Google Fonts
- [ ] Replace old Navbar with new component
- [ ] Update Hero section
- [ ] Replace CourseCard with new design
- [ ] Update all form components
- [ ] Update Sidebar styling
- [ ] Add dark mode theme context
- [ ] Test responsive design
- [ ] Test accessibility (WCAG 2.1 AA)
- [ ] Optimize images and animations
- [ ] Performance audit (Lighthouse)

---

## 🚀 Next Steps

1. Start with **Phase 1**: Tailwind setup and design tokens
2. Build reusable component library
3. Update each page progressively
4. Test on all device sizes
5. Gather user feedback
6. Iterate and refine

**Estimated Time**: 4 weeks for full implementation
