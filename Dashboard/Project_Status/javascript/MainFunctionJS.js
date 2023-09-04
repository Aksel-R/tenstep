window.addEventListener('load',function() {

     

	});

	

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

}

	//Load All Projects






var urlProject = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?&$filter=Projet_presentation%20eq%20%27Actif%27";


var responseerProject = responseerProject || [];

function GetListItemsProject(){

	var som=0;
	var proCost=0;
	var proCostVar=0;
	var projWork=0;
	var projWorkV=0;
	
		$.ajax({	url: urlProject,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseerProject = responseerProject.concat(data.d.results);
                if (data.d.__next) {
                    urlProject = data.d.__next;
                    GetListItemsProject();
                }
				$.each(responseerProject, function(key, value) 
				{                  
					var pr = value.ProjectId;
					var dur = parseInt(value.ProjectDuration);
					var nom = value.ProjectName;
					var ownerName = value.ProjectOwnerName;
					var startDate = value.ProjectStartDate;
					var projectType = value.EnterpriseProjectTypeName;
					var deparTest = value.EnterpriseProjectTypeName;
					var projCost = value.ProjectCost;
					var prjWork = value.ProjectWork;
					var workCompl = value.ProjectPercentCompleted;
					var stat = value.StatutProjet;
					var desc = value.ProjectDescription;
					var cost = parseInt(value.ProjectCost);
					var costV = parseInt(value.ProjectCostVariance);
					var pWork = parseInt(value.ProjectWork);
					var pWorkV = parseInt(value.ProjectWorkVariance);
					var table = document.getElementById("myTable");

						
					if(deparTest ==undefined)
					{
						var deparTest = "";
					}

				
						
						
						
						$('#mylist').append($('<option>',
							 {
								text : nom,
								value : pr
							  }));
							  
							  
						var opt = {};
                              $("#mylist > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            });

							
							
							
																					  


					listItemInfo = pr;

				   proCost += cost;
				   proCostVar += costV;
				   projWork += pWork;
				   projWorkV += pWorkV;
				
		 
		 
				 som++;

						var row = table.insertRow();
	  var cell1 = row.insertCell(0);
	  var cell2 = row.insertCell(1);
	  var cell3 = row.insertCell(2);
	  var cell4 = row.insertCell(3);
	  var cell5 = row.insertCell(4);
	  var cell6 = row.insertCell(5);
	  var cell7 = row.insertCell(6);
	  var cell8 = row.insertCell(7);
	  var cell9 = row.insertCell(8);
	  //var cell10 = row.insertCell(9);
	  

	  
	  
	  cell1.innerHTML = nom;
	  cell2.innerHTML = dur;
	  cell3.innerHTML = ownerName;
	  moment.locale('fr');
	  cell4.innerHTML = moment(startDate).format('LL');
	  cell5.innerHTML = projectType;
	  cell6.innerHTML = deparTest;
	  var projCost1 = parseInt(projCost);
	  cell7.innerHTML = projCost1;
	  var prjWork1 =parseInt(prjWork);
	  var prjWork2=prjWork1/8;
	  cell8.innerHTML = prjWork2;
	  if(stat=="Terminée"){
	  var img = document.createElement('img');
    img.src = "/sites/DemoPWA/_catalogs/masterpage/Dashboard/Project_Status/img/term.png";
	img.title="Terminée";
	 cell9.innerHTML = "";
	  cell9.appendChild(img);}
  else if(stat=="Bloquée"){
	  var img = document.createElement('img');
    img.src = "/sites/DemoPWA/_catalogs/masterpage/Dashboard/Project_Status/img/bloq.png";
	  img.title="Bloquée";
	  cell9.innerHTML = "";
	  cell9.appendChild(img);}
	    else if(stat=="Non spécifiée"){
	  var img = document.createElement('img');
    img.src = "/sites/DemoPWA/_catalogs/masterpage/Dashboard/Project_Status/img/nonsp.png";
	  img.title="Non spécifiée";
	  cell9.innerHTML = "";
	  cell9.appendChild(img);}
	  	    else if(stat=="En retard"){
	  var img = document.createElement('img');
    img.src = "/sites/DemoPWA/_catalogs/masterpage/Dashboard/Project_Status/img/enre.png";
	img.title="En retard";
	 cell9.innerHTML = "";
	  cell9.appendChild(img);}
			else if(stat=="Sans retard"){
	  var img = document.createElement('img');
    img.src = "/sites/DemoPWA/_catalogs/masterpage/Dashboard/Project_Status/img/sare.png";
	  img.title="Sans retard";
	  cell9.innerHTML = "";
	  cell9.appendChild(img);}
	  		else if(stat=="En avance"){
	  var img = document.createElement('img');
    img.src = "/sites/DemoPWA/_catalogs/masterpage/Dashboard/Project_Status/img/avan.png";
	  img.title="En avance";
	  cell9.innerHTML = "";
	  cell9.appendChild(img);}
	  	  else {var img = document.createElement('img');
    img.src = "/sites/DemoPWA/_catalogs/masterpage/Dashboard/Project_Status/img/sans.png";
	  img.title="Sans Statut";
	  cell9.innerHTML = "";
	  cell9.appendChild(img);


	}
	
		});
	
	}   
	});

}
GetListItemsProject();








	//script tableau jalons terminés

