<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/css/bootstrap.min.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/css/bootstrap.css"  rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/css/style.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/css/achevement.css"  rel="stylesheet">
    <link  href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/css/dataTables.bootstrap4.min.css"  rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/css/w3.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/css/jquery.dataTables.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

    <style>
        .ms-core-listMenu-verticalBox,
        .ms-core-listMenu-horizontalBox {
            font-size: 0.9em;
        }

        span.ms-cui-tt-span {
            display: none;
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




        g.highcharts-no-tooltip.highcharts-button.highcharts-contextbutton {
            display: none;
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
            transform: rotate(90deg);
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
            ;
        }

        body#page-top {
            margin-top: 0px;
        }

        .ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
            display: none;
        }

        rect.highcharts-background {
            height: 215px;
        }

        table {
            border-collapse: collapse;
            border-radius: 1em;
            overflow: hidden;
        }


        text.highcharts-credits {
            display: none;
        }


        #containerAnalyse {
            width: 100%;
            height: 31vh;
        }

        #container1 {
            width: 100%;
            height: 31vh;
        }

        #containerdepassement {
            width: 100%;
            height: 33vh;
        }

        #containergravite {
            width: 100%;
            height: 26vh;
        }

    </style>
</head>

<body id="page-top">



    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="border-radius: 5px;">
            <ul class="nav navbar-right top-nav">
                <h3 id="titre" style="color: white; float: left; margin-bottom: 0px;margin-top: 0px;">Comité chantier
                </h3>
            </ul>
            <select class="mdb-select md-form"
                style="float: right; width: 15%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: azure;"
                id="myList3" onchange="">
                <option value="">Projet</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 15%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: azure;"
                id="myList5" onchange="">
                <option value="">Chef de projet</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 15%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: azure;"
                id="myList6" onchange="">
                <option value="">Période</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 15%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: azure;"
                id="myList7" onchange="">
                <option value="">Structure</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 15%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ; cursor: alias; border-color: azure;"
                id="myList6" onchange="">
                <option value="">Méthodologie</option>
            </select>
        </nav>

        <div id="page-wrapper">
            <div class="container-fluid">
                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                    <img src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/img/logo-tt.svg"  width="150" height="100">
                        <h1 class="page-header" id="DateJr" style="float: right;margin: 0px 20px;"></h1>
                        <ol class="breadcrumb" style="width: 100%;">
                            <li class="active" id="projTitle">
                            </li>
                        </ol>
                    </div>
                </div>
                <!-- /.row -->
                <div class="row" id="row0">
                    <div class="col-lg-12">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Statut Global
                                </h3>
                            </div>
                            <div class="panel-body" style="padding: 0px 15px;">
                                <div class="row">
                                    <div class="col-sm-4">

                                        <div class="panel panel-info" style=";margin-top: 10px;margin-bottom: 10px;">
                                            <div class="panel-body" style="padding-top: 5px;">
                                                <div class="row">
                                                    <div class="col-sm-6" style="padding: 0px 15px;">

                                                        <div class="col-sm-12" style="padding: 10px 0px 0px 0px;">
                                                            <div class="rounded-lg p-3 shadow"
                                                                style="padding: 0.75rem; background-color: aliceblue;">
                                                                <h2 class="h5 font-weight-bold text-center mb-2"
                                                                    style="margin-top: 0px;">Statut global</h2>
                                                                <!-- Demo info -->
                                                                <div class="row text-center mt-2"
                                                                    style=" margin-top: 0px;">
                                                                    <div class="col-12" id="statutGlKPI">
                                                                        
                                                                    </div>
                                                                </div><!-- END -->
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-12" style="padding: 10px 0px 0px 0px;">
                                                            <div class="rounded-lg p-4 shadow"
                                                                style="padding: 0.75rem;  background-color: aliceblue; background-color: aliceblue;">
                                                                <h2 class="h5 font-weight-bold text-center mb-2"
                                                                    style="margin-top: 0px;">Nombre de projet</h2>
                                                                <!-- Demo info -->
                                                                <div class="row text-center mt-2"
                                                                    style=" margin-top: 0px;">
                                                                    <div class="col-12">
                                                                        <div class="h3 font-weight-bold mb-0"
                                                                            style=" margin-top: 0px;" id="countProj"></div><span
                                                                            class="small text-gray">Projets</span>
                                                                    </div>
                                                                </div><!-- END -->
                                                            </div>
                                                        </div>


                                                    </div>

                                                    <div class="col-sm-6">
                                                        <div class="col-sm-12" style="padding: 10px 0px 0px 0px;" id="chartAchGen">
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="panel-heading" style="padding: 0px;">
                                            <h3 style="text-align: center; background-color: #337ab7; color: white;"><i
                                                    class="fa fa-bar-chart-o fa-fw"></i> Vue détaillée des projets
                                            </h3>
                                            <table class="table table-bordered table-hover table-striped"
                                                style="border-radius:15px" id="tableProjet">
                                                <thead
                                                    style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black;">
                                                    <tr>
                                                        <th style="text-align:center">Nom de projet</th>
                                                        <th style="text-align:center">Statut</th>
                                                        <th style="text-align:center">% achèvement</th>
                                                        <th style="text-align:center">% Glissement</th>
                                                        <th style="text-align:center">Début actuel</th>
                                                        <th style="text-align:center">Fin actuel</th>
                                                        <th style="text-align:center">Maturité planning</th>
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
                <!-- /.row -->
                <div class="row" id="row1" style="">
                    <div class="col-lg-12">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-bar-chart-o fa-fw"></i> Analyse par statut
                                </h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div id="" style="width:  100%;">



                                        <div class="col-sm-2">
                                            <div class="rounded-lg p-2 shadow" style=" background-color: aliceblue;">
                                                <h2 class="h6 font-weight-bold text-center mb-4">Terminés</h2>


                                                <div class="progress mx-auto" id="terminePour" data-value="50">
                                                    <span class="progress-left">
                                                        <span class="progress-bar border-primary" "></span> 
                                            </span> 
                                            <span class=" progress-right">
                                                            <span class="progress-bar border-primary"
                                                                style="transform: rotate(180deg);"></span>
                                                        </span>
                                                        <div
                                                            class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                            <div class="h2 font-weight-bold">50<sup
                                                                    class="small">%</sup></div>
                                                        </div>
                                                </div>
                                                <!-- END -->

                                                <!-- Demo info -->
                                                <div class="row text-center mt-4">
                                                    <div class="col-12">
                                                        <div class="h4 font-weight-bold mb-0">28</div><span
                                                            class="small text-gray">Projets</span>
                                                    </div>
                                                    <div class="col-6">

                                                    </div>
                                                </div>
                                                <!-- END -->
                                            </div>
                                        </div>

                                        <div class="col-sm-2">
                                            <div class="rounded-lg p-2 shadow" style=" background-color: aliceblue;">
                                                <h2 class="h6 font-weight-bold text-center mb-4">A terminer</h2>

                                                <!-- Progress bar 2 -->
                                                <div class="progress mx-auto" id="aTerminePour" data-value="10">
                                                    <span class="progress-left">
                                                        <span class="progress-bar border-danger"></span>
                                                    </span>
                                                    <span class="progress-right">
                                                        <span class="progress-bar border-danger"
                                                            style="transform: rotate(90deg);"></span>
                                                    </span>
                                                    <div
                                                        class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                        <div class="h2 font-weight-bold">25<sup class="small">%</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- END -->

                                                <!-- Demo info-->
                                                <div class="row text-center mt-4">
                                                    <div class="col-12">
                                                        <div class="h4 font-weight-bold mb-0">28</div><span
                                                            class="small text-gray">Projets</span>
                                                    </div>
                                                    <div class="col-6">

                                                    </div>
                                                </div>
                                                <!-- END -->
                                            </div>
                                        </div>

                                        <div class="col-sm-2">
                                            <div class="rounded-lg p-2 shadow" style=" background-color: aliceblue;">
                                                <h2 class="h6 font-weight-bold text-center mb-4">En cours</h2>

                                                <!-- Progress bar 3 -->
                                                <div class="progress mx-auto" id="enCoursPour" data-value="90">
                                                    <span class="progress-left">
                                                        <span class="progress-bar border-success"
                                                            style="transform: rotate(93.6deg);"></span>
                                                    </span>
                                                    <span class="progress-right">
                                                        <span class="progress-bar border-success"
                                                            style="transform: rotate(180deg);"></span>
                                                    </span>
                                                    <div
                                                        class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                        <div class="h2 font-weight-bold">76<sup class="small">%</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- END -->

                                                <!-- Demo info -->
                                                <div class="row text-center mt-4">
                                                    <div class="col-12">
                                                        <div class="h4 font-weight-bold mb-0">28</div><span
                                                            class="small text-gray">Projets</span>
                                                    </div>
                                                    <div class="col-6">

                                                    </div>
                                                </div>
                                                <!-- END -->
                                            </div>
                                        </div>

                                        <div class="col-sm-2">
                                            <div class="rounded-lg p-2 shadow" style=" background-color: aliceblue;">
                                                <h2 class="h6 font-weight-bold text-center mb-4">En retard</h2>

                                                <!-- Progress bar 4 -->
                                                <div class="progress mx-auto" id="retardPour" data-value="20">
                                                    <span class="progress-left">
                                                        <span class="progress-bar border-warning"></span>
                                                    </span>
                                                    <span class="progress-right">
                                                        <span class="progress-bar border-warning"
                                                            style="transform: rotate(43.2deg);"></span>
                                                    </span>
                                                    <div
                                                        class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                        <div class="h2 font-weight-bold">12<sup class="small">%</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- END -->

                                                <!-- Demo info -->
                                                <div class="row text-center mt-4">
                                                    <div class="col-12">
                                                        <div class="h4 font-weight-bold mb-0">28</div><span
                                                            class="small text-gray">Projets</span>
                                                    </div>
                                                    <div class="col-6">

                                                    </div>
                                                </div>
                                                <!-- END -->
                                            </div>
                                        </div>




                                        <div class="col-sm-2">
                                            <div class="rounded-lg p-2 shadow" style=" background-color: aliceblue;">
                                                <h2 class="h6 font-weight-bold text-center mb-4">Arrêtés</h2>
                                                <!-- Progress bar 5 -->
                                                <div class="progress mx-auto" id="retardPour" data-value="45">
                                                    <span class="progress-left">
                                                        <span class="progress-bar border-warning"></span>
                                                    </span>
                                                    <span class="progress-right">
                                                        <span class="progress-bar border-warning"
                                                            style="transform: rotate(43.2deg);"></span>
                                                    </span>
                                                    <div
                                                        class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                        <div class="h2 font-weight-bold">12<sup class="small">%</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- END -->

                                                <!-- Demo info -->
                                                <div class="row text-center mt-4">
                                                    <div class="col-12">
                                                        <div class="h4 font-weight-bold mb-0">28</div><span
                                                            class="small text-gray">Projets</span>
                                                    </div>
                                                    <div class="col-6">

                                                    </div>
                                                </div>
                                                <!-- END -->
                                            </div>
                                        </div>

                                        <div class="col-sm-2">
                                            <div class="rounded-lg  shadow"
                                                style="padding: 2.5rem; background-color: aliceblue;">
                                                <h2 class="h5 font-weight-bold text-center mb-4">Projet términés sur la
                                                    période</h2>
                                                <!-- Demo info -->
                                                <div class="row text-center mt-4">
                                                    <div class="col-12">
                                                        <div class="h3 font-weight-bold mb-0">28</div><span
                                                            class="small text-gray">Projets</span>
                                                    </div>
                                                    <div class="col-6">

                                                    </div>
                                                </div>
                                                <!-- END -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
                <div class="row" id="row2" style="">
                    <div class="col-lg-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-clock-o fa-fw"></i> Analyse par délais
                                </h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">

                                    <div style="width:100%;">
                                        <div class="col-lg-6" style="padding-right: 7px; padding-left: 10px;">
                                            <div class="panel panel-default">

                                                <div class="panel-body">
                                                    <div id="tabResponsive">
                                                        <div id="containerAnalyse"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6" style="padding-right: 7px; padding-left: 10px;">
                                            <div class="panel panel-default">
                                                <div class="panel-body">
                                                    <div id="tabResponsive">
                                                        <div id="container1"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="panel panel-info" style=" background-color: #e6f7ff;">

                                                <div class="panel-body" style="padding: 0px;">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <h4
                                                                style="text-align: center;margin-top: 0px;margin-bottom: 0px;">
                                                                En %</h4>
                                                        </div>
                                                        <div class="col-sm-6" 
                                                            style="text-align: center">


                                                            <h3 id="coutPrevue2" style="font-weight: bold;color:#5cb85c;margin-top: 0px;margin-bottom: 0px;">
                                                                </h3>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                            <div class="panel panel-info"
                                                style=" background-color: #e6f7ff;margin-bottom: 0px;">

                                                <div class="panel-body" style="padding: 0px;">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <h4
                                                                style="text-align: center;margin-top: 0px;margin-bottom: 0px;">
                                                                En valeur</h4>
                                                        </div>
                                                        <div class="col-sm-6" 
                                                            style="text-align: center">


                                                            <h3 id="coutPrevue3" style="font-weight: bold;color:#5cb85c;margin-top: 0px;margin-bottom: 0px;">
                                                                2%</h3>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-sm-6">

                                            <div class="panel panel-info" style=" background-color: #e6f7ff;">

                                                <div class="panel-body" style="padding: 0px;">
                                                    <div class="row">
                                                        <div class="col-sm-5">
                                                            <h4
                                                                style="text-align: center;margin-bottom: 0px;margin-top: 0px;">
                                                                Glissement</h4>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <div class="col-sm-6" style=" float: right;">
                                                                <i class="fa fa-arrow-down fa-2x" aria-hidden="true"
                                                                    style="color:#5cb85c;float: left;" id="downArrow1"></i>
                                                                <i class="fa fa-arrow-up fa-2x" aria-hidden="true"
                                                                    style="color: #e06950; display: none;float: left;"id="upArrow1"></i>
                                                                <i class="fa fa-arrow-right fa-2x" aria-hidden="true"
                                                                    style="color: #ffe650; display: none; float: left;" id="rightArrow1"></i>
                                                            </div>
                                                            <div class="col-sm-6" style="text-align: center">
                                                                <h3 style="font-weight: bold;color:#5cb85c;margin-top: 0px;margin-bottom: 0px;"id="glissmentKPI"></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="panel panel-info"
                                                style=" background-color: #e6f7ff;margin-bottom: 0px;">

                                                <div style="padding: 0px;" class="panel-body">
                                                    <div class="row">
                                                        <div class="col-sm-5">
                                                            <h4
                                                                style="text-align: center;margin-bottom: 0px;margin-top: 0px;"id="MatPlanKPI">
                                                                Maturité</h4>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <div class="col-sm-6" style=" float: right;">
                                                                <i class="fa fa-arrow-down fa-2x" aria-hidden="true"
                                                                    style="color:#5cb85c;display: none;float: left;"id="downArrow2"></i>
                                                                <i class="fa fa-arrow-up fa-2x" aria-hidden="true"
                                                                    style="color: #e06950;float: left;"id="upArrow2"></i>
                                                                <i class="fa fa-arrow-right fa-2x" aria-hidden="true"
                                                                    style="color: #ffe650;display: none;float: left;"id="rightArrow2"></i>
                                                            </div>
                                                            <div class="col-sm-6" style="text-align: center">
                                                                <h3
                                                                    style="font-weight: bold;color:#e06950;margin-top: 0px;margin-bottom: 0px;">
                                                                    2%</h3>
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
                    <div class="col-lg-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-money fa-fw"></i> Analyse des coût</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">

                                    <div class="col-sm-12" style="padding-right: 7px; padding-left: 10px;">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="panel panel-default">

                                                    <div class="panel-body">
                                                        <div class="row">
                                                            <div id="tabResponsive" style="margin-left: 11%;">
                                                                <div id="containerdepassement"></div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <div class="panel panel-info"
                                                                    style=" background-color: #e6f7ff;margin-bottom: 0px;">

                                                                    <div class="panel-body" style="padding: 0px;">
                                                                        <div class="row">
                                                                            <div class="col-sm-6">
                                                                                <h4
                                                                                    style="text-align: center;margin-top: 0px;margin-bottom: 0px;">
                                                                                    En %</h4>
                                                                            </div>
                                                                            <div class="col-sm-6" id="coutPrevue2"
                                                                                style="text-align: center">


                                                                                <h3
                                                                                    style="font-weight: bold;color:#5cb85c;margin-top: 0px;margin-bottom: 0px;">
                                                                                    2%</h3>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-sm-6">
                                                                <div class="panel panel-info"
                                                                    style=" background-color: #e6f7ff;margin-bottom: 0px;">

                                                                    <div class="panel-body" style="padding: 0px;">
                                                                        <div class="row">
                                                                            <div class="col-sm-6">
                                                                                <h4
                                                                                    style="text-align: center;margin-top: 0px;margin-bottom: 0px;">
                                                                                    En valeur
                                                                                </h4>
                                                                            </div>
                                                                            <div class="col-sm-6" id="coutPrevue3"
                                                                                style="text-align: center">


                                                                                <h3
                                                                                    style="font-weight: bold;color:#5cb85c;margin-top: 0px;margin-bottom: 0px;">
                                                                                    2%</h3>

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
                                    <div class="col-sm-12">
                                        <div class="col-sm-6">
                                            <div class="panel panel-info"
                                                style=" background-color: #e6f7ff;margin-bottom: 0px;">

                                                <div class="panel-body" style="padding: 0px;">
                                                    <div class="row">
                                                        <div class="col-sm-5">
                                                            <h4
                                                                style="text-align: center;margin-bottom: 0px;margin-top: 0px;">
                                                                Budget total</h4>
                                                        </div>
                                                        <div class="col-sm-7" id="coutPrevue2"
                                                            style="text-align: center">
                                                            <h3
                                                                style="font-weight: bold;color:#5cb85c;margin-top: 0px;margin-bottom: 0px;">
                                                                2%
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="panel panel-info"
                                                style=" background-color: #e6f7ff;margin-bottom: 0px;">

                                                <div class="panel-body" style="padding: 0px;">
                                                    <div class="row">
                                                        <div class="col-sm-7">
                                                            <h4
                                                                style="text-align: center;margin-bottom: 0px;margin-top: 0px;">
                                                                Budget consommé</h4>
                                                        </div>
                                                        <div class="col-sm-5" id="coutPrevue3"
                                                            style="text-align: center">


                                                            <h3
                                                                style="font-weight: bold;color:#5cb85c;margin-top: 0px;margin-bottom: 0px;">
                                                                2%</h3>

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
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-exclamation-triangle fa-fw"></i> Analyse des
                                    risques</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div style="width: 100%">

                                        <div class="col-lg-3">
                                            <div class="panel panel-default">

                                                <div class="panel-body">
                                                    <div id="tabResponsive">
                                                        <canvas id="bar-chart" width="100%" height="75vh"></canvas>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="col-lg-3">
                                            <div class="panel panel-default">

                                                <div class="panel-body">
                                                    <div id="tabResponsive">
                                                        <canvas id="bar-chart1" width="100%" height="75vh"></canvas>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-lg-3">

                                            <div class="panel panel-default">

                                                <div class="panel-body">
                                                    <div id="tabResponsive">
                                                        <div id="containergravite"></div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-3" id="delaitraitement">


                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
    <script  src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/javascript/jquery3.4.1.js"></script>
    <script  src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/javascript/Chart.min.js"></script>
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ressourcesParProjet1/javascript/filter.js"></script>
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/javascript/moment-with-locales.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <script type="text/javascript">

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
        
