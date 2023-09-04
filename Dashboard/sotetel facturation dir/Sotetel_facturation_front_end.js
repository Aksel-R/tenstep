  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Sotetel Project</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

  <!-- select2 -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />

  <!-- select2-bootstrap4-theme -->
  <link href="https://raw.githack.com/ttskch/select2-bootstrap4-theme/master/dist/select2-bootstrap4.css" rel="stylesheet">


    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <!-- Font Awesome -->
    <link href="/PWA/_catalogs/masterpage/Module_de_facturation_client/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="/PWA/_catalogs/masterpage/Module_de_facturation_client/css/custom1.min.css" rel="stylesheet">
    <link href="/PWA/_catalogs/masterpage/Module_de_facturation_client/css/MiseEnPage.css" rel="stylesheet">

<style>
/*.modal-header{
  background-color:#6A3212;
  color:white;
  text-transform:uppercase;
}
.modal-body{
  background-color:#F8D39E;
  color:black;
  text-align:justify;
}
.btn-color{
  background-color:#D56B1F;
  color:white;
}
.modal-footer{
  background-color:#6A3212;
  
  height:60px;
}
.modal-body{
  font-size:18px;
  opacity:0.8;
  
}*/


/*.file-input__input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;

  z-index: -1;
}

.file-input__label {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  font-weight: 600;
  color: #fff;
  font-size: 14px;
  padding: 10px 12px;
  background-color: #ed5f49;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
}

.file-input__label svg {
  height: 16px;
  margin-right: 4px;
}*/




.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
    display: none;
}

.panel-default>.panel-heading {
    color: #333;
    background-color: #ed5f49;
    border-color: #ddd;
    border-radius: 4px;
}

#entete1{
    text-align:center;
}

</style>

  </head>
<div id="beforePrint">

      <div id="headercolor">
          <div>
            <small class="smallRisks">
              <u>Suivi et facturation : CA et RG</u>
            </small>
            <small class="smallRisks1">
              <img style="width: 100px; height: 50px;" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/css/sotetel.png"/>
            </small>
          </div>
      </div>



<div id="entete1">
<div class="row">

                   <div class="col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                
                                <div class="col-xs-10 text-center">
                                   <div class="col-xs-4" style="font-size:smaller;  color:white;font-family: monospace;">Opération: </div>
                                    <div class="col-xs-8">    
                                        <span id="OperationAttachement" style="font-size:smaller;  color:white;font-family: monospace;"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                
                                <div class="col-xs-10 text-center">
                                   <div class="col-xs-4" style="font-size:smaller;  color:white;font-family: monospace;">Projet: </div>
                                    <div class="col-xs-8">
                                        <span id="ProjectAttachement" style="font-size:smaller; color:white;font-family: monospace;"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-10 text-center">
                                   <div class="col-xs-8" style="font-size:smaller;  color:white;font-family: monospace;">Montant global des attachements:</div>
                                    <div class="col-xs-4">    
                                        <span id="CoutAttachement" style="font-size:smaller;  color:white;font-family: monospace;"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4" style="display:none;">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-10 text-center">
                                    <div class="col-xs-6">    
                                        <div class="form-control" id="resourceTableau" style="height: auto;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            
        </div>
</div>


    <div class="row" id="entete1">
             <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-box table-responsive">
                                <table id="tableauSaisiAttachement" border="0" width="100%">
                                  <tr>
                                    <td><strong>Saisir un attachement: </strong></td>     
                                    <td><input type="text" class="form-control" id="OperationAttachementAsaisir" onkeypress="return event.keyCode != 13;" style="height: 35px; background-color:transparent;"/>
                                    </td> 
                                    <td style="display:none;"><div class="form-control" id="id_Tasks" style="height: auto;"></div></td>
                                    <td style="display:none;"><div class="form-control" id="id_Projects" style="height: auto;"></div></td> 
                                    
                                    <td> <button id="EnregistrerNouveauAttachement" onclick="return false;" style="float:right;">Enregistrer</button></td>
                                    </tr>
                                    <tr>
                                    <td></td><td><label class="control-label">Vous n'avez pas le droit de saisir des duplicatas</label></td>
                                    <td></td>
                                    </tr>
                                </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
    </div>

       <div class="row" id="entete1">
<div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-box table-responsive">
                        <div class="table-fixed-column-outter">
  <div class="table-fixed-column-inner">

<div class="container alert alert-light" style="width: -webkit-fill-available; float: right;"> 

