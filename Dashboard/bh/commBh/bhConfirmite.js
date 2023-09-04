<!doctype html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!-- Meta, title, CSS, favicons, etc. -->
  
  <link rel="stylesheet" href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/css/bootstrap.min.css" >
  <link rel="stylesheet" href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/css/bootstrap.css" >
  <link rel="stylesheet" href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/css/style.css" >
  <link rel="stylesheet" href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/css/achevement.css"  >
  <link rel="stylesheet" href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/css/w3.css" >
  <link rel="stylesheet" href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/css/fontawesome.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  


  <!-- Font Awesome -->
  <!-- NProgress -->
  <style type="text/css">
  .navbar-inverse {
            background-color: #337ab7;
            border-color: #337ab7;
        }


        .btn-group-vertical>.btn-group:after,
        .btn-group-vertical>.btn-group:before,
        .btn-toolbar:after,
        .btn-toolbar:before,
        .clearfix:after,
        .clearfix:before,
        .container1-fluid:after,
        .container1-fluid:before,
        .container1:after,
        .container1:before,
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
        span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}
th {
    font-size: smaller;
}
text.highcharts-credits {
    display: none;
}
.panel-primary {
    border-color: #337ab7;
    box-shadow: 0px 4px 8px 0px rgb(0 0 0);
    border-radius: 6px;
}

.panel-primary>.panel-heading {
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
}






  </style>



</head>
<body style="font-family: serif;">
<!--<div id="overlay">
    <div class="spinner"></div>
    <br/>
    Please Wait A Moment...
</div>-->


 <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="border-radius: 5px; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 100%);">
    <ul class="nav navbar-right top-nav"  style="padding-left: 0px; padding-right: 0px;width: 40%;">
        <h3 id="titre" style="color: white; float: left; margin-bottom: 0px;margin-top: 0px;">Conformité Contrôle Permanant et Sécurité Financière
        </h3>
    </ul>
    <select class="mdb-select md-form"
                style="float: left; width: 30%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList1" onchange="">
                <option value="">Période</option>

            </select>
            <select class="mdb-select md-form"
                style="float: left; width: 30%; background-color: #337ab7; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList2" onchange="">
                <option value="">Formation</option>

            </select>
</nav>

<div class="row" id="row1">
     <div class="col-lg-8">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-clock-o"></i> Titre 1
                </h3>
            </div>
            <div class="panel-body" style="padding: 0px 15px;">
              <div class="row">
                <div class="col-lg-4" >
                  <div id="container1"></div>
                </div> 
                <div class="col-lg-4" >
                  <div id="container2"></div>
                </div>
                <div class="col-lg-4" >
                  <div class="col-lg-6">
                    <div class="row">
                      <img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/img/arrow_bottom_15598.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style="margin-left: 25%;margin-right: 25%;margin-top: 25%;margin-bottom: 5%;">
                    </div>
                    <div class="row">
                      <a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #d13a36;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 25%;">-4%</a>
                    </div>
                    <div class="row">
                      <span class="badge" style="font-size: 17px;background-color: #fff; margin: 25%; color: #000000;" id="nomFormation1">text 1</span>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/img/arrow_top_15607.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style="margin-left: 25%;margin-right: 25%;margin-top: 25%;margin-bottom: 5%;">
                    </div>
                    <div class="row">
                      <a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #03aa89; margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 25%;">22,5%</a>
                    </div>
                    <div class="row">
                      <span class="badge" style="font-size: 17px;background-color: #fff; margin: 25%;color: #000000;" id="nomFormation1">text 2</span>
                    </div>
                  </div>
                </div>
              </div>            
            </div>
          </div> 
    </div>
    <div class="col-lg-4">
            <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-clock-o"></i> Titre 2
                </h3>
            </div>
            <div class="panel-body" style="padding: 0px 15px;">
              <div class="row">
                <div id="container4"></div>
              </div>            
            </div>
          </div> 
    </div>
</div>  
<div class="row" id="row2">
  <div class="col-lg-12">
            <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-clock-o"></i> Titre 3
                </h3>
            </div>
            <div class="panel-body" style="padding: 0px 15px;">
              <div class="row">
                <div id="container5" style="overflow: hidden;width: 100%;"></div>
              </div>            
            </div>
          </div> 
    </div>
