<!DOCTYPE html>
<html lang="en">

<head>

        <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/css/bootstrap.min.css" rel="stylesheet">
    <link href="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/css/bootstrap.css"  rel="stylesheet">
    <link href="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/css/style.css" rel="stylesheet">
    <link href="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/css/achevement.css"  rel="stylesheet">
    <link  href="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/css/dataTables.bootstrap4.min.css"  rel="stylesheet">
    <link href="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/css/w3.css" rel="stylesheet">
    <link href="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/css/jquery.dataTables.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

  <style>
        #tableProjet td {
            text-align: center;
        }
        
        .ms-core-listMenu-verticalBox,
        .ms-core-listMenu-horizontalBox {
            font-size: 0.9em;
        }
        
        span.ms-cui-tt-span {
            display: none;
        }
        
        .navbar-inverse {
            background-color: #21429b;
            border-color: #ffffff;
        }
        
        #DeltaPlaceHolderPageTitleInTitleArea {
            display: none;
        }
        
        body {
            margin-top: 100px;
            background-color: #fff;
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
            padding: 0px;
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
        
        #containerBudgetConso {
            width: 100%;
            height: 31vh;
        }
        
        #containerdepassement {
            width: 100%;
            height: 31vh;
        }
        
        .tableFixHead thead th {
            position: sticky;
            top: 0;
        }
        
        .ms-rtestate-field h1,
        h1.ms-rteElement-H1,
        .ms-rtestate-field h2,
        h2.ms-rteElement-H2 {
            line-height: 1.4;
            color: #37a4e7;
        }
        
        tbody {
            font-size: small;
        }
        
        .panel-primary {
            border-color: #6f85be;
        }
        
        .panel-primary>.panel-heading {
            color: #fff;
            background-color: #6f85be;
            border-color: #6f85be;
        }
        
        .ms-rtestate-field h1,
        h1.ms-rteElement-H1,
        .ms-rtestate-field h2,
        h2.ms-rteElement-H2 {
            line-height: 1.4;
            color: #000000;
        }
        
        .card1 {
            box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
            padding: 1rem !important;
            border-radius: 0.3rem !important;
            background-color: #eebdc0;
        }
        
        .fa-2x {
            font-size: 25px;
        }
        
        #page-wrapper {
            width: 100%;
            padding: 0px;
            background-color: #fff;
        }
        /*CSS*/
        /*
Tutorial for the animation here: 
https://ihatetomatoes.net/create-custom-preloading-screen/
*/
        
        #screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        
        #loader-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1001;
        }
        
        #loader {
            display: block;
            position: relative;
            left: 50%;
            top: 50%;
            width: 120px;
            height: 120px;
            margin: -80px 0 0 -80px;
            padding: 20px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #074c81;
            z-index: 1001;
            -webkit-animation: spin 2s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            animation: spin 2s linear infinite;
            /* Chrome, Firefox 16+, IE 10+, Opera */
        }
        
        #center {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 60px;
            height: 60px;
            margin: -30px 0 0 -30px;
            z-index: 1000;
            /*-webkit-animation: anti_spin 2s linear infinite;  Chrome, Opera 15+, Safari 5+ */
            /*animation: anti_spin 2s linear infinite;  Chrome, Firefox 16+, IE 10+, Opera */
        }
        
        #loader:before {
            content: "";
            position: absolute;
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #e68e21;
            -webkit-animation: spin 3s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            animation: spin 3s linear infinite;
            /* Chrome, Firefox 16+, IE 10+, Opera */
        }
        
        #loader:after {
            content: "";
            position: absolute;
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #ffffff;
            -webkit-animation: spin 1.5s linear infinite;
            /* Chrome, Opera 15+, Safari 5+ */
            animation: spin 1.5s linear infinite;
            /* Chrome, Firefox 16+, IE 10+, Opera */
        }
        
        @-webkit-keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
                /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(0deg);
                /* IE 9 */
                transform: rotate(0deg);
                /* Firefox 16+, IE 10+, Opera */
            }
            100% {
                -webkit-transform: rotate(360deg);
                /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(360deg);
                /* IE 9 */
                transform: rotate(360deg);
                /* Firefox 16+, IE 10+, Opera */
            }
        }
        
        @keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
                /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(0deg);
                /* IE 9 */
                transform: rotate(0deg);
                /* Firefox 16+, IE 10+, Opera */
            }
            100% {
                -webkit-transform: rotate(360deg);
                /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(360deg);
                /* IE 9 */
                transform: rotate(360deg);
                /* Firefox 16+, IE 10+, Opera */
            }
        }
        
        @-webkit-keyframes anti_spin {
            0% {
                -webkit-transform: rotate(0deg);
                /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(0deg);
                /* IE 9 */
                transform: rotate(0deg);
                /* Firefox 16+, IE 10+, Opera */
            }
            100% {
                -webkit-transform: rotate(-360deg);
                /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(-360deg);
                /* IE 9 */
                transform: rotate(-360deg);
                /* Firefox 16+, IE 10+, Opera */
            }
        }
        
        @keyframes anti_spin {
            0% {
                -webkit-transform: rotate(0deg);
                /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(0deg);
                /* IE 9 */
                transform: rotate(0deg);
                /* Firefox 16+, IE 10+, Opera */
            }
            100% {
                -webkit-transform: rotate(-360deg);
                /* Chrome, Opera 15+, Safari 3.1+ */
                -ms-transform: rotate(-360deg);
                /* IE 9 */
                transform: rotate(-360deg);
                /* Firefox 16+, IE 10+, Opera */
            }
        }
        
        #loader-wrapper .loader-section {
            position: fixed;
            top: 0;
            width: 50%;
            height: 100%;
            background: #222222;
            opacity: 0.9;
            z-index: 1000;
        }
        
        #loader-wrapper .loader-section.section-left {
            left: 0;
        }
        
        #loader-wrapper .loader-section.section-right {
            right: 0;
        }
        /* Loaded */
        
        .loaded #loader-wrapper .loader-section.section-left {
            -webkit-transform: translateX(-100%);
            /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: translateX(-100%);
            /* IE 9 */
            transform: translateX(-100%);
            /* Firefox 16+, IE 10+, Opera */
        }
        
        .loaded #loader-wrapper .loader-section.section-right {
            -webkit-transform: translateX(100%);
            /* Chrome, Opera 15+, Safari 3.1+ */
            -ms-transform: translateX(100%);
            /* IE 9 */
            transform: translateX(100%);
            /* Firefox 16+, IE 10+, Opera */
        }
        
        .loaded #loader {
            opacity: 0;
            -webkit-transition: all 0.3s ease-out;
            transition: all 0.3s ease-out;
        }
        
        .loaded #loader-wrapper {
            visibility: hidden;
        }
        
        .loaded #loader-wrapper .loader-section.section-right,
        .loaded #loader-wrapper .loader-section.section-left {
            -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
            transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
        }
        
        .loaded #loader-wrapper {
            -webkit-transform: translateY(-100%);
            -ms-transform: translateY(-100%);
            transform: translateY(-100%);
            -webkit-transition: all 0.3s 1s ease-out;
            transition: all 0.3s 1s ease-out;
        }










        #formuleBudgAnn {
    display: none; 
    border: 1px solid #000;
    width: 100%;
    height: 50%;
    background-color: #ffcdcd;
   // margin-left: 39%;
    text-align: center;
}   
 

