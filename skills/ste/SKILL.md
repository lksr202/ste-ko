---
name: ste
description: Rewrite text or a document so it is easy to read, using the ste-ko writing rules (plain Korean/English based on ASD-STE100). Use when the user types /ste, or asks to rewrite, simplify, or clean up text so it is easier to understand.
---

# ste

Read `rules.md` in this skill's base directory. Rewrite the target with those rules.

Target: $ARGUMENTS

- A file path: read the file and show the rewritten text. Overwrite the file only when the user asks.
- Empty: rewrite your previous reply.

Keep every fact, number, path, identifier, and code block. Change only the prose.
