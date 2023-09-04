<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link href="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/css/bootstrap.min.css" rel="stylesheet">
    <link href="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/css/bootstrap.css" rel="stylesheet">
    <link href="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/css/style.css" rel="stylesheet">
    <link href="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/css/achevement.css" rel="stylesheet">
    <link href="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/css/dataTables.bootstrap4.min.css" rel="stylesheet">
    <link href="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/css/w3.css" rel="stylesheet">
    <link href="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/css/jquery.dataTables.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

    <style>
        .navbar-inverse {
            background-color: #337ab7;
            border-color: #337ab7;
        }

        #DeltaPlaceHolderPageTitleInTitleArea {
            display: none;
        }

        body {
            margin-top: 100px;
            //background-color: #222;
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
            background-color: #f8f9fa;
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


        text.highcharts-credits {
            display: none;
        }

        g.highcharts-no-tooltip.highcharts-button.highcharts-contextbutton {
            display: none;
        }

        text.highcharts-title {
            display: none;
        }

        .sc-gauge {
            width: 200px;
            margin: 7px;
            position: relative;
        }

        .sc-background {
            position: relative;
            height: 100px;
            margin-bottom: 10px;
            background-color: #e06950;
            border-radius: 150px 150px 0 0;
            overflow: hidden;
            text-align: center;
        }

        .sc-mask {
            position: absolute;
            top: 20px;
            right: 20px;
            left: 20px;
            height: 80px;
            background-color: white;
            border-radius: 150px 150px 0 0;
        }

        .sc-percentage {
            position: absolute;
            top: 100px;
            left: -200%;
            width: 400%;
            height: 400%;
            margin-left: 100px;
        }

        .sc-percentage-a {
            transform: rotate(130deg);
            transform-origin: top center;
            background-color: #ffe650;
        }

        .sc-percentage-b {
            transform: rotate(55deg);
            transform-origin: top center;
            background-color: #a9d150;
        }

        .sc-value {
            position: absolute;
            top: 59px;
            left: 0;
            width: 100%;
            font-size: 30px;
            font-weight: 500;
            color: #ffe650;
        }

        .sc-low {
            position: absolute;
            top: 25px;
            left: -15px;
            font-weight: 700;
            color: gray;
            transform: rotate(-55deg);
        }

        .sc-med {
            position: absolute;
            top: -20px;
            left: 40%;
            font-weight: 700;
            color: gray;
        }

        .sc-high {
            position: absolute;
            top: 25px;
            right: -15px;
            font-weight: 700;
            color: gray;
            transform: rotate(55deg);
        }

        .sc-hr {
            background: #dddddd;
            height: 1px;
        }

        .sc-arrow {
            background: #6d6d70;
            height: 2px;
            
            /* transform: rotate(55deg); */
            /* transition: all 2s; */
            width: 51px;
            left: 77px;
            position: absolute;
            top: 25px;
        }

        .sc-title {
            margin-top: 10px;
            width: 100%;
            font-size: 18px;
            font-weight: 700;
            color: gray;
        }

        #morris-donut-chart {
            max-width: 260px !important;
            margin-left: 14px;
            margin-top: -26px;
        }

        #redL {
          height: 40px;
          width: 40px;
          margin: 1px auto;
          background-color: #7A0000;
          border-radius: 50px;
          border: solid 1px black;
          padding: 1px;
        }

        #yellowL {
          height: 40px;
          width: 40px;
          margin: 1px auto;
          background-color: #7A5C00;
          border-radius: 50px;
          border: solid 1px black;
          padding: 1px;
        }

        #greenL {
          height: 40px;
          width: 40px;
          margin: 1px auto;
          background-color: #008000;
          border-radius: 50px;
          border: solid 1px black;
          padding: 1px;
        }

        #trafic {
          /* Doesn't need dashes */
          height: 160px;
          width: 60px;
          background-color: #000000;
          border: 1px #000000;
          text-align: center;
          margin-left: 0%;
          /* makes margin right 50% */
          padding: 1px;
          border-radius: 10px;
        }

        #redL1 {
          height: 40px;
          width: 40px;
          margin: 1px auto;
          background-color: #7A0000;
          border-radius: 50px;
          border: solid 1px black;
          padding: 1px;
        }

        #yellowL1 {
          height: 40px;
          width: 40px;
          margin: 1px auto;
          background-color: #7A5C00;
          border-radius: 50px;
          border: solid 1px black;
          padding: 1px;
        }

        #greenL1 {
          height: 40px;
          width: 40px;
          margin: 1px auto;
          background-color: #008000;
          border-radius: 50px;
          border: solid 1px black;
          padding: 1px;
        }

        #trafic1 {
          /* Doesn't need dashes */
          height: 160px;
          width: 60px;
          background-color: #000000;
          border: 1px #000000;
          text-align: center;
          margin-left: 0%;
          /* makes margin right 50% */
          padding: 1px;
          border-radius: 10px;
        }
        body#page-top {
    margin-top: 0px;
}

.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
    display: none;
}


.hide {
  display: none;
}
.trafic:hover + .hide {
  display: block;
  color: black;
}
.trafic1:hover + .hide {
  display: block;
  color: black;
}

#myChart {
  //height:100%;
  width:100%;
  height:200px;
}

.zc-ref {
  display: none;
}
div#myChart-license-text {
    display: none;
}
div#myChart-wrapper {
    height: 200px;
}
.ms-rtestate-field h1, h1.ms-rteElement-H1, .ms-rtestate-field h2, h2.ms-rteElement-H2 {
    line-height: 1.4;
    color: #777777;
}
div#myChartGra-license-text {
    display: none;
}
div#myChartGra-license-text {
    display: none;
}

div#myChartGra-wrapper {
    height: 375px;
}
div#myChartGraPan {
    max-height: 385px;
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
    </style>
</head>
<div id="over"></div>
<body id="page-top">



    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <ul class="nav navbar-right top-nav">
                <h3 id="titre" style="color: white; float: left; margin-bottom: 0px;margin-top: 0px;">
                    Etat d'avancement des projets
                </h3>



            </ul>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: azure;"
                id="myList1" onchange="selectMyList1();mainfilter();">
                <option value="">Axe</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: azure;"
                id="myList2" onchange="selectMyList2();mainfilter();">
                <option value="">Chantier</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: azure;"
                id="myList3" onchange="selectMyList3();mainfilter();">
                <option value="">Projet</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: azure;"
                id="myList4" onchange="selectMyList4();mainfilter();">
                <option value="">Sponsor</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: azure;"
                id="myList5" onchange="selectMyList5();mainfilter();">
                <option value="">Chef de projet</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: azure;"
                id="myList6" onchange="selectMyList6();mainfilter();">
                <option value="">Méthodologie</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: azure;"
                id="myList7" onchange="selectMyList7();mainfilter();">
                <option value="">Structure</option>

            </select>

        </nav>

        <div id="page-wrapper">

            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header" id="DateJr" style="float: right;margin: 0px 20px;">

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
                                        <i class="fa fa-building fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge" id="countChan"></div>
                                        <div id="chantierPI">Chantiers</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div class="panel-footer" style="display:none;">

                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-yellow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3" id="fa2">
                                        <i class="fa fa-tasks fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge" id="countProj"></div>
                                        <div id="projetKPI">Projets</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div class="panel-footer" style="display:none;">

                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-green">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3" id="fa3">
                                        <i class="fa fa-flag fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge" id="statutGlKPI"></div>
                                        <div id="">Statut global</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div class="panel-footer" style="display:none;">

                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-red">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3" id="fa4">
                                        <i class="fa fa-percent fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge" id="avgAchevement"></div>
                                        <div id="generiquesKPI">Achèvement</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div class="panel-footer" style="display:none;">

                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- /.row -->

                <div class="row" id="row1" style="">
                    <div class="col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Analyse par statut
                                </h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div id="morris-area-chart" style="width:  100%;">


                                    </div>










                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->

                <div class="row" id="row2" >
                    <div class="col-lg-12">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title"><i class="fa fa-clock-o fa-fw"></i> Analyse par délais
            </h3>
        </div>
        <div class="panel-body">
            <div class="row">

                <div style="width:100%;">
                    <div class="col-sm-1" style="max-width: 5.33333%;">
                        <table id="trafic1">
                            <tr>
                                <td>
                                    <div id="redL1"></div>
                                    <div id="yellowL1"></div>
                                    <div id="greenL1"></div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-sm-4" >
                    <div class="panel panel-default" style="border-radius: 10px;">

    <div class="panel-body" style="height: 290px;padding-top: 5px;">
        <div class="col-sm-12">
            <h4 style="text-align: center;margin: 0px;">% Consommation du temps prévu </h4>
        </div>
        <div class="col-sm-12" >
           <div id="myChart" style="overflow: hidden;margin-top: 9%;"></div>
        </div>

    </div>
