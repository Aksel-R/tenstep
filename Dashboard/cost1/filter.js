
function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}


function mainfilter() {
	tableaux1 = document.getElementById("tablePr1");
     trTabPr1 = tableaux1.getElementsByTagName("tr");
     if(trTabPr1.length>0){        
          $('#tablePr1 tbody').empty();
     }
     tableaux2 = document.getElementById("tablePr2");
     trTabPr2 = tableaux2.getElementsByTagName("tr");
     if(trTabPr2.length>0){        
          $('#tablePr2 tbody').empty();
     }
     tableaux3 = document.getElementById("tablePr3");
     trTabPr3 = tableaux3.getElementsByTagName("tr");
     if(trTabPr3.length>0){        
          $('#tablePr3 tbody').empty();
     }
     tableaux4 = document.getElementById("tablePr4");
     trTabPr4 = tableaux4.getElementsByTagName("tr");
     if(trTabPr4.length>0){        
          $('#tablePr4 tbody').empty();
     }
     
     tableaux = document.getElementById("tableCostTop");
     trTabCoTop = tableaux.getElementsByTagName("tr");
     if(trTabCoTop.length>0){        
          $('#tableCostTop tbody').empty();
     }
	var urlFilterSelected= "";
	var urlFilterSelected1= "";
  	var countSelected=0;
  	var departement=document.getElementById("departement").value;
  	if (departement!="") {
  		urlFilterSelected1+="%20and%20Direction%20eq%27"+departement+"%27";
        countSelected++;
	    if (countSelected==1) {
	      urlFilterSelected+="&$filter=Direction%20eq%27"+departement+"%27";
	    }else{
	      urlFilterSelected+="%20and%20Direction%20eq%27"+departement+"%27";
	    }
  	}
  	var typeProj=document.getElementById("projecttype").value;
  	if (typeProj!="") {
  		urlFilterSelected1+="%20and%20EnterpriseProjectTypeName%20eq%27"+typeProj+"%27";
	    countSelected++;
	    if (countSelected==1) {
	      urlFilterSelected+="&$filter=EnterpriseProjectTypeName%20eq%27"+typeProj+"%27";
	    }else{
	      urlFilterSelected+="%20and%20EnterpriseProjectTypeName%20eq%27"+typeProj+"%27";
	    }
	 }
	 var chefProj=document.getElementById("projectowner").value;
	 if (chefProj!="") {
	 	urlFilterSelected1+="%20and%20ProjectOwnerName%20eq%27"+chefProj+"%27";
	    countSelected++;
	    if (countSelected==1) {
	      urlFilterSelected+="&$filter=ProjectOwnerName%20eq%27"+chefProj+"%27";
	    }else{
	      urlFilterSelected+="%20and%20ProjectOwnerName%20eq%27"+chefProj+"%27";
	    }
	 }
	 var phaseProj=document.getElementById("covphase").value;
	 if (phaseProj!="") {
	 	urlFilterSelected1+="%20and%20ProjectPhase%20eq%27"+phaseProj+"%27";
	    countSelected++;
	    if (countSelected==1) {
	      urlFilterSelected+="&$filter=ProjectPhase%20eq%27"+phaseProj+"%27";
	    }else{
	      urlFilterSelected+="%20and%20ProjectPhase%20eq%27"+phaseProj+"%27";
	    }
	 }
	function showTitleFilter() {
	  if (countSelected==0) {
	    document.getElementById("projTitle").innerHTML = '<i class="fa fa-dashboard"></i>' + ' Affichage Général';
	  }else{
	    document.getElementById("projTitle").innerHTML = '<i class="fa fa-dashboard"></i> ';
	    if (departement!=""){
	      document.getElementById("projTitle").innerHTML +=departement+"; ";
	    }
	    if (typeProj!=""){
	      document.getElementById("projTitle").innerHTML +=typeProj+"; ";
	    }
	    if (chefProj!=""){
	      document.getElementById("projTitle").innerHTML +=chefProj+"; ";
	    }
	    if (phaseProj!=""){
	      document.getElementById("projTitle").innerHTML +=phaseProj+"; ";
	    } 
	  }
	}
	showTitleFilter();
	console.log("urlFilterSelected1= "+urlFilterSelected1);
	console.log("urlFilterSelected= "+urlFilterSelected);
	var responseLoadKPIFilter = responseLoadKPIFilter || [];
    var urlLoadKPIFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,ProjectCost,ProjectActualCost,ProjectCostVariance"+urlFilterSelected;
    function loadKPIFilter() {
        $.ajax({
            url: urlLoadKPIFilter,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseLoadKPIFilter = responseLoadKPIFilter.concat(data.d.results);
                if (data.d.__next) {
                    urlLoadKPIFilter = data.d.__next;
                    loadKPIFilter();
                }
                var coutprojet = 0;
                var coutactuel = 0;
                var coutvariance = 0;
                var arrId=[];
                $.each(responseLoadKPIFilter, function (key, value) {
                    var projectcost = value.ProjectCost;
                    var actuelcost = value.ProjectActualCost;
                    var idP=value.ProjectId;
                    arrId.push(idP);
                    var projectcostvariance = value.ProjectCostVariance;
                    var direction = value.Direction;
                                            coutprojet = parseFloat(coutprojet)+parseFloat(projectcost);
                        coutactuel = parseFloat(coutactuel)+parseFloat(actuelcost);
                        
                        coutvariance = parseFloat(coutvariance)+parseFloat(projectcostvariance);
                     
                });
                
                document.getElementById("projectcost").innerHTML = conToMill(coutprojet);
                document.getElementById("projectAC").innerHTML = conToMill(coutactuel);
                document.getElementById("projectVC").innerHTML = conToMill(coutvariance);
                loadBaseLineKPIFilter(coutprojet,coutactuel,coutvariance,arrId);
                loadTabCost1Filter(arrId);
                /*document.getElementById("entreprisesKPI").innerHTML = 'Ressources Entreprises';
                document.getElementById("countRessGen").innerHTML = countGenerique;
                document.getElementById("generiquesKPI").innerHTML = 'Ressources Génériques';*/
            }
        });
    }
    loadKPIFilter();
    var responseLoadBaseLineKPIFilter = responseLoadBaseLineKPIFilter || [];
    var urlLoadBaseLineKPIFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectBaselineCost";
    function loadBaseLineKPIFilter(coutprojet,coutactuel,coutvariance,arrId) {
        $.ajax({
            url: urlLoadBaseLineKPIFilter,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseLoadBaseLineKPIFilter = responseLoadBaseLineKPIFilter.concat(data.d.results);
                if (data.d.__next) {
                    urlLoadBaseLineKPIFilter = data.d.__next;
                    loadBaseLineKPIFilter(coutprojet,coutactuel,coutvariance,arrId);
                }
                var coutreferenceprojet = 0;

                $.each(responseLoadBaseLineKPIFilter, function (key, value) {
                	var idP=value.ProjectId;
                	if (arrId.indexOf(idP)>-1) {
                		var projectbaseline = value.ProjectBaselineCost;
                        coutreferenceprojet = parseFloat(coutreferenceprojet)+parseFloat(projectbaseline);
                	}
                		                    
                });
                document.getElementById("projectbc").innerHTML = conToMill(coutreferenceprojet);
                loadCostPortfolioChartFilter(coutprojet,coutactuel,coutvariance,coutreferenceprojet);
            }
        });
    }
    
