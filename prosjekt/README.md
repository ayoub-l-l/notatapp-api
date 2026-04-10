# Notatapplikasjon med Todo-lister

## Beskrivelse av løsningen

Dette prosjektet er en enkel notatapplikasjon som lar brukeren:

* Opprette tekstnotater med tittel og innhold
* Opprette todo-lister med tittel og flere oppgaver
* Se lagrede notater og todo-lister

Applikasjonen består av:

* **Klient (frontend):** HTML, CSS og JavaScript
* **Server (backend):** Node.js med Express
* **Database:** Data lagres i en lokal JSON-fil (`data.json`)

Klienten kommuniserer med serveren gjennom et **REST API** ved hjelp av `fetch()`.

## Teknologier brukt

* HTML
* CSS
* JavaScript (vanlig JS)
* Node.js
* Express

## Filstruktur

```
prosjekt
│ server.js
│ data.json
│ package.json
└ public/
   ├ index.html
   ├ script.js
   └ style.css
```

## Hvordan installere og starte serveren

1. Installer Node.js (hvis ikke allerede installert)
   https://nodejs.org/

2. Åpne terminal i prosjektmappen

3. Installer nødvendige pakker:

```bash
npm install express body-parser
```

4. Start serveren:

```bash
node server.js
```

5. Du vil se:

```
Server kjører på http://localhost:3000
```

## Hvordan starte klienten

1. Åpne nettleseren
2. Gå til:

```
http://localhost:3000
```

3. Nå kan du:

* Lage notater
* Lage todo-lister
* Se lagret data

## Eksempler på bruk av API

### Opprette et notat

**POST /notes**

Body:

```json
{
  "title": "Handleliste",
  "text": "Kjøp melk"
}
```

### Hente alle notater

**GET /notes**

Svar:

```json
[
  {
    "title": "Handleliste",
    "text": "Kjøp melk"
  }
]
```

### Opprette en todo-liste

**POST /todos**

Body:

```json
{
  "title": "Ukens oppgaver",
  "items": [
    { "text": "Vaske rommet", "done": false },
    { "text": "Handle mat", "done": false }
  ]
}
```

### Hente alle todo-lister

**GET /todos**

Svar:

```json
[
  {
    "title": "Ukens oppgaver",
    "items": [
      { "text": "Vaske rommet", "done": false },
      { "text": "Handle mat", "done": false }
    ]
  }
]
```

## Funksjonalitet

* Lage og lagre notater
* Lage og lagre todo-lister
* Flere elementer per todo-liste
* Vise lagrede data i nettleser
* Data lagres permanent i `data.json`
