       
const maaldato = new Date(2025, 11, 16, 0, 0, 0).getTime(); // Setter tiden man vil klokken skal telle ned til

const x = setInterval(function() {  
    const naadato = new Date().getTime(); // Henter nåværende tid
    const avstand = maaldato - naadato; // Beregner avstanden mellom nåværende tid og måldato

    // Beregner tiden
    const dager = Math.floor(avstand / (1000 * 60 * 60 * 24));  // Antall dager
    const timer = Math.floor((avstand % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  // Antall timer
    const minutter = Math.floor((avstand % (1000 * 60 * 60)) / (1000 * 60));  // Antall minutter
    const sekunder = Math.floor((avstand % (1000 * 60)) / 1000);  // Antall sekunder

    // Viser tid i HTML
    document.getElementById("dager").innerHTML = dager; // Viser dager i HTML
    document.getElementById("timer").innerHTML = timer; // Viser timer i HTML
    document.getElementById("minutter").innerHTML = minutter; // Viser minutter i HTML
    document.getElementById("sekunder").innerHTML = sekunder; // Viser sekunder i HTML

    // Avslutter nedtellingen hvis den er ferdig
    if (avstand < 0) {
        clearInterval(x);
        document.getElementById("nedtelling").innerHTML = "Tiden er ute!";
    }
}, 1000); // Oppdater tiden hvert sekunnd


    let images = [  // Liste over bilder
    "../bilder/uganda.webp",  //Bilde 1
    "../bilder/Uganda-1.jpg", //Bilde 2
    "../bilder/Uganda-3.jpg"  //Bilde 3
];


let index = 0;  // Starter indeks for bilder
const slide = document.getElementById("slide"); // Henter bildeelementet

setInterval(() => {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    slide.src = images[index];
}, 2000);  // Endrer hvert andre sekund

let currentAmount = 0;  // Nåværende donasjonsbeløp
let goal = 450; // Målbeløp for donasjoner

function addDonation(amount) {  // Funksjon for å legge til donasjon
    currentAmount += amount;  // Oppdaterer nåværende beløp
    let percent = Math.min((currentAmount / goal) * 100, 100);  // Beregner prosent av målbeløpet

    document.getElementById("progress-bar").style.width = percent + "%";  // Oppdaterer fremdriftslinjens bredde
    document.getElementById("progress-text").innerText =  // Oppdaterer fremdriftsteksten
        `$${currentAmount} / $${goal}`; // Viser nåværende beløp og målbeløp
}
    const translations = {  // Oversettelser for språk
      no: { // Norsk
        title: "Bring Children From Streets Innsamling",
        navContact: "Kontakt",
        navHome: "Hjem",
        navDonate: "Doner",
        infoTitle: "Informasjon om innsamlingen",
        infoText:
          "Bring Children From Streets er en organisasjon som jobber for at barn i Uganda skal ha det bedre. Mange barn lever uten trygt hjem, mat eller skolegang. Innsamlingen gir barn skole, helsehjelp og et trygt sted å bo.",
        donateText: "Doner",
        todayText: "I dag",
        vippsText: "Vipps",
        differenceText: "Du kan gjøre en forskjell",
        gamesText:
          "Kos deg med spillene nedenfor og bidra samtidig til noe stort. Hver krone teller.",
        game1: "Høyere – Lavere",
        game2: "Stein – Saks – Papir",
        donate50: "Doner 50 kr",
        donate10: "Doner 10 kr",
        timeLeft: "Tid igjen:"
      },

      en: { // Engelsk
        title: "Bring Children From Streets Fundraiser",
        navContact: "Contact",
        navHome: "Home",
        navDonate: "Donate",
        infoTitle: "About the Fundraiser",
        infoText:
          "Bring Children From Streets is an organization working to improve the lives of children in Uganda. Many children live without a safe home, food, or education. This fundraiser provides schooling, healthcare, and a safe place to live.",
        donateText: "Donate",
        todayText: "Today",
        vippsText: "Vipps",
        differenceText: "You can make a difference",
        gamesText:
          "Enjoy the games below while contributing to a meaningful cause. Every donation counts.",
        game1: "Higher – Lower",
        game2: "Rock – Paper – Scissors",
        donate50: "Donate 50 kr",
        donate10: "Donate 10 kr",
        timeLeft: "Time left:"
      }
    };

    function setLanguage(lang) {  // Funksjon for å sette språk
      localStorage.setItem("language", lang);  // Lagre valgt språk i lokal lagring

      for (const key in translations[lang]) { // Gå gjennom alle oversettelser for valgt språk
        const element = document.getElementById(key);  // Hent HTML-elementet med tilsvarende ID
        if (element) {  // Hvis elementet finnes
          element.textContent = translations[lang][key];  // Oppdater tekstinnholdet med oversettelsen
        }
      }
    }

    const savedLanguage = localStorage.getItem("language") || "no"; // Hent lagret språk eller bruk norsk som standard
    setLanguage(savedLanguage);