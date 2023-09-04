<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>


  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <link href="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Liste_recuperation_data/File_CSS/custom1.min.css" rel="stylesheet">
  <link rel="stylesheet"href="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Liste_recuperation_data/File_CSS/bootstrap.min.css">
  <link href="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Liste_recuperation_data/File_CSS/font-awesome.min.css" rel="stylesheet">
  <link href="http://cdn.grapecity.com/spreadjs/hosted/css/gc.spread.sheets.excel2013white.10.1.0.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/css_Library/bootstrap.4.1.1.min.css" />
  <link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/css_Library/bootstrap.min.css" />
  <link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/css_Library/bootstrap3.0.4.min.css" />
  <link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/css_Library/bootstrap-select.css" />
  <link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/css_Library/Mise_en_Forme.css" />

  <style>


//Bande de commande

.glyphiconBC {
    position: relative;
    top: 1px;
    display: inline-block;
    font-size: x-large;
    font-family: "Glyphicons Halflings";
    font-style: normal;
    font-weight: 200;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#overlayBC {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  display: none;
}

#popupBC {
  max-width: 600px;
  width: 80%;
  max-height: 400px;
  height: 80%;
  padding: 20px;
  position: relative;
  background: #fff;
  margin: 20px auto;
}

#close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #000;
}

//Fin de css







    #chk {
      cursor: pointer;
    }

    #modal-dialog {
      cursor: pointer;
    }

    /*Some stylings to the buttons*/
    #chk,
    #modal-dialog,
    #redirection {
      color: #fff;
      border-radius: 5px;
    }

    #chk {
      background: #0703af;
    }

    #modal-dialog {
      background: #af2303;
    }

    #redirection {
      background-color: #8bc34a;
      position: absolute;
      left: 999px;
    }

    option:empty {
      display: none;
    }

    span#DeltaPlaceHolderPageTitleInTitleArea {
      display: none;
    }

    #siteprojet {
      background-color: white;
      opacity: 1;
    }

    element.style {
      position: absolute;
      top: 5px;
    }

    .containerdevis {
      display: none;
    }

    .containerdevis.show {
      display: block;
      /* P.S: Use `!important` if missing `#content` (selector specificity). */
    }

    .containerAttachement {
      display: none;
    }

    .containerAttachement.show {
      display: block;
      /* P.S: Use `!important` if missing `#content` (selector specificity). */
    }

    div#customers {
      position: absolute;
      top: 0px;
    }

    div#DeltaSiteLogo {
      display: none;
    }

    div#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sboxdiv {
      display: none;
    }
    .card flex-md-row{
            border: 1px;

        }
        #tableaux td{
background-color: white;
        }
#tableauxAtt td{
background-color: white;
        } 
        #tableauxAtt1 td{
background-color: white;
        } 
        #headercolor {
    box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);

}
.card.flex-md-row {
    box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);
}

         #tableaux th{
background-color: #f09609b8;
color: black;
        }
#tableauxAtt th{
background-color: #f09609b8;
color: black;
        } 
        #tableauxAtt1 th{
background-color: #f09609b8;
color: black;
        } 

  </style>
<div id="customers">
  <div class="containerdevis" style="margin : 2% 3%; background-color :#faf7f7;padding: 15px;">
    <div class="card flex-md-row" >
      <header>
        <div class="row">
          <div class="col-3">
            <img src="/sites/PWA/_catalogs/masterpage/sotetel.png" width="200" height="80" data-holder-rendered="true" />
          </div>

          <div class="col-5">
            <div style="font-size: 30pt; font-family: auto; text-align: center;">
              Devis
            </div>
            <div id="Approuve" style="font-size: 30pt; font-family: auto; color:#eea236; text-align: center;">
              En cours
            </div>
            <div id="rejete" style="font-size: 30pt; font-family: auto; color:red; text-align: center;">
              Rejeté
            </div>
            <div id="supprime" style="font-size: 30pt; font-family: auto; color:red; text-align: center;">
              Supprimé
            </div>
            <div style="font-family: auto;text-align: center;display: block;">
             <strong><input type="text" readonly="" id="UniqueCodeAttDyn1Update" style=" font-size: 13px; font-weight: bolder;width:40px; background-color:white; border:none; display:none;text-align: center"><input type="text" readonly="" id="pcode1" style=" font-size: 13px; font-weight: bolder;width:50px; background-color:white; border:none;text-align: center">/<input type="text" readonly="" id="codeoracleentete" style=" font-size: 13px; font-weight: bolder;width:80px; background-color:white; border:none;text-align: center">/
              SOTETEL</strong>
            </div>
          </div>



          <div class="col-4 company-details">
            <center>
              <h5 style="font-family:auto;">Société Tunisienne d'Entreprise de</h5>
              <h5 style="font-family:auto;">Télécommunication Service Sous Traitance</h5></br>
              <input type="date" id="date" readonly style="border:none; width:50%; float:right; margin-right:5%;">
            </center>
          </div>
        </div>
      </header>
    </div>
    </hr>

    <br>


    <div class="row mb-2">

      <div class="col-md-6">
        <div class="card flex-md-row ">
          <div class="card-body">
            <table style="border:1px; border-color:black;width:100%">
              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Code_Oracle : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="codeoracle" readonly
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Chef Projet : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none; position:absolute;" id="chefprojet"
                    style="width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Date_Démarrage : </strong></div>
                </td>
                <td>
                  <div type="text" id="demarrage" name="trip-start"
                    style="border:none; width: 300px; position:absolute;" />
                </td>
              </tr>


              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Délai par Mois : </strong></div>
                </td>
                <td>
                  <div type="number" style="border:none;" id="delai" readonly
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Délai par Jour : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="delaijr" readonly
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Type BC : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="typebc" readonly
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Zone : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="zonepr"
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

            </table>
          </div>
        </div>
      </div>



      <div class="col-md-6">
        <div class="card flex-md-row">
          <div class="card-body">
            <table style="border:0; border-color:black;width:100%">

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Projet : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="nomprojet" readonly
                    style="font-size: 15px; width: 200px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Direction : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="direction" readonly style="width: 300px; height: 35px;" />
                </td>

              </tr>



              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Pole :</strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="pole" readonly style="width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Sous_Traitant :</strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="soustraitant" readonly
                    style="width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Opérations/Tâches :</strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="tache" readonly style="width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Sous_Opérations :</strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="sous_op" readonly style="width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>TVA% :</strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="tvaprojet" style="width: 300px; height: 35px;" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>


    <div class="card-body ">
      <table style="border:0; border-color:black;width:100%">
        <tr>
          <td>
            <div class="mb-1 text-muted"><strong>Site :</strong></div>
          </td>
          <td><textarea rows="3" id="siteprojet" class="form-control" readonly
              style="background-color=white; width:400px;"></textarea></td>
        </tr>
      </table>
    </div>
    </br>

    <div id="ExcelImport">
      <meta charset="UTF-8">
      <table id="tableaux" class="table table-bordered table-sm" style="border:1px; border-color:black;width:100%">
        <thead>
          <tr>
            <th class="text-center" style="width: 8%;">Code Article</th>
            <th class="text-center" style="width: 10%;">Article</th>
            <th class="text-center" style="width: 7%;">Unité</th>
            <th class="text-center" style="width: 10%;">Site</th>
            <th class="text-center" style="width: 7%;">Quantité</th>
            <th class="text-center" style="width: 10%;">Prix Unitaire</th>
            <th class="text-center" style="width: 10%;">Prix Tot HT</th>
            <th class="text-center" style="width: 10%;">Prix Tot TTC</th>
          </tr>
        </thead>
      </table>
      <center>
        <button id="loadi" style="background-color:red; text-align:center;" class="btn btn-primary">
          <span class="spinner-border spinner-border-sm"></span>
          Chargement des autres articles... Veuillez attendre à peu près 8 secondes SVP Merci !
        </button>
      </center>
    </div>


    <ul id="pagination-demo" class="pagination-sm"></ul>

    <div class="row">
      <div class="col-lg-4 col-sm-5">

      </div>
      <div class="col-lg-4 col-sm-5 ml-auto">
        <table class="table table-clear">
          <tbody>

            <tr>
              <td class="left">
                <div class="form-group">
                  <strong>Montant HT : </strong>
              </td>

              <td class="right">
                <div class="form-control" style="border-color: black; width:150px; text-align:center;" type="text"
                  name="number" value="" readonly id="ht" />
              </td>
              <td class="right">
                <p>DT</p>
              </td>
            </tr>

            <tr>
              <td class="left">
                <div class="form-group">
                  <strong>TVA : </strong>
              </td>

              <td class="right">
                <div class="form-control" style="border-color: black; width:150px; text-align:center;" type="text"
                  name="number" value="" readonly id="tva" />
              </td>
              <td class="right">
                <p>DT</p>
              </td>
            </tr>

            <tr>
              <td class="left">
                <div class="form-group">
                  <strong>Montant TTC : </strong>
              </td>

              <td class="right">
                <div class="form-control" style="border-color: black; width:150px; text-align:center;" type="text"
                  name="number" value="" readonly id="ttc" />
              </td>
              <td class="right">
                <p>DT</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <table border="0">
      <tr>
        <td><strong>Arrétée la somme du devis à : </strong></td>
        <td>
          <div id="word" style="font-family: cursive; color: black; font-size: initial;">&nbsp;&nbsp;&nbsp;</div>
        </td>
      </tr>
    </table>

    <hr />


    <div class="mb-1 text-muted"><strong>Signatures:</strong></div><br /><br />

    <div class="row mb-2">
      <div class="col-md-6">
        <center>
          <div class="mb-1 text-muted"><strong> SOTETEL</strong></div>
        </center><br />
      </div>

      <div class="col-md-6">
        <center>
          <div class="mb-1 text-muted"><strong>Sous_Traitant</strong></div>
        </center><br />
      </div>
    </div>
    </br>
    </br>


    <div class="toolbar hidden-print">
      <div class="text-right">
        <button id="printInvoice" data-toggle="tooltip" title="Imprimer Devis" class="btn btn-info"><i
            class="fa fa-print fa-2x"></i></button>
      </div>
    </div>




    <div class="text-right" style="margin-bottom : 10px;">

      <!-- Button trigger modal -->
      <button type="button" id="relancer" class="btn btn-primary itempushedcliquer" data-toggle="modal"
        data-target="#myModal">
        Relancer le devis
      </button>

      <!-- Modal -->
      <div class="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" data-callback="DeleteData">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="myModalLabel">Confirmation de relancement de devis</h4>
            </div>
            <div class="modal-body">
              <div class="alert alert-danger" role="alert">Voulez vous relancez le devis ?</div>
            </div>
            <div class="modal-footer">
              <button type="button" id="loadIdUpdate" class="btn btn-primary" data-dismiss="modal">Oui</button>
              <button type="button" class="btn btn-default" onclick="window.location.reload();"
                data-dismiss="modal">Annuler</button>
            </div>
          </div>
        </div>
      </div>
    </div>





  </div>


  <div id="overlay1">
    <div id="popup1">
      <div class="form-group">
        <span class="popuptext" id="myPopup">Votre mise à jour de devis est en cours d'enregistrement... Merci de
          patienter. Ne quitter pas la page <span class="glyphicon glyphicon-refresh glyphicon-spin"></span></span>
      </div>
    </div>
  </div>









  <!-- Ajouter attachement -->



  <div class="containerAttachement" id="customersAtt" style="background-color: #faf7f7; margin : 2% 3%;padding: 15px;">
    <div class="card flex-md-row ">
      <header>
        <div class="row">
          <div class="col">
            <img src="/sites/PWA/_catalogs/masterpage/sotetel.png" width="200" height="80" data-holder-rendered="true" />
          </div>

          <div class="title">
            <div style="font-size: 35pt; font-family: auto; text-align: center;">
              Attachement
            </div>
            <strong><input type="text" readonly id="UniqueCodeAttDyn1AttLoaded"
                style=" font-size: 13px; font-weight: bolder;width:50px; background-color:white; border:none; display:none;" /><input
                type="text" readonly id="UniqueCodeAttDyn"
                style=" font-size: 13px; font-weight: bolder;width:50px; background-color:white; border:none;" />/<input
                type="text" readonly id="pcode1Att"
                style=" font-size: 13px; font-weight: bolder;width:50px; background-color:white; border:none;" />/<input
                type="text" readonly id="codeoracleenteteAtt"
                style=" font-size: 13px; font-weight: bolder;width:80px; background-color:white; border:none;" />/
              SOTETEL</strong>
          </div>


          <div class="col company-details">
            <center>
              <h5 style="font-family:auto;">Société Tunisienne d'Entreprise de</h5>
              <h5 style="font-family:auto;">Télécommunication Service Sous Traitance</h5></br>
              <input type="date" id="dateAtt" readonly style="border:none; width:50%; float:right;margin-right: 5%">
            </center>
          </div>
        </div>
      </header>
    </div>
    </hr>

    <br>


    <div class="row mb-2">

      <div class="col-md-6">
        <div class="card flex-md-row 0">
          <div class="card-body">
            <table border="0" width="100%">
              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Code_Oracle : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="codeoracleAtt" readonly
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Chef Projet : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none; position:absolute;" id="chefprojetAtt"
                    style="width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Date_Démarrage : </strong></div>
                </td>
                <td>
                  <div type="text" id="demarrageAtt" name="trip-start"
                    style="border:none; width: 300px; position:absolute;" />
                </td>
              </tr>


              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Délai par Mois : </strong></div>
                </td>
                <td>
                  <div type="number" style="border:none;" id="delaiAtt" readonly
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Délai par Jour : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="delaijrAtt" readonly
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Type BC : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="typebcAtt" readonly
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Zone : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="zoneprAtt"
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

            </table>
          </div>
        </div>
      </div>

      

      <div class="col-md-6">
        <div class="card flex-md-row">
          <div class="card-body ">
            <table border="0" width="100%">

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Projet : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="nomprojetAtt" style="font-size: 15px; width: 200px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Direction : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="directionAtt" readonly
                    style="width: 300px; height: 35px;" />
                </td>

              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Pole :</strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="poleAtt" readonly style="width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Sous_Traitant :</strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="soustraitantAtt" readonly
                    style="width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Opérations/Tâches :</strong></div>
                </td>
                <td>
                  <!--<div type="text" style="border:none;"  id="tacheAtt" readonly style="width: 300px; height: 35px;"/>-->
                  <select id="tacheAtt" class="form-control" style="width: 300px; height: 35px;"
                    placeholder="Choisir un Sous_Traitant">

                  </select>
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Sous_Opérations :</strong></div>
                </td>
                <td>
                  <textarea id="sous_opAtt" class="md-textarea form-control"
                    style="width: 100%; margin-top: 0px; margin-bottom: 0px; height: 87px;" placeholder=""></textarea>
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>TVA% :</strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="tvaprojetAtt" style="width: 300px; height: 35px;" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

    </br>

    <div class="card-body forTheAttachement" style="display:none;">
        <table style="border:0; border-color:black;">
          <tr>
            <td>
              <div class="mb-1 text-muted"><strong>Pour les prix des attachements, vous ne devait pas dépassé le prix de devis de la somme est :</strong></div>
            </td>
            <td><strong><div type="text" style="border:none;" id="prixdeprix"
                    style="position:absolute; width: 300px; height: 35px;" /></strong></td>
          </tr>
        </table>
      </div>
      </br>

    <table id="tableauxAtt" class="table table-striped table-bordered" style="border:1px; border-color:black;width:100%">
      <thead>
         <tr>
          <th class="text-center" style="width: 8%;">Code Article</th>
          <th class="text-center" style="width: 10%;">Article</th>
          <th class="text-center" style="width: 5%;">Unité</th>
          <th class="text-center" style="width: 8%;">Site</th>
          <th class="text-center" style="width: 7%;">QTE</th>
          <th class="text-center" style="width: 4%;" id="QTE_TRAIT">QTE_TRAIT</th>
          <th class="text-center" style="width: 7%;" id="QTE_RESTE">QTE_RESTE</th>
          <th class="text-center" style="width: 7%;">Prix Unitaire</th>
          <th class="text-center" style="width: 7%;">Prix Tot HT</th>
          <th class="text-center" style="width: 10%;">Prix Tot TTC</th>
    
        </tr>
      </thead>
    </table>

      <div style="margin:auto; display:none;" id="consommationDonnees"><strong style="margin:auto;font-size: large; color: chocolate;" >Vous avez consommés tout les quantités</strong></div>
    </br>

    <ul id="pagination-demo" class="pagination-sm"></ul>

    <div class="row">
      <div class="col-lg-4 col-sm-5">

      </div>
      <div class="col-lg-4 col-sm-5 ml-auto">
        <table class="table table-clear">
          <tbody>

            <tr>
              <td class="left">
                <div class="form-group">
                  <strong>Montant HT : </strong>
              </td>

              <td class="right">
                <div class="form-control" style="border-color: black; width:150px; text-align:center;" type="text"
                  name="number" value="" readonly id="htAtt" />
              </td>
              <td class="right">
                <p>DT</p>
              </td>
            </tr>

            <tr>
              <td class="left">
                <div class="form-group">
                  <strong>TVA : </strong>
              </td>

              <td class="right">
                <div class="form-control" style="border-color: black; width:150px; text-align:center;" type="text"
                  name="number" value="" readonly id="tvaAtt" />
              </td>
              <td class="right">
                <p>DT</p>
              </td>
            </tr>

            <tr>
              <td class="left">
                <div class="form-group">
                  <strong>Montant TTC : </strong>
              </td>

              <td class="right">
                <div class="form-control" style="border-color: black; width:150px; text-align:center;" type="text"
                  name="number" value="" readonly id="ttcAtt" />
              </td>
              <td class="right">
                <p>DT</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>



    <table border="0">
      <tr>
        <td><strong>Arrétée la somme à : </strong></td>
        <td>
          <div id="prix_en_word">&nbsp;&nbsp;&nbsp;</div>
        </td>
      </tr>
    </table>

    </br>
    <hr />

    <div class="mb-1 text-muted"><strong>Signatures:</strong></div><br /><br />

    <div class="row mb-2">
      <div class="col-md-6">
        <center>
          <div class="mb-1 text-muted"><strong> SOTETEL</strong></div>
        </center><br />
      </div>

      <div class="col-md-6">
        <center>
          <div class="mb-1 text-muted"><strong>Sous_Traitant</strong></div>
        </center><br />
      </div>
    </div>
    </br>
    </br>


    <div class="toolbar hidden-print">
      <div class="text-center">
        <button id="BoutonValiderAttachement" onclick="return false;" type="submit" class="btn btn-info">Valider
          l'attachement</button>
      </div>
      <div class="text-right">
        <button id="printInvoiceAtt" style="display:none;" type="submit" onclick="return false;"
          class="btn btn-info">Enregistrer l'attachement</button>
      </div>
    </div>

  </div>



  <div id="overlay">
    <div id="popup">
      <div class="form-group">
        <span class="popuptext" id="myPopup">Votre attachement est en cours d'enregistrement... Merci de patienter. Ne
          quitter pas la page <span class="glyphicon glyphicon-refresh glyphicon-spin"></span></span>
      </div>
    </div>
  </div>



  <!-- Tableau des attachements crées -->
  <!-- Consulter attachements -->



  <div class="containerAttachement1" id="customersAtt1" style=" margin:2% 3% ;background-color:  #faf7f7;padding: 15px;">
    <div class="card">
      <header>
        <div class="row">
          <div class="col">
            <img src="/sites/PWA/_catalogs/masterpage/sotetel.png" width="200" height="80" data-holder-rendered="true" />
          </div>

          <div class="title">
            <div style="font-size: 35pt; font-family: auto; text-align: center;">
              Attachement
            </div>
            <div id="supprimeAttachement" style="font-size: 30pt; font-family: auto; color:red; text-align: center;">
              Supprimé
            </div>
            <strong><input type="text" readonly id="UniqueCodeAtt1"
                style=" font-size: 13px; font-weight: bolder;width:40px; background-color:white; border:none;" />/<input
                type="text" readonly id="pcode1Att1"
                style=" font-size: 13px; font-weight: bolder;width:50px; background-color:white; border:none;" />/<input
                type="text" readonly id="codeoracleenteteAtt1"
                style=" font-size: 13px; font-weight: bolder;width:80px; background-color:white; border:none;" />/
              SOTETEL</strong>
          </div>


          <div class="col company-details">
            <center>
              <h5 style="font-family:auto;">Société Tunisienne d'Entreprise de</h5>
              <h5 style="font-family:auto;">Télécommunication Service Sous Traitance</h5></br>
              <input type="date" id="dateAtt1" readonly style="border:none; width:50%; float:right; margin-right: 5%">
            </center>
          </div>
        </div>
      </header>
    </div>
    </hr>

    <br>


    <div class="row mb-2">

      <div class="col-md-6">
        <div class="card flex-md-row ">
          <div class="card-body">
            <table border="0" width="100%">

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Code_Oracle : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="codeoracleAtt1" readonly
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Chef Projet : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none; position:absolute;" id="chefprojetAtt1"
                    style="width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Date_Démarrage : </strong></div>
                </td>
                <td>
                  <div type="text" id="demarrageAtt1" name="trip-start"
                    style="border:none; width: 300px; position:absolute;" />
                </td>
              </tr>


              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Délai par Mois : </strong></div>
                </td>
                <td>
                  <div type="number" style="border:none;" id="delaiAtt1" readonly
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Délai par Jour : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="delaijrAtt1" readonly
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Type BC : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="typebcAtt1" readonly
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Zone : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="zoneprAtt1"
                    style="position:absolute; width: 300px; height: 35px;" />
                </td>
              </tr>

            </table>
          </div>
        </div>
      </div>



      <div class="col-md-6">
        <div class="card flex-md-row">
          <div class="card-body ">
            <table border="0" width="100%">

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Projet : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="nomprojetAtt1" style="font-size: 15px; width: 200px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Direction : </strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="directionAtt1" readonly
                    style="width: 300px; height: 35px;" />
                </td>

              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Pole :</strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="poleAtt1" readonly style="width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Sous_Traitant :</strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="soustraitantAtt1" readonly
                    style="width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Opérations/Tâches :</strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="tacheAtt1" readonly style="width: 300px; height: 35px;" />
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>Sous_Opérations :</strong></div>
                </td>
                <td>
                  <textarea id="sous_opAtt1" class="md-textarea form-control" readonly
                    style="border: none; background-color:white; width: 100%; height: 87px;" placeholder=""></textarea>
                </td>
              </tr>

              <tr height="40px">
                <td>
                  <div class="mb-1 text-muted"><strong>TVA% :</strong></div>
                </td>
                <td>
                  <div type="text" style="border:none;" id="tvaprojetAtt1" style="width: 300px; height: 35px;" />
                </td>
              </tr>

            </table>
          </div>
        </div>
      </div>
    </div>
    </br>


    <table id="tableauxAtt1" class="table table-bordered table-sm" style="border:1px; border-color:black;width:100%">
      <thead>
       <tr>
          <th class="text-center" style="width: 8%;">Code Article</th>
          <th class="text-center" style="width: 10%;">Article</th>
          <th class="text-center" style="width: 5%;">Unité</th>
          <th class="text-center" style="width: 8%;">Site</th>
          <th class="text-center" style="width: 7%;" id="qte_trait_hide">QTE</th>
          <th class="text-center" style="width: 4%;">QTE_TRAIT</th>
          <th class="text-center" style="width: 7%;" id="qte_reste_hide">QTE_RESTE</th>
          <th class="text-center" style="width: 7%;">Prix Unitaire</th>
          <th class="text-center" style="width: 7%;">Prix Tot HT</th>
          <th class="text-center" style="width: 10%;">Prix Tot TTC</th>
    
        </tr>
      </thead>
    </table>



    <ul id="pagination-demo" class="pagination-sm"></ul>

    <div class="row">
      <div class="col-lg-4 col-sm-5">

      </div>
      <div class="col-lg-4 col-sm-5 ml-auto">
        <table class="table table-clear">
          <tbody>

            <tr>
              <td class="left">
                <div class="form-group">
                  <strong>Montant HT : </strong>
              </td>

              <td class="right">
                <div class="form-control" style="border-color: black; width:150px; text-align:center;" type="text"
                  name="number" value="" readonly id="htAtt1" />
              </td>
              <td class="right">
                <p>DT</p>
              </td>
            </tr>

            <tr>
              <td class="left">
                <div class="form-group">
                  <strong>TVA : </strong>
              </td>

              <td class="right">
                <div class="form-control" style="border-color: black; width:150px; text-align:center;" type="text"
                  name="number" value="" readonly id="tvaAtt1" />
              </td>
              <td class="right">
                <p>DT</p>
              </td>
            </tr>

            <tr>
              <td class="left">
                <div class="form-group">
                  <strong>Montant TTC : </strong>
              </td>

              <td class="right">
                <div class="form-control" style="border-color: black; width:150px; text-align:center;" type="text"
                  name="number" value="" readonly id="ttcAtt1" />
              </td>
              <td class="right">
                <p>DT</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <table border="0">
      <tr>
        <td><strong>Arrétée la somme à : </strong></td>
        <td>
          <div id="prix_en_word1">&nbsp;&nbsp;&nbsp;</div>
        </td>
      </tr>
    </table>
    </br>
    <hr />


    <div class="mb-1 text-muted"><strong>Signatures:</strong></div><br /><br />

    <div class="row mb-2">
      <div class="col-md-6">
        <center>
          <div class="mb-1 text-muted"><strong> SOTETEL</strong></div>
        </center><br />
      </div>

      <div class="col-md-6">
        <center>
          <div class="mb-1 text-muted"><strong>Sous_Traitant</strong></div>
        </center><br />
      </div>
    </div>
    </br>
    </br>


    <div class="toolbar hidden-print">
      <div class="text-right">
        <button id="printInvoiceAtt1" data-toggle="tooltip" title="Imprimer l'attachement" class="btn btn-info "
          style="color:white; border-radius: 5px;" type="submit"><i class="fa fa-print fa-2x"></i></button>
      </div>
    </div>
  </div>