function loadCostPortfolioChartFilter(coutprojet,coutactuel,coutvariance,coutreferenceprojet) {

$(function () {
var data = coutactuel;
    $('#container').highcharts({

        chart: {
            type: 'gauge'
        },


      
        pane: {
            startAngle: -120,
            endAngle: 120,
            background: []
        },

        // the value axis
        yAxis: [{

        offset:30,
            min: 0,
            max: coutprojet,
            plotBands: [{
                from: 0,
                to: parseInt(coutreferenceprojet),
                color: '#ffc470' // orange
            }, {
                from: coutreferenceprojet,
                to: coutprojet,
                color: '#b8deff' // blue
            }]
        }],

        series: [{
            data: [data]
        }]

    });
});

}
var responseTabCost1Filter = responseTabCost1Filter || [];
    var urlTabCost1Filter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectName,ProjectBaselineCost&$orderby=ProjectBaselineCost%20desc";

    function loadTabCost1Filter(arrId) {
console.log("urlTabCost1Filter= "+urlTabCost1Filter);
        $.ajax({
            url: urlTabCost1Filter,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseTabCost1Filter = responseTabCost1Filter.concat(data.d.results);
                if (data.d.__next) {
                    urlTabCost1Filter = data.d.__next;
                    loadTabCost1Filter(arrId);
                }
                var countProj = 0;

                $.each(responseTabCost1Filter, function (key, value) {
                    	var idP=value.ProjectId;
                    	if (arrId.indexOf(idP)>-1) {
                    		countProj++;
	                        var nomP=value.ProjectName;
	                        var projectBaseCost = parseFloat(value.ProjectBaselineCost).toFixed(2);
	                        

	                        console.log("projectBaseCost= "+projectBaseCost);
	                        var tr;
	                        tr = $("<tr style='height:8rem'>");
	                        tr.append("<td>" + nomP +" </td>");
	                        tr.append("<td> "+ conToMill(projectBaseCost) +" </td>");
	                        tr.append("<td></td>");
	                        tr.append("<td></td>");
	                        tr.append("<td></td>");
	                        tr.append("<td style='display:none;'>"+idP+"</td>");
	                        $('#tableCostTop tbody').append(tr); 
	                        if (countProj==3) {
	                            return false;
	                        }
                    	}                        
                });
                    remplirCostTab();    
                
            }
        });
    }

