function FiltreDate()
{
  var datedebut = document.getElementById("start").value;
  var datefin = document.getElementById("finish").value;


if((datedebut =="")||(datefin =="") || (new Date(datedebut).getTime() > new Date(datefin).getTime()) )
{
  

         $('#myModal').modal('show');
         var modal = document.getElementById('myModal');
         //modal.style.display = 'block';


}



else
{

table = document.getElementById("myTable");
                       tr1 = table.getElementsByTagName("tr");
                  if(tr1.length>0){         
                          $('#myTable').empty();
                        }   

document.getElementById('filtreDirection').disabled=true;
document.getElementById('filtreSousDirection').disabled=true;
document.getElementById('filtreDirectionprojet').disabled=true;
document.getElementById('exerciceDates').disabled=true;

$('#exerciceDates').empty()
.append('<option value="" selected="selected">Exercice</option>')
.append('<option value="2018">2018</option>')
.append('<option value="2019">2019</option>')
.append('<option value="2020">2020</option>')
.append('<option value="2021">2021</option>')
.append('<option value="2022">2022</option>');

  // Rapporter cette donnée au <p>


$('#filtreDirection').empty()
.append('<option value="">Les directions</option>')
.append('<option value="Direction Générale">Direction Générale</option>')
.append('<option value="Direction des projets">Direction des projets</option>')
.append('<option value="ServiceConvergent">Direction service convergent</option>')
.append('<option value="ServiceInfrastructure">Direction service infrastructure</option>');

$('#filtreSousDirection').empty()
.append('<option value="">Les sous-directions</option>');

$('#filtreDirectionprojet').empty()
.append('<option value="" selected disabled>Les projets</option>');

//Load Number Of All Project Somme sur EPPM
var responseTotalSumPrDirDate= responseTotalSumPrDirDate || []; 
//var UrlProjectAndSumDir = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Montant,ProjectPercentCompleted,ProjectName&$filter=startswith(Direction,'ServiceConvergent') eq true or startswith(Direction,'ServiceInfrastructure') eq true or startswith(Direction,'Direction des projets') eq true or startswith(Direction,'Direction Générale') eq true";

var UrlProjectAndSumDirDate = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Montant,ProjectPercentCompleted,ProjectName&$filter=ProjectStartDate ge datetime'"+datedebut+"' and ProjectFinishDate le datetime'"+datefin+"'";




function LoadTotalAndSumDate()
{

  var nbre = 0;
  var montantProjet=0;
  var projPercentCompl=0;
var montant = 0;


var CalculPercentProjetValue = 0;
  $.ajax({url: UrlProjectAndSumDirDate,     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {    
                    responseTotalSumPrDirDate = responseTotalSumPrDirDate.concat(data.d.results);
                                        if (data.d.__next) {
                                            UrlProjectAndSumDirDate = data.d.__next;
                                            LoadTotalAndSumDate();
                                        }  
                    //var dataResults = data.d.results;              
          
            $.each(responseTotalSumPrDirDate, function(key, value) 
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

            CalculPercentProjetValue = parseFloat(projPercentCompl/nbre).toFixed(0);
            if(!isNaN(CalculPercentProjetValue))
            {
              CalculPercentProjetValue = parseFloat(projPercentCompl/nbre).toFixed(0);
            }
            else
            {
              CalculPercentProjetValue=0;
            }

            ////console.log(montantProjet);
            //document.getElementById("NombreProjet").innerHTML = nbre;   
            document.getElementById("MontantProjets").innerHTML = conToMill(parseFloat(montantProjet).toFixed(3)); 
            //console.log(parseFloat(montantProjet/nbre).toFixed(3));
            document.getElementById("TauxAvancement").innerHTML = CalculPercentProjetValue + "%";  
            document.getElementById("pourach").innerHTML=CalculPercentProjetValue + "%";    
            var valeurPercent =CalculPercentProjetValue;
            $(".progress").attr("data-percentage", valeurPercent.toString());  

          
        }
});
}
LoadTotalAndSumDate();




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



var NombreProjetAndCount = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$inlinecount=allpages&$select=ProjectName&$filter=ProjectStartDate ge datetime'"+datedebut+"' and ProjectFinishDate le datetime'"+datefin+"'";
var responseNombreProjetAndCount = responseNombreProjetAndCount || []; 


//Load Number Of All Project
function loadNombreProjetAndCount(){
  var nbre = 0;

  $.ajax({url: NombreProjetAndCount,     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseNombreProjetAndCount = responseNombreProjetAndCount.concat(data.d.results);
                                        if (data.d.__next) {
                                            NombreProjetAndCount = data.d.__next;
                                            loadNombreProjetAndCount();
                                        }               
          
            $.each(responseNombreProjetAndCount, function(key, value) 
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

loadNombreProjetAndCount();



var responseAllTicketsDate = responseAllTicketsDate || [];

var  urlAllTicketsDate= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectCostVariance,ProjectWork,ProjectWorkVariance&$filter=ProjectStartDate ge datetime'"+datedebut+"' and ProjectFinishDate le datetime'"+datefin+"'";

function GetAllTicketsDate(){
    var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;

                $.ajax({url: urlAllTicketsDate,                          
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseAllTicketsDate = responseAllTicketsDate.concat(data.d.results);
                    if (data.d.__next) {
                      urlAllTicketsDate = data.d.__next;
                      GetAllTicketsDate();
                    }
                    
        $.each(responseAllTicketsDate, function(key, value) 
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
 GetAllTicketsDate();







//Graphe 

var urlDoughnutChartDate=  _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction,ProjectPercentCompleted,ProjectName&$filter=ProjectStartDate ge datetime'"+datedebut+"' and ProjectFinishDate le datetime'"+datefin+"'";



  //Project Name achevevement des directions
  function DoughnutChartDate()
  {
    document.getElementById("chartCartBody").innerHTML = '<canvas id="projchart" style="margin-top: 40px; " height ="230px"></canvas>'; 

      $.ajax({
    url: urlDoughnutChartDate,

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


      var CalculPercentFinal1=0;
      var CalculPercentFinal2=0;
      var CalculPercentFinal3=0;
      var CalculPercentFinal4=0;

      var nbrPr1=0;
      var nbrPr2=0;
      var nbrPr3=0;
      var nbrPr4=0;

      var pieValues = [];
            var pieLabels = [];

      if (data.d.results.length > 0) {
        

            
            

            for (var i = 0; i < data.d.results.length; i++) {
              
if(data.d.results.length >0){

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
          }




          if(!isNaN(parseFloat(CalculPercent/nbrPr1).toFixed(0)))
          {
            CalculPercentFinal1 =parseFloat(CalculPercent/nbrPr1).toFixed(0); 
          }
          else{
            CalculPercentFinal1 = 0;
            DirecProj = "Direction Générale";
          }

          if(!isNaN(parseFloat(CalculPercent1/nbrPr2).toFixed(0)))
          {
            CalculPercentFinal2 =parseFloat(CalculPercent1/nbrPr2).toFixed(0); 
          }
          else{
            CalculPercentFinal2 = 0;
            DirecProj1 = "Direction des Projets";
          }

          if(!isNaN(parseFloat(CalculPercent2/nbrPr3).toFixed(0)))
          {
            CalculPercentFinal3 =parseFloat(CalculPercent2/nbrPr3).toFixed(0); 
          }
          else{
            CalculPercentFinal3 = 0;
            DirecProj2 = "Direction Convergent";
          }

          if(!isNaN(parseFloat(CalculPercent3/nbrPr4).toFixed(0)))
          {
            CalculPercentFinal4 =parseFloat(CalculPercent3/nbrPr4).toFixed(0); 
          }
          else{
            CalculPercentFinal4 = 0;
            DirecProj3 = "Service Infrastructure";
          }
                  
          pieLabels.push(DirecProj,DirecProj1,DirecProj2,DirecProj3);
                  pieValues.push(CalculPercentFinal1,CalculPercentFinal2,CalculPercentFinal3,CalculPercentFinal4);
      console.log("La valeur est " + pieValues);
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



DoughnutChartDate();




//Table Project 
  var responseAllClientDate = responseAllClientDate || [];
var LinkClientDate = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,Montant,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName&$filter=ProjectStartDate ge datetime'"+datedebut+"' and ProjectFinishDate le datetime'"+datefin+"'";
function LoadTableProjectsClientDate() {
var directProject;
                        var client;
                        var nomProjet;
                        var pOwner;
                        var projCostess;
                        var projStartDate;
                        var projfinishdate;
                        var projetTermine;  
                        var projCostes = 0;
                        var tr;


            $.ajax({url: LinkClientDate,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseAllClientDate = responseAllClientDate.concat(data.d.results);
                              if (data.d.__next) {
                                LinkClientDate = data.d.__next;
                                LoadTableProjectsClientDate();
                              }    
                                 
                        
            $.each(responseAllClientDate, function(key, value) 
            {           
                                    
              moment.locale('fr');

                 directProject = value.Direction;
                console.log("la direction est " + directProject);

                 if(directProject =="ServiceInfrastructure.RA&B")
                {
                  directProject = "ServiceInfrastructure.RA AND B";
                }
                else
                {

                  directProject = directProject;
                }
                
                 client = value.Client;  
                 nomProjet = value.ProjectName;
                 pOwner = value.ProjectOwnerName;
                 projCostess = parseFloat(value.Montant).toFixed(3);

               

                 if(!isNaN(projCostess))
                  {
                    projCostes = projCostess;
                  } 

                 projStartDate = moment(value.ProjectStartDate).format('L');
         projfinishdate = moment(value.ProjectFinishDate).format('L');
         projetTermine = parseFloat(value.ProjectPercentCompleted).toFixed(0);
         var identifiantProjet = value.ProjectId;
        
                if(client == null)
        {
            client = "Pas de client sur ce projet";
           } 


               
 var tr = $("<tr class='even pointer'>");
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
                    $('#myTable').append(tr); 
               





            });








                     


     
              
}   


      
                    
}); 

  

}                                  

LoadTableProjectsClientDate();














/////////////////Fin de filtre

}
}




//A supprimer


