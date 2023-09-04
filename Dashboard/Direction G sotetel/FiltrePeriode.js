



   function filtrerTableauSous_Periode()
  {
    tableaux = document.getElementById("myTable");
     tr1 = tableaux.getElementsByTagName("tr");
     if(tr1.length>0){        
          $('#myTable tbody').empty();
     }
    var exercice=document.getElementById("exerciceDates").value;
    //console.log("exercice selectionner= "+exercice);
    var exercice1 = 0;

    exercice1 = parseInt(exercice)+1;



    var periodeUrl="";
    var periodeUrl1="";
    // $('trip-start').val('')
    // .attr('type', 'text')
    // .attr('type', 'date');

    // $('finish').val('')
    // .attr('type', 'text')
    // .attr('type', 'date');


 if (exercice!="") {
      periodeUrl="&$filter=ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27";
      periodeUrl0="?$filter=ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27";
      periodeUrl1="%20and%20ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27";
      document.getElementById('filtreDirection').disabled=false;
document.getElementById('filtreSousDirection').disabled=false;
document.getElementById('filtreDirectionprojet').disabled=false;
var directionNewSelect = "";
$("#filtreDirection").val(directionNewSelect);
var sousDirectionNewSelect = "";
$("#filtreSousDirection").val(sousDirectionNewSelect);
var projetNewSelect = "";
$("#filtreDirectionprojet").val(projetNewSelect);


    }
    else
    {
       $('#filtreDirection')
    .empty()
    .append('<option value="">Les directions</option>');
     $('#filtreDirection')
     .append('<option value="Direction Générale">Direction Générale</option>');
     $('#filtreDirection')
     .append('<option value="Direction des projets">Direction des projets</option>');
     $('#filtreDirection')
     .append('<option value="ServiceConvergent">Direction service convergent</option>');
     $('#filtreDirection')
     .append('<option value="ServiceInfrastructure">Direction service infrastructure</option>');


     $('#filtreSousDirection')
    .empty()
    .append('<option value="">Les sous directions</option>');

    $('#filtreDirectionprojet')
    .empty()
    .append('<option value="">Les projets</option>');

    document.getElementById('filtreDirection').disabled=true;
document.getElementById('filtreSousDirection').disabled=true;
document.getElementById('filtreDirectionprojet').disabled=true;

document.getElementById("lastdateupdate").style.display = 'none'; 




    }


/*function RemoveOptionFiltreDate()
{
    $('#filtreSousDirection')
    .empty()
    .append('<option value="">Les sous_direction</option>');
    
}*/



/*    var responseSousDirectionDate = responseSousDirectionDate || []; 


  var urlDirectionProjectsDate = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction"+periodeUrl;
function LoadSousDirectionForSelectDate() {

  //Remove_optionsForSelect();
            $.ajax({url:  urlDirectionProjectsDate, 
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {   
                                    responseSousDirectionDate = responseSousDirectionDate.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDirectionProjectsDate = data.d.__next;
                                            LoadSousDirectionForSelectDate();
                                        }
                          var listItemInfo2 = "";            
            $.each(responseSousDirectionDate, function(key, value) 
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
LoadSousDirectionForSelectDate();*/




    
    var LinkClientFlterPeriode = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,Montant,ProjectWorkVariance,ProjectCostVariance,ProjectWork,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName"+periodeUrl;
  ////console.log("LinkClientFlterPeriode= "+LinkClientFlterPeriode);
  var responseClientFlterPeriode = responseClientFlterPeriode || [];
function LoadTableProjectsClientFlterPeriode() {

            $.ajax({url: LinkClientFlterPeriode,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseClientFlterPeriode = responseClientFlterPeriode.concat(data.d.results);
                              if (data.d.__next) {
                                LinkClientFlterPeriode = data.d.__next;
                                LoadTableProjectsClientFlterPeriode();
                              }    
                                 var sumMont=0;
                                 var sumAch=0;
                                 var nbProj=0;
                                 var sumCost=0;
                                 var projcostvariance=0;
                                 projWork=0;
                                 var pworkvariance = 0;
                                  
            $.each(responseClientFlterPeriode, function(key, value) 
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
            var moyAch=parseFloat(sumAch/nbProj).toFixed(0);
            if (isNaN(moyAch)) {
              moyAch=0;
            }
       document.getElementById("MontantProjets").innerHTML = conToMill(parseFloat(sumMont).toFixed(3)); 

       document.getElementById("TauxAvancement").innerHTML = moyAch + "%";  
            document.getElementById("pourach").innerHTML=moyAch + "%";    
            var valeurPercent =moyAch;
            $(".progress").attr("data-percentage", valeurPercent.toString());  

            document.getElementById("NombreProjet").innerHTML = nbProj;
            document.getElementById("prcount").innerHTML = nbProj; 

            document.getElementById("prcost").innerHTML = conToMill(sumCost);
          document.getElementById("cvariance").innerHTML = conToMill(projcostvariance);
          document.getElementById("prwork").innerHTML = conToMill(projWork);
      document.getElementById("wrvariance").innerHTML = conToMill(pworkvariance);

              
}   
});  

}
LoadTableProjectsClientFlterPeriode();

var Link77 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction,ProjectPercentCompleted,ProjectName"+periodeUrl;
//console.log("Link77= "+Link77);
  //Project Name achevevement des directions
  function DoughnutChartPeriodeFilter()
  {
document.getElementById("chartCartBody").innerHTML = '<canvas id="projchart" style="margin-top: 40px; " height ="230px"></canvas>'; 
      $.ajax({
    url: Link77,

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
// if(pieValues.length==0)
//           {
//             $("#projchart").hide();
            
//           }
//           else
//           {
//             $("#projchart").show();
//           }
  }


DoughnutChartPeriodeFilter();

var LinkRikIssueFlterPeriodeFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectStartDate,ProjectName"+periodeUrl;
  var responseRikIssueFlterPeriodeFilter = responseRikIssueFlterPeriodeFilter || [];
function LoadRikIssueFlterPeriodeFilter() {

            $.ajax({url: LinkRikIssueFlterPeriodeFilter,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseRikIssueFlterPeriodeFilter = responseRikIssueFlterPeriodeFilter.concat(data.d.results);
                              if (data.d.__next) {
                                LinkRikIssueFlterPeriodeFilter = data.d.__next;
                                LoadRikIssueFlterPeriodeFilter();
                              }    
                                 
                                  var nbRiks=0;
                                  var nbIss=0;
            $.each(responseRikIssueFlterPeriodeFilter, function(key, value) 
            {  
              var projectId=value.ProjectId;
              nbRiksFilterPeriode(projectId,nbRiks);
              nbIssuesFilterPeriode(projectId,nbIss);
            });
          
            document.getElementById("actRisk").innerHTML = nbRiks;
            document.getElementById("actIssue").innerHTML = nbIss;   
              
}   
});  

}
LoadRikIssueFlterPeriodeFilter();

function nbRiksFilterPeriode(projectId,nbRiks){
  var LinkRikFlterPeriodeFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Projects(guid'"+projectId+"')/Risks";
  var responseRikFlterPeriodeFilter = responseRikFlterPeriodeFilter || [];
function LoadRikFlterPeriodeFilter() {

            $.ajax({url: LinkRikFlterPeriodeFilter,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseRikFlterPeriodeFilter = responseRikFlterPeriodeFilter.concat(data.d.results);
                              if (data.d.__next) {
                                LinkRikFlterPeriodeFilter = data.d.__next;
                                LoadRikFlterPeriodeFilter();
                              }    
                         if (responseRikFlterPeriodeFilter.length>0) {
                          $.each(responseRikFlterPeriodeFilter, function(key, value) 
                          {  
                            nbRiks++;
                          });
                         }        
                                  
            
          

              
}   
});  

}
LoadRikFlterPeriodeFilter();
}


function nbIssuesFilterPeriode(projectId,nbIss){
  var LinkIssueFilterPeriode = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Projects(guid'"+projectId+"')/Risks";
  var responseIssueFilterPeriode = responseIssueFilterPeriode || [];
function LoadIssueFilterPeriode() {

            $.ajax({url: LinkIssueFilterPeriode,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseIssueFilterPeriode = responseIssueFilterPeriode.concat(data.d.results);
                              if (data.d.__next) {
                                LinkIssueFilterPeriode = data.d.__next;
                                LoadIssueFilterPeriode();
                              }    
                                 
                               if (responseIssueFilterPeriode.length>0) {
                                $.each(responseIssueFilterPeriode, function(key, value) 
                                {  
                                  nbIss++;
                                });
                               }   
            
          

              
}   
});  

}
LoadIssueFilterPeriode();






  }
  
}

