<!doctype html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!-- Meta, title, CSS, favicons, etc. -->
  
  <link href="/sites/bhcom/_catalogs/masterpage/statistiquesentreprisebh/css/bootstrap.min.css" rel="stylesheet">
  <link href="/sites/bhcom/_catalogs/masterpage/statistiquesentreprisebh/css/bootstrap.css" rel="stylesheet">
  <link href="/sites/bhcom/_catalogs/masterpage/statistiquesentreprisebh/css/w3.css" rel="stylesheet">


  <!-- Font Awesome -->
  <!-- NProgress -->
  <style type="text/css">
  .navbar-inverse {
            background-color: #337ab7;
            border-color: #337ab7;
        }


        .btn-group-vertical>.btn-group:after,
        .btn-group-vertical>.btn-group:before,
        .btn-toolbar:after,
        .btn-toolbar:before,
        .clearfix:after,
        .clearfix:before,
        .container-fluid:after,
        .container-fluid:before,
        .container:after,
        .container:before,
        .dl-horizontal dd:after,
        .dl-horizontal dd:before,
        .form-horizontal .form-group:after,
        .form-horizontal .form-group:before,
        .modal-footer:after,
        .modal-footer:before,
        .modal-header:after,
        .modal-header:before,
        .nav:after,
        .nav:before,
        .navbar-collapse:after,
        .navbar-collapse:before,
        .navbar-header:after,
        .navbar-header:before,
        .navbar:after,
        .navbar:before,
        .pager:after,
        .pager:before,
        .panel-body:after,
        .panel-body:before,
        .row:after,
        .row:before {
            display: none;
            content: " ";
        }
        span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}
th {
    font-size: smaller;
}
text.highcharts-credits {
    display: none;
}
ul#zz12_RootAspMenu {

font-size: 13px;
}
#s4-titlerow {

margin-top: 0px;
margin-bottom: 0px;
padding-top: 18px;
padding-bottom: 8px;
}

//Loading page

#overlay {
  background: #ffffff;
  color: #666666;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 5000;
  top: 0;
  left: 0;
  float: left;
  text-align: center;
  padding-top: 25%;
  opacity: .80;
}
.spinner {
    margin: 0 auto;
    height: 64px;
    width: 64px;
    animation: rotate 0.8s infinite linear;
    border: 5px solid #0072c6;
    border-right-color: transparent;
    border-radius: 50%;
}
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.spinner-border {
  text-align: center;
}


  </style>



</head>
<body>
<!--<div id="overlay">
    <div class="spinner"></div>
    <br/>
    Please Wait A Moment...
</div>-->


 <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="border-radius: 5px;">
    <ul class="nav navbar-right top-nav" style="padding-left: 0px; padding-right: 0px;">
        <h3 id="titre" style="color: white; float: left; margin-bottom: 0px;margin-top: 0px;">IDCE : Tableau de bord
        </h3>
    </ul>
</nav>

    <div class="col-lg-12" style="padding-left: 0px;padding-right: 0px;">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title"> Total Dossiers Par Statuts Et Par Marché : 
                        </h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div id="dossrMarStatChart" style="width:  100%;">
                                <div id="container1"
                                    style="min-width: 310px; max-width: 100%; height: 400px; margin: 0 auto"></div>
                                <div class="col-sm-12" style="padding-left: 7px;padding-right: 7px;">
                                    <table class="table table-bordered table-hover table-striped"
                                        style="border-radius:15px" id="tabMarcheStat">
                                        <thead
                                            style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">
                                            <tr>
                                                <th style="text-align:center;"></th>
                                                <th style="text-align:center; ">Commercial</th>
                                                <th style="text-align:center; ">Crédit</th>
                                                <th style="text-align:center; ">Rejet</th>
                                                <th style="text-align:center; ">Formalités de Garanties</th>
                                                <th style="text-align:center;">Mise en Place</th>
                                                <th style="text-align:center; ">Dossier Dénoué</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <div class="col-lg-12" style="padding-left: 0px;padding-right: 0px;">

            <div class="col-lg-5" style="padding-left: 0px;padding-right: 7px;">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                    <select class="mdb-select md-form"
                style="float: right; width: 25%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList1" onchange="mainDossStatMarch();">
                <option value="">Marché</option>

            </select>
                        <h3 class="panel-title"> Total Dossiers Par Statuts Et Par Marché : 
                        </h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div id="dossierChart" style="width:  100%;">

                                <div id="container" style="min-width: 400px; height: 400px; margin: 0 auto">
                                </div>
                                <div id="addText" style="position:absolute; left:0px; top:0px;"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7" style="padding-left: 7px;padding-right: 0px;">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                    <select class="mdb-select md-form"
                style="float: right; width: 25%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList2" onchange="mainDossPhaseEtChCom();">
                <option value="GRP: Groupes">GRP: Groupes</option>

            </select>
                        <h3 class="panel-title"> Dossiers en phase Etude Commerciale par chargé d'affaire
                        </h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div id="dossierEtudeComercialeChart" style="width:  100%;">
                                <figure class="highcharts-figure">
                                    <div id="container31"></div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div class="col-lg-12" style="padding-left: 0px;padding-right: 0px;">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title"> Total Dossiers Par Statuts Et Par Marché : 
                        </h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                        <div class="col-sm-12" style="padding-left: 7px;padding-right: 7px;">
                                    <table class="table table-bordered table-hover table-striped"
                                        style="border-radius:15px" id="tabMarcheStat11">
                                        <thead
                                            style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">
                                             <tr>
                                                <th style="text-align:center;"></th>
                                                <th style="text-align:center; " colspan="3">Commercial</th>
                                                <th style="text-align:center; " colspan="3">Crédit</th>
                                                <th style="text-align:center; " colspan="3">FG</th>
                                                <th style="text-align:center; " colspan="3">MEP</th>
                                               
                                            </tr>
                                            <tr>
                                                <th style="text-align:center;">Marché</th>
                                                <th style="text-align:center; ">Min</th>
                                                <th style="text-align:center; ">Moyen</th>
                                                <th style="text-align:center; ">Max</th>

                                                <th style="text-align:center; ">Min</th>
                                                <th style="text-align:center; ">Moyen</th>
                                                <th style="text-align:center; ">Max</th>
                                                
                                                <th style="text-align:center; ">Min</th>
                                                <th style="text-align:center; ">Moyen</th>
                                                <th style="text-align:center; ">Max</th>

                                                 <th style="text-align:center; ">Min</th>
                                                 <th style="text-align:center; ">Moyen</th>
                                                <th style="text-align:center; ">Max</th>                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                        <div class="row">
                             <div class="col-sm-12" style="padding-left: 7px;padding-right: 7px;">
                            <div id="container11" style="min-width: 310px; max-width: 100%; height: 1000px; margin: 7px"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