</div>

<!--  Listes des devis enregistrés pour un chef de projet-->
<div id="showdata" style="position:relative;">

  <div id="headercolor">
    <div>
      <small class="smallRisks">
        Listes des devis enregistrés pour un chef de projet
      </small>
      <select id="selectTable" name="SelectedName" onchange="myFunction2();">
        <option value="">Choisir un Etat Devis</option>
        <option value="Approuvé">Approuvé</option>
        <option value="En cours">En cours</option>
        <option value="Rejeté">Rejeté</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="card flex-md-row ">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-12">
              <div class="card-box table-responsive">
                <input type="text" style="float:right; width:20%;margin-bottom:1%;" id="search" class="form-control"
                  placeholder="Chercher par valeur" />

                <table id="tableau" border="2" class="table-info table">
                  <thead>
                    <tr>
                      <th></th>
                      <th style="display:none;">Etat devis</th>
                      <th style="display:none;">Nom de Projet</th>
                      <th>ID Devis</th>
                      <th style="display:none;">Code Oracle Projet</th>
                      <th>Réalisation</th>
                      <th style="display:none;">Chef de Projet</th>
                      <th>Sous_Traitant</th>
                      <th>Commentaires</th>
                      <th>Site</th>
                      <th>Prix HT</th>
                      <th>Prix TVA</th>
                      <th>Prix TTC</th>
                      <th>Etat devis</th>
                      <th>Devis</th>
                      <th>Attachement</th>
                      <th>BC</th>
                    </tr>
                  </thead>

                  <tbody></tbody>

                </table>
                <div id="rejeteChefProjet"
                  style="font-size: 30pt; font-family: auto; color:red; text-align: center; display:none;">
                  Vous n'avez pas le droit de consulter les devis !
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




  <div id="overlayBC">
      <div id="popupBC">
        <div id="close">X Fermer</div>
        <div class="form-group">
                        <label for="date" class="control-label">N° Facture*</label>
                        <input type="text" class="form-control" name="nom" id="nfact" placeholder="N° Fact" required />
                    </div>

                        

                    <div class="form-group">
                        <label for="text" class="control-label">Date facture*</label>
                        <input type="date" class="form-control" name="prenom" id="datefact" placeholder="Date facture" required />
                    </div>
                        
                       

                    <div class="form-group">
                        <label for="text" class="control-label">Numéro bande de commande*</label>
                        <input type="text" class="form-control" name="tel" id="numbc" placeholder="N° BC" required />
                    </div>

                       

                    <div id="dateFormulaire" class="form-group">
                        <label for="date" class="control-label">N° DA*</label>
                        <input type="text" class="form-control" name="societe" id="numda" placeholder="N° DA" required />
                    </div>

                  
                    <div align="right" class="form-group">
                        <button type="submit" id="modifiercmd" name="enregistrer" class="btn btn-info" onclick='return false;'>Modifier</button>
                        <button type="submit" id="enregistrercmd" name="enregistrer" class="btn btn-primary" onclick='return false;'>Enregistrer</button>
                    </div>
      </div>
    </div>




</div>


<!-- Show Attachement for devis Sotetel -->

<div id="showdataAttachement" style="position:relative; ">
  <div id="headercolor">
    <div>
      <small class="smallRisks">
        Listes des attachements
      </small>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="card flex-md-row" style="">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-12">
              <div class="card-box table-responsive">
                <button class="black" id="boutonBlack" style="float: right;" onclick="return false;">Ajouter un
                  attachment</button>
                <table id="tableauAttachement" border="1" class="table-info table">
                  <thead>
                    <tr>
                      <th></th>
                      <th style="width: 15%;">Code attachement</th>
                      <th>Code devis</th>
                      <th>Montant HT</th>
                      <th>Montant TVA</th>
                      <th>Montant TTC</th>
                      <th>Etat Attachement</th>
                      <th>Consulter</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                  <tfoot>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="overlay">
  <div id="popup">
    <div class="form-group">
      <span class="popuptext" id="myPopup">Votre Attachement est en cours d'enregistrement... Merci de patienter. Ne
        quitter pas la page <span class="glyphicon glyphicon-refresh glyphicon-spin"></span></span>
    </div>
  </div>
