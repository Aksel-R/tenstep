<!doctype html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!-- Meta, title, CSS, favicons, etc. -->
  
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/ConformiteControle/css/bootstrap.min.css" >
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/ConformiteControle/css/bootstrap.css" >
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/ConformiteControle/css/style.css" >
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/ConformiteControle/css/achevement.css"  >
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/ConformiteControle/css/w3.css" >
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/ConformiteControle/css/fontawesome.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  


  <!-- Font Awesome -->
  <!-- NProgress -->
 <style type="text/css">
  .navbar-inverse {
            background-color: #cf232a;
            border-color: #cf232a;
        }


        .btn-group-vertical>.btn-group:after,
        .btn-group-vertical>.btn-group:before,
        .btn-toolbar:after,
        .btn-toolbar:before,
        .clearfix:after,
        .clearfix:before,
        .container1-fluid:after,
        .container1-fluid:before,
        .container1:after,
        .container1:before,
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
.panel-primary {
    border-color: #cf232a;
    box-shadow: 0px 4px 8px 0px rgb(0 0 0);
    border-radius: 6px;
}

.panel-primary>.panel-heading {
    color: #fff;
    background-color: #cf232a;
    border-color: #cf232a;
}






  </style>



</head>
<body style="font-family: serif;">



 <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="border-radius: 5px; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 100%);">
    <ul class="nav navbar-right top-nav"  style="padding-left: 0px; padding-right: 0px;width: 40%;">
        <h3 id="titre" style="color: white; float: left; margin-bottom: 0px;margin-top: 0px;">Conformité Contrôle Permanant et Sécurité Financière
        </h3>
    </ul>
    <select class="mdb-select md-form"
                style="float: left; width: 30%; background-color: #cf232a; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList1" onchange="remplirSel();mainFilter();">
                <option value="">Direction Régionale</option>

            </select>
            <select class="mdb-select md-form"
                style="float: left; width: 30%; background-color: #cf232a; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList2" onchange="mainFilter();">
                <option value="">Contrôleur</option>

            </select>

</nav>

<div class="row" id="row1">
     <div class="col-lg-12">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-clock-o"></i> Taux Anomalies par CR
                </h3>
            </div>
            <div class="panel-body" style="padding: 0px 15px;">
              <div class="row">
                <div class="col-lg-4" id="div-container1">
                  <div id="container1"></div>
                </div> 
                <div class="col-lg-4" id="div-container2">
                  <div id="container2"></div>
                </div>
                <div class="col-lg-4" id="tauxG">
                  <div class="col-lg-6">
                    <div class="row" id="image1">
                      
                    </div>
                    <div class="row" id="value1">
                      
                    </div>
                    <div class="row" id="titre1">
                      
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row" id="image2">
                      
                    </div>
                    <div class="row" id="value2">
                      
                    </div>
                    <div class="row" id="titre2">
                      
                    </div>
                  </div>
                </div>
              </div>            
            </div>
          </div> 
    </div>
    
</div>
<div class="row" id="row01">
  <div class="col-lg-12">
            <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-clock-o"></i> Répartition des CR
                </h3>
            </div>
            <div class="panel-body" style="padding: 0px 15px;">
              <div class="row" id="div-container4">
                <div id="container4" style="width:100%;"></div>
              </div>            
            </div>
          </div> 
    </div>
</div>  
<div class="row" id="row2">
  <div class="col-lg-12">
            <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-clock-o"></i> Répartition des Anomalies
                </h3>
            </div>
            <div class="panel-body" style="padding: 0px 15px;">
              <div class="row" id="div-container5">
                <div id="container5" style="overflow: hidden;width: 100%;"></div>
              </div>            
            </div>
          </div> 
    </div>
</div>    
      
 

</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/ConformiteControle/javascript/jquery-3.5.1.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/ConformiteControle/javascript/highcharts.js"></script>


<script src="/sites/bhcom/_catalogs/masterpage/ConformiteControle/javascript/conToKM.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/ConformiteControle/javascript/filter.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/ConformiteControle/javascript/Mysel1.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/ConformiteControle/javascript/accessibility.js"></script>

