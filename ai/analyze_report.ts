import * as fs from 'fs';

async function run() {
  const report = fs.readFileSync(
    'test-results.json',
    'utf8'
  );

  const reportJson = JSON.parse(report);

  const stats = reportJson.stats;

  const summary = `
Expected: ${stats.expected}
Passed: ${stats.expected - stats.unexpected}
Failed: ${stats.unexpected}
Duration: ${stats.duration}
`;

  const response = await fetch(
    'http://localhost:11434/api/generate',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'qwen3:8b',
        stream: false,
        prompt: `
You are a Senior QA Lead.

Analyse these Playwright results:

${summary}

Provide:
- Executive Summary
- Risk Assessment
- Recommendations
`
      })
    }
  );

  const data = await response.json();

  console.log(data.response);

  fs.writeFileSync(
    'ai/reports/ai-report.md',
    data.response
  );
}

run();