function Articles() {
  const articles = [
    {
      title:
        'Building a Production-Style Kubernetes Platform on AWS with Amazon EKS',
      description:
        'A walkthrough of building a production-style Kubernetes platform on AWS using Amazon EKS, Terraform, GitHub Actions, ArgoCD, Traefik, cert-manager, ExternalDNS, Prometheus and Grafana.',
      link:
        'https://medium.com/@param_2ray/building-a-production-style-kubernetes-platform-on-aws-with-amazon-eks-e27d533115ce',
    },
    {
      title:
        'Building a Production-Style Health Monitoring Platform on AWS with ECS Fargate',
      description:
        'How I built a secure and automated health-monitoring platform using Amazon ECS Fargate, Terraform, GitHub Actions, an Application Load Balancer, CloudWatch and secure AWS networking.',
      link:
        'https://medium.com/@param_2ray/building-a-production-style-health-monitoring-platform-on-aws-with-ecs-fargate-3fd39784f5fc',
    },
  ]

  return (
    <section id="articles" className="articles-section">
      <div className="section-container">
        <h2>Articles</h2>

        <div className="articles-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.link}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>

              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                className="article-link"
              >
                Read on Medium →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles