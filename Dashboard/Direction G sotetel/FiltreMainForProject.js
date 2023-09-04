

   function filtrerTableau()
  {
    var input, input2, input3, input4, filter, filter2, filter3, filter4, table, tr, td, td2, td3, td4, i, k;
    input = document.getElementById("filtreDirectionprojet");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];

    if (td){
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
      } else {
      tr[i].style.display = "none";
      }
    }       
    }
    var numRows = document.getElementById("myTable").rows.length;
  }
  filtrerTableau();

function MainFilterProjectCentre(){
  var ProjectSelected = document.getElementById("filtreDirectionprojet").value;

  ////console.log(ProjectSelecteds);

document.getElementById("filtreDirectionprojet").addEventListener("change", function(){
  //This input has changed
   //console.log('This Value is', this.value);
});

/*var ProjectSelected = encodeURIComponent(ProjectSelecteds.replace(/'/g, "''"));
//console.log(ProjectSelected+"Aprés enleve apostrophe");*/



if(ProjectSelected != "")
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
  $('#tittreTab2').hide();
  $('#tittreTab3').show();

  $("#sous_direct1").hide(); 
      $("#sous_direct2").hide(); 
    $("#sous_direct3").show();


//Load Number Of All Project Somme sur EPPM
var responseMProject = responseMProject || []; 
function LoadAllNumberEnTeteMProject()
{
  var urlTotalProject = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Montant,ProjectPercentCompleted,ProjectName,ProjectModifiedDate&$filter=ProjectId eq guid'"+ProjectSelected+"'"+periodeUrl1;
  var nbre = 0;
  var montantProjet=0;
  var projPercentCompl=0;
  var dModif;
  $.ajax({url: urlTotalProject,     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseMProject = responseMProject.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlTotalProject = data.d.__next;
                                            LoadAllNumberEnTeteMProject();
                                        }             
          
            $.each(responseMProject, function(key, value) 
            {
              moment.locale('fr');
                 var nomProjet = value.ProjectName;

                 if(nomProjet != null)
                  {
                    nbre ++;
                  }

                  var  mont = parseInt(value.Montant);
                  

                  if(!isNaN(mont))
                  {
                    montantProjet = montantProjet + mont;
                  }
                  else
                  {
                    montantProjet = 0;
                  }
                  if(mont == undefined)
                  {
                    montantProjet=0;
                  }

                var projTermine = parseInt(value.ProjectPercentCompleted);

                if(!isNaN(projTermine))
                {
                  projPercentCompl = projPercentCompl + projTermine;
                }
                else
                {
                  projPercentCompl=0;
                }

                var derniereModification = value.ProjectModifiedDate;

                  
                dModif = moment(derniereModification).format('DD-MM-YYYY');
            });  
            
            document.getElementById("lastdateupdate").style.display = 'block';
            document.getElementById("NombreProjet").innerHTML = nbre;   
            document.getElementById("MontantProjets").innerHTML = conToMill(parseFloat(montantProjet/nbre).toFixed(3)); 
            document.getElementById("TauxAvancement").innerHTML = parseFloat(projPercentCompl/nbre).toFixed(0) + "%";  
            document.getElementById("lastUpdate").innerHTML = dModif;
            document.getElementById("pourach").innerHTML=parseFloat(projPercentCompl/nbre).toFixed(0) + "%";    
            var valeurPercent =parseFloat(projPercentCompl/nbre).toFixed(0);
            $(".progress").attr("data-percentage", valeurPercent.toString());   
          
        }
});
}
LoadAllNumberEnTeteMProject();

//Load Number Of All Project
function LoadAllNumberProjectPrMProject()
{
  var nbre = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$inlinecount=allpages&$filter=ProjectId eq guid'"+ProjectSelected+"'"+periodeUrl1,     
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
            document.getElementById("prcount").innerHTML = nbre;             
        }
});
}
LoadAllNumberProjectPrMProject();




  var responseAllTicketsFilterMProject = responseAllTicketsFilterMProject || [];