<input id="search"  type="text" class="form-control" onkeypress="return event.keyCode != 13;" style="width:50%; float:right;" placeholder="Saisir votre recherche......">
</div
<br>
<legend color="blue" font-weight="bold" style="text-align: initial;">Lignes Attachements</legend>
<div class="form-group" style="    float: right;">
                                <!--        Show Numbers Of Rows        -->
                                <select class="form-control" name="state" id="maxRows">
                                    <option value="5000">Afficher toutes les lignes</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                    <option value="70">70</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                          <table id="tableauxAttachement" border='1' style="max-width: 150%;" class="table-fixed-column table-fixed-column jambo_table  table table-bordered table-striped">
                            <thead>
                              <tr>
                                <th>Edit</th>
                                <th>UP</th>
                                <th>Num</th>
                                <th>ID</th>
                                <th>Code</th>
                                <th>Attach</th>
                                <th>Date</th>
                                <th>Montant</th>
                                <th>Nb Client</th>
                                <th>Client</th>
                                <th>Bénéficier</th>
                                <th>Utilisateur</th>
                                <th>facture</th>
                                <th>Date fact</th>
                                <th>Appel</th>
                                <th>Croquis</th>
                                <th>Pat</th>
                                <th>PV RP</th>
                                <th>RD Prévu</th>
                                <th>RPFact</th>
                                <th>RDFact</th>
                                <th>Sous_Trait</th>
                                <th>Charge ST</th>
                                <th>Attacher</th>
                                <th>Consulter</th>
                                <th>Impr QTE</th>
                                <th>Impr Prix</th>
                                <th>PDF</th>
                                <th>OPEN PDF</th>
                              </tr>
                            </thead>

                            <tbody>
    
                            </tbody>

                          </table>
                          </div>
            <div class='pagination-container'>
                <nav>
                    <ul class="pagination">

                        <li data-page="prev">
                            <span>
                                <a href="#" class="previous round" style="color:white;">&#8249;</a> <span
                                    class="sr-only" style="color:white;">(current)
                                </span></span>
                        </li>
                        <!-- Here the JS Function Will Add the Rows -->
                        <li data-page="next" id="prev">
                            <span> <a href="#" class="next round" style="color:white;">&#8250;</a> <span class="sr-only"
                                    style="color:white;">(current)</span></span>
                        </li>
                    </ul>
                </nav>
            </div>


                        </div>
                   

              </div>
            </div>
            </div>
            </div>
            </div>
                </div>
              </div>
            </div>
            </div>
            </div>


      </div>

</div>


<!-- ********************************************For consult attachment****************************** -->
<body>

<div id="PrintFacture" style='display:none;'>

<div class="card">
            <header>
                <div class="row">
                    <div class="col">
                            <img src="/PWA/_catalogs/masterpage/Module_de_facturation_client/css/sotetel.png" width="150" height="80" data-holder-rendered="true" />
                    </div>
                  
                    <div class="title">                      
                            <div style="float:right; font-size: 35pt;">
                                <h1>Attachement des travaux réalisées</h1>
                            </div> 
                    </div>

                    <div class="col" style="color: black;">
                        <center>
                          <h7>Société Tunisienne d'Entreprise de Télécommunication</h7>
                          <h7>Direction centrale technique</h7>
                          <h7>Service Facturation</h7>
                        </center>
                    </div>
                </div>

                <div class="row">
                    
                    <div class="title" style="margin:auto; margin-top:-30px;">                      
                            <div style="font-size: 15pt; font-family: auto;">
                                <h3><label id="identAttachement" style="font-size: large;"></label></h3>
                            </div> 
                    </div>
                </div>

            </header>
   </div>   
</hr>
</br>

<div class="row mb-2" id="enteteFacture">

       <div class="col-md-6">
          <div class="card flex-md-row mb-6 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
             <table id="tableauxFacture" border="0" width="100%">
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Code projet: </strong></div></td>
                  <td><div type="text" class="form-control" id="codeProjetImprr" style="text-align:center; max-width: 90%; height: auto;"></div></td> 
                </tr> 


                

                <tr height="50px">
                <td><div class="mb-1 text-muted"><strong>Projet: </strong></div></td>
                  <td>
                    <div type="text" class="form-control" id="ProjetImprr" style="text-align:center; max-width: 90%; height: auto;"></div>
                   </td>
                </tr>


                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Réception:</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="ReceptionImprr" style="text-align:center; max-width: 90%; height: auto;"></div>
                  </td> 
                </tr>

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Bénéficier:</strong></div></td>
                  <td>   
                      <div type="text" class="form-control" id="beneficierImprr" style="text-align:center; max-width: 90%; height: auto;"></div>
                  </td>
                </tr>

                
                

            </table>
            </div>
          </div>
        
        </div>       



    <div class="col-md-6">
        <div class="card flex-md-row mb-6 shadow-sm h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
             <table border="0" width="100%">
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Appel:</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="AppelImprr" style=" text-align:center; max-width: 90%; height: auto;"></div>
                  </td> 
                </tr> 

                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>PO:</strong></div></td>
                    <td>
                      <div type="text" class="form-control" id="POImprr" style="text-align:center;max-width: 90%; height: auto;"></div>
                    </td>
                </tr>

                
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Client:</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="ClientImprr" style="text-align:center; max-width: 90%; height: auto;"></div>
                  </td>
                </tr>
                
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Attachement:</strong></div></td>
                  <td>   
                      <div type="text" class="form-control" id="AttachementsImprr" style="text-align:center; max-width: 90%; height: auto;"></div>
                  </td>
                </tr>


            </table>
            </div>
     
