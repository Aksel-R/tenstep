var defaultSite = _spPageContextInfo.siteAbsoluteUrl;
// var defaultSite = 'https://m365x56447071.sharepoint.com/sites/Secteur_Bank/'
var data = data || [];
var finalResult = [];
var obj = {};
var nOfportfolio = 0;
var names = [];
var values = [];
function conToMill(num) {
  if (num == 0) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1).toFixed(2)
      : Math.sign(num) * Math.abs(num);
  }
  if (num < 1000000 && num > 999) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(2) + "K"
      : Math.sign(num) * Math.abs(num);
  }
  if (num < -999 && num > -1000000) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(2) + "K"
      : Math.sign(num) * Math.abs(num);
  }
  if (num < 0 && num > -1000) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1).toFixed(2)
      : Math.sign(num) * Math.abs(num);
  }
  if (num > 0 && num < 1000) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1).toFixed(2)
      : Math.sign(num) * Math.abs(num);
  }
  if (num > 999999) {
    return Math.abs(num) > 999999
      ? Math.sign(num) * (Math.abs(num) / 1000000).toFixed(2) + "M"
      : Math.sign(num) * Math.abs(num);
  }
  if (num < -999999) {
    return Math.abs(num) > 999999
      ? Math.sign(num) * (Math.abs(num) / 1000000).toFixed(2) + "M"
      : Math.sign(num) * Math.abs(num);
  }
}

function numbers(n) {
  var x = n.toFixed(2);

  if (x - Math.floor(x) <= 0.5) {
    return Math.floor(n);
  }
  if (x - Math.floor(x) > 0.5) {
    return Math.ceil(n);
  }
}

function achevePerOne(arr) {
  var achevé = 0;
  var programme = 0;
  var planifiee = 0;
  var reelle = 0;
  var cost = 0;
  var glissement = 0;
  var actualCost = 0;
  var Glicost = 0;
  var Pduration = 0;
  var PAduration = 0;
  var PdurationV = 0;
  var progObj = {};
  for (var i = 0; i < arr.length; i++) {
    achevé += arr[i].ProjectPercentCompleted;
    planifiee += Number(arr[i].ProjectWork);
    reelle += Number(arr[i].ProjectActualWork);
    glissement += Number(arr[i].ProjectWorkVariance);
    cost += Number(arr[i].ProjectCost);
    actualCost += Number(arr[i].ProjectActualCost);
    Glicost += Number(arr[i].ProjectCostVariance);
    Pduration += Number(arr[i].ProjectDuration);
    PAduration += Number(arr[i].ProjectActualDuration);
    PdurationV += Number(arr[i].ProjectDurationVariance);
    if (arr[i].Programme !== null) {
      progObj[arr[i].Programme] = i;
    }
  }
  programme = Object.keys(progObj).length;

  achevé = achevé / arr.length;
  document.getElementById("acheve").innerHTML =
    conToMill(numbers(achevé)) + "%";
  document.getElementById("prog").innerHTML = programme;
  document.getElementById("planifiee").innerHTML =
    conToMill(numbers(planifiee)) + " h";
  document.getElementById("reelle").innerHTML =
    conToMill(numbers(reelle)) + " h";
  document.getElementById("glissement").innerHTML =
    conToMill(numbers(glissement)) + " h";
  document.getElementById("cost").innerHTML = conToMill(numbers(cost)) + " DT";
  document.getElementById("actualCost").innerHTML =
    conToMill(numbers(actualCost)) + " DT";
  document.getElementById("Glicost").innerHTML =
    conToMill(numbers(Glicost)) + " DT";
  document.getElementById("Pduration").innerHTML =
    conToMill(numbers(Pduration)) + " J";
  document.getElementById("PAduration").innerHTML =
    conToMill(numbers(PAduration)) + " J";
  document.getElementById("PdurationV").innerHTML =
    conToMill(numbers(PdurationV)) + " J";
}

var dataForGraph = {};

