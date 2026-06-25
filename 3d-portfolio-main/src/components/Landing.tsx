import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import "./styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing-dash">
      <div className="landing-greeting">
        Soham Saranga. Build fast. Move. Noise is secondary.
      </div>

      <h1 className="landing-headline">
        I build <span className="highlight-blue">infrastructure</span> and <span className="highlight-green">AI models</span>
      </h1>

      <div className="landing-subtitle">
        co-founder at{" "}
        <a href="https://closeiq.in" target="_blank" rel="noreferrer" className="subtitle-highlight">
          CloseIQ
        </a>{" "}
        & CS student at Newton School of Tech (trying not to drop-out)
      </div>

      <div className="landing-bio-container">
        <p className="landing-bio-text">
          I optimize pipelines at the intersection of <strong>AI, code, and startups</strong>. Moving fast is the only survival metric. If you aren't shipping features in hours, you are stagnant. I write code(hell na, claude does it for me) to capture value, scale numbers, and make legacy systems look incompetent.
        </p>
        <p className="landing-bio-text">
          Before CloseIQ, I co-founded <a href="https://drapeify.com" target="_blank" rel="noreferrer" className="subtitle-highlight">drapeify.com</a> to deprecate overpriced creative agency fees with automated AI fashion models, and built <a href="https://gradnet-two.vercel.app/" target="_blank" rel="noreferrer" className="subtitle-highlight">gradnet-two.vercel.app</a> to run a high-concurrency video roulette engine—we hit 1,000+ active channels on day one, which was absolute, beautiful chaos.
        </p>
      </div>

      {/* Horizontal Social Icons Row */}
      <div className="landing-social-row">
        <a
          href="https://github.com/saranganet"
          target="_blank"
          rel="noreferrer"
          className="social-icon-btn"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/ryuga4lt"
          target="_blank"
          rel="noreferrer"
          className="social-icon-btn"
          aria-label="Twitter / X"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer"
          className="social-icon-btn"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/preseedlife/"
          target="_blank"
          rel="noreferrer"
          className="social-icon-btn"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:ryeuga@aol.com"
          className="social-icon-btn"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Content Stats / Spacer */}
      <div className="landing-content-stats">
        <span className="stats-intro">raw logs and content streams coming soon</span>
      </div>
    </div>
  );
};

export default Landing;