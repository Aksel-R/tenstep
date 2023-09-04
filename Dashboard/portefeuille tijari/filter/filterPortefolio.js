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
  tableaux1 = document.getElementById("tableProjet");
                tr1 = tableaux1.getElementsByTagName("tr");
                if(tr1.length>0){
                  $('#tableProjet tbody').empty();
                }
  tableaux2 = document.getElementById("tableProjet1");
                tr2 = tableaux2.getElementsByTagName("tr");
                if(tr2.length>0){
                  $('#tableProjet tbody').empty();
                  ////console.log('LALALALAL');
                }
  var nomPortefeuille =  getSelectedText("myList1");
  var urlFilterPortefeuille="&$filter=EnterpriseProjectTypeName%20eq%27"+nomPortefeuille+"%27";

  var responseCash=responseCash || [];
  var urlCash=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=CacheIn,CacheOut"+urlFilterPortefeuille+"%20and%20Types_de_Projet%20eq%27Programme%27";
 
  function loadCash(){
       $.ajax({
          url: urlCash,
          method: "GET",
          dataType: "json",
          headers: { Accept: "application/json;odata=verbose" },
          success: function (data) {
              responseCash = responseCash.concat(data.d.results);
              if (data.d.__next) {
                  urlCash = data.d.__next;
                  loadCash();
              }
              var sumCasIn=0;
              var sumCasOut=0;
              $.each(responseCash, function (key, value) {
                var cashIn=0;
                var cashOut=0;
                if (value.CacheIn!=null) {
                  cashIn=value.CacheIn;
                }
                if (value.CacheOut!=null) {
                  cashOut=value.CacheOut;
                }
                sumCasIn=parseFloat(sumCasIn+cashIn).toFixed(0);
                sumCasOut=parseFloat(sumCasOut+cashOut).toFixed(0);
              });
              document.getElementById("cashIn").innerHTML = conToMill(sumCasIn)+' <span class="text-gray">DT</span>';
                document.getElementById("cashOut").innerHTML = conToMill(sumCasOut)+' <span class="text-gray">DT</span>';
                        
          }
      });
  }
  loadCash();


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
                        
          }
      });
  }
  countProj();

  
  var responseKPIs=responseKPIs || [];
  var urlKPIs=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,ProjectCost,ProjectActualCost,ProjectWork,ProjectActualWork,ProjectDuration,ProjectActualDuration,ProjectStartDate,ProjectFinishDate,ProjectActualStartDate,ProjectActualFinishDate"+urlFilterPortefeuille+"%20and%20Types_de_Projet%20eq%27Page_Maitre%27";
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
                var coutReel=parseFloat(value.ProjectActualCost);
                 sommeCoutPlan=parseFloat(sommeCoutPlan+coutPlan).toFixed(0);
                 sommeCoutReel=parseFloat(sommeCoutReel+coutReel).toFixed(0);

                 var travailPlan=parseFloat(value.ProjectWork/8);
                 
                 var travailReel=parseFloat(value.ProjectActualWork/8);
                 sommeTravailPlan=parseFloat(sommeTravailPlan+travailPlan).toFixed(0);
                 sommeTravailReel=parseFloat(sommeTravailReel+travailReel).toFixed(0);

                 projectActStart=value.ProjectActualStartDate;
                 var debActProj=moment(projectActStart);
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
                document.getElementById("dureeglissEch").innerHTML = conToMill(glissEch)+' <span class="text-gray">J</span>';
                document.getElementById("coutplanifprog").innerHTML = conToMill(sommeCoutPlan)+' <span class="text-gray">DT</span>';
                document.getElementById("coutreelprog").innerHTML = conToMill(sommeCoutReel)+' <span class="text-gray">DT</span>';
                document.getElementById("chargeplanifprog").innerHTML = conToMill(sommeTravailPlan)+' <span class="text-gray">J/H</span>';
                document.getElementById("chargereelprog").innerHTML = conToMill(sommeTravailReel)+' <span class="text-gray">J/H</span>';
                var minDebPlan=arrDebutPlan[0] ;
                var minDebReel=arrDebutReel[0] ;
                var maxFinPlan=arrFinPlan[0] ;
                for (var i = 1; i < arrDebutPlan.length; i++) {
                  if (moment(arrDebutPlan[i]).isBefore(minDebPlan)) {
                    minDebPlan=moment(arrDebutPlan[i]);
                  }
                  if (moment(arrDebutReel[i]).isBefore(minDebReel)) {
                    minDebReel=moment(arrDebutReel[i]);
                  }
                  if (moment(maxFinPlan).isBefore(arrFinPlan[i])) {
                    maxFinPlan=moment(arrFinPlan[i]);
                  }          
                }
                console.log("minDebPlan= "+moment(minDebPlan).format("DD/MM/YYYY"));
                console.log("minDebReel= "+moment(minDebReel).format("DD/MM/YYYY"));
                console.log("maxFinPlan= "+moment(maxFinPlan).format("DD/MM/YYYY"));
                var diffPlan=maxFinPlan.diff(minDebPlan, 'days');
                var diffReel=maxFinPlan.diff(minDebReel, 'days');
                var diffBase=0;
                console.log("diffPlan= "+diffPlan);
                console.log("diffReel= "+diffReel);
                document.getElementById("dureeplanifprog").innerHTML = conToMill(diffPlan)+' <span class="text-gray">J</span>';
                document.getElementById("dureereelprog").innerHTML = conToMill(diffReel)+' <span class="text-gray">J</span>';
                for (var j = 0; j < arrId.length; j++) {
                  loadBaselineInfo(arrId[j],diffBase,diffPlan,glissCout,glissDuree,glissTravail,sommeTravailPlan,sommeTravailBase,sommeCoutPlan,sommecoutBase,arrId,arrDebutBase,arrFinBase)
                }
          }
      });
  }
  loadKPIs();

  function loadBaselineInfo(projId,dureeBaseProg,dureePlanProg,glissCout,glissDuree,glissTravail,sommeTravailPlan,sommeTravailBase,sommeCoutPlan,sommecoutBase,arrId,arrDebutBase,arrFinBase){
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
                });


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
                glissDuree=parseFloat(dureePlanProg-dureeBaseProg);
                document.getElementById("dureeglissprog").innerHTML = conToMill(glissDuree)+' <span class="text-gray">J</span>';
            }
        });
    }
    loadBaselineInformations();
  }







  var responseTabAch0=responseTabAch0 || [];
  var urlTabAch0=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme"+urlFilterPortefeuille+"%20and%20Types_de_Projet%20eq%27Page_Maitre%27";
  //////console.log("urlTabAch0= "+urlTabAch0);
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
              var arrAchPond=[];
              var arrSumPoids=[];
              var arrSumRapPoid=[];
              var arrTN=[];
              $.each(responseTabAch0, function (key, value) {
                var progSelctedName1=value.Programme;
                var progn=progSelctedName1.replace("'", "''");
                if (arrProg.indexOf(progn)<0) {
                  arrProg.push(progn);
                  arrAchPond.push(0);
                  arrSumPoids.push(0);
                  arrSumRapPoid.push(0);
                }
              });
              for (var i = 0; i < arrProg.length; i++) {
                
                loadTabAch(arrProg[i],arrProg,arrAchPond,arrSumPoids,arrSumRapPoid,arrTN);
              }
              ////////console.log(arrId.length);
            
          }
      });
  }
  loadTabAch0();

  var responseTabAch=responseTabAch || [];

  function loadTabAch(progn,arrProg,arrAchPond,arrSumPoids,arrSumRapPoid,arrTN){
    var urlTabAch=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Programme,ProjectName&$filter=Programme eq'"+progn+"'%20and%20Types_de_Projet%20eq%27Page_Maitre%27";
       $.ajax({
          url: urlTabAch,
          method: "GET",
          dataType: "json",
          headers: { Accept: "application/json;odata=verbose" },
          success: function (data) {
              responseTabAch = responseTabAch.concat(data.d.results);
              if (data.d.__next) {
                  urlTabAch = data.d.__next;
                  loadTabAch(progn,arrProg,arrAchPond,arrSumPoids,arrSumRapPoid);
              }
              
              
              $.each(responseTabAch, function (key, value) {
                var idPrj=value.ProjectId;

                loadAchFromTasks0(idPrj,progn,arrProg,arrAchPond,arrSumPoids,arrSumRapPoid,arrTN);

              });
            
            
          }
      });
  }

  
  function loadAchFromTasks0(idPrj,progn,arrProg,arrAchPond,arrSumPoids,arrSumRapPoid,arrTN){


    var responseTabAchFTasks=responseTabAchFTasks || [];
    var urlTabAchFTasks=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=TaskName,ProjectId,AchevéPondéré,Poids,TaskOutlineLevel&$filter=ProjectId eq guid%27"+idPrj+"%27";
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
                
                var achevementPond=0;
                var rapportAchPondPoid=0;
                var sumRapportAchPondPoid=0;
                var sumPoid=0;
                var poidProj=0;
                var tN="";

                $.each(responseTabAchFTasks, function (key, value) {
                  var levelT=value.TaskOutlineLevel;
                  var idp=value.ProjectId;
                  var achPond=0;

                  if (levelT==0) {
                    poidProj=value.Poids;
                    tN=value.TaskName;
                    ////console.log("tN= "+tN);

                  }
                  if (levelT==1) {
                    if (value.AchevéPondéré!=null){
                      

                      achPond=parseFloat(value.AchevéPondéré);
                      var poid=parseFloat(value.Poids);
                    sumPoid+=parseFloat(poid);
                    rapportAchPondPoid=parseFloat(poid*achPond);
                    sumRapportAchPondPoid+=parseFloat(rapportAchPondPoid);
                    }
                    
                  }
                  
                  ////////console.log("achPond= "+value.AchevéPondéré);
                  
                });
                  ////////console.log("arrPoidId= "+arrPoidId);
                achevementPond=parseFloat(sumRapportAchPondPoid/sumPoid);
                // arrAchPonId[arrId.indexOf(idActuel)]=parseFloat(achevementPond).toFixed(0);
                // arrPoidId[arrId.indexOf(idActuel)]=poidProj;

                // //////console.log("__________________________________________________________");
                // ////////console.log("NV nomProjActuel= "+nomProjActuel);
                // //////console.log("NV achevementPond= "+achevementPond);
                // //////console.log("NV poidProj= "+poidProj);
                // //////console.log("NV programmeActuel= "+progn);
                // //////console.log("__________________________________________________________");
                if (arrTN.indexOf(tN)<0) {
                  arrTN.push(tN);
                  var trSuiv;
                   trSuiv = $("<tr class='rows'/>");
                   trSuiv.append("<td>" + progn +"</td>");
                   trSuiv.append("<td>" + achevementPond +"</td>");
                   trSuiv.append("<td>" + poidProj +"</td>");
                   trSuiv.append("<td>" + tN +"</td>");
                   $('#tableProjet').append(trSuiv);

                }
                ////console.log("arrTN= "+arrTN);
                
                // arrSumPoids[arrProg.indexOf(progn)]+=parseFloat(poidProj);
                // arrSumRapPoid[arrProg.indexOf(progn)]+=parseFloat(achevementPond*poidProj);
                // //////console.log("_______ _________ __________ _______ _____________ _________ ___");
                // //////console.log("arrProg= "+arrProg);
                // //////console.log("arrSumPoids= "+arrSumPoids);                
                // //////console.log("arrSumRapPoid= "+arrSumRapPoid);
                // //////console.log("_______ _________ __________ _______ _____________ _________ ___");
                // load5rachevement(arrProg,arrSumPoids,arrSumRapPoid,arrAchPond);
            }
        });
         
    }
    loadTabAchFTasks();
  }
  var responsePoidProg=responsePoidProg || [];
    var urlPoidProg=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Programmes_Portefeuilles')/items";
    ////console.log("urlPoidProg= "+urlPoidProg);
    function loadPoidProg(){
      
         $.ajax({
            url: urlPoidProg,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responsePoidProg = responsePoidProg.concat(data.d.results);
                if (data.d.__next) {
                    urlPoidProg = data.d.__next;
                    loadPoidProg();
                }
                
                
                var tabProgName=[];
                var tabProgPoid=[];
                $.each(responsePoidProg, function (key, value) {
                  var progSelctedName1=value.Title;
                  var progn=progSelctedName1.replace("'", "''");
                  var prgPd=value.Poids;
                  tabProgName.push(progn);
                  tabProgPoid.push(prgPd);
                });
                  loadAchFromTable(tabProgName,tabProgPoid);
                }
                
        });
         
    }
    loadPoidProg();


