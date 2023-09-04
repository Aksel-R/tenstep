function selectMyList1(){

  
  $('#objectif').empty().append('<option value="" >فئة المشاريع</option>');
  $('#mylist4').empty().append('<option value="" >طبيعة المشروع</option>');
  $('#mylist3').empty().append('<option value="" >وضع المشروع</option>');
  
	

     var annDebbb=document.getElementById("mylist1").value;
     if (annDebbb=="") {
        location.reload();
     }else if (annDebbb!="") {
        var urlFilter1Sel= "";

            urlFilter1Sel+="&$filter=Annee_debut_Proj%20eq%27"+annDebbb+"%27";

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
                                
                                
                                
                                    $('#objectif').append($('<option>',
                                                            {
                                                                text : nomCat,
                                                                  value:nomCat
                                                            }));
                                
                                                        var opt = {};
                                                        $("#objectif > option").each(function () {
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
            var responseSelNatvSel1Filter = responseSelNatvSel1Filter || [];
            var urlSelNatvSel1Filter = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Pai_2022_Global')/items?$select=nature_Proj_ar&$orderby=nature_Proj_ar"+urlFilter1Sel;
            
            function LoadSelNatvSel1Filter() {
                $.ajax({
                    url: urlSelNatvSel1Filter,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseSelNatvSel1Filter = responseSelNatvSel1Filter.concat(data.d.results);
                        if (data.d.__next) {
                            urlSelNatvSel1Filter = data.d.__next;
                            LoadSelNatvSel1Filter();
                        }else if (!data.d.__next) {
                            $.each(responseSelNatvSel1Filter, function (key, value) {


                                var nomGouv = value.nature_Proj_ar;
                                
                                
                                
                                    $('#mylist4').append($('<option>',
                                                            {
                                                                text : nomGouv,
                                                                  value:nomGouv
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
            LoadSelNatvSel1Filter();
            var responseSelStatvSel1Filter = responseSelStatvSel1Filter || [];
            var urlSelStatvSel1Filter = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Pai_2022_Global')/items?$select=status_Exec_ar&$orderby=status_Exec_ar"+urlFilter1Sel;
            
            function LoadSelStatvSel1Filter() {
                $.ajax({
                    url: urlSelStatvSel1Filter,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseSelStatvSel1Filter = responseSelStatvSel1Filter.concat(data.d.results);
                        if (data.d.__next) {
                            urlSelStatvSel1Filter = data.d.__next;
                            LoadSelStatvSel1Filter();
                        }else if (!data.d.__next) {
                            $.each(responseSelStatvSel1Filter, function (key, value) {


                                var nomGouv = value.status_Exec_ar;
                                
                                
                                
                                    $('#mylist3').append($('<option>',
                                                            {
                                                                text : nomGouv,
                                                                  value:nomGouv
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
            LoadSelStatvSel1Filter();
          
     }
    
}
