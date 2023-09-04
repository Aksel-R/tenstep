

function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function mainfilter(){
  var urlFilterSelected= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects";
  var countSelected=0;
  var axeStrategique=document.getElementById("myList1").value;
  if (axeStrategique!="") {
    countSelected++;
    if (countSelected==1) {
      urlFilterSelected+="?$filter=AxeStrategique%20eq%27"+axeStrategique+"%27";
    }else{
      urlFilterSelected+="%20and%20AxeStrategique%20eq%27"+axeStrategique+"%27";
    }
  }
  var chantierSel=document.getElementById("myList2").value;
  if (chantierSel!="") {
    countSelected++;
    if (countSelected==1) {
      urlFilterSelected+="?$filter=Chantier%20eq%27"+chantierSel+"%27";
    }else{
      urlFilterSelected+="%20and%20Chantier%20eq%27"+chantierSel+"%27";
    }
  }
  var projetSel=document.getElementById("myList3").value;
  if (projetSel!="") {
    countSelected++;
    if (countSelected==1) {
      urlFilterSelected+="?$filter=ProjectName%20eq%27"+projetSel+"%27";
    }else{
      urlFilterSelected+="%20and%20ProjectName%20eq%27"+projetSel+"%27";
    }
  }
  var sponsorSel=document.getElementById("myList4").value;
  if (sponsorSel!="") {
    countSelected++;
    if (countSelected==1) {
      urlFilterSelected+="?$filter=Sponsor%20eq%27"+sponsorSel+"%27";
    }else{
      urlFilterSelected+="%20and%20Sponsor%20eq%27"+sponsorSel+"%27";
    }
  }
  var cpSel=document.getElementById("myList5").value;
  if (cpSel!="") {
    countSelected++;
    if (countSelected==1) {
      urlFilterSelected+="?$filter=ProjectOwnerName%20eq%27"+cpSel+"%27";
    }else{
      urlFilterSelected+="%20and%20ProjectOwnerName%20eq%27"+cpSel+"%27";
    }
  }
  var methodSel=document.getElementById("myList6").value;
  if (methodSel!="") {
    countSelected++;
    if (countSelected==1) {
      urlFilterSelected+="?$filter=Typedegestion%20eq%27"+methodSel+"%27";
    }else{
      urlFilterSelected+="%20and%20Typedegestion%20eq%27"+methodSel+"%27";
    }
  }
  var structureSel==document.getElementById("myList7").value;
  if (structureSel!="") {
    countSelected++;
    if (countSelected==1) {
      urlFilterSelected+="?$filter=Structuresimpliquees%20eq%27"+structureSel+"%27";
    }else{
      urlFilterSelected+="%20and%20Structuresimpliquees%20eq%27"+structureSel+"%27";
    }
  }





      document.getElementById("bar1").innerHTML='';
      document.getElementById("bar2").innerHTML=''; 
      document.getElementById("Dchart").innerHTML='';  
      document.getElementById("bar1").innerHTML='<canvas id="bar-chart" width="100%"></canvas>';
      document.getElementById("bar2").innerHTML='<canvas id="bar-chart1" width="100%"></canvas>';
      document.getElementById("Dchart").innerHTML='<div id="myChartGra" style="overflow: hidden;margin-top: 5%;height=300px"></div>';




      
      //console.log("axeStrategique= "+axeStrategique);
     
        var responseKPIGeneralFilter=responseKPIGeneralFilter || [];
        var urlKPIGeneralFilter= urlFilterSelected;
        function filterKPIGeneral(){
          $.ajax({
                        url: urlKPIGeneralFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseKPIGeneralFilter = responseKPIGeneralFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlKPIGeneralFilter = data.d.__next;
                                filterKPIGeneral();
                            }
                            
                            var arrChantier=[];
                            var countProjet=0;
                            var sumAchevement=0;
                            var arrNoms=[];
                            //-------------------
                            var arrNomP=[];
                            var arrayStat=[];
                            var arrayScore=[];
                            var arrayProba=[];
                            var arrayImpacts=[];
                            var arrayDateDec=[];
                            //--------------------------------------------
                            $.each(responseKPIGeneralFilter, function (key, value) {
                                var chantier=value.Chantier;                                
                                if ((arrChantier.indexOf(chantier)==-1)&&(chantier!=null)) {
                                  arrChantier.push(chantier);
                                }
                                var achevement=value.ProjectPercentCompleted;
                                var projId=value.ProjectId;
                                var nomP=value.ProjectName;
                                var nomProjet1=nomP.replace(/\s/g, '%20')
                                arrNoms.push(nomProjet1);
                                //-----------
                                arrNomP.push(nomP);
                                arrayStat.push("");
                                arrayScore.push("");
                                arrayProba.push("");
                                arrayImpacts.push("");
                                arrayDateDec.push("");
                                //---------
                                countProjet++;
                                sumAchevement+=parseFloat(achevement);
                            });
                            var avgAchevement=parseFloat(sumAchevement/countProjet).toFixed(0);
                            document.getElementById("countChan").innerHTML=arrChantier.length;
                            document.getElementById("countProj").innerHTML=countProjet;
                            if (avgAchevement<30) {
                              document.getElementById("statutGlKPI").innerHTML="<img src='/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/img/danger.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'>";
                            }
                            if ((avgAchevement>=30)&&(avgAchevement<=75)) {
                              document.getElementById("statutGlKPI").innerHTML="<img src='/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/img/warning.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'>";
                            }
                            if (avgAchevement>75) {
                              document.getElementById("statutGlKPI").innerHTML="<img src='/TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/img/checked.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'>";
                            }
                            document.getElementById("avgAchevement").innerHTML=avgAchevement+"%";

                            var arrayStatut=[];
                            var arrayValStatut=[];
                            var arrayPriorite=[];
                            var arrayValPriorite=[];
                            
                            for (var i = 0; i < arrNoms.length; i++) {
                              //console.log("arrNoms[i]= "+arrNoms[i]);
                              analyseDesRisquesFiltre(arrNoms[i],arrNomP[i],arrayStatut,arrayValStatut,arrayPriorite,arrayValPriorite,arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec);
                            }
                            
                            
                        }
                    });
        }
        filterKPIGeneral();
