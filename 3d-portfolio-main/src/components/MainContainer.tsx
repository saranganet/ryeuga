import { lazy, PropsWithChildren, Suspense, useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Landing from "./Landing";
import Career from "./Career";
import Work from "./Work";
import Guestbook from "./Guestbook";
import GridBoard from "./GridBoard";
import PlaylistWidget from "./PlaylistWidget";
import Articles from "./Articles";
import { GuestbookWidget, ContentWidget, SubscriptionWidget } from "./Widgets";
import { FaArrowRight } from "react-icons/fa";
import ArticleReader from "./ArticleReader";

const TechStack = lazy(() => import("./TechStack"));

/* Achievements Data */
const achievements = [
  {
    title: "Startup Foundry 2026",
    role: "Selected Builder (Swedish Normcore Ethos)",
    description: "Secured a slot to build and scale in the Startup Foundry 2026 cohort. We don't ask, we build.",
    image: "/images/foundary.jpg",
    badge: "Startup"
  },
  {
    title: "Whole Brain Emulation Publication",
    role: "Lead Author & Researcher (Digital Brain Architecture)",
    description: "Authored and published research detailing WBE bottlenecks, ethics, and uploading the human mind into raw hardware. Pure digital ascension.",
    image: "/images/res.png",
    badge: "Research",
    link: "https://ijirt.org/article?manuscript=197069"
  },
  {
    title: "Open Source Contributions",
    role: "Core Contributor (Their codebase was mid)",
    description: "Infiltrated legacy codebases like drawdb, mochajs, and simple-icons, refactored their inefficiencies, and successfully merged optimization PRs.",
    image: "/images/github-logo.png",
    badge: "Open Source"
  },
  {
    title: "Maharashtra Board Exams",
    role: "Top 0.28% State Rank (An absolute waste of cognitive resources)",
    description: "Outranked 1.5 million candidates by securing the 4,200th spot in state board examinations. High-score metrics, but highly unrecommended.",
    image: "/images/board-exam-meme.jpg",
    badge: "Academic"
  }
];

/* Projects Data (dhravya.dev Style) */
const compactProjects = [
  {
    title: "CloseIQ",
    description: "Real-time speech-to-text pipeline transcribing, analyzing, and extracting raw sales metrics.",
    icon: "C",
    link: "#",
    color: "#a855f7"
  },
  {
    title: "Drapeify",
    description: "Deprecated traditional photography agencies by generating high-fidelity creative content from raw pixels.",
    icon: "D",
    link: "https://drapeify.com",
    color: "#ec4899"
  },
  {
    title: "GradNet",
    description: "High-concurrency video roulette connecting campus nodes. Scaled instantly, causing beautiful server panic.",
    icon: "G",
    link: "https://gradnet-two.vercel.app/",
    color: "#22d3ee"
  },
  {
    title: "StockShield",
    description: "Offline-first inventory node utilizing IndexedDB with background data synchronization and zero friction.",
    icon: "S",
    link: "https://github.com/saranganet/StockShield-Hybrid-Offline-Retail-Store-Management-System",
    color: "#3b82f6"
  },
  {
    title: "Fleet Prediction",
    description: "Predictive machine learning models forecasting component degradation to optimize fleet operations.",
    icon: "F",
    link: "https://github.com/saranganet/Fleet-Prediction",
    color: "#f97316"
  }
];

/* ── Main header bar (matches dhravya.dev top bar) ── */
const MainHeader = ({ onSubscribe }: { onSubscribe: () => void }) => (
  <div className="main-header">
    <button
      onClick={onSubscribe}
      style={{
        background: "var(--accent)",
        color: "#fff",
        border: "none",
        padding: "8px 16px",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: 600,
        cursor: "pointer",
        transition: "background 0.2s",
        fontFamily: "inherit",
      }}
      onMouseOver={e => (e.currentTarget.style.background = "var(--accent-hover)")}
      onMouseOut={e => (e.currentTarget.style.background = "var(--accent)")}
    >
      Subscribe to my blog
    </button>
  </div>
);

const MainContainer = (_: PropsWithChildren) => {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // URL routing / parameter sync on mount
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      const articleParam = params.get("article");

      if (articleParam) {
        setActiveTab("read-article");
        setSelectedArticleId(articleParam);
      } else if (tabParam) {
        setActiveTab(tabParam);
        setSelectedArticleId(null);
      } else {
        setActiveTab("home");
        setSelectedArticleId(null);
      }
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedArticleId(null);
    const params = new URLSearchParams();
    if (tab !== "home") {
      params.set("tab", tab);
    }
    const newSearch = params.toString();
    const newUrl = `${window.location.pathname}${newSearch ? "?" + newSearch : ""}`;
    window.history.pushState({ tab, articleId: null }, "", newUrl);
  };

  const handleArticleSelect = (articleId: string) => {
    const prevTab = activeTab === "read-article" ? "blogs" : activeTab;
    setActiveTab("read-article");
    setSelectedArticleId(articleId);
    const params = new URLSearchParams();
    params.set("article", articleId);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({ tab: "read-article", articleId, prevTab }, "", newUrl);
  };

  const handleArticleBack = () => {
    if (window.history.state && window.history.state.prevTab) {
      handleTabChange(window.history.state.prevTab);
    } else {
      handleTabChange("blogs");
    }
  };

  const handleHeaderSubscribe = () => {
    if (activeTab !== "home") {
      handleTabChange("home");
      setTimeout(() => {
        const element = document.getElementById("subscribe-email-input");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          element.focus();
        }
      }, 150);
    } else {
      const element = document.getElementById("subscribe-email-input");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.focus();
      }
    }
  };

  return (
    <div className="container-main">
      <Sidebar activeTab={activeTab === "read-article" ? "blogs" : activeTab} setActiveTab={handleTabChange} />

      <main className="main-content-panel">
        {/* Top header bar */}
        <MainHeader onSubscribe={handleHeaderSubscribe} />

        {/* ── HOME ── */}
        {activeTab === "home" && (
          <div className="tab-view">
            <GridBoard />
            <div className="dashboard-grid">
              {/* Left Column */}
              <div>
                <Landing />
                
                {/* Articles Section */}
                <Articles
                  onSelectArticle={handleArticleSelect}
                />
                
                {/* Achievements Section */}
                <div className="achievements-section">
                  <h2 className="section-title">Achievements</h2>
                  <div className="achievements-grid">
                    {achievements.map((achievement, idx) => {
                      const CardElement = achievement.link ? "a" : "div";
                      return (
                        <CardElement 
                          href={achievement.link}
                          target={achievement.link ? "_blank" : undefined}
                          rel={achievement.link ? "noreferrer" : undefined}
                          className="achievement-card" 
                          key={idx}
                          style={achievement.link ? { textDecoration: "none", color: "inherit", cursor: "pointer" } : undefined}
                        >
                          <div className="achievement-img-wrap">
                            <img src={achievement.image} alt={achievement.title} className="achievement-img" />
                          </div>
                          <div className="achievement-content">
                            <span className="achievement-meta">{achievement.role}</span>
                            <h3 className="achievement-title">{achievement.title}</h3>
                          </div>
                        </CardElement>
                      );
                    })}
                  </div>
                </div>

                {/* Projects Section */}
                <div className="latest-projects-section">
                  <h2 className="section-title">Latest projects</h2>
                  <div className="projects-compact-grid">
                    {compactProjects.map((project, idx) => (
                      <a
                        href={project.link}
                        key={idx}
                        className="project-compact-card"
                        onClick={(e) => {
                          if (project.link === "#") {
                            e.preventDefault();
                          }
                        }}
                      >
                        <div 
                          className="project-icon-circle"
                          style={{ color: project.color, borderColor: `color-mix(in srgb, ${project.color} 30%, var(--border))` }}
                        >
                          {project.icon}
                        </div>
                        <div className="project-compact-content">
                          <h3 className="project-compact-title">
                            {project.title}
                            <FaArrowRight className="project-compact-arrow" />
                          </h3>
                          <p className="project-compact-desc">{project.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="projects-footer">
                    See a list of all my projects{" "}
                    <span 
                      className="projects-footer-link"
                      onClick={() => setActiveTab("projects")}
                    >
                      On my projects page
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column (Widgets) */}
              <aside style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <SubscriptionWidget />
                <GuestbookWidget onNavigateToGuestbook={() => setActiveTab("guestbook")} />
                <PlaylistWidget />
                <ContentWidget />
              </aside>
            </div>
          </div>
        )}

        {/* ── ARTICLE READER ── */}
        {activeTab === "read-article" && selectedArticleId && (
          <ArticleReader
            articleId={selectedArticleId}
            onBack={handleArticleBack}
          />
        )}

        {/* ── BLOGS ── */}
        {activeTab === "blogs" && (
          <div className="tab-view">
            <Articles onSelectArticle={handleArticleSelect} />
          </div>
        )}



        {/* ── EXPERIENCE ── */}
        {activeTab === "experience" && (
          <div className="tab-view">
            <Career />
          </div>
        )}

        {/* ── PROJECTS ── */}
        {activeTab === "projects" && (
          <div className="tab-view">
            <Work />
            <div
              className="glass-card"
              style={{ marginTop: "40px", height: "500px", display: "flex", flexDirection: "column" }}
            >
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "6px" }}>Tech Stack Sandbox</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "16px" }}>
                Interact with the physics environment — drag and throw the spheres!
              </p>
              <div style={{ flex: 1, borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border)" }}>
                <Suspense fallback={
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "var(--text-muted)" }}>
                    Loading physics engine...
                  </div>
                }>
                  <TechStack />
                </Suspense>
              </div>
            </div>
          </div>
        )}

        {/* ── GUESTBOOK ── */}
        {activeTab === "guestbook" && (
          <div className="tab-view">
            <Guestbook />
          </div>
        )}
      </main>
    </div>
  );
};

export default MainContainer;
