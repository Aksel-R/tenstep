<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/css/bootstrap.min.css" rel="stylesheet">
    <link href="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/css/bootstrap.css"  rel="stylesheet">
    <link href="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/css/style.css" rel="stylesheet">
    <link href="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/css/achevement.css"  rel="stylesheet">
    <link  href="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/css/dataTables.bootstrap4.min.css"  rel="stylesheet">
    <link href="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/css/w3.css" rel="stylesheet">
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
            background-color: #337ab7;
            border-color: #337ab7;
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


    .modal {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  animation-name: show;
  animation-duration: 0.5s
}

.modal-content {
  position: relative;
  background-color: #fff;
  margin: 10% auto;
  width: 90%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-color: #337ab7;
}

@keyframes show {
  0% {
    display: none;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
}

.modal-header {
  padding: 0px;
  background-color: #337ab7;

}

.modal-body {
  padding: 12px;
}

.modal-footer {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 12px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 16px;
}

.close:hover,
.close:focus {
  color: black;
  cursor: pointer;
}

    </style>
</head>

<body id="page-top">



    <div id="wrapper">

        <!-- Navigation -->
       

        <div id="page-wrapper">
            <div class="container-fluid">
                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                    <img src="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/img/logo-tt.svg"  width="100" height="70" style="padding-bottom: 10px;">
                        <h1 class="page-header" id="DateJr" style="float: right;margin: 0px 20px;"></h1>
                         <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="border-radius: 5px;">
            <ul class="nav navbar-right top-nav" style="padding-left: 0px; padding-right: 0px;">
                <h3 id="titre" style="color: white; float: left; margin-bottom: 0px;margin-top: 0px;">Portefeuille TT
                </h3>
            </ul>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList1" onchange="selectMyList1();mainfilter();">
                <option value="">Axe</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList2" onchange="selectMyList2();mainfilter();">
                <option value="">Chantier</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList8" onchange="selectMyList8();mainfilter();">
                <option value="">Programme</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ; border-color: azure;"
                id="myList3" onchange="selectMyList3();mainfilter();">
                <option value="">Projet</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList4" onchange="selectMyList4();mainfilter();">
                <option value="">Sponsor</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList5" onchange="selectMyList5();mainfilter();">
                <option value="">Chef de projet</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList6" onchange="selectMyList6();mainfilter();">
                <option value="">Méthodologie</option>
            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 10%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList7" onchange="mainfilter();">
                <option value="">Structure</option>

            </select>
            
            
        </nav>

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
                                    <div class="col-sm-3" style="padding: 10px 0px 0px 0px ">
                                        <div class="col-12" id="chartAchGen">
                                                    
                                                </div>
                                    </div>
                                     <div class="col-sm-3" style="padding: 10px 0px 0px 0px ">
                                        <div class="col-sm-12"  id="statutGlKPI">
                                           
                                        </div>
                                    </div>
                                    <div class="col-sm-3" style="padding: 10px;">
                                        <div class="rounded-lg p-5 shadow"
                                            style="padding: 0.75rem;  background-color: aliceblue; background-color: aliceblue;">
                                            <h2 class="h5 font-weight-bold text-center mb-2"
                                                style="margin-top: 0px;">Nombre des chantiers</h2>
                                            <!-- Demo info -->
                                            <div class="row text-center mt-2"
                                                style=" margin-top: 0px;">
                                                <div class="col-12">
                                                    <div class="h3 font-weight-bold mb-0"
                                                        style=" margin-top: 0px;" id="countChantiers"></div><span
                                                        class="small text-gray">Chantiers</span>
                                                </div>
                                            </div><!-- END -->
                                        </div>
                                    </div>
                                    <div class="col-sm-3" style="padding: 10px;">
                                        <div class="rounded-lg p-5 shadow"
                                            style="padding: 0.75rem;  background-color: aliceblue; background-color: aliceblue;">
                                            <h2 class="h5 font-weight-bold text-center mb-2"
                                                style="margin-top: 0px;">Nombre des projets</h2>
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
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="panel-heading" style="padding: 0px;">
                                            <h3 style="text-align: center; background-color: #337ab7; color: white;"><i
                                                    class="fa fa-bar-chart-o fa-fw"></i> Vue détaillée des projets
                                            </h3>
                                            <div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >
                                            <table class="table table-bordered table-hover table-striped"
                                                style="border-radius:15px" id="tableProjet">
                                                <thead
                                                    style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">
                                                    <tr>
                                                        <th style="text-align:center;">Nom de projet</th>
                                                        <th style="text-align:center;">Statut</th>
                                                        <th style="text-align:center;">% achèvement</th>
                                                        <th style="text-align:center;">% Glissement</th>
                                                        <th style="text-align:center;">Début</th>
                                                        <th style="text-align:center;">Fin</th>
                                                        <th style="text-align:center;">Maturité planning</th>
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
                                    <div id="morris-area-chart" style="width:  100%;">


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
                <div class="row" >
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
                                     
                                        <div class="col-sm-12" style="padding: 0px 8px">

                                            <div class="panel panel-info" style="background-color: #e6f7ff;margin-bottom: 0px;">

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
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-money fa-fw"></i> Analyse des coûts</h3>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div style="width: 100%">
                                               <div class="col-lg-6" style="padding-right: 7px; padding-left: 10px;">
                                            <div class="panel panel-default" >
                                                <div class="panel-body">
                                                    <div id="tabResponsive">
                                                        <div id="containerdepassement"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6" style="padding-right: 7px; padding-left: 10px;">
                                            <div class="panel panel-default" >
                                                <div class="panel-body">
                                                    <div id="tabResponsive">
                                                        <div id="containerBudgetConso"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            </div>
                                             <div class="col-sm-12">
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
                                                            <h3 id="budjetTotal"style="font-weight: bold;color:#5cb85c;margin-top: 0px;margin-bottom: 0px;">
                                                                
                                                            </h3>
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

                                        <div class="col-lg-6">
                                            <div class="panel panel-default">

                                                <div class="panel-body">
                                                    <div id="bar1">
                                                        
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                     <!--   <div class="col-lg-12">
                                            <div class="panel panel-default">

                                                <div class="panel-body">
                                                    <div id="bar2">
                                                        
                                                    </div>
                                                </div>
                                            </div>

                                        </div> -->

                                        <div class="col-lg-6">

                                            <div class="panel panel-default">

                                                <div class="panel-body">
                                                 
                                                        <div id="containergravite"></div>
                                                   
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12">
                                        <h3 style="text-align: center; background-color: #337ab7; color: white;"><i class="fa fa-bar-chart-o fa-fw"></i>Risque déclenché J+15
                                            </h3>
                                            <div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;">
                                        <table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="risksJplus15">
                                                <thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">
                                                    <tr>
                                                        <th style="text-align:center;">Nom de projet</th>
                                                        <th style="text-align:center;">Chef de projet</th>
                                                        <th style="text-align:center;">Nom risque</th>
                                                        <th style="text-align:center;">Date déclenchement</th>
                                                        <th style="text-align:center;">Date Clôture</th>
                                                        <th style="text-align:center;">Gravité</th>
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
        <!-- /#page-wrapper -->




<div id="container" style="height: 400px"></div>

 <div id="demo-modal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
    <div class="col" style="max-width:25%; text-align: left;">
    <h3 id="modalTitle" style="color: white;"></h3>
    </div>
        <div class="col" style="max-width:50%; text-align: center;">
    <h3 id="modalTitle1" style="color: white;"></h3>
    </div>
    <div class="col" style="max-width:25%;padding-right: 5px;">
     <span class='close'><i class="fa fa-times fa-2x" aria-hidden="true"></i></span>
    </div>
     
      
    </div>
    <div class="modal-body" id="modalBody">
    </div>
    <div class="modal-footer">
     
    </div>
  </div>
</div>



    </div>


    <!-- /#wrapper -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script  src="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/javascript/jquery3.4.1.js"></script>
    <script  src="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/javascript/Chart.min.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/javascript/filterAxeDuplicat.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/javascript/popupFilterStatut.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/javascript/selectMyList1Duplicat.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/javascript/selectMyList2Duplicat.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/javascript/selectMyList3Duplicat.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/javascript/selectMyList4Duplicat.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/javascript/selectMyList5Duplicat.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/javascript/selectMyList6Duplicat.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/javascript/selectMyList8Duplicat.js"></script>
    <script src="/TTPWA/_catalogs/masterpage/Dashboard/Copil_Ps/javascript/moment-with-locales.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <script type="text/javascript">
       var modal = document.getElementById('demo-modal');
//var btn = document.getElementById('open-modal');
var close = modal.getElementsByClassName('close')[0];
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
        
function percentageToDegrees(percentage) {

                return percentage / 100 * 360

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
            document.getElementById("projTitle").innerHTML = '<i class="fa fa-dashboard"></i>' + ' Affichage Général';
        }
        showTitle();




        

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

       var responseSelectAxe=responseSelectAxe || [];
        var urlSelectAxe= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=AxeStrategique&$filter=Sousprojet%20eq%27Non%27&$orderby=AxeStrategique";
        function loadSelectAxe(){
          $.ajax({
                        url: urlSelectAxe,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseSelectAxe = responseSelectAxe.concat(data.d.results);
                            if (data.d.__next) {
                                urlSelectAxe = data.d.__next;
                                loadSelectAxe();
                            }
                            
                            

                            $.each(responseSelectAxe, function (key, value) {
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
                               
                               
                               


                            });
                            
                        }
                    });
        }
        loadSelectAxe();

        var responseSelectChantier=responseSelectChantier || [];
        var urlSelectChantier= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Chantier&$filter=Sousprojet%20eq%27Non%27&$orderby=Chantier";
        function loadSelectChantier(){
          $.ajax({
                        url: urlSelectChantier,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseSelectChantier = responseSelectChantier.concat(data.d.results);
                            if (data.d.__next) {
                                urlSelectChantier = data.d.__next;
                                loadSelectChantier();
                            }
                            
                            

                            $.each(responseSelectChantier, function (key, value) {
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
                               
                               
                               


                            });
                            
                        }
                    });
        }
        loadSelectChantier();
       
                var responseSelectProgramme=responseSelectProgramme || [];
        var urlSelectProgramme= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme&$filter=Sousprojet%20eq%27Non%27&$orderby=Programme";
        function loadSelectProgramme(){
          $.ajax({
                        url: urlSelectProgramme,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseSelectProgramme = responseSelectProgramme.concat(data.d.results);
                            if (data.d.__next) {
                                urlSelectProgramme = data.d.__next;
                                loadSelectProgramme();
                            }
                            
                            

                            $.each(responseSelectProgramme, function (key, value) {
                               if (value.Programme!=null) {
                                var programme=value.Programme;
                                $('#myList8').append($('<option>',
                               {
                                  text : programme,
                                  value:programme
                                })); 
                                var opt1 = {};
                                  $("#myList8 > option").each(function () {
                                    if(opt1[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt1[$(this).text()] = $(this).val();
                                    }
                                   });
                               }
                               
                               
                               


                            });
                            
                        }
                    });
        }
        loadSelectProgramme();