function getPortfolioData() {
  var url = `${defaultSite}/_api/ProjectData/[en-US]/Projects?$select=EnterpriseProjectTypeName,ProjectPercentCompleted`;
  axios
    .get(url)
    .then((res) => {
      data = data.concat(res.data.value);

      for (var i = 0; i < data.length; i++) {
        key = data[i].EnterpriseProjectTypeName;
        if (key !== null) {
          obj[key] = i;
        }
      }
      finalResult = Object.keys(obj);
      console.log(finalResult, "finalResult");
      nOfportfolio = finalResult.length;

      names = [];
      values = [];
      finalResult.map((e, i) => {
        $(".firstSelect").append(
          $("<option>", {
            text: e,
            value: e,
          })
        );

        $("#table").append(
          $("<tr>", {
            class: "table-light",
            id: i,
          })
        );
        $(`#${i}`).append(
          $("<td>", {
            text: e,
          })
        );
        $(`#${i}`).append(
          $("<td>", {
            text: function () {
              var res = 0;
              var x = data.filter((el) => {
                return el.EnterpriseProjectTypeName === e;
              });
              for (var i = 0; i < x.length; i++) {
                res += Number(x[i].ProjectPercentCompleted);
              }

              names.push(e);
              values.push(res / i);

              return numbers(res / i) + "%";
            },
          })
        );
      });
      chart();
      if (res.__next) {
        url = res.__next;
        getPortfolioData();
      }
    })
    .catch((err) => console.log(err));

  axios
    .get(
      `${defaultSite}/_api/ProjectData/[en-US]/Projects?$select=ProjectPercentCompleted,Programme,ProjectWork,ProjectActualWork,ProjectWorkVariance,ProjectCost,ProjectActualCost,ProjectCostVariance,ProjectDuration,ProjectActualDuration,ProjectDurationVariance`
    )
    .then((res) => {
      var dataProg = res.data.value;
      achevePerOne(dataProg);
      console.log(nOfportfolio);
      document.getElementById("prog").innerHTML = nOfportfolio;
    })
    .catch((err) => console.log(err));
}

getPortfolioData();

var portefeuilleData = portefeuilleData || [];

function firstFilterHandler() {
  obj = {};

  var FirstselectValue = $(".firstSelect").val();
  if (FirstselectValue === "first") {
    $("#table").empty();
    $(".firstSelect").empty();
    var $Sselect = $(".secondSelect");
    $Sselect.prop("disabled", true);
    var $Tselect = $(".thirdSelect");
    $Tselect.prop("disabled", true);
    $(".firstSelect").append(
      $("<option>", {
        text: "Choisir un portefeuille:",
        value: "first",
      })
    );
    document.getElementById("tableFirst").innerHTML =
      "Intitulé des Portefeuilles";
    document.getElementById("secondCard").innerHTML = "Nombre de portefeuilles";
    document.getElementById("firstCard").innerHTML =
      "% achevé  du portefeuille:";
    document.getElementById("charge").innerHTML =
      "Charge de travail du portefeuille (en heure (h)):";
    document.getElementById("cout").innerHTML =
      "Coût du portefeuille (en Dinars (DT)):";
    document.getElementById("duration").innerHTML =
      "Durée du portefeuille (en jours/ou en mois (à précisier):";
    document.getElementById("tableFirst").innerHTML = "Intitulé des programmes";
    document.getElementById("graphTitle").innerHTML = "% achevé des programmes";
    getPortfolioData();
  } else {
    $("#table").empty();
    document.getElementById("tableFirst").innerHTML = "Intitulé des programme";
    document.getElementById("secondCard").innerHTML = "Nombre des programmes";
    document.getElementById("firstCard").innerHTML =
      "% achevé  du portefeuille:";
    obj = {};
    var finaleFiltred = [];
    portefeuilleData = [];
    var name = $(".firstSelect").val().replace(/\s+/g, "%20");
    var url = `${defaultSite}/_api/ProjectData/[en-US]/Projects?$filter=EnterpriseProjectTypeName%20eq%27${name}%27`;
    console.log(name);
    $(".secondSelect").empty();
    $(".thirdSelect").empty();
    $(".secondSelect").append(
      $("<option>", {
        text: "Choisir un Programme:",
        value: "second",
      })
    );

    $(".thirdSelect").append(
      $("<option>", {
        text: "Choisir un Projet:",
        value: "third:",
      })
    );

    axios
      .get(url)
      .then((res) => {
        portefeuilleData = portefeuilleData.concat(res.data.value);
        console.log(res.data);
        achevePerOne(portefeuilleData);
        var $select = $(".secondSelect");
        $select.prop("disabled", false);
        for (var i = 0; i < portefeuilleData.length; i++) {
          key = portefeuilleData[i].Programme;
          if (key !== null) {
            obj[key] = i;
          }
        }
        finaleFiltred = Object.keys(obj);
        names = [];
        values = [];
        finaleFiltred.map((e) => {
          if (e !== null) {
            $(".secondSelect").append(
              $("<option>", {
                text: e,
                value: e,
              })
            );
          }
        });

        finaleFiltred.map((e, i) => {
          $("#table").append(
            $("<tr>", {
              class: "table-light",
              id: i,
            })
          );
          $(`#${i}`).append(
            $("<td>", {
              text: e,
            })
          );
          $(`#${i}`).append(
            $("<td>", {
              text: function () {
                var res = 0;
                var x = portefeuilleData.filter((el) => {
                  return el.Programme === e;
                });
                for (var i = 0; i < x.length; i++) {
                  res += Number(x[i].ProjectPercentCompleted);
                }

                names.push(e);
                values.push(res / i);

                return numbers(res / i) + "%";
              },
            })
          );
        });
        chart();
      })
      .catch((err) => console.log(err));
  }
}

