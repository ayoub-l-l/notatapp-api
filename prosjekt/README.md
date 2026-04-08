ette prosjektet er en enkel nettside der du kan skrive notater og lage en todo-liste. Når du skriver noe og trykker på knappene, blir det lagt til i en liste på siden.

Koden er skrevet i JavaScript og bruker også HTML for å vise ting på skjermen.

Når siden starter, henter programmet lagrede data fra nettleseren. Dette gjøres med localStorage. Dataene er lagret som JSON, som er en måte å lagre informasjon på i tekstform.

Programmet har en funksjon som heter render. Den sørger for at alt som er lagret blir vist på skjermen. Først tømmes listene, og så legges alle notater og oppgaver inn igjen. Dette gjør at siden alltid viser riktig informasjon.

Når du lager et nytt notat, henter programmet teksten fra input-feltet. Hvis feltet er tomt, skjer ingenting. Hvis det er tekst, blir det laget et objekt med teksten. Dette objektet legges inn i en liste, og listen lagres i localStorage. Etterpå oppdateres siden slik at du ser notatet.

Todo-listen fungerer på samme måte. Når du legger til en oppgave, blir den lagret med en ekstra verdi som heter "done". Den sier om oppgaven er ferdig eller ikke.

Hver todo har også en checkbox. Når du klikker på den, blir oppgaven markert som ferdig. Programmet lagrer dette, og oppdaterer listen på nytt.

Alt i programmet henger sammen slik:
Først lastes siden, så hentes data, så vises de på skjermen. Når du legger til noe nytt, blir det lagret og vist med en gang.

Dette prosjektet viser hvordan man kan bruke JavaScript til å lage en enkel app som lagrer data i nettleseren uten å bruke en server.