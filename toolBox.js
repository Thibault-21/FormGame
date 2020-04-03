let readline = require("readline-sync");

let toolbox = {
  enterString: function(question){
    return readline.question(question)
  },
  generateRandomNum: function(min, max){
    return Math.floor(Math.random() * (max-min) + min);
  }
}

module.exports = toolbox
