

function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function mainfilter(){
	    
  	  
  	  //$('#myTable tbody').empty();
  	 
     var nomDir1 = document.getElementById("myList").value;
      var nomDir =  getSelectedText("myList");
   
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
                                             
                            });
                            
                            document.getElementById("countProj").innerHTML=countProj;
                            
                            
                            
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
                                            backgroundColor: "#337ab7",
                                            borderColor: "#337ab7",
                                            borderWidth: 1
                                        }]
                                    },
                                    options: {
                                    responsive: true,
                                  
                                  legend: { display: false },
                                      title: {
                                        display: true,
                                        text: ''
                                      },
                                    scales: {
                                      xAxes: [{
                                        ticks: {
                                          maxRotation: 90,
                                          minRotation: 90,
                                      fontSize: 10
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
                var costRessourceArr=[];
                function loadDonutchartFilter(){
                  document.getElementById("morris-donut-chart").innerHTML='<canvas id="chart-area" width="100%" height="100%" />';//Donut
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
                                          costRessourceArr.push(parseInt(cout));
                                         }else{
                                          costRessourceArr[ressourceArr1.indexOf(ressNom)]+=parseInt(cout);
                                         }
                                      });
                                      
                                      //Donut chart
                                      //ressourceArr1 --> label
                                      //costRessourceArr --> values
                                    



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