</div>    
      
<div class="row" id="row3">
  <div class="col-lg-12">
            <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-clock-o"></i> Titre 4
                </h3>
            </div>
            <div class="panel-body" style="padding: 0px 15px;">
              <div class="row">
                <div class="col-lg-6">
                  <div id="container7" style="overflow: hidden;width: 100%;"></div>
                </div>
                <div class="col-lg-6">
                  <div id="container8" style="overflow: hidden;width: 100%;"></div>
                </div>
                
              </div>            
            </div>
          </div> 
    </div>
    <div class="col-lg-12">
            <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-clock-o"></i> Titre 5
                </h3>
            </div>
            <div class="panel-body" style="padding: 0px 15px;">
              <div class="row">
                <div class="col-lg-6">
                  <div id="container9" style="overflow: hidden;width: 100%;"></div>
                </div>
                <div class="col-lg-6">
                  <div id="container10" style="overflow: hidden;width: 100%;"></div>
                </div>
                
              </div> 
              <div class="row">
                <div class="col-lg-12">
                  <div id="container11" style="overflow: hidden;width: 100%;"></div>
                </div>
              </div>           
            </div>
          </div> 
    </div>
</div>   
<div class="row" id="row4">
  <div class="col-lg-12">
    <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-clock-o"></i> Titre 6
                </h3>
            </div>
            <div class="panel-body" style="padding: 0px 15px;">
              <div class="row">
                <div class="col-lg-12">
                  <div id="container12" style="overflow: hidden;width: 100%;"></div>
                </div>
                
                
              </div> 
                        
            </div>
          </div>
  </div>
  
</div>
</body>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/javascript/jquery-3.5.1.js"></script>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/javascript/highcharts.js"></script>

<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/javascript/Chart.min.js"></script>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/javascript/conToKM.js"></script>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/javascript/accessibility.js"></script>
<script type="/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/javascript/moment-with-locales.js"></script>
<script type="/sites/DemoPWA/_catalogs/masterpage/Dashboard/BH_Confirmite/javascript/custom.min.js"></script>

