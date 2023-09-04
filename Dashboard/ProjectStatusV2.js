<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title></title>

    <!-- Bootstrap -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css" rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- NProgress 

    <link href="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/css/custom1.min.css" rel="stylesheet">-->




    <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,400,500,600" rel="stylesheet" type="text/css">




    <!-- Compiled and minified CSS -->


    <style>
        .progress-bar {
            display: block;
            margin: 0 auto;
            text-align: center;
            height: 0px;
            width: 200px;
            font-size: 12px;
            font-family: sans-serif;
            line-height: 20px;
            color: #fff;
            margin-top: 55px;
            background-color: white;
        }
        
        .progress-bar div {
            position: absolute;
            height: 200px;
            width: 200px;
            border-radius: 50%;
            text-align: center;
            margin-top: -52px;
            margin-left: -27px;
        }
        
        .progress-bar data-percen {
            font-size: 8px;
        }
        
        .progress-bar div span {
            position: absolute;
            font-family: sans-serif;
            /*font-size: 60px;*/
            line-height: 175px;
            -moz-border-radius: 50px;
            -webkit-border-radius: 50px;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            height: 183px;
            width: 185px;
            left: 8.5px;
            top: 8.5px;
            text-align: center;
            border-radius: 50%;
            /*background-color: #f9f7f7;*/
            color: black;
        }
        
        .progress-bar div span:nth-of-type(1) {
            font-size: 60px;
            background-color: #f9f7f7;
        }
        
        .progress-bar div span:nth-of-type(2) {
            font-size: 12px;
            text-align: right;
            padding-right: 4em;
        }
        
        .progress-bar .background {
            background-color: #b3cef6;
        }
        
        .progress-bar .rotate {
            clip: rect(0 100px 200px 0);
            background-color: #4b86db;
        }
        
        .progress-bar .left {
            clip: rect(0 100px 200px 0);
            opacity: 1;
            background-color: #b3cef6;
        }
        
        .progress-bar .right {
            clip: rect(0 100px 200px 0);
            transform: rotate(180deg);
            opacity: 0;
            background-color: #4b86db;
        }
        
        @keyframes toggle {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        
        .card-title {
            ​​​​​​​ text-align: center;
            font-size: initial;
        }
        
        ​​​​​​​ .card-text {
            ​​​​​​​ color: #424242;
            text-align: center;
            font-size: initial;
        }
        
        ​​​​​​​ .card-header {
            ​​​​​​​ padding: 0.5rem;
            background-color: white;
        }
        
        ​​​​​​​ .card .card-body {
            ​​​​​​​ padding: 0rem 0rem 0.7rem 0rem;
            text-align: center;
        }
        
        ​​​​​​​ .card {
            ​​​​​​​ box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);
            min-height: 100px;
            background-color: #fafffa;
        }
        
        ​​​​​​​ div#suiteBarButtons {
            display: none;
        }
        
        progress::-webkit-progress-value {
            background-color: green !important;
        }
        
        #headercolor {
            background: #31752f;
            padding: 3px;
            margin: 0 0 10px 0;
            text-align: right;
            border-radius: 10px;
        }
        
        #headercolor span {
            float: left;
            padding-top: 10px;
        }
        
        .smallRisks {
            margin-left: 10px;
            font-size: 210%;
            float: left;
            font-weight: bold;
            color: white;
            padding-top: 0px;
        }
        
        #tableaux {
            border-radius: 1em;
            overflow: hidden;
            width: 100%;
            margin-left: 0px;
        }
        
        #tableaux th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #31752f;
            color: white;
        }

          #tableauxObjectif {
            border-radius: 1em;
            overflow: hidden;
            width: 100%;
            margin-left: 0px;
        }
        
        #tableauxObjectif th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #31752f;
            color: white;
        }
        
        #tableauxTechnologie th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #31752f;
            color: white;
            /*font-size: 10px;*/
        }
        
        #TableauEntete th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #31752f;
            color: white;
            /*font-size: 10px;*/
        }
        
        #TableauEntete {
            border-radius: 1em;
            overflow: hidden;
        }
        
        #TableauEntete td {
            text-align: left;
        }
        
        #tableauxTechnologie1 th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #31752f;
            color: white;
            /*font-size: 10px;*/
        }
        
        #tableauxTechnologieFirst th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #31752f;
            color: white;
            /*font-size: 10px;*/
        }
        
        #tableauxTechnologieModernisation th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #31752f;
            color: white;
            /*font-size: 10px;*/
        }
        
        #tableauxTechnologie5G th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #31752f;
            color: white;
        }
        
        #tableauxTechnologie5G td {
            text-align: center;
        }
        
        #tableauxTechnologieModernisation {
            border-radius: 1em;
            overflow: hidden;
        }
        
        #tableauxTechnologieModernisation tr>*:nth-child(1) {
            background-color: #31752f;
            color: white;
            font-weight: bold;
            text-align: left;
        }
        
        #tableauxTechnologieModernisation tr>*:nth-child(2) {
            background-color: #31752f;
            color: white;
            text-align: left;
        }
        
        #tableauxTechnologie {
            border-radius: 1em;
            overflow: hidden;
        }
        
        #tableauxTechnologie1 {
            border-radius: 1em;
            overflow: hidden;
        }
        
        #tableauxTechnologieFirst {
            border-radius: 1em;
            overflow: hidden;
        }
        
        #tableauxTechnologie5G {
            border-radius: 1em;
            overflow: hidden;
        }
        
        #tableauxTechnologie tr>*:nth-child(1) {
            background-color: #31752f;
            color: white;
            font-weight: bold;
            text-align: left;
        }
        
        #tableauxTechnologie1 tr>*:nth-child(1) {
            background-color: #31752f;
            color: white;
            font-weight: bold;
            text-align: left;
        }
        
        #tableauxTechnologieFirst tr>*:nth-child(1) {
            background-color: #31752f;
            color: white;
            font-weight: bold;
            text-align: left;
        }
        
        #tableauxTechnologieFirst tr>*:nth-child(2) {
            background-color: #31752f;
            color: white;
            text-align: left;
        }
        
        #tableaux1 th {
            padding-top: 12px;
            padding-bottom: 12px;
            background-color: #31752f;
            color: white;
            text-align: center;
        }
        
        #Scooptab th {
            padding-top: 12px;
            padding-bottom: 12px;
            background-color: #31752f;
            color: white;
            text-align: center;
            /*font-size: 9px;*/
        }
        
        #Scooptab {
            border-radius: 1em;
            overflow: hidden;
        }
        
        #tableaux1 tr>*:nth-child(1) {
            background-color: #31752f;
            color: white;
            /*width: 200px;*/
            text-align: left;
            font-weight: bold;
        }
        
        #tableaux1 td {
            text-align: center;
        }
        
        #tableaux1 {
            border-radius: 1em;
            overflow: hidden;
        }
        
        #Scooptab tr>*:nth-child(1) {
            background-color: #31752f;
            color: white;
            width: 100px;
            text-align: left;
            font-weight: bold;
        }
        
        #Scooptab tr>*:nth-child(2) {
            background-color: #31752f;
            color: white;
            width: 100px;
            text-align: left;
        }
        
        #Scooptab td {
            text-align: center;
        }
        
        #tableaux td {
            text-align: center;
            background-color: #dadada;
            color: black;
        }
         #tableauxObjectif td {
            text-align: center;
            background-color: #dadada;
            color: black;
        }
        
        #tableaux2 th {
            padding-top: 12px;
            padding-bottom: 12px;
            background-color: #31752f;
            color: white;
            text-align: center;
            /*font-size: 9px;*/
        }
        
        #tableaux2 {
            border-radius: 1em;
            overflow: hidden;
        }
        
        #tableaux2 tr>*:nth-child(1) {
            background-color: #31752f;
            color: white;
            width: 100px;
            text-align: left;
            font-weight: bold;
        }
        
        #tableaux2 tbody tr>*:nth-child(2) {
            background-color: #31752f;
            color: white;
            width: 100px;
            text-align: left;
        }
        
        #tableaux2 td {
            text-align: center;
        }
        /*//////////////////////////////////*/
        
        #tableaux3 th {
            padding-top: 12px;
            padding-bottom: 12px;
            background-color: #31752f;
            color: white;
            text-align: center;
            /*font-size: 9px;*/
        }
        
        #tableaux3 {
            border-radius: 1em;
            overflow: hidden;
        }
        
        #tableaux3 tr>*:nth-child(1) {
            background-color: #31752f;
            color: white;
            width: 100px;
            text-align: left;
            font-weight: bold;
        }
        
        #tableaux3 td {
            text-align: center;
        }
        
        #tableaux3 tbody tr>*:nth-child(2) {
            background-color: #31752f;
            color: white;
            width: 100px;
            text-align: left;
        }
        /*Tableaux4*/
        
        #tableaux4 th {
            padding-top: 12px;
            padding-bottom: 12px;
            background-color: #31752f;
            color: white;
            text-align: center;
            /*font-size: 9px;*/
        }
        
        #tableaux4 {
            border-radius: 1em;
            overflow: hidden;
        }
        
        #tableaux4 tbody tr>*:nth-child(1) {
            background-color: #31752f;
            color: white;
            width: 100px;
            text-align: left;
            font-weight: bold;
        }
        
        #tableaux4 td {
            text-align: center;
        }
        
        #tableaux4 tbody tr>*:nth-child(2) {
            background-color: #31752f;
            color: white;
            width: 100px;
            text-align: left;
        }
        /*Tableaux5*/
        
        #tableaux5 th {
            padding-top: 12px;
            padding-bottom: 12px;
            background-color: #31752f;
            color: white;
            text-align: center;
            /*font-size: 9px;*/
        }
        
        #tableaux5 {
            border-radius: 1em;
            overflow: hidden;
        }
        
        #tableaux5 tr>*:nth-child(1) {
            background-color: #31752f;
            color: white;
            width: 100px;
            text-align: left;
            font-weight: bold;
        }
        
        #tableaux5 tbody tr>*:nth-child(2) {
            background-color: #31752f;
            color: white;
            width: 100px;
            text-align: left;
        }
        
        #tableaux5 td {
            text-align: center;
        }
        
        #mylist4 {
            background-position: 10px 10px;
            background-repeat: no-repeat;
            width: 13%;
            font-size: 16px;
            padding: 7px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        #exampleFormControlTextarea4 {
            background-position: 10px 10px;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 16px;
            padding: 12px 20px 12px 40px;
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
        
        option:empty {
            display: none;
        }
        
        .ms-core-pageTitle {
            font-size: 2.77em;
            white-space: nowrap;
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
        }
        
        #tableaux2 tr>*:nth-child(1) {
            background-color: #31752f;
            color: white;
            font-weight: bold;
        }
        
        #tableaux3 tr>*:nth-child(1) {
            background-color: #31752f;
            color: white;
            font-family: cursive;
        }
        
        #tableaux3S tr>*:nth-child(1) {
            background-color: #31752f;
            color: white;
        }
        
        #tableauxTechnologie5G tr>*:nth-child(1) {
            background-color: #31752f;
            color: white;
            font-family: cursive;
        }
        
        #tableaux3S th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #31752f;
            color: white;
        }
        
        .spinner-border {
            text-align: center;
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
        
        button {
            margin: 40px;
            padding: 5px 20px;
            cursor: pointer;
        }
        
        .spinner {
            margin: 0 auto;
            height: 64px;
            width: 64px;
            animation: rotate 0.8s infinite linear;
            border: 5px solid #31752f;
            border-right-color: transparent;
            border-radius: 50%;
        }
        
        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        
        .main-section {
            width: 100%;
            float: right;
            text-align: center;
        }
        
        .dashbord {
            width: 19%;
            display: inline-block;
            background-color: #34495E;
            color: #fff;
            margin-top: 25px;
            border-radius: 5px;
        }
        
        .icon-section i {
            font-size: 23px;
            padding: 7px;
            border: 1px solid #fff;
            border-radius: 50%;
            margin-top: -15px;
            margin-bottom: 0px;
            background-color: #34495E;
        }
        
        .icon-section p {
            margin: 0px;
            font-size: 20px;
            padding-bottom: 0px;
        }
        
        .detail-section {
            background-color: #2F4254;
            padding: 5px 0px;
        }
        
        .dashbord .detail-section:hover {
            background-color: #5a5a5a;
            cursor: pointer;
        }
        
        .detail-section a {
            color: #fff;
            text-decoration: none;
        }
        
        .dashbord-green .icon-section,
        .dashbord-green .icon-section i {
            background-color: #16A085;
            border-radius: 5px;
        }
        
        .dashbord-green .detail-section {
            background-color: #149077;
        }
        
        .dashbord-orange .icon-section,
        .dashbord-orange .icon-section i {
            background-color: #F39C12;
            border-radius: 5px;
        }
        
        .dashbord-orange .detail-section {
            background-color: #DA8C10;
        }
        
        .dashbord-blue .icon-section,
        .dashbord-blue .icon-section i {
            background-color: #2980B9;
            border-radius: 5px;
        }
        
        .dashbord-blue .detail-section {
            background-color: #2573A6;
        }
        
        .dashbord-red .icon-section,
        .dashbord-red .icon-section i {
            background-color: #E74C3C;
            border-radius: 5px;
        }
        
        .dashbord-red .detail-section {
            background-color: #CF4436;
        }
        
        .dashbord-skyblue .icon-section,
        .dashbord-skyblue .icon-section i {
            background-color: #8E44AD;
            border-radius: 5px;
        }
        
        .dashbord-skyblue .detail-section {
            background-color: #803D9B;
        }
        
        #msTableav {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            border-radius: 1em;
            width: 100%;
        }
        
        #msTableav td,
        #msTableav th {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
            font-size: small;
        }
        
        #msTableav tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        
        #msTableav tr:hover {
            background-color: #ddd;
        }
        
        #msTableav th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: center;
            background-color: #2b9843;
            color: white;
            font-size: small;
        }
        
        #msTableer {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            border-radius: 1em;
            width: 100%;
        }
        
        #msTableer td,
        #msTableer th {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
            font-size: small;
        }
        
        #msTableer tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        
        #msTableer tr:hover {
            background-color: #ddd;
        }
        
        #msTableer th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: center;
            background-color: #2b9843;
            color: white;
            font-size: small;
        }
        
        #msTable {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
            border-radius: 1em;
            font-size: small;
        }
        
        #msTable td,
        #msTable th {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
            font-size: small;
        }
        
        #msTable tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        
        #msTable tr:hover {
            background-color: #ddd;
        }
        
        #msTable th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: center;
            background-color: #2b9843;
            color: white;
            font-size: small;
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
        
        .spinner {
            margin: 0 auto;
            height: 64px;
            width: 64px;
            animation: rotate 0.8s infinite linear;
            border: 5px solid #31752f;
            border-right-color: transparent;
            border-radius: 50%;
        }
        
        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        
        .spinner-border {
            text-align: center;
        }
        
        .x_panel {
            padding: 10px;
        }
        
        #sideNavBox {
            float: left;
            margin-left: 20px;
            margin-right: 5px;
            /* width: 180px; */
        }
        
        #contentBox {
            margin-right: 20px;
            margin-left: 205px;
            /* min-width: 703px; */
        }

        body{
    font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif;
    overflow:hidden;
    margin: 0;
  background-color: #f7f6f2;
}
.container1{
    display: flex;
  justify-content: center;
  margin: 0 auto;
    height:85%;
    width:95%;
    border:1px solid #ccc;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    margin:0px;
}