var aujour = new Date();
var dd = String(aujour.getDate()).padStart(2, '0');
var mm = String(aujour.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = aujour.getFullYear();

aujour = yyyy + '-' + mm + '-' + dd;



				$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?&$Select=ProjectId,ProjectName,TaskName,TaskStartDate,TaskFinishDate,TaskPercentCompleted,TaskIsMilestone&$filter=TaskIsMilestone%20eq%20true%20and%20TaskFinishDate%20lt%20datetime%27"+aujour+"%27%20and%20TaskPercentCompleted%20eq%20100",                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
					var prms = value.ProjectId;
					var nomms = value.ProjectName;
					var tachems = value.TaskName;
					var startDatems = value.TaskStartDate;
					var finishDatems = value.TaskFinishDate;
					var achevms = value.TaskPercentCompleted;
					var tablems = document.getElementById("msTable");

						

						
						
						
						
						
						if(nomms!=null)
						{
							nomms = nomms;

						

							
							
							
																					  


					listItemInfo = prms;

				
		 


						var row = tablems.insertRow();
	  var cell1 = row.insertCell(0);
	  var cell2 = row.insertCell(1);
	  var cell3 = row.insertCell(2);
	  var cell4 = row.insertCell(3);
	  var cell5 = row.insertCell(4);

	  
	  cell1.innerHTML = nomms;
	  cell2.innerHTML = tachems;
	  cell3.innerHTML = moment(startDatems).format('LL');
	  moment.locale('fr');
	  cell4.innerHTML = moment(finishDatems).format('LL');
	  cell5.innerHTML = achevms;
	 
	   }




		});




	}   
	});





	//script tableau jalons à venir

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
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
					var prmsav = value.ProjectId;
					var nommsav = value.ProjectName;
					var tachemsav = value.TaskName;
					var startDatemsav = value.TaskStartDate;
					var finishDatemsav = value.TaskFinishDate;
					var achevmsav = value.TaskPercentCompleted;
					var tablemsav = document.getElementById("msTableav");

						

						
						
						
						
						
						if(nommsav!=null)
						{
							nommsav = nommsav;

						

							
							
							
																					  


					listItemInfo = prmsav;

				
		 


						var row = tablemsav.insertRow();
	  var cell1 = row.insertCell(0);
	  var cell2 = row.insertCell(1);
	  var cell3 = row.insertCell(2);
	  var cell4 = row.insertCell(3);
	  var cell5 = row.insertCell(4);

	  
	  cell1.innerHTML = nommsav;
	  cell2.innerHTML = tachemsav;
	  cell3.innerHTML = moment(startDatemsav).format('LL');
	  moment.locale('fr');
	  cell4.innerHTML = moment(finishDatemsav).format('LL');
	  cell5.innerHTML = achevmsav;
	 
	   }




		});




	}   
	});






	//script tableau jalons en retard