<script type="text/javascript"> 

  function loadPieChart1() {
    Highcharts.chart('container1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares in May, 2020'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Chrome',
                y: 70,
                sliced: true,
                selected: true
            }, {
                name: 'Edge',
                y: 30
            }]
        }]
    });
  }
  loadPieChart1();
  function loadBarchart1(){
    Highcharts.chart('container2', {
        chart: {
            type: 'bar'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
         
        plotOptions: {
            series: {
                pointWidth: 20
            }
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
  }
  loadBarchart1();

  function loadBarchart2() {
    $('#container4').highcharts({
      chart: {
        type: 'column',
        backgroundColor: '#fff'
      },
      title: {
        text: 'Web Skills People are Envious Of',
        style: {  
         color: '#000'
        }
      },
      xAxis: {
        tickWidth: 0,
        labels: {
         style: {
           color: '#000',
           }
         },
        categories: [
          'Management', 
          'Marketing', 
          'Law', 
          'Back End', 
          'Front End', 
          'Audio/Video', 
          'Database',
          'Servers',
          'Writing',
          'Design'
        ]
      },
      yAxis: {
        gridLineWidth: .5,
        gridLineDashStyle: 'dash',
        gridLineColor: 'black',
        title: {
          text: '',
          style: {
           color: '#fff'
           }
        },
        labels: {
          formatter: function() {
            return Highcharts.numberFormat(this.value, 0, '', ',');
          },
          style: {
            color: '#fff',
          }
        }
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false
      },
      tooltip: {
        valuePrefix: ''
      },
      plotOptions: {
        column: {
          borderRadius: 0,
          pointPadding: 0,
          groupPadding: 0.05
        } 
      },
      series: [{
        name: 'People',
        data: [
          690, 
          938, 
          612, 
          4250, 
          2852, 
          1002, 
          728,
          1156,
          956,
          4487
        ]
      }]
    });
  }
  loadBarchart2();
    function loadBarchart3() {
    $('#container5').highcharts({
      chart: {
        type: 'column',
        backgroundColor: '#fff'
      },
      title: {
        text: 'Web Skills People are Envious Of',
        style: {  
         color: '#000'
        }
      },
      xAxis: {
        tickWidth: 0,
        labels: {
         style: {
           color: '#000',
           }
         },
        categories: [
          'Management', 
          'Marketing', 
          'Law', 
          'Back End', 
          'Front End', 
          'Audio/Video', 
          'Database',
          'Servers',
          'Writing',
          'Design'
        ]
      },
      yAxis: {
        gridLineWidth: .5,
        gridLineDashStyle: 'dash',
        gridLineColor: 'black',
        title: {
          text: '',
          style: {
           color: '#fff'
           }
        },
        labels: {
          formatter: function() {
            return Highcharts.numberFormat(this.value, 0, '', ',');
          },
          style: {
            color: '#fff',
          }
        }
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false
      },
      tooltip: {
        valuePrefix: ''
      },
      plotOptions: {
        column: {
          borderRadius: 0,
          pointPadding: 0,
          groupPadding: 0.05
        } 
      },
      series: [{
        name: 'People',
        data: [
          690, 
          938, 
          612, 
          4250, 
          2852, 
          1002, 
          728,
          1156,
          956,
          4487
        ]
      }]
    });
  }
  loadBarchart3();
  function loadDonutChart() {
    Highcharts.chart('container7', {
      colors: ['#01BAF2', '#71BF45', '#FAA74B', '#B37CD2'],
      chart: {
          type: 'pie'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      title: {
          text: 'February 2020 Norway passenger auto registrations'
      },
      subtitle: {
          text: 'Source:<a href="https://cleantechnica.com/2020/03/07/pioneering-norway-rises-above-68-plug-in-vehicle-market-share-in-february/">cleantechnica</a>'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '{point.name}: {y} %'
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'Registrations',
          colorByPoint: true,
          innerSize: '75%',
          data: [{
              name: 'EV',
              y: 68.1
          }, {
              name: 'Hybrids',
              y: 11.0
          }, {
              name: 'Diesel',
              y: 11.2
          }, {
              name: 'Petrol',
              y: 9.7
          }]
      }]
  });
  }
  loadDonutChart();
  function loadMixChart() {
    const series=[
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0]
];
const sum=[0,0,0,0,0,0,0,0,0,0,0,0];
for(let i=0,il=series.length; i<il; i++){
  
  for(let j=0; j<12; j++){
    series[i][j]=Math.round((Math.random()*100000)-35000)/100;
    sum[j]+=series[i][j];
  }
}
  //console.log(series);
  //console.log(sum);

Highcharts.chart('container8', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: ''
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{
        title: {
            text: '£'
        }
/*
    },{
        title: {
            text: '£'
        }
*/
    }],
    tooltip: {
        valueDecimals: 2,
        valuePrefix: '£ ',
        shared: true
    },
    series: [
    {
        name: 'Profit',
        type: 'column',
        data: sum,
        yAxis: 0
    },{
        name: 'Part #1',
//        type: 'column',
        type: 'line',
        data: series[0],
        marker:{
          enabled:false
        }
    }, {
        name: 'Part #2',
//        type: 'column',
        type: 'line',
        data: series[1],
        marker:{
          enabled:false
        }
    }, {
        name: 'Part #3',
//        type: 'column',
        type: 'line',
        data: series[2],
        marker:{
          enabled:false
        }
    }, {
        name: 'Part #4',
//        type: 'column',
        type: 'line',
        data: series[3],
        marker:{
          enabled:false
        }
    }, {
        name: 'Part #5',
//        type: 'column',
        type: 'line',
        data: series[4],
        marker:{
          enabled:false
        }
    }]
});
  }
  loadMixChart();
  function loadPieChart2() {
    Highcharts.chart('container9', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares in May, 2020'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Chrome',
                y: 70,
                sliced: true,
                selected: true
            }, {
                name: 'Edge',
                y: 30
            }]
        }]
    });
  }
  loadPieChart2();

  function loadBarchart4() {
    $('#container10').highcharts({
      chart: {
        type: 'column',
        backgroundColor: '#fff'
      },
      title: {
        text: 'Web Skills People are Envious Of',
        style: {  
         color: '#000'
        }
      },
      xAxis: {
        tickWidth: 0,
        labels: {
         style: {
           color: '#000',
           }
         },
        categories: [
          'Management', 
          'Marketing', 
          'Law', 
          'Back End', 
          'Front End', 
          'Audio/Video', 
          'Database',
          'Servers',
          'Writing',
          'Design'
        ]
      },
      yAxis: {
        gridLineWidth: .5,
        gridLineDashStyle: 'dash',
        gridLineColor: 'black',
        title: {
          text: '',
          style: {
           color: '#fff'
           }
        },
        labels: {
          formatter: function() {
            return Highcharts.numberFormat(this.value, 0, '', ',');
          },
          style: {
            color: '#fff',
          }
        }
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false
      },
      tooltip: {
        valuePrefix: ''
      },
      plotOptions: {
        column: {
          borderRadius: 0,
          pointPadding: 0,
          groupPadding: 0.05
        } 
      },
      series: [{
        name: 'People',
        data: [
          690, 
          938, 
          612, 
          4250, 
          2852, 
          1002, 
          728,
          1156,
          956,
          4487
        ]
      }]
    });
  }
  loadBarchart4();

    function loadMixChart1() {
    const series=[
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0]
];
const sum=[0,0,0,0,0,0,0,0,0,0,0,0];
for(let i=0,il=series.length; i<il; i++){
  
  for(let j=0; j<12; j++){
    series[i][j]=Math.round((Math.random()*100000)-35000)/100;
    sum[j]+=series[i][j];
  }
}
  //console.log(series);
  //console.log(sum);

