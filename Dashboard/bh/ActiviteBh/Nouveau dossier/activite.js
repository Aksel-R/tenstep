<!doctype html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!-- Meta, title, CSS, favicons, etc. -->
  
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/ControleActivite/css/bootstrap.min.css" >
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/ControleActivite/css/bootstrap.css" >
  <!-- <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/ControleActivite/css/style.css" > -->
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/ControleActivite/css/achevement.css"  >
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/ControleActivite/css/w3.css" >
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/ControleActivite/css/fontawesome.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  


  <!-- Font Awesome -->
  <!-- NProgress -->
 <style type="text/css">

.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
    display: none;
}

 
  .navbar-inverse {
            background-color: #cf232a;
            border-color: #cf232a;
        }


       
        span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}
th {
    font-size: smaller;
}
text.highcharts-credits {
    display: none;
}
.panel-primary {
    border-color: #cf232a;
    box-shadow: 0px 4px 8px 0px rgb(0 0 0);
    border-radius: 6px;
}

.panel-primary>.panel-heading {
    color: #fff;
    background-color: #cf232a;
    border-color: #cf232a;
}



th {
    font-size: smaller;
}
table.dataTable thead th, table.dataTable thead td {
    padding: 0px 5px;
    border-bottom: 1px solid #111;
    text-align: center;
    border-radius: 5px;
}
th {
    background-color: #cf232a;
    color: #fff;
    text-align: center;
}
td {
    text-align: center;
}
#tabSuvCont
{
  border-radius: 5px;
}

  </style>


</head>
<body style="font-family: serif;">



 <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="border-radius: 5px; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 100%);">
    <ul class="nav navbar-right top-nav"  style="padding-left: 0px; padding-right: 0px;width: 100%;">
        <h3 id="titre" style="color: white; float: left; margin-bottom: 0px;margin-top: 0px;width: 40%;">Activité Contrôle Permanant
        </h3>
        <select class="mdb-select md-form"
                style=" width: 30%; background-color: #cf232a; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList1" onchange="remplirSel();mainFilter();">
                <option value="">Direction Régionale</option>

            </select>
            <select class="mdb-select md-form"
                style="float: right; width: 30%; background-color: #cf232a; color: azure; font-size: 20px; border-radius: 5px ;  border-color: azure;"
                id="myList2" onchange="mainFilter();" disabled>
                <option value="" >Agence</option>

            </select>
    </ul>
    

</nav>
<div class="row">
  <div class="col-lg-6">
    <div class="rounded-lg p-3" style=" background-color: #f18572;box-shadow: 0px 4px 8px 0px rgb(0 0 0);">
      <div class="row">
          <div class="col-lg-8"><h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;float: left;color: #000000;">
            <i class="fa fa-plus-circle" aria-hidden="true" fa-2x></i>  Somme Délai:</h2></div>
                                        <!-- Demo info -->
           <div class="col-lg-4"><div class="row text-center mt-2" style=" margin-top: 0px;">
              <div class="col-12">
                  <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;color: #000000;" id="sumDelai"></div>
              </div>
          </div></div><!-- END -->
      </div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="rounded-lg p-3" style=" background-color: #f18572;box-shadow: 0px 4px 8px 0px rgb(0 0 0);">
      <div class="row">
        <div class="col-lg-8"><h2 class="h5 font-weight-bold text-center mb-2" style="margin-top: 0px;float: left;color: #000000;">
           <i class="fa fa-stop-circle" aria-hidden="true" fa-2x></i>  Moyenne Délai:</h2></div>
                                        <!-- Demo info -->
           <div class="col-lg-4"><div class="row text-center mt-2" style=" margin-top: 0px;">
              <div class="col-12">
                  <div class="h3 font-weight-bold mb-0" style=" margin-top: 0px;color: #000000;" id="AvgDelai"></div>
              </div>
          </div></div><!-- END -->
      </div>
    </div>
  </div>
</div>
<div class="row" id="dataDiv">
     
    
</div>

      
 

</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/ControleActivite/javascript/jquery-3.5.1.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/ControleActivite/javascript/highcharts.js"></script>


<script src="/sites/bhcom/_catalogs/masterpage/ControleActivite/javascript/conToKM.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/ControleActivite/javascript/filter - Copie.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/ControleActivite/javascript/Mysel1 - Copie.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/ControleActivite/javascript/accessibility.js"></script>

<script type="/sites/bhcom/_catalogs/masterpage/ControleActivite/javascript/custom.min.js"></script>

<script type="text/javascript"> 
  // 
  function conToMill(num) {
            if (num == 0) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
            }
            if (num < 1000000 && num > 999) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(2)) + ' K' : Math.sign(num) * Math.abs(num)
            }
            if (num < -999 && num > -1000000) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(2)) + ' K' : Math.sign(num) * Math.abs(num)
            }
            if (num < 0 && num > -1000) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
            }
            if (num > 0 && num < 1000) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
            }
            if (num > 999999) {
                return Math.abs(num) > 999999 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(2)) + ' M' : Math.sign(num) * Math.abs(num)
            }
            if (num < -999999) {
                return Math.abs(num) > 999999 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(2)) + ' M' : Math.sign(num) * Math.abs(num)
            }



        }
    var responseRegion=responseRegion||[];
    var urlRegion=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Direction_x0020_R_x00e9_gionale";
    ////////////////////console.log.log('urlRegion= '+urlRegion);
    function LoadRegion() {
              var nbre = 0;


              $.ajax({
                  url: urlRegion,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseRegion = responseRegion.concat(data.d.results);
                      if (data.d.__next) {
                          urlRegion = data.d.__next;
                          LoadRegion();
                      }
                     
                      $.each(responseRegion, function (key, value) {
                        var region=value.Direction_x0020_R_x00e9_gionale;
                        $('#myList1').append($('<option>',
                           {
                              text : region,
                              value:region
                            })); 
                            var opt = {};
                              $("#myList1 > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                               });
                      });
                    
                      
                      
                  }
              });
          }
          LoadRegion();

              var responseAgence=responseAgence||[];
    var urlAgence=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Title,ID";
    ////////////////////console.log.log('urlAgence= '+urlAgence);
    function LoadAgence() {
              var nbre = 0;


              $.ajax({
                  url: urlAgence,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseAgence = responseAgence.concat(data.d.results);
                      if (data.d.__next) {
                          urlAgence = data.d.__next;
                          LoadAgence();
                      }
                     
                      $.each(responseAgence, function (key, value) {
                        var agence=value.Title;
                        var idAg=value.ID;
                        $('#myList2').append($('<option>',
                           {
                              text : agence,
                              value:idAg
                            })); 
                            var opt = {};
                              $("#myList2 > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                               });
                      });
                    
                      
                      
                  }
              });
          }
          LoadAgence();






