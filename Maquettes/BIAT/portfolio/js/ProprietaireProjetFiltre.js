function filtreProrietaireProjet(){

var SousProtSelctedName=document.getElementById("mylist2").value;
var progSelctedName1=document.getElementById("mylist1").value;
var ProjetpropSelctedName=document.getElementById("mylist3").value;
var progSelctedName=progSelctedName1.replace("'", "''");
document.getElementById("projchartDiv").innerHTML = '<canvas id="projchart" style="max-height: 550px;display: block;width: 1379px;"></canvas>';
document.getElementById("barslineDiv").innerHTML = '<canvas id="barsline"></canvas>';
document.getElementById("sous_portefeuilleDiv").innerHTML = '<canvas id="sous_portefeuille"></canvas>';
tableaux = document.getElementById("tableaux");
tr11 = tableaux.getElementsByTagName("tr");
if(tr11.length>0){
$('#tableaux tbody').empty();
}
if (ProjetpropSelctedName!="") {




    var responseNumberOfProjectsFiltre3 = responseNumberOfProjectsFiltre3 || [];
        var urlNumberOfProjectsFiltre3 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName&$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27%20and%20Programme%20eq%27"+progSelctedName+"%27%20and%20ProjectOwnerName%20eq%27"+ProjetpropSelctedName+"%27%20and%20ProjectOwnerName%20eq%27"+ProjetpropSelctedName+"%27";
        //console.log(urlNumberOfProjectsFiltre3);
        function LoadAllNumberProjectFiltre3() {
            var nbre = 0;

            $.ajax({
                url: urlNumberOfProjectsFiltre3,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseNumberOfProjectsFiltre3 = responseNumberOfProjectsFiltre3.concat(data.d.results);
                    if (data.d.__next) {
                        urlNumberOfProjectsFiltre3 = data.d.__next;
                        LoadAllNumberProjectFiltre3();
                    }

                    $.each(responseNumberOfProjectsFiltre3, function (key, value) {
                        var nomProjet = value.ProjectName;
                        if (nomProjet != null) {
                            nbre++;
                        }

                    });
                    document.getElementById("prcount").innerHTML = nbre;
                }
            });
        }
        LoadAllNumberProjectFiltre3();
        var responseDataSumFiltre3 = responseDataSumFiltre3 || [];
        var urlDataSumFiltre3 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectCostVariance,ProjectWork,ProjectWorkVariance&$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27%20and%20Programme%20eq%27"+progSelctedName+"%27%20and%20ProjectOwnerName%20eq%27"+ProjetpropSelctedName+"%27";

        function loadDataSumFiltre3() {
            var projCost = 0;
            var projcostvariance = 0;
            var projWork = 0;
            var pworkvariance = 0;

            $.ajax({
                url: urlDataSumFiltre3,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseDataSumFiltre3 = responseDataSumFiltre3.concat(data.d.results);
                    if (data.d.__next) {
                        urlDataSumFiltre3 = data.d.__next;
                        loadDataSumFiltre3();
                    }

                    $.each(responseDataSumFiltre3, function (key, value) {
                        var pCost = parseInt(value.ProjectCost);
                        var pcostVar = parseInt(value.ProjectCostVariance);
                        var pwork = parseInt(value.ProjectWork);
                        var pwvariance = parseInt(value.ProjectWorkVariance);


                        projCost = projCost + pCost;
                        projcostvariance = projcostvariance + pcostVar;
                        projWork = projWork + pwork;
                        pworkvariance = pworkvariance + pwvariance;


                    });


                    document.getElementById("prcost").innerHTML = conToMill(projCost);
                    document.getElementById("cvariance").innerHTML = conToMill(projcostvariance);
                    document.getElementById("prwork").innerHTML = conToMill(projWork);
                    document.getElementById("wrvariance").innerHTML = conToMill(pworkvariance);
                }
            });
        }
        loadDataSumFiltre3();

        //Load BarChart for GOVERNANCE
        var responseGovernancePhaseFiltre3 = responseGovernancePhaseFiltre3 || [];
        var urlGovernancePhaseFiltre3 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme&$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27%20and%20Programme%20eq%27"+progSelctedName+"%27%20and%20ProjectOwnerName%20eq%27"+ProjetpropSelctedName+"%27";
        function LoadBarGovernancePhaseFiltre3() {
            $.ajax({
                url: urlGovernancePhaseFiltre3,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseGovernancePhaseFiltre3 = responseGovernancePhaseFiltre3.concat(data.d.results);
                    if (data.d.__next) {
                        urlGovernancePhaseFiltre3 = data.d.__next;
                        LoadBarGovernancePhaseFiltre3();
                    }
                    var itermeidiaryObject = {};
                    $.each(responseGovernancePhaseFiltre3, function (key, value) {

                        var epnFiltre3 = value.Programme;
                        var somFiltre3 = 0;
                        if (epnFiltre3 != null) {
                            itermeidiaryObject[epnFiltre3] = ++itermeidiaryObject[epnFiltre3] || 1;

                        }
                        var sommeFiltre3 = somFiltre3;
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


                    var changed;
                    do {
                        changed = false;
                        for (var i = 0; i < labels.length - 1; i++) {
                            if ((labels[i].toString().localeCompare(labels[i + 1].toString())) == 1) {
                                var tmp = labels[i];
                                labels[i] = labels[i + 1];
                                labels[i + 1] = tmp;

                                var tmp1 = pievalues[i];
                                pievalues[i] = pievalues[i + 1];
                                pievalues[i + 1] = tmp1;
                                changed = true;
                            }
                        }
                    } while (changed);

                    var ctx1Filtre3 = document.getElementById("projchart").getContext('2d');

                    if (window.mychartBarFiltre3 != undefined) {
                        window.mychartBarFiltre3.destroy();
                    }

                    window.mychartBarFiltre3 = new Chart(ctx1Filtre3, {
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
                                        beginAtZero: true
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
        LoadBarGovernancePhaseFiltre3();

        var colors = ["#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];


        //Load Graph For ProjectPortfolio
        var responsePhaseChartFiltre3 = responsePhaseChartFiltre3 || [];
        var urlPhaseChartFiltre3 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=EnterpriseProjectTypeName&$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27%20and%20Programme%20eq%27"+progSelctedName+"%27%20and%20ProjectOwnerName%20eq%27"+ProjetpropSelctedName+"%27";
        function LoadProjectTypeFiltre3() {
            $.ajax({
                url: urlPhaseChartFiltre3,


                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responsePhaseChartFiltre3 = responsePhaseChartFiltre3.concat(data.d.results);
                    if (data.d.__next) {
                        urlPhaseChartFiltre3 = data.d.__next;
                        LoadProjectTypeFiltre3();
                    }
                    var itermeidiaryObject = {};
                    $.each(responsePhaseChartFiltre3, function (key, value) {

                        var epn1Filtre3 = value.EnterpriseProjectTypeName;
                        var som1Filtre3 = 0;
                        if (epn1Filtre3 != null) {
                            itermeidiaryObject[epn1Filtre3] = ++itermeidiaryObject[epn1Filtre3] || 1;
                        }
                        var somme1Filtre3 = som1Filtre3;
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


                    var ctx2Filtre3 = document.getElementById("barsline").getContext('2d');
                    if (window.echartdonut != undefined) {
                        window.echartdonut.destroy();
                    }

                    window.echartdonut = new Chart(ctx2Filtre3, {
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
        LoadProjectTypeFiltre3();

                 var colors = ["#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];

         var response_SousPortefeuilleFiltre3 = response_SousPortefeuilleFiltre3 || [];
        var urlSous_PortefeuilleFiltre3 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Sous_Portefeuilles&$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27%20and%20Programme%20eq%27"+progSelctedName+"%27%20and%20ProjectOwnerName%20eq%27"+ProjetpropSelctedName+"%27";
        function LoadSous_PortefeuilleFiltre3() {
            $.ajax({
                url: urlSous_PortefeuilleFiltre3,


                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    response_SousPortefeuilleFiltre3 = response_SousPortefeuilleFiltre3.concat(data.d.results);
                    if (data.d.__next) {
                        urlSous_PortefeuilleFiltre3 = data.d.__next;
                        LoadSous_PortefeuilleFiltre3();
                    }
                    var itermeidiaryObject1Filtre3 = {};
                    $.each(response_SousPortefeuilleFiltre3, function (key, value) {

                        var epn2Filtre3 = value.Sous_Portefeuilles;
                        var som2Filtre3 = 0;
                        if (epn2Filtre3 != null) {
                            itermeidiaryObject1Filtre3[epn2Filtre3] = ++itermeidiaryObject1Filtre3[epn2Filtre3] || 1;
                        }
                        var somme2Filtre3 = som2Filtre3;
                    });

                    var finalObject1 = Object.keys(itermeidiaryObject1Filtre3).map(function (key) {
                        return {
                            label: key,
                            y: itermeidiaryObject1Filtre3[key]
                        }
                    });

                    var pievalues = finalObject1.map(function (value, index) {
                        return value.y;
                    });

                    var labels = finalObject1.map(function (value, index) {
                        return value.label;
                    });

                    var colorscheme1 = colors.slice(0, labels.length);


                    var ctx3Filtre3 = document.getElementById("sous_portefeuille").getContext('2d');
                    if (window.echartdonut1 != undefined) {
                        window.echartdonut1.destroy();
                    }

                    window.echartdonut1 = new Chart(ctx3Filtre3, {
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
        LoadSous_PortefeuilleFiltre3();

         var responseTabProjFiltre3 = responseTabProjFiltre3 || [];
        var urlTabProjFiltre3 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=EnterpriseProjectTypeName%20eq%27"+SousProtSelctedName+"%27%20and%20Programme%20eq%27"+progSelctedName+"%27%20and%20ProjectOwnerName%20eq%27"+ProjetpropSelctedName+"%27";
        //console.log(urlTabProjFiltre3);
        function LoadTableProjectsFiltre3() {

            $.ajax({
                url: urlTabProjFiltre3,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseTabProjFiltre3 = responseTabProjFiltre3.concat(data.d.results);
                    if (data.d.__next) {
                        urlTabProjFiltre3 = data.d.__next;
                        LoadTableProjectsFiltre3();
                    }
                    tableaux = document.getElementById("tableaux");
                    tr1 = tableaux.getElementsByTagName("tr");
                    if(tr1.length>0){
                    $('#tableaux tbody').empty();
                    }
                    $.each(responseTabProjFiltre3, function (key, value) {

                        var projetId = value.ProjectId;
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
                        var propr = value.Owner;
                        //var projWork = value.Work;
                        var pCost = parseInt(value.ProjectCost);
                        var pcostVar = parseInt(value.ProjectCostVariance);
                        var pwork = parseInt(value.ProjectWork);
                        var pwvariance = parseInt(value.ProjectWorkVariance);

                        var tr;
                        tr = $("<tr class='even pointer'>");
                        tr.append("<td>" + nomProjet + "</td>");//0
                        tr.append("<td><a href='" + linkProjectSite + "' id='redirectLink' target='_blank'><img src='/sites/PWA/_catalogs/masterpage/Dashboard/portFolioDashboard/img/link.png' class='img-rounded' alt='Cinque Terre' width='20px' height='20px'></a></td>");//1
                        tr.append("<td>" + Prog + "</td>"); //2
                        tr.append("<td>" + Sous_Prog + "</td>"); //2
                        tr.append("<td>" + pOwner + "</td>"); //2
                        tr.append("<td>" + projStartDate + "</td>"); //3
                        tr.append("<td>" + projfinishdate + "</td>"); //4
                        tr.append("<td>" + conToMill(projCost) + " </td>");//5
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
        LoadTableProjectsFiltre3();

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
       filtreProgramme();

    }


}