Highcharts.chart('container11', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: ''
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{
        title: {
            text: '£'
        }
/*
    },{
        title: {
            text: '£'
        }
*/
    }],
    tooltip: {
        valueDecimals: 2,
        valuePrefix: '£ ',
        shared: true
    },
    series: [
    {
        name: 'Profit',
        type: 'column',
        data: sum,
        yAxis: 0
    },{
        name: 'Part #1',
//        type: 'column',
        type: 'line',
        data: series[0],
        marker:{
          enabled:false
        }
    }, {
        name: 'Part #2',
//        type: 'column',
        type: 'line',
        data: series[1],
        marker:{
          enabled:false
        }
    }, {
        name: 'Part #3',
//        type: 'column',
        type: 'line',
        data: series[2],
        marker:{
          enabled:false
        }
    }, {
        name: 'Part #4',
//        type: 'column',
        type: 'line',
        data: series[3],
        marker:{
          enabled:false
        }
    }, {
        name: 'Part #5',
//        type: 'column',
        type: 'line',
        data: series[4],
        marker:{
          enabled:false
        }
    }]
});
  }
  loadMixChart1();

   function loadBarchart5() {
    $('#container12').highcharts({
      chart: {
        type: 'column',
        backgroundColor: '#fff'
      },
      title: {
        text: 'Web Skills People are Envious Of',
        style: {  
         color: '#000'
        }
      },
      xAxis: {
        tickWidth: 0,
        labels: {
         style: {
           color: '#000',
           }
         },
        categories: [
          'Management', 
          'Marketing', 
          'Law', 
          'Back End', 
          'Front End', 
          'Audio/Video', 
          'Database',
          'Servers',
          'Writing',
          'Design'
        ]
      },
      yAxis: {
        gridLineWidth: .5,
        gridLineDashStyle: 'dash',
        gridLineColor: 'black',
        title: {
          text: '',
          style: {
           color: '#fff'
           }
        },
        labels: {
          formatter: function() {
            return Highcharts.numberFormat(this.value, 0, '', ',');
          },
          style: {
            color: '#fff',
          }
        }
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false
      },
      tooltip: {
        valuePrefix: ''
      },
      plotOptions: {
        column: {
          borderRadius: 0,
          pointPadding: 0,
          groupPadding: 0.05
        } 
      },
      series: [{
        name: 'People',
        data: [
          690, 
          938, 
          612, 
          4250, 
          2852, 
          1002, 
          728,
          1156,
          956,
          4487
        ]
      }]
    });
  }
  loadBarchart5();
</script>
    
</body>