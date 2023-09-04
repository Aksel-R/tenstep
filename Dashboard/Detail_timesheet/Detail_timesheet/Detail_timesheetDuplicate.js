<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
     <link href="/DCSIPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/css/select2-bootstrap.min.css" rel="stylesheet">
    <link href="/DCSIPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/css/select2.min.css" rel="stylesheet">
    <link href="/DCSIPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/css/bootstrap.min.css" rel="stylesheet">
    <link href="/DCSIPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/css/bootstrap.css" rel="stylesheet">
    <link href="/DCSIPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/css/style.css" rel="stylesheet">
    <link href="/DCSIPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/css/font-awesome.css" rel="stylesheet">
    <link href="/DCSIPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/css/styleFormFrontEnd.css"rel="stylesheet">
    <link href="/DCSIPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/css/w3.css" rel="stylesheet">
    <style>
        body {
            margin: 0;
            font-family: Arial
        }

        .form-item__element option {
            color: #444;
            font-size: 14pt;
        }

        /* Header CSS*/

        #headercolor {
            background-image: linear-gradient(225deg,#dce9f4 20%, #8eb8d9 80%);

            padding: 10px;
            margin: 0 0 10px 0;
            text-align: right;
            border-radius: 5px;
        }

        #headercolor span {
            float: left;
            padding-top: 10px;
        }

        .labeltimesheet {
            font-size: 170%;
            float: left;
            font-weight: bold;
            color: white;
            padding: 0.5%;
        }

        /*tableau CSS*/

        #tableaux {

            /*table-layout: fixed;*/
            border-collapse: collapse;
            border-radius: 15px;
            overflow: hidden;
            width: 100%;

        }

        #tableaux th {

            width: auto;
            padding: 5px;
        }

        #tableaux thead {
            font-size: 14px;
            color: black;
            font-family: ui-monospace;
        }



        /*dropdown css*/

        #debPeriode {
            background-color: white;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 13px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        #typeOp {
            background-color: white;
            background-repeat: no-repeat;
            width: 13%;
            font-size: 13px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        #responsable {
            background-color: white;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 13px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        #ressourceParticipants {
            background-color: white;
            background-repeat: no-repeat;
            width: 15%;
            font-size: 13px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        #resourcePart {
            background-color: white;
            background-repeat: no-repeat;
            width: 100%;
            font-size: 13px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        #categorie {
            background-color: white;
            background-repeat: no-repeat;
            width: 12%;
            font-size: 13px;
            padding: 10px 5px 10px 5px;
            border-radius: 5px;
        }

        .ms-core-overlay {
            background-color: white !important
        }

        span#DeltaPlaceHolderPageTitleInTitleArea {
            display: none;
        }

        .stat-digit {
            font-size: 25px;
            font-family: cursive;
        }

        .ms-rtestate-field h4,
        h4.ms-rteElement-H4 {
            line-height: 1.6;
            color: black;
        }

       #tableaux td{

            text-align: center;
             font-family: serif;
             font-size: 13px;
             font-weight: bold;
        }
        span.select2-search.select2-search--inline {
    display: none;
    color: black;
}
button.select2-selection__choice__remove {
    display: none;
    background-color: #e4e4e4;
    padding: 2%;
    margin: 0%;
    border: 0px;
    color: #999;
}
    </style>
</head>

<body>

    <div id="headercolor" style="margin: 0px -15px 10px -15px">
        <div>
            <label class="labeltimesheet">
                Détail Timesheet
            </label>
        </div>
<div>
            <select class="select-tags" style="color:black; font-weight:bold;" id="responsable" onchange="mainFilter1();">
                <option selected="" value="">Responsables</option>
            </select>

            <select class="select-tags" style="color:black; font-weight:bold;" disabled id="ressourceParticipants" onchange="MainFilterResourceParticip();">
                <option selected="" value="">Ressources Participants</option>
            </select>

            <select class="select-tags" style="color:black; font-weight:bold;" disabled id="debPeriode" onchange="mainFilter();">
                <option selected="" value="">Début de la période</option>
            </select>

            <select class="select-tags" style="color:black; font-weight:bold;" disabled id="typeOp" onchange="mainFilter();">
                <option selected="" value="">Type opération</option>
            </select>

            <select class="select-tags" style="color:black; font-weight:bold;" disabled id="categorie" onchange="mainFilter();">
                <option selected="" value="">Catégories</option>
            </select>

        </div>
    </div>



    <div class="row">
        <div class="col-12" style="padding: 0px">
            <div class="x_content table-responsive">
                <table id="tableaux" class="table table-striped table-bordered">
                    <thead style="background-image: linear-gradient(225deg,#dce9f4 20%, #8eb8d9 80%);">
                        <tr>
                            <th style="text-align:center" colspan="6">Detail timesheet</th>
                            <th style="text-align:center">Jour</th>
                            
                            <th style="text-align:center" colspan="9"></th>
                            
                            
                        </tr>
                        <tr>
                            <th style="text-align:center; width: 7%;">collaborateur</th>
                            <th style="text-align:center; width: 7%;">Responsable</th>
                            <th style="text-align:center; width: 7%;">Date Début</th>
                            <th style="text-align:center; width: 8%;">Tache</th>
                            <th style="text-align:center; width: 8%;">Catégorie</th>
                            <th style="text-align:center; width: 6%;">Statut</th>
                            <th style="text-align:center; width: 3%;">Total</th>
                            <th style="width: 2%;"></th>
                            <th  style="text-align:center">Total</th>
                            
                            <th id="date1" style="text-align:center">lundi</th>
                            <th id="date2" style="text-align:center">mardi</th>
                            <th id="date3" style="text-align:center">mercredi</th>
                            <th id="date4" style="text-align:center">jeudi</th>
                            <th id="date5" style="text-align:center">vendredi</th>
                            <th id="date6" style="text-align:center">samedi</th>
                            <th id="date7" style="text-align:center">dimanche</th>

                        </tr>

                    </thead>
                    <tbody ></tbody>
                </table>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>

    <script src="/DCSIPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/javascript/MainFunctionDuplicate.js"></script>
    <script src="/DCSIPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/javascript/MainFunctionResponsable.js"></script>
    <script src="/DCSIPWA/_catalogs/masterpage/Dashboard/Detail_timesheet/javascript/MainFunctionRessource.js"></script>

    <script type="text/javascript">
  







// Load RessourceParticipants

var LoadRessourceParticipants = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?$select=ResourceId,ResourceName,ResourceTimesheetManageId";
var responseResourceParitipants = responseResourceParitipants ||[]; 

function RessourceParticipants()
{

        
            $.ajax({
                url: LoadRessourceParticipants,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    
        responseResourceParitipants = responseResourceParitipants.concat(data.d.results);
           if (data.d.__next) {
             LoadRessourceParticipants = data.d.__next;
             RessourceParticipants();
          }

                    var arrResTsManageId = [];
                    $.each(responseResourceParitipants, function (key, value) {
               

                         var aprouverName = value.ResourceName;
            var aprouverId = value.ResourceTimesheetManageId;
            var idres = value.ResourceId;
            if (arrResTsManageId.indexOf(aprouverId) == -1) {
              arrResTsManageId.push(aprouverId);
            }

            if ((arrResTsManageId.indexOf(idres) != -1)) {
              //console.log("aprouverId= "+aprouverId);
              $('#responsable').append($('<option>',
                {
                  text: aprouverName,
                  value: idres
                }));

              var opt = {};
              $("#responsable > option").each(function () {
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

RessourceParticipants();

  
    </script>

</body>

</html>