/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
const countVocals = (text) => {
  const vocalsArray = ["a", "i", "e", "o", "u"];
  const charsArray = text.split("");
  let vocalsCounter = 0;

  charsArray.forEach((char) => {
    if (vocalsArray.includes(char)) vocalsCounter++;
  });

  return vocalsCounter;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(countVocals(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
