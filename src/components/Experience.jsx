import './Experience.css'

const EXPERIENCE = [
  {
    title: 'DevOps Engineer',
    organisation: 'CoderCo',
    description:
      'Building production-style cloud platforms using AWS, Terraform, Docker, Kubernetes and GitHub Actions. Designed Infrastructure as Code, automated CI/CD pipelines, containerised applications and implemented GitOps workflows while troubleshooting and improving cloud deployments.',
    technologies: [
      'AWS',
      'Terraform',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'ArgoCD',
      'Linux',
      'Bash',
    ],
  },
  {
    title: 'Professional Experience',
    description:
      'Experienced working in structured professional environments that require documentation, problem solving, collaboration, stakeholder communication and continuous improvement. These strengths complement my technical DevOps work and contribute to building reliable cloud platforms.',
  },
]

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-content">
        <h2>Experience</h2>

        <div className="timeline">
          {EXPERIENCE.map((entry) => (
            <div key={entry.title} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-card">
                <h3>{entry.title}</h3>
                {entry.organisation && (
                  <p className="timeline-org">{entry.organisation}</p>
                )}
                <p className="timeline-description">{entry.description}</p>
                {entry.technologies && (
                  <ul className="timeline-tech">
                    {entry.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
