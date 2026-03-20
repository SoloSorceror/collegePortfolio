import { useEffect } from "react";
import "./styles/Achievements.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdEmojiEvents } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".achievements-section",
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".achievements-section h2",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    tl.fromTo(
      ".achievement-card",
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          <MdEmojiEvents className="section-icon" />
          Achievements
        </h2>
        <div className="achievements-list">
          {config.achievements.map((ach, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-number">0{index + 1}</div>
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3>{ach.title}</h3>
                  <span className="achievement-date">{ach.date}</span>
                </div>
                <p>{ach.description}</p>
                <span className="achievement-category">{ach.category}</span>
              </div>
              <div className="achievement-line"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
