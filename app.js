function runScan() {
  const company = document.getElementById("company").value;
  const industry = document.getElementById("industry").value;
  const report = document.getElementById("report");

  if (!company) {
    alert("Enter a company website");
    return;
  }

  report.classList.remove("hidden");
  report.innerHTML = `
    <h2>RevenueScope™ Intelligence Report</h2>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Industry:</strong> ${industry}</p>

    <h3>Revenue Risk Score:
      <span style="color:#fb7185">81 / 100 — CRITICAL</span>
    </h3>

    <h4>Detected Issues</h4>
    <ul>
      <li>Monetization Intelligence Gap</li>
      <li>Ad Spend Waste across acquisition funnels</li>
      <li>Revenue leakage in pricing & packaging</li>
      <li>No enterprise or expansion revenue strategy</li>
      <li>Growth scalability risks</li>
    </ul>

    <h4>Estimated Annual Revenue Leakage</h4>
    <p style="font-size:20px;color:#fb7185">
      <strong>$4.1M – $11.8M</strong>
    </p>

    <h4>30-Day Fix Plan</h4>
    <ul>
      <li>Enterprise & volume pricing rollout</li>
      <li>Ad funnel reconstruction</li>
      <li>High-intent page monetization</li>
      <li>Expansion & upsell strategy</li>
    </ul>

    <p><strong>If you want this fixed for your company, DM Victor G.</strong></p>

    <button class="export-btn" onclick="exportPDF()">Export PDF</button>
  `;
}

function exportPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text(document.getElementById("report").innerText, 10, 10, { maxWidth: 180 });
  doc.save("RevenueScope_Report.pdf");
}
