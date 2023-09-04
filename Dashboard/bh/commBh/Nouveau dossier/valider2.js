function valider2() {
	      $('#myList1').empty();
      $('#myList1').append('<option value="" selected>Direction Régionale</option>');
      $('#myList2').empty();
      $('#myList2').append('<option value="" selected>Agence</option>');
	var responseRegion11=responseRegion11||[];
  var urlRegion11=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Direction_x0020_R_x00e9_gionale";
  ////////////////////console.log.log('urlRegion11= '+urlRegion11);
  function LoadRegion11() {
            var nbre = 0;


            $.ajax({
                url: urlRegion11,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseRegion11 = responseRegion11.concat(data.d.results);
                    if (data.d.__next) {
                        urlRegion11 = data.d.__next;
                        LoadRegion11();
                    }
                   
                    $.each(responseRegion11, function (key, value) {
                      var region=value.Direction_x0020_R_x00e9_gionale;
                      $('#myList1').append($('<option>',
                         {
                            text : region,
                            value:region
                          })); 
                          var opt = {};
                            $("#myList1 > option").each(function () {
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
        LoadRegion11();

        var arrUserId=[];
        var arrUserName=[];
        

         var responseAgence11=responseAgence11||[];
    var urlAgence11=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Title,ID";
    //////////////////////console.log.log('urlAgence11= '+urlAgence11);
    function LoadAgence11() {
              var nbre = 0;


              $.ajax({
                  url: urlAgence11,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseAgence11 = responseAgence11.concat(data.d.results);
                      if (data.d.__next) {
                          urlAgence11 = data.d.__next;
                          LoadAgence11();
                      }
                     
                      $.each(responseAgence11, function (key, value) {
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
          LoadAgence11();
		var rad03=document.getElementById('flexRadioDefault1Rad');
		var test=true;
		if (rad03.checked){
			var date01 = document.getElementById("start").value;
	    	var date02 = document.getElementById("finish").value;
	    	var md1=moment(date01);
	    	var md2=moment(date02);
	    	moment.locale('fr');
	    	if (date01==""||date02==""||moment(md2).isBefore(md1)) {
	    		alert("Filter non valide");
	    		test=false;
	    	}
		}
		if (test) {
			$('select#myList1').prop( "disabled", false );
			
		}

		mainDate();
}