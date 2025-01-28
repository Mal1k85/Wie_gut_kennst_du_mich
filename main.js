const fragen = [
    { frage: "Wie alt bin ich? (in Jahren)", antwort: "39" },
    { frage: "Was ist meine Lieblingsfarbe?", antwort: "Grün"},
    { frage: "In welcher Stadt bin ich geboren?", antwort: "Hakkari"},
    { frage: "Was ist mein Lieblingsessen?", antwort: "Nudeln"},
    { frage: "Welcher ist mein Lieblingsfilm?", antwort: "Interstellar"},
    { frage: "Welcher ist mein Lieblingssport", antwort: "Basketball"},
    { frage: "Nenne einer meiner Hobbys", antwort: "singen"},
    { frage: "Was ist mein Sternzeichen?", antwort: "Löwe"},
    { frage: "Was ist mein Lieblings-Musik-Genre?", antwort: "Hip-Hop"}
];

let aktuelleFrageIndex = 0;
let punkte = 0;

const frageText = document.getElementById('frageText');
const antwortInput = document.getElementById('antwortInput');
const antwortButton = document.getElementById('antwortButton');
const ergebnisText = document.getElementById('ergebnisText');
const punktestandText = document.getElementById('punktestandText');

function naechsteFrage() {
    if (aktuelleFrageIndex < fragen.length) {
        frageText.textContent = fragen[aktuelleFrageIndex].frage;
        antwortInput.value = '';
        ergebnisText.textContent = '';
    } else {
        frageText.textContent = "Das Spiel ist vorbei!";
        antwortInput.style.display = 'none';
        antwortButton.style.display = 'none';
        punktestandText.textContent = `Du hast ${punkte} von ${fragen.length} Punkten erreicht.`;
    }
}

antwortButton.addEventListener('click', function () {
    const benutzerAntwort = antwortInput.value.trim().toLowerCase();
    const richtigeAntwort = fragen[aktuelleFrageIndex].antwort.toLowerCase();

    if (benutzerAntwort === richtigeAntwort) {
        punkte++;
        ergebnisText.textContent = "Richtig! 🎉";
    } else {
        ergebnisText.textContent = `Falsch! Die richtige Antwort war: ${richtigeAntwort}.`;
    }

    aktuelleFrageIndex++;
    naechsteFrage();
});

// Starte das Spiel
naechsteFrage();