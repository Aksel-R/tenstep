
function MainFilter()
{
 
  function filtrerTableau()
  {
    var input1, input2, input3, input4, filter, filter2, filter3, filter4, table, tr, td, td2, td3, td4, i, k;
    input1 = document.getElementById("mylist3");
    input2 = document.getElementById("mylist2");
    input3 = document.getElementById("mylist1");
    input4 = document.getElementById("mylist4");
    filter = input1.value.toUpperCase();
    filter2 = input2.value.toUpperCase();
    filter3 = input3.value.toUpperCase();
    filter4 = input4.value.toUpperCase();
    table = document.getElementById("tableaux");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[7];
    td2 = tr[i].getElementsByTagName("td")[8];
    td3 = tr[i].getElementsByTagName("td")[2];
    td4 = tr[i].getElementsByTagName("td")[5];
    if ((td3) ||(td)||(td2)||(td4)){
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
    
          for(var i=1;i<numRows4;i++)
          {
            if (tr[i].style.display != "none")
            {
            var epn = tbl.rows[i].cells[7].innerHTML;
            var som = 0;
            if (epn != null) {
              itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
            }
            else
            {
              if(epn =="")
              {
                  itermeidiaryObject[epn] = "Non Saisie";   
              }
            }
            var somme = som;
            }
          }
            if(somme==0)
          {
            $("#echart_pie").hide();
            
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
    fontColor: 'white',
    render: 'value',
    fontSize: 12
  }
  ]
}
  }
});

  }

