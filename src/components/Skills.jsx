import './Skills.css'

const SKILL_GROUPS = [
  {
    title: 'Cloud',
    skills: ['AWS', 'ECS', 'EKS', 'Fargate', 'CloudWatch', 'IAM', 'VPC'],
  },
  {
    title: 'Infrastructure as Code',
    skills: ['Terraform'],
  },
  {
    title: 'Containers and Orchestration',
    skills: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm'],
  },
  {
    title: 'CI/CD and GitOps',
    skills: ['GitHub Actions', 'ArgoCD', 'OIDC', 'GitOps'],
  },
  {
    title: 'Systems and Scripting',
    skills: ['Linux', 'Bash', 'Git'],
  },
  {
    title: 'Observability and Networking',
    skills: ['Prometheus', 'Grafana', 'Cloudflare', 'DNS', 'TLS', 'ALB'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Skills</h2>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
