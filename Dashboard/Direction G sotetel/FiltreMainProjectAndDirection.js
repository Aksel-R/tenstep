



function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function Remove_optionsForSelect()
{
$('#filtreDirectionprojet')
    .empty()
    .append('<option value="" selected disabled>Les projets</option>');
}


     //var responsesprint1 = responsesprint1 || []; 
 



function MainFilterDirectionProject(){
  var directionSelectedProj = document.getElementById("filtreSousDirection").value;

  //console.log(directionSelectedProj);

document.getElementById("filtreSousDirection").addEventListener("change", function(){

   //console.log('This Value is', this.value);
});





if(directionSelectedProj != "")
{

var exercice=document.getElementById("exerciceDates").value;
    //console.log("exercice selectionner= "+exercice);
    var exercice1 = 0;

    exercice1 = parseInt(exercice)+1;



    var periodeUrl="";
    var periodeUrl1="";
    


  if (exercice!="") {
      periodeUrl="&$filter=ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27";
      periodeUrl0="?$filter=ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27";
      periodeUrl1="%20and%20ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27";
      
    }


  $('#tittreTab1').hide();
  $('#tittreTab2').show();
  $('#tittreTab3').hide();

  $('#lastdateupdate').hide();

        $("#sous_direct1").hide(); 
      $("#sous_direct2").show(); 
    $("#sous_direct3").hide();

//*************************************Filter myTable************************************************************************************************************************//
 tableaux = document.getElementById("myTable");
     tr1 = tableaux.getElementsByTagName("tr");
     if(tr1.length>0){        
          $('#myTable tbody').empty();
     }
//input = document.getElementById("filtreSousDirection");
var LinkClientFlterProjectAndDirection="";

  console.log("directionSelectedProj= "+directionSelectedProj);
  if(directionSelectedProj == "ServiceInfrastructure.RA AND B")
  {
    var directionSelectedProjs = "ServiceInfrastructure.RA";
    LinkClientFlterProjectAndDirection = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,Montant,ProjectWorkVariance,ProjectCostVariance,ProjectWork,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName&$filter=startswith(Direction,'"+directionSelectedProj+"') eq true"+periodeUrl1;  
  }
  else{
    LinkClientFlterProjectAndDirection = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,Montant,ProjectWorkVariance,ProjectCostVariance,ProjectWork,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName&$filter=Direction eq '"+directionSelectedProj+"'"+periodeUrl1;
  }



  ////console.log("LinkClientFlterProjectAndDirection= "+LinkClientFlterProjectAndDirection);
  var responseFlterProjectAndDirection = responseFlterProjectAndDirection || [];
function LoadFlterProjectAndDirection() {

            $.ajax({url: LinkClientFlterProjectAndDirection,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseFlterProjectAndDirection = responseFlterProjectAndDirection.concat(data.d.results);
                              if (data.d.__next) {
                                LinkClientFlterProjectAndDirection = data.d.__next;
                                LoadFlterProjectAndDirection();
                              }    
                                 var sumMont=0;
                                 var sumAch=0;
                                 var nbProj=0;
                                 var sumCost=0;
                                 var projcostvariance=0;
                                 projWork=0;
                                 var pworkvariance = 0;
                                  
            $.each(responseFlterProjectAndDirection, function(key, value) 
            { 
            nbProj++;          
                                 var projCostes = 0;   
              moment.locale('fr');

                var directProject = value.Direction;

                 if(directProject =="ServiceInfrastructure.RA&B")
                {
                  directProject = "ServiceInfrastructure.RA AND B";
                }
                else
                {

                  directProject = directProject;
                }
                
                var client = value.Client;  
                var nomProjet = value.ProjectName;
                var pOwner = value.ProjectOwnerName;
                var projCostess = parseFloat(value.Montant).toFixed(3);

               var  mont = parseFloat(value.Montant);
               if(!isNaN(mont))
                  {                   
                    sumMont=parseFloat(parseFloat(sumMont)+parseFloat(mont));
                  } 
                 if(!isNaN(projCostess))
                  {
                    projCostes = projCostess;            
                    sumCost=parseFloat(parseFloat(sumCost)+parseFloat(projCostess));       
                  } 
                  var pcostVar = parseFloat(value.ProjectCostVariance);
                  projcostvariance = parseFloat(parseFloat(projcostvariance)+parseFloat(pcostVar));
                  var pwork = parseFloat(value.ProjectWork);
                  projWork= parseFloat(parseFloat(projWork)+ parseFloat(pwork));

                  var pwvariance = parseFloat(value.ProjectWorkVariance);
                  pworkvariance = parseFloat(parseFloat(pworkvariance) + parseFloat(pwvariance)).toFixed(2);

                var projStartDate = moment(value.ProjectStartDate).format('L');
        var projfinishdate = moment(value.ProjectFinishDate).format('L');
        var projetTermine = parseFloat(value.ProjectPercentCompleted).toFixed(0);
        sumAch=parseFloat(parseFloat(sumAch)+parseFloat(projetTermine)).toFixed(0);
        var identifiantProjet = value.ProjectId;

        if(client == null)
        {
            client = "Pas de client sur ce projet";
           } 
                 
                  var tr;
                    tr = $("<tr class='even pointer'>");
                        tr.append("<td style='width: 14%; text-align: left;'>" +client+"</td>"); //1
                        tr.append("<td style='width: 18%; text-align: left;'>" + nomProjet +" </td>"); //11 //11
                        tr.append("<td><a href='https://sotetel.spps.tn/pwa/project%20detail%20pages/schedule.aspx?projuid="+identifiantProjet+"&ret=0' id='redirectLink' target='_blank'><img src='/PWA/_catalogs/masterpage/Dashboard/img/link.png' class='img-rounded' alt='Cinque Terre' width='20px' height='20px'></a></td>");

                        tr.append("<td style='width: 9%'>" + pOwner +" </td>"); //12
                        tr.append("<td style='width: 10%'>" + conToMill(projCostes) +" </td>"); //13
                        tr.append("<td style='width: 10%'>" + projStartDate +"</td>"); //14
                        tr.append("<td style='width: 10%'>" + projfinishdate +" </td>"); //15
                        tr.append('<td style="text-align:center;width: 16%">'+projetTermine+'%<progress id="" max="100" value="'+projetTermine+'" style="width: 100%"></progress></td>');
                        tr.append("<td style='display:none;'>"+directProject+"</td>"); //16
                        tr.append("</tr>");
                    $('#myTable tbody').append(tr);
                      

            });
            //console.log("sumAch---= "+parseFloat(sumAch/nbProj).toFixed(0));
      //       var moyAch=parseFloat(sumAch/nbProj).toFixed(0);
      //       if (isNaN(moyAch)) {
      //         moyAch=0;
      //       }
      //  document.getElementById("MontantProjets").innerHTML = conToMill(parseFloat(sumMont).toFixed(3)); 

      //  document.getElementById("TauxAvancement").innerHTML = moyAch + "%";  
      //       document.getElementById("pourach").innerHTML=moyAch + "%";    
      //       var valeurPercent =moyAch;
      //       $(".progress").attr("data-percentage", valeurPercent.toString());  

      //       document.getElementById("NombreProjet").innerHTML = nbProj;
      //       document.getElementById("prcount").innerHTML = nbProj; 

      //       document.getElementById("prcost").innerHTML = conToMill(sumCost);
      //     document.getElementById("cvariance").innerHTML = conToMill(projcostvariance);
      //     document.getElementById("prwork").innerHTML = conToMill(projWork);
      // document.getElementById("wrvariance").innerHTML = conToMill(pworkvariance);

              
}   
});  

}
LoadFlterProjectAndDirection();






if(directionSelectedProj == "ServiceInfrastructure.RA AND B")

  {
    var directionSelectedProjs = "ServiceInfrastructure.RA";
  var urlDirectionProjects = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId&$filter=startswith(Direction,'"+directionSelectedProjs+"') eq true"+periodeUrl1;
    
  }
  else{

  var urlDirectionProjects = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId&$filter=Direction eq '"+directionSelectedProj+"'"+periodeUrl1;
  }
 
      var responseDirectionProjects = responseDirectionProjects || []; 
function LoadProjectsForSelect() {
  //Remove_optionsForSelect();
            $.ajax({url:  urlDirectionProjects, 
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {   
                                    responseDirectionProjects = responseDirectionProjects.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDirectionProjects = data.d.__next;
                                            LoadProjectsForSelect();
                                        }
                          var listItemInfo2 = "";            
            $.each(responseDirectionProjects, function(key, value) 
            {           
                  
                var nomDesProjets = value.ProjectName;
                var ProjectId = value.ProjectId;  
                
                                 
                       $('#filtreDirectionprojet').append($('<option>',
                           {
                              text : nomDesProjets,
                              value:ProjectId
                              
                            })); 

                            var opt = {};
                              $("#filtreDirectionprojet > option").each(function () {
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
LoadProjectsForSelect();






  
if(directionSelectedProj == 'ServiceInfrastructure.RA AND B')
{
  var directionSelectedProjColumn = "ServiceInfrastructure.RA";
  var urlTotalProject = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Montant,ProjectPercentCompleted,ProjectName&$filter=startswith(Direction,'"+directionSelectedProjColumn+"')%20eq%20true"+periodeUrl1;  
}
else {
  var directionSelectedProj = directionSelectedProj;
  var urlTotalProject = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Montant,ProjectPercentCompleted,ProjectName&$filter=Direction eq '"+directionSelectedProj+"'"+periodeUrl1;
}
//Load Number Of All Project Somme sur EPPM
var responseMDirectionProject = responseMDirectionProject || []; 

function LoadAllNumberEnTeteMDirection()
{
  
  var nbre = 0;
  var montantProjet=0;
  var projPercentCompl=0;
  $.ajax({url: urlTotalProject,     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseMDirectionProject = responseMDirectionProject.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlTotalProject = data.d.__next;
                                            LoadAllNumberEnTeteMDirection();
                                        }             
          
            $.each(responseMDirectionProject, function(key, value) 
            {
                 var nomProjet = value.ProjectName;

                 if(nomProjet)
                  {
                    nbre ++;
                  }

                  var  mont = parseFloat(value.Montant);
                  

                  if(!isNaN(mont))
                  {
                    montantProjet = montantProjet + mont;
                  }

                var projTermine = parseInt(value.ProjectPercentCompleted);

                if(!isNaN(projTermine))
                {
                  projPercentCompl = projPercentCompl + projTermine;
                }
                  
            });  

            ////console.log(montantProjet);
            //document.getElementById("NombreProjet").innerHTML = nbre;   
            document.getElementById("MontantProjets").innerHTML = conToMill(parseFloat(montantProjet).toFixed(3)); 
            //console.log(parseFloat(montantProjet/nbre).toFixed(3));
            document.getElementById("TauxAvancement").innerHTML = parseFloat(projPercentCompl/nbre).toFixed(0) + "%";  
            document.getElementById("pourach").innerHTML=parseFloat(projPercentCompl/nbre).toFixed(0) + "%";    
            var valeurPercent =parseFloat(projPercentCompl/nbre).toFixed(0);
            $(".progress").attr("data-percentage", valeurPercent.toString());     
          
        }
});
}
LoadAllNumberEnTeteMDirection();

//Load Number Of All Project

if(directionSelectedProj == 'ServiceInfrastructure.RA AND B')
{
  var directionSelectedProjColumn = "ServiceInfrastructure.RA";
  var urlLeftColumnSomme = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$inlinecount=allpages&$filter=startswith(Direction,'"+directionSelectedProjColumn+"')%20eq%20true"+periodeUrl1;  
}
else {
var urlLeftColumnSomme = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$inlinecount=allpages&$filter=Direction eq '"+directionSelectedProj+"'"+periodeUrl1;
}
function LoadAllNumberProjectPrMDirection()
{
  var nbre = 0;

  $.ajax({url: urlLeftColumnSomme,     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;              
          
            $.each(dataResults, function(key, value) 
            {
                 var nomProjet = value.ProjectName;
                 if(nomProjet != null)
                  {
                    nbre ++;
                  }
                  
            });  
            document.getElementById("NombreProjet").innerHTML = nbre; 
            document.getElementById("prcount").innerHTML = nbre;             
        }
});
}
LoadAllNumberProjectPrMDirection();




if(directionSelectedProj == 'ServiceInfrastructure.RA AND B')
{
  var directionSelectedProjColumn = "ServiceInfrastructure.RA";
  var urlLeftColumnSousDirection = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=startswith(Direction,'"+directionSelectedProjColumn+"')%20eq%20true"+periodeUrl1;  
}
else {
var urlLeftColumnSousDirection = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=Direction eq '"+directionSelectedProj+"'"+periodeUrl1;
}

  var responseAllTicketsFilterMDirection = responseAllTicketsFilterMDirection || [];
function LeftColumnsFilterMDirection()
{
    var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;
//var urlLeftColumnSousDirection = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=startswith(Direction,'"+directionSelectedProj+"')%20eq%20true";
                $.ajax({url: urlLeftColumnSousDirection,                          
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseAllTicketsFilterMDirection = responseAllTicketsFilterMDirection.concat(data.d.results);
                    if (data.d.__next) {
                      urlAllTickets = data.d.__next;
                      LeftColumnsFilterMDirection();
                    }
                    
        $.each(responseAllTicketsFilterMDirection, function(key, value) 
        {                 
              var pCost = parseInt(value.ProjectCost);
              var pcostVar = parseInt(value.ProjectCostVariance);
              var pwork = parseInt(value.ProjectWork);
              var pwvariance = parseInt(value.ProjectWorkVariance);


              projCost = projCost + pCost;
              projcostvariance = projcostvariance+pcostVar;
              projWork= projWork+ pwork;
              pworkvariance = pworkvariance + pwvariance;


        });


          document.getElementById("prcost").innerHTML = conToMill(projCost);
          document.getElementById("cvariance").innerHTML = conToMill(projcostvariance);
          document.getElementById("prwork").innerHTML = conToMill(projWork);
      document.getElementById("wrvariance").innerHTML = conToMill(pworkvariance);
        }   
  });
 }
 LeftColumnsFilterMDirection();


/*if(directionSelectedProj == "ServiceInfrastructure.RA&B")

  {
    var directionSelectedProjss = "ServiceInfrastructure.RA";
  var LinkClient = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction,ProjectCost,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName,Direction&$filter=startswith(Direction,'"+directionSelectedProjss+"') eq true";
    
  }
  else{

  var LinkClient = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction,ProjectCost,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName,Direction&$filter=Direction eq '"+directionSelectedProj+"'";
  }
  var responseAllClientMDirection = responseAllClientMDirection || [];

function LoadTableProjectsClientFilterMDirection() {


            $.ajax({url: LinkClient,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseAllClientMDirection = responseAllClientMDirection.concat(data.d.results);
                              if (data.d.__next) {
                                LinkClient = data.d.__next;
                                LoadTableProjectsClientFilterMDirection();
                              }    
                                    
                                  
            $.each(responseAllClientMDirection, function(key, value) 
            {           
                moment.locale('fr');
                var direction = value.Direction;
                var client = value.Client;  
                var nomProjet = value.ProjectName;
                var pOwner = value.ProjectOwnerName;
                var projCost = parseFloat(value.ProjectCost).toFixed(3);
                var projStartDate = moment(value.ProjectStartDate).format('L');
                var projfinishdate = moment(value.ProjectFinishDate).format('L');
                var projetTermine = parseFloat(value.ProjectPercentCompleted).toFixed(0);

            if(client != null)
            {
                        var tr;
                        tr = $("<tr class='even pointer'>");
                            tr.append("<td>"+client+"</td>"); //1
                            tr.append("<td >" + nomProjet +" </td>"); //11
                            tr.append("<td >" + pOwner +" </td>"); //12
                            tr.append("<td >" + projCost +" </td>"); //13
                            tr.append("<td >" + projStartDate +" </td>"); //14
                            tr.append("<td >" + projfinishdate +" </td>"); //15
                            tr.append("<td >" + projetTermine + "% </td>"); //16
                            tr.append("<td>"+direction+"</td>");
                            tr.append("</tr>");
                        $('#myTable tbody').append(tr);
            }                

            });
            //$('#myTable').DataTable();

              
}   
});  

}                                  
LoadTableProjectsClientFilterMDirection();*/


if(directionSelectedProj == "ServiceInfrastructure.RA AND B")

  {
    var directionSelectedProj = "ServiceInfrastructure.RA";
    var LinkProjetData = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=startswith(Direction,'"+directionSelectedProj+"') eq true"+periodeUrl1;
  }else{

  var LinkProjetData = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=Direction eq '"+directionSelectedProj+"'"+periodeUrl1;
  }

  //Project Name achevevement des directions
  function DoughnutChartFilterMDirection()
  {
    

      $.ajax({
                  url: LinkProjetData,

  method: "GET",
    headers: { "Accept": "application/json;odata=verbose"},
success: function (data) {
      var CalculPercent = 0;
      var DirecProj="";
      var CalculPercent1 = 0;
      var DirecProj1="";
      var CalculPercent2 = 0;
      var DirecProj2="";
      var CalculPercent3 = 0;
      var DirecProj3="";
      var nomProjetDirection="";
      var nbrPr1=0;
      var nbrPr2=0;
      var nbrPr3=0;
      var nbrPr4=0;

      if (data.d.results.length > 0) {
        

            var pieValues = [];
            var pieLabels = [];
            

            for (var i = 0; i < data.d.results.length; i++) {
              
      
                
                  nomProjetDirection = data.d.results[i].ProjectName;
                
                CalculPercent1=  parseInt(data.d.results[i].ProjectPercentCompleted);
              
                
              

          pieLabels.push(nomProjetDirection);
                  pieValues.push(parseFloat(CalculPercent1).toFixed(0));
        

            }
                  
      
      var ctx1 = document.getElementById("projchart");
      ctx1.height = 600;
      if (window.myPieChart1 != undefined)
      {
        window.myPieChart1.destroy();
      }

      var ValeurMax = 100;


window.myPieChart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: pieLabels ,
    datasets: [{
      data: pieValues,
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
    }]
  },
  options:{
    responsive: true,
  
  legend: { display: false },
    plugins:{
  labels: {
    render: 'label',
    fontColor: '#000',
    position: 'outside'
  }
},

    scales: {
        xAxes: [{
          ticks: {minRotation: 90 },
          display: true,
          scaleLabel: {
            display: true,
            labelString: '% Pourcentage achévevement'

          },
      
        }],
        yAxes: [{
          display: true,
          //type: 'logarithmic',
          ticks: {
                    beginAtZero:true,
                    min: 0,
                    max: 100
                },
          scaleLabel: {
              display: true,
              labelString: 'Noms des projets'
            },

        }]
      }  },
});

           
            }
        },
        error: function (data) {
            
        }
    });
  }


DoughnutChartFilterMDirection();






}


