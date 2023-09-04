

  



function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function Remove_optionsForSelectSousDirection()
{
    $('#filtreSousDirection')
    .empty()
    .append('<option value="">Les sous_direction</option>');
    $('#filtreDirectionprojet')
    .empty()
    .append('<option value="" selected disabled>Les projets</option>');
}


     //var responsesprint1 = responsesprint1 || []; 
 



function MainFilterSousDirection(){
  var directionSelected = document.getElementById("filtreDirection").value;

  //console.log(directionSelected);

document.getElementById("filtreDirection").addEventListener("change", function(){

   console.log('This Value is', this.value);
});








if(directionSelected != "")
{
    var exercice=document.getElementById("exerciceDates").value;
    console.log("exercice selectionner= "+exercice);
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
var LinkClientFlterDirection="";

  if(directionSelected1 == "ServiceConvergent")
  {
    var directionSelectedProjs = "ServiceConvergent";
    LinkClientFlterDirection = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,Montant,ProjectWorkVariance,ProjectCostVariance,ProjectWork,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName&$filter=startswith(Direction,'"+directionSelectedProjs+"') eq true"+periodeUrl1;  
  }
  else if(directionSelected1 == "ServiceInfrastructure")
  {
    var directionSelectedProjs = "ServiceInfrastructure";
    LinkClientFlterDirection = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,Montant,ProjectWorkVariance,ProjectCostVariance,ProjectWork,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName&$filter=startswith(Direction,'"+directionSelectedProjs+"') eq true"+periodeUrl1;  
  }
  else{
    LinkClientFlterDirection = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,Montant,ProjectWorkVariance,ProjectCostVariance,ProjectWork,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName&$filter=Direction eq '"+directionSelected1+"'"+periodeUrl1;
  }




  var responseClientFlterDirection = responseClientFlterDirection || [];
function LoadClientFlterDirection() {

            $.ajax({url: LinkClientFlterDirection,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseClientFlterDirection = responseClientFlterDirection.concat(data.d.results);
                              if (data.d.__next) {
                                LinkClientFlterDirection = data.d.__next;
                                LoadClientFlterDirection();
                              }    
                                 var sumMont=0;
                                 var sumAch=0;
                                 var nbProj=0;
                                 var sumCost=0;
                                 var projcostvariance=0;
                                 projWork=0;
                                 var pworkvariance = 0;
                                  
            $.each(responseClientFlterDirection, function(key, value) 
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
            
              
}   
});  

}
LoadClientFlterDirection();


      var responseSousDirection = responseSousDirection || []; 


  var urlDirectionProjects = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction&$filter=startswith(Direction,'"+directionSelected+"') eq true"+periodeUrl1;
function LoadSousDirectionForSelect() {
  //Remove_optionsForSelect();
            $.ajax({url:  urlDirectionProjects, 
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {   
                                    responseSousDirection = responseSousDirection.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDirectionProjects = data.d.__next;
                                            LoadSousDirectionForSelect();
                                        }
                          var listItemInfo2 = "";            
            $.each(responseSousDirection, function(key, value) 
            {           
                  
                var Sous_Direction = value.Direction;
                if(Sous_Direction =="ServiceInfrastructure.RA&B")
                {
                  Sous_Direction = "ServiceInfrastructure.RA AND B";
                }
                
                       $('#filtreSousDirection').append($('<option>',
                           {
                              text : Sous_Direction
                              
                            })); 

                            var opt = {};
                              $("#filtreSousDirection > option").each(function () {
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
LoadSousDirectionForSelect();

//*******************************************************************Filtrage par grande direction*******************************************


//Load Number Of All Project Somme sur EPPM
var responseSousDirectionProject = responseSousDirectionProject || []; 
  var urlTotalProject = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Montant,ProjectPercentCompleted,ProjectName&$filter=startswith(Direction,'"+directionSelected+"') eq true"+periodeUrl1;
function LoadAllNumberEnTete()
{
  var nbre = 0;
  var montantProjet=0;
  var projPercentCompl=0;
  var projPercentComplFinal=0;
  $.ajax({url: urlTotalProject,     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseSousDirectionProject = responseSousDirectionProject.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlTotalProject = data.d.__next;
                                            LoadAllNumberEnTete();
                                        }             
          
            $.each(responseSousDirectionProject, function(key, value) 
            {
                 var nomProjet = value.ProjectName;

                 if(nomProjet != null)
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
                
                projPercentComplFinal = projPercentCompl/nbre;

                if(isNaN(projPercentComplFinal))
                {
                   projPercentComplFinal = 0; 
                }


                  
            });  
            
            //document.getElementById("NombreProjet").innerHTML = nbre;   
            document.getElementById("MontantProjets").innerHTML = conToMill(parseFloat(montantProjet).toFixed(3)); 
            document.getElementById("TauxAvancement").innerHTML = parseFloat(projPercentComplFinal).toFixed(0) + "%";  
            document.getElementById("pourach").innerHTML=parseFloat(projPercentComplFinal).toFixed(0) + "%";    
            var valeurPercent =parseFloat(projPercentComplFinal).toFixed(0);
            $(".progress").attr("data-percentage", valeurPercent.toString());   
          
        }
});
}
LoadAllNumberEnTete();



//Load Number Of All Project
var LoadAllNumber = LoadAllNumber || []; 
function LoadAllNumberProjectPrSousDirection()
{
  var nbre = 0;

  var urlTotalProjectSum = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$inlinecount=allpages&$filter=startswith(Direction,'"+directionSelected+"')%20eq%20true"+periodeUrl1;
  console.log("urlTotalProjectSum " + urlTotalProjectSum);
  $.ajax({url: urlTotalProjectSum,     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {  
                      LoadAllNumber = LoadAllNumber.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlTotalProjectSum = data.d.__next;
                                            LoadAllNumberProjectPrSousDirection();
                                        } 

                    //var dataResults = data.d.results;              
                    
            $.each(LoadAllNumber, function(key, value) 
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
LoadAllNumberProjectPrSousDirection();




  var responseAllTicketsFilterSousDirection = responseAllTicketsFilterSousDirection || [];
var urlLeftColumnSousDirection = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCostVariance,ProjectCost,ProjectWork,ProjectWorkVariance&$filter=startswith(Direction,'"+directionSelected+"')%20eq%20true"+periodeUrl1;
function LeftColumnsFilterSousDirection()
{
    var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;
                $.ajax({url: urlLeftColumnSousDirection,                          
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseAllTicketsFilterSousDirection = responseAllTicketsFilterSousDirection.concat(data.d.results);
                    if (data.d.__next) {
                      urlLeftColumnSousDirection = data.d.__next;
                      LeftColumnsFilterSousDirection();
                    }
                    
        $.each(responseAllTicketsFilterSousDirection, function(key, value) 
        {                 
              var pCost = parseInt(value.ProjectCost);
              var pcostVar = parseInt(value.ProjectCostVariance);
              var pwork = parseInt(value.ProjectWork);
              var pwvariance = parseInt(value.ProjectWorkVariance);

              if((pcostVar != "")&&(pcostVar != null))
              {
                var pcostVar = pcostVar;
              }


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
 LeftColumnsFilterSousDirection();



  //Project Name achevevement des directions
  function DoughnutChartSousDirection()
  {
document.getElementById("chartCartBody").innerHTML = '<canvas id="projchart" style="margin-top: 40px; " height ="230px"></canvas>'; 
      $.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=startswith(Direction,'"+directionSelected+"')%20eq%20true"+periodeUrl1,

  method: "GET",
    headers: { "Accept": "application/json;odata=verbose"},
success: function (data) {
      var CalculPercent = 0;
      var DirecProj="";
      var CalculPercentGen = 0;
      var DirecProjGen="";


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
                if((data.d.results[i].Direction=="Direction Générale")||(data.d.results[i].Direction=="Direction Générale.IT"))
                  {CalculPercent= CalculPercent + parseInt(data.d.results[i].ProjectPercentCompleted);
                    //console.log(CalculPercent);
                    DirecProj = "Direction Générale";
                  }
              }

        if(data.d.results[i].Direction=="Direction des Projets")
              { 
                if(data.d.results[i].ProjectName != null)
                {
                  nbrPr1++;
                }
                CalculPercent= CalculPercent + parseInt(data.d.results[i].ProjectPercentCompleted);
                //console.log(CalculPercent);
                DirecProj = "Direction des Projets";
              }

        if((data.d.results[i].Direction=="ServiceConvergent.Convergent.Delivery")||(data.d.results[i].Direction=="ServiceConvergent.Convergent")||(data.d.results[i].Direction=="ServiceConvergent.Convergent.Maintenance")||(data.d.results[i].Direction=="ServiceConvergent.Commercial"))
              { 
                if(data.d.results[i].ProjectName != null)
                {
                  nbrPr1++;
                }
                CalculPercent= CalculPercent + parseInt(data.d.results[i].ProjectPercentCompleted);
                //console.log(CalculPercent);
                DirecProj = "Direction Convergent";
              }

        if((data.d.results[i].Direction=="ServiceInfrastructure.Wireless")||(data.d.results[i].Direction=="ServiceInfrastructure.RA&B"))
              { 
                if(data.d.results[i].ProjectName != null)
                {
                  nbrPr1++;
                }
                CalculPercent= CalculPercent + parseInt(data.d.results[i].ProjectPercentCompleted);
                //console.log(CalculPercent);
                DirecProj = "Service Infrastructure";
              }

            }
                  
          pieLabels.push(DirecProj);
                  pieValues.push(parseFloat(CalculPercent/nbrPr1).toFixed(0));
      
      var ctx1 = document.getElementById("projchart");
      ctx1.width=750;
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


DoughnutChartSousDirection();


/*
  var responseAllClientSousDirection = responseAllClientSousDirection || [];
function LoadTableProjectsClientFilterSousDirection() {

var LinkClient = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName&$filter=startswith(Direction,'"+directionSelected+"')%20eq%20true";
            $.ajax({url: LinkClient,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseAllClientSousDirection = responseAllClientSousDirection.concat(data.d.results);
                              if (data.d.__next) {
                                LinkClient = data.d.__next;
                                LoadTableProjectsClientFilterSousDirection();
                              }    
                                    
                                  
            $.each(responseAllClientSousDirection, function(key, value) 
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
            $('#myTable').DataTable();

              
}   
});  

}                                  
LoadTableProjectsClientFilterSousDirection();*/





}

else
{





  var exercice=document.getElementById("exerciceDates").value;
    console.log("exercice selectionner= "+exercice);
    var exercice1 = 0;

    exercice1 = parseInt(exercice)+1;



    var periodeUrl="";
    var periodeUrl1="";
    


  if (exercice!="") {
      periodeUrl="&$filter=ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27";
      periodeUrl0="?$filter=ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27";
      periodeUrl1="%20and%20ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27";
      
    }
  $('#tittreTab1').show();
  $('#tittreTab2').hide();
  $('#tittreTab3').hide();

  $('#lastdateupdate').hide();


  $("#sous_direct1").show(); 
      $("#sous_direct2").hide(); 
    $("#sous_direct3").hide();



    tableaux = document.getElementById("myTable");
     tr1 = tableaux.getElementsByTagName("tr");
     if(tr1.length>0){        
          $('#myTable tbody').empty();
     }

var LinkClientFlterDirectionVide="";


    LinkClientFlterDirectionVide = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,Montant,ProjectWorkVariance,ProjectCostVariance,ProjectWork,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName"+periodeUrl;
  




  var responseClientFlterDirectionVide = responseClientFlterDirectionVide || [];
function LoadClientFlterDirectionVide() {

            $.ajax({url: LinkClientFlterDirectionVide,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseClientFlterDirectionVide = responseClientFlterDirectionVide.concat(data.d.results);
                              if (data.d.__next) {
                                LinkClientFlterDirectionVide = data.d.__next;
                                LoadClientFlterDirectionVide();
                              }    
                                 var sumMont=0;
                                 var sumAch=0;
                                 var nbProj=0;
                                 var sumCost=0;
                                 var projcostvariance=0;
                                 projWork=0;
                                 var pworkvariance = 0;
                                  
            $.each(responseClientFlterDirectionVide, function(key, value) 
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
            
              
}   
});  

}
LoadClientFlterDirectionVide();



//Load Number Of All Project Somme sur EPPM
var responseAllProjectNumber = responseAllProjectNumber || [];
function LoadAllProjectNameTotal()
{
  var nbre = 0;
  var montantProjet=0;
  var projPercentCompl=0;

var urlAllProjectNumber = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Montant,ProjectPercentCompleted,ProjectName&$filter=startswith(Direction,'ServiceConvergent') eq true or startswith(Direction,'ServiceInfrastructure') eq true or startswith(Direction,'Direction des projets') eq true or startswith(Direction,'Direction Générale') eq true"+periodeUrl1;

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

            //console.log(montantProjet);
            //document.getElementById("NombreProjet").innerHTML = nbre;   
            document.getElementById("MontantProjets").innerHTML = conToMill(parseFloat(montantProjet).toFixed(3)); 
            console.log(parseFloat(montantProjet/nbre).toFixed(3));
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



//Load Number Of All Project
function NumberOfproject()
{
  var nbre = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$inlinecount=allpages&$select=ProjectName"+periodeUrl,     
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









  var responseAllTickets = responseAllTickets || [];

function LoadAllDataLeft()
{
    var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;

                $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=startswith(Direction,%27Direction%20Générale%27)%20eq%20true or startswith(Direction,%27Direction des projets%27)%20eq%20true or startswith(Direction,%27ServiceConvergent%27)%20eq%20true or startswith(Direction,%27ServiceInfrastructure%27)%20eq%20true",                          
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

              if(!isNaN(pcostVar))
                {
                   projcostvariance = projcostvariance+pcostVar;
                }

              projCost = projCost + pCost;
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
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=startswith(Direction,%27Direction%20Générale%27)%20eq%20true or startswith(Direction,%27Direction des projets%27)%20eq%20true or startswith(Direction,%27ServiceConvergent%27)%20eq%20true or startswith(Direction,%27ServiceInfrastructure%27)%20eq%20true",

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
                console.log(CalculPercent);
                DirecProj = "Direction Générale";
        }

        if(data.d.results[i].Direction=="Direction des Projets")
              { 
                if(data.d.results[i].ProjectName != null)
                {
                  nbrPr2++;
                }
                CalculPercent1= CalculPercent1 + parseInt(data.d.results[i].ProjectPercentCompleted);
                console.log(CalculPercent1);
                DirecProj1 = "Direction des Projets";
        }

        if((data.d.results[i].Direction=="ServiceConvergent.Convergent.Delivery")||(data.d.results[i].Direction=="ServiceConvergent.Convergent")||(data.d.results[i].Direction=="ServiceConvergent.Convergent.Maintenance")||(data.d.results[i].Direction=="ServiceConvergent.Commercial"))
              { 
                if(data.d.results[i].ProjectName != null)
                {
                  nbrPr3++;
                }
                CalculPercent2= CalculPercent2 + parseInt(data.d.results[i].ProjectPercentCompleted);
                console.log(CalculPercent2);
                DirecProj2 = "Direction Convergent";
        }

        if((data.d.results[i].Direction=="ServiceInfrastructure.Wireless")||(data.d.results[i].Direction=="ServiceInfrastructure.RA&B"))
              { 
                if(data.d.results[i].ProjectName != null)
                {
                  nbrPr4++;
                }
                CalculPercent3= CalculPercent3 + parseInt(data.d.results[i].ProjectPercentCompleted);
                console.log(CalculPercent3);
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
// if(pieValues.length==0)
//           {
//             $("#projchart").hide();
            
//           }
//           else
//           {
//             $("#projchart").show();
//           }
  }


DoughnutChart();


/*
//Load All Value in table 

//Table Project 
  var responseAllClient = responseAllClient || [];
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
            $('#myTable').DataTable();

              
}   
});  

}                                  
LoadTableProjectsClient();
*/

}




















}