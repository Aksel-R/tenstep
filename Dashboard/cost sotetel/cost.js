<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link href="/PWA/_catalogs/masterpage/Cout/css/bootstrap.min.css" rel="stylesheet">
    <link href="/PWA/_catalogs/masterpage/Cout/css/style.css" rel="stylesheet">
    <link href="/PWA/_catalogs/masterpage/Cout/css/achevement.css" rel="stylesheet">
    <link href="/PWA/_catalogs/masterpage/Cout/css/w3.css" rel="stylesheet">
    <link href="/PWA/_catalogs/masterpage/Cout/css/jquery.dataTables.min.css" rel="stylesheet">
    <link href="/PWA/_catalogs/masterpage/Cout/css/font-awesome.min.css" rel="stylesheet">

    <style>
        html,
        body {

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

        #DeltaPlaceHolderPageTitleInTitleArea {
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


        .ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
            display: none;
        }

        .canvas {
            width: 80%;
            margin: 15px auto;
        }

        #headercolor {
            background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);
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
            font-size: 170%;
            float: left;
            font-weight: bold;
            color: white;

        }

        body.ms-backgroundImage {
            margin-top: 0px;
        }
        #sousDirection {
      background-color: white;
      background-repeat: no-repeat;
      width: 20%;
      font-size: 14px;
      padding: 10px 5px 10px 5px;
      border-radius: 5px;
    }

    #projecttype {
      background-color: white;
      background-repeat: no-repeat;
      width: 20%;
      font-size: 14px;
      padding: 10px 5px 10px 5px;
      border-radius: 5px;
    }

    #projectowner {
      background-color: white;
      background-repeat: no-repeat;
      width: 20%;
      font-size: 14px;
      padding: 10px 5px 10px 5px;
      border-radius: 5px;
    }

    #covphase {
      background-color: white;
      background-repeat: no-repeat;
      width: 20%;
      font-size: 14px;
      padding: 10px 5px 10px 5px;
      border-radius: 5px;
    }


    #Direction {
      background-color: white;
      background-repeat: no-repeat;
      width: 20%;
      font-size: 14px;
      padding: 10px 5px 10px 5px;
      border-radius: 5px;
    }
        html, body {
  height:100%;
  width:100%;
}
 
text.highcharts-credits {
    display: none;
}


text.highcharts-title {
    display: none;
}
g.highcharts-exporting-group {
    display: none;
}
rect.highcharts-background {
    height: 320px;
}
    </style>
</head>

<div id="headercolor">
    <div>
        <small class="smallRisks">
            Coût
        </small>
    </div>

    <div>
          <select class="form-item__element form-item__element--select" style="color:black; font-weight:bold;" id="Direction" onchange="selectMyList();mainfilter()">
<option value="">Directions</option>
<option value="Direction Générale">Direction Générale</option>
<option value="Direction des projets">Direction des projets</option>
<option value="ServiceConvergent">Direction service convergent</option>
<option value="ServiceInfrastructure">Direction service infrastructure</option>
</select>

<select class="form-item__element form-item__element--select" style="color:black; font-weight:bold;" id="sousDirection" onchange="selectMyList1();mainfilter();" disabled>
        <option selected="" value="">Sous Directions</option>
      </select>

      

      <select class="form-item__element form-item__element--select" style="color:black; font-weight:bold;" id="projectowner" onchange="mainfilter();" disabled>
        <option selected="" value="">Chef de projet</option>
      </select>



    </div>
</div>


