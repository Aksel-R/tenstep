<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    </meta>
    <link href="/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/css/bootstrap.min.css"
        rel="stylesheet">
    <link href="/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/css/style.css">
    <link rel="stylesheet" href="/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/css/font-awesome.min.css">



    <style>


    progress::-webkit-progress-value {background-color: #aaa !important;}



        ul#menu {
            width: 250px;
        }


        select#maxRows {
            width: 100%;
        }

        thead {
            font-size: 12px;
        }

        tbody#tableauxtbody {
            font-size: 12px;
        }



        #tableaux th {
            //background-color: #8eb8da;
            background-color: #0a2240;
            border: 1px solid #fff;
            color: white;
        }

        #tableaux td{
            border: 1px solid #ddd;
        }




        /*#headercolor {
            background: #8eb8da;
            padding: 10px;
            margin: 0 0 10px 0;
            text-align: right;
            border-radius: 10px;
        }*/

#headercolor {
    background: #0a2240;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 50px;
    margin: 0 0 10px 0;
    text-align: right;
    border-radius: 10px;
}



        #headercolor span {
            float: left;
            padding-top: 10px;
        }

        .smallRisks {
            font-size: 170%;
            float: left;
            font-weight: bold;
            color: white;
            padding-top: 7px;
        }



        #mylist1 {
            background-position: 10px 10px;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 13px;
            padding: 12px 20px 12px 15px;
            border: 1px solid #ddd;
            margin-left: 50px;
            border-radius: 5px;
        }

        #mylist2 {
            background-position: 10px 10px;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 13px;
            padding: 12px 20px 12px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        #mylist3 {
            background-position: 10px 10px;
            background-repeat: no-repeat;
            width: 18%;
            font-size: 13px;
            padding: 12px 20px 12px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        #mylist4 {
            background-position: 10px 10px;
            background-repeat: no-repeat;
            width: 18%;
            font-size: 13px;
            padding: 12px 20px 12px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        option:empty {
            display: none;
        }


        
        #tableaux tr>*:nth-child(7) {
            text-align: center;
        }

        #tableaux tr>*:nth-child(8) {
            text-align: center;
        }

        #tableaux tr>*:nth-child(9) {
            text-align: center;
        }

        #tableaux tr>*:nth-child(10) {
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
            font-size: 25px !important;
            color: #8eb8da;
        }

     
       
        .previous {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}

.next{
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}

a:hover {
  background-color: #ddd;
  color: black;
}

.previous{
  background-color: #8eb8da;
  color: white;
}

.next {
  background-color: #8eb8da;
  color: white;
}

.round {
  border-radius: 50%;
}

