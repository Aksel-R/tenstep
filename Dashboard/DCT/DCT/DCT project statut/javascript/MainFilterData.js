function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}


function FilterData()

{

  var idProjet = document.getElementById("mylist4").value;
  var nomProjects =  getSelectedText("mylist4");

  if((idProjet !="")&&(nomProjects !=""))
  {



console.log("le nom de projet est : " + nomProjects);
var add= _spPageContextInfo.siteAbsoluteUrl +"/_api/ProjectData/[en-US]/Tasks?$select=TaskOutlineNumber,TaskName,TaskPercentCompleted&$filter=ProjectName%20eq%20%27"+nomProjects+"%27%20and%20TaskIsProjectSummary%20eq%20false";
var UrlTravailResource= _spPageContextInfo.siteAbsoluteUrl +  "/_api/ProjectData/[en-US]/Assignments?$filter=ProjectName%20eq%20%27"+nomProjects+"%27&$Select=ResourceName,AssignmentWork&$orderby=ProjectName,ResourceName";
 var responseResource =  responseResource ||[];


$.ajax({
    url: UrlTravailResource,

  
    
  method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;
               

  
        if (dataResults.length > 0) {

           var reducedObject = {};
            for (var i = 0; i < dataResults.length; i++) {
                    if (!reducedObject[dataResults[i].ResourceName]) {
          
                        reducedObject[dataResults[i].ResourceName] = 0;
                }
                reducedObject[dataResults[i].ResourceName] += parseInt(dataResults[i].AssignmentWork);
            }
           
            var keys = Object.keys(reducedObject);
            var pieLabels = [];
            var pieValues = [];
            for (var i = 0; i < keys.length; i++) {
                    pieValues.push(reducedObject[keys[i]]);
                pieLabels.push(keys[i]);
        
            }
      
      
            var pieData = {
                datasets: [{
          borderColor: "#80b6f4",
            pointBorderColor: "#80b6f4",
            pointBackgroundColor: "#80b6f4",
            pointHoverBackgroundColor: "#80b6f4",
            pointHoverBorderColor: "#80b6f4",
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBorderWidth: 1,
            pointRadius: 2,
            fill: false,
            borderWidth: 1,
                    data: pieValues
          
                }],

                labels: pieLabels
            };
            var ctx = document.getElementById("myChart3");

                              if (window.myPieChart2 != undefined)
{
    window.myPieChart2.destroy();
}
//
            window.myPieChart2 = new Chart(ctx, {
                    
                    type: 'line',
                    data: pieData,
          options: {
    responsive: true,
  legend: { display: false },
      title: {
        display: false,
        text: 'Travail par ressource'
      },
    scales: {
      xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    maxRotation: 90,
                    minRotation: 90,
          fontSize:10
                }
            }],
      yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }

            }]
    }
  }
                   
                   
                });
            }
        },
        error: function (data) {
            
        }
    });



  //------------------------------------
$.ajax({
    url:  add,

  
  method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;
  
        if (dataResults.length > 0) {

            var pieValues = [];
            var pieLabels = [];

            for (var i = 0; i < dataResults.length; i++) {
                pieValues.push(parseInt(dataResults[i].TaskPercentCompleted));
                pieLabels.push(dataResults[i].TaskName);
        
            }
            var pieData = {
                datasets: [{
                    data: pieValues,
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                }],

                labels: pieLabels
            };
            var ctx = document.getElementById("myChart2");
      if (window.myPieChart != undefined)
{
    window.myPieChart.destroy();
}
//
            window.myPieChart = new Chart(ctx, {
                    
                    type: 'bar',
                    data: pieData,
          options: {
    responsive: true,
  
  legend: { display: false },
      title: {
        display: true,
        text: 'Pourcentage d\'achevement des phases'
      },
    scales: {
      xAxes: [{
        ticks: {
          maxRotation: 90,
          minRotation: 90,
      fontSize: 10
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
                   
                   
                });
        //myPieChart.destroy();

            }
        },
        error: function (data) {
            //
        }
    });









    var responseDetailsProjet = responseDetailsProjet || [];  // this variable is used for storing list items
var urlDetailsProjet = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectOwnerName,ProjectDescription,ProjectPercentCompleted,ProjectDuration,Direction,ProjectStartDate,ProjectFinishDate&$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";
    function GetListItemsDetailsProjet(){
        return $.ajax({
            url: urlDetailsProjet,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseDetailsProjet = responseDetailsProjet.concat(data.d.results);
                if (data.d.__next) {
                    urlDetailsProjet = data.d.__next;
                    GetListItemsDetailsProjet();
                }
                  
                var chefProjet;
                var direction;
                var dureeprojet;
                var datedebut;
                var datefin;
                var descriptionProjet;
                var ProjectPercentCompleted;
                var nomProjet;

                $.each(responseDetailsProjet, function(key, value)  {
                  moment.locale('fr');
                     nomProjet = value.ProjectName;
                     chefProjet = value.ProjectOwnerName;
                     direction = value.Direction;
                     dureeprojet = parseFloat(value.ProjectDuration).toFixed(0);
                     datedebut = moment(value.ProjectStartDate).format('DD-MM-YYYY');
                     datefin = moment(value.ProjectFinishDate).format('DD-MM-YYYY');
                     descriptionProjet = value.ProjectDescription;
                     ProjectPercentCompleted = parseFloat(value.ProjectPercentCompleted).toFixed(0);

                });
                

         
         document.getElementById('nomProjectName').innerHTML = nomProjet;

        document.getElementById('chefProjet').innerHTML = chefProjet;

        document.getElementById('directionProjet').innerHTML = direction;
        document.getElementById('dureeProjet').innerHTML =dureeprojet ;
        document.getElementById('dateDebutProjet').innerHTML = datedebut;
        document.getElementById('dateFinProjet').innerHTML = datefin;
        if(descriptionProjet !="")
        {
          document.getElementById('descriptionProjet').innerHTML = descriptionProjet;
        }else
        {
          document.getElementById('descriptionProjet').innerHTML = "";  
        }


        document.getElementById('pourach').innerHTML = ProjectPercentCompleted + "%";
        $(".progress").attr("data-percentage", ProjectPercentCompleted.toString()); 



            }
        });
      }

GetListItemsDetailsProjet();






  var responseAllTickets = responseAllTickets || [];

function LoadAllDataLeft()
{
    var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;

                $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectId eq guid'"+idProjet+"'",                          
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


          document.getElementById("GlissementProjet").innerHTML = conToMill(projCost);
          document.getElementById("CostProject").innerHTML = conToMill(projcostvariance);
          document.getElementById("CostVariance").innerHTML = conToMill(projWork);
      document.getElementById("WorkVariance").innerHTML = conToMill(pworkvariance);
        }   
  });
 }
 LoadAllDataLeft();



//Load Number Of All Issues
function LoadProblem()
{
  var nbreIssue = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues?&$filter=ProjectId eq guid'"+idProjet+"'",     
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
LoadProblem();


//Load Number Of All Risks
function LoadRisks()
{
  var nbreRisks = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks?&$filter=ProjectId eq guid'"+idProjet+"'",     
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
LoadRisks();











}

}
