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
                      tableaux1 = document.getElementById("tableProjetLivAdate");
                      tr1 = tableaux1.getElementsByTagName("tr");
                      if(tr1.length>0){
                        $('#tableProjetLivAdate tbody').empty();
                      }

                      tableaux2 = document.getElementById("tableProjetDuCloture");
                      tr2 = tableaux2.getElementsByTagName("tr");
                      if(tr2.length>0){
                        $('#tableProjetDuCloture tbody').empty();                  
                      }

                      tableaux3 = document.getElementById("tableProjetRetardCloture");
                      tr3 = tableaux3.getElementsByTagName("tr");
                      if(tr3.length>0){
                        $('#tableProjetRetardCloture tbody').empty();                  
                      }
  var nomPortefeuille =  getSelectedText("myList1");
  console.log("nomPortefeuille= "+nomPortefeuille);
  var urlFilterPortefeuille="&$filter=EnterpriseProjectTypeName%20eq%27"+nomPortefeuille+"%27";
    var responseBudgetConsomm=responseBudgetConsomm || [];
    var typePrjt=getSelectedText("myList3");
      var Tproj=document.getElementById("myList3").value;
      if (Tproj!="") {
        urlFilterPortefeuille+=" and Sous_Portefeuilles eq%27"+typePrjt+"%27";
      }
  var urlBudgetConsomm=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectActualCost"+urlFilterPortefeuille+"%20and%20Types_de_Projet%20eq%27Programme%27";
 
  function loadBudgetConsomm(){
       $.ajax({
          url: urlBudgetConsomm,
          method: "GET",
          dataType: "json",
          headers: { Accept: "application/json;odata=verbose" },
          success: function (data) {
              responseBudgetConsomm = responseBudgetConsomm.concat(data.d.results);
              if (data.d.__next) {
                  urlBudgetConsomm = data.d.__next;
                  loadBudgetConsomm();
              }
              var sumbudgetP=0;
              var sumbudgetConsomm=0;
              $.each(responseBudgetConsomm, function (key, value) {
                var coutBudg=value.ProjectCost;
                var coutConsom=value.ProjectActualCost;
                sumbudgetP=parseFloat(parseFloat(sumbudgetP)+parseFloat(coutBudg));
                sumbudgetConsomm=parseFloat(parseFloat(sumbudgetConsomm)+parseFloat(coutConsom));
              });
              //console.log('sumbudgetP= '+sumbudgetP);
              //console.log('sumbudgetConsomm= '+sumbudgetConsomm);
              var pourcentageConso=0;
              if (sumbudgetP!=0) {
                
                pourcentageConso=parseFloat((parseFloat(sumbudgetConsomm)/parseFloat(sumbudgetP))*100).toFixed(0);
              }
              //document.getElementById("pourcentageConsBudgAnnuel").innerHTML = pourcentageConso+' <span class="text-gray">%</span>';
              document.getElementById("pourcentageConsBudgAnnuel").innerHTML = '0 <span class="text-gray">%</span>';
                        
          }
      });
  }
  loadBudgetConsomm();

    var responseDelai=responseDelai || [];
  var urlDelai=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,ProjectStartVariance,Statutduprojet,ProjectStartDate,ProjectFinishDate,ProjectPercentCompleted"+urlFilterPortefeuille+"%20and%20Types_de_Projet%20eq%27Page_Maitre%27";
  //console.log("urlDelai= "+urlDelai);
  function loadDelai(){
       $.ajax({
          url: urlDelai,
          method: "GET",
          dataType: "json",
          headers: { Accept: "application/json;odata=verbose" },
          success: function (data) {
              responseDelai = responseDelai.concat(data.d.results);
              var c=0;
              if (data.d.__next) {
                c++;
                  urlDelai = data.d.__next;
                  //loadDelai();
                  tableaux1 = document.getElementById("tableProjetLivAdate");
                  tr1 = tableaux1.getElementsByTagName("tr");
                  if(tr1.length>0){
                    $('#tableProjetLivAdate tbody').empty();
                  }

                  tableaux2 = document.getElementById("tableProjetDuCloture");
                  tr2 = tableaux2.getElementsByTagName("tr");
                  if(tr2.length>0){
                    $('#tableProjetDuCloture tbody').empty();                  
                  }
              }
              
              var nbPrjLivAdate=0;
              var nbPrjDuEtreCloture=0;
              var nbPrjRetardCloture=0;
              var arrId=[];
              var arrProjNam=[];
              var arrAch=[];
              var arrStart=[];
              var arrFin=[];
              var arrSat=[];
              var arrBaseStart=[];
              var arrBaseFinish=[];
              var arrCountClotRetDeb=[];
              var arrCountClotAvDeb=[];
              var arrVariationDeb=[];
              
              var nbTotPrj=0;
              $.each(responseDelai, function (key, value) {
                nbTotPrj++;
                moment.locale('fr');
                var id=value.ProjectId;
                var nm=value.ProjectName;
                var stat=value.Statutduprojet;
                var ach=value.ProjectPercentCompleted;
                //console.log("stat= "+stat);
                var deb=value.ProjectStartDate;
                var debut=moment(deb);
                var fin=value.ProjectFinishDate;
                var finP=moment(fin);
                var varDebut=parseFloat(value.ProjectStartVariance).toFixed(0);
                if (arrId.indexOf(id)<0) {
                  arrId.push(id);
                  arrProjNam.push(nm);
                  arrAch.push(ach);
                  arrStart.push(debut);
                  arrFin.push(finP);
                  arrSat.push(stat);
                  arrBaseStart.push("");
                  arrBaseFinish.push("");
                  arrVariationDeb.push(varDebut);
                }
                
              });
              
              for (var i = 0; i < arrId.length; i++) {
                loadBaselineDel(arrId[i],arrId,arrProjNam,arrAch,arrStart,arrFin,arrSat,arrBaseStart,arrBaseFinish,nbTotPrj,arrCountClotRetDeb,arrCountClotAvDeb,arrVariationDeb);
              }
              document.getElementById("nbProj").innerHTML = arrId.length+' <span class="text-gray">Projets</span>';
              
                        
          }
      });
  }
  loadDelai();

  function loadBaselineDel(projId,arrId,arrProjNam,arrAch,arrStart,arrFin,arrSat,arrBaseStart,arrBaseFinish,nbTotPrj,arrCountClotRetDeb,arrCountClotAvDeb,arrVariationDeb){
   
    var urlBaselineDelais=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$filter=ProjectId eq guid%27"+projId+"%27";
    //console.log("urlBaselineDelais= "+urlBaselineDelais);
    function loadBaselineDelais(){
         $.ajax({
            url: urlBaselineDelais,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                var dataResults = data.d.results;
                
          
                
                //finBaseProg debBaseProg
                $.each(dataResults, function (key, value) {
                  moment.locale('fr');
                  var baseStart=value.ProjectBaselineStartDate;
                  var baseStartDate=moment(baseStart);
                  arrBaseStart[arrId.indexOf(projId)]=baseStartDate;
                  var beseFinish=value.ProjectBaselineFinishDate;
                  // console.log("beseFinish= "+beseFinish);
                  var baseFinishtDate=moment(beseFinish);
                  arrBaseFinish[arrId.indexOf(projId)]=baseFinishtDate;

                });
                var sumCapExec=0;
                var auj=moment();
                if ((arrSat[arrId.indexOf(projId)]=="Clôturé")&&(arrAch[arrId.indexOf(projId)]==100)&&(moment(arrBaseFinish[arrId.indexOf(projId)]).isBefore(moment(auj)))) {
                  var tr1;
                   tr1 = $("<tr class='rows'/>");
                   tr1.append("<td style='width: 40%'>" + arrProjNam[arrId.indexOf(projId)] +"</td>");
                   tr1.append("<td style='text-align:center;width: 20%; text-align: left;'><a href='https://attijaribanktn.sharepoint.com/sites/pwa/project%20detail%20pages/schedule.aspx?projuid="+projId+"&ret=0' id='redirectLink' target='_blank'><img src='/sites/pwa/_catalogs/masterpage/Portefeuille_SDSI/img/Link.png' class='img-rounded' alt='Cinque Terre' width='25px' height='25px'></a></td>");
                   tr1.append("<td style='width: 40%'>" + arrAch[arrId.indexOf(projId)] +"</td>");
                   $('#tableProjetLivAdate').append(tr1);
                 }
                 
                 if (moment(arrBaseFinish[arrId.indexOf(projId)]).isBefore(moment(auj))) {
                  //console.log("Liste de projets qui auront dû étre clôturés "+arrProjNam[arrId.indexOf(projId)]);
                  var tr2;
                   tr2 = $("<tr class='rows'/>");
                   tr2.append("<td style='width: 40%'>" + arrProjNam[arrId.indexOf(projId)] +"</td>");
                   tr2.append("<td style='text-align:center;width: 20%; text-align: left;'><a href='https://attijaribanktn.sharepoint.com/sites/pwa/project%20detail%20pages/schedule.aspx?projuid="+projId+"&ret=0' id='redirectLink' target='_blank'><img src='/sites/pwa/_catalogs/masterpage/Portefeuille_SDSI/img/Link.png' class='img-rounded' alt='Cinque Terre' width='25px' height='25px'></a></td>");
                   tr2.append("<td style='width: 40%'>" + arrAch[arrId.indexOf(projId)] +"</td>");
                   $('#tableProjetDuCloture').append(tr2);
                 }
                 if ((arrSat[arrId.indexOf(projId)]!="Clôturé")&&(moment(arrBaseFinish[arrId.indexOf(projId)]).isBefore(moment(auj)))&&(arrAch[arrId.indexOf(projId)]<100)){
                   var tr3;
                   tr3 = $("<tr class='rows'/>");
                   tr3.append("<td style='width: 40%'>" + arrProjNam[arrId.indexOf(projId)] +"</td>");
                   tr3.append("<td style='text-align:center;width: 20%; text-align: left;'><a href='https://attijaribanktn.sharepoint.com/sites/pwa/project%20detail%20pages/schedule.aspx?projuid="+projId+"&ret=0' id='redirectLink' target='_blank'><img src='/sites/pwa/_catalogs/masterpage/Portefeuille_SDSI/img/Link.png' class='img-rounded' alt='Cinque Terre' width='25px' height='25px'></a></td>");
                   tr3.append("<td style='width: 40%'>" + arrAch[arrId.indexOf(projId)] +"</td>");
                   $('#tableProjetRetardCloture').append(tr3);
                 }
                 //arrCountClotRetDeb arrCountClotAvDeb

                 if ((arrSat[arrId.indexOf(projId)]=="Clôturé")&&(arrVariationDeb[arrId.indexOf(projId)]>0)&&(arrAch[arrId.indexOf(projId)]==100)&&(moment(arrBaseFinish[arrId.indexOf(projId)]).isBefore(moment(auj)))) {
                  arrCountClotRetDeb.push(projId);
                 }

                 if ((arrSat[arrId.indexOf(projId)]=="Clôturé")&&(arrVariationDeb[arrId.indexOf(projId)]<0)&&(arrAch[arrId.indexOf(projId)]==100)&&(moment(arrBaseFinish[arrId.indexOf(projId)]).isBefore(moment(auj)))) {
                  arrCountClotAvDeb.push(projId);
                 }

                //document.getElementById("pourCapExecGlob").innerHTML = conToMill(parseFloat(sumCapExec/arrIdProj.length).toFixed(0))+' <span class="text-gray">%</span>';
                tableaux1 = document.getElementById("tableProjetLivAdate");
                trez1 = tableaux1.getElementsByTagName("tr");
                
                document.getElementById("nbProjlivDate").innerHTML = trez1.length-1+' <span class="text-gray">Projets</span>';

                tableaux2 = document.getElementById("tableProjetDuCloture");
                trez2 = tableaux2.getElementsByTagName("tr");
                console.log("trez2.length= "+trez2.length);
                document.getElementById("nbProjCloturer").innerHTML = trez2.length-1+' <span class="text-gray">Projets</span>';

                tableaux3 = document.getElementById("tableProjetRetardCloture");
                trez3 = tableaux3.getElementsByTagName("tr");
                console.log("trez3.length= "+trez3.length);
                document.getElementById("nbProjRetard").innerHTML = trez3.length-1 +' <span class="text-gray">Projets</span>';
                
                var rendementCloture=0; 
                if ((trez2.length-1)!=0) {
                  rendementCloture=parseFloat(parseFloat((trez1.length-1)/(trez2.length-1))*100).toFixed(0)
                }
                document.getElementById("RendeClotProj").innerHTML = rendementCloture+' <span class="text-gray">%</span>';
                var projCloturePre=parseFloat(parseFloat((trez1.length-1)/nbTotPrj)*100).toFixed(0);
                document.getElementById("projClot").innerHTML = projCloturePre+' <span class="text-gray">%</span>'; 
                
                document.getElementById("projClotRetardDeb").innerHTML = parseFloat(parseFloat(arrCountClotRetDeb.length/nbTotPrj)*100).toFixed(0)+' <span class="text-gray">%</span>';
                document.getElementById("projClotAvanceDeb").innerHTML = parseFloat(parseFloat(arrCountClotAvDeb.length/nbTotPrj)*100).toFixed(0)+' <span class="text-gray">%</span>';     
            }

        });
    }
    loadBaselineDelais();
    
  }

    var responseCapEx=responseCapEx || [];
  var urlCapEx=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectWork,ProjectRemainingWork,ProjectActualWork,ChargeEtudeprévue,ChargeEtudeconsommée,ChargeInfraetProdPrévue,ChargeInfraProdConsommée,ChargeSécuritéPrévue,ChargeSécuritéConsommée,ChargeDataPrévue,ChargeDataConsommée,ChargeAMOAPrévue,ChargeAMOAConsommée,ChargeDigitalCenterPrévue,Commentairechefdeprojet"+urlFilterPortefeuille+"%20and%20Types_de_Projet%20eq%27Page_Maitre%27";

  function loadCapEx(){
       $.ajax({
          url: urlCapEx,
          method: "GET",
          dataType: "json",
          headers: { Accept: "application/json;odata=verbose" },
          success: function (data) {
              responseCapEx = responseCapEx.concat(data.d.results);
              if (data.d.__next) {
                  urlCapEx = data.d.__next;
                  loadCapEx();
              }
              var sumCapExec=0;
              var sumCapExecInfraProd=0;
              var sumCapExecEtude=0;
              var sumCapExecSecurite=0;
              var sumCapExecExecData=0;
              var sumCapExecAMOA=0;
              var countPrj=0;
              var arrIdProj=[];
              var arrChargeBase=[];
              var arrChargeConso=[];
              var arrSumCapEx=[];
              $.each(responseCapEx, function (key, value) {
                var idP=value.ProjectId;
                arrIdProj.push(idP);
                arrChargeBase.push(0);
                var chargeConso=0;
                if (value.ProjectActualWork!=null) {
                  chargeConso=value.ProjectActualWork;
                }
                arrChargeConso.push(chargeConso);
                arrSumCapEx.push(0);
                countPrj++;
                

                var chargeConsoInfraProd=0;
              if (value.ChargeInfraProdConsommée!=null) {
                chargeConsoInfraProd=value.ChargeInfraProdConsommée;
              }
                var chargePrevInfraProd=0;
              if (value.ChargeInfraetProdPrévue!=null) {
                chargePrevInfraProd=value.ChargeInfraetProdPrévue;
              }
              var capExecInfraProd=0;
              if(chargePrevInfraProd!=0){
                capExecInfraProd=parseFloat(parseFloat((chargeConsoInfraProd)/parseFloat(chargePrevInfraProd))*100);
              }

                var chargeConsoEtude=0;
              if (value.ChargeEtudeconsommée!=null) {
                chargeConsoEtude=value.ChargeEtudeconsommée;
              }
                var chargePrevEtude=0;
              if (value.ChargeEtudeprévue!=null) {
                chargePrevEtude=value.ChargeEtudeprévue;
              }
              var capExecEtude=0;
              if(chargePrevEtude!=0){
                capExecEtude=parseFloat(parseFloat((chargeConsoEtude)/parseFloat(chargePrevEtude))*100);
              }

                var chargeConsoSecurite=0;
              if (value.ChargeSécuritéConsommée!=null) {
                chargeConsoSecurite=value.ChargeSécuritéConsommée;
              }
                var chargePrevSecurite=0;
              if (value.ChargeSécuritéPrévue!=null) {
                chargePrevSecurite=value.ChargeSécuritéPrévue;
              }
              var capExecSecurite=0;
              if(chargePrevSecurite!=0){
                capExecSecurite=parseFloat(parseFloat((chargeConsoSecurite)/parseFloat(chargePrevSecurite))*100);
              }

                var chargeConsoExecData=0;
              if (value.ChargeDataConsommée!=null) {
                chargeConsoExecData=value.ChargeDataConsommée;
              }
                var chargePrevExecData=0;
                if (value.ChargeDataPrévue!=null) {
                  chargePrevExecData=value.ChargeDataPrévue;
                } 
                var capExecExecData=0;
                if(chargePrevExecData!=0){
                  capExecExecData=parseFloat(parseFloat((chargeConsoExecData)/parseFloat(chargePrevExecData))*100);
                }

                var chargeConsoAMOA=0;
              if (value.ChargeAMOAConsommée!=null) {
                chargeConsoAMOA=value.ChargeAMOAConsommée;
              }
                var chargePrevAMOA=0;
                if (value.ChargeAMOAPrévue!=null) {
                  chargePrevAMOA=value.ChargeAMOAPrévue;
                } 
                var capExecAMOA=0;
                if(chargePrevAMOA!=0){
                  capExecAMOA=parseFloat(parseFloat((chargeConsoAMOA)/parseFloat(chargePrevAMOA))*100);
                }

                
                sumCapExecInfraProd=parseFloat(parseFloat(sumCapExecInfraProd)+parseFloat(capExecInfraProd));
                sumCapExecEtude=parseFloat(parseFloat(sumCapExecEtude)+parseFloat(capExecEtude));
                sumCapExecSecurite=parseFloat(parseFloat(sumCapExecSecurite)+parseFloat(capExecSecurite));
                sumCapExecExecData=parseFloat(parseFloat(sumCapExecExecData)+parseFloat(capExecExecData));
                sumCapExecAMOA=parseFloat(parseFloat(sumCapExecAMOA)+parseFloat(capExecAMOA));

                
              });

                document.getElementById("pourCapExecInfraProd").innerHTML = conToMill(parseFloat(sumCapExecInfraProd/countPrj).toFixed(0))+' <span class="text-gray">%</span>';
                document.getElementById("pourCapExecEtu").innerHTML = conToMill(parseFloat(sumCapExecEtude/countPrj).toFixed(0))+' <span class="text-gray">%</span>';
                document.getElementById("pourCapExecSec").innerHTML = conToMill(parseFloat(sumCapExecSecurite/countPrj).toFixed(0))+' <span class="text-gray">%</span>';
                document.getElementById("pourCapExecData").innerHTML = conToMill(parseFloat(sumCapExecExecData/countPrj).toFixed(0))+' <span class="text-gray">%</span>';
                document.getElementById("pourCapExecAMOA").innerHTML = conToMill(parseFloat(sumCapExecAMOA/countPrj).toFixed(0))+' <span class="text-gray">%</span>';
              

              for (var i = 0; i < arrIdProj.length; i++) {
                loadBaselineCap(arrIdProj[i],arrIdProj,arrChargeBase,arrChargeConso,arrSumCapEx);
              }

              
                        
          }
      });
  }
  loadCapEx();

  function loadBaselineCap(projId,arrIdProj,arrChargeBase,arrChargeConso,arrSumCapEx){
    
    var urlBaselineInfo=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$filter=ProjectId eq guid%27"+projId+"%27";
    //console.log("urlBaselineInfo= "+urlBaselineInfo);
    function loadBaselineCapEx(){
         $.ajax({
            url: urlBaselineInfo,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                var dataResults = data.d.results;
                
          
                
                //finBaseProg debBaseProg
                $.each(dataResults, function (key, value) {
                  var id=value.ProjectId;
                    var chargePrev=0;
                    if (value.ProjectBaselineWork!=null) {
                      chargePrev=value.ProjectBaselineWork;
                    } 
                    var chargeConso=arrChargeConso[arrIdProj.indexOf(id)];

                    var capExec=0;
                    if(chargePrev!=0){
                      capExec=parseFloat(parseFloat((chargeConso)/parseFloat(chargePrev))*100);
                    }
                    arrSumCapEx[arrIdProj.indexOf(id)]=parseFloat(capExec);
                });
                var sumCapExec=0;
                for (var i = 0; i < arrIdProj.length; i++) {
                  sumCapExec=parseFloat(parseFloat(sumCapExec)+parseFloat(arrSumCapEx[i]));
                }
                document.getElementById("pourCapExecGlob").innerHTML = conToMill(parseFloat(sumCapExec/arrIdProj.length).toFixed(0))+' <span class="text-gray">%</span>';

            }
        });
    }
    loadBaselineCapEx();
  }

    var responsePercentAvanceDeb=responsePercentAvanceDeb || [];
  var urlPercentAvanceDeb=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectStartVariance"+urlFilterPortefeuille+"%20and%20Types_de_Projet%20eq%27Page_Maitre%27";
 
  function loadPercentAvanceDeb(){
       $.ajax({
          url: urlPercentAvanceDeb,
          method: "GET",
          dataType: "json",
          headers: { Accept: "application/json;odata=verbose" },
          success: function (data) {
              responsePercentAvanceDeb = responsePercentAvanceDeb.concat(data.d.results);
              if (data.d.__next) {
                  urlPercentAvanceDeb = data.d.__next;
                  loadPercentAvanceDeb();
              }
              
              var countP=0;
              var countPrjEnAv=0;
              $.each(responsePercentAvanceDeb, function (key, value) {
                countP++;
                var varProj=parseFloat(value.ProjectStartVariance).toFixed(0);
                if (varProj<0) {
                  countPrjEnAv++;
                }
              });
              document.getElementById("pourProjAvancDeb").innerHTML = parseFloat(parseFloat(countPrjEnAv/countP)*100).toFixed(0)+' <span class="text-gray">%</span>';

              //document.getElementById("pourcentageConsBudgAnnuel").innerHTML = pourcentageConso+' <span class="text-gray">%</span>';
              
                        
          }
      });
  }
  loadPercentAvanceDeb();

    var responsePercentProb=responsePercentProb || [];
  var urlPercentProb=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId"+urlFilterPortefeuille+"%20and%20Types_de_Projet%20eq%27Page_Maitre%27";
 
  function loadPercentProb(){
       $.ajax({
          url: urlPercentProb,
          method: "GET",
          dataType: "json",
          headers: { Accept: "application/json;odata=verbose" },
          success: function (data) {
              responsePercentProb = responsePercentProb.concat(data.d.results);
              if (data.d.__next) {
                  urlPercentProb = data.d.__next;
                  loadPercentProb();
              }
              var arrIss=[];
              var arrIssResolue=[];
              $.each(responsePercentProb, function (key, value) {
                var id=value.ProjectId;
                loadNbProbRes(id,arrIss,arrIssResolue);
              });
              

              //document.getElementById("pourcentageConsBudgAnnuel").innerHTML = pourcentageConso+' <span class="text-gray">%</span>';
              
                        
          }
      });
  }
  loadPercentProb();

  function loadNbProbRes(id,arrIss,arrIssResolue) {
   var responsePercentIssue=responsePercentIssue || [];
  var urlPercentIssue=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Projects(guid'"+id+"')/Issues";
 
  function loadPercentIssue(){
       $.ajax({
          url: urlPercentIssue,
          method: "GET",
          dataType: "json",
          headers: { Accept: "application/json;odata=verbose" },
          success: function (data) {
              responsePercentIssue = responsePercentIssue.concat(data.d.results);
              if (data.d.__next) {
                  urlPercentIssue = data.d.__next;
                  loadPercentIssue();
              }
              
              $.each(responsePercentIssue, function (key, value) {
                arrIss.push(1);
                var stat=value.Status;
                if (stat=="(3) Fermé") {
                  arrIssResolue.push(1);
                }
              });
              var percentIssueRes=0;
              if (arrIss.length!=0) {
                percentIssueRes=parseFloat(parseFloat(arrIssResolue.length/arrIss.length)*100).toFixed(0)
              }

              document.getElementById("pourProbRes").innerHTML = percentIssueRes +' <span class="text-gray">%</span>';
              
                        
          }
      });
  }
  loadPercentIssue();
}
}