//******************************************************************End Of Filter*************************************************************
else
{


  var exercice=document.getElementById("exerciceDates").value;

    var exercice1 = 0;

    exercice1 = parseInt(exercice)+1;



    var periodeUrl="";
    var periodeUrl1="";
    


  if (exercice!="") {
      periodeUrl="&$filter=ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27";
      periodeUrl0="?$filter=ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27";
      periodeUrl1="%20and%20ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27";
      
    }
$('#lastdateupdate').hide();
  $('#tittreTab1').show();
  $('#tittreTab2').hide();
  $('#tittreTab3').hide();

      $("#sous_direct1").show(); 
      $("#sous_direct2").hide(); 
    $("#sous_direct3").hide();

tableaux = document.getElementById("myTable");
     tr1 = tableaux.getElementsByTagName("tr");
     if(tr1.length>0){        
          $('#myTable tbody').empty();
     }
var directionSelected1 = document.getElementById("filtreDirection").value;
var LinkClientFlterSousDirectionVide="";

if (directionSelected1!=""){    
  if(directionSelected1 == "ServiceConvergent")
  {
    var directionSelectedProjs = "ServiceConvergent";
    LinkClientFlterSousDirectionVide = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,Montant,ProjectWorkVariance,ProjectCostVariance,ProjectWork,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName&$filter=startswith(Direction,'"+directionSelectedProjs+"') eq true"+periodeUrl1;  
  }
  else if(directionSelected1 == "ServiceInfrastructure")
  {
    var directionSelectedProjs = "ServiceInfrastructure";
    LinkClientFlterSousDirectionVide = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,Montant,ProjectWorkVariance,ProjectCostVariance,ProjectWork,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName&$filter=startswith(Direction,'"+directionSelectedProjs+"') eq true"+periodeUrl1;  
  }
  else{
    LinkClientFlterSousDirectionVide = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,Montant,ProjectWorkVariance,ProjectCostVariance,ProjectWork,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName&$filter=Direction eq '"+directionSelected1+"'"+periodeUrl1;
  }
}else{
  LinkClientFlterSousDirectionVide = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,Montant,ProjectWorkVariance,ProjectCostVariance,ProjectWork,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName"+periodeUrl;
}
    




  var responseClientFlterSousDirectionVide = responseClientFlterSousDirectionVide || [];
function LoadClientFlterSousDirectionVide() {

            $.ajax({url: LinkClientFlterSousDirectionVide,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseClientFlterSousDirectionVide = responseClientFlterSousDirectionVide.concat(data.d.results);
                              if (data.d.__next) {
                                LinkClientFlterSousDirectionVide = data.d.__next;
                                LoadClientFlterSousDirectionVide();
                              }    
                                 var sumMont=0;
                                 var sumAch=0;
                                 var nbProj=0;
                                 var sumCost=0;
                                 var projcostvariance=0;
                                 projWork=0;
                                 var pworkvariance = 0;
                                  
            $.each(responseClientFlterSousDirectionVide, function(key, value) 
            { 
            nbProj++;          
                                 var projCostes = 0;   
              moment.locale('fr');

                var directProject = value.Direction;

                 if(directProject =="ServiceInfrastructure.RA&B")
                {
                  directProject = "ServiceInfrastructure.RA AND B";
                }
                else
                {

                  directProject = directProject;
                }
                
                var client = value.Client;  
                var nomProjet = value.ProjectName;
                var pOwner = value.ProjectOwnerName;
                var projCostess = parseFloat(value.Montant).toFixed(3);

               var  mont = parseFloat(value.Montant);
               if(!isNaN(mont))
                  {                   
                    sumMont=parseFloat(parseFloat(sumMont)+parseFloat(mont));
                  } 
                 if(!isNaN(projCostess))
                  {
                    projCostes = projCostess;            
                    sumCost=parseFloat(parseFloat(sumCost)+parseFloat(projCostess));       
                  } 
                  var pcostVar = parseFloat(value.ProjectCostVariance);
                  projcostvariance = parseFloat(parseFloat(projcostvariance)+parseFloat(pcostVar));
                  var pwork = parseFloat(value.ProjectWork);
                  projWork= parseFloat(parseFloat(projWork)+ parseFloat(pwork));

                  var pwvariance = parseFloat(value.ProjectWorkVariance);
                  pworkvariance = parseFloat(parseFloat(pworkvariance) + parseFloat(pwvariance)).toFixed(2);

                var projStartDate = moment(value.ProjectStartDate).format('L');
        var projfinishdate = moment(value.ProjectFinishDate).format('L');
        var projetTermine = parseFloat(value.ProjectPercentCompleted).toFixed(0);
        sumAch=parseFloat(parseFloat(sumAch)+parseFloat(projetTermine)).toFixed(0);
        var identifiantProjet = value.ProjectId;

        if(client == null)
        {
            client = "Pas de client sur ce projet";
           } 
                 
                  var tr;
                    tr = $("<tr class='even pointer'>");
                        tr.append("<td style='width: 14%; text-align: left;'>" +client+"</td>"); //1
                        tr.append("<td style='width: 18%; text-align: left;'>" + nomProjet +" </td>"); //11 //11
                        tr.append("<td><a href='https://sotetel.spps.tn/pwa/project%20detail%20pages/schedule.aspx?projuid="+identifiantProjet+"&ret=0' id='redirectLink' target='_blank'><img src='/PWA/_catalogs/masterpage/Dashboard/img/link.png' class='img-rounded' alt='Cinque Terre' width='20px' height='20px'></a></td>");

                        tr.append("<td style='width: 9%'>" + pOwner +" </td>"); //12
                        tr.append("<td style='width: 10%'>" + conToMill(projCostes) +" </td>"); //13
                        tr.append("<td style='width: 10%'>" + projStartDate +"</td>"); //14
                        tr.append("<td style='width: 10%'>" + projfinishdate +" </td>"); //15
                        tr.append('<td style="text-align:center;width: 16%">'+projetTermine+'%<progress id="" max="100" value="'+projetTermine+'" style="width: 100%"></progress></td>');
                        tr.append("<td style='display:none;'>"+directProject+"</td>"); //16
                        tr.append("</tr>");
                    $('#myTable tbody').append(tr);
                      

            });
            //console.log("sumAch---= "+parseFloat(sumAch/nbProj).toFixed(0));
      //       var moyAch=parseFloat(sumAch/nbProj).toFixed(0);
      //       if (isNaN(moyAch)) {
      //         moyAch=0;
      //       }
      //  document.getElementById("MontantProjets").innerHTML = conToMill(parseFloat(sumMont).toFixed(3)); 

      //  document.getElementById("TauxAvancement").innerHTML = moyAch + "%";  
      //       document.getElementById("pourach").innerHTML=moyAch + "%";    
      //       var valeurPercent =moyAch;
      //       $(".progress").attr("data-percentage", valeurPercent.toString());  

      //       document.getElementById("NombreProjet").innerHTML = nbProj;
      //       document.getElementById("prcount").innerHTML = nbProj; 

      //       document.getElementById("prcost").innerHTML = conToMill(sumCost);
      //     document.getElementById("cvariance").innerHTML = conToMill(projcostvariance);
      //     document.getElementById("prwork").innerHTML = conToMill(projWork);
      // document.getElementById("wrvariance").innerHTML = conToMill(pworkvariance);
              
}   
});  

}
LoadClientFlterSousDirectionVide();
//Load Number Of All Project Somme sur EPPM
var responseAllProjectNumber = responseAllProjectNumber || [];
var urlAllProjectNumber = LinkClientFlterSousDirectionVide;
function LoadAllProjectNameTotal()
{
  var nbre = 0;
  var montantProjet=0;
  var projPercentCompl=0;


  $.ajax({url: urlAllProjectNumber,     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {    
                    responseAllProjectNumber = responseAllProjectNumber.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlAllProjectNumber = data.d.__next;
                                            LoadAllProjectNameTotal();
                                        } 
                               
          
            $.each(responseAllProjectNumber, function(key, value) 
            {
                  var nomProjet = value.ProjectName;

                 if(nomProjet)
                  {
                    nbre ++;
                  }

                  var  mont = parseFloat(value.Montant);
                  

                  if(!isNaN(mont))
                  {
                    montantProjet = montantProjet + mont;
                  }

                var projTermine = parseInt(value.ProjectPercentCompleted);

                if(!isNaN(projTermine))
                {
                  projPercentCompl = projPercentCompl + projTermine;
                }
                  
            });  

            ////console.log(montantProjet);
            //document.getElementById("NombreProjet").innerHTML = nbre;   
            document.getElementById("MontantProjets").innerHTML = conToMill(parseFloat(montantProjet).toFixed(3)); 
            //console.log(parseFloat(montantProjet/nbre).toFixed(3));
            document.getElementById("TauxAvancement").innerHTML = parseFloat(projPercentCompl/nbre).toFixed(0) + "%";  
            document.getElementById("pourach").innerHTML=parseFloat(projPercentCompl/nbre).toFixed(0) + "%";    
            var valeurPercent =parseFloat(projPercentCompl/nbre).toFixed(0);
            $(".progress").attr("data-percentage", valeurPercent.toString());  
          
        }
});
}
LoadAllProjectNameTotal();




