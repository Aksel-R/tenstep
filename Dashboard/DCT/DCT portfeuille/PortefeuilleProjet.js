
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Demo Risks Issues</title>

    <!-- Bootstrap -->
    <link href="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->

    <link href="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/css/custom1.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/css/jquery.dataTables.min.css">


  
   <!-- Compiled and minified CSS -->


<style>




   #headercolor{
    background:#0072c6;
    padding:10px;
    margin: 0 0 10px 0;
    text-align:center;
    border-radius : 15px 15px 0px 0px;
  }

    #headercolor span{
    float: left;
    padding-top: 10px;
  }

    .smallRisks {
    font-size: 260%;
    float: none;
    font-weight: bold;
    color : white;
  }

  #tableaux
{
   border-radius: 1em;
  overflow: hidden;
}

   #tableaux th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #0072c6;
    color: white;
  }

   #tableaux1 th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #0072c6;
    color: white;
  }

  #Scooptab th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #0072c6;
    color: white;
    text-align:center;
  }




  #Scooptab tr > *:nth-child(1) {


    width: 200px;
    text-align:left;
  }

  #Scooptab td{
    text-align:center;
  }



  #tableaux td{
    text-align:center;
  }

  #tableaux2 th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #0072c6;
    color: white;
  }

    #tableaux3 th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #0072c6;
    color: white;
  }



  #mylist1 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-left:50px;
    border-radius : 15px 15px 0px 0px;
  }

  #mylist2 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    //width: 15%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    border-radius : 15px 15px 0px 0px;
  }

  #mylist3 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    //width: 15%;
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


#tableaux tr > *:nth-child(1) {
    background-color: #0072c6;
    color: white;
    text-align:left;
}

#tableaux2 tr > *:nth-child(1) {
    background-color: #0072c6;
    color: white;
}

#tableaux3 tr > *:nth-child(1) {
    background-color: #0072c6;
    color: white;
}


#tableaux3S tr > *:nth-child(1) {
    background-color: #0072c6;
    color: white;
}

    #tableaux3S th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #0072c6;
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
    border: 5px solid firebrick;
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

.form-item__element {
  display: inline-block;
  padding: 0.5em;
  vertical-align: middle;
  background: #fff;
  border-radius: 4px;
  border: 1px solid gray;
  width:200px;
}

