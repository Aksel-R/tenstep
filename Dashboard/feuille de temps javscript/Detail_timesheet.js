<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/css/bootstrap.min.css" rel="stylesheet">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/css/bootstrap.css" rel="stylesheet">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/css/style.css" rel="stylesheet">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/css/font-awesome.css" rel="stylesheet">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/css/styleFormFrontEnd.css"
        rel="stylesheet">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/css/w3.css" rel="stylesheet">
    <style>
        body {
            margin: 0;
            font-family: Arial
        }

        .form-item__element option {
            color: #444;
            font-size: 14pt;
        }

        /* Header CSS*/

        #headercolor {
            background-image: linear-gradient(225deg, #0072c6 20%, #0061a8 80%);

            padding: 10px;
            margin: 0 0 10px 0;
            text-align: right;
            border-radius: 5px;
        }

        #headercolor span {
            float: left;
            padding-top: 10px;
        }

        .labeltimesheet {
            font-size: 120%;
            float: left;
            font-weight: bold;
            color: white;
            padding: 7px 5px 10px 0px;
        }

        /*tableau CSS*/

        #tableaux {

            /*table-layout: fixed;*/
            border-collapse: collapse;
            border-radius: 15px;
            overflow: hidden;
            width: 100%;

        }

        #tableaux th {

            width: auto;
            padding: 5px;
        }

        #tableaux thead {
            font-size: 15px;
            color: black;
        }



        /*dropdown css*/

        #debPeriode {
            background-color: white;
            background-repeat: no-repeat;
            width: 11%;
            font-size: 15px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        #typeOp {
            background-color: white;
            background-repeat: no-repeat;
            width: 13%;
            font-size: 15px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        #responsable {
            background-color: white;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 15px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        #resourcePart {
            background-color: white;
            background-repeat: no-repeat;
            width: 16%;
            font-size: 15px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        #categorie {
            background-color: white;
            background-repeat: no-repeat;
            width: 12%;
            font-size: 15px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        .ms-core-overlay {
            background-color: white !important
        }

        span#DeltaPlaceHolderPageTitleInTitleArea {
            display: none;
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

        td,
        th {
            border: 1px solid #dddddd;
            text-align: center;
            padding: 5px;
        }
    </style>
</head>

