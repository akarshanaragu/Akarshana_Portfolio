import React from 'react'

export default function TimelineItem({ item }) {
  const { role, org, date, points } = item

  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content glass">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-role">{role}</h3>
            <span className="timeline-org">{org}</span>
          </div>
          <span className="timeline-date">{date}</span>
        </div>
        <div className="timeline-body">
          {points && points.length > 0 && (
            <ul>
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
