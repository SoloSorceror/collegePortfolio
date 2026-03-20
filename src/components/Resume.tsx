import { useEffect } from "react";
import "./styles/Resume.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdDownload, MdVisibility } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".resume-section",
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".resume-section h2",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    tl.fromTo(
      ".resume-content",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="resume-section section-container" id="resume">
      <div className="resume-container">
        <h2>Resume</h2>
        <div className="resume-content">
          <div className="resume-info">
            <div className="resume-header-info">
              <h3>{config.developer.fullName}</h3>
              <p className="resume-title">{config.developer.title}</p>
            </div>
            <div className="resume-objective">
              <h4>Career Objective</h4>
              <p>{config.careerObjective}</p>
            </div>
            <div className="resume-contact-grid">
              <div className="resume-contact-item">
                <span className="resume-label">Email</span>
                <span>{config.social.email}</span>
              </div>
              <div className="resume-contact-item">
                <span className="resume-label">Phone</span>
                <span>{config.social.phone}</span>
              </div>
              <div className="resume-contact-item">
                <span className="resume-label">Location</span>
                <span>{config.social.location}</span>
              </div>
              <div className="resume-contact-item">
                <span className="resume-label">GitHub</span>
                <a href={config.contact.github} target="_blank" rel="noopener noreferrer" data-cursor="disable">
                  {config.social.github}
                </a>
              </div>
            </div>
            <div className="resume-skills-summary">
              <h4>Key Skills</h4>
              <div className="resume-skill-tags">
                {[...config.programmingLanguages, ...config.frameworks, ...config.databases].map((skill, i) => (
                  <span key={i} className="resume-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="resume-actions">
            <a
              href="https://drive.google.com/file/d/19161x7SpuSak9z3Mero9ZhEIREsXkST8/view?usp=sharing"
              download
              className="resume-btn resume-btn-download"
              data-cursor="disable"
            >
              <MdDownload /> Download Resume
            </a>
            <a
              href="https://drive.google.com/file/d/19161x7SpuSak9z3Mero9ZhEIREsXkST8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn resume-btn-view"
              data-cursor="disable"
            >
              <MdVisibility /> View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
