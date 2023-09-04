jQuery(document).ready(function() {
    jQuery('#loader-wrapper').fadeOut(5000);
     
});


$('#tableauxAttachement').on('scroll', function () {
      
        $("#"+this.id+" > *").width($(this).width() + $(this).scrollLeft());
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
                                              
                                else if(!data.d.__next){
                                if(tablePaginationArticleAttachment.length>0)                     
                                { 
                   $.each(tablePaginationArticleAttachment, function(key, value) 
                    {
                      
                      var montantTotal   =   parseFloat(value.montantTotal).toFixed(3);

                      sommePrixArticle= parseInt(montantTotal) + sommePrixArticle;                   

                    });
                    document.getElementById('montantglob').innerHTML = conToMill(sommePrixArticle);

            }      
            else {

                   document.getElementById('montantglob').innerHTML = sommePrixArticle;
            }
          }  
      } 
          });


}LoadAllSumArticleAttachment();


function PriceOperation(identifCmd)
{
  var tablePaginationArticleAttachmentSpecific = tablePaginationArticleAttachmentSpecific ||[]; 
   var UrlArticleLoadedAttachmentSpecific = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_Article_Attachement')/items?$select=montantTotal&$filter=id_operation eq '"+identifCmd+"'"; 
   

  function LoadAllSumArticleAttachmentSpecific()
  {
    var sommePrixArticle=0;

    $.ajax({
                     url: UrlArticleLoadedAttachmentSpecific,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            tablePaginationArticleAttachmentSpecific = tablePaginationArticleAttachmentSpecific.concat(data.d.results);
                                            if (data.d.__next) {
                                              UrlArticleLoadedAttachmentSpecific = data.d.__next;
                                              LoadAllSumArticleAttachmentSpecific();
                                            }
                                              
                                     else if(!data.d.__next){
                                if(tablePaginationArticleAttachmentSpecific.length>0)                     
                                {        
                   $.each(tablePaginationArticleAttachmentSpecific, function(key, value) 
                    {
                      
                      var montantTotal   =  value.montantTotal;

                      sommePrixArticle= parseInt(montantTotal) + sommePrixArticle;


                    });
                     
                    //console.log("somme prix articles  " + sommePrixArticle);
                    document.getElementById('CoutAttachement').innerHTML = conToMill(sommePrixArticle);
          }   else{
                    document.getElementById('CoutAttachement').innerHTML = sommePrixArticle;
          }
      }
  }
          });

  }LoadAllSumArticleAttachmentSpecific();
}


    var ProjectUID;
    var ProjectNAME;
    ExecuteOrDelayUntilScriptLoaded(getProjectUIDProperty, "sp.js");

    function getProjectUIDProperty() {
        var ctx = new SP.ClientContext.get_current();
        this.web = ctx.get_web();
        this.props = this.web.get_allProperties();
        ctx.load(this.web);
        ctx.load(this.props);
        ctx.executeQueryAsync(Function.createDelegate(this, LoadDataProject));
    }



    ExecuteOrDelayUntilScriptLoaded(getProjectUIDPropertyOperation, "sp.js");

    function getProjectUIDPropertyOperation() {
        var ctx = new SP.ClientContext.get_current();
        this.web = ctx.get_web();
        this.props = this.web.get_allProperties();
        ctx.load(this.web);
        ctx.load(this.props);
        ctx.executeQueryAsync(Function.createDelegate(this, MainFunctionOperation));


    }





function MainFunctionOperation(ProjectUID){
    var ProjectUID = this.props.get_item('MSPWAPROJUID');
RecuperationDataTable();
var genereAllOperation = genereAllOperation || [];
var loadWBSUrl = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+ProjectUID+"')/Tasks?$select=ProjectId,Exécuteur,TaskId,TaskName,ParentTaskName,ParentTaskId,TaskStartDate,TaskFinishDate,TaskCost,DateprévuréceptionProv&$filter=Facturation%20eq%20%27A Facturer%27";

function RecuperationDataTable() {

        $.ajax({
                     url: loadWBSUrl,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            genereAllOperation = genereAllOperation.concat(data.d.results);
                                            if (data.d.__next) {
                                              loadWBSUrl = data.d.__next;
                                              RecuperationDataTable();
                                            }


                                            else if(!data.d.__next){
                                
                                            var identifiantTasksTab=[];
                                            var taskIdTab=[];
                                            var operationTab=[];
                                            var TaskStartDateTab=[];
                                            var TaskFinishDateTab=[];
                                            var prixunitTab=[];
                                            var dateprixTab=[];
                                            var OperationAttachementTab=[];
                                            var ProjectAttachementTab=[];
                                            var executeurTab=[];
                                            var ProjectIdTab=[];
                                      if(genereAllOperation.length>0)                     
                                {        
                   $.each(genereAllOperation, function(key, value) 
                    {
                        moment.locale('fr'); 
                              var identifiantTasks = value.ParentTaskId;
                              var taskId = value.TaskId;
                              var operation = value.TaskName;
                              var ProjectId = value.ProjectId;

                              
                              
                              var TaskStartDate = moment(value.TaskStartDate).format('L');
                              var TaskFinishDate = moment(value.TaskFinishDate).format('L');
                              var prixunit = parseFloat(value.TaskCost).toFixed('3');
                              var dateprix = value.DateprévuréceptionProv;

                              if(dateprix ==null)
                              {
                                dateprix="";
                              }else{
                                  dateprix = moment(value.DateprévuréceptionProv).format('L');
                              }

                              var OperationAttachement = value.TaskName;
                              var ProjectAttachement = value.ParentTaskName;
                              var executeur = value.Exécuteur;
                              if(executeur == null)
                              {
                                executeur = "";
                              }

                              
                                identifiantTasksTab.push(identifiantTasks);
                                taskIdTab.push(taskId);
                                operationTab.push(operation);
                                TaskStartDateTab.push(TaskStartDate);
                                TaskFinishDateTab.push(TaskFinishDate);
                                prixunitTab.push(prixunit);
                                dateprixTab.push(dateprix);
                                OperationAttachementTab.push(OperationAttachement);
                                ProjectAttachementTab.push(ProjectAttachement);
                                executeurTab.push(executeur);
                                ProjectIdTab.push(ProjectId);
                            


            }); 
                
                              AddAllForTabeOperationSchedule(ProjectIdTab,identifiantTasksTab,taskIdTab,operationTab,TaskStartDateTab,TaskFinishDateTab,prixunitTab,dateprixTab,OperationAttachementTab,ProjectAttachementTab,executeurTab);
                              //compareTables();


}   
}
}
});
}                                  
RecuperationDataTable();

}
//MainFunctionOperation();


function AddAllForTabeOperationSchedule(ProjectIdTab,identifiantTasksTab,taskIdTab,operationTab,TaskStartDateTab,TaskFinishDateTab,prixunitTab,dateprixTab,OperationAttachementTab,ProjectAttachementTab,executeurTab)
{

  for(var i=0;i<taskIdTab.length;i++)
  {

    var tbodyRef = document.querySelector('#tableauxOperation tbody');
                var tr;  
                  tr = $("<tr class='rowOperation'/>");
                    tr.append("<td>"+(tbodyRef.rows.length+ 1) +"</td>");
                    tr.append("<td class='operation'>" + operationTab[i] + "</td>");
                    tr.append("<td class='TaskStartDate'>" + TaskStartDateTab[i] + "</td>");       
                    tr.append("<td class='TaskFinishDate'>" + TaskFinishDateTab[i] + "</td>");
                    //tr.append("<td class='prixunit'></td>"); 
                    tr.append("<td class='dateprix'>" + dateprixTab[i] + "</td>");
                    tr.append("<td class='executeur'>" +executeurTab[i]+ "</td>"); 
                    tr.append("<td class='projetAtt' style='display:none;'>"+ProjectAttachementTab[i]+"</td>"); 
                    tr.append("<td class='coutAtt' style='display:none;'>"+prixunitTab[i]+"</td>");
                    tr.append("<td class='taskId' style='display:none;'>"+taskIdTab[i]+"</td>");
                    tr.append("<td class='projectId' style='display:none;'>"+ProjectIdTab[i]+"</td>");
                    tr.append("<td><button id='EnregistrerOperation' style='background: url(klematis.jpg) repeat;' value='"+taskIdTab[i]+"' onclick='return false;'><span style='font-size: small;' class='glyphicon glyphicon-ok'></span></button></td>");        
                   $('#tableauxOperation').append(tr); 
  }





                    $(document).ready(function() {
                            $('#tableauxOperation').on('click', '#EnregistrerOperation', function () {
                                var taskId = $(this).closest('tr').find('#EnregistrerOperation').val();

                                var projectId = $(this).closest('tr').find('.projectId').text();
                                
                                var operation = $(this).closest('tr').find('.operation').text();
                            
                                var TaskStartDate = $(this).closest('tr').find('.TaskStartDate').text();

                                var TaskFinishDate = $(this).closest('tr').find('.TaskFinishDate').text();

                                var dateprix = $(this).closest('tr').find('.dateprix').text();

                                var ProjectAttachement = $(this).closest('tr').find('.projetAtt').text();

                                var coutAtt = $(this).closest('tr').find('.coutAtt').text();

                                var executeur = $(this).closest('tr').find('.executeur').text();

                                var montant  = 0;

                                if(operation !="")
                                {
                                    var nomprojet = document.getElementById('nompr').innerHTML;
                                    
                                    //AddNewOperation(operation,taskId,TaskStartDate,TaskFinishDate,dateprix,ProjectAttachement,coutAtt,montant);
                                    insertOneRow(nomprojet,operation,taskId,TaskStartDate,TaskFinishDate,dateprix,executeur,projectId);
                                    $(this).closest('tr').remove();
                                    //$("#EnregistrerOperation").removeAttr('disabled');
                                    $(this).closest('tr').find('#EnregistrerOperation').attr('disabled','disabled');

                                    setTimeout(function(){
                                      location.reload();
                                     },3000);

                                }

                            });
                    }); 


                        $(document).ready(function() {
                          $("#tableauxOperation tbody tr").each(function(){
                                          var dateprix = $(this).closest('tr').find('.dateprix').text();
                                                if(dateprix =="")
                                                {
                                                  $(this).closest('tr').find('#EnregistrerOperation').attr('disabled','disabled');
                                                  $(this).closest('tr').find('.dateprix').css('background-color','#f2b097');
                                                  $(this).closest('tr').find('.dateprix').text('Vous devez remplir le champs de votre échéancier');
                                                }
                                                var executeur = $(this).closest('tr').find('.executeur').text();
                                                if(executeur=="")
                                                {
                                                    $(this).closest('tr').find('#EnregistrerOperation').attr('disabled','disabled');
                                                    $(this).closest('tr').find('.executeur').css('background-color','#f2b097');
                                                    $(this).closest('tr').find('.executeur').text('Vous devez remplir le champs de votre échéancier');
                                                }
                                            
                                                              
                                          });
                        });
}




function onQuerySucceeded() {
    //console.log('Item created: ' + oListItem.get_id());
}

function onQueryFailed(sender, args) {
    //console.log('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}


// compare two html table


function compareTables(){
$(function(){

        $('#tableauxOperationTraitement tbody tr').each(function(){
        var row = $(this);
        var left_cols = $(this).find("td:eq(13)");
        
        $('#tableauxOperation tbody tr').each(function(){
            var right_cols = $(this).find("td:eq(8)");
            if(left_cols.text() == right_cols.text()) {
                $(this).closest('tr').find('#EnregistrerOperation').attr('disabled','disabled');
                $(this).closest('tr').remove();

             }
         });
      });
   });

}
setTimeout(compareTables,5000);




function insertOneRow(nomprojet,operation,taskId,TaskStartDate,TaskFinishDate,dateprix,executeur,projectId)
{
  

  
  var nomprojets=nomprojet;
  var TaskStartDates=TaskStartDate;
  var TaskFinishDates=TaskFinishDate;
  var operations=operation;
  var dateprixs=dateprix;
  var taskIds=taskId;
  var executeurs = executeur;

    var clientContext = new SP.ClientContext(_spPageContextInfo.webAbsoluteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Listes_donnees_operations');
        
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);
      
        oListItem.set_item('nomprojet',nomprojets);  
        oListItem.set_item('TaskStartDate',TaskStartDates);
        oListItem.set_item('TaskFinishDate',TaskFinishDates);
        oListItem.set_item('operation',operations);
        oListItem.set_item('prixdate',dateprixs);
        oListItem.set_item('taskId',taskIds);
        oListItem.set_item('Executeur',executeurs);
        oListItem.set_item('id_projets',projectId);

  

   oListItem.update();

    clientContext.load(oListItem);
        
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));

}


function MainMontantOperation(idoperationsave)
{

var genereAllMontantAttachementForOperation = genereAllMontantAttachementForOperation || [];
var loadWBSUrlMontantAttachementForOperation = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_Attachements')/items?$filter=idoperation eq '"+idoperationsave+"' and MontantAttachement ne null";

function RecuperationMontantAttachementForOperation() {


        $.ajax({
                     url: loadWBSUrlMontantAttachementForOperation,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            genereAllMontantAttachementForOperation = genereAllMontantAttachementForOperation.concat(data.d.results);
                                            if (data.d.__next) {
                                              loadWBSUrlMontantAttachementForOperation = data.d.__next;
                                              RecuperationMontantAttachementForOperation();
                                            }
                                   
                                    else if(!data.d.__next){
                                        var idoperation;
                                        var sommePrixArticle=0;
                                        var MontantAttachement;
                                    if(genereAllMontantAttachementForOperation.length>0)                     
                                                                    { 
                   $.each(genereAllMontantAttachementForOperation, function(key, value) 
                    {
                        
                         idoperation = value.idoperation;
                         var idAttachement = value.TVA;

                         //console.log("idAttachement TVA " + idAttachement);
                        MontantAttachement = parseFloat(value.MontantAttachement).toFixed(3);
                          console.log("MontantAttachement " + MontantAttachement);

                        sommePrixArticle= parseInt(MontantAttachement) + sommePrixArticle;
                        
                    });

                   updatePrixOperation(sommePrixArticle,idoperation);

               }
           }
       }
           });
    }
setTimeout(RecuperationMontantAttachementForOperation,2000);

}




//ExecuteOrDelayUntilScriptLoaded(updatePrixOperation,"SP.js");

function updatePrixOperation(sommePrixArticle,idoperation)
{
    console.log("sommePrixArticle " + sommePrixArticle);
    console.log("idoperation " + idoperation);

var id  = idoperation;


    var clientContext = new SP.ClientContext(_spPageContextInfo.webAbsoluteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Listes_donnees_operations');
    this.oListItem = oList.getItemById(idoperation);


   oListItem.set_item('MontantOperation',sommePrixArticle);

   oListItem.update();

    clientContext.load(oListItem);
        
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededUpdate), Function.createDelegate(this, this.onQueryFailedUpdate));


}


function onQuerySucceededUpdate() {

    //console.log('Data mis à jour');
}

function onQueryFailedUpdate(sender, args) {

    alert('Erreur merci de contacter votre administrateur. ' + args.get_message() + '\n' + args.get_stackTrace());
}



var genereAllOperationCreated = genereAllOperationCreated || [];
var loadWBSUrlOperationCreated = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Listes_donnees_operations')/items";

function LoadAllOperationCreated()
{


        $.ajax({
                     url: loadWBSUrlOperationCreated,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            genereAllOperationCreated = genereAllOperationCreated.concat(data.d.results);
                                            if (data.d.__next) {
                                              loadWBSUrlOperationCreated = data.d.__next;
                                              LoadAllOperationCreated();
                                            }
                                            else if(!data.d.__next){
                                            
                     var idTasksTab =[];
                     var idStartDate = [];
                     var idFinishDate = []
                     var idOperationTab=[];
                     var idPrixDate=[];
                     var idParentTaskName = [];
                     var idMontantTab = [];
                     var identifiantOperationTab=[];
                     var executeurTab=[];
                     var id_projetsTab = [];

                                    if(genereAllOperationCreated.length>0)                     
                                                                    { 

                   $.each(genereAllOperationCreated, function(key, value) 
                    {
                        moment.locale('fr'); 

                        var identifiantOperation = value.Id;
                        var TaskStartDate = moment(value.TaskStartDate).format('DD-MM-YYYY');                       
                        var TaskFinishDate = moment(value.TaskFinishDate).format('DD-MM-YYYY');
                        var operation=value.operation;
                        var taskId=value.taskId;
                        var prixdate= moment(value.prixdate).format('DD-MM-YYYY');
                        var ParentTaskName = value.nomprojet;
                        var montant = value.MontantOperation;
                        var executeur = value.Executeur;
                        var id_projets = value.id_projets;
                        if(executeur ==null)
                        {
                          executeur = "";
                        }
                        if(montant ==null)
                        {
                          montant = 0;
                        }

                        if(idTasksTab.indexOf(taskId) ==-1)
                        {


                        idTasksTab.push(taskId);
                        idStartDate.push(TaskStartDate);
                        idFinishDate.push(TaskFinishDate);
                        idOperationTab.push(operation);
                        idPrixDate.push(prixdate);
                        idParentTaskName.push(ParentTaskName);
                        idMontantTab.push(montant);
                        identifiantOperationTab.push(identifiantOperation);
                        executeurTab.push(executeur);
                        id_projetsTab.push(id_projets);
                    }



               

                  
                
                    });
                        getAllFromListOperation(idTasksTab,idStartDate,idFinishDate,idOperationTab,idPrixDate,idParentTaskName,idMontantTab,identifiantOperationTab,executeurTab,id_projetsTab);

  
} 
}
}  
});
}LoadAllOperationCreated();


