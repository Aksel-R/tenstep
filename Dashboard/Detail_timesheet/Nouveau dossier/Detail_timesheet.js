<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
     <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Detail_timesheet/css/select2-bootstrap.min.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Detail_timesheet/css/select2.min.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Detail_timesheet/css/bootstrap.min.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Detail_timesheet/css/bootstrap.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Detail_timesheet/css/style.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Detail_timesheet/css/font-awesome.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Detail_timesheet/css/styleFormFrontEnd.css"
        rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Detail_timesheet/css/w3.css" rel="stylesheet">
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
            background-image: linear-gradient(225deg,#dce9f4 20%, #8eb8d9 80%);

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
            font-size: 170%;
            float: left;
            font-weight: bold;
            color: white;
            padding: 0.5%;
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
            font-size: 14px;
            color: black;
            font-family: ui-monospace;
        }



        /*dropdown css*/

        #debPeriode {
            background-color: white;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 13px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        #typeOp {
            background-color: white;
            background-repeat: no-repeat;
            width: 13%;
            font-size: 13px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        #responsable {
            background-color: white;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 13px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        #resourcePart {
            background-color: white;
            background-repeat: no-repeat;
            width: 100%;
            font-size: 13px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        #categorie {
            background-color: white;
            background-repeat: no-repeat;
            width: 12%;
            font-size: 13px;
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

       #tableaux td{

            text-align: center;
             font-family: serif;
             font-size: 13px;
             font-weight: bold;
        }
        span.select2-search.select2-search--inline {
    display: none;
    color: black;
}
button.select2-selection__choice__remove {
    display: none;
    background-color: #e4e4e4;
    padding: 2%;
    margin: 0%;
    border: 0px;
    color: #999;
}
    </style>
</head>

<body>

    <div id="headercolor" style="margin: 0px -15px 10px -15px">
        <div>
            <label class="labeltimesheet">
                Détail Timesheet
            </label>
        </div>
<div>
        
            <select class="select-tags" style="color:black; font-weight:bold;" id="debPeriode" onchange="mainFilter();">
                <option selected="" value="">Début de la période</option>
            </select>

            <select class="select-tags" style="color:black; font-weight:bold;" id="typeOp" onchange="mainFilter();">
                <option selected="" value="">Type opération</option>
            </select>

            <select class="select-tags" style="color:black; font-weight:bold;" id="responsable" onchange="mainFilter();">
                <option selected="" value="">Responsables</option>
            </select>

            

            <select class="select-tags" style="color:black; font-weight:bold;" id="categorie" onchange="mainFilter();">
                <option selected="" value="">Catégories</option>
            </select>

        </div>
    </div>
<!-- <div class="row select-tags">
<select class="add-tags error" multiple="multiple" style="color:black; font-weight:bold;" id="resourcePart" onchange="mainFilter1();" >
                
            </select>
</div> -->

<div class="row">
<select id="resourcePart" style="width:100%;" multiple="multiple" onchange="mainFilter1();"></select>

</div>
    <div class="row">
        <div class="col-12" style="padding: 0px">
            <div class="x_content table-responsive">
                <table id="tableaux" class="table table-striped table-bordered">
                    <thead style="background-image: linear-gradient(225deg,#dce9f4 20%, #8eb8d9 80%);">
                        <tr>
                            <th style="text-align:center" colspan="6">Detail timesheet</th>
                            <th style="text-align:center">Jour</th>
                            
                            <th style="text-align:center" colspan="9"></th>
                            
                            
                        </tr>
                        <tr>
                            <th style="text-align:center; width: 7%;">collaborateur</th>
                            <th style="text-align:center; width: 7%;">Responsable</th>
                            <th style="text-align:center; width: 7%;">Date Début</th>
                            <th style="text-align:center; width: 8%;">Tache</th>
                            <th style="text-align:center; width: 8%;">Catégorie</th>
                            <th style="text-align:center; width: 6%;">Statut</th>
                            <th style="text-align:center; width: 3%;">Total</th>
                            <th style="width: 2%;"></th>
                            <th  style="text-align:center">Total</th>
                            
                            <th id="date1" style="text-align:center">lundi</th>
                            <th id="date2" style="text-align:center">mardi</th>
                            <th id="date3" style="text-align:center">mercredi</th>
                            <th id="date4" style="text-align:center">jeudi</th>
                            <th id="date5" style="text-align:center">vendredi</th>
                            <th id="date6" style="text-align:center">samedi</th>
                            <th id="date7" style="text-align:center">dimanche</th>

                        </tr>

                    </thead>
                    <tbody ></tbody>
                </table>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Recapitulatif/javascript/custom.min.js"></script>
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Detail_timesheet/javascript/timesheeteFilter.js"></script>
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Detail_timesheet/javascript/MainFunction.js"></script>

    <script type="text/javascript">
  

      

