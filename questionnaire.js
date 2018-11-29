(function() {
  let prices = {
    iOne: {
      price: "1540",
      explain:
        "Certified medium I is introduceren naar het wondere wereld van mediums. Het 'leren' hoe het werkt en hoe je het kan toepassen. Hoe je vanaf dit punt verder gaat en je krijgt een groepsessie"
    },
    iTwo: {
      price: "4020",
      explain:
        "Dit is je volgende stap om een medium te worden. In maar liefst 6 stappen volg je een programma om een bekende medium te worden. Succesvol en Accuraat!"
    },
    iThree: {
      price: "5977",
      explain:
        "Dit is de stap om nog bekender te worden. Mee doen met James van Praagh, radio bezoeken en artikels schrijven en persoonlijke sessies met grote namen."
    }
  };

  let showPrice = {
    init() {
      let showCourses = document.querySelector(".courses").children;
      let showPrice = document.querySelector(".showPrices");
      let htmlValues = Object.values(showCourses);

      htmlValues.forEach(j => {
        j.addEventListener(
          "mouseover",
          function(event) {
            let targetName = event.target.id;
            let rightPrice = prices[`${targetName}`];

            showPrice.innerHTML = `
            <p>${rightPrice.explain}</p>
             <h1>$ ${rightPrice.price}</h1> `;
          },
          true
        );
      });
    }
  };

  showPrice.init();
})();