function LeftColumnsFilterMProject()
{
    var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;
var urlLeftColumnSousDirection = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectId eq guid'"+ProjectSelected+"'"+periodeUrl1;
                $.ajax({url: urlLeftColumnSousDirection,                          
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseAllTicketsFilterMProject = responseAllTicketsFilterMProject.concat(data.d.results);
                    if (data.d.__next) {
                      urlAllTickets = data.d.__next;
                      LeftColumnsFilterMDirection();
                    }
                    
        $.each(responseAllTicketsFilterMProject, function(key, value) 
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
 LeftColumnsFilterMProject();



  var responseAllClientMProject = responseAllClientMProject || [];
function LoadTableProjectsClientFilterMProject() {

var LinkClient = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectId eq guid'"+ProjectSelected+"'"+periodeUrl1;
            $.ajax({url: LinkClient,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseAllClientMProject = responseAllClientMProject.concat(data.d.results);
                              if (data.d.__next) {
                                LinkClient = data.d.__next;
                                LoadTableProjectsClientFilterMProject();
                              }    
                                   
                                   var projCost = 0; 
                                   var projCosts = 0; 
                                            
            $.each(responseAllClientMProject, function(key, value) 
            {           
                moment.locale('fr');
                var directProject = value.Direction;
                var client = value.Client;  
                var nomProjet = value.ProjectName;
                var pOwner = value.ProjectOwnerName;
                projCosts = parseFloat(value.Montant).toFixed(3);

                

                if(!isNaN(projCosts))
                  {
                    projCost = projCosts;
                  } 

                var projStartDate = moment(value.ProjectStartDate).format('L');
                var projfinishdate = moment(value.ProjectFinishDate).format('L');
                var projetTermine = parseFloat(value.ProjectPercentCompleted).toFixed(0);
                var identifiantProjet= value.ProjectId;

            if(client != null)
            {
                        var tr;
                        tr = $("<tr class='even pointer'>");
                            tr.append("<td style='width: 14%; text-align: left;'>" +client+"</td>"); //1
                        tr.append("<td style='width: 18%; text-align: left;'>" + nomProjet +" </td>"); //11 //11
                        tr.append("<td><a href='https://sotetel.spps.tn/pwa/project%20detail%20pages/schedule.aspx?projuid="+identifiantProjet+"&ret=0' id='redirectLink' target='_blank'><img src='/PWA/_catalogs/masterpage/Dashboard/img/link.png' class='img-rounded' alt='Cinque Terre' width='20px' height='20px'></a></td>");

                        tr.append("<td style='width: 9%'>" + pOwner +" </td>"); //12
                        tr.append("<td style='width: 10%'>" + conToMill(projCost) +" </td>"); //13
                        tr.append("<td style='width: 10%'>" + projStartDate +"</td>"); //14
                        tr.append("<td style='width: 10%'>" + projfinishdate +" </td>"); //15
                        tr.append('<td style="text-align:center;width: 16%">'+projetTermine+'%<progress id="" max="100" value="'+projetTermine+'" style="width: 100%"></progress></td>');
                        tr.append("<td style='display:none;'>"+directProject+"</td>"); //16
                            tr.append("</tr>");
                        $('#myTable tbody').append(tr);
            }                

            });
            //$('#myTable').DataTable();

              
}   
});  

}                                  
LoadTableProjectsClientFilterMProject();


  //Project Name achevevement des directions
  function DoughnutChartFilterMProject()
  {
    document.getElementById("chartCartBody").innerHTML = '<canvas id="projchart" style="margin-top: 40px;  "></canvas>'; 
      $.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectId eq guid'"+ProjectSelected+"'"+periodeUrl1,

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
      ctx1.height = 100;
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
          display: true,
          ticks: {
                    beginAtZero:true,
                    min: 0,
                    max: 100
                },
          scaleLabel: {
            display: true,
            labelString: 'Noms de projet'
          },
      
        }],
        yAxes: [{
          display: true,
          //type: 'logarithmic',
          scaleLabel: {
              display: true,
              labelString: '% Pourcentage achévevement'
            },
            ticks: {
                    beginAtZero:true,
                    min: 0,
                    max: 100
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


DoughnutChartFilterMProject();



//Load Number Of All Issues
function LoadProblemFilter()
{
  var nbreIssue = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues?&$filter=ProjectId eq guid'"+ProjectSelected+"'"+periodeUrl1,     
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
LoadProblemFilter();


//Load Number Of All Risks
function LoadRisksFilter()
{
  var nbreRisks = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks?&$filter=ProjectId eq guid'"+ProjectSelected+"'"+periodeUrl1,     
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
LoadRisksFilter();


}


//******************************************************************End Of Filter*************************************************************
else
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

//Load Number Of All Project Somme sur EPPM
var responseAllProjectNumber = responseAllProjectNumber || [];
var urlAllProjectNumber = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,Montant,ProjectPercentCompleted&$filter=startswith(Direction,%27Direction%20Générale%27)%20eq%20true or startswith(Direction,%27Direction des projets%27)%20eq%20true or startswith(Direction,%27ServiceConvergent%27)%20eq%20true or startswith(Direction,%27ServiceInfrastructure%27)%20eq%20true"+periodeUrl1;
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
                                            LoadAllProjectNameTotal()();
                                        } 
                               
          
            $.each(responseAllProjectNumber, function(key, value) 
            {
                 var nomProjet = value.ProjectName;

                 if(nomProjet)
                  {
                    nbre ++;
                  }

                  var  mont = parseInt(value.Montant);
                  

                  if(!isNaN(mont))
                  {
                    montantProjet = montantProjet + mont;
                  }
                  else{
                    montantProjet = 0;
                  }

                var projTermine = parseInt(value.ProjectPercentCompleted);

                if(!isNaN(projTermine))
                {
                  projPercentCompl = projPercentCompl + projTermine;
                }
                else{
                  projPercentCompl=0;
                }

                  
            });  
            
            //document.getElementById("NombreProjet").innerHTML = nbre;  
            document.getElementById("lastdateupdate").style.display = 'none'; 
            document.getElementById("MontantProjets").innerHTML = conToMill(parseFloat(montantProjet/nbre).toFixed(3)); 
            document.getElementById("TauxAvancement").innerHTML = parseFloat(projPercentCompl/nbre).toFixed(0) + "%";  
            document.getElementById("pourach").innerHTML=parseFloat(projPercentCompl/nbre).toFixed(0) + "%";    
            var valeurPercent =parseFloat(projPercentCompl/nbre).toFixed(0);
            $(".progress").attr("data-percentage", valeurPercent.toString());  
          
        }
});
}
LoadAllProjectNameTotal();


var responseAllNumberPr = responseAllNumberPr || [];
var urlAllProjectNumber = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$inlinecount=allpages&$filter=startswith(Direction,%27Direction%20Générale%27)%20eq%20true or startswith(Direction,%27Direction des projets%27)%20eq%20true or startswith(Direction,%27ServiceConvergent%27)%20eq%20true or startswith(Direction,%27ServiceInfrastructure%27)%20eq%20true"+periodeUrl1;
function LoadAllProjectTotal()
{
  var nbre = 0;

  $.ajax({url: urlAllProjectNumber,     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {    
                    responseAllNumberPr = responseAllNumberPr.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlAllProjectNumber = data.d.__next;
                                            LoadAllProjectTotal()();
                                        } 
                               
          
            $.each(responseAllNumberPr, function(key, value) 
            {
                 var nomProjet = value.ProjectName;

                 if(nomProjet)
                  {
                    nbre ++;
                  }
            });  
            
            document.getElementById("NombreProjet").innerHTML = nbre;   

          
        }
});
}
LoadAllProjectTotal();



