
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Demo Risks Issues</title>

    <!-- Bootstrap -->
    <link href="/sites/BIAT/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/sites/BIAT/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->

    <link href="/sites/BIAT/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/css/custom1.min.css" rel="stylesheet">

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

   #tableaux th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #e59da2;
    color: white;
  }

   #tableaux1 th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #e59da2;
    color: white;
  }




  #mylist1 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 15%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-left:50px;
    border-radius : 15px 15px 0px 0px;
  }

  #mylist2 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 15%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    border-radius : 15px 15px 0px 0px;
  }
  #mylist3 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 18%;
    font-size: 16px;
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

option:empty
{
 display:none;
}

.ms-core-pageTitle 
    {
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



//----------------------------------
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


//-----------------------------

</style>

  </head>





      <div id="headercolor">
          <div>
            <small class="smallRisks">
              SUIVI DES PROBLÈMES & RISQUES
            </small>
          </div>

            <div>

                    <span style="margin:center font-weight:bold; color: white; font-size:13px; padding-left:20px;" id="nomProjectName"></span>


                    <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist1" onchange="filtreTableIssueChart()">
                    <option value="">PROBLÈMES</option>
                    </select>

                    <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist2" onchange="filtreTableauDoRisk(); RiskMatrixFiltrer();">
                    <option value="">RISQUES</option>
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
                    <h2>NOMBRE DE PROBLÈMES PAR PROPRIÉTAIRE > STATUT</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                     <div>
                    <canvas id="echart_pie" width="500" height="400"></canvas>
                  
                  </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>LES PROBLÈMES COMPTENT PAR PRIORITÉ > STATUT</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                  <div>
                    <canvas id="myChart" width="500" height="400"></canvas>
                  </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>NOMBRE DE RISQUES PAR PROPRIÉTAIRE > STATUT</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div>
                    <canvas id="echart_donut" width="500" height="400"></canvas>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>MATRICE DES RISQUES</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <canvas id="bubble-chart" height="200"></canvas>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>RISQUES PAR CATÉGORIE</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <canvas id="Chart1" height="80"></canvas>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>PROBLÈMES PAR CATÉGORIE</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <canvas id="Chart2" height="80"></canvas>
                  </div>
                </div>
              </div>



            </div>

            <div class="row">

              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>ENJEUX DU PROJET</h2>
                    <div class="clearfix"></div>
              <div class="table-responsive">
                      <table id="tableaux"  class="table table-striped jambo_table bulk_action">
                        <thead>
                          <tr class="headings">
                            <th class="column-title">PROBLÈMES </th>
                            <th class="column-title">PROPRIÉTAIRE </th>
                            <th class="column-title">PRIORITÉ</th>
                            <th class="column-title">DATE D'ÉCHÉANCE</th>
                            <th class="column-title">STATUT </th>
                            <th class="column-title" style="display:none">NomProjet </th>
                            <th class="column-title" style="display:none">Category </th>
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div></div></div></div>


              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>RISQUES DU PROJET</h2>
                    <div class="clearfix"></div>
              <div class="table-responsive">
                      <table  id="tableaux1" class="table table-striped jambo_table bulk_action">
                        <thead>
                          <tr class="headings">
                            <th class="column-title">RISQUE </th>
                            <th class="column-title">PROPRIÉTAIRE </th>
                            <th class="column-title">DATE D'ÉCHÉANCE</th>
                            <th class="column-title">PROBABILITÉ </th>
                            <th class="column-title">IMPACT </th>
                            <th class="column-title">STATUT </th>
                            <th class="column-title" style="display:none">NomProjet </th>
                            <th class="column-title" style="display:none">Category </th>
                          </tr>
                        </thead>                            
                      </table>
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




    <script src="/sites/BIAT/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/javascript/chart.js@2.8.0.js"></script>



    <script src="/sites/BIAT/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/javascript/chartjs-plugin-labels.js"></script>

    <script src="/sites/BIAT/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/javascript/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="/sites/BIAT/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/javascript/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/sites/BIAT/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/javascript/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/sites/BIAT/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/javascript/nprogress.js"></script>
    <!-- iCheck -->
    <script src="/sites/BIAT/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/javascript/icheck.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>
    <script src="/sites/BIAT/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/javascript/echarts.min.js"></script>

   



    <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>

    <script type="text/javascript">


//document.oncontextmenu = new Function("return false");

/*jQuery(document).ready(function() {
    jQuery('#overlay').fadeOut(3000);
});*/


//http://jsfiddle.net/aybalasubramanian/fp5dqaxn/


function filtreTableauDoRisk()
{

function filtrerTableau()
  {
    var input,input1, filter1, filter, table,table1, tr,tr1, td,td1;

    input1 = document.getElementById("mylist2");
    filter1 = input1.value.toUpperCase();

    table1 = document.getElementById("tableaux1");
    tr1 = table1.getElementsByTagName("tr");

    for (var j = 0; j < tr1.length; j++) {
    td1 = tr1[j].getElementsByTagName("td")[5];

    if (td1){
      if (td1.innerHTML.toUpperCase().indexOf(filter1) > -1) {
      tr1[j].style.display = "";

      } else {
      tr1[j].style.display = "none";
      }
    }       
    }
  }

function filterRiskDochart()
  {
    var numRows4 = document.getElementById("tableaux1").rows.length;
    console.log(numRows4);
    var tbl = document.getElementById("tableaux1");   
    var tr = tbl.getElementsByTagName("tr");
    var itermeidiaryObject = {};
    	var som = 0;
          for(var i=1;i<numRows4;i++)
          {
            if (tr[i].style.display != "none")
            {
            var epn = tbl.rows[i].cells[1].innerHTML;
            
            if (epn != null) {
              itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
              som++;
            }
            var somme = som;
            }
          }
           
       
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

 
       
          var colorscheme = colors.slice(0, labels.length);

            var ctx1 = document.getElementById("echart_donut").getContext('2d');

if(window.echartdonut != undefined)
{
  window.echartdonut.destroy();
}

window.echartdonut = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: labels ,
    datasets: [{
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },
  options:{
    responsive: true,
    plugins:{
  labels: [
  {
    render: 'label',
    fontColor: '#000',
    position: 'outside',
    fontSize: 10
  },
  {
    fontColor: 'white',
    render: 'value',
    fontSize: 10
  }
  ]
}
  }
});
	if(som == 0){
  		$("#echart_donut").hide();
  	}

 }




  function filterRiskBarchart()
  {
    var numRows4 = document.getElementById("tableaux1").rows.length;
    console.log(numRows4);
    var tbl = document.getElementById("tableaux1");   
    var tr = tbl.getElementsByTagName("tr");
    var itermeidiaryObject = {};
    	var som = 0;
          for(var i=1;i<numRows4;i++)
          {
            if (tr[i].style.display != "none")
            {
            var epn = tbl.rows[i].cells[7].innerHTML;
            
            if (epn != null) {
              itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
              som++;
            }
            var somme = som;
            }
          }
            
       
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

          var colorscheme = colors.slice(0, labels.length);


var barOptions_stacked = {
    tooltips: {
        enabled: false
    },
    hover :{
        animationDuration:0
    },
    scales: {
        xAxes: [{ 
            ticks: {
              
                    min: 0 // Edit the value according to what you need
                } 
          }],
        yAxes: [{
            
            stacked: true
        }]
    },
    legend:{
        display:false
    },
    
    animation: {
        onComplete: function () {
            var chartInstance = this.chart;
            var ctx = chartInstance.ctx;
            ctx.textAlign = "left";
            ctx.font = "9px Open Sans";
            ctx.fillStyle = "#fff";

            Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                Chart.helpers.each(meta.data.forEach(function (bar, index) {
                    data = dataset.data[index];
                    if(i==0){
                        ctx.fillText(data, 50, bar._model.y+4);
                    } else {
                        ctx.fillText(data, bar._model.x-25, bar._model.y+4);
                    }
                }),this)
            }),this);
        }
    },
    pointLabelFontFamily : "Quadon Extra Bold",
    scaleFontFamily : "Quadon Extra Bold",
};

