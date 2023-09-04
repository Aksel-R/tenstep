
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
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Milestones/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Milestones/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Milestones/css/custom1.min.css" rel="stylesheet">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap.min.CSS">



<style>
   #headercolor{
    background:#31752f;
    padding:10px;
    margin: 0 0 10px 0;
    text-align:right;
    border-radius : 15px 15px 0px 0px;
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
    background-color: #31752f;
    color: white;
  }

  #tableaux1 th {
    background-color: #31752f;
    color: white;
  }



  #mylist1 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 15%;
    font-size: 13px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-left:50px;
    border-radius : 15px 15px 0px 0px;
  }

  #mylist2 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 15%;
    font-size: 13px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    border-radius : 15px 15px 0px 0px;
  }
  #mylist3 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 18%;
    font-size: 13px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    border-radius : 15px 15px 0px 0px;
  }

    #mylist4 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 18%;
    font-size: 13px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    border-radius : 15px 15px 0px 0px;
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

h2 {
    text-align: center;
}






</style>

  </head>



      <div id="headercolor">
          <div>
            <small class="smallRisks">
              MILESTONES
            </small>
          </div>

          <div>


            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist1" onchange="MainFilter()">
               <option value="">DIRECTION</option>
            </select>
    

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist2" onchange="MainFilter()">
               <option value="">GROUP</option>
            </select>

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist3" onchange="MainFilter()">
               <option value="">RESOURCE CALENDAR</option>
            </select>

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist4" onchange="MainFilter()">
               <option value="">RBS</option>
            </select>

      </div>       
      </div>




        

        <!-- top navigation -->
        
        <!-- /top navigation -->


       


        <!-- page content -->
        <div class="right_col" role="main">
            <div class="row">
            
              <div class="col-md-8 col-sm-8 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                  <h2 id="txtcat">MILESTONES COMPLETED IN LAST 30 DAYS</h2>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-box table-responsive">
                          
                          <table id="tableaux"  class="table table-striped table-bordered">
                            <thead>
                              <tr>
                                <th>PROJECT</th>
                                <th></th>
                                <th>MILESTONE</th>
                                <th>ACTUAL FINISH DATE</th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>MILESTONES COMPLETED BY PROJECT</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                  <div>
                    <canvas id="echart_pie" width="500" height="450"></canvas>
                    
                  </div>
                  </div>
                </div>
              </div>

      


            </div>

              <div class="row">


            <div class="col-md-8 col-sm-8 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    <h2 id="txtcat">MILESTONES UPCOMING IN THE NEXT 30 DAYS</h2>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-box table-responsive">
                          
                          <table id="tableaux1" class="table table-striped table-bordered">
                              <tr>
                                <th>PROJECT</th>
                                <th></th>
                                <th>MILESTONE</th>
                                <th>FINISH DATE</th>
                              </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                  <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 id="txtcat">MILESTONES PLANNED BY PROJECT</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div>
                    <canvas id="echart_donut" width="500" height="450"></canvas>
                    
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

    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Milestones/javascript/chart.js@2.8.0.js"></script>

    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Milestones/javascript/chartjs-plugin-datalabels@0.5.0"></script>

    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Milestones/javascript/chartjs-plugin-labels.js"></script>

    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Milestones/javascript/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Milestones/javascript/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Milestones/javascript/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Milestones/javascript/nprogress.js"></script>
    <!-- iCheck -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Milestones/javascript/icheck.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Milestones/javascript/echarts.min.js"></script>
	  <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Milestones/javascript/MainFunctionMilestone.js"></script>
   



    <script type="text/javascript" src="https://momentjs.com/downloads/moment.js"></script>
    <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>
    
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap.min.js"></script>

    <script type="text/javascript">
          $(document).ready(function() {
            $('table').DataTable();
          });
    </script>
