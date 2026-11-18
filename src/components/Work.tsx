import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "Smart Agriculture",
    category: "Crop Yield Prediction & Decision Support",
    tools: "Python, Scikit-Learn, Random Forest, XGBoost, Pandas, Streamlit",
    description:
      "Engineered an end-to-end ML solution trained on the FAO Crop Yield dataset. Performed rigorous EDA, missing-value imputation, and categorical encoding. Benchmarked Random Forest and XGBoost regression models to maximize prediction accuracy, and deployed an interactive Streamlit application.",
    image: "/images/project-crop-yield.png",
    link: "https://github.com/Ankitha3647",
  },
  {
    title: "Garbage Segregation",
    category: "Computer Vision & Solid Waste Classification",
    tools: "Python, Deep Learning, CNN, Computer Vision, TrashNet Dataset, OpenCV",
    description:
      "Built a deep Convolutional Neural Network (CNN) to classify waste into distinct recyclable categories using the TrashNet / Garbage Classification dataset. Applied data augmentation and regularization to achieve robust multi-class image recognition.",
    image: "/images/project-garbage-segregation.png",
    link: "https://github.com/Ankitha3647",
  },
  {
    title: "Amazon Sales Analysis",
    category: "Exploratory Data Analytics & BI Dashboards",
    tools: "Python, Pandas, NumPy, Matplotlib, Seaborn, Microsoft Power BI, Excel",
    description:
      "Conducted extensive exploratory data analysis on the Amazon Sales dataset to identify sales trends, seasonal demand, and customer purchasing patterns. Designed dynamic Power BI dashboards to translate data into actionable commercial strategies.",
    image: "/images/project-amazon-sales.png",
    link: "https://github.com/Ankitha3647",
  },
  {
    title: "Mood-Based Music Recommender",
    category: "Recommendation System & Mobile App",
    tools: "Python, Flutter, Dart, Audio Analysis, Sentiment Algorithms",
    description:
      "Architected an intelligent recommendation system that analyzes user emotional states and matches them with acoustic song features. Features a seamless cross-platform Flutter frontend backed by Python analytical logic.",
    image: "/images/project-music-recommendation.png",
    link: "https://github.com/Ankitha3647",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-desc">{project.description}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Technologies &amp; Methodologies</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-actions">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="project-github-btn"
                            data-cursor="disable"
                          >
                            <FaGithub /> View on GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
