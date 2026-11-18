import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am an aspiring Data Analyst and Data Science professional passionate about
          solving real-world challenges through Python, SQL, Machine Learning, Deep
          Learning, and Visual Analytics. Graduating with a 9.56 CGPA in Electronics &amp;
          Communication and having gained practical industrial exposure at Tata
          Electronics and Automotive Axles Ltd, I bridge rigorous quantitative analysis
          with modern AI algorithms to deliver actionable insights.
        </p>
        <div className="about-strengths">
          <span className="strength-badge">Analytical Thinking</span>
          <span className="strength-badge">Problem Solving</span>
          <span className="strength-badge">Machine Learning</span>
          <span className="strength-badge">Data Visualization</span>
          <span className="strength-badge">Adaptability</span>
        </div>
      </div>
    </div>
  );
};

export default About;
