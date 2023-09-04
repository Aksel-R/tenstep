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
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <!-- Font Awesome -->
    <link href="/PWA/_catalogs/masterpage/Module_de_facturation_client/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="/PWA/_catalogs/masterpage/Module_de_facturation_client/css/custom1.min.css" rel="stylesheet">


<style>
.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
    display: none;
}


#headercolor {
    background: #ed5f49;
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
    font-size: x-large;
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
    background-color: #ed5f49;
    color: white;
    font-size: smaller;
  }

  #tableaux td {
    font-size: smaller;
  }


#tableauxDeFacturation th {
    background-color: #ed5f49;
    color: white;
  }

#tableauxDeFacturationr th
{
  background-color: #ed5f49;
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



@media print {
  body * {
    visibility: hidden;
    height:0;
  }
  #PrintFacture, #PrintFacture * {
    visibility: visible;
    height:auto;
  }

}


/*CSS*/
/*
Tutorial for the animation here: 
https://ihatetomatoes.net/create-custom-preloading-screen/
*/


#screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
}

#loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 120px;
  height: 120px;
  margin: -80px 0 0 -80px;
  padding: 20px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #074c81;
  z-index: 1001;
  -webkit-animation: spin 2s linear infinite;
  /* Chrome, Opera 15+, Safari 5+ */
  animation: spin 2s linear infinite;
  /* Chrome, Firefox 16+, IE 10+, Opera */
}

#center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  z-index: 1000;
  /*-webkit-animation: anti_spin 2s linear infinite;  Chrome, Opera 15+, Safari 5+ */
  /*animation: anti_spin 2s linear infinite;  Chrome, Firefox 16+, IE 10+, Opera */
}

#loader:before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #e68e21;
  -webkit-animation: spin 3s linear infinite;
  /* Chrome, Opera 15+, Safari 5+ */
  animation: spin 3s linear infinite;
  /* Chrome, Firefox 16+, IE 10+, Opera */
}

#loader:after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #ffffff;
  -webkit-animation: spin 1.5s linear infinite;
  /* Chrome, Opera 15+, Safari 5+ */
  animation: spin 1.5s linear infinite;
  /* Chrome, Firefox 16+, IE 10+, Opera */
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(0deg);
    /* IE 9 */
    transform: rotate(0deg);
    /* Firefox 16+, IE 10+, Opera */
  }
  100% {
    -webkit-transform: rotate(360deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(360deg);
    /* IE 9 */
    transform: rotate(360deg);
    /* Firefox 16+, IE 10+, Opera */
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(0deg);
    /* IE 9 */
    transform: rotate(0deg);
    /* Firefox 16+, IE 10+, Opera */
  }
  100% {
    -webkit-transform: rotate(360deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(360deg);
    /* IE 9 */
    transform: rotate(360deg);
    /* Firefox 16+, IE 10+, Opera */
  }
}

@-webkit-keyframes anti_spin {
  0% {
    -webkit-transform: rotate(0deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(0deg);
    /* IE 9 */
    transform: rotate(0deg);
    /* Firefox 16+, IE 10+, Opera */
  }
  100% {
    -webkit-transform: rotate(-360deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(-360deg);
    /* IE 9 */
    transform: rotate(-360deg);
    /* Firefox 16+, IE 10+, Opera */
  }
}

@keyframes anti_spin {
  0% {
    -webkit-transform: rotate(0deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(0deg);
    /* IE 9 */
    transform: rotate(0deg);
    /* Firefox 16+, IE 10+, Opera */
  }
  100% {
    -webkit-transform: rotate(-360deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(-360deg);
    /* IE 9 */
    transform: rotate(-360deg);
    /* Firefox 16+, IE 10+, Opera */
  }
}

#loader-wrapper .loader-section {
  position: fixed;
  top: 0;
  width: 50%;
  height: 100%;
  background: #222222;
  opacity: 0.9;
  z-index: 1000;
}

#loader-wrapper .loader-section.section-left {
  left: 0;
}

#loader-wrapper .loader-section.section-right {
  right: 0;
}


/* Loaded */

.loaded #loader-wrapper .loader-section.section-left {
  -webkit-transform: translateX(-100%);
  /* Chrome, Opera 15+, Safari 3.1+ */
  -ms-transform: translateX(-100%);
  /* IE 9 */
  transform: translateX(-100%);
  /* Firefox 16+, IE 10+, Opera */
}

.loaded #loader-wrapper .loader-section.section-right {
  -webkit-transform: translateX(100%);
  /* Chrome, Opera 15+, Safari 3.1+ */
  -ms-transform: translateX(100%);
  /* IE 9 */
  transform: translateX(100%);
  /* Firefox 16+, IE 10+, Opera */
}

.loaded #loader {
  opacity: 0;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.loaded #loader-wrapper {
  visibility: hidden;
}

.loaded #loader-wrapper .loader-section.section-right,
.loaded #loader-wrapper .loader-section.section-left {
  -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
}

.loaded #loader-wrapper {
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
  -webkit-transition: all 0.3s 1s ease-out;
  transition: all 0.3s 1s ease-out;
}


</style>

</head>

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
                                <h1>ETAT DES TRAVAUX REALISES</h1>
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
                                <h3>N° <label id="identDecompte" style="font-size: large;"></label></h3>
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
                  <td><div type="text" class="form-control" id="CodeProjetImprr" style="text-align:center; width: 300px; height: auto;"></div></td> 
                </tr> 


                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>Région: </strong></div></td>
                    <td>
                      <div type="text" class="form-control" id="RegionImprr" style="text-align:center; width: 300px; height: auto;"></div>
                    </td>
                </tr>

                <tr height="50px">
                <td><div class="mb-1 text-muted"><strong>Projet: </strong></div></td>
                  <td>
                    <div type="text" class="form-control" id="ProjetImprr" style="text-align:center; width: 300px; height: auto;"></div>
                   </td>
                </tr>


                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Réception:</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="ReceptionImprr" style="text-align:center; width: 300px; height: auto;"></div>
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
                      <div type="text" class="form-control" id="AppelImprr" style=" text-align:center; width: 300px; height: auto;"></div>
                  </td> 
                </tr> 

                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>PO:</strong></div></td>
                    <td>
                      <div type="text" class="form-control" id="POImprr" style="text-align:center; width: 300px; height: auto;"></div>
                    </td>
                </tr>

                <tr height="50px">
                <td><div class="mb-1 text-muted"><strong>Activité:</strong></div></td>
                  <td>
                    <div type="text" class="form-control" id="ActiviteImprr" style="text-align:center; width: 300px; height: auto;"></div>
                  </td>
                </tr>

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Client:</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="ClientImprr" style="text-align:center; width: 300px; height: auto;"></div>
                  </td>
                </tr>

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Attachement(s):</strong></div></td>
                  <td>   
                      <div type="text" class="form-control" id="AttachementsImprr" style="text-align:center; width: 300px; height: auto;"></div>
                  </td>
                </tr>

            </table>
            </div>
     
