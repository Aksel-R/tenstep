
        function MainFilter() {


            var responseFiltrerTableau = responseFiltrerTableau || [];
            var urlFiltrerTableau = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Sous_Programme,ProjectName,ProjectId,ProjectOwnerName,EnterpriseProjectTypeName,Programme,ProjectCost,ProjectCostVariance,ProjectWork,ProjectWorkVariance,ProjectPercentCompleted,ProjectWorkspaceInternalUrl,ProjectStartDate,ProjectFinishDate";

            function filtrerTableau() {
                var input, input2, input3, input4, filter, filter2, filter3, tr, td, td2, td3, td4, i, k;
                input = document.getElementById("mylist3");
                input2 = document.getElementById("mylist2");
                input3 = document.getElementById("mylist1");
                //input4 = document.getElementById("mylist4");
                filter = input.value.toUpperCase();
                filter2 = input2.value.toUpperCase();
                filter3 = input3.value.toUpperCase();
                //filter4 = input4.value.toUpperCase();
                //table = document.getElementById("tableaux");
                $.ajax({
                    url: urlFiltrerTableau,
                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseFiltrerTableau = responseFiltrerTableau.concat(data.d.results);

                            if (data.d.__next) {
                                urlFiltrerTableau = data.d.__next;
                                filtrerTableau();
                            }

                        var dataResults = data.d.results;
                        var listItemInfo = "";
                        table = document.getElementById("tableaux");
                        tr3 = table.getElementsByTagName("tr");
                        if (tr3.length > 0) {

                            $('#tableaux tbody').empty();
                        }
                        $.each(responseFiltrerTableau, function (key, value) {


                            if (value.ProjectOwnerName != null) {
                                var pOwner = value.ProjectOwnerName;
                            }
                            else {
                                pOwner = "";
                            }


                            if (value.EnterpriseProjectTypeName != null) {
                                var pType = value.EnterpriseProjectTypeName;
                            }
                            else {
                                pType = "";
                            }
                            if (value.Programme != null) {
                                var drProject = value.Programme;
                            }
                            else {
                                drProject = "";
                            }

                            if (value.Programme != null) {
                                var projetPhase = value.Programme;
                            }

                            if ((projetPhase == null) || (projetPhase.toString() == "") || (projetPhase.toString() == "null")) {
                                projetPhase = "not assigned";
                            }
                            var propr = value.Owner;




                            // filter-->14, filter2-->12, filter3-->13-->11
                            if ((pOwner.toUpperCase().indexOf(filter) > -1) && (pType.toUpperCase().indexOf(filter2) > -1) && (drProject.toUpperCase().indexOf(filter3) > -1) ) {
                                //var projWork = value.Work;
                                var pCost = parseInt(value.ProjectCost);
                                var pcostVar = parseInt(value.ProjectCostVariance);
                                var pwork = parseInt(value.ProjectWork);
                                var pwvariance = parseInt(value.ProjectWorkVariance);
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
                                var projStartDate = value.ProjectStartDate;
                                var projfinishdate = value.ProjectFinishDate;
                                var projCost = parseFloat(value.ProjectCost).toFixed(3);
                                var prPercentCpl = parseFloat(value.ProjectPercentCompleted).toFixed(0);
                                var linkProjectSite = value.ProjectWorkspaceInternalUrl;
                                //var costKPI = value.CostKPI;
                                //console.log("costKPI= :"+costKPI);
                                //var workKPI = value.WorkKPI;
                                //console.log("workKPI= :"+workKPI);
                                //var scheduleKPI = value.ScheduleKPI;
                                //console.log("scheduleKPI= :"+scheduleKPI);
                                //var projectKPI = value.ProjectKPI;
                                //console.log("projectKPI= : "+projectKPI);
                                moment.locale('fr');

                                if (projStartDate != null) {
                                    var projStartDate = moment(projStartDate).format('L');
                                }

                                if (projfinishdate != null) {
                                    var projfinishdate = moment(projfinishdate).format('L');
                                }

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
                                //costKPI //6
                                /*if (costKPI == "No Baseline" || costKPI == null || costKPI == "No Cost") {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true'></i></td>");
                                }
                                if (costKPI == "At least 20% over baseline cost") {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:red;'></i></td>");
                                }
                                if (costKPI == "Between 10%-20% over baseline cost") {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:#ffc800;'></i></td>");
                                }
                                if (costKPI == "Less than 10% over baseline cost") {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:green;'></i></td>");
                                }*/
                                //workKPI //7
                                /*if (workKPI == "No Baseline" || workKPI == null || workKPI == "No work information") {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true'></i></td>");
                                }
                                if (workKPI == "At least 20% over baseline work") {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:red;'></i></td>");
                                }
                                if (workKPI == "Between 10%-20% over baseline work") {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:#ffc800;'></i></td>");
                                }
                                if (workKPI == "Less than 10% over baseline work") {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:green;'></i></td>");
                                }*/
                                //scheduleKPI //8
                                /*if (scheduleKPI == "No Baseline" || scheduleKPI == null) {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true'></i></td>");
                                }
                                if (scheduleKPI == "At least 20% over baseline schedule") {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:red;'></i></td>");
                                }
                                if (scheduleKPI == "Between 10%-20% over baseline schedule") {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:#ffc800;'></i></td>");
                                }
                                if (scheduleKPI == "Less than 10% over baseline schedule") {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:green;'></i></td>");
                                }*/
                                //projectKPI //9
                              /*  if (projectKPI == null) {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true'></i></td>");
                                }
                                if (projectKPI == "Troubled") {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:red;'></i></td>");
                                }
                                if (projectKPI == "On Watch") {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:#ffc800;'></i></td>");
                                }
                                if (projectKPI == "On Track") {
                                    tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:green;'></i></td>");
                                }*/
                                //tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:green;'></i></td>");
                                //tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:#ffc800;'></i></td>");
                                //tr.append("<td><i class='fa fa-circle fa-3x' aria-hidden='true' style='color:red;'></i></td>");
                                tr.append('<td style="text-align:center;font-size: medium;">'+prPercentCpl+'%<progress id="" max="100" value="'+prPercentCpl+'" style="width: 100%; height:4vh;"></progress></td>'); //10
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


                                //$("#redirectLink").click(function(e){ e.preventDefault(); window.open(this.href); });

                               
                            }


                        });



                    }
                });

            }