//**************************************************************************************************************************************************************************************


var responseAnalyseStatutFilter = responseAnalyseStatutFilter || [];
        var urlAnalyseStatutFilter = urlFilterSelected;
        function loadAnalyseStatutFilter() {
            $.ajax({
                url: urlAnalyseStatutFilter,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseAnalyseStatutFilter = responseAnalyseStatutFilter.concat(data.d.results);
                    if (data.d.__next) {
                        urlAnalyseStatutFilter = data.d.__next;
                        loadAnalyseStatutFilter();
                    }

                    var arrStatut = [];
                    var arrValueStatut = [];
                    var arrPercentStatut=[];
                    var arrDeg=[];
                    var countProjet=0;
                    var projEnRetardCount=0;
                    $.each(responseAnalyseStatutFilter, function (key, value) {
                      moment.locale('fr');
                      var finish=value.ProjectFinishDate;
                      var finProjet=moment(finish).format('DD-MM-YYYY');
                      var today=moment().format('DD-MM-YYYY');
                      
                      var achevement=value.ProjectPercentCompleted;
                      if ((moment(finProjet).isBefore(today))&&(achevement<100)) {
                        projEnRetardCount++;
                      }
                      countProjet++;
                      var statutProjet=value.Etatdeprojet;

                      if (statutProjet!=null) {
                        if (statutProjet.indexOf("StandBy")>=0) {
                          statutProjet="StandBy";
                        }
                        if (arrStatut.indexOf(statutProjet)<0) {
                          arrStatut.push(statutProjet);
                          arrValueStatut.push(1);
                        }else{
                          arrValueStatut[arrStatut.indexOf(statutProjet)]+=1;
                        }
                      }
                      
                    });
                    
                    
                    var porcentRetard=parseFloat((projEnRetardCount/countProjet)*100).toFixed(0);
                    var degRetard=parseFloat((projEnRetardCount/countProjet)*360);
                    for (var i = 0; i < arrStatut.length; i++) {
                      arrPercentStatut[i]=parseFloat((arrValueStatut[i]/countProjet)*100).toFixed(0);
                      arrDeg[i]=parseFloat((arrValueStatut[i]/countProjet)*360);
                    }
                    var valCloture=0;
                    var percentCloture=0;
                    var degCloture=0;
                    if (arrStatut.indexOf("Clôturé")>-1) {
                      valCloture=arrValueStatut[arrStatut.indexOf("Clôturé")];
                      percentCloture=arrPercentStatut[arrStatut.indexOf("Clôturé")];
                      degCloture=arrDeg[arrStatut.indexOf("Clôturé")];
                    }
                    var valArret=0;
                    var percentArret=0;
                    var degArret=0;
                    if (arrStatut.indexOf("StandBy")>-1) {
                      valArret=arrValueStatut[arrStatut.indexOf("StandBy")];
                      percentArret=arrPercentStatut[arrStatut.indexOf("StandBy")];
                      degArret=arrDeg[arrStatut.indexOf("StandBy")];
                    } 
                    var valEnCours=0;
                    var percentEnCours=0;
                    var degEnCours=0;
                    if (arrStatut.indexOf("En cours")>-1) {
                      valEnCours=arrValueStatut[arrStatut.indexOf("En cours")];
                      percentEnCours=arrPercentStatut[arrStatut.indexOf("En cours")];
                      degEnCours=arrDeg[arrStatut.indexOf("En cours")];
                    }
                    var valAbandonne=0;
                    var percentAbandonne=0;
                    var degAbandonne=0;
                    if (arrStatut.indexOf("Abandonné")>-1) {
                      valAbandonne=arrValueStatut[arrStatut.indexOf("Abandonné")];
                      percentAbandonne=arrPercentStatut[arrStatut.indexOf("Abandonné")];
                      degAbandonne=arrDeg[arrStatut.indexOf("Abandonné")];
                    }
                    var valAbandonne=0;
                    var percentAbandonne=0;
                    var degAbandonne=0;
                    if (arrStatut.indexOf("Abandonné")>-1) {
                      valAbandonne=arrValueStatut[arrStatut.indexOf("Abandonné")];
                      percentAbandonne=arrPercentStatut[arrStatut.indexOf("Abandonné")];
                      degAbandonne=arrDeg[arrStatut.indexOf("Abandonné")];
                    }
                    var valPlanifie=0;
                    var percentPlanifie=0;
                    var degPlanifie=0;
                    if (arrStatut.indexOf("Planifié")>-1) {
                      valPlanifie=arrValueStatut[arrStatut.indexOf("Planifié")];
                      percentPlanifie=arrPercentStatut[arrStatut.indexOf("Planifié")];
                      degPlanifie=arrDeg[arrStatut.indexOf("Planifié")];
                    }
                    

                    //'+arrPercentStatut[arrStatut.indexOf("Clôturé")]+'

                    document.getElementById("morris-area-chart").innerHTML = '<div class="col-sm-2">' +
                        '<div class="bg-white rounded-lg p-5 shadow">' +
                        ' <h2 class="h6 font-weight-bold text-center mb-4">Clôturé</h2>' +


                        '<div class="progress mx-auto" data-value="10">' +
                        ' <span class="progress-left">' +
                        '<span class="progress-bar border-success"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-success" style="transform: rotate('+degCloture+'deg);"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h2 font-weight-bold">'+percentCloture+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info -->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valCloture+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +

                        '<div class="col-sm-2">' +
                        '<div class="bg-white rounded-lg p-5 shadow">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">Arrêtés</h2>' +

                        '<!-- Progress bar 2 -->' +
                        '<div class="progress mx-auto" id="aTerminePour" data-value="10">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-danger"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-danger" style="transform: rotate('+degArret+'deg);"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h2 font-weight-bold">'+percentArret+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info-->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valArret+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +

                       '<div class="col-sm-2">' +
                        '<div class="bg-white rounded-lg p-5 shadow">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">En cours</h2>' +

                        '<!-- Progress bar 2 -->' +
                        '<div class="progress mx-auto" id="aTerminePour" data-value="10">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-info" ></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-info" style="transform: rotate('+degEnCours+'deg);"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h2 font-weight-bold">'+percentEnCours+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info-->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valEnCours+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +

                        '<div class="col-sm-2">' +
                        '<div class="bg-white rounded-lg p-5 shadow">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">En retard</h2>' +

                        '<!-- Progress bar 4 -->' +
                        '<div class="progress mx-auto" id="retardPour" data-value="20">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-warning"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-warning" style="transform: rotate('+degRetard+'deg);"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h2 font-weight-bold">'+porcentRetard+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info -->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+projEnRetardCount+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +




                        '<div class="col-sm-2">' +
                        '<div class="bg-white rounded-lg p-5 shadow">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">A terminer</h2>' +
                        '<!-- Progress bar 5 -->' +
                        '<div class="progress mx-auto" id="retardPour" data-value="10">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-warning"></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-warning" style="transform: rotate('+valAbandonne+'deg);"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h2 font-weight-bold">'+percentAbandonne+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info -->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valAbandonne+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>' +

                        '<div class="col-sm-2">' +
                        '<div class="bg-white rounded-lg p-5 shadow">' +
                        '<h2 class="h6 font-weight-bold text-center mb-4">Planifié</h2>' +
                        '<!-- Progress bar 6 -->' +
                        '<div class="progress mx-auto" id="terminePour" data-value="10">' +
                        '<span class="progress-left">' +
                        '<span class="progress-bar border-primary" "></span>' +
                        '</span>' +
                        '<span class="progress-right">' +
                        '<span class="progress-bar border-primary" style="transform: rotate('+degPlanifie+'deg);"></span>' +
                        '</span>' +
                        '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">' +
                        '<div class="h2 font-weight-bold">'+percentPlanifie+'<sup class="small">%</sup></div>' +
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +

                        '<!-- Demo info -->' +
                        '<div class="row text-center mt-4">' +
                        '<div class="col-12">' +
                        '<div class="h4 font-weight-bold mb-0">'+valPlanifie+'</div><span class="small text-gray">Projets</span>' +
                        '</div>' +
                        '<div class="col-6">' +
                        
                        '</div>' +
                        '</div>' +
                        '<!-- END -->' +
                        '</div>' +
                        '</div>';
                }
            });
        }
        loadAnalyseStatutFilter();

        $(function () {

            $(".progress").each(function () {

                var value = $(this).attr('data-value');
                var left = $(this).find('.progress-left .progress-bar');
                var right = $(this).find('.progress-right .progress-bar');

                if (value > 0) {
                    if (value <= 50) {
                        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
                    } else {
                        right.css('transform', 'rotate(180deg)')
                        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
                    }
                }

            })

            function percentageToDegrees(percentage) {

                return percentage / 100 * 360

            }

        });


