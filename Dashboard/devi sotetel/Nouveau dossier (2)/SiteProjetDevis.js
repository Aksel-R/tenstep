
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

<style>
 #theadcolor{
  background:#ff7d22;
    background-color: #fc9628;
    background-image: linear-gradient(225deg,#fc9628 20%,  #ff7d22 80%);
    padding:10px;
    margin: 0 0 10px 0;
    text-align:right;
    border-radius : 5px ;
  }
#chk { cursor: pointer; }
#modal-dialog { cursor: pointer;}

/*Some stylings to the buttons*/
#chk, #modal-dialog ,#redirection { color: #fff; border-radius: 5px;  }
#chk { background: #0703af; }
#modal-dialog{ background: #af2303; }
#redirection {background-color: #8bc34a; position: absolute; left:999px;}

option:empty
{
 display:none;
}

#popup {
    max-width: 600px;
    /* width: 80%; */
    padding: 20px;
    position: relative;
    top: 200px;
    background: #fff;
    margin: 20px auto;
    max-height: 500px;
    /* overflow-y: scroll; */
    /* overflow-x: hidden; */
}

#overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  display: none;
}

.fa-spin-custom, .glyphicon-spin {
    -webkit-animation: spin 1000ms infinite linear;
    animation: spin 1000ms infinite linear;
}
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
    display: none;
}
  .card{
            box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);
            background-color: #fafffa;
            margin-bottom: 0px;
            border: 0px;
            border-radius: 0.750rem;
        }

/*#tableau td {
      text-align: center;
      background-color:white;
  }*/



/* The Modal (background) */

.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
  
}


/* Modal Content/Box */

.modal-content {
  color: #414242;
  margin: 15% auto;
  /* 15% from the top and centered */
  padding: 30px 60px;
  
  /* Could be more or less, depending on screen size */
  font-family: Lato;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.5px;
  -webkit-font-smoothing: antialiased;
  /* Rectangle 2 Copy 3: */
  background: #FFFFFF;
  border: 1px solid #9B9C9D;
  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.20);
  border-radius: 6px;
}

.modal-content a {
  color: #636464;
}

.modal-content > h1 {
  display: block;
  width: 100%;
  text-align: center;
}

button#accept {
  margin: 30px auto;
  display: block;
  border: 1px solid #fc4c02;
  border-radius: 3px;
  background: #fff;
  color: #fc4c02;
  font-size: 16px;
  height: 48px;
  padding: 0 20px;
  cursor: pointer;
}

#contentBox {
    margin-right: 3px;
    margin-left: 200px;
}
#sideNavBox {
    margin-left: 10px;
    margin-right: 10px;
}





.preload { 
  width:100px;
  height: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
}


</style>

</head>
<body>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content" style="width: fit-content;">
    <h1>
    Bonjour!
    </h1>
    <h3>Merci de vérifier les données de votre devis !</h3>
    <p id="messageErreur">
      </p>
    <button type="button" id="accept" class="btn btn-default" data-dismiss="modal">  
        Je comprends et je suis d'accord
    </button>
  </div>


</div>




<div id="customers">
<div class="container1" style="width:100%;background-color: #faf7f7;">
  <div class="card" style="margin-top: 10px;">
            <header>
            <div  id="rejete"  style="font-size: 30pt; font-family: auto; color:red; text-align: center; display:none;">
                                Vous n'avez pas le droit de crée un devis !
                            </div>
                <div class="row">
                    <div class="col">
                            <img src="/sites/PWA/_catalogs/masterpage/sotetel.png" width="150" height="80" data-holder-rendered="true" />
                    </div>
                  
                    <div class="title">                      
                            <div style="font-size: 35pt; color:black; font-family: auto; text-align: center;">
                            Devis
                        </div>
                            <strong><input type="text" readonly id="UniqueCodeAttDyn" style=" font-size: 13px; font-weight: bolder;width:40px; background-color:white; border:none; display:none;"/><input type="text" readonly id="pcode1" style=" font-size: 13px; font-weight: bolder;width:50px; background-color:white; border:none; "/>/<input type="text" readonly id="codeoracleentete"  style=" font-size: 15px; font-weight: bolder;width:90px; background-color:white; border:none; text-align: center;"/> /SOTETEL</strong>
                    </div>

                  <div class="col company-details">
                        <center>
                            <h5 style="font-family:auto; color:black;">Société Tunisienne d'Entreprise de</h5>
                            <h5 style="font-family:auto; color:black;">Télécommunication Service Sous Traitance</h5>
                            <br>
                            <input type="date" id="date" readonly="" style="border:none; width:200px; float:right;margin-right: 10px;">
                        </center>
                    </div>
                </div>
            </header>
   </div>   
