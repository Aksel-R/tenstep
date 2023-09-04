
<head>
    <meta charset="utf-8">
  
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
     <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    
<style>


.form-item__element {
  display: inline-block;
  padding: 0.5em;
  vertical-align: middle;
  background: #fff;
  border-radius: 4px;
  border: 1px solid gray;
  width:200px;
}

.form-item__element option {
  color: #000;
  font-size: 12pt ;
}


 .ms-core-overlay{
     background-color: white !important
 }

span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}


.table
{
   border-radius: 5px ;
  overflow: hidden;
  width: 90%;
  margin-left: 5%;
   
}


  .table thead {
    background-color: #cf232a;
    border-color: #cf232a;
    color: white;
  }


.stat-digit{
    font-size: 25px;
    font-family: cursive;
}


.ms-rtestate-field h4, h4.ms-rteElement-H4 {
    line-height: 1.6;
    color: black;
}


.form-item__element {
  display: inline-block;
  padding: 0.5em;
  vertical-align: middle;
  background: #fff;
  color: black;
  border-radius: 4px;
  border: 1px solid gray;
  width:200px;
}

.form-item__element option {
  color: #000;
  font-size: 12pt ;
}


.navbar-inverse {
            background-color: #cf232a;
            border-color: #cf232a;
        }


        .btn-group-vertical>.btn-group:after,
        .btn-group-vertical>.btn-group:before,
        .btn-toolbar:after,
        .btn-toolbar:before,
        .clearfix:after,
        .clearfix:before,
        .container1-fluid:after,
        .container1-fluid:before,
        .container1:after,
        .container1:before,
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


    #mylist1 {
      background-repeat: no-repeat;
    width: 20%;
    text-align: center;
    font-size: 15px;
  
    border-radius : 5px;
  }

option:empty
{
 display:none;
}


.table-bordered>tbody>tr>td, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>td, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>thead>tr>th {
}




.glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: "Glyphicons Halflings";
    font-style: normal;
    font-weight: 200;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.w3-spin {
    animation: w3-spin 2s infinite linear;
}

.w3-jumbo {
    font-size: 25px!important;
    color:green;
}



span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}

.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
    display: none;
}

.fit-picture {
    width: 80px;
}

th {
    font-size: smaller;
}
table.dataTable thead th, table.dataTable thead td {
    padding: 0px 5px;
    border-bottom: 1px solid #111;
    text-align: center;
}

#mylist1 {
            background-position: 10px 10px;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 13px;
            padding: 12px 20px 12px 15px;
            border: 1px solid #ddd;
            margin-left: 50px;
            border-radius: 5px;
        }
#headercolor {
    background: #cf232a;
    padding: 10px;
    margin: 0 0 10px 0;
    text-align: right;
    border-radius: 5px;
}

#headercolor span {
    float: left;
    padding-top: 10px;
}
.smallRisks {
    float: left;
    font-weight: bold;
    color: white;
    padding: 5px;
}

#mylist1{
  background-position: 10px 10px;
background-repeat: no-repeat;
font-size: 12px;
padding: 5px 0px 5px 10px;
border: 1px solid #ddd;
border-radius : 5px;
width: 19%;
}

h2#titreProjets {
    color: white;
    font-size: medium;
    font-weight: bold;
}
</style>  
</head>

<body>

 
<div id="headercolor">
    <div>
        <small class="smallRisks">
            <h2 id="titreProjets">Tableau Contrôle Plus  </h2> 
            <br>
            
        </small>
    </div>
    
   
        <br>
        <div id="filtreExercices">
        
        
         
      <label id="NomItervalle" for="start" style="font-weight:bold; color: white; font-size:13px;">Date journée dans : </label>
      <input type="date" id="start" name="trip-start">
      <input type="date" id="finish" name="trip-start">
      <input type="submit" onclick="FiltreDate(); return false;" id="valideDate" value="Valider"/>
      <select class="form-item__element form-item__element--select" style="color:black; font-weight:bold;" id="mylist1" onchange="">
            <option value="">Région</option>
        </select>
    </div>
    
</div>
<div class="container-fluid">
  <div class="row" id="dataDiv"></div>
</div>


                          
                                      
                     
                    
    <script src="/sites/bhcom/_catalogs/masterpage/ContolPlus/javascript/jquery-3.5.1.js"></script>               
  
     <script src="/sites/bhcom/_catalogs/masterpage/ContolPlus/javascript/moment-with-locales.js"></script>               
     <script src="/sites/bhcom/_catalogs/masterpage/ContolPlus/javascript/custom.min.js"></script>
     <script src="/sites/bhcom/_catalogs/masterpage/ContolPlus/javascript/Chart.min.js"></script>
 



