                          function loadChartsStatique() {
                                        var arrRegionalDir=["DIRECTION REGIONALE TUNIS Médina","DIRECTION REGIONALE DU NORD","DIRECTION REGIONALE TUNIS NORD","DIRECTION REGIONALE TUNIS SUD  ET CAP BON","DIRECTION REGIONALE DU SUD","DIRECTION REGIONALE DU SAHEL","DIRECTION REGIONALE SFAX ET CENTRE"];
                                          var arrCRCount=[307,392,262,569,269,549,317];
                                          var arrCRAnomalie=[273,1272,1011,1950,1156,149,595];
                                          var arrCRPercent=[0,0,0,0,0,0,0];
                                          var moyAnJr=0;
                                          var sumAnJr1=0;
                                          var sumAnJr2=0;

                                          for (var i = 0; i < arrRegionalDir.length; i++) {
                                            sumAnJr1+=parseFloat(arrCRCount[i]);
                                            sumAnJr2+=parseFloat(arrCRAnomalie[i]);
                                            if (arrCRCount[i]!=0) {
                                              var newPercent=parseFloat(arrCRAnomalie[i]/arrCRCount[i]).toFixed(2);
                                              arrCRPercent[i]=parseFloat(newPercent);
                                            }
                                          }
                                          if (sumAnJr1!=0) {
                                            moyAnJr=parseFloat(sumAnJr2/sumAnJr1).toFixed(2);
                                          }
                                          document.getElementById("MoyAnnJr").innerHTML =moyAnJr;
                                          document.getElementById("NbCR").innerHTML =parseFloat(sumAnJr1).toFixed(0);
                                          document.getElementById("NbAnn").innerHTML =parseFloat(sumAnJr2).toFixed(0);
                                          
                                        Highcharts.chart('container4', {
                                          chart: {
                                              type: 'column'
                                          },
                                          xAxis: {
                                              categories: arrRegionalDir
                                          },

                                          plotOptions: {
                                              series: {
                                                  dataLabels: {
                                                      enabled: true,
                                                      align: 'right',
                                                      color: '#FFFFFF',
                                                      x: -10
                                                  },
                                                  pointPadding: 0.1,
                                                  groupPadding: 0
                                              }
                                          },
                                            colors: colors,
                                            title: {
                                                text: 'Répartition des CR par Direction'
                                            },

                                          series: [{
                                              name: "Contrôle Régioneaux",
                                              data: arrCRCount
                                          }]
                                      });
                                      Highcharts.chart('container5', {
                                          chart: {
                                              type: 'column'
                                          },
                                          xAxis: {
                                              categories: arrRegionalDir
                                          },

                                          plotOptions: {
                                              series: {
                                                  dataLabels: {
                                                      enabled: true,
                                                      align: 'right',
                                                      color: '#FFFFFF',
                                                      x: -10
                                                  },
                                                  pointPadding: 0.1,
                                                  groupPadding: 0
                                              }
                                          },
                                            colors: colors1,
                                            title: {
                                                text: 'Répartition des Anomalies par Direction'
                                            },

                                          series: [{
                                              name: "Anomalies",
                                              data: arrCRAnomalie
                                          }]
                                      });
                                      //******************************************
                                      Highcharts.chart('container44', {
                                          chart: {
                                              type: 'column'
                                          },
                                          xAxis: {
                                              categories: arrRegionalDir
                                          },

                                          plotOptions: {
                                              series: {
                                                  dataLabels: {
                                                      enabled: true,
                                                      align: 'right',
                                                      color: '#FFFFFF',
                                                      x: -10
                                                  },
                                                  pointPadding: 0.1,
                                                  groupPadding: 0
                                              }
                                          },
                                            colors: colors,
                                            title: {
                                                text: 'Nombre des anomalies par journée'
                                            },

                                          series: [{
                                              name: "Nombre des anomalies par journée",
                                              data: arrCRPercent
                                          }]
                                      });
                    }
                              