function getAllFromListOperation(idTasksTab,idStartDate,idFinishDate,idOperationTab,idPrixDate,idParentTaskName,idMontantTab,identifiantOperationTab,executeurTab,id_projetsTab)
{

    for(var i=0;i<idTasksTab.length;i++)
    {

        var tbodyRef = document.querySelector('#tableauxOperationTraitement tbody');

                var tr;  
                      tr = $("<tr class='rowOperationTraitement'/>");
                      
                        tr.append("<td><button id='glyphicon1' style='background: url(klematis.jpg) repeat;' value='"+identifiantOperationTab[i]+"' onclick='return false;'><span style='font-size: small;' class='glyphicon1 glyphicon-edit' ></span></button></td>");
                        tr.append("<td><button id='glyphicon4' style='background: url(klematis.jpg) repeat;' value='"+identifiantOperationTab[i]+"' onclick='return false;'><span  style='font-size: small;' class='glyphicon4 glyphicon-forward'></span></button></td>"); 
                        tr.append("<td>"+(tbodyRef.rows.length+ 1) +"</td>");
                        tr.append("<td class='operation'>" + idOperationTab[i] + "</td>");
                        tr.append("<td class='TaskStartDate'>" + idStartDate[i] + "</td>");       
                        tr.append("<td class='TaskFinishDate'>" + idFinishDate[i] + "</td>");
                        tr.append("<td class='prixunit'>"+conToMill(idMontantTab[i])+"</td>"); 
                        tr.append("<td class='dateprix'>" + idPrixDate[i] + "</td>");
                        tr.append("<td class='executeur'>"+executeurTab[i]+"</td>"); 
                        tr.append("<td class='projetAtt' style='display:none;'>"+idParentTaskName[i]+"</td>"); 
                        tr.append("<td class='coutAtt' style='display:none;'></td>");
                        tr.append("<td style='display:none;'>"+idTasksTab[i]+"</td>");
                        tr.append("<td  id='identifiantOperationTab' style='display:none;'>"+identifiantOperationTab[i]+"</td>");
                        tr.append("<td id='loadRs' style='display:none;'>"+idTasksTab[i]+"</td>");
                        tr.append("<td id='loadIdent' style='display:none;'>"+id_projetsTab[i]+"</td>");

                        tr.append("<td><button id='glyphiconConsultPrintAll'  style='background: url(klematis.jpg) repeat;' onclick='return false;'><span style='font-size: small;' class='glyphicon glyphicon-print'></span></button></td>");
                      $('#tableauxOperationTraitement').append(tr);          
            

    }

                                $(document).ready(function() {
                                    $('#tableauxOperationTraitement').on('click', '#glyphicon1', function () {

                                        var operation=$(this).closest('tr').find('.operation').text();
                                        var projetAtt=$(this).closest('tr').find('.projetAtt').text();
                                        var idtache=$(this).closest('tr').find('#glyphicon1').val();


                                        var id_tasks = $(this).closest('tr').find('#loadRs').text();
                                        var id_projets = $(this).closest('tr').find('#loadIdent').text();

                                        jQuery('#loader-wrapper').fadeIn(100);
                                        jQuery('#loader-wrapper').fadeOut(3000);

                                        $('#OperationAttachement').text(operation);
                                        $('#ProjectAttachement').text(projetAtt);
                                        $("#EnregistrerNouveauAttachement").val(idtache);

                                        $("#id_Tasks").text(id_tasks);
                                        $("#id_Projects").text(id_projets);

                                    });
                                });


                                $(document).ready(function() {
                                    $('#tableauxOperationTraitement tbody tr').on('click', '#glyphiconConsultPrintAll', function () {
                                        var IdOperationNouveau=$(this).closest('tr').find('#identifiantOperationTab').text();
                                        $('div#entete2').hide();
                                        $("#beforePrint").hide();
                                        showAllAttachment(IdOperationNouveau);

                                       
                                      });
                                });



                  $(document).ready(function(){
  
                    $("#tableauxOperationTraitement tbody tr").each(function(){
                        var montant = $(this).closest('tr').find('.prixunit').text();
                          
                            
                              if(montant =="0")
                              {
                                $(this).closest('tr').find('#glyphicon4').attr('disabled','disabled');
                                $(this).closest('tr').find('#glyphiconConsultPrintAll').attr('disabled','disabled');

                              }



                    });

                  });



}


$(document).ready(function(){
  
                    $("#tableauxOperationTraitement tr").each(function(){
                       
                            
                            var rowCount = $('#tableauxOperationTraitement tr').length;
                            
                            
                             if(rowCount == 1){
                                        $(document).ready(function() {
                                        setTimeout(function() {
                                            $("#myModal2").modal();
                                            },6000);
                                        });
                                      } 



                    });

                  });
 


$(document).ready(function() {
                        $('#tableauxOperationTraitement').on('click', '#glyphicon4', function () {

                            var operation=$(this).closest('tr').find('.operation').text();
                            var projetAtt=$(this).closest('tr').find('.projetAtt').text();
                            var idOperation = $(this).closest('tr').find('#glyphicon4').val();
                            var prixunit= $(this).closest('tr').find('.prixunit').text();

                            


                            $("#nomprojetImpress").text(projetAtt);
                            $("#operationImpress").text(operation);
                            $("#montantGlobImpress").text(prixunit);
                            
                            MainCheckBox(idOperation);



                            $('div#entete4').show(); 
                            $('div#entete2').hide();  
                          });
                        });

//-------------------------------Load All checkbox for attachement-------------------------------

$('#EnregistrerTraitement').hide();

function MainCheckBox(idOperation)
{

  var genereAllMilestoneCheckBox = genereAllMilestoneCheckBox || [];
  var loadWBSUrlMilestoneCheckBox = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_Attachements')/items?$filter=idoperation eq '"+idOperation+"' and Attacher eq 'Validé' and MontantAttachement ne null";

function RecuperationDataTableCheckBox() {

        $.ajax({
                   url: loadWBSUrlMilestoneCheckBox,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            genereAllMilestoneCheckBox = genereAllMilestoneCheckBox.concat(data.d.results);
                                            if (data.d.__next) {
                                              loadWBSUrlMilestoneCheckBox = data.d.__next;
                                              RecuperationDataTableCheckBox();
                                            }
                        
                        else if(!data.d.__next){


                                    var nomAttachementAllCheckBoxTab=[];    
                                    var nomAttachementCheck;
                                    var attacherTab=[];
                                    var id_attachementTab=[];
                                    var idoperationTab=[];
                                    var appelIdentTab = [];
                                    var RPFactEditTab = [];
                                    var codeAttachementTab = [];
                                    var clientEditTab = [];
                                    var MontantAttachementTab = [];
                                    var MontantAttachementTVATab = [];
                                    var MontantAttachementTTCTab = [];
                                    var TVAAttachementTab=[];

if(genereAllMilestoneCheckBox.length>0)                     
                                { 
                   $.each(genereAllMilestoneCheckBox, function(key, value) 
                    {
                        var nomAttachements = value.nomAttachement;
                        nomAttachementCheck=nomAttachements;
                        var attacher = value.Attacher;
                        var id_attachements = value.Id;
                        var idoperation = value.idoperation;
                        var AppelIdent = value.AppelIdent;
                        var RPFactEdit = value.RPFactEdit;
                        var codeAtt = value.Id;
                        var clientEdit = value.clientEdit;
                        var MontantAttachementAFacturer = parseFloat(value.MontantAttachement).toFixed(3);
                        var TVAAttachementSave = value.TVA;
                        var MontantTVAAttachement = parseFloat(value.MontantTVAAttachement).toFixed(3);
                        var MontantTTCAttachement = parseFloat(value.MontantTTCAttachement).toFixed(3);

                        nomAttachementAllCheckBoxTab.push(nomAttachementCheck);
                        attacherTab.push(attacher);
                        idoperationTab.push(idoperation);
                        id_attachementTab.push(id_attachements);
                        appelIdentTab.push(AppelIdent);
                        RPFactEditTab.push(RPFactEdit);
                        codeAttachementTab.push(codeAtt);
                        clientEditTab.push(clientEdit);
                        MontantAttachementTab.push(MontantAttachementAFacturer);
                        MontantAttachementTVATab.push(MontantTVAAttachement);
                        MontantAttachementTTCTab.push(MontantTTCAttachement);
                        TVAAttachementTab.push(TVAAttachementSave);

                    });

                   LoadAllCheckBox(nomAttachementAllCheckBoxTab,attacherTab,id_attachementTab,idoperationTab,appelIdentTab,RPFactEditTab,codeAttachementTab,clientEditTab,MontantAttachementTab,MontantAttachementTVATab,MontantAttachementTTCTab,TVAAttachementTab);


               } else
               {
                setTimeout(function() {
                                                                            $("#modales").modal();
                                                                            },2000);
               }
           }
           }
           });
    }

    RecuperationDataTableCheckBox();


    var genereAllMilestoneCheckBoxOui = genereAllMilestoneCheckBoxOui || [];
var loadWBSUrlMilestoneCheckBoxOui = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_Attachements')/items?$filter=idoperation eq '"+idOperation+"' and Attacher eq 'Oui'";

function RecuperationDataTableCheckBoxOui() {

        $.ajax({
                     url: loadWBSUrlMilestoneCheckBoxOui,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            genereAllMilestoneCheckBoxOui = genereAllMilestoneCheckBoxOui.concat(data.d.results);
                                            if (data.d.__next) {
                                              loadWBSUrlMilestoneCheckBoxOui = data.d.__next;
                                              RecuperationDataTableCheckBoxOui();
                                            }
else if(!data.d.__next){
 
                                    var nomAttachementAllCheckBoxTab=[];    
                                    var nomAttachementCheck;
                                    var attacherTab=[];
                                    var id_attachementTab=[];
                                    var idoperationTab=[];
                                 
                       if(genereAllMilestoneCheckBoxOui.length>0)                     
                                {             

                   $.each(genereAllMilestoneCheckBoxOui, function(key, value) 
                    {
                        var nomAttachements = value.nomAttachement;
                        nomAttachementCheck=nomAttachements;
                        var attacher = value.Attacher;
                        var id_attachement = value.Id;
                        var idoperation = value.idoperation;
                        //var id_attachement = value.id_attachement;
                        


                        nomAttachementAllCheckBoxTab.push(nomAttachementCheck);
                        attacherTab.push(attacher);
                        idoperationTab.push(idoperation);
                        id_attachementTab.push(id_attachement);
                    });

                   LoadAllCheckBoxOui(nomAttachementAllCheckBoxTab,attacherTab,id_attachementTab,idoperationTab);


               }

           }
               }
           });
    }

    RecuperationDataTableCheckBoxOui();

}

function LoadAllCheckBoxOui(nomAttachementAllCheckBoxTab,attacherTab,id_attachementTab,idoperationTab)
{
    for(var i=0; i<nomAttachementAllCheckBoxTab.length;i++)
    {

                    var tr;  

                  tr = $("<tr class='rowTableauxArticlesCheckboxOui'/>");
                  
                        tr.append("<td><input type='checkbox' class='form-check-input' checked disabled id='customCheck1'></td>");
                        tr.append("<td id='checkboxItemAtt' style='display:none;'>"+nomAttachementAllCheckBoxTab[i]+"</td>"); 
                        tr.append("<td id='codeAttachementTab' >"+id_attachementTab[i]+"</td>"); 
               
                  $('#checkboxTableOui').append(tr); 

    }

              
}


function LoadAllCheckBox(nomAttachementAllCheckBoxTab,attacherTab,id_attachementTab,idoperationTab,appelIdentTab,RPFactEditTab,codeAttachementTab,clientEditTab,MontantAttachementTab,MontantAttachementTVATab,MontantAttachementTTCTab,TVAAttachementTab)
{
    for(var i=0; i<nomAttachementAllCheckBoxTab.length;i++)
    {

                    var tr;  
                  tr = $("<tr class='rowTableauxArticlesCheckbox'/>");
                  
                        tr.append("<td><input type='checkbox' class='form-check-input' id='customCheck2'/></td>");
                        tr.append("<td  id='checkboxItemAtt' style='display:none;'>"+nomAttachementAllCheckBoxTab[i]+"</td>"); 
                        tr.append("<td  id='codeAttachementTab' >"+codeAttachementTab[i]+"</td>"); 
                        tr.append("<td  id='idAttachementCheck' style='display:none;'>"+id_attachementTab[i]+"</td>");
                        tr.append("<td  id='checkboxItemOuiAtt' style='display:none;'>"+attacherTab[i]+"</td>");  
                        tr.append("<td  id='idoperationTab' style='display:none;'>"+idoperationTab[i]+"</td>");
                        tr.append("<td  id='appelIdentTab' style='display:none;'>"+appelIdentTab[i]+"</td>");
                        tr.append("<td  id='RPFactEditTab' style='display:none;'>"+RPFactEditTab[i]+"</td>");
                        tr.append("<td  id='clientEditTab' style='display:none;'>"+clientEditTab[i]+"</td>");
                        tr.append("<td  id='MontantAttachementTab' style='display:none;'>"+MontantAttachementTab[i]+"</td>");
                        tr.append("<td  id='TVAAttachementTab' style='display:none;'>"+TVAAttachementTab[i]+"</td>");
                        tr.append("<td  id='MontantAttachementTVATab' style='display:none;'>"+MontantAttachementTVATab[i]+"</td>");
                        tr.append("<td  id='MontantAttachementTTCTab' style='display:none;'>"+MontantAttachementTTCTab[i]+"</td>");
                        //tr.append("<td><button type='submit' id='validateCheckBox' style='background: url(klematis.jpg) repeat; border: none;' disabled onclick='return false;'><span class='glyphicon glyphicon-check'></span></button></td>");  
                  $('#checkboxTable tbody').append(tr); 



                 /* if(attacherTab[i] =="Oui")
                        {
                          $(this).closest('tr').find('#customCheck2').attr('disabled','disabled');
                        } */
    }
/*
  $(document).ready(function() {
                                                                        var tableauxLength = document.getElementById("checkboxTable");
                                                                    var rowLength = tableauxLength.getElementsByTagName("tr");
                                                                    console.log("checkboxTable " + rowLength.length)
                                                                        if(rowLength.length==1){

                                                                        setTimeout(function() {
                                                                            $("#modales").modal();
                                                                            },2000);
                                                                        }
                                                                    }); */

                                                                   /* $(document).ready(function() {
                                                                      var rowCount = $('#checkboxTable').length;
                                                                        if(rowCount==0){
                                                                          //console.log("pas de ligne");
                                                                        setTimeout(function() {
                                                                            $("#modales").modal();
                                                                            },2000);
                                                                        }                                                               
                                                                    });*/


                              
/* $(document).ready(function() {
                   $("#checkboxTable INPUT[type='checkbox']").change(function () {
                                                  var isChecked = $("#customCheck2").closest('tr').find('[type="checkbox"]');
                                                    if(isChecked.prop('checked') == true)
                                                    {
                                                      $(this).closest('tr').find('#validateCheckBox').attr('disabled',false);
                                                    }
                                                    else
                                                    {
                                                      $(this).closest('tr').find('#validateCheckBox').attr('disabled',true);
                                                    }
                    });
                  });*/

                                var tabOp = [];
                                var arr = [];
                                var arrReception = [];
                                var arrAttachement = [];
                                var arrClient = [];

                                var arrPrixUnit=[];
                                var TabAppel = [];
                                var ReceptionAttTab = [];
                                var ClientAttTab = [];
                                var nomAttachementTab = [];
                                var MontantAttachementTVATabFinal =[];
                                var MontantAttachementTTCTabFinal =[];
                                var TVAAttachementTabSave = [];
                                var j=0;
                                var k=0;
                                var l = 0;
                                var m =0;
                                var n =0;
                                var TVAAttachementTabTVA;
                                var identOpeTab=[];

                     
                    

                    $(document).ready(function(){
                              
                              //$('#checkboxTable').on('click', '#validateCheckBox', function () {  
                              $('#checkboxTable tbody tr').find('input:checkbox[id$="customCheck2"]').click(function() {
                                
                                  //$(this).closest('tr').find('#validateCheckBox').attr("disabled", !this.isChecked);
                                  
                                  var isChecked = $(this).closest('tr').find('#customCheck2');
                                  
                                  //var isChecked = $(this).closest('td').prev().find('input[type=checkbox]');
                                  
                                  if(isChecked.prop('checked') == false)
                                  {
                                    isChecked.prop('checked', true);
                                  }

                                  if(isChecked.prop('checked') == true)
                                  {
                                    var ident = $(this).closest('tr').find("#idAttachementCheck").text();
                                 
                                    $('#EnregistrerTraitement').show();
                                    var identOpe = $(this).closest('tr').find("#idoperationTab").text();
                                    var clientEditTab = $(this).closest('tr').find("#clientEditTab").text();

                                    var codeAttachementTab = $(this).closest('tr').find("#codeAttachementTab").text();

                                    var AppelNAtt = $(this).closest('tr').find("#appelIdentTab").text();
                                    var ReceptionAtt = moment($(this).closest('tr').find("#RPFactEditTab").text()).format('DD-MM-YYYY');
                                    var nomAttachementImpr = $(this).closest('tr').find("#codeAttachementTab").text();


                                    var TVAAttachementTabVal = $(this).closest('tr').find("#TVAAttachementTab").text();
                                    var MontantAttachementTab = $(this).closest('tr').find("#MontantAttachementTab").text();
                                    var MontantAttachementTVATab = $(this).closest('tr').find("#MontantAttachementTVATab").text();
                                    var MontantAttachementTTCTab = $(this).closest('tr').find("#MontantAttachementTTCTab").text();

                                    arr[j++] = AppelNAtt;
                                    arrReception[k++] = ReceptionAtt;
                                    arrAttachement[l++] = codeAttachementTab;
                                    arrClient[m++] = clientEditTab;
                                
                         

                                    LoadAllArticleSavedToAttached(ident);
                                    

                                    $(this).closest('tr').find('#customCheck2').attr('disabled','disabled');

                                    $(this).closest('tr').find('#validateCheckBox').attr('disabled','disabled');

                                    $("#AppelNAtt").val(arr);
                                    $("#ReceptionAtt").val(arrReception);
                                    $("#attachementAtt").val(arrAttachement);
                                    $("#clientAtt").val(arrClient);



                                  }
                                    if(tabOp.indexOf(ident) ==-1)
                                    {
                                      tabOp.push(ident);
                                    }

                                    if(identOpeTab.indexOf(identOpe) <0)
                                    {
                                        identOpeTab.push(identOpe)
                                    }


                                    
                                    if(arrPrixUnit.indexOf(MontantAttachementTab)==-1)
                                    {
                                 
                                      arrPrixUnit.push(MontantAttachementTab);
                                      TabAppel.push(AppelNAtt);
                                      ReceptionAttTab.push(ReceptionAtt);
                                      ClientAttTab.push(clientEditTab);
                                      nomAttachementTab.push(nomAttachementImpr);
                                      MontantAttachementTVATabFinal.push(MontantAttachementTVATab);
                                      MontantAttachementTTCTabFinal.push(MontantAttachementTTCTab);
                                      TVAAttachementTabSave.push(TVAAttachementTab);
                                      //identOpeTab.push(identOpe);
                                      //TVAAttachementTabTVA = TVAAttachementTabVal;

                                    }

                                   
                                   

                                });




                          
                           });
                                   
                                    $('#EnregistrerTraitement').click(function(){
                                        approve(tabOp);
                                       
                                        $('#EnregistrerTraitement').hide();
                                    });


                                    ////console.log("TVAAttachementTabVal " + TVAAttachementTabTVA);
   
                                    LoadAttaToSave(identOpeTab,TabAppel,arrPrixUnit,ReceptionAttTab,ClientAttTab,tabOp,nomAttachementTab,MontantAttachementTVATab,MontantAttachementTTCTab,TVAAttachementTabSave);


}




