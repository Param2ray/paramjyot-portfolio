
import './Skills.css'

const SKILL_GROUPS = [
  {
    title: 'Cloud',
    skills: [
      'AWS',
      'EC2',
      'ECS',
      'EKS',
      'Fargate',
      'ECR',
      'S3',
      'SQS',
      'IAM',
      'VPC',
      'Route 53',
      'CloudWatch',
      'Secrets Manager',
      'KMS',
    ],
  },
  {
    title: 'Infrastructure as Code',
    skills: [
      'Terraform',
      'Terraform Modules',
      'Remote State',
      'S3 State Locking',
    ],
  },
  {
    title: 'Containers and Orchestration',
    skills: [
      'Docker',
      'Docker Compose',
      'Kubernetes',
      'Helm',
      'Traefik',
      'cert-manager',
      'ExternalDNS',
    ],
  },
  {
    title: 'CI/CD and GitOps',
    skills: [
      'GitHub Actions',
      'ArgoCD',
      'OIDC',
      'GitOps',
    ],
  },
  {
    title: 'Systems and Scripting',
    skills: [
      'Linux',
      'Bash',
      'Git',
      'Python',
      'YAML',
    ],
  },
  {
    title: 'Observability, Networking and Security',
    skills: [
      'Prometheus',
      'Grafana',
      'CloudWatch',
      'Cloudflare',
      'DNS',
      'TLS',
      'ALB',
      'Trivy',
      'Checkov',
    ],
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
