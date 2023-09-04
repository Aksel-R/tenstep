var datefilter="";
  var rad1 = document.getElementById('flexRadioDefault1');
  var rad2 = document.getElementById('flexRadioDefault2');
  console.log("test= "+rad1.checked)
  if (rad1.checked) {
    datefilter="Date_x0020_Journ_x00e9_e";
  }else if (rad2.checked) {
    datefilter="Date_x0020_r_x00e9_ception_x0020";
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
	var rad3=document.getElementById('flexRadioDefault1Rad');
	var rad4=document.getElementById('flexRadioDefault2Rad');
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
    ////////////////////console.log.log('urlAgenceNumber= '+urlAgenceNumber);
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
   var urlCouverture=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter="+datefilter+" ge datetime'"+urlDateDebut1+"' and "+datefilter+" le datetime'"+urlDateFin1+"'"+urlFilterSel;
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

                      if (!data.d.__next) {
                        var nbJrsTheo=21;
                        var nbJrsControle=0;
                        $.each(responseCouverture, function (key, value) {
                          nbJrsControle++;
                        });
                        var tauxCouverture = parseFloat(nbJrsControle/parseFloat(nbAg*nbJrsTheo));
                        
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
		   var urlReparationCRFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter="+datefilter+" ge datetime'"+urlDateDebut+"' and "+datefilter+" le datetime'"+urlDateFin+"'"+urlFilterSel;

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
                              var nbConforme=0;
                              if (value.N_x00b0__x0020_Conforme!=null) {
                                nbConforme=value.N_x00b0__x0020_Conforme;
                              }
                              arrCRConformeSum[arrRegionalDirAg.indexOf(region)]=parseInt(arrCRConformeSum[arrRegionalDirAg.indexOf(region)]+nbConforme);
                              var totalCoonn=0;
                              totalCoonn=parseInt(nbConforme+nbNonConforme);
                              arrCRTotal[arrRegionalDirAg.indexOf(region)]=parseInt(arrCRTotal[arrRegionalDirAg.indexOf(region)]+totalCoonn);
		                        });

                            for (var i = 0; i < arrCRPercent.length; i++) {
                              if (arrCRTotal[i]!=0) {
                                arrCRPercent[i]=parseFloat((arrCRConformeSum[i]/arrCRTotal[i])*100);
                              }
                            }
		                          ////console.log("arrCRCount= "+arrCRCount);
		                          var moisAct=moment().format("MM-YYYY");
		                          arrMois.push(moisAct);
		                          arrSumMoiCr.push(sumCr);
		                          arrSumMoiAnnomalie.push(sumAnn);
		                          
		                          
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
                          //******************************************
                      Highcharts.chart('container44', {
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
                                text: 'Pourcentage de Conformité par Direction (mois '+moisAnnAct+')'
                            },

                          series: [{
                              name: "% Conforme",
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




        

  	