</div>
</div>
</div>

<div class="row">
             <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-box table-responsive">
                        
<fieldset>
<legend color="blue" font-weight="bold">Lignes Articles</legend>
                          
                          <table id="tableauxDeFacturationr" border="1" class="table table-striped jambo_table bulk_action">
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Code article</th>
                                    <th>Article</th>
                                    <th>Unité</th>
                                    <th>Quantité</th>
                                    <th>Prix Unit</th>
                                    <th>Prix HT</th>
                                    <th>TVA</th>
                                    <th>Prix TVA</th>
                                    <th>Prix Tot TTC</th>
                                </tr>
                            </thead>

                            <tbody>
                            </tbody>

                          </table>
</fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
       </div>

               





<div class="row" id="showPrixAttachment" style="display:false;">
<div style="float:right;" class="col-lg-4 col-sm-5 ml-auto">
      <table id="tableauxDeFacturationPrix" class="table table-clear">
        <tbody>

            <tr>
                <td class="right">
                    <strong>Montant HT:</strong>
                </td>

                <td class="right">
                    <div type="text" class="form-control" id="montantHTImprr" style="margin:auto; text-align:center; width: 200px; height: auto;"></div>
                </td>
            </tr>

            <tr>
                <td class="right">
                 <strong>TVA:</strong>
                </td>

                <td class="right">
                    <div type="text" class="form-control" id="montantTVAImprr" style="margin:auto; text-align:center; width: 200px; height: auto;"></div>
                </td>
            </tr>

            <tr>
                <td class="right">
                    <strong>Montant TTC:</strong>
                </td>
                
                <td class="right">
                    <div type="text" class="form-control" id="montantTTCImprr" style="margin:auto; text-align:center; width: 200px; height: auto;"></div>
                </td>
            </tr>
      </tbody>
    </table>
</div>
</div>

<hr size="5">
<div class="mb-1 text-muted"><strong>Signatures:</strong></div>

<hr size="5">

<div class="mb-1 text-muted"><center><strong style="font-size: large;">Responsable sotetel</strong></center></div>

      <center>
             <button class="btn btn-primary hidden-print" id="PrintWindows" onclick="return false;"><span class="glyphicon glyphicon-print" aria-hidden="true"></span> Imprimer votre attachement</button>
             <button class="btn btn-danger" id="returnToMainQTE" onclick="return false;"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Annuler</button>
      </center>

</div>

</body>
<!-- **-----------------------------------Document de facuration --------------------------------------** -->


        <div class="modal fade bd-example-modal-x" tabindex="-1" id="myModal1" aria-labelledby="myModalLabel" style='background-color:white; width: 70%; margin: auto; margin-top:20px;'>
<div class="modal-dialog modal-xl" style="width: 90%">

    <div class="card">
            <header>

                <div class="row">
                    <div class="col">
                            <img src="/PWA/_catalogs/masterpage/Module_de_facturation_client/css/sotetel.png" width="150" height="80" data-holder-rendered="true" />
                    </div>
                  
                    <div class="col">                      
                            <div style="float:right; font-size: 15pt;text-align: center;">
                                <h4>Attachement des travaux réalisées</h4>
                            </div> 
                    </div>

                    <div class="col" style="color: black;float:right;">
                        <center>
                          <h7>Société Tunisienne d'Entreprise de Télécommunication</h7>
                          <h7>Direction centrale technique</h7>
                          <h7>Service Facturation</h7>
                        </center>
                    </div>
                </div>

            </header>
    </div>   
</hr>
</br>

<div class="row mb-2" id="enteteFacture">

       <div class="col-md-6">
          <div class="card flex-md-row mb-6 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
             <table id="tableauxFacture" border="0" width="100%">
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Code projet: </strong></div></td>
                  <td><div type="text" class="form-control" id="codeProjetImpr" style="text-align:center; max-width: 90%; height: auto;"></div></td> 
                </tr> 

                <tr height="50px">
                <td><div class="mb-1 text-muted"><strong>Projet: </strong></div></td>
                  <td>
                    <div type="text" class="form-control" id="ProjetImpr" style="text-align:center; max-width: 90%; height: auto;"></div>
                   </td>
                </tr>

                
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Réception:</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="ReceptionImpr" style="text-align:center; max-width: 90%; height: auto;"></div>
                  </td> 
                </tr>

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Bénéficier:</strong></div></td>
                  <td>   
                      <div type="text" class="form-control" id="beneficierImpr" style="text-align:center; max-width: 90%; height: auto;"></div>
                  </td>
                </tr>
               

            </table>
            </div>
          </div>
        
        </div>       



    <div class="col-md-6">
        <div class="card flex-md-row mb-6 shadow-sm h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
             <table border="0" width="100%">
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Appel:</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="AppelImpr" style=" text-align:center; max-width: 90%; height: auto;"></div>
                  </td> 
                </tr> 

                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>PO:</strong></div></td>
                    <td>
                      <div type="text" class="form-control" id="POImpr" style="text-align:center;max-width: 90%; height: auto;"></div>
                    </td>
                </tr>

                

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Client:</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="ClientImpr" style="text-align:center; max-width: 90%; height: auto;"></div>
                  </td>
                </tr>
               
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Attachements:</strong></div></td>
                  <td>   
                      <div type="text" class="form-control" id="AttachementsImpr" style="text-align:center; max-width: 90%; height: auto;"></div>
                  </td>
                </tr>

            </table>
            </div>
     
