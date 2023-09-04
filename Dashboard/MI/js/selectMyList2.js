function selectMyList2(){


  $('#mylist3').empty().append('<option value="" >البلدية </option>');
  $('#mylist4').empty().append('<option value="" > نوع المشروع </option>');
 
	

     var annDebbb=document.getElementById("mylist1").value;
     var gouv=document.getElementById("mylist2").value;
     if (gouv=="") {
        selectMyList1();
     }else if (gouv!="") {
        var urlFilter2Sel= "";
            urlFilter2Sel+="&$filter=Annee_debut_Proj%20eq%27"+annDebbb+"%27 and nom_gouvernorat_ar%20eq%27"+gouv+"%27";

            
            var responseSelMunSel2 = responseSelMunSel2 || [];
            var urlSelMunSel2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Pai_2022_Global')/items?$select=nom_municipalite_ar&$orderby=nom_municipalite_ar"+urlFilter2Sel;
            
            function LoadSelMunSel2() {
                $.ajax({
                    url: urlSelMunSel2,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseSelMunSel2 = responseSelMunSel2.concat(data.d.results);
                        if (data.d.__next) {
                            urlSelMunSel2 = data.d.__next;
                            LoadSelMunSel2();
                        }else if (!data.d.__next) {
                            $.each(responseSelMunSel2, function (key, value) {


                                var nomMun = value.nom_municipalite_ar;
                                
                                
                                
                                    $('#mylist3').append($('<option>',
                                                            {
                                                                text : nomMun,
                                                                  value:nomMun
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

                    }
                });
            }
            LoadSelMunSel2();
            var responseSelCatSel2 = responseSelCatSel2 || [];
            var urlSelCatSel2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Pai_2022_Global')/items?$select=categorie_Proj_ar&$orderby=categorie_Proj_ar"+urlFilter2Sel;
            
            function LoadSelCatSel2() {
                $.ajax({
                    url: urlSelCatSel2,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseSelCatSel2 = responseSelCatSel2.concat(data.d.results);
                        if (data.d.__next) {
                            urlSelCatSel2 = data.d.__next;
                            LoadSelCatSel2();
                        }else if (!data.d.__next) {
                            $.each(responseSelCatSel2, function (key, value) {


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
            LoadSelCatSel2();
     }
       
}
