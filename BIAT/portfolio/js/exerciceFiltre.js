function getSelectedText(elementId) {
var elt = document.getElementById(elementId);
return elt.options[elt.selectedIndex].text;
}

function filtreExercice(){
        
        var list02 = document.getElementById("mylist0").value;
        var startOfYear1= moment(list02).format('YYYY-MM-DD');
        var endOfYear1 = moment(startOfYear1).add(1, 'years').format('YYYY-MM-DD');
        var urlDateDebut1=startOfYear1+'T00:00:00.000';
        var urlDateFin1=endOfYear1+'T00:00:00.000';    


document.getElementById("projchartDiv").innerHTML = '<canvas id="projchart" style="max-height: 550px;display: block;width: 1379px;"></canvas>';
document.getElementById("barslineDiv").innerHTML = '<canvas id="barsline"></canvas>';
document.getElementById("sous_portefeuilleDiv").innerHTML = '<canvas id="sous_portefeuille"></canvas>';
document.getElementById("PortefeuilleAff").innerHTML = '<b>NOMBRE DES PROJETS PAR PORTEFEUILLE</b>';
document.getElementById("structAff").innerHTML = '<b>NOMBRE DES PROJETS PAR STRUCTURE ORGANISATIONNELLE</b>';
tableaux = document.getElementById("tableaux");
tr11 = tableaux.getElementsByTagName("tr");
if(tr11.length>0){
$('#tableaux tbody').empty();
}
// if (SousProtSelctedName != "") {

// }
var filterString="";
var filterString1="";
if (list02 != ""){
    filterString+="&$filter=ProjectStartDate%20ge%20datetime%27"+urlDateDebut1+"%27%20and%20ProjectStartDate%20lt%20datetime%27"+urlDateFin1+"%27";
    filterString1+="?$filter=ProjectStartDate%20ge%20datetime%27"+urlDateDebut1+"%27%20and%20ProjectStartDate%20lt%20datetime%27"+urlDateFin1+"%27";
}

if (list02 == "" ) {
        location.reload(true);
    }  
// $('#ProgrammeAff').show();
// $('#PortefeuilleAff').hide();

	var responseNumberOfProjectsFiltre1 = responseNumberOfProjectsFiltre1 || [];
        var urlNumberOfProjectsFiltre1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,Structureorganisationnelle,EnterpriseProjectTypeName,TypePortefeuilleProgrammeProjet"+filterString;
        console.log(urlNumberOfProjectsFiltre1);
        function LoadAllNumberProjectFiltre1() {
            

            $.ajax({
                url: urlNumberOfProjectsFiltre1,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseNumberOfProjectsFiltre1 = responseNumberOfProjectsFiltre1.concat(data.d.results);
                    if (data.d.__next) {
                        urlNumberOfProjectsFiltre1 = data.d.__next;
                        LoadAllNumberProjectFiltre1();
                    }

                    if (!data.d.__next){
                      var nbre = 0;
                      // var nbrePG = 0;
                      var nbrePR = 0;
                      var arrPortefeuille=[];
                      var arrStructOrg=[];
                      $.each(responseNumberOfProjectsFiltre1, function (key, value) {
                          var nomProjet = value.ProjectName;
                          var projectType = value.TypePortefeuilleProgrammeProjet;

                          if(projectType =='Projet'){
                            if ((nomProjet != null)&&(projectType !='Portefeuille')) {
                                nbre++;
                            }
                          }
                            var structOrg=value.Structureorganisationnelle;
                            if ((structOrg!=null)&&(arrStructOrg.indexOf(structOrg)<0)&&(projectType !='Portefeuille')) {
                              arrStructOrg.push(structOrg);
                            }
                          console.log("arrStructOrg= "+arrStructOrg);
                          var portefeuille=value.EnterpriseProjectTypeName;
                          if ((portefeuille!=null)&&(arrPortefeuille.indexOf(portefeuille)<0)) {
                            arrPortefeuille.push(portefeuille);
                          }
                          // if(projectType =='Programme'){
                          //     if (nomProjet != null) {
                          //         nbrePG++;
                          //     }
                          // }

                          if(projectType =='Portefeuille'){
                              if (nomProjet != null) {
                                  nbrePR++;
                              }
                          }

                      });
                      document.getElementById("portefeuillecount").innerHTML = nbrePR;
                      document.getElementById("prcount").innerHTML = nbre;
                      document.getElementById("pgcount").innerHTML = arrStructOrg.length;
                    }
                }
            });
        }
        LoadAllNumberProjectFiltre1();
        var responseDataSumFiltre1 = responseDataSumFiltre1 || [];
        var urlDataSumFiltre1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectActualCost,ProjectCostVariance,ProjectWork,ProjectWorkVariance"+filterString+" and TypePortefeuilleProgrammeProjet%20eq%27Portefeuille%27";
        console.log('urlDataSumFiltre1= '+urlDataSumFiltre1);
        function loadDataSumFiltre1() {
                        var projCost = 0;
            var projcostvariance = 0;
            var projWork = 0;
            var pworkvariance = 0;
            var sommeCoutReel = 0;
            var sommeCoutRestant = 0;

            $.ajax({
                url: urlDataSumFiltre1,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseDataSumFiltre1 = responseDataSumFiltre1.concat(data.d.results);
                    if (data.d.__next) {
                        urlDataSumFiltre1 = data.d.__next;
                        loadDataSumFiltre1();
                    }

                    $.each(responseDataSumFiltre1, function (key, value) {
                        var pCost = parseInt(value.ProjectCost);
                        var pcostVar = parseInt(value.ProjectCostVariance);
                        var pwork = parseInt(value.ProjectWork);
                        var pwvariance = parseInt(value.ProjectWorkVariance);


                        projCost = projCost + pCost;
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
        loadDataSumFiltre1();

        //Load BarChart for GOVERNANCE
        var responseGovernancePhaseFiltre1 = responseGovernancePhaseFiltre1 || [];
        var urlGovernancePhaseFiltre1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=EnterpriseProjectTypeName,ProjectPercentCompleted"+filterString+" and TypePortefeuilleProgrammeProjet%20eq%27Projet%27";
        console.log("urlGovernancePhaseFiltre1= "+urlGovernancePhaseFiltre1);
        function LoadBarGovernancePhaseFiltre1() {
            $.ajax({
                url: urlGovernancePhaseFiltre1,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseGovernancePhaseFiltre1 = responseGovernancePhaseFiltre1.concat(data.d.results);
                    if (data.d.__next) {
                        urlGovernancePhaseFiltre1 = data.d.__next;
                        LoadBarGovernancePhaseFiltre1();
                    }
                    if (!data.d.__next){
                      var itermeidiaryObject = {};
                      var labels=[];
                      var epnCount=[];
                      var pievalues=[];
                      $.each(responseGovernancePhaseFiltre1, function (key, value) {

                          var epn = value.EnterpriseProjectTypeName;
                          console.log('epn= '+epn);
                          var ach = value.ProjectPercentCompleted;
                          if (labels.indexOf(epn)<0) {
                            labels.push(epn);
                            pievalues.push(parseFloat(ach));
                            epnCount.push(1);
                          }else{
                            pievalues[labels.indexOf(epn)]=parseFloat(parseFloat(pievalues[labels.indexOf(epn)])+parseFloat(ach));
                            epnCount[labels.indexOf(epn)]=parseInt(epnCount[labels.indexOf(epn)]+1);
                          }
                          
                         
                      });
                      for (var i = 0; i < labels.length; i++) {
                        pievalues[i]=parseFloat(pievalues[i]/epnCount[i]).toFixed(0);
                      }
                      console.log("labels= "+labels);


                     

                      var ctx1 = document.getElementById("projchart").getContext('2d');

                      if (window.mychartBar != undefined) {
                          window.mychartBar.destroy();
                      }

                      window.mychartBar = new Chart(ctx1, {
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
                                            labelString: "Portefeuille"
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


                }
            });
        }
        LoadBarGovernancePhaseFiltre1();

        var colors = ["#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];


        //Load Graph For ProjectPortfolio
        var responsePhaseChartFiltre1 = responsePhaseChartFiltre1 || [];
        var urlPhaseChartFiltre1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=EnterpriseProjectTypeName&"+filterString+" and TypePortefeuilleProgrammeProjet%20eq%27Projet%27";
        function LoadProjectTypeFiltre1() {
            $.ajax({
                url: urlPhaseChartFiltre1,


                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responsePhaseChartFiltre1 = responsePhaseChartFiltre1.concat(data.d.results);
                    if (data.d.__next) {
                        urlPhaseChartFiltre1 = data.d.__next;
                        LoadProjectTypeFiltre1();
                    }
                    var itermeidiaryObject = {};
                    $.each(responsePhaseChartFiltre1, function (key, value) {

                        var epn1Filtre1 = value.EnterpriseProjectTypeName;
                        var som1Filtre1 = 0;
                        if (epn1Filtre1 != null) {
                            itermeidiaryObject[epn1Filtre1] = ++itermeidiaryObject[epn1Filtre1] || 1;
                        }
                        var somme1Filtre1 = som1Filtre1;
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


                    var ctx2Filtre1 = document.getElementById("barsline").getContext('2d');
                    if (window.echartdonut != undefined) {
                        window.echartdonut.destroy();
                    }

                    window.echartdonut = new Chart(ctx2Filtre1, {
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
        LoadProjectTypeFiltre1();

                 var colors = ["#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];

         var response_SousPortefeuilleFiltre1 = response_SousPortefeuilleFiltre1 || [];
        var urlSous_PortefeuilleFiltre1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structureorganisationnelle"+filterString+" and TypePortefeuilleProgrammeProjet%20eq%27Projet%27";
        function LoadSous_PortefeuilleFiltre1() {
            $.ajax({
                url: urlSous_PortefeuilleFiltre1,


                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    response_SousPortefeuilleFiltre1 = response_SousPortefeuilleFiltre1.concat(data.d.results);
                    if (data.d.__next) {
                        urlSous_PortefeuilleFiltre1 = data.d.__next;
                        LoadSous_PortefeuilleFiltre1();
                    }
                    var itermeidiaryObject1Filtre1 = {};
                    $.each(response_SousPortefeuilleFiltre1, function (key, value) {

                        var epn2Filtre1 = value.Structureorganisationnelle;
                        var som2Filtre1 = 0;
                        if (epn2Filtre1 != null) {
                            itermeidiaryObject1Filtre1[epn2Filtre1] = ++itermeidiaryObject1Filtre1[epn2Filtre1] || 1;
                        }
                        var somme2Filtre1 = som2Filtre1;
                    });

                    var finalObject1 = Object.keys(itermeidiaryObject1Filtre1).map(function (key) {
                        return {
                            label: key,
                            y: itermeidiaryObject1Filtre1[key]
                        }
                    });

                    var pievalues = finalObject1.map(function (value, index) {
                        return value.y;
                    });

                    var labels = finalObject1.map(function (value, index) {
                        return value.label;
                    });

                    var colorscheme1 = colors.slice(0, labels.length);


                    var ctx3Filtre1 = document.getElementById("sous_portefeuille").getContext('2d');
                    if (window.echartdonut1 != undefined) {
                        window.echartdonut1.destroy();
                    }

                    window.echartdonut1 = new Chart(ctx3Filtre1, {
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
        LoadSous_PortefeuilleFiltre1();

         var responseTabProjFiltre1 = responseTabProjFiltre1 || [];
        var urlTabProjFiltre1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects"+filterString1+" and TypePortefeuilleProgrammeProjet eq 'Projet'";
        console.log('urlTabProjFiltre1 '+urlTabProjFiltre1);
        function LoadTableProjectsFiltre1() {
             var sommeCoutReels = 0;
            var sommecoutRestant =0;
            $.ajax({
                url: urlTabProjFiltre1,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseTabProjFiltre1 = responseTabProjFiltre1.concat(data.d.results);
                    if (data.d.__next) {
                        urlTabProjFiltre1 = data.d.__next;
                        LoadTableProjectsFiltre1();
                    }
                    tableaux = document.getElementById("tableaux");
					tr1 = tableaux.getElementsByTagName("tr");
					if(tr1.length>0){
					$('#tableaux tbody').empty();
					}
                    $.each(responseTabProjFiltre1, function (key, value) {

                        var projetId = value.ProjectId;
                        var structO = value.Structureorganisationnelle;

                        if(structO == null)
                        {
                            structO = "Pas de structure organisationnelle de projet"
                        }

                        var portf = "";
                        
                        if (value.EnterpriseProjectTypeName == null) {
                            portf = "Pas de portefeuille assigné";
                        }
                        else{
                            portf = value.EnterpriseProjectTypeName;
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






                        /*$('#tableaux tbody tr').each(function() {
                                        var abc = $(this).children('td').eq(7).html();
                                        var abc1 = $(this).children('td').eq(8).html();
                                        var abc2 = $(this).children('td').eq(9).html();
                                        
                                            if(abc == 0) {
                                                $(this).children('td').eq(7).css('background-color', 'RGBA(255,198,191,0.4)');
                                            }
                                            if(abc1 == 0) {
                                                $(this).children('td').eq(8).css('background-color', 'RGBA(255,198,191,0.4)');
                                            }
                                            if(abc2 == 0) {
                                                $(this).children('td').eq(9).css('background-color', 'RGBA(255,198,191,0.4)');
                                            }
                                        
                                    });*/





                        var tr;
                        tr = $("<tr class='even pointer'>");
                        tr.append("<td>" + nomProjet + "</td>");//0
                        tr.append("<td><a href=https://biattunisie.sharepoint.com/sites/pwa/project%20detail%20pages/schedule.aspx?projuid="+projetId+"&ret=0 id='redirectLink' target='_blank'><img src='/sites/pwa/_catalogs/masterpage/Dashboard/portFolioDashboard/img/link.png' class='img-rounded' alt='Cinque Terre' width='20px' height='20px'></a></td>");//1
                        tr.append("<td>" + portf + "</td>"); //2
                        tr.append("<td>" + structO + "</td>"); //2
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
        LoadTableProjectsFiltre1();

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


    


}