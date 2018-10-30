(function() {
  let app = {
    init() {
      changeSRC.init();
    },
    googleChart() {
      googleChartSetup.init();
    }
  };

  let changeSRC = {
    init() {
      let allItems = document.querySelector(".thecards").children;
      let imageSrc = document.querySelector("#mediumBackgroundImg");
      let htmlValues = Object.values(allItems);
      htmlValues.forEach(i => {
        i.addEventListener("mouseover", event => {
          imageSrc.src = `imgs/${event.target.classList[0]}.jpg`;
          console.log(event.target.classList[0]);
        });
      });
    }
  };

  app.init();
})();
