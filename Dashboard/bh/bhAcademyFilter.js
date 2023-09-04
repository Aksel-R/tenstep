function mainFilter() {
	document.getElementById("myDiv").innerHTML="";
	var periode=document.getElementById("myList1").value;
	var themeSelected=document.getElementById("myList2").value;
	// ex=moment(periode).format('YYYY-MM-DD');
	// ex1=moment(periode).add('d', 9);
	// ex2=moment(ex1).format('YYYY-MM-DD');
	//  var s1=ex+"T00:00:00Z";
	
	// console.log("s1= "+s1+"T00:00:00Z");
	//  var s2=ex2+"T00:00:00Z";
	// console.log("s2= "+s2);
	var formationFilterUrl="";
	
	if (periode==""&&themeSelected=="") {
		formationFilterUrl=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Actions%20de%20Formation')/items";
	}else if (periode!=""&&themeSelected==""){
		formationFilterUrl=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Actions%20de%20Formation')/items?$filter=D_x00e9_but%20eq%20datetime%27"+periode+"%27";
	}else if (periode==""&&themeSelected!="") {
		formationFilterUrl=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Actions%20de%20Formation')/items?$filter=Title%20eq%27"+themeSelected+"%27";
	}else if (periode!=""&&themeSelected!="") {
		formationFilterUrl=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Actions%20de%20Formation')/items?$filter=Title%20eq%27"+themeSelected+"%27%20and%20D_x00e9_but%20eq%20datetime%27"+periode+"%27";
	}
	console.log("formationFilterUrl= "+formationFilterUrl);
	var urlActionFormationFilter =formationFilterUrl;
    var responseActionFormationFilter = responseActionFormationFilter ||[];
    //console.log("urlActionFormationFilter= "+urlActionFormationFilter);
    function loadActionFormationFilter() {

                $.ajax({url:  urlActionFormationFilter,          
                                        method: "GET",
                                        dataType: "json",
                                        headers: {Accept: "application/json;odata=verbose"},       
                                        success: function(data) {    
                                        //var dataResults = data.d.results; 
                                        responseActionFormationFilter = responseActionFormationFilter.concat(data.d.results);
                                            if (data.d.__next) {
                                                urlActionFormationFilter = data.d.__next;
                                                loadActionFormationFilter();
                                            }
                var  count=0;  
                var arrIdAct=[];
                var arrTheme=[];
                var arrDeb=[];
                var arrFin=[];
                var arrEmplacement=[];
                var arrFormateur=[];   

                $.each(responseActionFormationFilter, function(key, value) 
                {
                    count++;
                    moment.locale('fr');
                    var idAction=value.Id;
                    arrIdAct.push(idAction);
                    var theme=value.Title;
                    arrTheme.push(theme);
                    var debut=value.D_x00e9_but;
                    var dateDebut=moment(debut).format('DD-MM-YYYY HH:mm:ss');
                    arrDeb.push(dateDebut);
                    var fin=value.Fin;
                    var dateFin=moment(fin).format('DD-MM-YYYY HH:mm:ss');
                    arrFin.push(dateFin);
                    var emplacement="";
                    if(value.Emplacement!=null){
                        emplacement=value.Emplacement;
                    }
                    arrEmplacement.push(emplacement);
                    var formateur="";
                    if(value.Formateurs!=null){
                        formateur=value.Formateurs;
                    }
                    arrFormateur.push(formateur);


                });
                //document.getElementById("nbFormation").innerHTML=count;
                // console.log("arrIdAct= "+arrIdAct);
                // console.log("arrDeb= "+arrDeb);
                for (var i = 0; i < arrIdAct.length; i++) {
            
            
            document.getElementById("myDiv").innerHTML+='<div class="row" id="row'+arrIdAct[i]+'">'+
                     '<div class="col-lg-5">'+
                     ' <div class="x_panel" style="width:100%; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 100%);border-radius: 10px;margin-top: 35px;">'+
                     '<div class="x_content"><div id="container'+arrIdAct[i]+'"></div> </div></div> </div>'+
                        '<div class="col-lg-7">'+
                        '<div class="x_panel" style="width:100%; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 100%);border-radius: 10px;margin-top: 7%;">'+
                        '<div class="x_content">'+
                        '<h4 class="font-weight-bold text-center mb-4" style="margin-top: 0px;color: #337ab7;">Détails de formation</h4>' +
                        '<a href="#" class="list-group-item" style="font-size: 17px;color: #d13a36;"> <span class="badge"style="font-size: 17px;background-color: #d13a36;"id="nomFormation'+arrIdAct[i]+'">'+arrTheme[i]+'</span> <i class="fa fa-address-card fa-2x"></i> Nom de formation</a>' +
                        '<a href="#" class="list-group-item" style="font-size: 17px;color: #f09609;"><span class="badge"style="font-size: 17px;background-color: #f09609;"id="nomFormateur'+arrIdAct[i]+'">'+arrFormateur[i]+'</span> <i class="fa fa-user-circle fa-2x"></i> Nom formateur</a>' +
                        '<a href="#" class="list-group-item" style="font-size: 17px;color: #34495E;"><span class="badge"style="font-size: 17px;background-color: #34495E;"id="emplacement'+arrIdAct[i]+'">'+arrEmplacement[i]+'</span> <i class="fa fa-home fa-2x"></i> Emplacement</a>' +
                        '<a href="#" class="list-group-item" style="font-size: 17px;color: #0037ff;"> <span class="badge"style="font-size: 17px;background-color: #0037ff;"id="dateDebut'+arrIdAct[i]+'">'+arrDeb[i]+'</span> <i class="fa fa-calendar-days fa-2x"></i> Date début</a>' +
                        '<a href="#" class="list-group-item" style="font-size: 17px;color: #03aa89;"> <span class="badge"style="font-size: 17px;background-color: #03aa89;"id="dateFin'+arrIdAct[i]+'">'+arrFin[i]+'</span> <i class="fa  fa-calendar-days fa-2x"></i> Date fin</a>'+
                        '</div></div></div></div>';
                        }
               // loadEvaluationFilter(arrIdAct,arrTheme,arrDeb,arrFin,arrEmplacement,arrFormateur);
               
    }   
    });
    }         
    loadActionFormationFilter(); 


 var urlActionFormation1Filter = formationFilterUrl;
    var responseActionFormation1Filter = responseActionFormation1Filter ||[];
    //console.log("urlActionFormation1Filter= "+urlActionFormation1Filter);
    function loadActionFormation1Filter() {

                $.ajax({url:  urlActionFormation1Filter,          
                                        method: "GET",
                                        dataType: "json",
                                        headers: {Accept: "application/json;odata=verbose"},       
                                        success: function(data) {    
                                        //var dataResults = data.d.results; 
                                        responseActionFormation1Filter = responseActionFormation1Filter.concat(data.d.results);
                                            if (data.d.__next) {
                                                urlActionFormation1Filter = data.d.__next;
                                                loadActionFormation1Filter();
                                            }
                var  count=0;  
                var arrIdAct=[];
                var arrTheme=[];
                var arrDeb=[];
                var arrFin=[];
                var arrEmplacement=[];
                var arrFormateur=[];   

                $.each(responseActionFormation1Filter, function(key, value) 
                {
                    //moment.locale('fr');
                    var idAction=value.Id;
                    arrIdAct.push(idAction);
                    var theme=value.Title;
                    arrTheme.push(theme);
                    var debut=value.D_x00e9_but;
                    //var dateDebut=moment(debut).format('DD-MM-YYYY HH:mm:ss');
                    arrDeb.push(debut);
                    var fin=value.Fin;
                    //var dateFin=moment(fin).format('DD-MM-YYYY HH:mm:ss');
                    arrFin.push(fin);
                    var emplacement="";
                    if(value.Emplacement!=null){
                        emplacement=value.Emplacement;
                    }
                    arrEmplacement.push(emplacement);
                    var formateur="";
                    if(value.Formateurs!=null){
                        formateur=value.Formateurs;
                    }
                    arrFormateur.push(formateur);
                    loadEvaluationFilter(arrIdAct,arrTheme,arrDeb,arrFin,arrEmplacement,arrFormateur,idAction);

                });
                
               // 
               
    }   
    });
    }         
    loadActionFormation1Filter();



    function loadEvaluationFilter(arrIdAct,arrTheme,arrDeb,arrFin,arrEmplacement,arrFormateur,idAction){

            var urlEvaluationFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('EvaluationFormation')/items?$filter=Th_x00e8_meId%20eq%27"+idAction+"%27";
            var responseEvaluationFilter=responseEvaluationFilter||[];
            //console.log("urlEvaluationFilter= "+urlEvaluationFilter);
            function evaluationFormationFilter(){
                        $.ajax({url:  urlEvaluationFilter,          
                                                    method: "GET",
                                                    dataType: "json",
                                                    headers: {Accept: "application/json;odata=verbose"},       
                                                    success: function(data) {    
                                                    //var dataResults = data.d.results; 
                                                    responseEvaluationFilter = responseEvaluationFilter.concat(data.d.results);
                                                        if (data.d.__next) {
                                                            urlEvaluationFilter = data.d.__next;
                                                            evaluationFormationFilter();
                                                        }
                            var arrEvaluationFf=[];
                            var cat=['01', '02', '03', '04', '05'];
                            var dataChart=[0,0,0,0,0];
                            var note1=[];
                            var note2=[];
                            var note3=[];
                            var note4=[];
                            var note5=[];
                            $.each(responseEvaluationFilter, function(key, value) 
                            {
                               var ev=0;
                               if (value.OData__x0038__x002e__x0020_Ma_x0020_no!=null) {
                                ev=value.OData__x0038__x002e__x0020_Ma_x0020_no;
                               }
                               
                               if (ev==1) {
                                note1.push(ev);
                               }else if (ev==2) {
                                note2.push(2);
                               }else if (ev==3) {
                                note3.push(3);
                               }else if (ev==4) {
                                note4.push(4);
                               }else if (ev==5) {
                                note5.push(ev);
                               }
                            });
                            console.log("responseEvaluationFilter.length= "+responseEvaluationFilter.length);
                            if (responseEvaluationFilter.length>0) {
                                dataChart=[note1.length,note2.length,note3.length,note4.length,note5.length];
                            }else{
                                dataChart=[0,0,0,0,0];
                            }
                            cat=['01', '02', '03', '04', '05'];
                            
                            
                           
                           var id='container'+idAction;
                         
                             Highcharts.chart(id, {
                                chart: {
                                    type: 'bar'
                                },
                                                title: {
                                                    text: arrTheme[arrIdAct.indexOf(idAction)],
                                                    style: {
                                                        color: '#337ab7',
                                                        fontWeight: 'bold'
                                                    }
                                                },

                                xAxis: {
                                    categories: cat,
                                },

                                plotOptions: {
                                    series: {
                                        pointWidth: 20
                                    }
                                },

                                series: [{
                                    data: dataChart,
                                    colorByPoint: true,
                                        colors: ['#d13a36','#f09609','#8E44AD','#0037ff','#03aa89']
                                }]
                            });
                        
                }   
                });
            }
            evaluationFormationFilter();

                          
        
        
    }

}

