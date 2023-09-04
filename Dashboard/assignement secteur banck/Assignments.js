
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Assignments</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/Assignments/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/Assignments/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/Assignments/css/custom1.min.css" rel="stylesheet">


<style>
   #headercolor{
    background:#21429b;
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

   table th {
    background-color: #f39d9d;
    color: white;
    width: 100%;
  }
  
  tbody {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 140px;
    width: 100%;
  }
  table {
    border-collapse: collapse;
    
    overflow-x: scroll;
    display: block;
  }
  #tableauxResWork th {
    background-color: #f39d9d;
    color: white;
    width: 100%;
  }
  
  #mylist0{
  	background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 15%;
    font-size: 13px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    
    border-radius : 15px 15px 0px 0px;
  }
  /*#mylist3{
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 15%;
    font-size: 13px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-left:50px;
    border-radius : 15px 15px 0px 0px;
  }*/

  #mylist1 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 15%;
    font-size: 13px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    
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
    background-color: #edcdcd;
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
    background-color: #f39d9d;
    color: white;
    text-align:center;
}
th {
    text-align: center;
}
/*canvas#ressWork {
    height: 1500px;
}
canvas#portfolioWork {
    max-height: 400px;
    max-width: 100%;
}*/

</style>

  </head>



      <div id="headercolor">
          <div>
            <small class="smallRisks">
              ASSIGNMENTS
            </small>
          </div>

          <div>


            
            <select class="mdb-select md-form"  style="color:black; font-weight:bold;" id="mylist2"
                onchange="loadListsByPortfolio();MainFilter();">
                <option value="">PORTEFEUILLE PROJET</option>
            </select>

             <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist1"
                onchange="loadListsByProgram();MainFilter();" >
                <option value="">PROGRAMME</option>
            </select>
            <select class="mdb-select md-form"  style="color:black; font-weight:bold;" id="mylist0"
                onchange="loadListsByProject();MainFilter();" >
                <option value="" >PROJET</option>
            </select>
            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist3"
                onchange="MainFilter();" >
                <option value="">RESSOURCE</option>
            </select>

      </div>       
      </div>




        

        <!-- top navigation -->
        
        <!-- /top navigation -->


       


        <!-- page content -->
        <div class="right_col" role="main">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="x_panel">
                  <div class="x_title" style="background-color: #cedfe5;">
                    <h2 id="txtcat">TRAVAIL</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div id="container1">
                    <canvas id="portfolioWork" ></canvas>
                    
                  </div>
                </div>
              </div>


              <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="x_panel">
                  <div class="x_title" style="background-color: #cedfe5;">
                    <h2>TRAVIL ACTUEL / TRAVAIL RESTANT</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                  <div id="container2">
                    <canvas id="ActRemChart" ></canvas>
                    
                  </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title" style="background-color: #cedfe5;">
                    <h2>TARVAIL PAR RESSOURCE</h2>
                    <input type="text" id="search1" placeholder="Recherche"style="float: right;">
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                  <div>
                    <table id="tableauxResWork" class="table table-striped jambo_table table-bordered" style="height: 200px;width: 100%">
                      <thead>
                        <tr>
                          <th style="width: 35%;">Nom Ressource</th>
                          <th style="width: 65%;">Travail (jours)</th>
                        </tr>
                        
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                    <h2 id="affichagesEchart" style="display:none">No Data Avaialable</h2>
                  </div>
                  </div>

                </div>
              </div>



            </div>

              <div class="row">


            <div class="col-md-12 col-sm-10 col-xs-12">
                <div class="x_panel">
                  <div class="x_title" style="background-color: #cedfe5;">
                    <h2>AFFECTATIONS</h2>
                    
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-box table-responsive" id="affectationsTables">
                          
                          
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


        <!-- /page content -->

        <!-- footer content -->
             
        <!-- /footer content -->

      </div>

    <!-- jQuery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.js"></script>
   


    <script src="/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/Assignments/javascript/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/Assignments/javascript/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/Assignments/javascript/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/Assignments/javascript/nprogress.js"></script>
    <!-- iCheck -->
    <script src="/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/Assignments/javascript/icheck.min.js"></script>
    
    
	<script src="/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/Assignments/javascript/MainFunctionAssignments.js"></script>
  <script src="/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/Assignments/javascript/MainAssignments.js"></script>
  <script src="/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/Assignments/javascript/selectPortefeuille.js"></script>
   <script src="/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/Assignments/javascript/selectProgramme.js"></script>  
   <script src="/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/Assignments/javascript/selectProjet.js"></script>  


    <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>

