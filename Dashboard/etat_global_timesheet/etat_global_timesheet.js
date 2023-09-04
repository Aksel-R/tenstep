<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/etat_global_timesheet/css/bootstrap.min.css"
    rel="stylesheet">
  <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/etat_global_timesheet/css/bootstrap.css" rel="stylesheet">
  <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/etat_global_timesheet/css/style.css" rel="stylesheet">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <style>
    .form-item__element {
      display: inline-block;
      padding: 0.5em;
      vertical-align: middle;
      background: #fff;
      border-radius: 4px;
      border: 1px solid gray;
      width: 200px;
    }

    .form-item__element option {
      color: #000;
      font-size: 12pt;
    }

    .ms-core-overlay {
      background-color: white !important
    }

    span#DeltaPlaceHolderPageTitleInTitleArea {
      display: none;
    }

    #tableaux {
      border-radius: 5px;
      overflow: hidden;
      width: 100%;
    }

    #tableaux thead {
      background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);
      color: black;
    }

    #tableaux1 {
      border-radius: 5px;
      overflow: hidden;
      width: 100%;
    }

    #tableaux1 thead {
      background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);
      color: black;
    }

    .stat-digit {
      font-size: 25px;
      font-family: cursive;
    }

    .ms-rtestate-field h4,
    h4.ms-rteElement-H4 {
      line-height: 1.6;
      color: black;
    }

    .form-item__element {
      display: inline-block;
      padding: 0.5em;
      vertical-align: middle;
      background: #fff;
      color: black;
      border-radius: 4px;
      border: 1px solid gray;
      width: 200px;
    }

    .form-item__element option {
      color: #000;
      font-size: 12pt;
    }

    #headercolor {
      background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);
      padding: 10px;
      margin: 0 0 10px 0;
      text-align: right;
      border-radius: 5px;
    }

    #headercolor span {
      float: left;
      padding-top: 10px;
    }

    .smallRisks {
      font-size: 120%;
      float: left;
      font-weight: bold;
      color: #fff;
      padding: 5px;
    }

    #mylist1 {
      background-repeat: no-repeat;
      width: 12%;
      text-align: center;
      font-size: 15px;
      border-radius: 5px;
    }

    option:empty {
      display: none;
    }

    .table-bordered>tbody>tr>td,
    .table-bordered>tbody>tr>th,
    .table-bordered>tfoot>tr>td,
    .table-bordered>tfoot>tr>th,
    .table-bordered>thead>tr>td,
    .table-bordered>thead>tr>th {}

    .glyphicon {
      position: relative;
      top: 1px;
      display: inline-block;
      font-family: "Glyphicons Halflings";
      font-style: normal;
      font-weight: 200;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .w3-spin {
      animation: w3-spin 2s infinite linear;
    }

    .w3-jumbo {
      font-size: 25px !important;
      color: green;
    }

    span#DeltaPlaceHolderPageTitleInTitleArea {
      display: none;
    }

    .ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
      display: none;
    }
  </style>
</head>

