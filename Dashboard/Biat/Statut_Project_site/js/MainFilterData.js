function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}


/*      var idProjet;
    var nomProjects;*/
    ExecuteOrDelayUntilScriptLoaded(getProjectUIDProperty, "sp.js");

    function getProjectUIDProperty() {
        var ctx = new SP.ClientContext.get_current();
        this.web = ctx.get_web();
        this.props = this.web.get_allProperties();
        ctx.load(this.web);
        ctx.load(this.props);
        ctx.executeQueryAsync(Function.createDelegate(this, FilterData));
    }

function FilterData()

{

var idProjet = this.props.get_item('MSPWAPROJUID');
//var nomProjects = this.props.get_item('MSPWAPROJUID');

  document.getElementById("overlay").style.display = "block";
  jQuery(document).ready(function() {
    jQuery('#overlay').fadeOut(2000);
    //jQuery('#wrapper').fadeIn(3000);
     
});


/*   document.getElementById("myChart2Div").innerHTML='<canvas id="myChart2" width="500" height="350"></canvas>';
   document.getElementById("myChart3Div").innerHTML='<canvas id="myChart3" width="500" height="350"></canvas>';*/
/*  $("#mainSection").css("display", "block");
  $("#jalonTab").css("display", "block");
tableJalTer = document.getElementById("msTable");
     trJalTer = tableJalTer.getElementsByTagName("tr");
     if(trJalTer.length>0){         
          $('#msTable tbody').empty();
     }
     tableJalRet = document.getElementById("msTableer");
     trJalRet = tableJalRet.getElementsByTagName("tr");
     if(trJalRet.length>0){         
          $('#msTableer tbody').empty();
     }
     tableJalAv = document.getElementById("msTableav");
     trJalAv = tableJalAv.getElementsByTagName("tr");
     if(trJalAv.length>0){         
          $('#msTableav tbody').empty();
   
  var idProjet = document.getElementById("mylist4").value;
  var nomProjects =  getSelectedText("mylist4");
  }*/





  if(idProjet !="")
  {
var responseJalonTer= responseJalonTer || [];
var urlJalonsTer="/_api/ProjectData/[en-US]/Tasks?$select=ProjectId,TaskName,TaskIsMilestone,TaskStartDate,TaskFinishDate,TaskPercentCompleted&$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";




function loadJalonTer(){
    
    
    $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + urlJalonsTer,   
                      
                                  method: "GET",
                                  dataType: "json",
                                  headers: {Accept: "application/json;odata=verbose"},       
                                  success: function(data) {     
                                    responseJalonTer = responseJalonTer.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlJalonsTer = data.d.__next;
                                            loadJalonTer();
                                        }  
                                        var countTer=0;
                                        var countRet=0;
                                        var countAv=0;
                $.each(responseJalonTer, function(key, value) 
                {                 
                    moment.locale('fr');
                    var finJJal = value.TaskFinishDate;
                    var finJallon=moment(finJJal).format('YYYY-MM-DD');
                    var dFinJal=moment(finJJal).format('DD-MM-YYYY');
                    var today=moment().format('YYYY-MM-DD');
                    var jalon=value.TaskIsMilestone;
                    

                    var idProj = value.ProjectId;
                   
                    var nomJal = value.TaskName;
                    var debutProjet = value.TaskStartDate;
                    var startJal=moment(debutProjet).format('YYYY-MM-DD');
                    var dStartJal=moment(debutProjet).format('YYYY-MM-DD');
                    
                    var achev = value.TaskPercentCompleted;
                    

                    var tablems = document.getElementById("msTable");
                    if (jalon==true) {
                         if ((moment(finJallon).isSameOrBefore(today))&&(achev==100)) {
                            
                              var trMilTer;
               trMilTer = $("<tr>");
              
               trMilTer.append("<td>" + nomJal +"</td>");
               trMilTer.append("<td>" + dStartJal +"</td>");
               trMilTer.append("<td>" + achev +"%</td>");
               
               $('#msTable').append(trMilTer);
               countTer++;

                         }


                         if ((moment(finJallon).isSameOrBefore(today))&&(achev<100)) {
                              
                              var trMilRet;
               trMilRet = $("<tr>");
              
               trMilRet.append("<td>" + nomJal +"</td>");
               trMilRet.append("<td>" + dStartJal +"</td>");
               trMilRet.append("<td>" + achev +"%</td>");
               
               $('#msTableer').append(trMilRet);
               countRet++;

                         }



                         if ((moment(today).isBefore(startJal))&&(achev==0)) {
                              ////console.log("nomJal av= "+nomJal);
                              var trMilAv;
               trMilAv = $("<tr>");
              
               trMilAv.append("<td>" + nomJal +"</td>");
               trMilAv.append("<td>" + dStartJal +"</td>");
               trMilAv.append("<td>" + achev +"%</td>");
               
               $('#msTableav').append(trMilAv);
               countAv++;
                         }

                    }
               
                    
                        

                        
                        
                        
                        
                      




        });



     
     if(countTer>0){      
          $("#jlon1").show();
     }else{
          $("#jlon1").hide();
     }


     
     if(countRet>0){         
          $("#jlon2").show();
     }else{
          $("#jlon2").hide();
     }

    
     if(countAv>0){         
          $("#jlon3").show();
     }else{
          $("#jlon3").hide();
     }





    }   
    });


}
loadJalonTer();

