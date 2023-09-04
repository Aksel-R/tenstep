  function valider(){
    $('#tableau tbody').empty();
    document.getElementById("row1").innerHTML ='<div class="col-md-4">'+
      '<select class="form-control" style="color:black; font-weight:bold;" id="objectif" onchange="filter();">'+
              '<option value="">فئة المشاريع</option>'+
      '</select>'+
    '</div>'+
    '<div class="col-md-4">'+
      '<select class="form-control" style="color:black; font-weight:bold;" id="mylist1" onchange="selectMyList1();filter();">'+
                '<option value=""> سنة البداية </option>'+
            '</select>'+
    '</div>'+
    
    '<div class="col-md-4">'+
        '<small class="smallRisks"> التكاليف الحالية حسب الولايات     </small>'+
    '</div>';
    var rad1=document.getElementById('flexRadioDefault1');
    var rad2=document.getElementById('flexRadioDefault2');
    var rad3=document.getElementById('flexRadioDefault3');
    if (rad1.checked) {
        
        document.getElementById("thName").innerHTML="التكلفة الحالية";
    }else if (rad2.checked) {
        
        document.getElementById("thName").innerHTML="التكاليف المقررة";
    }else if (rad3.checked) {
        
        document.getElementById("thName").innerHTML="الميزانية السنوية";
    }
        function reloadMap() {
                    var ARIANA = ["TUN99", ""];
                    var BEJA = ["TUN103", ""];                
                    var BENAROUS = ["TUN104", ""];
                    var BIZERTE = ["TUN105", ""];
                    var GABES = ["TUN111", ""];
                    var GAFSA = ["TUN112", ""];              
                    var JENDOUBA = ["TUN106", ""];             
                    var KAIROUAN = ["TUN118", ""];   
                    var KASSERINE = ["TUN110", ""];               
                    var KEBILI = ["TUN97", ""];              
                    var KEF = ["TUN109", ""];               
                    var MAHDIA = ["TUN116", ""];              
                    var MANNOUBA = ["TUN102", ""];              
                    var MEDENINE = ["TUN96", ""];
                    var MONASTIR = ["TUN117", ""];               
                    var NABEUL = ["TUN107", ""];             
                    var SFAX = ["TUN114", ""];              
                    var SIDIBOUZID = ["TUN113", ""];               
                    var SILIANA = ["TUN115", ""];              
                    var SOUSSE = ["TUN119", ""];
                    var TATAOUINE = ["TUN98", ""];
                    var TOZEUR = ["TUN101", ""];
                    var TUNIS = ["TUN108", ""];
                    var ZAGHOUAN = ["TUN120", ""];
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
                    
                    $.each( obj, function( key, value ) {
                        var bgCol="#a6a6a8";
                         let  valtab = value[1];
                        $("#city-" + value[0]).text(key + " " + value[1]);
                            document.getElementById(value[0]).setAttribute("style", "fill: #aee8e4");
                        
                    })
                    document.getElementById("textBgColor").style.display = "none";
                }
                reloadMap();
                LoadSelDeb();
                LoadSelCatvSel1();
    }