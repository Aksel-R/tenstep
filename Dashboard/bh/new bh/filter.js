function filter() {
    
	var chaineFilter="";
    var rad1 = document.getElementById('flexRadioDefault1');
    var rad2 = document.getElementById('flexRadioDefault2');
    var voletSel="";
    var progSel="";
    voletSel=document.getElementById("mylist2").value;
    progSel=document.getElementById("mylist3").value;
    //console.log("test= "+rad1.checked)
    if (rad1.checked) {
      chaineFilter="ProgrammeParent eq'"+progSel+"'";
    }else if (rad2.checked) {
      chaineFilter="Volet eq'"+voletSel+"'";
    }
    var projSel="";
	projSel=document.getElementById("mylist1").value;
	var urlFilter="";
	if ((progSel != "")||(voletSel != "")) {
		urlFilter="$filter="+chaineFilter+"%20and%20ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27";
		
	}
	if (projSel!="") {
		urlFilter="$filter=ProjectId%20eq%20guid%27"+projSel+"%27";
	}
	//
	$('#nbPV').hide();
	if ((voletSel=="")&&(projSel=="")&&(progSel == "")) {
		location.reload(true);
	}
	var responseFilterNumberOfProjects = responseFilterNumberOfProjects || [];
        var urlFilterNumberOfProjects = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,Volet&"+urlFilter;
        console.log('urlFilterNumberOfProjects= '+urlFilterNumberOfProjects);
        function LoadFilterAllNumberProject() {
            var nbre = 0;
            var nbrePG = 0;
            var nbrePR = 0;

            $.ajax({
                url: urlFilterNumberOfProjects,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseFilterNumberOfProjects = responseFilterNumberOfProjects.concat(data.d.results);
                    if (data.d.__next) {
                        urlNumberOfProjects = data.d.__next;
                        LoadFilterAllNumberProject();
                    }
                    var arrV=[];
                    $.each(responseFilterNumberOfProjects, function (key, value) {
                        var nomProjet = value.ProjectName;
                        var volet = value.Volet;
                        if (arrV.indexOf(volet)<0) {
                          arrV.push(volet);
                        }
                        nbre++;
                        

                    });
                    document.getElementById("portefeuillecount").innerHTML = arrV.length;
                    document.getElementById("prcount").innerHTML = nbre;
                    
                }
            });
        }
        LoadFilterAllNumberProject();
        // _spBodyOnLoadFilterFunctionNames.push("LoadFilterAllNumberProject");


        //Load Number Of All Project
        var responseNumberOfProjectsStatutPriorityFilter = responseNumberOfProjectsStatutPriorityFilter || [];
        var urlNumberOfProjectsStatutPriorityFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=StatutProjet,Priorite&"+urlFilter;
        function LoadFilterAllNumberProjectStatutsPriority() {
            var THaute=0;
                    var Haute=0;
                    var Moyenne=0;
                    var Basse=0;
                    var ARisque=0;
                    var Conforme=0;
                    var ENSouffrance=0;

                    var THauteNB;
                    var HauteNB;
                    var MoyenneNB;
                    var BasseNB;


                    var ARisqueNB;
                    var ConformeNB;
                    var ENSouffranceNB;

            $.ajax({
                url: urlNumberOfProjectsStatutPriorityFilter,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseNumberOfProjectsStatutPriorityFilter = responseNumberOfProjectsStatutPriorityFilter.concat(data.d.results);
                    if (data.d.__next) {
                        urlNumberOfProjectsStatutPriorityFilter = data.d.__next;
                        LoadFilterAllNumberProjectStatutsPriority();
                    }

                    

                    $.each(responseNumberOfProjectsStatutPriorityFilter, function (key, value) {
                        var StatutProjet = value.StatutProjet;
                        var Priorite = value.Priorite;
                        

                        //Par Statut
                        if(StatutProjet == "A risque"){
                            ARisque++;
                        }
                        //console.log("ARisque " + ARisque);

                        if(StatutProjet == "En souffrance"){
                            ENSouffrance++;
                        }

                        if(StatutProjet == "Conforme"){
                            Conforme++;
                        }






                    });

                    document.getElementById("ARisque").innerHTML = ARisque;
                    document.getElementById("ENSouffrance").innerHTML = ENSouffrance;
                    document.getElementById("Conforme").innerHTML = Conforme;




                    
                }
            });
        }
        LoadFilterAllNumberProjectStatutsPriority();

        //Load Number Of All Project
        var responseNumberOfProjectsStatutEtatFilter = responseNumberOfProjectsStatutEtatFilter || [];
        var urlNumberOfProjectsStatutEtatFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=EtatProjet&"+urlFilter;
        function LoadAllNumberProjectStatutsEtatFilter() {
                        var TAbandon = 0;
                        var TCloture = 0;
                        var TDemarrage = 0;
                        var TExecSurv = 0;
                        var TPlanif = 0;
                        var TPropos = 0;
                        var TStandBy = 0;

            $.ajax({
                url: urlNumberOfProjectsStatutEtatFilter,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseNumberOfProjectsStatutEtatFilter = responseNumberOfProjectsStatutEtatFilter.concat(data.d.results);
                    if (data.d.__next) {
                        urlNumberOfProjectsStatutEtatFilter = data.d.__next;
                        LoadAllNumberProjectStatutsEtatFilter();
                    }else if(!data.d.__next)
                                            {

                    var TAbandon = 0;
                        var TCloture = 0;
                        var TDemarrage = 0;
                        var TExecSurv = 0;
                        var TPlanif = 0;
                        var TPropos = 0;
                        var TStandBy = 0;
                        if(responseNumberOfProjectsStatutEtatFilter.length>0)                     
                                { 

                    $.each(responseNumberOfProjectsStatutEtatFilter, function (key, value) {
                        var EtatProjet = value.EtatProjet;
                        
                        
                        if(EtatProjet == "Abandon"){
                            TAbandon++;
                        }
                        if(EtatProjet == "Clôture"){
                            TCloture++;
                        }
                        if(EtatProjet == "Démarrage"){
                            TDemarrage++;
                        }
                        if(EtatProjet == "Exécution et Surveillance"){
                            TExecSurv++;
                        }
                        if(EtatProjet == "Planification"){
                            TPlanif++;
                        }
                        if(EtatProjet == "Proposition"){
                            TPropos++;
                        }
                        if(EtatProjet == "Stand By"){
                            TStandBy++;
                        }
                        
                        
                        
                        
                        
                        




                    });

                    document.getElementById("TAbandon").innerHTML = TAbandon;
                    document.getElementById("TCloture").innerHTML = TCloture;
                    document.getElementById("TDemarrage").innerHTML = TDemarrage;
                    document.getElementById("TExecSurv").innerHTML = TExecSurv;
                    document.getElementById("TPlanif").innerHTML = TPlanif;
                    document.getElementById("TPropos").innerHTML = TPropos;
                    document.getElementById("TStandBy").innerHTML = TStandBy;


                    


                     }  

      }
                    
                }
            });
        }
        LoadAllNumberProjectStatutsEtatFilter();

        var responseFilterDataSum = responseFilterDataSum || [];
        var urlFilterDataSum = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectActualCost,ProjectCostVariance,ProjectWork,ProjectWorkVariance&"+urlFilter;

        function LoadFilterDataSum() {
            var projCost = 0;
            var projcostvariance = 0;
            var projWork = 0;
            var pworkvariance = 0;
            var sommeCoutReel = 0;
            var sommeCoutRestant = 0;

            $.ajax({
                url: urlFilterDataSum,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseFilterDataSum = responseFilterDataSum.concat(data.d.results);
                    if (data.d.__next) {
                        urlDataSum = data.d.__next;
                        LoadFilterDataSum();
                    }

                    $.each(responseFilterDataSum, function (key, value) {
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
        LoadFilterDataSum();
        //_spBodyOnLoadFilterFunctionNames.push("LoadFilterDataSum"); 

        if ((voletSel != "")||(projSel!="")) {
            $('#principalChart').show();
            $('#Filter1Chart').hide();
            //LoadFilter BarChart for GOVERNANCE
            var responseFilterGovernancePhase = responseFilterGovernancePhase || [];
            var urlFilterGovernancePhase = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectPercentCompleted&"+urlFilter
            //console.log('urlFilterGovernancePhase '+urlFilterGovernancePhase)
            function LoadFilterBarGovernancePhase() {
                $.ajax({
                    url: urlFilterGovernancePhase,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseFilterGovernancePhase = responseFilterGovernancePhase.concat(data.d.results);
                        if (data.d.__next) {
                            urlGovernancePhase = data.d.__next;
                            LoadFilterBarGovernancePhase();
                        }
                        var itermeidiaryObject = {};
                         var labels=[];
                        var pievalues=[];
                        var pievalues1=[];
                        var countV=[];
                        $.each(responseFilterGovernancePhase, function (key, value) {

                            var epn = value.ProjectName;
                            var ach = parseFloat(value.ProjectPercentCompleted);
                            if (labels.indexOf(epn)<0) {
                              labels.push(epn);
                              pievalues1.push(ach);
                              countV.push(1);
                            }else{
                              pievalues1[labels.indexOf(epn)]+=parseFloat(ach);
                              countV[labels.indexOf(epn)]++;
                            }
                            
                           
                        });
                        for (var i = 0; i < pievalues1.length; i++) {
                          pievalues[i]=parseFloat(pievalues1[i]/countV[i]).toFixed(0);
                        }


                        


                       

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
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850","#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850","#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850","#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
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
                                              labelString: "projets"
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
            LoadFilterBarGovernancePhase();
        }else if (progSel != "") {
            $('#principalChart').hide();
            $('#Filter1Chart').show();
            var responseFilterVolet = responseFilterVolet || [];
            var urlFilterVolet = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Volet,ProjectPercentCompleted&"+urlFilter
            //console.log('urlFilterVolet '+urlFilterVolet)
            function LoadFilterBarVolet() {
                $.ajax({
                    url: urlFilterVolet,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseFilterVolet = responseFilterVolet.concat(data.d.results);
                        if (data.d.__next) {
                            urlVolet = data.d.__next;
                            LoadFilterBarVolet();
                        }
                        var itermeidiaryObject = {};
                         var labels=[];
                        var pievalues=[];
                        var pievalues1=[];
                        var countV=[];
                        $.each(responseFilterVolet, function (key, value) {

                            var epn = value.Volet;
                            var ach = parseFloat(value.ProjectPercentCompleted);
                            if (labels.indexOf(epn)<0) {
                              labels.push(epn);
                              pievalues1.push(ach);
                              countV.push(1);
                            }else{
                              pievalues1[labels.indexOf(epn)]+=parseFloat(ach);
                              countV[labels.indexOf(epn)]++;
                            }
                            
                           
                        });
                        for (var i = 0; i < pievalues1.length; i++) {
                          pievalues[i]=parseFloat(pievalues1[i]/countV[i]).toFixed(0);
                        }


                        


                       

                        var ctx1 = document.getElementById("projchart0").getContext('2d');

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
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850","#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850","#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
                                        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850","#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850",
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
                                              labelString: "projets par Volet"
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
            LoadFilterBarVolet();
        }
        
        



        var colors = ["#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];


      
        //_spBodyOnLoadFilterFunctionNames.push("LoadFilterProjectType");          

        var colors = ["#455c73", "#3498db", "#26b99a", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"];

         
        //LoadFilter All Value in table 

        //Table Project 
        var responseFilterTabProj = responseFilterTabProj || [];
        var urlFilterTabProj = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectWorkspaceInternalUrl,ProjectOwnerName,Volet,ProjectId,ProjectDuration,ProjectName,ProjectStartDate,ProjectFinishDate,ProjectPercentCompleted,ProjectActualCost,ProjectActualWork,ProjectWorkVariance,ProjectWork,ProjectCost,ProgrammeParent&"+urlFilter;
        function LoadFilterTableProjects() {
            var sommeCoutReels = 0;
            var sommecoutRestant =0;
            $.ajax({
                url: urlFilterTabProj,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseFilterTabProj = responseFilterTabProj.concat(data.d.results);
                    var c=0;
                    if (data.d.__next) {
                        c++;
                        urlTabProj = data.d.__next;
                        LoadFilterTableProjects();
                    }

                    tr1 = tableaux.getElementsByTagName("tr");
                    if(tr1.length>0){
                    $('#tableaux tbody').empty();
                    }


                    var arrayOwnerName = [];
                    var arrayProgramme = [];
                    var arrayTypeProjet = [];
                    var arrayProjectId = [];



                    $.each(responseFilterTabProj, function (key, value) {

                        var projetId = value.ProjectId;
                        var ProgrammeParent = value.ProgrammeParent;
                        if(ProgrammeParent ==null)
                        {
                            ProgrammeParent = "Pas de programme assigné";
                        }

                        var Prog = "";
                        
                        if (value.Volet == null) {
                            Prog = "Pas de Volet assigné";
                        }
                        else{
                            Prog = value.Volet;
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
                        var tbodyRef = document.querySelector('#tableaux tbody');
                        tr = $("<tr class='even pointer'>");
                        tr.append("<td>"+(tbodyRef.rows.length+ 1) +"</td>");
                        tr.append("<td>" + nomProjet + "</td>");//0
                        tr.append("<td><a href=http://fsharepoint/sites/PWABH/project%20detail%20pages/schedule.aspx?projuid="+projetId+"&ret=0 id='redirectLink' target='_blank'><img src='/sites/PWABH/_catalogs/masterpage/Dashboard/portFolioDashboard/img/link.png' class='img-rounded' alt='Cinque Terre' width='20px' height='20px'></a></td>");//1
                        tr.append("<td>" + Prog + "</td>"); //2
                        tr.append("<td>" + ProgrammeParent + "</td>"); //2
                        
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




                        //--------------------------------------Coloration Tableau ----------------------------

                      
                                    /*$('#tableaux tr').each(function() {
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
                                    
                        //-------------------------------------------------------------------------------------







                    });
                }
            });

        }
        LoadFilterTableProjects();














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