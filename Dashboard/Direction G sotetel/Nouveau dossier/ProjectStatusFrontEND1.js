<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sufee Admin - HTML5 Admin Template</title>
    <meta name="description" content="Sufee Admin - HTML5 Admin Template">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" href="apple-icon.png">
    <link rel="shortcut icon" href="favicon.ico">


    <link rel="stylesheet" href="/PWA/_catalogs/masterpage/Suivi_projet/css/w3.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="/PWA/_catalogs/masterpage/Suivi_projet/css/normalize.css">
    <link rel="stylesheet" href="/PWA/_catalogs/masterpage/Suivi_projet/css/bootstrap.css">
    <link rel="stylesheet" href="/PWA/_catalogs/masterpage/Suivi_projet/css/font-awesome.min.css">
    <link rel="stylesheet" href="/PWA/_catalogs/masterpage/Suivi_projet/css/flag-icon.min.css">
    <link rel="stylesheet" href="/PWA/_catalogs/masterpage/Suivi_projet/css/cs-skin-elastic.css">
    <link rel="stylesheet" href="/PWA/_catalogs/masterpage/Suivi_projet/css/style.css">
    <link rel="stylesheet" href="/PWA/_catalogs/masterpage/Suivi_projet/css/achevement.css">
    <link rel="stylesheet" href="/PWA/_catalogs/masterpage/Suivi_projet/css/styleFrontEnd.css">
    <link rel="stylesheet" href="/PWA/_catalogs/masterpage/Suivi_projet/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
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

#titreProjets {
font-weight: bolder;
color: aliceblue;
font-size: x-large;
/* margin-left: 35%; */
float:none;
}


#exerciceDates {
background-position: 10px 10px;
background-repeat: no-repeat;
font-size: 16px;
padding: 10px 0px 10px 10px;
border: 1px solid #ddd;
border-radius : 5px;
width: 8%;
}

#filtreDirection {
background-position: 10px 10px;
background-repeat: no-repeat;
font-size: 16px;
padding: 10px 0px 10px 10px;
border: 1px solid #ddd;
border-radius : 5px;
width: 16%;
}

#filtreDirectionprojet {
background-position: 10px 10px;
background-repeat: no-repeat;
font-size: 16px;
padding: 10px 0px 10px 10px;
border: 1px solid #ddd;
border-radius : 5px;
width: 16%;
}

#filtreSousDirection{
  background-position: 10px 10px;
background-repeat: no-repeat;
font-size: 16px;
padding: 10px 0px 10px 10px;
border: 1px solid #ddd;
border-radius : 5px;
width: 16%;
}

input, select, label, textarea, button, option {
font-family: inherit;

color: inherit;
vertical-align: middle;
font-size: 16px;
}

.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
display: none;
}
a.static.menu-item.ms-core-listMenu-item.ms-displayInline.ms-navedit-linkNode {
font-size: 13px;
padding: 3px 20px;

}

.card {
box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);
background-color: #fafffa;
}
.ms-wikicontent.ms-rtestate-field {
    padding-right: 0px;
}






/* The Modal (background) */

.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
  
}


/* Modal Content/Box */

.modal-content {
  color: #414242;
  margin: 15% auto;
  /* 15% from the top and centered */
  padding: 30px 60px;
  width: 500px;
  /* Could be more or less, depending on screen size */
  font-family: Lato;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.5px;
  -webkit-font-smoothing: antialiased;
  /* Rectangle 2 Copy 3: */
  background: #FFFFFF;
  border: 1px solid #9B9C9D;
  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.20);
  border-radius: 6px;
}

.modal-content a {
  color: #636464;
}

.modal-content > h1 {
  display: block;
  width: 100%;
  text-align: center;
}

button#accept {
  margin: 30px auto;
  display: block;
  border: 1px solid #fc4c02;
  border-radius: 3px;
  background: #fff;
  color: #fc4c02;
  font-size: 16px;
  height: 48px;
  padding: 0 20px;
  cursor: pointer;
}




</style>

</head>







<body>


<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <h1>
    Bonjour!
    </h1>
    <h3>Merci de vérifier l'intervalle du temps !</h3>
    <p>La date début doit étre inférieur à la date fin !
      </p>
    <button type="button" id="accept" class="btn btn-default" data-dismiss="modal">  
        Je comprends et je suis d'accord
    </button>
  </div>


</div>






