function conToMill(num) {
    if (num==0)
    {
         return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2))  : Math.sign(num)*Math.abs(num)
    }
    if (num<1000000 && num>999)
    {
         return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(2)) + 'K' : Math.sign(num)*Math.abs(num)
    }
    if (num<-999 && num>-1000000)
    {
         return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(2)) + 'K' : Math.sign(num)*Math.abs(num)
    }
    if (num<0 && num>-1000)
    {
         return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2)) : Math.sign(num)*Math.abs(num)
    }
    if (num>0 && num<1000)
    {
         return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2)) : Math.sign(num)*Math.abs(num)
    }
    if (num>999999)
    {
         return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(2)) + 'M' : Math.sign(num)*Math.abs(num)
    }
    if (num<-999999)
    {
         return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(2)) + 'M' : Math.sign(num)*Math.abs(num)
    }

}

function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function mainfilter(){
	    
  	  
  	  //$('#myTable tbody').empty();
  	 
     var nomDir1 = document.getElementById("myList").value;
      var nomDir =  getSelectedText("myList");
    
      $('#myList1').empty().append('<option value="">Projet</option>');

      if (nomDir1!="") {
        $("#row1").css("display", "block");
        $("#row2").css("display", "block");


        function showTitleFilter(){
                    document.getElementById("projTitle").innerHTML='<i class="fa fa-dashboard"></i>'+' '+nomDir;
                }
                showTitleFilter();
                

                var ressourceIdArr=[];
                var generiqueArr=[];
                var entrepriseArr=[];
                var projectlist= [];

                var responseFilterKPI=responseFilterKPI || [];
                var urlFilterKPI= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId,Direction&$filter=Direction%20eq%27"+nomDir+"%27";
                function filterKPI(){
                  $.ajax({
                        url: urlFilterKPI,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseFilterKPI = responseFilterKPI.concat(data.d.results);
                            if (data.d.__next) {
                                urlFilterKPI = data.d.__next;
                                filterKPI();
                            }
                            var countProj=0;
                            

                            $.each(responseFilterKPI, function (key, value) {
                                countProj++;
                                var projId=value.ProjectId;
                                var url=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Assignments?$filter=ProjectId%20eq%20guid%27"+projId+"%27";
                                loadNewKPIRes(url);
                                 /*document.getElementById("myList1").innerHTML="";*/
                                 if (value.ProjectName!=null) {
                                    var region = value.ProjectName;
                                var prId = value.ProjectId;
                                

                                $('#myList1').append($('<option>',
                                    {
                                        text: region,
                                        value: prId
                                    }));

                                var opt = {};
                                $("#myList1 > option").each(function () {
                                    if (opt[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt[$(this).text()] = $(this).val();
                                    }
                                });
                                

                                }
                                             
                            });
                            
                            document.getElementById("countProj").innerHTML=countProj;
                            document.getElementById("projetsKPI").innerHTML="Projets";
                            
                        }
                    });
                }
                filterKPI();


                function loadNewKPIRes(url){
               
                  var responseLoadKPIL=responseLoadKPIL || [];
                  function filterKPIRr(){
                  $.ajax({
                        url: url,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseLoadKPIL = responseLoadKPIL.concat(data.d.results);
                            if (data.d.__next) {
                                url = data.d.__next;
                                filterKPIRr();
                            }
                            
                            

                            $.each(responseLoadKPIL, function (key, value) {
                               var ressID=value.ResourceId;
                               var ressNom=value.ResourceName;
                               if (ressourceIdArr.indexOf(ressNom)==-1) {
                                ressourceIdArr.push(ressNom);
                                }
                                
                                if ((ressNom=="Ressource non affectée")||(ressNom=="Ressource locale générique")) {
                                  if (generiqueArr.indexOf(ressNom)==-1) {
                                    generiqueArr.push(ressNom);
                                   
                                  }
                                }else{
                                  if (entrepriseArr.indexOf(ressNom)==-1) {
                                    entrepriseArr.push(ressNom);
                                   
                                  }
                                }
                               
                                             
                            });
                            
                            
                            document.getElementById("countRess").innerHTML=ressourceIdArr.length;
                            document.getElementById("countRessEn").innerHTML=entrepriseArr.length;
                            document.getElementById("countRessGen").innerHTML=generiqueArr.length;
                        }
                    });

                }
                filterKPIRr();
                }


                var responseFilterTab=responseFilterTab || [];
                var urlFilterTab= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId,Direction,ProjectCost,ProjectPercentCompleted&$filter=Direction%20eq%27"+nomDir+"%27";
                //console.log("urlFilterTab= "+urlFilterTab);
                function loadTab(){                  
                  document.getElementById("tabPanel").innerHTML='<h3 class="panel-title"><i class="fa fa-money fa-fw"></i>Liste des projets </h3>'
                  document.getElementById("tabResponsive").innerHTML='<table class="table table-bordered table-hover table-striped" id="tablePr"><thead> <tr> <th>Projet</th>  <th>Date Début</th>  <th>Date Fin</th> <th>Coût</th> <th>% Achèvement</th> </tr> </thead> <tbody></tbody></table>'
                  
                  tableaux = document.getElementById("tablePr");
                   tr1 = tableaux.getElementsByTagName("tr");
                   if(tr1.length>0){         
                        $('#tablePr tbody').empty();
                   }
                  tableaux = document.getElementById("tablePr");
                   tr1 = tableaux.getElementsByTagName("tr");
                   if(tr1.length>0){         
                        $('#tablePr tbody').empty();
                   }
                  $.ajax({
                        url: urlFilterTab,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseFilterTab = responseFilterTab.concat(data.d.results);
                            if (data.d.__next) {
                                urlFilterTab = data.d.__next;
                                loadTab();
                            }
                            
                            

                            $.each(responseFilterTab, function (key, value) {
                               moment.locale('fr');
                               var nomP=value.ProjectName;
                               var start=value.ProjectStartDate;
                               var deb=moment(start).format('DD-MM-YYYY');
                               var finish=value.ProjectFinishDate;
                               var fin=moment(finish).format('DD-MM-YYYY');                               
                               var cout=conToMill(parseInt(value.ProjectCost));
                               var pourAch=value.ProjectPercentCompleted;
                               
                                var tr;
                                tr = $("<tr>");
                                tr.append("<td style='text-align:left'>" + nomP + "</td>");//0
                                tr.append("<td>" + deb + "</td>");//1                        
                                tr.append("<td>" + fin + "</td>"); //2
                                tr.append("<td>" + cout+ "</td>"); //3
                                if (pourAch<10) {
                                   tr.append("<td>" + pourAch+ "% &nbsp;&nbsp;<progress id='' max='100' value='"+pourAch+"' style='width: 65%; background-color:#337ab7; height:10px;'></progress></td>"); //4
                                 }else if((pourAch>=10)&&(pourAch<100)){
                                   tr.append("<td>" + pourAch+ "% <progress id='' max='100' value='"+pourAch+"' style='width: 65%; background-color:#337ab7; height:10px;'></progress></td>"); //4
                                 }else{
                                  tr.append("<td>" + pourAch+ "%<progress id='' max='100' value='"+pourAch+"' style='width: 63%; background-color:#337ab7; height:10px;'></progress></td>"); //4
                                 }
                                
                               
                                $('#tablePr tbody').append(tr);
                            });
                        }
                    });
                }
                loadTab();



                var responseFilterInfo=responseFilterInfo || [];
                var urlFilterInfo= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectWork,ProjectActualWork,ProjectRemainingWork,ProjectCost,ProjectActualCost,ProjectRemainingCost,ProjectPercentCompleted,ProjectDuration,ProjectActualDuration&$filter=Direction%20eq%27"+nomDir+"%27";
                //console.log("urlFilterInfo= "+urlFilterInfo);
                function loadInfo(){
                  document.getElementById("infoPanel").innerHTML='<h3 class="panel-title"><i class="fa fa-clock-o fa-fw"></i> Informations de direction</h3>'
                  
                  $.ajax({
                        url: urlFilterInfo,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseFilterInfo = responseFilterInfo.concat(data.d.results);
                            if (data.d.__next) {
                                urlFilterInfo = data.d.__next;
                                loadInfo();
                            }
                            
                            var sumProjectWork=0;
                            var sumProjectActualWork=0;
                            var sumProjectRemainingWork=0;

                            var sumProjectCost=0;
                            var sumProjectActualCost=0;
                            var sumProjectRemainingCost=0;

                            var sumProjectPercentWorkCompleted=0;
                            var avgProjectPercentWorkCompleted=0;
                            var count=0;

                            var sumProjectDuration=0;
                            var sumProjectActualDuration=0;

                            $.each(responseFilterInfo, function (key, value) {
                               var travail=value.ProjectWork;
                               sumProjectWork+=parseFloat(travail);
                               var travailActuel=value.ProjectActualWork;
                               sumProjectActualWork+=parseFloat(travailActuel);
                               var travailRestant=value.ProjectRemainingWork;
                               sumProjectRemainingWork+=parseFloat(travailRestant);

                               var cout=value.ProjectCost;
                               sumProjectCost+=parseFloat(cout);
                               var coutActuel=value.ProjectActualCost;
                               sumProjectActualCost+=parseFloat(coutActuel);
                               var coutRestant=value.ProjectRemainingCost;
                               sumProjectRemainingCost+=parseFloat(coutRestant);

                               var duree=value.ProjectDuration;
                               sumProjectDuration+=parseFloat(duree);
                               var dureeActuelle=value.ProjectActualDuration;
                               sumProjectActualDuration+=parseFloat(dureeActuelle);

                               var ach=value.ProjectPercentCompleted;
                               sumProjectPercentWorkCompleted+=parseFloat(ach);
                               count++;
                            });
                            avgProjectPercentWorkCompleted=parseFloat(sumProjectPercentWorkCompleted/count).toFixed(0);
                            document.getElementById("listInfo").innerHTML='<a href="#" class="list-group-item">  <span class="badge">'+avgProjectPercentWorkCompleted+'%</span> <i class="fa fa-fw fa-percent"></i> Achèvement </a> <a href="#" class="list-group-item"><span class="badge">'+conToMill(sumProjectWork)+'</span> <i class="fa fa-fw fa-briefcase"></i> Travail</a><a href="#" class="list-group-item"> <span class="badge">'+conToMill(sumProjectActualWork)+'</span> <i class="fa fa-fw fa-briefcase"></i> Travail Actuel</a> <a href="#" class="list-group-item"> <span class="badge">'+conToMill(sumProjectRemainingWork)+'</span> <i class="fa fa-fw fa-briefcase"></i> Travail Restant </a> <a href="#" class="list-group-item"><span class="badge">'+conToMill(sumProjectCost)+'</span> <i class="fa fa-fw fa-money"></i> Coût</a><a href="#" class="list-group-item"><span class="badge">'+conToMill(sumProjectActualCost)+'</span><i class="fa fa-fw fa-money"></i> Coût Actuel</a><a href="#" class="list-group-item"><span class="badge">'+conToMill(sumProjectRemainingCost)+'</span><i class="fa fa-fw fa-money"></i> Coût Restant</a><a href="#" class="list-group-item"><span class="badge">'+conToMill(sumProjectDuration)+'</span><i class="fa fa-fw fa-clock-o"></i> Durée</a><a href="#" class="list-group-item"><span class="badge">'+conToMill(sumProjectActualDuration)+'</span><i class="fa fa-fw fa-clock-o"></i> Durée Actuelle</a>';
                        }
                    });
                }
                loadInfo();




                var ressourceArr=[];
                var workRessourceArr=[];
                function loadBarchartFilter(){
                  document.getElementById("morris-area-chart").innerHTML='<canvas id="myChart"style="overflow: hidden; height: 471px; width: 100%;margin: 0;  padding: 0;"></canvas>';
                  var responseBarchartFilter=responseBarchartFilter || [];
                  var urlBarchartFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId,Direction&$filter=Direction%20eq%27"+nomDir+"%27";
                  function loadBarchart(){
                    $.ajax({
                        url: urlBarchartFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseBarchartFilter = responseBarchartFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlBarchartFilter = data.d.__next;
                                loadBarchart();
                            }
                            
                            

                            $.each(responseBarchartFilter, function (key, value) {
                                var projId=value.ProjectId;
                                var urlBarProj=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Assignments?$filter=ProjectId%20eq%20guid%27"+projId+"%27";
                                loadBarWorkByRessources(urlBarProj);
                            });
                        }
                    });
                  }
                  loadBarchart();

                       
                   function loadBarWorkByRessources(urlBarProj){
                       
                        var responseWorkByRessources=responseWorkByRessources || [];
                        function filterWorkByRessources(){
                            $.ajax({
                                  url: urlBarProj,
                                  method: "GET",
                                  dataType: "json",
                                  headers: { Accept: "application/json;odata=verbose" },
                                  success: function (data) {
                                      responseWorkByRessources = responseWorkByRessources.concat(data.d.results);
                                      if (data.d.__next) {
                                          url = data.d.__next;
                                          filterWorkByRessources();
                                      }
                                      
                                      

                                      $.each(responseWorkByRessources, function (key, value) {
                                         var ressNom=value.ResourceName;
                                         var travail=value.AssignmentWork;
                                         if (ressourceArr.indexOf(ressNom)==-1) {
                                          ressourceArr.push(ressNom);
                                          workRessourceArr.push(parseInt(travail));
                                         }else{
                                          workRessourceArr[ressourceArr.indexOf(ressNom)]+=parseInt(travail);
                                         }
                                      });
                                      var colors =  ["#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e"];
                                      var colorscheme = colors.slice(0, workRessourceArr.length);
                                      
                                      var ctx = document.getElementById("myChart");
                                      if (window.myPieChart != undefined)
                                      {
                                          window.myPieChart.destroy();
                                      }
                                      //
                                            window.myPieChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: {
                                        labels: ressourceArr,
                                        datasets: [{
                                            label: 'travail (h)',
                                            data: workRessourceArr,
                                            backgroundColor: colorscheme,
                                            borderColor: colorscheme,
                                            borderWidth: 1
                                        }]
                                    },
                                    options: {
                                    responsive: true,
                                  
                                  legend: { display: false },
                                      title: {
                                        display: false,
                                        text: ''
                                      },
                                    scales: {
                                      xAxes: [{
                                        ticks: {
                                          maxRotation: 90,
                                          minRotation: 90,
                                      fontSize: 12
                                        }
                                      }],
                                      yAxes: [{
                                        ticks: {
                                          beginAtZero: true
                                        }
                                      }]
                                    }
                                  }
                                });


                                  }
                              });

                          }
                          filterWorkByRessources();
                          
                      }
                }
                loadBarchartFilter();






















                                var ressourceArr1=[];
                var CostRessourceArr=[];
                function loadDonutchartFilter(){
                  document.getElementById("morris-donut-chart1").innerHTML='<canvas id="chart-area" style="overflow: hidden; height: 471px; width: 100%;margin: 0xp;  padding: 0xp;" />';
                  var responseDonutchartFilter=responseDonutchartFilter || [];
                  var urlDonutchartFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId,Direction&$filter=Direction%20eq%27"+nomDir+"%27";
                  function loadDonutchart(){
                    $.ajax({
                        url: urlDonutchartFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseDonutchartFilter = responseDonutchartFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlDonutchartFilter = data.d.__next;
                                loadDonutchart();
                            }
                            
                            

                            $.each(responseDonutchartFilter, function (key, value) {
                                var projId=value.ProjectId;
                                var urlDonutProj=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Assignments?$filter=ProjectId%20eq%20guid%27"+projId+"%27";
                                loadCostCostByRessources(urlDonutProj);
                            });
                        }
                    });
                  }
                  loadDonutchart();

                   function loadCostCostByRessources(urlDonutProj){
                       
                        var responseCostByRessources=responseCostByRessources || [];
                        function filterCostByRessources(){
                            $.ajax({
                                  url: urlDonutProj,
                                  method: "GET",
                                  dataType: "json",
                                  headers: { Accept: "application/json;odata=verbose" },
                                  success: function (data) {
                                      responseCostByRessources = responseCostByRessources.concat(data.d.results);
                                      if (data.d.__next) {
                                          url = data.d.__next;
                                          filterCostByRessources();
                                      }
                                      
                                      

                                      $.each(responseCostByRessources, function (key, value) {
                                         var ressNom=value.ResourceName;
                                         var cout=value.AssignmentCost;
                                         if (ressourceArr1.indexOf(ressNom)==-1) {
                                          ressourceArr1.push(ressNom);
                                          CostRessourceArr.push(parseInt(cout));
                                         }else{
                                          CostRessourceArr[ressourceArr1.indexOf(ressNom)]+=parseInt(cout);
                                         }
                                      });
                                      var colors =  ["#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e"];
                                        var colorscheme = colors.slice(0, ressourceArr1.length);             
/*  var ctx = document.getElementById("chart-area").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ressourceArr1,
    datasets: [{
      backgroundColor: colorscheme,
      data: CostRessourceArr
    }]
  }
});*/


 var ctx2 = document.getElementById("chart-area").getContext('2d');
        if(window.echartdonut != undefined)
        {
        window.echartdonut.destroy();
        }

        window.echartdonut = new Chart(ctx2, {
        type: 'pie',
        data: {
        labels: ressourceArr1 ,
        datasets: [{
        data: CostRessourceArr,
        backgroundColor: colorscheme
        }]
        },
        options:{
        legend: { display: true },
        responsive: true,
        plugins:{
        labels: [
        {
        render: 'label',
        fontColor: '#000',
        position: 'outside',
        fontSize: 10
        },
        {
        fontColor: '#000',
        render :'value',
        fontSize: 10
        }
        ]
        }
        }
        });


                                  }
                              });

                          }
                          filterCostByRessources();
                          
                      }
                }
                loadDonutchartFilter();











    }else{
        $("#row1").css("display", "none");
        $("#row2").css("display", "none");
        function showTitleP(){
                    document.getElementById("projTitle").innerHTML='<i class="fa fa-dashboard"></i>'+' Affichage Général';
                }
                showTitleP();

                var responseFilterKPIP=responseFilterKPIP || [];
                var urlFilterKPIP= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectId,Direction";
                function filterKPIP(){
                  $.ajax({
                        url: urlFilterKPIP,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseFilterKPIP = responseFilterKPIP.concat(data.d.results);
                            if (data.d.__next) {
                                urlFilterKPIP = data.d.__next;
                                filterKPIP();
                            }
                            var countProj=0;
                            

                            $.each(responseFilterKPIP, function (key, value) {
                                countProj++;
                                             
                            });
                            document.getElementById("countProj").innerHTML=countProj;
                            
                        }
                    });
                }
                filterKPIP();

                 var responseLoadKPIN=responseLoadKPIN || [];
                var urlLoadKPIN=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources";
                function loadKPIN(){
                     $.ajax({
                        url: urlLoadKPIN,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseLoadKPIN = responseLoadKPIN.concat(data.d.results);
                            if (data.d.__next) {
                                urlLoadKPIN = data.d.__next;
                                loadKPIN();
                            }
                            var countRes=0;
                            var countEntreprise=0;
                            var countGenerique=0;

                            $.each(responseLoadKPIN, function (key, value) {
                                countRes++;
                                var typeRessource= value.TypeName; 
                                if (typeRessource=="Ressource de travail") {
                                    countEntreprise++;
                                }else{
                                    countGenerique++;
                                }                    
                            });
                            document.getElementById("countRess").innerHTML=countRes;
                            document.getElementById("ressourcesKPI").innerHTML='Ressources';
                            document.getElementById("countRessEn").innerHTML=countEntreprise;
                            document.getElementById("entreprisesKPI").innerHTML='Ressources Entreprises';
                            document.getElementById("countRessGen").innerHTML=countGenerique;
                            document.getElementById("generiquesKPI").innerHTML='Ressources Génériques';
                        }
                    });
                }
                loadKPIN();
    }
}