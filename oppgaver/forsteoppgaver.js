// ===== A. STRENGER =====
//https://www.w3schools.com/js/js_string_methods.asp
// A1 – Lengde
function lengthOf(text) {
  // Skriv svaret på oppgave A1 her:

    return text.length;
  // Her slutter svaret på oppgave A1
}

// A2 – Første og siste tegn
function firstChar(text) {
  // Skriv svaret på oppgave A2 her:
    return text.charAt(0);
  // Her slutter svaret på oppgave A2
}

function lastChar(text) {
  // Skriv svaret på oppgave A2 her:
  return text[text.length - 1];
  // Her slutter svaret på oppgave A2
}

// A3 – Store bokstaver
function shout(text) {
  // Skriv svaret på oppgave A3 her:
  return text.toUpperCase();
  // Her slutter svaret på oppgave A3
}

// A4 – Sjekk prefiks
function startsWithHttp(url) {
  // Skriv svaret på oppgave A4 her:
if (url.startsWith("http://") || url.startsWith("https://")) {
    return true;}
    else {
      return false;
    }
  // Her slutter svaret på oppgave A4
}

// A5 – Finn spørsmålstegn
function hasQuestionMark(text) {
  // Skriv svaret på oppgave A5 her:
  if(text.includes("?")){
    return true;
  }
  else {
    return false;
  }
  // Her slutter svaret på oppgave A5
}

// A6 – Del URL i path og query
function splitPathAndQuery(url) {
  // Skriv svaret på oppgave A6 her:
if(url.includes("?")){
  let deler = url.split("?");
  return {
    path: deler[0],
    query: deler[1]
  };
}
else {
  return {  
    path: url,
    query: null
  };
  // Her slutter svaret på oppgave A6
}}

// A7 – Hent domenenavn
function getDomain(url) {
  // Skriv svaret på oppgave A7 her:

  // Her slutter svaret på oppgave A7
}

// A8 – Bytt ut mellomrom
function toSlug(text) {
  // Skriv svaret på oppgave A8 her:

  // Her slutter svaret på oppgave A8
}

// A9 – Tell bokstav
function tellChar(text, char) {
  // Skriv svaret på oppgave A9 her:

  // Her slutter svaret på oppgave A9
}

// A10 – Rens whitespace
function clean(text) {
  // Skriv svaret på oppgave A10 her:

  // Her slutter svaret på oppgave A10
}

// ===== B. DATATYPER =====

// B1 – Type-navn
function typeOf(value) {
  // Skriv svaret på oppgave B1 her:

  // Her slutter svaret på oppgave B1
}

// B2 – Til tall
function toNumber(text) {
  // Skriv svaret på oppgave B2 her:

  // Her slutter svaret på oppgave B2
}

// B3 – Sjekk heltall
function isInteger(value) {
  // Skriv svaret på oppgave B3 her:

  // Her slutter svaret på oppgave B3
}

// B4 – Trygg parse av tall
function safeParseInt(text) {
  // Skriv svaret på oppgave B4 her:

  // Her slutter svaret på oppgave B4
}

// B5 – Boolean fra streng
function toBoolean(text) {
  // Skriv svaret på oppgave B5 her:

  // Her slutter svaret på oppgave B5
}

// B6 – Kombiner streng + tall
function formatAge(name, age) {
  // Skriv svaret på oppgave B6 her:

  // Her slutter svaret på oppgave B6
}

// ===== C. OBJEKTER =====

// C1 – Lag person-objekt
function makePerson(name, age) {
  // Skriv svaret på oppgave C1 her:

  // Her slutter svaret på oppgave C1
}

// C2 – Les felt
function getName(person) {
  // Skriv svaret på oppgave C2 her:

  // Her slutter svaret på oppgave C2
}

function getAge(person) {
  // Skriv svaret på oppgave C2 her:

  // Her slutter svaret på oppgave C2
}

// C3 – Oppdater felt
function birthday(person) {
  // Skriv svaret på oppgave C3 her:

  // Her slutter svaret på oppgave C3
}

// C4 – Slå sammen to objekter
function merge(a, b) {
  // Skriv svaret på oppgave C4 her:

  // Her slutter svaret på oppgave C4
}

// C5 – Header-liste til objekt
function headersToObject(lines) {
  // Skriv svaret på oppgave C5 her:

  // Her slutter svaret på oppgave C5
}

// C6 – Plukk ut felt
function pick(obj, key) {
  // Skriv svaret på oppgave C6 her:

  // Her slutter svaret på oppgave C6
}

// C7 – Bygg query-objekt
function parseQuery(queryString) {
  // Skriv svaret på oppgave C7 her:

  // Her slutter svaret på oppgave C7
}

// C8 – Objekt til query-streng
function toQuery(params) {
  // Skriv svaret på oppgave C8 her:

  // Her slutter svaret på oppgave C8
}