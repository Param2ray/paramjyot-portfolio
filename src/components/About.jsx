import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>

        <p>
          I am a DevOps Engineer focused on building production-style cloud
          platforms through hands-on projects with CoderCo. My work centres
          on AWS, using Terraform to provision infrastructure as code and
          Docker and Kubernetes to containerise and orchestrate applications
          reliably and repeatably.
        </p>

        <p>
          I design GitHub Actions pipelines to automate build, test and
          deployment workflows, with an emphasis on CI/CD, automation and
          reducing manual steps across the infrastructure lifecycle. I am
          continually expanding this skill set through further hands-on
          projects, keeping pace with modern DevOps practices and tooling.
        </p>
      </div>
    </section>
  )
}

export default About