var responseSelectProj=responseSelectProj || [];
        var urlSelectProj= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName&$filter=Sousprojet%20eq%27Non%27&$orderby=ProjectName,Chantier";
        function loadSelectProj(){
          $.ajax({
                        url: urlSelectProj,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseSelectProj = responseSelectProj.concat(data.d.results);
                            if (data.d.__next) {
                                urlSelectProj = data.d.__next;
                                loadSelectProj();
                            }
                            
                            

                            $.each(responseSelectProj, function (key, value) {
                               
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
                               
                            });
                            
                        }
                    });
        }
        loadSelectProj();


        var responseSelectSponsor=responseSelectSponsor || [];
        var urlSelectSponsor= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Sponsor&$filter=Sousprojet%20eq%27Non%27&$orderby=Sponsor";
        function loadSelectSponsor(){
          $.ajax({
                        url: urlSelectSponsor,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseSelectSponsor = responseSelectSponsor.concat(data.d.results);
                            if (data.d.__next) {
                                urlSelectSponsor = data.d.__next;
                                loadSelectSponsor();
                            }
                            
                            

                            $.each(responseSelectSponsor, function (key, value) {
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
                               
                               
                               


                            });
                            
                        }
                    });
        }
        loadSelectSponsor();

        var responseSelectOwner=responseSelectOwner || [];
        var urlSelectOwner= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectOwnerName&$filter=Sousprojet%20eq%27Non%27&$orderby=ProjectOwnerName";
        function loadSelectOwner(){
          $.ajax({
                        url: urlSelectOwner,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseSelectOwner = responseSelectOwner.concat(data.d.results);
                            if (data.d.__next) {
                                urlSelectOwner = data.d.__next;
                                loadSelectOwner();
                            }
                            
                            

                            $.each(responseSelectOwner, function (key, value) {
                               
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
                               
                            });
                            
                        }
                    });
        }
        loadSelectOwner();

        var responseSelectStructure=responseSelectStructure || [];
        var urlSelectStructure= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees&$filter=Sousprojet%20eq%27Non%27";
        function loadSelectStructure(){
          $.ajax({
                        url: urlSelectStructure,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseSelectStructure = responseSelectStructure.concat(data.d.results);
                            if (data.d.__next) {
                                urlSelectStructure = data.d.__next;
                                loadSelectStructure();
                            }
                            
                            

                            $.each(responseSelectStructure, function (key, value) {
                               
                               if (value.Structuresimpliquees!=null) {
                                var structure=value.Structuresimpliquees;
                                //////////console.log("structure= "+structure);
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
        loadSelectStructure();

        var responseSelectMethodologie=responseSelectMethodologie || [];
        var urlSelectMethodologie= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Typedegestion&$filter=Sousprojet%20eq%27Non%27";
        function loadSelectMethodologie(){
          $.ajax({
                        url: urlSelectMethodologie,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseSelectMethodologie = responseSelectMethodologie.concat(data.d.results);
                            if (data.d.__next) {
                                urlSelectMethodologie = data.d.__next;
                                loadSelectMethodologie();
                            }
                            
                            

                            $.each(responseSelectMethodologie, function (key, value) {
                               
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
                               
                            });
                            
                        }
                    });
        }
        loadSelectMethodologie();

        var responseNbChantier=responseNbChantier || [];
        var urlNbChantier= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Chantier&$filter=Sousprojet%20eq%27Non%27";
        function loadNbChantier(){
          $.ajax({
                        url: urlNbChantier,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseNbChantier = responseNbChantier.concat(data.d.results);
                            if (data.d.__next) {
                                urlNbChantier = data.d.__next;
                                loadNbChantier();
                            }
                            
                            
                            var tabChan=[];
                            $.each(responseNbChantier, function (key, value) {
                               if (value.Chantier!=null) {
                                var chanName=value.Chantier;
                                if (tabChan.indexOf(chanName)<0) {
                                  tabChan.push(chanName);
                                }
                               }
                               
                            });
                            
                            document.getElementById("countChantiers").innerHTML=conToMill(tabChan.length);
                            
                        }
                    });
        }
        loadNbChantier();

        var urlgetPonderationProg = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getByTitle('PonderationNote')/items";
var responsegetPonderationProg = responsegetPonderationProg ||[];

function getPonderationProg()
{
  $.ajax({url:  urlgetPonderationProg,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responsegetPonderationProg = responsegetPonderationProg.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlgetPonderationProg = data.d.__next;
                                            getPonderationProg();
                                             } 
                  var nomResource="";
                  var uniq="";
                  var TabRess = [];

                  var arrayMatPlan=[];
                  var sumMatPlan=0;
                  var avgPlan=0;
                  
            $.each(responsegetPonderationProg, function(key, value) 
            { 
                  var pondPlanification=value.Echeancier ;
                  var pondBudget=value.predecesseurs ;
                  var pondRessources=value.Ressources ;
                  var pondPlanningdereference=value.PlanningReference ;
                  var pondSuivi=value.Suivi ;
                  var pondFicheprojet=value.ContenuFicheProjet ;
                  var pondDocumentsdeManagementdeprojet=value.DocumentManagementProjet ;
                  var pondDocumentsdeprojet=value.DocumentProjet ;
                  var pondObIndKPI=value.ObjectifsEtIndicateursKPI ;
                  var pondLivrablesEtJalons=value.LivrablesEtJalons ;
                  var pondRisques=value.Risque ;
                  var pondProblemes=value.Probleme ;
                  var pondConformite=value.ConformiteRealit_x00e9_ ;
                  var pondModeGestionProjet=value.ModeGestionProjet;
                  // LoadMaturPlanProg(pondPlanification,pondBudget,pondRessources,pondPlanningdereference,pondSuivi,pondFicheprojet,pondDocumentsdeManagementdeprojet,pondDocumentsdeprojet,pondObIndKPI,pondLivrablesEtJalons,pondRisques,pondProblemes,pondConformite,pondModeGestionProjet);
                  loadTabProj(pondPlanification,pondBudget,pondRessources,pondPlanningdereference,pondSuivi,pondFicheprojet,pondDocumentsdeManagementdeprojet,pondDocumentsdeprojet,pondObIndKPI,pondLivrablesEtJalons,pondRisques,pondProblemes,pondConformite,pondModeGestionProjet);
            });

           



}   
});

}
getPonderationProg();
                var responseTabProj=responseTabProj || [];
        var urlTabProj= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,NoteBudget,NoteRessources,NotePlanningdereference,NoteSuividuplanning,NoteContenuFichedeprojet,NoteDocumentsdeManagementdeprojet,NoteDocumentsdeprojet,NoteObjectifsetindicateursKPI,NoteLivrablesetjalons,NoteRisques,NoteProblemes,NoteConformitéàlaréalité,NoteModedegestionduprojet&$filter=Sousprojet%20eq%27Non%27&$orderby=ProjectName,Chantier";
        function loadTabProj(pondPlanification,pondBudget,pondRessources,pondPlanningdereference,pondSuivi,pondFicheprojet,pondDocumentsdeManagementdeprojet,pondDocumentsdeprojet,pondObIndKPI,pondLivrablesEtJalons,pondRisques,pondProblemes,pondConformite,pondModeGestionProjet){
          $.ajax({
                        url: urlTabProj,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseTabProj = responseTabProj.concat(data.d.results);
                            if (data.d.__next) {
                                urlTabProj = data.d.__next;
                                loadTabProj(pondPlanification,pondBudget,pondRessources,pondPlanningdereference,pondSuivi,pondFicheprojet,pondDocumentsdeManagementdeprojet,pondDocumentsdeprojet,pondObIndKPI,pondLivrablesEtJalons,pondRisques,pondProblemes,pondConformite,pondModeGestionProjet);
                            }
                            
                            
                            var countProjet=0;
                            var sumAchevement=0;
                            var idArr=[];
                            var debArr=[];
                              var finArr=[];
                              var refFinArr=[];
                              var glissArr=[];
                            //-------------------
                            
                            //--------------------------------------------
                            $.each(responseTabProj, function (key, value) {
                                moment.locale('fr');
                                var idp=value.ProjectId;
                                var nomP=value.ProjectName;
                                var statP=value.Etatdeprojet;
                                var achP=value.ProjectPercentCompleted;
                                var deb=value.ProjectStartDate;
                                var debutP=moment(deb).format("DD-MM-YYYY");
                                var fin=value.ProjectFinishDate;
                                var finP=moment(fin).format("DD-MM-YYYY");
                                var NotePlanification=0;
                                if (idArr.indexOf(idp)<0) {
                                    idArr.push(idp);
                                    debArr.push(deb);
                                    finArr.push(fin);
                                    if (statP=="Planifié") {
                                        refFinArr.push("Planifié");
                                        glissArr.push("Planifié");
                                    }else{
                                        refFinArr.push("Pas de référence");
                                        glissArr.push("Pas de référence");
                                    }
                                    
                                   }
                    if (value.NotePlanification!=null) {
                      NotePlanification=value.NotePlanification;
                    }
                          var NoteBudget=0;
                          if (value.NoteBudget!=null) {
                            NoteBudget=value.NoteBudget;
                          }
                          var noteRessources=0;
                          if (value.NoteRessources!=null) {
                            noteRessources=value.NoteRessources;
                          }
                          var notePlanningdereference=0;
                          if (value.NotePlanningdereference!=null) {
                            notePlanningdereference=value.NotePlanningdereference;
                          }
                          //////console.log("notePlanningdereference= "+notePlanningdereference);
                          var NoteSuividuplanning=0;
                          if (value.NoteSuividuplanning!=null) {
                            NoteSuividuplanning=value.NoteSuividuplanning;
                          }
                          var NoteContenuFichedeprojet=0;
                          if (value.NoteContenuFichedeprojet!=null) {
                            NoteContenuFichedeprojet=value.NoteContenuFichedeprojet;
                          }
                          var noteDocumentsdeManagementdeprojet=0;
                          if (value.NoteDocumentsdeManagementdeprojet!=null) {
                            noteDocumentsdeManagementdeprojet=value.NoteDocumentsdeManagementdeprojet;
                          }
                          var noteDocumentsdeprojet=0;
                          if (value.NoteDocumentsdeprojet!=null) {
                            noteDocumentsdeprojet=value.NoteDocumentsdeprojet;
                          }
                          var NoteObjectifsetindicateursKPI=0;
                          if (value.NoteObjectifsetindicateursKPI!=null) {
                            NoteObjectifsetindicateursKPI=value.NoteObjectifsetindicateursKPI;
                          }
                          var NoteLivrablesetjalons=0;
                          if (value.NoteLivrablesetjalons!=null) {
                            NoteLivrablesetjalons=value.NoteLivrablesetjalons;
                          }
                          var noteRisques=0;
                          if (value.NoteRisques!=null) {
                            noteRisques=value.NoteRisques;
                          }
                          var noteProblemes=0;
                          if (value.NoteProblemes!=null) {
                            noteProblemes=value.NoteProblemes;
                          }
                          var NoteConformitéàlaréalité=0;
                          if (value.NoteConformitéàlaréalité!=null) {
                            NoteConformitéàlaréalité=value.NoteConformitéàlaréalité;
                          }
                          var NoteModedegestionduprojet=0;
                          if (value.NoteModedegestionduprojet!=null) {
                            NoteModedegestionduprojet=value.NoteModedegestionduprojet;
                          }
                          var sumPond=0;
                          sumPond=parseInt(pondPlanification)+parseInt(pondBudget)+parseInt(pondRessources)+parseInt(pondPlanningdereference)+parseInt(pondSuivi)+parseInt(pondFicheprojet)+parseInt(pondDocumentsdeManagementdeprojet)+parseInt(pondDocumentsdeprojet)+parseInt(pondObIndKPI)+parseInt(pondLivrablesEtJalons)+parseInt(pondRisques)+parseInt(pondProblemes)+parseInt(pondConformite)+parseInt(pondModeGestionProjet);
                          ////////console.log("sumPond= "+sumPond); 
                         var Score=parseFloat((pondPlanification*NotePlanification)/5)+parseFloat((pondBudget*NoteBudget)/5)+parseFloat((pondRessources*noteRessources)/5)+parseFloat((pondPlanningdereference*notePlanningdereference)/5)+parseFloat((pondSuivi*NoteSuividuplanning)/5)+parseFloat((pondFicheprojet*NoteContenuFichedeprojet)/5)+parseFloat((pondDocumentsdeManagementdeprojet*noteDocumentsdeManagementdeprojet)/5)+parseFloat((pondDocumentsdeprojet*noteDocumentsdeprojet)/5)+parseFloat((pondObIndKPI*NoteObjectifsetindicateursKPI)/5)+parseFloat((pondLivrablesEtJalons*NoteLivrablesetjalons)/5)+parseFloat((pondRisques*noteRisques)/5)+parseFloat((pondProblemes*noteProblemes)/5)+parseFloat((pondConformite*NoteConformitéàlaréalité)/5)+parseFloat((pondModeGestionProjet*NoteModedegestionduprojet)/5);
                          var matPlanProj=parseFloat((Score/sumPond)*100);
                                var tr;
                                tr = $("<tr>");
                                tr.append("<td style='text-align:left'>" + nomP + "</td>");//0
                                tr.append("<td>" + statP + "</td>");//1                        
                               
                                tr.append("<td>" + achP+ "%</td>"); //2
                                tr.append("<td></td>"); //3
                                tr.append("<td>" + debutP + "</td>"); //4
                                tr.append("<td>"+ finP +"</td>"); //5
                                tr.append("<td>"+parseFloat(matPlanProj).toFixed(0) +"%</td>"); //6
                                tr.append("<td style='text-align:center; display:none;'>"+idp +"</td>");
                                
                                $('#tableProjet tbody').append(tr);
                            });
remplirGlissementTab(idArr,debArr,finArr,refFinArr,glissArr);
                        }
                    });
        }
   
        var urlremplirGlissementTab = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectBaselineFinishDate";
var responseremplirGlissementTab = responseremplirGlissementTab ||[];
function remplirGlissementTab(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG,glissG){

  $.ajax({url:  urlremplirGlissementTab,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseremplirGlissementTab = responseremplirGlissementTab.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlremplirGlissementTab = data.d.__next;
                                            remplirGlissementTab(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG,glissG);
                                        } 
                                        var durReel=[];
                                        var durRef=[];
                                        //var glissArray=[];
                                       
                  
             // console.log("idProjetG= "+idProjetG.length);
            $.each(responseremplirGlissementTab, function(key, value) 
            { 
              var idProjBaseline=value.ProjectId;
              var finRefProj=value.ProjectBaselineFinishDate;
              
              //for (var i =0; i<idProjetG.length; i++) {
                if ((idProjetG.indexOf(idProjBaseline)>-1)&&(dateFinRefG[idProjetG.indexOf(idProjBaseline)]!="Planifié")) {
                  
                  dateFinRefG[idProjetG.indexOf(idProjBaseline)]=finRefProj;
                }
                //idProjetG[i]
              //}

            });
             moment.locale('fr');
            
            
            for (var i = 0; i <idProjetG.length; i++) {
              if((dateFinRefG[i]!="Pas de référence")&&(dateFinRefG[i]!="Planifié")) {
                var refFinish=moment(dateFinRefG[i]);
                var dateFin=moment(dateFinProjetG[i]);
                var daetDeb=moment(dateDebProjetG[i]);
                var realDuration=dateFin.diff(daetDeb,'days');
                var baseDuration=refFinish.diff(daetDeb,'days');
                var gliss=0;
                gliss=parseFloat(((realDuration-baseDuration)/realDuration)*100).toFixed(0);
                if (gliss<0) {
                  gliss=0;
                }
                //////////console.log("gliss= "+gliss);
                glissG[i]=gliss;
              }
            }
            var numRows = document.getElementById("tableProjet").rows.length;

            for(var i=1;i<numRows;i++)
          {
 var tbl = document.getElementById("tableProjet");

 var idProjet1=tbl.rows[i].cells[7].innerHTML;

for (var j = 0; j < idProjetG.length; j++) {
  if (idProjetG[j]==idProjet1) {
    
    if(glissG[j] =="Pas de référence")
                {
                    tbl.rows[i].cells[3].innerHTML  = "Pas de référence";
                    
                     tbl.rows[i].cells[3].style.background='#807e7e';
                     tbl.rows[i].cells[3].style.color='white';
                }else if(glissG[j] =="Planifié")
                {
                    tbl.rows[i].cells[3].innerHTML  = "Planifié";
                    
                     tbl.rows[i].cells[3].style.background='#41B4FF';
                     tbl.rows[i].cells[3].style.color='white';
                }
                else
                {
                  if(parseInt(glissG[j])<0)
                  {
                    tbl.rows[i].cells[3].innerHTML = 0 + "%";
                    
 

                     tbl.rows[i].cells[3].style.backgroundColor='#207920';
                      tbl.rows[i].cells[3].style.color='white';
                  }
                  else
                  {
                    tbl.rows[i].cells[3].innerHTML = parseFloat(glissG[j]).toFixed(0) + "%";
                    
                   
                    if((parseInt(glissG[j]) >=0)&&(parseInt(glissG[j]) <30))
                    {
                      tbl.rows[i].cells[3].style.backgroundColor='#207920';
                      tbl.rows[i].cells[3].style.color='white';
                    }
                    if((parseInt(glissG[j]) >=30)&&(parseInt(glissG[j]) <70))
                    {
                      tbl.rows[i].cells[3].style.background='#CBC502';
                      tbl.rows[i].cells[3].style.color='white';
                    }
                     if((parseInt(glissG[j]) >=70)&&(parseInt(glissG[j]) <=100))
                    {
                      tbl.rows[i].cells[3].style.background='#E34434';
                      tbl.rows[i].cells[3].style.color='white';
                    }
                    
                  
                  }
                }

    //tbl.rows[i].cells[6].innerHTML=glissG[i];
  }
}
              
            }

            
}           
});
}
        var responseKPIGeneral=responseKPIGeneral || [];
        var urlKPIGeneral= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectPercentCompleted&$filter=Sousprojet%20eq%27Non%27";
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
                            /*if (isNaN(avgAchevement)){avgAchevement=0;}
                            if (avgAchevement<30) {
                              document.getElementById("statutGlKPI").innerHTML='<i class="fa fa-circle fa-4x" aria-hidden="true" style="color : #FF4E28;"></i>';
                            }
                            if ((avgAchevement>=30)&&(avgAchevement<=75)) {
                              document.getElementById("statutGlKPI").innerHTML='<i class="fa fa-circle fa-4x" aria-hidden="true" style="color : #FF4E28;"></i>';
                            }
                            if (avgAchevement>75) {
                              document.getElementById("statutGlKPI").innerHTML='<i class="fa fa-circle fa-4x" aria-hidden="true" style="color : #16A331;"></i>';
                            }*/
                            //document.getElementById("avgAchevement").innerHTML=avgAchevement+"%";

                            document.getElementById("chartAchGen").innerHTML = 
                            '<div class="rounded-lg p-2 shadow" style="padding: 0.75rem;  background-color: aliceblue; background-color: aliceblue;">' +
                            ' <h2 class="h6 font-weight-bold text-center mb-3">Achèvement</h2>' +


                            '<div class="progress mx-auto" data-value="'+avgAchevement+'">' +
                            ' <span class="progress-left">' +
                            '<span class="progress-bar border-info" id="leftDegGenAch"></span>' +
                            '</span>' +
                            '<span class="progress-right">' +
                            '<span class="progress-bar border-info" id="rightDegGenAch"></span>' +
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
                                $("#rightDegGenAch").css('transform', 'rotate(' + percentageToDegrees(avgAchevement) + 'deg)')
                            } else {
                                $("#rightDegGenAch").css('transform', 'rotate(180deg)')
                                $("#leftDegGenAch").css('transform', 'rotate(' + percentageToDegrees(avgAchevement - 50) + 'deg)')
                            }
                            
                            
                            
                        }
                    });
        }
        loadKPIGeneral();


        //************************************************************************************************************************************************************//

        var responseAnalyseStatut = responseAnalyseStatut || [];
        var urlAnalyseStatut = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectFinishDate,ProjectPercentCompleted,Etatdeprojet&$filter=Sousprojet%20eq%27Non%27";
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
                    var dateJour=moment().format('YYYY-MM-DD');
                    var moisPrec=moment().add('days',-90).format('YYYY-MM-DD');


                    //////console.log("dateJour= "+dateJour);
                    //////console.log("moisPrec= "+moisPrec);
                    var countProjTerPeriode=0

                    $.each(responseAnalyseStatut, function (key, value) {
                      moment.locale('fr');
                      var finish=value.ProjectFinishDate;
                      var finProjet=moment(finish).format('DD-MM-YYYY');
                      var finishFormatMoment=moment(finish).format('YYYY-MM-DD');
                      
                      if ((moment(finishFormatMoment).isBetween(moisPrec, dateJour))&&(statutProjet=="Clôturé")&&(value.ProjectPercentCompleted==100)) {
                        countProjTerPeriode++;
                      }

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

                    document.getElementById("morris-area-chart").innerHTML = '<div class="col-sm-2" style="cursor: pointer; max-width: 14%;padding-right: 5px;padding-left: 5px;" onclick="projetParstatutCloture();">' +
                        '<div class=" rounded-lg p-2 shadow" style="background-color: aliceblue;">' +
                        ' <h2 class="h6 font-weight-bold text-center mb-4">Clôturés</h2>' +


                        '<div class="progress mx-auto" data-value="'+percentCloture+'">' +
                        ' <span class="progress-left">' +
                        '<span class="progress-bar border-info" id="leftDegCloture"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-info" id="rightDegCloture"></span>' +
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

                        '<div class="col-sm-2" style="cursor: pointer; max-width: 14%;padding-left: 5px;padding-right: 5px;" onclick="projetParstatutArr();">' +
                        '<div class="rounded-lg p-2 shadow" style="background-color: aliceblue;">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">StandBy</h2>' +

                        '<!-- Progress bar 2 -->' +
                        '<div class="progress mx-auto" id="aTerminePour" data-value="'+percentArret+'">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-info" id="leftDegATer"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-info" id="rightDegATer"></span>' +
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

                       '<div class="col-sm-2" style="cursor: pointer; max-width: 14%;padding-left: 5px;padding-right: 5px;" onclick="projetParstatutEnCours();">' +
                        '<div class="rounded-lg p-2 shadow" style=" background-color: aliceblue;">' +
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

                        '<div class="col-sm-2" style="cursor: pointer; max-width: 14%;padding-left: 5px;padding-right: 5px;" onclick="projetParstatutRetard();">' +
                        '<div class="rounded-lg p-2 shadow" style=" background-color: aliceblue;">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">En retard</h2>' +

                        '<!-- Progress bar 4 -->' +
                        '<div class="progress mx-auto" id="retardPour" data-value="'+porcentRetard+'">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-info" id="leftDegRetard"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-info" id="rightDegRetard"></span>' +
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




                        '<div class="col-sm-2" style="cursor: pointer; max-width: 14%;padding-left: 5px;padding-right: 5px;" onclick="projetParstatutAbandonne();">' +
                        '<div class="rounded-lg p-2 shadow" style=" background-color: aliceblue;">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">Abandonnés</h2>' +
                        '<!-- Progress bar 5 -->' +
                        '<div class="progress mx-auto" id="retardPour" data-value="'+percentAbandonne+'">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-info" id="leftDegAbandonne"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-info" id="rightDegAbandonne"></span>' +
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

                        '<div class="col-sm-2" style="cursor: pointer; max-width: 14%;padding-left: 5px;padding-right: 5px;" onclick="projetParstatutPlanifie();">' +
                        '<div class="rounded-lg p-2 shadow" style=" background-color: aliceblue;">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">Planifiés</h2>' +
                        '<!-- Progress bar 5 -->' +
                        '<div class="progress mx-auto" id="retardPour" data-value="'+percentPlanifie+'">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-info" id="leftDegPlanifie"></span>' +

                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-info" id="rightDegPlanifie"></span>' +
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
                        '</div>' +
                        
                        '<div class="col-sm-2" style="cursor: pointer; max-width: 16%;padding-left: 5px;padding-right: 5px;" onclick="projetParstatut90Jrs();">'+
                         '<div class="rounded-lg  shadow" style="padding: 18% 6%; background-color: #fbe4c7;">'+
                         ' <h2 class="h5 font-weight-bold text-center mb-4">Projets terminés </br>J-90</h2>'+
                                                    '<div class="row text-center mt-4">'+
                                                        '<div class="col-12">'+
                                                            '<div class="h3 font-weight-bold mb-0">'+countProjTerPeriode+'</div><span class="small text-gray">Projets</span>'+
                                                        '</div>'+
                                                      '</div>'+
                                                '</div>'+
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

                
           
function projetParstatutCloture(){
        document.getElementById("modalTitle").innerHTML="Détails des projets";
    document.getElementById("modalTitle1").innerHTML= "Clôturés";
    document.getElementById("modalBody").innerHTML=
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Date début</th>'+
                                                        '<th style="text-align:center;">Date fin</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Coût</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };

    var responseAnalyseStatutCloture = responseAnalyseStatutCloture || [];
        var urlAnalyseStatutCloture = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,ProjectOwnerName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectCost&$filter=Sousprojet%20eq%27Non%27%20and%20Etatdeprojet%20eq%27Clôturé%27";
      
        function loadAnalyseStatutCloture(){
            $.ajax({
                        url: urlAnalyseStatutCloture,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAnalyseStatutCloture = responseAnalyseStatutCloture.concat(data.d.results);
                            if (data.d.__next) {
                                urlAnalyseStatutCloture = data.d.__next;
                                loadAnalyseStatutCloture();
                            }
                            
                            

                            $.each(responseAnalyseStatutCloture, function (key, value) {
                                var NomP=value.ProjectName;
                                var deb=value.ProjectStartDate;
                                
                                var debutP=moment(deb).format("DD-MM-YYYY");

                                var fin=value.ProjectFinishDate;
                                

                                var finP=moment(fin).format("DD-MM-YYYY");
                                var ach=value.ProjectPercentCompleted;
                                var cost=value.ProjectCost;
                                var chefProj=value.ProjectOwnerName;
                               var tr;
                                  tr = $("<tr>");
                                  tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                  tr.append("<td>"+ chefProj +"</td>");//0
                                  tr.append("<td>"+ debutP + "</td>"); //
                                  tr.append("<td>"+ finP + "</td>"); //4
                                  tr.append("<td>"+ ach +"</td>"); //5
                                  tr.append("<td>"+ cost +"</td>"); //5
                                                         
                                  $('#tableProjStatut tbody').append(tr);

                            });
                            
                        }
                    });
        }
        loadAnalyseStatutCloture();
}

function projetParstatutArr(){
        document.getElementById("modalTitle").innerHTML="Détails des projets";
    document.getElementById("modalTitle1").innerHTML= "StandBy";
    document.getElementById("modalBody").innerHTML=
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Date début</th>'+
                                                        '<th style="text-align:center;">Date fin</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Coût</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };

    var responseAnalyseStatutArret = responseAnalyseStatutArret || [];
        var urlAnalyseStatutArret = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,ProjectOwnerName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectCost&$filter=Sousprojet%20eq%27Non%27";
      
        function loadAnalyseStatutArret(){
            $.ajax({
                        url: urlAnalyseStatutArret,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAnalyseStatutArret = responseAnalyseStatutArret.concat(data.d.results);
                            if (data.d.__next) {
                                urlAnalyseStatutArret = data.d.__next;
                                loadAnalyseStatutArret();
                            }
                            
                            

                            $.each(responseAnalyseStatutArret, function (key, value) {
                                var statut=value.Etatdeprojet;
                                if (statut.indexOf("StandBy")>=0) {
                                  statut="StandBy";
                                  var NomP=value.ProjectName;
                                var deb=value.ProjectStartDate;
                                
                                var debutP=moment(deb).format("DD-MM-YYYY");

                                var fin=value.ProjectFinishDate;
                                

                                var finP=moment(fin).format("DD-MM-YYYY");
                                var ach=value.ProjectPercentCompleted;
                                var cost=value.ProjectCost;
                                var chefProj=value.ProjectOwnerName;
                               var tr;
                                  tr = $("<tr>");
                                  tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                   tr.append("<td>"+ chefProj +"</td>");//0
                                  tr.append("<td>"+ debutP + "</td>"); //
                                  tr.append("<td>"+ finP + "</td>"); //4
                                  tr.append("<td>"+ ach +"</td>"); //5
                                  tr.append("<td>"+ cost +"</td>"); //5
                                                         
                                  $('#tableProjStatut tbody').append(tr);
                                }

                                

                            });
                            
                        }
                    });
        }
        loadAnalyseStatutArret();
}  


