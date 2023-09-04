
function mainDossStatMarch() {
  var marche=document.getElementById("myList1").value;
  var urlMar="";
  if (marche!="") {
    urlMar="&$filter=March_x00e9_%20eq%27"+marche+"%27"
  }else{
    urlMar="";
  }
  var responseDossCrtEntFilter=responseDossCrtEntFilter || [];
        var urlDossCrtEntFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('DossCrdEnt')/items?select=Statut,March_x00e9_"+urlMar;
        function loadDossCrtEntFilter(){
          $.ajax({
                        url: urlDossCrtEntFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseDossCrtEntFilter = responseDossCrtEntFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlDossCrtEntFilter = data.d.__next;
                                loadDossCrtEntFilter();
                            }
                            
                            var arrStat=["Commercial","Crédit","Rejet","Formalités de Garanties","Mise en Place","Dossier Dénoué"];
                            var arrCountStat=[0,0,0,0,0,0];

                            var nbDoss=0;
                            $.each(responseDossCrtEntFilter, function (key, value) {
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
        loadDossCrtEntFilter();

}

function mainDossPhaseEtChCom() {
  var marche=document.getElementById("myList2").value;

var responseUsersFilter=responseUsersFilter || [];
        var urlUsersFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/SiteUsers?$select=Id,Title";
        function loadUsersFilter(){
          $.ajax({
                        url: urlUsersFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseUsersFilter = responseUsersFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlUsersFilter = data.d.__next;
                                loadUsersFilter();
                            }
                            
                            
                            var arrIdRes=[];
                            var arrNameRes=[];
                            $.each(responseUsersFilter, function (key, value) {
                               
                               var idRes=value.Id;
                               var nomRes=value.Title;
                               arrIdRes.push(idRes);
                               arrNameRes.push(nomRes);
                            });
                            loadDossPhaseEtudeComFilter(arrIdRes,arrNameRes);
                            
                            
                        }
                    });
        }
        loadUsersFilter();


                var responseDossPhaseEtudeComFilter=responseDossPhaseEtudeComFilter || [];
        var urlDossPhaseEtudeComFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('DossCrdEnt')/items?select=Charg_x00e9__x0020_d_x0027_AffaiId,Statut,March_x00e9_&$filter=March_x00e9_%20eq%27"+marche+"%27";
        function loadDossPhaseEtudeComFilter(arrIdRes,arrNameRes){
          $.ajax({
                        url: urlDossPhaseEtudeComFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseDossPhaseEtudeComFilter = responseDossPhaseEtudeComFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlDossPhaseEtudeComFilter = data.d.__next;
                                loadDossPhaseEtudeComFilter(arrIdRes,arrNameRes);
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
                            $.each(responseDossPhaseEtudeComFilter, function (key, value) {
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
}

