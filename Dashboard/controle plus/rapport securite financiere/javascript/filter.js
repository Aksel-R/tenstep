function mainFilter() {
	var dirReg = document.getElementById("myList1").value;
  	var controleuridd = document.getElementById("myList2").value;
  	if ((dirReg=="")&&(controleuridd=="")) {
  		window.location.reload();
  	}else{
  		document.getElementById("div-container1").innerHTML ='<div id="container1"></div>';
  	document.getElementById("div-container2").innerHTML ='<div id="container2"></div>';
  	document.getElementById("div-container4").innerHTML ='<div id="container4"></div>';
  	document.getElementById("div-container5").innerHTML ='<div id="container5"></div>';
  	
	
	
  	//console.log("dirReg= "+dirReg);
  	//console.log("controleuridd= "+controleuridd);
  	var urlFilterSel="";
  	var urlFilterSel2="";
  	if (dirReg!="") {
  		urlFilterSel+=" and R_x00e9_gion_x0020_de_x0020_l_x0 eq'"+dirReg+"'";
  		urlFilterSel2+="&$filter=Direction_x0020_R_x00e9_gionale eq'"+dirReg+"'";
  	}
  	if (controleuridd!="") {
  		urlFilterSel+=" and AuthorId eq'"+controleuridd+"'";
  	}

  	
	  var responseControleurFilter=responseControleurFilter||[];
  var urlControleurFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Contr_x00f4_leur_x0020_R_x00e9_gId"+urlFilterSel2;
  //////////////////console.log.log('urlControleurFilter= '+urlControleurFilter);
  function LoadControleurFilter() {
            var nbre = 0;


            $.ajax({
                url: urlControleurFilter,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseControleurFilter = responseControleurFilter.concat(data.d.results);
                    if (data.d.__next) {
                        urlControleurFilter = data.d.__next;
                        LoadControleurFilter();
                    }
                    if (!data.d.__next) {
                      var arrControlleurId=[];
                      var arrControlleurNom=[];
                      var arrJourControl=[];
                      var arrAvgControlJr=[];
                      var nbJournee=0;
                      $.each(responseControleurFilter, function (key, value) {
                        var listControleur=[];
                        ////console.log("va="+value.Contr_x00f4_leur_x0020_R_x00e9_gId.results);
                        listControleur=value.Contr_x00f4_leur_x0020_R_x00e9_gId.results;
                         for (var i = 0; i < listControleur.length; i++) {
                          ////console.log(listControleur[i]);
                            if (arrControlleurId.indexOf(listControleur[i])==-1) {
                              arrControlleurId.push(listControleur[i]);
                              arrControlleurNom.push("");
                              arrJourControl.push(0);
                              arrAvgControlJr.push(0);
                            }
                          }
                      });
                     
                      //console.log("arrControlleurId= "+arrControlleurId);
                      for (var i = 0; i < arrControlleurId.length; i++) {
                        remplirArrControleurFilter(arrControlleurId[i],arrControlleurId,arrControlleurNom,i,nbJournee,arrJourControl,arrAvgControlJr);
                      }
                    }
                    
                  
                    
                    
                }
            });
        }
        LoadControleurFilter();
        
        function remplirArrControleurFilter(userid,arrControlleurId,arrControlleurNom,count,nbJournee,arrJourControl,arrAvgControlJr) {
          var urlCurrUserFilter=_spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";
          var responseCurrUserFilter=responseCurrUserFilter||[];
          function putCurrUserFilter() {
            $.ajax({
                url: urlCurrUserFilter,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseCurrUserFilter = responseCurrUserFilter.concat(data.d.results);
                    if (data.d.__next) {
                        urlCurrUserFilter = data.d.__next;
                        putCurrUserFilter();
                    }
                    ////console.log("Title= "+data.d.Title)
                        var nomU=data.d.Title;
                        arrControlleurNom[arrControlleurId.indexOf(userid)]=nomU;
                    // if (!data.d.__next) {
                    //   $.each(responseCurrUserFilter, function (key, value) {

                    //   });
                     
                    // }
                    if (count==arrControlleurNom.length-1) {
                      loadContrlInfoFilter(arrControlleurId,arrControlleurNom,nbJournee,arrJourControl,arrAvgControlJr);
                      
                      

                    }
                   
                    
                    
                }
            });
          }
          putCurrUserFilter();
        }
        function loadContrlInfoFilter(arrControlleurId,arrControlleurNom,nbJournee,arrJourControl,arrAvgControlJr) {
  console.log('test1');
  moment.locale('fr');
   var startOfMonth1= moment().startOf('month').format('YYYY-MM-DD');
   var endOfMonth1 = moment().endOf('month').format('YYYY-MM-DD');
   var urlDateDebut1=startOfMonth1+'T00:00:00.000';
   var urlDateFin1=endOfMonth1+'T00:00:00.000';
   var responseRemplirControleurFilter=responseRemplirControleurFilter || []
   var urlRemplirControleurFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Date_x0020_Journ_x00e9_e ge datetime'"+urlDateDebut1+"' and Date_x0020_Journ_x00e9_e le datetime'"+urlDateFin1+"'"+urlFilterSel;
    console.log('urlRemplirControleurFilter= '+urlRemplirControleurFilter);
    function loadRemplirControleurFilter() {
              


              $.ajax({
                  url: urlRemplirControleurFilter,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseRemplirControleurFilter = responseRemplirControleurFilter.concat(data.d.results);
                      if (data.d.__next) {
                          urlRemplirControleurFilter = data.d.__next;
                          loadRemplirControleurFilter();
                      }
                      if (!data.d.__next) {
                        var arrJourneeDate=[];
                        $.each(responseRemplirControleurFilter, function (key, value) {
                          moment.locale('fr');
                          var dateJ=value.Date_x0020_Journ_x00e9_e;
                          var dateJournee=moment(dateJ).format('YYYY-MM-DD');
                          if (arrJourneeDate.indexOf(dateJournee)<0) {
                            arrJourneeDate.push(dateJournee);
                          }
                        });
                        console.log("arrJourneeDate= "+arrJourneeDate);
                        if (arrJourneeDate.length.length>0) {
                            for (var i = 0; i < arrJourneeDate.length; i++) {
                              loadPieInfoFilter(arrControlleurId,arrControlleurNom,nbJournee,arrJourControl,arrAvgControlJr,arrJourneeDate[i],i,arrJourneeDate);
                            }
                        }else{
                          var moisAnnAct1111=moment().format("MM-YYYY");
                          Highcharts.chart('container1', {
                            chart: {
                                plotBackgroundColor: null,
                                plotBorderWidth: null,
                                plotShadow: false,
                                type: 'pie'
                            },
                            title: {
                                text: 'Capacité Equipe (mois '+moisAnnAct1111+')'
                            },
                            tooltip: {
                                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                            },
                            accessibility: {
                                point: {
                                    valueSuffix: '%'
                                }
                            },
                            plotOptions: {
                                pie: {
                                    allowPointSelect: true,
                                    cursor: 'pointer',
                                    dataLabels: {
                                        enabled: true,
                                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                    },
                                    showInLegend: true
                                }
                            },
                            series: [{
                                name: 'Contrôleurs',
                                colorByPoint: true,
                                data: [{
                                    name: 'Actif',
                                    y: 0,
                                    sliced: true,
                                    selected: true
                                }, {
                                    name: 'Non Actif',
                                    y: 100
                                }]
                            }]
                        });
                        }
                        
                     }
                      
                    
                      
                      
                  }
              });
          }
        loadRemplirControleurFilter();
}
function loadPieInfoFilter(arrControlleurId,arrControlleurNom,nbJournee,arrJourControl,arrAvgControlJr,dateJourne,countJrs,arrJourneeDate) {
  console.log('test2');
  var jourUrl=dateJourne+'T00:00:00.000';
  
  var responseCapEqFilter=responseCapEqFilter || []
   var urlCapEqFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Date_x0020_Journ_x00e9_e eq datetime'"+jourUrl+"'"+urlFilterSel;
    //console.log('urlCapEqFilter= '+urlCapEqFilter);
    function loadCapEqFilter() {
              


              $.ajax({
                  url: urlCapEqFilter,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseCapEqFilter = responseCapEqFilter.concat(data.d.results);
                      if (data.d.__next) {
                          urlCapEqFilter = data.d.__next;
                          loadCapEqFilter();
                      }
                      if (!data.d.__next) {
                        var arrctrlAux=[];
                        nbJournee++;
                        for (var i = 0; i < arrControlleurId.length; i++) {
                          arrctrlAux[i]=0;
                        }
                        $.each(responseCapEqFilter, function (key, value) {
                          
                          var ctrleurID=value.AuthorId;
                          if (arrctrlAux[arrControlleurId.indexOf(ctrleurID)]==0) {
                            arrctrlAux[arrControlleurId.indexOf(ctrleurID)]=1;
                          }
                        });
                          for (var i = 0; i < arrControlleurId.length; i++) {
                            arrControlleurId[i]=parseFloat(arrControlleurId[i]+arrctrlAux[i]);
                          }
                          console.log("countJrs= "+countJrs);
                          if (countJrs==arrJourneeDate.length-1) {
                            putPieChart(arrControlleurId,nbJournee);
                          }
                     }
                      
                    
                      
                      
                  }
              });
          }
        loadCapEqFilter();
}

