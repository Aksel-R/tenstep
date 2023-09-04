function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function addData(chart, label, color, data) {
    chart.data.datasets.push({
      label: label,
      backgroundColor: color,
      data: data
    });
    chart.update();
}

function FilterData()

{

  var idProjet = document.getElementById("mylist4").value;
  var nomProjects =  getSelectedText("mylist4");


 

      var responseKPI = responseKPI ||[];
  var urlKPI = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectCost,ProjectStartDate,ProjectActualCost,ProjectFinishDate,ProjectPercentCompleted,ProjectWork,ProjectDuration,ProjectRemainingDuration,ProjectOwnerName&$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";
     
     function filterKPI(){
          $.ajax({url:  urlKPI,          
                   method: "GET",
                   dataType: "json",
                   headers: {Accept: "application/json;odata=verbose"},       
                   success: function(data) {     
                   responseKPI = responseKPI.concat(data.d.results);
                   if (data.d.__next) {
                      urlKPI = data.d.__next;
                      filterKPI();
                    }  
                    $.each(responseKPI, function(key, value) 
                    {
                      moment.locale('fr');
                      var cp=value.ProjectOwnerName;
                      var actualCost=value.ProjectActualCost;
                      console.log("actualCost= "+actualCost);
                      var baseCost=value.ProjectCost;
                      var start=value.ProjectStartDate;
                      var debutProjet=moment(start).format('DD/MM/YYYY');
                      var finish=value.ProjectFinishDate;
                      var finProjet=moment(finish).format('DD/MM/YYYY');
                      var achevement=value.ProjectPercentCompleted;
                      var travail=value.ProjectWork;
                      var duration=parseFloat(value.ProjectDuration/8).toFixed(0);
                      var restDuration=parseFloat(value.ProjectRemainingDuration/8).toFixed(0);

                      document.getElementById("chefProjet").innerHTML=cp;
                      document.getElementById("nbProjet").innerHTML=1;
                      document.getElementById("coutBase").innerHTML=conToKM(parseFloat(baseCost).toFixed(0));
                      document.getElementById("coutAct").innerHTML=conToKM(parseFloat(actualCost).toFixed(0));
                      document.getElementById("CoutRes").innerHTML=conToKM(parseFloat(baseCost-actualCost).toFixed(0));
                      document.getElementById("debProjet").innerHTML=debutProjet;
                      document.getElementById("finProjet").innerHTML=finProjet;
                      document.getElementById("pourach").innerHTML=achevement+"%";
                      $(".progress").attr("data-percentage", achevement.toString());
                      document.getElementById("work").innerHTML=conToKM(parseFloat(travail));
                      document.getElementById("durProj").innerHTML=conToKM(parseFloat(duration));
                      document.getElementById("durRes").innerHTML=conToKM(parseFloat(restDuration));



                    });
                                        
       }
  });
}
filterKPI();

      var responseKPI1 = responseKPI1 ||[];
  var urlKPI1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectBaselineWork,ProjectBaselineDuration&$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";
     
     function filterKPI1(){
          $.ajax({url:  urlKPI1,          
                   method: "GET",
                   dataType: "json",
                   headers: {Accept: "application/json;odata=verbose"},       
                   success: function(data) {     
                   responseKPI1 = responseKPI1.concat(data.d.results);
                   if (data.d.__next) {
                      urlKPI1 = data.d.__next;
                      filterKPI1();
                    }  
                    $.each(responseKPI1, function(key, value) 
                    {
                     
                      
                      var travail=value.ProjectBaselineWork;
                      var duration=parseFloat(value.ProjectBaselineDuration/8).toFixed(0);
                      
                      document.getElementById("baseWork").innerHTML=conToKM(parseFloat(travail));
                      document.getElementById("durRef").innerHTML=conToKM(parseFloat(duration));
                      



                    });
                                        
       }
  });
}
filterKPI1();


var responseBarchart = responseBarchart ||[];
  var urlBarchart = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectCost,ProjectActualCost&$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";
     
     function filterBarchart(){
          $.ajax({url:  urlBarchart,          
                   method: "GET",
                   dataType: "json",
                   headers: {Accept: "application/json;odata=verbose"},       
                   success: function(data) {     
                   responseBarchart = responseBarchart.concat(data.d.results);
                   if (data.d.__next) {
                      urlBarchart = data.d.__next;
                      filterBarchart();
                    } 
                    var aCost=[];
                    var bCost=[];
                    var nProj=[];
                    $.each(responseBarchart, function(key, value) 
                    {
                      moment.locale('fr');
                      
                      var actualCost=parseFloat(value.ProjectActualCost).toFixed(0);
                      aCost.push(actualCost);
                      var baseCost=parseFloat(value.ProjectCost).toFixed(0);
                      bCost.push(baseCost);
                      var projectName=value.ProjectName;
                      nProj.push(projectName);
                     
                    });
                    var ctx = document.getElementById("barChart");
                    if(window.echartdonut != undefined)
                    {
                      window.echartdonut.destroy();
                    }
                    window.echartdonut = new  Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: nProj,
                            datasets: [{
                                backgroundColor: '#46BFBD',
                                label: 'Coût actuel',
                                data: aCost,
                                options: {
                                  scales: {
                                    yAxes: {
                                      ticks: {
                                        beginAtZero: true,
                                        
                                      }
                                    }
                                  }
                                  
                                }
                                                              }]
                        }
                    });
                    addData(window.echartdonut, 'Coût de base', '#FDB45C', bCost);
                                        
       }
  });
}
filterBarchart();








