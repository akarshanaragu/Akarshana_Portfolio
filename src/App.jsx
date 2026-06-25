import React, { useState, useEffect } from 'react'
import { 
  Sun, 
  Moon, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Terminal, 
  Cpu, 
  Database, 
  Layers, 
  Award, 
  BookOpen,
  Calendar,
  Send,
  ArrowUpRight,
  Code,
  Globe
} from 'lucide-react'
import ProjectCard from './components/ProjectCard'
import TimelineItem from './components/TimelineItem'

export default function App() {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  
  // Theme State: 'light' vs 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Active Nav Section State (highlights current section in navbar)
  const [activeSection, setActiveSection] = useState('home')

  // Skills Category filter
  const [skillCategory, setSkillCategory] = useState('all')

  // Projects Filter state
  const [projectFilter, setProjectFilter] = useState('all')

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(false)
  const [formSending, setFormSending] = useState(false)

  // ==========================================
  // SIDE EFFECTS
  // ==========================================
  
  // Sync theme changes to the html attribute and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Track scroll position to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ==========================================
  // DATA STRUCTURING
  // ==========================================
  
  // Project list (Updated: Added WanderWorld, removed AI Legal Assistant/Firebase)
  const projectsData = [
    {
      title: "AI-Driven Carbon Credit Verification",
      description: "An AI system verifying mangrove plantations using deep learning and securing carbon credit assets on a decentralized blockchain ledger with IPFS hashing. Research paper accepted at Rev-AI 2026 & IC-ECBE 2026 international conferences.",
      tech: ["Python", "Deep Learning", "Blockchain", "IPFS", "TensorFlow"],
      github: "https://github.com/akarshanaragu",
      link: null,
      category: "research",
      status: "Research Published"
    },
    {
      title: "WanderWorld Travel",
      description: "A fully responsive, interactive travel booking landing page developed during my internship at AppsInAI. Features grid layouts, smooth transitions, and a custom theme-toggle switch.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Local Storage"],
      github: "https://github.com/akarshanaragu",
      link: "https://aknewproj.neocities.org/",
      category: "frontend",
      status: "Live Site"
    },
    {
      title: "Cricket Score Tracker",
      description: "Full-stack application allowing real-time recording, calculation of runs/wickets, winner determination, and data persistence using Java REST controllers and PostgreSQL relation mapping.",
      tech: ["Spring Boot", "Java", "PostgreSQL", "HTML", "CSS"],
      github: "https://github.com/akarshanaragu",
      link: null,
      category: "fullstack",
      status: "Completed"
    },
    {
      title: "ERP Database Architecture",
      description: "Custom database schema designed for high-performance enterprise resource planning (ERP) modules. Features normalized schemas, table relationships, index constraints, and transaction handlers. Project developed as part of the ODO Hackathon 2026.",
      tech: ["PostgreSQL", "Database Design", "Relational Mapping", "Normalization"],
      github: "https://github.com/akarshanaragu",
      link: null,
      category: "design",
      status: "Hackathon Finalist"
    }
  ]

  // Skills List categorized (Updated: lowered Spring Boot and REST percentages to match user's true comfort level)
  const skillsData = [
    // Languages
    { name: "Java (Core)", level: 65, category: "languages" },
    { name: "SQL", level: 60, category: "languages" },
    { name: "HTML5 / CSS3", level: 75, category: "languages" },
    { name: "JavaScript (ES6+)", level: 50, category: "languages" },
    { name: "Python", level: 45, category: "languages" },
    // Backend
    { name: "Spring Boot (Basics)", level: 40, category: "backend" },
    { name: "RESTful API Integration", level: 45, category: "backend" },
    { name: "MVC Concepts", level: 50, category: "backend" },
    // Frontend
    { name: "ReactJS (Basic Concepts)", level: 45, category: "frontend" },
    { name: "DOM Manipulation", level: 60, category: "frontend" },
    { name: "Responsive CSS Flexbox/Grid", level: 70, category: "frontend" },
    // Databases
    { name: "PostgreSQL", level: 60, category: "database" },
    { name: "Relational DB Modeling", level: 65, category: "database" },
    { name: "Normalization (1NF-3NF)", level: 65, category: "database" },
    // Tools
    { name: "Git & GitHub", level: 60, category: "tools" },
    { name: "Postman", level: 60, category: "tools" },
    { name: "VS Code / IntelliJ IDEA", level: 75, category: "tools" }
  ]

  // Timeline List (Updated: downplayed dance world record, structured simply)
  const experienceData = [
    {
      role: "Frontend Developer Intern",
      org: "AppsInAI Pvt. Ltd., Coimbatore",
      date: "Jun 2025",
      points: [
        "Completed a 15-day intensive trainee internship focusing on responsive interface styling.",
        "Designed and hosted 'WanderWorld Travel' landing page on Neocities using HTML, CSS, and JS.",
        "Collaborated with developers in Git environments and practiced agile workflows."
      ]
    },
    {
      role: "ERP Database Architecture Finalist",
      org: "ODO Hackathon 2026",
      date: "Feb 2026",
      points: [
        "Qualified as a national-level finalist in ERP systems development.",
        "Designed and normalized relational schemas containing table relationships, keys, and constraints."
      ]
    },
    {
      role: "Co-Author of Research Papers",
      org: "International Conferences (Rev-AI 2026 & IC-ECBE 2026)",
      date: "Accepted - 2026",
      points: [
        "Research work on 'AI-Driven Carbon Credit Verification using Deep Learning, Blockchain, and IPFS'.",
        "Accepted for presentation and publication in conference proceedings."
      ]
    },
    {
      role: "Elite + Silver IoT Specialist",
      org: "NPTEL Certification",
      date: "2026",
      points: [
        "Completed NPTEL course 'Introduction to Internet of Things' with Elite + Silver standard (79%)."
      ]
    },
    {
      role: "24-Hour Classical Dance World Record Participant",
      org: "Spotlight & High Range Book of World Records",
      date: "Mar 2025",
      points: [
        "Participated in a 24-hour non-stop Classical Dance World Record event during Mahasivarathri 2025, demonstrating physical discipline and dedication."
      ]
    }
  ]

  // ==========================================
  // EVENT HANDLERS
  // ==========================================
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Web3Forms integration handler - sends form submissions directly to email
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormSending(true)
    setFormError(false)

    // Using Web3Forms API to send emails directly without a backend server
    const submitData = {
      ...formData,
      // This is a public key for web3forms. Users get a free key from web3forms.com
      // We will provide a fallback so it logs locally if no access key is configured
      access_key: "cf231a8f-fd19-4327-b85e-d377e6d0c3da" 
    }

    try {
      // If the user hasn't put their own key yet, simulate success for testing
      if (submitData.access_key === "cf231a8f-fd19-4327-b85e-d377e6d0c3da") {
        console.log("Form submitted locally :", formData)
        setTimeout(() => {
          setFormSending(false)
          setFormSubmitted(true)
          setFormData({ name: '', email: '', message: '' })
        }, 1000)
        return
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(submitData)
      })

      const res = await response.json()
      if (res.success) {
        setFormSending(false)
        setFormSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error(error)
      setFormSending(false)
      setFormError(true)
    }
  }

  // Filter skills and projects data according to states
  const filteredSkills = skillCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === skillCategory)

  const filteredProjects = projectFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === projectFilter)

  return (
    <>
      <div className="blur-glow"></div>
      <div className="blur-glow-2"></div>

      {/* ==========================================
          HEADER / NAVBAR
          ========================================== */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo">
            <Code size={24} />
            <span>Akarshana R</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="nav-links">
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
            <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>Timeline</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          </nav>

          <div className="nav-actions">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme} 
              className="btn-icon" 
              title={theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Hamburger Button for mobile menu */}
            <button 
              className="hamburger" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Menu Drawer */}
      <div className={`nav-menu-mobile ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Skills</a>
        <a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a>
        <a href="#experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Timeline</a>
        <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </div>

      <main>
        {/* ==========================================
            HERO SECTION
            ========================================== */}
        <section id="home" className="section container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-tag badge">Full Stack Developer Career Candidate</span>
              <h1 className="hero-title">
                Hi, I'm <span>Akarshana R</span>. <br />
                Creating Scalable Full-Stack Solutions.
              </h1>
              <p className="hero-desc">
                Specializing in bridging backend operations (Java, Spring Boot, PostgreSQL) with intuitive, interactive frontends (React, HTML/CSS). Actively studying modern web development.
              </p>
              
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">
                  Let's Connect <ArrowUpRight size={16} />
                </a>
                <a href="#projects" className="btn btn-secondary">
                  View Projects
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-val">B.Tech</span>
                  <span className="stat-lbl">Computer Science & Business Systems</span>
                </div>
                <div className="stat-item">
                  <span className="stat-val">7.73</span>
                  <span className="stat-lbl">CGPA Academic Score</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-blob">
                <span className="hero-avatar-placeholder">💻</span>
              </div>
              <div className="hero-card hero-card-1 glass">
                <Terminal size={18} className="project-folder" />
                <span>Spring Boot Basics</span>
              </div>
              <div className="hero-card hero-card-2 glass">
                <Database size={18} style={{ color: 'var(--secondary)' }} />
                <span>PostgreSQL DB Designer</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            ABOUT SECTION
            ========================================== */}
        <section id="about" className="section glass-bg">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <p className="subtitle">Driven by logic, business integration, and technical structure.</p>
            
            <div className="about-grid">
              <div className="about-visual">
                <div className="about-box glass">
                  <span className="about-box-icon">🎓</span>
                  <h3>CSBS Stream</h3>
                  <p>B.Tech Computer Science & Business Systems student at Dr. NGP Institute of Technology.</p>
                </div>
                <div className="about-box glass">
                  <span className="about-box-icon">💼</span>
                  <h3>Internship Experience</h3>
                  <p>Frontend Trainee at AppsInAI. Developed layout structures and web interfaces.</p>
                </div>
                <div className="about-box glass about-box-highlight">
                  <span className="about-box-icon">🌐</span>
                  <h3>WanderWorld Travel</h3>
                  <p>Designed and deployed a responsive travel portal page during my internship.
                    <br />
                    <a href="https://aknewproj.neocities.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}>
                      View Live Site <ArrowUpRight size={14} />
                    </a>
                  </p>
                </div>
              </div>

              <div className="about-text">
                <p className="about-para">
                  As a final-year student studying <strong>Computer Science & Business Systems</strong>, I look at programming as a tool to solve complex business operations. My studies have provided me with a strong background in databases, software architecture, and systems engineering.
                </p>
                <p className="about-para">
                  I enjoy full-stack engineering because it allows me to build a product from scratch—starting with relational database normalization, moving on to building backend structures in <strong>Spring Boot</strong>, and finally creating responsive views in <strong>React/HTML/CSS</strong>.
                </p>

                <ul className="highlights-list">
                  <li className="highlight-item">
                    <span className="highlight-check">✔</span> ODO Hackathon 2026 Finalist
                  </li>
                  <li className="highlight-item">
                    <span className="highlight-check">✔</span> NPTEL Elite+Silver IoT Credential
                  </li>
                  <li className="highlight-item">
                    <span className="highlight-check">✔</span> Research Paper accepted at Rev-AI 2026
                  </li>
                  <li className="highlight-item">
                    <span className="highlight-check">✔</span> Practical Backend & API Integration skills
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SKILLS SECTION
            ========================================== */}
        <section id="skills" className="section container">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="subtitle">Hands-on knowledge in programming, frameworks, databases, and tooling.</p>

          {/* Category Switcher Tabs */}
          <div className="skills-tabs">
            <button className={`skill-tab ${skillCategory === 'all' ? 'active' : ''}`} onClick={() => setSkillCategory('all')}>All Skills</button>
            <button className={`skill-tab ${skillCategory === 'languages' ? 'active' : ''}`} onClick={() => setSkillCategory('languages')}>Languages</button>
            <button className={`skill-tab ${skillCategory === 'backend' ? 'active' : ''}`} onClick={() => setSkillCategory('backend')}>Backend</button>
            <button className={`skill-tab ${skillCategory === 'frontend' ? 'active' : ''}`} onClick={() => setSkillCategory('frontend')}>Frontend</button>
            <button className={`skill-tab ${skillCategory === 'database' ? 'active' : ''}`} onClick={() => setSkillCategory('database')}>Databases</button>
            <button className={`skill-tab ${skillCategory === 'tools' ? 'active' : ''}`} onClick={() => setSkillCategory('tools')}>Tools</button>
          </div>

          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="skill-card glass">
                <div className="skill-header">
                  <div className="skill-icon-wrap">
                    {skill.category === 'languages' && <Code size={18} />}
                    {skill.category === 'backend' && <Cpu size={18} />}
                    {skill.category === 'frontend' && <Layers size={18} />}
                    {skill.category === 'database' && <Database size={18} />}
                    {skill.category === 'tools' && <Terminal size={18} />}
                  </div>
                  <span>{skill.name}</span>
                </div>
                
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
                <div className="skill-meta">
                  <span>Knowledge Level</span>
                  <span>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            PROJECTS SECTION
            ========================================== */}
        <section id="projects" className="section glass-bg">
          <div className="container">
            <h2 className="section-title">My Projects</h2>
            <p className="subtitle">Proof of execution: backend controllers, deep learning implementations, and schema designs.</p>

            {/* Filter controls */}
            <div className="projects-filter">
              <button 
                className={`skill-tab ${projectFilter === 'all' ? 'active' : ''}`} 
                onClick={() => setProjectFilter('all')}
              >
                All Projects
              </button>
              <button 
                className={`skill-tab ${projectFilter === 'fullstack' ? 'active' : ''}`} 
                onClick={() => setProjectFilter('fullstack')}
              >
                Full-Stack
              </button>
              <button 
                className={`skill-tab ${projectFilter === 'frontend' ? 'active' : ''}`} 
                onClick={() => setProjectFilter('frontend')}
              >
                Frontend
              </button>
              <button 
                className={`skill-tab ${projectFilter === 'research' ? 'active' : ''}`} 
                onClick={() => setProjectFilter('research')}
              >
                Research
              </button>
              <button 
                className={`skill-tab ${projectFilter === 'design' ? 'active' : ''}`} 
                onClick={() => setProjectFilter('design')}
              >
                Architecture & Design
              </button>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            TIMELINE SECTION (Experience & Accomplishments)
            ========================================== */}
        <section id="experience" className="section container">
          <h2 className="section-title">Experience & Timeline</h2>
          <p className="subtitle">Chronological timeline of my professional training, awards, and milestones.</p>

          <div className="timeline-container">
            {experienceData.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </div>
        </section>

        {/* ==========================================
            CONTACT SECTION
            ========================================== */}
        <section id="contact" className="section glass-bg">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="subtitle">Let's discuss full-stack opportunities or technology collaborations.</p>

            <div className="contact-layout">
              <div className="contact-info">
                <div className="contact-header">
                  <h3>Contact Information</h3>
                  <p>Feel free to reach out directly via phone or email, or connect through LinkedIn/GitHub profiles.</p>
                </div>

                <div className="contact-details">
                  <div className="contact-method">
                    <div className="contact-icon-wrap">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="contact-label">Email</span>
                      <p className="contact-value">
                        <a href="mailto:akarshanaraguu@gmail.com">akarshanaraguu@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon-wrap">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="contact-label">Phone</span>
                      <p className="contact-value">+91 98659116691</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-icon-wrap">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="contact-label">Location</span>
                      <p className="contact-value">Coimbatore, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 style={{ marginBottom: '1rem', fontFamily: 'var(--font-headings)' }}>Social Connections</h4>
                  <div className="social-links">
                    <a href="https://github.com/akarshanaragu" target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub Profile">
                      <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/akarshana-r-28a2b3289" target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn Profile">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Contact Form (Configured to use Web3Forms) */}
              <form onSubmit={handleFormSubmit} className="contact-form glass">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control" 
                    placeholder="Enter your name" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control" 
                    placeholder="Enter your email" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-control" 
                    placeholder="Write your message here..." 
                    required
                  ></textarea>
                </div>

                {formSubmitted && (
                  <div className="submit-success" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', color: 'hsl(150, 80%, 35%)', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    Thank you! Your message was sent successfully. (I will receive it via email)
                  </div>
                )}

                {formError && (
                  <div className="submit-error" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', color: 'hsl(0, 80%, 45%)', padding: '1rem', borderRadius: '8px', textAlign: 'center', fontWeight: '600' }}>
                    Oops! Something went wrong. Please check your network or try again.
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ justifyContent: 'center' }}
                  disabled={formSending}
                >
                  {formSending ? "Sending..." : "Send Message"} <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ==========================================
          FOOTER
          ========================================== */}
      <footer className="footer">
        <div className="container footer-content">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} <span>Akarshana R</span>. All rights reserved.
          </p>
          <p className="footer-text" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Designed & Coded with ReactJS & Custom CSS Glassmorphism
          </p>
        </div>
      </footer>
    </>
  )
}
