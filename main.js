const fragen = [
    { frage: "Wie alt bin ich? (in Jahren)", antwort: ["39", "neununddreißig"] },
    { frage: "Was ist meine Lieblingsfarbe?", antwort: ["grün"] },
    { frage: "In welcher Stadt bin ich geboren?", antwort: ["hakkari", "cukurca"] },
    { frage: "Was ist eines meiner Lieblingsessen?", antwort: ["nudeln", "pasta"] },
    { frage: "Nenne einen meiner Lieblingsfilme?", antwort: ["interstellar"] },
    { frage: "Mein Lieblingssport ist?", antwort: ["basketball"] },
    { frage: "Nenne eines meiner Hobbys", antwort: ["singen", "musik"] },
    { frage: "Was ist mein Sternzeichen?", antwort: ["löwe"] },
    { frage: "Was ist eine meiner Lieblings-Musik-Genre?", antwort: ["hip-hop", "rap"] }
];

let aktuelleFrageIndex = 0;
let punkte = 0;

const frageText = document.getElementById('frageText');
const antwortInput = document.getElementById('antwortInput');
const antwortButton = document.getElementById('antwortButton');
const ergebnisText = document.getElementById('ergebnisText');
const punktestandText = document.getElementById('punktestandText');
const antwortListe = document.getElementById('antwortListe');

function naechsteFrage() {
    if (aktuelleFrageIndex < fragen.length) {
        frageText.textContent = fragen[aktuelleFrageIndex].frage;
        antwortInput.value = '';
        ergebnisText.textContent = '';
    } else {
        frageText.textContent = "🎉 Das Spiel ist vorbei! 🎉";
        antwortInput.style.display = 'none';
        antwortButton.style.display = 'none';

        // Sieg Animation
        document.body.innerHTML += `
            <div class="siegerehrung">
                <img src="goldmedaille.png" alt="Goldmedaille" class="medaille">
                <p>Danke, dass du mitgemacht hast!</p>
                <p>Besuche doch gerne meine GitHub-Seite!</p>
            </div>
        `;
    }
}

antwortButton.addEventListener('click', function () {
    const benutzerAntwort = antwortInput.value.trim().toLowerCase();
    const richtigeAntworten = fragen[aktuelleFrageIndex].antwort.map(a => a.toLowerCase());

    let ergebnis = richtigeAntworten.includes(benutzerAntwort) ? "Richtig! ✅" : "Falsch! ❌";
    
    if (richtigeAntworten.includes(benutzerAntwort)) {
        punkte++;
    }

    ergebnisText.innerHTML = `<span class="${ergebnis === "Richtig! ✅" ? 'richtig' : 'falsch'}">${ergebnis}</span>`;

    // Antwortliste aktualisieren
    const neueAntwort = document.createElement('p');
    neueAntwort.innerHTML = `Frage: <strong>${fragen[aktuelleFrageIndex].frage}</strong><br> 
                             Deine Antwort: <strong>${benutzerAntwort}</strong><br>
                             Richtige Antwort: <strong>${richtigeAntworten.join(", ")}</strong><br>
                             <span class="${ergebnis === "Richtig! ✅" ? 'richtig' : 'falsch'}">${ergebnis}</span>`;
    antwortListe.appendChild(neueAntwort);

    punktestandText.textContent = `Punkte: ${punkte} von ${fragen.length}`;

    aktuelleFrageIndex++;
    naechsteFrage();
});

// Starte das Spiel
naechsteFrage();
