// generare un numero random da 1 a 6 per il giocatore ed il computer
// stabilire vincitore

const numeroGiocatore = (Math.floor(Math.random() * 6) + 1);
console.log(numeroGiocatore);

const numeroComputer = (Math.floor(Math.random() * 6) + 1);
console.log(numeroComputer);

if (numeroGiocatore > numeroComputer){
  document.getElementById('output').innerHTML = `
  il numero del Giocatore è il più alto, hai vinto`;
  console.log('Giocatore ha vinto')
} else if (numeroGiocatore < numeroComputer){
  document.getElementById('output').innerHTML = `
  il numero del Computer è il più alto, hai vinto`;
  console.log('Computer ha vinto');
} else {
  document.getElementById('output').innerHTML = `
  il numero del Giocatore è uguale a quello del Computer, avete pareggiato`;
  console.log('Pareggio')
};
