function selectMyList1(){

  $('#mylist2').empty().append('<option value="" >الولاية </option>');
  $('#mylist3').empty().append('<option value="" >البلدية </option>');
  $('#mylist4').empty().append('<option value="" > نوع المشروع </option>');
  $('#mylist2').prop( "disabled", false );
  $('#mylist3').prop( "disabled", false );
  $('#mylist4').prop( "disabled", false );
	

     var annDebbb=document.getElementById("mylist1").value;
     if (annDebbb=="") {
        location.reload();
     }else if (annDebbb!="") {
        var urlFilter1Sel= "";

            urlFilter1Sel+="&$filter=Annee_debut_Proj%20eq%27"+annDebbb+"%27";

            var responseSelGouvSel1 = responseSelGouvSel1 || [];
            var urlSelGouvSel1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Pai_2022_Global')/items?$select=nom_gouvernorat_ar&$orderby=nom_gouvernorat_ar"+urlFilter1Sel;
            
            function LoadSelGouvSel1() {
                $.ajax({
                    url: urlSelGouvSel1,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseSelGouvSel1 = responseSelGouvSel1.concat(data.d.results);
                        if (data.d.__next) {
                            urlSelGouvSel1 = data.d.__next;
                            LoadSelGouvSel1();
                        }else if (!data.d.__next) {
                            $.each(responseSelGouvSel1, function (key, value) {


                                var nomGouv = value.nom_gouvernorat_ar;
                                
                                
                                
                                    $('#mylist2').append($('<option>',
                                                            {
                                                                text : nomGouv,
                                                                  value:nomGouv
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

                    }
                });
            }
            LoadSelGouvSel1();
            var responseSelMunSel1 = responseSelMunSel1 || [];
            var urlSelMunSel1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Pai_2022_Global')/items?$select=nom_municipalite_ar&$orderby=nom_municipalite_ar"+urlFilter1Sel;
            
            function LoadSelMunSel1() {
                $.ajax({
                    url: urlSelMunSel1,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseSelMunSel1 = responseSelMunSel1.concat(data.d.results);
                        if (data.d.__next) {
                            urlSelMunSel1 = data.d.__next;
                            LoadSelMunSel1();
                        }else if (!data.d.__next) {
                            $.each(responseSelMunSel1, function (key, value) {


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
            LoadSelMunSel1();
            var responseSelCatSel1 = responseSelCatSel1 || [];
            var urlSelCatSel1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Pai_2022_Global')/items?$select=categorie_Proj_ar&$orderby=categorie_Proj_ar"+urlFilter1Sel;
            
            function LoadSelCatSel1() {
                $.ajax({
                    url: urlSelCatSel1,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseSelCatSel1 = responseSelCatSel1.concat(data.d.results);
                        if (data.d.__next) {
                            urlSelCatSel1 = data.d.__next;
                            LoadSelCatSel1();
                        }else if (!data.d.__next) {
                            $.each(responseSelCatSel1, function (key, value) {


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
            LoadSelCatSel1();
          
     }
    
}