//Load Number Of All Issues
function LoadProblem()
{
  var nbreIssue = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues?",     
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
            document.getElementById("actIssue").innerHTML = nbreIssue;             
        }
});
}
LoadProblem();


//Load Number Of All Risks
function LoadRisks()
{
  var nbreRisks = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks?",     
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
            document.getElementById("actRisk").innerHTML = nbreRisks;             
        }
});
}
LoadRisks();










var directionSelected1 = document.getElementById("filtreDirection").value;
var LinkClientFlterSousDirectionVideKPI="";

if (directionSelected1!=""){    
  if(directionSelected1 == "ServiceConvergent")
  {
    var directionSelectedProjs = "ServiceConvergent";
    LinkClientFlterSousDirectionVideKPI = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=startswith(Direction,'"+directionSelectedProjs+"') eq true"+periodeUrl1;  
  }
  else if(directionSelected1 == "ServiceInfrastructure")
  {
    var directionSelectedProjs = "ServiceInfrastructure";
    LinkClientFlterSousDirectionVideKPI = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=startswith(Direction,'"+directionSelectedProjs+"') eq true"+periodeUrl1;  
  }
  else{
    LinkClientFlterSousDirectionVideKPI = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=Direction eq '"+directionSelected1+"'"+periodeUrl1;
  }
}else{
  LinkClientFlterSousDirectionVideKPI = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects"+periodeUrl0;
}
console.log("LinkClientFlterSousDirectionVideKPI= "+LinkClientFlterSousDirectionVideKPI)

  var responseAllTickets = responseAllTickets || [];
  var linkAllDataleft =LinkClientFlterSousDirectionVideKPI;
