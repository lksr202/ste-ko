#!/usr/bin/env node
// Inject the writing rules into a new session (SessionStart) or a subagent (SubagentStart).
const fs = require('fs');
const path = require('path');

const event = process.argv[2] || 'SessionStart';
const rules = fs.readFileSync(path.join(__dirname, '..', 'skills', 'ste', 'rules.md'), 'utf8');

process.stdout.write(JSON.stringify({
  hookSpecificOutput: { hookEventName: event, additionalContext: rules },
}));
