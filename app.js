const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));


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

app.get('/', (req, res) => {
    res.send("Server del mio blog di viaggio in Marocco");

});

app.get('/postets', (req, res) => {
    res.json(postets);
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});