var responseTabyellowFilter = responseTabyellowFilter || [];
    var urlTabyellowFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction,ProjectId,ProjectName,ProjectBudgetCost,ProjectCost,ProjectActualCost,ProjectRemainingCost,ProjectCostVariance&$filter=CostKPI%20eq%27Between 10%-20% over baseline cost%27"+urlFilterSelected1;

    function loadTabyellowFilter() {
console.log("urlTabyellowFilter= "+urlTabyellowFilter);
        $.ajax({
            url: urlTabyellowFilter,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseTabyellowFilter = responseTabyellowFilter.concat(data.d.results);
                if (data.d.__next) {
                    urlTabyellowFilter = data.d.__next;
                    loadTabyellowFilter();
                }
                var arrPrCost = [];
                var arrPrActCost= [];
                var arrPrBudgCost= [];
                var arrPrRemCost= [];
                var arrPrVarCost= [];
                var arrIdP= [];
                var arrNameP= [];

                var prCostSum = 0;
                var prActCostSum= 0;
                var prBudgCostSum= 0;
                var prRemCostSum= 0;
                var prVarCostSum= 0;
                
                $.each(responseTabyellowFilter, function (key, value) {
                    
                        var idP=value.ProjectId;
                        var nameP=value.ProjectName;
                        var budCostP=value.ProjectBudgetCost;
                        var costP=value.ProjectCost;
                        var actCostP=value.ProjectActualCost;
                        var remCostP=value.ProjectRemainingCost;
                        var varCostP=value.ProjectCostVariance;
                        arrPrCost.push(costP);
                        arrPrActCost.push(actCostP);
                        arrPrBudgCost.push(budCostP);
                        arrPrRemCost.push(remCostP);
                        arrPrVarCost.push(varCostP);
                        arrIdP.push(idP);
                        arrNameP.push(nameP);
                    
                    
                });
                for (var i =0; i < arrIdP.length; i++) {
                    prCostSum+=parseFloat(arrPrCost[i]);
                    prActCostSum+=parseFloat(arrPrActCost[i]);
                    prBudgCostSum+=parseFloat(arrPrBudgCost[i]);
                    prRemCostSum+=parseFloat(arrPrRemCost[i]);
                    prVarCostSum+=parseFloat(arrPrVarCost[i]);
                }
                var tr1;
                tr1 = $("<tr>");
                tr1.append('<td> <i class="fa fa-circle fa-2x" style=" color: #ffd81a;"></i> </td>');
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prBudgCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;' id='celyellow'></td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prActCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prRemCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prVarCostSum) +" </td>");
                tr1.append("<td style='display:none;'>yellow</td>");
                $('#tablePr2 tbody').append(tr1); 
                for (var j =0; j < arrIdP.length; j++) {
                    var tr;
                    tr = $("<tr>");
                    tr.append('<td> '+arrNameP[j]+' </td>');
                    tr.append("<td> "+ conToMill(arrPrBudgCost[j]) +" </td>");
                    tr.append("<td></td>");
                    tr.append("<td> "+ conToMill(arrPrCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrActCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrRemCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrVarCost[j]) +" </td>");
                    tr.append("<td style='display:none;'>"+arrIdP[j]+"</td>");
                    $('#tablePr2 tbody').append(tr); 
                }
                remplirCostTabyellowFilter();    
            }
        });
    }
    loadTabyellowFilter();
    var urlremplirCostTabyellowFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectBaselineCost";
