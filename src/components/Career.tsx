import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          Industrial <span>&amp;</span>
          <br /> Academic Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Apprentice</h4>
                <h5>Automotive Axles Ltd · Mysore</h5>
              </div>
              <h3>EXP</h3>
            </div>
            <p>
              Completed comprehensive hands-on technical apprenticeship at Automotive
              Axles Ltd (Hootagalli Industrial Area, Mysore). Gained practical
              exposure to manufacturing telemetry, quality control data tracking, and
              operational process analysis.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Intern</h4>
                <h5>Tata Electronics · Bangalore</h5>
              </div>
              <h3>INT</h3>
            </div>
            <p>
              Engaged in high-precision electronic manufacturing and systems assembly
              at Tata Electronics Systems and Solutions (Narasapura, Bangalore).
              Participated in hardware validation, component testing, and process
              documentation metrics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in E&amp;C</h4>
                <h5>Govt. Residence Women Polytechnic · Shivamogga</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Earned Diploma in Electronics and Communication Engineering with an
              exceptional <strong>CGPA of 9.56 / 10.0 (Distinction)</strong>.
              Mastered foundational computing, signal analysis, Arduino/ESP32
              microcontrollers, and analytical problem solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>A-CUBE Tech Skills Lead</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Earned four professional certifications: Data Analysis Certification,
              Artificial Intelligence &amp; Machine Learning Certification, Data
              Analytics Certification, and Python Programming Certification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
