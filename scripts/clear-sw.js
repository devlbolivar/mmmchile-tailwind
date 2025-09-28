// Script para limpiar Service Worker en desarrollo
// Ejecutar con: node scripts/clear-sw.js

const fs = require("fs");
const path = require("path");

console.log("🧹 Limpiando Service Worker para desarrollo...");

// Incrementar versión del cache
const swPath = path.join(__dirname, "..", "public", "sw.js");
let swContent = fs.readFileSync(swPath, "utf8");

// Generar nueva versión con timestamp
const newVersion = `v1.${Date.now()}`;
swContent = swContent.replace(
  /const CACHE_VERSION = "v[\d.]+";/,
  `const CACHE_VERSION = "${newVersion}";`
);

fs.writeFileSync(swPath, swContent);

console.log(`✅ Service Worker actualizado a versión ${newVersion}`);
console.log(
  "💡 Ahora recarga la página y desuscribe el Service Worker en DevTools"
);
console.log("🔧 O ejecuta: npm run clear-sw");
