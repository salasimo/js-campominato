/*SCOPO DEL GIOCO:
--Il computer deve generare 16 numeri casuali tra 1 e 100.
--In seguito deve chiedere all’utente di inserire un numero alla volta,
sempre compreso tra 1 e 100.
--Se il numero è presente nella lista dei numeri generati, la partita termina,
altrimenti si continua chiedendo all’utente un altro numero.
--La partita termina quando il giocatore inserisce un numero “vietato”
o raggiunge il numero massimo possibile di numeri consentiti.
--Al termine della partita il software deve comunicare il punteggio,
cioè il numero di volte che l’utente ha inserito un numero consentito.
--BONUS: all’inizio il software richiede anche una difficoltà all’utente
che cambia il range di numeri casuali.
Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80,
con difficoltà 2=> tra 1 e 50
*/

/* COME FACCIO:
genero 16 numeri e li metto in un array
chiedo all'utente un numero -> se è nell'array GAME OVER, altrimenti continuo.
*/
var numeroMinePresenti = 16;

var range = selezionaDifficolta();
var mine = piazzatoreMine(numeroMinePresenti, range);

// mine.sort();
// console.log(mine);

var gameOver = false;
var numeriGiocati = [];

// RIFACCIO IL MIO FOR CON IL WHILE ==========

// while ((numeriGiocati.length < (range - numeroMinePresenti)) && (gameOver == false)) {
//     var giocata = parseInt(prompt("Inserisci un numero tra 1 e " + range + " e spera di non esplodere!"));
//
//     if (!numeriGiocati.includes(giocata) && (1 <= giocata) && (giocata <= range)) {
//         numeriGiocati.push(giocata); //giocata valida
//
//         if (mine.includes(giocata)){ //mina trovata
//             console.log("BOOM! HAI PERSO");
//             gameOver = true;
//
//         }
// } etcccccc etcccc etcccc


// QUI SOTTO IL MIO FOR ORIGINARIO ==========

for (var i = 0; i < (range - numeroMinePresenti) && gameOver == false; i++) {
    var giocata = parseInt(prompt("Inserisci un numero tra 1 e " + range + " e spera di non esplodere!"));

    if (!numeriGiocati.includes(giocata) && (1 <= giocata) && (giocata <= range)) {
        numeriGiocati.push(giocata); //giocata valida

        if (mine.includes(giocata)){ //mina trovata
            console.log("BOOM! HAI PERSO");
            gameOver = true;

        }
    } else if (isNaN(giocata)){ //carattere non valido
        alert("Devi inserire un numero tra 1 e " + range);
        i--;

    } else if (!(giocata >= 1) || !(giocata <= range)){ //giocata fuori range
        alert("Non hai inserito un numero valido! Devi inserire un numero tra 1 e " + range);
        i--;

    } else{
        alert("Casella già aperta"); //giocata già fatta
        i--;
    }

}

if (gameOver == true){  //punteggio finale al game over
    var caselleAperteCorrettamente = (numeriGiocati.length - 1);
    var percentualeCompletamento = (caselleAperteCorrettamente / (range - numeroMinePresenti))*100;
    alert("BOOOOOOM!!! GAME OVER! Hai aperto " + caselleAperteCorrettamente + " caselle, ma alla successiva ti è andata male! Hai completato il campo al " + percentualeCompletamento.toFixed(2) +"%");
} else{ //gioco completato al 100%
    alert("HAI COMPLETATO IL CAMPO MINATO!")
}

// FUNZIONI ===========================

function piazzatoreMine(numeroMinePresenti, range) {
    var mine = [];
    while (mine.length < numeroMinePresenti) { // genera mine
        var casellaMinata = Math.floor(Math.random() * (range - 1)) + 1;
        if (!mine.includes(casellaMinata)) {
            mine.push(casellaMinata);
        }
    }
    return mine;
}

function selezionaDifficolta(){
    var difficulty = prompt("Seleziona una difficoltà scrivendo 0, 1, 2 oppure facile, medio, difficile.").toLowerCase();
    switch (difficulty) { // Seleziona difficoltà
        case "0":
        case "facile":
            var dimCampo = 100;
            break;
        case "1":
        case "medio":
            var dimCampo = 80;
            break;
        case "2":
        case "difficile":
            var dimCampo = 50;
            break;
        default:
            var dimCampo = 100;
    }
    return dimCampo;
}

//
