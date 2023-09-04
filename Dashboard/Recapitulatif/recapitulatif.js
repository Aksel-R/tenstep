
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Recapitulatif/css/bootstrap.min.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Recapitulatif/css/bootstrap.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Recapitulatif/css/style.css" rel="stylesheet">
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


  #tableaux
{
   border-radius: 1em;
  overflow: hidden;
  width:100%;
   
}


   #tableaux thead {
  
    background: #8eb8d9;
    background-color: #dce9f4;
    background-image: linear-gradient(225deg,#dce9f4 20%, #8eb8da 80%);
   
    color: black;
  }


.stat-digit{
    font-size: 25px;
    font-family: cursive;
}


.ms-rtestate-field h4, h4.ms-rteElement-H4 {
    line-height: 1.6;
    color: black;
}


.form-item__element {
  display: inline-block;
  padding: 0.5em;
  vertical-align: middle;
  background: #fff;
  color: black;
  border-radius: 4px;
  border: 1px solid gray;
  width:200px;
}

.form-item__element option {
  color: #444;
  font-size: 14pt ;
}


    #headercolor{
    background: #8eb8d9;
    background-color: #dce9f4;
    background-image: linear-gradient(225deg,#dce9f4 20%, #8eb8da 80%);
    padding:10px;
    margin: 0 0 10px 0;
    text-align:right;
    border-radius : 5px ;
  }

  #headercolor span{
    float: left;
    padding-top: 10px;
  }

  .smallRisks {
    font-size: 140%;
    float: left;
    font-weight: bold;
    color : white;
     padding: 5px;
  }





    #mylist4 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 30%;
    text-align: center;
    font-size: 18px;
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

/*#tableaux tr > *:nth-child(7) {
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
}*/


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



span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}

.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
    display: none;
}

.card-text,
.card-title{
  text-align: center;
  font-size:14px;
   font-weight : bolder;
   color: black;

}








.card-header {
    padding: 0.2rem ;
   
     

    
}
.card .card-body {
       padding: 0rem 0rem 0.5rem 0rem;
        text-align: center;

        
}
.card{
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);

  background-color: #fafffa;




}

</style>	
</head>

<body>
        <div id="headercolor">
          <div>
            <small class="smallRisks">
             Récapitulatif
            </small>
          </div>

        <div>         
          <select class="form-item__element form-item__element--select" style="color:black; font-weight:bold;"  id="select" onchange="mainfilter();">
               <option selected="" value="">Responsable</option>
            </select>
            </div>
            </div>


            
                        <div class="row">
                            <div class="col-2" style="padding-right: 5px;">

                            <div class="card" style="margin-bottom: 1rem;margin-top: 10px;height: 90px;">
  <div class="row justify-content-between">
    <div class="col-3">
      <i class="fa fa-calculator fa-4x" aria-hidden="true" style="color: #2bacca; margin-top: 30%;"></i>
    </div>
    <div class="col-7">
     <div class="card-body">
    <h5 class="card-title">Nombre de ressource</h5>
    <p class="card-text" id="nbRes" style="height: auto;"></p>

  </div>
    </div>
  </div>
</div>

<div class="card" style="margin-bottom: 1rem;margin-top: 10px;height: 90px;">
  <div class="row justify-content-between">
    <div class="col-3">
      <i class='fa fa-floppy-o fa-4x' aria-hidden='true' style="color: rgb(255 172 101); margin-top: 15%;"></i>
    </div>
    <div class="col-7">
     <div class="card-body">
  <h5 class="card-title">Enregistrée</h5>
    <p class="card-text" id="nbEnr" style="height: auto;"></p>

  </div>
    </div>
  </div>
</div>


<div class="card" style="margin-bottom: 1rem;margin-top: 10px;height: 90px;">
  <div class="row justify-content-between">
    <div class="col-3">
      <i class="fa fa-paper-plane fa-3x" aria-hidden="true" style="color: rgb(87 115 255); margin-top: 15%;"></i>
    </div>
    <div class="col-7">
     <div class="card-body">
    <h5 class="card-title">Soumise</h5>
  <p class="card-text" id="nbSoumise" style="height: auto;"></p>

  </div>
    </div>
  </div>
