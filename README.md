# The World in One Page — 18 November 2026

[![news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/rembokuy/make-fun-news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/rembokuy/make-fun-news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

Entry for the [make.fun bounty "Sum up 18 November's world news in one image"](https://make.fun/bounty/news-image-20261118) (news-image-20261118).

## The image

`entry.png` is a one-page newspaper infographic, **"The World in One Page"**, summing up Wednesday 18 November 2026 in seven stories, each verified from at least two trusted sources:

1. **Xi and Putin meet in Shenzhen** ahead of the first-ever trilateral summit with Trump (AFP / AP, Reuters)
2. **Iran fires drones at Kuwait and Bahrain** after a U.S. strike on Qeshm Island (Reuters / Wall Street Journal, Defence Blog)
3. **Mary Peltola wins Alaska's Senate race**; Democrats take a 56–44 majority (Associated Press, Alaska Public Media)
4. **Anthropic prices its IPO at $83 a share**, above its $70–$78 range (Reuters / Bloomberg, Motley Fool)
5. **WHO keeps Congo Ebola a global emergency** as cases pass 11,000 (WHO, CDC)
6. **Voyager 1 reaches one light-day from Earth**, about 16.1 billion miles (NASA / Smithsonian, USA Today)
7. **Category 5 Cyclone Xavier bears down on the Cook Islands** (NZ MetService, Fiji Meteorological Service)

The image was rendered from hand-written HTML (`render.html`) with headless Chrome — no AI image generator, so every headline is sharp and legible.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`). It runs twice with byte-identical output and no network.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
