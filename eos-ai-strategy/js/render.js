// ═══════════════════════════════════════
// EOS × AI STRATEGY — RENDER
// Builds all slide content from DATA
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  renderPlatforms();
  renderFlow();
  renderRecipients();
  renderSignalProof();
  renderScents();
  renderCraft();
  renderEngine();
  renderROI();
  renderCmdCenter();
  renderPeople();
  renderMeasures();
  renderAIMenu();
  renderAbout();
});

// ─── SLIDE 2: PLATFORMS ───
function renderPlatforms() {
  const el = document.getElementById('platformGrid');
  if (!el) return;
  el.innerHTML = DATA.platforms.map(p => `
    <div class="platform-card ${p.cls}">
      <div class="p-platform-name">${p.name}</div>
      <div class="p-number">${p.number}</div>
      <div class="p-body">${p.body}</div>
      <div class="p-gap">${p.gap}</div>
    </div>
  `).join('');
}

// ─── SLIDE 3: FLOW ───
function renderFlow() {
  const el = document.getElementById('flowDiagram');
  if (!el) return;
  el.innerHTML = DATA.flow.map((f, i) => `
    <div class="flow-box">
      <span class="flow-icon">${f.icon}</span>
      <div class="flow-title">${f.title}</div>
      <div class="flow-sub">${f.sub}</div>
    </div>
    ${i < DATA.flow.length - 1 ? '<div class="flow-arrow">→</div>' : ''}
  `).join('');
}

// ─── SLIDE 3: RECIPIENTS ───
function renderRecipients() {
  const el = document.getElementById('recipientsGrid');
  if (!el) return;
  el.innerHTML = DATA.recipients.map(r => `
    <div class="recipient-card ${r.cls}">
      <div class="r-title">${r.title}</div>
      <div class="r-items">${r.items.map(i => `· ${i}`).join('<br>')}</div>
    </div>
  `).join('');
}

// ─── SLIDE 4: SIGNAL PROOF ───
function renderSignalProof() {
  const el = document.getElementById('signalProof');
  if (!el) return;
  el.innerHTML = `
    <strong>Signal detected by Social Pulse:</strong> "my boyfriend keeps stealing my eos vanilla lotion" · 
    "eos for men needs to happen like yesterday" · "would 100% buy a men's line if it existed" — 
    <strong>847 mentions</strong> across TikTok + Reddit in one week, up <strong>340%</strong> from the prior week.
  `;
}

// ─── SLIDE 4: SCENTS ───
function renderScents() {
  const el = document.getElementById('scentsGrid');
  if (!el) return;
  el.innerHTML = DATA.scents.map(s => `
    <div class="scent-card ${s.cls}">
      <div>
        <span class="scent-badge ${s.badgeCls}">${s.badge}</span>
        <div class="scent-name">${s.name}</div>
        <div class="scent-tagline">${s.tagline}</div>
        <div class="scent-products">${s.products.replace('\n', '<br>')}</div>
      </div>
      <img class="scent-img" src="${s.img}" alt="${s.name}" 
           onerror="this.style.display='none'">
    </div>
  `).join('');
}

// ─── SLIDE 4: CRAFT ───
function renderCraft() {
  const el = document.getElementById('craftRow');
  if (!el) return;
  el.innerHTML = DATA.craft.map(c => `
    <div class="craft-step">
      <div class="craft-letter">${c.letter}</div>
      <div class="craft-word">${c.word}</div>
    </div>
  `).join('');
}