</div>
</div>
</div>
</br>
</br>


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
                                    <th>Montant totale</th>
                                    <th>Montant TVA</th>
                                    <th>Montant TOT TTC</th>
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

               

</br>
</br>



<div class="row">
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
             <button class="btn btn-primary hidden-print" id="PrintWindows" onclick="return false;"><span class="glyphicon glyphicon-print" aria-hidden="true"></span> Imprimer la facture</button>
             <button class="btn btn-danger" id="returnToMainFA" onclick="return false;"><span class="glyphicon glyphicon-off" aria-hidden="true"></span> Annuler</button>
      </center>

</div>



</body>


<!-- **-----------------------------------Document de facuration --------------------------------------** -->

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style='background-color:white; width: 70%; margin: auto; margin-top:20px;'>
<div class="card">
            <header>
                <div class="row">
                    <div class="col">
                            <img src="/PWA/_catalogs/masterpage/Module_de_facturation_client/css/sotetel.png" width="150" height="80" data-holder-rendered="true" />
                    </div>
                  
                    <div class="title">                      
                            <div style="float:right; font-size: 35pt;">
                                <h1>ETAT DES TRAVAUX REALISES</h1>
                            </div> 
                    </div>

                    <div class="col" style="color: black;">
                        <center>
                          <h5>Société Tunisienne d'Entreprise de Télécommunication</h5>
                          <h5>Direction centrale technique</h5>
                          <h5>Service Facturation</h5>
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
                  <td><div type="text" class="form-control" id="CodeProjetImpr" style="text-align:center; width: 300px; height: auto;"></div></td> 
                </tr> 


                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>Région: </strong></div></td>
                    <td>
                      <div type="text" class="form-control" id="RegionImpr" style="text-align:center; width: 300px; height: auto;"></div>
                    </td>
                </tr>

                <tr height="50px">
                <td><div class="mb-1 text-muted"><strong>Projet: </strong></div></td>
                  <td>
                    <div type="text" class="form-control" id="ProjetImpr" style="text-align:center; width: 300px; height: auto;"></div>
                   </td>
                </tr>


                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Réception:</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="ReceptionImpr" style="text-align:center; width: 300px; height: auto;"></div>
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
                      <div type="text" class="form-control" id="AppelImpr" style=" text-align:center; width: 300px; height: auto;"></div>
                  </td> 
                </tr> 

                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>PO:</strong></div></td>
                    <td>
                      <div type="text" class="form-control" id="POImpr" style="text-align:center; width: 300px; height: auto;"></div>
                    </td>
                </tr>

                <tr height="50px">
                <td><div class="mb-1 text-muted"><strong>Activité:</strong></div></td>
                  <td>
                    <div type="text" class="form-control" id="ActiviteImpr" style="text-align:center; width: 300px; height: auto;"></div>
                  </td>
                </tr>

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Client:</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="ClientImpr" style="text-align:center; width: 300px; height: auto;"></div>
                  </td>
                </tr>

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Attachement(s):</strong></div></td>
                  <td>   
                      <div type="text" class="form-control" id="AttachementsImpr" style="text-align:center; width: 300px; height: auto;"></div>
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
                                    <th>Montant totale</th>
                                    <th>Montant TVA</th>
                                    <th>Montant TOT TTC</th>
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




<!--     *************************************** Phase final impression********************************** -->





<!-- ************************************************************Before print ----********************************** -->



<div id="noPrint">
      <div id="headercolor">
          <div>
            <small class="smallRisks">
              <u>Suivi et facturation : CA et RG</u>
            </small>
            <small class="smallRisks1">
              <img style="width: 180px;" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/css/sotetel.png"/>
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
                  <td><div type="text" class="form-control" id="codepr" style="width: 300px; height: 35px; background-color:transparent;"></div></td> 
                </tr> 


                <tr height="50px">
                    <td><div class="mb-1 text-muted"><strong>Projet : </strong></div></td>
                    <td>
                      <div type="text" class="form-control" id="nompr" style="width: 300px; height: auto;"></div>
                    </td>
                </tr>


                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>PO :</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="POProjet" style="width: 300px; height: auto;"></div>
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
                      <div type="text" class="form-control" id="montantGlobalAttachementTrait" style="width: 300px; height: 35px; background-color:transparent;"></div>
                  </td> 
                </tr> 

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Montant global Attachement Traité:</strong></div></td>
                  <td>
                      <div type="text" class="form-control" id="montantGlobalAttachement" style="width: 300px; height: 35px; background-color:transparent;"></div>
                  </td> 
                </tr> 

                <tr height="50px">
                  <td><div class="mb-1 text-muted"><strong>Montant contractuel :</strong></div></td>
                  <td>   
                      <div type="text" class="form-control" id="mont_contract" style="width: 300px; height: auto;"></div>
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
<div class="container alert alert-light" style="width: -webkit-fill-available; float: right;"> 

<input id="search"  type="text" class="form-control" onkeypress="return event.keyCode != 13;" style="width:50%; float:right;" placeholder="Saisir votre recherche......">
</div>
<br>
<legend color="blue" font-weight="bold">Opérations / Attachements</legend>
                         <div class="form-group" style="    float: left;">
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
                          <table id="tableaux" class="table table-striped  jambo_table bulk_action no-footer-border">
                            <thead>
                              <tr>
                                <th></th>
                                <th >Id DC</th>
                                <th style="width: 10%;">Libellé Opération</th>
                                <th style="width: 10%;">Attachement</th>
                                <th style="width: 10%;">Date création</th>
                                <th style="width: 10%;">Montant</th>
                                <th style="width: 5%;">Montant TVA</th>
                                <th style="width: 5%;">Montant TTC</th>
                                <th style="width: 15%;">Description</th>
                                <th style="width: 5%;">Appel Num</th>
                                <th style="width: 5%;">Activité</th>
                                <th style="width: 5%;">Client</th>
                                <th style="width: 5%;">Région</th>
                                <th style="width: 5%;">Recep Def</th>
                                <th style="width: 5%;">PO</th>
                                <th>Consulter</th>
                                <th>Imprimer</th>
                                <th>Exporter CSV</th>
                              </tr>
                            </thead>

                            <tbody>

                               

                            </tbody>

                          </table>
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
                      </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
	        </div>
       </div>

            

