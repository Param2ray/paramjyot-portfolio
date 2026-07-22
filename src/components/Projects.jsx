import './Projects.css'

const PROJECTS = [
  {
    title: 'EKS Production Platform',
    description:
      'Production-style Kubernetes platform running on Amazon EKS.',
    features: [
      'Infrastructure as Code with Terraform',
      'Automated GitHub Actions CI/CD',
      'GitOps using ArgoCD',
      'Secure TLS ingress',
      'Production Kubernetes architecture',
      'ExternalDNS automation',
      'Helm deployments',
      'Redis backend',
    ],
    highlights: [
      'Terraform Infrastructure as Code',
      'GitHub Actions CI/CD',
      'ArgoCD GitOps',
      'Helm',
      'Traefik',
      'cert-manager',
      'ExternalDNS',
      'Redis backend',
      'TLS',
      'Amazon EKS',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Param2ray/eks-production-platform',
      },
      {
        label: 'Architecture Diagram',
        href: '/images/eks-architecture.png',
      },
      {
        label: 'Video Walkthrough',
        href: '#',
      },
    ],
  },
  {
    title: 'ECS Production Healthcheck Service',
    description:
      'Production-ready monitoring platform deployed on Amazon ECS Fargate.',
    features: [
      'ECS Fargate',
      'Application Load Balancer',
      'HTTPS',
      'CloudWatch logging',
      'Private networking',
      'Terraform',
      'GitHub Actions',
      'IAM least privilege',
    ],
    highlights: [
      'ECS Fargate',
      'Terraform',
      'GitHub Actions',
      'Application Load Balancer',
      'HTTPS',
      'CloudWatch',
      'IAM',
      'Private Subnets',
      'NAT Gateway',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Param2ray/ecs-production-healthcheck-service',
      },
      {
        label: 'Architecture Diagram',
        href: '/images/ecs-architecture.png',
      },
      {
        label: 'Video Walkthrough',
        href: '#',
      },
    ],
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>Projects</h2>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.title} className="project-card">
              <h3>{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <ul className="project-features">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <svg
                      className="feature-check"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10.5l4 4 8-9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <ul className="project-badges">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="project-links">
                {project.links.map((link) => {
                  const isPlaceholder = link.href === '#'

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={isPlaceholder ? undefined : '_blank'}
                      rel={isPlaceholder ? undefined : 'noopener noreferrer'}
                      aria-disabled={isPlaceholder}
                      onClick={
                        isPlaceholder
                          ? (event) => event.preventDefault()
                          : undefined
                      }
                    >
                      {link.label}
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
