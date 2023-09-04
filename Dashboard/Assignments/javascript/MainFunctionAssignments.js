
function MainFilter()
{
 
  function filtrerTableau()
  {
    var input1, input2, input3, input4, filter, filter1, filter2, filter3, filter4, table, tr, td, td1, td2, td3, td4, i, k;
    input1 = document.getElementById("mylist3"); 
    input2 = document.getElementById("mylist2");
    input3 = document.getElementById("mylist1").value;
    input4 = document.getElementById("mylist4");
    console.log("input3= "+input3);
    filter = input1.value.toUpperCase();
    filter2 = input2.value.toUpperCase();
    filter3 = input3.value.toUpperCase();
    filter4 = input4.value.toUpperCase();
    filter1="select Resource Name";
    table = document.getElementById("tableaux");
    tr = table.getElementsByTagName("tr");
    var grid = document.getElementById("tableaux1");
    var trGird=grid.getElementsByTagName("tr");
  var ele = grid.getElementsByTagName("input");
  var trGird=grid.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[8];
    td2 = tr[i].getElementsByTagName("td")[7];
    td3 = tr[i].getElementsByTagName("td")[6];
    td4 = tr[i].getElementsByTagName("td")[9];
    td1 = tr[i].getElementsByTagName("td")[5];
for(var c = 0; c < ele.length; c++) { 
                if(ele[c].checked){
                  var row = ele[c].parentNode.parentNode;
                 filter1 = row.cells[1].innerHTML.toUpperCase();
                } 
                
            } 
    
    console.log("filter1; "+filter1);
    if(filter1!="SELECT RESOURCE NAME"){
      if (td3||td2||td||td4||td1){
      if ((td1.innerHTML.toUpperCase().indexOf(filter1) > -1)&&(td3.innerHTML.toUpperCase().indexOf(filter3) > -1)&&(td2.innerHTML.toUpperCase().indexOf(filter2) > -1)&&(td.innerHTML.toUpperCase().indexOf(filter) > -1)&&(td4.innerHTML.toUpperCase().indexOf(filter4) > -1)) {
      tr[i].style.display = "";
      } else {
      tr[i].style.display = "none";
      }
    } 
  }else{
      if (td3||td2||td||td4){
      if ((td3.innerHTML.toUpperCase().indexOf(filter3) > -1)&&(td2.innerHTML.toUpperCase().indexOf(filter2) > -1)&&(td.innerHTML.toUpperCase().indexOf(filter) > -1)&&(td4.innerHTML.toUpperCase().indexOf(filter4) > -1)) {
      tr[i].style.display = "";
      } else {
      tr[i].style.display = "none";
      }
    } 
  }
          
    }
    var numRows = document.getElementById("tableaux").rows.length;
  }
 