<div id="wrapper">
    <div id="page-wrapper">
        <div class="container-fluid">
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
          <!--  <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-2" id="fa1">
                                    <i class="fa fa-circle fa-2x" style=" color: #7c7777;"></i>
                                </div>
                                <div class="col-xs-10 text-right">
                                    <div id="projetsKPI" style="font-weight: 700;">Pas de référence projet</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-2" id="fa2">
                                    <i class="fa fa-circle fa-2x" style=" color:#ffd81a;"></i>
                                </div>
                                <div class="col-xs-10 text-right">
                                    <div id="ressourcesKPI" style="font-weight: 700;">entre 10%-20% du coût de référence</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-2" id="fa3">
                                    <i class="fa fa-circle fa-2x" style=" color: #49bf34;"></i>
                                </div>
                                <div class="col-xs-10 text-right">
                                    <div id="entreprisesKPI" style="font-weight: 700;"> inférieur à 10% du coût de référence</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-2" id="fa4">
                                    <i class="fa fa-circle fa-2x" style=" color: #f53a3a;"></i>
                                </div>
                                <div class="col-xs-10 text-right">
                                    <div class="huge" id="countRessGen"></div>
                                    <div id="generiquesKPI" style="font-weight: 700;">supérieur à 20% du coût de référence </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> -->
            <div class="row">
                <div class="col-lg-2" style="padding-right: 0px; padding-left: 0px;">
                    <div class="col-lg-12">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3" id="fa1">
                                        <i class="fa fa-usd fa-4x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div style="font-family: ui-monospace;font-size: x-large;" id="projectcost"></div>
                                        <div ><h6 style="font-weight: 700;color: white;">Coût Projet</h6></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="panel panel-yellow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3" id="fa1">
                                        <i class="fa fa-usd fa-4x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div style="font-family: ui-monospace;font-size: x-large;" id="projectbc"></div>
                                        <div ><h6 style="font-weight: 700;color: white;">Coût de référence</h6></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="panel panel-green">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3" id="fa1">
                                        <i class="fa fa-usd fa-4x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div style="font-family: ui-monospace;font-size: x-large;" id="projectAC"></div>
                                        <div ><h6 style="font-weight: 700;color: white;">Coût actuel</h6></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="panel panel-red">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3" id="fa1">
                                        <i class="fa fa-usd fa-4x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div style="font-family: ui-monospace;font-size: x-large;" id="projectVC"></div>
                                        <div ><h6 style="font-weight: 700;color: white;">Coût variance</h6></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
                <div class="col-lg-10">
               
                <div class="col-lg-6"   style="padding-right: 7px; padding-left: 0px;">
                    <div class="panel panel-default">
                        <div class="panel-heading" id="tabPanel">
                            <h2 class="panel-title" style="text-align: center; font-size: 120%;font-weight: bold;">Coût portefeuille</h3>
                        </div>

                        <div class="panel-body" style="height: 415px;">
                        <div class="row">

                   <div class="col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-2" id="fa1">
                                    <i class="fa fa-square fa-2x" style="color:#ffc470;"></i>
                                </div>
                                <div class="col-xs-10 text-center">
                                   <div >Coût de référence</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-2" id="fa1">
                                    <i class="fa fa-square fa-2x" style="color:#b8deff;"></i>
                                </div>
                                <div class="col-xs-10 text-center">
                                   <div >Coût Projet</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-2" id="fa1">
                                    <i class="fa fa-arrow-right fa-2x" style="color:#000000;"></i>
                                </div>
                                <div class="col-xs-10 text-center">
                                   <div >Coût actuel</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
                            <div  id="tabResponsive">
                            <div id="container" ></div>
                            </div>

                        </div>
                    </div>
                </div>
                 <div class="col-lg-6" style="padding-right: 0px; padding-left: 7px;" >
                    <div class="panel panel-default">
                        <div class="panel-heading" id="tabPanel">
                            <h2 class="panel-title" style="text-align: center; font-size: 120%;font-weight: bold;">Top projet par coût </h2>
                        </div>
                        <div class="panel-body" style=" height: 415px;">
                            <div  id="tabResponsive">
                                <table class="table table-bordered table-hover table-striped" id="tableCostTop" >
                                    <thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black;">
                                        <tr>
                                            <th style="text-align:center">Nom de projet</th>
                                            <th style="text-align:center">Coût de référence</th>
                                            <th style="text-align:center">Eac(coût)</th>
                                            <th style="text-align:center">Coût actuel</th>
                                            <th style="text-align:center">Coût Variance</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                            <div class="text-right">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12" style="padding-right: 0px; padding-left: 0px;">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div id="tabResponsive">
                                <table class="table table-bordered table-hover table-striped" id="tablePr1" >
                                    <thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black;">
                                        <tr>
                                            <th>Nom de projet</th>
                                            <th style="text-align:center">Budget</th>
                                            <th style="text-align:center">Coût de référence</th>
                                            <th style="text-align:center">Eac(coût)</th>
                                            <th style="text-align:center">Coût actuel</th>
                                            <th style="text-align:center">Coût restante</th>
                                            <th style="text-align:center">Coût Variance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                    </tbody>
                                </table>
                            </div>
                            <div class="text-right">

                            </div>
                        </div>
                    </div>
                </div>
          <!--      <div class="col-lg-12" style="padding-right: 0px; padding-left: 0px;">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div id="tabResponsive">
                                <table class="table table-bordered table-hover table-striped" id="tablePr2" >
                                    <thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black;">
                                        <tr>
                                            <th>Coût santé>Projet>Type coût</th>
                                            <th style="text-align:center">Budget</th>
                                            <th style="text-align:center">Coût de référence</th>
                                            <th style="text-align:center">Eac(coût)</th>
                                            <th style="text-align:center">Coût actuel</th>
                                            <th style="text-align:center">Coût restante</th>
                                            <th style="text-align:center">Coût Variance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                    </tbody>
                                </table>
                            </div>
                            <div class="text-right">

                            </div>
                        </div>
                    </div>
                </div> -->

             <!--   <div class="col-lg-12" style="padding-right: 0px; padding-left: 0px;">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div id="tabResponsive">
                                <table class="table table-bordered table-hover table-striped" id="tablePr3" >
                                    <thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black;">
                                        <tr>
                                            <th>Coût santé>Projet>Type coût</th>
                                            <th style="text-align:center">Budget</th>
                                            <th style="text-align:center">Coût de référence</th>
                                            <th style="text-align:center">Eac(coût)</th>
                                            <th style="text-align:center">Coût actuel</th>
                                            <th style="text-align:center">Coût restante</th>
                                            <th style="text-align:center">Coût Variance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                    </tbody>
                                </table>
                            </div>
                            <div class="text-right">

                            </div>
                        </div>
                    </div>
                </div> -->
               <!--  <div class="col-lg-12" style="padding-right: 0px; padding-left: 0px;">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div id="tabResponsive">
                                <table class="table table-bordered table-hover table-striped" id="tablePr4" >
                                    <thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black;">
                                        <tr>
                                            <th>Coût santé>Projet>Type coût</th>
                                            <th style="text-align:center">Budget</th>
                                            <th style="text-align:center">Coût de référence</th>
                                            <th style="text-align:center">Eac(coût)</th>
                                            <th style="text-align:center">Coût actuel</th>
                                            <th style="text-align:center">Coût restante</th>
                                            <th style="text-align:center">Coût Variance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                    </tbody>
                                </table>
                            </div>
                            <div class="text-right">

                            </div>
                        </div>
                    </div>
                </div> -->


            </div>
        </div>
    </div>