<body>

    <div id="headercolor">
        <div>
            <label class="labeltimesheet">
                Détail Timesheet
            </label>
        </div>

        <div>
            <select class="select" style="color:black; font-weight:bold;" id="debPeriode" onchange="">
                <option selected="" value="">Début de la période</option>
            </select>

            <select class="select" style="color:black; font-weight:bold;" id="typeOp" onchange="filtrerTableau();">
                <option selected="" value="">Type opération</option>
            </select>

            <select class="select" style="color:black; font-weight:bold;" id="responsable" onchange="filtrerTableau();">
                <option selected="" value="">Responsables</option>
            </select>

            <select class="select" style="color:black; font-weight:bold;" id="resourcePart"
                onchange="filtrerTableau();">
                <option selected="" value="">Ressources participants</option>
            </select>

            <select class="select" style="color:black; font-weight:bold;" id="categorie" onchange="filtrerTableau();">
                <option selected="" value="">Catégories</option>
            </select>

        </div>
    </div>


    <div class="row">
        <div class="col-12">
            <div class="x_content table-responsive">
                <table id="tableaux" class="table table-striped table-bordered">
                    <thead style="background-image: linear-gradient(225deg, #51abed 20%, #0072c6 80%); color: white;">
                        <tr>
                            <th style="text-align:center" colspan="6">Detail timesheet</th>
                            <th style="text-align:center">Jour</th>
                            <th></th>
                            <th  style="text-align:center">Total</th>
                            <th id="date7" style="text-align:center">dimanche</th>
                            <th id="date1" style="text-align:center">lundi</th>
                            <th id="date2" style="text-align:center">mardi</th>
                            <th id="date3" style="text-align:center">mercredi</th>
                            <th id="date4" style="text-align:center">jeudi</th>
                            <th id="date5" style="text-align:center">vendredi</th>
                            <th id="date6" style="text-align:center">samedi</th>
                            
                        </tr>
                        <tr>
                            <th style="text-align:center">collaborateur</th>
                            <th style="text-align:center">Responsable</th>
                            <th style="text-align:center">Date Début</th>
                            <th style="text-align:center">Tache</th>
                            <th style="text-align:center">Catégorie</th>
                            <th style="text-align:center">Statut</th>
                            <th style="text-align:center">Total</th>
                            <th style="text-align:center" colspan="9"></th>

                        </tr>

                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/javascript/jquery3.4.1.js"></script>
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/javascript/custom.min.js"></script>
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/javascript/filinselect.js"></script>
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/javascript/filintable.js"></script>
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/javascript/MainFunction.js"></script>


    <script type="text/javascript">
        /*function filterTabKPIs() {

            var tr1;

            tr1 = $("<tr>");
            tr1.append("<th rowspan='4'>Nidhal</th>");
            tr1.append("<th rowspan='4'>Lassaad</th>");
            tr1.append("<th rowspan='4'>30/12/2018</th>");
            tr1.append("<th rowspan='4'>administration</th>");
            tr1.append("<th rowspan='4'>administration</th>");
            tr1.append("<th rowspan='4'>approuvée</th>");
            tr1.append("<th rowspan='4'>5</th>");
            tr1.append("<th style='text-align:center'>Planifier</th>");
            tr1.append("<td >0</td>");
            tr1.append("<td >1</td>");
            tr1.append("<td >2</td>");
            tr1.append("<td >3</td>");
            tr1.append("<td >4</td>");
            tr1.append("<td >5</td>");
            tr1.append("<td >6</td>");
            tr1.append("<td >7</td>");
            tr2 = $("<tr>");
            tr2.append("<th style='text-align:center'>Actuel</th>");
            tr2.append("<td >0</td>");
            tr2.append("<td >1</td>");
            tr2.append("<td >2</td>");
            tr2.append("<td >3</td>");
            tr2.append("<td >4</td>");
            tr2.append("<td >5</td>");
            tr2.append("<td >6</td>");
            tr2.append("<td >7</td>");
            tr3 = $("<tr>");
            tr3.append("<th style='text-align:center'>Supplémentaire</th>");
            tr3.append("<td >0</td>");
            tr3.append("<td >1</td>");
            tr3.append("<td >2</td>");
            tr3.append("<td >3</td>");
            tr3.append("<td >4</td>");
            tr3.append("<td >5</td>");
            tr3.append("<td >6</td>");
            tr3.append("<td >7</td>");

            $('#tableaux').append(tr1);
            $('#tableaux').append(tr2);
            $('#tableaux').append(tr3);
            tr1 = $("<tr>");
            tr1.append("<th rowspan='4'>Nidhal</th>");
            tr1.append("<th rowspan='4'>Lassaad</th>");
            tr1.append("<th rowspan='4'>30/12/2018</th>");
            tr1.append("<th rowspan='4'>administration</th>");
            tr1.append("<th rowspan='4'>administration</th>");
            tr1.append("<th rowspan='4'>approuvée</th>");
            tr1.append("<th rowspan='4'>5</th>");
            tr1.append("<th style='text-align:center'>Planifier</th>");
            tr1.append("<td >0</td>");
            tr1.append("<td >1</td>");
            tr1.append("<td >2</td>");
            tr1.append("<td >3</td>");
            tr1.append("<td >4</td>");
            tr1.append("<td >5</td>");
            tr1.append("<td >6</td>");
            tr1.append("<td >7</td>");
            tr2 = $("<tr>");
            tr2.append("<th style='text-align:center'>Actuel</th>");
            tr2.append("<td >0</td>");
            tr2.append("<td >1</td>");
            tr2.append("<td >2</td>");
            tr2.append("<td >3</td>");
            tr2.append("<td >4</td>");
            tr2.append("<td >5</td>");
            tr2.append("<td >6</td>");
            tr2.append("<td >7</td>");
            tr3 = $("<tr>");
            tr3.append("<th style='text-align:center'>Supplémentaire</th>");
            tr3.append("<td >0</td>");
            tr3.append("<td >1</td>");
            tr3.append("<td >2</td>");
            tr3.append("<td >3</td>");
            tr3.append("<td >4</td>");
            tr3.append("<td >5</td>");
            tr3.append("<td >6</td>");
            tr3.append("<td >7</td>");

            $('#tableaux').append(tr1);
            $('#tableaux').append(tr2);
            $('#tableaux').append(tr3);
            tr1 = $("<tr>");
            tr1.append("<th rowspan='4'>Nidhal</th>");
            tr1.append("<th rowspan='4'>Lassaad</th>");
            tr1.append("<th rowspan='4'>30/12/2018</th>");
            tr1.append("<th rowspan='4'>administration</th>");
            tr1.append("<th rowspan='4'>administration</th>");
            tr1.append("<th rowspan='4'>approuvée</th>");
            tr1.append("<th rowspan='4'>5</th>");
            tr1.append("<th style='text-align:center'>Planifier</th>");
            tr1.append("<td >0</td>");
            tr1.append("<td >1</td>");
            tr1.append("<td >2</td>");
            tr1.append("<td >3</td>");
            tr1.append("<td >4</td>");
            tr1.append("<td >5</td>");
            tr1.append("<td >6</td>");
            tr1.append("<td >7</td>");
            tr2 = $("<tr>");
            tr2.append("<th style='text-align:center'>Actuel</th>");
            tr2.append("<td >0</td>");
            tr2.append("<td >1</td>");
            tr2.append("<td >2</td>");
            tr2.append("<td >3</td>");
            tr2.append("<td >4</td>");
            tr2.append("<td >5</td>");
            tr2.append("<td >6</td>");
            tr2.append("<td >7</td>");
            tr3 = $("<tr>");
            tr3.append("<th style='text-align:center'>Supplémentaire</th>");
            tr3.append("<td >0</td>");
            tr3.append("<td >1</td>");
            tr3.append("<td >2</td>");
            tr3.append("<td >3</td>");
            tr3.append("<td >4</td>");
            tr3.append("<td >5</td>");
            tr3.append("<td >6</td>");
            tr3.append("<td >7</td>");

            $('#tableaux').append(tr1);
            $('#tableaux').append(tr2);
            $('#tableaux').append(tr3);
        }
        filterTabKPIs();

*/

      /*  function DateLoad() {

            moment.locale('fr');
            var curr = new Date();
            var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
            var secondday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 2));
            var thirdday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 3));
            var fourday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 4));
            var fiveday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 5));
            var sixday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
            var sevenday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 7));
            var firstdays = moment(firstday).format('L');

            $('#date1').html(firstdays);
            var seconddays = moment(secondday).format('L');
            $('#date2').html(seconddays);
            var thirddays = moment(thirdday).format('L');
            $('#date3').html(thirddays);
            var fourdays = moment(fourday).format('L');
            $('#date4').html(fourdays);
            var fivedays = moment(fiveday).format('L');
            $('#date5').html(fivedays);
            var sixdays = moment(sixday).format('L');
            $('#date6').html(sixdays);
            var sevendays = moment(sevenday).format('L');
            $('#date7').html(sevendays);

        }
        DateLoad();*/


        window.addEventListener('load', function () {
            $.ajax({
                url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines",
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    var dataResults = data.d.results;
                    $.each(dataResults, function (key, value) {
                        var category = value.TimesheetClassName;
                        if (category) {
                            $('#categorie').append($('<option >',
                                {
                                    text: category
                                }));
                            var opt = {};
                            $("#categorie > option").each(function () {
                                if (opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            });
                        }
                        var monday = moment()
                            .startOf('year')
                            .day("Monday");
                        if (monday.date() > 8) monday.add(8, 'd');
                        var month = monday.year();
                        while (month === monday.year()) {
                            var days = monday.toString();
                            monday.add(7, 'd');
                            dayss = moment(days).format('L');
                            $('#debPeriode').append($('<option>',
                                {
                                    text: dayss
                                }));
                        }
                    });
                }
            });
        });


        window.addEventListener('load', function () {
            $.ajax({
                url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines",
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    var dataResults = data.d.results;
                    $.each(dataResults, function (key, value) {
                        var nomprojet = value.ProjectName;
                        if (nomprojet) {
                            $('#typeOp').append($('<option>',
                                {
                                    text: nomprojet
                                }));
                            var opt = {};
                            $("#typeOp > option").each(function () {
                                if (opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            });
                        }
                    });
                }
            });
        });


        window.addEventListener('load', function () {
            $.ajax({
                url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines",
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    var dataResults = data.d.results;
                    $.each(dataResults, function (key, value) {
                        var nom = value.TimesheetOwner;
                        if (nom) {
                            $('#responsable').append($('<option>',
                                {
                                    text: nom
                                }));
                            var opt = {};
                            $("#responsable > option").each(function () {
                                if (opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            });
                        }
                    });
                }
            });
        });

        window.addEventListener('load', function () {
            $.ajax({
                url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    var dataResults = data.d.results;
                    $.each(dataResults, function (key, value) {
                        var nomPart = value.ResourceName;

                        if (nomPart == "Ressource locale générique") {
                            var nomPart = "";
                        }
                        if (nomPart == "Ressource inconnue") {
                            var nomPart = "";
                        }
                        if (nomPart) {
                            $('#resourcePart').append($('<option>',
                                {
                                    text: nomPart
                                }));
                            var opt = {};
                            $("#resourcePart > option").each(function () {
                                if (opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            });
                        }
                    });
                }
            });
        });










    var responseTabTimeSheetWeek = responseTabTimeSheetWeek ||[];
     var urlTabTimeSheetWeek = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines";