var responseWorkRes = responseWorkRes ||[];
  var urlWorkRes = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectWork,ProjectActualWork&$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";
     
     function filterdonut(){
          $.ajax({url:  urlWorkRes,          
                   method: "GET",
                   dataType: "json",
                   headers: {Accept: "application/json;odata=verbose"},       
                   success: function(data) {     
                   responseWorkRes = responseWorkRes.concat(data.d.results);
                   if (data.d.__next) {
                      urlWorkRes = data.d.__next;
                      filterdonut();
                    } 
                    var aWork=[];
                    var work=[];
                    var label=[];
                    var travail;
                    var chaine;
                    $.each(responseWorkRes, function(key, value) 
                    {
                      travail=value.ProjectWork;
                      var travailActuel=value.ProjectActualWork;
                      var perWork=parseFloat((travailActuel/travail)*100).toFixed(0);
                      aWork.push(parseFloat(perWork).toFixed(0));                      
                      label.push("travail actuel");
                      var diff=parseFloat(100-perWork).toFixed(0);
                      aWork.push(parseFloat(diff).toFixed(0));
                      label.push("travail restant");
                      chaine=conToKM(parseFloat(travailActuel))+"h / "+conToKM(parseFloat(travail))+"h";

                    });
                    Chart.defaults.doughnutLabels = Chart.helpers.clone(Chart.defaults.doughnut);

                    var helpers = Chart.helpers;
                    var defaults = Chart.defaults;

                    Chart.controllers.doughnutLabels = Chart.controllers.doughnut.extend({
                      updateElement: function(arc, index, reset) {
                        var _this = this;
                        var chart = _this.chart,
                            chartArea = chart.chartArea,
                            opts = chart.options,
                            animationOpts = opts.animation,
                            arcOpts = opts.elements.arc,
                            centerX = (chartArea.left + chartArea.right) / 2,
                            centerY = (chartArea.top + chartArea.bottom) / 2,
                            startAngle = opts.rotation, // non reset case handled later
                            endAngle = opts.rotation, // non reset case handled later
                            dataset = _this.getDataset(),
                            circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : _this.calculateCircumference(dataset.data[index]) * (opts.circumference / (2.0 * Math.PI)),
                            innerRadius = reset && animationOpts.animateScale ? 0 : _this.innerRadius,
                            outerRadius = reset && animationOpts.animateScale ? 0 : _this.outerRadius,
                            custom = arc.custom || {},
                            valueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;

                        helpers.extend(arc, {
                          // Utility
                          _datasetIndex: _this.index,
                          _index: index,

                          // Desired view properties
                          _model: {
                            x: centerX + chart.offsetX,
                            y: centerY + chart.offsetY,
                            startAngle: startAngle,
                            endAngle: endAngle,
                            circumference: circumference,
                            outerRadius: outerRadius,
                            innerRadius: innerRadius,
                            label: valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
                          },

                          draw: function () {
                            var ctx = this._chart.ctx,
                                vm = this._view,
                                sA = vm.startAngle,
                                eA = vm.endAngle,
                                opts = this._chart.config.options;
                            
                              var labelPos = this.tooltipPosition();
                              var segmentLabel = vm.circumference / opts.circumference * 100;
                              
                              ctx.beginPath();
                              
                              ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
                              ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);
                              
                              ctx.closePath();
                              ctx.strokeStyle = vm.borderColor;
                              ctx.lineWidth = vm.borderWidth;
                              
                              ctx.fillStyle = vm.backgroundColor;
                              
                              ctx.fill();
                              ctx.lineJoin = 'bevel';
                              
                              if (vm.borderWidth) {
                                ctx.stroke();
                              }
                              
                              if (vm.circumference > 0.0015) { // Trying to hide label when it doesn't fit in segment
                                ctx.beginPath();
                                ctx.font = helpers.fontString(opts.defaultFontSize, opts.defaultFontStyle, opts.defaultFontFamily);
                                ctx.fillStyle = "#190707";
                                ctx.textBaseline = "top";
                                ctx.textAlign = "center";
                                
                                // Round percentage in a way that it always adds up to 100%
                                ctx.fillText(segmentLabel.toFixed(2) + "%", labelPos.x, labelPos.y);
                              

                              }
                              //display in the center the total sum of all segments
                              ctx.fillText('Travail = '+chaine, vm.x, vm.y-20, 200);
                          }
                        });

                        var model = arc._model;
                        model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : valueAtIndexOrDefault(dataset.backgroundColor, index, arcOpts.backgroundColor);
                        model.hoverBackgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : valueAtIndexOrDefault(dataset.hoverBackgroundColor, index, arcOpts.hoverBackgroundColor);
                        model.borderWidth = custom.borderWidth ? custom.borderWidth : valueAtIndexOrDefault(dataset.borderWidth, index, arcOpts.borderWidth);
                        model.borderColor = custom.borderColor ? custom.borderColor : valueAtIndexOrDefault(dataset.borderColor, index, arcOpts.borderColor);

                        // Set correct angles if not resetting
                        if (!reset || !animationOpts.animateRotate) {
                          if (index === 0) {
                            model.startAngle = opts.rotation;
                          } else {
                            model.startAngle = _this.getMeta().data[index - 1]._model.endAngle;
                          }

                          model.endAngle = model.startAngle + model.circumference;
                        }

                        arc.pivot();
                      }
                    });

                    var config = {
                      type: 'doughnutLabels',
                      data: {
                        datasets: [{
                          data: aWork,
                          backgroundColor: [
                            
                            "#46BFBD",
                            "#FDB45C",
                            "#949FB1",
                            "#4D5360",
                          ],
                          label: 'Dataset 1'
                        }],
                        labels: label
                      },
                      options: {
                          circumference: Math.PI,
                          rotation: 1.0 * Math.PI,
                          responsive: true,
                          legend: { display: true,position: 'top',},
                          title: { display: true, text: 'Travail actuel / Travail' },

                          animation: { animateScale: true, animateRotate: true }
                        }
                    };

                    var ctx = document.getElementById("myChart").getContext("2d");
                    if(window.echartdonut1 != undefined)
                    {
                      window.echartdonut1.destroy();
                    }
                    window.echartdonut1 = new Chart(ctx, config);

                                        


       }
  });
}
filterdonut();