function projetParstatutEnCours(){
        document.getElementById("modalTitle").innerHTML="Détails des projets";
    document.getElementById("modalTitle1").innerHTML= "En cours";
    document.getElementById("modalBody").innerHTML=
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Date début</th>'+
                                                        '<th style="text-align:center;">Date fin</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Coût</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };

    var responseAnalyseStatutEnCours = responseAnalyseStatutEnCours || [];
        var urlAnalyseStatutEnCours = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,ProjectOwnerName,ProjectOwnerName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectCost&$filter=Sousprojet%20eq%27Non%27%20and%20Etatdeprojet%20eq%27En cours%27";
      
        function loadAnalyseStatutEnCours(){
            $.ajax({
                        url: urlAnalyseStatutEnCours,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAnalyseStatutEnCours = responseAnalyseStatutEnCours.concat(data.d.results);
                            if (data.d.__next) {
                                urlAnalyseStatutEnCours = data.d.__next;
                                loadAnalyseStatutEnCours();
                            }
                            
                            

                            $.each(responseAnalyseStatutEnCours, function (key, value) {
                                
                                  statut="StandBy";
                                  var NomP=value.ProjectName;
                                var deb=value.ProjectStartDate;
                                
                                var debutP=moment(deb).format("DD-MM-YYYY");

                                var fin=value.ProjectFinishDate;
                                

                                var finP=moment(fin).format("DD-MM-YYYY");
                                var ach=value.ProjectPercentCompleted;
                                var cost=value.ProjectCost;
                                var chefProj=value.ProjectOwnerName;

                               var tr;
                                  tr = $("<tr>");
                                  tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                  tr.append("<td>"+ chefProj +"</td>");//0
                                  tr.append("<td>"+ debutP + "</td>"); //
                                  tr.append("<td>"+ finP + "</td>"); //4
                                  tr.append("<td>"+ ach +"</td>"); //5
                                  tr.append("<td>"+ cost +"</td>"); //5
                                                         
                                  $('#tableProjStatut tbody').append(tr);
                              

                                

                            });
                            
                        }
                    });
        }
        loadAnalyseStatutEnCours();
}


