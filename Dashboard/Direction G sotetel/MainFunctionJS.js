
document.getElementById('filtreDirection').disabled=true;
document.getElementById('filtreSousDirection').disabled=true;
document.getElementById('filtreDirectionprojet').disabled=true;

//Load Number Of All Project Somme sur EPPM
var responseTotalSumPrDir= responseTotalSumPrDir || []; 
function LoadTotalAndSum()
{

var UrlProjectAndSumDir = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Montant,ProjectPercentCompleted,ProjectName&$filter=startswith(Direction,'ServiceConvergent') eq true or startswith(Direction,'ServiceInfrastructure') eq true or startswith(Direction,'Direction des projets') eq true or startswith(Direction,'Direction Générale') eq true";
  var nbre = 0;
  var montantProjet=0;
  var projPercentCompl=0;
var montant = 0;
  $.ajax({url: UrlProjectAndSumDir,     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {    
                    responseTotalSumPrDir = responseTotalSumPrDir.concat(data.d.results);
                                        if (data.d.__next) {
                                            UrlProjectAndSumDir = data.d.__next;
                                            LoadTotalAndSum();
                                        }  
                    //var dataResults = data.d.results;              
          
            $.each(responseTotalSumPrDir, function(key, value) 
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
LoadTotalAndSum();

function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}




//---------------------------------------------------------------------------------------------------------------------
function conToMill(num) {
if (num==0)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2))  : Math.sign(num)*Math.abs(num)
}
if (num<1000000 && num>999)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(2)) + 'K' : Math.sign(num)*Math.abs(num)
}
if (num<-999 && num>-1000000)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(2)) + 'K' : Math.sign(num)*Math.abs(num)
}
if (num<0 && num>-1000)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2)) : Math.sign(num)*Math.abs(num)
}
if (num>0 && num<1000)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2)) : Math.sign(num)*Math.abs(num)
}
if (num>999999)
{
     return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(2)) + 'M' : Math.sign(num)*Math.abs(num)
}
if (num<-999999)
{
     return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(2)) + 'M' : Math.sign(num)*Math.abs(num)
}

if (num>9999999999)
{
     return Math.abs(num) > 9999999999 ? Math.sign(num)*((Math.abs(num)/1000000000).toFixed(2)) + 'B' : Math.sign(num)*Math.abs(num)
}

}


//Load Number Of All Issues
window.addEventListener('load',function() {
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
            document.getElementById("actIssue").innerHTML = nbreIssue;             
        }
});
});


//Load Number Of All Risks
window.addEventListener('load',function() {
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
            document.getElementById("actRisk").innerHTML = nbreRisks;             
        }
});
});


//Load Number Of All Project
window.addEventListener('load',function() {
  var nbre = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$inlinecount=allpages&$select=ProjectName",     
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
});







  var responseAllTickets = responseAllTickets || [];

window.addEventListener('load',function() {
    var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;

                $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",                          
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseAllTickets = responseAllTickets.concat(data.d.results);
                    if (data.d.__next) {
                      urlAllTickets = data.d.__next;
                      GetAllTickets();
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
 });

//------------------------------------------------------------------------------------------------------------------------------



  //Project Name achevevement des directions
  function DoughnutChart()
  {
    document.getElementById("chartCartBody").innerHTML = '<canvas id="projchart" style="margin-top: 40px; " height ="230px"></canvas>'; 
      $.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction,ProjectPercentCompleted,ProjectName",

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
          ticks: {
                    beginAtZero:true,
                    min: 0,
                    max: 100
                },
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
var LinkClient = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,Montant,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName";
  var responseAllClient = responseAllClient || [];
function LoadTableProjectsClient() {

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

               

                 if(!isNaN(projCostess))
                  {
                    projCostes = projCostess;
                  } 

                var projStartDate = moment(value.ProjectStartDate).format('L');
        var projfinishdate = moment(value.ProjectFinishDate).format('L');
        var projetTermine = parseFloat(value.ProjectPercentCompleted).toFixed(0);
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
            

              
}   
});  

}                                  
  LoadTableProjectsClient();