</hr>

<br>


<div class="row mb-2">

        <div class="col-md-6">
          <div class="card">
            <div class="card-body d-flex flex-column align-items-start">
             <table border="0" width="100%">
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Code_Oracle : </strong></div></td>
                  <td><div type="text" class="form-control" id="codeoracle" onChange="test()" style="width: 100%; height: 35px; background-color:transparent;"></div></td> 
                </tr> 


                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>Chef Projet : </strong></div></td>
                    <td>
                      <div type="text" class="form-control" id="chefprojet" required style="width: 100%; height: 35px;"/>
                    </td>
                </tr>

                <tr height="50px">
                <td><div class="mb-1 text-muted"><strong>Date_Démarrage : *</strong></div></td>
                  <td>
                    <input class="form-control" type="date"  value="" id="start" required  name="datepicker" style="width: 100%; height: 35px;">
                  </td>
                </tr>


                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Délai de Réalisation : *</strong></div></td>
                  <td>
                  <div id="lignes">
                          <input class="form-control" onkeypress="process(event, this)" id="dureeMois" min="0" max="12" type="number"  placeholder="Mois"  style="width: 80px; height: 35px;" required />&ensp;<p>Mois</p>&emsp;
                          <input class="form-control" onkeypress="process(event, this)" id="dureeJours" min="0" max="31" type="number"   placeholder="Jours"  style="width: 80px; height: 35px;" required />&ensp;<p>Jour</p></br>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                  <p id="duree" style="color:red; display:none"><i>Vérifier les durées</i></p>
                  </td>
                </tr>

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Type BC : *</strong></div></td>
                  <td>   
                    <select id="operations" class="form-control"  style="width: 100%; height: 35px;" placeholder="Type de Commande">
                              <option value="Commande Ouverte">Commande Ouverte</option>
                              <option value="Commande Standard">Commande Standard </option>   
                    </select>
                  </td>
                </tr>

                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>Prix Par Zone : *</strong></div></td>
                      <td>
                         <select class="form-control" name="filter" id="zone" placeholder="Choisir votre Zone" onChange="test3();" style="width: 100%; height: 35px;" > 
                                 <option value="ChoisirlaZone">Choisir la Zone</option>
                                 <option value="Zone 1">Zone 1</option>
                                 <option value="Zone 2">Zone 2</option>
                                 <option value="Zone 3">Zone 3</option>
                                 <option value="Zone 4">Zone 4</option> 
                                 <option value="Zone 5">Zone 5</option>                                  
                         </select>
                    </td> 
                </tr>
            </table>
            </div>
          </div>
</div>



