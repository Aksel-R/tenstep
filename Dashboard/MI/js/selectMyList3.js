function selectMyList3(){


  $('#mylist4').empty().append('<option value="" > نوع المشروع </option>');
  
	var annDebbb=document.getElementById("mylist1").value;
 var gouv=document.getElementById("mylist2").value;
  var mun=document.getElementById("mylist3").value;
  if (mun=="") {
    selectMyList2();
  }else if (mun!="") {
    var urlFilter3Sel= "";
    if (gouv!="") {
        urlFilter3Sel+="&$filter=Annee_debut_Proj%20eq%27"+annDebbb+"%27 and nom_gouvernorat_ar%20eq%27"+gouv+"%27 and nom_municipalite_ar%20eq%27"+mun+"%27";
    }else if (gouv=="") {
        urlFilter3Sel+="&$filter=Annee_debut_Proj%20eq%27"+annDebbb+"%27 and nom_municipalite_ar%20eq%27"+mun+"%27";
    }


        var responseSelCatSel3 = responseSelCatSel3 || [];
        var urlSelCatSel3 = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Pai_2022_Global')/items?$select=categorie_Proj_ar&$orderby=categorie_Proj_ar"+urlFilter3Sel;
        
        function LoadSelCatSel3() {
            $.ajax({
                url: urlSelCatSel3,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseSelCatSel3 = responseSelCatSel3.concat(data.d.results);
                    if (data.d.__next) {
                        urlSelCatSel3 = data.d.__next;
                        LoadSelCatSel3();
                    }else if (!data.d.__next) {
                        $.each(responseSelCatSel3, function (key, value) {


                            var nomCat = value.categorie_Proj_ar;
                            
                            
                            
                                $('#mylist4').append($('<option>',
                                                        {
                                                            text : nomCat,
                                                              value:nomCat
                                                        }));
                            
                                                    var opt = {};
                                                    $("#mylist4 > option").each(function () {
                                                        if (opt[$(this).text()]) {
                                                            $(this).remove();
                                                        } else {
                                                            opt[$(this).text()] = $(this).val();
                                                        }
                                                    });
                            

                        });

                    }

                }
            });
        }
        LoadSelCatSel3();
      
  }
        
         

}