</div>
</div>


<script src="/PWA/_catalogs/masterpage/Cout/javascript/moment-with-locales.js"></script>
<script src="/PWA/_catalogs/masterpage/Cout/javascript/jquery.js"></script>
<script src="/PWA/_catalogs/masterpage/Cout/javascript/moment-with-locales.min.js"></script>
<script src="/PWA/_catalogs/masterpage/Cout/javascript/highcharts.js"></script>
<script src="/PWA/_catalogs/masterpage/Cout/javascript/highcharts-more.js"></script>
<script src="/PWA/_catalogs/masterpage/Cout/javascript/exporting.js"></script>
<script src="/PWA/_catalogs/masterpage/Cout/javascript/filter.js"></script>
<script src="/PWA/_catalogs/masterpage/Cout/javascript/selectDirection.js"></script>
<script src="/PWA/_catalogs/masterpage/Cout/javascript/selectSousDir.js"></script>
<script src="/PWA/_catalogs/masterpage/Cout/javascript/selectTypProj.js"></script>
<script src="/PWA/_catalogs/masterpage/Cout/javascript/selectChefProj.js"></script>

<script type="text/javascript">






var responseTabGreen = responseTabGreen || [];
    var urlTabGreen = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction,ProjectId,ProjectName,ProjectBudgetCost,ProjectCost,ProjectActualCost,ProjectRemainingCost,ProjectCostVariance";

    function loadTabGreen() {
//console.log("urlTabGreen= "+urlTabGreen);
        $.ajax({
            url: urlTabGreen,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseTabGreen = responseTabGreen.concat(data.d.results);
                if (data.d.__next) {
                    urlTabGreen = data.d.__next;
                    loadTabGreen();
                }
                var arrPrCost = [];
                var arrPrActCost= [];
                var arrPrBudgCost= [];
                var arrPrRemCost= [];
                var arrPrVarCost= [];
                var arrIdP= [];
                var arrNameP= [];

                var prCostSum = 0;
                var prActCostSum= 0;
                var prBudgCostSum= 0;
                var prRemCostSum= 0;
                var prVarCostSum= 0;
                
                $.each(responseTabGreen, function (key, value) {
                    
                        var idP=value.ProjectId;
                        var nameP=value.ProjectName;
                        var budCostP=value.ProjectBudgetCost;
                        var costP=value.ProjectCost;
                        var actCostP=value.ProjectActualCost;
                        var remCostP=value.ProjectRemainingCost;
                        var varCostP=value.ProjectCostVariance;
                        arrPrCost.push(costP);
                        arrPrActCost.push(actCostP);
                        arrPrBudgCost.push(budCostP);
                        arrPrRemCost.push(remCostP);
                        arrPrVarCost.push(varCostP);
                        arrIdP.push(idP);
                        arrNameP.push(nameP);
                    
                    
                });
                for (var i =0; i < arrIdP.length; i++) {
                    prCostSum+=parseFloat(arrPrCost[i]);
                    prActCostSum+=parseFloat(arrPrActCost[i]);
                    prBudgCostSum+=parseFloat(arrPrBudgCost[i]);
                    prRemCostSum+=parseFloat(arrPrRemCost[i]);
                    prVarCostSum+=parseFloat(arrPrVarCost[i]);
                }
                var tr1;
                tr1 = $("<tr>");
                 tr1.append("<td style='font-weight:bold; color:#337ab7;'></td>");
                tr1.append("<td style='font-weight:bold; color:#337ab7;'> "+ conToMill(prBudgCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold; color:#337ab7;' id='celGreen'></td>");
                tr1.append("<td style='font-weight:bold; color:#337ab7;'> "+ conToMill(prCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold; color:#337ab7;'> "+ conToMill(prActCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold; color:#337ab7;'> "+ conToMill(prRemCostSum) +" </td>");
                tr1.append("<td style='font-weight:bold; color:#337ab7;'> "+ conToMill(prVarCostSum) +" </td>");
                tr1.append("<td style='display:none;'>green</td>");
                $('#tablePr1 tbody').append(tr1); 
                for (var j =0; j < arrIdP.length; j++) {
                    var tr;
                    tr = $("<tr>");
                    tr.append('<td> '+arrNameP[j]+' </td>');
                    tr.append("<td> "+ conToMill(arrPrBudgCost[j]) +" </td>");
                    tr.append("<td></td>");
                    tr.append("<td> "+ conToMill(arrPrCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrActCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrRemCost[j]) +" </td>");
                    tr.append("<td> "+ conToMill(arrPrVarCost[j]) +" </td>");
                    tr.append("<td style='display:none;'>"+arrIdP[j]+"</td>");
                    $('#tablePr1 tbody').append(tr); 
                }
                remplirCostTabGreen();    
            }
        });
    }
    loadTabGreen();
    var urlremplirCostTabGreen = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectBaselineCost";
var responseremplirCostTabGreen = responseremplirCostTabGreen ||[];


function remplirCostTabGreen(){
  $.ajax({url:  urlremplirCostTabGreen,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseremplirCostTabGreen = responseremplirCostTabGreen.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlremplirCostTabGreen = data.d.__next;
                                            remplirCostTabGreen();
                                        } 
              var numRows = document.getElementById("tablePr1").rows.length;
               var tbl = document.getElementById("tablePr1");
               var sumBaseCoste=0;
        for(var i=1;i<numRows;i++){
            var idPrTab=tbl.rows[i].cells[7].innerHTML;
            
            $.each(responseremplirCostTabGreen, function(key, value) 
            { 
                var projId=value.ProjectId;
                if (projId==idPrTab) {
                    var projBaseCost=parseFloat(value.ProjectBaselineCost).toFixed(2);
                    
                    sumBaseCoste+=parseFloat(projBaseCost);
                    tbl.rows[i].cells[2].innerHTML=conToMill(projBaseCost);
                }
            });
        }  
        document.getElementById("celGreen").innerHTML = conToMill(sumBaseCoste);
}           
});
}



var responseTabCost1 = responseTabCost1 || [];
    var urlTabCost1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectName,ProjectBaselineCost&$orderby=ProjectBaselineCost%20desc";

    function loadTabCost1() {
//console.log("urlTabCost1= "+urlTabCost1);
        $.ajax({
            url: urlTabCost1,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseTabCost1 = responseTabCost1.concat(data.d.results);
                if (data.d.__next) {
                    urlTabCost1 = data.d.__next;
                    loadTabCost1();
                }
                var countProj = 0;
                $.each(responseTabCost1, function (key, value) {
                    
                        countProj++;
                        var nomP=value.ProjectName;
                        var projectBaseCost = parseFloat(value.ProjectBaselineCost).toFixed(2);
                        var idP=value.ProjectId;
                        //console.log("projectBaseCost= "+projectBaseCost);
                        var tr;
                        tr = $("<tr style='height:8rem'>");
                        tr.append("<td>" + nomP +" </td>");
                        tr.append("<td> "+ conToMill(projectBaseCost) +" </td>");
                        tr.append("<td></td>");
                        tr.append("<td></td>");
                        tr.append("<td></td>");
                        tr.append("<td style='display:none;'>"+idP+"</td>");
                        $('#tableCostTop tbody').append(tr); 
                        if (countProj==3) {
                            return false;
                        }
                });
                remplirCostTab();    
            }
        });
    }
    loadTabCost1();