<div class="col-md-6">
  <div class="card ">
      <div class="card-body d-flex flex-column align-items-start">
        <table border="0" width="100%">

          <tr height="50px">
              <td><div class="mb-1 text-muted"><strong>Projet : </strong></div></td>
              <td>
                <select class="form-control" id="nomprojet" onChange='test()'  style="width: 100%; height: 35px;">
                
                </select>
              </td>
          </tr> 

          <tr height="50px">
              <td><div class="mb-1 text-muted"><strong>Direction : </strong></div></td>
              <td><span type="text" class="form-control" id="directionprojet" style="width: 100%; height: 35px;"></span></td> 
          </tr>
          


          <tr height="50px">
              <td><div class="mb-1 text-muted"><strong>Pole :</strong></div></td>
              <td><div type="text" class="form-control"  id="poleprojet" onChange="test()" style="width: 100%; height: 35px;" value="Pole"></td>
          </tr>

          <tr height="50px"> 
              <td> <div class="mb-1 text-muted"><strong>Sous_Traitant *</strong></div></td> 
              <td>
                  <select id="listedest" class="form-control" style="width: 100%; height: 35px;" placeholder="Choisir un Sous_Traitant" >
                    <option value="">Choisir Un Sous_Traitant</option>
                  </select>
              </td>
          </tr>
          <tr>
              <td></td>
              <td>
                  <p id="soustaint" style="color:red; display:none"><i>Vérifier le Sous_Traitant</i></p>
              </td>
          </tr>


          <tr height="50px"> 
              <td> <div class="mb-1 text-muted"><strong>Opérations/Tâches : *</strong></div></td> 
              <td>
                  <select id="liste"  data-live-search="true" class="form-control" placeholder="Choisir une tâche" style="width: 100%; height: 35px;">
                    <option value="">Choisir une Opération</option>
                  </select>
                  <p id="optache" style="color:red; display:none"><i>Vérifier opération</i></p>

                  <input type="text" class="form-control" id="SousOp"    placeholder="Sous_Opération"  style="width: 100%; height: 35px; background-color:white;">
              </td>
          </tr>
          <tr>
              <td></td>
              <td>
                <p id="sousoperation" style="color:red; display:none"><i>Vérifier Sous_Opération</i></p>
              </td>
          </tr>

        <tr height="50px">
             <td> <div class="mb-1 text-muted"><strong>TVA% : *</strong></div></td> 
             <td>
                 <select class="form-control" id="size"  placeholder="Choisir TVA% " style="width: 30%; height: 30px;" onChange='refreshPrices()'>
                          <option value="19">19%</option>
                          <option value="13">13%</option>
                 </select>
             </td>
        </tr>
        <tr height="50px">
            <td>        
                <div class="mb-1 text-muted"><strong>Commentaires :</strong></div>
            </td>

            <td>
                <textarea id="comments" class="md-textarea form-control" rows="3" style="width: 100%" ></textarea>
            </td>
        </tr>

    



        </table>
      </div>
    </div>
  </div>
</div>


<div class="card-body d-flex flex-column align-items-start">
      <table border="0" style="width: 40%;" >
          <tr>
            <td><div class="mb-1 text-muted"><strong>Site :</strong></div></td>
            <td><textarea id="siteprojet" class="md-textarea form-control" placeholder="Site" rows="2" style="width : 100%" ></textarea></td>
          </tr>
              <tr>
              <td></td>
              <td>
                  <p id="sitessotele" style=" float:right; color:red; display:none"><i>Vérifier votre Site</i></p>
              </td>
          </tr>
      </table>
</div>
</br>
<div id="ExcelImport">
    <div class="col-md-12" style=" padding: 0px">
                <div class="card " style="margin-bottom: 20px; padding: 0px">
                    <div class="card-body">
                          <table id="tableau"  class="table table-striped table-bordered table-sm" cellspacing="10" width="100%">
    <tr id="theadcolor">
      <th scope="col"  >Code Article</th>
      <th scope="col"  style="width:15%;" >Article</th>
      <th scope="col"  >Unité</th>
      <th scope="col"  >Site</th>
      <th scope="col"  style="width:5%;" >QTE</th>
      <th scope="col"  style="display:none">Prix Zone 1</th>
      <th scope="col"  style="display:none">Prix Zone 2</th>
      <th scope="col"  style="display:none">Prix Zone 3</th>
      <th scope="col"  style="display:none">Prix Zone 4</th>
      <th scope="col"  style="display:none">Prix Zone 5</th>
      <th scope="col"  style='display:none'>TaskName</th>
      <th scope="col"  class='hide'>ProjectName</th>
      <th scope="col"  >Prix Tot HT</th>
      <th scope="col"  class="price" >Prix Tot TTC</th>
      <th scope="col"  style="display:none">Zone</th>
      <th scope="col"  style="display:none"></th>
    </tr>