<script type="text/javascript">

  var responseRegion=responseRegion||[];
  var urlRegion=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Direction_x0020_R_x00e9_gionale";
  ////console.log('urlRegion= '+urlRegion);
  function LoadRegion() {
            var nbre = 0;

            $.ajax({
                url: urlRegion,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseRegion = responseRegion.concat(data.d.results);
                    if (data.d.__next) {
                        urlRegion = data.d.__next;
                        LoadRegion();
                    }
                   
                    $.each(responseRegion, function (key, value) {
                      var region=value.Direction_x0020_R_x00e9_gionale;
                      $('#mylist1').append($('<option>',
                         {
                            text : region,
                            value:region
                          })); 
                          var opt = {};
                            $("#mylist1 > option").each(function () {
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
        LoadRegion();
var divDateJour='';


        
  var responseDateJournee=responseDateJournee||[];
  var urlDateJournee=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?";
  ////console.log('urlDateJournee= '+urlDateJournee);
  function loadDateJournee() {
            var nbre = 0;

            $.ajax({
                url: urlDateJournee,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseDateJournee = responseDateJournee.concat(data.d.results);
                    if (data.d.__next) {
                        urlDateJournee = data.d.__next;
                        loadDateJournee();
                    }
                    var arrDateJourne=[];
                    var arrInfoDateJour=[];
                    $.each(responseDateJournee, function (key, value) {
                      moment.locale('fr');
                      var dateJ=value.Date_x0020_Journ_x00e9_e;
                      var dateJournee=moment(dateJ).format('YYYY-MM-DD');
                      if (arrDateJourne.indexOf(dateJournee)<0) {
                        arrDateJourne.push(dateJournee);

                      }
                      

                    });
                    ////console.log("arrDateJourne= "+arrDateJourne);
                    for (var i = 0; i < arrDateJourne.length; i++) {
                      
                      loadStruct(arrDateJourne,arrDateJourne[i],i);
                    }
                    
                }
            });
        }
        loadDateJournee();

 function loadStruct(arrDateJourne,jouneeAct,nb){
      var arrAgence=[];
      var arrAgenceId=[];
    var arrRegion=[];
    var arrRegion1=[];
    var arrNbAgparDir=[];
    var arrDateJourne=[];
    var arrRegParJorn=[];
    var arrAgParReg=[];

    var arrDateRecepParAgReg=[];
    var arrStatRegParAgReg=[];
    var avisParAgReg=[];
            var responseAgence=responseAgence||[];
      var urlAgence=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Title,Direction_x0020_R_x00e9_gionale&$orderby Direction_x0020_R_x00e9_gionale,Id";
      ////console.log('urlAgence= '+urlAgence);
      function LoadAgence() {
                var nbre = 0;

                $.ajax({
                    url: urlAgence,
                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseAgence = responseAgence.concat(data.d.results);
                        if (data.d.__next) {
                            urlAgence = data.d.__next;
                            LoadAgence();
                            
                        }
                        if (!data.d.__next) {
                            
                            
                            $.each(responseAgence, function (key, value) {
                              var agence=value.Title;
                              var region=value.Direction_x0020_R_x00e9_gionale;
                              var agId=value.Id;
                              arrAgence.push(agence);
                              arrRegion.push(region);
                              arrAgenceId.push(agId);
                              if (arrRegion1.indexOf(region)<0) {
                                arrRegion1.push(region);
                                arrNbAgparDir.push(1);
                                var arraggg=[];
                                arraggg.push(agence);
                                arrAgParReg.push(arraggg);
                                var arrDattt=[];
                                arrDattt.push("");
                                arrDateRecepParAgReg.push(arrDattt);
                                var arrSatttt=[];
                                arrSatttt.push("");
                                arrStatRegParAgReg.push(arrSatttt);
                                var arrAviii=[];
                                arrAviii.push("");
                                avisParAgReg.push(arrAviii);
                              }else{
                                arrNbAgparDir[arrRegion1.indexOf(region)]=parseInt(arrNbAgparDir[arrRegion1.indexOf(region)]+1);
                                arrAgParReg[arrRegion1.indexOf(region)].push(agence);
                                arrDateRecepParAgReg[arrRegion1.indexOf(region)].push("");
                                arrStatRegParAgReg[arrRegion1.indexOf(region)].push("");
                                avisParAgReg[arrRegion1.indexOf(region)].push("");
                              }

                            });
                            loadDivJourne(arrDateJourne,jouneeAct,nb,arrAgence,arrAgenceId,arrRegion,arrRegion1,arrNbAgparDir,arrDateJourne,arrRegParJorn,arrAgParReg,arrDateRecepParAgReg,arrStatRegParAgReg,avisParAgReg);
                           
                            
                        }
                        
                        
                    }
                });
            }
            LoadAgence();

    }

    function loadDivJourne(arrDateJourne,jouneeAct,nb,arrAgence,arrAgenceId,arrRegion,arrRegion1,arrNbAgparDir,arrDateJourne,arrRegParJorn,arrAgParReg,arrDateRecepParAgReg,arrStatRegParAgReg,avisParAgReg){
      var responseDayInfo=responseDayInfo || [];
  
      var jourUrl=jouneeAct+'T00:00:00.000';
      var urlDayInfo=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Date_x0020_Journ_x00e9_e eq datetime'"+jourUrl+"'";
      console.log("urlDayInfo= "+urlDayInfo);
      function loadDayInfo() {
            var nbre = 0;

            $.ajax({
                url: urlDayInfo,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseDayInfo = responseDayInfo.concat(data.d.results);
                    if (data.d.__next) {
                        urlDayInfo = data.d.__next;
                        loadDayInfo();
                    }
                    var arrDateRecep=[];
                    var arrStatReg=[];
                    $.each(responseDayInfo, function (key, value) {
                      moment.locale('fr');
                      var agId=value.AgenceId;
                      var datR=value.Date_x0020_r_x00e9_ception_x0020;
                      var dateReception=moment(datR).format('YYYY-MM-DD');
                      var statR=value.Statut_x0020_R_x00e9_gional;
                      var avisDcpr=value.Avis_x0020_DCP;
                      var regionActuelle=arrRegion[arrAgenceId.indexOf(agId)];
                      console.log("regionActuelle= "+regionActuelle);
                      console.log("arrRegion= "+arrRegion);
                      console.log("index= "+arrRegParJorn.indexOf(regionActuelle));
                      
                      

                    });
                   
                    
                    
                }
            });
        }
        loadDayInfo();
    }

// /sites/bhcom/_catalogs/masterpage/ContolPlus/controlPlus.js
</script>