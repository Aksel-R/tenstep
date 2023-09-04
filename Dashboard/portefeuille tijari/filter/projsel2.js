function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function selectMyList2(){

  $("#myList3").prop("disabled", false);
  var nomPortefeuille =  getSelectedText("myList1");
  var progSelctedName1=getSelectedText("myList2");
  document.getElementById("progTitle").innerHTML = '<i class="fa fa-dashboard"></i> ' + nomPortefeuille +'; '+progSelctedName1+'; ';
  var progn=progSelctedName1.replace("'", "''");
  var urlFilterPortefeuille="&$filter=EnterpriseProjectTypeName%20eq%27"+nomPortefeuille+"%27 and Programme eq%27"+progn+"%27";

  var responseSelectProj=responseSelectProj || [];
var urlSelectProj= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId,EnterpriseProjectTypeName"+urlFilterPortefeuille+"%20and%20Types_de_Projet%20eq%27Page_Maitre%27";

  function loadSelectProj(){
    //console.log("urlSelectProj= "+urlSelectProj);
    $.ajax({
                  url: urlSelectProj,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseSelectProj = responseSelectProj.concat(data.d.results);
                      if (data.d.__next) {
                          urlSelectProj = data.d.__next;
                          loadSelectProj();
                      }
                      
                      

                      $.each(responseSelectProj, function (key, value) {
                         if (value.EnterpriseProjectTypeName!=null) {
                          var projN=value.ProjectName;
                          var projId=value.ProjectId;
                          if (projN!=""&&projN!=null) {
                            //console.log("projN= "+projN);
                          $('#myList3').append($('<option>',
                         {
                            text : projN,
                            value:projId
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
                          
                         }
                         
                         
                         


                      });
                      
                  }
              });
  }
  loadSelectProj();
}
