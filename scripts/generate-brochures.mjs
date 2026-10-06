import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "brochures");

const SHARED_UNIVERSITIES = [
  { name: "Kennedy University", country: "USA / France", logo: "https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Kennedy-University-520-x-330%20(2).jpg" },
  { name: "Dunster Business School", country: "Switzerland", logo: "https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/DBS_New-Final-Logo_6.png" },
];

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function pageShell({ title, description, eyebrow, heroTitle, heroDescription, facts, months, certImage, certText, investmentRows, universities, sections }) {
  const factsHtml = facts.map((f) => `
    <div class="fact">
      <p class="fact-label">${escapeHtml(f.label)}</p>
      <p class="fact-value">${escapeHtml(f.value)}</p>
    </div>`).join("");

  const monthsHtml = months.map((m, i) => `
    <div class="month-card">
      <div class="month-badge" style="background:${m.color}">${i + 1}</div>
      <div class="month-content">
        <p class="month-title" style="color:${m.color}">${escapeHtml(m.month)} — ${escapeHtml(m.title)}</p>
        <div class="module-row">
          ${m.modules.map((mod) => `<span class="module-pill">${escapeHtml(mod)}</span>`).join("")}
        </div>
      </div>
    </div>`).join("");

  const investmentHtml = `
    <table class="investment-table">
      <thead>
        <tr><th>Pathway</th><th>Additional Investment</th><th>Additional Duration</th></tr>
      </thead>
      <tbody>
        ${investmentRows.map((r) => `<tr><td>${escapeHtml(r.pathway)}</td><td>${escapeHtml(r.investment)}</td><td>${escapeHtml(r.duration)}</td></tr>`).join("")}
      </tbody>
    </table>`;

  const universitiesHtml = `
    <div class="uni-row">
      ${universities.map((u) => `
        <div class="uni-card">
          <img class="uni-logo" src="${u.logo}" alt="${escapeHtml(u.name)}" />
          <p class="uni-name">${escapeHtml(u.name)}</p>
          <p class="uni-country">${escapeHtml(u.country)}</p>
        </div>`).join("")}
    </div>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<style>
  :root {
    --navy: #0f172a; --royal: #1E40FF; --gold: #D4AF37; --cyan: #22D3EE;
    --slate: #475569; --border: #E2E8F0;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; font-family: -apple-system, "Segoe UI", Inter, Helvetica, Arial, sans-serif;
    color: var(--navy); background: #fff; line-height: 1.5;
  }
  .hero {
    background: var(--navy); color: #fff; padding: 56px 48px 44px;
  }
  .eyebrow {
    color: var(--gold); font-size: 12px; font-weight: 700; letter-spacing: 2px;
    text-transform: uppercase; margin: 0 0 12px;
  }
  h1 { font-size: 36px; font-weight: 700; margin: 0 0 14px; line-height: 1.15; }
  .hero-desc { font-size: 15px; color: #CBD5E1; max-width: 640px; margin: 0; }
  .facts-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 28px; }
  .fact { border: 1px solid #334155; border-radius: 8px; padding: 12px 14px; }
  .fact-label { font-size: 11px; color: #94A3B8; margin: 0 0 4px; }
  .fact-value { font-size: 15px; color: #fff; font-weight: 700; margin: 0; }
  .body { padding: 48px; max-width: 980px; margin: 0 auto; }
  h2 { font-size: 22px; font-weight: 700; color: var(--navy); margin: 0 0 6px; }
  .section-desc { font-size: 14px; color: var(--slate); margin: 0 0 20px; max-width: 760px; }
  .month-card { display: flex; gap: 14px; margin-bottom: 14px; border: 1px solid var(--border); border-radius: 8px; padding: 16px; }
  .month-badge { width: 32px; height: 32px; min-width: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 14px; }
  .month-title { font-size: 15px; font-weight: 700; margin: 0 0 10px; }
  .module-row { display: flex; flex-wrap: wrap; gap: 8px; }
  .module-pill { font-size: 12.5px; color: var(--slate); background: #F8FAFC; border-radius: 14px; padding: 5px 12px; border: 1px solid var(--border); }
  .cert-row { display: flex; gap: 24px; align-items: center; margin-top: 16px; }
  .cert-image { width: 220px; height: auto; border-radius: 8px; border: 1px solid var(--border); }
  .cert-text { flex: 1; font-size: 14px; color: var(--slate); margin: 0; }
  .investment-table { width: 100%; border-collapse: collapse; margin-top: 8px; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
  .investment-table th { background: #F8FAFC; text-align: left; font-size: 12.5px; font-weight: 700; color: var(--navy); padding: 12px 14px; border-bottom: 1px solid var(--border); }
  .investment-table td { font-size: 13.5px; color: var(--slate); padding: 12px 14px; border-bottom: 1px solid var(--border); }
  .investment-table tr:last-child td { border-bottom: none; }
  .uni-row { display: flex; gap: 16px; margin-top: 12px; }
  .uni-card { flex: 1; border: 1px solid var(--border); border-radius: 8px; padding: 16px; text-align: center; }
  .uni-logo { width: 96px; height: 64px; object-fit: contain; margin-bottom: 10px; }
  .uni-name { font-size: 13px; font-weight: 700; color: var(--navy); margin: 0; }
  .uni-country { font-size: 12px; color: var(--slate); margin: 4px 0 0; }
  .section { margin-bottom: 36px; }
  footer { border-top: 1px solid var(--border); padding: 24px 48px; display: flex; justify-content: space-between; font-size: 12px; color: var(--slate); }
  @media print {
    body { background: #fff; }
    .hero { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  }
  @media (max-width: 640px) {
    .hero { padding: 36px 20px; }
    .body { padding: 24px; }
    .facts-row { grid-template-columns: repeat(2, 1fr); }
    .cert-row, .uni-row { flex-direction: column; }
    h1 { font-size: 26px; }
    footer { flex-direction: column; gap: 6px; padding: 20px; }
  }
</style>
</head>
<body>
  <div class="hero">
    <p class="eyebrow">${escapeHtml(eyebrow)}</p>
    <h1>${escapeHtml(heroTitle)}</h1>
    <p class="hero-desc">${escapeHtml(heroDescription)}</p>
    <div class="facts-row">${factsHtml}</div>
  </div>
  <div class="body">
    <div class="section">
      <h2>${months.length}-Month Learning Journey</h2>
      <p class="section-desc">From foundations to deployed, real-world outcomes — every phase builds on the last with a clear, outcome-driven structure.</p>
      ${monthsHtml}
    </div>
    <div class="section">
      <h2>Programme Certificate</h2>
      <div class="cert-row">
        <img class="cert-image" src="${certImage}" alt="Programme certificate" />
        <p class="cert-text">${escapeHtml(certText)}</p>
      </div>
    </div>
    <div class="section">
      <h2>Academic Progression Pathways</h2>
      <p class="section-desc">Optional upgrade paths for graduates seeking certification or accredited degree progression through partner universities.</p>
      ${investmentHtml}
    </div>
    <div class="section">
      <h2>Partner Universities</h2>
      <p class="section-desc">Degree progression pathways are delivered in partnership with globally recognised institutions.</p>
      ${universitiesHtml}
    </div>
    ${sections.map((s) => `
    <div class="section">
      <h2>${escapeHtml(s.title)}</h2>
      <p class="section-desc">${escapeHtml(s.body)}</p>
    </div>`).join("")}
  </div>
  <footer>
    <span>AcdyOn — acdyon.com</span>
    <span>This brochure is indicative; final terms confirmed at consultation.</span>
  </footer>
</body>
</html>`;
}