var aujour = new Date();
var dd = String(aujour.getDate()).padStart(2, '0');
var mm = String(aujour.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = aujour.getFullYear();

aujour = yyyy + '-' + mm + '-' + dd;



				$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?&$Select=ProjectName,TaskName,TaskStartDate,TaskFinishDate,TaskPercentCompleted,TaskIsMilestone&$filter=TaskIsMilestone%20eq%20true%20and%20TaskFinishDate%20lt%20datetime%27"+aujour+"%27%20and%20TaskPercentCompleted%20lt%20100",                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
					var prmser = value.ProjectId;
					var nommser = value.ProjectName;
					var tachemser = value.TaskName;
					var startDatemser = value.TaskStartDate;
					var finishDatemser = value.TaskFinishDate;
					var achevmser = value.TaskPercentCompleted;
					var tablemser = document.getElementById("msTableer");

						

						
						
						
						
						
						if(nommser!=null)
						{
							nommser = nommser;

						

							
							
							
																					  


					listItemInfo = prmser;

				
		 


						var row = tablemser.insertRow();
	  var cell1 = row.insertCell(0);
	  var cell2 = row.insertCell(1);
	  var cell3 = row.insertCell(2);
	  var cell4 = row.insertCell(3);
	  var cell5 = row.insertCell(4);

	  
	  cell1.innerHTML = nommser;
	  cell2.innerHTML = tachemser;
	  cell3.innerHTML = moment(startDatemser).format('LL');
	  moment.locale('fr');
	  cell4.innerHTML = moment(finishDatemser).format('LL');
	  cell5.innerHTML = achevmser;
	 
	   }




		});




	}   
	});





	
	

