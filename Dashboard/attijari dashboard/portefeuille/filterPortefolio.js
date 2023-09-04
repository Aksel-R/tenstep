function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function filterPortefeuille(){
  document.getElementById("loader-wrapper").style.display = "block";
  jQuery(document).ready(function() {
    jQuery('#loader-wrapper').fadeOut(5000);
    //jQuery('#wrapper').fadeIn(3000);
     
});

  tableaux2 = document.getElementById("tableProjet1");
                tr2 = tableaux2.getElementsByTagName("tr");
                if(tr2.length>0){
                  $('#tableProjet1 tbody').empty();
                  
                }
                  tableaux3 = document.getElementById("tableProjet11");
                tr3 = tableaux3.getElementsByTagName("tr");
                if(tr3.length>0){
                  $('#tableProjet11 tbody').empty();
                  
                }
  var nomPortefeuille =  getSelectedText("myList1");
  //console.log("nomPortefeuille= "+nomPortefeuille);
  var urlFilterPortefeuille="&$filter=EnterpriseProjectTypeName%20eq%27"+nomPortefeuille+"%27";
  

  // var responseCash=responseCash || [];
  // var urlCash=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=CacheIn,CacheOut"+urlFilterPortefeuille+"%20and%20Types_de_Projet%20eq%27Programme%27";
 
  // function loadCash(){
  //      $.ajax({
  //         url: urlCash,
  //         method: "GET",
  //         dataType: "json",
  //         headers: { Accept: "application/json;odata=verbose" },
  //         success: function (data) {
  //             responseCash = responseCash.concat(data.d.results);
  //             if (data.d.__next) {
  //                 urlCash = data.d.__next;
  //                 loadCash();
  //             }
  //             var sumCasIn=0;
  //             var sumCasOut=0;
  //             $.each(responseCash, function (key, value) {
  //               var cashIn=0;
  //               var cashOut=0;
  //               // if (value.CacheIn!=null) {
  //               //   cashIn=value.CacheIn;
  //               // }
  //               // if (value.CacheOut!=null) {
  //               //   cashOut=value.CacheOut;
  //               // }
  //               // sumCasIn=parseFloat(sumCasIn+cashIn).toFixed(0);
  //               // sumCasOut=parseFloat(sumCasOut+cashOut).toFixed(0);
  //             });
  //             document.getElementById("cashIn").innerHTML = conToMill(sumCasIn)+' <span class="text-gray">DT</span>';
  //               document.getElementById("cashOut").innerHTML = conToMill(sumCasOut)+' <span class="text-gray">DT</span>';
                        
  //         }
  //     });
  // }
  // loadCash();


var responseCountProj=responseCountProj || [];
  var urlCountProj=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId"+urlFilterPortefeuille+"%20and%20Types_de_Projet%20eq%27Page_Maitre%27";
  function countProj(){
       $.ajax({
          url: urlCountProj,
          method: "GET",
          dataType: "json",
          headers: { Accept: "application/json;odata=verbose" },
          success: function (data) {
              responseCountProj = responseCountProj.concat(data.d.results);
              if (data.d.__next) {
                  urlCountProj = data.d.__next;
                  countProj();
              }
              
              
              var countP=0;
              $.each(responseCountProj, function (key, value) {
                countP++;
                 
              });
              document.getElementById("nbProj").innerHTML = conToMill(countP);
              //console.log("nbProj= "+countP);
                        
          }
      });
  }
  countProj();

  
  var responseKPIs=responseKPIs || [];
  var urlKPIs=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectWorkVariance,ProjectActualFinishDate,ProjectFinishDate,ProjectCost,ProjectActualCost,ProjectWork,ProjectActualWork,ProjectDuration,ProjectActualDuration,ProjectPercentCompleted,ProjectCostVariance,ProjectDurationVariance"+urlFilterPortefeuille+"%20and%20Types_de_Projet%20eq%27Portefeuille%27";
  console.log('urlKPIs= '+urlKPIs);
  function loadKPIs(){
       $.ajax({
          url: urlKPIs,
          method: "GET",
          dataType: "json",
          headers: { Accept: "application/json;odata=verbose" },
          success: function (data) {
              responseKPIs = responseKPIs.concat(data.d.results);
              if (data.d.__next) {
                  urlKPIs = data.d.__next;
                  loadKPIs();
              }
              
              
              var sumAch=0;
              var avgAch=0;
              var counter=0;
              
              var sommeCoutPlan=0;
              var sommeCoutReel=0;
              var sommecoutBase=0;
              

              var sommeTravailPlan=0;
              var sommeTravailReel=0;
              var sommeTravailBase=0;
              

              var debReel="";
              var debPlan="";
              var debBase="";
              var finReel="";
              var finPlan="";
              var finBase="";
              
              var arrId=[];

              var arrCoutReel=[];
              var arrCoutPlan=[];
              var arrCoutBaseline=[];

              var arrTravailReel=[];
              var arrTravailPlan=[];
              var arrTravailBaseline=[];

              var arrDureeBaseline=[];
              var arrDureePlanifier=[];

              var arrDebutPlan=[];
              var arrDebutReel=[];
              var arrDebutBase=[];

              var arrFinPlan=[];
              var arrFinReel=[];
              var arrFinBase=[];
              
              var finPlanProg=null;
              var finReelProg=null;
              var finBaseProg=null;

              var debPlanProg=null;
              var debReelProg=null;
              var debBaseProg=null;

              var glissCout=0;
              var glissDuree=0;
              var glissTravail=0;
              var dureeReel=0;
              var sumTavailVariance=0;
              var sumCoutVariance=0;
              var sumDureeVariance=0;

              $.each(responseKPIs, function (key, value) {
                
                var finReelProje=null;
                if (value.ProjectActualFinishDate!=null) {
                  finReelProje=moment(value.ProjectActualFinishDate);
                  if ((finReelProg==null) || (moment(finReelProg).isBefore(finReelProje))) {
                    finReelProg=moment(finReelProje);
                  }
                }
                var finPlanProje=null;
                //
                if (value.ProjectFinishDate!=null){
                  finPlanProje=moment(value.ProjectFinishDate);
                  if ((finPlanProg==null) || (moment(finPlanProg).isBefore(finPlanProje))) {
                    finPlanProg=moment(finPlanProje);
                  }
                }
                var coutPlan=parseFloat(value.ProjectCost);
                var coutReel=parseFloat(value.ProjectActualCost).toFixed(0);
                 //sommeCoutPlan=parseFloat(parseFloat(sommeCoutPlan)+parseFloat(coutPlan)).toFixed(0);
                 sommeCoutReel=parseFloat(parseFloat(sommeCoutReel)+parseFloat(coutReel)).toFixed(0);

                 var travailPlan=parseFloat(value.ProjectWork/8);
                 
                 var travailReel=parseFloat(value.ProjectActualWork/8);

                 //sommeTravailPlan=parseFloat(parseFloat(sommeTravailPlan)+parseFloat(travailPlan)).toFixed(0);
                 sommeTravailReel=parseFloat(parseFloat(sommeTravailReel)+parseFloat(travailReel)).toFixed(0);
                 var glissTravail=parseFloat(value.ProjectWorkVariance/8).toFixed(0);
                 var glissCout=parseFloat(value.ProjectCostVariance).toFixed(0);
                 var glissDuree=parseFloat(value.ProjectDurationVariance/8).toFixed(0);
                 sumTavailVariance=parseFloat(parseFloat(sumTavailVariance)+parseFloat(glissTravail)).toFixed(0);
                 sumCoutVariance=parseFloat(parseFloat(sumCoutVariance)+parseFloat(glissCout)).toFixed(0);
                 sumDureeVariance=parseFloat(parseFloat(sumDureeVariance)+parseFloat(glissDuree)).toFixed(0);

                 projectActStart="";
                 var debActProj="";
                 if (value.ProjectActualStartDate!=null) {
                  projectActStart=value.ProjectActualStartDate;
                  debActProj=moment(projectActStart);
                 }
                 
                 projStartDate=value.ProjectStartDate;
                 var debProj = moment(projStartDate);
                 projfinshtDate=value.ProjectFinishDate;
                 var finProj = moment(projfinshtDate);
                 var nomPr=value.ProjectName;
                 // ////////console.log("__________________________________________________________");
                 // ////////console.log("nomPr= "+nomPr);
                 
                 // ////////console.log("debProj= "+moment(debProj).format("DD/MM/YYYY"));
                 // ////////console.log("debActProj= "+moment(debActProj).format("DD/MM/YYYY"));
                 // ////////console.log("finProj= "+moment(finProj).format("DD/MM/YYYY"));
                 // ////////console.log("__________________________________________________________");
                 var idProj=value.ProjectId;
                 arrId.push(idProj);
                 arrDebutPlan.push(debProj);
                 arrDebutReel.push(debActProj);
                 arrDebutBase.push("");
                 arrFinPlan.push(finProj);
                 arrCoutBaseline.push(0);
                 arrTravailBaseline.push(0);
                 arrDureeBaseline.push(0);
                 var achevment=value.ProjectPercentCompleted;
                 sumAch=parseFloat(parseFloat(sumAch)+parseFloat(achevment));
                 counter++;
                 //console.log("compteur= "+counter);
                 dureeReel=parseFloat(value.ProjectActualDuration).toFixed(0);
                 console.log("dureereelprog= "+dureeReel);
              });
              var glissEch=0;
                if (finReelProg!= null) {
                  var finReelProgramme=moment(finReelProg);
                  var finPlanProgramme=moment(finPlanProg);
                  glissEch= parseFloat(finReelProgramme.diff(finPlanProgramme, 'days'));
                }
                if (glissEch<0) {
                  glissEch=0;
                }
                avgAch=parseFloat(parseFloat(sumAch)/parseFloat(counter)).toFixed(0);
                document.getElementById("pourcentageAchProg").innerHTML = avgAch+' <span class="text-gray">%</span>';
                ////console.log("nbProj= "+counter);
                //document.getElementById("nbProj").innerHTML = counter;

                document.getElementById("dureeglissEch").innerHTML = conToMill(glissEch)+' <span class="text-gray">J</span>';
                document.getElementById("dureeglissprog").innerHTML = conToMill(sumDureeVariance)+' <span class="text-gray">J</span>';
                
                document.getElementById("coutreelprog").innerHTML = conToMill(sommeCoutReel)+' <span class="text-gray">DT</span>';
                document.getElementById("coutglissprog").innerHTML = conToMill(sumCoutVariance)+' <span class="text-gray">DT</span>';
                
                document.getElementById("chargereelprog").innerHTML = conToMill(sommeTravailReel)+' <span class="text-gray">J/H</span>';
                document.getElementById("chargeglissprog").innerHTML = conToMill(sumTavailVariance)+' <span class="text-gray">J/H</span>';

                // document.getElementById("dureeglissprog").innerHTML = conToMill(sumDureeVariance)+' <span class="text-gray">J</span>';

                var minDebPlan=arrDebutPlan[0] ;
                
                var maxFinPlan=arrFinPlan[0] ;
                
                for (var i = 1; i < arrDebutPlan.length; i++) {
                  if (moment(arrDebutPlan[i]).isBefore(minDebPlan)) {
                    minDebPlan=moment(arrDebutPlan[i]);
                  }
                  
                  
                  if (moment(maxFinPlan).isBefore(arrFinPlan[i])) {
                    maxFinPlan=moment(arrFinPlan[i]);
                  }          
                }
                
                //var diffPlan=maxFinPlan.diff(minDebPlan, 'days');
                var diffPlan=0;
                var diffReel=0;
                // if (!isNaN(maxFinPlan.diff(minDebReel, 'days'))) {
                //   diffReel=maxFinPlan.diff(minDebReel, 'days');
                // }
                var diffBase=0;
                
                diffReel=diffPlan;
                
                document.getElementById("dureereelprog").innerHTML = conToMill(dureeReel)+' <span class="text-gray">J</span>';
                for (var j = 0; j < arrId.length; j++) {
                  loadBaselineInfo(arrId[j],diffBase,diffPlan,glissCout,glissDuree,glissTravail,sommeTravailPlan,sommeTravailBase,sommeCoutPlan,sommecoutBase,arrId,arrDebutBase,arrFinBase,arrCoutBaseline,arrTravailBaseline,arrFinPlan)
                }
          }
      });
  }
  loadKPIs();

  function loadBaselineInfo(projId,dureeBaseProg,dureeReelProg,glissCout,glissDuree,glissTravail,sommeTravailPlan,sommeTravailBase,sommeCoutPlan,sommecoutBase,arrId,arrDebutBase,arrFinBase,arrCoutBaseline,arrTravailBaseline,arrFinPlan){
    var responseBaselineInfo=responseBaselineInfo || [];
    var urlBaselineInfo=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$filter=ProjectId eq guid%27"+projId+"%27";
    //////////console.log("urlBaselineInfo= "+urlBaselineInfo);
    function loadBaselineInformations(){
         $.ajax({
            url: urlBaselineInfo,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                var dataResults = data.d.results;
                
          
                
                //finBaseProg debBaseProg
                $.each(dataResults, function (key, value) {
                  var idddp=value.ProjectId;
                  var travailBase=parseFloat(value.ProjectBaselineWork/8).toFixed(0) ;
                  var coutBase=parseFloat(value.ProjectBaselineCost).toFixed(0) ;
                  sommecoutBase+=parseFloat(coutBase);
                  sommeTravailBase+=parseFloat(travailBase);
                  //arrDebutBase arrFinBase
                  var debBP=value.ProjectBaselineStartDate;
                  var debBaseProj=moment(debBP);
                  var finBP=value.ProjectBaselineFinishDate;
                  var finBaseProj=moment(finBP);
                  arrDebutBase[arrId.indexOf(idddp)]=debBaseProj ;
                  arrFinBase[arrId.indexOf(idddp)]=finBaseProj ;
                  var travailPlan=parseFloat(value.ProjectBaselineWork/8).toFixed(0);
                  
                  var coutPlan=parseFloat(value.ProjectBaselineCost);
                  dureeBaseProg=parseFloat(value.ProjectBaselineDuration).toFixed(0);
                  var pos=arrId.indexOf(idddp);
                  arrCoutBaseline[pos]=coutPlan;
                  arrTravailBaseline[pos]=travailPlan;
                });
                for (var z = 0; z < arrId.length; z++) {
                  sommeTravailPlan=parseFloat(parseFloat(sommeTravailPlan)+parseFloat(arrTravailBaseline[z])).toFixed(0);
                  sommeCoutPlan=parseFloat(parseFloat(sommeCoutPlan)+parseFloat(arrCoutBaseline[z])).toFixed(0);
                }

                glissCharge=parseFloat(sommeTravailPlan-sommeTravailBase) ;
                glissCout=parseFloat(sommeCoutPlan-sommecoutBase);
                
                
                document.getElementById("chargeplanifprog").innerHTML = conToMill(sommeTravailPlan)+' <span class="text-gray">J/H</span>';
                
                document.getElementById("coutplanifprog").innerHTML = conToMill(sommeCoutPlan)+' <span class="text-gray">DT</span>';
                var minDebBase=arrDebutBase[0] ;
                var maxFinBase=arrFinPlan[0] ;
                for (var i = 1; i < arrDebutBase.length; i++) {
                  if (moment(arrDebutBase[i]).isBefore(moment(minDebBase))) {
                    minDebBase=moment(arrDebutBase[i]);
                  }
                  
                  if (moment(maxFinBase).isBefore(moment(arrFinPlan[i]))) {
                    maxFinBase=moment(arrFinPlan[i]);
                  }          
                }
                ////console.log("arrDebutBase= "+arrDebutBase);
                
                if ((moment(maxFinBase).isValid())&&(moment(minDebBase).isValid())) {
                  //dureeBaseProg=moment(maxFinBase).diff(moment(minDebBase), 'days');
                  document.getElementById("dureeplanifprog").innerHTML = conToMill(dureeBaseProg)+' <span class="text-gray">J</span>';
                  //dureeBaseProg dureePlanProg
                  glissDuree=parseFloat(dureeBaseProg-dureeReelProg);
                  
                }else{
                  document.getElementById("dureeplanifprog").innerHTML = 0+' <span class="text-gray">J</span>';
                  document.getElementById("dureeglissprog").innerHTML = 0+' <span class="text-gray">J</span>';
                  ////console.log('no baseline');
                }
                }
        });
    }
    loadBaselineInformations();
  }

