function selectMyList2(){

	
	$('#projectowner').empty().append('<option value="" selected>Chef de projet</option>');
	
/*	$('#covphase').empty().append('<option value="" selected>Phase de gouvernance</option>');*/

	
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
        console.log("urlRemplirSelectProjectOwnerNameFilter2 ="+ urlRemplirSelectProjectOwnerNameFilter2);
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
}
