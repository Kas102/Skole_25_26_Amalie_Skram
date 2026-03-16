// script.js

// Funksjon som genererer en liste med tall basert på brukerens input
function generateList() { 
  // Henter brukerens input
  const userInput = document.getElementById("userInput").value; //Feil det var verdi skulle være value

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
  for (let i = 1; i <= number; i++) {   //Feil det var stor I når det skulle være liten i i tilleg til at den ene plusstegnet manglet
    resultList += `<li>${i}</li>`; // Legger til hvert tall som en listepunkt   //feil ? skulle være i 
  } 

  resultList += "</ul>"; // Feil Manglet ; tegn

  // Viser resultatet på nettsiden  
  document.getElementById("result").innerHTML = resultList;  //Feil manglet "" rundt result 
}
