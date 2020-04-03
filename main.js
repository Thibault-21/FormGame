let manageQuestion = require("./manageQuestion");
let toolbox = require('./toolBox');
let ManageForm = require('./ManageForm');
let form = surveySelection();
let player = require('./player')

let isGameOver = false; 
let namePlayer = toolbox.enterString("What is your name? ");
player.initializedName(namePlayer);
player.displayPlayer();

while(!isGameOver){
  // we generate a random question from one of our form (.JSON) which will be selected by surveySelection()
  let question = manageQuestion.randomQuestionGenerated(form);
  // we call this question throught the variable: question
  manageQuestion.displayQuestion(question);
  // we ask the user an answer 
  let answer = manageQuestion.enterAnswer();
  // we display the answer of the user
  console.log(answer);
// we encapsulate the function allow us to know if it's a right or wrong answer 
  let isRightAnswer = manageQuestion.isRight(question, answer)
  // and display the boolean response : if it's true or false
  console.log(isRightAnswer);
  // here the sup conditions to display different messages according the answer 
  if(isRightAnswer === true){
    let points = manageQuestion.returnPointsNumber(question)
    player.winPoint(points);
    player.displayPlayer();
    console.log("Right answer")
    if(manageQuestion.checkTheEmptyForm(form)){
      isGameOver = true; 
      console.log("You Win!")
    }
  }else {
    console.log("wrong, GAME OVER! " + "your score is : " + player.score)
    isGameOver = true;
  }
  player.savePlayer();
}
// this function allow us to randomized the question. We have to quite to see questions of other form
// Or we can put num in params and select the form we want where we call the function above
function surveySelection(){
  ManageForm.displayForm();
  let chooseYourForm = toolbox.enterString("Which one you want ? ")
    return require('./forms/' + ManageForm[chooseYourForm])

  // let numSurvey = toolbox.generateRandomNum(1, 3);
  // if(numSurvey === 1){
  //   return require('./forms/form.json')
  // }else {
  //   return require('./forms/form2.json');
  // }
}