function LoadAttaToSave(identOpeTab,TabAppel,arrPrixUnit,ReceptionAttTab,ClientAttTab,tabOp,nomAttachementTab,MontantAttachementTVATab,MontantAttachementTTCTab,TVAAttachementTabSave)
{

        var TabAppelFinal = [];
        var arrPrixUnitFinal = [];
        var ReceptionAttTabFinal = [];
        var ClientAttTabFinal = [];
        var tabOpFinal = [];
        var nomAttachementTabFinal = [];
        var identOpeTabFinal = [];
/*        var MontantAttachementTVATabBefore;
        var MontantAttachementTTCTabBefore;
        var TVAAttachementTabSaveBefore;*/

        TabAppelFinal = TabAppel;
        arrPrixUnitFinal = arrPrixUnit;
        ReceptionAttTabFinal = ReceptionAttTab;
        ClientAttTabFinal = ClientAttTab;
        tabOpFinal = tabOp;
        nomAttachementTabFinal = nomAttachementTab;
        identOpeTabFinal = identOpeTab;


        
         
        
        



        
        $('#EnregistrerTraitement').click(function(){
                                              var TVAAttachementTabSaveBefore= $("#montantImprTotal").text();
                                              var MontantAttachementTVATabBefore = $("#montantImprTVA").text();
                                              var MontantAttachementTTCTabBefore= $("#montantImprTTC").text();
                                              //var TVAAttachementTabTVA = $("#attachementTVA").val();
                                              var ProductOwner = $("#poAtt").val();
                                              var DescriptionAtt= $("#DescriptionAtt").val();
                                              var activiteAtt= $("#activiteAtt").val();
                                              var RegionAtt= $("#RegionAtt").val();
                                              var operationImpress = $("#operationImpress").text();
                                              var nomDuProjet = $('#nomprojetImpress').text();
                                              SaveAttachementOperation(identOpeTabFinal,TabAppelFinal,arrPrixUnitFinal,ReceptionAttTabFinal,ClientAttTabFinal,ProductOwner,tabOpFinal,DescriptionAtt,activiteAtt,RegionAtt,nomAttachementTabFinal,operationImpress,MontantAttachementTVATabBefore,MontantAttachementTTCTabBefore,TVAAttachementTabSaveBefore);
                                                
                                                for (var i = 0; i < tabOpFinal.length; i++) {
                                                    
                                                ChangeComptabilite(nomDuProjet,tabOpFinal[i]);
                                                }

                                              $('#EnregistrerTraitement').hide();
                                              jQuery('#loader-wrapper').fadeIn(120);
                                              setTimeout(function(){
                                                   window.location.reload();
                                                }, 15000);
                                          });

}






function ChangeComptabilite(nomDuProjet,tabOpFinal)
{

  var genereAllAttachment = genereAllAttachment || [];
var loadChangeAttachement = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Suivi_Attachement_recu')/items?$filter=id_attachement eq '"+tabOpFinal+"' and Title eq '"+nomDuProjet+"'";



function RecuperationDataChangeWorkflow() {

        $.ajax({
                     url: loadChangeAttachement,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                             genereAllAttachment = genereAllAttachment.concat(data.d.results);
                                            if (data.d.__next) {
                                              loadChangeAttachement = data.d.__next;
                                              RecuperationDataChangeWorkflow();
                                            }else if (!data.d.__next) {
                                            
                                            var i=1;
                            var attachementTab = [];
                            var arrayIdAtt = [];



                   $.each(genereAllAttachment, function(key, value) 
                    {
                       

                           var Id = value.Id;
                           console.log("Id " + Id);
                      
                                
                            arrayIdAtt.push(Id);    
                              

                    });

                      approveComptabilite(arrayIdAtt);


                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        
   }                                                                                                                                                                                                                     
                                                                                                                                                                                                                        
}   
});
}                                  
RecuperationDataChangeWorkflow();



}

//----------------------------------Change status of Attacher items-------------------------------------------------
function approveComptabilite(arrayIdAtt){
  var itemArray = [];

  itemArray = arrayIdAtt;

        var clientContext = new SP.ClientContext(_spPageContextInfo.siteAbsoluteUrl);
        var oList = clientContext.get_web().get_lists().getByTitle("Suivi_Attachement_recu");

        for(var i = 0; i< itemArray.length; i++){ 
            var oListItem = oList.getItemById(itemArray[i]);  
            oListItem.set_item('ApprobationComptabilite','Oui');  
            oListItem.update();
            itemArray[i] = oListItem;
            clientContext.load(itemArray[i]);
        }
  
        clientContext.executeQueryAsync(onQuerySucceededApprove, onQueryFailedApprove);
}

function onQuerySucceededApprove() {
    //console.log('Items Updated');
}
function onQueryFailedApprove(sender, args) {
    //console.log('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}
//************************************************************************************************************************



 //ExecuteOrDelayUntilScriptLoaded(SaveAttachementOperation,"SP.js");
function SaveAttachementOperation(identOpeTabFinal,TabAppelFinal,arrPrixUnitFinal,ReceptionAttTabFinal,ClientAttTabFinal,ProductOwner,tabOpFinal,DescriptionAtt,activiteAtt,RegionAtt,nomAttachementTabFinal,operationImpress,MontantAttachementTVATabBefore,MontantAttachementTTCTabBefore,TVAAttachementTabSaveBefore){
  var itemArray = [];
  var itemArray1 = [];
  var itemArray2 = [];

  itemArray1 = TabAppelFinal;
  itemArray2 = arrPrixUnitFinal;
  itemArray3 = ReceptionAttTabFinal;
  itemArray4 = ClientAttTabFinal;

        var clientContext = new SP.ClientContext(_spPageContextInfo.webAbsoluteUrl);
        var oList = clientContext.get_web().get_lists().getByTitle("AttachementFacture");

       

            var itemCreateInfo = new SP.ListItemCreationInformation();
            this.oListItem = oList.addItem(itemCreateInfo);
            oListItem.set_item('Appel_Num',itemArray1.join());  
            oListItem.set_item('Reception',itemArray3.join());  
            oListItem.set_item('Client',itemArray4.join());
            oListItem.set_item('PO',ProductOwner);
            oListItem.set_item('Numero_Attachement',tabOpFinal.join());

            oListItem.set_item('Description',DescriptionAtt);
            oListItem.set_item('Activite_Attachement',activiteAtt);
            oListItem.set_item('Region',RegionAtt);
            oListItem.set_item('Nom_Attachement',nomAttachementTabFinal.join());
            oListItem.set_item('Nom_operation',operationImpress);
            oListItem.set_item('Prix_Attachement',TVAAttachementTabSaveBefore);  
            oListItem.set_item('Prix_TVA',MontantAttachementTVATabBefore);
            oListItem.set_item('Prix_TTC',MontantAttachementTTCTabBefore);
            oListItem.set_item('id_operationFacture',identOpeTabFinal.join());
            
            oListItem.update();
            //itemArray = oListItem;
            clientContext.load(oListItem);
        
        clientContext.executeQueryAsync(onQuerySucceededSaved, onQueryFailedSaved);
}

function onQuerySucceededSaved() {
    //console.log('ISaved');
}

function onQueryFailedSaved(sender, args) {
    //console.log('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}


  


//ExecuteOrDelayUntilScriptLoaded(approve,"SP.js");
//----------------------------------Change status of Attacher items-------------------------------------------------
function approve(tabOp){
  var itemArray = [];
  var itemArray1 = [];
  itemArray1 = tabOp;
        var clientContext = new SP.ClientContext(_spPageContextInfo.webAbsoluteUrl);
        var oList = clientContext.get_web().get_lists().getByTitle("Liste_Attachements");

        for(var i = 0; i< itemArray1.length; i++){ 
            var oListItem = oList.getItemById(itemArray1[i]);  
            oListItem.set_item('Attacher','Oui');  
            oListItem.update();
            itemArray[i] = oListItem;
            clientContext.load(itemArray[i]);
        }
  
        clientContext.executeQueryAsync(onQuerySucceededApprove, onQueryFailedApprove);
}

function onQuerySucceededApprove() {
    //console.log('Items Updated');
}
function onQueryFailedApprove(sender, args) {
    //console.log('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

//---------------------------------- ****************-------------------------------------------------


function LoadAllArticleSavedToAttached(ident)
{
  ////console.log("ident " + ident);
  var tablePaginationArticleAtt = tablePaginationArticleAtt ||[]; 
   var UrlArticleLoadedAtt = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_Article_Attachement')/items?$filter=id_Attachement eq '"+ident+"'"; 
   
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
else if(!data.d.__next){

                                              CodeArticleTab=[];
                                              libArticleTab=[];
                                              quantiteArticleTab=[];
                                              prixVenteTab=[];
                                              montantTotalTab=[];
                                              montantTTCTab=[];
                                              idArticleTab=[];
                                              unityTab = [];
                                              prixTVATAB = [];
                                              var tvaRsArticleTab = [];

if(tablePaginationArticleAtt.length>0)                     
                                { 
                   $.each(tablePaginationArticleAtt, function(key, value) 
                    {


                       var tvaRsArticle = value.tvaRsArticle; 
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
                      var idArticle = value.Id;
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

                      CodeArticleTab.push(CodeArticle);
                      libArticleTab.push(libArticle);
                      quantiteArticleTab.push(quantiteArticle);
                      prixVenteTab.push(prixVente);
                      montantTotalTab.push(montantTotal);
                      montantTTCTab.push(montantTTC);
                      idArticleTab.push(idArticle);
                      unityTab.push(unity);
                      prixTVATAB.push(MontantTVA);
                      tvaRsArticleTab.push(tvaRsArticle);


                    });

                   TabFinalResourcesToPrint(CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,montantTTCTab,idArticleTab,unityTab,prixTVATAB,tvaRsArticleTab);

                   
          }   
      }
  }
          });

  }LoadAllArticleSavedRegistringAtt();
}


function TabFinalResourcesToPrint(CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,montantTTCTab,idArticleTab,unityTab,prixTVATAB,tvaRsArticleTab)
{
  for(var i=0;i<CodeArticleTab.length;i++)
    {

    var tbodyRef = document.querySelector('#tableauxFinalArticleAtt tbody');

                var tr;  
                      tr = $("<tr class='tableauxFinalArticleAtt'/>");
                        tr.append("<td>"+(tbodyRef.rows.length+ 1) +"</td>");
                        tr.append("<td id=''>"+CodeArticleTab[i]+"</td>");
                        tr.append("<td id=''>"+libArticleTab[i]+"</td>");
                        tr.append("<td id=''>"+unityTab[i]+"</td>");
                        tr.append("<td id=''>"+quantiteArticleTab[i]+"</td>");
                        tr.append("<td id=''>"+parseFloat(prixVenteTab[i]).toFixed(3)+"</td>");
                        tr.append("<td id=''>"+montantTotalTab[i]+"</td>");
                        tr.append("<td id=''>"+tvaRsArticleTab[i]+"%</td>");
                        tr.append("<td id=''>"+prixTVATAB[i]+"</td>");
                        tr.append("<td id=''>"+montantTTCTab[i]+"</td>");
                        tr.append("<td style='display:none;' id=''>"+idArticleTab[i]+"</td>");
                    
                      $('#tableauxFinalArticleAtt').append(tr); 
    }

      $('#EnregistrerTraitement').click(function(){             
        approveArticle(idArticleTab); 
        $('#EnregistrerTraitement').hide();      
      });

  $(document).ready(function() {
    var sum_HT = 0;
    var sum_TVA=0;
    var sum_TTC = 0;
    $("#tableauxFinalArticleAtt tbody tr").each( function( index ) {
      sum_HT += $(this).children().eq(6).text() * 1;
      sum_TVA += $(this).children().eq(8).text() * 1;
      sum_TTC += $(this).children().eq(9).text() * 1;

    }); 

    $("#montantImprTotal").text(parseFloat(sum_HT).toFixed(3) + " DT");
    $("#montantImprTVA").text(parseFloat(sum_TVA).toFixed(3) + " DT");
    $("#montantImprTTC").text(parseFloat(sum_TTC).toFixed(3) + " DT");

  });




}


//ExecuteOrDelayUntilScriptLoaded(approveArticle,"SP.js");
//----------------------------------Change status of Attacher items-------------------------------------------------
function approveArticle(idArticleTab){
  var itemArray = [];
  var itemArray1 = [];
  itemArray1 = idArticleTab;
        var clientContext = new SP.ClientContext(_spPageContextInfo.webAbsoluteUrl);
        var oList = clientContext.get_web().get_lists().getByTitle("Liste_Article_Attachement");

        for(var i = 0; i< itemArray1.length; i++){ 
            var oListItem = oList.getItemById(itemArray1[i]);  
            oListItem.set_item('Attacher','Oui');  
            oListItem.update();
            itemArray[i] = oListItem;
            clientContext.load(itemArray[i]);
        }
   
        clientContext.executeQueryAsync(onQuerySucceededApproveArticle, onQueryFailedApproveArticle);
}