function filterResourceDochart()
  {
    var numRows4 = document.getElementById("tableaux").rows.length;
    //console.log(numRows4);
    var tbl = document.getElementById("tableaux");   
    var tr = tbl.getElementsByTagName("tr");
    var itermeidiaryObject = {};
    
          for(var i=1;i<numRows4;i++)
          {
            if (tr[i].style.display != "none")
            {
            var epn = tbl.rows[i].cells[13].innerHTML;
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
    fontColor: '#FFFFFF',
    render: 'value',
    fontSize: 12
  }
  ]
}
  }
});

  }

  
  function filterbarchart()
  {
    var numRows = document.getElementById("tableaux").rows.length;
    var tbl = document.getElementById("tableaux");    
    var tr = tbl.getElementsByTagName("tr");
    var reducedObject = {};
    var reducedObject2 = {};
    var count=0;
    
          for(var i=1;i<numRows-1;i++)
          {
            tbl.rows[i].cells[11].innerHTML=tbl.rows[i].cells[11].innerHTML || 0;
            tbl.rows[i].cells[12].innerHTML=tbl.rows[i].cells[12].innerHTML || 0;
            if (tr[i].style.display != "none")
            {
            if (!reducedObject[tbl.rows[i].cells[10].innerHTML]) {
          
                        reducedObject[tbl.rows[i].cells[10].innerHTML] = 0;
            }
            if (!reducedObject2[tbl.rows[i].cells[10].innerHTML]) {
              
                reducedObject2[tbl.rows[i].cells[10].innerHTML] = 0;
            }
            reducedObject[tbl.rows[i].cells[10].innerHTML] += parseInt(tbl.rows[i].cells[11].innerHTML);
            reducedObject2[tbl.rows[i].cells[10].innerHTML] += parseInt(tbl.rows[i].cells[12].innerHTML);
            count++;
            }
          }
          var keys = Object.keys(reducedObject);
          var keys2 = Object.keys(reducedObject2);
          var pieLabels = [];
          var pieValues = [];
          var pieValues2 = [];
          for (var i = 0; i < keys.length; i++) {
              pieValues.push(reducedObject[keys[i]]);
              pieValues2.push(reducedObject2[keys[i]]);
            pieLabels.push(keys[i]);
            
            
          }
          
          var config = {
  type: 'bar',
  data: {
    labels: pieLabels,
    datasets: [{
      label: "Cost of risk",
      backgroundColor: "#3e95cd",
      borderColor:"#3e95cd",
      data: pieValues,
      fill: false,
    }, {
      label: "Cost exposure",
      fill: false,
      backgroundColor: "#8e5ea2",
      borderColor: "#8e5ea2",
      data: pieValues2,
    }]
  },
  options: {
    plugins:{
              
              labels: {
              render: 'value',
              fontSize: 0
              }

            },
    legend: { display: false },
    responsive: true,
    title:{
      display:false
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
   hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
      ticks: {
        minRotation: 90,
    fontSize:10
      },
      stacked: true,
        display: true,
        scaleLabel: {
          display: true,
          labelString: "category",
          fontSize: 14
        }
      }],
      yAxes: [{
      stacked: true,
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Cost",
          fontSize: 14
        },
      }]
    }
  }
};
var ctx = document.getElementById("myChart").getContext("2d");
if (window.twoBars != undefined)
{
    window.twoBars.destroy();
}
//
            window.twoBars = new Chart(ctx, config);
      if(count==0)
            {
              $("#myChart").hide();
              document.getElementById("myChart").innerHTML="No Cost and Cost Exposure";
            }
            else
            {
              $("#myChart").show();
              document.getElementById("myChart").innerHTML="Cost of risk VS Cost exposure";
            }
            
            
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
            var epn = tbl.rows[i].cells[10].innerHTML;
            var som = 0;
            if (epn != null) {
              itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
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
if(window.myChart2 != undefined)
{
  window.myChart2.destroy();
}

window.myChart2 = new Chart(ctx1, {
  type: 'doughnut',
  data: {
  labels: labels ,
  datasets: [{
  data: pievalues,
  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
        "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
        "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
        "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
        "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
        "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
  }]
  },
  options:{
  legend: { display: false },
  responsive: true,
  plugins:{
  
  labels: [{
  render: 'label',
  fontColor: '#000',
  position: 'outside',
  fontSize : 10
  },
  {
  fontColor: '#000',
  render :'value',
  fontSize: 12
  }
  ]
  }
  }
  });
  }



  
  filtrerTableau();
  //filterTableauxByResource();
  filterbarchart();
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








//Affichage du Tableau Resources Table
function LoadResourceTaskProjectTable() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo = "";            
            $.each(dataResults, function(key, value) 
            {           
                moment.locale('fr');

                var nomTache = value.ProjectName;
                var debutTache = value.ProjectStartDate;
                var finTache = value.ProjectFinishDate;
                var taskid = value.TaskId;
                var prId = value.ProjectId;
                var assignId = value.AssignmentId;
                var ResId = value.ResourceId;
                var ownerName = value.ProjectOwnerName;
                var pourcentageTermine = parseFloat(value.ProjectPercentCompleted).toFixed(2);
                var TravailTache = parseFloat(value.ProjectWork).toFixed(3);              
                
                var debutTaches = moment(debutTache).format('L');
                var finTaches =  moment(finTache).format('L');
                var DepResource = value.Servicesduprojet;
                var entreprisePName=value.EnterpriseProjectTypeName;
                var projectActualW=value.ProjectActualWork;
                var projectRemainingW=value.ProjectRemainingWork;
                
                    var tr;
                    tr = $("<tr class='even pointer'>");
                        tr.append("<td>" + nomTache + "</td>"); //0
                        tr.append("<td>" + debutTaches + "</td>"); //1
                        tr.append("<td class='dep'>" + finTaches+ "</td>"); //2
                        tr.append("<td class='rgroup'>" + pourcentageTermine+ "</td>"); //3
                        tr.append("<td>" + TravailTache+ "</td>"); //4
                        tr.append("<td>" + ownerName + "</td>"); //5
                        tr.append("<td style='display:none;'>"+ DepResource +"</td>"); //6
                        tr.append("<td style='display:none;'></td>"); //7
                        tr.append("<td style='display:none;'></td>"); //8
                        tr.append("<td style='display:none;'></td>"); //9
                        tr.append("<td style='display:none;'>" + entreprisePName + "</td>"); //10
                        tr.append("<td style='display:none;'>" + projectRemainingW + "</td>"); //11
                        tr.append("<td style='display:none;'>" + projectActualW + "</td>"); //12
                        tr.append("<td style='display:none;'></td>"); //13
                    $('#tableaux').append(tr);
            });              
}   
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadResourceTaskProjectTable");

 


