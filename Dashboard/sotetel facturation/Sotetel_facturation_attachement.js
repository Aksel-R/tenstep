
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Sotetel Project</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Facturation_Sotetel/css/bootstrap1.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/sites/PWAdemo/_catalogs/masterpage/Facturation_Sotetel/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="/sites/PWAdemo/_catalogs/masterpage/Facturation_Sotetel/css/custom1.min.css" rel="stylesheet">


<style>

#headercolor {
    background: #8fb8da;
    padding: 40px;
    margin: 0 0 10px 0;
    text-align: center;
    border-radius: 15px 15px 0px 0px;
}

#headercolor span{
    float: left;
    padding-top: 10px;
}

.smallRisks {
    font-size: 45px;
    float: right;
    font-weight: bold;
    color: white;
    position: relative;
    top: -25px;
    left: -20px;
}

.smallRisks1 {
    font-size: 50%;
    float: left;
    width: 30px;
    height: 30px;
    top: -40px;
    position: relative;
}

   #tableaux th {
    background-color: #8fb8da;
    color: white;
  }


  

  #exampleFormControlTextarea4 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 15%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-left:50px;
  }


  .ms-rtestate-field h1, h1.ms-rteElement-H1, .ms-rtestate-field h2, h2.ms-rteElement-H2 {
    line-height: 1.4;
    color: #000;
}


.glyphicon {
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

.w3-spin {
    animation: w3-spin 2s infinite linear;
}

.w3-jumbo {
    font-size: 25px!important;
    color:green;
}

option:empty
{
 display:none;
}

span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}


#overlay {
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

#popup {
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



</style>

  </head>


      <div id="headercolor">
          <div>
            <small class="smallRisks">
              <u>Suivi et facturation : CA et RG</u>
            </small>
            <small class="smallRisks1">
              <!--<img style="width: 180px;" src="/sites/PWAdemo/_catalogs/masterpage/Facturation_Sotetel/css/tenstep.png"/>-->
            </small>
          </div>
       </div>






<div class="row mb-2">

       <div class="col-md-6">
        <div class="x_panel">
          <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
             <table border="0" width="100%">
                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Code : </strong></div></td>
                  <td><div type="text" class="form-control" id="code" style="width: 300px; height: 35px; background-color:transparent;"></div></td> 
                </tr> 


                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>Projet : </strong></div></td>
                    <td>
                      <div type="text" class="form-control" id="nomProjet" style="width: 300px; height: 35px;"></div>
                    </td>
                </tr>

                <tr height="50px">
                <td><div class="mb-1 text-muted"><strong>Date début: </strong></div></td>
                  <td>
                    <div type="text" class="form-control" id="debutProjet" style="width: 300px; height: 35px;"></div>
                   </td>
                </tr>


                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>PO :</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="poProjet" style="width: 300px; height: 35px;"></div>
                  </td>
                </tr>

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Date fin :</strong></div></td>
                  <td>   
                      <div type="text" class="form-control" id="finProjet" style="width: 300px; height: 35px;"></div>
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
                  <td><div class="mb-1 text-muted"><strong>Montant global Attachement :</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="montantGAttachement" style="width: 300px; height: 35px; background-color:transparent;"></div>
                  </td> 
                </tr> 

                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>Réception Prov(%) :</strong></div></td>
                    <td>
                      <div type="text" class="form-control" id="receptionAttachement" style="width: 300px; height: 35px;"></div>
                    </td>
                </tr>

                <tr height="50px">
                <td><div class="mb-1 text-muted"><strong>% Réception Def :</strong></div></td>
                  <td>
                    <div type="text" class="form-control" id="receptionDef" style="width: 300px; height: 35px;"></div>
                  </td>
                </tr>

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Période garantie :</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="periodeGarantie" style="width: 300px; height: 35px;"></div>
                  </td>
                </tr>

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Montant contractuel :</strong></div></td>
                  <td>   
                      <div type="text" class="form-control" id="montantContractuel" style="width: 300px; height: 35px;"></div>
                  </td>
                </tr>

            </table>
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
<fieldset>
<legend color="blue" font-weight="bold">Opérations</legend>
                          
                          <table id="tableaux" class="table table-striped jambo_table bulk_action">
                            <thead>
                              <tr>
                                <th>Attachement</th>
                                <th>Id Opération</th>
                                <th>Libellé Opération</th>
                                <th>Date début</th>
                                <th>Date fin</th>
                                <th>Montant</th>
                                <th>Date Prévu réception Prov</th>
                                <th>Exécuteur</th>
                                <th>Montant glob Att</th>
                                <th>Montant glob Recep</th>
                                <th>PV réception</th>
                                <th>Date Recep Def</th>
                                <th>Recep Def</th>
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

                </div>
              </div>
            </div>



      </div>

     <div id="overlay">
      <div id="popup">
        <div id="close">X</div>
        <div class="form-group">
                        <label for="date" class="control-label">Nom*</label>
                        <input type="text" class="form-control" name="nom" id="nom" placeholder="Nom condidat" required />
                    </div>

                        

                    <div class="form-group">
                        <label for="text" class="control-label">Prénom*</label>
                        <input type="text" class="form-control" name="prenom" id="prenom" placeholder="Prénom condidat" required />
                    </div>
                        
                       

                    <div class="form-group">
                        <label for="text" class="control-label">Numéro téléphone*</label>
                        <input type="text" class="form-control" name="tel" id="numtel" placeholder="Numéro Tel" required />
                    </div>

                       

                    <div id="dateFormulaire" class="form-group">
                        <label for="date" class="control-label">Date début*</label>
                        <input type="date" class="form-control" name="societe" id="datedeb"  required />
                    </div>

                  
                    <div align="right" class="form-group">
                        <input type="submit" id="enregistrer" name="enregistrer" value="Enregistrer" class="btn btn-primary">
                    </div>
      </div>
    </div>

    <!-- jQuery -->

    <script src="/sites/PWAdemo/_catalogs/masterpage/Facturation_Sotetel/javascript/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="/sites/PWAdemo/_catalogs/masterpage/Facturation_Sotetel/javascript/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/sites/PWAdemo/_catalogs/masterpage/Facturation_Sotetel/javascript/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/sites/PWAdemo/_catalogs/masterpage/Facturation_Sotetel/javascript/nprogress.js"></script>
    <script src="/sites/PWAdemo/_catalogs/masterpage/Facturation_Sotetel/javascript/MainFunction.js"></script>
    <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>