<body>

  <div id="headercolor">
    <div>
      <label class="smallRisks"> Etat Global Timesheet :&nbsp; </label>
      <label class="smallRisks" id="nomChantier"></label>
    </div>
    <select class="form-item__element form-item__element--select" style="text-align:center ;color:black;" id="mylist1"
      onchange="MainFilterdatedebut();">
      <option value="Date Début" selected>Date Début</option>
    </select>
  </div>
  <div class="row">
    <div class="col-8">
      <table id="tableaux" class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Direction/status</th>
            <th>Enregistré</th>
            <th>Soumise</th>
            <th>Approuvée</th>
            <th>Rejetée</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    <div class="col-4">
      <table id="tableaux1" class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Titre période</th>
            <th id="titreperiode"></th>
          </tr>
          <tr>
            <th style="width: 50%" id="startdateS"></th>
            <th style="width: 50%" id="enddateS"> </th>

          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  </div>

  <div class="row">
    <div class="col-6">
      <div class="card">
        <div class="card-title" style="text-align: center;color: black">Etat globale timesheet</div>
        <div class="card-body">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="card">
        <div class="card-title" style="text-align: center;color: black">Taux de participation à la feuille de temps
        </div>
        <div class="card-body">
          <canvas id="myChart1"></canvas>
        </div>
      </div>
    </div>
  </div>

  <div class="row" style=" justify-content: center; ">
    <div class="col-sm-11">
      <div class="card">

        <div class="card-title" style="text-align: center; color: black"> Taux de participation hebdomadaire</div>
        <div class="card-body">
          <canvas id="myChart2"></canvas>
        </div>
      </div>
    </div>
  </div>


  <script type="text/javascript" src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/etat_global_timesheet/javascript/MainFilterJS.js"></script>
  <script type="text/javascript" src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/etat_global_timesheet/javascript/jquery3.4.1.js"></script>
  <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.bundle.min.js"></script>
  <script type="text/javascript" type="text/javascript">

    var responseTimeSheet = responseTimeSheet || [];
    var urltimesheet = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=PeriodStartDate";
var nombreRessource;
    function LoadAllStartDate() {

      $.ajax({
        url: urltimesheet,
        method: "GET",
        dataType: "json",
        headers: { Accept: "application/json;odata=verbose" },
        success: function (data) {
          responseTimeSheet = responseTimeSheet.concat(data.d.results);
          if (data.d.__next) {
            urlChantier = data.d.__next;
            LoadAllStartDate();
          }
          var StartDateArr = [];
          var TimesheetlinesNotEmptyArr= [];

          $.each(responseTimeSheet, function (key, value) {

            var datedebut = value.PeriodStartDate;
            var StartDate = moment(datedebut).format('DD-MM-YYYY');
            var StartDate1 = moment(datedebut).format('YYYY-MM-DD');
            if (TimesheetlinesNotEmptyArr.indexOf(StartDate) == -1) {
              TimesheetlinesNotEmptyArr.push(StartDate);
            }

            $('#mylist1').append($('<option>',
              {
                text: StartDate,
                value: StartDate1,
              }));
            var opt = {};
            $("#mylist1 > option").each(function () {
              if (opt[$(this).text()]) {
                $(this).remove();
              } else {
                opt[$(this).text()] = $(this).val();
              }
            });
          });
//console.log("TimesheetlinesNotEmptyArr =" + TimesheetlinesNotEmptyArr.length);
         //console.log("TimesheetlinesNotEmptyArr =" + TimesheetlinesNotEmptyArr);

          var sunday = moment().startOf('year').day("Monday");
          //console.log("sunday= "+moment(sunday).format('DD-MM-YYYY'));
          if (sunday.date() > 7) sunday.add(7, 'd');
          var month = sunday.year();
          //console.log("month= "+month);
          while (month === sunday.year()) {
            //console.log("sunday.toString()= "+sunday.toString());
            var days = sunday.toString();
            sunday.add(7, 'd');
            dayss = moment(days).format('DD-MM-YYYY');
            if (StartDateArr.indexOf(dayss) == -1) {
              StartDateArr.push(dayss);
            }
          }
          //console.log("StartDateArr =" + StartDateArr.length);
          //console.log("StartDateArr =" + StartDateArr);
          loadTauxDeParticipationHebdomadaire(StartDateArr,TimesheetlinesNotEmptyArr);
        }
      });
    }
    LoadAllStartDate();










 var responseTimeSheetlinesNonVide = responseTimeSheetlinesNonVide || [];
    var urlTimeSheetlinesNonVide = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=PeriodStartDate,TimesheetId";