#strengths{
    position:absolute;
    left:0;
    height:50%;
    width:50%;
    border:1px solid #ccc;
    background-color:#20BF55;
}
#weaknesses{
    position:absolute;
    left:0;
    top:50%;
    height:50%;
    width:50%;
    border:1px solid #ccc;
    background-color:#FFC65F;
}
#opportunities{
    position:absolute;
    left:50%;
    height:50%;
    width:50%;
    border:1px solid #ccc;
    background-color:#0C77F8;
}
#threats{
    position:absolute;
    left:50%;
    top:50%;
    height:50%;
    width:50%;
    border:1px solid #ccc;
    background-color:#FE8E65;
}
h3{
    margin-left:10px;
    margin-top:3px;
    font-size:calc(2vh + 10px);
}
#strengthArea, #weaknessArea, #opportunityArea, #threatArea{
    height:0%;
    width:100%;
    position:absolute;
    bottom:0%;
    background-color:rgba(0,0,0,0);
    padding:5px;
    overflow-y:auto;
}
.strong-thing, .weak-thing, .opp-thing, .threat-thing{
    margin-left:0px;
    margin-right:10px;
    margin-top:2px;
    padding:5px;
    padding-right:30px;
    border-radius:10px;
    position:relative;
}
.weak-thing{
    background-color:rgba(255,255,0,0.5);
}
.strong-thing{
    background-color:rgba(0,255,0,0.5);
}
.opp-thing{
    background-color:rgba(0,0,255,0.5);
    color:white;
}
.threat-thing{
    background-color:rgba(255,0,0,0.5);
    color:white;
}