var responseTabAch0=responseTabAch0 || [];
  var urlTabAch0=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme,ProjectPercentCompleted"+urlFilterPortefeuille+"%20and%20Types_de_Projet%20eq%27Page_Maitre%27";
  console.log("urlTabAch0= "+urlTabAch0);
  function loadTabAch0(){
       $.ajax({
          url: urlTabAch0,
          method: "GET",
          dataType: "json",
          headers: { Accept: "application/json;odata=verbose" },
          success: function (data) {
              responseTabAch0 = responseTabAch0.concat(data.d.results);
              if (data.d.__next) {
                  urlTabAch0 = data.d.__next;
                  loadTabAch0();
              }
              
              var arrProg=[];
              var arrAchS=[];
              var arrProgCount=[];
              var arrProgAvg=[];
              var countP=0;
              var sumAch=0;
              var avgAchG=0;
              $.each(responseTabAch0, function (key, value) {
                countP++;
                var progn=value.Programme;
                //var progn=progSelctedName1.replace("'", "''");
                var ach=value.ProjectPercentCompleted;
                sumAch=parseFloat(parseFloat(sumAch)+parseFloat(ach));
                if (arrProg.indexOf(progn)<0) {
                  arrProg.push(progn);
                  arrAchS.push(parseFloat(ach));
                  arrProgCount.push(1);                  
                }else{
                  arrAchS[arrProg.indexOf(progn)]=parseFloat(parseFloat(ach)+parseFloat(arrAchS[arrProg.indexOf(progn)]));
                  arrProgCount[arrProg.indexOf(progn)]=parseFloat(parseFloat(arrProgCount[arrProg.indexOf(progn)])+1);
                }
              });
              avgAchG=parseFloat(parseFloat(sumAch)/parseFloat(countP)).toFixed(0);
              for (var i = 0; i < arrProg.length; i++) {
                arrProgAvg[i]=parseFloat(parseFloat(arrAchS[i])/parseFloat(arrProgCount[i])).toFixed(0);                
              }
              for (var i = 0; i < arrProg.length; i++) {
      
                var trSuiv1;
                   trSuiv1 = $("<tr class='rows'/>");
                   trSuiv1.append("<td style='width: 50%'>" + arrProg[i] +"</td>");
                   trSuiv1.append("<td style='width: 50%'>" + arrProgAvg[i] +"</td>");
                  
                   $('#tableProjet1').append(trSuiv1);
              }
               document.getElementById("pourcentageAchProg").innerHTML=parseFloat(avgAchG).toFixed(0)+' <span class="text-gray">%</span>';

         document.getElementById("morris-area-chart-prog").innerHTML='<canvas id="bar-chart" width="100%" height="50vh"></canvas>';
            var ctx0 = document.getElementById("bar-chart").getContext('2d');
                    if(window.ctx0 != undefined)
                    {
                      window.ctx0.destroy();
                    }
                         window.ctx0 = new Chart(ctx0, {
                        type: 'horizontalBar',
                        data: {
                          labels: arrProg,
                          datasets: [{
                            backgroundColor: ["#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7","#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7","#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7","#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7","#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7","#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7","#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7", "#337ab7"],
                            label: 'Pourcentage achevé',
                            data: arrProgAvg
                          }]
                        },
                        options:{
                        legend: { display: false },
                        title: {
                             display: false,
                             text: 'Pourcentage achevé',
                             fontColor: '#2ea0e6',
                             fontSize: 20
                         },
                         scales: {
                        xAxes: [{
                            ticks: {
                                beginAtZero: true,
                                max:100,
                                fontSize: 12
                            },
                             scaleLabel: {
                              display: true,
                              fontSize: 15,
                              labelString: "Pourcentage achevé"
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                             scaleLabel: {
                              display: true,
                              fontSize: 15,
                              labelString: "Programme"
                            }
                        }]
                    },
                       

                          responsive: true,
                          
                        
                        
                          plugins:{
                        labels: {
                          render: 'value',
                          fontColor: '#000',
                          position: 'outside',
                          fontSize:20
                        }
                      },

                       


                        }
                      }); 
            
          }
      });
  }
  loadTabAch0();




  

}