</div>




<div id="loader-wrapper">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
</div>




    <!-- jQuery -->

    <script src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/nprogress.js"></script>
    <script src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/MainFunction.js"></script>
    <script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/moment.js"></script>

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

jQuery(document).ready(function() {
    jQuery('#loader-wrapper').fadeOut(5000);
     
});


function conToMill(num) {
            if (num == 0) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
            }
            if (num < 1000000 && num > 999) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(2)) + 'K' : Math.sign(num) * Math.abs(num)
            }
            if (num < -999 && num > -1000000) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(2)) + 'K' : Math.sign(num) * Math.abs(num)
            }
            if (num < 0 && num > -1000) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
            }
            if (num > 0 && num < 1000) {
                return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1).toFixed(2)) : Math.sign(num) * Math.abs(num)
            }
            if (num > 999999) {
                return Math.abs(num) > 999999 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(2)) + 'M' : Math.sign(num) * Math.abs(num)
            }
            if (num < -999999) {
                return Math.abs(num) > 999999 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(2)) + 'M' : Math.sign(num) * Math.abs(num)
            }

        }

var ProjectUID;

    ExecuteOrDelayUntilScriptLoaded(getProjectUIDPropertyOperation, "sp.js");

    function getProjectUIDPropertyOperation() {
        var ctx = new SP.ClientContext.get_current();
        this.web = ctx.get_web();
        this.props = this.web.get_allProperties();
        ctx.load(this.web);
        ctx.load(this.props);
        ctx.executeQueryAsync(Function.createDelegate(this, LoadDataProject));


    }

//Récuperer des données du projet 
function LoadDataProject(ProjectUID) {
 ProjectUID = this.props.get_item('MSPWAPROJUID');
        var data =  $.ajax({ url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+ProjectUID+"')",
                                                                                               
            type: "GET",
            dataType: "json",
            headers: {
                "Accept": "application/json; odata=verbose"}});
                  var listItemInfo1  = "";
                  var listItemInfo2  = "";
                  var listItemInfo3  = "";
                  var listItemInfo4  = "";

                
                data.done(function (data,textStatus, jqXHR){

                    if (data.d.results == undefined) {  
                        data.d.results = new Array();
                        data.d.results[0] = new Object();

                        data.d.results[0] = data.d.CODE_PROJET;
                        data.d.results[0] = data.d.ProjectName;
                        data.d.results[0] = data.d.PO;

                        data.d.results[0] = data.d.Périodedegarantie;
                        data.d.results[0] = data.d.RéceptionDef;
                        data.d.results[0] = data.d.RéceptionProv;


                        moment.locale('fr');

                        var codeprojet = data.d.CODE_PROJET;
                        var nomprojets = data.d.ProjectWorkspaceInternalUrl;
                        var nomprojet = nomprojets.substring(28);

                        var popr = data.d.PO;
                        if(popr ==null)
                        {
                          popr = "Veuillez saisir le PO";
                        }

                        var montant = data.d.Montant_contractuel;
                        if(montant ==null)
                        {
                          montant="";
                        }
                        else
                        {
                          montant = parseFloat(data.d.Montant_contractuel).toFixed(3);
                        }



                    listItemInfo1 +=  codeprojet;
                    listItemInfo2 +=  nomprojet;

                    listItemInfo3 +=  conToMill(montant);
                    listItemInfo4 += popr;


                $("#codepr").html(listItemInfo1);
                $("#nompr").html(listItemInfo2);
                $("#mont_contract").html(listItemInfo3);
                $("#POProjet").html(listItemInfo4);

                
                
                

            }
        });
    }












  var tablePaginationArticleAttachment = tablePaginationArticleAttachment ||[]; 
   var UrlArticleLoadedAttachment = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_Article_Attachement')/items?$select=montantTotal"; 
   
  function LoadAllSumArticleAttachment()
  {
    var sommePrixArticle=0;

    $.ajax({
                     url: UrlArticleLoadedAttachment,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            tablePaginationArticleAttachment = tablePaginationArticleAttachment.concat(data.d.results);
                                            if (data.d.__next) {
                                              UrlArticleLoadedAttachment = data.d.__next;
                                              LoadAllSumArticleAttachment();
                                            }
                                              

                   $.each(tablePaginationArticleAttachment, function(key, value) 
                    {
                      
                      var montantTotal   =   parseFloat(value.montantTotal).toFixed(3);

                      sommePrixArticle= parseInt(montantTotal) + sommePrixArticle;

                     

                    });

                    document.getElementById('montantGlobalAttachementTrait').innerHTML = conToMill(sommePrixArticle);

                   
          }   
          });

  }LoadAllSumArticleAttachment();



var genereAllAttachment = genereAllAttachment || [];
var loadWBSUrlAttachment = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('AttachementFacture')/items?$orderby=Created desc";