</table>
                    </div>
                </div>
            </div>
            </div>




<ul id="pagination-demo" class="pagination-sm"></ul>

        <div class="row">

            <div class="col-lg-3 ml-auto" style="margin-bottom: 10px;margin-right: -25px;">
              <button type="button" style="float:left; background-color:#ff7d22" class="btn btn-primary">
            <a href="x" download="down.xls" id="btnExport" style=";color:white;">
                Exporter le tableau format excel
            </a>
        </button>

            </div>
        </div>



        <div class="row">

            <div class="col-lg-4 col-sm-5 ml-auto" style="margin-right: 0px">
              <div class="card ">
                    <div class="card-body">
                <table class="table table-clear" style="color: black;">
                    <tbody >

                        <tr>
                            <td class="left" style="width:40%;">
                                <div class="form-group">
                                    <strong>Montant HT : </strong>
                            </td>

                            <td class="right" style="width:100%;">
                                <div class="form-control" style="width:100%; text-align:center;" type="text"
                                    name="number" value="" readonly id="ht" />
                            </td>
                            <td class="right">
                                <p>DT</p>
                            </td>
                        </tr>

                        <tr>
                            <td class="left" style="width:40%;">
                                <div class="form-group">
                                    <strong>TVA : </strong>
                            </td>

                            <td class="right" style="width:100%;">
                                <div class="form-control" style="width:100%; text-align:center;" type="text"
                                    name="number" value="" readonly id="tva" />
                            </td>
                            <td class="right">
                                <p>DT</p>
                            </td>
                        </tr>

                        <tr>
                            <td class="left" style="width:40%;">
                                <div class="form-group">
                                    <strong>Montant TTC : </strong>
                            </td>

                            <td class="right" style="width:100%;">
                                <div class="form-control" style="width:100%; text-align:center;" type="text"
                                    name="number" value="" readonly id="ttc" />
                            </td>
                            <td class="right">
                                <p>DT</p>
                            </td>
                        </tr>
                          <tr>
                <td class="left">
                <button id="chk" type="submit" onclick="verifierSiteOp(); verifierLesChamps();" class="confirmerDevis btn btn-primary"  name="chk" >Valider Les champs</button>
                </td>
                <td class="left">
                <button id="approuveValidation" type="submit"  class="btn btn-info">Approuver le devis</button>
                </td>
                <td class="right">
                <button type="submit"   id="modal-dialog" data-modal-type="confirm"  class="btn btn-primary">Enregistrer Devis</button>
                </div>
                </td>
            </tr>
                    </tbody>
                </table>
              </div>
            </div>
            </div>
        </div>



<table border="0">
    <tr>
      <td><strong>Arrétée la somme du devis à :   </strong></td> 
      <td><div  id="word">&nbsp;&nbsp;&nbsp;</div></td>
    </tr>
</table>

<hr/>


<div class="mb-1 text-muted"><strong>Signatures:</strong></div><br/><br/>

<div class="row mb-2">
        <div class="col-md-6">  
              <center><div class="mb-1 text-muted"><strong> SOTETEL</strong></div></center><br/>   
        </div>

        <div class="col-md-6">
              <center><div class="mb-1 text-muted"><strong>Sous_Traitant</strong></div></center><br/>           
        </div>
</div>
</div>


</div>



    <div id="overlay">
      <div id="popup">
              <div class="form-group">
                    <span class="popuptext" id="myPopup">Votre devis est en cours d'enregistrement... Merci de patienter <span class="glyphicon glyphicon-refresh glyphicon-spin"></span></span>    
              </div>
      </div>
    </div>


</body>



<link href="http://cdn.grapecity.com/spreadjs/hosted/css/gc.spread.sheets.excel2013white.10.1.0.css" rel="stylesheet" type="text/css" />  
    <script type="text/javascript" src="http://cdn.grapecity.com/spreadjs/hosted/scripts/gc.spread.sheets.all.10.1.0.min.js"></script>  
    <script type="text/javascript" src="http://cdn.grapecity.com/spreadjs/hosted/scripts/interop/gc.spread.excelio.10.1.0.min.js"></script>  


