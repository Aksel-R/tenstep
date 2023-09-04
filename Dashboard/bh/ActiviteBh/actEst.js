function loadTabels(arrRegion1,arrTunisMedina,arrTunisMedinaId,arrTunisMedinaDateR,arrTunisMedinaStatutReg,arrTunisMedinaAvis,arrTunisMedinaControlurs,arrTunisMedinaDerniereModification,arrTunisMedinaDelai,arrTunisMedinaStatut,arrNord,arrNordId,arrNordDateR,arrNordStatutReg,arrNordAvis,arrNordControlurs,arrNordDerniereModification,arrNordDelai,arrNordStatut,arrTunisNord,arrTunisNordId,arrTunisNordDateR,arrTunisNordStatutReg,arrTunisNordAvis,arrTunisNordControlurs,arrTunisNordDerniereModification,arrTunisNordDelai,arrTunisNordStatut,arrTunisSudCapBon,arrTunisSudCapBonId,arrTunisSudCapBonDateR,arrTunisSudCapBonStatutReg,arrTunisSudCapBonAvis,arrTunisSudCapBonControlurs,arrTunisSudCapBonDerniereModification,arrTunisSudCapBonDelai,arrTunisSudCapBonStatut,arrSud,arrSudId,arrSudDateR,arrSudStatutReg,arrSudAvis,arrSudControlurs,arrSudDerniereModification,arrSudDelai,arrSudStatut,arrHediNouira,arrHediNouiraId,arrHediNouiraDateR,arrHediNouiraStatutReg,arrHediNouiraAvis,arrHediNouiraControlurs,arrHediNouiraDerniereModification,arrHediNouiraDelai,arrHediNouiraStatut,arrSahel,arrSahelId,arrSahelDateR,arrSahelStatutReg,arrSahelAvis,arrSahelControlurs,arrSahelDerniereModification,arrSahelDelai,arrSahelStatut,arrSfaxEtCentre,arrSfaxEtCentreId,arrSfaxEtCentreDateR,arrSfaxEtCentreStatutReg,arrSfaxEtCentreAvis,arrSfaxEtCentreControlurs,arrSfaxEtCentreDerniereModification,arrSfaxEtCentreDelai,arrSfaxEtCentreStatut,arrKheiredinePacha,arrKheiredinePachaId,arrKheiredinePachaDateR,arrKheiredinePachaStatutReg,arrKheiredinePachaAvis,arrKheiredinePachaControlurs,arrKheiredinePachaDerniereModification,arrKheiredinePachaDelai,arrKheiredinePachaStatut,arrTunisMedinaDatDernMaj,arrNordDatDernMaj,arrTunisNordDatDernMaj,arrTunisSudCapBonDernMaj,arrSudDatDernMaj,arrHediNouiraDatDernMaj,arrSahelDatDernMaj,arrSfaxEtCentreDatDernMaj,arrKheiredinePachaDatDernMaj)
{
                var responseDayInfo=responseDayInfo || [];
  
                var jourUrl=dateJourne+'T00:00:00.000';
                var urlDayInfo=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=Date_x0020_Journ_x00e9_e eq datetime'"+jourUrl+"'";
                ////////console.log("urlDayInfo= "+urlDayInfo);
                function loadDayInfo(){
                  $.ajax({
                url: urlDayInfo,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseDayInfo = responseDayInfo.concat(data.d.results);
                    if (data.d.__next) {
                        urlDayInfo = data.d.__next;
                        loadDayInfo();
                    }
                    if (!(data.d.__next)){
                      $.each(responseDayInfo, function (key, value) {
                        moment.locale('fr');
                        var idAgg=value.AgenceId;
                        var regg=value.R_x00e9_gion_x0020_de_x0020_l_x0;
                        var dRecep=value.Date_x0020_r_x00e9_ception_x0020;
                        var dateReception=moment(dRecep).format("DD-MM-YYYY");
                        var statRegio=value.Statut_x0020_R_x00e9_gional;
                        var avisDcp=value.Avis_x0020_DCP;
                        var dateJ=moment(value.Date_x0020_Journ_x00e9_e).format("DD-MM-YYYY")

                        if (regg=="DIRECTION REGIONALE TUNIS Médina") {
                          //arrTunisMedina
                          //arrTunisMedinaId
                          ////////console.log("regg="+regg);
                          if ((arrTunisMedinaDatDernMaj[arrTunisMedinaId.indexOf(idAgg)]=="À saisir")||(moment(arrTunisMedinaDatDernMaj[arrTunisMedinaId.indexOf(idAgg)]).isBefore(dateJ))) {
                            arrTunisMedinaDatDernMaj[arrTunisMedinaId.indexOf(idAgg)]=dateJ;
                            arrTunisMedinaDateR[arrTunisMedinaId.indexOf(idAgg)]= dateReception;
                            arrTunisMedinaStatutReg[arrTunisMedinaId.indexOf(idAgg)]= statRegio;
                            arrTunisMedinaAvis[arrTunisMedinaId.indexOf(idAgg)]= avisDcp;
                          }
                        }
                        if (regg=="DIRECTION REGIONALE DU NORD") {
                          // arrNordId
                          // arrNord
                          ////////console.log("regg="+regg);
                          if ((arrNordDatDernMaj[arrNordId.indexOf(idAgg)]=="À saisir")||(moment(arrNordDatDernMaj[arrNordId.indexOf(idAgg)]).isBefore(dateJ))){
                            arrNordDatDernMaj[arrNordId.indexOf(idAgg)]=dateJ;
                            arrNordDateR[arrNordId.indexOf(idAgg)]= dateReception;
                            arrNordStatutReg[arrNordId.indexOf(idAgg)]= statRegio;
                            arrNordAvis[arrNordId.indexOf(idAgg)]= avisDcp;
                          }
                        }
                        if (regg=="DIRECTION REGIONALE TUNIS NORD") {
                          // arrTunisNordId
                          // arrTunisNord
                          ////////console.log("regg="+regg);
                          if ((arrTunisNordDatDernMaj[arrTunisNordId.indexOf(idAgg)]=="À saisir")||(moment(arrTunisNordDatDernMaj[arrTunisNordId.indexOf(idAgg)]).isBefore(dateJ))){
                            arrTunisNordDatDernMaj[arrTunisNordId.indexOf(idAgg)]=dateJ;
                            arrTunisNordDateR[arrTunisNordId.indexOf(idAgg)]= dateReception;
                            arrTunisNordStatutReg[arrTunisNordId.indexOf(idAgg)]= statRegio;
                            arrTunisNordAvis[arrTunisNordId.indexOf(idAgg)]= avisDcp;
                          }
                        }
                        if (regg=="DIRECTION REGIONALE TUNIS SUD  ET CAP BON") {
                          // arrTunisSudCapBonId
                          // arrTunisSudCapBon
                          ////////console.log("regg="+regg);
                          if ((arrTunisSudCapBonDatDernMaj[arrTunisSudCapBonId.indexOf(idAgg)]=="À saisir")||(moment(arrTunisSudCapBonDatDernMaj[arrTunisSudCapBonId.indexOf(idAgg)]).isBefore(dateJ))){
                            arrTunisSudCapBonDatDernMaj[arrTunisSudCapBonId.indexOf(idAgg)]=dateJ;
                            arrTunisSudCapBonDateR[arrTunisSudCapBonId.indexOf(idAgg)]= dateReception;
                            arrTunisSudCapBonStatutReg[arrTunisSudCapBonId.indexOf(idAgg)]= statRegio;
                            arrTunisSudCapBonAvis[arrTunisSudCapBonId.indexOf(idAgg)]= avisDcp;
                          }
                        }
                        if (regg=="DIRECTION REGIONALE DU SUD") {
                          // arrSudId
                          // arrSud
                          ////////console.log("regg="+regg);
                          if ((arrSudDatDernMaj[arrSudId.indexOf(idAgg)]=="À saisir")||(moment(arrSudDatDernMaj[arrSudId.indexOf(idAgg)]).isBefore(dateJ))){
                            arrSudDatDernMaj[arrSudId.indexOf(idAgg)]=dateJ;
                            arrSudDateR[arrSudId.indexOf(idAgg)]= dateReception;
                            arrSudStatutReg[arrSudId.indexOf(idAgg)]= statRegio;
                            arrSudAvis[arrSudId.indexOf(idAgg)]= avisDcp;
                          }
                        }
                        if (regg=="CENTRE D'AFFAIRES HEDI NOUIRA") {
                          // arrHediNouiraId
                          // arrHediNouira
                          ////////console.log("regg="+regg);
                          if ((arrHediNouiraDatDernMaj[arrHediNouiraId.indexOf(idAgg)]=="À saisir")||(moment(arrHediNouiraDatDernMaj[arrHediNouiraId.indexOf(idAgg)]).isBefore(dateJ))){
                            arrHediNouiraDatDernMaj[arrHediNouiraId.indexOf(idAgg)]=dateJ;
                            arrHediNouiraDateR[arrHediNouiraId.indexOf(idAgg)]= dateReception;
                            arrHediNouiraStatutReg[arrHediNouiraId.indexOf(idAgg)]= statRegio;
                            arrHediNouiraAvis[arrHediNouiraId.indexOf(idAgg)]= avisDcp;
                          }
                        }
                        if (regg=="DIRECTION REGIONALE DU SAHEL") {
                          // arrSahelId
                          // arrSahel
                          ////////console.log("regg="+regg);
                          if ((arrSahelDatDernMaj[arrSahelId.indexOf(idAgg)]=="À saisir")||(moment(arrSahelDatDernMaj[arrSahelId.indexOf(idAgg)]).isBefore(dateJ))){
                            arrSahelDatDernMaj[arrSahelId.indexOf(idAgg)]=dateJ;
                            arrSahelDateR[arrSahelId.indexOf(idAgg)]= dateReception;
                            arrSahelStatutReg[arrSahelId.indexOf(idAgg)]= statRegio;
                            arrSahelAvis[arrSahelId.indexOf(idAgg)]= avisDcp;
                          }
                        }
                        if (regg=="DIRECTION REGIONALE SFAX ET CENTRE") {
                          
                          if ((arrSfaxEtCentreDatDernMaj[arrSfaxEtCentrelId.indexOf(idAgg)]=="À saisir")||(moment(arrSfaxEtCentreDatDernMaj[arrSfaxEtCentreId.indexOf(idAgg)]).isBefore(dateJ)))
                            arrSfaxEtCentreDatDernMaj[arrSfaxEtCentrelId.indexOf(idAgg)]=dateJ;
                            arrSfaxEtCentreDateR[arrSfaxEtCentreId.indexOf(idAgg)]= dateReception;
                            arrSfaxEtCentreStatutReg[arrSfaxEtCentreId.indexOf(idAgg)]= statRegio;
                            arrSfaxEtCentreAvis[arrSfaxEtCentreId.indexOf(idAgg)]= avisDcp;
                        }
                        if (regg=="CENTRE D'AFFAIRES RETAIL KHEIREDDINE PACHA") {
                          // arrKheiredinePachaId
                          // arrKheiredinePacha
                          ////////console.log("regg="+regg);
                          if ((arrKheiredinePachaDatDernMaj[arrKheiredinePachaId.indexOf(idAgg)]=="À saisir")||(moment(arrKheiredinePachaDatDernMaj[arrKheiredinePachaId.indexOf(idAgg)]).isBefore(dateJ))){
                            arrKheiredinePachaDatDernMaj[arrKheiredinePachaId.indexOf(idAgg)]=dateJ;
                            arrKheiredinePachaDateR[arrKheiredinePachaId.indexOf(idAgg)]= dateReception;
                            arrKheiredinePachaStatutReg[arrKheiredinePachaId.indexOf(idAgg)]= statRegio;
                            arrKheiredinePachaAvis[arrKheiredinePachaId.indexOf(idAgg)]= avisDcp;
                          }
                        }

                      }); 
                      
                      //////console.log("arrTunisNordDateR= "+arrTunisNordDateR);
                      moment.locale('fr');
                      

                      divDateJour+='</br>'+
                      '<div class="row">'+
                        "<ul>Surveillance de l'activité Contrôle permanant.</ul>"+
                      '</div>'+
                      '<div class="row" id="">';
                      //******
                      for (var k = 0; k < arrRegion1.length; k++) {

                        
                        
                        divDateJour+='<div class="row">'+
                          '<ul><span style="font-size: 14px;text-decoration: underline;margin-left: 2%; cursor: pointer; color: #cf232a;">'+nomRegion+'</span></ul>'+
                        '</div>'+
                        '<div class="row" id="">'+
                          '<table id="tabSuvCont" class="table table-striped table-bordered" >'+
                            '<thead>'+
                              '<tr>'+ 
                                '<th>Direction Régionale</th>'+        
                                '<th>Agences</th>'+ 
                                '<th>Contrôleurs</th>'+       
                                '<th>Date Dernier Contrôle</th>'+
                                '<th>Date de Jours</th>'+
                                '<th>Délai Contrôle</th>'+
                                '<th style="text-align:center;">Statut</th>'+
                              '</tr>'+
                            '</thead>'+
                            '<tbody>';
                            
                           var todayDate=moment();
                        if (arrRegion1[k]=="DIRECTION REGIONALE TUNIS Médina") {
                          

                          for (var j = 0; j < arrTunisMedinaId.length; j++) {
                            // arrTunisMedinaId
                             if (j==0) {
                              //rowspan='"+parseInt(arrTunisMedinaId.length+1)+"'
                              divDateJour+="<td style='width:20%;'rowspan='"+parseInt(arrTunisMedinaId.length+1)+"'>" + arrRegion1[k] +"</td>";
                             }
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisMedina[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisMedinaControlurs[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisMedinaDatDernMaj[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + moment().format("DD-MM-YYYY") +"</td>";
                             var delai="À saisir";
                             if (arrTunisMedinaDatDernMaj[j]!="À saisir") {
                              delai=moment(todayDate).diff(moment(arrTunisMedinaDatDernMaj[j]), 'days');
                             }
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                          }
                        }
                        if (arrRegion1[k]=="DIRECTION REGIONALE DU NORD") {
                          for (var j = 0; j < arrNordId.length; j++) {
                            // arrTunisMedinaId
                            if (j==0) {
                              //rowspan='"+parseInt(arrNordId.length+1)+"'
                              divDateJour+="<td style='width:20%;'rowspan='"+parseInt(arrNordId.length+1)+"'>" + arrRegion1[k] +"</td>";
                             }
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrNord[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrNordControlurs[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrNordDatDernMaj[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + moment().format("DD-MM-YYYY") +"</td>";
                             var delai="À saisir";
                             if (arrNordDatDernMaj[j]!="À saisir") {
                              delai=moment(todayDate).diff(moment(arrNordDatDernMaj[j]), 'days');
                             }
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             
                            
                          }
                        }
                        if (arrRegion1[k]=="DIRECTION REGIONALE TUNIS NORD") {
                          for (var j = 0; j < arrTunisNordId.length; j++) {
                                                      // arrTunisMedinaId
                              if (j==0) {
                              //rowspan='"+parseInt(arrTunisNordId.length+1)+"'
                              divDateJour+="<td style='width:20%;'rowspan='"+parseInt(arrTunisNordId.length+1)+"'>" + arrRegion1[k] +"</td>";
                             }
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisNord[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisNordControlurs[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisNordDatDernMaj[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + moment().format("DD-MM-YYYY") +"</td>";
                             var delai="À saisir";
                             if (arrTunisNordDatDernMaj[j]!="À saisir") {
                              delai=moment(todayDate).diff(moment(arrTunisNordDatDernMaj[j]), 'days');
                             }
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                              
                            }
                        }
                        if (arrRegion1[k]=="DIRECTION REGIONALE TUNIS SUD  ET CAP BON") {
                          for (var j = 0; j < arrTunisSudCapBonId.length; j++) {
                            // arrTunisMedinaId
                            if (j==0) {
                              //rowspan='"+parseInt(arrTunisSudCapBonId.length+1)+"'
                              divDateJour+="<td style='width:20%;'rowspan='"+parseInt(arrTunisSudCapBonId.length+1)+"'>" + arrRegion1[k] +"</td>";
                             }
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisSudCapBon[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisSudCapBonControlurs[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrTunisSudCapBonDatDernMaj[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + moment().format("DD-MM-YYYY") +"</td>";
                             var delai="À saisir";
                             if (arrTunisSudCapBonDatDernMaj[j]!="À saisir") {
                              delai=moment(todayDate).diff(moment(arrTunisSudCapBonDatDernMaj[j]), 'days');
                             }
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             
                            
                          }
                        }
                        if (arrRegion1[k]=="DIRECTION REGIONALE DU SUD") {
                          for (var j = 0; j < arrSudId.length; j++) {
                            // arrTunisMedinaId
                            if (j==0) {
                              //rowspan='"+parseInt(arrSudId.length+1)+"'
                              divDateJour+="<td style='width:20%;'rowspan='"+parseInt(arrSudId.length+1)+"'>" + arrRegion1[k] +"</td>";
                             }
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrSud[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSudControlurs[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSudDatDernMaj[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + moment().format("DD-MM-YYYY") +"</td>";
                             var delai="À saisir";
                             if (arrSudDatDernMaj[j]!="À saisir") {
                              delai=moment(todayDate).diff(moment(arrSudDatDernMaj[j]), 'days');
                             }
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             
                            
                          }
                        }
                        if (arrRegion1[k]=="CENTRE D'AFFAIRES HEDI NOUIRA") {
                          for (var j = 0; j < arrHediNouiraId.length; j++) {
                            // arrTunisMedinaId
                            if (j==0) {
                              //rowspan='"+parseInt(arrHediNouiraId.length+1)+"'
                              divDateJour+="<td style='width:20%;'rowspan='"+parseInt(arrHediNouiraId.length+1)+"'>" + arrRegion1[k] +"</td>";
                             }
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrHediNouira[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrHediNouiraControlurs[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrHediNouiraDatDernMaj[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + moment().format("DD-MM-YYYY") +"</td>";
                             var delai="À saisir";
                             if (arrHediNouiraDatDernMaj[j]!="À saisir") {
                              delai=moment(todayDate).diff(moment(arrHediNouiraDatDernMaj[j]), 'days');
                             }
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             
                            
                          }
                        }
                        if (arrRegion1[k]=="DIRECTION REGIONALE DU SAHEL") {
                          for (var j = 0; j < arrSahelId.length; j++) {
                            // arrTunisMedinaId
                            if (j==0) {
                              //rowspan='"+parseInt(arrSahelId.length+1)+"'
                              divDateJour+="<td style='width:20%;'rowspan='"+parseInt(arrSahelId.length+1)+"'>" + arrRegion1[k] +"</td>";
                             }
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrSahel[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSahelControlurs[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSahelDatDernMaj[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + moment().format("DD-MM-YYYY") +"</td>";
                             var delai="À saisir";
                             if (arrSahelDatDernMaj[j]!="À saisir") {
                              delai=moment(todayDate).diff(moment(arrSahelDatDernMaj[j]), 'days');
                             }
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             
                            
                          }
                        }
                        if (arrRegion1[k]=="DIRECTION REGIONALE SFAX ET CENTRE") {
                          for (var j = 0; j < arrSfaxEtCentreId.length; j++) {
                            // arrTunisMedinaId
                            if (j==0) {
                              //rowspan='"+parseInt(arrSfaxEtCentreId.length+1)+"'
                              divDateJour+="<td style='width:20%;'rowspan='"+parseInt(arrSfaxEtCentreId.length+1)+"'>" + arrRegion1[k] +"</td>";
                             }
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrSfaxEtCentre[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSfaxEtCentreControlurs[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrSfaxEtCentreDatDernMaj[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + moment().format("DD-MM-YYYY") +"</td>";
                             var delai="À saisir";
                             if (arrSfaxEtCentreDatDernMaj[j]!="À saisir") {
                              delai=moment(todayDate).diff(moment(arrSfaxEtCentreDatDernMaj[j]), 'days');
                             }
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             
                            
                          }
                        }
                        if (arrRegion1[k]=="CENTRE D'AFFAIRES RETAIL KHEIREDDINE PACHA") {
                          for (var j = 0; j < arrKheiredinePachaId.length; j++) {
                            // arrTunisMedinaId
                            if (j==0) {
                              //rowspan='"+parseInt(arrKheiredinePachaId.length+1)+"'
                              divDateJour+="<td style='width:20%;'rowspan='"+parseInt(arrKheiredinePachaId.length+1)+"'>" + arrRegion1[k] +"</td>";
                             }
                             divDateJour+="<tr class='rows'/>";
                             divDateJour+="<td style='width:20%;'>" + arrKheiredinePacha[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrKheiredinePachaControlurs[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + arrKheiredinePachaDatDernMaj[j] +"</td>";
                             divDateJour+="<td style='width:20%;'>" + moment().format("DD-MM-YYYY") +"</td>";
                             var delai="À saisir";
                             if (arrKheiredinePachaDatDernMaj[j]!="À saisir") {
                              delai=moment(todayDate).diff(moment(arrKheiredinePachaDatDernMaj[j]), 'days');
                             }
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             divDateJour+="<td style='width:20%;'>" + delai +"</td>";
                             
                            
                          }
                        }
                        divDateJour+='</tbody>'+
                          '</table>'+
                        '</div>';
                      }
                      divDateJour+='</div>';
                          //******
                          
                          

                          document.getElementById("dataDiv").innerHTML =divDateJour;

                    }
                    
                   
                }
            });
                }