var responseremplirCostTabyellowFilter = responseremplirCostTabyellowFilter ||[];
function remplirCostTabyellowFilter(){

  $.ajax({url:  urlremplirCostTabyellowFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseremplirCostTabyellowFilter = responseremplirCostTabyellowFilter.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlremplirCostTabyellowFilter = data.d.__next;
                                            remplirCostTabyellowFilter();
                                        } 
              var numRows = document.getElementById("tablePr2").rows.length;
               var tbl = document.getElementById("tablePr2");
               var sumBaseCoste=0;
        for(var i=1;i<numRows;i++){
            var idPrTab=tbl.rows[i].cells[7].innerHTML;
            
            $.each(responseremplirCostTabyellowFilter, function(key, value) 
            { 
                var projId=value.ProjectId;
                if (projId==idPrTab) {
                    var projBaseCost=parseFloat(value.ProjectBaselineCost).toFixed(2);
                    sumBaseCoste+=parseFloat(projBaseCost);
                    tbl.rows[i].cells[2].innerHTML=conToMill(projBaseCost);
                }
            });
        }  
        document.getElementById("celyellow").innerHTML = conToMill(sumBaseCoste);
}           
});
}


var responseTabGreenFilter = responseTabGreenFilter || [];
    var urlTabGreenFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction,ProjectId,ProjectName,ProjectBudgetCost,ProjectCost,ProjectActualCost,ProjectRemainingCost,ProjectCostVariance&$filter=CostKPI%20eq%27Less than 10% over baseline cost%27"+urlFilterSelected1;

    function loadTabGreenFilter() {
console.log("urlTabGreenFilter= "+urlTabGreenFilter);
        $.ajax({
            url: urlTabGreenFilter,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseTabGreenFilter = responseTabGreenFilter.concat(data.d.results);
                if (data.d.__next) {
                    urlTabGreenFilter = data.d.__next;
                    loadTabGreenFilter();
                }
                var arrPrCost = [];
                var arrPrActCost= [];
                var arrPrBudgCost= [];
                var arrPrRemCost= [];
                var arrPrVarCost= [];
                var arrIdP= [];
                var arrNameP= [];

                var prCostSum = 0;
                var prActCostSum= 0;
                var prBudgCostSum= 0;
                var prRemCostSum= 0;
                var prVarCostSum= 0;
                
                $.each(responseTabGreenFilter, function (key, value) {
                    
                        var idP=value.ProjectId;
                        var nameP=value.ProjectName;
                        var budCostP=value.ProjectBudgetCost;
                        var costP=value.ProjectCost;
                        var actCostP=value.ProjectActualCost;
                        var remCostP=value.ProjectRemainingCost;
                        var varCostP=value.ProjectCostVariance;
                        arrPrCost.push(costP);
                        arrPrActCost.push(actCostP);
                        arrPrBudgCost.push(budCostP);
                        arrPrRemCost.push(remCostP);
                        arrPrVarCost.push(varCostP);
                        arrIdP.push(idP);
                        arrNameP.push(nameP);
                    
                    
                });
                for (var i =0; i < arrIdP.length; i++) {
                    prCostSum+=parseFloat(arrPrCost[i]);
                    prActCostSum+=parseFloat(arrPrActCost[i]);
                    prBudgCostSum+=parseFloat(arrPrBudgCost[i]);
                    prRemCostSum+=parseFloat(arrPrRemCost[i]);
                    prVarCostSum+=parseFloat(arrPrVarCost[i]);
                }
                var tr1;
                tr1 = $("<tr>");
                tr1.append('<td> <i class="fa fa-circle fa-2x" style=" color: #49bf34;"></i> </td>');
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prBudgCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;' id='celGreen'></td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prActCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prRemCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prVarCostSum) +" </td>");
                tr1.append("<td style='display:none;'>green</td>");
                $('#tablePr1 tbody').append(tr1); 
                for (var j =0; j < arrIdP.length; j++) {
                    var tr;
                    tr = $("<tr>");
                    tr.append('<td> '+arrNameP[j]+' </td>');
                    tr.append("<td> "+ conToMill(arrPrBudgCost[j]) +" </td>");
                    tr.append("<td></td>");
                    tr.append("<td> "+ conToMill(arrPrCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrActCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrRemCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrVarCost[j]) +" </td>");
                    tr.append("<td style='display:none;'>"+arrIdP[j]+"</td>");
                    $('#tablePr1 tbody').append(tr); 
                }
                remplirCostTabGreenFilter();    
            }
        });
    }
    loadTabGreenFilter();
    var urlremplirCostTabGreenFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectBaselineCost";
