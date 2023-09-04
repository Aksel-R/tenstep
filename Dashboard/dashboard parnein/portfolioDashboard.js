<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link href="/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/css/bootstrap.min.css" rel="stylesheet">
    <link href="/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/css/style.css" rel="stylesheet">
    <link href="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Cout/css/achevement.css" rel="stylesheet">
    <link href="/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/css/w3.css" rel="stylesheet">
    <link href="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Cout/css/jquery.dataTables.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

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
                padding: 10px 0px;
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
            background-image: linear-gradient(225deg, #000 20%, #000 80%);
            padding: 10px;
            margin: 0 0 10px 0;
            text-align: right;
            border-radius: 5px;
            box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);

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
        #mylist1 {
      background-color: white;
      background-repeat: no-repeat;
      width: 20%;
      font-size: 14px;
      padding: 10px 5px 10px 5px;
      border-radius: 5px;
    }

    #mylist2 {
      background-color: white;
      background-repeat: no-repeat;
      width: 20%;
      font-size: 14px;
      padding: 10px 5px 10px 5px;
      border-radius: 5px;
    }

    #mylist3 {
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

#s4-ribbonrow {
    position: relative;
    background-color: white;
}

#overlay {
            background: #ffffff;
            color: #666666;
            position: fixed;
            height: 100%;
            width: 100%;
            z-index: 5000;
            top: 0;
            left: 0;
            float: left;
            text-align: center;
            padding-top: 25%;
            opacity: .80;
        }

        #contentBox {
    margin-right: 20px;
    margin-left: 205px;
    min-width: 703px;
}
#sideNavBox {
    float: left;
    margin-left: 20px;
    margin-right: 5px;
    width: 180px;
}

.panel-body {
    padding: 5px;
}

.table td {
    color: black;
    text-align: center;
}

.table>thead>tr>th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
    text-align: center;
}

    </style>
