

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

function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function mainfilter(){
	  var idProjet = document.getElementById("mylist").value;
  	  var nomProjects =  getSelectedText("mylist");
  	  $("#myTable").css("display", "block");
  	  $('#myTable tbody').empty();
  	  //
  	  //console.log("idProjet= "+idProjet);
  	  //console.log("nomProjects= "+nomProjects);



  	  var responseAss = responseAss ||[];
  var urlAss = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Assignments?$select=AssignmentId,ResourceId&$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";
     
     function filterAss(){
          $.ajax({url:  urlAss,          
                   method: "GET",
                   dataType: "json",
                   headers: {Accept: "application/json;odata=verbose"},       
                   success: function(data) {     
                   responseAss = responseAss.concat(data.d.results);
                   if (data.d.__next) {
                      urlAss = data.d.__next;
                      filterAss();
                    } 
                    var assignementArr=[];
                    var resIdArr=[];
                    $.each(responseAss, function(key, value) 
                    {
                     	var assId=value.AssignmentId;
                     	assignementArr.push(assId);
                     	var resID=value.ResourceId;
                     	////console.log("resID= "+resID);
                     	if (resIdArr.indexOf(resID)==-1){
                     		resIdArr.push(resID);
                     	}
                    });
                    console.log("array= "+resIdArr.join());
                    var idR=[];
                    var arrNom=[];
					var arrType=[];
					var arrStatut=[];
					var arrCall=[];
					var arrDesc=[];
                    ressourceProj(resIdArr,idProjet,arrNom,arrType,arrStatut,arrCall,arrDesc,idR);
                    
                      

       }
  });
}
filterAss();






function ressourceProj(resIdArr,idProjet,arrNom,arrType,arrStatut,arrCall,arrDesc,idR){
	// var arrNom=[];
	// var arrType=[];
	// var arrStatut=[];
	// var arrCall=[];
	// var arrDesc=[];
	for (var i = 0; i< resIdArr.length; i++) {
		var idRes=resIdArr[i];

		 main1(idProjet,idRes,arrNom,arrType,arrStatut,arrCall,arrDesc,idR);
	}
	
}

function main1(idProjet,idRes,arrNom,arrType,arrStatut,arrCall,arrDesc,idR){
	
$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?$filter=ResourceId%20eq%20guid%27"+idRes+"%27",   
                      
                                  method: "GET",
                                  dataType: "json",
                                  headers: {Accept: "application/json;odata=verbose"},       
                                  success: function(data) {     
                                    var dataResults = data.d.results; 
                                                 
                    var myLabels=[];
                    
                    var i=0;
            $.each(dataResults, function(key, value) 
            {
            	idR.push(value.ResourceId);
                 var nomRes="";
                      if (value.ResourceName!=null) {
                        nomRes=value.ResourceName;
                      }
                      arrNom.push(nomRes);

                      var typeRes="";
                      if (value.TypeName!=null) {
                        typeRes=value.TypeName;
                      }
                      arrType.push(typeRes);

                      var statRes="";
                      if (value.ResourceStatusName!=null) {
                        statRes=value.ResourceStatusName;
                      }
                      arrStatut.push(statRes);

                      var calRes="";
                      if (value.ResourceBaseCalendar!=null) {
                        calRes=value.ResourceBaseCalendar;
                      }
                      arrCall.push(calRes);

                      var desc="";
                      if (value.TypeDescription!=null) {
                        desc=value.TypeDescription;
                      }
                      arrDesc.push(desc);

                      var trSuiv;
		              trSuiv = $("<tr>");
		 			  trSuiv.append("<td>" + nomRes +"</td>");
		              trSuiv.append("<td>" + typeRes +"</td>");
		              trSuiv.append("<td>" + statRes +"</td>");
					  trSuiv.append("<td>" + calRes +"</td>");
					  trSuiv.append("<td>" + desc +"</td>");
					  //trSuiv.append("<td>" + value.ResourceId +"</td>");
			  		  $('#myTable').append(trSuiv);
              });
            
			
		
   }
});


}

var responseGlissement = responseGlissement ||[];
     var urlGlissement = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectDuration,ProjectId&$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";
     
     function filterGlissement(){
      
          $.ajax({url:  urlGlissement,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseGlissement = responseGlissement.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlGlissement = data.d.__next;
                                            filterGlissement();
                                        }   
                                        
                                       // var tabDuration=[];

                                           
                          
            $.each(responseGlissement, function(key, value) 
            {
           
              var projectDuration=value.ProjectDuration;
         
               //document.getElementById("baseDuration").innerHTML;

                //console.log("baselineDuration= "+baselineDuration);
               
             filterBaseline(idProjet,projectDuration);
               
            });
            
            
            
       }
  });
          
}
filterGlissement();


var responseBaseline = responseBaseline ||[];
     var urlBaseline = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectBaselineDuration,ProjectId";
     //console.log("urlBaseline= "+urlBaseline);
     function filterBaseline(idProjet,projectDuration){
        
          $.ajax({url:  urlBaseline,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseBaseline = responseBaseline.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlBaseline = data.d.__next;
                                            filterBaseline(idProjet,projectDuration);
                                        }    
                                           var tabIds=[];
                                           var baselineDuration=0;
                          
            $.each(responseBaseline, function(key, value) 
            {
              console.log("idProjet= "+idProjet);
              if (value.ProjectId==idProjet) {
                
               
              
               baselineDuration=value.ProjectBaselineDuration;
              

               
                }
               

            });
            console.log("baselineDuration= "+baselineDuration);
            var glissement=((parseFloat(projectDuration)-parseFloat(baselineDuration))/parseFloat(projectDuration))*100;
            if (glissement<0 || isNaN(glissement)) {glissement=0;}
               document.getElementById("GlissementProjet").innerHTML=parseFloat(glissement).toFixed(0)+"%";
       }
  });

}


  var responseAllTickets = responseAllTickets || [];

function LoadAllDataLeft()
{
    var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;

                $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectId eq guid'"+idProjet+"'",                          
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseAllTickets = responseAllTickets.concat(data.d.results);
                    if (data.d.__next) {
                      urlAllTickets = data.d.__next;
                      LoadAllDataLeft();
                    }
                    
        $.each(responseAllTickets, function(key, value) 
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


          document.getElementById("WorkVariance").innerHTML = conToMill(pworkvariance);
          document.getElementById("CostProject").innerHTML = conToMill(projCost);
          document.getElementById("CostVariance").innerHTML = conToMill(projcostvariance);
      document.getElementById("WorkProj").innerHTML = conToMill(projWork);
        }   
  });
 }
 LoadAllDataLeft();



//Load Number Of All Issues
function LoadProblem()
{
  var nbreIssue = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues?&$filter=ProjectId eq guid'"+idProjet+"'",     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;              
          
            $.each(dataResults, function(key, value) 
            {
                 var titreIssue = value.Title;
                 if(titreIssue != null)
                  {
                    nbreIssue ++;
                  }
                  
            });  
            document.getElementById("ProblemNumber").innerHTML = nbreIssue;             
        }
});
}
LoadProblem();


//Load Number Of All Risks
function LoadRisks()
{
  var nbreRisks = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks?&$filter=ProjectId eq guid'"+idProjet+"'",     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;              
          
            $.each(dataResults, function(key, value) 
            {
                 var titreRisks = value.Title;
                 if(titreRisks != null)
                  {
                    nbreRisks ++;
                  }
                  
            });  
            document.getElementById("RiskNumber").innerHTML = nbreRisks;             
        }
});
}
LoadRisks();

}