var responseAgenceDirection= responseAgenceDirection || [];
var urlAgenceDirection=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Id,Title,Contr_x00f4_leur_x0020_R_x00e9_gId"+urlFilterSel2;
//console.log("urlAgenceDirection= "+urlAgenceDirection);
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
                      if (!data.d.__next) {
                        var arrRegionalDirAg=[];
                        var arrRegionalDirAgId=[];
                        var arrCRCount=[];
                        var arrCRAnomalie=[];
                        var arrMois=[];
                        var arrSumMoiCr=[];
                        var arrSumMoiAnnomalie=[];
                        var sumCr=0;
                        var sumAnn=0;
                        $.each(responseAgenceDirection, function (key, value) {
                           var conroleurs=[];
                           var controleurs=value.Contr_x00f4_leur_x0020_R_x00e9_gId.results;
                           for (var c = 0; c < controleurs.length; c++) {
                           	//console.log("controleurs["+c+"]= "+controleurs[c])
                           	conroleurs[c]=parseInt(controleurs[c]);
                           }
                           //console.log("conroleurs= "+conroleurs);
                           if (controleuridd!="") {
                           	//console.log("controleuridd= "+controleuridd);
                           	//console.log("indx= "+conroleurs.indexOf(parseInt(controleuridd)));
                           	
                           	if (conroleurs.indexOf(parseInt(controleuridd))>=0) {
                           	   var idAg=value.Id;
	                           var nomAg=value.Title;
	                           //console.log("nomAg= "+nomAg);
	                           arrRegionalDirAg.push(nomAg);
	                           arrRegionalDirAgId.push(idAg);
	                           arrCRCount.push(0);
	                           arrCRAnomalie.push(0);
                           	}
                           }else{
                           	   var idAg=value.Id;
	                           var nomAg=value.Title;
	                           arrRegionalDirAg.push(nomAg);
	                           arrRegionalDirAgId.push(idAg);
	                           arrCRCount.push(0);
	                           arrCRAnomalie.push(0);
                           }
                           

                        });
                          loadFilterBar(arrRegionalDirAg,arrRegionalDirAgId,arrCRCount,arrCRAnomalie,arrMois,arrSumMoiCr,arrSumMoiAnnomalie,sumCr,sumAnn);
                     }
                      
                    
                      
                      
                  }
              });
          }
        loadAgenceDirection();