</head>
<body>
            <!-- <div id="overlay">
                <div class="spinner"></div>
                <br/> Please Wait A Moment...
            </div> -->
        <div id="headercolor">
            <div>
                <small class="smallRisks">
                    Portefeuille de projet
                </small>
            </div>

            <div>

                    <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist1" onchange="selectMyList1();MainFilter();">
                        <option value="">Division</option>
                    </select>
                    <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist2" onchange="selectMyList2();MainFilter();">
                        <option value="">Département</option>
                    </select>
                    <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist3" onchange="MainFunction();">
                        <option value="">Projet</option>
                    </select>


            </div>
        </div>

                        <div class="row">
                            <div class="col-lg-12" style="padding-right: 10px;">
                                <h1 class="page-header" id="DateJr" style="margin: 0px  20px; float:right;"></h1>
                                <ol class="breadcrumb" style="width: 100%;box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);">
                                        <li class="active" id="projTitle"></li>
                                </ol>
                            </div>
                        </div>
                    
                        <div class="row">
                            <div class="col-lg-2" style="padding-right: 0px; padding-left: 0px;">
                                <div class="col-lg-12"style="padding-right: 0px; padding-left: 15px;" id="cardNbProjet">
                                    <div class="panel " style="background-image: linear-gradient(225deg, #ebebeb 20%, #bababa 80%);; border-color: #9b9696; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);margin-bottom: 12px;">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xs-4" id="fa1">
                                                    <img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/img/counter.png' class='img-rounded' alt='Cinque Terre' width='45px' height='45px'>
                                                </div>
                                                <div class="col-xs-8 text-right" style="padding-left: 0px;">
                                                    <div style="font-family: ui-monospace;font-size: x-large;    color: black;" id="prcount"></div>
                                                    <div ><h6 style="font-weight: 700;color: black;margin-top: 0px;margin-bottom: 0px;">Nb Projets</h6></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                                <div class="col-lg-12" style="display: none;padding-right: 0px; padding-left: 15px;" id="cardPhaseName">
                                    <div class="panel " style="background-image: linear-gradient(225deg, #ebebeb 20%, #bababa 80%);; border-color: #9b9696; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);margin-bottom: 12px;">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xs-12 text-right" style="padding-left: 0px;">
                                                    <div style="font-family: ui-monospace;font-size: large; color: black;" id="phaseName"></div>
                                                   
                                                </div>
                                                <div class="col-xs-12 text-right" style="padding-left: 0px;">
                                                     <div ><h6 style="font-weight: 700;color: black;margin-top: 0px;margin-bottom: 0px;">Nom Phase</h6></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12" style="display: none;padding-right: 0px; padding-left: 15px;" id="cardTask1">
                                    <div class="panel " style="background-image: linear-gradient(225deg, #ebebeb 20%, #bababa 80%);; border-color: #9b9696; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);margin-bottom: 12px;">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xs-4" id="fa1">
                                                    <img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/img/counter.png'  class='img-rounded' alt='Cinque Terre' width='45px' height='45px'>
                                                </div>
                                                <div class="col-xs-8 text-right" style="padding-left: 0px;">
                                                    <div style="font-family: ui-monospace;font-size: x-large; color: black;" id="tachecount"></div>
                                                   
                                                </div>
                                                <div class="col-xs-12 text-right" style="padding-left: 0px;">
                                                     <div ><h6 style="font-weight: 700;color: black;margin-top: 0px;margin-bottom: 0px;">Nb Phases</h6></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                  <div class="col-lg-12"style="padding-right: 0px; padding-left: 15px;">
                                    <div class="panel " style="background-image: linear-gradient(225deg, #ebebeb 20%, #bababa 80%);; border-color: #9b9696; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);margin-bottom: 12px;">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xs-4" id="fa1">
                                                    <img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/img/work.png' class='img-rounded' alt='Cinque Terre' width='45px'  height='45px'>
                                                </div>
                                                <div class="col-xs-8 text-right" style="padding-left: 0px;">
                                                    <div style="font-family: ui-monospace;font-size: x-large; color: black;" id="caGlobale"></div>
                                                </div>
                                                <div class="col-xs-12 text-right" style="padding-left: 0px;">
                                                    <div><h6 style="font-weight: 700;color: black;margin-top: 0px;margin-bottom: 0px;">Chiffre d'affaire Globale</h6></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12"style="padding-right: 0px; padding-left: 15px;">
                                    <div class="panel " style="background-image: linear-gradient(225deg, #ebebeb 20%, #bababa 80%);; border-color: #9b9696; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);margin-bottom: 12px;">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xs-4" id="fa1">
                                                    <img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/img/calculator.png'  class='img-rounded' alt='Cinque Terre' width='45px' height='45px'>
                                                </div>
                                                <div class="col-xs-8 text-right" style="padding-left: 0px;">
                                                    <div style="font-family: ui-monospace;font-size: x-large; color: black;" id="prcost"></div>
                                                    
                                                </div>
                                                <div class="col-xs-12 text-right" style="padding-left: 0px;">
                                                    <div ><h6 style="font-weight: 700;color: black;margin-top: 0px;margin-bottom: 0px;">Coût</h6></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                              
                                <div class="col-lg-12"style="padding-right: 0px; padding-left: 15px;">
                                    <div class="panel " style="background-image: linear-gradient(225deg, #ebebeb 20%, #bababa 80%);; border-color: #9b9696; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);margin-bottom: 12px;">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xs-4" id="fa1">
                                                    <img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/img/budget.png' class='img-rounded' alt='Cinque Terre' width='45px' height='45px'>
                                                </div>
                                                <div class="col-xs-8 text-right" style="padding-left: 0px;">
                                                    <div style="font-family: ui-monospace;font-size: x-large;color: black;" id="cvariance"></div>
                                                    
                                                </div>
                                                <div class="col-xs-12 text-right" style="padding-left: 0px;">
                                                    <div ><h6 style="font-weight: 700;color: black;margin-top: 0px;margin-bottom: 0px;">Variance de Coût</h6></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12"style="padding-right: 0px; padding-left: 15px;">
                                    <div class="panel " style="background-image: linear-gradient(225deg, #ebebeb 20%, #bababa 80%);; border-color: #9b9696; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);margin-bottom: 12px;">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xs-4" id="fa1">
                                                    <img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/img/budget.png'  class='img-rounded' alt='Cinque Terre' width='45px' height='45px'>
                                                </div>
                                                <div class="col-xs-8 text-right" style="padding-left: 15px;">
                                                    <div style="font-family: ui-monospace;font-size: x-large;color: black;" id="gliss"></div>
                                                    
                                                </div>
                                                <div class="col-xs-12 text-right" style="padding-left: 0px;">
                                                    <div ><h6 style="font-weight: 700;color: black;margin-top: 0px;margin-bottom: 0px;">Glissement</h6></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12"style="padding-right: 0px; padding-left: 15px;">
                                    <div class="panel " style="background-image: linear-gradient(225deg, #ebebeb 20%, #bababa 80%);; border-color: #9b9696; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);margin-bottom: 12px;">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xs-4" id="fa1">
                                                    <img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/img/risk.png' class='img-rounded' alt='Cinque Terre' width='45px' height='45px'>
                                                </div>
                                                <div class="col-xs-8 text-right" style="padding-left: 0px;">
                                                    <div style="font-family: ui-monospace;font-size: x-large;color: black;" id="actRisk"></div>
                                                    
                                                </div>
                                                 <div class="col-xs-12 text-right" style="padding-left: 0px;">
                                                    <div ><h6 style="font-weight: 700;color: black;margin-top: 0px;margin-bottom: 0px;">Risques</h6></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12"style="padding-right: 0px; padding-left: 15px;">
                                    <div class="panel " style="background-image: linear-gradient(225deg, #ebebeb 20%, #bababa 80%);; border-color: #9b9696; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);margin-bottom: 12px;">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xs-4" id="fa1">
                                                    <img  src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/img/project.png'  class='img-rounded' alt='Cinque Terre' width='45px' height='45px'>
                                                </div>
                                                <div class="col-xs-8 text-right" style="padding-left: 0px;">
                                                    <div style="font-family: ui-monospace;font-size: x-large;color: black;" id="actIssue"></div>
                                                    
                                                </div>
                                                <div class="col-xs-12 text-right" style="padding-left: 0px;">
                                                    <div ><h6 style="font-weight: 700;color: black;margin-top: 0px;margin-bottom: 0px;">Problèmes</h6></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12"style="padding-right: 0px; padding-left: 15px;">
                                    <div class="panel " style="background-image: linear-gradient(225deg, #ebebeb 20%, #bababa 80%);; border-color: #9b9696; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);margin-bottom: 12px;">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xs-4" id="fa1">
                                                    <img  src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/img/project.png'   class='img-rounded' alt='Cinque Terre' width='45px'  height='45px'>
                                                </div>
                                                <div class="col-xs-8 text-right" style="padding-left: 0px;">
                                                    <div style="font-family: ui-monospace;font-size: x-large;color: black;" id="nbAccid"></div>
                                                    
                                                </div>
                                                <div class="col-xs-12 text-right" style="padding-left: 0px;">
                                                    <div ><h6 style="font-weight: 700;color: black;margin-top: 0px;margin-bottom: 0px;">Nb Accident</h6></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        <div class="col-lg-10" style="padding-right: 10px; padding-left: 10px;">
                            <div class="col-lg-12 col-sx-12"  style="padding-right: 7px; padding-left: 0px;" id="phaseProj">
                                <div class="panel panel-default" style=" box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);margin-bottom: 10px;">
                                    <div class="panel-heading" id="tabPanel">
                                        <h2 class="panel-title" id="chartTitle1" style="text-align: center; font-size: 120%;font-weight: bold;">Projets par phase</h3>
                                    </div>
                                    <div class="panel-body">
                                            <div class="row" id="Divprojchart">
                                                
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-sx-12" style="padding-right: 0px; padding-left: 7px;" >
                                <div class="panel panel-default" style=" box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);margin-bottom: 10px;">
                                    <div class="panel-heading" id="tabPanel">
                                        <h2 class="panel-title" style="text-align: center; font-size: 120%;font-weight: bold;" id="pieChartTitle">Chiffre d'affaire par division </h2>
                                    </div>
                                    <div class="panel-body" > 
                                            <div id="Divbarsline">
                                                
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12" style="padding-right: 0px; padding-left: 0px;">
                                <div class="panel panel-default" style=" box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);">
                                    <div class="panel-body">
                                        <div id="tabResponsive">
                                            <table class="table  table-hover table-striped" id="tableaux" >
                                                <thead style="background-image: linear-gradient(225deg, #000 20%, #000 80%);color: white;"id="tabThead">
                                                    <tr>
                                                        <th style="border-radius:10px 0px 0px 0px; width: 20%; text-align: left;">NOM DE PROJET</th>
                                                        <th style="text-align: center;"></th>
                                                        <th style="text-align: center;">Ingénieur du projet</th>
                                                        <th style="text-align: center;">Date début</th>
                                                        <th style="text-align: center;">Date fin</th>
                                                        <th style="text-align: center;" id="CACol">Chiffre d'affaire</th>
                                                        <th style="text-align: center;"id="CostCol">Coût</th>
                                                        <th style="text-align: center;"id="MargeCol">Marge</th>
                                                        <th style="text-align: center;"id="SatCol">Satisfaction client</th>
                                                        <th style="text-align: width: 15%;">% Achevé</th>
                                                        <th style="text-align: center;">Glissement</th>
                                                        <th style="text-align: center;">KPI Coût</th>
                                                        <th style="text-align: center;">Dernière Modification</th>
                                                        <th style="text-align: center; border-radius:0px 10px 0px 0px;">Tâches critiques</th>
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
                            <div class="col-lg-12" style="padding-right: 0px; padding-left: 0px;display: none" id="Divtableaux1" >
                                <div class="panel panel-default" style=" box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);">
                                    <div class="panel-body">
                                        <div id="tabResponsive">
                                            <table class="table  table-hover table-striped" id="tableaux1"  style="display: none">
                                                <thead style="background-image: linear-gradient(225deg, #000 20%, #000 80%);color: white;">
                                                    <tr>
                                                        <th style="border-radius:10px 0px 0px 0px; width: 25%; text-align: left;">Nom phase</th>
                                                        <th style="width: 9%;">Date début</th>
                                                        <th style="width: 9%;">Date fin</th>
                                                        <th style="width: 9%;">Budget</th>
                                                        <th style="width: 9%;">Coût</th>
                                                        <th style="width: 9%;">Coût actuel</th>
                                                        <th style="width: 9%;">Durée</th>
                                                        <th >Durée actuel</th>
                                                        <th style="">% Achevé</th>
                                                        <th style="text-align: center; border-radius:0px 10px 0px 0px;">Criticité</th>
                                                        
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
                            <div class="col-lg-12" style="padding-right: 0px; padding-left: 0px;display: none" id="Divtableaux2" >
                                <div class="panel panel-default" style=" box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);">
                                    <div class="panel-body">
                                        <div id="tabResponsive">
                                            <table class="table  table-hover table-striped" id="tableaux2"  style="display: none">
                                                <thead style="background-image: linear-gradient(225deg, #000 20%, #000 80%);color: white;">
                                                    <tr>
                                                        <th style="border-radius:10px 0px 0px 0px; width: 15%; text-align: left;">Nom phase</th>
                                                        <th style="width: 11.83%;">Tâches En Retard</th>
                                                        <th style="width: 11.83%;">Date Début</th>
                                                        <th style="width: 11.83%;">Date Fin</th>
                                                        <th style="width: 14%;">% Achevé</th>
                                                        <th style="width: 11.83%;">Durée</th>
                                                        <th style="width: 11.83%;">Date Fin Référence</th>
                                                        
                                                        <th style="">Glissement</th>
                                                        <th style="text-align: center; border-radius:0px 10px 0px 0px;">Criticité</th> 
                                                                                                           
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
                        </div>
                    </div>
        


        




        <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>
        <script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/javascript/jquery3.4.1.js"></script>
        <script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/javascript/custom.min.js"></script>

        <script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/stock/modules/accessibility.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.min.js"></script>

        <script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/javascript/nprogress.js"></script>
        <script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/javascript/MainFilter.js"></script>
        <script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/javascript/MainFunction.js"></script>
        <script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/javascript/selectMyList1.js"></script>
        <script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/javascript/selectMyList2.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>



                <script type="text/javascript">
                /*jQuery(document).ready(function() {
                            jQuery('#overlay').fadeOut(2000);
                        });*/
                //-----------------------------------------------------------------------------------------------------------------------------
                        //Premier affichage par défaut
                        //alert("Ce rapport est en cours de modification");
                          function loadToday() {
        var auj;
        daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        jrSem = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        var dayName = moment().format('dddd');
        if (daysInWeek.indexOf(dayName) > -1) {
            auj = jrSem[daysInWeek.indexOf(dayName)];
            ////////console.log("date valide= "+auj);
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
                            if (num == 0) {
                                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
                            }
                            if (num < 1000000 && num > 999) {
                                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(2)) + 'K' : Math.sign(num) * Math.abs(num)
                            }
                            if (num < -999 && num > -1000000) {
                                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(2)) + 'K' : Math.sign(num) * Math.abs(num)
                            }
                            if (num < 0 && num > -1000) {
                                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
                            }
                            if (num > 0 && num < 1000) {
                                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
                            }
                            if (num > 999999) {
                                return Math.abs(num) > 999999 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(2)) + 'M' : Math.sign(num) * Math.abs(num)
                            }
                            if (num < -999999) {
                                return Math.abs(num) > 999999 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(2)) + 'M' : Math.sign(num) * Math.abs(num)
                            }

                        }
