const fs = require("fs");
const path = require("path");

const basePath = path.join(__dirname, "..", "src", "locales");
// adapte si besoin : path.join(__dirname, "..", "locales")

const baseLocale = "en";
const targetLocales = ["fr", "de", "nl", "es", "it"];

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    console.error(`Erreur lecture JSON: ${filePath}`);
    throw error;
  }
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function syncObject(baseObj, targetObj, currentPath = "") {
  let addedCount = 0;

  if (Array.isArray(baseObj)) {
    if (!Array.isArray(targetObj)) {
      return {
        value: deepClone(baseObj),
        addedCount: 1,
      };
    }

    const result = [...targetObj];

    for (let i = 0; i < baseObj.length; i++) {
      const nextPath = currentPath ? `${currentPath}.${i}` : `${i}`;

      if (i >= result.length) {
        result[i] = deepClone(baseObj[i]);
        addedCount += 1;
        console.log(`+ Ajout: ${nextPath}`);
        continue;
      }

      if (
        baseObj[i] !== null &&
        typeof baseObj[i] === "object" &&
        result[i] !== null &&
        typeof result[i] === "object"
      ) {
        const synced = syncObject(baseObj[i], result[i], nextPath);
        result[i] = synced.value;
        addedCount += synced.addedCount;
      }
    }

    return { value: result, addedCount };
  }

  if (baseObj !== null && typeof baseObj === "object") {
    const result =
      targetObj !== null &&
      typeof targetObj === "object" &&
      !Array.isArray(targetObj)
        ? { ...targetObj }
        : {};

    for (const key of Object.keys(baseObj)) {
      const nextPath = currentPath ? `${currentPath}.${key}` : key;

      if (!(key in result)) {
        result[key] = deepClone(baseObj[key]);
        addedCount += 1;
        console.log(`+ Ajout: ${nextPath}`);
        continue;
      }

      if (
        baseObj[key] !== null &&
        typeof baseObj[key] === "object" &&
        result[key] !== null &&
        typeof result[key] === "object"
      ) {
        const synced = syncObject(baseObj[key], result[key], nextPath);
        result[key] = synced.value;
        addedCount += synced.addedCount;
      }
    }

    return { value: result, addedCount };
  }

  return {
    value: targetObj,
    addedCount: 0,
  };
}

function main() {
  const baseFile = path.join(basePath, `${baseLocale}.json`);
  const baseJson = readJson(baseFile);

  for (const locale of targetLocales) {
    const targetFile = path.join(basePath, `${locale}.json`);
    const targetJson = readJson(targetFile);

    console.log(`\n=== Sync ${locale}.json ===`);

    const synced = syncObject(baseJson, targetJson);
    writeJson(targetFile, synced.value);

    if (synced.addedCount === 0) {
      console.log("Aucune clé ajoutée ✅");
    } else {
      console.log(`${synced.addedCount} clé(s) ajoutée(s) ✅`);
    }
  }

  console.log("\nSync terminée.");
}

main();
