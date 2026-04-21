import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am <strong>Soham Jayesh Saranga</strong>, a driven AI Product Manager 
          based in Pune. Currently studying Computer Science at <strong>Newton School of Technology</strong>, 
          I combine solid coding fundamentals with hands-on experimentation using LLMs and AI agents.
        </p>
        <p className="para">
          I focus on building tools and workflows that solve real user problems. I use tools like 
          <strong> ChatGPT, Claude, Cursor, Zapier/Make, and n8n </strong> to prototype solutions 
          rapidly, but I also write the core product logic when needed.
        </p>
        <p className="para">
          I document workflows and automation processes cleanly so they're reusable, scalable, and 
          easy to improve over time. I am comfortable collaborating with cross-functional teams to 
          understand user behavior, break down problems clearly, and deliver impactful solutions.
        </p>
      </div>
    </div>
  );
};

export default About;