@media only screen and (max-width: 500px) {
    h3{
        font-size:12px;
    }
}

    </style>

</head>
<!-- <div id="overlay">
    <div class="spinner"></div>
    <br /> Please Wait A Moment...
</div> -->

<div id="headercolor">
    <div class="row">
        <div class="col-sm-4">
            <small class="smallRisks">  Status de projet IT</small>
        </div>
        <div class="col-sm-8">
            <span style=" float:left; font-weight:bold; color: white; font-size:25px; padding-left:35px; padding-top: 2px" id="nomProjectName"></span>
        </div>
    </div>
    <!-- <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist4" onchange="FilterData();">
                 <option value="" selected disabled>Nom de projet</option>
            </select> -->
</div>

<div class="col-sm-12 justify-content-between" style="padding-right: 0px;padding-left: 0px;">
    <div class="col-sm-2 col-sm-12" style="padding-right: 0px;padding-left: 0px;margin-top: 15px;">
        <div class="card mb-12" style="max-width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); min-height:65px; border-radius: 5px; background-color: #fafffa;">
            <div class="card-header">
                <div class="col-sm-3" style="padding-top: 10px">
                    <div class="card-widget__icon"><img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/img/discount.png' class='img-rounded' alt='Cinque Terre' width='100%' height='100%'></div>
                </div>
                <div class="col">
                    <h6 class="card-title" style="color: black;text-align: center;padding-top: 10px;margin-bottom: 0px;">% Achévement</h6>
                </div>
                <div class="card-body">
                    <p class="card-text" id="pourach" style="font-size: x-large; text-align: center;color: black;"></p>
                </div>
            </div>
        </div>
        <div class="card mb-12" style="max-width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); min-height:65px; border-radius: 5px; background-color: #fafffa;">
            <div class="card-header">
                <div class="col-sm-3" style="padding-top: 10px">
                    <div class="card-widget__icon"><img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/img/yesterday.png' class='img-rounded' alt='Cinque Terre' width='100%' height='100%'></div>
                </div>
                <div class="col">
                    <h6 class="card-title" style="color: black;text-align: center;padding-top: 10px;margin-bottom: 0px;">Glissement projet </h6>
                </div>
                <div class="card-body">
                    <p class="card-text" id="GlissementProjet" style="font-size: x-large; text-align: center;color: black;"></p>
                </div>
            </div>
        </div>
          
        <div class="card mb-12" style="max-width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); min-height:65px; border-radius: 5px; background-color: #fafffa;">
            <div class="card-header">
                <div class="col-sm-3" style="padding-top: 10px">
                    <div class="card-widget__icon"><img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/img/budget.png' class='img-rounded' alt='Cinque Terre' width='100%' height='100%'></div>
                </div>
                <div class="col">
                    <h6 class="card-title" style="color: black;text-align: center;padding-top: 10px;margin-bottom: 0px;">Coût projet</h6>
                </div>
                <div class="card-body">
                    <p class="card-text" id="CostProject" style="font-size: x-large; text-align: center;color: black;"></p>
                </div>
            </div>
        </div>
        <div class="card mb-12" style="max-width: 100%;  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); min-height:65px; border-radius: 5px; background-color: #fafffa;">
            <div class="card-header">
                <div class="col-sm-3" style="padding-top: 10px">
                    <div class="card-widget__icon"><img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/img/analytics.png' class='img-rounded' alt='Cinque Terre' width='100%' height='100%'></div>
                </div>
                <div class="col">
                    <h6 class="card-title" style="color: black;text-align: center;padding-top: 10px;margin-bottom: 0px;">Travail projet</h6>
                </div>
                <div class="card-body">
                    <p class="card-text" id="WorkVariance" style="font-size: x-large; text-align: center;color: black;"> </p>
                </div>
            </div>
        </div>
                <div class="card mb-12" style="max-width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); min-height:65px; border-radius: 5px; background-color: #fafffa; ">
            <div class="card-header">
                <div class="col-sm-3" style="padding-top: 10px">
                    <div class="card-widget__icon"><img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/img/phases.png' class='img-rounded' alt='Cinque Terre' width='100%' height='100%'></div>
                </div>
                <div class="col">
                    <h6 class="card-title" style="color: black;text-align: center;padding-top: 10px;margin-bottom: 0px;">Demande de changement </h6>
                </div>
                <div class="card-body">
                    <p class="card-text" id="changeProj" style="font-size: x-large; text-align: center;color: black;"></p>
                </div>
            </div>
        </div>
        <div class="card mb-12" style="max-width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); min-height:65px; border-radius: 5px; background-color: #fafffa;">
            <div class="card-header">
                <div class="col-sm-3" style="padding-top: 10px">
                    <div class="card-widget__icon"><img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/img/risk.png' class='img-rounded' alt='Cinque Terre' width='100%' height='100%'></div>
                </div>
                <div class="col">
                    <h6 class="card-title" style="color: black;text-align: center;padding-top: 10px;margin-bottom: 0px;">Nombre risque</h6>
                </div>
                <div class="card-body">
                    <p class="card-text" id="RiskNumber" style="font-size: x-large; text-align: center;color: black;"> </p>
                </div>
            </div>
        </div>
        <div class="card mb-12" style="max-width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); min-height:65px; border-radius: 5px; background-color: #fafffa; ">
            <div class="card-header">
                <div class="col-sm-3" style="padding-top: 10px">
                    <div class="card-widget__icon"><img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/img/caution.png' class='img-rounded' alt='Cinque Terre' width='100%' height='100%'></div>
                </div>
                <div class="col">
                    <h6 class="card-title" style="color: black;text-align: center;padding-top: 10px;margin-bottom: 0px;">Nombre problème </h6>
                </div>
                <div class="card-body">
                    <p class="card-text" id="ProblemNumber" style="font-size: x-large; text-align: center;color: black;"></p>
                </div>
            </div>
        </div>


        <div class="card mb-12" style="max-width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); min-height:65px; border-radius: 5px; background-color: #fafffa; ">
            <div class="card-header">
                <div class="col-sm-3" style="padding-top: 10px">
                    <div class="card-widget__icon"><img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/img/schedule.png' class='img-rounded' alt='Cinque Terre' width='100%' height='100%'></div>
                </div>
                <div class="col">
                    <h6 class="card-title" style="color: black;text-align: center;padding-top: 10px;margin-bottom: 0px;">IT Phase</h6>
                </div>
                <div class="card-body">
                    <p class="card-text" id="ITphaseKPI" style="font-size: x-large; text-align: center;color: black;"></p>
                </div>
            </div>
        </div>
        <div class="card mb-12" style="max-width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); min-height:65px; border-radius: 5px; background-color: #fafffa; ">
            <div class="card-header">
                <div class="col-sm-3" style="padding-top: 10px">
                    <div class="card-widget__icon"><img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/img/schedule.png' class='img-rounded' alt='Cinque Terre' width='100%' height='100%'></div>
                </div>
                <div class="col">
                    <h6 class="card-title" style="color: black;text-align: center;padding-top: 10px;margin-bottom: 0px;">IT Comment</h6>
                </div>
                <div class="card-body">
                    <p class="card-text" id="ITcommentKPI" style="font-size: x-large; text-align: center;color: black;"></p>
                </div>
            </div>
        </div>
        <div class="card mb-12" style="max-width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); min-height:65px; border-radius: 5px; background-color: #fafffa; ">
            <div class="card-header">
                <div class="col-sm-3" style="padding-top: 10px">
                    <div class="card-widget__icon"><img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/img/schedule.png' class='img-rounded' alt='Cinque Terre' width='100%' height='100%'></div>
                </div>
                <div class="col">
                    <h6 class="card-title" style="color: black;text-align: center;padding-top: 10px;margin-bottom: 0px;">Company</h6>
                </div>
                <div class="card-body">
                    <p class="card-text" id="companyKPI" style="font-size: x-large; text-align: center;color: black;"></p>
                </div>
            </div>
        </div>
        <div class="card mb-12" style="max-width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); min-height:65px; border-radius: 5px; background-color: #fafffa; ">
            <div class="card-header">
                <div class="col-sm-3" style="padding-top: 10px">
                    <div class="card-widget__icon"><img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/img/computer.png' class='img-rounded' alt='Cinque Terre' width='100%' height='100%'></div>
                </div>
                <div class="col">
                    <h6 class="card-title" style="color: black;text-align: center;padding-top: 10px;margin-bottom: 0px;">SR éxecutif</h6>
                </div>
                <div class="card-body">
                    <p class="card-text" id="SRexec" style="font-size: x-large; text-align: center;color: black;"></p>
                </div>
            </div>
        </div>
         <div class="card mb-12" style="max-width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); min-height:65px; border-radius: 5px; background-color: #fafffa; ">
            <div class="card-header">
                <div class="col-sm-3" style="padding-top: 10px">
                    <div class="card-widget__icon"><img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/img/computer.png' class='img-rounded' alt='Cinque Terre' width='100%' height='100%'></div>
                </div>
                <div class="col">
                    <h6 class="card-title" style="color: black;text-align: center;padding-top: 10px;margin-bottom: 0px;">Opérational Owner</h6>
                </div>
                <div class="card-body">
                    <p class="card-text" id="operationalOwner" style="font-size: x-large; text-align: center;color: black;"></p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-10 col-sm-12" style="padding-right: 0px;padding-left: 0px;">
        <div class="main-section">
            <div class="col-sm-12" style="margin-bottom: 10px;padding-left: 15px;">
                <div class="row" style="margin-right: -3%; margin-left: -2%;">
                    <div class="dashbord">
                        <div class="icon-section">
                            <i class="fa fa-arrows-h" aria-hidden="true" style="border-radius: 50%;"></i><br>
                            <div class="row">
                                <small style="font-size: large;">Compléxité</small>
                            </div>
                            <p id="complexiteKPI" style="font-size: 18px;"></p>
                        </div>
                    </div>
                    <div class="dashbord dashbord-skyblue">
                        <div class="icon-section">
                            <i class="fa fa-money" aria-hidden="true" style="border-radius: 50%;"></i><br>
                            <div class="row">
                                <small style="font-size: large;">Priorité</small>
                            </div>
                            <p id="prioriteKPI" style="font-size: 18px;"></p>
                        </div>
                    </div>
                    <div class="dashbord dashbord-green">
                        <div class="icon-section">
                            <i class="fa fa-arrow-right" aria-hidden="true" style="border-radius: 50%;"></i><br>
                            <div class="row">
                                <small style="font-size: large;">Durée de projet</small>
                            </div>
                            <p id="dureeProjet" style="font-size: 18px;"></p>
                        </div>
                    </div>
                    <div class="dashbord dashbord-orange">
                        <div class="icon-section">
                            <i class="fa fa-calendar" aria-hidden="true" style="border-radius: 50%;"></i><br>
                            <div class="row">
                                <small style="font-size: large;">Date Début</small>
                            </div>
                            <p id="dateDebutProjet" style="font-size: 18px;"></p>
                        </div>
                    </div>
                    <div class="dashbord dashbord-blue">
                        <div class="icon-section">
                            <i class="fa fa-calendar" aria-hidden="true" style="border-radius: 50%;"></i><br>
                            <div class="row">
                                <small style="font-size: large;">Date Fin</small>
                            </div>
                            <p id="dateFinProjet" style="font-size: 18px;"></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6" style="padding-right: 0px;padding-left: 15px;margin-bottom: 10px;">
                <div class="x_panel" id="xpanelmodified" style="width:100%; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);border-radius: 5px;">
                    <div class="table-responsive">
                        <table id="tableaux" class="table table-striped  jambo_table bulk_action no-footer-border" style="margin-bottom: 0px;">
                            <thead>
                                <tr>
                                    <th class="column-title" style="text-align:center; background-color: #2b9843;"> Description de projet</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div id="descriptionProjet">This is test Project</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-sm-6" style="padding-right: 0px;padding-left: 15px;margin-bottom: 10px;">
                <div class="x_panel" id="xpanelmodified" style="width:100%; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);border-radius: 5px;">
                    <div class="table-responsive">
                        <table id="tableauxObjectif" class="table table-striped  jambo_table bulk_action no-footer-border" style="margin-bottom: 0px;">
                            <thead>
                                <tr>
                                    <th class="column-title" style="text-align:center; background-color: #2b9843;"> Objectif</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div id="objectifProjet"></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-sm-12" style="padding-right: 0px;">
                <div class="col-sm-12" style="padding-left: 0px;padding-right: 0px;padding-bottom: 10px;">
                    <div class="x_panel" style="width:100%; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);border-radius: 5px;">
                        <div class="x_title">
                            <h4 style="color: black;margin-bottom: 0px;"><b>Pourcentage d'achévement des phases</b></h4>
                            <div class="clearfix"></div>
                        </div>
                        <div class="x_content">
                            <canvas id="myChart2" style="display: block;width: 1347px;height: 700px;"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12" style="padding-right: 0px;padding-left: 0px;padding-bottom: 10px;margin-bottom: 15px;">
                
                </div>
                <div class="col-sm-8" style="padding-right: 0px;padding-left: 0px;padding-bottom: 10px;margin-bottom: 15px;">
                    <div class="x_panel" style="width:100%; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);border-radius: 5px;">
                        <div class="x_title">
                            <h4 style="color: black;margin-bottom: 0px;"><b>Matrice des risques</b></h4>
                            <div class="clearfix"></div>
                        </div>
                        <div class="x_content" >

        <canvas id="bubble-chart" height="200"></canvas>

                        </div>
                    </div>
                </div>
                <div class="col-sm-4" style="margin-right: 0%;margin-left: 0%;">
                    <div class="dashbord" style="width: 100%;    margin-top: 0px;">
                        <div class="icon-section">
                            <br>
                            <div class="row"  >
                                <small style="font-size: large;"><b>In Scope</b></small>
                            </div>
                            <p id="inScopeKPI" style="font-size: 18px;"></p>
                        </div>
                    </div>
                    <div class="dashbord dashbord-skyblue" style="width: 100%;    margin-top: 10px;">
                        <div class="icon-section">
                           <br>
                            <div class="row" >
                                <small style="font-size: large;"><b>Out Of Scope</b></small>
                            </div>
                            <p id="outScopeKPI" style="font-size: 18px;"></p>
                        </div>
                    </div>
                    <div class="dashbord dashbord-green" style="width: 100%;    margin-top: 10px;">
                        <div class="icon-section">
                            <br>
                            <div class="row" >
                                <small style="font-size: large;"><b>Project Team</b></small>
                            </div>
                            <p id="projectTeamKPI" style="font-size: 18px;"></p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
    <div class="col-xs-12" style="padding-left: 0px;padding-right: 0px;">
        <div class="col-md-4 col-xs-12" style="padding-right: 0px;">
            <h4 id="ertabtit" style="color: black"><b>Les jalons en retard</b></h4>
            <table class="table table-striped  jambo_table bulk_action no-footer-border" id="msTableer">
                <thead>
                    <tr>
                        <th>Jalon</th>
                        <th>Date</th>
                        <th>% d'achevement</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
        <div class="col-md-4 col-xs-12" style="padding-right: 0px;">
            <h4 id="mstabtit" style="color: black"><b>Les jalons terminés</b></h4>
            <table class="table table-striped  jambo_table bulk_action no-footer-border" id="msTable">
                <thead>
                    <tr>
                        <th>Jalon</th>
                        <th>Date</th>
                        <th>% d'achevement</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
        <div class="col-md-4 col-xs-12" style="padding-right: 0px;">
            <h4 id="avetit" style="color: black"><b>Les jalons à venir</b></h4>
            <table class="table table-striped  jambo_table bulk_action no-footer-border" id="msTableav">
                <thead>
                    <tr>
                        <th>Jalon</th>
                        <th>Date</th>
                        <th>% d'achevement</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</div>