var urlPage="?$orderby=Date_x0020_Journ_x00e9_e desc&$top=1";
var url1Page="";
// var mois = document.getElementById("myList2").value;
// console.log("mois= "+mois);
// moment.locale('fr');
//       var moisproch=moment(mois).add(1,"months");
//       var dstartFilter=moment(mois).format('YYYY-MM-DD');
//       var urlDateDebutSel=dstartFilter+"T00:00:00.000";
//       var dfinishFilter=moment(moisproch).format('YYYY-MM-DD');
//       var urlDateFinSel=dfinishFilter+"T00:00:00.000";
//       //Date_x0020_Journ_x00e9_e eq datetime'"+jourUrl+"'";
//       urlPage="?$filter=Date_x0020_Journ_x00e9_e ge datetime'"+urlDateDebutSel+"' and Date_x0020_Journ_x00e9_e lt datetime'"+urlDateFinSel+"'";
function loadPage(urlPage,url1Page) {
    var responseControleur1=responseControleur1||[];
    var urlControleur1=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items"+url1Page;
    console.log('urlControleur1= '+urlControleur1);
    function LoadControleur1() {
              var nbre = 0;


              $.ajax({
                  url: urlControleur1,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseControleur1 = responseControleur1.concat(data.d.results);
                      if (data.d.__next) {
                          urlControleur1 = data.d.__next;
                          LoadControleur1();
                      }
                      if (!data.d.__next) {
                        var arrControlleurId=[];
                        var arrControlleurNom=[];
                        var arrJourControl=[];
                        var arrAvgControlJr=[];
                        var nbJournee=0;
                        $.each(responseControleur1, function (key, value) {
                          var listControleur=[];
                          //////console.log("va="+value.Contr_x00f4_leur_x0020_R_x00e9_gId.results);
                          listControleur=value.Contr_x00f4_leur_x0020_R_x00e9_gId.results;
                           for (var i = 0; i < listControleur.length; i++) {
                            //////console.log(listControleur[i]);
                              if (arrControlleurId.indexOf(listControleur[i])==-1) {
                                arrControlleurId.push(listControleur[i]);
                                arrControlleurNom.push("");
                                arrJourControl.push(0);
                                arrAvgControlJr.push(0);
                              }
                            }
                        });
                       
                        ////console.log("arrControlleurId= "+arrControlleurId);
                        for (var i = 0; i < arrControlleurId.length; i++) {
                          remplirArrControleur1(arrControlleurId[i],arrControlleurId,arrControlleurNom,i,nbJournee,arrJourControl,arrAvgControlJr);
                        }
                      }
                      
                    
                      
                      
                  }
              });
          }
          LoadControleur1();

          function remplirArrControleur1(userid,arrControlleurId,arrControlleurNom,count,nbJournee,arrJourControl,arrAvgControlJr) {
            var urlCurrUser=_spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";
            var responseCurrUser=responseCurrUser||[];
            function putCurrUser() {
              $.ajax({
                  url: urlCurrUser,
                  method: "GET",
                  dataType: "json",
                  headers: { Accept: "application/json;odata=verbose" },
                  success: function (data) {
                      responseCurrUser = responseCurrUser.concat(data.d.results);
                      if (data.d.__next) {
                          urlCurrUser = data.d.__next;
                          putCurrUser();
                      }
                      //////console.log("Title= "+data.d.Title)
                          var nomU=data.d.Title;
                          arrControlleurNom[arrControlleurId.indexOf(userid)]=nomU;
                      // if (!data.d.__next) {
                      //   $.each(responseCurrUser, function (key, value) {

                      //   });
                       
                      // }
                      if (count==arrControlleurNom.length-1) {

                        
                        remplirAg(arrControlleurNom,arrControlleurId);
                        ////console.log(arrControlleurNom);
                        

                      }
                     
                      
                      
                  }
              });
            }
            putCurrUser();
          }
          function remplirAg(arrControlleurNom,arrControlleurId) {
            console.log('w')
            var hay=0;


            var responseAgenceDirection= responseAgenceDirection || [];
            var urlAgenceDirection=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items"+url1Page;
            console.log("url= "+urlAgenceDirection);
            function LoadAgencesDir() {
                    

                    $.ajax({
                        url: urlAgenceDirection,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAgenceDirection = responseAgenceDirection.concat(data.d.results);
                            if (data.d.__next) {
                                urlAgenceDirection = data.d.__next;
                                //LoadAgencesDir();
                                hay++;
                                console.log('hay= '+hay);
                                
                            }
                            if (!(data.d.__next)) {
                                var arrRegionalDir=["DIRECTION REGIONALE TUNIS Médina","DIRECTION REGIONALE DU NORD","DIRECTION REGIONALE TUNIS NORD","DIRECTION REGIONALE TUNIS SUD  ET CAP BON","DIRECTION REGIONALE DU SUD","CENTRE D'AFFAIRES HEDI NOUIRA","DIRECTION REGIONALE DU SAHEL","DIRECTION REGIONALE SFAX ET CENTRE","CENTRE D'AFFAIRES RETAIL KHEIREDDINE PACHA"]
                                var arrRegion1=[];
                                
                                  var arrTunisMedina=[];
                                  var arrTunisMedinaDatDernMaj=[];
                                  var arrTunisMedinaId=[];
                                  var arrTunisMedinaDateR=[];
                                  var arrTunisMedinaStatutReg=[];
                                  var arrTunisMedinaAvis=[];
                                  var arrTunisMedinaControlurs=[];
                                  var arrTunisMedinaDerniereModification=[];
                                  var arrTunisMedinaDelai=[];
                                  var arrTunisMedinaStatut=[];

                                  var arrNord=[];
                                  var arrNordDatDernMaj=[];
                                  var arrNordId=[];
                                  var arrNordDateR=[];
                                  var arrNordStatutReg=[];
                                  var arrNordAvis=[];
                                  var arrNordControlurs=[];
                                  var arrNordDerniereModification=[];
                                  var arrNordDelai=[];
                                  var arrNordStatut=[];

                                  var arrTunisNord=[];
                                  var arrTunisNordDatDernMaj=[];
                                  var arrTunisNordId=[];
                                  var arrTunisNordDateR=[];
                                  var arrTunisNordStatutReg=[];
                                  var arrTunisNordAvis=[];
                                  var arrTunisNordControlurs=[];
                                  var arrTunisNordDerniereModification=[];
                                  var arrTunisNordDelai=[];
                                  var arrTunisNordStatut=[];

                                  var arrTunisSudCapBon=[];
                                  var arrTunisSudCapBonDernMaj=[];
                                  var arrTunisSudCapBonId=[];
                                  var arrTunisSudCapBonDateR=[];
                                  var arrTunisSudCapBonStatutReg=[];
                                  var arrTunisSudCapBonAvis=[];
                                  var arrTunisSudCapBonControlurs=[];
                                  var arrTunisSudCapBonDerniereModification=[];
                                  var arrTunisSudCapBonDelai=[];
                                  var arrTunisSudCapBonStatut=[];

                                  var arrSud=[];
                                  var arrSudDatDernMaj=[];
                                  var arrSudId=[];
                                  var arrSudDateR=[];
                                  var arrSudStatutReg=[];
                                  var arrSudAvis=[];
                                  var arrSudControlurs=[];
                                  var arrSudDerniereModification=[];
                                  var arrSudDelai=[];
                                  var arrSudStatut=[];

                                  var arrHediNouira=[];
                                  var arrHediNouiraDatDernMaj=[];
                                  var arrHediNouiraId=[];
                                  var arrHediNouiraDateR=[];
                                  var arrHediNouiraStatutReg=[];
                                  var arrHediNouiraAvis=[];
                                  var arrHediNouiraControlurs=[];
                                  var arrHediNouiraDerniereModification=[];
                                  var arrHediNouiraDelai=[];
                                  var arrHediNouiraStatut=[];

                                  var arrSahel=[];
                                  var arrSahelDatDernMaj=[];
                                  var arrSahelId=[];
                                  var arrSahelDateR=[];
                                  var arrSahelStatutReg=[];
                                  var arrSahelAvis=[];
                                  var arrSahelControlurs=[];
                                  var arrSahelDerniereModification=[];
                                  var arrSahelDelai=[];
                                  var arrSahelStatut=[];

                                  var arrSfaxEtCentre=[];
                                  var arrSfaxEtCentreDatDernMaj=[];
                                  var arrSfaxEtCentreId=[];
                                  var arrSfaxEtCentreDateR=[];
                                  var arrSfaxEtCentreStatutReg=[];
                                  var arrSfaxEtCentreAvis=[];
                                  var arrSfaxEtCentreControlurs=[];
                                  var arrSfaxEtCentreDerniereModification=[];
                                  var arrSfaxEtCentreDelai=[];
                                  var arrSfaxEtCentreStatut=[];

                                  var arrKheiredinePacha=[];
                                  var arrKheiredinePachaDatDernMaj=[];
                                  var arrKheiredinePachaId=[];
                                  var arrKheiredinePachaDateR=[];
                                  var arrKheiredinePachaStatutReg=[];
                                  var arrKheiredinePachaAvis=[];
                                  var arrKheiredinePachaControlurs=[];
                                  var arrKheiredinePachaDerniereModification=[];
                                  var arrKheiredinePachaDelai=[];
                                  var arrKheiredinePachaStatut=[];
                                $.each(responseAgenceDirection, function (key, value) {
                                  
                                    var listControleur1=[];
                                    listControleur1=value.Contr_x00f4_leur_x0020_R_x00e9_gId.results;
                                      var listControleur2=[];
                                    for (var i = 0; i < listControleur1.length; i++) {
                                      listControleur2[i]=arrControlleurNom[arrControlleurId.indexOf(listControleur1[i])];
                                    }
                                    var agence=value.Title;
                                    var region=value.Direction_x0020_R_x00e9_gionale;
                                    var agId=value.Id;
                                    ////////console.log("agId= "+agId);
                                    if (region=="DIRECTION REGIONALE TUNIS Médina") {
                                      arrTunisMedina.push(agence);
                                      arrTunisMedinaId.push(agId);
                                      arrTunisMedinaDatDernMaj.push("À saisir");
                                      arrTunisMedinaDateR.push("À saisir");
                                      arrTunisMedinaStatutReg.push("À saisir");
                                      arrTunisMedinaAvis.push("À saisir");
                                      arrTunisMedinaControlurs.push(listControleur2.join(";").toString());
                                      arrTunisMedinaDerniereModification.push("À saisir");
                                      arrTunisMedinaDelai.push("À saisir");
                                      arrTunisMedinaStatut.push("À saisir");
                                    }
                                    if (region=="DIRECTION REGIONALE DU NORD") {
                                      console.log("region" + region);
                                      arrNord.push(agence);
                                      arrNordId.push(agId);
                                      arrNordDatDernMaj.push("À saisir");
                                      arrNordDateR.push("À saisir");
                                      arrNordStatutReg.push("À saisir");
                                      arrNordAvis.push("À saisir");
                                      arrNordControlurs.push(listControleur2.join(";").toString());
                                      arrNordDerniereModification.push("À saisir");
                                      arrNordDelai.push("À saisir");
                                      arrNordStatut.push("À saisir");
                                    }
                                    if (region=="DIRECTION REGIONALE TUNIS NORD") {
                                      arrTunisNord.push(agence);
                                      arrTunisNordId.push(agId);
                                      arrTunisNordDatDernMaj.push("À saisir");
                                      arrTunisNordDateR.push("À saisir");
                                      arrTunisNordStatutReg.push("À saisir");
                                      arrTunisNordAvis.push("À saisir");
                                      arrTunisNordControlurs.push(listControleur2.join(";").toString());
                                      arrTunisNordDerniereModification.push("À saisir");
                                      arrTunisNordDelai.push("À saisir");
                                      arrTunisNordStatut.push("À saisir");
                                    }
                                    if (region=="DIRECTION REGIONALE TUNIS SUD  ET CAP BON") {
                                      arrTunisSudCapBon.push(agence);
                                      arrTunisSudCapBonId.push(agId);
                                      arrTunisSudCapBonDernMaj.push("À saisir");
                                      arrTunisSudCapBonDateR.push("À saisir");
                                      arrTunisSudCapBonStatutReg.push("À saisir");
                                      arrTunisSudCapBonAvis.push("À saisir");
                                      arrTunisSudCapBonControlurs.push(listControleur2.join(";").toString());
                                      arrTunisSudCapBonDerniereModification.push("À saisir");
                                      arrTunisSudCapBonDelai.push("À saisir");
                                      arrTunisSudCapBonStatut.push("À saisir");
                                    }
                                    if (region=="DIRECTION REGIONALE DU SUD") {
                                      arrSud.push(agence);
                                      arrSudId.push(agId);
                                      arrSudDatDernMaj.push("À saisir");
                                      arrSudDateR.push("À saisir");
                                      arrSudStatutReg.push("À saisir");
                                      arrSudAvis.push("À saisir");
                                      arrSudControlurs.push(listControleur2.join(";").toString());
                                      arrSudDerniereModification.push("À saisir");
                                      arrSudDelai.push("À saisir");
                                      arrSudStatut.push("À saisir");
                                    }
                                    if (region=="CENTRE D'AFFAIRES HEDI NOUIRA") {
                                      arrHediNouira.push(agence);
                                      arrHediNouiraId.push(agId);
                                      arrHediNouiraDatDernMaj.push("À saisir");
                                      arrHediNouiraDateR.push("À saisir");
                                      arrHediNouiraStatutReg.push("À saisir");
                                      arrHediNouiraAvis.push("À saisir");
                                      arrHediNouiraControlurs.push(listControleur2.join(";").toString());
                                      arrHediNouiraDerniereModification.push("À saisir");
                                      arrHediNouiraDelai.push("À saisir");
                                      arrHediNouiraStatut.push("À saisir");
                                    }
                                    if (region=="DIRECTION REGIONALE DU SAHEL") {
                                      arrSahel.push(agence);
                                      arrSahelId.push(agId);
                                      arrSahelDatDernMaj.push("À saisir");
                                      arrSahelDateR.push("À saisir");
                                      arrSahelStatutReg.push("À saisir");
                                      arrSahelAvis.push("À saisir");
                                      arrSahelControlurs.push(listControleur2.join(";").toString());
                                      arrSahelDerniereModification.push("À saisir");
                                      arrSahelDelai.push("À saisir");
                                      arrSahelStatut.push("À saisir");
                                    }
                                    if (region=="DIRECTION REGIONALE SFAX ET CENTRE") {
                                      arrSfaxEtCentre.push(agence);
                                      arrSfaxEtCentreId.push(agId);
                                      arrSfaxEtCentreDatDernMaj.push("À saisir");
                                      arrSfaxEtCentreDateR.push("À saisir");
                                      arrSfaxEtCentreStatutReg.push("À saisir");
                                      arrSfaxEtCentreAvis.push("À saisir");
                                      arrSfaxEtCentreControlurs.push(listControleur2.join(";").toString());
                                      arrSfaxEtCentreDerniereModification.push("À saisir");
                                      arrSfaxEtCentreDelai.push("À saisir");
                                      arrSfaxEtCentreStatut.push("À saisir");
                                    }
                                    if (region=="CENTRE D'AFFAIRES RETAIL KHEIREDDINE PACHA") {
                                      arrKheiredinePacha.push(agence);
                                      arrKheiredinePachaId.push(agId);
                                      arrKheiredinePachaDatDernMaj.push("À saisir");
                                      arrKheiredinePachaDateR.push("À saisir");
                                      arrKheiredinePachaStatutReg.push("À saisir");
                                      arrKheiredinePachaAvis.push("À saisir");
                                      arrKheiredinePachaControlurs.push(listControleur2.join(";").toString());
                                      arrKheiredinePachaDerniereModification.push("À saisir");
                                      arrKheiredinePachaDelai.push("À saisir");
                                      arrKheiredinePachaStatut.push("À saisir");
                                    }

                                    if (arrRegion1.indexOf(region)<0) {
                                      arrRegion1.push(region);                                  
                                    }

                                  
                                  
                                });
                                var agIID="";
                                console.log("arrNordControlurs= "+arrNordControlurs)
                               var dirRegSelOpt = document.getElementById("myList1").value;
                               var agenceSelOpt = document.getElementById("myList2").value;
                               if (((dirRegSelOpt=="") && (agenceSelOpt=="")) ||(dirRegSelOpt=="DIRECTION REGIONALE TUNIS Médina")) {
                                for (var i = 0; i < arrTunisMedinaId.length; i++) {
                                  agIID=arrTunisMedinaId[i];
                                  loadTabels(agIID,arrRegion1,arrTunisMedina,arrTunisMedinaId,arrTunisMedinaDateR,arrTunisMedinaStatutReg,arrTunisMedinaAvis,arrTunisMedinaControlurs,arrTunisMedinaDerniereModification,arrTunisMedinaDelai,arrTunisMedinaStatut,arrNord,arrNordId,arrNordDateR,arrNordStatutReg,arrNordAvis,arrNordControlurs,arrNordDerniereModification,arrNordDelai,arrNordStatut,arrTunisNord,arrTunisNordId,arrTunisNordDateR,arrTunisNordStatutReg,arrTunisNordAvis,arrTunisNordControlurs,arrTunisNordDerniereModification,arrTunisNordDelai,arrTunisNordStatut,arrTunisSudCapBon,arrTunisSudCapBonId,arrTunisSudCapBonDateR,arrTunisSudCapBonStatutReg,arrTunisSudCapBonAvis,arrTunisSudCapBonControlurs,arrTunisSudCapBonDerniereModification,arrTunisSudCapBonDelai,arrTunisSudCapBonStatut,arrSud,arrSudId,arrSudDateR,arrSudStatutReg,arrSudAvis,arrSudControlurs,arrSudDerniereModification,arrSudDelai,arrSudStatut,arrHediNouira,arrHediNouiraId,arrHediNouiraDateR,arrHediNouiraStatutReg,arrHediNouiraAvis,arrHediNouiraControlurs,arrHediNouiraDerniereModification,arrHediNouiraDelai,arrHediNouiraStatut,arrSahel,arrSahelId,arrSahelDateR,arrSahelStatutReg,arrSahelAvis,arrSahelControlurs,arrSahelDerniereModification,arrSahelDelai,arrSahelStatut,arrSfaxEtCentre,arrSfaxEtCentreId,arrSfaxEtCentreDateR,arrSfaxEtCentreStatutReg,arrSfaxEtCentreAvis,arrSfaxEtCentreControlurs,arrSfaxEtCentreDerniereModification,arrSfaxEtCentreDelai,arrSfaxEtCentreStatut,arrKheiredinePacha,arrKheiredinePachaId,arrKheiredinePachaDateR,arrKheiredinePachaStatutReg,arrKheiredinePachaAvis,arrKheiredinePachaControlurs,arrKheiredinePachaDerniereModification,arrKheiredinePachaDelai,arrKheiredinePachaStatut,arrTunisMedinaDatDernMaj,arrNordDatDernMaj,arrTunisNordDatDernMaj,arrTunisSudCapBonDernMaj,arrSudDatDernMaj,arrHediNouiraDatDernMaj,arrSahelDatDernMaj,arrSfaxEtCentreDatDernMaj,arrKheiredinePachaDatDernMaj);
                                }
                               }
                               if (((dirRegSelOpt=="") && (agenceSelOpt=="")) ||(dirRegSelOpt=="DIRECTION REGIONALE DU NORD")) {
                                for (var i = 0; i < arrNordId.length; i++) {
                                  agIID=arrNordId[i];
                                  console.log("agence nord first = " + agIID);
                                  loadTabels(agIID,arrRegion1,arrTunisMedina,arrTunisMedinaId,arrTunisMedinaDateR,arrTunisMedinaStatutReg,arrTunisMedinaAvis,arrTunisMedinaControlurs,arrTunisMedinaDerniereModification,arrTunisMedinaDelai,arrTunisMedinaStatut,arrNord,arrNordId,arrNordDateR,arrNordStatutReg,arrNordAvis,arrNordControlurs,arrNordDerniereModification,arrNordDelai,arrNordStatut,arrTunisNord,arrTunisNordId,arrTunisNordDateR,arrTunisNordStatutReg,arrTunisNordAvis,arrTunisNordControlurs,arrTunisNordDerniereModification,arrTunisNordDelai,arrTunisNordStatut,arrTunisSudCapBon,arrTunisSudCapBonId,arrTunisSudCapBonDateR,arrTunisSudCapBonStatutReg,arrTunisSudCapBonAvis,arrTunisSudCapBonControlurs,arrTunisSudCapBonDerniereModification,arrTunisSudCapBonDelai,arrTunisSudCapBonStatut,arrSud,arrSudId,arrSudDateR,arrSudStatutReg,arrSudAvis,arrSudControlurs,arrSudDerniereModification,arrSudDelai,arrSudStatut,arrHediNouira,arrHediNouiraId,arrHediNouiraDateR,arrHediNouiraStatutReg,arrHediNouiraAvis,arrHediNouiraControlurs,arrHediNouiraDerniereModification,arrHediNouiraDelai,arrHediNouiraStatut,arrSahel,arrSahelId,arrSahelDateR,arrSahelStatutReg,arrSahelAvis,arrSahelControlurs,arrSahelDerniereModification,arrSahelDelai,arrSahelStatut,arrSfaxEtCentre,arrSfaxEtCentreId,arrSfaxEtCentreDateR,arrSfaxEtCentreStatutReg,arrSfaxEtCentreAvis,arrSfaxEtCentreControlurs,arrSfaxEtCentreDerniereModification,arrSfaxEtCentreDelai,arrSfaxEtCentreStatut,arrKheiredinePacha,arrKheiredinePachaId,arrKheiredinePachaDateR,arrKheiredinePachaStatutReg,arrKheiredinePachaAvis,arrKheiredinePachaControlurs,arrKheiredinePachaDerniereModification,arrKheiredinePachaDelai,arrKheiredinePachaStatut,arrTunisMedinaDatDernMaj,arrNordDatDernMaj,arrTunisNordDatDernMaj,arrTunisSudCapBonDernMaj,arrSudDatDernMaj,arrHediNouiraDatDernMaj,arrSahelDatDernMaj,arrSfaxEtCentreDatDernMaj,arrKheiredinePachaDatDernMaj);
                                }

                               }
                               if (((dirRegSelOpt=="") && (agenceSelOpt=="")) ||(dirRegSelOpt=="DIRECTION REGIONALE TUNIS NORD")) {
                                for (var i = 0; i < arrTunisNordId.length; i++) {
                                  agIID=arrTunisNordId[i];
                                  loadTabels(agIID,arrRegion1,arrTunisMedina,arrTunisMedinaId,arrTunisMedinaDateR,arrTunisMedinaStatutReg,arrTunisMedinaAvis,arrTunisMedinaControlurs,arrTunisMedinaDerniereModification,arrTunisMedinaDelai,arrTunisMedinaStatut,arrNord,arrNordId,arrNordDateR,arrNordStatutReg,arrNordAvis,arrNordControlurs,arrNordDerniereModification,arrNordDelai,arrNordStatut,arrTunisNord,arrTunisNordId,arrTunisNordDateR,arrTunisNordStatutReg,arrTunisNordAvis,arrTunisNordControlurs,arrTunisNordDerniereModification,arrTunisNordDelai,arrTunisNordStatut,arrTunisSudCapBon,arrTunisSudCapBonId,arrTunisSudCapBonDateR,arrTunisSudCapBonStatutReg,arrTunisSudCapBonAvis,arrTunisSudCapBonControlurs,arrTunisSudCapBonDerniereModification,arrTunisSudCapBonDelai,arrTunisSudCapBonStatut,arrSud,arrSudId,arrSudDateR,arrSudStatutReg,arrSudAvis,arrSudControlurs,arrSudDerniereModification,arrSudDelai,arrSudStatut,arrHediNouira,arrHediNouiraId,arrHediNouiraDateR,arrHediNouiraStatutReg,arrHediNouiraAvis,arrHediNouiraControlurs,arrHediNouiraDerniereModification,arrHediNouiraDelai,arrHediNouiraStatut,arrSahel,arrSahelId,arrSahelDateR,arrSahelStatutReg,arrSahelAvis,arrSahelControlurs,arrSahelDerniereModification,arrSahelDelai,arrSahelStatut,arrSfaxEtCentre,arrSfaxEtCentreId,arrSfaxEtCentreDateR,arrSfaxEtCentreStatutReg,arrSfaxEtCentreAvis,arrSfaxEtCentreControlurs,arrSfaxEtCentreDerniereModification,arrSfaxEtCentreDelai,arrSfaxEtCentreStatut,arrKheiredinePacha,arrKheiredinePachaId,arrKheiredinePachaDateR,arrKheiredinePachaStatutReg,arrKheiredinePachaAvis,arrKheiredinePachaControlurs,arrKheiredinePachaDerniereModification,arrKheiredinePachaDelai,arrKheiredinePachaStatut,arrTunisMedinaDatDernMaj,arrNordDatDernMaj,arrTunisNordDatDernMaj,arrTunisSudCapBonDernMaj,arrSudDatDernMaj,arrHediNouiraDatDernMaj,arrSahelDatDernMaj,arrSfaxEtCentreDatDernMaj,arrKheiredinePachaDatDernMaj);
                                }
                               }
                               if (((dirRegSelOpt=="") && (agenceSelOpt=="")) ||(dirRegSelOpt=="DIRECTION REGIONALE TUNIS SUD  ET CAP BON")) {
                                for (var i = 0; i < arrTunisSudCapBonId.length; i++) {
                                  agIID=arrTunisSudCapBonId[i];
                                  loadTabels(agIID,arrRegion1,arrTunisMedina,arrTunisMedinaId,arrTunisMedinaDateR,arrTunisMedinaStatutReg,arrTunisMedinaAvis,arrTunisMedinaControlurs,arrTunisMedinaDerniereModification,arrTunisMedinaDelai,arrTunisMedinaStatut,arrNord,arrNordId,arrNordDateR,arrNordStatutReg,arrNordAvis,arrNordControlurs,arrNordDerniereModification,arrNordDelai,arrNordStatut,arrTunisNord,arrTunisNordId,arrTunisNordDateR,arrTunisNordStatutReg,arrTunisNordAvis,arrTunisNordControlurs,arrTunisNordDerniereModification,arrTunisNordDelai,arrTunisNordStatut,arrTunisSudCapBon,arrTunisSudCapBonId,arrTunisSudCapBonDateR,arrTunisSudCapBonStatutReg,arrTunisSudCapBonAvis,arrTunisSudCapBonControlurs,arrTunisSudCapBonDerniereModification,arrTunisSudCapBonDelai,arrTunisSudCapBonStatut,arrSud,arrSudId,arrSudDateR,arrSudStatutReg,arrSudAvis,arrSudControlurs,arrSudDerniereModification,arrSudDelai,arrSudStatut,arrHediNouira,arrHediNouiraId,arrHediNouiraDateR,arrHediNouiraStatutReg,arrHediNouiraAvis,arrHediNouiraControlurs,arrHediNouiraDerniereModification,arrHediNouiraDelai,arrHediNouiraStatut,arrSahel,arrSahelId,arrSahelDateR,arrSahelStatutReg,arrSahelAvis,arrSahelControlurs,arrSahelDerniereModification,arrSahelDelai,arrSahelStatut,arrSfaxEtCentre,arrSfaxEtCentreId,arrSfaxEtCentreDateR,arrSfaxEtCentreStatutReg,arrSfaxEtCentreAvis,arrSfaxEtCentreControlurs,arrSfaxEtCentreDerniereModification,arrSfaxEtCentreDelai,arrSfaxEtCentreStatut,arrKheiredinePacha,arrKheiredinePachaId,arrKheiredinePachaDateR,arrKheiredinePachaStatutReg,arrKheiredinePachaAvis,arrKheiredinePachaControlurs,arrKheiredinePachaDerniereModification,arrKheiredinePachaDelai,arrKheiredinePachaStatut,arrTunisMedinaDatDernMaj,arrNordDatDernMaj,arrTunisNordDatDernMaj,arrTunisSudCapBonDernMaj,arrSudDatDernMaj,arrHediNouiraDatDernMaj,arrSahelDatDernMaj,arrSfaxEtCentreDatDernMaj,arrKheiredinePachaDatDernMaj);
                                }
                               }
                               if (((dirRegSelOpt=="") && (agenceSelOpt=="")) ||(dirRegSelOpt=="DIRECTION REGIONALE DU SUD")) {
                                for (var i = 0; i < arrSudId.length; i++) {
                                  agIID=arrSudId[i];
                                  loadTabels(agIID,arrRegion1,arrTunisMedina,arrTunisMedinaId,arrTunisMedinaDateR,arrTunisMedinaStatutReg,arrTunisMedinaAvis,arrTunisMedinaControlurs,arrTunisMedinaDerniereModification,arrTunisMedinaDelai,arrTunisMedinaStatut,arrNord,arrNordId,arrNordDateR,arrNordStatutReg,arrNordAvis,arrNordControlurs,arrNordDerniereModification,arrNordDelai,arrNordStatut,arrTunisNord,arrTunisNordId,arrTunisNordDateR,arrTunisNordStatutReg,arrTunisNordAvis,arrTunisNordControlurs,arrTunisNordDerniereModification,arrTunisNordDelai,arrTunisNordStatut,arrTunisSudCapBon,arrTunisSudCapBonId,arrTunisSudCapBonDateR,arrTunisSudCapBonStatutReg,arrTunisSudCapBonAvis,arrTunisSudCapBonControlurs,arrTunisSudCapBonDerniereModification,arrTunisSudCapBonDelai,arrTunisSudCapBonStatut,arrSud,arrSudId,arrSudDateR,arrSudStatutReg,arrSudAvis,arrSudControlurs,arrSudDerniereModification,arrSudDelai,arrSudStatut,arrHediNouira,arrHediNouiraId,arrHediNouiraDateR,arrHediNouiraStatutReg,arrHediNouiraAvis,arrHediNouiraControlurs,arrHediNouiraDerniereModification,arrHediNouiraDelai,arrHediNouiraStatut,arrSahel,arrSahelId,arrSahelDateR,arrSahelStatutReg,arrSahelAvis,arrSahelControlurs,arrSahelDerniereModification,arrSahelDelai,arrSahelStatut,arrSfaxEtCentre,arrSfaxEtCentreId,arrSfaxEtCentreDateR,arrSfaxEtCentreStatutReg,arrSfaxEtCentreAvis,arrSfaxEtCentreControlurs,arrSfaxEtCentreDerniereModification,arrSfaxEtCentreDelai,arrSfaxEtCentreStatut,arrKheiredinePacha,arrKheiredinePachaId,arrKheiredinePachaDateR,arrKheiredinePachaStatutReg,arrKheiredinePachaAvis,arrKheiredinePachaControlurs,arrKheiredinePachaDerniereModification,arrKheiredinePachaDelai,arrKheiredinePachaStatut,arrTunisMedinaDatDernMaj,arrNordDatDernMaj,arrTunisNordDatDernMaj,arrTunisSudCapBonDernMaj,arrSudDatDernMaj,arrHediNouiraDatDernMaj,arrSahelDatDernMaj,arrSfaxEtCentreDatDernMaj,arrKheiredinePachaDatDernMaj);
                                }
                               }
                               if (((dirRegSelOpt=="") && (agenceSelOpt=="")) ||(dirRegSelOpt=="CENTRE D'AFFAIRES HEDI NOUIRA")) {
                                for (var i = 0; i < arrHediNouiraId.length; i++) {
                                  agIID=arrHediNouiraId[i];
                                  loadTabels(agIID,arrRegion1,arrTunisMedina,arrTunisMedinaId,arrTunisMedinaDateR,arrTunisMedinaStatutReg,arrTunisMedinaAvis,arrTunisMedinaControlurs,arrTunisMedinaDerniereModification,arrTunisMedinaDelai,arrTunisMedinaStatut,arrNord,arrNordId,arrNordDateR,arrNordStatutReg,arrNordAvis,arrNordControlurs,arrNordDerniereModification,arrNordDelai,arrNordStatut,arrTunisNord,arrTunisNordId,arrTunisNordDateR,arrTunisNordStatutReg,arrTunisNordAvis,arrTunisNordControlurs,arrTunisNordDerniereModification,arrTunisNordDelai,arrTunisNordStatut,arrTunisSudCapBon,arrTunisSudCapBonId,arrTunisSudCapBonDateR,arrTunisSudCapBonStatutReg,arrTunisSudCapBonAvis,arrTunisSudCapBonControlurs,arrTunisSudCapBonDerniereModification,arrTunisSudCapBonDelai,arrTunisSudCapBonStatut,arrSud,arrSudId,arrSudDateR,arrSudStatutReg,arrSudAvis,arrSudControlurs,arrSudDerniereModification,arrSudDelai,arrSudStatut,arrHediNouira,arrHediNouiraId,arrHediNouiraDateR,arrHediNouiraStatutReg,arrHediNouiraAvis,arrHediNouiraControlurs,arrHediNouiraDerniereModification,arrHediNouiraDelai,arrHediNouiraStatut,arrSahel,arrSahelId,arrSahelDateR,arrSahelStatutReg,arrSahelAvis,arrSahelControlurs,arrSahelDerniereModification,arrSahelDelai,arrSahelStatut,arrSfaxEtCentre,arrSfaxEtCentreId,arrSfaxEtCentreDateR,arrSfaxEtCentreStatutReg,arrSfaxEtCentreAvis,arrSfaxEtCentreControlurs,arrSfaxEtCentreDerniereModification,arrSfaxEtCentreDelai,arrSfaxEtCentreStatut,arrKheiredinePacha,arrKheiredinePachaId,arrKheiredinePachaDateR,arrKheiredinePachaStatutReg,arrKheiredinePachaAvis,arrKheiredinePachaControlurs,arrKheiredinePachaDerniereModification,arrKheiredinePachaDelai,arrKheiredinePachaStatut,arrTunisMedinaDatDernMaj,arrNordDatDernMaj,arrTunisNordDatDernMaj,arrTunisSudCapBonDernMaj,arrSudDatDernMaj,arrHediNouiraDatDernMaj,arrSahelDatDernMaj,arrSfaxEtCentreDatDernMaj,arrKheiredinePachaDatDernMaj);
                                }
                               }
                               if (((dirRegSelOpt=="") && (agenceSelOpt=="")) ||(dirRegSelOpt=="DIRECTION REGIONALE DU SAHEL")) {
                                for (var i = 0; i < arrSahelId.length; i++) {
                                  agIID=arrSahelId[i];
                                  loadTabels(agIID,arrRegion1,arrTunisMedina,arrTunisMedinaId,arrTunisMedinaDateR,arrTunisMedinaStatutReg,arrTunisMedinaAvis,arrTunisMedinaControlurs,arrTunisMedinaDerniereModification,arrTunisMedinaDelai,arrTunisMedinaStatut,arrNord,arrNordId,arrNordDateR,arrNordStatutReg,arrNordAvis,arrNordControlurs,arrNordDerniereModification,arrNordDelai,arrNordStatut,arrTunisNord,arrTunisNordId,arrTunisNordDateR,arrTunisNordStatutReg,arrTunisNordAvis,arrTunisNordControlurs,arrTunisNordDerniereModification,arrTunisNordDelai,arrTunisNordStatut,arrTunisSudCapBon,arrTunisSudCapBonId,arrTunisSudCapBonDateR,arrTunisSudCapBonStatutReg,arrTunisSudCapBonAvis,arrTunisSudCapBonControlurs,arrTunisSudCapBonDerniereModification,arrTunisSudCapBonDelai,arrTunisSudCapBonStatut,arrSud,arrSudId,arrSudDateR,arrSudStatutReg,arrSudAvis,arrSudControlurs,arrSudDerniereModification,arrSudDelai,arrSudStatut,arrHediNouira,arrHediNouiraId,arrHediNouiraDateR,arrHediNouiraStatutReg,arrHediNouiraAvis,arrHediNouiraControlurs,arrHediNouiraDerniereModification,arrHediNouiraDelai,arrHediNouiraStatut,arrSahel,arrSahelId,arrSahelDateR,arrSahelStatutReg,arrSahelAvis,arrSahelControlurs,arrSahelDerniereModification,arrSahelDelai,arrSahelStatut,arrSfaxEtCentre,arrSfaxEtCentreId,arrSfaxEtCentreDateR,arrSfaxEtCentreStatutReg,arrSfaxEtCentreAvis,arrSfaxEtCentreControlurs,arrSfaxEtCentreDerniereModification,arrSfaxEtCentreDelai,arrSfaxEtCentreStatut,arrKheiredinePacha,arrKheiredinePachaId,arrKheiredinePachaDateR,arrKheiredinePachaStatutReg,arrKheiredinePachaAvis,arrKheiredinePachaControlurs,arrKheiredinePachaDerniereModification,arrKheiredinePachaDelai,arrKheiredinePachaStatut,arrTunisMedinaDatDernMaj,arrNordDatDernMaj,arrTunisNordDatDernMaj,arrTunisSudCapBonDernMaj,arrSudDatDernMaj,arrHediNouiraDatDernMaj,arrSahelDatDernMaj,arrSfaxEtCentreDatDernMaj,arrKheiredinePachaDatDernMaj);
                                }
                               }
                               if (((dirRegSelOpt=="") && (agenceSelOpt=="")) ||(dirRegSelOpt=="DIRECTION REGIONALE SFAX ET CENTRE")) {
                                for (var i = 0; i < arrSfaxEtCentreId.length; i++) {
                                  agIID=arrSfaxEtCentreId[i];
                                  loadTabels(agIID,arrRegion1,arrTunisMedina,arrTunisMedinaId,arrTunisMedinaDateR,arrTunisMedinaStatutReg,arrTunisMedinaAvis,arrTunisMedinaControlurs,arrTunisMedinaDerniereModification,arrTunisMedinaDelai,arrTunisMedinaStatut,arrNord,arrNordId,arrNordDateR,arrNordStatutReg,arrNordAvis,arrNordControlurs,arrNordDerniereModification,arrNordDelai,arrNordStatut,arrTunisNord,arrTunisNordId,arrTunisNordDateR,arrTunisNordStatutReg,arrTunisNordAvis,arrTunisNordControlurs,arrTunisNordDerniereModification,arrTunisNordDelai,arrTunisNordStatut,arrTunisSudCapBon,arrTunisSudCapBonId,arrTunisSudCapBonDateR,arrTunisSudCapBonStatutReg,arrTunisSudCapBonAvis,arrTunisSudCapBonControlurs,arrTunisSudCapBonDerniereModification,arrTunisSudCapBonDelai,arrTunisSudCapBonStatut,arrSud,arrSudId,arrSudDateR,arrSudStatutReg,arrSudAvis,arrSudControlurs,arrSudDerniereModification,arrSudDelai,arrSudStatut,arrHediNouira,arrHediNouiraId,arrHediNouiraDateR,arrHediNouiraStatutReg,arrHediNouiraAvis,arrHediNouiraControlurs,arrHediNouiraDerniereModification,arrHediNouiraDelai,arrHediNouiraStatut,arrSahel,arrSahelId,arrSahelDateR,arrSahelStatutReg,arrSahelAvis,arrSahelControlurs,arrSahelDerniereModification,arrSahelDelai,arrSahelStatut,arrSfaxEtCentre,arrSfaxEtCentreId,arrSfaxEtCentreDateR,arrSfaxEtCentreStatutReg,arrSfaxEtCentreAvis,arrSfaxEtCentreControlurs,arrSfaxEtCentreDerniereModification,arrSfaxEtCentreDelai,arrSfaxEtCentreStatut,arrKheiredinePacha,arrKheiredinePachaId,arrKheiredinePachaDateR,arrKheiredinePachaStatutReg,arrKheiredinePachaAvis,arrKheiredinePachaControlurs,arrKheiredinePachaDerniereModification,arrKheiredinePachaDelai,arrKheiredinePachaStatut,arrTunisMedinaDatDernMaj,arrNordDatDernMaj,arrTunisNordDatDernMaj,arrTunisSudCapBonDernMaj,arrSudDatDernMaj,arrHediNouiraDatDernMaj,arrSahelDatDernMaj,arrSfaxEtCentreDatDernMaj,arrKheiredinePachaDatDernMaj);
                                }
                               }
                               if (((dirRegSelOpt=="") && (agenceSelOpt=="")) ||(dirRegSelOpt=="CENTRE D'AFFAIRES RETAIL KHEIREDDINE PACHA")) {
                                for (var i = 0; i < arrKheiredinePachaId.length; i++) {
                                  agIID=arrKheiredinePachaId[i];
                                  loadTabels(agIID,arrRegion1,arrTunisMedina,arrTunisMedinaId,arrTunisMedinaDateR,arrTunisMedinaStatutReg,arrTunisMedinaAvis,arrTunisMedinaControlurs,arrTunisMedinaDerniereModification,arrTunisMedinaDelai,arrTunisMedinaStatut,arrNord,arrNordId,arrNordDateR,arrNordStatutReg,arrNordAvis,arrNordControlurs,arrNordDerniereModification,arrNordDelai,arrNordStatut,arrTunisNord,arrTunisNordId,arrTunisNordDateR,arrTunisNordStatutReg,arrTunisNordAvis,arrTunisNordControlurs,arrTunisNordDerniereModification,arrTunisNordDelai,arrTunisNordStatut,arrTunisSudCapBon,arrTunisSudCapBonId,arrTunisSudCapBonDateR,arrTunisSudCapBonStatutReg,arrTunisSudCapBonAvis,arrTunisSudCapBonControlurs,arrTunisSudCapBonDerniereModification,arrTunisSudCapBonDelai,arrTunisSudCapBonStatut,arrSud,arrSudId,arrSudDateR,arrSudStatutReg,arrSudAvis,arrSudControlurs,arrSudDerniereModification,arrSudDelai,arrSudStatut,arrHediNouira,arrHediNouiraId,arrHediNouiraDateR,arrHediNouiraStatutReg,arrHediNouiraAvis,arrHediNouiraControlurs,arrHediNouiraDerniereModification,arrHediNouiraDelai,arrHediNouiraStatut,arrSahel,arrSahelId,arrSahelDateR,arrSahelStatutReg,arrSahelAvis,arrSahelControlurs,arrSahelDerniereModification,arrSahelDelai,arrSahelStatut,arrSfaxEtCentre,arrSfaxEtCentreId,arrSfaxEtCentreDateR,arrSfaxEtCentreStatutReg,arrSfaxEtCentreAvis,arrSfaxEtCentreControlurs,arrSfaxEtCentreDerniereModification,arrSfaxEtCentreDelai,arrSfaxEtCentreStatut,arrKheiredinePacha,arrKheiredinePachaId,arrKheiredinePachaDateR,arrKheiredinePachaStatutReg,arrKheiredinePachaAvis,arrKheiredinePachaControlurs,arrKheiredinePachaDerniereModification,arrKheiredinePachaDelai,arrKheiredinePachaStatut,arrTunisMedinaDatDernMaj,arrNordDatDernMaj,arrTunisNordDatDernMaj,arrTunisSudCapBonDernMaj,arrSudDatDernMaj,arrHediNouiraDatDernMaj,arrSahelDatDernMaj,arrSfaxEtCentreDatDernMaj,arrKheiredinePachaDatDernMaj);
                                }
                               }
                               
                            }
                            
                            
                        }
                    });
                }
                LoadAgencesDir();
          }


          function loadTabels(agIID,arrRegion1,arrTunisMedina,arrTunisMedinaId,arrTunisMedinaDateR,arrTunisMedinaStatutReg,arrTunisMedinaAvis,arrTunisMedinaControlurs,arrTunisMedinaDerniereModification,arrTunisMedinaDelai,arrTunisMedinaStatut,arrNord,arrNordId,arrNordDateR,arrNordStatutReg,arrNordAvis,arrNordControlurs,arrNordDerniereModification,arrNordDelai,arrNordStatut,arrTunisNord,arrTunisNordId,arrTunisNordDateR,arrTunisNordStatutReg,arrTunisNordAvis,arrTunisNordControlurs,arrTunisNordDerniereModification,arrTunisNordDelai,arrTunisNordStatut,arrTunisSudCapBon,arrTunisSudCapBonId,arrTunisSudCapBonDateR,arrTunisSudCapBonStatutReg,arrTunisSudCapBonAvis,arrTunisSudCapBonControlurs,arrTunisSudCapBonDerniereModification,arrTunisSudCapBonDelai,arrTunisSudCapBonStatut,arrSud,arrSudId,arrSudDateR,arrSudStatutReg,arrSudAvis,arrSudControlurs,arrSudDerniereModification,arrSudDelai,arrSudStatut,arrHediNouira,arrHediNouiraId,arrHediNouiraDateR,arrHediNouiraStatutReg,arrHediNouiraAvis,arrHediNouiraControlurs,arrHediNouiraDerniereModification,arrHediNouiraDelai,arrHediNouiraStatut,arrSahel,arrSahelId,arrSahelDateR,arrSahelStatutReg,arrSahelAvis,arrSahelControlurs,arrSahelDerniereModification,arrSahelDelai,arrSahelStatut,arrSfaxEtCentre,arrSfaxEtCentreId,arrSfaxEtCentreDateR,arrSfaxEtCentreStatutReg,arrSfaxEtCentreAvis,arrSfaxEtCentreControlurs,arrSfaxEtCentreDerniereModification,arrSfaxEtCentreDelai,arrSfaxEtCentreStatut,arrKheiredinePacha,arrKheiredinePachaId,arrKheiredinePachaDateR,arrKheiredinePachaStatutReg,arrKheiredinePachaAvis,arrKheiredinePachaControlurs,arrKheiredinePachaDerniereModification,arrKheiredinePachaDelai,arrKheiredinePachaStatut,arrTunisMedinaDatDernMaj,arrNordDatDernMaj,arrTunisNordDatDernMaj,arrTunisSudCapBonDatDernMaj,arrSudDatDernMaj,arrHediNouiraDatDernMaj,arrSahelDatDernMaj,arrSfaxEtCentreDatDernMaj,arrKheiredinePachaDatDernMaj){
                  //console.log("arrTunisMedinaDatDernMaj= "+arrTunisMedinaDatDernMaj);
                    console.log("agence nord = " + agIID);


                  
                  var responseDayInfo=responseDayInfo || [];
                  var urlDayInfo=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ControlPlus')/items?$filter=AgenceId eq'"+agIID+"'&$orderby=Date_x0020_Journ_x00e9_e%20desc&$top=1";
                  console.log('urlDayInfo= '+urlDayInfo);

var RarrRegion1=[];
var RarrTunisMedina=[];
var RarrTunisMedinaId=[];
var RarrTunisMedinaDateR=[];
var RarrTunisMedinaStatutReg=[];
var RarrTunisMedinaAvis=[];
var RarrTunisMedinaControlurs=[];
var RarrTunisMedinaDerniereModification=[];
var RarrTunisMedinaDelai=[];
var RarrTunisMedinaStatut=[];
var RarrNord=[];
var RarrNordId=[];
var RarrNordDateR=[];
var RarrNordStatutReg=[];
var RarrNordAvis=[];
var RarrNordControlurs=[];
var RarrNordDerniereModification=[];
var RarrNordDelai=[];
var RarrNordStatut=[];
var RarrTunisNord=[];
var RarrTunisNordId=[];
var RarrTunisNordDateR=[];
var RarrTunisNordStatutReg=[];
var RarrTunisNordAvis=[];
var RarrTunisNordControlurs=[];
var RarrTunisNordDerniereModification=[];
var RarrTunisNordDelai=[];
var RarrTunisNordStatut=[];
var RarrTunisSudCapBon=[];
var RarrTunisSudCapBonId=[];
var RarrTunisSudCapBonDateR=[];
var RarrTunisSudCapBonStatutReg=[];
var RarrTunisSudCapBonAvis=[];
var RarrTunisSudCapBonControlurs=[];
var RarrTunisSudCapBonDerniereModification=[];
var RarrTunisSudCapBonDelai=[];
var RarrTunisSudCapBonStatut=[];
var RarrSud=[];
var RarrSudId=[];
var RarrSudDateR=[];
var RarrSudStatutReg=[];
var RarrSudAvis=[];
var RarrSudControlurs=[];
var RarrSudDerniereModification=[];
var RarrSudDelai=[];
var RarrSudStatut=[];
var RarrHediNouira=[];
var RarrHediNouiraId=[];
var RarrHediNouiraDateR=[];
var RarrHediNouiraStatutReg=[];
var RarrHediNouiraAvis=[];
var RarrHediNouiraControlurs=[];
var RarrHediNouiraDerniereModification=[];
var RarrHediNouiraDelai=[];
var RarrHediNouiraStatut=[];
var RarrSahel=[];
var RarrSahelId=[];
var RarrSahelDateR=[];
var RarrSahelStatutReg=[];
var RarrSahelAvis=[];
var RarrSahelControlurs=[];
var RarrSahelDerniereModification=[];
var RarrSahelDelai=[];
var RarrSahelStatut=[];
var RarrSfaxEtCentre=[];
var RarrSfaxEtCentreId=[];
var RarrSfaxEtCentreDateR=[];
var RarrSfaxEtCentreStatutReg=[];
var RarrSfaxEtCentreAvis=[];
var RarrSfaxEtCentreControlurs=[];
var RarrSfaxEtCentreDerniereModification=[];
var RarrSfaxEtCentreDelai=[];
var RarrSfaxEtCentreStatut=[];
var RarrKheiredinePacha=[];
var RarrKheiredinePachaId=[];
var RarrKheiredinePachaDateR=[];
var RarrKheiredinePachaStatutReg=[];
var RarrKheiredinePachaAvis=[];
var RarrKheiredinePachaControlurs=[];
var RarrKheiredinePachaDerniereModification=[];
var RarrKheiredinePachaDelai=[];
var RarrKheiredinePachaStatut=[];
var RarrTunisMedinaDatDernMaj=[];
var RarrNordDatDernMaj=[];
var RarrTunisNordDatDernMaj=[];
var RarrTunisSudCapBonDatDernMaj=[];
var RarrSudDatDernMaj=[];
var RarrHediNouiraDatDernMaj=[];
var RarrSahelDatDernMaj=[];
var RarrSfaxEtCentreDatDernMaj=[];
var RarrKheiredinePachaDatDernMaj=[];






                  
                  function runFunction(RarrRegion1,RarrTunisMedina,RarrTunisMedinaId,RarrTunisMedinaDateR,RarrTunisMedinaStatutReg,RarrTunisMedinaAvis,RarrTunisMedinaControlurs,RarrTunisMedinaDerniereModification,RarrTunisMedinaDelai,RarrTunisMedinaStatut,RarrNord,RarrNordId,RarrNordDateR,RarrNordStatutReg,RarrNordAvis,RarrNordControlurs,RarrNordDerniereModification,RarrNordDelai,RarrNordStatut,RarrTunisNord,RarrTunisNordId,RarrTunisNordDateR,RarrTunisNordStatutReg,RarrTunisNordAvis,RarrTunisNordControlurs,RarrTunisNordDerniereModification,RarrTunisNordDelai,RarrTunisNordStatut,RarrTunisSudCapBon,RarrTunisSudCapBonId,RarrTunisSudCapBonDateR,RarrTunisSudCapBonStatutReg,RarrTunisSudCapBonAvis,RarrTunisSudCapBonControlurs,RarrTunisSudCapBonDerniereModification,RarrTunisSudCapBonDelai,RarrTunisSudCapBonStatut,RarrSud,RarrSudId,RarrSudDateR,RarrSudStatutReg,RarrSudAvis,RarrSudControlurs,RarrSudDerniereModification,RarrSudDelai,RarrSudStatut,RarrHediNouira,RarrHediNouiraId,RarrHediNouiraDateR,RarrHediNouiraStatutReg,RarrHediNouiraAvis,RarrHediNouiraControlurs,RarrHediNouiraDerniereModification,RarrHediNouiraDelai,RarrHediNouiraStatut,RarrSahel,RarrSahelId,RarrSahelDateR,RarrSahelStatutReg,RarrSahelAvis,RarrSahelControlurs,RarrSahelDerniereModification,RarrSahelDelai,RarrSahelStatut,RarrSfaxEtCentre,RarrSfaxEtCentreId,RarrSfaxEtCentreDateR,RarrSfaxEtCentreStatutReg,RarrSfaxEtCentreAvis,RarrSfaxEtCentreControlurs,RarrSfaxEtCentreDerniereModification,RarrSfaxEtCentreDelai,RarrSfaxEtCentreStatut,RarrKheiredinePacha,RarrKheiredinePachaId,RarrKheiredinePachaDateR,RarrKheiredinePachaStatutReg,RarrKheiredinePachaAvis,RarrKheiredinePachaControlurs,RarrKheiredinePachaDerniereModification,RarrKheiredinePachaDelai,RarrKheiredinePachaStatut,RarrTunisMedinaDatDernMaj,RarrNordDatDernMaj,RarrTunisNordDatDernMaj,RarrTunisSudCapBonDatDernMaj,RarrSudDatDernMaj,RarrHediNouiraDatDernMaj,RarrSahelDatDernMaj,RarrSfaxEtCentreDatDernMaj,RarrKheiredinePachaDatDernMaj)
                  {
                    RarrRegion1=arrRegion1;
RarrTunisMedina=arrTunisMedina;
RarrTunisMedinaId=arrTunisMedinaId;
RarrTunisMedinaDateR=arrTunisMedinaDateR;
RarrTunisMedinaStatutReg=arrTunisMedinaStatutReg;
RarrTunisMedinaAvis=arrTunisMedinaAvis;
RarrTunisMedinaControlurs=arrTunisMedinaControlurs;
RarrTunisMedinaDerniereModification=arrTunisMedinaDerniereModification;
RarrTunisMedinaDelai=arrTunisMedinaDelai;
RarrTunisMedinaStatut=arrTunisMedinaStatut;
RarrNord=arrNord;
RarrNordId=arrNordId;
RarrNordDateR=arrNordDateR;
RarrNordStatutReg=arrNordStatutReg;
RarrNordAvis=arrNordAvis;
RarrNordControlurs=arrNordControlurs;
RarrNordDerniereModification=arrNordDerniereModification;
RarrNordDelai=arrNordDelai;
RarrNordStatut=arrNordStatut;
RarrTunisNord=arrTunisNord;
RarrTunisNordId=arrTunisNordId;
RarrTunisNordDateR=arrTunisNordDateR;
RarrTunisNordStatutReg=arrTunisNordStatutReg;
RarrTunisNordAvis=arrTunisNordAvis;
RarrTunisNordControlurs=arrTunisNordControlurs;
RarrTunisNordDerniereModification=arrTunisNordDerniereModification;
RarrTunisNordDelai=arrTunisNordDelai;
RarrTunisNordStatut=arrTunisNordStatut;
RarrTunisSudCapBon=arrTunisSudCapBon;
RarrTunisSudCapBonId=arrTunisSudCapBonId;
RarrTunisSudCapBonDateR=arrTunisSudCapBonDateR;
RarrTunisSudCapBonStatutReg=arrTunisSudCapBonStatutReg;
RarrTunisSudCapBonAvis=arrTunisSudCapBonAvis;
RarrTunisSudCapBonControlurs=arrTunisSudCapBonControlurs;
RarrTunisSudCapBonDerniereModification=arrTunisSudCapBonDerniereModification;
RarrTunisSudCapBonDelai=arrTunisSudCapBonDelai;
RarrTunisSudCapBonStatut=arrTunisSudCapBonStatut;
RarrSud=arrSud;
RarrSudId=arrSudId;
RarrSudDateR=arrSudDateR;
RarrSudStatutReg=arrSudStatutReg;
RarrSudAvis=arrSudAvis;
RarrSudControlurs=arrSudControlurs;
RarrSudDerniereModification=arrSudDerniereModification;
RarrSudDelai=arrSudDelai;
RarrSudStatut=arrSudStatut;
RarrHediNouira=arrHediNouira;
RarrHediNouiraId=arrHediNouiraId;
RarrHediNouiraDateR=arrHediNouiraDateR;
RarrHediNouiraStatutReg=arrHediNouiraStatutReg;
RarrHediNouiraAvis=arrHediNouiraAvis;
RarrHediNouiraControlurs=arrHediNouiraControlurs;
RarrHediNouiraDerniereModification=arrHediNouiraDerniereModification;
RarrHediNouiraDelai=arrHediNouiraDelai;
RarrHediNouiraStatut=arrHediNouiraStatut;
RarrSahel=arrSahel;
RarrSahelId=arrSahelId;
RarrSahelDateR=arrSahelDateR;
RarrSahelStatutReg=arrSahelStatutReg;
RarrSahelAvis=arrSahelAvis;
RarrSahelControlurs=arrSahelControlurs;
RarrSahelDerniereModification=arrSahelDerniereModification;
RarrSahelDelai=arrSahelDelai;
RarrSahelStatut=arrSahelStatut;
RarrSfaxEtCentre=arrSfaxEtCentre;
RarrSfaxEtCentreId=arrSfaxEtCentreId;
RarrSfaxEtCentreDateR=arrSfaxEtCentreDateR;
RarrSfaxEtCentreStatutReg=arrSfaxEtCentreStatutReg;
RarrSfaxEtCentreAvis=arrSfaxEtCentreAvis;
RarrSfaxEtCentreControlurs=arrSfaxEtCentreControlurs;
RarrSfaxEtCentreDerniereModification=arrSfaxEtCentreDerniereModification;
RarrSfaxEtCentreDelai=arrSfaxEtCentreDelai;
RarrSfaxEtCentreStatut=arrSfaxEtCentreStatut;
RarrKheiredinePacha=arrKheiredinePacha;
RarrKheiredinePachaId=arrKheiredinePachaId;
RarrKheiredinePachaDateR=arrKheiredinePachaDateR;
RarrKheiredinePachaStatutReg=arrKheiredinePachaStatutReg;
RarrKheiredinePachaAvis=arrKheiredinePachaAvis;
RarrKheiredinePachaControlurs=arrKheiredinePachaControlurs;
RarrKheiredinePachaDerniereModification=arrKheiredinePachaDerniereModification;
RarrKheiredinePachaDelai=arrKheiredinePachaDelai;
RarrKheiredinePachaStatut=arrKheiredinePachaStatut;
RarrTunisMedinaDatDernMaj=arrTunisMedinaDatDernMaj;
RarrNordDatDernMaj=arrNordDatDernMaj;
RarrTunisNordDatDernMaj=arrTunisNordDatDernMaj;
RarrTunisSudCapBonDatDernMaj=arrTunisSudCapBonDatDernMaj;
RarrSudDatDernMaj=arrSudDatDernMaj;
RarrHediNouiraDatDernMaj=arrHediNouiraDatDernMaj;
RarrSahelDatDernMaj=arrSahelDatDernMaj;
RarrSfaxEtCentreDatDernMaj=arrSfaxEtCentreDatDernMaj;
RarrKheiredinePachaDatDernMaj=arrKheiredinePachaDatDernMaj;
                   $.ajax({
                        url: urlDayInfo,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseDayInfo = responseDayInfo.concat(data.d.results);
                            if (data.d.__next) {
                                urlDayInfo = data.d.__next;
                                runFunction(RarrRegion1,RarrTunisMedina,RarrTunisMedinaId,RarrTunisMedinaDateR,RarrTunisMedinaStatutReg,RarrTunisMedinaAvis,RarrTunisMedinaControlurs,RarrTunisMedinaDerniereModification,RarrTunisMedinaDelai,RarrTunisMedinaStatut,RarrNord,RarrNordId,RarrNordDateR,RarrNordStatutReg,RarrNordAvis,RarrNordControlurs,RarrNordDerniereModification,RarrNordDelai,RarrNordStatut,RarrTunisNord,RarrTunisNordId,RarrTunisNordDateR,RarrTunisNordStatutReg,RarrTunisNordAvis,RarrTunisNordControlurs,RarrTunisNordDerniereModification,RarrTunisNordDelai,RarrTunisNordStatut,RarrTunisSudCapBon,RarrTunisSudCapBonId,RarrTunisSudCapBonDateR,RarrTunisSudCapBonStatutReg,RarrTunisSudCapBonAvis,RarrTunisSudCapBonControlurs,RarrTunisSudCapBonDerniereModification,RarrTunisSudCapBonDelai,RarrTunisSudCapBonStatut,RarrSud,RarrSudId,RarrSudDateR,RarrSudStatutReg,RarrSudAvis,RarrSudControlurs,RarrSudDerniereModification,RarrSudDelai,RarrSudStatut,RarrHediNouira,RarrHediNouiraId,RarrHediNouiraDateR,RarrHediNouiraStatutReg,RarrHediNouiraAvis,RarrHediNouiraControlurs,RarrHediNouiraDerniereModification,RarrHediNouiraDelai,RarrHediNouiraStatut,RarrSahel,RarrSahelId,RarrSahelDateR,RarrSahelStatutReg,RarrSahelAvis,RarrSahelControlurs,RarrSahelDerniereModification,RarrSahelDelai,RarrSahelStatut,RarrSfaxEtCentre,RarrSfaxEtCentreId,RarrSfaxEtCentreDateR,RarrSfaxEtCentreStatutReg,RarrSfaxEtCentreAvis,RarrSfaxEtCentreControlurs,RarrSfaxEtCentreDerniereModification,RarrSfaxEtCentreDelai,RarrSfaxEtCentreStatut,RarrKheiredinePacha,RarrKheiredinePachaId,RarrKheiredinePachaDateR,RarrKheiredinePachaStatutReg,RarrKheiredinePachaAvis,RarrKheiredinePachaControlurs,RarrKheiredinePachaDerniereModification,RarrKheiredinePachaDelai,RarrKheiredinePachaStatut,RarrTunisMedinaDatDernMaj,RarrNordDatDernMaj,RarrTunisNordDatDernMaj,RarrTunisSudCapBonDatDernMaj,RarrSudDatDernMaj,RarrHediNouiraDatDernMaj,RarrSahelDatDernMaj,RarrSfaxEtCentreDatDernMaj,RarrKheiredinePachaDatDernMaj);
                            }
                            if (!(data.d.__next)){
                              var divDateJour="";
                              $.each(responseDayInfo, function (key, value) {
                                moment.locale('fr');
                                var idAgg=value.AgenceId;
                                var regg=value.R_x00e9_gion_x0020_de_x0020_l_x0;
                                console.log("tout les regions  = " + regg);
                                regg = regg.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'_');
                                var dRecep=value.Date_x0020_r_x00e9_ception_x0020;
                                var dateReception=moment(dRecep).format("DD-MM-YYYY");
                                var statRegio=value.Statut_x0020_R_x00e9_gional;
                                var avisDcp=value.Avis_x0020_DCP;
                                var dateJ=moment(value.Date_x0020_Journ_x00e9_e);
                                console.log("regg " + idAgg);

                                if (regg=="DIRECTION REGIONALE TUNIS Médina") {
                                  //arrTunisMedina
                                  //arrTunisMedinaId
                                  console.log("regg="+regg);
                                  if ((RarrTunisMedinaDatDernMaj[RarrTunisMedinaId.indexOf(idAgg)]=="À saisir")||(moment(RarrTunisMedinaDatDernMaj[RarrTunisMedinaId.indexOf(idAgg)]).isBefore(dateJ))) {
                                    //console.log("dateJ= "+dateJ);
                                    //console.log("i= "+arrTunisMedinaId.indexOf(idAgg));
                                    RarrTunisMedinaDatDernMaj[RarrTunisMedinaId.indexOf(idAgg)]=dateJ;
                                    //console.log("do= "+arrTunisMedinaDatDernMaj[arrTunisMedinaId.indexOf(idAgg)]);
                                    RarrTunisMedinaDateR[RarrTunisMedinaId.indexOf(idAgg)]= dateReception;
                                    RarrTunisMedinaStatutReg[RarrTunisMedinaId.indexOf(idAgg)]= statRegio;
                                    RarrTunisMedinaAvis[RarrTunisMedinaId.indexOf(idAgg)]= avisDcp;
                                  }
                                }
                                if (regg=="DIRECTION REGIONALE DU NORD") {
                                  // arrNordId
                                  // arrNord
                                  //console.log("regg="+regg);
                                  if ((RarrNordDatDernMaj[RarrNordId.indexOf(idAgg)]=="À saisir")||(moment(RarrNordDatDernMaj[RarrNordId.indexOf(idAgg)]).isBefore(dateJ))){
                                    RarrNordDatDernMaj[RarrNordId.indexOf(idAgg)]=dateJ;
                                    RarrNordDateR[RarrNordId.indexOf(idAgg)]= dateReception;
                                    RarrNordStatutReg[RarrNordId.indexOf(idAgg)]= statRegio;
                                    RarrNordAvis[RarrNordId.indexOf(idAgg)]= avisDcp;
                                  }
                                }
                                if (regg=="DIRECTION REGIONALE TUNIS NORD") {
                                  // arrTunisNordId
                                  // arrTunisNord
                                  //console.log("regg="+regg);
                                  if ((RarrTunisNordDatDernMaj[RarrTunisNordId.indexOf(idAgg)]=="À saisir")||(moment(RarrTunisNordDatDernMaj[RarrTunisNordId.indexOf(idAgg)]).isBefore(dateJ))){
                                    RarrTunisNordDatDernMaj[RarrTunisNordId.indexOf(idAgg)]=dateJ;
                                    RarrTunisNordDateR[RarrTunisNordId.indexOf(idAgg)]= dateReception;
                                    RarrTunisNordStatutReg[RarrTunisNordId.indexOf(idAgg)]= statRegio;
                                    RarrTunisNordAvis[RarrTunisNordId.indexOf(idAgg)]= avisDcp;
                                  }
                                }
                                if (regg=="DIRECTION REGIONALE TUNIS SUD  ET CAP BON") {
                                  // arrTunisSudCapBonId
                                  // arrTunisSudCapBon
                                  //////////console.log("regg="+regg);
                                  if ((RarrTunisSudCapBonDatDernMaj[RarrTunisSudCapBonId.indexOf(idAgg)]=="À saisir")||(moment(RarrTunisSudCapBonDatDernMaj[RarrTunisSudCapBonId.indexOf(idAgg)]).isBefore(dateJ))){
                                    RarrTunisSudCapBonDatDernMaj[RarrTunisSudCapBonId.indexOf(idAgg)]=dateJ;
                                    RarrTunisSudCapBonDateR[RarrTunisSudCapBonId.indexOf(idAgg)]= dateReception;
                                    RarrTunisSudCapBonStatutReg[RarrTunisSudCapBonId.indexOf(idAgg)]= statRegio;
                                    RarrTunisSudCapBonAvis[RarrTunisSudCapBonId.indexOf(idAgg)]= avisDcp;
                                  }
                                }
                                if (regg=="DIRECTION REGIONALE DU SUD") {
                                  // arrSudId
                                  // arrSud
                                  //////////console.log("regg="+regg);
                                  if ((RarrSudDatDernMaj[RarrSudId.indexOf(idAgg)]=="À saisir")||(moment(RarrSudDatDernMaj[RarrSudId.indexOf(idAgg)]).isBefore(dateJ))){
                                    RarrSudDatDernMaj[RarrSudId.indexOf(idAgg)]=dateJ;
                                    RarrSudDateR[RarrSudId.indexOf(idAgg)]= dateReception;
                                    RarrSudStatutReg[RarrSudId.indexOf(idAgg)]= statRegio;
                                    RarrSudAvis[RarrSudId.indexOf(idAgg)]= avisDcp;
                                  }
                                }
                                if (regg=="CENTRE D'AFFAIRES HEDI NOUIRA") {
                                  // arrHediNouiraId
                                  // arrHediNouira
                                  //////////console.log("regg="+regg);
                                  if ((RarrHediNouiraDatDernMaj[RarrHediNouiraId.indexOf(idAgg)]=="À saisir")||(moment(RarrHediNouiraDatDernMaj[RarrHediNouiraId.indexOf(idAgg)]).isBefore(dateJ))){
                                    RarrHediNouiraDatDernMaj[RarrHediNouiraId.indexOf(idAgg)]=dateJ;
                                    RarrHediNouiraDateR[RarrHediNouiraId.indexOf(idAgg)]= dateReception;
                                    RarrHediNouiraStatutReg[RarrHediNouiraId.indexOf(idAgg)]= statRegio;
                                    RarrHediNouiraAvis[RarrHediNouiraId.indexOf(idAgg)]= avisDcp;
                                  }
                                }
                                if (regg=="DIRECTION REGIONALE DU SAHEL") {
                                  // arrSahelId
                                  // arrSahel
                                  //////////console.log("regg="+regg);
                                  if ((RarrSahelDatDernMaj[RarrSahelId.indexOf(idAgg)]=="À saisir")||(moment(RarrSahelDatDernMaj[RarrSahelId.indexOf(idAgg)]).isBefore(dateJ))){
                                    RarrSahelDatDernMaj[RarrSahelId.indexOf(idAgg)]=dateJ;
                                    RarrSahelDateR[RarrSahelId.indexOf(idAgg)]= dateReception;
                                    RarrSahelStatutReg[RarrSahelId.indexOf(idAgg)]= statRegio;
                                    RarrSahelAvis[RarrSahelId.indexOf(idAgg)]= avisDcp;
                                  }
                                }
                                if (regg=="DIRECTION REGIONALE SFAX ET CENTRE") {
                                  
                                  if ((RarrSfaxEtCentreDatDernMaj[RarrSfaxEtCentreId.indexOf(idAgg)]=="À saisir")||(moment(RarrSfaxEtCentreDatDernMaj[RarrSfaxEtCentreId.indexOf(idAgg)]).isBefore(dateJ)))
                                    RarrSfaxEtCentreDatDernMaj[RarrSfaxEtCentreId.indexOf(idAgg)]=dateJ;
                                    RarrSfaxEtCentreDateR[RarrSfaxEtCentreId.indexOf(idAgg)]= dateReception;
                                    RarrSfaxEtCentreStatutReg[RarrSfaxEtCentreId.indexOf(idAgg)]= statRegio;
                                    RarrSfaxEtCentreAvis[RarrSfaxEtCentreId.indexOf(idAgg)]= avisDcp;
                                }
                                if (regg=="CENTRE D'AFFAIRES RETAIL KHEIREDDINE PACHA") {
                                  // arrKheiredinePachaId
                                  // arrKheiredinePacha
                                  //////////console.log("regg="+regg);
                                  if ((RarrKheiredinePachaDatDernMaj[RarrKheiredinePachaId.indexOf(idAgg)]=="À saisir")||(moment(RarrKheiredinePachaDatDernMaj[RarrKheiredinePachaId.indexOf(idAgg)]).isBefore(dateJ))){
                                    RarrKheiredinePachaDatDernMaj[RarrKheiredinePachaId.indexOf(idAgg)]=dateJ;
                                    RarrKheiredinePachaDateR[RarrKheiredinePachaId.indexOf(idAgg)]= dateReception;
                                    RarrKheiredinePachaStatutReg[RarrKheiredinePachaId.indexOf(idAgg)]= statRegio;
                                    RarrKheiredinePachaAvis[RarrKheiredinePachaId.indexOf(idAgg)]= avisDcp;
                                  }
                                }

                              }); 
                              //hhhh
                              desTabels(RarrRegion1,RarrTunisMedina,RarrTunisMedinaId,RarrTunisMedinaDateR,RarrTunisMedinaStatutReg,RarrTunisMedinaAvis,RarrTunisMedinaControlurs,RarrTunisMedinaDerniereModification,RarrTunisMedinaDelai,RarrTunisMedinaStatut,RarrNord,RarrNordId,RarrNordDateR,RarrNordStatutReg,RarrNordAvis,RarrNordControlurs,RarrNordDerniereModification,RarrNordDelai,RarrNordStatut,RarrTunisNord,RarrTunisNordId,RarrTunisNordDateR,RarrTunisNordStatutReg,RarrTunisNordAvis,RarrTunisNordControlurs,RarrTunisNordDerniereModification,RarrTunisNordDelai,RarrTunisNordStatut,RarrTunisSudCapBon,RarrTunisSudCapBonId,RarrTunisSudCapBonDateR,RarrTunisSudCapBonStatutReg,RarrTunisSudCapBonAvis,RarrTunisSudCapBonControlurs,RarrTunisSudCapBonDerniereModification,RarrTunisSudCapBonDelai,RarrTunisSudCapBonStatut,RarrSud,RarrSudId,RarrSudDateR,RarrSudStatutReg,RarrSudAvis,RarrSudControlurs,RarrSudDerniereModification,RarrSudDelai,RarrSudStatut,RarrHediNouira,RarrHediNouiraId,RarrHediNouiraDateR,RarrHediNouiraStatutReg,RarrHediNouiraAvis,RarrHediNouiraControlurs,RarrHediNouiraDerniereModification,RarrHediNouiraDelai,RarrHediNouiraStatut,RarrSahel,RarrSahelId,RarrSahelDateR,RarrSahelStatutReg,RarrSahelAvis,RarrSahelControlurs,RarrSahelDerniereModification,RarrSahelDelai,RarrSahelStatut,RarrSfaxEtCentre,RarrSfaxEtCentreId,RarrSfaxEtCentreDateR,RarrSfaxEtCentreStatutReg,RarrSfaxEtCentreAvis,RarrSfaxEtCentreControlurs,RarrSfaxEtCentreDerniereModification,RarrSfaxEtCentreDelai,RarrSfaxEtCentreStatut,RarrKheiredinePacha,RarrKheiredinePachaId,RarrKheiredinePachaDateR,RarrKheiredinePachaStatutReg,RarrKheiredinePachaAvis,RarrKheiredinePachaControlurs,RarrKheiredinePachaDerniereModification,RarrKheiredinePachaDelai,RarrKheiredinePachaStatut,RarrTunisMedinaDatDernMaj,RarrNordDatDernMaj,RarrTunisNordDatDernMaj,RarrTunisSudCapBonDatDernMaj,RarrSudDatDernMaj,RarrHediNouiraDatDernMaj,RarrSahelDatDernMaj,RarrSfaxEtCentreDatDernMaj,RarrKheiredinePachaDatDernMaj,divDateJour);
                            }
                            
                           
                        }
                    });
                  }
                  runFunction()
                  }
                  function desTabels(arrRegion1,arrTunisMedina,arrTunisMedinaId,arrTunisMedinaDateR,arrTunisMedinaStatutReg,arrTunisMedinaAvis,arrTunisMedinaControlurs,arrTunisMedinaDerniereModification,arrTunisMedinaDelai,arrTunisMedinaStatut,arrNord,arrNordId,arrNordDateR,arrNordStatutReg,arrNordAvis,arrNordControlurs,arrNordDerniereModification,arrNordDelai,arrNordStatut,arrTunisNord,arrTunisNordId,arrTunisNordDateR,arrTunisNordStatutReg,arrTunisNordAvis,arrTunisNordControlurs,arrTunisNordDerniereModification,arrTunisNordDelai,arrTunisNordStatut,arrTunisSudCapBon,arrTunisSudCapBonId,arrTunisSudCapBonDateR,arrTunisSudCapBonStatutReg,arrTunisSudCapBonAvis,arrTunisSudCapBonControlurs,arrTunisSudCapBonDerniereModification,arrTunisSudCapBonDelai,arrTunisSudCapBonStatut,arrSud,arrSudId,arrSudDateR,arrSudStatutReg,arrSudAvis,arrSudControlurs,arrSudDerniereModification,arrSudDelai,arrSudStatut,arrHediNouira,arrHediNouiraId,arrHediNouiraDateR,arrHediNouiraStatutReg,arrHediNouiraAvis,arrHediNouiraControlurs,arrHediNouiraDerniereModification,arrHediNouiraDelai,arrHediNouiraStatut,arrSahel,arrSahelId,arrSahelDateR,arrSahelStatutReg,arrSahelAvis,arrSahelControlurs,arrSahelDerniereModification,arrSahelDelai,arrSahelStatut,arrSfaxEtCentre,arrSfaxEtCentreId,arrSfaxEtCentreDateR,arrSfaxEtCentreStatutReg,arrSfaxEtCentreAvis,arrSfaxEtCentreControlurs,arrSfaxEtCentreDerniereModification,arrSfaxEtCentreDelai,arrSfaxEtCentreStatut,arrKheiredinePacha,arrKheiredinePachaId,arrKheiredinePachaDateR,arrKheiredinePachaStatutReg,arrKheiredinePachaAvis,arrKheiredinePachaControlurs,arrKheiredinePachaDerniereModification,arrKheiredinePachaDelai,arrKheiredinePachaStatut,arrTunisMedinaDatDernMaj,arrNordDatDernMaj,arrTunisNordDatDernMaj,arrTunisSudCapBonDatDernMaj,arrSudDatDernMaj,arrHediNouiraDatDernMaj,arrSahelDatDernMaj,arrSfaxEtCentreDatDernMaj,arrKheiredinePachaDatDernMaj,divDateJour) {
                        moment.locale('fr');
                        
                        var arrDifff=[];
                        divDateJour+='</br>'+
                        '<div class="row" id="" style="margin-left:0%;width:100%;">';
                        //******
                        divDateJour+='<div class="row" id="">'+
                            '<table id="tabSuvCont" class="table table-striped table-bordered" style="margin-left: 0%;margin-right: 0%; border-radius: 5px; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 100%);" >'+
                              '<thead>'+
                                '<tr>'+ 
                                  '<th>Direction Régionale</th>'+        
                                  '<th>Agences</th>'+ 
                                  '<th>Contrôleurs</th>'+       
                                  '<th style="width: 10%;">Date Dernier Contrôle</th>'+
                                  '<th style="width: 7%;">Date de Jours</th>'+
                                  '<th style="width: 7%;">Délai Contrôle</th>'+
                                  '<th style="text-align:center;">Statut</th>'+
                                '</tr>'+
                              '</thead>'+
                              '<tbody>';
                        
                        for (var k = 0; k < arrRegion1.length; k++) {

                          
                          
                          
                              
                             var todayDate=moment();
                          if (arrRegion1[k]=="DIRECTION REGIONALE TUNIS Médina") {
                            
                            var circle1='<i class="fa fa-circle" aria-hidden="true"></i>';
                            var circleRed='<i class="fa fa-circle" aria-hidden="true" style="color:#ff3e3e;"></i>';
                            var circleGreen='<i class="fa fa-circle" aria-hidden="true" style="color:#19ef19;"></i>';
                            var circleYellow='<i class="fa fa-circle" aria-hidden="true" style="color:#ffdd21;"></i>';
                            for (var j = 0; j < arrTunisMedinaId.length; j++) {
                              // arrTunisMedinaId
                               if (j==0) {
                                //rowspan='"+parseInt(arrTunisMedinaId.length+1)+"'
                                divDateJour+="<td style='background-color: #cf232a; color: #fff;' rowspan='"+parseInt(arrTunisMedinaId.length+1)+"'>" + arrRegion1[k] +"</td>";
                               }
                               //console.log("maj= "+arrTunisMedinaDatDernMaj[j]);
                               divDateJour+="<tr class='rows'/>";
                               divDateJour+="<td style=''>" + arrTunisMedina[j] +"</td>";
                               divDateJour+="<td style=''>" + arrTunisMedinaControlurs[j] +"</td>";
                               if (arrTunisMedinaDatDernMaj[j]!="À saisir") {
                                  divDateJour+="<td style=''>" + moment(arrTunisMedinaDatDernMaj[j]).format("DD-MM-YYYY") +"</td>"; 
                               }
                               else{
                                divDateJour+="<td style=''>" + arrTunisMedinaDatDernMaj[j] +"</td>";
                               }
                               
                               divDateJour+="<td style=''>" + moment().format("DD-MM-YYYY") +"</td>";
                               var delai="À saisir";
                                var difff=0;
                               if (arrTunisMedinaDatDernMaj[j]!="À saisir") {
                                //console.log("maj11= "+arrTunisMedinaDatDernMaj[j]);
                                var lim3=arrTunisMedinaDatDernMaj[j];
                                //console.log("in= "+j);
                                //console.log("lim3= "+lim3);
                                var lim1=moment(todayDate);
                                var lim2=moment(lim3);
                                
                                //console.log("lim1= "+lim1);
                                //console.log("lim2= "+lim2);
                                while (moment(lim2).isBefore(lim1)) {
                                  if (lim2.day() != 6 && lim2.day() != 7){
                                    difff++;
                                  }
                                  lim2=moment(lim2).add(1, 'days');
                                }
                                //console.log("difff= "+difff);
                               }else{
                                difff="À saisir";
                               }
                               divDateJour+="<td style=''>" + difff +"</td>";
                               arrDifff.push(difff);
                               var circle="";
                               if (difff<=7) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#19ef19;"></i>';
                               }else if ((difff>7)&&(difff<20)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ffdd21;"></i>';
                               }else if ((difff>19)&&(difff<51)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ff3e3e;"></i>';
                               }else if ((difff>50)||(difff=="À saisir")){
                                circle='<i class="fa fa-circle" aria-hidden="true"></i>';
                               }
                               divDateJour+="<td style=''>" + circle +"</td>";
                               divDateJour+="</tr>";
                            }
                          }
                          if (arrRegion1[k]=="DIRECTION REGIONALE DU NORD") {
                            for (var j = 0; j < arrNordId.length; j++) {
                              // arrTunisMedinaId
                              if (j==0) {
                                //rowspan='"+parseInt(arrNordId.length+1)+"'
                                divDateJour+="<td style='background-color: #cf232a; color: #fff;' rowspan='"+parseInt(arrNordId.length+1)+"'>" + arrRegion1[k] +"</td>";
                               }
                               divDateJour+="<tr class='rows'/>";
                               divDateJour+="<td style=''>" + arrNord[j] +"</td>";
                               divDateJour+="<td style=''>" + arrNordControlurs[j] +"</td>";
                               if (arrNordDatDernMaj[j]!="À saisir") {
                                divDateJour+="<td style=''>" + moment(arrNordDatDernMaj[j]).format("DD-MM-YYYY") +"</td>";
                              }else{
                                divDateJour+="<td style=''>" + arrNordDatDernMaj[j] +"</td>";
                              }                               
                               divDateJour+="<td style=''>" + moment().format("DD-MM-YYYY") +"</td>";
                               var delai="À saisir";

                                var difff=0;
                               if (arrNordDatDernMaj[j]!="À saisir") {
                                var lim1=moment(todayDate);
                                var lim2=moment(arrNordDatDernMaj[j]);
                                while (moment(lim2).isBefore(lim1)) {
                                  if (lim2.day() != 6 && lim2.day() != 7){
                                    difff++;
                                  }
                                  lim2=moment(lim2).add(1, 'days');
                                }
                               }else{
                                difff="À saisir";
                               }
                               divDateJour+="<td style=''>" + difff +"</td>";
                               arrDifff.push(difff);
                               var circle="";
                               if (difff<=7) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#19ef19;"></i>';
                               }else if ((difff>7)&&(difff<20)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ffdd21;"></i>';
                               }else if ((difff>19)&&(difff<51)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ff3e3e;"></i>';
                               }else if ((difff>50)||(difff=="À saisir")){
                                circle='<i class="fa fa-circle" aria-hidden="true"></i>';
                               }
                               divDateJour+="<td style=''>" + circle +"</td>";
                               divDateJour+="</tr>";
                              
                            }
                          }
                          if (arrRegion1[k]=="DIRECTION REGIONALE TUNIS NORD") {
                            for (var j = 0; j < arrTunisNordId.length; j++) {
                                                        // arrTunisMedinaId
                                if (j==0) {
                                //rowspan='"+parseInt(arrTunisNordId.length+1)+"'
                                divDateJour+="<td style='background-color: #cf232a; color: #fff;' rowspan='"+parseInt(arrTunisNordId.length+1)+"'>" + arrRegion1[k] +"</td>";
                               }
                               divDateJour+="<tr class='rows'/>";
                               divDateJour+="<td style=''>" + arrTunisNord[j] +"</td>";
                               divDateJour+="<td style=''>" + arrTunisNordControlurs[j] +"</td>";
                               if (arrTunisNordDatDernMaj[j]!="À saisir") {
                                divDateJour+="<td style=''>" + moment(arrTunisNordDatDernMaj[j]).format("DD-MM-YYYY") +"</td>";
                               }
                               else{
                                divDateJour+="<td style=''>" + arrTunisNordDatDernMaj[j] +"</td>";
                               }
                               divDateJour+="<td style=''>" + moment().format("DD-MM-YYYY") +"</td>";
                               var delai="À saisir";
                                var difff=0;
                               if (arrTunisNordDatDernMaj[j]!="À saisir") {
                                var lim1=moment(todayDate);
                                var lim2=moment(arrTunisNordDatDernMaj[j]);
                                while (moment(lim2).isBefore(lim1)) {
                                  if (lim2.day() != 6 && lim2.day() != 7){
                                    difff++;
                                  }
                                  lim2=moment(lim2).add(1, 'days');
                                }
                               }else{
                                difff="À saisir";
                               }
                               divDateJour+="<td style=''>" + difff +"</td>";
                               arrDifff.push(difff);
                               var circle="";
                               if (difff<=7) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#19ef19;"></i>';
                               }else if ((difff>7)&&(difff<20)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ffdd21;"></i>';
                               }else if ((difff>19)&&(difff<51)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ff3e3e;"></i>';
                               }else if ((difff>50)||(difff=="À saisir")){
                                circle='<i class="fa fa-circle" aria-hidden="true"></i>';
                               }
                               divDateJour+="<td style=''>" + circle +"</td>";
                                divDateJour+="</tr>";
                              }
                          }
                          if (arrRegion1[k]=="DIRECTION REGIONALE TUNIS SUD  ET CAP BON") {
                            for (var j = 0; j < arrTunisSudCapBonId.length; j++) {
                              // arrTunisMedinaId
                              if (j==0) {
                                //rowspan='"+parseInt(arrTunisSudCapBonId.length+1)+"'
                                divDateJour+="<td style='background-color: #cf232a; color: #fff;' rowspan='"+parseInt(arrTunisSudCapBonId.length+1)+"'>" + arrRegion1[k] +"</td>";
                               }
                               divDateJour+="<tr class='rows'/>";
                               divDateJour+="<td style=''>" + arrTunisSudCapBon[j] +"</td>";
                               divDateJour+="<td style=''>" + arrTunisSudCapBonControlurs[j] +"</td>";
                               if (arrTunisSudCapBonDatDernMaj[j]!="À saisir") {
                                divDateJour+="<td style=''>" + moment(arrTunisSudCapBonDatDernMaj[j]).format("DD-MM-YYYY") +"</td>";
                               }
                               else{
                                divDateJour+="<td style=''>" + arrTunisSudCapBonDatDernMaj[j] +"</td>";
                               }
                               divDateJour+="<td style=''>" + moment().format("DD-MM-YYYY") +"</td>";
                               var delai="À saisir";
                                var difff=0;
                               if (arrTunisSudCapBonDatDernMaj[j]!="À saisir") {
                                var lim1=moment(todayDate);
                                var lim2=moment(arrTunisSudCapBonDatDernMaj[j]);
                                while (moment(lim2).isBefore(lim1)) {
                                  if (lim2.day() != 6 && lim2.day() != 7){
                                    difff++;
                                  }
                                  lim2=moment(lim2).add(1, 'days');
                                }
                               }else{
                                difff="À saisir";
                               }
                               divDateJour+="<td style=''>" + difff +"</td>";
                               arrDifff.push(difff);
                               var circle="";
                               if (difff<=7) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#19ef19;"></i>';
                               }else if ((difff>7)&&(difff<20)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ffdd21;"></i>';
                               }else if ((difff>19)&&(difff<51)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ff3e3e;"></i>';
                               }else if ((difff>50)||(difff=="À saisir")){
                                circle='<i class="fa fa-circle" aria-hidden="true"></i>';
                               }
                               divDateJour+="<td style=''>" + circle +"</td>";
                               divDateJour+="</tr>";
                              
                            }
                          }
                          if (arrRegion1[k]=="DIRECTION REGIONALE DU SUD") {
                            for (var j = 0; j < arrSudId.length; j++) {
                              // arrTunisMedinaId
                              if (j==0) {
                                //rowspan='"+parseInt(arrSudId.length+1)+"'
                                divDateJour+="<td style='background-color: #cf232a; color: #fff;' rowspan='"+parseInt(arrSudId.length+1)+"'>" + arrRegion1[k] +"</td>";
                               }
                               divDateJour+="<tr class='rows'/>";
                               divDateJour+="<td style=''>" + arrSud[j] +"</td>";
                               divDateJour+="<td style=''>" + arrSudControlurs[j] +"</td>";
                               if (arrSudDatDernMaj[j]!="À saisir") {
                                divDateJour+="<td style=''>" + moment(arrSudDatDernMaj[j]).format("DD-MM-YYYY") +"</td>";
                               }
                               else{
                                divDateJour+="<td style=''>" + arrSudDatDernMaj[j] +"</td>";
                               }
                               divDateJour+="<td style=''>" + moment().format("DD-MM-YYYY") +"</td>";
                               var delai="À saisir";
                                var difff=0;
                               if (arrSudDatDernMaj[j]!="À saisir") {
                                var lim1=moment(todayDate);
                                var lim2=moment(arrSudDatDernMaj[j]);
                                while (moment(lim2).isBefore(lim1)) {
                                  if (lim2.day() != 6 && lim2.day() != 7){
                                    difff++;
                                  }
                                  lim2=moment(lim2).add(1, 'days');
                                }
                               }else{
                                difff="À saisir";
                               }
                               divDateJour+="<td style=''>" + difff +"</td>";
                               arrDifff.push(difff);
                               var circle="";
                               if (difff<=7) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#19ef19;"></i>';
                               }else if ((difff>7)&&(difff<20)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ffdd21;"></i>';
                               }else if ((difff>19)&&(difff<51)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ff3e3e;"></i>';
                               }else if ((difff>50)||(difff=="À saisir")){
                                circle='<i class="fa fa-circle" aria-hidden="true"></i>';
                               }
                               divDateJour+="<td style=''>" + circle +"</td>";
                               divDateJour+="</tr>";
                              
                            }
                          }
                          if (arrRegion1[k]=="CENTRE D'AFFAIRES HEDI NOUIRA") {
                            for (var j = 0; j < arrHediNouiraId.length; j++) {
                              // arrTunisMedinaId
                              if (j==0) {
                                //rowspan='"+parseInt(arrHediNouiraId.length+1)+"'
                                divDateJour+="<td style='background-color: #cf232a; color: #fff;' rowspan='"+parseInt(arrHediNouiraId.length+1)+"'>" + arrRegion1[k] +"</td>";
                               }
                               divDateJour+="<tr class='rows'/>";
                               divDateJour+="<td style=''>" + arrHediNouira[j] +"</td>";
                               divDateJour+="<td style=''>" + arrHediNouiraControlurs[j] +"</td>";
                               if (arrHediNouiraDatDernMaj[j]!="À saisir") {
                                divDateJour+="<td style=''>" + moment(arrHediNouiraDatDernMaj[j]).format("DD-MM-YYYY") +"</td>";
                               }
                               else{
                                divDateJour+="<td style=''>" + arrHediNouiraDatDernMaj[j] +"</td>";
                               }
                               divDateJour+="<td style=''>" + moment().format("DD-MM-YYYY") +"</td>";
                               var delai="À saisir";
                                var difff=0;
                               if (arrHediNouiraDatDernMaj[j]!="À saisir") {
                                var lim1=moment(todayDate);
                                var lim2=moment(arrHediNouiraDatDernMaj[j]);
                                while (moment(lim2).isBefore(lim1)) {
                                  if (lim2.day() != 6 && lim2.day() != 7){
                                    difff++;
                                  }
                                  lim2=moment(lim2).add(1, 'days');
                                }
                               }else{
                                difff="À saisir";
                               }
                               divDateJour+="<td style=''>" + difff +"</td>";
                               arrDifff.push(difff);
                               var circle="";
                               if (difff<=7) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#19ef19;"></i>';
                               }else if ((difff>7)&&(difff<20)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ffdd21;"></i>';
                               }else if ((difff>19)&&(difff<51)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ff3e3e;"></i>';
                               }else if ((difff>50)||(difff=="À saisir")){
                                circle='<i class="fa fa-circle" aria-hidden="true"></i>';
                               }
                               divDateJour+="<td style=''>" + circle +"</td>";
                               divDateJour+="</tr>";
                              
                            }
                          }
                          if (arrRegion1[k]=="DIRECTION REGIONALE DU SAHEL") {
                            for (var j = 0; j < arrSahelId.length; j++) {
                              // arrTunisMedinaId
                              if (j==0) {
                                //rowspan='"+parseInt(arrSahelId.length+1)+"'
                                divDateJour+="<td style='background-color: #cf232a; color: #fff;' rowspan='"+parseInt(arrSahelId.length+1)+"'>" + arrRegion1[k] +"</td>";
                               }
                               divDateJour+="<tr class='rows'/>";
                               divDateJour+="<td style=''>" + arrSahel[j] +"</td>";
                               divDateJour+="<td style=''>" + arrSahelControlurs[j] +"</td>";
                               if (arrSahelDatDernMaj[j]!="À saisir") {
                                divDateJour+="<td style=''>" + moment(arrSahelDatDernMaj[j]).format("DD-MM-YYYY") +"</td>";
                               }
                               else{
                                divDateJour+="<td style=''>" + arrSahelDatDernMaj[j] +"</td>";
                               }
                               divDateJour+="<td style=''>" + moment().format("DD-MM-YYYY") +"</td>";
                               var delai="À saisir";
                                var difff=0;
                               if (arrSahelDatDernMaj[j]!="À saisir") {
                                var lim1=moment(todayDate);
                                var lim2=moment(arrSahelDatDernMaj[j]);
                                while (moment(lim2).isBefore(lim1)) {
                                  if (lim2.day() != 6 && lim2.day() != 7){
                                    difff++;
                                  }
                                  lim2=moment(lim2).add(1, 'days');
                                }
                               }else{
                                difff="À saisir";
                               }
                               divDateJour+="<td style=''>" + difff +"</td>";
                               arrDifff.push(difff);
                               var circle="";
                               if (difff<=7) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#19ef19;"></i>';
                               }else if ((difff>7)&&(difff<20)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ffdd21;"></i>';
                               }else if ((difff>19)&&(difff<51)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ff3e3e;"></i>';
                               }else if ((difff>50)||(difff=="À saisir")){
                                circle='<i class="fa fa-circle" aria-hidden="true"></i>';
                               }
                               divDateJour+="<td style=''>" + circle +"</td>";
                               divDateJour+="</tr>";
                              
                            }
                          }
                          if (arrRegion1[k]=="DIRECTION REGIONALE SFAX ET CENTRE") {
                            for (var j = 0; j < arrSfaxEtCentreId.length; j++) {
                              // arrTunisMedinaId
                              if (j==0) {
                                //rowspan='"+parseInt(arrSfaxEtCentreId.length+1)+"'
                                divDateJour+="<td style='background-color: #cf232a; color: #fff;' rowspan='"+parseInt(arrSfaxEtCentreId.length+1)+"'>" + arrRegion1[k] +"</td>";
                               }
                               divDateJour+="<tr class='rows'/>";
                               divDateJour+="<td style=''>" + arrSfaxEtCentre[j] +"</td>";
                               divDateJour+="<td style=''>" + arrSfaxEtCentreControlurs[j] +"</td>";
                               if (arrSfaxEtCentreDatDernMaj[j]!="À saisir") {
                                divDateJour+="<td style=''>" + moment(arrSfaxEtCentreDatDernMaj[j]).format("DD-MM-YYYY") +"</td>";
                               }
                               else{
                                divDateJour+="<td style=''>" + arrSfaxEtCentreDatDernMaj[j] +"</td>";
                               }
                               divDateJour+="<td style=''>" + moment().format("DD-MM-YYYY") +"</td>";
                               var delai="À saisir";
                                var difff=0;
                               if (arrSfaxEtCentreDatDernMaj[j]!="À saisir") {
                                var lim1=moment(todayDate);
                                var lim2=moment(arrSfaxEtCentreDatDernMaj[j]);
                                while (moment(lim2).isBefore(lim1)) {
                                  if (lim2.day() != 6 && lim2.day() != 7){
                                    difff++;
                                  }
                                  lim2=moment(lim2).add(1, 'days');
                                }
                               }else{
                                difff="À saisir";
                               }

                               divDateJour+="<td style=''>" + difff +"</td>";
                               arrDifff.push(difff);
                               var circle="";
                               if (difff<=7) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#19ef19;"></i>';
                               }else if ((difff>7)&&(difff<20)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ffdd21;"></i>';
                               }else if ((difff>19)&&(difff<51)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ff3e3e;"></i>';
                               }else if ((difff>50)||(difff=="À saisir")){
                                console.log("difffff= "+difff);
                                console.log("circle= "+circle);
                                circle='<i class="fa fa-circle" aria-hidden="true"></i>';
                               }
                               divDateJour+="<td style=''>" + circle +"</td>";
                               divDateJour+="</tr>";
                              
                            }
                          }
                          if (arrRegion1[k]=="CENTRE D'AFFAIRES RETAIL KHEIREDDINE PACHA") {
                            for (var j = 0; j < arrKheiredinePachaId.length; j++) {
                              // arrTunisMedinaId
                              if (j==0) {
                                //rowspan='"+parseInt(arrKheiredinePachaId.length+1)+"'
                                divDateJour+="<td style='background-color: #cf232a; color: #fff;' rowspan='"+parseInt(arrKheiredinePachaId.length+1)+"'>" + arrRegion1[k] +"</td>";
                               }
                               divDateJour+="<tr class='rows'/>";
                               divDateJour+="<td style=''>" + arrKheiredinePacha[j] +"</td>";
                               divDateJour+="<td style=''>" + arrKheiredinePachaControlurs[j] +"</td>";
                               if (arrKheiredinePachaDatDernMaj[j]!="À saisir") {
                                divDateJour+="<td style=''>" + moment(arrKheiredinePachaDatDernMaj[j]).format("DD-MM-YYYY") +"</td>";
                               }else{
                                divDateJour+="<td style=''>" + arrKheiredinePachaDatDernMaj[j] +"</td>";
                               }
                               
                               divDateJour+="<td style=''>" + moment().format("DD-MM-YYYY") +"</td>";
                               var delai="À saisir";
                               var difff=0;
                               if (arrSfaxEtCentreDatDernMaj[j]!="À saisir") {
                                var lim1=moment(todayDate);
                                var lim2=moment(arrSfaxEtCentreDatDernMaj[j]);
                                
                                while (moment(lim2).isBefore(lim1)) {
                                  if (lim2.day() != 6 && lim2.day() != 7){
                                    difff++;
                                  }
                                  lim2=moment(lim2).add(1, 'days');
                                }
                               }else{
                                difff="À saisir";
                               }
                               divDateJour+="<td style=''>" + difff +"</td>";
                               arrDifff.push(difff);
                               var circle="";
                               if (difff<=7) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#19ef19;"></i>';
                               }else if ((difff>7)&&(difff<20)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ffdd21;"></i>';
                               }else if ((difff>19)&&(difff<51)) {
                                circle='<i class="fa fa-circle" aria-hidden="true" style="color:#ff3e3e;"></i>';
                               }else if ((difff>50)||(difff=="À saisir")){
                                circle='<i class="fa fa-circle" aria-hidden="true"></i>';
                               }
                               divDateJour+="<td style=''>" + circle +"</td>";
                               divDateJour+="</tr>";
                              
                            }
                          }
                          
                        }
                        divDateJour+='</tbody>'+
                            '</table>'+
                          '</div>';
                        divDateJour+='</div>';
                            //******
                            var sumDiff=0;
                            for (var h = 0; h < arrDifff.length; h++) {
                              //console.log("arrDifff[h]= "+arrDifff[h])
                              if (arrDifff[h]!="À saisir") {
                                sumDiff=parseFloat(sumDiff)+parseFloat(arrDifff[h]);

                              }else{
                                sumDiff=parseFloat(sumDiff+50);
                              }
                            }
                            var avgDiff=0;
                            avgDiff=parseFloat(sumDiff/arrDifff.length).toFixed(0);
                            var circle11='<i class="fa fa-circle" aria-hidden="true" fa-2x></i>';
                            var circleRed1='<i class="fa fa-circle" aria-hidden="true" style="color:#ff3e3e;" fa-2x></i>';
                            var circleGreen1='<i class="fa fa-circle" aria-hidden="true" style="color:#19ef19;" fa-2x></i>';
                            var circleYellow1='<i class="fa fa-circle" aria-hidden="true" style="color:#ffdd21;" fa-2x></i>';
                            // 
                            // 
                            document.getElementById("sumDelai").innerHTML =conToMill(parseFloat(sumDiff).toFixed(0));
                            var circlee=""
                              if (avgDiff<=7) {
                                circlee=circleGreen1;
                               }else if ((avgDiff>7)&&(avgDiff<20)) {
                                circlee=circleYellow1;
                               }else if ((avgDiff>19)&&(avgDiff<51)) {
                                circlee=circleRed1;
                               }else{
                                circle=circle11;
                               }
                            document.getElementById("AvgDelai").innerHTML =circlee+" "+parseFloat(avgDiff).toFixed(2);

                            document.getElementById("dataDiv").innerHTML =divDateJour;

  }
}
//loadPage(urlPage,url1Page);
</script>
    
</body>