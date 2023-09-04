<!doctype html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!-- Meta, title, CSS, favicons, etc. -->
  
  <link rel="stylesheet" href="/sites/BHAcademy/_catalogs/masterpage/Dashboard/formationBh/css/bootstrap.min.css" >
  <link rel="stylesheet" href="/sites/BHAcademy/_catalogs/masterpage/Dashboard/formationBh/css/bootstrap.css" >
  <link rel="stylesheet" href="/sites/BHAcademy/_catalogs/masterpage/Dashboard/formationBh/css/achevement.css"  >
  <link rel="stylesheet" href="/sites/BHAcademy/_catalogs/masterpage/Dashboard/formationBh/css/w3.css" >
  <link rel="stylesheet" href="/sites/BHAcademy/_catalogs/masterpage/Dashboard/formationBh/css/fontawesome.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  


  <!-- Font Awesome -->
  <!-- NProgress -->
  <style type="text/css">
  .navbar-inverse {
            background-color: #337ab7;
            border-color: #337ab7;
        }


        .btn-group-vertical>.btn-group:after,
        .btn-group-vertical>.btn-group:before,
        .btn-toolbar:after,
        .btn-toolbar:before,
        .clearfix:after,
        .clearfix:before,
        .container-fluid:after,
        .container-fluid:before,
        .container:after,
        .container:before,
        .dl-horizontal dd:after,
        .dl-horizontal dd:before,
        .form-horizontal .form-group:after,
        .form-horizontal .form-group:before,
        .modal-footer:after,
        .modal-footer:before,
        .modal-header:after,
        .modal-header:before,
        .nav:after,
        .nav:before,
        .navbar-collapse:after,
        .navbar-collapse:before,
        .navbar-header:after,
        .navbar-header:before,
        .navbar:after,
        .navbar:before,
        .pager:after,
        .pager:before,
        .panel-body:after,
        .panel-body:before,
        .row:after,
        .row:before {
            display: none;
            content: " ";
        }
        span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}
th {
    font-size: smaller;
}
text.highcharts-credits {
    display: none;
}
ul#zz12_RootAspMenu {

font-size: 13px;
}
#s4-titlerow {

margin-top: 0px;
margin-bottom: 0px;
padding-top: 18px;
padding-bottom: 8px;
}

.main-section{
  width: 100%;
  float:right;
  text-align: center;
 
}
.dashbord{
  width:16.25%;
  display: inline-block;
  background-color:#34495E;
  color:#fff;
  margin-top: 25px; 
}
.icon-section i{
  font-size: 23px;
  padding:7px;
  border:1px solid #fff;
  border-radius:50%;
  margin-top:-15px;
  margin-bottom: 4px;
  background-color:#34495E;
}
.icon-section p{
  margin:0px;
  font-size: 20px;
  padding-bottom: 10px;
}
.detail-section{
  background-color: #2F4254;
  padding: 5px 0px;
}
.dashbord .detail-section:hover{
  background-color: #5a5a5a;
  cursor: pointer;
}
.detail-section a{
  color:#fff;
  text-decoration: none;
}






  </style>



</head>
<body style="font-family: serif;">
<!--<div id="overlay">
    <div class="spinner"></div>
    <br/>
    Please Wait A Moment...
</div>-->


 <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="border-radius: 5px; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 100%);">
    <ul class="nav navbar-right top-nav"  style="padding-left: 0px; padding-right: 0px;width: 40%;">
        <h3 id="titre" style="color: white; float: left; margin-bottom: 0px;margin-top: 0px;">Évaluation des formations
        </h3>
    </ul>
    <select class="mdb-select md-form"
                style="float: left; width: 30%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList1" onchange="mainFilter()">
                <option value="">Période</option>

            </select>
            <select class="mdb-select md-form"
                style="float: left; width: 30%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList2" onchange="mainFilter()">
                <option value="">Théme</option>

            </select>
</nav>

<div id="myDiv">
    
</div>    
    
      

