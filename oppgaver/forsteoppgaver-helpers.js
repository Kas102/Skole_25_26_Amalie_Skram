// ===== HJELPERFUNKSJONER OG EVENT-LISTENERS =====
// Denne filen inneholder all error-handling og UI-logikk.
// Elevene trenger ikke å se denne filen.

// ===== A. STRENGER =====

// A1 – Lengde
document.getElementById("btnA1").addEventListener("click", function() {
  const input = document.getElementById("inputA1").value;
  if (!input.trim()) {
    document.getElementById("outputA1").innerText = "❌ Vennligst skriv inn tekst";
    return;
  }
  try {
    const result = lengthOf(input);
    if (typeof result !== 'number') {
      document.getElementById("outputA1").innerText = "❌ Funksjonen må returnere et tall";
      return;
    }
    document.getElementById("outputA1").innerText = `Lengden: ${result}`;
  } catch (e) {
    document.getElementById("outputA1").innerText = `❌ Feil: ${e.message}`;
  }
});

// A2 – Første og siste tegn
document.getElementById("btnA2").addEventListener("click", function() {
  const input = document.getElementById("inputA2").value;
  if (!input.trim()) {
    document.getElementById("outputA2").innerText = "❌ Vennligst skriv inn tekst";
    return;
  }
  try {
    const first = firstChar(input);
    const last = lastChar(input);
    document.getElementById("outputA2").innerText = `Første: "${first}", Siste: "${last}"`;
  } catch (e) {
    document.getElementById("outputA2").innerText = `❌ Feil: ${e.message}`;
  }
});

// A3 – Store bokstaver
document.getElementById("btnA3").addEventListener("click", function() {
  const input = document.getElementById("inputA3").value;
  if (!input.trim()) {
    document.getElementById("outputA3").innerText = "❌ Vennligst skriv inn tekst";
    return;
  }
  try {
    const result = shout(input);
    if (typeof result !== 'string') {
      document.getElementById("outputA3").innerText = "❌ Funksjonen må returnere en streng";
      return;
    }
    document.getElementById("outputA3").innerText = `Resultat: ${result}`;
  } catch (e) {
    document.getElementById("outputA3").innerText = `❌ Feil: ${e.message}`;
  }
});

// A4 – Sjekk prefiks
document.getElementById("btnA4").addEventListener("click", function() {
  const input = document.getElementById("inputA4").value;
  if (!input.trim()) {
    document.getElementById("outputA4").innerText = "❌ Vennligst skriv inn URL";
    return;
  }
  try {
    const result = startsWithHttp(input);
    if (typeof result !== 'boolean') {
      document.getElementById("outputA4").innerText = "❌ Funksjonen må returnere true eller false";
      return;
    }
    document.getElementById("outputA4").innerText = `Starter med http(s): ${result}`;
  } catch (e) {
    document.getElementById("outputA4").innerText = `❌ Feil: ${e.message}`;
  }
});

// A5 – Finn spørsmålstegn
document.getElementById("btnA5").addEventListener("click", function() {
  const input = document.getElementById("inputA5").value;
  if (!input.trim()) {
    document.getElementById("outputA5").innerText = "❌ Vennligst skriv inn tekst";
    return;
  }
  try {
    const result = hasQuestionMark(input);
    if (typeof result !== 'boolean') {
      document.getElementById("outputA5").innerText = "❌ Funksjonen må returnere true eller false";
      return;
    }
    document.getElementById("outputA5").innerText = `Inneholder ?: ${result}`;
  } catch (e) {
    document.getElementById("outputA5").innerText = `❌ Feil: ${e.message}`;
  }
});

// A6 – Del URL i path og query
document.getElementById("btnA6").addEventListener("click", function() {
  const input = document.getElementById("inputA6").value;
  if (!input.trim()) {
    document.getElementById("outputA6").innerText = "❌ Vennligst skriv inn en URL";
    return;
  }
  try {
    const result = splitPathAndQuery(input);
    if (!result || typeof result !== 'object') {
      document.getElementById("outputA6").innerText = "❌ Funksjonen må returnere et objekt";
      return;
    }
    document.getElementById("outputA6").innerText = `Path: "${result.path}", Query: "${result.query}"`;
  } catch (e) {
    document.getElementById("outputA6").innerText = `❌ Feil: ${e.message}`;
  }
});

