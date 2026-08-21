import React, { useState } from "react";
import "./styles.css";

// --- DATASET: 7 STEPS WITH 3 EXAMPLES EACH ---
const STEPS_DATA = [
  {
    id: 1,
    title: "MINOR DESIGN CHANGE",
    examples: [
      {
        id: "ex-1",
        title: "1. DESIGN SLIGHTLY CHANGE: Example 1",
        partName: "TOE OVERLAY",
        changeText: "CHANGE: EXPANDED PATTERN",
        currentPartImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/toe-overlay-design-change-example-1-current.png",
        optimizedPartImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/toe-overlay-design-change-example-1-optimised.png",
        currentNestingImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/design-change-example-1-current.png",
        optimizedNestingImg: "https://raw.githubusercontent.com/kyrastratford/On_3D-Assets/main/design-change-example-1-optimised.png",
        currentP: "P: 61.46%",
        currentY: "Y: 0.049",
        optimizedP: "P: 61.59%",
        optimizedY: "Y: 0.044",
        metrics: {
          efficiency: "+0.13%",
          yieldVal: "-0.005 YD",
          costImpact: "-$0.065/pair",
        },
      },
      {
        id: "ex-2",
        title: "1. DESIGN SLIGHTLY CHANGE: Example 2",
        partName: "VAMP DECORATION",
        changeText: "CHANGE: ADJUSTED PATTERN",
        currentPartImg: "",
        optimizedPartImg: "",
        currentNestingImg: "",
        optimizedNestingImg: "",
        currentP: "P: 42.59%",
        currentY: "Y: 0.013/4pcs",
        optimizedP: "P: 55.54%",
        optimizedY: "Y: 0.0094/4pcs",
        metrics: {
          efficiency: "+12.95%",
          yieldVal: "-0.0036 YD",
          costImpact: "-$0.04/pair",
        },
      },
      {
        id: "ex-3",
        title: "1. DESIGN SLIGHTLY CHANGE: Example 3",
        partName: "HEEL MUDGUARD",
        changeText: "CHANGE: ADJUSTED PATTERN",
        currentPartImg: "",
        optimizedPartImg: "",
        currentNestingImg: "",
        optimizedNestingImg: "",
        currentP: "P: 61.87%",
        currentY: "Y: 0.021",
        optimizedP: "P: 66.41%",
        optimizedY: "Y: 0.018",
        metrics: {
          efficiency: "+4.54%",
          yieldVal: "-0.003 YD",
          costImpact: "-$0.054/pair",
        },
      },
    ],
  },
  {
    id: 2,
    title: "PATTERN SPLITTING",
    examples: Array.from({ length: 3 }, (_, idx) => ({
      id: `ex-${idx + 1}`,
      title: `2. PATTERN SPLITTING: Example ${idx + 1}`,
      partName: "QUARTER PANEL",
      changeText: "CHANGE: SPLIT INTO TWO PIECES",
      currentPartImg: "",
      optimizedPartImg: "",
      currentNestingImg: "",
      optimizedNestingImg: "",
      currentP: "P: 68.20%",
      currentY: "Y: 0.058",
      optimizedP: "P: 74.45%",
      optimizedY: "Y: 0.050",
      metrics: {
        efficiency: "+6.25%",
        yieldVal: "-0.008 YD",
        costImpact: "-$0.110/pair",
      },
    })),
  },
  {
    id: 3,
    title: "PATTERN COMBINATION",
    examples: Array.from({ length: 3 }, (_, idx) => ({
      id: `ex-${idx + 1}`,
      title: `3. PATTERN COMBINATION: Example ${idx + 1}`,
      partName: "HEEL COUNTER & LINING",
      changeText: "CHANGE: MERGED SINGLE PIECE",
      currentPartImg: "",
      optimizedPartImg: "",
      currentNestingImg: "",
      optimizedNestingImg: "",
      currentP: "P: 70.15%",
      currentY: "Y: 0.044",
      optimizedP: "P: 75.80%",
      optimizedY: "Y: 0.039",
      metrics: {
        efficiency: "+5.65%",
        yieldVal: "-0.005 YD",
        costImpact: "-$0.095/pair",
      },
    })),
  },
  {
    id: 4,
    title: "PATTERN MODIFICATION",
    examples: Array.from({ length: 3 }, (_, idx) => ({
      id: `ex-${idx + 1}`,
      title: `4. PATTERN MODIFICATION: Example ${idx + 1}`,
      partName: "TONGUE REINFORCEMENT",
      changeText: "CHANGE: STRAIGHTENED MARGINS",
      currentPartImg: "",
      optimizedPartImg: "",
      currentNestingImg: "",
      optimizedNestingImg: "",
      currentP: "P: 63.40%",
      currentY: "Y: 0.061",
      optimizedP: "P: 68.90%",
      optimizedY: "Y: 0.054",
      metrics: {
        efficiency: "+5.50%",
        yieldVal: "-0.007 YD",
        costImpact: "-$0.088/pair",
      },
    })),
  },
  {
    id: 5,
    title: "PATTERN ROTATION",
    examples: Array.from({ length: 3 }, (_, idx) => ({
      id: `ex-${idx + 1}`,
      title: `5. PATTERN ROTATION: Example ${idx + 1}`,
      partName: "MUDGUARD",
      changeText: "CHANGE: 180° TESSELLATED FLIP",
      currentPartImg: "",
      optimizedPartImg: "",
      currentNestingImg: "",
      optimizedNestingImg: "",
      currentP: "P: 75.10%",
      currentY: "Y: 0.036",
      optimizedP: "P: 81.30%",
      optimizedY: "Y: 0.030",
      metrics: {
        efficiency: "+6.20%",
        yieldVal: "-0.006 YD",
        costImpact: "-$0.104/pair",
      },
    })),
  },
  {
    id: 6,
    title: "PATTERN INTERLOCKING, NESTING OPTIMIZATION",
    examples: Array.from({ length: 3 }, (_, idx) => ({
      id: `ex-${idx + 1}`,
      title: `6. PATTERN INTERLOCKING: Example ${idx + 1}`,
      partName: "FULL UPPER TESSELLATION",
      changeText: "CHANGE: INTERLOCKING GEOMETRY",
      currentPartImg: "",
      optimizedPartImg: "",
      currentNestingImg: "",
      optimizedNestingImg: "",
      currentP: "P: 78.63%",
      currentY: "Y: 0.049",
      optimizedP: "P: 86.45%",
      optimizedY: "Y: 0.041",
      metrics: {
        efficiency: "+7.82%",
        yieldVal: "-0.008 YD",
        costImpact: "-$0.142/pair",
      },
    })),
  },
  {
    id: 7,
    title: "MATERIAL WIDTH MODIFICATION",
    examples: Array.from({ length: 3 }, (_, idx) => ({
      id: `ex-${idx + 1}`,
      title: `7. MATERIAL WIDTH MODIFICATION: Example ${idx + 1}`,
      partName: "52\" TO 54\" ROLL SHIFT",
      changeText: "CHANGE: OPTIMIZED ROLL SPAN",
      currentPartImg: "",
      optimizedPartImg: "",
      currentNestingImg: "",
      optimizedNestingImg: "",
      currentP: "P: 79.20%",
      currentY: "Y: 0.042",
      optimizedP: "P: 87.10%",
      optimizedY: "Y: 0.035",
      metrics: {
        efficiency: "+7.90%",
        yieldVal: "-0.007 YD",
        costImpact: "-$0.155/pair",
      },
    })),
  },
];