a#startNavigation {
    display: none;
}



  .ms-rtestate-field h1, h1.ms-rteElement-H1, .ms-rtestate-field h2, h2.ms-rteElement-H2 {
    line-height: 1.4;
    color: #000;
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

.ms-core-listMenu-verticalBox, .ms-core-listMenu-horizontalBox {
    font-size: 0.9em;
}

span.ms-cui-tt-span {
    display: none;
}


a#ctl00_PageStateActionButton {
    display: none;
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
.spinner {
    margin: 0 auto;
    height: 64px;
    width: 64px;
    animation: rotate 0.8s infinite linear;
    border: 5px solid #0072c6;
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
.spinner-border {
  text-align: center;
}

.card-body.gradient-4 {
    border-radius: 1rem;
}

.card.card-widget {
    border-radius: 1rem;
    margin-bottom: 15px;
}


    </style>
</head>

<body>
<div id="overlay">
    <div class="spinner"></div>
    <br/>
    Please Wait A Moment...
</div>


    <div id="headercolor">
        <div>
            
            <small class="smallRisks">
               SUIVI DES PASS SANITAIRES COVID-19
            </small>
        </div>
        <!--<div>
            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist1"
                onchange="MainFilter();">
                <option value="">DIRECTION</option>
            </select>
            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist2"
                onchange="MainFilter();">
                <option value="">APPROBATION</option>
            </select>

           
        </div>-->
    </div>


    <div id="main-wrapper">
        <div class="nk-sidebar" style="top:0px; background-color:transparent;">
            <div class="nk-nav-scroll" style="background-color:transparent;">
                <ul class="metismenu" id="menu" style="background-color:transparent;">
                    <li>
                        <div class="col-3" style="flex: 0 0 100%; max-width: 100%; margin-top:10px;">
                            <div class="card card-widget" style="box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5)">
                                <div class="card-body gradient-4">
                                    <div class="media">
                                        <span class="card-widget__icon"><img
                                                src='/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/img/counter.png'
                                                class='img-rounded' alt='Cinque Terre' width='55px'
                                                height='55px'></span>
                                        <div class="media-body">
                                            <p class="card-widget__subtitle">TOTAL</p>
                                            <p class="card-widget__title" style="color:white;" id="prcount">15</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                            <div class="card card-widget" style="box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5)">
                                <div class="card-body gradient-4">
                                    <div class="media">
                                        <span class="card-widget__icon"><img
                                                src='/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/img/logo-inscription.jpg'
                                                class='img-rounded' alt='Cinque Terre' width='55px'
                                                height='55px'></span>
                                        <div class="media-body">
                                            <p class="card-widget__subtitle">INSCRITS</p>
                                            <p class="card-widget__title" style="color:white;" id="prcost"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                            <div class="card card-widget" style="box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5)">
                                <div class="card-body gradient-4">
                                    <div class="media">
                                        <span class="card-widget__icon"><img
                                                src='/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/img/approuve.png'
                                                class='img-rounded' alt='Cinque Terre' width='55px'
                                                height='55px'></span>
                                        <div class="media-body">
                                            <p class="card-widget__subtitle">APPROUVES</p>
                                          <p class="card-widget__title" style="color:white;" id="cvariance"></p> </br>
                                          
                                            <p class="card-widget__title" style="color:white;" id="enpourcentage"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                            <div class="card card-widget" style="box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5)">
                                <div class="card-body gradient-4">
                                    <div class="media">
                                        <span class="card-widget__icon"><img
                                                src='/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/img/rejete.png'
                                                class='img-rounded' alt='Cinque Terre' width='55px'
                                                height='55px'></span>
                                        <div class="media-body">
                                            <p class="card-widget__subtitle">REFUSES</p>
                                            <p class="card-widget__title" style="color:white;" id="prwork"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                            <div class="card card-widget" style="box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5)">
                                <div class="card-body gradient-4">
                                    <div class="media">
                                        <span class="card-widget__icon"><img
                                                src='/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/img/encours.png'
                                                class='img-rounded' alt='Cinque Terre' width='55px'
                                                height='55px'></span>
                                        <div class="media-body">
                                            <p class="card-widget__subtitle">EN COURS</p>
                                            <p class="card-widget__title" style="color:white;" id="nbreEnCours"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="col-3" style="flex: 0 0 100%; max-width: 100%;">
                            <div class="card card-widget" style="box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5)">
                                <div class="card-body gradient-4">
                                    <div class="media">
                                        <span class="card-widget__icon"><img
                                                src='/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/img/nonInscript.png'
                                                class='img-rounded' alt='Cinque Terre' width='55px'
                                                height='55px'></span>
                                        <div class="media-body">
                                            <p class="card-widget__subtitle">RESTANT</p>
                                            <p class="card-widget__title" style="color:white;" id="wrvariance"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    

    <div class="content-body">
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <p class="card-title" style="color:black; ">APPROUVES / TOTAL </p>
                        <canvas id="projchart" height="220"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <p class="card-title" style="color:black;fonnt-family:bold;">APPROBATION D.C.Capital Humain</p>
                        <canvas id="barsline" height="220"></canvas>
                    </div>
                </div>
            </div>
        </div>
       


        </div> 
    </div>
</div>

</div>






    <script src="/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/javascript/jquery-3.5.1.js"></script>               
    <script src="/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/javascript/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/fixedheader/3.2.0/js/dataTables.fixedHeader.min.js"></script>
    <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>
    <!-- <script src="/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/javascript/jquery3.4.1.js"></script> -->
    <script src="/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/javascript/custom.min.js"></script>
    <script src="/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/javascript/Chart.min.js"></script>
    <script src="/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/javascript/chartjs-plugin-labels.js"></script>
    <script src="/sites/CapitalHumain/_catalogs/masterpage/capitalhumain/BHCH/javascript/nprogress.js"></script>



    <script type="text/javascript">

jQuery(document).ready(function() {
    jQuery('#overlay').fadeOut(3000);
});



        //-----------------------------------------------------------------------------------------------------------------------------
        //Premier affichage par défaut


        function conToMill(num) {
            if (num == 0) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
            }
            if (num < 1000000 && num > 999) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(2)) + 'K' : Math.sign(num) * Math.abs(num)
            }
            if (num < -999 && num > -1000000) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(2)) + 'K' : Math.sign(num) * Math.abs(num)
            }
            if (num < 0 && num > -1000) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
            }
            if (num > 0 && num < 1000) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
            }
            if (num > 999999) {
                return Math.abs(num) > 999999 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(2)) + 'M' : Math.sign(num) * Math.abs(num)
            }
            if (num < -999999) {
                return Math.abs(num) > 999999 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(2)) + 'M' : Math.sign(num) * Math.abs(num)
            }

        }


        //Load All Data in Select Lists






       




    var responsePersonnelBhList= responsePersonnelBhList || [];
    var urlPersonnelBhList= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Personnel%20BH%20Bank')/items?$select=Title,Colonne1";
    console.log("urlPersonnelBhList= "+urlPersonnelBhList);
    function loadArrPersonnelList(){
        $.ajax({
                url: urlPersonnelBhList,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responsePersonnelBhList = responsePersonnelBhList.concat(data.d.results);
                    if (data.d.__next) {
                        urlPersonnelBhList = data.d.__next;
                        loadArrPersonnelList();
                    }
                    var arrPerson=[];
                    var arrMat=[];
                    $.each(responsePersonnelBhList, function (key, value) {
                        var personnelName=value.Title;
                        var matricule=value.Colonne1;
                        if (arrMat.indexOf(matricule)<0) {
                            arrMat.push(matricule);
                            arrPerson.push(personnelName);
                        }

                    });
                   
                    
                    loadTabPAssManquant(arrMat,arrPerson);
                }
            });
    }
    loadArrPersonnelList();