// A7 – Hent domenenavn
document.getElementById("btnA7").addEventListener("click", function() {
  const input = document.getElementById("inputA7").value;
  if (!input.trim()) {
    document.getElementById("outputA7").innerText = "❌ Vennligst skriv inn URL";
    return;
  }
  try {
    const result = getDomain(input);
    if (typeof result !== 'string') {
      document.getElementById("outputA7").innerText = "❌ Funksjonen må returnere en streng";
      return;
    }
    document.getElementById("outputA7").innerText = `Domene: ${result}`;
  } catch (e) {
    document.getElementById("outputA7").innerText = `❌ Feil: ${e.message}`;
  }
});

// A8 – Bytt ut mellomrom
document.getElementById("btnA8").addEventListener("click", function() {
  const input = document.getElementById("inputA8").value;
  if (!input.trim()) {
    document.getElementById("outputA8").innerText = "❌ Vennligst skriv inn tekst";
    return;
  }
  try {
    const result = toSlug(input);
    if (typeof result !== 'string') {
      document.getElementById("outputA8").innerText = "❌ Funksjonen må returnere en streng";
      return;
    }
    document.getElementById("outputA8").innerText = `Slug: ${result}`;
  } catch (e) {
    document.getElementById("outputA8").innerText = `❌ Feil: ${e.message}`;
  }
});

// A9 – Tell bokstav
document.getElementById("btnA9").addEventListener("click", function() {
  const text = document.getElementById("inputA9text").value;
  const char = document.getElementById("inputA9char").value;
  if (!text.trim() || !char.trim()) {
    document.getElementById("outputA9").innerText = "❌ Vennligst skriv inn både tekst og tegn";
    return;
  }
  try {
    const result = tellChar(text, char);
    if (typeof result !== 'number') {
      document.getElementById("outputA9").innerText = "❌ Funksjonen må returnere et tall";
      return;
    }
    document.getElementById("outputA9").innerText = `"${char}" forekommer ${result} ganger`;
  } catch (e) {
    document.getElementById("outputA9").innerText = `❌ Feil: ${e.message}`;
  }
});

// A10 – Rens whitespace
document.getElementById("btnA10").addEventListener("click", function() {
  const input = document.getElementById("inputA10").value;
  if (!input) {
    document.getElementById("outputA10").innerText = "❌ Vennligst skriv inn tekst";
    return;
  }
  try {
    const result = clean(input);
    if (typeof result !== 'string') {
      document.getElementById("outputA10").innerText = "❌ Funksjonen må returnere en streng";
      return;
    }
    document.getElementById("outputA10").innerText = `"${result}"`;
  } catch (e) {
    document.getElementById("outputA10").innerText = `❌ Feil: ${e.message}`;
  }
});

// ===== B. DATATYPER =====

// B1 – Type-navn
document.getElementById("btnB1").addEventListener("click", function() {
  const input = document.getElementById("inputB1").value;
  if (!input.trim()) {
    document.getElementById("outputB1").innerText = "❌ Vennligst skriv inn verdi";
    return;
  }
  try {
    const result = typeOf(input);
    if (typeof result !== 'string') {
      document.getElementById("outputB1").innerText = "❌ Funksjonen må returnere en streng";
      return;
    }
    document.getElementById("outputB1").innerText = `Type: ${result}`;
  } catch (e) {
    document.getElementById("outputB1").innerText = `❌ Feil: ${e.message}`;
  }
});

// B2 – Til tall
document.getElementById("btnB2").addEventListener("click", function() {
  const input = document.getElementById("inputB2").value;
  if (!input.trim()) {
    document.getElementById("outputB2").innerText = "❌ Vennligst skriv inn tekst";
    return;
  }
  try {
    const result = toNumber(input);
    if (typeof result !== 'number') {
      document.getElementById("outputB2").innerText = "❌ Funksjonen må returnere et tall";
      return;
    }
    document.getElementById("outputB2").innerText = `Tall: ${result}`;
  } catch (e) {
    document.getElementById("outputB2").innerText = `❌ Feil: ${e.message}`;
  }
});

