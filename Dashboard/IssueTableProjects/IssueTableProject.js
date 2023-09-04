
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Demo Risks Issues</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/IssueTableProjects/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/IssueTableProjects/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->

    

    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/IssueTableProjects/css/custom1.min.css" rel="stylesheet">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/IssueTableProjects/css/TableauCSS.css" rel="stylesheet">

   

<table id="tab" border="1" class="tableauTab">
</table>


  </head>

      <div id="headercolor">
          <div>
            <small class="smallRisks">
              ETATS DES PROJETS AVEC RISQUES
            </small>
          </div>

          <select id="selectTable" name="SelectedName" class="form-item__element form-item__element--select" style="float:right; margin-right:20px;" onchange="filtrerTableau();">    
          </select>
      </div>

          

       <div class="row">

            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_content">
                    
                        <div class="card-box table-responsive">
                          <table id="tableaux" class="table table-bordered">
                            <thead>
                              <tr>
                                  <th>Nom de Projet</th>
                                  <th><img src='https://isetrades1.sharepoint.com/sites/DemoPWA/_catalogs/masterpage/Dashboard/IssueTableProjects/img/status.png' alt='' border=3 height=20 width=20></img> Statut</th>
                                  <th><img src='https://isetrades1.sharepoint.com/sites/DemoPWA/_catalogs/masterpage/Dashboard/IssueTableProjects/img/logodate.png' alt='' border=3 height=20 width=20></img> Date De Risque</th>
                                  <th><img src='https://isetrades1.sharepoint.com/sites/DemoPWA/_catalogs/masterpage/Dashboard/IssueTableProjects/img/logoperson.png' alt='' border=3 height=20 width=20></img> Affectée</th>
                                  <th><img src='https://isetrades1.sharepoint.com/sites/DemoPWA/_catalogs/masterpage/Dashboard/IssueTableProjects/img/41J0uBGSfjL.png' alt='' border=3 height=20 width=20></img> Propriétaire</th>
                                  <th>Catégorie</th>
                                  <th>Impact</th> 
                                  <th><img src='https://isetrades1.sharepoint.com/sites/DemoPWA/_catalogs/masterpage/Dashboard/Project_Status_True_version/logo/money.png' alt='' border=3 height=20 width=20></img>  Côut</th>
                                  <th>Description</th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                  </div>
                </div>
              </div>


             
     
  </div>

        

        <!-- /page content -->

        <!-- footer content -->
             
        <!-- /footer content -->





    <!-- jQuery -->


    
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/IssueTableProjects/javascript/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/IssueTableProjects/javascript/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/IssueTableProjects/javascript/fastclick.js"></script>
    <!-- NProgress -->
    <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/IssueTableProjects/javascript/nprogress.js"></script>
    <!-- iCheck -->

   



    <script type="text/javascript" src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/IssueTableProjects/javascript/moment-with-locales.js"></script>



<script type="text/javascript">

var ProjectUID;

ExecuteOrDelayUntilScriptLoaded(getProjectUIDProperty, "sp.js"); 
 function getProjectUIDProperty() { 
                var ctx = new SP.ClientContext.get_current(); 
                this.web = ctx.get_web(); 
                this.props =  this.web.get_allProperties(); 
                ctx.load(this.web); 
                ctx.load(this.props);                    
                ctx.executeQueryAsync(Function.createDelegate(this, gotProperty), Function.createDelegate(this, failedGettingProperty)); 
            }             
function gotProperty() {                
                 ProjectUID = this.props.get_item('MSPWAPROJUID');
         LoadProject();
            }             
function failedGettingProperty() { 
                alert('Error: ' + args.get_message());
            } 





//Affichage de tout les projets sur une liste select

