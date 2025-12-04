        // Sett måldatoen (år, måned-1, dag, time, minutt, sekund)
const maaldato = new Date(2025, 11, 16, 0, 0, 0).getTime(); // 1. januar 2026 kl. 00:00:00

const x = setInterval(function() {
    const naadato = new Date().getTime();
    const avstand = maaldato - naadato;

    // Beregn tid
    const dager = Math.floor(avstand / (1000 * 60 * 60 * 24));
    const timer = Math.floor((avstand % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutter = Math.floor((avstand % (1000 * 60 * 60)) / (1000 * 60));
    const sekunder = Math.floor((avstand % (1000 * 60)) / 1000);

    // Vis tid i HTML
    document.getElementById("dager").innerHTML = dager;
    document.getElementById("timer").innerHTML = timer;
    document.getElementById("minutter").innerHTML = minutter;
    document.getElementById("sekunder").innerHTML = sekunder;

    // Avslutt nedtellingen hvis den er ferdig
    if (avstand < 0) {
        clearInterval(x);
        document.getElementById("nedtelling").innerHTML = "Tiden er ute!";
    }
}, 1000); // Oppdater hvert 1000 millisekund (1 sekund)


    let images = [
    "../bilder/mexico.png",
    "../bilder/Amber-fort.png",
    "../bilder/LotusFlower.png"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    slide.src = images[index];
}, 2000);  // changes every 2 seconds