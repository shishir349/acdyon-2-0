// Generates DBA/PhD and honorary-recognition brochures straight from lib/data/universities.ts
// (no invented content — same facts shown on the live pages). Re-run after editing that file.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEGREE_DIR = path.join(__dirname, "..", "public", "brochures", "degrees");
const HONORARY_DIR = path.join(__dirname, "..", "public", "brochures", "honorary");

function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

const baseStyle = `
  :root { --navy: #0f172a; --royal: #1E40FF; --gold: #D4AF37; --slate: #475569; --border: #E2E8F0; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: -apple-system, "Segoe UI", Inter, Helvetica, Arial, sans-serif; color: var(--navy); background: #fff; line-height: 1.5; }
  .hero { background: var(--navy); color: #fff; padding: 56px 48px 44px; }
  .eyebrow { color: var(--gold); font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 12px; }
  h1 { font-size: 34px; font-weight: 700; margin: 0 0 14px; line-height: 1.15; }
  .hero-desc { font-size: 15px; color: #CBD5E1; max-width: 640px; margin: 0; }
  .facts-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 28px; }
  .fact { border: 1px solid #334155; border-radius: 8px; padding: 12px 14px; }
  .fact-label { font-size: 11px; color: #94A3B8; margin: 0 0 4px; }
  .fact-value { font-size: 15px; color: #fff; font-weight: 700; margin: 0; }
  .body { padding: 48px; max-width: 900px; margin: 0 auto; }
  h2 { font-size: 21px; font-weight: 700; color: var(--navy); margin: 0 0 6px; }
  .section-desc { font-size: 14px; color: var(--slate); margin: 0 0 16px; max-width: 760px; }
  .pill-row { display: flex; flex-wrap: wrap; gap: 8px; }
  .pill { font-size: 13px; color: var(--navy); background: #F8FAFC; border-radius: 14px; padding: 7px 14px; border: 1px solid var(--border); }
  .check-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
  .check-list li { display: flex; gap: 10px; font-size: 14px; color: var(--slate); align-items: flex-start; }
  .check-list li::before { content: "✓"; color: var(--royal); font-weight: 700; flex-shrink: 0; }
  .cert-row { display: flex; gap: 24px; align-items: center; margin-top: 8px; }
  .cert-image { width: 200px; height: auto; border-radius: 8px; border: 1px solid var(--border); }
  .cert-text { flex: 1; font-size: 14px; color: var(--slate); margin: 0; }
  .section { margin-bottom: 32px; }
  footer { border-top: 1px solid var(--border); padding: 24px 48px; display: flex; justify-content: space-between; font-size: 12px; color: var(--slate); flex-wrap: wrap; gap: 6px; }
  @media print { body { background: #fff; } .hero { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
  @media (max-width: 640px) {
    .hero { padding: 36px 20px; } .body { padding: 24px; }
    .facts-row { grid-template-columns: repeat(2, 1fr); }
    .cert-row { flex-direction: column; align-items: flex-start; }
    h1 { font-size: 24px; } footer { flex-direction: column; padding: 20px; }
  }`;

