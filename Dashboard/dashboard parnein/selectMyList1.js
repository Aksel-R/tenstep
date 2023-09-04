function selectMyList1(){


	

 var devisionSel=document.getElementById("mylist1").value;
 var urlFilter1Sel= "";
  if (devisionSel=="") {
    //projTitle
    document.getElementById("projTitle").innerHTML = '<i class="fa fa-dashboard"></i>' + ' Affichage Général';
        $('#mylist2').empty();
        $('#mylist2').append('<option value="" selected>Département</option>');
        $('#mylist3').empty();
        $('#mylist3').append('<option value="" selected>Projet</option>');
        console.log("nnnnnnnnn");
          LoadDept();
          LoadProjectGovernant();
      }else{
        document.getElementById("projTitle").innerHTML = '<i class="fa fa-dashboard"></i>' + ' '+devisionSel+';';
        $('#mylist2').empty();
        $('#mylist2').append('<option value="" selected>Département</option>');
        $('#mylist3').empty();
        $('#mylist3').append('<option value="" selected>Projet</option>');
        console.log("oooooooooo");
        urlFilter1Sel+=" and Division%20eq%27"+devisionSel+"%27";

        //Fonction qui permet d'afficher les list des Departement
        var responseDept0 = responseDept0 || [];
        var urlDept0 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Service,ProjectId&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27 and ProjectId%20ne%20guid%27432c1159-9039-ed11-9f81-00155d00ae1f%27"+urlFilter1Sel;
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


                        if (value.Service!=null) {
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
                    }
                    });

                }
            });
        }
        LoadDept0();

             //Fonction qui permet d'afficher liste de Projet 
        var responsePhase0 = responsePhase0 || [];
        var urlPhase0 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27 and ProjectId%20ne%20guid%27432c1159-9039-ed11-9f81-00155d00ae1f%27"+urlFilter1Sel;
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