function onQuerySucceededApproveArticle() {
    //console.log('Items Updated');
}
function onQueryFailedApproveArticle(sender, args) {
    //console.log('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}



//----------------------------*******************-----------------------------------------------------------------------------------------------


//connect to milestone with click-----------------------------------
    //Show the attachement of opération
$(document).ready(function() {
$('#tableauxOperationTraitement').on('click', '#glyphicon1', function () {
    var identifCmd=$(this).closest('tr').find('#glyphicon1').val();
    var nomOperation = $(this).closest('tr').find('.operation').text();


    var idTasks = $(this).closest('tr').find('#loadRs').text();
    var loadIdent = $(this).closest('tr').find('#loadIdent').text();
        
    MainMilestone(idTasks,nomOperation);
        ////console.log("idTasks " + idTasks);
        MainFunctionRessourceAtt(idTasks,loadIdent);

        PriceOperation(identifCmd);

    $('div#entete1').show();  
    $('div#entete2').hide(); 
  });
});





function MainMilestone(identifCmd,nomOperation)
{
////console.log("nomOperation " +nomOperation);
var nomOperationAttachement = nomOperation;
  var genereAllMilestone = genereAllMilestone || [];
var loadWBSUrlMilestone = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_Attachements')/items?$filter=id_Tasks eq '"+identifCmd+"'&$orderby=Modified desc";

function RecuperationDataTableMilestone(nomOperationAttachement) {

        $.ajax({
                     url: loadWBSUrlMilestone,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            genereAllMilestone = genereAllMilestone.concat(data.d.results);
                                            if (data.d.__next) {
                                              loadWBSUrlMilestone = data.d.__next;
                                              RecuperationDataTableMilestone(nomOperationAttachement);
                                            }else if (!data.d.__next) {
                                           
                                           if(genereAllMilestone.length>0)                     
                                            {             
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



                   $.each(genereAllMilestone, function(key, value) 
                    {
                        moment.locale('fr'); 


                                var id_Tasks = value.id_Tasks;
                                var id_Projects = value.id_projects;

                              var attachement = value.nomAttachement;
                              var idoperation = value.idoperation;
                              var ident = value.Id;
                              var identifiantAtt = value.ID;
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
                                var dateEdit =  moment(value.dateEdit).format('YYYY-MM-DD'); 
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
                                var DateFactEdit = moment(value.DateFactEdit).format('YYYY/MM/DD'); 
                              }

                              var AppelIdent = value.AppelIdent; 
                              var CroquisEdit = value.CroquisEdit; 
                              var PATEdit = value.PATEdit;
                              var PVRepEdit = value.PVRepEdit;

                              if(PVRepEdit==null)
                              {
                                PVRepEdit= "";
                              }else{
                                PVRepEdit = moment(value.PVRepEdit).format('YYYY/MM/DD');
                              }

                              var RDPrevuEdit = value.RDPrevuEdit; 
                              if(RDPrevuEdit ==null)
                              {
                                RDPrevuEdit = "";
                              } 
                              else
                              {
                                var RDPrevuEdit = moment(value.RDPrevuEdit).format('YYYY/MM/DD'); 
                              }

                              var RPFactEdit = value.RPFactEdit; 
                              if(RPFactEdit ==null)
                              {
                                RPFactEdit = "";
                              } 
                              else
                              {
                                var RPFactEdit = moment(value.RPFactEdit).format('YYYY/MM/DD'); 
                              }

                              var RDFactEdit = value.RDFactEdit; 
                              if(RDFactEdit ==null)
                              {
                                RDFactEdit = "";
                              } 
                              else
                              {
                                var RDFactEdit = moment(value.RDFactEdit).format('YYYY/MM/DD'); 
                              }

                              var chargeSTEdit = value.chargeSTEdit;
                              if(chargeSTEdit==null)
                              {
                                chargeSTEdit = "";
                              }

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

                      LoadAllAttachement(id_TasksTab,id_ProjectsTab,identifCmd,nomOperation,attachementTab,idoperationTab,identTab,identifiantAttTab,codeEditTab,dateEditTab,nbClientEditTab,clientEditTab,utilisateurEditTab,factureEditTab,DateFactEditTab,AppelIdentTab,CroquisEditTab,PATEditTab,PVRepEditTab,RDPrevuEditTab,RPFactEditTab,RDFactEditTab,chargeSTEditTab,Sous_TraitEditTab,AttacherTab,MontantAttachementTab,TVATab,beneficierTab);


                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        
   }   
   }                                                                                                                                                                                                                  
                                                                                                                                                                                                                        
}   
});
}                                  






setTimeout(RecuperationDataTableMilestone,2023);
}



function LoadAllAttachement(id_TasksTab,id_ProjectsTab,identifCmd,nomOperation,attachementTab,idoperationTab,identTab,identifiantAttTab,codeEditTab,dateEditTab,nbClientEditTab,clientEditTab,utilisateurEditTab,factureEditTab,DateFactEditTab,AppelIdentTab,CroquisEditTab,PATEditTab,PVRepEditTab,RDPrevuEditTab,RPFactEditTab,RDFactEditTab,chargeSTEditTab,Sous_TraitEditTab,AttacherTab,MontantAttachementTab,TVATab,beneficierTab)
{
  var tbodyRef = document.querySelector('#tableauxAttachement tbody');

   for(var i=0; i<identTab.length;i++)
            {
                var didabl="";
                if(AttacherTab[i]!='Validé'&&AttacherTab[i]!='Oui')
                {
                    didabl= "disabled='disabled'";
                }
                var tr;  
                  tr = $("<tr class='rowAttachement' id='"+(tbodyRef.rows.length+ 1)+"'/>");
                        tr.append("<td style='margin:auto;' class='td-data' ><button id='glyphicon2' style='background: url(klematis.jpg) repeat; font-size: 5px;' value='"+identTab[i]+"' onclick='return false;'><span  style='font-size: small;' class='glyphicon2 glyphicon-export'></span></button></td>");
                        tr.append("<td style='margin:auto;' class='td-data'><button id='glyphicon' style='background: url(klematis.jpg) repeat; font-size: 5px;' value='"+identTab[i] +"' onclick='return false; '><span style='font-size: small;' class='glyphicon glyphicon-edit'></span></button></td>"); 
                        tr.append("<td class='td-data'>"+(tbodyRef.rows.length+ 1) +"</td>");
                        tr.append("<td class='td-data' id='identAtt'>"+identifiantAttTab[i]+"</td>");
                        tr.append("<td class='td-data' id='codeEditTab'>"+codeEditTab[i]+"</td>");

                        tr.append("<td class='td-data operation' id='nomAttachementTab'>" + attachementTab[i] + "</td>");
                        tr.append("<td class='td-data' id='dateAttachement'>"+dateEditTab[i]+"</td>");
                        tr.append("<td class='td-data' id='montantAttach'>"+conToMill(MontantAttachementTab[i])+"</td>");
                        //tr.append("<td class='td-data' id='TVAAttachement'>"+TVATab[i]+"</td>");
                        tr.append("<td class='td-data' id='nbClient'>"+nbClientEditTab[i]+"</td>"); 
                        tr.append("<td class='td-data' id='clientAtt'>"+clientEditTab[i]+"</td>");
                        tr.append("<td class='td-data' id='beneficierAtt'>"+beneficierTab[i]+"</td>");
                        tr.append("<td class='td-data' id='userAtt'>"+utilisateurEditTab[i]+"</td>");
                        tr.append("<td class='td-data' id='factureAtt'>"+factureEditTab[i]+"</td>");
                        tr.append("<td class='td-data' id='dateFactAtt'>"+DateFactEditTab[i]+"</td>");
                        tr.append("<td class='td-data' id='appelAtt'>"+AppelIdentTab[i]+"</td>");
                        tr.append("<td class='td-data' id='croquisAtt'>"+CroquisEditTab[i]+"</td>");
                        tr.append("<td class='td-data' id='patAtt'>"+PATEditTab[i]+"</td>");
                        tr.append("<td class='td-data' id='pvrpAtt'>"+PVRepEditTab[i]+"</td>");
                        tr.append("<td class='td-data' id='rdprevAtt'>"+RDPrevuEditTab[i]+"</td>");
                        tr.append("<td class='td-data' id='rpFact'>"+RPFactEditTab[i]+"</td>");
                        tr.append("<td class='td-data RDFactEdit'>"+RDFactEditTab[i]+"</td>"); 
                        tr.append("<td class='td-data' id='soustraitAtt'>"+Sous_TraitEditTab[i]+"</td>");
                        if(isNaN(chargeSTEditTab[i])){
                            tr.append("<td class='td-data' id='chargeStAtt'>"+chargeSTEditTab[i]+"</td>");
                        }else{
                            tr.append("<td class='td-data' id='chargeStAtt'>"+conToMill(chargeSTEditTab[i])+"</td>");
                        }
                        

                        //tr.append("<td class='td-data'><label for='fileUpload' style='background: brown;'class='file-upload btn btn-primary btn-block rounded-pill shadow'><i class='fa fa-upload mr-2'></i>Join file<input id='fileUpload' type='file'></label></td>");
                        tr.append("<td class='td-data' id='idTasks' style='display:none;'>"+idoperationTab[i]+"</td>");
                        tr.append("<td class='td-data nomOperation' style='display:none;'>"+nomOperation+"</td>");
                        tr.append("<td id='attacher'>"+AttacherTab[i]+"</td>");
                        tr.append("<td id='id_TasksTab' style='display:none;'>"+id_TasksTab[i]+"</td>");
                        tr.append("<td id='id_ProjectsTab' style='display:none;'>"+id_ProjectsTab[i]+"</td>");


                        tr.append("<td style='margin:auto;'><button id='glyphiconPrint' data-toggle='modal' data-target='#myModal1' style='background: url(klematis.jpg) repeat; font-size: 5px;' value='"+identTab[i] +"' onclick='return false;'><span style='font-size: small;' class='glyphicon glyphicon-zoom-in'></span></button></td>");
                        tr.append("<td style='margin:auto;'><button id='glyphiconConsult'  style='background: url(klematis.jpg) repeat; font-size: 5px;' value='"+identTab[i] +"' onclick='return false;'><span style='font-size: small;' class='glyphicon glyphicon-print'></span></button></td>");
                        tr.append("<td style='margin:auto;'><button id='glyphiconConsultPrix'  style='background: url(klematis.jpg) repeat; font-size: 5px;' value='"+identTab[i] +"' onclick='return false;'><span style='font-size: small;' class='glyphicon glyphicon-print'></span></button></td>");
                        //tr.append("<td style='margin:auto;'><input type='file' name='file-input' fileread='run.AttachmentData' fileinfo='run.AttachmentInfo' id='my-attachments' /></td>");
                        tr.append("<td style='margin:auto;'><button id='glyphiconAddFile' data-target='#modalesFile' "+didabl+" style='background: url(klematis.jpg) repeat; font-size: 5px;' value='"+identTab[i] +"' onclick='return false;'><span style='font-size: small;' class='glyphicon glyphicon-file'></span></button></td>");
                         tr.append("<td style='margin:auto;'><button id='glyphiconOpenFile' "+didabl+" style='background: url(klematis.jpg) repeat; font-size: 5px;' value='"+identTab[i] +"' onclick='return false;'><span style='font-size: small;' class='glyphicon glyphicon-open-file'></span></button></td>");
                    $('#tableauxAttachement').append(tr);  

            }

            getCurrentUserAttachement();



                   // $("#tableauxAttachement tbody tr").each(function(){
                   //      var statusAtt  = $(this).closest('tr').find('#attacher').text();
                   //      if(statusAtt =="Non")
                   //      {
                   //          $(this).closest('tr').find('#glyphiconAddFile').attr('disabled','disabled');
                   //      }
                   // });


                   $(document).ready(function() {
                          $('#tableauxAttachement  tbody tr').on('click', '#glyphiconOpenFile', function () {
                                var ID = $(this).closest('tr').find('#glyphiconOpenFile').val();
                                
                                GetLinkDocument(ID);  

                                                                         
                        });
                        });

                    $(document).ready(function(){
  
                        $("#tableauxAttachement tbody tr").each(function(){
                          
                                //$(this).closest('tr').find('#glyphicon2').attr('disabled','disabled');

                                var identA= $(this).closest('tr').find('#identAtt').text();

                                var attacher= $(this).closest('tr').find('#attacher').text();

                                var returntoAttchment= $(this).closest('tr').find('#idTasks').text();

                                var returntoAttchmentName= $(this).closest('tr').find('.nomOperation').text();

                                var montantAttach = $(this).closest('tr').find('#montantAttach').text();

                                $("#returntoAttchment").val(returntoAttchment);
                                $("#returntoAttchmentName").val(returntoAttchmentName);

                                if((attacher == "Oui")||(attacher=="Validé"))
                                {
                                  $(this).closest('tr').find('#glyphicon').attr('disabled','disabled');
                                }

                                if(identA !="")
                                {
                                  $(this).closest('tr').find('#glyphicon2').attr('disabled',false);
                                }

                                if((montantAttach=="0")||(attacher =="Non")){
                                  //$(this).closest('tr').find('#glyphiconPrint').attr('disabled','disabled');
                                  $(this).closest('tr').find('#glyphiconConsult').attr('disabled','disabled');
                                  $(this).closest('tr').find('#glyphiconConsultPrix').attr('disabled','disabled');
                                }
                        });
                    });


                    $("#tableauxAttachement td").each(function() {
                        if (this.textContent === "null") this.textContent = "";
                    });


                    


                    $(document).ready(function() {
                          $('#tableauxAttachement  tbody tr').on('click', '#glyphiconPrint', function () {
                                var identAttachement = $(this).closest('tr').find('#glyphiconPrint').val();
                                $(".fade").addClass("in");
                                AfficherArticlesPOPUP(identAttachement);  

                                                                         
                        });
                        });

                       $(document).ready(function() {
                                    $('#tableauxAttachement tbody tr').on('click', '#glyphiconConsult', function () {
                                    
                                        //$("#documentFacture").show();
                                        jQuery('#loader-wrapper').fadeIn(500);
                                        jQuery('#loader-wrapper').fadeOut(2000);

                                      identAttachementr = $(this).closest('tr').find("#glyphiconConsult").val();


                                      //console.log("identAtt " + identAttachementr);
                                        AfficherArticlesPrint(identAttachementr);
                                        $('#tableauxDeFacturationr tr th:nth-child(6)').hide();
                                           $('#tableauxDeFacturationr tr th:nth-child(7)').hide();
                                           $('#tableauxDeFacturationr tr th:nth-child(8)').hide();
                                           $('#tableauxDeFacturationr tr th:nth-child(9)').hide();
                                           $('#tableauxDeFacturationr tr th:nth-child(10)').hide();
                                          $("#beforePrint").hide();
                                          $("#PrintFacture").show();
                                          $('#PrintWindows').show();
                                          $("#returnToMainQTE").show();
                                          $("#showPrixAttachment").hide();
                                           

                                      });
                                });
                       $(document).ready(function() {
                                    $('#tableauxAttachement tbody tr').on('click', '#glyphiconConsultPrix', function () {
                                    
                                        //$("#documentFacture").show();
                                        jQuery('#loader-wrapper').fadeIn(500);
                                        jQuery('#loader-wrapper').fadeOut(2000);

                                      identAttachementr = $(this).closest('tr').find("#glyphiconConsultPrix").val();
                                      $('#tableauxDeFacturationr tr th:nth-child(6)').show();
                                           $('#tableauxDeFacturationr tr th:nth-child(7)').show();
                                           $('#tableauxDeFacturationr tr th:nth-child(8)').show();
                                           $('#tableauxDeFacturationr tr th:nth-child(9)').show();
                                           $('#tableauxDeFacturationr tr th:nth-child(10)').show();
                                           $("#showPrixAttachment").show();
                                        AfficherArticlesPrintPrix(identAttachementr);
                                        
                                          $("#beforePrint").hide();
                                          $("#PrintFacture").show();
                                          $('#PrintWindows').show();
                                          $("#returnToMainQTE").show();
                                           

                                    });
                                });

                        $(document).ready(function() {
                            $('#tableauxAttachement').on('change', '#avatar', function () {
                                var operation = $(this).closest('tr').find('#avatar').val();
                                var identifiantAttachement = $(this).closest('tr').find('#glyphicon').val();
                                AddAttachment(operation,identifiantAttachement);                                
                            });
                        });             


/*                              $(document).ready(function() {


$('#tableauxAttachement tbody tr').on('change', '#my-attachments', function () {

                                var Ident= $(this).closest('tr').find('#identAtt').text();
                                console.log("Ident " + Ident);
                                //LoadAttchment(Ident);
                            });
});*/



}



function getCurrentUserAttachement()
{
 $.ajax
  ({
      url: "/PWA/_api/web/CurrentUser",
      type: "GET",
      headers: { "Accept": "application/json; odata=verbose","X-RequestDigest": $("#__REQUESTDIGEST").val() },
      dataType: "json",
      async: true,
      success: function(data){
        getCurrentUserGroupColAttachment(data.d.Id)
      }
  });
} 

function getCurrentUserGroupColAttachment(UserID)
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
        var grpServiceF="Centralisateur technique";

                loadCurrentUser(arrgrp);
              

        
  }
  });
}


function loadCurrentUser(arrgrp)
{
        
    if(arrgrp.indexOf("Centralisateur technique")>-1)
    {
        $(document).ready(function(){
  
                        $("#tableauxAttachement tbody tr").each(function(){
                                
                            $(this).closest('tr').find('#glyphicon2').attr('disabled','disabled');
                            $(this).closest('tr').find('#glyphiconAddFile').attr('disabled','disabled');
                            $("#OperationAttachementAsaisir").attr('disabled','disabled');
                            $("#EnregistrerNouveauAttachement").attr('disabled','disabled');


                                  $(this).closest('tr').find('#glyphicon').attr('disabled',false);
                                
                            

                        });
                    });
  
    }else {
        $(document).ready(function(){
  
                        $("#tableauxAttachement tbody tr").each(function(){
                               
                            $(this).closest('tr').find('#glyphicon2').attr('disabled',false);
                            //$(this).closest('tr').find('#glyphiconAddFile').attr('disabled',false);

                        });
                    });
 
    }


}



