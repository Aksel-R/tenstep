
function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

  function sortDataTimeLine(dateA,dataSet){
  var changed;
    moment.locale('fr');
    do{
        changed = false;
        for(var i=0; i < dateA.length-1; i++) {
            if(moment(dateA[i]).format("YYYY-MM-DD HH:mm:ss") > moment(dateA[i+1]).format("YYYY-MM-DD HH:mm:ss")) {
                var tmp = dateA[i];
                dateA[i] = dateA[i+1];
                dateA[i+1] = tmp;

                var tmp1 = dataSet[i];
                dataSet[i] = dataSet[i+1];
                dataSet[i+1] = tmp1;

                changed = true;
            }
        }
    } while(changed);
}


function MainFunctionPortfolio()
{

    document.getElementById("overlay").style.display = "block";
      jQuery(document).ready(function() {
        jQuery('#overlay').fadeOut(2500);
        //jQuery('#wrapper').fadeIn(3000);
         
    });

$('#mylist2').empty();
$('#mylist2').append('<option value="" selected disabled>Programmes</option>');

var SousProtSelctedName=document.getElementById("mylist1").value;

document.getElementById("nomPortefeuille").innerHTML = "Plan Stratégique du portefeuille: " + SousProtSelctedName;
$("#nomChantier").hide();


if(SousProtSelctedName =="Portefeuilles")
{
        $("#detail-generale0").css("display", "block");  
    $("#detail-generale1").css("display", "block");
    $("#detail-generale2").css("display", "block");
    $("#labelHeader").css("display", "none");
    document.getElementById("nomChantier").innerHTML="Plan du Portefeuille";
    $("#chantier-details1").css("display", "none");
    $("#chantier-details2").css("display", "none");
    //$("#chantier-details3").css("display", "none");
    $("#chantier-details4").css("display", "none");
     $("#chantier-details5").css("display", "none")
     $("#chantier-details6").css("display", "none")
    $("#programme-details1").css("display", "none");
    $("#programme-details2").css("display", "none");
    $("#programme-details3").css("display", "none");
    $("#programme-details4").css("display", "none");
    $("#programme-details5").css("display", "none")
}



if (SousProtSelctedName != "Portefeuilles") {


$("#chantier-details4").css("display", "block");
$("#chantier-details5").css("display", "block");



var responseProjectDataFilter = responseProjectDataFilter ||[];
var urlProjectDataFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,Types_de_Projet&$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27";

function LoadGeneralDataFilter(){

$.ajax({url:  urlProjectDataFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseProjectDataFilter = responseProjectDataFilter.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlProjectDataFilter = data.d.__next;
                                            LoadGeneralDataFilter();
                                        }   

                var nbProject = 0;
                var nbProgram = 0;
                var nbPortfolio = 0;
                var costProjet=0;
                var costActual = 0;
                var costRest = 0;

            $.each(responseProjectDataFilter, function(key, value) 
            {           
                
                 var projName = value.ProjectName;
                 var typeProj = value.Types_de_Projet;

                 if(typeProj =="Portefeuille")
                 {
                    nbPortfolio++;
                 }

                 if(typeProj =="Programme")
                 {
                    nbProgram++;
                 }

                 if(typeProj =="Page_Maitre")
                 {
                    nbProject++;
                 }
      
           
            });

       
            document.getElementById("NbPortefeuille").innerHTML=nbPortfolio;
            document.getElementById("NbProgramme").innerHTML=nbProgram;
            document.getElementById("NbProjet").innerHTML=nbProject;
            /* document.getElementById("AchevementTotal").innerHTML="<p>"+avg+"% <progress id='' max='100' value='"+avg+"' style='width: 60%; height:10px;  background-color:green;'></progress></p>";
            document.getElementById("DateDebutPortefeuille").innerHTML=StartChant;
            document.getElementById("DateFinPortefeuille").innerHTML=FinishChant;
            document.getElementById("budgetportefeuille").innerHTML=sumbudget;*/
             
           
            
}   
});

}
LoadGeneralDataFilter();



