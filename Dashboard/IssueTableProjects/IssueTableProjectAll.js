<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Demo Risks Issues</title>

    <!-- Bootstrap -->

    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/IssueTableProjects/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->

   
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/IssueTableProjects/css/TableauCSS.css" rel="stylesheet">

<style>


.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
    display: none;
}


h2 {
    text-align: left;
    color:white;
}
span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}


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

  #selectTable {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 25%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-left:50px;
    border-radius : 15px 15px 0px 0px;
  }

  .smallRisks {
    font-size: 200%;
    float: left;
    font-weight: bold;
    color : white;
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
            <small class="smallRisks">
              Project Status With Risks
            </small>
          </div> 
      

          <select id="selectTable" name="SelectedName" class="mdb-select md-form" style="color:black; font-weight:bold;" onchange="filtrerTableau();">   
            <option value="">Choose a Project</option> 
          </select>
</div>


       <div class="row">

            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                        <div class="card-box table-responsive">
                          <table id="tableaux" class="table table-striped table-bordered">
                            <thead>
                              <tr>
                                  <th>Risks</th>
                                  <th>Status</th>
                                  <th>Affected</th>
                                  <th>Owner</th>
                                  <th>Risk Date</th>
                                  <th>Category</th>
                                  <th>Impact</th> 
                                  <th>Cost</th>
                                  <th style="display:none;">Description</th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                  </div>
                </div>
              </div>


             
     
  </div>



       <a href="x" download="down.xls" id="btnExport">
         Export Table data into Excel
        </a> 


        <!-- /page content -->

        <!-- footer content -->
             
        <!-- /footer content -->





    <!-- jQuery -->

    
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/IssueTableProjects/javascript/scriptTraitementAll.js"></script>

    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/IssueTableProjects/javascript/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/IssueTableProjects/javascript/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/IssueTableProjects/javascript/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/IssueTableProjects/javascript/nprogress.js"></script>
    <!-- iCheck -->

    <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>

    
    <script type="text/javascript">

        $("#btnExport").click(function (e) {
        $(this).attr({
            'download': "Table_Risks.xls",
                'href': 'data:application/csv;charset=utf-8,' + encodeURIComponent( $('.card-box').html())
            })
        });

    //Bloquage du bouton droite
    document.oncontextmenu = new Function("return false");


    </script>


