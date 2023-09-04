
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
     
     tableaux = document.getElementById("tableCostTop");
     trTabCoTop = tableaux.getElementsByTagName("tr");
     if(trTabCoTop.length>0){        
          $('#tableCostTop tbody').empty();
     }
	var urlFilterSelected= "";
	var urlFilterSelected1= "";
  	var countSelected=0;
var Dir=document.getElementById("Direction").value;
    
    if (Dir!="") {
        var directProject=Dir;
            if(directProject=="Direction Générale"){
                directProject="Direction Générale";
            }
            if(directProject=="Direction des Projets"){
                directProject="Direction des Projets";
            }
            if(directProject=="ServiceConvergent"){
                directProject="ServiceConvergent";
            }
            if(directProject=="ServiceInfrastructure"){
                directProject="ServiceInfrastructure";
            }
            
        if (countSelected==0) {
          urlFilterSelected1+="&$filter=startswith(Direction,'"+directProject+"')%20eq%20true";
          countSelected++;
        }else if (countSelected>0){
            urlFilterSelected1+="%20and%20startswith(Direction,'"+directProject+"')%20eq%20true";
            countSelected++;
        }
    }

  	var sousDir=document.getElementById("sousDirection").value;
  	if (sousDir!="") {
         if (countSelected==0) {
         urlFilterSelected1+="&$filter=Direction%20eq%27"+sousDir+"%27";
          countSelected++;
        }else if (countSelected > 0){
            urlFilterSelected1+="%20and%20Direction%20eq%27"+sousDir+"%27";
            countSelected++;
        }
  	}




	 var chefProj=document.getElementById("projectowner").value;
	 if (chefProj!="") {
           if (countSelected==0) {
        urlFilterSelected1+="&$filter=ProjectOwnerName%20eq%27"+chefProj+"%27";
          countSelected++;
        }else if (countSelected > 0){
            urlFilterSelected1+="%20and%20ProjectOwnerName%20eq%27"+chefProj+"%27";
            countSelected++;
        }
	 }

     

	function showTitleFilter() {
	  if (countSelected==0) {
	    document.getElementById("projTitle").innerHTML = '<i class="fa fa-dashboard"></i>' + ' Affichage Général';
	  }else{
	    document.getElementById("projTitle").innerHTML = '<i class="fa fa-dashboard"></i> ';

        if (Dir!=""){
          document.getElementById("projTitle").innerHTML +=Dir+"; ";
        }
	    if (sousDir!=""){
	      document.getElementById("projTitle").innerHTML +=sousDir+"; ";
	    }
	    
	    if (chefProj!=""){
	      document.getElementById("projTitle").innerHTML +=chefProj+"; ";
	    }
	  }
	}
	showTitleFilter();
	
	var responseLoadKPIFilter = responseLoadKPIFilter || [];
    var urlLoadKPIFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,ProjectCost,ProjectActualCost,ProjectCostVariance"+urlFilterSelected1;
   
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
var number=coutprojet;
function arroundMax(number){
  var ch = parseInt(number).toString();
  var ch1="";
  var num=parseInt(ch[0])+1;
  ch1+=num;
  for (var i =  1; i <ch.length ; i++) {
      ch1+='0';
  }

  return(parseInt(ch1));
}
arroundMax(number);
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
            max: arroundMax(coutprojet),
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

        series: [
        {
            name: 'Coût actuel',
            data: [data],
            dataLabels: {
            format: '<span>'+ conToMill(data)+'</span><br/>' 
        },
        }]

    });
});

}
var responseTabCost1Filter = responseTabCost1Filter || [];
    var urlTabCost1Filter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectName,ProjectBaselineCost&$orderby=ProjectBaselineCost%20desc";

    function loadTabCost1Filter(arrId) {

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


    var responseTabGreenFilter = responseTabGreenFilter || [];
    var urlTabGreenFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction,ProjectId,ProjectName,ProjectBudgetCost,ProjectCost,ProjectActualCost,ProjectRemainingCost,ProjectCostVariance"+urlFilterSelected1;
   
    function loadTabGreenFilter() {

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
                tr1.append('<td></td>');
                tr1.append("<td style='font-weight:bold; color:#337ab7;'> "+ conToMill(prBudgCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold; color:#337ab7;' id='celGreen'></td>");
                tr1.append("<td style='font-weight:bold; color:#337ab7;'> "+ conToMill(prCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold; color:#337ab7;'> "+ conToMill(prActCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold; color:#337ab7;'> "+ conToMill(prRemCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold; color:#337ab7;'> "+ conToMill(prVarCostSum) +" </td>");
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
            var nomP=tbl.rows[i].cells[0].innerHTML;
            console.log("_____________________________________________________________");
            $.each(responseremplirCostTabGreenFilter, function(key, value) 
            { 
                var projId=value.ProjectId;
                if (projId==idPrTab) {
                    var projBaseCost=parseFloat(value.ProjectBaselineCost).toFixed(2);
                    sumBaseCoste+=parseFloat(projBaseCost);
                    tbl.rows[i].cells[2].innerHTML=conToMill(projBaseCost);
                    console.log("nomP= "+nomP);
                    console.log("projBaseCost= "+projBaseCost);
                }
            });
        }  
        document.getElementById("celGreen").innerHTML = conToMill(sumBaseCoste);
}           
});
}

}