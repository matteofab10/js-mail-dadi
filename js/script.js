//Chiedere l'email dell'utente
//controllare che sia nella lista di chi può accedere
//dire a utente se può entrare o meno


const emailList = ['email-1@email.com',
'email-2@email.com',
'email-3@email.com',
'email-4@email.com',
'email-5@email.com',
'email-6@email.com',
'email-7@email.com'];

let email = (prompt ('Qual è la tua email?'));
console.log(email);

let emailValida = false;

for (let i=0; i < emailList.length; i++){
  
  if(emailList[i] === email){
    console.log('trovato');
    emailValida = true;
  }
}

if (emailValida == true) {
  console.log('puoi entrare');
}else{
  console.log('non puoi entrare');
}

// document.getElementById('esito').innerHTML =