<div id="headercolor">
    <div>
        <small class="smallRisks">
            <b id="titreProjets">Direction générale (En cours de traitement)</b>
        </small>
    </div>
    <div id="nomprojet" style="display:none;">Project Name</div>
    <div>
        <select class="form-item__element form-item__element--select" style="color:black; font-weight:bold;"
            id="exerciceDates" onchange="filtrerTableauSous_Periode();">
            <option value="">Exercice</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
        <select class="form-item__element form-item__element--select" style="color:black; font-weight:bold;"
            id="filtreDirection"
            onchange="Remove_optionsForSelectSousDirection();MainFilterSousDirection(); ">
            <option value="">Les directions</option>
            <option value="Direction Générale">Direction Générale</option>
            <option value="Direction des projets">Direction des projets</option>
            <option value="ServiceConvergent">Direction service convergent</option>
            <option value="ServiceInfrastructure">Direction service infrastructure</option>
        </select>
        <select class="form-item__element form-item__element--select" style="color:black; font-weight:bold;"
            id="filtreSousDirection" onchange="MainFilterDirectionProject(); Remove_optionsForSelect();">
            <option value="">Les sous-directions</option>
        </select>
        <select class="form-item__element form-item__element--select" style="color:black; font-weight:bold;"
            id="filtreDirectionprojet" onchange="MainFilterProjectCentre();filtrerTableau();">
            <option value="" selected disabled>Les projets</option>
        </select>

        </br></br>
            <label id="NomItervalle" for="start" style="font-weight:bold; color: white; font-size:13px;">Filtrage par intervale du temps:</label>
            <input type="date" id="start" name="trip-start">
                                              <input type="date" id="finish" name="trip-start">
                                                                        <input type="submit" onclick="FiltreDate(); return false;" id="valideDate" value="Valider"/>
                                                                      <input type="submit"  id="AnnuleDate" value="Annuler"/>
    </div>
</div>