</div>
<script type="text/javascript" src="http://cdn.grapecity.com/spreadjs/hosted/scripts/gc.spread.sheets.all.10.1.0.min.js"></script>
<script type="text/javascript" src="http://cdn.grapecity.com/spreadjs/hosted/scripts/interop/gc.spread.excelio.10.1.0.min.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/bootstrap.3.4.0.min.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/bootstrap.bundle.min.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/bootstrap-select.min.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/jquery.2.1.4.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/jquery.min.js"></script>
<script type="text/javascript" src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Liste_recuperation_data/File_CSS/moment-with-locales.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Liste_recuperation_data/File_CSS/bootstrap.min.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/jquery-34.0.min.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/jquery-2.1.0.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.js"></script>
<script type="text/javascript">





  var ProjectUID;

  ExecuteOrDelayUntilScriptLoaded(getProjectUIDProperty, "sp.js");
  function getProjectUIDProperty() {
    var ctx = new SP.ClientContext.get_current();
    this.web = ctx.get_web();
    this.props = this.web.get_allProperties();
    ctx.load(this.web);
    ctx.load(this.props);
    ctx.executeQueryAsync(Function.createDelegate(this, gotProperty), Function.createDelegate(this, failedGettingProperty));
  }
  function gotProperty() {
    ProjectUID = this.props.get_item('MSPWAPROJUID');
    LoadProject();
    //CodeOracle();
    //ChefProjet();
    //Directions();
    //ParentTaskNameFunction();

   $(document).ready(function () {
      $('#tableau').on('click', '#AttachDevis', function () {
        var type_bc_cmd = $(this).closest('tr').find('#type_bc_cmd').text();
        console.log("la type de commande est " + type_bc_cmd);
        if(type_bc_cmd=="Commande Ouverte")
        {
        var urlAllProjetTask = _spPageContextInfo.webServerRelativeUrl + "/_api/ProjectData/[en-US]/Projects(guid'" + ProjectUID + "')/Tasks?$select=TaskName&$filter=TaskIsSummary%20eq%20true";
          LoadForOperationMain(urlAllProjetTask);

        }
        else
        {
          $('#tacheAtt').prop('disabled', true);
        }
        });
    });
    

    $(document).ready(function () {
      $('#tableau').on('click', '#toggle', function () {
        var zoneNouveau = $(this).closest('tr').find('#zoneUrlPr').text();
        var EtatDevisShow = $(this).closest('tr').find('#EtatDevisShow').text();


        if (EtatDevisShow == "Rejeté") {
          var urlAss = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Assignments?$select=ResourceName,TaskName,ResourceId,TaskId&$filter=ProjectId%20eq%20guid%27" + ProjectUID + "%27";
          var urlTaskName = _spPageContextInfo.webServerRelativeUrl + "/_api/ProjectData/[en-US]/Projects(guid'" + ProjectUID + "')/Tasks?$select=TaskName,Zone,TaskId&$filter=Zone eq '" + zoneNouveau + "'";

          getZone(urlTaskName, urlAss);
        }


      });
    });






  }

  function failedGettingProperty() {
    alert('Error: ' + args.get_message());
  }

  function expandTextarea(id) {
    document.getElementById(id).addEventListener('keyup', function () {
      this.style.overflow = 'hidden';
      this.style.height = 0;
      this.style.height = this.scrollHeight + 'px';
    }, false);
  }

  expandTextarea('sous_opAtt');

  $(document).ready(function () {
    $('#loadIdUpdate').click(function () {
      $('#overlay1').fadeIn(310);
    });
  });

  $(document).ready(function () {
    $('#loadIdUpdate').click(function () {
      setTimeout(function () {
        updatelistitem(); createItem(); createItemUpdateAttachement(); updatelistitemDirection();
      }, 3000);
      setInterval('location.reload()', 5000);
    });
  });

  $(document).ready(function () {
    $('#printInvoiceAtt').click(function () {
      $('#overlay').fadeIn(300);
    });
  });

  $(document).ready(function () {
    $('#printInvoiceAtt').click(function () {
      Enregistrer_Attachement();
      createItemAtt();
      $("#printInvoiceAtt").hide();
      setInterval('location.reload()', 15000);

    });
  });



  var loginName = "";
  var userid = _spPageContextInfo.userId;
  setTimeout(GetCurrentUser, 2000);

  function GetCurrentUser() {
    var requestUri = _spPageContextInfo.webServerRelativeUrl + "/_api/web/getuserbyid(" + userid + ")";

    var requestHeaders = { "accept": "application/json;odata=verbose" };

    $.ajax({
      url: requestUri,
      contentType: "application/json;odata=verbose",
      headers: requestHeaders,
      success: onSuccess,
      error: onError
    });
  }
  var nomAuthen;
  function onSuccess(data, request) {
    var loginName = data.d.Title;
    window.nomAuthen = loginName;
    var nom = document.getElementById('ProjectOwner').innerHTML;
    if ((nom != loginName) && (loginName != "SAMEH; BENZARTI") && (loginName != "; Awatef Mednini") && (loginName != "TAOUFIK; ZITOUN") && (loginName != "admint") && (loginName != "Sakouhi; Arbia") && (loginName != "Nacef; Houda")&&(loginName!="Anoun; Naouel")) {
      $('#selectTable').hide();
      $('#search').hide();
      $('.rows').hide();
      //$('#rejeteChefProjet').show();
      $(this).closest('tr').find('#toggleBC').attr("disabled", true);
              $(this).closest('tr').find('#toggleBC').css('background-color', 'gray');
              $(this).closest('tr').find('#toggleBC').css('color', 'white');
    }
    if (loginName == "SAMEH; BENZARTI") {
      $('#tableau td:nth-child(1)').hide();
      $('#tableau th:nth-child(1)').hide();
      $('#boutonBlack').hide();
      window.nomAuthen = loginName;
      $(document).ready(function () {
        $('#tableau tr').each(function () {

          var thisId = $(this).closest('tr').find('#test').val();

          if ((thisId == "Rejeté") || (thisId == "En cours")) {
            $(this).closest('tr').find('#toggle').attr("disabled", true);
            $(this).closest('tr').find('#toggle').css('background-color', 'gray');
          }



        });
      });

    }



  }


  function onError(error) {
    alert(error);
  }



  $(document).ready(function () {
    $('#relancer').click(function () {
      $("#tableaux input:checkbox").each(function () {
        if (this.checked == false) {
          $(this).parent().parent().remove();
        }
        return true;
      });
    });
  });


  $(document).ready(function () {
    $("#search").keyup(function () {
      search_table($(this).val());
    });

    function search_table(value) {
      $("#tableau tbody tr").each(function () {
        var found = "false";
        $(this).each(function () {
          if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            found = "true";
          }

        });
        if (found == 'true') {
          $(this).show();
        }
        else {
          $(this).hide();
        }

      });
    }

  });

  $(document).ready(function () {
    $(window).keydown(function (event) {
      if (event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });
  });





  $('.containerdevis').hide();
  $('#Approuve').hide();
  $('#supprime').hide();
  $('#printInvoice').hide();
  $('#rejete').hide();
  $('#relancer').hide();
  $('#loadi').hide();
  $("#supprimeAttachement").hide();

  $('#showdataAttachement').hide();
  $('.containerAttachement').hide();
  $('.containerAttachement1').hide();

  var datedd = "";
  var etatdevisVal = [];
  //var tt="178";



  function myFunction2() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("selectTable");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableau");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }





  var pcode;
  var nomprojetLink;
    var LinkUrlDevisEnregistrer = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Devis_Enregistrer')/items";
    var PaginationUrl = PaginationUrl ||[];
  function RecuperationDataTables() {

    $.ajax({
      url: LinkUrlDevisEnregistrer,

      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        PaginationUrl = PaginationUrl.concat(data.d.results);
        if (data.d.__next) {
            LinkUrlDevisEnregistrer = data.d.__next;
            RecuperationDataTables();
          }
        //var dataResults = data.d.results;

        $.each(PaginationUrl, function (key, value) {

          var nomprojet = value.nomprojet;

          //Load dynamic project Name
          window.nomprojetLink = nomprojet;

          var CodeOracle = value.codeoracle
          var datedevis = value.dateDevis;
          var chefProjet = value.chefprojet;
          var sous_traitant = value.sous_traitant;
          var Commentaires = value.commentaire;
          var siteDevis = value.site;
          if(siteDevis==null)
            {
              siteDevis="";
            }
          var Montant = value.montant_ht;
          var tva = value.tva;
          var montant_ttc = value.montant_ttc;
          var etatdevis = value.Approbation;
          var tva_montant = value.tva_montant;
          var uCode = value.uniqueCode;
          var IdentifiantListe = value.ID;
          var zone = value.Zone;

          window.pcode = uCode;

          var etat;
          var aprouv = '<i class="fa fa-check fa-2x" aria-hidden="true" style="color: #4caf50;"></i>';
          var Encours = '<i class="fa fa-spinner fa-2x" aria-hidden="true" style="color: #ff6a00;"></i>';
          var Rejet = '<i class="fa fa-times fa-2x" aria-hidden="true" style="color: #FF0000;"></i>';
          var supp = '<i class="fa fa-trash fa-2x" aria-hidden="true" style="color: #FF0000;"></i>';

          if (tva_montant == null) {
            var tva_montant = "";
          }
          else {
            var tva_montant = tva_montant;
          }

          var type_bc_cmd = value.type_bc;



          var id = value.uniqueCode;


          window.test = uCode;


          moment.locale('fr');
          var datedevis = moment(datedevis).format('L');
          datedd = datedevis;

          etatdevisVal = etatdevis;


          if (etatdevis == "En cours") {
            etat = Encours;
          } else if (etatdevis == "Approuvé") {
            etat = aprouv;

          } else if (etatdevis == "Rejeté") {
            etat = Rejet;

          }
          if(etatdevis=="Supprimé")
          {
            etat = supp;
          }

          if (Commentaires == null) {
            var Commentaires = "";
          }




          if (nomprojet != null) {


            var tr;
            tr = $("<tr class='rowClasse'/>");
                tr.append("<td><button data-toggle='tooltip' title='Supprimer' id='supprDevis' class='delete ' value='" + IdentifiantListe + "' onclick='return false;' style='color:white; background-color:red; border-radius: 5px;' ><i class='fa fa-trash-o fa-lg'></i> </button></td>");

                tr.append("<td style='display:none;'>" + etatdevis + "</td>");
                tr.append("<td id='npr' style='display:none;'>" + nomprojet + "</td>");
                tr.append("<td><input type='button' id='unicodedevis' class='btn btn-warning' value='" + uCode + "'/></td>");
                tr.append("<td style='display:none;'>" + uCode + "</td>");
                tr.append("<td style='display:none;'>" + CodeOracle + "</td>");
                tr.append("<td>" + datedevis + "</td>");
                tr.append("<td id='ProjectOwner' style='display:none;'>" + chefProjet + "</td>");
                tr.append("<td>" + sous_traitant + "</td>");
                tr.append("<td>" + Commentaires + "</td>");
                tr.append("<td>" + siteDevis + "</td>");
                tr.append("<td>" + Montant + "</td>");
                tr.append("<td>" + tva_montant + "</td>");
                tr.append("<td>" + montant_ttc + "</td>");
                tr.append("<td style='display:none;'><input type='button' id='test'  class='btn btn-warning' value='" + etatdevis + "'/></td>");
                tr.append("<td data-toggle='tooltip' title='" + etatdevis + "'>" + etat + "</td>");
                tr.append("<td><button data-toggle='tooltip' title='Consulter' class='fa fa-chevron-right' id='toggle' style='color:white; background-color:#4caf50; border-radius: 5px;' onclick='return false;' value='" + id + "'><i class='fa fa-chevron-right'></i></button></td>");
                tr.append("<td><button data-toggle='tooltip' title='Consulter' class='fa fa-chevron-right' id='AttachDevis' style='color:white; background-color:#4caf50; border-radius: 5px;' onclick='return false;' value='" + id + "'><i class='fa fa-chevron-right'></i></button></td>");
                tr.append("<td id='zoneUrlPr' style='display:none;'>" + zone + "</td>");
                tr.append("<td id='EtatDevisShow' style='display:none;'>" + etatdevis + "</td>");
                tr.append("<td><button data-toggle='tooltip' title='Consulter' class='fa fa-chevron-right' id='toggleBC' style='color:white; background-color:#4caf50; border-radius: 5px;' onclick='return false;' value='" + id + "'><i class='fa fa-chevron-right'></i></button></td>");
                tr.append("<td id='type_bc_cmd' style='display:none;'>" + type_bc_cmd + "</td>");
            $('#tableau').append(tr);



          }



        });

$(document).ready(function() {
  $('#tableau').on('click', '#toggleBC', function () {
    $('#overlayBC').fadeIn(300);  
    var identifCmd=$(this).closest('tr').find('#toggleBC').val();
    
    GetAllCmdData(identifCmd);
  });
  $('#close').click(function() {
    $('#overlayBC').fadeOut(300);
  });
});


        var tbody = $('#tableau tbody');
        tbody.html($('tr', tbody).get().reverse());

        $(document).ready(function () {
          $('#tableau tr').each(function () {

            var thisId = $(this).closest('tr').find('#test').val();
           
            //$("#boutonBlack").attr("disabled", true);

            if (thisId == "Approuvé") {
              $(this).closest('tr').find('#supprDevis').attr("disabled", true);
              $(this).closest('tr').find('#supprDevis').css('background-color', 'gray');

            }


            if ((thisId != "Approuvé")&&(thisId != "Supprimé")) {
              $(this).closest('tr').find('#AttachDevis').attr("disabled", true);
              $(this).closest('tr').find('#AttachDevis').css('background-color', 'gray');
              $(this).closest('tr').find('#AttachDevis').css('color', 'white');


              $(this).closest('tr').find('#toggleBC').attr("disabled", true);
              $(this).closest('tr').find('#toggleBC').css('background-color', 'gray');
              $(this).closest('tr').find('#toggleBC').css('color', 'white');

            }



            if (thisId == "Supprimé") {
              $(this).closest('tr').find('#supprDevis').attr("disabled", true);
              $(this).closest('tr').find('#supprDevis').css('background-color', 'gray');
              $(this).closest('tr').find('#toggleBC').attr("disabled", true);
              $(this).closest('tr').find('#toggleBC').css('background-color', 'gray');
              $(this).closest('tr').find('#toggleBC').css('color', 'white');
              

            }

            /*
            if (thisId != "Supprimé") {
              $(this).closest('tr').find('#AttachDevis').attr("disabled", true);
              $(this).closest('tr').find('#AttachDevis').css('background-color', 'gray');
              $(this).closest('tr').find('#AttachDevis').css('color', 'white');


              $(this).closest('tr').find('#toggleBC').attr("disabled", true);
              $(this).closest('tr').find('#toggleBC').css('background-color', 'gray');
              $(this).closest('tr').find('#toggleBC').css('color', 'white');

            }*/



          });
        });


      }
    });
  }
  _spBodyOnLoadFunctionNames.push("RecuperationDataTables");



  /*var nameOfProject;
  var theIdOfProject;*/

  function RecuperationDataValue(thisId2) {

    $.ajax({
      url: _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Liste_Devis_Traites')/items?&$filter=uniqueCode%20eq%20'" + thisId2 + "'",

      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        var dataResults = data.d.results;


        $.each(dataResults, function (key, value) {
          var uniqueCodes = value.uniqueCode;
          var nameprojet = value.NomProjet;

          var id = value.ID;
          var theIdOfProject = id;
          var nameOfProject = nameprojet;
          deleteListItemDevisTraite(theIdOfProject)
        });
      }
    });
  }
  _spBodyOnLoadFunctionNames.push("RecuperationDataValue");


  /*var loadIdUpdate;*/
  function ConsulterLoadId(thisIdDDD) {

    $.ajax({
      url: _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Liste_Devis_Traites')/items?&$filter=uniqueCode%20eq%20'" + thisIdDDD + "'",

      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        var dataResults = data.d.results;


        $.each(dataResults, function (key, value) {
          var uniqueCodes = value.uniqueCode;
          var nameprojet = value.NomProjet;
          var id = value.ID;
          var loadIdUpdate = id;
          var ddd = $('#loadIdUpdate').val(loadIdUpdate);


        });
      }
    });
  }
  _spBodyOnLoadFunctionNames.push("ConsulterLoadId");


  var itemsToDelete = [];

  function getItemsToDelete(thid777) {

    //You might have to modify this so it filters correctly on your columns
    var requestUrl = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getByTitle('Liste_Articles')/items?$filter=uniqueCode eq '" + thid777 + "'";

    //Return and ajax request (promise)
    return $.ajax({
      url: requestUrl,
      type: "GET",
      headers: {
        "accept": "application/json;odata=verbose",
      },
      success: function (result) {
        var items;
        $.each(result.d.results, function (index, item) {
          //Note that we push the ajax-request to the array
          //that has been declared a bit down



          /*if document.getElementById('relancer').clicked == true
          {
            deleteItemUniqueCode(item);
          }*/

          itemsToDelete.push(deleteItemUniqueCode(item));


        });
      },
      error: function (error) {
        //Something went wrong when retrieving the list items
      }
    });


  }



  function deleteItemUniqueCode(item) {
    //All SP.ListItems holds metadata that can be accessed in the '__metadata' attribute
    var requestUrl = item.__metadata.uri;

    return $.ajax({
      url: requestUrl,
      type: "POST",
      headers: {
        "accept": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
        "IF-MATCH": item.__metadata.etag,
        "X-HTTP-Method": "DELETE"
      },
      success: function () {
        //console.log("Item with ID " + item.__metadata.id + " successfully deleted!");
      },
      error: function (error) {
        //Something went wrong when trying to delete the item
      }
    });

  }




  var itemsToDeleteAtt = [];

  function getItemsToDeleteAtt(thid777) {

    //You might have to modify this so it filters correctly on your columns
    var requestUrl = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getByTitle('Liste_attachement')/items?$filter=uniqueCode eq '" + thid777 + "'";

    //Return and ajax request (promise)
    return $.ajax({
      url: requestUrl,
      type: "GET",
      headers: {
        "accept": "application/json;odata=verbose",
      },
      success: function (result) {
        var items;
        $.each(result.d.results, function (index, item) {
          //Note that we push the ajax-request to the array
          //that has been declared a bit down



          /*if document.getElementById('relancer').clicked == true
          {
            deleteItemUniqueCode(item);
          }*/

          itemsToDeleteAtt.push(deleteItemUniqueCodeAtt(item));


        });
      },
      error: function (error) {
        //Something went wrong when retrieving the list items
      }
    });


  }



  function deleteItemUniqueCodeAtt(item) {
    //All SP.ListItems holds metadata that can be accessed in the '__metadata' attribute
    var requestUrlAtt = item.__metadata.uri;

    return $.ajax({
      url: requestUrlAtt,
      type: "POST",
      headers: {
        "accept": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
        "IF-MATCH": item.__metadata.etag,
        "X-HTTP-Method": "DELETE"
      },
      success: function () {
        //console.log("Item with ID " + item.__metadata.id + " successfully deleted!");
      },
      error: function (error) {
        //Something went wrong when trying to delete the item
      }
    });

  }







  /*function runned()
  {
         $.when(getItemsToDelete()).then(function () {
           $.when.apply($, itemsToDelete).then(function(){
               //console.log("All items are deleted!");
           });
         });
 }*/
  //Declare an array of deferred objects that hold a delete request
  //for each item that is to be deleted




  $('#loadIdUpdate').on('click', function () {
    var thid = $(this).val();
    updatelistitemDirection(thid);
  });



  //Update for commande
    $('#enregistrercmd').on('click', function () {
    var thidCmd = $(this).val();
    updatelistitemBCDevis(thidCmd);
    $('#enregistrercmd').hide();

  });


    $('#modifiercmd').on('click', function () {
    document.getElementById('nfact').readOnly = false;
              document.getElementById('datefact').readOnly = false;
              document.getElementById('numbc').readOnly = false;
              document.getElementById('numda').readOnly = false;

  });

      $(document).ready(function () {
    $('#enregistrercmd').click(function () {
      setTimeout(function () {
        updatelistitemBCDevis();
        
      }, 3000);
      setInterval('location.reload()', 3100);
    });
  });

//-------------------------------------

  $('#relancer').on('click', function () {
    var thid777 = $(this).val();
    //alert(thid777);
    getItemsToDelete(thid777);
    getItemsToDeleteAtt(thid777);
  });




//Supprimer devis
  $(document).ready(function () {
    $('#tableau').on('click', '#supprDevis', function () {
      var thisDelete = $(this).closest('tr').find('#supprDevis').val();
      var thisId2 = $(this).closest('tr').find("#unicodedevis").val();


      //RecuperationDataValue(thisId2);
      deleteListItem(thisDelete);
      //getItemsToDelete(thisId2);
      //getItemsToDeleteAtt(thisId2);


      $(this).closest('tr').remove();
    });
  });

//Supprimer Attachement
  $(document).ready(function () {
    $('#tableauAttachement').on('click', '#supprAttachement', function () {
      //var $selectedRow = $(this).parent("td").parent("tr");
      var cliquer = $(this).closest('tr').find("#supprAttachement").val();
      var thisIdAttSupp = $(this).closest('tr').find("#ConsulterAttachDevis").val();
      UpdateListItemAttachement(cliquer);

      var valEtat =  document.getElementById("etatattachement").value;
      console.log(valEtat);

      return false;


      //console.log("Identifiant de attachement " + thisIdAtt);

      //RecuperationDataValue(thisId2);
      //getItemsToDelete(thisId2);
      //getItemsToDeleteAtt(thisId2);

        //$(this).closest('tr').remove();
    });
  });

