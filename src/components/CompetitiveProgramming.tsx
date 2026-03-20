import { useEffect } from "react";
import "./styles/CompProgramming.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdCode, MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const CompetitiveProgramming = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".comp-section",
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".comp-section h2",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    tl.fromTo(
      ".comp-platform-card",
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.15, ease: "power3.out" },
      "-=0.4"
    );

    tl.fromTo(
      ".comp-highlight",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power3.out" },
      "-=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="comp-section section-container" id="competitive">
      <div className="comp-container">
        <h2>
          <MdCode className="section-icon" />
          Competitive Programming
        </h2>
        <div className="comp-grid">
          <div className="comp-platforms">
            {config.competitiveProgramming.platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="comp-platform-card"
                data-cursor="disable"
              >
                <div className="comp-platform-header">
                  <h3>{platform.name}</h3>
                  <MdArrowOutward />
                </div>
                <div className="comp-platform-stats">
                  {platform.rating && (
                    <div className="comp-stat">
                      <span className="comp-stat-label">Rating</span>
                      <span className="comp-stat-value">{platform.rating}</span>
                    </div>
                  )}
                  <div className="comp-stat">
                    <span className="comp-stat-label">Problems Solved</span>
                    <span className="comp-stat-value">{platform.problemsSolved}</span>
                  </div>
                </div>
                <div className="comp-platform-glow"></div>
              </a>
            ))}
          </div>
          <div className="comp-highlights">
            <h3>Highlights</h3>
            {config.competitiveProgramming.highlights.map((highlight, index) => (
              <div key={index} className="comp-highlight">
                <div className="comp-highlight-dot"></div>
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveProgramming;
