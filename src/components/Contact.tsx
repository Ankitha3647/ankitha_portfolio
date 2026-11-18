import { useState, FormEvent } from "react";
import { MdArrowOutward, MdCopyright, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaFilePdf, FaFileWord } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link
    const mailSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:ankithakm35@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    setSubmitted(true);
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <p className="contact-subtitle">
          Interested in working together or discussing data analytics, machine learning,
          or AI opportunities? Let&apos;s connect!
        </p>

        <div className="contact-flex">
          {/* Direct Details */}
          <div className="contact-box">
            <h4>Get In Touch</h4>
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <div>
                <span className="contact-label">Email</span>
                <a href="mailto:ankithakm35@gmail.com" data-cursor="disable">
                  ankithakm35@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <MdPhone className="contact-icon" />
              <div>
                <span className="contact-label">Phone</span>
                <a href="tel:+918088364785" data-cursor="disable">
                  +91 80883 64785
                </a>
              </div>
            </div>

            <div className="contact-item">
              <MdLocationOn className="contact-icon" />
              <div>
                <span className="contact-label">Location</span>
                <p>Haranahalli, Shivamogga, Karnataka, India</p>
              </div>
            </div>

            <h4>Resume Downloads</h4>
            <div className="resume-download-links">
              <a
                href="/Ankitha_K_M_Professional_Resume.pdf"
                download="Ankitha_K_M_Professional_Resume.pdf"
                className="resume-dl-btn pdf-btn"
                data-cursor="disable"
              >
                <FaFilePdf /> Download PDF Resume
              </a>
              <a
                href="/Ankitha_K_M_Professional_Resume.docx"
                download="Ankitha_K_M_Professional_Resume.docx"
                className="resume-dl-btn docx-btn"
                data-cursor="disable"
              >
                <FaFileWord /> Download DOCX Resume
              </a>
            </div>
          </div>

          {/* Profiles & Academic Info */}
          <div className="contact-box">
            <h4>Online Presence</h4>
            <a
              href="https://github.com/Ankitha3647"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <FaGithub /> GitHub — Ankitha3647 <MdArrowOutward />
            </a>

            <h4>Education</h4>
            <p>
              Diploma in Electronics and Communication Engineering (E&amp;C)
              <br />
              <strong>Government Residence Women Polytechnic College, Shivamogga</strong>
              <br />
              <span className="cgpa-tag">CGPA: 9.56 / 10.0 (Distinction) · Class of 2024</span>
            </p>

            <h4>Key Certifications</h4>
            <ul className="cert-mini-list">
              <li>Data Analysis Certification · A-CUBE Tech Skills Lead</li>
              <li>Artificial Intelligence &amp; ML · A-CUBE Tech Skills Lead</li>
              <li>Data Analytics Certification · A-CUBE Tech Skills Lead</li>
              <li>Python Programming · A-CUBE Tech Skills Lead</li>
            </ul>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-box contact-form-box">
            <h4>Send a Direct Message</h4>
            {submitted ? (
              <div className="form-success-msg">
                <p>Thank you! Your email client has been prepared with your message.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="send-another-btn"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Subject (Optional)"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows={4}
                    required
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="contact-submit-btn" data-cursor="disable">
                  Send Message <MdArrowOutward />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="contact-footer">
          <div className="footer-credits">
            <h2>
              Designed &amp; Developed for <span>Ankitha K M</span>
            </h2>
            <p className="footer-tag">Aspiring Data Analyst | Data Science Enthusiast</p>
          </div>
          <div className="footer-copy">
            <h5>
              <MdCopyright /> 2026 Ankitha K M. All Rights Reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