function percentageToDegrees(percentage) {

                return percentage / 100 * 360

            }



       


        function loadCostPortfolioChart2() {

            $(function () {
                var data = 10;
                var number = 80;
                function arroundMax(number) {
                    var ch = parseInt(number).toString();
                    var ch1 = "";
                    var num = parseInt(ch[0]) + 1;
                    ch1 += num;
                    for (var i = 1; i < ch.length; i++) {
                        ch1 += '0';
                    }

                    return (parseInt(ch1));
                }
                arroundMax(number);
                $('#containerdepassement').highcharts({

                    chart: {
                        type: 'gauge'
                    },
                    title: {
                        text: 'Taux de dépassement',
                        style: {
                            color: '#2ea0e6',
                            fontWeight: 'bold'
                        }
                    },

                    pane: {
                        startAngle: -120,
                        endAngle: 120,
                        background: []
                    },

                    // the value axis
                    yAxis: [{

                        offset: 30,
                        min: 0,
                        max: 100,
                        plotBands: [{
                            from: 0,
                            to: 100,
                            color: '#b8deff' // blue
                        }]
                    }],

                    series: [
                        {
                            name: 'Coût actuel',
                            data: [data],
                            dataLabels: {
                                format: '<span>' + conToMill(data) + '</span><br/>'
                            },
                        }]

                });
            });

        }
        loadCostPortfolioChart2();

        function loadCostPortfolioChart3() {

            $(function () {
                var data = 10;
                var number = 80;
                function arroundMax(number) {
                    var ch = parseInt(number).toString();
                    var ch1 = "";
                    var num = parseInt(ch[0]) + 1;
                    ch1 += num;
                    for (var i = 1; i < ch.length; i++) {
                        ch1 += '0';
                    }

                    return (parseInt(ch1));
                }
                arroundMax(number);
                $('#containergravite').highcharts({

                    chart: {
                        type: 'gauge'
                    },
                    title: {
                        text: 'Gravité',
                        style: {
                            color: '#2ea0e6',
                            fontWeight: 'bold'
                        }
                    },

                    pane: {
                        startAngle: -120,
                        endAngle: 120,
                        background: []
                    },

                    // the value axis
                    yAxis: [{

                        offset: 10,
                        min: 0,
                        max: 100,
                        plotBands: [{
                            from: 0,
                            to: 100,
                            color: '#b8deff' // blue
                        }]
                    }],

                    series: [
                        {
                            name: 'Coût actuel',
                            data: [data],
                            dataLabels: {
                                format: '<span>' + conToMill(data) + '</span><br/>'
                            },
                        }]

                });
            });

        }
        loadCostPortfolioChart3();

        function Delaidetraitement() {
            var critiqueVal = 0;
            var eleveVal = 0;
            var moyVal = 0;
            var faibleVal = 0;
            document.getElementById("delaitraitement").innerHTML =
                '<h2 class="h5 font-weight-bold text-center mb-4" style="margin-top: 0px;">Délai de taritement</h2>' +
                '<a href="#" class="list-group-item" style="font-size: 17px;"> <span class="badge"style="font-size: 17px;">' + critiqueVal + '</span> <i class="fa fa-fw fa-percent fa-2x"></i> Critique </a>' +
                '<a href="#" class="list-group-item" style="font-size: 17px;"><span class="badge"style="font-size: 17px;">' + eleveVal + '</span> <i class="fa fa-fw fa-briefcase fa-2x"></i> Elevé</a>' +
                '<a href="#" class="list-group-item" style="font-size: 17px;"> <span class="badge"style="font-size: 17px;">' + moyVal + '</span> <i class="fa fa-fw fa-briefcase fa-2x"></i>Moyen</a>' +
                '<a href="#" class="list-group-item" style="font-size: 17px;"> <span class="badge"style="font-size: 17px;">' + faibleVal + '</span> <i class="fa fa-fw fa-briefcase fa-2x"></i>Faible</a>';
        }
        Delaidetraitement();

        function loadToday() {
            var auj;
            daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            jrSem = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
            var dayName = moment().format('dddd');
            if (daysInWeek.indexOf(dayName) > -1) {
                auj = jrSem[daysInWeek.indexOf(dayName)];
                console.log("date valide= " + auj);
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




        var responseAnalyseStatut = responseAnalyseStatut || [];
        var urlAnalyseStatut = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects";
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
                    var arrValueStatut = [20, 25, 76, 12];
                    $.each(responseAnalyseStatut, function (key, value) {

                    });
                    //document.getElementById("morris-area-chart").innerHTML = 
                }
            });
        }
        loadAnalyseStatut();

        $(function () {

            $(".progress").each(function () {

                var value = $(this).attr('data-value');
                var left = $(this).find('.progress-left .progress-bar');
                var right = $(this).find('.progress-right .progress-bar');

                if (value > 0) {
                    if (value <= 50) {
                        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
                    } else {
                        right.css('transform', 'rotate(180deg)')
                        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
                    }
                }

            })

            function percentageToDegrees(percentage) {

                return percentage / 100 * 360

            }

        });

        function risqueParStatut() {
            // Bar chart
            new Chart(document.getElementById("bar-chart"), {
                type: 'horizontalBar',
                data: {
                    labels: ["En cours", "Clôturé", "Annulé"],
                    datasets: [
                        {
                            label: "Population (millions)",
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                            data: [7, 3, 10]
                        }
                    ]
                },
                options: {
                    responsive: true,

                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Risques par statut',
                        fontColor: '#2ea0e6',
                        fontSize: 20

                    },
                    scales: {
                        xAxes: [{
                            ticks: {

                                fontSize: 12
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
        risqueParStatut();
        function risqueParPriorite() {
            // Bar chart
            new Chart(document.getElementById("bar-chart1"), {
                type: 'bar',
                data: {
                    labels: ["Critique", "Elevé", "Moyen", "LFaible"],
                    datasets: [
                        {
                            label: "Population (millions)",
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                            data: [1, 4, 6, 9]
                        }
                    ]
                },
                options: {
                    responsive: true,

                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Risques par priorité',
                        fontColor: '#2ea0e6',
                        fontSize: 20
                    },
                    scales: {
                        xAxes: [{
                            ticks: {

                                fontSize: 12
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
        risqueParPriorite();


      /*  var responseSelect=responseSelect || [];
        var urlSelect= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,Sponsor,ProjectOwnerName,Typedegestion,Structuresimpliquees";
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
        loadSelect();*/

        var responseKPIGeneral=responseKPIGeneral || [];
        var urlKPIGeneral= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectPercentCompleted";
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
                            
                            
                            var countProjet=0;
                            var sumAchevement=0;
                            
                            //-------------------
                            
                            //--------------------------------------------
                            $.each(responseKPIGeneral, function (key, value) {
                              
                                      
                                      var achevement=value.ProjectPercentCompleted;
                                      
                                      
                                      countProjet++;
                                      sumAchevement+=parseFloat(achevement);
                                       
                                
                            });
                            var avgAchevement=parseFloat(sumAchevement/countProjet).toFixed(0);
                            
                            document.getElementById("countProj").innerHTML=countProjet;
                            if (isNaN(avgAchevement)){avgAchevement=0;}
                            if (avgAchevement<30) {
                              document.getElementById("statutGlKPI").innerHTML='<i class="fa fa-circle fa-4x" aria-hidden="true" style="color : #FF4E28;"></i>';
                            }
                            if ((avgAchevement>=30)&&(avgAchevement<=75)) {
                              document.getElementById("statutGlKPI").innerHTML='<i class="fa fa-circle fa-4x" aria-hidden="true" style="color : #FF4E28;"></i>';
                            }
                            if (avgAchevement>75) {
                              document.getElementById("statutGlKPI").innerHTML='<i class="fa fa-circle fa-4x" aria-hidden="true" style="color : #16A331;"></i>';
                            }
                            //document.getElementById("avgAchevement").innerHTML=avgAchevement+"%";

                            document.getElementById("chartAchGen").innerHTML = 
                            '<div class="rounded-lg p-5 shadow" style="padding: 0.75rem;  background-color: aliceblue; background-color: aliceblue;">' +
                            ' <h2 class="h6 font-weight-bold text-center mb-4">Achèvement</h2>' +


                            '<div class="progress mx-auto" data-value="'+avgAchevement+'">' +
                            ' <span class="progress-left">' +
                            '<span class="progress-bar border-success" id="leftDegGen"></span>' +
                            '</span>' +
                            '<span class="progress-right">' +
                            '<span class="progress-bar border-success" id="rightDegGen"></span>' +
                            '</span>' +
                            '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                            '<div class="h4 font-weight-bold">'+avgAchevement+'<sup class="small">%</sup></div>' +
                            '</div>' +
                            '</div>' +
                            '<!-- END -->' +

                            '<!-- Demo info -->' +
                            '<div class="row text-center mt-4">' +
                            
                            '<!-- END -->' +
                            '</div>' ;
                            

                            if (avgAchevement <= 50) {
                                $("#rightDegGen").css('transform', 'rotate(' + percentageToDegrees(avgAchevement) + 'deg)')
                            } else {
                                $("#rightDegGen").css('transform', 'rotate(180deg)')
                                $("#leftDegGen").css('transform', 'rotate(' + percentageToDegrees(avgAchevement - 50) + 'deg)')
                            }
                            
                            
                            
                        }
                    });
        }
        loadKPIGeneral();


        //************************************************************************************************************************************************************//

        /*var responseAnalyseStatut = responseAnalyseStatut || [];
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

                
           

            */


            //****************************************************************************************************************************************************************//

             var responseDurationSG=responseDurationSG || [];
        var urlDurationSG= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectDuration,ProjectActualDuration";
        function loadDurationSG(){
          $.ajax({
                        url: urlDurationSG,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseDurationSG = responseDurationSG.concat(data.d.results);
                            if (data.d.__next) {
                                urlDurationSG = data.d.__next;
                                loadDurationSG();
                            }
                            
                            
                            var sumConsomeDuration=0;
                            var sumRealDuration=0;
                            var countProjet=0;
                            $.each(responseDurationSG, function (key, value) {
                                countProjet++;
                                var dureeReel=value.ProjectDuration;
                                var dureeConsomee=value.ProjectActualDuration;
                                sumConsomeDuration+=parseFloat(dureeConsomee);
                                sumRealDuration+=parseFloat(dureeReel);
                            });
                            var consomationPrevue=parseFloat((sumConsomeDuration/sumRealDuration)*100).toFixed(0);
                            jaugeDelais(consomationPrevue);
                            jrsConsome(sumRealDuration,sumConsomeDuration);
                            }
                    });
        }
        loadDurationSG();


        function jaugeDelais(consomationPrevue) {
            document.getElementById("coutPrevue2").innerHTML = consomationPrevue +"%";
            $(function () {
                var data = parseInt(consomationPrevue);
                var number = 80;
                function arroundMax(number) {
                    var ch = parseInt(number).toString();
                    var ch1 = "";
                    var num = parseInt(ch[0]) + 1;
                    ch1 += num;
                    for (var i = 1; i < ch.length; i++) {
                        ch1 += '0';
                    }

                    return (parseInt(ch1));
                }
                arroundMax(number);
                $('#containerAnalyse').highcharts({

                    chart: {
                        type: 'gauge'
                    },
                    title: {
                        text: 'Statut global',
                        style: {
                            color: '#2ea0e6',
                            fontWeight: 'bold'
                        }

                    },

                    pane: {
                        startAngle: -120,
                        endAngle: 120,
                        background: []
                    },

                    // the value axis
                    yAxis: [{

                        offset: 30,
                        min: 0,
                        max: 100,
                        plotBands: [{
                            from: 0,
                            to: 100,
                            color: '#b8deff' // blue
                        }]
                    }],

                    series: [
                        {
                            name: 'Pourcentage des jours consommés',
                            data: [data],
                            dataLabels: {
                                format: '<span>' + conToMill(data) + '%</span><br/>'
                            },
                        }]

                });
            });

        }
        function jrsConsome(sumRealDuration,sumConsomeDuration){
            var jrsPrevue=parseFloat(sumRealDuration/8).toFixed(0);
            var jrsConsom=parseFloat(sumConsomeDuration/8).toFixed(0);
            document.getElementById("coutPrevue3").innerHTML = conToMill(jrsConsom) +" Jours";
            $(function () {
                var data = parseInt(jrsConsom);
                
                $('#container1').highcharts({

                    chart: {
                        type: 'gauge'
                    },
                    title: {
                        text: 'Jours consommés',
                        style: {
                            color: '#2ea0e6',
                            fontWeight: 'bold'
                        }
                    },

                    pane: {
                        startAngle: -120,
                        endAngle: 120,
                        background: []
                    },

                    // the value axis
                    yAxis: [{

                        offset: 30,
                        min: 0,
                        max: parseInt(jrsPrevue),
                        plotBands: [{
                            from: 0,
                            to: parseInt(jrsConsom),
                            color: '#b8deff' // blue
                        },
                        {
                            from: parseInt(jrsConsom),
                            to: parseInt(jrsPrevue),
                            color: '#aadeaa' // blue
                        }]
                    }],

                    series: [
                        {
                            name: 'Jours consommés',
                            data: [data],
                            dataLabels: {
                                format: '<span>' + conToMill(data) + '</span><br/>'
                            },
                        }]

                });
            });

        }


        var urlDateGlissement = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectStartDate,ProjectFinishDate";
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
              //var sousprojet=value.Sousprojet;
              //if (sousprojet!="Oui") {
                var idP=value.ProjectId;
               var projStartDate=value.ProjectStartDate;
               var projfinshtDate=value.ProjectFinishDate;
               if (idProjetG.indexOf(idP)==-1) {
                idProjetG.push(idP);
                dateDebProjetG.push(projStartDate);
                dateFinProjetG.push(projfinshtDate);
                dateFinRefG.push("");
               }
             // }
               

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
                                        var noBaseline=0;
              
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
            //console.log("dateFinProjetG = "+ dateFinProjetG.join());
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
                if (!isNaN(glissArray[i])){
                    sumGliss=parseFloat(glissArray[i])+parseFloat(sumGliss);
                }else{
                    noBaseline++;
                }
              
              console.log("glissArray[i]= "+ glissArray[i]);
                
                console.log("idProjetG[i]= "+idProjetG[i]);
            }
            
            avgGliss=parseFloat(sumGliss/(glissArray.length-noBaseline)).toFixed(0);

            ////////////console.log("avgGliss= "+avgGliss);
            document.getElementById("glissmentKPI").innerHTML=avgGliss+"%";

            //up mid down

            if ((avgGliss>=0)&&(avgGliss<30)) {
              $("#upArrow1").css("display", "none");
              $("#rightArrow1").css("display", "none");
              $("#downArrow1").css("display", "block");
              $("#glissmentKPI").css("color", "#5cb85c");
            }
            else if ((avgGliss>=30)&&(avgGliss<=60)) {              
              $("#downArrow1").css("display", "none");
              $("#upArrow1").css("display", "none");
              $("#rightArrow1").css("display", "block");
              $("#glissmentKPI").css("color", "#ffe650");
            }
            else if (avgGliss>60) {
              $("#rightArrow1").css("display", "none");
              $("#upArrow1").css("display", "block");
              $("#downArrow1").css("display", "none");
              $("#glissmentKPI").css("color", "#e06950");
            }
}           
});
}

/*
var responseMatP=responseMatP || [];
        var urlMatP= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectDuration,ProjectDurationVariance,ProjectActualDuration,Etatdeprojet";
        function loadMatP(){
          $.ajax({
                        url: urlMatP,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseMatP = responseMatP.concat(data.d.results);
                            if (data.d.__next) {
                                urlMatP = data.d.__next;
                                loadMatP();
                            }
                            
                            
                            var sumRealDuration=0;
                            var sumInitialDuration=0;
                            var sumConsomeDuration=0;
                            var countStandBy=0;
                            var countProjet=0;
                            $.each(responseMatP, function (key, value) {
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
                            document.getElementById("MatPlanKPI").innerHTML=maturitePlanning+"%";

                            //up mid down

                            if ((maturitePlanning>=0)&&(maturitePlanning<30)) {
                              $("#upArrow2").css("display", "none");
                              $("#rightArrow2").css("display", "none");
                              $("#downArrow2").css("display", "block");
                              $("#MatPlanKPI").css("color", "#5cb85c");
                            }
                            else if ((maturitePlanning>=30)&&(maturitePlanning<=60)) {
                              $("#rightArrow2").css("display", "block");
                              $("#upArrow2").css("display", "none");
                              $("#downArrow2").css("display", "none");
                              $("#MatPlanKPI").css("color", "#e06950");
                            }
                            else if (maturitePlanning>60) {
                              $("#downArrow2").css("display", "none");
                              $("#upArrow2").css("display", "block");
                              $("#rightArrow2").css("display", "none");
                              $("#MatPlanKPI").css("color", "#ffe650");
                            }

                        }
                    });
        }
        loadMatP();
*/
    </script>
</body>

</html>