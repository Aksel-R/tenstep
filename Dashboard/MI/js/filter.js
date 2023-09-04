function filter(){
    jQuery(document).ready(function() {
        jQuery('#overlay').fadeIn();
        jQuery('#overlay').fadeOut(10000);
        //console.log('wait');
    });
    document.getElementById("typeList").innerHTML = '';
    document.getElementById("typeTable").innerHTML = '';

  
	var annDebbb=document.getElementById("mylist1").value;
 var gouv=document.getElementById("mylist2").value;
  var mun=document.getElementById("mylist3").value;
  var type=document.getElementById("mylist4").value;
  
    var urlFilterSelected= "&$filter=Annee_debut_Proj%20eq%27"+annDebbb+"%27";
    var chaineFiltre='<i class="fa fa-dashboard"></i> البداية'+' : '+annDebbb+'; ';
    if (gouv!="") {
        urlFilterSelected+=" and nom_gouvernorat_ar%20eq%27"+gouv+"%27";
        chaineFiltre+='ولاية '+' : '+gouv+'; ';
    }if (mun!="") {
        urlFilterSelected+=" and nom_municipalite_ar%20eq%27"+mun+"%27";
        chaineFiltre+=' بلدية '+' : '+mun+'; ';
    }if (type!="") {
        urlFilterSelected+=" and categorie_Proj_ar%20eq%27"+type+"%27";
        chaineFiltre+=' نوع المشروع   '+' : '+type+'; ';
    }
    document.getElementById("projTitle").innerHTML =chaineFiltre;


    var responseCout = responseCout || [];
    var urlcout = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Pai_2022_Global')/items?$select=Proj_cout_initial,Proj_cout_actualise,Budget_Aconsomm_annee_encours&$orderby=nom_gouvernorat_ar"+urlFilterSelected;
    //console.log('urlcout= '+urlcout);
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
                    var arrCoutAct=[];
                    var arrCoutInit=[];
                    var sumCoutInit=0;
                    var arrBudgAnnAct=[];
                    var sumBudgAnnAct=0;

                    $.each(responseCout, function (key, value) {
                        
                        if (value.Proj_cout_initial!=null) {
                            var chaineCoutInit=parseFloat(value.Proj_cout_initial.replace(' ','')).toFixed(0);
                           
                            var coutInit=chaineCoutInit;
                        }

                        sumCoutInit=parseFloat(parseFloat(sumCoutInit)+parseFloat(coutInit));
                        
                        
                        
                        if (value.Proj_cout_actualise!=null) {
                            var chainCoutact=parseFloat(value.Proj_cout_actualise.replace(' ','')).toFixed(0);
                            
                            var coutAct=chainCoutact;
                        }
                        sumCoutAct=parseFloat(parseFloat(sumCoutAct)+parseFloat(coutAct));


                        
                        
                        if (value.Budget_Aconsomm_annee_encours!=null) {
                            var chaineBudAnnAct=parseFloat(value.Budget_Aconsomm_annee_encours.replace(' ','')).toFixed(0);
                            var budAnnEn=chaineBudAnnAct;
                        }
                        sumBudgAnnAct=parseFloat(parseFloat(sumBudgAnnAct)+parseFloat(budAnnEn));
                        
                             
                    });
                    
                    loadCostPortfolioChart(sumCoutAct,sumCoutInit,sumBudgAnnAct); 
                    document.getElementById("planCost").innerHTML = conToMill(parseFloat(sumCoutInit).toFixed(0));
                    document.getElementById("actCost").innerHTML = conToMill(parseFloat(sumCoutAct).toFixed(0));
                    document.getElementById("annBudg").innerHTML = conToMill(parseFloat(sumBudgAnnAct).toFixed(0));
                }
                // var arrCoutAct=[];
                

            }
        });
    }
    coutChart();   
    function loadCostPortfolioChart(sumCoutAct,sumCoutInit,sumBudgAnnAct) {
        
        
        $(function () {
            var data = sumBudgAnnAct;
            var number=sumCoutInit;
            if (sumCoutInit<sumCoutAct) {
                number=sumCoutAct;
            }
            function arroundMax(number){
              var ch = parseInt(number).toString();
              var ch1="";
              var num=parseInt(ch[0])+1;
              ch1+=num;
              for (var i =  1; i <ch.length ; i++) {
                  ch1+='0';
              }

              return(parseInt(ch1));
            }
            arroundMax(number);
            $('#container').highcharts({

                chart: {
                    type: 'gauge'
                },

                pane: {
                    startAngle: -120,
                    endAngle: 120,
                    background: []
                },

                // the value axis
                yAxis: [{

                offset:30,
                    min: 0,
                    max: arroundMax(number),
                    plotBands: [{
                        from: 0,
                        to: parseInt(sumCoutInit),
                        color: '#ffc470' // orange
                    }, {
                        from: sumCoutInit,
                        to: sumCoutAct,
                        color: '#b8deff' // blue
                    }]
                }],

                series: [
                {
                    name: ' ',
                    data: [data],
                    dataLabels: {
                    format: '<span>'+ conToMill(data)+'</span><br/>' 
                },
                }]

            });
        });

    }
    var colors=['#0c5cfc','#6d9ef0','#f5d76e','#b1aa4f','#d5e7ca','#4e4c46','#b4837b','#8f12d7','#83d4a4','#c18fd3','#4b842c','#ba8ddf','#ad108b','#e9eb7c','#daaba5','#584d2f','#6f62ed','#e1b81f','#23ffd9','#17d9ea','#6c918e']
    var responseCatList = responseCatList || [];
    var urlCatList = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Pai_2022_Global')/items?$select=categorie_Proj_ar&$orderby=categorie_Proj_ar"+urlFilterSelected;
    //console.log('urlCatList= '+urlCatList);
    function catList() {
        $.ajax({
            url: urlCatList,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseCatList = responseCatList.concat(data.d.results);
                if (data.d.__next) {
                    urlCatList = data.d.__next;
                    catList();
                }else if (!data.d.__next) {
                    var arrCat=[];
                    var arrCatColors=[];
                    var countCat=0;
                    var arrTabId=[];
                    var arrSearchId=[];
                    $.each(responseCatList, function (key, value) {
                        var catProj=value.categorie_Proj_ar;
                        if (value.categorie_Proj_ar!=null) {
                            if (arrCat.indexOf(catProj)<0) {
                                arrCat.push(catProj);
                                arrCatColors.push(colors[countCat]);
                                var idTableau='table'+countCat;

                                arrTabId.push(idTableau);
                                var idSearsh='searsh'+countCat;
                                arrSearchId.push(idSearsh);

                                countCat++;
                            }
                        }
                    });
                    //console.log("arrCat= "+arrCat);
                    var chCatList="";
                    var chTab="";
                    for (var i = 0; i < arrCat.length; i++) {
                        chCatList+='<div class="col-lg-3 col-md-6">';
                            chCatList+='<div class="panel panel-default" style="box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);">';
                                chCatList+='<div class="panel-heading">';
                                    chCatList+='<div class="row">';
                                        chCatList+='<div class="col-xs-2" id="fa1">';
                                            chCatList+='<i class="fa fa-circle fa-2x" style=" color: '+arrCatColors[i]+';"></i>';
                                        chCatList+='</div>';
                                        chCatList+='<div class="col-xs-10 text-right">';
                                            chCatList+='<div id="projetsKPI" style="font-weight: 700;">'+arrCat[i]+'</div>';
                                        chCatList+='</div>';
                                    chCatList+='</div>';
                                chCatList+='</div>';
                            chCatList+='</div>';
                        chCatList+='</div>';


                        //-------------------

                        chTab+='<div class="col-lg-12" style="padding-right: 0px; padding-left: 0px;">';
                            chTab+='<div class="panel panel-default" style="box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);">';
                                chTab+='<div class="panel-body">';
                                    chTab+='<div class="table-responsive table-height">';
                                        chTab+='<table class="table table-bordered table-striped table-hover table-sticky" id="'+arrTabId[i]+'" >';

                                            chTab+='<thead class="thead" style="background-image: linear-gradient(225deg, #e9967a 20%, #ed5f49 80%);color: black;">';
                                                chTab+='<tr>'
                                                    chTab+='<th colspan="10" style="color: black; font-size: large;"><div class="col-lg-6"><i class="fa fa-circle fa-2x" style=" color: '+arrCatColors[i]+';"></i> '+arrCat[i]+'</div><div class="col-lg-6"> <div class="container alert alert-light" style="background-color: #ed5f49;width: -webkit-fill-available; float: right;"> <input id="'+arrSearchId[i]+'"  type="text" class="form-control" style="width:99%; float:right;" placeholder=" ... بحث "></div> </div></th>';
                                                chTab+='</tr>';
                                                chTab+='<tr style="width:100%">';
                                                    chTab+='<th class="text-center" style="width: 10%;"> إسم المشروع </th>';
                                                    chTab+='<th class="text-center" style="text-align:center;width: 10%;"> إسم الولاية </th>';
                                                    chTab+='<th class="text-center" style="text-align:center;width: 10%;">  إسم البلدية  </th>';
                                                    chTab+='<th class="text-center" style="text-align:center;width: 10%;">  سنة البداية  </th>';
                                                    chTab+='<th class="text-center" style="text-align:center;width: 10%;">  سنة النهاية  </th>';
                                                    chTab+='<th class="text-center" style="text-align:center;width: 10%;">  طبيعة المشروع  </th>';
                                                    chTab+='<th class="text-center" style="text-align:center;width: 10%;">  التكاليف المخطط لها  </th>';
                                                    chTab+='<th class="text-center" style="text-align:center;width: 10%;">  التكاليف الحالية   </th>';
                                                    chTab+='<th class="text-center" style="text-align:center;width: 10%;">   ميزانية الاستهلاك للسنة الحالية   </th>';
                                                    chTab+='<th class="text-center" style="text-align:center;width: 10%;">  ميزانية الاستهلاك للسنة الفارطة  </th>';
                                                chTab+='</tr>';
                                            chTab+='</thead>';
                                            chTab+='<tbody class="tbody">';
                                            chTab+='</tbody>';
                                        chTab+='</table>';
                                    chTab+='</div>';
                                    chTab+='<div class="text-right">';
                                    chTab+='</div>';
                                chTab+='</div>';
                            chTab+='</div>';
                        chTab+='</div>';

                    }
                    document.getElementById("typeList").innerHTML =chCatList;
                    document.getElementById("typeTable").innerHTML =chTab;
                    for (var i = 0; i < arrCat.length; i++) {
                        loadTable(arrCat[i],arrTabId[i],arrCatColors[i],arrSearchId[i]);
                    }
                }
                
            }
        });
    }
    catList();
    function loadTable(catN,tabIdN,catColorsN,searshId) {
        var searchchhh='#'+searshId;
        var tabidChhhh='#'+tabIdN+' tbody tr';
        $(searchchhh).on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $(tabidChhhh).filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
        var responseCatTab = responseCatTab || [];
        var urlCatTab = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Pai_2022_Global')/items?$select=Proj_cout_initial,nature_Proj_ar,Proj_cout_actualise,Budget_Aconsomm_annee_encours,Budget_consomm_annees_prec,nom_gouvernorat_ar,nom_municipalite_ar,Proj_Nom_Ar,Annee_debut_Proj,Annee_Fin_Proj&$orderby=nom_gouvernorat_ar"+urlFilterSelected+" and categorie_Proj_ar eq'"+catN+"'";
        //console.log('urlCatTab= '+urlCatTab);
        function catTab() {
            $.ajax({
                url: urlCatTab,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseCatTab = responseCatTab.concat(data.d.results);
                    if (data.d.__next) {
                        urlCatTab = data.d.__next;
                        catTab();
                    }else if (!data.d.__next) {
                        
                        
                        var tabTag='#'+tabIdN+' tbody';
                        
                        
                        $.each(responseCatTab, function (key, value) {
                            var nomProj=value.Proj_Nom_Ar;
                            var gouv=value.nom_gouvernorat_ar;
                            var mun=value.nom_municipalite_ar;
                            var annD=value.Annee_debut_Proj ;   
                            var annF=value.Annee_Fin_Proj;
                            var nature=value.nature_Proj_ar;
                            //console.log("nature= "+nature);
                            var chaineCoutInit=parseFloat(value.Proj_cout_initial.replace(' ','')).toFixed(0);
                            var coutInit=chaineCoutInit;
                            //console.log('chaineCoutInit2= '+chaineCoutInit);
                            var chainCoutact=parseFloat(value.Proj_cout_actualise.replace(' ','')).toFixed(0);
                            //console.log('chainCoutact2= '+chainCoutact);
                            var coutAct=chainCoutact;
                            var chaineBudAnnAct=parseFloat(value.Budget_Aconsomm_annee_encours.replace(' ','')).toFixed(0);
                            var budAnnEn=chaineBudAnnAct;
                            var chaineBudAnnPred=parseFloat(value.Budget_consomm_annees_prec.replace(' ','')).toFixed(0);
                            var budAnnPred=chaineBudAnnPred;
                            var trD;
                            trD= $("<tr style='width:100%;'>");
                           
                            trD.append("<td class='text-center' style='width: 10%;'> "+nomProj+" </td>");
                            trD.append("<td class='text-center' style='width: 10%;'> "+gouv+" </td>");
                            trD.append("<td class='text-center' style='width: 10%;'> "+mun+" </td>");
                            trD.append("<td class='text-center' style='width: 10%;'> "+annD+" </td>");
                            trD.append("<td class='text-center' style='width: 10%;'> "+annF+" </td>");
                            trD.append("<td class='text-center' style='width: 10%;'> "+nature+" </td>");
                            trD.append("<td class='text-center' style='width: 10%;'> "+conToMill(coutInit)+" </td>");
                            trD.append("<td class='text-center' style='width: 10%;'> "+conToMill(coutAct)+" </td>");
                            trD.append("<td class='text-center' style='width: 10%;'> "+conToMill(budAnnEn)+" </td>");
                            trD.append("<td class='text-center' style='width: 10%;'> "+conToMill(budAnnPred)+" </td>");
                            $(tabTag).append(trD);

                        });
                    }
                    

                }
            });
        }
        catTab();
    }     
         

}
