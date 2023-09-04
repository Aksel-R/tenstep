window.addEventListener('load',function() {


				$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks",			
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   
				$.each(dataResults, function(key, value) 
				{  
					var nomRisque = value.Title;
					var nomProjet = value.ProjectName;
					var categRisque = value.Category;
					var dateEch = value.DueDate;
					var cout = value.Cost;
					var expoco = value.CostExposure;
					var proba = value.Probability;
					var table = document.getElementById("datatable");

var daty=moment(dateEch).format('LL');
						if(daty == "Invalid date")
						{
							daty="";
						}

					    $('#datatable > tbody').append($('<tr>')
					  .append($('<td>').append(nomRisque))
					  .append($('<td>').append(nomProjet))
					  .append($('<td>').append(categRisque))
					  .append($('<td>').append(daty))
					  .append($('<td>').append(cout))
					  .append($('<td>').append(expoco))
					  .append($('<td>').append(parseInt(proba*100)+"%"))
					  .append($('<td>').append(""))
					  .append($('<td>').append(""))
					  .append($('<td>').append(""))
					  .append($('<td>').append(""))
					  )



						
				});
				
										}
										
				});
				
				});




window.addEventListener('load',function() {
	
	var coutf=0;
	var exposf=0;
										$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks",			
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   
				$.each(dataResults, function(key, value) 
				{  
					var cout = value.Cost;
					var expos = value.CostExposure;
					coutf=coutf+cout;
					exposf=exposf+expos;
				});
										

					
					$('#datatable > tfoot').append($('<tr>')
					  .append($('<td>').append("Total")).attr('style','font-weight:bold')
					  .append($('<td>').append(""))
					  .append($('<td>').append(""))
					  .append($('<td>').append(""))
					  .append($('<td>').append(coutf.toFixed(2)))
					  .append($('<td>').append(exposf.toFixed(2)))
					  .append($('<td>').append(""))
					  .append($('<td>').append(""))
					  .append($('<td>').append(""))
					  .append($('<td>').append(""))
					  .append($('<td>').append(""))
													)
													}
										});
});
				
				
				

//fill in ProjectOwner column
window.addEventListener('load',function() {
	
	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",			
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
					var numRows = document.getElementById("datatable").rows.length;
							
					for(var i=1;i<numRows;i++)
					{
						$.each(dataResults, function(key, value) 
						{
						
							var tbl = document.getElementById("datatable");
							var projOwner = value.ProjectOwnerName;
							var projName = value.ProjectName;
							if(tbl.rows[i].cells[1].innerHTML==projName)
							{
								tbl.rows[i].cells[7].innerHTML = projOwner;
							}
							
					
					
				});
				}
				
				
										
										
				}
	
});
});




//fill in Department column
window.addEventListener('load',function() {
	
	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",			
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
					var numRows = document.getElementById("datatable").rows.length;
		
					for(var i=1;i<numRows;i++)
					{
						$.each(dataResults, function(key, value) 
						{
						
							var tbl = document.getElementById("datatable");
							var depart = value.Servicesduprojet;
							var projName = value.ProjectName;
							if(tbl.rows[i].cells[1].innerHTML==projName)
							{
								tbl.rows[i].cells[8].innerHTML = depart;
							}
							
					
					
				});
				}
				
				
										
										
				}
	
});
});




//fill in ProjectType column
window.addEventListener('load',function() {
	
	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",			
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
					var numRows = document.getElementById("datatable").rows.length;
		
					for(var i=1;i<numRows;i++)
					{
						$.each(dataResults, function(key, value) 
						{
						
							var tbl = document.getElementById("datatable");
							var projecttype = value.EnterpriseProjectTypeName;
							var projName = value.ProjectName;
							if(tbl.rows[i].cells[1].innerHTML==projName)
							{
								tbl.rows[i].cells[9].innerHTML = projecttype;
							}
							
					
					
				});
				}
				
				
										
										
				}
	
});
});




//fill in Flow column
window.addEventListener('load',function() {
	
	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectWorkflowStageDataSet",			
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
					var numRows = document.getElementById("datatable").rows.length;
		
					for(var i=1;i<numRows;i++)
					{
						$.each(dataResults, function(key, value) 
						{
						
							var tbl = document.getElementById("datatable");
							var nomPhase = value.PhaseName;
							var projName = value.ProjectName;
							if(tbl.rows[i].cells[1].innerHTML==projName)
							{
								tbl.rows[i].cells[10].innerHTML = nomPhase;
							}
							
					
					
				});
				}
				
				
										
										
				}
	
});
});




//Remplissage du donutChart
window.addEventListener('load',function() {
	$("#donutChart").show();

            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;
              var itermeidiaryObject = {};         
            $.each(dataResults, function(key, value) 
            { 

                    var epn = value.Category;
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
              
            

                  
var ctx1 = document.getElementById("donutChart").getContext('2d');

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
});


/*
//Remplissage du pieChart
window.addEventListener('load',function() {

					var numRows = document.getElementById("datatable").rows.length;
					console.log(numRows);
					var tbl = document.getElementById("datatable");		
					var tr = tbl.getElementsByTagName("tr");
					var itermeidiaryObject = {};
		
					for(var i=1;i<numRows;i++)
					{
						
						var epn = tbl.rows[i].cells[7].innerHTML;
						var som = 0;
						if (epn != null) {
						  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
						}
						var somme = som;
						
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
					  
					  var ctx1 = document.getElementById("pieChart").getContext('2d');

						var myChart = new Chart(ctx1, {
						  type: 'pie',
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
						  
						  labels: {
							render: 'label',
							fontColor: '#000',
							position: 'outside',
							fontSize : 8
						  }

						}
						  }
						});
});*/





window.addEventListener('load',function() {
	$("#pieChart").show();
	
					var numRows = document.getElementById("datatable").rows.length;
					var tbl = document.getElementById("datatable");		
					var tr = tbl.getElementsByTagName("tr");
					var itermeidiaryObject = {};
	
	$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",			
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
					var numRows = document.getElementById("datatable").rows.length;
							
					for(var i=1;i<numRows;i++)
					{
						$.each(dataResults, function(key, value) 
						{
						
							var tbl = document.getElementById("datatable");
							var projOwner = value.ProjectOwnerName;
							var projName = value.ProjectName;
							if(tbl.rows[i].cells[1].innerHTML==projName)
							{
								var epn = projOwner;
								var som = 0;
								if (epn != null) {
								  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
								}
								var somme = som;
							}
							
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
				
				
				}
				
				
				var ctx1 = document.getElementById("pieChart").getContext('2d');

if (window.myChart3 != undefined)
{
    window.myChart3.destroy();
}
//
            window.myChart3 = new Chart(ctx1, {
  type: 'pie',
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
});




//Remplissage du middle chart
window.addEventListener('load',function() {
	$("#myChart").show();
	
			$.ajax({
			url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks",

			dataType: "json",
			
			method: "GET",
			headers: { "Accept": "application/json; odata=nometadata" },
			success: function (data) {
	
        if (data.value.length > 0) {

           var reducedObject = {};
		   var reducedObject2 = {};
            for (var i = 0; i < data.value.length; i++) {
                    if (!reducedObject[data.value[i].Category]) {
					
                        reducedObject[data.value[i].Category] = 0;
                }
				if (!reducedObject2[data.value[i].Category]) {
					
                        reducedObject2[data.value[i].Category] = 0;
                }
                reducedObject[data.value[i].Category] += parseInt(data.value[i].Cost);
				reducedObject2[data.value[i].Category] += parseInt(data.value[i].CostExposure);
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
}
        }
    });

});