function loadTauxDeParticipationHebdomadaire(StartDateArr,TimesheetlinesNotEmptyArr){

      $.ajax({
        url: urlTimeSheetlinesNonVide,
        method: "GET",
        dataType: "json",
        headers: { Accept: "application/json;odata=verbose" },
        success: function (data) {
          responseTimeSheetlinesNonVide = responseTimeSheetlinesNonVide.concat(data.d.results);
          if (data.d.__next) {
            urlChantier = data.d.__next;
            loadTauxDeParticipationHebdomadaire(StartDateArr,TimesheetlinesNotEmptyArr);
          }

          var NbTimesheetlinesNotEmptyArr= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
          var TsIdArr = [];

          $.each(responseTimeSheetlinesNonVide, function (key, value) {
            
            var TsId = value.TimesheetId;
           var datedebut = value.PeriodStartDate;
           var PeriodStartDateTS = moment(datedebut).format('DD-MM-YYYY');
           //console.log("PeriodStartDateTS="+PeriodStartDateTS);
               // console.log("TimesheetlinesNotEmptyArr = "+ TimesheetlinesNotEmptyArr.join());
             if((TimesheetlinesNotEmptyArr.indexOf(PeriodStartDateTS) > -1) & (TsIdArr.indexOf(TsId) == -1)){
                NbTimesheetlinesNotEmptyArr[StartDateArr.indexOf(PeriodStartDateTS)] += 1;
                TsIdArr.push(TsId);
             } 
          });
          ChartTauxdeParticipationHebdomadaire(StartDateArr,NbTimesheetlinesNotEmptyArr);
         // console.log("NbTimesheetlinesNotEmptyArr = "+ NbTimesheetlinesNotEmptyArr.join());
        }
      });
}




    function loadTableDirectionsTimesheetStatus() {
      var responseDirection = responseDirection || [];
      var urlDirection = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?$select=ResourceId,Noméquipe";

      function LoadAllRessource() {

        $.ajax({
          url: urlDirection,
          method: "GET",
          dataType: "json",
          headers: { Accept: "application/json;odata=verbose" },
          success: function (data) {
            responseDirection = responseDirection.concat(data.d.results);
            if (data.d.__next) {
              urlDirection = data.d.__next;
              LoadAllRessource();
            }
            var dirArr = [];
            var nbressource = 0;
            $.each(responseDirection, function (key, value) {
              var direction = "";
              
              if ((value.Noméquipe != null)&(value.ResourceId != null)) {
                direction = value.Noméquipe;
                nbressource += 1; 

                if (dirArr.indexOf(direction) == -1) {
                  dirArr.push(direction);
                }
              }
            });
             console.log("nbressource = " + nbressource);
             window.nombreRessource = nbressource;
            //console.log("tabdirection = " + dirArr.join());
            getDirections(dirArr);
            ChartEtatGlobalTimesheet(dirArr);
            ChartTauxdeParticipation(dirArr);
          }
        });
      }
      LoadAllRessource();


      function getDirections(dirArr) {
        var responsegetDirections = responsegetDirections || [];
        var urlgetDirections = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetStatus,TimesheetOwner,PeriodStartDate,PeriodEndDate";
        //console.log("urlgetDirections= "+urlgetDirections);
        function LoadDirections() {

          $.ajax({
            url: urlgetDirections,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
              responsegetDirections = responsegetDirections.concat(data.d.results);
              if (data.d.__next) {
                urlgetDirections = data.d.__next;
                LoadDirections();
              }
              for (var i = 0; i < dirArr.length; i++) {
                var tr;
                tr = $("<tr>");
                tr.append("<td style='text-align:left'>" + dirArr[i] + "</td>");//0
                tr.append("<td></td>");//1                        
                tr.append("<td></td>"); //2
                tr.append("<td></td>"); //3
                tr.append("<td></td>"); //4
                $('#tableaux ').append(tr);
              }
            }
          });
        }
        LoadDirections();
      }
    }
    loadTableDirectionsTimesheetStatus();



    function ChartEtatGlobalTimesheet(dirArr) {

      aDatasets1 = [65, 59];
      aDatasets2 = [20, 30];
      aDatasets3 = [30, 20];
      aDatasets4 = [10, 30];
      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: dirArr,

          datasets: [{
            label: 'Enregistrer',
            fill: false,
            data: aDatasets1,
            backgroundColor: '#5773ff',
          },
          {
            label: 'Soumise',
            fill: false,
            data: aDatasets2,
            backgroundColor: '#ffac65',
          },
          {
            label: 'Approuver',
            fill: false,
            data: aDatasets3,
            backgroundColor: '#8cdc9a',
          },
          {
            label: 'Rejeter',
            fill: false,
            data: aDatasets4,
            backgroundColor: '#ff7a7a',
          }]
        },

        options: {
          scales: {
            yAxes: [{
            ticks: {
            
                   min: 0,
                   max: 100,
                   callback: function(value){return value+ "%"}
                },  
                                scaleLabel: {
                   display: false,
                   labelString: "Percentage"
                }
            }]
          },
          title: {
            display: true,
            text: 'Etat globale timesheet'
          },
          responsive: true,


        }
      });
    }


    function ChartTauxdeParticipation(dirArr) {

      aDatasets1 = [65, 59];
      aDatasets2 = [20, 30];

var ctx = document.getElementById("myChart1");
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: dirArr,

          datasets: [{
            label: 'Paricipation',
            fill: false,
            data: aDatasets1,
            backgroundColor: '#5773ff',
          },
          {
            label: 'Non Paricipation',
            fill: false,
            data: aDatasets2,
            backgroundColor: '#ffac65',
          }]
        },

        options: {
          scales: {
           yAxes: [{
            ticks: {
            
                   min: 0,
                   max: 100,
                   callback: function(value){return value+ "%"}
                },  
                                scaleLabel: {
                   display: false,
                   labelString: "Pourcentage de participation"
                }
            }]
          },
          title: {
            display: true,
            text: 'Taux de participation à la feuille de temps'
          },
          responsive: true,

          tooltips: {
            callbacks: {
              labelColor: function (tooltipItem, chart) {
                return {
                  borderColor: '#4ACDE3',
                  backgroundColor: '#4ACDE3'
                }
              }
            }
          },
          legend: {
            labels: {
              // This more specific font property overrides the global property
              fontColor: 'black',

            }
          }
        }
      });


    }


    function ChartTauxdeParticipationHebdomadaire(StartDateArr,NbTimesheetlinesNotEmptyArr) {
        var nombreZnippa =0; 
        var nombreAutre =[]; 
        nombreZnippa = parseFloat(window.nombreRessource).toFixed(0);
        var aDatasets1 = [];

            
        for(var i=0; i<NbTimesheetlinesNotEmptyArr.length;i++)
        {
            nombreAutre.push((NbTimesheetlinesNotEmptyArr[i]/nombreZnippa)*100);
            console.log("NbTimesheetlinesNotEmptyArr="+NbTimesheetlinesNotEmptyArr.join());
     
        }
      console.log("dataset " + nombreAutre.join());
 aDatasets1 = nombreAutre;

      var ctx = document.getElementById("myChart2");
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: StartDateArr,

          datasets: [{
            label: 'Paricipation',
            fill: false,
            data: aDatasets1,
            backgroundColor: '#4ACDE3',
          }]
        },

        options: {
          scales: {
           yAxes: [{
            ticks: {
            
                   min: 0,
                   max: 100,
                   callback: function(value){return value+ "%"}
                },  
                                scaleLabel: {
                   display: true,
                   labelString: "Pourcentage de participation"
                }
            }]
          },
          title: {
            display: true,
            text: 'Taux de participation hebdomadaire'
          },
          responsive: true,

          tooltips: {
            callbacks: {
              labelColor: function (tooltipItem, chart) {
                return {
                  borderColor: '#4ACDE3',
                  backgroundColor: '#4ACDE3'
                }
              }
            }
          },
          legend: {
            labels: {
              // This more specific font property overrides the global property
              fontColor: 'black',

            }
          }
        }
      });
    }

  </script>