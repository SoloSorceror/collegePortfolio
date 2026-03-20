import { useEffect } from "react";
import "./styles/Education.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdSchool, MdMenuBook } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".education-section",
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".education-section h2",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    tl.fromTo(
      ".edu-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          <MdSchool className="section-icon" />
          Education
        </h2>
        <div className="edu-timeline">
          {config.education.map((edu, index) => (
            <div key={index} className="edu-card">
              <div className="edu-card-header">
                <div className="edu-institution">
                  <h3>{edu.institution}</h3>
                  <span className="edu-location">{edu.location}</span>
                </div>
                <span className="edu-period">{edu.period}</span>
              </div>
              <div className="edu-card-body">
                <h4>{edu.degree}{edu.field ? ` — ${edu.field}` : ""}</h4>
                <p className="edu-grade">{edu.grade}</p>
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="edu-coursework">
                    <h5><MdMenuBook /> Relevant Coursework</h5>
                    <div className="edu-tags">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="edu-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="edu-card-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
