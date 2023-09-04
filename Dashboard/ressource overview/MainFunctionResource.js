
function MainFilter()
{
 
  function filtrerTableau()
  {
    var input1, input2, input3, input4, filter, filter2, filter3, filter4, table, tr, td, td2, td3, td4, i, k;
    input1 = document.getElementById("resourceCal");
    input2 = document.getElementById("groupe");
    input3 = document.getElementById("direction");
    input4 = document.getElementById("rbs");


    filter = input1.value.toUpperCase();
    filter2 = input2.value.toUpperCase();
    filter3 = input3.value.toUpperCase();
    //filter4 = input4.value.toUpperCase();


    table = document.getElementById("tableaux");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    td2 = tr[i].getElementsByTagName("td")[7];
    td3 = tr[i].getElementsByTagName("td")[2];
    td4 = tr[i].getElementsByTagName("td")[5];
    if ((td3) ||(td)|| (td4)){
      if ((td3.innerHTML.toUpperCase().indexOf(filter3) > -1) &&(td.innerHTML.toUpperCase().indexOf(filter2) > -1)&&(td4.innerHTML.toUpperCase().indexOf(filter) > -1)) {
      tr[i].style.display = "";
      } else {
      tr[i].style.display = "none";
      }
    }       
    }
    var numRows = document.getElementById("tableaux").rows.length;
  }



function filterResourceDochart()
  {
    var numRows4 = document.getElementById("tableaux").rows.length;
    console.log(numRows4);
    var tbl = document.getElementById("tableaux");   
    var tr = tbl.getElementsByTagName("tr");
    var itermeidiaryObject = {};
          var som = 0;
          for(var i=1;i<numRows4;i++)
          {
            if (tr[i].style.display != "none")
            {
            var epn = tbl.rows[i].cells[7].innerHTML;
            
            if (epn != null) {
              itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
              som++;
            }
            /*else
            {
              if(epn =="")
              {
                  itermeidiaryObject[epn] = "Non Saisie";   
              }
            }*/
            var somme = som;
            }
          }
         
          var finalObject = Object.keys(itermeidiaryObject).map(function(key) {
          return {
            label: key,
            y: itermeidiaryObject[key]
          }
            });
            
            var pievalues = finalObject.map(function(value, index) {
            return value.y;
            });
            
            var labels = finalObject.map(function(value, index) {
            return value.label;
            });

       
          var colorscheme = colors.slice(0, labels.length);

            var ctx1 = document.getElementById("echart_pie").getContext('2d');

if(window.mychart69 != undefined)
{
  window.mychart69.destroy();
}

 window.mychart69 = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: labels ,
    datasets: [{
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },
  options:{
    legend: { display: false },
    responsive: true,
    plugins:{
  labels: [
  {
    render: 'label',
    fontColor: '#000',
    position: 'outside',
    fontSize: 10
  },
  {
    fontColor: '#000',
    render: 'value',
    fontSize: 12
  }
  ]
}
  }
});

    if(som==0)
          {
            
            
          }
          else{

          	$("#echart_pie").show();
            $("#affichagesEchart11").show();
          	$("#affichagesEchart1").hide();
          }
       


  }

