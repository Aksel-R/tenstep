<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link href="/sites/pwa/_catalogs/masterpage/Dashboard/Pai/css/bootstrap.min.css" rel="stylesheet">
    <link href="/sites/pwa/_catalogs/masterpage/Dashboard/Pai/css/style.css" rel="stylesheet">
    <link href="/sites/pwa/_catalogs/masterpage/Dashboard/Pai/css/achevement.css" rel="stylesheet">
    <link href="/sites/pwa/_catalogs/masterpage/Dashboard/Pai/css/w3.css" rel="stylesheet">
    <link href="/sites/pwa/_catalogs/masterpage/Dashboard/Pai/css/jquery.dataTables.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">

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
        .ms-rtestate-field h1, h1.ms-rteElement-H1, .ms-rtestate-field h2, h2.ms-rteElement-H2 {
            line-height: 1.4;
            color: #212529;
        }
        .panel-default>.panel-heading {
            color: #333;
            background-color: #ed5f49;
            border-color: #ddd;
            border-radius: 4px;
        }

        .canvas {
            width: 80%;
            margin: 15px auto;
        }

        #headercolor {
            background: #ed5f49;
            padding: 10px;
            margin: 0 0 10px 0;
            text-align: right;
            border-radius: 10px;
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
    #mylist4 {
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
/*.table {
  display: inline-grid;
  grid-template-areas: 
  "head-fixed" 
  "body-scrollable";
}
.thead {
  grid-area: head-fixed;
  background-color: darksalmon;
}
.tbody {
  grid-area: body-scrollable;
  background-color: antiquewhite;
  overflow-y: auto;      
  overflow-x: hidden;  
  height: 200px;
}
th:fisrt-child, td:first-child{
    width: 10%;
    max-width: 10%;
}

th:first-child + th, td:first-child + td{
    width: 10%;
}*/
.table-sticky>thead>tr>th,
.table-sticky>thead>tr>td {
    background: #ed5f49;
    color: #fff;
    top: 0px;
    position: sticky;
}
.table-height {
    height: 320px;
    display: block;
    overflow: scroll;
    width: 100%;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

.table-bordered>thead>tr>th,
.table-bordered>tbody>tr>th,
.table-bordered>thead>tr>td,
.table-bordered>tbody>tr>td {
    border: 1px solid #ddd;
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
    border: 5px solid #0072c6;
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


h1 {
    color: #EEEEEE;
}
</style>
</head>
<div id="overlay">
    <div class="spinner"></div>
    <br />
    ...جاري تحميل الصفحة
</div>

<div id="headercolor">
    <div>
        <small class="smallRisks">
            التكاليف    
        </small>
    </div>

    <div>

<select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist1"
                onchange="selectMyList1();filter();">
                <option value=""> سنة البداية </option>
            </select>
            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist2"
                onchange="selectMyList2();filter();" disabled>
                <option value="">الولاية </option>
            </select>
            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist3"
                onchange="selectMyList3();filter();" disabled>
                <option value="">البلدية </option>
            </select>
            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist4"
                onchange="filter();" disabled>
                <option value=""> نوع المشروع </option>
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

      
        <div class="row">
                
              <div class="col-lg-12">
               

                 
                <div class="col-lg-12"   style="padding-right: 7px; padding-left: 0px;">
                    <div class="panel panel-default" style="box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);">
                        <div class="panel-heading" id="tabPanel">
                          <h2 class="panel-title" style="text-align: center; font-size: 120%;font-weight: bold;">التكاليف و الميزانية
                          </h2> 
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
                                    <div class="col-xs-6">    
                                        <span id="planCost"></span>
                                    </div>
                                   <div class="col-xs-6"> آلتكاليف المخطط لها </div>
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
                                    <div class="col-xs-6">
                                        <span id="actCost"></span>
                                    </div>
                                   <div class="col-xs-6"> التكاليف الحالية  </div>
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
                                    <div class="col-xs-6">    
                                        <span id="annBudg"></span>
                                    </div>
                                   <div class="col-xs-6"> ميزانية الاستهلاك للسنة الحالية </div>
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

                <div class="row" id="typeList"></div>
                <div class="row" id="typeTable"></div>
                
                
                
                
            </div>
        </div>
    </div>
</div>
</div>





<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>

<script src="/sites/pwa/_catalogs/masterpage/Dashboard/Pai/javascript/moment-with-locales.min.js"></script>
<script src="/sites/pwa/_catalogs/masterpage/Dashboard/Pai/javascript/selectMyList1.js"></script>
<script src="/sites/pwa/_catalogs/masterpage/Dashboard/Pai/javascript/selectMyList2.js"></script>
<script src="/sites/pwa/_catalogs/masterpage/Dashboard/Pai/javascript/selectMyList3.js"></script>
<script src="/sites/pwa/_catalogs/masterpage/Dashboard/Pai/javascript/filter.js"></script>



<!-- <script src="/sites/pwa/_catalogs/masterpage/Dashboard/Pai/javascript/Chart.bundle.min.js"></script>
<script src="/sites/pwa/_catalogs/masterpage/Dashboard/Pai/javascript/chart.js"></script>
<script src="/sites/pwa/_catalogs/masterpage/Dashboard/Pai/javascript/Chart.min.js"></script> -->

<script type="text/javascript">



jQuery(document).ready(function() {
    jQuery('#overlay').fadeOut(10000);
});

    
    function loadToday() {
        var auj;
        daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        jrSem = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
        var dayName = moment().format('dddd');
        if (daysInWeek.indexOf(dayName) > -1) {
            auj = jrSem[daysInWeek.indexOf(dayName)];
            ////console.log("date valide= "+auj);
        }
        var dj = moment().format('DD/MM/YYYY');
        document.getElementById("DateJr").innerHTML = auj + " <small>" + dj + "</small>";
        //
    }
    loadToday();
    function showTitle() {
        //document.getElementById("projTitle").innerHTML = '<i class="fa fa-dashboard"></i>' + ' Affichage Général';
        document.getElementById("projTitle").innerHTML = '<i class="fa fa-dashboard"></i>';
    }
    showTitle();


        var responseSelDeb = responseSelDeb || [];
        var urlSelDeb = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Pai_2022_Global')/items?$select=Annee_debut_Proj&$orderby=Annee_debut_Proj desc";
        
        function LoadSelDeb() {
            $.ajax({
                url: urlSelDeb,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseSelDeb = responseSelDeb.concat(data.d.results);
                    if (data.d.__next) {
                        urlSelDeb = data.d.__next;
                        LoadSelDeb();
                    }else if (!data.d.__next) {
                        $.each(responseSelDeb, function (key, value) {


                            var annDeb = value.Annee_debut_Proj;
                            
                            
                            
                                $('#mylist1').append($('<option>',
                                                        {
                                                            text : annDeb,
                                                              value:annDeb
                                                        }));
                            
                                                    var opt = {};
                                                    $("#mylist1 > option").each(function () {
                                                        if (opt[$(this).text()]) {
                                                            $(this).remove();
                                                        } else {
                                                            opt[$(this).text()] = $(this).val();
                                                        }
                                                    });
                            

                        });

                    }

                }
            });
        }
        LoadSelDeb();
       
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
</script>
</body>

</html>