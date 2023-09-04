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
    <link href="/PWA/_catalogs/masterpage/Module_de_facturation_client/Direction_wireless/css/MiseEnPage.css" rel="stylesheet">

<style>


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

        #mylist1 {

             background-position: 10px 10px;
            background-repeat: no-repeat;
            font-size: 13px;
            padding: 12px 20px 12px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            max-width: 18%;

            
        }

        #mylist2 {
           background-position: 10px 10px;
            background-repeat: no-repeat;
            font-size: 13px;
            width:13%;
            padding: 12px 20px 12px 15px;
            border: 1px solid #ddd;
            margin-left: 50px;
            border-radius: 5px;
        }



</style>

  </head>
<div id="beforePrint">

      <div id="headercolor">
         <div>

            <small class="smallRisks">
              <u>Suivi et facturation : CA et RG (ServiceInfrastructure.Wireless)</u>
            </small>
            
          </div> 




            <div> 
            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist2" onchange="filtreOperation(); MainMilestone();">
                <option value="">Projets</option>
            </select>

             <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist1" onchange="MainOperation();" disabled>
                <option value="">Opérations</option>
            </select>
            </div>
         

      </div>



<div id="entete1">
<div class="row">

                   <div class="col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                
                                <div class="col-xs-10 text-center">
                                   <div class="col-xs-6" style="color:white;font-family: monospace;">Opération: </div>
                                    <div class="col-xs-6">    
                                        <span id="OperationAttachement" style="color:white;font-family: monospace;"></span>
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
                                   <div class="col-xs-6" style="color:white;font-family: monospace;">Projet: </div>
                                    <div class="col-xs-6">
                                        <span id="ProjectAttachement" style="color:white;font-family: monospace;"></span>
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
                                   <div class="col-xs-6" style="color:white;font-family: monospace;">Montant global des attachements:</div>
                                    <div class="col-xs-6">    
                                        <span id="CoutAttachement" style="color:white;font-family: monospace;"></span>
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
                                <th>Num</th>
                                <th>Nom projet</th>
                                <th>ID</th>
                                <th>Code</th>
                                <th>Attachement</th>
                                <th>Date</th>
                                <th>Montant</th>
                                <th>Nb Client</th>
                                <th>Client</th>
                                <th>Bénéficier</th>
                                <th>Utilisateur</th>
                                <th>Attacher</th>
                                <th>Consulter</th>
                                <th>Approbation</th>
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

<div class="modal modal fade" id="exampleModal" tabindex="-1" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
</div>


</body>


<!-- **-----------------------------------Document de facuration --------------------------------------** -->


        <div class="modal modal fade bd-example-modal-x" tabindex="-1" id="myModal1" aria-labelledby="myModalLabel" style='background-color:white; width: 70%; margin: auto; margin-top:20px;'>
<div class="modal-dialog modal-xl" style="width: 90%">

    <div class="card">
            <header>

                <div class="row">
                    <div class="col">
                            <img src="/PWA/_catalogs/masterpage/Module_de_facturation_client/css/sotetel.png" width="150" height="80" data-holder-rendered="true" />
                    </div>
                  
                    <div class="col">                      
                            <div style="float:right; font-size: 35pt;text-align: center;">
                                <h2><strong>Attachement des travaux réalisées</strong></h2>
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

<div id="loader-wrapper">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
</div>

<!-- ********************************************************************************************** -->





    <!-- jQuery -->

 <script src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.js"></script>
  <!-- Bootstrap -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/bootstrap.min.js"></script>
  <!-- FastClick -->

<script src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/fastclick.js"></script>
  <!-- NProgress -->
<script src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/nprogress.js"></script>

<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/moment.js"></script>

<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/javascript/Pagination.js"></script>