//**************************************************************************************************************************************************************************************

var responseDurationFilter=responseDurationFilter || [];
        var urlDurationFilter= urlFilterSelected;
        function loadDurationFilter(){
          $.ajax({
                        url: urlDurationFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseDurationFilter = responseDurationFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlDurationFilter = data.d.__next;
                                loadDurationFilter();
                            }
                            
                            
                            var sumRealDuration=0;
                            var sumInitialDuration=0;
                            var sumConsomeDuration=0;
                            var countStandBy=0;
                            var countProjet=0;
                            $.each(responseDurationFilter, function (key, value) {
                              countProjet++;
                               var dureeReel=value.ProjectDuration;
                               var dureeInitial=value.ProjectDurationVariance;
                               var dureeConsomee=value.ProjectActualDuration;
                               sumRealDuration+=parseFloat(dureeReel);
                               sumInitialDuration+=parseFloat(dureeInitial);
                               sumConsomeDuration+=parseFloat(dureeConsomee);
                               var statutProjet=value.Etatdeprojet;

                               if ((value.Etatdeprojet!=null)&&(statutProjet.indexOf("StandBy")>=0)) {
                                  countStandBy++;
                                }
                            });
                            ////console.log("sumRealDuration= "+sumRealDuration);
                            ////console.log("sumConsomeDuration= "+sumConsomeDuration);
                            var depassementDuree=parseFloat((sumRealDuration-sumInitialDuration)/sumInitialDuration);
                            //////console.log("depassementDuree= "+depassementDuree);
                            functionary1Filter(depassementDuree);
                            var consomationPrevue=parseFloat((sumConsomeDuration/sumRealDuration)*100).toFixed(0);
                            //document.getElementById("costStatutG").innerHTML=consomationPrevue+"%";
                            
                            //$("#arrowGeneral").css("transform", "rotate("+degDep+")");
                            var arrayConso=[];
                            arrayConso.push(consomationPrevue);
                            jaugeDelaisFilter(consomationPrevue);

                            jrsConsomeFilter(sumRealDuration,sumConsomeDuration);
                            var maturitePlanning=parseFloat((countStandBy/countProjet)*100).toFixed(0);
                            document.getElementById("maturiteP").innerHTML=maturitePlanning+"%";

                            //up mid down

                            if ((maturitePlanning>=0)&&(maturitePlanning<30)) {
                              $("#up1").css("display", "block");
                              $("#maturiteP").css("color", "#5cb85c");
                            }
                            else if ((maturitePlanning>=30)&&(maturitePlanning<=60)) {
                              $("#mid1").css("display", "block");
                              $("#maturiteP").css("color", "#e06950");
                            }
                            else if (maturitePlanning>60) {
                              $("#down1").css("display", "block");
                              $("#maturiteP").css("color", "#ffe650");
                            }

                        }
                    });
        }
        loadDurationFilter();
        function functionary1Filter(time) {
                    var red = document.getElementById('redL1')
                    var yellow = document.getElementById('yellowL1')
                    var green = document.getElementById('greenL1')
                    var Colours = ["#FF0000", "#FFB300", "#05FF0D", "#7A0000", "#7A5C00", "#085808"];
                     if (time < 0) {
                       red.style.background = Colours[0]; // May need spacebar between index number
                       yellow.style.background = Colours[4];
                       green.style.background = Colours[5];
                      
                     } else if (time == 0) {
                       red.style.background = Colours[3];
                       yellow.style.background = Colours[1];
                       green.style.background = Colours[5];
                       
                    } else if (time > 0) {
                      red.style.background = Colours[3];
                      yellow.style.background = Colours[4];
                      green.style.background = Colours[2];
                      
                    }
                    //hoverCout
                    //si la couleur rouge clignote c'est une Alerte sur le dépassement des coûts prévus
                  }
                  function jaugeDelaisFilter(consomationPrevue){
                    var valeur=[consomationPrevue];
                    var myConfig = {
                              type: "gauge",
                              globals: {
                                fontSize: 10,
                                'background-color':'transparent'
                              },
                              plotarea:{
                                marginTop:15,
                              },
                              plot:{
                                size:'100%',
                                valueBox: {
                                  placement: 'center',
                                  text:'%v', //default
                                  fontSize:15,
                                  rules:[
                                    {
                                      rule: '%v >= 90',
                                      text: '%v<br>ÉLEVÉ'
                                    },
                                    {
                                      rule: '%v <= 90 && %v > 60',
                                      text: '%v<br>ASSEZ ÉLEVÉ'
                                    },
                                    {
                                      rule: '%v <= 60 && %v > 30',
                                      text: '%v<br>MOYEN'
                                    },
                                    {
                                      rule: '%v <=  30',
                                      text: '%v<br>FAIBLE'
                                    }   
                                  ]
                                }
                              },
                              tooltip:{
                                borderRadius:5
                              },
                              scaleR:{
                                aperture:180,
                                minValue:0,
                                maxValue:100,
                                step:10,
                                center:{
                                  visible:false
                                },
                                tick:{
                                  visible:false
                                },
                                item:{
                                  offsetR:0,
                                  rules:[
                                    {
                                      rule:'%i == 9',
                                      offsetX:15
                                    }
                                  ]
                                },
                                labels:['0','10','20','30','40','50','60','70','80','90','100'],
                                ring:{
                                  size:25,
                                  rules:[
                                    {
                                      rule:'%v < 30',
                                      backgroundColor:'#5cb85c'
                                    },
                                    {
                                      rule:'%v >= 30 && %v < 60',
                                      backgroundColor:'#337ab7'
                                    },
                                    {
                                      rule:'%v >= 60 && %v < 90',
                                      backgroundColor:'#FFA726'
                                    },
                                    {
                                      rule:'%v >= 90',
                                      backgroundColor:'#E53935'
                                    }      
                                  ]
                                }
                              },
                              refresh:{  
                                  type:"feed",
                                  transport:"js",
                                  url:"feed()",
                                  interval:10,
                                  resetTimeout:10
                              },
                              series : [
                                {
                                  values : [parseInt(consomationPrevue)], // starting value
                                  backgroundColor:'black',
                                  indicator:[5,5,5,5,0.75],
                                  animation:{  
                                    effect:2,
                                    method:1,
                                    sequence:4,
                                    speed: 900
                                 },
                                }
                              ]
                            };
                             
                            zingchart.render({ 
                              id : 'myChart', 
                              data : myConfig, 
                              height: 250, 
                              width: '100%'
                            });
                  }
                  function jrsConsomeFilter(sumRealDuration,sumConsomeDuration){
                    var jrsPrevue=parseFloat(sumRealDuration/8).toFixed(0);
                    var jrsConsom=parseFloat(sumConsomeDuration/8).toFixed(0);
                    var datas=[jrsPrevue,jrsConsom];
                    var label=["jours prévus","jours consommés"];
                    var ctxPie = document.getElementById("myPieChart").getContext('2d');
                      if(window.echartPie != undefined)
                    {
                      window.echartPie.destroy();
                    }
                    window.echartPie = new Chart(ctxPie, {
                        type: 'pie',
                        data: {
                          labels: label,
                          datasets: [{
                            backgroundColor: ["#f0ad4e","#5cb85c","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e","#2ecc71","#F39C12","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e"],
                            data: datas
                          }]
                        },
                          options:{
                            

                         

                            responsive: true,
                            legend: { display: true,position: 'top',},
                          
                          
                            plugins:{
                              title: {
                                display: true,
                                text: 'Nombre des jours consommés'
                            },
                          labels: {
                            render: 'value',
                            fontColor: '#fff',
                            position: 'inside',
                            fontSize:20
                          }
                        },

                         


                          }
                      });

 

       
}

     ///--------------------------------------------------------------------------------------------------------------------------------------------------------------