function RecuperationDataTableAttachment() {

        $.ajax({
                     url: loadWBSUrlAttachment,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            genereAllAttachment = genereAllAttachment.concat(data.d.results);
                                            if (data.d.__next) {
                                              loadWBSUrlAttachment = data.d.__next;
                                              RecuperationDataTableAttachment();
                                            }

                                 var nomOperationTab = [];
                                 var nomAttachementTab = [];
                                 var dateCreationTab = [];
                                 var montantTab = [];
                                 var tvaTab = [];
                                 var montantTVATab = [];
                                 var montantTTCTab = [];
                                 var descriptionTab=[];
                                 var appelNumTab = [];
                                 var activiteTab = [];
                                 var clientTab = [];
                                 var regionTab = [];
                                 var recepDefTab = [];
                                 var POTab = [];  
                                 var identifiantTab = [];

                                 var Numero_AttachementTab = []; 

                             
                                    

                   $.each(genereAllAttachment, function(key, value) 
                    {
                      moment.locale('fr');
                        var Nom_operation = value.Nom_operation;
                        var Nom_Attachement= value.Nom_Attachement;
                        var identifiant = value.Id;
                        

                        var Created= moment(value.Created).format('DD-MM-YYYY');
                        var Prix_Attachement= value.Prix_Attachement;
                        
                        var TVA= value.TVA;
                        if(TVA ==null)
                        {
                          TVA = "";
                        }

                        var Prix_TVA= value.Prix_TVA;
                        var Prix_TTC= value.Prix_TTC;
                        var Description= value.Description;
                        var Appel_Num= value.Appel_Num;
                        
                        var Activite_Attachement= value.Activite_Attachement;
                        if(Activite_Attachement ==null)
                        {
                          var Activite_Attachement = "";
                        }

                        var Client= value.Client;

                        var Region= value.Region;
                        if(Region ==null)
                        {
                          var Region = "";
                        }

                        var Reception= value.Reception;
                        if(Description == null)
                        {
                          var Description = "";
                        }
                        var PO= value.PO;

                        var Numero_Attachement = value.Numero_Attachement;
                        
                        if(Numero_AttachementTab.indexOf(Numero_Attachement) == -1)
                        {
                          Numero_AttachementTab.push(Numero_Attachement);
                          nomOperationTab.push(Nom_operation);
                          nomAttachementTab.push(Nom_Attachement);
                          dateCreationTab.push(Created);
                          montantTab.push(Prix_Attachement);
                          //tvaTab.push(TVA);
                          montantTVATab.push(Prix_TVA);
                          montantTTCTab.push(Prix_TTC);
                          descriptionTab.push(Description);
                          appelNumTab.push(Appel_Num);
                          activiteTab.push(Activite_Attachement);
                          clientTab.push(Client);
                          regionTab.push(Region);
                          recepDefTab.push(Reception);
                          POTab.push(PO);
                          identifiantTab.push(identifiant);


                        }

                    });

                   LoadAllAttachmentSaved(Numero_AttachementTab,nomOperationTab,nomAttachementTab,dateCreationTab,montantTab,montantTVATab,montantTTCTab,descriptionTab,appelNumTab,activiteTab,clientTab,regionTab,recepDefTab,POTab,identifiantTab)

               }
           });
    }

    RecuperationDataTableAttachment();