function projetParstatutRetard(){
        document.getElementById("modalTitle").innerHTML="Détails des projets";
    document.getElementById("modalTitle1").innerHTML= "En retard";
    document.getElementById("modalBody").innerHTML=
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Date début</th>'+
                                                        '<th style="text-align:center;">Date fin</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Coût</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };

    var responseAnalyseStatutRetard = responseAnalyseStatutRetard || [];
        var urlAnalyseStatutRetard = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,ProjectOwnerName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectCost&$filter=Sousprojet%20eq%27Non%27";
      
        function loadAnalyseStatutRetard(){
            $.ajax({
                        url: urlAnalyseStatutRetard,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAnalyseStatutRetard = responseAnalyseStatutRetard.concat(data.d.results);
                            if (data.d.__next) {
                                urlAnalyseStatutRetard = data.d.__next;
                                loadAnalyseStatutRetard();
                            }
                            
                            

                            $.each(responseAnalyseStatutRetard, function (key, value) {
                                var statut=value.Etatdeprojet;
                                var today=moment().format('DD-MM-YYYY');
                       var fin=value.ProjectFinishDate;
                                

                                var finP=moment(fin).format("DD-MM-YYYY");
                      var achevement=value.ProjectPercentCompleted;
                      if ((moment(finP).isBefore(today))&&(achevement<100)) {
                        
                     
                                  var NomP=value.ProjectName;
                                var deb=value.ProjectStartDate;
                                
                                var debutP=moment(deb).format("DD-MM-YYYY");

                               
                                var ach=value.ProjectPercentCompleted;
                                var cost=value.ProjectCost;
                                var chefProj=value.ProjectOwnerName;
                               var tr;
                                  tr = $("<tr>");
                                  tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                    tr.append("<td>"+ chefProj +"</td>");//0
                                  tr.append("<td>"+ debutP + "</td>"); //
                                  tr.append("<td>"+ finP + "</td>"); //4
                                  tr.append("<td>"+ ach +"</td>"); //5
                                  tr.append("<td>"+ cost +"</td>"); //5
                                                         
                                  $('#tableProjStatut tbody').append(tr);
                                }

                                

                            });
                            
                        }
                    });
        }
        loadAnalyseStatutRetard();
}