/*function dessinerSelect2(){
     	 $("select.add-tags").select2({
  tags: true,
  dropdownParent: $(".select-tags"),
  placeholder: "Start typing the tag name..."
});
if ($("select.add-tags").select2("data").length) {
  $("select.add-tags")
    .next()
    .find(".select2-search.select2-search--inline .select2-search__field")
    .attr("placeholder", "Placeholder on default");
  $("select.add-tags")
    .next()
    .find(".select2-search.select2-search--inline .select2-search__field")
    .css("width", "20px");
}
$("select.add-tags").on("select2:select", function (evt) {
  // console.log($(this).val());
  console.log("select2 : select");
  var element = evt.params.data.element;
  var $element = $(element);
  $element.detach();
  $(this).append($element);
  $(this).trigger("change");
  if (
    $(".select2-search.select2-search--inline .select2-search__field").is(
      ":focus"
    )
  ) {
    console.log("tag input fpcused");
   // $(".select2-search.select2-search--inline").removeAttr("style");
    $(".select2-search.select2-search--inline .select2-search__field").removeAttr("style");
    $(".select2-search.select2-search--inline .select2-search__field").attr(
      "placeholder",
      "Placeholder on select"
    );
    $(".select2-search.select2-search--inline .select2-search__field").css(
      "width",
      "20px"
    );
  }
});

$("select.add-tags").on("select2:unselect", function () {
  console.log($(this).val());
  console.log("select2 : unselect");
  if ($("select.add-tags").val().length == 0) {
    $(".select2-search.select2-search--inline .select2-search__field").attr(
      "placeholder",
      "Start typing the tag name..."
    );
    $(".select2-search.select2-search--inline .select2-search__field").css(
      "width",
      "100%"
    );
    $(".select2-search.select2-search--.select2-search__field").css(
      "width",
      "100%"
    );
  } else {
    $(".select2-search.select2-search--inline .select2-search__field").attr(
      "placeholder",
      "Add another tag"
    );
    $(".select2-search.select2-search--inline .select2-search__field").css(
      "width",
      "100%"
    );
    $(".select2-search.select2-search--inline").removeAttr("style");
  }
});	
     }
     dessinerSelect2();*/


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


       /* window.addEventListener('load', function () {
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
        });*/

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
                        var sunday = moment().startOf('year').day("Monday");
                        //console.log("sunday= "+moment(sunday).format('DD-MM-YYYY'));
                        if (sunday.date() > 8) sunday.add(8, 'd');
                        var month = sunday.year();
                        //console.log("month= "+month);
                        while (month === sunday.year()) {
                            //console.log("sunday.toString()= "+sunday.toString());
                            var days = sunday.toString();
                            sunday.add(7, 'd');
                            dayss = moment(days).format('L');
                            $('#debPeriode').append($('<option>',
                                {
                                    text: dayss,
                                    value : days
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
                        var nom = value.TimesheetApproverResourceName;
                        if ((nom != "Ressource locale générique")&&(nom != "Ressource inconnue")&&(nom != "Ressource non affectée")) {
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

/*        window.addEventListener('load', function () {
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
        });*/

  

    var responseCollaborateur = responseCollaborateur ||[];
     var urlCollaborateur = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetOwner";
function loadCollaborateur() {
 $.ajax({url:  urlCollaborateur,          
         method: "GET",
         dataType: "json",
         headers: {Accept: "application/json;odata=verbose"},       
         success: function(data) {     
         responseCollaborateur = responseCollaborateur.concat(data.d.results);
           if (data.d.__next) {
             urlCollaborateur = data.d.__next;
             loadCollaborateur();
          } 
          var count=0;         
                          
            $.each(responseCollaborateur, function(key, value) 
            {
                         var nomPart = value.TimesheetOwner;

                        if (nomPart == "Ressource locale générique") {
                            var nomPart = "";
                        }
                        if (nomPart == "Ressource inconnue") {
                            var nomPart = "";
                        }
                        if (nomPart) {
                            optionText = nomPart;
                            optionValue = nomPart;

                            $('#resourcePart').append(`<option selected value="${optionValue}">
                                       ${optionText}
                                  </option>`);
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
         }
        loadCollaborateur();









    var responseTabTimeSheetWeek = responseTabTimeSheetWeek ||[];
     var urlTabTimeSheetWeek = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate,TimesheetOwner,TimesheetApproverResourceName";
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
              var collaborateur=value.TimesheetOwner;
              
              
              
              var responsable=value.TimesheetApproverResourceName;
              if ((responsable == "Ressource locale générique")||(responsable == "Ressource inconnue")||(responsable == "Ressource non affectée")) {
                responsable = "";
              }
              var idFeuille=value.TimesheetLineId;
              //////console.log("idFeuille= "+idFeuille);
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
     var urlTabTimeSheet = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLineActualDataSet?$select=TimeByDay,ActualWorkBillable,PlannedWork,ActualOvertimeWorkBillable,ActualOvertimeWorkNonBillable&$filter=TimesheetLineId%20eq%20guid%27"+idFeuille+"%27&$orderby= TimeByDay asc";
////console.log("url= "+urlTabTimeSheet);
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
          var jourSemaine=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
          //arrDatFeuille[0]=debF;
          //arrDatFeuille[6]= "";
          //var date6=moment(dateDebFeuille).add(1, 'day').format('DD-MM-YYYY')
          //////console.log("debF= "+debF);
          //////console.log("date6= "+date6);


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
            ////console.log("totalPlanifier= "+totalPlanifier);
            ////console.log("totalActuel= "+totalActuel);
            ////console.log("collaborateur = "+collaborateur);
            ////console.log("idFeuille= "+idFeuille);
            ////console.log("date = "+arrDatFeuille.join());
            ////console.log("jourSemaine = "+jourSemaine.join());
            ////console.log("planifier = "+arrPlanifier.join());
            ////console.log("actuel = "+arrActuel.join());
            ////console.log("____________________________________________________________________");

             
                var tr1;
                tr1 = $("<tr>");
                tr1.append("<td rowspan='4'>"+collaborateur+"</td>");
                tr1.append("<td rowspan='4'>"+responsable+"</td>");
                tr1.append("<td rowspan='4'>"+debF+"</td>");
                tr1.append("<td rowspan='4'>"+nomTache+"</td>");
                tr1.append("<td rowspan='4'>"+categorie+"</td>");
                if (statut=="Approuvée") {
                    tr1.append("<td rowspan='4' style='background: rgb(140 220 154);  font-size: 16px;'><i class='fa fa-check fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                }
                    if (statut=="En cours de réalisation") {
                        tr1.append("<td rowspan='4'style='background: rgb(255 172 101);  font-size: 16px;'><i class='fa fa-spinner fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                    }
                    if (statut=="Envoi en attente") {
                        tr1.append("<td rowspan='4'style='background: rgb(255 208 101);  font-size: 16px;'><i class='fa fa-spinner fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                    }

                    if (statut=="Soumise") {
                        tr1.append("<td rowspan='4'style='background: rgb(87 115 255);  font-size: 16px;'><i class='fa fa-paper-plane fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                    }
                        if (statut=="Rejetée") {
                        tr1.append("<td rowspan='4'style='background: rgb(255 122 122);  font-size: 16px;'><i class='fa fa-times fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                    } 
                
                tr1.append("<td rowspan='4'>"+nbJrTravail+"</td>");

                tr1.append("<td style='text-align:center'><i class='fa fa-calendar' aria-hidden='true'></i>&nbsp;Date</td>");
                tr1.append("<td > </td>");
                tr1.append("<td >"+moment(dateDebFeuille).format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(1, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(2, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(3, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(4, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(5, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(6, 'day').format('DD-MM-YYYY')+"</td>");
                tr2 = $("<tr>");

                tr2.append("<td style='text-align:center'><i class='fa fa-tasks' ria-hidden='true'></i>&nbsp;Planifier</td>");
                tr2.append("<td >"+totalPlanifier+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[0])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[1])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[2])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[3])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[4])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[5])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[6])+"</td>");
                tr3 = $("<tr>");
                tr3.append("<td style='text-align:center'><i class='fa fa-clock-o' aria-hidden='true'></i>&nbsp;Actuel</td>");
                tr3.append("<td >"+totalActuel+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[0])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[1])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[2])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[3])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[4])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[5])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[6])+"</td>");
                tr4 = $("<tr>");
                tr4.append("<td style='text-align:center; width:8%'><i class='fa fa-calendar-plus-o' aria-hidden='true'></i>&nbsp;Supplémentaire</td>");
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

       

        







var select = $("#resourcePart").select2(
{ 
  tags: true,
  tokenSeparators: [',', ' ']
}
);

var select = $("#resourcePart");

//var optionsToAdd = ['OPTION1','OPTION2','OPTION3','OPTION4'];


loadMultipleTags(select );
 

function loadMultipleTags(select2Element, newTags)
{ 
  $.each(newTags,function(i,item){

  var newOption = new Option(item, item, false, false);
  select2Element.append(newOption);
});
select2Element.val(newTags);
select2Element.trigger('change');
}

    </script>

</body>

</html>