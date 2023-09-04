function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function filterPortefeuille(){
  var nomPortefeuille =  getSelectedText("myList1");
  var urlFilterPortefeuille="&$filter=EnterpriseProjectTypeName%20eq%27"+nomPortefeuille+"%27"


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
                 ////console.log('coutPlan= '+coutPlan);
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
                ////console.log("arrId["+i+"]= "+arrId[i]);
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
              document.getElementById("nbProj").innerHTML = conToMill(countP);
                        
          }
      });
  }
  loadKPIs();
  function loadBaselineInfo(projId,sommeCoutPlan,sommeTravailPlan,sommeDureePlan,arrCoutBaseline,arrTravailBaseline,arrDureeBaseline,arrId){
    var responseBaselineInfo=responseBaselineInfo || [];
    var urlBaselineInfo=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectBaselineCost,ProjectBaselineWork,ProjectBaselineDuration&$filter=ProjectId eq guid%27"+projId+"%27";
    ////console.log("urlBaselineInfo= "+urlBaselineInfo);
    function loadBaselineInformations(){
         $.ajax({
            url: urlBaselineInfo,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                var dataResults = data.d.results;
                
                // //console.log("sommeCoutBaseline= "+sommeCoutBaseline);
                // //console.log("sommeTravailBaseline= "+sommeTravailBaseline);
                // //console.log("sommeDureeBaseline= "+sommeDureeBaseline);
                
                $.each(dataResults, function (key, value) {
                  var id=value.ProjectId;
                  var coutRef=value.ProjectBaselineCost;
                  var travailRef=parseFloat(value.ProjectBaselineWork/8);
                  var dureeRef=value.ProjectBaselineDuration;
                  
                  ////console.log("dureeRef= "+dureeRef);
                  //****************
                  arrCoutBaseline[arrId.indexOf(id)]=parseFloat(coutRef);
                  arrTravailBaseline[arrId.indexOf(id)]=parseFloat(travailRef);
                  arrDureeBaseline[arrId.indexOf(id)]=parseFloat(dureeRef);
                });
                ////console.log("arrDureeBaseline= "+arrDureeBaseline);
                var sommeCoutBaseline=0;
                var sommeTravailBaseline=0;
                var sommeDureeBaseline=0;
                for (var i = 0; i < arrId.length; i++) {
                  sommeCoutBaseline=parseFloat(sommeCoutBaseline+arrCoutBaseline[i]);
                  sommeTravailBaseline=parseFloat(sommeTravailBaseline+arrTravailBaseline[i]);
                  sommeDureeBaseline=parseFloat(sommeDureeBaseline+arrDureeBaseline[i]);
                }
                ////console.log("sommeDureeBaseline= "+sommeDureeBaseline);
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
  var urlTabAch=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Programme,ProjectName"+urlFilterPortefeuille;
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
              
              var arrProg=[];
              var arrAchPon=[];
              var arrId=[];
              var arrProgId=[];
              var arrProgCount=[];
              var arrNomProj=[];
              var arrAchPonFinal=[];
              $.each(responseTabAch, function (key, value) {
                var idProj=value.ProjectId;
                arrId.push(idProj);
                var progN=value.Programme;
                arrProgId.push(progN);

                if (arrProg.indexOf(progN)<0) {
                  arrProg.push(progN);
                  arrAchPon.push(0);
                  arrProgCount.push(0);
                  arrAchPonFinal.push(0);
                }
                var nomp=value.ProjectName;
                arrNomProj.push(nomp);

              });
              for (var i = 0; i < arrId.length; i++) {
                loadAchFromTasks(arrId[i],arrProgId[i],arrNomProj[i],arrProg,arrAchPon,arrProgCount,arrAchPonFinal);
              }
              
            
          }
      });
  }
  loadTabAch();
  function loadAchFromTasks(idActuel,programmeActuel,nomProjActuel,arrProg,arrAchPon,arrProgCount,arrAchPonFinal){
    var responseTabAchFTasks=responseTabAchFTasks || [];
    var urlTabAchFTasks=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectId,AchevéPondéré&$filter=ProjectId eq guid%27"+idActuel+"%27 and TaskName eq%27"+nomProjActuel+"%27";
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
                  var idp=value.ProjectId;
                  var achPond=0;
                  if (value.AchevéPondéré!=null){
                    achPond=parseFloat(value.AchevéPondéré);
                  }

                  //console.log("achPond= "+value.AchevéPondéré);
                  arrAchPon[arrProg.indexOf(programmeActuel)]=parseFloat(arrAchPon[arrProg.indexOf(programmeActuel)]+achPond);
                  arrProgCount[arrProg.indexOf(programmeActuel)]=parseFloat(arrProgCount[arrProg.indexOf(programmeActuel)]+1);
                });
                console.log("arrProg= "+arrProg);
                console.log("arrAchPon= "+arrAchPon);
                console.log("arrProgCount= "+arrProgCount);
                //tableProjet
                tableaux1 = document.getElementById("tableProjet");
                tr1 = tableaux1.getElementsByTagName("tr");
                if(tr1.length>0){
                  $('#tableProjet tbody').empty();
                }
                for (var j = 0; j < arrProg.length; j++) {
                  if (arrProgCount[j]!=0) {
                    arrAchPonFinal[j]=parseFloat(arrAchPon[j]/arrProgCount[j]).toFixed(0);
                  }
                }
                for (var k = 0; k < arrProg.length; k++) {
                   var trSuiv;
                   trSuiv = $("<tr class='rows'/>");
                   trSuiv.append("<td>" + arrProg[k] +"</td>");
                   trSuiv.append("<td>" + arrAchPonFinal[k] +"</td>");
                   $('#tableProjet').append(trSuiv);
                }
                                
              
            }
        });
    }
    loadTabAchFTasks();
  }

}
