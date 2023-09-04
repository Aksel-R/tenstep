
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Demo Risks Issues</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ResourcesOverView/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ResourcesOverView/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ResourcesOverView/css/custom1.min.css" rel="stylesheet">


<style>
   #headercolor{
    background:rgba(0, 138, 255, 0.84);
    padding:10px;
    margin: 0 0 10px 0;
    text-align:right;
    border-radius : 10px ;
  }

    #headercolor span{
    float: left;
    padding-top: 10px;
  }

    .smallRisks {
    font-size: 200%;
    float: left;
    font-weight: bold;
    color : white;
  }

   #tableaux th {
    background-color: rgba(0, 138, 255, 0.84);
    color: white;
  }


  #direction {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 15%;
    font-size: 13px;
    padding: 12px 20px 12px 15px;
    border: 1px solid #ddd;
    margin-left:50px;
    border-radius : 5px ;
  }

  #groupe {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 15%;
    font-size: 13px;
    padding: 12px 20px 12px 15px;
    border: 1px solid #ddd;
    border-radius : 5px ;
  }
  #resourceCal {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 18%;
    font-size: 13px;
    padding: 12px 20px 12px 15px;
    border: 1px solid #ddd;
    border-radius : 5px ;
  }

    #rbs {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 18%;
    font-size: 13px;
    padding: 12px 20px 12px 15px;
    border: 1px solid #ddd;
    border-radius : 5px ;
  }

  #exampleFormControlTextarea4 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 15%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-left:50px;
  }


  .ms-rtestate-field h1, h1.ms-rteElement-H1, .ms-rtestate-field h2, h2.ms-rteElement-H2 {
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
    color:green;
}

option:empty
{
 display:none;
}

span#DeltaPlaceHolderPageTitleInTitleArea {
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



</style>

  </head>



      <div id="headercolor">
          <div>
            <small class="smallRisks" style="padding-top: 7px;">
              RESOURCE OVERVIEW
            </small>
          </div>

          <div>


            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="direction" onchange="MainFilter()">
               <option value="">DIRECTION</option>
            </select>
    

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="groupe" onchange="MainFilter()">
               <option value="">GROUP</option>
            </select>

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="resourceCal" onchange="MainFilter()">
               <option value="">RESOURCE CALENDAR</option>
            </select>

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="rbs" onchange="MainFilter()">
               <option value="">RBS</option>
            </select>

      </div>       
      </div>




        

        <!-- top navigation -->
        
        <!-- /top navigation -->


       


        <!-- page content -->
        <div class="right_col" role="main">
            <div class="row">
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 id="affichagesEchart11">RESOURCES BY GROUP</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                  <div>
                    <canvas id="echart_pie" width="500" height="450"></canvas>
                    <h2 id="affichagesEchart1" style="display:none;">No Data Avaialable</h2>
                  </div>
                  </div>

                </div>
              </div>

              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 id="affichagesEchart22">RESOURCES BY DEPARTEMENT</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                  <div>
                    <canvas id="myChart" width="500" height="450"></canvas>
                    <h2 id="affichagesEchart2"style="display:none;">No Data Avaialable</h2>
                  </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 id="id="affichagesEchart23>RESOURCES BY RBS</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div>
                    <canvas id="echart_donut" width="500" height="450"></canvas>
                    <h2 id="affichagesEchart3" style="display:none;">No Data Avaialable</h2>
                  </div>
                </div>
              </div>


            </div>

              <div class="row">


            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-box table-responsive">
                          
                          <table id="tableaux" class="table table-striped table-bordered">
                            <thead>
                              <tr>
                                <th>RESOURCE NAME</th>
                                <th>MAX UNITS</th>
                                <th>DEPARTEMENT</th>
                                <th>GROUP</th>
                                <th>GENERIC</th>
                                <th>CALENDAR</th>
                                <th>RBS</th>
                                <th>Equipe</th>
                              </tr>
                            </thead>
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


        <!-- /page content -->

        <!-- footer content -->
             
        <!-- /footer content -->

      </div>



    <!-- jQuery -->

    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ResourcesOverView/javascript/chart.js@2.8.0.js"></script>

    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ResourcesOverView/javascript/chartjs-plugin-datalabels@0.5.0"></script>

    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ResourcesOverView/javascript/chartjs-plugin-labels.js"></script>

    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ResourcesOverView/javascript/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ResourcesOverView/javascript/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ResourcesOverView/javascript/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ResourcesOverView/javascript/nprogress.js"></script>
    <!-- iCheck -->
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ResourcesOverView/javascript/icheck.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ResourcesOverView/javascript/echarts.min.js"></script>
	<script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ResourcesOverView/javascript/MainFunctionResource.js"></script>
   



    <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>

  <script type="text/javascript">
    document.oncontextmenu = new Function("return false");
  </script>