function secondFilterHandler() {
  var secondSelectValue = $(".secondSelect").val();
  console.log(secondSelectValue);
  if (secondSelectValue === "second") {
    console.log("paaaaaaaaaasss");
    $("#table").empty();
    $(".secondSelect").empty();

    var $Tselect = $(".thirdSelect");
    $Tselect.prop("disabled", true);
    $(".secondSelect").append(
      $("<option>", {
        text: "Choisir un Programme:",
        value: "second",
      })
    );
    document.getElementById("tableFirst").innerHTML = "Intitulé des programmes";
    document.getElementById("secondCard").innerHTML = "Nombre de programmes";
    document.getElementById("firstCard").innerHTML =
      "% achevé  du portefeuille:";
    document.getElementById("charge").innerHTML =
      "Charge de travail du portefeuille (en heure (h)):";
    document.getElementById("cout").innerHTML =
      "Coût du portefeuille (en Dinars (DT)):";
    document.getElementById("duration").innerHTML =
      "Durée du portefeuille (en jours/ou en mois (à précisier):";
    document.getElementById("tableFirst").innerHTML = "Intitulé des programmes";
    document.getElementById("graphTitle").innerHTML = "% achevé des programmes";
    firstFilterHandler();
  } else {
    $(".thirdSelect").empty();

    $("#table").empty();
    $(".thirdSelect").append(
      $("<option>", {
        text: "Choisir un Projet:",
        value: "third",
      })
    );

    document.getElementById("firstCard").innerHTML = "% achevé  du programme:";
    document.getElementById("secondCard").innerHTML = "Nombre de projets";
    document.getElementById("charge").innerHTML =
      "Charge de travail du programme (en heure (h)):";
    document.getElementById("cout").innerHTML =
      "Coût du programme (en Dinars (DT)):";
    document.getElementById("duration").innerHTML =
      "Durée du programme (en jours/ou en mois (à précisier):";
    document.getElementById("tableFirst").innerHTML = "Intitulé des projets";
    document.getElementById("graphTitle").innerHTML = "% achevé des projets";

    var programme = $(".secondSelect").val().replace(/\s+/g, "%20");
    var url = `${defaultSite}/_api/ProjectData/[en-US]/Projects?$filter=Programme%20eq%27${programme}%27`;
    axios
      .get(url)
      .then((res) => {
        var programData = res.data.value;

        var prog = 0;
        achevePerOne(programData);
        var filteredProjects = [];
        for (element of programData) {
          prog += element.ProjectPercentCompleted;
          filteredProjects.push({
            id: element.ProjectId,
            name: element.ProjectName,
            acheve: element.ProjectPercentCompleted,
          });
        }
        document.getElementById("prog").innerHTML = filteredProjects.length;
        var $select = $(".thirdSelect");
        $select.prop("disabled", false);
        names = [];
        values = [];
        filteredProjects.map((e, i) => {
          if (e !== null) {
            $(".thirdSelect").append(
              $("<option>", {
                text: e.name,
                value: e.id,
              })
            );

            $("#table").append(
              $("<tr>", {
                class: "table-light",
                id: i,
              })
            );
            $(`#${i}`).append(
              $("<td>", {
                text: e.name,
              })
            );
            $(`#${i}`).append(
              $("<td>", {
                text: function () {
                  var res = 0;
                  var x = programData.filter((el) => {
                    return el.ProjectName === e.name;
                  });

                  for (var i = 0; i < x.length; i++) {
                    res += Number(x[i].ProjectPercentCompleted);
                  }

                  names.push(e.name);
                  values.push(res / i);

                  return numbers(res / i) + "%";
                },
              })
            );
          }
        });

        document.getElementById("acheve").innerHTML =
          numbers(prog / programData.length) + "%";

        $(".chart").append(
          $("<div>", {
            id: "myDiv",
          })
        );
        chart();
      })

      .catch((err) => console.log(err));
  }
}

