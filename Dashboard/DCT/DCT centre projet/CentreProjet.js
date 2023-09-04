
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

  #tableaux1
{
   border-radius: 1em;
  overflow: hidden;
  color:black;
  font-size:smaller;
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
    font-size:smaller;
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




.spinner-border {
  text-align: center;
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
              Centre de projet
            </small>
            </div>

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist1" onchange="MainFilter();">
               <option value="">DIRECTION EXECUTIVE</option>
            </select>
    

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist2" onchange="MainFilter();">
               <option value="">SOUS DIRECTION</option>
            </select>


      </div>       
      </div>
        

        <!-- top navigation -->
        
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main">

              <div class="row">

            
			<div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2 style="font-family: cursive; font-style: normal;"></h2>
                    <div class="clearfix"></div>
              	<div class="table-responsive">
                                  <table id="tableaux1" class="table header-border table-hover verticle-middle table-bordered">
                                        <thead>
                            <tr>
                                <th>Nom De Projet</th>
                                <th style='width:30px'>Description</th>
                                <th>Code</th>
                                <th>C/N</th>
                                <th>Direction Executive</th>
                                <th>Sous Direction</th>
                                <th>Numéro PO</th>
                                <th>Nature</th>
                                <th>Chef De Projet</th>
                                <th>Date Début</th>
                                <th>Date Fin</th>
                                <th>% Achevé</th>
                                <th>Travail (j)</th>
                                <th>Durée (j)</th>
                                
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

function MainFilter(){
 function filtrerTableau()
  {
    var input, input2, input3, input4, filter, filter2, filter3, filter4, table, tr, td, td2, td3, td4, i, k;
    input = document.getElementById("mylist1");
    input2 = document.getElementById("mylist2");
    
    filter = input.value.toUpperCase();
    filter2 = input2.value.toUpperCase();
    
    table = document.getElementById("tableaux1");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {

          td = tr[i].getElementsByTagName("td")[4];
          
          td2 = tr[i].getElementsByTagName("td")[5];
          

    if ((td) || (td2)){
      if ((td.innerHTML.toUpperCase().indexOf(filter) > -1)&&(td2.innerHTML.toUpperCase().indexOf(filter2) > -1)){
          tr[i].style.display = "";
          
      } else {
          tr[i].style.display = "none";
      }
      
    }
    var numRows = document.getElementById("tableaux1").rows.length;
      }
      
    }
    filtrerTableau();

}


var LoadProjectDataLink = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects";
var LoadProjectDataLinkPage = LoadProjectDataLinkPage || []; 

function LoadProjectData(){


   $.ajax({url: LoadProjectDataLink,   
                      
                                  method: "GET",
                                  dataType: "json",
                                  headers: {Accept: "application/json;odata=verbose"},       
                                  success: function(data) {

                                      LoadProjectDataLinkPage = LoadProjectDataLinkPage.concat(data.d.results);
                                      if (data.d.__next) {
                                          LoadProjectDataLink = data.d.__next;
                                          LoadProjectData();
                                      }     
                                    
                                   
                                    
                                    $.each(LoadProjectDataLinkPage, function(key, value) {
                                      
                                        //console.log("url= "+_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/Projets");
                                        moment.locale('fr');
                                        var projName = value.ProjectName;
                                        var direction=value.Direction;
                                        var sousDirection="";
                                        
                                        if(value.sousDirection!=null){
                                          sousDirection=value.sousDirection;
                                        }
                                        
                                        var chefProjet=value.ProjectOwnerName;
                                        var debutProjet=value.ProjectStartDate;
                                         dateDebutProj=moment(debutProjet).format('L');
                                        var finProjet=value.ProjectFinishDate;
                                         dateFinProj=moment(finProjet).format('L');
                                         var numPO=value.PO;
                                        var poProj=Number.parseFloat(numPO).toFixed(0);
                                        var travailProjet=value.ProjectWork;
                                        var travailProj=Number.parseFloat(travailProjet).toFixed(2);
                                        var travailJProjet=travailProjet/8;
                                        var travailJProj=Number.parseFloat(travailJProjet).toFixed(2);
                                        var descProjet=value.ProjectDescription;
                                        var dureeProj=0;
                                        if(value.ProjectDuration!=null){
                                          var dureeProj=value.ProjectDuration;
                                        }
                                        var dureeJProjet=dureeProj/8;
                                        var dureeJProj=Number.parseFloat(dureeJProjet).toFixed(2);

                                        
                                        var nature=value.NatureProjet;
                                        var codeP=value.Codeprojet;
                                        
                                        var achev=value.ProjectPercentWorkCompleted;
                                        var tr;
                                        
                                        tr = $("<tr>");
                                        tr.append("<td style='width:30px;'>" + projName +"</td>");
                                                if(descProjet!=null){
                                                    tr.append("<td style='width:30px'>" + descProjet +"</td>");
                                                }else{
                                                    tr.append("<td style='width:30px'></td>");
                                                }
                                                if(codeP!=null){
                                                    tr.append("<td>" + codeP +"</td>");
                                                }else{
                                                    tr.append("<td></td>");
                                                }
                                                
                                                tr.append("<td></td>");

                                                console.log("directionval : "+direction);
                                                if(direction!=null){
                                                     tr.append("<td>" + direction +"</td>");
                                                }else{
                                                    tr.append("<td></td>");
                                                }
                                                   
                                                
                                                //console.log("sousDirectionval : "+sousDirection);
                                                
                                                    tr.append("<td>" + sousDirection +"</td>");
                                                 
                                                if(numPO!=null){
                                                    tr.append("<td>" + poProj +"</td>");
                                                }
                                                else{
                                                    tr.append("<td></td>");
                                                }
                                                if(nature!=null){
                                                    tr.append("<td>" + nature +"</td>");
                                                }
                                                else{
                                                    tr.append("<td></td>");
                                                }
                                                if(chefProjet!=null){
                                                    tr.append("<td>" + chefProjet +"</td>");
                                                }else{
                                                    tr.append("<td></td>");
                                                }
                                                tr.append("<td>" + dateDebutProj +"</td>");
                                                tr.append("<td>" + dateFinProj +"</td>");
                                                tr.append('<td>'+achev+'%<progress id="" max="100" value="'+achev+'" style="width: 100%"></progress></td>');
                                                tr.append('<td>'+travailJProj+'<progress id="" max="100" value="'+travailJProj+'" style="width: 100%"></progress></td>');
                                                
                                                tr.append('<td>'+dureeJProj+'<progress id="" max="100" value="'+dureeJProj+'" style="width: 100%"></progress></td>');
                                                $('#tableaux1 tbody').append(tr);
                                        
                                    });

                                            $('#tableaux1').DataTable();
          
  }   
  });
}
_spBodyOnLoadFunctionNames.push("LoadProjectData");

 function LoadDirectionData(){
    var input,filter;
            input = document.getElementById("mylist1");
            filter = input.value.toUpperCase();
    $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",   
                      
                                  method: "GET",
                                  dataType: "json",
                                  headers: {Accept: "application/json;odata=verbose"},       
                                  success: function(data) {     
                                    var dataResults = data.d.results;
                                   
                                    
                                    $.each(dataResults, function(key, value) {
                                        
                                        moment.locale('fr');
                                        var direction = value.Direction;
                                       // console.log("direction: "+direction);
                                          if(direction!=null){
                                            //charger select
                                             console.log("direction: "+direction);
                                            $('#mylist1').append($('<option>', { text : direction })); 
                                
                                            var opt = {}; $("#mylist1 > option").each(function () 
                                            { if(opt[$(this).text()]) 
                                            { $(this).remove(); } 
                                            else { opt[$(this).text()] = $(this).val(); } });
                                            
                                          }
                                        
                                        
                                        
                                    })
          
  }   
  });
  
}
_spBodyOnLoadFunctionNames.push("LoadDirectionData");


function LoadSousDirectionData(){
    var input,filter;
            input = document.getElementById("mylist2");
            filter = input.value.toUpperCase();
    $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",   
                      
                                  method: "GET",
                                  dataType: "json",
                                  headers: {Accept: "application/json;odata=verbose"},       
                                  success: function(data) {     
                                    var dataResults = data.d.results;
                                   
                                    
                                    $.each(dataResults, function(key, value) {
                                        
                                        moment.locale('fr');
                                        var sousDirection = value.sousDirection;
                                       // console.log("direction: "+direction);
                                          if(sousDirection!=null){
                                            //charger select
                                             //console.log("direction: "+sousDirection);
                                            $('#mylist2').append($('<option>', { text : sousDirection })); 
                                
                                            var opt = {}; $("#mylist2 > option").each(function () 
                                            { if(opt[$(this).text()]) 
                                            { $(this).remove(); } 
                                            else { opt[$(this).text()] = $(this).val(); } });
                                            
                                          }
                                        
                                        
                                        
                                    })
          
  }   
  });
  
}
_spBodyOnLoadFunctionNames.push("LoadSousDirectionData");

</script>