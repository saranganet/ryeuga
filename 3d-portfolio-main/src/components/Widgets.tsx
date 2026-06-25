import { useState } from "react";
import { FaArrowRight, FaEnvelope, FaCheck, FaExclamationTriangle, FaPenNib } from "react-icons/fa";
import "./styles/Widgets.css";

interface GuestbookWidgetProps {
  onNavigateToGuestbook: () => void;
}

export const GuestbookWidget = ({ onNavigateToGuestbook }: GuestbookWidgetProps) => {
  return (
    <div className="glass-card widget-card guestbook-widget-card">
      <div className="widget-header">
        <span className="widget-badge-icon"><FaPenNib style={{ color: "var(--accent)" }} /></span>
        <span className="widget-meta-text">Thanks for visiting my site!</span>
      </div>
      <h3 className="widget-title">Glad to have you here.</h3>
      
      <div className="widget-links-list">
        <button className="widget-link-item" onClick={onNavigateToGuestbook}>
          <span>Leave a message on my guestbook</span>
          <FaArrowRight className="arrow-icon" />
        </button>
        
        <a href="mailto:ryeuga@aol.com" className="widget-link-item">
          <span>Send an email</span>
          <FaArrowRight className="arrow-icon" />
        </a>
        

      </div>
    </div>
  );
};

export const SubscriptionWidget = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        if (res.ok) {
          setStatus("success");
          setEmail("");
        } else {
          setStatus("error");
          setMessage(data.error || "Subscription failed.");
        }
      } else {
        // Non-JSON response returned. In local Vite dev mode, Vite proxies missing routes to index.html.
        if (import.meta.env.DEV) {
          console.warn("Dev Mode: /api/subscribe returned non-JSON. Simulating subscription success.");
          await new Promise((resolve) => setTimeout(resolve, 600));
          setStatus("success");
          setEmail("");
        } else {
          setStatus("error");
          setMessage("Invalid server response. Please try again.");
        }
      }
    } catch (err) {
      console.error(err);
      if (import.meta.env.DEV) {
        console.warn("Dev Mode: Fetch to /api/subscribe failed. Simulating subscription success.");
        await new Promise((resolve) => setTimeout(resolve, 600));
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Network error. Try again.");
      }
    }
  };

  return (
    <div className="glass-card widget-card subscription-widget-card">
      <div className="widget-header">
        <span className="widget-badge-icon"><FaEnvelope style={{ color: "var(--accent)" }} /></span>
        <span className="widget-meta-text">Newsletter Nodes</span>
      </div>
      <h3 className="widget-title">Subscribe to raw telemetry</h3>
      <p className="widget-subtitle" style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: "0" }}>
        Get notified automatically when new system logs (blogs) are pushed.
      </p>

      {status === "success" ? (
        <div className="subscription-success" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#10b981", fontSize: "0.85rem", fontWeight: 500, padding: "8px 0" }}>
          <FaCheck /> <span>Email registered successfully.</span>
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="subscription-form" style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              id="subscribe-email-input"
              type="email"
              placeholder="operator@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "6px",
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                fontSize: "0.85rem",
                fontFamily: "inherit",
                outline: "none",
                transition: "border-color 0.2s"
              }}
              onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
              onBlur={(e) => e.target.style.borderColor = "var(--border)"}
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading" || !email}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "10px",
              borderRadius: "6px",
              background: "var(--accent)",
              border: "none",
              color: "#fff",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s"
            }}
            onMouseOver={(e) => {
              if (status !== "loading") e.currentTarget.style.background = "var(--accent-hover)";
            }}
            onMouseOut={(e) => {
              if (status !== "loading") e.currentTarget.style.background = "var(--accent)";
            }}
          >
            <span>{status === "loading" ? "Registering..." : "Subscribe to updates"}</span>
            {status !== "loading" && <FaArrowRight style={{ fontSize: "0.75rem" }} />}
          </button>
          {status === "error" && (
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#ef4444", fontSize: "0.75rem", marginTop: "2px" }}>
              <FaExclamationTriangle /> <span>{message}</span>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export const ContentWidget = () => {
  return (
    <div className="glass-card widget-card content-widget-card">
      <h3 className="content-widget-title">soon uploading content on my instagram</h3>
      <p className="content-widget-subtitle">Follow my creative journey and tech updates</p>
      <a href="https://www.instagram.com/preseedlife/" target="_blank" rel="noreferrer" className="content-widget-btn">
        <span>Check out @preseedlife</span>
        <FaArrowRight className="arrow-icon" />
      </a>
    </div>
  );
};
