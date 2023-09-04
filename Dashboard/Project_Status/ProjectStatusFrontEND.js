	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Sufee Admin - HTML5 Admin Template</title>
		<meta name="description" content="Sufee Admin - HTML5 Admin Template">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<link rel="apple-touch-icon" href="apple-icon.png">
		<link rel="shortcut icon" href="favicon.ico">



		<link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Project_Status/css/normalize.css">
		<link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Project_Status/css/bootstrap.css">
		<link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Project_Status/css/font-awesome.min.css">
		<link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Project_Status/css/flag-icon.min.css">
		<link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Project_Status/css/cs-skin-elastic.css">
		<link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Project_Status/css/style.css">
		<link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Project_Status/css/achevement.css">
		<link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Project_Status/css/styleFrontEnd.css">
		
<style>

/*.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
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

	<body>
    <div id="headercolor">
      <span><b id="titreProjet">Project Status</b></span>

      <span id="nomprojet">Project Name</span>
	<select style="color:black; font-weight:bold;" id="mylist" onchange="myFunction(this)">
	<option value="" disabled selected hidden>Choose a project</option>

	</select>
    </div>
	<div style="overflow:auto">
	<div class="menu">
	 <ul> 

		
			
			<div class="container">
	<div class="row">
		<div class="col-sm-3 col-md-2">
			<div class="progress" data-percentage="">
				<span class="progress-left">
					<span class="progress-bar"></span>
				</span>
				<span class="progress-right">
					<span class="progress-bar"></span>
				</span>
				<div class="progress-value">
					<div><span style="font-weight:bold; font-size:25px;" id="pourach">
						</span><br>
						<span>Completed</span>
					</div>
				</div>
			</div>
		</div>
		
		
	</div>
</div>

			
		
		<li class="verti">
			
			
				<div class="card-body">
					<div class="stat-widget-one">
						<div class="stat-icon dib"><i class="glissicon text-success border-success"></i></div>
						<div class="stat-content dib">
							<div class="stat-text">Project slippage</div>
							<div id="glissField" class="stat-digit"></div>
						</div>
					</div>
				</div>
			
		
		</li>
		<li class="verti">
			
			
				<div class="card-body">
					<div class="stat-widget-one">
						<div class="stat-icon dib"><i class="iconmoney1 text-success border-success"></i></div>
						<div class="stat-content dib">
							<div class="stat-text">Project cost</div>
							<div id="costpro" class="stat-digit"></div>
						</div>
					</div>
				</div>
			
		
		</li>
	<li class="verti">
		
				<div class="card-body">
					<div class="stat-widget-one">
						<div class="stat-icon dib"><i class="iconmoney2 text-secondary border-secondary"></i></div>
						<div class="stat-content dib">
							<div class="stat-text">Cost variance</div>
							<div id="costprovari" class="stat-digit"></div>
						</div>
					</div>
				</div>
		
		</li>
	<li class="verti">
		
				<div class="card-body">
					<div class="stat-widget-one">
						<div class="stat-icon dib"><i class="iconmoney3 text-secondary border-secondary"></i></div>
						<div class="stat-content dib">
							<div class="stat-text">Project work</div>
							<div id="prowork" class="stat-digit"></div>
						</div>
					</div>
				</div>
	
		</li>
		
		<li class="verti">
		
				<div class="card-body">
					<div class="stat-widget-one">
						<div class="stat-icon dib"><i class="iconmoney4 text-secondary border-secondary"></i></div>
						<div class="stat-content dib">
							<div class="stat-text">Work variance</div>
							<div id="proworkVari" class="stat-digit"></div>
						</div>
					</div>
				</div>
	
		</li>
		
			<li class="verti">
	
				<div class="card-body">
					<div class="stat-widget-one">
						<div class="stat-icon dib"><i class="bellsign text-secondary border-secondary"></i></div>
						<div class="stat-content dib">
							<div class="stat-text">Number risks</div>
							<div id="risksField" class="stat-digit"></div>
						</div>
					</div>
				</div>

		</li>
		
		<li class="verti">
		
				<div class="card-body">
					<div class="stat-widget-one">
						<div class="stat-icon dib"><i class="warning text-secondary border-secondary"></i></div>
						<div class="stat-content dib">
							<div class="stat-text">Number problem</div>
							<div id="issuesField" class="stat-digit"></div>
						</div>
					</div>
				</div>

		</li>
		
	
		</ul>
		</div>

	<div class="main">
	 <div class="backg"><div class="tbl-header">
	<table id="myTable" style="display:none;">
		<thead>
			<tr>
				<th>Project Name</th>
				<th>Project duration</th>
				<th>Owner's name</th>
				<th>Start Date</th>
				<th>Project Type</th>	
				<th>Direction</th>	
				<th>Project cost</th>
				<th>Project work (day)</th>
				<th>Project Status</th>
			</tr>
		</thead>
	</table>

	 </div>


		</div><!-- .row -->
		</br></br>
		<div id="descrtab" style="display:none;">
		<div id="titdiv"><div id="descrtext">Project description</div></div>
<div id="descrdiv"><div id="textdescr"></div></div>
</div>
	<div id="wrapper2">
<div id="first2">
 <canvas id="myChart2"></canvas>
</div>
<div id="second2"> 
 <canvas id="myChart"></canvas>
</div>
</div>
</br></br></br>
	<div id="wrapper2">
<div id="first2">

<h4 id="mstabtit" style="display:none;"><b>Milestones completed</b></h4>

 <table id="msTable" style="display:none;">
		<thead>
	<tr>
		<th>Project Name</th>
		<th>Milestone</th>
		<th>Start Date</th>
		<th>Date</th>
		<th>Percentage of completion</th>
	</tr>
		</thead>
	</table>


<h4 id="ertabtit" style="display:none;"><b>Late milestones</b></h4>

 <table id="msTableer" style="display:none;">
		<thead>
	<tr>
		<th>Project Name</th>
		<th>Milestone</th>
		<th>Start Date</th>
		<th>Date</th>
		<th>Percentage of completion</th>
	</tr>
		</thead>
	</table>


</div>






<div id="second2"> 
<h4 id="avetit" style="display:none;"><b>The milestones to come</b></h4>

 <table id="msTableav" style="display:none;">
		<thead>
	<tr>
		<th>Project Name</th>
		<th>Milestone</th>
		<th>Start Date</th>
		<th>Date</th>
		<th>Percentage of completion</th>
	</tr>
		</thead>
	</table>
</div>
</div>
</br></br></br>




		</div><!-- .animated -->
		</div>



		



	
		

	 <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Project_Status/javascript/jquery-2.1.1.min.js"></script>
	 <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Project_Status/javascript/jquery-3.1.1.min.js"></script>
	 <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Project_Status/javascript/chart.js@2.8.0.js"></script>
	 <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Project_Status/javascript/MainFunctionJS.js"></script>
	 <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Project_Status/javascript/moment-with-locales.min.js"></script>


	   <script type="text/javascript">
    document.oncontextmenu = new Function("return false");
  </script>