"use client";

import { useState } from "react";
import "../../../styles/pages/freetoolspage.scss";

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [emailResult, setEmailResult] = useState("");
  const [linkResult, setLinkResult] = useState("");
  const [passwordResult, setPasswordResult] = useState("");
  const [passwordGenerated, setPasswordGenerated] = useState("");
  const [scamResult, setScamResult] = useState("");

  // ---- LOGIC ----
  const checkEmail = (email: string) => {
    if (!email.includes("@")) return "Email invalid ❌";
    return "Email looks good ✅";
  };

  const checkLink = (link: string) => {
    if (!link.startsWith("http")) return "Link invalid ❌";
    return "Link seems safe ✅";
  };

  const generatePassword = () => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let pass = "";
    for (let i = 0; i < 12; i++) {
      pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return pass;
  };

  const checkPasswordStrength = (password: string) => {
    if (password.length < 6) return "Weak ❌";
    if (password.length < 10) return "Medium ⚠️";
    return "Strong ✅";
  };

  const analyzeScam = (text: string) => {
    const suspicious = ["urgent", "bank", "password", "click here"];
    const found = suspicious.filter((word) =>
      text.toLowerCase().includes(word),
    );
    return found.length > 2 ? "Likely scam ⚠️" : "Looks safe ✅";
  };

  // ---- RENDER ----
  return (
    <div className="tools-page">
      <h1>Free Tools</h1>

      <div className="tool-buttons">
        <button
          onClick={() => setActiveTool(activeTool === "email" ? null : "email")}
        >
          Email Checker
        </button>
        <button
          onClick={() => setActiveTool(activeTool === "link" ? null : "link")}
        >
          Link Checker
        </button>
        <button
          onClick={() =>
            setActiveTool(activeTool === "passwordGen" ? null : "passwordGen")
          }
        >
          Password Generator
        </button>
        <button
          onClick={() =>
            setActiveTool(
              activeTool === "passwordCheck" ? null : "passwordCheck",
            )
          }
        >
          Password Checker
        </button>
        <button
          onClick={() => setActiveTool(activeTool === "scam" ? null : "scam")}
        >
          Scam Analyzer
        </button>
      </div>

      {activeTool === "email" && (
        <div className="tool-card">
          <h2>Email Checker</h2>
          <input type="email" placeholder="Enter email" id="email-input" />
          <button
            onClick={() =>
              setEmailResult(
                checkEmail(
                  (document.getElementById("email-input") as HTMLInputElement)
                    .value,
                ),
              )
            }
          >
            Check
          </button>
          {emailResult && <p>{emailResult}</p>}
        </div>
      )}

      {activeTool === "link" && (
        <div className="tool-card">
          <h2>Link Checker</h2>
          <input type="text" placeholder="Enter URL" id="link-input" />
          <button
            onClick={() =>
              setLinkResult(
                checkLink(
                  (document.getElementById("link-input") as HTMLInputElement)
                    .value,
                ),
              )
            }
          >
            Check
          </button>
          {linkResult && <p>{linkResult}</p>}
        </div>
      )}

      {activeTool === "passwordGen" && (
        <div className="tool-card">
          <h2>Password Generator</h2>
          <button onClick={() => setPasswordGenerated(generatePassword())}>
            Generate Password
          </button>
          {passwordGenerated && <p>{passwordGenerated}</p>}
        </div>
      )}

      {activeTool === "passwordCheck" && (
        <div className="tool-card">
          <h2>Password Checker</h2>
          <input
            type="password"
            placeholder="Enter password"
            id="pass-check-input"
          />
          <button
            onClick={() =>
              setPasswordResult(
                checkPasswordStrength(
                  (
                    document.getElementById(
                      "pass-check-input",
                    ) as HTMLInputElement
                  ).value,
                ),
              )
            }
          >
            Check Strength
          </button>
          {passwordResult && <p>{passwordResult}</p>}
        </div>
      )}

      {activeTool === "scam" && (
        <div className="tool-card">
          <h2>Scam Analyzer</h2>
          <textarea placeholder="Paste text here" id="scam-input" />
          <button
            onClick={() =>
              setScamResult(
                analyzeScam(
                  (document.getElementById("scam-input") as HTMLTextAreaElement)
                    .value,
                ),
              )
            }
          >
            Analyze
          </button>
          {scamResult && <p>{scamResult}</p>}
        </div>
      )}
    </div>
  );
}
