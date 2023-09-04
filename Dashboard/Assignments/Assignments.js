
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
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Assignments/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Assignments/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Assignments/css/custom1.min.css" rel="stylesheet">


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


#tableaux1 th {
    background-color: #31752f;
    color: white;
    text-align:center;
}


</style>

  </head>



      <div id="headercolor">
          <div>
            <small class="smallRisks">
              ASSIGNMENTS
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
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>WORK BY GROUP > RESOURCE</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                  <div>
                    <canvas id="echart_pie" width="500" height="450"></canvas>
                    <h2 id="affichagesEchart" style="display:none">No Data Avaialable</h2>
                  </div>
                  </div>

                </div>
              </div>

              

              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 id="txtcat">WORK BY PROJECT TYPE</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div>
                    <canvas id="echart_donut" width="500" height="450"></canvas>
                    
                  </div>
                </div>
              </div>


              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>ACTUAL AND REMAINING</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                  <div>
                    <canvas id="myChart" width="500" height="450"></canvas>
                    
                  </div>
                  </div>
                </div>
              </div>




            </div>

              <div class="row">


            <div class="col-md-10 col-sm-10 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-box table-responsive">
                          
                          <table id="tableaux" class="table table-striped table-bordered">
                            <thead>
                              <tr>
                                <th>RESOURCE  >  PROJECT  >  TASK</th>
                                <th>START</th>
                                <th>FINISH</th>
                                <th>% WORK COMPLETE</th>
                                <th>WORK</th>
                                <th>Resource Name</th>
                               </tr>
                            </thead>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          	
          	<div class="col-md-2 col-sm-2 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <div class="clearfix"></div>
              <div class="table-responsive">
                      <table  id="tableaux1" class="table table-striped jambo_table bulk_action">
                        <thead>
                          <tr class="headings">
                            <th></th>
                            <th class="column-title">RESOURCE NAME</th>
                          </tr>
                          <tbody>
                          <tr>
                          <td>
                          <input type="radio" id="r1" name="rec" value="select Resource Name" onchange="MainFilter()">
                          </td>
                          <td>select Resource Name</td>
                          </tr>
                          </tbody>
                        </thead>                            
                      </table>
                    </div></div></div></div></div>




                  </div>
                </div>
              </div>
            </div>


        <!-- /page content -->

        <!-- footer content -->
             
        <!-- /footer content -->

      </div>

    <!-- jQuery -->

    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Assignments/javascript/chart.js@2.8.0.js"></script>

    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Assignments/javascript/chartjs-plugin-datalabels@0.5.0"></script>

    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Assignments/javascript/chartjs-plugin-labels.js"></script>

    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Assignments/javascript/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Assignments/javascript/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Assignments/javascript/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Assignments/javascript/nprogress.js"></script>
    <!-- iCheck -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Assignments/javascript/icheck.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Assignments/javascript/echarts.min.js"></script>
	<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Assignments/javascript/MainFunctionAssignments.js"></script>
   



    <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>


