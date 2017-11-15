while (true) {
  if (Game.Data.current_player != 1) {
    var current_player = Game.Data.current_player;
    var ownedPIDS = Game.Data.player_info[current_player].ownedPIDS;
    for (i = 0; i < ownedPIDS; i++) {
      Game.Input.province.clicked(i);
      sleep(10)
      Game.Input.province.clicked(i);
    }
  }
 
}