function LoadAllAttachmentSaved(Numero_AttachementTab,nomOperationTab,nomAttachementTab,dateCreationTab,montantTab,montantTVATab,montantTTCTab,descriptionTab,appelNumTab,activiteTab,clientTab,regionTab,recepDefTab,POTab,identifiantTab)
{

    for(var i=0; i<Numero_AttachementTab.length;i++)
    {
      var tbodyRef = document.querySelector('#tableaux tbody');

                    var tr;  
                  tr = $("<tr class='rowTableaux' style='width:100%;'/>");
                  
                        tr.append("<td>"+(tbodyRef.rows.length+ 1) +"</td>");
                        tr.append("<td style='width:10%;' id='identifiantTab' >"+identifiantTab[i]+"</td>");
                        tr.append("<td style='width:10%;' id='nomOperationTab' >"+nomOperationTab[i]+"</td>");
                        tr.append("<td style='width:10%;' id='nomAttachementTab' >"+nomAttachementTab[i]+"</td>");
                        tr.append("<td style='width:10%;' id='dateCreationTab' >"+dateCreationTab[i]+"</td>");
                        tr.append("<td style='width:10%;' id='montantTab' >"+montantTab[i]+"</td>");
                        //tr.append("<td style='width:5%;' id='tvaTab' >"+tvaTab[i]+"</td>");
                        tr.append("<td style='width:5%;' id='montantTVATab' >"+montantTVATab[i]+"</td>");
                        tr.append("<td style='width:5%;' id='montantTTCTab' >"+montantTTCTab[i]+"</td>");
                        tr.append("<td style='width:15%;' id='descriptionTab' >"+descriptionTab[i]+"</td>");
                        tr.append("<td style='max-width:0px;' id='appelNumTab' >"+appelNumTab[i]+"</td>");
                        tr.append("<td style='width:5%;' id='activiteTab' >"+activiteTab[i]+"</td>");
                        tr.append("<td style='max-width:0px;' id='clientTab' >"+clientTab[i]+"</td>");
                        tr.append("<td style='width:5%;' id='regionTab' >"+regionTab[i]+"</td>");
                        tr.append("<td style='width:5%;' id='recepDefTab' >"+recepDefTab[i]+"</td>");
                        tr.append("<td style='width:5%;' id='POTab' >"+POTab[i]+"</td>");
                        tr.append("<td><button id='glyphiconPrint' data-toggle='modal' data-target='#myModal' style='background: url(klematis.jpg) repeat;' value='"+Numero_AttachementTab[i] +"' onclick='return false;'><span class='glyphicon glyphicon-zoom-in'></span></button></td>");
                        tr.append("<td><button id='glyphiconConsult'  style='background: url(klematis.jpg) repeat;' value='"+Numero_AttachementTab[i] +"' onclick='return false;'><span class='glyphicon glyphicon-print'></span></button></td>");
                        tr.append("<td><button id='glyphiconCSV'  style='background: url(klematis.jpg) repeat;' value='"+Numero_AttachementTab[i] +"' onclick='return false;'><span class='glyphicon glyphicon-file'></span></button></td>");
                        
                  $('#tableaux tbody').append(tr); 

    }


      $(document).ready(function() {

        var sum_HT = 0;

        $("#tableaux tbody tr").each( function( index ) {

          sum_HTExtract = $(this).children().eq(5).text().replace('DT','');
          sum_HT += sum_HTExtract * 1;
     
        }); 

        $("#montantGlobalAttachement").text(conToMill(sum_HT));

      });

                                  


                                  
                                $(document).ready(function() {

                                  


                                  $('#tableaux tbody tr').on('click', '#glyphiconPrint', function () {
                                          
                                          var identAttachement;
                                          var identAtt = [];
                                          
                                          var nomOperationTabImpr;
                                          var nomAttachementTabImpr;
                                          var dateCreationTabImpr;
                                          var montantTabImpr;
                                          var tvaTabImpr;
                                          var montantTVATabImpr;
                                          var montantTTCTabImpr;
                                          var descriptionTabImpr;
                                          var appelNumTabImpr;
                                          var activiteTabImpr;
                                          var clientTabImpr;
                                          var regionTabImpr;
                                          var recepDefTabImpr;
                                          var POTabImpr;
                                          var codeprojet;
                                          var nomprojet;

                                          //Lier des articles
                                          var CodeArticleTab=[];
                                                      var libArticleTab=[];
                                                     var  quantiteArticleTab=[];
                                                      var prixVenteTab=[];
                                                     var  montantTotalTab=[];
                                                     var  montantTTCTab=[];
                                                     var  unityTab = [];
                                                     var  prixTVATAB = [];
                                                     var words;



                                        jQuery('#loader-wrapper').fadeIn(500);
                                        jQuery('#loader-wrapper').fadeOut(2000);
                                        //$("#documentFacture").show();

                                            identAttachement = $(this).closest('tr').find("#glyphiconPrint").val();
                                            
                                            nomOperationTabImpr= $(this).closest('tr').find("#nomOperationTab").text();
                                            nomAttachementTabImpr= $(this).closest('tr').find("#nomAttachementTab").text();
                                            dateCreationTabImpr= $(this).closest('tr').find("#dateCreationTab").text();
                                            montantTabImpr = $(this).closest('tr').find("#montantTab").text();
                                            //tvaTabImpr= $(this).closest('tr').find("#tvaTab").text();
                                            montantTVATabImpr= $(this).closest('tr').find("#montantTVATab").text();
                                            montantTTCTabImpr= $(this).closest('tr').find("#montantTTCTab").text();
                                            descriptionTabImpr = $(this).closest('tr').find("#descriptionTab").text();
                                            appelNumTabImpr= $(this).closest('tr').find("#appelNumTab").text();
                                            activiteTabImpr= $(this).closest('tr').find("#activiteTab").text();
                                            clientTabImpr= $(this).closest('tr').find("#clientTab").text();
                                            regionTabImpr= $(this).closest('tr').find("#regionTab").text();
                                            recepDefTabImpr= $(this).closest('tr').find("#recepDefTab").text();
                                            POTabImpr = $(this).closest('tr').find("#POTab").text();

                                            codeprojet = $("#codepr").text();
                                            nomprojet = $("#nompr").text();
                          
                                    $("#CodeProjetImpr").html(codeprojet);
                                    $("#RegionImpr").html(regionTabImpr);
                                    $("#ProjetImpr").html(nomprojet);
                                    $("#ReceptionImpr").html(recepDefTabImpr);
                                    
                                    $("#AppelImpr").html(appelNumTabImpr);
                                    $("#POImpr").html(POTabImpr);
                                    $("#ActiviteImpr").html(activiteTabImpr);
                                    $("#ClientImpr").html(clientTabImpr);
                                    $("#AttachementsImpr").html(nomAttachementTabImpr);

                                     words = identAttachement.split(',');

                                      
                                       
                                      
                                      for(var i=0;i<words.length;i++)
                                      {
                                       AfficherArticles(words[i],CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,montantTTCTab,unityTab,prixTVATAB);
                                        //console.log("words " + words[i]);
                                      }
                                      
                                      });

                                });



                                  


                                  

                                $(document).ready(function() {                                 


                                    $('#tableaux tbody tr').on('click', '#glyphiconConsult', function () {
                                    var identAttachementr;
                                  var identAttr = [];
                                  var nomOperationTabImprr;
                                  var nomAttachementTabImprr;
                                  var dateCreationTabImprr;
                                  var montantTabImprr;
                                  var tvaTabImprr;
                                  var montantTVATabImprr;
                                  var montantTTCTabImprr;
                                  var descriptionTabImprr;
                                  var appelNumTabImprr;
                                  var activiteTabImprr;
                                  var clientTabImprr;
                                  var regionTabImprr;
                                  var recepDefTabImprr;
                                  var POTabImprr;
                                  var codeprojetr;
                                  var nomprojetr;
                                  var identifiantTabDecompte;

                                  //Lier des articles
                                  var CodeArticleTab=[];
                                              var libArticleTab=[];
                                             var  quantiteArticleTab=[];
                                              var prixVenteTab=[];
                                             var  montantTotalTab=[];
                                             var  montantTTCTab=[];
                                             var  unityTab = [];
                                             var  prixTVATAB = [];
                                             var words;

                                        //$("#documentFacture").show();
                                        jQuery('#loader-wrapper').fadeIn(500);
                                        jQuery('#loader-wrapper').fadeOut(2000);

                                            identAttachementr = $(this).closest('tr').find("#glyphiconConsult").val();
                                            identifiantTabDecompte = $(this).closest('tr').find("#identifiantTab").text();
                                            nomOperationTabImprr= $(this).closest('tr').find("#nomOperationTab").text();
                                            nomAttachementTabImprr= $(this).closest('tr').find("#nomAttachementTab").text();
                                            dateCreationTabImprr= $(this).closest('tr').find("#dateCreationTab").text();
                                            montantTabImprr = $(this).closest('tr').find("#montantTab").text();
                                            tvaTabImprr= $(this).closest('tr').find("#tvaTab").text();
                                            montantTVATabImprr= $(this).closest('tr').find("#montantTVATab").text();
                                            montantTTCTabImprr= $(this).closest('tr').find("#montantTTCTab").text();
                                            descriptionTabImprr = $(this).closest('tr').find("#descriptionTab").text();
                                            appelNumTabImprr= $(this).closest('tr').find("#appelNumTab").text();
                                            activiteTabImprr= $(this).closest('tr').find("#activiteTab").text();
                                            clientTabImprr= $(this).closest('tr').find("#clientTab").text();
                                            regionTabImprr= $(this).closest('tr').find("#regionTab").text();
                                            recepDefTabImprr= $(this).closest('tr').find("#recepDefTab").text();
                                            POTabImprr = $(this).closest('tr').find("#POTab").text();

                                            codeprojetr = $("#codepr").text();
                                            nomprojetr = $("#nompr").text();

                                    $("#CodeProjetImprr").html(codeprojetr);
                                    $("#RegionImprr").html(regionTabImprr);
                                    $("#ProjetImprr").html(nomprojetr);
                                    $("#ReceptionImprr").html(recepDefTabImprr);
                                    
                                    $("#AppelImprr").html(appelNumTabImprr);
                                    $("#POImprr").html(POTabImprr);
                                    $("#ActiviteImprr").html(activiteTabImprr);
                                    $("#ClientImprr").html(clientTabImprr);
                                    $("#AttachementsImprr").html(nomAttachementTabImprr);

                                     $("#identDecompte").html(identifiantTabDecompte);
                                      
                                    words = identAttachementr.split(',');

                                      
                                       
                                      
                                      for(var i=0;i<words.length;i++)
                                      {
                                       AfficherArticlesPrint(words[i],CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,montantTTCTab,unityTab,prixTVATAB);
                                        //console.log("words " + words[i]);
                                      }
                                      
                                        $("#noPrint").hide();
                                          $("#myModal").hide();

                                          $("#PrintFacture").show();
                                          $('#PrintWindows').show();
                                          $("#returnToMainFA").show();
                                          

                                      });
                                });






















/*$("#glyphiconConsult").click(function () {
      $("#PrintFacture").show();
      $("#noPrint").hide();

  });*/



}





  $("#PrintWindows").click(function () {
      $("#noPrint").hide();
      $("#myModal").hide();
         $('#PrintWindows').hide();
         $("#s4-titlerow").hide();
         $("#returnToMainFA").hide();
         window.print($("#PrintFacture").html());
         $("#noPrint").show();
         $("#PrintFacture").hide();
  });


  $("#returnToMainFA").click(function () {
         $("#noPrint").show();
         $("#PrintFacture").hide();
  });

