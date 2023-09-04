var responsePortfolioList=responsePortfolioList||[];
	var urlPortfolioList=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=EnterpriseProjectTypeName&$filter=ProjectName%20ne%20%27Opérations%20d’administration%20de%20feuilles%20de%20temps%27&$orderby=EnterpriseProjectTypeName";

	function LoadPortfolioList() {
            var nbre = 0;
            $.ajax({
                url: urlPortfolioList,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responsePortfolioList = responsePortfolioList.concat(data.d.results);
                    if (data.d.__next) {
                        urlPortfolioList = data.d.__next;
                        LoadPortfolioList();
                    }
                    if (!data.d.__next){
                    	
                    	
	                    $.each(responsePortfolioList, function (key, value) {
	                        if (value.EnterpriseProjectTypeName!=null ) {
	                        	var prog=value.EnterpriseProjectTypeName;
	                        	
		                        	$('#mylist2').append($('<option>',
		                            {
		                                text: prog,
		                                value: prog
		                            }));

		                        var opt = {};
		                        $("#mylist2 > option").each(function () {
		                            if (opt[$(this).text()]) {
		                                $(this).remove();
		                            } else {
		                                opt[$(this).text()] = $(this).val();
		                            }
		                        });
	                        }
	                    });
	                  	
                    }
                    
                }
            });
        }
        LoadPortfolioList();
        var responseProgList=responseProgList||[];
	var urlProgList=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme,ProjectId,ProjectName&$filter=ProjectName%20ne%20%27Opérations%20d’administration%20de%20feuilles%20de%20temps%27";
	function LoadProgList() {
            var nbre = 0;

            $.ajax({
                url: urlProgList,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProgList = responseProgList.concat(data.d.results);
                    if (data.d.__next) {
                        urlProgList = data.d.__next;
                        LoadProgList();
                    }
                    if (!data.d.__next){
                    	
                    	
	                    $.each(responseProgList, function (key, value) {
	                        if (value.Programme!=null) {
	                        	var prog=value.Programme;
		                        	$('#mylist1').append($('<option>',
		                            {
		                                text: prog,
		                                value: prog
		                            }));

		                        var opt = {};
		                        $("#mylist1 > option").each(function () {
		                            if (opt[$(this).text()]) {
		                                $(this).remove();
		                            } else {
		                                opt[$(this).text()] = $(this).val();
		                            }
		                        });
	                        }
	                        if (value.ProjectName!="") {
	                        	var nomProj=value.ProjectName;
	                        	var idProj=value.ProjectId;
	                        	$('#mylist0').append($('<option>',
		                            {
		                                text: nomProj,
		                                value: idProj
		                            }));

		                        var opt = {};
		                        $("#mylist0 > option").each(function () {
		                            if (opt[$(this).text()]) {
		                                $(this).remove();
		                            } else {
		                                opt[$(this).text()] = $(this).val();
		                            }
		                        });
	                        }
	                    });
	                  	
                    }
                    
                }
            });
        }
        LoadProgList();
