
        function MainFilter() {
            
            var EnterpriseProjectTypeName=document.getElementById("mylist01").value;
            var Programme=document.getElementById("mylist02").value;
           
            console.log("EnterpriseProjectTypeName= "+EnterpriseProjectTypeName);
            console.log("Programme= "+Programme);
            var urlFilter1Selected= "";
            var urlFilter1Selected1= "";
             var urlFilterSelected2= "";
            if (EnterpriseProjectTypeName!="") {
                urlFilter1Selected+=" and EnterpriseProjectTypeName%20eq%27"+EnterpriseProjectTypeName+"%27";
                urlFilter1Selected1="&$filter=EnterpriseProjectTypeName%20eq%27"+EnterpriseProjectTypeName+"%27";
                 urlFilterSelected2=" and EnterpriseProjectTypeName%20eq%27"+EnterpriseProjectTypeName+"%27";
            }
            if (Programme!="") {
                urlFilter1Selected+=" and Programme%20eq%27"+Programme+"%27";
                urlFilter1Selected1="&$filter=Programme%20eq%27"+Programme+"%27";
                urlFilterSelected2=" and Programme%20eq%27"+Programme+"%27";
            }
           
            console.log("urlFilter1Selected= "+urlFilter1Selected);
            console.log("urlFilter1Selected1= "+urlFilter1Selected1);
            console.log("urlFilterSelected2= "+urlFilterSelected2);


             var responseLoadKPIFilter = responseLoadKPIFilter || [];
                var urlLoadKPIFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectActualCost,ProjectCostVariance,ProjectBudgetCost&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27"+urlFilter1Selected;
                 console.log(" urlLoadKPIFilter= "+ urlLoadKPIFilter);
                function loadKPIFilter() {
                    $.ajax({
                        url: urlLoadKPIFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseLoadKPIFilter = responseLoadKPIFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlLoadKPIFilter = data.d.__next;
                                loadKPIFilter();
                            }
                            var couprojet = 0;
                            var coutactuel = 0;
                            var coutvariance = 0;
                            var coutpudget=0;

                            
                             $.each(responseLoadKPI, function (key, value) {
                    
                                var projectcost = 0;
                                 if (value.ProjectCost!=null) {
                                                  projectcost=value.ProjectCost;
                             }
                             var actuelcost =0;
                             if(value.ProjectActualCost!=null){
                                ProjectActualCost=value.ProjectActualCost;
                             }

                             var ProjectBudgetCost=0;
                             if(value.ProjectBudgetCost!=null){
                                 ProjectBudgetCost=value.ProjectBudgetCost;
                             }
                             var projectcostvariance = 0;
                             if(value.ProjectCostVariance!=null){
                                 ProjectCostVariance=value.ProjectCostVariance;
                             }



                               
                                couprojet = parseFloat(couprojet)+parseFloat(projectcost);
                                coutactuel = parseFloat(coutactuel)+parseFloat(actuelcost);                        
                                coutvariance = parseFloat(coutvariance)+parseFloat(projectcostvariance);
                                coutpudget=parseFloat(coutpudget)+parseFloat(ProjectBudgetCost);
                                

                                 
                            });
                               
                               console.log("couprojet= "+couprojet);
                               console.log("coutactuel= "+coutactuel);
                               console.log("coutvariance= "+coutvariance);
                               console.log("coutpudget= "+coutpudget);         





                            document.getElementById("projectcost").innerHTML = conToMill(parseFloat(couprojet).toFixed(0));
                            console.log("couprojet = " + couprojet);
                            document.getElementById("projectAC").innerHTML = conToMill(parseFloat(coutactuel).toFixed(0));
                            document.getElementById("projectVC").innerHTML = conToMill(parseFloat(coutvariance).toFixed(0));
                             document.getElementById("projectBC").innerHTML = conToMill(parseFloat(coutpudget).toFixed(0));
                            loadBaseLineKPIFilter(couprojet,coutactuel,coutvariance,coutpudget);
                         
                            
                        }
                    });
                }
                loadKPIFilter();

                var responseLoadBaseLineKPIFilter = responseLoadBaseLineKPIFilter || [];
                var urlLoadBaseLineKPIFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectBaselineCost";

                function loadBaseLineKPIFilter(couprojet,coutactuel,coutvariance) {
                    $.ajax({
                        url: urlLoadBaseLineKPIFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseLoadBaseLineKPIFilter = responseLoadBaseLineKPIFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlLoadBaseLineKPIFilter = data.d.__next;
                                loadBaseLineKPIFilter(couprojet,coutactuel,coutvariance);
                            }
                            var coutpudget = 0;

                            $.each(responseLoadBaseLineKPIFilter, function (key, value) {
                                var projectbaseline = value.ProjectBaselineCost;
                                   coutpudget = parseFloat(coutpudget)+parseFloat(projectbaseline);
                            });
                            document.getElementById("projectBC").innerHTML = conToMill(coutpudget);
                              loadCostChart(couprojet,coutactuel,coutvariance,coutpudget);
                        }
                    });
                }
                
           







            var responseProjectPhaseFilter = responseProjectPhaseFilter || [];
          var urlProjectPhaseFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectPercentCompleted&$filter=Types_de_Projet eq 'Programme'"+urlFilter1Selected;
        
          


        console.log("urlProjectPhaseFilter= "+urlProjectPhaseFilter);
        function LoadBarProjectPhaseFilter() {
            $.ajax({
                url: urlProjectPhaseFilter,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProjectPhaseFilter = responseProjectPhaseFilter.concat(data.d.results);
                    if (data.d.__next) {
                        urlProjectPhaseFilter= data.d.__next;
                        LoadBarProjectPhaseFilter();
                    }
                    else if (!(data.d.__next)){
                    var itermeidiaryObject = {};
                     var labels=[];
                    var pievalues=[];
                    $.each(responseProjectPhaseFilter, function (key, value) {

                        var epn = value.ProjectName;
                        var ach = value.ProjectPercentCompleted;
             
                        labels.push(epn);
                        pievalues.push(ach);
                       
                    });
                    console.log("labels= "+labels);
                    console.log("pievalues= "+pievalues);

                    


                   

                    var ctx1 = document.getElementById("projchart");

                    if (window.mychartBar != undefined) {
                        window.mychartBar.destroy();
                    }

                    window.mychartBar = new Chart(ctx1, {
                        type: 'bar',
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
                                          labelString: "ProjectName"
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
        LoadBarProjectPhaseFilter();
       var colors = ["#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];
  


       


       //Load Graph For ProjectPortfolio filter
        var responsePhaseChartFilter = responsePhaseChartFilter || [];
        var urlPhaseChartFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectBudgetCost&$filter=Types_de_Projet eq 'Portefeuille'"+urlFilter1Selected;
         console.log("urlPhaseChartFilter= "+urlPhaseChartFilter);
        function LoadProjectTypeFilter() {
            $.ajax({
                url: urlPhaseChartFilter,


                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responsePhaseChartFilter = responsePhaseChartFilter.concat(data.d.results);
                    if (data.d.__next) {
                        urlPhaseChartFilter = data.d.__next;
                        LoadProjectTypeFilter();
                    }
                    var labelsCost=[];
                    var valueCost=[];
                    $.each(responsePhaseChartFilter, function (key, value) {
                        var nomPortefeul=value.ProjectName;
                        var coutBudg=parseFloat(value.ProjectBudgetCost).toFixed(2);
                         console.log("coutBudg= "+coutBudg);
                        labelsCost.push(nomPortefeul);
                        valueCost.push(coutBudg);
                    });
                    var colors = [
                      'rgb(70, 191, 189)',
                      'rgb(252, 180, 92)',
                      'rgb(247, 70, 74)',
                      'rgb(148, 159, 177)',
                      'rgb(51, 143, 82)',
                      'rgb(77, 83, 96)',
                      'rgb(180, 142, 173)',
                      'rgb(150, 181, 180)',
                      'rgb(235, 203, 138)',
                      /*'rgb(94, 65, 149)',
                      'rgb(171, 121, 103)',
                      'rgb(134, 175, 18)'*/
                    ];
                    var labels = labelsCost;
                    var data = valueCost;
                    var bgColor = colors;
                    var dataChart = {
                      labels: labels,
                      datasets: [{
                        data: data,
                        backgroundColor: bgColor
                      }]
                    };
                    var config = {
                      type: 'doughnut',
                      data: dataChart,
                      options: {
                        maintainAspectRatio: false,
                        cutoutPercentage: 45,
                        legend: {
                          display: false
                        },
                        legendCallback: function(chart) {
                          var text = [];
                          text.push('<ul class="doughnut-legend">');
                          if (chart.data.datasets.length) {
                            for (var i = 0; i < chart.data.datasets[0].data.length; ++i) {
                              text.push('<li><span class="doughnut-legend-icon" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
                              if (chart.data.labels[i]) {
                                text.push('<span class="doughnut-legend-text">' + chart.data.labels[i] + '</span>');
                              }
                              text.push('</li>');
                            }
                          }
                          text.push('</ul>');
                          return text.join("");
                        },
                        tooltips: {
                          yPadding: 10,
                          callbacks: {
                            label: function(tooltipItem, data) {
                              var total = 0;
                              data.datasets[tooltipItem.datasetIndex].data.forEach(function(element /*, index, array*/ ) {
                                total += element;
                              });
                              var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                          //    var percentTxt = Math.round(value / total * 100);
                           //   return data.labels[tooltipItem.index] + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + ' (' + percentTxt + '%)';
                            }
                          }
                        }
                      }
                    };
                    var ctxbarsline = document.getElementById("barsline").getContext("2d");
                    var doughnutChart = new Chart(ctxbarsline, config);

                    
                }
            });
        }
        LoadProjectTypeFilter();

        



      





      var response_SousEnterpriseProjectTypeNameFilter = response_SousEnterpriseProjectTypeNameFilter || [];
        var urlSous_EnterpriseProjectTypeNameFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectActualCost,ProjectName&$filter=Types_de_Projet eq 'Portefeuille'"+urlFilter1Selected1;
          console.log(" urlSous_EnterpriseProjectTypeNameFilter= "+ urlSous_EnterpriseProjectTypeNameFilter);
        function LoadSous_EnterpriseProjectTypeNameFilter() {
            $.ajax({
                url: urlSous_EnterpriseProjectTypeNameFilter,


                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    response_SousEnterpriseProjectTypeNameFilter = response_SousEnterpriseProjectTypeNameFilter.concat(data.d.results);
                    if (data.d.__next) {
                        urlSous_EnterpriseProjectTypeNameFilter = data.d.__next;
                        LoadSous_EnterpriseProjectTypeNameFilter();
                    }
                    var labelsCst=[];
                    var valueCst=[];
                    $.each(response_SousEnterpriseProjectTypeNameFilter, function (key, value) {
                        var nomPortefeul=value.ProjectName;
                        var coutAct=parseFloat(value.ProjectActualCost).toFixed(2);
                        console.log("coutAct= "+coutAct);
                        labelsCst.push(nomPortefeul);
                        valueCst.push(coutAct);
                    });
                    var colors = [
                      'rgb(70, 191, 189)',
                      'rgb(252, 180, 92)',
                      'rgb(247, 70, 74)',
                      'rgb(148, 159, 177)',
                      'rgb(51, 143, 82)',
                      'rgb(77, 83, 96)',
                      'rgb(180, 142, 173)',
                      'rgb(150, 181, 180)',
                      'rgb(235, 203, 138)',
                      /*'rgb(94, 65, 149)',
                      'rgb(171, 121, 103)',
                      'rgb(134, 175, 18)'*/
                    ];
                    var labels = labelsCst;
                    var data = valueCst;
                    var bgColor = colors;
                    var dataChart = {
                      labels: labels,
                      datasets: [{
                        data: data,
                        backgroundColor: bgColor
                      }]
                    };
                    var config = {
                      type: 'doughnut',
                      data: dataChart,
                      options: {
                        maintainAspectRatio: false,
                        cutoutPercentage: 45,
                        legend: {
                          display: false
                        },
                        legendCallback: function(chart) {
                          var text = [];
                          text.push('<ul class="doughnut-legend">');
                          if (chart.data.datasets.length) {
                            for (var i = 0; i < chart.data.datasets[0].data.length; ++i) {
                              text.push('<li><span class="doughnut-legend-icon" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
                              if (chart.data.labels[i]) {
                                text.push('<span class="doughnut-legend-text">' + chart.data.labels[i] + '</span>');
                              }
                              text.push('</li>');
                            }
                          }
                          text.push('</ul>');
                          return text.join("");
                        },
                        tooltips: {
                          yPadding: 10,
                          callbacks: {
                            label: function(tooltipItem, data) {
                              var total = 0;
                              data.datasets[tooltipItem.datasetIndex].data.forEach(function(element /*, index, array*/ ) {
                                total += element;
                              });
                              var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            //  var percentTxt = Math.round(value / total * 100);
                            //  return data.labels[tooltipItem.index] + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + ' (' + percentTxt + '%)';
                            }
                          }
                        }
                      }
                    };
                    var ctxEnterpriseProject = document.getElementById("sous_EnterpriseProjectTypeName").getContext("2d");
                    var doughnutChart = new Chart(ctxEnterpriseProject, config);

                    
                }
            });
        }
        LoadSous_EnterpriseProjectTypeNameFilter();


      var responsePhaseDonutChartFilter = responsePhaseDonutChartFilter || [];
        var  urlPhaseChartFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectName&$filter=Types_de_Projet eq 'Portefeuille'"+urlFilterSelected2;
        console.log(" urlPhaseChartFilter= "+ urlPhaseChartFilter); 
        function LoadProjectDonutTypeFilter() {
            $.ajax({
                url:  urlPhaseChartFilter,


                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responsePhaseDonutChartFilter = responsePhaseDonutChartFilter.concat(data.d.results);
                    if (data.d.__next) {
                        urlPhaseChartFilter = data.d.__next;
                      LoadProjectDonutTypeFilter();
                    }
                    var labelsProj=[];
                    var valueProj=[];
                    $.each(responsePhaseDonutChartFilter, function (key, value) {
                        var nomPort=value.ProjectName;
                        var procost=parseFloat(value.ProjectCost).toFixed(2);

                        labelsProj.push(nomPort);
                        valueProj.push(procost);
                    });
                    var colors = [
                      'rgb(70, 191, 189)',
                      'rgb(252, 180, 92)',
                      'rgb(247, 70, 74)',
                      'rgb(148, 159, 177)',
                      'rgb(51, 143, 82)',
                      'rgb(77, 83, 96)',
                      'rgb(180, 142, 173)',
                      'rgb(150, 181, 180)',
                      'rgb(235, 203, 138)',
                      /*'rgb(94, 65, 149)',
                      'rgb(171, 121, 103)',
                      'rgb(134, 175, 18)'*/
                    ];
                    var labels = labelsProj;
                    var data = valueProj;
                    var bgColor = colors;
                    var dataChart = {
                      labels: labels,
                      datasets: [{
                        data: data,
                        backgroundColor: bgColor
                      }]
                    };
                    var config = {
                      type: 'doughnut',
                      data: dataChart,
                      options: {
                        maintainAspectRatio: false,
                        cutoutPercentage: 45,
                        legend: {
                          display: false
                        },
                        legendCallback: function(chart) {
                          var text = [];
                          text.push('<ul class="doughnut-legend">');
                          if (chart.data.datasets.length) {
                            for (var i = 0; i < chart.data.datasets[0].data.length; ++i) {
                              text.push('<li><span class="doughnut-legend-icon" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
                              if (chart.data.labels[i]) {
                                text.push('<span class="doughnut-legend-text">' + chart.data.labels[i] + '</span>');
                              }
                              text.push('</li>');
                            }
                          }
                          text.push('</ul>');
                          return text.join("");
                        },
                        tooltips: {
                          yPadding: 10,
                          callbacks: {
                            label: function(tooltipItem, data) {
                              var total = 0;
                              data.datasets[tooltipItem.datasetIndex].data.forEach(function(element /*, index, array*/ ) {
                                total += element;
                              });
                              var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                             // var percentTxt = Math.round(value / total * 100);
                            //  return data.labels[tooltipItem.index] + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + ' (' + percentTxt + '%)';
                            }
                          }
                        }
                      }
                    };
                    var ctxchart = document.getElementById("myChart").getContext("2d");
                    var doughnutChart = new Chart(ctxchart, config);

                    
                }
            });
        }
         LoadProjectDonutTypeFilter();










       
       tableaux1 = document.getElementById("tablePr1");
     tr1 = tableaux1.getElementsByTagName("tr");
     if(tr1.length>0){        
          $('#tablePr1 tbody').empty();
     }
     


     var responseTabGreenFilter = responseTabGreenFilter || [];
    var urlTabGreenFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectStartDate,ProjectFinishDate,ProjectPercentCompleted,ProjectActualCost,ProjectCost,ProjectActualCost&$filter=Types_de_Projet eq 'Portefeuille'"+urlFilter1Selected;

    function loadTabGreenFilter() {
    console.log("urlTabGreenFilter= "+urlTabGreenFilter);
        $.ajax({
            url: urlTabGreenFilter,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseTabGreenFilter = responseTabGreenFilter.concat(data.d.results);
                if (data.d.__next) {
                    urlTabGreenFilter = data.d.__next;
                    loadTabGreenFilter();
                }
                
                var trSumG;
                trSumG = $("<tr>");
                trSumG.append('<td> <div class="row"> <div class="col-xs-2" id="fa3"><i class="fa fa-circle fa-2x" style=" color: #49bf34;"></i></div><div class="col-xs-10 text-left" style="font-size: 14px;color: black;"><div id="entreprisesKPI" style="font-weight: 700;"> Complet</div></div></div></td>');
                       
                 
                trSumG.append("<td id='sumBacGr' style='font-weight: 700; font-size: 14px;color: black;'> </td>");
                trSumG.append("<td id='sumValPlanGr' style='font-weight: 700; font-size: 14px;color: black;'> </td>");
                trSumG.append("<td id='sumCoutRGr' style='font-weight: 700; font-size: 14px;color: black;'> </td>");
                trSumG.append("<td id='sumAchGr' style='text-align:center; font-weight: 700; font-size: 14px;color: black;'> </td>");
                trSumG.append("<td id='sumValAqGr' style='font-weight: 700; font-size: 14px;color: black;'> </td>");
                trSumG.append("<td id='sumEcartDGr' style='font-weight: 700; font-size: 14px;color: black;'> </td>");
                trSumG.append("<td id='sumEcartCGr' style='font-weight: 700; font-size: 14px;color: black;'> </td>");
                $('#tablePr1 tbody').append(trSumG); 
                var sumBacGr=0;
                var sumValPlanGr=0;
                var sumCoutRGr=0;
                var sumAchGr=0;
                var sumValAqGr=0;
                var sumEcartDGr=0;
                var sumEcartCGr=0;
                var avgAch=0;
                var countP=0;
                $.each(responseTabGreenFilter, function (key, value) {
                        countP++;
                        var idP=value.ProjectId;
                        var nameP=value.ProjectName;
                        var bac=0;
                        if (value.PrixderevientréviséTotalTND!=null) {
                            bac=parseFloat(value.PrixderevientréviséTotalTND);
                        }
                        var valPlan=0;
                        if (value.Prixderevienttotal!=null) {
                            valPlan=parseFloat(value.Prixderevienttotal);
                        }
                        var coutR=0;
                        if (value.Prixderevienttotal!=null) {
                            coutR=parseFloat(value.Prixderevienttotal);
                        }
                        var ach=parseFloat(value.ProjectPercentCompleted);
                        var valAq=0;
                        valAq=parseFloat((coutR*ach)/100);
                        var ecartD=0;
                        ecartD=parseFloat(valAq-valPlan);
                        var ecartC=0;   
                        ecartC=parseFloat(valAq-coutR); 
                        var tr;
                        tr = $("<tr>");
                        tr.append('<td> '+nameP+' </td>');
                       
                 
                        tr.append("<td> "+ conToMill(parseFloat(bac).toFixed(0)) +" </td>");
                        tr.append("<td> "+ conToMill(parseFloat(valPlan).toFixed(0)) +" </td>");
                        tr.append("<td> "+ conToMill(parseFloat(coutR).toFixed(0)) +" </td>");
                        tr.append('<td style="text-align:center;font-size: small;">'+ach+'%<progress id="" max="100" value="'+ach+'" style="width: 100%; height:2vh;"></progress></td>');
                        tr.append("<td> "+ conToMill(parseFloat(valAq).toFixed(0)) +" </td>");
                        tr.append("<td> "+ conToMill(parseFloat(ecartD).toFixed(0)) +" </td>");
                        tr.append("<td> "+ conToMill(parseFloat(ecartC).toFixed(0)) +" </td>");
                        $('#tablePr1 tbody').append(tr); 

                        sumBacGr+=parseFloat(bac);
                        sumValPlanGr+=parseFloat(valPlan);
                        sumCoutRGr+=parseFloat(coutR);
                        sumAchGr+=parseFloat(ach);
                        sumValAqGr+=parseFloat(valAq);
                        sumEcartDGr+=parseFloat(ecartD);
                        sumEcartCGr+=parseFloat(ecartC);           
                        
                });
                
               avgAch=0;
               if (countP!=0) {
                avgAch=parseFloat(sumAchGr/countP).toFixed(0);
               }
               console.log("sumAchGrgreeeeen= "+sumAchGr);
               console.log("countPgreeeeen= "+countP);
               console.log("avgAchgreeeeen= "+avgAch);
               if((sumAchGr == 0)|| (countP == 0))
               {
                avgAch = 0;
               }
               document.getElementById("sumBacGr").innerHTML = conToMill(parseFloat(sumBacGr).toFixed(0)) ;
               document.getElementById("sumValPlanGr").innerHTML = conToMill(parseFloat(sumValPlanGr).toFixed(0));
               document.getElementById("sumCoutRGr").innerHTML = conToMill(parseFloat(sumCoutRGr).toFixed(0));
               document.getElementById("sumAchGr").innerHTML = avgAch+'%<progress id="" max="100" value="'+avgAch+'" style="width: 100%; height:2vh;"></progress>';
               document.getElementById("sumValAqGr").innerHTML = conToMill(parseFloat(sumValAqGr).toFixed(0)) ;
               document.getElementById("sumEcartDGr").innerHTML = conToMill(parseFloat(sumEcartDGr).toFixed(0));
               document.getElementById("sumEcartCGr").innerHTML = conToMill(parseFloat(sumEcartCGr).toFixed(0));
            }
        });
    }
  
    loadTabGreenFilter();



    
}

