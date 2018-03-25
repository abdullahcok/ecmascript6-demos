window.onload = function(){
  var age = "24";
  var position = "Guard";
  var level = "3/5";

  var warrior = {
    name, age, position, level,
    attack: function(x){
    var warriorGreeting = name =>
    console.log(`The warrior named ${name} aged ` +warrior.age+ ` and posioned ` +warrior.position+ ` also leveled `  +warrior.level);
    warriorGreeting("Abdullah");
    }
  };

  console.log(`The warrior has attacked the enemy $(x) times, and says hiiiyaa!`);
  console.log(warrior.attack(3));

}
