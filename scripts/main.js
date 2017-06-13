/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {
  let value = 0;
  let a_count = 0;
  for (i=0; i < hand.length; i++){
    if (hand[i] === 'K' || hand[i] === 'Q' || hand[i] === 'J'){
      value += 10;
    } else if (hand[i] !== 'A') {
      value += parseInt(hand[i]);
    } else {
      a_count++;
    }
  }

  while (a_count > 0) {
    a_count -= 1;
    let temp_sum = value + 11 + a_count;
    if (temp_sum <= 21){
      value += 11;
    }else{
      value += 1;
    }
  }

  return (value);
}
