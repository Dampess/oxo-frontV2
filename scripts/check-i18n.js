const fs = require("fs");
const path = require("path");

const basePath = path.join(__dirname, "..", "src", "locales");
// adapte ce chemin si tes fichiers sont ailleurs
const baseLocale = "en";
const targetLocales = ["fr", "de", "nl"];

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    console.error(`Erreur lecture JSON: ${filePath}`);
    throw error;
  }
}

function getLeafPaths(obj, prefix = "") {
  const paths = [];

  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      const nextPrefix = prefix ? `${prefix}.${index}` : `${index}`;
      if (item !== null && typeof item === "object") {
        paths.push(...getLeafPaths(item, nextPrefix));
      } else {
        paths.push(nextPrefix);
      }
    });
    return paths;
  }

  if (obj !== null && typeof obj === "object") {
    for (const key of Object.keys(obj)) {
      const nextPrefix = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];

      if (value !== null && typeof value === "object") {
        paths.push(...getLeafPaths(value, nextPrefix));
      } else {
        paths.push(nextPrefix);
      }
    }
    return paths;
  }

  if (prefix) {
    paths.push(prefix);
  }

  return paths;
}

function hasPath(obj, dottedPath) {
  const parts = dottedPath.split(".");
  let current = obj;

  for (const part of parts) {
    if (Array.isArray(current)) {
      const index = Number(part);
      if (Number.isNaN(index) || index < 0 || index >= current.length) {
        return false;
      }
      current = current[index];
      continue;
    }

    if (current === null || typeof current !== "object" || !(part in current)) {
      return false;
    }

    current = current[part];
  }

  return true;
}

function main() {
  const baseFile = path.join(basePath, `${baseLocale}.json`);
  const baseJson = readJson(baseFile);
  const baseKeys = getLeafPaths(baseJson);

  console.log(`\nBase locale: ${baseLocale}`);
  console.log(`Nombre total de clés: ${baseKeys.length}\n`);

  let hasMissing = false;

  for (const locale of targetLocales) {
    const targetFile = path.join(basePath, `${locale}.json`);
    const targetJson = readJson(targetFile);

    const missingKeys = baseKeys.filter((key) => !hasPath(targetJson, key));

    console.log(`=== ${locale}.json ===`);
    if (missingKeys.length === 0) {
      console.log("Aucune clé manquante ✅\n");
    } else {
      hasMissing = true;
      console.log(`${missingKeys.length} clé(s) manquante(s) ❌`);
      missingKeys.forEach((key) => console.log(`- ${key}`));
      console.log();
    }
  }

  process.exit(hasMissing ? 1 : 0);
}

main();
