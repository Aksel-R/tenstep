<head>
    <meta charset="utf-8"></meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
    <title>Sufee Admin - HTML5 Admin Template</title>
    <meta name="description" content="Sufee Admin - HTML5 Admin Template"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

    <link rel="apple-touch-icon" href="apple-icon.png"></link>
    <link rel="shortcut icon" href="favicon.ico"></link>



    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/css/normalize.css"></link>
    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/css/bootstrap.css"></link>
    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/css/bootstrap.min.css"></link>
    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/css/bootstrap.min.css.map"></link>
    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/css/bootstrap.css.map"></link>
    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/css/font-awesome.min.css"></link>
    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/css/flag-icon.min.css"></link>
    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/css/cs-skin-elastic.css"></link>
    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/css/style.css"></link>
    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/css/achevement.css"></link>
    <link rel="stylesheet" href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/css/styleFrontEnd.css">

    <style>

    </style>

</head>

<body>
    <div id="headercolor">
        <span><b id="titreProjet">Ressources par projet</b></span>

        <span id="nomprojet">Nom de projet</span>
        <select style="color:black; font-weight:bold; border-radius: 1rem;" id="mylist" onchange="mainfilter();">
            <option value="" disabled selected hidden>Choose a project</option>

        </select>
    </div>
   
        <div class="col-sm-2">


<div class="card" style="width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); height:auto; background-color: #fafffa;">
    <div class="card-header">
        <div class="row justify-content-md-between">
            <img src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/img/yesterday.png" class="img-rounded" alt="Cinque Terre" width="50px" height="50px">
                        <p class="card-title">Glissement projet</p>
        </div>
        <p class="card-text" id="GlissementProjet" style="font-size: x-large; text-align: center;"></p>
    </div>
</div>





   <div class="card" style="width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); height:auto; background-color: #fafffa;">
    <div class="card-header">
        <div class="row justify-content-md-between">
            <img src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Status_Projet/img/budget.png" class="img-rounded" alt="Cinque Terre" width="50px" height="50px">
            <p class="card-title">Coût projet</p>
        </div>
        <p class="card-text" id="CostProject" style="font-size: x-large; text-align: center;"></p>
    </div>
</div>


<div class="card"
    style="width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); height:auto; background-color: #fafffa;">
    <div class="card-header">
        <div class="row justify-content-md-between">
            <img src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Status_Projet/img/analytics2.png" class="img-rounded" alt="Cinque Terre" width="50px" height="50px" >
            <p class="card-title">Coût variance</p>
            <br>
        </div>
        <p class="card-text" id="CostVariance" style="font-size: x-large; text-align: center;"></p>
    </div>
</div>


  <div class="card" style="width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); height:auto; background-color: #fafffa;">
    <div class="card-header">
        <div class="row justify-content-md-between">
            <img
                src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/Status_Projet/img/analytics.png'
                class='img-rounded' alt='Cinque Terre' width='50px' height='50px'>
                <p class="card-title">Travail projet</p>
        </div>
        <p class="card-text" id="WorkProj" style="font-size: x-large; text-align: center;"></p>
    </div>
</div>


    <div class="card" style="width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); height:auto; background-color: #fafffa;">
    <div class="card-header">
        <div class="row justify-content-md-between">
            <img src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/Status_Projet/img/analytics.png' class='img-rounded' alt='Cinque Terre' width='50px' height='50px'>
            <p class="card-title">Travail variance</p>
        </div>
        <p class="card-text" id="WorkVariance" style="font-size: x-large; text-align: center;"></p>
    </div>
</div>

    <div class="card" style="width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); height:auto; background-color: #fafffa;">
    <div class="card-header">
        <div class="row justify-content-md-between">
            <img
                        src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/Status_Projet/img/risk.png'
                        class='img-rounded' alt='Cinque Terre' width='50px' height='50px'>
                        <p class="card-title">Nombre risque</p>
        </div>
        <p class="card-text" id="RiskNumber" style="font-size: x-large; text-align: center;"></p>
    </div>
</div>



    <div class="card" style="width: 100%; box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5); height:auto; background-color: #fafffa;">
    <div class="card-header">
        <div class="row justify-content-md-between">
            <img
            src='/sites/PWAdemo/_catalogs/masterpage/Dashboard/Status_Projet/img/caution.png'
            class='img-rounded' alt='Cinque Terre' width='50px' height='50px'>
            <p class="card-title">Nombre problème</p>
        </div>
        <p class="card-text" id="ProblemNumber" style="font-size: x-large; text-align: center;"></p>
    </div>
</div>

</div>
        <div class="col-sm-10">

                    <table id="myTable" >
                        <thead>
                            <tr>
                                <th style="width: 20%">Nom ressource</th>
                                <th style="width: 20%">Type ressource</th>
                                <th style="width: 20%">Statut</th>
                                <th style="width: 15%">Calandrier</th>
                                <th style="width: 25%">Description</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
            </div>



            <script
                src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/javascript/jquery-2.1.1.min.js"></script>
            <script
                src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/javascript/jquery-3.1.1.min.js"></script>
            <script
                src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/javascript/chart.js@2.8.0.js"></script>
            <script
                src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/javascript/MainFunctionJS.js"></script>
            <script
                src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/javascript/moment-with-locales.min.js"></script>


            <script type="text/javascript">
                //document.oncontextmenu = new Function("return false");
                $("#myTable").css("display", "none");

                var responseProjectName = responseProjectName || [];
                var lesProjets = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId";

                function LoadAllProjects() {

                    $.ajax({
                        url: lesProjets,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseProjectName = responseProjectName.concat(data.d.results);
                            if (data.d.__next) {
                                lesProjets = data.d.__next;
                                LoadAllProjects();
                            }

                            $.each(responseProjectName, function (key, value) {

                                var region = value.ProjectName;
                                var prId = value.ProjectId;


                                $('#mylist').append($('<option>',
                                    {
                                        text: region,
                                        value: prId
                                    }));

                                var opt = {};
                                $("#mylist > option").each(function () {
                                    if (opt[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt[$(this).text()] = $(this).val();
                                    }
                                });


                            });
                        }
                    });
                }
                LoadAllProjects();
            </script>