</body>
<script src="/sites/bhcom/_catalogs/masterpage/statistiquesentreprisebh/javascript/jquery-3.5.1.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/statistiquesentreprisebh/javascript/highcharts.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/statistiquesentreprisebh/javascript/filter.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/statistiquesentreprisebh/javascript/Chart.min.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/statistiquesentreprisebh/javascript/conToKM.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/statistiquesentreprisebh/javascript/accessibility.js"></script>
<script type="/sites/bhcom/_catalogs/masterpage/statistiquesentreprisebh/javascript/moment-with-locales.js"></script>
<script type="/sites/bhcom/_catalogs/masterpage/statistiquesentreprisebh/javascript/custom.min.js"></script>

<script type="text/javascript">  

/*jQuery(document).ready(function() {
    jQuery('#overlay').fadeOut(3000);
});*/
      
var responseSelectMarche=responseSelectMarche || [];
        var urlSelectMarche= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('DossCrdEnt')/items?select=March_x00e9_";
        function loadSelectMarche(){
          $.ajax({
                        url: urlSelectMarche,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseSelectMarche = responseSelectMarche.concat(data.d.results);
                            if (data.d.__next) {
                                urlSelectMarche = data.d.__next;
                                loadSelectMarche();
                            }
                            
                            $.each(responseSelectMarche, function (key, value) {
                               if (value.March_x00e9_!=null) {
                                var marche=value.March_x00e9_;
                                $('#myList1').append($('<option>',
                               {
                                  text : marche,
                                  value:marche
                                })); 
                                var opt = {};
                                  $("#myList1 > option").each(function () {
                                    if(opt[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt[$(this).text()] = $(this).val();
                                    }
                                   });
                                  var marche=value.March_x00e9_;
                                $('#myList2').append($('<option>',
                               {
                                  text : marche,
                                  value:marche
                                })); 
                                var opt = {};
                                  $("#myList2 > option").each(function () {
                                    if(opt[$(this).text()]) {
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
        loadSelectMarche();


        var responseDossCrtEnt=responseDossCrtEnt || [];
        var urlDossCrtEnt= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('DossCrdEnt')/items?select=Statut,March_x00e9_";
        function loadDossCrtEnt(){
          $.ajax({
                        url: urlDossCrtEnt,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseDossCrtEnt = responseDossCrtEnt.concat(data.d.results);
                            if (data.d.__next) {
                                urlDossCrtEnt = data.d.__next;
                                loadDossCrtEnt();
                            }
                            
                            var arrStat=["Commercial","Crédit","Rejet","Formalités de Garanties","Mise en Place","Dossier Dénoué"];
                            var arrCountStat=[0,0,0,0,0,0];

                            var nbDoss=0;
                            $.each(responseDossCrtEnt, function (key, value) {
                              nbDoss++;
                               var statut = value.Statut;
                               var marche=value.March_x00e9_;
                               
                               if ((statut=="Etude Commerciale")||(statut=="Dossier Remplacé")) {
                                statut="Commercial";
                               }
                               if ((statut=="Review")||(statut=="Instance Validation Comité de Crédit")||(statut=="Décision Comité de Crédit")||(statut=="Instance Validation Comité Exécutif")||(statut=="Décision Comité Exécutif")||(statut=="Dossier à Représenter Suite à la Décision du Comité")) {
                                statut="Crédit";
                               }
                               if ((statut=="Dossier Refusé par le Comité")||(statut=="F.G : Dossier à Problèmes")||(statut=="Abandon Client")) {
                                statut="Rejet";
                               }
                               if ((statut=="Formalités de Garanties")||(statut=="Formalités de Garanties Accomplies")) {
                                statut="Formalités de Garanties";
                               }
                               if (statut=="Mise en Place") {
                                statut="Mise en Place";
                               }
                               if (statut=="Dossier Dénoué") {
                                statut="Dossier Dénoué";
                               }
                               if (arrStat.indexOf(statut)<0) {
                                arrStat.push(statut);
                                arrCountStat.push(1);
                               }else{
                                arrCountStat[arrStat.indexOf(statut)]=parseInt(arrCountStat[arrStat.indexOf(statut)]+1);
                               }
                            });

                            //console.log("nbDoss= "+nbDoss);
                            var titreChart="IDCE - NOMBRE TOTAL : "+nbDoss+" Dossiers";
                          
                               
                            // Create the chart
    chart = new Highcharts.Chart({
      chart: {
        color: '#000',
        backgroundColor: '#fff',
        renderTo: 'container',
        type: 'pie'
      },
      title: {
        text: titreChart,
        style: {
          "color": "#000"
        }
      },
      yAxis: {
        title: {
          text: 'Total percent market share'
        }
      },
      plotOptions: {
        pie: {
          shadow: false,
          borderColor: null,
          dataLabels: {
                enabled: true,
                format: '{point.y} ',
                distance: -40,

            }
        }
      },
      tooltip: {
        formatter: function() {
          return '<b>' + this.point.name + '</b>: ' + this.y ;
        }
      },
      legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle',
        symbolRadius: 0,
        symbolPadding: 10,
        itemMarginTop: 40,
        itemStyle: {
          "color": "#000"
        }
      },
      series: [{
        name: 'Browsers',
        data: [{
          y: arrCountStat[0],
          name: arrStat[0],
          color: "#3098DB",

        }, {
          y: arrCountStat[1],
          name: arrStat[1],
          color: "#53B14E"
        }, {
          y: arrCountStat[2],
          name: arrStat[2],
          color: "#AFB4BB"
        }, {
          y: arrCountStat[3],
          name: arrStat[3],
          color: "#EAD311"
        }, {
          y: arrCountStat[4],
          name: arrStat[4],
          color: "#1B77B2"
        }, {
          y: arrCountStat[5],
          name: arrStat[5],
          color: "#1B77B2"
        }],
        size: '90%',
        innerSize: '50%',
        showInLegend: true,
        dataLabels: {
          enabled: true
        },
        marker: {
          symbol: 'circle',
          radius: 12
        }
      }]
    }, function(chart) {
      var textX = chart.plotLeft + (chart.plotWidth * 0.5);
      var textY = chart.plotTop + (chart.plotHeight * 0.52);

     /* var span = '<div id="pieChartInfoText" style="position:absolute; text-align:center;">';
      span += '<div style="color:#fff;font-size: 20px;width:50px">6 GB</div><br>';
      span += '</div>';*/

      $("#addText").append(span);
      span = $('#pieChartInfoText');
      span.css('left', textX + (span.width() * -0.5));
      span.css('top', textY + (span.height() * -0.5));
    });

                            
                        }
                    });
        }
        loadDossCrtEnt();

                var responseDossCrtEntMarch=responseDossCrtEntMarch || [];
        var urlDossCrtEntMarch= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('DossCrdEnt')/items?select=Statut,March_x00e9_";
        function loadDossCrtEntMarche(){
          $.ajax({
                        url: urlDossCrtEntMarch,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseDossCrtEntMarch = responseDossCrtEntMarch.concat(data.d.results);
                            if (data.d.__next) {
                                urlDossCrtEntMarch = data.d.__next;
                                loadDossCrtEntMarche();
                            }
                            var arrMarch=[];
                        
                            var arrCountStatCommercial=[];
                            var arrCountStatCredit=[];
                            var arrCountStatRejet=[];
                            var arrCountStatFormalitésGaranties=[];
                            var arrCountStatMisePlace=[];
                            var arrCountStatDossierDenoue=[];
                            $.each(responseDossCrtEntMarch, function (key, value) {
                              var marche=value.March_x00e9_;
                              var statut = value.Statut;
                              if (arrMarch.indexOf(marche)<0) {
                                arrMarch.push(marche);
                                if ((statut=="Etude Commerciale")||(statut=="Dossier Remplacé")) {
                                      statut="Commercial";
                                      arrCountStatCommercial.push(1);
                                      arrCountStatCredit.push(0);
                                      arrCountStatRejet.push(0);
                                      arrCountStatFormalitésGaranties.push(0);
                                      arrCountStatMisePlace.push(0);
                                      arrCountStatDossierDenoue.push(0);
                                     }
                                     if ((statut=="Review")||(statut=="Instance Validation Comité de Crédit")||(statut=="Décision Comité de Crédit")||(statut=="Instance Validation Comité Exécutif")||(statut=="Décision Comité Exécutif")||(statut=="Dossier à Représenter Suite à la Décision du Comité")) {
                                      statut="Crédit";
                                      arrCountStatCommercial.push(0);
                                      arrCountStatCredit.push(1);
                                      arrCountStatRejet.push(0);
                                      arrCountStatFormalitésGaranties.push(0);
                                      arrCountStatMisePlace.push(0);
                                      arrCountStatDossierDenoue.push(0);
                                     }
                                     if ((statut=="Dossier Refusé par le Comité")||(statut=="F.G : Dossier à Problèmes")||(statut=="Abandon Client")) {
                                      statut="Rejet";
                                      arrCountStatCommercial.push(0);
                                      arrCountStatCredit.push(0);
                                      arrCountStatRejet.push(1);
                                      arrCountStatFormalitésGaranties.push(0);
                                      arrCountStatMisePlace.push(0);
                                      arrCountStatDossierDenoue.push(0);
                                     }
                                     if ((statut=="Formalités de Garanties")||(statut=="Formalités de Garanties Accomplies")) {
                                      statut="Formalités de Garanties";
                                      arrCountStatCommercial.push(0);
                                      arrCountStatCredit.push(0);
                                      arrCountStatRejet.push(0);
                                      arrCountStatFormalitésGaranties.push(1);
                                      arrCountStatMisePlace.push(0);
                                      arrCountStatDossierDenoue.push(0);
                                     }
                                     if (statut=="Mise en Place") {
                                      statut="Mise en Place";
                                      arrCountStatCommercial.push(0);
                                      arrCountStatCredit.push(0);
                                      arrCountStatRejet.push(0);
                                      arrCountStatFormalitésGaranties.push(0);
                                      arrCountStatMisePlace.push(1);
                                      arrCountStatDossierDenoue.push(0);
                                     }
                                     if (statut=="Dossier Dénoué") {
                                      statut="Dossier Dénoué";
                                      arrCountStatCommercial.push(0);
                                      arrCountStatCredit.push(0);
                                      arrCountStatRejet.push(0);
                                      arrCountStatFormalitésGaranties.push(0);
                                      arrCountStatMisePlace.push(0);
                                      arrCountStatDossierDenoue.push(1);
                                     }
                                
                                }
                              else{
                                if ((statut=="Etude Commerciale")||(statut=="Dossier Remplacé")) {
                                statut="Commercial";
                                arrCountStatCommercial[arrMarch.indexOf(marche)]+=1;
                               }
                               if ((statut=="Review")||(statut=="Instance Validation Comité de Crédit")||(statut=="Décision Comité de Crédit")||(statut=="Instance Validation Comité Exécutif")||(statut=="Décision Comité Exécutif")||(statut=="Dossier à Représenter Suite à la Décision du Comité")) {
                                statut="Crédit";
                                arrCountStatCredit[arrMarch.indexOf(marche)]+=1;
                               }
                               if ((statut=="Dossier Refusé par le Comité")||(statut=="F.G : Dossier à Problèmes")||(statut=="Abandon Client")) {
                                statut="Rejet";
                                arrCountStatRejet[arrMarch.indexOf(marche)]+=1;
                               }
                               if ((statut=="Formalités de Garanties")||(statut=="Formalités de Garanties Accomplies")) {
                                statut="Formalités de Garanties";
                                arrCountStatFormalitésGaranties[arrMarch.indexOf(marche)]+=1;
                               }
                               if (statut=="Mise en Place") {
                                statut="Mise en Place";
                                arrCountStatMisePlace[arrMarch.indexOf(marche)]+=1;
                               }
                               if (statut=="Dossier Dénoué") {
                                statut="Dossier Dénoué";
                                arrCountStatDossierDenoue[arrMarch.indexOf(marche)]+=1;
                               }
                                
                              }
                            });
                            
                           
                            tableaux = document.getElementById("tabMarcheStat");
                             tr1 = tableaux.getElementsByTagName("tr");
                             if(tr1.length>0){        
                                  $('#tabMarcheStat tbody').empty();
                             }
                            for (var i =  0; i < arrMarch.length; i++) {
                              var tr;
                                        tr = $("<tr>");
                                        tr.append("<th style='text-align:left'>"+arrMarch[i] +"</th>"); 
                                        tr.append("<td style='text-align:center'>" + arrCountStatCommercial[i] + "</td>");//0
                                        tr.append("<td style='text-align:center'>" + arrCountStatCredit[i] + "</td>");//1                        
                                       
                                        tr.append("<td style='text-align:center'>" + arrCountStatRejet[i]+ "</td>"); //2
                                        tr.append("<td style='text-align:center'>"+arrCountStatFormalitésGaranties[i]+"</td>"); //3
                                        tr.append("<td style='text-align:center'>" + arrCountStatMisePlace[i] + "</td>"); //4
                                        tr.append("<td style='text-align:center'>"+ arrCountStatDossierDenoue[i] +"</td>"); //5
                                        
                                        
                                        $('#tabMarcheStat tbody').append(tr);
                            }
                            
                              
                            $('#container1').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: ' '
            },
            xAxis: {
                categories: arrMarch,
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Nombre des dossiers'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    dataLabels: {
                enabled: true,
                format: '{point.y} ',
                distance: -40,

            }
          }

            },
                series: [ {
                name: 'Dossier Dénoué',
                data: arrCountStatDossierDenoue,
                color: "#E78807"
            },
            {
                name: 'Mise en Place',
                data: arrCountStatMisePlace,
                color: "#196CF3"
            },
            {
                name: 'Formalités de Garanties',
                data: arrCountStatFormalitésGaranties,
                color: "#F3B419"
            },
            {
                name: 'Rejet',
                data: arrCountStatRejet,
                color: "#B2B2B2"
            },
            {
                name: 'Credit',
                data: arrCountStatCredit,
                color: "#2A9C06"
            },
            {
                name: 'Commercial',
                data: arrCountStatCommercial,
                color: "#3F7EDF"
            }]
        });
  //console.log("arrMarch= "+arrMarch.length);
                        }
                    });
        }
        loadDossCrtEntMarche();



var responseUsers=responseUsers || [];
        var urlUsers= _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/SiteUsers?$select=Id,Title";
        function loadUsers(){
          $.ajax({
                        url: urlUsers,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseUsers = responseUsers.concat(data.d.results);
                            if (data.d.__next) {
                                urlUsers = data.d.__next;
                                loadUsers();
                            }
                            
                            
                            var arrIdRes=[];
                            var arrNameRes=[];
                            $.each(responseUsers, function (key, value) {
                               
                               var idRes=value.Id;
                               var nomRes=value.Title;
                               arrIdRes.push(idRes);
                               arrNameRes.push(nomRes);
                            });
                            loadDossPhaseEtudeCom(arrIdRes,arrNameRes);
                            
                            
                        }
                    });
        }
        loadUsers();

                var responseDossPhaseEtudeCom=responseDossPhaseEtudeCom || [];
        var urlDossPhaseEtudeCom= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('DossCrdEnt')/items?select=Charg_x00e9__x0020_d_x0027_AffaiId,Statut,March_x00e9_&$filter=March_x00e9_%20eq%27GRP: Groupes%27";
        function loadDossPhaseEtudeCom(arrIdRes,arrNameRes){
          $.ajax({
                        url: urlDossPhaseEtudeCom,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseDossPhaseEtudeCom = responseDossPhaseEtudeCom.concat(data.d.results);
                            if (data.d.__next) {
                                urlDossPhaseEtudeCom = data.d.__next;
                                loadDossPhaseEtudeCom(arrIdRes,arrNameRes);
                            }
                            var arrRess=[];
                            var marche="";
                            var arrCountStatCommercial=[];
                            var arrCountStatCredit=[];
                            var arrCountStatRejet=[];
                            var arrCountStatFormalitésGaranties=[];
                            var arrCountStatMisePlace=[];
                            var arrCountStatDossierDenoue=[];
                            console.log("arrIdRes= "+arrIdRes);
                            $.each(responseDossPhaseEtudeCom, function (key, value) {
                              marche=value.March_x00e9_;
                              var idRes=value.Charg_x00e9__x0020_d_x0027_AffaiId;
                              //console.log("idRes= "+idRes);
                              var nomRessource=arrNameRes[arrIdRes.indexOf(idRes)];
                              //console.log("nomRessource= "+nomRessource);
                              if (nomRessource !==undefined) {
                                      var statut = value.Statut;
                                    if (arrRess.indexOf(nomRessource)<0) {
                                      arrRess.push(nomRessource);
                                      if ((statut=="Etude Commerciale")||(statut=="Dossier Remplacé")) {
                                      statut="Commercial";
                                      arrCountStatCommercial.push(1);
                                      arrCountStatCredit.push(0);
                                      arrCountStatRejet.push(0);
                                      arrCountStatFormalitésGaranties.push(0);
                                      arrCountStatMisePlace.push(0);
                                      arrCountStatDossierDenoue.push(0);
                                     }
                                     if ((statut=="Review")||(statut=="Instance Validation Comité de Crédit")||(statut=="Décision Comité de Crédit")||(statut=="Instance Validation Comité Exécutif")||(statut=="Décision Comité Exécutif")||(statut=="Dossier à Représenter Suite à la Décision du Comité")) {
                                      statut="Crédit";
                                      arrCountStatCommercial.push(0);
                                      arrCountStatCredit.push(1);
                                      arrCountStatRejet.push(0);
                                      arrCountStatFormalitésGaranties.push(0);
                                      arrCountStatMisePlace.push(0);
                                      arrCountStatDossierDenoue.push(0);
                                     }
                                     if ((statut=="Dossier Refusé par le Comité")||(statut=="F.G : Dossier à Problèmes")||(statut=="Abandon Client")) {
                                      statut="Rejet";
                                      arrCountStatCommercial.push(0);
                                      arrCountStatCredit.push(0);
                                      arrCountStatRejet.push(1);
                                      arrCountStatFormalitésGaranties.push(0);
                                      arrCountStatMisePlace.push(0);
                                      arrCountStatDossierDenoue.push(0);
                                     }
                                     if ((statut=="Formalités de Garanties")||(statut=="Formalités de Garanties Accomplies")) {
                                      statut="Formalités de Garanties";
                                      arrCountStatCommercial.push(0);
                                      arrCountStatCredit.push(0);
                                      arrCountStatRejet.push(0);
                                      arrCountStatFormalitésGaranties.push(1);
                                      arrCountStatMisePlace.push(0);
                                      arrCountStatDossierDenoue.push(0);
                                     }
                                     if (statut=="Mise en Place") {
                                      statut="Mise en Place";
                                      arrCountStatCommercial.push(0);
                                      arrCountStatCredit.push(0);
                                      arrCountStatRejet.push(0);
                                      arrCountStatFormalitésGaranties.push(0);
                                      arrCountStatMisePlace.push(1);
                                      arrCountStatDossierDenoue.push(0);
                                     }
                                     if (statut=="Dossier Dénoué") {
                                      statut="Dossier Dénoué";
                                      arrCountStatCommercial.push(0);
                                      arrCountStatCredit.push(0);
                                      arrCountStatRejet.push(0);
                                      arrCountStatFormalitésGaranties.push(0);
                                      arrCountStatMisePlace.push(0);
                                      arrCountStatDossierDenoue.push(1);
                                     }
                                    }
                                    else{
                                        if ((statut=="Etude Commerciale")||(statut=="Dossier Remplacé")) {
                                        statut="Commercial";
                                        arrCountStatCommercial[arrRess.indexOf(nomRessource)]+=1;
                                       }
                                       if ((statut=="Review")||(statut=="Instance Validation Comité de Crédit")||(statut=="Décision Comité de Crédit")||(statut=="Instance Validation Comité Exécutif")||(statut=="Décision Comité Exécutif")||(statut=="Dossier à Représenter Suite à la Décision du Comité")) {
                                        statut="Crédit";
                                        arrCountStatCredit[arrRess.indexOf(nomRessource)]+=1;
                                       }
                                       if ((statut=="Dossier Refusé par le Comité")||(statut=="F.G : Dossier à Problèmes")||(statut=="Abandon Client")) {
                                        statut="Rejet";
                                        arrCountStatRejet[arrRess.indexOf(nomRessource)]+=1;
                                       }
                                       if ((statut=="Formalités de Garanties")||(statut=="Formalités de Garanties Accomplies")) {
                                        statut="Formalités de Garanties";
                                        arrCountStatFormalitésGaranties[arrRess.indexOf(nomRessource)]+=1;
                                       }
                                       if (statut=="Mise en Place") {
                                        statut="Mise en Place";
                                        arrCountStatMisePlace[arrRess.indexOf(nomRessource)]+=1;
                                       }
                                       if (statut=="Dossier Dénoué") {
                                        statut="Dossier Dénoué";
                                        arrCountStatDossierDenoue[arrRess.indexOf(nomRessource)]+=1;
                                       }
                                
                                    }
                                    
                              }
                              

                              
                            });
           

      Highcharts.chart('container31', {
    chart: {
        type: 'bar'
      },
      title: {
          text: marche
      },
      xAxis: {
          categories: arrRess
      },
      yAxis: {
          min: 0,
          title: {
              text: "Total Dossiers en Phase Etude Commerciale par Chargé d'affaire"
          }
      },
      legend: {
          reversed: true
      },
      plotOptions: {
          series: {
              stacking: 'normal',
               dataLabels: {
                enabled: true,
                format: '{point.y} ',
                distance: -40,

            }
          }
      },
      series: [{
                name: 'Dossier Dénoué',
                data: arrCountStatDossierDenoue,
                color: "#E78807"
            },
            {
                name: 'Mise en Place',
                data: arrCountStatMisePlace,
                color: "#196CF3"
            },
            {
                name: 'Formalités de Garanties',
                data: arrCountStatFormalitésGaranties,
                color: "#F3B419"
            },
            {
                name: 'Rejet',
                data: arrCountStatRejet,
                color: "#B2B2B2"
            },
            {
                name: 'Credit',
                data: arrCountStatCredit,
                color: "#2A9C06"
            },
            {
                name: 'Commercial',
                data: arrCountStatCommercial,
                color: "#3F7EDF"
            }],

  });
                            
                            
                        }
                    });
        }
        






 var responseDossMarchStatutTab=responseDossMarchStatutTab || [];
        var urlDossMarchStatutTab= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('DossCrdEnt')/items";
        function loadDossMarchStatutTab(){
          $.ajax({
                        url: urlDossMarchStatutTab,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseDossMarchStatutTab = responseDossMarchStatutTab.concat(data.d.results);
                            if (data.d.__next) {
                                urlDossMarchStatutTab = data.d.__next;
                                loadDossMarchStatutTab();
                            }
                            var maxMoyMin=["Max", "Moy", "Min"];
                            var arrMarch=["GRP: Groupes","PME","PI","GE: Grandes Entreprises","INS: Institutionnels"];
                            // var arrMarchAxes=[
                            // {
                            //     name: "GRP: Groupes",
                            //     categories: maxMoyMin
                            // },{
                            //     name: "PME",
                            //     categories: maxMoyMin
                            // },{
                            //     name: "PI",
                            //     categories: maxMoyMin
                            // },{
                            //     name: "GE: Grandes Entreprises",
                            //     categories: maxMoyMin
                            // },{
                            //     name: "INS: Institutionnels",
                            //     categories: maxMoyMin
                            // }];
                            // console.log("arrMarchAxes= "+arrMarchAxes);
                            var arrCountStatCommercialMin=[0,0,0,0,0];
                            var arrCountStatCreditMin=[0,0,0,0,0];                            
                            var arrCountStatFormalitésGarantiesMin=[0,0,0,0,0];
                            var arrCountStatMisePlaceMin=[0,0,0,0,0];

                            var arrCountStatCommercialMax=[0,0,0,0,0];
                            var arrCountStatCreditMax=[0,0,0,0,0];                            
                            var arrCountStatFormalitésGarantiesMax=[0,0,0,0,0];
                            var arrCountStatMisePlaceMax=[0,0,0,0,0];

                            var arrCountStatCommercial=[0,0,0,0,0];
                            var arrCountStatCredit=[0,0,0,0,0];                            
                            var arrCountStatFormalitésGaranties=[0,0,0,0,0];
                            var arrCountStatMisePlace=[0,0,0,0,0];

                            var arrCountStatCommercialSum=[0,0,0,0,0];
                            var arrCountStatCreditSum=[0,0,0,0,0];                            
                            var arrCountStatFormalitésGarantiesSum=[0,0,0,0,0];
                            var arrCountStatMisePlaceSum=[0,0,0,0,0];

                            var arrCountStatCommercialMoy=[0,0,0,0,0];
                            var arrCountStatCreditMoy=[0,0,0,0,0];                            
                            var arrCountStatFormalitésGarantiesMoy=[0,0,0,0,0];
                            var arrCountStatMisePlaceMoy=[0,0,0,0,0];
                            var testMEP=false;

                            var testComm=false;
                            var testCredit=false;
                            var testFG=false;
                            $.each(responseDossMarchStatutTab, function (key, value) {
                              var marche=value.March_x00e9_;
                              var statut = value.Statut;
                              var delComm=0;
                              if (value.D_x00e9_lai_x0020_1>=0) {
                                delComm=value.D_x00e9_lai_x0020_1;
                              }
                              var delCred=0;
                              if (value.D_x00e9_lai_x0020_Cr_x00e9_dit>=0) {
                                delCred=value.D_x00e9_lai_x0020_Cr_x00e9_dit;
                              }
                              var delFg=0;
                              if (value.D_x00e9_lai_x0020_FG>=0) {
                                delFg=value.D_x00e9_lai_x0020_FG;
                              }
                              var delMep=0;
                              if ((value.D_x00e9_lai_x0020_MEP>=0)&&(value.Date_x0020_Accomplissement_x0020!=null)&&(value.Date_x0020_D_x00e9_blocage!=null)) {
                                delMep=value.D_x00e9_lai_x0020_MEP;

                              }
                              
                              
                              
                              if (arrMarch.indexOf(marche)<0) {
                                arrMarch.push(marche);
                                //arrMarchAxes.push({name: marche,categories: ["Max", "Moy", "Min"]});
                                if ((statut=="Etude Commerciale")||(statut=="Dossier Remplacé")) {
                                      statut="Commercial";
                                      
                                      
                                      if (!isNaN(delComm)){
                                        arrCountStatCommercial.push(1);
                                        arrCountStatCommercialMin.push(parseInt(delComm));
                                        arrCountStatCommercialMax.push(parseInt(delComm));
                                        arrCountStatCommercialSum.push(parseInt(delComm));
                                      }else if (isNaN(delComm)) {
                                        arrCountStatCommercial.push(0);
                                        arrCountStatCommercialMin.push(0);
                                       
                                        arrCountStatCommercialMax.push(0);
                                        arrCountStatCommercialSum.push(0);
                                      }
                                      
                                      
                                     }
                                     if ((statut=="Review")||(statut=="Instance Validation Comité de Crédit")||(statut=="Décision Comité de Crédit")||(statut=="Instance Validation Comité Exécutif")||(statut=="Décision Comité Exécutif")||(statut=="Dossier à Représenter Suite à la Décision du Comité")) {
                                          statut="Crédit";
                                          if (!isNaN(delCred)) {
                                            arrCountStatCredit.push(1);
                                            arrCountStatCreditMin.push(parseInt(delCred));
                                            arrCountStatCreditMax.push(parseInt(delCred));
                                            arrCountStatCreditSum.push(parseInt(delCred));
                                          }else if (isNaN(delCred)) {
                                            arrCountStatCredit.push(0);
                                            arrCountStatCreditMin.push(0);
                                            
                                            arrCountStatCreditMax.push(0);
                                            arrCountStatCreditSum.push(0);
                                          }

                                     }

                                     if ((statut=="Formalités de Garanties")||(statut=="Formalités de Garanties Accomplies")){
                                        statut="Formalités de Garanties";
                                        if (!isNaN(delFg)) {
                                            arrCountStatFormalitésGaranties.push(1);
                                            arrCountStatFormalitésGarantiesMin.push(parseInt(delFg));
                                            arrCountStatFormalitésGarantiesMax.push(parseInt(delFg));
                                            arrCountStatFormalitésGarantiesSum.push(parseInt(delFg));
                                          }else if (isNaN(delFg)) {
                                            arrCountStatFormalitésGaranties.push(0);
                                            arrCountStatFormalitésGarantiesMin.push(0);
                                         
                                            arrCountStatFormalitésGarantiesMax.push(0);
                                            arrCountStatFormalitésGarantiesSum.push(0);
                                          }
                                     }

                                     if (statut=="Mise en Place"){
                                        statut="Mise en Place";
                                        
                                        if (!isNaN(delMep)) {
                                            arrCountStatMisePlace.push(1);
                                            arrCountStatMisePlaceMin.push(parseInt(delMep));
                                            arrCountStatMisePlaceMax.push(parseInt(delMep));
                                            arrCountStatMisePlaceSum.push(parseInt(delMep));
                                          }else if (isNaN(delMep)) {
                                            arrCountStatMisePlace.push(0);
                                            arrCountStatMisePlaceMin.push(0);
                                            
                                            arrCountStatMisePlaceMax.push(0);
                                            arrCountStatMisePlaceSum.push(0);
                                          }
                                     }

                                     
                                
                                }
                              else{
                                if ((statut=="Etude Commerciale")||(statut=="Dossier Remplacé")) {
                                    statut="Commercial";
                                        arrCountStatCommercial[arrMarch.indexOf(marche)]+=1;
                                        arrCountStatCommercialSum[arrMarch.indexOf(marche)]=parseInt(delComm)+parseInt(arrCountStatCommercialSum[arrMarch.indexOf(marche)]);
                                        if (parseInt(delComm)<parseInt(arrCountStatCommercialMin[arrMarch.indexOf(marche)])||testComm==false) {
                                            arrCountStatCommercialMin[arrMarch.indexOf(marche)]=parseInt(delComm);
                                            testComm=true;
                                         
                                        }
                                        if (parseInt(delComm)>parseInt(arrCountStatCommercialMax[arrMarch.indexOf(marche)])) {
                                            arrCountStatCommercialMax[arrMarch.indexOf(marche)]=parseInt(delComm);
                                        }
                                        
                               }
                               if ((statut=="Review")||(statut=="Instance Validation Comité de Crédit")||(statut=="Décision Comité de Crédit")||(statut=="Instance Validation Comité Exécutif")||(statut=="Décision Comité Exécutif")||(statut=="Dossier à Représenter Suite à la Décision du Comité")) {
                                        statut="Crédit";
                                        arrCountStatCredit[arrMarch.indexOf(marche)]+=1;
                                        
                                        arrCountStatCreditSum[arrMarch.indexOf(marche)]=parseInt(delCred)+parseInt(arrCountStatCreditSum[arrMarch.indexOf(marche)]);                                
                                        
                                        if (parseInt(delCred)<parseInt(arrCountStatCreditMin[arrMarch.indexOf(marche)])||testCredit==false) {
                                            arrCountStatCreditMin[arrMarch.indexOf(marche)]=parseInt(delCred);
                                            testCredit=true;
                                        }
                                        if (parseInt(delCred)>parseInt(arrCountStatCreditMax[arrMarch.indexOf(marche)])) {
                                            arrCountStatCreditMax[arrMarch.indexOf(marche)]=parseInt(delCred);
                                        }
                                        
                               }
                               if ((statut=="Formalités de Garanties")||(statut=="Formalités de Garanties Accomplies")){
                                        statut="Formalités de Garanties";
                                        arrCountStatFormalitésGaranties[arrMarch.indexOf(marche)]+=1;
                                        
                                        arrCountStatFormalitésGarantiesSum[arrMarch.indexOf(marche)]=parseInt(delFg)+parseInt(arrCountStatFormalitésGarantiesSum[arrMarch.indexOf(marche)]);                                
                                       
                                        if (parseInt(delFg)<parseInt(arrCountStatFormalitésGarantiesMin[arrMarch.indexOf(marche)])||testFG==false) {
                                            arrCountStatFormalitésGarantiesMin[arrMarch.indexOf(marche)]=parseInt(delFg);
                                            testFG=true;
                                        }
                                        if (parseInt(delFg)>parseInt(arrCountStatFormalitésGarantiesMax[arrMarch.indexOf(marche)])) {
                                            arrCountStatFormalitésGarantiesMax[arrMarch.indexOf(marche)]=parseInt(delFg);
                                        }
                                     }
                                     
                                     if (statut=="Mise en Place"){

                                        statut="Mise en Place";
                                        arrCountStatMisePlace[arrMarch.indexOf(marche)]+=1;
                                        
                                        arrCountStatMisePlaceSum[arrMarch.indexOf(marche)]=parseInt(delMep)+parseInt(arrCountStatMisePlaceSum[arrMarch.indexOf(marche)]);                                
                                        
                                        if (parseInt(delMep)<parseInt(arrCountStatMisePlaceMin[arrMarch.indexOf(marche)])||testMEP==false) {
                                            arrCountStatMisePlaceMin[arrMarch.indexOf(marche)]=parseInt(delMep);
                                            testMEP=true;
                                        }
                                        if (parseInt(delMep)>parseInt(arrCountStatMisePlaceMax[arrMarch.indexOf(marche)])) {
                                            arrCountStatMisePlaceMax[arrMarch.indexOf(marche)]=parseInt(delMep);
                                        }
                                     }

                              
                                
                              }
                            });


                            for (var i = 0; i < arrMarch.length; i++) {
                                var avgCommercial=0;
                                var avgCredit=0;
                                var avgFg=0;
                                var avgMEP=0;
                                if(arrCountStatCommercial[i]!=0){
                                    avgCommercial=parseFloat(arrCountStatCommercialSum[i])/parseFloat(arrCountStatCommercial[i]);
                                }
                                arrCountStatCommercialMoy[i]=parseInt(avgCommercial);

                                if(arrCountStatCredit[i]!=0){
                                    avgCredit=parseFloat(arrCountStatCreditSum[i])/parseFloat(arrCountStatCredit[i]);
                                }
                                arrCountStatCreditMoy[i]=parseInt(avgCredit);

                                if(arrCountStatFormalitésGaranties[i]!=0){
                                    avgFg=parseFloat(arrCountStatFormalitésGarantiesSum[i])/parseFloat(arrCountStatFormalitésGaranties[i]);
                                }
                                arrCountStatFormalitésGarantiesMoy[i]=parseInt(avgFg);

                                if(arrCountStatMisePlace[i]!=0){
                                    avgMEP=parseFloat(arrCountStatMisePlaceSum[i])/parseFloat(arrCountStatMisePlace[i]);
                                    
                                }
                                arrCountStatMisePlaceMoy[i]=parseInt(avgMEP);

                            }

                            // console.log("arrCountStatMisePlace= "+arrCountStatMisePlace);
                            // console.log("arrCountStatMisePlaceSum= "+arrCountStatMisePlaceSum);
                            // console.log("arrCountStatMisePlaceMin= "+arrCountStatMisePlaceMin);
                            // console.log("arrCountStatMisePlaceMax= "+arrCountStatMisePlaceMax);
                            // console.log("___________________________");
                           
                            tableaux = document.getElementById("tabMarcheStat11");
                             tr1 = tableaux.getElementsByTagName("tr");
                             if(tr1.length>0){        
                                  $('#tabMarcheStat11 tbody').empty();
                             }
                            for (var i =  0; i < arrMarch.length; i++) {
                              var tr;
                                        tr = $("<tr>");
                                        tr.append("<th style='text-align:left'>"+arrMarch[i] +"</th>"); 
                                        tr.append("<td style='text-align:center'>" + arrCountStatCommercialMin[i] + "</td>");//0
                                        tr.append("<td style='text-align:center'>" + arrCountStatCommercialMoy[i] + "</td>");//0
                                        tr.append("<td style='text-align:center'>" + arrCountStatCommercialMax[i] + "</td>");//0


                                        tr.append("<td style='text-align:center'>" + arrCountStatCreditMin[i] + "</td>");//1 
                                        tr.append("<td style='text-align:center'>" + arrCountStatCreditMoy[i] + "</td>");//1 
                                        tr.append("<td style='text-align:center'>" + arrCountStatCreditMax[i] + "</td>");//1                        
                                       
                                        
                                        tr.append("<td style='text-align:center'>"+arrCountStatFormalitésGarantiesMin[i]+"</td>"); //3
                                        tr.append("<td style='text-align:center'>"+arrCountStatFormalitésGarantiesMoy[i]+"</td>"); //3
                                        tr.append("<td style='text-align:center'>"+arrCountStatFormalitésGarantiesMax[i]+"</td>"); //3


                                        tr.append("<td style='text-align:center'>" + arrCountStatMisePlaceMin[i] + "</td>"); //4
                                        tr.append("<td style='text-align:center'>" + arrCountStatMisePlaceMoy[i] + "</td>"); //4
                                        tr.append("<td style='text-align:center'>" + arrCountStatMisePlaceMax[i] + "</td>"); //4
                                        
                                        
                                        
                                        $('#tabMarcheStat11 tbody').append(tr);
                            }
                            
                              
 
   var chart = new Highcharts.Chart({
        chart: {
            renderTo: "container11",
            type: "bar"
        },
        title: {
            useHTML: true,
            x: -10,
            y: 8,
          
        },
        series: [{
                name: 'Mise en Place (Max)',
                data: arrCountStatMisePlaceMax,
                color: "#196CF3"
            },
            {
                name: 'Commercial (Max)',
                data: arrCountStatCommercialMax,
                color: "#F3B419"
            },
            {
                name: 'Credit (Max)',
                data: arrCountStatCreditMax,
                color: "#2A9C06"
            },
            {
                name: 'Formalités de Garanties (Max)',
                data: arrCountStatFormalitésGarantiesMax,
                color: "#3F7EDF"
            },
            {
                name: 'Mise en Place (Moy)',
                data: arrCountStatMisePlaceMoy,
                color: "#F3B419"
            },
            {
                name: 'Commercial (Moy)',
                data: arrCountStatCommercialMoy,
                color: "#2A9C06"
            },
            {
                name: 'Credit (Moy)',
                data: arrCountStatCreditMoy,
                color: "#3F7EDF"
            },
            {
                name: 'Formalités de Garanties (Moy)',
                data: arrCountStatFormalitésGarantiesMoy,
                color: "#196CF3"
            },
            {
                name: 'Mise en Place (Min)',
                data: arrCountStatMisePlaceMin,
                color: "#2A9C06"
            },
            

            
            {
                name: 'Formalités de Garanties (Min)',
                data: arrCountStatFormalitésGarantiesMin,
                color: "#F3B419"
            },
            
            

            {
                name: 'Credit (Min)',
                data: arrCountStatCreditMin,
                color: "#196CF3"
            },
            
            
            {
                name: 'Commercial (Min)',
                data: arrCountStatCommercialMin,
                color: "#3F7EDF"
            }],
        xAxis: {
            categories:  [{
                name: 'GRP: Groupes',
                categories: ['Max', 'Moy', 'Min']
            },{
                name: 'PME',
                categories: ['Max', 'Moy', 'Min']
            },{
                name: 'PI',
                categories: ['Max', 'Moy', 'Min']
            },{
                name: 'GE: Grandes Entreprises',
                categories: ['Max', 'Moy', 'Min']
            },{
                name: 'INS: Institutionnels',
                categories: ['Max', 'Moy', 'Min']
            }]
        }
    });



console.log("arrCountStatCommercialMoy= "+arrCountStatCommercialMoy);
console.log("arrCountStatCreditMoy= "+arrCountStatCreditMoy);
console.log("arrCountStatFormalitésGarantiesMoy= "+arrCountStatFormalitésGarantiesMoy);
console.log("arrCountStatMisePlaceMoy= "+arrCountStatMisePlaceMoy);
                        }
                    });
        }
        loadDossMarchStatutTab();

</script>
    
</body>