#formuleRendeClotProj,#formuleProjLivD,#formuleProjRetardClot,#formuleProjAuDClot,#formuleProjCloture,#formuleprojClotRetardDeb,#formuleprojClotAvanceDeb,#formuleCapExG,#formuleCapExGInfraProd,#formuleCapExGEtu,#formuleCapExGSec,#formuleCapExGData,#formuleCapExGAMOA,#formulePrjAvancDeb,#formuleProbRes{
    display: none; 
    border: 1px solid #000;
    width: 100%;
    height: 50%;
    background-color: inherit;
     // margin-left: 10%;
     text-align: center;
}
    </style>
</head>

<body id="page-top">

<div id="loader-wrapper" style="display:none">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>

    </div>

    <div id="wrapper">
    <!-- Navigation -->
   
                    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="border-radius: 5px;margin-bottom: 0px;">
                        <div class="col-md-3 col-xs-12 ">
                        <ul class="nav navbar-left top-nav" style="padding-left: 0px; padding-right: 0px;">
                            <h3 id="titre" style="color: white; float: left; margin-bottom: 0px;margin-top: 0px;">
                                Aperçu Programme
                            </h3>
                        </ul>
                    </div>
                        <div class="col-md-3 col-xs-12">
                             <select 
                                style="float: right; width: 100%; background-color: white; color: #607d8b; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                                id="myList1" onchange="selectMyList1();">
                                <option value="" selected disabled>Portefeuille</option>

                            </select>
                        </div>
                        <div class="col-md-3 col-xs-12">
                            <select disabled="" style="float: right; width: 100%; background-color: white; color: #607d8b; font-size: 20px; border-radius: 5px ;  border-color: azure;" id="myList2" onchange="selectMyList111();mainfilter();">
                                <option value="">Programme</option>

                            </select>
                        </div>
                        <div class="col-md-3 col-xs-12">
                            <select disabled="" style="float: right; width: 100%; background-color: white; color: #607d8b; font-size: 20px; border-radius: 5px ;  border-color: azure;" id="myList3" onchange="mainfilter();">
                                <option value="">Type de Projet</option>

                            </select>
                        </div>
                    </nav>
                     <div id="page-wrapper">
        <div class="container-fluid">
            <!-- Page Heading -->
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header" id="DateJr" style="float: right;margin: 0px 0px;"></h1>
                    <ol class="breadcrumb" style="width: 100%;">
                        <li class="active" id="progTitle">
                        </li>
                    </ol>
                </div>
            </div>
            <!-- /.row -->
            <div class="row">
                    <div class="col-md-6 col-xs-12">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class='fa fa-calculator fa-2x'></i> Nombre des projets
                                </h3>
                            </div>
                            <div class="panel-body" style="padding: 0px 15px;">
                                <div class="row">
                                    <div class="col-md-12 col-xs-12" style="padding: 10px ">
                                        <div class="card1" >
                                            <h2 class="h5 font-weight-bold text-center mb-2"  style="margin-top: 0px;">Nombre des projets:
                                            
                                            </h2>
                                            <!-- Demo info -->
                                            <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                <div class="col-12">
                                                    <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="nbProj"></div>
                                                </div>
                                            </div>
                                            <!-- END -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class='fa fa-money fa-2x'></i> Consommation du Budget annuel du portefeuille
                                </h3>
                            </div>
                            <div class="panel-body" style="padding: 0px 15px;">
                                <div class="row">
                                    <div class="col-md-12 col-xs-12" style="padding: 10px ">
                                        <div class="card1" id="perconnBudAnn">
                                            <h2 class="h5 font-weight-bold text-center mb-2"  style="margin-top: 0px;">% consommation budget annuel
                                            
                                            </h2>
                                            <div id="formuleBudgAnn">= (∑ Couts consommés par projet / ∑ budgets projets)*100</div>
                                            <!-- Demo info -->
                                            <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                <div class="col-12">
                                                    <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="pourcentageConsBudgAnnuel"></div>
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
                <div class="row" id="row01">
                    <div class="col-md-12 col-xs-12" style="padding-right: 5px;">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-calculator fa-2x"></i> Maitrise des délais
                                </h3>
                            </div>
                            <div class="panel-body" style="padding: 0px 15px;">
                                <div class="row">
                                    <div class="col-md-4 col-xs-12" style="padding: 10px;">
                                        <div class="card1" id="nbProjclott">
                                            <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;" >Nombre des projets qui auraient dû être clôturés
                                            </h2>
                                            <div id="formuleProjAuDClot">La date de fin de référence de chaque projet sont passées.</div>
                                            <!-- Demo info -->
                                            <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                <div class="col-12">
                                                    <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="nbProjCloturer"></div>
                                                </div>
                                            </div>
                                            <!-- END -->
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-xs-12" style="padding: 10px ">
                                        <div class="card1" id="nbProjLivD">
                                            <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">Nombre de projet livrés à date
                                            </h2>
                                            <div id="formuleProjLivD">Projets effectivement clôturés et date de fin de référence de chaque projet sont passés.</div>
                                            <!-- Demo info -->
                                            <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                <div class="col-12">
                                                    <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="nbProjlivDate"></div>
                                                </div>
                                            </div>
                                            <!-- END -->
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-4 col-xs-12" style="padding: 10px;">
                                        <div class="card1" id="nbProjRetardClot">
                                            <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">
                                                Nombre de projets avec un retard de clôture</h2>
                                            <div id="formuleProjRetardClot">Les projets qui ne sont pas encore clôturés et la date de fin de référence pour chaque projet sont dépassés.</div>
                                            <!-- Demo info -->
                                            <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                <div class="col-12">
                                                    <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="nbProjRetard"></div>
                                                </div>
                                            </div>
                                            <!-- END -->
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 col-xs-12" style="padding: 10px ">
                                        <div class="panel-heading" style="padding: 0px;">
                                        <div ><H4 style="margin-top: 0px;color: black;font-weight: bolder;text-align: center;">Liste de projets qui auraient dû étre clôturés</H4></div>
                                            <div class="tableFixHead" style="overflow-y:auto;height: 215px">
                                                <table class="table table-bordered table-hover table-striped" style="border-radius:7px" id="tableProjetDuCloture">
                                                    <thead style="background-image: linear-gradient(225deg, #f18572 20%, #ffcdcd 80%);color: black;">
                                                        <tr>
                                                            <th style="text-align:center;width: 40%;cursor: pointer;">Projet</th>
                                                            <th style="text-align:center;width: 20%;cursor: pointer;"></th>
                                                            <th style="text-align:center;width: 40%;cursor: pointer;">% achevé</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody></tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-xs-12" style="padding: 10px ">
                                        <div class="panel-heading" style="padding: 0px;">
                                        <div><H4 style="margin-top: 0px;color: black;font-weight: bolder;text-align: center;">Liste de projets livrés à date</H4></div>
                                            <div class="tableFixHead" style="overflow-y:auto;height: 215px">
                                                <table class="table table-bordered table-hover table-striped" style="border-radius:7px" id="tableProjetLivAdate">
                                                    <thead style="background-image: linear-gradient(225deg, #ffcdcd 20%, #f18572 80%);color: black; ">
                                                        <tr>
                                                            <th style="text-align:center;width: 40%;cursor: pointer;">Projet</th>
                                                            <th style="text-align:center;width: 20%;cursor: pointer;"></th>
                                                            <th style="text-align:center;width: 40%;cursor: pointer;">% achevé</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody></tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-4 col-xs-12" style="padding: 10px ">
                                        <div class="panel-heading" style="padding: 0px;">
                                        <div ><H4 style="margin-top: 0px;color: black;font-weight: bolder;text-align: center;">Liste de projets avec un retard de clôture</H4></div>
                                            <div class="tableFixHead" style="overflow-y:auto;height: 215px">
                                                <table class="table table-bordered table-hover table-striped" style="border-radius:7px" id="tableProjetRetardCloture">
                                                    <thead style="background-image: linear-gradient(225deg, #ffcdcd 20%, #f18572 80%);color: black; ">
                                                        <tr>
                                                            <th style="text-align:center;width: 40%;cursor: pointer;">Projet</th>
                                                            <th style="text-align:center;width: 20%;cursor: pointer;"></th>
                                                            <th style="text-align:center;width: 40%;cursor: pointer;">% achevé</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody></tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row" id="row0">
                                    <div class="col-md-6 col-xs-12" style="padding: 5px;">
                                        <div class="rounded-lg p-3 shadow" style="background-image: linear-gradient(225deg, #ffcdcd 20%,   #f18572 80%);color: black;" id="rendeClotProj">
                                            <div class="row">
                                                <div class="col-lg-8">
                                                    <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;float: left;">
                                                        <i class="fa fa-percent fa-2x"></i> Rendement de clôture des projets</h2>
                                                </div>
                                                <!-- Demo info -->
                                                <div class="col-lg-4">
                                                    <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                        <div class="col-12">
                                                            <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="RendeClotProj"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- END -->
                                            </div>
                                            <div id="formuleRendeClotProj">=(Nombre de projets livrés à date / Nombre de projets qui auraient dû être clôturés)*100</div>
                                        </div>                                        
                                    </div>
                                    <div class="col-md-6 col-xs-12" style="padding: 5px;">
                                        <div class="rounded-lg p-3 shadow" style="background-image: linear-gradient(225deg, #f18572 20%, #ffcdcd 80%);color: black;" id="clotProj">
                                            <div class="row">
                                                <div class="col-lg-8">
                                                    <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;float: left;">
                                                        <i class="fa fa-percent fa-2x"></i> projets clôturés</h2>
                                                </div>
                                                <!-- Demo info -->
                                                <div class="col-lg-4">
                                                    <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                        <div class="col-12">
                                                            <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="projClot"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- END -->
                                            </div>
                                            <div id="formuleProjCloture">= (Nombre de projets livrés à date / Nombre total des projets sélectionnés)*100</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-12" style="padding: 5px;">
                                        <div class="rounded-lg p-3 shadow" style="background-image: linear-gradient(225deg, #ffcdcd 20%,   #f18572 80%);color: black;" id="clottRetardDebProj">
                                            <div class="row">
                                                <div class="col-lg-8">
                                                    <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;float: left;">
                                                        <i class="fa fa-percent fa-2x"></i> projets clôturés avec retard de début</h2>
                                                </div>
                                                <!-- Demo info -->
                                                <div class="col-lg-4">
                                                    <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                        <div class="col-12">
                                                            <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="projClotRetardDeb"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- END -->
                                            </div>
                                            <div id="formuleprojClotRetardDeb">Les projets clôturés, la date de fin de référence pour chaque projet sont dépassés et qui ont enregistré un retard pour commencer.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-12" style="padding: 5px;">
                                        <div class="rounded-lg p-3 shadow" style="background-image: linear-gradient(225deg, #f18572 20%, #ffcdcd 80%);color: black;" id="clottAvancedDebProj">
                                            <div class="row">
                                                <div class="col-lg-8">
                                                    <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;float: left;">
                                                        <i class="fa fa-percent fa-2x"></i> projets clôturés avance de début</h2>
                                                </div>
                                                <!-- Demo info -->
                                                <div class="col-lg-4">
                                                    <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                        <div class="col-12">
                                                            <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="projClotAvanceDeb"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- END -->
                                            </div>
                                            <div id="formuleprojClotAvanceDeb">Les projets clôturés, la date de fin de référence pour chaque projet sont dépassés et qui ont enregistré une avance pour commencer.</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-play-circle fa-2x"></i>  Capacité d'éxécution
                                </h3>
                            </div>
                            <div class="panel-body" style="padding: 0px 15px;">
                                <div class="row">
                                    <div class="col-md-4 col-xs-12" style="padding: 10px ">
                                        <div class="card1" id="capExG">
                                            <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">% capacité d'execution globale
                                            </h2>
                                            <div id="formuleCapExG">= (∑ charge consommée / ∑ charge prévisionnelle)*100</div>
                                            <!-- Demo info -->
                                            <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                <div class="col-12">
                                                    <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="pourCapExecGlob"></div>
                                                </div>
                                            </div>
                                            <!-- END -->
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-xs-12" style="padding: 10px;">
                                        <div class="card1" id="capExGInfraProd">
                                            <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">% capacité d'éxécution Infra & Prod
                                            </h2>
                                            <div id="formuleCapExGInfraProd">= (∑ charge consommée Infra & Prod  / ∑ charge prévisionnelle Infra & Prod)*100</div>
                                            <!-- Demo info -->
                                            <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                <div class="col-12">
                                                    <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="pourCapExecInfraProd"></div>
                                                </div>
                                            </div>
                                            <!-- END -->
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-xs-12" style="padding: 10px;">
                                        <div class="card1" id="capExGEtu">
                                            <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">
                                                % capacité d'execution Etude</h2>
                                            <div id="formuleCapExGEtu">= (∑ charge consommée Etude  / ∑ charge prévisionnelle Etude)*100</div>
                                            <!-- Demo info -->
                                            <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                <div class="col-12">
                                                    <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="pourCapExecEtu"></div>
                                                </div>
                                            </div>
                                            <!-- END -->
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-xs-12" style="padding: 10px ">
                                        <div class="card1" id="capExGSec">
                                            <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">% capacité d'execution Sécurité
                                            </h2>
                                            <div id="formuleCapExGSec">= (∑ charge consommée Sécurité  / ∑ charge prévisionnelle Sécurité)*100</div>
                                            <!-- Demo info -->
                                            <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                <div class="col-12">
                                                    <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="pourCapExecSec"></div>
                                                </div>
                                            </div>
                                            <!-- END -->
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-xs-12" style="padding: 10px;">
                                        <div class="card1" id="capExGData">
                                            <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">% capacité d'éxécution Data
                                            </h2>
                                            <div id="formuleCapExGData">= (∑ charge consommée Data  / ∑ charge prévisionnelle Data)*100</div>
                                            <!-- Demo info -->
                                            <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                <div class="col-12">
                                                    <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="pourCapExecData"></div>
                                                </div>
                                            </div>
                                            <!-- END -->
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-xs-12" style="padding: 10px;">
                                        <div class="card1" id="capExGAMOA">
                                            <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">
                                                % capacité d'execution AMOA</h2>
                                            <div id="formuleCapExGAMOA">= (∑ charge consommée AMOA  / ∑ charge prévisionnelle AMOA)*100</div>
                                            <!-- Demo info -->
                                            <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                <div class="col-12">
                                                    <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="pourCapExecAMOA"></div>
                                                </div>
                                            </div>
                                            <!-- END -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class='fa fa-plus-square fa-2x'></i>Autre KPIs</h3>
                            </div>
                            <div class="panel-body" style="padding: 0px 15px;">
                                <div class="row">
                                    <div class="col-md-6 col-xs-12" style="padding: 10px ">
                                        <div class="card1" id="prjAvancDeb">
                                            <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">% projets avec avance de début</h2>
                                            <div id="formulePrjAvancDeb">Les projets qui ont enregistré une avance pour commencer par rapport à la totalité des projets.</div>
                                            <!-- Demo info -->
                                            <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                <div class="col-12">
                                                    <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="pourProjAvancDeb"></div>
                                                </div>
                                            </div>
                                            <!-- END -->
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xs-12" style="padding: 10px;">
                                        <div class="card1" id="prjProbRes">
                                            <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">% de problèmes résolus
                                            </h2>
                                            <div id="formuleProbRes">= (Nombre de problèmes résolu / Nombre total de problèmes déclarés)*100</div>
                                            <!-- Demo info -->
                                            <div class="row text-center mt-2" style=" margin-top: 0px;">
                                                <div class="col-12">
                                                    <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="pourProbRes"></div>
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
        </div>
    <!-- /#wrapper -->
    <script  src="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/javascript/jquery3.4.1.js"></script>
    <script  src="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/javascript/Chart.min.js"></script>
    <script  src="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/javascript/filterApercuProgramme.js"></script>
    <script  src="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/javascript/progsel11.js"></script>
    <script  src="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/javascript/typeSel.js"></script>
    <script src="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/javascript/moment-with-locales.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <script type="text/javascript">


        function conToMill(num) {
            if (num == 0) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
            }
            if (num < 1000000 && num > 999) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(2)) + ' K' : Math.sign(num) * Math.abs(num)
            }
            if (num < -999 && num > -1000000) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(2)) + ' K' : Math.sign(num) * Math.abs(num)
            }
            if (num < 0 && num > -1000) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
            }
            if (num > 0 && num < 1000) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
            }
            if (num > 999999) {
                return Math.abs(num) > 999999 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(2)) + ' M' : Math.sign(num) * Math.abs(num)
            }
            if (num < -999999) {
                return Math.abs(num) > 999999 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(2)) + ' M' : Math.sign(num) * Math.abs(num)
            }



        }
        
                function loadToday() {
            var auj;
            daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            jrSem = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
            var dayName = moment().format('dddd');
            if (daysInWeek.indexOf(dayName) > -1) {
                auj = jrSem[daysInWeek.indexOf(dayName)];
                ////////console.log("date valide= " + auj);
            }
            var dj = moment().format('DD/MM/YYYY');
            document.getElementById("DateJr").innerHTML = auj + " <small>" + dj + "</small>";
            //
        }
        loadToday();
        function showTitle() {
            document.getElementById("progTitle").innerHTML = '<i class="fa fa-dashboard"></i>' + ' Affichage Général';
        }
        showTitle();
