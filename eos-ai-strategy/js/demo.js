// ═══════════════════════════════════════
// EOS × AI STRATEGY — SOCIAL PULSE DEMO
// ═══════════════════════════════════════

function loadExample(type) {
  const input = document.getElementById('demoInput');
  if (input && DATA.examples[type]) {
    input.value = DATA.examples[type];
    input.focus();
  }
}

async function runDemo() {
  const text = document.getElementById('demoInput')?.value.trim();
  const key = document.getElementById('apiKey')?.value.trim();
  const btn = document.getElementById('runBtn');
  const btnText = document.getElementById('runBtnText');
  const output = document.getElementById('demoOutput');

  if (!text) {
    output.className = 'demo-output';
    output.textContent = '⚠️  Please paste some community feedback first — or click one of the example buttons above.';
    return;
  }

  if (!key || !key.startsWith('sk-ant-')) {
    output.className = 'demo-output';
    output.textContent = '⚠️  Please enter a valid Anthropic API key above (starts with sk-ant-).\n\nGet a free key at console.anthropic.com — takes 60 seconds.\n\nYour key stays local and is never stored anywhere.';
    return;
  }

  // Loading state
  btn.disabled = true;
  btnText.innerHTML = '<span class="spin"></span> Analyzing signals...';
  output.className = 'demo-output shimmer';
  output.textContent = 'Reading community signals...';

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 900,
        system: `You are the Social Pulse Engine for eos Products — a Gen Z/millennial beauty brand (evolutionofsmooth.com). Your job is to transform raw community signals (TikTok comments, reviews, DMs) into actionable strategic intelligence for the Social Media Manager, Marketing team, and Product team. Be sharp, specific, and commercially focused. Use emoji section headers. Surface opportunities that feel inevitable in hindsight. Write like you're briefing a smart, busy CMO — not writing an essay.`,
        messages: [{
          role: 'user',
          content: `Analyze this eos community feedback and generate a structured Social Pulse Brief:

🔥 TRENDING SIGNALS — top 3 patterns with community momentum and estimated volume
💡 PRODUCT OPPORTUNITY — one specific, bold product or formula insight the team should act on
📣 MARKETING ANGLE — one content or campaign opportunity rooted directly in these signals  
⚠️ FRICTION TO FIX — the one issue most likely to cost eos customers if left unaddressed
🎯 RECOMMENDED NEXT STEP — one concrete action the team should take this week

Community signals to analyze:
${text}

Keep each section to 2-3 punchy sentences max. Executive briefing tone — not a report. Make it feel like insight, not summary.`
        }]
      })
    });

    const data = await res.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    output.className = 'demo-output';
    output.textContent = data.content[0].text;

  } catch (err) {
    output.className = 'demo-output';
    output.textContent = '⚠️  ' + (err.message || 'Something went wrong. Check your API key and try again.');
  } finally {
    btn.disabled = false;
    btnText.textContent = 'Run Social Pulse Analysis';
  }
}
