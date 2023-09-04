function remplirSel() {
  $('#myList2').empty();
      $('#myList2').append('<option value="" selected>Agence</option>');
      $('select#myList2').prop( "disabled", false );
  var urlFilterSel22="";
  var dirReg112 = document.getElementById("myList1").value;
  var dirReg11=dirReg112.replace("'", "%27%27");
    if (dirReg11!="") {
      urlFilterSel22+="&$filter=Direction_x0020_R_x00e9_gionale eq'"+dirReg11+"'";
    }
    var responseAgenceFilter=responseAgenceFilter||[];
    var urlAgenceFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Title,ID"+urlFilterSel22;
    ////////////////////console.log.log('urlAgenceFilter= '+urlAgenceFilter);
    function LoadAgenceFilter() {
              var nbre = 0;


              $.ajax({
                  url: urlAgenceFilter,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseAgenceFilter = responseAgenceFilter.concat(data.d.results);
                      if (data.d.__next) {
                          urlAgenceFilter = data.d.__next;
                          LoadAgenceFilter();
                      }
                     
                      $.each(responseAgenceFilter, function (key, value) {
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
          LoadAgenceFilter();
}