</div>


<div class="card" style="margin-bottom: 1rem;margin-top: 10px;height: 90px;">
  <div class="row justify-content-between">
    <div class="col-3">
      <i class="fa fa-check fa-4x" aria-hidden="true" style="color: rgb(140 220 154);"></i>
    </div>
    <div class="col-7">
     <div class="card-body">
    <h5 class="card-title">Approuvée</h5>
    <p class="card-text" id="nbApr" style="height: auto;"></p>

  </div>
    </div>
  </div>
</div>



<div class="card" style="margin-bottom: 1rem;margin-top: 10px;height: 90px;">
  <div class="row justify-content-between">
    <div class="col-3">
      <i class="fa fa-times fa-4x" aria-hidden="true" style="color: rgb(255 122 122);"></i>
    </div>
    <div class="col-7">
     <div class="card-body">
    <h5 class="card-title">Rejetée</h5>
    <p class="card-text" id="nbRej" style="height: auto;"></p>

  </div>
    </div>
  </div>
</div>


<div class="card" style="margin-bottom: 1rem;margin-top: 10px;display:none;height: 90px;"id="cardManquant">
  <div class="row justify-content-between">
    <div class="col-3">
      <i class="fa fa-exclamation-triangle fa-3x" aria-hidden="true" style="color: #ECE20D; margin-top: 20%;"></i>
    </div>
    <div class="col-7">
     <div class="card-body">
    <h5 class="card-title">Manquante par <br> Responsable(s)</h5>
    <p class="card-text" id="nbManq" style="height: auto;"></p>
  </div>
    </div>
  </div>
</div>
</div>


   <div  style="padding-left: 5px;width:80%;">
                              <div  style="flex: 0 0 100%; max-width: 100%; margin-top:10px; ">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title" style="color:black;">Répartition des feuilles de temps par Diréction</h4>
                                        <canvas id="projchart" style="max-height: 458px;display: block;width: 1379px;"></canvas>
                                    </div>
                                </div>
                              </div>
                            </div>
                                 
                        </div> 
                                <div class="row">
                                     <div class="col-12" >
                                        <div class="x_content table-responsive">
                                            <table id="tableaux" class="table table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Responsable</th>
                                                        <th style="text-align:center">Collaborateur</th>
                                                        <th style="text-align:center">Enregistrée</th>
                                                        <th style="text-align:center">Soumise</th>
                                                        <th style="text-align:center">Approuvée</th>
                                                        <th style="text-align:center">Rejetée</th>
                                                        <th style="text-align:center">Manquant par Collaborateur</th>
                                                        <th style="text-align:center">Manquant par Responsable</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tableauxtbody"></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

     <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>
     <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Recapitulatif/javascript/jquery3.4.1.js"></script>
     <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Recapitulatif/javascript/custom.min.js"></script>
     <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Recapitulatif/javascript/Chart.min.js"></script>
   
 



<script type="text/javascript">

console.log();
  var responseApproverName = responseApproverName || [];
                var urlApproverName = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetApproverResourceName,TimesheetApproverResourceId";

                function LoadApproverName() {

                    $.ajax({
                        url: urlApproverName,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseApproverName = responseApproverName.concat(data.d.results);
                            if (data.d.__next) {
                                urlApproverName = data.d.__next;
                                LoadApproverName();
                            }
                      
                            $.each(responseApproverName, function (key, value) {
                                
                                
                                    var aprouverName = value.TimesheetApproverResourceName;
                                var aprouverId = value.TimesheetApproverResourceId;

                                if ((aprouverName != "Ressource locale générique")&&(aprouverName != "Ressource inconnue")&&(aprouverName != "Ressource non affectée"))
                                {
                                  console.log("aprouverId= "+aprouverId);
                                  $('#select').append($('<option>',
                                    {
                                        text: aprouverName,
                                        value: aprouverId
                                    }));

                                var opt = {};
                                $("#select > option").each(function () {
                                    if (opt[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt[$(this).text()] = $(this).val();
                                    }
                                });
                                }

                                
                                


                            });
                            
                        }
                    });
                }
                LoadApproverName();



