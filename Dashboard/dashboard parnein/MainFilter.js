function sort(tabPhase,tabProj,arrPhaseSort){
    var tabIndexPh=[];
    for (var i = 0; i < tabPhase.length; i++) {
        tabIndexPh[i]=arrPhaseSort.indexOf(tabPhase[i]);
    }
    var length = tabIndexPh.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                if(tabIndexPh[j] >= tabIndexPh[j+1]) {
                    var tmp = tabIndexPh[j]; 
                    tabIndexPh[j] = tabIndexPh[j+1]; 
                    tabIndexPh[j+1] = tmp;

                    var tmp1 = tabPhase[j]; 
                    tabPhase[j] = tabPhase[j+1]; 
                    tabPhase[j+1] = tmp1; 

                    var tmp2 = tabProj[j]; 
                    tabProj[j] = tabProj[j+1]; 
                    tabProj[j+1] = tmp2;
                }
            }        
    }
}
        function MainFilter() {
            //tableaux1 cardTask1
            $("#Divtableaux1").css("display", "none");
            $("#tableaux1").css("display", "none");
            $("#Divtableaux2").css("display", "none");
            $("#tableaux2").css("display", "none");
            $("#cardTask1").css("display", "none");
            //
            $("#maxRows1").css("display", "none");

            var devision="";
            var dept="";
            devision=document.getElementById("mylist1").value;
            dept=document.getElementById("mylist2").value;
            if (dept!="") {
                document.getElementById("pieChartTitle").innerHTML = "Chiffre d'affaire par Projet";
            }else{
                document.getElementById("pieChartTitle").innerHTML = "Chiffre d'affaire par Division";
            }
            //console.log("devision= "+devision);
            //console.log("dept= "+dept);
            var urlFilter1Selected= "";
            if (devision!="") {
                urlFilter1Selected+=" and Division%20eq%27"+devision+"%27";
            }
            if (dept!="") {
                urlFilter1Selected+=" and Service%20eq%27"+dept+"%27";
                
            }
            var deptDisplay="";
            if (dept=="IT Management") {
                /*$("#CACol").css("display", "none");
                $("#CostCol").css("display", "none");
                $("#MargeCol").css("display", "none");
                $("#SatCol").css("display", "none");*/
                deptDisplay="none";
                document.getElementById("tabThead").innerHTML='<tr>'+
                    '<th style="border-radius:10px 0px 0px 0px; width: 20%; text-align: left;">NOM DE PROJET</th>'+
                    '<th style="text-align: center;"></th>'+
                    '<th style="text-align: center;">Ingénieur du projet</th>'+
                    '<th style="text-align: center;">Date début</th>'+
                    '<th style="text-align: center;">Date fin</th>'+
                    '<th style="text-align: width: 15%;">% Achevé</th>'+
                    '<th style="text-align: center;">Glissement</th>'+
                    '<th style="text-align: center;">KPI Coût</th>'+
                    '<th style="text-align: center;">Dernière Modification</th>'+
                    '<th style="text-align: center; border-radius:0px 10px 0px 0px;">Tâches critiques</th>'+
                '</tr>';
            }else{
                /*$("#CACol").css("display", "block");
                $("#CostCol").css("display", "block");
                $("#MargeCol").css("display", "block");
                $("#SatCol").css("display", "block");*/
                document.getElementById("tabThead").innerHTML='<tr>'+
                    '<th style="border-radius:10px 0px 0px 0px; width: 20%; text-align: left;">NOM DE PROJET</th>'+
                    '<th style="text-align: center;"></th>'+
                    '<th style="text-align: center;">Ingénieur du projet</th>'+
                    '<th style="text-align: center;">Date début</th>'+
                    '<th style="text-align: center;">Date fin</th>'+
                    "<th style='text-align: center;' id='CACol'>Chiffre d'affaire</th>"+
                    '<th style="text-align: center;"id="CostCol">Coût</th>'+
                    '<th style="text-align: center;"id="MargeCol">Marge</th>'+
                    '<th style="text-align: center;"id="SatCol">Satisfaction client</th>'+
                    '<th style="text-align: width: 15%;">% Achevé</th>'+
                    '<th style="text-align: center;">Glissement</th>'+
                    '<th style="text-align: center;">KPI Coût</th>'+
                    '<th style="text-align: center;">Dernière Modification</th>'+
                    '<th style="text-align: center; border-radius:0px 10px 0px 0px;">Tâches critiques</th>'+
                '</tr>';
                deptDisplay="";
            }
            var urlProjAccF1=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27"+urlFilter1Selected;
       var responseProjAccF1=responseProjAccF1||[];
       function projAccF1() {

            $.ajax({
                url: urlProjAccF1,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProjAccF1 = responseProjAccF1.concat(data.d.results);
                    if (data.d.__next) {
                        urlProjAccF1 = data.d.__next;
                        projAccF1();
                    }
                    var numAcc=0;
                    var arrProjId=[];
                    var arrProjName=[];
                    $.each(responseProjAccF1, function (key, value) {
                        var idp=value.ProjectId;
                        var nomP=value.ProjectName;
                        arrProjId.push(idp);
                        arrProjName.push(nomP);
                    });
                    document.getElementById("nbAccid").innerHTML=0;
                    for (var i = 0; i < arrProjId.length; i++) {
                            loadNbAccidentsF1(arrProjId[i],arrProjName[i],numAcc,i,arrProjId.length);
                    }
                }
            });

        }
        projAccF1();
        function loadNbAccidentsF1(idp,nomProj,numAcc,counter,numberOfProjects){
           var urlAccProjF1=_spPageContextInfo.siteAbsoluteUrl + "/"+nomProj+"/_api/web/lists/getbytitle('Accident')/items";
           
           var responseAccProjF1=responseAccProjF1||[];
           function numbAccF1() {

                $.ajax({
                    url: urlAccProjF1,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseAccProjF1 = responseAccProjF1.concat(data.d.results);
                        if (data.d.__next) {
                            urlAccProjF1 = data.d.__next;
                            numbAccF1();
                        }
                        var numAcc=0;
                        var arrProjId=[];
                        var arrProjName=[];
                        if (responseAccProjF1.length>0) {
                            $.each(responseAccProjF1, function (key, value) {
                                numAcc++;
                                
                                 document.getElementById("nbAccid").innerHTML=numAcc;
                            });

                        }
                        
                        
                    }
                });
               
                
            }
            numbAccF1();
           }
           
            document.getElementById("chartTitle1").innerHTML='Projets par phase';
            var arrPhaseSort=["Engineering","Approvisionnement","Installation","Fin de Montage","Mise en Service","Réception Provisoire","Réception Définitive"];
            var arrPhaseIndex=[0,1,2,3,4,5,6];
            //KPIs 
        var responseDataSumFilter1 = responseDataSumFilter1 || [];
        var urlDataSumFilter1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Prixderevienttotal,ProjectCostVariance,PrixdeventeCATND,ProjectId&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27"+urlFilter1Selected;
        //////console.log("urlDataSumFilter1= "+urlDataSumFilter1);
        function loadDataSumFilter1() {
            var projCost = 0;
            var projcostvariance = 0;
            var sumPCA = 0;
            var pworkvariance = 0;
            var countProj=0;

            $.ajax({
                url: urlDataSumFilter1,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseDataSumFilter1 = responseDataSumFilter1.concat(data.d.results);
                    if (data.d.__next) {
                        urlDataSumFilter1 = data.d.__next;
                        loadDataSumFilter1();
                    }

                    $.each(responseDataSumFilter1, function (key, value) {
                        countProj++;
                        var pCost = 0;
                        if (value.Prixderevienttotal!=null) {
                            pCost=parseInt(value.Prixderevienttotal)
                        }
                        var pcostVar = parseInt(value.ProjectCostVariance);
                        
                        var pCA =0;
                        if (value.PrixdeventeCATND!=null) {
                            pCA = parseFloat(value.PrixdeventeCATND);
                        }
                        
                       


                        projCost = projCost + pCost;
                        projcostvariance = projcostvariance + pcostVar;
                        sumPCA = parseFloat(sumPCA + pCA);
                        


                    });


                    document.getElementById("prcost").innerHTML = conToMill(projCost);
                    document.getElementById("cvariance").innerHTML = conToMill(projcostvariance);
                    document.getElementById("caGlobale").innerHTML = conToMill(parseFloat(sumPCA).toFixed(0));
                    document.getElementById("prcount").innerHTML = conToMill(countProj);
                }
            });
        }
        loadDataSumFilter1();


        //Fonctions qui permet d'afficher le glissement 