//fonction charger le groupe de resource pour chaque projet
function getRessourceByProject(){
  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";   
                          var numRows = document.getElementById("tableaux").rows.length;
            for(var i=1;i<numRows;i++)
           {
            $.each(dataResults, function(key, value) 
            {    
              var tbl = document.getElementById("tableaux");
              var NomResource=value.ResourceName;
              var GroupeResource=value.ResourceGroup;
              if(tbl.rows[i].cells[5].innerHTML==NomResource)
               {
                  tbl.rows[i].cells[7].innerHTML = GroupeResource;
               }
            });
           }     
           
                                   
      }
                                  
  });
}
_spBodyOnLoadFunctionNames.push("getRessourceByProject");
//fonction charger calandrier de resource pour chaque projet
function getResourceBaseCalendarByProject(){
  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",   
                        
  method: "GET",
  dataType: "json",
  headers: {Accept: "application/json;odata=verbose"},       
  success: function(data) {     
  var dataResults = data.d.results;
var listItemInfo2 = "";   
var numRows = document.getElementById("tableaux").rows.length;
for(var i=1;i<numRows;i++)
{
$.each(dataResults, function(key, value) 
{    
var tbl = document.getElementById("tableaux");
var NomResource=value.ResourceName;
var calendar=value.ResourceBaseCalendar;
if(tbl.rows[i].cells[5].innerHTML==NomResource)
{
tbl.rows[i].cells[8].innerHTML = calendar;
}
});
}     

 
}

});
}
_spBodyOnLoadFunctionNames.push("getResourceBaseCalendarByProject");
//fonction charger RBS de resource pour chaque projet
function getRBSByProject(){
  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",   
                        
  method: "GET",
  dataType: "json",
  headers: {Accept: "application/json;odata=verbose"},       
  success: function(data) {     
  var dataResults = data.d.results;
var listItemInfo2 = "";   
var numRows = document.getElementById("tableaux").rows.length;
for(var i=1;i<numRows;i++)
{
$.each(dataResults, function(key, value) 
{    
var tbl = document.getElementById("tableaux");
var NomResource=value.ResourceName;
var rbs=value.RBS;
if(tbl.rows[i].cells[5].innerHTML==NomResource)
{
tbl.rows[i].cells[9].innerHTML = rbs;
}
});
}     

 
}

});
}
_spBodyOnLoadFunctionNames.push("getRBSByProject");

//fonction charger workGroup pour chaque projet
function getWorkGroupByProject(){
  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",   
                        
  method: "GET",
  dataType: "json",
  headers: {Accept: "application/json;odata=verbose"},       
  success: function(data) {     
  var dataResults = data.d.results;
var listItemInfo2 = "";   
var numRows = document.getElementById("tableaux").rows.length;
for(var i=1;i<numRows;i++)
{
$.each(dataResults, function(key, value) 
{    
var tbl = document.getElementById("tableaux");
var NomResource=value.ResourceName;
var workGroup=value.ResourceWorkgroup;
if(tbl.rows[i].cells[5].innerHTML==NomResource)
{
tbl.rows[i].cells[13].innerHTML = workGroup;
}
});
}     

 
}

});
}
_spBodyOnLoadFunctionNames.push("getWorkGroupByProject");
/*function LoadResourceNameID()
  {
    $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?",     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;

          var numRows = document.getElementById("tableaux").rows.length;
              
          for(var i=1;i<numRows;i++)
          {
            $.each(dataResults, function(key, value) 
            {
              var tbl = document.getElementById("tableaux");

              var IdResource = value.ResourceId;
              var RName = value.ResourceName;
              var idtache = value.TaskId;

              if(tbl.rows[i].cells[3].innerHTML==IdResource)
                {   
                    
                    tbl.rows[i].cells[8].innerHTML = RName;
                    
                }
            });
          }
                    
        }
  
});

  }  _spBodyOnLoadFunctionNames.push("LoadResourceNameID");*/

/*
window.addEventListener('load',function() {
  
  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;
          var numRows = document.getElementById("tableaux").rows.length;
              
          for(var i=1;i<numRows;i++)
          {
            $.each(dataResults, function(key, value) 
            {
              var tbl = document.getElementById("tableaux");
              var NomResource = value.ResourceName;
              var idResource = value.ResourceId;
              if(tbl.rows[i].cells[6].innerHTML==idResource)
              {
                 tbl.rows[i].cells[7].innerHTML = NomResource;
              }
        });
        }
        
        
                    
                    
        }
  
});
});*/