var ctx = document.getElementById("Chart1");

if(window.ChartBar != undefined)
{
  window.ChartBar.destroy();
}

window.ChartBar= new Chart(ctx, {
    type: 'horizontalBar',
     data: {
    labels: labels ,
    datasets: [{
      label : labels,
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },

    options: barOptions_stacked,
});

	if(som == 0)
          {
            $("#Chart1").hide();
          }

}

/*
function filterMatrixRiskschart()
  {
    var numRows4 = document.getElementById("tableaux1").rows.length;
    console.log(numRows4);
    var tbl = document.getElementById("tableaux1");   
    var tr = tbl.getElementsByTagName("tr");
    var itermeidiaryObject = {};
    
          for(var i=1;i<numRows4;i++)
          {
            if (tr[i].style.display != "none")
            {
            var epn = tbl.rows[i].cells[3].innerHTML;
            var som = 0;
            if (epn != null) {
              itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
            }
            var somme = som;
            }
          }
            if(somme==0)
          {
            $("#bubble-chart").hide();
            
          }
       
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

              if(labels.length==0)
          {
            $("#bubble-chart").hide();
            //document.getElementById("txtcat").innerHTML="Pas de catégories";
          }
          else
          {
            $("#bubble-chart").show();
            //document.getElementById("txtcat").innerHTML="Risques par catégorie";
          }


          var bubbleValues = [];
                    var bubbleLabels = [];
                    var bubbleImpact = [];
                    var BubbleRandom = [];

                    for(var i=0; i< data.d.results.length; i++)
                    {
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
                    data: [
                        {
                            x: Number(bubbleImpact[i]),
                            y: Number(bubbleValues[i]),
                            r: Number(BubbleRandom[i])
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
                                    scaleLabel: {display: true, labelString: "Probability"},
                                    ticks: {beginAtZero: true}
                                }
                            ],
                    xAxes:
                            [
                                {
                                    scaleLabel: {display: true, labelString: "Impact"},
                                    ticks: {min:mini-0.5 , max: maxi+0.5}
                                    
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
            new Chart(ctx, {type: "bubble", data: data, options: options});

}
*/


 //_spBodyOnLoadFunctionNames.push("RiskMatrixFiltrer");





var nomres = $("#mylist2 option:selected").text();
if(nomres == "RISQUES")
{
  RiskMatrix();
}else {


  chartMatrix.destroy();
  RiskMatrixFiltrer();
}

  filtrerTableau();
  filterRiskDochart();
  filterRiskBarchart();


  
} 


