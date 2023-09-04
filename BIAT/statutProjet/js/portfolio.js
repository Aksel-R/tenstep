function loadProjectPortfolio(){




var portefeuilleSelect=document.getElementById("mylist3").value;
if (portefeuilleSelect!="") {//*******************************//

$("#mainSection").css("display", "none");
$("#jalonTab").css("display", "none");
$('#mylist2').prop("disabled", false);
$('#mylist2').empty().append('<option value="" selected disabled>STRUCTURE ORGANISATIONNELLE</option>');
$('#mylist4').prop("disabled", false);
$('#mylist4').empty().append('<option value="" selected disabled>NOM DE PROJETS</option>');



    var responseProjectName = responseProjectName ||[];
    var lesProjets = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,Programme&$filter=EnterpriseProjectTypeName%20eq%27"+portefeuilleSelect+"%27";
console.log('lesProjets '+lesProjets);
    function LoadAllProjects() {

                $.ajax({url:  lesProjets,          
                                        method: "GET",
                                        dataType: "json",
                                        headers: {Accept: "application/json;odata=verbose"},       
                                        success: function(data) {     
                                        responseProjectName = responseProjectName.concat(data.d.results);
                                            if (data.d.__next) {
                                                lesProjets = data.d.__next;
                                                LoadAllProjects();
                                            }          
                              
                $.each(responseProjectName, function(key, value) 
                {           
                        
                    var nomProjet = value.Programme;  
                    var prId= value.ProjectId;  
                      
                    
                           $('#mylist2').append($('<option>',
                               {
                                  text : nomProjet,
                                  value : nomProjet
                                })); 

                                var opt = {};
                                  $("#mylist2 > option").each(function () {
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
    LoadAllProjects();


    //*************************glissement********************************************************************//
var urlDateGlissementFiltre1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectStartDate,ProjectFinishDate&$filter=EnterpriseProjectTypeName%20eq%27"+portefeuilleSelect+"%27";
console.log("urlDateGlissementFiltre1 "+urlDateGlissementFiltre1);
var responseDateGlissementFiltre1 = responseDateGlissementFiltre1 ||[];

function getDateGlissementFiltre1(){
  $.ajax({url:  urlDateGlissementFiltre1,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseDateGlissementFiltre1 = responseDateGlissementFiltre1.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDateGlissementFiltre1 = data.d.__next;
                                            getDateGlissementFiltre1();
                                        } 
                var idProjetG=[];
                var dateDebProjetG=[];
                var dateFinProjetG=[];
                var dateFinRefG=[];
                  
            $.each(responseDateGlissementFiltre1, function(key, value) 
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
calculGlissementGlobalFiltre1(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG);


}   
});
}
getDateGlissementFiltre1();

var urlDateBaseGlissementFiltre1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectBaselineFinishDate";
var responseBaseDateGlissementFiltre1 = responseBaseDateGlissementFiltre1 ||[];
function calculGlissementGlobalFiltre1(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG){
   $.ajax({url:  urlDateBaseGlissementFiltre1,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseBaseDateGlissementFiltre1 = responseBaseDateGlissementFiltre1.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDateBaseGlissementFiltre1 = data.d.__next;
                                            calculGlissementGlobalFiltre1(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG);
                                        } 
                                        var durReel=[];
                                        var durRef=[];
                                        var glissArray=[];
                                        var avgGliss=0;
                                        var sumGliss=0;
                  
              
            $.each(responseBaseDateGlissementFiltre1, function(key, value) 
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
var responseAllNumberPrFiltre1 = responseAllNumberPrFiltre1 || [];
var urlAllProjectNumberFiltre1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,Programme,EnterpriseProjectTypeName,Types_des_projets&$filter=EnterpriseProjectTypeName%20eq%27"+portefeuilleSelect+"%27";
function LoadAllProjectTotalFiltre1()
{
  

  $.ajax({url: urlAllProjectNumberFiltre1,     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {    
                    responseAllNumberPrFiltre1 = responseAllNumberPrFiltre1.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlAllProjectNumberFiltre1 = data.d.__next;
                                            LoadAllProjectTotalFiltre1();
                                        } 
                               
                    var nbre = 0;
                      // var nbrePG = 0;
                      // var nbrePR = 0;
                      var arrPortefeuille=[];
                      var arrStructOrg=[];
            $.each(responseAllNumberPrFiltre1, function(key, value) 
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
LoadAllProjectTotalFiltre1();

//****************************fin nombre projet *********************************//
//*****************************KPI Risque problemes **********************************//

function LoadProblemGlobalFiltre1()
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
LoadProblemGlobalFiltre1();


//Load Number Of All Risks
function LoadRisksGlobalFiltre1()
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
LoadRisksGlobalFiltre1();
//************************************ fin risques problemes *********************//

//********************************** travail, cout variance, cout projet**********************//

  var responseAllTicketsGlobalFiltre1 = responseAllTicketsGlobalFiltre1 || [];
  var urlDataLeftGlobalFiltre1= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectActualCost,ProjectCostVariance,ProjectWork,ProjectWorkVariance,ProjectPercentCompleted&$filter=EnterpriseProjectTypeName%20eq%27"+portefeuilleSelect+"%27%20and%20Types_de_Projet%20eq%27Portefeuille%27";
console.log('urlDataLeftGlobalFiltre1 '+urlDataLeftGlobalFiltre1);
function LoadAllDataLeftGlobalFiltre1()
{
    var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;
  var pourcentageAchevementGlobal = 0;

  var sommeCoutReel = 0;
            var sommeCoutRestant = 0

                $.ajax({url:urlDataLeftGlobalFiltre1,                          
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseAllTicketsGlobalFiltre1 = responseAllTicketsGlobalFiltre1.concat(data.d.results);
                    if (data.d.__next) {
                      urlDataLeftGlobalFiltre1 = data.d.__next;
                      LoadAllDataLeftGlobalFiltre1();
                    }
                    var c=0;
                    //console.log("link= "+_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectCostVariance,ProjectWork,ProjectWorkVariance,ProjectPercentCompleted");
        $.each(responseAllTicketsGlobalFiltre1, function(key, value) 
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
 LoadAllDataLeftGlobalFiltre1();

//******************************* fin ***************************************//
}else{
    $("#mainSection").css("display", "none");
    $("#jalonTab").css("display", "none");

    $('#mylist4').prop("disabled", true);
    $('#mylist4').empty().append('<option value="" selected disabled>NOM DE PROJETS</option>');

    $('#mylist2').prop("disabled", true);
    $('#mylist2').empty().append('<option value="" selected disabled>PROGRAMME</option>');

    document.getElementById('nomProjectName').innerHTML = "";
    mainLoad();
}




}

