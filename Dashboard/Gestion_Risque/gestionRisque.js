<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Risque/css/dataTables.bootstrap4.min.css" rel="stylesheet">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Risque/css/style.css" rel="stylesheet">

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

body{
     background-color: #F3F3F9 !important
 }
 .ms-core-overlay{
     background-color: #F3F3F9 !important
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

#datatable th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #31752f;
    color: white;
  }

  #datatable td, #datatable th {
    border: 1px solid #ddd;
    padding: 8px;
}

span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}



.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
    display: none;
}

</style>  
<script>

        </script>



</head>

<body>
                      <div class="row">
                        <div class="col-lg-3 col-sm-6" style="flex: 0 0 100%; max-width: 100%; margin:auto;">
                            <div class="card" style="box-shadow: 0 0 0 0 #fff;">
                                <div class="social-graph-wrapper widget-facebook" style="background-color:#31752f;">
              
                </br>
                <span style="float:left; margin-left:20px; font-weight:bold; font-size:20px;">Risk Management</span>
              
                      
<select id="gouver" class="form-item__element form-item__element--select" style="float:right; margin-right:20px;" onchange="MainFunction()">
      <option selected="" value="">All phases of governance</option>
    </select>

<select id="projowner" class="form-item__element form-item__element--select" style="float:right; margin-right:20px;" onchange="MainFunction()">
      <option selected="" value="">All project owners</option>
    </select>

<select id="projtype" class="form-item__element form-item__element--select" style="float:right; margin-right:20px;" onchange="MainFunction()">
      <option selected="" value="">All types of projects</option>
    </select>

<select id="depart" class="form-item__element form-item__element--select" style="float:right; margin-right:20px;" onchange="MainFunction()">
      <option selected="" value="">All departments</option>
    </select>
  

                

                                </div>

                            </div>
                        </div>
                 </div>


    <div id="main-wrapper">



      
        <div class="content-body" style="margin-left:0px;">

            <div class="container-fluid mt-3">


        
        
          <div class="row">
                        <div class="col-lg-6 col-md-12" style="flex: 0 0 33.33%; max-width: 33.33%;">
                            <div class="card">
                                <div class="card-body">
                                    <h4 id="txtcat" class="card-title">Risks by category</h4>
                                   <canvas id="donutChart" width="500" height="450"  style="display:none;"></canvas>
                                </div>
                            </div>
                        </div>    
     
                       <div class="col-lg-6 col-md-12" style="flex: 0 0 33.33%; max-width: 33.33%;">
                            <div class="card">
                                <div class="card-body">
                                    <h4 id="costEx" class="card-title">Cost of risk VS Cost exposure</h4>
                                   <canvas id="myChart" width="500" height="450" style="display:none;"></canvas>
                                </div>
                            </div> 
                       </div>  

            <div class="col-lg-6 col-md-12" style="flex: 0 0 33.33%; max-width: 33.33%;">
                            <div class="card">
                                <div class="card-body">
                                    <h4 id="txtowner" class="card-title">Risks by project owner</h4>
                                   <canvas id="pieChart" width="500" height="450" style="display:none;"></canvas>
                                </div>
                            </div>
                        </div> 
                    </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Tableau de données</h4>
                                <div class="table-responsive">
                                    <table id="datatable" class="table header-border table-hover verticle-middle">
                                        <thead>
                                            <tr>
                                                <th>Risks</th>
                                                <th>Projects</th>
                                                <th>Category</th>
                                                <th>Due date</th>
                                                <th>Cost</th>
                                                <th>Cost exposure</th>
                                                <th>Probability</th>
                        <th>Propriétaire du projet</th>
                        <th>Direction</th>
                        <th>Type de projet</th>
                        <th>Phase de gouvernance</th>
                                            </tr>
                      
                                        </thead>
                    <tbody>
                    </tbody>
                    <tfoot>
                    </tfoot>
                                  </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
      
        </div>
  

    </div>


 <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/common.min.js"></script>
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/custom.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/fillinselect.js"></script>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/fillintable.js"></script>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Risque/javascript/MainFunction.js"></script>
<script src="https://momentjs.com/downloads/moment.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/fr.js"></script>

