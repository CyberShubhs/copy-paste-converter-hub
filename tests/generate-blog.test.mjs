import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, test } from 'vitest';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const scriptPath = path.join(repoRoot, 'scripts', 'generate-blog.mjs');

function runGeneratorWithFetchMock(envOverrides) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-generator-'));
  const captureFile = path.join(tmpDir, 'fetch-request.json');
  const mockFile = path.join(tmpDir, 'mock-fetch.mjs');

  fs.writeFileSync(
    mockFile,
    `
import fs from 'node:fs';

globalThis.fetch = async (url, options = {}) => {
  fs.writeFileSync(
    process.env.FETCH_CAPTURE_FILE,
    JSON.stringify({
      url: String(url),
      headers: options.headers,
      body: JSON.parse(options.body),
    }),
  );

  return {
    ok: true,
    status: 200,
    json: async () => ({
      choices: [{
        message: {
          content: 'A practical opening paragraph about developer tooling.\\n\\n## TL;DR\\n\\n- Use the right tool.\\n\\n## FAQ\\n\\n### Does this work?\\n\\nYes.\\n\\n## Wrapping up\\n\\nThis is the final sentence.'
        }
      }]
    }),
    text: async () => '',
  };
};
`,
    'utf8',
  );

  const env = {
    ...process.env,
    ...envOverrides,
    FETCH_CAPTURE_FILE: captureFile,
  };
  delete env.GEMINI_API_KEY;
  delete env.GEMINI_MODEL;
  delete env.GROQ_MODEL;

  const result = spawnSync(
    process.execPath,
    ['--import', mockFile, scriptPath],
    {
      cwd: tmpDir,
      env,
      encoding: 'utf8',
    },
  );

  return {
    captureFile,
    result,
  };
}

describe('blog generator provider configuration', () => {
  test('uses Groq when only GROQ_API_KEY is configured', () => {
    const { captureFile, result } = runGeneratorWithFetchMock({
      GROQ_API_KEY: 'groq-test-key',
    });

    expect(result.status, result.stderr).toBe(0);

    const request = JSON.parse(fs.readFileSync(captureFile, 'utf8'));
    expect(request.url).toBe('https://api.groq.com/openai/v1/chat/completions');
    expect(request.headers.Authorization).toBe('Bearer groq-test-key');
    expect(request.body.model).toBe('llama-3.3-70b-versatile');
    expect(request.body.messages[0].role).toBe('user');
    expect(request.body.messages[0].content).toContain(
      'You are a senior software engineer and tech writer',
    );
  });
});
