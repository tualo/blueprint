# Funktionales Beispielpaket

Dieses Beispiel zeigt, wie ein Tualo-Office-Paket mit den beschriebenen Regeln aufgebaut werden kann.

## Funktionsumfang

- Middleware zählt Route-Aufrufe in einer Session-Variablen
- Route `/blueprint/time` gibt die Serverzeit mit Zeitzone zurück
- UI zeigt die Zeit klassisch und modern an
- die UI wird als Lazy-Teil nachgeladen

## Beteiligte Komponenten

- `src/Middlewares/RequestCounterMiddleware.php` – zählt Aufrufe
- `src/Routes/TimeRoute.php` – stellt die Zeit-Route bereit
- `src/Services/TimeService.php` – erzeugt die Zeitdaten
- `src/js/classic/` – klassische UI-Komponenten
- `src/js/modern/` – moderne UI-Komponenten
- `src/js/both/Loader.js` – Singleton-Loader für die Lazy-UI
- `src/js/both/BluePrintTimeViewRoute.js` – UI-Route `#blueprint-timeview`
- `src/js/lazy/TimeLazyLoader.js` – Lazy-UI-Komponente

## UI-Routen-Muster

Die UI-Route sollte im Namespace `Tualo.routes.*` liegen, einen `statics.load`-Teil besitzen und im `handler.before` Vorbedingungen prüfen. Die eigentliche Anzeige erfolgt im `handler.action` über `Ext.getApplication().addView(...)` und kann dabei zusätzliche Parameter wie `type` oder `reportnumber` mitgeben.

## Backend-Response-Muster

Backend-Routen sollten die Tualo-Response-Struktur verwenden. Dabei werden Daten über `App::result('data', ...)`, `App::result('success', ...)` und `App::result('msg', ...)` gesetzt, statt rohe JSON-Ausgaben zu erzeugen.
