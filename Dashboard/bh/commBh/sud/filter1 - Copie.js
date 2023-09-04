function mainDate() {
  var rad3=document.getElementById('flexRadioDefault1Rad');
  var rad4=document.getElementById('flexRadioDefault2Rad');
  if (rad4.checked){
    $("#div-container2").css("display", "block");
    $("#tauxG").css("display", "block");
    mainDate1();
  }else if (rad3.checked) {
     $("#div-container2").css("display", "none");
    $("#tauxG").css("display", "none");
    mainDate2();
  } 	
}
//**************************************************************************************************************************************************
//**************************************************************************************************************************************************
//************************************************************filtre par période********************************************************************
//**************************************************************************************************************************************************
//**************************************************************************************************************************************************
function mainDate1() {
  document.getElementById("div-container1").innerHTML ='<div id="container1"style="width:100%;"></div>';
  document.getElementById("div-container2").innerHTML ='<div id="container2"style="width:100%;"></div>';
  document.getElementById("div-container4").innerHTML ='<div id="container4"style="width:100%;"></div>';
  document.getElementById("div-container5").innerHTML ='<div id="container5"style="width:100%;"></div>';
  document.getElementById("div-container44").innerHTML ='<div id="container44"style="width:100%;"></div>';
  var datefilter="";
  var rad1 = document.getElementById('flexRadioDefault1');
  var rad2 = document.getElementById('flexRadioDefault2');
  //console.log("test= "+rad1.checked)
  if (rad1.checked) {
    datefilter="Date_x0020_Journ_x00e9_e";
  }else if (rad2.checked) {
    datefilter="Date_x0020_Controle";
  }
  var timeFilterStat=document.getElementById("myList01").value;

  var list02Stat = document.getElementById("myList02").value;
  console.log('list02Stat= '+list02Stat)
  if ((rad2.checked)&&(timeFilterStat=="Mensuel")&&(list02Stat=="2023-01-01")) {
    // alert("en cours de traitement...")
                              function loadChartsStatique() {
                                        var arrRegionalDir=["DIRECTION REGIONALE TUNIS Médina","DIRECTION REGIONALE DU NORD","DIRECTION REGIONALE TUNIS NORD","DIRECTION REGIONALE TUNIS SUD  ET CAP BON","DIRECTION REGIONALE DU SUD","DIRECTION REGIONALE DU SAHEL","DIRECTION REGIONALE SFAX ET CENTRE"];
                                          var arrCRCount=[307,392,262,569,269,549,317];
                                          var arrCRAnomalie=[273,1272,1011,1950,1156,149,595];
                                          var arrCRPercent=[0,0,0,0,0,0,0];
                                          var moyAnJr=0;
                                          var sumAnJr1=0;
                                          var sumAnJr2=0;
                                          var colors=["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
                                          var colors1=["#cf232a","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];

                                          for (var i = 0; i < arrRegionalDir.length; i++) {
                                            sumAnJr1+=parseFloat(arrCRCount[i]);
                                            sumAnJr2+=parseFloat(arrCRAnomalie[i]);
                                            if (arrCRCount[i]!=0) {
                                              var newPercent=parseFloat(arrCRAnomalie[i]/arrCRCount[i]).toFixed(2);
                                              arrCRPercent[i]=parseFloat(newPercent);
                                            }
                                          }
                                          if (sumAnJr1!=0) {
                                            moyAnJr=parseFloat(sumAnJr2/sumAnJr1).toFixed(2);
                                          }
                                          loadComparaison(moyAnJr,sumAnJr1,sumAnJr2);
                                          document.getElementById("MoyAnnJr").innerHTML =moyAnJr;
                                          document.getElementById("NbCR").innerHTML =parseFloat(sumAnJr1).toFixed(0);
                                          document.getElementById("NbAnn").innerHTML =parseFloat(sumAnJr2).toFixed(0);
                                          
                                        Highcharts.chart('container4', {
                                          chart: {
                                              type: 'column'
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
                                                text: 'Répartition des CR par Direction'
                                            },

                                          series: [{
                                              name: "Contrôle Régioneaux",
                                              data: arrCRCount
                                          }]
                                      });
                                      Highcharts.chart('container5', {
                                          chart: {
                                              type: 'column'
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
                                                text: 'Répartition des Anomalies par Direction'
                                            },

                                          series: [{
                                              name: "Anomalies",
                                              data: arrCRAnomalie
                                          }]
                                      });
                                      //******************************************
                                      Highcharts.chart('container44', {
                                          chart: {
                                              type: 'column'
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
                                                text: 'Nombre des anomalies par journée'
                                            },

                                          series: [{
                                              name: "Nombre des anomalies par journée",
                                              data: arrCRPercent
                                          }]
                                      });
                    }
                    loadChartsStatique();
                    function loadComparaison(moyAnJr,sumAnJr1,sumAnJr2){
                        document.getElementById("image1").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                        document.getElementById("value1").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #ff5722;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;width:40%;">0%</a>';
                        document.getElementById("image2").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                        document.getElementById("value2").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #ff5722;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;width:40%;">0%</a>';
                        var ch1="";
                        var ch2="";
                        ch1="Taux d'amélioration Moyenne M-01-2023/ Moy. M-12-2022";
                        ch2="Taux d'amélioration Moyenne M-01-2023/ Moy. A-2022";
                        document.getElementById("titre1").innerHTML ='<a class="list-group-item" style="font-size: 17px;color: #000; margin-top: 0%;margin-bottom: 25%;">'+ch1+'</a>';
                        document.getElementById("titre2").innerHTML ='<a class="list-group-item" style="font-size: 17px;color: #000; margin-top: 0%;margin-bottom: 25%;">'+ch2+'</a>';
                        var arrMoyCRAn=[parseFloat(moyAnJr),0];
                        var arrMoisCRAn=['mois 01-2023','mois 12-2022'];
                        var colors=["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
                        Highcharts.chart('container2', {
                          chart: {
                              type: 'bar'
                          },
                          xAxis: {
                              categories: arrMoisCRAn
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
                                text: 'En matière de contrôle permanant du réseau'
                            },

                          series: [{
                              name: "Anomalies/CR",
                              data: arrMoyCRAn
                          }]
                      });
                        var nbAg=151;
                        var nbJrsTheo=21;
                        var nbJrsControle=sumAnJr1;
                        var tauxCouverture = parseFloat((nbJrsControle/parseFloat(nbAg*nbJrsTheo))*100);
                                  
                                  var comTaux=parseFloat(100-tauxCouverture);
                                  var moisAnnAct1111=moment().format("MM-YYYY");
                                   
                                  document.getElementById("container1").innerHTML ='<h1>Taux de couverture</h1>'+
                                  '<div class="demo-wrapper html5-progress-bar">'+
                                      '<div class="progress-bar-wrapper">'+
                                          '<progress id="progressbar" value="'+tauxCouverture+'" max="100"></progress> <span class="progress-value">'+parseFloat(tauxCouverture).toFixed(3)+'%</span>'+

                                      '</div>'+
                                  '</div>';
                    }

  }else  {
    var responseAgenceNumberDateFilter=responseAgenceNumberDateFilter||[];
    var urlAgenceNumberDateFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Title,ID";
    //////////////////////console.log.log('urlAgenceNumberDateFilter= '+urlAgenceNumberDateFilter);
    function LoadAgenceNumberDateFilter() {
              var nbre = 0;


              $.ajax({
                  url: urlAgenceNumberDateFilter,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseAgenceNumberDateFilter = responseAgenceNumberDateFilter.concat(data.d.results);
                      if (data.d.__next) {
                          urlAgenceNumberDateFilter = data.d.__next;
                          LoadAgenceNumberDateFilter();
                      }else if (!(data.d.__next)) {
                        var nbAg=0;
                        $.each(responseAgenceNumberDateFilter, function (key, value) {
                          nbAg++;
                        });
                      loadContrlInfoDateFilter(nbAg)

                      }
                      
                  }
              });
          }
          LoadAgenceNumberDateFilter();
          function loadContrlInfoDateFilter(nbAg) {
            
             moment.locale('fr');
             var timeFilter=document.getElementById("myList01").value;
              if (timeFilter=="Mensuel") {
                var list02 = document.getElementById("myList02").value;
                var startOfMonth1= moment(list02).format('YYYY-MM-DD');
              var endOfMonth1 = moment(startOfMonth1).add(1, 'month').format('YYYY-MM-DD');
              var urlDateDebut1=startOfMonth1+'T00:00:00.000';
              var urlDateFin1=endOfMonth1+'T00:00:00.000';
              }else if (timeFilter=="Trimestriel") {
                var list02 = document.getElementById("myList02").value;
                var startOfMonth1= moment(list02).format('YYYY-MM-DD');
              var endOfMonth1 = moment(startOfMonth1).add(3, 'month').format('YYYY-MM-DD');
              var urlDateDebut1=startOfMonth1+'T00:00:00.000';
              var urlDateFin1=endOfMonth1+'T00:00:00.000';
              }else if (timeFilter=="Annuel") {
                var list02 = document.getElementById("myList02").value;
                var startOfMonth1= moment(list02).format('YYYY-MM-DD');
                var endOfMonth1 = moment(startOfMonth1).add(1, 'years').format('YYYY-MM-DD');
                var urlDateDebut1=startOfMonth1+'T00:00:00.000';
                var urlDateFin1=endOfMonth1+'T00:00:00.000';
              }
             var responseCouvertureDateFilter=responseCouvertureDateFilter || []
             var urlCouvertureDateFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Avis_x0020_DCP%20eq%27Vérifiée%27 and "+datefilter+" ge datetime'"+urlDateDebut1+"' and "+datefilter+" lt datetime'"+urlDateFin1+"'";
              //console.log('urlCouvertureDateFilter= '+urlCouvertureDateFilter);
              function loadCouvertureDateFilter() {
                        


                        $.ajax({
                            url: urlCouvertureDateFilter,
                            method: "GET",
                            dataType: "json",
                            headers: { Accept: "application/json;odata=verbose" },
                            success: function (data) {
                                responseCouvertureDateFilter = responseCouvertureDateFilter.concat(data.d.results);
                                if (data.d.__next) {
                                    urlCouvertureDateFilter = data.d.__next;
                                    loadCouvertureDateFilter();
                                }

                                else if (!data.d.__next) {
                                  var nbJrsTheo=21;
                                  var nbJrsControle=0;
                                  $.each(responseCouvertureDateFilter, function (key, value) {
                                    nbJrsControle++;
                                  });
                                  var tauxCouverture = parseFloat((nbJrsControle/parseFloat(nbAg*nbJrsTheo))*100);
                                  
                                  var comTaux=parseFloat(100-tauxCouverture);
                                  var moisAnnAct1111=moment().format("MM-YYYY");
                                   
                                  document.getElementById("container1").innerHTML ='<h1>Taux de couverture</h1>'+
                                  '<div class="demo-wrapper html5-progress-bar">'+
                                      '<div class="progress-bar-wrapper">'+
                                          '<progress id="progressbar" value="'+tauxCouverture+'" max="100"></progress> <span class="progress-value">'+parseFloat(tauxCouverture).toFixed(3)+'%</span>'+

                                      '</div>'+
                                  '</div>';
                                  
                               }
                                
                              
                                
                                
                            }
                        });
                    }
                  loadCouvertureDateFilter();
          }


    moment.locale('fr');
    var startOfMonth="";
    var endOfMonth ="";
    var timeFilter=document.getElementById("myList01").value;
      if (timeFilter=="Mensuel") {
        var list02 = document.getElementById("myList02").value;
        startOfMonth= moment(list02).format('YYYY-MM-DD');
      endOfMonth = moment(startOfMonth).add(1, 'month').format('YYYY-MM-DD');
      var urlDateDebut=startOfMonth+'T00:00:00.000';
      var urlDateFin=endOfMonth+'T00:00:00.000';
      }else if (timeFilter=="Trimestriel") {
        var list02 = document.getElementById("myList02").value;
        startOfMonth= moment(list02).format('YYYY-MM-DD');
      endOfMonth = moment(startOfMonth).add(3, 'month').format('YYYY-MM-DD');
      var urlDateDebut=startOfMonth+'T00:00:00.000';
      var urlDateFin=endOfMonth+'T00:00:00.000';
      }else if (timeFilter=="Annuel") {
        var list02 = document.getElementById("myList02").value;
        startOfMonth= moment(list02).format('YYYY-MM-DD');
      endOfMonth = moment(startOfMonth).add(1, 'years').format('YYYY-MM-DD');
      var urlDateDebut=startOfMonth+'T00:00:00.000';
      var urlDateFin=endOfMonth+'T00:00:00.000';
      }
       var colors=["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
       var colors1=["#cf232a","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
        var responseReparationCRFilterDateFilter=responseReparationCRFilterDateFilter || []
       var urlReparationCRFilterDateFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Avis_x0020_DCP%20eq%27Vérifiée%27 and "+datefilter+" ge datetime'"+urlDateDebut+"' and "+datefilter+" lt datetime'"+urlDateFin+"'";

        console.log('urlReparationCRFilterDateFilter= '+urlReparationCRFilterDateFilter);
        function LoadChartsFilterDateFilter() {
                  var nbre = 0;


                  $.ajax({
                      url: urlReparationCRFilterDateFilter,
                      method: "GET",
                      dataType: "json",
                      headers: { Accept: "application/json;odata=verbose" },
                      success: function (data) {
                          responseReparationCRFilterDateFilter = responseReparationCRFilterDateFilter.concat(data.d.results);
                          if (data.d.__next) {
                              urlReparationCRFilterDateFilter = data.d.__next;
                              LoadChartsFilterDateFilter();
                          }
                          else if (!data.d.__next) {
                            
                            var arrRegionalDir=["DIRECTION REGIONALE TUNIS Médina","DIRECTION REGIONALE DU NORD","DIRECTION REGIONALE TUNIS NORD","DIRECTION REGIONALE TUNIS SUD  ET CAP BON","DIRECTION REGIONALE DU SUD","DIRECTION REGIONALE DU SAHEL","DIRECTION REGIONALE SFAX ET CENTRE"];
                        var arrCRCount=[0,0,0,0,0,0,0];
                        var arrCRAnomalie=[0,0,0,0,0,0,0];
                        //******************************************
                        var arrCRConformeSum=[0,0,0,0,0,0,0];
                        var arrCRTotal=[0,0,0,0,0,0,0];
                        var arrCRPercent=[0,0,0,0,0,0,0];
                        //******************************************
                            var arrMois=[];
                            var arrSumMoiCr=[];
                            var arrSumMoiAnnomalie=[];

                            var sumCr=0;
                            var sumAnn=0;
                            
                            $.each(responseReparationCRFilterDateFilter, function (key, value) {
                              sumCr++;
                              var region=value.R_x00e9_gion_x0020_de_x0020_l_x0;
                              arrCRCount[arrRegionalDir.indexOf(region)]=parseInt(arrCRCount[arrRegionalDir.indexOf(region)]+1);
                              var nbNonConforme=0;
                              if (value.N_x00b0__x0020_Non_x0020_Conform!=null) {
                                nbNonConforme=value.N_x00b0__x0020_Non_x0020_Conform;
                              }
                              arrCRAnomalie[arrRegionalDir.indexOf(region)]=parseInt(arrCRAnomalie[arrRegionalDir.indexOf(region)]+nbNonConforme);
                                sumAnn=parseInt(sumAnn+nbNonConforme);

                              var nbConforme=0;
                              if (value.N_x00b0__x0020_Conforme!=null) {
                                nbConforme=value.N_x00b0__x0020_Conforme;
                              }
                              arrCRConformeSum[arrRegionalDir.indexOf(region)]=parseInt(arrCRConformeSum[arrRegionalDir.indexOf(region)]+nbConforme);
                              var totalCoonn=0;
                              totalCoonn=parseInt(nbConforme+nbNonConforme);
                              arrCRTotal[arrRegionalDir.indexOf(region)]=parseInt(arrCRTotal[arrRegionalDir.indexOf(region)]+totalCoonn);
                            });

                            
                              //////console.log("arrCRCount= "+arrCRCount);
                              var timeFilter=document.getElementById("myList01").value;
                              if (timeFilter=="Mensuel"){
                                var moisAct=moment(startOfMonth).format("MM-YYYY");
                                var lab="mois "+moisAct;
                                arrMois.push(lab);
                                arrMois.push(lab);
                                //****************mois avril 2023 dir sud*******************************************************//
                                if ((rad2.checked)&&(list02Stat=="2023-04-01")) {
                                  var reggg="DIRECTION REGIONALE DU SUD";
                                  arrCRAnomalie[arrRegionalDir.indexOf(reggg)]=595;
                                  arrCRTotal[arrRegionalDir.indexOf(reggg)]=191;
                                }
                              }
                              else if (timeFilter=="Trimestriel"){
                                var moisAct=moment(startOfMonth).format("MM-YYYY");
                                var lab="trimestre "+moisAct;
                                arrMois.push(lab);
                              }
                              else if (timeFilter=="Annuel"){
                                var moisAct=moment(startOfMonth).format("YYYY");
                                var lab="année "+moisAct;
                                arrMois.push(lab);
                              }
                              
                              arrSumMoiCr.push(sumCr);
                              arrSumMoiAnnomalie.push(sumAnn);
                              
                              for (var i = 1; i < 3; i++) {
                                var timeFilter=document.getElementById("myList01").value;
                                if (timeFilter=="Mensuel"){
                                  monthAdd=parseInt(i)*-1;
                                  var date1=moment(startOfMonth).add(monthAdd, 'months').format('YYYY-MM-DD');
                                  var date2=moment(date1).add(1, 'months').format('YYYY-MM-DD');
                                  var label="mois "+moment(date1).format('MM-YYYY')
                                  //console.log("label= "+label);
                                  loadPreviousInfoFilterDateFilter(arrMois,arrSumMoiCr,arrSumMoiAnnomalie,date1,date2,label,i);
                                }else if (timeFilter=="Trimestriel") {
                                  monthAdd=parseInt(i)*-3;
                                  var date1=moment(startOfMonth).add(monthAdd, 'months').format('YYYY-MM-DD');
                                  var date2=moment(date1).add(3, 'months').format('YYYY-MM-DD');
                                  var label="trimestre "+moment(date1).format('MM-YYYY')
                                  loadPreviousInfoFilterDateFilter(arrMois,arrSumMoiCr,arrSumMoiAnnomalie,date1,date2,label,i);
                                }else if (timeFilter=="Annuel") {
                                  monthAdd=parseInt(i)*-1;
                                  var date1=moment(startOfMonth).add(monthAdd, 'years').format('YYYY-MM-DD');
                                  var date2=moment(date1).add(1, 'years').format('YYYY-MM-DD');
                                  var label="année "+moment(date1).format('YYYY')
                                  loadPreviousInfoFilterDateFilter(arrMois,arrSumMoiCr,arrSumMoiAnnomalie,date1,date2,label,i);
                                }
                                
                              }
                              
                              var moisAnnAct=moment().format("MM-YYYY");
                               var moyAnJr=0;
                        var sumAnJr=0; 
                        var sumAnJr1=0;
                        var sumAnJr2=0; 
                        for (var i = 0; i < arrCRPercent.length; i++) {
                          if (arrCRCount[i]!=0) {
                            var newPercent=parseFloat(arrCRAnomalie[i]/arrCRCount[i]).toFixed(2);
                            sumAnJr+=parseFloat(newPercent);
                            arrCRPercent[i]=parseFloat(newPercent);
                            sumAnJr1+=parseFloat(arrCRCount[i]);
                            sumAnJr2+=parseFloat(arrCRAnomalie[i]);
                          }
                        }
                        moyAnJr=0;
                        if (sumAnJr1!=0) {
                          moyAnJr=parseFloat(sumAnJr2/sumAnJr1).toFixed(2);
                        }
                              //
                              document.getElementById("MoyAnnJr").innerHTML =moyAnJr;
                              document.getElementById("NbCR").innerHTML =parseFloat(sumAnJr1).toFixed(0);
                              document.getElementById("NbAnn").innerHTML =parseFloat(sumAnJr2).toFixed(0);
                              var ss1=0;
                              for (var i = 0; i < arrCRPercent.length; i++) {
                                ss1+=parseFloat(arrCRPercent[i]);
                              }
                              var mm1=parseFloat(ss1/arrCRPercent.length).toFixed(2);
                              //document.getElementById("MoyAnnJr1").innerHTML =mm1;
                            Highcharts.chart('container4', {
                              chart: {
                                  type: 'column'
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
                                    text: 'Répartition des CR par Direction'
                                },

                              series: [{
                                  name: "Contrôle Régioneaux",
                                  data: arrCRCount
                              }]
                          });
                          Highcharts.chart('container5', {
                              chart: {
                                  type: 'column'
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
                                    text: 'Répartition des Anomalies par Direction'
                                },

                              series: [{
                                  name: "Anomalies",
                                  data: arrCRAnomalie
                              }]
                          });
                          //******************************************
                      Highcharts.chart('container44', {
                          chart: {
                              type: 'column'
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
                                text: 'Nombre des anomalies par journée'
                            },

                          series: [{
                              name: "Nombre des anomalies par journée",
                              data: arrCRPercent
                          }]
                      });
                      

                      //******************************************

                         }
                          
                        
                          
                          
                      }
                  });
              }
            LoadChartsFilterDateFilter();





        function loadPreviousInfoFilterDateFilter(arrMois,arrSumMoiCr,arrSumMoiAnnomalie,date1,date2,label,counter) {
          //console.log("counter= "+counter)
          var limit1=date1+'T00:00:00.000';
          var limit2=date2+'T00:00:00.000';
          var urlPreviousInfoFilterDateFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Avis_x0020_DCP%20eq%27Vérifiée%27 and "+datefilter+" ge datetime'"+limit1+"' and "+datefilter+" lt datetime'"+limit2+"'";
          //console.log("urlPreviousInfoFilterDateFilter= "+urlPreviousInfoFilterDateFilter);
          var responsePreviousInfoFilterDateFilter=responsePreviousInfoFilterDateFilter||[];
          function loadInfoFFilterDateFilter() {
              var nbre = 0;


              $.ajax({
                  url: urlPreviousInfoFilterDateFilter,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responsePreviousInfoFilterDateFilter = responsePreviousInfoFilterDateFilter.concat(data.d.results);
                      if (data.d.__next) {
                          urlPreviousInfoFilterDateFilter = data.d.__next;
                          loadInfoFFilterDateFilter();
                      }
                      else if (!data.d.__next) {
                        

                        var sumCr=0;
                        var sumAnn=0;
                        $.each(responsePreviousInfoFilterDateFilter, function (key, value) {
                          sumCr++;
                          
                          var nbNonConforme=0;
                          if (value.N_x00b0__x0020_Non_x0020_Conform!=null) {
                            nbNonConforme=value.N_x00b0__x0020_Non_x0020_Conform;

                          }
                          
                            sumAnn=parseInt(sumAnn+nbNonConforme);
                            //console.log("sumAnn= "+sumAnn);
                        });

                          //console.log("sumCr= "+sumCr);
                          ////console.log("arrSumMoiCr= "+arrSumMoiCr);
                          arrMois[counter]=label;
                          arrSumMoiCr[counter]=sumCr;
                          arrSumMoiAnnomalie[counter]=sumAnn;
                          if (counter==2) {
                            var list0002 = document.getElementById("myList02").value;
                            var anneeAct=moment(list0002).format("YYYY");
                            var annPass=moment(anneeAct).add(-1, 'year').format('YYYY');
                            var limitYear1=annPass+"-01-01T00:00:00.000";
                            var limitYear2=annPass+"-12-31T00:00:00.000";
                            
                            loadInfoPrevYearFilterDateFilter(limitYear1,limitYear2,arrMois,arrSumMoiCr,arrSumMoiAnnomalie);
                          }
                          var rappCrAnnomalie=[];
                            for (var i = 0; i < arrMois.length; i++) {
                              if (arrSumMoiAnnomalie[i]==0||arrSumMoiCr[i]==0) {
                                rappCrAnnomalie[i]=0;
                              }
                              else{
                                var newRapport=parseFloat(parseFloat(arrSumMoiAnnomalie[i])/parseFloat(arrSumMoiCr[i])).toFixed(2);
                                rappCrAnnomalie[i]=parseFloat(newRapport);
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
                            
                            //////console.log("rappCrAnnomalie= "+rappCrAnnomalie);
                            var list002 = document.getElementById("myList02").value;
                            var timeFilter=document.getElementById("myList01").value;
                            if (timeFilter=="Mensuel"){
                              var moisAnnAct11=" mois "+moment(list002).format("MM-YYYY");
                            }
                            else if (timeFilter=="Trimestriel"){
                              var moisAnnAct11=" trimestre "+moment(list002).format("MM-YYYY");
                            }
                            else if (timeFilter=="Annuel"){
                              var moisAnnAct11=" année "+moment(list002).format("YYYY");
                            }
                            
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
                                text: 'En matière de contrôle permanant du réseau'
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
        loadInfoFFilterDateFilter();
        }
          function loadInfoPrevYearFilterDateFilter(limitYear1,limitYear2,arrMois,arrSumMoiCr,arrSumMoiAnnomalie){
            var urlPreviousYearFilterDateFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$select=N_x00b0__x0020_Non_x0020_Conform&$filter=Avis_x0020_DCP%20eq%27Vérifiée%27 and "+datefilter+" ge datetime'"+limitYear1+"' and "+datefilter+" le datetime'"+limitYear2+"' and Avis_x0020_DCP%20eq%27Vérifiée%27";
            var responsePreviousYearFilterDateFilter=responsePreviousYearFilterDateFilter||[];
      function loaddPreviousYearFilterDateFilter() {
                var nbre = 0;


                $.ajax({
                    url: urlPreviousYearFilterDateFilter,
                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responsePreviousYearFilterDateFilter = responsePreviousYearFilterDateFilter.concat(data.d.results);
                        if (data.d.__next) {
                            urlPreviousYearFilterDateFilter = data.d.__next;
                            loaddPreviousYearFilterDateFilter();
                        }
                        else if (!data.d.__next) {
                          

                          var sumCr=0;
                          var sumAnn=0;
                          $.each(responsePreviousYearFilterDateFilter, function (key, value) {
                            sumCr++;
                            
                            var nbNonConforme=0;
                            if (value.N_x00b0__x0020_Non_x0020_Conform!=null) {
                              nbNonConforme=value.N_x00b0__x0020_Non_x0020_Conform;
                            }
                            
                              sumAnn=parseInt(sumAnn+nbNonConforme);
                          });
                            ////console.log("arrCRCount= "+arrCRCount);
                            var labYer="Moyenne- "+moment().add(-1, 'year').format('YYYY');
                            arrMois.push(labYer);
                            arrSumMoiCr.push(sumCr);
                            arrSumMoiAnnomalie.push(sumAnn);
                           // //console.log("arrMois= "+arrMois);
                           //    //console.log("arrSumMoiCr= "+arrSumMoiCr);
                           //    //console.log("arrSumMoiAnnomalie= "+arrSumMoiAnnomalie);
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
                              var list0002 = document.getElementById("myList02").value;
                              var ch1="";
                              var ch2="";
                              var timeFilter1=document.getElementById("myList01").value;
                              console.log("timeFilter1= "+timeFilter1);
                              if (timeFilter1=="Mensuel"){
                                var annPred=moment(list0002).add(-1, 'year').format('YYYY');
                                var moisPred=moment(list0002).add(-1, 'month').format('MM-YYYY');
                                var mois=moment(list0002).format('MM-YYYY');
                                ch1="Taux d'amélioration Moyenne M-"+mois+"/ Moy. M-"+moisPred;
                                ch2="Taux d'amélioration Moyenne M-"+mois+"/ Moy. A-"+annPred;
                                console.log('ch1 test1= '+ch1);
                                console.log('ch2 test1= '+ch2);
                              }
                              else if (timeFilter1=="Trimestriel"){
                                var annPred=moment(list0002).add(-1, 'year').format('YYYY');
                                var moisPred=moment(list0002).add(-3, 'month').format('MM-YYYY');
                                var mois=moment(list0002).format('MM-YYYY');
                                ch1="Taux d'amélioration Moyenne T-"+mois+"/ Moy. T-"+moisPred;
                                ch2="Taux d'amélioration Moyenne T-"+mois+"/ Moy. A-"+annPred;
                                console.log('ch1 test2= '+ch1);
                                console.log('ch2 test2= '+ch2);
                              }
                              else if (timeFilter1=="Annuel"){
                                var annPred=moment(list0002).add(-1, 'year').format('YYYY');
                                var moisPred=moment(list0002).add(-1, 'year').format('YYYY');
                                var mois=moment(list0002).format('YYYY');
                                ch1="Taux d'amélioration Moyenne A-"+mois+"/ Moy. A-"+moisPred;
                                ch2="Taux d'amélioration Moyenne A-"+mois+"/ Moy. A-"+annPred;
                                console.log('ch1 test3= '+ch1);
                                console.log('ch2 test3= '+ch2);
                              }
                              
                              //console.log("tauxMoisAnn= "+tauxMoisAnn);
                              document.getElementById("titre1").innerHTML ='<a class="list-group-item" style="font-size: 17px;color: #000; margin-top: 0%;margin-bottom: 25%;">'+ch1+'</a>';
                              document.getElementById("titre2").innerHTML ='<a class="list-group-item" style="font-size: 17px;color: #000; margin-top: 0%;margin-bottom: 25%;">'+ch2+'</a>';
                              //image1 value1 titre1 image2 value2 titre2
                              if (tauxMois<0) {
                                document.getElementById("image1").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/vert.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                                document.getElementById("value1").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #35ab0e;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%; width:40%;">'+tauxMois+'%</a>';
                              }
                              else if (tauxMois==0) {
                                document.getElementById("image1").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                                document.getElementById("value1").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #ff5722;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;width:40%;">'+tauxMois+'%</a>';
                              }
                              else if (tauxMois>0) {
                                document.getElementById("image1").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/rouge.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                                document.getElementById("value1").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #d13a36;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;width:40%;">'+tauxMois+'%</a>';
                              }

                              if (tauxMoisAnn<0) {
                                document.getElementById("image2").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/vert.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                                document.getElementById("value2").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #35ab0e;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;width:40%;">'+tauxMoisAnn+'%</a>';
                              }
                              else if (tauxMoisAnn==0) {
                                //console.log('00000')
                                document.getElementById("image2").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                                document.getElementById("value2").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #ff5722;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;width:40%;">'+tauxMoisAnn+'%</a>';
                              }
                              else if (tauxMoisAnn>0) {
                                document.getElementById("image2").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/rouge.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                                document.getElementById("value2").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #d13a36;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;width:40%;">'+tauxMoisAnn+'%</a>';
                              }
                              ////console.log("rappCrAnnomalie= "+rappCrAnnomalie);
                              
                       }
                        
                      
                        
                        
                    }
                });
            }
          loaddPreviousYearFilterDateFilter();
        }

  }
      
}
//**************************************************************************************************************************************************
//**************************************************************************************************************************************************
//************************************************************filtre par durée**********************************************************************
//**************************************************************************************************************************************************
//**************************************************************************************************************************************************
function mainDate2() {
  document.getElementById("div-container1").innerHTML ='<div id="container1"></div>';
  document.getElementById("div-container2").innerHTML ='<div id="container2"></div>';
  document.getElementById("div-container4").innerHTML ='<div id="container4"></div>';
  document.getElementById("div-container5").innerHTML ='<div id="container5"></div>';
  document.getElementById("div-container44").innerHTML ='<div id="container44"></div>';
  
  moment.locale('fr');
  var date001 = document.getElementById("start").value;
  var date002 = document.getElementById("finish").value;
  var startOfMonth1= moment(date001).format('YYYY-MM-DD');
  var endOfMonth1 = moment(date002).format('YYYY-MM-DD');
  var urlDateDebut1=startOfMonth1+'T00:00:00.000';
  var urlDateFin1=endOfMonth1+'T00:00:00.000';
      var responseAgenceNumberDateFilter1=responseAgenceNumberDateFilter1||[];
    var urlAgenceNumberDateFilter1=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Title,ID";
    //////////////////////console.log.log('urlAgenceNumberDateFilter1= '+urlAgenceNumberDateFilter1);
    function LoadAgenceNumberDateFilter1() {
              var nbre = 0;


              $.ajax({
                  url: urlAgenceNumberDateFilter1,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseAgenceNumberDateFilter1 = responseAgenceNumberDateFilter1.concat(data.d.results);
                      if (data.d.__next) {
                          urlAgenceNumberDateFilter1 = data.d.__next;
                          LoadAgenceNumberDateFilter1();
                      }else if (!(data.d.__next)) {
                        var nbAg=0;
                        $.each(responseAgenceNumberDateFilter1, function (key, value) {
                          nbAg++;
                        });
                      loadContrlInfoDateFilter(nbAg)

                      }
                      
                  }
              });
          }
          LoadAgenceNumberDateFilter1();
function loadContrlInfoDateFilter(nbAg) {
  
   moment.locale('fr');
   var date001 = document.getElementById("start").value;
   var date002 = document.getElementById("finish").value;
   var startOfMonth1= moment(date001).format('YYYY-MM-DD');
   var endOfMonth1 = moment(date002).format('YYYY-MM-DD');
   var urlDateDebut1=startOfMonth1+'T00:00:00.000';
   var urlDateFin1=endOfMonth1+'T00:00:00.000';
   var datefilter="";
  var rad1 = document.getElementById('flexRadioDefault1');
  var rad2 = document.getElementById('flexRadioDefault2');
  //console.log("test= "+rad1.checked)
  if (rad1.checked) {
    var urlCouvertureDateFilter1=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Date_x0020_Journ_x00e9_e ge datetime'"+urlDateDebut1+"' and Date_x0020_Journ_x00e9_e le datetime'"+urlDateFin1+"'";
    
  }else if (rad2.checked) {
    var urlCouvertureDateFilter1=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Date_x0020_Controle ge datetime'"+urlDateDebut1+"' and Date_x0020_Controle le datetime'"+urlDateFin1+"'";
    
  } 
   var responseCouvertureDateFilter1=responseCouvertureDateFilter1 || []
   
    //console.log('urlCouvertureDateFilter1= '+urlCouvertureDateFilter1);
    function loadCouvertureDateFilter1() {
              


              $.ajax({
                  url: urlCouvertureDateFilter1,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseCouvertureDateFilter1 = responseCouvertureDateFilter1.concat(data.d.results);
                      if (data.d.__next) {
                          urlCouvertureDateFilter1 = data.d.__next;
                          loadCouvertureDateFilter1();
                      }

                      else if (!data.d.__next) {
                        var nbJrsTheo=21;
                        var nbJrsControle=0;
                        $.each(responseCouvertureDateFilter1, function (key, value) {
                          nbJrsControle++;
                        });
                        var tauxCouverture = parseFloat((nbJrsControle/parseFloat(nbAg*nbJrsTheo))*100);
                        
                        var comTaux=parseFloat(100-tauxCouverture);
                        var moisAnnAct1111=moment().format("MM-YYYY");
                         
                        document.getElementById("container1").innerHTML ='<h1>Taux de couverture</h1>'+
                        '<div class="demo-wrapper html5-progress-bar">'+
                            '<div class="progress-bar-wrapper">'+
                                '<progress id="progressbar" value="'+tauxCouverture+'" max="100"></progress> <span class="progress-value">'+parseFloat(tauxCouverture).toFixed(3)+'%</span>'+

                            '</div>'+
                        '</div>';
                        
                     }
                      
                    
                      
                      
                  }
              });
          }
        loadCouvertureDateFilter1();
    }
    moment.locale('fr');
      var date001 = document.getElementById("start").value;
      var date002 = document.getElementById("finish").value;
      var startOfMonth= moment(date001).format('YYYY-MM-DD');
      var endOfMonth = moment(date002).format('YYYY-MM-DD');
      var urlDateDebut=startOfMonth+'T00:00:00.000';
      var urlDateFin=endOfMonth+'T00:00:00.000';
      var colors=["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
      var colors1=["#cf232a","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
      var datefilter="";
      var rad1 = document.getElementById('flexRadioDefault1');
      var rad2 = document.getElementById('flexRadioDefault2');
      //console.log("test= "+rad1.checked)
      if (rad1.checked) {
        var urlReparationCRFilterDateFilter1=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Avis_x0020_DCP%20eq%27Vérifiée%27 and Date_x0020_Journ_x00e9_e ge datetime'"+urlDateDebut+"' and Date_x0020_Journ_x00e9_e lt datetime'"+urlDateFin+"'";
        
      }else if (rad2.checked) {
        var urlReparationCRFilterDateFilter1=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Avis_x0020_DCP%20eq%27Vérifiée%27 and Date_x0020_Controle ge datetime'"+urlDateDebut+"' and Date_x0020_Controle lt datetime'"+urlDateFin+"'";
        
      }
      var responseReparationCRFilterDateFilter1=responseReparationCRFilterDateFilter1 || []
      

        console.log('urlReparationCRFilterDateFilter1= '+urlReparationCRFilterDateFilter1);
        function LoadChartsFilterDateFilter1() {
                  var nbre = 0;


                  $.ajax({
                      url: urlReparationCRFilterDateFilter1,
                      method: "GET",
                      dataType: "json",
                      headers: { Accept: "application/json;odata=verbose" },
                      success: function (data) {
                          responseReparationCRFilterDateFilter1 = responseReparationCRFilterDateFilter1.concat(data.d.results);
                          if (data.d.__next) {
                              urlReparationCRFilterDateFilter1 = data.d.__next;
                              LoadChartsFilterDateFilter1();
                          }
                          else if (!data.d.__next) {
                            
                            var arrRegionalDir=["DIRECTION REGIONALE TUNIS Médina","DIRECTION REGIONALE DU NORD","DIRECTION REGIONALE TUNIS NORD","DIRECTION REGIONALE TUNIS SUD  ET CAP BON","DIRECTION REGIONALE DU SUD","DIRECTION REGIONALE DU SAHEL","DIRECTION REGIONALE SFAX ET CENTRE"];
                        var arrCRCount=[0,0,0,0,0,0,0];
                        var arrCRAnomalie=[0,0,0,0,0,0,0];
                        //******************************************
                        var arrCRConformeSum=[0,0,0,0,0,0,0];
                        var arrCRTotal=[0,0,0,0,0,0,0];
                        var arrCRPercent=[0,0,0,0,0,0,0];
                        //******************************************
                            var arrMois=[];
                            var arrSumMoiCr=[];
                            var arrSumMoiAnnomalie=[];

                            var sumCr=0;
                            var sumAnn=0;
                            
                            $.each(responseReparationCRFilterDateFilter1, function (key, value) {
                              sumCr++;
                              var region=value.R_x00e9_gion_x0020_de_x0020_l_x0;
                              arrCRCount[arrRegionalDir.indexOf(region)]=parseInt(arrCRCount[arrRegionalDir.indexOf(region)]+1);
                              var nbNonConforme=0;
                              if (value.N_x00b0__x0020_Non_x0020_Conform!=null) {
                                nbNonConforme=value.N_x00b0__x0020_Non_x0020_Conform;
                              }
                              arrCRAnomalie[arrRegionalDir.indexOf(region)]=parseInt(arrCRAnomalie[arrRegionalDir.indexOf(region)]+nbNonConforme);
                                sumAnn=parseInt(sumAnn+nbNonConforme);

                              var nbConforme=0;
                              if (value.N_x00b0__x0020_Conforme!=null) {
                                nbConforme=value.N_x00b0__x0020_Conforme;
                              }
                              arrCRConformeSum[arrRegionalDir.indexOf(region)]=parseInt(arrCRConformeSum[arrRegionalDir.indexOf(region)]+nbConforme);
                              var totalCoonn=0;
                              totalCoonn=parseInt(nbConforme+nbNonConforme);
                              arrCRTotal[arrRegionalDir.indexOf(region)]=parseInt(arrCRTotal[arrRegionalDir.indexOf(region)]+totalCoonn);
                            });

                            
                              //////console.log("arrCRCount= "+arrCRCount);
                              var timeFilter=document.getElementById("myList01").value;
                              if (timeFilter=="Mensuel"){
                                var moisAct=moment(startOfMonth).format("MM-YYYY");
                                var lab="mois "+moisAct;
                                arrMois.push(lab);
                              }
                              else if (timeFilter=="Trimestriel"){
                                var moisAct=moment(startOfMonth).format("MM-YYYY");
                                var lab="trimestre "+moisAct;
                                arrMois.push(lab);
                              }
                              else if (timeFilter=="Annuel"){
                                var moisAct=moment(startOfMonth).format("YYYY");
                                var lab="année "+moisAct;
                                arrMois.push(lab);
                              }
                              
                              arrSumMoiCr.push(sumCr);
                              arrSumMoiAnnomalie.push(sumAnn);
                              
                              
                              
                              var moisAnnAct=moment().format("MM-YYYY");
                               var moyAnJr=0;
                        var sumAnJr=0; 
                        var sumAnJr1=0;
                        var sumAnJr2=0; 
                        for (var i = 0; i < arrCRPercent.length; i++) {
                          if (arrCRCount[i]!=0) {
                            var newPercent=parseFloat(arrCRAnomalie[i]/arrCRCount[i]).toFixed(2);
                            sumAnJr+=parseFloat(newPercent);
                            arrCRPercent[i]=parseFloat(newPercent);
                            sumAnJr1+=parseFloat(arrCRCount[i]);
                            sumAnJr2+=parseFloat(arrCRAnomalie[i]);
                          }
                        }
                        moyAnJr=parseFloat(sumAnJr2/sumAnJr1).toFixed(2);
                              //
                              document.getElementById("MoyAnnJr").innerHTML =moyAnJr;
                              document.getElementById("NbCR").innerHTML =parseFloat(sumAnJr1).toFixed(0);
                              document.getElementById("NbAnn").innerHTML =parseFloat(sumAnJr2).toFixed(0);
                              var ss1=0;
                              for (var i = 0; i < arrCRPercent.length; i++) {
                                ss1+=parseFloat(arrCRPercent[i]);
                              }
                              var mm1=parseFloat(ss1/arrCRPercent.length).toFixed(2);
                              //document.getElementById("MoyAnnJr1").innerHTML =mm1;

                            Highcharts.chart('container4', {
                              chart: {
                                  type: 'column'
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
                                    text: 'Répartition des CR par Direction'
                                },

                              series: [{
                                  name: "Contrôle Régioneaux",
                                  data: arrCRCount
                              }]
                          });
                          Highcharts.chart('container5', {
                              chart: {
                                  type: 'column'
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
                                    text: 'Répartition des Anomalies par Direction'
                                },

                              series: [{
                                  name: "Anomalies",
                                  data: arrCRAnomalie
                              }]
                          });
                          //******************************************
                      Highcharts.chart('container44', {
                          chart: {
                              type: 'column'
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
                                text: 'Nombre des anomalies par journée'
                            },

                          series: [{
                              name: "Nombre des anomalies par journée",
                              data: arrCRPercent
                          }]
                      });
                      

                      //******************************************

                         }
                          
                        
                          
                          
                      }
                  });
              }
            LoadChartsFilterDateFilter1();
}