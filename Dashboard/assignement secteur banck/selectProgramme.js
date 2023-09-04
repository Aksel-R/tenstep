function loadListsByProgram(){
	
  var portfolioSel=document.getElementById("mylist2").value;
  var progSel=document.getElementById("mylist1").value;
  var projectIdSel=document.getElementById("mylist0").value;
  if ((portfolioSel!="")&&(progSel!="")) {
  	// $('#mylist1').prop("disabled", false);
	
	$('#mylist0').empty();
	$('#mylist0').append('<option value="" selected>PROJET</option>');
	$('#mylist3').empty();
	$('#mylist3').append('<option value="" selected>RESSOURCE</option>');
  	var responseProgListFilter2=responseProgListFilter2||[];
	var urlProgListFilter2=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme,ProjectId,ProjectName&$filter=ProjectName%20ne%20%27Opérations%20d’administration%20de%20feuilles%20de%20temps%27%20and%20EnterpriseProjectTypeName%20eq%27"+portfolioSel+"%27%20and%20Programme%20eq%27"+progSel+"%27";
	//console.log('urlProgListFilter2 '+urlProgListFilter2);
	function LoadProgListFilter2() {
            var nbre = 0;

            $.ajax({
                url: urlProgListFilter2,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProgListFilter2 = responseProgListFilter2.concat(data.d.results);
                    if (data.d.__next) {
                        urlProgListFilter2 = data.d.__next;
                        LoadProgListFilter2();
                    }
                    if (!data.d.__next){
                    	
                    	
	                    $.each(responseProgListFilter2, function (key, value) {
	                        
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
        LoadProgListFilter2();
        var responseProjFilter2Sel1=responseProjFilter2Sel1||[];
	var urlProjFilter2Sel1=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme,ProjectId,ProjectName&$filter=ProjectName%20ne%20%27Opérations%20d’administration%20de%20feuilles%20de%20temps%27%20and%20EnterpriseProjectTypeName%20eq%27"+portfolioSel+"%27%20and%20Programme%20eq%27"+progSel+"%27";
	function LoadProjFilter2Sel1() {
            var nbre = 0;

            $.ajax({
                url: urlProjFilter2Sel1,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProjFilter2Sel1 = responseProjFilter2Sel1.concat(data.d.results);
                    if (data.d.__next) {
                        urlProjFilter2Sel1 = data.d.__next;
                        LoadProjFilter2Sel1();
                    }
                    if (!data.d.__next){
                    	var arrProjId=[];
                    	var arrProjName=[];
                    	

	                    $.each(responseProjFilter2Sel1, function (key, value) {
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
        LoadProjFilter2Sel1();
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
        
  }else if((portfolioSel!="")&&(progSel=="")){
  	loadListsByPortfolio();
  }
}