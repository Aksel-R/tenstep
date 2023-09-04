function Main(){
  //Affichage du Tableau Resources Table
	function LoadResourceTaskProjectTable() {
	  console.log('url '+_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectName%20ne%20%27Opérations%20d’administration%20de%20feuilles%20de%20temps%27")
	            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectName%20ne%20%27Opérations%20d’administration%20de%20feuilles%20de%20temps%27",   
	                        
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
	                
	                    var tbodyRef = document.querySelector('#tableaux tbody');
	                    var tr;
	                    tr = $("<tr class='even pointer'>");
	                        tr.append("<td>"+(tbodyRef.rows.length+ 1) +"</td>");
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
	                    $('#tableaux tbody').append(tr);
	            });              
	}   
	});
	}                                  
	  LoadResourceTaskProjectTable();
}
Main();