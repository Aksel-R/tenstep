<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Strategie/css/bootstrap.min.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Strategie/css/bootstrap.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Strategie/css/style.css" rel="stylesheet">
<link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Strategie/css/achevement.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Strategie/css/dataTables.bootstrap4.min.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Strategie/css/w3.css"  rel="stylesheet">
<link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Strategie/css/jquery.dataTables.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

<style>

html, body {

    font-size: 13px;
    line-height: 1.5;
}


body#page-top {
    margin-top: 0px;
}
.navbar-inverse {
    background-color: #337ab7;
    border-color: #337ab7;
}
#DeltaPlaceHolderPageTitleInTitleArea{
    display: none;
}
body {
  margin-top: 100px;
  background-color: #222;
}

@media(min-width:768px) {
  body {
    margin-top: 50px;
  }
}

#wrapper {
  padding-left: 0;
}

#page-wrapper {
  width: 100%;
  padding: 0;
  background-color: #fff;
}

.huge {
  font-size: 50px;
  line-height: normal;
}

@media(min-width:768px) {
  #wrapper {
    padding-left: 0px;
  }
  #page-wrapper {
    padding: 10px;
  }
}


/* Top Navigation */

.top-nav {
  padding: 0 15px;
}

.top-nav>li {
  display: inline-block;
  float: left;
}

.top-nav>li>a {
  padding-top: 15px;
  padding-bottom: 15px;
  line-height: 20px;
  color: #999;
}

.top-nav>li>a:hover,
.top-nav>li>a:focus,
.top-nav>.open>a,
.top-nav>.open>a:hover,
.top-nav>.open>a:focus {
  color: #fff;
  background-color: #000;
}

.top-nav>.open>.dropdown-menu {
  float: left;
  position: absolute;
  margin-top: 0;
  border: 1px solid rgba(0, 0, 0, .15);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}

.top-nav>.open>.dropdown-menu>li>a {
  white-space: normal;
}

ul.message-dropdown {
  padding: 0;
  max-height: 250px;
  overflow-x: hidden;
  overflow-y: auto;
}

li.message-preview {
  width: 275px;
  border-bottom: 1px solid rgba(0, 0, 0, .15);
}

li.message-preview>a {
  padding-top: 15px;
  padding-bottom: 15px;
}

li.message-footer {
  margin: 5px 0;
}

ul.alert-dropdown {
  width: 200px;
}


/* Side Navigation */

@media(min-width:768px) {
  .side-nav {
    position: fixed;
    top: 51px;
    left: 225px;
    width: 225px;
    margin-left: -225px;
    border: none;
    border-radius: 0;
    overflow-y: auto;
    background-color: #222;
  }
  .side-nav>li>a {
    width: 225px;
  }
  .side-nav li a:hover,
  .side-nav li a:focus {
    outline: none;
    background-color: #000 !important;
  }
}

.side-nav>li>ul {
  padding: 0;
}

.side-nav>li>ul>li>a {
  display: block;
  padding: 10px 15px 10px 38px;
  text-decoration: none;
  color: #999;
}

.side-nav>li>ul>li>a:hover {
  color: #fff;
}


/* Flot Chart Containers */

.flot-chart {
  display: block;
  height: 400px;
}

.flot-chart-content {
  width: 100%;
  height: 100%;
}


/* Custom Colored Panels */

.huge {
  font-size: 40px;
}

.panel-green {
  border-color: #5cb85c;
}

.panel-green .panel-heading {
  border-color: #5cb85c;
  color: #fff;
  background-color: #5cb85c;
}

.panel-green a {
  color: #5cb85c;
}

.panel-green a:hover {
  color: #3d8b3d;
}

.panel-red {
  border-color: #d9534f;
}

.panel-red .panel-heading {
  border-color: #d9534f;
  color: #fff;
  background-color: #d9534f;
}

.panel-red a {
  color: #d9534f;
}

.panel-red a:hover {
  color: #b52b27;
}

.panel-yellow {
  border-color: #f0ad4e;
}

.panel-yellow .panel-heading {
  border-color: #f0ad4e;
  color: #fff;
  background-color: #f0ad4e;
}

.panel-yellow a {
  color: #f0ad4e;
}

.panel-yellow a:hover {
  color: #df8a13;
}



.btn-group-vertical>.btn-group:after, .btn-group-vertical>.btn-group:before, .btn-toolbar:after, .btn-toolbar:before, .clearfix:after, .clearfix:before, .container-fluid:after, .container-fluid:before, .container:after, .container:before, .dl-horizontal dd:after, .dl-horizontal dd:before, .form-horizontal .form-group:after, .form-horizontal .form-group:before, .modal-footer:after, .modal-footer:before, .modal-header:after, .modal-header:before, .nav:after, .nav:before, .navbar-collapse:after, .navbar-collapse:before, .navbar-header:after, .navbar-header:before, .navbar:after, .navbar:before, .pager:after, .pager:before, .panel-body:after, .panel-body:before, .row:after, .row:before {
    display: none;
    content: " ";
}