// --- IMAGE PLACEHOLDER COMPONENT ---
const ImageBox = ({ src, alt, label }) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="img-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span>{label}</span>
      </div>
    );
  }

  return <img src={src} alt={alt} onError={() => setError(true)} className="img-media" />;
};

export default function App() {
  const [activeStepId, setActiveStepId] = useState(1);
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);

  const currentStep = STEPS_DATA.find((step) => step.id === activeStepId);
  const currentExample = currentStep.examples[activeExampleIndex];

  const handleStepChange = (stepId) => {
    setActiveStepId(stepId);
    setActiveExampleIndex(0); // Reset to Example 1 on step switch
  };

  return (
    <div className="app-container">
      <div className="folder-container">
        {/* SIDEBAR NAVIGATION */}
        <div className="folder-sidebar">
          <h2 className="sidebar-title">
            7 STEPS FOR PATTERN EFFICIENCY IMPROVEMENT
          </h2>
          <div className="tab-list">
            {STEPS_DATA.map((step) => {
              const isActive = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => handleStepChange(step.id)}
                  className={`tab-button ${isActive ? "active" : ""}`}
                >
                  <span className="step-number">{step.id}</span>
                  <span className="step-text">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="folder-content">
          {/* HEADER & SUB-TABS */}
          <div className="content-header">
            <h1 className="content-title">{currentExample.title}</h1>
            <div className="example-tabs">
              {currentStep.examples.map((ex, idx) => (
                <button
                  key={ex.id}
                  onClick={() => setActiveExampleIndex(idx)}
                  className={`example-btn ${
                    activeExampleIndex === idx ? "active" : ""
                  }`}
                >
                  Example {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* EXAMPLE COMPARISON BOARD */}
          <div className="comparison-board">
            {/* ROW 1: PART DRAFT COMPARISON */}
            <div className="comparison-row row-parts">
              <div className="part-col">
                <span className="part-name-tag">{currentExample.partName}</span>
                <div className="image-frame">
                  <ImageBox
                    src={currentExample.currentPartImg}
                    alt="Current Pattern"
                    label="Current Part Draft"
                  />
                </div>
              </div>

              <div className="arrow-col">
                <span className="change-badge">{currentExample.changeText}</span>
                <div className="arrow-icon">➔</div>
              </div>

              <div className="part-col">
                <div className="image-frame">
                  <ImageBox
                    src={currentExample.optimizedPartImg}
                    alt="Optimization Pattern"
                    label="Optimized Part Draft"
                  />
                </div>
              </div>
            </div>

            {/* ROW 2: NESTING LAYOUT COMPARISON */}
            <div className="comparison-row row-nesting">
              <div className="nesting-col">
                <span className="pattern-label-sub">Current Pattern</span>
                <div className="image-frame nesting-frame">
                  <ImageBox
                    src={currentExample.currentNestingImg}
                    alt="Current Nesting"
                    label="Current Nesting Layout"
                  />
                  <div className="metrics-overlay left">
                    <span>{currentExample.currentP}</span>
                    <span>{currentExample.currentY}</span>
                  </div>
                </div>
              </div>

              <div className="arrow-col">
                <div className="arrow-icon green">➔</div>
              </div>

              <div className="nesting-col">
                <span className="pattern-label-sub">Optimization Pattern</span>
                <div className="image-frame nesting-frame">
                  <ImageBox
                    src={currentExample.optimizedNestingImg}
                    alt="Optimized Nesting"
                    label="Optimized Nesting Layout"
                  />
                  <div className="metrics-overlay right">
                    <span>{currentExample.optimizedP}</span>
                    <span>{currentExample.optimizedY}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SUMMARY METRICS FOOTER CARD */}
            <div className="metrics-summary-card">
              <div className="metric-item">
                <span className="metric-label">Pattern Efficiency:</span>
                <span className="metric-value highlight">
                  {currentExample.metrics.efficiency}
                </span>
              </div>
              <div className="metric-divider">|</div>
              <div className="metric-item">
                <span className="metric-label">Yield:</span>
                <span className="metric-value">
                  {currentExample.metrics.yieldVal}
                </span>
              </div>
              <div className="metric-divider">|</div>
              <div className="metric-item">
                <span className="metric-label">Cost Impact:</span>
                <span className="metric-value">
                  {currentExample.metrics.costImpact}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}