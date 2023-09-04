function loadSelectStuct(){

var SousProtSelctedName=document.getElementById("mylist2").value;


if (SousProtSelctedName != "") {

$('#mylist1').prop("disabled", false);
$('#mylist1').empty();
$('#mylist1').append('<option value="" selected>STRUCTURE ORGANISATIONNELLE</option>');
var responseProgrammeFiltre1 = responseProgrammeFiltre1 || [];
        var urlProgrammeFiltre1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structureorganisationnelle,ProjectId&$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27";
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
                        var nomprojet = value.Structureorganisationnelle;


                        $('#mylist1').append($('<option>',
                            {
                                text: nomprojet,
                                value: nomprojet
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