function RiskMatrixFiltrer(){

  var nomress = $("#mylist2 option:selected").text();
$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks?$filter=Status%20eq%20%27"+nomress+"%27",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;

                    var bubbleValues = [];
                    var bubbleLabels = [];
                    var bubbleImpact = [];
                    var BubbleRandom = [];

                    for(var i=0; i< data.d.results.length; i++)
                    {
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
                                    scaleLabel: {display: true, labelString: "Probability"},
                                    ticks: {beginAtZero: true}
                                }
                            ],
                    xAxes:
                            [
                                {
                                    scaleLabel: {display: true, labelString: "Impact"},
                                    ticks: {min:mini-0.5 , max: maxi+0.5}
                                    
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


function filtreTableIssueChart(){


  function filtrerTableauA(){
    var input, filter, table, tr, td;

    input = document.getElementById("mylist1");
    filter = input.value.toUpperCase();

    table = document.getElementById("tableaux");
    tr = table.getElementsByTagName("tr");

        for (var i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];

    if (td){
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";

      } else {
      tr[i].style.display = "none";
      }
    }       
    }

  }




  function filterdochart()
  {
    var numRows4 = document.getElementById("tableaux").rows.length;
    console.log(numRows4);
    var tbl = document.getElementById("tableaux");   
    var tr = tbl.getElementsByTagName("tr");
    var itermeidiaryObject = {};
    	var som = 0;

          for(var i=1;i<numRows4;i++)
          {
            if (tr[i].style.display != "none")
            {
            var epn = tbl.rows[i].cells[1].innerHTML;
            
            if (epn != null) {
              itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
              som++;
            }
            var somme = som;
            }
          }
           
       
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

    
       var colorscheme = colors.slice(0, labels.length);
            
            var ctx1 = document.getElementById("echart_pie").getContext('2d');
            //

if(window.echartpie != undefined)
{
  window.echartpie.destroy();
}

window.echartpie  = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: labels ,
    datasets: [{
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },
    options:{
      responsive: true,
    plugins:{
  labels: [
    {
      render: 'label',
      fontColor: '#000',
      position: 'outside',
      fontSize : 10
    },
    {
      fontColor: 'white',
      render: 'value',
      fontSize : 10
      
    }
  ]
}
  }
});

	 if(som==0)
          {
            $("#echart_pie").hide();
            
          }

  }

  function filterPiechart()
  {
    var numRows4 = document.getElementById("tableaux").rows.length;
    console.log(numRows4);
    var tbl = document.getElementById("tableaux");   
    var tr = tbl.getElementsByTagName("tr");
    var itermeidiaryObject = {};
   		var som = 0;

          for(var i=1;i<numRows4;i++)
          {
            if (tr[i].style.display != "none")
            {
            var epn = tbl.rows[i].cells[2].innerHTML;
            
            if (epn != null) {
              itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
              som++;
            }
            var somme = som;
            }
          }
            
       
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



             var colorscheme = colors.slice(0, labels.length);

            var ctx69 = document.getElementById("myChart").getContext('2d');


if(window.myPieChart!= undefined)
{
  window.myPieChart.destroy();
}

window.myPieChart= new Chart(ctx69, {
  type: 'pie',
  data: {
    labels: labels ,
    datasets: [{
      data: pievalues,
      backgroundColor: colorscheme
    }],
  },
    options:{
      responsive: true,
    plugins:{
  labels: [ 
  {
    render: 'label',
    fontColor: '#000',
    position: 'outside',
    fontSize: 10
  },
   {
      fontColor: 'white',
      render: 'value',
      fontSize: 10
      
    }
    ]
}
  }

});

	if(som==0)
          {
            $("#myChart").hide();
            
          }


  }

  function filterIssuesBarchart()
  {
    var numRows4 = document.getElementById("tableaux").rows.length;
    console.log(numRows4);
    var tbl = document.getElementById("tableaux");   
    var tr = tbl.getElementsByTagName("tr");
    var itermeidiaryObject = {};
    	var som = 0;

          for(var i=1;i<numRows4;i++)
          {
            if (tr[i].style.display != "none")
            {
            var epn = tbl.rows[i].cells[6].innerHTML;
            
            if (epn != null) {
              itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
              som++;
            }
            var somme = som;
            }
          }
          
       
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


          var colorscheme = colors.slice(0, labels.length);


var barOptions_stacked = {
    tooltips: {
        enabled: false
    },
    hover :{
        animationDuration:0
    },
    scales: {
        xAxes: [{ 
            ticks: {
              
                    min: 0 // Edit the value according to what you need
                }
          }],
        yAxes: [{
            
            stacked: true
        }]
    },
    legend:{
        display:false
    },
    
    animation: {
        onComplete: function () {
            var chartInstance = this.chart;
            var ctx = chartInstance.ctx;
            ctx.textAlign = "left";
            ctx.font = "9px Open Sans";
            ctx.fillStyle = "#fff";

            Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                Chart.helpers.each(meta.data.forEach(function (bar, index) {
                    data = dataset.data[index];
                    if(i==0){
                        ctx.fillText(data, 50, bar._model.y+4);
                    } else {
                        ctx.fillText(data, bar._model.x-25, bar._model.y+4);
                    }
                }),this)
            }),this);
        }
    },
    pointLabelFontFamily : "Quadon Extra Bold",
    scaleFontFamily : "Quadon Extra Bold",
};