var urlremplirCostTab = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Direction,ProjectName,ProjectCost,ProjectActualCost,ProjectCostVariance";
var responseremplirCostTab = responseremplirCostTab ||[];
function remplirCostTab(){

  $.ajax({url:  urlremplirCostTab,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseremplirCostTab = responseremplirCostTab.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlremplirCostTab = data.d.__next;
                                            remplirCostTab();
                                        } 
                                    
                  
              var numRows = document.getElementById("tableCostTop").rows.length;
               var tbl = document.getElementById("tableCostTop");
        for(var i=1;i<numRows;i++){
            var idPrTab=tbl.rows[i].cells[5].innerHTML;
            
            $.each(responseremplirCostTab, function(key, value) 
            { 
                var projId=value.ProjectId;
                if (projId==idPrTab) {
                    
                    var projCost=parseFloat(value.ProjectCost).toFixed(2);
                    tbl.rows[i].cells[2].innerHTML=conToMill(projCost);
                    var projActCost=parseFloat(value.ProjectActualCost).toFixed(2);
                    tbl.rows[i].cells[3].innerHTML=conToMill(projActCost);
                    var projVarCost=value.ProjectCostVariance;
                    tbl.rows[i].cells[4].innerHTML=conToMill(projVarCost);
                }
            });
        }   
}           
});
}

    var responseLoadKPI = responseLoadKPI || [];
    var urlLoadKPI = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction,ProjectCost,ProjectActualCost,ProjectCostVariance";
    function loadKPI() {
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
                var coutprojet = 0;
                var coutactuel = 0;
                var coutvariance = 0;

                $.each(responseLoadKPI, function (key, value) {
                    var projectcost = value.ProjectCost;
                    var actuelcost = value.ProjectActualCost;
                    
                    var projectcostvariance = value.ProjectCostVariance;
                    var direction = value.Direction;
                                            coutprojet = parseFloat(coutprojet)+parseFloat(projectcost);
                        coutactuel = parseFloat(coutactuel)+parseFloat(actuelcost);
                        
                        coutvariance = parseFloat(coutvariance)+parseFloat(projectcostvariance);
                     
                });
                
                document.getElementById("projectcost").innerHTML = conToMill(coutprojet);
                //console.log("coutprojet = " + coutprojet);
                document.getElementById("projectAC").innerHTML = conToMill(coutactuel);
                document.getElementById("projectVC").innerHTML = conToMill(coutvariance);
                loadBaseLineKPI(coutprojet,coutactuel,coutvariance);
                /*document.getElementById("entreprisesKPI").innerHTML = 'Ressources Entreprises';
                document.getElementById("countRessGen").innerHTML = countGenerique;
                document.getElementById("generiquesKPI").innerHTML = 'Ressources Génériques';*/
            }
        });
    }
    loadKPI();

    var responseLoadBaseLineKPI = responseLoadBaseLineKPI || [];
    var urlLoadBaseLineKPI = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectBaselineCost";
    function loadBaseLineKPI(coutprojet,coutactuel,coutvariance) {
        $.ajax({
            url: urlLoadBaseLineKPI,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseLoadBaseLineKPI = responseLoadBaseLineKPI.concat(data.d.results);
                if (data.d.__next) {
                    urlLoadBaseLineKPI = data.d.__next;
                    loadBaseLineKPI(coutprojet,coutactuel,coutvariance);
                }
                var coutreferenceprojet = 0;

                $.each(responseLoadBaseLineKPI, function (key, value) {
                    var projectbaseline = value.ProjectBaselineCost;
                        coutreferenceprojet = parseFloat(coutreferenceprojet)+parseFloat(projectbaseline);
                });
                document.getElementById("projectbc").innerHTML = conToMill(coutreferenceprojet);
                loadCostPortfolioChart(coutprojet,coutactuel,coutvariance,coutreferenceprojet);
            }
        });
    }
    
