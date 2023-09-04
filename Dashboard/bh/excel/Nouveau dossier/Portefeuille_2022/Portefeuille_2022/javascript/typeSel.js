function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function selectMyList111(){
  //console.log("Bonjour!!");
  $("#myList3").prop("disabled", false);
  $('#myList3').empty();
  $('#myList3').append('<option value="" selected disabled>Type de Projet</option>');
  

  var nomProgramme =  getSelectedText("myList2");
  var urlFilterProgramme="&$filter=Programme%20eq%27"+nomProgramme+"%27"

document.getElementById("progTitle").innerHTML = '<i class="fa fa-dashboard"></i> ' + nomProgramme +'; ';
  var responseSelectProgType=responseSelectProgType || [];
var urlSelectType= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme,EnterpriseProjectTypeName,Types_des_projets"+urlFilterProgramme;

  function loadSelectType(){
    //console.log("urlSelectType= "+urlSelectType);
    $.ajax({
                  url: urlSelectType,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseSelectProgType = responseSelectProgType.concat(data.d.results);
                      if (data.d.__next) {
                          urlSelectType = data.d.__next;
                          loadSelectType();
                      }
                      
                      

                      $.each(responseSelectProgType, function (key, value) {
                         
                          var typeProj=value.Types_des_projets;
                          if (typeProj!=""&&typeProj!=null) {
                            //console.log("typeProj= "+typeProj);
                          $('#myList3').append($('<option>',
                         {
                            text : typeProj,
                            value:typeProj
                          })); 
                          var opt = {};
                            $("#myList3 > option").each(function () {
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
  loadSelectType();
}
