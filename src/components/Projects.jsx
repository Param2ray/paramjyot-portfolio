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
      'Kubernetes',
    ],
    highlights: [
      'Kubernetes',
      'Amazon EKS',
      'Terraform',
      'GitHub Actions',
      'ArgoCD',
      'Helm',
      'Traefik',
      'cert-manager',
      'ExternalDNS',
      'TLS',
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
      'Amazon ECS',
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

function FeatureItem({ feature }) {
  return (
    <li>
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
  )
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>Projects</h2>

        <div className="projects-grid">
          {PROJECTS.map((project) => {
            const midpoint = Math.ceil(project.features.length / 2)
            const leftFeatures = project.features.filter(
              (_, index) => index % 2 === 0
            )
            const rightFeatures = project.features.filter(
              (_, index) => index % 2 !== 0
            )

            return (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-feature-columns">
                  <ul className="project-features">
                    {leftFeatures.map((feature) => (
                      <FeatureItem key={feature} feature={feature} />
                    ))}
                  </ul>

                  <ul className="project-features">
                    {rightFeatures.map((feature) => (
                      <FeatureItem key={feature} feature={feature} />
                    ))}
                  </ul>
                </div>

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
                        rel={
                          isPlaceholder ? undefined : 'noopener noreferrer'
                        }
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
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