</div>
</div>
</div>

<div class="row">
             <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-box table-responsive">
                        
<fieldset>
<legend color="blue" font-weight="bold">Lignes Articles</legend>
                          
                          <table id="tableauxDeFacturation" class="table table-striped jambo_table bulk_action">
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Code article</th>
                                    <th>Article</th>
                                    <th>Unité</th>
                                    <th>Quantité</th>
                                    <th>Prix Unit</th>
                                    <th>Prix HT</th>
                                    <th>TVA</th>
                                    <th>Prix TVA</th>
                                    <th>Prix Tot TTC</th>
                                </tr>
                            </thead>

                            <tbody>
                            </tbody>

                          </table>
</fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
       </div>

               





<div class="row">
<div style="float:right;" class="col-lg-4 col-sm-5 ml-auto">
      <table id="tableauxDeFacturationPrix" class="table table-clear">
        <tbody>

            <tr>
                <td class="right">
                    <strong>Montant HT:</strong>
                </td>

                <td class="right">
                    <div type="text" class="form-control" id="montantHTImpr" style="margin:auto; text-align:center; width: 200px; height: auto;"></div>
                </td>
            </tr>

            <tr>
                <td class="right">
                 <strong>TVA:</strong>
                </td>

                <td class="right">
                    <div type="text" class="form-control" id="montantTVAImpr" style="margin:auto; text-align:center; width: 200px; height: auto;"></div>
                </td>
            </tr>

            <tr>
                <td class="right">
                    <strong>Montant TTC:</strong>
                </td>
                
                <td class="right">
                    <div type="text" class="form-control" id="montantTTCImpr" style="margin:auto; text-align:center; width: 200px; height: auto;"></div>
                </td>
            </tr>

        </tbody>
      </table>
</div>
</div>

<hr size="5">
<div class="mb-1 text-muted"><strong>Signatures:</strong></div>
<hr size="5">

<div class="mb-1 text-muted"><center><strong style="font-size: large;">Responsable sotetel</strong></center></div>

        </div>
        </div>


<!-- ********************************************************************************************** -->


<!-- *****************************************Page d'accueil ************************************** -->


<div class="row mb-2" id="entete2">

       <div class="col-md-6">
          <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
            <div class="x_panel">
             <table border="0" width="100%">
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Code : </strong></div></td>
                  <td><div type="text" class="form-control" id="codepr" style="height: auto; background-color:transparent; font-size: smaller;"></div></td> 
                </tr> 


                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>Projet : </strong></div></td>
                    <td>
                      <div type="text" class="form-control" id="nompr" style="font-family: serif; height: auto; font-size: smaller;"></div>
                    </td>
                </tr>
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Direction :</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="directionProjet" style="font-family: serif; height: auto; font-size: smaller;"></div>
                  </td>
                </tr>

                <tr height="50px">
                <td><div class="mb-1 text-muted"><strong>Date début: </strong></div></td>
                  <td>
                    <div type="text" class="form-control" id="datedeb" style="font-family: serif; height: auto; font-size: smaller;"></div>
                   </td>
                </tr>

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Date fin :</strong></div></td>
                  <td>   
                      <div type="text" class="form-control" id="datefin" style="font-family: serif; height: auto; font-size: smaller;"></div>
                  </td>
                </tr>

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>PO :</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="popr" style="font-family: serif; height: auto; font-size: smaller;"></div>
                  </td>
                </tr>


                
            </table>
            </div>
          </div>
        </div>