var responseKPIsTimesheet = responseKPIsTimesheet ||[];
    var urlKPIsTimesheet = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetStatus,TimesheetOwner";

    function LoadKPIsTimesheet() {

                $.ajax({url:  urlKPIsTimesheet,          
                                        method: "GET",
                                        dataType: "json",
                                        headers: {Accept: "application/json;odata=verbose"},       
                                        success: function(data) {     
                                        responseKPIsTimesheet = responseKPIsTimesheet.concat(data.d.results);
                                            if (data.d.__next) {
                                                urlKPIsTimesheet = data.d.__next;
                                                LoadKPIsTimesheet();
                                            }       
                                              
                              var countRessource=0;
                              var countApprouve=0;
                              var countRefuse=0;
                              var countSoumise=0;
                              var countEncours=0;
                $.each(responseKPIsTimesheet, function(key, value) 
                {
                  var nomRessource=value.TimesheetOwner;
                    if ((nomRessource != "Ressource locale générique")&&(nomRessource != "Ressource inconnue")&&(nomRessource != "Ressource non affectée")) {
                        countRessource++;
                    }
                    var statutF=value.TimesheetStatus;
                    if (statutF=="Approuvée") {countApprouve++;}
                    if (statutF=="Rejetée") {countRefuse++;}
                    if (statutF=="Soumise") {countSoumise++;}
                    if (statutF=="En cours de réalisation" || statutF=="Envoi en attente") {countEncours++;}
                });
                
                document.getElementById("nbRes").innerHTML = countRessource;
                document.getElementById("nbEnr").innerHTML = countEncours;
                document.getElementById("nbSoumise").innerHTML = countSoumise;
                document.getElementById("nbApr").innerHTML = countApprouve;
                document.getElementById("nbRej").innerHTML = countRefuse;
                //document.getElementById("nbManq").innerHTML = pworkvariance;


    }   
    });
    }         
    LoadKPIsTimesheet(); 

    var responceRessource=responceRessource || [];
    var urlRessource=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?$select=ResourceName,ResourceDepartments";
    function loadDirectionArr(){
      $.ajax({url:  urlRessource,          
                                        method: "GET",
                                        dataType: "json",
                                        headers: {Accept: "application/json;odata=verbose"},       
                                        success: function(data) {     
                                        responceRessource = responceRessource.concat(data.d.results);
                                            if (data.d.__next) {
                                                urlRessource = data.d.__next;
                                                loadDirectionArr();
                                            }       
                                              
                var arrayRessources=[];
                var arrayDirection=[]; 
                var arrayDir=[]; 
                var arrayEnregistrer=[];
                var arraySoumise=[];           
                var arrayApprouver=[];
                var arrayRejeter=[];
                var arrayEn=[];
                var arraySo=[];
                var arrayAp=[];
                var arrayRe=[];
                $.each(responceRessource, function(key, value) 
                {
                  var dir=value.ResourceDepartments;
                  if (dir!=null) {
                    var ressName=value.ResourceName;
                    arrayRessources.push(ressName);
                    arrayDirection.push(dir);
                    arrayEnregistrer.push(0);
                    arraySoumise.push(0);
                    arrayApprouver.push(0);
                    arrayRejeter.push(0);
                    if (arrayDir.indexOf(dir)<0) {
                      arrayDir.push(dir);
                      arrayEn.push(0);
                      arraySo.push(0);
                      arrayAp.push(0);
                      arrayRe.push(0);
                    }
                  }
                });
                loadBarchartTimsheetDirection(arrayRessources,arrayDirection,arrayDir,arrayEnregistrer,arraySoumise,arrayApprouver,arrayRejeter,arrayEn,arraySo,arrayAp,arrayRe);              
    }   
    });
    }
    loadDirectionArr();


    function loadBarchartTimsheetDirection(arrayRessources,arrayDirection,arrayDir,arrayEnregistrer,arraySoumise,arrayApprouver,arrayRejeter,arrayEn,arraySo,arrayAp,arrayRe){
      var responseTimesheetesDirection=responseTimesheetesDirection || [];
      var urlTimesheetesDirection=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Timesheets";
      function barChartDirection(){
            $.ajax({url:  urlTimesheetesDirection,          
                                            method: "GET",
                                            dataType: "json",
                                            headers: {Accept: "application/json;odata=verbose"},       
                                            success: function(data) {     
                                            responseTimesheetesDirection = responseTimesheetesDirection.concat(data.d.results);
                                                if (data.d.__next) {
                                                    urlTimesheetesDirection = data.d.__next;
                                                    barChartDirection();
                                                }       
                                                  
                              
                    $.each(responseTimesheetesDirection, function(key, value) 
                    {
                      var owner=value.TimesheetOwner;
                      var statut=value.StatusDescription;
                      if (statut=="Approuvée"){
                        arrayApprouver[arrayRessources.indexOf(owner)]+=1;
                      }
                      if (statut=="Rejetée"){
                        arrayRejeter[arrayRessources.indexOf(owner)]+=1;
                      }
                      if ((statut=="En cours de réalisation") || (statut=="Envoi en attente")){
                        arrayEnregistrer[arrayRessources.indexOf(owner)]+=1;
                      }
                      if (statut=="Soumise"){
                        arraySoumise[arrayRessources.indexOf(owner)]+=1;
                      }

                    });
                    
                    for (var i = 0; i < arrayRessources.length; i++) {
                      arrayEn[arrayDir.indexOf(arrayDirection[i])]+=arrayEnregistrer[i];
                      arraySo[arrayDir.indexOf(arrayDirection[i])]+=arraySoumise[i];
                      arrayAp[arrayDir.indexOf(arrayDirection[i])]+=arrayApprouver[i];
                      arrayRe[arrayDir.indexOf(arrayDirection[i])]+=arrayRejeter[i];
                    }

                    console.log("arrayDir= "+arrayDir);
                    console.log("arrayEn= "+arrayEn);
                    console.log("arraySo= "+arraySo);
                    console.log("arrayAp= "+arrayAp);
                    console.log("arrayRe= "+arrayRe);

                    var ctx = document.getElementById("projchart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrayDir,
        
        datasets: [ {
              label: 'Approuvée',
              fill:false,
            data: arrayAp,
            backgroundColor: '#5cb85c',
            borderColor:'#5cb85c',
            borderWidth: 1
        },
        
        {
            label: 'Soumise',
              fill:false,
            data: arraySo,
            backgroundColor: '#337ab7',
            borderColor: '#337ab7',           
            borderWidth: 1
        },
        {
            label: 'Enregistrée',
            data: arrayEn,
              fill:false,
           backgroundColor:  '#f0ad4e',
            borderColor:  '#f0ad4e',            
            borderWidth: 1
        },
        {
            label: 'Rejetée',
            data: arrayRe,
              fill:false,
           backgroundColor:  '#d9534f',
            borderColor: '#d9534f',            
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        title: {
            display: false,
            text: 'statut feuille de temps'
        },
        responsive: true,
        
       /*tooltips: {
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: ['#5cb85c','#337ab7','#f0ad4e','#d9534f'],
                        backgroundColor: ['#5cb85c','#337ab7','#f0ad4e','#d9534f']
                    }
                }
            }
        },*/
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'black',
               
            }
        }
    }
});
                                  
        }   
        });
      }
      barChartDirection();
    }










