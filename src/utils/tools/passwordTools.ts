// utils/tools/passwordTools.ts

// ===================== PASSWORD CHECKER =====================
export function testPassword(password: string) {
  let score = 0;
  const messages: string[] = [];

  // 1️⃣ LONGUEUR
  if (password.length >= 12) score += 25;
  else messages.push("toolsUtils.passwordTools.messages.tooShort");

  // 2️⃣ COMPLEXITÉ
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  if (hasUpper) score += 15;
  else messages.push("toolsUtils.passwordTools.messages.addUppercase");

  if (hasLower) score += 15;
  else messages.push("toolsUtils.passwordTools.messages.addLowercase");

  if (hasNumber) score += 15;
  else messages.push("toolsUtils.passwordTools.messages.addNumbers");

  if (hasSymbol) score += 20;
  else messages.push("toolsUtils.passwordTools.messages.addSymbols");

  // 3️⃣ PATRONS / SEQUENCES
  if (/(123|abc|qwe|password)/i.test(password)) {
    score -= 30;
    messages.push("toolsUtils.passwordTools.messages.avoidPatterns");
  }

  // 4️⃣ ENTROPIE SIMPLE
  const uniqueChars = new Set(password).size;
  const entropy = (uniqueChars / password.length) * 100;
  if (entropy < 50) {
    score -= 10;
    messages.push("toolsUtils.passwordTools.messages.lowEntropy");
  }

  // 5️⃣ BLACKLIST
  const blacklist = ["123456", "password", "qwerty", "letmein"];
  if (blacklist.includes(password.toLowerCase())) {
    return {
      score: 0,
      status: "danger",
      messages: ["toolsUtils.passwordTools.messages.commonPassword"],
    };
  }

  // 6️⃣ STATUS
  let status = "weak";
  if (score >= 80) status = "strong";
  else if (score >= 50) status = "medium";

  return { score, status, messages };
}

// ===================== PASSWORD GENERATOR =====================
export function generatePassword(length = 16) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const allChars = lower + upper + numbers + symbols;

  let password = "";

  password += lower[Math.floor(Math.random() * lower.length)];
  password += upper[Math.floor(Math.random() * upper.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  const remainingLength = length - 4;
  const array = new Uint32Array(remainingLength);
  crypto.getRandomValues(array);
  for (let i = 0; i < remainingLength; i++) {
    password += allChars[array[i] % allChars.length];
  }

  password = password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");

  return password;
}
