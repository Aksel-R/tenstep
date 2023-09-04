console.log('list02Stat= '+list02Stat)
  if ((rad2.checked)&&(timeFilterStat=="Mensuel")&&(list02Stat=="2023-01-01")) {
    alert("test")
                              function loadChartsStatique() {
                                        var arrRegionalDir=["DIRECTION REGIONALE TUNIS Médina","DIRECTION REGIONALE DU NORD","DIRECTION REGIONALE TUNIS NORD","DIRECTION REGIONALE TUNIS SUD  ET CAP BON","DIRECTION REGIONALE DU SUD","DIRECTION REGIONALE DU SAHEL","DIRECTION REGIONALE SFAX ET CENTRE"];
                                         
                                          arrRegionalDirTunMed=["AHMED TLILI","ALAIN SAVARY","AVENUE DE CARTHAGE","AVENUE DE LONDRES","BERGES DU LAC I","Centre d Affaires Hedi Nouira","CHARGUIA 2","CHEDLY KALLELA","DIPLOMAT","INTERNATIONALE","JARDIN DE CARTHAGE","KRAM KHEREIDDINE","LA CHARGUIA","LA MARSA","LAC II","LAOUINA","LE KRAM","MENZAH IV","MUTUELLE VILLE","SIDI DAOUED","SOUKRA","CENTRE URBAIN NORD","Centre d'Affaires HABIB BOURGUIBA","LA MARSA ABDERRAHMEN MAMI","Centre d'Affaires Retails","Box de Change Aéroport Tunis Carthage (Agence Charguia)"]; 
                                          var arrCRCountTunMed=[0,7,15 ,10 ,11 ,9 ,16,15,11,0,11,16,11,11,11,10,9,7,6,16,8,10,14,18,9,1];
                                          var arrCRAnomalieTunMed=[0,13,81 ,20 ,26 ,72 ,115,16,17,0,50,63,15,23,30,9,21,31,18,79,9,84,79,59,72,6];
                                          var arrCRPercentTunMed=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                                        
arrRegionalDirNord=["AOUSJA","BEJA","BIZERTE IBN KHALDOUN","BIZERTE RAOUABI","BIZERTE THAALBI","BOUSALEM","EL KEF","JENDOUBA","MATEUR","MEDJEZ EL BAB","MENZEL ABDERRAHMEN","MENZEL BOURGUIBA","NEFZA","RAF-RAF","RAS JEBEL","SILIANA","TABARKA"];
 var arrCRCountNord=[21,30,22,22,21,21,25,21,23,22,22,22,24,22,22,25,27];
 var arrCRAnomalieNord=[45,89,47,99,71,144,42,178,99,90,60,102,6,36,119,34,11];
 var arrCRPercentNord=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

                                         arrRegionalDir=["ARIANA","ARIANA VILLE","BAB SAADOUN","CARNOY","CITE JEMIL","EL GHAZALA","EL MHAMDIA","ENNASR","ENNASR II","ETTADHAMEN","EZZOUHOUR","KHAZNADAR","LE BARDO","LES JARDINS DEL MENZEH","MANAR 2","MANOUBA","MENZAH 8","MGHIRA","MNIHLA","SIDI HASSINE SEDJOUMI"];

                                         arrRegionalDir=["BEN AROUS","BIR EL KASSAA","BOUFICHA","BOUMHEL","CITE SPORTIVE RADES","DAR CHAABENE ELFEHRI","DJEBEL EL OUEST","EL MOUROUJ","EL MOUROUJ 5","EZ ZAHRA","GROMBALIA","HAMMAM CHATT","HAMMAM-LIF","HAMMAMET","KELIBIA","KORBA","MEGRINE","MENZEL TEMIME","MRAZGA HAMMAMET","NABEUL","NOUVELLE MEDINA","YASMINET","ZAGHOUAN","ZAOUIT JEDIDI"];

                                         arrRegionalDir=["CHATT MERIEM","EL JEM","EL KANTAOUI","HAMMEM SOUSSE","JEMMAL","KAIROUAN CENTRE","KAIROUAN IBN EL JAZZAR","KALAA KBIRA","KALAA SGHIRA","KARKAR","KESOUR ESSEF","KSAR HELLAL","MAHDIA","MALL OF SOUSSE","Sousse MENCHIA","MOKNINE","MONASTIR","MONASTIR RUE DU LEADER","MSAKEN","SAHLOUL","SAYADA","SOUSSE BJAOUI","SOUSSE CORNICHE","SOUSSE EL JAWHARA","SOUSSE HACHED","SOUSSE KHZAMA","SOUSSE RIADH","SOUSSE VILLE","TEBOLBA","MSAKEN ENNOUR"];

                                         arrRegionalDir=["CHIHIA","GREMDA","MAHRES","REGUEB","SAKIET EDDAIER","SFAX CDT BEJAOUI","SFAX CHAKER","SFAX JARDIN","SFAX JEDIDA","SFAX LAFRANE","SFAX MENZEL CHAKER","SFAX ROUTE EL AIN","SFAX Rte GABES","SFAX SAKIET EZZIT","SIDI BOUZID","SIDI MANSOUR","TYNA"];
                                          
                                          var moyAnJr=0;
                                          var sumAnJr1=0;
                                          var sumAnJr2=0;
                                          var colors=["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
                                          var colors1=["#cf232a","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];

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
                                          loadComparaison(moyAnJr,sumAnJr1,sumAnJr2);
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
                    loadChartsStatique();
                    function loadComparaison(moyAnJr,sumAnJr1,sumAnJr2){
                        document.getElementById("image1").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                        document.getElementById("value1").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #ff5722;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;width:40%;">0%</a>';
                        document.getElementById("image2").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                        document.getElementById("value2").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #ff5722;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;width:40%;">0%</a>';
                        var ch1="";
                        var ch2="";
                        ch1="Taux d'amélioration Moyenne M-01-2023/ Moy. M-12-2022";
                        ch2="Taux d'amélioration Moyenne M-01-2023/ Moy. A-2022";
                        document.getElementById("titre1").innerHTML ='<a class="list-group-item" style="font-size: 17px;color: #000; margin-top: 0%;margin-bottom: 25%;">'+ch1+'</a>';
                        document.getElementById("titre2").innerHTML ='<a class="list-group-item" style="font-size: 17px;color: #000; margin-top: 0%;margin-bottom: 25%;">'+ch2+'</a>';
                        var arrMoyCRAn=[parseFloat(moyAnJr),0];
                        var arrMoisCRAn=['mois 01-2023','mois 12-2022'];
                        var colors=["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
                        Highcharts.chart('container2', {
                          chart: {
                              type: 'bar'
                          },
                          xAxis: {
                              categories: arrMoisCRAn
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
                                text: 'En matière de contrôle permanant du réseau'
                            },

                          series: [{
                              name: "Anomalies/CR",
                              data: arrMoyCRAn
                          }]
                      });
                        var nbAg=151;
                        var nbJrsTheo=21;
                        var nbJrsControle=sumAnJr1;
                        var tauxCouverture = parseFloat((nbJrsControle/parseFloat(nbAg*nbJrsTheo))*100);
                                  
                                  var comTaux=parseFloat(100-tauxCouverture);
                                  var moisAnnAct1111=moment().format("MM-YYYY");
                                   
                                  document.getElementById("container1").innerHTML ='<h1>Taux de couverture</h1>'+
                                  '<div class="demo-wrapper html5-progress-bar">'+
                                      '<div class="progress-bar-wrapper">'+
                                          '<progress id="progressbar" value="'+tauxCouverture+'" max="100"></progress> <span class="progress-value">'+parseFloat(tauxCouverture).toFixed(3)+'%</span>'+

                                      '</div>'+
                                  '</div>';
                    }

  }else