function filterBarchart()
  {
    var numRows4 = document.getElementById("tableaux").rows.length;
    console.log(numRows4);
    var tbl = document.getElementById("tableaux");   
    var tr = tbl.getElementsByTagName("tr");
    var itermeidiaryObject = {};
    
          for(var i=1;i<numRows4;i++)
          {
            if (tr[i].style.display != "none")
            {
            var epn = tbl.rows[i].cells[2].innerHTML;
            var som = 0;
            if (epn != null) {
              itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
            }
            var somme = som;
            }
          }
            if(somme==0)
          {
            $("#myChart").hide();
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
                    beginAtZero: true // Edit the value according to what you need
                }
            }],
            yAxes: [{
                stacked: true
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
  }



 function filterResourcePiechart()
  {
    var numRows4 = document.getElementById("tableaux").rows.length;
    console.log(numRows4);
    var tbl = document.getElementById("tableaux");   
    var tr = tbl.getElementsByTagName("tr");
    var itermeidiaryObject = {};
    
          for(var i=1;i<numRows4;i++)
          {
            if (tr[i].style.display != "none")
            {
            var epn = tbl.rows[i].cells[6].innerHTML;
            var som = 0;
            if (epn != null) {
              itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
            }
      

            var somme = som;
            }
          }
            if(somme==0)
          {
            $("#echart_donut").hide();
            
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
    fontColor: 'white',
    render: 'value',
    fontSize: 12
  }
  ]
}
  }
});
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
                    
                  
                       $('#mylist4').append($('<option>',
                           {
                              text : RBSResource
                            }));   
                     }
                       var opt = {};
                              $("#mylist4 > option").each(function () {
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
                  
                
                       $('#mylist3').append($('<option>',
                           {
                              text : resourceCalendar
                            }));   

                       var opt = {};
                              $("#mylist3 > option").each(function () {
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
                  
                
                       $('#mylist1').append($('<option>',
                           {
                              text : DepResource
                            })); 

                            var opt = {};
                              $("#mylist1 > option").each(function () {
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
                if(ResourceType != "")
                {
                  var ResourcesType = ResourceType;
                 

                       $('#mylist2').append($('<option>',
                           {
                              text : ResourcesType
                            })); 

                            var opt = {};
                              $("#mylist2 > option").each(function () {
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


//Affichage du Tableau Milestones Completed Table
var aujour = new Date();
var dd = String(aujour.getDate()).padStart(2, '0');
var mm = String(aujour.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = aujour.getFullYear();

aujour = yyyy + '-' + mm + '-' + dd;
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?&$Select=ProjectId,ProjectName,TaskName,TaskStartDate,TaskFinishDate,TaskPercentCompleted,TaskIsMilestone&$filter=TaskIsMilestone%20eq%20true%20and%20TaskFinishDate%20gt%20datetime%27"+aujour+"%27",                           
         
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo = "";            
            $.each(dataResults, function(key, value) 
            {      

                  moment.locale('fr');
                  var nomTache = value.TaskName;
                  var nomProjet = value.ProjectName;
                  var milestone = value.TaskIsMilestone;
                  var datefinishs = value.TaskActualFinishDate;

                  if(datefinishs ==null)
                  {
                    var datefinish = "[Blank]";
                  }
                  else{
                    var datefinish = moment(datefinishs).format('L');
                  }
             
                    if(milestone == true)
                    {
                    var tr;
                    tr = $("<tr class='even pointer'>");
                        tr.append("<td>" + nomProjet + "</td>");
                        tr.append("<td><i class='glyphicon glyphicon-link w3-spin w3-jumbo'></i></td>")
                        tr.append("<td class='dep'>" + nomTache+ "</td>"); 
                        tr.append("<td class='rgroup'>" + datefinish+ "</td>");
                    $("#tableaux > tbody").append(tr);

                    }
                        
                    


            });

$("#tableaux").DataTable();


$(document).ready(function(){
    $("#tableaux td.dep:contains('[Blank]')").css('background-color','#ccc').css('color','black');
    $("#tableaux td.equip:contains('[Blank]')").css('background-color','#ccc').css('color','black');
    $("#tableaux td.rbs:contains('[Blank]')").css('background-color','#ccc').css('color','black');
    $("#tableaux td.rgroup:contains('[Blank]')").css('background-color','#ccc').css('color','black');
});

              
}   
});





        








//Affichage du Tableau Milestones Upcoming Table
function LoadMilestoneUpcomingTable() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo = "";            
            $.each(dataResults, function(key, value) 
            {      

                  moment.locale('fr');
                  
                  var nomTache = value.TaskName;
                  var nomProjet = value.ProjectName;
                  var milestone = value.TaskIsMilestone;
                  var datefinishs = value.TaskFinishDate;

                  if(datefinishs ==null)
                  {
                    var datefinish = "";
                  }
                  else{
                    var datefinish = moment(datefinishs).format('L');
                  }
             
                    if(milestone ==true)
                    {
                    var tr;
                    tr = $("<tr class='even pointer'>");
                        tr.append("<td>" + nomProjet + "</td>");
                        tr.append("<td><i class='glyphicon glyphicon-link w3-spin w3-jumbo'></i></td>")
                        tr.append("<td class='dep'>" + nomTache+ "</td>"); 
                        tr.append("<td class='rgroup'>" + datefinish+ "</td>");
                    $('#tableaux1 > tbody').append(tr);
                    
                    }
                 
                    
            });

     $("#tableaux1").DataTable();



$(document).ready(function(){
    $("#tableaux1 td.dep:contains('null')").css('background-color','#ccc').css('color','black');
    $("#tableaux1 td.equip:contains('null')").css('background-color','#ccc').css('color','black');
    $("#tableaux1 td.rbs:contains('null')").css('background-color','#ccc').css('color','black');
    $("#tableaux1 td.rgroup:contains('null')").css('background-color','#ccc').css('color','black');
});

              
}   
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadMilestoneUpcomingTable");






//var colors =  ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];

//var colors =  ["#008000", "#455c73", "#3498db", "#26b99a"];

var colors =  ["#008000", "#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];



//PieChart That show you All Resources By Group
function MilestoneCompleted() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;
              var itermeidiaryObject = {};         
            $.each(dataResults, function(key, value) 
            { 

                var epn = value.ProjectName;
                var som = 0;

                if(epn != null)
                {
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
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
      fontColor: '#000',
      render: 'value',
      fontSize : 12
      
    }
  ]
}
  }
});
    

 }  
});
}                                  
  _spBodyOnLoadFunctionNames.push("MilestoneCompleted");    



  //Fonction for Resources by Departement

var colors =  ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];



  

//Issues By Project Owner
function MilestonePlanned() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;
              var itermeidiaryObject = {};         
            $.each(dataResults, function(key, value) 
            { 

                    var epn = value.ProjectName;
                var som = 0;
                //if (epn != null) {
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                /*}
                else{
                  epn = "vide";
                }*/
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

                  


      var ctx2 = document.getElementById("echart_donut");
      if (window.mychartPie != undefined)
      {
        window.mychartPie.destroy();
      }

window.mychartPie = new Chart(ctx2, {
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
      fontColor: '#000',
      render: 'value',
      fontSize : 12
      
    }
  ]
}
  }
});
    

 }  
});
}                                  
  _spBodyOnLoadFunctionNames.push("MilestonePlanned");          
            