function projetParstatutAbandonne(){
        document.getElementById("modalTitle").innerHTML="Détails des projets";
    document.getElementById("modalTitle1").innerHTML= "Abandonnés";
    document.getElementById("modalBody").innerHTML=
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Date début</th>'+
                                                        '<th style="text-align:center;">Date fin</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Coût</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };

    var responseAnalyseStatutAbandonne = responseAnalyseStatutAbandonne || [];
        var urlAnalyseStatutAbandonne = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,ProjectOwnerName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectCost&$filter=Sousprojet%20eq%27Non%27%20and%20Etatdeprojet%20eq%27Abandonné%27";
      
        function loadAnalyseStatutAbandonne(){
            $.ajax({
                        url: urlAnalyseStatutAbandonne,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAnalyseStatutAbandonne = responseAnalyseStatutAbandonne.concat(data.d.results);
                            if (data.d.__next) {
                                urlAnalyseStatutAbandonne = data.d.__next;
                                loadAnalyseStatutAbandonne();
                            }
                            
                            

                            $.each(responseAnalyseStatutAbandonne, function (key, value) {
                                
                        
                     
                                  var NomP=value.ProjectName;
                                var deb=value.ProjectStartDate;
                                
                                var debutP=moment(deb).format("DD-MM-YYYY");

                               var fin=value.ProjectFinishDate;
                                

                                var finP=moment(fin).format("DD-MM-YYYY");
                                var ach=value.ProjectPercentCompleted;
                                var cost=value.ProjectCost;
                                var chefProj=value.ProjectOwnerName;
                               var tr;
                                  tr = $("<tr>");
                                  tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                  tr.append("<td>"+ chefProj +"</td>");//0
                                  tr.append("<td>"+ debutP + "</td>"); //
                                  tr.append("<td>"+ finP + "</td>"); //4
                                  tr.append("<td>"+ ach +"</td>"); //5
                                  tr.append("<td>"+ cost +"</td>"); //5
                                                         
                                  $('#tableProjStatut tbody').append(tr);
                                

                                

                            });
                            
                        }
                    });
        }
        loadAnalyseStatutAbandonne();
}
            

function projetParstatutPlanifie(){
        document.getElementById("modalTitle").innerHTML="Détails des projets";
    document.getElementById("modalTitle1").innerHTML= "Planifiés";
    document.getElementById("modalBody").innerHTML=
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Date début</th>'+
                                                        '<th style="text-align:center;">Date fin</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Coût</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };

    var responseAnalyseStatutPlanifie = responseAnalyseStatutPlanifie || [];
        var urlAnalyseStatutPlanifie = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,ProjectOwnerName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectCost&$filter=Sousprojet%20eq%27Non%27%20and%20Etatdeprojet%20eq%27Planifié%27";
      
        function loadAnalyseStatutPlanifie(){
            $.ajax({
                        url: urlAnalyseStatutPlanifie,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAnalyseStatutPlanifie = responseAnalyseStatutPlanifie.concat(data.d.results);
                            if (data.d.__next) {
                                urlAnalyseStatutPlanifie = data.d.__next;
                                loadAnalyseStatutPlanifie();
                            }
                            
                            

                            $.each(responseAnalyseStatutPlanifie, function (key, value) {
                                
                        
                     
                                  var NomP=value.ProjectName;
                                var deb=value.ProjectStartDate;
                                
                                var debutP=moment(deb).format("DD-MM-YYYY");

                               var fin=value.ProjectFinishDate;
                                

                                var finP=moment(fin).format("DD-MM-YYYY");
                                var ach=value.ProjectPercentCompleted;
                                var cost=value.ProjectCost;
                                var chefProj=value.ProjectOwnerName;
                               var tr;
                                  tr = $("<tr>");
                                  tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                  tr.append("<td>"+ chefProj +"</td>");//0
                                  tr.append("<td>"+ debutP + "</td>"); //
                                  tr.append("<td>"+ finP + "</td>"); //4
                                  tr.append("<td>"+ ach +"</td>"); //5
                                  tr.append("<td>"+ cost +"</td>"); //5
                                                         
                                  $('#tableProjStatut tbody').append(tr);
                                

                                

                            });
                            
                        }
                    });
        }
        loadAnalyseStatutPlanifie();
}


