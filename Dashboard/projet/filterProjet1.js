function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function mainfilter(){

  document.getElementById("loader-wrapper").style.display = "block";
  jQuery(document).ready(function() {
    jQuery('#loader-wrapper').fadeOut(5000);
    //jQuery('#wrapper').fadeIn(3000);
     
});
  var nomPortefeuille =  getSelectedText("myList1");
  var progSelctedName1=getSelectedText("myList2");
  var projSelctedName1=getSelectedText("myList3");
  document.getElementById("progTitle").innerHTML = '<i class="fa fa-dashboard"></i> ' + nomPortefeuille +'; '+progSelctedName1+'; '+projSelctedName1+'; ';
  var progn=progSelctedName1.replace("'", "''");
  var idProjSel=document.getElementById("myList3").value;
  var urlFilterPortefeuille="&$filter=ProjectId%20eq%20guid%27"+idProjSel+"%27";










  var responseKPIs=responseKPIs || [];
  var urlKPIs=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectActualFinishDate,ProjectFinishDate,ProjectCost,ProjectActualCost,ProjectWork,ProjectActualWork,ProjectDuration,ProjectActualDuration,ProjectPercentCompleted"+urlFilterPortefeuille;
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
              $.each(responseKPIs, function (key, value) {
                dureeReel=parseFloat(value.ProjectDuration/8).toFixed(0);
                document.getElementById("dureereelprog").innerHTML = conToMill(dureeReel)+' <span class="text-gray">J</span>';
                var achevment=value.ProjectPercentCompleted;
                sumAch=parseFloat(parseFloat(sumAch)+parseFloat(achevment));
                counter++;

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
                var coutReel=parseFloat(value.ProjectActualCost);
                 sommeCoutPlan=parseFloat(parseFloat(sommeCoutPlan)+parseFloat(coutPlan)).toFixed(0);
                 sommeCoutReel=parseFloat(parseFloat(sommeCoutReel)+parseFloat(coutReel)).toFixed(0);

                 var travailPlan=parseFloat(value.ProjectWork/8);
                 
                 var travailReel=parseFloat(value.ProjectActualWork/8);
                 sommeTravailPlan=parseFloat(parseFloat(sommeTravailPlan)+parseFloat(travailPlan)).toFixed(0);
                 sommeTravailReel=parseFloat(parseFloat(sommeTravailReel)+parseFloat(travailReel)).toFixed(0);

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
                 console.log("__________________________________________________________");
                 console.log("nomPr= "+nomPr);
                 
                 console.log("debProj= "+moment(debProj).format("DD/MM/YYYY"));
                 console.log("debActProj= "+moment(debActProj).format("DD/MM/YYYY"));
                 console.log("finProj= "+moment(finProj).format("DD/MM/YYYY"));
                 console.log("__________________________________________________________");
                 var idProj=value.ProjectId;
                 arrId.push(idProj);
                 arrDebutPlan.push(debProj);
                 arrDebutReel.push(debActProj);
                 arrFinPlan.push(finProj);
                 arrCoutBaseline.push(0);
                 arrTravailBaseline.push(0);
                 arrDureeBaseline.push(0);
                 
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
                
                document.getElementById("dureeglissEch").innerHTML = conToMill(glissEch)+' <span class="text-gray">J</span>';
                document.getElementById("coutplanifprog").innerHTML = conToMill(sommeCoutPlan)+' <span class="text-gray">DT</span>';
                document.getElementById("coutreelprog").innerHTML = conToMill(sommeCoutReel)+' <span class="text-gray">DT</span>';
                document.getElementById("chargeplanifprog").innerHTML = conToMill(sommeTravailPlan)+' <span class="text-gray">J/H</span>';
                document.getElementById("chargereelprog").innerHTML = conToMill(sommeTravailReel)+' <span class="text-gray">J/H</span>';
                var minDebPlan=arrDebutPlan[0] ;
                var minDebReel=arrDebutReel[0] ;
                var maxFinPlan=arrFinPlan[0] ;
                console.log("arrDebutReel= "+arrDebutReel);
                for (var i = 1; i < arrDebutPlan.length; i++) {
                  if (moment(arrDebutPlan[i]).isBefore(minDebPlan)) {
                    minDebPlan=moment(arrDebutPlan[i]);
                  }
                  
                  if ((moment(arrDebutReel[i]).isBefore(minDebReel))||((minDebReel=="")&&(arrDebutReel[i]!=""))) {

                    minDebReel=moment(arrDebutReel[i]);
                    console.log("minDebReel= "+minDebReel);
                  }
                  if (moment(maxFinPlan).isBefore(arrFinPlan[i])) {
                    maxFinPlan=moment(arrFinPlan[i]);
                  }          
                }
                console.log("minDebPlan= "+moment(minDebPlan).format("DD/MM/YYYY"));
                console.log("minDebReel= "+moment(minDebReel).format("DD/MM/YYYY"));
                console.log("maxFinPlan= "+moment(maxFinPlan).format("DD/MM/YYYY"));
                var diffPlan=maxFinPlan.diff(minDebPlan, 'days');
                var diffReel=0;
                if (!isNaN(maxFinPlan.diff(minDebReel, 'days'))) {
                  diffReel=maxFinPlan.diff(minDebReel, 'days');
                }
                var diffBase=0;
                console.log("diffPlan= "+diffPlan);
                console.log("diffReel= "+diffReel);
                
                
                for (var j = 0; j < arrId.length; j++) {
                  loadBaselineInfo(arrId[j],diffBase,diffPlan,glissCout,glissDuree,glissTravail,sommeTravailPlan,sommeTravailBase,sommeCoutPlan,sommecoutBase,arrId,arrDebutBase,arrFinBase,dureeReel)
                }
          }
      });
  }
  loadKPIs();

  function loadBaselineInfo(projId,dureeBaseProg,dureePlanProg,glissCout,glissDuree,glissTravail,sommeTravailPlan,sommeTravailBase,sommeCoutPlan,sommecoutBase,arrId,arrDebutBase,arrFinBase,dureeReel){
    var responseBaselineInfo=responseBaselineInfo || [];
    var urlBaselineInfo=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$filter=ProjectId eq guid%27"+projId+"%27";
    //console.log("urlBaselineInfo= "+urlBaselineInfo);
    function loadBaselineInformations(){
         $.ajax({
            url: urlBaselineInfo,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                var dataResults = data.d.results;
                
                var dureePlanifier=0;
                
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
                  dureePlanifier=parseFloat(value.ProjectBaselineDuration/8).toFixed(0);
                });
                document.getElementById("dureeplanifprog").innerHTML = conToMill(dureePlanifier)+' <span class="text-gray">J</span>';

                glissCharge=parseFloat(sommeTravailPlan-sommeTravailBase) ;
                glissCout=parseFloat(sommeCoutPlan-sommecoutBase);
                //glissDuree=parseFloat(dureePlanProg-dureeBaseProg);
                document.getElementById("coutglissprog").innerHTML = conToMill(glissCout)+' <span class="text-gray">DT</span>';
                document.getElementById("chargeglissprog").innerHTML = conToMill(glissCharge)+' <span class="text-gray">J/H</span>';
                //document.getElementById("dureeglissprog").innerHTML = conToMill(glissDuree)+' <span class="text-gray">J</span>';
                var minDebBase=arrDebutBase[0] ;
                var maxFinBase=arrFinBase[0] ;
                for (var i = 1; i < arrDebutBase.length; i++) {
                  if (moment(arrDebutBase[i]).isBefore(minDebBase)) {
                    minDebBase=moment(arrDebutBase[i]);
                  }
                  
                  if (moment(maxFinBase).isBefore(arrFinBase[i])) {
                    maxFinBase=moment(arrFinBase[i]);
                  }          
                }
                dureeBaseProg=maxFinBase.diff(minDebBase, 'days');
                //dureeBaseProg dureePlanProg
                glissDuree=parseFloat(dureePlanifier-dureeReel);
                document.getElementById("dureeglissprog").innerHTML = conToMill(glissDuree)+' <span class="text-gray">J</span>';
            }
        });
    }
    loadBaselineInformations();
  }




  //   var arrColorCode=["#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c"];

  //   var responseTabAch0=responseTabAch0 || [];
  // var urlTabAch0=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Programme,ProjectName,ProjectPercentCompleted&$filter=Types_de_Projet%20eq%27Chantier%27 and ParentProjectId eq guid%27"+idProjSel+"%27";
  // console.log("urlTabAch0= "+urlTabAch0);
  // function loadTabAch0(){
  //      $.ajax({
  //         url: urlTabAch0,
  //         method: "GET",
  //         dataType: "json",
  //         headers: { Accept: "application/json;odata=verbose" },
  //         success: function (data) {
  //             responseTabAch0 = responseTabAch0.concat(data.d.results);
  //             if (data.d.__next) {
  //                 urlTabAch0 = data.d.__next;
  //                 loadTabAch0();
  //             }
              
  //             var arrProg=[];
  //             var arrAchS=[];
  //             var arrProgCount=[];
  //             var arrProgAvg=[];
  //             var countP=0;
  //             var sumAch=0;
  //             var avgAchG=0;
  //             document.getElementById("tabAchDiv").innerHTML='<table class="table table-hover table-striped" style="border-radius:0px 0px 7px 7px"> <tbody style="text-align: center;" id="tableProjet"></tbody> </table>';
  //             $.each(responseTabAch0, function (key, value) {
  //               countP++;
  //               var progn=value.ProjectName;
  //               //var progn=progSelctedName1.replace("'", "''");
  //               var ach=value.ProjectPercentCompleted;
  //               sumAch=parseFloat(parseFloat(sumAch)+parseFloat(ach));
  //               if (arrProg.indexOf(progn)<0) {
  //                 arrProg.push(progn);
  //                 arrAchS.push(parseInt(ach));
  //                 arrProgCount.push(1);                  
  //               }else{
  //                 arrAchS[arrProg.indexOf(progn)]=parseInt(ach)+parseInt(arrAchS[arrProg.indexOf(progn)]);
  //                 arrProgCount[arrProg.indexOf(progn)]=parseInt([arrProg.indexOf(progn)])+1;
  //               }
  //             });
  //             avgAchG=parseFloat(parseFloat(sumAch)/parseFloat(countP)).toFixed(0);
  //             for (var i = 0; i < arrProg.length; i++) {
  //               arrProgAvg[i]=parseFloat(parseFloat(arrAchS[i])/parseFloat(arrProgCount[i])).toFixed(0);                
  //             }
  //             console.log("arrProg= "+arrProg);
  //             console.log("arrProgAvg= "+arrProgAvg);
  //             for (var i = 0; i < arrProg.length; i++) {
      
  //               var trSuiv1;
  //                  trSuiv1 = $("<tr class='rows'/>");
  //                  trSuiv1.append("<td style='width: 50%'>" + arrProg[i] +"</td>");
  //                  trSuiv1.append("<td style='width: 50%'>" + arrProgAvg[i] +"%</td>");
                  
  //                  $('#tableProjet').append(trSuiv1);
  //             }
  //              document.getElementById("pourcentageAchProg").innerHTML=parseFloat(avgAchG).toFixed(0)+' <span class="text-gray">%</span>';

  //        document.getElementById("morris-area-chart-prog").innerHTML='<canvas id="bar-chart" width="100%" height="50vh"></canvas>';
  //           var ctx0 = document.getElementById("bar-chart").getContext('2d');
  //                   if(window.ctx0 != undefined)
  //                   {
  //                     window.ctx0.destroy();
  //                   }
  //                        window.ctx0 = new Chart(ctx0, {
  //                       type: 'horizontalBar',
  //                       data: {
  //                         labels: arrProg,
  //                         datasets: [{
  //                           backgroundColor: arrColorCode,
  //                           label: 'Programme',
  //                           data: arrProgAvg
  //                         }]
  //                       },
  //                       options:{
  //                       legend: { display: false },
  //                       title: {
  //                            display: false,
  //                            text: 'Pourcentage achevé',
  //                            fontColor: '#2ea0e6',
  //                            fontSize: 20
  //                        },
  //                        scales: {
  //                       xAxes: [{
  //                           ticks: {
  //                               beginAtZero: true,
  //                               max:100,
  //                               fontSize: 12
  //                           },
  //                            scaleLabel: {
  //                             display: true,
  //                             fontSize: 15,
  //                             labelString: "Pourcentage achevé"
  //                           }
  //                       }],
  //                       yAxes: [{
  //                           ticks: {
  //                               beginAtZero: true
  //                           },
  //                            scaleLabel: {
  //                             display: true,
  //                             fontSize: 15,
  //                             labelString: "Programme"
  //                           }
  //                       }]
  //                   },
                       

  //                         responsive: true,
                          
                        
                        
  //                         plugins:{
  //                       labels: {
  //                         render: 'value',
  //                         fontColor: '#000',
  //                         position: 'outside',
  //                         fontSize:20
  //                       }
  //                     },

                       


  //                       }
  //                     }); 
            
  //         }
  //     });
  // }
  // loadTabAch0();


}