<script type="/sites/bhcom/_catalogs/masterpage/ConformiteControle/javascript/custom.min.js"></script>

<script type="text/javascript"> 
      var responseRegion=responseRegion||[];
  var urlRegion=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Direction_x0020_R_x00e9_gionale";
  //////////////////console.log.log('urlRegion= '+urlRegion);
  function LoadRegion() {
            var nbre = 0;


            $.ajax({
                url: urlRegion,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseRegion = responseRegion.concat(data.d.results);
                    if (data.d.__next) {
                        urlRegion = data.d.__next;
                        LoadRegion();
                    }
                   
                    $.each(responseRegion, function (key, value) {
                      var region=value.Direction_x0020_R_x00e9_gionale;
                      $('#myList1').append($('<option>',
                         {
                            text : region,
                            value:region
                          })); 
                          var opt = {};
                            $("#myList1 > option").each(function () {
                              if(opt[$(this).text()]) {
                                  $(this).remove();
                              } else {
                                  opt[$(this).text()] = $(this).val();
                              }
                             });
                    });
                  
                    
                    
                }
            });
        }
        LoadRegion();

        var arrUserId=[];
        var arrUserName=[];
        

  var responseControleur=responseControleur||[];
  var urlControleur=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Contr_x00f4_leur_x0020_R_x00e9_gId";
  //////////////////console.log.log('urlControleur= '+urlControleur);
  function LoadControleur() {
            var nbre = 0;


            $.ajax({
                url: urlControleur,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseControleur = responseControleur.concat(data.d.results);
                    if (data.d.__next) {
                        urlControleur = data.d.__next;
                        LoadControleur();
                    }
                    if (!data.d.__next) {
                      var arrControlleurId=[];
                      var arrControlleurNom=[];
                      var arrJourControl=[];
                      var arrAvgControlJr=[];
                      var nbJournee=0;
                      $.each(responseControleur, function (key, value) {
                        var listControleur=[];
                        ////console.log("va="+value.Contr_x00f4_leur_x0020_R_x00e9_gId.results);
                        listControleur=value.Contr_x00f4_leur_x0020_R_x00e9_gId.results;
                         for (var i = 0; i < listControleur.length; i++) {
                          ////console.log(listControleur[i]);
                            if (arrControlleurId.indexOf(listControleur[i])==-1) {
                              arrControlleurId.push(listControleur[i]);
                              arrControlleurNom.push("");
                              arrJourControl.push(0);
                              arrAvgControlJr.push(0);
                            }
                          }
                      });
                     
                      //console.log("arrControlleurId= "+arrControlleurId);
                      for (var i = 0; i < arrControlleurId.length; i++) {
                        remplirArrControleur(arrControlleurId[i],arrControlleurId,arrControlleurNom,i,nbJournee,arrJourControl,arrAvgControlJr);
                      }
                    }
                    
                  
                    
                    
                }
            });
        }
        LoadControleur();
        
        function remplirArrControleur(userid,arrControlleurId,arrControlleurNom,count,nbJournee,arrJourControl,arrAvgControlJr) {
          var urlCurrUser=_spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";
          var responseCurrUser=responseCurrUser||[];
          function putCurrUser() {
            $.ajax({
                url: urlCurrUser,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseCurrUser = responseCurrUser.concat(data.d.results);
                    if (data.d.__next) {
                        urlCurrUser = data.d.__next;
                        putCurrUser();
                    }
                    ////console.log("Title= "+data.d.Title)
                        var nomU=data.d.Title;
                        arrControlleurNom[arrControlleurId.indexOf(userid)]=nomU;
                    // if (!data.d.__next) {
                    //   $.each(responseCurrUser, function (key, value) {

                    //   });
                     
                    // }
                    if (count==arrControlleurNom.length-1) {
                      loadContrlInfo(arrControlleurId,arrControlleurNom,nbJournee,arrJourControl,arrAvgControlJr);
                      rempliSel2(arrControlleurNom,arrControlleurId);
                      //console.log(arrControlleurNom);
                      

                    }
                   
                    
                    
                }
            });
          }
          putCurrUser();
        }
