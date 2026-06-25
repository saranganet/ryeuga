import "./styles/Work.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "CloseIQ",
    category: "AI Telemetry & Audio Intelligence",
    description:
      "Real-time speech-to-text copilot extracting conversational metrics and providing automated sales objections resolution. Built to scale.",
    tools: ["React", "TypeScript", "Python", "LLM Pipelines", "WebRTC"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800",
    link: "#",
    github: "#",
    accent: "#a855f7",
    badge: "Currently Building",
  },
  {
    title: "Drapeify",
    category: "Synthetic Pixel Generation",
    description:
      "Generative diffusion models substituting expensive photography overhead with photorealistic product renders. Onboarded 6 major brands.",
    tools: ["Stable Diffusion", "ComfyUI", "PyTorch", "Image Gen APIs"],
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800",
    link: "https://drapeify.com",
    github: "#",
    accent: "#ec4899",
  },
  {
    title: "GradNet",
    category: "WebRTC Video Routing Node",
    description:
      "High-concurrency video network linking campus nodes. Hit 1,000+ active rooms within hours of live launch.",
    tools: ["React", "WebRTC", "Socket.io", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
    link: "https://gradnet-two.vercel.app/",
    github: "#",
    accent: "#22d3ee",
  },
  {
    title: "StockShield",
    category: "Offline-First Inventory Ledger",
    description:
      "Hybrid ledger with IndexedDB storage nodes, automated catalog deductions, and background sync to defeat network drops.",
    tools: ["React", "TypeScript", "IndexedDB", "Node.js", "Express", "MySQL", "Prisma"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800",
    link: "#",
    github: "https://github.com/saranganet/StockShield-Hybrid-Offline-Retail-Store-Management-System",
    accent: "#3b82f6",
  },
  {
    title: "Fleet Prediction",
    category: "ML Telemetry & Fleet Analytics",
    description:
      "Predictive machine learning pipelines forecasting vehicle engine degradation to prevent logistics failures before they occur.",
    tools: ["Python", "Scikit-Learn", "Pandas", "React", "FastAPI"],
    image: "https://images.unsplash.com/photo-1516576882766-3d60721867c2?q=80&w=800",
    link: "#",
    github: "https://github.com/saranganet/Fleet-Prediction",
    accent: "#f97316",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <h2 className="work-heading">
        Projects <span>&</span> Work
      </h2>
      <p className="work-subheading">
        Hard data. High-impact systems shipped without compromise.
      </p>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div
            className="project-card"
            key={idx}
            style={{ "--accent": project.accent } as React.CSSProperties}
          >
            <div className="project-content">
              <div className="project-meta">
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="project-category">{project.category}</span>
                  {project.badge && (
                    <span className="project-badge-inline">{project.badge}</span>
                  )}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label="Live link">
                    <FaExternalLinkAlt />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tools">
                {project.tools.map((tool) => (
                  <span key={tool} className="tool-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;