function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function mainfilter(){
  var nomPortefeuille =  getSelectedText("myList1");
  var progSelctedName1=getSelectedText("myList2");
  var projSelctedName1=getSelectedText("myList3");
  document.getElementById("progTitle").innerHTML = '<i class="fa fa-dashboard"></i> ' + nomPortefeuille +'; '+progSelctedName1+'; '+projSelctedName1+'; ';
  var progn=progSelctedName1.replace("'", "''");
  var idProjSel=document.getElementById("myList3").value;
  var urlFilterPortefeuille="&$filter=ProjectId%20eq%20guid%27"+idProjSel+"%27";
tableaux1 = document.getElementById("tableProjet");
                tr1 = tableaux1.getElementsByTagName("tr");
                if(tr1.length>0){
                  $('#tableProjet tbody').empty();
                }









  var responseKPIs=responseKPIs || [];
  var urlKPIs=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectCost,ProjectActualCost,ProjectWork,ProjectActualWork,ProjectDuration,ProjectActualDuration"+urlFilterPortefeuille;
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
              
              
              var sommeCoutPlan=0;
              var sommeCoutReel=0;
              

              var sommeTravailPlan=0;
              var sommeTravailReel=0;
              

              var sommeDureePlan=0;
              var sommeDureeReel=0;
              
              var arrId=[];
              var arrCoutBaseline=[];
              var arrTravailBaseline=[];
              var arrDureeBaseline=[];
              var countP=0;
              $.each(responseKPIs, function (key, value) {
                countP++;
                var idProj=value.ProjectId;
                arrId.push(idProj);
                arrCoutBaseline.push(0);
                arrTravailBaseline.push(0);
                arrDureeBaseline.push(0);
                 var coutPlan=parseFloat(value.ProjectCost);
                 ////////console.log('coutPlan= '+coutPlan);
                 var coutReel=parseFloat(value.ProjectActualCost);
                 sommeCoutPlan=parseFloat(sommeCoutPlan+coutPlan);
                 sommeCoutReel=parseFloat(sommeCoutReel+coutReel);

                 var travailPlan=parseFloat(value.ProjectWork);
                 
                 var travailReel=parseFloat(value.ProjectActualWork/8);
                 sommeTravailPlan=parseFloat(sommeTravailPlan+travailPlan);
                 sommeTravailReel=parseFloat(sommeTravailReel+travailReel);

                 var dureePlan=parseFloat(value.ProjectDuration/8);
                 var dureeReel=parseFloat(value.ProjectActualDuration/8);
                 sommeDureePlan=parseFloat(sommeDureePlan+dureePlan);
                 sommeDureeReel=parseFloat(sommeDureeReel+dureeReel);
                 
              });
              
              
              for (var i = 0; i < arrId.length; i++) {
                loadBaselineInfo(arrId[i],sommeCoutPlan,sommeTravailPlan,sommeDureePlan,arrCoutBaseline,arrTravailBaseline,arrDureeBaseline,arrId);
                ////////console.log("arrId["+i+"]= "+arrId[i]);
              } 
              var glissementCout=parseFloat(sommeCoutPlan-sommeCoutReel).toFixed(0);
              //document.getElementById("coutglissprog").innerHTML = conToMill(glissementCout)+' <span class="text-gray">DT</span>';
              document.getElementById("coutplanifprog").innerHTML = conToMill(sommeCoutPlan)+' <span class="text-gray">DT</span>';
              document.getElementById("coutreelprog").innerHTML = conToMill(sommeCoutReel)+' <span class="text-gray">DT</span>';

              var glissementTravail=parseFloat(sommeTravailPlan-sommeTravailReel).toFixed(0);
              //document.getElementById("chargeglissprog").innerHTML = conToMill(glissementTravail)+' <span class="text-gray">H</span>';
              document.getElementById("chargeplanifprog").innerHTML = conToMill(sommeTravailPlan)+' <span class="text-gray">J/H</span>';
              document.getElementById("chargereelprog").innerHTML = conToMill(sommeTravailReel)+' <span class="text-gray">J/H</span>';

              var glissementDuree=parseFloat(sommeDureePlan-sommeDureeReel).toFixed(0);
              //document.getElementById("dureeglissprog").innerHTML = conToMill(glissementDuree)+' <span class="text-gray">J</span>';
              document.getElementById("dureeplanifprog").innerHTML = conToMill(sommeDureePlan)+' <span class="text-gray">J</span>';
              document.getElementById("dureereelprog").innerHTML = conToMill(sommeDureeReel)+' <span class="text-gray">J</span>';
              
                        
          }
      });
  }
  loadKPIs();
  function loadBaselineInfo(projId,sommeCoutPlan,sommeTravailPlan,sommeDureePlan,arrCoutBaseline,arrTravailBaseline,arrDureeBaseline,arrId){
    var responseBaselineInfo=responseBaselineInfo || [];
    var urlBaselineInfo=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectBaselineCost,ProjectBaselineWork,ProjectBaselineDuration&$filter=ProjectId eq guid%27"+projId+"%27";
    ////////console.log("urlBaselineInfo= "+urlBaselineInfo);
    function loadBaselineInformations(){
         $.ajax({
            url: urlBaselineInfo,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                var dataResults = data.d.results;
                
                // //////console.log("sommeCoutBaseline= "+sommeCoutBaseline);
                // //////console.log("sommeTravailBaseline= "+sommeTravailBaseline);
                // //////console.log("sommeDureeBaseline= "+sommeDureeBaseline);
                
                $.each(dataResults, function (key, value) {
                  var id=value.ProjectId;
                  var coutRef=value.ProjectBaselineCost;
                  var travailRef=parseFloat(value.ProjectBaselineWork/8);
                  var dureeRef=value.ProjectBaselineDuration;
                  
                  ////////console.log("dureeRef= "+dureeRef);
                  //****************
                  arrCoutBaseline[arrId.indexOf(id)]=parseFloat(coutRef);
                  arrTravailBaseline[arrId.indexOf(id)]=parseFloat(travailRef);
                  arrDureeBaseline[arrId.indexOf(id)]=parseFloat(dureeRef);
                });
                ////////console.log("arrDureeBaseline= "+arrDureeBaseline);
                var sommeCoutBaseline=0;
                var sommeTravailBaseline=0;
                var sommeDureeBaseline=0;
                for (var i = 0; i < arrId.length; i++) {
                  sommeCoutBaseline=parseFloat(sommeCoutBaseline+arrCoutBaseline[i]);
                  sommeTravailBaseline=parseFloat(sommeTravailBaseline+arrTravailBaseline[i]);
                  sommeDureeBaseline=parseFloat(sommeDureeBaseline+arrDureeBaseline[i]);
                }
                ////////console.log("sommeDureeBaseline= "+sommeDureeBaseline);
                var glissementCout=parseFloat(sommeCoutPlan-sommeCoutBaseline).toFixed(0);
                document.getElementById("coutglissprog").innerHTML = conToMill(glissementCout)+' <span class="text-gray">DT</span>';
                

                var glissementTravail=parseFloat(sommeTravailPlan-sommeTravailBaseline).toFixed(0);
                document.getElementById("chargeglissprog").innerHTML = conToMill(glissementTravail)+' <span class="text-gray">J/H</span>';
                

                var glissementDuree=parseFloat(sommeDureePlan-sommeDureeBaseline).toFixed(0);
                document.getElementById("dureeglissprog").innerHTML = conToMill(glissementDuree)+' <span class="text-gray">J</span>';
                
            }
        });
    }
    loadBaselineInformations();
  }
  var responseTabAch=responseTabAch || [];
  var urlTabAch=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName&$filter=Types_de_Projet%20eq%27Chantier%27 and ParentProjectId eq guid%27"+idProjSel+"%27";
  
  ////console.log("urlTabAch= "+urlTabAch);
  function loadTabAch(){
       $.ajax({
          url: urlTabAch,
          method: "GET",
          dataType: "json",
          headers: { Accept: "application/json;odata=verbose" },
          success: function (data) {
              responseTabAch = responseTabAch.concat(data.d.results);
              if (data.d.__next) {
                  urlTabAch = data.d.__next;
                  loadTabAch();
              }
              
              var arrAchPond=[];
              var arrNomChan=[];
              var arrPoid=[];
              $.each(responseTabAch, function (key, value) {
                var idProj=value.ProjectId;
                var nomP=value.ProjectName;
                arrNomChan.push(nomP);
                arrAchPond.push(0);
                arrPoid.push(0);
                loadTabChart(idProj,arrNomChan,arrAchPond,nomP,arrPoid);
                
                // //console.log("uuu= "+_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectId,AchevéPondéré,Poids,TaskOutlineLevel&$filter=ProjectId eq guid%27"+idProj+"%27");

              });
              document.getElementById("nbProj").innerHTML = conToMill(arrNomChan.length);
            
          }
      });
  }
  loadTabAch();
