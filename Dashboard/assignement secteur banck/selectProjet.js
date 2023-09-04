function loadListsByProject(){
  var projectIdSel=document.getElementById("mylist0").value;
  
  if (projectIdSel!="") {
  	// $('#mylist1').prop("disabled", false);
	
	
	$('#mylist3').empty();
	$('#mylist3').append('<option value="" selected>RESSOURCE</option>');

	
        var responseProjFilter22Sel1=responseProjFilter22Sel1||[];
	var urlProjFilter22Sel1=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme,ProjectId,ProjectName&$filter=ProjectId%20eq%20guid%27"+projectIdSel+"%27";
	console.log('urlProjFilter22Sel1= '+urlProjFilter22Sel1);
	function LoadProjFilter22Sel1() {
            var nbre = 0;

            $.ajax({
                url: urlProjFilter22Sel1,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProjFilter22Sel1 = responseProjFilter22Sel1.concat(data.d.results);
                    if (data.d.__next) {
                        urlProjFilter22Sel1 = data.d.__next;
                        LoadProjFilter22Sel1();
                    }
                    if (!data.d.__next){
                    	var arrProjId=[];
                    	var arrProjName=[];
                    	

	                    $.each(responseProjFilter22Sel1, function (key, value) {
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
        LoadProjFilter22Sel1();
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
        
  }else {
  	loadListsByProgram();
  }
}

