# ste-ko

Claude Code가 읽기 쉬운 글을 쓰게 하는 플러그인이다. ASD-STE100의 핵심 규칙을 한국어에 맞게 옮겼다.

- 세션을 시작할 때마다 규칙을 넣는다(SessionStart 훅).
- 서브에이전트를 시작할 때도 같은 규칙을 넣는다(SubagentStart 훅).
- `/ste`로 기존 글을 규칙대로 다시 쓴다. 인자로 파일 경로를 주거나, 비워 두면 직전 답변을 다시 쓴다.

## 설치

Claude Code에서 실행한다. node가 PATH에 있어야 한다.

```
/plugin marketplace add lksr202/ste-ko
/plugin install ste-ko@ste-ko
```

## 규칙 수정

규칙은 `skills/ste/rules.md` 한 파일에 있다. 훅과 `/ste`가 이 파일을 같이 쓴다.
고친 뒤 `plugin.json`의 `version`을 올리고 push한다. 각 PC에서는 `/plugin update ste-ko`로 받는다.