.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
    display: none;
}

.canvas {
  width: 80%;
  margin: 15px auto;
}

 #headercolor{
    background:#337ab7;
    padding:10px;
    margin: 0 0 10px 0;
    text-align:right;
    border-radius : 5px ;
  }

    #headercolor span{
    float: left;
    padding-top: 10px;
  }

     .smallRisks {
    font-size: 170%;
    float: left;
    font-weight: bold;
    color : white;

  }

body.ms-backgroundImage {
    margin-top: 0px;
}

</style>
</head>

<div id="headercolor">
          <div>
            <small class="smallRisks">
              Tableau des ressources
            </small>
          </div>

          <div>


            <select class="mdb-select md-form" style="width: 25%; background-color: #FFFFFF; color: #000000; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: #000000; height: 40px;" id="myList" onchange="mainfilter();" >
  <option value="">Direction</option>
  
</select>
    

            <select class="mdb-select md-form" style="width: 25%; background-color: #FFFFFF; color: #000000; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: #000000; height: 40px;" id="myList1" onchange="mainfilterPr();" >
  <option value="">Projet</option>
  
</select>



      </div>       
      </div>


<div id="wrapper">

  <!-- Navigation
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
   <ul class="nav navbar-left top-nav">
     <h3 id="titre" style="color: white; float: left; margin-bottom: 0px;margin-top: 0px;">
      Ressources Par Direction
     </h3>



</ul>
<select class="mdb-select md-form" style="float: right; width: 25%; background-color: #FFFFFF; color: #000000; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: #000000; height: 40px;" id="myList" onchange="mainfilter();" >
  <option value="">Direction</option>
  
</select>
<select class="mdb-select md-form" style="float: right; width: 25%; background-color: #FFFFFF; color: #000000; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: #000000; height: 40px;" id="myList1" onchange="mainfilter()" >
  <option value="">Projet</option>
  
</select>
  </nav> -->

  <div id="page-wrapper">

    <div class="container-fluid">

      <!-- Page Heading -->
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header" id="DateJr" style="margin: 0px  20px; float:right;">
                            
                        </h1>
          <ol class="breadcrumb" style="width: 100%;">
            <li class="active" id="projTitle">
             
            </li>
          </ol>
        </div>
      </div>
      <!-- /.row -->

      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <div class="row">
                <div class="col-xs-3" id="fa1">
                  <i class="fa fa-tasks fa-4x"></i>
                </div>
                <div class="col-xs-9 text-right">
                  <div class="huge" id="countProj"></div>
                  <div id="projetsKPI"></div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="panel panel-yellow">
            <div class="panel-heading">
              <div class="row">
                <div class="col-xs-3" id="fa2">
                  <i class="fa fa-user fa-4x"></i>
                </div>
                <div class="col-xs-9 text-right">
                  <div class="huge"id="countRess"></div>
                  <div id="ressourcesKPI"></div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="panel panel-green">
            <div class="panel-heading">
              <div class="row">
                <div class="col-xs-3" id="fa3">
                  <i class="fa fa-male fa-4x"></i>
                </div>
                <div class="col-xs-9 text-right">
                  <div class="huge" id="countRessEn"></div>
                  <div id="entreprisesKPI"></div>
                </div>
              </div>
            </div>
         
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="panel panel-red">
            <div class="panel-heading">
              <div class="row">
                <div class="col-xs-3" id="fa4">
                  <i class="fa fa-user-times fa-4x"></i>
                </div>
                <div class="col-xs-9 text-right">
                  <div class="huge" id="countRessGen"></div>
                  <div id="generiquesKPI"></div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>
      <!-- /.row -->

      <div class="row" id="row1" style="display : none;">
        <div class="col-lg-6">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Travail par ressource</h3>
            </div>
            <div class="panel-body">
              <div id="morris-area-chart"></div>
            </div>
          </div>
        </div>
  <div class="col-lg-6">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title"><i class="fa fa-long-arrow-right fa-fw"></i> Coût des affectations</h3>
            </div>
            <div class="panel-body">
              <div id="morris-donut-chart1"></div>
              
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->

      <div class="row" id="row2" style="display: none;">
       
      
        <div class="col-lg-3">
          <div class="panel panel-default">
            <div class="panel-heading" id="infoPanel">
             
            </div>
            <div class="panel-body">
              <div class="list-group" id="listInfo">
                
              </div>
              <div class="text-right">
               
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="panel panel-default">
            <div class="panel-heading" id="tabPanel">
              
            </div>
            <div class="panel-body">
              <div class="table-responsive" id="tabResponsive">
                
              </div>
              <div class="text-right">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->

    </div>
    <!-- /.container-fluid -->

  </div>
  <!-- /#page-wrapper -->

