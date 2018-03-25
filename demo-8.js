window.onload = function(){
    var warrior = {
      name: "Sia",
      attack(a){
        var _this = this;
        window.setInterval(() => {
          if(a>0){
            console.log(_this.name + " attaks the enemy!");
            a--
          }
        }, 1000);
      }
    };

    warrior.attack(10);
}