<link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/css_Library/bootstrap.4.1.1.min.css"/>
<link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/css_Library/bootstrap.min.css"/>
<link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/css_Library/bootstrap3.0.4.min.css"/>
<link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/css_Library/bootstrap-select.css"/>
<link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/css_Library/Mise_en_Forme1.css"/>

<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/jquery.2.1.4.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/jquery.min.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/jquery-2.1.0.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/jquery-34.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/jquery1.min.js"></script>
    <script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/popper.min.js"></script>
    <script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/bootstrap1.min.js"></script>
    

<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/bootstrap.3.4.0.min.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/bootstrap.bundle.min.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/bootstrap.min.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/bootstrap-select.min.js"></script>

<script type="text/javascript" src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/JavaScript_Traitements/Insertion_recuperationDuplicate.js"></script>
<script type="text/javascript" src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Library_MomentJS/moment-with-locales.js"></script>

<script src="/sites/PWA/_catalogs/masterpage/Devis_Sotetel/Formulaire_Site_De_Projet/Jquery_Library/jquery.num2words.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript">




$(document).ready(function(){
    $('.confirmerDevis').click(function(){
            $("#tableau .rows input:checkbox").each(function(){
                $quantite = $(this).closest('tr').find('#quantite').val();
                if (this.checked == true) {
                     /*$(this).parent().parent().remove();*/
                      $(this).attr("disabled", true);
                }


                if((this.checked == true)&&($quantite !=0)){
                    $(this).closest('tr').find('#quantite').prop('readonly', true);
                    $(this).closest('tr').find('#quantite').prop('disabled', true);   
                    //alert('checked');
                }
                return true;  
            })
    });
});

function ableCheck(){
  var countSelect=0;
  $("#tableau .rows input:checkbox").each(function(){
                $quantite = $(this).closest('tr').find('#quantite').val();
                
                if ($quantite > 0) {
                  countSelect++;
                     /*$(this).parent().parent().remove();*/
                  $(this).closest('tr').find('#checkboxId').prop('disabled', false);
                }else{
                  $(this).closest('tr').find('#checkboxId').prop('disabled', true);
                }                
            });
            if (countSelect>0) {
              document.getElementById('zone').disabled=true;
            }else{
              document.getElementById('zone').disabled=false;
            }
}



//default date
document.getElementById('start').valueAsDate = new Date();

jQuery(document).ready(function() {
    jQuery('#loadi').fadeOut(5000);
});

document.querySelector("#modal-dialog").addEventListener("click", function(e) {
  e.preventDefault();
});

document.querySelector("#chk").addEventListener("click", function(e) {
  e.preventDefault();
});

document.querySelector("#approuveValidation").addEventListener("click", function(e) {
  e.preventDefault();
});

    $("#btnExport").click(function (e) {
        $(this).attr({
            'download': "Table_Article.xls",
                'href': 'data:application/csv;charset=utf-8,' + encodeURIComponent( $('#ExcelImport').html())
            })
        });


    function process(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
       return false;
    }
}


$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
});










function reload() {
  log("Reloading...");
  location.reload(true);
}