function ShowContainer(arrgrp)
{



    var groupeFinancierD="";

    var groupeFinancierCP="";

    if(arrgrp.indexOf("Centralisateur technique")>-1)
    {

        groupeFinancierD="";
        groupeFinancierCP="disabled style='background-color: #c2c8cf;'";
  
    }else {
        groupeFinancierD="disabled style='background-color: #c2c8cf;'";
        groupeFinancierCP="";
 
    }


    var showForms =  "<div class='form-group'>"+
                                          "<label for='date' class='control-label'>Code</label>"+
                                          "<input type='text' class='form-control' onkeypress='return event.keyCode != 13;' required "+groupeFinancierCP+" id='codeEdit' placeholder='Code'/>"+
                                          "<label class='control-label' id='codeEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      

                                      "<div id='AttEdit' class='form-group'>"+
                                          "<label for='text' class='control-label'>Date</label>"+
                                          "<input type='date' class='form-control' onkeypress='return event.keyCode != 13;' required "+groupeFinancierCP+" id='dateEdit' placeholder='Date'/>"+
                                          "<label class='control-label' id='dateEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div class='form-group'>"+
                                          "<label for='text' class='control-label'>Nombre client</label>"+
                                          "<input type='number' class='form-control'onkeypress='return event.keyCode != 13;' min='1' "+groupeFinancierCP+" required  id='nbClientEdit'  placeholder='Nombre client'/>"+
                                          "<label class='control-label' id='nbClientEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div class='form-group'>"+
                                          "<label for='text' class='control-label'>Client</label>"+
                                          "<input type='text' class='form-control'onkeypress='return event.keyCode != 13;' required  "+groupeFinancierCP+" id='clientEdit'  placeholder='Client'/>"+
                                          "<label class='control-label' id='clientEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div class='form-group'>"+
                                          "<label for='text' class='control-label'>Bénéficier</label>"+
                                          "<input type='text' class='form-control'onkeypress='return event.keyCode != 13;' required "+groupeFinancierCP+" id='beneficierEdit'  placeholder='Bénéficier'/>"+
                                          "<label class='control-label' id='beneficierEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div class='form-group'>"+
                                          "<label for='text' class='control-label'>Utilisateur</label>"+
                                          "<input type='text' class='form-control'onkeypress='return event.keyCode != 13;' required  id='utilisateurEdit' "+groupeFinancierCP+" placeholder='Utilisateur'/>"+
                                          "<label class='control-label' id='utilisateurEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div class='form-group'>"+
                                          "<label for='text' class='control-label'>Appel</label>"+
                                          "<input type='text' class='form-control' onkeypress='return event.keyCode != 13;' required "+groupeFinancierCP+" id='AppelIdent' placeholder='Appel' />"+
                                          "<label class='control-label' id='AppelIdentErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div class='form-group'>"+
                                          "<label for='text' class='control-label'>Facture</label>"+
                                          "<input type='text' class='form-control'onkeypress='return event.keyCode != 13;' required "+groupeFinancierD+" id='factureEdit' placeholder='Facture' />"+
                                          "<label class='control-label' id='factureEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div class='form-group'>"+
                                          "<label for='date' class='control-label'>DateFact</label>"+
                                          "<input type='date' class='form-control'onkeypress='return event.keyCode != 13;' required "+groupeFinancierD+" id='DateFactEdit' placeholder='DateFact' />"+
                                          "<label class='control-label' id='DateFactEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      

                                      "<div class='form-group'>"+
                                          "<label for='text' class='control-label'>Croquis</label>"+
                                          "<input type='text' class='form-control' onkeypress='return event.keyCode != 13;' required "+groupeFinancierD+" id='CroquisEdit' placeholder='Croquis' />"+
                                          "<label class='control-label' id='CroquisEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div class='form-group'>"+
                                          "<label for='text' class='control-label'>PAT</label>"+
                                          "<input type='text' class='form-control' onkeypress='return event.keyCode != 13;' required "+groupeFinancierD+" id='PATEdit' placeholder='PAT' />"+
                                          "<label class='control-label' id='PATEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div class='form-group'>"+
                                          "<label for='date' class='control-label'>PV RP</label>"+
                                          "<input type='date' class='form-control' onkeypress='return event.keyCode != 13;' required "+groupeFinancierD+" id='PVRepEdit' placeholder='PV de réception'/>"+
                                          "<label class='control-label' id='PVRepEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div class='form-group'>"+
                                          "<label for='date' class='control-label'>RD Prévu</label>"+
                                          "<input type='date' class='form-control'onkeypress='return event.keyCode != 13;' required "+groupeFinancierD+" id='RDPrevuEdit' placeholder='RD Prévu' />"+
                                          "<label class='control-label' id='RDPrevuEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div class='form-group'>"+
                                          "<label for='date' class='control-label'>Recep Prov fact</label>"+
                                          "<input type='date' class='form-control' onkeypress='return event.keyCode != 13;' required "+groupeFinancierD+" id='RPFactEdit' placeholder='Recep Prov fact' />"+
                                          "<label class='control-label' id='RPFactEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div class='form-group'>"+
                                          "<label for='date' class='control-label'>Recep def facture</label>"+
                                          "<input type='date' class='form-control' onkeypress='return event.keyCode != 13;' required "+groupeFinancierD+" id='RDFactEdit' placeholder='Recep def facture' />"+
                                          "<label class='control-label' id='RDFactEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div class='form-group'>"+
                                          "<label for='text' class='control-label'>Sous_traitant</label>"+
                                          "<select class='form-control' id='Sous_TraitEdit' name='city' "+groupeFinancierD+"  data-allow-clear='6' placeholder='Sous traitant' multiple>"+
                                                      "<option data-tokens='ketchup mustard' value=''>Choisir un Sous-Traitant</option>"+
                                          "</select>"+
                                          "<label class='control-label' id='Sous_TraitEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div class='form-group'>"+
                                        "<label for='text' class='control-label'>Charge ST</label>"+
                                          "<input type='text' class='form-control'onkeypress='return event.keyCode != 13;' "+groupeFinancierD+" required  id='chargeSTEdit' placeholder='Sous_traitance' />"+
                                          "<label class='control-label' id='chargeSTEditErreur' style='color:red; display:none;'>Erreur ! Merci de remplir le champs</label>"+
                                      "</div>"+

                                      "<div align='center' class='form-group'>"+
                                          "<button type='submit' id='modifier' onclick='return false;' name='modifier' class='btn btn-primary'>Modifier</button>"+
                                      "</div>";

document.getElementById("myForm").innerHTML =showForms;
 


var resourceARecuperer = document.getElementById("resourceTableau").innerHTML;
var ArraySousTraitant=[];
ArraySousTraitant=resourceARecuperer.split(",");


for (var i = 0; i < ArraySousTraitant.length; i++) {
   $('#Sous_TraitEdit').append($('<option>',
                                {
                                      text : ArraySousTraitant[i]
                                }));
}


$(function () {
  $('#Sous_TraitEdit').each(function () {
    $(this).select2({
      theme: 'bootstrap4',
      width: 'style',
      placeholder: $(this).attr('placeholder'),
      allowClear: Boolean($(this).data('allow-clear')),
    });
  });
});



                      // get all input elements and attach listener
/*var $inputs = $("#myForm :input:not([type='submit'])")
$inputs.change(function() {

  // check if all elements have value
  var allInputsHaveValue = $inputs.toArray().every(function(el) {
    return !!el.value
  });

  // toggle submit disabled
  $("#modifier").prop("disabled", !allInputsHaveValue);

}).change(); // run on init
*/







}



     $("#PrintWindows").click(function () {

         $('#PrintWindows').hide();
         $("#s4-titlerow").hide();
         $("#returnToMainQTE").hide();
         window.print($("#PrintFacture").html());
         $("#beforePrint").show();
         $("#PrintFacture").hide();
    });

     $("#returnToMainQTE").click(function () {

         $('#PrintWindows').hide();
         $("#beforePrint").show();
         $("#PrintFacture").hide();
    });


     $("#returntoAttchment").click(function () {

          identifCmd = $("#returntoAttchment").val();
          nomOperation = $("#returntoAttchmentName").val();
          var id_Tasks = $('#id_Tasks').text()
          PriceOperation(identifCmd);
         $("div#entete1").show();
         $("div#entete3").hide();
         jQuery('#loader-wrapper').fadeIn(99);
                                        jQuery('#loader-wrapper').fadeOut(3010);
         tableaux = document.getElementById("tableauxAttachement");
                                                                        tr11 = tableaux.getElementsByTagName("tr");
                                                                        if(tr11.length>0){
                                                                        $('#tableauxAttachement tbody').empty();
                                                                        } 
         MainMilestone(id_Tasks,nomOperation);

  });






function insertOneRowAttachment(operation,idtaches,id_Tasks,id_Projects)
{

  var nomprojet = document.getElementById("ProjectAttachement").innerHTML;
  //console.log("nomprojet " + nomprojet);

  



    var clientContext = new SP.ClientContext(_spPageContextInfo.webAbsoluteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Liste_Attachements');
        
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);
      

        oListItem.set_item('nomAttachement',operation);
        oListItem.set_item('idoperation',idtaches);
        oListItem.set_item('id_Tasks',id_Tasks);
        oListItem.set_item('id_projects',id_Projects);


  

   oListItem.update();

    clientContext.load(oListItem);
        
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));

}


//Liste externe to approve
function insertOneRowToApprove(operation,idtaches,id_Projects)
{

  var nomprojet = document.getElementById("ProjectAttachement").innerHTML;
  var directionProjet =document.getElementById("directionProjet").innerHTML;
  //console.log("nomprojet " + nomprojet);

  var OperationAttachement = document.getElementById("OperationAttachement").innerHTML;



    var clientContext = new SP.ClientContext(_spPageContextInfo.siteAbsoluteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Suivi_Attachement_recu');
        
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);
      

        oListItem.set_item('Title',nomprojet);
        oListItem.set_item('id_operation',idtaches);
        oListItem.set_item('id_projet',id_Projects);
        oListItem.set_item('nomAttachement',operation);
        oListItem.set_item('nomOperation',OperationAttachement);
        oListItem.set_item('direction', directionProjet);


  

   oListItem.update();

    clientContext.load(oListItem);
        
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));

}







          //Jquery to insert liste Attachment and show the data to the table
                          $(document).ready(function() {
                                $('#tableauSaisiAttachement').on('click', '#EnregistrerNouveauAttachement', function () {

                                  

                                    var operation = $(this).closest('tr').find('#OperationAttachementAsaisir').val();
                                    var idtaches = $(this).closest('tr').find('#EnregistrerNouveauAttachement').val();

                                    var id_Tasks = $(this).closest('tr').find('#id_Tasks').text();
                                    var id_Projects = $(this).closest('tr').find('#id_Projects').text();

                                    var test = $("#OperationAttachementAsaisir").val().toUpperCase();
                                  
                                    var identifCmd = $(this).closest('tr').find('#idTasks').text();
                                    var nomOperation = $('#OperationAttachement').text();

                                    //console.log("EnregistrerNouveauAttachement " + nomOperation);

                                    if(operation !="")
                                    {
                                        
                                        //AddNewAttachment(operation,identifCmd);
                                        var flag = 0;
                                        $("#tableauxAttachement").find("tr").each(function () { 
                                          
                                          

                                          var td1 = $(this).find("td:eq(5)").text().toUpperCase();
                                          td1.replace(/\s+/g, '');
                                          test.replace(/\s+/g, '');
                                          if (test === td1) { //compare if test = td1 AND sample = td2
                                                flag = 1; //raise flag if yes
                                            }
                                        });
                                        if (flag == 1) {
                                            alert("L'attachement existe !!, Merci de saisir un autre attachement :) ");
                                            jQuery('#loader-wrapper').fadeIn(99);
                                        jQuery('#loader-wrapper').fadeOut(3010);
                                        //MainMilestone(identifCmd,nomOperation);
                                        } 
                                      else
                                      {
                                        tableaux = document.getElementById("tableauxAttachement");
                                                                        tr11 = tableaux.getElementsByTagName("tr");
                                                                        if(tr11.length>0){
                                                                        $('#tableauxAttachement tbody').empty();
                                                                        } 

                                          insertOneRowAttachment(operation,idtaches,id_Tasks,id_Projects);
                                          insertOneRowToApprove(operation,idtaches,id_Projects);

                                          jQuery('#loader-wrapper').fadeIn(99);
                                        jQuery('#loader-wrapper').fadeOut(3010); 

                                        //A vérifier

                                        //console.log("id_tasks " + id_Tasks);
                                        MainMilestone(id_Tasks,nomOperation);
                                      }
                                      $("#OperationAttachementAsaisir").val("");
                                        
                                        
                                    }

                                    $(this).closest('tr').find('#OperationAttachementAsaisir').val(null);



                                });
                          });

                         $(document).ready(function() {
                                  $('#tableauSaisiAttachement').keypress(function (e) {
                                          if (e.which == 13) {
                                              var operation = $(this).closest('tr').find('#OperationAttachementAsaisir').val();
                                              var idtaches = $(this).closest('tr').find('#EnregistrerNouveauAttachement').val();

                                              var identifCmd = $(this).closest('tr').find('#idTasks').text();
                                    var nomOperation = $('#OperationAttachement').text();

                                    

                                    var id_Tasks = $(this).closest('tr').find('#id_Tasks').text();
                                    var id_Projects = $(this).closest('tr').find('#id_Projects').text();

                                              var test = $("#OperationAttachementAsaisir").val().toUpperCase();

                                        if(operation !="")
                                            {

                                                //console.log("identifCmd " + identifCmd);
                                                //MainMilestone(identifCmd,nomOperation);
                                        //AddNewAttachment(operation,identifCmd);
                                        var flag = 0;
                                        $("#tableauxAttachement").find("tr").each(function () { 
                                          
                                          var td1 = $(this).find("td:eq(5)").text().toUpperCase();
                                          //td1=td1.replace(/^\s+/, '').replace(/\s+$/, '');

                                          test=test.replace(/^\s+/, '').replace(/\s+$/, '');
                                          
                                          if (test === td1) { //compare if test = td1 AND sample = td2
                                                flag = 1; //raise flag if yes
                                            }
                                        });
                                        if (flag == 1) {
                                            alert("L'attachement existe !!, Merci de saisir un autre attachement :) ");
                                            jQuery('#loader-wrapper').fadeIn(99);
                                        jQuery('#loader-wrapper').fadeOut(3010);
                                       
                                        } 
                                      else
                                      {
                                        tableaux = document.getElementById("tableauxAttachement");
                                                                        tr11 = tableaux.getElementsByTagName("tr");
                                                                        if(tr11.length>0){
                                                                        $('#tableauxAttachement tbody').empty();
                                                                        } 

                                          insertOneRowAttachment(operation,idtaches,id_Tasks,id_Projects);
                                          insertOneRowToApprove(operation,idtaches,id_Projects);
                                          jQuery('#loader-wrapper').fadeIn(99);
                                        jQuery('#loader-wrapper').fadeOut(3010); 
                                       
                                       //A vérifier
                                      //console.log("id_tasks " + id_Tasks);
                                        MainMilestone(id_Tasks,nomOperation);

                                      }
                                      $("#OperationAttachementAsaisir").val("");
                                        
                                        
                                        
                                    }
                                              $(this).closest('tr').find('#OperationAttachementAsaisir').val(null);

                                          }   
                                  });
                          });



 //Jquery to update the data from table







function UpdateMyAttachement1(idAttchmentList,identifCmd,nomOperationss,idAttchmentLists,codeEdit,dateEdit,nbClientEdit,clientEdit,utilisateurEdit,factureEdit,DateFactEdit,AppelIdent,CroquisEdit,PATEdit,PVRepEdit,RDPrevuEdit,RPFactEdit,RDFactEdit,chargeSTEdit,Sous_TraitEdit,beneficierEdit) {
        $(document).ready(function() {
         
           $('#modifier').click(function(){
            //console.log("idAttchmentList " + idAttchmentList);

              var id_Tasks = $('#id_Tasks').text();  
              console.log("id_Tasks " + id_Tasks);

            tableaux = document.getElementById("tableauxAttachement");
                tr11 = tableaux.getElementsByTagName("tr");
                  if(tr11.length>0){
                    $('#tableauxAttachement tbody').empty();
                  } 

               //content = $("#idEdit").val();
               idAttchmentLists = $("#modifier").val();
               //console.log("idAttchmentLists " + idAttchmentLists);
              //console.log("idAttchmentLists " + idAttchmentLists);

               codeEdit = $("#codeEdit").val();
              /*var dateEdit = new Date($('#dateEdit').val());*/
               dateEdit = document.getElementById('dateEdit').value;


               nbClientEdit = $("#nbClientEdit").val();


               clientEdit =$("#clientEdit").val();
  

               utilisateurEdit =$("#utilisateurEdit").val();
 

               factureEdit =$("#factureEdit").val();


              //var DateFactEdit =$("#DateFactEdit").val();
               DateFactEdit = document.getElementById('DateFactEdit').value;


               AppelIdent =$("#AppelIdent").val();


               CroquisEdit =$("#CroquisEdit").val();


               PATEdit =$("#PATEdit").val();


               PVRepEdit =$("#PVRepEdit").val();

 

               RDPrevuEdit =$("#RDPrevuEdit").val();


               RPFactEdit =$("#RPFactEdit").val();


               RDFactEdit =$("#RDFactEdit").val();
 

               chargeSTEdit =$("#chargeSTEdit").val();

               var selected = [];
              for (var option of document.getElementById('Sous_TraitEdit').options) {
                if (option.selected) {
                  selected.push(option.value);
                }
              }

               Sous_TraitEdit =selected.join(',');

               beneficierEdit = $("#beneficierEdit").val();
            

              ////console.log("idAttchmentList " + idAttchmentList);
         
              UpdateMyAttachement(idAttchmentLists,codeEdit,dateEdit,nbClientEdit,clientEdit,utilisateurEdit,factureEdit,DateFactEdit,AppelIdent,CroquisEdit,PATEdit,PVRepEdit,RDPrevuEdit,RPFactEdit,RDFactEdit,chargeSTEdit,Sous_TraitEdit,beneficierEdit);


              $("#modifier").hide();

              //$("#idEdit").val("");

                          $("#modifier").val("");

                          $("#codeEdit").val("");

                          document.getElementById('dateEdit').value="";

                          $("#nbClientEdit").val("");

                          $("#clientEdit").val("");
                            
                          $("#utilisateurEdit").val("");
                           
                          $("#factureEdit").val("");

                          document.getElementById('DateFactEdit').value="";

                          $("#AppelIdent").val("");

                          $("#CroquisEdit").val("");

                          $("#PATEdit").val("");

                          $("#PVRepEdit").val("");

                          $("#RDPrevuEdit").val("");

                          $("#RPFactEdit").val("");

                          $("#RDFactEdit").val("");
                           
                          $("#chargeSTEdit").val("");

                          $("#Sous_TraitEdit").val("");

                          $("#beneficierEdit").val("");

              $('#overlay').fadeOut(900);
             
                    jQuery('#loader-wrapper').fadeIn(98);
                    jQuery('#loader-wrapper').fadeOut(3020);
                    tableaux = document.getElementById("tableauxAttachement");
                                                                        tr11 = tableaux.getElementsByTagName("tr");
                                                                        if(tr11.length>0){
                                                                        $('#tableauxAttachement tbody').empty();
                                                                        } 
                    MainMilestone(id_Tasks,nomOperationss);

                    //console.log("identifCmd,nomOperation " + identifCmd  + "  "  + nomOperationss)


            });


           
        });


        
}









