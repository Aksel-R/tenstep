
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Demo Risks Issues</title>

    <!-- Bootstrap -->
    <link href="/PT/_catalogs/masterpage/Dashboard/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/PT/_catalogs/masterpage/Dashboard/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->

    <link href="/PT/_catalogs/masterpage/Dashboard/css/custom1.min.css" rel="stylesheet">



  
   <!-- Compiled and minified CSS -->


<style>




   #headercolor{
    background:#0072c6;
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
    background-color: #0072c6;
    color: white;
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

<div id="overlay">
    <div class="spinner"></div>
    <br/>
    Loading...
</div>

      <div id="headercolor">
          <div>
            <small class="smallRisks">
              Tableau de bord de suivi du programme FBB 2020
            </small>

          </div>
            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist1" onchange="MainFilter2(); MainFilter3();">
                 <option value="">Les zones</option>
            </select>
            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist2" onchange="MainFilter();">
                 <option value=""selected disabled>Les régions</option>
            </select>
          <div>

            <span style=" float:left; font-weight:bold; color: white; font-size:13px; padding-left:20px;" id="nomProjectName"></span>


      </div>       
      </div>
        

        <!-- top navigation -->
        
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main">

             <div class="row">

              <div class="col-md-7 col-sm-7 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 style="font-family: cursive; font-style: normal;">Situation globale par phase</h2>
                    <div class="clearfix"></div>
              <div class="table-responsive">
                      <table id="tableaux"  class="table table-striped table-bordered jambo_table bulk_action">
                        <thead>
                          <tr class="headings">
                            <th class="column-title"></th>
                            <th class="column-title">Total planifié</th>
                            <th class="column-title">Achevé</th>
                            <th class="column-title">%Achevé</th>
                            <th class="column-title">%Achevé dans les délais</th>
                            <th class="column-title">%Achevé hors délais</th>
                            </th>
                          </tr>
                           
                           

                        </thead>

                        <tbody>
                        

                        <tr><td>Survey</td><td><div  id="verifier" /></td><td><div id="SurveyComplete"/></td><td id="SurveyCompletePercent"></td><td id="SurveyCompleteInDeadlines"></td><td id="SurveyOutOfTime"></td></tr> 
                        <tr><td>Autorisation</td><td><div  id="Autorisation" /></td><td><div id="AutorisationComplete"/></td><td id="AutorisationCompletePercent"></td><td id="AutorisationCompleteInDeadlines"></td><td id="AutorisationOutOfTime"></td></tr> 
                        <tr><td>Génie civil</td><td><div  id="gCivil" /></td><td><div id="civilComplete"/></td><td id="civilCompletePercent"></td><td id="civilCompleteInDeadlines" ></td><td id="civilOutOfTime" ></td></tr>
                        <tr><td>Electrification</td><td><div  id="Electrification" /></td><td><div id="ElectrificationComplete"/></td><td id="ElectrificationCompletepercent"></td><td id="ElectrificationCompleteInDeadlines"></td><td id="ElectrificationOutOfTime"></td></tr>
                        <tr><td>Tirage FO</td><td><div  id="TirageFo" /></td><td><div id="TirageComplete"/></td><td id="TirageCompletePercent"></td><td id="TirageCompleteInDeadlines"></td><td id="TirageOutOfTime"></td></tr>
                        <tr><td>Installation équipement</td><td><div  id="Installation" /></td><td><div id="InstallationComplete"/></td><td id="InstallationCompletePercent"></td><td id="InstallationCompleteInDeadlines"></td><td id="InstallationOutOfTime"></td></tr>
                        <tr><td>Réception de site</td><td><div  id="Reception" /></td><td><div id="ReceptionComplete"/></td><td id="ReceptionCompletePercent"></td><td id="ReceptionCompleteInDeadlines"></td><td id="ReceptionOutOfTime"></td></tr>
                        <tr><td>Basculement et monitoring</td><td><div  id="SWAP" /></td><td><div id="SWAPComplete"/></td><td id="SWAPCompletePercent"></td><td id="SWAPCompleteInDeadlines"></td><td id="SWAPOutOfTime"></td></tr>






                        </tbody> 

                      </table>
                    </div></div></div></div>


                    <div class="col-md-5 col-sm-3 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 style="font-family: cursive; font-style: normal;">Situation des réalisations par phase</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                     <div>
                    <canvas id="myChart" width="500" height="360"></canvas>
                  
                  </div>
                  </div>
                </div>
              </div>

              </div>


              <class="row">
               <div class="col-md-7 col-sm-7 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 style="font-family: cursive; font-style: normal;">Evolution des réalisations par semaine</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <canvas id="canvas"  height="200" width="500"></canvas>
                  </div>
                </div>
              </div>

              <div class="col-md-5 col-sm-5 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 style="font-family: cursive; font-style: normal;">Reste à réaliser par semaine</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <canvas id="canvasInverse"  height="300" width="500"></canvas>
                  </div>
                </div>
              </div>


              </div>






                    <div class="col-md-7 col-sm-7 col-xs-12" style="display:none;">
                <div class="x_panel">
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
                    </div></div></div>



                    </div>






              <div class="row">

              <div class="col-md-5 col-sm-5 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 style="font-family: cursive; font-style: normal;">Prévision d'installation</h2>
                    <div class="clearfix"></div>
              <div class="table-responsive">
                      <table  id="tableaux1" class="table table-striped table-bordered jambo_table bulk_action">
                        <thead>
                          <tr class="headings">
                            <th class="column-title">Zone</th>
                            <th class="column-title">Région</th>
                            <th class="column-title" id="nextWeek1"></th>
                            <th class="column-title" id="nextWeek2"></th>
                          </tr>
                         
                        </thead>  
                        <tbody>
                      
              <tr><td rowspan="5">ZONE TUNIS</td></tr>
                  <tr><td>Ariana</td><td><div id="ArianaS1"/></td><td><div id="ArianaS2"/></td></tr>
                <tr><td>Ben Arous</td><td><div id="BenArousS1"/></td><td><div id="BenArousS2"/></td></tr>
                  <tr><td>Tunis</td><td><div id="TunisS1"/></td><td><div id="TunisS2"/></td></tr>
                  <tr><td>Manouba</td><td><div id="ManoubaS1"/></td><td><div id="ManoubaS2"/></td></tr>
                  

               <tr><td rowspan="7">ZONE CENTRE</td></tr>
                  <tr><td>Sidi Bouzid</td><td><div id="SidiBouzidS1"/></td><td><div id="SidiBouzidS2"/></td></tr>
                <tr><td>Mahdia</td><td><div id="MahdiaS1"/></td><td><div id="MahdiaS2"/></td></tr>
                  <tr><td>Monastir</td><td><div id="MonastirS1"/></td><td><div id="MonastirS2"/></td></tr>
                  <tr><td>Sousse</td><td><div id="SousseS1"/></td><td><div id="SousseS2"/></td></tr>
                  <tr><td>Kasserine</td><td><div id="KasserineS1"/></td><td><div id="KasserineS2"/></td></tr>
                  <tr><td>Kairouan</td><td><div id="KairouanS1"/></td><td><div id="KairouanS2"/></td></tr>
                  

              <tr><td rowspan="8">ZONE NORD</td></tr>
                  <tr><td>Kef</td><td><div id="KefS1"/></td><td><div id="KefS2"/></td></tr>
                <tr><td>Béja</td><td><div id="BéjaS1"/></td><td><div id="BéjaS2"/></td></tr>
                  <tr><td>Bizerte</td><td><div id="BizerteS1"/></td><td><div id="BizerteS2"/></td></tr>
                  <tr><td>Jendouba</td><td><div id="JendoubaS1"/></td><td><div id="JendoubaS2"/></td></tr>
                  <tr><td>Nabeul</td><td><div id="NabeulS1"/></td><td><div id="NabeulS2"/></td></tr>
                  <tr><td>Siliana</td><td><div id="SilianaS1"/></td><td><div id="SilianaS2"/></td></tr>
                  <tr><td>Zaghouan</td><td><div id="ZaghouanS1"/></td><td><div id="ZaghouanS2"/></td></tr>

              <tr><td rowspan="8">ZONE SUD</td></tr>
                  <tr><td>Gabes</td><td><div id="GabesS1"/></td><td><div id="GabesS2"/></td></tr>
                <tr><td>Gafsa</td><td><div id="GafsaS1"/></td><td><div id="GafsaS2"/></td></tr>
                  <tr><td>Kebili</td><td><div id="KebiliS1"/></td><td><div id="KebiliS2"/></td></tr>
                  <tr><td>Médenine</td><td><div id="MédenineS1"/></td><td><div id="MédenineS2"/></td></tr>
                  <tr><td>Sfax</td><td><div id="SfaxS1"/></td><td><div id="SfaxS2"/></td></tr>
                  <tr><td>Tataouine</td><td><div id="TataouineS1"/></td><td><div id="TataouineS2"/></td></tr>
                  <tr><td>Tozeur</td><td><div id="TozeurS1"/></td><td><div id="TozeurS2"/></td></tr>
                        </tbody>  

                      </table>
                    </div></div></div></div>



            
<div class="col-md-7 col-sm-5 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 style="font-family: cursive; font-style: normal;">Planifiés VS Réalisés</h2>
                    <div class="clearfix"></div>
              <div class="table-responsive">
                      <table  id="Scooptab" class="table table-striped table-bordered jambo_table bulk_action">
                        <thead>
                            <th class="column-title" id=""></th>
                            <th class="column-title" id="">Planifiés</th>
                            <th class="column-title" id="">Réalisés</th>
                          </tr>
                         
                        </thead>  
                        <tbody>

                            <tr><td>Survey</td><td><div  id="SurveyPlan" /></td><td><div id="SurveyRealiser"/></td></tr> 
                            <tr><td>Autorisation</td><td><div  id="AutorisationPlan" /></td><td><div id="AutorisationRealiser"/></td></tr> 
                            <tr><td>Génie civil</td><td><div  id="gCivilPlan" /></td><td><div id="civilRealiser"/></td></tr>
                            <tr><td>Electrification</td><td><div  id="ElectrificatioPlan" /></td><td><div id="ElectrificationRealiser"/></td></tr>
                            <tr><td>Tirage FO</td><td><div  id="TirageFoPlan" /></td><td><div id="TirageRealiser"/></td></tr>
                            <tr><td>Installation équipement</td><td><div  id="InstallationPlannif" /></td><td><div id="InstallationRealiser"/></td></tr>
                            <tr><td>Réception de site</td><td><div  id="ReceptionPlan" /></td><td><div id="ReceptionRealiser"/></td></tr>
                            <tr><td>Basculement et monitoring</td><td><div  id="BasculementPlan" /></td><td><div id="BasculementRealiser"/></td></tr>
              
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



    <script src="/PT/_catalogs/masterpage/Dashboard/javascript/FiltrageDuplicate/Dashboard_TT_filtrage2_duplicate.js"></script>
    <script src="/PT/_catalogs/masterpage/Dashboard/javascript/FiltrageDuplicate/Dashboard_TT_filtrage1_duplicate.js"></script>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <script src="/PT/_catalogs/masterpage/Dashboard/javascript/chart.js@2.8.0.js"></script>

    <script src="/PT/_catalogs/masterpage/Dashboard/javascript/chartjs-plugin-datalabels@0.5.0"></script>

    <script src="/PT/_catalogs/masterpage/Dashboard/javascript/chartjs-plugin-labels.js"></script>

    <script src="/PT/_catalogs/masterpage/Dashboard/javascript/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="/PT/_catalogs/masterpage/Dashboard/javascript/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/PT/_catalogs/masterpage/Dashboard/javascript/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/PT/_catalogs/masterpage/Dashboard/javascript/nprogress.js"></script>
    <!-- iCheck -->
    <script src="/PT/_catalogs/masterpage/Dashboard/javascript/icheck.min.js"></script>

    <script src="/PT/_catalogs/masterpage/Dashboard/javascript/echarts.min.js"></script>

   



  <script type="text/javascript" src="/PT/_catalogs/masterpage/Dashboard/javascript/moment-with-locales.js"></script>
 
<script type="text/javascript">
jQuery(document).ready(function() {
    jQuery('#overlay').fadeOut(23000);
});