var responseremplirCostTabGreenFilter = responseremplirCostTabGreenFilter ||[];
function remplirCostTabGreenFilter(){

  $.ajax({url:  urlremplirCostTabGreenFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseremplirCostTabGreenFilter = responseremplirCostTabGreenFilter.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlremplirCostTabGreenFilter = data.d.__next;
                                            remplirCostTabGreenFilter();
                                        } 
              var numRows = document.getElementById("tablePr1").rows.length;
               var tbl = document.getElementById("tablePr1");
               var sumBaseCoste=0;
        for(var i=1;i<numRows;i++){
            var idPrTab=tbl.rows[i].cells[7].innerHTML;
            
            $.each(responseremplirCostTabGreenFilter, function(key, value) 
            { 
                var projId=value.ProjectId;
                if (projId==idPrTab) {
                    var projBaseCost=parseFloat(value.ProjectBaselineCost).toFixed(2);
                    sumBaseCoste+=parseFloat(projBaseCost);
                    tbl.rows[i].cells[2].innerHTML=conToMill(projBaseCost);
                }
            });
        }  
        document.getElementById("celGreen").innerHTML = conToMill(sumBaseCoste);
}           
});
}

var responseTabredFilter = responseTabredFilter || [];
    var urlTabredFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction,ProjectId,ProjectName,ProjectBudgetCost,ProjectCost,ProjectActualCost,ProjectRemainingCost,ProjectCostVariance&$filter=CostKPI%20eq%27At least 20% over baseline cost%27"+urlFilterSelected1;

    function loadTabredFilter() {
console.log("urlTabredFilter= "+urlTabredFilter);
        $.ajax({
            url: urlTabredFilter,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseTabredFilter = responseTabredFilter.concat(data.d.results);
                if (data.d.__next) {
                    urlTabredFilter = data.d.__next;
                    loadTabredFilter();
                }
                var arrPrCost = [];
                var arrPrActCost= [];
                var arrPrBudgCost= [];
                var arrPrRemCost= [];
                var arrPrVarCost= [];
                var arrIdP= [];
                var arrNameP= [];

                var prCostSum = 0;
                var prActCostSum= 0;
                var prBudgCostSum= 0;
                var prRemCostSum= 0;
                var prVarCostSum= 0;
                
                $.each(responseTabredFilter, function (key, value) {
                    
                        var idP=value.ProjectId;
                        var nameP=value.ProjectName;
                        var budCostP=value.ProjectBudgetCost;
                        var costP=value.ProjectCost;
                        var actCostP=value.ProjectActualCost;
                        var remCostP=value.ProjectRemainingCost;
                        var varCostP=value.ProjectCostVariance;
                        arrPrCost.push(costP);
                        arrPrActCost.push(actCostP);
                        arrPrBudgCost.push(budCostP);
                        arrPrRemCost.push(remCostP);
                        arrPrVarCost.push(varCostP);
                        arrIdP.push(idP);
                        arrNameP.push(nameP);
                    
                    
                });
                for (var i =0; i < arrIdP.length; i++) {
                    prCostSum+=parseFloat(arrPrCost[i]);
                    prActCostSum+=parseFloat(arrPrActCost[i]);
                    prBudgCostSum+=parseFloat(arrPrBudgCost[i]);
                    prRemCostSum+=parseFloat(arrPrRemCost[i]);
                    prVarCostSum+=parseFloat(arrPrVarCost[i]);
                }
                var tr1;
                tr1 = $("<tr>");
                tr1.append('<td> <i class="fa fa-circle fa-2x" style=" color: #f53a3a;"></i> </td>');
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prBudgCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;' id='celred'></td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prActCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prRemCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prVarCostSum) +" </td>");
                tr1.append("<td style='display:none;'>red</td>");
                $('#tablePr3 tbody').append(tr1); 
                for (var j =0; j < arrIdP.length; j++) {
                    var tr;
                    tr = $("<tr>");
                    tr.append('<td> '+arrNameP[j]+' </td>');
                    tr.append("<td> "+ conToMill(arrPrBudgCost[j]) +" </td>");
                    tr.append("<td></td>");
                    tr.append("<td> "+ conToMill(arrPrCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrActCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrRemCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrVarCost[j]) +" </td>");
                    tr.append("<td style='display:none;'>"+arrIdP[j]+"</td>");
                    $('#tablePr3 tbody').append(tr); 
                }
                remplirCostTabredFilter();    
            }
        });
    }
    loadTabredFilter();
    var urlremplirCostTabredFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectBaselineCost";