function changeName()
{
  $(document).ready(function () {
    $('#tableauAttachement').on('click', '#supprAttachement', function () {
      var thisIdAttSuppr = $(this).closest('tr').find("#etatattachement").val("Supprimé");
      $(this).closest('tr').find('#supprAttachement').attr("disabled", true);
              $(this).closest('tr').find('#supprAttachement').css('background-color', 'gray');

    });
  });
/*  document.getElementById("etatattachement").value = "Supprimé";
  document.getElementById("etatattachement").innerHTML = "Supprimé";*/
}



  $(document).ready(function () {
    $('#tableau').on('click', '#toggle', function () {

      var thisId = $(this).closest('tr').find('#toggle').val();
      var thisIdDDD = $(this).closest('tr').find("#unicodedevis").val();
      var thisEtatDevis = $(this).closest('tr').find("#test").val();
      //mainfunctionEtatdevis(thisEtatDevis);
      ConsulterLoadId(thisIdDDD);
      RecuperationData(thisId);
      Rec1(thisId);
      ////console.log("1");
      $("#showdata").hide();
      $(".containerdevis").toggleClass("show");

    });

  });



  $(document).ready(function () {
    $('#tableau').on('click', '#AttachDevis', function () {

      var thisAttId = $(this).closest('tr').find("#AttachDevis").val();
      //var etatDevisSuppApp = $(this).closest('tr').find("#test").val();
      //console.log("Etat devis est " + etatDevisSuppApp);

     


          

      RecuperationDataTablesAttachement(thisAttId);
      //CalculSumAttachment(thisAttId);
      RecuperationIfExisteAttachement(thisAttId);
      $("#boutonBlack").val(thisAttId);
    });
  });







  //********************************************************************************************************************

  //Afficher le tableau de l'attachement
  $(document).ready(function () {
    $('#tableau').on('click', '#AttachDevis', function () {

      $("#showdata").hide();
      $("#showdataAttachement").show();
    
      var consultAtt = $(this).closest('tr').find("#test").val();

    if(consultAtt != "Supprimé")
    {
    $("#boutonBlack").click(function () {
      $("#showdataAttachement").toggleClass("hide");
      $(".containerAttachement").toggleClass("show");
      var thisAttId = $(this).val();
      var thisAttId1 = $(this).val();
       var unCode = 0;

      unCode = parseInt(document.getElementById('UniqueCodeAttDyn1AttLoaded').value);



       

      RecuperationDataAtt(thisAttId,thisAttId1,unCode);
      //RecuperationDataTableAttachement(thisAttId1);

      });

    }else
    {
      $("#boutonBlack").attr("disabled", true);
    }


    });



  });


  //******************************************************Consulter les attachements ******************************************


  $(document).ready(function () {
    $('#tableauAttachement').on('click', '#ConsulterAttachDevis', function () {

      var thisAttId = $(this).closest('tr').find("#ConsulterAttachDevis").val();
      RecuperationDataAttConsulting(thisAttId);
      

      $(".containerAttachement1").toggleClass("show");
      $("#showdataAttachement").hide();

    });
  });



  //********************************************************************************************************************


  //Devis Imprime

  document.getElementById("date").valueAsDate = new Date();

  document.getElementById("dateAtt").valueAsDate = new Date();

  document.getElementById("dateAtt1").valueAsDate = new Date();

  $("#printInvoice").click(function () {
    $('#printInvoice').hide();
    $('#relancer').hide();
    window.print($("#invoice").html());
  });


  $("#printInvoiceAtt1").click(function () {
    $('#printInvoiceAtt1').hide();
    window.print($("#invoice").html());
  });




  var IdentifiantListess;
  var IdentifiantListeArticle;
  var nomprojet;
  var etatdevisList;
  const ident = [];
  var ident1 = [];
  var theIdListe;
  function Rec1(tt) {
    var responseRecuperationDataTable = responseRecuperationDataTable || [];
    var urlRecup = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_Articles')/items?&$filter=uniqueCode%20eq%20'" + tt + "'";
    function RecuperationDataTable() {

      $.ajax({
        url: urlRecup,

        method: "GET",
        dataType: "json",
        headers: { Accept: "application/json;odata=verbose" },
        success: function (data) {
          responseRecuperationDataTable = responseRecuperationDataTable.concat(data.d.results);
          if (data.d.__next) {
            urlRecup = data.d.__next;
            RecuperationDataTable();
          }
          ////console.log("2");
          $.each(responseRecuperationDataTable, function (key, value) {
            var codearticle = value.code_article;

            if (codearticle != null) {
              var article = value.article;
              var unite = value.unite;
              var quantite = value.quantite;
              var prixunit = parseFloat(value.prix_unit).toFixed(3);
              var prixtotht = parseFloat(value.prix_tot_ht).toFixed(3);
              var prixtotttc = parseFloat(value.prix_tot_ttc).toFixed(3);
              var sarticle = value.site_article;
              var dateprix = value.date_creation;


              var theIIDD = value.Id;
              window.theIdListe = theIIDD;

              if (sarticle == null) {
                sarticle = "";
              }


              ident.push(value.Id);
              window.ident1.push(value.Id);

              //deleteMultipleItem(window.ident1);

              if (unite == null) {
                unite = "";
              }
              if (sarticle != "undefined") {
                var tr;
                tr = $("<tr class='rowArticles1'/>");
                tr.append("<td class='coders'>" + codearticle + "</td>");
                tr.append("<td class='resourceArticle' style='text-align:left; width: 40%'>" + article + "</td>");
                tr.append("<td class='unit'>" + unite + "</td>");
                tr.append("<td id='SiteText'>" + sarticle + "</td>");
                tr.append("<td >" + quantite + "</td>");
                tr.append("<td><input id='pu' type='text'  value=" + prixunit + " style='width: 80px; text-align:center; border:none;' readonly class='refresh_prices row_quantity'/></td>");
                tr.append("<td>" + prixtotht + "</td>");
                tr.append("<td>" + prixtotttc + "</td>");
                $('#tableaux').append(tr);
              }
            }




            //verifier();
          });


          $(document).ready(function () {
            $('#tableaux tr').each(function () {
              $(this).closest('tr').find('#checkboxListe').hide()
              var thisId = $('#test').val();
              if (thisId != "Rejeté") {
                $(this).closest('tr').find('#checkboxListe').hide();
              } else {
                $(this).closest('tr').find('#checkboxListe').show();
              }

            });
          });


          $('.rowArticles1').each(function () {
            var thisId = $(this).find('.coders').text();

            var $rowsToGroup = $(this).nextAll('tr').filter(function () {
              return ($(this).find('.coders').text() === thisId);

            });

            $rowsToGroup.each(function () {
              $(this).remove();
            });

          });



        }
      });
    }
    RecuperationDataTable();
  }

  //_spBodyOnLoadFunctionNames.push("RecuperationDataTable");







  var nomprojetTest = $('#nomprojet').text();

  var zoneArrtt = "";
  function RecuperationData(tt) {

    $.ajax({
      url: _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Devis_Enregistrer')/items?&$filter=uniqueCode%20eq%20'" + tt + "'",

      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        var dataResults = data.d.results;

        var listItemInfo = "";
        var listItemInfo1 = "";
        var listItemInfo2 = "";
        var listItemInfo3 = "";
        var listItemInfo4 = "";
        var listItemInfo5 = "";
        var listItemInfo6 = "";
        var listItemInfo7 = "";
        var listItemInfo8 = "";
        var listItemInfo9 = "";

        var listItemInfo10 = "";
        var listItemInfo11 = "";
        var listItemInfo12 = "";
        var listItemInfo13 = "";
        var listItemInfo14 = "";
        var listItemInfo15 = "";
        var listItemInfo16 = "";
        var listItemInfo17 = "";
        var listItemInfo18 = "";
        var listItemInfo19 = "";
        var listItemInfoZone = "";
        var listItemInfoUniqueId = "";

        $.each(dataResults, function (key, value) {
          var zonezzzz = value.Zone;
          var uniqueCode = value.uniqueCode;
          createItem(uniqueCode);
          createItemUpdateAttachement(uniqueCode);

          $('#relancer').val(uniqueCode);
          var etatdevis = value.Approbation;

          if (etatdevis === "En cours") {

            jQuery(document).bind("keyup keydown", function (e) {
              if (e.ctrlKey && e.keyCode == 80) {
                alert('Devis Non Encore Approuvé pour Imprimer');
                return false;
              }
            });
            document.oncontextmenu = new Function("return false");
            $(document).keydown(function (event) {
                if (event.keyCode == 123) { // Prevent F12
                    return false;
                } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
                    return false;
                }
            });
            $('#printInvoice').hide();
            $('#Approuve').show();
          }

          else {
            if (etatdevis === "Approuvé") {
              $('#printInvoice').show();
              $('#Approuve').hide();
            }
          }

          if(etatdevis=="Supprimé")
          {
            jQuery(document).bind("keyup keydown", function (e) {
              if (e.ctrlKey && e.keyCode == 80) {
                alert('Devis supprimé');
                return false;
              }
            });
            document.oncontextmenu = new Function("return false");
            $(document).keydown(function (event) {
                if (event.keyCode == 123) { // Prevent F12
                    return false;
                } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
                    return false;
                }
            });


            $('#Approuve').hide();
            $('#printInvoice').hide();
            $('#supprime').show();

          }

          if (etatdevis === "Rejeté") {


            window.zoneArrtt = zonezzzz;

            $('.rowArticles').each(function () {
              $('td:nth-child(9)').show();
            });


            jQuery(document).bind("keyup keydown", function (e) {
              if (e.ctrlKey && e.keyCode == 80) {
                alert('Devis Rejeté');
                return false;
              }
            });

            document.oncontextmenu = new Function("return false");
            $(document).keydown(function (event) {
                if (event.keyCode == 123) { // Prevent F12
                    return false;
                } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
                    return false;
                }
            });
            $('#printInvoice').hide();
            $('#rejete').show();
            $('#relancer').hide();

            $('#loadi').show();
            $('#loadi').fadeOut(8000);


            document.getElementById("sous_op").contentEditable = "true";

            document.getElementById("delaijr").contentEditable = "true";

            document.getElementById("delai").contentEditable = "true";

            document.getElementById("sous_op").contentEditable = "true";

            document.getElementById("siteprojet").contentEditable = "true";

          }


          var demande_Approbation = value.Approbation;

          var IdentifiantListes = value.Id;

          window.IdentifiantListess = IdentifiantListes;

          updatelistitem(window.IdentifiantListess);

          moment.locale('fr');


          var datedevis = value.dateDevis;
          var ddemarrage = moment(datedevis).format('L');

          if (datedevis == null) {
            var ddemarrage = "";
          }
          else {
            var datedevis = moment(datedevis).format('L');
          }

          var sous_op = value.sous_operation;
          if(sous_op==null)
          {
            sous_op="";
          }

          var zone = value.Zone;
          if (zone == null) {
            var zone = "";
          }
          else {
            var zone = zone;
          }


          var codeoracle = value.codeoracle;
          if (codeoracle == null) {
            var codeoracle = "";
          }
          else {
            var codeoracle = codeoracle;
          }


          var chefprojet = value.chefprojet;
          if (chefprojet == null) {
            var chefprojet = "";
          }
          else {
            var chefprojet = chefprojet;
          }
          //var zone = value.zone;


          var delai_jour = value.delai_jour;
          if (delai_jour == null) {
            var delai_jour = "";
          }
          else {
            var delai_jour = delai_jour;
          }


          var delai_mois = value.delai_mois;
          if (delai_mois == null) {
            var delai_mois = "";
          }
          else {
            var delai_mois = delai_mois;
          }

          var type_bc = value.type_bc;
          if (type_bc == null) {
            var type_bc = "";
          }
          else {
            var type_bc = type_bc;
          }


          var site = value.site;
          if (site == null) {
            var site = "";
          }
          else {
            var site = site;
          }


          var IdentifiantListes = value.Id;
          var nomprojet = value.nomprojet;
          window.nomprojets = nomprojet;

          if (nomprojet == null) {
            var nomprojet = "";
          }
          else {
            var nomprojet = nomprojet;
          }

          var direction = value.direction;
          if (direction == null) {
            var direction = "";
          }
          else {
            var direction = direction;
          }

          var pole = value.pole;
          if (pole == null) {
            var pole = "";
          }
          else {
            var pole = pole;
          }

          var sous_traitant = value.sous_traitant;
          if (sous_traitant == null) {
            var sous_traitant = "";
          }
          else {
            var sous_traitant = sous_traitant;
          }

          var tache = value.tache;
          if (tache == null) {
            var tache = "";
          }
          else {
            var tache = tache;
          }

          var tva = value.tva;
          if (tva == null) {
            var tva = "";
          }
          else {
            var tva = tva;
          }


          var montant_ht = value.montant_ht;
          if (montant_ht == null) {
            var montant_ht = "";
          }
          else {
            var montant_ht = montant_ht;
          }


          var tva_montant = value.tva_montant;
          if (tva_montant == null) {
            var tva_montant = "";
          }
          else {
            var tva_montant = tva_montant;
          }

          var montant_ttc = value.montant_ttc;
          if (montant_ttc == null) {
            var montant_ttc = "";
          }
          else {
            var montant_ttc = montant_ttc;
          }


          listItemInfo1 += tva;
          listItemInfo2 += tache;
          listItemInfo3 += sous_traitant;
          listItemInfo4 += pole;
          listItemInfo5 += direction;
          listItemInfo6 += nomprojet;

          listItemInfo7 += tva_montant;
          listItemInfo8 += montant_ht;
          listItemInfo9 += montant_ttc;
          listItemInfoZone += zone;


          listItemInfo10 += codeoracle;
          listItemInfo11 += chefprojet;
          //listItemInfo12 += zone;
          listItemInfo13 += ddemarrage;
          listItemInfo14 += delai_jour;
          listItemInfo15 += delai_mois;
          listItemInfo16 += type_bc;
          listItemInfo17 += site;

          listItemInfo18 += codeoracle;
          listItemInfo19 += sous_op;

          listItemInfoUniqueId += uniqueCode;

          document.getElementById('codeoracleentete').value = listItemInfo18;

          document.getElementById('pcode1').value = listItemInfoUniqueId;
          $('#codeoracle').html(listItemInfo10);
          $('#chefprojet').html(listItemInfo11);
          //$('#zone').html(listItemInfo12);

          $('#demarrage').html(listItemInfo13);
          $('#delaijr').html(listItemInfo14);
          $('#delai').html(listItemInfo15);

          $('#typebc').html(listItemInfo16);
          $('#zonepr').html(listItemInfoZone);
          $('#siteprojet').html(listItemInfo17);

          $('#sous_op').html(listItemInfo19);



          $("#tvaprojet").html(listItemInfo1);
          $("#tache").html(listItemInfo2);
          $("#soustraitant").html(listItemInfo3);
          $("#pole").html(listItemInfo4);
          $("#direction").html(listItemInfo5);
          $("#nomprojet").html(listItemInfo6);


          $("#tva").html(listItemInfo7);
          $("#ht").html(listItemInfo8);
          $("#ttc").html(listItemInfo9);


        });


      }
    });
  }
  _spBodyOnLoadFunctionNames.push("RecuperationData");


  var responseTask = responseTask || [];

  function getZone(urlTaskName, urlAss) {

    $.ajax({
      url: urlTaskName,

      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        responseTask = responseTask.concat(data.d.results);
        if (data.d.__next) {
          urlTaskName = data.d.__next;
          getZone(urlTaskName, urlAss);
        }
        var taskName;
        var zone;
        var TaskIdent;

        $.each(responseTask, function (key, value) {
          taskName = value.TaskName;
          zone = value.Zone;
          TaskIdent = value.TaskId;

          //console.log(zone);
          filterAss(TaskIdent, taskName, zone, urlAss);
        });

      }
    });
  }

  var responseAss = responseAss || [];

  function filterAss(TaskIdent, taskName, zone, urlAss) {

    $.ajax({
      url: urlAss,
      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        responseAss = responseAss.concat(data.d.results);
        if (data.d.__next) {
          urlAss = data.d.__next;
          filterAss(urlAss);
        }
        var assignementArr = [];
        var resIdArr = [];
        var taskNom = [];
        var taskName = "";
        //var taskId="";
        var idR = [];
        var arrNom = [];
        var arrType = [];
        var arrCode = [];
        var arrStatut = [];
        var arrTaskId = [];
        var resourceNom = [];
        var zoneTable = [];

        $.each(responseAss, function (key, value) {
          var assId = value.AssignmentId;

          assignementArr.push(assId);
          var resID = value.ResourceId;

          var tNom = value.TaskName;




          var resourceNm = value.ResourceName;

          var taskId = value.TaskId;

          if (taskId == TaskIdent) {

            if (resIdArr.indexOf(resID) == -1) {
              resIdArr.push(resID);
              taskNom.push(tNom);
              resourceNom.push(resourceNm);
              zoneTable.push(zone);
              console.log(zone + tNom + resourceNm);
            }
          }


        });
        ressourceProj(resIdArr, taskNom, zoneTable, resourceNom);



      }
    });
  }
  _spBodyOnLoadFunctionNames.push("filterAss");




  function ressourceProj(resIdArr, taskNom, zoneTable, resourceNom) {
    var idRes;
    var resNom;
    var tasknm;
    var zoneTb;
    var UrlArticle;

    for (var i = 0; i < resIdArr.length; i++) {
      idRes = resIdArr[i];
      resNom = resourceNom[i];
      tasknm = taskNom[i];
      zoneTb = zoneTable[i];

      //console.log(zoneTb);
      console.log(resNom);

      UrlArticle = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?$filter=ResourceId%20eq%20guid%27" + idRes + "%27 and ResourceIsGeneric%20eq%20false";
      main1(tasknm, zoneTb, UrlArticle, resNom, idRes);
    }


  }



  var genereAllProject = genereAllProject || [];

  function main1(tasknm, zoneTb, UrlArticle, resNom, idRes) {
    // var urlAllProjet = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_externe_Devis_Final')/items?&$filter=ProjectName%20eq%20'"+window.lenomProjet+"' and Zone eq '"+window.zoneArrtt+"' and RessourceType eq 'Article'";

    var p = [];
    $.ajax({
      url: UrlArticle,
      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        genereAllProject = genereAllProject.concat(data.d.results);
        if (data.d.__next) {
          urlAllProjet = data.d.__next;
          main1(tasknm, zoneTb, UrlArticle, resNom, idRes);
        }
        var listItemInfo = "";
        var res1 = 0

        $.each(genereAllProject, function (key, value) {
          if ((resNom == value.ResourceName) && (idRes == value.ResourceId)) {

            console.log("resNom" + resNom);
            var quantite = 0;
            var tva = 0;
            var codearticle = value.CodeArticle
            var article = value.ResourceName;
            var unite = value.Unité;
            var quantiteaTrait = value.Quantite;

            //console.log("Zone nouveaux 1 main1" + EtatDevisShow2);

            if (unite == null) {
              var unite = "";
            }

            if (zoneTb == "Zone 1") {
              var prixunit = parseFloat(value.Prix_unit).toFixed(3);
              //console.log("Zone 1 main1" + prixunit);
            }

            if (zoneTb == "Zone 4") {
              var prixunit = parseFloat(value.Prix_unit_sud).toFixed(3);
            }


            if (zoneTb == "Zone 3") {
              var prixunit = parseFloat(value.Prix_unit_centre).toFixed(3);
            }

            if (zoneTb == "Zone 2") {
              var prixunit = parseFloat(value.Prix_unit_nord).toFixed(3);
            }


            var prixtotht = parseFloat(value.prix_tot_ht).toFixed(3);
            var prixtotttc = parseFloat(value.prix_tot_ttc).toFixed(3);

            //if(quantiteaTrait != null){

            if (quantiteaTrait == null) {
              var quantiteaTrait = 0;
            }
            else {
              quantite = parseFloat(quantiteaTrait).toFixed(0);
            }


            //}
            var pourcentages = $('#tvaprojet').text();
            tva = parseInt(pourcentages);

            var pht = quantite * prixunit;
            var FTTC = pht * tva;

            if (isNaN(pht)) {
              pht = 0;
            }

            if (isNaN(FTTC)) {
              var FTTC = 0;
            }

            var typeResource = value.RessourceType;






            if (typeResource == "Article") {
              var tr;
              tr = $("<tr class='rowArticles'/>");
              tr.append("<td class='coders'>" + codearticle + "</td>");
              tr.append("<td class='resourceArticle'>" + article + "</td>");
              tr.append("<td class='unit'>" + unite + "</td>");
              tr.append("<td><textarea id='SiteText' class='md-textarea form-control' placeholder='Site'  rows='2' onkeypress='this.style.height = ((this.value.length + 1) * 8) + 'px';'></textarea></td>");
              tr.append("<td><input id='quantite'  min='0.000'  step='0.001' class='refresh_pricesModifier row_price'  value='" + quantite + "' type='number' style='width: 50px; height: 30px; text-align:center; border:none;'/></td>");
              tr.append("<td><input id='pu' type='text'  value=" + prixunit + " style='width: 80px; text-align:center; border:none;' readonly class='row_quantity'/></td>");
              tr.append("<td id='result'  class='row_total'>" + pht + "</td>");
              tr.append("<td id='calculttc'>" + FTTC + "</td>");
              tr.append("<td id='checkboxListe'><input type='checkbox' name='relancerDevis' id='checkboxId' class='data-check'/></td>");
              $('#tableaux').append(tr);

            }

          }

          $('input[name="relancerDevis"]').click(function () {
            var countChecked = document.querySelectorAll('input[name="relancerDevis"]:checked').length;

            if (countChecked >= 1) {
              $('#relancer').show();
            } else {
              $('#relancer').hide();
            }

          })


          verifier();



          $('.rowArticles').each(function () {
            var thisId = $(this).find('.zonepr').text();
            var thisId2 = $(this).find('.opArticles').text();
            var thisId1 = $(this).find('.coders').text();
            var thisCheckBox = $(this).find('#checkboxId');
            var sumVal = parseFloat($(this).find('#pu').text());

            var $rowsToGroup = $(this).nextAll('tr').filter(function () {
              return ($(this).find('.zonepr').text() === thisId && $(this).find('.coders').text() === thisId1);
            });

            $rowsToGroup.each(function () {
              $(this).remove();
            });

          });



        });
      }
    });
  }
  main1();










  /*
         var genereAllProject = genereAllProject || [];
  
    function main1(idRes,idR,taskName,UrlArticle,ZoneResProj,EtatDevisShow2)
    {
       // var urlAllProjet = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_externe_Devis_Final')/items?&$filter=ProjectName%20eq%20'"+window.lenomProjet+"' and Zone eq '"+window.zoneArrtt+"' and RessourceType eq 'Article'";
        
              var p = [];
                  $.ajax({url:UrlArticle,                           
                      method: "GET",
                      dataType: "json",
                      headers: {Accept: "application/json;odata=verbose"},       
                      success: function(data) {     
                      genereAllProject = genereAllProject.concat(data.d.results);
                      if (data.d.__next) {
                        urlAllProjet = data.d.__next;
                        main1(idRes,idR,taskName,UrlArticle,ZoneResProj,EtatDevisShow2);
                      }
                      var listItemInfo = ""; 
                            var res1=0
  
          $.each(genereAllProject, function(key, value) 
          {                 
                  var quantite =0;
                  var tva = 0;
                          var codearticle = value.CodeArticle
                          var article = value.ResourceName;
                          var unite = value.Unité;
                          var quantiteaTrait = value.Quantite;
                           
                          //console.log("Zone nouveaux 1 main1" + EtatDevisShow2);
  
                          if(unite == null)
                          {
                            var unite = "";
                          }
  
                          if(ZoneResProj =="Zone 1")
                          {
                            var prixunit = parseFloat(value.Prix_unit).toFixed(3); 
                            //console.log("Zone 1 main1" + prixunit);
                          }
                          
                          if(ZoneResProj == "Zone 4")
                          {
                            var prixunit = parseFloat(value.Prix_unit_sud).toFixed(3);  
                          }
                            
  
                          if(ZoneResProj =="Zone 3")
                          {
                            var prixunit = parseFloat(value.Prix_unit_centre).toFixed(3);
                          }
  
                          if(ZoneResProj =="Zone 2")
                          {
                            var prixunit = parseFloat(value.Prix_unit_nord).toFixed(3);
                          }
  
                          
                          var prixtotht = parseFloat(value.prix_tot_ht).toFixed(3);
                          var prixtotttc = parseFloat(value.prix_tot_ttc).toFixed(3);
  
                          //if(quantiteaTrait != null){
  
                            if(quantiteaTrait==null)
                            {
                              var quantiteaTrait =0;
                            }
                            else{
                                quantite = parseFloat(quantiteaTrait).toFixed(0);
                            }
  
  
                            //}
                          var pourcentages = $('#tvaprojet').text();
                          tva = parseInt(pourcentages);
                          
                          var pht = quantite * prixunit;
                            var FTTC = pht * tva;
                            
                            if(isNaN(pht))
                            {
                              pht = 0;
                            }
  
                            if(isNaN(FTTC))
                            {
                              var FTTC = 0;
                            }
  
                          var typeResource = value.RessourceType;
                          
                          var ZoneArticle = value.Zone;
  
                        
  
                       if(EtatDevisShow2 =="Rejeté")
                          {
                            if(typeResource =="Article")
                            {
                            var tr;  
                                tr = $("<tr class='rowArticles'/>");
                                  tr.append("<td class='coders'>" + codearticle + "</td>");
                                  tr.append("<td class='resourceArticle'>" + article + "</td>"); 
                                  tr.append("<td class='unit'>" + unite + "</td>");
                                  tr.append("<td><textarea id='SiteText' class='md-textarea form-control' placeholder='Site'  rows='2' onkeypress='this.style.height = ((this.value.length + 1) * 8) + 'px';'></textarea></td>");  
                                  tr.append("<td><input id='quantite'  min='0.000'  step='0.001' class='refresh_pricesModifier row_price'  value='"+quantite+"' type='number' style='width: 50px; height: 30px; text-align:center; border:none;'/></td>");       
                                  tr.append("<td><input id='pu' type='text'  value="+ prixunit +" style='width: 80px; height: 30px  background-color:white; text-align:center; border:none;' readonly class='row_quantity'/></td>");          
                                  tr.append("<td id='result'  class='row_total'>"+pht+"</td>");
                                  tr.append("<td id='calculttc'>"+FTTC+"</td>");
                                  tr.append("<td id='checkboxListe'><input type='checkbox' id='checkboxId' class='data-check'/></td>");
                                $('#tableaux').append(tr);  
  
                            }
                          }
  
                           
  
  
                        
                          verifier(); 
  
  
  
  $('.rowArticles').each(function() {
    var thisId = $(this).find('.zonepr').text();
    var thisId2 = $(this).find('.opArticles').text();
    var thisId1 = $(this).find('.coders').text();
    var thisCheckBox = $(this).find('#checkboxId');
    var sumVal = parseFloat($(this).find('#pu').text());
  
    var $rowsToGroup = $(this).nextAll('tr').filter(function() {
      return ($(this).find('.zonepr').text() === thisId && $(this).find('.coders').text() === thisId1);
    });
     
    $rowsToGroup.each(function() {
       $(this).remove();
    });
  
  });
  
  
  
      });
     }   
    });
  }
  main1();
  */


  /*
  var siteUrl = '/PWA';
  ExecuteOrDelayUntilScriptLoaded(retrieveListItems,"sp.js");
  
  function retrieveListItems()
  {
   var clientContext = new SP.ClientContext(siteUrl);
   var oList = clientContext.get_web().get_lists().getByTitle('Liste_externe_Devis_Final');
   var calmQuery = new SP.CamlQuery();
   //calmQuery.setViewXml('<View><Query></Query></View>');
   this.collListItem = oList.getItems(calmQuery);
  
  clientContext.load(collListItem);
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.onQuerySucceeded),
    Function.createDelegate(this, this.onQueryFailed)
   );
  clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
  }
  
  
  
  //Cette fonction Permet de retourner les données de la base de données 
  function onQuerySucceeded(){
    var listItemInfo = '';
    var listItemInfo1 = '';
    var listItemInfo2 = '';
    var prix_unites = 0;
    var prix_unit_nord = 0;
    var prix_unit_centre = 0;
    var prix_unit_sud = 0;
    var Prix_unit_Vente = 0;
    var res = 0;
    var res1 = 0;
    var sum = 0;
    var listItemEnumerator = collListItem.getEnumerator();
  
    while(listItemEnumerator.moveNext()) {
      var oListItem = listItemEnumerator.get_current();
      var article = oListItem.get_item('ResourceName').toString();
      var listItemInfo = oListItem.get_item('CodeArticle');
  
          if(listItemInfo != null)
          {
            var coders = listItemInfo.toString();
          }
          else{
            listItemInfo = "";
            var coders = listItemInfo.toString();
          }
  
  
  
          var nomprojet = oListItem.get_item('ProjectName').toString();
  
      var articlesous = oListItem.get_item('RessourceType');
  
      var quantiteaTrait = oListItem.get_item('Quantite');
  
          if(articlesous != null) 
          {
            var articlest = articlesous.toString();
          }
  
  
          var conceptName = document.getElementById('nomprojet').innerHTML;
  
  
          //var zoneAA = zoneArticle;
        
          if(nomprojet == conceptName)
          {
            if(articlesous == "Article")
            {
              var tr;
                  tr = $("<tr class='rowArticles'/>");
                        tr.append("<td class='coders'>" + coders + "</td>");
                        tr.append("<td class='resourceArticle'>" + article + "</td>"); 
                        
                      $('#tableaux').append(tr);           
            } 
          }
  
  $('.rowArticles').each(function() {
    var thisId = $(this).find('.zoneArticle').text();
    var thisId2 = $(this).find('.opArticles').text();
    var thisId1 = $(this).find('.coders').text();
    var thisCheckBox = $(this).find('#checkboxId');
    var sumVal = parseFloat($(this).find('#pu').text());
  
    var $rowsToGroup = $(this).nextAll('tr').filter(function() {
      return ($(this).find('.coders').text() === thisId1);
     
    });
       
    $rowsToGroup.each(function() {
       $(this).remove();
    });
  
  });
  
  
  
  
  }
  
  }
  */




  //Function for option select
  function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
  }




  //Filtrage des données + calcul des nouveaux prix


  //Filter With quantities
  $(document).change('#refresh_pricesModifier', function () {
    refreshPrices();
  })

  // function actuallissant les prix de tous les champs calculer automatiquement
  function refreshPrices() {
    var totalPrice = 0;
    $('#tableaux tr').each(function () {
      totalPrice += refreshRowPrice($(this));
    });
  }





  //function recalculant le prix d'un ligne et retournant le prix
  function refreshRowPrice($row) {
    // récupère le prix et la quantité
    var pourcentage = 0;
    var pourcentages = $('#tvaprojet').text();

    pourcentage = parseFloat(pourcentages).toFixed(0);
    quantity = $row.find('.row_quantity').val();


    var price = $row.find('.row_price').val(),

      rowPrice = price * quantity;

    var resultattext = parseInt(pourcentage) / 100;

    var tot = (resultattext + 1) * (rowPrice);

    //$row.find('.row_total').text(rowPrice.toFixed(3));
    $row.find('#result').text(rowPrice.toFixed(3));

    $row.find('#calculttc').text(tot.toFixed(3));
    return tot;
    return rowPrice;
  }




  //Calcul des lignes selectionnés selon checkbox list
  function verifier() {
    $('.data-check').click(function () {
      var sum = 0;
      var sum1 = 0;
      var sum2 = 0;
      var somme = 0;
      var somme1 = 0;
      var somme2 = 0;
      var TVAval = 0;
      //var TVAval1 = 0;

      $('.data-check:checked').each(function () {
        sum += parseFloat($(this).closest('tr').find('#result').text());
        sum1 += parseFloat($(this).closest('tr').find('#calculttc').text());

        TVAval = Number($('#tvaprojet').text());
        //TVAval1 += Number($("#size").val());

        somme = sum.toFixed(3)
        somme1 = sum1.toFixed(3)
        somme2 = ((TVAval / 100) * sum).toFixed(3);
      });
      $('#ht').html(somme);
      $('#tva').html(somme2);
      $('#ttc').html(somme1);


    });

  }


  //-----------------------------------------------------------------------------------------------------------------------------------------

  //Insertion des données du Tableau selon le filtrage saisi
  function createItem(uniquecodeprojet) {
    $(".rowArticles").each(function (index) {
      var qte = 0;
      var ttc = "";
      var htaxe = "";
      var punit = 0;
      //var qt = 0;

      var unit = "";
      var article = "";
      var codear = "";

      var montant_ht = "";
      var tva_montant = "";
      var montant_ttc = "";
      var sous_op = "";
      var zonePr = "";
      var siteprojet = "";
      var UniqueId = "";
      var region = "";
      var uniqueId = "";



      //UniqueId += document.getElementById('pcode1').value;
      uniqueId += document.getElementById('pcode1').value;
      //alert(UniqueId);

      codear += ($(this).closest('tr').find('.coders').text());
      article += ($(this).closest('tr').find('.resourceArticle').text());
      unit += ($(this).closest('tr').find('.unit').text());
      region += ($(this).find('#SiteText').val());
      qte += parseFloat($(this).find('#quantite').val());
      punit += parseFloat($(this).find('.row_quantity').val());
      htaxe += ($(this).closest('tr').find('.row_total').text());
      ttc += ($(this).closest('tr').find('#calculttc').text());
      //jQuery.noConflict();
      $().SPServices(
        {
          operation: "UpdateListItems",
          async: true,
          webURL: "/sites/PWA/" + window.lenomProjet1 + "/",
          batchCmd: "New",
          listName: "Liste_Articles",
          valuepairs: [
            ["code_article", codear],
            ["article", article],
            ["unite", unit],
            ["site_article", region],
            ["quantite", qte],
            ["prix_unit", punit],
            ["prix_tot_ht", htaxe],
            ["prix_tot_ttc", ttc],
            ["uniqueCode", uniqueId]
          ]
        });


    });
  }


  //***************************************************Create lignes for Attachement when we update the devis ******************************************


  var genereAllAttachmentUpdate = genereAllAttachmentUpdate || [];
  var p2Update = [];
  var urlAllAtt = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_attachement')/items";
  function LoadIdAttachmentUpdate() {
    $.ajax({
      url: urlAllAtt,
      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        genereAllAttachmentUpdate = genereAllAttachmentUpdate.concat(data.d.results);
        if (data.d.__next) {
          urlAllAtt = data.d.__next;
          LoadIdAttachmentUpdate();
        }
        var listItemInfo = "";
        var res1 = 0

        $.each(genereAllAttachmentUpdate, function (key, value) {
          var idAtt = value.NumAttachement;


          var idAtt1 = idAtt;
          p2Update.push(parseFloat(idAtt1));


          Array.prototype.max = function () {
            return Math.max.apply(null, p2Update);
          };


          $('#UniqueCodeAttDyn1Update').val(p2Update.max() + 1);

        });
      }
    });
  } _spBodyOnLoadFunctionNames.push("LoadIdAttachmentUpdate");









  //Update Operation for Attachement
  var genereAllOperation = genereAllOperation || [];



  function LoadForOperationMain(urlAllProjetTask) {
    //var urlAllOperation = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Liste_externe_Devis_Final')/items?&$filter=ProjectName%20eq%20'"+thisAttIdprojet+"' and RessourceType eq 'Sous_Traitant'";

    $.ajax({
      url: urlAllProjetTask,
      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        genereAllOperation = genereAllOperation.concat(data.d.results);
        if (data.d.__next) {
          urlAllProjetTask = data.d.__next;
          LoadForOperationMain(urlAllProjetTask);
        }

        $.each(genereAllOperation, function (key, value) {



          var resourcesoustraitant = value.TaskName;


          $('#tacheAtt').append($('<option>',
            {
              text: resourcesoustraitant
            }));

          var opt = {};
          $("#tacheAtt > option").each(function () {
            if (opt[$(this).text()]) {
              $(this).remove();
            } else {
              opt[$(this).text()] = $(this).val();
            }
          });
        

        });



      }
    });
  } _spBodyOnLoadFunctionNames.push("LoadForOperationMain");



  //Insertion des données du Tableau selon le filtrage saisi
  function createItemUpdateAttachement(uniquecodeprojet) {
    $(".rowArticles").each(function (index) {
      var qte = 0;
      var ttc = "";
      var htaxe = "";
      var punit = 0;
      //var qt = 0;

      var unit = "";
      var article = "";
      var codear = "";

      var montant_ht = "";
      var tva_montant = "";
      var montant_ttc = "";
      var sous_op = "";
      var zonePr = "";
      var siteprojet = "";
      var UniqueId = "";
      var region = "";
      var uniqueId = "";
      var qteRetirer = 0;
      var uniqueAtt = "";

      uniqueAtt += $('#UniqueCodeAttDyn1Update').val();
      //UniqueId += document.getElementById('pcode1').value;
      uniqueId += document.getElementById('pcode1').value;
      //alert(UniqueId);

      codear += ($(this).closest('tr').find('.coders').text());
      article += ($(this).closest('tr').find('.resourceArticle').text());
      unit += ($(this).closest('tr').find('.unit').text());
      region += ($(this).find('#SiteText').val());
      qte += parseFloat($(this).find('#quantite').val());
      punit += parseFloat($(this).find('.row_quantity').val());
      htaxe += ($(this).closest('tr').find('.row_total').text());
      ttc += ($(this).closest('tr').find('#calculttc').text());

      $().SPServices(
        {
          operation: "UpdateListItems",
          async: true,
          webURL: "/sites/PWA/" + window.lenomProjet1 + "/",
          batchCmd: "New",
          listName: "Liste_attachement",
          valuepairs: [
            ["code_article", codear],
            ["article", article],
            ["unite", unit],
            ["site_article", region],
            ["quantite", qte],
            ["qteRestant", qte],
            ["qteRetirer", qteRetirer],
            ["prix_unit", punit],
            ["prix_tot_ht", htaxe],
            ["prix_tot_ttc", ttc],
            ["uniqueCode", uniqueId],
            ["NumAttachement", uniqueAtt]


          ]
        });


    });
  }




  //-----------------------------------------------------------------------------------------------------------------------------------------





  //Affichage du projet sur une liste select
  var lenomProjet;
  var lenomProjet1;
  function LoadProject() {
    var data = $.ajax({
      url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'" + ProjectUID + "')",

      type: "GET",
      dataType: "json",
      headers: {
        "Accept": "application/json; odata=verbose"
      }
    });

    var listItemInfo = "";
    var listItemInfo1 = "";

    data.done(function (data, textStatus, jqXHR) {

      if (data.d.results == undefined) {
        data.d.results = new Array();
        data.d.results[0] = new Object();
        data.d.results[0] = data.d.ProjectId;
        data.d.results[0] = data.d.ProjectWorkspaceInternalUrl;
        data.d.results[0] = data.d.ProjectName;

        var linkProject = data.d.ProjectWorkspaceInternalUrl;
        nomprojetlinked = linkProject.substring(28);

        //console.log("Le nom de projet est " + nomprojetlinked);
        //Enregistrer_Attachement(nomprojetlinked);

        window.lenomProjet = data.d.ProjectName;
        window.lenomProjet1 = nomprojetlinked;


      }
    });
  }
  _spBodyOnLoadFunctionNames.push("LoadProject");





  //-----------------------------------------------------------------------------------------------------------------------------------------


  function RecuperationDataTablesAttachement(thisAttId) {

    $.ajax({
      url: _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Tableau_Attachement')/items?&$filter=uniqueCodeAtt%20eq%20'" + thisAttId + "'",

      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        var dataResults = data.d.results;

        $.each(dataResults, function (key, value) {

          var UniqueAtt = value.UniqueAtt;

          var idAttsupp = value.ID;

          var CodeOracle = value.codeoracle
          var dateAttch = value.dateAttachement;

          var Montant = value.montant_ht;
          var tva = value.tva;
          var montant_ttc = value.montant_ttc;
          var tva_montant = value.tva_montant;
          var Etat_Attachement = value.Etat_Attachement;
          
          moment.locale('fr');
          var dateAttch = moment(dateAttch).format('L');
          datedd = dateAttch;




          var tr;
          tr = $("<tr class='rows'/>");
          tr.append("<td><button data-toggle='tooltip' title='Supprimer' id='supprAttachement' value='" + idAttsupp + "' onclick='changeName();' style='color:white; background-color:red; border-radius: 5px;' ><i class='fa fa-trash-o fa-lg'></i> </button></td>");
          tr.append("<td style='width:30px;' id='uniqueAttSupp'>" + UniqueAtt + "</td>");
          tr.append("<td>" + CodeOracle + "</td>");
          tr.append("<td>" + Montant + "</td>");
          tr.append("<td>" + tva_montant + "</td>");
          tr.append("<td>" + montant_ttc + "</td>");
          tr.append("<td><input type='button' id='etatattachement' class='btn btn-warning' value='" + Etat_Attachement + "'/></td>");
          tr.append("<td><button id='ConsulterAttachDevis' data-toggle='tooltip' title='Consulter' class='fa fa-chevron-right' style='color:white; background-color:#4caf50; border-radius: 5px;' value='" + UniqueAtt + "' onclick='return false;'><i class='fa fa-chevron-right'></i></button></td>");
          $('#tableauAttachement').append(tr);

          var tbody = $('#tableauAttachement tbody');
          tbody.html($('tr', tbody).get().reverse());

          if(Etat_Attachement =="Supprimé")
          {
            $(document).ready(function () {
            $('#tableauAttachement tr').each(function () {

            $(this).closest('tr').find('#supprAttachement').attr("disabled", true);
              $(this).closest('tr').find('#supprAttachement').css('background-color', 'gray');

            });
          });
          }



        });


      }
    });
  }
  _spBodyOnLoadFunctionNames.push("RecuperationDataTablesAttachement");

  /*
  function CalculSumAttachment(thisAttId)
    {
  var coutf=0;
           var sommeCout = 0;
            var cout=0;
                      $.ajax({url: _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Tableau_Attachement')/items?&$filter=uniqueCodeAtt%20eq%20'"+thisAttId+"'",      
                      method: "GET",
                      dataType: "json",
                      headers: {Accept: "application/json;odata=verbose"},       
                      success: function(data) {     
                      var dataResults = data.d.results;
                      
           
          $.each(dataResults, function(key, value) 
          {   
  
            cout = parseFloat(value.montant_ttc).toFixed(3);
            
              coutf=coutf + cout;
            
              var array = [cout];
              var sum = array.reduce(function(a, b){
          return a + b;
      }, 0);
            
                sommeCout+=sum;
  
          });
                      
              var Test = sommeCout;
              //console.log(Test);
  
            
            $('#tableauAttachement > tfoot').append($('<tr>')
              .append($('<td>').append("Total")).attr('style','font-weight:bold')
              .append($('<td>').append(""))
              .append($('<td>').append(""))
              .append($('<td>').append(""))
              .append($('<td>').append(sommeCout))
              .append($('<td>').append(""))
  
                            )
                            }
                      });
  } _spBodyOnLoadFunctionNames.push("CalculSumAttachment");
  */





  //Delete Liste Item
  function UpdateListItemAttachement(cliquer) {

    var siteUrlDelete = "/sites/PWA/" + nomprojetlinked + "/";
    //alert(nomprojetlinked);

    this.itemId = cliquer;
    var clientContext = new SP.ClientContext(siteUrlDelete);
    var oList = clientContext.get_web().get_lists().getByTitle('Tableau_Attachement');

    this.oListItem = oList.getItemById(itemId);

    oListItem.set_item('Etat_Attachement','Supprimé');

    oListItem.update();
    console.log("Identifiant de suppAtt" + nomprojetlinked);
    //document.getElementById()

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
  }








  //Delete Liste Item
  function deleteListItem(idItemList) {

    var siteUrlDelete = "/sites/PWA/" + nomprojetlinked + "/";
    //alert(nomprojetlinked);

    this.itemId = idItemList;

    var clientContext = new SP.ClientContext(siteUrlDelete);
    var oList = clientContext.get_web().get_lists().getByTitle('Devis_Enregistrer');

    this.oListItem = oList.getItemById(itemId);
    oListItem.set_item('Approbation', 'Supprimé');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
  }



  //Delete Liste Item
  function deleteListItemDevisTraite(theIdOfProject) {

    var siteUrlDelete = "/sites/PWA/";
    //alert(nomprojetlinked);

    this.itemId = theIdOfProject;

    var clientContext = new SP.ClientContext(siteUrlDelete);
    var oList = clientContext.get_web().get_lists().getByTitle('Liste_Devis_Traites');

    this.oListItem = oList.getItemById(itemId);

    oListItem.deleteObject();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
  }



  /*function Execute()
 {
  var siteURL = "/PWA/"+nomprojetlinked+"/";
 var clientContext = new SP.ClientContext( siteURL );
 spList = clientContext.get_web().get_lists().getByTitle('Liste_Articles');
 
 //Create a CAML-query with your filter conditions
 var camlQuery = new SP.CamlQuery();
 camlQuery.set_viewXml('<View><Query><Where><And><Eq><FieldRef Name=\'uniqueCode\'/>' + 
     '<Value Type=\'Text\'>523</Value></Query></View>');
 
 //The query will return a collection of items matching your conditions
 this.collListItem = spList.getItems(camlQuery);
 
 clientContext.load(collListItem);
 
 //Execute the query
 clientContext.executeQueryAsync(function () {
 
     var itemCount = collListItem.get_count();
     //For each list item in the collection, mark it to be deleted
     for (var i = itemCount - 1; i >= 0; i--) {
         var oListItem = collListItem.itemAt(i);
         oListItem.deleteObject();
     };
 
     //Execute the delete operation
     clientContext.executeQueryAsync(deleteSucceeded, deleteFailed);
 }, fail_handler);
 
 }*/


  //-----------------------------------------------------------------------------------------------------------------------------------------
  //ExecuteOrDelayUntilScriptLoaded(updatelistitem, "sp.js");

  function updatelistitem(IdentifiantListess) {

    var siteUrl23 = "/sites/PWA/" + nomprojetlinked + "/";
    var clientContext = new SP.ClientContext(siteUrl23);
    var oList = clientContext.get_web().get_lists().getByTitle('Devis_Enregistrer');
    this.oListItem = oList.getItemById(window.IdentifiantListess);

    var sous_op = document.getElementById("sous_op").innerHTML;
    var delai_jour = document.getElementById("delaijr").innerHTML;
    var delai_mois = document.getElementById("delai").innerHTML;
    var siteprojet = document.getElementById("siteprojet").innerHTML;

    var montant_hts = $('#ht').text();
    var tva_montants = $('#tva').text();
    var montant_ttcs = $('#ttc').text();

    oListItem.set_item('site', siteprojet);
    oListItem.set_item('sous_operation', sous_op);
    oListItem.set_item('delai_jour', delai_jour);
    oListItem.set_item('delai_mois', delai_mois);

    oListItem.set_item('montant_ht', montant_hts);
    oListItem.set_item('tva_montant', tva_montants);
    oListItem.set_item('montant_ttc', montant_ttcs);
    oListItem.set_item('Approbation', 'En cours');
    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
  }


  var siteUrls = "/sites/PWA/";
  function updatelistitemDirection(thid) {

    var clientContext = new SP.ClientContext(siteUrls);
    var oList = clientContext.get_web().get_lists().getByTitle('Liste_Devis_Traites');
    this.oListItem = oList.getItemById(thid);
    //var val ="TestDevis2";

    var montant_hts = $('#ht').text();
    var tva_montants = $('#tva').text();
    var montant_ttcs = $('#ttc').text();

    oListItem.set_item('montant_ht', montant_hts);
    oListItem.set_item('tva', tva_montants);
    oListItem.set_item('montant_ttc', montant_ttcs);
    oListItem.set_item('Etat_Devis', 'En cours');


    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
  }


  var siteUrlCmd = "/sites/PWA/";
  function updatelistitemBCDevis(thidcmd) {

    var clientContext = new SP.ClientContext(siteUrlCmd);
    var oList = clientContext.get_web().get_lists().getByTitle('Liste_Devis_Traites');
    this.oListItem = oList.getItemById(thidcmd);


    var numfact = $('#nfact').val();
    console.log(numfact)
    var datefact = document.getElementById('datefact').value
    var numbc = $('#numbc').val();
    var numda = $('#numda').val();

    oListItem.set_item('nfacture', numfact);
    oListItem.set_item('datefacture', datefact);
    oListItem.set_item('nbandecmd', numbc);
    oListItem.set_item('numda', numda);



    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
  }

  function GetAllCmdData(identifCmd) {

    $.ajax({
      url: _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Liste_Devis_Traites')/items?&$filter=uniqueCode%20eq%20'" + identifCmd + "'",

      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        var dataResults = data.d.results;
        var listItemInfoCmd1="";
        var listItemInfoCmd2="";
        var listItemInfoCmd3="";
        var listItemInfoCmd4="";

        $.each(dataResults, function (key, value) {
          moment.locale('fr');
          var nfacture = value.nfacture;
          var datefacture = moment(value.datefacture).format("YYYY-MM-DD");
          var nbandecmd = value.nbandecmd;
          var numda = value.numda;
          console.log("Unique code " + value.uniqueCode);
          var identCmdBC = value.ID;
          
          $("#enregistrercmd").val(identCmdBC);

          console.log('le données sont ' + nfacture);

          document.getElementById('nfact').value=nfacture;

          document.getElementById('datefact').value=datefacture;
          console.log("date est " + datefacture);
          document.getElementById('numbc').value=nbandecmd;
          document.getElementById('numda').value=numda;


          if((nfacture !=null)||(datefacture !=null)||(nbandecmd !=null)||(numda !=null))
          {
              document.getElementById('nfact').readOnly = true;
              document.getElementById('datefact').readOnly = true;
              document.getElementById('numbc').readOnly = true;
              document.getElementById('numda').readOnly = true;
          }
          else
          {if((nfacture !=null)||(datefacture !=null)||(nbandecmd !=null)||(numda !=null)){
              document.getElementById('nfact').readOnly = false;
              document.getElementById('datefact').readOnly = false;
              document.getElementById('numbc').readOnly = false;
              document.getElementById('numda').readOnly = false;
          }}




        });
      }
    });
  }
  _spBodyOnLoadFunctionNames.push("GetAllCmdData");



  //*****************************************************************************************************************************



  var genereAllAttachment = genereAllAttachment || [];
  var p1 = [];
  var urlAllAtt = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_attachement')/items?$select=NumAttachement";
  function LoadIdAttachment() {
    $.ajax({
      url: urlAllAtt,
      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        genereAllAttachment = genereAllAttachment.concat(data.d.results);
        if (data.d.__next) {
          urlAllAtt = data.d.__next;
          LoadIdAttachment();
        }
        var listItemInfo = "";
        var res1 = 0

        $.each(genereAllAttachment, function (key, value) {
          var idAtt = value.NumAttachement;

          if (idAtt != null) {
            var idAtt1 = idAtt;
            p1.push(parseFloat(idAtt1));
          }
          else {
            var idAtt1 = 1;
            p1.push(parseFloat(idAtt1));
          }

          Array.prototype.max = function () {
            return Math.max.apply(null, p1);

          };


          $('#UniqueCodeAttDyn').val(p1.max() + 1);

        });
      }
    });
  } _spBodyOnLoadFunctionNames.push("LoadIdAttachment");
  //setTimeout(LoadIdAttachment,2000);







  function RecuperationDataAtt(ttAtt,thisAttId1,unCode) {

    $.ajax({
      url: _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Devis_Enregistrer')/items?&$filter=uniqueCode%20eq%20'" + ttAtt + "'",

      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        var dataResults = data.d.results;

        var listItemInfo = "";
        var listItemInfo1 = "";
        var listItemInfo2 = "";
        var listItemInfo3 = "";
        var listItemInfo4 = "";
        var listItemInfo5 = "";
        var listItemInfo6 = "";
        var listItemInfo7 = "";
        var listItemInfo8 = "";
        var listItemInfo9 = "";

        var listItemInfo10 = "";
        var listItemInfo11 = "";
        var listItemInfo12 = "";
        var listItemInfo13 = "";
        var listItemInfo14 = "";
        var listItemInfo15 = "";
        var listItemInfo16 = "";
        var listItemInfo17 = "";
        var listItemInfo18 = "";
        var listItemInfo19 = "";
        var listItemInfoZone = "";
        var listItemInfoUniqueId = "";

        $.each(dataResults, function (key, value) {
          var zonezzzz = value.Zone;
          var uniqueCode = value.uniqueCode;


          moment.locale('fr');


          var datedevis = value.dateDevis;
          var ddemarrage = moment(datedevis).format('L');

          if (datedevis == null) {
            var ddemarrage = "";
          }
          else {
            var datedevis = moment(datedevis).format('L');
          }

          var sous_op = value.sous_operation;
          if(sous_op==null)
          {
            sous_op="";
          }

          var zone = value.Zone;
          if (zone == null) {
            var zone = "";
          }
          else {
            var zone = zone;
          }

          var codeoracle = value.codeoracle;
          if (codeoracle == null) {
            var codeoracle = "";
          }
          else {
            var codeoracle = codeoracle;
          }

          var chefprojet = value.chefprojet;
          if (chefprojet == null) {
            var chefprojet = "";
          }
          else {
            var chefprojet = chefprojet;
          }

          var delai_jour = value.delai_jour;
          if (delai_jour == null) {
            var delai_jour = "";
          }
          else {
            var delai_jour = delai_jour;
          }


          var delai_mois = value.delai_mois;
          if (delai_mois == null) {
            var delai_mois = "";
          }
          else {
            var delai_mois = delai_mois;
          }

          var type_bc = value.type_bc;
          if (type_bc == null) {
            var type_bc = "";
          }
          else {
            var type_bc = type_bc;
            var TypeCommande = type_bc;
            //siteArticle(TypeCommande);
             var articlesURL = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_attachement')/items?&$filter=uniqueCode%20eq%20'" + thisAttId1 + "' and NumAttachement%20eq%20'" + unCode + "'";
   
              RecuperationDataTableAttachement1(articlesURL,TypeCommande);
          }




          var site = value.site;
          if (site == null) {
            var site = "";
          }
          else {
            var site = site;
          }


          var IdentifiantListes = value.Id;
          var nomprojet = value.nomprojet;
          window.nomprojets = nomprojet;

          if (nomprojet == null) {
            var nomprojet = "";
          }
          else {
            var nomprojet = nomprojet;
          }

          var direction = value.direction;
          if (direction == null) {
            var direction = "";
          }
          else {
            var direction = direction;
          }

          var pole = value.pole;
          if (pole == null) {
            var pole = "";
          }
          else {
            var pole = pole;
          }

          var sous_traitant = value.sous_traitant;
          if (sous_traitant == null) {
            var sous_traitant = "";
          }
          else {
            var sous_traitant = sous_traitant;
          }

          var tache = value.tache;
          if (tache == null) {
            var tache = "";
          }
          else {
            var tache = tache;
          }

          var tva = value.tva;
          if (tva == null) {
            var tva = "";
          }
          else {
            var tva = tva;
          }


          var montant_ht = value.montant_ht;
          if (montant_ht == null) {
            var montant_ht = "";
          }
          else {
            var montant_ht = montant_ht;
          }


          var tva_montant = value.tva_montant;
          if (tva_montant == null) {
            var tva_montant = "";
          }
          else {
            var tva_montant = tva_montant;
          }

          var montant_ttc = value.montant_ttc;
          if (montant_ttc == null) {
            var montant_ttc = "";
          }
          else {
            var montant_ttc = montant_ttc;
          }


          listItemInfo1 += tva;
          listItemInfo2 += tache;
          listItemInfo3 += sous_traitant;
          listItemInfo4 += pole;
          listItemInfo5 += direction;
          listItemInfo6 += nomprojet;

          listItemInfo7 += "0";
          listItemInfo8 += "0";
          listItemInfo9 += "0";
          listItemInfoZone += zone;


          listItemInfo10 += codeoracle;
          listItemInfo11 += chefprojet;

          listItemInfo13 += ddemarrage;
          listItemInfo14 += delai_jour;
          listItemInfo15 += delai_mois;
          listItemInfo16 += type_bc;
          listItemInfo17 += site;

          listItemInfo18 += codeoracle;
          listItemInfo19 += sous_op;

          listItemInfoUniqueId += uniqueCode;

          document.getElementById('codeoracleenteteAtt').value = listItemInfo18;

          document.getElementById('pcode1Att').value = listItemInfoUniqueId;

          $('#codeoracleAtt').html(listItemInfo10);
          $('#chefprojetAtt').html(listItemInfo11);

          $('#demarrageAtt').html(listItemInfo13);
          $('#delaijrAtt').html(listItemInfo14);
          $('#delaiAtt').html(listItemInfo15);

          $('#typebcAtt').html(listItemInfo16);
          $('#prixdeprix').html(montant_ttc +  " DT en TTC") ;

          $('#zoneprAtt').html(listItemInfoZone);
          //$('#siteprojetAtt').html(listItemInfo17);
          $('#sous_opAtt').html(listItemInfo19);

          $("#tvaprojetAtt").html(listItemInfo1);

          $("#soustraitantAtt").html(listItemInfo3);
          $("#poleAtt").html(listItemInfo4);
          $("#directionAtt").html(listItemInfo5);
          $("#nomprojetAtt").html(listItemInfo6);

          $("#tvaAtt").html(listItemInfo7);
          $("#htAtt").html(listItemInfo8);
          $("#ttcAtt").html(listItemInfo9);


          //$("#tacheAtt").html(listItemInfo2);
          $('#tacheAtt').append($('<option>',
            {
              text: listItemInfo2
            }));

          if(listItemInfo16 =="Commande Standard")
          {
            document.getElementById('sous_opAtt').readOnly=true;

          }
          else
          {
            document.getElementById('sous_opAtt').readOnly=false;
            
          }


        });

      }
    });
  }
  _spBodyOnLoadFunctionNames.push("RecuperationDataAtt");


  //********************************************************Tableau Attachement à modifier************************************************
  var genereAllMaxUnique = genereAllMaxUnique || [];
  var pMaxAtt = [];
  var maxUnique;
  function RecuperationIfExisteAttachement(ttAtt) {

    var urlAllAtt = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_attachement')/items?&$filter=uniqueCode%20eq%20'" + ttAtt + "'";
    $.ajax({
      url: urlAllAtt,
      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        genereAllMaxUnique = genereAllMaxUnique.concat(data.d.results);
        if (data.d.__next) {
          urlAllAtt = data.d.__next;
          RecuperationIfExisteAttachement();
        }
        var listItemInfo = "";
        var res1 = 0

        $.each(genereAllMaxUnique, function (key, value) {
          var idAtt2 = value.NumAttachement;

          if (idAtt2 != null) {
            var idAtt2 = idAtt2;
            pMaxAtt.push(parseFloat(idAtt2));


          }


          Array.prototype.max = function () {
            return Math.max.apply(null, pMaxAtt);

          };


          $("#UniqueCodeAttDyn1AttLoaded").val(pMaxAtt.max());




        });
      }
    });

  }
  _spBodyOnLoadFunctionNames.push("RecuperationIfExisteAttachement");