// B3 – Sjekk heltall
document.getElementById("btnB3").addEventListener("click", function() {
  const input = document.getElementById("inputB3").value;
  if (!input.trim()) {
    document.getElementById("outputB3").innerText = "❌ Vennligst skriv inn tall";
    return;
  }
  try {
    const result = isInteger(parseFloat(input));
    if (typeof result !== 'boolean') {
      document.getElementById("outputB3").innerText = "❌ Funksjonen må returnere true eller false";
      return;
    }
    document.getElementById("outputB3").innerText = `Er heltall: ${result}`;
  } catch (e) {
    document.getElementById("outputB3").innerText = `❌ Feil: ${e.message}`;
  }
});

// B4 – Trygg parse av tall
document.getElementById("btnB4").addEventListener("click", function() {
  const input = document.getElementById("inputB4").value;
  if (!input.trim()) {
    document.getElementById("outputB4").innerText = "❌ Vennligst skriv inn tekst";
    return;
  }
  try {
    const result = safeParseInt(input);
    if (!result || typeof result !== 'object') {
      document.getElementById("outputB4").innerText = "❌ Funksjonen må returnere et objekt";
      return;
    }
    document.getElementById("outputB4").innerText = JSON.stringify(result);
  } catch (e) {
    document.getElementById("outputB4").innerText = `❌ Feil: ${e.message}`;
  }
});

// B5 – Boolean fra streng
document.getElementById("btnB5").addEventListener("click", function() {
  const input = document.getElementById("inputB5").value;
  if (!input.trim()) {
    document.getElementById("outputB5").innerText = "❌ Vennligst skriv inn tekst";
    return;
  }
  try {
    const result = toBoolean(input);
    document.getElementById("outputB5").innerText = `Resultat: ${result}`;
  } catch (e) {
    document.getElementById("outputB5").innerText = `❌ Feil: ${e.message}`;
  }
});

// B6 – Kombiner streng + tall
document.getElementById("btnB6").addEventListener("click", function() {
  const name = document.getElementById("inputB6name").value;
  const age = document.getElementById("inputB6age").value;
  if (!name.trim() || !age.trim()) {
    document.getElementById("outputB6").innerText = "❌ Vennligst skriv inn både navn og alder";
    return;
  }
  try {
    const result = formatAge(name, age);
    if (typeof result !== 'string') {
      document.getElementById("outputB6").innerText = "❌ Funksjonen må returnere en streng";
      return;
    }
    document.getElementById("outputB6").innerText = result;
  } catch (e) {
    document.getElementById("outputB6").innerText = `❌ Feil: ${e.message}`;
  }
});

// ===== C. OBJEKTER =====

// C1 – Lag person-objekt
document.getElementById("btnC1").addEventListener("click", function() {
  const name = document.getElementById("inputC1name").value;
  const age = document.getElementById("inputC1age").value;
  if (!name.trim() || !age.trim()) {
    document.getElementById("outputC1").innerText = "❌ Vennligst skriv inn både navn og alder";
    return;
  }
  try {
    const result = makePerson(name, age);
    if (!result || typeof result !== 'object') {
      document.getElementById("outputC1").innerText = "❌ Funksjonen må returnere et objekt";
      return;
    }
    document.getElementById("outputC1").innerText = JSON.stringify(result);
  } catch (e) {
    document.getElementById("outputC1").innerText = `❌ Feil: ${e.message}`;
  }
});

// C2 – Les felt
document.getElementById("btnC2").addEventListener("click", function() {
  const name = document.getElementById("inputC2name").value;
  const age = document.getElementById("inputC2age").value;
  if (!name.trim() || !age.trim()) {
    document.getElementById("outputC2").innerText = "❌ Vennligst skriv inn både navn og alder";
    return;
  }
  try {
    const person = makePerson(name, age);
    if (!person || typeof person !== 'object') {
      document.getElementById("outputC2").innerText = "❌ makePerson() må returnere et objekt";
      return;
    }
    const nameResult = getName(person);
    const ageResult = getAge(person);
    document.getElementById("outputC2").innerText = `Navn: ${nameResult}, Alder: ${ageResult}`;
  } catch (e) {
    document.getElementById("outputC2").innerText = `❌ Feil: ${e.message}`;
  }
});