var ctx = document.getElementById("Chart2");

if(window.ChartBarIssue != undefined)
{
  window.ChartBarIssue.destroy();
}

window.ChartBarIssue = new Chart(ctx, {
    type: 'horizontalBar',
     data: {
    labels: labels ,
    datasets: [{
      label : labels,
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },

    options: barOptions_stacked,
});

	  if(som==0)
          {
            $("#Chart2").hide();
            
          }


}








  filtrerTableauA();
  filterdochart();
  filterPiechart();
  filterIssuesBarchart();


}







  
  //filtrerTableauProjet();



function filtrerTableauProjet()
  {
    var input2, input3, filter2, filter3, table3, table2, tr2,tr3, td2,td3;

    input2 = document.getElementById("mylist3");

    filter2 = input2.value.toUpperCase();

    input3 = document.getElementById("mylist3");

    filter3 = input3.value.toUpperCase();

    table2 = document.getElementById("tableaux");
    tr2 = table2.getElementsByTagName("tr");

    table3 = document.getElementById("tableaux1");
    tr3 = table3.getElementsByTagName("tr");

    for (var k = 0; k < tr2.length; k++) {
    td2 = tr2[k].getElementsByTagName("td")[5];

    if (td2){
      if (td2.innerHTML.toUpperCase().indexOf(filter2) > -1) {
      tr2[k].style.display = "";

      } else {
      tr2[k].style.display = "none";
      }
    }       
    }

    for (var l = 0; l < tr3.length; l++) {
    td3 = tr3[l].getElementsByTagName("td")[6];

    if (td3){
      if (td3.innerHTML.toUpperCase().indexOf(filter3) > -1) {
      tr3[l].style.display = "";

      } else {
      tr3[l].style.display = "none";
      }
    }       
    }




    var numRows2 = document.getElementById("tableaux").rows.length;
    var numRows3 = document.getElementById("tableaux1").rows.length;
  }


