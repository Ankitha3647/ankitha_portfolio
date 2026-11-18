import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { FiDownload, FiArrowDownRight, FiMail } from "react-icons/fi";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I&apos;m</h2>
            <h1>
              ANKITHA
              <br />
              <span>K M</span>
            </h1>
            <p className="landing-tagline">
              Aspiring Data Analyst &amp; Data Science Professional with expertise in
              Python, Machine Learning, Power BI, and Deep Learning solutions.
            </p>
            <div className="landing-actions">
              <a
                href="/Ankitha_K_M_Professional_Resume.pdf"
                download="Ankitha_K_M_Professional_Resume.pdf"
                className="landing-btn landing-btn-primary"
                data-cursor="disable"
              >
                <FiDownload /> Download Resume
              </a>
              <a
                href="#work"
                className="landing-btn landing-btn-secondary"
                data-cursor="disable"
              >
                <FiArrowDownRight /> View Projects
              </a>
              <a
                href="#contact"
                className="landing-btn landing-btn-outline"
                data-cursor="disable"
              >
                <FiMail /> Contact
              </a>
            </div>
          </div>
          <div className="landing-info">
            <h3>Aspiring &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Data</div>
              <div className="landing-h2-2">Analyst</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Analyst</div>
              <div className="landing-h2-info-1">Science</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
