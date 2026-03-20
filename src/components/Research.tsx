import { useEffect } from "react";
import "./styles/Research.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdScience, MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Research = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".research-section",
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".research-section h2",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    tl.fromTo(
      ".research-card",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="research-section section-container" id="research">
      <div className="research-container">
        <h2>
          <MdScience className="section-icon" />
          Research & Publications
        </h2>
        <div className="research-list">
          {config.research.map((paper, index) => (
            <div key={index} className="research-card">
              <div className="research-number">0{index + 1}</div>
              <div className="research-content">
                <h3>{paper.title}</h3>
                <p className="research-abstract">{paper.abstract}</p>
                <div className="research-meta">
                  <span className="research-authors">
                    <strong>Authors:</strong> {paper.coAuthors}
                  </span>
                  <span className="research-status">{paper.publication}</span>
                </div>
                {paper.link && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="research-link"
                    data-cursor="disable"
                  >
                    View Publication <MdArrowOutward />
                  </a>
                )}
              </div>
              <div className="research-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
