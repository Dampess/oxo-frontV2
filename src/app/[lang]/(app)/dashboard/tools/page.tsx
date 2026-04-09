"use client";

import { useState } from "react";
import "@/app/styles/pages/freetoolspage.scss";

import { checkEmail } from "@/utils/tools/emailChecker";
import { checkLink } from "@/utils/tools/linkChecker";
import { testPassword, generatePassword } from "@/utils/tools/passwordTools";
import { analyzeScam } from "@/utils/tools/scamAnalyzer";

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  // INPUTS
  const [emailInput, setEmailInput] = useState("");
  const [linkInput, setLinkInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [scamInput, setScamInput] = useState("");

  // RESULTS
  const [result, setResult] = useState<any>(null);
  const [generatedPassword, setGeneratedPassword] = useState("");

  // ===== HANDLERS =====

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

  // RESET result quand on change d'outil
  const switchTool = (tool: string) => {
    setActiveTool(activeTool === tool ? null : tool);
    setResult(null);
  };

  return (
    <div className="tools-page">
      <h1>Free Tools</h1>

      {/* NAV */}
      <div className="tool-buttons">
        <button onClick={() => switchTool("email")}>Email Checker</button>
        <button onClick={() => switchTool("link")}>Link Checker</button>
        <button onClick={() => switchTool("passwordGen")}>
          Password Generator
        </button>
        <button onClick={() => switchTool("passwordCheck")}>
          Password Checker
        </button>
        <button onClick={() => switchTool("scam")}>Scam Analyzer</button>
      </div>

      {/* EMAIL */}
      {activeTool === "email" && (
        <div className="tool-card">
          <h2>Email Checker</h2>

          <input
            type="email"
            placeholder="Enter email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />

          <button onClick={handleEmailCheck}>Check</button>

          {result && <ResultBox result={result} />}
        </div>
      )}

      {/* LINK */}
      {activeTool === "link" && (
        <div className="tool-card">
          <h2>Link Checker</h2>

          <input
            type="text"
            placeholder="Enter URL"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
          />

          <button onClick={handleLinkCheck}>Check</button>

          {result && <ResultBox result={result} />}
        </div>
      )}

      {/* PASSWORD GENERATOR */}
      {activeTool === "passwordGen" && (
        <div className="tool-card">
          <h2>Password Generator</h2>

          <button onClick={handleGeneratePassword}>Generate Password</button>

          {generatedPassword && (
            <div className="result-box">
              <p>{generatedPassword}</p>
            </div>
          )}
        </div>
      )}

      {/* PASSWORD CHECK */}
      {activeTool === "passwordCheck" && (
        <div className="tool-card">
          <h2>Password Checker</h2>

          <input
            type="password"
            placeholder="Enter password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />

          <button onClick={handlePasswordCheck}>Check Strength</button>

          {result && <ResultBox result={result} />}
        </div>
      )}

      {/* SCAM */}
      {activeTool === "scam" && (
        <div className="tool-card">
          <h2>Scam Analyzer</h2>

          <textarea
            placeholder="Paste text here"
            value={scamInput}
            onChange={(e) => setScamInput(e.target.value)}
          />

          <button onClick={handleScamCheck}>Analyze</button>

          {result && <ResultBox result={result} />}
        </div>
      )}
    </div>
  );

  function ResultBox({ result }: any) {
    return (
      <div className={`result-box ${result.status}`}>
        <p>
          <strong>Score:</strong> {result.score}
        </p>

        <ul>
          {result.messages.map((msg: string, i: number) => (
            <li key={i}>• {msg}</li>
          ))}
        </ul>
      </div>
    );
  }
}