</style>

  </head>



      <div id="headercolor">
          <div>
            <small class="smallRisks">
              Portefeuille de projet
            </small>

          
            <span style=" float:left; font-weight:bold; color: white; font-size:13px; padding-left:20px;" id="nomProjectName"></span>


      </div>       
      </div>
        

        <!-- top navigation -->
        
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main">

            <div class="row">
                <div class="col-md-12 col-sm-3 col-xs-12">
	                <div class="x_panel">
	                  <div class="x_title">
	                    <h2 style="font-family: cursive; font-style: normal;">Échéancier</h2>
	                    <div class="clearfix"></div>
	                  </div>
	                  <div class="x_content">
	                    <div>
	                    	<canvas id="myChart" width="500" height="180"></canvas>
	                  	</div>
	                  </div>
	                </div>
              	</div>
            </div>


              <div class="row">

              <div class="col-md-12 col-sm-5 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 style="font-family: cursive; font-style: normal;">Capex/Opex</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <div id="canvasInverse"  height="300" width="500"></div>
                  </div>
                </div>
              </div>


              </div>






                    <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel" style="display:none;">
                  <div class="x_title">
                    <h2 style="font-family: cursive; font-style: normal;">Objectif d'évolutions des réalisations par semaine</h2>
                    <div class="clearfix"></div>
              <div class="table-responsive">
                      <table id="tableaux2"  class="table table-striped table-bordered jambo_table bulk_action">
                        <tr>
                        <th></th>
                        <th id = "Firstdate1"></th>
                        <th id = "Seconddate2"></th>
                        <th id = "Thirddate3"></th>
                        <th id = "Fourdate4"></th>
                        <th id = "Fivedate5"></th>
                        <th id = "Sixdate6"></th>
                        <th id = "Sevendate7"></th>
                        <th id = "Heightdate8"</th>
                      
                        </tr>


                        <tbody>
                        
                        <tr><td>Survey</td>
                        <td><div id="survey1" /></td>
                        <td><div id="survey2"/></td>
                        <td><div id="survey3"/></td>
                        <td><div id="survey4"/></td>
                        <td><div id="survey5"/></td>
                        <td><div id="survey6"/></td>
                        <td><div id="survey7"/></td>
                        <td><div id="survey8"/></td>

                        </tr> 


                      <tr>
                        <td>Autorisation</td>
                        <td><div id="Autorisation1"/></td>
                        <td><div id="Autorisation2"/></td>
                        <td><div id="Autorisation3"/></td>
                        <td><div id="Autorisation4"/></td>
                        <td><div id="Autorisation5"/></td>
                        <td><div id="Autorisation6"/></td>
                        <td><div id="Autorisation7"/></td>
                        <td><div id="Autorisation8"/></td> </tr>


                        <tr>
                        <td>Génie civil</td>
                        <td><div id="GeniCivil1" /></td>
                        <td><div id="GeniCivil2"/></td>
                        <td><div id="GeniCivil3"/></td>
                        <td><div id="GeniCivil4"/></td>
                        <td><div id="GeniCivil5"/></td>
                        <td><div id="GeniCivil6"/></td>
                        <td><div id="GeniCivil7"/></td>
                        <td><div id="GeniCivil8"/></td>
                        </tr> 

                        <tr>
                        <td>Electrification</td>
                        <td><div id="ValElelect1" /></td>
                        <td><div id="ValElelect2"/></td>
                        <td><div id="ValElelect3"/></td>
                        <td><div id="ValElelect4"/></td>
                        <td><div id="ValElelect5"/></td>
                        <td><div id="ValElelect6"/></td>
                        <td><div id="ValElelect7"/></td>
                        <td><div id="ValElelect8"/></td>

                        </tr>
                        <tr>
                        <td>Tirage FO</td>
                        <td><div id="TirageFO1" /></td>
                        <td><div id="TirageFO2"/></td>
                        <td><div id="TirageFO3"/></td>
                        <td><div id="TirageFO4"/></td>
                        <td><div id="TirageFO5"/></td>
                        <td><div id="TirageFO6"/></td>
                        <td><div id="TirageFO7"/></td>
                        <td><div id="TirageFO8"/></td>

                        </tr>

                        <tr>
                        <td>Installation équipement</td>
                        <td><div id="install1" /></td>
                        <td><div id="install2"/></td>
                       <td><div id="install3"/></td>
                        <td><div id="install4"/></td>
                        <td><div id="install5"/></td>
                        <td><div id="install6"/></td>
                        <td><div id="install7"/></td>
                        <td><div id="install8"/></td>

                        </tr> 

                        <tr>
                        <td>Réception de site</td>
                        <td><div id="recptsite1" /></td>
                        <td><div id="recptsite2"/></td>
                        <td><div id="recptsite3"/></td>
                        <td><div id="recptsite4"/></td>
                        <td><div id="recptsite5"/></td>
                        <td><div id="recptsite6"/></td>
                        <td><div id="recptsite7"/></td>
                        <td><div id="recptsite8"/></td>

                        </tr> 

                        <tr>
                        <td>SWAP</td>
                        <td><div id="SWAP1" /></td>
                        <td><div id="SWAP2"/></td>
                        <td><div id="SWAP3"/></td>
                        <td><div id="SWAP4"/></td>
                        <td><div id="SWAP5"/></td>
                        <td><div id="SWAP6"/></td>
                        <td><div id="SWAP7"/></td>
                        <td><div id="SWAP8"/></td>

                        </tr> 
                        </tbody> 

                      </table>
                    </div>

                    <div class="table-responsive">
                      <table id="tableaux3"  class="table table-striped table-bordered jambo_table bulk_action">
                        <tr>
                        <th></th>
                        
                         <th id = "Firstdate1VDSLPOTS"></th>
                        <th id = "Seconddate2VDSLPOTS"></th>
                        <th id = "Thirddate3VDSLPOTS"></th>
                        <th id = "Fourdate4VDSLPOTS"></th>
                        <th id = "Fivedate5VDSLPOTS"></th>
                        <th id = "Sixdate6VDSLPOTS"></th>
                        <th id = "Sevendate7VDSLPOTS"></th>
                        <th id = "Heightdate8VDSLPOTS"</th>
                      
                        </tr>


                        <tbody>
                         <tr>
                        <td>VDSL</td>
                          <td><div id="VDSL1" /></td>
                          <td><div id="VDSL2"/></td>
                          <td><div id="VDSL3"/></td>
                          <td><div id="VDSL4"/></td>
                          <td><div id="VDSL5"/></td>
                          <td><div id="VDSL6"/></td>
                          <td><div id="VDSL7"/></td>
                          <td><div id="VDSL8"/></td>

                        </tr> 
                        <tr>
                        <td>POTS</td>
                          <td><div id="POTS1" /></td>
                          <td><div id="POTS2"/></td>
                          <td><div id="POTS3"/></td>
                          <td><div id="POTS4"/></td>
                          <td><div id="POTS5"/></td>
                          <td><div id="POTS6"/></td>
                          <td><div id="POTS7"/></td>
                          <td><div id="POTS8"/></td>

                        </tr> 

                        </tbody> 

                      </table>


                    </div>

                    <div class="table-responsive">
                      <table id="tableaux3S"  class="table table-striped table-bordered jambo_table bulk_action">
                        <tr>
                        <th></th>
                        
                        <th id = "Firstdate1VDSLPOTSSWAP"></th>
                        <th id = "Seconddate2VDSLPOTSSWAP"></th>
                        <th id = "Thirddate3VDSLPOTSSWAP"></th>
                        <th id = "Fourdate4VDSLPOTSSWAP"></th>
                        <th id = "Fivedate5VDSLPOTSSWAP"></th>
                        <th id = "Sixdate6VDSLPOTSSWAP"></th>
                        <th id = "Sevendate7VDSLPOTSSWAP"></th>
                        <th id = "Heightdate8VDSLPOTSSWAP"</th>
                      
                        </tr>


                        <tbody>
                         <tr>
                        <td>VDSL</td>
                          <td><div id="VDSL1SWAP" /></td>
                          <td><div id="VDSL2SWAP"/></td>
                          <td><div id="VDSL3SWAP"/></td>
                          <td><div id="VDSL4SWAP"/></td>
                          <td><div id="VDSL5SWAP"/></td>
                          <td><div id="VDSL6SWAP"/></td>
                          <td><div id="VDSL7SWAP"/></td>
                          <td><div id="VDSL8SWAP"/></td>

                        </tr> 
                        <tr>
                        <td>POTS</td>
                          <td><div id="POTS1SWAP" /></td>
                          <td><div id="POTS2SWAP"/></td>
                          <td><div id="POTS3SWAP"/></td>
                          <td><div id="POTS4SWAP"/></td>
                          <td><div id="POTS5SWAP"/></td>
                          <td><div id="POTS6SWAP"/></td>
                          <td><div id="POTS7SWAP"/></td>
                          <td><div id="POTS8SWAP"/></td>

                        </tr> 

                        </tbody> 

                      </table>


                    </div>

                    </div>



                    </div>






              <div class="row">

            
			<div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 style="font-family: cursive; font-style: normal;"></h2>
                    <div class="clearfix"></div>
              	<div class="table-responsive">
                      <table  id="Scooptab" class="table table-striped table-bordered jambo_table bulk_action">
                        
                        <thead>
                        	<tr>
                            	<th class="column-title" id="">Nom du projet</th>
                            	<th class="column-title" id="">Responsables</th>
                            	<th class="column-title" id="">Date début</th>
                            	<th class="column-title" id="">Date fin</th>
                            	<th class="column-title" id="">Direction</th>
                            	<th class="column-title" id="">% Achevé</th>
                          	</tr>
                        </thead>

                        <tbody>
                        </tbody>  

                      </table>
                    </div></div></div></div>
              
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


    <script src="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/javascript/jquery-3.5.1.js"></script>
    <script src="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/javascript/jquery.dataTables.min.js"></script>
    <script src="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/javascript/MainFunctionJs.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <script src="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/javascript/chart.js@2.8.0.js"></script>

    <script src="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/javascript/chartjs-plugin-datalabels@0.5.0"></script>

    <script src="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/javascript/chartjs-plugin-labels.js"></script>


    <!-- Bootstrap -->
    <script src="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/javascript/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/javascript/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/javascript/nprogress.js"></script>
    <!-- iCheck -->
    <script src="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/javascript/icheck.min.js"></script>

    <script src="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/javascript/echarts.min.js"></script>

    