var genereAllAttachmentReceupration = genereAllAttachmentReceupration ||[];
  var cancelled = false;
  function RecuperationDataTableAttachement1(articlesURL,TypeCommande) {
   
    $.ajax({
      url: articlesURL,

      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        //var dataResults = data.d.results;
        genereAllAttachmentReceupration = genereAllAttachmentReceupration.concat(data.d.results);
        if (data.d.__next) {
          articlesURL = data.d.__next;
          RecuperationDataTableAttachement1(articlesURL,TypeCommande);
        }

        $.each(genereAllAttachmentReceupration, function (key, value) {
          var codearticle = value.code_article;


          var article = value.article;

          var unite = value.unite;
          var quantite = value.quantite;
          var restirer = parseFloat(value.qteRetirer).toFixed(2);
          var prixunit = parseFloat(value.prix_unit).toFixed(3);
          var prixtotht = parseFloat(value.prix_tot_ht).toFixed(3);
          var prixtotttc = parseFloat(value.prix_tot_ttc).toFixed(3);
          var sarticle = value.site_article;
 
          var quantiteResult = 0;
          var quantites = parseFloat(value.qteRestant).toFixed(3);

          var uniqueCodeArticle = value.uniqueCode;

          if (sarticle == null) {
            sarticle = "";
          }

          if (article != null) {
            $(".aSupprimerTableau").toggleClass("hide");
          }
          if (unite == null) {
            unite = "";
          }

var commandeOuverte = TypeCommande;
    
        
          if ((commandeOuverte =="Commande Standard")&&(codearticle != null) &&(quantites >0)) {
              $('.forTheAttachement').hide();
              
            var tr;
            tr = $("<tr class='rowArticles3'/>");
              tr.append("<td class='codersAtt'>" + codearticle + "</td>");
              tr.append("<td class='resourceArticleAtt' style='text-align:left; width: 40%'>" + article + "</td>");
              tr.append("<td class='unitAtt'>" + unite + "</td>");
              //tr.append("<td id='SiteTextAtt'>" + sarticle + "</td>");
              tr.append("<td><textarea id='SiteTextAtt' class='md-textarea form-control' style='width:auto;height;auto;' readonly placeholder='Site'>" + sarticle + "</textarea></td>");
              tr.append("<td id='qteAtt' style='text-align:center;'>" + quantites + "</td>");
              tr.append("<td style='text-align:center;'><input id='quantiteAtt' onkeyup='disableCheck();' name='kp1_inputnumber' min='0.000'  step='0.001' max='" + quantites + "' class='refresh_pricesAtt row_priceAtt' value='" + quantiteResult + "' type='number' style='width: 80px; height: 30px; text-align:center; border:none;'/></td>");
              tr.append("<td id='qteResAtt' style='text-align:center;'>" + quantites + "</td>");
              tr.append("<td><input id='puAtt' type='text'  value=" + prixunit + " style='width: 80px; text-align:center; border:none;' readonly class='row_quantityAtt'/></td>");
              tr.append("<td id='resultAtt'>" + prixtotht + "</td>");
              tr.append("<td id='calculttcAtt'>" + prixtotttc + "</td>");
              tr.append("<td id='uniqueCodeArticle' style='display:none;'>" + uniqueCodeArticle + "</td>");
              tr.append("<td><input type='checkbox' name='showHide' id='checkboxId' disabled class='data-checkAttachement'/></td>");
             
            $('#tableauxAtt').append(tr);


       /* var commandeOuverte = $('#typebcAtt').text();
        console.log("La commande est " + commandeOuverte);
        if(commandeOuverte =="Commande Ouverte"){}*/
          
            
            $(".refresh_pricesAtt").each(function () {

              var thisJ = $(this);
              var max = thisJ.attr("max") * 1;
              var min = thisJ.attr("min") * 1;
              var intOnly = String(thisJ.attr("intOnly")).toLowerCase() == "true";

              var test = function (str) {
                return str == "" ||
                  ($.isNumeric(str) && str * 1 <= max && str * 1 >= min &&
                    (!intOnly || str.indexOf(".") == -1) && str.match(/^0\d/) == null);
                // commented out code would allow entries like ".7"
              };

              thisJ.keydown(function () {
                var str = thisJ.val();
                if (test(str)) thisJ.data("dwnval", str);
              });

              thisJ.keyup(function () {
                var str = thisJ.val();
                if (!test(str)) thisJ.val(thisJ.data("dwnval"));
              })
            });
          

            $(document).ready(function () {
              var Input = $('input[name=kp1_inputnumber]');
              var default_value = Input.val();

              $(Input).focus(function () {
                if ($(this).val() == default_value) {
                  $(this).val("");
                }
              }).blur(function () {
                if ($(this).val().length == 0) {
                  $(this).val(default_value);
                }
              });
            });





          }
          else{
            $('#consommationDonnees').show();
          }

          


          if(commandeOuverte =="Commande Ouverte"){
            $('.forTheAttachement').show();
            $('#consommationDonnees').hide();
            if (codearticle != null){
              $('#QTE_TRAIT').hide();
              $('#QTE_RESTE').hide();
            var tr;
            tr = $("<tr class='rowArticles3'/>");
              tr.append("<td class='codersAtt'>" + codearticle + "</td>");
              tr.append("<td class='resourceArticleAtt' style='text-align:left; width: 40%'>" + article + "</td>");
              tr.append("<td class='unitAtt'>" + unite + "</td>");
              //tr.append("<td id='SiteTextAtt'>" + sarticle + "</td>");
              tr.append("<td><textarea id='SiteTextAtt' class='md-textarea form-control' style='width:auto;height;auto;' placeholder='Site'>" + sarticle + "</textarea></td>");
              tr.append("<td id='qteAtt' style='text-align:center; display:none;'>" + quantites + "</td>");
              tr.append("<td style='text-align:center;'><input id='quantiteAtt' onkeyup='disableCheck();' name='kp1_inputnumber' min='0.000'  step='0.001' max='" + quantites + "' class='refresh_pricesAtt row_priceAtt' value='" + quantiteResult + "' type='number' style='width: 80px; height: 30px; text-align:center; border:none;'/></td>");
              tr.append("<td id='qteResAtt' style='text-align:center; display:none;'>" + quantites + "</td>");
              tr.append("<td><input id='puAtt' type='text'  value=" + prixunit + " style='width: 80px; text-align:center; border:none;' readonly class='row_quantityAtt'/></td>");
              tr.append("<td id='resultAtt'>" + prixtotht + "</td>");
              tr.append("<td id='calculttcAtt'>" + prixtotttc + "</td>");
              tr.append("<td id='uniqueCodeArticle' style='display:none;'>" + uniqueCodeArticle + "</td>");
              tr.append("<td><input type='checkbox' name='showHide' id='checkboxId' disabled class='data-checkAttachement'/></td>");
             
            $('#tableauxAtt').append(tr);
          }
        
        }
          verifierAttachement();

    $('#tableauxAtt').find('input:checkbox[id$="checkboxId"]').click(function() {
    var isChecked = $(this).prop("checked");
    var $selectedRow = $(this).parent("td").parent("tr");
    var qteChecked = $(this).closest('tr').find('#quantiteAtt').val();
    if(isChecked)
    {
      $(this).closest("tr").find("#quantiteAtt").prop('readonly', true);
    }
    else{
      $(this).closest("tr").find("#quantiteAtt").prop('readonly', false);
    }
    if (isChecked) $selectedRow.css({
        "background-color": "#D4FFAA",
        "color": "black"
    });

    else $selectedRow.css({
        "background-color": '',
        "color": "black"
    });
});


        });

      }
    });
  }
