let toolbox = require('./toolBox');

let survey = {
  questionUsed : [],

  displayQuestion: function(question){
    let txt = ""; 
    txt += question.desc + "\n";
    txt += "A : " + question.answerA + "\n";
    txt += "B : " + question.answerB + "\n";
    txt += "C : " + question.answerC + "\n";
    txt += "D : " + question.answerD + "\n";
     console.log(txt)
 },
 returnNumberInForm: function(survey){
   let number = 0;
   for(let question in survey){
       number++;
   }
   return number;
 },
 randomQuestionGenerated: function(survey){
  let number = 0; 
   do{
     number = toolbox.generateRandomNum(1, this.returnNumberInForm(survey)+1)
   }
     while(this.isQuestionUsed(number));

     this.questionUsed.push(number);
     return survey["question" + number];
   },
   isQuestionUsed(num){
     for(let i = 0; i < this.questionUsed.length; i++){
       if(num === this.questionUsed[i]){
         return true;
       }
     }
    return false;
   },
   checkTheEmptyForm(form){
     return this.questionUsed.length === this.returnNumberInForm(form);
   },
   enterAnswer: function(){
    return toolbox.enterString("What is your asnwer? ")
  },
  isRight: function(question, answer){
    if(answer === question.rightAnswer){
      return true
    } else{
      return false
    }
  },
  returnPointsNumber: function(question){
    if(question.difficulty === "easy"){
      return 1; 
    }else if(question.difficulty === "medium"){
      return 5; 
    }else {
      return 10;
    }
  }
}
/*
 form.displayQuestion(formItaly.question2);
 let number = form.returnNumberInForm(formItaly);
 console.log("the number of question is :" + number)
*/


module.exports = survey;

