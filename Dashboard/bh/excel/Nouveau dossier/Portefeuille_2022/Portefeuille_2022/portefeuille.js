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
        text-align:center;
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
        #containerBudgetConso{
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
      .ms-rtestate-field h1, h1.ms-rteElement-H1, .ms-rtestate-field h2, h2.ms-rteElement-H2 {
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

.ms-rtestate-field h1, h1.ms-rteElement-H1, .ms-rtestate-field h2, h2.ms-rteElement-H2 {
    line-height: 1.4;
    color: #000000;
}



.card1 {
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
    padding: 1rem !important;
    border-radius: 0.3rem !important;
    background-color: #f39d9d;
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

#btnExport {
    float: left;
    background-color: #f39d9d;
    color: #607d8b;
    margin-top: 0%;
    padding: 1% 1%;
    border-color: #eda497;
    font-size: 16px;
    border-radius: 5px;
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
                        <div class="col-md-6 col-xs-12 ">
                        <ul class="nav navbar-left top-nav" style="padding-left: 0px; padding-right: 0px;">
                            <h3 id="titre" style="color: white; float: left; margin-bottom: 0px;margin-top: 0px;">
                                Portefeuille
                            </h3>
                        </ul>
                    </div>
                        <div class="col-md-3 col-xs-12">
                <select style="float: right; width: 100%; background-color: white; color: #607d8b; font-size: 20px; border-radius: 5px ;  border-color: azure;" id="myList1" onchange="filterPortefeuille();">
                                <option value="" selected disabled>Portefeuille</option>

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
            <div class="row" id="row0">
            <div class="col-md-6 col-xs-12" style="padding: 10px 5px 10px 15px;">
                                    <div class="rounded-lg p-3 shadow" style=" background-color: #f18572;">
                                    <div class="row">
                                        <div class="col-lg-8"><h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;float: left;">
                                            <i class="fa fa-percent fa-2x"></i> Pourcentage achevé:</h2></div>
                                        <!-- Demo info -->
                                        <div class="col-lg-4"><div class="row text-center mt-2" style=" margin-top: 0px;">
                                            <div class="col-12">
                                                <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="pourcentageAchProg"></div>
                                            </div>
                                        </div></div><!-- END -->
                                    </div></div>
                                </div>
            <div class="col-md-6 col-xs-12" style="padding: 10px 5px 10px 5px;">
                <div class="rounded-lg p-3 shadow" style=" background-color: #f18572;">
                <div class="row">
                    <div class="col-lg-8"><h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;float: left;">
                        <i class="fa fa-calculator fa-2x"></i> Nombre de projets:</h2></div>
                    <!-- Demo info -->
                    <div class="col-lg-4"><div class="row text-center mt-2" style=" margin-top: 0px;">
                        <div class="col-12">
                            <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="nbProj"></div>
                        </div>
                    </div></div><!-- END -->
                </div></div>
            </div>
              
            </div>
            <div class="row" id="row0">
                <div class="col-md-4 col-xs-12" style="padding-right: 5px;">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title"><i class="fa fa-clock-o fa-2x"></i> Charge de travail du
                                portefeuille
                            </h3>
                        </div>
                        <div class="panel-body" style="padding: 0px 15px;">
                            <div class="row">
                                <div class="col-md-6 col-xs-12" style="padding: 10px ">
                                    <div class="card1">
                                        <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">Charge
                                            planifiée</h2>
                                        <!-- Demo info -->
                                        <div class="row text-center mt-2" style=" margin-top: 0px;">
                                            <div class="col-12">
                                                <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;"
                                                    id="chargeplanifprog"></div>
                                            </div>
                                        </div><!-- END -->
                                    </div>
                                </div>
                                <div class="col-md-6 col-xs-12" style="padding: 10px;">
                                    <div class="card1">
                                        <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">Charge
                                            Consommée</h2>
                                        <!-- Demo info -->
                                        <div class="row text-center mt-2" style=" margin-top: 0px;">
                                            <div class="col-12">
                                                <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;"
                                                    id="chargereelprog"></div>
                                            </div>
                                        </div><!-- END -->
                                    </div>
                                </div>
                                <div class="col-xs-12" style="padding: 10px;">
                                    <div class="card1">
                                        <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">
                                            Glissement de la charge</h2>
                                        <!-- Demo info -->
                                        <div class="row text-center mt-2" style=" margin-top: 0px;">
                                            <div class="col-12">
                                                <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;"
                                                    id="chargeglissprog"></div>
                                            </div>
                                        </div><!-- END -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title"><i class="fa fa-money fa-2x"></i> Coût du portefeuille
                            </h3>
                        </div>
                        <div class="panel-body" style="padding: 0px 15px;">
                            <div class="row">
                                <div class="col-md-6 col-xs-12" style="padding: 10px ">
                                    <div class="card1">
                                        <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">Cout
                                            planifié</h2>
                                        <!-- Demo info -->
                                        <div class="row text-center mt-2" style=" margin-top: 0px;">
                                            <div class="col-12">
                                                <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;"
                                                    id="coutplanifprog"></div>
                                            </div>
                                        </div><!-- END -->
                                    </div>
                                </div>
                                <div class="col-md-6 col-xs-12" style="padding: 10px;">
                                    <div class="card1">
                                        <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">Cout
                                            Consommé</h2>
                                        <!-- Demo info -->
                                        <div class="row text-center mt-2" style=" margin-top: 0px;">
                                            <div class="col-12">
                                                <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;"
                                                    id="coutreelprog"></div>
                                            </div>
                                        </div><!-- END -->
                                    </div>
                                </div>
                                <div class="col-xs-12" style="padding: 10px;">
                                    <div class="card1">
                                        <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">
                                            Glissement de cout</h2>
                                        <!-- Demo info -->
                                        <div class="row text-center mt-2" style=" margin-top: 0px;">
                                            <div class="col-12">
                                                <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;"
                                                    id="coutglissprog"></div>
                                            </div>
                                        </div><!-- END -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title"><i class='fa fa-calendar-times-o fa-2x'></i> Durée du portefeuille
                            </h3>
                        </div>
                        <div class="panel-body" style="padding: 0px 15px;">
                            <div class="row">
                                <div class="col-md-6 col-xs-12" style="padding: 10px ">
                                    <div class="card1">
                                        <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">Durée
                                            planifiée</h2>
                                        <!-- Demo info -->
                                        <div class="row text-center mt-2" style=" margin-top: 0px;">
                                            <div class="col-12">
                                                <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;"
                                                    id="dureeplanifprog"></div>
                                            </div>
                                        </div><!-- END -->
                                    </div>
                                </div>
                                <div class="col-md-6 col-xs-12" style="padding: 10px;">
                                    <div class="card1">
                                        <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">Durée
                                            Consommée</h2>
                                        <!-- Demo info -->
                                        <div class="row text-center mt-2" style=" margin-top: 0px;">
                                            <div class="col-12">
                                                <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;"
                                                    id="dureereelprog"></div>
                                            </div>
                                        </div><!-- END -->
                                    </div>
                                </div>
                                <div class="col-xs-6" style="padding: 10px;">
                                    <div class="card1">
                                        <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">
                                            Glissement de la durée</h2>
                                        <!-- Demo info -->
                                        <div class="row text-center mt-2" style=" margin-top: 0px;">
                                            <div class="col-12">
                                                <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="dureeglissprog"></div>
                                                
                                            </div>
                                        </div><!-- END -->
                                    </div>
                                </div>
                                <div class="col-xs-6" style="padding: 10px;">
                                    <div class="card1">
                                        <h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;">
                                            Glissement échéancier</h2>
                                        <!-- Demo info -->
                                        <div class="row text-center mt-2" style=" margin-top: 0px;">
                                            <div class="col-12">
                                                <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;" id="dureeglissEch"></div>
                                            
                                            </div>
                                        </div><!-- END -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-xs-12" style="padding-left: 5px;">
                    <div class="col-sm-12" style=" padding-left: 0px; padding-right: 0px;">
                        <div class="panel panel-primary">
                                <div class="panel-heading">
                                    <h3 class="panel-title" style="text-align: center;"><i class="fa fa-percent fa-2x"></i> Pourcentage achevé des programmes
                                    </h3>
                                </div>
                                <div class="panel-body" style="padding: 0px 15px;">
                                    <div class="row">
                                        <div id="morris-area-chart-prog" style="width:  100%;">
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                      <div class="col-sm-12" style=" padding-left: 0px; padding-right: 0px;">
                            <div class="panel-heading" style="padding: 0px; overflow-y:auto;">
                            <div class="col-md-6 col-xs-12" style="    float: left;">                            
                            <button type="button" id="btnExport" title="Exporter vers excel"><img src='/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/img/Excel.png' class='img-rounded' alt='Cinque Terre' width='25px' height='25px'> Exporter vers excel</button>
                        </div>
                            <div class="col-md-6 col-xs-12 form-group" style="    float: right;">
                                <!--        Show Numbers Of Rows        -->
                                <select class="form-control" name="state" id="maxRows">
                                    <option value="5000">Afficher toutes les lignes</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                    <option value="70">70</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                               <table class="table  table-hover table-striped" style=" margin-bottom: 0px; border-radius: 7px 7px 0px 0px;"id="tableProjet11">
                                    <thead style="background-image: linear-gradient(225deg, #f39d9d 20%, #f18572 80%);color: black; ">
                                            <tr>
                                                <th style="text-align:center;width: 50%;cursor: pointer;">Intitulé des programmes</th>
                                                <th style="text-align:center;width: 50%;cursor: pointer;">% achevé </th>
                                            </tr>
                                    </thead>
                                

                                        <tbody style="text-align: center;" id="tableProjet1"></tbody>
                                    </table>
                                    <div class='pagination-container'>
                <nav>
                    <ul class="pagination">

                        <li data-page="prev">
                            <span>
                                <a href="#" class="previous round" style="color: #337ab7;">&#8249;</a> <span
                                    class="sr-only" style="color:white;">(current)
                                </span></span>
                        </li>
                        <!-- Here the JS Function Will Add the Rows -->
                        <li data-page="next" id="prev">
                            <span> <a href="#" class="next round" style="color: #337ab7;">&#8250;</a> <span class="sr-only"
                                    style="color:white;">(current)</span></span>
                        </li>
                    </ul>
                </nav>
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
    <script  src="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    <script  src="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/javascript/Chart.min.js"></script>
   <script  src="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/javascript/filterPortefolio.js"></script> 
    <script  src="/sites/Secteur_Bank/_catalogs/masterpage/Portefeuille_2022/javascript/typeSelPortefeuille.js"></script>

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
                //////console.log("date valide= " + auj);
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
                         if (value.EnterpriseProjectTypeName!=null && value.EnterpriseProjectTypeName == "Portefeuille Exercice 2022" ) {
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

   $("#btnExport").click(function (e) {
    //alert('hello');
    //getting values of current time for generating the file name
    var dt = new Date();
    var day = dt.getDate();
    var month = dt.getMonth() + 1;
    var year = dt.getFullYear();
    var hour = dt.getHours();
    var mins = dt.getMinutes();
    var postfix = day + "." + month + "." + year + "_" + hour + "." + mins;
    //creating a temporary HTML link element (they support setting file names)
    var a = document.createElement('a');
    //getting data from our div that contains the HTML table
    var data_type = 'data:application/vnd.ms-excel;text/html; charset=utf-8;';
    
    var table_html = $('#tableProjet11')[0].outerHTML;
//    table_html = table_html.replace(/ /g, '%20');
    table_html = table_html.replace(/<tfoot[\s\S.]*tfoot>/gmi, '');
    
    var css_html = '<style>td {border: 0.5pt solid #c0c0c0} .tRight { text-align:right} .tLeft { text-align:left} </style>';
//    css_html = css_html.replace(/ /g, '%20');
    
    a.href = data_type + ',' + encodeURIComponent('<html><head>' + css_html + '</' + 'head><body>' + table_html + '</body></html>');
    
    //setting the file name
    a.download = 'Pourcentage achevé des programmes' + postfix + '.xls';
    //triggering the function
    //alert('koookook');
    a.click();
    //just in case, prevent default behaviour
    e.preventDefault();
});
     
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


getPagination('#tableProjet11');

        function getPagination(table) {

            var lastPage = 1;

            $('#maxRows')
                .on('change', function (evt) {
                    //$('.paginationprev').html('');                      // reset pagination

                    lastPage = 1;
                    $('.pagination')
                        .find('li')
                        .slice(1, -1)
                        .remove();
                    var trnum = 0; // reset tr counter
                    var maxRows = parseInt($(this).val()); // get Max Rows from select option

                    if (maxRows == 5000) {
                        $('.pagination').hide();
                    } else {
                        $('.pagination').show();
                    }

                    var totalRows = $(table + ' tbody tr').length; // numbers of rows
                    $(table + ' tr:gt(0)').each(function () {
                        // each TR in  table and not the header
                        trnum++; // Start Counter
                        if (trnum > maxRows) {
                            // if tr number gt maxRows
                            $("#btnExport").hide();
                            
                            $(this).hide(); // fade it out
                        }
                        if (trnum <= maxRows) {
                            $("#btnExport").show();
                            $(this).show();

                        } // else fade in Important in case if it ..
                    }); //  was fade out to fade it in
                    if (totalRows > maxRows) {
                        // if tr total rows gt max rows option
                        var pagenum = Math.ceil(totalRows / maxRows); // ceil total(rows/maxrows) to get ..
                        //  numbers of pages
                        for (var i = 1; i <= pagenum;) {
                            // for each page append pagination li
                            $('.pagination #prev')
                                .before(
                                    '<li data-page="' +
                                    i +
                                    '">\
                                  <span>' +
                                    i++ +
                                    '<span class="sr-only">(current)</span></span>\
                                </li>'
                                )
                                .show();
                        } // end for i
                    } // end if row count > max rows
                    $('.pagination [data-page="1"]').addClass('active'); // add active class to the first li
                    $('.pagination li').on('click', function (evt) {
                        // on click each page
                        evt.stopImmediatePropagation();
                        evt.preventDefault();
                        var pageNum = $(this).attr('data-page'); // get it's number

                        var maxRows = parseInt($('#maxRows').val()); // get Max Rows from select option

                        if (pageNum == 'prev') {
                            if (lastPage == 1) {
                                return;
                            }
                            pageNum = --lastPage;
                        }
                        if (pageNum == 'next') {
                            if (lastPage == $('.pagination li').length - 2) {
                                return;
                            }
                            pageNum = ++lastPage;
                        }

                        lastPage = pageNum;
                        var trIndex = 0; // reset tr counter
                        $('.pagination li').removeClass('active'); // remove active class from all li
                        $('.pagination [data-page="' + lastPage + '"]').addClass('active'); // add active class to the clicked
                        // $(this).addClass('active');                  // add active class to the clicked
                        limitPagging();
                        $(table + ' tr:gt(0)').each(function () {
                            // each tr in table not the header
                            trIndex++; // tr index counter
                            // if tr index gt maxRows*pageNum or lt maxRows*pageNum-maxRows fade if out
                            if (
                                trIndex > maxRows * pageNum ||
                                trIndex <= maxRows * pageNum - maxRows
                            ) {
                                $(this).hide();
                            } else {
                                $(this).show();
                            } //else fade in
                        }); // end of for each tr in table
                    }); // end of on click pagination list
                    limitPagging();
                })
                .val(5000)
                .change();

            // end of on select change

            // END OF PAGINATION
        }

        function limitPagging() {
            // alert($('.pagination li').length)

            if ($('.pagination li').length > 7) {
                if ($('.pagination li.active').attr('data-page') <= 3) {
                    $('.pagination li:gt(5)').hide();
                    $('.pagination li:lt(5)').show();
                    $('.pagination [data-page="next"]').show();
                } if ($('.pagination li.active').attr('data-page') > 3) {
                    $('.pagination li:gt(0)').hide();
                    $('.pagination [data-page="next"]').show();
                    for (let i = (parseInt($('.pagination li.active').attr('data-page')) - 2); i <= (parseInt($('.pagination li.active').attr('data-page')) + 2); i++) {
                        $('.pagination [data-page="' + i + '"]').show();

                    }

                }
            }
        }

        $(function () {
            // Just to append id number for each row
            $('table tr:eq(20)').prepend('<th  style="display:none;"> ID </th>');

            var id = 0;

            $('table tr:gt(20)').each(function () {
                id++;
                $(this).prepend('<td style="display:none;">' + id + '</td>');
            });
        });
    </script>
</body>

</html>