function loadFilterBar(arrRegionalDirAg,arrRegionalDirAgId,arrCRCount,arrCRAnomalie,arrMois,arrSumMoiCr,arrSumMoiAnnomalie,sumCr,sumAnn){
		moment.locale('fr');
		   var startOfMonth= moment().startOf('month').format('YYYY-MM-DD');
		   var endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
		   var urlDateDebut=startOfMonth+'T00:00:00.000';
		   var urlDateFin=endOfMonth+'T00:00:00.000';
		   var colors=["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
		   var colors1=["#cf232a","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"];
		    var responseReparationCRFilter=responseReparationCRFilter || []
		   var urlReparationCRFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Date_x0020_Journ_x00e9_e ge datetime'"+urlDateDebut+"' and Date_x0020_Journ_x00e9_e le datetime'"+urlDateFin+"'"+urlFilterSel;

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
		                      if (!data.d.__next) {
		                        

		                        
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
		                        });
		                          ////console.log("arrCRCount= "+arrCRCount);
		                          var moisAct=moment().format("MM-YYYY");
		                          arrMois.push(moisAct);
		                          arrSumMoiCr.push(sumCr);
		                          arrSumMoiAnnomalie.push(sumAnn);
		                          var debMoisAct=moment().startOf('month').format('YYYY-MM-DD');
		                          for (var i = 1; i < 3; i++) {
		                            monthAdd=parseInt(i)*-1;
		                            var date1=moment(debMoisAct).add(monthAdd, 'months').format('YYYY-MM-DD');
		                            var date2=moment(date1).add(1, 'months').format('YYYY-MM-DD');
		                            var label=moment(date1).format('MM-YYYY')
		                            loadPreviousInfoFilter(arrMois,arrSumMoiCr,arrSumMoiAnnomalie,date1,date2,label,i);
		                          }
		                          
		                          var moisAnnAct=moment().format("MM-YYYY");
		                          

		                        Highcharts.chart('container4', {
		                          chart: {
		                              type: 'bar'
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
		                                text: 'Répartition des Conrôles Régioneaux par Agence (mois '+moisAnnAct+')'
		                            },

		                          series: [{
		                              name: "Contrôle Régioneaux",
		                              data: arrCRCount
		                          }]
		                      });
		                      Highcharts.chart('container5', {
		                          chart: {
		                              type: 'bar'
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
		                                text: 'Répartition des Anomalies par Agence (mois '+moisAnnAct+')'
		                            },

		                          series: [{
		                              name: "Anomalies",
		                              data: arrCRAnomalie
		                          }]
		                      });

		                     }
		                      
		                    
		                      
		                      
		                  }
		              });
		          }
		        LoadChartsFilter();
}




        function loadPreviousInfoFilter(arrMois,arrSumMoiCr,arrSumMoiAnnomalie,date1,date2,label,counter) {
        	console.log("counter= "+counter)
          var limit1=date1+'T00:00:00.000';
          var limit2=date2+'T00:00:00.000';
          var urlPreviousInfoFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Date_x0020_Journ_x00e9_e ge datetime'"+limit1+"' and Date_x0020_Journ_x00e9_e lt datetime'"+limit2+"'"+urlFilterSel;
          console.log("urlPreviousInfoFilter= "+urlPreviousInfoFilter);
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
                      if (!data.d.__next) {
                        

                        var sumCr=0;
                        var sumAnn=0;
                        $.each(responsePreviousInfoFilter, function (key, value) {
                          sumCr++;
                          
                          var nbNonConforme=0;
                          if (value.N_x00b0__x0020_Non_x0020_Conform!=null) {
                            nbNonConforme=value.N_x00b0__x0020_Non_x0020_Conform;

                          }
                          
                            sumAnn=parseInt(sumAnn+nbNonConforme);
                            console.log("sumAnn= "+sumAnn);
                        });

                          console.log("sumCr= "+sumCr);
                          //console.log("arrSumMoiCr= "+arrSumMoiCr);
                          arrMois[counter]=label;
                          arrSumMoiCr[counter]=sumCr;
                          arrSumMoiAnnomalie[counter]=sumAnn;
                          if (counter==2) {
                            
                            var anneeAct=moment().format("YYYY");
                            var annPass=moment(anneeAct).add(-1, 'year').format('YYYY');
                            var limitYear1=annPass+"-01-01T00:00:00.000";
                            var limitYear2=annPass+"-12-31T00:00:00.000";
                            
                            loadInfoPrevYearFilter(limitYear1,limitYear2,arrMois,arrSumMoiCr,arrSumMoiAnnomalie);
                          }
                          
                     }
                      
                    
                      
                      
                  }
              });
          }
        loadInfoFFilter();
        }
        function loadInfoPrevYearFilter(limitYear1,limitYear2,arrMois,arrSumMoiCr,arrSumMoiAnnomalie){
          var urlPreviousYearFilter= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$select=N_x00b0__x0020_Non_x0020_Conform&$filter=Date_x0020_Journ_x00e9_e ge datetime'"+limitYear1+"' and Date_x0020_Journ_x00e9_e le datetime'"+limitYear2+"'"+urlFilterSel;
          var responsePreviousYearFilter=responsePreviousYearFilter||[];
          //console.log("urlPreviousYearFilter= "+urlPreviousYearFilter);
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
                      if (!data.d.__next) {
                        

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
                         console.log("arrSumMoiCr= "+arrSumMoiCr);
                         console.log("arrSumMoiAnnomalie= "+arrSumMoiAnnomalie);

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
                            var annPred=moment().add(-1, 'year').format('YYYY');
                            var moisPred=moment().add(-1, 'month').format('MM');
                            var mois=moment().format('MM');
                            ch1="Taux d'amélioration Moyenne M"+mois+"/ Moy. M"+moisPred;
                            ch2="Taux d'amélioration Moyenne M"+mois+"/ Moy. A-"+annPred;
                            //console.log("tauxMoisAnn= "+tauxMoisAnn);
                            document.getElementById("titre1").innerHTML ='<a class="list-group-item" style="font-size: 17px;color: #000; margin-top: 0%;margin-bottom: 25%;">'+ch1+'</a>';
                            document.getElementById("titre2").innerHTML ='<a class="list-group-item" style="font-size: 17px;color: #000; margin-top: 0%;margin-bottom: 25%;">'+ch2+'</a>';
                            //image1 value1 titre1 image2 value2 titre2
                            if (tauxMois<0) {
                              document.getElementById("image1").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/down-arrow.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 25%;margin-bottom: 5%;'>";
                              document.getElementById("value1").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #d13a36;margin-left: 24%;margin-right: 25%;margin-top: 0%;margin-bottom: 25%;">'+tauxMois+'%</a>';
                            }
                            else if (tauxMois==0) {
                              document.getElementById("image1").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/minus-symbol.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 25%;margin-bottom: 5%;'>";
                              document.getElementById("value1").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #ff5722;margin-left: 24%;margin-right: 25%;margin-top: 0%;margin-bottom: 25%;">'+tauxMois+'%</a>';
                            }
                            else if (tauxMois>0) {
                              document.getElementById("image1").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/up-arrows.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 25%;margin-bottom: 5%;'>";
                              document.getElementById("value1").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #35ab0e;margin-left: 24%;margin-right: 25%;margin-top: 0%;margin-bottom: 25%;">'+tauxMois+'%</a>';
                            }

                            if (tauxMoisAnn<0) {
                              document.getElementById("image2").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/down-arrow.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 25%;margin-bottom: 5%;'>";
                              document.getElementById("value2").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #d13a36;margin-left: 34%;margin-right: 25%;margin-top: 0%;margin-bottom: 25%;">'+tauxMoisAnn+'%</a>';
                            }
                            else if (tauxMoisAnn==0) {
                              //console.log('00000')
                              document.getElementById("image2").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/minus-symbol.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 25%;margin-bottom: 5%;'>";
                              document.getElementById("value2").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #ff5722;margin-left: 34%;margin-right: 25%;margin-top: 0%;margin-bottom: 25%;">'+tauxMoisAnn+'%</a>';
                            }
                            else if (tauxMoisAnn>0) {
                              document.getElementById("image2").innerHTML ="<img src='/sites/bhcom/_catalogs/masterpage/ConformiteControle/img/up-arrows.png' class='img-rounded' alt='Cinque Terre' width='40%' height='40%' style='margin-left: 25%;margin-right: 25%;margin-top: 25%;margin-bottom: 5%;'>";
                              document.getElementById("value2").innerHTML ='<a href="#" class="list-group-item" style="font-size: 17px;color: #fff; background-color: #35ab0e;margin-left: 34%;margin-right: 25%;margin-top: 0%;margin-bottom: 25%;">'+tauxMoisAnn+'%</a>';
                            }
                            ////console.log("rappCrAnnomalie= "+rappCrAnnomalie);
                            var moisAnnAct11=moment().format("MM-YYYY");
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
                                text: 'En matière de contrôle permanant du réseau (mois '+moisAnnAct11+')'
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
        loaddPreviousYearFilter();
        }	
  	}
  	



  	
  	
}