function loadTabTimeSheetWeek() {
 $.ajax({url:  urlTabTimeSheetWeek,          
         method: "GET",
         dataType: "json",
         headers: {Accept: "application/json;odata=verbose"},       
         success: function(data) {     
         responseTabTimeSheetWeek = responseTabTimeSheetWeek.concat(data.d.results);
           if (data.d.__next) {
             urlTabTimeSheetWeek = data.d.__next;
             loadTabTimeSheetWeek();
          } 
          var count=0;         
                          
            $.each(responseTabTimeSheetWeek, function(key, value) 
            {
                moment.locale('fr');
              var collaborateur=value.TimesheetOwner;
              var responsable=value.TimesheetApproverResourceName;
              if ((responsable == "Ressource locale générique")||(responsable == "Ressource inconnue")||(responsable == "Ressource non affectée")) {
                responsable = "";
              }
              var idFeuille=value.TimesheetLineId;
              //console.log("idFeuille= "+idFeuille);
              var nomTache=value.TaskName;
              var categorie=value.TimesheetClassName;
              var statut=value.TimesheetStatus;
              var nbHeursTotal=value.ActualWorkBillable;
              var dateDebFeuille=value.PeriodStartDate;
              var debF=moment(dateDebFeuille).format('DD-MM-YYYY');
              var dateFinFeuille=value.PeriodEndDate;
              var finF=moment(dateFinFeuille).format('DD-MM-YYYY');
              

 

              remplirTab(idFeuille,nomTache,categorie,statut,nbHeursTotal,debF,finF,collaborateur,responsable,dateDebFeuille);
            

 

            });
            
       }
  });
         }
        loadTabTimeSheetWeek();




