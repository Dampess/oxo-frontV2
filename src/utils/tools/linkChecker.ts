// utils/tools/linkChecker.ts

export function checkLink(url: string) {
  let score = 100;
  const messages: string[] = [];

  // ===================== 1. FORMAT =====================
  try {
    new URL(url);
  } catch {
    return {
      score: 0,
      status: "danger",
      messages: ["toolsUtils.linkChecker.messages.invalidFormat"],
    };
  }

  // ===================== 2. HTTPS CHECK =====================
  if (!url.startsWith("https://")) {
    score -= 40;
    messages.push("toolsUtils.linkChecker.messages.noHttps");
  }

  // ===================== 3. LENGTH & ENTROPY =====================
  if (url.length > 100) {
    score -= 20;
    messages.push("toolsUtils.linkChecker.messages.longUrl");
  }

  const chars = new Set(url).size;
  const entropy = chars / url.length;
  if (entropy > 0.7) {
    score -= 15;
    messages.push("toolsUtils.linkChecker.messages.highEntropy");
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
    messages.push("toolsUtils.linkChecker.messages.phishingKeywords");
  }

  // ===================== 5. NUMERIC PATTERNS =====================
  const numericPattern = url.match(/[0-9]{3,}/g);
  if (numericPattern && numericPattern.length > 0) {
    score -= 20;
    messages.push("toolsUtils.linkChecker.messages.numericPattern");
  }

  // ===================== 6. LOCAL BLACKLIST =====================
  const blacklistedDomains = ["spamdomain.com", "malware.net", "fake-bank.org"];
  const domain = url.split("/")[2]?.toLowerCase();
  if (domain && blacklistedDomains.includes(domain)) {
    score = 0;
    messages.push("toolsUtils.linkChecker.messages.blacklisted");
  }

  // ===================== 7. FINAL SCORING =====================
  let status = "safe";
  if (score < 50) status = "danger";
  else if (score < 80) status = "warning";

  return { score, status, messages };
}
