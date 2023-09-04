

function mainfilterPr(){
	    
  	  
  	  //$('#myTable tbody').empty();
  	 
     var idProjet = document.getElementById("myList1").value;
      var nomProj =  getSelectedText("myList1");
    
      

      if (idProjet!="") {
        


            function showTitleFilter1(){
                    document.getElementById("projTitle").innerHTML='<i class="fa fa-dashboard"></i>'+' '+nomProj;
                }
                showTitleFilter1();
                

                var ressourceIdArr=[];
                var generiqueArr=[];
                var entrepriseArr=[];
                var projectlist= [];

                var responseFilter1KPI=responseFilter1KPI || [];
                var urlFilter1KPI= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";
                function filter1KPI(){
                  $.ajax({
                        url: urlFilter1KPI,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseFilter1KPI = responseFilter1KPI.concat(data.d.results);
                            if (data.d.__next) {
                                urlFilter1KPI = data.d.__next;
                                filter1KPI();
                            }
                            var countTask=0;
                            

                            $.each(responseFilter1KPI, function (key, value) {
                                countTask++;
                                var projId=value.ProjectId;
                                //var url=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Assignments?$filter=ProjectId%20eq%20guid%27"+projId+"%27";
                                //loadNewKPIRes(url);
                                 /*document.getElementById("myList1").innerHTML="";*/
                                 if (value.ProjectName!=null) {
                                    var region = value.ProjectName;
                                var prId = value.ProjectId;
                                
                                

                                }
                                             
                            });
                            
                            document.getElementById("countProj").innerHTML=countTask;
                            document.getElementById("projetsKPI").innerHTML="Tâches";
                            
                            
                        }
                    });
                }
                filter1KPI();


                
                var urlR1=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Assignments?$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";
                var responseLoadKPIL=responseLoadKPIL || [];
                 function filter1KPIRr(){
                   $.ajax({
                         url: urlR1,
                         method: "GET",
                         dataType: "json",
                         headers: { Accept: "application/json;odata=verbose" },
                         success: function (data) {
                             responseLoadKPIL = responseLoadKPIL.concat(data.d.results);
                             if (data.d.__next) {
                                 urlR1 = data.d.__next;
                                 filter1KPIRr();
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
                             document.getElementById("countRessGen").innerHTML=generiqueArr.length;                         }
                     });

                 }
                 filter1KPIRr();
                 


                 var responseFilter1Tab=responseFilter1Tab || [];
                 var urlFilter1Tab= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=ProjectId%20eq%20guid%27"+idProjet+"%27&$orderby=TaskOutlineNumber";
                 //console.log("urlFilter1Tab= "+urlFilter1Tab);
                 function loadTab1(){                  
                   document.getElementById("tabPanel").innerHTML='<h3 class="panel-title"><i class="fa fa-money fa-fw"></i>Liste des tâches </h3>'
                   document.getElementById("tabResponsive").innerHTML='<table class="table table-bordered table-hover table-striped" id="tableTache"><thead> <tr> <th>Tâches</th>  <th>Date Début</th>  <th>Date Fin</th> <th>Coût</th> <th>% Achèvement</th> </tr> </thead> <tbody></tbody></table>'
                  
                   tableaux = document.getElementById("tableTache");
                   tr1 = tableaux.getElementsByTagName("tr");
                    if(tr1.length>0){         
                         $('#tableTache tbody').empty();
                    }
                   tableaux = document.getElementById("tableTache");
                    tr1 = tableaux.getElementsByTagName("tr");
                    if(tr1.length>0){         
                         $('#tableTache tbody').empty();
                    }
                   $.ajax({
                         url: urlFilter1Tab,
                         method: "GET",
                         dataType: "json",
                         headers: { Accept: "application/json;odata=verbose" },
                         success: function (data) {
                             responseFilter1Tab = responseFilter1Tab.concat(data.d.results);
                             if (data.d.__next) {
                                 urlFilter1Tab = data.d.__next;
                                 loadTab1();
                             }
                            
                            

                             $.each(responseFilter1Tab, function (key, value) {
                                moment.locale('fr');
                                var levelT=value.TaskOutlineLevel;
                                if ((levelT==1)||(levelT==2)) {
                                  var nomT=value.TaskName;
                                var start=value.TaskStartDate;
                                var deb=moment(start).format('DD-MM-YYYY');                                
                                var finish=value.TaskFinishDate;
                                var fin=moment(finish).format('DD-MM-YYYY');                               
                                var cout=conToMill(parseInt(value.TaskCost));
                                var pourAch=value.TaskPercentCompleted;
                               
                                 var tr;
                                 tr = $("<tr>");
                                 tr.append("<td style='text-align:left'>" + nomT + "</td>");//0
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
                                
                               
                                 $('#tableTache tbody').append(tr);
                                }
                                
                             });
                         }
                     });
                 }
                 loadTab1();



                 var responseFilter1Info=responseFilter1Info || [];
                 var urlFilter1Info= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectWork,ProjectActualWork,ProjectRemainingWork,ProjectCost,ProjectActualCost,ProjectRemainingCost,ProjectPercentCompleted,ProjectDuration,ProjectActualDuration&$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";
                 //console.log("urlFilter1Info= "+urlFilter1Info);
                 function loadInfoF1(){
                   document.getElementById("infoPanel").innerHTML='<h3 class="panel-title"><i class="fa fa-clock-o fa-fw"></i> Informations de Projet</h3>'
                  
                  $.ajax({
                        url: urlFilter1Info,
                         method: "GET",
                         dataType: "json",
                         headers: { Accept: "application/json;odata=verbose" },
                         success: function (data) {
                             responseFilter1Info = responseFilter1Info.concat(data.d.results);
                             if (data.d.__next) {
                                 urlFilter1Info = data.d.__next;
                                 loadInfoF1();
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

                             $.each(responseFilter1Info, function (key, value) {
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
                 loadInfoF1();




                 var ressourceArrF1=[];
                 var workRessourceArrF1=[];
                 function loadBarchartFilterF1(){
                   document.getElementById("morris-area-chart").innerHTML='<canvas id="myChart"style="overflow: hidden; height: 471px; width: 100%;margin: 0;  padding: 0;"></canvas>';
                   

                       
                 
                         var urlBarProjF1=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Assignments?$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";
                         var responseWorkByRessourcesF1=responseWorkByRessourcesF1 || [];
                         function filterWorkByRessourcesF1(){
                             $.ajax({
                                   url: urlBarProjF1,
                                   method: "GET",
                                   dataType: "json",
                                   headers: { Accept: "application/json;odata=verbose" },
                                   success: function (data) {
                                       responseWorkByRessourcesF1 = responseWorkByRessourcesF1.concat(data.d.results);
                                       if (data.d.__next) {
                                           url = data.d.__next;
                                           filterWorkByRessourcesF1();
                                       }
                                      
                                      

                                       $.each(responseWorkByRessourcesF1, function (key, value) {
                                          var ressNom=value.ResourceName;
                                          var travail=value.AssignmentWork;
                                          if (ressourceArrF1.indexOf(ressNom)==-1) {
                                           ressourceArrF1.push(ressNom);
                                           workRessourceArrF1.push(parseInt(travail));
                                          }else{
                                           workRessourceArrF1[ressourceArrF1.indexOf(ressNom)]+=parseInt(travail);
                                          }
                                       });
                                       var colors =  ["#337ab7", "#5cb85c", "#5cb85c", "#d9534f", "#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f"];
                                       var colorscheme = colors.slice(0, workRessourceArrF1.length);
                                      
                                       var ctx = document.getElementById("myChart");
                                       if (window.myPieChart != undefined)
                                       {
                                           window.myPieChart.destroy();
                                       }
                                       //
                                             window.myPieChart = new Chart(ctx, {
                                     type: 'bar',
                                     data: {
                                         labels: ressourceArrF1,
                                         datasets: [{
                                             label: 'travail (h)',
                                             data: workRessourceArrF1,
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
                           filterWorkByRessourcesF1();
                          
                       
                 }
                 loadBarchartFilterF1();






















                 var ressourceArrF11=[];
                 var CostRessourceArrF1=[];
                 function loadDonutchartFilterF1(){
                   document.getElementById("morris-donut-chart1").innerHTML='<canvas id="chart-area" style="overflow: hidden; height: 471px; width: 100%;margin: 0xp;  padding: 0xp;" />';
                   

                    
                       
                         var responseCostByRessourcesF1=responseCostByRessourcesF1 || [];
                         var urlDonutProjF1=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Assignments?$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";
                         function filterCostByRessourcesF1(){
                             $.ajax({
                                   url: urlDonutProjF1,
                                   method: "GET",
                                   dataType: "json",
                                   headers: { Accept: "application/json;odata=verbose" },
                                   success: function (data) {
                                       responseCostByRessourcesF1 = responseCostByRessourcesF1.concat(data.d.results);
                                       if (data.d.__next) {
                                           url = data.d.__next;
                                           filterCostByRessourcesF1();
                                       }
                                      
                                      

                                       $.each(responseCostByRessourcesF1, function (key, value) {
                                          var ressNom=value.ResourceName;
                                          var cout=value.AssignmentCost;
                                          if (ressourceArrF11.indexOf(ressNom)==-1) {
                                           ressourceArrF11.push(ressNom);
                                           CostRessourceArrF1.push(parseInt(cout));
                                          }else{
                                           CostRessourceArrF1[ressourceArrF11.indexOf(ressNom)]+=parseInt(cout);
                                          }
                                       });
                                       var colors =  ["#337ab7", "#5cb85c", "#5cb85c", "#d9534f", "#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f","#337ab7", "#5cb85c", "#5cb85c", "#d9534f"];
                                         var colorscheme = colors.slice(0, ressourceArrF11.length);             



  var ctx2 = document.getElementById("chart-area").getContext('2d');
         if(window.echartdonut != undefined)
         {
         window.echartdonut.destroy();
         }

         window.echartdonut = new Chart(ctx2, {
         type: 'pie',
         data: {
         labels: ressourceArrF11 ,
         datasets: [{
         data: CostRessourceArrF1,
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
                           filterCostByRessourcesF1();
                          
                       
                 }
                 loadDonutchartFilterF1();











    }else{
        mainfilter();
}
}