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

var mine = [];
var numeroMinePresenti = 16;
var range;
var difficulty = prompt("Seleziona una difficoltà scrivendo 0, 1, 2 oppure facile, medio, difficile.").toLowerCase();
switch (difficulty) { // Seleziona difficoltà
    case "0":
    case "facile":
        range = 100;
        break;
    case "1":
    case "medio":
        range = 80;
        break;
    case "2":
    case "difficile":
        range = 50;
        break;
    default:
        range = 100;
}
while (mine.length < numeroMinePresenti) { // genera mine
    var casellaMinata = Math.floor(Math.random() * (range - 1)) + 1;
    if (!mine.includes(casellaMinata)) {
        mine.push(casellaMinata);
    }
}
// mine.sort();
// console.log(mine);

var gameOver = false;
var numeriGiocati = [];

for (var i = 0; i < ((range) - numeroMinePresenti) && gameOver == false; i++) {
    var giocata = parseInt(prompt("Inserisci un numero tra 1 e " + range + " e spera di non esplodere!"));

    if (!numeriGiocati.includes(giocata) && (1 <= giocata) && (giocata <= range)) {
        numeriGiocati.push(giocata); //giocata valida

        if (mine.includes(giocata)){ //mina trovata
            console.log("BOOM! HAI PERSO");
            gameOver = true;
            break;
        }

    } else if (!(giocata >= 1) || !(giocata <= range)){ //giocata fuori range
        alert("Non hai inserito un numero valido!");
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




//
