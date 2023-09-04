function selectMyList1(){
	 $('#projecttype').empty().append('<option value="" selected>Type de projet</option>');
	
	$('#projectowner').empty().append('<option value="" selected>Chef de projet</option>');

	var urlFilter1Selected1= "";
	var sousDir=document.getElementById("sousDirection").value;

  		if (sousDir!="") {
        	urlFilter1Selected1+="&$filter=Direction%20eq%27"+sousDir+"%27";
          document.getElementById('projectowner').disabled=false;
      	}
        else{
          document.getElementById('projectowner').disabled=true;
      		urlFilter1Selected1= "";
      		urlFilterSelected= "";
			countSelected=0;
      	}
        console.log("urlFilter1Selected1 = "+urlFilter1Selected1);
	   
       
    
        var responseRemplirSelectProjectOwnerNameFilter1=responseRemplirSelectProjectOwnerNameFilter1 || [];
        var urlRemplirSelectProjectOwnerNameFilter1= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectOwnerName"+urlFilter1Selected1;
        console.log("urlRemplirSelectProjectOwnerNameFilter1 = "+urlRemplirSelectProjectOwnerNameFilter1);
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
                                          var opt2 = {};
                                            $("#projectowner > option").each(function () {
                                              if(opt2[$(this).text()]) {
                                                  $(this).remove();
                                              } else {
                                                  opt2[$(this).text()] = $(this).val();
                                              }
                                             });
                                         }
                            });
                            
                        }
                    });
        }
        remplirSelectProjectOwnerNameFilter1();
        

}
