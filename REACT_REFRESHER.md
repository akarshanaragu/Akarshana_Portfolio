# ReactJS Interview Refresher Sheet

Since your portfolio website is built using **ReactJS** (configured with **Vite**), you can use it to refresh your knowledge! Interviewers will love that you can explain the core architecture of your own site during code-pairing and web apps interviews.

---

## 1. Project Scaffolding (Vite vs. Create-React-App)
*   **Vite** is a modern build tool that is significantly faster than Create-React-App (CRA). It uses native ES Modules (`import`/`export`) in the browser during development, avoiding the slow bundling process of Webpack.
*   **Structure:**
    *   `index.html`: The entrance point. It contains a `<div id="root"></div>`.
    *   `src/main.jsx`: Mounts the React application into the `root` div using `ReactDOM.createRoot(document.getElementById('root')).render(...)`.
    *   `src/App.jsx`: The root component containing your main application structure and states.
    *   `src/components/`: Reusable components like `ProjectCard.jsx` and `TimelineItem.jsx`.

---

## 2. Components and Props (The Building Blocks)
React is component-based. Every piece of UI is a function that returns JSX (which looks like HTML but allows embedded JavaScript inside curly braces `{}`).

### Declaring & Reusing a Component
In `src/components/ProjectCard.jsx`:
```jsx
// A functional component that accepts "props" (properties) as arguments.
// We use destructuring { project } to pull it directly from props.
export default function ProjectCard({ project }) {
  const { title, description, tech } = project;

  return (
    <article className="project-card glass">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* ... */}
    </article>
  );
}
```

### Passing Props
In `src/App.jsx`, we import `ProjectCard` and render a list of cards using JavaScript's `.map()` array function.
We must pass a unique `key` prop to help React identify which items have changed, been added, or been removed (for rendering optimization).
```jsx
import ProjectCard from './components/ProjectCard';

// Inside App render...
<div className="projects-grid">
  {filteredProjects.map((project, index) => (
    <ProjectCard key={index} project={project} />
  ))}
</div>
```

---

## 3. State Management (`useState`)
State represents dynamic data that can change over time. When state updates, React automatically **re-renders** the component to display the new data.

### How it is used in your Portfolio:
1.  **Light/Dark Theme Toggle:**
    ```jsx
    const [theme, setTheme] = useState('dark');
    
    const toggleTheme = () => {
      setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };
    ```
2.  **Filter Tabs (Skills/Projects):**
    ```jsx
    const [skillCategory, setSkillCategory] = useState('all');
    ```
    When a user clicks a button:
    ```jsx
    <button onClick={() => setSkillCategory('backend')}>Backend</button>
    ```
    This triggers `setSkillCategory`, changing the state. React re-runs the `App` component. It recalculates the filtered array:
    ```jsx
    const filteredSkills = skillCategory === 'all' 
      ? skillsData 
      : skillsData.filter(s => s.category === skillCategory);
    ```
    The UI is updated dynamically with only backend skills.

---

## 4. Side Effects (`useEffect`)
The `useEffect` Hook lets you perform side effects (e.g., direct DOM manipulations, fetching data, setting up listeners) in your functional components.

### How it is used in your Portfolio:
1.  **Syncing Theme with HTML and Storage:**
    ```jsx
    useEffect(() => {
      // Direct DOM manipulation to set data-theme attribute for CSS styling
      document.documentElement.setAttribute('data-theme', theme);
      // Cache selection so user preference persists when refreshing
      localStorage.setItem('theme', theme);
    }, [theme]); // Dependency Array: runs only when the "theme" state changes.
    ```
2.  **Scroll Listener for Active Nav Links:**
    ```jsx
    useEffect(() => {
      const handleScroll = () => { /* ... calculate scroll position ... */ };
      window.addEventListener('scroll', handleScroll);
      
      // Clean-up function: runs when the component unmounts to prevent memory leaks.
      return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty array means this runs ONCE when the component mounts.
    ```

---

## 5. Typical Interview Questions to Prepare For

### Q1: What is the Virtual DOM in React?
*   **Answer:** React builds a virtual representation of the DOM in memory (Virtual DOM). When state changes, React creates a new virtual tree, compares it with the previous virtual tree (a process called **Diffing**), and calculates the minimal set of changes needed. It then applies these updates to the actual browser DOM (called **Reconciliation**), making UI rendering extremely fast.

### Q2: What is the difference between Props and State?
*   **Answer:** 
    *   **Props** are read-only inputs passed from a parent component to a child. They are immutable from the perspective of the child component.
    *   **State** is internal data managed within the component itself. It is mutable (via its state updater function like `setState`) and changes trigger a re-render.

### Q3: Why do we need the `key` prop in lists?
*   **Answer:** Keys help React identify which items in a list have changed, been added, or been removed. It gives list elements a stable identity, allowing React to reuse existing DOM elements instead of re-creating them from scratch, which improves performance and maintains component state (like inputs).

### Q4: What is JSX?
*   **Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like structures inside JavaScript code. It gets compiled (by Vite's compiler) into standard JavaScript function calls like `React.createElement()`.
