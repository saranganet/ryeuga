import { useState, useCallback } from "react";
import "./styles/GridBoard.css";

// dhravya.dev grid: 8 rows × 40 cols on desktop, less on mobile
const ROWS = 8;
const COLS = 40;

// Hover glow colors cycling through blue (sky) and green (emerald)
const GLOW_COLORS = ["#0ea5e9", "#10b981"];

const GridBoard = () => {
  // Map of "r-c" -> color string when glowing
  const [glowing, setGlowing] = useState<Record<string, string>>({});

  const handleEnter = useCallback((r: number, c: number) => {
    const key = `${r}-${c}`;
    const color = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];
    setGlowing((prev) => ({ ...prev, [key]: color }));

    // Fade back after 1.2s
    setTimeout(() => {
      setGlowing((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }, 1200);
  }, []);

  const rows = Array.from({ length: ROWS });
  const cols = Array.from({ length: COLS });

  return (
    <div className="grid-board-wrap">
      <div className="grid-board-inner">
        <div className="grid-board">
          {rows.map((_, r) => (
            <div className="grid-row" key={r}>
              {cols.map((_, c) => {
                const key = `${r}-${c}`;
                const glow = glowing[key];
                return (
                  <div className="grid-cell-wrap" key={c}>
                    <button
                      className="grid-cell-btn"
                      aria-label={`Button ${r}-${c}`}
                      style={{
                        backgroundColor: glow ?? "#1A1D2A",
                        boxShadow: glow ? `0 0 12px ${glow}` : "none",
                      }}
                      onMouseEnter={() => handleEnter(r, c)}
                    />
                    <div className="grid-cell-shadow" />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridBoard;