// ─── SLIDE 5: ENGINE ───
function renderEngine() {
  const el = document.getElementById('engineGrid');
  if (!el) return;
  el.innerHTML = DATA.engine.map(e => {
    let extra = '';

    if (e.hasIframe) {
      extra = `
        <div class="iframe-preview">
          <div class="iframe-note">Live prompt library — click to explore</div>
          <a href="${e.iframeUrl}" target="_blank" class="iframe-link">View Prompt Library ↗</a>
        </div>
      `;
    }

    if (e.hasPlaybook) {
      extra = `
        <div class="playbook-steps">
          ${DATA.playbook.map(p => `
            <div class="pb-step ${p.human ? 'human' : ''}">
              <div class="pb-num">${p.num}</div>
              <div class="pb-label">${p.label}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (e.hasAgents) {
      extra = `
        <div class="agent-cards">
          ${DATA.agents.map(a => `
            <div class="agent-card">
              <div class="agent-name">${a.name}</div>
              <div class="agent-desc">${a.desc}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    return `
      <div class="engine-card">
        <div class="engine-title">${e.title}</div>
        <div class="engine-body">${e.body}</div>
        ${extra}
      </div>
    `;
  }).join('');
}

// ─── SLIDE 5: ROI ───
function renderROI() {
  const el = document.getElementById('roiRow');
  if (!el) return;
  el.innerHTML = DATA.roi.map(r => `
    <div class="roi-card">
      <div class="roi-number">${r.number}</div>
      <div>
        <div class="roi-label">${r.label}</div>
        <div class="roi-source">${r.source}</div>
      </div>
    </div>
  `).join('');
}

// ─── SLIDE 5: COMMAND CENTER ───
function renderCmdCenter() {
  const el = document.getElementById('cmdCenter');
  if (!el) return;
  el.innerHTML = `
    <div class="cmd-center">
      <div class="cmd-left">
        <div class="cmd-title">AI Pilot Command Center</div>
        <div class="cmd-body">One dashboard. Every initiative. Full visibility for leadership — no surprises, no black boxes.</div>
        <div class="cmd-tags">
          ${DATA.cmdTags.map(t => `<span class="cmd-tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="cmd-metrics">
        <div class="cmd-metric"><span class="cmd-value">D1</span><div class="cmd-label">ROI tracked</div></div>
        <div class="cmd-metric"><span class="cmd-value">100%</span><div class="cmd-label">Human reviewed</div></div>
        <div class="cmd-metric"><span class="cmd-value">0</span><div class="cmd-label">Black boxes</div></div>
      </div>
    </div>
  `;
}

// ─── SLIDE 6: PEOPLE ───
function renderPeople() {
  const el = document.getElementById('peopleGrid');
  if (!el) return;

  const cards = DATA.people.map(p => `
    <div class="people-card">
      <div class="label pink">${p.label}</div>
      ${p.items.map(item => `
        <div class="people-item">
          <div class="people-dot"></div>
          <div>
            <strong>${item.strong}</strong>
            ${item.text}
            ${item.badge ? `<span class="kit-badge">${item.badge}</span>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');

  // Aria card
  const aria = `
    <div class="aria-card">
      <div class="aria-avatar">🤖</div>
      <div class="aria-name">Meet Aria</div>
      <div class="aria-subtitle">eos AI Enablement Agent</div>
      <div class="aria-messages">
        <div class="aria-bubble">"How do I write a TikTok brief for the Vanilla Latte launch?"</div>
        <div class="aria-bubble response" id="ariaResponse">Ask me anything about AI at eos — I know the brand voice, the prompt library, and the playbook.</div>
      </div>
      <div class="aria-input-row">
        <input type="text" class="aria-text-input" id="ariaInput" placeholder="Ask Aria anything..." onkeypress="handleAriaKey(event)">
        <button class="aria-send" onclick="sendAriaMessage()">Send</button>
      </div>
    </div>
  `;

  el.innerHTML = cards + aria;
}

// ─── SLIDE 6: MEASURES ───
function renderMeasures() {
  const el = document.getElementById('measureStrip');
  if (!el) return;
  el.innerHTML = `
    <span class="measure-label">Measuring adoption:</span>
    ${DATA.measures.map(m => `<span class="measure-pill">${m}</span>`).join('')}
  `;
}

// ─── SLIDE 7: AI MENU ───
function renderAIMenu() {
  const el = document.getElementById('aiMenuGrid');
  if (!el) return;
  el.innerHTML = DATA.aiMenu.map(a => `
    <div class="am-card ${a.cls}">
      <div class="am-logo">${a.logo}</div>
      <div class="am-name">${a.name}</div>
      <div class="am-role">${a.role}</div>
      <span class="am-tag ${a.tagCls}">${a.tag}</span>
    </div>
  `).join('');
}

// ─── SLIDE 7: ABOUT ───
function renderAbout() {
  const el = document.getElementById('aboutBar');
  if (!el) return;
  el.innerHTML = `
    <div class="about-circle">CJ</div>
    <div>
      <div class="about-name">Chrystelle Juste</div>
      <div class="about-title">AI Change Enablement Strategist · New York, NY · Available immediately</div>
      <div class="about-quote">"I don't just build AI strategies — I build the systems, train the people, and stay until it works."</div>
    </div>
    <div class="about-btns">
      <a href="https://ai-sme-portfolio-cw3v.vercel.app" target="_blank" class="about-btn btn-lime">View Portfolio ↗</a>
      <a href="mailto:chrystellejuste@gmail.com?subject=eos × AI Strategy — Let's talk" class="about-btn btn-ghost">chrystellejuste@gmail.com</a>
    </div>
  `;
}
