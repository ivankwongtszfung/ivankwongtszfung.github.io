# ivankwongtszfung.github.io

Production deploy of [Ivan Kwong's portfolio](https://www.ivankwong.ca) — served
by GitHub Pages from the repository root.

This repository contains **built static output only**. The source lives in the
[`portfolio`](https://github.com/ivankwongtszfung/portfolio) repo (Create React
App + TypeScript).

## Deploying an update

```bash
# in the portfolio source repo
CI=false GENERATE_SOURCEMAP=false npm run build

# copy the build output into this repo (keep CNAME), then commit & push
```

`CNAME` (`www.ivankwong.ca`) and `service-worker.js` (a self-unregistering
worker that clears any stale cache from the previous deploy) must be preserved
across deploys.