//-----charger la liste des regions------
function LoadRegionList() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectId%20eq%20guid%27cacd4332-3db2-ea11-a129-b0fc36e2e03c%27%20or%20ProjectId%20eq%20guid%27aade112c-3fb2-ea11-a129-b0fc36e2e03c%27%20or%20ProjectId%20eq%20guid%2762598f36-41b2-ea11-a129-b0fc36e2e03c%27%20or%20ProjectId%20eq%20guid%27246a0f14-42b2-ea11-a129-b0fc36e2e03c%27",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";            
            $.each(dataResults, function(key, value) 
            {           
                    
                var region = value.ProjectName;  
                var prId= value.ProjectId;  
                  
                
                       $('#mylist1').append($('<option>',
                           {
                              text : region,
                              value : prId
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
  _spBodyOnLoadFunctionNames.push("LoadRegionList");




///_api/ProjectData/[en-US]/Tasks?$filter=TaskName%20eq%20%27Survey%27

function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

//-----charger la liste des regions------
/*    var responseRegion = responseRegion || []; 
function LoadRegionList1() {
  var urlRegion = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=TaskName%20eq%20%27Installation équipement%27";
            $.ajax({url:  urlRegion, 
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {   
                                    responseRegion = responseRegion.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlRegion = data.d.__next;
                                            LoadRegionList1();
                                        }
                          var listItemInfo2 = "";            
            $.each(responseRegion, function(key, value) 
            {           
                  
                var region = value.DCT_DRT;  
               
                  
                
                       $('#mylist2').append($('<option>',
                           {
                              text : region,
                              
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
  _spBodyOnLoadFunctionNames.push("LoadRegionList1");
*/






//**********************************************************************************************
//Avant filtrage
var url7 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Survey%27";
    var response7 = response7 || [];  // this variable is used for storing list items
    function GetListItemsSurvey(){
        return $.ajax({
            url: url7,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response7 = response7.concat(data.d.results);
                if (data.d.__next) {
                    url7 = data.d.__next;
                    GetListItemsSurvey();
                }
                  var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Survey = 0;
                  var SurveyComplete = 0;
                  var SurveyCompletePercent = 0;
                  var SurveyCompleteInDeadlines=0;
                  var SurveyOutOfTime=0;
                  var SurveyCompleteInDeadlinesPercent=0;
                  var SurveyOutOfTimePercent=0;

                  var SurveyNewValue=0;


                $.each(response7, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    var ActualFFDate = moment(actualFinishDate).format('YYYY-MM-DD');
                  
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
              

                    var lateFinish=value.TaskFinishDate;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                      

                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                                         
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                                                     
                          if(percentComplete =="100")
                          {
                            SurveyComplete++;
                            
                            if(moment(lateFinishDate).isSameOrBefore(ActualFFDate))
                            {
                              SurveyCompleteInDeadlines++;
                            } 

                          }
                    }


                    Survey =sommes;
                    SurveyOutOfTime = SurveyComplete - SurveyCompleteInDeadlines; 

                });
                
        document.getElementById('verifier').innerHTML = Survey;
                  SurveyCompletePercent = (SurveyComplete / Survey)*100;
                SurveyCompleteInDeadlinesPercent=(SurveyCompleteInDeadlines/Survey)*100;
                SurveyOutOfTimePercent=(SurveyOutOfTime/Survey)*100;
        document.getElementById('SurveyComplete').innerHTML = SurveyComplete;
        document.getElementById('SurveyCompletePercent').innerHTML = parseFloat(SurveyCompletePercent).toFixed(0);
        document.getElementById('SurveyCompleteInDeadlines').innerHTML = parseFloat(SurveyCompleteInDeadlinesPercent).toFixed(0);
        document.getElementById('SurveyOutOfTime').innerHTML = parseFloat(SurveyOutOfTimePercent).toFixed(0);


            }
        });
      }
GetListItemsSurvey();


var url6 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Autorisation%27";
    var response6 = response6 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation(){
        return $.ajax({
            url: url6,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response6 = response6.concat(data.d.results);
                if (data.d.__next) {
                    url6 = data.d.__next;
                    GetListItemsAutorisation();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Autorisation = 0;
                  var AutorisationComplete = 0;
                  var AutorisationCompletePercent = 0;
                  var AutorisationCompleteInDeadlines=0;
                  var AutorisationOutOfTime=0;
                  var AutorisationCompleteInDeadlinesPercent=0;
                  var AutorisationOutOfTimePercent=0;



                $.each(response6, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    moment.locale('fr');
                      var finProjRéel;
                    var debutProjRéel;

                    var actualFinishDate=value.TaskActualFinishDate;
                    var ActualFFDate = moment(actualFinishDate).format('YYYY-MM-DD');
                    
                    var lateFinish=value.TaskFinishDate;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                    
                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    /*var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');*/
                      

                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      
                    
                      sommes++;


                      var percentComplete = value.TaskPercentCompleted;
                          Autorisation++;
                          if(percentComplete =="100")
                          {
                            AutorisationComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(ActualFFDate))
                            {
                               AutorisationCompleteInDeadlines++;
                            }
                          }
                    }



                Autorisation =sommes;
                AutorisationOutOfTime = AutorisationComplete - AutorisationCompleteInDeadlines;

                });
                
                  document.getElementById('Autorisation').innerHTML = Autorisation;
        document.getElementById('AutorisationComplete').innerHTML = AutorisationComplete; 
        AutorisationCompletePercent = (AutorisationComplete / Autorisation)*100;
        document.getElementById('AutorisationCompletePercent').innerHTML = parseFloat(AutorisationCompletePercent).toFixed(0) ;   
        AutorisationCompleteInDeadlinesPercent=(AutorisationCompleteInDeadlines/Autorisation)*100;
        AutorisationOutOfTimePercent=(AutorisationOutOfTime/Autorisation)*100;
        document.getElementById('AutorisationCompleteInDeadlines').innerHTML = parseFloat(AutorisationCompleteInDeadlinesPercent).toFixed(0) ;
        document.getElementById('AutorisationOutOfTime').innerHTML =parseFloat(AutorisationOutOfTimePercent).toFixed(0); 

            }
        });
      }
GetListItemsAutorisation();



 var url5 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Génie Civil%27";
    var response5 = response5 || [];  // this variable is used for storing list items
    function GetListItemsGenieCivil(){
        return $.ajax({
            url: url5,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response5 = response5.concat(data.d.results);
                if (data.d.__next) {
                    url5 = data.d.__next;
                    GetListItemsGenieCivil();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var civil = 0;
                  var civilComplete = 0;
                  var civilCompletePercent = 0;
                  var civilCompleteInDeadlines=0;
                  var civilOutOfTime=0;
                  var civilCompleteInDeadlinesPercent=0;
                  var civilOutOfTimePercent=0;



                $.each(response5, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    moment.locale('fr');
                    var finProjRéel;
                    var debutProjRéel;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                   
                   var actualFinishDate=value.TaskActualFinishDate;
                   var ActiFinishCivil = moment(actualFinishDate).format('YYYY-MM-DD');

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskFinishDate;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                      

                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      
                    if(arrayCustomerID == "Génie Civil")
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            civilComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(ActiFinishCivil))
                            {
                               civilCompleteInDeadlines++;
                            }
                          }


                    }
                    
                  }


                civil =sommes;
                civilOutOfTime = civilComplete-civilCompleteInDeadlines;



                });
                
                  document.getElementById('gCivil').innerHTML = civil;
        document.getElementById('civilComplete').innerHTML = civilComplete; 
        civilCompletePercent = (civilComplete / civil)*100;
        document.getElementById('civilCompletePercent').innerHTML = parseFloat(civilCompletePercent).toFixed(0) ; 
        civilCompleteInDeadlinesPercent=(civilCompleteInDeadlines/civil)*100;
        civilOutOfTimePercent=(civilOutOfTime/civil)*100;
        document.getElementById('civilCompleteInDeadlines').innerHTML = parseFloat(civilCompleteInDeadlinesPercent).toFixed(0) ;
        document.getElementById('civilOutOfTime').innerHTML = parseFloat(civilOutOfTimePercent).toFixed(0);  

            }
        });
      }
GetListItemsGenieCivil();





 var url4 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,TaskActualFinishDate,TaskFinishDate&$filter=TaskName%20eq%20%27Electrification%27";
    var response4 = response4 || [];  // this variable is used for storing list items
    function GetListItemsElectrification(){
        return $.ajax({
            url: url4,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response4 = response4.concat(data.d.results);
                if (data.d.__next) {
                    url4 = data.d.__next;
                    GetListItemsElectrification();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Electrification = 0;
                  var ElectrificationComplete = 0;
                  var ElectrificationCompletepercent = 0;
                  var ElectrificationCompleteInDeadlines=0;
                  var ElectrificationOutOfTime=0;
                  var ElectrificationCompleteInDeadlinesPercent=0;
                  var ElectrificationOutOfTimePercent=0;



                $.each(response4, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    moment.locale('fr');
                    var finProjRéel;
                    var debutProjRéel;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);

                    var actualFinishDate=value.TaskActualFinishDate;
                    var ActFinishElect = moment(actualFinishDate).format('YYYY-MM-DD');

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskFinishDate;
                    var lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                      

                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      
                    if(arrayCustomerID == "Electrification")
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            ElectrificationComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(ActFinishElect))
                            {
                               ElectrificationCompleteInDeadlines++;
                            }
                          }
                          


                    }
                    
                  }


                Electrification =sommes;
                ElectrificationOutOfTime = ElectrificationComplete - ElectrificationCompleteInDeadlines;

                });
                
                  document.getElementById('Electrification').innerHTML = Electrification;
        document.getElementById('ElectrificationComplete').innerHTML = ElectrificationComplete;
        ElectrificationCompletepercent = (ElectrificationComplete / Electrification)*100;
        document.getElementById('ElectrificationCompletepercent').innerHTML = parseFloat(ElectrificationCompletepercent).toFixed(0) ; 
        ElectrificationCompleteInDeadlinesPercent=(ElectrificationCompleteInDeadlines/Electrification)*100;
        ElectrificationOutOfTimePercent=(ElectrificationOutOfTime/Electrification)*100;
        document.getElementById('ElectrificationCompleteInDeadlines').innerHTML = parseFloat(ElectrificationCompleteInDeadlinesPercent).toFixed(0) ;
        document.getElementById('ElectrificationOutOfTime').innerHTML = parseFloat(ElectrificationOutOfTimePercent).toFixed(0);  

            }
        });
      }
GetListItemsElectrification();




 var url3 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskFinishDate,TaskActualFinishDate,TaskLateFinish&$filter=TaskName%20eq%20%27Installation équipement%27";
    var response3 = response3 || [];  // this variable is used for storing list items
    function GetListItemsInstallation(){
        return $.ajax({
            url: url3,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response3 = response3.concat(data.d.results);
                if (data.d.__next) {
                    url3 = data.d.__next;
                    GetListItemsInstallation();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Installation = 0;
                  var InstallationComplete=0;
                  var InstallationCompletePercent=0;
                  var InstallationCompleteInDeadlines=0;
                  var InstallationOutOfTime=0;
                  var InstallationCompleteInDeadlinesPercent=0;
                  var InstallationOutOfTimePercent=0;



                $.each(response3, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    var actualFinishDate=value.TaskActualFinishDate;
                    var InstallFinishdate = moment(actualFinishDate).format('YYYY-MM-DD');
                 
                    var finProjRéel;
                    var debutProjRéel;

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    

                    var lateFinish=value.TaskFinishDate;
                    var lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                    var Identifiant = value.ProjectId;
                      

                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      
                    if(arrayCustomerID == "Installation équipement")
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            InstallationComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(InstallFinishdate))
                            {   
                              InstallationCompleteInDeadlines++;
                            }
                          }

                    }
                    
                  }


                Installation =sommes;
                InstallationOutOfTime = InstallationComplete - InstallationCompleteInDeadlines;

                });
                
                  document.getElementById('Installation').innerHTML = Installation;

                  document.getElementById('InstallationComplete').innerHTML = InstallationComplete; 
                  InstallationCompletePercent = (InstallationComplete / Installation)*100;
                  document.getElementById('InstallationCompletePercent').innerHTML = parseFloat(InstallationCompletePercent).toFixed(0) ;   
                  InstallationCompleteInDeadlinesPercent=(InstallationCompleteInDeadlines/Installation)*100;
                  InstallationOutOfTimePercent=(InstallationOutOfTime/Installation)*100;
                  document.getElementById('InstallationCompleteInDeadlines').innerHTML = parseFloat(InstallationCompleteInDeadlinesPercent).toFixed(0) ;
                  document.getElementById('InstallationOutOfTime').innerHTML = parseFloat(InstallationOutOfTimePercent).toFixed(0);  

            }
        });
      }
GetListItemsInstallation();



 var url2 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Réception de site%27";
    var response2 = response2 || [];  // this variable is used for storing list items
    function GetListItemsRecepSite(){
        return $.ajax({
            url: url2,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response2 = response2.concat(data.d.results);
                if (data.d.__next) {
                    url2 = data.d.__next;
                    GetListItemsRecepSite();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Reception = 0;
                  var ReceptionComplete = 0;
                  var ReceptionCompletePercent = 0;
                  var ReceptionCompleteInDeadlines=0;
                  var ReceptionOutOfTime=0;
                  var ReceptionCompleteInDeadlinesPercent=0;
                  var ReceptionOutOfTimePercent=0;



                $.each(response2, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    var actualFinishDate=value.TaskActualFinishDate;
                    var ReceptionFinishdateReal = moment(actualFinishDate).format('YYYY-MM-DD');
                    var finProjRéel;
                    var debutProjRéel;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                  



                    var finishDate=value.TaskFinishDate;
                    finProj=moment(finishDate).format('L');

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    

                    var lateFinish=value.TaskFinishDate;
                    var lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                    var Identifiant = value.ProjectId;
                      

                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      
                    if(arrayCustomerID == "Réception de site")
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                        
                          if(percentComplete =="100")
                          {
                            ReceptionComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(ReceptionFinishdateReal)){
                            ReceptionCompleteInDeadlines++;
                          }
                          }

                    }
                    
                  }


                Reception =sommes;
                ReceptionOutOfTime = ReceptionComplete - ReceptionCompleteInDeadlines;

                });
                
                document.getElementById('Reception').innerHTML = Reception;

        document.getElementById('ReceptionComplete').innerHTML = ReceptionComplete; 
        ReceptionCompletePercent = (ReceptionComplete / Reception)*100;
        document.getElementById('ReceptionCompletePercent').innerHTML = parseFloat(ReceptionCompletePercent).toFixed(0) ;   
        ReceptionCompleteInDeadlinesPercent=(ReceptionCompleteInDeadlines/Reception)*100;
        ReceptionOutOfTimePercent=(ReceptionOutOfTime/Reception)*100;
        document.getElementById('ReceptionCompleteInDeadlines').innerHTML = parseFloat(ReceptionCompleteInDeadlinesPercent).toFixed(0) ;
        document.getElementById('ReceptionOutOfTime').innerHTML = parseFloat(ReceptionOutOfTimePercent).toFixed(0); 

            }
        });
      }