<!-- jQuery -->
<script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/javascript/jquery-3.3.1.slim.min.js"></script>
<script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/javascript/popper.min.js"></script>
<script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/javascript/bootstrap.min.js"></script>
<script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/javascript/MainFilterData.js"></script>
<script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/javascript/chart.js@2.8.0.js"></script>

<!--<script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/javascript/chartjs-plugin-labels.js"></script>-->

<script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/javascript/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/javascript/bootstrap.min.js"></script>
<!-- FastClick -->
<script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/javascript/fastclick.js"></script>
<!-- NProgress -->
<script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/javascript/nprogress.js"></script>
<!-- iCheck -->
<script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/javascript/icheck.min.js"></script>

<script src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/javascript/echarts.min.js"></script>


<script type="text/javascript" src="/sites/pwa_dev/_catalogs/masterpage/Dashboard/Project_Status/javascript/moment-with-locales.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.0.0/chartjs-plugin-datalabels.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.3.3/echarts.min.js"></script>


<script type="text/javascript">
   /* jQuery(document).ready(function() {
        jQuery('#overlay').fadeOut(2000);
    });*/



    //---------------------------------------------------------------------------------------------------------------------
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

    //**************************************//
    var ProjectUID;
    var ProjectNAME;
    ExecuteOrDelayUntilScriptLoaded(getProjectUIDProperty, "sp.js");

    function getProjectUIDProperty() {
        var ctx = new SP.ClientContext.get_current();
        this.web = ctx.get_web();
        this.props = this.web.get_allProperties();
        ctx.load(this.web);
        ctx.load(this.props);
        ctx.executeQueryAsync(Function.createDelegate(this, gotProperty));
    }

    function gotProperty() {
        ProjectUID = this.props.get_item('MSPWAPROJUID');

        var urlProjet = _spPageContextInfo.webServerRelativeUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectId eq guid'" + ProjectUID + "'";
        console.log("urlProjet==="+ urlProjet);

        var responseProj = responseProj || [];

        function LoadAllDataLeftGlobal() {
            var projCost = 0;
            var projcostvariance = 0;
            var projWork = 0;
            var pworkvariance = 0;
            var pourcentageAchevementGlobal = 0;

            $.ajax({
                url: urlProjet,
                method: "GET",
                dataType: "json",
                headers: {
                    Accept: "application/json;odata=verbose"
                },
                success: function(data) {
                    responseProj = responseProj.concat(data.d.results);
                    if (data.d.__next) {
                        urlProjet = data.d.__next;
                        LoadAllDataLeftGlobal();
                    }

                    ////console.log("link= "+_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectCostVariance,ProjectWork,ProjectWorkVariance,ProjectPercentCompleted");
                    $.each(responseProj, function(key, value) {
                        var pCost = parseInt(value.ProjectCost);
                        ////console.log("pCost= "+pCost);
                        var pcostVar = parseInt(value.ProjectCostVariance);
                        var pwork = parseInt(value.ProjectWork);
                        var pwvariance = parseInt(value.ProjectWorkVariance);
                        var pourcentageAchevement = parseInt(value.ProjectPercentCompleted);
                        var nomProjet = value.ProjectName;
                        var prixVente = value.PrixdeventeCATND;
                        var prixVenteR = value.PrixdeventeRéviséCA;
                        var MargeRev = value.MargeRéviser;
                        var complexite = value.Complexity;
                        var dureeprojet = value.ProjectDuration;
                        console.log("value.ProjectActualStartDate= "+value.ProjectStartDate);
                        var datedebut = moment(value.ProjectStartDate).format('DD-MM-YYYY');
                        var datefin = moment(value.ProjectFinishDate).format('DD-MM-YYYY');
                        var srExec = value.SRexecutive;
                        var operOwner = value.OperationalOwner;
                        var phase = value.ITPhase;
                        var commentaire = value.ITComment;
                        var companies = value.Companyies;
                        var inscop = value.InScope;
                        var outscop = value.OutOfScope;
                        var projTeam = value.ProjectTeam;
                        var descProj = value.ProjectDescription;
                        var projectDuration = value.ProjectDuration;
                        var idProjet = value.ProjectId;
                        var objectifprojet = value.Objectifs;

                        if (complexite == null || complexite == "" ) { complexite = 0; }

                        if (srExec == null || srExec == "") {document.getElementById("SRexec").innerHTML = "pas de SR executif";} 
                        else {document.getElementById("SRexec").innerHTML = srExec ;}

                        if (operOwner == null || operOwner == "") {document.getElementById("operationalOwner").innerHTML = "pas de Propriétaire opérationnel";} 
                        else { document.getElementById("operationalOwner").innerHTML = operOwner;}

                        if (phase == null || phase == "") {document.getElementById("ITphaseKPI").innerHTML =  "pas de phase affecter"; } 
                        else { document.getElementById("ITphaseKPI").innerHTML = phase; }

                        if (commentaire == null || commentaire == "") { document.getElementById("ITcommentKPI").innerHTML = "pas de commentaire" ; }
                         else {  document.getElementById("ITcommentKPI").innerHTML = commentaire; }

                        if (companies == null || companies == "") {document.getElementById("companyKPI").innerHTML = "pas d'entreprise affecter"; } 
                        else {  document.getElementById("companyKPI").innerHTML = companies;}

                        if (descProj == null || descProj =="" ) { document.getElementById('descriptionProjet').innerHTML = "pas de description"; } 
                        else { document.getElementById('descriptionProjet').innerHTML =  descProj; }

                        if (inscop == null || inscop == "") { document.getElementById('inScopeKPI').innerHTML =  "pas d'affectation"; } 
                        else { document.getElementById('inScopeKPI').innerHTML = inscop; }

                        if (outscop == null || outscop == "") { document.getElementById('outScopeKPI').innerHTML = "pas d'affectation" ; } 
                        else { document.getElementById('outScopeKPI').innerHTML =  outscop; }

                        if (projTeam == null || projTeam == "") { document.getElementById('projectTeamKPI').innerHTML = "pas d'equipe affecter" ; } 
                        else { document.getElementById('projectTeamKPI').innerHTML =  projTeam; }

                        if (objectifprojet == null || objectifprojet == "") { document.getElementById('objectifProjet').innerHTML =  "pas d'objectif affecter"; } 
                        else { document.getElementById('objectifProjet').innerHTML = objectifprojet; }

                        document.getElementById('nomProjectName').innerHTML = nomProjet;
                        document.getElementById('complexiteKPI').innerHTML = complexite;
						//document.getElementById('prixVenteRev').innerHTML = conToMill(prixVenteR);
                        //document.getElementById('CostVariance').innerHTML = conToMill(prixVente);
                        document.getElementById('dureeProjet').innerHTML = parseFloat(dureeprojet / 40).toFixed(0) + "S";
                        document.getElementById('dateDebutProjet').innerHTML = datedebut;
                        document.getElementById('dateFinProjet').innerHTML = datefin;
                        //document.getElementById("GlissementProjet").innerHTML = conToMill();
                        document.getElementById("CostProject").innerHTML = conToMill(pCost);
                        document.getElementById("WorkVariance").innerHTML = conToMill(pwork);
                        document.getElementById('pourach').innerHTML = pourcentageAchevement + "%";


                        filterBaseline(idProjet, projectDuration);


                    });



                }
            });
        }
        LoadAllDataLeftGlobal();

        ////console.log("urlBaseline= "+urlBaseline);
        function filterBaseline(idProjet, projectDuration) {
            var responseBaseline = responseBaseline || [];
            var urlBaseline = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectBaselineDuration,ProjectId&$filter=ProjectId eq guid'" + idProjet + "'";
            //console.log("urlBaseline= " + urlBaseline);
            $.ajax({
                url: urlBaseline,
                method: "GET",
                dataType: "json",
                headers: {
                    Accept: "application/json;odata=verbose"
                },
                success: function(data) {
                    responseBaseline = responseBaseline.concat(data.d.results);
                    if (data.d.__next) {
                        urlBaseline = data.d.__next;
                        filterBaseline(idProjet, projectDuration);
                    }
                    var tabIds = [];
                    var baselineDuration = 0;

                    $.each(responseBaseline, function(key, value) {
                        //console.log("idProjet= " + idProjet);




                        baselineDuration = value.ProjectBaselineDuration;




                        //console.log("baselineDuration= " + baselineDuration);
                        var glissement = ((parseFloat(projectDuration) - parseFloat(baselineDuration)) / parseFloat(projectDuration)) * 100;
                        if (glissement < 0 || isNaN(glissement)) {
                            glissement = 0;
                        }
                        document.getElementById("GlissementProjet").innerHTML = parseFloat(glissement).toFixed(0) + "%";

                    });

                }
            });

        }

        //*************Problemes****************//
        function LoadProblem() {
            var nbreIssue = 0;

            $.ajax({
                url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues?&$filter=ProjectId eq guid'" + ProjectUID + "'",
                method: "GET",
                dataType: "json",
                headers: {
                    Accept: "application/json;odata=verbose"
                },
                success: function(data) {
                    var dataResults = data.d.results;

                    $.each(dataResults, function(key, value) {
                        var titreIssue = value.Title;
                        if (titreIssue != null) {
                            nbreIssue++;
                        }

                    });
                    document.getElementById("ProblemNumber").innerHTML = nbreIssue;
                }
            });
        }
        LoadProblem();


        //Load Number Of All Risks
        function LoadRisks() {
            var nbreRisks = 0;

            $.ajax({
                url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks?&$filter=ProjectId eq guid'" + ProjectUID + "'",
                method: "GET",
                dataType: "json",
                headers: {
                    Accept: "application/json;odata=verbose"
                },
                success: function(data) {
                    var dataResults = data.d.results;

                    $.each(dataResults, function(key, value) {
                        var titreRisks = value.Title;
                        if (titreRisks != null) {
                            nbreRisks++;
                        }

                    });
                    document.getElementById("RiskNumber").innerHTML = nbreRisks;
                }
            });
        }
        LoadRisks();

        //*******************************calcul demande de changement**********//
        var responseChangement = responseChangement || [];
        var urlChangement = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?&$filter=ProjectId eq guid'" + ProjectUID + "'";

        function Loadchangement() {
            var nbreDemande = 0;
            var urlinterne = "";

            $.ajax({
                url: urlChangement,
                method: "GET",
                dataType: "json",
                headers: {
                    Accept: "application/json;odata=verbose"
                },
                success: function(data) {
                    responseChangement = responseChangement.concat(data.d.results);
                    if (data.d.__next) {
                        urlChangement = data.d.__next;
                        loadChangement();
                    }


                    $.each(responseChangement, function(key, value) {

                        var urlinterne = value.ProjectWorkspaceInternalUrl;
                        //console.log("urlinterne===" + urlinterne + "/_api/web/lists/getbytitle('DemandeChangement')/items");

                        $.ajax({
                            url: urlinterne + "/_api/web/lists/getbytitle('DemandeChangement')/items",
                            method: "GET",
                            dataType: "json",
                            headers: {
                                Accept: "application/json;odata=verbose"
                            },
                            success: function(data) {
                                var dataResults = data.d.results;

                                $.each(dataResults, function(key, value) {

                                    var titreDemande = value.Title;
                                    if (titreDemande != null) {
                                        nbreDemande++;

                                    }
                                });
                                document.getElementById("changeProj").innerHTML = nbreDemande;
                            }
                        });
                    });

                }
            });
        }
        Loadchangement();

        //*******************************JALON**********//
        var responseJalonTer = responseJalonTer || [];
        var urlJalonsTer = "/_api/ProjectData/[en-US]/Tasks?$select=ProjectId,TaskName,TaskIsMilestone,TaskStartDate,TaskFinishDate,TaskPercentCompleted,TaskPriority&$filter=ProjectId%20eq%20guid%27" + ProjectUID + "%27";

        function loadJalonTer() {


            $.ajax({
                url: _spPageContextInfo.siteAbsoluteUrl + urlJalonsTer,

                method: "GET",
                dataType: "json",
                headers: {
                    Accept: "application/json;odata=verbose"
                },
                success: function(data) {
                    responseJalonTer = responseJalonTer.concat(data.d.results);
                    if (data.d.__next) {
                        urlJalonsTer = data.d.__next;
                        loadJalonTer();
                    }
                    var countTer = 0;
                    var countRet = 0;
                    var countAv = 0;
                    $.each(responseJalonTer, function(key, value) {
                        moment.locale('fr');
                        var finJJal = value.TaskFinishDate;
                        var priorité = value.TaskPriority;
                        var finJallon = moment(finJJal).format('YYYY-MM-DD');
                        var dFinJal = moment(finJJal).format('DD-MM-YYYY');
                        var today = moment().format('YYYY-MM-DD');
                        var jalon = value.TaskIsMilestone;


                        var idProj = value.ProjectId;

                        var nomJal = value.TaskName;
                        var debutProjet = value.TaskStartDate;
                        var startJal = moment(debutProjet).format('YYYY-MM-DD');
                        var dStartJal = moment(debutProjet).format('YYYY-MM-DD');

                        var achev = value.TaskPercentCompleted;

                        if (priorité == null || priorité == "") { document.getElementById('prioriteKPI').innerHTML =  "pas de priorité"; } 
                        else { document.getElementById('prioriteKPI').innerHTML = priorité; }
                        var tablems = document.getElementById("msTable");
                        if (jalon == true) {
                            if ((moment(finJallon).isSameOrBefore(today)) && (achev == 100)) {

                                var trMilTer;
                                trMilTer = $("<tr>");

                                trMilTer.append("<td>" + nomJal + "</td>");
                                trMilTer.append("<td>" + dStartJal + "</td>");
                                trMilTer.append("<td>" + achev + "%</td>");

                                $('#msTable').append(trMilTer);
                                countTer++;

                            }


                            if ((moment(finJallon).isSameOrBefore(today)) && (achev < 100)) {

                                var trMilRet;
                                trMilRet = $("<tr>");
                                trMilRet.append("<td>" + nomJal + "</td>");
                                trMilRet.append("<td>" + dStartJal + "</td>");
                                trMilRet.append("<td>" + achev + "%</td>");

                                $('#msTableer').append(trMilRet);
                                countRet++;

                            }

                            if ((moment(today).isBefore(startJal)) && (achev == 0)) {
                                //////console.log("nomJal av= "+nomJal);
                                var trMilAv;
                                trMilAv = $("<tr>");

                                trMilAv.append("<td>" + nomJal + "</td>");
                                trMilAv.append("<td>" + dStartJal + "</td>");
                                trMilAv.append("<td>" + achev + "%</td>");

                                $('#msTableav').append(trMilAv);
                                countAv++;
                            }

                        }
                    });

                    if (countTer > 0) {
                        $("#jlon1").show();
                    } else {
                        $("#jlon1").hide();
                    }

                    if (countRet > 0) {
                        $("#jlon2").show();
                    } else {
                        $("#jlon2").hide();
                    }

                    if (countAv > 0) {
                        $("#jlon3").show();
                    } else {
                        $("#jlon3").hide();
                    }

                }
            });


        }
        loadJalonTer();

        //**************************Chartes*************************//
        var add = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=TaskOutlineNumber,TaskName,TaskPercentCompleted&$filter=ProjectId eq guid'" + ProjectUID + "%27%20and%20TaskIsProjectSummary%20eq%20false%20and%20TaskOutlineLevel%20eq%202&$orderby=TaskStartDate";
        var UrlTravailResource = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=ProjectId eq guid'" + ProjectUID + "%27%20and%20TaskIsProjectSummary%20eq%20false%20and%20TaskOutlineLevel%20eq%202&$Select=TaskName,TaskStartDate,TaskCost&$orderby=TaskStartDate";
        var responseResource = responseResource || [];

        console.log("add= "+add);
        $.ajax({
            url: UrlTravailResource,



            method: "GET",
            dataType: "json",
            headers: {
                Accept: "application/json;odata=verbose"
            },
            success: function(data) {
                var dataResults = data.d.results;


                moment.locale('fr');
                if (dataResults.length > 0) {

                    var reducedObject = {};
                    var pieLabels = [];
                    var pieValues = [];
                    var sumCost=0;
                    for (var i = 0; i < dataResults.length; i++) {
                        // if (!reducedObject[dataResults[i].ResourceName]) {

                        //     reducedObject[dataResults[i].ResourceName] = 0;
                        // }
                        // reducedObject[dataResults[i].ResourceName] += parseFloat(dataResults[i].AssignmentWork / 8).toFixed(0);
                        var nomTache=dataResults[i].TaskName;
                        var deb=dataResults[i].TaskStartDate;
                        var debut=moment(deb).format("DD/MM/YYYY");
                        var cout=dataResults[i].TaskCost;
                        sumCost+=parseFloat(cout);
                        pieValues.push(sumCost);
                        pieLabels.push([nomTache,debut]);
                    }

             
                    
                    


                    var pieData = {
                        datasets: [{
                            borderColor: "#80b6f4",
                            pointBorderColor: "#80b6f4",
                            pointBackgroundColor: "#80b6f4",
                            pointHoverBackgroundColor: "#80b6f4",
                            pointHoverBorderColor: "#80b6f4",
                            pointBorderWidth: 1,
                            pointHoverRadius: 1,
                            pointHoverBorderWidth: 1,
                            pointRadius: 2,
                            fill: false,
                            borderWidth: 1,
                            data: pieValues

                        }],

                        labels: pieLabels
                    };

                   
                } 
                else {
                    // if (dataResults.length <= 0) {
                    //     window.myPieChart2.destroy();
                    // }
                }
            },
            error: function(data) {

            }
        });



        //------------------------------------
        $.ajax({
            url: add,


            method: "GET",
            dataType: "json",
            headers: {
                Accept: "application/json;odata=verbose"
            },
            success: function(data) {
                var dataResults = data.d.results;

                if (dataResults.length > 0) {

                    var pieValues = [];
                    var pieLabels = [];

                    for (var i = 0; i < dataResults.length; i++) {
                        ////console.log("dataResults[i].TaskPercentCompleted= "+parseInt(dataResults[i].TaskPercentCompleted));
                        ////console.log("dataResults[i].TaskName= "+dataResults[i].TaskName);
                        var valeurTaskComp = 0;
                        if (!isNaN(dataResults[i].TaskPercentCompleted)) {
                            valeurTaskComp = parseFloat(dataResults[i].TaskPercentCompleted);
                        }

                        pieValues.push(valeurTaskComp);
                        pieLabels.push(dataResults[i].TaskName);

                    }
                    //console.log("pieValues= " + pieValues);
                    //console.log("pieLabels= " + pieLabels);
                    /*var pieData = {
                datasets: [{
                    data: pieValues,
          backgroundColor: colorChart,
                }],

                labels: pieLabels
            };*/
                    var ctx = document.getElementById("myChart2");
                    if (window.myPieChart != undefined) {
                        window.myPieChart.destroy();
                    }
                    //
                    window.myPieChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: pieLabels,
                            datasets: [{
                                label: 'Achevement',
                                data: pieValues,
                                backgroundColor: colorChart,
                                borderColor: colorChart,
                                borderWidth: 1
                            }]
                        },
                        options: {
                            responsive: true,

                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: ''
                            },
                            scales: {
                                xAxes: [{
                                    ticks: {
                                        maxRotation: 30,
                                        minRotation: 30,
                                        fontSize: 12
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                         callback: function (value) {
          return (value) + '%'; // convert it to percentage
        },

                                    }
                                }]
                            }
                        }
                    });
                    //myPieChart.destroy();

                }
            },
            error: function(data) {
                //
            }
        });
        var responseSwot= responseSwot || [];
    var urlSwot=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Projects(guid'"+ProjectUID+"')/Risks";