function AfficherArticles(identAttachement,CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,montantTTCTab,unityTab,prixTVATAB)
{


  //console.log("ident " + ident);
  var tablePaginationArticleAtt = tablePaginationArticleAtt ||[]; 
   var UrlArticleLoadedAtt = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_Article_Attachement')/items?$filter=id_Attachement eq '"+identAttachement+"'"; 

  function LoadAllArticleSavedRegistringAtt()
  {
    var sommePrixArticle=0;

    $.ajax({
                     url: UrlArticleLoadedAtt,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            tablePaginationArticleAtt = tablePaginationArticleAtt.concat(data.d.results);
                                            if (data.d.__next) {
                                              UrlArticleLoadedAtt = data.d.__next;
                                              LoadAllArticleSavedRegistringAtt();
                                            }

                                              

                   $.each(tablePaginationArticleAtt, function(key, value) 
                    {
                      var CodeArticle = value.CodeArticle;
                      var unity = value.unity;
                      var MontantTVA = value.MontantTVA;
                      if(MontantTVA ==null)
                      {
                        MontantTVA = 0.000;
                      }
                      else
                      {
                        MontantTVA = parseFloat(value.MontantTVA).toFixed(3);
                      }

                      if(unity==null)
                      {
                        unity = "";
                      }

                      var libArticle = value.libArticle;
                      var quantiteArticle = parseFloat(value.quantiteArticle).toFixed(3);
                      var prixVente  = value.prixVente;
                      var montantTotal   =   parseFloat(value.montantTotal).toFixed(3);
                      
                      var montantTTC = value.MontantTTC;
                      if(montantTTC ==null)
                      {
                        montantTTC=0;
                      }
                      else
                      {
                        var montantTTC = parseFloat(value.MontantTTC).toFixed(3);
                      }
                      
                      sommePrixArticle= parseInt(montantTotal) + sommePrixArticle;


                      if(CodeArticleTab.indexOf(CodeArticle)==-1)
                      {
                        CodeArticleTab.push(CodeArticle);
                        libArticleTab.push(libArticle);
                        quantiteArticleTab.push(quantiteArticle);
                        prixVenteTab.push(prixVente);
                        montantTotalTab.push(montantTotal);
                        montantTTCTab.push(montantTTC);
                        unityTab.push(unity);
                        prixTVATAB.push(MontantTVA);

                      }else if(CodeArticleTab.indexOf(CodeArticle)>-1){
                        quantiteArticleTab[CodeArticleTab.indexOf(CodeArticle)]=parseFloat(parseFloat(quantiteArticleTab[CodeArticleTab.indexOf(CodeArticle)])+parseFloat(quantiteArticle))
                        montantTotalTab[CodeArticleTab.indexOf(CodeArticle)]=parseFloat(parseFloat(montantTotalTab[CodeArticleTab.indexOf(CodeArticle)])+parseFloat(montantTotal)).toFixed(3)
                        prixTVATAB[CodeArticleTab.indexOf(CodeArticle)]=parseFloat(parseFloat(prixTVATAB[CodeArticleTab.indexOf(CodeArticle)])+parseFloat(MontantTVA)).toFixed(3)
                        montantTTCTab[CodeArticleTab.indexOf(CodeArticle)]=parseFloat(parseFloat(montantTTCTab[CodeArticleTab.indexOf(CodeArticle)])+parseFloat(montantTTC)).toFixed(3)
                      }
                      


                    });

                   TabFinalResourcesToPrint(CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,montantTTCTab,unityTab,prixTVATAB);

                   
          }   
          });

  }LoadAllArticleSavedRegistringAtt();
}

function TabFinalResourcesToPrint(CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,montantTTCTab,unityTab,prixTVATAB)
{
  tableaux = document.getElementById("tableauxDeFacturation");
                                      tr11 = tableaux.getElementsByTagName("tr");
                                      if(tr11.length>0){
                                      $('#tableauxDeFacturation tbody').empty();
                                      }


  for(var i=0;i<CodeArticleTab.length;i++)
    {

    var tbodyRef = document.querySelector('#tableauxDeFacturation tbody');

                var tr;  
                      tr = $("<tr class='tableauxFinalArticleAtt'/>");
                        tr.append("<td>"+(tbodyRef.rows.length+ 1) +"</td>");
                        tr.append("<td id=''>"+CodeArticleTab[i]+"</td>");
                        tr.append("<td id=''>"+libArticleTab[i]+"</td>");
                        tr.append("<td id=''>"+unityTab[i]+"</td>");
                        tr.append("<td id=''>"+quantiteArticleTab[i]+"</td>");
                        tr.append("<td id=''>"+prixVenteTab[i]+"</td>");
                        tr.append("<td id=''>"+montantTotalTab[i]+"</td>");
                        tr.append("<td id=''>"+prixTVATAB[i]+"</td>");
                        tr.append("<td id=''>"+montantTTCTab[i]+"</td>");
                    
                      $('#tableauxDeFacturation').append(tr); 
    }


  $(document).ready(function() {
    var sum_HT = 0;
    var sum_TVA=0;
    var sum_TTC = 0;
    $("#tableauxDeFacturation tbody tr").each( function( index ) {
      sum_HT += $(this).children().eq(6).text() * 1;
      sum_TVA += $(this).children().eq(7).text() * 1;
      sum_TTC += $(this).children().eq(8).text() * 1;

    }); 

    $("#montantHTImpr").text(parseFloat(sum_HT).toFixed(3) + " DT");
    $("#montantTVAImpr").text(parseFloat(sum_TVA).toFixed(3) + " DT");
    $("#montantTTCImpr").text(parseFloat(sum_TTC).toFixed(3) + " DT");

  });


}