const automationHtml = pageShell({
  title: "Agentic AI & Automation Mastery — AcdyOn",
  description: "Build autonomous AI agents, automate business workflows, and deploy real-world projects.",
  eyebrow: "Applied AI for Professionals",
  heroTitle: "Agentic AI & Automation Mastery",
  heroDescription: "Build autonomous AI agents, automate business workflows, and deploy real-world projects — with career acceleration and academic progression opportunities.",
  facts: [
    { label: "Duration", value: "4 Months" },
    { label: "Format", value: "Live + Async" },
    { label: "Mentorship", value: "1-on-1 Sessions" },
    { label: "Upgrade Pathways", value: "Available" },
  ],
  months: [
    { month: "Month 1", title: "AI Foundations & Prompt Architecture", color: "#1E40FF", modules: ["LLM Behaviour & Limitations", "Advanced Prompt Engineering", "Structured Output & JSON", "API Fundamentals & Token Management"] },
    { month: "Month 2", title: "Building AI Agents", color: "#7c3aed", modules: ["Agent Architecture Patterns", "Memory & Context Management", "Tool-Calling & Function Use", "Multi-Agent Coordination"] },
    { month: "Month 3", title: "Business Automation & Workflows", color: "#059669", modules: ["n8n & Make Workflow Design", "CRM & Productivity Integrations", "Automated Content Pipelines", "AI-Driven Reporting Systems"] },
    { month: "Month 4", title: "Capstone Projects & Career Launch", color: "#D4AF37", modules: ["3 Deployable Capstone Projects", "Portfolio & Career Positioning", "Internship Pathway (Qualifying Graduates)", "Final Mentor Review"] },
  ],
  certImage: "https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/Agentic%20AI-Certificate.png",
  certText: "Graduates receive an AcdyOn programme certificate for Agentic AI & Automation Mastery, alongside a portfolio of three deployed capstone projects spanning agent building, business automation, and AI-driven workflows.",
  investmentRows: [
    { pathway: "Microsoft AI-900 Certification", investment: "USD 200", duration: "—" },
    { pathway: "Master's Degree Progression (Kennedy University / Dunster)", investment: "USD 3,000", duration: "+4 Months" },
  ],
  universities: SHARED_UNIVERSITIES,
  sections: [
    { title: "Who This Programme Is For", body: "Executives, consultants, and working professionals who want applied AI skills without becoming engineers. No prior coding experience required — the programme starts with no-code automation tools and introduces Python basics only where directly useful for agent development." },
    { title: "Time Commitment", body: "10–15 hours per week, including live mentorship sessions, structured async modules, and project work. A 30-day money-back guarantee applies from enrolment." },
  ],
});

