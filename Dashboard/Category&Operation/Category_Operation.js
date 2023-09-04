
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
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Category&Operation/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Category&Operation/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->

    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Category&Operation/css/custom1.min.css" rel="stylesheet">

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

   #datatable th {
    background-color: #31752f;
    color: white;
  }


   #datatable tr > *:nth-child(8) {
    display: none;
}

#datatable tr > *:nth-child(9) {
    display: none;
}

#datatable tr > *:nth-child(10) {
    display: none;
}

#datatable tr > *:nth-child(11) {
    display: none;
}


  #period{
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 15%;
    font-size: 13px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-left:50px;
    border-radius : 15px 15px 0px 0px;
  }

  #category {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 15%;
    font-size: 13px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    border-radius : 15px 15px 0px 0px;
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


</style>

  </head>



      <div id="headercolor">
          <div>
            <small class="smallRisks">   
              Engineer job category / operational
            </small>
          </div>

          <div>


            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="period" onchange="MainFunction()">
               <option selected="" value="">Period</option>
            </select>
    

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="category" onchange="MainFunction()">
               <option selected="" value="">Category</option>
            </select>


      </div>       
      </div>




        

        <!-- top navigation -->
        
        <!-- /top navigation -->


       


        <!-- page content -->
        <div class="right_col" role="main">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h4 id="txtJobCategory" class="card-title">Job category engineer</h4>
                    <div class="clearfix"></div>
                  </div>

                  <div class="x_content">
                  <div>
                    <canvas id="JobCategory" width="500" height="450" style="display: block; width: 620px; height: 261px;"></canvas>
                  </div>
                  </div>

                </div>
              </div>



              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h4 id="txtOperational" class="card-title">Operational work category</h4>
                    <div class="clearfix"></div>
                  </div>
                  <div>
                    <canvas id="OperationWork" width="500"  height="450" style="display: block; width: 620px; height: 261px;"></canvas>
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




    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Category&Operation/javascript/chart.js@2.8.0.js"></script>

    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Category&Operation/javascript/chartjs-plugin-datalabels@0.5.0"></script>

    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Category&Operation/javascript/chartjs-plugin-labels.js"></script>

    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Category&Operation/javascript/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Category&Operation/javascript/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Category&Operation/javascript/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Category&Operation/javascript/nprogress.js"></script>
    <!-- iCheck -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Category&Operation/javascript/icheck.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Category&Operation/javascript/echarts.min.js"></script>
<script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>

<script type="text/javascript">
//document.oncontextmenu = new Function("return false");


window.addEventListener('load',function() {


        $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines",     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;
                    
         
        $.each(dataResults, function(key, value) 
        {  
          var category = value.TimesheetClassName;
            if(category)
            {
            
          
            $('#category').append($('<option>',
               {
                  text : category
               }));
                
                
            var opt = {};
                              $("#category > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            });

            }

          var monday = moment()
              .startOf('year')
              .day("Monday");
          if (monday.date() > 8) monday.add(8,'d');
          var month = monday.year();
          while(month === monday.year()){
              var days = monday.toString();
              monday.add(7,'d');
              dayss = moment(days).format('L');
              

              $('#period').append($('<option>',
               {
                text : dayss
                }));

          }

            
        });
        
                    }
                    
        });
        
        });






var colors1 =  ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                      "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                      "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                      "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                      "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                      "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"];

window.addEventListener('load',function() {


            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines",  
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;
              var itermeidiaryObject = {};  
              var count = 0;       
            $.each(dataResults, function(key, value) 
            { 

                    var epn = value.TimesheetClassName;
                var som = 0;
                if (epn != null) {
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                  count++;
                }
                var somme = som;
              });

              var finalObject = Object.keys(itermeidiaryObject).map(function(key) {
                return {
                  label: key,
                  y: itermeidiaryObject[key]
                }
              });
              
              var pievalues = finalObject.map(function(value, index) {
                return value.y;
              });
              
              var labels = finalObject.map(function(value, index) {
                return value.label;
              });
              
              var colorscheme = colors1.slice(0, labels.length);

                  
var ctx2 = document.getElementById("JobCategory").getContext('2d');
if(window.echartdonut != undefined)
{
  window.echartdonut.destroy();
}

window.echartdonut = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [{
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },
  options:{
    legend: { display: true },
    responsive: true,
    plugins:{
  labels: [
  {
    render: 'label',
    fontColor: '#000',
    position: 'outside',
    fontSize: 11
  },
  {
    fontColor: 'white',
    render :'percentage',
    fontSize: 14
  }
  ]
}
  }
});
    
if(count ==0)
     {
        $("#JobCategory").hide();
        document.getElementById("txtJobCategory").innerHTML = "No job category !";
     }

else{
        $("#JobCategory").show();
        document.getElementById("txtJobCategory").innerHTML = "Job category engineer";
    }
          


 }  
});
});                             





window.addEventListener('load',function() {


            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines",  
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;
              var itermeidiaryObject = {};  
              var count = 0;       
            $.each(dataResults, function(key, value) 
            { 

                    var epn = value.TimesheetClassName;
                var som = 0;
                if (epn != null) {
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                  count++;
                }
                var somme = som;
              });

              var finalObject = Object.keys(itermeidiaryObject).map(function(key) {
                return {
                  label: key,
                  y: itermeidiaryObject[key]
                }
              });
              
              var pievalues = finalObject.map(function(value, index) {
                return value.y;
              });
              
              var labels = finalObject.map(function(value, index) {
                return value.label;
              });
              
              var colorscheme = colors1.slice(0, labels.length);

                  
var ctx3 = document.getElementById("OperationWork").getContext('2d');
if(window.echartpie != undefined)
{
  window.echartpie.destroy();
}

window.echartpie = new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [{
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },
  options:{
    legend: { display: true },
    responsive: true,
    plugins:{
  labels: [
  {
    render: 'label',
    fontColor: '#000',
    position: 'outside',
    fontSize: 11
  },
  {
    fontColor: 'white',
    render :'percentage',
    fontSize: 14
  }
  ]
}
  }
});
    
if(count ==0)
     {
        $("#OperationWork").hide();
        document.getElementById("txtOperational").innerHTML = "No category operational !";
     }

else{
        $("#OperationWork").show();
        document.getElementById("txtOperational").innerHTML = "Operational work category";
    }
          


 }  
});
}); 




</script>