// utils/tools/linkChecker.ts

export function checkLink(url: string) {
  let score = 100;
  const messages: string[] = [];

  // ===================== 1. FORMAT =====================
  try {
    new URL(url); // valide le format URL
  } catch {
    return {
      score: 0,
      status: "danger",
      messages: ["Invalid URL format"],
    };
  }

  // ===================== 2. HTTPS CHECK =====================
  if (!url.startsWith("https://")) {
    score -= 40;
    messages.push("Not using HTTPS");
  }

  // ===================== 3. LENGTH & ENTROPY =====================
  if (url.length > 100) {
    score -= 20;
    messages.push("Suspiciously long URL");
  }

  // Calcul rapide d’entropie pour détecter URLs aléatoires / phishing
  const chars = new Set(url).size;
  const entropy = chars / url.length;
  if (entropy > 0.7) {
    score -= 15;
    messages.push("High entropy URL (looks suspicious)");
  }

  // ===================== 4. PHISHING KEYWORDS =====================
  const phishingKeywords = [
    "login",
    "verify",
    "secure",
    "update",
    "bank",
    "account",
    "signin",
    "confirm",
  ];
  if (phishingKeywords.some((kw) => url.toLowerCase().includes(kw))) {
    score -= 30;
    messages.push("Contains phishing keywords");
  }

  // ===================== 5. NUMERIC PATTERNS =====================
  // URLs avec beaucoup de chiffres souvent générés automatiquement
  const numericPattern = url.match(/[0-9]{3,}/g);
  if (numericPattern && numericPattern.length > 0) {
    score -= 20;
    messages.push("Strange numeric pattern");
  }

  // ===================== 6. LOCAL BLACKLIST =====================
  // Simule un contrôle contre des domaines connus malveillants
  const blacklistedDomains = [
    "spamdomain.com",
    "malware.net",
    "fake-bank.org",
  ];
  const domain = url.split("/")[2]?.toLowerCase();
  if (domain && blacklistedDomains.includes(domain)) {
    score = 0;
    messages.push("Domain blacklisted (malicious)");
  }

  // ===================== 7. FINAL SCORING =====================
  let status = "safe";
  if (score < 50) status = "danger";
  else if (score < 80) status = "warning";

  return { score, status, messages };
}