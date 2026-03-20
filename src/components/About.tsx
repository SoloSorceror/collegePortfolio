import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Side: Visual Elements */}
        <div className="about-visuals">
          <div className="about-card-wrapper">
            <div className="about-glow"></div>
            <div className="about-glass-card">
              <div className="about-card-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="card-title">developer.ts</span>
              </div>
              <div className="about-card-body">
                <div className="code-line">
                  <span className="keyword">const</span> <span className="variable">developer</span> <span className="operator">=</span> <span className="bracket">{`{`}</span>
                </div>
                <div className="code-line indent">
                  <span className="property">name</span><span className="operator">:</span> <span className="string">"{config.developer.fullName}"</span><span className="operator">,</span>
                </div>
                <div className="code-line indent">
                  <span className="property">role</span><span className="operator">:</span> <span className="string">"Full-Stack Developer & ML Enthusiast"</span><span className="operator">,</span>
                </div>
                <div className="code-line indent">
                  <span className="property">focus</span><span className="operator">:</span> <span className="bracket">[</span>
                </div>
                <div className="code-line indent-2">
                  <span className="string">"Web Development"</span><span className="operator">,</span>
                </div>
                <div className="code-line indent-2">
                  <span className="string">"Machine Learning"</span><span className="operator">,</span>
                </div>
                <div className="code-line indent-2">
                  <span className="string">"Open Source"</span>
                </div>
                <div className="code-line indent">
                  <span className="bracket">]</span><span className="operator">,</span>
                </div>
                <div className="code-line indent">
                  <span className="property">passion</span><span className="operator">:</span> <span className="string">"Building innovative solutions"</span>
                </div>
                <div className="code-line">
                  <span className="bracket">{`}`}</span><span className="operator">;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text Text */}
        <div className="about-me">
          <h3 className="title">{config.about.title}</h3>
          <p className="para">
            {config.about.description}
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