var responseGlissement = responseGlissement ||[];
     var urlGlissement = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectDuration,ProjectId&$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";
     
     function filterGlissement(){
      
          $.ajax({url:  urlGlissement,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseGlissement = responseGlissement.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlGlissement = data.d.__next;
                                            filterGlissement();
                                        }   
                                        
                                       // var tabDuration=[];

                                           
                          
            $.each(responseGlissement, function(key, value) 
            {
           
              var projectDuration=value.ProjectDuration;
         
               //document.getElementById("baseDuration").innerHTML;

                //console.log("baselineDuration= "+baselineDuration);
               
             filterBaseline(idProjet,projectDuration);
               
            });
            
            
            
       }
  });
          
}
filterGlissement();


var responseBaseline = responseBaseline ||[];
     var urlBaseline = _spPageContextInfo.webServerRelativeUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectBaselineDuration,ProjectId,ProjectBaselineFinishDate";
     //console.log("urlBaseline= "+urlBaseline);
     function filterBaseline(idProjet,projectDuration){
        
          $.ajax({url:  urlBaseline,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseBaseline = responseBaseline.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlBaseline = data.d.__next;
                                            filterBaseline(idProjet,projectDuration);
                                        }    
                                           var tabIds=[];
                                           var baselineDuration=0;
                          
            $.each(responseBaseline, function(key, value) 
            {
              //console.log("idProjet= "+idProjet);
              if (value.ProjectId==idProjet) {

                    baselineDuration=value.ProjectBaselineDuration;
                    baselinefinish = value.ProjectBaselineFinishDate;
                }               

            });
            //console.log("baselineDuration= "+baselineDuration);
            var glissement=((parseFloat(projectDuration)-parseFloat(baselineDuration))/parseFloat(projectDuration))*100;
            if (glissement<0 || isNaN(glissement)) {glissement=0;}
               document.getElementById("GlissementProjet").innerHTML=parseFloat(glissement).toFixed(0)+"%";

               //GetListItemsDetailsProjet(baselinefinish);
       }
  });

}


var add= _spPageContextInfo.siteAbsoluteUrl +"/_api/ProjectData/[en-US]/Tasks?$select=TaskOutlineNumber,TaskName,TaskPercentCompleted&$filter=ProjectId%20eq%20guid%27"+idProjet+"%27%20and%20TaskIsSummary%20eq%20true";
var UrlTravailResource= _spPageContextInfo.siteAbsoluteUrl +  "/_api/ProjectData/[en-US]/Assignments?$filter=ProjectId%20eq%20guid%27"+idProjet+"%27&$Select=ResourceName,AssignmentWork&$orderby=ProjectName,ResourceName";
 var responseResource =  responseResource ||[];
