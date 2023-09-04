function filtrerTableau()
  {
    var input,input1, filter1, filter, table,table1, tr,tr1, td,td1;

    input1 = document.getElementById("selectTable");
    filter1 = input1.value.toUpperCase();

    table1 = document.getElementById("tableaux");
    tr1 = table1.getElementsByTagName("tr");

    for (var j = 0; j < tr1.length; j++) {
    td1 = tr1[j].getElementsByTagName("td")[1];

    if (td1){
      if (td1.innerHTML.toUpperCase().indexOf(filter1) > -1) {
      tr1[j].style.display = "";

      } else {
      tr1[j].style.display = "none";
      }
    }       
    }

  }



//Fonction qui permet f'afficher un tableau de Projet Baselines 
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
                    ownerName = "[Blank]";
                  }  

                  if(statusRisks == null)
                  {
                    statusRisks = "[Blank]";
                  }

                  if(dueDates == null)
                  {
                    dueDates = "[Blank]";
                  }

                  if(titreRisks == null)
                  {
                    titreRisks = "[Blank]";
                  }

                  if(propriete == null)
                  {
                    propriete = "[Blank]";
                  }

                  if(categorie == null)
                  {
                    categorie = "[Blank]";
                  }

                  if(impact == null)
                  {
                    impact = "[Blank]";
                  }

                  if(cout == null)
                  {
                    cout = "[Blank]";
                  }

                  if (description == null)
                  {
                    description = "[Blank]";
                  }
                                    moment.locale('fr');
                                      if(dueDates != null)
                                            {
                                              var dueDate = moment(dueDates).format('L');
                                            }
                                            else
                                            {
                                              var dueDate = dueDates;
                                              dueDate = "[Blank]";
                                            }

                          
                      $('#selectTable').append($('<option>',
                           {
                              text : nomProjet
                            }));   

                       var opt = {};
                              $("#selectTable > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            }); 
               

                  //tableau contient les données Baselines Mais le Tableau est en état Hide
                  var tr;
                    tr = $("<tr>");
                    tr.append("<td>" + titreRisks +"</td>");
                    tr.append("<td style='display:none;'>" + nomProjet +"</td>");
                    tr.append("<td class='celluleIdentifiant2' id='testerrr1'>" + statusRisks +"</td>");
                    tr.append("<td class='celluleIdentifiant3' id='testerrr2'>" + dueDate +"</td>");
                    tr.append("<td class='celluleIdentifiant4' id='testerrr0'>" + ownerName +"</td>");
                    tr.append("<td class='celluleIdentifiant5' id='testerrr3'>" + propriete +"</td>");
                    tr.append("<td class='celluleIdentifiant6' id='testerrr4'>" + categorie +"</td>");
                    tr.append("<td class='celluleIdentifiant7' id='testerrr5'>" + impact +"</td>");
                    tr.append("<td class='celluleIdentifiant8' id='testerrr6'>" + cout+ "  DT</td>");
                    tr.append("<td style='display:none' class='celluleIdentifiant9' id='testerrr7'>" + description +"</td>");
                  $('#tableaux').append(tr);   
                  
                 /* $(document).ready(function(){
    $("#tableaux td.celluleIdentifiant4:contains('[Blank]')").css('background-color','#ccc').css('color','black');
    $("#tableaux td.celluleIdentifiant5:contains('[Blank]')").css('background-color','#ccc').css('color','black');
});*/




            });



}   
});
}                                  
  _spBodyOnLoadFunctionNames.push("LoadProjectRisks");




