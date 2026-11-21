# The World Today — Friday, 20 November 2026

Entry for make.fun's "Sum up 20 November's world news in one image" bounty (news-image-20261120).

## The image

`entry.png` is a newspaper front page summing up Friday 20 November 2026 in five stories. The image is a 1024×1024 PNG, under the 1 MiB limit, with the masthead and the date set large so the day is clear at a glance:

1. **ICJ: Myanmar guilty of genocide** — the International Court of Justice ruled 9–6 that Myanmar committed genocide against the Rohingya, the first time the court has found a state guilty of genocide.
2. **Trump, Xi & Putin meet in Shenzhen** — the first three-way summit of the three leaders, ending in a joint four-point peace declaration after about 70 minutes, with no breakthrough on Ukraine, Iran or nuclear issues.
3. **Russia strikes Kyiv overnight** — a large overnight missile attack on strategic infrastructure in Kyiv; the Austrian and Dutch embassies were damaged.
4. **Houthi missile hits Riyadh tower** — a Houthi missile damaged a skyscraper in Riyadh's financial district (the Public Investment Fund tower).
5. **Markets slide: Nikkei −4.8%** — US stocks fell for a fifth straight day (S&P −2%); the Nikkei dropped 4.8% after Anthropic's Nasdaq debut raised AI valuation doubts.

## How to run

Requires Node 22. The program copies `entry.png` to the output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/entry.png`. Without `MAKEFUN_OUTPUT_DIR` it writes to `/output/entry.png`.