var responsePieRes = responsePieRes ||[];
  var urlPieRes = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Assignments?$select=ResourceName&$filter=ProjectId%20eq%20guid%27"+idProjet+"%27";
     
     function filterPieChart(){
          $.ajax({url:  urlPieRes,          
                   method: "GET",
                   dataType: "json",
                   headers: {Accept: "application/json;odata=verbose"},       
                   success: function(data) {     
                   responsePieRes = responsePieRes.concat(data.d.results);
                   if (data.d.__next) {
                      urlPieRes = data.d.__next;
                      filterPieChart();
                    } 
                    var ressource=[];
                    var nbRessource=[];
                    var nProj=[];
                    $.each(responsePieRes, function(key, value) 
                    {
                     var nomRes="";
                     if (value.ResourceName!=null) {
                      nomRes=value.ResourceName;
                     }
                     if ((nomRes!=null)&&(nomRes!="")) {
                      if (ressource.indexOf(nomRes)==-1) {
                        ressource.push(nomRes);
                        nbRessource.push(1);
                      }else{
                        nbRessource[ressource.indexOf(nomRes)]+=1;
                      }
                     }
                    });
                    
                      var ctxPie = document.getElementById("myPieChart").getContext('2d');
                      if(window.echartPie != undefined)
                    {
                      window.echartPie.destroy();
                    }
                    window.echartPie = new Chart(ctxPie, {
                        type: 'pie',
                        data: {
                          labels: ressource,
                          datasets: [{
                            backgroundColor: ["#2ecc71","#3498db","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#3498db","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#3498db","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#3498db","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#3498db","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#3498db","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#3498db","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#3498db","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e"],
                            data: nbRessource
                          }]
                        },
  options:{
    

    responsive: true,
    legend: { display: false,position: 'top',},
  
  
    plugins:{
  labels: {
    render: 'value',
    fontColor: '#000',
    position: 'outside'
  }
},


  }
                      });

       }
  });
}
filterPieChart();









}

