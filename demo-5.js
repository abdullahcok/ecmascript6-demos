window.onload = function(){
  var youSay = "good morning";

  if (youSay.startsWith("good morning")) {
    var iSay = "morning to you";
  }

  //console.log(youSay.repeat(50));
    //console.log(youSay.startsWith("good"));
    //console.log(youSay.startsWith("morning", 5));
      //console.log(youSay.endsWith("morning"));
      //console.log(youSay.endsWith("good", youSay.length -5));
console.log(`You say ${youSay}, I say ${iSay}`);
}