<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/Direction_wireless/javascript/showOperations.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/Direction_wireless/javascript/tableauxAttachements.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/Direction_wireless/javascript/tableauxAttachementOperations.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/Direction_wireless/javascript/showPopUpAttachment.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/Direction_wireless/javascript/showPopUpAttachmentOperation.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/Direction_wireless/javascript/ApproveAttachment.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/Direction_wireless/javascript/ApproveAttchmentAll.js"></script>
<script type="text/javascript" src="/PWA/_catalogs/masterpage/Module_de_facturation_client/Direction_wireless/javascript/ShowPopUpAll.js"></script>

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
jQuery(document).ready(function() {
    jQuery('#loader-wrapper').fadeOut(5000);
     
});

    //Fonction qui permet d'afficher les list des Projets
        var responseProjectTypeName = responseProjectTypeName || [];
        var urlProjectTypeName = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Suivi_Attachement_recu')/items?$select=Title,id_projet&$filter=startswith(direction, 'ServiceInfrastructure.Wireless')&$orderby=Created desc";
        function LoadProjectTypeName() {
            $.ajax({
                url: urlProjectTypeName,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseProjectTypeName = responseProjectTypeName.concat(data.d.results);
                    if (data.d.__next) {
                        urlProjectTypeName = data.d.__next;
                        LoadProjectTypeName();
                    }

                    $.each(responseProjectTypeName, function (key, value) {


                        var nomprojets = value.Title;
                        var projetId = value.id_projet;



                        $('#mylist2').append($('<option>',
                            {
                                text: nomprojets,
                                value:projetId
                            }));

                        var opt = {};
                        $("#mylist2 > option").each(function () {
                            if (opt[$(this).text()]) {
                                $(this).remove();
                            } else {
                                opt[$(this).text()] = $(this).val();
                            }
                        });

                    });
                }
            });
        }
        LoadProjectTypeName();



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

function mainFunctionAll()
{

    tableaux = document.getElementById("tableauxAttachement");
            tr11 = tableaux.getElementsByTagName("tr");
            if(tr11.length>0){
                $('#tableauxAttachement tbody').empty();
            }

var responseSuiviMain = responseSuiviMain || [];
var urlSuiviMain = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Suivi_Attachement_recu')/items?$select=id_projet,Title&$filter=startswith(direction, 'ServiceInfrastructure.Wireless')&$orderby=Created desc";
function main() {
          $.ajax({
                url: urlSuiviMain,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseSuiviMain = responseSuiviMain.concat(data.d.results);
                    if (data.d.__next) {
                        urlSuiviMain = data.d.__next;
                        main();
                    }else if (!data.d.__next) {
                      
                              var arrNomProj=[];
                              var arrIdProj=[];

                              var titre;
                              var id_projet;
                        $.each(responseSuiviMain, function (key, value) {
                          
                            titre = value.Title;
                            id_projet = value.id_projet;
                          


                            if (arrNomProj.indexOf(titre)<0) {
                            arrNomProj.push(titre);
                            arrIdProj.push(id_projet);
                            }
                          
                        });
                        for (var i = 0; i < arrNomProj.length; i++) {
                          loadTab(arrNomProj[i],arrIdProj[i]);
                        }
                    }
                }
            });
}
main();



