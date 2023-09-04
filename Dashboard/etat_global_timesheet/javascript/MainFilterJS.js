function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}


function MainFilterdatedebut(){
	var idRes = document.getElementById("mylist1").value;
     var datedebut=document.getElementById("mylist1").value;
     console.log("datedebut : " + datedebut);
     var responseDataTable = responseDataTable ||[];

var urlData = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectStartDate%20eq%20datetime%27"+datedebut+"%27";
 console.log("url data : " + urlData);
function loadtable(){
     tableaux = document.getElementById("tableaux");
     tr1 = tableaux.getElementsByTagName("tr");
     if(tr1.length>0){         
          $('#tableaux tbody').empty();
     }
  $.ajax({url:  urlData,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseDataTable = responseDataTable.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlData = data.d.__next;
                                            loadtable();
                                        }  
              var dataresult=[];
              var direction=[];
              var countenregistré=[];
              var countsoumise=[];
              var countrejeté=[];
              var countapprouvé=[];
               var countdirection=[];

            $.each(responseDataTable, function(key, value){
               var direction=value.Servicesduprojet; 

               var enregistré="";
               var soumise="";
               var approuvée="";
               var rejetée="";

              
              
               var tr;
                    tr = $("<tr>");

                        tr.append("<td style='text-align:left'>" + direction + "</td>");//1
                        tr.append("<td>" + enregistré + "</td>");//2                        
                        tr.append("<td>" + soumise+ "</td>"); //3
                        tr.append("<td>" + approuvée+ "</td>"); //4
                        tr.append("<td>" + rejetée + "</td>"); //5
                        $('#tableaux tbody').append(tr);
                       
                                            
                                      });
       
          
          }
        });

}

loadtable();


function ChartEtatGlobalTimesheet(){

aDatasets1 = [65,59,80,81,56,55,40];  
aDatasets2 = [20,30,40,50,60,20,25];
aDatasets3 = [30,20,25,65,90,34,20];
aDatasets4 = [10,30,45,35,60,14,30];
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange","Black"],
        
        datasets: [ {
              label: 'Enregistré',
              fill:false,
            data: aDatasets1,
            backgroundColor: 'rgb(87 115 255)',
        
        },
        
        {
            label: 'Soumise',
              fill:false,
            data: aDatasets2,
            backgroundColor: 'rgb(255 172 101)',
           
        },
        
        {
            label: 'Approuvée' ,
            data: aDatasets3,
              fill:false,
           backgroundColor:  'rgb(140 220 154)',
          
        },
                {
            label: 'Rejetée'
            ,
            data: aDatasets4,
              fill:false,
           backgroundColor:  'rgb(255 122 122)',
            
        }
        
        ]
    },
    
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        title: {
            display: true,
            text: 'Etat globale timesheet'
        },
        responsive: true,
        
       tooltips: {
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(255, 255, 255)',
                        backgroundColor: 'red'
                    }
                }
            }
        },
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'black',
               
            }
        }
    }
});
}
ChartEtatGlobalTimesheet();

function ChartTauxdeParticipation(){

aDatasets1 = [65,59,80,81,56,55,40];  
aDatasets2 = [20,30,40,50,60,20,25];

var ctx = document.getElementById("myChart1");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange","Black"],
        
        datasets: [ {
              label: 'Paricipation',
              fill:false,
            data: aDatasets1,
            backgroundColor: 'rgb(87 115 255)',
            
            
        },
        
        {
            label: 'Non participation',
              fill:false,
            data: aDatasets2,
            backgroundColor: 'rgb(255 172 101)',
            
           
        }
        
        
                
        
        ]
    },
    
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        title: {
            display: true,
            text: 'Taux de participation à la feuille de temps'
        },
        responsive: true,
        
       tooltips: {
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(255, 255, 255)',
                        backgroundColor: 'rgb(255,255, 255)'
                    }
                }
            }
        },
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'black',
               
            }
        }
    }
});
}
ChartTauxdeParticipation();


function ChartTauxdeParticipationHebdomadaire(){

aDatasets1 = [65,59,80,81,56,55,40,20,30,40,50,60,20,25,
              65,59,80,81,56,55,40,20,30,40,50,60,20,25,
              65,59,80,81,56,55,40,20,30,40,50,60,20,25];  

var ctx = document.getElementById("myChart2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14"],
        
        datasets: [ {
              label: 'Paricipation',
              fill:false,
            data: aDatasets1,
            backgroundColor: '#4ACDE3',
            
            
        },
        
   
        
        
                
        
        ]
    },
    
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        title: {
            display: true,
            text: 'Taux de participation hebdomadaire'
        },
        responsive: true,
        
       tooltips: {
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: '#4ACDE3',
                        backgroundColor: '#4ACDE3'
                    }
                }
            }
        },
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'black',
               
            }
        }
    }
});
}
ChartTauxdeParticipationHebdomadaire();

}