//Load Number Of All Issues
function LoadProblem()
{
  var nbreIssue = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues?&$filter=ProjectName eq '"+ProjectSelected+"'",     
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

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks?&$filter=ProjectName eq '"+ProjectSelected+"'",     
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



//Load Number Of All Project
function NumberOfproject()
{
  var nbre = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$inlinecount=allpages&$filter=startswith(Direction,%27Direction%20Générale%27)%20eq%20true or startswith(Direction,%27Direction des projets%27)%20eq%20true or startswith(Direction,%27ServiceConvergent%27)%20eq%20true or startswith(Direction,%27ServiceInfrastructure%27)%20eq%20true"+periodeUrl1,     
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
            document.getElementById("prcount").innerHTML = nbre;             
        }
});
}
NumberOfproject();









  var responseAllTickets = responseAllTickets || [];

function LoadAllDataLeft()
{
    var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;

                $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=startswith(Direction,%27Direction%20Générale%27)%20eq%20true or startswith(Direction,%27Direction des projets%27)%20eq%20true or startswith(Direction,%27ServiceConvergent%27)%20eq%20true or startswith(Direction,%27ServiceInfrastructure%27)%20eq%20true"+periodeUrl1,                          
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseAllTickets = responseAllTickets.concat(data.d.results);
                    if (data.d.__next) {
                      urlAllTickets = data.d.__next;
                      LoadAllDataLeft();
                    }
                    
        $.each(responseAllTickets, function(key, value) 
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
 LoadAllDataLeft();


//------------------------------------------------------------------------------------------------------------------------------



  //Project Name achevevement des directions
  function DoughnutChart()
  {
    document.getElementById("chartCartBody").innerHTML = '<canvas id="projchart" style="margin-top: 40px; " height ="230px"></canvas>'; 
      $.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=startswith(Direction,%27Direction%20Générale%27)%20eq%20true or startswith(Direction,%27Direction des projets%27)%20eq%20true or startswith(Direction,%27ServiceConvergent%27)%20eq%20true or startswith(Direction,%27ServiceInfrastructure%27)%20eq%20true"+periodeUrl1,

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
  type: 'horizontalBar',
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
          display: true,
          scaleLabel: {
            display: true,
            labelString: '% Pourcentage achévevement'
          },
      
        }],
        yAxes: [{
          display: true,
          //type: 'logarithmic',
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