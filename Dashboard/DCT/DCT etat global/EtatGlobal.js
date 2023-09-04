
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
    <link rel="stylesheet" href="/PT/_catalogs/masterpage/Dashboard/EtatProjetValide/css/jquery.dataTables.min.css">



  
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
    font-size: 160%;
    float: left;
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

  #tableaux1 td{
    text-align:center;
    color:black;
  }

  #Scooptab th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #0072c6;
    color: white;
    text-align:center;
  }

  #Scooptab
{
   border-radius: 1em;
  overflow: hidden;
}


  /*#Scooptab tr > *:nth-child(1) {
    background-color: #0072c6;
    color: white;
    width: 200px;
    text-align:left;
  }*/

  #Scooptab td{
    text-align:center;
    color:black;
  }



  #tableaux td{
    text-align:center;
    color:black;
  }

  #tableaux2 td{
    color:black;
  }

  #tableaux2 th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #0072c6;
    color: white;
  }

  #tableaux2{
   border-radius: 1em;
  overflow: hidden;
}

    #tableaux3 th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #0072c6;
    color: white;
  }

#tableaux3{
   border-radius: 1em;
  overflow: hidden;
}

  #mylist1 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    font-size: 16px;
    width: 400px;
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


/*#tableaux tr > *:nth-child(1) {
    background-color: #0072c6;
    color: white;
    text-align:left;
}*/

#tableaux2 tr > *:nth-child(1) {
    background-color: #0072c6;
    color: white;
}

/*#tableaux3 tr > *:nth-child(1) {
    background-color: #0072c6;
    color: white;
}*/

#tableaux1{
   border-radius: 1em;
  overflow: hidden;
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
              Etat globale des projets
            </small>

          </div>
             <span id="chemProjet" class="spanTitle" style="display:none;">URL de projet</span>

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist1" onchange="MainFilter();">
                 <option value="">Choisir un projet</option>
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

              <div class="col-md-12 col-sm-7 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <div class="clearfix"></div>
              <div class="table-responsive">
                      <table id="tableaux"  class="table table-striped table-bordered jambo_table bulk_action">
                        <thead>
                          <tr class="headings">
                            <th class="column-title">Nom du projet</th>
                            <th class="column-title">Direction</th>
                            <th class="column-title">Chef du projet</th>
                            <th class="column-title">Code du projet</th>
                            <th class="column-title">Date début</th>
                            <th class="column-title">Date fin</th>
                            <th class="column-title">Fournisseur</th>
                            <th class="column-title">Numéro PO</th>
                            <th class="column-title">Coût du projet</th>
                            <th class="column-title">Travail</th>
                            <th class="column-title">Pourcentage achevé</th>


                            </th>
                          </tr>
                           
                           

                        </thead>

                        <tbody>

                        </tbody> 

                      </table>
                    </div></div></div>





                    </div>

    <div class="rows">
  <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    
                    <div class="clearfix"></div>
              

                    <div class="table-responsive">
                      <table id="tableaux3"  class="table table-striped table-bordered jambo_table bulk_action">
                        <thead>
                        <tr>
                         <th class="column-title"> Description</th>                    
                        </tr>
                        </thead>
                        <tbody>
                        </tbody> 
                      </table>
                    </div>

                    </div>



                    </div>


                
              </div>

              </div>
</div>


              <class="rows">

               <div class="col-md-6 col-sm-5 col-xs-12">
                <div class="x_panel" style="display:none;" id="divMilstone">
                  <div class="x_title">
                    <h2 style="font-family: cursive; font-style: normal;">% Achevement des jalons</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <canvas id="milistonechart"  height="180" width="500"></canvas>
                  </div>
                </div>
                <div class="milistoneNonValide"id="milistoneNonValide"></div>
              </div>

              <div class="col-md-6 col-sm-5 col-xs-12">
                <div class="x_panel"  id="divPhase" style="display:none;">
                  <div class="x_title">
                    <h2 style="font-family: cursive; font-style: normal;">% Achevement des phases</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <canvas id="phasechart"  height="200" width="500"></canvas>
                  </div>
                  <div class="phaseNonValide"  id="phaseNonValide"></div>
              </div>


              </div>

     




                  






              <div class="rows">

              <div class="col-md-5 col-sm-5 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 style="font-family: cursive; font-style: normal;">Risques</h2>
                    <div class="clearfix"></div>
              <div class="table-responsive">
                      <table  id="tableaux1" class="table table-striped table-bordered jambo_table bulk_action">
                        <thead>
                          <tr class="headings">
                            <th class="column-title">Titre</th>
                            <th class="column-title">Statut</th>
                            <th class="column-title">Assigné</th>
                            <th class="column-title">Date</th>
                            <th class="column-title" style="display:none;">Lien</th>
                          </tr>
                         
                        </thead>  
                        <tbody>
              
                        </tbody>  

                      </table>
                    </div></div></div></div>



            
<div class="col-md-5 col-sm-5 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 style="font-family: cursive; font-style: normal;">Problémes</h2>
                    <div class="clearfix"></div>
              <div class="table-responsive">
                      <table  id="Scooptab" class="table table-striped table-bordered jambo_table bulk_action">
                        <thead>
                          <tr>
                            <th class="column-title">Titre</th>
                            <th class="column-title">Statut</th>
                            <th class="column-title">Assigné</th>
                            <th class="column-title">Date</th>
                            <th class="column-title" style="display:none;">Lien</th>
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


    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <script src="/PT/_catalogs/masterpage/Dashboard/javascript/chart.js@2.8.0.js"></script>

    <script src="/PT/_catalogs/masterpage/Dashboard/javascript/chartjs-plugin-datalabels@0.5.0"></script>

    <script src="/PT/_catalogs/masterpage/Dashboard/javascript/chartjs-plugin-labels.js"></script>


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

//---------charger les noms des projets-----------------------------
var urlProjetFiltre=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId";
var responseFiltreProjet= responseFiltreProjet || [];
function LoadProjectData(){

    $.ajax({url: urlProjetFiltre,   
                      
                                  method: "GET",
                                  dataType: "json",
                                  headers: {Accept: "application/json;odata=verbose"},       
                                  success: function(data) {     
                                    responseFiltreProjet = responseFiltreProjet.concat(data.d.results);
                                    if (data.d.__next) {
                                        urlProjetFiltre = data.d.__next;
                                        LoadProjectData();
                                    }
                                   
                                    
                                    $.each(responseFiltreProjet, function(key, value) {
                                        
                                        moment.locale('fr');
                                        var projName = value.ProjectName;
                                        var idP=value.ProjectId;

                                        //charger select
                                            $('#mylist1').append($('<option>', { text : projName, value : idP })); 
                                
                                            var opt = {}; $("#mylist1 > option").each(function () 
                                            { if(opt[$(this).text()]) 
                                            { $(this).remove(); } 
                                            else { opt[$(this).text()] = $(this).val(); } });
                                            
                                        
                                        
                                    })
          
  }   
  });
  
}
_spBodyOnLoadFunctionNames.push("LoadProjectData");



function MainFilter()
{
  var ProjID=document.getElementById("mylist1").value;
  //console.log("listvalue= "+ProjN);
  

    var url1=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectId%20eq%20guid%27"+ProjID+"%27";

    var response1 = response1 || [];

  function filtrerProjets(){
    var input,filter;
            input = document.getElementById("mylist1");
            filter = input.value.toUpperCase();
    return $.ajax({url: url1,   
                      
                                  method: "GET",
                                  dataType: "json",
                                  headers: {Accept: "application/json;odata=verbose"},       
                                  success: function(data) {     
                                    response1 = response1.concat(data.d.results);
                if (data.d.__next) {
                    url1 = data.d.__next;
                    filtrerProjets();
                }
                                    var input,filter;
                                    input = document.getElementById("mylist1");
                                    filter = input.value.toUpperCase();
                                    table = document.getElementById("tableaux");
                                    tr = table.getElementsByTagName("tr");
                                    $.each(response1, function(key, value) {
                                        
                                        moment.locale('fr');
                                        var projName = value.ProjectName;
                                        //document.getElementById("nomprojet").innerHTML=projName;
                                            var direction=value.Direction;

                                        var chefProjet=value.ProjectOwnerName;
                                        var debutProjet=value.ProjectStartDate;
                                         dateDebutProj=moment(debutProjet).format('L');
                                        var finProjet=value.ProjectFinishDate;
                                         dateFinProj=moment(finProjet).format('L');
                                         
                                         
                                        var fornisseur=value.Fournitures;
                                        var achev=value.ProjectPercentCompleted;
                                        var achevementMilistone=value.ProjectPercentCompleted;
                                        var codeProjet=value.Codeprojet;


                                        var numPO=value.PO;
                                        var poProj=Number.parseFloat(numPO).toFixed(3);
                                        var coutProjet=value.ProjectCost;
                                        var coutProj=Number.parseFloat(coutProjet).toFixed(3);
                                        var travailProjet=value.ProjectWork;
                                        var travailProj=Number.parseFloat(travailProjet).toFixed(3);
                                        var descProjet=value.ProjectDescription;
                                        var urlProjet1=value.UrlInterneEspaceDeTravailProjet;
                                        document.getElementById("chemProjet").innerHTML=urlProjet1;
                                        
                                            //charger table
                                            
                                            var tr;
                                            tr = $("<tr>");
                                                tr.append("<td>" + projName +"</td>");
                                                if(direction!=null){
                                                    tr.append("<td>" + direction +"</td>");
                                                }else{
                                                    tr.append("<td></td>");
                                                }
                                                
                                                if(chefProjet!=null){
                                                    tr.append("<td>" + chefProjet +"</td>");
                                                }else{
                                                    tr.append("<td></td>");
                                                }
                                                if(codeProjet!=null){
                                                    tr.append("<td>" + codeProjet +"</td>");
                                                }else{
                                                    tr.append("<td></td>");
                                                }
                                                tr.append("<td>" + dateDebutProj +"</td>");
                                                tr.append("<td>" + dateFinProj +"</td>");

                                                
                                                

                                                
                                                if(fornisseur!=null){
                                                    tr.append("<td>" + fornisseur +"</td>");
                                                }
                                                else{
                                                    tr.append("<td></td>");
                                                }
                                                if(numPO!=null){
                                                    tr.append("<td>" + poProj +"</td>");
                                                }
                                                else{
                                                    tr.append("<td></td>");
                                                }
                                                tr.append("<td>" + coutProj +"</td>");
                                                tr.append("<td>" + travailProj +"</td>");
                                                tr.append("<td>"+achev+"</td>");
                                                
                                                tr.append("<td style='display:none;'>" + achevementMilistone +"</td>");

                                                var numRows = document.getElementById("tableaux").rows.length;
                                                
                                                
                                               
                                                table = document.getElementById("tableaux");
                                                tr1 = table.getElementsByTagName("tr");
                                                if(tr1.length>0){
                                                  
                                                  $('#tableaux tbody').empty();
                                                }
                                                $('#tableaux').append(tr);
                                                var tr2;
                                                tr2 = $("<tr>");
                                                  
                                                if(descProjet!=null && descProjet.length>0){
                                                    tr2.append('<td >' + descProjet +'</td>');
                                                    
                                                }else {
                                                    var msg="Aucune description à propos ce projet!"
                                                    tr2.append("<td><center>" +msg+ "</center></td>");
                                                }
                                                //
                                                table = document.getElementById("tableaux3");
                                                tr3 = table.getElementsByTagName("tr");
                                                if(tr3.length>0){
                                                  
                                                  $('#tableaux3 tbody').empty();
                                                }
                                                $('#tableaux3 tbody').append(tr2);
                                        })
                                        
                                    }
          
    
  });
  
}
        //----------------achevement milistone filtre----------------------------

    var url2=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+ProjID+"')/Tasks"
    var response2=response2 || [];
    function filtrerAchevementMilistone(){
      return $.ajax({url:url2 ,   
                      
                                  method: "GET",
                                  dataType: "json",
                                  headers: {Accept: "application/json;odata=verbose"},       
                                  success: function(data) {     
                                    response2 = response2.concat(data.d.results);
                                    if (data.d.__next) {
                                        url2 = data.d.__next;
                                        filtrerAchevementMilistone();
                                    }
                                    var myLabels=[];
                                    var myDataSets=[];
                                    
                                    $.each(response2, function(key, value) {
                                     
                                         
                                        var projName=value.TaskName;
                                        var jalon=value.TaskIsMilestone;
                                            var epn = value.TaskPercentCompleted;
                                            if(jalon){
                                                myLabels.push(projName);
                                                myDataSets.push(epn);
                                            }
                                    });

                                    //--
                                    if(myLabels.length>0){
                                      document.getElementById("milistoneNonValide").innerHTML = "<p class='text-danger'> </p>";
                                      $("#divMilstone").show();
                                    }else{
                                      document.getElementById("milistoneNonValide").innerHTML = "";
                                      $("#divMilstone").hide();
                                    }
                                        
                                        var ctx2 = document.getElementById("milistonechart").getContext('2d');

if(window.mychartBar != undefined)
{
  window.mychartBar.destroy();
}

window.mychartBar = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: myLabels ,
    datasets: [{
      data: myDataSets,
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
    }]
  },
          options: {
        responsive: true,
        scales: {
            xAxes: [{
              scaleLabel: {
            display: true
          },
                ticks: {
                    beginAtZero: true,
                     // Edit the value according to what you need
                }
            }],
            yAxes: [{
                stacked: true,
                beginAtZero: true,
                scaleLabel: {
            display: true,
            labelString: '%Achévement'
          },
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
    },
plugins:{
labels: {
render: 'value',
fontColor: '#000',
position: 'inside'
}
}
      },
});
  
                                  }
                                });

 
    }
    var url3=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+ProjID+"')/Tasks";
    var response3= response3 || [];
            //----------------achevement phase filtre----------------------------
            function filtrerAchevementPhase(){
              $.ajax({url: url3,   
                      
                      method: "GET",
                      dataType: "json",
                      headers: {Accept: "application/json;odata=verbose"},       
                      success: function(data) {     
                        response3 = response3.concat(data.d.results);
                        if (data.d.__next) {
                            url3 = data.d.__next;
                            filtrerAchevementPhase();
                        }
                        var myLabels=[];
                        var myDataSets=[];
                        
                        $.each(response3, function(key, value) {
                          moment.locale('fr');
                          

                            var projName=value.ProjectName;
                            var taskName=value.TaskName;
                            var nomTacheP=value.ParentTaskName;
                                var jalon=value.TaskIsMilestone;
                                            var epn = value.TaskPercentCompleted;
                                    if(!jalon && nomTacheP==projName && taskName!=projName){
                                        myLabels.push(taskName);
                                        myDataSets.push(epn);
                                    }
                            

                            
                            
                            
                        });
                            if(myLabels.length>0){
                              document.getElementById("phaseNonValide").innerHTML = "<p class='text-danger'> </p>";
                              $("#divPhase").show();
                            }else{
                              document.getElementById("phaseNonValide").innerHTML = "";
                              $("#divPhase").hide();
                            }
                            var ctx1 = document.getElementById("phasechart").getContext('2d');

if(window.mychartBar1 != undefined)
{
window.mychartBar1.destroy();
}

window.mychartBar1 = new Chart(ctx1, {
type: 'bar',
data: {
labels: myLabels ,
datasets: [{
data: myDataSets,
backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
"#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
"#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
"#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
"#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
"#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
}]
},
        options: {
        responsive: true,
        scales: {
            xAxes: [{
              scaleLabel: {
            display: true
            
          },
                ticks: {
                    beginAtZero: true,
                     // Edit the value according to what you need
                }
            }],
            yAxes: [{
                stacked: true,
                beginAtZero: true,
                scaleLabel: {
            display: true,
            labelString: '%Achévement'
          },
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
      //render: 'value'
    },
plugins:{
labels: {
render: 'value',
fontColor: '#000',
position: 'inside'
}}

      },
});

                      }
                    });
    }
    //----------------filtrer les risques par nom de projet----------------------------
    var url4=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Risks?&$filter=ProjectId%20eq%20guid'"+ProjID+"'";
    var response4= response4 || [];
    function filtrerRisque(){
      table1 = document.getElementById("tableaux1");
      tr5= table1.getElementsByTagName("tr");
      if(tr5.length>0){                                       
         $('#tableaux1 tbody').empty();
      }



      var test;
      $.ajax({url: url4,   
                      
                      method: "GET",
                      dataType: "json",
                      headers: {Accept: "application/json;odata=verbose"},       
                      success: function(data) {     
                      response4 = response4.concat(data.d.results);
                if (data.d.__next) {
                    url4 = data.d.__next;
                    filtrerRisque();
                }
            var listItemInfo = ""; 
                        

            var input,filter;
  input = document.getElementById("mylist1");
  
  filter = input.value.toUpperCase();
var link="";

            var i=0;
$.each(response4, function(key, value) 
{  
  //var ident = value.PropriétaireId;
  var statutV=value.Status;
  var chemin=value.ItemRelativeUrlPath;
  
  var urlProjet=document.getElementById("chemProjet").innerHTML;
  console.log("urlProjet : "+urlProjet);
  var c=chemin[12];
  
  link=urlProjet+"/Lists/Risks/DispForm.aspx?ID="+c;
  





  moment.locale('fr');

var titre=value.Title;
var statut=value.Status;
var assigné=value.AssignedToResource;
if(assigné != null)
{
  var assignés=assigné;
}
else
{
  var assignés = "";
}
var datc=value.CreatedDate;
var projName=value.ProjectName;

dateP=moment(datc).format('L');



//tableau risque
    var tr;
      tr = $("<tr>");
tr.append("<td>" + titre +"</td>");
tr.append("<td>" + statut +"</td>");
tr.append("<td>" + assignés +"</td>");
tr.append("<td>" + dateP +"</td>");
//tr.append("<td><a href='"+link+"'><i class='glyphicon glyphicon-link w3-spin w3-jumbo'></i></a></td>");
tr.append("<td  style='display:none;'>" + projName +"</td>");



$('#tableaux1 tbody').append(tr);


i++;
test=true;


  




});
$('#tableaux1').DataTable();

if(i==0){
  var tr1;
      tr1 = $("<tr>")
  var msg="Pas de risques associé à ce projet!";
  tr1.append("<td  colspan='6'><center>" + msg +"</center></td>");
  table = document.getElementById("tableaux1");
      tr6 = table.getElementsByTagName("tr");
      if(tr6.length>0){                                       
         $('#tableaux1 tbody').empty();
      }
  $('#tableaux1 tbody').append(tr1);
}
$('#tableaux1').DataTable();
}   
});



    }
    //----------------filtrer les problèmes par nom de projet----------------------------
    var url5=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues?&$filter=ProjectId%20eq%20guid'"+ProjID+"'";
    var response5= response5 || [];
    function filtrerProbleme(){
      prob = document.getElementById("Scooptab");
      tr7 = prob.getElementsByTagName("tr");
      if(tr7.length>0){   
        console.log("yessssss");                                    
         $('#Scooptab tbody').empty();
      }
      var test;
      $.ajax({url: url5,   
                      
                      method: "GET",
                      dataType: "json",
                      headers: {Accept: "application/json;odata=verbose"},       
                      success: function(data) {     
                      response5 = response5.concat(data.d.results);
                      if (data.d.__next) {
                          url5 = data.d.__next;
                          filtrerProbleme();
                      }
            

                      var input,filter;
  input = document.getElementById("mylist1");
  filter = input.value.toUpperCase();




                      var i=0;
$.each(response5, function(key, value) 
{  
  var chemin=value.ItemRelativeUrlPath;
  
  var urlProjet=document.getElementById("chemProjet").innerHTML;
  console.log("urlProjet : "+urlProjet);
  var c=chemin[13];
  console.log("c= "+c);
  link=urlProjet+"/Lists/Issues/DispForm.aspx?ID="+c;
  

  moment.locale('fr');
  
var titre=value.Title;
var statut=value.Status;
var assigné=value.AssignedToResource;
var datc=value.CreatedDate;
var projName=value.ProjectName;
dateP=moment(datc).format('L');
if(assigné != null)
{
  var assignés=assigné;
}
else
{
  var assignés = "";
}



//tableau contient les données Baselines Mais le Tableau est en état Hide
    var tr;
      tr = $("<tr>");
tr.append("<td>" + titre +"</td>");
tr.append("<td>" + statut +"</td>");
tr.append("<td>" + assignés +"</td>");
tr.append("<td>" + dateP +"</td>");
//tr.append("<td><a href='"+link+"'><i class='glyphicon glyphicon-link w3-spin w3-jumbo'></i></a></td>");
tr.append("<td  style='display:none;'>" + projName +"</td>");


$('#Scooptab tbody').append(tr);

i++;




});


if(i==0){
      
  var tr1;
      tr1 = $("<tr>")
  var msg="Pas de problèmes associé à ce projet!";
  tr1.append("<td  colspan='6'><center>" + msg +"</center></td>");

  $('#tableauxprobléme').append(tr1);
}
$('#Scooptab').DataTable();
}   
});


    }

    filtrerProjets();
    filtrerAchevementMilistone();
    filtrerAchevementPhase();
    setTimeout(filtrerRisque,3000);
    //filtrerRisque();
    //filtrerProbleme();
    setTimeout(filtrerProbleme,3000);
}






</script>