console.log("UrlTravailResource " + UrlTravailResource);

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
            else
            {
  if (dataResults.length <= 0)
{
    window.myPieChart2.destroy();
}
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
              //console.log("dataResults[i].TaskPercentCompleted= "+parseInt(dataResults[i].TaskPercentCompleted));
              //console.log("dataResults[i].TaskName= "+dataResults[i].TaskName);
              var valeurTaskComp=0;
              if (!isNaN(dataResults[i].TaskPercentCompleted)){
                valeurTaskComp=parseFloat(dataResults[i].TaskPercentCompleted);
              }
              
                pieValues.push(valeurTaskComp);
                pieLabels.push(dataResults[i].TaskName);
        
            }
            //console.log("pieValues= "+pieValues);
            //console.log("pieLabels= "+pieLabels);
            /*var pieData = {
                datasets: [{
                    data: pieValues,
          backgroundColor: colorChart,
                }],

                labels: pieLabels
            };*/
            var ctx = document.getElementById("myChart2");
      if (window.myPieChart != undefined)
{
    window.myPieChart.destroy();
}
//
            window.myPieChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pieLabels,
        datasets: [{
            label: '% achevé',
            data: pieValues,
            backgroundColor: colorChart,
            borderColor: colorChart,
            borderWidth: 1
        }]
    },
    options: {
    responsive: true,
  
  legend: { display: false },
      title: {
        display: true,
        text: ''
      },
    scales: {
      xAxes: [{
        ticks: {
          maxRotation: 90,
          minRotation: 90,
      fontSize: 10
        },
        scaleLabel: {
                                      display: true,
                                      fontSize: 15,
                                      labelString: "Pourcentage achevé"}
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        scaleLabel: {
                                      display: true,
                                      fontSize: 15,
                                      labelString: "Nom des phases"}
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
var urlDetailsProjet = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,ProjectOwnerName,Descriptionduprojet,ProjectPercentCompleted,ProjectModifiedDate,ProjectLastPublishedDate,ProjectDuration,ProjectStartDate,ProjectFinishDate,Programme,EnterpriseProjectTypeName&$filter=ProjectId eq guid'"+idProjet+"'";
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

                var portfolio;
                var projetnom;

                var datereeldebut;
                var datefinreel;
                var ProjectId;

                $.each(responseDetailsProjet, function(key, value)  {
                  moment.locale('fr');
                     nomProjet = value.ProjectName;
                     chefProjet = value.ProjectOwnerName;
                     direction = value.Programme;
                     if (direction==null) {
                      direction="pas de Programme";
                     }
                     //console.log("direction= "+direction)
                     dureeprojet = parseFloat(value.ProjectDuration).toFixed(0);
                     //console.log("dureeprojet= "+dureeprojet);
                     datedebut = moment(value.ProjectStartDate).format('DD-MM-YYYY');
                     datefin = moment(value.ProjectFinishDate).format('DD-MM-YYYY');
                     descriptionProjet = value.Descriptionduprojet;
                     ProjectPercentCompleted = parseFloat(value.ProjectPercentCompleted).toFixed(0);

                     portfolio = value.EnterpriseProjectTypeName;
                     console.log('portfolio ' + portfolio);
                     projetnom = value.ProjectName;

                    
                     datereeldebut = moment(value.ProjectModifiedDate).format("YYYY-MM-DD HH:mm:ss");
                     datefinreel = moment(value.ProjectLastPublishedDate).format("YYYY-MM-DD HH:mm:ss");
                     ProjectId = value.ProjectId;

                });
                
/*
         
         document.getElementById('nomProjectName').innerHTML = nomProjet + "&nbsp;&nbsp;" + "<a href=https://m365x56447071.sharepoint.com/sites/Secteur_Bank/project%20detail%20pages/schedule.aspx?projuid="+ProjectId+"&ret=0 id='redirectLink' target='_blank'><img src='/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/portFolioDashboard/img/link.png' class='img-rounded' alt='Cinque Terre' width='20px' height='20px'></a>";
*/


        document.getElementById('ProtefeuilleProjet').innerHTML = portfolio;
        document.getElementById('ProjetNameProjet').innerHTML = projetnom;


        document.getElementById('chefProjet').innerHTML = chefProjet;

        document.getElementById('directionProjet').innerHTML = direction;
        document.getElementById('dureeProjet').innerHTML =dureeprojet + "H";
        document.getElementById('dateDebutProjet').innerHTML = datedebut;
        document.getElementById('dateFinProjet').innerHTML = datefin;

        document.getElementById('dateDebutReelProjet').innerHTML = datereeldebut;
        //document.getElementById('dateFinReelProjet').innerHTML = datefinreel;




        if(descriptionProjet !="")
        {
          document.getElementById('descriptionProjet').innerHTML = descriptionProjet;
        }else
        {
          document.getElementById('descriptionProjet').innerHTML = "";  
        }


        document.getElementById('pourach').innerHTML = ProjectPercentCompleted + "%";
        //$(".progress").attr("data-percentage", ProjectPercentCompleted.toString()); 



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
    var sommeCoutReel = 0;
            var sommeCoutRestant = 0

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

                   var coutReel=parseFloat(value.ProjectActualCost).toFixed(0);
                        //sommeCoutPlan=parseFloat(parseFloat(sommeCoutPlan)+parseFloat(coutPlan)).toFixed(0);
                        sommeCoutReel=parseFloat(parseFloat(sommeCoutReel)+parseFloat(coutReel)).toFixed(0);

            sommeCoutRestant = parseFloat(projCost).toFixed(0) - parseFloat(sommeCoutReel).toFixed(0);


        });


          //document.getElementById("GlissementProjet").innerHTML = conToMill();
          document.getElementById("CostProject").innerHTML = conToMill(projCost);
                    document.getElementById("CostConsomProject").innerHTML = conToMill(sommeCoutReel);
          document.getElementById("CostRestProject").innerHTML = conToMill(sommeCoutRestant);

          document.getElementById("CostVariance").innerHTML = conToMill(projcostvariance);
      document.getElementById("WorkVariance").innerHTML = conToMill(projWork);
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