var urlDateGlissementFilter = urlFilterSelected;
var responseDateGlissementFilter = responseDateGlissementFilter ||[];

function getDateGlissementFilter(){
  $.ajax({url:  urlDateGlissementFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseDateGlissementFilter = responseDateGlissementFilter.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDateGlissementFilter = data.d.__next;
                                            getDateGlissementFilter();
                                        } 
                var idProjetG=[];
                var dateDebProjetG=[];
                var dateFinProjetG=[];
                var dateFinRefG=[];
                  
            $.each(responseDateGlissementFilter, function(key, value) 
            { 
              var sousprojet=value.Sousprojet;
              if (sousprojet!="Oui") {
                var idP=value.ProjectId;
               var projStartDate=value.ProjectStartDate;
               var projfinshtDate=value.ProjectFinishDate;
               if (idProjetG.indexOf(idP)==-1) {
                idProjetG.push(idP);
                dateDebProjetG.push(projStartDate);
                dateFinProjetG.push(projfinshtDate);
                dateFinRefG.push("");
               }
              }
               

            });
calculGlissementGlobalFilter(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG);


}   
});
}
getDateGlissementFilter();




var urlDateBaseGlissementFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectBaselineFinishDate";
var responseBaseDateGlissementFilter = responseBaseDateGlissementFilter ||[];
function calculGlissementGlobalFilter(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG){
   $.ajax({url:  urlDateBaseGlissementFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseBaseDateGlissementFilter = responseBaseDateGlissementFilter.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDateBaseGlissementFilter = data.d.__next;
                                            calculGlissementGlobalFilter(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG);
                                        } 
                                        var durReel=[];
                                        var durRef=[];
                                        var glissArray=[];
                                        var avgGliss=0;
                                        var sumGliss=0;
                  
              
            $.each(responseBaseDateGlissementFilter, function(key, value) 
            { 
              var idProjBaseline=value.ProjectId;
              var finRefProj=value.ProjectBaselineFinishDate;
              for (var i =0; i<idProjetG.length; i++) {
                if (idProjBaseline==idProjetG[i]) {
                  dateFinRefG[i]=finRefProj;
                }
                //idProjetG[i]
              }

            });
             moment.locale('fr');
            

            // //////console.log("idProjetG = "+ idProjetG.join());
            // //////console.log("dateDebProjetG = "+ dateDebProjetG.join());
            // //////console.log("dateFinProjetG = "+ dateFinProjetG.join());
            // //////console.log("dateFinRefG = "+ dateFinRefG.join());

            // //////console.log("idProjetG length = "+ idProjetG.length);
            // //////console.log("dateDebProjetG length = "+ dateDebProjetG.length);
            // //////console.log("dateFinProjetG length = "+ dateFinProjetG.length);
            // //////console.log("dateFinRefG length = "+ dateFinRefG.length);
            
            for (var i = 0; i <dateFinRefG.length; i++) {
              if(dateFinRefG[i]!=""){
                var refFinish=moment(dateFinRefG[i]);
                var dateFin=moment(dateFinProjetG[i]);
                var daetDeb=moment(dateDebProjetG[i]);
                var realDuration=dateFin.diff(daetDeb,'days');
                var baseDuration=refFinish.diff(daetDeb,'days');
                var gliss=0;
                gliss=parseFloat(((realDuration-baseDuration)/realDuration)*100);
                if (gliss<0) {
                  gliss=0;
                }
                ////////console.log("gliss= "+gliss);
                glissArray.push(gliss);
              }
            }
            ////////console.log("glissArray= "+glissArray.join());
            for (var i = 0; i < glissArray.length; i++) {
              sumGliss+=parseFloat(glissArray[i])
            }
            ////////console.log("sumGliss= "+ sumGliss);
            avgGliss=parseFloat(sumGliss/glissArray.length).toFixed(0);
            ////////console.log("avgGliss= "+avgGliss);
            document.getElementById("glissementportefeuille").innerHTML=avgGliss+"%";

            //up mid down

            if ((avgGliss>=0)&&(avgGliss<30)) {
              $("#up").css("display", "block");
              $("#glissementportefeuille").css("color", "#5cb85c");
            }
            else if ((avgGliss>=30)&&(avgGliss<=60)) {
              $("#mid").css("display", "block");
              $("#glissementportefeuille").css("color", "#e06950");
            }
            else if (avgGliss>60) {
              $("#down").css("display", "block");
              $("#glissementportefeuille").css("color", "#ffe650");
            }
}           
});
}

             


