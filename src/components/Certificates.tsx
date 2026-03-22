import { useEffect } from "react";
import "./styles/Certificates.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdVerified, MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".certificates-section",
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".certificates-section h2",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    tl.fromTo(
      ".cert-card",
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.15, ease: "power3.out" },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="certificates-section section-container" id="certificates">
      <div className="certificates-container">
        <h2>
          <MdVerified className="section-icon" />
          Certificates
        </h2>
        <div className="cert-grid">
          {config.certificates.map((cert, index) => (
            <div 
              key={index} 
              className="cert-card"
              onClick={() => {
                if (cert.link && cert.link !== "#") {
                  window.open(cert.link, "_blank");
                } else {
                  alert("Please update config.ts with your actual certificate URL to enable this link!");
                }
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="cert-category">{cert.category}</div>
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.name} className="cert-image" />
              </div>
              <h3>{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <span className="cert-date">{cert.date}</span>
              <span className="cert-link" data-cursor="disable">
                {cert.link && cert.link !== "#" ? "View Certificate" : "Link pending..."} <MdArrowOutward />
              </span>
              <div className="cert-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