var responseProjectDataCostFilter = responseProjectDataCostFilter ||[];
var urlProjectDataCostFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectActualCost,ProjectCostVariance,ProjectWork,ProjectActualWork,ProjectWorkVariance,ProjectPercentCompleted&$filter=Types_de_Projet eq 'Portefeuille' and EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27";

function LoadGeneralDataCostFilter(){

$.ajax({url:  urlProjectDataCostFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseProjectDataCostFilter = responseProjectDataCostFilter.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlProjectDataCostFilter = data.d.__next;
                                            LoadGeneralDataCostFilter();
                                        }   

                var pourcentageAchev = 0;
                var achevTotal=0;

                var projCost = 0;
                var projcostvariance = 0;
                var projWork = 0;
                var pworkvariance = 0;
                var sommeCoutReel = 0;
                var sommeCoutRestant = 0;
                var ProjectActualWork=0;

            $.each(responseProjectDataCostFilter, function(key, value) 
            {           
                        var achevement = value.ProjectPercentCompleted;
                        var pCost = parseInt(value.ProjectCost);
                        var pcostVar = parseInt(value.ProjectCostVariance);
                        var pwork = parseInt(value.ProjectWork);
                        var pwvariance = parseInt(value.ProjectWorkVariance);
                        var proActualWork = parseInt(value.ProjectActualWork);


                        projCost = projCost + pCost;
                        projcostvariance = projcostvariance + pcostVar;
                        projWork = projWork + pwork;
                        pworkvariance = pworkvariance + pwvariance;
                        ProjectActualWork = ProjectActualWork + proActualWork;

                        var coutReel=parseFloat(value.ProjectActualCost).toFixed(0);
                        //sommeCoutPlan=parseFloat(parseFloat(sommeCoutPlan)+parseFloat(coutPlan)).toFixed(0);
                        sommeCoutReel=parseFloat(parseFloat(sommeCoutReel)+parseFloat(coutReel)).toFixed(0);

                        sommeCoutRestant = parseFloat(projCost).toFixed(0) - parseFloat(sommeCoutReel).toFixed(0);

                        pourcentageAchev = pourcentageAchev + achevement;

                 

      
           
            });
             
            achevTotal = pourcentageAchev;

            document.getElementById("AchevementTotal").innerHTML="<p>"+achevTotal+"% <progress id='' max='100' value='"+achevTotal+"' style='width: 60%; height:10px;  background-color:green;'></progress></p>";

                    document.getElementById("prcost").innerHTML = conToMill(projCost);
                    document.getElementById("sommeCoutReel").innerHTML = conToMill(sommeCoutReel);
                    document.getElementById("couRestantPortefeuilleProProj").innerHTML = conToMill(sommeCoutRestant);

                    document.getElementById("cvariance").innerHTML = conToMill(projcostvariance);
                    document.getElementById("prwork").innerHTML = conToMill(projWork);
                    document.getElementById("wrvariance").innerHTML = conToMill(pworkvariance);
                    document.getElementById("prActualwork").innerHTML = conToMill(ProjectActualWork);
           
            
}   
});

}
LoadGeneralDataCostFilter();



/*
var urlNbrResourceFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?$select=ResourceName";
var responseNbrResourceFilter = responseNbrResourceFilter ||[];

function LoadNumberResource()
{
  $.ajax({url:  urlNbrResourceFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseNbrResourceFilter = responseNbrResource.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlNbrResource = data.d.__next;
                                            LoadNumberResourceFilter();
                                        } 
                  var nomResource="";
                  
                  var TabRess = [];
                  
            $.each(responseNbrResourceFilter, function(key, value) 
            { 
               nomResource = value.ResourceName;
               if((nomResource !=null)&&(TabRess.indexOf(nomResource)==-1)&&(nomResource!="Ressource non affectée")&&(nomResource!="Ressource locale générique")&&(nomResource!="Ressource inconnue"))
               {
                TabRess.push(nomResource);
               }



              


            });

            //console.log("Le tableau Resource " + TabRess.join());

            

            document.getElementById('Nbressourceportefeuille').innerHTML = TabRess.length;



}   
});

}
LoadNumberResourceFilter();*/

var urlDateGlissementFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectStartDate,ProjectFinishDate&$filter=Types_de_Projet eq 'Page_Maitre' and EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27";
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
                  
              
            $.each(responseBaseDateGlissementFilter, function(key, value) 
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
            avgGliss=parseFloat(sumGliss/glissArray.length).toFixed(0);
            //console.log("avgGliss= "+avgGliss);
            document.getElementById("glissementportefeuille").innerHTML=avgGliss+"%";
}           
});
}





//*********************************linetme*******************************

var responseTimeline = responseTimeline ||[];
var urlTimeline = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme,ProjectName,ProjectStartDate,ProjectFinishDate,ProjectOwnerName&$filter=Types_de_Projet eq 'Programme' and EnterpriseProjectTypeName eq '"+SousProtSelctedName+"'";
   function loadTimeLine(){

          $.ajax({url:  urlTimeline,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseTimeline = responseTimeline.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlTimeline = data.d.__next;
                                            loadTimeLine();
                                        }
                          var dureeProg;
                                                  
                          var datas=[];
                          var startArr=[];
                       
            $.each(responseTimeline, function(key, value) 
            {
              moment.locale('fr');
               var nomProj=value.ProjectName;
               var dateDeb=value.ProjectStartDate;
               
             
              
               var projStartDate = moment(dateDeb).format('L');
               var dateFin=value.ProjectFinishDate;
               var projFinishtDate = moment(dateFin).format('L');
               var projStartDate1 = moment(dateDeb);
               var projFinishtDate1 = moment(dateFin);
               var owner=value.ProjectOwnerName;
               var desc='Date début programme: '+projStartDate + ' <br> ● Date fin programme: ' + projFinishtDate;

              var dureeProj = parseFloat(moment(projFinishtDate1).diff(moment(projStartDate1), 'days', true)).toFixed(0);
              var nomProj="<tspan style='fill:#00FF00'>● </tspan><strong>Programme : "+value.ProjectName+"</strong><br>Durée (j) : "+dureeProj;
              datas.push({
                label: nomProj,
                name: desc,
                description: owner
               });
              startArr.push(moment(dateDeb));


               
               
            });

            sortDataTimeLine(startArr,datas);
            Highcharts.chart('container', {
    chart: {
        type: 'timeline'
    },
    accessibility: {
        screenReaderSection: {
            beforeChartFormat: '<h5>{chartTitle}</h5>' +
                '<div>{typeDescription}</div>' +
                '<div><h2>{chartSubtitle}</h2></div>' +
                '<div>{chartLongdesc}</div>' +
                '<div>{viewTableButton}</div>'
        },
        point: {
            valueDescriptionFormat: '{index}. {point.label}. {point.description}.'
        }
    },
    xAxis: {
        
         visible: false,
         type: 'datetime'
         
          /*dateTimeLabelFormats: {
            
            year: '%Y'
        },*/
    },
    yAxis: {
        visible: false
    },
    title: {
        text: ''+SousProtSelctedName+''
    },
    subtitle: {
        text: ''
    },
    colors: [
        '#4185F3',
        '#427CDD',
        '#406AB2',
        '#3E5A8E',
        '#3B4A68',
        '#363C46'
    ],
    series: [{
        data: datas
    }]
});
              
       }
  });
   }  
loadTimeLine();





var responseProgName = responseProgName ||[];
var urlProgram = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId&$filter=Types_de_Projet eq 'Programme' and EnterpriseProjectTypeName eq '"+SousProtSelctedName+"'";

function LoadAllPorgram() {

            $.ajax({url:  urlProgram,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseProgName = responseProgName.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlProgram = data.d.__next;
                                            LoadAllPorgram();
                                        }          
                          
            $.each(responseProgName, function(key, value) 
            {           
                
                var prog = value.ProjectName;  
                 
                
                  $('#mylist2').append($('<option>',
                           {
                              text : prog,
                              value:prog
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
LoadAllPorgram();









//-----------------------------
}
else
{
    MainDataLoadAllData();
    document.getElementById("nomPortefeuille").innerHTML = "Plan Stratégique du portefeuille";
      document.getElementById("overlay").style.display = "block";
      jQuery(document).ready(function() {
        jQuery('#overlay').fadeOut(2100);
        //jQuery('#wrapper').fadeIn(3000);
         
    });
}

}