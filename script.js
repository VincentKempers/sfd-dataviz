(function() {
  let app = {
    init() {
      changeSRC.init();
      timeChart.init();
    }
  };

  let changeSRC = {
    init() {
      let allItems = document.querySelector(".thecards").children;
      let imageSrc = document.querySelector("#mediumBackgroundImg");
console.log(allItems);
      let htmlValues = Object.values(allItems);
      htmlValues.forEach(i => {
        i.addEventListener("mouseover", event => {
          imageSrc.src = `imgs/${event.target.classList[0]}.jpg`;
          console.log(event.target.classList[0]);
        });
      });
    }
  };

  let timeChart = {
    labels: ["Red", "Blue", "Yellow"],
    data: [12, 19, 3],
    bgColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)"
    ],
    borderColor: [
      "rgba(255,99,132,1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)"
    ],
    ctx: document.getElementById("timeChart"),
    init() {
      var myChart = new Chart(this.ctx, {
        type: "bar",
        data: {
          labels: this.labels,
          datasets: [
            {
              label: "# of Votes",
              data: this.data,
              backgroundColor: this.bgColor,
              borderColor: this.borderColor,
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    }
  };

// app starts here ..
  app.init();
})();
