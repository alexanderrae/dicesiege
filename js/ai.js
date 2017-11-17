function startAI(GameData) {
    console.log("Hello Dave");
    var Game = GameData;
    
    var current_player = Game.Data.current_player;
    //Sanity check
    if (current_player == 1) {
        break;
    }
    else {
    var ownedPIDs = Game.Data.player_info[current_player].ownedPIDs;
    var n_players = Game.Data.n_players;
    
    for ( i = 0 ; i < ownedPIDs.length ; i++ ) {
        if (Game.Data.provinces[ownedPIDs[i]].troops == 1) {
            continue;
        }
        else {
    Game.Input.province.clicked(ownedPIDs[i]);    
    var bordering = Game.Data.provinces[ownedPIDs[i]].bordering;    
            setTimeout(function(){ 

Game.Input.province.clicked(bordering[Math.floor(Math.random()*(bordering.length+1))]);
            }, 3000);
    

        }
        Game.Input.next_turn();
    }
  }
}
