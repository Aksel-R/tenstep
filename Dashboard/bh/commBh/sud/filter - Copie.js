function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}
function mainFilter() {
  var rad3=document.getElementById('flexRadioDefault1Rad');
  var rad4=document.getElementById('flexRadioDefault2Rad');
  if (rad4.checked){
    $("#div-container2").css("display", "block");
    $("#tauxG").css("display", "block");
    mainFilter1();
  }else if (rad3.checked) {
     $("#div-container2").css("display", "none");
    $("#tauxG").css("display", "none");
    mainFilter2();
  } 	
}

function mainFilter1() {
  var datefilter="";
  var rad1 = document.getElementById('flexRadioDefault1');
  var rad2 = document.getElementById('flexRadioDefault2');
  //console.log("test= "+rad1.checked)
  if (rad1.checked) {
    datefilter="Date_x0020_Journ_x00e9_e";
  }else if (rad2.checked) {
    datefilter="Date_x0020_Controle";
  }


  var dirReg1 = document.getElementById("myList1").value;
    var dirReg=dirReg1.replace("'", "%27%27");
    var AgggIdd = document.getElementById("myList2").value;
    

      document.getElementById("div-container1").innerHTML ='<div id="container1"style="width:100%;"></div>';
    document.getElementById("div-container2").innerHTML ='<div id="container2"style="width:100%;"></div>';
    document.getElementById("div-container4").innerHTML ='<div id="container4"style="width:100%;"></div>';
    document.getElementById("div-container5").innerHTML ='<div id="container5"style="width:100%;"></div>';
    document.getElementById("div-container44").innerHTML ='<div id="container44"style="width:100%;"></div>';
    var timeFilterStat=document.getElementById("myList01").value;
    var list02Stat = document.getElementById("myList02").value;
    if ((rad2.checked)&&(timeFilterStat=="Mensuel")&&(list02Stat=="2023-01-01")) {
      var aggname=getSelectedText("myList2");
      console.log("aggname= "+aggname);
                              //alert("en cours de traitement...")
                              function loadChartsStatique() {
                                        //var arrRegionalDir=["DIRECTION REGIONALE TUNIS Médina","DIRECTION REGIONALE DU NORD","DIRECTION REGIONALE TUNIS NORD","DIRECTION REGIONALE TUNIS SUD  ET CAP BON","DIRECTION REGIONALE DU SUD","DIRECTION REGIONALE DU SAHEL","DIRECTION REGIONALE SFAX ET CENTRE"];
                                         var arrRegionalDir=[];
                                         var arrCRCount=[];
                                        var arrCRAnomalie=[];
                                        var arrCRPercent=[];
                                        
                                          var arrRegionalDirTunMed=["AHMED TLILI","ALAIN SAVARY","AVENUE DE CARTHAGE","AVENUE DE LONDRES","BERGES DU LAC I","Centre d Affaires Hedi Nouira","CHARGUIA 2","CHEDLY KALLELA","DIPLOMAT","INTERNATIONALE","JARDIN DE CARTHAGE","KRAM KHEREIDDINE","LA CHARGUIA","LA MARSA","LAC II","LAOUINA","LE KRAM","MENZAH IV","MUTUELLE VILLE","SIDI DAOUED","SOUKRA","CENTRE URBAIN NORD","Centre d'Affaires HABIB BOURGUIBA","LA MARSA ABDERRAHMEN MAMI","Centre d'Affaires Retails","Box de Change Aéroport Tunis Carthage (Agence Charguia)"]; 
                                          var arrCRCountTunMed=[0,7,15 ,10 ,11 ,9 ,16,15,11,0,11,16,11,11,11,10,9,7,6,16,8,10,14,18,9,1];
                                          var arrCRAnomalieTunMed=[0,13,84 ,20 ,26 ,72 ,115,16,17,0,50,63,15,23,30,9,21,31,18,79,9,84,79,59,72,6];
                                          var arrCRPercentTunMed=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                                          
                                          var arrRegionalDirNord=["AOUSJA","BEJA","BIZERTE IBN KHALDOUN","BIZERTE RAOUABI","BIZERTE THAALBI","BOUSALEM","EL KEF","JENDOUBA","MATEUR","MEDJEZ EL BAB","MENZEL ABDERRAHMEN","MENZEL BOURGUIBA","NEFZA","RAF-RAF","RAS JEBEL","SILIANA","TABARKA"];
                                           var arrCRCountNord=[21,30,22,22,21,21,25,21,23,22,22,22,24,22,22,25,27];
                                           var arrCRAnomalieNord=[45,89,47,99,71,144,42,178,99,90,60,102,6,36,119,34,11];
                                           var arrCRPercentNord=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

                                          var arrRegionalDirTunNord=["ARIANA","ARIANA VILLE","BAB SAADOUN","CARNOY","CITE JEMIL","EL GHAZALA","EL MHAMDIA","ENNASR","ENNASR II","ETTADHAMEN","EZZOUHOUR","KHAZNADAR","LE BARDO","LES JARDINS DEL MENZEH","MANAR 2","MANOUBA","MENZAH 8","MGHIRA","MNIHLA","SIDI HASSINE SEDJOUMI"];
                                          var arrCRCountTunNord=[20,4,4,20,22,23,18,19,0,2,21,21,20,26,0,25,20,0,24,18];
                                           var arrCRAnomalieTunNord=[4,0,0,21,18,1,32,40,0,0,32,4,17,39,0,6,15,0,14,30];
                                           var arrCRPercentTunNord=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                                         

                                            var arrRegionalDirTunCAP=["BEN AROUS","BIR EL KASSAA","BOUFICHA","BOUMHEL","CITE SPORTIVE RADES","DAR CHAABENE ELFEHRI","DJEBEL EL OUEST","EL MOUROUJ","EL MOUROUJ 5","EZ ZAHRA","GROMBALIA","HAMMAM CHATT","HAMMAM-LIF","HAMMAMET","KELIBIA","KORBA","MEGRINE","MENZEL TEMIME","MRAZGA HAMMAMET","NABEUL","NOUVELLE MEDINA","YASMINET","ZAGHOUAN","ZAOUIT JEDIDI"];
                                            var arrCRCountTunCAP=[7,7,43,6,5,22,7,8,10,6,65,7,7,43,44,44,8,22,22,44,4,8,65,65];
                                           var arrCRAnomalieTunCAP=[31,34,90,19,34,34,10,56,42,59,182,57,31,174,109,178,92,112,35,207,17,40,148,159];
                                           var arrCRPercentTunCAP=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

                                           var arrRegionalDirSahel=["CHATT MERIEM","EL JEM","EL KANTAOUI","HAMMEM SOUSSE","JEMMAL","KAIROUAN CENTRE","KAIROUAN IBN EL JAZZAR","KALAA KBIRA","KALAA SGHIRA","KARKAR","KESOUR ESSEF","KSAR HELLAL","MAHDIA","MALL OF SOUSSE","Sousse MENCHIA","MOKNINE","MONASTIR","MONASTIR RUE DU LEADER","MSAKEN","SAHLOUL","SAYADA","SOUSSE BJAOUI","SOUSSE CORNICHE","SOUSSE EL JAWHARA","SOUSSE HACHED","SOUSSE KHZAMA","SOUSSE RIADH","SOUSSE VILLE","TEBOLBA","MSAKEN ENNOUR"];
                                            var arrCRCountSahel=[20,18,9,15,28,18,17,26,16,22,19,23,22,37,13,24,20,20,15,17,15,14,13,24,17,9,8,14,19,17];
                                           var arrCRAnomalieSahel=[0,0,14,0,0,0,0,26,0,0,0,0,0,0,13,0,0,1,19,0,0,18,13,0,0,9,9,16,0,11];
                                           var arrCRPercentSahel=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


                                          var arrRegionalDirSfaxCen=["CHIHIA","GREMDA","MAHRES","REGUEB","SAKIET EDDAIER","SFAX CDT BEJAOUI","SFAX CHAKER","SFAX JARDIN","SFAX JEDIDA","SFAX LAFRANE","SFAX MENZEL CHAKER","SFAX ROUTE EL AIN","SFAX Rte GABES","SFAX SAKIET EZZIT","SIDI BOUZID","SIDI MANSOUR","TYNA"];
                                          var arrCRCountSfaxCen=[14,21,21,16,17,18,25,18,18,17,23,21,17,18,20,13,20];
                                           var arrCRAnomalieSfaxCen=[0,63,0,64,51,36,32,36,36,0,44,28,51,36,104,14,0];
                                           var arrCRPercentSfaxCen=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

                                            var arrRegionalDirSud=["BEN GUERDENE","BIR LAHMAR","DJERBA MIDOUN","GABES","GAFSA","HOUMET ESSOUK DJERBA","KASSERINE","KEBELI","MARETH","MEDNINE","METLAOUI","MOULARES","SBITLA","TATAOUINE","TOZEUR","ZARZIS","GABES SUD"];
                                            var arrCRCountSud=[8,11,7,11,24,11,24,24,11,11,24,24,24,10,24,10,11];
                                           var arrCRAnomalieSud=[3,21,21,40,90,7,168,168,6,11,96,144,120,59,192,1,9];
                                           var arrCRPercentSud=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

                                          var moyAnJr=0;
                                          var sumAnJr1=0;
                                          var sumAnJr2=0;
                                          var colors=["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
                                          var colors1=["#cf232a","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
                                          if (dirReg=="DIRECTION REGIONALE TUNIS Médina") {
                                            if (aggname=="Agence") {
                                              arrRegionalDir=arrRegionalDirTunMed;
                                              arrCRCount=arrCRCountTunMed;
                                              arrCRAnomalie=arrCRAnomalieTunMed;
                                              arrCRPercent=arrCRPercentTunMed;                                              
                                            }else{
                                              arrRegionalDir.push(arrRegionalDirTunMed[arrRegionalDirTunMed.indexOf(aggname)]);
                                              arrCRCount.push(arrCRCountTunMed[arrRegionalDirTunMed.indexOf(aggname)]);
                                              arrCRAnomalie.push(arrCRAnomalieTunMed[arrRegionalDirTunMed.indexOf(aggname)]);
                                              arrCRPercent.push(arrCRPercentTunMed[arrRegionalDirTunMed.indexOf(aggname)]);
                                            }
                                          }
                                          else if (dirReg=="DIRECTION REGIONALE DU NORD") {
                                            if (aggname=="Agence") {
                                              arrRegionalDir=arrRegionalDirNord;
                                              arrCRCount=arrCRCountNord;
                                              arrCRAnomalie=arrCRAnomalieNord;
                                              arrCRPercent=arrCRPercentNord;                                              
                                            }else{
                                              arrRegionalDir.push(arrRegionalDirNord[arrRegionalDir.indexOf(aggname)]);
                                              arrCRCount.push(arrCRCountNord[arrRegionalDir.indexOf(aggname)]);
                                              arrCRAnomalie.push(arrCRAnomalieNord[arrRegionalDir.indexOf(aggname)]);
                                              arrCRPercent.push(arrCRPercentNord[arrRegionalDir.indexOf(aggname)]); 
                                            }
                                          }
                                          else if (dirReg=="DIRECTION REGIONALE TUNIS NORD") {
                                            if (aggname=="Agence") {
                                              arrRegionalDir=arrRegionalDirTunNord;
                                              arrCRCount=arrCRCountTunNord;
                                              arrCRAnomalie=arrCRAnomalieTunNord;
                                              arrCRPercent=arrCRPercentTunNord;                                              
                                            }else{
                                              arrRegionalDir.push(arrRegionalDirTunNord[arrRegionalDir.indexOf(aggname)]);
                                              arrCRCount.push(arrCRCountTunNord[arrRegionalDir.indexOf(aggname)]);
                                              arrCRAnomalie.push(arrCRAnomalieTunNord[arrRegionalDir.indexOf(aggname)]);
                                              arrCRPercent.push(arrCRPercentTunNord[arrRegionalDir.indexOf(aggname)]); 
                                            }
                                          }
                                          else if (dirReg=="DIRECTION REGIONALE TUNIS SUD  ET CAP BON") {
                                            if (aggname=="Agence") {
                                              arrRegionalDir=arrRegionalDirTunCAP;
                                              arrCRCount=arrCRCountTunCAP;
                                              arrCRAnomalie=arrCRAnomalieTunCAP;
                                              arrCRPercent=arrCRPercentTunCAP;                                              
                                            }else{
                                              arrRegionalDir.push(arrRegionalDirTunCAP[arrRegionalDirTunCAP.indexOf(aggname)]);
                                              arrCRCount.push(arrCRCountTunCAP[arrRegionalDirTunCAP.indexOf(aggname)]);
                                              arrCRAnomalie.push(arrCRAnomalieTunCAP[arrRegionalDirTunCAP.indexOf(aggname)]);
                                              arrCRPercent.push(arrCRPercentTunCAP[arrRegionalDirTunCAP.indexOf(aggname)]); 
                                            }
                                          }
                                          else if (dirReg=="DIRECTION REGIONALE DU SAHEL") {
                                            if (aggname=="Agence") {
                                              arrRegionalDir=arrRegionalDirSahel;
                                              arrCRCount=arrCRCountSahel;
                                              arrCRAnomalie=arrCRAnomalieSahel;
                                              arrCRPercent=arrCRPercentSahel;                                              
                                            }else{
                                              arrRegionalDir.push(arrRegionalDirSahel[arrRegionalDirSahel.indexOf(aggname)]);
                                              arrCRCount.push(arrCRCountSahel[arrRegionalDirSahel.indexOf(aggname)]);
                                              arrCRAnomalie.push(arrCRAnomalieSahel[arrRegionalDirSahel.indexOf(aggname)]);
                                              arrCRPercent.push(arrCRPercentSahel[arrRegionalDirSahel.indexOf(aggname)]); 
                                            }
                                          }
                                          else if (dirReg=="DIRECTION REGIONALE SFAX ET CENTRE") {
                                            if (aggname=="Agence") {
                                              arrRegionalDir=arrRegionalDirSfaxCen;
                                              arrCRCount=arrCRCountSfaxCen;
                                              arrCRAnomalie=arrCRAnomalieSfaxCen;
                                              arrCRPercent=arrCRPercentSfaxCen;                                              
                                            }else{
                                              arrRegionalDir.push(arrRegionalDirSfaxCen[arrRegionalDirSfaxCen.indexOf(aggname)]);
                                              arrCRCount.push(arrCRCountSfaxCen[arrRegionalDirSfaxCen.indexOf(aggname)]);
                                              arrCRAnomalie.push(arrCRAnomalieSfaxCen[arrRegionalDirSfaxCen.indexOf(aggname)]);
                                              arrCRPercent.push(arrCRPercentSfaxCen[arrRegionalDirSfaxCen.indexOf(aggname)]); 
                                            }
                                          }
                                          else if (dirReg=="DIRECTION REGIONALE DU SUD") {
                                            if (aggname=="Agence") {
                                              arrRegionalDir=arrRegionalDirSud;
                                              arrCRCount=arrCRCountSud;
                                              arrCRAnomalie=arrCRAnomalieSud;
                                              arrCRPercent=arrCRPercentSud;                                              
                                            }else{
                                              arrRegionalDir.push(arrRegionalDirSud[arrRegionalDirSud.indexOf(aggname)]);
                                              arrCRCount.push(arrCRCountSud[arrRegionalDirSud.indexOf(aggname)]);
                                              arrCRAnomalie.push(arrCRAnomalieSud[arrRegionalDirSud.indexOf(aggname)]);
                                              arrCRPercent.push(arrCRPercentSud[arrRegionalDirSud.indexOf(aggname)]);
                                            }
                                          }


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
                                          loadComparaison(moyAnJr,sumAnJr1,sumAnJr2,arrRegionalDir);
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
                                                text: 'Répartition des CR par Agence'
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
                                                text: 'Répartition des Anomalies par Agence'
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
                    function loadComparaison(moyAnJr,sumAnJr1,sumAnJr2,arrRegionalDir){
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
                        var tauxCouverture = parseFloat((nbJrsControle/parseFloat(arrRegionalDir.length*nbJrsTheo))*100);
                                  
                                  var comTaux=parseFloat(100-tauxCouverture);
                                  var moisAnnAct1111=moment().format("MM-YYYY");
                                   
                                  document.getElementById("container1").innerHTML ='<h1>Taux de couverture</h1>'+
                                  '<div class="demo-wrapper html5-progress-bar">'+
                                      '<div class="progress-bar-wrapper">'+
                                          '<progress id="progressbar" value="'+tauxCouverture+'" max="100"></progress> <span class="progress-value">'+parseFloat(tauxCouverture).toFixed(3)+'%</span>'+

                                      '</div>'+
                                  '</div>';
                    }

  }else{
    var urlFilterSel="";
    var urlFilterSel2="";

  // if (rad3.checked){
  //   var date001 = document.getElementById("start").value;
  //   var date002 = document.getElementById("finish").value;
  // }  
  
    var timeFilter=document.getElementById("myList01").value;
  
    if (dirReg!="") {
      urlFilterSel+=" and R_x00e9_gion_x0020_de_x0020_l_x0 eq'"+dirReg+"'";
      urlFilterSel2+="&$filter=Direction_x0020_R_x00e9_gionale eq'"+dirReg+"'";
    }
    if (AgggIdd!="") {
      urlFilterSel+=" and AgenceId eq "+AgggIdd;
      urlFilterSel2+=" and ID%20eq%20"+AgggIdd;
    }

     var responseAgenceNumber=responseAgenceNumber||[];
    var urlAgenceNumber=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Title,ID"+urlFilterSel2;
    //////////////////////console.log.log('urlAgenceNumber= '+urlAgenceNumber);
    function LoadAgenceNumber() {
              var nbre = 0;


              $.ajax({
                  url: urlAgenceNumber,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseAgenceNumber = responseAgenceNumber.concat(data.d.results);
                      if (data.d.__next) {
                          urlAgenceNumber = data.d.__next;
                          LoadAgenceNumber();
                      }else if (!(data.d.__next)) {
                        var nbAg=0;
                        $.each(responseAgenceNumber, function (key, value) {
                          nbAg++;
                        });
                      loadContrlInfo(nbAg)

                      }
                      
                  }
              });
          }
          LoadAgenceNumber();
function loadContrlInfo(nbAg) {
  moment.locale('fr');
  if (timeFilter=="Mensuel") {
    var list02 = document.getElementById("myList02").value;
    var startOfMonth1= moment(list02).format('YYYY-MM-DD');
  var endOfMonth1 = moment(startOfMonth1).add(1, 'month').format('YYYY-MM-DD');
  var urlDateDebut1=startOfMonth1+'T00:00:00.000';
  var urlDateFin1=endOfMonth1+'T00:00:00.000';
  }else if (timeFilter=="Trimestriel") {
    var list02 = document.getElementById("myList02").value;
    var startOfMonth1= moment(list02).format('YYYY-MM-DD');
  var endOfMonth1 = moment(startOfMonth1).add(3, 'month').format('YYYY-MM-DD');
  var urlDateDebut1=startOfMonth1+'T00:00:00.000';
  var urlDateFin1=endOfMonth1+'T00:00:00.000';
  }else if (timeFilter=="Annuel") {
    var list02 = document.getElementById("myList02").value;
    var startOfMonth1= moment(list02).format('YYYY-MM-DD');
  var endOfMonth1 = moment(startOfMonth1).add(1, 'years').format('YYYY-MM-DD');
  var urlDateDebut1=startOfMonth1+'T00:00:00.000';
  var urlDateFin1=endOfMonth1+'T00:00:00.000';
  }
  
   
   var responseCouverture=responseCouverture || []
   var urlCouverture=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Avis_x0020_DCP%20eq%27Vérifiée%27 and "+datefilter+" ge datetime'"+urlDateDebut1+"' and "+datefilter+" lt datetime'"+urlDateFin1+"'"+urlFilterSel;
    console.log('urlCouverture= '+urlCouverture);
    function loadCouverture() {
              


              $.ajax({
                  url: urlCouverture,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseCouverture = responseCouverture.concat(data.d.results);
                      if (data.d.__next) {
                          urlCouverture = data.d.__next;
                          loadCouverture();
                      }

                      else if (!data.d.__next) {
                        var nbJrsTheo=21;
                        var nbJrsControle=0;
                        $.each(responseCouverture, function (key, value) {
                          nbJrsControle++;
                        });
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
                      
                    
                      
                      
                  }
              });
          }
        loadCouverture();
}

var responseAgenceDirection= responseAgenceDirection || [];
var urlAgenceDirection=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Id,Title,Contr_x00f4_leur_x0020_R_x00e9_gId"+urlFilterSel2;
////console.log("urlAgenceDirection= "+urlAgenceDirection);
  function loadAgenceDirection() {
              $.ajax({
                  url: urlAgenceDirection,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseAgenceDirection = responseAgenceDirection.concat(data.d.results);
                      if (data.d.__next) {
                          urlAgenceDirection = data.d.__next;
                          loadAgenceDirection();
                      }
                      else if (!data.d.__next) {
                        var arrRegionalDirAg=[];
                        var arrRegionalDirAgId=[];
                        var arrCRCount=[];
                        var arrCRAnomalie=[];
                        var arrMois=[];
                        var arrSumMoiCr=[];
                        var arrSumMoiAnnomalie=[];
                        var sumCr=0;
                        var sumAnn=0;
                        //******************************************
                        var arrCRConformeSum=[];
                        var arrCRTotal=[];
                        var arrCRPercent=[];
                        //******************************************
                        console.log("responseAgenceDirection= "+responseAgenceDirection.length);
                        $.each(responseAgenceDirection, function (key, value) {
                           
                           
                            
                            
                               var idAg=value.Id;
                             var nomAg=value.Title;
                             arrRegionalDirAg.push(nomAg);
                             arrRegionalDirAgId.push(idAg);
                             arrCRCount.push(0);
                             arrCRAnomalie.push(0);

                             arrCRConformeSum.push(0);
                             arrCRTotal.push(0);
                             arrCRPercent.push(0);
                           

                        });
                          loadFilterBar(arrRegionalDirAg,arrRegionalDirAgId,arrCRCount,arrCRAnomalie,arrMois,arrSumMoiCr,arrSumMoiAnnomalie,sumCr,sumAnn,arrCRConformeSum,arrCRTotal,arrCRPercent);
                     }
                      
                    
                      
                      
                  }
              });
          }
        loadAgenceDirection();
function loadFilterBar(arrRegionalDirAg,arrRegionalDirAgId,arrCRCount,arrCRAnomalie,arrMois,arrSumMoiCr,arrSumMoiAnnomalie,sumCr,sumAnn,arrCRConformeSum,arrCRTotal,arrCRPercent){
    moment.locale('fr');
    var startOfMonth="";
    var endOfMonth ="";
      if (timeFilter=="Mensuel") {
        var list02 = document.getElementById("myList02").value;
        startOfMonth= moment(list02).format('YYYY-MM-DD');
      endOfMonth = moment(startOfMonth).add(1, 'month').format('YYYY-MM-DD');
      var urlDateDebut=startOfMonth+'T00:00:00.000';
      var urlDateFin=endOfMonth+'T00:00:00.000';
      }else if (timeFilter=="Trimestriel") {
        var list02 = document.getElementById("myList02").value;
        startOfMonth= moment(list02).format('YYYY-MM-DD');
      endOfMonth = moment(startOfMonth).add(3, 'month').format('YYYY-MM-DD');
      var urlDateDebut=startOfMonth+'T00:00:00.000';
      var urlDateFin=endOfMonth+'T00:00:00.000';
      }else if (timeFilter=="Annuel") {
        var list02 = document.getElementById("myList02").value;
        startOfMonth= moment(list02).format('YYYY-MM-DD');
      endOfMonth = moment(startOfMonth).add(1, 'years').format('YYYY-MM-DD');
      var urlDateDebut=startOfMonth+'T00:00:00.000';
      var urlDateFin=endOfMonth+'T00:00:00.000';
      }
       var colors=["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
       var colors1=["#cf232a","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
        var responseReparationCRFilter=responseReparationCRFilter || []
       var urlReparationCRFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Avis_x0020_DCP%20eq%27Vérifiée%27 and "+datefilter+" ge datetime'"+urlDateDebut+"' and "+datefilter+" lt datetime'"+urlDateFin+"'"+urlFilterSel;

        console.log('urlReparationCRFilter= '+urlReparationCRFilter);
        function LoadChartsFilter() {
                  var nbre = 0;


                  $.ajax({
                      url: urlReparationCRFilter,
                      method: "GET",
                      dataType: "json",
                      headers: { Accept: "application/json;odata=verbose" },
                      success: function (data) {
                          responseReparationCRFilter = responseReparationCRFilter.concat(data.d.results);
                          if (data.d.__next) {
                              urlReparationCRFilter = data.d.__next;
                              LoadChartsFilter();
                          }
                          else if (!data.d.__next) {
                            

                            
                            $.each(responseReparationCRFilter, function (key, value) {
                              sumCr++;
                              
                              var aggenceId=value.AgenceId;
                              var aggence=arrRegionalDirAg[arrRegionalDirAgId.indexOf(aggenceId)];
                              arrCRCount[arrRegionalDirAg.indexOf(aggence)]=parseInt(arrCRCount[arrRegionalDirAg.indexOf(aggence)]+1);
                              var nbNonConforme=0;
                              if (value.N_x00b0__x0020_Non_x0020_Conform!=null) {
                                nbNonConforme=value.N_x00b0__x0020_Non_x0020_Conform;
                              }
                              arrCRAnomalie[arrRegionalDirAg.indexOf(aggence)]=parseInt(arrCRAnomalie[arrRegionalDirAg.indexOf(aggence)]+nbNonConforme);
                                sumAnn=parseInt(sumAnn+nbNonConforme);
                              var nbConforme=0;
                              if (value.N_x00b0__x0020_Conforme!=null) {
                                nbConforme=value.N_x00b0__x0020_Conforme;
                              }
                              arrCRConformeSum[arrRegionalDirAg.indexOf(aggence)]=parseInt(arrCRConformeSum[arrRegionalDirAg.indexOf(aggence)]+nbConforme);
                              var totalCoonn=0;
                              totalCoonn=parseInt(nbConforme+nbNonConforme);
                              arrCRTotal[arrRegionalDirAg.indexOf(aggence)]=parseInt(arrCRTotal[arrRegionalDirAg.indexOf(aggence)]+totalCoonn);
                            });

                            
                              //////console.log("arrCRCount= "+arrCRCount);
                              
                              if (timeFilter=="Mensuel"){
                                var moisAct=moment(startOfMonth).format("MM-YYYY");
                                var lab="mois "+moisAct;
                                arrMois.push(lab);
                                //****************mois avril 2023 dir sud*******************************************************//
                                if ((rad2.checked)&&(list02Stat=="2023-04-01")) {
                                  var aggg1="BEN GUERDENE";
                                  if (arrRegionalDirAg.indexOf(aggg1)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg1)]=10 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg1)]=6 ;
                                  }
                                  var aggg2="BIR LAHMAR";
                                  if (arrRegionalDirAg.indexOf(aggg2)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg2)]=12 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg2)]=22 ;
                                  }
                                  var aggg3="DJERBA MIDOUN";
                                  if (arrRegionalDirAg.indexOf(aggg3)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg3)]=13 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg3)]=15 ;
                                  }
                                  var aggg4="GABES";
                                  if (arrRegionalDirAg.indexOf(aggg4)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg4)]=6 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg4)]=32 ;
                                  }
                                  var aggg5="GAFSA";
                                  if (arrRegionalDirAg.indexOf(aggg5)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg5)]=10 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg5)]=20 ;
                                  }
                                  var aggg6="HOUMET ESSOUK DJERBA";
                                  if (arrRegionalDirAg.indexOf(aggg6)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg6)]=13 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg6)]=3 ;
                                  }
                                  var aggg7="KASSERINE";
                                  if (arrRegionalDirAg.indexOf(aggg7)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg7)]=10 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg7)]=70 ;
                                  }
                                  var aggg8="KEBELI";
                                  if (arrRegionalDirAg.indexOf(aggg8)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg8)]=10 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg8)]=70 ;
                                  }
                                  var aggg9="MARETH";
                                  if (arrRegionalDirAg.indexOf(aggg9)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg9)]=13 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg9)]=14 ;
                                  }
                                  var aggg10="MEDNINE";
                                  if (arrRegionalDirAg.indexOf(aggg10)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg10)]=13 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg10)]=21 ;
                                  }
                                  var aggg11="METLAOUI";
                                  if (arrRegionalDirAg.indexOf(aggg11)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg11)]=10 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg11)]=40 ;
                                  }
                                  var aggg12="MOULARES";
                                  if (arrRegionalDirAg.indexOf(aggg12)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg12)]=10 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg12)]=60 ;
                                  }
                                  var aggg13="SBITLA";
                                  if (arrRegionalDirAg.indexOf(aggg13)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg13)]=10 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg13)]=50 ;
                                  }
                                  var aggg14="TATAOUINE";
                                  if (arrRegionalDirAg.indexOf(aggg14)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg14)]=18 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg14)]=84 ;
                                  }
                                  var aggg15="TOZEUR";
                                  if (arrRegionalDirAg.indexOf(aggg15)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg15)]=10 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg15)]=80 ;
                                  }
                                  var aggg16="ZARZIS";
                                  if (arrRegionalDirAg.indexOf(aggg16)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg16)]=10 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg16)]=3 ;
                                  }
                                  var aggg17="GABES SUD";
                                  if (arrRegionalDirAg.indexOf(aggg17)>-1) {
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggg17)]=13 ;
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggg17)]=5 ;
                                  }
                                }
                                
                                
                              }
                              else if (timeFilter=="Trimestriel"){
                                var moisAct=moment(startOfMonth).format("MM-YYYY");
                                var lab="trimestre "+moisAct;
                                arrMois.push(lab);
                              }
                              else if (timeFilter=="Annuel"){
                                var moisAct=moment(startOfMonth).format("YYYY");
                                var lab="année "+moisAct;
                                arrMois.push(lab);
                              }
                              
                              arrSumMoiCr.push(sumCr);
                              arrSumMoiAnnomalie.push(sumAnn);
                              
                              for (var i = 1; i < 3; i++) {
                                if (timeFilter=="Mensuel"){
                                  monthAdd=parseInt(i)*-1;
                                  var date1=moment(startOfMonth).add(monthAdd, 'months').format('YYYY-MM-DD');
                                  var date2=moment(date1).add(1, 'months').format('YYYY-MM-DD');
                                  var label="mois "+moment(date1).format('MM-YYYY')
                                  //console.log("label= "+label);
                                  loadPreviousInfoFilter(arrMois,arrSumMoiCr,arrSumMoiAnnomalie,date1,date2,label,i);
                                }else if (timeFilter=="Trimestriel") {
                                  monthAdd=parseInt(i)*-3;
                                  var date1=moment(startOfMonth).add(monthAdd, 'months').format('YYYY-MM-DD');
                                  var date2=moment(date1).add(3, 'months').format('YYYY-MM-DD');
                                  var label="trimestre "+moment(date1).format('MM-YYYY')
                                  loadPreviousInfoFilter(arrMois,arrSumMoiCr,arrSumMoiAnnomalie,date1,date2,label,i);
                                }else if (timeFilter=="Annuel") {
                                  monthAdd=parseInt(i)*-1;
                                  var date1=moment(startOfMonth).add(monthAdd, 'years').format('YYYY-MM-DD');
                                  var date2=moment(date1).add(1, 'years').format('YYYY-MM-DD');
                                  var label="année "+moment(date1).format('YYYY')
                                  loadPreviousInfoFilter(arrMois,arrSumMoiCr,arrSumMoiAnnomalie,date1,date2,label,i);
                                }
                                
                              }
                              
                              var moisAnnAct=moment().format("MM-YYYY");
                               var moyAnJr=0;
                        var sumAnJr=0; 
                        var sumAnJr1=0;
                        var sumAnJr2=0; 
                        for (var i = 0; i < arrCRPercent.length; i++) {
                          if (arrCRCount[i]!=0) {
                            var newPercent=parseFloat(arrCRAnomalie[i]/arrCRCount[i]).toFixed(2);
                            sumAnJr+=parseFloat(newPercent);
                            arrCRPercent[i]=parseFloat(newPercent);
                            sumAnJr1+=parseFloat(arrCRCount[i]);
                            sumAnJr2+=parseFloat(arrCRAnomalie[i]);
                          }
                        }
                        moyAnJr=0;
                        if (sumAnJr1!=0) {
                          moyAnJr=parseFloat(sumAnJr2/sumAnJr1).toFixed(2);
                        }
                              //
                              document.getElementById("MoyAnnJr").innerHTML =moyAnJr;
                              document.getElementById("NbCR").innerHTML =parseFloat(sumAnJr1).toFixed(0);
                              document.getElementById("NbAnn").innerHTML =parseFloat(sumAnJr2).toFixed(0);
                              var ss1=0;
                                  for (var i = 0; i < arrCRPercent.length; i++) {
                                    ss1+=parseFloat(arrCRPercent[i]);
                                  }
                                  var mm1=parseFloat(ss1/arrCRPercent.length).toFixed(2);
                                  //document.getElementById("MoyAnnJr1").innerHTML =mm1;

                            Highcharts.chart('container4', {
                              chart: {
                                  type: 'column'
                              },
                              xAxis: {
                                  categories: arrRegionalDirAg,
                                  style: {
                                    fontSize: '2px'
                                  }
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
                                    text: 'Répartition des CR par Agence'
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
                                  categories: arrRegionalDirAg,
                                  style: {
                                    fontSize: '2px'
                                  }
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
                                    text: 'Répartition des Anomalies par Agence'
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
                              categories: arrRegionalDirAg,
                                  style: {
                                    fontSize: '2px'
                                  }
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
                      

                      //******************************************

                         }
                          
                        
                          
                          
                      }
                  });
              }
            LoadChartsFilter();
}




        function loadPreviousInfoFilter(arrMois,arrSumMoiCr,arrSumMoiAnnomalie,date1,date2,label,counter) {
          //console.log("counter= "+counter)
          var limit1=date1+'T00:00:00.000';
          var limit2=date2+'T00:00:00.000';
          var urlPreviousInfoFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Avis_x0020_DCP%20eq%27Vérifiée%27 and "+datefilter+" ge datetime'"+limit1+"' and "+datefilter+" lt datetime'"+limit2+"'"+urlFilterSel;
          //console.log("urlPreviousInfoFilter= "+urlPreviousInfoFilter);
          var responsePreviousInfoFilter=responsePreviousInfoFilter||[];
          function loadInfoFFilter() {
              var nbre = 0;


              $.ajax({
                  url: urlPreviousInfoFilter,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responsePreviousInfoFilter = responsePreviousInfoFilter.concat(data.d.results);
                      if (data.d.__next) {
                          urlPreviousInfoFilter = data.d.__next;
                          loadInfoFFilter();
                      }
                      else if (!data.d.__next) {
                        

                        var sumCr=0;
                        var sumAnn=0;
                        $.each(responsePreviousInfoFilter, function (key, value) {
                          sumCr++;
                          
                          var nbNonConforme=0;
                          if (value.N_x00b0__x0020_Non_x0020_Conform!=null) {
                            nbNonConforme=value.N_x00b0__x0020_Non_x0020_Conform;

                          }
                          
                            sumAnn=parseInt(sumAnn+nbNonConforme);
                            //console.log("sumAnn= "+sumAnn);
                        });

                          //console.log("sumCr= "+sumCr);
                          ////console.log("arrSumMoiCr= "+arrSumMoiCr);
                          arrMois[counter]=label;
                          arrSumMoiCr[counter]=sumCr;
                          arrSumMoiAnnomalie[counter]=sumAnn;
                          if (counter==2) {
                            var list0002 = document.getElementById("myList02").value;
                            var anneeAct=moment(list0002).format("YYYY");
                            var annPass=moment(anneeAct).add(-1, 'year').format('YYYY');
                            var limitYear1=annPass+"-01-01T00:00:00.000";
                            var limitYear2=annPass+"-12-31T00:00:00.000";
                            
                            loadInfoPrevYearFilter(limitYear1,limitYear2,arrMois,arrSumMoiCr,arrSumMoiAnnomalie);
                          }
                          var rappCrAnnomalie=[];
                            for (var i = 0; i < arrMois.length; i++) {
                              if (arrSumMoiAnnomalie[i]==0||arrSumMoiCr[i]==0) {
                                rappCrAnnomalie[i]=0;
                              }
                              else{
                                var newRapport=parseFloat(parseFloat(arrSumMoiAnnomalie[i])/parseFloat(arrSumMoiCr[i])).toFixed(2);
                                rappCrAnnomalie[i]=parseFloat(newRapport);
                              }
                            }
                            var tauxMois=0;
                            var tauxMoisAnn=0;
                            if (rappCrAnnomalie[1]!=0) {
                              tauxMois=parseFloat(((rappCrAnnomalie[1]-rappCrAnnomalie[0])/rappCrAnnomalie[1])*100).toFixed(2);
                            }
                            if (rappCrAnnomalie[3]!=0) {
                              tauxMoisAnn=parseFloat(((rappCrAnnomalie[3]-rappCrAnnomalie[0])/rappCrAnnomalie[3])*100).toFixed(2);
                            }
                            
                            //////console.log("rappCrAnnomalie= "+rappCrAnnomalie);
                            var list002 = document.getElementById("myList02").value;
                            if (timeFilter=="Mensuel"){
                              var moisAnnAct11=" mois "+moment(list002).format("MM-YYYY");
                            }
                            else if (timeFilter=="Trimestriel"){
                              var moisAnnAct11=" trimestre "+moment(list002).format("MM-YYYY");
                            }
                            else if (timeFilter=="Annuel"){
                              var moisAnnAct11=" année "+moment(list002).format("YYYY");
                            }
                            
                          Highcharts.chart('container2', {
                          chart: {
                              type: 'bar'
                          },
                          xAxis: {
                              categories: arrMois
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
                              data: rappCrAnnomalie
                          }]
                      });
                          


                     }
                      
                    
                      
                      
                  }
              });
          }
        loadInfoFFilter();
        }
          function loadInfoPrevYearFilter(limitYear1,limitYear2,arrMois,arrSumMoiCr,arrSumMoiAnnomalie){
            var urlPreviousYearFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$select=N_x00b0__x0020_Non_x0020_Conform&$filter=Avis_x0020_DCP%20eq%27Vérifiée%27 and "+datefilter+" ge datetime'"+limitYear1+"' and "+datefilter+" le datetime'"+limitYear2+"' and Avis_x0020_DCP%20eq%27Vérifiée%27";
            var responsePreviousYearFilter=responsePreviousYearFilter||[];
      function loaddPreviousYearFilter() {
                var nbre = 0;


                $.ajax({
                    url: urlPreviousYearFilter,
                    method: "GET",
                    dataType: "json",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (data) {
                        responsePreviousYearFilter = responsePreviousYearFilter.concat(data.d.results);
                        if (data.d.__next) {
                            urlPreviousYearFilter = data.d.__next;
                            loaddPreviousYearFilter();
                        }
                        else if (!data.d.__next) {
                          

                          var sumCr=0;
                          var sumAnn=0;
                          $.each(responsePreviousYearFilter, function (key, value) {
                            sumCr++;
                            
                            var nbNonConforme=0;
                            if (value.N_x00b0__x0020_Non_x0020_Conform!=null) {
                              nbNonConforme=value.N_x00b0__x0020_Non_x0020_Conform;
                            }
                            
                              sumAnn=parseInt(sumAnn+nbNonConforme);
                          });
                            ////console.log("arrCRCount= "+arrCRCount);
                            var labYer="Moyenne- "+moment().add(-1, 'year').format('YYYY');
                            arrMois.push(labYer);
                            arrSumMoiCr.push(sumCr);
                            arrSumMoiAnnomalie.push(sumAnn);
                           // //console.log("arrMois= "+arrMois);
                           //    //console.log("arrSumMoiCr= "+arrSumMoiCr);
                           //    //console.log("arrSumMoiAnnomalie= "+arrSumMoiAnnomalie);
                              var rappCrAnnomalie=[];
                              for (var i = 0; i < arrMois.length; i++) {
                                if (arrSumMoiAnnomalie[i]==0||arrSumMoiCr[i]==0) {
                                  rappCrAnnomalie[i]=0;
                                }
                                else{
                                  rappCrAnnomalie[i]=parseFloat(parseFloat(arrSumMoiAnnomalie[i])/parseFloat(arrSumMoiCr[i]));
                                }
                              }
                              var tauxMois=0;
                              var tauxMoisAnn=0;
                              if (rappCrAnnomalie[1]!=0) {
                                tauxMois=parseFloat(((rappCrAnnomalie[1]-rappCrAnnomalie[0])/rappCrAnnomalie[1])*100).toFixed(2);
                              }
                              if (rappCrAnnomalie[3]!=0) {
                                tauxMoisAnn=parseFloat(((rappCrAnnomalie[3]-rappCrAnnomalie[0])/rappCrAnnomalie[3])*100).toFixed(2);
                              }
                              var list0002 = document.getElementById("myList02").value;
                              var ch1="";
                              var ch2="";
                              var timeFilter1=document.getElementById("myList01").value;
                              console.log("timeFilter1= "+timeFilter1);
                              if (timeFilter1=="Mensuel"){
                                var annPred=moment(list0002).add(-1, 'year').format('YYYY');
                                var moisPred=moment(list0002).add(-1, 'month').format('MM-YYYY');
                                var mois=moment(list0002).format('MM-YYYY');
                                ch1="Taux d'amélioration Moyenne M-"+mois+"/ Moy. M-"+moisPred;
                                ch2="Taux d'amélioration Moyenne M-"+mois+"/ Moy. A-"+annPred;
                                console.log('ch1 test1= '+ch1);
                                console.log('ch2 test1= '+ch2);
                              }
                              else if (timeFilter1=="Trimestriel"){
                                var annPred=moment(list0002).add(-1, 'year').format('YYYY');
                                var moisPred=moment(list0002).add(-3, 'month').format('MM-YYYY');
                                var mois=moment(list0002).format('MM-YYYY');
                                ch1="Taux d'amélioration Moyenne T-"+mois+"/ Moy. T-"+moisPred;
                                ch2="Taux d'amélioration Moyenne T-"+mois+"/ Moy. A-"+annPred;
                                console.log('ch1 test2= '+ch1);
                                console.log('ch2 test2= '+ch2);
                              }
                              else if (timeFilter1=="Annuel"){
                                var annPred=moment(list0002).add(-1, 'year').format('YYYY');
                                var moisPred=moment(list0002).add(-1, 'year').format('YYYY');
                                var mois=moment(list0002).format('YYYY');
                                ch1="Taux d'amélioration Moyenne A-"+mois+"/ Moy. A-"+moisPred;
                                ch2="Taux d'amélioration Moyenne A-"+mois+"/ Moy. A-"+annPred;
                                console.log('ch1 test3= '+ch1);
                                console.log('ch2 test3= '+ch2);
                              }
                              
                              //console.log("tauxMoisAnn= "+tauxMoisAnn);
                              document.getElementById("titre1").innerHTML ='<a class="list-group-item" style="font-size: 17px;color: #000; margin-top: 0%;margin-bottom: 25%;">'+ch1+'</a>';
                              document.getElementById("titre2").innerHTML ='<a class="list-group-item" style="font-size: 17px;color: #000; margin-top: 0%;margin-bottom: 25%;">'+ch2+'</a>';
                              //image1 value1 titre1 image2 value2 titre2
                              if (tauxMois<0) {
                                document.getElementById("image1").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/vert.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                                document.getElementById("value1").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #35ab0e;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%; width:40%;">'+tauxMois+'%</a>';
                              }
                              else if (tauxMois==0) {
                                document.getElementById("image1").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                                document.getElementById("value1").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #ff5722;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;width:40%;">'+tauxMois+'%</a>';
                              }
                              else if (tauxMois>0) {
                                document.getElementById("image1").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/rouge.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                                document.getElementById("value1").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #d13a36;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;width:40%;">'+tauxMois+'%</a>';
                              }

                              if (tauxMoisAnn<0) {
                                document.getElementById("image2").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/vert.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                                document.getElementById("value2").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #35ab0e;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;width:40%;">'+tauxMoisAnn+'%</a>';
                              }
                              else if (tauxMoisAnn==0) {
                                //console.log('00000')
                                document.getElementById("image2").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/jaune.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                                document.getElementById("value2").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #ff5722;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;width:40%;">'+tauxMoisAnn+'%</a>';
                              }
                              else if (tauxMoisAnn>0) {
                                document.getElementById("image2").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/rouge.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;'>";
                                document.getElementById("value2").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #d13a36;margin-left: 25%;margin-right: 25%;margin-top: 0%;margin-bottom: 5%;width:40%;">'+tauxMoisAnn+'%</a>';
                              }
                              ////console.log("rappCrAnnomalie= "+rappCrAnnomalie);
                              
                       }
                        
                      
                        
                        
                    }
                });
            }
          loaddPreviousYearFilter();
        }
  }
    
    
}