</div>
                        
                    </div>
                    <div class="col-sm-4" >
                    <div class="panel panel-default" style="border-radius: 10px;">

    <div class="panel-body" style="height: 290px;padding-top: 5px;">
        <div class="col-sm-12">
            <h4 style="text-align: center;margin: 0px;">Nombre de Jours consommés</h4>
        </div>
        <div class="col-sm-12" >
            <canvas id="myPieChart" class="chartjs-render-monitor" style="display: block; width: 566px; height: 316px;"></canvas>
        </div>

    </div>
</div>
                       
                    </div>
                    <div class="col-sm-3" style=" max-width: 23.666667%;">

                        <div class="panel panel-default" style="border-radius: 10px;">

                            <div class="panel-body" style="height: 134px;padding-top: 5px;">
                                <div class="col-sm-12">
                                    <h4 style="text-align: center;">Maturité Planning</h4>
                                </div>
                                <div class="col-sm-12" id="maturitéplanning">
                                    <div class="col-sm-2">
                                        <i class="fa fa-arrow-down fa-4x" aria-hidden="true"
                                            style="color:#5cb85c;display: none;" id="up1"></i>
                                        <i class="fa fa-arrow-up fa-4x" aria-hidden="true"
                                            style="color: #e06950; display: none;" id="down1"></i>
                                        <i class="fa fa-arrow-right fa-4x" aria-hidden="true"
                                            style="color: #ffe650; " id="mid1"></i>
                                    </div>
                                    <div class="col-sm-8" style="text-align: center">

                                        <h1 style="font-weight: bold;color:#5cb85c;margin-top: 0px;"
                                            id="maturiteP"></h1>

                                    </div>
                                </div>

                            </div>
                        </div>
                          <div class="panel panel-default" style="border-radius: 10px;">
                            <div class="panel-body" style="height: 134px;padding-top: 5px;">
                                <div class="col-sm-12">
                                    <h4 style="text-align: center;">Glissement</h4>
                                </div>
                                <div class="col-sm-12" id="coutPrevue">
                                    <div class="col-sm-2">
                                        <i class="fa fa-arrow-down fa-4x" aria-hidden="true"
                                            style="color:#5cb85c;display: none;" id="up"></i>
                                        <i class="fa fa-arrow-up fa-4x" aria-hidden="true"
                                            style="color: #e06950; display: none;" id="mid"></i>
                                        <i class="fa fa-arrow-right fa-4x" aria-hidden="true"
                                            style="color: #ffe650; display: none;" id="down"></i>
                                    </div>
                                    <div class="col-sm-8" style="text-align: center">

                                        <h1 style="font-weight: bold;color:#5cb85c;margin-top: 0px;"
                                            id="glissementportefeuille"></h1>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
                    <div class="col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-money fa-fw"></i> Analyse des coût</h3>
                            </div>
                            <div class="panel-body">
                            <div class="row">
        <div style="width: 100%">
                            <div class="col-lg-1" style="padding-right: 0px; max-width: 6.33333%;">
                              <table id="trafic">
                                <!-- -->
                                <tr>
                                  <td>
                                    <div id="redL"></div>
                                    <div id="yellowL"></div>
                                    <div id="greenL"></div>
                                  </td>
                                </tr>
                              </table>
                              <div class="hide" id="hoverCout"></div>
                            </div>
                            <div class="col-lg-3" style="padding-left: 0px;">
                              <div class="panel panel-default" style="border-radius: 10px;">
 
                                  <div class="panel-body" style="padding-top: 8px;">
                                  <div class="row">
                                    <div class="col-sm-12">
                                      <h4 style="text-align: center;">% Consommation du coût prévu</h4>
                                    </div>
                                    <div class="col-sm-12" id="coutPrevue">
                                      <center><h1 style=" font-weight: bold;color:#5cb85c" id="consoCouPrevue">  </h1></center>
                                    </div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                            <div class="col-lg-8">
                            <div class="panel panel-default" style="border-radius: 10px;">
                              
                                  <div class="panel-body" style="padding-top: 5px;">
                                  <div class="row">
                                      <div class="col-sm-12">
                                          <h4 style="text-align: center;margin: 0px;">Taux de dépassement</h4>
                                      </div>
                                      <div class="col-sm-12">
                                          <div class="table-striped" id="tabProjCout">
                                              <table class="table table-bordered table-hover table-striped" id="tabCout" style="text-align: center;">
                                                <thead>
                                                  <tr>                                          
                                                    <th>Budget</th>
                                                    <th>Consommé</th>
                                                    <th>Taux de dépassement</th>
                                                                                              
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  
                                                </tbody>
                                              </table>
                                            </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                            </div>

                                
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-exclamation-triangle fa-fw"></i> Analyse des risques</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div style="width: 100%">

                                        <div class="col-lg-6">
    <div class="panel panel-default" style="border-radius: 10px;">
        <div class="row">
            <div class="panel-body" style="padding-top: 5px;width: 100%;">
                <div class="col-sm-12">
                    <h4 style="text-align: center;margin: 0px;">Risques par statut</h4>
                </div>
                <div class="col-sm-12">
                    <div id="bar1"> </div>
                </div>
            </div>
        </div>
    </div>

</div>
                                        <div class="col-lg-6" >
    <div class="panel panel-default" style="border-radius: 10px;">
<div class="row">
        <div class="panel-body" style="padding-top: 5px;width: 100%;">
            <div class="col-sm-12">
                <h4 style="text-align: center;margin: 0px;">Risques par priorité</h4>
            </div>
            <div class="col-sm-12" >
                <div  id="bar2"> </div>
            </div>
            </div>
        </div>
    </div>
        