function projetParstatut90Jrs(){
        document.getElementById("modalTitle").innerHTML="Détails des projets";
    document.getElementById("modalTitle1").innerHTML= "Projet terminés J-90";
    document.getElementById("modalBody").innerHTML=
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Date début</th>'+
                                                        '<th style="text-align:center;">Date fin</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Coût</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };

    var responseAnalyseStatut90Jrs = responseAnalyseStatut90Jrs || [];
        var urlAnalyseStatut90Jrs = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,ProjectOwnerName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectCost&$filter=Sousprojet%20eq%27Non%27%20and%20Etatdeprojet%20eq%27Clôturé%27";
      console.log("urlAnalyseStatut90Jrs= "+urlAnalyseStatut90Jrs);
        function loadAnalyseStatut90Jrs(){
            $.ajax({
                        url: urlAnalyseStatut90Jrs,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAnalyseStatut90Jrs = responseAnalyseStatut90Jrs.concat(data.d.results);
                            if (data.d.__next) {
                                urlAnalyseStatut90Jrs = data.d.__next;
                                loadAnalyseStatut90Jrs();
                            }
                            
                            

                            $.each(responseAnalyseStatut90Jrs, function (key, value) {
                                
                                moment.locale('fr');
                                var dateJour=moment().format('YYYY-MM-DD');
                                var moisPrec=moment().add('days',-90).format('YYYY-MM-DD');
                                var fin=value.ProjectFinishDate;
                                var finishFormatMoment=moment(fin).format('YYYY-MM-DD');
                                console.log("ddddddddddddddddddddddddddddddddddddddddddddd "+finishFormatMoment);
                                if (moment(finishFormatMoment).isBetween(moisPrec, dateJour)){
                                    
                                    var NomP=value.ProjectName;
                                
                                    var deb=value.ProjectStartDate;
                                    
                                    var debutP=moment(deb).format("DD-MM-YYYY");

                                   
                                    

                                    var finP=moment(fin).format("DD-MM-YYYY");
                                    var ach=value.ProjectPercentCompleted;
                                    var cost=value.ProjectCost;
                                    var chefProj=value.ProjectOwnerName;
                                   var tr;
                                      tr = $("<tr>");
                                      tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                      tr.append("<td>"+ chefProj +"</td>");//0
                                      tr.append("<td>"+ debutP + "</td>"); //
                                      tr.append("<td>"+ finP + "</td>"); //4
                                      tr.append("<td>"+ ach +"</td>"); //5
                                      tr.append("<td>"+ cost +"</td>"); //5
                                                             
                                      $('#tableProjStatut tbody').append(tr);
                                }
                                  
                                

                                

                            });
                            
                        }
                    });
        }
        loadAnalyseStatut90Jrs();
}

            //****************************************************************************************************************************************************************//

             var responseDurationSG=responseDurationSG || [];
        var urlDurationSG= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectDuration,ProjectActualDuration&$filter=Sousprojet%20eq%27Non%27";
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
            //document.getElementById("coutPrevue2").innerHTML = consomationPrevue +"%";
            $(function () {
                var data = parseInt(consomationPrevue);
                
                
                //arroundMax(number);
                $('#containerAnalyse').highcharts({

                    chart: {
                        type: 'gauge'
                    },
                    title: {
                        text: 'Statut global (% jours consommés)',
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

                                format: '<span style="font-size: 20px;">' + conToMill(data) + '%</span><br/>',
                                borderWidth:0
                            },
                        }]

                });
            });

        }
        function jrsConsome(sumRealDuration,sumConsomeDuration){
            var jrsPrevue=parseFloat(sumRealDuration/8).toFixed(0);
            var jrsConsom=parseFloat(sumConsomeDuration/8).toFixed(0);
            //document.getElementById("coutPrevue3").innerHTML = conToMill(jrsConsom)+"/"+conToMill(jrsPrevue);
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
                                format: '<span style="font-size: 20px;">' + conToMill(data) + '</span><br/>',
                                borderWidth:0
                            },
                        }]

                });
            });

        }



        var urlDateGlissement = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectStartDate,ProjectFinishDate&$filter=Sousprojet%20eq%27Non%27%20and%20Etatdeprojet%20ne%27Planifié%27";
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
            

            // ////////////////console.log("idProjetG = "+ idProjetG.join());
            // ////////////////console.log("dateDebProjetG = "+ dateDebProjetG.join());
            ////////console.log("dateFinProjetG = "+ dateFinProjetG.join());
            // ////////////////console.log("dateFinRefG = "+ dateFinRefG.join());

            // ////////////////console.log("idProjetG length = "+ idProjetG.length);
            // ////////////////console.log("dateDebProjetG length = "+ dateDebProjetG.length);
            // ////////////////console.log("dateFinProjetG length = "+ dateFinProjetG.length);
            // ////////////////console.log("dateFinRefG length = "+ dateFinRefG.length);
            
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
                //////////////////console.log("gliss= "+gliss);
                glissArray.push(gliss);
              }
            }
            //////////////////console.log("glissArray= "+glissArray.join());
            for (var i = 0; i < glissArray.length; i++) {
                if (!isNaN(glissArray[i])){
                    sumGliss=parseFloat(glissArray[i])+parseFloat(sumGliss);
                }else{
                    noBaseline++;
                }
       
            }
            
            avgGliss=parseFloat(sumGliss/(glissArray.length-noBaseline)).toFixed(0);

            //////////////////console.log("avgGliss= "+avgGliss);
            document.getElementById("glissmentKPI").innerHTML=avgGliss+"%";
            document.getElementById("statutGlKPI").innerHTML = 
                            '<div class="rounded-lg p-2 shadow" style="padding: 0.75rem;  background-color: aliceblue; background-color: aliceblue;">' +
                            ' <h2 class="h6 font-weight-bold text-center mb-3">Glissement</h2>' +


                            '<div class="progress mx-auto" data-value="'+avgGliss+'">' +
                            ' <span class="progress-left">' +
                            '<span class="progress-bar border-info" id="leftDegGenGliss"></span>' +
                            '</span>' +
                            '<span class="progress-right">' +
                            '<span class="progress-bar border-info" id="rightDegGenGliss"></span>' +
                            '</span>' +
                            '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                            '<div class="h4 font-weight-bold">'+avgGliss+'<sup class="small">%</sup></div>' +
                            '</div>' +
                            '</div>' +
                            '<!-- END -->' +

                            '<!-- Demo info -->' +
                            '<div class="row text-center mt-4">' +
                            
                            '<!-- END -->' +
                            '</div>' ;

                            if (avgGliss <= 50) {
                                $("#rightDegGenGliss").css('transform', 'rotate(' + percentageToDegrees(avgGliss) + 'deg)')
                            } else {
                                $("#rightDegGenGliss").css('transform', 'rotate(180deg)')
                                $("#leftDegGenGliss").css('transform', 'rotate(' + percentageToDegrees(avgGliss - 50) + 'deg)')
                            }
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



        var responseCost=responseCost || [];
        var urlCost= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectActualCost,ProjectRemainingCost&$filter=Sousprojet%20eq%27Non%27";
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
                               //console.log("coutReel= "+coutReel);
                               var coutConsomme=value.ProjectActualCost;
                               var coutRestant=parseFloat(coutReel-coutConsomme);
                           
                               sumRealCost+=parseFloat(coutReel);
                               sumConsomCost+=parseFloat(coutConsomme);
                               sumCoutRestant+=parseFloat(coutRestant);
                            });
                            var depassementCout=0; 
                            var poorcentageConsommation=0;
                            if (sumConsomCost!=0) {
                                depassementCout=parseFloat((sumRealCost-sumConsomCost)/sumConsomCost);
                            poorcentageConsommation=parseFloat((sumCoutRestant/sumRealCost)*100).toFixed(0);
                            }                          
                            
                            //document.getElementById("depCostPoucent").innerHTML=poorcentageConsommation+"%";
                            //document.getElementById("depEnVal").innerHTML=conToMill(sumConsomCost)+"/"+conToMill(sumRealCost);
                            document.getElementById("budjetTotal").innerHTML=conToMill(sumRealCost);
                            //document.getElementById("budjetConsome").innerHTML=conToMill(sumConsomCost);
                            //containerBudgetConso

                           $(function () {
                var data = parseInt(poorcentageConsommation);
                //console.log("poorcentageConsommation= "+poorcentageConsommation);
               
                
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
                            name: 'Pourcentage de dépassement',
                            data: [data],
                            dataLabels: {
                                format: '<span style="font-size: 20px;">' + conToMill(poorcentageConsommation) + '%</span><br/>',
                                borderWidth:0
                            },
                        }]

                });
                var maxBudg=arroundMax(sumRealCost);
                //////console.log("sumRealCost= "+sumRealCost);
                //////console.log("maxBudg= "+maxBudg);
                $(function () {
                var data = parseInt(sumConsomCost);
                
                $('#containerBudgetConso').highcharts({

                    chart: {
                        type: 'gauge'
                    },
                    title: {
                        text: 'Budget consommé',
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
                        max: parseInt(maxBudg),
                        plotBands: [{
                            from: 0,
                            to: parseInt(sumConsomCost),
                            color: '#b8deff' // blue
                        },
                        {
                            from: parseInt(sumConsomCost),
                            to: parseInt(sumRealCost),
                            color: '#aadeaa' // blue
                        }]
                    }],

                    series: [
                        {
                            name: 'Budget consommé',
                            data: [data],
                            dataLabels: {
                                format: '<span style="font-size: 20px;">' + conToMill(data) + '</span><br/>',
                                borderWidth:0
                            },
                        }]

                });
            });
            });

                        }
                    });
        }
        loadCost();

        //********************************************************************************************************************************************************************/

        var responseRiskss=responseRiskss || [];
        var urlRiskss=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectId,ProjectName&$filter=Sousprojet%20eq%27Non%27";
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
                            var arrayDateCloture=[];
                            var arrayDelai=[];
                            $.each(responseRiskss, function (key, value) {
                               
                                      var nomP=value.ProjectName;
                                      var nomProjet1=nomP.replace(/\s/g, '%20')
                                      arrNoms.push(nomProjet1);
                                      //-----------
                                      arrNomP.push(nomP);
                                      arrayStat.push("");
                                      //arrayScore.push("");
                                      arrayProba.push("");
                                      arrayImpacts.push("");
                                      //arrayDateDec.push("Not a DATE");
                                      //arrayDateCloture.push("Not a DATE");
                                      arrayDelai.push(0);
                                      //---------
                                   
                                  
                            });
                            var arrayStatut=["Nouveau","En cours","Clôturé","Annulé"];
                            var arrayValStatut=[0,0,0,0];
                            var arrayPriorite=["Critique","Elevé","Moyen","Faible"];
                            var arrayValPriorite=[0,0,0,0];
                            var arrayPriorite2=[];
                            
                            for (var i = 0; i < arrNoms.length; i++) {
                              ////////////console.log("arrNoms[i]= "+arrNoms[i]);
                              analyseDesRisques(arrNoms[i],arrNomP[i],arrayStatut,arrayValStatut,arrayPriorite,arrayValPriorite,arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec,arrayDateCloture,arrayDelai,arrayPriorite2);
                            }


                          }
                        });
        }
        loadRiskss();
        function analyseDesRisques(nomProj,nomPJ,arrayStatut,arrayValStatut,arrayPriorite,arrayValPriorite,arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec,arrayDateCloture,arrayDelai,arrayPriorite2){
          
            
            //////////////////console.log("nomPJ= "+nomPJ);
            var responseRisk=responseRisk || [];
            var urlRisk= _spPageContextInfo.siteAbsoluteUrl + "/"+nomProj+"/_api/web/lists/getByTitle('Risks')/items";
            console.log("urlRisk= "+urlRisk);
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
                                   var dateDec="Not a DATE";
                                   
                                   var dateDeclanchement="";
                                   if (value.Date_x0020_de_x0020_d_x00e9_clen!=null) {
                                    dateDec=value.Date_x0020_de_x0020_d_x00e9_clen;
                                    dateDeclanchement=moment(dateDec);
                                   }else{
                                    dateDeclanchement=dateDec;
                                   }
                                   
                                   var dateClot="Not a DATE";
                                   
                                   var dateCloture="";
                                   if (value.Date_x0020_de_x0020_cl_x00f4_tur!=null) {
                                    dateClot=value.Date_x0020_de_x0020_cl_x00f4_tur
                                    dateCloture=moment(dateClot);
                                   }else{
                                    dateCloture=dateClot;
                                   }
                                   arrayDateDec.push(dateDeclanchement);
                                   arrayDateCloture.push(dateCloture);
                                   // ////console.log("_____________________________________________________________");
                                   
                                   
                                   // ////console.log("Title= "+value.Title);
                                   // ////console.log("arrayDateDec= "+arrayDateDec);
                                   // ////console.log("arrayDateCloture= "+arrayDateCloture);
                                   // ////console.log("_____________________________________________________________");

                                   arrayStat[arrNomP.indexOf(nomPJ)]=statutRisk;
                                   arrayScore.push(score);
                                   arrayProba[arrNomP.indexOf(nomPJ)]=probabilite;
                                   arrayImpacts[arrNomP.indexOf(nomPJ)]=impact;
                                   
                                   if (arrayStatut.indexOf(statutRisk)<0) {
                                    arrayStatut.push(statutRisk);
                                    arrayValStatut.push(1);
                                   }else{
                                    arrayValStatut[arrayStatut.indexOf(statutRisk)]+=1;
                                   }
                                   var prioriteRisk=value.Priorit_x00e9_;
                                   
                                   if (arrayPriorite.indexOf(prioriteRisk)<0) {
                                    arrayPriorite.push(prioriteRisk);
                                    arrayValPriorite.push(1);
                                   }else{
                                    arrayValPriorite[arrayPriorite.indexOf(prioriteRisk)]+=1;
                                   }
                                   arrayPriorite2.push(prioriteRisk);

                                });
                                // //////////////////console.log("arrayStat= "+arrayStat);
                                //////console.log("arrayScore= "+arrayScore);
                                //////console.log("length= "+arrayScore.length);
                                // //////////////////console.log("arrayProba= "+arrayProba);
                                // //////////////////console.log("arrayImpacts= "+arrayImpacts);
                                
                                  ////////////////////console.log.log("arrayPriorite= "+arrayPriorite);
                                  ////////////////////console.log.log("arrayValPriorite= "+arrayValPriorite);
            
                                  risqueParStatut(arrayStatut,arrayValStatut);
                                  //risqueParPriorite(arrayPriorite,arrayValPriorite);
                                  loadTabGravRisk(arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec);
                                  //loadDealaiTraitement(arrayPriorite2,arrayDateDec,arrayDateCloture,arrayDelai,arrNomP);
                                    


                               }
                                
                                
                            
                                
                            }
                        });

            }
            loadRisk();

            
        }

        function risqueParStatut(arrayStatut,arrayValStatut) {
            // Bar chart   
            document.getElementById("bar1").innerHTML='<div id="bar-chart" height="50vh"></div>';
            //var ctx0 = document.getElementById("bar-chart").getContext('2d');
     
              Highcharts.chart('bar-chart', {
                chart: {
                    type: 'column'
                },
                    title: {
                        text: 'Risques par statut',
                        style: {
                            color: '#2ea0e6',
                            fontWeight: 'bold'
                        }
                    },
                xAxis: {
                    categories: arrayStatut
                },
                yAxis: {
                    min: 0,
                    title: {
                    text: 'Nombre des risques'
                    }
                    },
                plotOptions: {

                    series: {

                        cursor: 'pointer',
                        
                        point: {

                            events: {
                                click: function () {
                                    //alert('Category: ' + this.category + ', value: ' + this.y);
                                    var att1=this.category;
                                    var att2=this.y;
                                    openModal(att1,att2);
                                }
                            }
                        }
                    }
                },
            colors: ["#d9534f", "#f0ad4e", "#337ab7", "#5cb85c"],

                series: [
                 {
            name: "Statut",
            colorByPoint: true,
            data: [
                {
                    name: arrayStatut[0],
                    y: arrayValStatut[0],
                 drilldown: arrayStatut[0]
                },
                {
                    name: arrayStatut[1],
                    y: arrayValStatut[1],
                    drilldown: arrayStatut[1]
                },
                {
                    name: arrayStatut[2],
                    y: arrayValStatut[2],
                    drilldown: arrayStatut[2]
                },
                {
                    name: arrayStatut[3],
                    y: arrayValStatut[3],
                    drilldown: arrayStatut[3]
                },
                
             
            ]
        }
                ]
            });
                   
        }
        
        
        function loadTabGravRisk(arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec){
           
           
           
           var labelGravite=["Elevé","Moyen","Faible"];
           var countGravite=[0,0,0];
          for (var i = 0; i < arrayScore.length; i++) {
            ////////console.log("arrayStat= "+arrayStat);
            
                if(arrayScore[i]<=5){
                    countGravite[2]=parseInt(countGravite[2]+1);
                }
                else if ((arrayScore[i]>5)&&(arrayScore[i]<=14)) {
                    countGravite[1]=parseInt(countGravite[1]+1);
                }
                else if (arrayScore[i]>14) {
                    countGravite[0]=parseInt(countGravite[0]+1);
                }
                       
          }
         document.getElementById("containergravite").innerHTML='<div id="barGravite" height="50vh"></div>';
Highcharts.chart('barGravite', {
                chart: {
                    type: 'column'
                },
                    title: {
                        text: 'Risques par gravité',
                        style: {
                            color: '#2ea0e6',
                            fontWeight: 'bold'
                        }
                    },
                xAxis: {
                    categories: labelGravite
                },
                yAxis: {
                    min: 0,
                    title: {
                    text: 'Nombre des risques'
                    }
                    },
                plotOptions: {

                    series: {

                        cursor: 'pointer',
                        
                        point: {

                            events: {
                                click: function () {
                                    //alert('Category: ' + this.category + ', value: ' + this.y);
                                    var att1=this.category;
                                    var att2=this.y;
                                    openModal2(att1,att2);
                                }
                            }
                        }
                    }
                },
            colors: ["#d9534f", "#f0ad4e", "#337ab7", "#5cb85c"],

                series: [
                 {
            name: "Gravité",
            colorByPoint: true,
            data: [
                {
                    name: labelGravite[0],
                    y: countGravite[0],
                 drilldown: labelGravite[0]
                },
                {
                    name: labelGravite[1],
                    y: countGravite[1],
                    drilldown: labelGravite[1]
                },
                {
                    name: labelGravite[2],
                    y: countGravite[2],
                    drilldown: labelGravite[2]
                }
                
             
            ]
        }
                ]
            });

          

      }
      

    var responseRiskss15=responseRiskss15 || [];
        var urlRiskss15=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectOwnerName,ProjectId,ProjectName&$filter=Sousprojet%20eq%27Non%27";
        function loadRiskss15(){
          $.ajax({
                        url: urlRiskss15,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRiskss15 = responseRiskss15.concat(data.d.results);
                            if (data.d.__next) {
                                urlRiskss15 = data.d.__next;
                                loadRiskss15();
                            }
                            var arrNoms=[];
                            var arrNomP=[];
                            var arrNomPrj=[];
                            var arrNomRisque=[];
                            var arrImpactRisque=[];
                            var ouvertureArr=[];
                            var clotureArr=[];
                            var graviteArr=[];
                            var statutArr=[];
                            var cpArr=[];
                            var chefDeProjetArr=[];
                            
                            $.each(responseRiskss15, function (key, value) {
                               
                                      var nomP=value.ProjectName;
                                      var chefProj=value.ProjectOwnerName;
                                      var nomProjet1=nomP.replace(/\s/g, '%20')
                                      arrNoms.push(nomProjet1);
                                      //-----------
                                      arrNomP.push(nomP);
                                      cpArr.push(chefProj);
                                      
                                     
                            });
                            
                            
                            for (var i = 0; i < arrNoms.length; i++) {
                              ////////////console.log("arrNoms[i]= "+arrNoms[i]);
                              console.log("cpArr[i]= "+cpArr[i]);
                              analyseDesRiskss15(arrNoms[i],arrNomP[i],arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,cpArr[i],chefDeProjetArr);
                            }


                          }
                        });
        }
        loadRiskss15();
        function analyseDesRiskss15(nomProj,nomP,arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,cp,chefDeProjetArr){
          
            
            //////////////////console.log("nomPJ= "+nomPJ);
            var responseDesRiskss15=responseDesRiskss15 || [];
            var urlDesRiskss15= _spPageContextInfo.siteAbsoluteUrl + "/"+nomProj+"/_api/web/lists/getByTitle('Risks')/items";
            //////console.log("urlDesRiskss15= "+urlDesRiskss15);
            function loadDesRiskss15(){

              $.ajax({
                            url: urlDesRiskss15,
                            method: "GET",
                            dataType: "json",
                            headers: { Accept: "application/json;odata=verbose" },
                            success: function (data) {
                                responseDesRiskss15 = responseDesRiskss15.concat(data.d.results);
                                if (data.d.__next) {
                                    urlDesRiskss15 = data.d.__next;
                                    loadDesRiskss15();
                                }
                                
                              
                               if (responseDesRiskss15.length>0) {
                                $.each(responseDesRiskss15, function (key, value) {
                                   
                                  moment.locale('fr');
                                   var nomRis=value.Title;
                                   var statutRisk=value.Statut;
                                   var score=value.Score;
                                   var probabilite=value.Probabilit_x00e9_;
                                   var impact="";
                                   if (value.Impacts!=null) {
                                    impact=value.Impacts;
                                   }
                                   var dateDec="";
                                   
                                   var dateDeclanchement="";
                                   if (value.Date_x0020_de_x0020_d_x00e9_clen!=null) {
                                    dateDec=value.Date_x0020_de_x0020_d_x00e9_clen;
                                    dateDeclanchement=moment(dateDec).format("DD-MM-YYYY");
                                   }else{
                                    dateDeclanchement=dateDec;
                                   }
                                   
                                   var dateClot="";
                                   
                                   var dateCloture="";
                                   if (value.Date_x0020_de_x0020_cl_x00f4_tur!=null) {
                                    dateClot=value.Date_x0020_de_x0020_cl_x00f4_tur
                                    dateCloture=moment(dateClot).format("DD-MM-YYYY");
                                   }else{
                                    dateCloture=dateClot;
                                   }
                                   arrNomPrj.push(nomP);
                                   //console.log("cp= "+cp);
                                   chefDeProjetArr.push(cp);
                                   arrNomRisque.push(nomRis);
                                   arrImpactRisque.push(impact);
                                   ouvertureArr.push(dateDeclanchement);
                                   clotureArr.push(dateCloture);
                                   if (score<=5) {
                                    graviteArr.push("Faible");
                                   }else if ((score>5) && (score<=14)) {
                                    graviteArr.push("Moyen");
                                   }else if (score>14) {
                                    graviteArr.push("Elevé");
                                   }
                                   statutArr.push(statutRisk);
                                });
                                remplirRiskStat15(arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,chefDeProjetArr);
                               
                               }                                
                            }
                        });

            }
            loadDesRiskss15();
       
/**************************************************************************************************************************************************************************************************/

       function remplirRiskStat15(arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,chefDeProjetArr){
          tableauxRS = document.getElementById("tableProjet");
           tr1Rs = tableauxRS.getElementsByTagName("tr");
           if(tr1Rs.length>0){        
                $('#risksJplus15 tbody').empty();
           }
          for (var i = 0; i < arrNomPrj.length; i++) {
                var ouvertureFormatMoment=moment(ouvertureArr[i]).format('YYYY-MM-DD');
                var dateJour=moment().format('YYYY-MM-DD');
                var plus15=moment().add('days',15).format('YYYY-MM-DD');
                if (moment(ouvertureFormatMoment).isBetween(dateJour, plus15)) {
                      var tr;
                      tr = $("<tr>");
                      tr.append("<td style='text-align:left'>" + arrNomPrj[i] + "</td>");//0
                      tr.append("<td>"+ chefDeProjetArr[i]+ "</td>"); //
                      tr.append("<td>"+ arrNomRisque[i] + "</td>"); //4
                      tr.append("<td>"+ ouvertureArr[i] +"</td>"); //5
                      tr.append("<td>"+ clotureArr[i] +"</td>"); //5
                      tr.append("<td>"+ graviteArr[i] +"</td>"); //5                          
                      $('#risksJplus15 tbody').append(tr);
                }
              
                        
          }
        }        
} 
       
       
        



