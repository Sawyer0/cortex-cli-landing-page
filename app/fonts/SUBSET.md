# Font subsets

Both files are modified versions of IBM Plex (SIL OFL 1.1, see `OFL.txt`). Because "Plex" is a
Reserved Font Name, the subsets are renamed internally to "Listrum Sans" and "Listrum Mono"; the
site's CSS refers to them through `next/font/local` in `app/layout.tsx`.

- `plex-sans-subset-wght-400-700.woff2`: IBM Plex Sans variable, `wght` axis limited to 400–700
  (the only weights the site uses).
- `plex-mono-subset-400.woff2`: IBM Plex Mono Regular.

TrueType hinting is dropped (browsers on macOS, iOS, Android and modern Windows rasterise without it).

Glyph coverage: Basic Latin, Latin-1 punctuation and symbols (U+00A0–00BF, × and ÷), en/em dashes,
curly quotes, bullet, ellipsis, primes, ™, arrows ← ↑ → ↓, minus, ≤ ≥. Accented letters are not
included; they fall back to the system font. If copy gains characters outside this set, regenerate:

```sh
U="U+0020-007E,U+00A0-00BF,U+00D7,U+00F7,U+2013-2014,U+2018-201E,U+2022,U+2026,U+2032-2033,U+2122,U+2190-2193,U+2212,U+2264-2265"
fonttools varLib.instancer IBMPlexSans-Variable.woff2 wght=400:700 -o sans.ttf
pyftsubset sans.ttf --unicodes="$U" --flavor=woff2 --no-hinting --output-file=plex-sans-subset-wght-400-700.woff2
pyftsubset IBMPlexMono-Regular.woff2 --unicodes="$U" --flavor=woff2 --no-hinting --output-file=plex-mono-subset-400.woff2
```

then rename the `name` table entries (IDs 1, 3, 4, 6, 16) away from "Plex".