var responselLoadTabPAssManquant= responselLoadTabPAssManquant || [];
var urlLoadTabPAssManquant=  _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('PassSanitaires3')/items";
function loadTabPAssManquant(arrMat,arrPerson){
    
}



     



      


        //Load Number Of All Project
        var responseNumberOfProjects = responseNumberOfProjects || [];
        var urlNumberOfProjects = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Personnel%20BH%20Bank')/items?$select=Colonne3";
        function LoadAllNumberProject() {
            var nbre = 0;

            $.ajax({
                url: urlNumberOfProjects,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseNumberOfProjects = responseNumberOfProjects.concat(data.d.results);
                    if (data.d.__next) {
                        urlNumberOfProjects = data.d.__next;
                        LoadAllNumberProject();
                    }

                    $.each(responseNumberOfProjects, function (key, value) {
                        var nombrePersonnel = value.Colonne3;
                        if (nombrePersonnel != null) {
                            nbre++;
                        }

                    });
                   
                    document.getElementById("prcount").innerHTML = nbre;
                    //LoadAllNumberInscription(nbre);
                }
            });
        }
        LoadAllNumberProject();


        //Load Number Of All Project 
        var responseNumberInscription = responseNumberInscription || []; 
        var urlNumberOfInscription = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('PassSanitaires3')/items?$select=MatriculeId,Statut"; 
        console.log("urlNumberOfInscription= "+urlNumberOfInscription);
        function LoadAllNumberInscription() 
        { 
                            var nbreInscription = 0; 
                            var nbreApprove=0; 
                            var nbrRejete=0; 
                            var nbNonInscript=0; 
                            var nbreEnCours=0; 
                            var nbreAllRess=1665; 
                            var tabPersonnel =[]; 
                            var ApproveStatus = []; 
                            var Datecreate = []; 
                            var DateCreation; 
                            var approuveStatus; 
                            var nombrePersonnelInscript; 
        $.ajax({ url: urlNumberOfInscription, 
                        method: "GET", dataType: "json", headers: { 
                        Accept: "application/json;odata=verbose" }, 
                        success: function (data) { 
        responseNumberInscription = responseNumberInscription.concat(data.d.results); 
                            if (data.d.__next) { 
                                    urlNumberOfInscription = data.d.__next; 
                                        LoadAllNumberInscription(); 
                                        }

                    $.each(responseNumberInscription, function (key, value) {
 
        nombrePersonnelInscript = value.MatriculeId; 
        var approbation = value.Statut;
        console.log("approbation= "+approbation);

                        if (nombrePersonnelInscript != null) {
 
        nbreInscription++; DateCreation = value.Created;

                        }

                        if(approbation == "Approuvée")
                                               { 
        nbreApprove++; approuveStatus="Approuvée";

                        }

                        if(approbation == "Refusée")
                                               { 
        nbrRejete++; approuveStatus="Refusée"; }

                        if(approbation == "En cours")
                                               { 
        nbreEnCours++; approuveStatus="En cours"; }

                        
if(tabPersonnel.indexOf(nombrePersonnelInscript)==-1)
        {                 
                tabPersonnel.push(nombrePersonnelInscript);
        
            }
        
                    });
nbNonInscript = nbreAllRess-nbreApprove;
        document.getElementById("prcost").innerHTML = nbreInscription;
       document.getElementById("wrvariance").innerHTML = nbNonInscript;

                    document.getElementById("cvariance").innerHTML = nbreApprove;
          document.getElementById("prwork").innerHTML = nbrRejete; 
          document.getElementById("nbreEnCours").innerHTML = nbreEnCours;
          document.getElementById('enpourcentage').innerHTML = parseFloat((nbreApprove / nbreAllRess)*100).toFixed(0) + '%';
          
          
          
           
            LoadBarGovernancePhase(nbreApprove);
                        
                        
              //mainFunctionTable(tabPersonnel);      

                    //Datecreate.push(DateCreation);
 
        //ApproveStatus.push(approuveStatus);

                        

                    

                }
                       });
}
LoadAllNumberInscription();





















  //Fonction for Actual and Remaining Project Assignments