//Fonction qui permet d'afficher liste de Projet  
function LoadProjectName() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                         
            $.each(dataResults, function(key, value) 
            {           
                var projetId = value.ProjectId;  
                var nomprojet = value.ProjectName;    
                  
                
                       $('#mylist3').append($('<option>',
                           {
                              text : nomprojet
                            }));   

                       var opt = {};
                              $("#mylist3 > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            });   
            });
}   
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadProjectName");


function test()
{
var nomres = $('#mylist3 option:selected').text();
$('#nomProjectName').html(nomres);
}


//Fonction qui permet d'afficher les list des risks
function LoadRisks() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";            
            $.each(dataResults, function(key, value) 
            {           
                var projetId = value.ProjectId;  
                var nomprojet = value.Status;    
                  
                
                       $('#mylist2').append($('<option>',
                            {
                              text : nomprojet
                            })); 

                            var opt = {};
                              $("#mylist2 > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            }); 
            });
}   
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadRisks");


//Fonction qui permet d'afficher les list des Issues
function LoadIssues() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo3 = "";            
            $.each(dataResults, function(key, value) 
            {           
                var projetIdI = value.ProjectId;  
                var nameIssue = value.Status;    

                       $('#mylist1').append($('<option>',
                            {
                              text : nameIssue
                            })); 

                            var opt = {};
                              $("#mylist1 > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            });   
            });
}   
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadIssues");




//Affichage du Tableau Risk Table
function LoadRisksTable() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                                    
            $.each(dataResults, function(key, value) 
            {     

                moment.locale('fr');      
                var projetId = value.ProjectId;  
                var titleRisks = value.Title; 
                var ownername = value.Owner;
                var status = value.Status;
                var duedate = value.DueDate;
                var proba = value.Probability;
                var impact = value.Impact;
                var projName = value.ProjectName;
                var epn = value.Category;

                if(ownername !=null)
                {
                  var ownernames = ownername;
                }else
                {
                  var ownernames = ownername;
                  ownernames = "[Blank]"; 
                }

                if(duedate != null)
                {
                  var duedates = moment(duedate).format('L');
                }else
                {
                  var duedates = duedate;
                  duedates = "[Blank]";
                }

                
                 var probab = parseFloat(proba);
                 var res = (probab * 100).toFixed(0);

                    var tr;
                    tr = $("<tr>");
                        tr.append("<td>" + titleRisks + "</td>");
                        tr.append("<td class='owner'>" + ownernames + "</td>"); 
                        tr.append("<td>" + duedates+ "</td>");
                        tr.append("<td>" + res + "</td>");  
                        tr.append("<td>" + impact + "</td>");  
                        tr.append("<td>" + status +" </td>"); 
                        tr.append("<td style='display:none'>" + projName +" </td>"); 
                        tr.append("<td style='display:none'>" + epn +" </td>");           
                    $('#tableaux1').append(tr);

$(document).ready(function(){
    $("#tableaux1 td.owner:contains('[Blank]')").css('background-color','#ccc').css('color','black');
});


            });
}   
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadRisksTable");