function loadTabChart(idProj,arrNomChan,arrAchPond,nomP,arrPoid){
  var responseTabAchFTasks=responseTabAchFTasks || [];
    var urlTabAchFTasks=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectId,AchevéPondéré,Poids,TaskOutlineLevel&$filter=ProjectId eq guid%27"+idProj+"%27 and TaskOutlineLevel eq 0";
   console.log("urlTabAchFTasks= "+urlTabAchFTasks);
    function loadTabAchFTasks(){
         $.ajax({
            url: urlTabAchFTasks,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseTabAchFTasks = responseTabAchFTasks.concat(data.d.results);
                if (data.d.__next) {
                    urlTabAchFTasks = data.d.__next;
                    loadTabAchFTasks();
                }
                
                
                $.each(responseTabAchFTasks, function (key, value) {
                  var achevementPond=value.AchevéPondéré;
                  
                  var trSuiv;
                   trSuiv = $("<tr class='rows'/>");
                   trSuiv.append("<td>" + nomP +"</td>");
                   trSuiv.append("<td>" + parseFloat(achevementPond).toFixed(0) +"</td>");
                   $('#tableProjet').append(trSuiv);
                   arrAchPond[arrNomChan.indexOf(nomP)]=parseFloat(achevementPond).toFixed(0);
                  
                });
                 loadChartMF(arrNomChan,arrAchPond); 
                           
              
            }
        });
    }
    loadTabAchFTasks();
    
}
function loadChartMF(arrNomChan,arrAchPond){
  console.log("hahahahahhahahahahaha");
  document.getElementById("morris-area-chart-prog").innerHTML='<canvas id="bar-chart" width="100%" height="50vh"></canvas>';
            var ctx0 = document.getElementById("bar-chart").getContext('2d');
                    if(window.ctx0 != undefined)
                    {
                      window.ctx0.destroy();
                    }
                         window.ctx0 = new Chart(ctx0, {
                        type: 'horizontalBar',
                        data: {
                          labels: arrNomChan,
                          datasets: [{
                            backgroundColor: ["#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c"],
                            label: 'Programme',
                            data: arrAchPond
                          }]
                        },
                        options:{
                        legend: { display: false },
                        title: {
                             display: true,
                             text: 'Pourcentage achevé',
                             fontColor: '#2ea0e6',
                             fontSize: 20
                         },
                         scales: {
                        xAxes: [{
                            ticks: {

                                fontSize: 12
                            },
                             scaleLabel: {
                              display: true,
                              fontSize: 15,
                              labelString: "Nombre des risques"
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                             scaleLabel: {
                              display: true,
                              fontSize: 15,
                              labelString: "Statut"
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


  
var responseAACCHH=responseAACCHH || [];
  var urlAACCHH=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Programme,ProjectName&$filter=ProjectId eq guid%27"+idProjSel+"%27%20and%20Types_de_Projet%20eq%27Page_Maitre%27";
  console.log("urlAACCHH= "+urlAACCHH);
  function loadAACCHH(){
       $.ajax({
          url: urlAACCHH,
          method: "GET",
          dataType: "json",
          headers: { Accept: "application/json;odata=verbose" },
          success: function (data) {
              responseAACCHH = responseAACCHH.concat(data.d.results);
              if (data.d.__next) {
                  urlAACCHH = data.d.__next;
                  loadAACCHH();
              }
              
              var arrProg=[];
              var arrAchPon=[];
              var arrId=[];
              var arrProgId=[];
              var arrProgCount=[];
              var arrNomProj=[];
              var arrAchPonFinal=[];
              var arrAchPonId=[];
              var arrPoidId=[];
              var arrSumRapportPoidsProg=[];
              var arrSumPoidProg=[];
              var arrDataChart=[];
              var arrLabelChart=[];
              var arrPoidChart=[];
              $.each(responseAACCHH, function (key, value) {
                var idProj=value.ProjectId;
                arrId.push(idProj);
                var progN=value.Programme;
                arrProgId.push(progN);
                arrAchPonId.push(0);
                arrPoidId.push(0);

                if (arrProg.indexOf(progN)<0) {
                  arrProg.push(progN);
                  arrAchPon.push(0);
                  arrProgCount.push(0);
                  arrSumRapportPoidsProg.push(0);
                  arrSumPoidProg.push(0);
                  arrAchPonFinal.push(0);
                }
                var nomp=value.ProjectName;
                arrNomProj.push(nomp);

              });
              for (var i = 0; i < arrId.length; i++) {
                loadAACCHHFromTasks(arrId[i],arrProgId[i],arrNomProj[i],arrProg,arrAchPon,arrProgCount,arrAchPonFinal,arrId,arrSumRapportPoidsProg,arrSumPoidProg,arrPoidId,arrAchPonId,arrProgId,arrDataChart,arrLabelChart,arrPoidChart);
              }
              console.log(arrId.length);
            
          }
      });
  }
  loadAACCHH();
  function loadAACCHHFromTasks(idActuel,programmeActuel,nomProjActuel,arrProg,arrAchPon,arrProgCount,arrAchPonFinal,arrId,arrSumRapportPoidsProg,arrSumPoidProg,arrPoidId,arrAchPonId,arrProgId,arrDataChart,arrLabelChart,arrPoidChart){
    var responseAAACCC=responseAAACCC || [];
    var urlAAACCC=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectId,AchevéPondéré,Poids,TaskOutlineLevel&$filter=ProjectId eq guid%27"+idActuel+"%27";
    function loadAAACCC(){
         $.ajax({
            url: urlAAACCC,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseAAACCC = responseAAACCC.concat(data.d.results);
                if (data.d.__next) {
                    urlAAACCC = data.d.__next;
                    loadAAACCC();
                }
                
                var achevementPond=0;
                var rapportAchPondPoid=0;
                var sumRapportAchPondPoid=0;
                var sumPoid=0;
                var poidProj=0;
                $.each(responseAAACCC, function (key, value) {
                  var levelT=value.TaskOutlineLevel;
                  var idp=value.ProjectId;
                  var achPond=0;

                  if (levelT==0) {
                    poidProj=value.Poids;
                    

                  }
                  if (levelT==1) {
                    if (value.AchevéPondéré!=null){
                      achPond=parseFloat(value.AchevéPondéré);
                    }
                    var poid=parseFloat(value.Poids);
                    sumPoid+=parseFloat(poid);
                    rapportAchPondPoid=parseFloat(poid*achPond);
                    sumRapportAchPondPoid+=parseFloat(rapportAchPondPoid);
                  }
                  
                  //console.log("achPond= "+value.AchevéPondéré);
                  
                });
                  //console.log("arrPoidId= "+arrPoidId);
                achevementPond=parseFloat(sumRapportAchPondPoid/sumPoid);
                

                console.log("__________________________________________________________");
                console.log("nomProjActuel= "+nomProjActuel);
                console.log("achevementPond= "+achevementPond);
                console.log("poidProj= "+poidProj);
                console.log("programmeActuel= "+programmeActuel);
                console.log("__________________________________________________________");
                document.getElementById("pourcentageAchProg").innerHTML=parseFloat(achevementPond).toFixed(0)+' <span class="text-gray">%</span>';
                            
              
            }
        });
    }
    loadAAACCC();
  }
}
