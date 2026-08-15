# Implementationsvorlage für neue Pakete

Diese Vorlage kann von KI-Agenten als Startpunkt genutzt werden, wenn ein neues Tualo-Office-Paket angelegt wird.

## 1. Paketinitialisierung

Erstelle zunächst:

- `composer.json`
- `README.md`
- `VERSION`
- `docs/`
- `src/`

## 2. Grundstruktur

Erstelle die folgenden Ordner und Dateien:

```text
src/
  functions.php
  Compiler.php
  Routes/
  Middlewares/
  Services/
  Models/
  Tasks/
  js/
    both/
    classic/
      view/
      model/
      controller/
    modern/
      view/
      model/
      controller/
    lazy/
```

## 3. Regeln für die Umsetzung

- Routen nur als dünne Einstiegspunkte
- Business-Logik in Services, Models oder Tasks
- UI-Komponenten in Sencha-MVC-Struktur
- Dokumentation in `docs/` ergänzen
- notwendige Registrierung in `functions.php` oder Compiler sicherstellen

## 4. Abschlusscheck

Prüfe vor dem Abschluss:

- [ ] Ist die Paketstruktur konsistent?
- [ ] Sind Routen und Business-Logik getrennt?
- [ ] Ist die UI nach MVC organisiert?
- [ ] Sind Dokumentation und Einstiegspunkte vorhanden?
