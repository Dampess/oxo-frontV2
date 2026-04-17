"use client";

import "@/app/styles/pages/plan-advisor.scss";
import { useTranslation } from "@/hooks/useTranslation";
import { recommendPlan } from "@/lib/recommendPlan";

import { useEffect, useState } from "react";

type Props = {
  lang: string;
};

export default function PlanAdvisorPageView({ lang }: Props) {
  const { t } = useTranslation(lang);

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"next" | "back">("next");

  const [userType, setUserType] = useState<"personal" | "business">("personal");
  const [devicesCount, setDevicesCount] = useState(1);

  const [needsWeb, setNeedsWeb] = useState(false);
  const [needsCommunications, setNeedsCommunications] = useState(false);
  const [needsTracking, setNeedsTracking] = useState(false);
  const [needsScore, setNeedsScore] = useState(false);

  const [maxBudget, setMaxBudget] = useState<number | null>(null);

  /* ===== SAVE LOCAL ===== */
  useEffect(() => {
    const saved = localStorage.getItem("advisor");
    if (!saved) return;

    try {
      const data = JSON.parse(saved);

      setUserType(data.userType || "personal");
      setDevicesCount(data.devicesCount || 1);
      setNeedsWeb(data.needsWeb || false);
      setNeedsCommunications(data.needsCommunications || false);
      setNeedsTracking(data.needsTracking || false);
      setNeedsScore(data.needsScore || false);
      setMaxBudget(
        typeof data.maxBudget === "number" && !Number.isNaN(data.maxBudget)
          ? data.maxBudget
          : null,
      );
    } catch {
      localStorage.removeItem("advisor");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "advisor",
      JSON.stringify({
        userType,
        devicesCount,
        needsWeb,
        needsCommunications,
        needsTracking,
        needsScore,
        maxBudget,
      }),
    );
  }, [
    userType,
    devicesCount,
    needsWeb,
    needsCommunications,
    needsTracking,
    needsScore,
    maxBudget,
  ]);

  const next = () => {
    setDirection("next");
    setStep((s) => Math.min(s + 1, 4));
  };

  const back = () => {
    setDirection("back");
    setStep((s) => Math.max(s - 1, 0));
  };

  const restart = () => {
    setDirection("back");
    setStep(0);
  };

  const plan = recommendPlan({
    userType,
    devicesCount,
    needsWeb,
    needsCommunications,
    needsTracking,
    needsScore,
    billing: "monthly",
    maxBudget,
  });

  /* ===== EXPLANATION TEXT ===== */
  const explanation: string[] = [];

  explanation.push(
    t(
      userType === "business"
        ? "planAdvisor.result.explanations.userTypeBusiness"
        : "planAdvisor.result.explanations.userTypePersonal",
    ),
  );

  if (devicesCount > 19) {
    explanation.push(t("planAdvisor.result.explanations.devicesLarge"));
  } else if (devicesCount > 5) {
    explanation.push(t("planAdvisor.result.explanations.devicesMedium"));
  }

  if (needsWeb) {
    explanation.push(t("planAdvisor.result.explanations.web"));
  }

  if (needsCommunications) {
    explanation.push(t("planAdvisor.result.explanations.communications"));
  }

  if (needsTracking) {
    explanation.push(t("planAdvisor.result.explanations.tracking"));
  }

  if (needsScore) {
    explanation.push(t("planAdvisor.result.explanations.score"));
  }

  if (maxBudget !== null) {
    explanation.push(t("planAdvisor.result.explanations.budget"));
  }

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
              <h2>{t("planAdvisor.steps.userType.title")}</h2>

              <div className="options">
                <div
                  className={`option-card ${userType === "personal" ? "active" : ""}`}
                  onClick={() => setUserType("personal")}
                >
                  {t("planAdvisor.steps.userType.options.personal")}
                </div>

                <div
                  className={`option-card ${userType === "business" ? "active" : ""}`}
                  onClick={() => setUserType("business")}
                >
                  {t("planAdvisor.steps.userType.options.business")}
                </div>
              </div>

              <button className="primary" onClick={next}>
                {t("planAdvisor.actions.continue")}
              </button>
            </div>
          )}

          {/* STEP 1: Devices */}
          {step === 1 && (
            <div className="step">
              <h2>{t("planAdvisor.steps.devices.title")}</h2>

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

              <div className="actions">
                <button onClick={back}>{t("planAdvisor.actions.back")}</button>
                <button className="primary" onClick={next}>
                  {t("planAdvisor.actions.continue")}
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Protections */}
          {step === 2 && (
            <div className="step">
              <h2>{t("planAdvisor.steps.protections.title")}</h2>

              <div className="options">
                <div
                  className={`option-card ${needsWeb ? "active" : ""}`}
                  onClick={() => setNeedsWeb((prev) => !prev)}
                >
                  {t("planAdvisor.steps.protections.options.web")}
                </div>

                <div
                  className={`option-card ${needsCommunications ? "active" : ""}`}
                  onClick={() => setNeedsCommunications((prev) => !prev)}
                >
                  {t("planAdvisor.steps.protections.options.communications")}
                </div>

                <div
                  className={`option-card ${needsTracking ? "active" : ""}`}
                  onClick={() => setNeedsTracking((prev) => !prev)}
                >
                  {t("planAdvisor.steps.protections.options.tracking")}
                </div>

                <div
                  className={`option-card ${needsScore ? "active" : ""}`}
                  onClick={() => setNeedsScore((prev) => !prev)}
                >
                  {t("planAdvisor.steps.protections.options.score")}
                </div>
              </div>

              <div className="actions">
                <button onClick={back}>{t("planAdvisor.actions.back")}</button>
                <button className="primary" onClick={next}>
                  {t("planAdvisor.actions.continue")}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Budget */}
          {step === 3 && (
            <div className="step">
              <h2>{t("planAdvisor.steps.budget.title")}</h2>

              <input
                type="number"
                min={0}
                placeholder={t("planAdvisor.steps.budget.placeholder")}
                value={maxBudget ?? ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setMaxBudget(value === "" ? null : Number(value));
                }}
              />

              <div className="actions">
                <button onClick={back}>{t("planAdvisor.actions.back")}</button>
                <button className="primary" onClick={next}>
                  {t("planAdvisor.actions.seeResult")}
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Result */}
          {step === 4 && (
            <div className="result">
              <h2>{t("planAdvisor.result.title")}</h2>

              <div className="card highlight">
                <div className="badge">{t("planAdvisor.result.badge")}</div>

                <h3>{t(plan.name)}</h3>

                <p className="price">
                  €{plan.priceMonthly}
                  {plan.priceMonthly !== 0 && (
                    <span>/{t("planAdvisor.result.monthUnit")}</span>
                  )}
                </p>

                <ul>
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i}>✔ {t(feature)}</li>
                  ))}
                </ul>

                <div className="explanation">
                  <h4>{t("planAdvisor.result.whyTitle")}</h4>
                  <ul>
                    {explanation.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>

                <a href={plan.cta} className="btn">
                  {t("planAdvisor.result.cta")}
                </a>
              </div>

              <button onClick={restart}>
                {t("planAdvisor.actions.restart")}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