GetListItemsRecepSite();









 var url1 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Basculement%20et%20Monitoring%27%20and%20TaskName%20eq%20%27Basculement%20et%20monitoring%27";
    var response1 = response1 || [];  // this variable is used for storing list items
    function GetListItems(){
        return $.ajax({
            url: url1,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response1 = response1.concat(data.d.results);
                if (data.d.__next) {
                    url1 = data.d.__next;
                    GetListItems();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var SWAP = 0;
                  var SWAPComplete = 0;
                  var SWAPCompletePercent = 0;
                  var SWAPCompleteInDeadlines=0;
                  var SWAPOutOfTime=0;
                  var SWAPCompleteInDeadlinesPercent=0;
                  var SWAPOutOfTimePercent=0;



                $.each(response1, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    var actualFinishDate=value.TaskActualFinishDate;
                    var BasculementActualFinishdate = moment(actualFinishDate).format('YYYY-MM-DD');
                    var finProjRéel;
                    var debutProjRéel;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                  



                    

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    

                    var lateFinish=value.TaskFinishDate;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                    var Identifiant = value.ProjectId;
                      

                  if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      
                    if((arrayCustomerID == "Basculement et monitoring")||(arrayCustomerID == "Basculement et Monitoring"))
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            SWAPComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(BasculementActualFinishdate)){
                            SWAPCompleteInDeadlines++;
                          }
                          }

                    }
                    
                  }


                SWAP =sommes;
                SWAPOutOfTime = SWAPComplete-SWAPCompleteInDeadlines;

                });
                
                document.getElementById('SWAP').innerHTML = SWAP;

                document.getElementById('SWAPComplete').innerHTML = SWAPComplete; 
        SWAPCompletePercent = (SWAPComplete / SWAP)*100;
        document.getElementById('SWAPCompletePercent').innerHTML = parseFloat(SWAPCompletePercent).toFixed(0) ;     
        SWAPCompleteInDeadlinesPercent=(SWAPCompleteInDeadlines/SWAP)*100;
        SWAPOutOfTimePercent=(SWAPOutOfTime/SWAP)*100;
        document.getElementById('SWAPCompleteInDeadlines').innerHTML = parseFloat(SWAPCompleteInDeadlinesPercent).toFixed(0) ;
        document.getElementById('SWAPOutOfTime').innerHTML = parseFloat(SWAPOutOfTimePercent).toFixed(0);

            }
        });
      }
GetListItems();



 var url8 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Tirage%20FO%27";
    var response8 = response8 || [];  // this variable is used for storing list items
    function GetListItemsTirageFO(){
        return $.ajax({
            url: url8,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response8 = response8.concat(data.d.results);
                if (data.d.__next) {
                    url8 = data.d.__next;
                    GetListItemsTirageFO();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Tirage = 0;
                  var TirageComplete = 0;
                  var TirageCompletePercent = 0;
                  var TirageCompleteInDeadlines=0;
                  var TirageOutOfTime=0;
                  var TirageCompleteInDeadlinesPercent=0;
                  var TirageOutOfTimePercent=0;



                $.each(response8, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    var actualFinishDate=value.TaskActualFinishDate;
                    var finProjRéel = moment(actualFinishDate).format('YYYY-MM-DD');

                    var debutProjRéel;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                  



                    var finishDate=value.TaskFinishDate;
                    finProj=moment(finishDate).format('L');

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                    var Identifiant = value.ProjectId;
                      

                  if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      
                    if(arrayCustomerID == "Tirage FO")
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            TirageComplete++;
                            if(moment(lateFinishDate).isSame(finProjRéel)){
                            TirageCompleteInDeadlines++;
                          }
                          }

                    }
                    
                  }


                Tirage =sommes;
                TirageOutOfTime = TirageComplete - TirageCompleteInDeadlines;

                });
                
                document.getElementById('TirageFo').innerHTML = Tirage;

                document.getElementById('TirageComplete').innerHTML = TirageComplete; 
        TirageCompletePercent = (TirageComplete / Tirage)*100;
        document.getElementById('TirageCompletePercent').innerHTML = parseFloat(TirageCompletePercent).toFixed(0) ;     
        TirageCompleteInDeadlinesPercent=(TirageCompleteInDeadlines/Tirage)*100;
        TirageOutOfTimePercent=(TirageOutOfTime/Tirage)*100;
        document.getElementById('TirageCompleteInDeadlines').innerHTML = parseFloat(TirageCompleteInDeadlinesPercent).toFixed(0) ;
        document.getElementById('TirageOutOfTime').innerHTML = parseFloat(TirageOutOfTimePercent).toFixed(0);

            }
        });
      }
GetListItemsTirageFO();





//******************************************************************************************************************************************************************************


var colors =  ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];

function filterIssuesBarchart()
  {
    var numRows4 = document.getElementById("tableaux").rows.length;
    var tbl = document.getElementById("tableaux");   
    var tr = tbl.getElementsByTagName("tr");
    var itermeidiaryObject = {};
    var myLabels=[];
    var myDataSets=[];

    
    


    
          for(var i=1;i<numRows4;i++)
          {
            if (tr[i].style.display != "none")
            {
            var lab=tbl.rows[i].cells[0].innerText;

            var epn =Number.parseFloat(tbl.rows[i].cells[3].innerText).toFixed(0);

            //console.log("epn: "+epn);
           // console.log("tbl.rows[i].cells[3].innerText: "+tbl.rows[i].cells[3].innerText);
            //console.log("tbl.rows[i].cells[3].value: "+tbl.rows[i].cells[3].value);
            var som = 0;
            
              myLabels.push(lab);
              myDataSets.push(epn);

            var somme = som;
            }
          }
          myLabels.reverse();
          myDataSets.reverse();
          
       
             
       
          var colorscheme = colors.slice(0, myLabels.length);

           var ctx = document.getElementById("myChart").getContext('2d');
if(window.mychartBar != undefined)
{
  window.mychartBar.destroy();
}

    window.mychartBar = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
                labels: myLabels ,
                datasets: [{
                  data: myDataSets,
                  backgroundColor: colorscheme
                }]
            },

        options: {
        responsive: true,
        scales: {
            xAxes: [{
              scaleLabel: {
            display: true,
            labelString: '%Achévement'
          },
                ticks: {
                    beginAtZero: false,
                     // Edit the value according to what you need
                }
            }],
            yAxes: [{
                stacked: true,
                beginAtZero: false

            }]
        },
        title: {
      display: true,
      position: "top",
      fontSize: 18,
      fontColor: "#111"
    },
   legend: {
      display: false
    }

      }
    });
  }
  //_spBodyOnLoadFunctionNames.push("filterIssuesBarchart");
setTimeout(filterIssuesBarchart,15000);



 
 var todayss;
var todayss2;
var todayss3;
var ZONE_TUNIS_Ariana=0;
var ZONE_TUNIS_BenArous=0;
var ZONE_TUNIS_Tunis=0;
var ZONE_TUNIS_Manouba=0;
var ZONE_CENTRE_SidiBouzid=0;
var ZONE_CENTRE_Mahdia=0;
var ZONE_CENTRE_Monastir=0;
var ZONE_CENTRE_Sousse=0;
var ZONE_CENTRE_Kasserine=0;
var ZONE_CENTRE_Kairouan=0;
var ZONE_NORD_Kef=0;
var ZONE_NORD_Béja=0;
var ZONE_NORD_Bizerte=0;
var ZONE_NORD_Jendouba=0;
var ZONE_NORD_Nabeul=0;
var ZONE_NORD_Siliana=0;
var ZONE_NORD_Zaghouan=0;
var ZONE_SUD_Gabes=0;
var ZONE_SUD_Gafsa=0;
var ZONE_SUD_Kebili=0;
var ZONE_SUD_Médenine=0;
var ZONE_SUD_Sfax=0;
var ZONE_SUD_Tataouine=0;
var ZONE_SUD_Tozeur=0;


var responseFirstDate = responseFirstDate || []

function TablePrevisionInstallation()
{   

 





    window.nextWeek1 = moment().day(8);  
  window.nextWeek2 = moment().day(15); 

  window.todayss = moment().day(8);  
  window.todayss2 = moment().day(14); 

          
        //moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
        nextWeek1=moment(nextWeek1).format('DD-MM-YYYY');
              document.getElementById('nextWeek1').innerHTML = nextWeek1; 
              //console.log("todayss: "+todayss);     

        //todayss2=moment(todayss2).format("YYYY-MM-DDThh:mm:ss");
         nextWeek2=moment(nextWeek2).format('DD-MM-YYYY');

              document.getElementById('nextWeek2').innerHTML = nextWeek2;   
          //console.log("todayss2: "+todayss2);
//2020-06-17T08:13:34Z
              
                window.todaysss = moment().day(8);
              var dateTimeFirst = moment(todayss).format("YYYY-MM-DDTHH:mm:ss");
              console.log("La date est"+ dateTimeFirst);
              var dateTimeLast = moment(todayss2).format("YYYY-MM-DDTHH:mm:ss");
              console.log("la deuxiéme date est" + dateTimeLast);
 var urlFirstDate = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=TaskStartDate ge datetime'"+dateTimeFirst+"' and TaskFinishDate lt datetime'"+dateTimeLast+"' and TaskName eq 'Installation équipement'";
              
              $.ajax({url: urlFirstDate, 
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data){
                                    responseFirstDate = responseFirstDate.concat(data.d.results);
                                    if (data.d.__next) {
                                        urlFirstDate = data.d.__next;
                                        TablePrevisionInstallation();
                                    } 

                                  
            $.each(responseFirstDate, function(key, value) 
            {           
                 moment.locale('fr');
                  
                    var Identifiant = value.ProjectId;
                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                    var task = value.TaskName;
                    
                      
                      
                      var drt=value.DCT_DRT;


                     var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskFinishDate;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);

                     
                      var actualStartDate=value.TaskStartDate;
                        debutTask=moment(actualStartDate).format('L');
                      
                      /*if(((moment(debutTask).isAfter(todayss))&&(moment(debutTask).isBefore(todayss2)))){*/
                                       /* if(task == 'Installation équipement')
                                        {*/
                                            if(drt == "ZONE TUNIS.Ariana"){
                                                ZONE_TUNIS_Ariana++;
                                            }
                                               
                                               
                                            if(drt == "ZONE TUNIS.Ben Arous"){
                                                ZONE_TUNIS_BenArous++;
                                            }
                                               
                                            if(drt == "ZONE TUNIS.Tunis"){
                                                 ZONE_TUNIS_Tunis++;
                                            }
                                               
                                               
                                            if(drt == "ZONE TUNIS.Manouba"){
                                                ZONE_TUNIS_Manouba++;
                                            }
                                           
                                            if(drt == "ZONE CENTRE.Sidi Bouzid"){
                                                ZONE_CENTRE_SidiBouzid++;
                                            }
                                           
                                            if(drt == "ZONE CENTRE.Mahdia"){
                                                ZONE_CENTRE_Mahdia++;
                                            }
                                           
                                            if(drt == "ZONE CENTRE.Monastir"){
                                                ZONE_CENTRE_Monastir++;
                                            }
                                       
                                            if(drt == "ZONE CENTRE.Sousse"){
                                                ZONE_CENTRE_Sousse++;    
                                            }
                                           
                                            if(drt == "ZONE CENTRE.Kasserine"){
                                                 ZONE_CENTRE_Kasserine++;

                                            }
                                           
                                            if(drt == "ZONE CENTRE.Kairouan"){
                                                 ZONE_CENTRE_Kairouan++;
                                            }
                                           
                                            if(drt == "ZONE NORD.Kef"){
                                                ZONE_NORD_Kef++;  
                                            }
                                           
                                           
                                            if(drt == "ZONE NORD.Béja"){
                                                ZONE_NORD_Béja++;   
                                                /*console.log("Nom de la tache est "+task);
                                                console.log("debutTask: "+debutTask); */
                                            }
                                           
                                            if(drt == "ZONE NORD.Bizerte"){
                                                ZONE_NORD_Bizerte++;    
                                            }
                                           
                                            if(drt == "ZONE NORD.Jendouba"){
                                                ZONE_NORD_Jendouba++;    
                                            }
                                           
                                           
                                            if(drt == "ZONE NORD.Nabeul"){
                                                ZONE_NORD_Nabeul++;    
                                            }
                                           
                                            if(drt == "ZONE NORD.Siliana"){
                                                ZONE_NORD_Siliana++;    
                                            }
                                           
                                            if(drt == "ZONE NORD.Zaghouan"){
                                                ZONE_NORD_Zaghouan++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Gabes"){
                                                ZONE_SUD_Gabes++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Gafsa"){
                                                ZONE_SUD_Gafsa++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Kebili"){
                                                ZONE_SUD_Kebili++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Médenine"){
                                                ZONE_SUD_Médenine++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Sfax"){
                                                ZONE_SUD_Sfax++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Tataouine"){
                                                ZONE_SUD_Tataouine++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Tozeur"){
                                                ZONE_SUD_Tozeur++;    
                                            }
                                          //}
                     // }               
                      

                                    
                                    
                              
                    
                    }
                    
            });

                    document.getElementById('ArianaS1').innerHTML =ZONE_TUNIS_Ariana;
                    document.getElementById('BenArousS1').innerHTML =ZONE_TUNIS_BenArous;
                    document.getElementById('TunisS1').innerHTML =ZONE_TUNIS_Tunis;
                    document.getElementById('ManoubaS1').innerHTML =ZONE_TUNIS_Manouba;
                    document.getElementById('SidiBouzidS1').innerHTML =ZONE_CENTRE_SidiBouzid;
                    document.getElementById('MahdiaS1').innerHTML =ZONE_CENTRE_Mahdia;
                    document.getElementById('MonastirS1').innerHTML =ZONE_CENTRE_Monastir;
                    document.getElementById('SousseS1').innerHTML =ZONE_CENTRE_Sousse;
                    document.getElementById('KasserineS1').innerHTML =ZONE_CENTRE_Kasserine;
                    document.getElementById('KairouanS1').innerHTML =ZONE_CENTRE_Kairouan;
                    document.getElementById('KefS1').innerHTML =ZONE_NORD_Kef;
                    document.getElementById('BéjaS1').innerHTML =ZONE_NORD_Béja;
                    document.getElementById('BizerteS1').innerHTML =ZONE_NORD_Bizerte;
                    document.getElementById('JendoubaS1').innerHTML =ZONE_NORD_Jendouba;
                    document.getElementById('NabeulS1').innerHTML =ZONE_NORD_Nabeul;
                    document.getElementById('SilianaS1').innerHTML =ZONE_NORD_Siliana;
                    document.getElementById('ZaghouanS1').innerHTML =ZONE_NORD_Zaghouan;
                    document.getElementById('GabesS1').innerHTML =ZONE_SUD_Gabes;
                    document.getElementById('GafsaS1').innerHTML =ZONE_SUD_Gafsa;
                    document.getElementById('KebiliS1').innerHTML =ZONE_SUD_Kebili;
                    document.getElementById('MédenineS1').innerHTML =ZONE_SUD_Médenine;
                    document.getElementById('SfaxS1').innerHTML =ZONE_SUD_Sfax;
                    document.getElementById('TataouineS1').innerHTML =ZONE_SUD_Tataouine;
                    document.getElementById('TozeurS1').innerHTML =ZONE_SUD_Tozeur;

                  
}   
});



}
TablePrevisionInstallation();
//setTimeout(TablePrevisionInstallation, 10000);

