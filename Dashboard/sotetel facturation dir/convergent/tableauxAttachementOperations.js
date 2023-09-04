
function getSelectedText(elementId) {
var elt = document.getElementById(elementId);
return elt.options[elt.selectedIndex].text;
}


function MainOperation()
{



            var projectName=getSelectedText('mylist2');
            var projetIdentifiant = document.getElementById('mylist2').value;

            var nomoperation = getSelectedText('mylist1');
            var identOperation = document.getElementById('mylist1').value;
            if((projetIdentifiant!="")&&(identOperation !="")){

jQuery('#loader-wrapper').fadeIn(99);
    jQuery('#loader-wrapper').fadeOut(2000);

$("#OperationAttachement").text(nomoperation);


            tableaux = document.getElementById("tableauxAttachement");
            tr11 = tableaux.getElementsByTagName("tr");
            if(tr11.length>0){
                $('#tableauxAttachement tbody').empty();
            }


  var genereAllMilestoneOperation = genereAllMilestoneOperation || [];

var loadWBSUrlMilestoneOperation = _spPageContextInfo.siteAbsoluteUrl + "/"+projectName+"/_api/web/lists/getbytitle('Liste_Attachements')/items?$filter=id_projects eq '"+projetIdentifiant+"' and idoperation eq '"+identOperation+"'&$orderby=Created desc";

function RecuperationDataTableMilestoneOperation() {

        $.ajax({
                     url: loadWBSUrlMilestoneOperation,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                             genereAllMilestoneOperation = genereAllMilestoneOperation.concat(data.d.results);
                                            if (data.d.__next) {
                                              loadWBSUrlMilestoneOperation = data.d.__next;
                                              RecuperationDataTableMilestoneOperation();
                                            }else if (!data.d.__next) {
                                            
                                            var i=1;
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



                   $.each(genereAllMilestoneOperation, function(key, value) 
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

                      LoadAllAttachementOperation(projectName,id_TasksTab,id_ProjectsTab,attachementTab,idoperationTab,identTab,identifiantAttTab,codeEditTab,dateEditTab,nbClientEditTab,clientEditTab,utilisateurEditTab,factureEditTab,DateFactEditTab,AppelIdentTab,CroquisEditTab,PATEditTab,PVRepEditTab,RDPrevuEditTab,RPFactEditTab,RDFactEditTab,chargeSTEditTab,Sous_TraitEditTab,AttacherTab,MontantAttachementTab,TVATab,beneficierTab);

                                                                                                                                                                                                                     
                                                                                                                                                                                                                        
   }                                                                                                                                                                                                                     
                                                                                                                                                                                                                        
}   
});
}                                  
RecuperationDataTableMilestoneOperation();




function LoadAllAttachementOperation(projectName,id_TasksTab,id_ProjectsTab,attachementTab,idoperationTab,identTab,identifiantAttTab,codeEditTab,dateEditTab,nbClientEditTab,clientEditTab,utilisateurEditTab,factureEditTab,DateFactEditTab,AppelIdentTab,CroquisEditTab,PATEditTab,PVRepEditTab,RDPrevuEditTab,RPFactEditTab,RDFactEditTab,chargeSTEditTab,Sous_TraitEditTab,AttacherTab,MontantAttachementTab,TVATab,beneficierTab)
{
  var tbodyRef = document.querySelector('#tableauxAttachement tbody');

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
                                $(".fade").addClass("in");
                                AfficherArticlesPOPUPAttachement(identAttachement);  

                                                                         
                        });
                        });

          $(document).ready(function() {
                          $('#tableauxAttachement  tbody tr').on('click', '#glyphiconValid', function () {
                                var identAttachement = $(this).closest('tr').find('#glyphiconValid').val();
                                var nomAtt = $(this).closest('tr').find('#nomAttachementTab').text();
                                var id_projet = $(this).closest('tr').find('#id_ProjectsTab').text();
                                var id_op = $(this).closest('tr').find('#idTasks').text();

                                showApproveAttachment(identAttachement,nomAtt,id_projet,id_op);
                                $(".fade").addClass("in");
                                 

                                                                         
                        });
                        });

                $(document).ready(function(){
  
                    $("#tableauxAttachement tbody tr").each(function(){
                        var montant = $(this).closest('tr').find('#montantAttach').text();
                        var approved = $(this).closest('tr').find('#attacher').text();
                        

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


  var tablePaginationArticleAttachmentSpecificProjectOperation = tablePaginationArticleAttachmentSpecificProjectOperation ||[]; 
   var UrlArticleLoadedAttachmentSpecificProjectOperation = _spPageContextInfo.webServerRelativeUrl + "/"+projectName+"/_api/web/lists/getbytitle('Liste_Attachements')/items?$filter=id_projects eq '"+projetIdentifiant+"' and idoperation eq '"+identOperation+"'"; 
   

  function LoadAllSumArticleAttachmentSpecificProjectOperation()
  {
    var sommePrixArticle=0;

    $.ajax({
                     url: UrlArticleLoadedAttachmentSpecificProjectOperation,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            tablePaginationArticleAttachmentSpecificProjectOperation = tablePaginationArticleAttachmentSpecificProjectOperation.concat(data.d.results);
                                            if (data.d.__next) {
                                              UrlArticleLoadedAttachmentSpecificProjectOperation = data.d.__next;
                                              LoadAllSumArticleAttachmentSpecificProjectOperation();
                                            }
                                              

                   $.each(tablePaginationArticleAttachmentSpecificProjectOperation, function(key, value) 
                    {
                      
                      var montantTotal   =  value.MontantAttachement;
                      if(montantTotal !=null)
                      {
                        var montantTotal = value.MontantAttachement;
                      sommePrixArticle =  parseInt(montantTotal)+sommePrixArticle;
                      }
                      


                    });
                     
                    //console.log("somme prix articles  " + sommePrixArticle);
                    document.getElementById('CoutAttachement').innerHTML = conToMill(sommePrixArticle);
          }   
          });

  }LoadAllSumArticleAttachmentSpecificProjectOperation();


 }
 else if ((projetIdentifiant!="")&&(identOperation =="")){
  MainMilestone();
 }





}