//RecuperationDataTableAttachement1();



            
function disableCheck(){
  var countSelect=0;
  $("#tableauxAtt .rowArticles3 input:checkbox").each(function(){
                $quantite = $(this).closest('tr').find('#quantiteAtt').val();
                
                if ($quantite > 0) {
                  countSelect++;
                     /*$(this).parent().parent().remove();*/
                  $(this).closest('tr').find('#checkboxId').prop('disabled', false);
                }else{
                  $(this).closest('tr').find('#checkboxId').prop('disabled', true);
                }                
            });
           
}


/*  function siteArticle() {
    $(document).ready(function () {
      $('.rowArticles3').each(function () {

        var commandeOuvStand = $('#typebcAtt').text();
        if (commandeOuvStand == "Commande Standard") {
          $(this).find('#SiteTextAtt').prop('readonly', true);
        }
        else {
          if (commandeOuvStand == "Commande Ouverte") {
            $(this).find('#SiteTextAtt').prop('readonly', false);
          }
        }
      });
    });
  }
  siteArticle();
*/

  /*if(article != null )
  {
    RecuperationDataTableAttachement(-1);
  }*/

  //**************************************************************************************************************************************


  function Enregistrer_Attachement() {
    var siteUrl2 = "/sites/PWA/" + window.lenomProjet1 + "/";
    var clientContext = new SP.ClientContext(siteUrl2);
    var oList = clientContext.get_web().get_lists().getByTitle('Tableau_Attachement');

    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);

    var ideeeATt = 0;

    //Enregistrer la phase Projet
    var nomdeprojetAtt = $('#nomprojetAtt').text();
    var direction = $('#directionAtt').text();
    var poles = $('#poleAtt').text();
    var soustraitant = $('#soustraitantAtt').text();
    var commentaire = $('#comments').text();
    var taches = getSelectedText('tacheAtt');

    var tvaprojet = $('#tvaprojetAtt').text();
    var zonePr = $('#zoneprAtt').text();

    //Enregister la phase du code Projet
    var codeoracle = $("#codeoracleAtt").text();
    var chefProjet = $("#chefprojetAtt").text();
    var start = $('#demarrageAtt').text();

    var delaiJ = $('#delaijrAtt').text();
    var delaiM = $('#delaiAtt').text();
    var sous_op = document.getElementById('sous_opAtt').value;

    var typeBC = $('#typebcAtt').text();
    var siteprojet = $('#siteprojetAtt').text();
    var uniqueId = document.getElementById('pcode1Att').value;

    //Enregistrer les prix générer par le Tableau
    var hors_tax = $('#htAtt').text();
    var tvam = $('#tvaAtt').text();
    var ttc = $('#ttcAtt').text();

    //ideeeATt += parseInt(document.getElementById('UniqueCodeAttDyn1AttLoaded').value)+1;
    ideeeATt += parseInt(document.getElementById('UniqueCodeAttDyn').value);
    var prix_word = document.getElementById('prix_en_word').innerHTML;

    oListItem.set_item('nomprojet', nomdeprojetAtt);
    oListItem.set_item('direction', direction);
    oListItem.set_item('pole', poles);
    oListItem.set_item('sous_traitant', soustraitant);
    oListItem.set_item('tache', taches);
    oListItem.set_item('sous_operation', sous_op);
    oListItem.set_item('tva', tvaprojet);
    oListItem.set_item('codeoracle', codeoracle);
    oListItem.set_item('chefprojet', chefProjet);
    oListItem.set_item('dateAttachement', start);
    oListItem.set_item('delai_jour', delaiJ);
    oListItem.set_item('delai_mois', delaiM);
    oListItem.set_item('type_bc', typeBC);
    oListItem.set_item('site', siteprojet);
    oListItem.set_item('montant_ht', hors_tax);
    oListItem.set_item('tva_montant', tvam);
    oListItem.set_item('montant_ttc', ttc);
    oListItem.set_item('zone', zonePr);
    oListItem.set_item('uniqueCodeAtt', uniqueId);
    oListItem.set_item('UniqueAtt', ideeeATt);
    oListItem.set_item('prix_en_word', prix_word);


    oListItem.update();

    clientContext.load(oListItem);

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
  }




  function createItemAtt() {
    $(".rowArticles3").each(function (index) {
      var qte = "";
      var quantATrait = 0;
      var quantRest = 0;

      var ttc = "";
      var htaxe = "";
      var punit = 0;
      //var qt = 0;

      var unit = "";
      var article = "";
      var codear = "";

      var montant_ht = "";
      var tva_montant = "";
      var montant_ttc = "";
      var sous_op = "";
      var zonePr = "";
      var siteprojet = "";

      var region = "";
      var uniqueAtt = 0;
      var uniqueCodeArticle = "";



      //UniqueId += document.getElementById('pcode1').value;
      // var uniqueIdent = $('#pcode1Att').val();

      //uniqueAtt = parseInt($('#UniqueCodeAttDyn1AttLoaded').val())+1;
      uniqueAtt += parseInt($('#UniqueCodeAttDyn').val());
      //alert(UniqueId);

      codear += ($(this).closest('tr').find('.codersAtt').text());
      article += ($(this).closest('tr').find('.resourceArticleAtt').text());
      unit += ($(this).closest('tr').find('.unitAtt').text());
      region += ($(this).find('#SiteTextAtt').val());

      //console.log("Le site est" + region);

      qte += $(this).closest('tr').find('#qteAtt').text();
      quantATrait += parseFloat($(this).find('#quantiteAtt').val());



      quantRest += parseFloat($(this).closest('tr').find('#qteResAtt').html());

      punit += parseFloat($(this).find('#puAtt').val());
      htaxe += ($(this).closest('tr').find('#resultAtt').text());
      ttc += ($(this).closest('tr').find('#calculttcAtt').text());
      uniqueCodeArticle += ($(this).closest('tr').find('#uniqueCodeArticle').text());



      $().SPServices(
        {
          operation: "UpdateListItems",
          async: true,
          webURL: "/sites/PWA/" + window.lenomProjet1 + "/",
          batchCmd: "New",
          listName: "Liste_attachement",
          valuepairs: [
            ["code_article", codear],
            ["article", article],
            ["unite", unit],
            ["site_article", region],
            ["quantite", qte],
            ["qteRetirer", quantATrait],
            ["qteRestant", quantRest],
            ["prix_unit", punit],
            ["prix_tot_ht", htaxe],
            ["prix_tot_ttc", ttc],
            ["uniqueCode", uniqueCodeArticle],
            ["NumAttachement", uniqueAtt]

          ]
        });


    });
  }





  //*******************************************Recuperation de chaque attachement de la liste*****************************************

  function RecuperationDataAttConsulting(ttAtt) {

    $.ajax({
      url: _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Tableau_Attachement')/items?&$filter=UniqueAtt%20eq%20'" + ttAtt + "'",

      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        var dataResults = data.d.results;

        var listItemInfo = "";
        var listItemInfo1 = "";
        var listItemInfo2 = "";
        var listItemInfo3 = "";
        var listItemInfo4 = "";
        var listItemInfo5 = "";
        var listItemInfo6 = "";
        var listItemInfo7 = "";
        var listItemInfo8 = "";
        var listItemInfo9 = "";

        var listItemInfo10 = "";
        var listItemInfo11 = "";
        var listItemInfo12 = "";
        var listItemInfo13 = "";
        var listItemInfo14 = "";
        var listItemInfo15 = "";
        var listItemInfo16 = "";
        var listItemInfo17 = "";
        var listItemInfo18 = "";
        var listItemInfo19 = "";
        var listItemInfoZone = "";
        var listItemInfoUniqueId = "";
        var listItemInfoNumAttachement = "";
        var listItemInfoNumberToWord = "";

        $.each(dataResults, function (key, value) {
          var zonezzzz = value.Zone;
          var uniqueCode = value.uniqueCodeAtt;
          var NumAttachement = value.UniqueAtt;
          var Etat_Attachement = value.Etat_Attachement;

          moment.locale('fr');

          var dateAttachementdevis = value.dateAttachement;


          if(Etat_Attachement =="Supprimé")
          {
            jQuery(document).bind("keyup keydown", function (e) {
              if (e.ctrlKey && e.keyCode == 80) {
                alert('Attachement supprimé');
                return false;
              }
            });
            document.oncontextmenu = new Function("return false");
            $(document).keydown(function (event) {
                if (event.keyCode == 123) { // Prevent F12
                    return false;
                } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
                    return false;
                }
            });
            $("#supprimeAttachement").show();
            $('#printInvoiceAtt1').hide();



          }

          /*//console.log(datedevis);
          var ddemarrage = moment(datedevis).format('L');

          if(datedevis == null)
          {
              var ddemarrage = "";
          }
          else
          {
              var datedevis = moment(datedevis).format('L');
          }*/

          var sous_op = value.sous_operation;

          var zone = value.zone;
          if (zone == null) {
            var zone = "";
          }
          else {
            var zone = zone;
          }

          var codeoracle = value.codeoracle;
          if (codeoracle == null) {
            var codeoracle = "";
          }
          else {
            var codeoracle = codeoracle;
          }

          var chefprojet = value.chefprojet;
          if (chefprojet == null) {
            var chefprojet = "";
          }
          else {
            var chefprojet = chefprojet;
          }

          var delai_jour = value.delai_jour;
          if (delai_jour == null) {
            var delai_jour = "";
          }
          else {
            var delai_jour = delai_jour;
          }


          var delai_mois = value.delai_mois;
          if (delai_mois == null) {
            var delai_mois = "";
          }
          else {
            var delai_mois = delai_mois;
          }

          var type_bc = value.type_bc;
          if (type_bc == null) {
            var type_bc = "";
          }
          else {
            var type_bc = type_bc;
            var UrlArticle = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_attachement')/items?&$filter=NumAttachement%20eq%20'" + ttAtt + "'";
            RecuperationDataTableAttachementConsulting(UrlArticle,type_bc);
          }


          var site = value.site;
          if (site == null) {
            var site = "";
          }
          else {
            var site = site;
          }

          var prix_word = value.prix_en_word;
          if (prix_word == null) {
            prix_word = ""
          }
          else {
            prix_word = prix_word;
          }

          var IdentifiantListes = value.Id;
          var nomprojet = value.nomprojet;
          window.nomprojets = nomprojet;

          if (nomprojet == null) {
            var nomprojet = "";
          }
          else {
            var nomprojet = nomprojet;
          }

          var direction = value.direction;
          if (direction == null) {
            var direction = "";
          }
          else {
            var direction = direction;
          }

          var pole = value.pole;
          if (pole == null) {
            var pole = "";
          }
          else {
            var pole = pole;
          }

          var sous_traitant = value.sous_traitant;
          if (sous_traitant == null) {
            var sous_traitant = "";
          }
          else {
            var sous_traitant = sous_traitant;
          }

          var tache = value.tache;
          if (tache == null) {
            var tache = "";
          }
          else {
            var tache = tache;
          }

          var tva = value.tva;
          if (tva == null) {
            var tva = "";
          }
          else {
            var tva = tva;
          }


          var montant_ht = value.montant_ht;
          if (montant_ht == null) {
            var montant_ht = "";
          }
          else {
            var montant_ht = montant_ht;
          }


          var tva_montant = value.tva_montant;
          if (tva_montant == null) {
            var tva_montant = "";
          }
          else {
            var tva_montant = tva_montant;
          }

          var montant_ttc = value.montant_ttc;
          if (montant_ttc == null) {
            var montant_ttc = "";
          }
          else {
            var montant_ttc = montant_ttc;
          }

          if (sous_op == null) {
            var sous_op = "";
          }


          

          listItemInfo1 += tva;
          listItemInfo2 += tache;
          listItemInfo3 += sous_traitant;
          listItemInfo4 += pole;
          listItemInfo5 += direction;
          listItemInfo6 += nomprojet;

          listItemInfo7 += tva_montant;
          listItemInfo8 += montant_ht;
          listItemInfo9 += montant_ttc;
          listItemInfoZone += zone;

          listItemInfo10 += codeoracle;
          listItemInfo11 += chefprojet;

          listItemInfo13 += dateAttachementdevis;
          listItemInfo14 += delai_jour;
          listItemInfo15 += delai_mois;
          listItemInfo16 += type_bc;
          listItemInfo17 += site;
          listItemInfoNumberToWord += prix_word;

          listItemInfo18 += codeoracle;
          listItemInfo19 += sous_op;

          listItemInfoUniqueId += uniqueCode;

          listItemInfoNumAttachement += NumAttachement;

          document.getElementById('codeoracleenteteAtt1').value = listItemInfo18;

          document.getElementById('pcode1Att1').value = listItemInfoUniqueId;

          document.getElementById('UniqueCodeAtt1').value = listItemInfoNumAttachement;

          $('#codeoracleAtt1').html(listItemInfo10);
          $('#chefprojetAtt1').html(listItemInfo11);

          $('#demarrageAtt1').html(listItemInfo13);
          $('#delaijrAtt1').html(listItemInfo14);
          $('#delaiAtt1').html(listItemInfo15);

          $('#typebcAtt1').html(listItemInfo16);
          $('#zoneprAtt1').html(listItemInfoZone);
          //$('#siteprojetAtt1').html(listItemInfo17);
          $('#sous_opAtt1').html(listItemInfo19);

          $("#tvaprojetAtt1").html(listItemInfo1);
          $("#tacheAtt1").html(listItemInfo2);
          $("#soustraitantAtt1").html(listItemInfo3);
          $("#poleAtt1").html(listItemInfo4);
          $("#directionAtt1").html(listItemInfo5);
          $("#nomprojetAtt1").html(listItemInfo6);

          $("#tvaAtt1").html(listItemInfo7);
          $("#htAtt1").html(listItemInfo8);
          $("#ttcAtt1").html(listItemInfo9);
          $("#prix_en_word1").html(listItemInfoNumberToWord);

        });

      }
    });
  }
  _spBodyOnLoadFunctionNames.push("RecuperationDataAttConsulting");