var responseFilterProjectType = responseFilterProjectType || [];
        var urlFilterProjectType = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectOwnerName,EnterpriseProjectTypeName,Programme";
            function FilterProjectType() {
                var input, input2, input3, input4, filter, filter2, filter3, tr, td, td2, td3, td4, i, k;
                var pOwner, pType, drProject, projetPhase;
                input = document.getElementById("mylist3");
                input2 = document.getElementById("mylist2");
                input3 = document.getElementById("mylist1");
                //input4 = document.getElementById("mylist4");
                filter = input.value.toUpperCase();
                filter2 = input2.value.toUpperCase();
                filter3 = input3.value.toUpperCase();
                //filter4 = input4.value.toUpperCase();
                $.ajax({
                    url: urlFilterProjectType,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseFilterProjectType = responseFilterProjectType.concat(data.d.results);
                            if (data.d.__next) {
                                urlFilterProjectType = data.d.__next;
                                FilterProjectType();
                            }

                        var dataResults = data.d.results;
                        var itermeidiaryObject = {};
                        $.each(responseFilterProjectType, function (key, value) {


                            if (value.ProjectOwnerName != null) {
                                pOwner = value.ProjectOwnerName;
                            }
                            else {
                                pOwner = "";
                            }
                           // console.log("pOwner: " + pOwner);


                            if (value.EnterpriseProjectTypeName != null) {
                                pType = value.EnterpriseProjectTypeName;
                            }
                            else {
                                pType = "";
                            }
                           // console.log("pType: " + pType);
                            if (value.Programme != null) {
                                drProject = value.Programme;
                            }
                            else {
                                drProject = "";
                            }
                           // console.log("drProject: " + drProject);
                            if (value.Programme != null) {
                                projetPhase = value.Programme;
                            }
                            if ((projetPhase == null) || (projetPhase.toString() == "") || (projetPhase.toString() == "null")) {
                                projetPhase = "not assigned";
                            }
                           // console.log("projetPhase: " + projetPhase);
                            if ((pOwner.toUpperCase().indexOf(filter) > -1) && (pType.toUpperCase().indexOf(filter2) > -1) && (drProject.toUpperCase().indexOf(filter3) > -1) ) {
                                var epn = value.EnterpriseProjectTypeName;
                                var som = 0;
                                if (epn != null) {
                                    itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;
                                }
                                var somme = som;
                            }


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




            var responseFilterGovernancePhase = responseFilterGovernancePhase || [];
            var urlFilterGovernancePhase = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectOwnerName,EnterpriseProjectTypeName,Programme";

            function filterGovernancePhase() {
                var input, input2, input3, input4, filter, filter2, filter3, tr, td, td2, td3, td4, i, k;
                var pOwner, pType, drProject, projetPhase;
                input = document.getElementById("mylist3");
                input2 = document.getElementById("mylist2");
                input3 = document.getElementById("mylist1");
                //input4 = document.getElementById("mylist4");
                filter = input.value.toUpperCase();
                filter2 = input2.value.toUpperCase();
                filter3 = input3.value.toUpperCase();
                //filter4 = input4.value.toUpperCase();
                $.ajax({
                    url: urlFilterGovernancePhase,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {

                        responseFilterGovernancePhase = responseFilterGovernancePhase.concat(data.d.results);
                            if (data.d.__next) {
                                urlFilterGovernancePhase = data.d.__next;
                                filterGovernancePhase();
                            }

                        var dataResults = data.d.results;
                        var itermeidiaryObject = {};
                        $.each(responseFilterGovernancePhase, function (key, value) {

                            if (value.ProjectOwnerName != null) {
                                pOwner = value.ProjectOwnerName;
                            }
                            else {
                                pOwner = "";
                            }
                            //console.log("pOwner: " + pOwner);


                            if (value.EnterpriseProjectTypeName != null) {
                                pType = value.EnterpriseProjectTypeName;
                            }
                            else {
                                pType = "";
                            }
                            //console.log("pType: " + pType);
                            if (value.Programme != null) {
                                drProject = value.Programme;
                            }
                            else {
                                drProject = "";
                            }
                            //console.log("drProject: " + drProject);
                            if (value.Programme != null) {
                                projetPhase = value.Programme;
                            }
                            if ((projetPhase == null) || (projetPhase.toString() == "") || (projetPhase.toString() == "null")) {
                                projetPhase = "not assigned";
                            }
                            //console.log("projetPhase: " + projetPhase);
                            if ((pOwner.toUpperCase().indexOf(filter) > -1) && (pType.toUpperCase().indexOf(filter2) > -1) && (drProject.toUpperCase().indexOf(filter3) > -1) ) {
                                var epn = value.Programme;
                                var som = 0;
                                if (epn != null) {
                                    itermeidiaryObject[epn] = ++itermeidiaryObject[epn] || 1;

                                }
                                var somme = som;
                            }

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


            var responseCompteNbProjFiltrer = responseCompteNbProjFiltrer || [];
            var urlCompteNbProjFiltrer = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectOwnerName,EnterpriseProjectTypeName,Programme,ProjectName";

            function compteNbProjFiltrer() {
                var input, input2, input3, input4, filter, filter2, filter3, tr, td, td2, td3, td4, i, k;
                var pOwner, pType, drProject, projetPhase;
                input = document.getElementById("mylist3");
                input2 = document.getElementById("mylist2");
                input3 = document.getElementById("mylist1");
                //input4 = document.getElementById("mylist4");
                filter = input.value.toUpperCase();
                filter2 = input2.value.toUpperCase();
                filter3 = input3.value.toUpperCase();
                //filter4 = input4.value.toUpperCase();
                var nbre = 0;

                $.ajax({
                    url: urlCompteNbProjFiltrer,
                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {

                        responseCompteNbProjFiltrer = responseCompteNbProjFiltrer.concat(data.d.results);
                            if (data.d.__next) {
                                urlCompteNbProjFiltrer = data.d.__next;
                                compteNbProjFiltrer();
                            }

                        var dataResults = data.d.results;

                        $.each(responseCompteNbProjFiltrer, function (key, value) {
                            if (value.ProjectOwnerName != null) {
                                pOwner = value.ProjectOwnerName;
                            }
                            else {
                                pOwner = "";
                            }
                           // console.log("pOwner: " + pOwner);


                            if (value.EnterpriseProjectTypeName != null) {
                                pType = value.EnterpriseProjectTypeName;
                            }
                            else {
                                pType = "";
                            }
                           // console.log("pType: " + pType);
                            if (value.Programme != null) {
                                drProject = value.Programme;
                            }
                            else {
                                drProject = "";
                            }
                           // console.log("drProject: " + drProject);
                            if (value.Programme != null) {
                                projetPhase = value.Programme;
                            }
                            if ((projetPhase == null) || (projetPhase.toString() == "") || (projetPhase.toString() == "null")) {
                                projetPhase = "not assigned";
                            }
                           // console.log("projetPhase: " + projetPhase);
                            if ((pOwner.toUpperCase().indexOf(filter) > -1) && (pType.toUpperCase().indexOf(filter2) > -1) && (drProject.toUpperCase().indexOf(filter3) > -1) ) {
                                var nomProjet = value.ProjectName;
                                if (nomProjet != null) {
                                    nbre++;
                                }
                            }


                        });
                        document.getElementById("prcount").innerHTML = nbre;
                    }
                });
            }


            var responseAllTickets = responseAllTickets || [];
              var urlAllTickets =  _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectOwnerName,EnterpriseProjectTypeName,Programme,ProjectCost,ProjectCostVariance,ProjectWork,ProjectWorkVariance";
            function costValuesFiltrer() {

                var input, input2, input3, input4, filter, filter2, filter3, tr, td, td2, td3, td4, i, k;
                var pOwner, pType, drProject, projetPhase;
                input = document.getElementById("mylist3");
                input2 = document.getElementById("mylist2");
                input3 = document.getElementById("mylist1");
                //input4 = document.getElementById("mylist4");
                filter = input.value.toUpperCase();
                filter2 = input2.value.toUpperCase();
                filter3 = input3.value.toUpperCase();
                //filter4 = input4.value.toUpperCase();
                var projCost = 0;
                var projcostvariance = 0;
                var projWork = 0;
                var pworkvariance = 0;

                $.ajax({
                    url: urlAllTickets,








                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseAllTickets = responseAllTickets.concat(data.d.results);
                        if (data.d.__next) {
                            urlAllTickets = data.d.__next;
                            costValuesFiltrer();
                        }

                        $.each(responseAllTickets, function (key, value) {
                            if (value.ProjectOwnerName != null) {
                                pOwner = value.ProjectOwnerName;
                            }
                            else {
                                pOwner = "";
                            }
                          //  console.log("pOwner: " + pOwner);


                            if (value.EnterpriseProjectTypeName != null) {
                                pType = value.EnterpriseProjectTypeName;
                            }
                            else {
                                pType = "";
                            }
                           // console.log("pType: " + pType);
                            if (value.Programme != null) {
                                drProject = value.Programme;
                            }
                            else {
                                drProject = "";
                            }
                          //  console.log("drProject: " + drProject);
                            if (value.Programme != null) {
                                projetPhase = value.Programme;
                            }
                            if ((projetPhase == null) || (projetPhase.toString() == "") || (projetPhase.toString() == "null")) {
                                projetPhase = "not assigned";
                            }
                          //  console.log("projetPhase: " + projetPhase);
                            if ((pOwner.toUpperCase().indexOf(filter) > -1) && (pType.toUpperCase().indexOf(filter2) > -1) && (drProject.toUpperCase().indexOf(filter3) > -1) ) {
                                var pCost = parseInt(value.ProjectCost);
                                var pcostVar = parseInt(value.ProjectCostVariance);
                                var pwork = parseInt(value.ProjectWork);
                                var pwvariance = parseInt(value.ProjectWorkVariance);


                                projCost = projCost + pCost;
                                projcostvariance = projcostvariance + pcostVar;
                                projWork = projWork + pwork;
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

            var responseFilterRiskNumb = responseFilterRiskNumb || [];
            var urlFilterRiskNumb = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks?$select=Owner,Title";

            function filterRiskNumb() {
                var input, input2, input3, input4, filter, filter2, filter3, tr, td, td2, td3, td4, i, k;
                var pOwner, pType, drProject, projetPhase;
                input = document.getElementById("mylist3");
                input2 = document.getElementById("mylist2");
                input3 = document.getElementById("mylist1");
                //input4 = document.getElementById("mylist4");
                filter = input.value.toUpperCase();
                filter2 = input2.value.toUpperCase();
                filter3 = input3.value.toUpperCase();
                //filter4 = input4.value.toUpperCase();
                var nbreRisks = 0;

                $.ajax({
                    url: urlFilterRiskNumb,
                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {

                        responseFilterRiskNumb = responseFilterRiskNumb.concat(data.d.results);
                            if (data.d.__next) {
                                urlFilterRiskNumb = data.d.__next;
                                filterRiskNumb();
                            }

                        var dataResults = data.d.results;

                        $.each(responseFilterRiskNumb, function (key, value) {
                            if (value.Owner != null) {
                                pOwner = value.Owner;
                            }
                            else {
                                pOwner = "";
                            }
                           // console.log("pOwner: " + pOwner);



                            if (pOwner.toUpperCase().indexOf(filter) > -1) {
                                var titreRisks = value.Title;
                                if (titreRisks != null) {
                                    nbreRisks++;
                                }
                            }


                        });
                        document.getElementById("actRisk").innerHTML = nbreRisks;
                    }
                });

            }




            var responseFilterIssueNumb = responseFilterIssueNumb || [];
            var urlFilterIssueNumb = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues?$select=Owner,Title";
            function filterIssueNumb() {
                var input, input2, input3, input4, filter, filter2, filter3, tr, td, td2, td3, td4, i, k;
                var pOwner, pType, drProject, projetPhase;
                input = document.getElementById("mylist3");
                input2 = document.getElementById("mylist2");
                input3 = document.getElementById("mylist1");
                //input4 = document.getElementById("mylist4");
                filter = input.value.toUpperCase();
                filter2 = input2.value.toUpperCase();
                filter3 = input3.value.toUpperCase();
                //filter4 = input4.value.toUpperCase();
                var nbreIssue = 0;

                $.ajax({
                    url: urlFilterIssueNumb,
                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {

                        responseFilterIssueNumb = responseFilterIssueNumb.concat(data.d.results);
                            if (data.d.__next) {
                                urlFilterIssueNumb = data.d.__next;
                                LoadProjectTypeName();
                            }

                        var dataResults = data.d.results;

                        $.each(responseFilterIssueNumb, function (key, value) {
                            if (value.Owner != null) {
                                pOwner = value.Owner;
                            }
                            else {
                                pOwner = "";
                            }
                           // console.log("pOwner: " + pOwner);



                            if (pOwner.toUpperCase().indexOf(filter) > -1) {
                                var titreIssue = value.Title;
                                if (titreIssue != null) {
                                    nbreIssue++;
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