function remplirTab(idFeuille,nomTache,categorie,statut,nbHeursTotal,debF,finF,collaborateur,responsable,dateDebFeuille){

    var responseTabTimeSheet = responseTabTimeSheet ||[];
     var urlTabTimeSheet = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLineActualDataSet?$filter=TimesheetLineId%20eq%20guid%27"+idFeuille+"%27&$orderby= TimeByDay asc";
console.log("url= "+urlTabTimeSheet);
function loadTabTimeSheet() {
 $.ajax({url:  urlTabTimeSheet,          
         method: "GET",
         dataType: "json",
         headers: {Accept: "application/json;odata=verbose"},       
         success: function(data) {     
         responseTabTimeSheet = responseTabTimeSheet.concat(data.d.results);
           if (data.d.__next) {
             urlTabTimeSheet = data.d.__next;
             loadTabTimeSheet();
          } 
          var arrPlanifier=[0,0,0,0,0,0,0];
          var arrActuel=[0,0,0,0,0,0,0];
          var arrDatFeuille=["","","","","","",""]; 
          var arrSupp=[0,0,0,0,0,0,0];       
          var jourSemaine=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
          //arrDatFeuille[0]=debF;
          //arrDatFeuille[6]= "";
          //var date6=moment(dateDebFeuille).add(1, 'day').format('DD-MM-YYYY')
          //console.log("debF= "+debF);
          //console.log("date6= "+date6);


            $.each(responseTabTimeSheet, function(key, value) 
            {
              moment.locale('fr');
              var date=value.TimeByDay;
              var dateFeuille=moment(date).format('DD-MM-YYYY');
              var dayWeek=moment(date).format('dddd');
              var travailAct=value.ActualWorkBillable;
              var travailPlan=value.PlannedWork;
              var travailSup1=value.ActualOvertimeWorkBillable;
              var travailSup2=value.ActualOvertimeWorkNonBillable;
              var travailSup=parseInt(travailSup1+travailSup2);
              if (arrDatFeuille.indexOf(dateFeuille)==-1){
                arrDatFeuille[jourSemaine.indexOf(dayWeek)]=dateFeuille;
                jourSemaine[jourSemaine.indexOf(dayWeek)]=dayWeek;
                arrPlanifier[jourSemaine.indexOf(dayWeek)]=travailPlan;
                arrActuel[jourSemaine.indexOf(dayWeek)]=travailAct;
                arrSupp[jourSemaine.indexOf(dayWeek)]=travailSup;
              }
               
            });
            var nbJrTravail=0;
            var totalActuel=0;
            for (var i = 0; i <arrActuel.length; i++) {
                totalActuel+=parseInt(arrActuel[i]);
                if (arrActuel[i]!=0) {
                    nbJrTravail+=1;
                }
            }
            var totalPlanifier=0;
            for (var i = 0; i <arrPlanifier.length; i++) {
                totalPlanifier+=parseInt(arrPlanifier[i]);
            }
            var totalSupp=0;
            for (var i = 0; i <arrSupp.length; i++) {
                totalSupp+=parseInt(arrSupp[i]);
            }
            console.log("totalPlanifier= "+totalPlanifier);
            console.log("totalActuel= "+totalActuel);
            console.log("collaborateur = "+collaborateur);
            console.log("idFeuille= "+idFeuille);
            console.log("date = "+arrDatFeuille.join());
            console.log("jourSemaine = "+jourSemaine.join());
            console.log("planifier = "+arrPlanifier.join());
            console.log("actuel = "+arrActuel.join());
            console.log("____________________________________________________________________");

             
                var tr1;
                tr1 = $("<tr>");
                tr1.append("<th rowspan='4'>"+collaborateur+"</th>");
                tr1.append("<th rowspan='4'>"+responsable+"</th>");
                tr1.append("<th rowspan='4'>"+debF+"</th>");
                tr1.append("<th rowspan='4'>"+nomTache+"</th>");
                tr1.append("<th rowspan='4'>"+categorie+"</th>");
                tr1.append("<th rowspan='4'>"+statut+"</th>");
                tr1.append("<th rowspan='4'>"+nbJrTravail+"</th>");

                tr1.append("<th style='text-align:center'>Date</th>");
                tr1.append("<td > </td>");
                tr1.append("<td >"+moment(dateDebFeuille).format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(1, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(2, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(3, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(4, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(5, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(6, 'day').format('DD-MM-YYYY')+"</td>");
                tr2 = $("<tr>");

                tr2.append("<th style='text-align:center'>Planifier</th>");
                tr2.append("<td >"+totalPlanifier+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[0])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[1])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[2])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[3])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[4])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[5])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[6])+"</td>");
                tr3 = $("<tr>");
                tr3.append("<th style='text-align:center'>Actuel</th>");
                tr3.append("<td >"+totalActuel+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[0])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[1])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[2])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[3])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[4])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[5])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[6])+"</td>");
                tr4 = $("<tr>");
                tr4.append("<th style='text-align:center'>Supplémentaire</th>");
                tr4.append("<td >"+totalSupp+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[0])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[1])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[2])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[3])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[4])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[5])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[6])+"</td>");

     

                $('#tableaux').append(tr1);
                $('#tableaux').append(tr2);
                $('#tableaux').append(tr3); 
                $('#tableaux').append(tr4); 
            
       }
  });
 

          
        }
        loadTabTimeSheet();
}

        

    </script>

</body>

</html>