function Main(){

  var responseProj=responseProj||[];
	var urlProj=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectName%20ne%20%27Opérations%20d’administration%20de%20feuilles%20de%20temps%27&$orderby=ProjectName";
	function LoadProj() {
            var nbre = 0;

            $.ajax({
                url: urlProj,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProj = responseProj.concat(data.d.results);
                    if (data.d.__next) {
                        urlProj = data.d.__next;
                        LoadProj();
                    }
                    if (!data.d.__next){
                    	var arrProjId=[];
                    	var arrProjName=[];
                    	var arrPortfolio=[];
                    	var arrWork=[];
                    	var arrActWork=[];
                    	var arrRemWork=[];
                    	var arrIdTab=[];
                    	var arrIdSearsh=[];
	                    $.each(responseProj, function (key, value) {
	                        var projectId=value.ProjectId;
	                        var projecN=value.ProjectName;
	                        arrProjId.push(projectId);
	                        arrProjName.push(projecN);
	                        var portefeuille=value.EnterpriseProjectTypeName;
	                        var pWork=parseFloat(value.ProjectWork/8).toFixed(0);
	                        var pActWork=parseFloat(value.ProjectActualWork/8).toFixed(0);
	                        var pRemWork=parseFloat(value.ProjectRemainingWork/8).toFixed(0);
	                        if (arrPortfolio.indexOf(portefeuille)<0) {
	                        	arrPortfolio.push(portefeuille);
	                        	arrWork.push(pWork);
	                        	arrActWork.push(pActWork);
								arrRemWork.push(pRemWork);
	                        }else if (arrPortfolio.indexOf(portefeuille)>=0) {
	                        	arrWork[arrPortfolio.indexOf(portefeuille)]=parseFloat(parseFloat(arrWork[arrPortfolio.indexOf(portefeuille)])+parseFloat(pWork)).toFixed(0);
	                        	arrActWork[arrPortfolio.indexOf(portefeuille)]=parseFloat(parseFloat(arrActWork[arrPortfolio.indexOf(portefeuille)])+parseFloat(pActWork)).toFixed(0);
	                        	arrRemWork[arrPortfolio.indexOf(portefeuille)]=parseFloat(parseFloat(arrRemWork[arrPortfolio.indexOf(portefeuille)])+parseFloat(pRemWork)).toFixed(0);
	                        }
	                    });
	                  	var endLoop=false;
	                    for (var i = 0; i < arrProjId.length; i++) {
	                    	if (i+1==arrProjId.length) {
	                    		endLoop=true;
	                    	}
	                    	//console.log('endLoop00= '+endLoop);
	                    	loadArrAssig(arrProjId[i],arrProjName[i],endLoop,i,arrIdTab,arrIdSearsh);

	                    }
	                    var densityData = {
						  label: 'Travail par portefeuille (Jour)',
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
        LoadProj();
        function loadArrAssig(idProj,npmProj,endLoop,numTab,arrIdTab,arrIdSearsh) {
        	

        	var responseAssig=responseAssig||[];
			var urlAssig=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Projects(guid'"+idProj+"')/Assignments?$filter=ResourceName%20ne%27Ressource locale générique%27%20and%20ResourceName%20ne%27Ressource non affectée%27%20and%20AssignmentResourceType%20eq%202";
			function LoadAssig(endLoop) {
		            var nbre = 0;
		            //console.log('endLoop= '+endLoop);
		            $.ajax({
		                url: urlAssig,
		                method: "GET",
		                dataType: "json",
		                headers: { Accept: "application/json;odata=verbose" },
		                success: function (data) {
		                    responseAssig = responseAssig.concat(data.d.results);
		                    if (data.d.__next) {
		                        urlAssig = data.d.__next;
		                        LoadAssig(endLoop);
		                    }
		                    if (responseAssig.length>0) {
		                    	if (!data.d.__next){
		                    		var idTableu="tableaux"+numTab;
		                    		var idSearch="search2"+numTab;
		                    		arrIdTab.push(idTableu);
		                    		arrIdSearsh.push(idSearch);
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
				                    $.each(responseAssig, function (key, value) {
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
		                    			
				                    });
				                    // var k=0;
				                    // for (var i = 0; i < taskNameArr.length; i++) {
				                    // 	var tr;
		                    		// 	tr = $("<tr class='even pointer'>");
		                    		// 	tr.append("<td rowspan='"+nbOccTaskArr[i]+"'>"+taskNameArr[i]+"</td>");
		                    		// 	for (var j = k; j < k+nbOccTaskArr[i]; j++) {
		                    		// 		tr.append("<td>"+ressourceNameArr[j]+"</td>");
			                    	// 		tr.append("<td>"+debutArr[j]+"</td>");
			                    	// 		tr.append("<td>"+dfinArr[j]+"</td>");
			                    	// 		tr.append("<td> "+achArr[j]+"%</td>");
			                    	// 		tr.append("<td> "+travailArr[j]+" </td>");
		                    		// 	}
		                    		// 	$('#tableaux tbody').append(tr);
		                    		// 	k=j+1;
				                    // }

				                    // loadSearchTab2(arrIdTab,arrIdSearsh);
				                    
				                    
			                    }
		                    }
		                    
		                    
		                }
		            });
		        }
		        LoadAssig(endLoop);
		   
        }
    //     function loadSearchTab2(arrIdTab,arrIdSearsh) {
    //     	for (var i = 0; i < arrIdTab.length; i++) {
    //     		var searchchhh='#'+arrIdSearsh[i];
				// var tabidChhhh='#'+arrIdTab[i]+' tbody';
    //     		$( document ).ready(function() {
    //     			console.log('tabidChhhh= '+tabidChhhh)
    //     			console.log('searchchhh= '+searchchhh)
				//   $(searchchhh).on("keyup", function() {
				// 	 var value = $(this).val().toLowerCase();
				// 		$(tabidChhhh).filter(function() {
				// 			 $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
				// 		});
				// 	});
				// });
    //     	}
			  
				
			
        	
				     
        // }
        var responseTravailRess=responseTravailRess||[];
	var urlTravailRess=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Assignments?$filter=ResourceName%20ne%27Ressource%20locale%20générique%27%20and%20ResourceName%20ne%27Ressource%20non%20affectée%27%20and%20AssignmentResourceType%20eq%202&$select=ResourceName,AssignmentWork";
	function LoadTravailRess() {
            var nbre = 0;

            $.ajax({
                url: urlTravailRess,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseTravailRess = responseTravailRess.concat(data.d.results);
                    if (data.d.__next) {
                        urlTravailRess = data.d.__next;
                        LoadTravailRess();
                    }
                    if (!data.d.__next){
                    	
                    	var arrResName=[];
                    	var arrResWork=[];
	                    $.each(responseTravailRess, function (key, value) {
	                    	var ressourceName=value.ResourceName;
							var travail=parseFloat(value.AssignmentWork/8).toFixed(0);
	                        if (arrResName.indexOf(ressourceName)<0) {
		                    	arrResName.push(ressourceName);
								arrResWork.push(travail);
		                    }else if (arrResName.indexOf(ressourceName)>=0) {
		                    	arrResWork[arrResName.indexOf(ressourceName)]=parseFloat(parseFloat(arrResWork[arrResName.indexOf(ressourceName)])+parseFloat(travail)).toFixed(1);
		                    }
	                    });
	                  	
			        	for (var i = 0; i < arrResName.length; i++) {
			        		var tr;
		                	tr = $("<tr class='even pointer'>");
		                	tr.append("<td>"+arrResName[i]+"</td>");
		                    tr.append("<td>"+arrResWork[i]+"</td>");
		                    $('#tableauxResWork tbody').append(tr);
		                    $('#mylist3').append($('<option>',
		                            {
		                                text: arrResName[i],
		                                value: arrResName[i]
		                            }));

		                        var opt = {};
		                        $("#mylist3 > option").each(function () {
		                            if (opt[$(this).text()]) {
		                                $(this).remove();
		                            } else {
		                                opt[$(this).text()] = $(this).val();
		                            }
		                        });
			        	}
			        	var $rows = $('#tableauxResWork tr');
						$('#search1').keyup(function() {
						    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
						    
						    $rows.show().filter(function() {
						        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();

						        return !~text.indexOf(val);
						    }).hide();
						});
	                    
                    }
                    
                }
            });
        }
        LoadTravailRess();
        
}
Main();

									
