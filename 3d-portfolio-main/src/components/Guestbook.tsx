import "./styles/Guestbook.css";

const Guestbook = () => {
  return (
    <div className="guestbook-container">
      <div className="guestbook-header">
        <h1>Guestbook</h1>
        <p>Currently on hold.</p>
      </div>

      <div className="giscus-setup-card coming-soon-card">
        <div className="setup-icon">⏳</div>
        <h2>Coming Soon</h2>
        <p className="matsson-quote" style={{ fontStyle: "italic", marginTop: "12px", color: "var(--text-muted)", fontSize: "1rem" }}>
          "I don't need validation from anonymous text blocks. The guestbook is currently on hold. 
          Check back later if you care."
        </p>
      </div>
    </div>
  );
};

export default Guestbook;