function myFunction(selTag) {
 var change = document.getElementById("mylist").text;
  var projid = document.getElementById("mylist").value;
  var x = selTag.options[selTag.selectedIndex].text;
	var add="/_api/ProjectData/[en-US]/Tasks?$select=TaskOutlineNumber,TaskName,TaskPercentCompleted&$filter=ProjectName%20eq%20%27"+x+"%27%20and%20TaskIsSummary%20eq%20true%20and%20TaskIsProjectSummary%20eq%20false%20and%20TaskOutlineLevel%20eq%201%20&$order%20by%20CAST(TaskOutlineNumber%20AS%20SIGNED)";
	var add2="/_api/ProjectData/[en-US]/Assignments?$filter=ProjectName%20eq%20%27"+x+"%27&$Select=ResourceName,AssignmentWork&$orderby=ProjectName,ResourceName";
	//adresse pour Milestones
	var proCost2;
	var proCostVar2;
	var projWork2;
	var projWorkV2;
	var sommeis=0;
	var sommeri=0;
	var valuedon;
	var nres=0;
	var ntask=0;
	var nomproglis="Coho Health Assessment Tool";
	var basnum = [];
	var maxi;
	var glissement;
	var a;
	var b;
	var c;
	var d;
	//var urlProjects = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects";
	var urls = [ _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects", _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines"];
	var response = response || [];
	var urly =  _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+projid+"')/Tasks";
	 






				$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
					var pr = value.ProjectId;
					var nom = value.ProjectName;
					var desc2 = value.ProjectDescription;
					var cost = parseInt(value.ProjectCost);
					
					var costV2 = parseInt(value.ProjectCostVariance);
					var pWork2 = parseInt(value.ProjectWork);
					var pWorkV2 = parseInt(value.ProjectWorkVariance);
					var ppc = parseInt(value.ProjectPercentCompleted);
					
					
					if(nom==x)
					{
					proCost2=cost;
					proCostVar2=costV2;
					projWork2=pWork2;
					projWorkV2=pWorkV2;
					desc3=desc2;
				    valuedon = ppc;
					
					
					$(".progress").attr("data-percentage", ppc.toString());
					
					
					
					
					}
					//---------
					

  
				  //------
					
				});
				  document.getElementById("costpro").innerHTML = conToMill(proCost2);
				  document.getElementById("costprovari").innerHTML = conToMill(proCostVar2);
				  document.getElementById("prowork").innerHTML = conToMill(projWork2);
				  document.getElementById("proworkVari").innerHTML = conToMill(projWorkV2);
				  
				  
				  if(desc3.length=="")
				  {
					$("#descrtab").hide();
				  }
				  else
				  {
				  document.getElementById("textdescr").innerHTML = desc3;
					$("#descrtab").show();
				  }
				  
				  document.getElementById("pourach").innerHTML=valuedon+"%";
				  	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues",                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
				var pr = value.IssueId;
				var nom2 = value.ProjectName;
				if(nom2==x)
				{
				sommeis++;
				}
				
				
				});
				  document.getElementById("issuesField").innerHTML = sommeis;


				  }   
	});
				  					  	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks",                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
				var pr = value.RiskId;
				var nom3 = value.ProjectName;
				if(nom3==x)
				{
				sommeri++;
				}
				
				
				});
				  document.getElementById("risksField").innerHTML = sommeri;
				  }   
	});
	
	//------------------------------------
	
	   
	
	//------------------------------------
					  					  	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + add2,                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
				
				var numbres = value.ResourceName;
				nres++;
				
				
				});
				  if(nres==0)
				  {
					$("#myChart").hide();
				  }
				  else
				  {
					$("#myChart").show();
				  }
				  }   
	});
	//------------------------------------
	
						  					  	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + add,                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
				
				var numbres = value.TaskName;
				ntask++;
				
				
				});
				  if(ntask==0)
				  {
					$("#myChart2").hide();
				  }
				  else
				  {
					$("#myChart2").show();
				  }
				  }   
	});
	
	//------------------------------------
	
	$.each(urls, function(i,u){ 
     $.ajax(u, 
       { 
         method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},     
         success: function (data) {
            var dataResults = data.d.results;
										
			   
				$.each(dataResults, function(key, value) 
				{                 
				
				var ons = value.ProjectName;
				var bn = value.BaselineNumber;
				if(ons==x)
				
						
					{
						basnum.push(bn);
					}
					
					

					
					
				
				});
				  
				  $.each(dataResults, function(key, value) 
				{                 
				
				var ons = value.ProjectName;
				var pbfd = value.ProjectBaselineFinishDate;
				var pbsd = value.ProjectBaselineStartDate;
				var pfd = value.ProjectFinishDate;
				var psd = value.ProjectStartDate;
				var pide = value.ProjectIdentifier;
				var bn = value.BaselineNumber;
				var du = parseInt(value.ProjectDuration);
				var bsdu = parseInt(value.ProjectBaselineDuration);
				
				if((pide==undefined)&&(ons==x))
					{
					
						
					maxi=Math.max(...basnum);
				  if(bn==maxi)
								{
									console.log("Baseline Start Date: "+moment(pbsd).format('LL'));
									console.log("Baseline Finish Date: "+moment(pbfd).format('LL'));
									b=bsdu;
									
									
								}
								}
								if((pide!=undefined)&&(ons==x))
					{
												console.log("Start Date: "+moment(psd).format('LL'));
						console.log("Finish Date: "+moment(pfd).format('LL'));
						
									a=du;
		

						
						
					c=a-b;
					d=c/b;
					glissement=d*100;
					if(glissement<0)
					{
						glissement=0;
					}
					
					
					glissement = glissement || 0;
						

					}
				
					
					
					
		
						
								});
								document.getElementById("glissField").innerHTML = glissement.toFixed(2)+"%";
         } 
		
		 
       }
     );
});

	
	//------------------------------------