</body>
<script src="/sites/BHAcademy/_catalogs/masterpage/Dashboard/formationBh/javascript/bhAcademyFilter.js"></script>
<script src="/sites/BHAcademy/_catalogs/masterpage/Dashboard/formationBh/javascript/jquery-3.5.1.js"></script>
<script src="/sites/BHAcademy/_catalogs/masterpage/Dashboard/formationBh/javascript/highcharts.js"></script>
<script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script> 
<script src="/sites/BHAcademy/_catalogs/masterpage/Dashboard/formationBh/javascript/Chart.min.js"></script>
<script src="/sites/BHAcademy/_catalogs/masterpage/Dashboard/formationBh/javascript/conToKM.js"></script>
<script src="/sites/BHAcademy/_catalogs/masterpage/Dashboard/formationBh/javascript/accessibility.js"></script>
<script type="/sites/BHAcademy/_catalogs/masterpage/Dashboard/formationBh/javascript/moment-with-locales.js"></script>
<script type="/sites/BHAcademy/_catalogs/masterpage/Dashboard/formationBh/javascript/custom.min.js"></script>

<script type="text/javascript"> 

var responseTheme = responseTheme ||[];
var urlTheme = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Actions%20de%20Formation')/items?$select=Title";

function loadTheme() {

            $.ajax({url:  urlTheme,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseTheme = responseTheme.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlTheme = data.d.__next;
                                            loadTheme();
                                        }          
                          
            $.each(responseTheme, function(key, value) 
            {           
                
                var theme = value.Title;  
                  
                
                  $('#myList2').append($('<option>',
                           {
                              text : theme,
                              value : theme
                            })); 

                            var opt = {};
                              $("#myList2 > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }


                            }); 
                
                       
            });
}   
});
}                                  
loadTheme();

var responsePeriode = responsePeriode ||[];
var urlPeriode = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Actions%20de%20Formation')/items?$select=D_x00e9_but";
function loadPeriode() {

            $.ajax({url:  urlPeriode,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responsePeriode = responsePeriode.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlPeriode = data.d.__next;
                                            loadPeriode();
                                        }          
                          
            $.each(responsePeriode, function(key, value) 
            {           
                moment.locale('fr');
                var deb = value.D_x00e9_but;  
                var dateDebut=moment(deb).format('DD-MM-YYYY');
                
                  $('#myList1').append($('<option>',
                           {
                              text : dateDebut,
                              value : deb
                            })); 

                            var opt = {};
                              $("#myList1 > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }


                            }); 
                
                       
            });
}   
});
}                                  
loadPeriode();

// function loadPeriode() {
    
//                         var date = new Date();
                        
//                         for (var i = 1; i < 13; i++) {
//                             var firstDay = new Date(date.getFullYear(), i, 1).toString("yyyy-MM-ddTHH:mm:ssZ");
//                             $('#myList1').append($('<option>',
//                                 {
//                                     text: firstDay,
//                                     value : firstDay
//                                 }));
//                         }
// }                                  
// loadPeriode();
// for (var i = 1; i < 11; i++) {
//      document.getElementById("myDiv").innerHTML+='<div class="row" id="row'+i+'">'+
//      '<div class="col-lg-8">'+
//      ' <div class="x_panel" style="width:100%; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 100%);border-radius: 10px;margin-top: 35px;">'+
//      '<div class="x_content"><div id="container'+i+'"></div> </div></div> </div>'+
//                 '<div class="col-lg-4">'+
//                 '<div class="x_panel" style="width:100%; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 100%);border-radius: 10px;margin-top: 20%;">'+
//                 '<div class="x_content">'+
//                 '<h4 class="font-weight-bold text-center mb-4" style="margin-top: 0px;color: #337ab7;">Détails de formation</h4>' +
//                 '<a href="#" class="list-group-item" style="font-size: 17px;color: #d13a36;"> <span class="badge"style="font-size: 17px;background-color: #d13a36;"id="nomFormation'+i+'"></span> <i class="fa fa-address-card fa-2x"></i> Nom de formation</a>' +
//                 '<a href="#" class="list-group-item" style="font-size: 17px;color: #f09609;"><span class="badge"style="font-size: 17px;background-color: #f09609;"id="nbParticipants'+i+'"></span> <i class="fa fa-calculator fa-2x"></i> Nombre des paticipants</a>' +
//                 '<a href="#" class="list-group-item" style="font-size: 17px;color: #0037ff;"> <span class="badge"style="font-size: 17px;background-color: #0037ff;"id="dateDebut'+i+'"></span> <i class="fa fa-calendar-days fa-2x"></i> Date début</a>' +
//                 '<a href="#" class="list-group-item" style="font-size: 17px;color: #03aa89;"> <span class="badge"style="font-size: 17px;background-color: #03aa89;"id="dateFin'+i+'"></span> <i class="fa  fa-calendar-days fa-2x"></i> Date fin</a>'+
//                 '</div></div></div></div>';
        
