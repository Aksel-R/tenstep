function filtreProgramme(){

var SousProtSelctedName=document.getElementById("mylist2").value;
var progSelctedName1=document.getElementById("mylist1").value;
var progSelctedName=progSelctedName1.replace("'", "''");
var list02 = document.getElementById("mylist0").value;
        var startOfYear1= moment(list02).format('YYYY-MM-DD');
        var endOfYear1 = moment(startOfYear1).add(1, 'years').format('YYYY-MM-DD');
        var urlDateDebut1=startOfYear1+'T00:00:00.000';
        var urlDateFin1=endOfYear1+'T00:00:00.000'; 

document.getElementById("projchartDiv").innerHTML = '<canvas id="projchart" style="max-height: 550px;display: block;width: 1379px;"></canvas>';
document.getElementById("barslineDiv").innerHTML = '<canvas id="barsline"></canvas>';
document.getElementById("sous_portefeuilleDiv").innerHTML = '<canvas id="sous_portefeuille"></canvas>';
tableaux = document.getElementById("tableaux");
tr11 = tableaux.getElementsByTagName("tr");
if(tr11.length>0){
$('#tableaux tbody').empty();
}
if (progSelctedName!="") {

$('#ProgrammeAff').hide();
$('#StatutAff').show();
$('#PortefeuilleAff').hide();

    var responseNumberOfProjectsFiltre2 = responseNumberOfProjectsFiltre2 || [];
        var urlNumberOfProjectsFiltre2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Types_de_Projet,ProjectName&$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27%20and%20Programme%20eq%27"+progSelctedName+"%27 and ProjectStartDate%20ge%20datetime%27"+urlDateDebut1+"%27%20and%20ProjectStartDate%20lt%20datetime%27"+urlDateFin1+"%27";
        //console.log(urlNumberOfProjectsFiltre2);
        function LoadAllNumberProjectFiltre2() {
            var nbre = 0;
            var nbrePG = 0;
            var nbrePR = 0;

            $.ajax({
                url: urlNumberOfProjectsFiltre2,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseNumberOfProjectsFiltre2 = responseNumberOfProjectsFiltre2.concat(data.d.results);
                    if (data.d.__next) {
                        urlNumberOfProjectsFiltre2 = data.d.__next;
                        LoadAllNumberProjectFiltre2();
                    }

                    $.each(responseNumberOfProjectsFiltre2, function (key, value) {
                        var nomProjet = value.ProjectName;
                        var projectType = value.Types_de_Projet;

                        if(projectType =='Page_Maitre'){
                        if (nomProjet != null) {
                            nbre++;
                            }
                        }

                        

                        

                    });

                    document.getElementById("prcount").innerHTML = nbre;

                }
            });
        }
        LoadAllNumberProjectFiltre2();
        var responseDataSumFiltre2 = responseDataSumFiltre2 || [];
        var urlDataSumFiltre2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectActualCost,ProjectCostVariance,ProjectWork,ProjectWorkVariance&$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27%20and%20Programme%20eq%27"+progSelctedName+"%27 and Types_de_Projet eq 'Programme' and ProjectStartDate%20ge%20datetime%27"+urlDateDebut1+"%27%20and%20ProjectStartDate%20lt%20datetime%27"+urlDateFin1+"%27";

        function loadDataSumFiltre2() {
            var projCost = 0;
            var projcostvariance = 0;
            var projWork = 0;
            var pworkvariance = 0;
            var sommeCoutReel = 0;
            var sommeCoutRestant = 0;

            $.ajax({
                url: urlDataSumFiltre2,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseDataSumFiltre2 = responseDataSumFiltre2.concat(data.d.results);
                    if (data.d.__next) {
                        urlDataSumFiltre2 = data.d.__next;
                        loadDataSumFiltre2();
                    }

                    $.each(responseDataSumFiltre2, function (key, value) {
                        var pCost = parseInt(value.ProjectCost);
                        var pcostVar = parseInt(value.ProjectCostVariance);
                        var pwork = parseInt(value.ProjectWork);
                        var pwvariance = parseInt(value.ProjectWorkVariance);
                       
                        projCost =  projCost + pCost;
                        projcostvariance = projcostvariance + pcostVar;
                        projWork = projWork + pwork;
                        pworkvariance = pworkvariance + pwvariance;

                        var coutReel=parseFloat(value.ProjectActualCost).toFixed(0);
                        //sommeCoutPlan=parseFloat(parseFloat(sommeCoutPlan)+parseFloat(coutPlan)).toFixed(0);
                        sommeCoutReel=parseFloat(parseFloat(sommeCoutReel)+parseFloat(coutReel)).toFixed(0);

                        sommeCoutRestant = parseFloat(projCost).toFixed(0) - parseFloat(sommeCoutReel).toFixed(0);


                    });


                    document.getElementById("prcost").innerHTML = conToMill(projCost);
                    document.getElementById("sommeCoutReel").innerHTML = conToMill(sommeCoutReel);
                    document.getElementById("couRestantPortefeuilleProProj").innerHTML = conToMill(sommeCoutRestant);

                    document.getElementById("cvariance").innerHTML = conToMill(projcostvariance);
                    document.getElementById("prwork").innerHTML = conToMill(projWork);
                    document.getElementById("wrvariance").innerHTML = conToMill(pworkvariance);
                }
            });
        }
        loadDataSumFiltre2();

        //Load BarChart for GOVERNANCE
        var responseGovernancePhaseFiltre2 = responseGovernancePhaseFiltre2 || [];
        var urlGovernancePhaseFiltre2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectPercentCompleted,ProjectName&$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27%20and%20Programme%20eq%27"+progSelctedName+"%27 and%20Types_de_Projet%20eq%20%27Page_Maitre%27 and ProjectStartDate%20ge%20datetime%27"+urlDateDebut1+"%27%20and%20ProjectStartDate%20lt%20datetime%27"+urlDateFin1+"%27";
        function LoadBarGovernancePhaseFiltre2() {
            $.ajax({
                url: urlGovernancePhaseFiltre2,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseGovernancePhaseFiltre2 = responseGovernancePhaseFiltre2.concat(data.d.results);
                    if (data.d.__next) {
                        urlGovernancePhaseFiltre2 = data.d.__next;
                        LoadBarGovernancePhaseFiltre2();
                    }
                    var itermeidiaryObject = {};
                    var labels=[];
                    var pievalues=[];

                    $.each(responseGovernancePhaseFiltre2, function (key, value) {

                         var epn = value.ProjectName;
                        var ach = value.ProjectPercentCompleted;
             
                        labels.push(epn);
                        pievalues.push(ach);
                       
                    });

                   

                    

                    var ctx1Filtre2 = document.getElementById("projchart").getContext('2d');

                    if (window.mychartBarFiltre2 != undefined) {
                        window.mychartBarFiltre2.destroy();
                    }

                    window.mychartBarFiltre2 = new Chart(ctx1Filtre2, {
                        type: 'horizontalBar',
                        data: {
                            labels: labels,
                            datasets: [{
                                data: pievalues,
                                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                    "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                    "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                    "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                    "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                    "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"]
                            }]
                        },
                         options: {

                            scales: {

                                xAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                        min: 0,
                                        max: 100,
                                        callback: function (value) { return value + "%" }
                                    },
                                    scaleLabel: {
                                      display: true,
                                      fontSize: 15,
                                      labelString: "Pourcentage achevé"
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                      beginAtZero: true
                                    },
                                    scaleLabel: {
                                          display: true,
                                          fontSize: 15,
                                          labelString: "Nom des projets"
                                        }
                                  }]
                            },
                            responsive: true,


                            legend: { display: false },
                            plugins: {
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
        LoadBarGovernancePhaseFiltre2();

        var colors = ["#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];


        //Load Graph For ProjectPortfolio
        var responsePhaseChartFiltre2 = responsePhaseChartFiltre2 || [];
        var urlPhaseChartFiltre2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Statutduprojet&$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27%20and%20Programme%20eq%27"+progSelctedName+"%27 and Types_de_Projet eq 'Page_Maitre' and ProjectStartDate%20ge%20datetime%27"+urlDateDebut1+"%27%20and%20ProjectStartDate%20lt%20datetime%27"+urlDateFin1+"%27";
        function LoadProjectTypeFiltre2() {
            $.ajax({
                url: urlPhaseChartFiltre2,


                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responsePhaseChartFiltre2 = responsePhaseChartFiltre2.concat(data.d.results);
                    if (data.d.__next) {
                        urlPhaseChartFiltre2 = data.d.__next;
                        LoadProjectTypeFiltre2();
                    }
                    var itermeidiaryObject = {};
                    $.each(responsePhaseChartFiltre2, function (key, value) {

                        var epn1Filtre2 = value.Statutduprojet;
                        var som1Filtre2 = 0;
                        if (epn1Filtre2 != null) {
                            itermeidiaryObject[epn1Filtre2] = ++itermeidiaryObject[epn1Filtre2] || 1;
                        }
                        var somme1Filtre2 = som1Filtre2;
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


                    var ctx2Filtre2 = document.getElementById("barsline").getContext('2d');
                    if (window.echartdonut != undefined) {
                        window.echartdonut.destroy();
                    }

                    window.echartdonut = new Chart(ctx2Filtre2, {
                        type: 'doughnut',
                        data: {
                            labels: labels,
                            datasets: [{
                                data: pievalues,
                                backgroundColor: colorscheme
                            }]
                        },
                        options: {
                            legend: { display: false },
                            responsive: true,
                            plugins: {
                                labels: [
                                    {
                                        render: 'label',
                                        fontColor: '#000',
                                        position: 'outside',
                                        fontSize: 11
                                    },
                                    {
                                        fontColor: '#fff',
                                        render: 'value',
                                        fontSize: 12
                                    }
                                ]
                            }
                        }
                    });


                }
            });
        }
        LoadProjectTypeFiltre2();

                 var colors = ["#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];

         var response_SousPortefeuilleFiltre2 = response_SousPortefeuilleFiltre2 || [];
        var urlSous_PortefeuilleFiltre2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Types_des_projets&$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27%20and%20Programme%20eq%27"+progSelctedName+"%27 and ProjectStartDate%20ge%20datetime%27"+urlDateDebut1+"%27%20and%20ProjectStartDate%20lt%20datetime%27"+urlDateFin1+"%27";
        function LoadSous_PortefeuilleFiltre2() {
            $.ajax({
                url: urlSous_PortefeuilleFiltre2,


                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    response_SousPortefeuilleFiltre2 = response_SousPortefeuilleFiltre2.concat(data.d.results);
                    if (data.d.__next) {
                        urlSous_PortefeuilleFiltre2 = data.d.__next;
                        LoadSous_PortefeuilleFiltre2();
                    }
                    var itermeidiaryObject1Filtre2 = {};
                    $.each(response_SousPortefeuilleFiltre2, function (key, value) {

                        var epn2Filtre2 = value.Types_des_projets;
                        var som2Filtre2 = 0;
                        if (epn2Filtre2 != null) {
                            itermeidiaryObject1Filtre2[epn2Filtre2] = ++itermeidiaryObject1Filtre2[epn2Filtre2] || 1;
                        }
                        var somme2Filtre2 = som2Filtre2;
                    });

                    var finalObject1 = Object.keys(itermeidiaryObject1Filtre2).map(function (key) {
                        return {
                            label: key,
                            y: itermeidiaryObject1Filtre2[key]
                        }
                    });

                    var pievalues = finalObject1.map(function (value, index) {
                        return value.y;
                    });

                    var labels = finalObject1.map(function (value, index) {
                        return value.label;
                    });

                    var colorscheme1 = colors.slice(0, labels.length);


                    var ctx3Filtre2 = document.getElementById("sous_portefeuille").getContext('2d');
                    if (window.echartdonut1 != undefined) {
                        window.echartdonut1.destroy();
                    }

                    window.echartdonut1 = new Chart(ctx3Filtre2, {
                        type: 'doughnut',
                        data: {
                            labels: labels,
                            datasets: [{
                                data: pievalues,
                                backgroundColor: colorscheme1
                            }]
                        },
                        options: {
                            legend: { display: false },
                            responsive: true,
                            plugins: {
                                labels: [
                                    {
                                        render: 'label',
                                        fontColor: '#000',
                                        position: 'outside',
                                        fontSize: 11
                                    },
                                    {
                                        fontColor: '#fff',
                                        render: 'value',
                                        fontSize: 12
                                    }
                                ]
                            }
                        }
                    });


                }
            });
        }
        LoadSous_PortefeuilleFiltre2();

         var responseTabProjFiltre2 = responseTabProjFiltre2 || [];
        var urlTabProjFiltre2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27%20and%20Programme%20eq%27"+progSelctedName+"%27 and Types_de_Projet eq 'Page_Maitre' and ProjectStartDate%20ge%20datetime%27"+urlDateDebut1+"%27%20and%20ProjectStartDate%20lt%20datetime%27"+urlDateFin1+"%27";
        //console.log(urlTabProjFiltre2);
        function LoadTableProjectsFiltre2() {
var sommeCoutReels = 0;
            var sommecoutRestant =0;
            $.ajax({
                url: urlTabProjFiltre2,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseTabProjFiltre2 = responseTabProjFiltre2.concat(data.d.results);
                    if (data.d.__next) {
                        urlTabProjFiltre2 = data.d.__next;
                        LoadTableProjectsFiltre2();
                    }
                    tableaux = document.getElementById("tableaux");
                    tr1 = tableaux.getElementsByTagName("tr");
                    if(tr1.length>0){
                    $('#tableaux tbody').empty();
                    }
                    $.each(responseTabProjFiltre2, function (key, value) {

                        var projetId = value.ProjectId;
                        var Types_des_projets = value.Types_des_projets;

                        if(Types_des_projets == null)
                        {
                            Types_des_projets = "Pas de Type de projet"
                        }

                        var Prog = "";
                        var Sous_Prog = "";
                        if (value.Programme == null) {
                            Prog = "Pas de programme assigné";
                        }
                        else{
                            Prog = value.Programme;
                        }
                         if (value.Sous_Programme == null) {
                            Sous_Prog = "Pas de sous programme assigné";
                        }
                        else{
                            Sous_Prog = value.Sous_Programme;
                        }
                        
                        var nomProjet = value.ProjectName;
                        var pOwner = value.ProjectOwnerName;
                        var projStartDate = value.ProjectStartDate;
                        var projfinishdate = value.ProjectFinishDate;
                        var projCost = parseFloat(value.ProjectCost).toFixed(3);
                        var prPercentCpl = parseFloat(value.ProjectPercentCompleted).toFixed(0);
                        var linkProjectSite = value.ProjectWorkspaceInternalUrl;
                        moment.locale('fr');
                        if (projStartDate != null) {
                            var projStartDate = moment(projStartDate).format('L');
                        }

                        if (projfinishdate != null) {
                            var projfinishdate = moment(projfinishdate).format('L');
                        }

                        var pType = value.EnterpriseProjectTypeName;
                        var drProject = value.Programme;
                        var projetPhase = value.ProjectPhase;


                        if ((projetPhase == null) || (projetPhase.toString() == "") || (projetPhase.toString() == "null")) {
                            projetPhase = "not assigned";
                        }

                        var coutReel=parseFloat(value.ProjectActualCost).toFixed(0);
                        sommeCoutReels=parseFloat(parseFloat(sommeCoutReels)+parseFloat(coutReel)).toFixed(0);

                        sommecoutRestant = parseFloat(projCost - sommeCoutReels).toFixed(0); 

                        
                        var pCost = parseInt(value.ProjectCost);
                        var pcostVar = parseInt(value.ProjectCostVariance);
                        var pwork = parseInt(value.ProjectWork);
                        var pwvariance = parseInt(value.ProjectWorkVariance);

                        var tr;
                        tr = $("<tr class='even pointer'>");
                        tr.append("<td>" + nomProjet + "</td>");//0
                        tr.append("<td><a href=https://m365x56447071.sharepoint.com/sites/Secteur_Bank/project%20detail%20pages/schedule.aspx?projuid="+projetId+"&ret=0 id='redirectLink' target='_blank'><img src='/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/portFolioDashboard/img/link.png' class='img-rounded' alt='Cinque Terre' width='20px' height='20px'></a></td>");//1
                        tr.append("<td>" + Prog + "</td>"); //2
                        tr.append("<td>" + Types_des_projets + "</td>"); //2
                        tr.append("<td>" + pOwner + "</td>"); //2
                        tr.append("<td>" + projStartDate + "</td>"); //3
                        tr.append("<td>" + projfinishdate + "</td>"); //4
                        tr.append("<td>" + conToMill(projCost) + " </td>");//5
                        tr.append("<td>" + conToMill(sommeCoutReels) + " </td>");//5
                        tr.append("<td>" + conToMill(sommecoutRestant) + " </td>");//5


                        tr.append('<td style="text-align:center;font-size: medium;">'+prPercentCpl+'%<progress id="" max="100" value="'+prPercentCpl+'" style="width: 100%; height:2vh;"></progress></td>'); //10
                        tr.append("<td style='display:none;'>" + projetPhase + " </td>"); //11
                        tr.append("<td style='display:none;'>" + pType + " </td>"); //12
                        tr.append("<td style='display:none;'>" + drProject + " </td>"); //13
                        tr.append("<td style='display:none;'>" + pOwner + " </td>"); //14
                        tr.append("<td style='display:none;'>" + pCost + " </td>"); //15
                        tr.append("<td style='display:none;'>" + pcostVar + " </td>"); //16
                        tr.append("<td style='display:none;'>" + pwork + " </td>"); //17
                        tr.append("<td style='display:none;'>" + pwvariance + " </td>"); //18
                        tr.append("<td style='display:none;'>" + projetId + " </td>"); //19
                        $('#tableaux').append(tr);

                    });
                }
            });

        }
        LoadTableProjectsFiltre2();

        getPagination('#tableaux');

        function getPagination(table) {

            var lastPage = 1;

            $('#maxRows')
                .on('change', function (evt) {
                    //$('.paginationprev').html('');                      // reset pagination

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
                    $(table + ' tr:gt(0)').each(function () {
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
                        //  numbers of pages
                        for (var i = 1; i <= pagenum;) {
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
                    $('.pagination li').on('click', function (evt) {
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
                        // $(this).addClass('active');                  // add active class to the clicked
                        limitPagging();
                        $(table + ' tr:gt(0)').each(function () {
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

        function limitPagging() {
            // alert($('.pagination li').length)

            if ($('.pagination li').length > 7) {
                if ($('.pagination li.active').attr('data-page') <= 3) {
                    $('.pagination li:gt(5)').hide();
                    $('.pagination li:lt(5)').show();
                    $('.pagination [data-page="next"]').show();
                } if ($('.pagination li.active').attr('data-page') > 3) {
                    $('.pagination li:gt(0)').hide();
                    $('.pagination [data-page="next"]').show();
                    for (let i = (parseInt($('.pagination li.active').attr('data-page')) - 2); i <= (parseInt($('.pagination li.active').attr('data-page')) + 2); i++) {
                        $('.pagination [data-page="' + i + '"]').show();

                    }

                }
            }
        }

        $(function () {
            // Just to append id number for each row
            $('table tr:eq(20)').prepend('<th  style="display:none;"> ID </th>');

            var id = 0;

            $('table tr:gt(20)').each(function () {
                id++;
                $(this).prepend('<td style="display:none;">' + id + '</td>');
            });
        });


    }else{
        filtrePortefeuille();
        $('#ProgrammeAff').show();
$('#StatutAff').hide();
$('#PortefeuilleAff').hide();
        $('#mylist3').prop("disabled", true);
    }


}