//**************************************************************************************************************************************************************************************

  var responseCostFilter=responseCostFilter || [];
        var urlCostFilter= urlFilterSelected;
        function loadCostFilter(){
          $.ajax({
                        url: urlCostFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseCostFilter = responseCostFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlCostFilter = data.d.__next;
                                loadCostFilter();
                            }
                            var tableaux = document.getElementById("tabCout");
                            var tr1 = tableaux.getElementsByTagName("tr");
                             if(tr1.length>0){         
                                  $('#tabCout tbody').empty();
                             }
                            
                            var sumRealCost=0;
                            var sumConsomCost=0;
                            var sumCoutRestant=0;
                            $.each(responseCostFilter, function (key, value) {                              
                               var coutReel=value.ProjectCost;
                               var coutConsomme=value.ProjectActualCost;
                               var coutRestant=parseFloat(coutReel-coutConsomme);
                               //console.log("coutRestant= "+coutRestant);
                               sumRealCost+=parseFloat(coutReel);
                               sumConsomCost+=parseFloat(coutConsomme);
                               sumCoutRestant+=parseFloat(coutRestant);
                            });
                            //console.log("sumCoutRestant= "+sumCoutRestant);
                            //console.log("sumConsomCost= "+sumConsomCost);
                            // 
                            var depassementCout=parseFloat((sumRealCost-sumConsomCost)/sumConsomCost);
                            if (sumConsomCost==0) {
                              depassementCout=0;
                            }
                            //console.log("depassementCout= "+depassementCout);
                            //setInterval(function() {
                              functionaryFilter(depassementCout);
                            //}, 3000);
                            poorcentageConsommation=parseFloat((sumCoutRestant/sumRealCost)*100).toFixed(0);
                            if (sumConsomCost==0) {
                              poorcentageConsommation=0;
                            }
                            document.getElementById("consoCouPrevue").innerHTML=poorcentageConsommation+"%";
                            var tr;
                                tr = $("<tr>");
                                tr.append("<td>" + conToMill(parseFloat(sumRealCost).toFixed(0)) + "</td>");//0
                                tr.append("<td>" + conToMill(parseFloat(sumConsomCost).toFixed(0)) + "</td>");//1                        
                                tr.append("<td>" + parseFloat(depassementCout).toFixed(0) + "</td>"); //2
                                $('#tabCout tbody').append(tr);
                        }
                    });
        }
        loadCostFilter();
        function functionaryFilter(time) {
                    var red = document.getElementById('redL')
                    var yellow = document.getElementById('yellowL')
                    var green = document.getElementById('greenL')
                    var Colours = ["#FF0000", "#FFB300", "#05FF0D", "#7A0000", "#7A5C00", "#085808"];
                     if (time < 0) {
                       red.style.background = Colours[0]; // May need spacebar between index number
                       yellow.style.background = Colours[4];
                       green.style.background = Colours[5];
                       document.getElementById("hoverCout").innerHTML="dépassement des coûts prévus";
                     } else if (time == 0) {
                       red.style.background = Colours[3];
                       yellow.style.background = Colours[1];
                       green.style.background = Colours[5];
                       document.getElementById("hoverCout").innerHTML="tous les budgets prévus sont consomés";
                    } else if (time > 0) {
                      red.style.background = Colours[3];
                      yellow.style.background = Colours[4];
                      green.style.background = Colours[2];
                      document.getElementById("hoverCout").innerHTML="Les budgets prévus sont supérieurs aux budgets actuels";
                    }
                    //hoverCout
                    //si la couleur rouge clignote c'est une Alerte sur le dépassement des coûts prévus
                  }
                  