function loadTab(projectName,projetIdentifiant) {
  var genereAllMilestoneMain = genereAllMilestoneMain || [];
  var loadWBSUrlMilestoneMain = _spPageContextInfo.webServerRelativeUrl + "/"+projectName+"/_api/web/lists/getbytitle('Liste_Attachements')/items?$filter=id_projects eq '"+projetIdentifiant+"'&$orderby=Created desc";



  function RecuperationDataTableMilestoneMain() {

          $.ajax({
                       url: loadWBSUrlMilestoneMain,
                                                                                                 
                                      method: "GET",
                                      dataType: "json",
                                      headers: {Accept: "application/json;odata=verbose"},       
                                      success: function (data) {
                                               genereAllMilestoneMain = genereAllMilestoneMain.concat(data.d.results);
                                              if (data.d.__next) {
                                                loadWBSUrlMilestoneMain = data.d.__next;
                                                RecuperationDataTableMilestoneMain();
                                              }else if (!data.d.__next) {
                                              
                              
var attachementTab = [];
                              var idoperationTab = [];
                              var identTab = [];
                              var identifiantAttTab = [];
                              var codeEditTab = [];
                              var dateEditTab = [];
                              var nbClientEditTab = [];
                              var clientEditTab = [];
                              var utilisateurEditTab = [];
                              var factureEditTab = [];
                              var DateFactEditTab = [];
                              var AppelIdentTab = [];
                              var CroquisEditTab = [];
                              var PATEditTab = [];
                              var PVRepEditTab = [];
                              var RDPrevuEditTab = [];
                              var RPFactEditTab = [];
                              var RDFactEditTab = [];
                              var chargeSTEditTab = [];
                              var Sous_TraitEditTab = [];
                              var AttacherTab = [];
                              var MontantAttachementTab = [];
                              var TVATab = [];
                              var beneficierTab=[];
                              var nomdeLoperation=[];

                              var id_TasksTab= [];
                              var id_ProjectsTab = [];
                                                                
                              

                     $.each(genereAllMilestoneMain, function(key, value) 
                      {
                          moment.locale('fr'); 


                                  var id_Tasks = value.id_Tasks;
                                  var id_Projects = value.id_projects;

                                var attachement = value.nomAttachement;
                                var idoperation = value.idoperation;
                                var ident = value.Id;
                                var identifiantAtt = value.Id;
                                if(identifiantAtt ==null)
                                {
                                  identifiantAtt = "";
                                }

                                var codeEdit =  value.codeEdit;  


                                var dateEdit = value.dateEdit; 
                                if(dateEdit ==null)
                                {
                                  dateEdit = "";
                                }
                                else
                                {
                                  var dateEdit =  moment(value.dateEdit).format('DD-MM-YYYY'); 
                                }

                                var nbClientEdit = value.nbClientEdit; 
                                var clientEdit = value.clientEdit; 
                                var utilisateurEdit = value.utilisateurEdit;
                                var factureEdit = value.factureEdit; 


                                var DateFactEdit = value.DateFactEdit;
                                if(DateFactEdit ==null)
                                {
                                  DateFactEdit = "";
                                } 
                                else
                                {
                                  var DateFactEdit = moment(value.DateFactEdit).format('DD-MM-YYYY'); 
                                }

                                var AppelIdent = value.AppelIdent; 
                                var CroquisEdit = value.CroquisEdit; 
                                var PATEdit = value.PATEdit;
                                var PVRepEdit = value.PVRepEdit;

                                var RDPrevuEdit = value.RDPrevuEdit; 
                                if(RDPrevuEdit ==null)
                                {
                                  RDPrevuEdit = "";
                                } 
                                else
                                {
                                  var RDPrevuEdit = moment(value.RDPrevuEdit).format('DD-MM-YYYY'); 
                                }

                                var RPFactEdit = value.RPFactEdit; 
                                if(RPFactEdit ==null)
                                {
                                  RPFactEdit = "";
                                } 
                                else
                                {
                                  var RPFactEdit = moment(value.RPFactEdit).format('DD-MM-YYYY'); 
                                }

                                var RDFactEdit = value.RDFactEdit; 
                                if(RDFactEdit ==null)
                                {
                                  RDFactEdit = "";
                                } 
                                else
                                {
                                  var RDFactEdit = moment(value.RDFactEdit).format('DD-MM-YYYY'); 
                                }

                                var chargeSTEdit = value.chargeSTEdit;

                                var Sous_TraitEdit = value.Sous_TraitEdit; 
                                var Attacher = value.Attacher;
                                var MontantAttachement = value.MontantAttachement;
                                var TVA = value.TVA;
                                if(TVA ==null)
                                {
                                  TVA = "";
                                }

                                if(MontantAttachement!=null)
                                {
                                  MontantAttachement=parseFloat(MontantAttachement).toFixed(3);
                                }
                                else
                                {
                                  MontantAttachement=0;
                                }

                                var Beneficier = value.Beneficier;


                             
                                  attachementTab.push(attachement);
                                  idoperationTab.push(idoperation);
                                  identTab.push(ident);
                                  identifiantAttTab.push(identifiantAtt);
                                  codeEditTab.push(codeEdit);
                                  dateEditTab.push(dateEdit);
                                  nbClientEditTab.push(nbClientEdit);
                                  clientEditTab.push(clientEdit);
                                  utilisateurEditTab.push(utilisateurEdit);
                                  factureEditTab.push(factureEdit);
                                  DateFactEditTab.push(DateFactEdit);
                                  AppelIdentTab.push(AppelIdent);
                                  CroquisEditTab.push(CroquisEdit);
                                  PATEditTab.push(PATEdit);
                                  PVRepEditTab.push(PVRepEdit);
                                  RDPrevuEditTab.push(RDPrevuEdit);
                                  RPFactEditTab.push(RPFactEdit);
                                  RDFactEditTab.push(RDFactEdit);
                                  chargeSTEditTab.push(chargeSTEdit);
                                  Sous_TraitEditTab.push(Sous_TraitEdit);
                                  AttacherTab.push(Attacher);
                                  MontantAttachementTab.push(MontantAttachement);
                                  TVATab.push(TVA);
                                  beneficierTab.push(Beneficier);
                                  id_TasksTab.push(id_Tasks);
                                  id_ProjectsTab.push(id_Projects);
                                  
                                

  });

                        LoadAllAttachement(projectName,id_TasksTab,id_ProjectsTab,attachementTab,idoperationTab,identTab,identifiantAttTab,codeEditTab,dateEditTab,nbClientEditTab,clientEditTab,utilisateurEditTab,factureEditTab,DateFactEditTab,AppelIdentTab,CroquisEditTab,PATEditTab,PVRepEditTab,RDPrevuEditTab,RPFactEditTab,RDFactEditTab,chargeSTEditTab,Sous_TraitEditTab,AttacherTab,MontantAttachementTab,TVATab,beneficierTab);


                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                          
                                                                                                                                                                                                                          
                                                                                                                                                                                                                          
                                                                                                                                                                                                                          
                                                                                                                                                                                                                          
                                                                                                                                                                                                                          
     }                                                                                                                                                                                                                     
                                                                                                                                                                                                                          
  }   
  });
  }                                  
  RecuperationDataTableMilestoneMain();
}
  




