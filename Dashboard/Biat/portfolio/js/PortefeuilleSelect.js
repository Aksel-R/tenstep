    function remplirPortefeuilleSelect(){
        $('#mylist2').prop("disabled", false);
        $('#mylist2').empty();
        $('#mylist2').append('<option value="" selected>PORTEFEUILLE PROJET</option>');
        var list02 = document.getElementById("mylist0").value;
        var startOfYear1= moment(list02).format('YYYY-MM-DD');
        var endOfYear1 = moment(startOfYear1).add(1, 'years').format('YYYY-MM-DD');
        var urlDateDebut1=startOfYear1+'T00:00:00.000';
        var urlDateFin1=endOfYear1+'T00:00:00.000';
        var responseProjectTypeName = responseProjectTypeName || [];
        var urlProjectTypeName = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=EnterpriseProjectTypeName,ProjectId&$filter=ProjectStartDate ge datetime'"+urlDateDebut1+"' and ProjectStartDate lt datetime'"+urlDateFin1+"'";
        console.log("ggossssss= "+urlProjectTypeName);
        function LoadProjectTypeName() {
            $.ajax({
                url: urlProjectTypeName,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProjectTypeName = responseProjectTypeName.concat(data.d.results);
                    if (data.d.__next) {
                        urlProjectTypeName = data.d.__next;
                        LoadProjectTypeName();
                    }

                    $.each(responseProjectTypeName, function (key, value) {


                        var projectType = value.EnterpriseProjectTypeName;
                        var projetId = value.ProjectId;

                        $('#mylist2').append($('<option>',
                            {
                                text: projectType,
                                value:projectType
                            }));

                        var opt = {};
                        $("#mylist2 > option").each(function () {
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
        LoadProjectTypeName();
    }
        