//******************************************************************************************************
var ZONE_TUNIS_BenArous1=0;
var ZONE_TUNIS_Tunis1=0;
var ZONE_TUNIS_Manouba1=0;
var ZONE_CENTRE_SidiBouzid1=0;
var ZONE_CENTRE_Mahdia1=0;
var ZONE_CENTRE_Monastir1=0;
var ZONE_CENTRE_Sousse1=0;
var ZONE_CENTRE_Kasserine1=0;
var ZONE_CENTRE_Kairouan1=0;
var ZONE_NORD_Kef1=0;
var ZONE_NORD_Béja1=0;
var ZONE_NORD_Bizerte1=0;
var ZONE_NORD_Jendouba1=0;
var ZONE_NORD_Nabeul1=0;
var ZONE_NORD_Siliana1=0;
var ZONE_NORD_Zaghouan1=0;
var ZONE_SUD_Gabes1=0;
var ZONE_SUD_Gafsa1=0;
var ZONE_SUD_Kebili1=0;
var ZONE_SUD_Médenine1=0;
var ZONE_SUD_Sfax1=0;
var ZONE_SUD_Tataouine1=0;
var ZONE_SUD_Tozeur1=0;

var responseSecondDate = responseSecondDate || [];

function TablePrevisionInstallationSecondDate()
{   
 
  window.todayss4 = moment().day(15); 
  window.todayss5 = moment().day(21);
          

              
                
              var dateTimeFirsts = moment(todayss4).format("YYYY-MM-DDTHH:mm:ss");
              console.log(dateTimeFirsts);
      
              var dateTimeLasts = moment(todayss5).format("YYYY-MM-DDTHH:mm:ss");
              console.log(dateTimeLasts);

              var urlSecondDate = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=TaskStartDate ge datetime'"+dateTimeFirsts+"' and TaskFinishDate lt datetime'"+dateTimeLasts+"' and TaskName eq 'Installation équipement'";
                //$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/Tasks", 
              $.ajax({url: urlSecondDate, 
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data){
                                    responseSecondDate = responseSecondDate.concat(data.d.results);
                                    if (data.d.__next) {
                                        urlSecondDate = data.d.__next;
                                        TablePrevisionInstallationSecondDate();
                                    } 

                          var listItemInfo = ""; 
                            var ZONE_TUNIS_Ariana1=0;




            $.each(responseSecondDate, function(key, value) 
            {           
                 moment.locale('fr');
                  
                    
                     var Identifiant = value.ProjectId;
                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      
                    var task = value.TaskName;
                      
                      var drt=value.DCT_DRT;
                     
                     var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskFinishDate;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);

                     
                      var actualStartDate=value.TaskStartDate;
                        debutTask=moment(actualStartDate).format('L');


                        if(task == 'Installation équipement')
                          {
                         if(drt == "ZONE TUNIS.Ariana"){
                                            ZONE_TUNIS_Ariana1++;
                                        }
                                           
                                           
                                        if(drt == "ZONE TUNIS.Ben Arous"){
                                            ZONE_TUNIS_BenArous1++;
                                        }
                                           
                                        if(drt == "ZONE TUNIS.Tunis"){
                                             ZONE_TUNIS_Tunis1++;
                                        }
                                           
                                           
                                        if(drt == "ZONE TUNIS.Manouba"){
                                            ZONE_TUNIS_Manouba1++;
                                        }
                                           
                                            if(drt == "ZONE CENTRE.Sidi Bouzid"){
                                                ZONE_CENTRE_SidiBouzid1++;
                                            }
                                           
                                            if(drt == "ZONE CENTRE.Mahdia"){
                                                ZONE_CENTRE_Mahdia1++;
                                            }
                                           
                                            if(drt == "ZONE CENTRE.Monastir"){
                                                ZONE_CENTRE_Monastir1++;
                                            }
                                       
                                            if(drt == "ZONE CENTRE.Sousse"){
                                                ZONE_CENTRE_Sousse1++;    
                                            }
                                           
                                            if(drt == "ZONE CENTRE.Kasserine"){
                                                 ZONE_CENTRE_Kasserine1++;

                                            }
                                           
                                            if(drt == "ZONE CENTRE.Kairouan"){
                                                 ZONE_CENTRE_Kairouan1++;
                                            }
                                           
                                            if(drt == "ZONE NORD.Kef"){
                                                ZONE_NORD_Kef1++;  
                                            }
                                           
                                           
                                            if(drt == "ZONE NORD.Béja"){
                                                ZONE_NORD_Béja1++;    
                                            }
                                           
                                            if(drt == "ZONE NORD.Bizerte"){
                                                ZONE_NORD_Bizerte1++;    
                                            }
                                           
                                            if(drt == "ZONE NORD.Jendouba"){
                                                ZONE_NORD_Jendouba1++;    
                                            }
                                           
                                           
                                            if(drt == "ZONE NORD.Nabeul"){
                                                ZONE_NORD_Nabeul1++;    
                                            }
                                           
                                            if(drt == "ZONE NORD.Siliana"){
                                                ZONE_NORD_Siliana1++;    
                                            }
                                           
                                            if(drt == "ZONE NORD.Zaghouan"){
                                                ZONE_NORD_Zaghouan1++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Gabes"){
                                                ZONE_SUD_Gabes1++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Gafsa"){
                                                ZONE_SUD_Gafsa1++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Kebili"){
                                                ZONE_SUD_Kebili1++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Médenine"){
                                                ZONE_SUD_Médenine1++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Sfax"){
                                                ZONE_SUD_Sfax1++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Tataouine"){
                                                ZONE_SUD_Tataouine1++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Tozeur"){
                                                ZONE_SUD_Tozeur1++;    
                                            }
                                        }
                          } 
                    
            });


                    document.getElementById('ArianaS2').innerHTML =ZONE_TUNIS_Ariana1;
                    document.getElementById('BenArousS2').innerHTML =ZONE_TUNIS_BenArous1;
                    document.getElementById('TunisS2').innerHTML =ZONE_TUNIS_Tunis1;
                    document.getElementById('ManoubaS2').innerHTML =ZONE_TUNIS_Manouba1;
                    document.getElementById('SidiBouzidS2').innerHTML =ZONE_CENTRE_SidiBouzid1;
                    document.getElementById('MahdiaS2').innerHTML =ZONE_CENTRE_Mahdia1;
                    document.getElementById('MonastirS2').innerHTML =ZONE_CENTRE_Monastir1;
                    document.getElementById('SousseS2').innerHTML =ZONE_CENTRE_Sousse1;
                    document.getElementById('KasserineS2').innerHTML =ZONE_CENTRE_Kasserine1;
                    document.getElementById('KairouanS2').innerHTML =ZONE_CENTRE_Kairouan1;
                    document.getElementById('KefS2').innerHTML =ZONE_NORD_Kef1;
                    document.getElementById('BéjaS2').innerHTML =ZONE_NORD_Béja1;
                    document.getElementById('BizerteS2').innerHTML =ZONE_NORD_Bizerte1;
                    document.getElementById('JendoubaS2').innerHTML =ZONE_NORD_Jendouba1;
                    document.getElementById('NabeulS2').innerHTML =ZONE_NORD_Nabeul1;
                    document.getElementById('SilianaS2').innerHTML =ZONE_NORD_Siliana1;
                    document.getElementById('ZaghouanS2').innerHTML =ZONE_NORD_Zaghouan1;
                    document.getElementById('GabesS2').innerHTML =ZONE_SUD_Gabes1;
                    document.getElementById('GafsaS2').innerHTML =ZONE_SUD_Gafsa1;
                    document.getElementById('KebiliS2').innerHTML =ZONE_SUD_Kebili1;
                    document.getElementById('MédenineS2').innerHTML =ZONE_SUD_Médenine1;
                    document.getElementById('SfaxS2').innerHTML =ZONE_SUD_Sfax1;
                    document.getElementById('TataouineS2').innerHTML =ZONE_SUD_Tataouine1;
                    document.getElementById('TozeurS2').innerHTML =ZONE_SUD_Tozeur1;
}   
});



}
TablePrevisionInstallationSecondDate();


//******************************************************************************************************




    var responseSurvey = responseSurvey || [];  // this variable is used for storing list items
    function GetListItemsSurveys(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format('L');  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format('L');

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format('L');

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format('L');

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 var urlSurvey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Survey' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Survey' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Survey' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Survey' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlSurvey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey = responseSurvey.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey = data.d.__next;
                    GetListItemsSurveys();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseSurvey, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }
                           
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
               
                ss1 = somme11;

              
               

                document.getElementById('survey1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsSurveys();

    var responseSurvey1 = responseSurvey1 || [];  // this variable is used for storing list items
    function GetListItemsSurveys1(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format('L');  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format('L');

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");
  console.log(sSwap8);

 var urlSurvey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Survey' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Survey' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Survey' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Survey' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";
        return $.ajax({
            url: urlSurvey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey1 = responseSurvey1.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey = data.d.__next;
                    GetListItemsSurveys1();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseSurvey1, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                                    var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('survey2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsSurveys1();




    var responseSurvey2 = responseSurvey2 || [];  // this variable is used for storing list items
    function GetListItemsSurveys2(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format('L');  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format('L');

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlSurvey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Survey' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Survey' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Survey' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Survey' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";
        return $.ajax({
            url: urlSurvey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey2 = responseSurvey2.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey = data.d.__next;
                    GetListItemsSurveys2();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseSurvey2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                    var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('survey3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsSurveys2();



    var responseSurvey3 = responseSurvey3 || [];  // this variable is used for storing list items
    function GetListItemsSurveys3(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format('L');  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlSurvey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Survey' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Survey' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Survey' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Survey' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlSurvey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey3 = responseSurvey3.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey = data.d.__next;
                    GetListItemsSurveys3();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseSurvey3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('survey4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsSurveys3();





    var responseSurvey4 = responseSurvey4 || [];  // this variable is used for storing list items
    function GetListItemsSurveys4(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD");  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlSurvey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Survey' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Survey' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Survey' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Survey' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlSurvey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey4 = responseSurvey4.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey = data.d.__next;
                    GetListItemsSurveys4();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseSurvey4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('survey5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsSurveys4();




    var responseSurvey5 = responseSurvey5 || [];  // this variable is used for storing list items
    function GetListItemsSurveys5(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD");  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");
  console.log(sSwap8);

var urlSurvey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Survey' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Survey' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Survey' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Survey' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";


        return $.ajax({
            url: urlSurvey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey5 = responseSurvey5.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey = data.d.__next;
                    GetListItemsSurveys5();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseSurvey5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                             var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('survey6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsSurveys5();



    var responseSurvey6 = responseSurvey6 || [];  // this variable is used for storing list items
    function GetListItemsSurveys6(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD");  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");
  console.log("the new date" + sSwap7);

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlSurvey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Survey' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Survey' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Survey' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Survey' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlSurvey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey6 = responseSurvey6.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey = data.d.__next;
                    GetListItemsSurveys6();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseSurvey6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('survey7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsSurveys6();



    var responseSurvey7 = responseSurvey7 || [];  // this variable is used for storing list items
    function GetListItemsSurveys7(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

  var urlSurvey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Survey' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Survey' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Survey' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Survey' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlSurvey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey7 = responseSurvey7.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey = data.d.__next;
                    GetListItemsSurveys7();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseSurvey7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('survey8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsSurveys7();






    var responseGenie = responseGenie || [];  // this variable is used for storing list items
    function GetListItemsGenies(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format('L');  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format('L');

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format('L');

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format('L');

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

  console.log("La date de filtrage est" + sSwap8);

 var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie = responseGenie.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsGenies();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseGenie, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                        
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');



                });
               
                ss1 = somme11;

              
               

                document.getElementById('GeniCivil1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsGenies();


    var responseGenie1 = responseGenie1 || [];  // this variable is used for storing list items
    function GetListItemsGenies1(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format('L');  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format('L');

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");
  console.log(sSwap8);

 var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";
        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie1 = responseGenie1.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsGenies1();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseGenie1, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('GeniCivil2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsGenies1();




    var responseGenie2 = responseGenie2 || [];  // this variable is used for storing list items
    function GetListItemsGenies2(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format('L');  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format('L');

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";
        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie2 = responseGenie2.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsGenies2();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseGenie2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   

                });
                ss3 = somme11;


                

                document.getElementById('GeniCivil3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsGenies2();



    var responseGenie3 = responseGenie3 || [];  // this variable is used for storing list items
    function GetListItemsGenies3(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format('L');  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie3 = responseGenie3.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsGenies3();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseGenie3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('GeniCivil4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsGenies3();





    var responseGenie4 = responseGenie4 || [];  // this variable is used for storing list items
    function GetListItemsGenies4(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD");  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie4 = responseGenie4.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsGenies4();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseGenie4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('GeniCivil5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsGenies4();




    var responseGenie5 = responseGenie5 || [];  // this variable is used for storing list items
    function GetListItemsGenies5(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD");  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");
  console.log(sSwap8);

var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";


        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie5 = responseGenie5.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsGenies5();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseGenie5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('GeniCivil6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsGenies5();



    var responseGenie6 = responseGenie6 || [];  // this variable is used for storing list items
    function GetListItemsGenies6(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD");  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");
  console.log("the new date" + sSwap7);

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie6 = responseGenie6.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsGenies6();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseGenie6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('GeniCivil7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsGenies6();



    var responseGenie7 = responseGenie7 || [];  // this variable is used for storing list items
    function GetListItemsGenies7(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

  var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie7 = responseGenie7.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsGenies7();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseGenie7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('GeniCivil8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsGenies7();






    var responseInstallationEquip = responseInstallationEquip || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip = responseInstallationEquip.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsInstallationEquip();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseInstallationEquip, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
               
                ss1 = somme11;

              
               

                document.getElementById('install1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsInstallationEquip();

    var responseInstallationEquip1 = responseInstallationEquip1 || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip1(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";
        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip1 = responseInstallationEquip1.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsInstallationEquip1();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseInstallationEquip1, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('install2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsInstallationEquip1();




    var responseInstallationEquip2 = responseInstallationEquip2 || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip2(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";
        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip2 = responseInstallationEquip2.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsInstallationEquip2();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseInstallationEquip2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                });
                ss3 = somme11;


                

                document.getElementById('install3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsInstallationEquip2();



    var responseInstallationEquip3 = responseInstallationEquip3 || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip3(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip3 = responseInstallationEquip3.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsInstallationEquip3();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseInstallationEquip3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('install4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsInstallationEquip3();





    var responseInstallationEquip4 = responseInstallationEquip4 || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip4(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip4 = responseInstallationEquip4.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsInstallationEquip4();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseInstallationEquip4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('install5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsInstallationEquip4();




    var responseInstallationEquip5 = responseInstallationEquip5 || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip5(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";


        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip5 = responseInstallationEquip5.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsInstallationEquip5();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseInstallationEquip5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('install6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsInstallationEquip5();



    var responseInstallationEquip6 = responseInstallationEquip6 || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip6(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip6 = responseInstallationEquip6.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsInstallationEquip6();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseInstallationEquip6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('install7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsInstallationEquip6();



    var responseInstallationEquip7 = responseInstallationEquip7 || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip7(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

  var urlInstallation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlInstallation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip7 = responseInstallationEquip7.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation = data.d.__next;
                    GetListItemsInstallationEquip7();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseInstallationEquip7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                           var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('install8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsInstallationEquip7();




   var responseAutorisation0 = responseAutorisation0 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation1(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format('L');  

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format('L');

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format('L');

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format('L');

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 

 var urlAutorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Autorisation' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Autorisation' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Autorisation' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Autorisation' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlAutorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation0 = responseAutorisation0.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation = data.d.__next;
                    GetListItemsAutorisation1();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation0, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation1').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation1();
















   var responseAutorisation = responseAutorisation || [];  // this variable is used for storing list items
    function GetListItemsAutorisations(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD");

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 

 var urlAutorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Autorisation' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Autorisation' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Autorisation' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Autorisation' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlAutorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation = responseAutorisation.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation = data.d.__next;
                    GetListItemsAutorisations();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation2').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisations();



















   var responseAutorisation2 = responseAutorisation2 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation2s(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
 window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD");

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 

 var urlAutorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Autorisation' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Autorisation' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Autorisation' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Autorisation' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlAutorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation2 = responseAutorisation2.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation = data.d.__next;
                    GetListItemsAutorisation2s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation3').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation2s();














   var responseAutorisation3 = responseAutorisation3 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation3s(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
 window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD");

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 

 var urlAutorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Autorisation' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Autorisation' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Autorisation' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Autorisation' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlAutorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation3 = responseAutorisation3.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation = data.d.__next;
                    GetListItemsAutorisation3s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation4').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation3s();













   var responseAutorisation4 = responseAutorisation4 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation4s(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
 window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD");

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 

 var urlAutorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Autorisation' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Autorisation' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Autorisation' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Autorisation' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlAutorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation4 = responseAutorisation4.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation = data.d.__next;
                    GetListItemsAutorisation4s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation5').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation4s();











   var responseAutorisation5 = responseAutorisation5 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation5s(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD");

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");
 

 var urlAutorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Autorisation' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Autorisation' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Autorisation' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Autorisation' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlAutorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation5 = responseAutorisation5.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation = data.d.__next;
                    GetListItemsAutorisation5s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                           var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation6').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation5s();










   var responseAutorisation6 = responseAutorisation6 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation6s(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD");

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 

 var urlAutorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Autorisation' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Autorisation' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Autorisation' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Autorisation' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlAutorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation6 = responseAutorisation6.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation = data.d.__next;
                    GetListItemsAutorisation6s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                             var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation7').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation6s();










   var responseAutorisation7 = responseAutorisation7 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation7s(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
 window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD");

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 

 var urlAutorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Autorisation' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Autorisation' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Autorisation' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Autorisation' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlAutorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation7 = responseAutorisation7.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation = data.d.__next;
                    GetListItemsAutorisation7s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation8').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation7s();









   var responseSwap0 = responseSwap0 || [];  // this variable is used for storing list items
    function GetListItemsSwap0s(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
 window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD");

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 

 var urlSwap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlSwap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap0 = responseSwap0.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap = data.d.__next;
                    GetListItemsSwap0s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap0, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                           var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP1').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap0s();
















   var responseSwap = responseSwap || [];  // this variable is used for storing list items
    function GetListItemsSwaps(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
 window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD");

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 

 var urlSwap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlSwap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap = responseSwap.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap = data.d.__next;
                    GetListItemsSwaps();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }

                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP2').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwaps();



















   var responseSwap2 = responseSwap2 || [];  // this variable is used for storing list items
    function GetListItemsSwap2s(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
 window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD");

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 

 var urlSwap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlSwap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap2 = responseSwap2.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap = data.d.__next;
                    GetListItemsSwap2s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                               

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP3').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap2s();














   var responseSwap3 = responseSwap3 || [];  // this variable is used for storing list items
    function GetListItemsSwap3s(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
 window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD");

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 

 var urlSwap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlSwap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap3 = responseSwap3.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap = data.d.__next;
                    GetListItemsSwap3s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP4').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap3s();













   var responseSwap4 = responseSwap4 || [];  // this variable is used for storing list items
    function GetListItemsSwap4s(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
 window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD");

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 

 var urlSwap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlSwap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap4 = responseSwap4.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap = data.d.__next;
                    GetListItemsSwap4s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP5').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap4s();











   var responseSwap5 = responseSwap5 || [];  // this variable is used for storing list items
    function GetListItemsSwap5s(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
 window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD");

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");
 

 var urlSwap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlSwap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap5 = responseSwap5.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap = data.d.__next;
                    GetListItemsSwap5s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                           var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP6').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap5s();










   var responseSwap6 = responseSwap6 || [];  // this variable is used for storing list items
    function GetListItemsSwap6s(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
 window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD");

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 

 var urlSwap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlSwap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap6 = responseSwap6.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap = data.d.__next;
                    GetListItemsSwap6s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP7').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap6s();










   var responseSwap7 = responseSwap7 || [];  // this variable is used for storing list items
    function GetListItemsSwap7s(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 

 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD");

 

 

  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

 

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

 

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

 

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

 

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 

 var urlSwap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

 

        return $.ajax({
            url: urlSwap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap7 = responseSwap7.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap = data.d.__next;
                    GetListItemsSwap7s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP8').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap7s();






    var responseElectr = responseElectr || [];  // this variable is used for storing list items
    function GetListItemsElectr(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 var urlElectri = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Electrification' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Electrification' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Electrification' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Electrification' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlElectri,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr = responseElectr.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri = data.d.__next;
                    GetListItemsElectr();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseElectr, function(key, value)  {
                    var nomProjets = value.ProjectName;
            
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
        


                });
               
                ss1 = somme11;
                console.log("La valeur de electrification est " +  ss1);
                document.getElementById('ValElelect1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsElectr();




    var responseElectr1 = responseElectr1 || [];  // this variable is used for storing list items
    function GetListItemsElectr1(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 var urlElectri = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Electrification' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Electrification' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Electrification' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Electrification' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";
        return $.ajax({
            url: urlElectri,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr1 = responseElectr1.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri = data.d.__next;
                    GetListItemsElectr1();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseElectr1, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('ValElelect2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsElectr1();




    var responseElectr2 = responseElectr2 || [];  // this variable is used for storing list items
    function GetListItemsElectr2(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlElectri = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Electrification' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Electrification' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Electrification' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Electrification' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";
        return $.ajax({
            url: urlElectri,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr2 = responseElectr2.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri = data.d.__next;
                    GetListItemsElectr2();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseElectr2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                       var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('ValElelect3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsElectr2();



    var responseElectr3 = responseElectr3 || [];  // this variable is used for storing list items
    function GetListItemsElectr3(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlElectri = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Electrification' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Electrification' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Electrification' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Electrification' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlElectri,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr3 = responseElectr3.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri = data.d.__next;
                    GetListItemsElectr3();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseElectr3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('ValElelect4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsElectr3();





    var responseElectr4 = responseElectr4 || [];  // this variable is used for storing list items
    function GetListItemsElectr4(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlElectri = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Electrification' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Electrification' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Electrification' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Electrification' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlElectri,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr4 = responseElectr4.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri = data.d.__next;
                    GetListItemsElectr4();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseElectr4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('ValElelect5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsElectr4();




    var responseElectr5 = responseElectr5 || [];  // this variable is used for storing list items
    function GetListItemsElectr5(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlElectri = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Electrification' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Electrification' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Electrification' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Electrification' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";


        return $.ajax({
            url: urlElectri,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr5 = responseElectr5.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri = data.d.__next;
                    GetListItemsElectr5();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseElectr5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('ValElelect6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsElectr5();



    var responseElectr6 = responseElectr6 || [];  // this variable is used for storing list items
    function GetListItemsElectr6(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlElectri = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Electrification' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Electrification' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Electrification' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Electrification' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlElectri,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr6 = responseElectr6.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri = data.d.__next;
                    GetListItemsElectr6();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseElectr6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('ValElelect7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsElectr6();



    var responseElectr7 = responseElectr7 || [];  // this variable is used for storing list items
    function GetListItemsElectr7(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

  var urlElectri = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Electrification' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Electrification' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Electrification' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Electrification' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlElectri,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr7 = responseElectr7.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri = data.d.__next;
                    GetListItemsElectr7();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseElectr7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('ValElelect8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsElectr7();


     var responseReceptSite = responseReceptSite || [];  // this variable is used for storing list items
    function GetListItemsReceptSite(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 var urlReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Réception de site' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Réception de site' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Réception de site' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Réception de site' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";
        return $.ajax({
            url: urlReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite1 = responseReceptSite1.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei = data.d.__next;
                    GetListItemsReceptSite();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseReceptSite1, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('recptsite1').innerHTML =ss2;
  

            }
        });
      }
GetListItemsReceptSite();

    var responseReceptSite1 = responseReceptSite1 || [];  // this variable is used for storing list items
    function GetListItemsReceptSite1(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 var urlReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Réception de site' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Réception de site' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Réception de site' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Réception de site' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";
        return $.ajax({
            url: urlReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite1 = responseReceptSite1.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei = data.d.__next;
                    GetListItemsReceptSite1();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseReceptSite1, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('recptsite2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsReceptSite1();




    var responseReceptSite2 = responseReceptSite2 || [];  // this variable is used for storing list items
    function GetListItemsReceptSite2(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Réception de site' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Réception de site' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Réception de site' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Réception de site' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";
        return $.ajax({
            url: urlReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite2 = responseReceptSite2.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei = data.d.__next;
                    GetListItemsReceptSite2();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseReceptSite2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   

                });
                ss3 = somme11;


                

                document.getElementById('recptsite3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsReceptSite2();



    var responseReceptSite3 = responseReceptSite3 || [];  // this variable is used for storing list items
    function GetListItemsReceptSite3(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Réception de site' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Réception de site' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Réception de site' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Réception de site' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite3 = responseReceptSite3.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei = data.d.__next;
                    GetListItemsReceptSite3();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseReceptSite3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('recptsite4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsReceptSite3();





    var responseReceptSite4 = responseReceptSite4 || [];  // this variable is used for storing list items
    function GetListItemsReceptSite4(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Réception de site' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Réception de site' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Réception de site' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Réception de site' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite4 = responseReceptSite4.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei = data.d.__next;
                    GetListItemsReceptSite4();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseReceptSite4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('recptsite5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsReceptSite4();




    var responseReceptSite5 = responseReceptSite5 || [];  // this variable is used for storing list items
    function GetListItemsReceptSite5(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Réception de site' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Réception de site' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Réception de site' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Réception de site' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";


        return $.ajax({
            url: urlReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite5 = responseReceptSite5.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei = data.d.__next;
                    GetListItemsReceptSite5();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseReceptSite5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('recptsite6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsReceptSite5();



    var responseReceptSite6 = responseReceptSite6 || [];  // this variable is used for storing list items
    function GetListItemsReceptSite6(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Réception de site' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Réception de site' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Réception de site' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Réception de site' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite6 = responseReceptSite6.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei = data.d.__next;
                    GetListItemsReceptSite6();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseReceptSite6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('recptsite7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsReceptSite6();



    var responseReceptSite7 = responseReceptSite7 || [];  // this variable is used for storing list items
    function GetListItemsReceptSite7(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

  var urlReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Réception de site' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Réception de site' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Réception de site' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Réception de site' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite7 = responseReceptSite7.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei = data.d.__next;
                    GetListItemsReceptSite7();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseReceptSite7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('recptsite8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsReceptSite7();








    var responseTirageFO = responseTirageFO || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format('L');  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format('L');

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format('L');

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format('L');

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

 var urlTirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap8+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlTirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO = responseTirageFO.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO = data.d.__next;
                    GetListItemsTirageFOs();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseTirageFO, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }
                           
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
               
                ss1 = somme11;

              
               

                document.getElementById('TirageFO1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsTirageFOs();

    var responseTirageFO1 = responseTirageFO1 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs1(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format('L');  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format('L');

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");
  console.log(sSwap8);

 var urlTirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap7+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";
        return $.ajax({
            url: urlTirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO1 = responseTirageFO1.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO = data.d.__next;
                    GetListItemsTirageFOs1();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseTirageFO1, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                                    var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('TirageFO2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsTirageFOs1();




    var responseTirageFO2 = responseTirageFO2 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs2(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format('L');  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format('L');

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlTirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap6+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";
        return $.ajax({
            url: urlTirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO2 = responseTirageFO2.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO = data.d.__next;
                    GetListItemsTirageFOs2();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseTirageFO2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                    var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('TirageFO3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsTirageFOs2();



    var responseTirageFO3 = responseTirageFO3 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs3(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format('L');  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlTirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap5+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlTirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO3 = responseTirageFO3.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO = data.d.__next;
                    GetListItemsTirageFOs3();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseTirageFO3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('TirageFO4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsTirageFOs3();





    var responseTirageFO4 = responseTirageFO4 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs4(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format('L');

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD");  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlTirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap4+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlTirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO4 = responseTirageFO4.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO = data.d.__next;
                    GetListItemsTirageFOs4();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseTirageFO4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('TirageFO5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsTirageFOs4();




    var responseTirageFO5 = responseTirageFO5 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs5(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format('L'); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format('L'); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD");  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");
  console.log(sSwap8);

var urlTirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap3+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";


        return $.ajax({
            url: urlTirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO5 = responseTirageFO5.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO = data.d.__next;
                    GetListItemsTirageFOs5();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseTirageFO5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                             var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('TirageFO6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsTirageFOs5();



    var responseTirageFO6 = responseTirageFO6 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs6(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD");  

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");
  console.log("the new date" + sSwap7);

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

var urlTirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap2+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlTirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO6 = responseTirageFO6.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO = data.d.__next;
                    GetListItemsTirageFOs6();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseTirageFO6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('TirageFO7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsTirageFOs6();



    var responseTirageFO7 = responseTirageFO7 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs7(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-28);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

  var urlTirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$filter=TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'cacd4332-3db2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'aade112c-3fb2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'62598f36-41b2-ea11-a129-b0fc36e2e03c' or TaskStartDate lt datetime'"+sSwap1+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'246a0f14-42b2-ea11-a129-b0fc36e2e03c'";

        return $.ajax({
            url: urlTirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO7 = responseTirageFO7.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO = data.d.__next;
                    GetListItemsTirageFOs7();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseTirageFO7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('TirageFO8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsTirageFOs7();





function RemplirTab()
{


  moment.locale('fr');


  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-27);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");



  document.getElementById('Firstdate1').innerHTML = sSwap8;
  document.getElementById('Seconddate2').innerHTML = sSwap7;
  document.getElementById('Thirddate3').innerHTML = sSwap6;
  document.getElementById('Fourdate4').innerHTML = sSwap5;
  document.getElementById('Fivedate5').innerHTML = sSwap4;
  document.getElementById('Sixdate6').innerHTML = sSwap3;
  document.getElementById('Sevendate7').innerHTML = sSwap2;
  document.getElementById('Heightdate8').innerHTML = sSwap1;

}

setTimeout(RemplirTab,7000);














function loadEvolutionParSemaine()
{


  moment.locale('fr');

  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-27);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

          SurveyS0 = document.getElementById('survey1').innerHTML;
          SurveyS1 = document.getElementById('survey2').innerHTML;
          SurveyS2 = document.getElementById('survey3').innerHTML;
          SurveyS3 = document.getElementById('survey4').innerHTML;
          SurveyS4 = document.getElementById('survey5').innerHTML;
          SurveyS5 = document.getElementById('survey6').innerHTML;
          SurveyS6 = document.getElementById('survey7').innerHTML;
          SurveyS7 = document.getElementById('survey8').innerHTML;


          Autorisation00 = document.getElementById('Autorisation1').innerHTML;
          Autorisation01 = document.getElementById('Autorisation2').innerHTML;
          Autorisation02 = document.getElementById('Autorisation3').innerHTML;
          Autorisation03 = document.getElementById('Autorisation4').innerHTML;
          Autorisation04 = document.getElementById('Autorisation5').innerHTML;
          Autorisation05 = document.getElementById('Autorisation6').innerHTML;
          Autorisation06 = document.getElementById('Autorisation7').innerHTML;
          Autorisation07 = document.getElementById('Autorisation8').innerHTML;


          GénieCivilS0 = document.getElementById('GeniCivil1').innerHTML;
          GénieCivilS1 = document.getElementById('GeniCivil2').innerHTML;
          GénieCivilS2 = document.getElementById('GeniCivil3').innerHTML;
          GénieCivilS3 = document.getElementById('GeniCivil4').innerHTML;
          GénieCivilS4 = document.getElementById('GeniCivil5').innerHTML;
          GénieCivilS5 = document.getElementById('GeniCivil6').innerHTML;
          GénieCivilS6 = document.getElementById('GeniCivil7').innerHTML;
          GénieCivilS7 = document.getElementById('GeniCivil8').innerHTML;










          ElectrificationS0 = document.getElementById('ValElelect1').innerHTML;
          ElectrificationS1 = document.getElementById('ValElelect2').innerHTML;
          ElectrificationS2 = document.getElementById('ValElelect3').innerHTML;
          ElectrificationS3 = document.getElementById('ValElelect4').innerHTML;
          ElectrificationS4 = document.getElementById('ValElelect5').innerHTML;
          ElectrificationS5 = document.getElementById('ValElelect6').innerHTML;
          ElectrificationS6 = document.getElementById('ValElelect7').innerHTML;
          ElectrificationS7 = document.getElementById('ValElelect8').innerHTML;


          InstallationEquipementS0 = document.getElementById('install1').innerHTML;
          InstallationEquipementS1 = document.getElementById('install2').innerHTML;
          InstallationEquipementS2 = document.getElementById('install3').innerHTML;
          InstallationEquipementS3 = document.getElementById('install4').innerHTML;
          InstallationEquipementS4 = document.getElementById('install5').innerHTML;
          InstallationEquipementS5 = document.getElementById('install6').innerHTML;
          InstallationEquipementS6 = document.getElementById('install7').innerHTML;
          InstallationEquipementS7 = document.getElementById('install8').innerHTML;
           


          RéceptionSiteS0 = document.getElementById('recptsite1').innerHTML;
          RéceptionSiteS1 = document.getElementById('recptsite2').innerHTML;
          RéceptionSiteS2 = document.getElementById('recptsite3').innerHTML;
          RéceptionSiteS3 = document.getElementById('recptsite4').innerHTML;
          RéceptionSiteS4 = document.getElementById('recptsite5').innerHTML;
          RéceptionSiteS5 = document.getElementById('recptsite6').innerHTML;
          RéceptionSiteS6 = document.getElementById('recptsite7').innerHTML;
          RéceptionSiteS7 = document.getElementById('recptsite8').innerHTML;


          SWAPs0 = document.getElementById('SWAP1').innerHTML;
          SWAPs1 = document.getElementById('SWAP2').innerHTML;
          SWAPs2 = document.getElementById('SWAP3').innerHTML;
          SWAPs3 = document.getElementById('SWAP4').innerHTML;
          SWAPs4 = document.getElementById('SWAP5').innerHTML;
          SWAPs5 = document.getElementById('SWAP6').innerHTML;
          SWAPs6 = document.getElementById('SWAP7').innerHTML;
          SWAPs7 = document.getElementById('SWAP8').innerHTML;

          TirageFO0 = document.getElementById('TirageFO1').innerHTML;
          TirageFO1 = document.getElementById('TirageFO2').innerHTML;
          TirageFO2 = document.getElementById('TirageFO3').innerHTML;
          TirageFO3 = document.getElementById('TirageFO4').innerHTML;
          TirageFO4 = document.getElementById('TirageFO5').innerHTML;
          TirageFO5 = document.getElementById('TirageFO6').innerHTML;
          TirageFO6 = document.getElementById('TirageFO7').innerHTML;
          TirageFO7 = document.getElementById('TirageFO8').innerHTML;



        
          ValeurMax = parseInt(document.getElementById('verifier').innerHTML);

  var ctx1 = document.getElementById("canvas").getContext('2d');
if(window.myLine != undefined)
{
  window.myLine.destroy();
}

window.myLine = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: [sSwap8,sSwap7,sSwap6,sSwap5,sSwap4,sSwap3,sSwap2,sSwap1],
      datasets: [{
        label: 'Survey',
        backgroundColor: window.colors[1],
        borderColor: window.colors[1],
        fill: false,
        data: [
          SurveyS0,
          SurveyS1,
          SurveyS2,
          SurveyS3,
          SurveyS4,
          SurveyS5,
          SurveyS6,
          SurveyS7
        ]
        }, {
          label: 'Autorisation',
          fill: false,
          backgroundColor: window.colors[2],
          borderColor: window.colors[2],
          data: [
            Autorisation00,
            Autorisation01,
            Autorisation02,
            Autorisation03,
            Autorisation04,
            Autorisation05,
            Autorisation06,
            Autorisation07
           ],
        },{
          label: 'Génie civil',
          fill: false,
          backgroundColor: window.colors[3],
          borderColor: window.colors[3],
          data: [
          GénieCivilS0,
          GénieCivilS1,
          GénieCivilS2,
          GénieCivilS3,
          GénieCivilS4,
          GénieCivilS5,
          GénieCivilS6,
          GénieCivilS7  
          ],
        },{
          label: 'Electrification',
          fill: false,
          backgroundColor: window.colors[4],
          borderColor: window.colors[4],
          data: [
            ElectrificationS0,
            ElectrificationS1,
            ElectrificationS2,
            ElectrificationS3,
            ElectrificationS4,
            ElectrificationS5,
            ElectrificationS6,
            ElectrificationS7
          ],
        },{
          label: 'Tirage FO',
          fill: false,
          backgroundColor: window.colors[9],
          borderColor: window.colors[9],
          data: [
            TirageFO0,
            TirageFO1,
            TirageFO2,
            TirageFO3,
            TirageFO4,
            TirageFO5,
            TirageFO6,
            TirageFO7
          ],
        },{
          label: 'Installation équipement',
          fill: false,
          backgroundColor: window.colors[5],
          borderColor: window.colors[5],
          data: [
            InstallationEquipementS0,
            InstallationEquipementS1,
            InstallationEquipementS2,
            InstallationEquipementS3,
            InstallationEquipementS4,
            InstallationEquipementS5,
            InstallationEquipementS6,
            InstallationEquipementS7
          ],
        },{
          label: 'Réception de site',
          fill: false,
          backgroundColor: window.colors[6],
          borderColor: window.colors[6],
          data: [
            RéceptionSiteS0,
            RéceptionSiteS1,
            RéceptionSiteS2,
            RéceptionSiteS3,
            RéceptionSiteS4,
            RéceptionSiteS5,
            RéceptionSiteS6,
            RéceptionSiteS7
          ],
        },{
          label: 'Basculement et monitoring',
          fill: false,
          backgroundColor: window.colors[7],
          borderColor: window.colors[7],
          data: [
            SWAPs0,
            SWAPs1,
            SWAPs2,
            SWAPs3,
            SWAPs4,
            SWAPs5,
            SWAPs6,
            SWAPs7
           ],
        }]
      },
    
    options: {
      responsive: true,
      title: {
        display: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Date par semaine'
          },
      
        }],
        yAxes: [{
          display: true,
          //type: 'logarithmic',
          scaleLabel: {
              display: true,
              labelString: '% Achévement'
            },
            ticks: {
                  min: 0,
                  max: ValeurMax,// Your absolute max value
                  callback: function (value) {
                    return (value / ValeurMax * 100).toFixed(0) + '%'; // convert it to percentage
                  },
                },
        }]
      }
    },

});
}
setTimeout(loadEvolutionParSemaine,22000);






function loadEvolutionParSemaineInverse()
{


  moment.locale('fr');

  window.sSwap1 = moment().day(8); 
  sSwap1=moment(sSwap1).format("YYYY-MM-DD"); 


  window.sSwap2 = moment().day(1);
  sSwap2=moment(sSwap2).format("YYYY-MM-DD"); 



  window.sSwap3 = moment().day(-6);
  sSwap3=moment(sSwap3).format("YYYY-MM-DD");

  window.sSwap4 = moment().day(-13);
  sSwap4=moment(sSwap4).format("YYYY-MM-DD"); 

  window.sSwap5 = moment().day(-20); 
  sSwap5=moment(sSwap5).format("YYYY-MM-DD");

  window.sSwap6 = moment().day(-27);
  sSwap6=moment(sSwap6).format("YYYY-MM-DD");

  window.sSwap7 = moment().day(-34);
  sSwap7=moment(sSwap7).format("YYYY-MM-DD");

  window.sSwap8 = moment().day(-41);
  sSwap8=moment(sSwap8).format("YYYY-MM-DD");

          maxSurvey = document.getElementById('verifier').innerHTML;

          SurveyS0 = parseInt(maxSurvey) - parseInt(document.getElementById('survey1').innerHTML);
          SurveyS1 = parseInt(maxSurvey) - parseInt(document.getElementById('survey2').innerHTML);
          SurveyS2 = parseInt(maxSurvey) - parseInt(document.getElementById('survey3').innerHTML);
          SurveyS3 = parseInt(maxSurvey) - parseInt(document.getElementById('survey4').innerHTML);
          SurveyS4 = parseInt(maxSurvey) - parseInt(document.getElementById('survey5').innerHTML);
          SurveyS5 = parseInt(maxSurvey) - parseInt(document.getElementById('survey6').innerHTML);
          SurveyS6 = parseInt(maxSurvey) - parseInt(document.getElementById('survey7').innerHTML);
          SurveyS7 = parseInt(maxSurvey) - parseInt(document.getElementById('survey8').innerHTML);

          maxAutorisation = document.getElementById('Autorisation').innerHTML;

          Autorisation00 = parseInt(maxAutorisation) - parseInt(document.getElementById('Autorisation1').innerHTML);
          Autorisation01 = parseInt(maxAutorisation) - parseInt(document.getElementById('Autorisation2').innerHTML);
          Autorisation02 = parseInt(maxAutorisation) - parseInt(document.getElementById('Autorisation3').innerHTML);
          Autorisation03 = parseInt(maxAutorisation) - parseInt(document.getElementById('Autorisation4').innerHTML);
          Autorisation04 = parseInt(maxAutorisation) - parseInt(document.getElementById('Autorisation5').innerHTML);
          Autorisation05 = parseInt(maxAutorisation) - parseInt(document.getElementById('Autorisation6').innerHTML);
          Autorisation06 = parseInt(maxAutorisation) - parseInt(document.getElementById('Autorisation7').innerHTML);
          Autorisation07 = parseInt(maxAutorisation) - parseInt(document.getElementById('Autorisation8').innerHTML);

          maxGenicivil = document.getElementById('gCivil').innerHTML;

          GénieCivilS0 = parseInt(maxGenicivil) - parseInt(document.getElementById('GeniCivil1').innerHTML);
          GénieCivilS1 = parseInt(maxGenicivil) - parseInt(document.getElementById('GeniCivil2').innerHTML);
          GénieCivilS2 = parseInt(maxGenicivil) - parseInt(document.getElementById('GeniCivil3').innerHTML);
          GénieCivilS3 = parseInt(maxGenicivil) - parseInt(document.getElementById('GeniCivil4').innerHTML);
          GénieCivilS4 = parseInt(maxGenicivil) - parseInt(document.getElementById('GeniCivil5').innerHTML);
          GénieCivilS5 = parseInt(maxGenicivil) - parseInt(document.getElementById('GeniCivil6').innerHTML);
          GénieCivilS6 = parseInt(maxGenicivil) - parseInt(document.getElementById('GeniCivil7').innerHTML);
          GénieCivilS7 = parseInt(maxGenicivil) - parseInt(document.getElementById('GeniCivil8').innerHTML);








          MaxElectrification = document.getElementById('Electrification').innerHTML;

          ElectrificationS0 = parseInt(MaxElectrification) - parseInt(document.getElementById('ValElelect1').innerHTML);
          ElectrificationS1 = parseInt(MaxElectrification) - parseInt(document.getElementById('ValElelect2').innerHTML);
          ElectrificationS2 = parseInt(MaxElectrification) - parseInt(document.getElementById('ValElelect3').innerHTML);
          ElectrificationS3 = parseInt(MaxElectrification) - parseInt(document.getElementById('ValElelect4').innerHTML);
          ElectrificationS4 = parseInt(MaxElectrification) - parseInt(document.getElementById('ValElelect5').innerHTML);
          ElectrificationS5 = parseInt(MaxElectrification) - parseInt(document.getElementById('ValElelect6').innerHTML);
          ElectrificationS6 = parseInt(MaxElectrification) - parseInt(document.getElementById('ValElelect7').innerHTML);
          ElectrificationS7 = parseInt(MaxElectrification) - parseInt(document.getElementById('ValElelect8').innerHTML);


          MaxInstallation = document.getElementById('Installation').innerHTML;

          InstallationEquipementS0 = parseInt(MaxInstallation) - parseInt(document.getElementById('install1').innerHTML);
          InstallationEquipementS1 = parseInt(MaxInstallation) - parseInt(document.getElementById('install2').innerHTML);
          InstallationEquipementS2 = parseInt(MaxInstallation) - parseInt(document.getElementById('install3').innerHTML);
          InstallationEquipementS3 = parseInt(MaxInstallation) - parseInt(document.getElementById('install4').innerHTML);
          InstallationEquipementS4 = parseInt(MaxInstallation) - parseInt(document.getElementById('install5').innerHTML);
          InstallationEquipementS5 = parseInt(MaxInstallation) - parseInt(document.getElementById('install6').innerHTML);
          InstallationEquipementS6 = parseInt(MaxInstallation) - parseInt(document.getElementById('install7').innerHTML);
          InstallationEquipementS7 = parseInt(MaxInstallation) - parseInt(document.getElementById('install8').innerHTML);
           
          MaxRecept = document.getElementById('Reception').innerHTML;

          RéceptionSiteS0 = parseInt(MaxRecept) - parseInt(document.getElementById('recptsite1').innerHTML);
          RéceptionSiteS1 = parseInt(MaxRecept) - parseInt(document.getElementById('recptsite2').innerHTML);
          RéceptionSiteS2 = parseInt(MaxRecept) - parseInt(document.getElementById('recptsite3').innerHTML);
          RéceptionSiteS3 = parseInt(MaxRecept) - parseInt(document.getElementById('recptsite4').innerHTML);
          RéceptionSiteS4 = parseInt(MaxRecept) - parseInt(document.getElementById('recptsite5').innerHTML);
          RéceptionSiteS5 = parseInt(MaxRecept) - parseInt(document.getElementById('recptsite6').innerHTML);
          RéceptionSiteS6 = parseInt(MaxRecept) - parseInt(document.getElementById('recptsite7').innerHTML);
          RéceptionSiteS7 = parseInt(MaxRecept) - parseInt(document.getElementById('recptsite8').innerHTML);

          MaxSwap = document.getElementById('SWAP').innerHTML;

          SWAPs0 = parseInt(MaxSwap) - parseInt(document.getElementById('SWAP1').innerHTML);
          SWAPs1 = parseInt(MaxSwap) - parseInt(document.getElementById('SWAP2').innerHTML);
          SWAPs2 = parseInt(MaxSwap) - parseInt(document.getElementById('SWAP3').innerHTML);
          SWAPs3 = parseInt(MaxSwap) - parseInt(document.getElementById('SWAP4').innerHTML);
          SWAPs4 = parseInt(MaxSwap) - parseInt(document.getElementById('SWAP5').innerHTML);
          SWAPs5 = parseInt(MaxSwap) - parseInt(document.getElementById('SWAP6').innerHTML);
          SWAPs6 = parseInt(MaxSwap) - parseInt(document.getElementById('SWAP7').innerHTML);
          SWAPs7 = parseInt(MaxSwap) - parseInt(document.getElementById('SWAP8').innerHTML);


          TirageFoMax = parseInt(document.getElementById('TirageFo').innerHTML);

          TirageFO0 = parseInt(TirageFoMax) - parseInt(document.getElementById('TirageFO1').innerHTML);
          TirageFO1 = parseInt(TirageFoMax) - parseInt(document.getElementById('TirageFO2').innerHTML);
          TirageFO2 = parseInt(TirageFoMax) - parseInt(document.getElementById('TirageFO3').innerHTML);
          TirageFO3 = parseInt(TirageFoMax) - parseInt(document.getElementById('TirageFO4').innerHTML);
          TirageFO4 = parseInt(TirageFoMax) - parseInt(document.getElementById('TirageFO5').innerHTML);
          TirageFO5 = parseInt(TirageFoMax) - parseInt(document.getElementById('TirageFO6').innerHTML);
          TirageFO6 = parseInt(TirageFoMax) - parseInt(document.getElementById('TirageFO7').innerHTML);
          TirageFO7 = parseInt(TirageFoMax) - parseInt(document.getElementById('TirageFO8').innerHTML);

          ValeurMax = parseInt(document.getElementById('verifier').innerHTML);

  var ctx1s = document.getElementById("canvasInverse").getContext('2d');
if(window.myLines != undefined)
{
  window.myLines.destroy();
}

window.myLines = new Chart(ctx1s, {
   type: 'line',
    data: {
      labels: [sSwap8,sSwap7,sSwap6,sSwap5,sSwap4,sSwap3,sSwap2,sSwap1],
      datasets: [{
        label: 'Survey',
        backgroundColor: window.colors[1],
        borderColor: window.colors[1],
        fill: false,
        data: [
          SurveyS0,
          SurveyS1,
          SurveyS2,
          SurveyS3,
          SurveyS4,
          SurveyS5,
          SurveyS6,
          SurveyS7
        ]
        }, {
          label: 'Autorisation',
          fill: false,
          backgroundColor: window.colors[2],
          borderColor: window.colors[2],
          data: [
            Autorisation00,
            Autorisation01,
            Autorisation02,
            Autorisation03,
            Autorisation04,
            Autorisation05,
            Autorisation06,
            Autorisation07
           ],
        },{
          label: 'Génie civil',
          fill: false,
          backgroundColor: window.colors[3],
          borderColor: window.colors[3],
          data: [
          GénieCivilS0,
          GénieCivilS1,
          GénieCivilS2,
          GénieCivilS3,
          GénieCivilS4,
          GénieCivilS5,
          GénieCivilS6,
          GénieCivilS7

            
          ],
        },{
          label: 'Electrification',
          fill: false,
          backgroundColor: window.colors[4],
          borderColor: window.colors[4],
          data: [
            ElectrificationS0,
            ElectrificationS1,
            ElectrificationS2,
            ElectrificationS3,
            ElectrificationS4,
            ElectrificationS5,
            ElectrificationS6,
            ElectrificationS7
          ],
        },{
          label: 'Tirage FO',
          fill: false,
          backgroundColor: window.colors[9],
          borderColor: window.colors[9],
          data: [
            TirageFO0,
            TirageFO1,
            TirageFO2,
            TirageFO3,
            TirageFO4,
            TirageFO5,
            TirageFO6,
            TirageFO7
          ],
        },{
          label: 'Installation équipement',
          fill: false,
          backgroundColor: window.colors[5],
          borderColor: window.colors[5],
          data: [
            InstallationEquipementS0,
            InstallationEquipementS1,
            InstallationEquipementS2,
            InstallationEquipementS3,
            InstallationEquipementS4,
            InstallationEquipementS5,
            InstallationEquipementS6,
            InstallationEquipementS7
            ],
        },{
          label: 'Réception de site',
          fill: false,
          backgroundColor: window.colors[6],
          borderColor: window.colors[6],
          data: [
            RéceptionSiteS0,
            RéceptionSiteS1,
            RéceptionSiteS2,
            RéceptionSiteS3,
            RéceptionSiteS4,
            RéceptionSiteS5,
            RéceptionSiteS6,
            RéceptionSiteS7
          ],
        },{
          label: 'Basculement et monitoring',
          fill: false,
          backgroundColor: window.colors[7],
          borderColor: window.colors[7],
          data: [
            SWAPs0,
            SWAPs1,
            SWAPs2,
            SWAPs3,
            SWAPs4,
            SWAPs5,
            SWAPs6,
            SWAPs7
          ],
        }]
      },
    
    options: {
      responsive: true,
      title: {
        display: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Date par semaine'
          },
      
        }],
        yAxes: [{
          display: true,
          //type: 'logarithmic',
          scaleLabel: {
              display: true,
              labelString: '% Achévement'
            },
            ticks: {
                  min: 0,
                  max: ValeurMax,// Your absolute max value
                  callback: function (value) {
                    return (value / ValeurMax * 100).toFixed(0) + '%'; // convert it to percentage
                  },
                },
        }]
      }
    },

});
}
setTimeout(loadEvolutionParSemaineInverse,22000);





//***********************************************************Function planifé réalisés*******************************************












var TaskBaselineSurvey="";
var ProjectBaselineId="";
var urlPlaniRealSurvey = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Survey%27";
var responsePlanRealSurvey= responsePlanRealSurvey || [];

function GetListItemsPlanRealSurvey(){
  window.nextWeekEnd = moment().day(0); 
        return $.ajax({
            url: urlPlaniRealSurvey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealSurvey = responsePlanRealSurvey.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniReal = data.d.__next;
                    GetListItemsPlanRealSurvey();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealSurvey, function(key, value)  {

                

                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;




                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {


                      

                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                    var actualFinishDate=value.TaskActualFinishDate;
                    var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD');

                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                      
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }

                          if(percentComplete !="100")
                          {
                            SurveyInOutTime(Identifiant,idTask); 
                          }
                     
                    }

                        
                          

                resultRealises =sommes1;
                //resultPlanife = sommes2;


                });

        //document.getElementById('SurveyPlan').innerHTML = resultPlanife;
        document.getElementById('SurveyRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealSurvey();

function SurveyInOutTime(Identifiant,idTask){
  
  window.nextWeekEnd = moment().day(0); 
 
   som=document.getElementById("SurveyPlan").innerHTML;

  
  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                if(base =="0")
                {
                  som++;
                  console.log('Apres les valeurs window Task: ' + Tasknom);
                }
              }
          
              sommes=som;
            });
            
            document.getElementById("SurveyPlan").innerHTML = sommes;

          }
        });
  
}
SurveyInOutTime();
//********************************************************************************************************************************************


var urlPlaniRealAutorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Autorisation%27";
var responsePlanRealAutorisation= responsePlanRealAutorisation || [];

function GetListItemsPlanRealAutorisation(){
  window.nextWeekEnd = moment().day(0);
        return $.ajax({
            url: urlPlaniRealAutorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealAutorisation = responsePlanRealAutorisation.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealAutorisation = data.d.__next;
                    GetListItemsPlanRealAutorisation();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealAutorisation, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                    var actualFinishDate=value.TaskActualFinishDate;
                    var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD');  
                      
                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }

                          if(percentComplete !="100")
                          {
                            AutorisationInOutTime(Identifiant,idTask); 
                          }
                    }


                resultRealises =sommes1;
                //resultPlanife = sommes2;


                });

        //document.getElementById('AutorisationPlan').innerHTML = resultPlanife;
        document.getElementById('AutorisationRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealAutorisation();

function AutorisationInOutTime(Identifiant,idTask){
  
  window.nextWeekEndAutorisation = moment().day(0); 
 
   somAutorisation=document.getElementById("AutorisationPlan").innerHTML;

  
  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEndAutorisation).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                if(base =="0")
                {
                  console.log('Apres les valeurs window Task: ' + Tasknom);
                  somAutorisation++;
                }
              }
          
              sommes=somAutorisation;
            });
            
            document.getElementById("AutorisationPlan").innerHTML = sommes;

          }
        });
  
}
AutorisationInOutTime();

//***************************************************************************************************************************



var urlPlaniRealGenieCivil = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Génie Civil%27";
var responsePlanRealGenieCivil= responsePlanRealGenieCivil || [];

function GetListItemsPlanRealGenieCivil(){
  window.nextWeekEnd = moment().day(0);
        return $.ajax({
            url: urlPlaniRealGenieCivil,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealGenieCivil = responsePlanRealGenieCivil.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealGenieCivil = data.d.__next;
                    GetListItemsPlanRealGenieCivil();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealGenieCivil, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                    var actualFinishDate=value.TaskActualFinishDate;
                    var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD');  
                      
                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }

                          if(percentComplete !="100")
                          {
                            GenieCivilInOutTime(Identifiant,idTask); 
                          }
                    }


                resultRealises =sommes1;
                //resultPlanife = sommes2;


                });

        //document.getElementById('gCivilPlan').innerHTML = resultPlanife;
        document.getElementById('civilRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealGenieCivil();

function GenieCivilInOutTime(Identifiant,idTask){
  
  window.nextWeekEndGenie = moment().day(0); 
 
   somGenie=document.getElementById("gCivilPlan").innerHTML;

  
  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEndGenie).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                if(base =="0")
                {
                  console.log('Apres les valeurs window Task: ' + Tasknom);
                  somGenie++;
                }
              }
          
              sommes=somGenie;
            });
            
            document.getElementById("gCivilPlan").innerHTML = sommes;

          }
        });
  
}
GenieCivilInOutTime();
//***********************************************************************************************************************


var urlPlaniRealElectrification = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Electrification%27";
var responsePlanRealElectrification= responsePlanRealElectrification || [];

function GetListItemsPlanRealElectrification(){
  window.nextWeekEnd = moment().day(0);
        return $.ajax({
            url: urlPlaniRealElectrification,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealElectrification = responsePlanRealElectrification.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealElectrification = data.d.__next;
                    GetListItemsPlanRealElectrification();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealElectrification, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    
                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      sommes3++;
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                      var actualFinishDate=value.TaskActualFinishDate;
                      var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD'); 
                      
                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }

                          
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('ElectrificatioPlan').innerHTML = resultPlanife;
        document.getElementById('ElectrificationRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealElectrification();

/*function ElectrificatioPlanInOutTime(Identifiant,idTask){
  
  window.nextWeekEndElectrification = moment().day(0); 
 
   somElectrification=document.getElementById("ElectrificatioPlan").innerHTML;

  
  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEndElectrification).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                if(base == "0")
                {
                  console.log('Apres les valeurs window Task: ' + Tasknom);
                  somElectrification++;
                }
              }
          
              sommes=somElectrification;
            });
            
            document.getElementById("ElectrificatioPlan").innerHTML = sommes;

          }
        });
  
}
ElectrificatioPlanInOutTime();*/
//****************************************************************************************************************



var urlPlaniRealTirage = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=startswith(TaskName,'tirage fo')";
var responsePlanRealTirage= responsePlanRealTirage || [];

function GetListItemsPlanRealTirage(){
  window.nextWeekEnd = moment().day(0);
        return $.ajax({
            url: urlPlaniRealTirage,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealTirage = responsePlanRealTirage.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealTirage = data.d.__next;
                    GetListItemsPlanRealTirage();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealTirage, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      sommes3++
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                      var actualFinishDate=value.TaskActualFinishDate;
                      var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD'); 

                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }

                          
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('TirageFoPlan').innerHTML = resultPlanife;
        document.getElementById('TirageRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealTirage();

/*function TiragePlanInOutTime(Identifiant,idTask){
  
  window.nextWeekEndTirage = moment().day(0); 
 
   somTirageFO=document.getElementById("TirageFoPlan").innerHTML;

  
  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEndTirage).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                if(base =="0")
                {
                  console.log('Apres les valeurs window Task: ' + Tasknom);
                  somTirageFO++;
                }
              }
          
              sommes=somTirageFO;
            });
            
            document.getElementById("TirageFoPlan").innerHTML = sommes;

          }
        });
  
}
TiragePlanInOutTime();*/
//****************************************************************************************************************

var urlPlaniRealInstall = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Installation%20équipement%27";
var responsePlanRealInstall= responsePlanRealInstall || [];

function GetListItemsPlanRealInstall(){
  window.nextWeekEnd = moment().day(0);
        return $.ajax({
            url: urlPlaniRealInstall,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealInstall = responsePlanRealInstall.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealInstall = data.d.__next;
                    GetListItemsPlanRealInstall();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealInstall, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;

                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      
                      sommes3++;
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                      var actualFinishDate=value.TaskActualFinishDate;
                      var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD'); 

                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }

                        

                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('InstallationPlannif').innerHTML = resultPlanife;
        document.getElementById('InstallationRealiser').innerHTML = resultRealises ;
        
            }
        });
      }

GetListItemsPlanRealInstall();


/*
function InstallationPlanInOutTime(Identifiant,idTask){
  
  window.nextWeekEnd = moment().day(0); 
 
   som=document.getElementById("InstallationPlannif").innerHTML;

  
  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                
                if(base == "0")
                {
                  console.log('Apres les valeurs window Task: ' + Tasknom);
                  som++;
                }
              }
          
              sommes=som;
            });
            
            document.getElementById("InstallationPlannif").innerHTML = sommes;

          }
        });
  
}
InstallationPlanInOutTime();*/

//****************************************************************************************************************





var urlPlaniRealReception = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Réception de site%27";
var responsePlanRealReception= responsePlanRealReception || [];

function GetListItemsPlanRealReception(){
  window.nextWeekEnd = moment().day(0);
        return $.ajax({
            url: urlPlaniRealReception,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealReception = responsePlanRealReception.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealReception = data.d.__next;
                    GetListItemsPlanRealReception();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealReception, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      
                      sommes3++;
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                      var actualFinishDate=value.TaskActualFinishDate;
                      var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD'); 

                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }
                          

                          
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('ReceptionPlan').innerHTML = resultPlanife;
        document.getElementById('ReceptionRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealReception();

/*
function ReceptionPlanInOutTime(Identifiant,idTask){
  
 
  window.nextWeekEndRec = moment().day(0); 
   somReception=document.getElementById("ReceptionPlan").innerHTML;

  
  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines?$select=TaskBaselineFinishDate,TaskName,BaselineNumber",                       
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEndRec).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                if(base == "0")
                {
                  console.log('Apres les valeurs window Task: ' + Tasknom);
                  somReception++;
                }
              }
              else if((base !="0")||(base !="1") &&(moment(baselineFinishDate).isSameOrBefore(mmEnd)))
              {
                somReception++;
              }
          
              sommes=somReception;
            });
            
            document.getElementById("ReceptionPlan").innerHTML = sommes;

          }
        });
  
}
ReceptionPlanInOutTime();*/
//****************************************************************************************************************



var urlPlaniRealBasculement = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Basculement et monitoring%27";
var responsePlanRealBasculement= responsePlanRealBasculement || [];

function GetListItemsPlanRealBasculement(){
  window.nextWeekEnd = moment().day(0);
        return $.ajax({
            url: urlPlaniRealBasculement,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealBasculement = responsePlanRealBasculement.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealBasculement = data.d.__next;
                    GetListItemsPlanRealBasculement();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealBasculement, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                 
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
     

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if((Identifiant == "cacd4332-3db2-ea11-a129-b0fc36e2e03c")||(Identifiant == "aade112c-3fb2-ea11-a129-b0fc36e2e03c")||(Identifiant == "62598f36-41b2-ea11-a129-b0fc36e2e03c")||(Identifiant == "246a0f14-42b2-ea11-a129-b0fc36e2e03c"))
                    {
                      sommes3++

                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                      var actualFinishDate=value.TaskActualFinishDate;
                      var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD'); 

                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }
                          
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('BasculementPlan').innerHTML = resultPlanife;
        document.getElementById('BasculementRealiser').innerHTML = resultRealises;
        
            }
        });
      }
GetListItemsPlanRealBasculement();


/*
function BasculementPlanInOutTime(Identifiant,idTask){
  
  window.nextWeekEndBasculement = moment().day(0); 
 
   somBasculement=document.getElementById("BasculementPlan").innerHTML;

  
  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEndBasculement).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                  
                if(base == "0")
                {
                  somBasculement++;
                }
                
              }
              else if((base !="0")||(base !="1") &&(moment(baselineFinishDate).isSameOrBefore(mmEnd)))
              {
                somBasculement++;
              }

          
              sommes=somBasculement;
            });
            
            document.getElementById("BasculementPlan").innerHTML = sommes;

          }
        });
  
}
BasculementPlanInOutTime();*/

//****************************************************************************************************************

//*********************************************************************************************************************************






</script>