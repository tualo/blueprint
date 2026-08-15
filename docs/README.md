# Paket-Blueprint für Tualo-Office

Diese Blueprint dient primär KI-Agenten als Arbeitsgrundlage für die Erstellung neuer Pakete oder die Anpassung bestehender Pakete im Tualo-Office-Stil.

## Ziel

Die Blueprint soll sicherstellen, dass neue Pakete:

- konsistent aufgebaut sind
- die vorhandene Trennung von Backend, UI und Routing beachten
- sich an die Sencha-ExtJS-MVC-Struktur orientieren
- für zukünftige Agenten nachvollziehbar und wiederverwendbar sind

## Grundprinzipien

1. Routen bleiben schlank
2. Business-Logik wird in Klassen unter `src/` abgelegt
3. UI wird nach Sencha-MVC aufgebaut
4. Struktur und Dokumentation bleiben konsistent
5. Erweiterungen werden nachvollziehbar und sauber registriert

## Empfohlene Paketstruktur

```text
package/
  composer.json
  README.md
  VERSION
  docs/
    STRUCTURE.md
    ARCHITECTURE.md
    AGENT_GUIDE.md
    BEST_PRACTICES.md
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

## Funktionales Beispiel

Ein funktionales Beispiel für dieses Blueprint-Paket befindet sich in [EXAMPLE.md](EXAMPLE.md). Es demonstriert:

- eine Backend-Middleware, die Route-Aufrufe in einer Session-Variablen zählt
- eine Route `/blueprint/time`, die Serverzeit mit Zeitzone zurückgibt
- eine klassische und moderne UI-Komponente für die Darstellung
- eine Lazy-UI, die nachgeladen wird

## Wichtige UI-Regel für den Compiler

Der Lazy-Loader muss im Ordner `src/js/both/` liegen und als Singleton-Klasse mit `Ext.define('Tualo.*', { singleton: true })` definiert werden. Dadurch kann der Compiler den Loader zuverlässig erkennen und laden.

## UI-Routenregel

UI-Routen sollten im Namespace `Tualo.routes.*` definiert werden. Eine UI-Route besteht typischerweise aus:

- `statics.load`, um Einträge für die Navigation oder Menüstruktur bereitzustellen
- `url`, um die Route zu adressieren
- `handler.before`, um Vorbedingungen zu prüfen oder Daten nachzuladen
- `handler.action`, um die eigentliche UI-Ausgabe auszulösen

Beispiel:

```javascript
Ext.define('Tualo.routes.blueprint.TimeView', {
    statics: {
        load: async function () {
            return [{
                name: 'TimeView Blueprint',
                path: '#blueprint-timeview'
            }];
        }
    },
    url: 'blueprint-timeview',
    handler: {
        action: function () {
            Ext.getApplication().addView('Tualo.Blueprint.lazy.TimePanel', {
                type: type,
                reportnumber: reportnumber
            });
        },
        before: function (action) {
            action.resume();
        }
    }
});
```

## Backend-Response-Regel

Backend-Routen sollten die Tualo-Response-Struktur verwenden. Statt rohe JSON-Antworten direkt zurückzugeben, sollten Routen über `App::result('data', ...)`, `App::result('success', ...)` und `App::result('msg', ...)` arbeiten, wie im Beispiel in `src/Routes/TimeRoute.php` dargestellt.

## Arbeitsanleitung für Agenten

### 1. Verstehen

Bevor du Änderungen vornimmst, prüfe:

- die Paketbeschreibung in `docs/STRUCTURE.md`
- die Architekturregeln in `docs/ARCHITECTURE.md`
- die Arbeitsanweisungen in `docs/AGENT_GUIDE.md`
- die Best-Practice-Regeln in `docs/BEST_PRACTICES.md`

### 2. Struktur wählen

- Backend-Logik gehört in `src/Services/`, `src/Models/` oder `src/Tasks/`
- Routen gehen nach `src/Routes/`
- Middleware nach `src/Middlewares/`
- UI-Komponenten nach `src/js/classic/` oder `src/js/modern/`
- gemeinsame UI-Assets kommen nach `src/js/both/`
- nachladbare UI-Assets nach `src/js/lazy/`

### 3. Registrieren

- zentrale Includes über `src/functions.php`
- erforderliche Compiler- oder Loader-Anpassungen ergänzen
- Paket-Registrierung in `composer.json` sicherstellen

### 4. Dokumentieren

Wenn Struktur oder Verhalten geändert werden, ergänze die Paket-Dokumentation in `docs/`.

## Kurzregel für Agenten

Ein neues Paket oder Feature soll so angelegt werden, dass ein anderer Bearbeiter sofort erkennen kann:

- wo die Routen liegen
- wo die Business-Logik liegt
- wie die UI aufgebaut ist
- wie die Registrierung funktioniert
- wo die Dokumentation zu finden ist
