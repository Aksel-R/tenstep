 function changeColor (id) {
	document.getElementById("newscale1").innerHTML = '0 - 20%';
    document.getElementById("newscale2").innerHTML = '20 - 40%';
    document.getElementById("newscale3").innerHTML = '40 - 60%';
    document.getElementById("newscale4").innerHTML = '60 - 80%';
    document.getElementById("newscale5").innerHTML = '80 - 100%';
	document.getElementById("textBgColor").style.display = "";


    }


 function changeColor2 (id) {
	document.getElementById("newscale1").innerHTML = '0 - 0,20%';
    document.getElementById("newscale2").innerHTML = '0,20 - 0,40%';
    document.getElementById("newscale3").innerHTML = '0,40 - 0,60%';
    document.getElementById("newscale4").innerHTML = '0,60 - 0,80%';
    document.getElementById("newscale5").innerHTML = '0,80 - 1%';
	document.getElementById("textBgColor").style.display = "";


     
    }



 function changeColor3 (id) {
	document.getElementById("newscale1").innerHTML = '99 - 99,20%';
    document.getElementById("newscale2").innerHTML = '99,20 - 99,40%';
    document.getElementById("newscale3").innerHTML = '99,40 - 99,60%';
    document.getElementById("newscale4").innerHTML = '99,60 - 99,80%';
    document.getElementById("newscale5").innerHTML = '99,80 - 100%';
   document.getElementById("textBgColor").style.display = "";

    }
	

 function changeColor15 (id) {
	document.getElementById("newscale1").innerHTML = '0 ';
    document.getElementById("newscale2").innerHTML = ' ';
    document.getElementById("newscale3").innerHTML = '5 ';
    document.getElementById("newscale4").innerHTML = ' ';
    document.getElementById("newscale5").innerHTML = '15';
  document.getElementById("textBgColor").style.display = "";

    }
	
	