var responseSelectPortefeuille=responseSelectPortefeuille || [];
var urlSelectPortefeuille= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=EnterpriseProjectTypeName&$orderby=EnterpriseProjectTypeName";
  function loadSelectPortefeuille(){
    $.ajax({
                  url: urlSelectPortefeuille,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseSelectPortefeuille = responseSelectPortefeuille.concat(data.d.results);
                      if (data.d.__next) {
                          urlSelectPortefeuille = data.d.__next;
                          loadSelectPortefeuille();
                      }
                      
                      

                      $.each(responseSelectPortefeuille, function (key, value) {
                         if (value.EnterpriseProjectTypeName!=null && value.EnterpriseProjectTypeName == "Portefeuille Exercice 2022") {
                          var portefeuille=value.EnterpriseProjectTypeName;
                          $('#myList1').append($('<option>',
                         {
                            text : portefeuille,
                            value:portefeuille
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
                         
                         
                         


                      });
                      
                  }
              });
  }
  loadSelectPortefeuille();

  function hoverInfo(){
                $("#perconnBudAnn").hover(

                function() {
                    $("#formuleBudgAnn").slideDown(500);
                }, function() {
                    $("#formuleBudgAnn").slideUp(500);
                });

                $("#nbProjclott").hover(

                function() {
                    $("#formuleProjAuDClot").slideDown(500);
                }, function() {
                    $("#formuleProjAuDClot").slideUp(500);
                });

                //nbProjLivD formuleProjLivD
                $("#nbProjLivD").hover(

                function() {
                    $("#formuleProjLivD").slideDown(500);
                }, function() {
                    $("#formuleProjLivD").slideUp(500);
                });
                //nbProjRetardClot formuleProjRetardClot
                $("#nbProjRetardClot").hover(

                function() {
                    $("#formuleProjRetardClot").slideDown(500);
                }, function() {
                    $("#formuleProjRetardClot").slideUp(500);
                });
                //rendeClotProj formuleRendeClotProj
                $("#rendeClotProj").hover(

                function() {
                    $("#formuleRendeClotProj").slideDown(500);
                }, function() {
                    $("#formuleRendeClotProj").slideUp(500);
                });
                //clotProj formuleProjCloture
                $("#clotProj").hover(

                function() {
                    $("#formuleProjCloture").slideDown(500);
                }, function() {
                    $("#formuleProjCloture").slideUp(500);
                });
                //clottRetardDebProj formuleprojClotRetardDeb
                $("#clottRetardDebProj").hover(

                function() {
                    $("#formuleprojClotRetardDeb").slideDown(500);
                }, function() {
                    $("#formuleprojClotRetardDeb").slideUp(500);
                });
                //clottAvancedDebProj formuleprojClotAvanceDeb
                $("#clottAvancedDebProj").hover(

                function() {
                    $("#formuleprojClotAvanceDeb").slideDown(500);
                }, function() {
                    $("#formuleprojClotAvanceDeb").slideUp(500);
                });
                //capExG formuleCapExG
                $("#capExG").hover(

                function() {
                    $("#formuleCapExG").slideDown(500);
                }, function() {
                    $("#formuleCapExG").slideUp(500);
                });
                //capExGInfraProd formuleCapExGInfraProd
                $("#capExGInfraProd").hover(

                function() {
                    $("#formuleCapExGInfraProd").slideDown(500);
                }, function() {
                    $("#formuleCapExGInfraProd").slideUp(500);
                });
                //capExGEtu formuleCapExGEtu
                $("#capExGEtu").hover(

                function() {
                    $("#formuleCapExGEtu").slideDown(500);
                }, function() {
                    $("#formuleCapExGEtu").slideUp(500);
                });
                //capExGSec formuleCapExGSec
                $("#capExGSec").hover(

                function() {
                    $("#formuleCapExGSec").slideDown(500);
                }, function() {
                    $("#formuleCapExGSec").slideUp(500);
                });
                //capExGData formuleCapExGData
                $("#capExGData").hover(

                function() {
                    $("#formuleCapExGData").slideDown(500);
                }, function() {
                    $("#formuleCapExGData").slideUp(500);
                });
                //capExGAMOA formuleCapExGAMOA
                $("#capExGAMOA").hover(

                function() {
                    $("#formuleCapExGAMOA").slideDown(500);
                }, function() {
                    $("#formuleCapExGAMOA").slideUp(500);
                });
                //prjAvancDeb formulePrjAvancDeb
                $("#prjAvancDeb").hover(

                function() {
                    $("#formulePrjAvancDeb").slideDown(500);
                }, function() {
                    $("#formulePrjAvancDeb").slideUp(500);
                });
                //prjProbRes formuleProbRes
                $("#prjProbRes").hover(

                function() {
                    $("#formuleProbRes").slideDown(500);
                }, function() {
                    $("#formuleProbRes").slideUp(500);
                });
            }
            hoverInfo();
$(document).on('click', 'th', function() {
  var table = $(this).parents('table').eq(0);
  var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));
  this.asc = !this.asc;
  if (!this.asc) {
    rows = rows.reverse();
  }
  table.children('tbody').empty().html(rows);
});

function comparer(index) {
  return function(a, b) {
    var valA = getCellValue(a, index),
      valB = getCellValue(b, index);
    return $.isNumeric(valA) && $.isNumeric(valB) ?
      valA - valB : valA.localeCompare(valB);
  };
}

function getCellValue(row, index) {
  return $(row).children('td').eq(index).text();
}
       
    </script>
</body>

</html>