</div>       



       <div class="col-md-6">
          <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
                <div class="x_panel">
                    <table border="0" width="100%">
                        <tr height="50px">
                          <td><div class="mb-1 text-muted"><strong>Montant global Attachement :</strong></div></td>
                          <td>
                              <div type="text" class="form-control" id="montantglob" style="font-family: serif; height: auto; background-color:transparent; font-size: smaller;"></div>
                          </td> 
                        </tr> 

                        <tr height="50px">
                          <td><div class="mb-1 text-muted"><strong>Montant contractuel :</strong></div></td>
                          <td>   
                              <div type="text" class="form-control" id="mont_contract" style="font-family: serif; width: 100%; height: auto; font-size: smaller;"></div>
                          </td>
                        </tr>

                        <tr height="50px">
                            <td><div class="mb-1 text-muted"><strong>Réception Prov(%) :</strong></div></td>
                            <td>
                              <div type="text" class="form-control" id="recepProv" style="font-family: serif; height: auto; font-size: smaller;"></div>
                            </td>
                        </tr>

                        <tr height="50px">
                        <td><div class="mb-1 text-muted"><strong>% Réception Def :</strong></div></td>
                          <td>
                            <div type="text" class="form-control" id="recepDef" style="font-family: serif; height: auto; font-size: smaller;"></div>
                          </td>
                        </tr>

                        <tr height="50px">
                          <td><div class="mb-1 text-muted"><strong>Période garantie :</strong></div></td>
                          <td>
                            <div type="text" class="form-control" id="periodeGarantie" style="font-family: serif; width: 300px; height: auto; font-size: smaller;"></div>
                          </td>
                        </tr>

                        <tr height="50px">
                          <td><div class="mb-1 text-muted"><strong>TVA :</strong></div></td>
                          <td>
                              <div type="text" class="form-control" id="TVAProjet" style="font-family: serif; height: auto; font-size: smaller;"></div>
                          </td>
                        </tr>
                    </table>
                </div>
            </div>
       
</div>
</div>

</div>


<!-- Tableau saisi des opérations automatiquement -->


      <div class="row" id="entete2">
             <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-box table-responsive">
                          <legend color="blue" font-weight="bold">Ensembles des opérations de votre échéancier (Enregistrer votre opération pour commencer le traitement des attachements)</legend>
                          <table id="tableauxOperation" class="table table-striped jambo_table bulk_action">
                            <thead>
                              <tr>
                                <th>Num</th>
                                <th>Libellé Opération</th>
                                <th>Date début</th>
                                <th>Date fin</th>
                                <th>Date Prévu réception Prov</th>
                                <th>Exécuteur</th>
                                <th>Enregistrement</th>
                              </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
                         <!-- <input type="button" onclick="createItemListOperation(); window.location.reload(false)" value="Enregistrer" style="float:right;"/>-->
       </div>


       <div class="row" id="entete2">
             <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-box table-responsive">
                          <legend color="blue" font-weight="bold">Ensembles des opérations à traiter</legend>
                          <table id="tableauxOperationTraitement" class="table table-striped jambo_table bulk_action">
                            <thead>
                              <tr>
                                <th>Attachement</th>
                                <th>Recap</th>
                                <th>Id Opération</th>
                                <th>Libellé Opération</th>
                                <th>Date début</th>
                                <th>Date fin</th>
                                <th>Montant</th>
                                <th>Date Prévu réception Prov</th>
                                <th>Exécuteur</th>
                                <th>Décompte général</th>
                              </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>

                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
       </div>

<div class="modal fade" id="myModal2" tabindex="-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel"><i class="em em-coffee"></i> Bienvenue dans le module de facturation <i class="em em-coffee"></i></h4>
      </div>
      <div class="modal-body">
        Bonjour,</br>
        Ce module comporte 4 phases. </br>
        <ul>
        <li>Les ensembles des opérations à traiter</li>
        <li>Chaque opération comporte 1..Plusieurs attachements selon votre Opération choisi</li>
        <li>Chaque Attachement comporte des ensembles Articles de facture</li>
        <li>Chaque Attachement passe par une approbation de la direction avec le mot Attacher (Oui, Non, Validé)</li>
        </ul>
        Vous pouvez modifier les données de chaque Attachement si votre attachement est encore "Non" , sinon votre attachement est fixé</br>
        Si votre Attachement est vérifié, vous pouvez faire l'impression (Par quantité ou par prix selon le choix)</br>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default btn-color" data-dismiss="modal">Fermer</button>
      </div>
    </div> 
  </div>
</div>

<div class="modal fade" id="modalesFile" tabindex="-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel"><i class="em em-coffee"></i> Ajouter l'attachement validé <i class="em em-coffee"></i></h4>
      </div>
      <div class="modal-body" id="modalInput">
        <input type='file' name='file-input' fileread='run.AttachmentData' fileinfo='run.AttachmentInfo' id='my-attachments' />

      </div>
      <div class="modal-footer">
        <button type="submit"  id="validerAttachementList"  class='btn btn-primary' data-dismiss="modal" disabled="disabled">Valider</button>
        <button type="button" class="btn btn-default btn-color" data-dismiss="modal">Fermer</button>
      </div>
    </div> 
  </div>
</div>


<!-- ***************************************print All Existing Attachment***************************************** -->

<div id="printAllAttachementOperation">

</div>


<!-- ***************************************Articles***************************************** -->