function LoadAllDataLeft()
{
  
    var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;

                $.ajax({url: LinkClientFlterSousDirectionVideKPI,                          
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseAllTickets = responseAllTickets.concat(data.d.results);
                    if (data.d.__next) {
                      LinkClientFlterSousDirectionVideKPI = data.d.__next;
                      LoadAllDataLeft();
                    }
                    
        $.each(responseAllTickets, function(key, value) 
        {                 
              var pCost = parseInt(value.ProjectCost);
              var pcostVar = parseInt(value.ProjectCostVariance);
              var pwork = parseInt(value.ProjectWork);
              var pwvariance = parseInt(value.ProjectWorkVariance);

              if(!isNaN(pcostVar))
                {
                   projcostvariance = projcostvariance+pcostVar;
                }

              projCost = projCost + pCost;
              projWork= projWork+ pwork;
              pworkvariance = pworkvariance + pwvariance;


        });

        console.log("this.log "+conToMill(projCost));
          document.getElementById("prcost").innerHTML = conToMill(projCost);
          document.getElementById("cvariance").innerHTML = conToMill(projcostvariance);
          document.getElementById("prwork").innerHTML = conToMill(projWork);
      document.getElementById("wrvariance").innerHTML = conToMill(pworkvariance);
        }   
  });
 }
 LoadAllDataLeft();