function loadCostPortfolioChart(coutprojet,coutactuel,coutvariance,coutreferenceprojet) {

$(function () {
var data = coutactuel;
var number=coutprojet;
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
            max: arroundMax(coutprojet),
            plotBands: [{
                from: 0,
                to: parseInt(coutreferenceprojet),
                color: '#ffc470' // orange
            }, {
                from: coutreferenceprojet,
                to: coutprojet,
                color: '#b8deff' // blue
            }]
        }],

        series: [
        {
            name: 'Coût actuel',
            data: [data],
            dataLabels: {
            format: '<span>'+ conToMill(data)+'</span><br/>' 
        },
        }]

    });
});

}


    
    function loadToday() {
        var auj;
        daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        jrSem = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        var dayName = moment().format('dddd');
        if (daysInWeek.indexOf(dayName) > -1) {
            auj = jrSem[daysInWeek.indexOf(dayName)];
            //console.log("date valide= "+auj);
        }
        var dj = moment().format('DD/MM/YYYY');
        document.getElementById("DateJr").innerHTML = auj + " <small>" + dj + "</small>";
        //
    }
    loadToday();
    function showTitle() {
        document.getElementById("projTitle").innerHTML = '<i class="fa fa-dashboard"></i>' + ' Affichage Général';
    }
    showTitle();

    function conToMill(num) {
    if (num==0)
    {
         return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2))  : Math.sign(num)*Math.abs(num)
    }
    if (num>999  && num<1000000 )
    {
         return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(2)) + 'K' : Math.sign(num)*Math.abs(num)
    }
    if (num<-999 && num>-1000000)
    {
         return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(2)) + 'K' : Math.sign(num)*Math.abs(num)
    }
    if (num<0 && num>-1000)
    {
         return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2)) : Math.sign(num)*Math.abs(num)
    }
    if (num>0 && num<1000)
    {
         return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2)) : Math.sign(num)*Math.abs(num)
    }
    if (num>999999)
    {
         return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(2)) + 'M' : Math.sign(num)*Math.abs(num)
    }
    if (num<-999999)
    {
         return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(2)) + 'M' : Math.sign(num)*Math.abs(num)
    }
}
    

</script>
</body>

</html>