</div>
                                        


                                        <div class="col-lg-6" >
                                            <div class="panel panel-default" style="border-radius: 10px;">

                                                <div class="panel-body" style="padding-top: 5px;"id="myChartGraPan" style="padding-top: 5px;max-height: 385px;">
                                                  <div class="row">
                                                  <div class="col-sm-12">
                <h4 style="text-align: center;margin: 0px;">Gravité des risques</h4>
            </div>
                                                  
                                                    <div class="col-sm-12" id="Dchart" >
                                                        <div id="myChartGra" style="overflow: hidden;margin-top: 5%;height:300px"></div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                                
                                        </div>




                                        <div class="col-lg-6">
                                            <div class="panel panel-default" style="border-radius: 10px;">

                                              <div class="panel-body" style="height: 134px;padding-top: 5px;">
                                                  <div class="col-sm-12">
                                                      <h4 style="text-align: center;">Délais de traitement des risques</h4>
                                                  </div>
                                                  <div class="col-sm-12" id="delaiTrait">
                                                      <div class="col-sm-2">
                                                          <i class="fa fa-arrow-down fa-4x" aria-hidden="true"
                                                              style="color:#5cb85c;display: none;" id="up2"></i>
                                                          <i class="fa fa-arrow-up fa-4x" aria-hidden="true"
                                                              style="color: #e06950; display: none;" id="mid2"></i>
                                                          <i class="fa fa-arrow-right fa-4x" aria-hidden="true"
                                                              style="color: #ffe650; display: none;" id="down2"></i>
                                                      </div>
                                                      <div class="col-sm-8" style="text-align: center">

                                                          <h1 style="font-weight: bold;color:#5cb85c;margin-top: 0px;"
                                                              id="delaiTraitement"></h1>

                                                      </div>
                                                  </div>

                                              </div>
                                          </div>
                                        </div>

                                    </div>
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














    <script src="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/javascript/jquery3.4.1.js"></script>

    <script src="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/javascript/Chart.min.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/javascript/filterAxe.js"></script>

    <script src="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/javascript/selectMyList1.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/javascript/selectMyList2.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/javascript/selectMyList3.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/javascript/selectMyList4.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/javascript/selectMyList5.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/javascript/selectMyList6.js"></script>

    <script src="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/javascript/custom.min.js"></script>

    <script src="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/javascript/timeline.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/javascript/exporting.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/javascript/accessibility.js"></script>

  

    <script src="/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/javascript/moment-with-locales.min.js"></script>

    <script src= "https://cdn.zingchart.com/zingchart.min.js"></script>
    <script> 
      zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
      ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9","ee6b7db5b51705a13dc2339db3edaf6d"];
      </script>

<script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>


    <script type="text/javascript">


    


