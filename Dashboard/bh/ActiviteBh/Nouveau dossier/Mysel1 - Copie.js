function remplirSel() {
	var dirReg = document.getElementById("myList1").value;

  	if (dirReg!="") {
  		var urlSelected="";
  		var urlSelected2="";
  		urlSelected2+="&$filter=Direction_x0020_R_x00e9_gionale eq'"+dirReg+"'";
  		

		  $('#myList2').empty();
		  $('#myList2').append('<option value="" selected>Agence</option>');
		  var responseAgenceFilterSel=responseAgenceFilterSel||[];
    var urlAgenceFilterSel=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Title,ID"+urlSelected2;
    ////////////////////console.log.log('urlAgenceFilterSel= '+urlAgenceFilterSel);
    function LoadAgenceFilterSel() {
              var nbre = 0;


              $.ajax({
                  url: urlAgenceFilterSel,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseAgenceFilterSel = responseAgenceFilterSel.concat(data.d.results);
                      if (data.d.__next) {
                          urlAgenceFilterSel = data.d.__next;
                          LoadAgenceFilterSel();
                      }
                     
                      $.each(responseAgenceFilterSel, function (key, value) {
                        var agence=value.Title;
                        var idAg=value.ID;
                        $('#myList2').append($('<option>',
                           {
                              text : agence,
                              value:idAg
                            })); 
                            var opt = {};
                              $("#myList2 > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                               });
                      });
                    
                      
                      
                  }
              });
          }
          LoadAgenceFilterSel();
        
     
  	}
}