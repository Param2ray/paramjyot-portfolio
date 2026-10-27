
import './Projects.css'

const PROJECTS = [
  {
    title: 'EKS Production Platform',
    description:
      'Kubernetes platform built on Amazon EKS using production-grade engineering practices.',
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
        href: 'https://www.loom.com/share/b2aaea77cad84780862cd7dcd0e965ef',
      },
    ],
  },
  {
    title: 'ECS Production Healthcheck Service',
    description:
      'Monitoring platform deployed on Amazon ECS Fargate, incorporating production-grade security, automation and reliability practices.',
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
        href: 'https://www.loom.com/share/74f0653af3ce4eb9a1fb4d8671542cd4',
      },
    ],
  },
  {
    title: 'EKS-V2 Team Platform',
    description:
      'A collaborative CoderCo team project developing an e-commerce order fulfilment platform with nine Go microservices, applying production-grade practices across AWS infrastructure automation, Kubernetes and GitOps.',
    featured: true,
    features: [
      'Collaborative infrastructure development',
      'Terraform IaC across three availability zones',
      'Development, staging and production environments',
      'GitHub Actions CI/CD with AWS OIDC',
      'Helm charts and Kubernetes deployments',
      'ArgoCD Bootstrap and GitOps workflows',
      'AWS Secrets Manager and KMS encryption',
      'Amazon SQS event-driven microservices',
      'Karpenter autoscaling and observability',
      'Security scanning with Trivy and Checkov',
    ],
    highlights: [
      'Amazon EKS',
      'Kubernetes',
      'Terraform',
      'Docker',
      'GitHub Actions',
      'ArgoCD',
      'Helm',
      'AWS OIDC',
      'IAM / IRSA',
      'Secrets Manager',
      'AWS KMS',
      'Amazon SQS',
      'Amazon RDS',
      'PostgreSQL',
      'Redis',
      'Karpenter',
      'Traefik',
      'ExternalDNS',
      'Prometheus',
      'Grafana',
      'Trivy',
      'Checkov',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/EKS-V2-Alpha-Team/Alpha-Pilot-4week',
      },
      {
        label: 'Architecture Diagram',
        href: '/images/eksv2-architecture.png',
      },
      {
        label: 'Video Walkthrough',
        href: 'https://www.loom.com/share/441701c46fc946fba7742bbb0fdb5ef2',
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
            const leftFeatures = project.features.filter(
              (_, index) => index % 2 === 0
            )

            const rightFeatures = project.features.filter(
              (_, index) => index % 2 !== 0
            )

            return (
              <article
                key={project.title}
                className={`project-card ${
                  project.featured ? 'project-card-wide' : ''
                }`}
              >
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-feature-columns">
                  <ul className="project-features">
                    {leftFeatures.map((feature) => (
                      <FeatureItem
                        key={feature}
                        feature={feature}
                      />
                    ))}
                  </ul>

                  <ul className="project-features">
                    {rightFeatures.map((feature) => (
                      <FeatureItem
                        key={feature}
                        feature={feature}
                      />
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
                        target={
                          isPlaceholder ? undefined : '_blank'
                        }
                        rel={
                          isPlaceholder
                            ? undefined
                            : 'noopener noreferrer'
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


