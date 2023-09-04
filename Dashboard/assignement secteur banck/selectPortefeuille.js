function loadListsByPortfolio(){
  var portfolioSel=document.getElementById("mylist2").value;
  if (portfolioSel!="") {
  	$('#mylist1').prop("disabled", false);
	$('#mylist1').empty();
	$('#mylist1').append('<option value="" selected>PROGRAMME</option>');
	$('#mylist0').empty();
	$('#mylist0').append('<option value="" selected>PROJET</option>');
	$('#mylist3').empty();
	$('#mylist3').append('<option value="" selected>RESSOURCE</option>');
  	var responseProgListFilter=responseProgListFilter||[];
	var urlProgListFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme,ProjectId,ProjectName&$filter=ProjectName%20ne%20%27Opérations%20d’administration%20de%20feuilles%20de%20temps%27%20and%20EnterpriseProjectTypeName%20eq%27"+portfolioSel+"%27";
	function LoadProgListFilter() {
            var nbre = 0;

            $.ajax({
                url: urlProgListFilter,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProgListFilter = responseProgListFilter.concat(data.d.results);
                    if (data.d.__next) {
                        urlProgListFilter = data.d.__next;
                        LoadProgListFilter();
                    }
                    if (!data.d.__next){
                    	
                    	
	                    $.each(responseProgListFilter, function (key, value) {
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
        LoadProgListFilter();
        var responseProjFilterSel1=responseProjFilterSel1||[];
	var urlProjFilterSel1=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme,ProjectId,ProjectName&$filter=ProjectName%20ne%20%27Opérations%20d’administration%20de%20feuilles%20de%20temps%27%20and%20EnterpriseProjectTypeName%20eq%27"+portfolioSel+"%27";
	function LoadProjFilterSel1() {
            var nbre = 0;

            $.ajax({
                url: urlProjFilterSel1,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProjFilterSel1 = responseProjFilterSel1.concat(data.d.results);
                    if (data.d.__next) {
                        urlProjFilterSel1 = data.d.__next;
                        LoadProjFilterSel1();
                    }
                    if (!data.d.__next){
                    	var arrProjId=[];
                    	var arrProjName=[];
                    	

	                    $.each(responseProjFilterSel1, function (key, value) {
	                        var projectId=value.ProjectId;
	                        var projecN=value.ProjectName;
	                        arrProjId.push(projectId);
	                        arrProjName.push(projecN);
	                        
	                    });
	                  	var endLoop=false;
	                    for (var i = 0; i < arrProjId.length; i++) {
	                    	if (i+1==arrProjId.length) {
	                    		endLoop=true;
	                    	}
	                    	//console.log('endLoop00= '+endLoop);
	                    	loadArrAssig(arrProjId[i],arrProjName[i],endLoop);

	                    }
	                    
                    }
                    
                }
            });
        }
        LoadProjFilterSel1();
        function loadArrAssig(idProj,npmProj,endLoop) {
        	

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

		                    		
	                    			
									var ressourceNameArr=[];
									var count=0;
				                    $.each(responseAssig, function (key, value) {
				                    	moment.locale('fr');
				                        
				                        var ressourceName=value.ResourceName;
				                        
				                        if (ressourceNameArr.indexOf(ressourceName)<0) {
											ressourceNameArr.push(ressourceName);
											$('#mylist3').append($('<option>',
								            {
								                text: ressourceName,
								                value: ressourceName
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
				                        count++;
				                        
										
		                    			
				                    });

				                    
				     
			                    }
		                    }
		                    
		                    
		                }
		            });
		        }
		        LoadAssig(endLoop);
		   
        }
        
  }else{
  	window.location.reload();
  }
}
