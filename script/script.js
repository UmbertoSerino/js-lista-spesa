// @qui Ciao ragazze e ciao ragazzi!
// Come annunciato oggi ci sarà un recap nel pomeriggio, i dettagli saranno meglio specificati dagli insegnanti del pomeriggio più tardi, perciò l'esercizio sarà piccino.
// Esercizio di oggi: Lista della spesa con ciclo while
// nome repo: js-lista-spesa
// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Consigli:
// Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
// Buon lavoro a tutte e a tutti!!


// ci serve una lista della spesa generata in un array
const myShoppingList = ["Ricotta", "Salsa", "Provola", "Pasta", "Olio", "Sale", "Parmigiano", "Carne Macinata"];

const mySelector = document.querySelector(".selector-shopping-list");

// gli diamo il valore iniziale
let i = 0;

// ci creiamo un ciclo while, cosi' da farlo per il numero di elementi inseriti nella lista "myShoppingList" del nostro array

while (i < myShoppingList.length){
    mySelector.innerHTML += myShoppingList[i] + " "

    i++;
}