function UpdateMyAttachement(idAttchmentLists,codeEdit,dateEdit,nbClientEdit,clientEdit,utilisateurEdit,factureEdit,DateFactEdit,AppelIdent,CroquisEdit,PATEdit,PVRepEdit,RDPrevuEdit,RPFactEdit,RDFactEdit,chargeSTEdit,Sous_TraitEdit,beneficierEdit) {

if(codeEdit=="") {
    codeEdit =null
}
if(dateEdit=="")
{
    dateEdit=null;  
}

if(clientEdit=="")
{
    clientEdit=null;    
}

if(nbClientEdit=="")
{
    nbClientEdit=null;  
}

if(utilisateurEdit=="")
{
    utilisateurEdit=null;   
}

if(factureEdit=="")
{
    factureEdit=null;   
}

if(DateFactEdit=="")
{
    DateFactEdit=null;  
}


if(AppelIdent=="")
{
    AppelIdent=null;    
}


if(CroquisEdit=="")
{
    CroquisEdit=null;   
}

if(PATEdit=="")
{
    PATEdit=null;   
}

if(PVRepEdit=="")
{
    PVRepEdit=null; 
}


if(RDPrevuEdit=="")
{
    RDPrevuEdit=null;   
}


if(RPFactEdit=="")
{
    RPFactEdit=null;    
}

if(RDFactEdit=="")
{
    RDFactEdit=null;    
}


if(chargeSTEdit=="")
{
    chargeSTEdit=null;  
}
if(Sous_TraitEdit=="")
{
    Sous_TraitEdit=null;    
}
if(beneficierEdit=="")
{
    beneficierEdit=null;    
}


moment.locale('fr');


        var Id = idAttchmentLists;
        //console.log("idAttchmentLists before update" + idAttchmentLists);
/*
        //console.log("nbClientEdit " + nbClientEdit);
        //console.log("clientEdit " + clientEdit);*/

            var clientContext = new SP.ClientContext(_spPageContextInfo.webAbsoluteUrl);
            var oList = clientContext.get_web().get_lists().getByTitle('Liste_Attachements');
            this.oListItem = oList.getItemById(Id);

           // oListItem.set_item('id_attachement', content);
            oListItem.set_item('codeEdit', codeEdit);
            oListItem.set_item('dateEdit', dateEdit);
            oListItem.set_item('clientEdit', clientEdit);
         
            oListItem.set_item('nbClientEdit', nbClientEdit);
            oListItem.set_item('utilisateurEdit', utilisateurEdit);
            oListItem.set_item('factureEdit', factureEdit);
            oListItem.set_item('DateFactEdit', DateFactEdit);
            oListItem.set_item('AppelIdent', AppelIdent);
            oListItem.set_item('CroquisEdit', CroquisEdit);
            oListItem.set_item('PATEdit', PATEdit);
            oListItem.set_item('PVRepEdit', PVRepEdit);
            oListItem.set_item('RDPrevuEdit', RDPrevuEdit);
            oListItem.set_item('RPFactEdit', RPFactEdit);
            oListItem.set_item('RDFactEdit', RDFactEdit);
            oListItem.set_item('chargeSTEdit', chargeSTEdit);
            oListItem.set_item('Sous_TraitEdit', Sous_TraitEdit);
            oListItem.set_item('Beneficier', beneficierEdit);

            oListItem.update();

            clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded1), Function.createDelegate(this, this.onQueryFailed1));

}


function onQuerySucceeded1(identifCmd,nomOperation) {

    //console.log('Data mis à jour');
}

function onQueryFailed1(sender, args) {

    alert('Erreur merci de contacter votre administrateur. ' + args.get_message() + '\n' + args.get_stackTrace());
}












//--------------------------------------------------------------------------------------------------------------------
//showPopup Article
$(document).ready(function() {
    $('#tableauxAttachement').on('click', '#glyphicon2', function () {

      jQuery('#loader-wrapper').fadeIn(110);
      jQuery('#loader-wrapper').fadeOut(3200);


        var identAtt = $(this).closest('tr').find('#identAtt').text();
        var beneficierAtt = $(this).closest('tr').find('#beneficierAtt').text();
        var attachList = $(this).closest('tr').find('.operation').text();
        var dateAttachement = $(this).closest('tr').find('#dateAttachement').text();
        var nomOperationsAA = $(this).closest('tr').find('.nomOperation').text();
        var idAttachement=$(this).closest('tr').find('#glyphicon2').val();
        var idOperation=$(this).closest('tr').find('#idTasks').text();
        var chargeStAtt = $(this).closest('tr').find('#chargeStAtt').text();
        var idTasks = $(this).closest('tr').find('#id_TasksTab').text();
        var loadIdent = $(this).closest('tr').find('#id_ProjectsTab').text();

        //console.log("nomOperationsAA " + nomOperationsAA);

        var Attacher = $(this).closest('tr').find('#attacher').text();
        if((Attacher=="Oui")||(Attacher=="Validé"))
        {
          ////console.log("Oui Attacher");
            $("#AttacherOuNon").hide();
        }
        if(Attacher=="Non")
        {
          ////console.log("Oui Attacher");
            $("#AttacherOuNon").show();
        }


        MainFunctionRessourceAttRemoved(idTasks,loadIdent);


        if(chargeStAtt != "")
        {
          document.getElementById("chargeSTfac").innerHTML = chargeStAtt;
        }else{
            document.getElementById("chargeSTfac").innerHTML = 0;
        }


        if(identAtt=="")
        {
            identAtt="Le champs code est vide ! ";
            document.getElementById("CodeAttchement").innerHTML =identAtt;
            $("#CodeAttchement").css({'background-color':'#ffa6a8'});
            $("#CodeAttchement").css({'color':'white'});
        }else{
            $("#CodeAttchement").css({'background-color':'white'});
            $("#CodeAttchement").css({'color':'#555555'});
        }

        if(beneficierAtt=="")
        {
            beneficierAtt="Le champs Bénéficier est vide ! ";
            document.getElementById("BenefAttchement").innerHTML =beneficierAtt;
            $("#BenefAttchement").css({'background-color':'#ffa6a8'});
            $("#BenefAttchement").css({'color':'white'});
        }
        else{
            $("#BenefAttchement").css({'background-color':'white'});
            $("#BenefAttchement").css({'color':'#555555'});
        }

        if(dateAttachement=="")
        {
            dateAttachement="Le champs date est vide ! ";
            document.getElementById("datedebAttachement").innerHTML =dateAttachement;
            $("#datedebAttachement").css({'background-color':'#ffa6a8'});
            $("#datedebAttachement").css({'color':'white'});
        }
        else{
            $("#datedebAttachement").css({'background-color':'white'});
            $("#datedebAttachement").css({'color':'#555555'});
        }

        document.getElementById("CodeAttchement").innerHTML = identAtt;
        document.getElementById("datedebAttachement").innerHTML = dateAttachement;
        document.getElementById("AttADecrire").innerHTML = attachList;
        document.getElementById("OperationAtt").innerHTML = nomOperationsAA;
        document.getElementById("idOperationArt").value=idOperation;
        document.getElementById("idAttachementArt").value=idAttachement;
        document.getElementById("BenefAttchement").innerHTML=beneficierAtt;

        LoadAllArticleSaved(attachList,idOperation,idAttachement,Attacher);
        ////console.log("idAttachement1 " + idAttachement);

        tableaux = document.getElementById("tableauxArticle");
                                                                        tr11 = tableaux.getElementsByTagName("tr");
                                                                        if(tr11.length>0){
                                                                        $('#tableauxArticle tbody').empty();
                                                                        } 


        //MainFunctionRessourceAtt(idTasks);
    $('div#entete3').show(); 
    $('div#entete1').hide();  
  });
});

//-----------------------------



function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}







/*function getSelectedValue(elementId) {
    var elt = document.getElementById(elementId).value;
    
    return elt.options[elt.selectedIndex].value;
}*/


function filterPortefeuille(){
var resNom =  document.getElementById("affArticle").value;

var tablePaginationQuantite = tablePaginationQuantite ||[];
var UrlArticleQuantite = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?$select=CodeArticle,Quantitécontractuelle,Prix_unit_vent,Unité,TVA_Facture&$filter=CodeArticle%20eq%20%27"+resNom+"%27 and ResourceIsGeneric eq false and CodeArticle ne null and ResourceName%20ne%20%27Ressource%20non%20affectée%27%20and%20ResourceName%20ne%20%27Ressource%20locale%20générique%27 and RessourceType eq 'Article Facturable' and Prix_unit_vent%20ne%20null and TVA_Facture ne null";
function showQuantitiesAndPrice()
{

$.ajax({url: UrlArticleQuantite,   
                      
                                  method: "GET",
                                  dataType: "json",
                                  headers: {Accept: "application/json;odata=verbose"},       
                                  success: function(data) {     
                                    tablePaginationQuantite = tablePaginationQuantite.concat(data.d.results);
                                      if (data.d.__next) {
                                          UrlArticleQuantite = data.d.__next;
                                          showQuantitiesAndPrice();
                                      }
                                      else if(!data.d.__next){
                           if(tablePaginationQuantite.length>0)                     
                                {                       
            $.each(tablePaginationQuantite, function(key, value) 
            {

              var quantite = value.Quantitécontractuelle;
              var tVA_Facture = value.TVA_Facture;
              if(tVA_Facture != null)
              {
                tVA_Facture = parseFloat(value.TVA_Facture).toFixed(0);
              } 

              if(quantite ==null)
              {
                quantite=0;
              }
              else
              {
                quantite = parseFloat(value.Quantitécontractuelle).toFixed(3);
              }
              var prixMontant = value.Prix_unit_vent;
              var unity = value.Unité;

              if(unity==null)
              {
                unity="";
              }

              if(quantite ==null)
              {
                quantite=0;
              }

              document.getElementById('tvaRsArticle').value=tVA_Facture;
              document.getElementById("unity").value=unity;
              document.getElementById("quantite").value=quantite;
              document.getElementById("prixMontant").value=parseFloat(prixMontant).toFixed(3);

            });
   }
}
}
});
}
showQuantitiesAndPrice();
}

$(document).ready(function() {
        $('#tableauFiltreArticle tr').each(function(){
            $('#affArticle').on('change', function () {

              var selected = $(this).val();
              
              $('#quantite').attr('readonly', false);
              
              var quantite =$(this).closest('tr').find('#quantite').val();
              
              if(quantite>0)
              {
                $("#EnregistrerAttArticle").removeAttr('disabled');
              }

            });
        });
});



const numInputs = document.querySelectorAll('input[type=number]')

numInputs.forEach(function(input) {
  input.addEventListener('change', function(e) {
    if (e.target.value == '') {
      e.target.value = 0
    }
    if (e.target.value > 0) {
        $("#EnregistrerAttArticle").removeAttr('disabled');
    }else
    {
        $("#EnregistrerAttArticle").attr('disabled','disabled'); 
    }
  })
});


//**********************************************Evenement onClick and click Enter*****************************************//
$(document).ready(function() {
    $('#tableauFiltreArticle').keypress(function (e) {
    if (e.which == 13) {
        var quantite = $(this).closest('tr').find('#quantite').val();
        var nomAttachement = document.getElementById("CodeAttchement").innerHTML;
        var nomOperation = document.getElementById("OperationAtt").innerHTML;
                var idOperation = document.getElementById("idOperationArt").value;
                var idAttachementSave = document.getElementById("EnregistrerAttArticle").value;
        var idAttachement =document.getElementById("idAttachementArt").value;

        var tvaRsArticle = $(this).closest('tr').find('#tvaRsArticle').val();

        //var prixTVA  = document.getElementById("TVAPercent").innerHTML;
        var unity = document.getElementById("unity").value;


    $(this).closest('tr').find('#TVAPercent').attr('disabled','disabled');

        ////console.log("nomAttachement " + nomAttachement + "nomOperation " + nomOperation);
        if(quantite == 0)
        {
          return false;
        }
        else
        {
            if((quantite != "") ||(quantite !=0))
                {

                    AddData(quantite,nomAttachement,nomOperation,idAttachementSave,idOperation,idAttachement,tvaRsArticle,unity);
                    updateSum();
                }   
        }
    }    
    });
});


$(document).ready(function() {
$('#tableauFiltreArticle').on('click', '#EnregistrerAttArticle', function () {
        var quantite = $(this).closest('tr').find('#quantite').val();
        var nomAttachement = document.getElementById("AttADecrire").innerHTML;
        var nomOperation = document.getElementById("OperationAtt").innerHTML;
        var idAttachementSave = document.getElementById("EnregistrerAttArticle").value;

        var idOperation = document.getElementById("idOperationArt").value;
        var idAttachement =document.getElementById("idAttachementArt").value;
        //var prixTVA  = document.getElementById("TVAPercent").innerHTML;
        var unity = document.getElementById("unity").value;

        var tvaRsArticle = $(this).closest('tr').find('#tvaRsArticle').val();


$("#TVAPercent").attr('disabled','disabled').siblings().removeAttr('disabled');
        ////console.log("nomAttachement " + nomAttachement + "nomOperation " + nomOperation);
        if((quantite != "") ||(quantite !=0))
            {
                AddData(quantite,nomAttachement,nomOperation,idAttachementSave,idOperation,idAttachement,tvaRsArticle,unity);

                updateSum();

            }
  });
});


//Ajouter un article 

function AddData(quantite,nomAttachement,nomOperation,idAttachementSave,idOperation,idAttachement,prixTVA,unity) {

        var rows = "";
        
        //var city = document.getElementById("affArticle").value;
        


                                $(document).ready(function() {
                                                             

                                    var test = $("#affArticle").val();

                                    
                                        //AddNewAttachment(operation,identifCmd);
                                        var flag = 0;
                                        $("#tableauxArticle").find("tr").each(function () { 
                                          
                                          var td1 = $(this).find("td:eq(1)").text();
                                          if (test == td1) { //compare if test = td1 AND sample = td2
                                                flag = 1; //raise flag if yes
                                            }
                                        });

                                        if (flag == 1) {
                                            alert("L'Article existe !!, Merci de saisir un autre Article :) "); 
                                        } 
                                      else
                                      {
                                        

                                         var codeArticle = document.getElementById("affArticle").value;

                                        var prix = document.getElementById('prixMontant').value;
                                        
                                        var prix1 = parseFloat(prix * parseInt(quantite));
                                        console.log("prix1 " + prix1);

                                        var lePrixTVA = parseFloat(prix1 * (prixTVA/100));
                                        console.log("lePrixTVA " + lePrixTVA);

                                        var prixTTCFinal = parseFloat(lePrixTVA) + parseFloat(prix1);
                                        console.log("prixTTCFinal " + prixTTCFinal);
                                        
                                        var Article = getSelectedText('affArticle');



                                        $("#affArticle option:selected[value='"+codeArticle+"']").hide();
                                        $("#affArticle option:contains(Choisir un article)").remove();
                                        $('#affArticle')
                                                .append('<option selected="selected" value="">Choisir un article</option>');
                                        //$("#affArticle option[value='"+codeArticle+"']").hide();
                                        LoadAllArticles(codeArticle,Article,prix,prix1,quantite,nomAttachement,nomOperation,idAttachementSave,idOperation,idAttachement,prixTTCFinal,unity,lePrixTVA,prixTVA);

                                      }
                                });
                  


        
}


function AddAttachment(operation,identifiantAttachement)
{

// Get the file input element and the file to be uploaded
var fileInput = document.getElementById('avatar');
var file = fileInput.files[0];
////console.log("file " + fileInput.files[0]);
// Get the SharePoint context and the list where the file will be uploaded

    var clientContext = new SP.ClientContext(_spPageContextInfo.webAbsoluteUrl);
            var oList = clientContext.get_web().get_lists().getByTitle('Liste_Attachements');
            this.oListItem = oList.getItemById(identifiantAttachement);

// Create a new list item to store the file
var itemCreateInfo = new SP.ListItemCreationInformation();
itemCreateInfo.set_underlyingObjectType(SP.FileSystemObjectType.folder);
itemCreateInfo.set_leafName(file.name);
var newItem = oList.addItem(itemCreateInfo);

// Read the contents of the file into a binary string
var reader = new FileReader();
reader.onloadend = function (e) {
    var content = e.target.result;

    // Save the file to the list
    newItem.set_item('Title', file.name);
    newItem.set_item('Attachments', content);
    newItem.update();
    clientContext.executeQueryAsync(onSuccess22, onError22);
};
reader.readAsDataURL(file);

// Callback function for when the file has been successfully uploaded
function onSuccess22() {
    //console.log('File uploaded successfully!');
}

// Callback function for when there is an error uploading the file
function onError22(sender, args) {
    //console.log('Error uploading file: ' + args.get_message());
}


}