//Affichage du Tableau ISSUES Table
function LoadIssuesTable() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo = "";            
            $.each(dataResults, function(key, value) 
            {           
                var projetId = value.ProjectId;  
                var titleRisks = value.Title; 
                var ownername = value.Owner;
                var status = value.Status;
                var duedate = value.DueDate;
                var prio = value.Priority;
                var projName = value.ProjectName;
                var epn = value.Category;
                  
                moment.locale('fr');
                if(ownername !=null)
                {
                  var ownernames = ownername;
                }else
                {
                  var ownernames = ownername;
                  ownernames = "[Blank]"; 
                }
                if(duedate != null)
                {
                  var duedates = moment(duedate).format('L');
                }
                else
                {
                  var duedates = duedate;
                  duedates = "";
                }



                    var tr;
                    tr = $("<tr class='even pointer'>");
                        tr.append("<td>" + titleRisks + "</td>");
                        tr.append("<td class='owner1'>" + ownernames + "</td>");
                        tr.append("<td>" + prio + "</td>"); 
                        tr.append("<td>" + duedates+ "</td>");  
                        tr.append("<td>" + status +" </td>");  
                        tr.append("<td style='display:none'>" + projName +" </td>");
                        tr.append("<td style='display:none'>" + epn +" </td>");            
                    $('#tableaux').append(tr);

$(document).ready(function(){
    $("#tableaux td.owner1:contains('[Blank]')").css('background-color','#ccc').css('color','black');
});
              


            });
}   
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadIssuesTable");




var colors = ["#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];

//var colors =  ["#008000", "#455c73", "#3498db", "#26b99a"];

//var colors =  ["#008000", "#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];


function IssueOwner() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;
              var itermeidiaryObject = {}; 
              var som = 0;        
            $.each(dataResults, function(key, value) 
            { 

                    var epn = value.Owner;
                
                if (epn != null) {
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                  som++;
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
              
              var colorscheme = colors.slice(0, labels.length);

                  
var ctx1 = document.getElementById("echart_pie").getContext('2d');

if(window.echartpie != undefined)
{
  window.echartpie.destroy();
}

window.echartpie = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: labels ,
    datasets: [{
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },
    options:{
      responsive: true,
    plugins:{
  labels: [
    {
      render: 'label',
      fontColor: '#000',
      position: 'outside',
      fontSize : 10
    },
    {
      fontColor: 'white',
      render: 'value',
      fontSize : 13
      
    }
  ]
}
  }
});
  
  if(som==0)
  {
  	$("#echart_pie").hide();
  }  

 }  
});
}                                  
  _spBodyOnLoadFunctionNames.push("IssueOwner");    

//Fonction qui affiche une PieChart du courbe "Issue count By Priority"
function IssuesPriority() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;
              var itermeidiaryObject = {};
               var som = 0;        
            $.each(dataResults, function(key, value) 
            { 

                    var epn = value.Priority;
                
                if (epn != null) {
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                  som++;
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
              
              var colorscheme = colors.slice(0, labels.length);

                  
var ctx = document.getElementById("myChart").getContext('2d');

if(window.myPieChart!= undefined)
{
  window.myPieChart.destroy();
}

window.myPieChart= new Chart(ctx, {
  type: 'pie',
  data: {
    labels: labels ,
    datasets: [{
      data: pievalues,
      backgroundColor: colorscheme
    }],
  },
    options:{
      responsive: true,
    plugins:{
  labels: [ 
  {
    render: 'label',
    fontColor: '#000',
    position: 'outside',
    fontSize: 10
  },
   {
      fontColor: 'white',
      render: 'value',
      fontSize: 13
      
    }
    ]
}
  }

});
    
	if(som==0){
   		$("#myChart").hide();
	}

 }  
});

    

}                                  
  _spBodyOnLoadFunctionNames.push("IssuesPriority");
  

//Fonction qui affiche une PieChart du courbe "Risk count by Owner"
function RiskOwner() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;
              var itermeidiaryObject = {}; 
               var som = 0;       
            $.each(dataResults, function(key, value) 
            { 

                    var epn = value.Owner;
                
                if (epn != null) {
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                  som++;
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
              
              var colorscheme = colors.slice(0, labels.length);

                  
var ctx1 = document.getElementById("echart_donut").getContext('2d');
if(window.echartdonut != undefined)
{
  window.echartdonut.destroy();
}

window.echartdonut = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: labels ,
    datasets: [{
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },
  options:{
    responsive: true,
    plugins:{
  labels: [
  {
    render: 'label',
    fontColor: '#000',
    position: 'outside',
    fontSize: 10
  },
  {
    fontColor: 'white',
    render: 'value',
    fontSize: 13
  }
  ]
}
  }
});

   if(som==0)
  {
  	$("#echart_donut").hide();
  }  

 }  
});



}                                  
  _spBodyOnLoadFunctionNames.push("RiskOwner");          
            