function mainFilter2() {
        var datefilter="";
        var rad1 = document.getElementById('flexRadioDefault1');
        var rad2 = document.getElementById('flexRadioDefault2');
        //console.log("test= "+rad1.checked)
        if (rad1.checked) {
          datefilter="Date_x0020_Journ_x00e9_e";
        }else if (rad2.checked) {
          datefilter="Date_x0020_Controle";
        }


        var dirReg = document.getElementById("myList1").value;
          var AgggIdd = document.getElementById("myList2").value;

            document.getElementById("div-container1").innerHTML ='<div id="container1"></div>';
          document.getElementById("div-container2").innerHTML ='<div id="container2"></div>';
          document.getElementById("div-container4").innerHTML ='<div id="container4"></div>';
          document.getElementById("div-container5").innerHTML ='<div id="container5"></div>';
          document.getElementById("div-container44").innerHTML ='<div id="container44"></div>';
          
          var urlFilterSel="";
          var urlFilterSel2="";
        
        // if (rad3.checked){
        //   
        //   
        // }  
        
          var timeFilter=document.getElementById("myList01").value;
        
          if (dirReg!="") {
            urlFilterSel+=" and R_x00e9_gion_x0020_de_x0020_l_x0 eq'"+dirReg+"'";
            urlFilterSel2+="&$filter=Direction_x0020_R_x00e9_gionale eq'"+dirReg+"'";
          }
          if (AgggIdd!="") {
            urlFilterSel+=" and AgenceId eq "+AgggIdd;
            urlFilterSel2+=" and ID%20eq%20"+AgggIdd;
          }

           var responseAgenceNumber=responseAgenceNumber||[];
          var urlAgenceNumber=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Title,ID"+urlFilterSel2;
          //////////////////////console.log.log('urlAgenceNumber= '+urlAgenceNumber);
          function LoadAgenceNumber() {
                    var nbre = 0;


                    $.ajax({
                        url: urlAgenceNumber,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAgenceNumber = responseAgenceNumber.concat(data.d.results);
                            if (data.d.__next) {
                                urlAgenceNumber = data.d.__next;
                                LoadAgenceNumber();
                            }else if (!(data.d.__next)) {
                              var nbAg=0;
                              $.each(responseAgenceNumber, function (key, value) {
                                nbAg++;
                              });
                            loadContrlInfo(nbAg)

                            }
                            
                        }
                    });
                }
                LoadAgenceNumber();
      function loadContrlInfo(nbAg) {
        
        moment.locale('fr');
        var date001 = document.getElementById("start").value;
        var date002 = document.getElementById("finish").value;
         var startOfMonth1= moment(date001).format('YYYY-MM-DD');
         var endOfMonth1 = moment(date002).format('YYYY-MM-DD');
         var urlDateDebut1=startOfMonth1+'T00:00:00.000';
         var urlDateFin1=endOfMonth1+'T00:00:00.000';
         var responseCouverture=responseCouverture || []
         var urlCouverture=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Avis_x0020_DCP%20eq%27Vérifiée%27 and "+datefilter+" ge datetime'"+urlDateDebut1+"' and "+datefilter+" le datetime'"+urlDateFin1+"'"+urlFilterSel;
          //console.log('urlCouverture= '+urlCouverture);
          function loadCouverture() {
                    


                    $.ajax({
                        url: urlCouverture,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseCouverture = responseCouverture.concat(data.d.results);
                            if (data.d.__next) {
                                urlCouverture = data.d.__next;
                                loadCouverture();
                            }

                            else if (!data.d.__next) {
                              var nbJrsTheo=21;
                              var nbJrsControle=0;
                              $.each(responseCouverture, function (key, value) {
                                nbJrsControle++;
                              });
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
                            
                          
                            
                            
                        }
                    });
                }
              loadCouverture();
      }

      var responseAgenceDirection= responseAgenceDirection || [];
      var urlAgenceDirection=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Id,Title,Contr_x00f4_leur_x0020_R_x00e9_gId"+urlFilterSel2;
      ////console.log("urlAgenceDirection= "+urlAgenceDirection);
        function loadAgenceDirection() {
                    $.ajax({
                        url: urlAgenceDirection,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAgenceDirection = responseAgenceDirection.concat(data.d.results);
                            if (data.d.__next) {
                                urlAgenceDirection = data.d.__next;
                                loadAgenceDirection();
                            }
                            else if (!data.d.__next) {
                              var arrRegionalDirAg=[];
                              var arrRegionalDirAgId=[];
                              var arrCRCount=[];
                              var arrCRAnomalie=[];
                              var arrMois=[];
                              var arrSumMoiCr=[];
                              var arrSumMoiAnnomalie=[];
                              var sumCr=0;
                              var sumAnn=0;
                              //******************************************
                              var arrCRConformeSum=[];
                              var arrCRTotal=[];
                              var arrCRPercent=[];
                              //******************************************
                              $.each(responseAgenceDirection, function (key, value) {
                                 
                                 
                                  
                                  
                                     var idAg=value.Id;
                                   var nomAg=value.Title;
                                   arrRegionalDirAg.push(nomAg);
                                   arrRegionalDirAgId.push(idAg);
                                   arrCRCount.push(0);
                                   arrCRAnomalie.push(0);

                                   arrCRConformeSum.push(0);
                                   arrCRTotal.push(0);
                                   arrCRPercent.push(0);
                                 

                              });
                                loadFilterBar(arrRegionalDirAg,arrRegionalDirAgId,arrCRCount,arrCRAnomalie,arrMois,arrSumMoiCr,arrSumMoiAnnomalie,sumCr,sumAnn,arrCRConformeSum,arrCRTotal,arrCRPercent);
                           }
                            
                          
                            
                            
                        }
                    });
                }
              loadAgenceDirection();
      function loadFilterBar(arrRegionalDirAg,arrRegionalDirAgId,arrCRCount,arrCRAnomalie,arrMois,arrSumMoiCr,arrSumMoiAnnomalie,sumCr,sumAnn,arrCRConformeSum,arrCRTotal,arrCRPercent){
          moment.locale('fr');
              var date001 = document.getElementById("start").value;
              var date002 = document.getElementById("finish").value;
             var startOfMonth= moment(date001).format('YYYY-MM-DD');
             var endOfMonth = moment(date002).format('YYYY-MM-DD');
             var urlDateDebut=startOfMonth+'T00:00:00.000';
             var urlDateFin=endOfMonth+'T00:00:00.000';
             var colors=["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
             var colors1=["#cf232a","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
              var responseReparationCRFilter=responseReparationCRFilter || []
             var urlReparationCRFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter= Avis_x0020_DCP%20eq%27Vérifiée%27 and "+datefilter+" ge datetime'"+urlDateDebut+"' and "+datefilter+" le datetime'"+urlDateFin+"'"+urlFilterSel;

              //console.log('urlReparationCRFilter= '+urlReparationCRFilter);
              function LoadChartsFilter() {
                        var nbre = 0;


                        $.ajax({
                            url: urlReparationCRFilter,
                            method: "GET",
                            dataType: "json",
                            headers: { Accept: "application/json;odata=verbose" },
                            success: function (data) {
                                responseReparationCRFilter = responseReparationCRFilter.concat(data.d.results);
                                if (data.d.__next) {
                                    urlReparationCRFilter = data.d.__next;
                                    LoadChartsFilter();
                                }
                                else if (!data.d.__next) {
                                  

                                  
                                  $.each(responseReparationCRFilter, function (key, value) {
                                    sumCr++;
                                    
                                    var aggenceId=value.AgenceId;
                                    var aggence=arrRegionalDirAg[arrRegionalDirAgId.indexOf(aggenceId)];
                                    arrCRCount[arrRegionalDirAg.indexOf(aggence)]=parseInt(arrCRCount[arrRegionalDirAg.indexOf(aggence)]+1);
                                    var nbNonConforme=0;
                                    if (value.N_x00b0__x0020_Non_x0020_Conform!=null) {
                                      nbNonConforme=value.N_x00b0__x0020_Non_x0020_Conform;
                                    }
                                    arrCRAnomalie[arrRegionalDirAg.indexOf(aggence)]=parseInt(arrCRAnomalie[arrRegionalDirAg.indexOf(aggence)]+nbNonConforme);
                                      sumAnn=parseInt(sumAnn+nbNonConforme);
                                    var nbConforme=0;
                                    if (value.N_x00b0__x0020_Conforme!=null) {
                                      nbConforme=value.N_x00b0__x0020_Conforme;
                                    }
                                    arrCRConformeSum[arrRegionalDirAg.indexOf(aggence)]=parseInt(arrCRConformeSum[arrRegionalDirAg.indexOf(aggence)]+nbConforme);
                                    var totalCoonn=0;
                                    totalCoonn=parseInt(nbConforme+nbNonConforme);
                                    arrCRTotal[arrRegionalDirAg.indexOf(aggence)]=parseInt(arrCRTotal[arrRegionalDirAg.indexOf(aggence)]+totalCoonn);
                                  });

                                  
                                    //////console.log("arrCRCount= "+arrCRCount);
                                    var moisAct=moment().format("MM-YYYY");
                                    arrMois.push(moisAct);
                                    arrSumMoiCr.push(sumCr);
                                    arrSumMoiAnnomalie.push(sumAnn);
                                    
                                    
                                    var moisAnnAct=moment().format("MM-YYYY");
                                    
                                     var moyAnJr=0;
                                      var sumAnJr=0; 
                                      var sumAnJr1=0;
                                      var sumAnJr2=0; 
                                      for (var i = 0; i < arrCRPercent.length; i++) {
                                        if (arrCRCount[i]!=0) {
                                          var newPercent=parseFloat(arrCRAnomalie[i]/arrCRCount[i]).toFixed(2);
                                          sumAnJr+=parseFloat(newPercent);
                                          arrCRPercent[i]=parseFloat(newPercent);
                                          sumAnJr1+=parseFloat(arrCRCount[i]);
                                          sumAnJr2+=parseFloat(arrCRAnomalie[i]);
                                        }
                                      }
                                      moyAnJr=parseFloat(sumAnJr2/sumAnJr1).toFixed(2);
                                  //
                                  document.getElementById("MoyAnnJr").innerHTML =moyAnJr;
                                  document.getElementById("NbCR").innerHTML =parseFloat(sumAnJr1).toFixed(0);
                                  document.getElementById("NbAnn").innerHTML =parseFloat(sumAnJr2).toFixed(0);
                                  var ss1=0;
                                  for (var i = 0; i < arrCRPercent.length; i++) {
                                    ss1+=parseFloat(arrCRPercent[i]);
                                  }
                                  var mm1=parseFloat(ss1/arrCRPercent.length).toFixed(2);
                                  //document.getElementById("MoyAnnJr1").innerHTML =mm1;
                                  Highcharts.chart('container4', {
                                    chart: {
                                        type: 'column'
                                    },
                                    xAxis: {
                                        categories: arrRegionalDirAg
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
                                          text: 'Répartition des CR par Agence'
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
                                        categories: arrRegionalDirAg
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
                                          text: 'Répartition des Anomalies par Agence'
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
                                    categories: arrRegionalDirAg
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
                            

                            //******************************************

                               }
                                
                              
                                
                                
                            }
                        });
                    }
                  LoadChartsFilter();
      }

}