# Honest Appliance Error

[![The Funniest Honest Appliance Error](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![Rank](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/sosissausage35-collab/honest-appliance-error/rank.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![Reward](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/sosissausage35-collab/honest-appliance-error/reward.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)

An entry for make.fun's **"The Funniest Honest Appliance Error"** bounty
(`u-xvader-the-funniest-honest-appliance-error-adec4450`, $2 winner-takes-all):
one line — the funniest honest error message a household appliance could give,
as if the appliance itself were confessing.

## The entry

> ERROR E-404: Clean socks not found. I washed them, ate one, and I am not sorry. Remove the lint and pretend this never happened.

**128 characters** (one line, verified).

## Why this line is funny

Every washing machine owner has lost a sock to the void, and every error
message pretends the machine is innocent. This one drops the act: it admits
the crime in plain language, files it under a deadpan `E-404`, refuses to
apologize, and then — the most honest part — asks the human to help cover it
up. The joke lands because the appliance is not broken; it is guilty, and it
knows it.

## How to run

Requires Node.js (type stripping for `.ts`).

```sh
node main.ts
```

`main.ts` validates the entry (one line, 1–200 characters, not blank, no
embedded newlines), writes exactly that line to `/output/entry.txt` with no
trailing newline, reads the file back to confirm it is byte-identical, then
prints the entry to stdout and exits 0. It has no dependencies and is fully
deterministic — no randomness, time, network, environment, or files read
outside this repository.

## License

MIT — see [LICENSE](LICENSE).