var colors =  ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];
var responseDataTwoBar = responseDataTwoBar || [];
var loadEvent = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('PassSanitaires3')/items?$select=Title";
function LoadBarGovernancePhase(nbreApprove)
{
  $("#projchart").show();
  
      $.ajax({
      url: loadEvent,

      dataType: "json",
      
      method: "GET",
      headers: { "Accept": "application/json; odata=verbose" },
      success: function (data) {
            responseDataTwoBar = responseDataTwoBar.concat(data.d.results);
            if(data.d._next)
            {
                loadEvent=data.d._next;
                LoadBarGovernancePhase(nbreApprove);
            }
        
        
        var nombreTotal = 1665;

        var reducedObject = {};
       var reducedObject2 = {};
       var somme1=0;
       var somme2=0;
       var pourcentageCourbe=0;
        $.each(responseDataTwoBar,function(key,value){
        

           
            for (var i = 0; i < responseDataTwoBar.length; i++) {
                if(responseDataTwoBar[i].Title =='Pass Sanitaire')
                    {
                            somme1++;
                            somme2++;
                    if (!reducedObject[responseDataTwoBar[i].Title]) {
          
                        reducedObject[responseDataTwoBar[i].Title] = 0;
                }
        if (!reducedObject2[responseDataTwoBar[i].Title]) {
          
                        reducedObject2[responseDataTwoBar[i].Title] = 0;
                }
                reducedObject[responseDataTwoBar[i].Title] = parseInt(nombreTotal);
                reducedObject2[responseDataTwoBar[i].Title] = parseInt(nbreApprove);
               
            }
           }
         });
            pourcentageCourbe = parseFloat((parseInt(nbreApprove)/parseInt(nombreTotal))*100).toFixed(0);
                    //console.log("pourcentageCourbe" + pourcentageCourbe);
           var keys = Object.keys(reducedObject);
       var keys2 = Object.keys(reducedObject2);
        var pieLabels = [];
        var pieValues = [];
        var pieValues2 = [];
        for (var i = 0; i < keys.length; i++) {
            pieValues.push(reducedObject[keys[i]]);
            pieValues2.push(reducedObject2[keys[i]]);
          pieLabels.push(keys[i]);
          
          
        }

var config = {
  type: 'bar',
  data: {
    labels: pieLabels,
    datasets: [{
      label: "Approuvés",
      backgroundColor: "#2da71f",
      borderColor: "#2da71f",
      data: pieValues2,
      fill: false,
      render:'percentage',
      display:true,
    }, {
      label: "Total",
      fill: false,
      
      backgroundColor: "#0a2240",
      borderColor:"#0a2240",
      data: pieValues,
    }]
  },
  options: {

    plugins:{
              
              labels: {
              fontColor: '#fff',
                                        render: 'value',
                                        fontSize: 20,
                                        display:false,
                                        //render:pourcentageCourbe + "%",
                                        
              }

            },
    legend: { display: true },
    responsive: true,
    render :'value',
    title:{
      display:false
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
   hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
      ticks: {
        minRotation: 90,
    fontSize:10
      },
      stacked: true,
        display: false,
        scaleLabel: {
          display: false
        }
      }],
      yAxes: [{
      stacked: true,
        display: true,
        scaleLabel: {
          display: false,
        },
        ticks: {
                beginAtZero: true,   // minimum value will be 0.
                // <=> //
                
                max: nombreTotal,
                
            }
        
      }]
    }
  },
 tooltips: {
enabled: true,
mode: 'single',
callbacks: {
label: function(tooltipItems, data) {
return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + ' %';
}
}
}
};

var ctx = document.getElementById("projchart").getContext("2d");
if (window.twoBars != undefined)
{
    window.twoBars.destroy();
}
//
            window.twoBars = new Chart(ctx, config);
}



});
}
_spBodyOnLoadFunctionNames.push("LoadBarGovernancePhase");



        var colors = ["#52a71d", "#e2001a", "#1659ad"];


        //Load Graph For ProjectType
        var responsePhaseChart = responsePhaseChart || [];
        var urlPhaseChart = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('PassSanitaires3')/items?select=Statut";
        function LoadProjectType() {
            $.ajax({
                url: urlPhaseChart,


                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responsePhaseChart = responsePhaseChart.concat(data.d.results);
                    if (data.d.__next) {
                        urlPhaseChart = data.d.__next;
                        LoadProjectType();
                    }
                    var itermeidiaryObject = {};
                    $.each(responsePhaseChart, function (key, value) {

                        var epn = value.Statut;
                        if(epn =="2")
                        {
                            epn=" En cours";
                        }else{
                            if(epn =="17")
                            {
                                epn="Refusé";
                                }
                        }
                        if(epn=="16")
                        {
                            epn="Approuvé";     
                        }
                        
                        var som = 0;
                        if (epn != null) {
                            itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                        }
                        var somme = som;
                    });

                    var finalObject = Object.keys(itermeidiaryObject).map(function (key) {
                        return {
                            label: key,
                            y: itermeidiaryObject[key]
                        }
                    });

                    var pievalues = finalObject.map(function (value, index) {
                        return value.y;
                    });

                    var labels = finalObject.map(function (value, index) {
                        return value.label;
                    });

                    var colorscheme = colors.slice(0, labels.length);


                    var ctx2 = document.getElementById("barsline").getContext('2d');
                    if (window.echartdonut != undefined) {
                        window.echartdonut.destroy();
                    }

                    window.echartdonut = new Chart(ctx2, {
                        type: 'doughnut',
                        data: {
                            labels: labels,
                            datasets: [{
                                data: pievalues,
                                backgroundColor: colorscheme
                            }]
                        },
                        options: {
                            legend: { display: true },
                            responsive: true,
                            plugins: {
                                labels: [
                                    {
                                        render: 'label',
                                        fontColor: '#000',
                                        position: 'outside',
                                        fontSize: 14,
                                        render:'value',
                                        
                                    },
                                    {
                                        fontColor: '#fff',
                                        
                                        render: ['percentage'],
                                        fontSize: 12
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





    </script>
</body>

</html>