console.log("urlSwot===== "+urlSwot);
     function RiskMatrix(){


$.ajax({url: urlSwot,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;

                    var bubbleValues = [];
                    var bubbleLabels = [];
                    var bubbleImpact = [];
                    var BubbleRandom = [];
                    var riskTitleArr=[];
                    for(var i=0; i< data.d.results.length; i++)
                    {
                        riskTitleArr.push(data.d.results[i].Title);
                      bubbleValues.push(parseInt((data.d.results[i].Probability)*100).toFixed(0));
                      console.log(bubbleValues);
                      bubbleImpact.push(parseInt(data.d.results[i].Impact));
                      console.log(bubbleImpact);
                      bubbleLabels.push(data.d.results[i].Title);
                      BubbleRandom.push(Math.random() * (20-10)+10);
                    }
                    var maxi=Math.max.apply(null,bubbleImpact);
                    var mini=Math.min.apply(null,bubbleImpact);

        var sites = [];

            for (var i = 0; i < bubbleImpact.length; i++) {
                 
                 //var colors1 =  ["#008000", "#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];

                var site = {
                    backgroundColor: "#"+((1<<24)*Math.random()|0).toString(16),
                    radius: 10,
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                    hoverRadius: 5,
                    label: riskTitleArr[i],
                    data: [
                        {   
                            x: Number(bubbleImpact[i]),
                            y: Number(bubbleValues[i]),
                            r: Number(BubbleRandom[i]).toFixed(2)
                        }
                    ]
                };
                sites.push(site);
                //console.log(sites);
            }          

  var ctx = $("#bubble-chart");


 var data = {datasets: sites};
            var options = {
                scales: {
                    yAxes:
                            [
                                {
                                    scaleLabel: {display: true, labelString: "Probabilité"},
                                    ticks: {beginAtZero: true, min:0 , max:100}
                                }
                            ],
                    xAxes:
                            [
                                {
                                    scaleLabel: {display: true, labelString: "Impact"},
                                    ticks: {beginAtZero: true, min:0 , max: 10}
                                    
                                }
                            ]
                },
              plugins:{
                labels:{
                  render:'label'
                }
              },
              legend:{
                display:false
              },
                title: {display: false}
            };

            if(window.chartMatrix != undefined)
                        {
                          window.chartMatrix.destroy();
                        }

            window.chartMatrix = new Chart(ctx, {type: "bubble", data: data, options: options});







 }  
});
}
 RiskMatrix();


    }

    //**************************************//


    



    //**************************************************************************************************************************************************************************************************************************************************************************************

    var colorChart = ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"
    ];
</script>