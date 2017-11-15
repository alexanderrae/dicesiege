var Game;
var Render;

var SCALE = 20;
var PLAYERS = 2;
if (SCALE < 5 || SCALE =="" || !parseInt(SCALE)) SCALE = 15;
var BOARD_DIMENSIONS = {
    c:3*SCALE,
    r:2*SCALE
};

function init() {
    var SEED = new Date().getTime();

    // Import / Generate game data
    var GameData = new GenGameData(BOARD_DIMENSIONS,PLAYERS,SEED);

    // Start the game
    Game = new GameController(GameData);
    
    // TableRender();
    Render = new Renderer();
    Render.init.all();
}

function reinit() {
    Render.two.clear();

    var SEED = new Date().getTime();

    // Import / Generate game data
    var GameData = new GenGameData(BOARD_DIMENSIONS,PLAYERS,SEED);

    // Start the game
    Game = new GameController(GameData);
    
    //Start Artificial Intelligence
    
    function startAI(Game) {
    console.log("started ai");
  while (Game.Data.current_player != 1) {
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


    startAI(Game);


    Render.reinit();
}

init();
