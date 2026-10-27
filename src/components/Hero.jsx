
import './Hero.css'

const STATS = [
  { value: '3+', label: 'Production Platforms' },
  { value: '30+', label: 'Cloud Technologies' },
  { value: 'CI/CD', label: 'Automation' },
  { value: 'IaC', label: 'Terraform' },
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="hero-content">
        <p className="eyebrow">
          AWS • Terraform • Docker • Kubernetes
        </p>

        <span className="badge">
          Building AWS cloud platforms with production-grade practices
        </span>

        <h1>Paramjyot Tooray</h1>

        <h2>DevOps Engineer</h2>

        <p className="intro">
          I build cloud infrastructure using AWS, Terraform,
          Docker, Kubernetes and GitHub Actions, applying production-grade
          practices across automation, security and reliability.
        </p>

        <div className="buttons">
          <a className="primary-button" href="#projects">
            View Projects
          </a>

          <a
            className="secondary-button"
            href="https://github.com/Param2ray"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            className="secondary-button"
            href="https://www.linkedin.com/in/paramjyot-tooray-43a5442b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="secondary-button"
            href="/Paramjyot_Tooray_DevOps_Engineer_CV.pdf"
            download="Paramjyot_Tooray_DevOps_Engineer_CV.pdf"
          >
            Download CV
          </a>
        </div>

        <div className="stats">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

