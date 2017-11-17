function startAI(GameData) {
    console.log("Hello Dave");
    var Game = GameData;
    
    var current_player = Game.Data.current_player;
    var ownedPIDs = Game.Data.player_info[current_player].ownedPIDs;
    var n_players = Game.Data.n_players;
    
    for ( i = 0 ; i < ownedPIDs.length ; i++) {
        
    Game.Input.province.clicked(ownedPIDs[i]);    
    var bordering = Game.Data.provinces[1].bordering;    
    Game.Input.province.clicked(bordering[Math.floor(Math.random()*(bordering.length+1))]);
    }
  }
