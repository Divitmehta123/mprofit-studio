# M.Profit Studio

A local-first portfolio decision workspace: exposure, concentration, scenario impact, and an investment decision journal in one responsive interface. It uses deterministic portfolio math and clearly labels fixture data; it makes no live market claims.

## Run

```bash
npm test
npm start
```

Open `http://127.0.0.1:4173`. The zero-dependency server binds to loopback only.

Pure financial functions live in `src/portfolio.js`; allocation totals are enforced, scenario impact is calculated against equity exposure, notes/theme persist locally, and tests cover math, ranking, formatting, invalid input, plus a real HTTP response. All values are illustrative fixture data, not advice.