// C3 – Oppdater felt
document.getElementById("btnC3").addEventListener("click", function() {
  const name = document.getElementById("inputC3name").value;
  const age = document.getElementById("inputC3age").value;
  if (!name.trim() || !age.trim()) {
    document.getElementById("outputC3").innerText = "❌ Vennligst skriv inn både navn og alder";
    return;
  }
  try {
    const person = makePerson(name, age);
    if (!person || typeof person !== 'object') {
      document.getElementById("outputC3").innerText = "❌ makePerson() må returnere et objekt";
      return;
    }
    const result = birthday(person);
    if (!result || typeof result !== 'object') {
      document.getElementById("outputC3").innerText = "❌ birthday() må returnere et objekt";
      return;
    }
    document.getElementById("outputC3").innerText = JSON.stringify(result);
  } catch (e) {
    document.getElementById("outputC3").innerText = `❌ Feil: ${e.message}`;
  }
});

// C4 – Slå sammen to objekter
document.getElementById("btnC4").addEventListener("click", function() {
  const aStr = document.getElementById("inputC4a").value;
  const bStr = document.getElementById("inputC4b").value;
  if (!aStr.trim() || !bStr.trim()) {
    document.getElementById("outputC4").innerText = "❌ Vennligst skriv inn JSON for begge objekter";
    return;
  }
  try {
    const a = JSON.parse(aStr);
    const b = JSON.parse(bStr);
    const result = merge(a, b);
    if (!result || typeof result !== 'object') {
      document.getElementById("outputC4").innerText = "❌ merge() må returnere et objekt";
      return;
    }
    document.getElementById("outputC4").innerText = JSON.stringify(result);
  } catch (e) {
    document.getElementById("outputC4").innerText = `❌ Feil: ${e.message}`;
  }
});

// C5 – Header-liste til objekt
document.getElementById("btnC5").addEventListener("click", function() {
  const input = document.getElementById("inputC5").value;
  if (!input.trim()) {
    document.getElementById("outputC5").innerText = "❌ Vennligst skriv inn headers";
    return;
  }
  try {
    const lines = input.split("\n");
    const result = headersToObject(lines);
    if (!result || typeof result !== 'object') {
      document.getElementById("outputC5").innerText = "❌ Funksjonen må returnere et objekt";
      return;
    }
    document.getElementById("outputC5").innerText = JSON.stringify(result);
  } catch (e) {
    document.getElementById("outputC5").innerText = `❌ Feil: ${e.message}`;
  }
});

// C6 – Plukk ut felt
document.getElementById("btnC6").addEventListener("click", function() {
  const objStr = document.getElementById("inputC6obj").value;
  const key = document.getElementById("inputC6key").value;
  if (!objStr.trim() || !key.trim()) {
    document.getElementById("outputC6").innerText = "❌ Vennligst skriv inn både objekt og nøkkel";
    return;
  }
  try {
    const obj = JSON.parse(objStr);
    const result = pick(obj, key);
    document.getElementById("outputC6").innerText = `${key}: ${result}`;
  } catch (e) {
    document.getElementById("outputC6").innerText = `❌ Feil: ${e.message}`;
  }
});

// C7 – Bygg query-objekt
document.getElementById("btnC7").addEventListener("click", function() {
  const input = document.getElementById("inputC7").value;
  if (!input.trim()) {
    document.getElementById("outputC7").innerText = "❌ Vennligst skriv inn query-streng";
    return;
  }
  try {
    const result = parseQuery(input);
    if (!result || typeof result !== 'object') {
      document.getElementById("outputC7").innerText = "❌ Funksjonen må returnere et objekt";
      return;
    }
    document.getElementById("outputC7").innerText = JSON.stringify(result);
  } catch (e) {
    document.getElementById("outputC7").innerText = `❌ Feil: ${e.message}`;
  }
});

// C8 – Objekt til query-streng
document.getElementById("btnC8").addEventListener("click", function() {
  const objStr = document.getElementById("inputC8").value;
  if (!objStr.trim()) {
    document.getElementById("outputC8").innerText = "❌ Vennligst skriv inn JSON";
    return;
  }
  try {
    const obj = JSON.parse(objStr);
    const result = toQuery(obj);
    if (typeof result !== 'string') {
      document.getElementById("outputC8").innerText = "❌ Funksjonen må returnere en streng";
      return;
    }
    document.getElementById("outputC8").innerText = result;
  } catch (e) {
    document.getElementById("outputC8").innerText = `❌ Feil: ${e.message}`;
  }
});
