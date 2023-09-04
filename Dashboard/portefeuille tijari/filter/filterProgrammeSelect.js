function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function selectMyList1(){
  var nomPortefeuille =  getSelectedText("myList1");
  var urlFilterPortefeuille="&$filter=EnterpriseProjectTypeName%20eq%27"+nomPortefeuille+"%27"

$('.myList2').prop("disabled", false);
  var responseSelectProg=responseSelectProg || [];
var urlSelectProg= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme"+urlFilterPortefeuille;
  function loadSelectProg(){
    $.ajax({
                  url: urlSelectProg,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseSelectProg = responseSelectProg.concat(data.d.results);
                      if (data.d.__next) {
                          urlSelectProg = data.d.__next;
                          loadSelectProg();
                      }
                      
                      

                      $.each(responseSelectProg, function (key, value) {
                         if (value.EnterpriseProjectTypeName!=null) {
                          var prog=value.Programme;
                          $('#myList2').append($('<option>',
                         {
                            text : prog,
                            value:prog
                          })); 
                          var opt = {};
                            $("#myList2 > option").each(function () {
                              if(opt[$(this).text()]) {
                                  $(this).remove();
                              } else {
                                  opt[$(this).text()] = $(this).val();
                              }
                             });
                         }
                         
                         
                         


                      });
                      
                  }
              });
  }
  loadSelectProg();
}
