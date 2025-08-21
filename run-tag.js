#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function getExpr() {
    // Prefer args after "--": npm run test:tag -- @inventory
    const args = process.argv.slice(2);
    if (args.length) return args.join(' ').trim();
    // Fallback for "--@inventory"
    try {
        const orig = JSON.parse(process.env.npm_config_argv || '{}').original || [];
        const dd = orig.indexOf('--');
        if (dd >= 0) return orig.slice(dd + 1).join(' ').trim();
        const m = orig.find(x => x.startsWith('--@'));
        if (m) return m.replace(/^--/, '').trim();
    } catch {}
    return '';
}

function copyNewResults(srcDir, dstDir, sinceMs) {
    fs.rmSync(dstDir, { recursive: true, force: true });
    fs.mkdirSync(dstDir, { recursive: true });

    const copyDir = (src, dst) => {
        fs.mkdirSync(dst, { recursive: true });
        for (const ent of fs.readdirSync(src, { withFileTypes: true })) {
            const s = path.join(src, ent.name);
            const d = path.join(dst, ent.name);
            ent.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
        }
    };

    for (const name of fs.readdirSync(srcDir)) {
        const srcPath = path.join(srcDir, name);
        const st = fs.statSync(srcPath);
        if (st.mtimeMs >= sinceMs - 1000) { // small slack
            if (st.isDirectory()) copyDir(srcPath, path.join(dstDir, name));
            else fs.copyFileSync(srcPath, path.join(dstDir, name));
        }
    }
}

// 1) parse tag expression
const expr = getExpr();
if (!expr) {
    console.error('Usage: npm run test:tag -- @<tag-expression>');
    process.exit(1);
}

// 2) remember start time
const started = Date.now();

// 3) generate only tagged scenarios
let r = spawnSync('npx', ['bddgen', '--tags', expr], { stdio: 'inherit' });
if (r.status) process.exit(r.status);

// 4) run Playwright (writes to default allure-results, preserving history)
r = spawnSync('npx', ['playwright', 'test', '--headed'], { stdio: 'inherit' });
if (r.status) process.exit(r.status);

// 5) copy only *new* results from this run to a separate folder for report:tag
copyNewResults('allure-results', 'allure-results-tag', started);

try { require('fs').rmSync('test-results', { recursive: true, force: true }); } catch {}

