let fs = require('fs');
let players = require('./players.json')
let manageQuestion = require('./manageQuestion')
// console.log(players);
let player = {
  name: "",
  score: 0,
  scoreMax: 0,

  initializedName: function(pseudo){
    this.name = pseudo;
    this.score = 0;
    if(players[pseudo] !== undefined){
    this.scoreMax = players[pseudo];
    }
  },

  displayPlayer: function(){
    let txt = "";
    txt += "name: " + this.name + "\n"; // or this[name]
    txt += "score: " + this.score + "\n";
    txt += "scoreMax: " + this.scoreMax + "\n";
    console.log(txt);
  }, 
  winPoint: function(points){
    this.score += points;
  },
  savePlayer: function(){
    if(players[this.name] < this.score || players[this.name] === undefined){
      players[this.name] = this.score;
      fs.writeFileSync("players.json", JSON.stringify(players, undefined, 4));
    }
  }
}

module.exports = player;
