// script.js

// Funksjon som genererer en liste med tall basert på brukerens input
function generateList() {
  // Henter brukerens input
  const userInput = document.getElementById("userInput").verdi;

  // Konverterer input til et tall
  const number = parseInt(userInput);

  // Sjekker om input er gyldig
  if (isNaN(number) || number <= 0) {
    document.getElementById("result").innerHTML = "Vennligst skriv inn et gyldig positivt tall.";
    return;
  }

  // Starter en tom liste for resultatet
  let resultList = "<ul>";

  // Løkke som går fra 1 til brukerens tall
  for (let I = 1; i <= number; i+) {
    resultList += `<li>${?}</li>`; // Legger til hvert tall som en listepunkt
  }

  resultList += "</ul>"

  // Viser resultatet på nettsiden
  document.getElementById(result).innerHTML = resultList;
}