<script src="//cdn.amcharts.com/lib/4/core.js"></script>
<script src="//cdn.amcharts.com/lib/4/charts.js"></script>
<script src="//cdn.amcharts.com/lib/4/themes/animated.js"></script>
   



  <script type="text/javascript" src="/PT/_catalogs/masterpage/Dashboard/javascript/moment-with-locales.js"></script>
 
<script type="text/javascript">


var LinkEcheacier = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Projects?$select=Direction,EtatProjet";
  var responseAllEcheancier = responseAllEcheancier || [];
 function LoadEcheancier(){

    $.ajax({url: LinkEcheacier,   
                      
                                  method: "GET",
                                  dataType: "json",
                                  headers: {Accept: "application/json;odata=verbose"},       
                                  success: function(data) { 
                                    responseAllEcheancier = responseAllEcheancier.concat(data.d.results);
                              if (data.d.__next) {
                                LinkEcheacier = data.d.__next;
                                LoadEcheancier();
                              }    
                                    //var dataResults = data.d.results;              
                    var myLabels=[];
                    var myDataSets1=[];
                    var myDataSets2=[];
                    var myDataSets3=[];
                    var myDataSets4=[];
                    var myDataSets5=[];
                    var newVal=0;
                    var somme1=0;
                    var somme2=0;
                    var somme3=0;
                    var somme4=0;
                    var somme5=0;
            $.each(responseAllEcheancier, function(key, value) 
            {
                 
                
                 var directionPr = value.Direction;
                 var EtatProjetPr = value.EtatProjet;



                if((EtatProjetPr == "Selon le calendrier") && (directionPr!=null)){
                	
                  if (myLabels.indexOf(directionPr)==-1) {
                  	somme1++;
                    myLabels.push(directionPr);
                    myDataSets1.push(somme1);
                  }
                }
                else{
                  myDataSets2[myLabels.indexOf(directionPr)]+=1;
                  
                 }
                 
                 if((EtatProjetPr == "En Avance") && (directionPr!=null)){

                  if (myLabels.indexOf(directionPr)==-1) {
                  	somme2++;
                    myLabels.push(directionPr);
                    myDataSets2.push(somme2);
                  }
                }
                else{
                  
                  
                  myDataSets2[myLabels.indexOf(directionPr)]+=1;
                  
                 }

                if((EtatProjetPr == "En retard") && (directionPr!=null)){

                  if (myLabels.indexOf(directionPr)==-1) {
                  	somme3++;
                    myLabels.push(directionPr);
                    myDataSets3.push(somme3);
                  }
                }
                else{
                  
                  
                  myDataSets1[myLabels.indexOf(directionPr)]+=1;
                  
                 }

                if((EtatProjetPr == "Cloturé") && (directionPr!=null)){

                  if (myLabels.indexOf(directionPr)==-1) {
                  	somme4++;
                    myLabels.push(directionPr);
                    myDataSets4.push(somme4);
                  }
                }
                else{
                 
                  
                  myDataSets4[myLabels.indexOf(directionPr)]+=1;
                  
                 }


                if((EtatProjetPr == "Bloquée") && (directionPr!=null)){

                  if (myLabels.indexOf(directionPr)==-1) {
                  	somme5++;
                    myLabels.push(directionPr);
                    myDataSets5.push(somme5);
                  }
                }
                else{
                  
                  
                  myDataSets5[myLabels.indexOf(directionPr)]+=1;
                  
                 }

                  
            });
             



  var ctxRessource = document.getElementById("myChart").getContext('2d');
  if(window.myChartRessource != undefined){
  window.myChartRessource.destroy();
}
window.myChartRessource = new Chart(ctxRessource, {
    type: 'bar',
    data: {
        labels: myLabels,
        
        datasets: [ {
              label: 'Selon le calendrier',
              fill:false,
            data: myDataSets1,
            backgroundColor: '#2196F3',
            //borderColor: '#103464',
            borderWidth: 1
        },
        
        {
            label: 'En Avance',
              fill:false,
            data: myDataSets2,
            backgroundColor: '#9E9E9E',
            //borderColor:'#E2001A',
            borderWidth: 1
        },
        {
            label: 'En retard',
              fill:false,
            data: myDataSets3,
            backgroundColor: '#FFEB3B',
            //borderColor:'#E2001A',
            borderWidth: 1
        },
        {
            label: 'Cloturé',
              fill:false,
            data: myDataSets4,
            backgroundColor: '#FF9800',
            //borderColor:'#E2001A',
            borderWidth: 1
        },
        {
            label: 'Bloquée',
              fill:false,
            data: myDataSets5,
            backgroundColor: '#bb2912',
            //borderColor:'#E2001A',
            borderWidth: 1
        }

        ]
    },
    options: {
      plugins:{
  labels: {
    render: 'value',
    fontColor: '#000',
    position: 'outside'
  }
},
        scales: {

        	xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Nom des Direction'
          },
      
        }],

             yAxes: [{
            ticks: {
            
                   min: 0,
                   max: 100,
                   callback: function(value){return value+ "%"}
                },  
								scaleLabel: {
                   display: true,
                   labelString: "Percentage"
                }
            }]
        },
        title: {
            display: true,
            text: ' '
        },
        responsive: true,
        
      
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'blue',
               
            }
        }
    }
});

  }
});
  }