/*
  $("#imprimer").click(function () {
    $('#imprimer').hide();
    window.print($("#PrintFacture").html());
  });*/








//---------------------------------------------------------------------------Print-----------------------------------------------------------------------
  

function AfficherArticlesPrint(identAttachementr,CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,montantTTCTab,unityTab,prixTVATAB)
{

  //console.log("ident " + ident);
  var tablePaginationArticleAttPrint = tablePaginationArticleAttPrint ||[]; 
   var UrlArticleLoadedAttPrint = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_Article_Attachement')/items?$filter=id_Attachement eq '"+identAttachementr+"'"; 
   
  function LoadAllArticleSavedRegistringAttPrint()
  {
    var sommePrixArticle=0;

    $.ajax({
                     url: UrlArticleLoadedAttPrint,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            tablePaginationArticleAttPrint = tablePaginationArticleAttPrint.concat(data.d.results);
                                            if (data.d.__next) {
                                              UrlArticleLoadedAtt = data.d.__next;
                                              LoadAllArticleSavedRegistringAtt();
                                            }

                                 

                   $.each(tablePaginationArticleAttPrint, function(key, value) 
                    {
                      var CodeArticle = value.CodeArticle;
                      var unity = value.unity;
                      var MontantTVA = value.MontantTVA;
                      if(MontantTVA ==null)
                      {
                        MontantTVA = 0.000;
                      }
                      else
                      {
                        MontantTVA = parseFloat(value.MontantTVA).toFixed(3);
                      }

                      if(unity==null)
                      {
                        unity = "";
                      }

                      var libArticle = value.libArticle;
                      var quantiteArticle = value.quantiteArticle;
                      var prixVente  = value.prixVente;
                      var montantTotal   =   parseFloat(value.montantTotal).toFixed(3);
                      
                      var montantTTC = value.MontantTTC;
                      if(montantTTC ==null)
                      {
                        montantTTC=0;
                      }
                      else
                      {
                        var montantTTC = parseFloat(value.MontantTTC).toFixed(3);
                      }
                      
                      sommePrixArticle= parseInt(montantTotal) + sommePrixArticle;

                      if(CodeArticleTab.indexOf(CodeArticle)==-1)
                      {
                        CodeArticleTab.push(CodeArticle);
                        libArticleTab.push(libArticle);
                        quantiteArticleTab.push(quantiteArticle);
                        prixVenteTab.push(prixVente);
                        montantTotalTab.push(montantTotal);
                        montantTTCTab.push(montantTTC);
                        unityTab.push(unity);
                        prixTVATAB.push(MontantTVA);
                      }else if(CodeArticleTab.indexOf(CodeArticle)>-1){
                        quantiteArticleTab[CodeArticleTab.indexOf(CodeArticle)]=parseFloat(parseFloat(quantiteArticleTab[CodeArticleTab.indexOf(CodeArticle)])+parseFloat(quantiteArticle))
                        montantTotalTab[CodeArticleTab.indexOf(CodeArticle)]=parseFloat(parseFloat(montantTotalTab[CodeArticleTab.indexOf(CodeArticle)])+parseFloat(montantTotal)).toFixed(3)
                        prixTVATAB[CodeArticleTab.indexOf(CodeArticle)]=parseFloat(parseFloat(prixTVATAB[CodeArticleTab.indexOf(CodeArticle)])+parseFloat(MontantTVA)).toFixed(3)
                        montantTTCTab[CodeArticleTab.indexOf(CodeArticle)]=parseFloat(parseFloat(montantTTCTab[CodeArticleTab.indexOf(CodeArticle)])+parseFloat(montantTTC)).toFixed(3)
                      }


                    });

                   TabFinalResourcesToPrintPrinted(CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,montantTTCTab,unityTab,prixTVATAB);

                   
          }   
          });

  }LoadAllArticleSavedRegistringAttPrint();
}

function TabFinalResourcesToPrintPrinted(CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,montantTTCTab,unityTab,prixTVATAB)
{
  tableaux = document.getElementById("tableauxDeFacturationr");
                                      tr11 = tableaux.getElementsByTagName("tr");
                                      if(tr11.length>0){
                                      $('#tableauxDeFacturationr tbody').empty();
                                      }


  for(var i=0;i<CodeArticleTab.length;i++)
    {

    var tbodyRef = document.querySelector('#tableauxDeFacturationr tbody');

                var tr;  
                      tr = $("<tr class='tableauxFinalArticleAttr'/>");
                        tr.append("<td>"+(tbodyRef.rows.length+ 1) +"</td>");
                        tr.append("<td id=''>"+CodeArticleTab[i]+"</td>");
                        tr.append("<td id=''>"+libArticleTab[i]+"</td>");
                        tr.append("<td id=''>"+unityTab[i]+"</td>");
                        tr.append("<td id=''>"+quantiteArticleTab[i]+"</td>");
                        tr.append("<td id=''>"+prixVenteTab[i]+"</td>");
                        tr.append("<td id=''>"+montantTotalTab[i]+"</td>");
                        tr.append("<td id=''>"+prixTVATAB[i]+"</td>");
                        tr.append("<td id=''>"+montantTTCTab[i]+"</td>");
                    
                      $('#tableauxDeFacturationr').append(tr); 
    }


  $(document).ready(function() {
    var sum_HT = 0;
    var sum_TVA=0;
    var sum_TTC = 0;
    $("#tableauxDeFacturationr tbody tr").each( function( index ) {
      sum_HT += $(this).children().eq(6).text() * 1;
      sum_TVA += $(this).children().eq(7).text() * 1;
      sum_TTC += $(this).children().eq(8).text() * 1;

    }); 

    $("#montantHTImprr").text(parseFloat(sum_HT).toFixed(3) + " DT");
    $("#montantTVAImprr").text(parseFloat(sum_TVA).toFixed(3) + " DT");
    $("#montantTTCImprr").text(parseFloat(sum_TTC).toFixed(3) + " DT");

  });


}



//Role de consultation

