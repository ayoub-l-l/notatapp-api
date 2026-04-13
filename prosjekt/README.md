Notatapplikasjon

Beskrivelse av løsningen

Dette er en enkel notatapplikasjon der brukeren kan:

Opprette tekstnotater med tittel og tekst
Opprette todo-lister med tittel og flere oppgaver
Se lagrede notater og todo-lister

Applikasjonen består av en klient (HTML, CSS og JavaScript) og en server (Node.js med Express).
Data lagres i en JSON-fil (data.json) slik at informasjonen ikke forsvinner når siden oppdateres.

Klienten kommuniserer med serveren gjennom et REST API ved hjelp av fetch().

Hvordan installere og starte serveren

Installer Node.js fra https://nodejs.org/
Åpne terminal i prosjektmappen
Installer nødvendige pakker:
npm install express body-parser
Start serveren:
node server.js
Serveren kjører på:
http://localhost:3000

Hvordan starte klienten

Åpne nettleseren
Gå til:
http://localhost:3000
Nå kan du bruke applikasjonen til å lage og vise notater og todo-lister