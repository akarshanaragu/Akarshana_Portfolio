import React from 'react'
import { Folder, Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { title, description, tech, github, link, status } = project

  return (
    <article className="project-card glass glass-interactive">
      <div className="project-head">
        <div className="project-folder">
          <Folder size={32} strokeWidth={1.5} />
        </div>
        <div className="project-links">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-icon" 
              title="View GitHub Repository"
              aria-label={`GitHub repository for ${title}`}
            >
              <Github size={18} />
            </a>
          )}
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-icon" 
              title="View Live Demo"
              aria-label={`Live demo for ${title}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
      </div>

      <div className="project-foot">
        {status && (
          <span className="project-status">
            {status}
          </span>
        )}
        <div className="project-tech">
          {tech.map((item, idx) => (
            <span key={idx} className="tech-tag">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