function rempliSel2(arrControlleurNom,arrControlleurId) {
  for (var i = 0; i < arrControlleurNom.length; i++) {
    if (arrControlleurNom!="") {                          
      $('#myList2').append($('<option>',
        {
          text : arrControlleurNom[i],
          value: arrControlleurId[i]
        })); 
    }
  }
}

function loadContrlInfo(arrControlleurId,arrControlleurNom,nbJournee,arrJourControl,arrAvgControlJr) {
  console.log('test1');
  moment.locale('fr');
   var startOfMonth1= moment().startOf('month').format('YYYY-MM-DD');
   var endOfMonth1 = moment().endOf('month').format('YYYY-MM-DD');
   var urlDateDebut1=startOfMonth1+'T00:00:00.000';
   var urlDateFin1=endOfMonth1+'T00:00:00.000';
   var responseRemplirControleur=responseRemplirControleur || []
   var urlRemplirControleur=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Date_x0020_Journ_x00e9_e ge datetime'"+urlDateDebut1+"' and Date_x0020_Journ_x00e9_e le datetime'"+urlDateFin1+"'";
    console.log('urlRemplirControleur= '+urlRemplirControleur);
    function loadRemplirControleur() {
              


              $.ajax({
                  url: urlRemplirControleur,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseRemplirControleur = responseRemplirControleur.concat(data.d.results);
                      if (data.d.__next) {
                          urlRemplirControleur = data.d.__next;
                          loadRemplirControleur();
                      }
                      if (!data.d.__next) {
                        var arrJourneeDate=[];
                        $.each(responseRemplirControleur, function (key, value) {
                          moment.locale('fr');
                          var dateJ=value.Date_x0020_Journ_x00e9_e;
                          var dateJournee=moment(dateJ).format('YYYY-MM-DD');
                          if (arrJourneeDate.indexOf(dateJournee)<0) {
                            arrJourneeDate.push(dateJournee);
                          }
                        });
                        console.log("arrJourneeDate= "+arrJourneeDate);
                        if (arrJourneeDate.length.length>0) {
                            for (var i = 0; i < arrJourneeDate.length; i++) {
                              loadPieInfo(arrControlleurId,arrControlleurNom,nbJournee,arrJourControl,arrAvgControlJr,arrJourneeDate[i],i,arrJourneeDate);
                            }
                        }else{
                          var moisAnnAct1111=moment().format("MM-YYYY");
                          Highcharts.chart('container1', {
                            chart: {
                                plotBackgroundColor: null,
                                plotBorderWidth: null,
                                plotShadow: false,
                                type: 'pie'
                            },
                            title: {
                                text: 'Capacité Equipe (mois '+moisAnnAct1111+')'
                            },
                            tooltip: {
                                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                            },
                            accessibility: {
                                point: {
                                    valueSuffix: '%'
                                }
                            },
                            plotOptions: {
                                pie: {
                                    allowPointSelect: true,
                                    cursor: 'pointer',
                                    dataLabels: {
                                        enabled: true,
                                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                    },
                                    showInLegend: true
                                }
                            },
                            series: [{
                                name: 'Contrôleurs',
                                colorByPoint: true,
                                data: [{
                                    name: 'Actif',
                                    y: 0,
                                    sliced: true,
                                    selected: true
                                }, {
                                    name: 'Non Actif',
                                    y: 100
                                }]
                            }]
                        });
                        }
                        
                     }
                      
                    
                      
                      
                  }
              });
          }
        loadRemplirControleur();
}
function loadPieInfo(arrControlleurId,arrControlleurNom,nbJournee,arrJourControl,arrAvgControlJr,dateJourne,countJrs,arrJourneeDate) {
  console.log('test2');
  var jourUrl=dateJourne+'T00:00:00.000';
  
  var responseCapEq=responseCapEq || []
   var urlCapEq=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Date_x0020_Journ_x00e9_e eq datetime'"+jourUrl+"'";
    //console.log('urlCapEq= '+urlCapEq);
    function loadCapEq() {
              


              $.ajax({
                  url: urlCapEq,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseCapEq = responseCapEq.concat(data.d.results);
                      if (data.d.__next) {
                          urlCapEq = data.d.__next;
                          loadCapEq();
                      }
                      if (!data.d.__next) {
                        var arrctrlAux=[];
                        nbJournee++;
                        for (var i = 0; i < arrControlleurId.length; i++) {
                          arrctrlAux[i]=0;
                        }
                        $.each(responseCapEq, function (key, value) {
                          
                          var ctrleurID=value.AuthorId;
                          if (arrctrlAux[arrControlleurId.indexOf(ctrleurID)]==0) {
                            arrctrlAux[arrControlleurId.indexOf(ctrleurID)]=1;
                          }
                        });
                          for (var i = 0; i < arrControlleurId.length; i++) {
                            arrControlleurId[i]=parseFloat(arrControlleurId[i]+arrctrlAux[i]);
                          }
                          console.log("countJrs= "+countJrs);
                          if (countJrs==arrJourneeDate.length-1) {
                            putPieChart(arrControlleurId,nbJournee);
                          }
                     }
                      
                    
                      
                      
                  }
              });
          }
        loadCapEq();
}
function putPieChart(arrControlleurId,nbJournee) {
  var arrAvgTauxx=[];
  var sumAvgTauxx=0;
  var avgGen=0;
  for (var i = 0; i < arrControlleurId.length; i++) {
    arrAvgTauxx[i]=parseFloat(arrControlleurId[i]/nbJournee);
  }
  for (var j = 0; j < arrAvgTauxx.length; j++) {
    sumAvgTauxx+=parseFloat(arrAvgTauxx[j]);
  }
  avgGen=parseFloat(sumAvgTauxx/arrAvgTauxx.length).toFixed(0);
  var avgGenNonDispo=100-avgGen;
  var moisAnnAct111=moment().format("MM-YYYY");
  Highcharts.chart('container1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Capacité Equipe (mois '+moisAnnAct111+')'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Contrôleurs',
            colorByPoint: true,
            data: [{
                name: 'Actif',
                y: avgGen,
                sliced: true,
                selected: true
            }, {
                name: 'Non Actif',
                y: avgGenNonDispo
            }]
        }]
    });
}
//***********************************************************************************************************************************************
  moment.locale('fr');
   var startOfMonth= moment().startOf('month').format('YYYY-MM-DD');
   var endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
   var urlDateDebut=startOfMonth+'T00:00:00.000';
   var urlDateFin=endOfMonth+'T00:00:00.000';
   var colors=["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
   var colors1=["#cf232a","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
    var responseReparationCR=responseReparationCR || []
   var urlReparationCR=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Date_x0020_Journ_x00e9_e ge datetime'"+urlDateDebut+"' and Date_x0020_Journ_x00e9_e le datetime'"+urlDateFin+"'";
    //console.log('urlReparationCR= '+urlReparationCR);
    function LoadCharts() {
              var nbre = 0;


              $.ajax({
                  url: urlReparationCR,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseReparationCR = responseReparationCR.concat(data.d.results);
                      if (data.d.__next) {
                          urlReparationCR = data.d.__next;
                          LoadCharts();
                      }
                      if (!data.d.__next) {
                        var arrRegionalDir=["DIRECTION REGIONALE TUNIS Médina","DIRECTION REGIONALE DU NORD","DIRECTION REGIONALE TUNIS NORD","DIRECTION REGIONALE TUNIS SUD  ET CAP BON","DIRECTION REGIONALE DU SUD","CENTRE D'AFFAIRES HEDI NOUIRA","DIRECTION REGIONALE DU SAHEL","DIRECTION REGIONALE SFAX ET CENTRE","CENTRE D'AFFAIRES RETAIL KHEIREDDINE PACHA"];
                        var arrCRCount=[0,0,0,0,0,0,0,0,0];
                        var arrCRAnomalie=[0,0,0,0,0,0,0,0,0];
                        var arrMois=[];
                        var arrSumMoiCr=[];
                        var arrSumMoiAnnomalie=[];

                        var sumCr=0;
                        var sumAnn=0;
                        $.each(responseReparationCR, function (key, value) {
                          sumCr++;
                          var region=value.R_x00e9_gion_x0020_de_x0020_l_x0;
                          arrCRCount[arrRegionalDir.indexOf(region)]=parseInt(arrCRCount[arrRegionalDir.indexOf(region)]+1);
                          var nbNonConforme=0;
                          if (value.N_x00b0__x0020_Non_x0020_Conform!=null) {
                            nbNonConforme=value.N_x00b0__x0020_Non_x0020_Conform;
                          }
                          arrCRAnomalie[arrRegionalDir.indexOf(region)]=parseInt(arrCRAnomalie[arrRegionalDir.indexOf(region)]+nbNonConforme);
                            sumAnn=parseInt(sumAnn+nbNonConforme);
                        });
                          //console.log("arrCRCount= "+arrCRCount);
                          var moisAct=moment().format("MM-YYYY");
                          arrMois.push(moisAct);
                          arrSumMoiCr.push(sumCr);
                          arrSumMoiAnnomalie.push(sumAnn);
                          var debMoisAct=moment().startOf('month').format('YYYY-MM-DD');
                          for (var i = 1; i < 3; i++) {
                            monthAdd=parseInt(i)*-1;
                            var date1=moment(debMoisAct).add(monthAdd, 'months').format('YYYY-MM-DD');
                            var date2=moment(date1).add(1, 'months').format('YYYY-MM-DD');
                            var label=moment(date1).format('MM-YYYY')
                            loadPreviousInfo(arrMois,arrSumMoiCr,arrSumMoiAnnomalie,date1,date2,label,i);
                          }
                          
                          var moisAnnAct=moment().format("MM-YYYY");
                          

                        Highcharts.chart('container4', {
                          chart: {
                              type: 'bar'
                          },
                          xAxis: {
                              categories: arrRegionalDir
                          },

                          plotOptions: {
                              series: {
                                  dataLabels: {
                                      enabled: true,
                                      align: 'right',
                                      color: '#FFFFFF',
                                      x: -10
                                  },
                                  pointPadding: 0.1,
                                  groupPadding: 0
                              }
                          },
                            colors: colors,
                            title: {
                                text: 'Répartition des Conrôles Régioneaux par Direction (mois '+moisAnnAct+')'
                            },

                          series: [{
                              name: "Contrôle Régioneaux",
                              data: arrCRCount
                          }]
                      });
                      Highcharts.chart('container5', {
                          chart: {
                              type: 'bar'
                          },
                          xAxis: {
                              categories: arrRegionalDir
                          },

                          plotOptions: {
                              series: {
                                  dataLabels: {
                                      enabled: true,
                                      align: 'right',
                                      color: '#FFFFFF',
                                      x: -10
                                  },
                                  pointPadding: 0.1,
                                  groupPadding: 0
                              }
                          },
                            colors: colors1,
                            title: {
                                text: 'Répartition des Anomalies par Direction (mois '+moisAnnAct+')'
                            },

                          series: [{
                              name: "Anomalies",
                              data: arrCRAnomalie
                          }]
                      });

                     }
                      
                    
                      
                      
                  }
              });
          }
        LoadCharts();
        function loadPreviousInfo(arrMois,arrSumMoiCr,arrSumMoiAnnomalie,date1,date2,label,counter) {
          var limit1=date1+'T00:00:00.000';
          var limit2=date2+'T00:00:00.000';
          var urlPreviousInfo= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Date_x0020_Journ_x00e9_e ge datetime'"+limit1+"' and Date_x0020_Journ_x00e9_e lt datetime'"+limit2+"'";
          var responsePreviousInfo=responsePreviousInfo||[];
          function loadInfoF() {
              var nbre = 0;


              $.ajax({
                  url: urlPreviousInfo,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responsePreviousInfo = responsePreviousInfo.concat(data.d.results);
                      if (data.d.__next) {
                          urlPreviousInfo = data.d.__next;
                          loadInfoF();
                      }
                      if (!data.d.__next) {
                        

                        var sumCr=0;
                        var sumAnn=0;
                        $.each(responsePreviousInfo, function (key, value) {
                          sumCr++;
                          
                          var nbNonConforme=0;
                          if (value.N_x00b0__x0020_Non_x0020_Conform!=null) {
                            nbNonConforme=value.N_x00b0__x0020_Non_x0020_Conform;
                          }
                          
                            sumAnn=parseInt(sumAnn+nbNonConforme);
                        });
                          //console.log("arrCRCount= "+arrCRCount);
                          
                          arrMois[counter]=label;
                          arrSumMoiCr[counter]=sumCr;
                          arrSumMoiAnnomalie[counter]=sumAnn;
                          if (counter==2) {
                            
                            var anneeAct=moment().format("YYYY");
                            var annPass=moment(anneeAct).add(-1, 'year').format('YYYY');
                            var limitYear1=annPass+"-01-01T00:00:00.000";
                            var limitYear2=annPass+"-12-31T00:00:00.000";
                            
                            loadInfoPrevYear(limitYear1,limitYear2,arrMois,arrSumMoiCr,arrSumMoiAnnomalie);
                          }
                          
                     }
                      
                    
                      
                      
                  }
              });
          }
        loadInfoF();
        }
        function loadInfoPrevYear(limitYear1,limitYear2,arrMois,arrSumMoiCr,arrSumMoiAnnomalie){
          var urlPreviousYear= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$select=N_x00b0__x0020_Non_x0020_Conform&$filter=Date_x0020_Journ_x00e9_e ge datetime'"+limitYear1+"' and Date_x0020_Journ_x00e9_e le datetime'"+limitYear2+"'";
          var responsePreviousYear=responsePreviousYear||[];
    function loaddPreviousYear() {
              var nbre = 0;


              $.ajax({
                  url: urlPreviousYear,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responsePreviousYear = responsePreviousYear.concat(data.d.results);
                      if (data.d.__next) {
                          urlPreviousYear = data.d.__next;
                          loaddPreviousYear();
                      }
                      if (!data.d.__next) {
                        

                        var sumCr=0;
                        var sumAnn=0;
                        $.each(responsePreviousYear, function (key, value) {
                          sumCr++;
                          
                          var nbNonConforme=0;
                          if (value.N_x00b0__x0020_Non_x0020_Conform!=null) {
                            nbNonConforme=value.N_x00b0__x0020_Non_x0020_Conform;
                          }
                          
                            sumAnn=parseInt(sumAnn+nbNonConforme);
                        });
                          //console.log("arrCRCount= "+arrCRCount);
                          var labYer="Moyenne- "+moment().add(-1, 'year').format('YYYY');
                          arrMois.push(labYer);
                          arrSumMoiCr.push(sumCr);
                          arrSumMoiAnnomalie.push(sumAnn);
                         // console.log("arrMois= "+arrMois);
                         //    console.log("arrSumMoiCr= "+arrSumMoiCr);
                         //    console.log("arrSumMoiAnnomalie= "+arrSumMoiAnnomalie);
                            var rappCrAnnomalie=[];
                            for (var i = 0; i < arrMois.length; i++) {
                              if (arrSumMoiAnnomalie[i]==0||arrSumMoiCr[i]==0) {
                                rappCrAnnomalie[i]=0;
                              }
                              else{
                                rappCrAnnomalie[i]=parseFloat(parseFloat(arrSumMoiAnnomalie[i])/parseFloat(arrSumMoiCr[i]));
                              }
                            }
                            var tauxMois=0;
                            var tauxMoisAnn=0;
                            if (rappCrAnnomalie[1]!=0) {
                              tauxMois=parseFloat(((rappCrAnnomalie[1]-rappCrAnnomalie[0])/rappCrAnnomalie[1])*100).toFixed(2);
                            }
                            if (rappCrAnnomalie[3]!=0) {
                              tauxMoisAnn=parseFloat(((rappCrAnnomalie[3]-rappCrAnnomalie[0])/rappCrAnnomalie[3])*100).toFixed(2);
                            }
                            var annPred=moment().add(-1, 'year').format('YYYY');
                            var moisPred=moment().add(-1, 'month').format('MM');
                            var mois=moment().format('MM');
                            ch1="Taux d'amélioration Moyenne M"+mois+"/ Moy. M"+moisPred;
                            ch2="Taux d'amélioration Moyenne M"+mois+"/ Moy. A-"+annPred;
                            console.log("tauxMoisAnn= "+tauxMoisAnn);
                            document.getElementById("titre1").innerHTML ='<a class="list-group-item" style="font-size: 17px;color: #000; margin-top: 0%;margin-bottom: 25%;">'+ch1+'</a>';
                            document.getElementById("titre2").innerHTML ='<a class="list-group-item" style="font-size: 17px;color: #000; margin-top: 0%;margin-bottom: 25%;">'+ch2+'</a>';
                            //image1 value1 titre1 image2 value2 titre2
                            if (tauxMois<0) {
                              document.getElementById("image1").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/down-arrow.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 25%;margin-bottom: 5%;'>";
                              document.getElementById("value1").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #d13a36;margin-left: 24%;margin-right: 25%;margin-top: 0%;margin-bottom: 25%;">'+tauxMois+'%</a>';
                            }
                            else if (tauxMois==0) {
                              document.getElementById("image1").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/minus-symbol.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 25%;margin-bottom: 5%;'>";
                              document.getElementById("value1").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #ff5722;margin-left: 24%;margin-right: 25%;margin-top: 0%;margin-bottom: 25%;">'+tauxMois+'%</a>';
                            }
                            else if (tauxMois>0) {
                              document.getElementById("image1").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/up-arrows.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 25%;margin-bottom: 5%;'>";
                              document.getElementById("value1").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #35ab0e;margin-left: 24%;margin-right: 25%;margin-top: 0%;margin-bottom: 25%;">'+tauxMois+'%</a>';
                            }

                            if (tauxMoisAnn<0) {
                              document.getElementById("image2").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/down-arrow.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 25%;margin-bottom: 5%;'>";
                              document.getElementById("value2").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #d13a36;margin-left: 34%;margin-right: 25%;margin-top: 0%;margin-bottom: 25%;">'+tauxMoisAnn+'%</a>';
                            }
                            else if (tauxMoisAnn==0) {
                              console.log('00000')
                              document.getElementById("image2").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/minus-symbol.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 25%;margin-bottom: 5%;'>";
                              document.getElementById("value2").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #ff5722;margin-left: 34%;margin-right: 25%;margin-top: 0%;margin-bottom: 25%;">'+tauxMoisAnn+'%</a>';
                            }
                            else if (tauxMoisAnn>0) {
                              document.getElementById("image2").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/up-arrows.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 25%;margin-bottom: 5%;'>";
                              document.getElementById("value2").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #35ab0e;margin-left: 34%;margin-right: 25%;margin-top: 0%;margin-bottom: 25%;">'+tauxMoisAnn+'%</a>';
                            }
                            //console.log("rappCrAnnomalie= "+rappCrAnnomalie);
                            var moisAnnAct11=moment().format("MM-YYYY");
                          Highcharts.chart('container2', {
                          chart: {
                              type: 'bar'
                          },
                          xAxis: {
                              categories: arrMois
                          },

                          plotOptions: {
                              series: {
                                  dataLabels: {
                                      enabled: true,
                                      align: 'right',
                                      color: '#FFFFFF',
                                      x: -10
                                  },
                                  pointPadding: 0.1,
                                  groupPadding: 0
                              }
                          },
                            colors: colors,
                            title: {
                                text: 'En matière de contrôle permanant du réseau (mois '+moisAnnAct11+')'
                            },

                          series: [{
                              name: "Anomalies/CR",
                              data: rappCrAnnomalie
                          }]
                      });
                     }
                      
                    
                      
                      
                  }
              });
          }
        loaddPreviousYear();
        }
</script>
    
</body>