function chart() {
  var data = [
    {
      x: values,
      y: names,
      type: "bar",
      orientation: "h",
    },
  ];
  var layout = {
    margin: {
      l: 350, // Increase the left margin to provide more space
    },
    width: 900,
    yaxis: {
      width: 800,
      tickfont: { size: 11 },
      // tickangle: -45
    },
  };

  Plotly.newPlot("myDiv2", data, layout);
}

function achevePerTask() {
  names = [];
  values = [];
  var projectId = $(".thirdSelect").val().replace(/\s+/g, "%20");
  var tasksData = [];

  $("#table").empty();
  var url = `${defaultSite}/_api/ProjectData/%5Ben-US%5D/Projects(guid'${projectId}')/Tasks?$filter=TaskIsSummary%20eq%20true`;
  axios
    .get(url)
    .then((res) => {
      tasksData = res.data.value;
      document.getElementById("prog").innerHTML = tasksData.length;

      tasksData.map((e, i) => {
        $("#table").append(
          $("<tr>", {
            class: "table-light",
            id: i,
          })
        );
        $(`#${i}`).append(
          $("<td>", {
            text: e.TaskName,
          })
        );
        $(`#${i}`).append(
          $("<td>", {
            text: function () {
              names.push(e.TaskName);
              values.push(e.TaskPercentCompleted);
              console.log(names, "e");
              return numbers(e.TaskPercentCompleted) + "%";
            },
          })
        );
      });
      chart();
    })

    .catch((err) => console.log(err));
}

function thirdFilterHandler() {
  var thirdselectValue = $(".thirdSelect").val();
  if (thirdselectValue === "third") {
    $("#table").empty();
    $(".thirdSelect").empty();

    $(".thirdSelect").append(
      $("<option>", {
        text: "Choisir un projet:",
        value: "third",
      })
    );
    document.getElementById("tableFirst").innerHTML = "Intitulé des projets";
    document.getElementById("secondCard").innerHTML = "Nombre de projets";
    document.getElementById("firstCard").innerHTML = "% achevé  du programme:";
    document.getElementById("charge").innerHTML =
      "Charge de travail du programme  (en heure (h)):";
    document.getElementById("cout").innerHTML =
      "Coût du programme  (en Dinars (DT)):";
    document.getElementById("duration").innerHTML =
      "Durée du programme  (en jours/ou en mois (à précisier):";

    document.getElementById("graphTitle").innerHTML = "% achevé des programmes";
    secondFilterHandler();
  } else {
    document.getElementById("firstCard").innerHTML = "% achevé du projet:";
    document.getElementById("secondCard").innerHTML = "Nombre de tâches";
    document.getElementById("charge").innerHTML =
      "Charge de travail du projet (en heure (h)):";
    document.getElementById("cout").innerHTML =
      "Coût du projet (en Dinars (DT)):";
    document.getElementById("duration").innerHTML =
      "Durée du projet (en jours/ou en mois (à précisier):";
    document.getElementById("tableFirst").innerHTML = "Intitulé des tâches";
    document.getElementById("graphTitle").innerHTML = "% achevé des tâches";

    var projectId = $(".thirdSelect").val().replace(/\s+/g, "%20");
    var projectData = [];

    var url = `${defaultSite}/_api/ProjectData/[en-US]/Projects?$filter=ProjectId%20eq%20(guid%27${projectId}%27)`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        projectData = res.data.value;

        achevePerOne(projectData);
        achevePerTask();
      })
      .catch((err) => console.log(err));
  }
}