function LoadAllAttachement(projectName,id_TasksTab,id_ProjectsTab,attachementTab,idoperationTab,identTab,identifiantAttTab,codeEditTab,dateEditTab,nbClientEditTab,clientEditTab,utilisateurEditTab,factureEditTab,DateFactEditTab,AppelIdentTab,CroquisEditTab,PATEditTab,PVRepEditTab,RDPrevuEditTab,RPFactEditTab,RDFactEditTab,chargeSTEditTab,Sous_TraitEditTab,AttacherTab,MontantAttachementTab,TVATab,beneficierTab)
{
  var tbodyRef = document.querySelector('#tableauxAttachement tbody');
  console.log("identTab= "+identTab);
   for(var i=0; i<identTab.length;i++)
            {
                var tr;  
                  tr = $("<tr class='rowAttachement' id='"+(tbodyRef.rows.length+ 1)+"'/>");
                        tr.append("<td class='td-data'>"+(tbodyRef.rows.length+ 1) +"</td>");
                        tr.append("<td class='td-data' id='projectName'>"+projectName+"</td>");
                        tr.append("<td class='td-data' id='identAtt'>"+identifiantAttTab[i]+"</td>");
                        tr.append("<td class='td-data'>"+codeEditTab[i]+"</td>");

                        tr.append("<td class='td-data operation' id='nomAttachementTab'>" + attachementTab[i] + "</td>");
                        tr.append("<td class='td-data' id='dateAttachement'>"+dateEditTab[i]+"</td>");
                        tr.append("<td class='td-data' id='montantAttach'>"+conToMill(MontantAttachementTab[i])+"</td>");
                        tr.append("<td class='td-data' id='nbClient'>"+nbClientEditTab[i]+"</td>"); 
                        tr.append("<td class='td-data' id='clientAtt'>"+clientEditTab[i]+"</td>");
                        tr.append("<td class='td-data' id='beneficierAtt'>"+beneficierTab[i]+"</td>");
                        tr.append("<td class='td-data' id='userAtt'>"+utilisateurEditTab[i]+"</td>");
                        //tr.append("<td class='td-data'><label for='fileUpload' style='background: brown;'class='file-upload btn btn-primary btn-block rounded-pill shadow'><i class='fa fa-upload mr-2'></i>Join file<input id='fileUpload' type='file'></label></td>");
                        tr.append("<td class='td-data' id='idTasks' style='display:none;'>"+idoperationTab[i]+"</td>");
                        tr.append("<td id='attacher'>"+AttacherTab[i]+"</td>");
                        tr.append("<td id='id_TasksTab' style='display:none;'>"+id_TasksTab[i]+"</td>");
                        tr.append("<td id='id_ProjectsTab' style='display:none;'>"+id_ProjectsTab[i]+"</td>");



/*-------------------------------------------------------------------------------------------------------------------*/
                        //Liée à la finance
                        tr.append("<td id='factureEditTab' style='display:none;'>"+factureEditTab[i]+"</td>");
                        tr.append("<td id='DateFactEditTab' style='display:none;'>"+DateFactEditTab[i]+"</td>");
                        tr.append("<td id='AppelIdentTab' style='display:none;'>"+AppelIdentTab[i]+"</td>");
                        tr.append("<td id='CroquisEditTab' style='display:none;'>"+CroquisEditTab[i]+"</td>");

                        tr.append("<td id='PATEditTab' style='display:none;'>"+PATEditTab[i]+"</td>");
                        tr.append("<td id='PVRepEditTab' style='display:none;'>"+PVRepEditTab[i]+"</td>");
                        tr.append("<td id='RDPrevuEditTab' style='display:none;'>"+RDPrevuEditTab[i]+"</td>");
                        tr.append("<td id='RPFactEditTab' style='display:none;'>"+RPFactEditTab[i]+"</td>");
                        tr.append("<td id='RDFactEditTab' style='display:none;'>"+RDFactEditTab[i]+"</td>");
                        tr.append("<td id='chargeSTEditTab' style='display:none;'>"+chargeSTEditTab[i]+"</td>");
                        tr.append("<td id='Sous_TraitEditTab' style='display:none;'>"+Sous_TraitEditTab[i]+"</td>");

/*-------------------------------------------------------------------------------------------------------------------*/






                        tr.append("<td style='margin:auto;'><button id='glyphiconPrint' data-toggle='modal' data-target='#myModal1' style='background: url(klematis.jpg) repeat; font-size: 5px;' value='"+identTab[i] +"' onclick='return false;'><span class='glyphicon glyphicon-eye-open'></span></button></td>");
                        tr.append("<td style='margin:auto;'><button id='glyphiconValid' data-toggle='modal' data-target='#exampleModal' style='background: url(klematis.jpg) repeat; font-size: 5px;' value='"+identTab[i] +"' onclick='return false;'><span class='glyphicon glyphicon-ok'></span></button></td>")
                        $('#tableauxAttachement').append(tr);  
            }
            
$("#tableauxAttachement tbody td").each(function() {
                        if (this.textContent === "null") this.textContent = "";
                    });




    //Lors de la clique sur une opération
    $(document).ready(function() {
                          $('#tableauxAttachement  tbody tr').on('click', '#glyphiconPrint', function () {
                                var identAttachement = $(this).closest('tr').find('#glyphiconPrint').val();
                                var projectName = $(this).closest('tr').find('#projectName').text();
                                var id_ProjectsTab = $(this).closest('tr').find('#id_ProjectsTab').text();
                                $(".fade").addClass("in");
                                AfficherArticlesPOPUPALL(id_ProjectsTab,projectName,identAttachement);  

                                                                         
                        });
                        });

      $(document).ready(function() {
                          $('#tableauxAttachement  tbody tr').on('click', '#glyphiconValid', function () {
                                var identAttachement = $(this).closest('tr').find('#glyphiconValid').val();


                                var nomAtt = $(this).closest('tr').find('#nomAttachementTab').text();
                                var id_projet = $(this).closest('tr').find('#id_ProjectsTab').text();
                                var id_op = $(this).closest('tr').find('#idTasks').text();
                                var projectName = $(this).closest('tr').find('#projectName').text();
                                showApproveAttachmentAll(projectName,identAttachement,nomAtt,id_projet,id_op);
                                $(".fade").addClass("in");
                                 

                                                                         
                        });
                        });
    
      $(document).ready(function(){
  
                    $("#tableauxAttachement tbody tr").each(function(){
                        var montant = $(this).closest('tr').find('#montantAttach').text();
                        var approved = $(this).closest('tr').find('#attacher').text();

                        var factureEditTabApp = $(this).closest('tr').find('#factureEditTab').text();
                        var DateFactEditTabApp = $(this).closest('tr').find('#DateFactEditTab').text();
                        var AppelIdentTabApp = $(this).closest('tr').find('#AppelIdentTab').text();
                        var CroquisEditTabApp = $(this).closest('tr').find('#CroquisEditTab').text();
                        var PATEditTabApp = $(this).closest('tr').find('#PATEditTab').text();
                        var PVRepEditTabApp = $(this).closest('tr').find('#PVRepEditTab').text();
                        var RDPrevuEditTabApp = $(this).closest('tr').find('#RDPrevuEditTab').text();
                        var RPFactEditTabApp = $(this).closest('tr').find('#RPFactEditTab').text();
                        var RDFactEditTabApp = $(this).closest('tr').find('#RDFactEditTab').text();
                        var chargeSTEditTabApp = $(this).closest('tr').find('#chargeSTEditTab').text();
                        var Sous_TraitEditTabApp = $(this).closest('tr').find('#Sous_TraitEditTab').text();
                        

                              if((montant =="0")||(factureEditTabApp =="")||(DateFactEditTabApp=="")||(AppelIdentTabApp=="")||(CroquisEditTabApp=="")||(PATEditTabApp=="")||(PVRepEditTabApp=="")||(RDPrevuEditTabApp=="")||(RPFactEditTabApp=="")||(RDFactEditTabApp=="")||(chargeSTEditTabApp=="")||(Sous_TraitEditTabApp==""))
                              {
                                $(this).closest('tr').find('#glyphiconValid').attr('disabled','disabled');
                              }
                              if(montant =="0"){
                                $(this).closest('tr').find('#glyphiconPrint').attr('disabled','disabled');
                              }

                                if((approved =="Oui")||(approved =="Validé"))
                              {
                                $(this).closest('tr').find('#glyphiconValid').attr('disabled','disabled');
                                $(this).closest('tr').find('#attacher').css('background-color','#cef2d4');
                                
                              }

                              if(approved =="Non")
                              {
                                $(this).closest('tr').find('#attacher').css('background-color','#ffdcdc');
                              }





                    });

                  });






}
}mainFunctionAll();
</script>