var ResponseUrlConsultingAtt = ResponseUrlConsultingAtt || [];
  function RecuperationDataTableAttachementConsulting(urlRecAttListe,type_bc) {

    $.ajax({
      url: urlRecAttListe,
      

      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        ResponseUrlConsultingAtt = ResponseUrlConsultingAtt.concat(data.d.results);
        if (data.d.__next) {
          urlRecAttListe = data.d.__next;
          RecuperationDataTableAttachementConsulting(urlRecAttListe,type_bc);
        }
        $.each(ResponseUrlConsultingAtt, function (key, value) {
          var codearticle = value.code_article;

          if (codearticle != null) {
            var article = value.article;
            var unite = value.unite;
            var quantite = value.quantite;
            var prixunit = parseFloat(value.prix_unit).toFixed(3);
            var prixtotht = parseFloat(value.prix_tot_ht).toFixed(3);
            var prixtotttc = parseFloat(value.prix_tot_ttc).toFixed(3);
            var sarticle = value.site_article;
            var dateprix = value.date_creation;
            var quantiteResult = value.qteRestant;
            var quantites = value.qteRetirer;

            if (unite == null) {
              unite = "";
            }

            if (sarticle == null) {
              sarticle = "";
            }

            if ((type_bc =="Commande Ouverte")&&(quantites != "0")) {
                $('#qte_trait_hide').hide();
                $('#qte_reste_hide').hide();

              var tr;
              tr = $("<tr class='rowArticles2'/>");
              tr.append("<td class='codersAtt1'>" + codearticle + "</td>");
              tr.append("<td class='resourceArticleAtt1' style='text-align:left; width: 40%'>" + article + "</td>");
              tr.append("<td class='unitAtt1'>" + unite + "</td>");
              tr.append("<td id='SiteTextAtt1'>" + sarticle + "</td>");
              tr.append("<td id='qteAtt1' style='text-align:center; display:none;'>" + quantite + "</td>");
              tr.append("<td style='text-align:center;'>" + quantites + "</td>");
              tr.append("<td id='qteResAtt1' style='text-align:center; display:none;'>" + quantiteResult + "</td>");
              tr.append("<td><input id='puAtt1' type='text'  value=" + prixunit + " style='width: 80px;  text-align:center; border:none;' readonly class='refresh_prices row_quantity'/></td>");
              tr.append("<td id='resultAtt1'>" + prixtotht + "</td>");
              tr.append("<td id='calculttcAtt1'>" + prixtotttc + "</td>");
              $('#tableauxAtt1').append(tr);
            }

            if ((type_bc =="Commande Standard")&&(quantites != "0")) {

              var tr;
              tr = $("<tr class='rowArticles2'/>");
              tr.append("<td class='codersAtt1'>" + codearticle + "</td>");
              tr.append("<td class='resourceArticleAtt1' style='text-align:left; width: 40%'>" + article + "</td>");
              tr.append("<td class='unitAtt1'>" + unite + "</td>");
              tr.append("<td id='SiteTextAtt1'>" + sarticle + "</td>");
              tr.append("<td id='qteAtt1' style='text-align:center;'>" + quantite + "</td>");
              tr.append("<td style='text-align:center; '>" + quantites + "</td>");
              tr.append("<td id='qteResAtt1' style='text-align:center;'>" + quantiteResult + "</td>");
              tr.append("<td><input id='puAtt1' type='text'  value=" + prixunit + " style='width: 80px;  text-align:center; border:none;' readonly class='refresh_prices row_quantity'/></td>");
              tr.append("<td id='resultAtt1'>" + prixtotht + "</td>");
              tr.append("<td id='calculttcAtt1'>" + prixtotttc + "</td>");
              $('#tableauxAtt1').append(tr);
            }

          }

          //verifier();
        });

      }
    });
  }
  _spBodyOnLoadFunctionNames.push("RecuperationDataTableAttachementConsulting");




  //****************************************************************************************************************************************************************************

  $('#BoutonValiderAttachement').hide();

  //---------------------------------------------------------------------
  //Calcul des lignes selectionnés selon checkbox list
  function verifierAttachement() {
    $('.data-checkAttachement').click(function () {
      var sum = 0;
      var sum1 = 0;
      var sum2 = 0;
      var somme = 0;
      var somme1 = 0;
      var somme2 = 0;
      var TVAval = 0;
      var TVAval1 = 0;

      $('.data-checkAttachement:checked').each(function () {
        sum += parseFloat($(this).closest('tr').find('#resultAtt').text());
        sum1 += parseFloat($(this).closest('tr').find('#calculttcAtt').text());

        TVAval = Number($('#tvaprojetAtt').text());
        TVAval1 += Number($('#tvaprojetAtt').text());

        somme = sum.toFixed(3)
        somme1 = sum1.toFixed(3)
        somme2 = ((TVAval / 100) * sum).toFixed(3)

      });

      $('#htAtt').html(somme);
      $('#tvaAtt').html(somme2);
      $('#ttcAtt').html(somme1);

    });

    $('input[name="showHide"]').click(function () {
      var countChecked = document.querySelectorAll('input[name="showHide"]:checked').length;

      if (countChecked >= 1) {
        $('#BoutonValiderAttachement').show();
      } else {
        $('#BoutonValiderAttachement').hide();
      }

    });






    $('#tableauxAtt').find('input:checkbox[id$="checkboxId"]').click(function () {
      var isChecked = $(this).prop("checked");
      var $selectedRow = $(this).parent("td").parent("tr");



      if (isChecked) $selectedRow.css({
        "background-color": "#D4FFAA",
        "color": "black"
      });

      else $selectedRow.css({
        "background-color": '',
        "color": "black"
      });


    });

  }







  //Enreegistrement des données sur site de projet pour chaque Projet et chaque Devis



  $(document).change('.refresh_pricesAtt', function () {
    refreshPricesAtt();
  })

  // function actuallissant les prix de tous les champs calculer automatiquement
  function refreshPricesAtt() {
    var totalPrice = 0;
    $('#tableauxAtt tr').each(function () {
      totalPrice += refreshRowPriceAtt($(this));
    });
  }





  //function recalculant le prix d'un ligne et retournant le prix
  function refreshRowPriceAtt($row) {
    // récupère le prix et la quantité
    var pourcentage = 0;
    var qteRes = 0;
    var qteAcalc = 0;
    var totQte;
    var pourcentages = $('#tvaprojetAtt').text();

    qteAcalc = $row.find('#quantiteAtt').val();

    pourcentage = parseFloat(pourcentages).toFixed(0);
    quantity = $row.find('.row_quantityAtt').val();
    ////console.log(quantity);

    var price = $row.find('.row_priceAtt').val(),



      totQte = $row.find('#qteAtt').html(),

      qteRes = parseFloat(totQte - qteAcalc);



    rowPrice = price * quantity;

    var resultattext = parseInt(pourcentage) / 100;

    var tot = (resultattext + 1) * (rowPrice);
    //$row.find('.row_total').text(rowPrice.toFixed(3));
    $row.find('#resultAtt').text(rowPrice.toFixed(3));

    $row.find('#calculttcAtt').text(tot.toFixed(3));

    $row.find('#qteResAtt').text(qteRes.toFixed(2));
    return tot;
    return rowPrice;
    return qteRes;
  }



  //*************************************************Validation des articles ***************************************************


  $('#BoutonValiderAttachement').click(function () {
    /*$("#checkboxId input:checkbox").each(function(){
                  if (this.checked == false) {
                       $(this).parent().parent().remove();
                  }
                  return true;  
              });*/
    $('#printInvoiceAtt').show();
    $('#BoutonValiderAttachement').hide();

  });





  //******************************************************Convert Number to word ***********************************************

  var myEl = document.getElementById('BoutonValiderAttachement');

  myEl.addEventListener('click', function () {
    document.getElementById('prix_en_word').innerHTML = NumberToLetter(document.getElementById('ttcAtt').innerHTML);
  }, false);
  // $(document).ready(function() {
  //     $("#btnSubmit").click(function(){

  //     }); 
  // });

  function NumberToLetter(nombre) {

    var letter = {
      0: "zéro",
      1: "un",
      2: "deux",
      3: "trois",
      4: "quatre",
      5: "cinq",
      6: "six",
      7: "sept",
      8: "huit",
      9: "neuf",
      10: "dix",
      11: "onze",
      12: "douze",
      13: "treize",
      14: "quatorze",
      15: "quinze",
      16: "seize",
      17: "dix-sept",
      18: "dix-huit",
      19: "dix-neuf",
      20: "vingt",
      30: "trente",
      40: "quarante",
      50: "cinquante",
      60: "soixante",
      70: "soixante-dix",
      80: "quatre-vingt",
      90: "quatre-vingt-dix",
    };

    var i, j, n, quotient, reste, nb;
    var ch
    var numberToLetter = '';
    //__________________________________

    if (nombre.toString().replace(/ /gi, "").length > 15) return "dépassement de capacité";
    if (isNaN(nombre.toString().replace(/ /gi, ""))) return "Nombre non valide";

    nb = parseFloat(nombre.toString().replace(/ /gi, ""));
    //if (Math.ceil(nb) != nb) return "Nombre avec virgule non géré.";
    if (Math.ceil(nb) != nb) {
      nb = nombre.toString().split('.');
      var astr = nb[1].toString();
      if (astr[0] == "0") {
        return NumberToLetter(nb[0]) + " virgule zéro " + NumberToLetter(nb[1]);
      }
      else {
        return NumberToLetter(nb[0]) + " virgule " + NumberToLetter(nb[1]);
      }
    }

    n = nb.toString().length;
    switch (n) {
      case 1:
        numberToLetter = letter[nb];
        break;
      case 2:
        if (nb > 19) {
          quotient = Math.floor(nb / 10);
          reste = nb % 10;
          if (nb < 71 || (nb > 79 && nb < 91)) {
            if (reste == 0) numberToLetter = letter[quotient * 10];
            if (reste == 1) numberToLetter = letter[quotient * 10] + "-et-" + letter[reste];
            if (reste > 1) numberToLetter = letter[quotient * 10] + "-" + letter[reste];
          } else numberToLetter = letter[(quotient - 1) * 10] + "-" + letter[10 + reste];
        } else numberToLetter = letter[nb];
        break;
      case 3:
        quotient = Math.floor(nb / 100);
        reste = nb % 100;
        if (quotient == 1 && reste == 0) numberToLetter = "cent";
        if (quotient == 1 && reste != 0) numberToLetter = "cent" + " " + NumberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = letter[quotient] + " cents";
        if (quotient > 1 && reste != 0) numberToLetter = letter[quotient] + " cent " + NumberToLetter(reste);
        break;
      case 4:
      case 5:
      case 6:
        quotient = Math.floor(nb / 1000);
        reste = nb - quotient * 1000;
        if (quotient == 1 && reste == 0) numberToLetter = "mille";
        if (quotient == 1 && reste != 0) numberToLetter = "mille" + " " + NumberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = NumberToLetter(quotient) + " mille";
        if (quotient > 1 && reste != 0) numberToLetter = NumberToLetter(quotient) + " mille " + NumberToLetter(reste);
        break;
      case 7:
      case 8:
      case 9:
        quotient = Math.floor(nb / 1000000);
        reste = nb % 1000000;
        if (quotient == 1 && reste == 0) numberToLetter = "un million";
        if (quotient == 1 && reste != 0) numberToLetter = "un million" + " " + NumberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = NumberToLetter(quotient) + " millions";
        if (quotient > 1 && reste != 0) numberToLetter = NumberToLetter(quotient) + " millions " + NumberToLetter(reste);
        break;
      case 10:
      case 11:
      case 12:
        quotient = Math.floor(nb / 1000000000);
        reste = nb - quotient * 1000000000;
        if (quotient == 1 && reste == 0) numberToLetter = "un milliard";
        if (quotient == 1 && reste != 0) numberToLetter = "un milliard" + " " + NumberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = NumberToLetter(quotient) + " milliards";
        if (quotient > 1 && reste != 0) numberToLetter = NumberToLetter(quotient) + " milliards " + NumberToLetter(reste);
        break;
      case 13:
      case 14:
      case 15:
        quotient = Math.floor(nb / 1000000000000);
        reste = nb - quotient * 1000000000000;
        if (quotient == 1 && reste == 0) numberToLetter = "un billion";
        if (quotient == 1 && reste != 0) numberToLetter = "un billion" + " " + NumberToLetter(reste);
        if (quotient > 1 && reste == 0) numberToLetter = NumberToLetter(quotient) + " billions";
        if (quotient > 1 && reste != 0) numberToLetter = NumberToLetter(quotient) + " billions " + NumberToLetter(reste);
        break;
    }//fin switch
    /*respect de l'accord de quatre-vingt*/
    if (numberToLetter.substr(numberToLetter.length - "quatre-vingt".length, "quatre-vingt".length) == "quatre-vingt") numberToLetter = numberToLetter + "s";

    return numberToLetter;

  }







  //*****************************************************************************************************************************





  $('#confirmModal').on('show.bs.modal', function (event) {
    var _target = $(event.relatedTarget);
    if (_target.length > 0) {
      var callbackfunction = _target.data("callback");
      var functionparam = _target.data("parameter");
      $(this).attr("data-callback", callbackfunction);
      $(this).attr("data-parameter", functionparam);
    }
  });


  function TriggerConfirmation(callback, argu) {
    $("#confirmModal").attr("data-callback", callback);
    $("#confirmModal").attr("data-parameter", argu);
    $("#confirmModal").modal('show');
  }

  function ExecuteCallback(callbackFunc, argument) {
    eval(callbackFunc).call(this, argument)
  }

  function DeleteData(argument) {
    alert("Devis Supprimer !" + argument);
  }


</script>