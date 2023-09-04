function filter(){
    document.getElementById("overlay").style.display = "block";
  jQuery(document).ready(function() {
    jQuery('#overlay').fadeOut(3000);
    //jQuery('#wrapper').fadeIn(3000);
     
});
    $('#tableau tbody').empty();
    var urlFilterSelected="";
    var annDebbb=document.getElementById("mylist1").value;
    var catProj=document.getElementById("objectif").value;
    var statProj=document.getElementById("mylist3").value;
    var natProj=document.getElementById("mylist4").value;
    if ((annDebbb!="")&&(catProj=="")&&(statProj=="")&&(natProj=="")) {
        urlFilterSelected= "&$filter=Annee_debut_Proj%20eq%27"+annDebbb+"%27";
    }
    else if ((annDebbb=="")&&(catProj!="")&&(statProj=="")&&(natProj=="")) {
        urlFilterSelected= "&$filter=categorie_Proj_ar%20eq%27"+catProj+"%27";
    }else if ((annDebbb!="")&&(catProj!="")&&(statProj=="")&&(natProj=="")) {
        urlFilterSelected= "&$filter=Annee_debut_Proj%20eq%27"+annDebbb+"%27%20and%20categorie_Proj_ar%20eq%27"+catProj+"%27";
    }else if ((annDebbb=="")&&(catProj=="")&&(statProj=="")&&(natProj=="")) {
        location.reload();
    }else if ((annDebbb!="")&&(catProj=="")&&(statProj!="")&&(natProj=="")) {
        urlFilterSelected= "&$filter=Annee_debut_Proj%20eq%27"+annDebbb+"%27%20and%20status_Exec_ar%20eq%27"+statProj+"%27";
    }else if ((annDebbb!="")&&(catProj=="")&&(statProj!="")&&(natProj=="")) {
        urlFilterSelected= "&$filter=Annee_debut_Proj%20eq%27"+annDebbb+"%27%20and%20nature_Proj_ar%20eq%27"+natProj+"%27";
    }else if ((annDebbb=="")&&(catProj=="")&&(statProj!="")&&(natProj=="")) {
        urlFilterSelected= "&$filter=status_Exec_ar%20eq%27"+statProj+"%27";
    }else if ((annDebbb=="")&&(catProj=="")&&(statProj=="")&&(natProj!="")) {
        urlFilterSelected= "&$filter=nature_Proj_ar%20eq%27"+natProj+"%27";
    }
    
    var chaineFilterOpt="";
    var rad1=document.getElementById('flexRadioDefault1');
    var rad2=document.getElementById('flexRadioDefault2');
    var rad3=document.getElementById('flexRadioDefault3');
    if (rad1.checked) {
        chaineFilterOpt="Proj_cout_actualise";
        
    }else if (rad2.checked) {
        chaineFilterOpt="Proj_cout_initial";
        
    }else if (rad3.checked) {
        chaineFilterOpt="Budget_Aconsomm_annee_encours";
        
    }

    var responseCout = responseCout || [];
    var urlcout = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Pai_2022_Global')/items?$select=nom_gouvernorat_ar,"+chaineFilterOpt+"&$orderby=nom_gouvernorat_ar"+urlFilterSelected;
    console.log('urlcout= '+urlcout);

    
    function coutChart() {
        $.ajax({
            url: urlcout,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseCout = responseCout.concat(data.d.results);
                if (data.d.__next) {
                    urlcout = data.d.__next;
                    coutChart();
                    
                }
                else if (!data.d.__next) {
                    var sumCoutAct=0;
                    var arrCoutAct=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    var arrRegion=["أريانة","توزر","منوبة","باجة","بن عروس","بنزرت", "جندوبة" , "نابل", "تونس" , "الكاف" , "القصرين" , "قابس" , "قفصة" , "سيدي بوزيد" , "صفاقس" , "سليانة" , "سوسة" , "المنستير" , "القيروان" , "المهدية" , "زغوان" , "مدنين" , "قبلي" , "تطاوين" ];
                    
                    $.each(responseCout, function (key, value) {
                        
                        
                        
                        
                        if (value.nom_gouvernorat_ar!=null) {
                            var gouv=value.nom_gouvernorat_ar;
                            var chainCoutact;
                            if (rad1.checked) {
                                chainCoutact=parseFloat(value.Proj_cout_actualise.replace(' ','')).toFixed(0);
                            }else if (rad2.checked) {
                                chainCoutact=parseFloat(value.Proj_cout_initial.replace(' ','')).toFixed(0);
                            }else if (rad3.checked) {
                                chainCoutact=parseFloat(value.Budget_Aconsomm_annee_encours.replace(' ','')).toFixed(0);
                            }
                            
                            
                            var coutAct=chainCoutact;
                            
                            arrCoutAct[arrRegion.indexOf(gouv)]=parseFloat(parseFloat(arrCoutAct[arrRegion.indexOf(gouv)])+parseFloat(coutAct)).toFixed(0);
                            
                        }
                        sumCoutAct=parseFloat(parseFloat(sumCoutAct)+parseFloat(coutAct));

                    });
                        
                        
                    var ARIANA = ["TUN99", arrCoutAct[arrRegion.indexOf("أريانة")]];
                    var BEJA = ["TUN103", arrCoutAct[arrRegion.indexOf("باجة")]];                
                    var BENAROUS = ["TUN104", arrCoutAct[arrRegion.indexOf("بن عروس")]];
                    var BIZERTE = ["TUN105", arrCoutAct[arrRegion.indexOf("بنزرت")]];
                    var GABES = ["TUN111", arrCoutAct[arrRegion.indexOf("قابس")]];
                    var GAFSA = ["TUN112", arrCoutAct[arrRegion.indexOf("قفصة")]];              
                    var JENDOUBA = ["TUN106", arrCoutAct[arrRegion.indexOf("جندوبة")]];             
                    var KAIROUAN = ["TUN118", arrCoutAct[arrRegion.indexOf("القيروان")]];   
                    var KASSERINE = ["TUN110", arrCoutAct[arrRegion.indexOf("القصرين")]];               
                    var KEBILI = ["TUN97", arrCoutAct[arrRegion.indexOf("قبلي")]];              
                    var KEF = ["TUN109", arrCoutAct[arrRegion.indexOf("الكاف")]];               
                    var MAHDIA = ["TUN116", arrCoutAct[arrRegion.indexOf("المهدية")]];              
                    var MANNOUBA = ["TUN102", arrCoutAct[arrRegion.indexOf("منوبة")]];              
                    var MEDENINE = ["TUN96", arrCoutAct[arrRegion.indexOf("مدنين")]];
                    var MONASTIR = ["TUN117", arrCoutAct[arrRegion.indexOf("المنستير")]];               
                    var NABEUL = ["TUN107", arrCoutAct[arrRegion.indexOf("نابل")]];             
                    var SFAX = ["TUN114", arrCoutAct[arrRegion.indexOf("صفاقس")]];              
                    var SIDIBOUZID = ["TUN113", arrCoutAct[arrRegion.indexOf("سيدي بوزيد")]];               
                    var SILIANA = ["TUN115", arrCoutAct[arrRegion.indexOf("سليانة")]];              
                    var SOUSSE = ["TUN119", arrCoutAct[arrRegion.indexOf("سوسة")]];
                    var TATAOUINE = ["TUN98", arrCoutAct[arrRegion.indexOf("تطاوين")]];
                    var TOZEUR = ["TUN101", arrCoutAct[arrRegion.indexOf("توزر")]];
                    var TUNIS = ["TUN108", arrCoutAct[arrRegion.indexOf("تونس")]];
                    var ZAGHOUAN = ["TUN120", arrCoutAct[arrRegion.indexOf("زغوان")]];
                    // var National = result.value[name].OData__x006f_gs1;
                    var obj = {
                        "أريانة": ARIANA,
                        "باجة": BEJA,
                        "بن عروس": BENAROUS,
                        "بنزرت": BIZERTE,
                        "قابس": GABES,
                        "قفصة": GAFSA,
                        "جندوبة": JENDOUBA,
                        "القيروان": KAIROUAN,
                        "القصرين": KASSERINE,
                        "قبلي": KEBILI,
                        "الكاف": KEF,
                        "المهدية": MAHDIA,
                        "منوبة": MANNOUBA,
                        "مدنين": MEDENINE,
                        "المنستير": MONASTIR,
                        "نابل": NABEUL,
                        "صفاقس": SFAX,
                        "سيدي بوزيد": SIDIBOUZID,
                        "سليانة": SILIANA,
                        "سوسة": SOUSSE,
                        "تطاوين": TATAOUINE,
                        "توزر": TOZEUR,
                        "تونس": TUNIS,
                        "زغوان": ZAGHOUAN
                    }
                    
                    // $("#tableau tbody").empty();
                    var i=0;
                    $.each( obj, function( key, value ) {
                        var bgCol="#a6a6a8";
                         let  valtab = value[1];
                        $("#city-" + value[0]).text(key + " " + value[1]);
                        if ((valtab <= 20000)) {
                            document.getElementById(value[0]).setAttribute("style", "fill: #a6a6a8");
                            bgCol="#a6a6a8";
                            }
                            if (valtab > 20000 && valtab <= 150000) {
                                document.getElementById(value[0]).setAttribute("style", "fill: #f4b084");
                                bgCol="#f4b084";
                            }
                            if (valtab > 150000 && valtab <= 500000) {
                                document.getElementById(value[0]).setAttribute("style", "fill: #f5da66");
                                bgCol="#f5da66";
                            }
                            if (valtab > 500000 && valtab <= 1000000) {
                                document.getElementById(value[0]).setAttribute("style", "fill: #94c94e");
                                bgCol="#94c94e";
                            }
                            if (valtab > 1000000 ) {
                                document.getElementById(value[0]).setAttribute("style", "fill: #178c43");
                                bgCol="#178c43";
                            }
                            
                            i++;
                    })
                    // var tableaux = document.querySelector('#tableau tbody');
                    // tr1 = tableaux.getElementsByTagName("tr");
                    // if(tr1.length>0){
                    // console.log('ok!! '+tr1.length)
                    // $('#tableau tbody').empty();
                    // }
                    for (var i = 0; i < arrCoutAct.length; i++) {
                        var tr;
                            var tbodyRef = document.querySelector('#tableau tbody');
                            tr = $("<tr class='even pointer'>");
                            tr.append("<td style='text-align:center;'>"+conToMill(arrCoutAct[i]) +"</td>");
                            tr.append("<td style='text-align:center;'>" + arrRegion[i] + "</td>");//0
                            $('#tableau tbody').append(tr);
                    }
                    // $('tableau').find('tr').each(function(){
                    //   const $row = $(this);
                    //   $row.nextAll('tr').each(function(){
                    //     const $next = $(this);
                    //     if($row.find('td:first').text() == $next.find('td:first').text()) {
                    //       $next.remove();
                    //     }
                    //   })
                    // });
                }
                // var arrCoutAct=[];
                //removeDuplicates();
                removeDuplicateRows();
            }
        });
    }
    coutChart();
function removeDuplicateRows() {
  var seenRows = {};

  $('table tr').each(function() {
    var rowText = $(this).text();

    if (seenRows[rowText]) {
      $(this).remove(); // Remove the duplicate row
    } else {
      seenRows[rowText] = true;
    }
  });
}



    function changeColor () {
        document.getElementById("newscale1").innerHTML = '0 - 20K';
        document.getElementById("newscale2").innerHTML = '20K - 150K';
        document.getElementById("newscale3").innerHTML = '150K - 500K';
        document.getElementById("newscale4").innerHTML = '500K - 1M';
        document.getElementById("newscale5").innerHTML = '1M >';
        document.getElementById("textBgColor").style.display = "";
    }
    changeColor ();
}
