function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function selectMyList1(){
  //console.log("Bonjour!!");
  $("#myList2").prop("disabled", false);
  $('#myList2').empty();
  $('#myList2').append('<option value="" selected disabled>Programme</option>');

    $("#myList3").prop("disabled", true);
  $('#myList3').empty();
  $('#myList3').append('<option value="" selected disabled>Type de Projet</option>');


  var nomPortefeuille =  getSelectedText("myList1");
  var urlFilterPortefeuille="&$filter=EnterpriseProjectTypeName%20eq%27"+nomPortefeuille+"%27"
  if (nomPortefeuille=="Projet Plan Stratégique (2022-2025)") {
    document.getElementById("myList3").style.display = "none";
  }else{
    document.getElementById("myList3").style.display = "block";
  }

//document.getElementById("progTitle").innerHTML = '<i class="fa fa-dashboard"></i> ' + nomPortefeuille +'; ';
  var responseSelectProg=responseSelectProg || [];
var urlSelectProg= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme,EnterpriseProjectTypeName"+urlFilterPortefeuille;

  function loadSelectProg(){
    //console.log("urlSelectProg= "+urlSelectProg);
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
                          if (prog!=""&&prog!=null) {
                            //console.log("prog= "+prog);
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
                          
                         }
                         
                         
                         


                      });
                      
                  }
              });
  }
  loadSelectProg();
}
