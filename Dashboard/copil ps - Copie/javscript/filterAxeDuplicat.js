

function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function mainfilter(){
  // document.getElementById("projTitle").innerHTML='<div id="overlay">    <div class="spinner"></div>    <br/>    Chargement...</div>';
  // jQuery(document).ready(function() {
  //       jQuery('#overlay').fadeOut(5000);
  //   });
 // document.getElementById("delaitraitement").innerHTML ="<center><h3>Pas des risques associés</h3></center>";
  document.getElementById("containergravite").innerHTML="<center><h3>Pas des risques associés</h3></center>";
 // document.getElementById("bar2").innerHTML="<center><h3>Pas des risques associés</h3></center>";
  document.getElementById("bar1").innerHTML="<center><h3>Pas des risques associés</h3></center>";
  var urlFilterSelected= "";
  var countSelected=0;
  
  var axeStrategique=document.getElementById("myList1").value;
  if (axeStrategique!="") {       
      urlFilterSelected+="%20and%20AxeStrategique%20eq%27"+axeStrategique+"%27";  
      countSelected++;  
  }
  var chantierSel=document.getElementById("myList2").value;
  if (chantierSel!="") {
      urlFilterSelected+="%20and%20Chantier%20eq%27"+chantierSel+"%27";  
      countSelected++;  
  }
  var programmeSel=document.getElementById("myList8").value;
  if (programmeSel!="") {
      urlFilterSelected+="%20and%20Programme%20eq%27"+programmeSel+"%27";  
      countSelected++; 
  }
  var projetSel=document.getElementById("myList3").value;
  if (projetSel!="") {
      urlFilterSelected+="%20and%20ProjectName%20eq%27"+projetSel+"%27";  
      countSelected++;  
  }
  var sponsorSel=document.getElementById("myList4").value;
  if (sponsorSel!="") {
      urlFilterSelected+="%20and%20Sponsor%20eq%27"+sponsorSel+"%27"; 
      countSelected++;   
  }
  var cpSel=document.getElementById("myList5").value;
  if (cpSel!="") {
      urlFilterSelected+="%20and%20ProjectOwnerName%20eq%27"+cpSel+"%27";  
      countSelected++;  
  }
  var methodSel=document.getElementById("myList6").value;
  if (methodSel!="") {
      urlFilterSelected+="%20and%20Typedegestion%20eq%27"+methodSel+"%27";  
      countSelected++;  
  }
  var structureSel=document.getElementById("myList7").value;
  if (structureSel!=""){
    countSelected++; 
  }
  ////console.log("urlFilterSelected= "+urlFilterSelected);
//console.log("structureSel= "+structureSel);

function showTitleFilter() {
  if (countSelected==0) {
    document.getElementById("projTitle").innerHTML = '<i class="fa fa-dashboard"></i>' + ' Affichage Général';
  }else{
    document.getElementById("projTitle").innerHTML = '<i class="fa fa-dashboard"></i> ';
    if (axeStrategique!=""){
      document.getElementById("projTitle").innerHTML +=axeStrategique+"; ";
    }
    if (chantierSel!=""){
      document.getElementById("projTitle").innerHTML +=chantierSel+"; ";
    }
    if (projetSel!=""){
      document.getElementById("projTitle").innerHTML +=projetSel+"; ";
    }
    if (sponsorSel!=""){
      document.getElementById("projTitle").innerHTML +=sponsorSel+"; ";
    }
    if (cpSel!=""){
      document.getElementById("projTitle").innerHTML +=cpSel+"; ";
    }
    if (methodSel!=""){
      document.getElementById("projTitle").innerHTML +=methodSel+"; ";
    }
    //console.log("structureSel= "+structureSel);
    if (structureSel!=""){
      document.getElementById("projTitle").innerHTML +=structureSel+"; ";
    } 
  }
            
        }
        showTitleFilter();


      // document.getElementById("Dchart").innerHTML='<center><h3>Pas des risques associés</h3></center>';
      // document.getElementById("bar1").innerHTML='<center><h3>Pas des risques associés</h3></center>';
      // document.getElementById("bar2").innerHTML='<center><h3>Pas des risques associés</h3></center>';  


      //*********************************************Statut Global************************************************************
      
        var responseNbChantierFilter=responseNbChantierFilter || [];
        var urlNbChantierFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Chantier,Structuresimpliquees&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected;
        function loadNbChantierFilter(){
          $.ajax({
                        url: urlNbChantierFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseNbChantierFilter = responseNbChantierFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlNbChantierFilter = data.d.__next;
                                loadNbChantierFilter();
                            }
                            
                            
                            var tabChan=[];
                            $.each(responseNbChantierFilter, function (key, value) {
                                if (structureSel!=""){
                                    var structurePr=value.Structuresimpliquees;
                                  if (structurePr==null) {
                                    structurePr="";
                                  }
                                  var words = structurePr.split(', ');
                                    sortTab(words);
                                    var myNewString="";
                                    for(var i=0; i < words.length; i++){
                                      if(i==0){
                                        myNewString+=words[i];
                                      }else{
                                        myNewString+=", "+words[i];
                                      }

                                    }
                                      if (structureSel==myNewString){
                                        if (value.Chantier!=null) {
                                            var chanName=value.Chantier;
                                            if (tabChan.indexOf(chanName)<0) {
                                              tabChan.push(chanName);
                                            }
                                        }
                                      }
                                }else{
                                    if (value.Chantier!=null) {
                                        var chanName=value.Chantier;
                                        if (tabChan.indexOf(chanName)<0) {
                                          tabChan.push(chanName);
                                        }
                                    }
                                }
                               
                               
                            });
                            document.getElementById("countChantiers").innerHTML=conToMill(tabChan.length);                            
                        }
                    });
        }
        loadNbChantierFilter();

var urlgetPonderationProgFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getByTitle('PonderationNote')/items";
var responsegetPonderationProgFilter = responsegetPonderationProgFilter ||[];

function getPonderationProgFilter()
{
  $.ajax({url:  urlgetPonderationProgFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responsegetPonderationProgFilter = responsegetPonderationProgFilter.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlgetPonderationProgFilter = data.d.__next;
                                            getPonderationProgFilter();
                                             } 
                  var nomResource="";
                  var uniq="";
                  var TabRess = [];

                  var arrayMatPlan=[];
                  var sumMatPlan=0;
                  var avgPlan=0;
                  
            $.each(responsegetPonderationProgFilter, function(key, value) 
            { 
                  var pondPlanification=value.Echeancier ;
                  var pondBudget=value.predecesseurs ;
                  var pondRessources=value.Ressources ;
                  var pondPlanningdereference=value.PlanningReference ;
                  var pondSuivi=value.Suivi ;
                  var pondFicheprojet=value.ContenuFicheProjet ;
                  var pondDocumentsdeManagementdeprojet=value.DocumentManagementProjet ;
                  var pondDocumentsdeprojet=value.DocumentProjet ;
                  var pondObIndKPI=value.ObjectifsEtIndicateursKPI ;
                  var pondLivrablesEtJalons=value.LivrablesEtJalons ;
                  var pondRisques=value.Risque ;
                  var pondProblemes=value.Probleme ;
                  var pondConformite=value.ConformiteRealit_x00e9_ ;
                  var pondModeGestionProjet=value.ModeGestionProjet;
                  // LoadMaturPlanProg(pondPlanification,pondBudget,pondRessources,pondPlanningdereference,pondSuivi,pondFicheprojet,pondDocumentsdeManagementdeprojet,pondDocumentsdeprojet,pondObIndKPI,pondLivrablesEtJalons,pondRisques,pondProblemes,pondConformite,pondModeGestionProjet);
                  loadTabProjFilter(pondPlanification,pondBudget,pondRessources,pondPlanningdereference,pondSuivi,pondFicheprojet,pondDocumentsdeManagementdeprojet,pondDocumentsdeprojet,pondObIndKPI,pondLivrablesEtJalons,pondRisques,pondProblemes,pondConformite,pondModeGestionProjet);
            });
}   
});
}
getPonderationProgFilter();

tableaux = document.getElementById("tableProjet");
     tr1 = tableaux.getElementsByTagName("tr");
     if(tr1.length>0){        
          $('#tableProjet tbody').empty();
     }