LoadEcheancier();

//Capex/Opex

/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

am4core.useTheme(am4themes_animated);

var chart = am4core.create("canvasInverse", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.paddingRight = 30;
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";

var colorSet = new am4core.ColorSet();
colorSet.saturation = 0.4;

chart.data = [
  {
    name: "John",
    fromDate: "2018-01-01 08:00",
    toDate: "2018-01-01 10:00",
    color: colorSet.getIndex(0).brighten(0)
  },
  {
    name: "John",
    fromDate: "2018-01-01 12:00",
    toDate: "2018-01-01 15:00",
    color: colorSet.getIndex(0).brighten(0.4)
  },
  {
    name: "John",
    fromDate: "2018-01-01 15:30",
    toDate: "2019-01-01 21:30",
    color: colorSet.getIndex(0).brighten(0.8)
  },

  {
    name: "Jane",
    fromDate: "2019-01-01 09:00",
    toDate: "2022-01-01 12:00",
    color: colorSet.getIndex(2).brighten(0)
  }

];

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "name";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.inversed = true;

var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.dateFormatter.dateFormat = "yyyy-MM-dd HH:mm";
dateAxis.renderer.minGridDistance = 70;
dateAxis.baseInterval = { count: 30, timeUnit: "minute" };
dateAxis.max = new Date(2018, 0, 1, 24, 0, 0, 0).getTime();
dateAxis.strictMinMax = true;
dateAxis.renderer.tooltipLocation = 0;

var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.columns.template.width = am4core.percent(80);
series1.columns.template.tooltipText = "{name}: {openDateX} - {dateX}";

series1.dataFields.openDateX = "fromDate";
series1.dataFields.dateX = "toDate";
series1.dataFields.categoryY = "name";
series1.columns.template.propertyFields.fill = "color"; // get color from data
series1.columns.template.propertyFields.stroke = "color";
series1.columns.template.strokeOpacity = 1;

chart.scrollbarX = new am4core.Scrollbar();

</script>