function openModal(att1,att2){
    
 
    document.getElementById("modalTitle").innerHTML="Détails des risques";
    document.getElementById("modalTitle1").innerHTML=" Statut : "+ att1;
    document.getElementById("modalBody").innerHTML=
    // When the user clicks the button, open the modal.
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableRisqueStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                         '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Nom risque</th>'+
                                                        '<th style="text-align:center;">Date déclenchement</th>'+
                                                        '<th style="text-align:center;">Date Clôture</th>'+
                                                        '<th style="text-align:center;">Gravité</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };
    var responsePopupRiskssSatus=responsePopupRiskssSatus || [];
        var urlPopupRiskssSatus=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectOwnerName,ProjectId,ProjectName&$filter=Sousprojet%20eq%27Non%27";
        function loadPopupRiskssSatus(){
          $.ajax({
                        url: urlPopupRiskssSatus,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responsePopupRiskssSatus = responsePopupRiskssSatus.concat(data.d.results);
                            if (data.d.__next) {
                                urlPopupRiskssSatus = data.d.__next;
                                loadPopupRiskssSatus();
                            }
                            var arrNoms=[];
                            var arrNomP=[];
                            var arrNomPrj=[];
                            var arrNomRisque=[];
                            var arrImpactRisque=[];
                            var ouvertureArr=[];
                            var clotureArr=[];
                            var graviteArr=[];
                            var statutArr=[];
                            var cpArr=[];
                            var chefDeProjetArr=[];
                            
                            $.each(responsePopupRiskssSatus, function (key, value) {
                               
                                      var nomP=value.ProjectName;
                                      var nomProjet1=nomP.replace(/\s/g, '%20')
                                      arrNoms.push(nomProjet1);
                                      var chefProj=value.ProjectOwnerName;
                                      //-----------
                                      arrNomP.push(nomP);
                                      cpArr.push(chefProj);
                                      
                                     
                            });
                            
                            
                            for (var i = 0; i < arrNoms.length; i++) {
                              ////////////console.log("arrNoms[i]= "+arrNoms[i]);
                              analyseDesStatutsRisques(arrNoms[i],arrNomP[i],arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,cpArr[i],chefDeProjetArr);
                            }


                          }
                        });
        }
        loadPopupRiskssSatus();
        function analyseDesStatutsRisques(nomProj,nomP,arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,cp,chefDeProjetArr){
          
            
            //////////////////console.log("nomPJ= "+nomPJ);
            var responseRisk=responseRisk || [];
            var urlRisk= _spPageContextInfo.siteAbsoluteUrl + "/"+nomProj+"/_api/web/lists/getByTitle('Risks')/items";
            //////console.log("urlRisk= "+urlRisk);
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
                                   var nomRis=value.Title;
                                   var statutRisk=value.Statut;
                                   var score=value.Score;
                                   var probabilite=value.Probabilit_x00e9_;
                                   var impact="";
                                   if (value.Impacts!=null) {
                                    impact=value.Impacts;
                                   }
                                   var dateDec="";
                                   
                                   var dateDeclanchement="";
                                   if (value.Date_x0020_de_x0020_d_x00e9_clen!=null) {
                                    dateDec=value.Date_x0020_de_x0020_d_x00e9_clen;
                                    dateDeclanchement=moment(dateDec).format("DD-MM-YYYY");
                                   }else{
                                    dateDeclanchement=dateDec;
                                   }
                                   
                                   var dateClot="";
                                   
                                   var dateCloture="";
                                   if (value.Date_x0020_de_x0020_cl_x00f4_tur!=null) {
                                    dateClot=value.Date_x0020_de_x0020_cl_x00f4_tur
                                    dateCloture=moment(dateClot).format("DD-MM-YYYY");
                                   }else{
                                    dateCloture=dateClot;
                                   }
                                   arrNomPrj.push(nomP);
                                   chefDeProjetArr.push(cp);
                                   arrNomRisque.push(nomRis);
                                   arrImpactRisque.push(impact);
                                   ouvertureArr.push(dateDeclanchement);
                                   clotureArr.push(dateCloture);
                                   if (score<=5) {
                                    graviteArr.push("Faible");
                                   }else if ((score>5) && (score<=14)) {
                                    graviteArr.push("Moyen");
                                   }else if (score>14) {
                                    graviteArr.push("Elevé");
                                   }
                                   statutArr.push(statutRisk);
                                });
                                remplirRiskStat(arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,chefDeProjetArr);
                               
                               }                                
                            }
                        });

            }
            loadRisk();
        }  
        function remplirRiskStat(arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,chefDeProjetArr){
          tableauxRS = document.getElementById("tableRisqueStatut");
           tr1Rs = tableauxRS.getElementsByTagName("tr");
           if(tr1Rs.length>0){        
                $('#tableRisqueStatut tbody').empty();
           }
          for (var i = 0; i < arrNomPrj.length; i++) {
            if (att1==statutArr[i]) {
              var tr;
              tr = $("<tr>");
              tr.append("<td style='text-align:left'>" + arrNomPrj[i] + "</td>");//0
              tr.append("<td>"+ chefDeProjetArr[i] + "</td>"); //4
              tr.append("<td>"+ arrNomRisque[i]+ "</td>"); //
              tr.append("<td>"+ ouvertureArr[i] +"</td>"); //5
              tr.append("<td>"+ clotureArr[i] +"</td>"); //5
              tr.append("<td>"+ graviteArr[i] +"</td>"); //5                          
              $('#tableRisqueStatut tbody').append(tr);
            }            
          }
          LoadRowsRiskStat();
        }  
        function LoadRowsRiskStat(){
          var indexOfColumnToRowSpan = 0;
          var $table = $('#tableRisqueStatut tbody');
          var rowSpanMap = {};
          $table.find('tr').each(function(){
            var valueOfTheSpannableCell = $($(this).children('td')[indexOfColumnToRowSpan]).text();
            $($(this).children('td')[indexOfColumnToRowSpan]).attr('data-original-value', valueOfTheSpannableCell);
            rowSpanMap[valueOfTheSpannableCell] = true;
          }); 
          for(var rowGroup in rowSpanMap){
            var $cellsToSpan = $('td[data-original-value="'+rowGroup+'"]');
            var numberOfRowsToSpan = $cellsToSpan.length;
            $cellsToSpan.each(function(index){
              if(index==0){
                $(this).attr('rowspan', numberOfRowsToSpan);
              }else{
                $(this).hide();
              }
            });
          }
        }

}

