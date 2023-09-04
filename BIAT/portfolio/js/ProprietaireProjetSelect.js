function loadSelectProprietaireProjet(){

var SousProtSelctedName=document.getElementById("mylist2").value;
var ProjetPropSelctedName1=document.getElementById("mylist1").value;
var ProjetPropSelctedName=ProjetPropSelctedName1.replace("'", "''");
if (ProjetPropSelctedName != "") {

$('#mylist3').prop("disabled", false);
$('#mylist3').empty();
$('#mylist3').append('<option value="" selected>PROPRIÉTAIRE DE PROJET</option>');
var responseOwnerFiltre2 = responseOwnerFiltre2 || [];
        var urlOwnerFiltre2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectOwnerName,ProjectId&$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27%20and%20Programme%20eq%27"+ProjetPropSelctedName+"%27";
        function LoadProjectOwnerFiltre2() {
            $.ajax({
                url: urlOwnerFiltre2,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseOwnerFiltre2 = responseOwnerFiltre2.concat(data.d.results);
                    if (data.d.__next) {
                        urlOwnerFiltre2 = data.d.__next;
                        LoadProjectOwnerFiltre2();
                    }

                    $.each(responseOwnerFiltre2, function (key, value) {
                        var projetId = value.ProjectId;
                        var nomprojet = value.ProjectOwnerName;


                        $('#mylist3').append($('<option>',
                            {
                                text: nomprojet,
                                value: nomprojet 

                            }));

                        var opt = {};
                        $("#mylist3 > option").each(function () {
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
        LoadProjectOwnerFiltre2();

}

}