function LoadAllArticleSaved(attachList,idOperation,idAttachement,Attacher)
{
  var tablePaginationArticle = tablePaginationArticle ||[]; 
   var UrlArticleLoaded = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_Article_Attachement')/items?$filter=id_operation eq '"+idOperation+"' and id_Attachement eq '"+idAttachement+"'"; 
   
  function LoadAllArticleSavedRegistring()
  {
    var sommePrixArticle=0;

    $.ajax({
                     url: UrlArticleLoaded,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            tablePaginationArticle = tablePaginationArticle.concat(data.d.results);
                                            if (data.d.__next) {
                                              UrlArticleLoaded = data.d.__next;
                                              LoadAllArticleSavedRegistring();
                                            }else if(!data.d.__next)
                                            {
                                              CodeArticleTab=[];
                                              libArticleTab=[];
                                              quantiteArticleTab=[];
                                              prixVenteTab=[];
                                              montantTotalTab=[];
                                              var idAttachementTab = [];
                                              montantTTCTab = [];
                                              unityTab = [];
                                              MontantTVATab=[];
                                              idAModifierTab = [];
                                              var idOperationTabList = [];
                                              var tVAArticleTab = [];

                                        if(tablePaginationArticle.length>0)                     
                                {       
                   $.each(tablePaginationArticle, function(key, value) 
                    {
                      var CodeArticle = value.CodeArticle;
                      var idAModifier=value.Id;
                      var libArticle = value.libArticle;
                      var unity = value.unity;
                      var MontantTVA = value.MontantTVA;
                      var idOperationTab = value.id_operation;
                      var tVAArticle = value.tvaRsArticle;
                      if(MontantTVA ==null)
                      {
                        MontantTVA = 0.000;
                      }else{
                        MontantTVA = parseFloat(value.MontantTVA).toFixed(3)
                      }
                      if(unity ==null)
                      {
                        unity = "";
                      }
                      var quantiteArticle = parseFloat(value.quantiteArticle).toFixed(3);
                      var prixVente  = value.prixVente;
                      var MontantTTC = value.MontantTTC;
                      if(MontantTTC ==null)
                      {
                        MontantTTC = 0.000;
                      }
                      else
                      {
                      var MontantTTC = parseFloat(value.MontantTTC).toFixed(3);

                      }
                      var montantTotal   =   parseFloat(value.montantTotal).toFixed(3);

                      sommePrixArticle= parseInt(montantTotal) + sommePrixArticle;
                      

                      // To update for duplicated value
                      if(CodeArticleTab.indexOf(CodeArticle)==-1)
                      {
                              CodeArticleTab.push(CodeArticle);
                              libArticleTab.push(libArticle);
                              quantiteArticleTab.push(quantiteArticle);
                              tVAArticleTab.push(tVAArticle);
                              prixVenteTab.push(prixVente);
                              montantTotalTab.push(montantTotal);
                              montantTTCTab.push(MontantTTC);
                              unityTab.push(unity);
                              MontantTVATab.push(MontantTVA);
                              idAModifierTab.push(idAModifier);
                              idOperationTabList.push(idOperationTab);
                    }

                    });

                   TabFinalResources(Attacher,idOperationTabList,idAModifierTab,CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,sommePrixArticle,idAttachement,montantTTCTab,unityTab,MontantTVATab,tVAArticleTab);

                   $("#EnregistrerAttArticle").val(idAttachement);

                   
          }
          else{
                            CodeArticleTab.push("");
                              libArticleTab.push("");
                              quantiteArticleTab.push("");
                              tVAArticleTab.push("");
                              prixVenteTab.push("");
                              montantTotalTab.push("");
                              montantTTCTab.push("");
                              unityTab.push("");
                              MontantTVATab.push("");
                              idAModifierTab.push("");
                              idOperationTabList.push("");

                                TabFinalResources(Attacher,idOperationTabList,idAModifierTab,CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,sommePrixArticle,idAttachement,montantTTCTab,unityTab,MontantTVATab,tVAArticleTab);
tableaux = document.getElementById("tableauxArticle");
                                                                        tr11 = tableaux.getElementsByTagName("tr");
                                                                        if(tr11.length>0){
                                                                        $('#tableauxArticle tbody').empty();
                                                                        } 
            $("#EnregistrerAttArticle").val(idAttachement);
          }  

      }
          } 
          });

  }LoadAllArticleSavedRegistring();
}

function TabFinalResources(Attacher,idOperationTabList,idAModifierTab,CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,sommePrixArticle,idAttachement,montantTTCTab,unityTab,MontantTVATab,tVAArticleTab)
{


  for(var i=0;i<CodeArticleTab.length;i++)
    {

            var tbodyRef = document.querySelector('#tableauxArticle tbody');

                var tr;  
                      tr = $("<tr class='rowTableauxArticles'/>");
                        if(Attacher=="Non")
                        {
                            tr.append("<td><button id='glyphiconDelete'  style='background: url(klematis.jpg) repeat;' value='"+idAModifierTab[i] +"' onclick='return false;'><span style='font-size: small;' class='glyphicon3 glyphicon-trash'></span></button></td>");
                        }
                        else
                        {
                            tr.append("<td><button id='glyphiconDelete'  disabled style='background: url(klematis.jpg) repeat;' value='"+idAModifierTab[i] +"' onclick='return false;'><span style='font-size: small;' class='glyphicon3 glyphicon-trash'></span></button></td>");                            
                        }
                        //tr.append("<td>"+id+"</td>");
                        tr.append("<td id='codeArticleArt'>"+CodeArticleTab[i]+"</td>");
                        tr.append("<td id='ArticleArt'>"+libArticleTab[i]+"</td>");
                        tr.append("<td id='unity'>"+unityTab[i]+"</td>");
                        tr.append("<td id='quantiteArt'>"+quantiteArticleTab[i]+"</td>");
                        tr.append("<td id='tvaRsArticle'>"+tVAArticleTab[i]+"</td>");
                        tr.append("<td id='prixArt'>"+parseFloat(prixVenteTab[i]).toFixed(3)+"</td>");
                        tr.append("<td id='prix1Art'>"+parseFloat(montantTotalTab[i]).toFixed(3)+"</td>");
                        tr.append("<td id='lePrixTVA'>"+parseFloat(MontantTVATab[i]).toFixed(3)+"</td>");
                        tr.append("<td id='montantTTC'>"+parseFloat(montantTTCTab[i]).toFixed(3)+"</td>");


                        tr.append("<td><button id='DisableTable' style='background: url(klematis.jpg) repeat;' disabled value='"+(tbodyRef.rows.length+ 1) +"' onclick='return false;'><span style='font-size: small;' class='glyphicon glyphicon-check'></span></button></td>"); 
                        tr.append("<td id='updateTasks' style='display:none;'>"+idAttachement+"</td>");  
                        tr.append("<td id='idOperationTabList' style='display:none;'>"+idOperationTabList[i]+"</td>");                 
                      $('#tableauxArticle').append(tr); 
    }


                                   var total = 0;
                          $('#tableauxArticle tbody #prix1Art').each(function (idx, el) {
                                total += parseFloat($(el).html());
                              })
                              $('#sum').html(total.toFixed(3));

                              
                              if(isNaN(total))
                              {
                                document.getElementById("MontantAttachement").innerHTML=0;
                              }else{
                              document.getElementById("MontantAttachement").innerHTML=conToMill(total);
                              }


                                      var totalTVA = 0;
                          $('#tableauxArticle tbody #lePrixTVA').each(function (idx, el) {
                                totalTVA += parseFloat($(el).html());
                                //console.log(" totalTVA " + totalTVA);
                              })
                              $('#sumTVA').html(totalTVA.toFixed(3));




                                          var totalTTC = 0;
                          $('#tableauxArticle tbody #montantTTC').each(function (idx, el) {
                                totalTTC += parseFloat($(el).html());
                              })
                              $('#sumTTC').html(totalTTC.toFixed(3));


                              
/*
               $('#tableaux tbody .montantTotalSum').each(function (idx, el) {
                                if (this.textContent === "NaN") this.textContent = "";
                              });*/
                           
                            $(document).ready(function() {
                              var sum_HT = 0;
                              var sum_TVA=0;
                              var sum_TTC = 0; 
                              $("#tableauxArticle tbody tr").each( function( index ) {
                                sum_HT += $(this).children().eq(7).text() * 1;
                                sum_TVA += $(this).children().eq(8).text()*1;
                                sum_TTC += $(this).children().eq(9).text() * 1;

                              }); 
                                if(isNaN(sum_HT)){
                                    $("#montantTotalArticles").text("0.000 DT");
                                }else{
                                   $("#montantTotalArticles").text(parseFloat(sum_HT).toFixed(3)); 
                                }

                                if(isNaN(sum_TVA)){
                                    $("#montantTVAArticle").text("0.000 DT");
                                }else{
                                   $("#montantTVAArticle").text(parseFloat(sum_TVA).toFixed(3)); 
                                }

                                if(isNaN(sum_TTC)){
                                    $("#montantTTCArticle").text("0.000 DT");
                                }else{
                                   $("#montantTTCArticle").text(parseFloat(sum_TTC).toFixed(3)); 
                                }

                            });


                            $("#tableauxArticle tfoot th").each(function() {
                                if (this.textContent === "NaN") this.textContent = "";
                            });


    

}





function LoadAllArticles(codeArticle,Article,prix,prix1,quantite,nomAttachementArt,nomOperation,idAttachementSave,idOperation,idAttachement,prixTTCFinal,unity,lePrixTVA,TVAresArticle)
{

    var tbodyRef = document.querySelector('#tableauxArticle tbody');
        var tr;  
                  tr = $("<tr class='rowTableauxArticles'/>");
                    tr.append("<td><button id='glyphicon3' style='background: url(klematis.jpg) repeat;' value='"+(tbodyRef.rows.length+ 1) +"' onclick='return false;'><span style='font-size: small;' class='glyphicon3 glyphicon-trash'></span></button></td>");
                    tr.append("<td id='codeArticleArt'>"+codeArticle+"</td>");
                    tr.append("<td id='ArticleArt'>"+Article+"</td>");
                    tr.append("<td id='unity'>"+unity+"</td>");
                    tr.append("<td id='quantiteArt'>"+quantite+"</td>");
                    tr.append("<td id='TVAArticleRES'>"+TVAresArticle+"</td>");
                    tr.append("<td id='prixArt'>"+parseFloat(prix).toFixed(3)+"</td>");
                    tr.append("<td id='prix1Art'>"+parseFloat(prix1).toFixed(3)+"</td>");
                    tr.append("<td id='lePrixTVA'>"+parseFloat(lePrixTVA).toFixed(3)+"</td>");
                    tr.append("<td id='montantTTC'>"+parseFloat(prixTTCFinal).toFixed(3)+"</td>");
                    tr.append("<td id='idOperationSaveArt' style='display:none;'>"+idOperation+"</td>");
                    tr.append("<td id='idAttachementSaveArt' style='display:none;'>"+idAttachement+"</td>");
                    tr.append("<td id='nomOperationArt' style='display:none;'>"+nomOperation+"</td>");
                    tr.append("<td id='nomAttachementArt' style='display:none;'>"+nomAttachementArt+"</td>");
                    tr.append("<td><button id='DisableTable' style='background: url(klematis.jpg) repeat;' value='"+(tbodyRef.rows.length+ 1) +"' onclick='return false;'><span style='font-size: small;' class='glyphicon glyphicon-check'></span></button></td>"); 
                    tr.append("<td id='updateTasks' style='display:none;'>"+idAttachementSave+"</td>");          
                   $('#tableauxArticle').append(tr);  
                   

        document.getElementById("quantite").value=0;
        $("#EnregistrerAttArticle").attr('disabled','disabled');

                var total = 0;
$('#tableauxArticle tbody #prix1Art').each(function (idx, el) {
      total += parseFloat($(el).html());
    })
    $('#sum').html(total.toFixed(3));




            var totalTVA = 0;
$('#tableauxArticle tbody #lePrixTVA').each(function (idx, el) {
      totalTVA += parseFloat($(el).html());
      //console.log(" totalTVA " + totalTVA);
    })
    $('#sumTVA').html(totalTVA.toFixed(3));




                var totalTTC = 0;
$('#tableauxArticle tbody #montantTTC').each(function (idx, el) {
      totalTTC += parseFloat($(el).html());
    })
    $('#sumTTC').html(totalTTC.toFixed(3));

    document.getElementById("MontantAttachement").innerHTML=conToMill(total);

  
  $(document).ready(function() {
    var sum_HT = 0;
    var sum_TVA=0;
    var sum_TTC = 0;
    $("#tableauxArticle tbody tr").each( function( index ) {
      sum_HT += $(this).children().eq(7).text() * 1;
      sum_TVA += $(this).children().eq(8).text()*1;
      sum_TTC += $(this).children().eq(9).text() * 1;

    }); 
        $("#montantTotalArticles").text(parseFloat(sum_HT).toFixed(3));
        $("#montantTVAArticle").text(parseFloat(sum_TVA).toFixed(3));
        $("#montantTTCArticle").text(parseFloat(sum_TTC).toFixed(3));
  });

}


$(document).ready(function() {
          $('#tableauxArticle').on('click', '#DisableTable', function() {
            //var thisDisable = $(this).closest('tr').find('.DisableTable').val();
            $(this).closest('tr').find("#glyphicon3").attr('disabled','disabled');
                $(this).closest('tr').find('#DisableTable').attr('disabled','disabled');


                var codeArticle1 = $(this).closest('tr').find('#codeArticleArt').text();
                var Article1 = $(this).closest('tr').find('#ArticleArt').text();
                var unity = $(this).closest('tr').find('#unity').text();
                var prix1 = $(this).closest('tr').find('#quantiteArt').text();
                var quantite1 = $(this).closest('tr').find('#prixArt').text();

                var tvaResArt = $(this).closest('tr').find('#TVAArticleRES').text();

                var prix11 = $(this).closest('tr').find('#prix1Art').text();
                var nomAttachement1 = $(this).closest('tr').find('#nomAttachementArt').text();
                var nomOperation1 = $(this).closest('tr').find('#nomOperationArt').text();

                var idOperationSaveArt =$(this).closest('tr').find('#idOperationSaveArt').text();


                var idAttachementSaveArt=$(this).closest('tr').find('#idAttachementSaveArt').text();

                var lePrixTVA=$(this).closest('tr').find('#lePrixTVA').text();

                var montantTTC=$(this).closest('tr').find('#montantTTC').text();

                //var prixTVA = $("#TVAPercent").text();
                
                
                var updateTasks = $(this).closest('tr').find('#updateTasks').text();

                var montant = $('#montantTotalArticles').text();
                var montantTVAArticle = $('#montantTVAArticle').text();
                var montantTTCArticle = $('#montantTTCArticle').text();
                
               

                updatePrixAttachment(updateTasks,montant,montantTVAArticle,montantTTCArticle);


                MainMontantOperation(idOperationSaveArt);

                //NewTable(codeArticle1,Article1,prix1,quantite1,prix11,nomAttachement1,nomOperation1);
                InsertMultipleRowArticle(codeArticle1,Article1,prix1,quantite1,prix11,nomAttachement1,nomOperation1,idOperationSaveArt,idAttachementSaveArt,montantTTC,unity,lePrixTVA,tvaResArt);
                //$(this).closest('tr').remove();
                jQuery('#loader-wrapper').fadeIn(50);
                jQuery('#loader-wrapper').fadeOut(3000);

          });
});








 

 //Lors de la suppression d'un article non validé
$(document).ready(function() {
    
        $('#tableauxArticle').on('click', '#glyphicon3', function() {
      
            $(this).closest('tr').remove();
            var ArticleAverifier = $(this).closest('tr').find('#codeArticleArt').text();
            $("#affArticle option[value='"+ArticleAverifier+"']").show();

            var total = 0;
                $('#tableauxArticle tbody #prix1Art').each(function (idx, el) {
                  total += parseFloat($(el).text());
                })
                $('#sum').html(total.toFixed(2));
                $('#MontantAttachement').html(total.toFixed(3));
                var sum_HT = 0;
                              var sum_TVA=0;
                              var sum_TTC = 0; 
                              $("#tableauxArticle tbody tr").each( function( index ) {
                                sum_HT += $(this).children().eq(7).text() * 1;
                                  sum_TVA += $(this).children().eq(8).text()*1;
                                  sum_TTC += $(this).children().eq(9).text() * 1;
                              }); 

                                  $("#montantTotalArticles").text(parseFloat(sum_HT).toFixed(3) + " DT");
                                  $("#montantTVAArticle").text(parseFloat(sum_TVA).toFixed(3) + " DT");
                                  $("#montantTTCArticle").text(parseFloat(sum_TTC).toFixed(3) + " DT");

                                  $('#sumTVA').html(parseFloat(sum_TVA).toFixed(3) + " DT");
                                  $('#sumTTC').html(parseFloat(sum_TTC).toFixed(3) + " DT");
        });
});


$(document).ready(function() {
          $('#tableauxArticle').on('click', '#glyphiconDelete', function() {


                $(this).closest('tr').remove();
            var ArticleAverifier = $(this).closest('tr').find('#codeArticleArt').text();
            $("#affArticle option[value='"+ArticleAverifier+"']").show();

            var total = 0;
                $('#tableauxArticle tbody #prix1Art').each(function (idx, el) {
                  total += parseFloat($(el).text());
                })
                $('#sum').html(total.toFixed(2));
                $('#MontantAttachement').html(total.toFixed(3));
                var sum_HT = 0;
                              var sum_TVA=0;
                              var sum_TTC = 0; 
                              $("#tableauxArticle tbody tr").each( function( index ) {
                                  sum_HT += $(this).children().eq(7).text() * 1;
                                  sum_TVA += $(this).children().eq(8).text()*1;
                                  sum_TTC += $(this).children().eq(9).text() * 1;


                              }); 

                              //console.log("sum_HT " + sum_HT);

                                  $("#montantTotalArticles").text(parseFloat(sum_HT).toFixed(3) + " DT");
                                  $("#montantTVAArticle").text(parseFloat(sum_TVA).toFixed(3) + " DT");
                                  $("#montantTTCArticle").text(parseFloat(sum_TTC).toFixed(3) + " DT");

                                  $('#sumTVA').html(parseFloat(sum_TVA).toFixed(3) + " DT");
                                  $('#sumTTC').html(parseFloat(sum_TTC).toFixed(3) + " DT");




                var identifiant = $(this).closest('tr').find('#glyphiconDelete').val();



                var idOperationSaveArt =$(this).closest('tr').find('#idOperationTabList').text();


                
                var updateTasks = $(this).closest('tr').find('#updateTasks').text();

                //var prixTVA = document.getElementById("TVAPercent").innerHTML;
                var montant = $('#montantTotalArticles').text();
                var montantTVAArticle = $('#montantTVAArticle').text();
                var montantTTCArticle = $('#montantTTCArticle').text();


                updatePrixAttachment(updateTasks,montant,montantTVAArticle,montantTTCArticle);


                MainMontantOperation(idOperationSaveArt);

                deleteListItem(identifiant);
                
                jQuery('#loader-wrapper').fadeIn(50);
                jQuery('#loader-wrapper').fadeOut(3000);

          });
});