function openModal2(att1,att2){
    document.getElementById("modalTitle").innerHTML="Détails des risques";
    document.getElementById("modalTitle1").innerHTML=" Gravité : "+ att1;
    document.getElementById("modalBody").innerHTML=
    // When the user clicks the button, open the modal.
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableRisqueStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Nom risque</th>'+
                                                        '<th style="text-align:center;">Date déclenchement</th>'+
                                                        '<th style="text-align:center;">Date Clôture</th>'+
                                                        '<th style="text-align:center;">Statut</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };
    var responsePopupRiskssGravite=responsePopupRiskssGravite || [];
        var urlPopupRiskssGravite=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectOwnerName,ProjectId,ProjectName&$filter=Sousprojet%20eq%27Non%27";
        function loadPopupRiskssGravite(){
          $.ajax({
                        url: urlPopupRiskssGravite,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responsePopupRiskssGravite = responsePopupRiskssGravite.concat(data.d.results);
                            if (data.d.__next) {
                                urlPopupRiskssGravite = data.d.__next;
                                loadPopupRiskssGravite();
                            }
                            var arrNoms=[];
                            var arrNomP=[];
                            var arrNomPrj=[];
                            var arrNomRisque=[];
                            var arrImpactRisque=[];
                            var ouvertureArr=[];
                            var clotureArr=[];
                            var graviteArr=[];
                            var statutArr=[];
                            var cpArr=[];
                            var chefDeProjetArr=[];
                            
                            $.each(responsePopupRiskssGravite, function (key, value) {
                               
                                      var nomP=value.ProjectName;
                                      var nomProjet1=nomP.replace(/\s/g, '%20')
                                      arrNoms.push(nomProjet1);
                                      var chefProj=value.ProjectOwnerName;
                                      //-----------
                                      arrNomP.push(nomP);
                                      cpArr.push(chefProj);
                                      
                                     
                            });
                            
                            
                            for (var i = 0; i < arrNoms.length; i++) {
                              ////////////console.log("arrNoms[i]= "+arrNoms[i]);
                              analyseDesStatutsRisques(arrNoms[i],arrNomP[i],arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,cpArr[i],chefDeProjetArr);
                            }


                          }
                        });
        }
        loadPopupRiskssGravite();
        function analyseDesStatutsRisques(nomProj,nomP,arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,cp,chefDeProjetArr){
          
            
            //////////////////console.log("nomPJ= "+nomPJ);
            var responseRisk=responseRisk || [];
            var urlRisk= _spPageContextInfo.siteAbsoluteUrl + "/"+nomProj+"/_api/web/lists/getByTitle('Risks')/items";
            //////console.log("urlRisk= "+urlRisk);
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
                                   var nomRis=value.Title;
                                   var statutRisk=value.Statut;
                                   var score=value.Score;
                                   var probabilite=value.Probabilit_x00e9_;
                                   var impact="";
                                   if (value.Impacts!=null) {
                                    impact=value.Impacts;
                                   }
                                   var dateDec="";
                                   
                                   var dateDeclanchement="";
                                   if (value.Date_x0020_de_x0020_d_x00e9_clen!=null) {
                                    dateDec=value.Date_x0020_de_x0020_d_x00e9_clen;
                                    dateDeclanchement=moment(dateDec).format("DD-MM-YYYY");
                                   }else{
                                    dateDeclanchement=dateDec;
                                   }
                                   
                                   var dateClot="";
                                   
                                   var dateCloture="";
                                   if (value.Date_x0020_de_x0020_cl_x00f4_tur!=null) {
                                    dateClot=value.Date_x0020_de_x0020_cl_x00f4_tur
                                    dateCloture=moment(dateClot).format("DD-MM-YYYY");
                                   }else{
                                    dateCloture=dateClot;
                                   }
                                   arrNomPrj.push(nomP);
                                   chefDeProjetArr.push(cp);
                                   arrNomRisque.push(nomRis);
                                   arrImpactRisque.push(impact);
                                   ouvertureArr.push(dateDeclanchement);
                                   clotureArr.push(dateCloture);
                                   if (score<=5) {
                                    graviteArr.push("Faible");
                                   }else if ((score>5) && (score<=14)) {
                                    graviteArr.push("Moyen");
                                   }else if (score>14) {
                                    graviteArr.push("Elevé");
                                   }
                                   statutArr.push(statutRisk);
                                });
                                remplirRiskGrav(arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,chefDeProjetArr);
                               
                               }                                
                            }
                        });

            }
            loadRisk();
        }  
        function remplirRiskGrav(arrNomPrj,arrNomRisque,arrImpactRisque,ouvertureArr,clotureArr,graviteArr,statutArr,chefDeProjetArr){
          tableauxRS = document.getElementById("tableRisqueStatut");
           tr1Rs = tableauxRS.getElementsByTagName("tr");
           if(tr1Rs.length>0){        
                $('#tableRisqueStatut tbody').empty();
           }
          for (var i = 0; i < arrNomPrj.length; i++) {
            if (att1==graviteArr[i]) {
              var tr;
              tr = $("<tr>");
              tr.append("<td style='text-align:left'>" + arrNomPrj[i] + "</td>");//0
              tr.append("<td>"+ chefDeProjetArr[i] + "</td>"); //4
              tr.append("<td>"+ arrNomRisque[i]+ "</td>"); //
              tr.append("<td>"+ ouvertureArr[i] +"</td>"); //5
              tr.append("<td>"+ clotureArr[i] +"</td>"); //5
              tr.append("<td>"+ statutArr[i] +"</td>"); //5                          
              $('#tableRisqueStatut tbody').append(tr);
            }            
          }
          LoadRowsRiskGrav();
        }
         function LoadRowsRiskGrav(){
          var indexOfColumnToRowSpan = 0;
          var $table = $('#tableRisqueStatut tbody');
          var rowSpanMap = {};
          $table.find('tr').each(function(){
            var valueOfTheSpannableCell = $($(this).children('td')[indexOfColumnToRowSpan]).text();
            $($(this).children('td')[indexOfColumnToRowSpan]).attr('data-original-value', valueOfTheSpannableCell);
            rowSpanMap[valueOfTheSpannableCell] = true;
          }); 
          for(var rowGroup in rowSpanMap){
            var $cellsToSpan = $('td[data-original-value="'+rowGroup+'"]');
            var numberOfRowsToSpan = $cellsToSpan.length;
            $cellsToSpan.each(function(index){
              if(index==0){
                $(this).attr('rowspan', numberOfRowsToSpan);
              }else{
                $(this).hide();
              }
            });
          }
        }       
}
    </script>
</body>

</html>