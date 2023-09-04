
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Res/css/style.css" rel="stylesheet">


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
								<span style="float:left; margin-left:20px; font-weight:bold; font-size:20px;">Resource Details</span>
								<span style="margin:auto font-weight:bold; font-size:40px;" id="nomres"></span>
								      
    <select id="select" class="form-item__element form-item__element--select" style="float:right; margin-right:20px;" onchange="MainFunction(this)">    
    </select>
  

								

                                </div>
                                <div class="row">
                                    <div class="col-6" style="flex:16.66%; box-shadow: 0 4px 2px -2px rgba(169,157,231,0.2);">
                                        <div class="pt-3 pb-3 pl-0 pr-0 text-center">
                                            <p class="m-0">CALENDAR</p>
											<h4 class="m-1" id="calen"></h4>
                                        </div>
                                    </div>
                                    <div class="col-6" style="flex:16.66%; box-shadow: 0 4px 2px -2px rgba(169,157,231,0.2);">
                                        <div class="pt-3 pb-3 pl-0 pr-0 text-center">
                                            <p class="m-0">GROUP</p>
											<h4 class="m-1" id="groupres"></h4>
                                        </div>
                                    </div>
                                    <div class="col-6" style="flex:16.66%; box-shadow: 0 4px 2px -2px rgba(169,157,231,0.2);">
                                        <div class="pt-3 pb-3 pl-0 pr-0 text-center">
                                           <p class="m-0">DEPARTMENT</p>
											<h4 class="m-1" id="serv"></h4>
                                        </div>
                                    </div>
									 <div class="col-6" style="flex:50%; background-color:#F3F3F9;">
                                        <div class="pt-3 pb-3 pl-0 pr-0 text-center" style="height:100px; width:100%;">
                                           <canvas id="Singlebar"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                 </div>


    <div id="main-wrapper" style="height:1200px;">


      <div class="nk-sidebar" style="top:0px; background-color:transparent; height:1300px;">           
            <div class="nk-nav-scroll" style="background-color:transparent;">
                <ul class="metismenu" id="menu" style="background-color:transparent;">
                   <li> <div class="col-3" style="flex: 0 0 100%; max-width: 100%; margin-top:10px;">
                        <div class="card card-widget">
                            <div class="card-body gradient-4">
                                <div class="media">
                                    <span class="card-widget__icon"><i class="fa fa-handshake-o"></i></span>
                                    <div class="media-body">
                                        <h2 class="card-widget__title" style="color:white;" id="assnum"></h2>
                                        <h5 class="card-widget__subtitle">Assignments</h5>
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
                                        <h2 class="card-widget__title" style="color:white;" id="asswork"></h2>
                                        <h5 class="card-widget__subtitle">Work</h5>
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
                                        <h2 class="card-widget__title" style="color:white;" id="actualwork"></h2>
                                        <h5 class="card-widget__subtitle">Actual Work</h5>
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
                                        <h2 class="card-widget__title" style="color:white;" id="remainingwork"></h2>
                                        <h5 class="card-widget__subtitle">Remaining Work</h5>
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
                                        <h2 class="card-widget__title" style="color:white;" id="projnum"></h2>
                                        <h5 class="card-widget__subtitle">Chef de projects</h5>
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
                                        <h2 class="card-widget__title" style="color:white;" id="cost"></h2>
                                        <h5 class="card-widget__subtitle">Cost</h5>
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
                                        <h2 class="card-widget__title" style="color:white;" id="actualcost"></h2>
                                        <h5 class="card-widget__subtitle">Actual Cost</h5>
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
                                        <h2 class="card-widget__title" style="color:white;" id="remainingcost"></h2>
                                        <h5 class="card-widget__subtitle">Remaining Cost</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>



					

                </ul>
            </div>
        </div>
      
        <div class="content-body">

            <div class="container-fluid mt-3">

                <div class="row" style="margin-top:-20px;">
                    <div class="col-lg-3 col-sm-6">
                        <div class="card gradient-1">
                            <div class="card-body">
                                <h3 class="card-title text-white">Email Address</h3>
                                <div class="d-inline-block">
                                    <h6 class="text-white" style="font-size: 0.8em;" id="email"></h6>
                                </div>
                                <span class="float-right display-5 opacity-5"><i class="fa fa-envelope"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card gradient-2">
                            <div class="card-body">
                                <h3 class="card-title text-white">Rate</h3>
                                <div class="d-inline-block">
                                    <h6 class="text-white" id="rate"></h6>
                                </div>
                                <span class="float-right display-5 opacity-5"><i class="fa fa-money"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card gradient-3">
                            <div class="card-body">
                                <h3 class="card-title text-white">Cost Type</h3>
                                <div class="d-inline-block">
                                    <h6 class="text-white" id="costtype"></h6>
                                </div>
                                <span class="float-right display-5 opacity-5"><i class="fa fa-contao"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="card gradient-4">
                            <div class="card-body">
                                <h3 class="card-title text-white">Max Units</h3>
                                <div class="d-inline-block">
                                    <h6 class="text-white" id="maxunits"></h6>
                                </div>
                                <span class="float-right display-5 opacity-5"><i class="fa fa-cogs"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
				
				
                <div class="row">
                        <div class="col-lg-9 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Work by Project</h4>
                                    <canvas id="projchart"></canvas>
                                </div>
                            </div>
                            
                        </div>    
     
                       <div class="col-lg-9 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Availability, Demand and Capacity over Time</h4>
                                    <canvas id="barsline"></canvas>
                                </div>
                            </div>
                            
                        </div>    
                    </div>

            </div>
			
        </div>
  

    </div>


    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Res/javascript/common.min.js"></script>
   <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Res/javascript/jquery3.4.1.js"></script>
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Res/javascript/custom.min.js"></script>
     <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Res/javascript/Chart.min.js"></script>
	 		 <script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>


<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Res/javascript/fillinselect.js"></script>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Res/javascript/MainFunction.js"></script>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Gestion_Res/javascript/conToKM.js"></script>
