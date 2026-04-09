// utils/tools/scamAnalyzer.ts

export function analyzeScam(text: string) {
  let score = 0;
  const messages: string[] = [];

  const lowerText = text.toLowerCase();

  // 1️⃣ MOTS CLÉS SUSPICIEUX
  const keywords = [
    "urgent",
    "free",
    "click here",
    "verify",
    "limited time",
    "act now",
    "winner",
    "congratulations",
    "prize",
    "bank",
    "password",
  ];
  keywords.forEach((word) => {
    if (lowerText.includes(word)) {
      score += 15;
      messages.push(`Keyword detected: "${word}"`);
    }
  });

  // 2️⃣ TEXTE EN MAJUSCULES EXCESSIF
  const uppercaseMatch = text.match(/[A-Z]{5,}/g);
  if (uppercaseMatch) {
    score += 15;
    messages.push("Excessive uppercase sequences");
  }

  // 3️⃣ PONCTUATION EXCESSIVE
  const exclamations = (text.match(/!{2,}/g) || []).length;
  if (exclamations > 0) {
    score += exclamations * 5;
    messages.push("Excessive exclamation marks");
  }

  // 4️⃣ LIENS DANS LE TEXTE
  const links = text.match(/https?:\/\/\S+/g);
  if (links) {
    score += 20;
    messages.push("Contains link(s)");
  }

  // 5️⃣ NOMBRES ET PROMESSES D’ARGENT
  if (/\$\d+/.test(text) || /\d+ dollars/.test(lowerText)) {
    score += 10;
    messages.push("Mentions money or prize");
  }

  // 6️⃣ RÉPÉTITIONS
  const repeatedWords = lowerText.match(/\b(\w+)\b(?=.*\b\1\b)/gi);
  if (repeatedWords && repeatedWords.length > 0) {
    score += 10;
    messages.push("Repeated words detected");
  }

  // 7️⃣ STATUS FINAL
  let status: "safe" | "warning" | "danger" = "safe";
  if (score >= 50) status = "danger";
  else if (score >= 25) status = "warning";

  return { score, status, messages };
}