//Load Number Of All Project
function NumberOfproject()
{
  var nbre = 0;

  $.ajax({url: linkAllDataleft,     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;              
          
            $.each(dataResults, function(key, value) 
            {
                 var nomProjet = value.ProjectName;
                 if(nomProjet)
                  {
                    nbre ++;
                  }
                  
            });  
            document.getElementById("NombreProjet").innerHTML = nbre;
            document.getElementById("prcount").innerHTML = nbre;             
        }
});
}
NumberOfproject();

//------------------------------------------------------------------------------------------------------------------------------



if (directionSelected1!=""){    
  document.getElementById("chartCartBody").innerHTML = '<canvas id="projchart" style="margin-top: 40px; " height ="230px"></canvas>'; 
  
  if(directionSelected1 == "ServiceConvergent")
  {
    var directionSelectedProjs = "ServiceConvergent";
    LinkClientFlterSousDirectionVideBar = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=startswith(Direction,'"+directionSelectedProjs+"') eq true"+periodeUrl1;  
  }
  else if(directionSelected1 == "ServiceInfrastructure")
  {
    var directionSelectedProjs = "ServiceInfrastructure";
    LinkClientFlterSousDirectionVideBar = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=startswith(Direction,'"+directionSelectedProjs+"') eq true"+periodeUrl1;  
  }
  else{
    LinkClientFlterSousDirectionVideBar = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=Direction eq '"+directionSelected1+"'"+periodeUrl1;
  }
}else{
  LinkClientFlterSousDirectionVideBar = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?"+periodeUrl0;
}

  //Project Name achevevement des directions
  function DoughnutChart()
  {
    document.getElementById("chartCartBody").innerHTML = '<canvas id="projchart" style="margin-top: 40px; " height ="230px"></canvas>'; 
      $.ajax({
    url: LinkClientFlterSousDirectionVideBar,

  method: "GET",
    headers: { "Accept": "application/json;odata=verbose"},
success: function (data) {
      var CalculPercent = 0;
      var DirecProj="";
      var CalculPercent1 = 0;
      var DirecProj1="";
      var CalculPercent2 = 0;
      var DirecProj2="";
      var CalculPercent3 = 0;
      var DirecProj3="";

      var nbrPr1=0;
      var nbrPr2=0;
      var nbrPr3=0;
      var nbrPr4=0;

      if (data.d.results.length > 0) {
        

            var pieValues = [];
            var pieLabels = [];
            

            for (var i = 0; i < data.d.results.length; i++) {
              


              if((data.d.results[i].Direction=="Direction Générale")||(data.d.results[i].Direction=="Direction Générale.IT"))
              { 
                if(data.d.results[i].ProjectName != null)
                {
                  nbrPr1++;
                }
                CalculPercent= CalculPercent + parseInt(data.d.results[i].ProjectPercentCompleted);
                //console.log(CalculPercent);
                DirecProj = "Direction Générale";
        }

        if(data.d.results[i].Direction=="Direction des Projets")
              { 
                if(data.d.results[i].ProjectName != null)
                {
                  nbrPr2++;
                }
                CalculPercent1= CalculPercent1 + parseInt(data.d.results[i].ProjectPercentCompleted);
                //console.log(CalculPercent1);
                DirecProj1 = "Direction des Projets";
        }

        if((data.d.results[i].Direction=="ServiceConvergent.Convergent.Delivery")||(data.d.results[i].Direction=="ServiceConvergent.Convergent")||(data.d.results[i].Direction=="ServiceConvergent.Convergent.Maintenance")||(data.d.results[i].Direction=="ServiceConvergent.Commercial"))
              { 
                if(data.d.results[i].ProjectName != null)
                {
                  nbrPr3++;
                }
                CalculPercent2= CalculPercent2 + parseInt(data.d.results[i].ProjectPercentCompleted);
                //console.log(CalculPercent2);
                DirecProj2 = "Direction Convergent";
        }

        if((data.d.results[i].Direction=="ServiceInfrastructure.Wireless")||(data.d.results[i].Direction=="ServiceInfrastructure.RA&B"))
              { 
                if(data.d.results[i].ProjectName != null)
                {
                  nbrPr4++;
                }
                CalculPercent3= CalculPercent3 + parseInt(data.d.results[i].ProjectPercentCompleted);
                //console.log(CalculPercent3);
                DirecProj3 = "Service Infrastructure";
        }

            }
                  
          pieLabels.push(DirecProj,DirecProj1,DirecProj2,DirecProj3);
                  pieValues.push(parseFloat(CalculPercent/nbrPr1).toFixed(0),parseFloat(CalculPercent1/nbrPr2).toFixed(0),parseFloat(CalculPercent2/nbrPr3).toFixed(0),parseFloat(CalculPercent3/nbrPr4).toFixed(0));
      
      var ctx1 = document.getElementById("projchart");
      ctx1.width=450;
      if (window.myPieChart1 != undefined)
      {
        window.myPieChart1.destroy();
      }

      var ValeurMax = 100;

window.myPieChart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: pieLabels ,
    datasets: [{
      data: pieValues,
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
    }]
  },
  options:{
    responsive: true,
  
  legend: { display: false },
    plugins:{
  labels: {
    render: 'label',
    fontColor: '#000',
    position: 'outside'
  }
},

    scales: {
        xAxes: [{
          ticks: {minRotation: 90 },
          display: true,
          scaleLabel: {
            display: true,
            labelString: '% Pourcentage achévevement'
          },
      
        }],
        yAxes: [{
          display: true,
          //type: 'logarithmic',
          ticks: {
                    beginAtZero:true,
                    min: 0,
                    max: 100
                },
          scaleLabel: {
              display: true,
              labelString: 'Noms des directions'
            },

        }]
      }  },
});

           
            }
        },
        error: function (data) {
            
        }
    });
  }


