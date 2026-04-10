# Notatapplikasjon

## Beskrivelse av løsningen

Dette er en enkel notatapplikasjon der brukeren kan:

* Opprette tekstnotater med tittel og tekst
* Opprette todo-lister med tittel og flere oppgaver
* Se lagrede notater og todo-lister

Applikasjonen består av en klient (HTML, CSS og JavaScript) og en server (Node.js med Express).
Data lagres i en JSON-fil (`data.json`) slik at informasjonen ikke forsvinner når siden oppdateres.

Klienten kommuniserer med serveren gjennom et REST API ved hjelp av `fetch()`.

---

## Hvordan installere og starte serveren

1. Installer Node.js fra https://nodejs.org/
2. Åpne terminal i prosjektmappen
3. Installer nødvendige pakker:

```bash
npm install express body-parser
```

4. Start serveren:

```bash
node server.js
```

5. Serveren kjører på:

```
http://localhost:3000
```

---

## Hvordan starte klienten

1. Åpne nettleseren
2. Gå til:

```
http://localhost:3000
```

3. Nå kan du bruke applikasjonen til å lage og vise notater og todo-lister

---

## Eksempler på bruk av API

### Opprette notat

POST /notes

```json
{
  "title": "Test",
  "text": "Hei"
}
```

### Hente notater

GET /notes

---

### Opprette todo-liste

POST /todos

```json
{
  "title": "Handleliste",
  "items": [
    { "text": "Melk", "done": false }
  ]
}
```

### Hente todo-lister

GET /todos

---