$.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + add,

	
    
	method: "GET",
    headers: { "Accept": "application/json; odata=nometadata" },
    success: function (data) {
	
        if (data.value.length > 0) {

            var pieValues = [];
            var pieLabels = [];

            for (var i = 0; i < data.value.length; i++) {
                pieValues.push(parseInt(data.value[i].TaskPercentCompleted));
                pieLabels.push(data.value[i].TaskName);
				
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
	//-----------------------------------
	
	//2nd chart
	$.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + add2,

	
    
	method: "GET",
    headers: { "Accept": "application/json; odata=nometadata" },
    success: function (data) {
	
        if (data.value.length > 0) {

           var reducedObject = {};
            for (var i = 0; i < data.value.length; i++) {
                    if (!reducedObject[data.value[i].ResourceName]) {
					
                        reducedObject[data.value[i].ResourceName] = 0;
                }
                reducedObject[data.value[i].ResourceName] += parseInt(data.value[i].AssignmentWork);
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
            var ctx = document.getElementById("myChart");

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
        display: true,
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
	

			
			//----------------
		 }   
	});  
				  
				  
				  
document.getElementById("nomprojet").innerHTML=x;

//Filtrer les tableaux

  var input, filter, table, tr, td, tdms, tdsmav, tdmser, i, txtValue;
  input = document.getElementById("mylist");
  filter = x.toUpperCase();
  table = document.getElementById("myTable");
  tablems = document.getElementById("msTable");
  tablemsav = document.getElementById("msTableav");
  tablemser = document.getElementById("msTableer");
  tr = table.getElementsByTagName("tr");
  trms = tablems.getElementsByTagName("tr");
  trmsav = tablemsav.getElementsByTagName("tr");
  trmser = tablemser.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
	//txtValue=td.textContent || td.innerText;
    if (td) {

      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
		
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
    for (i = 0; i < trms.length; i++) {
    tdms = trms[i].getElementsByTagName("td")[0];
    if (tdms) {

      if (tdms.innerHTML.toUpperCase().indexOf(filter) > -1) {
        trms[i].style.display = "";
		
      } else {
        trms[i].style.display = "none";
      }
    }       
  }
    for (i = 0; i < trmsav.length; i++) {
    tdmsav = trmsav[i].getElementsByTagName("td")[0];
    if (tdmsav) {

      if (tdmsav.innerHTML.toUpperCase().indexOf(filter) > -1) {
        trmsav[i].style.display = "";
		
      } else {
        trmsav[i].style.display = "none";
      }
    }       
  }
      for (i = 0; i < trmser.length; i++) {
    tdmser = trmser[i].getElementsByTagName("td")[0];
    if (tdmser) {

      if (tdmser.innerHTML.toUpperCase().indexOf(filter) > -1) {
        trmser[i].style.display = "";
		
      } else {
        trmser[i].style.display = "none";
      }
    }       
  }
  $("#myTable").show();
  $("#msTable").show();
  $("#msTableav").show();
  $("#msTableer").show();
  $("#mstabtit").show();
  $("#ertabtit").show();
  $("#avetit").show();


    function GetListItems(){
        $.ajax({
            url: urly,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response = response.concat(data.d.results);
                if (data.d.__next) {
                    urly = data.d.__next;
                    GetListItems();
                }
				$.each(response, function(key, value) 
				{                 
					var tasky = value.TaskName;
					console.log(tasky);
				});
            },
            error: function(error){
                   
            }
        });
    }
  

	return GetListItems();
  
}


	

	moment.locale('fr', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Aujourd’hui à] LT',
        nextDay : '[Demain à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[Hier à] LT',
        lastWeek : 'dddd [dernier à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'e');
    },
    meridiemParse : /PD|MD/,
    isPM : function (input) {
        return input.charAt(0) === 'M';
    },
    // In case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example).
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
    // },
    meridiem : function (hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // Used to determine first week of the year.
    }
});
