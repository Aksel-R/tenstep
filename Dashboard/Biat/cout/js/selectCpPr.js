function selectMyList3(){

	

	
	$('#covphase').empty().append('<option value="" selected>Phase de gouvernance</option>');

	
	var urlFilter3Selected1= "";

	var chefProj=document.getElementById("projectowner").value;

  		if (chefProj!="") {
        	urlFilter3Selected1+="&$filter=OwnerName%20eq%27"+chefProj+"%27";
      	}else{
      		urlFilter3Selected1= "";
      		urlFilterSelected= "";
			countSelected=0;
      	}
	   
        
        var responseRemplirSelectPhaseGFilter3=responseRemplirSelectPhaseGFilter3 || [];
        var urlRemplirSelectPhaseGFilter3= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectPhase"+urlFilter3Selected1;
        function remplirSelectPhaseGFilter3(){
          $.ajax({
                        url: urlRemplirSelectPhaseGFilter3,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectPhaseGFilter3 = responseRemplirSelectPhaseGFilter3.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectPhaseGFilter3 = data.d.__next;
                                remplirSelectPhaseGFilter3();
                            }
                            
                            
                            $.each(responseRemplirSelectPhaseGFilter3, function (key, value) {
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
        remplirSelectPhaseGFilter3();
        

}