//Load BarChart for GOVERNANCE
document.getElementById("Divprojchart").innerHTML='<figure class="highcharts-figure" style="width:100%;"> <div id="container"></div> </figure>';
        var responseGovernancePhaseFilter1 = responseGovernancePhaseFilter1 || [];
        var urlGovernancePhaseFilter1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,PhaseduProjet,ITPhase,Service&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27"+urlFilter1Selected;
        console.log("urlGovernancePhaseFilter1= "+urlGovernancePhaseFilter1);
        function LoadBarGovernancePhaseFilter1() {
            $.ajax({
                url: urlGovernancePhaseFilter1,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseGovernancePhaseFilter1 = responseGovernancePhaseFilter1.concat(data.d.results);
                    if (data.d.__next) {
                        urlGovernancePhaseFilter1 = data.d.__next;
                        LoadBarGovernancePhaseFilter1();
                    }
                    var arrPhase=[];
                    var arrProjN=[];
                    var projData=[];
                    var arrPh=[];
                    $.each(responseGovernancePhaseFilter1, function (key, value) {

                        var nomP=value.ProjectName;
                        var phase = '';
                                        var departement=value.Service;
                                        if (departement=="IT Management") {
                                            phase = value.ITPhase;
                                        }
                                        else if (departement=="Power System Management") {
                                            phase = value.PhaseduProjet;
                                        }
                                        
                                        console.log('phase = '+phase);
                                        //var arrDat=[];
                                        // if (arrPhase.indexOf(phase)<0) {
                                        //     arrPhase.push(phase);
                                        // }  
                                        if (phase!=null) {
                                            arrPh.push(phase);                                    
                                            arrProjN.push(nomP);                                            
                                        }

                                        //trait...
                                        ////console.log("___ __________ ___________ __________");
                                        ////console.log("arrPhase1= "+arrPh);
                                        ////console.log("arrProjN1= "+arrProjN);
                                        ////console.log("__________________________________");
                                        sort(arrPh,arrProjN,arrPhaseSort);
                                        ////console.log("__________________________________");
                                        ////console.log("arrPhase2= "+arrPh);
                                        ////console.log("arrProjN2= "+arrProjN);
                                        ////console.log("___ __________ ___________ __________");
                                        //**********************************************
                                        // var index=arrPhase.indexOf(phase);
                                        // for (var i = 0; i <= index; i++) {
                                        //     if (i!=index) {arrDat[i]=0;}
                                        //     else if (i==index) {arrDat[i]=1;}
                                        // }
                                        // projData.push(arrDat);
                    });
                    ////////console.log("arrProjN= "+arrProjN);
                    for (var ci = 0; ci < arrPh.length; ci++) {
                        var ph=arrPh[ci];
                        if (arrPhase.indexOf(ph)<0) {
                            arrPhase.push(ph);
                        } 

                        
                        var arrDat=[];
                        var index=arrPhase.indexOf(ph)
                        
                        for (var i = 0; i <= index; i++) {
                            if (i!=index) {arrDat[i]=0;}
                            else if (i==index) {arrDat[i]=1;}
                        }
                        projData.push(arrDat);
                    }
                    var arrSeries=[];
                                    for (var j = 0; j < arrProjN.length; j++) {
                                        arrSeries[j]={
                                            name: arrProjN[j],
                                            data: projData[j]
                                        }
                                    }
                                    
                                    Highcharts.chart('container', {
                                        chart: {
                                            type: 'bar'
                                        },
                                        title: {
                                            text: 'Stacked bar chart'
                                        },
                                        xAxis: {
                                            categories: arrPhase
                                        },
                                        yAxis: {
                                            min: 0,
                                            title: {
                                                text: 'Projets'
                                            }
                                        },
                                        legend: {
                                            reversed: true
                                        },
                                        plotOptions: {
                                            series: {
                                                stacking: 'normal'
                                            }
                                        },
                                        series: arrSeries
                                    });


                }
            });
        }
        LoadBarGovernancePhaseFilter1();

        document.getElementById("Divbarsline").innerHTML='<figure class="highcharts-figure" style="width:97%;"> <div id="container1"></div> </figure>';
        //Load Graph For ProjectType
        var responsePhaseChartFilter1 = responsePhaseChartFilter1 || [];
        var urlPhaseChartFilter1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,PrixdeventeCATND,Service&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27"+urlFilter1Selected;
        function LoadProjectTypeFilter1() {
            $.ajax({
                url: urlPhaseChartFilter1,


                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responsePhaseChartFilter1 = responsePhaseChartFilter1.concat(data.d.results);
                    if (data.d.__next) {
                        urlPhaseChartFilter1 = data.d.__next;
                        LoadProjectTypeFilter1();
                    }
                    
                    var pievalues=[];
                    var labels=[];
                    $.each(responsePhaseChartFilter1, function (key, value) {
                        if (value.Service!='IT Management'){
                            var projName = value.ProjectName;
                           
                            var projCA = 0;
                             if (value.PrixdeventeCATND!=null) {
                                projCA =parseFloat(value.PrixdeventeCATND).toFixed(0);
                            }
                            var pCA =0;
                
                            if (labels.indexOf(projName)==-1) {
                                labels.push(projName);
                                pievalues.push(projCA);
                            }else{
                                pievalues[labels.indexOf(projName)]=parseFloat(pievalues[labels.indexOf(projName)]+pCA);
                            }
                            

                        }
                    });

                    

                    var arrSeries=[];
                                    for (var i = 0; i < labels.length; i++) {
                                        var arrdata=[labels[i],parseFloat(pievalues[i])]
                                        arrSeries[i]=arrdata;
                                    }
                                    ////////console.log("arrSeries= "+arrSeries);
                                    ////////console.log("pievalues= "+pievalues);
                                    Highcharts.chart('container1', {
                                        chart: {
                                            type: 'pie',
                                            options3d: {
                                                enabled: true,
                                                alpha: 45
                                            }
                                        },
                                        title: {
                                            text: "Chiffre d'affaire par Projet"
                                        },
                                        legend: {
                                            reversed: true
                                        },
                                        plotOptions: {
                                            pie: {
                                                innerSize: 200,
                                                depth: 45,
                                                showInLegend: true
                                            }
                                        },
                                        series: [{
                                            name: "Chiffre d'affaire par Projet",
                                            data: arrSeries
                                        }]
                                    });

                }
            });
        }
        LoadProjectTypeFilter1();

        //Table Project 
        tableaux1 = document.getElementById("tableaux");
     tr1 = tableaux1.getElementsByTagName("tr");
     if(tr1.length>0){        
          $('#tableaux tbody').empty();
     }
     
      var responseTabProjFilter1 = responseTabProjFilter1 || [];
            var urlTabProjFilter1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,Toléranceavertissement,ToléranceAlert,ProjectOwnerName,ProjectStartDate,ProjectFinishDate,ProjectDuration,Prixderevienttotal,ProjectPercentCompleted,ProjectWorkspaceInternalUrl,PrixdeventeCATND,SatisfactionClient,ProjectFinishVariance,MargeRévisé,CostKPI,ProjectModifiedDate&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27"+urlFilter1Selected;
            function LoadTableProjectsFilter1() {

                $.ajax({
                    url: urlTabProjFilter1,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseTabProjFilter1 = responseTabProjFilter1.concat(data.d.results);
                        if (data.d.__next) {
                            urlTabProjFilter1 = data.d.__next;
                            LoadTableProjectsFilter1();
                        }
                        var ArrProjetId=[]
                        var ArrNomProjet=[];
                        var ArrLinkProjectSite=[];
                        var ArrPOwner=[];
                        var ArrProjStartDate=[];
                        var ArrProjfinishdate=[];
                        var ArrPCA=[];
                        var ArrPCost=[];
                        var ArrMarge=[];
                        var ArrSatisfaction=[];
                        var ArrPrPercentCpl=[];
                        var ArrBaseDuration=[];
                        var ArrDuration=[];
                        var ArrGliss=[];
                        var ArrFinishVariance=[];
                        var ArrCostKPI=[];
                        var ArrProjectModifiedDate=[];
                        var ArrNbTacheCritiques=[];
                        var ArrToleranceavertissement=[];
                        var ArrToleranceAlert=[];
                        var ArrBooleanService=[];
                        $.each(responseTabProjFilter1, function (key, value) {

                            var projetId = value.ProjectId;

                            var nomProjet = value.ProjectName;
                            var pOwner = value.ProjectOwnerName;
                            var projStartDate = value.ProjectStartDate;
                            var projfinishdate = value.ProjectFinishDate;
                            //var projCost = parseFloat(value.ProjectCost).toFixed(3);
                            var prPercentCpl = parseFloat(value.ProjectPercentCompleted).toFixed(0);
                            var linkProjectSite = value.ProjectWorkspaceInternalUrl;
                            var costKPI=value.CostKPI;
                            var projectModifiedDate=value.ProjectModifiedDate;
                            if (costKPI==null) {
                                costKPI="";
                            }
                            var derniereMod="";
                            if (projectModifiedDate!=null) {
                                derniereMod=moment(projectModifiedDate).format('DD/MM/YYYY');
                            }
                            var pCA =0;
                            if (value.PrixdeventeCATND!=null) {
                                pCA = parseFloat(value.PrixdeventeCATND);
                            }
                            var marge=0;
                            if (value.MargeRévisé!=null) {
                                marge=parseFloat(value.MargeRévisé);
                            }
                            
                            moment.locale('fr');

                            if (projStartDate != null) {
                                var projStartDate = moment(projStartDate).format('L');
                            }

                            if (projfinishdate != null) {
                                var projfinishdate = moment(projfinishdate).format('L');
                            }


                            //var projWork = value.Work;
                            var pCost = 0;
                            if (value.Prixderevienttotal!=null) {
                                pCost=parseInt(value.Prixderevienttotal)
                            }
                            var toleranceAvert=0;
                            if (value.Toléranceavertissement!=null) {
                                toleranceAvert=value.Toléranceavertissement;
                            }
                            var toleranceAlert=0;
                            if (value.ToléranceAlert) {
                                toleranceAlert=value.ToléranceAlert;
                            }
                            var satisfaction=value.SatisfactionClient;
                            var duration=parseFloat(value.ProjectDuration/8).toFixed(0);
                            var finishVariance=parseFloat(value.ProjectFinishVariance/8).toFixed(0);
                            ArrProjetId.push(projetId);
                            ArrNomProjet.push(nomProjet);
                            ArrLinkProjectSite.push(linkProjectSite);
                            ArrPOwner.push(pOwner);
                            ArrProjStartDate.push(projStartDate);
                            ArrProjfinishdate.push(projfinishdate);
                            ArrPCA.push(pCA);
                            ArrPCost.push(pCost);
                            ArrMarge.push(marge);
                            ArrSatisfaction.push(satisfaction);
                            ArrPrPercentCpl.push(prPercentCpl);
                            ArrDuration.push(duration);
                            ArrBaseDuration.push("Pas de reférence");
                            ArrGliss.push("Pas de reférence");
                            ArrFinishVariance.push(finishVariance);
                            ArrCostKPI.push(costKPI);
                            ArrProjectModifiedDate.push(derniereMod);
                            ArrNbTacheCritiques.push(0);
                            ArrToleranceavertissement.push(toleranceAvert);
                            ArrToleranceAlert.push(toleranceAlert);
                            ArrBooleanService.push(deptDisplay);


                            
                        });
                        for (var i = 0; i < ArrProjetId.length; i++) {
                            TabProjBaseFilter1(ArrProjetId[i],i,ArrProjetId.length,ArrProjetId,ArrNomProjet,ArrLinkProjectSite,ArrPOwner,ArrProjStartDate,ArrProjfinishdate,ArrPCA,ArrPCost,ArrMarge,ArrSatisfaction,ArrPrPercentCpl,ArrBaseDuration,ArrGliss,ArrDuration,ArrFinishVariance,ArrCostKPI,ArrProjectModifiedDate,ArrNbTacheCritiques,ArrToleranceavertissement,ArrToleranceAlert,ArrBooleanService);
                        }

                    }
                });

            }
            LoadTableProjectsFilter1();
       
        
        function TabProjBaseFilter1(idprj,indice,taille,ArrProjetId,ArrNomProjet,ArrLinkProjectSite,ArrPOwner,ArrProjStartDate,ArrProjfinishdate,ArrPCA,ArrPCost,ArrMarge,ArrSatisfaction,ArrPrPercentCpl,ArrBaseDuration,ArrGliss,ArrDuration,ArrFinishVariance,ArrCostKPI,ArrProjectModifiedDate,ArrNbTacheCritiques,ArrToleranceavertissement,ArrToleranceAlert,ArrBooleanService) {
           var responseTabProjBaseFilter1 = responseTabProjBaseFilter1 || [];
            var urlTabProjBaseFilter1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Projects(guid'"+idprj+"')/Tasks";
            function LoadTabProjBaseFilter1() {

                $.ajax({
                    url: urlTabProjBaseFilter1,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseTabProjBaseFilter1 = responseTabProjBaseFilter1.concat(data.d.results);
                        if (data.d.__next) {
                            urlTabProjBaseFilter1 = data.d.__next;
                            LoadTabProjBaseFilter1();
                        }
                        
                        $.each(responseTabProjBaseFilter1, function (key, value) {
                              var critique=value.TaskIsCritical;
                              if (critique==true) {
                                ArrNbTacheCritiques[ArrProjetId.indexOf(idprj)]+=1;
                              }                          
                        });
                        if (indice==(taille-1)) {
                            var sumVariance=0;
                            for (var i = 0; i < ArrNomProjet.length; i++) {
                                sumVariance=parseInt(parseInt(sumVariance)+parseInt(ArrFinishVariance[i]));
                            
                                var tr;
                                tr = $("<tr class='even pointer'>");
                                tr.append("<td style='text-align: left;'>" + ArrNomProjet[i] + "</td>");//0
                                tr.append("<td><a href='" + ArrLinkProjectSite[i] + "' id='redirectLink' target='_blank'><img src='/sites/pwa_dev/_catalogs/masterpage/Dashboard/portFolioDashboard/img/link.png' class='img-rounded' alt='Cinque Terre' width='20px' height='20px'></a></td>");//1
                                tr.append("<td>" + ArrPOwner[i] + "</td>"); //2
                                tr.append("<td>" + ArrProjStartDate[i] + "</td>"); //3
                                tr.append("<td>" + ArrProjfinishdate[i] + "</td>"); //4
                                
                                 tr.append("<td style='display:"+deptDisplay+";'>" + conToMill(parseFloat(ArrPCA[i]).toFixed(0)) + " </td>");
                            tr.append("<td style='display:"+deptDisplay+";'>" + conToMill(ArrPCost[i]) + " </td>");//5
                            tr.append("<td style='display:"+deptDisplay+";'>" + conToMill(parseFloat(ArrMarge[i]).toFixed(0)) + " </td>");
                                //tr.append("<td>" + satisfaction + "</td>");
                                
                                if (ArrSatisfaction[i]=="Satisfait") {
                                    tr.append("<td style='display:"+deptDisplay+";'><i class='fa-solid fa-face-grin-hearts fa-3x' style='color:#23a113;'></i></td>");
                                }else if (ArrSatisfaction[i]=="Non Satisfait") {
                                    tr.append("<td style='display:"+deptDisplay+";'><i class='fa-solid fa-face-angry fa-3x' style='color:#f53900;'></i></td>");
                                }else if (ArrSatisfaction[i]=="Moyennement satisfait") {
                                    tr.append("<td style='display:"+deptDisplay+";'><i class='fa-solid fa-face-rolling-eyes fa-3x' style='color:#f59e00;'></i></td>");
                                }
                                else{
                                    tr.append("<td style='display:"+deptDisplay+";'></td>");
                                }
                                tr.append('<td style="text-align:center;font-size: medium;">'+ArrPrPercentCpl[i]+'%<progress id="" max="100" value="'+ArrPrPercentCpl[i]+'" style="width: 100%; height:4vh;"></progress></td>'); //10
                                
                                //*********glisss************//
                                if (ArrToleranceavertissement[i]==0 && ArrToleranceAlert[i]==0) {
                                    if (ArrFinishVariance[i]<=0) {
                                        tr.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgb(51 114 12))'>" + ArrFinishVariance[i] + " Jours</td>"); 
                                    }else{
                                        tr.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))'>" + ArrFinishVariance[i] + " Jours</td>"); 
                                    }
                                }else{
                                    if (ArrFinishVariance[i]<=ArrToleranceavertissement[i]) {
                                        tr.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgb(51 114 12))'>" + ArrFinishVariance[i] + " Jours</td>");
                                    }else if ((ArrFinishVariance[i]>=ArrToleranceavertissement[i])&&(ArrFinishVariance[i]<ArrToleranceAlert[i])) {
                                        tr.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgb(216 255 0 / 85%));'>" + ArrFinishVariance[i] + " Jours</td>");
                                    }else if (ArrFinishVariance[i]>=ArrToleranceAlert[i]) {
                                        tr.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))'>" + ArrFinishVariance[i] + " Jours</td>");
                                    }
                                }
                                //********* fin glisss************//
                                

                                if (ArrCostKPI[i]=="Less than 10% over baseline cost") {
                                    tr.append("<td><i class='fa-solid fa-face-grin-hearts fa-3x' style='color:#23a113;'></i></td>");
                                }
                                else if (ArrCostKPI[i]=="At least 20% over baseline cost")  {
                                    tr.append("<td><i class='fa-solid fa-face-angry fa-3x' style='color:#f53900;'></i></td>");
                                }
                                else if (ArrCostKPI[i]=="No Baseline") {
                                    tr.append("<td>" + '<i class="fa-solid fa-circle" fa-3x style="color:#000;font-size: xx-large;"></i>'  + " </td>");
                                }
                                else if (ArrCostKPI[i]=="No Cost") {
                                    tr.append("<td>" + '<i class="fa-solid fa-circle" fa-3x style="color:#bababa;font-size: xx-large;"></i>' + " </td>");
                                }
                                else if (ArrCostKPI[i]=="Between 10%-20% over baseline cost") {
                                    tr.append("<td><i class='fa-solid fa-face-rolling-eyes fa-3x' style='color:#f59e00;'></i></td>");
                                }
                                tr.append("<td>" + ArrProjectModifiedDate[i] + " </td>");
                                tr.append("<td>" + ArrNbTacheCritiques[i] + " </td>");
                                $('#tableaux').append(tr);
                                

                            }
                            //
                            document.getElementById("gliss").innerHTML=conToMill(sumVariance);
                        }
                        

                    }
                });

            }
            LoadTabProjBaseFilter1();
       }











        //getPagination('#tableaux');
        document.getElementById("actIssue").innerHTML =0;
        document.getElementById("actRisk").innerHTML =0;
        var responseIssueRisqueFilter1=responseIssueRisqueFilter1 || [];
