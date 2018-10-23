(function() {
  let app = {
    init() {
      this.fullpage();
      this.googleChart();
    },
    fullpage() {
      fullpageSetup.init();
    },
    googleChart() {
      googleChartSetup.init();
    }
  };

  let fullpageSetup = {
    init() {
      $(document).ready(function() {
        $("#fullpage").fullpage({
          // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
          anchors: ["start", "themediums"],
          autoScrolling: true,
          scrollOverflow: false,
          verticalCentered: false,
          scrollingSpeed: 1000
        });
      });
    }
  };

  let googleChartSetup = {
    init() {
      google.charts.load("current", { packages: ["timeline"] });
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var container = document.getElementById("timeline");
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: "string", id: "President" });
        dataTable.addColumn({ type: "date", id: "Start" });
        dataTable.addColumn({ type: "date", id: "End" });
        dataTable.addRows([
          ["One Last Time", new Date(1998, 1, 1), new Date(1999, 1, 1)],
          [
            "Crossing over with John Edward",
            new Date(2001, 2, 4),
            new Date(2004, 2, 4)
          ],
          [
            "Crossing road with John Edward",
            new Date(2006, 2, 4),
            new Date(2008, 2, 4)
          ],
          ["Meet John Edwards", new Date(2012, 2, 4), new Date(2018, 2, 4)]
        ]);
        var options = {
          timeline: {
            barLabelStyle: { fontName: "Garamond", fontSize: 14 }
          }
        };
        chart.draw(dataTable, options);
      }
    }
  };

  app.init();
})();
