/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca 
    un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

const inizialWords = (words, iniazial) => {
  return words.filter((word) => word[0] === iniazial);
};

// Invoca la funzione qui e stampa il risultato in console

console.log(inizialWords(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
