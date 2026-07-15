// Node.js script to automate building the schooliq-demo PWA and deploying it to the Next.js public assets folder.
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const demoDir = path.join(rootDir, "schooliq-demo");
const publicDest = path.join(rootDir, "public", "demos", "schooliq");

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log("🚀 Starting SchoolIQ Demo Build Pipeline...");

try {
  // 1. Install dependencies inside schooliq-demo
  console.log("📦 Installing dependencies in schooliq-demo...");
  execSync("npm install", { cwd: demoDir, stdio: "inherit" });

  // 2. Build the Vite PWA
  console.log("🏗️ Building the Vite PWA application...");
  execSync("npm run build -- --base=/demos/schooliq/", { cwd: demoDir, stdio: "inherit" });

  // 3. Clear existing destination if exists
  if (fs.existsSync(publicDest)) {
    console.log("🧹 Cleaning up old public assets...");
    fs.rmSync(publicDest, { recursive: true, force: true });
  }

  // 4. Copy the dist directory contents to Next.js public folder
  console.log(`📂 Deploying built assets to: ${publicDest}`);
  const distDir = path.join(demoDir, "dist");
  copyDirSync(distDir, publicDest);

  console.log("✨ SchoolIQ PWA successfully built and deployed to public/demos/schooliq/!");
} catch (error) {
  console.error("❌ Build Pipeline Failed:", error.message);
  process.exit(1);
}
