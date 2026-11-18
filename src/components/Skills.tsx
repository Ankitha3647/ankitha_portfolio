import "./styles/Skills.css";
import {
  FaPython,
  FaDatabase,
  FaChartPie,
  FaBrain,
  FaMicrochip,
  FaCode,
  FaEye,
} from "react-icons/fa6";

const skillCategories = [
  {
    icon: <FaPython />,
    title: "Programming Languages",
    description: "Core languages for analytical scripting and relational database querying.",
    skills: ["Python", "SQL"],
  },
  {
    icon: <FaChartPie />,
    title: "Data Analytics",
    description: "Data manipulation, statistical analysis, and feature preprocessing.",
    skills: [
      "Pandas",
      "NumPy",
      "Exploratory Data Analysis (EDA)",
      "Missing Value Handling",
      "Feature Encoding",
    ],
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning",
    description: "Supervised and ensemble predictive algorithms for classification and regression.",
    skills: [
      "Random Forest",
      "XGBoost",
      "Scikit-Learn",
      "Predictive Modeling",
      "Hyperparameter Tuning",
    ],
  },
  {
    icon: <FaEye />,
    title: "Deep Learning & Vision",
    description: "Deep neural networks for image recognition and sequential patterns.",
    skills: [
      "Convolutional Neural Networks (CNN)",
      "LSTM Networks",
      "Computer Vision",
      "TensorFlow / Keras",
      "Image Augmentation",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Data Visualization & BI",
    description: "Translating analytical results into executive dashboards and distributions.",
    skills: [
      "Microsoft Power BI",
      "Matplotlib",
      "Seaborn",
      "Microsoft Excel",
      "Interactive Dashboards",
    ],
  },
  {
    icon: <FaMicrochip />,
    title: "Hardware & Embedded",
    description: "Microcontroller architecture, sensor integration, and hardware telemetry.",
    skills: ["Arduino", "ESP32", "Microcontroller Interfacing", "Sensor Telemetry"],
  },
  {
    icon: <FaCode />,
    title: "Developer Tools",
    description: "Version control, interactive notebooks, and application deployment.",
    skills: ["Git", "GitHub", "Streamlit", "Jupyter Notebook", "VS Code"],
  },
];

const Skills = () => {
  return (
    <div className="skills-section section-container" id="skills">
      <div className="skills-header">
        <h2>
          Technical <span>Skills</span>
        </h2>
        <p className="skills-subtitle">
          Categorized proficiencies across data analytics, machine learning pipelines,
          data visualization, and hardware systems.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-card-top">
              <div className="skill-icon-wrap">{cat.icon}</div>
              <h4>{cat.title}</h4>
            </div>
            <p className="skill-card-desc">{cat.description}</p>
            <div className="skill-tags">
              {cat.skills.map((skill, sIdx) => (
                <span className="skill-tag" key={sIdx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
