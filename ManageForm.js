let form = {
  Italy: "form.json",
  Portugal: "form2.json",

  displayForm: function(){
    let txt= "";
    for(let prop in this){
      if(typeof(this[prop]) !== "function")
      console.log(prop + " -")
    }
    console.log(txt)
  }
}
// form.displayForm();
module.exports = form; 