function shell({ title, description, eyebrow, heroTitle, heroDescription, facts, sections, certImage, certText }) {
  const factsHtml = facts.map((f) => `<div class="fact"><p class="fact-label">${esc(f.label)}</p><p class="fact-value">${esc(f.value)}</p></div>`).join("");
  const sectionsHtml = sections.map((s) => `
    <div class="section">
      <h2>${esc(s.title)}</h2>
      ${s.desc ? `<p class="section-desc">${esc(s.desc)}</p>` : ""}
      ${s.list ? `<ul class="check-list">${s.list.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}
      ${s.pills ? `<div class="pill-row">${s.pills.map((p) => `<span class="pill">${esc(p)}</span>`).join("")}</div>` : ""}
    </div>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}" />
<style>${baseStyle}</style>
</head>
<body>
  <div class="hero">
    <p class="eyebrow">${esc(eyebrow)}</p>
    <h1>${esc(heroTitle)}</h1>
    <p class="hero-desc">${esc(heroDescription)}</p>
    <div class="facts-row">${factsHtml}</div>
  </div>
  <div class="body">
    ${sectionsHtml}
    ${certImage ? `
    <div class="section">
      <h2>Sample Certificate</h2>
      <div class="cert-row">
        <img class="cert-image" src="${certImage}" alt="Sample certificate" />
        <p class="cert-text">${esc(certText || "")}</p>
      </div>
    </div>` : ""}
  </div>
  <footer>
    <span>AcdyOn — acdyon.com</span>
    <span>This brochure is indicative; final terms confirmed at consultation.</span>
  </footer>
</body>
</html>`;
}

function degreeBrochure(uni, kind) {
  const details = kind === "dba" ? uni.dbaDetails : uni.phdDetails;
  const duration = uni.duration?.[kind];
  return shell({
    title: `${uni.name} ${kind.toUpperCase()} — AcdyOn`,
    description: details.overview.slice(0, 160),
    eyebrow: `${kind === "dba" ? "Doctor of Business Administration" : "Doctor of Philosophy"} · ${uni.country}`,
    heroTitle: `${uni.name} ${kind.toUpperCase()}`,
    heroDescription: details.overview,
    facts: [
      { label: "Duration", value: duration ? `${duration.min}–${duration.max} months` : "—" },
      { label: "Delivery", value: uni.deliveryMode.join(", ") },
      { label: "Accreditation", value: uni.accreditations.join(", ") },
    ],
    sections: [
      { title: "Eligibility", list: details.eligibility },
      { title: "Curriculum Highlights", pills: details.curriculumHighlights },
      { title: "About " + uni.name, desc: uni.description },
    ],
    certImage: uni.sampleCertificate,
    certText: `Indicative sample certificate for ${uni.name}'s ${kind.toUpperCase()} graduates.`,
  });
}

function honoraryBrochure(uni) {
  return shell({
    title: `${uni.name} Honorary Recognition — AcdyOn`,
    description: uni.description,
    eyebrow: `Honorary Recognition · ${uni.country}`,
    heroTitle: `${uni.name} Honorary Doctorate`,
    heroDescription: uni.description,
    facts: [
      { label: "Founded", value: String(uni.established) },
      { label: "Ranking", value: uni.ranking || "—" },
      { label: "Accreditation", value: uni.accreditations.join(", ") },
    ],
    sections: [
      { title: "Recognition Signals", pills: uni.recognition },
      { title: "Accreditation Bodies", pills: uni.accreditations },
    ],
  });
}

function honoraryOverviewBrochure(unis) {
  return shell({
    title: "Honorary Recognition Overview — AcdyOn",
    description: "A comparison of AcdyOn's honorary recognition partner institutions.",
    eyebrow: "Honorary Recognition",
    heroTitle: "Honorary Recognition — Partner Institutions",
    heroDescription: "A side-by-side overview of AcdyOn's honorary doctorate and professorship partner institutions: recognition focus, accreditation, and standing.",
    facts: unis.map((u) => ({ label: u.name, value: u.country })),
    sections: unis.map((u) => ({
      title: u.name,
      desc: u.description,
      pills: [...u.accreditations, ...u.recognition],
    })),
  });
}

import { universities } from "../lib/data/universities.ts";

fs.mkdirSync(DEGREE_DIR, { recursive: true });
fs.mkdirSync(HONORARY_DIR, { recursive: true });

fs.writeFileSync(
  path.join(HONORARY_DIR, "overview.html"),
  honoraryOverviewBrochure(universities.filter((u) => u.programmes.honorary_doctorate))
);
console.log("Generated overview.html");

for (const uni of universities) {
  if (uni.dbaDetails?.brochureUrl) {
    const file = path.basename(uni.dbaDetails.brochureUrl);
    fs.writeFileSync(path.join(DEGREE_DIR, file), degreeBrochure(uni, "dba"));
    console.log("Generated", file);
  }
  if (uni.phdDetails?.brochureUrl) {
    const file = path.basename(uni.phdDetails.brochureUrl);
    fs.writeFileSync(path.join(DEGREE_DIR, file), degreeBrochure(uni, "phd"));
    console.log("Generated", file);
  }
  if (uni.honoraryBrochureUrl) {
    const file = path.basename(uni.honoraryBrochureUrl);
    fs.writeFileSync(path.join(HONORARY_DIR, file), honoraryBrochure(uni));
    console.log("Generated", file);
  }
}