$('#approuveValidation').hide();
$('#modal-dialog').hide();
function verifierSiteOp()
{
  
    var sous_op = document.getElementById("SousOp");
    //console.log("La sous opération " + sous_op);
    var siteSotetel = document.getElementById("siteprojet");
    var zoneArticle = document.getElementById('zone');
    var opetache  = document.getElementById('liste');

    if(opetache.value == "")
    {
      $("#optache").show();
      $('#myModal').modal('show');
      $("#modal-dialog").hide();
      document.getElementById("messageErreur").innerHTML = "Merci de remplir l'opération";
    }else{
      $("#optache").hide();
      $("#modal-dialog").show();
      $('#liste').prop('disabled',true);
    }


    if((sous_op.value == "")||(sous_op.value == null))
    {
      $("#sousoperation").show();
      $('#myModal').modal('show');
      $("#modal-dialog").hide();
      $('#modal-dialog').prop('disabled',true);
      document.getElementById("messageErreur").innerHTML ="Merci de remplir la Sous_Opération";
    }else{
      $("#sousoperation").hide();
      $("#modal-dialog").show();
      sous_op.setAttribute('readonly', true);
      $('#modal-dialog').prop('disabled',false);
    }


    $('#size').prop('disabled',true);
    $('#zone').prop('disabled',true);
    $('#liste').prop('disabled',true);



    if((siteSotetel.value == "")||(siteSotetel.value ==null))
    {
      $("#modal-dialog").hide();
      $('#modal-dialog').prop('disabled',true);
      $("#sitessotele").show();
      $('#myModal').modal('show');
      document.getElementById("messageErreur").innerHTML ="Merci de remplir le Site";
    }else{
      $("#modal-dialog").show();
      $("#sitessotele").hide();
      $('#modal-dialog').prop('disabled',false);
      siteSotetel.setAttribute('readonly', true);
    }

     var delaijour = document.getElementById("dureeJours");
    var delaimois = document.getElementById("dureeMois");

    

    var listedest = document.getElementById("listedest");
    
   

    if(delaijour.value == "")
    {
      $("#modal-dialog").hide();
      $('#myModal').modal('show');
      $("#duree").show();
      document.getElementById("messageErreur").innerHTML ="Merci de vérifier le délai du jour";
    }else{
      $("#modal-dialog").show();
      $("#duree").hide();
      delaijour.setAttribute('readonly', true); 
    }



    if(delaimois.value == "")
    {
      $("#duree").show();
      $('#myModal').modal('show');
      $("#modal-dialog").hide();
            document.getElementById("messageErreur").innerHTML ="Merci de vérifier le délai du mois";
    }else{
      $("#duree").hide();
      $("#modal-dialog").show();
      delaimois.setAttribute('readonly', true); 

    }

    

    if(listedest.value == "")
    {
      $("#soustaint").show();
      $('#myModal').modal('show');
      $("#modal-dialog").hide();
            document.getElementById("messageErreur").innerHTML ="Merci de vérifier le Sous_Traitant";
    }else{
      $("#soustaint").hide();
      $("#modal-dialog").show();
      $('#listedest').prop('disabled',true);
    }
}


 function verifierLesChamps()
 {

    if((opetache.value == "") || ((sous_op.value == "")||(sous_op.value == null)) || ((siteSotetel.value == "")||(siteSotetel.value ==null)) || (delaijour.value == "") || (delaimois.value == "") || (listedest.value == "") )
    {
        $('#approuveValidation').hide();
    }
    else
    {
        $('#approuveValidation').show();
        $('#chk').hide();
    }
}      

               


$('#chk').click(function(){
  $("#tableau input:checkbox").each(function(){
                if (this.checked == false) {
                     $(this).parent().parent().remove();
                }
                return true;  
            });
    if(!$('#dureeJours').val())
    {
      $("#modal-dialog").hide();
      $("#duree").show();
      return false;
    }
    if(!$('#dureeMois').val())
    {
        $("#modal-dialog").hide();
        $("#duree").show();
        return false;
    }
    if(!$('#listedest').val())
    {
        $("#modal-dialog").hide();
        return false;
    }
  


});




$('#modal-dialog').hide();



var loginName = "";
var userid = _spPageContextInfo.userId;
setTimeout(GetCurrentUser,5000);

function GetCurrentUser() {
var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";

var requestHeaders = { "accept" : "application/json;odata=verbose" };

$.ajax({
  url : requestUri,
  contentType : "application/json;odata=verbose",
  headers : requestHeaders,
  success : onSuccess,
  error : onError
  });
}

function onSuccess(data, request) {
    var loginName = data.d.Title;
    var nom = document.getElementById('chefprojet').innerHTML;
        if((nom != loginName) &&(loginName !="admint"))
        {
           $('#modal-dialog').hide();   
           $('.confirmerDevis').hide(); 
           $('#tableau').hide();
           $('#rejete').show();
           $('.form-control').prop( "disabled", true );   
        }
}


function onError(error) {
  alert(error);
}


</script>