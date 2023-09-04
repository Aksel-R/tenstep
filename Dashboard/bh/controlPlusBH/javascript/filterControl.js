function filterMain()
{
  var datedebut = document.getElementById("start").value;
  var datefin = document.getElementById("finish").value;

  

  if ((new Date(datedebut).getTime() > new Date(datefin).getTime())||((datedebut!="")&&(datefin==""))||((datedebut=="")&&(datefin!=""))) 
  {
    $("div.alert-div").fadeIn(30).delay(100000).fadeOut(30);
    window.location.reload();
  }



  else
  {
    var regionSel=document.getElementById("mylist1").value;
    console.log("regionSel= "+regionSel);
    console.log('datedebut= '+datedebut);
    console.log('datefin= '+datefin);
    var divDateJour="";
    var urlAddDate="";
    if ((datedebut!="")&&(datefin!="")) {
      moment.locale('fr');
      var dstartFilter=moment(datedebut).format('YYYY-MM-DD');
      var urlDateDebutSel=dstartFilter+"T00:00:00.000";
      var dfinishFilter=moment(datefin).format('YYYY-MM-DD');
      var urlDateFinSel=dfinishFilter+"T00:00:00.000";
      //Date_x0020_Journ_x00e9_e eq datetime'"+jourUrl+"'";
      urlAddDate="?$filter=Date_x0020_Journ_x00e9_e ge datetime'"+urlDateDebutSel+"' and Date_x0020_Journ_x00e9_e le datetime'"+urlDateFinSel+"'";
    }
  var responseDateJourneeFilter=responseDateJourneeFilter||[];
  var urlDateJourneeFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items"+urlAddDate;
  ////////////////console.log.log('urlDateJourneeFilter= '+urlDateJourneeFilter);
  function loadDateJourneeFilter() {
            var nbre = 0;

            $.ajax({
                url: urlDateJourneeFilter,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseDateJourneeFilter = responseDateJourneeFilter.concat(data.d.results);
                    if (data.d.__next) {
                        urlDateJourneeFilter = data.d.__next;
                        loadDateJourneeFilter();
                    }
                    if (!(data.d.__next)){
                      var arrDateJourne=[];

                      var arrDivDateId=[];
                      var arrDivDateIdUp=[];
                      var arrDivDateIdDown=[];

                      var arrInfoDateJour=[];
                      
                      $.each(responseDateJourneeFilter, function (key, value) {
                        moment.locale('fr');
                        var dateJ=value.Date_x0020_Journ_x00e9_e;
                        var dateJournee=moment(dateJ).format('YYYY-MM-DD');
                        if (arrDateJourne.indexOf(dateJournee)<0) {
                          arrDateJourne.push(dateJournee);

                        }
                        

                      });
                      ////////////////console.log.log("arrDateJourne= "+arrDateJourne);
                      for (var i = 0; i < arrDateJourne.length; i++) {
                        
                        loadStructFilter(arrDateJourne,arrDateJourne[i],i,arrDivDateId,arrDivDateIdUp,arrDivDateIdDown);
                      }
                    }
                    
                    
                }
            });
        }
        loadDateJourneeFilter();
        var urlRegSel="";
        if (regionSel!="") {
          urlRegSel="&$filter=Direction_x0020_R_x00e9_gionale eq'"+regionSel+"'"
        }
        function loadStructFilter(arrDateJourne,dateJourne,nb,arrDivDateId,arrDivDateIdUp,arrDivDateIdDown){
          var responseAgenceDirectionFilter= responseAgenceDirectionFilter || [];
          var urlAgenceDirectionFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Id,Title,Direction_x0020_R_x00e9_gionale&$orderby Direction_x0020_R_x00e9_gionale"+urlRegSel;
          //////console.log("url= "+urlAgenceDirectionFilter);
          function LoadAgencesDirFilter() {
                  

                  $.ajax({
                      url: urlAgenceDirectionFilter,
                      method: "GET",
                      dataType: "json",
                      headers: { Accept: "application/json;odata=verbose" },
                      success: function (data) {
                          responseAgenceDirectionFilter = responseAgenceDirectionFilter.concat(data.d.results);
                          if (data.d.__next) {
                              urlAgenceDirectionFilter = data.d.__next;
                              LoadAgencesDirFilter();
                              
                          }
                          if (!(data.d.__next)) {
                              var arrRegionalDir=["DIRECTION REGIONALE TUNIS Médina","DIRECTION REGIONALE DU NORD","DIRECTION REGIONALE TUNIS NORD","DIRECTION REGIONALE TUNIS SUD  ET CAP BON","DIRECTION REGIONALE DU SUD","CENTRE D'AFFAIRES HEDI NOUIRA","DIRECTION REGIONALE DU SAHEL","DIRECTION REGIONALE SFAX ET CENTRE","CENTRE D'AFFAIRES RETAIL KHEIREDDINE PACHA"]
                              var arrRegion1=[];
                              
                                var arrTunisMedina=[];
                                var arrTunisMedinaId=[];
                                var arrTunisMedinaDateR=[];
                                var arrTunisMedinaStatutReg=[];
                                var arrTunisMedinaAvis=[];
                                var statJourTunisMedina=true;

                                var arrNord=[];
                                var arrNordId=[];
                                var arrNordDateR=[];
                                var arrNordStatutReg=[];
                                var arrNordAvis=[];
                                var statJourNord=true;

                                var arrTunisNord=[];
                                var arrTunisNordId=[];
                                var arrTunisNordDateR=[];
                                var arrTunisNordStatutReg=[];
                                var arrTunisNordAvis=[];
                                var statJourTunisNord=true;

                                var arrTunisSudCapBon=[];
                                var arrTunisSudCapBonId=[];
                                var arrTunisSudCapBonDateR=[];
                                var arrTunisSudCapBonStatutReg=[];
                                var arrTunisSudCapBonAvis=[];
                                var statJourTunisSudCapBon=true;

                                var arrSud=[];
                                var arrSudId=[];
                                var arrSudDateR=[];
                                var arrSudStatutReg=[];
                                var arrSudAvis=[];
                                var statJourSud=true;

                                var arrHediNouira=[];
                                var arrHediNouiraId=[];
                                var arrHediNouiraDateR=[];
                                var arrHediNouiraStatutReg=[];
                                var arrHediNouiraAvis=[];
                                var statJourHediNouira=true;

                                var arrSahel=[];
                                var arrSahelId=[];
                                var arrSahelDateR=[];
                                var arrSahelStatutReg=[];
                                var arrSahelAvis=[];
                                var statJourSahel=true;

                                var arrSfaxEtCentre=[];
                                var arrSfaxEtCentreId=[];
                                var arrSfaxEtCentreDateR=[];
                                var arrSfaxEtCentreStatutReg=[];
                                var arrSfaxEtCentreAvis=[];
                                var statJourSfaxEtCentre=true;

                                var arrKheiredinePacha=[];
                                var arrKheiredinePachaId=[];
                                var arrKheiredinePachaDateR=[];
                                var arrKheiredinePachaStatutReg=[];
                                var arrKheiredinePachaAvis=[];
                                var statJourKheiredinePacha=true;
                              $.each(responseAgenceDirectionFilter, function (key, value) {
                                var agence=value.Title;
                                var region=value.Direction_x0020_R_x00e9_gionale;
                                var agId=value.Id;
                                //////console.log("agId= "+agId);
                                

                                if (region=="DIRECTION REGIONALE TUNIS Médina") {
                                  arrTunisMedina.push(agence);
                                  arrTunisMedinaId.push(agId);
                                  arrTunisMedinaDateR.push("À saisir");
                                  arrTunisMedinaStatutReg.push("À saisir");
                                  arrTunisMedinaAvis.push("À saisir");
                                }
                                if (region=="DIRECTION REGIONALE DU NORD") {
                                  arrNord.push(agence);
                                  arrNordId.push(agId);
                                  arrNordDateR.push("À saisir");
                                  arrNordStatutReg.push("À saisir");
                                  arrNordAvis.push("À saisir");
                                }
                                if (region=="DIRECTION REGIONALE TUNIS NORD") {
                                  arrTunisNord.push(agence);
                                  arrTunisNordId.push(agId);
                                  arrTunisNordDateR.push("À saisir");
                                  arrTunisNordStatutReg.push("À saisir");
                                  arrTunisNordAvis.push("À saisir");
                                }
                                if (region=="DIRECTION REGIONALE TUNIS SUD  ET CAP BON") {
                                  arrTunisSudCapBon.push(agence);
                                  arrTunisSudCapBonId.push(agId);
                                  arrTunisSudCapBonDateR.push("À saisir");
                                  arrTunisSudCapBonStatutReg.push("À saisir");
                                  arrTunisSudCapBonAvis.push("À saisir");
                                }
                                if (region=="DIRECTION REGIONALE DU SUD") {
                                  arrSud.push(agence);
                                  arrSudId.push(agId);
                                  arrSudDateR.push("À saisir");
                                  arrSudStatutReg.push("À saisir");
                                  arrSudAvis.push("À saisir");
                                }
                                if (region=="CENTRE D'AFFAIRES HEDI NOUIRA") {
                                  arrHediNouira.push(agence);
                                  arrHediNouiraId.push(agId);
                                  arrHediNouiraDateR.push("À saisir");
                                  arrHediNouiraStatutReg.push("À saisir");
                                  arrHediNouiraAvis.push("À saisir");
                                }
                                if (region=="DIRECTION REGIONALE DU SAHEL") {
                                  arrSahel.push(agence);
                                  arrSahelId.push(agId);
                                  arrSahelDateR.push("À saisir");
                                  arrSahelStatutReg.push("À saisir");
                                  arrSahelAvis.push("À saisir");
                                }
                                if (region=="DIRECTION REGIONALE SFAX ET CENTRE") {
                                  arrSfaxEtCentre.push(agence);
                                  arrSfaxEtCentreId.push(agId);
                                  arrSfaxEtCentreDateR.push("À saisir");
                                  arrSfaxEtCentreStatutReg.push("À saisir");
                                  arrSfaxEtCentreAvis.push("À saisir");
                                }
                                if (region=="CENTRE D'AFFAIRES RETAIL KHEIREDDINE PACHA") {
                                  arrKheiredinePacha.push(agence);
                                  arrKheiredinePachaId.push(agId);
                                  arrKheiredinePachaDateR.push("À saisir");
                                  arrKheiredinePachaStatutReg.push("À saisir");
                                  arrKheiredinePachaAvis.push("À saisir");
                                }

                                if (arrRegion1.indexOf(region)<0) {
                                  arrRegion1.push(region);
                                  
                                }

                              });
                              
                              
                             //////////console.log.log("arrRegion1= "+arrRegion1);
                             //////////console.log.log("arrTunisMedina= "+arrTunisMedina);
                             loadTabelsFilter(arrRegionalDir,arrRegion1,arrTunisMedina,arrTunisMedinaId,arrTunisMedinaDateR,arrTunisMedinaStatutReg,arrTunisMedinaAvis,statJourTunisMedina,arrNord,arrNordId,arrNordDateR,arrNordStatutReg,arrNordAvis,statJourNord,arrTunisNord,arrTunisNordId,arrTunisNordDateR,arrTunisNordStatutReg,arrTunisNordAvis,statJourTunisNord,arrTunisSudCapBon,arrTunisSudCapBonId,arrTunisSudCapBonDateR,arrTunisSudCapBonStatutReg,arrTunisSudCapBonAvis,statJourTunisSudCapBon,arrSud,arrSudId,arrSudDateR,arrSudStatutReg,arrSudAvis,statJourSud,arrHediNouira,arrHediNouiraId,arrHediNouiraDateR,arrHediNouiraStatutReg,arrHediNouiraAvis,statJourHediNouira,arrSahel,arrSahelId,arrSahelDateR,arrSahelStatutReg,arrSahelAvis,statJourSahel,arrSfaxEtCentre,arrSfaxEtCentreId,arrSfaxEtCentreDateR,arrSfaxEtCentreStatutReg,arrSfaxEtCentreAvis,statJourSfaxEtCentre,arrKheiredinePacha,arrKheiredinePachaId,arrKheiredinePachaDateR,arrKheiredinePachaStatutReg,arrKheiredinePachaAvis,statJourKheiredinePacha,arrDivDateId,arrDivDateIdUp,arrDivDateIdDown);
                          }
                          
                          
                      }
                  });
              }
              LoadAgencesDirFilter();
              function loadTabelsFilter(arrRegionalDir,arrRegion1,arrTunisMedina,arrTunisMedinaId,arrTunisMedinaDateR,arrTunisMedinaStatutReg,arrTunisMedinaAvis,statJourTunisMedina,arrNord,arrNordId,arrNordDateR,arrNordStatutReg,arrNordAvis,statJourNord,arrTunisNord,arrTunisNordId,arrTunisNordDateR,arrTunisNordStatutReg,arrTunisNordAvis,statJourTunisNord,arrTunisSudCapBon,arrTunisSudCapBonId,arrTunisSudCapBonDateR,arrTunisSudCapBonStatutReg,arrTunisSudCapBonAvis,statJourTunisSudCapBon,arrSud,arrSudId,arrSudDateR,arrSudStatutReg,arrSudAvis,statJourSud,arrHediNouira,arrHediNouiraId,arrHediNouiraDateR,arrHediNouiraStatutReg,arrHediNouiraAvis,statJourHediNouira,arrSahel,arrSahelId,arrSahelDateR,arrSahelStatutReg,arrSahelAvis,statJourSahel,arrSfaxEtCentre,arrSfaxEtCentreId,arrSfaxEtCentreDateR,arrSfaxEtCentreStatutReg,arrSfaxEtCentreAvis,statJourSfaxEtCentre,arrKheiredinePacha,arrKheiredinePachaId,arrKheiredinePachaDateR,arrKheiredinePachaStatutReg,arrKheiredinePachaAvis,statJourKheiredinePacha,arrDivDateId,arrDivDateIdUp,arrDivDateIdDown)
              {
                var responseDayInfoFilter=responseDayInfoFilter || [];
  
                var jourUrl=dateJourne+'T00:00:00.000';
                var urlDayInfoFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Date_x0020_Journ_x00e9_e eq datetime'"+jourUrl+"'";
                ////////console.log("urlDayInfoFilter= "+urlDayInfoFilter);
                function loadDayInfoFilter(){
                  $.ajax({
                url: urlDayInfoFilter,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseDayInfoFilter = responseDayInfoFilter.concat(data.d.results);
                    if (data.d.__next) {
                        urlDayInfoFilter = data.d.__next;
                        loadDayInfoFilter();
                    }
                    if (!(data.d.__next)){
                      $.each(responseDayInfoFilter, function (key, value) {
                        moment.locale('fr');
                        var idAgg=value.AgenceId;
                        var regg=value.R_x00e9_gion_x0020_de_x0020_l_x0;
                        var dRecep=value.Date_x0020_r_x00e9_ception_x0020;
                        var dateReception=moment(dRecep).format("DD-MM-YYYY");
                        var statRegio=value.Statut_x0020_R_x00e9_gional;
                        var avisDcp=value.Avis_x0020_DCP;
                        if (regg=="DIRECTION REGIONALE TUNIS Médina") {
                          //arrTunisMedina
                          //arrTunisMedinaId
                          ////////console.log("regg="+regg);
                          arrTunisMedinaDateR[arrTunisMedinaId.indexOf(idAgg)]= dateReception;
                          arrTunisMedinaStatutReg[arrTunisMedinaId.indexOf(idAgg)]= statRegio;
                          arrTunisMedinaAvis[arrTunisMedinaId.indexOf(idAgg)]= avisDcp;
                        }
                        if (regg=="DIRECTION REGIONALE DU NORD") {
                          // arrNordId
                          // arrNord
                          ////////console.log("regg="+regg);
                          arrNordDateR[arrNordId.indexOf(idAgg)]= dateReception;
                          arrNordStatutReg[arrNordId.indexOf(idAgg)]= statRegio;
                          arrNordAvis[arrNordId.indexOf(idAgg)]= avisDcp;
                        }
                        if (regg=="DIRECTION REGIONALE TUNIS NORD") {
                          // arrTunisNordId
                          // arrTunisNord
                          ////////console.log("regg="+regg);
                          arrTunisNordDateR[arrTunisNordId.indexOf(idAgg)]= dateReception;
                          //////console.log("idAgg= "+idAgg);
                          //////console.log("index= "+arrTunisNordId.indexOf(idAgg));
                          //////console.log("arrTunisNordId= "+arrTunisNordId);
                          arrTunisNordStatutReg[arrTunisNordId.indexOf(idAgg)]= statRegio;
                          arrTunisNordAvis[arrTunisNordId.indexOf(idAgg)]= avisDcp;
                        }
                        if (regg=="DIRECTION REGIONALE TUNIS SUD  ET CAP BON") {
                          // arrTunisSudCapBonId
                          // arrTunisSudCapBon
                          ////////console.log("regg="+regg);
                          arrTunisSudCapBonDateR[arrTunisSudCapBonId.indexOf(idAgg)]= dateReception;
                          arrTunisSudCapBonStatutReg[arrTunisSudCapBonId.indexOf(idAgg)]= statRegio;
                          arrTunisSudCapBonAvis[arrTunisSudCapBonId.indexOf(idAgg)]= avisDcp;
                        }
                        if (regg=="DIRECTION REGIONALE DU SUD") {
                          // arrSudId
                          // arrSud
                          ////////console.log("regg="+regg);
                          arrSudDateR[arrSudId.indexOf(idAgg)]= dateReception;
                          arrSudStatutReg[arrSudId.indexOf(idAgg)]= statRegio;
                          arrSudAvis[arrSudId.indexOf(idAgg)]= avisDcp;
                        }
                        if (regg=="CENTRE D'AFFAIRES HEDI NOUIRA") {
                          // arrHediNouiraId
                          // arrHediNouira
                          ////////console.log("regg="+regg);
                          arrHediNouiraDateR[arrHediNouiraId.indexOf(idAgg)]= dateReception;
                          arrHediNouiraStatutReg[arrHediNouiraId.indexOf(idAgg)]= statRegio;
                          arrHediNouiraAvis[arrHediNouiraId.indexOf(idAgg)]= avisDcp;
                        }
                        if (regg=="DIRECTION REGIONALE DU SAHEL") {
                          // arrSahelId
                          // arrSahel
                          ////////console.log("regg="+regg);
                          arrSahelDateR[arrSahelId.indexOf(idAgg)]= dateReception;
                          arrSahelStatutReg[arrSahelId.indexOf(idAgg)]= statRegio;
                          arrSahelAvis[arrSahelId.indexOf(idAgg)]= avisDcp;
                        }
                        if (regg=="DIRECTION REGIONALE SFAX ET CENTRE") {
                          // arrSfaxEtCentreId
                          // arrSfaxEtCentre
                          ////////console.log("regg="+regg);
                          arrSfaxEtCentreDateR[arrSfaxEtCentreId.indexOf(idAgg)]= dateReception;
                          arrSfaxEtCentreStatutReg[arrSfaxEtCentreId.indexOf(idAgg)]= statRegio;
                          arrSfaxEtCentreAvis[arrSfaxEtCentreId.indexOf(idAgg)]= avisDcp;
                        }
                        if (regg=="CENTRE D'AFFAIRES RETAIL KHEIREDDINE PACHA") {
                          // arrKheiredinePachaId
                          // arrKheiredinePacha
                          ////////console.log("regg="+regg);
                          arrKheiredinePachaDateR[arrKheiredinePachaId.indexOf(idAgg)]= dateReception;
                          arrKheiredinePachaStatutReg[arrKheiredinePachaId.indexOf(idAgg)]= statRegio;
                          arrKheiredinePachaAvis[arrKheiredinePachaId.indexOf(idAgg)]= avisDcp;
                        }

                      }); 
                      var statDateAct=false;
                              for (var i = 0; i < arrTunisMedina.length; i++) {
                                if ((arrTunisMedinaStatutReg!="Validée")||(arrTunisMedinaAvis!="Vérifiée")) {
                                  statJourTunisMedina=false;
                                  break;
                                }
                              }
                              for (var i = 0; i < arrNord.length; i++) {
                                if ((arrNordStatutReg!="Validée")||(arrNordAvis!="Vérifiée")) {
                                  statJourNord=false;
                                  break;
                                }
                                
                                
                                
                              }
                              for (var i = 0; i < arrTunisNord.length; i++) {
                                if ((arrTunisNordStatutReg!="Validée")||(arrTunisNordAvis!="Vérifiée")) {
                                  statJourTunisNord=false;
                                  break;
                                }                                
                              }
                              for (var i = 0; i < arrTunisSudCapBon.length; i++) {
                                if ((arrTunisSudCapBonStatutReg!="Validée")||(arrTunisSudCapBonAvis!="Vérifiée")) {
                                  statJourTunisSudCapBon=false;
                                  break;
                                }
                              }
                              for (var i = 0; i < arrSud.length; i++) {
                                if ((arrSudStatutReg!="Validée")||(arrSudAvis!="Vérifiée")) {
                                  statJourSud=false;
                                  break;
                                }
                              }
                              for (var i = 0; i < arrHediNouira.length; i++) {
                                if ((arrHediNouiraStatutReg!="Validée")||(arrHediNouiraAvis!="Vérifiée")) {
                                  statJourHediNouira=false;
                                  break;
                                }
                              }
                              for (var i = 0; i < arrSahel.length; i++) {
                                if ((arrSahelStatutReg!="Validée")||(arrSahelAvis!="Vérifiée")) {
                                  statJourSahel=false;
                                  break;
                                }
                              }
                              for (var i = 0; i < arrSfaxEtCentre.length; i++) {
                                if ((arrSfaxEtCentreStatutReg!="Validée")||(arrSfaxEtCentreAvis!="Vérifiée")) {
                                  statJourSfaxEtCentre=false;
                                  break;
                                }
                              }
                              for (var i = 0; i < arrKheiredinePacha.length; i++) {
                                if ((arrKheiredinePachaStatutReg!="Validée")||(arrKheiredinePachaAvis!="Vérifiée")) {
                                  statJourKheiredinePacha=false;
                                  break;
                                }
                              }
                              if ((statJourTunisMedina==true)&&(statJourNord==true)&&(statJourTunisNord==true)&&(statJourTunisSudCapBon==true)&&(statJourSud==true)&&(statJourHediNouira==true)&&(statJourSahel==true)&&(statJourSfaxEtCentre==true)&&(statJourKheiredinePacha==true)) {
                                statDateAct=true;
                              }
                              var divValidationDateAct='';
                              if (statDateAct==true) {
                                divValidationDateAct="<span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/calendarValid.png' class='img-rounded' width='30px' height='30px' style='margin-left:80%;'></span> <span style='font-weight: bold; color: #4f9f1a; text-decoration: underline;margin-left:0.4%;border:1px dotted black;background-color: #d9f4de;'>Date Valide</span>";
                              }else if (statDateAct==false) {
                                divValidationDateAct="<span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/calendarNonValid.png' class='img-rounded' width='30px' height='30px' style='margin-left:80%;'></span> <span style='font-weight: bold; color: #cf232a; text-decoration: underline;margin-left:0.4%;border:1px dotted black;background-color: #f4d9d9;'>Date Non Valide</span>";
                              }
                      //////console.log("arrTunisNordDateR= "+arrTunisNordDateR);
                      moment.locale('fr');
                      var jour=moment(dateJourne).format('DD/MM/YYYYY');
                      var dteUpId="dateUp"+String(nb);
                      var dateDownId="dateDown"+String(nb);
                      var rowDateId="idDatejj"+String(nb);
                      arrDivDateId.push(rowDateId);
                      arrDivDateIdUp.push(dteUpId);
                      arrDivDateIdDown.push(dateDownId);

                      divDateJour+='</br>'+
                      '<div class="row">'+
                        '<ul><i class="fa fa-chevron-up" aria-hidden="true" id="'+dteUpId+'" style="margin-left: 0%;"></i> <i class="fa fa-chevron-down" aria-hidden="true" id="'+dateDownId+'"></i><span style="font-size: 14px; text-decoration: underline; font-weight: bold; margin-left: 1%;">'+jour+'</span>'+divValidationDateAct+'</ul>'+
                      '</div>'+
                      '<div class="row" id="'+rowDateId+'">';
                      //******
                      for (var k = 0; k < arrRegion1.length; k++) {

                        ////////console.log("k= "+k);
                        
                        var nb1=nb;
                        var nomRegion=arrRegion1[k];
                        var idUp="sldup"+String(k)+String(nb);
                        var idDown="slddown"+String(k)+String(nb);
                        var idRowReg='tabReg'+String(k)+String(nb);
                        //////////////console.log.log("idRowReg= "+idRowReg);
                        var idTabReg='tableaux'+String(k)+String(nb);
                        divDateJour+='<div class="row">'+
                          '<ul><span style="font-size: 14px;text-decoration: underline;margin-left: 2%; cursor: pointer; color: #cf232a;">'+nomRegion+'</span></ul>'+
                        '</div>'+
                        '<div class="row" id="'+idRowReg+'">'+
                          '<table id="'+idTabReg+'" class="table table-striped table-bordered" >'+
                            '<thead>'+
                              '<tr>'+        
                                '<th>Agences</th>'+        
                                '<th>Date Réception</th>'+
                                '<th>Statut Régional</th>'+
                                '<th>Avis DCPR</th>'+
                                '<th style="text-align:center;">Statut Journée Région</th>'+
                              '</tr>'+
                            '</thead>'+
                            '<tbody>';
                            
                              var idUp1="sldup"+String(k)+String(nb); ;
                              var idDown1="slddown"+String(k)+String(nb); ;
                              var idRowReg1='tabReg'+String(k)+String(nb); ;
                              var dashIdUp='#'+idUp1;
                                var dashIdDown='#'+idDown1;
                                var dashIdRowReg='#'+idTabReg;
                                var dashIdTable='#'+idTabReg;
                                ////////////console.log.log("dashIdUp= "+dashIdUp);
                                ////////////console.log.log("dashIdDown= "+dashIdDown);
                              ////////console.log("dashIdRowReg= "+dashIdRowReg);
                              // $(document).ready(function(){
                              //       ////////////console.log.log("GG");
                              //         $(dashIdUp).click(function(){
                              //             $(dashIdRowReg).slideUp(1000);
                              //         });
                              //         $(dashIdDown).click(function(){
                              //             $(dashIdRowReg).slideDown(1000);
                              //         });
                              //     });
                        if (arrRegion1[k]=="DIRECTION REGIONALE TUNIS Médina") {
                         

                          for (var j = 0; j < arrTunisMedinaId.length; j++) {
                            // arrTunisMedinaId
                           
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisMedina[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisMedinaDateR[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisMedinaStatutReg[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisMedinaAvis[j] +"</td>";
                           
                            if(j==0){
                              if (statJourTunisMedina==true){
                                divDateJour+="<td rowspan='"+parseInt(arrTunisMedinaId.length+1)+"'style='background-color: #d9f4de; text-align: center;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/valid.png' class='img-rounded' width='60px' height='60px'></span></br><span style='font-weight: bold; color: #4f9f1a;'>VALIDE</span></td>"
                              }
                              else{
                                divDateJour+="<td rowspan='"+parseInt(arrTunisMedinaId.length+1)+"'style='background-color: #f4d9d9; text-align: center;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/nonValid.png' class='img-rounded' width='60px' height='60px'><span style='font-weight: bold; color: #cf232a;'></br><span>À SAISIR</span></td>" 
                              }
                            }
                          }
                        }
                        if (arrRegion1[k]=="DIRECTION REGIONALE DU NORD") {
                          for (var j = 0; j < arrNordId.length; j++) {
                            // arrTunisMedinaId
                            
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrNord[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrNordDateR[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrNordStatutReg[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrNordAvis[j] +"</td>";
                             
                            if(j==0){
                              if (statJourNord==true){
                                divDateJour+="<td rowspan='"+parseInt(arrNordId.length+1)+"'style='background-color: #d9f4de; text-align: center;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/valid.png' class='img-rounded' width='60px' height='60px'></span></br><span style='font-weight: bold; color: #4f9f1a;'>VALIDE</span></td>"
                              }
                              else{
                                divDateJour+="<td rowspan='"+parseInt(arrNordId.length+1)+"'style='background-color: #f4d9d9; text-align: center;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/nonValid.png' class='img-rounded' width='60px' height='60px'><span style='font-weight: bold; color: #cf232a;'></br><span>À SAISIR</span></td>" 
                              }
                            }
                          }
                        }
                        if (arrRegion1[k]=="DIRECTION REGIONALE TUNIS NORD") {
                          for (var j = 0; j < arrTunisNordId.length; j++) {
                                                      // arrTunisMedinaId
                              
                                divDateJour+="<tr class='rows'/>";
                                divDateJour+="<td style='width:20%;'>" + arrTunisNord[j] +"</td>";
                                divDateJour+="<td style='width:20%;'>" + arrTunisNordDateR[j] +"</td>";
                                divDateJour+="<td style='width:20%;'>" + arrTunisNordStatutReg[j] +"</td>";
                                divDateJour+="<td style='width:20%;'>" + arrTunisNordAvis[j] +"</td>";
                                
                              if(j==0){
                                if (statJourTunisNord==true){
                                  divDateJour+="<td rowspan='"+parseInt(arrTunisNordId.length+1)+"'style='background-color: #d9f4de; text-align: center; width:20%;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/valid.png' class='img-rounded' width='60px' height='60px'></span></br><span style='font-weight: bold; color: #4f9f1a;'>VALIDE</span></td>"
                                }
                                else{
                                  divDateJour+="<td rowspan='"+parseInt(arrTunisNordId.length+1)+"'style='background-color: #f4d9d9; text-align: center; width:20%;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/nonValid.png' class='img-rounded' width='60px' height='60px'><span style='font-weight: bold; color: #cf232a;'></br><span>À SAISIR</span></td>" 
                                }
                              }
                            }
                        }
                        if (arrRegion1[k]=="DIRECTION REGIONALE TUNIS SUD  ET CAP BON") {
                          for (var j = 0; j < arrTunisSudCapBonId.length; j++) {
                            // arrTunisMedinaId
                            
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisSudCapBon[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisSudCapBonDateR[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisSudCapBonStatutReg[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisSudCapBonAvis[j] +"</td>";
                             
                            if(j==0){
                              if (statJourTunisSudCapBon==true){
                                divDateJour+="<td rowspan='"+parseInt(arrTunisSudCapBonId.length+1)+"'style='background-color: #d9f4de; text-align: center; width:20%;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/valid.png' class='img-rounded' width='60px' height='60px'></span></br><span style='font-weight: bold; color: #4f9f1a;'>VALIDE</span></td>"
                              }
                              else{
                                divDateJour+="<td rowspan='"+parseInt(arrTunisSudCapBonId.length+1)+"'style='background-color: #f4d9d9; text-align: center; width:20%;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/nonValid.png' class='img-rounded' width='60px' height='60px'><span style='font-weight: bold; color: #cf232a;'></br><span>À SAISIR</span></td>" 
                              }
                            }
                          }
                        }
                        if (arrRegion1[k]=="DIRECTION REGIONALE DU SUD") {
                          for (var j = 0; j < arrSudId.length; j++) {
                            // arrTunisMedinaId
                            
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrSud[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSudDateR[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSudStatutReg[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSudAvis[j] +"</td>";
                             
                            if(j==0){
                              if (statJourSud==true){
                                divDateJour+="<td rowspan='"+parseInt(arrSudId.length+1)+"'style='background-color: #d9f4de; text-align: center; width:20%;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/valid.png' class='img-rounded' width='60px' height='60px'></span></br><span style='font-weight: bold; color: #4f9f1a;'>VALIDE</span></td>"
                              }
                              else{
                                divDateJour+="<td rowspan='"+parseInt(arrSudId.length+1)+"'style='background-color: #f4d9d9; text-align: center; width:20%;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/nonValid.png' class='img-rounded' width='60px' height='60px'><span style='font-weight: bold; color: #cf232a;'></br><span>À SAISIR</span></td>" 
                              }
                            }
                          }
                        }
                        if (arrRegion1[k]=="CENTRE D'AFFAIRES HEDI NOUIRA") {
                          for (var j = 0; j < arrHediNouiraId.length; j++) {
                            // arrTunisMedinaId
                            
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrHediNouira[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrHediNouiraDateR[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrHediNouiraStatutReg[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrHediNouiraAvis[j] +"</td>";
                             
                            if(j==0){
                              if (statJourHediNouira==true){
                                divDateJour+="<td rowspan='"+parseInt(arrHediNouiraId.length+1)+"'style='background-color: #d9f4de; text-align: center; width:20%;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/valid.png' class='img-rounded' width='60px' height='60px'></span></br><span style='font-weight: bold; color: #4f9f1a;'>VALIDE</span></td>"
                              }
                              else{
                                divDateJour+="<td rowspan='"+parseInt(arrHediNouiraId.length+1)+"'style='background-color: #f4d9d9; text-align: center; width:20%;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/nonValid.png' class='img-rounded' width='60px' height='60px'><span style='font-weight: bold; color: #cf232a;'></br><span>À SAISIR</span></td>" 
                              }
                            }
                          }
                        }
                        if (arrRegion1[k]=="DIRECTION REGIONALE DU SAHEL") {
                          for (var j = 0; j < arrSahelId.length; j++) {
                            // arrTunisMedinaId
                            
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrSahel[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSahelDateR[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSahelStatutReg[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSahelAvis[j] +"</td>";
                             
                            if(j==0){
                              if (statJourSahel==true){
                                divDateJour+="<td rowspan='"+parseInt(arrSahelId.length+1)+"'style='background-color: #d9f4de; text-align: center; width:20%;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/valid.png' class='img-rounded' width='60px' height='60px'></span></br><span style='font-weight: bold; color: #4f9f1a;'>VALIDE</span></td>"
                              }
                              else{
                                divDateJour+="<td rowspan='"+parseInt(arrSahelId.length+1)+"'style='background-color: #f4d9d9; text-align: center; width:20%;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/nonValid.png' class='img-rounded' width='60px' height='60px'><span style='font-weight: bold; color: #cf232a;'></br><span>À SAISIR</span></td>" 
                              }
                            }
                          }
                        }
                        if (arrRegion1[k]=="DIRECTION REGIONALE SFAX ET CENTRE") {
                          for (var j = 0; j < arrSfaxEtCentreId.length; j++) {
                            // arrTunisMedinaId
                            
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrSfaxEtCentre[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSfaxEtCentreDateR[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSfaxEtCentreStatutReg[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSfaxEtCentreAvis[j] +"</td>";
                             
                            if(j==0){
                              if (statJourSfaxEtCentre==true){
                                divDateJour+="<td rowspan='"+parseInt(arrSfaxEtCentreId.length+1)+"'style='background-color: #d9f4de; text-align: center; width:20%;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/valid.png' class='img-rounded' width='60px' height='60px'></span></br><span style='font-weight: bold; color: #4f9f1a;'>VALIDE</span></td>"
                              }
                              else{
                                divDateJour+="<td rowspan='"+parseInt(arrSfaxEtCentreId.length+1)+"'style='background-color: #f4d9d9; text-align: center; width:20%;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/nonValid.png' class='img-rounded' width='60px' height='60px'><span style='font-weight: bold; color: #cf232a;'></br><span>À SAISIR</span></td>" 
                              }
                            }
                          }
                        }
                        if (arrRegion1[k]=="CENTRE D'AFFAIRES RETAIL KHEIREDDINE PACHA") {
                          for (var j = 0; j < arrKheiredinePachaId.length; j++) {
                            // arrTunisMedinaId
                            
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrKheiredinePacha[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrKheiredinePachaDateR[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrKheiredinePachaStatutReg[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrKheiredinePachaAvis[j] +"</td>";
                             
                            if(j==0){
                              if (statJourKheiredinePacha==true){
                                divDateJour+="<td rowspan='"+parseInt(arrKheiredinePachaId.length+1)+"'style='background-color: #d9f4de; text-align: center; width:20%;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/valid.png' class='img-rounded' width='60px' height='60px'></span></br><span style='font-weight: bold; color: #4f9f1a;'>VALIDE</span></td>"
                              }
                              else{
                                divDateJour+="<td rowspan='"+parseInt(arrKheiredinePachaId.length+1)+"'style='background-color: #f4d9d9; text-align: center; width:20%;'> <span class='card-widget__icon'><img src='/sites/bhcom/_catalogs/masterpage/ContolPlus/img/nonValid.png' class='img-rounded' width='60px' height='60px'><span style='font-weight: bold; color: #cf232a;'></br><span>À SAISIR</span></td>" 
                              }
                            }
                          }
                        }
                        divDateJour+='</tbody>'+
                          '</table>'+
                        '</div>';
                      }
                      divDateJour+='</div>';
                          //******
                          for (var ck = 0; ck < arrDivDateId.length; ck++) {
                            upDownDiv(arrDivDateIdUp[ck],arrDivDateIdDown[ck],arrDivDateId[ck]);
                          }
                          

                          document.getElementById("dataDiv").innerHTML =divDateJour;

                    }
                    
                   
                }
            });
                }
                loadDayInfoFilter();
              }
        }
  }

}


