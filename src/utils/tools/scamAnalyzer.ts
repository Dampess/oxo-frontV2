// utils/tools/scamAnalyzer.ts

export function analyzeScam(text: string) {
  let score = 0;
  const messages: string[] = [];

  const lowerText = text.toLowerCase();

  // 1️⃣ MOTS CLÉS SUSPICIEUX
  const keywords = [
    { value: "urgent", key: "urgent" },
    { value: "free", key: "free" },
    { value: "click here", key: "clickHere" },
    { value: "verify", key: "verify" },
    { value: "limited time", key: "limitedTime" },
    { value: "act now", key: "actNow" },
    { value: "winner", key: "winner" },
    { value: "congratulations", key: "congratulations" },
    { value: "prize", key: "prize" },
    { value: "bank", key: "bank" },
    { value: "password", key: "password" },
  ];

  keywords.forEach((item) => {
    if (lowerText.includes(item.value)) {
      score += 15;
      messages.push(`tools.scamAnalyzer.messages.keyword.${item.key}`);
    }
  });

  // 2️⃣ TEXTE EN MAJUSCULES EXCESSIF
  const uppercaseMatch = text.match(/[A-Z]{5,}/g);
  if (uppercaseMatch) {
    score += 15;
    messages.push("toolsUtils.scamAnalyzer.messages.excessiveUppercase");
  }

  // 3️⃣ PONCTUATION EXCESSIVE
  const exclamations = (text.match(/!{2,}/g) || []).length;
  if (exclamations > 0) {
    score += exclamations * 5;
    messages.push("toolsUtils.scamAnalyzer.messages.excessiveExclamations");
  }

  // 4️⃣ LIENS DANS LE TEXTE
  const links = text.match(/https?:\/\/\S+/g);
  if (links) {
    score += 20;
    messages.push("toolsUtils.scamAnalyzer.messages.containsLinks");
  }

  // 5️⃣ NOMBRES ET PROMESSES D’ARGENT
  if (/\$\d+/.test(text) || /\d+ dollars/.test(lowerText)) {
    score += 10;
    messages.push("toolsUtils.scamAnalyzer.messages.moneyMention");
  }

  // 6️⃣ RÉPÉTITIONS
  const repeatedWords = lowerText.match(/\b(\w+)\b(?=.*\b\1\b)/gi);
  if (repeatedWords && repeatedWords.length > 0) {
    score += 10;
    messages.push("toolsUtils.scamAnalyzer.messages.repeatedWords");
  }

  // 7️⃣ STATUS FINAL
  let status: "safe" | "warning" | "danger" = "safe";
  if (score >= 50) status = "danger";
  else if (score >= 25) status = "warning";

  return { score, status, messages };
}
