function selectMyList2(){

	
	$('#projectowner').empty().append('<option value="" selected>Chef de projet</option>');
	
	$('#covphase').empty().append('<option value="" selected>Phase de gouvernance</option>');

	
	var urlFilter2Selected1= "";

	var typeProj=document.getElementById("projecttype").value;

  		if (typeProj!="") {
        	urlFilter2Selected1+="&$filter=EnterpriseProjectTypeName%20eq%27"+typeProj+"%27";
      	}else{
      		urlFilter2Selected1= "";
      		urlFilterSelected= "";
			countSelected=0;
      	}
	   
        var responseRemplirSelectProjectOwnerNameFilter2=responseRemplirSelectProjectOwnerNameFilter2 || [];
        var urlRemplirSelectProjectOwnerNameFilter2= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectOwnerName"+urlFilter2Selected1;
        function remplirSelectProjectOwnerNameFilter2(){
          $.ajax({
                        url: urlRemplirSelectProjectOwnerNameFilter2,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectProjectOwnerNameFilter2 = responseRemplirSelectProjectOwnerNameFilter2.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectProjectOwnerNameFilter2 = data.d.__next;
                                remplirSelectProjectOwnerNameFilter2();
                            }
                            
                            
                            $.each(responseRemplirSelectProjectOwnerNameFilter2, function (key, value) {
                                if (value.ProjectOwnerName!=null) {
                                          var chefProj=value.ProjectOwnerName;
                                          $('#projectowner').append($('<option>',
                                         {
                                            text : chefProj,
                                            value:chefProj
                                          })); 
                                          var opt3 = {};
                                            $("#projectowner > option").each(function () {
                                              if(opt3[$(this).text()]) {
                                                  $(this).remove();
                                              } else {
                                                  opt3[$(this).text()] = $(this).val();
                                              }
                                             });
                                         }
                            });
                            
                        }
                    });
        }
        remplirSelectProjectOwnerNameFilter2();
        var responseRemplirSelectPhaseGFilter2=responseRemplirSelectPhaseGFilter2 || [];
        var urlRemplirSelectPhaseGFilter2= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectPhase"+urlFilter2Selected1;
        function remplirSelectPhaseGFilter2(){
          $.ajax({
                        url: urlRemplirSelectPhaseGFilter2,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectPhaseGFilter2 = responseRemplirSelectPhaseGFilter2.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectPhaseGFilter2 = data.d.__next;
                                remplirSelectPhaseGFilter2();
                            }
                            
                            
                            $.each(responseRemplirSelectPhaseGFilter2, function (key, value) {
                              if (value.ProjectPhase!=null) {
                                        var projectPhase=value.ProjectPhase;
                                        $('#covphase').append($('<option>',
                                       {
                                          text : projectPhase,
                                          value:projectPhase
                                        })); 
                                        var opt4 = {};
                                          $("#covphase > option").each(function () {
                                            if(opt4[$(this).text()]) {
                                                $(this).remove();
                                            } else {
                                                opt4[$(this).text()] = $(this).val();
                                            }
                                           });
                                       }
                            });
                            
                        }
                    });
        }
        remplirSelectPhaseGFilter2();
        

}