const cybersecurityHtml = pageShell({
  title: "Agentic AI & Cybersecurity Mastery — AcdyOn",
  description: "From zero to job-ready in 6 months — hands-on training, real portfolio, and dedicated career launch support.",
  eyebrow: "Industry-Focused Cybersecurity Training",
  heroTitle: "Agentic AI & Cybersecurity Mastery",
  heroDescription: "From zero to job-ready in 6 months — hands-on training, real portfolio, and dedicated career launch support with internship pathways.",
  facts: [
    { label: "Duration", value: "6 Months" },
    { label: "Format", value: "Live + Async" },
    { label: "Mentorship", value: "1-on-1 Sessions" },
    { label: "Upgrade Pathways", value: "Available" },
  ],
  months: [
    { month: "Month 1", title: "Cybersecurity Foundations", color: "#1E40FF", modules: ["Security Fundamentals", "Networking Basics", "Threat Landscape", "Security Mindset"] },
    { month: "Month 2", title: "Network Security & Defense", color: "#059669", modules: ["Firewalls", "Network Monitoring", "Security Operations", "Detection Techniques"] },
    { month: "Month 3", title: "Ethical Hacking", color: "#dc2626", modules: ["Vulnerability Assessment", "Penetration Testing Concepts", "Red Team Fundamentals", "Security Audits"] },
    { month: "Month 4", title: "Cloud & Infrastructure Security", color: "#7c3aed", modules: ["Cloud Security", "Identity Management", "Modern Enterprise Security", "Governance Concepts"] },
    { month: "Month 5", title: "AI-Assisted Cybersecurity", color: "#22D3EE", modules: ["AI Security Workflows", "Threat Detection Using AI", "Automation Concepts", "Productivity Enhancements"] },
    { month: "Month 6", title: "Career Launch & Internship", color: "#D4AF37", modules: ["Career Positioning", "Internship Pathway (Qualifying Graduates)", "Portfolio Review", "Final Mentor Review"] },
  ],
  certImage: "https://sohhmxayptiosflmlxuu.supabase.co/storage/v1/object/public/brochures/Certificates/COC-Acdyon.png",
  certText: "Graduates receive an AcdyOn certificate of completion for Agentic AI & Cybersecurity Mastery, along with hands-on portfolio experience across network defense, ethical hacking, cloud security, and AI-assisted threat detection.",
  investmentRows: [
    { pathway: "Microsoft AI-900 Certification", investment: "USD 200", duration: "—" },
    { pathway: "Master's Degree Progression (Kennedy University / Dunster)", investment: "USD 3,000", duration: "+6 Months" },
  ],
  universities: SHARED_UNIVERSITIES,
  sections: [
    { title: "Career Outcomes", body: "The programme provides comprehensive career positioning and placement support, including an internship pathway for qualifying graduates. Outcomes depend on individual skills, effort, and market conditions." },
  ],
});

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, "agentic-ai-automation-mastery.html"), automationHtml);
console.log("Generated agentic-ai-automation-mastery.html");
fs.writeFileSync(path.join(OUT_DIR, "agentic-ai-cybersecurity-mastery.html"), cybersecurityHtml);
console.log("Generated agentic-ai-cybersecurity-mastery.html");