<div id="entete3" style='margin-top: -30px;'>
<table border="0" width="30%">
  <tbody><tr>
    <td>
    <button id="returntoAttchment" style='background: url(klematis.jpg) repeat;' onclick='return false;'><span class='glyphicon glyphicon-chevron-left'></span></button>
  </td>
  <td style="display:none;">
    <button id="returntoAttchmentName" style='background: url(klematis.jpg) repeat;' onclick='return false;'></button>
  </td>  
    </tr>
</tbody></table>
<div class="row mb-2">

       <div class="col-md-6">
        <div class="x_panel">
          <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
             <table border="0" width="100%">
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Projet : </strong></div></td>
                  <td><div type="text" class="form-control" id="NomProjetAtt" style="height: auto;" ></div></td> 
                </tr> 


                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>Code attachement : </strong></div></td>
                    <td>
                      <div type="text" class="form-control" id="CodeAttchement" style="height: auto;"></div>
                    </td>
                </tr>

                <tr height="50px">
                <td><div class="mb-1 text-muted"><strong>Date début: </strong></div></td>
                  <td>
                    <div type="text" class="form-control" id="datedebAttachement" style="height: auto;"></div>
                   </td>
                </tr>


                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Charge sous-traitant :</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="chargeSTfac" style="height: auto;"></div>
                  </td>
                </tr>
            </table>
            </div>
          </div>
        </div>
</div>       



       <div class="col-md-6">
        <div class="x_panel">
          <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
             <table border="0" width="100%">
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Opération :</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="OperationAtt" style="height: auto;"></div>
                  </td> 
                </tr> 

                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>Attachement :</strong></div></td>
                    <td>
                      <div type="text" class="form-control" id="AttADecrire" style="height: auto;"></div>
                    </td>
                </tr>

                <tr height="50px">
                <td><div class="mb-1 text-muted"><strong>Bénificier :</strong></div></td>
                  <td>
                    <div type="text" class="form-control" id="BenefAttchement" style="height: auto;"></div>
                  </td>
                </tr>

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Montant attachement :</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="MontantAttachement" style="height: auto;"></div>
                  </td>
                </tr>

            </table>
            </div>
       </div>
</div>
</div>
</div>



<div class="row" id="AttacherOuNon">
             <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-body d-flex flex-column align-items-start">
                          
                        <table id="tableauFiltreArticle" border="0" width="100%">
                        <tr>
                            <td style='width:10%;'><div class="mb-1 text-muted"><strong>Choisir un article : </strong></div></td>
                            <td>
                                <select class="form-control" id="affArticle" name="city" data-live-search="true" onchange="filterPortefeuille();">
                                    <option data-tokens="ketchup mustard" value="">Choisir un article</option>
                                    
                                </select>
                            </td> 

                                <td>
                                        <input type="text" id="tvaRsArticle" disabled style="float:right; 100%; height: 35px; display:none;"/>
                                </td>

                                <td style="width:10%"><input type="number" class="form-control" readonly="true" id="quantite" onkeypress="return event.keyCode != 13;" min="0" style="float:right; width: 100%; height: auto;"/></td>
                                <td style='display:none;'><input type="text" id="prixMontant" disabled style="float:right; width: 100%; height: auto;"/></td>
                                <td ><input type="text" id="unity" disabled style="float:right; 100%; height: 35px; display:none;"/></td>
                                <td style='display:none;'><input type="text" id="idOperationArt" disabled /></td>
                                <td style='display:none;'><input type="text" id="idAttachementArt" disabled /></td>
                                

                                <td style="width:10%;"><button type="submit" class="btn btn-primary" id="EnregistrerAttArticle"  disabled style="font-size: larger; background-color:#ed5f49;float:right; color:white; width: 95%; height: auto;">Enregistrer</button></td>
                        </tr>
                        </table>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
</div>




<div class="row">
             <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-box table-responsive">
                        <legend color="blue" font-weight="bold">Lignes Articles</legend>
                          <table id="tableauxArticle" class="table table-striped jambo_table bulk_action">
                            <thead>
                              <tr>
                                <th>Supprimer</th>
                                <!--<th>Id ligne Attachement</th>-->
                                <th>Code article</th>
                                <th>Libe article</th>
                                <th>Unité</th>
                                <th>Quantité article</th>
                                <th>TVA article</th>
                                <th>Prix de vente</th>
                                <th>Montant total</th>
                                <th>Montant TVA</th>
                                <th>Montant TTC</th>
                                <th>Valider</th>
                              </tr>
                            </thead>
                            <tbody>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th colspan='7' class='text-right'  style="background-color:rgba(0,0,0,.05); color:black;">Somme total: </th>
                                <th id="sum"  style="background-color:rgba(0,0,0,.05); color:black;">-</th>
                                <th id="sumTVA" style="background-color:rgba(0,0,0,.05); color:black;"></th>
                                <th id="sumTTC" style="background-color:rgba(0,0,0,.05); color:black;"></th>
                                <th style="background-color:rgba(0,0,0,.05); color:black;">&nbsp;</th>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>


