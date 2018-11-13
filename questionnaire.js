let questionnaire = (function() {
  return {
    chosenAnswers: [],
    checkArray(theWord) {
      this.chosenAnswers.push(theWord);
    },
    init() {
      let allAnwsers = document.querySelector(".answers");
      allAnwsers.addEventListener(
        "click",
        function(event) {
          console.log(event);
          if (event.target.nodeName == "LABEL") {
            event.target.classList.toggle("rick");
            console.log("true");
            questionnaire.checkArray(event.target.innerText);
          } else {
            console.log("it's not working");
          }
          console.log(questionnaire.chosenAnswers);
        },
        true
      );
    }
  };
})();
