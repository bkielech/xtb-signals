# XTB Signal Alerts — Darmowa Aplikacja PWA

## 100% darmowe — bez klucza API

Dane pobierane bezpośrednio ze **stooq.pl** przez CORS proxy.
Cała analiza techniczna działa lokalnie w przeglądarce.

## Instalacja na Androidzie

### 1. Zahostuj (wybierz jedno)

**GitHub Pages (najłatwiejsze):**
1. Utwórz repo na GitHub, wrzuć 4 pliki: `index.html`, `manifest.json`, `sw.js`, `icon.svg`
2. Settings → Pages → Source: main → Save
3. Link: `https://twojanazwa.github.io/nazwa-repo/`

**Netlify (drag & drop):**
1. Wejdź na https://app.netlify.com/drop
2. Przeciągnij folder → gotowe, masz link HTTPS

### 2. Zainstaluj na telefonie
1. Otwórz link w Chrome
2. Menu (⋮) → "Zainstaluj aplikację"
3. Gotowe — apka na ekranie głównym

### 3. Użytkowanie
- **START** → ładuje 60 dni historii ze stooq.pl, potem co 60s odświeża kursy
- Gdy TA ≥70% → alert z Entry/SL/TP + różnicami (np. SL: 6800 (-30))
- Ciche powiadomienia push (bez dźwięku/wibracji)
- Przy każdym sygnale → linki do Barchart.com i Stooq.pl do sprawdzenia kontekstu makro

## Instrumenty
| Symbol | Instrument | Stooq | Spread XTB |
|--------|-----------|-------|------------|
| US500 | S&P 500 Futures | us500 | 0.4 |
| EU50 | Euro Stoxx 50 Fut. | eu50 | 1.6 |
| GOLD | XAU/USD | xauusd | 0.35 |
| OIL | Crude Oil WTI | cl.f | 0.04 |
| WIG20 | WIG20 Index | wig20 | 2.0 |

## Analiza techniczna
5 wskaźników, każdy daje punkty:
- **RSI 14** (wykupiony/wyprzedany)
- **SMA crossover** (10 vs 20)
- **Bollinger Bands** (przebicie wstęg)
- **MACD histogram**
- **Momentum 5-okresowy**

Sygnał generowany gdy suma ≥70 punktów.
SL = 1.5× ATR, TP = 2.5× ATR → R:R ≈ 1:1.7

## Różnica od wersji z API
- ❌ Brak walidacji makro AI (za to linki do ręcznego sprawdzenia)
- ❌ Brak real-time ticków (odświeżanie co 60s ze stooq.pl)
- ✅ Kompletnie darmowe
- ✅ Bez klucza API
- ✅ Działa offline po załadowaniu
