function startAI(GameData) {
    console.log("Hello Dave");
    var Game = GameData;
    console.log("Number of players: " + Game.Data.n_players);
    
    var current_player = Game.Data.current_player;
    console.log(current_player);
    var ownedPIDs = Game.Data.player_info[current_player].ownedPIDs;
    console.log(ownedPIDs.length);
    var n_players = Game.Data.n_players;
    console.log(n_players);
   /* 
    for (i = 0; i < ownedPIDs.length; i++) {
      Game.Input.province.clicked(ownedPIDs[i]);
        console.log("clicked " + ownedPIDs[i];
      var willAttack = (Math.random>0.5)?willAttack:true;
      var j = Game.Data.player_info[1].ownedPIDS;
      for (k = 0 ; k < j; k++) {
      Game.Input.province.clicked(j[k]);
      }
    }
    */
  }
