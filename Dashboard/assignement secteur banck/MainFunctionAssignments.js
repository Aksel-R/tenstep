function MainFilter(){
	var tableaux = document.getElementById("tableauxResWork");
	tr1 = tableaux.getElementsByTagName("tr");
	if(tr1.length>0){
	$('#tableauxResWork tbody').empty();
	}
	document.getElementById("affectationsTables").innerHTML ="";
	document.getElementById("container1").innerHTML ='<canvas id="portfolioWork" ></canvas>';
	document.getElementById("container2").innerHTML ='<canvas id="ActRemChart" ></canvas>';
	var chaineFilterProject="$filter=ProjectName%20ne%20%27Opérations%20d’administration%20de%20feuilles%20de%20temps%27";
	var chaineFilterRess="$filter=ResourceName%20ne%27Ressource locale générique%27%20and%20ResourceName%20ne%27Ressource non affectée%27%20and%20AssignmentResourceType%20eq%202";
	var portfolioSel=document.getElementById("mylist2").value;
	if (portfolioSel!="") {
		chaineFilterProject+="%20and%20EnterpriseProjectTypeName%20eq%27"+portfolioSel+"%27";
	}

	var progSel=document.getElementById("mylist1").value;
	if (progSel!="") {
		chaineFilterProject+="%20and%20Programme%20eq%27"+progSel+"%27";
	}
	var projectIdSel=document.getElementById("mylist0").value;
	if (projectIdSel!="") {
		chaineFilterProject="$filter=ProjectId%20eq%20guid%27"+projectIdSel+"%27";
	}
	var resNameSel=document.getElementById("mylist3").value;
	if (resNameSel!="") {
		chaineFilterRess="$filter=ResourceName%20eq%27"+resNameSel+"%27"
	}

  var responseProjFilter=responseProjFilter||[];
	var urlProjFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?"+chaineFilterProject+"&$orderby=ProjectName";
	//console.log("urlProjFilter= "+urlProjFilter);
	function LoadProjFilter() {
            var nbre = 0;

            $.ajax({
                url: urlProjFilter,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProjFilter = responseProjFilter.concat(data.d.results);
                    if (data.d.__next) {
                        urlProjFilter = data.d.__next;
                        LoadProjFilter();
                    }
                    if (!data.d.__next){
                    	var arrProjId=[];
                    	var arrProjName=[];
                    	var arrPortfolio=[];
                    	var arrWork=[];
                    	var arrActWork=[];
                    	var arrRemWork=[];
						var chaineTravail='';
						var arrRessourceName=[];
						var arrRessourceWork=[];

	                    $.each(responseProjFilter, function (key, value) {
	                        var projectId=value.ProjectId;
	                        var projecN=value.ProjectName;
	                        arrProjId.push(projectId);
	                        arrProjName.push(projecN);
	                        var portefeuille=value.EnterpriseProjectTypeName;
	                        var pWork=parseFloat(value.ProjectWork/8).toFixed(0);
	                        var pActWork=parseFloat(value.ProjectActualWork/8).toFixed(0);
	                        var pRemWork=parseFloat(value.ProjectRemainingWork/8).toFixed(0);
	                        var progg=value.Programme;
	                        var variableChart="";
	                        var portfolioSel1=document.getElementById("mylist2").value;
							var progSel1=document.getElementById("mylist1").value;
							var projectIdSel1=document.getElementById("mylist0").value;
	                        if (portfolioSel1!=""){
	                        	variableChart=progg;
	                        	chaineTravail='Travail par programme (Jour)';
	                        }
	                        if (progSel1!=""){
	                        	variableChart=projecN;
	                        	chaineTravail='Travail par projet (Jour)';
	                        }
	                        if (projectIdSel1!=""){
	                        	variableChart=projecN;
	                        	chaineTravail='Travail par projet (Jour)';
	                        }
	                        //console.log('variableChart= '+variableChart);
	                        if (variableChart!=null) {
	                        	if (arrPortfolio.indexOf(variableChart)<0) {
		                        	arrPortfolio.push(variableChart);
		                        	arrWork.push(pWork);
		                        	arrActWork.push(pActWork);
									arrRemWork.push(pRemWork);
		                        }else if (arrPortfolio.indexOf(variableChart)>=0) {
		                        	arrWork[arrPortfolio.indexOf(variableChart)]=parseFloat(parseFloat(arrWork[arrPortfolio.indexOf(variableChart)])+parseFloat(pWork)).toFixed(0);
		                        	arrActWork[arrPortfolio.indexOf(variableChart)]=parseFloat(parseFloat(arrActWork[arrPortfolio.indexOf(variableChart)])+parseFloat(pActWork)).toFixed(0);
		                        	arrRemWork[arrPortfolio.indexOf(variableChart)]=parseFloat(parseFloat(arrRemWork[arrPortfolio.indexOf(variableChart)])+parseFloat(pRemWork)).toFixed(0);
		                        }
	                        }
	                        
	                    });
	                  	var endLoop=false;
	                    for (var i = 0; i < arrProjId.length; i++) {
	                    	if (i+1==arrProjId.length) {
	                    		endLoop=true;
	                    	}
	                    	////console.log('endLoop00= '+endLoop);
	                    	loadArrAssigFilter(arrProjId[i],arrProjName[i],endLoop,i,arrRessourceName,arrRessourceWork);

	                    }
	                    var densityData = {
						  label: chaineTravail,
						  data: arrWork,
						  backgroundColor: [
						    'rgba(0, 99, 132, 0.6)',
						    'rgba(30, 99, 132, 0.6)',
						    'rgba(60, 99, 132, 0.6)',
						    'rgba(90, 99, 132, 0.6)',
						    'rgba(120, 99, 132, 0.6)',
						    'rgba(150, 99, 132, 0.6)',
						    'rgba(180, 99, 132, 0.6)',
						    'rgba(210, 99, 132, 0.6)',
						    'rgba(240, 99, 132, 0.6)'
						  ],
						  borderColor: [
						    'rgba(0, 99, 132, 0.6)',
						    'rgba(30, 99, 132, 0.6)',
						    'rgba(60, 99, 132, 0.6)',
						    'rgba(90, 99, 132, 0.6)',
						    'rgba(120, 99, 132, 0.6)',
						    'rgba(150, 99, 132, 0.6)',
						    'rgba(180, 99, 132, 0.6)',
						    'rgba(210, 99, 132, 0.6)',
						    'rgba(240, 99, 132, 0.6)'
						   
						  ],
						  borderWidth: 2,
						  hoverBorderWidth: 0
						};

						var config = {
						  type: 'horizontalBar',
						  data: {
								labels: arrPortfolio,
						    datasets: [densityData],
						  },
						  options: {
							scales: {
						    yAxes: [{
						      barPercentage: 0.5
						    }]
						  },
						  elements: {
						    rectangle: {
						      borderSkipped: 'left',
						    }
						  }
						  }
						}

						var ctx0 = document.getElementById('portfolioWork').getContext('2d');
						new Chart(ctx0, config);

						// Return with commas in between
					      var numberWithCommas = function(x) {
					        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
					      };

					        var dataPack1 = arrActWork;
					        var dataPack2 = arrRemWork;
					       
					        var dates = arrPortfolio;

					        // Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';

					        var bar_ctx = document.getElementById('ActRemChart');
					        var bar_chart = new Chart(bar_ctx, {
					            type: 'bar',
					            data: {
					                labels: dates,
					                datasets: [
					                {
					                    label: 'Travail Actuel',
					                    data: dataPack1,
					                    backgroundColor: "#66a1b5",
					                    hoverBackgroundColor: "#66a1b5",
					                    hoverBorderWidth: 0
					                },
					                {
					                    label: 'Travail Restant',
					                    data: dataPack2,
					                    backgroundColor: "#ddbbbb",
					                    hoverBackgroundColor: "#ddbbbb",
					                    hoverBorderWidth: 0
					                },
					                ]
					            },
					            options: {
					                    animation: {
					                    duration: 10,
					                },
					                tooltips: {
					                            mode: 'label',
					                  callbacks: {
					                  label: function(tooltipItem, data) { 
					                    return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
					                  }
					                  }
					                 },
					                scales: {
					                  xAxes: [{ 
					                    stacked: true, 
					                    gridLines: { display: false },
					                    }],
					                  yAxes: [{ 
					                    stacked: true, 
					                    ticks: {
					                            callback: function(value) { return numberWithCommas(value); },
					                            }, 
					                    }],
					                }, // scales
					                legend: {display: true}
					            } // options
					           });
                    }
                    
                }
            });
        }
        LoadProjFilter();
        function loadArrAssigFilter(idProj,npmProj,endLoop,numTab,arrRessourceName,arrRessourceWork) {
        	

        	var responseAssigFilter=responseAssigFilter||[];
			var urlAssigFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Projects(guid'"+idProj+"')/Assignments?"+chaineFilterRess;
			function LoadAssigFilter(endLoop) {
		            var nbre = 0;
		            ////console.log('endLoop= '+endLoop);
		            $.ajax({
		                url: urlAssigFilter,
		                method: "GET",
		                dataType: "json",
		                headers: { Accept: "application/json;odata=verbose" },
		                success: function (data) {
		                    responseAssigFilter = responseAssigFilter.concat(data.d.results);
		                    if (data.d.__next) {
		                        urlAssigFilter = data.d.__next;
		                        LoadAssigFilter(endLoop);
		                    }
		                    if (responseAssigFilter.length>0) {
		                    	if (!data.d.__next){
		                    		var idTableu="tableaux"+numTab;
		                    		var idSearch="search2"+numTab;
		                    		var tagSearch="#"+idSearch;
		                    		document.getElementById("affectationsTables").innerHTML +='<div class="row">'+
		                    		'<table id="'+idTableu+'" class="table table-striped jambo_table table-bordered" style="height: 200px;width: 100%">'+
		                            '<tbody>'+
		                            '</tbody>'+
		                          	'</table>'+
		                    		'</div>';
		                    		var tagTab="#"+idTableu;
		                    		var tagTbody=tagTab+" tbody";
		                    		var tbodyRef = document.querySelector(tagTbody);
	                    			var trHead1;
	                    			trHead1 = $("<tr class='even pointer'>");
	                    			trHead1.append("<th colspan='6'>Projet : " + npmProj + "</th>");
	                    			
	                    			$(tagTbody).append(trHead1);
	                    			var trHead2;
	                    			trHead2 = $("<tr class='even pointer'>");
	                    			trHead2.append("<th style='width: 35%;'>Nom Tâche</th>");
	                    			trHead2.append("<th>Nom Ressource</th>");
	                    			trHead2.append("<th>Début Assignement </th>");
	                    			trHead2.append("<th>Fin Assignement </th>");
	                    			trHead2.append("<th> %Achévement Assignement</th>");
	                    			trHead2.append("<th> Travail Assignement </th>");
	                    			$(tagTbody).append(trHead2);
	                    			var taskNameArr=[];
	                    			var nbOccTaskArr=[];
									var ressourceNameArr=[];
									var debutArr=[];
									var dfinArr=[];
									var achArr=[];
									var travailArr=[];
				                    $.each(responseAssigFilter, function (key, value) {
				                    	moment.locale('fr');
				                        var taskName=value.TaskName;
				                        var ressourceName=value.ResourceName;
				                        var deb=value.AssignmentStartDate;
				                        var debut=moment(deb).format('DD-MM-YYYY');
				                        var fin=value.AssignmentFinishDate;
				                        var dfin=moment(fin).format('DD-MM-YYYY');
				                        var ach=value.AssignmentPercentWorkCompleted;
				                        var travail=parseFloat(value.AssignmentWork/8).toFixed(0);
				                        if (taskNameArr.indexOf(taskName)<0) {
				                        	taskNameArr.push(taskName);
				                        	nbOccTaskArr.push(1);
				                        }else{
				                        	nbOccTaskArr[taskNameArr.indexOf(taskName)]=parseInt(nbOccTaskArr[taskNameArr.indexOf(taskName)]+1);
				                        }
				                        
										ressourceNameArr.push(ressourceName);
										debutArr.push(debut);
										dfinArr.push(dfin);
										achArr.push(ach);
										travailArr.push(travail);
				                     	var tr;
		                    			tr = $("<tr class='even pointer'>");
		                    			tr.append("<td>"+taskName+"</td>");
		                    			tr.append("<td>"+ressourceName+"</td>");
		                    			tr.append("<td>"+debut+"</td>");
		                    			tr.append("<td>"+dfin+"</td>");
		                    			tr.append("<td> "+ach+"%</td>");
		                    			tr.append("<td> "+travail+" </td>");
		                    			$(tagTbody).append(tr);
		                    			if (arrRessourceName.indexOf(ressourceName)<0) {
				                        	arrRessourceName.push(ressourceName);
				                        	arrRessourceWork.push(travail);
				                        }else{
				                        	arrRessourceWork[arrRessourceName.indexOf(ressourceName)]=parseFloat(parseFloat(arrRessourceWork[arrRessourceName.indexOf(ressourceName)])+parseFloat(travail));
				                        }
		                    			
				                    });
				                    //console.log("arrRessourceName= "+arrRessourceName);
				                    //console.log("arrRessourceWork= "+arrRessourceWork);
				                    var tableaux11 = document.getElementById("tableauxResWork");
									tr11 = tableaux11.getElementsByTagName("tr");
									if(tr11.length>0){
									$('#tableauxResWork tbody').empty();
									}
									for (var i = 0; i < arrRessourceName.length; i++) {
										var tr22;
					                	tr22 = $("<tr class='even pointer'>");
					                	tr22.append("<td>"+arrRessourceName[i]+"</td>");
					                    tr22.append("<td>"+arrRessourceWork[i]+"</td>");
					                    $('#tableauxResWork tbody').append(tr22);
									}
				                   	
				                    
				                    
			                    }
		                    }
		                    
		                    
		                }
		            });
		        }
		        LoadAssigFilter(endLoop);
		   
        }
   
 //        var responseTravailRessFilter=responseTravailRessFilter||[];
	// var urlTravailRessFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Assignments?$filter=ResourceName%20ne%27Ressource%20locale%20générique%27%20and%20ResourceName%20ne%27Ressource%20non%20affectée%27%20and%20AssignmentResourceType%20eq%202&$select=ResourceName,AssignmentWork";
	// function LoadTravailRessFilter() {
 //            var nbre = 0;

 //            $.ajax({
 //                url: urlTravailRessFilter,
 //                method: "GET",
 //                dataType: "json",
 //                headers: { Accept: "application/json;odata=verbose" },
 //                success: function (data) {
 //                    responseTravailRessFilter = responseTravailRessFilter.concat(data.d.results);
 //                    if (data.d.__next) {
 //                        urlTravailRessFilter = data.d.__next;
 //                        LoadTravailRessFilter();
 //                    }
 //                    if (!data.d.__next){
                    	
 //                    	var arrResName=[];
 //                    	var arrResWork=[];
	//                     $.each(responseTravailRessFilter, function (key, value) {
	//                     	var ressourceName=value.ResourceName;
	// 						var travail=parseFloat(value.AssignmentWork/8).toFixed(0);
	//                         if (arrResName.indexOf(ressourceName)<0) {
	// 	                    	arrResName.push(ressourceName);
	// 							arrResWork.push(travail);
	// 	                    }else if (arrResName.indexOf(ressourceName)>=0) {
	// 	                    	arrResWork[arrResName.indexOf(ressourceName)]=parseFloat(parseFloat(arrResWork[arrResName.indexOf(ressourceName)])+parseFloat(travail)).toFixed(1);
	// 	                    }
	//                     });
	                  	
	// 		        	for (var i = 0; i < arrResName.length; i++) {
	// 		        		var tr;
	// 	                	tr = $("<tr class='even pointer'>");
	// 	                	tr.append("<td>"+arrResName[i]+"</td>");
	// 	                    tr.append("<td>"+arrResWork[i]+"</td>");
	// 	                    $('#tableauxResWork tbody').append(tr);
	// 	                    $('#mylist3').append($('<option>',
	// 	                            {
	// 	                                text: arrResName[i],
	// 	                                value: arrResName[i]
	// 	                            }));

	// 	                        var opt = {};
	// 	                        $("#mylist3 > option").each(function () {
	// 	                            if (opt[$(this).text()]) {
	// 	                                $(this).remove();
	// 	                            } else {
	// 	                                opt[$(this).text()] = $(this).val();
	// 	                            }
	// 	                        });
	// 		        	}
	// 		        	var $rows = $('#tableauxResWork tr');
	// 					$('#search1').keyup(function() {
	// 					    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
						    
	// 					    $rows.show().filter(function() {
	// 					        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();

	// 					        return !~text.indexOf(val);
	// 					    }).hide();
	// 					});
	                    
 //                    }
                    
 //                }
 //            });
 //        }
 //        LoadTravailRessFilter();
}
