function selectMyList2(){

	$('#mylist3').empty().append('<option value="">Projet</option>');
  	var deptSel=document.getElementById("mylist2").value;
    var urlFilter2Sel= "";
  if (deptSel=="") {
          selectMyList1();
      }else{
        urlFilter2Sel+="&$filter=Service%20eq%27"+deptSel+"%27";
        
             //Fonction qui permet d'afficher liste de Projet 
        var responsePhase1 = responsePhase1 || [];
        var urlPhase1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId"+urlFilter2Sel;
        console.log("urlPhase1= "+urlPhase1);
        function LoadProjectGovernant1() {
            $.ajax({
                url: urlPhase1,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responsePhase1 = responsePhase1.concat(data.d.results);
                    if (data.d.__next) {
                        urlPhase1 = data.d.__next;
                        LoadProjectGovernant1();
                    }

                    $.each(responsePhase1, function (key, value) {
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
        LoadProjectGovernant1();

      }
        
        
      
	   

        

}