function changenumber1() {

    document.getElementById("newscale1").innerHTML = '0-20%';
    document.getElementById("newscale2").innerHTML = '20-40%';
    document.getElementById("newscale3").innerHTML = '40-60%';
    document.getElementById("newscale4").innerHTML = '60-80%';
    document.getElementById("newscale5").innerHTML = '80-100%';
document.getElementById("textBgColor").style.display = "";

}
$( document ).ready(function() {
        $("#objectif").change(function( index, element ) {
            name = $(this).val();
            text = $("#objectif option:selected").text();
            $.ajax({
                url: "https://isetrades1.sharepoint.com/sites/TSPWA/_api/web/lists/getbytitle('MAPtunisie')/items",
                type:"GET",
                contentType: "application/json",
                dataType: 'json',
                success: function(result){
                    var Régions = result.value[name].Barack;
                    var ARIANA = ["TUN99", result.value[name].Ariana];
                    var BEJA = ["TUN103", result.value[name].Beja];                
                    var BENAROUS = ["TUN104", result.value[name].cb9q];
                    var BIZERTE = ["TUN105", result.value[name].bmnl];
                    var GABES = ["TUN111", result.value[name].OData__x006f_836];
                    var GAFSA = ["TUN112", result.value[name].l5c6];				
                    var JENDOUBA = ["TUN106", result.value[name].hijz];				
                    var KAIROUAN = ["TUN118", result.value[name].tnkg];	
                    var KASSERINE = ["TUN110", result.value[name].OData__x0077_cq0];				
                    var KEBILI = ["TUN97", result.value[name].OData__x006d_es1];				
                    var KEF = ["TUN109", result.value[name].OData__x0069_446];				
                    var MAHDIA = ["TUN116", result.value[name].cudc];				
                    var MANNOUBA = ["TUN102", result.value[name].swif];				
                    var MEDENINE = ["TUN96", result.value[name].l93m];
                    var MONASTIR = ["TUN117", result.value[name].bf0l];				
                    var NABEUL = ["TUN107", result.value[name].OData__x0067_ll9];				
                    var SFAX = ["TUN114", result.value[name].bbdl];				
                    var SIDIBOUZID = ["TUN113", result.value[name].d6xj];				
                    var SILIANA = ["TUN115", result.value[name].kcnx];				
                    var SOUSSE = ["TUN119", result.value[name].y37j];
                    var TATAOUINE = ["TUN98", result.value[name].fpuq];
                    var TOZEUR = ["TUN101", result.value[name].e8cq];
                    var TUNIS = ["TUN108", result.value[name].OData__x006c_vz2];
                    var ZAGHOUAN = ["TUN120", result.value[name].yerd];
                    var National = result.value[name].OData__x006f_gs1;
                    var obj = {
                        "ARIANA": ARIANA,
                        "BEJA": BEJA,
                        "BENAROUS": BENAROUS,
                        "BIZERTE": BIZERTE,
                        "GABES": GABES,
                        "GAFSA": GAFSA,
                        "JENDOUBA": JENDOUBA,
                        "KAIROUAN": KAIROUAN,
                        "KASSERINE": KASSERINE,
                        "KEBILI": KEBILI,
                        "KEF": KEF,
                        "MAHDIA": MAHDIA,
                        "MANNOUBA": MANNOUBA,
                        "MEDENINE": MEDENINE,
                        "MONASTIR": MONASTIR,
                        "NABEUL": NABEUL,
                        "SFAX": SFAX,
                        "SIDIBOUZID": SIDIBOUZID,
                        "SILIANA": SILIANA,
                        "SOUSSE": SOUSSE,
                        "TATAOUINE": TATAOUINE,
                        "TOZEUR": TOZEUR,
                        "TUNIS": TUNIS,
                        "ZAGHOUAN": ZAGHOUAN
                    }
                    
                    $.each( obj, function( key, value ) {
                        let  valtab = value[1].replace("%","");
                        $("#city-" + value[0]).text(key + " " + value[1]);
                        if ($("#newscale1").text() == "0 - 20%") {
                            if ((valtab <= 20)) {
                            document.getElementById(value[0]).setAttribute("style", "fill: #a6a6a8");
                            }
                            if (valtab > 20 && valtab <= 40) {
                                document.getElementById(value[0]).setAttribute("style", "fill: #f4b084");
                            }
                            if (valtab > 40 && valtab <= 60) {
                                document.getElementById(value[0]).setAttribute("style", "fill: #f5da66");
                            }
                            if (valtab > 60 && valtab <= 80) {
                                document.getElementById(value[0]).setAttribute("style", "fill: #94c94e");
                            }
                            if (valtab > 80 && valtab <= 100) {
                                document.getElementById(value[0]).setAttribute("style", "fill: #178c43");
                            }
                        }else if ($("#newscale1").text() == '0 ') {
                            if (valtab >= '15'){
                                document.getElementById(value[0]).setAttribute("style", "fill: #f5da66");
                            }
                            if (valtab >= '10' && valtab < '15') {
                                document.getElementById(value[0]).setAttribute("style", "fill: #94c94e");
                            }
                            if (valtab >= '5' && valtab < '10') {
                                document.getElementById(value[0]).setAttribute("style", "fill: #f4b084");
                            }
                            if (valtab >= '0' && valtab < '5') {
                                document.getElementById(value[0]).setAttribute("style", "fill: #178c43");
                            }
                        } else if ($("#newscale1").text() == '99 - 99,20%') {
                            if (valtab >= '99.80%'){
                                document.getElementById(value[0]).setAttribute("style", "fill: #178c43");
                            }
                            if (valtab >= '99.60%' && valtab < '99.80%') {
                                document.getElementById(value[0]).setAttribute("style", "fill: #94c94e");
                            }
                            if (valtab >= '99.40%' && valtab < '99.60%') {
                                document.getElementById(value[0]).setAttribute("style", "fill: #f5da66");
                            }
                            if (valtab >= '99.20%' && valtab < '99.40%') {
                                document.getElementById(value[0]).setAttribute("style", "fill: #f4b084");
                            }
                            if (valtab >= '99%' && valtab < '99.20%') {
                                document.getElementById(value[0]).setAttribute("style", "fill: #a6a6a8");
                            }
                        } else if ($("#newscale1").text() == '0 - 0,20%') {
                            if (valtab >= '0.80%'){
                                document.getElementById(value[0]).setAttribute("style", "fill: #178c43");
                            }
                            if (valtab >= '0.60%' && valtab < '0.80%') {
                                document.getElementById(value[0]).setAttribute("style", "fill: #94c94e");
                            }
                            if (valtab >= '0.40%' && valtab < '0.60%') {
                                document.getElementById(value[0]).setAttribute("style", "fill: #f5da66");
                            }
                            if (valtab >= '0.20%' && valtab < '0.40%') {
                                document.getElementById(value[0]).setAttribute("style", "fill: #f4b084");
                            }
                            if (valtab >= '0%' && valtab < '0.20%') {
                                document.getElementById(value[0]).setAttribute("style", "fill: #a6a6a8");
                            }
                        }
                    
                        
                    })
                }
            })
        });
    });