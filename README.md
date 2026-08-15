# Blueprint Package

Dieses Paket dient als funktionales Beispiel für ein Tualo-Office-Paket.

## Beispiel-Funktion

- Eine Backend-Middleware zählt Route-Aufrufe in einer Session-Variablen
- Die Route `/blueprint/time` gibt die Serverzeit mit Zeitzone zurück
- Die UI stellt die abgefragte Zeit im klassischen und modernen ExtJS-Stil dar
- Die UI wird als Lazy-Teil nachgeladen

## Struktur

- `src/Middlewares/` enthält die Middleware
- `src/Routes/` enthält die Route
- `src/Services/` enthält die Business-Logik
- `src/js/` enthält die UI-Komponenten