DoughnutChart();



//Load All Value in table 

//Table Project 
/*  var responseAllClient = responseAllClient || [];
function LoadTableProjectsClient() {

var LinkClient = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName&$filter=startswith(Direction,%27Direction%20Générale%27)%20eq%20true or startswith(Direction,%27Direction des projets%27)%20eq%20true or startswith(Direction,%27ServiceConvergent%27)%20eq%20true or startswith(Direction,%27ServiceInfrastructure%27)%20eq%20true";
            $.ajax({url: LinkClient,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseAllClient = responseAllClient.concat(data.d.results);
                              if (data.d.__next) {
                                LinkClient = data.d.__next;
                                LoadTableProjectsClient();
                              }    
                                    
                                  
            $.each(responseAllClient, function(key, value) 
            {           
              moment.locale('fr');

                var client = value.Client;  
                var nomProjet = value.ProjectName;
                var pOwner = value.ProjectOwnerName;
                var projCost = parseFloat(value.ProjectCost).toFixed(3);
                var projStartDate = moment(value.ProjectStartDate).format('L');
        var projfinishdate = moment(value.ProjectFinishDate).format('L');
        var projetTermine = parseFloat(value.ProjectPercentCompleted).toFixed(0);

        if(client != null)
        {
                    var tr;
                    tr = $("<tr class='even pointer'>");
                        tr.append("<td>"+client+"</td>"); //1
                        tr.append("<td >" + nomProjet +" </td>"); //11
                        tr.append("<td >" + pOwner +" </td>"); //12
                        tr.append("<td >" + projCost +" </td>"); //13
                        tr.append("<td >" + projStartDate +" </td>"); //14
                        tr.append("<td >" + projfinishdate +" </td>"); //15
                        tr.append("<td >" + projetTermine + "% </td>"); //16
                        tr.append("</tr>");
                    $('#myTable tbody').append(tr);
        }                

            });
            //$('#myTable').DataTable();

              
}   
});  

}                                  
LoadTableProjectsClient();*/
}

}