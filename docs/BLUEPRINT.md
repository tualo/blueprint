# Blueprint-Blueprint

Diese Datei beschreibt die Struktur und die Erwartung an ein Paket-Blueprint für Tualo-Office.

## Zweck

Das Blueprint-Paket soll als Referenz und Startpunkt für KI-Agenten dienen. Es soll sicherstellen, dass neue Pakete oder Änderungen an bestehenden Paketen denselben Aufbau und dieselben Qualitätsregeln folgen.

## Anforderungen an ein Paket

Ein Blueprint-Paket sollte nicht nur eine Struktur beschreiben, sondern auch ein funktionales Beispiel liefern. Das Beispiel in [EXAMPLE.md](EXAMPLE.md) zeigt, wie ein Paket mit Middleware, Route, Service und Lazy-UI aufgebaut sein kann.

Ein Paket sollte mindestens folgende Bestandteile aufweisen:

- `composer.json`
- `README.md`
- `VERSION`
- `docs/`
- `src/`

## Dokumentationsstruktur

Im Ordner `docs/` sollten enthalten sein:

- `STRUCTURE.md` – Beschreibung des Paketaufbaus
- `ARCHITECTURE.md` – Architekturregeln und Strukturprinzipien
- `AGENT_GUIDE.md` – Arbeitsanweisungen für Agenten
- `BEST_PRACTICES.md` – bewährte Vorgehensweisen

## Architekturprinzipien

- Backend und UI sauber trennen
- Routen schlank halten
- Business-Logik in `src/` ablegen
- UI nach Sencha-MVC strukturieren
- gemeinsame Assets in `both/`, UI-Varianten in `classic/` und `modern/`, Lazy-Assets in `lazy/`

## Agenten-Checkliste

Vor Änderungen sollten Agenten prüfen:

- [ ] Ist die Zielstruktur klar?
- [ ] Wo gehört die Funktion logisch hin?
- [ ] Ist die Trennung zwischen Route und Business-Logik gewahrt?
- [ ] Passt die UI-Struktur zur Sencha-MVC-Logik?
- [ ] Wird die Dokumentation ergänzt?

## Zielzustand

Ein Paket ist dann als gut vorbereitet zu betrachten, wenn ein Agent ohne weitere Rückfragen die Struktur, die Rollen der Ordner und die erwartete Arbeitsweise verstehen kann.
