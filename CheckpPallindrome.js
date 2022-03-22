/*
Checks if the arguement in the function is a Pallindrome
*/

function checkPallindrome (str) {

  if (str === '') {
    return "String is empty"
  } 
    return (str.toLowerCase() === str.toLowerCase().split('').reverse().join(''));
        // (str.toLowerCase() === str.toLowerCase().split('').reverse().join(''))

checkPallindrome('Poop');
