import { PropsWithChildren } from "react";
import { useLoading } from "../context/LoadingProvider";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const { isLoading } = useLoading();

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              Ryeuga
            </h1>
          </div>

          <div
            className="landing-info"
            style={{
              opacity: isLoading ? 0 : 1,
              transition: "opacity 0.2s ease-in"
            }}
          >
            <h3>Co-Founder CloseIQ &</h3>

            {/* Pehla block */}
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">A Favela</div>
              <div className="landing-h2-2">Initiative</div>
            </h2>

            {/* YAHAN FIX LAGAYA HAI: Margin Top de kar isko neechay push kiya hai */}
            <h2 style={{ marginTop: "100px" }}>
              <div className="landing-h2-info">Innovator & Problem Solver</div>
              <div className="landing-h2-info-1">Newton School of Technology Alum</div>
            </h2>

          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;