var arrPhaseSort=["Engineering","Approvisionnement","Installation","Fin de Montage","Mise en Service","Réception Provisoire","Réception Définitive"];
//Load All Data in Select Lists
        //Fonction qui permet d'afficher les list des Departement
        var responseDiv = responseDiv || [];
        var urlDiv = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Division,ProjectId"
        function LoadDiv() {
            $.ajax({
                url: urlDiv,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseDiv = responseDiv.concat(data.d.results);
                    if (data.d.__next) {
                        urlDiv = data.d.__next;
                        LoadDiv();
                    }

                    $.each(responseDiv, function (key, value) {


                        var division = value.Division;
                        var projetId = value.ProjectId;

                        if (value.Division!=null) {
                            $('#mylist1').append($('<option>',
                                                    {
                                                        text : division,
                                                          value:division
                                                    }));

                                                var opt = {};
                                                $("#mylist1 > option").each(function () {
                                                    if (opt[$(this).text()]) {
                                                        $(this).remove();
                                                    } else {
                                                        opt[$(this).text()] = $(this).val();
                                                    }
                                                });
                        }

                    });
                }
            });
        }
        LoadDiv();
        //Fonction qui permet d'afficher les list des Departement
        var responseDept = responseDept || [];
        var urlDept = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Service,ProjectId"
        function LoadDept() {
            $.ajax({
                url: urlDept,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseDept = responseDept.concat(data.d.results);
                    if (data.d.__next) {
                        urlDept = data.d.__next;
                        LoadDept();
                    }

                    $.each(responseDept, function (key, value) {


                        var projectService = value.Service;
                        var projetId = value.ProjectId;

                        if (value.Service!=null) {
                            $('#mylist2').append($('<option>',
                                                    {
                                                        text : projectService,
                                                          value:projectService
                                                    }));

                                                var opt = {};
                                                $("#mylist2 > option").each(function () {
                                                    if (opt[$(this).text()]) {
                                                        $(this).remove();
                                                    } else {
                                                        opt[$(this).text()] = $(this).val();
                                                    }
                                                });
                        }

                    });
                }
            });
        }
        LoadDept();

             //Fonction qui permet d'afficher liste de Projet  
        var responsePhase = responsePhase || [];
        var urlPhase = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27 and ProjectId%20ne%20guid%27432c1159-9039-ed11-9f81-00155d00ae1f%27";
        function LoadProjectGovernant() {
            $.ajax({
                url: urlPhase,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responsePhase = responsePhase.concat(data.d.results);
                    if (data.d.__next) {
                        urlPhase = data.d.__next;
                        LoadProjectGovernant();
                    }

                    $.each(responsePhase, function (key, value) {
                        var nomprojet = value.ProjectName;
                        var projetId = value.ProjectId;
                        if (nomprojet != "") {
                            var prName = nomprojet;


                            $('#mylist3').append($('<option>',
                                {
                                    text : prName,
                                    value:projetId
                                }));
                        }
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
            });
        }
        LoadProjectGovernant();
                        //KPIs 
                        var responseDataSum = responseDataSum || [];
                        var urlDataSum = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Prixderevienttotal,ProjectCostVariance,PrixdeventeCATND,ProjectId&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27";

                        function loadDataSum() {
                            var projCost = 0;
                            var projcostvariance = 0;
                            var sumPCA = 0;
                            var pworkvariance = 0;
                            var countProj = 0;

                            $.ajax({
                                url: urlDataSum,
                                method: "GET",
                                dataType: "json",
                                headers: {
                                    Accept: "application/json;odata=verbose"
                                },
                                success: function(data) {
                                    responseDataSum = responseDataSum.concat(data.d.results);
                                    if (data.d.__next) {
                                        urlDataSum = data.d.__next;
                                        loadDataSum();
                                    }

                                    $.each(responseDataSum, function(key, value) {
                                        countProj++;
                                        var pCost = 0;
                                        if (value.Prixderevienttotal!=null) {
                                            pCost=parseInt(value.Prixderevienttotal)
                                        }
                                        var pcostVar = parseInt(value.ProjectCostVariance);

                                        var pCA = 0;
                                        if (value.PrixdeventeCATND != null) {
                                            pCA = parseFloat(value.PrixdeventeCATND);
                                        }




                                        projCost = projCost + pCost;
                                        projcostvariance = projcostvariance + pcostVar;
                                        sumPCA = parseFloat(sumPCA + pCA);



                                    });


                                    document.getElementById("prcost").innerHTML = conToMill(projCost);
                                    document.getElementById("cvariance").innerHTML = conToMill(projcostvariance);
                                    document.getElementById("caGlobale").innerHTML = conToMill(parseFloat(sumPCA).toFixed(0));
                                    document.getElementById("prcount").innerHTML = conToMill(countProj);
                                }
                            });
                        }
                        loadDataSum();

                        // //Fonctions qui permet d'afficher le glissement 
                        // var urlDateGlissement = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectStartDate,ProjectFinishDate&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27";
                        // var responseDateGlissement = responseDateGlissement || [];

                        // function getDateGlissement() {
                        //     $.ajax({
                        //         url: urlDateGlissement,
                        //         method: "GET",
                        //         dataType: "json",
                        //         headers: {
                        //             Accept: "application/json;odata=verbose"
                        //         },
                        //         success: function(data) {
                        //             responseDateGlissement = responseDateGlissement.concat(data.d.results);
                        //             if (data.d.__next) {
                        //                 urlDateGlissement = data.d.__next;
                        //                 getDateGlissement();
                        //             }
                        //             var idProjetG = [];
                        //             var dateDebProjetG = [];
                        //             var dateFinProjetG = [];
                        //             var dateFinRefG = [];

                        //             $.each(responseDateGlissement, function(key, value) {


                        //                 var idP = value.ProjectId;
                        //                 var projStartDate = value.ProjectStartDate;
                        //                 var projfinshtDate = value.ProjectFinishDate;
                        //                 if (idProjetG.indexOf(idP) == -1) {
                        //                     idProjetG.push(idP);
                        //                     dateDebProjetG.push(projStartDate);
                        //                     dateFinProjetG.push(projfinshtDate);
                        //                     dateFinRefG.push("");
                        //                 }



                        //             });
                        //             calculGlissementGlobal(idProjetG, dateDebProjetG, dateFinProjetG, dateFinRefG);


                        //         }
                        //     });
                        // }
                        // getDateGlissement();




                        // var urlDateBaseGlissement = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectBaselineFinishDate";
                        // var responseBaseDateGlissement = responseBaseDateGlissement || [];

                        // function calculGlissementGlobal(idProjetG, dateDebProjetG, dateFinProjetG, dateFinRefG) {
                        //     $.ajax({
                        //         url: urlDateBaseGlissement,
                        //         method: "GET",
                        //         dataType: "json",
                        //         headers: {
                        //             Accept: "application/json;odata=verbose"
                        //         },
                        //         success: function(data) {
                        //             responseBaseDateGlissement = responseBaseDateGlissement.concat(data.d.results);
                        //             if (data.d.__next) {
                        //                 urlDateBaseGlissement = data.d.__next;
                        //                 calculGlissementGlobal(idProjetG, dateDebProjetG, dateFinProjetG, dateFinRefG);
                        //             }
                        //             var durReel = [];
                        //             var durRef = [];
                        //             var glissArray = [];
                        //             var avgGliss = 0;
                        //             var sumGliss = 0;


                        //             $.each(responseBaseDateGlissement, function(key, value) {
                        //                 var idProjBaseline = value.ProjectId;
                        //                 var finRefProj = value.ProjectBaselineFinishDate;
                        //                 for (var i = 0; i < idProjetG.length; i++) {
                        //                     if (idProjBaseline == idProjetG[i]) {
                        //                         dateFinRefG[i] = finRefProj;
                        //                     }
                        //                     //idProjetG[i]
                        //                 }

                        //             });
                        //             moment.locale('fr');


                        //             // //////console.log("idProjetG = "+ idProjetG.join());
                        //             // //////console.log("dateDebProjetG = "+ dateDebProjetG.join());
                        //             // //////console.log("dateFinProjetG = "+ dateFinProjetG.join());
                        //             // //////console.log("dateFinRefG = "+ dateFinRefG.join());

                        //             // //////console.log("idProjetG length = "+ idProjetG.length);
                        //             // //////console.log("dateDebProjetG length = "+ dateDebProjetG.length);
                        //             // //////console.log("dateFinProjetG length = "+ dateFinProjetG.length);
                        //             // //////console.log("dateFinRefG length = "+ dateFinRefG.length);

                        //             for (var i = 0; i < dateFinRefG.length; i++) {
                        //                 if (dateFinRefG[i] != "") {
                        //                     var refFinish = moment(dateFinRefG[i]);
                        //                     var dateFin = moment(dateFinProjetG[i]);
                        //                     var daetDeb = moment(dateDebProjetG[i]);
                        //                     var realDuration = dateFin.diff(daetDeb, 'days');
                        //                     var baseDuration = refFinish.diff(daetDeb, 'days');
                        //                     var gliss = 0;
                        //                     gliss = parseFloat(((realDuration - baseDuration) / realDuration) * 100);
                        //                     if (gliss < 0) {
                        //                         gliss = 0;
                        //                     }
                        //                     ////////console.log("gliss= "+gliss);
                        //                     glissArray.push(gliss);
                        //                 }
                        //             }
                        //             ////////console.log("glissArray= "+glissArray.join());
                        //             for (var i = 0; i < glissArray.length; i++) {
                        //                 sumGliss += parseFloat(glissArray[i])
                        //             }
                        //             ////////console.log("sumGliss= "+ sumGliss);
                        //             avgGliss = parseFloat(sumGliss / glissArray.length).toFixed(0);
                        //             ////////console.log("avgGliss= "+avgGliss);
                        //             document.getElementById("gliss").innerHTML = avgGliss + "%";
                        //         }
                        //     });
                        // }

                        //Load Number Of All Issues
                        var responseAllIssues = responseAllIssues || [];
                        var urlAllIssues = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues?$select=Title"

                        function NumberOfAllIssues() {
                            var nbreIssue = 0;

                            $.ajax({
                                url: urlAllIssues,
                                method: "GET",
                                dataType: "json",
                                headers: {
                                    Accept: "application/json;odata=verbose"
                                },
                                success: function(data) {
                                    responseAllIssues = responseAllIssues.concat(data.d.results);
                                    if (data.d.__next) {
                                        urlAllIssues = data.d.__next;
                                        NumberOfAllIssues();
                                    }

                                    $.each(responseAllIssues, function(key, value) {
                                        var titreIssue = value.Title;
                                        if (titreIssue != null) {
                                            nbreIssue++;
                                        }

                                    });
                                    document.getElementById("actIssue").innerHTML = nbreIssue;
                                }
                            });
                        }
                        NumberOfAllIssues();
                        //_spBodyOnLoadFunctionNames.push("NumberOfAllIssues");



                        //Load Number Of All Risks
                        var responseAllRsiks = responseAllRsiks || [];
                        var urlAllRisks = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks?$select=Title"

                        function NumberOfAllRisks() {
                            var nbreRisks = 0;

                            $.ajax({
                                url: urlAllRisks,
                                method: "GET",
                                dataType: "json",
                                headers: {
                                    Accept: "application/json;odata=verbose"
                                },
                                success: function(data) {
                                    responseAllRsiks = responseAllRsiks.concat(data.d.results);
                                    if (data.d.__next) {
                                        urlAllRisks = data.d.__next;
                                        NumberOfAllRisks();
                                    }

                                    $.each(responseAllRsiks, function(key, value) {
                                        var titreRisks = value.Title;
                                        if (titreRisks != null) {
                                            nbreRisks++;
                                        }

                                    });
                                    document.getElementById("actRisk").innerHTML = nbreRisks;
                                }
                            });
                        }
                        NumberOfAllRisks();


                        //Load BarChart for GOVERNANCE
                        document.getElementById("Divprojchart").innerHTML='<figure class="highcharts-figure" style="width:100%;"> <div id="container"></div> </figure>';
                        var responseGovernancePhase = responseGovernancePhase || [];
                        var urlGovernancePhase = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=PhaseduProjet,ProjectName,ITPhase,Service&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27%20and%20PhaseduProjet%20ne%20%27Avance%27";

                        function LoadBarGovernancePhase() {
                            $.ajax({
                                url: urlGovernancePhase,

                                method: "GET",
                                dataType: "json",
                                headers: {
                                    Accept: "application/json;odata=verbose"
                                },
                                success: function(data) {
                                    responseGovernancePhase = responseGovernancePhase.concat(data.d.results);
                                    if (data.d.__next) {
                                        urlGovernancePhase = data.d.__next;
                                        LoadBarGovernancePhase();
                                    }
                                    var arrPhase=[];
                                    var arrProjN=[];
                                    var projData=[];
                                    var arrPh=[];
                                    $.each(responseGovernancePhase, function(key, value) {
                                        var nomP=value.ProjectName;
                                        var phase = '';
                                        var departement=value.Service;
                                        if (departement=="IT Management") {
                                            phase = value.ITPhase;
                                        }
                                        else if (departement=="Power System Management") {
                                            phase = value.PhaseduProjet;
                                        }
                                        
                                        console.log('phase = '+phase);
                                        //var arrDat=[];
                                        // if (arrPhase.indexOf(phase)<0) {
                                        //     arrPhase.push(phase);
                                        // }  
                                        if (phase!=null) {
                                            arrPh.push(phase);                                    
                                            arrProjN.push(nomP);                                            
                                        }

                                        //trait...
                                        ////console.log("___ __________ ___________ __________");
                                        ////console.log("arrPhase1= "+arrPh);
                                        ////console.log("arrProjN1= "+arrProjN);
                                        ////console.log("__________________________________");
                                        sort(arrPh,arrProjN,arrPhaseSort);
                                        ////console.log("__________________________________");
                                        ////console.log("arrPhase2= "+arrPh);
                                        ////console.log("arrProjN2= "+arrProjN);
                                        ////console.log("___ __________ ___________ __________");
                                        //**********************************************
                                        // var index=arrPhase.indexOf(phase);
                                        // for (var i = 0; i <= index; i++) {
                                        //     if (i!=index) {arrDat[i]=0;}
                                        //     else if (i==index) {arrDat[i]=1;}
                                        // }
                                        // projData.push(arrDat);
                    });
                    ////////console.log("arrProjN= "+arrProjN);
                    for (var ci = 0; ci < arrPh.length; ci++) {
                        var ph=arrPh[ci];
                        if (arrPhase.indexOf(ph)<0) {
                            arrPhase.push(ph);
                        } 

                        
                        var arrDat=[];
                        var index=arrPhase.indexOf(ph)
                        
                        for (var i = 0; i <= index; i++) {
                            if (i!=index) {arrDat[i]=0;}
                            else if (i==index) {arrDat[i]=1;}
                        }
                        projData.push(arrDat);
                    }
                    var arrSeries=[];
                                    for (var j = 0; j < arrProjN.length; j++) {
                                        arrSeries[j]={
                                            name: arrProjN[j],
                                            data: projData[j]
                                        }
                                    }
                                    
                                    Highcharts.chart('container', {
                                        chart: {
                                            type: 'bar'
                                        },
                                        title: {
                                            text: 'Stacked bar chart'
                                        },
                                        xAxis: {
                                            categories: arrPhase
                                        },
                                        yAxis: {
                                            min: 0,
                                            title: {
                                                text: 'Projets'
                                            }
                                        },
                                        legend: {
                                            reversed: true
                                        },
                                        plotOptions: {
                                            series: {
                                                stacking: 'normal'
                                            }
                                        },
                                        series: arrSeries
                                    });


                                }
                            });
                        }
                        LoadBarGovernancePhase();

                        var colors = ["#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];


                        //Load Graph For ProjectType
                        
                        document.getElementById("Divbarsline").innerHTML='<figure class="highcharts-figure" style="width:97%;"> <div id="container1"></div> </figure>';
                        var responsePhaseChart = responsePhaseChart || [];
                        var urlPhaseChart = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Service,Division,PrixdeventeCATND&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27";

                        function LoadProjectType() {
                            $.ajax({
                                url: urlPhaseChart,
                                method: "GET",
                                dataType: "json",
                                headers: {
                                    Accept: "application/json;odata=verbose"
                                },
                                success: function(data) {
                                    responsePhaseChart = responsePhaseChart.concat(data.d.results);
                                    if (data.d.__next) {
                                        urlPhaseChart = data.d.__next;
                                        LoadProjectType();
                                    }
                                   
                                    var pievalues = [];
                                    var labels = [];
                                    $.each(responsePhaseChart, function(key, value) {
                                        if (value.Division!=null) {
                                            var division = value.Division;
                                            console.log("division= "+division);
                                            var pCA = 0;
                                            if (value.PrixdeventeCATND != null) {
                                                pCA = parseFloat(value.PrixdeventeCATND);
                                            }
                                            if (labels.indexOf(division) == -1) {
                                                labels.push(division);
                                                pievalues.push(pCA);
                                            } else {
                                                pievalues[labels.indexOf(division)] = parseFloat(pievalues[labels.indexOf(division)] + pCA);
                                            }
                                            
                                        }

                                    });
                                    var arrSeries=[];
                                    for (var i = 0; i < labels.length; i++) {
                                        var arrdata=[labels[i],pievalues[i]]
                                        arrSeries[i]=arrdata;
                                    }
                                    ////console.log("pievalues= "+pievalues);
                                    Highcharts.chart('container1', {
                                        chart: {
                                            type: 'pie',
                                            options3d: {
                                                enabled: true,
                                                alpha: 0
                                            }
                                        },
                                        title: {
                                            text: "Chiffre d'affaire par division"
                                        },
                                        
                                        plotOptions: {
                                            pie: {
                                                innerSize: 200,
                                                depth: 0,
                                                showInLegend: true
                                            }
                                        },
                                        series: [{
                                            name: "Chiffre d'affaire par division",
                                            data: arrSeries
                                        }]
                                    });

                                }
                            });
                        }
                        LoadProjectType();

                         //Load All Value in table 

                        //Table Project 
    
        //function remplirTab00(borne1,borne2,borne3,borne4) {
            var responseTabProj = responseTabProj || [];
            var urlTabProj = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,Toléranceavertissement,ToléranceAlert,ProjectOwnerName,ProjectStartDate,ProjectFinishDate,ProjectDuration,Prixderevienttotal,ProjectPercentCompleted,ProjectWorkspaceInternalUrl,PrixdeventeCATND,SatisfactionClient,ProjectFinishVariance,MargeRévisé,CostKPI,ProjectModifiedDate&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27";
            console.log('urlTabProj '+urlTabProj);
            function LoadTableProjects() {

                $.ajax({
                    url: urlTabProj,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseTabProj = responseTabProj.concat(data.d.results);
                        if (data.d.__next) {
                            urlTabProj = data.d.__next;
                            LoadTableProjects();
                        }
                        var ArrProjetId=[]
                        var ArrNomProjet=[];
                        var ArrLinkProjectSite=[];
                        var ArrPOwner=[];
                        var ArrProjStartDate=[];
                        var ArrProjfinishdate=[];
                        var ArrPCA=[];
                        var ArrPCost=[];
                        var ArrMarge=[];
                        var ArrSatisfaction=[];
                        var ArrPrPercentCpl=[];
                        var ArrBaseDuration=[];
                        var ArrDuration=[];
                        var ArrGliss=[];
                        var ArrFinishVariance=[];
                        var ArrCostKPI=[];
                        var ArrProjectModifiedDate=[];
                        var ArrNbTacheCritiques=[];
                        var ArrToleranceavertissement=[];
                        var ArrToleranceAlert=[];
                        $.each(responseTabProj, function (key, value) {

                            var projetId = value.ProjectId;

                            var nomProjet = value.ProjectName;
                            var pOwner = value.ProjectOwnerName;
                            var projStartDate = value.ProjectStartDate;
                            var projfinishdate = value.ProjectFinishDate;
                            //var projCost = parseFloat(value.ProjectCost).toFixed(3);
                            var prPercentCpl = parseFloat(value.ProjectPercentCompleted).toFixed(0);
                            var linkProjectSite = value.ProjectWorkspaceInternalUrl;
                            var costKPI=value.CostKPI;
                            var projectModifiedDate=value.ProjectModifiedDate;
                            if (costKPI==null) {
                                costKPI="";
                            }
                            var derniereMod="";
                            if (projectModifiedDate!=null) {
                                derniereMod=moment(projectModifiedDate).format('DD/MM/YYYY');
                            }
                            var pCA =0;
                            if (value.PrixdeventeCATND!=null) {
                                pCA = parseFloat(value.PrixdeventeCATND);
                            }
                            var marge=0;
                            if (value.MargeRévisé!=null) {
                                marge=parseFloat(value.MargeRévisé);
                            }
                            
                            moment.locale('fr');

                            if (projStartDate != null) {
                                var projStartDate = moment(projStartDate).format('L');
                            }

                            if (projfinishdate != null) {
                                var projfinishdate = moment(projfinishdate).format('L');
                            }


                            //var projWork = value.Work;
                            var pCost = 0;
                            if (value.Prixderevienttotal!=null) {
                                pCost=parseInt(value.Prixderevienttotal)
                            }
                            var toleranceAvert=0;
                            if (value.Toléranceavertissement!=null) {
                                toleranceAvert=value.Toléranceavertissement;
                            }
                            var toleranceAlert=0;
                            if (value.ToléranceAlert) {
                                toleranceAlert=value.ToléranceAlert;
                            }
                            var satisfaction=value.SatisfactionClient;
                            var duration=parseFloat(value.ProjectDuration/8).toFixed(0);
                            var finishVariance=parseFloat(value.ProjectFinishVariance/8).toFixed(0);
                            ArrProjetId.push(projetId);
                            ArrNomProjet.push(nomProjet);
                            ArrLinkProjectSite.push(linkProjectSite);
                            ArrPOwner.push(pOwner);
                            ArrProjStartDate.push(projStartDate);
                            ArrProjfinishdate.push(projfinishdate);
                            ArrPCA.push(pCA);
                            ArrPCost.push(pCost);
                            ArrMarge.push(marge);
                            ArrSatisfaction.push(satisfaction);
                            ArrPrPercentCpl.push(prPercentCpl);
                            ArrDuration.push(duration);
                            ArrBaseDuration.push("Pas de reférence");
                            ArrGliss.push("Pas de reférence");
                            ArrFinishVariance.push(finishVariance);
                            ArrCostKPI.push(costKPI);
                            ArrProjectModifiedDate.push(derniereMod);
                            ArrNbTacheCritiques.push(0);
                            ArrToleranceavertissement.push(toleranceAvert);
                            ArrToleranceAlert.push(toleranceAlert);

                            
                        });
                        for (var i = 0; i < ArrProjetId.length; i++) {
                            tableBas00(ArrProjetId[i],i,ArrProjetId.length,ArrProjetId,ArrNomProjet,ArrLinkProjectSite,ArrPOwner,ArrProjStartDate,ArrProjfinishdate,ArrPCA,ArrPCost,ArrMarge,ArrSatisfaction,ArrPrPercentCpl,ArrBaseDuration,ArrGliss,ArrDuration,ArrFinishVariance,ArrCostKPI,ArrProjectModifiedDate,ArrNbTacheCritiques,ArrToleranceavertissement,ArrToleranceAlert);
                        }

                    }
                });

            }
            LoadTableProjects();
       
        
        function tableBas00(idprj,indice,taille,ArrProjetId,ArrNomProjet,ArrLinkProjectSite,ArrPOwner,ArrProjStartDate,ArrProjfinishdate,ArrPCA,ArrPCost,ArrMarge,ArrSatisfaction,ArrPrPercentCpl,ArrBaseDuration,ArrGliss,ArrDuration,ArrFinishVariance,ArrCostKPI,ArrProjectModifiedDate,ArrNbTacheCritiques,ArrToleranceavertissement,ArrToleranceAlert) {
           var responseTabProjBase00 = responseTabProjBase00 || [];
            var urlTabProjBase00 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Projects(guid'"+idprj+"')/Tasks";
            function LoadTabProjBase00() {

                $.ajax({
                    url: urlTabProjBase00,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseTabProjBase00 = responseTabProjBase00.concat(data.d.results);
                        if (data.d.__next) {
                            urlTabProjBase00 = data.d.__next;
                            LoadTabProjBase00();
                        }
                        
                        $.each(responseTabProjBase00, function (key, value) {
                              var critique=value.TaskIsCritical;
                              if (critique==true) {
                                ArrNbTacheCritiques[ArrProjetId.indexOf(idprj)]+=1;
                              }                          
                        });
                        if (indice==(taille-1)) {
                            var sumVariance=0;
                            for (var i = 0; i < ArrNomProjet.length; i++) {
                                sumVariance=parseInt(parseInt(sumVariance)+parseInt(ArrFinishVariance[i]));
                            
                                var tr;
                                tr = $("<tr class='even pointer'>");
                                tr.append("<td style='text-align: left;'>" + ArrNomProjet[i] + "</td>");//0
                                tr.append("<td><a href='" + ArrLinkProjectSite[i] + "' id='redirectLink' target='_blank'><img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/img/link.png' class='img-rounded' alt='Cinque Terre' width='20px' height='20px'></a></td>");//1
                                tr.append("<td>" + ArrPOwner[i] + "</td>"); //2
                                tr.append("<td>" + ArrProjStartDate[i] + "</td>"); //3
                                tr.append("<td>" + ArrProjfinishdate[i] + "</td>"); //4
                                
                                tr.append("<td>" + conToMill(parseFloat(ArrPCA[i]).toFixed(0)) + " </td>");
                                tr.append("<td>" + conToMill(ArrPCost[i]) + " </td>");//5
                                tr.append("<td>" + conToMill(parseFloat(ArrMarge[i]).toFixed(0)) + " </td>");
                                //tr.append("<td>" + satisfaction + "</td>");
                                
                                if (ArrSatisfaction[i]=="Satisfait") {
                                    tr.append("<td><i class='fa-solid fa-face-grin-hearts fa-3x' style='color:#23a113;'></i></td>");
                                }else if (ArrSatisfaction[i]=="Non Satisfait") {
                                    tr.append("<td><i class='fa-solid fa-face-angry fa-3x' style='color:#f53900;'></i></td>");
                                }else if (ArrSatisfaction[i]=="Moyennement satisfait") {
                                    tr.append("<td><i class='fa-solid fa-face-rolling-eyes fa-3x' style='color:#f59e00;'></i></td>");
                                }
                                else{
                                    tr.append("<td></td>");
                                }
                                tr.append('<td style="text-align:center;font-size: medium;">'+ArrPrPercentCpl[i]+'%<progress id="" max="100" value="'+ArrPrPercentCpl[i]+'" style="width: 100%; height:4vh;"></progress></td>'); //10
                                
                                //*********glisss************//
                                if (ArrToleranceavertissement[i]==0 && ArrToleranceAlert[i]==0) {
                                    if (ArrFinishVariance[i]<=0) {
                                        tr.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgb(51 114 12))'>" + ArrFinishVariance[i] + " Jours</td>"); 
                                    }else{
                                        tr.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))'>" + ArrFinishVariance[i] + " Jours</td>"); 
                                    }
                                }else{
                                    if (ArrFinishVariance[i]<=ArrToleranceavertissement[i]) {
                                        tr.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgb(51 114 12))'>" + ArrFinishVariance[i] + " Jours</td>");
                                    }else if ((ArrFinishVariance[i]>=ArrToleranceavertissement[i])&&(ArrFinishVariance[i]<ArrToleranceAlert[i])) {
                                        tr.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgb(216 255 0 / 85%));'>" + ArrFinishVariance[i] + " Jours</td>");
                                    }else if (ArrFinishVariance[i]>=ArrToleranceAlert[i]) {
                                        tr.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))'>" + ArrFinishVariance[i] + " Jours</td>");
                                    }
                                }
                                //********* fin glisss************//
                                

                                if (ArrCostKPI[i]=="Less than 10% over baseline cost") {
                                    tr.append("<td><i class='fa-solid fa-face-grin-hearts fa-3x' style='color:#23a113;'></i></td>");
                                }
                                else if (ArrCostKPI[i]=="At least 20% over baseline cost")  {
                                    tr.append("<td><i class='fa-solid fa-face-angry fa-3x' style='color:#f53900;'></i></td>");
                                }
                                else if (ArrCostKPI[i]=="No Baseline") {
                                    tr.append("<td>" + '<i class="fa-solid fa-circle" fa-3x style="color:#000;font-size: xx-large;"></i>'  + " </td>");
                                }
                                else if (ArrCostKPI[i]=="No Cost") {
                                    tr.append("<td>" + '<i class="fa-solid fa-circle" fa-3x style="color:#bababa;font-size: xx-large;"></i>' + " </td>");
                                }
                                else if (ArrCostKPI[i]=="Between 10%-20% over baseline cost") {
                                    tr.append("<td><i class='fa-solid fa-face-rolling-eyes fa-3x' style='color:#f59e00;'></i></td>");
                                }
                                tr.append("<td>" + ArrProjectModifiedDate[i] + " </td>");
                                tr.append("<td>" + ArrNbTacheCritiques[i] + " </td>");
                                $('#tableaux').append(tr);
                                

                            }
                            //
                            document.getElementById("gliss").innerHTML=conToMill(sumVariance);
                        }
                        

                    }
                });

            }
            LoadTabProjBase00();
       }
       
       
       var urlProjAcc=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName";
       var responseProjAcc=responseProjAcc||[];
       function projAcc() {

            $.ajax({
                url: urlProjAcc,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProjAcc = responseProjAcc.concat(data.d.results);
                    if (data.d.__next) {
                        urlProjAcc = data.d.__next;
                        projAcc();
                    }
                    var numAcc=0;
                    var arrProjId=[];
                    var arrProjName=[];
                    $.each(responseProjAcc, function (key, value) {
                        var idp=value.ProjectId;
                        var nomP=value.ProjectName;
                        arrProjId.push(idp);
                        arrProjName.push(nomP);
                    });
                    
                    for (var i = 0; i < arrProjId.length; i++) {
                            loadNbAccidents(arrProjId[i],arrProjName[i],numAcc,i,arrProjId.length);
                    }
                }
            });

        }
        projAcc();
        function loadNbAccidents(idp,nomProj,numAcc,counter,numberOfProjects){
           var urlAccProj=_spPageContextInfo.siteAbsoluteUrl + "/"+nomProj+"/_api/web/lists/getbytitle('Accident')/items";
           
           var responseAccProj=responseAccProj||[];
           function numbAcc() {

                $.ajax({
                    url: urlAccProj,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseAccProj = responseAccProj.concat(data.d.results);
                        if (data.d.__next) {
                            urlAccProj = data.d.__next;
                            numbAcc();
                        }
                        var numAcc=0;
                        var arrProjId=[];
                        var arrProjName=[];
                        if (responseAccProj.length>0) {
                            $.each(responseAccProj, function (key, value) {
                                numAcc++;
                                
                                 document.getElementById("nbAccid").innerHTML=numAcc;
                            });

                        }
                        
                        
                    }
                });
               
                
            }
            numbAcc();
           }
                </script>
</body>

</html>