</div>

<div style="float:right;" class="col-lg-4 col-sm-5 ml-auto">
      <table id="tableaux" class="table table-clear">
        <tbody>

            <tr>
                <td class="right">
                    <strong>Montant HT:</strong>
                </td>

                <td class="right">
                    <div type="text" class="form-control montantTotalSum" id="montantTotalArticles" style="margin:auto; text-align:center; width: 200px; height: auto;"></div>
                </td>
            </tr>

            <tr>
                <td class="right">
                 <strong>TVA:</strong>
                </td>

                <td class="right">
                    <div type="text" class="form-control montantTotalSum" id="montantTVAArticle" style="margin:auto; text-align:center; width: 200px; height: auto;"></div>
                </td>
            </tr>

            <tr>
                <td class="right">
                    <strong>Montant TTC:</strong>
                </td>
                
                <td class="right">
                    <div type="text" class="form-control montantTotalSum" id="montantTTCArticle" style="margin:auto; text-align:center; width: 200px; height: auto;"></div>
                </td>
            </tr>
        </tbody>
      </table>
</div>



<!--<div class="row">
             <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-box table-responsive">
                          <table id="tableauxArticleEnregistrer" class="table table-striped jambo_table bulk_action">
                            <thead>
                              <tr>
                                
                                <th>Id ligne Attachement</th>
                                <th>Code article</th>
                                <th>Libe article</th>
                                <th>Quantité article</th>
                                <th>Prix de vente</th>
                                <th>Montant total</th>
                                
                              </tr>
                            </thead>
                            <tbody>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
</div>-->


<!-- *********************Fin de l'interface des listes des articles ******************* -->
</div>




<!--  ******************** On cliquant sur le bouton RECAP de chaque opération *********  -->

<div class="modal fade" id="modales" tabindex="-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalLabel">Alert</h1>
        <button type="button" class="btn-color close" data-dismiss="modal" aria-hidden="true">&times;</button>
      </div>
      <div class="modal-body"><h2>Vous avez consommé tous les attachements</h2></div>
      <div class="modal-footer">
        <button type="button" id="retourner" onClick="history.go(0);" class="btn btn-primary">Retour</button>
      </div>
    </div>
  </div>
</div>



<div class="row" id="entete4">
             <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-body d-flex flex-column align-items-start">
                          
                          <table border="0" width="100%" id="AvantImpression">
                            <tr>
                              <td><div class="mb-1 text-muted"><strong>Projet:</strong></div>
                              <div type="text" class="form-control" id="nomprojetImpress" style="height: 35px; background-color:transparent;"></div></td>
                              
                              <td><div class="mb-1 text-muted"><strong>Opération:</strong></div>
                              <div type="text" class="form-control" id="operationImpress" style="height: auto;"></div></td>
                              
                              <td><div class="mb-1 text-muted"><strong>Montant global Att: </strong></div>
                              <div type="text" class="form-control" id="montantGlobImpress" style="height: auto;"></div></td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</div>


<div class="row" id="entete4">

 <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
  <div class="row">
    <div class="col-3">
      <table class="table table-striped jambo_table bulk_action" id="checkboxTable" border="0">
      
      <thead>
          <th colspan="13" >Attachements non traités</th>
      </thead>

        <tbody>
        
        </tbody>

      </table>
    </div>

    <div class="col-3">
      <table class="table table-striped jambo_table bulk_action" id="checkboxTableOui" border="0">
      <thead>
      <th colspan="3" >Attachements traités</th>
      </thead>
        <tbody>
        
        </tbody>

      </table>
    </div>
  </div>



</div>
  </div>
  </div>
</div>



<div class="row mb-2" id="entete4">

       <div class="col-md-6">
        <div class="x_panel">
          <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
             <table border="0" width="100%">
                
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Description: </strong></div></td>
                  <td><input type="text" class="form-control" id="DescriptionAtt" style="height: 35px; background-color:transparent;"/></td> 
                </tr> 


                <tr height="50px">
                    <td>
                        <div class="mb-1 text-muted"><strong>Appel N°: </strong></div></td>
                    <td>
                        <input type="text" class="form-control" id="AppelNAtt" readonly style="height: auto;"/>
                    </td>
                </tr>

                <tr height="50px">
                    <td>
                        <div class="mb-1 text-muted"><strong>Activité:</strong></div></td>
                    <td>
                        <input type="text" class="form-control" id="activiteAtt" onkeypress="return event.keyCode != 13;" style="height: auto;"/>
                    </td>
                </tr>

                <tr height="50px">
                    <td>
                        <div class="mb-1 text-muted"><strong>Client: </strong></div></td>
                    <td>
                        <input type="text" class="form-control" id="clientAtt" readonly style="height: auto;"/>
                    </td>
                </tr>

            </table>
            </div>
          </div>
         </div>
