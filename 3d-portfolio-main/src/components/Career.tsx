import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Item 1: Co-Founder CloseIQ */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>CloseIQ - A Favela Initiative</h5>
              </div>
              <h3>2026–Present</h3>
            </div>
            <p>
              Focused on making data analytics and meaningful insights accessible to SMBs, 
              helping them make smarter data-driven decisions.
            </p>
          </div>

          {/* Item 2: Co-Founder GradNet */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>GradNet</h5>
              </div>
              <h3>2025 July–2026 January</h3>
            </div>
            <p>
              Built GradNet, a social discovery platform built exclusively for college students. 
              Enables spontaneous, real-time conversations through random matching.
            </p>
          </div>

          {/* Item 3: Co-ordinator */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-ordinator</h4>
                <h5>Algonauts-Newton School</h5>
              </div>
              <h3>2024 November–2025 April</h3>
            </div>
            <p>
              Conducted regular Data Structures & Algorithms + Competitive Programming lectures 
              for club members. Mentored peers on algorithmic problem-solving.
            </p>
          </div>

          {/* Item 4: Student Intern */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Intern</h4>
                <h5>Mindler</h5>
              </div>
              <h3>2023 October–2023 December</h3>
            </div>
            <p>
              Analyzed and cleaned datasets using Excel, Pandas, and NumPy to support Rotary 
              International initiatives. Performed data manipulation to extract actionable insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;