function loadAchFromTable(tabProgName,tabProgPoid) {
  setTimeout((function() {
  var tbl = document.getElementById("tableProjet");
  
  var x = document.getElementById("tableProjet").rows.length;
  ////console.log("x= "+x);
  var sumPoid0=0;
  var sumRapportAchPondPoid0=0;
  var arrProg1=[];
  var sumPoidProg1=[];
  var sumRapportAchPondPoid1=[];
  var arrAchpond1=[];
  var arrN=[];
  for (var i = 1; i < x; i++) {
    var prog=tbl.rows[i].cells[0].innerHTML;
    var ach0=tbl.rows[i].cells[1].innerHTML;
    
    var poids0=tbl.rows[i].cells[2].innerHTML;
    var nomP0=tbl.rows[i].cells[3].innerHTML;
    if (arrN.indexOf(nomP0)<0) {
      arrN.push(nomP0);
      if (arrProg1.indexOf(prog)<0) {
        arrProg1.push(prog);
        sumPoidProg1.push(parseFloat(poids0));
        var rapAchPoids0=parseFloat(ach0*poids0);
        
        sumRapportAchPondPoid1.push(rapAchPoids0);
        
      }else{
        
        var rapAchPoids0=parseFloat(ach0*poids0);
       
        sumRapportAchPondPoid1[arrProg1.indexOf(prog)]+=parseFloat(rapAchPoids0);
        sumPoidProg1[arrProg1.indexOf(prog)]+=parseFloat(poids0);
      }
    }

    
  }

  getAchTab(arrProg1,arrAchpond1,sumRapportAchPondPoid1,sumPoidProg1,tabProgName,tabProgPoid);
 }), 5000); 
}
//setTimeout(loadAchFromTable, 5000);


  
  function getAchTab(arrProg1,arrAchpond1,sumRapportAchPondPoid1,sumPoidProg1,tabProgName,tabProgPoid) {

    for (var j = 0; j < arrProg1.length; j++) {
      arrAchpond1[j]=parseFloat(sumRapportAchPondPoid1[j]/sumPoidProg1[j]).toFixed(0);
    }
    ////console.log("arrAchpond1= "+arrAchpond1);
    ////console.log("arrProg1= "+arrProg1);
    for (var i = 0; i < arrProg1.length; i++) {
      
      var trSuiv1;
                   trSuiv1 = $("<tr class='rows'/>");
                   trSuiv1.append("<td style='width: 50%'>" + arrProg1[i] +"</td>");
                   trSuiv1.append("<td style='width: 50%'>" + arrAchpond1[i] +"%</td>");
                  
                   $('#tableProjet1').append(trSuiv1);
    }
    var sumRapAcPdGen=0;
    var sumPdGen=0;
    //console.log("tabProgPoid= "+tabProgPoid);
    //console.log("tabProgName= "+tabProgName);
    for (var i = 0; i < arrProg1.length; i++) {
      var nnPrg=arrProg1[i];
      //console.log("nnPrg= "+nnPrg);

      var poiddd=0;
      poiddd=tabProgPoid[tabProgName.indexOf(arrProg1[i])];
      //console.log("poiddd= "+poiddd);
      // if (nnPrg=="Programme BFI") {
      //   poiddd=9 ;
      // }
      // if (nnPrg=="Programme Digital") {
      //   poiddd=14 ;
      // }
      // if (nnPrg=="Programme Capital Humain") {
      //   poiddd=20 ;
      // }
      // if (nnPrg=="Programme NMR") {
      //   poiddd=14 ;
      // }
      // if (nnPrg=="Programme Retail") {
      //   poiddd=9 ;
      // }
      // if (nnPrg=="Programme TPME") {
      //   poiddd=9 ;
      // }
      // if (nnPrg=="Programme Re-Engineering") {
      //   poiddd=12 ;
      // }
      // if (nnPrg=="Programme Risques") {
      //   poiddd=9 ;
      // }
      // if (nnPrg=="Programme Capacité d''exécution") {
      //   poiddd=11 ;
      // }
      sumPdGen+=parseFloat(poiddd);
      rappppp=parseFloat(poiddd*arrAchpond1[i])
      sumRapAcPdGen+=parseFloat(rappppp);
    }
    achPPPGen=parseFloat(sumRapAcPdGen/sumPdGen);
    document.getElementById("pourcentageAchProg").innerHTML=parseFloat(achPPPGen).toFixed(0)+' <span class="text-gray">%</span>';

         document.getElementById("morris-area-chart-prog").innerHTML='<canvas id="bar-chart" width="100%" height="50vh"></canvas>';
            var ctx0 = document.getElementById("bar-chart").getContext('2d');
                    if(window.ctx0 != undefined)
                    {
                      window.ctx0.destroy();
                    }
                         window.ctx0 = new Chart(ctx0, {
                        type: 'horizontalBar',
                        data: {
                          labels: arrProg1,
                          datasets: [{
                            backgroundColor: ["#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c","#d9534f", "#f0ad4e", "#337ab7", "#5cb85c"],
                            label: 'Programme',
                            data: arrAchpond1
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

}