</div>       



       <div class="col-md-6">
        <div class="x_panel">
          <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
             <table border="0" width="100%">
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Région :</strong></div></td>
                  <td>
                      <input type="text" class="form-control" id="RegionAtt" onkeypress="return event.keyCode != 13;"  style="height: auto;"/>
                  </td> 
                </tr> 

                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>Réception N° :</strong></div></td>
                    <td>
                      <input type="text" class="form-control" id="ReceptionAtt"  readonly style="height: auto;"/>
                    </td>
                </tr>

                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>PO:</strong></div></td>
                    <td>
                      <input type="text" class="form-control" id="poAtt"  readonly style="height: auto;"/>
                    </td>
                </tr>

                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>Attachements:</strong></div></td>
                    <td>
                      <input type="text" class="form-control" id="attachementAtt"  readonly style="height: auto;"/>
                    </td>
                </tr>

            </table>
            </div>
       </div>
</div>
</div>
            <div style="margin:auto;">
                <input type="button" class="btn btn-primary" value="Enregistrer" id="EnregistrerTraitement" style="font-size:large; background-color:#ed5f49; color:white; width: 250px;"/>
            </div>

</div>

      <div class="row" id="entete4">
             <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="card-box table-responsive">
                          
                          <table id="tableauxFinalArticleAtt" class="table table-striped jambo_table bulk_action">
                            <thead>
                              <tr>
                                <th>N°</th>
                                <th>Code article</th>
                                <th>Article</th>
                                <th>Unité</th>
                                <th>Quantité</th>
                                <th>Prix unit</th>
                                <th>Prix tot</th>
                                <th>TVA</th>
                                <th>Prix TVA</th>
                                <th>Prix tot TTC</th>
                              </tr>
                            </thead>

                            <tbody>

                            </tbody>

                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>


          <div style="float:right;" class="col-lg-4 col-sm-5 ml-auto">
      <table id="tableaux" class="table table-clear">
        <tbody>

            <tr>
                <td class="right">
                    <strong>Montant HT:</strong>
                </td>

                <td class="right">
                    <div type="text" class="form-control" id="montantImprTotal" style="margin:auto; text-align:center; width: 200px; height: auto;"></div>
                </td>
            </tr>

            <tr>
                <td class="right">
                 <strong>TVA:</strong>
                </td>

                <td class="right">
                    <div type="text" class="form-control" id="montantImprTVA" style="margin:auto; text-align:center; width: 200px; height: auto;"></div>
                </td>
            </tr>

            <tr>
                <td class="right">
                    <strong>Montant TTC:</strong>
                </td>
                
                <td class="right">
                    <div type="text" class="form-control" id="montantImprTTC" style="margin:auto; text-align:center; width: 200px; height: auto;"></div>
                </td>
            </tr>
        </tbody>
      </table>
</div>




       
</div>



       </div>

<!-- *********************************************************************************** -->

<!-- **************************************Show popup*********************************** -->

<div id="overlay">
                        <div id='popup'>

                          <div id='close'>X Fermer</div>
                            <div class='form' id='myForm'>
                          


                            </div>
                          </div> 
                        </div>
                      </div>






<div id="loader-wrapper">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
</div>




<!-- *********************************************************************************************** -->

<!-- ************************************ Impression facture **************************************** -->


<!-- *********************************************************************************************** -->

    <!-- jQuery -->


    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>


 <script src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.js"></script>
  <!-- Bootstrap -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/bootstrap.min.js"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>

  <!-- FastClick -->

<script src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/fastclick.js"></script>
  <!-- NProgress -->
<script src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/nprogress.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/ShowPopupForAttachement.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/PrintWithQuantityAttachment.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/ShowAllAttachment.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/moment.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/MainFunctionFacturation.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/MainRessource.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/MainRessourceRemoved.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/Pagination.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/SaveAttachment.js"></script>

 <script src='https://ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js'></script>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/sharepointplus/browser/sharepointplus.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>

<script type="text/javascript">


  $(document).bind("contextmenu", function(e) {

    return false;

});

 



  $(document).keydown(function (event) {

    if (event.keyCode == 123) { // Prevent F12

        return false;

    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        

        return false;

    }

});

 



jQuery(document).bind("keyup keydown", function(e){

    if(e.ctrlKey && e.keyCode == 80){

        alert('fine');

        return false;

    }

});




  $(document).bind("contextmenu", function(e) {

    return false;

});

 



  $(document).keydown(function (event) {

    if (event.keyCode == 123) { // Prevent F12

        return false;

    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        

        return false;

    }

});

 



jQuery(document).bind("keyup keydown", function(e){

    if(e.ctrlKey && e.keyCode == 80){

        alert('fine');

        return false;

    }

});

</script>