//***************************************************************************************************************************************************************************************
        function analyseDesRisquesFiltre(nomProj,nomPJ,arrayStatut,arrayValStatut,arrayPriorite,arrayValPriorite,arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec){
          
            
            //console.log("arrNomP= "+arrNomP);
            var responseRiskFiltre=responseRiskFiltre || [];
            var urlRiskFiltre= _spPageContextInfo.siteAbsoluteUrl + "/"+nomProj+"/_api/web/lists/getByTitle('Risks')/items";
            //console.log("urlRiskFiltre= "+urlRiskFiltre);
            function loadRiskFiltre(){

              $.ajax({
                            url: urlRiskFiltre,
                            method: "GET",
                            dataType: "json",
                            headers: { Accept: "application/json;odata=verbose" },
                            success: function (data) {
                                responseRiskFiltre = responseRiskFiltre.concat(data.d.results);
                                if (data.d.__next) {
                                    urlRiskFiltre = data.d.__next;
                                    loadRiskFiltre();
                                }
                                
                              
                               if (responseRiskFiltre.length>0) {
                                $.each(responseRiskFiltre, function (key, value) {
                                  moment.locale('fr');
                                   var statutRisk=value.Statut;
                                   var score=value.Score;
                                   var probabilite=value.Probabilit_x00e9_;
                                   var impact="";
                                   if (value.Impacts!=null) {
                                    impact=value.Impacts;
                                   }
                                   var dateDec=value.D_x00e9_tect_x00e9__x0020_le;
                                   //////////console.log("dateDec= "+dateDec);
                                   var dateDeclanchement=moment(dateDec).format('DD-MM-YYYY');
                                   if (value.D_x00e9_tect_x00e9__x0020_le==null) {
                                    dateDeclanchement="";
                                   }
                                   arrayStat[arrNomP.indexOf(nomPJ)]=statutRisk;
                                   arrayScore[arrNomP.indexOf(nomPJ)]=score;
                                   arrayProba[arrNomP.indexOf(nomPJ)]=probabilite;
                                   arrayImpacts[arrNomP.indexOf(nomPJ)]=impact;
                                   arrayDateDec[arrNomP.indexOf(nomPJ)]=dateDeclanchement;
                                   if (arrayStatut.indexOf(statutRisk)<0) {
                                    arrayStatut.push(statutRisk);
                                    arrayValStatut.push(1);
                                   }else{
                                    arrayValStatut[arrayStatut.indexOf(statutRisk)]+=1;
                                   }
                                   var prioriteRisk=value.Priorit_x00e9_;
                                   //////////////console.log("prioriteRisk= "+prioriteRisk);
                                   if (arrayPriorite.indexOf(prioriteRisk)<0) {
                                    arrayPriorite.push(prioriteRisk);
                                    arrayValPriorite.push(1);
                                   }else{
                                    arrayValPriorite[arrayPriorite.indexOf(prioriteRisk)]+=1;
                                   }

                                });
                                console.log("arrayStat= "+arrayStat);
                                // //////////console.log("arrayScore= "+arrayScore);
                                // //////////console.log("arrayProba= "+arrayProba);
                                // //////////console.log("arrayImpacts= "+arrayImpacts);
                                // //////////console.log("arrayDateDec= "+arrayDateDec);
                               
                                  ////////////console.log("arrayPriorite= "+arrayPriorite);
                                  ////////////console.log("arrayValPriorite= "+arrayValPriorite);
            
                                  risqueParStatutFiltre(arrayStatut,arrayValStatut);
                                  risqueParPrioriteFiltre(arrayPriorite,arrayValPriorite);
                                  loadTabGravRiskFiltre(arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec);
                               
                               }
                                
                                
                            
                                
                            }
                        });

            }
            loadRiskFiltre();

            
        }