function sortTab(tab){
    var changed;
    do{
        changed = false;
        for(var i=0; i < tab.length-1; i++) {
            if(tab[i] > tab[i+1]) {
                var tmp = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = tmp;
                changed = true;
            }
        }
    } while(changed);
}



    function conToMill(num) {
    if (num==0)
    {
         return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2))  : Math.sign(num)*Math.abs(num)
    }
    if (num<1000000 && num>999)
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
        function loadToday() {
            var auj;
            daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            jrSem = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
            var dayName = moment().format('dddd');
            if (daysInWeek.indexOf(dayName) > -1) {
                auj = jrSem[daysInWeek.indexOf(dayName)];
                
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


var responseSelect=responseSelect || [];
        var urlSelect= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,AxeStrategique,Chantier,ProjectName,Sponsor,ProjectOwnerName,Typedegestion,Structuresimpliquees";
        function loadSelect(){
          $.ajax({
                        url: urlSelect,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseSelect = responseSelect.concat(data.d.results);
                            if (data.d.__next) {
                                urlSelect = data.d.__next;
                                loadSelect();
                            }
                            
                            

                            $.each(responseSelect, function (key, value) {
                               if (value.AxeStrategique!=null) {
                                var axeStr=value.AxeStrategique;
                                $('#myList1').append($('<option>',
                               {
                                  text : axeStr,
                                  value:axeStr
                                })); 
                                var opt = {};
                                  $("#myList1 > option").each(function () {
                                    if(opt[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt[$(this).text()] = $(this).val();
                                    }
                                   });
                               }
                               if (value.Chantier!=null) {
                                var chantier=value.Chantier;
                                $('#myList2').append($('<option>',
                               {
                                  text : chantier,
                                  value:chantier
                                })); 
                                var opt1 = {};
                                  $("#myList2 > option").each(function () {
                                    if(opt1[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt1[$(this).text()] = $(this).val();
                                    }
                                   });
                               }
                               if (value.ProjectName!=null) {
                                var nomP=value.ProjectName;
                                var idp=value.ProjectId;
                                $('#myList3').append($('<option>',
                               {
                                  text : nomP,
                                  value:nomP
                                })); 
                                var opt2 = {};
                                  $("#myList3 > option").each(function () {
                                    if(opt2[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt2[$(this).text()] = $(this).val();
                                    }
                                   });
                               }
                               if (value.Sponsor!=null) {
                                var sponsor=value.Sponsor;
                                $('#myList4').append($('<option>',
                               {
                                  text : sponsor,
                                  value:sponsor
                                })); 
                                var opt3 = {};
                                  $("#myList4 > option").each(function () {
                                    if(opt3[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt3[$(this).text()] = $(this).val();
                                    }
                                   });
                               }
                               if (value.ProjectOwnerName!=null) {
                                var owner=value.ProjectOwnerName;
                                $('#myList5').append($('<option>',
                               {
                                  text : owner,
                                  value:owner
                                })); 
                                var opt4 = {};
                                  $("#myList5 > option").each(function () {
                                    if(opt4[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt4[$(this).text()] = $(this).val();
                                    }
                                   });
                               }
                               if (value.Typedegestion!=null) {
                                var methodologie=value.Typedegestion;
                                $('#myList6').append($('<option>',
                               {
                                  text : methodologie,
                                  value:methodologie
                                })); 
                                var opt5 = {};
                                  $("#myList6 > option").each(function () {
                                    if(opt5[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt5[$(this).text()] = $(this).val();
                                    }
                                   });
                               }
                               if (value.Structuresimpliquees!=null) {
                                var structure=value.Structuresimpliquees;
                                ////console.log("structure= "+structure);
                                // if (structure=="DCSI, DCRH, DCT, DG, DCCM, DCS&I, DCMG, DCF, DCA, DCI, DCAI, DRs, DME") {
                                //   structure="DCSI, DCRH, DCT, DG, DCCM, DCS&I, DCF, DCA, DCI, DCAI, DRs, DME, DCMG";
                                // }
                                var words = structure.split(', ');
                                sortTab(words);
                                var myNewString="";
                                for(var i=0; i < words.length; i++){
                                  if(i==0){
                                    myNewString+=words[i];
                                  }else{
                                    myNewString+=", "+words[i];
                                  }

                                }
                                $('#myList7').append($('<option>',
                               {
                                  text : myNewString,
                                  value: myNewString
                                })); 
                                var opt6 = {};
                                  $("#myList7 > option").each(function () {
                                    if(opt6[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt6[$(this).text()] = $(this).val();
                                    }
                                   });
                               }
                               


                            });
                            
                        }
                    });
        }
        loadSelect();

var responseKPIGeneral=responseKPIGeneral || [];
        var urlKPIGeneral= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,Chantier,ProjectPercentCompleted";
        function loadKPIGeneral(){
          $.ajax({
                        url: urlKPIGeneral,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseKPIGeneral = responseKPIGeneral.concat(data.d.results);
                            if (data.d.__next) {
                                urlKPIGeneral = data.d.__next;
                                loadKPIGeneral();
                            }
                            
                            var arrChantier=[];
                            var countProjet=0;
                            var sumAchevement=0;
                            
                            //-------------------
                            
                            //--------------------------------------------
                            $.each(responseKPIGeneral, function (key, value) {
                              
                                      var chantier=value.Chantier;                                
                                      if ((arrChantier.indexOf(chantier)==-1)&&(chantier!=null)) {
                                        arrChantier.push(chantier);
                                      }
                                      var achevement=value.ProjectPercentCompleted;
                                      
                                      
                                      countProjet++;
                                      sumAchevement+=parseFloat(achevement);
                                       
                                
                            });
                            var avgAchevement=parseFloat(sumAchevement/countProjet).toFixed(0);
                            document.getElementById("countChan").innerHTML=arrChantier.length;
                            document.getElementById("countProj").innerHTML=countProjet;
                            if (isNaN(avgAchevement)){avgAchevement=0;}
                            if (avgAchevement<30) {
                              document.getElementById("statutGlKPI").innerHTML="<img src='/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/img/danger.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'>";
                            }
                            if ((avgAchevement>=30)&&(avgAchevement<=75)) {
                              document.getElementById("statutGlKPI").innerHTML="<img src='/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/img/warning.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'>";
                            }
                            if (avgAchevement>75) {
                              document.getElementById("statutGlKPI").innerHTML="<img src='/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/img/checked.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'>";
                            }
                            document.getElementById("avgAchevement").innerHTML=avgAchevement+"%";

                            
                            
                            
                        }
                    });
        }
        loadKPIGeneral();


















        var responseAnalyseStatut = responseAnalyseStatut || [];
        var urlAnalyseStatut = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectFinishDate,ProjectPercentCompleted,Etatdeprojet";
        function loadAnalyseStatut() {
            $.ajax({
                url: urlAnalyseStatut,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseAnalyseStatut = responseAnalyseStatut.concat(data.d.results);
                    if (data.d.__next) {
                        urlAnalyseStatut = data.d.__next;
                        loadAnalyseStatut();
                    }

                    var arrStatut = [];
                    var arrValueStatut = [];
                    var arrPercentStatut=[];
                    var arrDeg=[];
                    var arrDeg1=[];
                    var countProjet=0;
                    var projEnRetardCount=0;
                    $.each(responseAnalyseStatut, function (key, value) {
                      moment.locale('fr');
                      var finish=value.ProjectFinishDate;
                      var finProjet=moment(finish).format('DD-MM-YYYY');
                      var today=moment().format('DD-MM-YYYY');
                      
                      var achevement=value.ProjectPercentCompleted;
                      if ((moment(finProjet).isBefore(today))&&(achevement<100)) {
                        projEnRetardCount++;
                      }
                      countProjet++;
                      var statutProjet=value.Etatdeprojet;

                      if (statutProjet!=null) {
                        if (statutProjet.indexOf("StandBy")>=0) {
                          statutProjet="StandBy";
                        }
                        if (arrStatut.indexOf(statutProjet)<0) {
                          arrStatut.push(statutProjet);
                          arrValueStatut.push(1);
                        }else{
                          arrValueStatut[arrStatut.indexOf(statutProjet)]+=1;
                        }
                      }
                      
                    });
                    
                    
                    var porcentRetard=parseFloat((projEnRetardCount/countProjet)*100).toFixed(0);
                    var degRetard=parseFloat((projEnRetardCount/countProjet)*360);
                    var degRetard1=parseFloat(((porcentRetard-50)*100)/360);
                    for (var i = 0; i < arrStatut.length; i++) {
                      arrPercentStatut[i]=parseFloat((arrValueStatut[i]/countProjet)*100).toFixed(0);
                      arrDeg[i]=parseFloat((arrValueStatut[i]/countProjet)*360);
                      if (arrPercentStatut[i]>50) {
                        arrDeg1[i]=parseFloat(((arrPercentStatut[i]-50)*100)/360);
                      }else{
                        arrDeg1[i]=0;
                      }
                    }
                    var valCloture=0;
                    var percentCloture=0;
                    var degCloture=0;
                    if (arrStatut.indexOf("Clôturé")>-1) {
                      valCloture=arrValueStatut[arrStatut.indexOf("Clôturé")];
                      percentCloture=arrPercentStatut[arrStatut.indexOf("Clôturé")];
                      degCloture=arrDeg[arrStatut.indexOf("Clôturé")];
                      degCloture1=arrDeg1[arrStatut.indexOf("Clôturé")];
                    }
                    var valArret=0;
                    var percentArret=0;
                    var degArret=0;
                    if (arrStatut.indexOf("StandBy")>-1) {
                      valArret=arrValueStatut[arrStatut.indexOf("StandBy")];
                      percentArret=arrPercentStatut[arrStatut.indexOf("StandBy")];
                      degArret=arrDeg[arrStatut.indexOf("StandBy")];
                      degArret1=arrDeg1[arrStatut.indexOf("StandBy")];
                    } 
                    var valEnCours=0;
                    var percentEnCours=0;
                    var degEnCours=0;
                    if (arrStatut.indexOf("En cours")>-1) {
                      valEnCours=arrValueStatut[arrStatut.indexOf("En cours")];
                      percentEnCours=arrPercentStatut[arrStatut.indexOf("En cours")];
                      degEnCours=arrDeg[arrStatut.indexOf("En cours")];
                      degEnCours1=arrDeg1[arrStatut.indexOf("En cours")];
                    }
                    var valAbandonne=0;
                    var percentAbandonne=0;
                    var degAbandonne=0;
                    if (arrStatut.indexOf("Abandonné")>-1) {
                      valAbandonne=arrValueStatut[arrStatut.indexOf("Abandonné")];
                      percentAbandonne=arrPercentStatut[arrStatut.indexOf("Abandonné")];
                      degAbandonne=arrDeg[arrStatut.indexOf("Abandonné")];
                      degAbandonne1=arrDeg1[arrStatut.indexOf("Abandonné")];
                    }
                    var valAbandonne=0;
                    var percentAbandonne=0;
                    var degAbandonne=0;
                    if (arrStatut.indexOf("Abandonné")>-1) {
                      valAbandonne=arrValueStatut[arrStatut.indexOf("Abandonné")];
                      percentAbandonne=arrPercentStatut[arrStatut.indexOf("Abandonné")];
                      degAbandonne=arrDeg[arrStatut.indexOf("Abandonné")];
                      degAbandonne1=arrDeg1[arrStatut.indexOf("Abandonné")];
                    }
                    var valPlanifie=0;
                    var percentPlanifie=0;
                    var degPlanifie=0;
                    if (arrStatut.indexOf("Planifié")>-1) {
                      valPlanifie=arrValueStatut[arrStatut.indexOf("Planifié")];
                      percentPlanifie=arrPercentStatut[arrStatut.indexOf("Planifié")];
                      degPlanifie=arrDeg[arrStatut.indexOf("Planifié")];
                      degPlanifie1=arrDeg1[arrStatut.indexOf("Planifié")];
                    }
                    

                    //'+arrPercentStatut[arrStatut.indexOf("Clôturé")]+'

                    document.getElementById("morris-area-chart").innerHTML = '<div class="col-sm-2">' +
                        '<div class="bg-white rounded-lg p-5 shadow">' +
                        ' <h2 class="h6 font-weight-bold text-center mb-4">Clôturé</h2>' +


                        '<div class="progress mx-auto" data-value="'+percentCloture+'">' +
                        ' <span class="progress-left">' +
                        '<span class="progress-bar border-success" id="leftDegCloture"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-success" id="rightDegCloture"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h4 font-weight-bold">'+percentCloture+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info -->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valCloture+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +

                        '<div class="col-sm-2">' +
                        '<div class="bg-white rounded-lg p-5 shadow">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">Arrêtés</h2>' +

                        '<!-- Progress bar 2 -->' +
                        '<div class="progress mx-auto" id="aTerminePour" data-value="'+percentArret+'">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-danger" id="leftDegATer"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-danger" id="rightDegATer"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h4 font-weight-bold">'+percentArret+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info-->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valArret+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +

                       '<div class="col-sm-2">' +
                        '<div class="bg-white rounded-lg p-5 shadow">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">En cours</h2>' +

                        '<!-- Progress bar 2 -->' +
                        '<div class="progress mx-auto" id="enCoursPour" data-value="'+percentEnCours+'">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-info" id="leftDegEnCours"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-info" id="rightDegEnCours"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h4 font-weight-bold">'+percentEnCours+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info-->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valEnCours+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +

                        '<div class="col-sm-2">' +
                        '<div class="bg-white rounded-lg p-5 shadow">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">En retard</h2>' +

                        '<!-- Progress bar 4 -->' +
                        '<div class="progress mx-auto" id="retardPour" data-value="'+porcentRetard+'">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-warning" id="leftDegRetard"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-warning" id="rightDegRetard"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h4 font-weight-bold">'+porcentRetard+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info -->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+projEnRetardCount+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +




                        '<div class="col-sm-2">' +
                        '<div class="bg-white rounded-lg p-5 shadow">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">Abandonné</h2>' +
                        '<!-- Progress bar 5 -->' +
                        '<div class="progress mx-auto" id="retardPour" data-value="'+percentAbandonne+'">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-warning" id="leftDegAbandonne"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-warning" id="rightDegAbandonne"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h4 font-weight-bold">'+percentAbandonne+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info -->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valAbandonne+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +

                        '<div class="col-sm-2">' +
                        '<div class="bg-white rounded-lg p-5 shadow">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">Planifié</h2>' +
                        '<!-- Progress bar 6 -->' +
                        '<div class="progress mx-auto" id="terminePour" data-value="'+percentPlanifie+'">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-primary" id="leftDegPlanifie"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-primary" id="rightDegPlanifie"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h4 font-weight-bold">'+percentPlanifie+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info -->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valPlanifie+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>';

                        if (percentEnCours > 0) {
                    if (percentEnCours <= 50) {
                        $("#rightDegEnCours").css('transform', 'rotate(' + percentageToDegrees(percentEnCours) + 'deg)')
                    } else {
                        $("#rightDegEnCours").css('transform', 'rotate(180deg)')
                        $("#leftDegEnCours").css('transform', 'rotate(' + percentageToDegrees(percentEnCours - 50) + 'deg)')
                    }
                }
                if (percentCloture > 0) {
                    if (percentCloture <= 50) {
                        $("#rightDegCloture").css('transform', 'rotate(' + percentageToDegrees(percentCloture) + 'deg)')
                    } else {
                        $("#rightDegCloture").css('transform', 'rotate(180deg)')
                        $("#leftDegCloture").css('transform', 'rotate(' + percentageToDegrees(percentCloture - 50) + 'deg)')
                    }
                }
                if (percentArret > 0) {
                    if (percentArret <= 50) {
                        $("#rightDegATer").css('transform', 'rotate(' + percentageToDegrees(percentArret) + 'deg)')
                    } else {
                        $("#rightDegATer").css('transform', 'rotate(180deg)')
                        $("#leftDegATer").css('transform', 'rotate(' + percentageToDegrees(percentArret - 50) + 'deg)')
                    }
                }
                if (porcentRetard > 0) {
                    if (porcentRetard <= 50) {
                        $("#rightDegRetard").css('transform', 'rotate(' + percentageToDegrees(porcentRetard) + 'deg)')
                    } else {
                        $("#rightDegRetard").css('transform', 'rotate(180deg)')
                        $("#leftDegRetard").css('transform', 'rotate(' + percentageToDegrees(porcentRetard - 50) + 'deg)')
                    }
                }
                if (percentAbandonne > 0) {
                    if (percentAbandonne <= 50) {
                        $("#rightDegAbandonne").css('transform', 'rotate(' + percentageToDegrees(percentAbandonne) + 'deg)')
                    } else {
                        $("#rightDegAbandonne").css('transform', 'rotate(180deg)')
                        $("#leftDegAbandonne").css('transform', 'rotate(' + percentageToDegrees(percentAbandonne - 50) + 'deg)')
                    }
                }
                if (percentPlanifie > 0) {
                    if (percentPlanifie <= 50) {
                        $("#rightDegPlanifie").css('transform', 'rotate(' + percentageToDegrees(percentPlanifie) + 'deg)')
                    } else {
                        $("#rightDegPlanifie").css('transform', 'rotate(180deg)')
                        $("#leftDegPlanifie").css('transform', 'rotate(' + percentageToDegrees(percentPlanifie - 50) + 'deg)')
                    }
                }
   

                }
            });
        }
        loadAnalyseStatut();

                
           

            function percentageToDegrees(percentage) {

                return percentage / 100 * 360

            }

        
///--------------------------------------------------------------------------------------------------------------------------------------------------------------
        var responseDuration=responseDuration || [];
        var urlDuration= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectDuration,ProjectDurationVariance,ProjectActualDuration,Etatdeprojet";
        function loadDuration(){
          $.ajax({
                        url: urlDuration,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseDuration = responseDuration.concat(data.d.results);
                            if (data.d.__next) {
                                urlDuration = data.d.__next;
                                loadDuration();
                            }
                            
                            
                            var sumRealDuration=0;
                            var sumInitialDuration=0;
                            var sumConsomeDuration=0;
                            var countStandBy=0;
                            var countProjet=0;
                            $.each(responseDuration, function (key, value) {
                              countProjet++;
                               var dureeReel=value.ProjectDuration;
                               var dureeInitial=value.ProjectDurationVariance;
                               var dureeConsomee=value.ProjectActualDuration;
                               sumRealDuration+=parseFloat(dureeReel);
                               sumInitialDuration+=parseFloat(dureeInitial);
                               sumConsomeDuration+=parseFloat(dureeConsomee);
                               var statutProjet=value.Etatdeprojet;

                               if ((value.Etatdeprojet!=null)&&(statutProjet.indexOf("StandBy")>=0)) {
                                  countStandBy++;
                                }
                            });
                            ////////console.log("sumRealDuration= "+sumRealDuration);
                            ////////console.log("sumConsomeDuration= "+sumConsomeDuration);
                            var depassementDuree=parseFloat((sumRealDuration-sumInitialDuration)/sumInitialDuration);
                            //////////console.log("depassementDuree= "+depassementDuree);
                            functionary1(depassementDuree);
                            var consomationPrevue=parseFloat((sumConsomeDuration/sumRealDuration)*100).toFixed(0);
                            //document.getElementById("costStatutG").innerHTML=consomationPrevue+"%";
                            
                            //$("#arrowGeneral").css("transform", "rotate("+degDep+")");
                            var arrayConso=[];
                            arrayConso.push(consomationPrevue);
                            jaugeDelais(consomationPrevue);

                            jrsConsome(sumRealDuration,sumConsomeDuration);
                            var maturitePlanning=parseFloat((countStandBy/countProjet)*100).toFixed(0);
                            document.getElementById("maturiteP").innerHTML=maturitePlanning+"%";

                            //up mid down

                            if ((maturitePlanning>=0)&&(maturitePlanning<30)) {
                              $("#up1").css("display", "block");
                              $("#mid1").css("display", "none");
                              $("#down1").css("display", "none");
                              $("#maturiteP").css("color", "#5cb85c");
                            }
                            else if ((maturitePlanning>=30)&&(maturitePlanning<=60)) {
                              $("#mid1").css("display", "block");
                              $("#up1").css("display", "none");
                              $("#down1").css("display", "none");
                              $("#maturiteP").css("color", "#e06950");
                            }
                            else if (maturitePlanning>60) {
                              $("#down1").css("display", "block");
                              $("#up1").css("display", "none");
                              $("#mid1").css("display", "none");
                              $("#maturiteP").css("color", "#ffe650");
                            }

                        }
                    });
        }
        loadDuration();
        function functionary1(time) {
                    var red = document.getElementById('redL1')
                    var yellow = document.getElementById('yellowL1')
                    var green = document.getElementById('greenL1')
                    var Colours = ["#FF0000", "#FFB300", "#05FF0D", "#7A0000", "#7A5C00", "#008000"];
                     if (time < 0) {
                       red.style.background = Colours[0]; // May need spacebar between index number
                       yellow.style.background = Colours[4];
                       green.style.background = Colours[5];
                      
                     } else if (time == 0) {
                       red.style.background = Colours[3];
                       yellow.style.background = Colours[1];
                       green.style.background = Colours[5];
                       
                    } else if (time > 0) {
                      red.style.background = Colours[3];
                      yellow.style.background = Colours[4];
                      green.style.background = Colours[2];
                      
                    }
                    //hoverCout
                    //si la couleur rouge clignote c'est une Alerte sur le dépassement des coûts prévus
                  }
                  function jaugeDelais(consomationPrevue){
                    var valeur=[consomationPrevue];
                    var myConfig = {
                              type: "gauge",
                              globals: {
                                fontSize: 10,
                                'background-color':'transparent'
                              },
                              plotarea:{
                                marginTop:15,
                              },
                              plot:{
                                size:'100%',
                                valueBox: {
                                  placement: 'center',
                                  text:'%v', //default
                                  fontSize:15,
                                  rules:[
                                    {
                                      rule: '%v >= 90',
                                      text: '%v<br>ÉLEVÉ'
                                    },
                                    {
                                      rule: '%v <= 90 && %v > 60',
                                      text: '%v<br>ASSEZ ÉLEVÉ'
                                    },
                                    {
                                      rule: '%v <= 60 && %v > 30',
                                      text: '%v<br>MOYEN'
                                    },
                                    {
                                      rule: '%v <=  30',
                                      text: '%v<br>FAIBLE'
                                    }   
                                  ]
                                }
                              },
                              tooltip:{
                                borderRadius:5
                              },
                              scaleR:{
                                aperture:180,
                                minValue:0,
                                maxValue:100,
                                step:10,
                                center:{
                                  visible:false
                                },
                                tick:{
                                  visible:false
                                },
                                item:{
                                  offsetR:0,
                                  rules:[
                                    {
                                      rule:'%i == 9',
                                      offsetX:15
                                    }
                                  ]
                                },
                                labels:['0','10','20','30','40','50','60','70','80','90','100'],
                                ring:{
                                  size:25,
                                  rules:[
                                    {
                                      rule:'%v < 30',
                                      backgroundColor:'#5cb85c'
                                    },
                                    {
                                      rule:'%v >= 30 && %v < 60',
                                      backgroundColor:'#337ab7'
                                    },
                                    {
                                      rule:'%v >= 60 && %v < 90',
                                      backgroundColor:'#FFA726'
                                    },
                                    {
                                      rule:'%v >= 90',
                                      backgroundColor:'#E53935'
                                    }      
                                  ]
                                }
                              },
                              refresh:{  
                                  type:"feed",
                                  transport:"js",
                                  url:"feed()",
                                  interval:10,
                                  resetTimeout:10
                              },
                              series : [
                                {
                                  values : [parseInt(consomationPrevue)], // starting value
                                  backgroundColor:'black',
                                  indicator:[5,5,5,5,0.75],
                                  animation:{  
                                    effect:2,
                                    method:1,
                                    sequence:4,
                                    speed: 900
                                 },
                                }
                              ]
                            };
                             
                            zingchart.render({ 
                              id : 'myChart', 
                              data : myConfig, 
                              height: 250, 
                              width: '100%'
                            });
                  }
                  function jrsConsome(sumRealDuration,sumConsomeDuration){
                    var jrsPrevue=parseFloat(sumRealDuration/8).toFixed(0);
                    var jrsConsom=parseFloat(sumConsomeDuration/8).toFixed(0);
                    var datas=[jrsPrevue,jrsConsom];
                    var label=["jours prévus","jours consommés"];
                    var ctxPie = document.getElementById("myPieChart").getContext('2d');
                      if(window.echartPie != undefined)
                    {
                      window.echartPie.destroy();
                    }
                    window.echartPie = new Chart(ctxPie, {
                        type: 'pie',
                        data: {
                          labels: label,
                          datasets: [{
                            backgroundColor: ["#f0ad4e","#5cb85c","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e"],
                            data: datas
                          }]
                        },
                          options:{
                            

                         

                            responsive: true,
                            legend: { display: true,position: 'top',},
                          
                          
                            plugins:{
                              title: {
                                display: true,
                                text: 'Nombre des jours consommés'
                            },
                          labels: {
                            render: 'value',
                            fontColor: '#fff',
                            position: 'inside',
                            fontSize:20
                          }
                        },

                         


                          }
                      });

 

       
}

                  
///--------------------------------------------------------------------------------------------------------------------------------------------------------------
var urlDateGlissement = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectStartDate,ProjectFinishDate,Sousprojet";
var responseDateGlissement = responseDateGlissement ||[];

function getDateGlissement(){
  $.ajax({url:  urlDateGlissement,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseDateGlissement = responseDateGlissement.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDateGlissement = data.d.__next;
                                            getDateGlissement();
                                        } 
                var idProjetG=[];
                var dateDebProjetG=[];
                var dateFinProjetG=[];
                var dateFinRefG=[];
                  
            $.each(responseDateGlissement, function(key, value) 
            { 
              var sousprojet=value.Sousprojet;
              if (sousprojet!="Oui") {
                var idP=value.ProjectId;
               var projStartDate=value.ProjectStartDate;
               var projfinshtDate=value.ProjectFinishDate;
               if (idProjetG.indexOf(idP)==-1) {
                idProjetG.push(idP);
                dateDebProjetG.push(projStartDate);
                dateFinProjetG.push(projfinshtDate);
                dateFinRefG.push("");
               }
              }
               

            });
calculGlissementGlobal(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG);


}   
});
}
getDateGlissement();




var urlDateBaseGlissement = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]//ProjectBaselines?$select=ProjectId,ProjectBaselineFinishDate";
var responseBaseDateGlissement = responseBaseDateGlissement ||[];
function calculGlissementGlobal(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG){
   $.ajax({url:  urlDateBaseGlissement,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseBaseDateGlissement = responseBaseDateGlissement.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDateBaseGlissement = data.d.__next;
                                            calculGlissementGlobal(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG);
                                        } 
                                        var durReel=[];
                                        var durRef=[];
                                        var glissArray=[];
                                        var avgGliss=0;
                                        var sumGliss=0;
                  
              
            $.each(responseBaseDateGlissement, function(key, value) 
            { 
              var idProjBaseline=value.ProjectId;
              var finRefProj=value.ProjectBaselineFinishDate;
              for (var i =0; i<idProjetG.length; i++) {
                if (idProjBaseline==idProjetG[i]) {
                  dateFinRefG[i]=finRefProj;
                }
                //idProjetG[i]
              }

            });
             moment.locale('fr');
            

            // //////////console.log("idProjetG = "+ idProjetG.join());
            // //////////console.log("dateDebProjetG = "+ dateDebProjetG.join());
            // //////////console.log("dateFinProjetG = "+ dateFinProjetG.join());
            // //////////console.log("dateFinRefG = "+ dateFinRefG.join());

            // //////////console.log("idProjetG length = "+ idProjetG.length);
            // //////////console.log("dateDebProjetG length = "+ dateDebProjetG.length);
            // //////////console.log("dateFinProjetG length = "+ dateFinProjetG.length);
            // //////////console.log("dateFinRefG length = "+ dateFinRefG.length);
            
            for (var i = 0; i <dateFinRefG.length; i++) {
              if(dateFinRefG[i]!=""){
                var refFinish=moment(dateFinRefG[i]);
                var dateFin=moment(dateFinProjetG[i]);
                var daetDeb=moment(dateDebProjetG[i]);
                var realDuration=dateFin.diff(daetDeb,'days');
                var baseDuration=refFinish.diff(daetDeb,'days');
                var gliss=0;
                gliss=parseFloat(((realDuration-baseDuration)/realDuration)*100);
                if (gliss<0) {
                  gliss=0;
                }
                ////////////console.log("gliss= "+gliss);
                glissArray.push(gliss);
              }
            }
            ////////////console.log("glissArray= "+glissArray.join());
            for (var i = 0; i < glissArray.length; i++) {
              sumGliss+=parseFloat(glissArray[i])
            }
            ////////////console.log("sumGliss= "+ sumGliss);
            avgGliss=parseFloat(sumGliss/glissArray.length).toFixed(0);
            ////////////console.log("avgGliss= "+avgGliss);
            document.getElementById("glissementportefeuille").innerHTML=avgGliss+"%";

            //up mid down

            if ((avgGliss>=0)&&(avgGliss<30)) {
              $("#up").css("display", "block");
              $("#mid").css("display", "none");
              $("#down").css("display", "none");
              $("#glissementportefeuille").css("color", "#5cb85c");
            }
            else if ((avgGliss>=30)&&(avgGliss<=60)) {              
              $("#down").css("display", "block");
              $("#up").css("display", "none");
              $("#mid").css("display", "none");
              $("#glissementportefeuille").css("color", "#ffe650");
            }
            else if (avgGliss>60) {$("#mid").css("display", "block");
              $("#up").css("display", "none");
              $("#down").css("display", "none");
              $("#glissementportefeuille").css("color", "#e06950");
            }
}           
});
}















        var responseCost=responseCost || [];
        var urlCost= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectActualCost,ProjectRemainingCost";
        function loadCost(){
          $.ajax({
                        url: urlCost,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseCost = responseCost.concat(data.d.results);
                            if (data.d.__next) {
                                urlCost = data.d.__next;
                                loadCost();
                            }
                            
                            
                            var sumRealCost=0;
                            var sumConsomCost=0;
                            var sumCoutRestant=0;
                            $.each(responseCost, function (key, value) {                              
                               var coutReel=value.ProjectCost;
                               var coutConsomme=value.ProjectActualCost;
                               var coutRestant=parseFloat(coutReel-coutConsomme);
                               ////////////////console.log.log("coutRestant= "+coutRestant);
                               sumRealCost+=parseFloat(coutReel);
                               sumConsomCost+=parseFloat(coutConsomme);
                               sumCoutRestant+=parseFloat(coutRestant);
                            });
                            ////////////////console.log.log("sumCoutRestant= "+sumCoutRestant);
                            ////////////////console.log.log("sumConsomCost= "+sumConsomCost);
                            // 
                            var depassementCout=parseFloat((sumRealCost-sumConsomCost)/sumConsomCost);
                            ////////////////console.log.log("depassementCout= "+depassementCout);
                            //setInterval(function() {
                              functionary(depassementCout);
                            //}, 3000);
                            poorcentageConsommation=parseFloat((sumCoutRestant/sumRealCost)*100).toFixed(0);
                            document.getElementById("consoCouPrevue").innerHTML=poorcentageConsommation+"%";
                            var tr;
                                tr = $("<tr>");
                                tr.append("<td>" + conToMill(parseFloat(sumRealCost).toFixed(0)) + "</td>");//0
                                tr.append("<td>" + conToMill(parseFloat(sumConsomCost).toFixed(0)) + "</td>");//1                        
                                tr.append("<td>" + parseFloat(depassementCout).toFixed(0) + "</td>"); //2
                                $('#tabCout tbody').append(tr);
                        }
                    });
        }
        loadCost();
        var responseRiskss=responseRiskss || [];
        var urlRiskss=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectId,ProjectName";
        function loadRiskss(){
          $.ajax({
                        url: urlRiskss,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRiskss = responseRiskss.concat(data.d.results);
                            if (data.d.__next) {
                                urlRiskss = data.d.__next;
                                loadRiskss();
                            }
                            var arrNoms=[];
                            var arrNomP=[];
                            var arrayStat=[];
                            var arrayScore=[];
                            var arrayProba=[];
                            var arrayImpacts=[];
                            var arrayDateDec=[];
                            $.each(responseRiskss, function (key, value) {
                               
                                      var nomP=value.ProjectName;
                                      var nomProjet1=nomP.replace(/\s/g, '%20')
                                      arrNoms.push(nomProjet1);
                                      //-----------
                                      arrNomP.push(nomP);
                                      arrayStat.push("");
                                      arrayScore.push("");
                                      arrayProba.push("");
                                      arrayImpacts.push("");
                                      arrayDateDec.push("");
                                      //---------
                                   
                                  
                            });
                            var arrayStatut=[];
                            var arrayValStatut=[];
                            var arrayPriorite=[];
                            var arrayValPriorite=[];
                            
                            for (var i = 0; i < arrNoms.length; i++) {
                              //////console.log("arrNoms[i]= "+arrNoms[i]);
                              analyseDesRisques(arrNoms[i],arrNomP[i],arrayStatut,arrayValStatut,arrayPriorite,arrayValPriorite,arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec);
                            }


                          }
                        });
        }
        loadRiskss();
        function analyseDesRisques(nomProj,nomPJ,arrayStatut,arrayValStatut,arrayPriorite,arrayValPriorite,arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec){
          
            
            ////////////console.log("nomPJ= "+nomPJ);
            var responseRisk=responseRisk || [];
            var urlRisk= _spPageContextInfo.siteAbsoluteUrl + "/"+nomProj+"/_api/web/lists/getByTitle('Risks')/items";
            ////////////////console.log.log("urlRisk= "+urlRisk);
            function loadRisk(){

              $.ajax({
                            url: urlRisk,
                            method: "GET",
                            dataType: "json",
                            headers: { Accept: "application/json;odata=verbose" },
                            success: function (data) {
                                responseRisk = responseRisk.concat(data.d.results);
                                if (data.d.__next) {
                                    urlRisk = data.d.__next;
                                    loadRisk();
                                }
                                
                              
                               if (responseRisk.length>0) {
                                $.each(responseRisk, function (key, value) {
                                  moment.locale('fr');
                                   var statutRisk=value.Statut;
                                   var score=value.Score;
                                   var probabilite=value.Probabilit_x00e9_;
                                   var impact="";
                                   if (value.Impacts!=null) {
                                    impact=value.Impacts;
                                   }
                                   var dateDec=value.D_x00e9_tect_x00e9__x0020_le;
                                   ////////////console.log("dateDec= "+dateDec);
                                   var dateDeclanchement=moment(dateDec).format('DD-MM-YYYY');
                                   if (value.D_x00e9_tect_x00e9__x0020_le==null) {
                                    dateDeclanchement="";
                                   }
                                   arrayStat[arrNomP.indexOf(nomPJ)]=statutRisk;
                                   arrayScore[arrNomP.indexOf(nomPJ)]=score;
                                   arrayProba[arrNomP.indexOf(nomPJ)]=probabilite;
                                   arrayImpacts[arrNomP.indexOf(nomPJ)]=impact;
                                   arrayDateDec[arrNomP.indexOf(nomPJ)]=dateDeclanchement;
                                   if (arrayStatut.indexOf(statutRisk)<0) {
                                    arrayStatut.push(statutRisk);
                                    arrayValStatut.push(1);
                                   }else{
                                    arrayValStatut[arrayStatut.indexOf(statutRisk)]+=1;
                                   }
                                   var prioriteRisk=value.Priorit_x00e9_;
                                   ////////////////console.log.log("prioriteRisk= "+prioriteRisk);
                                   if (arrayPriorite.indexOf(prioriteRisk)<0) {
                                    arrayPriorite.push(prioriteRisk);
                                    arrayValPriorite.push(1);
                                   }else{
                                    arrayValPriorite[arrayPriorite.indexOf(prioriteRisk)]+=1;
                                   }

                                });
                                // ////////////console.log("arrayStat= "+arrayStat);
                                // ////////////console.log("arrayScore= "+arrayScore);
                                // ////////////console.log("arrayProba= "+arrayProba);
                                // ////////////console.log("arrayImpacts= "+arrayImpacts);
                                // ////////////console.log("arrayDateDec= "+arrayDateDec);
                               
                                  //////////////console.log.log("arrayPriorite= "+arrayPriorite);
                                  //////////////console.log.log("arrayValPriorite= "+arrayValPriorite);
            
                                  risqueParStatut(arrayStatut,arrayValStatut);
                                  risqueParPriorite(arrayPriorite,arrayValPriorite);
                                  loadTabGravRisk(arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec);
                               
                               }
                                
                                
                            
                                
                            }
                        });

            }
            loadRisk();

            
        }

        function risqueParStatut(arrayStatut,arrayValStatut) {
            // Bar chart   
            document.getElementById("bar1").innerHTML='<canvas id="bar-chart" width="100%"></canvas>';
            var ctx0 = document.getElementById("bar-chart").getContext('2d');
                    if(window.ctx0 != undefined)
                    {
                      window.ctx0.destroy();
                    }
                         window.ctx0 = new Chart(ctx0, {
                        type: 'bar',
                        data: {
                          labels: arrayStatut,
                          datasets: [{
                            backgroundColor: ["#5cb85c", "#f0ad4e", "#d9534f", "#e8c3b9", "#337ab7"],
                            label: 'Risques',
                            data: arrayValStatut
                          }]
                        },
                        options:{
                        legend: { display: false },
                        title: {
                             display: true,
                             text: ' '
                         },
                         scales: {
                        xAxes: [{
                            ticks: {

                                fontSize: 12
                            },
                             scaleLabel: {
                              display: true,
                              fontSize: 15,
                              labelString: "Statut"
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                             scaleLabel: {
                              display: true,
                              fontSize: 15,
                              labelString: "Nombre des risques"
                            }
                        }]
                    },
                       

                          responsive: true,
                          
                        
                        
                          plugins:{
                        labels: {
                          render: 'value',
                          fontColor: '#000',
                          position: 'outside',
                          fontSize:20
                        }
                      },

                       


                        }
                      });
        }
        
        function risqueParPriorite(arrayPriorite,arrayValPriorite) {
            // Bar chart 
            document.getElementById("bar2").innerHTML='<canvas id="bar-chart1" width="100%"></canvas>';
            var ctx = document.getElementById("bar-chart1").getContext('2d');
                    if(window.ctx != undefined)
                    {
                      window.ctx.destroy();
                    }
                         window.ctx = new Chart(ctx, {
                        type: 'bar',
                        data: {
                          labels: arrayPriorite,
                          datasets: [{
                            backgroundColor: ["#5cb85c", "#f0ad4e", "#d9534f", "#337ab7"],
                            label: 'Risques',
                            data: arrayValPriorite
                          }]
                        },
                        options:{
                        legend: { display: false },
                        title: {
                             display: true,
                             text: ' ',                                                      
                         },
                         scales: {
                        xAxes: [{
                            ticks: {

                                fontSize: 12
                            },
                             scaleLabel: {
                              display: true,
                              fontSize: 15,
                              labelString: "Priorité"
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                             scaleLabel: {
                              display: true,
                              fontSize: 15,
                              labelString: "Nombre des risques"
                            }
                                    }]
                    },
                       

                          responsive: true,
                          
                        
                        
                          plugins:{
                        labels: {
                          render: 'value',
                          fontColor: '#000',
                          position: 'inside',
                          fontSize:20
                        }
                      },

                       


                        }
                      });
            
        }
        

        function loadTabGravRisk(arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec){
           var sumScore=0;
           var avgScore=0;
           var countSc=0;
          for (var i = 0; i < arrayScore.length; i++) {
            if (arrayStat[i]!="") {
              countSc++;
              sumScore=parseFloat(sumScore)+parseFloat(arrayScore[i]);
              //////console.log("arrayScore[i]= "+arrayScore[i]);
            }            
          }
          avgScore=parseFloat(sumScore/countSc).toFixed(0);
          //////console.log("avgScore= "+avgScore);
          //scoreRisk();
          var valeur=[avgScore];
                    var myConfig = {
                              type: "gauge",
                              globals: {
                                fontSize: 20,
                                'background-color':'transparent'
                              },

                              plotarea:{
                                marginTop: 0,
                              },
                              plot:{
                                size:'100%',
                                valueBox: {
                                  placement: 'center',
                                  text:'%v', //default
                                  fontSize:30,
                                  rules:[
                                    {
                                      rule: '%v > 12',
                                      text: '%v<br>ÉLEVÉ'
                                    },
                                    
                                    {
                                      rule: '%v <= 12 && %v >= 6',
                                      text: '%v<br>MOYEN'
                                    },
                                    {
                                      rule: '%v <=  5',
                                      text: '%v<br>FAIBLE'
                                    }   
                                  ]
                                }
                              },
                              tooltip:{
                                borderRadius:5
                              },
                              scaleR:{
                                aperture:180,
                                minValue:0,
                                maxValue:25,
                                step:3,
                                center:{
                                  visible:false
                                },
                                tick:{
                                  visible:false
                                },
                                item:{
                                  offsetR:0,
                                  rules:[
                                    {
                                      rule:'%i == 9',
                                      offsetX:15
                                    }
                                  ]
                                },
                                labels:['0','','6','','12','','','','','25'],
                                ring:{
                                  size:60,
                                  rules:[
                                    {
                                      rule:'%v <= 5',
                                      backgroundColor:'#5cb85c'
                                    },
                                    
                                    {
                                      rule:'%v >= 6 && %v <= 12',
                                      backgroundColor:'#FFA726'
                                    },
                                    {
                                      rule:'%v > 12',
                                      backgroundColor:'#E53935'
                                    }      
                                  ]
                                }
                              },
                              refresh:{  
                                  type:"feed",
                                  transport:"js",
                                  url:"feed()",
                                  interval:10,
                                  resetTimeout:10
                              },
                              series : [
                                {
                                  values : [parseInt(avgScore)], // starting value
                                  backgroundColor:'black',
                                  indicator:[15,5,5,5,0.75],
                                  animation:{  
                                    effect:2,
                                    method:2,
                                    sequence:4,
                                    speed: 900
                                 },
                                }
                              ]
                            };
                             
                            zingchart.render({ 
                              id : 'myChartGra', 
                              data : myConfig, 
                              /*height: 550, */
                              width: '100%'
                            });
        }

              /*function scoreRisk(){
          var numRows = document.getElementById("tabGravRisk").rows.length;
          //////////console.log("numRows= "+numRows);
            for(var i=1;i<numRows;i++)
            {
              var tbl = document.getElementById("tabGravRisk");
              ////////////console.log("parseInt(tbl.rows[i].cells[2].innerHTML= "+tbl.rows[i].cells[2].innerHTML);
              if ((tbl.rows[i].cells[2].innerHTML>=0)&&(tbl.rows[i].cells[2].innerHTML<=5)) {
                tbl.rows[i].cells[2].style.backgroundColor='#5cb85c';
                      tbl.rows[i].cells[2].style.color='white';
              }else if ((tbl.rows[i].cells[2].innerHTML>=6)&&(tbl.rows[i].cells[2].innerHTML<=12)) {
                tbl.rows[i].cells[2].style.background='#f0ad4e';
                      tbl.rows[i].cells[2].style.color='white';
              }else if (tbl.rows[i].cells[2].innerHTML>12) {
                tbl.rows[i].cells[2].style.background='#E34434';
                      tbl.rows[i].cells[2].style.color='white';
              }
             }
            }    */

                  function functionary(time) {
                    var red = document.getElementById('redL')
                    var yellow = document.getElementById('yellowL')
                    var green = document.getElementById('greenL')
                    var Colours = ["#FF0000", "#FFB300", "#05FF0D", "#7A0000", "#7A5C00", "#008000"];
                     if (time < 0) {
                       red.style.background = Colours[0]; // May need spacebar between index number
                       yellow.style.background = Colours[4];
                       green.style.background = Colours[5];
                       document.getElementById("hoverCout").innerHTML="dépassement des coûts prévus";
                     } else if (time == 0) {
                       red.style.background = Colours[3];
                       yellow.style.background = Colours[1];
                       green.style.background = Colours[5];
                       document.getElementById("hoverCout").innerHTML="tous les budgets prévus sont consomés";
                    } else if (time > 0) {
                      red.style.background = Colours[3];
                      yellow.style.background = Colours[4];
                      green.style.background = Colours[2];
                      document.getElementById("hoverCout").innerHTML="Les budgets prévus sont supérieurs aux budgets actuels";
                    }
                    //hoverCout
                    //si la couleur rouge clignote c'est une Alerte sur le dépassement des coûts prévus
                  }
                  
        

    </script>
</body>

</html>