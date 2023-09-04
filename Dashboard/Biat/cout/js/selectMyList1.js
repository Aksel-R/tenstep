function selectMyList1(){

	$('#mylist2').empty().append('<option value="">Département</option>');
  $('#mylist3').empty().append('<option value="">Projet</option>');
	

 var devisionSel=document.getElementById("mylist1").value;
 var urlFilter1Sel= "";
  if (devisionSel=="") {
          LoadDept();
          LoadProjectGovernant();
      }else{
        urlFilter1Sel+="&$filter=Division%20eq%27"+devisionSel+"%27";

        //Fonction qui permet d'afficher les list des Departement
        var responseDept0 = responseDept0 || [];
        var urlDept0 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Service,ProjectId"+urlFilter1Sel;
        function LoadDept0() {
            $.ajax({
                url: urlDept0,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseDept0 = responseDept0.concat(data.d.results);
                    if (data.d.__next) {
                        urlDept0 = data.d.__next;
                        LoadDept0();
                    }

                    $.each(responseDept0, function (key, value) {


                        var projectService = value.Service;
                        var projetId = value.ProjectId;

                        $('#mylist2').append($('<option>',
                            {
                                text : projectService,
                                  value:projectService
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
        LoadDept0();

             //Fonction qui permet d'afficher liste de Projet 
        var responsePhase0 = responsePhase0 || [];
        var urlPhase0 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId"+urlFilter1Sel;
        function LoadProjectGovernant0() {
            $.ajax({
                url: urlPhase0,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responsePhase0 = responsePhase0.concat(data.d.results);
                    if (data.d.__next) {
                        urlPhase0 = data.d.__next;
                        LoadProjectGovernant0();
                    }

                    $.each(responsePhase0, function (key, value) {
                        var nomprojet = value.ProjectName;
                        var projetId = value.ProjectId;
                        if (nomprojet != "") {
                            var prName = nomprojet;


                            $('#mylist3').append($('<option>',
                                {
                                    text : prName,
                                    value:projetId
                                }));
                        }
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
        LoadProjectGovernant0();

      }
        
      
	   





        

        

}
