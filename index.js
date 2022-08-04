// Code your solutions in this file
let message = []
function writeCards(cards, event) {
  for (let i = 0; i < cards.length; i++) {
    message.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
  
    
   
  }
  

  return message;
}


console.log(message);

function countDown(number){
    while(number>=0){
        console.log(number--)
    }
    return number;
}