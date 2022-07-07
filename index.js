function scuberGreetingForFeet(){
  // Write your code here!
  if (arg <= 400){
    return 'This one is on me!';
  } else if (arg > 2000 && arg < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (arg >2500){
    return 'No can do.';
  }
}

function ternaryCheckCity(){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.':'No go.';
}

function switchOnCharmFromTip(){
  // Write your code here!
  switch (tip) {
    case 'generous': return 'Thank you so much.';
    case 'not as generous': return 'Thank you.';
    default : return'Bye.'
  }
}