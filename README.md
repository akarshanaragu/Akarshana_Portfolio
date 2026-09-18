# Personal Portfolio Website

A sleek, responsive, and modern personal portfolio website built with **React**, **Vite**, and **Vanilla CSS** featuring glassmorphic designs, light/dark mode toggling, and interactive filters.

Live Link: https://akarshana-portfolio.vercel.app/

---

## 🚀 Features

*   **Custom Glassmorphic Theme:** Elegant dark and light modes styled entirely with custom CSS variables (`backdrop-filter`, HSL color systems).
*   **Dynamic Skills Filter:** Group-based filtering (Languages, Backend, Frontend, Databases, Tools) displaying relative knowledge percentages.
*   **Filterable Projects Grid:** Interactive controls to view projects categorized by Full-Stack, Frontend, Research, and Systems Design.
*   **Interactive Contact Form:** Built-in email form forwarding powered by **Web3Forms** API.
*   **Chronological Timeline:** Experience timeline tracking internships, hackathon qualifications, research papers, and certifications.

---

## 🛠️ Tech Stack

*   **Frontend Library:** ReactJS (Functional Components, Hooks)
*   **Bundler & Build Tool:** Vite
*   **Styling:** Vanilla CSS (CSS Grid, Flexbox, HSL variables, transitions)
*   **Icons:** Lucide React
*   **Contact Service:** Web3Forms API (Serverless Email integration)

---

## 📂 Project Structure

```text
akarshana-portfolio/
├── dist/                      # Production build assets (after running build script)
├── node_modules/              # Project dependencies
├── public/                    # Static assets
├── src/
│   ├── components/            # Reusable sub-components
│   │   ├── ProjectCard.jsx    # Project list cards
│   │   └── TimelineItem.jsx   # Timeline components
│   ├── App.jsx                # Main container, states, and layouts
│   ├── index.css              # Styling system and HSL custom variables
│   └── main.jsx               # App entrypoint
├── index.html                 # HTML template and Google Fonts
├── vite.config.js             # Vite configuration
├── README.md                  # This file
└── package.json               # Scripts and dependencies configuration
```

---

## 💻 Local Development

Follow these steps to run the project locally on your machine:

1.  **Clone or open this directory in your terminal.**
2.  **Install dependencies:**
    ```bash
    npm install
    # On Windows PowerShell if blocked:
    npm.cmd install
    ```
3.  **Start development server:**
    ```bash
    npm run dev
    # On Windows PowerShell if blocked:
    npm.cmd run dev
    ```
4.  **Open in Browser:**
    Navigate to `http://localhost:3000` to view the local instance.

---

## 📦 Building for Production

To compile and bundle the code into optimized static assets ready for deployment:

```bash
npm run build
# On Windows PowerShell if blocked:
npm.cmd run build
```
This will compile the project and generate a `dist` folder.