var urlIssueRisqueFilter1=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27"+urlFilter1Selected;
function getIssueRiskFilter1() {
    $.ajax({
                url: urlIssueRisqueFilter1,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseIssueRisqueFilter1 = responseIssueRisqueFilter1.concat(data.d.results);
                    if (data.d.__next) {
                        urlIssueRisqueFilter1 = data.d.__next;
                        getIssueRiskFilter1();
                    }
                   var arrId=[];
                   var arrRisks=[];
                   var arrIssues=[];
                    $.each(responseIssueRisqueFilter1, function (key, value) {
                        var id=value.ProjectId;
                        arrId.push(id);
                        
                    });
                    for (var i = 0; i < arrId.length; i++) {
                        loadIssueRiskFilter1(arrId[i],arrRisks,arrIssues);
                    }
                }
            });
}
getIssueRiskFilter1();
//loadIssueRiskFilter1
function loadIssueRiskFilter1(id,arrRisks,arrIssues) {
    //Load Number Of All Issues
        var responseAllIssuesFilter1 = responseAllIssuesFilter1 || [];
        var urlAllIssuesFilter1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues?$select=Title&$filter=ProjectId eq guid'"+id+"'";
        //////////console.log("urlAllIssuesFilter1= "+urlAllIssuesFilter1);
        function NumberOfAllIssuesFilter1() {
            var nbreIssue = 0;
            var probArr=[];
            $.ajax({
                url: urlAllIssuesFilter1,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseAllIssuesFilter1 = responseAllIssuesFilter1.concat(data.d.results);
                    if (data.d.__next) {
                        urlAllIssuesFilter1 = data.d.__next;
                        NumberOfAllIssuesFilter1();
                    }

                    $.each(responseAllIssuesFilter1, function (key, value) {
                        var titreIssue = value.Title;
                        ////////console.log("titreIssue= "+titreIssue);
                        
                        probArr.push(titreIssue);
                        

                    });
                    for (var i = 0; i < probArr.length; i++) {
                        arrIssues.push(probArr[i]);
                    }
                    ////////console.log("arrIssues= "+arrIssues);
document.getElementById("actIssue").innerHTML = arrIssues.length;
                    

                }
            });
        }
        NumberOfAllIssuesFilter1();
        //_spBodyOnLoadFunctionNames.push("NumberOfAllIssuesFilter1");



        //Load Number Of All Risks
        var responseAllRsiksFilter1 = responseAllRsiksFilter1 || [];
        var urlAllRisksFilter1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks?$select=Title&$filter=ProjectId eq guid'"+id+"'";
        //////////console.log("urlAllRisksFilter1= "+urlAllRisksFilter1);
        function NumberOfAllRisksFilter1() {
            var nbreRisks = 0;

            $.ajax({
                url: urlAllRisksFilter1,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseAllRsiksFilter1 = responseAllRsiksFilter1.concat(data.d.results);
                    if (data.d.__next) {
                        urlAllRisksFilter1 = data.d.__next;
                        NumberOfAllRisksFilter1();
                    }
                    var risqueArr=[];
                    $.each(responseAllRsiksFilter1, function (key, value) {
                        var titreRisks = value.Title;
                        ////////console.log("titreRisks= "+titreRisks);
                        arrRisks
                        risqueArr.push(titreRisks);
                       

                    });
                    for (var i = 0; i < risqueArr.length; i++) {
                        arrRisks.push(risqueArr[i]);
                    }
                     ////////console.log("arrRisks= "+arrRisks);
        
        document.getElementById("actRisk").innerHTML = arrRisks.length;
                }
            });
        }
        NumberOfAllRisksFilter1();
        
       
}

        }