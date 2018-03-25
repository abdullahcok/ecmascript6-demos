window.onload = function(){
  var warriors = new Set();
  warriors.add("steph").add("klay").add("draymond").add("andre").add("harrison");
  warriors.delete("harrison");
  console.log(warriors.add("kevin"));
  console.log("there are " +warriors.size+ "warriors!");
  console.log(warriors.has("steph"));

  //something to use this function
  var warriors = ["steph", "klay", "draymond", "andre", "kevin"];
  var refinedWarriors = new Set(warriors);
  console.log(refinedWarriors);

  warriors = [...refinedWarriors];
  console.log(warriors);
}