var responseTabProjFilter=responseTabProjFilter || [];
        var urlTabProjFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectId,ProjectName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,NoteBudget,NoteRessources,NotePlanningdereference,NoteSuividuplanning,NoteContenuFichedeprojet,NoteDocumentsdeManagementdeprojet,NoteDocumentsdeprojet,NoteObjectifsetindicateursKPI,NoteLivrablesetjalons,NoteRisques,NoteProblemes,NoteConformitéàlaréalité,NoteModedegestionduprojet&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected+"&$orderby=ProjectName,Chantier";
        function loadTabProjFilter(pondPlanification,pondBudget,pondRessources,pondPlanningdereference,pondSuivi,pondFicheprojet,pondDocumentsdeManagementdeprojet,pondDocumentsdeprojet,pondObIndKPI,pondLivrablesEtJalons,pondRisques,pondProblemes,pondConformite,pondModeGestionProjet){
          $.ajax({
                        url: urlTabProjFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseTabProjFilter = responseTabProjFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlTabProjFilter = data.d.__next;
                                loadTabProjFilter(pondPlanification,pondBudget,pondRessources,pondPlanningdereference,pondSuivi,pondFicheprojet,pondDocumentsdeManagementdeprojet,pondDocumentsdeprojet,pondObIndKPI,pondLivrablesEtJalons,pondRisques,pondProblemes,pondConformite,pondModeGestionProjet);
                            }
                            
                            
                            var countProjet=0;
                            var sumAchevement=0;
                            var idArr=[];
                            var debArr=[];
                              var finArr=[];
                              var refFinArr=[];
                              var glissArr=[];
                            //-------------------
                            
                            //--------------------------------------------
                            $.each(responseTabProjFilter, function (key, value) {
                              moment.locale('fr');
                              if (structureSel!=""){

                                    var structurePr=value.Structuresimpliquees;
                                  if (structurePr==null) {
                                    structurePr="";
                                  }
                                  var words = structurePr.split(', ');
                                    sortTab(words);
                                    var myNewString="";
                                    for(var i=0; i < words.length; i++){
                                      if(i==0){
                                        myNewString+=words[i];
                                      }else{
                                        myNewString+=", "+words[i];
                                      }

                                    }
                                      if (structureSel==myNewString){
                                        var idp=value.ProjectId;
                                        var nomP=value.ProjectName;
                                        var statP=value.Etatdeprojet;
                                        var achP=value.ProjectPercentCompleted;
                                        var deb=value.ProjectStartDate;
                                        var debutP=moment(deb).format("DD-MM-YYYY");
                                        var fin=value.ProjectFinishDate;
                                        var finP=moment(fin).format("DD-MM-YYYY");
                                        var NotePlanification=0;
                                        if (idArr.indexOf(idp)==-1) {
                                            idArr.push(idp);
                                            debArr.push(deb);
                                            finArr.push(fin);
                                            if (statP=="Planifié") {
                                                refFinArr.push("Planifié");
                                                glissArr.push("Planifié");
                                            }else{
                                                refFinArr.push("Pas de référence");
                                                glissArr.push("Pas de référence");
                                            }
                                           }
                                        if (value.NotePlanification!=null) {
                                          NotePlanification=value.NotePlanification;
                                        }
                                        var NoteBudget=0;
                                        if (value.NoteBudget!=null) {
                                          NoteBudget=value.NoteBudget;
                                        }
                                        var noteRessources=0;
                                        if (value.NoteRessources!=null) {
                                          noteRessources=value.NoteRessources;
                                        }
                                        var notePlanningdereference=0;
                                        if (value.NotePlanningdereference!=null) {
                                          notePlanningdereference=value.NotePlanningdereference;
                                        }
                                        //////console.log("notePlanningdereference= "+notePlanningdereference);
                                        var NoteSuividuplanning=0;
                                        if (value.NoteSuividuplanning!=null) {
                                          NoteSuividuplanning=value.NoteSuividuplanning;
                                        }
                                        var NoteContenuFichedeprojet=0;
                                        if (value.NoteContenuFichedeprojet!=null) {
                                          NoteContenuFichedeprojet=value.NoteContenuFichedeprojet;
                                        }
                                        var noteDocumentsdeManagementdeprojet=0;
                                        if (value.NoteDocumentsdeManagementdeprojet!=null) {
                                          noteDocumentsdeManagementdeprojet=value.NoteDocumentsdeManagementdeprojet;
                                        }
                                        var noteDocumentsdeprojet=0;
                                        if (value.NoteDocumentsdeprojet!=null) {
                                          noteDocumentsdeprojet=value.NoteDocumentsdeprojet;
                                        }
                                        var NoteObjectifsetindicateursKPI=0;
                                        if (value.NoteObjectifsetindicateursKPI!=null) {
                                          NoteObjectifsetindicateursKPI=value.NoteObjectifsetindicateursKPI;
                                        }
                                        var NoteLivrablesetjalons=0;
                                        if (value.NoteLivrablesetjalons!=null) {
                                          NoteLivrablesetjalons=value.NoteLivrablesetjalons;
                                        }
                                        var noteRisques=0;
                                        if (value.NoteRisques!=null) {
                                          noteRisques=value.NoteRisques;
                                        }
                                        var noteProblemes=0;
                                        if (value.NoteProblemes!=null) {
                                          noteProblemes=value.NoteProblemes;
                                        }
                                        var NoteConformitéàlaréalité=0;
                                        if (value.NoteConformitéàlaréalité!=null) {
                                          NoteConformitéàlaréalité=value.NoteConformitéàlaréalité;
                                        }
                                        var NoteModedegestionduprojet=0;
                                        if (value.NoteModedegestionduprojet!=null) {
                                          NoteModedegestionduprojet=value.NoteModedegestionduprojet;
                                        }
                                        var sumPond=0;
                                        sumPond=parseInt(pondPlanification)+parseInt(pondBudget)+parseInt(pondRessources)+parseInt(pondPlanningdereference)+parseInt(pondSuivi)+parseInt(pondFicheprojet)+parseInt(pondDocumentsdeManagementdeprojet)+parseInt(pondDocumentsdeprojet)+parseInt(pondObIndKPI)+parseInt(pondLivrablesEtJalons)+parseInt(pondRisques)+parseInt(pondProblemes)+parseInt(pondConformite)+parseInt(pondModeGestionProjet);
                                        ////////console.log("sumPond= "+sumPond); 
                                       var Score=parseFloat((pondPlanification*NotePlanification)/5)+parseFloat((pondBudget*NoteBudget)/5)+parseFloat((pondRessources*noteRessources)/5)+parseFloat((pondPlanningdereference*notePlanningdereference)/5)+parseFloat((pondSuivi*NoteSuividuplanning)/5)+parseFloat((pondFicheprojet*NoteContenuFichedeprojet)/5)+parseFloat((pondDocumentsdeManagementdeprojet*noteDocumentsdeManagementdeprojet)/5)+parseFloat((pondDocumentsdeprojet*noteDocumentsdeprojet)/5)+parseFloat((pondObIndKPI*NoteObjectifsetindicateursKPI)/5)+parseFloat((pondLivrablesEtJalons*NoteLivrablesetjalons)/5)+parseFloat((pondRisques*noteRisques)/5)+parseFloat((pondProblemes*noteProblemes)/5)+parseFloat((pondConformite*NoteConformitéàlaréalité)/5)+parseFloat((pondModeGestionProjet*NoteModedegestionduprojet)/5);
                                        var matPlanProj=parseFloat((Score/sumPond)*100);
                                        var tr;
                                        tr = $("<tr>");
                                        tr.append("<td style='text-align:left'>" + nomP + "</td>");//0
                                        tr.append("<td>" + statP + "</td>");//1                        
                                       
                                        tr.append("<td>" + achP+ "%</td>"); //2
                                        tr.append("<td></td>"); //3
                                        tr.append("<td>" + debutP + "</td>"); //4
                                        tr.append("<td>"+ finP +"</td>"); //5
                                        tr.append("<td>"+parseFloat(matPlanProj).toFixed(0) +"%</td>"); //6
                                        tr.append("<td style='text-align:center; display:none;'>"+idp +"</td>");
                                        
                                        $('#tableProjet tbody').append(tr);
                                      }
                              }else{
                                var idp=value.ProjectId;
                                var nomP=value.ProjectName;
                                var statP=value.Etatdeprojet;
                                var achP=value.ProjectPercentCompleted;
                                var deb=value.ProjectStartDate;
                                var debutP=moment(deb).format("DD-MM-YYYY");
                                var fin=value.ProjectFinishDate;
                                var finP=moment(fin).format("DD-MM-YYYY");
                                var NotePlanification=0;
                                if (idArr.indexOf(idp)==-1) {
                                    idArr.push(idp);
                                    debArr.push(deb);
                                    finArr.push(fin);
                                    if (statP=="Planifié") {
                                                refFinArr.push("Planifié");
                                                glissArr.push("Planifié");
                                            }else{
                                                refFinArr.push("Pas de référence");
                                                glissArr.push("Pas de référence");
                                            }
                                   }
                    if (value.NotePlanification!=null) {
                      NotePlanification=value.NotePlanification;
                    }
                          var NoteBudget=0;
                          if (value.NoteBudget!=null) {
                            NoteBudget=value.NoteBudget;
                          }
                          var noteRessources=0;
                          if (value.NoteRessources!=null) {
                            noteRessources=value.NoteRessources;
                          }
                          var notePlanningdereference=0;
                          if (value.NotePlanningdereference!=null) {
                            notePlanningdereference=value.NotePlanningdereference;
                          }
                          //////console.log("notePlanningdereference= "+notePlanningdereference);
                          var NoteSuividuplanning=0;
                          if (value.NoteSuividuplanning!=null) {
                            NoteSuividuplanning=value.NoteSuividuplanning;
                          }
                          var NoteContenuFichedeprojet=0;
                          if (value.NoteContenuFichedeprojet!=null) {
                            NoteContenuFichedeprojet=value.NoteContenuFichedeprojet;
                          }
                          var noteDocumentsdeManagementdeprojet=0;
                          if (value.NoteDocumentsdeManagementdeprojet!=null) {
                            noteDocumentsdeManagementdeprojet=value.NoteDocumentsdeManagementdeprojet;
                          }
                          var noteDocumentsdeprojet=0;
                          if (value.NoteDocumentsdeprojet!=null) {
                            noteDocumentsdeprojet=value.NoteDocumentsdeprojet;
                          }
                          var NoteObjectifsetindicateursKPI=0;
                          if (value.NoteObjectifsetindicateursKPI!=null) {
                            NoteObjectifsetindicateursKPI=value.NoteObjectifsetindicateursKPI;
                          }
                          var NoteLivrablesetjalons=0;
                          if (value.NoteLivrablesetjalons!=null) {
                            NoteLivrablesetjalons=value.NoteLivrablesetjalons;
                          }
                          var noteRisques=0;
                          if (value.NoteRisques!=null) {
                            noteRisques=value.NoteRisques;
                          }
                          var noteProblemes=0;
                          if (value.NoteProblemes!=null) {
                            noteProblemes=value.NoteProblemes;
                          }
                          var NoteConformitéàlaréalité=0;
                          if (value.NoteConformitéàlaréalité!=null) {
                            NoteConformitéàlaréalité=value.NoteConformitéàlaréalité;
                          }
                          var NoteModedegestionduprojet=0;
                          if (value.NoteModedegestionduprojet!=null) {
                            NoteModedegestionduprojet=value.NoteModedegestionduprojet;
                          }
                          var sumPond=0;
                          sumPond=parseInt(pondPlanification)+parseInt(pondBudget)+parseInt(pondRessources)+parseInt(pondPlanningdereference)+parseInt(pondSuivi)+parseInt(pondFicheprojet)+parseInt(pondDocumentsdeManagementdeprojet)+parseInt(pondDocumentsdeprojet)+parseInt(pondObIndKPI)+parseInt(pondLivrablesEtJalons)+parseInt(pondRisques)+parseInt(pondProblemes)+parseInt(pondConformite)+parseInt(pondModeGestionProjet);
                          ////////console.log("sumPond= "+sumPond); 
                         var Score=parseFloat((pondPlanification*NotePlanification)/5)+parseFloat((pondBudget*NoteBudget)/5)+parseFloat((pondRessources*noteRessources)/5)+parseFloat((pondPlanningdereference*notePlanningdereference)/5)+parseFloat((pondSuivi*NoteSuividuplanning)/5)+parseFloat((pondFicheprojet*NoteContenuFichedeprojet)/5)+parseFloat((pondDocumentsdeManagementdeprojet*noteDocumentsdeManagementdeprojet)/5)+parseFloat((pondDocumentsdeprojet*noteDocumentsdeprojet)/5)+parseFloat((pondObIndKPI*NoteObjectifsetindicateursKPI)/5)+parseFloat((pondLivrablesEtJalons*NoteLivrablesetjalons)/5)+parseFloat((pondRisques*noteRisques)/5)+parseFloat((pondProblemes*noteProblemes)/5)+parseFloat((pondConformite*NoteConformitéàlaréalité)/5)+parseFloat((pondModeGestionProjet*NoteModedegestionduprojet)/5);
                          var matPlanProj=parseFloat((Score/sumPond)*100);
                                var tr;
                                tr = $("<tr>");
                                tr.append("<td style='text-align:left'>" + nomP + "</td>");//0
                                tr.append("<td>" + statP + "</td>");//1                        
                               
                                tr.append("<td>" + achP+ "%</td>"); //2
                                tr.append("<td></td>"); //3
                                tr.append("<td>" + debutP + "</td>"); //4
                                tr.append("<td>"+ finP +"</td>"); //5
                                tr.append("<td>"+parseFloat(matPlanProj).toFixed(0) +"%</td>"); //6
                                tr.append("<td style='text-align:center; display:none;'>"+idp +"</td>");
                                
                                $('#tableProjet tbody').append(tr);
                              }
                                
                                
                            });
remplirGlissementTabFilter(idArr,debArr,finArr,refFinArr,glissArr);
                        }
                    });
        }
           var urlremplirGlissementTabFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectBaselineFinishDate";
var responseremplirGlissementTabFilter = responseremplirGlissementTabFilter ||[];
function remplirGlissementTabFilter(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG,glissG){

  $.ajax({url:  urlremplirGlissementTabFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseremplirGlissementTabFilter = responseremplirGlissementTabFilter.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlremplirGlissementTabFilter = data.d.__next;
                                            remplirGlissementTabFilter(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG,glissG);
                                        } 
                                        var durReel=[];
                                        var durRef=[];
                                        //var glissArray=[];
                                       
                  
              
            $.each(responseremplirGlissementTabFilter, function(key, value) 
            { 
              var idProjBaseline=value.ProjectId;
              var finRefProj=value.ProjectBaselineFinishDate;
              if ((idProjetG.indexOf(idProjBaseline)>-1)&&(dateFinRefG[idProjetG.indexOf(idProjBaseline)]!="Planifié")) {
                  
                  dateFinRefG[idProjetG.indexOf(idProjBaseline)]=finRefProj;
                }

            });
             moment.locale('fr');
            

         
            
            for (var i = 0; i <idProjetG.length; i++) {
              if((dateFinRefG[i]!="Pas de référence")&&(dateFinRefG[i]!="Planifié")){
                var refFinish=moment(dateFinRefG[i]);
                var dateFin=moment(dateFinProjetG[i]);
                var daetDeb=moment(dateDebProjetG[i]);
                var realDuration=dateFin.diff(daetDeb,'days');
                var baseDuration=refFinish.diff(daetDeb,'days');
                var gliss=0;
                gliss=parseFloat(((realDuration-baseDuration)/realDuration)*100).toFixed(0);
                if (gliss<0) {
                  gliss=0;
                }
                //////////console.log("gliss= "+gliss);
                glissG[i]=gliss;
              }
            }
            var numRows = document.getElementById("tableProjet").rows.length;

            for(var i=1;i<numRows;i++)
          {
 var tbl = document.getElementById("tableProjet");

 var idProjet1=tbl.rows[i].cells[7].innerHTML;

for (var j = 0; j < idProjetG.length; j++) {
  if (idProjetG[j]==idProjet1) {
    
    if(glissG[j] =="Pas de référence")
                {
                    tbl.rows[i].cells[3].innerHTML  = "Pas de référence";
                    
                     tbl.rows[i].cells[3].style.background='#807e7e';
                     tbl.rows[i].cells[3].style.color='white';
                }else if(glissG[j] =="Planifié")
                {
                    tbl.rows[i].cells[3].innerHTML  = "Planifié";
                    
                     tbl.rows[i].cells[3].style.background='#41B4FF';
                     tbl.rows[i].cells[3].style.color='white';
                }
                else
                {
                  if(parseInt(glissG[j])<0)
                  {
                    tbl.rows[i].cells[3].innerHTML = 0 + "%";
                    
 

                     tbl.rows[i].cells[3].style.backgroundColor='#207920';
                      tbl.rows[i].cells[3].style.color='white';
                  }
                  else
                  {
                    tbl.rows[i].cells[3].innerHTML = parseFloat(glissG[j]).toFixed(0) + "%";
                    
                   
                    if((parseInt(glissG[j]) >=0)&&(parseInt(glissG[j]) <30))
                    {
                      tbl.rows[i].cells[3].style.backgroundColor='#207920';
                      tbl.rows[i].cells[3].style.color='white';
                    }
                    if((parseInt(glissG[j]) >=30)&&(parseInt(glissG[j]) <70))
                    {
                      tbl.rows[i].cells[3].style.background='#CBC502';
                      tbl.rows[i].cells[3].style.color='white';
                    }
                     if((parseInt(glissG[j]) >=70)&&(parseInt(glissG[j]) <=100))
                    {
                      tbl.rows[i].cells[3].style.background='#E34434';
                      tbl.rows[i].cells[3].style.color='white';
                    }
                    
                  
                  }
                }

    //tbl.rows[i].cells[6].innerHTML=glissG[i];
  }
}
              
            }

            
}           
});
}

        var responseKPIGeneralFilter=responseKPIGeneralFilter || [];
        var urlKPIGeneralFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectPercentCompleted&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected;
        function loadKPIGeneralFilter(){
          $.ajax({
                        url: urlKPIGeneralFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseKPIGeneralFilter = responseKPIGeneralFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlKPIGeneralFilter = data.d.__next;
                                loadKPIGeneralFilter();
                            }
                            
                            
                            var countProjet=0;
                            var sumAchevement=0;
                            
                            //-------------------
                            
                            //--------------------------------------------
                            $.each(responseKPIGeneralFilter, function (key, value) {
                              if (structureSel!=""){
                                var structurePr=value.Structuresimpliquees;
                                  if (structurePr==null) {
                                    structurePr="";
                                  }
                                  var words = structurePr.split(', ');
                                    sortTab(words);
                                    var myNewString="";
                                    for(var i=0; i < words.length; i++){
                                      if(i==0){
                                        myNewString+=words[i];
                                      }else{
                                        myNewString+=", "+words[i];
                                      }

                                    }
                                      if (structureSel==myNewString){
                                        var achevement=value.ProjectPercentCompleted;
                                        countProjet++;
                                        sumAchevement+=parseFloat(achevement);
                                      }
                              }else{
                                var achevement=value.ProjectPercentCompleted;
                                countProjet++;
                                sumAchevement+=parseFloat(achevement);
                              }
                                      
                                                                             
                                
                            });
                            var avgAchevement=parseFloat(sumAchevement/countProjet).toFixed(0);
                            
                            document.getElementById("countProj").innerHTML=countProjet;
                            if (isNaN(avgAchevement)){avgAchevement=0;}
                            /*if (avgAchevement<30) {
                              document.getElementById("statutGlKPI").innerHTML='<i class="fa fa-circle fa-4x" aria-hidden="true" style="color : #FF4E28;"></i>';
                            }
                            if ((avgAchevement>=30)&&(avgAchevement<=75)) {
                              document.getElementById("statutGlKPI").innerHTML='<i class="fa fa-circle fa-4x" aria-hidden="true" style="color : #FF4E28;"></i>';
                            }
                            if (avgAchevement>75) {
                              document.getElementById("statutGlKPI").innerHTML='<i class="fa fa-circle fa-4x" aria-hidden="true" style="color : #16A331;"></i>';
                            }*/
                            //document.getElementById("avgAchevement").innerHTML=avgAchevement+"%";

                            document.getElementById("chartAchGen").innerHTML = 
                            '<div class="rounded-lg p-2 shadow" style="padding: 0.75rem;  background-color: aliceblue; background-color: aliceblue;">' +
                            ' <h2 class="h6 font-weight-bold text-center mb-3">Achèvement</h2>' +


                            '<div class="progress mx-auto" data-value="'+avgAchevement+'">' +
                            ' <span class="progress-left">' +
                            '<span class="progress-bar border-info" id="leftDegGenAch"></span>' +
                            '</span>' +
                            '<span class="progress-right">' +
                            '<span class="progress-bar border-info" id="rightDegGenAch"></span>' +
                            '</span>' +
                            '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                            '<div class="h4 font-weight-bold">'+avgAchevement+'<sup class="small">%</sup></div>' +
                            '</div>' +
                            '</div>' +
                            '<!-- END -->' +

                            '<!-- Demo info -->' +
                            '<div class="row text-center mt-4">' +
                            
                            '<!-- END -->' +
                            '</div>' ;
                            

                            if (avgAchevement <= 50) {
                                $("#rightDegGenAch").css('transform', 'rotate(' + percentageToDegrees(avgAchevement) + 'deg)')
                            } else {
                                $("#rightDegGenAch").css('transform', 'rotate(180deg)')
                                $("#leftDegGenAch").css('transform', 'rotate(' + percentageToDegrees(avgAchevement - 50) + 'deg)')
                            }
                            
                            
                            
                        }
                    });
        }
        loadKPIGeneralFilter();

//**********************************************************************************************************************

//********************************************* Analyse par statut************************************************************
    
var responseAnalyseStatutFilter = responseAnalyseStatutFilter || [];
        var urlAnalyseStatutFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectFinishDate,ProjectPercentCompleted,Etatdeprojet&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected;
        function loadAnalyseStatutFilter() {
            $.ajax({
                url: urlAnalyseStatutFilter,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseAnalyseStatutFilter = responseAnalyseStatutFilter.concat(data.d.results);
                    if (data.d.__next) {
                        urlAnalyseStatutFilter = data.d.__next;
                        loadAnalyseStatutFilter();
                    }

                    var arrStatut = [];
                    var arrValueStatut = [];
                    var arrPercentStatut=[];
                    var arrDeg=[];
                    var arrDeg1=[];
                    var countProjet=0;
                    var projEnRetardCount=0;
                    var dateJour=moment().format('YYYY-MM-DD');
                    var moisPrec=moment().add('days',-90).format('YYYY-MM-DD');


                    //////console.log("dateJour= "+dateJour);
                    //////console.log("moisPrec= "+moisPrec);
                    var countProjTerPeriode=0

                    $.each(responseAnalyseStatutFilter, function (key, value) {
                      moment.locale('fr');
                      if (structureSel!=""){
                        var structurePr=value.Structuresimpliquees;
                                  if (structurePr==null) {
                                    structurePr="";
                                  }
                                  var words = structurePr.split(', ');
                                    sortTab(words);
                                    var myNewString="";
                                    for(var i=0; i < words.length; i++){
                                      if(i==0){
                                        myNewString+=words[i];
                                      }else{
                                        myNewString+=", "+words[i];
                                      }

                                    }
                                      if (structureSel==myNewString){
                                          var finish=value.ProjectFinishDate;
                                          var finProjet=moment(finish).format('DD-MM-YYYY');
                                          var finishFormatMoment=moment(finish).format('YYYY-MM-DD');
                                          
                                          if ((moment(finishFormatMoment).isBetween(moisPrec, dateJour))&&(statutProjet=="Clôturé")&&(value.ProjectPercentCompleted==100)) {
                                            countProjTerPeriode++;
                                          }

                                          var today=moment().format('DD-MM-YYYY');
                                          
                                          var achevement=value.ProjectPercentCompleted;
                                          if ((moment(finProjet).isBefore(today))&&(achevement<100)) {
                                            projEnRetardCount++;
                                          }
                                          countProjet++;
                                          var statutProjet=value.Etatdeprojet;

                                          if (statutProjet!=null) {
                                            if (statutProjet.indexOf("StandBy")>=0) {
                                              statutProjet="StandBy";
                                            }
                                            if (arrStatut.indexOf(statutProjet)<0) {
                                              arrStatut.push(statutProjet);
                                              arrValueStatut.push(1);
                                            }else{
                                              arrValueStatut[arrStatut.indexOf(statutProjet)]+=1;
                                            }
                                          }
                                      }
                      }else{
                          var finish=value.ProjectFinishDate;
                          var finProjet=moment(finish).format('DD-MM-YYYY');
                          var finishFormatMoment=moment(finish).format('YYYY-MM-DD');
                          
                          if ((moment(finishFormatMoment).isBetween(moisPrec, dateJour))&&(statutProjet=="Clôturé")) {
                            countProjTerPeriode++;
                          }

                          var today=moment().format('DD-MM-YYYY');
                          
                          var achevement=value.ProjectPercentCompleted;
                          if ((moment(finProjet).isBefore(today))&&(achevement<100)) {
                            projEnRetardCount++;
                          }
                          countProjet++;
                          var statutProjet=value.Etatdeprojet;

                          if (statutProjet!=null) {
                            if (statutProjet.indexOf("StandBy")>=0) {
                              statutProjet="StandBy";
                            }
                            if (arrStatut.indexOf(statutProjet)<0) {
                              arrStatut.push(statutProjet);
                              arrValueStatut.push(1);
                            }else{
                              arrValueStatut[arrStatut.indexOf(statutProjet)]+=1;
                            }
                          }
                      }
                      
                      
                    });
                    
                    
                    var porcentRetard=parseFloat((projEnRetardCount/countProjet)*100).toFixed(0);
                    var degRetard=parseFloat((projEnRetardCount/countProjet)*360);
                    var degRetard1=parseFloat(((porcentRetard-50)*100)/360);
                    for (var i = 0; i < arrStatut.length; i++) {
                      arrPercentStatut[i]=parseFloat((arrValueStatut[i]/countProjet)*100).toFixed(0);
                      arrDeg[i]=parseFloat((arrValueStatut[i]/countProjet)*360);
                      if (arrPercentStatut[i]>50) {
                        arrDeg1[i]=parseFloat(((arrPercentStatut[i]-50)*100)/360);
                      }else{
                        arrDeg1[i]=0;
                      }
                    }
                    var valCloture=0;
                    var percentCloture=0;
                    var degCloture=0;
                    if (arrStatut.indexOf("Clôturé")>-1) {
                      valCloture=arrValueStatut[arrStatut.indexOf("Clôturé")];
                      percentCloture=arrPercentStatut[arrStatut.indexOf("Clôturé")];
                      degCloture=arrDeg[arrStatut.indexOf("Clôturé")];
                      degCloture1=arrDeg1[arrStatut.indexOf("Clôturé")];
                    }
                    var valArret=0;
                    var percentArret=0;
                    var degArret=0;
                    if (arrStatut.indexOf("StandBy")>-1) {
                      valArret=arrValueStatut[arrStatut.indexOf("StandBy")];
                      percentArret=arrPercentStatut[arrStatut.indexOf("StandBy")];
                      degArret=arrDeg[arrStatut.indexOf("StandBy")];
                      degArret1=arrDeg1[arrStatut.indexOf("StandBy")];
                    } 
                    var valEnCours=0;
                    var percentEnCours=0;
                    var degEnCours=0;
                    if (arrStatut.indexOf("En cours")>-1) {
                      valEnCours=arrValueStatut[arrStatut.indexOf("En cours")];
                      percentEnCours=arrPercentStatut[arrStatut.indexOf("En cours")];
                      degEnCours=arrDeg[arrStatut.indexOf("En cours")];
                      degEnCours1=arrDeg1[arrStatut.indexOf("En cours")];
                    }
                    var valAbandonne=0;
                    var percentAbandonne=0;
                    var degAbandonne=0;
                    if (arrStatut.indexOf("Abandonné")>-1) {
                      valAbandonne=arrValueStatut[arrStatut.indexOf("Abandonné")];
                      percentAbandonne=arrPercentStatut[arrStatut.indexOf("Abandonné")];
                      degAbandonne=arrDeg[arrStatut.indexOf("Abandonné")];
                      degAbandonne1=arrDeg1[arrStatut.indexOf("Abandonné")];
                    }
                    var valAbandonne=0;
                    var percentAbandonne=0;
                    var degAbandonne=0;
                    if (arrStatut.indexOf("Abandonné")>-1) {
                      valAbandonne=arrValueStatut[arrStatut.indexOf("Abandonné")];
                      percentAbandonne=arrPercentStatut[arrStatut.indexOf("Abandonné")];
                      degAbandonne=arrDeg[arrStatut.indexOf("Abandonné")];
                      degAbandonne1=arrDeg1[arrStatut.indexOf("Abandonné")];
                    }
                    var valPlanifie=0;
                    var percentPlanifie=0;
                    var degPlanifie=0;
                    if (arrStatut.indexOf("Planifié")>-1) {
                      valPlanifie=arrValueStatut[arrStatut.indexOf("Planifié")];
                      percentPlanifie=arrPercentStatut[arrStatut.indexOf("Planifié")];
                      degPlanifie=arrDeg[arrStatut.indexOf("Planifié")];
                      degPlanifie1=arrDeg1[arrStatut.indexOf("Planifié")];
                    }
                    

                    //'+arrPercentStatut[arrStatut.indexOf("Clôturé")]+'

                    document.getElementById("morris-area-chart").innerHTML = '<div class="col-sm-2" style="cursor: pointer; max-width: 14%;padding-right: 5px;padding-left: 5px;" onclick="p1();">' +
                        '<div class=" rounded-lg p-2 shadow" style="background-color: aliceblue;">' +
                        ' <h2 class="h6 font-weight-bold text-center mb-4">Clôturés</h2>' +


                        '<div class="progress mx-auto" data-value="'+percentCloture+'">' +
                        ' <span class="progress-left">' +
                        '<span class="progress-bar border-info" id="leftDegCloture"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-info" id="rightDegCloture"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h4 font-weight-bold">'+percentCloture+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info -->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valCloture+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +

                        '<div class="col-sm-2" style="cursor: pointer; max-width: 14%;padding-left: 5px;padding-right: 5px;" onclick="p2();">' +
                        '<div class="rounded-lg p-2 shadow" style="background-color: aliceblue;">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">StandBy</h2>' +

                        '<!-- Progress bar 2 -->' +
                        '<div class="progress mx-auto" id="aTerminePour" data-value="'+percentArret+'">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-info" id="leftDegATer"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-info" id="rightDegATer"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h4 font-weight-bold">'+percentArret+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info-->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valArret+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +

                       '<div class="col-sm-2" style="cursor: pointer; max-width: 14%;padding-left: 5px;padding-right: 5px;" onclick="p3();">' +
                        '<div class="rounded-lg p-2 shadow" style=" background-color: aliceblue;">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">En cours</h2>' +

                        '<!-- Progress bar 2 -->' +
                        '<div class="progress mx-auto" id="enCoursPour" data-value="'+percentEnCours+'">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-info" id="leftDegEnCours"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-info" id="rightDegEnCours"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h4 font-weight-bold">'+percentEnCours+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info-->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valEnCours+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +

                        '<div class="col-sm-2" style="cursor: pointer; max-width: 14%;padding-left: 5px;padding-right: 5px;" onclick="p4();">' +
                        '<div class="rounded-lg p-2 shadow" style=" background-color: aliceblue;">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">En retard</h2>' +

                        '<!-- Progress bar 4 -->' +
                        '<div class="progress mx-auto" id="retardPour" data-value="'+porcentRetard+'">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-info" id="leftDegRetard"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-info" id="rightDegRetard"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h4 font-weight-bold">'+porcentRetard+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info -->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+projEnRetardCount+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +




                        '<div class="col-sm-2" style="cursor: pointer; max-width: 14%;padding-left: 5px;padding-right: 5px;" onclick="p5();">' +
                        '<div class="rounded-lg p-2 shadow" style=" background-color: aliceblue;">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">Abandonnés</h2>' +
                        '<!-- Progress bar 5 -->' +
                        '<div class="progress mx-auto" id="retardPour" data-value="'+percentAbandonne+'">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-info" id="leftDegAbandonne"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-info" id="rightDegAbandonne"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h4 font-weight-bold">'+percentAbandonne+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info -->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valAbandonne+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +

                        '<div class="col-sm-2" style="cursor: pointer; max-width: 14%;padding-left: 5px;padding-right: 5px;" onclick="p6();">' +
                        '<div class="rounded-lg p-2 shadow" style=" background-color: aliceblue;">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">Planifiés</h2>' +
                        '<!-- Progress bar 5 -->' +
                        '<div class="progress mx-auto" id="retardPour" data-value="'+percentPlanifie+'">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-info" id="leftDegPlanifie"></span>' +

                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-info" id="rightDegPlanifie"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h4 font-weight-bold">'+percentPlanifie+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info -->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valPlanifie+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +
                        
                        '<div class="col-sm-2" style="cursor: pointer; max-width: 16%;padding-left: 5px;padding-right: 5px;" onclick="p7();">'+
                         '<div class="rounded-lg  shadow" style="padding: 18% 6%; background-color: #fbe4c7;">'+
                         ' <h2 class="h5 font-weight-bold text-center mb-4">Projets terminés </br>J-90</h2>'+
                                                    '<div class="row text-center mt-4">'+
                                                        '<div class="col-12">'+
                                                            '<div class="h3 font-weight-bold mb-0">'+countProjTerPeriode+'</div><span class="small text-gray">Projets</span>'+
                                                        '</div>'+
                                                      '</div>'+
                                                '</div>'+
                                            '</div>';

                        if (percentEnCours > 0) {
                    if (percentEnCours <= 50) {
                        $("#rightDegEnCours").css('transform', 'rotate(' + percentageToDegrees(percentEnCours) + 'deg)')
                    } else {
                        $("#rightDegEnCours").css('transform', 'rotate(180deg)')
                        $("#leftDegEnCours").css('transform', 'rotate(' + percentageToDegrees(percentEnCours - 50) + 'deg)')
                    }
                }
                if (percentCloture > 0) {
                    if (percentCloture <= 50) {
                        $("#rightDegCloture").css('transform', 'rotate(' + percentageToDegrees(percentCloture) + 'deg)')
                    } else {
                        $("#rightDegCloture").css('transform', 'rotate(180deg)')
                        $("#leftDegCloture").css('transform', 'rotate(' + percentageToDegrees(percentCloture - 50) + 'deg)')
                    }
                }
                if (percentArret > 0) {
                    if (percentArret <= 50) {
                        $("#rightDegATer").css('transform', 'rotate(' + percentageToDegrees(percentArret) + 'deg)')
                    } else {
                        $("#rightDegATer").css('transform', 'rotate(180deg)')
                        $("#leftDegATer").css('transform', 'rotate(' + percentageToDegrees(percentArret - 50) + 'deg)')
                    }
                }
                if (porcentRetard > 0) {
                    if (porcentRetard <= 50) {
                        $("#rightDegRetard").css('transform', 'rotate(' + percentageToDegrees(porcentRetard) + 'deg)')
                    } else {
                        $("#rightDegRetard").css('transform', 'rotate(180deg)')
                        $("#leftDegRetard").css('transform', 'rotate(' + percentageToDegrees(porcentRetard - 50) + 'deg)')
                    }
                }
                if (percentAbandonne > 0) {
                    if (percentAbandonne <= 50) {
                        $("#rightDegAbandonne").css('transform', 'rotate(' + percentageToDegrees(percentAbandonne) + 'deg)')
                    } else {
                        $("#rightDegAbandonne").css('transform', 'rotate(180deg)')
                        $("#leftDegAbandonne").css('transform', 'rotate(' + percentageToDegrees(percentAbandonne - 50) + 'deg)')
                    }
                }
                /*if (percentPlanifie > 0) {
                    if (percentPlanifie <= 50) {
                        $("#rightDegPlanifie").css('transform', 'rotate(' + percentageToDegrees(percentPlanifie) + 'deg)')
                    } else {
                        $("#rightDegPlanifie").css('transform', 'rotate(180deg)')
                        $("#leftDegPlanifie").css('transform', 'rotate(' + percentageToDegrees(percentPlanifie - 50) + 'deg)')
                    }
                }*/
   

                }
            });
        }
        loadAnalyseStatutFilter();




//**********************************************************************************************************************

//*********************************************Analyse par délais************************************************************

var responseDurationSGFilter=responseDurationSGFilter || [];
        var urlDurationSGFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectDuration,ProjectActualDuration&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected;
        function loadDurationSGFilter(){
          $.ajax({
                        url: urlDurationSGFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseDurationSGFilter = responseDurationSGFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlDurationSGFilter = data.d.__next;
                                loadDurationSGFilter();
                            }
                            
                            
                            var sumConsomeDuration=0;
                            var sumRealDuration=0;
                            var countProjet=0;
                            $.each(responseDurationSGFilter, function (key, value) {
                                if (structureSel!=""){
                                    var structurePr=value.Structuresimpliquees;
                                  if (structurePr==null) {
                                    structurePr="";
                                  }
                                  var words = structurePr.split(', ');
                                    sortTab(words);
                                    var myNewString="";
                                    for(var i=0; i < words.length; i++){
                                      if(i==0){
                                        myNewString+=words[i];
                                      }else{
                                        myNewString+=", "+words[i];
                                      }

                                    }
                                      if (structureSel==myNewString){
                                        countProjet++;
                                        var dureeReel=value.ProjectDuration;
                                        var dureeConsomee=value.ProjectActualDuration;
                                        sumConsomeDuration+=parseFloat(dureeConsomee);
                                        sumRealDuration+=parseFloat(dureeReel);
                                      }
                                }else{
                                    countProjet++;
                                    var dureeReel=value.ProjectDuration;
                                    var dureeConsomee=value.ProjectActualDuration;
                                    sumConsomeDuration+=parseFloat(dureeConsomee);
                                    sumRealDuration+=parseFloat(dureeReel);
                                }
                                
                            });
                            var consomationPrevue=parseFloat((sumConsomeDuration/sumRealDuration)*100).toFixed(0);
                            jaugeDelaisFilter(consomationPrevue);
                            jrsConsomeFilter(sumRealDuration,sumConsomeDuration);
                            }
                    });
        }
        loadDurationSGFilter();


        function jaugeDelaisFilter(consomationPrevue) {
            //document.getElementById("coutPrevue2").innerHTML = consomationPrevue +"%";
            $(function () {
                var data = parseInt(consomationPrevue);
                
                
                //arroundMax(number);
                $('#containerAnalyse').highcharts({

                    chart: {
                        type: 'gauge'
                    },
                    title: {
                        text: 'Statut global (% jours consommés)',
                        style: {
                            color: '#2ea0e6',
                            fontWeight: 'bold'
                        }

                    },

                    pane: {
                        startAngle: -120,
                        endAngle: 120,
                        background: []
                    },

                    // the value axis
                    yAxis: [{

                        offset: 30,
                        min: 0,
                        max: 100,
                        plotBands: [{
                            from: 0,
                            to: 100,
                            color: '#b8deff' // blue
                        }]
                    }],

                    series: [
                        {
                            name: 'Pourcentage des jours consommés',
                            data: [data],
                            dataLabels: {

                                format: '<span style="font-size: 20px;">' + conToMill(data) + '%</span><br/>',
                                borderWidth:0
                            },
                        }]

                });
            });

        }
        function jrsConsomeFilter(sumRealDuration,sumConsomeDuration){
            var jrsPrevue=parseFloat(sumRealDuration/8).toFixed(0);
            var jrsConsom=parseFloat(sumConsomeDuration/8).toFixed(0);
            //document.getElementById("coutPrevue3").innerHTML = conToMill(jrsConsom)+"/"+conToMill(jrsPrevue);
            $(function () {
                var data = parseInt(jrsConsom);
                
                $('#container1').highcharts({

                    chart: {
                        type: 'gauge'
                    },
                    title: {
                        text: 'Jours consommés',
                        style: {
                            color: '#2ea0e6',
                            fontWeight: 'bold'
                        }
                    },

                    pane: {
                        startAngle: -120,
                        endAngle: 120,
                        background: []
                    },

                    // the value axis
                    yAxis: [{

                        offset: 30,
                        min: 0,
                        max: parseInt(jrsPrevue),
                        plotBands: [{
                            from: 0,
                            to: parseInt(jrsConsom),
                            color: '#b8deff' // blue
                        },
                        {
                            from: parseInt(jrsConsom),
                            to: parseInt(jrsPrevue),
                            color: '#aadeaa' // blue
                        }]
                    }],

                    series: [
                        {
                            name: 'Jours consommés',
                            data: [data],
                            dataLabels: {
                                format: '<span style="font-size: 20px;">' + conToMill(data) + '</span><br/>',
                                borderWidth:0
                            },
                        }]

                });
            });

        }

var urlDateGlissementFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectId,ProjectStartDate,ProjectFinishDate&$filter=Sousprojet%20eq%27Non%27%20and%20Etatdeprojet%20ne%27Planifié%27"+urlFilterSelected;
var responseDateGlissementFilter = responseDateGlissementFilter ||[];

function getDateGlissementFilter(){
  $.ajax({url:  urlDateGlissementFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseDateGlissementFilter = responseDateGlissementFilter.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDateGlissementFilter = data.d.__next;
                                            getDateGlissementFilter();
                                        } 
                var idProjetG=[];
                var dateDebProjetG=[];
                var dateFinProjetG=[];
                var dateFinRefG=[];
                  
            $.each(responseDateGlissementFilter, function(key, value) 
            { 
              if (structureSel!=""){
                var structurePr=value.Structuresimpliquees;
                                  if (structurePr==null) {
                                    structurePr="";
                                  }
                                  var words = structurePr.split(', ');
                                    sortTab(words);
                                    var myNewString="";
                                    for(var i=0; i < words.length; i++){
                                      if(i==0){
                                        myNewString+=words[i];
                                      }else{
                                        myNewString+=", "+words[i];
                                      }

                                    }
                                      if (structureSel==myNewString){
                                        var idP=value.ProjectId;
                                         var projStartDate=value.ProjectStartDate;
                                         var projfinshtDate=value.ProjectFinishDate;
                                         if (idProjetG.indexOf(idP)==-1) {
                                          idProjetG.push(idP);
                                          dateDebProjetG.push(projStartDate);
                                          dateFinProjetG.push(projfinshtDate);
                                          dateFinRefG.push("");
                                         }
                                      }
              }else{
                 var idP=value.ProjectId;
               var projStartDate=value.ProjectStartDate;
               var projfinshtDate=value.ProjectFinishDate;
               if (idProjetG.indexOf(idP)==-1) {
                idProjetG.push(idP);
                dateDebProjetG.push(projStartDate);
                dateFinProjetG.push(projfinshtDate);
                dateFinRefG.push("");
               }
             }
            });
calculGlissementGlobalFilter(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG);


}   
});
}
getDateGlissementFilter();




var urlDateBaseGlissementFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]//ProjectBaselines?$select=ProjectId,ProjectBaselineFinishDate";
var responseBaseDateGlissementFilter = responseBaseDateGlissementFilter ||[];
function calculGlissementGlobalFilter(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG){
   $.ajax({url:  urlDateBaseGlissementFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseBaseDateGlissementFilter = responseBaseDateGlissementFilter.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDateBaseGlissementFilter = data.d.__next;
                                            calculGlissementGlobalFilter(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG);
                                        } 
                                        var durReel=[];
                                        var durRef=[];
                                        var glissArray=[];
                                        var avgGliss=0;
                                        var sumGliss=0;
                                        var noBaseline=0;
              
            $.each(responseBaseDateGlissementFilter, function(key, value) 
            { 
              var idProjBaseline=value.ProjectId;
              var finRefProj=value.ProjectBaselineFinishDate;
              for (var i =0; i<idProjetG.length; i++) {
                if (idProjBaseline==idProjetG[i]) {
                  dateFinRefG[i]=finRefProj;
                }
                //idProjetG[i]
              }

            });
             moment.locale('fr');
            
            
            for (var i = 0; i <dateFinRefG.length; i++) {
              if(dateFinRefG[i]!=""){
                var refFinish=moment(dateFinRefG[i]);
                var dateFin=moment(dateFinProjetG[i]);
                var daetDeb=moment(dateDebProjetG[i]);
                var realDuration=dateFin.diff(daetDeb,'days');
                var baseDuration=refFinish.diff(daetDeb,'days');
                var gliss=0;
                gliss=parseFloat(((realDuration-baseDuration)/realDuration)*100);
                if (gliss<0) {
                  gliss=0;
                }
                //////////////////console.log("gliss= "+gliss);
                glissArray.push(gliss);
              }
            }
            //////////////////console.log("glissArray= "+glissArray.join());
            for (var i = 0; i < glissArray.length; i++) {
                if (!isNaN(glissArray[i])){
                    sumGliss=parseFloat(glissArray[i])+parseFloat(sumGliss);
                }else{
                    noBaseline++;
                }
       
            }
            
            avgGliss=parseFloat(sumGliss/(glissArray.length-noBaseline)).toFixed(0);

            //////////////////console.log("avgGliss= "+avgGliss);
            if (isNaN(avgGliss)){
              document.getElementById("glissmentKPI").innerHTML="Pas de référence";
            }else{
              document.getElementById("glissmentKPI").innerHTML=avgGliss+"%";
            }
            document.getElementById("statutGlKPI").innerHTML = 
                            '<div class="rounded-lg p-2 shadow" style="padding: 0.75rem;  background-color: aliceblue; background-color: aliceblue;">' +
                            ' <h2 class="h6 font-weight-bold text-center mb-3">Glissement</h2>' +


                            '<div class="progress mx-auto" data-value="'+avgGliss+'">' +
                            ' <span class="progress-left">' +
                            '<span class="progress-bar border-info" id="leftDegGen"></span>' +
                            '</span>' +
                            '<span class="progress-right">' +
                            '<span class="progress-bar border-info" id="rightDegGen"></span>' +
                            '</span>' +
                            '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                            '<div class="h4 font-weight-bold">'+avgGliss+'<sup class="small">%</sup></div>' +
                            '</div>' +
                            '</div>' +
                            '<!-- END -->' +

                            '<!-- Demo info -->' +
                            '<div class="row text-center mt-4">' +
                            
                            '<!-- END -->' +
                            '</div>' ;
                            if (avgGliss <= 50) {
                                $("#rightDegGen").css('transform', 'rotate(' + percentageToDegrees(avgGliss) + 'deg)')
                            } else {
                                $("#rightDegGen").css('transform', 'rotate(180deg)')
                                $("#leftDegGen").css('transform', 'rotate(' + percentageToDegrees(avgGliss - 50) + 'deg)')
                            }

            //up mid down

            if ((avgGliss>=0)&&(avgGliss<30)) {
              $("#upArrow1").css("display", "none");
              $("#rightArrow1").css("display", "none");
              $("#downArrow1").css("display", "block");
              $("#glissmentKPI").css("color", "#5cb85c");
            }
            else if ((avgGliss>=30)&&(avgGliss<=60)) {              
              $("#downArrow1").css("display", "none");
              $("#upArrow1").css("display", "none");
              $("#rightArrow1").css("display", "block");
              $("#glissmentKPI").css("color", "#ffe650");
            }
            else if (avgGliss>60) {
              $("#rightArrow1").css("display", "none");
              $("#upArrow1").css("display", "block");
              $("#downArrow1").css("display", "none");
              $("#glissmentKPI").css("color", "#e06950");
            }
}           
});
}

//**********************************************************************************************************************

//*********************************************Analyse des coûts************************************************************

var responseCostFilter=responseCostFilter || [];
        var urlCostFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectCost,ProjectActualCost,ProjectRemainingCost&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected;
        function loadCostFilter(){
          $.ajax({
                        url: urlCostFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseCostFilter = responseCostFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlCostFilter = data.d.__next;
                                loadCostFilter();
                            }
                            
                            var sumRealCost=0;
                            var sumConsomCost=0;
                            var sumCoutRestant=0;
                            $.each(responseCostFilter, function (key, value) { 
                               if (structureSel!=""){
                                var structurePr=value.Structuresimpliquees;
                                  if (structurePr==null) {
                                    structurePr="";
                                  }
                                  var words = structurePr.split(', ');
                                    sortTab(words);
                                    var myNewString="";
                                    for(var i=0; i < words.length; i++){
                                      if(i==0){
                                        myNewString+=words[i];
                                      }else{
                                        myNewString+=", "+words[i];
                                      }

                                    }
                                      if (structureSel==myNewString){
                                        var coutReel=value.ProjectCost;
                                        var coutConsomme=value.ProjectActualCost;
                                        var coutRestant=parseFloat(coutReel-coutConsomme);
                                        sumRealCost+=parseFloat(coutReel);
                                        sumConsomCost+=parseFloat(coutConsomme);
                                        sumCoutRestant+=parseFloat(coutRestant);
                                      }
                               }else{
                                   var coutReel=value.ProjectCost;
                                   var coutConsomme=value.ProjectActualCost;
                                   var coutRestant=parseFloat(coutReel-coutConsomme);
                                   sumRealCost+=parseFloat(coutReel);
                                   sumConsomCost+=parseFloat(coutConsomme);
                                   sumCoutRestant+=parseFloat(coutRestant);
                               }                             
                               
                            });
                            var depassementCout=0; 
                            var poorcentageConsommation=0;
                            if (sumConsomCost!=0) {
                                depassementCout=parseFloat((sumRealCost-sumConsomCost)/sumConsomCost);
                            poorcentageConsommation=parseFloat((sumCoutRestant/sumRealCost)*100).toFixed(0);
                            }                          
                            
                            
                            document.getElementById("budjetTotal").innerHTML=conToMill(sumRealCost);
                            

                           $(function () {
                var data = parseInt(poorcentageConsommation);
                //console.log("poorcentageConsommation= "+poorcentageConsommation);
               
                
                $('#containerdepassement').highcharts({

                    chart: {
                        type: 'gauge'
                    },
                    title: {
                        text: 'Taux de dépassement',
                        style: {
                            color: '#2ea0e6',
                            fontWeight: 'bold'
                        }
                    },

                    pane: {
                        startAngle: -120,
                        endAngle: 120,
                        background: []
                    },

                    // the value axis
                    yAxis: [{

                        offset: 30,
                        min: 0,
                        max: 100,
                        plotBands: [{
                            from: 0,
                            to: 100,
                            color: '#b8deff' // blue
                        }]
                    }],

                    series: [
                        {
                            name: 'Pourcentage de dépassement',
                            data: [data],
                            dataLabels: {
                                format: '<span style="font-size: 20px;">' + conToMill(poorcentageConsommation) + '%</span><br/>',
                                borderWidth:0
                            },
                        }]

                });
                var maxBudg=arroundMax(sumRealCost);
                //////console.log("sumRealCost= "+sumRealCost);
                //////console.log("maxBudg= "+maxBudg);
                $(function () {
                var data = parseInt(sumConsomCost);
                
                $('#containerBudgetConso').highcharts({

                    chart: {
                        type: 'gauge'
                    },
                    title: {
                        text: 'Budget consommé',
                        style: {
                            color: '#2ea0e6',
                            fontWeight: 'bold'
                        }
                    },

                    pane: {
                        startAngle: -120,
                        endAngle: 120,
                        background: []
                    },

                    // the value axis
                    yAxis: [{

                        offset: 30,
                        min: 0,
                        max: parseInt(maxBudg),
                        plotBands: [{
                            from: 0,
                            to: parseInt(sumConsomCost),
                            color: '#b8deff' // blue
                        },
                        {
                            from: parseInt(sumConsomCost),
                            to: parseInt(sumRealCost),
                            color: '#aadeaa' // blue
                        }]
                    }],

                    series: [
                        {
                            name: 'Budget consommé',
                            data: [data],
                            dataLabels: {
                                format: '<span style="font-size: 20px;">' + conToMill(data) + '</span><br/>',
                                borderWidth:0
                            },
                        }]

                });
            });
            });

                        }
                    });
        }
        loadCostFilter();

//**********************************************************************************************************************

//*********************************************Analyse des risques************************************************************

var responseRiskssFilter=responseRiskssFilter || [];
        var urlRiskssFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectId,ProjectName&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected;
        function loadRiskssFilter(){
          $.ajax({
                        url: urlRiskssFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRiskssFilter = responseRiskssFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlRiskssFilter = data.d.__next;
                                loadRiskssFilter();
                            }
                            var arrNoms=[];
                            var arrNomP=[];
                            var arrayStat=[];
                            var arrayScore=[];
                            var arrayProba=[];
                            var arrayImpacts=[];
                            var arrayDateDec=[];
                            var arrayDateCloture=[];
                            var arrayDelai=[];
                            $.each(responseRiskssFilter, function (key, value) {
                                      if (structureSel!=""){
                                        var structurePr=value.Structuresimpliquees;
                                      if (structurePr==null) {
                                        structurePr="";
                                      }
                                      var words = structurePr.split(', ');
                                        sortTab(words);
                                        var myNewString="";
                                        for(var i=0; i < words.length; i++){
                                          if(i==0){
                                            myNewString+=words[i];
                                          }else{
                                            myNewString+=", "+words[i];
                                          }

                                        }
                                        if (structureSel==myNewString){
                                          var nomP=value.ProjectName;
                                          var nomProjet1=nomP.replace(/\s/g, '%20')
                                          arrNoms.push(nomProjet1);
                                          
                                          arrNomP.push(nomP);
                                          arrayStat.push("");
                                          //arrayScore.push("");
                                          arrayProba.push("");
                                          arrayImpacts.push("");
                                          //arrayDateDec.push("Not a DATE");
                                          //arrayDateCloture.push("Not a DATE");
                                          arrayDelai.push(0);
                                        }
                                      }else{
                                        var nomP=value.ProjectName;
                                        var nomProjet1=nomP.replace(/\s/g, '%20')
                                        arrNoms.push(nomProjet1);
                                        
                                        arrNomP.push(nomP);
                                        arrayStat.push("");
                                        //arrayScore.push("");
                                        arrayProba.push("");
                                        arrayImpacts.push("");
                                        //arrayDateDec.push("Not a DATE");
                                        //arrayDateCloture.push("Not a DATE");
                                        arrayDelai.push(0);
                                      }
                                      
                                      
                                   
                                  
                            });
                            var arrayStatut=["Nouveau","En cours","Clôturé","Annulé"];
                            var arrayValStatut=[0,0,0,0];
                            var arrayPriorite=["Critique","Elevé","Moyen","Faible"];
                            var arrayValPriorite=[0,0,0,0];
                            var arrayPriorite2=[];
                            
                            for (var i = 0; i < arrNoms.length; i++) {
                              ////////////console.log("arrNoms[i]= "+arrNoms[i]);
                              analyseDesRisquesFilter(arrNoms[i],arrNomP[i],arrayStatut,arrayValStatut,arrayPriorite,arrayValPriorite,arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec,arrayDateCloture,arrayDelai,arrayPriorite2);
                            }


                          }
                        });
        }
        loadRiskssFilter();
        function analyseDesRisquesFilter(nomProj,nomPJ,arrayStatut,arrayValStatut,arrayPriorite,arrayValPriorite,arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec,arrayDateCloture,arrayDelai,arrayPriorite2){
          
            
            //////////////////console.log("nomPJ= "+nomPJ);
            var responseRiskFilter=responseRiskFilter || [];
            var urlRiskFilter= _spPageContextInfo.siteAbsoluteUrl + "/"+nomProj+"/_api/web/lists/getByTitle('Risks')/items";
            //////console.log("urlRiskFilter= "+urlRiskFilter);
            function loadRisk(){

              $.ajax({
                            url: urlRiskFilter,
                            method: "GET",
                            dataType: "json",
                            headers: { Accept: "application/json;odata=verbose" },
                            success: function (data) {
                                responseRiskFilter = responseRiskFilter.concat(data.d.results);
                                if (data.d.__next) {
                                    urlRiskFilter = data.d.__next;
                                    loadRisk();
                                }
                                
                              
                               if (responseRiskFilter.length>0) {
                                $.each(responseRiskFilter, function (key, value) {
                                   
                                  moment.locale('fr');
                                 
                                   var statutRisk=value.Statut;
                                   var score=value.Score;
                                   var probabilite=value.Probabilit_x00e9_;
                                   var impact="";
                                   if (value.Impacts!=null) {
                                    impact=value.Impacts;
                                   }
                                   var dateDec="Not a DATE";
                                   
                                   var dateDeclanchement="";
                                   if (value.Date_x0020_de_x0020_d_x00e9_clen!=null) {
                                    dateDec=value.Date_x0020_de_x0020_d_x00e9_clen;
                                    dateDeclanchement=moment(dateDec);
                                   }else{
                                    dateDeclanchement=dateDec;
                                   }
                                   
                                   var dateClot="Not a DATE";
                                   
                                   var dateCloture="";
                                   if (value.Date_x0020_de_x0020_cl_x00f4_tur!=null) {
                                    dateClot=value.Date_x0020_de_x0020_cl_x00f4_tur
                                    dateCloture=moment(dateClot);
                                   }else{
                                    dateCloture=dateClot;
                                   }
                                   arrayDateDec.push(dateDeclanchement);
                                   arrayDateCloture.push(dateCloture);
                                   // ////console.log("_____________________________________________________________");
                                   
                                   
                                   // ////console.log("Title= "+value.Title);
                                   // ////console.log("arrayDateDec= "+arrayDateDec);
                                   // ////console.log("arrayDateCloture= "+arrayDateCloture);
                                   // ////console.log("_____________________________________________________________");

                                   arrayStat[arrNomP.indexOf(nomPJ)]=statutRisk;
                                   arrayScore.push(score);
                                   arrayProba[arrNomP.indexOf(nomPJ)]=probabilite;
                                   arrayImpacts[arrNomP.indexOf(nomPJ)]=impact;
                                   
                                   if (arrayStatut.indexOf(statutRisk)<0) {
                                    arrayStatut.push(statutRisk);
                                    arrayValStatut.push(1);
                                   }else{
                                    arrayValStatut[arrayStatut.indexOf(statutRisk)]+=1;
                                   }
                                   var prioriteRisk=value.Priorit_x00e9_;
                                   
                                   if (arrayPriorite.indexOf(prioriteRisk)<0) {
                                    arrayPriorite.push(prioriteRisk);
                                    arrayValPriorite.push(1);
                                   }else{
                                    arrayValPriorite[arrayPriorite.indexOf(prioriteRisk)]+=1;
                                   }
                                   arrayPriorite2.push(prioriteRisk);

                                });
                                // //////////////////console.log("arrayStat= "+arrayStat);
                                //////console.log("arrayScore= "+arrayScore);
                                //////console.log("length= "+arrayScore.length);
                                // //////////////////console.log("arrayProba= "+arrayProba);
                                // //////////////////console.log("arrayImpacts= "+arrayImpacts);
                                
                                  ////////////////////console.log.log("arrayPriorite= "+arrayPriorite);
                                  ////////////////////console.log.log("arrayValPriorite= "+arrayValPriorite);
            
                                  risqueParStatutFilter(arrayStatut,arrayValStatut);
                                  //risqueParPrioriteFilter(arrayPriorite,arrayValPriorite);
                                  loadTabGravRiskFilter(arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec);
                                  //loadDealaiTraitementFilter(arrayPriorite2,arrayDateDec,arrayDateCloture,arrayDelai);
                                    


                               }
                               /*else{
                                  document.getElementById("delaitraitement").innerHTML ='<center><h3>Pas des risques associés</h3></center>';
                                  document.getElementById("containergravite").innerHTML='<center><h3>Pas des risques associés</h3></center>';
                                  document.getElementById("bar2").innerHTML='<center><h3>Pas des risques associés</h3></center>';
                                  document.getElementById("bar1").innerHTML='<center><h3>Pas des risques associés</h3></center>';
                               }*/
                                
                                
                            
                                
                            }
                        });

            }
            loadRisk();

            
        }

        function risqueParStatutFilter(arrayStatut,arrayValStatut) {
            // Bar chart   
            document.getElementById("bar1").innerHTML='<div id="bar-chartFilter" height="50vh"></div>';
            //var ctx0 = document.getElementById("bar-chart").getContext('2d');
     
              Highcharts.chart('bar-chartFilter', {
                chart: {
                    type: 'column'
                },
                    title: {
                        text: 'Risques par statut',
                        style: {
                            color: '#2ea0e6',
                            fontWeight: 'bold'
                        }
                    },
                xAxis: {
                    categories: arrayStatut
                },
                yAxis: {
                    min: 0,
                    title: {
                    text: 'Nombre des risques'
                    }
                    },
                plotOptions: {

                    series: {

                        cursor: 'pointer',
                        
                        point: {

                            events: {
                                click: function () {
                                    //alert('Category: ' + this.category + ', value: ' + this.y);
                                    var att1=this.category;
                                    var att2=this.y;
                                    openModalFilter(att1,att2);
                                }
                            }
                        }
                    }
                },
            colors: ["#d9534f", "#f0ad4e", "#337ab7", "#5cb85c"],

                series: [
                 {
            name: "Statut",
            colorByPoint: true,
            data: [
                {
                    name: arrayStatut[0],
                    y: arrayValStatut[0],
                 drilldown: arrayStatut[0]
                },
                {
                    name: arrayStatut[1],
                    y: arrayValStatut[1],
                    drilldown: arrayStatut[1]
                },
                {
                    name: arrayStatut[2],
                    y: arrayValStatut[2],
                    drilldown: arrayStatut[2]
                },
                {
                    name: arrayStatut[3],
                    y: arrayValStatut[3],
                    drilldown: arrayStatut[3]
                },
                
             
            ]
        }
                ]
            });
                   
        }
        
        
        function loadTabGravRiskFilter(arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec){
           
           
           
           var labelGravite=["Elevé","Moyen","Faible"];
           var countGravite=[0,0,0];
          for (var i = 0; i < arrayScore.length; i++) {
            ////////console.log("arrayStat= "+arrayStat);
            
                if(arrayScore[i]<=5){
                    countGravite[2]=parseInt(countGravite[2]+1);
                }
                else if ((arrayScore[i]>5)&&(arrayScore[i]<=14)) {
                    countGravite[1]=parseInt(countGravite[1]+1);
                }
                else if (arrayScore[i]>14) {
                    countGravite[0]=parseInt(countGravite[0]+1);
                }
                       
          }
         document.getElementById("containergravite").innerHTML='<div id="barGraviteFilter" height="50vh"></div>';
Highcharts.chart('barGraviteFilter', {
                chart: {
                    type: 'column'
                },
                    title: {
                        text: 'Risques par gravité',
                        style: {
                            color: '#2ea0e6',
                            fontWeight: 'bold'
                        }
                    },
                xAxis: {
                    categories: labelGravite
                },
                yAxis: {
                    min: 0,
                    title: {
                    text: 'Nombre des risques'
                    }
                    },
                plotOptions: {

                    series: {

                        cursor: 'pointer',
                        
                        point: {

                            events: {
                                click: function () {
                                    //alert('Category: ' + this.category + ', value: ' + this.y);
                                    var att1=this.category;
                                    var att2=this.y;
                                    openModal2Filter(att1,att2);
                                }
                            }
                        }
                    }
                },
            colors: ["#d9534f", "#f0ad4e", "#337ab7", "#5cb85c"],

                series: [
                 {
            name: "Gravité",
            colorByPoint: true,
            data: [
                {
                    name: labelGravite[0],
                    y: countGravite[0],
                 drilldown: labelGravite[0]
                },
                {
                    name: labelGravite[1],
                    y: countGravite[1],
                    drilldown: labelGravite[1]
                },
                {
                    name: labelGravite[2],
                    y: countGravite[2],
                    drilldown: labelGravite[2]
                }
                
             
            ]
        }
                ]
            });

          

      }
      


//**********************************************************************************************************************



function openModalFilter(att1,att2){
    
 
    document.getElementById("modalTitle").innerHTML="Détails des risques";
    document.getElementById("modalTitle1").innerHTML=" Statut : "+ att1;
    document.getElementById("modalBody").innerHTML=
    // When the user clicks the button, open the modal.
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableRisqueStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Nom risque</th>'+
                                                        
                                                        '<th style="text-align:center;">Date ouverture</th>'+
                                                        '<th style="text-align:center;">Date Clôture</th>'+
                                                        '<th style="text-align:center;">Gravité</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };
    var responsePopupRiskssSatusFilter=responsePopupRiskssSatusFilter || [];
        var urlPopupRiskssSatusFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectOwnerName,ProjectId,ProjectName&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected+"&$orderby=ProjectName,Chantier";
        console.log("urlPopupRiskssSatusFilter= "+urlPopupRiskssSatusFilter);
        function loadPopupRiskssSatusFilter(){
          $.ajax({
                        url: urlPopupRiskssSatusFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responsePopupRiskssSatusFilter = responsePopupRiskssSatusFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlPopupRiskssSatusFilter = data.d.__next;
                                loadPopupRiskssSatusFilter();
                            }
                            var arrNoms=[];
                            var arrNomP=[];
                            var arrNomPrj=[];
                            var arrNomRisque=[];
                            var arrImpactRisque=[];
                            var ouvertureArr=[];
                            var clotureArr=[];
                            var graviteArr=[];
                            var statutArr=[];
                            var cpArr=[];
                            var chefDeProjetArr=[];

                            $.each(responsePopupRiskssSatusFilter, function (key, value) {
                               
                                      if (structureSel!=""){
                                        var structurePr=value.Structuresimpliquees;
                                      if (structurePr==null) {
                                        structurePr="";
                                      }
                                      var words = structurePr.split(', ');
                                        sortTab(words);
                                        var myNewString="";
                                        for(var i=0; i < words.length; i++){
                                          if(i==0){
                                            myNewString+=words[i];
                                          }else{
                                            myNewString+=", "+words[i];
                                          }

                                        }
                                        if (structureSel==myNewString){
                                          var nomP=value.ProjectName;
                                          var nomProjet1=nomP.replace(/\s/g, '%20')
                                          arrNoms.push(nomProjet1);
                                          var chefProj=value.ProjectOwnerName;
                                          //-----------
                                          arrNomP.push(nomP);
                                          cpArr.push(chefProj);
                                        }
                                      }else{
                                        var nomP=value.ProjectName;
                                        var nomProjet1=nomP.replace(/\s/g, '%20')
                                        arrNoms.push(nomProjet1);
                                        var chefProj=value.ProjectOwnerName;
                                        arrNomP.push(nomP);
                                        cpArr.push(chefProj);
                                      }
                                      
                                     
                            });
                            
                            
                            for (var i = 0; i < arrNoms.length; i++) {
                              
                              analyseDesStatutsRisquesFilter1(arrNoms[i],arrNomP[i],arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,cpArr[i],chefDeProjetArr);
                            }


                          }
                        });
        }
        loadPopupRiskssSatusFilter();
        function analyseDesStatutsRisquesFilter1(nomProj,nomP,arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,cp,chefDeProjetArr){
          
            
            //////////////////console.log("nomPJ= "+nomPJ);
            var responseRiskFilter1=responseRiskFilter1 || [];
            var urlRiskFilter1= _spPageContextInfo.siteAbsoluteUrl + "/"+nomProj+"/_api/web/lists/getByTitle('Risks')/items";
            //////console.log("urlRiskFilter= "+urlRiskFilter);
            function loadRiskFilter1(){

              $.ajax({
                            url: urlRiskFilter1,
                            method: "GET",
                            dataType: "json",
                            headers: { Accept: "application/json;odata=verbose" },
                            success: function (data) {
                                responseRiskFilter1 = responseRiskFilter1.concat(data.d.results);
                                if (data.d.__next) {
                                    urlRiskFilter1 = data.d.__next;
                                    loadRiskFilter1();
                                }
                                
                              
                               if (responseRiskFilter1.length>0) {
                                $.each(responseRiskFilter1, function (key, value) {
                                   
                                  moment.locale('fr');
                                   var nomRis=value.Title;
                                   var statutRisk=value.Statut;
                                   var score=value.Score;
                                   var probabilite=value.Probabilit_x00e9_;
                                   var impact="";
                                   if (value.Impacts!=null) {
                                    impact=value.Impacts;
                                   }
                                   var dateDec="";
                                   
                                   var dateDeclanchement="";
                                   if (value.Date_x0020_de_x0020_d_x00e9_clen!=null) {
                                    dateDec=value.Date_x0020_de_x0020_d_x00e9_clen;
                                    dateDeclanchement=moment(dateDec).format("DD-MM-YYYY");
                                   }else{
                                    dateDeclanchement=dateDec;
                                   }
                                   
                                   var dateClot="";
                                   
                                   var dateCloture="";
                                   if (value.Date_x0020_de_x0020_cl_x00f4_tur!=null) {
                                    dateClot=value.Date_x0020_de_x0020_cl_x00f4_tur
                                    dateCloture=moment(dateClot).format("DD-MM-YYYY");
                                   }else{
                                    dateCloture=dateClot;
                                   }
                                   arrNomPrj.push(nomP);
                                   chefDeProjetArr.push(cp);
                                   arrNomRisque.push(nomRis);
                                   arrImpactRisque.push(impact);
                                   ouvertureArr.push(dateDeclanchement);
                                   clotureArr.push(dateCloture);
                                   if (score<=5) {
                                    graviteArr.push("Faible");
                                   }else if ((score>5) && (score<=14)) {
                                    graviteArr.push("Moyen");
                                   }else if (score>14) {
                                    graviteArr.push("Elevé");
                                   }
                                   statutArr.push(statutRisk);
                                });
                                remplirRiskStatFilter(arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,chefDeProjetArr);
                               
                               }                                
                            }
                        });

            }
            loadRiskFilter1();
        }  
        function remplirRiskStatFilter(arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,chefDeProjetArr){
       
          tableauxRS = document.getElementById("tableProjet");
           tr1Rs = tableauxRS.getElementsByTagName("tr");
           if(tr1Rs.length>0){        
                $('#tableRisqueStatut tbody').empty();
           }
          for (var i = 0; i < arrNomPrj.length; i++) {
            if (att1==statutArr[i]) {
              var tr;
              tr = $("<tr>");
              tr.append("<td style='text-align:left'>" + arrNomPrj[i] + "</td>");//0
                tr.append("<td>"+ chefDeProjetArr[i] + "</td>");//0
              tr.append("<td>"+ arrNomRisque[i]+ "</td>"); //
              
              tr.append("<td>"+ ouvertureArr[i] +"</td>"); //5
              tr.append("<td>"+ clotureArr[i] +"</td>"); //5
              tr.append("<td>"+ graviteArr[i] +"</td>"); //5                          
              $('#tableRisqueStatut tbody').append(tr);
            }            
          }
          LoadRowsRiskStatFilter();
        }   
        function LoadRowsRiskStatFilter(){
          var indexOfColumnToRowSpan = 0;
          var $table = $('#tableRisqueStatut tbody');
          var rowSpanMap = {};
          $table.find('tr').each(function(){
            var valueOfTheSpannableCell = $($(this).children('td')[indexOfColumnToRowSpan]).text();
            $($(this).children('td')[indexOfColumnToRowSpan]).attr('data-original-value', valueOfTheSpannableCell);
            rowSpanMap[valueOfTheSpannableCell] = true;
          }); 
          for(var rowGroup in rowSpanMap){
            var $cellsToSpan = $('td[data-original-value="'+rowGroup+'"]');
            var numberOfRowsToSpan = $cellsToSpan.length;
            $cellsToSpan.each(function(index){
              if(index==0){
                $(this).attr('rowspan', numberOfRowsToSpan);
              }else{
                $(this).hide();
              }
            });
          }
        }     
}

function openModal2Filter(att1,att2){
    document.getElementById("modalTitle").innerHTML="Détails des risques";
    document.getElementById("modalTitle1").innerHTML=" Gravité : "+ att1;
    document.getElementById("modalBody").innerHTML=
    // When the user clicks the button, open the modal.
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableRisqueStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Nom risque</th>'+
                                                        
                                                        '<th style="text-align:center;">Date ouverture</th>'+
                                                        '<th style="text-align:center;">Date Clôture</th>'+
                                                        '<th style="text-align:center;">Statut</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };
    var responsePopupRiskssGraviteFilter=responsePopupRiskssGraviteFilter || [];
        var urlPopupRiskssGraviteFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectOwnerName,ProjectId,ProjectName&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected+"&$orderby=ProjectName,Chantier";
        function loadPopupRiskssGravite(){
          $.ajax({
                        url: urlPopupRiskssGraviteFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responsePopupRiskssGraviteFilter = responsePopupRiskssGraviteFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlPopupRiskssGraviteFilter = data.d.__next;
                                loadPopupRiskssGravite();
                            }
                            var arrNoms=[];
                            var arrNomP=[];
                            var arrNomPrj=[];
                            var arrNomRisque=[];
                            var arrImpactRisque=[];
                            var ouvertureArr=[];
                            var clotureArr=[];
                            var graviteArr=[];
                            var statutArr=[];
                            var cpArr=[];
                            var chefDeProjetArr=[];
                            
                            $.each(responsePopupRiskssGraviteFilter, function (key, value) {
                               
                                      if (structureSel!=""){
                                        var structurePr=value.Structuresimpliquees;
                                      if (structurePr==null) {
                                        structurePr="";
                                      }
                                      var words = structurePr.split(', ');
                                        sortTab(words);
                                        var myNewString="";
                                        for(var i=0; i < words.length; i++){
                                          if(i==0){
                                            myNewString+=words[i];
                                          }else{
                                            myNewString+=", "+words[i];
                                          }

                                        }
                                        if (structureSel==myNewString){
                                          var nomP=value.ProjectName;
                                          var nomProjet1=nomP.replace(/\s/g, '%20')
                                          arrNoms.push(nomProjet1);
                                          var chefProj=value.ProjectOwnerName;
                                          //-----------
                                      arrNomP.push(nomP);
                                      cpArr.push(chefProj);
                                        }
                                      }else{
                                        var nomP=value.ProjectName;
                                        var nomProjet1=nomP.replace(/\s/g, '%20')
                                        arrNoms.push(nomProjet1);
                                        var chefProj=value.ProjectOwnerName;
                                          arrNomP.push(nomP);
                                          cpArr.push(chefProj);
                                      }
                                      
                                     
                            });
                            
                            
                            for (var i = 0; i < arrNoms.length; i++) {
                              ////////////console.log("arrNomP[i]= "+arrNomP[i]);
                              analyseDesStatutsRisquesFilter3(arrNoms[i],arrNomP[i],arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,cpArr[i],chefDeProjetArr);
                            }


                          }
                        });
        }
        loadPopupRiskssGravite();
        function analyseDesStatutsRisquesFilter3(nomProj,nomP,arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,cp,chefDeProjetArr){
          
            
            //////////////////console.log("nomPJ= "+nomPJ);
            var responseRiskFilter3=responseRiskFilter3 || [];
            var urlRiskFilter3= _spPageContextInfo.siteAbsoluteUrl + "/"+nomProj+"/_api/web/lists/getByTitle('Risks')/items";
            //////console.log("urlRiskFilter= "+urlRiskFilter);
            function loadRiskFilter3(){

              $.ajax({
                            url: urlRiskFilter3,
                            method: "GET",
                            dataType: "json",
                            headers: { Accept: "application/json;odata=verbose" },
                            success: function (data) {
                                responseRiskFilter3 = responseRiskFilter3.concat(data.d.results);
                                if (data.d.__next) {
                                    urlRiskFilter3 = data.d.__next;
                                    loadRiskFilter3();
                                }
                                
                              
                               if (responseRiskFilter3.length>0) {
                                $.each(responseRiskFilter3, function (key, value) {
                                   
                                  moment.locale('fr');
                                   var nomRis=value.Title;
                                   var statutRisk=value.Statut;
                                   var score=value.Score;
                                   var probabilite=value.Probabilit_x00e9_;
                                   var impact="";
                                   if (value.Impacts!=null) {
                                    impact=value.Impacts;
                                   }
                                   var dateDec="";
                                   
                                   var dateDeclanchement="";
                                   if (value.Date_x0020_de_x0020_d_x00e9_clen!=null) {
                                    dateDec=value.Date_x0020_de_x0020_d_x00e9_clen;
                                    dateDeclanchement=moment(dateDec).format("DD-MM-YYYY");
                                   }else{
                                    dateDeclanchement=dateDec;
                                   }
                                   
                                   var dateClot="";
                                   
                                   var dateCloture="";
                                   if (value.Date_x0020_de_x0020_cl_x00f4_tur!=null) {
                                    dateClot=value.Date_x0020_de_x0020_cl_x00f4_tur
                                    dateCloture=moment(dateClot).format("DD-MM-YYYY");
                                   }else{
                                    dateCloture=dateClot;
                                   }
                                   arrNomPrj.push(nomP);
                                   chefDeProjetArr.push(cp);
                                   arrNomRisque.push(nomRis);
                                   arrImpactRisque.push(impact);
                                   ouvertureArr.push(dateDeclanchement);
                                   clotureArr.push(dateCloture);
                                   if (score<=5) {
                                    graviteArr.push("Faible");
                                   }else if ((score>5) && (score<=14)) {
                                    graviteArr.push("Moyen");
                                   }else if (score>14) {
                                    graviteArr.push("Elevé");
                                   }
                                   statutArr.push(statutRisk);
                                });
                                remplirRiskGravFilter(arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,chefDeProjetArr);
                               
                               }                                
                            }
                        });

            }
            loadRiskFilter3();
        }  
        function remplirRiskGravFilter(arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,chefDeProjetArr){
          tableauxRS = document.getElementById("tableProjet");
           tr1Rs = tableauxRS.getElementsByTagName("tr");
           if(tr1Rs.length>0){        
                $('#tableRisqueStatut tbody').empty();
           }
          for (var i = 0; i < arrNomPrj.length; i++) {
            if (att1==graviteArr[i]) {
              var tr;
              tr = $("<tr>");
              tr.append("<td style='text-align:left'>" + arrNomPrj[i] + "</td>");//0
              tr.append("<td>"+ chefDeProjetArr[i] + "</td>");//0
              tr.append("<td>"+ arrNomRisque[i]+ "</td>"); //
              
              tr.append("<td>"+ ouvertureArr[i] +"</td>"); //5
              tr.append("<td>"+ clotureArr[i] +"</td>"); //5
              tr.append("<td>"+ statutArr[i] +"</td>"); //5                          
              $('#tableRisqueStatut tbody').append(tr);
            }            
          }
          LoadRowsRiskGrav();
        }    
        function LoadRowsRiskGrav(){
          var indexOfColumnToRowSpan = 0;
          var $table = $('#tableRisqueStatut tbody');
          var rowSpanMap = {};
          $table.find('tr').each(function(){
            var valueOfTheSpannableCell = $($(this).children('td')[indexOfColumnToRowSpan]).text();
            $($(this).children('td')[indexOfColumnToRowSpan]).attr('data-original-value', valueOfTheSpannableCell);
            rowSpanMap[valueOfTheSpannableCell] = true;
          }); 
          for(var rowGroup in rowSpanMap){
            var $cellsToSpan = $('td[data-original-value="'+rowGroup+'"]');
            var numberOfRowsToSpan = $cellsToSpan.length;
            $cellsToSpan.each(function(index){
              if(index==0){
                $(this).attr('rowspan', numberOfRowsToSpan);
              }else{
                $(this).hide();
              }
            });
          }
        }           
}
  //urlFilterSelected= "";
  //countSelected=0;
     
//**********************************************************************************************************************************************************************************************************************
    var responseRiskss15Filter=responseRiskss15Filter || [];
        var urlRiskss15Filter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectId,ProjectName&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected;
        function loadRiskss15Filter(){
          $.ajax({
                        url: urlRiskss15Filter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRiskss15Filter = responseRiskss15Filter.concat(data.d.results);
                            if (data.d.__next) {
                                urlRiskss15Filter = data.d.__next;
                                loadRiskss15Filter();
                            }
                            var arrNoms=[];
                            var arrNomP=[];
                            var arrNomPrj=[];
                            var arrNomRisque=[];
                            var arrImpactRisque=[];
                            var ouvertureArr=[];
                            var clotureArr=[];
                            var graviteArr=[];
                            var statutArr=[];
                            var cpArr=[];
                            var chefDeProjetArr=[];

                            $.each(responseRiskss15Filter, function (key, value) {
                               if (structureSel!=""){
                                var structurePr=value.Structuresimpliquees;
                                  if (structurePr==null) {
                                    structurePr="";
                                  }
                                  var words = structurePr.split(', ');
                                    sortTab(words);
                                    var myNewString="";
                                    for(var i=0; i < words.length; i++){
                                      if(i==0){
                                        myNewString+=words[i];
                                      }else{
                                        myNewString+=", "+words[i];
                                      }

                                    }
                                      if (structureSel==myNewString){
                                        var nomP=value.ProjectName;
                                      var chefProj=value.ProjectOwnerName;
                                      var nomProjet1=nomP.replace(/\s/g, '%20')
                                      arrNoms.push(nomProjet1);
                                      //-----------
                                      arrNomP.push(nomP);
                                      cpArr.push(chefProj);
                                      }
                               }else{
                                   var nomP=value.ProjectName;
                                      var chefProj=value.ProjectOwnerName;
                                      var nomProjet1=nomP.replace(/\s/g, '%20')
                                      arrNoms.push(nomProjet1);
                                      //-----------
                                      arrNomP.push(nomP);
                                      cpArr.push(chefProj);
                               }  
                                      
                                      
                                     
                            });
                            
                            
                            for (var i = 0; i < arrNoms.length; i++) {
                              ////////////console.log("arrNoms[i]= "+arrNoms[i]);
                              analyseDesRiskss15Filter(arrNoms[i],arrNomP[i],arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,cpArr[i],chefDeProjetArr);
                            }


                          }
                        });
        }
        loadRiskss15Filter();
        function analyseDesRiskss15Filter(nomProj,nomP,arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,cp,chefDeProjetArr){
          
            
            //////////////////console.log("nomPJ= "+nomPJ);
            var responseDesRiskss15Filter=responseDesRiskss15Filter || [];
            var urlDesRiskss15Filter= _spPageContextInfo.siteAbsoluteUrl + "/"+nomProj+"/_api/web/lists/getByTitle('Risks')/items";
            //////console.log("urlDesRiskss15Filter= "+urlDesRiskss15Filter);
            function loadDesRiskss15Filter(){

              $.ajax({
                            url: urlDesRiskss15Filter,
                            method: "GET",
                            dataType: "json",
                            headers: { Accept: "application/json;odata=verbose" },
                            success: function (data) {
                                responseDesRiskss15Filter = responseDesRiskss15Filter.concat(data.d.results);
                                if (data.d.__next) {
                                    urlDesRiskss15Filter = data.d.__next;
                                    loadDesRiskss15Filter();
                                }
                                
                              
                               if (responseDesRiskss15Filter.length>0) {
                                $.each(responseDesRiskss15Filter, function (key, value) {
                                   
                                  moment.locale('fr');
                                   var nomRis=value.Title;
                                   var statutRisk=value.Statut;
                                   var score=value.Score;
                                   var probabilite=value.Probabilit_x00e9_;
                                   var impact="";
                                   if (value.Impacts!=null) {
                                    impact=value.Impacts;
                                   }
                                   var dateDec="";
                                   
                                   var dateDeclanchement="";
                                   if (value.Date_x0020_de_x0020_d_x00e9_clen!=null) {
                                    dateDec=value.Date_x0020_de_x0020_d_x00e9_clen;
                                    dateDeclanchement=moment(dateDec).format("DD-MM-YYYY");
                                   }else{
                                    dateDeclanchement=dateDec;
                                   }
                                   
                                   var dateClot="";
                                   
                                   var dateCloture="";
                                   if (value.Date_x0020_de_x0020_cl_x00f4_tur!=null) {
                                    dateClot=value.Date_x0020_de_x0020_cl_x00f4_tur
                                    dateCloture=moment(dateClot).format("DD-MM-YYYY");
                                   }else{
                                    dateCloture=dateClot;
                                   }
                                   arrNomPrj.push(nomP);
                                   chefDeProjetArr.push(cp);
                                   arrNomRisque.push(nomRis);
                                   arrImpactRisque.push(impact);
                                   ouvertureArr.push(dateDeclanchement);
                                   clotureArr.push(dateCloture);
                                   if (score<=5) {
                                    graviteArr.push("Faible");
                                   }else if ((score>5) && (score<=14)) {
                                    graviteArr.push("Moyen");
                                   }else if (score>14) {
                                    graviteArr.push("Elevé");
                                   }
                                   statutArr.push(statutRisk);
                                });
                                remplirRiskStat15Filter(arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,chefDeProjetArr);
                               
                               }                                
                            }
                        });

            }
            loadDesRiskss15Filter();
       


       function remplirRiskStat15Filter(arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,chefDeProjetArr){
          tableauxRS = document.getElementById("tableProjet");
           tr1Rs = tableauxRS.getElementsByTagName("tr");
           if(tr1Rs.length>0){        
                $('#risksJplus15 tbody').empty();
           }
          for (var i = 0; i < arrNomPrj.length; i++) {
                var ouvertureFormatMoment=moment(ouvertureArr[i]).format('YYYY-MM-DD');
                var dateJour=moment().format('YYYY-MM-DD');
                var plus15=moment().add('days',15).format('YYYY-MM-DD');
                if (moment(ouvertureFormatMoment).isBetween(dateJour, plus15)) {
                      var tr;
                      tr = $("<tr>");
                      tr.append("<td style='text-align:left'>" + arrNomPrj[i] + "</td>");//0
                      tr.append("<td>"+ chefDeProjetArr[i]+ "</td>"); //
                      tr.append("<td>"+ arrNomRisque[i] + "</td>"); //4
                      tr.append("<td>"+ ouvertureArr[i] +"</td>"); //5
                      tr.append("<td>"+ clotureArr[i] +"</td>"); //5
                      tr.append("<td>"+ graviteArr[i] +"</td>"); //5                          
                      $('#risksJplus15 tbody').append(tr);
                }
              
                        
          }
        }        
} 


}