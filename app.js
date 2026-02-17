const express = require('express');
const app = express();
const port = 3000;

// Configurazione asset statici: cerca i file nella cartella "public"
app.use(express.static('public'));

// Dati dei postets del blog di viaggio in Marocco
const postets = [

    {
        titolo: "Essaouira, Marocco",
        descrizione: "Essaouira è una città costiera situata in Marocco, famosa per la sua medina storica, le spiagge sabbiose e il porto vivace. La città è un mix di culture, con influenze arabe, berbere e portoghesi. Essaouira è anche conosciuta per la sua scena artistica e musicale, con numerosi festival che si tengono durante l'anno.",
        immagine: "/public/essaouira.jpg"
    },

    {
        titolo: "Marrakech, Marocco",
        descrizione: "Marrakech è una città vibrante e affascinante situata in Marocco. Conosciuta per i suoi souk colorati, i palazzi storici e i giardini lussureggianti, Marrakech offre un'esperienza unica ai visitatori. La città è anche famosa per la sua cucina deliziosa e la vivace vita notturna.",
        immagine: "/public/marrakech.jpg"
    },


    {
        titolo: "Chefchaouen, Marocco",
        descrizione: "Chefchaouen è una città pittoresca situata nelle montagne del Marocco. Conosciuta per i suoi edifici colorati e le strade strettissime, Chefchaouen è un luogo incantevole che offre un'esperienza unica ai visitatori.",
        immagine: "/public/chefchaouen.jpg"
    },

    {
        titolo: "Casablanca, Marocco",
        descrizione: "Casablanca è una città costiera situata in Marocco. Conosciuta per i suoi edifici moderni, le spiagge sabbiose e il porto vivace, Casablanca è una città che combina tradizione e modernità.",
        immagine: "/public/casablanca.jpg"
    },

    {
        titolo: "merzouga, Marocco",
        descrizione: "Merzouga è una città situata nel deserto del Marocco. Conosciuta per i suoi paesaggi desertici, le dune di sabbia e le tradizioni locali, Merzouga è un luogo unico che offre un'esperienza autentica ai visitatori.",
        immagine: "/public/merzouga.jpg"
    }
];

// Rotta per la home page
app.get('/', (req, res) => {
    res.send("Server del mio blog di viaggio in Marocco");
});


// Rotta per la bacheca del blog, che mostra i postets
app.get('/bacheca', (req, res) => {

    let html = "<div style='background-color: #78c8ef; padding: 50px; min-height: 100vh; display: flex; font-family: Arial, sans-serif; align-items: center;'>";

    html += "<h1 style='color: white; text-align: center; width: 100%; margin-bottom: 40px;'>Benvenuti nel mio blog di viaggio in Marocco!</h1>";


    postets.forEach(postet => {
        html +=
            `<div style="background-color: #0e5cf6; padding: 20px; margin-bottom: 20px; border-radius: 10px; color: white;">`;
        html += `<h2>${postet.titolo}</h2>`;
        html += `<p>${postet.descrizione}</p>`;
        html += `<img src="${postet.immagine}" alt="${postet.titolo}" style="max-width: 300px; display: block; margin: 10px 0;"</div>`;

    });
    html += "</div>";

    res.send(html);
});

// Rotta per ottenere i postets in formato JSON
app.get('/postets', (req, res) => {
    res.json(postets);
});






app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});