function getCurrentUserGroupColl(UserID)
{
  $.ajax
  ({
  url: _spPageContextInfo.webServerRelativeUrl + "/_api/web/GetUserById("+UserID+")/Groups",
  type: "GET",
  headers: { "Accept": "application/json; odata=verbose","X-RequestDigest": $("#__REQUESTDIGEST").val() },
  dataType: "json",
  async: true,
   success: function(data){
      /* get all group's title of current user. */
      var results = data.d.results;
      var arrgrp=[];
      for(var i=0; i< results.length; i++)
      {
        arrgrp.push(results[i].Title);
        


      }


        var grpServiceC="Service Comptabilité";

         if (arrgrp.indexOf(grpServiceC)>-1) {
      
           $(document).ready(function(){
      


            $("#tableaux tbody tr").each(function(){
                 var montant = $(this).closest('tr').find('.prixunit').text();
                       $(this).closest('tr').find('#glyphiconPrint').attr('disabled',false);       
                                
                      
                        
                        $(this).closest('tr').find('#glyphiconConsult').attr('disabled',false);


                        $(this).closest('tr').find('#glyphiconCSV').attr('disabled',false); 

                        //$(this).closest('tr').find('#glyphiconConsultPrintAll').attr('disabled','disabled');

                      



            });
            });
       

        }
        else{
            $(document).ready(function(){
      
            $("#tableaux tbody tr").each(function(){
                 var montant = $(this).closest('tr').find('.prixunit').text();
                              
                                
                      
                        
                        $(this).closest('tr').find('#glyphiconPrint').attr('disabled','disabled');
                        $(this).closest('tr').find('#glyphiconConsult').attr('disabled','disabled');
                        $(this).closest('tr').find('#glyphiconCSV').attr('disabled','disabled');
 

                     



            });

          });
        }
  }
  });
}


function getCurrentUser()
{
 $.ajax
  ({
      url: "/PWA/_api/web/CurrentUser",
      type: "GET",
      headers: { "Accept": "application/json; odata=verbose","X-RequestDigest": $("#__REQUESTDIGEST").val() },
      dataType: "json",
      async: true,
      success: function(data){
        getCurrentUserGroupColl(data.d.Id)
      }
  });
}  

$(document).ready(function()
{ 
    getCurrentUser();
});

getPagination('#tableaux');

        function getPagination(table) {

            var lastPage = 1;

            $('#maxRows')
                .on('change', function (evt) {
                    //$('.paginationprev').html('');                      // reset pagination

                    lastPage = 1;
                    $('.pagination')
                        .find('li')
                        .slice(1, -1)
                        .remove();
                    var trnum = 0; // reset tr counter
                    var maxRows = parseInt($(this).val()); // get Max Rows from select option

                    if (maxRows == 5000) {
                        $('.pagination').hide();
                    } else {
                        $('.pagination').show();
                    }

                    var totalRows = $(table + ' tbody tr').length; // numbers of rows
                    $(table + ' tr:gt(0)').each(function () {
                        // each TR in  table and not the header
                        trnum++; // Start Counter
                        if (trnum > maxRows) {
                            // if tr number gt maxRows

                            $(this).hide(); // fade it out
                        }
                        if (trnum <= maxRows) {
                            $(this).show();
                        } // else fade in Important in case if it ..
                    }); //  was fade out to fade it in
                    if (totalRows > maxRows) {
                        // if tr total rows gt max rows option
                        var pagenum = Math.ceil(totalRows / maxRows); // ceil total(rows/maxrows) to get ..
                        //  numbers of pages
                        for (var i = 1; i <= pagenum;) {
                            // for each page append pagination li
                            $('.pagination #prev')
                                .before(
                                    '<li data-page="' +
                                    i +
                                    '">\
                                  <span>' +
                                    i++ +
                                    '<span class="sr-only">(current)</span></span>\
                                </li>'
                                )
                                .show();
                        } // end for i
                    } // end if row count > max rows
                    $('.pagination [data-page="1"]').addClass('active'); // add active class to the first li
                    $('.pagination li').on('click', function (evt) {
                        // on click each page
                        evt.stopImmediatePropagation();
                        evt.preventDefault();
                        var pageNum = $(this).attr('data-page'); // get it's number

                        var maxRows = parseInt($('#maxRows').val()); // get Max Rows from select option

                        if (pageNum == 'prev') {
                            if (lastPage == 1) {
                                return;
                            }
                            pageNum = --lastPage;
                        }
                        if (pageNum == 'next') {
                            if (lastPage == $('.pagination li').length - 2) {
                                return;
                            }
                            pageNum = ++lastPage;
                        }

                        lastPage = pageNum;
                        var trIndex = 0; // reset tr counter
                        $('.pagination li').removeClass('active'); // remove active class from all li
                        $('.pagination [data-page="' + lastPage + '"]').addClass('active'); // add active class to the clicked
                        // $(this).addClass('active');                  // add active class to the clicked
                        limitPagging();
                        $(table + ' tr:gt(0)').each(function () {
                            // each tr in table not the header
                            trIndex++; // tr index counter
                            // if tr index gt maxRows*pageNum or lt maxRows*pageNum-maxRows fade if out
                            if (
                                trIndex > maxRows * pageNum ||
                                trIndex <= maxRows * pageNum - maxRows
                            ) {
                                $(this).hide();
                            } else {
                                $(this).show();
                            } //else fade in
                        }); // end of for each tr in table
                    }); // end of on click pagination list
                    limitPagging();
                })
                .val(5000)
                .change();

            // end of on select change

            // END OF PAGINATION
        }

        function limitPagging() {
            // alert($('.pagination li').length)

            if ($('.pagination li').length > 7) {
                if ($('.pagination li.active').attr('data-page') <= 3) {
                    $('.pagination li:gt(5)').hide();
                    $('.pagination li:lt(5)').show();
                    $('.pagination [data-page="next"]').show();
                } if ($('.pagination li.active').attr('data-page') > 3) {
                    $('.pagination li:gt(0)').hide();
                    $('.pagination [data-page="next"]').show();
                    for (let i = (parseInt($('.pagination li.active').attr('data-page')) - 2); i <= (parseInt($('.pagination li.active').attr('data-page')) + 2); i++) {
                        $('.pagination [data-page="' + i + '"]').show();

                    }

                }
            }
        }

/*        $(function () {
            // Just to append id number for each row
            $('table tr:eq(20)').prepend('<th  style="display:none;"> ID </th>');

            var id = 0;

            $('table tr:gt(20)').each(function () {
                id++;
                $(this).prepend('<td style="display:none;">' + id + '</td>');
            });
        });*/


$("#search").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $("#tableaux tbody tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});
</script>