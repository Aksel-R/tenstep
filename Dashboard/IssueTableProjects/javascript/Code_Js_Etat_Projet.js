
//Fonction qui permet f'afficher un tableau de Projet Baselines 
function LoadProjectIssues() {
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
                                  
                       


                                      if(dueDates != null)
                                            {
                                              var dueDate = moment(dueDates).format('L');
                                            }
                                            else
                                            {
                                              var dueDate = dueDates;
                                              dueDate = "";
                                            }


         
                  //tableau contient les données Baselines Mais le Tableau est en état Hide
                  var tr;
                    tr = $("<tr>");
                    tr.append("<td>" + nomProjet +"</td>");
                    tr.append("<td class='celluleIdentifiant1' id='testerrr'>" + titreRisks +"</td>");
                    tr.append("<td class='celluleIdentifiant4' id='testerrr0'>" + ownerName +"</td>");
                    tr.append("<td class='celluleIdentifiant3' id='testerrr2'>" + dueDate +"</td>");
                    tr.append("<td class='celluleIdentifiant5' id='testerrr3'>" + propriete +"</td>");
                    tr.append("<td class='celluleIdentifiant6' id='testerrr4'>" + categorie +"</td>");
                    tr.append("<td class='celluleIdentifiant7' id='testerrr5'>" + impact +"</td>");
                    tr.append("<td class='celluleIdentifiant8' id='testerrr6'>" + cout +"</td>");
                    tr.append("<td class='celluleIdentifiant9' id='testerrr7'>" + description +"</td>");
                    tr.append("<td class='celluleIdentifiant2' id='testerrr1'>" + statusRisks +"</td>");
                        $('#tableaux').append(tr);   
            });
}   
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadProjectIssues");




