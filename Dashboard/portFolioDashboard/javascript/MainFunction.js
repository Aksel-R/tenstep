function MainFunction()
{
	//Les variables qu'on va utiliser
		var nomress = $("#select option:selected").text();
		var idress = document.getElementById("select").value;
		var numass=0;
		var urlGetAssignments =  _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources(guid'"+idress+"')/Assignments";
		var responseGetAssignments = responseGetAssignments || [];
		var numassw=0;
		var urlGetAssignmentWork =  _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources(guid'"+idress+"')/Assignments";
		var responseGetAssignmentWork = responseGetAssignmentWork || [];
		var numassacw=0;
		var urlGetAssignmentActualWork =  _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources(guid'"+idress+"')/Assignments";
		var responseGetAssignmentActualWork = responseGetAssignmentActualWork || [];
		var numassrew=0;
		var urlGetAssignmentRemainingWork =  _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources(guid'"+idress+"')/Assignments";
		var responseGetAssignmentRemainingWork = responseGetAssignmentRemainingWork || [];
		var cost=0;
		var urlGetCost =  _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources(guid'"+idress+"')/Assignments";
		var responseGetCost = responseGetCost || [];
		var accost=0;
		var urlGetActualCost =  _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources(guid'"+idress+"')/Assignments";
		var responseGetActualCost = responseGetActualCost || [];
		var recost=0;
		var urlGetRemainingCost =  _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources(guid'"+idress+"')/Assignments";
		var responseGetRemainingCost = responseGetRemainingCost || [];
		var numproj=0;
		var urlGetProjects =  _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectName%20ne%20%27Opérations%20d’administration%20de%20feuilles%20de%20temps%27 and Projet_presentation%20eq%20%27Actif%27";
		var responseGetProjects = responseGetProjects || [];
	
	
	function GetResName()
	{
		document.getElementById("nomres").innerHTML = nomress;
	}
	
	
	function GetEmail()
	{
		var nomress = $("#select option:selected").text();
		var madd;
						  	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
				var nomres = value.ResourceName;
				var mailadd = value.ResourceEmailAddress;
				if(nomres==nomress)
				{
					madd = mailadd;
					if(madd != null && madd.length < 1)
					{
						madd="Adresse inexistante";
					}
					if(madd == null)
					{
						madd="Adresse inexistante";
					}
				}
				
				
				});
				  document.getElementById("email").innerHTML = madd;


				  }   
	});
	}
	
	
	
	function GetGroup()
	{
		var nomress = $("#select option:selected").text();
		var resgr;
						  	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
				var nomres = value.ResourceName;
				var resgroup = value.ResourceGroup;
				if(nomres==nomress)
				{
					resgr = resgroup;
					if(resgr != null && resgr.length < 1)
					{
						resgr="Groupe inexistant";
					}
					if(resgr == null)
					{
						resgr="Groupe inexistant";
					}
				}
				
				
				});
				  document.getElementById("groupres").innerHTML = resgr;


				  }   
	});
	}
	
	
	
	
	
	function GetDepart()
	{
		var nomress = $("#select option:selected").text();
		var resdepartment;
						  	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
				var nomres = value.ResourceName;
				var resdepar = value.Servicesderessources;
				if(nomres==nomress)
				{
					resdepartment = resdepar;
					if(resdepartment != null && resdepartment.length < 1)
					{
						resdepartment="Département inexistant";
					}
					if(resdepartment == null)
					{
						resdepartment="Département inexistant";
					}
				}
				
				
				});
				  document.getElementById("serv").innerHTML = resdepartment;


				  }   
	});
	}
	
	
	
	
	function GetCalendar()
	{
		var nomress = $("#select option:selected").text();
		var calna;
						  	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
				var nomres = value.ResourceName;
				var resbasecal = value.ResourceBaseCalendar;
				if(nomres==nomress)
				{
					calna = resbasecal;
					if(calna != null && calna.length < 1)
					{
						calna="Calendrier inexistante";
					}
					if(calna == null)
					{
						calna="Calendrier inexistante";
					}
				}
				
				
				});
				  document.getElementById("calen").innerHTML = calna;


				  }   
	});
	}
	
	
	
	
	function GetRate()
	{
		var nomress = $("#select option:selected").text();
		var rat;
						  	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
				var nomres = value.ResourceName;
				var ratey = parseInt(value.ResourceStandardRate);
				if(nomres==nomress)
				{
					rat = ratey;
					if(rat == null)
					{
						rat="Taux inexistant";
					}
				}
				
				
				});
				  document.getElementById("rate").innerHTML = rat;


				  }   
	});
	}
	
	
	
	
	function GetType()
	{
		var nomress = $("#select option:selected").text();
		var typ;
						  	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
				var nomres = value.ResourceName;
				var typy = value.TypeName;
				if(nomres==nomress)
				{
					typ = typy;
					if(typ != null && typ.length < 1)
					{
						typ="Type inexistante";
					}
					if(typ == null)
					{
						typ="Type inexistant";
					}
				}
				
				
				});
				  document.getElementById("costtype").innerHTML = typ;


				  }   
	});
	}
	
	
	
	
	function GetMaxUnits()
	{
		var nomress = $("#select option:selected").text();
		var munits;
						  	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources",                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{                 
				var nomres = value.ResourceName;
				var maxunits = parseInt(value.ResourceMaxUnits);
				if(nomres==nomress)
				{
					munits = maxunits;
					if(munits != null && munits.length < 1)
					if(munits == null)
					{
						munits="Type inexistant";
					}
				}
				
				
				});
				  document.getElementById("maxunits").innerHTML = munits;


				  }   
	});
	}
	
	
	
	
	
	function GetAssignments()
	{
						  	$.ajax({url: urlGetAssignments,  
									method: "GET",  
									headers: {"Accept": "application/json; odata=verbose"  
									},
									success: function(data){
										responseGetAssignments = responseGetAssignments.concat(data.d.results);
										if (data.d.__next) {
											urlGetAssignments = data.d.__next;
											GetAssignments();
										}
										$.each(responseGetAssignments, function(key, value) 
										{                  
											var nomres = value.ResourceName;
											if(nomres==nomress)
											{
												numass++;
											}
										
										
										});
				  document.getElementById("assnum").innerHTML = conToKM(numass);


				  }
	});
	}
	
	
	
	
	
	function GetAssignmentWork()
	{
						  	$.ajax({url:urlGetAssignmentWork,                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										responseGetAssignmentWork = responseGetAssignmentWork.concat(data.d.results);
										if (data.d.__next) {
											urlGetAssignmentWork = data.d.__next;
											GetAssignmentWork();
										}
										
				$.each(responseGetAssignmentWork, function(key, value) 
				{                 
				var nomres = value.ResourceName;
				var awo = parseInt(value.AssignmentWork);
				if(nomres==nomress)
				{
					numassw=numassw+awo;
				}
				
				
				});
				  document.getElementById("asswork").innerHTML = conToKM(numassw);


				  }   
	});
	}
	
	
	
	
	function GetAssignmentActualWork()
	{
						  	$.ajax({url:urlGetAssignmentActualWork,                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										responseGetAssignmentActualWork = responseGetAssignmentActualWork.concat(data.d.results);
										if (data.d.__next) {
											urlGetAssignmentActualWork = data.d.__next;
											GetAssignmentActualWork();
										}
										
				$.each(responseGetAssignmentActualWork, function(key, value) 
				{                 
				var nomres = value.ResourceName;
				var aacwo = parseInt(value.AssignmentActualWork);
				if(nomres==nomress)
				{
					numassacw=numassacw+aacwo;
				}
				
				
				});
				  document.getElementById("actualwork").innerHTML = conToKM(numassacw);


				  }   
	});
	}
	
	
	
	
	
	function GetAssignmentRemainingWork()
	{
						  	$.ajax({url:urlGetAssignmentRemainingWork,                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										responseGetAssignmentRemainingWork = responseGetAssignmentRemainingWork.concat(data.d.results);
										if (data.d.__next) {
											urlGetAssignmentRemainingWork = data.d.__next;
											GetAssignmentRemainingWork();
										}
										
				$.each(responseGetAssignmentRemainingWork, function(key, value) 
				{                 
				var nomres = value.ResourceName;
				var arewo = parseInt(value.AssignmentRemainingWork);
				if(nomres==nomress)
				{
					numassrew=numassrew+arewo;
				}
				
				
				});
				  document.getElementById("remainingwork").innerHTML = conToKM(numassrew);


				  }   
	});
	}
	
	
	
	
	function GetCost()
	{
						  	$.ajax({url:urlGetCost,                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										responseGetCost = responseGetCost.concat(data.d.results);
										if (data.d.__next) {
											urlGetCost = data.d.__next;
											GetCost();
										}
										
				$.each(responseGetCost, function(key, value) 
				{                 
				var nomres = value.ResourceName;
				var costy = parseInt(value.AssignmentCost);
				if(nomres==nomress)
				{
					cost=cost+costy;
				}
				
				
				});
				  document.getElementById("cost").innerHTML = conToKM(cost);


				  }   
	});
	}
	
	
	
	
	function GetActualCost()
	{
						  	$.ajax({url:urlGetActualCost,                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										responseGetActualCost = responseGetActualCost.concat(data.d.results);
										if (data.d.__next) {
											urlGetActualCost = data.d.__next;
											GetActualCost();
										}
										
				$.each(responseGetActualCost, function(key, value) 
				{                 
				var nomres = value.ResourceName;
				var accosty = parseInt(value.AssignmentActualCost);
				if(nomres==nomress)
				{
					accost=accost+accosty;
				}
				
				
				});
				  document.getElementById("actualcost").innerHTML = conToKM(accost);


				  }   
	});
	}
	
	
	
	
	
	function GetRemainingCost()
	{
						  	$.ajax({url:urlGetRemainingCost,                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										responseGetRemainingCost = responseGetRemainingCost.concat(data.d.results);
										if (data.d.__next) {
											urlGetRemainingCost = data.d.__next;
											GetRemainingCost();
										}
										
				$.each(responseGetRemainingCost, function(key, value) 
				{                 
				var nomres = value.ResourceName;
				var recosty = parseInt(value.AssignmentRemainingCost);
				if(nomres==nomress)
				{
					recost=recost+recosty;
				}
				
				
				});
				  document.getElementById("remainingcost").innerHTML = conToKM(recost);


				  }   
	});
	}
	
	
	
	
	function GetProjects()
	{
						  	$.ajax({url:urlGetProjects,                           
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										responseGetProjects = responseGetProjects.concat(data.d.results);
										if (data.d.__next) {
											urlGetProjects = data.d.__next;
											GetProjects();
										}
										
				$.each(responseGetProjects, function(key, value) 
				{                 
				var projowner = value.ProjectOwnerName;
				if(projowner==nomress)
				{
					numproj++;
				}
				
				
				});
				  document.getElementById("projnum").innerHTML = conToKM(numproj);


				  }   
	});
	}
	
	
		
	
	
	
	function DoughnutChart()
	{
			$.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectOwnerName%20eq%20%27"+nomress+"%27 and Projet_presentation%20eq%20%27Actif%27",

	method: "GET",
    headers: { "Accept": "application/json;odata=verbose"},
success: function (data) {
			if (data.d.results.length > 0) {
				

            var pieValues = [];
            var pieLabels = [];

            for (var i = 0; i < data.d.results.length; i++) {
                pieValues.push(parseInt(data.d.results[i].ProjectWork));
                pieLabels.push(data.d.results[i].ProjectName);
				
            }

			
			var ctx1 = document.getElementById("projchart");
			if (window.myPieChart1 != undefined)
			{
				window.myPieChart1.destroy();
			}

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
}
  }
});

           
            }
        },
        error: function (data) {
            
        }
    });
	}
	
	
	
	
	
	
		function BarsLineChart()
	{
			$.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/ResourceTimephasedDataSet?$filter=ResourceName%20eq%20%27"+nomress+"%27",

	dataType: "json",
    
	method: "GET",
    headers: { "Accept": "application/json; odata=nometadata" },
    success: function (data) {
	
        if (data.value.length > 0) {

           var reducedObject = {};
            for (var i = 0; i < data.value.length; i++) {
                    if (!reducedObject[(data.value[i].TimeByDay).substring(0, 7)]) {
					
                        reducedObject[(data.value[i].TimeByDay).substring(0, 7)] = 0;
                }
                reducedObject[(data.value[i].TimeByDay).substring(0, 7)] += parseInt(data.value[i].Capacity);
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
            var ctx = document.getElementById("barsline");

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
        display: false
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
	}

	
	
	
	//Appel des fonctions
	GetResName();
	GetEmail();
	GetGroup();
	GetDepart();
	GetCalendar();
	GetRate();
	GetType();
	GetMaxUnits();
	GetAssignments();
	GetAssignmentWork();
	GetAssignmentActualWork();
	GetAssignmentRemainingWork();
	GetCost();
	GetActualCost();
	GetRemainingCost();
	GetProjects();
	DoughnutChart();
	BarsLineChart();

}