var responseremplirCostTabredFilter = responseremplirCostTabredFilter ||[];
function remplirCostTabredFilter(){

  $.ajax({url:  urlremplirCostTabredFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseremplirCostTabredFilter = responseremplirCostTabredFilter.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlremplirCostTabredFilter = data.d.__next;
                                            remplirCostTabredFilter();
                                        } 
              var numRows = document.getElementById("tablePr3").rows.length;
               var tbl = document.getElementById("tablePr3");
               var sumBaseCoste=0;
        for(var i=1;i<numRows;i++){
            var idPrTab=tbl.rows[i].cells[7].innerHTML;
            
            $.each(responseremplirCostTabredFilter, function(key, value) 
            { 
                var projId=value.ProjectId;
                if (projId==idPrTab) {
                    var projBaseCost=parseFloat(value.ProjectBaselineCost).toFixed(2);
                    sumBaseCoste+=parseFloat(projBaseCost);
                    tbl.rows[i].cells[2].innerHTML=conToMill(projBaseCost);
                }
            });
        }  
        document.getElementById("celred").innerHTML = conToMill(sumBaseCoste);
}           
});
}
var responseTabgreyFilter = responseTabgreyFilter || [];
    var urlTabgreyFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction,ProjectId,ProjectName,ProjectBudgetCost,ProjectCost,ProjectActualCost,ProjectRemainingCost,ProjectCostVariance&$filter=CostKPI%20eq%27No%20Baseline%27"+urlFilterSelected1;

    function loadTabgreyFilter() {
console.log("urlTabgreyFilter= "+urlTabgreyFilter);
        $.ajax({
            url: urlTabgreyFilter,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseTabgreyFilter = responseTabgreyFilter.concat(data.d.results);
                if (data.d.__next) {
                    urlTabgreyFilter = data.d.__next;
                    loadTabgreyFilter();
                }
                var arrPrCost = [];
                var arrPrActCost= [];
                var arrPrBudgCost= [];
                var arrPrRemCost= [];
                var arrPrVarCost= [];
                var arrIdP= [];
                var arrNameP= [];

                var prCostSum = 0;
                var prActCostSum= 0;
                var prBudgCostSum= 0;
                var prRemCostSum= 0;
                var prVarCostSum= 0;
                
                $.each(responseTabgreyFilter, function (key, value) {
                    
                        var idP=value.ProjectId;
                        var nameP=value.ProjectName;
                        var budCostP=value.ProjectBudgetCost;
                        var costP=value.ProjectCost;
                        var actCostP=value.ProjectActualCost;
                        var remCostP=value.ProjectRemainingCost;
                        var varCostP=value.ProjectCostVariance;
                        arrPrCost.push(costP);
                        arrPrActCost.push(actCostP);
                        arrPrBudgCost.push(budCostP);
                        arrPrRemCost.push(remCostP);
                        arrPrVarCost.push(varCostP);
                        arrIdP.push(idP);
                        arrNameP.push(nameP);
                    
                    
                });
                for (var i =0; i < arrIdP.length; i++) {
                    prCostSum+=parseFloat(arrPrCost[i]);
                    prActCostSum+=parseFloat(arrPrActCost[i]);
                    prBudgCostSum+=parseFloat(arrPrBudgCost[i]);
                    prRemCostSum+=parseFloat(arrPrRemCost[i]);
                    prVarCostSum+=parseFloat(arrPrVarCost[i]);
                }
                var tr1;
                tr1 = $("<tr>");
                tr1.append('<td> <i class="fa fa-circle fa-2x" style=" color: #7c7777;"></i> </td>');
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prBudgCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;' id='celgrey'></td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prActCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prRemCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold;'> "+ conToMill(prVarCostSum) +" </td>");
                tr1.append("<td style='display:none;'>grey</td>");
                $('#tablePr4 tbody').append(tr1); 
                for (var j =0; j < arrIdP.length; j++) {
                    var tr;
                    tr = $("<tr>");
                    tr.append('<td> '+arrNameP[j]+' </td>');
                    tr.append("<td> "+ conToMill(arrPrBudgCost[j]) +" </td>");
                    tr.append("<td></td>");
                    tr.append("<td> "+ conToMill(arrPrCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrActCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrRemCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrVarCost[j]) +" </td>");
                    tr.append("<td style='display:none;'>"+arrIdP[j]+"</td>");
                    $('#tablePr4 tbody').append(tr); 
                }
                   
            }
        });
    }
    loadTabgreyFilter();

}