<div class="row" style="margin:auto; width:100%;">
    <div class="col-6" style="flex:16.66%; padding-left: 0px; padding-right: 7px">
        <div class="panel" style="background-color: #f09609; color: white">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-2" id="fa1">
                        <i class="fa fa-tasks fa-4x"></i>
                    </div>
                    <div class="col-xs-10 text-right">
                        <div class="huge" id="NombreProjet" style="font-size: large;"></div>
                        <div id="projetsKPI" style="font-size: large;">&sum; total des projets dans EPPM</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-6" style="padding-left: 7px; padding-right: 7px;flex:16.66%; display:none;" id="lastdateupdate">
        <div class="panel" style="background-color: #f09609; color: white">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-2" id="fa1">
                        <i class="fa fa-tasks fa-4x"></i>
                    </div>
                    <div class="col-xs-10 text-right">
                        <div class="huge" id="lastUpdate" style="font-size: large;"></div>
                        <div id="projetsKPI" style="font-size: large;">Derniére modification de projet</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-6" style="padding-left: 7px; padding-right: 7px;flex:16.66%;">
        <div class="panel" style="background-color: #f09609; color: white">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-2" id="fa1">
                        <i class="fa fa-tasks fa-4x"></i>
                    </div>
                    <div class="col-xs-10 text-right">
                        <div class="huge" id="MontantProjets" style="font-size: large;"></div>
                        <div id="projetsKPI" style="font-size: large;">&sum; montant de tous les projets</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-6" style="flex:16.66%; padding-right: 0px;padding-left: 7px">
        <div class="panel" style="background-color: #f09609; color: white">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-2" id="fa1">
                        <i class="fa fa-tasks fa-4x"></i>
                    </div>
                    <div class="col-xs-10 text-right">
                        <div class="huge" id="TauxAvancement" style="font-size: large;"></div>
                        <div id="projetsKPI" style="font-size: large;">Taux d'avancement des projets</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
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
                                <span>Terminé</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style="margin-bottom: 1rem;margin-top: 10px;height: 80px;margin-left: 10px;">
            <div class="row justify-content-between">
                <div class="col-3" style="padding-right: 0px;">
                    <i class="glissicon text-success border-success"></i>
                </div>
                <div class="col-9" style="padding-left: 0px;">
                    <div class="card-body" style="padding: 1em 0em">
                        <h5 class="card-title" style="font-weight: bold;">Nombre de projet</h5>
                        <h3 class="card-text" id="prcount" style="height: auto;font-weight: bold; font-size: large;"></h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style="margin-bottom: 1rem;margin-top: 10px;height: 80px;margin-left: 10px;">
            <div class="row justify-content-between">
                <div class="col-3" style="padding-right: 0px;">
                    <i class="iconmoney1 text-success border-success"></i>
                </div>
                <div class="col-9" style="padding-left: 0px;">
                    <div class="card-body" style="padding: 1em 0em">
                        <h5 class="card-title" style="font-weight: bold;">Côut des projets</h5>
                        <h3 class="card-text" id="prcost" style="height: auto;font-weight: bold; font-size: large;"></h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style="margin-bottom: 1rem;margin-top: 10px;height: 80px;margin-left: 10px;">
            <div class="row justify-content-between">
                <div class="col-3" style="padding-right: 0px;">
                    <i class="iconmoney2 text-secondary border-secondary"></i>
                </div>
                <div class="col-9" style="padding-left: 0px;">
                    <div class="card-body" style="padding: 1em 0em">
                        <h5 class="card-title" style="font-weight: bold;">Écart de coût</h5>
                        <h3 class="card-text" id="cvariance" style="height: auto;font-weight: bold; font-size: large;"></h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style="margin-bottom: 1rem;margin-top: 10px;height: 80px;margin-left: 10px;">
            <div class="row justify-content-between">
                <div class="col-3" style="padding-right: 0px;">
                    <i class="iconmoney3 text-secondary border-secondary"></i>
                </div>
                <div class="col-9" style="padding-left: 0px;">
                    <div class="card-body" style="padding: 1em 0em">
                        <h5 class="card-title" style="font-weight: bold;">Travail de projet</h5>
                        <h3 class="card-text" id="prwork" style="height: auto;font-weight: bold; font-size: large;"></h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style="margin-bottom: 1rem;margin-top: 10px;height: 80px;margin-left: 10px;">
            <div class="row justify-content-between">
                <div class="col-3" style="padding-right: 0px;">
                    <i class="iconmoney4 text-secondary border-secondary"></i>
                </div>
                <div class="col-9" style="padding-left: 0px;">
                    <div class="card-body" style="padding: 1em 0em">
                        <h5 class="card-title" style="font-weight: bold;">Écart de travail</h5>
                        <h3 class="card-text" id="wrvariance" style="height: auto;font-weight: bold; font-size: large;"></h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style="margin-bottom: 1rem;margin-top: 10px;height: 80px;margin-left: 10px;">
            <div class="row justify-content-between">
                <div class="col-3" style="padding-right: 0px;">
                    <i class="bellsign text-secondary border-secondary"></i>
                </div>
                <div class="col-9" style="padding-left: 0px;">
                    <div class="card-body" style="padding: 1em 0em">
                        <h5 class="card-title" style="font-weight: bold;">Nombre de Risque</h5>
                        <h3 class="card-text" id="actRisk" style="height: auto;font-weight: bold; font-size: large;"></h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style="margin-bottom: 1rem;margin-top: 10px;height: 80px;margin-left: 10px;">
            <div class="row justify-content-between">
                <div class="col-3" style="padding-right: 0px;">
                    <i class="warning text-secondary border-secondary"></i>
                </div>
                <div class="col-9" style="padding-left: 0px;">
                    <div class="card-body" style="padding: 1em 0em">
                        <h5 class="card-title" style="font-weight: bold;">Nombre de problème</h5>
                        <h3 class="card-text" id="actIssue" style="height: auto;font-weight: bold; font-size: large;"></h3>
                    </div>
                </div>
            </div>
        </div>
    </ul>
</div>
<div id="descrtab" style="display:none;">
    <div id="titdiv">
        <div id="descrtext">Project description</div>
    </div>
    <div id="descrdiv">
        <div id="textdescr"></div>
    </div>
