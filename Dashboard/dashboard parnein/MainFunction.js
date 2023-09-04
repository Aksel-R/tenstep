function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}
function MainFunction()
{
    
    var proj=document.getElementById("mylist3").value;
    ////////console.log("proj= "+proj);
    var urlFilter1Selected1= "";
    var devisionSel=document.getElementById("mylist1").value;
        var deptSel=document.getElementById("mylist2").value;
        var nomProjet111 =  getSelectedText("mylist3");
    if (proj!="") {
        $("#Divtableaux1").css("display", "block");
        $("#tableaux1").css("display", "block");
        $("#Divtableaux2").css("display", "block");
        $("#tableaux2").css("display", "block");
        $("#cardTask1").css("display", "block");
        $("#cardPhaseName").css("display", "block");
        $("#cardNbProjet").css("display", "none");
        $("#maxRows1").css("display", "block");
        
        if ((devisionSel=="")&&(deptSel=="")) {
            document.getElementById("projTitle").innerHTML = '<i class="fa fa-dashboard"></i>' + ' '+nomProjet111+';';
        }else{
            document.getElementById("projTitle").innerHTML += ' '+nomProjet111+';';
        }
        document.getElementById("chartTitle1").innerHTML='Suivi Marge/Coût';
       // $("#phaseProj").css("display", "none");
        document.getElementById("pieChartTitle").innerHTML = "Coût par Phase";
        urlFilter1Selected1+=" and ProjectId%20eq%20guid%27"+proj+"%27";


               var urlProjAccF2=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27"+urlFilter1Selected1;
       var responseProjAccF2=responseProjAccF2||[];
       function projAccF2() {

            $.ajax({
                url: urlProjAccF2,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProjAccF2 = responseProjAccF2.concat(data.d.results);
                    if (data.d.__next) {
                        urlProjAccF2 = data.d.__next;
                        projAccF2();
                    }
                    var numAcc=0;
                    var arrProjId=[];
                    var arrProjName=[];
                    $.each(responseProjAccF2, function (key, value) {
                        var idp=value.ProjectId;
                        var nomP=value.ProjectName;
                        arrProjId.push(idp);
                        arrProjName.push(nomP);
                    });
                    document.getElementById("nbAccid").innerHTML=0;
                    for (var i = 0; i < arrProjId.length; i++) {
                            loadNbAccidentsF2(arrProjId[i],arrProjName[i],numAcc,i,arrProjId.length);
                    }
                }
            });

        }
        projAccF2();
        function loadNbAccidentsF2(idp,nomProj,numAcc,counter,numberOfProjects){
           var urlAccProjF2=_spPageContextInfo.siteAbsoluteUrl + "/"+nomProj+"/_api/web/lists/getbytitle('Accident')/items";
           
           var responseAccProjF2=responseAccProjF2||[];
           function numbAccF2() {

                $.ajax({
                    url: urlAccProjF2,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseAccProjF2 = responseAccProjF2.concat(data.d.results);
                        if (data.d.__next) {
                            urlAccProjF2 = data.d.__next;
                            numbAccF2();
                        }
                        var numAcc=0;
                        var arrProjId=[];
                        var arrProjName=[];
                        if (responseAccProjF2.length>0) {
                            $.each(responseAccProjF2, function (key, value) {
                                numAcc++;
                                
                                 document.getElementById("nbAccid").innerHTML=numAcc;
                            });

                        }
                        
                        
                    }
                });
               
                
            }
            numbAccF2();
           }
       

        var responseDataSumFilter2 = responseDataSumFilter2 || [];
        var urlDataSumFilter2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectCostVariance,PrixdeventeCATND,ProjectId&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27"+urlFilter1Selected1;

        function loadDataSumFilter2() {
            var projCost = 0;
            var projcostvariance = 0;
            var sumPCA = 0;
            var pworkvariance = 0;
            var countProj=0;

            $.ajax({
                url: urlDataSumFilter2,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseDataSumFilter2 = responseDataSumFilter2.concat(data.d.results);
                    if (data.d.__next) {
                        urlDataSumFilter2 = data.d.__next;
                        loadDataSumFilter2();
                    }

                    $.each(responseDataSumFilter2, function (key, value) {
                        countProj++;
                        var pCost = parseInt(value.ProjectCost);
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
        loadDataSumFilter2();



 //Table Project 
        tableauxPrjt = document.getElementById("tableaux");
     tr1 = tableauxPrjt.getElementsByTagName("tr");
     if(tr1.length>0){        
          $('#tableaux tbody').empty();
     }
            var responseTabProjFilter2 = responseTabProjFilter2 || [];
            var urlTabProjFilter2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectName,ProjectOwnerName,ProjectStartDate,ProjectFinishDate,ProjectDuration,Prixderevienttotal,ProjectPercentCompleted,ProjectWorkspaceInternalUrl,PrixdeventeCATND,SatisfactionClient,ProjectFinishVariance,MargeRévisé,CostKPI,ProjectModifiedDate,Service&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27"+urlFilter1Selected1;
            function LoadTableProjectsFilter2() {

                $.ajax({
                    url: urlTabProjFilter2,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseTabProjFilter2 = responseTabProjFilter2.concat(data.d.results);
                        if (data.d.__next) {
                            urlTabProjFilter2 = data.d.__next;
                            LoadTableProjectsFilter2();
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
                        var deptDisplay="";
                        $.each(responseTabProjFilter2, function (key, value) {

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
                            var dept0=value.Service;
                            var boolServ="";
                            if (dept0=="IT Management") {
                                boolServ="none";
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
                            deptDisplay=boolServ;
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

                            
                        });
                        for (var i = 0; i < ArrProjetId.length; i++) {
                            tableBas00Filter2(ArrProjetId[i],i,ArrProjetId.length,ArrProjetId,ArrNomProjet,ArrLinkProjectSite,ArrPOwner,ArrProjStartDate,ArrProjfinishdate,ArrPCA,ArrPCost,ArrMarge,ArrSatisfaction,ArrPrPercentCpl,ArrBaseDuration,ArrGliss,ArrDuration,ArrFinishVariance,ArrCostKPI,ArrProjectModifiedDate,ArrNbTacheCritiques,ArrToleranceavertissement,ArrToleranceAlert,deptDisplay);
                        }

                    }
                });

            }
            LoadTableProjectsFilter2();
       
        
        function tableBas00Filter2(idprj,indice,taille,ArrProjetId,ArrNomProjet,ArrLinkProjectSite,ArrPOwner,ArrProjStartDate,ArrProjfinishdate,ArrPCA,ArrPCost,ArrMarge,ArrSatisfaction,ArrPrPercentCpl,ArrBaseDuration,ArrGliss,ArrDuration,ArrFinishVariance,ArrCostKPI,ArrProjectModifiedDate,ArrNbTacheCritiques,ArrToleranceavertissement,ArrToleranceAlert,deptDisplay) {
           var responseTabProjBase00Filter2 = responseTabProjBase00Filter2 || [];
            var urlTabProjBase00Filter2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Projects(guid'"+idprj+"')/Tasks";
            function LoadTabProjBase00Filter2() {

                $.ajax({
                    url: urlTabProjBase00Filter2,

                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responseTabProjBase00Filter2 = responseTabProjBase00Filter2.concat(data.d.results);
                        if (data.d.__next) {
                            urlTabProjBase00Filter2 = data.d.__next;
                            LoadTabProjBase00Filter2();
                        }
                        
                        $.each(responseTabProjBase00Filter2, function (key, value) {
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
            LoadTabProjBase00Filter2();
       }

        document.getElementById("actIssue").innerHTML =0;
        document.getElementById("actRisk").innerHTML =0;
        var responseIssueRisqueFilter2=responseIssueRisqueFilter2 || [];
var urlIssueRisqueFilter2=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27"+urlFilter1Selected1;
function getIssueRiskFilter2() {
    $.ajax({
                url: urlIssueRisqueFilter2,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseIssueRisqueFilter2 = responseIssueRisqueFilter2.concat(data.d.results);
                    if (data.d.__next) {
                        urlIssueRisqueFilter2 = data.d.__next;
                        getIssueRiskFilter2();
                    }
                   var arrId=[];
                   var arrRisks=[];
                   var arrIssues=[];
                    $.each(responseIssueRisqueFilter2, function (key, value) {
                        var id=value.ProjectId;
                        arrId.push(id);
                        
                    });
                    for (var i = 0; i < arrId.length; i++) {
                        loadIssueRiskFilter2(arrId[i],arrRisks,arrIssues);
                    }
                }
            });
}
getIssueRiskFilter2();
//loadIssueRiskFilter2
function loadIssueRiskFilter2(id,arrRisks,arrIssues) {
    //Load Number Of All Issues
        var responseAllIssuesFilter2 = responseAllIssuesFilter2 || [];
        var urlAllIssuesFilter2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues?$select=Title&$filter=ProjectId eq guid'"+id+"'";
        //////////console.log("urlAllIssuesFilter2= "+urlAllIssuesFilter2);
        function NumberOfAllIssuesFilter2() {
            var nbreIssue = 0;
            var probArr=[];
            $.ajax({
                url: urlAllIssuesFilter2,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseAllIssuesFilter2 = responseAllIssuesFilter2.concat(data.d.results);
                    if (data.d.__next) {
                        urlAllIssuesFilter2 = data.d.__next;
                        NumberOfAllIssuesFilter2();
                    }

                    $.each(responseAllIssuesFilter2, function (key, value) {
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
        NumberOfAllIssuesFilter2();
        //_spBodyOnLoadFunctionNames.push("NumberOfAllIssuesFilter2");



        //Load Number Of All Risks
        var responseAllRsiksFilter2 = responseAllRsiksFilter2 || [];
        var urlAllRisksFilter2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks?$select=Title&$filter=ProjectId eq guid'"+id+"'";
        //////////console.log("urlAllRisksFilter2= "+urlAllRisksFilter2);
        function NumberOfAllRisksFilter2() {
            var nbreRisks = 0;

            $.ajax({
                url: urlAllRisksFilter2,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseAllRsiksFilter2 = responseAllRsiksFilter2.concat(data.d.results);
                    if (data.d.__next) {
                        urlAllRisksFilter2 = data.d.__next;
                        NumberOfAllRisksFilter2();
                    }
                    var risqueArr=[];
                    $.each(responseAllRsiksFilter2, function (key, value) {
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
        NumberOfAllRisksFilter2();
        
       
}

       var responseGovernancePhaseFilter2 = responseGovernancePhaseFilter2 || [];
        var urlGovernancePhaseFilter2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=PhaseduProjet&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27"+urlFilter1Selected1;
        //////console.log("urlGovernancePhaseFilter2 === "+ urlGovernancePhaseFilter2);
        function LoadBarGovernancePhaseFilter2() {
            $.ajax({
                url: urlGovernancePhaseFilter2,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseGovernancePhaseFilter2 = responseGovernancePhaseFilter2.concat(data.d.results);
                    if (data.d.__next) {
                        urlGovernancePhaseFilter2 = data.d.__next;
                        LoadBarGovernancePhaseFilter2();
                    }
                    var itermeidiaryObject = {};
                    $.each(responseGovernancePhaseFilter2, function (key, value) {

                        var epn = value.PhaseduProjet;
                        var som = 0;
                        if((epn == "Avance") || (epn == null) || (epn == "")){
                             document.getElementById("phaseName").innerHTML = "Phase non affecter";

                        }else{
                            document.getElementById("phaseName").innerHTML = value.PhaseduProjet;
                        }
                       
                       
                    });



                }
            });
        }
        LoadBarGovernancePhaseFilter2();
        
var responseBarchart = responseBarchart || [];
    var urlBarchart = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=PrixdeventeCATND,PrixderevientréviséTotalTND,Prixderevienttotal,Marge,MargeRévisé&$filter=ProjectId%20ne%20guid%270000cf75-fb12-4ffc-a404-aec4f3258a9c%27"+urlFilter1Selected1;
document.getElementById("Divprojchart").innerHTML='<div class="col-lg-4 col-sx-12"><canvas id="myChart1"></canvas></div><div class="col-lg-4 col-sx-12"><canvas id="myChart2"></canvas></div><div class="col-lg-4 col-sx-12"><canvas id="myChart3"></canvas></div>';
    function loadBarchart() {
////console.log("urlBarchart= "+urlBarchart);
        $.ajax({
            url: urlBarchart,
            method: "GET",
            dataType: "json",
            headers: { Accept: "application/json;odata=verbose" },
            success: function (data) {
                responseBarchart = responseBarchart.concat(data.d.results);
                if (data.d.__next) {
                    urlBarchart = data.d.__next;
                    loadBarchart();
                }
                var countProj = 0;
                var aDatasets1=[];
                var aDatasets2=[];
                var aDatasets3=[];
                var aDatasets4=[];
                var labArr1=["Marge"];
                var labArr2=["Coût"];
                var sumBudg=0;
                var sumBudgRev=0;
                var sumMarge=0;
                var sumMargeRev=0;
                var avgMarge=0;
                var avgMargeRev=0;
                var countProj=0;
                var avgMargeDinar=0;
                var avgMargeRevDinar=0;
                var sommeCAG=0;
                aDatasets11=[];
                aDatasets33=[];
                $.each(responseBarchart, function (key, value) {
                    countProj++;
                    var caG=0;
                    if (value.PrixdeventeCATND!=null) {
                        caG=parseFloat(value.PrixdeventeCATND);
                    }
                    sommeCAG=parseFloat(parseFloat(caG)+parseFloat(sommeCAG));
                    var budget=0;
                    if (value.Prixderevienttotal!=null) {
                        budget=value.Prixderevienttotal;
                    }
                    var budgetAch=0;
                    if (value.PrixderevientréviséTotalTND!=null) {
                        budgetAch=value.PrixderevientréviséTotalTND;
                    }
                    var marge=0;
                    if (value.Marge!=null) {
                        marge=value.Marge;
                    }
                    ////console.log("marge= "+marge);
                    var margeRev=0;
                    if (value.MargeRévisé!=null) {
                        margeRev=value.MargeRévisé;
                    }
                    ////console.log("margeRev= "+margeRev);
                    sumBudg=parseFloat(sumBudg)+parseFloat(budget);
                    sumBudgRev=parseFloat(sumBudgRev)+parseFloat(budgetAch);
                    sumMarge=parseFloat(sumMarge)+parseFloat(marge);
                    sumMargeRev=parseFloat(sumMargeRev)+parseFloat(margeRev);
                });

                avgMarge=parseFloat(sumMarge/countProj).toFixed(2);
                ////console.log("avgMarge= "+avgMarge);
                avgMargeRev=parseFloat(sumMargeRev/countProj).toFixed(2);
                ////console.log("avgMargeRev= "+avgMargeRev);
                avgMargeDinar=parseFloat((parseFloat(avgMarge)*parseFloat(sommeCAG))/100).toFixed(0);
                avgMargeRevDinar=parseFloat((parseFloat(avgMargeRev)*parseFloat(sommeCAG))/100).toFixed(0);
                aDatasets1.push(avgMarge);
                aDatasets3.push(avgMargeRev);
                aDatasets2.push(sumBudg);
                aDatasets4.push(sumBudgRev);
                
                aDatasets11.push(avgMargeDinar);
                aDatasets33.push(avgMargeRevDinar);
                
    var ctx = document.getElementById("myChart1");
    var myChart = new Chart(ctx, {
     type: 'bar',
     data: {
      labels: labArr1,
      datasets: [
       
       {
        label: 'Sales',
                
        fill: false,
        data: aDatasets1,
        backgroundColor: '#ffac65',
       },
              {
        label: 'Projects',
                
        fill: false,
        data: aDatasets3,
        backgroundColor: '#4ACDE3',
       },
      ]
     },
     options: {
      scales: {
      
       yAxes: [{
        ticks: {
         //min: 0,
         callback: function (value) { return value + "%" }
        },
        scaleLabel: {
         display: false,
         fontSize: 15,
         labelString: " "
        }
       }],
       xAxes: [{
        scaleLabel: {
         display: false,
         fontSize: 18,
         labelString: " "
        }
       }]
      },
      title: {
       display: false,
       text: ' '
      },
      responsive: true,
      tooltips: {
       callbacks: {
        labelColor: function (tooltipItem, chart) {
         return {
          borderColor: '#4ACDE3',
          backgroundColor: '#4ACDE3'
         }
        }
       }
      },
      legend: {
       labels: {
        // This more specific font property overrides the global property
        fontColor: 'black',
       }
      }
     }
    });

        var ctx2 = document.getElementById("myChart3");
    var myChart = new Chart(ctx2, {
     type: 'bar',
     data: {
      labels: labArr1,
      datasets: [
       
       {
        label: 'Sales',
                
        fill: false,
        data: aDatasets11,
        backgroundColor: '#ffac65',
       },
              {
        label: 'Projects',
                
        fill: false,
        data: aDatasets33,
        backgroundColor: '#4ACDE3',
       },
      ]
     },
     options: {
      scales: {
      
       yAxes: [{
        ticks: {
         //min: 0,
         callback: function (value) { return value  }
        },
        scaleLabel: {
         display: false,
         fontSize: 15,
         labelString: " "
        }
       }],
       xAxes: [{
        scaleLabel: {
         display: false,
         fontSize: 18,
         labelString: " "
        }
       }]
      },
      title: {
       display: false,
       text: ' '
      },
      responsive: true,
      tooltips: {
       callbacks: {
        labelColor: function (tooltipItem, chart) {
         return {
          borderColor: '#4ACDE3',
          backgroundColor: '#4ACDE3'
         }
        }
       }
      },
      legend: {
       labels: {
        // This more specific font property overrides the global property
        fontColor: 'black',
       }
      }
     }
    });



        var ctx1 = document.getElementById("myChart2");
    var myChart = new Chart(ctx1, {
     type: 'bar',
     data: {
      labels: labArr2,
      datasets: [
       
       {
        label: 'Sales',
                
        fill: false,
        data: aDatasets2,
        backgroundColor: '#ffac65',
       },
              {
        label: 'Projects',
                
        fill: false,
        data: aDatasets4,
        backgroundColor: '#4ACDE3',
       },
      ]
     },
     options: {
      scales: {
      
       yAxes: [{
        ticks: {
         //min: 0,
         //max: 100000000,
        },
        scaleLabel: {
         display: false,
         fontSize: 15,
         labelString: " "
        }
       }],
       xAxes: [{
        scaleLabel: {
         display: false,
         fontSize: 18,
         labelString: " "
        }
       }]
      },
      title: {
       display: false,
       text: ' '
      },
      responsive: true,
      tooltips: {
       callbacks: {
        labelColor: function (tooltipItem, chart) {
         return {
          borderColor: '#4ACDE3',
          backgroundColor: '#4ACDE3'
         }
        }
       }
      },
      legend: {
       labels: {
        // This more specific font property overrides the global property
        fontColor: 'black',
       }
      }
     }
    });
                
            }
        });
    }
    loadBarchart();
  



                 document.getElementById("Divbarsline").innerHTML='<canvas id="barsline" ></canvas>';
        //Load Graph For ProjectType
        var responsePhaseChartFilter2 = responsePhaseChartFilter2 || [];
        var urlPhaseChartFilter2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=TaskCost,TaskName&$filter=TaskIsProjectSummary%20eq%20false%20and%20TaskOutlineLevel%20eq%202"+urlFilter1Selected1+"&$orderby=TaskStartDate";
        ////console.log("urlPhaseChartFilter2=== "+ urlPhaseChartFilter2);
        function LoadProjectTypeFilter2() {
            $.ajax({
                url: urlPhaseChartFilter2,


                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responsePhaseChartFilter2 = responsePhaseChartFilter2.concat(data.d.results);
                    if (data.d.__next) {
                        urlPhaseChartFilter2 = data.d.__next;
                        LoadProjectTypeFilter2();
                    }
                    var itermeidiaryObject = {};
                    var pievalues=[];
                    var labels=[];
                    var countPhase = 0;
                    $.each(responsePhaseChartFilter2, function (key, value) {
                        var taskName = value.TaskName;
                        var taskCost =0;
                        if (value.TaskCost!=null) {
                            taskCost = parseFloat(value.TaskCost);
                            countPhase++;
                        }
                        if ((labels.indexOf(taskName)==-1) && (value.TaskCost != 0)  ) {
                            
                            labels.push(taskName);
                            pievalues.push(taskCost);
                        }else{
                            pievalues[labels.indexOf(taskName)]=parseFloat(pievalues[labels.indexOf(taskName)]+taskCost);
                        }
                        document.getElementById("tachecount").innerHTML = conToMill(countPhase);
                    });

                    

                    var colorscheme = colors.slice(0, labels.length);


        var ctx2 = document.getElementById("barsline");
                    if (window.echartdonut != undefined) {
                        window.echartdonut.destroy();
                    }
                    //
                    window.echartdonut = new Chart(ctx2, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                data: pievalues,
                                backgroundColor: colorscheme,
                                borderColor: colorscheme,
                                borderWidth: 1
                            }]
                        },
                        options: {plugins:{
                            labels:{
                              render:'value'
                            }
                          },
                            responsive: true,

                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: ''
                            },
                            scales: {
                                xAxes: [{
                                    scaleLabel: {display: true, labelString: "Phase"},
                                    ticks: {
                                        maxRotation: 90,
                                        minRotation: 90,
                                        fontSize: 10
                                    }
                                }],
                                yAxes: [{
                                    scaleLabel: {display: true, labelString: "Coût"},
                                    ticks: {
                                        beginAtZero: true,

                                    }
                                }]
                            }
                        }
                    });              


                }
            });
        }
        LoadProjectTypeFilter2();
        //Table Phase 
         tableauxPhase = document.getElementById("tableaux1");
         trPhase = tableauxPhase.getElementsByTagName("tr");
         if(trPhase.length>0){        
              $('#tableaux1 tbody').empty();
         }
         tableauxTacheRetard = document.getElementById("tableaux2");
         trTacheRetard = tableauxTacheRetard.getElementsByTagName("tr");
         if(trTacheRetard.length>0){        
              $('#tableaux2 tbody').empty();
         }

         var responseBornes=responseBornes || [];
         var urlBornes=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Projects?$select=Toléranceavertissement,ToléranceAlert&$filter=ProjectId%20eq%20guid%27"+proj+"%27";
         //console.log("urlBornes= "+urlBornes);
         function getBornes() {

            $.ajax({
                url: urlBornes,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseBornes = responseBornes.concat(data.d.results);
                    if (data.d.__next) {
                        urlBornes = data.d.__next;
                        getBornes();
                    }
                    var borne1=0;
                    var borne2=0;
                    
                    $.each(responseBornes, function (key, value) {
                        if (value.Toléranceavertissement!=null) {
                            borne1=value.Toléranceavertissement;
                        }
                        if (value.ToléranceAlert!=null) {
                            borne2=value.ToléranceAlert;
                        }
                    });
                    
                    remplirTab(borne1,borne2);
                }
            });

        }
        getBornes();
        

    function remplirTab(borne1,borne2) {
            // body...
                var responseTabTacheFilter2 = responseTabTacheFilter2 || [];
                var urlTabTacheFilter2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=TaskId,TaskActualCost,TaskDuration,TaskActualDuration,TaskCost,TaskStartDate,TaskFinishDate,TaskBudgetCost,TaskName,TaskPercentCompleted,TaskIsCritical&$filter=TaskIsProjectSummary%20eq%20false%20and%20TaskOutlineLevel%20eq%202"+urlFilter1Selected1+"&$orderby=TaskIndex";
                //////console.log("urlTabTacheFilter2= "+urlTabTacheFilter2);
                function LoadTabTacheFilter2() {

                    $.ajax({
                        url: urlTabTacheFilter2,

                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseTabTacheFilter2 = responseTabTacheFilter2.concat(data.d.results);
                            if (data.d.__next) {
                                urlTabTacheFilter2 = data.d.__next;
                                LoadTabTacheFilter2();
                            }
                            var arrPhases=[];
                            var arrPhasesName=[];
                            $.each(responseTabTacheFilter2, function (key, value) {

                                

                                var nomT = value.TaskName;
                                var idT=value.TaskId;
                                var taskStartDate = value.TaskStartDate;
                                var taskfinishdate = value.TaskFinishDate;
                                var taskCost = parseFloat(value.TaskCost).toFixed(3);
                                var tskPercentCpl = parseFloat(value.TaskPercentCompleted).toFixed(0);
                                var couAct=value.TaskActualCost;
                                var duree=parseFloat((value.TaskDuration)/8).toFixed(0);
                                var dureeAct=parseFloat((value.TaskActualDuration)/8).toFixed(0);
                               
                                var budg =0;
                                if (value.TaskBudgetCost!=null) {
                                    budg = parseFloat(value.TaskBudgetCost);
                                }
                                
                                
                                moment.locale('fr');

                                if (taskStartDate != null) {
                                    var taskStartDate = moment(taskStartDate).format('L');
                                }

                                if (taskfinishdate != null) {
                                    var taskfinishdate = moment(taskfinishdate).format('L');
                                }

                                var critique=value.TaskIsCritical;
                                var crt="";
                                if (critique) {
                                    crt="Critique"
                                }else{
                                    crt="Non Critique"
                                }
                                //var projWork = value.Work;
                              
                                


                                var trBch;
                                trBch = $("<tr class='even pointer'>");
                                trBch.append("<td style='text-align: left;'>" + nomT + "</td>");
                                trBch.append("<td style=''>" + taskStartDate + "</td>"); 
                                trBch.append("<td style=''>" + taskfinishdate + "</td>"); 
                                trBch.append("<td style=''>" + conToMill(parseFloat(budg).toFixed(0)) + " </td>");
                                trBch.append("<td style=''>" + conToMill(taskCost) + " </td>");
                                trBch.append("<td style=''>" + conToMill(couAct) + " </td>");
                                trBch.append("<td style=''>" + conToMill(duree) + " </td>");
                                trBch.append("<td style=''>" + conToMill(dureeAct) + " </td>");
                                trBch.append('<td style="text-align:center;font-size: medium;width:20%;">'+tskPercentCpl+'%<progress id="" max="100" value="'+tskPercentCpl+'" style="width: 100%; height:4vh;"></progress></td>'); //10
                                trBch.append("<td style=''>" + crt + "</td>"); 
                                $('#tableaux1').append(trBch);

                                arrPhases.push(idT);
                                arrPhasesName.push(nomT);

                            });
                            for (var i = 0; i < arrPhases.length; i++) {
                                tachesEnRetard(arrPhases[i],arrPhasesName[i],borne1,borne2);
                            }


                        }
                    });

                }
                LoadTabTacheFilter2();
    }














    function tachesEnRetard(phases,nPh,borne1,borne2) {

                var responseTabTacheRetard = responseTabTacheRetard || [];
                var urlTabTacheRetard = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=TaskId,TaskFinishVariance,TaskStartDate,TaskDuration,TaskFinishDate,TaskBudgetCost,TaskName,TaskPercentCompleted,TaskIsCritical&&$filter=ProjectId%20eq%20guid%27"+proj+"%27%20and%20ParentTaskId%20eq guid%27"+phases+"%27&$orderby=TaskIndex";
                
                ////console.log("nPh= "+nPh);
                function LoadTabTacheRetard() {

                    $.ajax({
                        url: urlTabTacheRetard,

                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseTabTacheRetard = responseTabTacheRetard.concat(data.d.results);
                            if (data.d.__next) {
                                urlTabTacheRetard = data.d.__next;
                                LoadTabTacheRetard();
                            }
                            var arrTaskId=[];
                            var arrTaskName=[];
                            var arrTaskStart=[];
                            var arrTaskFinish=[];
                            var arrTaskFinishBase=[];
                            var arrTaskAch=[];
                            var arrGliss=[];
                            var arrTduration=[];
                            var arrTdurationRef=[];
                            var arrFinishVariance=[];
                            var arrrTaskBaseFinishdate=[];
                            var arrrCrt=[];
                            $.each(responseTabTacheRetard, function (key, value) {
                                moment.locale('fr');
                                var idTask=value.TaskId;
                                var nomT = value.TaskName;
                                var duree=parseFloat((value.TaskDuration)/8).toFixed(0);
                                var deb=value.TaskStartDate;
                                var fin=value.TaskFinishDate;
                                var taskStartDate = value.TaskStartDate;
                                var taskfinishdate = value.TaskFinishDate;
                                if (taskStartDate != null) {
                                    taskStartDate = moment(taskStartDate).format('L');
                                }

                                if (taskfinishdate != null) {
                                    taskfinishdate = moment(taskfinishdate).format('L');
                                }
                                var tskPercentCpl = parseFloat(value.TaskPercentCompleted).toFixed(0);
                                var finishVariance=parseFloat(value.TaskFinishVariance/8).toFixed(0);
                                var critique=value.TaskIsCritical;
                                var crt="";
                                if (critique) {
                                    crt="Critique"
                                }else{
                                    crt="Non Critique"
                                }
                                arrTaskId.push(idTask);
                                arrTaskName.push(nomT);
                                arrTaskStart.push(taskStartDate);
                                arrTaskFinish.push(taskfinishdate);
                                arrTaskAch.push(tskPercentCpl);
                                arrTduration.push(duree);
                                arrTdurationRef.push("Pas de reférence");
                                arrTaskFinishBase.push("Pas de reférence");
                                arrGliss.push("Pas de reférence");
                                arrFinishVariance.push(finishVariance);
                                arrrTaskBaseFinishdate.push("Pas de reférence");
                                arrrCrt.push(crt);
                            });
                            
                                loadBaseInformation(arrTaskId,arrTaskName,arrTaskStart,arrTaskFinish,arrTaskAch,arrTaskFinishBase,arrGliss,arrTduration,arrTdurationRef,borne1,borne2,nPh,arrFinishVariance,arrrTaskBaseFinishdate,arrrCrt);


                        }
                    });

                }
                LoadTabTacheRetard();
                
    }
            
            function loadBaseInformation(arrTaskId,arrTaskName,arrTaskStart,arrTaskFinish,arrTaskAch,arrTaskFinishBase,arrGliss,arrTduration,arrTdurationRef,borne1,borne2,nPh,arrFinishVariance,arrrTaskBaseFinishdate,arrrCrt) {
                var responseTabTacheBaseline = responseTabTacheBaseline || [];
                var urlTabTacheBaseline = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TaskBaselines?$filter=ProjectId%20eq%20guid%27"+proj+"%27";
                
                //console.log("urlTabTacheBaseline= "+urlTabTacheBaseline);
                function LoadTabTacheBaseline() {
                    //console.log("nPh= "+nPh);
                    $.ajax({
                        url: urlTabTacheBaseline,

                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseTabTacheBaseline = responseTabTacheBaseline.concat(data.d.results);
                            if (data.d.__next) {
                                urlTabTacheBaseline = data.d.__next;
                                LoadTabTacheBaseline();
                            }
                            var arrTaskNameTemp=[];
                            var arrTaskStartTemp=[];
                            var arrTaskFinishTemp=[];
                            var arrTaskAchTemp=[];
                            var arrGlissTemp=[];
                            var arrrTaskBaseFinishTemp=[];
                            var arrFinishVarianceTemp=[];
                            var arrTdurationTemp=[];
                            
                            $.each(responseTabTacheBaseline, function (key, value) {
                                 var Tid=value.TaskId;
                                 var finish=value.TaskBaselineFinishDate;
                                 var finT="";
                                 var durRef=parseFloat((value.TaskBaselineDuration)/8).toFixed(0)
                                 if (finish!=null) {
                                     finT=moment(finish);
                                 }
                                 arrTaskFinishBase[arrTaskId.indexOf(Tid)]=finT;
                                 arrTdurationRef[arrTaskId.indexOf(Tid)]=durRef;
                                 moment.locale('fr');
                                var taskBaseFinishdate = value.TaskBaselineFinishDate;
                                if (taskBaseFinishdate != null) {
                                    taskBaseFinishdate = moment(taskBaseFinishdate).format('L');
                                }
                                arrrTaskBaseFinishdate[arrTaskId.indexOf(Tid)]=taskBaseFinishdate;
                            });
                             var countRef=0;
                             var today=moment();

                                for (var k = 0; k < arrTaskId.length; k++) {
                                    var finT=moment(arrTaskFinish[k]);
                                    if ((arrTaskAch[k]<100)&&(moment(finT).isBefore(today))) {
                                        var glissement=0;
                                        if (arrTdurationRef[k]=="Pas de reférence") {
                                            glissement="Pas de reférence";
                                        }else if (arrTduration[k]!=0) {
                                            glissement=parseFloat(((arrTduration[k]-arrTdurationRef[k])/arrTduration[k])*100).toFixed(0);                                            
                                        }
                                        countRef++;
                                                arrGliss[k]=glissement;
                                                arrTaskNameTemp.push(arrTaskName[k]);
                                                arrTaskStartTemp.push(arrTaskStart[k]);
                                                arrTaskFinishTemp.push(arrTaskFinish[k]);
                                                arrTaskAchTemp.push(arrTaskAch[k]);
                                                arrGlissTemp.push(arrGliss[k]);
                                                arrrTaskBaseFinishTemp.push(arrrTaskBaseFinishdate[k]);
                                                arrFinishVarianceTemp.push(arrFinishVariance[k]);
                                                arrTdurationTemp.push(arrTduration[k]);
                                    }
                                }
                                if (countRef>0) {
                                    
                                    for (var i = 0; i < arrTaskNameTemp.length; i++) {
                                         var trBch1;
                                         trBch1 = $("<tr class='even pointer'>");
                                         if (i==0) {
                                            trBch1.append("<td style='background-color: #000; color: #fff;' rowspan='"+countRef+"'>" + nPh + "</td>");
                                         }
                                         

                                             trBch1.append("<td style='text-align: left;'>" + arrTaskNameTemp[i] + "</td>");
                                             trBch1.append("<td style=''>" + arrTaskStartTemp[i] + "</td>"); 
                                             trBch1.append("<td style=''>" + arrTaskFinishTemp[i] + "</td>"); 
                                             trBch1.append('<td style="text-align:center;font-size: medium;width:20%;">'+arrTaskAchTemp[i]+'%<progress id="" max="100" value="'+arrTaskAchTemp[i]+'" style="width: 100%; height:4vh;"></progress></td>');
                                             trBch1.append("<td style=''>" + arrTdurationTemp[i] + "</td>");// durée
                                             trBch1.append("<td style=''>" + arrrTaskBaseFinishTemp[i] + "</td>");// fin ref
                                             if (borne1==0 && borne2==0) {
                                                if (arrFinishVarianceTemp[i]<=0) {
                                                    trBch1.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgb(51 114 12))'>" + arrFinishVarianceTemp[i] + " Jours</td>"); 
                                                }else{
                                                    trBch1.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))'>" + arrFinishVarianceTemp[i] + " Jours</td>"); 
                                                }
                                             }else{
                                                if (arrFinishVarianceTemp[i]<=borne1) {
                                                    trBch1.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgb(51 114 12))'>" + arrFinishVarianceTemp[i] + " Jours</td>");
                                                }else if ((arrFinishVarianceTemp[i]>=borne1)&&(arrFinishVarianceTemp[i]<borne2)) {
                                                    trBch1.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgb(216 255 0 / 85%));'>" + arrFinishVarianceTemp[i] + " Jours</td>");
                                                }else if (arrFinishVarianceTemp[i]>=borne2) {
                                                    trBch1.append("<td style='background:linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))'>" + arrFinishVarianceTemp[i] + " Jours</td>");
                                                }
                                             }
                                             trBch1.append("<td style=''>" + arrrCrt[i] + "</td>");
                                    $('#tableaux2').append(trBch1);
                                    }
                                }


                        }
                    });

                }
                LoadTabTacheBaseline();
            }
























    }else{
        $("#tableaux1").css("display", "none");
        $("#Divtableaux1").css("display", "none");
        $("#tableaux2").css("display", "none");
        $("#Divtableaux2").css("display", "none");
        $("#cardTask1").css("display", "none");
        $("#maxRows1").css("display", "none");
                $("#cardPhaseName").css("display", "none");
        $("#cardNbProjet").css("display", "block");
        selectMyList2();
        MainFilter();

    }
}