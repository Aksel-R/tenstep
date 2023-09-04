function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function selectMyList1(){
  console.log("Bonjour!!");
  $("#myList2").prop("disabled", false);
  $('#myList2').empty();
  $('#myList2').append('<option value="" selected disabled>Programme</option>');
  document.getElementById("pourcentageAchProg").innerHTML ="";
  document.getElementById("nbProj").innerHTML ="";
  document.getElementById("chargeplanifprog").innerHTML ="";
  document.getElementById("chargereelprog").innerHTML ="";
  document.getElementById("chargeglissprog").innerHTML ="";
  document.getElementById("coutplanifprog").innerHTML ="";
  document.getElementById("coutreelprog").innerHTML ="";
  document.getElementById("coutglissprog").innerHTML ="";
  document.getElementById("dureeplanifprog").innerHTML ="";
  document.getElementById("dureereelprog").innerHTML ="";
  document.getElementById("dureeglissprog").innerHTML ="";
$('#tableProjet').empty();
document.getElementById("morris-area-chart-prog").innerHTML="";
  var nomPortefeuille =  getSelectedText("myList1");
  var urlFilterPortefeuille="&$filter=EnterpriseProjectTypeName%20eq%27"+nomPortefeuille+"%27"

document.getElementById("progTitle").innerHTML = '<i class="fa fa-dashboard"></i> ' + nomPortefeuille +'; ';
  var responseSelectProg=responseSelectProg || [];
var urlSelectProg= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme,EnterpriseProjectTypeName"+urlFilterPortefeuille;

  function loadSelectProg(){
    console.log("urlSelectProg= "+urlSelectProg);
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
                            console.log("prog= "+prog);
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
