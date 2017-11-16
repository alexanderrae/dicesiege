function startAI(GameData) {
    console.log("started ai");
    var Game = GameData;
  while (true) {
      if (Game.Data.current_player != 1) {
          sleep(1)
      }
      else {
    console.log("got past thisGame.Data..");
    var current_player = Game.Data.current_player;
    var ownedPIDS = Game.Data.player_info[current_player].ownedPIDS;
    var n_players = Game.Data.n_players;
    
    for (i = 0; i < ownedPIDS; i++) {
      Game.Input.province.clicked(ownedPIDS[i]);
      var willAttack = (Math.random>0.5)?willAttack:true;
      var j = Game.Data.player_info[1].ownedPIDS;
      for (k = 0 ; k < j; k++) {
      Game.Input.province.clicked(j[k]);
      }
    }
  }
  }
}