function deleteListItem(identifiant) {




    var clientContext = new SP.ClientContext(_spPageContextInfo.webAbsoluteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Liste_Article_Attachement');

    this.oListItem = oList.getItemById(identifiant);

    oListItem.deleteObject();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededDeleted), Function.createDelegate(this, this.onQueryFailedDeleted));
}

function onQuerySucceededDeleted() {

    //alert('Item deleted: ' + itemId);
}

function onQueryFailedDeleted(sender, args) {

    //alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

/*$(document).ready(function() {
                                                             

                                    var test = $("#affArticle").val();

                                    
                                        //AddNewAttachment(operation,identifCmd);
                                        var flag = 0;
                                        $("#tableauxArticle").find("tr").each(function () { 
                                          
                                          var td1 = $(this).find("td:eq(1)").text();
                                          if (test == td1) { //compare if test = td1 AND sample = td2
                                                flag = 1; //raise flag if yes
                                            }
                                        });*/


  function updateSum() {
    ////console.log('updateSum');
    var total = 0;
    $('#tableauxArticle tbody #prix1Art').each(function (idx, el) {
      total += parseFloat($(el).text());
    })
    $('#sum').html(total.toFixed(2));
    $('#MontantAttachement').html(total.toFixed(3));
  }


function updatePrixAttachment(updateTasks,montant,montantTVAArticle,montantTTCArticle)
{

    var clientContext = new SP.ClientContext(_spPageContextInfo.webAbsoluteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Liste_Attachements');
    this.oListItem = oList.getItemById(updateTasks);


   oListItem.set_item('MontantAttachement',montant);
   //oListItem.set_item('TVA',prixTVA);

   oListItem.set_item('MontantTVAAttachement',montantTVAArticle);
   oListItem.set_item('MontantTTCAttachement',montantTTCArticle);

   oListItem.update();

    clientContext.load(oListItem);
        
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}



function InsertMultipleRowArticle(codeArticle,Article,prix,quantite,prix1,nomAttachement,nomOperation,idOperationSaveArt,idAttachementSaveArt,montantTTC,unity,lePrixTVA,tvaResArt)
{

  



    var clientContext = new SP.ClientContext(_spPageContextInfo.webAbsoluteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Liste_Article_Attachement');
        
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);
      

        oListItem.set_item('CodeArticle',codeArticle);
        oListItem.set_item('libArticle',Article);
        oListItem.set_item('unity',unity);
        oListItem.set_item('quantiteArticle',prix);
        oListItem.set_item('tvaRsArticle',tvaResArt);
        oListItem.set_item('prixVente',quantite);
        oListItem.set_item('montantTotal',prix1);
        oListItem.set_item('MontantTVA',lePrixTVA);
        oListItem.set_item('MontantTTC',montantTTC);
        oListItem.set_item('operationAttArt',nomAttachement);
        oListItem.set_item('nomAttachement',nomOperation);
        oListItem.set_item('id_Attachement',idAttachementSaveArt);
        oListItem.set_item('id_operation',idOperationSaveArt);
  

    oListItem.update();

    clientContext.load(oListItem);
        
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));

}


//----------------------------------------------------premier affichage des traitements de données -------------------------------------------------------


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
                  var listItemInfo5  = "";
                  var listItemInfo6  = "";
                  var listItemInfo7  = "";
                  var listItemInfo8  = "";
                  var listItemInfo9  = "";
                  var listItemInfo10 = "";
                  var listItemInfoTVA = "";
                  var listItemInfoDirection = "";
                
                data.done(function (data,textStatus, jqXHR){

                    if (data.d.results == undefined) {  
                        data.d.results = new Array();
                        data.d.results[0] = new Object();

                        data.d.results[0] = data.d.CODE_PROJET;
                        data.d.results[0] = data.d.ProjectName;
                        data.d.results[0] = data.d.ProjectStartDate;
                        data.d.results[0] = data.d.ProjectFinishDate;
                        data.d.results[0] = data.d.PO;
                        data.d.results[0] = data.d.Direction;

                        data.d.results[0] = data.d.Périodedegarantie;
                        data.d.results[0] = data.d.RéceptionDef;
                        data.d.results[0] = data.d.RéceptionProv;
                        data.d.results[0] = data.d.TVA;

                        moment.locale('fr');

                        var codeprojet = data.d.CodeOracle;
                        var nomprojets = data.d.ProjectWorkspaceInternalUrl;
                        var nomprojet = nomprojets.substring(28);

                        var direction = data.d.Direction;


                        var datedebut = data.d.ProjectStartDate;
                        var datedebut = moment(datedebut).format('L');
                        
                        var datefin = data.d.ProjectFinishDate;
                        var datefin = moment(datefin).format('L');

                        var popr = data.d.PO;
                        if(popr ==null)
                        {
                            popr="";
                        }

                        var montant = data.d.Montant_contractuel;
                        if(montant==null)
                        {
                            montant=0;
                        }
                        else
                        {
                            var montant = parseFloat(data.d.Montant_contractuel).toFixed(3);
                        }

                        var garantie = data.d.Garantie;
                        if(garantie==null)
                        {
                            garantie=="";
                        }
                        else
                        {
                            var garantie = parseFloat(data.d.Garantie).toFixed(0);
                        }


                        var periodeGarantie = data.d.Périodedegarantie;
                        if(periodeGarantie ==null)
                        {
                            periodeGarantie = 0;
                        }else{
                            periodeGarantie = parseFloat(data.d.Périodedegarantie).toFixed(0) + " jours";
                        }

                        var receptionDef = data.d.RéceptionDef; 
                        if(receptionDef ==null)
                        {
                            receptionDef = 0;
                        }else{
                           receptionDef= parseFloat(data.d.RéceptionDef).toFixed(0) + "%";
                        }

                        var receptionProv = data.d.RéceptionProv;
                        if(receptionProv ==null)
                        {
                            receptionProv=0;
                        }else{
                            receptionProv = parseFloat(data.d.RéceptionProv).toFixed(0) + "%";
                        }

                        var TVA = data.d.TVA;
                        if(TVA==null)
                        {
                            TVA="Non Encore saisi";
                        }

                    listItemInfo1 +=  codeprojet;
                    listItemInfo2 +=  nomprojet;
                    listItemInfo3 +=  datedebut;
                    listItemInfo4 +=  datefin;
                    listItemInfo5 +=  popr;
                    listItemInfo8 +=  conToMill(montant);
                    listItemInfo6 +=  receptionDef;
                    listItemInfo7 +=  receptionProv;
                    listItemInfo9 +=  periodeGarantie;
                    listItemInfoDirection += direction;

                     //For Attchment
                     listItemInfo10+=nomprojet;
                     listItemInfoTVA+=TVA;

                $("#codepr").html(listItemInfo1);
                $("#nompr").html(listItemInfo2);
                $("#directionProjet").html(listItemInfoDirection);
                $("#datedeb").html(listItemInfo3);
                $("#datefin").html(listItemInfo4);
                $("#popr").html(listItemInfo5);
                $("#poAtt").val(listItemInfo5);
                $("#mont_contract").html(listItemInfo8);
                $("#periodeGarantie").html(listItemInfo9);
                $("#recepProv").html(listItemInfo7);
                $("#recepDef").html(listItemInfo6);


                //for Attachment
                $("#NomProjetAtt").html(listItemInfo10);
                $("#TVAPercent").html(listItemInfoTVA);
                $("#attachementTVA").val(listItemInfoTVA);
                $("#TVAProjet").html(listItemInfoTVA);
                
        if(listItemInfo5=="")
        {
            listItemInfo5="Le champs PO est vide ! ";
            document.getElementById("popr").innerHTML =listItemInfo5;
            $("#popr").css({'background-color':'#ffa6a8'});
            $("#popr").css({'color':'white'});
        }else{
            $("#popr").css({'background-color':'white'});
            $("#popr").css({'color':'#555555'});
        }
                

            }
        });
    }




//Insertion des données du Tableau selon le filtrage saisi
function createItemListOperation()  
{  
               $(".rowOperation").each(function(index) {  

                  var libelle   = "";
                  var datedébut = "";
                  var datefinop = "";
                  var montantop = "";
                  var dateprev  = "";
                  var executeur = "";

            libelle   += ($(this).closest('tr').find('.libelle').text()); 

                      datedébut += ($(this).closest('tr').find('.datedébutopo').text()); 
                   
                      datefinop += ($(this).closest('tr').find('.datefinop').text()); 
                   
                      montantop += ($(this).closest('tr').find('.montantop').text());
                    
                      dateprev  += ($(this).closest('tr').find('.dateprev').text());
                      
                      executeur += ($(this).closest('tr').find('.executeur').text());
                      
                    $().SPServices(  
                    {  
                        operation: "UpdateListItems",  
                        async: true,   
                        webURL: "/TSPWA/Sotetel_facturation/",  
                        batchCmd: "New",  
                        listName: "OperationSaisie",  
                        valuepairs: [  
                            ["Libelle"   , libelle],
                            ["Datedebut",datedébut],
                            ["Datefin",datefinop],
                            ["Montant",montantop],
                            ["Dateprev",dateprev],
                            ["Executeur",executeur]
                        ],
                        completefunc: function (xData, Status) {
                    if(status == "success") 
                      {
                          alert("Thank you, for your inquiry!" );
                      }
                  
                  else{
                          //console.log("Unable to submit your request at this time.");
                      }
                }   
                    });  
            });
}




  $('div#entete1').hide();
  $('div#entete3').hide();
  $('div#entete4').hide();
  $('#documentFacture').hide();









$(document).ready(function() {
  $('.glyphicon5').click(function() {
    $('#documentFacture').show(); 
    $('div#entete4').hide();  
  });
});
      




//------------------------------------Show user group and group--------------------------------
$('#RecepDefID').hide();
$('#appelID').hide();
$('#recepID').hide();

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
        
            //

      }

      /*var grpComm="Commercial";
      if(arrgrp.indexOf(grpComm)>-1)
        {       
            $('#RecepDefID').show();
            $('#appelID').show();
            $('#recepID').show();
        }*/
        var grpServiceF="Centralisateur technique";
        var grpServiceC="Service Comptabilité";


$(document).ready(function() {
                          
                          
                          var idAttchmentList;
                          var identifCmd;
                          var nomOperationss;

                          var content;
                          var idAttchmentLists;
                          var codeEdit;
                          var dateEdit;
                          var nbClientEdit;
                          var clientEdit;
                          var utilisateurEdit;
                          var factureEdit;
                          var DateFactEdit;
                          var AppelIdent;
                          var CroquisEdit;
                          var PATEdit;
                          var PVRepEdit;
                          var RDPrevuEdit;
                          var RPFactEdit;
                          var RDFactEdit;
                          var chargeSTEdit;
                          var Sous_TraitEdit;
                          var beneficierEdit;

                          $('#tableauxAttachement').on('click', '#glyphicon', function () {


                          var contentRecup = $(this).closest('tr').find('#identAtt').text();
                          var codeEditRecup = $(this).closest('tr').find('#codeEditTab').text();
                          var dateEditRecup = $(this).closest('tr').find('#dateAttachement').text();
                          var nbClientEditRecup = $(this).closest('tr').find('#nbClient').text();
                          var clientEditRecup = $(this).closest('tr').find('#clientAtt').text();
                          var utilisateurEditRecup = $(this).closest('tr').find('#userAtt').text();
                          var beneficierEditRecup= $(this).closest('tr').find('#beneficierAtt').text();
                          var factureEditRecup = $(this).closest('tr').find('#factureAtt').text();

                          var DateFactEditRecup = $(this).closest('tr').find('#dateFactAtt').text();

                          var AppelIdentRecup = $(this).closest('tr').find('#appelAtt').text();
                          var CroquisEditRecup = $(this).closest('tr').find('#croquisAtt').text();
                          var PATEditRecup= $(this).closest('tr').find('#patAtt').text();
                          var PVRepEditRecup= $(this).closest('tr').find('#pvrpAtt').text();
                          var RDPrevuEditRecup= $(this).closest('tr').find('#rdprevAtt').text();
                          var RPFactEditRecup= $(this).closest('tr').find('#rpFact').text();
                          var RDFactEditRecup= $(this).closest('tr').find('.RDFactEdit').text();
                          var chargeSTEditRecup= $(this).closest('tr').find('#soustraitAtt').text();
                          var Sous_TraitEditRecup= $(this).closest('tr').find('#chargeStAtt').text();
                          


                           
                          ShowContainer(arrgrp);
                           
                            

                          //$("#idEdit").val(contentRecup);

                          $("#modifier").val("");

                          $("#codeEdit").val(codeEditRecup);

                          $('#dateEdit').val(moment(dateEditRecup).format('YYYY-MM-DD'));

                          $("#nbClientEdit").val(nbClientEditRecup);

                          $("#clientEdit").val(clientEditRecup);
                            
                          $("#utilisateurEdit").val(utilisateurEditRecup);
                           
                          $("#factureEdit").val(factureEditRecup);

                          $('#DateFactEdit').val(moment(DateFactEditRecup).format('YYYY-MM-DD'));

                          $("#AppelIdent").val(AppelIdentRecup);

                          $("#CroquisEdit").val(CroquisEditRecup);

                          $("#PATEdit").val(PATEditRecup);

                          $("#PVRepEdit").val(moment(PVRepEditRecup).format('YYYY-MM-DD'));

                          $("#RDPrevuEdit").val(moment(RDPrevuEditRecup).format('YYYY-MM-DD'));

                          $("#RPFactEdit").val(moment(RPFactEditRecup).format('YYYY-MM-DD'));

                          $("#RDFactEdit").val(moment(RDFactEditRecup).format('YYYY-MM-DD'));
                           
                          $("#chargeSTEdit").val(Sous_TraitEditRecup);
                          
                          var straittt = chargeSTEditRecup.split(',');
                          //$("#Sous_TraitEdit").val(chargeSTEditRecup);
                          $('#Sous_TraitEdit').val(straittt).trigger('change');

                          $("#beneficierEdit").val(beneficierEditRecup);



                                 idAttchmentList = $(this).closest('tr').find('#glyphicon').val();
                                 identifCmd = $(this).closest('tr').find('#idTasks').text();
                                 nomOperationss = $(this).closest('tr').find('.nomOperation').text();
                                
                          //console.log("nomOperationss " + nomOperationss);
                                 
                                  
                                
                                $("#modifier").val(idAttchmentList);


                                $('#overlay').fadeIn(300);  

                                UpdateMyAttachement1(idAttchmentList,identifCmd,nomOperationss,idAttchmentLists,codeEdit,dateEdit,nbClientEdit,clientEdit,utilisateurEdit,factureEdit,DateFactEdit,AppelIdent,CroquisEdit,PATEdit,PVRepEdit,RDPrevuEdit,RPFactEdit,RDFactEdit,chargeSTEdit,Sous_TraitEdit,beneficierEdit);
                                    

                                    });
                                 


                                $('#close').click(function() {
                                      $('#overlay').fadeOut(300);
                                    });
                });




        if (arrgrp.indexOf(grpServiceF)>-1) {
            //ShowContainer(grpServiceF);
             
        document.getElementById("tableauxOperation").style.display="none";
        

          $(document).ready(function(){
      
           
            $("#tableauxOperationTraitement tbody tr").each(function(){
                 var montant = $(this).closest('tr').find('.prixunit').text();
                       $(this).closest('tr').find('#glyphicon1').attr('disabled',false);       
                                
                      if(montant !="0")
                      {
                        
                        $(this).closest('tr').find('#glyphicon4').attr('disabled',false);
                        $(this).closest('tr').find('#glyphiconConsultPrintAll').attr('disabled',false);

                      }



            });
            });
        }else if (arrgrp.indexOf(grpServiceC)>-1) {
            document.getElementById("tableauxOperation").style.display="none";
           $(document).ready(function(){
      
            $("#tableauxOperationTraitement tbody tr").each(function(){
                 var montant = $(this).closest('tr').find('.prixunit').text();
                       $(this).closest('tr').find('#glyphicon1').attr('disabled','disabled');       
                                
                      
                        
                        $(this).closest('tr').find('#glyphicon4').attr('disabled','disabled');

                        //$(this).closest('tr').find('#glyphiconConsultPrintAll').attr('disabled','disabled');

                      



            });
            });
       

        }
        else{
            $(document).ready(function(){
      
            $("#tableauxOperationTraitement tbody tr").each(function(){
                 var montant = $(this).closest('tr').find('.prixunit').text();
                              
                                
                      
                        
                        $(this).closest('tr').find('#glyphicon4').attr('disabled','disabled');
                        $(this).closest('tr').find('#glyphiconConsultPrintAll').attr('disabled','disabled');
                        $(this).closest('tr').find('#glyphicon1').attr('disabled',false);  

                     



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


//************* Impression de la Facture *************
function ImprimerFacture() 
{
  var divToPrint=document.getElementById('entete2');

  var newWin=window.open('','Print-Window');
  //newWin.document.write('<link rel="stylesheet" href="css/midday_receipt.css" type="text/css" />');
  newWin.document.open();

  newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

  newWin.document.close();

  setTimeout(function(){newWin.close();},10);
}