</div>
<!-- /#wrapper -->














<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Strategie/javascript/jquery3.4.1.js"></script>

   <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Strategie/javascript/Chart.min.js"></script>
  
   
     <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Strategie/javascript/custom.min.js"></script>
     
 <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Strategie/javascript/highcharts.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Strategie/javascript/timeline.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Strategie/javascript/exporting.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Strategie/javascript/accessibility.js"></script>

<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ressourcesParProjet1/javascript/filter.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ressourcesParProjet1/javascript/filter1.js"></script>

<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/javascript/moment-with-locales.min.js"></script>


 <script type="text/javascript">

               var responseDirectionName = responseDirectionName || [];
                var lesDirections = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId,Direction";

                function LoadAllDirections() {

                    $.ajax({
                        url: lesDirections,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseDirectionName = responseDirectionName.concat(data.d.results);
                            if (data.d.__next) {
                                lesDirections = data.d.__next;
                                LoadAllDirections();
                            }
                            var countProj=0;
                            $.each(responseDirectionName, function (key, value) {
                                countProj++;
                                if (value.Direction!=null) {
                                    var region = value.Direction;
                                var prId = value.Direction;
                                

                                $('#myList').append($('<option>',
                                    {
                                        text: region,
                                        value: prId
                                    }));

                                var opt = {};
                                $("#myList > option").each(function () {
                                    if (opt[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt[$(this).text()] = $(this).val();
                                    }
                                });
                                }
                                


                            });
                            document.getElementById("countProj").innerHTML=countProj;
                            document.getElementById("projetsKPI").innerHTML='Projets';
                        }
                    });
                }
                LoadAllDirections();



           /*     var responseProjectName = responseProjectName || [];
                var lesProjets = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId,Direction";

                function LoadAllProjects() {

                    $.ajax({
                        url: lesProjets,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseProjectName = responseProjectName.concat(data.d.results);
                            if (data.d.__next) {
                                lesProjets = data.d.__next;
                                LoadAllProjects();
                            }
                            var countProj=0;
                            $.each(responseProjectName, function (key, value) {
                                countProj++;
                                if (value.ProjectName!=null) {
                                    var region = value.ProjectName;
                                var prId = value.ProjectName;
                                

                                $('#myList1').append($('<option>',
                                    {
                                        text: region,
                                        value: prId
                                    }));

                                var opt = {};
                                $("#myList1 > option").each(function () {
                                    if (opt[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt[$(this).text()] = $(this).val();
                                    }
                                });
                                }
                                


                            });
                            document.getElementById("countProj").innerHTML=countProj;
                            document.getElementById("projetsKPI").innerHTML='Projets';
                        }
                    });
                }
                LoadAllProjects();*/


                var responseLoadKPI=responseLoadKPI || [];
                var urlLoadKPI=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources";
                function loadKPI(){
                     $.ajax({
                        url: urlLoadKPI,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseLoadKPI = responseLoadKPI.concat(data.d.results);
                            if (data.d.__next) {
                                urlLoadKPI = data.d.__next;
                                loadKPI();
                            }
                            var countRes=0;
                            var countEntreprise=0;
                            var countGenerique=0;

                            $.each(responseLoadKPI, function (key, value) {
                                countRes++;
                                var typeRessource= value.TypeName; 
                                if (typeRessource=="Ressource de travail") {
                                    countEntreprise++;
                                }else{
                                    countGenerique++;
                                }                    
                            });
                            document.getElementById("countRess").innerHTML=countRes;
                            document.getElementById("ressourcesKPI").innerHTML='Ressources';
                            document.getElementById("countRessEn").innerHTML=countEntreprise;
                            document.getElementById("entreprisesKPI").innerHTML='Ressources Entreprises';
                            document.getElementById("countRessGen").innerHTML=countGenerique;
                            document.getElementById("generiquesKPI").innerHTML='Ressources Génériques';
                        }
                    });
                }
                loadKPI();

                function loadToday(){
                    var auj;
                    daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    jrSem = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
                    var dayName=moment().format('dddd');
                    if (daysInWeek.indexOf(dayName)>-1) {
                        auj=jrSem[daysInWeek.indexOf(dayName)];
                        //console.log("date valide= "+auj);
                    }
                    var dj=moment().format('DD/MM/YYYY');
                    document.getElementById("DateJr").innerHTML=auj + " <small>"+dj+"</small>";
                    //
                }
                loadToday();
                function showTitle(){
                    document.getElementById("projTitle").innerHTML='<i class="fa fa-dashboard"></i>'+' Affichage Général';
                }
                showTitle();


</script>
</body>

</html>