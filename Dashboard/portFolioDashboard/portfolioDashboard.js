
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/css/bootstrap.min.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/css/style.css" rel="stylesheet">
	  <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/css/w3.css"  rel="stylesheet">


<style>

ul#menu {
    width: 250px;
}


select#maxRows {
    width: 30%;
}
thead {
    font-size: 12px;
}
tbody#tableauxtbody {
    font-size: 12px;
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


</style>	
</head>

<body>
		<div id="headercolor">
          <div>
            <small class="smallRisks">
              <h4>PORTEFEUILLE</h4>
            </small>
          </div>

          <div>


            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist1" onchange="MainFilter();">
               <option value="">DIRECTION</option>
            </select>
    

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist2" onchange="MainFilter();">
               <option value="">TYPE DE PROJET</option>
            </select>

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist3" onchange="MainFilter();">
               <option value="">PROPRIÉTAIRE DE PROJET</option>
            </select>

            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist4" onchange="MainFilter();">
               <option value="">PHASE DE GOUVERNANCE</option>
            </select>

      </div>       
      </div>


    <div id="main-wrapper">


      <div class="nk-sidebar" style="top:0px; background-color:transparent;">           
            <div class="nk-nav-scroll" style="background-color:transparent;">
                <ul class="metismenu" id="menu" style="background-color:transparent;">
                   <li> <div class="col-3" style="flex: 0 0 100%; max-width: 100%; margin-top:10px;">
                        <div class="card card-widget">
                            <div class="card-body gradient-4">
                                <div class="media">
                                    <span class="card-widget__icon"><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/counter.png' class='img-rounded' alt='Cinque Terre' width='55px' height='55px'></span>
                                    <div class="media-body">
                                    	<h4 class="card-widget__subtitle">NB Projets</h4>
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
                                    <span class="card-widget__icon"><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/calculator.png' class='img-rounded' alt='Cinque Terre' width='55px' height='55px'></span>
                                    <div class="media-body">
                                    	<h5 class="card-widget__subtitle">COÛT</h5>
                                        <h4 class="card-widget__title" style="color:white;" id="prcost"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
                   <li> <div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                        <div class="card card-widget">
                            <div class="card-body gradient-4">
                                <div class="media">
                                    <span class="card-widget__icon"><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/budget.png' class='img-rounded' alt='Cinque Terre' width='55px' height='55px'></span>
                                    <div class="media-body">
                                    	<h5 class="card-widget__subtitle">VARIANCE DE COÛT</h5>
                                        <h4 class="card-widget__title" style="color:white;" id="cvariance"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
                   <li> <div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                        <div class="card card-widget">
                            <div class="card-body gradient-4">
                                <div class="media">
                                    <span class="card-widget__icon"><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/work.png' class='img-rounded' alt='Cinque Terre' width='55px' height='55px'></span>
                                    <div class="media-body">
                                    	<h5 class="card-widget__subtitle">TRAVAIL</h5>
                                        <h4 class="card-widget__title" style="color:white;" id="prwork"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
                   <li> <div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                        <div class="card card-widget">
                            <div class="card-body gradient-4">
                                <div class="media">
                                    <span class="card-widget__icon"><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/watch.png' class='img-rounded' alt='Cinque Terre' width='55px' height='55px'></span>
                                    <div class="media-body">
                                    	<h5 class="card-widget__subtitle">VARIANCE DE TRAVAIL</h5>
                                        <h4 class="card-widget__title" style="color:white;" id="wrvariance"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
					<li>  <div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                        <div class="card card-widget">
                            <div class="card-body gradient-4">
                                <div class="media">
                                    <span class="card-widget__icon"><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/risk.png' class='img-rounded' alt='Cinque Terre' width='55px' height='55px'></span>
                                    <div class="media-body">
                                    	<h5 class="card-widget__subtitle">RISQUES</h5>
                                        <h4 class="card-widget__title" style="color:white;" id="actRisk"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
					  <li><div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                        <div class="card card-widget">
                            <div class="card-body gradient-4">
                                <div class="media">
                                    <span class="card-widget__icon"><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/project.png' class='img-rounded' alt='Cinque Terre' width='55px' height='55px'></span>
                                    <div class="media-body">
                                    	<h5 class="card-widget__subtitle">PROBLÈMES</h5>
                                        <h4 class="card-widget__title" style="color:white;" id="actIssue"></h4>
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
                                	<h4 class="card-title" style="color:black;">PROJETS PAR PHASE DE COUVERNANCE </h4>
                                   <canvas id="projchart"></canvas>
                                </div>
                            </div>
                            
                        </div>    
     
                       <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title" style="color:black;">PROJETS PAR TYPE</h4>
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
                       
                    <div class="form-group"> 	<!--		Show Numbers Of Rows 		-->
                         <select class  ="form-control" name="state" id="maxRows">
                             <option value="5000">Afficher toutes les lignes</option>
                             <option value="5">5</option>
                             <option value="10">10</option>
                             <option value="15">15</option>
                             <option value="20">20</option>
                             <option value="50">50</option>
                             <option value="70">70</option>
                             <option value="100">100</option>
                            </select>
                           
                            
                         
                      </div>
                          <table id="tableaux" class="table  table-bordered" >
                            <thead>
                              <tr>
                                <th>NOM DE PROJET</th>
                                <th></th>
                                <th>PROPRIÉTAIRE DU PROJET</th>
                                <th>DATE DE DÉBUT</th>
                                <th>DATE FIN</th>
                                <th>COÛT</th>
                                <th>COÛT SANTÉ</th>
                                <th>TRAVAIL SANTÉ</th>
                                <th>SANTÉ DE CALENDRIER</th>
                                <th>SANTÉ DE PROJET</th>
                                <th>% ACHEVÉ</th>
                              </tr>
                            </thead>
                            <tbody id="tableauxtbody"></tbody>
                            </table>
                           
                          
                            

                          </div>
                         


                         


                          
                      </div>
                    </div>
                     
    <!--		Start Pagination -->
                <div class='pagination-container' >
                    <nav>
                      <ul class="pagination">
                
                <li data-page="prev" >
                                         <span> < <span class="sr-only">(current)</span></span>
                                        </li>
                       <!--	Here the JS Function Will Add the Rows -->
            <li data-page="next" id="prev">
                                           <span> > <span class="sr-only">(current)</span></span>
                                        </li>
                      </ul>
                    </nav>
                
    
    </div> <!-- 		End of Container -->
    
    
    
    
   
                  </div>
                </div>
              </div>



              

             

            </div>
			
        </div>
  
        






    </div>
     <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>
     <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/javascript/jquery3.4.1.js"></script>
     <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/javascript/custom.min.js"></script>
     <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/javascript/Chart.min.js"></script>
	 <script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>
 



<script type="text/javascript">

















function MainFilter()
{

  function filtrerTableau() {
    var input, input2, input3, input4, filter, filter2, filter3, filter4, tr, td, td2, td3, td4, i, k;
    input = document.getElementById("mylist3");
    input2 = document.getElementById("mylist2");
    input3 = document.getElementById("mylist1");
    input4 = document.getElementById("mylist4");
    filter = input.value.toUpperCase();
    filter2 = input2.value.toUpperCase();
    filter3 = input3.value.toUpperCase();
    filter4 = input4.value.toUpperCase();
    //table = document.getElementById("tableaux");
    $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?&$filter=Projet_presentation%20eq%20%27Actif%27",   
                
                            method: "GET",
                            dataType: "json",
                            headers: {Accept: "application/json;odata=verbose"},       
                            success: function(data) {     
                            var dataResults = data.d.results;
                  var listItemInfo = ""; 
                  table = document.getElementById("tableaux");
                  tr3 = table.getElementsByTagName("tr");
                  if(tr3.length>0){
                                                                    
                    $('#tableaux tbody').empty();
                  }           
    $.each(dataResults, function(key, value) 
    {           

       
        if(value.ProjectOwnerName!=null){
          var pOwner = value.ProjectOwnerName;
        }
        else{
          pOwner="";
        }
        
        
          if(value.EnterpriseProjectTypeName!=null){
            var pType = value.EnterpriseProjectTypeName;
          }
          else{
            pType="";
          }
          if(value.Servicesduprojet!=null){
            var drProject = value.Servicesduprojet;
          }
          else{
            drProject="";
          }
         
          if(value.ProjectPhase!=null){
            var projetPhase = value.ProjectPhase;
          }
         
         if((projetPhase==null)||(projetPhase.toString()=="")||(projetPhase.toString()=="null")){
           projetPhase="not assigned";
         }
         var propr = value.Owner;
         
        
      
      
// filter-->14, filter2-->12, filter3-->13, filter4-->11
if ((pOwner.toUpperCase().indexOf(filter) > -1)&&(pType.toUpperCase().indexOf(filter2) > -1)&&(drProject.toUpperCase().indexOf(filter3) > -1)&&(projetPhase.toUpperCase().indexOf(filter4) > -1)){
     //var projWork = value.Work;
     var pCost = parseInt(value.ProjectCost);
     var pcostVar = parseInt(value.ProjectCostVariance);
     var pwork = parseInt(value.ProjectWork);
     var pwvariance = parseInt(value.ProjectWorkVariance);
  var projetId = value.ProjectId;  

  var nomProjet = value.ProjectName;
  var projStartDate = value.ProjectStartDate;
        var projfinishdate = value.ProjectFinishDate;
        var projCost = parseFloat(value.ProjectCost).toFixed(3);
        var prPercentCpl = parseFloat(value.ProjectPercentCompleted).toFixed(0);
        var linkProjectSite = value.ProjectWorkspaceInternalUrl;
        var costKPI=value.CostKPI;
        //console.log("costKPI= :"+costKPI);
        var workKPI=value.WorkKPI;
        //console.log("workKPI= :"+workKPI);
        var scheduleKPI=value.ScheduleKPI;
        //console.log("scheduleKPI= :"+scheduleKPI);
        var projectKPI=value.ProjectKPI;
        //console.log("projectKPI= : "+projectKPI);
         moment.locale('fr');
          
          if(projStartDate != null)
          {
            var projStartDate = moment(projStartDate).format('L');
          }

          if(projfinishdate != null)
          {
            var projfinishdate = moment(projfinishdate).format('L');
          }
          
          var tr;

            tr = $("<tr class='even pointer'>");
                tr.append("<td>" + nomProjet + "</td>");//0
                tr.append("<td><a href='"+linkProjectSite+"'><i class='glyphicon glyphicon-link w3-spin w3-jumbo'></i></a></td>");//1
                tr.append("<td>" + pOwner + "</td>"); //2
                tr.append("<td>" + projStartDate+ "</td>"); //3
                tr.append("<td>" + projfinishdate+ "</td>"); //4
                tr.append("<td>" + projCost +" </td>");//5
                //costKPI //6
                if(costKPI=="No Baseline"||costKPI==null||costKPI=="No Cost"){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/gris.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                if(costKPI=="At least 20% over baseline cost"){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/boule.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                if(costKPI=="Between 10%-20% over baseline cost"){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                if(costKPI=="Less than 10% over baseline cost"){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/vert.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                //workKPI //7
                if(workKPI=="No Baseline"||workKPI==null||workKPI=="No work information"){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/gris.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                if(workKPI=="At least 20% over baseline work"){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/boule.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                if(workKPI=="Between 10%-20% over baseline work"){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                if(workKPI=="Less than 10% over baseline work"){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/vert.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                //scheduleKPI //8
                if(scheduleKPI=="No Baseline"||scheduleKPI==null){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/gris.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                if(scheduleKPI=="At least 20% over baseline schedule"){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/boule.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                if(scheduleKPI=="Between 10%-20% over baseline schedule"){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                if(scheduleKPI=="Less than 10% over baseline schedule"){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/vert.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                //projectKPI //9
                if(projectKPI==null){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/gris.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                if(projectKPI=="Troubled"){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/boule.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                if(projectKPI=="On Watch"){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                if(projectKPI=="On Track"){
                  tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/vert.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                }
                //tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/vert.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                //tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                //tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/boule.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                tr.append("<td>"+prPercentCpl+"</td>"); //10
                tr.append("<td style='display:none;'>" + projetPhase +" </td>"); //11
                tr.append("<td style='display:none;'>" + pType +" </td>"); //12
                tr.append("<td style='display:none;'>" + drProject +" </td>"); //13
                tr.append("<td style='display:none;'>" + pOwner +" </td>"); //14
                tr.append("<td style='display:none;'>" + pCost +" </td>"); //15
                tr.append("<td style='display:none;'>" + pcostVar +" </td>"); //16
                tr.append("<td style='display:none;'>" + pwork +" </td>"); //17
                tr.append("<td style='display:none;'>" + pwvariance +" </td>"); //18
                tr.append("<td style='display:none;'>" + projetId +" </td>"); //19

               
                $('#tableaux').append(tr); 
                                                
}
  

    });


      
}   
});  

} 

    
   


    
				
    


    

  function FilterProjectType() { 
    var input, input2, input3, input4, filter, filter2, filter3, filter4, tr, td, td2, td3, td4, i, k;
    var pOwner,pType,drProject,projetPhase;
    input = document.getElementById("mylist3");
    input2 = document.getElementById("mylist2");
    input3 = document.getElementById("mylist1");
    input4 = document.getElementById("mylist4");
    filter = input.value.toUpperCase();
    filter2 = input2.value.toUpperCase();
    filter3 = input3.value.toUpperCase();
    filter4 = input4.value.toUpperCase();
    $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?&$filter=Projet_presentation%20eq%20%27Actif%27",   
                
                            method: "GET",
                            dataType: "json",
                            headers: {Accept: "application/json;odata=verbose"},       
                            success: function(data) {     
                              
                  var dataResults = data.d.results;
      var itermeidiaryObject = {};         
    $.each(dataResults, function(key, value) 
    {          

       
        if(value.ProjectOwnerName!=null){
          pOwner = value.ProjectOwnerName;
        }
        else{
          pOwner="";
        }
        console.log("pOwner: "+pOwner);
        
        
          if(value.EnterpriseProjectTypeName!=null){
            pType = value.EnterpriseProjectTypeName;
          }
          else{
            pType="";
          }
          console.log("pType: "+pType);
          if(value.Servicesduprojet!=null){
            drProject = value.Servicesduprojet;
          }
          else{
            drProject="";
          }
          console.log("drProject: "+drProject);
          if(value.ProjectPhase!=null){
            projetPhase = value.ProjectPhase;
          }
          if((projetPhase==null)||(projetPhase.toString()=="")||(projetPhase.toString()=="null")){
            projetPhase="not assigned";
          }
          console.log("projetPhase: "+projetPhase);
          if ((pOwner.toUpperCase().indexOf(filter) > -1)&&(pType.toUpperCase().indexOf(filter2) > -1)&&(drProject.toUpperCase().indexOf(filter3) > -1)&&(projetPhase.toUpperCase().indexOf(filter4) > -1)){
            var epn = value.EnterpriseProjectTypeName;
            var som = 0;
            if (epn != null) {
              itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
            }
            var somme = som;
         }

          
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
function filterGovernancePhase(){
  var input, input2, input3, input4, filter, filter2, filter3, filter4, tr, td, td2, td3, td4, i, k;
  var pOwner,pType,drProject,projetPhase;
  input = document.getElementById("mylist3");
  input2 = document.getElementById("mylist2");
  input3 = document.getElementById("mylist1");
  input4 = document.getElementById("mylist4");
  filter = input.value.toUpperCase();
  filter2 = input2.value.toUpperCase();
  filter3 = input3.value.toUpperCase();
  filter4 = input4.value.toUpperCase();
  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?&$filter=Projet_presentation%20eq%20%27Actif%27",   
              
                          method: "GET",
                          dataType: "json",
                          headers: {Accept: "application/json;odata=verbose"},       
                          success: function(data) {     
                            
                var dataResults = data.d.results;
    var itermeidiaryObject = {};         
  $.each(dataResults, function(key, value) 
  { 

      if(value.ProjectOwnerName!=null){
          pOwner = value.ProjectOwnerName;
        }
        else{
          pOwner="";
        }
        console.log("pOwner: "+pOwner);
        
        
          if(value.EnterpriseProjectTypeName!=null){
            pType = value.EnterpriseProjectTypeName;
          }
          else{
            pType="";
          }
          console.log("pType: "+pType);
          if(value.Servicesduprojet!=null){
            drProject = value.Servicesduprojet;
          }
          else{
            drProject="";
          }
          console.log("drProject: "+drProject);
          if(value.ProjectPhase!=null){
            projetPhase = value.ProjectPhase;
          }
          if((projetPhase==null)||(projetPhase.toString()=="")||(projetPhase.toString()=="null")){
            projetPhase="not assigned";
          }
          console.log("projetPhase: "+projetPhase);
          if ((pOwner.toUpperCase().indexOf(filter) > -1)&&(pType.toUpperCase().indexOf(filter2) > -1)&&(drProject.toUpperCase().indexOf(filter3) > -1)&&(projetPhase.toUpperCase().indexOf(filter4) > -1)){
              var epn = value.ProjectPhase;
      var som = 0;
      if (epn != null) {
        itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
        
      }
      var somme = som;
          }
          
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
function compteNbProjFiltrer(){
  var input, input2, input3, input4, filter, filter2, filter3, filter4, tr, td, td2, td3, td4, i, k;
  var pOwner,pType,drProject,projetPhase;
  input = document.getElementById("mylist3");
  input2 = document.getElementById("mylist2");
  input3 = document.getElementById("mylist1");
  input4 = document.getElementById("mylist4");
  filter = input.value.toUpperCase();
  filter2 = input2.value.toUpperCase();
  filter3 = input3.value.toUpperCase();
  filter4 = input4.value.toUpperCase();
var nbre = 0;

$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?&$filter=Projet_presentation%20eq%20%27Actif%27",     
                  method: "GET",
                  dataType: "json",
                  headers: {Accept: "application/json;odata=verbose"},       
                  success: function(data) {     
                  var dataResults = data.d.results;              
        
          $.each(dataResults, function(key, value) 
          {
              if(value.ProjectOwnerName!=null){
                  pOwner = value.ProjectOwnerName;
                }
                else{
                  pOwner="";
                }
                console.log("pOwner: "+pOwner);
                
                
                  if(value.EnterpriseProjectTypeName!=null){
                    pType = value.EnterpriseProjectTypeName;
                  }
                  else{
                    pType="";
                  }
                  console.log("pType: "+pType);
                  if(value.Servicesduprojet!=null){
                    drProject = value.Servicesduprojet;
                  }
                  else{
                    drProject="";
                  }
                  console.log("drProject: "+drProject);
                  if(value.ProjectPhase!=null){
                    projetPhase = value.ProjectPhase;
                  }
                  if((projetPhase==null)||(projetPhase.toString()=="")||(projetPhase.toString()=="null")){
                    projetPhase="not assigned";
                  }
                  console.log("projetPhase: "+projetPhase);
                  if ((pOwner.toUpperCase().indexOf(filter) > -1)&&(pType.toUpperCase().indexOf(filter2) > -1)&&(drProject.toUpperCase().indexOf(filter3) > -1)&&(projetPhase.toUpperCase().indexOf(filter4) > -1)){
                      var nomProjet = value.ProjectName;
                      if(nomProjet != null)
                          {
                              nbre ++;
                          }
                  }
               
                
          });  
          document.getElementById("prcount").innerHTML = nbre;             
      }
});
}                                
 

var responseAllTickets = responseAllTickets ||[];
function costValuesFiltrer(){
 
  var input, input2, input3, input4, filter, filter2, filter3, filter4, tr, td, td2, td3, td4, i, k;
  var pOwner,pType,drProject,projetPhase;
  input = document.getElementById("mylist3");
  input2 = document.getElementById("mylist2");
  input3 = document.getElementById("mylist1");
  input4 = document.getElementById("mylist4");
  filter = input.value.toUpperCase();
  filter2 = input2.value.toUpperCase();
  filter3 = input3.value.toUpperCase();
  filter4 = input4.value.toUpperCase();
var projCost = 0;
var projcostvariance = 0;
var projWork = 0;
var pworkvariance = 0;

              $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?&$filter=Projet_presentation%20eq%20%27Actif%27",                          
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
          if(value.ProjectOwnerName!=null){
              pOwner = value.ProjectOwnerName;
            }
            else{
              pOwner="";
            }
            console.log("pOwner: "+pOwner);
            
            
              if(value.EnterpriseProjectTypeName!=null){
                pType = value.EnterpriseProjectTypeName;
              }
              else{
                pType="";
              }
              console.log("pType: "+pType);
              if(value.Servicesduprojet!=null){
                drProject = value.Servicesduprojet;
              }
              else{
                drProject="";
              }
              console.log("drProject: "+drProject);
              if(value.ProjectPhase!=null){
                projetPhase = value.ProjectPhase;
              }
              if((projetPhase==null)||(projetPhase.toString()=="")||(projetPhase.toString()=="null")){
                projetPhase="not assigned";
              }
              console.log("projetPhase: "+projetPhase);
              if ((pOwner.toUpperCase().indexOf(filter) > -1)&&(pType.toUpperCase().indexOf(filter2) > -1)&&(drProject.toUpperCase().indexOf(filter3) > -1)&&(projetPhase.toUpperCase().indexOf(filter4) > -1)){
                  var pCost = parseInt(value.ProjectCost);
            var pcostVar = parseInt(value.ProjectCostVariance);
            var pwork = parseInt(value.ProjectWork);
            var pwvariance = parseInt(value.ProjectWorkVariance);


            projCost = projCost + pCost;
            projcostvariance = projcostvariance+pcostVar;
            projWork= projWork+ pwork;
            pworkvariance = pworkvariance + pwvariance;
              }     
            


      });


        document.getElementById("prcost").innerHTML = conToMill(projCost);
        document.getElementById("cvariance").innerHTML = conToMill(projcostvariance);
        document.getElementById("prwork").innerHTML = conToMill(projWork);
    document.getElementById("wrvariance").innerHTML = conToMill(pworkvariance);
      }   
});
}

function filterRiskNumb(){
  var input, input2, input3, input4, filter, filter2, filter3, filter4, tr, td, td2, td3, td4, i, k;
  var pOwner,pType,drProject,projetPhase;
  input = document.getElementById("mylist3");
  input2 = document.getElementById("mylist2");
  input3 = document.getElementById("mylist1");
  input4 = document.getElementById("mylist4");
  filter = input.value.toUpperCase();
  filter2 = input2.value.toUpperCase();
  filter3 = input3.value.toUpperCase();
  filter4 = input4.value.toUpperCase();
var nbreRisks = 0;

$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks",     
                  method: "GET",
                  dataType: "json",
                  headers: {Accept: "application/json;odata=verbose"},       
                  success: function(data) {     
                  var dataResults = data.d.results;              
        
          $.each(dataResults, function(key, value) 
          {
              if(value.Owner!=null){
                  pOwner = value.Owner;
                }
                else{
                  pOwner="";
                }
                console.log("pOwner: "+pOwner);
                
                
                  
                  if (pOwner.toUpperCase().indexOf(filter) > -1){
                      var titreRisks = value.Title;
                      if(titreRisks != null)
                          {
                              nbreRisks ++;
                          }
                  }
              
                
          });  
          document.getElementById("actRisk").innerHTML = nbreRisks;             
      }
});

} 


function filterIssueNumb(){
  var input, input2, input3, input4, filter, filter2, filter3, filter4, tr, td, td2, td3, td4, i, k;
  var pOwner,pType,drProject,projetPhase;
  input = document.getElementById("mylist3");
  input2 = document.getElementById("mylist2");
  input3 = document.getElementById("mylist1");
  input4 = document.getElementById("mylist4");
  filter = input.value.toUpperCase();
  filter2 = input2.value.toUpperCase();
  filter3 = input3.value.toUpperCase();
  filter4 = input4.value.toUpperCase();
var nbreIssue = 0;

$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues",     
                  method: "GET",
                  dataType: "json",
                  headers: {Accept: "application/json;odata=verbose"},       
                  success: function(data) {     
                  var dataResults = data.d.results;              
        
          $.each(dataResults, function(key, value) 
          {
            if(value.Owner!=null){
              pOwner = value.Owner;
            }
            else{
              pOwner="";
            }
            console.log("pOwner: "+pOwner);
            
            
              
              if (pOwner.toUpperCase().indexOf(filter) > -1){
                      var titreIssue = value.Title;
               if(titreIssue != null)
                 {
                   nbreIssue ++;
                 }
                  }
               
                
          });  
          document.getElementById("actIssue").innerHTML = nbreIssue;             
      }
});
} 

 
//getPagination('#tableaux');

filtrerTableau();
getPagination('#tableaux');
//setTimeout(() => { }, 3000);
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
var responseProjectTypeName=responseProjectTypeName || [];
var urlProjectTypeName= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=EnterpriseProjectTypeName,ProjectId"
function LoadProjectTypeName() {
            $.ajax({url:urlProjectTypeName,   
                        
                                   method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseProjectTypeName = responseProjectTypeName.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlProjectTypeName = data.d.__next;
                                            LoadProjectTypeName();
                                        }          
                          
            $.each(responseProjectTypeName, function(key, value) 
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
LoadProjectTypeName();           
  //_spBodyOnLoadFunctionNames.push("LoadProjectTypeName");



//Fonction qui permet d'afficher liste de Projet 
var responsePhase=responsePhase || [];
var urlPhase=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectPhase,ProjectId";
function LoadProjectGovernant() {
            $.ajax({url: urlPhase,   
                        
                                     method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responsePhase = responsePhase.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlPhase = data.d.__next;
                                            LoadProjectGovernant();
                                        }          
                          
            $.each(responsePhase, function(key, value) 
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
LoadProjectGovernant();                               
  //_spBodyOnLoadFunctionNames.push("LoadProjectGovernant");






//Fonction qui permet d'afficher liste de Projet  
var responseOwner=responseOwner || [];
var urlOwner=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectOwnerName,ProjectId&$filter=Projet_presentation%20eq%20%27Actif%27";
function LoadProjectOwner() {
            $.ajax({url: urlOwner,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseOwner = responseOwner.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlOwner = data.d.__next;
                                            LoadProjectOwner();
                                        }          
                          
            $.each(responseOwner, function(key, value) 
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
 LoadProjectOwner();
 // _spBodyOnLoadFunctionNames.push("LoadProjectOwner");



//Fonction qui permet d'afficher les list des risks
var responseDepartement=responseDepartement || [];
var urlDepartement=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Servicesduprojet,ProjectId&$filter=Projet_presentation%20eq%20%27Actif%27";
function LoadDepartement() {
            $.ajax({url: urlDepartement,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseDepartement = responseDepartement.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDepartement = data.d.__next;
                                            LoadDepartement();
                                        }          
                          
            $.each(responseDepartement, function(key, value) 
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
LoadDepartement();         
 // _spBodyOnLoadFunctionNames.push("LoadDepartement");



//Load Number Of All Issues
var responseAllIssues= responseAllIssues || [];
var urlAllIssues=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues?$select=Title"
function NumberOfAllIssues()
{
  var nbreIssue = 0;

  $.ajax({url:urlAllIssues ,     
                   method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseAllIssues = responseAllIssues.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlAllIssues = data.d.__next;
                                            NumberOfAllIssues();
                                        }          
                          
            $.each(responseAllIssues, function(key, value)  
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
  NumberOfAllIssues();
  //_spBodyOnLoadFunctionNames.push("NumberOfAllIssues");



//Load Number Of All Risks
var responseAllRsiks= responseAllRsiks || [];
var urlAllRisks=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks?$select=Title"
function NumberOfAllRisks()
{
  var nbreRisks = 0;

  $.ajax({url: urlAllRisks,  
                                    method: "GET",   
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseAllRsiks = responseAllRsiks.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlAllRisks = data.d.__next;
                                            NumberOfAllRisks();
                                        }          
                          
            $.each(responseAllRsiks, function(key, value)  
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
 NumberOfAllRisks();
 // _spBodyOnLoadFunctionNames.push("NumberOfAllRisks");


//Load Number Of All Project
var responseNumberOfProjects=responseNumberOfProjects || [];
var urlNumberOfProjects=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId&$filter=Projet_presentation%20eq%20%27Actif%27";
function LoadAllNumberProject()
{
  var nbre = 0;

  $.ajax({url: urlNumberOfProjects,     
                                    method: "GET",   
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseNumberOfProjects = responseNumberOfProjects.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlNumberOfProjects = data.d.__next;
                                            LoadAllNumberProject();
                                        }          
                          
            $.each(responseNumberOfProjects, function(key, value)  
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
 LoadAllNumberProject();
 // _spBodyOnLoadFunctionNames.push("LoadAllNumberProject");






  var responseDataSum = responseDataSum || [];
  var urlDataSum = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?&$filter=Projet_presentation%20eq%20%27Actif%27";

function loadDataSum()
{
  var projCost = 0;
  var projcostvariance = 0;
  var projWork = 0;
  var pworkvariance = 0;

                $.ajax({url: urlDataSum,                          
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseDataSum = responseDataSum.concat(data.d.results);
                    if (data.d.__next) {
                      urlDataSum = data.d.__next;
                      loadDataSum();
                    }
                    
        $.each(responseDataSum, function(key, value) 
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
   loadDataSum();
   //_spBodyOnLoadFunctionNames.push("loadDataSum"); 















//Load BarChart for GOVERNANCE
var responseGovernancePhase=responseGovernancePhase || [];
var urlGovernancePhase= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?&$filter=Projet_presentation%20eq%20%27Actif%27"
function LoadBarGovernancePhase() {
            $.ajax({url:urlGovernancePhase,   
                        
                                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseGovernancePhase = responseGovernancePhase.concat(data.d.results);
                    if (data.d.__next) {
                      urlGovernancePhase = data.d.__next;
                      LoadBarGovernancePhase();
                    }
          var itermeidiaryObject = {};          
        $.each(responseGovernancePhase, function(key, value) 
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
LoadBarGovernancePhase();
//  _spBodyOnLoadFunctionNames.push("LoadBarGovernancePhase");
  


var colors =  ["#008000", "#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];


//Load Graph For ProjectType
var responsePhaseChart= responsePhaseChart || [];
var urlPhaseChart=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?&$filter=Projet_presentation%20eq%20%27Actif%27";
function LoadProjectType() {
            $.ajax({url: urlPhaseChart,   
                        
                                       
                                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responsePhaseChart = responsePhaseChart.concat(data.d.results);
                    if (data.d.__next) {
                      urlPhaseChart = data.d.__next;
                      LoadProjectType();
                    }
          var itermeidiaryObject = {};          
        $.each(responsePhaseChart, function(key, value) 
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
  LoadProjectType();
  //_spBodyOnLoadFunctionNames.push("LoadProjectType");          
  




//Load All Value in table 

//Table Project 
var responseTabProj= responseTabProj || [];
var urlTabProj=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?&$filter=Projet_presentation%20eq%20%27Actif%27"
function LoadTableProjects() {

            $.ajax({url: urlTabProj,   
                        
                                      method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    responseTabProj = responseTabProj.concat(data.d.results);
                    if (data.d.__next) {
                      urlTabProj = data.d.__next;
                      LoadTableProjects();
                    }         
        $.each(responseTabProj, function(key, value) 
        {       

                var projetId = value.ProjectId;  

                var nomProjet = value.ProjectName;
                var pOwner = value.ProjectOwnerName;
                var projStartDate = value.ProjectStartDate;
				var projfinishdate = value.ProjectFinishDate;
                var projCost = parseFloat(value.ProjectCost).toFixed(3);
                var prPercentCpl = parseFloat(value.ProjectPercentCompleted).toFixed(0);
                var linkProjectSite = value.ProjectWorkspaceInternalUrl;
                var costKPI=value.CostKPI;
                //console.log("costKPI= :"+costKPI);
                var workKPI=value.WorkKPI;
                //console.log("workKPI= :"+workKPI);
                var scheduleKPI=value.ScheduleKPI;
                //console.log("scheduleKPI= :"+scheduleKPI);
                var projectKPI=value.ProjectKPI;
                //console.log("projectKPI= : "+projectKPI);
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
                        tr.append("<td>" + nomProjet + "</td>");//0
                        tr.append("<td><a href='"+linkProjectSite+"'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/link.png' class='img-rounded' alt='Cinque Terre' width='20px' height='20px'></a></td>");//1
                        tr.append("<td>" + pOwner + "</td>"); //2
                        tr.append("<td>" + projStartDate+ "</td>"); //3
                        tr.append("<td>" + projfinishdate+ "</td>"); //4
                        tr.append("<td>" + projCost +" </td>");//5
                        //costKPI //6
                        if(costKPI=="No Baseline"||costKPI==null||costKPI=="No Cost"){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/gris.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        if(costKPI=="At least 20% over baseline cost"){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/boule.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        if(costKPI=="Between 10%-20% over baseline cost"){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        if(costKPI=="Less than 10% over baseline cost"){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/vert.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        //workKPI //7
                        if(workKPI=="No Baseline"||workKPI==null||workKPI=="No work information"){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/gris.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        if(workKPI=="At least 20% over baseline work"){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/boule.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        if(workKPI=="Between 10%-20% over baseline work"){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        if(workKPI=="Less than 10% over baseline work"){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/vert.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        //scheduleKPI //8
                        if(scheduleKPI=="No Baseline"||scheduleKPI==null){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/gris.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        if(scheduleKPI=="At least 20% over baseline schedule"){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/boule.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        if(scheduleKPI=="Between 10%-20% over baseline schedule"){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        if(scheduleKPI=="Less than 10% over baseline schedule"){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/vert.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        //projectKPI //9
                        if(projectKPI==null){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/gris.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        if(projectKPI=="Troubled"){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/boule.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        if(projectKPI=="On Watch"){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        if(projectKPI=="On Track"){
                          tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/vert.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        }
                        //tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/vert.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        //tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        //tr.append("<td><div class='stat-icon dib'><img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/portFolioDashboard/img/boule.png' class='img-rounded' alt='Cinque Terre' width='35px' height='35px'></div></td>");
                        tr.append("<td>"+prPercentCpl+"</td>"); //10
                        tr.append("<td style='display:none;'>" + projetPhase +" </td>"); //11
                        tr.append("<td style='display:none;'>" + pType +" </td>"); //12
                        tr.append("<td style='display:none;'>" + drProject +" </td>"); //13
                        tr.append("<td style='display:none;'>" + pOwner +" </td>"); //14
                        tr.append("<td style='display:none;'>" + pCost +" </td>"); //15
                        tr.append("<td style='display:none;'>" + pcostVar +" </td>"); //16
                        tr.append("<td style='display:none;'>" + pwork +" </td>"); //17
                        tr.append("<td style='display:none;'>" + pwvariance +" </td>"); //18
                        tr.append("<td style='display:none;'>" + projetId +" </td>"); //19
                    $('#tableaux').append(tr);

            });


              
}   
});  

}                                  
 LoadTableProjects();
 // _spBodyOnLoadFunctionNames.push("LoadTableProjects");
  
  getPagination('#tableaux');
				
function getPagination(table) {
  
  var lastPage = 1;

  $('#maxRows')
    .on('change', function(evt) {
      //$('.paginationprev').html('');						// reset pagination

     lastPage = 1;
      $('.pagination')
        .find('li')
        .slice(1, -1)
        .remove();
      var trnum = 0; // reset tr counter
      var maxRows = parseInt($(this).val()); // get Max Rows from select option

      if (maxRows == 5000) {
        $('.pagination').hide();
      } else {
        $('.pagination').show();
      }

      var totalRows = $(table + ' tbody tr').length; // numbers of rows
      $(table + ' tr:gt(0)').each(function() {
        // each TR in  table and not the header
        trnum++; // Start Counter
        if (trnum > maxRows) {
          // if tr number gt maxRows

          $(this).hide(); // fade it out
        }
        if (trnum <= maxRows) {
          $(this).show();
        } // else fade in Important in case if it ..
      }); //  was fade out to fade it in
      if (totalRows > maxRows) {
        // if tr total rows gt max rows option
        var pagenum = Math.ceil(totalRows / maxRows); // ceil total(rows/maxrows) to get ..
        //	numbers of pages
        for (var i = 1; i <= pagenum; ) {
          // for each page append pagination li
          $('.pagination #prev')
            .before(
              '<li data-page="' +
                i +
                '">\
								  <span>' +
                i++ +
                '<span class="sr-only">(current)</span></span>\
								</li>'
            )
            .show();
        } // end for i
      } // end if row count > max rows
      $('.pagination [data-page="1"]').addClass('active'); // add active class to the first li
      $('.pagination li').on('click', function(evt) {
        // on click each page
        evt.stopImmediatePropagation();
        evt.preventDefault();
        var pageNum = $(this).attr('data-page'); // get it's number

        var maxRows = parseInt($('#maxRows').val()); // get Max Rows from select option

        if (pageNum == 'prev') {
          if (lastPage == 1) {
            return;
          }
          pageNum = --lastPage;
        }
        if (pageNum == 'next') {
          if (lastPage == $('.pagination li').length - 2) {
            return;
          }
          pageNum = ++lastPage;
        }

        lastPage = pageNum;
        var trIndex = 0; // reset tr counter
        $('.pagination li').removeClass('active'); // remove active class from all li
        $('.pagination [data-page="' + lastPage + '"]').addClass('active'); // add active class to the clicked
        // $(this).addClass('active');					// add active class to the clicked
	  	limitPagging();
        $(table + ' tr:gt(0)').each(function() {
          // each tr in table not the header
          trIndex++; // tr index counter
          // if tr index gt maxRows*pageNum or lt maxRows*pageNum-maxRows fade if out
          if (
            trIndex > maxRows * pageNum ||
            trIndex <= maxRows * pageNum - maxRows
          ) {
            $(this).hide();
          } else {
            $(this).show();
          } //else fade in
        }); // end of for each tr in table
      }); // end of on click pagination list
	  limitPagging();
    })
    .val(5000)
    .change();

  // end of on select change

  // END OF PAGINATION
}

function limitPagging(){
	// alert($('.pagination li').length)

	if($('.pagination li').length > 7 ){
			if( $('.pagination li.active').attr('data-page') <= 3 ){
			$('.pagination li:gt(5)').hide();
			$('.pagination li:lt(5)').show();
			$('.pagination [data-page="next"]').show();
		}if ($('.pagination li.active').attr('data-page') > 3){
			$('.pagination li:gt(0)').hide();
			$('.pagination [data-page="next"]').show();
			for( let i = ( parseInt($('.pagination li.active').attr('data-page'))  -2 )  ; i <= ( parseInt($('.pagination li.active').attr('data-page'))  + 2 ) ; i++ ){
				$('.pagination [data-page="'+i+'"]').show();

			}

		}
	}
}

 $(function() {
  // Just to append id number for each row
  $('table tr:eq(20)').prepend('<th  style="display:none;"> ID </th>');

  var id = 0;

  $('table tr:gt(20)').each(function() {
    id++;
    $(this).prepend('<td style="display:none;">' + id + '</td>');
  });
}); 













</script>