var responseTabFt = responseTabFt ||[];
    var urlTabFt = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines";

    function LoadTabFt() {

                $.ajax({url:  urlTabFt,          
                                        method: "GET",
                                        dataType: "json",
                                        headers: {Accept: "application/json;odata=verbose"},       
                                        success: function(data) {     
                                        responseTabFt = responseTabFt.concat(data.d.results);
                                            if (data.d.__next) {
                                                urlTabFt = data.d.__next;
                                                LoadTabFt();
                                            }       
                                              var ressourceTab=[];
                                              var responsableTab=[];
                                              var aprouveTab=[];
                                              var rejetTab=[];
                                              var enregistreTab=[];
                                              var soumiseTab=[];
                                              var manquantColTab=[];
                                              var manquantResTab=[];
                                              var StartDateArr=[];

                                              var matRec=[];
                                              var matRec1=[];

                                              var sunday = moment().startOf('year').day("Monday");
                                              ////console.log("sunday= "+moment(sunday).format('DD-MM-YYYY'));
                                              if (sunday.date() > 7) sunday.add(7, 'd');
                                              var month = sunday.year();
                                              ////console.log("month= "+month);
                                              while (month === sunday.year()) {
                                                ////console.log("sunday.toString()= "+sunday.toString());
                                                var days = sunday.toString();
                                                sunday.add(7, 'd');
                                                dayss = moment(days).format('DD-MM-YYYY');
                                                if (StartDateArr.indexOf(dayss) == -1) {
                                                  StartDateArr.push(dayss);                                                  
                                                }
                                              }

                                              //console.log("___StartDateArr= "+StartDateArr.join());
                                              var thisMonday=moment().startOf('week').add(1, 'd').format('DD-MM-YYYY');
                                              var nbSem=StartDateArr.indexOf(thisMonday)+1;
                                                //console.log("nbSem= "+nbSem);
                              
                $.each(responseTabFt, function(key, value) 
                {
                    var roessourceName=value.TimesheetOwner;
                    var statutFeuille=value.TimesheetStatus;
                    var responsable=value.TimesheetApproverResourceName;
                    
                    var periodStart=value.PeriodStartDate;

                    if (((responsable == "Ressource locale générique")||(responsable == "Ressource inconnue")||(responsable == "Ressource non affectée"))) {
                        responsable="";
                    }
                                      
                    if (statutFeuille=="Approuvée") {
                      //console.log("***responsable= "+responsable);
                        if (ressourceTab.indexOf(roessourceName)==-1){
                          ressourceTab.push(roessourceName);
                          responsableTab.push(responsable);
                          aprouveTab.push(1);
                          rejetTab.push(0);
                          enregistreTab.push(0);
                          soumiseTab.push(0);
                          
                          

                        }else if (ressourceTab.indexOf(roessourceName)!=-1){
                          aprouveTab[ressourceTab.indexOf(roessourceName)]=aprouveTab[ressourceTab.indexOf(roessourceName)]+1;
                          //console.log("***responsable= "+responsable);
                          if ((responsableTab[ressourceTab.indexOf(roessourceName)]=="")&&(responsable!="")) {
                        responsableTab[ressourceTab.indexOf(roessourceName)]=responsable;
                      }
                        }
                        matRec.push(roessourceName+" "+moment(periodStart).format('DD-MM-YYYY'));
                        matRec1.push(responsable+" "+moment(periodStart).format('DD-MM-YYYY')+" "+roessourceName);
                    
                  }

                  if (statutFeuille=="Rejetée") {
                    //console.log("***responsable= "+responsable);
                    if (ressourceTab.indexOf(roessourceName)==-1){
                      
                      ressourceTab.push(roessourceName);
                                        responsableTab.push(responsable);
                      aprouveTab.push(0);
                      rejetTab.push(1);
                      enregistreTab.push(0);
                      soumiseTab.push(0);
                     
                    }else if (ressourceTab.indexOf(roessourceName)!=-1){
                      rejetTab[ressourceTab.indexOf(roessourceName)]=rejetTab[ressourceTab.indexOf(roessourceName)]+1;
                      if ((responsableTab[ressourceTab.indexOf(roessourceName)]=="")&&(responsable!="")) {
                        responsableTab[ressourceTab.indexOf(roessourceName)]=responsable;
                      }
                      
                    }
                    matRec.push(roessourceName+" "+moment(periodStart).format('DD-MM-YYYY'));
                    matRec1.push(responsable+" "+moment(periodStart).format('DD-MM-YYYY')+" "+roessourceName);
                  }

                  if ((statutFeuille=="En cours de réalisation") || (statutFeuille=="Envoi en attente")) {
                    //console.log("***responsable= "+responsable);
                    if (ressourceTab.indexOf(roessourceName)==-1){
                      ressourceTab.push(roessourceName);
                                        responsableTab.push(responsable);
                      aprouveTab.push(0);
                      rejetTab.push(0);
                      enregistreTab.push(1);
                      soumiseTab.push(0);
                    
                    }else if (ressourceTab.indexOf(roessourceName)!=-1){
                      
                      enregistreTab[ressourceTab.indexOf(roessourceName)]=enregistreTab[ressourceTab.indexOf(roessourceName)]+1;
                      if ((responsableTab[ressourceTab.indexOf(roessourceName)]=="")&&(responsable!="")) {
                        responsableTab[ressourceTab.indexOf(roessourceName)]=responsable;
                      }
                    }
                    matRec.push(roessourceName+" "+moment(periodStart).format('DD-MM-YYYY'));
                    matRec1.push(responsable+" "+moment(periodStart).format('DD-MM-YYYY')+" "+roessourceName);
                  }

                  if (statutFeuille=="Soumise") {
                    //console.log("***responsable= "+responsable);
                    if (ressourceTab.indexOf(roessourceName)==-1){
                      ressourceTab.push(roessourceName);
                                        responsableTab.push(responsable);
                      aprouveTab.push(0);
                      rejetTab.push(0);
                      enregistreTab.push(0);
                      soumiseTab.push(1);
                     
                    }else if (ressourceTab.indexOf(roessourceName)!=-1){
                      soumiseTab[ressourceTab.indexOf(roessourceName)]=soumiseTab[ressourceTab.indexOf(roessourceName)]+1;
                      if ((responsableTab[ressourceTab.indexOf(roessourceName)]=="")&&(responsable!="")) {
                        responsableTab[ressourceTab.indexOf(roessourceName)]=responsable;
                      }
                    }
                    matRec.push(roessourceName+" "+moment(periodStart).format('DD-MM-YYYY'));
                    matRec1.push(responsable+" "+moment(periodStart).format('DD-MM-YYYY')+" "+roessourceName);
                  }
                 
          });
                

                for (var i = 0; i<ressourceTab.length ; i++) {
                  var cc=0;
                  for (var j = 0; j<matRec.length ; j++){
                    //console.log("condition= "+matRec[j].indexOf(ressourceTab[j]));
                    if (matRec[j].indexOf(ressourceTab[j])>=0) {
                      cc+=1;                      
                    }                    
                  }

                  manquantColTab[i]=parseInt(cc);
                }
                
                //console.log("____-----matRec1= "+matRec1.join("|"));
                for (var i = 0; i < ressourceTab.length; i++) {
                  var tr;
                    tr = $("<tr class='even pointer'>");
                        tr.append("<td style='text-align:center'>" + responsableTab[i] + "</td>"); //0
                        tr.append("<td style='text-align:center'>" + ressourceTab[i]+ "</td>"); //1
                        
                        tr.append("<td style='text-align:center'>" + enregistreTab[i] + "</td>");//2
                        tr.append("<td style='text-align:center'>" + soumiseTab[i] + "</td>"); //3
                        tr.append("<td style='text-align:center'>" + aprouveTab[i] + "</td>"); //4
                        tr.append("<td style='text-align:center'>" + rejetTab[i] + "</td>"); //5
                        var manquqntTS=parseInt(nbSem)-parseInt(manquantColTab[i]);
                        tr.append("<td style='text-align:center'>" + manquqntTS + "</td>"); //6
                        tr.append("<td style='text-align:center'></td>"); //7

                    $('#tableaux').append(tr);
                
                } loadManquantParResponsable();
                
                
    }   
    });
    }         
    LoadTabFt();


    function loadManquantParResponsable(){
      var tbl = document.getElementById("tableaux");
      var arrRes=[];
      var arrManquantRes=[];
      
      for (var i = 1; i <tbl.rows.length ; i++) {
        var manquantParRessource=parseInt(tbl.rows[i].cells[6].innerHTML);
        var responsable=tbl.rows[i].cells[0].innerHTML;        
        if (arrRes.indexOf(responsable)<0) {
          arrRes.push(responsable);
          arrManquantRes.push(manquantParRessource);
        }else{
          arrManquantRes[arrRes.indexOf(responsable)]=parseInt(arrManquantRes[arrRes.indexOf(responsable)])+parseInt(manquantParRessource);
        }
      }
      //console.log("$$$$$$$$$arrManquantResL= "+arrManquantRes);
      for (var i = 1; i <tbl.rows.length ; i++){
        var responsable1=tbl.rows[i].cells[0].innerHTML; 
        tbl.rows[i].cells[7].innerHTML =arrManquantRes[arrRes.indexOf(responsable1)];
      }
    }







</script>