function RiskMatrix(){


$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;

                    var bubbleValues = [];
                    var bubbleLabels = [];
                    var bubbleImpact = [];
                    var BubbleRandom = [];

                    for(var i=0; i< data.d.results.length; i++)
                    {
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
                                    scaleLabel: {display: true, labelString: "Probability"},
                                    ticks: {beginAtZero: true}
                                }
                            ],
                    xAxes:
                            [
                                {
                                    scaleLabel: {display: true, labelString: "Impact"},
                                    ticks: {min:mini-0.5 , max: maxi+0.5}
                                    
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
 _spBodyOnLoadFunctionNames.push("RiskMatrix");

//Function Load Risks Category
function BarRiskCategory(){

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;
              var itermeidiaryObject = {}; 
               var som = 0;       
            $.each(dataResults, function(key, value) 
            { 

                    var epn = value.Category;
                
                if (epn != null) {
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                  som++;
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
              
              var colorscheme = colors.slice(0, labels.length);


var barOptions_stacked = {
    tooltips: {
        enabled: false
    },
    hover :{
        animationDuration:0
    },
    scales: {
        xAxes: [{ 
            ticks: {
              
                    min: 0 // Edit the value according to what you need
                }
          }],
        yAxes: [{
            
            stacked: true
        }]
    },
    legend:{
        display:false
    },
    
    animation: {
        onComplete: function () {
            var chartInstance = this.chart;
            var ctx = chartInstance.ctx;
            ctx.textAlign = "left";
            ctx.font = "9px Open Sans";
            ctx.fillStyle = "#fff";

            Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                Chart.helpers.each(meta.data.forEach(function (bar, index) {
                    data = dataset.data[index];
                    if(i==0){
                        ctx.fillText(data, 50, bar._model.y+4);
                    } else {
                        ctx.fillText(data, bar._model.x-25, bar._model.y+4);
                    }
                }),this)
            }),this);
        }
    },
    pointLabelFontFamily : "Quadon Extra Bold",
    scaleFontFamily : "Quadon Extra Bold",
};

var ctx = document.getElementById("Chart1");
if(window.ChartBar != undefined)
{
  window.ChartBar.destroy();
}

window.ChartBar = new Chart(ctx, {
    type: 'horizontalBar',
     data: {
    labels: labels ,
    datasets: [{
      label : labels,
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },


    options: barOptions_stacked,
});

  if(som==0)
  {
  	$("#Chart1").hide();
  } 

 }  
});
} 
  _spBodyOnLoadFunctionNames.push("BarRiskCategory")




//Function Load Bar Issues Category
function BarIssuesCategory(){

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;
              var itermeidiaryObject = {}; 
               var som = 0;       
            $.each(dataResults, function(key, value) 
            { 

                    var epn = value.Category;
                
                if (epn != null) {
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                  som++;
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
              
              var colorscheme = colors.slice(0, labels.length);

var barOptions_stacked = {
    tooltips: {
        enabled: false
    },
    hover :{
        animationDuration:0
    },
    scales: {
        xAxes: [{ 
            ticks: {

                    min: 0 // Edit the value according to what you need
                }
        }],
        yAxes: [{
     
            stacked: true

        }]
    },
    legend:{
        display:false
    },





    
    animation: {
        onComplete: function () {
            var chartInstance = this.chart;
            var ctx = chartInstance.ctx;
            ctx.textAlign = "left";
            ctx.font = "9px Open Sans";
            ctx.fillStyle = "#fff";

            Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                Chart.helpers.each(meta.data.forEach(function (bar, index) {
                    data = dataset.data[index];
                    if(i==0){
                        ctx.fillText(data, 50, bar._model.y+4);
                    } else {
                        ctx.fillText(data, bar._model.x-25, bar._model.y+4);
                    }
                }),this)
            }),this);
        }
    },
    pointLabelFontFamily : "Quadon Extra Bold",
    scaleFontFamily : "Quadon Extra Bold",
};

var ctx = document.getElementById("Chart2");

if(window.ChartBarIssue != undefined)
{
  window.ChartBarIssue.destroy();
}

window.ChartBarIssue= new Chart(ctx, {
    type: 'horizontalBar',
    data: {
    labels: labels,
    datasets: [{
      label : labels ,
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },

    options: barOptions_stacked,
});

	 if(som==0)
  {
  	$("#Chart2").hide();
  }

 }  
});
} 
  _spBodyOnLoadFunctionNames.push("BarIssuesCategory");


</script>

