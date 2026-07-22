import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Let's Connect</h2>

        <p className="contact-text">
          I'm always happy to connect with engineers, cloud professionals and
          technical recruiters.
          <br />
          <br />
          Whether you'd like to discuss cloud infrastructure, DevOps,
          Kubernetes or potential opportunities, feel free to get in touch.
          I'd love to connect.
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:param_2ray@hotmail.co.uk"
            className="contact-button primary"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Param2ray"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/paramjyot-tooray-43a5442b/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            LinkedIn
          </a>

          <a
            href="/Paramjyot_Tooray_DevOps_Engineer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact