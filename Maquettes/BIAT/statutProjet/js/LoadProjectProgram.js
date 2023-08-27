function loadProjectPrograme(){

  

var portefeuilleSelect=document.getElementById("mylist3").value;
var ProgrammeSelect=document.getElementById("mylist2").value;
if ((portefeuilleSelect!="")&&(ProgrammeSelect!="")) {//*******************************//

$("#mainSection").css("display", "none");
$("#jalonTab").css("display", "none");
$('#mylist4').prop("disabled", false);
$('#mylist4').empty().append('<option value="" selected disabled>NOM DE PROJETS</option>');
document.getElementById('nomProjectName').innerHTML = "";

    var responseProjectProgramName = responseProjectProgramName ||[];
    var lesProjetsProgramme = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName&$filter=EnterpriseProjectTypeName%20eq%27"+portefeuilleSelect+"%27%20and%20Programme%20eq%27"+ProgrammeSelect+"%27%20and%20Types_de_Projet%20eq%27Page_Maitre%27";
    //console.log("lesProjetsProgramme==  "+lesProjetsProgramme);
    function LoadAllProjectsPrograme() {

                $.ajax({url:  lesProjetsProgramme,          
                                        method: "GET",
                                        dataType: "json",
                                        headers: {Accept: "application/json;odata=verbose"},       
                                        success: function(data) {     
                                        responseProjectProgramName = responseProjectProgramName.concat(data.d.results);
                                            if (data.d.__next) {
                                                lesProjetsProgramme = data.d.__next;
                                                LoadAllProjectsPrograme();
                                            }          
                              
                $.each(responseProjectProgramName, function(key, value) 
                {           
                        
                    var nomProjet = value.ProjectName;  
                    var prId= value.ProjectId;  
                      
                    
                           $('#mylist4').append($('<option>',
                               {
                                  text : nomProjet,
                                  value : prId
                                })); 

                                var opt = {};
                                  $("#mylist4 > option").each(function () {
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
    LoadAllProjectsPrograme();





    //*************************glissement********************************************************************//
var urlDateGlissementFiltreProgram1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectStartDate,ProjectFinishDate&$filter=EnterpriseProjectTypeName%20eq%27"+portefeuilleSelect+"%27%20and%20Programme%20eq %27"+ProgrammeSelect+"%27";
var responseDateGlissementFiltreProgram1 = responseDateGlissementFiltreProgram1 ||[];

function getDateGlissementFiltreProgram1(){
  $.ajax({url:  urlDateGlissementFiltreProgram1,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseDateGlissementFiltreProgram1 = responseDateGlissementFiltreProgram1.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDateGlissementFiltreProgram1 = data.d.__next;
                                            getDateGlissementFiltreProgram1();
                                        } 
                var idProjetG=[];
                var dateDebProjetG=[];
                var dateFinProjetG=[];
                var dateFinRefG=[];
                  
            $.each(responseDateGlissementFiltreProgram1, function(key, value) 
            { 
              
                var idP=value.ProjectId;
               var projStartDate=value.ProjectStartDate;
               var projfinshtDate=value.ProjectFinishDate;
               if (idProjetG.indexOf(idP)==-1) {
                idProjetG.push(idP);
                dateDebProjetG.push(projStartDate);
                dateFinProjetG.push(projfinshtDate);
                dateFinRefG.push("");
               }
              
               

            });
calculGlissementGlobalFiltreProgram1(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG);


}   
});
}
getDateGlissementFiltreProgram1();

var urlDateBaseGlissementFiltreProgram1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectBaselineFinishDate";
var responseBaseDateGlissementFiltreProgram1 = responseBaseDateGlissementFiltreProgram1 ||[];
function calculGlissementGlobalFiltreProgram1(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG){
   $.ajax({url:  urlDateBaseGlissementFiltreProgram1,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseBaseDateGlissementFiltreProgram1 = responseBaseDateGlissementFiltreProgram1.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDateBaseGlissementFiltreProgram1 = data.d.__next;
                                            calculGlissementGlobalFiltreProgram1(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG);
                                        } 
                                        var durReel=[];
                                        var durRef=[];
                                        var glissArray=[];
                                        var avgGliss=0;
                                        var sumGliss=0;
                  
              
            $.each(responseBaseDateGlissementFiltreProgram1, function(key, value) 
            { 
              var idProjBaseline=value.ProjectId;
              var finRefProj=value.ProjectBaselineFinishDate;
              for (var i =0; i<idProjetG.length; i++) {
                if (idProjBaseline==idProjetG[i]) {
                  dateFinRefG[i]=finRefProj;
                }

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
                //console.log("gliss= "+gliss);
                glissArray.push(gliss);
              }
            }
            //console.log("glissArray= "+glissArray.join());
            for (var i = 0; i < glissArray.length; i++) {
              sumGliss+=parseFloat(glissArray[i])
            }
            //console.log("sumGliss= "+ sumGliss);
            if (glissArray.length>0) {
              avgGliss=parseFloat(sumGliss/glissArray.length).toFixed(0);
            }else{
              avgGliss=0;
            }
            //console.log("avgGliss= "+avgGliss);
            document.getElementById("GlissementProjet").innerHTML=avgGliss+"%";
}           
});
}
//*************************fin glissement********************************************************************//
//***************************KPI nombre projet **************************************//
var responseAllNumberPrFiltreProgram1 = responseAllNumberPrFiltreProgram1 || [];
var urlAllProjectNumberFiltreProgram1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,Programme,EnterpriseProjectTypeName,Types_de_Projet&$filter=EnterpriseProjectTypeName%20eq%27"+portefeuilleSelect+"%27%20and%20Programme%20eq%27"+ProgrammeSelect+"%27";
function LoadAllProjectTotalFiltreProgram1()
{
  

  $.ajax({url: urlAllProjectNumberFiltreProgram1,     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {    
                    responseAllNumberPrFiltreProgram1 = responseAllNumberPrFiltreProgram1.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlAllProjectNumberFiltreProgram1 = data.d.__next;
                                            LoadAllProjectTotalFiltreProgram1();
                                        } 
                               
            var nbre = 0;
                      // var nbrePG = 0;
                      // var nbrePR = 0;
                      var arrPortefeuille=[];
                      var arrStructOrg=[];
            $.each(responseAllNumberPrFiltreProgram1, function(key, value) 
            {
                var nomProjet = value.ProjectName;
                          var projectType = value.Types_de_Projet;

                          if(projectType =='Page_Maitre'){
                            if (nomProjet != null) {
                                nbre++;
                            }
                          }
                            var structOrg=value.Programme;
                            if ((structOrg!=null)&&(arrStructOrg.indexOf(structOrg)<0)) {
                              arrStructOrg.push(structOrg);
                            }
                          console.log("arrStructOrg= "+arrStructOrg);
                          var portefeuille=value.EnterpriseProjectTypeName;
                          if ((portefeuille!=null)&&(arrPortefeuille.indexOf(portefeuille)<0)) {
                            arrPortefeuille.push(portefeuille);
                          }
            });  
            
            document.getElementById("NombreProjet").innerHTML = nbre; 
            document.getElementById("NombreProgramme").innerHTML = arrStructOrg.length; 
            document.getElementById("NombrePortefeuille").innerHTML = arrPortefeuille.length;  
 

          
        }
});
}
LoadAllProjectTotalFiltreProgram1();

//****************************fin nombre projet *********************************//
//*****************************KPI Risque problemes **********************************//

function LoadProblemGlobalFiltreProgram1()
{
  var nbreIssue = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues",     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;              
          
            $.each(dataResults, function(key, value) 
            {
                 var titreIssue = value.Title;
                 if(titreIssue != null)
                  {
                    nbreIssue ++;
                  }
                  
            });  
            document.getElementById("ProblemNumber").innerHTML = nbreIssue;             
        }
});
}
LoadProblemGlobalFiltreProgram1();


//Load Number Of All Risks
function LoadRisksGlobalFiltreProgram1()
{
  var nbreRisks = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks",     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;              
          
            $.each(dataResults, function(key, value) 
            {
                 var titreRisks = value.Title;
                 if(titreRisks != null)
                  {
                    nbreRisks ++;
                  }
                  
            });  
            document.getElementById("RiskNumber").innerHTML = nbreRisks;             
        }
});
}
LoadRisksGlobalFiltreProgram1();
//************************************ fin risques problemes *********************//

//********************************** travail, cout variance, cout projet**********************//

  var responseAllTicketsGlobalFiltreProgram1 = responseAllTicketsGlobalFiltreProgram1 || [];
  var urlDataLeftGlobalFiltreProgram1= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectActualCost,ProjectCostVariance,ProjectWork,ProjectWorkVariance,ProjectPercentCompleted&$filter=EnterpriseProjectTypeName%20eq%27"+portefeuilleSelect+"%27%20and%20Programme%20eq%27"+ProgrammeSelect+"%27";
function LoadAllDataLeftGlobalFiltreProgram1()
{
    var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;
  var pourcentageAchevementGlobal = 0;


  var sommeCoutReel = 0;
            var sommeCoutRestant = 0

                $.ajax({url:urlDataLeftGlobalFiltreProgram1,                          
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseAllTicketsGlobalFiltreProgram1 = responseAllTicketsGlobalFiltreProgram1.concat(data.d.results);
                    if (data.d.__next) {
                      urlDataLeftGlobalFiltreProgram1 = data.d.__next;
                      LoadAllDataLeftGlobalFiltreProgram1();
                    }
                    var c=0;
                    //console.log("link= "+_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectCostVariance,ProjectWork,ProjectWorkVariance,ProjectPercentCompleted");
        $.each(responseAllTicketsGlobalFiltreProgram1, function(key, value) 
        {                 
              var pCost = parseInt(value.ProjectCost);
              //console.log("pCost= "+pCost);
              var pcostVar = parseInt(value.ProjectCostVariance);
              var pwork = parseInt(value.ProjectWork);
              var pwvariance = parseInt(value.ProjectWorkVariance);
              var pourcentageAchevement = parseInt(value.ProjectPercentCompleted);

              projCost = projCost + pCost;
              projcostvariance = projcostvariance+pcostVar;
              projWork= projWork+ pwork;
              pworkvariance = pworkvariance + pwvariance;
              pourcentageAchevementGlobal = parseInt(pourcentageAchevementGlobal + pourcentageAchevement);

                                var coutReel=parseFloat(value.ProjectActualCost).toFixed(0);
                        //sommeCoutPlan=parseFloat(parseFloat(sommeCoutPlan)+parseFloat(coutPlan)).toFixed(0);
                        sommeCoutReel=parseFloat(parseFloat(sommeCoutReel)+parseFloat(coutReel)).toFixed(0);

            sommeCoutRestant = parseFloat(projCost).toFixed(0) - parseFloat(sommeCoutReel).toFixed(0);


              c++;
              

        });
            console.log("c= "+c);
            var moyAchev =  parseFloat(pourcentageAchevementGlobal/c).toFixed(0);
          //document.getElementById("GlissementProjet").innerHTML = conToMill();
          document.getElementById("CostProject").innerHTML = conToMill(projCost);
                    document.getElementById("CostConsomProject").innerHTML = conToMill(sommeCoutReel);
          document.getElementById("CostRestProject").innerHTML = conToMill(sommeCoutRestant);

          document.getElementById("CostVariance").innerHTML = conToMill(projcostvariance);
      document.getElementById("WorkVariance").innerHTML = conToMill(projWork);
       document.getElementById('pourach').innerHTML = moyAchev + "%";
        
        }   
  });
 }
 LoadAllDataLeftGlobalFiltreProgram1();


}
else
{
        $("#mainSection").css("display", "none");
    $("#jalonTab").css("display", "none");
    
    //$('#mylist4').prop("disabled", true);
    $('#mylist4').empty().append('<option value="" selected disabled>NOM DE PROJETS</option>');

    document.getElementById('nomProjectName').innerHTML = "";
}

}


