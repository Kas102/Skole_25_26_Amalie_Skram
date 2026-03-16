const skryteOrd = [
    "sjenerøs",
    "omgjengelig",
    "ambisiøs",
    "munter",
    "hardtarbeidende",
    "troverdig",
    "tålmodig",
    "optimistisk",
    "følsom",
    "sosial",
    "besluttsom",
    "morsom",
    "blid",
    "vakker",
    "lekende",
    "elskverdig",
    "talentfull",
    "begavet"
];
document.getElementById("btnSkryt").addEventListener("click", lagSkryt);
skrytOutput = document.getElementById("output");

function lagSkryt() {
    let randomSkryten = Math.floor(Math.random() * skryteOrd.length);
    let etSkryteord = skryteOrd[randomSkryten]
    let skryteListe = [];
    while (skryteListe.length < antallInput.value) {
        let randomSkryten = Math.floor(Math.random() * skryteOrd.length);
        let etSkryteord = skryteOrd[randomSkryten];
        skryteListe.push(etSkryteord);
        if (!skryteListe.includes(etSkryteord)) {
            skryteListe.push(etSkryteord);
        }
    }
    skrytetext = navnInput.value + ", du er ";
    for (let i = 0; i < skryteListe.length - 1; i++) {
        skrytetext += skryteListe[i] + ", ";
}
    skrytetext += "og " + skryteListe[skryteListe.length - 1];
    skrytetext = skrytetext.replace(", og", " og ");
    skrytOutput.innerText = skrytetext;
}