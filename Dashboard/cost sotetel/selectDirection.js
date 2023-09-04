function selectMyList(){
	$('#sousDirection').empty().append('<option value="" selected>Sous Directions</option>');
	$('#projecttype').empty().append('<option value="" selected>Type de projet</option>');
	$('#projectowner').empty().append('<option value="" selected>Chef de projet</option>');

		var urlFilterSelectedDirection= "";

	var direction=document.getElementById("Direction").value;

  		if (direction!="") {
        document.getElementById('sousDirection').disabled=false;
        document.getElementById('projectowner').disabled=true;
  			if((direction=="Direction Générale")||(direction=="Direction Générale.IT")) {
  				direction = "Direction Générale";
  				urlFilterSelectedDirection+="&$filter=startswith(Direction,'"+direction+"')%20eq%20true";
  			}
  			else if (direction == "Direction des projets") {
  				direction = "Direction des projets";
  				urlFilterSelectedDirection+="&$filter=startswith(Direction,'"+direction+"')%20eq%20true";
  			}
  			else if (direction=="ServiceConvergent") {
  				var direction11 = "ServiceConvergent";
  				urlFilterSelectedDirection+="&$filter=startswith(Direction,'"+direction11+"')%20eq%20true";
  			}
  			else if (direction=="ServiceInfrastructure") {
  				var direction22 = "ServiceInfrastructure";
  				urlFilterSelectedDirection+="&$filter=startswith(Direction,'"+direction22+"')%20eq%20true";
  			}
   
      	}
        else{
          document.getElementById('sousDirection').disabled=true;
          document.getElementById('projectowner').disabled=true;
       
      		urlFilterSelectedDirection= "";
      		urlFilterSelected= "";
			    countSelected=0;
      	}


var responseRemplirSelectSousDirectionFilter = responseRemplirSelectSousDirectionFilter || [];
var urlRemplirSelectSousDirectionFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction"+urlFilterSelectedDirection;

 function remplirSelectSousDirectionFilter() {

 $.ajax({
url: urlRemplirSelectSousDirectionFilter,
method: "GET",
dataType: "json",
headers: { Accept: "application/json;odata=verbose" },
success: function (data) {
responseRemplirSelectSousDirectionFilter = responseRemplirSelectSousDirectionFilter.concat(data.d.results);
if (data.d.__next) {
urlRemplirSelectSousDirectionFilter = data.d.__next;
remplirSelectSousDirectionFilter();
}
  $.each(responseRemplirSelectSousDirectionFilter, function (key, value) {
                                if (value.Direction!=null) {
                                  var sousDir=value.Direction;
                                  
                                  $('#sousDirection').append($('<option>',
                                 {
                                    text : sousDir,
                                    value:sousDir,
                                    selected:false
                                  })); 
                                  var opt1 = {};
                                    $("#sousDirection > option").each(function () {
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
remplirSelectSousDirectionFilter();

     


}