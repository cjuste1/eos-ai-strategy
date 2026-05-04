// ═══════════════════════════════════════
// EOS × AI STRATEGY — ARIA AGENT
// Powered by Claude API
// ═══════════════════════════════════════

function handleAriaKey(event) {
  if (event.key === 'Enter') sendAriaMessage();
}

async function sendAriaMessage() {
  const input = document.getElementById('ariaInput');
  const response = document.getElementById('ariaResponse');
  const key = document.getElementById('apiKey')?.value.trim();

  if (!input || !response) return;
  const message = input.value.trim();
  if (!message) return;

  if (!key || !key.startsWith('sk-ant-')) {
    response.textContent = '⚠️ Please enter your Anthropic API key in the demo section on slide 3 to activate me!';
    return;
  }

  // Loading
  input.value = '';
  input.disabled = true;
  response.textContent = 'Thinking...';
  response.style.fontStyle = 'italic';
  response.style.color = 'rgba(255,255,255,0.5)';

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
        max_tokens: 300,
        system: `You are Aria, eos Products' friendly and knowledgeable AI Enablement Agent. You help eos employees use AI tools effectively in their day-to-day work. You know eos' brand voice (playful, warm, community-first, Gen Z-friendly), the eos AI Prompt Library, and the eos AI Playbook. You speak in plain language — never technical jargon. You're encouraging, practical, and always eos-brand-appropriate. Keep responses concise — 2-4 sentences max. You're warm, confident, and a little fun.`,
        messages: [{ role: 'user', content: message }]
      })
    });

    const data = await res.json();
    if (data.error) throw new Error(data.error.message);

    response.textContent = data.content[0].text;
    response.style.fontStyle = 'normal';
    response.style.color = 'rgba(255,255,255,0.85)';

  } catch (err) {
    response.textContent = '⚠️ ' + (err.message || 'Something went wrong. Try again!');
    response.style.fontStyle = 'normal';
  } finally {
    input.disabled = false;
    input.focus();
  }
}
