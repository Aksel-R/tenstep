function selectMyList1(){
	 $('#projecttype').empty().append('<option value="" selected>Type de projet</option>');
	
	$('#projectowner').empty().append('<option value="" selected>Chef de projet</option>');
	
	$('#covphase').empty().append('<option value="" selected>Phase de gouvernance</option>');

	
	var urlFilter1Selected1= "";

	var departement=document.getElementById("departement").value;

  		if (departement!="") {
        	urlFilter1Selected1+="&$filter=Direction%20eq%27"+departement+"%27";
      	}else{
      		urlFilter1Selected1= "";
      		urlFilterSelected= "";
			countSelected=0;
      	}
	   var responseRemplirSelectTypeProjFilter1=responseRemplirSelectTypeProjFilter1 || [];
        var urlRemplirSelectTypeProjFilter1= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=EnterpriseProjectTypeName"+urlFilter1Selected1;
        
        function remplirSelectTypeProjFilter1(){
          $.ajax({
                        url: urlRemplirSelectTypeProjFilter1,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectTypeProjFilter1 = responseRemplirSelectTypeProjFilter1.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectTypeProjFilter1 = data.d.__next;
                                remplirSelectTypeProjFilter1();
                            }
                            

                            $.each(responseRemplirSelectTypeProjFilter1, function (key, value) {
                                if (value.EnterpriseProjectTypeName!=null) {
                                  var typeP=value.EnterpriseProjectTypeName;
                                  
                                  $('#projecttype').append($('<option>',
                                 {
                                    text : typeP,
                                    value:typeP,
                                    selected:false
                                  })); 
                                  var opt1 = {};
                                    $("#projecttype > option").each(function () {
                                      if(opt1[$(this).text()]) {
                                          $(this).remove();
                                      } else {
                                          opt1[$(this).text()] = $(this).val();
                                      }
                                     });
                                 }
                            });

                            
                        }
                    });
        }
        remplirSelectTypeProjFilter1();
       
    
        var responseRemplirSelectProjectOwnerNameFilter1=responseRemplirSelectProjectOwnerNameFilter1 || [];
        var urlRemplirSelectProjectOwnerNameFilter1= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectOwnerName"+urlFilter1Selected1;
        function remplirSelectProjectOwnerNameFilter1(){
          $.ajax({
                        url: urlRemplirSelectProjectOwnerNameFilter1,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectProjectOwnerNameFilter1 = responseRemplirSelectProjectOwnerNameFilter1.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectProjectOwnerNameFilter1 = data.d.__next;
                                remplirSelectProjectOwnerNameFilter1();
                            }
                            
                            
                            $.each(responseRemplirSelectProjectOwnerNameFilter1, function (key, value) {
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
        remplirSelectProjectOwnerNameFilter1();
        var responseRemplirSelectPhaseGFilter1=responseRemplirSelectPhaseGFilter1 || [];
        var urlRemplirSelectPhaseGFilter1= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectPhase"+urlFilter1Selected1;
        function remplirSelectPhaseGFilter1(){
          $.ajax({
                        url: urlRemplirSelectPhaseGFilter1,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectPhaseGFilter1 = responseRemplirSelectPhaseGFilter1.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectPhaseGFilter1 = data.d.__next;
                                remplirSelectPhaseGFilter1();
                            }
                            
                            
                            $.each(responseRemplirSelectPhaseGFilter1, function (key, value) {
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
        remplirSelectPhaseGFilter1();
        

}