//  } 
//  for (var i = 1; i < 11; i++) {
//      var id='container'+i;
//      Highcharts.chart(id, {
//         chart: {
//             type: 'bar'
//         },
//                         title: {
//                             text: 'Notes formation'+i,
//                             style: {
//                                 color: '#337ab7',
//                                 fontWeight: 'bold'
//                             }
//                         },

//         xAxis: {
//             categories: ['01', '02', '03', '04', '05'],
//         },

//         plotOptions: {
//             series: {
//                 pointWidth: 20
//             }
//         },

//         series: [{
//             data: [5, 2, 1, 14, 10],
//             colorByPoint: true,
//                 colors: ['#d13a36','#f09609','#8E44AD','#0037ff','#03aa89']
//         }]
//     });
//  }


    var urlActionFormation = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Actions%20de%20Formation')/items";
    var responseActionFormation = responseActionFormation ||[];
    //console.log("urlActionFormation= "+urlActionFormation);
    function loadActionFormation() {

                $.ajax({url:  urlActionFormation,          
                                        method: "GET",
                                        dataType: "json",
                                        headers: {Accept: "application/json;odata=verbose"},       
                                        success: function(data) {    
                                        //var dataResults = data.d.results; 
                                        responseActionFormation = responseActionFormation.concat(data.d.results);
                                            if (data.d.__next) {
                                                urlActionFormation = data.d.__next;
                                                loadActionFormation();
                                            }
                var  count=0;  
                var arrIdAct=[];
                var arrTheme=[];
                var arrDeb=[];
                var arrFin=[];
                var arrEmplacement=[];
                var arrFormateur=[];   

                $.each(responseActionFormation, function(key, value) 
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
               // lodEvaluation(arrIdAct,arrTheme,arrDeb,arrFin,arrEmplacement,arrFormateur);
               
    }   
    });
    }         
    loadActionFormation(); 


 var urlActionFormation1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Actions%20de%20Formation')/items";
    var responseActionFormation1 = responseActionFormation1 ||[];
    //console.log("urlActionFormation1= "+urlActionFormation1);
    function loadActionFormation1() {

                $.ajax({url:  urlActionFormation1,          
                                        method: "GET",
                                        dataType: "json",
                                        headers: {Accept: "application/json;odata=verbose"},       
                                        success: function(data) {    
                                        //var dataResults = data.d.results; 
                                        responseActionFormation1 = responseActionFormation1.concat(data.d.results);
                                            if (data.d.__next) {
                                                urlActionFormation1 = data.d.__next;
                                                loadActionFormation1();
                                            }
                var  count=0;  
                var arrIdAct=[];
                var arrTheme=[];
                var arrDeb=[];
                var arrFin=[];
                var arrEmplacement=[];
                var arrFormateur=[];   

                $.each(responseActionFormation1, function(key, value) 
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
                    lodEvaluation(arrIdAct,arrTheme,arrDeb,arrFin,arrEmplacement,arrFormateur,idAction);

                });
                
               // 
               
    }   
    });
    }         
    loadActionFormation1();



    function lodEvaluation(arrIdAct,arrTheme,arrDeb,arrFin,arrEmplacement,arrFormateur,idAction){

            var urlEvaluation=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('EvaluationFormation')/items?$filter=Th_x00e8_meId%20eq%27"+idAction+"%27";
            var responseEvaluation=responseEvaluation||[];
            //console.log("urlEvaluation= "+urlEvaluation);
            function evaluationFormation(){
                        $.ajax({url:  urlEvaluation,          
                                                    method: "GET",
                                                    dataType: "json",
                                                    headers: {Accept: "application/json;odata=verbose"},       
                                                    success: function(data) {    
                                                    //var dataResults = data.d.results; 
                                                    responseEvaluation = responseEvaluation.concat(data.d.results);
                                                        if (data.d.__next) {
                                                            urlEvaluation = data.d.__next;
                                                            evaluationFormation();
                                                        }
                            var arrEvaluationFf=[];
                            var cat=['01', '02', '03', '04', '05'];
                            var dataChart=[0,0,0,0,0];
                            var note1=[];
                            var note2=[];
                            var note3=[];
                            var note4=[];
                            var note5=[];
                            $.each(responseEvaluation, function(key, value) 
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
                            console.log("responseEvaluation.length= "+responseEvaluation.length);
                            if (responseEvaluation.length>0) {
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
            evaluationFormation();

                          
        
        
    }

    
</script>
    
</body>