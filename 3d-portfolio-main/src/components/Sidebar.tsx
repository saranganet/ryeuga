import { useEffect, useState } from "react";
import "./styles/Sidebar.css";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

// SVG icons matching dhravya.dev exactly (Home, About, Blog/Experience, Projects, Resume/Guestbook)
const HomeIcon = () => (
  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19">
    <path fillOpacity=".16" d="M4 7v11h13V7l-6.5-5z" />
    <path d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z" />
  </svg>
);

const AboutIcon = () => (
  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path fillOpacity=".16" d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
    <path d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
  </svg>
);

const ExperienceIcon = () => (
  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path fillOpacity=".16" d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 0h-4V4h4v2z" />
    <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 0h-4V4h4v2zm6 13H4V8h16v11z"/>
  </svg>
);

const ProjectsIcon = () => (
  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path fillOpacity=".16" d="M1 4h18v10H1z" />
    <path d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z" />
  </svg>
);

const BlogIcon = () => (
  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path fillOpacity=".16" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z"/>
  </svg>
);

const GuestbookIcon = () => (
  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">
    <path fillOpacity=".16" fillRule="nonzero" d="M1 5h16v14H1z" />
    <path fillRule="nonzero" d="M2 6v12h14V6H2Zm16-2v16H0V4h5V0h8v4h3ZM7 2v2h4V2H7Zm0 6h4v2H7V8Zm-2 4h8v2H5v-2Z" />
  </svg>
);

const SunIcon = () => (
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
    <path d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
    <path d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
  </svg>
);

const navItems = [
  { id: "home",       label: "Home",       Icon: HomeIcon },
  { id: "blogs",      label: "Blogs",      Icon: BlogIcon },
  { id: "experience", label: "Experience", Icon: ExperienceIcon },
  { id: "projects",   label: "Projects",   Icon: ProjectsIcon },
  { id: "guestbook",  label: "Guestbook",  Icon: GuestbookIcon },
];

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <aside className="sidebar">
      <div className="sidebar-spacer" />

      <nav className="nav-links">
        {navItems.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`nav-item ${activeTab === id ? "active" : ""}`}
            onClick={() => setActiveTab(id)}
            title={label}
            aria-label={label}
          >
            <span className="nav-icon"><Icon /></span>
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
