
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/portFolioDashboard/css/bootstrap.min.css" rel="stylesheet">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/portFolioDashboard/css/style.css" rel="stylesheet">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

<style>


.form-item__element {
  display: inline-block;
  padding: 0.5em;
  vertical-align: middle;
  background: #fff;
  border-radius: 4px;
  border: 1px solid gray;
  width:200px;
}

.form-item__element option {
  color: #444;
  font-size: 14pt ;
}


 .ms-core-overlay{
     background-color: white !important
 }

span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}



   #tableaux th {
    background-color: #31752f;
    color: white;
  }


.stat-digit{
    font-size: 25px;
    font-family: cursive;
}


.ms-rtestate-field h4, h4.ms-rteElement-H4 {
    line-height: 1.6;
    color: white;
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

     .smallRisks {
    font-size: 150%;
    float: left;
    font-weight: bold;
    color : white;
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

option:empty
{
 display:none;
}


.table-bordered>tbody>tr>td, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>td, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>thead>tr>th {
   // border: 1px solid #31752f;
}

#tableaux tr > *:nth-child(7) {
    text-align: center;
}

#tableaux tr > *:nth-child(8) {
    text-align: center;
}

#tableaux tr > *:nth-child(9) {
    text-align: center;
}

#tableaux tr > *:nth-child(10) {
    text-align: center;
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

.verti{
	  padding:8px;
	  display:block;
	  width:70%;
	  height:100px;
	  color:black;
	  box-sizing: border-box;
	  background-color: #fff;
	  border: 1px solid rgba(0,0,0,.125);
	  background-color:#dddddd;
}


</style>	
</head>

<body>
		<div id="headercolor">
          <div>
            <small class="smallRisks">
              <h4>PORTFOLIO COST</h4>
            </small>
          </div>

          <div>


            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist1" onchange="MainFilter();">
               <option value="">DIRECTION</option>
            </select>
    

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist2" onchange="MainFilter();">
               <option value="">PROJECT TYPE</option>
            </select>

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist3" onchange="MainFilter();">
               <option value="">PROJECT OWNER</option>
            </select>

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist4" onchange="MainFilter();">
               <option value="">GOVERNANCE PHASE</option>
            </select>

      </div>       
      </div>


    <div id="main-wrapper">


      <div class="nk-sidebar" style="top:0px; background-color:transparent;">           
            <div class="nk-nav-scroll" style="background-color:transparent;">
                <ul class="metismenu" id="menu" style="background-color:transparent;">

                    <li class="verti couleurkpi" style="height:80px;">
        <div class="card-body">
          <div class="stat-widget-one">
            <div class="stat-content dib">
              <div class="stat-text">At Least 20% over baseline cost</div>
              <div class="stat-icon dib"><img src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/img/boule.png" class="img-rounded" alt="Cinque Terre" width="35px" height="35px"></div>
            </div>
          </div>
        </div></li></br></br>

    <li class="verti couleurkpi" style="height:80px;">
        <div class="card-body">
          <div class="stat-widget-one">
            <div class="stat-content dib">
              <div class="stat-text">Between 10%-20% over baseline</div>
              <div class="stat-icon dib"><img src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/img/jaune.png" class="img-rounded" alt="Cinque Terre" width="35px" height="35px"></div>
            </div>
          </div>
        </div></li></br></br>

  <li class="verti couleurkpi" style="height:80px;">
        <div class="card-body">
          <div class="stat-widget-one">
            <div class="stat-content dib">
              <div class="stat-text">Less than 10% over baseline cost</div>
              <div class="stat-icon dib"><img src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/img/vert.png" class="img-rounded" alt="Cinque Terre" width="35px" height="35px"></div>
            </div>
          </div>
        </div></li></br></br>

  <li class="verti couleurkpi" style="height:80px;">
        <div class="card-body">
          <div class="stat-widget-one">
            <div class="stat-content dib">
              <div class="stat-text">No Baseline</div>
              <div class="stat-icon dib"><img src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/img/gris.png" class="img-rounded" alt="Cinque Terre" width="35px" height="35px"></div>
            </div>
          </div>
        </div></li></br></br>


                   <li> <div class="col-3" style="flex: 0 0 100%; max-width: 100%; margin-top:10px;">
                        <div class="card card-widget">
                            <div class="card-body gradient-4">
                                <div class="media">
                                    <span class="card-widget__icon"><i class="fa fa-handshake-o"></i></span>
                                    <div class="media-body">
                                    	<h4 class="card-widget__subtitle">PROJECT COUNT</h4>
                                        <h2 class="card-widget__title" style="color:white;" id="prcount"></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
                    <li><div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                        <div class="card card-widget">
                            <div class="card-body gradient-4">
                                <div class="media">
                                    <span class="card-widget__icon"><i class="fa fa-briefcase"></i></span>
                                    <div class="media-body">
                                    	<h4 class="card-widget__subtitle">PROJECT COST</h4>
                                        <h2 class="card-widget__title" style="color:white;" id="prcost"></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
                   <li> <div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                        <div class="card card-widget">
                            <div class="card-body gradient-4">
                                <div class="media">
                                    <span class="card-widget__icon"><i class="fa fa-briefcase"></i></span>
                                    <div class="media-body">
                                    	<h4 class="card-widget__subtitle">COST VARIANCE</h4>
                                        <h2 class="card-widget__title" style="color:white;" id="cvariance"></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
                   <li> <div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                        <div class="card card-widget">
                            <div class="card-body gradient-4">
                                <div class="media">
                                    <span class="card-widget__icon"><i class="fa fa-briefcase"></i></span>
                                    <div class="media-body">
                                    	<h4 class="card-widget__subtitle">PROJECT WORK</h4>
                                        <h2 class="card-widget__title" style="color:white;" id="prwork"></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
                   <li> <div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                        <div class="card card-widget">
                            <div class="card-body gradient-4">
                                <div class="media">
                                    <span class="card-widget__icon"><i class="fa fa-area-chart"></i></span>
                                    <div class="media-body">
                                    	<h4 class="card-widget__subtitle">WORK VARIANCE</h4>
                                        <h2 class="card-widget__title" style="color:white;" id="wrvariance"></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
					<li>  <div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                        <div class="card card-widget">
                            <div class="card-body gradient-4">
                                <div class="media">
                                    <span class="card-widget__icon"><i class="fa fa-cc"></i></span>
                                    <div class="media-body">
                                    	<h4 class="card-widget__subtitle">ACTIVE RISKS</h4>
                                        <h2 class="card-widget__title" style="color:white;" id="actRisk"></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
					  <li><div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                        <div class="card card-widget">
                            <div class="card-body gradient-4">
                                <div class="media">
                                    <span class="card-widget__icon"><i class="fa fa-cc"></i></span>
                                    <div class="media-body">
                                    	<h4 class="card-widget__subtitle">ACTIVE ISSUES</h4>
                                        <h2 class="card-widget__title" style="color:white;" id="actIssue"></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
                </ul>
            </div>
        </div>
      
        <div class="content-body">	
                <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                	<h4 class="card-title" style="color:black;">PROJECTS BY COVERNANCE PHASE</h4>
                                   <canvas id="projchart"></canvas>
                                </div>
                            </div>
                            
                        </div>    
     
                       <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title" style="color:black;">PROJECTS BY TYPE</h4>
                                   <canvas id="barsline"></canvas>
                                </div>
                            </div>
                            
                        </div>    
                    </div>
                    
                    
            <div class="col-md-12 col-sm-12 col-xs-12">
               <div class="x_panel">
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                       
                        <div class="card-box table-responsive">
                          
                          <table id="tableaux" class="table table-striped table-bordered" >
                            <thead>
                              <tr>
                                <th>PROJECT NAME</th>
                                <th></th>
                                <th>PROJECT OWNER</th>
                                <th>START DATE</th>
                                <th>FINISH DATE</th>
                                <th>COST</th>
                                <th>COST HEALTH</th>
                                <th>WORK HEALTH</th>
                                <th>SCHEDULE HEALTH</th>
                                <th>% COMPLETE</th>
                              </tr>
                            </thead>
                            </table>
                           
                          


                          </div>



                         


                          
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              

             

            </div>
			
        </div>
  
        






    </div>
     <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>
     <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/portFolioDashboard/javascript/jquery3.4.1.js"></script>
     <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/portFolioDashboard/javascript/custom.min.js"></script>
     <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/portFolioDashboard/javascript/Chart.min.js"></script>
	 <script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>
 



<script type="text/javascript">























function MainFilter()
{
 
  function filtrerTableau()
  {
    var input, input2, input3, input4, filter, filter2, filter3, filter4, table, tr, td, td2, td3, td4, i, k;
    input = document.getElementById("mylist3");
    input2 = document.getElementById("mylist2");
    input3 = document.getElementById("mylist1");
    input4 = document.getElementById("mylist4");
    filter = input.value.toUpperCase();
    filter2 = input2.value.toUpperCase();
    filter3 = input3.value.toUpperCase();
    filter4 = input4.value.toUpperCase();
    table = document.getElementById("tableaux");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {

          td = tr[i].getElementsByTagName("td")[13];
          td3 = tr[i].getElementsByTagName("td")[12];
          td2 = tr[i].getElementsByTagName("td")[11];
          td4 = tr[i].getElementsByTagName("td")[10];

    if ((td) || (td2) || (td3) ||(td4)){
      if ((td.innerHTML.toUpperCase().indexOf(filter) > -1)&&(td2.innerHTML.toUpperCase().indexOf(filter2) > -1)&&(td3.innerHTML.toUpperCase().indexOf(filter3) > -1)&&(td4.innerHTML.toUpperCase().indexOf(filter4) > -1))      {
          tr[i].style.display = "";
          
      } else {
          tr[i].style.display = "none";
      }
      
    }
    var numRows = document.getElementById("tableaux").rows.length;
      }
      
    }





    

  function FilterProjectType() {                
   
var input, input2, input3, input4, filter, filter2, filter3, filter4, table, tr, td, td2, td3, td4, i, k;
var itermeidiaryObject = {}; 
input = document.getElementById("mylist3");
input2 = document.getElementById("mylist2");
input3 = document.getElementById("mylist1");
input4 = document.getElementById("mylist4");
filter = input.value.toUpperCase();
filter2 = input2.value.toUpperCase();
filter3 = input3.value.toUpperCase();
filter4 = input4.value.toUpperCase();
table = document.getElementById("tableaux");
tr = table.getElementsByTagName("tr");

for (i = 0; i < tr.length; i++) {
    var som = 0;
      td = tr[i].getElementsByTagName("td")[13];
      td3 = tr[i].getElementsByTagName("td")[12];
      td2 = tr[i].getElementsByTagName("td")[11];
      td4 = tr[i].getElementsByTagName("td")[10];

if ((td) || (td2) || (td3) ||(td4)){
  if ((td.innerHTML.toUpperCase().indexOf(filter) > -1)&&(td2.innerHTML.toUpperCase().indexOf(filter2) > -1)&&(td3.innerHTML.toUpperCase().indexOf(filter3) > -1)&&(td4.innerHTML.toUpperCase().indexOf(filter4) > -1))      {
    var epn = table.rows[i].cells[11].innerText;
   
    
var som = 0;
if (epn != null) {
          itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
        }
        var somme = som;
      }
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

      
var ctx2 = document.getElementById("barsline").getContext('2d');
if(window.echartdonut != undefined)
{
window.echartdonut.destroy();
}

window.echartdonut = new Chart(ctx2, {
type: 'doughnut',
data: {
labels: labels ,
datasets: [{
data: pievalues,
backgroundColor: colorscheme
}]
},
options:{
legend: { display: false },
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
fontColor: '#000',
render :'value',
fontSize: 10
}
]
}
}
});


  


} 
function filterGovernancePhase(){
  var itermeidiaryObject = {};
  var input, input2, input3, input4, filter, filter2, filter3, filter4, table, tr, td, td2, td3, td4, i, k;
  input = document.getElementById("mylist3");
  input2 = document.getElementById("mylist2");
  input3 = document.getElementById("mylist1");
  input4 = document.getElementById("mylist4");
  filter = input.value.toUpperCase();
  filter2 = input2.value.toUpperCase();
  filter3 = input3.value.toUpperCase();
  filter4 = input4.value.toUpperCase();
  table = document.getElementById("tableaux");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
      var som = 0;
        td = tr[i].getElementsByTagName("td")[13];
        td3 = tr[i].getElementsByTagName("td")[12];
        td2 = tr[i].getElementsByTagName("td")[11];
        td4 = tr[i].getElementsByTagName("td")[10];
  
  if ((td) || (td2) || (td3) ||(td4)){
    if ((td.innerHTML.toUpperCase().indexOf(filter) > -1)&&(td2.innerHTML.toUpperCase().indexOf(filter2) > -1)&&(td3.innerHTML.toUpperCase().indexOf(filter3) > -1)&&(td4.innerHTML.toUpperCase().indexOf(filter4) > -1))      {
      var som = 0;
      var epn = table.rows[i].cells[10].innerText;

      //console.log("epn : "+epn);
    /*  if(epn==null){
       epn="not assigned";
     } */
      
  
  if (epn != null) {
            itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
            console.log("epn : "+epn);
          }
          var somme = som;
        }
    } 
    
  }
  var finalObject = Object.keys(itermeidiaryObject).map(function(key) {
      return {
        label: key,
        y: itermeidiaryObject[key]
      }
    });
    
    var pievalues = finalObject.map(function(value, index) {
      console.log("value.y : "+value.y);
      return value.y;
      
    });
    console.log("pievalues : "+pievalues);
    
    var labels = finalObject.map(function(value, index) {
     
      console.log("value.label : "+value.label);
      return value.label;
      
    });
    console.log("labels : "+labels);
  
    do{
      changed = false;
      for(var i=0; i < labels.length-1; i++) {
          if((labels[i].toString().localeCompare(labels[i+1].toString()))==1) {
              var tmp = labels[i];
              labels[i] = labels[i+1];
              labels[i+1] = tmp;
              
              var tmp1 = pievalues[i];
              pievalues[i] = pievalues[i+1];
              pievalues[i+1] = tmp1;
              changed = true;
          }
      }
  } while(changed);
  var ctx1 = document.getElementById("projchart").getContext('2d');
  
  if(window.mychartBar != undefined)
  {
  window.mychartBar.destroy();
  }
  
  window.mychartBar = new Chart(ctx1, {
  type: 'horizontalBar',
  data: {
  labels: labels ,
  datasets: [{
  data: pievalues,
  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
          "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
  }]
  },
  options:{
    scales: {
 
      xAxes: [{
       ticks: {
        beginAtZero:true
        }
     }]
   },
  responsive: true,
  
  legend: { display: false },
  plugins:{
  labels: {
  render: 'label',
  fontColor: '#000',
  position: 'outside'
  }
  }
  }
  });
  
  
 
  
    
} 
function compteNbProjFiltrer(){
  var itermeidiaryObject = {};
  var input, input2, input3, input4, filter, filter2, filter3, filter4, table, tr, td, td2, td3, td4, i, k;
  input = document.getElementById("mylist3");
  input2 = document.getElementById("mylist2");
  input3 = document.getElementById("mylist1");
  input4 = document.getElementById("mylist4");
  filter = input.value.toUpperCase();
  filter2 = input2.value.toUpperCase();
  filter3 = input3.value.toUpperCase();
  filter4 = input4.value.toUpperCase();
  table = document.getElementById("tableaux");
  tr = table.getElementsByTagName("tr");
  var nbre = 0;
  for (i = 0; i < tr.length; i++) {
      
        td = tr[i].getElementsByTagName("td")[13];
        td3 = tr[i].getElementsByTagName("td")[12];
        td2 = tr[i].getElementsByTagName("td")[11];
        td4 = tr[i].getElementsByTagName("td")[10];
  
  if ((td) || (td2) || (td3) ||(td4)){
    if ((td.innerHTML.toUpperCase().indexOf(filter) > -1)&&(td2.innerHTML.toUpperCase().indexOf(filter2) > -1)&&(td3.innerHTML.toUpperCase().indexOf(filter3) > -1)&&(td4.innerHTML.toUpperCase().indexOf(filter4) > -1))    
      {
        var nomProjet = table.rows[i].cells[0].innerText;
        if(nomProjet != null)
            {
                nbre ++;
            }



        }
    } 
    
  }
  document.getElementById("prcount").innerHTML = nbre;
}                                
 
function costValuesFiltrer(){
  


var input, input2, input3, input4, filter, filter2, filter3, filter4, table, tr, td, td2, td3, td4, i, k;
input = document.getElementById("mylist3");
input2 = document.getElementById("mylist2");
input3 = document.getElementById("mylist1");
input4 = document.getElementById("mylist4");
filter = input.value.toUpperCase();
filter2 = input2.value.toUpperCase();
filter3 = input3.value.toUpperCase();
filter4 = input4.value.toUpperCase();
table = document.getElementById("tableaux");
tr = table.getElementsByTagName("tr");
var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;

for (i = 0; i < tr.length; i++) {
    var som = 0;
      td = tr[i].getElementsByTagName("td")[13];
      td3 = tr[i].getElementsByTagName("td")[12];
      td2 = tr[i].getElementsByTagName("td")[11];
      td4 = tr[i].getElementsByTagName("td")[10];

if ((td) || (td2) || (td3) ||(td4)){
  if ((td.innerHTML.toUpperCase().indexOf(filter) > -1)&&(td2.innerHTML.toUpperCase().indexOf(filter2) > -1)&&(td3.innerHTML.toUpperCase().indexOf(filter3) > -1)&&(td4.innerHTML.toUpperCase().indexOf(filter4) > -1))    
    {
      var pCost = parseInt(table.rows[i].cells[14].innerText);
      var pcostVar = parseInt(table.rows[i].cells[15].innerText);
      var pwork = parseInt(table.rows[i].cells[16].innerText);
      var pwvariance = parseInt(table.rows[i].cells[17].innerText);
      //var nomProjet = table.rows[i].cells[10].innerText;
      
              projCost = projCost + pCost;
projcostvariance = projcostvariance+pcostVar;
projWork= projWork+ pwork;
pworkvariance = pworkvariance + pwvariance;

          



      }
  } 
  
}
document.getElementById("prcost").innerHTML = conToMill(projCost);
document.getElementById("cvariance").innerHTML = conToMill(projcostvariance);
document.getElementById("prwork").innerHTML = conToMill(projWork);
document.getElementById("wrvariance").innerHTML = conToMill(pworkvariance);

}

function filterRiskNumb(){
  var nbRisk=0;
  var input, input2, input3, input4, filter, filter2, filter3, filter4, table, tr, td, td2, td3, td4, i, k;
input = document.getElementById("mylist3");
input2 = document.getElementById("mylist2");
input3 = document.getElementById("mylist1");
input4 = document.getElementById("mylist4");
filter = input.value.toUpperCase();
filter2 = input2.value.toUpperCase();
filter3 = input3.value.toUpperCase();
filter4 = input4.value.toUpperCase();
table = document.getElementById("tableaux");
tr = table.getElementsByTagName("tr");
var ctr = 0;
for (i = 0; i < tr.length; i++) {
    
      td = tr[i].getElementsByTagName("td")[13];
      td3 = tr[i].getElementsByTagName("td")[12];
      td2 = tr[i].getElementsByTagName("td")[11];
      td4 = tr[i].getElementsByTagName("td")[10];

if ((td) || (td2) || (td3) ||(td4)){
  if ((td.innerHTML.toUpperCase().indexOf(filter) > -1)&&(td2.innerHTML.toUpperCase().indexOf(filter2) > -1)&&(td3.innerHTML.toUpperCase().indexOf(filter3) > -1)&&(td4.innerHTML.toUpperCase().indexOf(filter4) > -1))    
    {
     
      var id = table.rows[i].cells[18].innerText;
      if(id!=null){
        
        var nbcoppy=0;

        $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+id+"')/Risks",     
                          method: "GET",
                          dataType: "json",
                          headers: {Accept: "application/json;odata=verbose"},       
                          success: function(data) {     
                          var dataResults = data.d.results; 
                          var nbreRisks = 0;             
                
                  $.each(dataResults, function(key, value) 
                  {
                    
                    var titreRisks = value.Title;
                    if(titreRisks != null)
                      {
                        nbreRisks ++;
                      }
                    
                      nbcoppy=nbreRisks;
                     
                  });  
                  nbcoppy=nbreRisks;
                  
                  nbRisk = nbRisk + nbcoppy;
                  
                  document.getElementById("actRisk").innerHTML = nbRisk;
              }
              
              
      });
      
     
      
      }
      
}
  } 
  
}

} 


function filterIssueNumb(){
  var nbIss=0;
  var input, input2, input3, input4, filter, filter2, filter3, filter4, table, tr, td, td2, td3, td4, i, k;
input = document.getElementById("mylist3");
input2 = document.getElementById("mylist2");
input3 = document.getElementById("mylist1");
input4 = document.getElementById("mylist4");
filter = input.value.toUpperCase();
filter2 = input2.value.toUpperCase();
filter3 = input3.value.toUpperCase();
filter4 = input4.value.toUpperCase();
table = document.getElementById("tableaux");
tr = table.getElementsByTagName("tr");
var ctr = 0;
for (i = 0; i < tr.length; i++) {
    
      td = tr[i].getElementsByTagName("td")[13];
      td3 = tr[i].getElementsByTagName("td")[12];
      td2 = tr[i].getElementsByTagName("td")[11];
      td4 = tr[i].getElementsByTagName("td")[10];

if ((td) || (td2) || (td3) ||(td4)){
  if ((td.innerHTML.toUpperCase().indexOf(filter) > -1)&&(td2.innerHTML.toUpperCase().indexOf(filter2) > -1)&&(td3.innerHTML.toUpperCase().indexOf(filter3) > -1)&&(td4.innerHTML.toUpperCase().indexOf(filter4) > -1))    
    {
     
      var id = table.rows[i].cells[18].innerText;
      if(id!=null){
      
        var nbcoppy=0;

        $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+id+"')/Issues",     
                          method: "GET",
                          dataType: "json",
                          headers: {Accept: "application/json;odata=verbose"},       
                          success: function(data) {     
                          var dataResults = data.d.results; 
                          var nbreIssue = 0;             
                
                  $.each(dataResults, function(key, value) 
                  {
                    
                    var titreIssue = value.Title;
                    if(titreIssue != null)
                      {
                          nbreIssue ++;
                      }
                    
                      nbcoppy=nbreIssue;
                     
                  });  
                  nbcoppy=nbreIssue;
                  
                  nbIss = nbIss + nbcoppy;
                  document.getElementById("actIssue").innerHTML = nbIss;
              }
              
      });
      
     
      
      }
      
}
  } 
  
}

} 



filtrerTableau();

//setTimeout(() => { }, 7000);
FilterProjectType(); 
filterGovernancePhase(); 
compteNbProjFiltrer(); 
costValuesFiltrer();
filterRiskNumb();
filterIssueNumb();

}







//&&(td2.innerHTML.toUpperCase().indexOf(filter2) > -1)&&(td3.innerHTML.toUpperCase().indexOf(filter3) > -1)&&(td4.innerHTML.toUpperCase().indexOf(filter4) > -1)






//-----------------------------------------------------------------------------------------------------------------------------
//Premier affichage par défaut


function conToMill(num) {
if (num==0)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2))  : Math.sign(num)*Math.abs(num)
}
if (num<1000000 && num>999)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(2)) + 'K' : Math.sign(num)*Math.abs(num)
}
if (num<-999 && num>-1000000)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(2)) + 'K' : Math.sign(num)*Math.abs(num)
}
if (num<0 && num>-1000)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2)) : Math.sign(num)*Math.abs(num)
}
if (num>0 && num<1000)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2)) : Math.sign(num)*Math.abs(num)
}
if (num>999999)
{
     return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(2)) + 'M' : Math.sign(num)*Math.abs(num)
}
if (num<-999999)
{
     return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(2)) + 'M' : Math.sign(num)*Math.abs(num)
}

}


//Load All Data in Select Lists


//Fonction qui permet d'afficher les list des Projets
function LoadProjectTypeName() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo3 = "";            
            $.each(dataResults, function(key, value) 
            {           
                 
                var projectType = value.EnterpriseProjectTypeName; 
                var projetId = value.ProjectId;

                       $('#mylist2').append($('<option>',
                           {
                              text : projectType
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
  _spBodyOnLoadFunctionNames.push("LoadProjectTypeName");



//Fonction qui permet d'afficher liste de Projet  
function LoadProjectGovernant() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                         
            $.each(dataResults, function(key, value) 
            {           
                var nomprojet = value.ProjectPhase;    
                var projetId = value.ProjectId;    
                    if(nomprojet !="")
                    {
                      var prName = nomprojet;
                    
                  
                       $('#mylist4').append($('<option>',
                           {
                              text : prName
                            }));   
                     }
                       var opt = {};
                              $("#mylist4 > option").each(function () {
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
  _spBodyOnLoadFunctionNames.push("LoadProjectGovernant");






//Fonction qui permet d'afficher liste de Projet  
function LoadProjectOwner() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                         
            $.each(dataResults, function(key, value) 
            {           
                var projetId = value.ProjectId;  
                var nomprojet = value.ProjectOwnerName;    
                  
                
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
  _spBodyOnLoadFunctionNames.push("LoadProjectOwner");



//Fonction qui permet d'afficher les list des risks
function LoadDepartement() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";            
            $.each(dataResults, function(key, value) 
            {           
                var projetId = value.ProjectId;  
                var nomprojet = value.Servicesduprojet;    
                  
                
                       $('#mylist1').append($('<option>',
                           {
                              text : nomprojet
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
  _spBodyOnLoadFunctionNames.push("LoadDepartement");



//Load Number Of All Issues
function NumberOfAllIssues()
{
  var nbreIssue = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues",     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;              
          
            $.each(dataResults, function(key, value) 
            {
                 var titreIssue = value.Title;
                 if(titreIssue != null)
                 	{
                 		nbreIssue ++;
                 	}
                  
            });  
            document.getElementById("actIssue").innerHTML = nbreIssue;             
        }
});
}
  _spBodyOnLoadFunctionNames.push("NumberOfAllIssues");



//Load Number Of All Risks
function NumberOfAllRisks()
{
  var nbreRisks = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks",     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;              
          
            $.each(dataResults, function(key, value) 
            {
                 var titreRisks = value.Title;
                 if(titreRisks != null)
                 	{
                 		nbreRisks ++;
                 	}
                  
            });  
            document.getElementById("actRisk").innerHTML = nbreRisks;             
        }
});
}
  _spBodyOnLoadFunctionNames.push("NumberOfAllRisks");


//Load Number Of All Project
function LoadAllNumberProject()
{
  var nbre = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;              
          
            $.each(dataResults, function(key, value) 
            {
                 var nomProjet = value.ProjectName;
                 if(nomProjet != null)
                 	{
                 		nbre ++;
                 	}
                  
            });  
            document.getElementById("prcount").innerHTML = nbre;             
        }
});
}
  _spBodyOnLoadFunctionNames.push("LoadAllNumberProject");






  var responseAllTickets = responseAllTickets || [];

function loadDataSum()
{
  var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;

                $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",                          
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseAllTickets = responseAllTickets.concat(data.d.results);
                    if (data.d.__next) {
                      urlAllTickets = data.d.__next;
                      GetAllTickets();
                    }
                    
        $.each(responseAllTickets, function(key, value) 
        {                 
              var pCost = parseInt(value.ProjectCost);
              var pcostVar = parseInt(value.ProjectCostVariance);
              var pwork = parseInt(value.ProjectWork);
              var pwvariance = parseInt(value.ProjectWorkVariance);


              projCost = projCost + pCost;
              projcostvariance = projcostvariance+pcostVar;
              projWork= projWork+ pwork;
              pworkvariance = pworkvariance + pwvariance;


        });


          document.getElementById("prcost").innerHTML = conToMill(projCost);
          document.getElementById("cvariance").innerHTML = conToMill(projcostvariance);
          document.getElementById("prwork").innerHTML = conToMill(projWork);
		  document.getElementById("wrvariance").innerHTML = conToMill(pworkvariance);
        }   
  });
 }
   _spBodyOnLoadFunctionNames.push("loadDataSum"); 















//Load BarChart for GOVERNANCE

function LoadBarGovernancePhase() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;
              var itermeidiaryObject = {};         
            $.each(dataResults, function(key, value) 
            { 

                    var epn = value.ProjectPhase;
                var som = 0;
                if (epn != null) {
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                  
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

             
var changed;
    do{
        changed = false;
        for(var i=0; i < labels.length-1; i++) {
            if((labels[i].toString().localeCompare(labels[i+1].toString()))==1) {
                var tmp = labels[i];
                labels[i] = labels[i+1];
                labels[i+1] = tmp;
                
                var tmp1 = pievalues[i];
                pievalues[i] = pievalues[i+1];
                pievalues[i+1] = tmp1;
                changed = true;
            }
        }
    } while(changed);
                  
var ctx1 = document.getElementById("projchart").getContext('2d');

if(window.mychartBar != undefined)
{
  window.mychartBar.destroy();
}

window.mychartBar = new Chart(ctx1, {
  type: 'horizontalBar',
  data: {
    labels: labels ,
    datasets: [{
      data: pievalues,
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
					"#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
					"#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
					"#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
					"#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
					"#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
    }]
  },
  options:{
    
scales: {
 
        xAxes: [{
         ticks: {
          beginAtZero:true
          }
       }]
     },
    responsive: true,
    
	
	legend: { display: false },
    plugins:{
  labels: {
    render: 'label',
    fontColor: '#000',
    position: 'outside'
  }
},


  }
});
    

 }  
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadBarGovernancePhase");
  


var colors =  ["#008000", "#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];


//Load Graph For ProjectType
function LoadProjectType() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                      
                          var dataResults = data.d.results;
              var itermeidiaryObject = {};         
            $.each(dataResults, function(key, value) 
            { 

                    var epn = value.EnterpriseProjectTypeName;
                var som = 0;
                if (epn != null) {
                  itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
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

                  
var ctx2 = document.getElementById("barsline").getContext('2d');
if(window.echartdonut != undefined)
{
  window.echartdonut.destroy();
}

window.echartdonut = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: labels ,
    datasets: [{
      data: pievalues,
      backgroundColor: colorscheme
    }]
  },
  options:{
  	legend: { display: false },
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
    fontColor: '#000',
    render :'value',
    fontSize: 10
  }
  ]
}
  }
});
    

 }  
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadProjectType");          
  




//Load All Value in table 

//Table Project 
function LoadTableProjects() {

            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo = "";            
            $.each(dataResults, function(key, value) 
            {           

                var projetId = value.ProjectId;  

                var nomProjet = value.ProjectName;
                var pOwner = value.ProjectOwnerName;
                var projStartDate = value.ProjectStartDate;
				var projfinishdate = value.ProjectFinishDate;
                var projCost = parseFloat(value.ProjectCost).toFixed(3);
                var prPercentCpl = parseFloat(value.ProjectPercentCompleted).toFixed(0);
                var linkProjectSite = value.ProjectWorkspaceInternalUrl;


                 moment.locale('fr');
                  
                  if(projStartDate != null)
                  {
                    var projStartDate = moment(projStartDate).format('L');
                  }

                  if(projfinishdate != null)
                  {
                    var projfinishdate = moment(projfinishdate).format('L');
                  }



                 var pType = value.EnterpriseProjectTypeName;
                 var drProject = value.Servicesduprojet;
                 var projetPhase = value.ProjectPhase;
                 if((projetPhase==null)||(projetPhase.toString()=="")||(projetPhase.toString()=="null")){
                   projetPhase="not assigned";
                 }
                 var propr = value.Owner;
                 
                 //var projWork = value.Work;
                 var pCost = parseInt(value.ProjectCost);
              var pcostVar = parseInt(value.ProjectCostVariance);
              var pwork = parseInt(value.ProjectWork);
              var pwvariance = parseInt(value.ProjectWorkVariance);


                    var tr;
                    tr = $("<tr class='even pointer'>");
                        tr.append("<td>" + nomProjet + "</td>");
                        tr.append("<td><a href='"+linkProjectSite+"'><i class='glyphicon glyphicon-link w3-spin w3-jumbo'></i></a></td>");
                        tr.append("<td>" + pOwner + "</td>"); 
                        tr.append("<td>" + projStartDate+ "</td>"); 
                        tr.append("<td>" + projfinishdate+ "</td>"); 
                        tr.append("<td>" + projCost +" </td>");
                        tr.append("<td><div class='stat-icon dib'><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/img/vert.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        tr.append("<td><div class='stat-icon dib'><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        tr.append("<td><div class='stat-icon dib'><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Tableau_Issue_Risks_Telecom/img/boule.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        tr.append("<td>"+prPercentCpl+"</td>");
                        tr.append("<td style='display:none;'>" + projetPhase +" </td>");
                        tr.append("<td style='display:none;'>" + pType +" </td>");
                        tr.append("<td style='display:none;'>" + drProject +" </td>");
                        tr.append("<td style='display:none;'>" + pOwner +" </td>");
                        tr.append("<td style='display:none;'>" + pCost +" </td>");
                        tr.append("<td style='display:none;'>" + pcostVar +" </td>");
                        tr.append("<td style='display:none;'>" + pwork +" </td>");
                        tr.append("<td style='display:none;'>" + pwvariance +" </td>");
                        tr.append("<td style='display:none;'>" + projetId +" </td>");
                    $('#tableaux').append(tr);

            });


              
}   
});  

}                                  
  _spBodyOnLoadFunctionNames.push("LoadTableProjects");





</script>