//Affichage du Tableau Resources Table
function LoadResourceName() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo = "";            
            $.each(dataResults, function(key, value) 
            {           
                
                var ResourceNom = value.ResourceName;
                var ResourceId = value.ResourceId;
                
                    var tr;
                    tr = $("<tr class='even pointer'>");
                        tr.append("<td><input type='radio' id='r1' name='rec' value='"+ResourceNom+"'onchange='MainFilter()'></td>");
                        tr.append("<td>" + ResourceNom + "</td>"); 

                    $('#tableaux1').append(tr);
            });

              
}    
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadResourceName");





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
            $.each(dataResults, function(key, value) 
            { 

                var epn = 0+" h";
                if (value.ResourceWorkgroup!=null) {
                  epn=value.ResourceWorkgroup;
                }
                console.log("epn= "+epn);
                var som = 0;

                
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                
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
    

 }  
});
}                                  
  _spBodyOnLoadFunctionNames.push("ResourceByGroup");    



  //Fonction for Actual and Remaining Project Assignments

var colors =  ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];

window.addEventListener('load',function() {
  $("#myChart").show();
  
      $.ajax({
      url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",
        
      dataType: "json",
      
      method: "GET",
      headers: { "Accept": "application/json; odata=nometadata" },
      success: function (data) {
  
        if (data.value.length > 0) {

           var reducedObject = {};
       var reducedObject2 = {};
            for (var i = 0; i < data.value.length; i++) {
                    if (!reducedObject[data.value[i].EnterpriseProjectTypeName]) {
          
                        reducedObject[data.value[i].EnterpriseProjectTypeName] = 0;
                }
        if (!reducedObject2[data.value[i].EnterpriseProjectTypeName]) {
          
                        reducedObject2[data.value[i].EnterpriseProjectTypeName] = 0;
                }
                reducedObject[data.value[i].EnterpriseProjectTypeName] += parseInt(data.value[i].ProjectRemainingWork);
                reducedObject2[data.value[i].EnterpriseProjectTypeName] += parseInt(data.value[i].ProjectActualWork);
            }
           
           var keys = Object.keys(reducedObject);
       var keys2 = Object.keys(reducedObject2);
        var pieLabels = [];
        var pieValues = [];
        var pieValues2 = [];
        for (var i = 0; i < keys.length; i++) {
            pieValues.push(reducedObject[keys[i]]);
            pieValues2.push(reducedObject2[keys[i]]);
          pieLabels.push(keys[i]);
          
          
        }

var config = {
  type: 'bar',
  data: {
    labels: pieLabels,
    datasets: [{
      label: "Actual Work",
      backgroundColor: "#3e95cd",
      borderColor:"#3e95cd",
      data: pieValues,
      fill: false,
    }, {
      label: "Remaining Work",
      fill: false,
      backgroundColor: "#394550",
      borderColor: "#394550",
      data: pieValues2,
    }]
  },
  options: {
    plugins:{
              
              labels: {
              render: 'value',
              fontSize: 0
              }

            },
    legend: { display: false },
    responsive: true,
    title:{
      display:false
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
   hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
      ticks: {
        minRotation: 90,
    fontSize:10
      },
      stacked: true,
        display: true,
        scaleLabel: {
          display: false
        }
      }],
      yAxes: [{
      stacked: true,
        display: true,
        scaleLabel: {
          display: false,
        },
      }]
    }
  }
};

var ctx = document.getElementById("myChart").getContext("2d");
if (window.twoBars != undefined)
{
    window.twoBars.destroy();
}
//
            window.twoBars = new Chart(ctx, config);
}
        }
    });

});

//Function Load in Graph the All EnterpriseProjectTypeName
function EnterpriseProjectTypeNameFunction() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                                      var dataResults = data.d.results;
                                      var itermeidiaryObject = {};         
                                      $.each(dataResults, function(key, value) 
                                      { 
                                      
                                            var epn = value.EnterpriseProjectTypeName;
                                        var som = 0;
                                        if (epn != null) {
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
                                      
                                      
                                      
                                          
                                      var ctx1 = document.getElementById("echart_donut").getContext('2d');
                                      
                                      if (window.myChart2 != undefined)
                                      {
                                        window.myChart2.destroy();
                                      }
                                      //
                                      window.myChart2 = new Chart(ctx1, {
                                      type: 'doughnut',
                                      data: {
                                      labels: labels ,
                                      datasets: [{
                                      data: pievalues,
                                      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                                            "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                                            "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                                            "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                                            "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                                            "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
                                      }]
                                      },
                                      options:{
                                      legend: { display: false },
                                      responsive: true,
                                      plugins:{
                                      
                                      labels: [{
                                      render: 'label',
                                      fontColor: '#000',
                                      position: 'outside',
                                      fontSize : 10
                                      },
                                      {
                                      fontColor: '#000',
                                      render :'value',
                                      fontSize: 12
                                      }
                                      ]
                                      }
                                      }
                                      });
                                      
                                      
                                      }  
                                      });
}                                  
  _spBodyOnLoadFunctionNames.push("EnterpriseProjectTypeNameFunction");          
            

 function filterByResource() {
 
  
}