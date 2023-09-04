function valider1() {
	$('button#valider2').prop( "disabled", false );
	var radio1checked=document.getElementById('flexRadioDefault1Rad'); 
	var radio2checked=document.getElementById('flexRadioDefault2Rad'); 
	$('input#flexRadioDefault1Rad').prop( "disabled", false );
	$('input#flexRadioDefault2Rad').prop( "disabled", false );
	if (radio1checked.checked) {
		$('input#start').prop( "disabled", false );
		$('input#finish').prop( "disabled", false );
		$('select#myList01').prop( "disabled", true );
		$('select#myList02').prop( "disabled", true );
	}else if (radio2checked.checked) {
		$('select#myList01').prop( "disabled", false );
		$('select#myList02').prop( "disabled", false );
		$('input#start').prop( "disabled", true );
		$('input#finish').prop( "disabled", true );
	}
	 $('#myList1').empty();
      $('#myList1').append('<option value="" selected>Direction Régionale</option>');
      $('#myList2').empty();
      $('#myList2').append('<option value="" selected>Agence</option>');
var responseRegion1111=responseRegion1111||[];
  var urlRegion1111=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Direction_x0020_R_x00e9_gionale";
  ////////////////////console.log.log('urlRegion1111= '+urlRegion1111);
  function LoadRegion1111() {
            var nbre = 0;


            $.ajax({
                url: urlRegion1111,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseRegion1111 = responseRegion1111.concat(data.d.results);
                    if (data.d.__next) {
                        urlRegion1111 = data.d.__next;
                        LoadRegion1111();
                    }
                   
                    $.each(responseRegion1111, function (key, value) {
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
        LoadRegion1111();

        var arrUserId=[];
        var arrUserName=[];
        

         var responseAgence1111=responseAgence1111||[];
    var urlAgence1111=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Title,ID";
    //////////////////////console.log.log('urlAgence1111= '+urlAgence1111);
    function LoadAgence1111() {
              var nbre = 0;


              $.ajax({
                  url: urlAgence1111,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseAgence1111 = responseAgence1111.concat(data.d.results);
                      if (data.d.__next) {
                          urlAgence1111 = data.d.__next;
                          LoadAgence1111();
                      }
                     
                      $.each(responseAgence1111, function (key, value) {
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
          LoadAgence1111();
}
function change1(){
	$('input#start').prop( "disabled", false );
	$('input#finish').prop( "disabled", false );
	$('select#myList01').prop( "disabled", true );
	$('select#myList02').prop( "disabled", true );
}
function change2(){
	$('select#myList01').prop( "disabled", false );
	$('select#myList02').prop( "disabled", false );
	$('input#start').prop( "disabled", true );
	$('input#finish').prop( "disabled", true );
}