function filterBarchart()
  {
    var numRows4 = document.getElementById("tableaux").rows.length;
    console.log(numRows4);
    var tbl = document.getElementById("tableaux");   
    var tr = tbl.getElementsByTagName("tr");
    var itermeidiaryObject = {};
      var som = 0;

          for(var i=1;i<numRows4;i++)
          {
            if (tr[i].style.display != "none")
            {
            var epn = tbl.rows[i].cells[2].innerHTML;
            
            if (epn != null) {
              itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
              som++;
            }
            var somme = som;
            }
          }
        
            
        
       
          var finalObject = Object.keys(itermeidiaryObject).map(function(key) {
          return {
            label: key,
            y: itermeidiaryObject[key]
          }
            });
            
            var pievalues = finalObject.map(function(value, index) {
            return value.y;
            });
            
            var labels = finalObject.map(function(value, index) {
            return value.label;
            });

             
       
          var colorscheme = colors.slice(0, labels.length);

           var ctx = document.getElementById("myChart").getContext('2d');
if(window.mychartBar != undefined)
{
  window.mychartBar.destroy();
}

 window.mychartBar = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
                labels: labels,
                datasets: [{
                  data: pievalues,
                  backgroundColor: colorscheme
                }]
            },

        options: {
        responsive: true,
        scales: {

            xAxes: [{
                ticks: {
                    beginAtZero: true// Edit the value according to what you need
                    
                },
                scaleLabel: {
                    display: true,
                    labelString: "Number of Departement"
                  },
            }],


            yAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: "Name of Departement"
                  },
            }]
        },
        title: {
      display: true,
      position: "top",
      fontSize: 18,
      fontColor: "#111"
    },
   legend: {
      display: false
    }

      }
    });

     if(som == 0)
          {
            $("#myChart").hide();
            $("#affichagesEchart22").hide();
            $("#affichagesEchart2").show();
          }
          else{

          	$("#myChart").show();
            $("#affichagesEchart22").show();
            $("#affichagesEchart2").hide();
          }
          


  }



 function filterResourcePiechart()
  {
    var numRows4 = document.getElementById("tableaux").rows.length;
    console.log(numRows4);
    var tbl = document.getElementById("tableaux");   
    var tr = tbl.getElementsByTagName("tr");
    var itermeidiaryObject = {};
       var som = 0;

          for(var i=1;i<numRows4;i++)
          {
            if (tr[i].style.display != "none")
            {
            var epn = tbl.rows[i].cells[6].innerHTML;
           
            if (epn != null) {
              itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
              som++;
            }
      

            var somme = som;
            }
          }
       
          var finalObject = Object.keys(itermeidiaryObject).map(function(key) {
          return {
            label: key,
            y: itermeidiaryObject[key]
          }
            });
            
            var pievalues = finalObject.map(function(value, index) {
            return value.y;
            });
            
            var labels = finalObject.map(function(value, index) {
            return value.label;
            });

             
       
          var colorscheme = colors1.slice(0, labels.length);

            var ctx1 = document.getElementById("echart_donut").getContext('2d');
if(window.mychartPie != undefined)
{
  window.mychartPie.destroy();
}

 window.mychartPie = new Chart(ctx1, {
  type: 'pie',
  data: {
    labels: labels ,
    datasets: [{
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },
  options:{
    legend: { display: false },
    responsive: true,
    plugins:{
  labels: [
  {
    render: 'label',
    fontColor: '#000',
    position: 'outside',
    fontSize: 10
  },
  {
    fontColor: '#000',
    render: 'value',
    fontSize: 12
  }
  ]
}
  }
});

   if(som==0)
          {
            $("#echart_donut").hide();
            $("#affichagesEchart23").hide();
            $("#affichagesEchart3").show();
          }
          else
          {
          	$("#echart_donut").show();
            $("#affichagesEchart23").show();
            $("#affichagesEchart3").hide();
          }

  }



  
  filtrerTableau();
  filterBarchart();
  filterResourceDochart();
  filterResourcePiechart();

}






//Fonction qui permet d'afficher liste de Projet  
function LoadProjectGovernant() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                         
            $.each(dataResults, function(key, value) 
            {           
                
                var RBSResource = value.RBS;    
                    
                    if(RBSResource !="")
                    {
                      var RBSResource = RBSResource;
                    
                  
                       $('#rbs').append($('<option>',
                           {
                              text : RBSResource
                            }));   
                     }
                       var opt = {};
                              $("#rbs > option").each(function () {
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
  _spBodyOnLoadFunctionNames.push("LoadProjectGovernant");






//Fonction qui permet d'afficher liste de Projet  
function LoadProjectOwner() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                         
            $.each(dataResults, function(key, value) 
            {           
                 
                var resourceCalendar = value.ResourceBaseCalendar;    
                  
                
                       $('#resourceCal').append($('<option>',
                           {
                              text : resourceCalendar
                            }));   

                       var opt = {};
                              $("#resourceCal > option").each(function () {
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
  _spBodyOnLoadFunctionNames.push("LoadProjectOwner");



//Fonction qui permet d'afficher les list des risks
function LoadDepartement() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";            
            $.each(dataResults, function(key, value) 
            {           
                var projetId = value.ProjectId;  
                var DepResource = value.Servicesderessources;    
                  
                
                       $('#direction').append($('<option>',
                           {
                              text : DepResource
                            })); 

                            var opt = {};
                              $("#direction > option").each(function () {
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
  _spBodyOnLoadFunctionNames.push("LoadDepartement");


//Fonction qui permet d'afficher les list des Issues
function LoadProjectType() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo3 = "";            
            $.each(dataResults, function(key, value) 
            {           
                 
                var ResourceType = value.ResourceGroup; 
                var pId = value.ProjectId; 
                if(ResourceType != null)
                {
                  var ResourcesType = ResourceType;
                      ResourcesType = ResourcesType.substr(7, 16);

                       $('#groupe').append($('<option>',
                           {
                              text : ResourcesType
                            })); 

                            var opt = {};
                              $("#groupe > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            }); 
                }   
            });
}   
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadProjectType");


//Affichage du Tableau Resources Table
function LoadIssuesTable() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo = "";            
            $.each(dataResults, function(key, value) 
            {           
                var emailAdress=value.ResourceEmailAddress;

                if (emailAdress!=null) {
                  var nomResource = value.ResourceName;
                var maxunits = parseFloat(value.ResourceMaxUnits).toFixed(2) ; 
                var serviceresource = value.Servicesderessources;
                var rGroup = value.ResourceGroup;
                console.log("rGroup= "+rGroup);
                var booleanResource = value.ResourceIsGeneric;
                var calendar = value.ResourceBaseCalendar;
                var rbs = value.RBS;
                var equipegroup = value.Noméquipe;
              
                if (rGroup == "Sales & Marketing"){
                  rGroup = rGroup.substr(7, 16);
                }

                if(rGroup == null || rGroup=="undefined")
                {
                  rGroup = "";
                }

                if(rbs ==null)
                {
                  rbs= "";
                }

                if(equipegroup ==null)
                {
                  equipegroup = "";
                }

                if(serviceresource ==null)
                {
                  serviceresource = "";
                }



                
                    var tr;
                    tr = $("<tr class='even pointer'>");
                        tr.append("<td>" + nomResource + "</td>");
                        tr.append("<td>" + maxunits + "</td>");
                        tr.append("<td class='dep'>" + serviceresource+ "</td>"); 
                        tr.append("<td class='rgroup'>" + rGroup+ "</td>");
                        tr.append("<td>" + booleanResource+ "</td>"); 
                        tr.append("<td>" + calendar +" </td>");  
                        tr.append("<td class='rbs'>" + rbs +" </td>");  
                        tr.append("<td class='equip'>" + equipegroup +" </td>"); 
                    $('#tableaux').append(tr);
                }
                
            });

/*$(document).ready(function(){
    $("#tableaux td.dep:contains('')").css('background-color','#ccc').css('color','black');
    $("#tableaux td.equip:contains('')").css('background-color','#ccc').css('color','black');
    $("#tableaux td.rbs:contains('')").css('background-color','#ccc').css('color','black');
    $("#tableaux td.rgroup:contains('')").css('background-color','#ccc').css('color','black');
});*/

              
}   
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadIssuesTable");




//var colors =  ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];

//var colors =  ["#008000", "#455c73", "#3498db", "#26b99a"];

var colors =  ["#008000", "#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];

var colors1 =  ["#ff851b","#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];


//PieChart That show you All Resources By Group
function ResourceByGroup() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;
              var itermeidiaryObject = {};         
                var som = 0;

            $.each(dataResults, function(key, value) 
            { 
                var epn = value.Noméquipe;
                
                if(epn != null)
                {
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                  som++;
                }
                var somme = som;
              });

              var finalObject = Object.keys(itermeidiaryObject).map(function(key) {
                return {
                  label: key,
                  y: itermeidiaryObject[key]
                }
              });
              
              var pievalues = finalObject.map(function(value, index) {
                return value.y;
              });
              
              var labels = finalObject.map(function(value, index) {
                return value.label;
              });
              
              var colorscheme = colors.slice(0, labels.length);

                  
var ctx1 = document.getElementById("echart_pie").getContext('2d');
if(window.mychart69 != undefined)
{
  window.mychart69.destroy();
}

 window.mychart69 = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: labels ,
    datasets: [{
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },
    options:{
      legend: { display: false },
      responsive: true,
    plugins:{
  labels: [
    {
      render: 'label',
      fontColor: '#000',
      position: 'outside',
      fontSize : 10
    },
    {
      fontColor: '#FFFFFF',
      render: 'value',
      fontSize : 12
      
    }
  ]
}
  }
});

    if(som==0)
          {
            $("#echart_pie").hide();
            $("#affichagesEchart11").hide();
            $("#affichagesEchart1").show();
            
          }
    

 }  
});
}                                  
  _spBodyOnLoadFunctionNames.push("ResourceByGroup");    



  //Fonction for Resources by Departement

var colors =  ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];


// BarChart That show you the Resources By departement
  window.addEventListener('load',function() {
var dataURL = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources";
      $.ajax({
        url: dataURL,
            method: "GET",
            headers: {
              "Accept": "application/json; odata=verbose"
            },
            success: function(data) {
               var dataResults = data.d.results;


              var itermeidiaryObject = {};
              var som = 0;

              $.each(dataResults, function(key, value) {
                var epn = value.Servicesderessources;
                
               if(epn!= null)
               {
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                    som++;
               }
                var somme = som;
              });
              var finalObject = Object.keys(itermeidiaryObject).map(function(key) {
                return {
                  label: key,
                  y: itermeidiaryObject[key]
                }
              });
              
              var pievalues = finalObject.map(function(value, index) {
                return value.y;
              });
              
              var labels = finalObject.map(function(value, index) {
                return value.label;
              });
              
              var colorscheme = colors.slice(0, labels.length);

    var ctx = document.getElementById('myChart').getContext('2d');

if(window.mychartBar != undefined)
{
  window.mychartBar.destroy();
}

    window.mychartBar = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
                labels: labels,
                datasets: [{
                  data: pievalues,
                  backgroundColor: colorscheme
                }]
            },

        options: {
        responsive: true,
        scales: {

            xAxes: [{
                ticks: {
                    beginAtZero: true// Edit the value according to what you need
                    
                },
                scaleLabel: {
                    display: true,
                    labelString: "Number of Departement"
                  },
            }],


            yAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: "Name of Departement"
                  },
            }]
        },
        title: {
      display: true,
      position: "top",
      fontSize: 18,
      fontColor: "#111"
    },
   legend: {
      display: false
    }

      }
    });

    if(som==0)
          {
            $("#myChart").hide();
            $("#affichagesEchart22").hide();
            $("#affichagesEchart2").show();
            
          }
    


     }
    });
});
  

//Issues By Project Owner
function ResourcesByRBS() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;
              var itermeidiaryObject = {}; 
               var som = 0;

            $.each(dataResults, function(key, value) 
            { 

                    var epn = value.RBS;

                    if(epn ==null)
                    {
                      epn = "";
                    }
                
             
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                  som++;
                
               
                var somme = som;
              });

              var finalObject = Object.keys(itermeidiaryObject).map(function(key) {
                return {
                  label: key,
                  y: itermeidiaryObject[key]
                }
              });
              
              var pievalues = finalObject.map(function(value, index) {
                return value.y;
              });
              
              var labels = finalObject.map(function(value, index) {
                return value.label;
              });
              
              var colorscheme = colors1.slice(0, labels.length);

      var ctx2 = document.getElementById("echart_donut");
      if (window.mychartPie != undefined)
      {
        window.mychartPie.destroy();
      }

window.mychartPie = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: labels ,
    datasets: [{
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },
  options:{
    responsive: true,
    plugins:{
  labels: [
  {
    render: 'label',
    fontColor: '#000',
    position: 'outside',
    fontSize: 10
  },
  {
    fontColor: '#FFFFFF',
    render :'value',
    fontSize: 12
  }
  ]
}
  }
});

      if(som==0)
          {
            $("#echart_donut").hide();
            $("#affichagesEchart23").hide();
            $("#affichagesEchart3").show();
            
          }
    

 }  
});
}                                  
  _spBodyOnLoadFunctionNames.push("ResourcesByRBS");          
            
