# Font subsets

Both files are modified versions of IBM Plex (SIL OFL 1.1, see `OFL.txt`). Because "Plex" is a
Reserved Font Name, the subsets are renamed internally to "Listrum Sans" and "Listrum Mono"; the
site loads the sans subset through `next/font/local` in `app/layout.tsx`. The mono subset is small
enough to embed: `listrum-mono.css` carries it as a base64 data URI, so it needs no request of its own.

- `plex-sans-subset-wght-400-700.woff2`: IBM Plex Sans variable, `wght` axis limited to 400–700
  (the only weights the site uses).
- `plex-mono-subset-400.woff2`: IBM Plex Mono Regular.

TrueType hinting is dropped (browsers on macOS, iOS, Android and modern Windows rasterise without it).

Glyph coverage: Basic Latin, no-break space, ©, ·, ×, en/em dashes, curly quotes, bullet and ellipsis.
Accented letters, arrows and other symbols are not included; they fall back to the system font. Only
the OpenType features browsers apply by default are kept (`kern`, `liga`, `calt`, `ccmp`, `locl`,
`mark`, `mkmk`, `clig`); the fraction, numerator and denominator glyphs are dropped. If copy gains
characters outside this set, regenerate:

```sh
U="U+0020-007E,U+00A0,U+00A9,U+00B7,U+00D7,U+2013-2014,U+2018-2019,U+201C-201D,U+2022,U+2026"
F="kern,liga,calt,ccmp,locl,mark,mkmk,clig"
fonttools varLib.instancer IBMPlexSans-Variable.woff2 wght=400:700 -o sans.ttf
pyftsubset sans.ttf --unicodes="$U" --flavor=woff2 --no-hinting --layout-features="$F" --output-file=plex-sans-subset-wght-400-700.woff2
pyftsubset IBMPlexMono-Regular.woff2 --unicodes="$U" --flavor=woff2 --no-hinting --layout-features="$F" --output-file=plex-mono-subset-400.woff2
```

then rename the `name` table entries (IDs 1, 3, 4, 6, 16) away from "Plex".

After regenerating the mono subset, rebuild the embedded copy:

```sh
python3 -c 'import base64,re,pathlib as p; c=p.Path("listrum-mono.css"); b=base64.b64encode(p.Path("plex-mono-subset-400.woff2").read_bytes()).decode(); c.write_text(re.sub(r"base64,[A-Za-z0-9+/=]+", "base64,"+b, c.read_text()))'
```