</div>
<div class="col-sm-10" style="max-width: 80%;">
    <div class="col-md-12  col-md-6" style="margin: auto;padding-right: 0px;padding-left: 0px;">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title" id="sous_direct1" style="color:black; font-family: system-ui;"> Pourcentage d'achévement pour chaque direction </h4>
                <h4 class="card-title" id="sous_direct2" style="color:black; font-family: system-ui;"> Pourcentage d'achévement pour chaque projet de sous-direction </h4>
                <h4 class="card-title" id="sous_direct3" style="color:black; font-family: system-ui;"> Pourcentage d'achévement pour chaque projet </h4>
                <div id="chartCartBody"><canvas id="projchart" style="margin-top: 40px; " height ="230px"></canvas></div>
            </div>
        </div>
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
            <div class="x_content">
                <div class="row">
                    <div class="col-sm-12" style="padding-right: 0px; padding-left: 0px;">
                        <div class="card-box">
                            <h4 class="card-title" id="tittreTab1" style="color:black; font-family: system-ui;">
                                Clients de tout les directions
                            </h4>
                            <h4 class="card-title" id="tittreTab2" style="color:black; font-family: system-ui;">
                                Clients de tout les projets de sous-direction</h4>
                            <h4 class="card-title" id="tittreTab3" style="color:black; font-family: system-ui;">
                                Clients du projet</h4>
                            
                            <table class="table" style="border-radius:15px 15px 0px 0px;margin-bottom: 0px;" id="myTable1">
                                    <thead>
                                        <tr>
                                            <th style="width: 13%; text-align: left;">Client</th>
                                            <th style="width: 19%; text-align: left;">Projet</th>
                                            <th style="width: 5%; text-align: left;"></th>
                                            <th style="width: 12%">Chef de projet</th>
                                            <th style="width: 11%; padding-left: 0px;">Montant globale</th>
                                            <th style="width: 9%; padding-left: 0px;">Date début</th>
                                            <th style="width: 10%; padding-left: 0px;">Date fin</th>
                                            <th style="width: 16%">% Achévement</th>
                                            <th style="display:none;">Direction</th>
                                        </tr>
                                    </thead>
                                </table>
                                <div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;">
                                <table class="table table-bordered table-hover table-striped" id="myTable">
                                    <tbody>
                                    </tbody>
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
</body>
 <script src="/PWA/_catalogs/masterpage/Suivi_projet/javascript/jquery-3.5.1.js"></script>
 <script src="/PWA/_catalogs/masterpage/Suivi_projet/javascript/chart.js@2.8.0.js"></script>
 <script src="/PWA/_catalogs/masterpage/Suivi_projet/javascript/FiltreParDate.js"></script>
 <script src="/PWA/_catalogs/masterpage/Suivi_projet/javascript/FiltrePeriode.js"></script>
 <script src="/PWA/_catalogs/masterpage/Suivi_projet/javascript/MainFunctionJS.js"></script>
 <script src="/PWA/_catalogs/masterpage/Suivi_projet/javascript/FiltreMainProjectAndDirection.js"></script>
 <script src="/PWA/_catalogs/masterpage/Suivi_projet/javascript/FiltreMainSous-Direction.js"></script>
 <script src="/PWA/_catalogs/masterpage/Suivi_projet/javascript/FiltreMainForProject.js"></script>
 <script src="/PWA/_catalogs/masterpage/Suivi_projet/javascript/moment-with-locales.min.js"></script>
 <script src="/PWA/_catalogs/masterpage/Suivi_projet/javascript/nprogress.js"></script>
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
 <script type="text/javascript">

   $('#tittreTab2').hide();
   $('#tittreTab3').hide();
   $("#sous_direct2").hide(); 
   $("#sous_direct3").hide();
   


//document.oncontextmenu = new Function("return false");
/*
var responseDirectionProjects = responseDirectionProjects || []; 


function LoadProjectsForSelect() {
var urlDirectionProjects = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName&$filter=startswith(Direction, 'ServiceConvergent') eq true or startswith(Direction, 'Direction des Projets') eq true or startswith(Direction, 'ServiceInfrastructure') eq true or startswith(Direction, 'Direction Générale') eq true";
//Remove_options();
        $.ajax({url:  urlDirectionProjects, 
                    
                                method: "GET",
                                dataType: "json",
                                headers: {Accept: "application/json;odata=verbose"},       
                                success: function(data) {   
                                responseDirectionProjects = responseDirectionProjects.concat(data.d.results);
                                    if (data.d.__next) {
                                        urlDirectionProjects = data.d.__next;
                                        LoadProjectsForSelect();
                                    }
                      var listItemInfo2 = "";            
        $.each(responseDirectionProjects, function(key, value) 
        {           
              
            var nomDesProjets = value.ProjectName;
            var ProjectId = value.ProjectId;  
            
              
            
                   $('#filtreDirectionprojet').append($('<option>',
                       {
                          text : nomDesProjets,
                          
                        })); 

                        var opt = {};
                          $("#filtreDirectionprojet > option").each(function () {
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
_spBodyOnLoadFunctionNames.push("LoadProjectsForSelect");*/

</script>