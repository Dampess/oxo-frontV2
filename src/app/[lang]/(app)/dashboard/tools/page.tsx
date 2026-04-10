"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import "@/app/styles/pages/freetoolspage.scss";

import { checkEmail } from "@/utils/tools/emailChecker";
import { checkLink } from "@/utils/tools/linkChecker";
import { testPassword, generatePassword } from "@/utils/tools/passwordTools";
import { analyzeScam } from "@/utils/tools/scamAnalyzer";

export default function ToolsPage() {
  const { t } = useTranslation();
  const [activeTool, setActiveTool] = useState<string | null>(null);

  // INPUTS
  const [emailInput, setEmailInput] = useState("");
  const [linkInput, setLinkInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [scamInput, setScamInput] = useState("");

  // RESULTS
  const [result, setResult] = useState<any>(null);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleEmailCheck = async () => {
    const res = await checkEmail(emailInput);
    setResult(res);
  };

  const handleLinkCheck = async () => {
    const res = await checkLink(linkInput);
    setResult(res);
  };

  const handlePasswordCheck = () => {
    const res = testPassword(passwordInput);
    setResult(res);
  };

  const handleScamCheck = () => {
    const res = analyzeScam(scamInput);
    setResult(res);
  };

  const handleGeneratePassword = () => {
    const pass = generatePassword(12);
    setGeneratedPassword(pass);
  };

  const switchTool = (tool: string) => {
    setActiveTool(activeTool === tool ? null : tool);
    setResult(null);
  };

  return (
    <div className="tools-page">
      <h1>{t("freeTools.title")}</h1>

      <div className="tool-buttons">
        <button onClick={() => switchTool("email")}>
          {t("freeTools.nav.email")}
        </button>
        <button onClick={() => switchTool("link")}>
          {t("freeTools.nav.link")}
        </button>
        <button onClick={() => switchTool("passwordGen")}>
          {t("freeTools.nav.passwordGenerator")}
        </button>
        <button onClick={() => switchTool("passwordCheck")}>
          {t("freeTools.nav.passwordChecker")}
        </button>
        <button onClick={() => switchTool("scam")}>
          {t("freeTools.nav.scam")}
        </button>
      </div>

      {activeTool === "email" && (
        <div className="tool-card">
          <h2>{t("freeTools.email.title")}</h2>

          <input
            type="email"
            placeholder={t("freeTools.email.placeholder")}
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />

          <button onClick={handleEmailCheck}>
            {t("freeTools.email.button")}
          </button>

          {result && <ResultBox result={result} />}
        </div>
      )}

      {activeTool === "link" && (
        <div className="tool-card">
          <h2>{t("freeTools.link.title")}</h2>

          <input
            type="text"
            placeholder={t("freeTools.link.placeholder")}
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
          />

          <button onClick={handleLinkCheck}>
            {t("freeTools.link.button")}
          </button>

          {result && <ResultBox result={result} />}
        </div>
      )}

      {activeTool === "passwordGen" && (
        <div className="tool-card">
          <h2>{t("freeTools.passwordGenerator.title")}</h2>

          <button onClick={handleGeneratePassword}>
            {t("freeTools.passwordGenerator.button")}
          </button>

          {generatedPassword && (
            <div className="result-box">
              <p>{generatedPassword}</p>
            </div>
          )}
        </div>
      )}

      {activeTool === "passwordCheck" && (
        <div className="tool-card">
          <h2>{t("freeTools.passwordChecker.title")}</h2>

          <input
            type="password"
            placeholder={t("freeTools.passwordChecker.placeholder")}
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />

          <button onClick={handlePasswordCheck}>
            {t("freeTools.passwordChecker.button")}
          </button>

          {result && <ResultBox result={result} />}
        </div>
      )}

      {activeTool === "scam" && (
        <div className="tool-card">
          <h2>{t("freeTools.scam.title")}</h2>

          <textarea
            placeholder={t("freeTools.scam.placeholder")}
            value={scamInput}
            onChange={(e) => setScamInput(e.target.value)}
          />

          <button onClick={handleScamCheck}>
            {t("freeTools.scam.button")}
          </button>

          {result && <ResultBox result={result} />}
        </div>
      )}
    </div>
  );

  function ResultBox({ result }: any) {
    return (
      <div className={`result-box ${result.status}`}>
        <p>
          <strong>{t("freeTools.result.score")}</strong> {result.score}
        </p>

        <ul>
          {result.messages.map((msg: string, i: number) => (
            <li key={i}>• {t(msg)}</li>
          ))}
        </ul>
      </div>
    );
  }
}
