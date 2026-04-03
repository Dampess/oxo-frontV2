"use client";

import { recommendPlan } from "@/lib/recommendPlan";
import { useEffect, useState } from "react";
import "../../styles/pages/plan-advisor.scss";

export default function PlanAdvisor() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"next" | "back">("next");

  const [userType, setUserType] = useState<"personal" | "business">("personal");
  const [devicesCount, setDevicesCount] = useState(1);
  const [needsPhishing, setNeedsPhishing] = useState(false);
  const [needsDeviceScan, setNeedsDeviceScan] = useState(false);
  const [maxBudget, setMaxBudget] = useState<number | null>(null);

  /* ===== SAVE LOCAL ===== */
  useEffect(() => {
    const saved = localStorage.getItem("advisor");
    if (saved) {
      const data = JSON.parse(saved);
      setUserType(data.userType || "personal");
      setDevicesCount(data.devicesCount || 1);
      setNeedsPhishing(data.needsPhishing || false);
      setNeedsDeviceScan(data.needsDeviceScan || false);
      setMaxBudget(data.maxBudget || null);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "advisor",
      JSON.stringify({
        userType,
        devicesCount,
        needsPhishing,
        needsDeviceScan,
        maxBudget,
      }),
    );
  }, [userType, devicesCount, needsPhishing, needsDeviceScan, maxBudget]);

  const next = () => {
    setDirection("next");
    setStep((s) => Math.min(s + 1, 4));
  };

  const back = () => {
    setDirection("back");
    setStep((s) => Math.max(s - 1, 0));
  };

  const plan = recommendPlan({
    userType,
    devicesCount,
    needsPhishing,
    needsDeviceScan,
    billing: "monthly",
    maxBudget,
  });

  /* ===== EXPLANATION TEXT ===== */
  const explanation: string[] = [];
  explanation.push(
    `You are a ${userType === "business" ? "business" : "personal"} user.`,
  );
  if (devicesCount > 19) {
    explanation.push(
      `You have ${devicesCount} devices or more, so we recommend a plan that can handle large-scale protection efficiently.`,
    );
  } else if (devicesCount > 5) {
    explanation.push(
      `You have ${devicesCount} devices, so we recommend a plan that covers multiple devices efficiently.`,
    );
  }
  if (needsPhishing)
    explanation.push(
      "Phishing protection is enabled to secure your emails and links.",
    );
  if (needsDeviceScan)
    explanation.push(
      "Device security scan is included to ensure all your devices are safe.",
    );
  if (maxBudget !== null)
    explanation.push(
      `We filtered plans to stay within your budget of $${maxBudget}/month.`,
    );

  return (
    <main className="advisor">
      <div className="quiz">
        {/* PROGRESS */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(step + 1) * 20}%` }}
          />
        </div>

        {/* STEP CONTAINER */}
        <div className={`step-container ${direction}`}>
          {/* STEP 0: User Type */}
          {step === 0 && (
            <div className="step">
              <h2>Are you a personal or business user?</h2>
              <div className="options">
                <div
                  className={`option-card ${userType === "personal" ? "active" : ""}`}
                  onClick={() => setUserType("personal")}
                >
                  👤 Personal
                </div>
                <div
                  className={`option-card ${userType === "business" ? "active" : ""}`}
                  onClick={() => setUserType("business")}
                >
                  🏢 Business
                </div>
              </div>
              <button className="primary" onClick={next}>
                Continue
              </button>
            </div>
          )}

          {/* STEP 1: Devices */}
          {step === 1 && (
            <div className="step">
              <h2>How many devices?</h2>
              <div className="range-wrapper">
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={devicesCount}
                  onChange={(e) => setDevicesCount(Number(e.target.value))}
                />
                <div className="range-value">{devicesCount}</div>
              </div>
              <button className="primary" onClick={next}>
                Continue
              </button>
            </div>
          )}

          {/* STEP 2: Protections */}
          {step === 2 && (
            <div className="step">
              <h2>Choose your protections</h2>
              <div className="options">
                <div
                  className={`option-card ${needsPhishing ? "active" : ""}`}
                  onClick={() => setNeedsPhishing(!needsPhishing)}
                >
                  🛡️ Phishing protection
                </div>
                <div
                  className={`option-card ${needsDeviceScan ? "active" : ""}`}
                  onClick={() => setNeedsDeviceScan(!needsDeviceScan)}
                >
                  💻 Device security scan
                </div>
              </div>
              <div className="actions">
                <button onClick={back}>Back</button>
                <button className="primary" onClick={next}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Budget */}
          {step === 3 && (
            <div className="step">
              <h2>Your monthly budget</h2>
              <input
                type="number"
                placeholder="Ex: 20"
                onChange={(e) => setMaxBudget(Number(e.target.value))}
              />
              <div className="actions">
                <button onClick={back}>Back</button>
                <button className="primary" onClick={next}>
                  See result
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Result */}
          {step === 4 && (
            <div className="result">
              <h2>✨ Your perfect plan</h2>
              <div className="card highlight">
                <div className="badge">Best match</div>
                <h3>{plan.name}</h3>
                <p className="price">
                  ${plan.priceMonthly}
                  {plan.priceMonthly !== 0 && <span>/month</span>}
                </p>
                <ul>
                  {plan.features.map((f: string, i: number) => (
                    <li key={i}>✔ {f}</li>
                  ))}
                </ul>
                <div className="explanation">
                  <h4>Why this plan?</h4>
                  <ul>
                    {explanation.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
                <a href={plan.cta} className="btn">
                  Get started
                </a>
              </div>
              <button onClick={() => setStep(0)}>Restart</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