function risqueParStatutFiltre(arrayStatut,arrayValStatut) {
    
            // Bar chart

            var ctx0 = document.getElementById("bar-chart").getContext('2d');
                    if(window.ctx0 != undefined)
                    {
                      window.ctx0.destroy();
                    }
                         window.ctx0 = new Chart(ctx0, {
                        type: 'bar',
                        data: {
                          labels: arrayStatut,
                          datasets: [{
                            backgroundColor: ["#5cb85c", "#f0ad4e", "#d9534f", "#e8c3b9", "#337ab7"],
                            label: 'Risques',
                            data: arrayValStatut
                          }]
                        },
                        options:{
                        legend: { display: false },
                        title: {
                             display: true,
                             text: ' '
                         },
                         scales: {
                        xAxes: [{
                            ticks: {

                                fontSize: 12
                            },
                             scaleLabel: {
                              display: true,
                              fontSize: 15,
                              labelString: "Statut"
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                             scaleLabel: {
                              display: true,
                              fontSize: 15,
                              labelString: "Nombre des risques"
                            }
                        }]
                    },
                       

                          responsive: true,
                          
                        
                        
                          plugins:{
                        labels: {
                          render: 'value',
                          fontColor: '#000',
                          position: 'inside',
                          fontSize:20
                        }
                      },

                       


                        }
                      });
        }
       
        function risqueParPrioriteFiltre(arrayPriorite,arrayValPriorite) {
            // Bar chart 
            document.getElementById("bar2").innerHTML='<canvas id="bar-chart1" width="100%"></canvas>';
            var ctx = document.getElementById("bar-chart1").getContext('2d');
                    if(window.ctx != undefined)
                    {
                      window.ctx.destroy();
                    }
                         window.ctx = new Chart(ctx, {
                        type: 'bar',
                        data: {
                          labels: arrayPriorite,
                          datasets: [{
                            backgroundColor: ["#5cb85c", "#f0ad4e", "#d9534f", "#337ab7"],
                            label: 'Risques',
                            data: arrayValPriorite
                          }]
                        },
                        options:{
                        legend: { display: false },
                        title: {
                             display: true,
                             text: ' ',                                                      
                         },
                         scales: {
                        xAxes: [{
                            ticks: {

                                fontSize: 12
                            },
                             scaleLabel: {
                              display: true,
                              fontSize: 15,
                              labelString: "Priorité"
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                             scaleLabel: {
                              display: true,
                              fontSize: 15,
                              labelString: "Nombre des risques"
                            }
                                    }]
                    },
                       

                          responsive: true,
                          
                        
                        
                          plugins:{
                        labels: {
                          render: 'value',
                          fontColor: '#000',
                          position: 'inside',
                          fontSize:20
                        }
                      },

                       


                        }
                      });
            
        }
        

        function loadTabGravRiskFiltre(arrNomP,arrayStat,arrayScore,arrayProba,arrayImpacts,arrayDateDec){
          //console.log("arrayScore= "+arrayScore);
           var sumScore=0;
           var avgScore=0;
           var countSc=0;
          for (var i = 0; i < arrayScore.length; i++) {
            if (arrayStat[i]!="") {
              countSc++;
              sumScore=parseFloat(sumScore)+parseFloat(arrayScore[i]);
              //console.log("sumScore= "+sumScore);
              ////console.log("arrayScore[i]= "+arrayScore[i]);
            }            
          }
          avgScore=parseFloat(sumScore/countSc).toFixed(0);
          ////console.log("avgScore= "+avgScore);
          //scoreRisk();
          var valeur=[avgScore];
                    var myConfig = {
                              type: "gauge",
                              globals: {
                                fontSize: 20,
                                'background-color':'transparent'
                              },

                              plotarea:{
                                marginTop: 0,
                              },
                              plot:{
                                size:'100%',
                                valueBox: {
                                  placement: 'center',
                                  text:'%v', //default
                                  fontSize:30,
                                  rules:[
                                    {
                                      rule: '%v > 12',
                                      text: '%v<br>ÉLEVÉ'
                                    },
                                    
                                    {
                                      rule: '%v <= 12 && %v >= 6',
                                      text: '%v<br>MOYEN'
                                    },
                                    {
                                      rule: '%v <=  5',
                                      text: '%v<br>FAIBLE'
                                    }   
                                  ]
                                }
                              },
                              tooltip:{
                                borderRadius:5
                              },
                              scaleR:{
                                aperture:180,
                                minValue:0,
                                maxValue:25,
                                step:3,
                                center:{
                                  visible:false
                                },
                                tick:{
                                  visible:false
                                },
                                item:{
                                  offsetR:0,
                                  rules:[
                                    {
                                      rule:'%i == 9',
                                      offsetX:15
                                    }
                                  ]
                                },
                                labels:['0','','6','','12','','','','','25'],
                                ring:{
                                  size:60,
                                  rules:[
                                    {
                                      rule:'%v <= 5',
                                      backgroundColor:'#5cb85c'
                                    },
                                    
                                    {
                                      rule:'%v > 5 && %v <= 12',
                                      backgroundColor:'#FFA726'
                                    },
                                    {
                                      rule:'%v > 12',
                                      backgroundColor:'#E53935'
                                    }      
                                  ]
                                }
                              },
                              refresh:{  
                                  type:"feed",
                                  transport:"js",
                                  url:"feed()",
                                  interval:10,
                                  resetTimeout:10
                              },
                              series : [
                                {
                                  values : [parseInt(avgScore)], // starting value
                                  backgroundColor:'black',
                                  indicator:[15,5,5,5,0.75],
                                  animation:{  
                                    effect:2,
                                    method:1,
                                    sequence:4,
                                    speed: 900
                                 },
                                }
                              ]
                            };
                             
                            zingchart.render({ 
                              id : 'myChartGra', 
                              data : myConfig, 
                              /*height: 550, */
                              width: '100%'
                            });
        }






      
     
}