function LoadProject() {
               var data =  $.ajax({ url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+ProjectUID+"')",
                                                                                                   
                type: "GET",
                dataType: "json",
                headers: {
                  "Accept": "application/json; odata=verbose"}});

                  var listItemInfo  = "";
                  var listItemInfo1 = "";
                
                data.done(function (data,textStatus, jqXHR){

                    if (data.d.results == undefined) {  
                        data.d.results = new Array();
                        data.d.results[0] = new Object();
                        data.d.results[0] = data.d.ProjectId;
                        data.d.results[0] = data.d.ProjectName;
                      
                        var pr = data.d.ProjectId;
                        var nom = data.d.ProjectName;
                        listItemInfo = pr;


                       
                      $('#selectTable').append($('<option>',
                           {
                              text : nom,
                              value : pr
                            }));   

                       var opt = {};
                              $("#selectTable > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            });                                          
              } 
        });
    }
_spBodyOnLoadFunctionNames.push("LoadProject");





//Fonction qui permet d'afficher un tableau de Projet des Risks 
function LoadProjectRisks() {
            $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo = ""; 

            $.each(dataResults, function(key, value) 
            {           
                var projetId = value.ProjectId;    
                var nomProjet = value.ProjectName;  
                  if(projetId !=null)
                  {
                    var prjid = projetId;
                  }

                  var idRisque = value.RiskId; 
                  var ownerName = value.Owner;
                  var statusRisks = value.Status;
                  var dueDates = value.DueDate;
                  var titreRisks = value.Title;

                  var propriete = value.AssignedToResource;
                  var categorie = value.Category;
                  var impact = value.Impact;
                  var cout = value.Cost;
                  var description = value.Description;
                                  
                       
                  if(ownerName == null)
                  {
                    ownerName = "";
                  }  

                  if(statusRisks == null)
                  {
                    statusRisks = "";
                  }

                  if(dueDates == null)
                  {
                    dueDates = "";
                  }

                  if(titreRisks == null)
                  {
                    titreRisks = "";
                  }

                  if(propriete == null)
                  {
                    propriete = "";
                  }

                  if(categorie == null)
                  {
                    categorie = "";
                  }

                  if(impact == null)
                  {
                    impact = "";
                  }

                  if(cout == null)
                  {
                    cout = "";
                  }

                  if (description == null)
                  {
                    description = "";
                  }
                                    moment.locale('fr');
                                      if(dueDates != null)
                                            {
                                              var dueDate = moment(dueDates).format('L');
                                            }
                                            else
                                            {
                                              var dueDate = dueDates;
                                              dueDate = "";
                                            }

                  var elementSelected = $('#selectTable').val();
               
                  if(elementSelected == prjid)
                  {
                  //tableau contient les données Baselines Mais le Tableau est en état Hide
                  var tr;
                    tr = $("<tr>");
                    tr.append("<td>" + nomProjet +"</td>");
                    tr.append("<td class='celluleIdentifiant2' id='testerrr1'>" + statusRisks +"</td>");
                    tr.append("<td class='celluleIdentifiant3' id='testerrr2'>" + dueDate +"</td>");
                    tr.append("<td class='celluleIdentifiant4' id='testerrr0'>" + ownerName +"</td>");
                    tr.append("<td class='celluleIdentifiant5' id='testerrr3'>" + propriete +"</td>");
                    tr.append("<td class='celluleIdentifiant6' id='testerrr4'>" + categorie +"</td>");
                    tr.append("<td class='celluleIdentifiant7' id='testerrr5'>" + impact +"</td>");
                    tr.append("<td class='celluleIdentifiant8' id='testerrr6'>" + cout +"</td>");
                    tr.append("<td class='celluleIdentifiant9' id='testerrr7'>" + description +"</td>");
                  $('#tableaux').append(tr);   
                }
            });
}   
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadProjectRisks");




function filtrerTableau()
  {
    var input,input1, filter1, filter, table,table1, tr,tr1, td,td1;

    input1 = document.getElementById("selectTable");
    filter1 = input1.value.toUpperCase();

    table1 = document.getElementById("tableaux");
    tr1 = table1.getElementsByTagName("tr");

    for (var j = 0; j < tr1.length; j++) {
    td1 = tr1[j].getElementsByTagName("td")[0];

    if (td1){
      if (td1.innerHTML.toUpperCase().indexOf(filter1) > -1) {
      tr1[j].style.display = "";

      } else {
      tr1[j].style.display = "none";
      }
    }       
    }

  }

</script>