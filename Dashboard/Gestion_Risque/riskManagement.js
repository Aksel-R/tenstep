<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Demo Risks Issues</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/css/bootstrap.css">
    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/css/w3.css">
    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/css/bootstrap.min.css" >
    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/css/style.css" >


    <style>
        #headercolor {
            background: rgba(0, 138, 255, 0.84);
            padding: 10px;
            margin: 0 0 10px 0;
            text-align: right;
            border-radius: 10px;
        }
        
        #headercolor span {
            float: left;
            padding-top: 10px;
        }
        
        .smallRisks {
            font-size: 200%;
            float: left;
            font-weight: bold;
            color: white;
        }
        
        #datatable th {
            background-color: rgba(0, 138, 255, 0.84);
            color: white;
            font-size: 15px;
        }
        
        #datatable tr>*:nth-child(8) {
            display: none;
        }
        
        #datatable tr>*:nth-child(9) {
            display: none;
        }
        
        #datatable tr>*:nth-child(10) {
            display: none;
        }
        
        #datatable tr>*:nth-child(11) {
            display: none;
        }
        
        #depart {
            background-position: 10px 10px;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 13px;
            padding: 12px 20px 12px 15px;
            border: 1px solid #ddd;
            margin-left: 50px;
            border-radius: 5px;
        }
        
        #projtype {
            background-position: 10px 10px;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 13px;
            padding: 12px 20px 12px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        #projowner {
            background-position: 10px 10px;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 13px;
            padding: 12px 20px 12px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        #gouver {
            background-position: 10px 10px;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 13px;
            padding: 12px 20px 12px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        #exampleFormControlTextarea4 {
            background-position: 10px 10px;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 16px;
            padding: 12px 20px 12px 15px;
            border: 1px solid #ddd;
            margin-left: 50px;
        }
        
        .ms-rtestate-field h1,
        h1.ms-rteElement-H1,
        .ms-rtestate-field h2,
        h2.ms-rteElement-H2 {
            line-height: 1.4;
            color: #000;
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
            color: green;
        }
        
        option:empty {
            display: none;
        }
        /*span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}

.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
    display: none;
}

span.ms-cui-tt-span {
    display: none;
}


a#ctl00_PageStateActionButton {
    display: none;
}*/
        
        .ms-core-pageTitle,
        .ms-core-pageTitle a {
            display: none;
        }

        .card-header {
    background-color: #f4f4f4;
}
.table td{
  color: black;
}
tfoot {
    font-size: 15px;
}
    </style>

</head>



<div id="headercolor">
    <div>
        <small class="smallRisks" style="padding-top: 6px;">
              Risk Management
            </small>
    </div>

    <div>


        <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="depart" onchange="MainFunction()">
               <option selected="" value="">All departments</option>
            </select>


        <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="projtype" onchange="MainFunction()">
               <option selected="" value="">All types of projects</option>
            </select>

        <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="projowner" onchange="MainFunction()">
               <option selected="" value="">All project owners</option>
            </select>

        <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="gouver" onchange="MainFunction()">
               <option selected="" value="">All phases of governance</option>
            </select>

    </div>
</div>

<div class="right_col" role="main">
    <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-12" >
            <div class="card text-center">
                <div class="card-header">
                    <h3 id="txtcat">Risks by category</h3>
                </div>
                <div class="card-body" id="txtcatbody" >

                    <div class="card-text" ><canvas id="donutChart" width="500" height="450" style="display: block; width: 620px; height: 261px;"></canvas></div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12" >
            <div class="card text-center">
                <div class="card-header">
                    <h3 id="costEx">Cost of risk VS Cost exposure</h3>
                </div>
                <div class="card-body" id="costExbody" >

                    <div class="card-text" ><canvas id="myChart" width="500" height="450" style="display: block; width: 620px; height: 261px;"></canvas></div>
                </div>
            </div>
        </div>

        <div class="col-md-4 col-sm-4 col-xs-12" >
            <div class="card text-center">
                <div class="card-header">
                    <h3 id="txtowner">Risks by project owner</h3>
                </div>
                <div class="card-body" id="txtownerbody">

                    <div class="card-text" > <canvas id="pieChart" width="500" height="450" style="display: block;"></canvas></div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <table id="datatable" class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th >Risks</th>
                            <th style="text-align: center;">Projects</th>
                            <th style="text-align: center;">Category</th>
                            <th style="text-align: center;">Due date</th>
                            <th style="text-align: center;">Cost</th>
                            <th style="text-align: center;">Cost exposure</th>
                            <th style="text-align: center;">Probability</th>
                            <th style="text-align: center;">Propriétaire du projet</th>
                            <th style="text-align: center;">Direction</th>
                            <th style="text-align: center;">Type de projet</th>
                            <th style="text-align: center;">Phase de gouvernance</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/bootstrap.min.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/chart.js@2.8.0.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/chartjs-plugin-datalabels@0.5.0.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/chartjs-plugin-labels.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/jquery.min.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/bootstrap.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/fastclick.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/nprogress.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/icheck.min.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/echarts.min.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/fillinselect.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/fillintable.js"></script>
<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/MainFunction.js"></script>

<script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>
<script type="text/javascript">
    //document.oncontextmenu = new Function("return false");
</script>