function loadSelectProj(){
  var chaineFilter="";
  var rad1 = document.getElementById('flexRadioDefault1');
  var rad2 = document.getElementById('flexRadioDefault2');
  var voletSel=document.getElementById("mylist2").value;
  var progSel=document.getElementById("mylist3").value;
  //console.log("test= "+rad1.checked)
  if (rad1.checked) {
    chaineFilter="ProgrammeParent eq'"+progSel+"'";
  }else if (rad2.checked) {
    chaineFilter="Volet eq'"+voletSel+"'";
  }


if ((progSel != "")||(voletSel != "")) {
    document.getElementById('selPrj').innerHTML='<select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist1" onchange="filter();" >'+
                '<option value="">Projet</option>'+
            '</select>' ;
// $('#mylist1').prop("disabled", false);
// $('#mylist1').empty();
// $('#mylist1').append('<option value="" selected>Projet</option>');
var responseProgrammeFiltre1 = responseProgrammeFiltre1 || [];
        var urlProgrammeFiltre1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName&$filter="+chaineFilter+"%20and%20ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27";

        console.log("urlProgrammeFiltre1= "+urlProgrammeFiltre1);

        function LoadProgrammeFiltre1() {
            $.ajax({
                url: urlProgrammeFiltre1,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProgrammeFiltre1 = responseProgrammeFiltre1.concat(data.d.results);
                    if (data.d.__next) {
                        urlProgrammeFiltre1 = data.d.__next;
                        LoadProgrammeFiltre1();
                    }

                    $.each(responseProgrammeFiltre1, function (key, value) {
                        var projetId = value.ProjectId;
                        var nomprojet = value.ProjectName;


                        $('#mylist1').append($('<option>',
                            {
                                text: nomprojet,
                                value: projetId
                            }));

                        var opt = {};
                        $("#mylist1 > option").each(function () {
                            if (opt[$(this).text()]) {
                                $(this).remove();
                            } else {
                                opt[$(this).text()] = $(this).val();
                            }
                        });
                    });
                }
            });
        }
        LoadProgrammeFiltre1();

}

}