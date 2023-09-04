/*  function test()
  {
      ChefProjet();
      Directions();
      CodeOracle();
  }*/
$("#chk").hide();

  //Function for option select
function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}



//Récupération de ID de chaque site de Projet
var ProjectUID;
var ProjectUID1;
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
                 var urlAllProjetTask = _spPageContextInfo.webServerRelativeUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+ProjectUID+"')/Tasks?$select=TaskName&$filter=TaskIsSummary%20eq%20true";
         
          
          
         //getZone(urlTaskName);
         //filterAss(urlAss);        
         CodeOracle();
         Directions();
         LoadProject();
         ChefProjet();
         ParentTaskNameFunction(urlAllProjetTask);
         LoadIdAttachment();
         //main2(ProjectUID);

            }             
function failedGettingProperty() { 
                                    alert('Error: ' + args.get_message());
            
            } 


  var genereAllTasksProject = genereAllTasksProject || [];
        
function ParentTaskNameFunction(urlAllProjetTask) {

            $.ajax({url: urlAllProjetTask,
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    genereAllTasksProject = genereAllTasksProject.concat(data.d.results);
                                          if (data.d.__next) {
                                            urlAllProjetTask = data.d.__next;
                                            ParentTaskNameFunction();
                                          }           
            $.each(genereAllTasksProject, function(key, value) 
            {           
                var ProjectId = value.ProjectId;
                var nomGrandTache = value.TaskName;
                         
                       $('#liste').append($('<option>',
                            {
                              text : nomGrandTache,
                            }).prop("selected", true)); 

            });
}   
});
} 

//Affichage du projet sur une liste select
var itemIdPr;
function LoadProject() {
               var data =  $.ajax({ url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+ProjectUID+"')?$select=ProjectId,ProjectName",
                                                                                                   
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
                        window.itemIdPr=pr;
                         

                       $('#nomprojet').append($('<option>',
                           {
                              text : nom,
                              value : listItemInfo
                            }).prop("selected", true));  

                       var opt = {};  
                            $("#nomprojet > option").each(function () {
                      if(opt[$(this).text()]) {
                          $(this).remove();
                        } else {
                      opt[$(this).text()] = $(this).val(); }
                        }); 

                         
              } 
        });
    }
_spBodyOnLoadFunctionNames.push("LoadProject");








//Code Oracle du projets
function CodeOracle() {
              //var ProjUid = document.getElementById("nomprojet").value;
               var data =  $.ajax({ url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+ProjectUID+"')?$select=CODE_PROJET,ProjectWorkspaceInternalUrl",
                                                                                         
            type: "GET",
            dataType: "json",
            headers: {
                "Accept": "application/json; odata=verbose"}});
                  var listItemInfo  = "";
                
                data.done(function (data,textStatus, jqXHR){

                    if (data.d.results == undefined) {  
                        data.d.results = new Array();
                        data.d.results[0] = new Object();
                        data.d.results[0] = data.d.CODE_PROJET;
                        data.d.results[0] = data.d.ProjectWorkspaceInternalUrl;

                        var linkProject = data.d.ProjectWorkspaceInternalUrl;
                         projectlink = linkProject.substring(28);
                         LoadId11(projectlink);
                         //LoadId1(projectlink);

                         var codeprojet = data.d.CODE_PROJET;
                          if(codeprojet == null){
                              codeprojet = "";
                          }
                          else
                          {
                            listItemInfo += "<d:CodeOracle>" + codeprojet + "</d:CodeOracle>" +"</br>" ;
                          }

                            document.getElementById('codeoracleentete').value = codeprojet; 



                $("#codeoracle").html(listItemInfo);
            }  
        });
    }
    _spBodyOnLoadFunctionNames.push("CodeOracle");


    //Récuperer le nom du chef de projet
function ChefProjet() {
var ProjUid = document.getElementById("nomprojet").value;
    //var ProjUid = $('#nomprojet').val();
        var data =  $.ajax({ url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+ProjectUID+"')?$select=ProjectOwnerName,ProjectWorkspaceInternalUrl",
                                                                                               
            type: "GET",
            dataType: "json",
            headers: {
                "Accept": "application/json; odata=verbose"}});
                  var listItemInfo  = "";
                  var listItemInfoX  = "";
                
                data.done(function (data,textStatus, jqXHR){

                    if (data.d.results == undefined) {  
                        data.d.results = new Array();
                        data.d.results[0] = new Object();
                        data.d.results[0] = data.d.ProjectOwnerName;
                        data.d.results[0] = data.d.ProjectWorkspaceInternalUrl;
                        
                         var chefprojet = data.d.ProjectOwnerName;
                         var nomDataProject = data.d.ProjectWorkspaceInternalUrl;

                    listItemInfo += chefprojet ;
                    listItemInfoX +=  nomDataProject;

                $("#chefprojet").html(listItemInfo);
                $("ProjectWorkspaceInternalUrl").html(listItemInfoX);
            }
        });
    }
_spBodyOnLoadFunctionNames.push("ChefProjet");



  
                                 



//Affiches La Direction du Projet
function Directions() {
               var ProjUid = document.getElementById("nomprojet").value;
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
                        data.d.results[0] = data.d.Direction;
                        data.d.results[0] = data.d.Pole;
                                                
                        var departementtest = data.d.Direction;
                        var poleprojet = data.d.Pole;



                        if(departementtest != null)
                        {
                            var deptest = departementtest;
                        }
                               else
                                  {
                                    deptest ="Direction Non Affecté";
                                    document.write(deptest.fontcolor( "red" ));
                                  }

                                var pr = data.d.ProjectId;

                              if(poleprojet != null)
                                  {
                                    var polepr = poleprojet;
                                  }
                              else
                                  {
                                    polepr = "Pole Non Affecté";
                                    //document.write(polepr.fontcolor( "red" ));

                                  }

                      
                  listItemInfo += "<d:DepartementTest>" +deptest+ "</d:DepartementTest>" +"</br>" ;
                  listItemInfo1 += "<d:PoleProjet>" + polepr + "</d:PoleProjet>" + "</br>" ;
                        $("#directionprojet").html(listItemInfo);
                        $("#poleprojet").html(listItemInfo1);
              } 
        });
    }
_spBodyOnLoadFunctionNames.push("Directions");



// var responseTask = responseTask ||[];
//  var urlTaskName = _spPageContextInfo.webServerRelativeUrl + "/_api/ProjectData/[en-US]/Projects(guid'1191c36b-f784-ec11-889c-00155dde6963')/Tasks?$select=Zone,TaskId&$filter=Zone eq 'Zone 3'";
// function getZone(){

//   $.ajax({url: urlTaskName,   
                      
//                                   method: "GET",
//                                   dataType: "json",
//                                   headers: {Accept: "application/json;odata=verbose"},       
//                                   success: function(data) {     
//                                     responseTask = responseTask.concat(data.d.results);
//                                    if (data.d.__next) {
//                                       urlTaskName = data.d.__next;
//                                       getZone();
//                                     }    
//                     var TabTasks = [];
//                     var IdTasks;
                  
//                     var zone;
//                   var TaskIdent;
//                   var urlAss;
//             $.each(responseTask, function(key, value) 
//             {
               
//                zone=value.Zone;
//                TaskIdent = value.TaskId;
//                if (TabTasks.indexOf(TaskIdent)==-1){
//               TabTasks.push(TaskIdent);
//               }

//               //filterAssig(zone,TaskIdent);
            
//             }); 
//              for(var i=0; i<TabTasks.length;i++)
//                  {
//                    IdTasks = TabTasks[i];
//                    //filterAss(urlAss);
                
//                 }
            
   
//    }
// });
// }
// getZone();

     //
     filterAssig();
     function filterAssig() {
        var responseAss = responseAss ||[];
       // body...
      var urlAss = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'1191c36b-f784-ec11-889c-00155dde6963')/Assignments?$select=ResourceName,ResourceId&$filter=ResourceName ne 'Ressource non affectée' and ResourceName ne 'Ressource locale générique'&$apply=groupby(ResourceId,ResourceName)";
      function filterAss(){
                $.ajax({url:  urlAss,          
                         method: "GET",
                         dataType: "json",
                         headers: {Accept: "application/json;odata=verbose"},       
                         success: function(data) {     
                         responseAss = responseAss.concat(data.d.results);
                         if (data.d.__next) {
                            urlAss = data.d.__next;
                            filterAss();
                            //console.log("len= "+responseAss.length);
                          } else if (!(data.d.__next)) {

                                var assignementArr=[];
                                var resIdArr=[];
                                var taskNom = [];
                                
                                //var taskId="";
                                  var idR=[];
                                var arrNom=[];
                                var arrType=[];
                                var arrCode=[];
                                var arrStatut=[];
                                var arrTaskId=[];
                                var resourceNom = [];
                                var zoneTable=[];
                                var residArticle;
                                var nomresId;
                                $.each(responseAss, function(key, value) 
                                {
                                  
                                  var resID=value.ResourceId;
                                 
                                  var tNom=value.TaskName;
                                  
                                  var resourceNm = value.ResourceName;
                             
                                  var taskId=value.TaskId;
                                  if (resIdArr.indexOf(resID)==-1){
                                    mainTab(resourceNm,resID);
                                    resIdArr.push(resID);   
                                  }

                                  
                                    
                                      
                                  
            // console.log('nomresId ' + resourceNom);

                                });

                                
                          }
                             //UrlArticleSousTraitant = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?$filter=ResourceId%20eq%20guid%27"+idRes+"%27 and ResourceIsGeneric eq false and RessourceType eq 'Sous-Traitant' and ResourceName%20ne%20%27Ressource%20non%20affectée%27%20and%20ResourceName%20ne%20%27Ressource%20locale%20générique%27";
                              //ressourceProj(resIdArr,resourceNom);
                             


             }
        });
      }
      filterAss();
      //_spBodyOnLoadFunctionNames.push("filterAss");









      function mainTab(nomresId,residArticle) {


        // body...
        main1();
      function main1(){
      ////console.log(tasknm + " " + zoneTb)
      var tablePagination = tablePagination ||[];
              var UrlArticle = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?$select=ResourceId,ResourceName,RessourceType,CodeArticle,Unité,Quantite,Prix_unit_centre&$filter=ResourceId%20eq%20guid%27"+residArticle+"%27 and ResourceIsGeneric eq false and CodeArticle ne null and ResourceName%20ne%20%27Ressource%20non%20affectée%27%20and%20ResourceName%20ne%20%27Ressource%20locale%20générique%27 and RessourceType eq 'Article'&$apply=groupby(ResourceId,ResourceName)";
      $.ajax({url: UrlArticle,   
                            
                                        method: "GET",
                                        dataType: "json",
                                        headers: {Accept: "application/json;odata=verbose"},       
                                        success: function(data) {     
                                          tablePagination = tablePagination.concat(data.d.results);
                                            if (data.d.__next) {
                                                UrlArticle = data.d.__next;
                                                main1();
                                            }
                                                       
                          var myLabels=[];
                          
                          var i=0;
                            var prix_unit_nord=0.000;
        var prix_unit_centre=0.000;
        var prix_unit_sud=0.000;
        var Prix_unit_Vente=0.000;
        var prix_unites=0.000;
        var res1=0.000;
        var FTTC=0.000;
        var prix_unite;

        var prix_Nords=0.000;
        var prix_centres=0.000;
        var prix_suds=0.000;
        var prix_ventes=0.000;
        
        var ARRtypeRes=[];
                  var ARRcodeRes=[];
                  var ARRnomRes=[];
                  var ARRunite=[];
                  var ARRquantpr=[];
                  var ARRprix_unites=[];
                  var ARRnomprojet=[];
                  var ARRres1=[];
                  var ARRFTTC=[];

                  $.each(tablePagination, function(key, value) 
                  {
                 
                       var nomRes="";
                       if((nomresId == value.ResourceName)&&(residArticle == value.ResourceId))
                       {
                        
                            if (value.ResourceName!=null) {
                              nomRes=value.ResourceName;
                            }
                            

                            var typeRes="";
                            if (value.RessourceType!=null) {
                              typeRes=value.RessourceType;
                             //console.log(typeRes);

                            }
                            

                            var statRes="";
                            if (value.ResourceStatusName!=null) {
                              statRes=value.ResourceStatusName;
                            }
                            


                            var codeRes="";
                            if (value.CodeArticle!=null) {
                              codeRes=value.CodeArticle;
                            }
                            


                            var unite="";
                            if (value.Unité!=null) {
                              unite=value.Unité;
                            }
                            
                            
                            var quantiteaTrait = value.Quantite;

                            if(quantiteaTrait != null){
                            var quantpr = parseInt(quantiteaTrait).toFixed(0);
                            }
                            else
                            {
                              if(quantiteaTrait == null)
                              var quantpr = 0;
                            }
                            var regex = /[+-]?\d+(\.\d+)?/g;
                            var prix_centre = value.Prix_unit_centre;
                            if(prix_centre != null)
                            {
                              prix_centres = prix_centre.replace(/,/g, '.');
                              prix_unit_centre = prix_centres.match(regex).map(function(v) { return parseFloat(v); });

                   
                            }

                          

                        

                              var zoneRes = $('#zone').find(":selected").text(); 
                              var pourcentage = $('#size').find(":selected").text(); 
                              var perc = parseInt(pourcentage);

                              //Formule calcul prix

                                if(quantiteaTrait != null){
                                var quantpr = parseInt(quantiteaTrait).toFixed(0);
                            }
                            else
                            {
                              if(quantiteaTrait == null)
                              var quantpr = 0;
                            }

                                        res1 = prix_unites * quantpr;
                                        if(isNaN(res1))
                                        {
                                          res1 = 0.000;
                                        }
                                

                                  var tvaP = (parseInt(perc)/100)+1;
                                  
                                  FTTC = tvaP * res1;
                                  if(isNaN(FTTC))
                                  {
                                    FTTC=0.000;
                                  }
                                 
                              


      var checkboxId="check"+codeRes;

                        ////console.log(zoneTb);
      if (typeRes=="Article"&&prix_unit_centre!=null) {
                        ARRtypeRes.push(typeRes);
                    ARRcodeRes.push(codeRes);
                    ARRnomRes.push(nomRes);
                    ARRunite.push(unite);
                    ARRquantpr.push(quantpr);
                    ARRprix_unites.push(prix_unit_centre);
                    ARRnomprojet.push(nomprojet);
                    ARRres1.push(res1);
                    ARRFTTC.push(FTTC);
                                loadTab(ARRtypeRes,ARRcodeRes,ARRnomRes,ARRunite,ARRquantpr,ARRprix_unites,ARRnomprojet,ARRres1,ARRFTTC);
      }



                  

                  var opt1 ={};
                  $("#listedest > option").each(function () {
                            if(opt1[$(this).text()]) {
                                $(this).remove();
                              } else {
                            opt1[$(this).text()] = $(this).val(); }
                              });


                  }

          $('#tableau').find('input:checkbox[id$="checkboxId"]').click(function() {
          var isChecked = $(this).prop("checked");
          var $selectedRow = $(this).parent("td").parent("tr");
          var qteChecked = $(this).closest('tr').find('#quantite').val();
          if(isChecked)
          {
            $(this).closest("tr").find("#quantite").prop('readonly', true);
          }
          else{
            $(this).closest("tr").find("#quantite").prop('readonly', false);
          }
          if (isChecked) $selectedRow.css({
              "background-color": "#D4FFAA",
              "color": "black"
          });

          else $selectedRow.css({
              "background-color": '',
              "color": "black"
          });
      });
                    // Concatination selon la Zone


                     
                  /*$('#zone').on('change', function () {
                      $selected = $(this).val();
                      var qteChecked = $(this).closest('tr').find('#quantite').val();
                      if($selected !="ChoisirlaZone")
                      {
                        $('#tableau tr').each(function(){
                          $(this).closest("tr").find("#quantite").prop('readonly', false);
                          $(this).closest("tr").find("#SiteText").prop('readonly', false);
                          $(this).closest("tr").find("#quantite").removeAttr('title');
                          $(this).closest("tr").find("#SiteText").removeAttr('title');
                      });
                      }
                      

                  });*/



          });

      verifier();





        
         
         }
      });


      }
     }






      }

function loadTab(ARRtypeRes,ARRcodeRes,ARRnomRes,ARRunite,ARRquantpr,ARRprix_unites,ARRnomprojet,ARRres1,ARRFTTC) {
  for (var i = 0; i < ARRcodeRes.length; i++) {
        var trSuiv;
      trSuiv = $("<tr class='rows'/>");
      trSuiv.append("<td class='coders'>" + ARRcodeRes[i] +"</td>");
      trSuiv.append("<td class='resourceArticle'>" + ARRnomRes[i] +"</td>");
      trSuiv.append("<td class='unit'>" + ARRunite[i] +"</td>");
      trSuiv.append("<td><textarea id='SiteText' class='md-textarea form-control' readonly title='Choisir la zone'  placeholder='Site'  rows='2' onkeypress='this.style.height = ((this.value.length + 1) * 8) + 'px';'></textarea></td>");
      trSuiv.append("<td><input id='quantite' onkeyup='ableCheck();' min='0.000' readonly title='Choisir la zone' step='0.001'  class='refresh_prices row_price' value='"+ARRquantpr[i]+"' type='number' style='width: 70px; height: 30px; text-align:center;'/></td>");
      trSuiv.append("<td style='display:none;'><input id='pu' type='text'  style='width: 80px; height: 30px border:none; text-align:center;' readonly class='refresh_prices row_quantity'/></td>");          
      trSuiv.append("<td class='pun' style='display:none;'><input id='pu' type='text'  style='width: 80px; height: 30px border:none; text-align:center;' readonly class='refresh_prices row_quantity1'/></td>");
      trSuiv.append("<td class='puc' style='display:none;'><input id='pu'value="+ parseFloat(ARRprix_unites[i]).toFixed(3) +" type='text'  style='width: 80px; height: 30px border:none; text-align:center;' readonly class='refresh_prices row_quantity2'/></td>");
      trSuiv.append("<td class='pus' style='display:none;'><input id='pu' type='text'  style='width: 80px; height: 30px border:none; text-align:center;' readonly class='refresh_prices row_quantity3'/></td>");
      trSuiv.append("<td class='puv' style='display:none;'><input id='pu' type='text'  style='width: 80px; height: 30px border:none; text-align:center;' readonly class='refresh_prices row_quantity4'/></td>");
      trSuiv.append("<td style='display:none;'></td>");
      trSuiv.append("<td class='hide'>" + ARRnomprojet[i] + "</td>");
      trSuiv.append("<td id='result' class='row_total'>"+ARRres1[i]+"</td>");
      trSuiv.append("<td id='calculttc'>"+ARRFTTC[i] +"</td>");
      trSuiv.append("<td class='zoneArticle' style='display:none;'>Zone 3</td>");
      trSuiv.append("<td style='display:none;'><input type='checkbox' name='showHide' id='checkboxId' class='data-check'/ disabled></td>");
      $('#tableau').append(trSuiv);
  }
}



//main1();
//_spBodyOnLoadFunctionNames.push("main1");
//setTimeout(main1,60000);

var tablePaginationSousTraitant = tablePaginationSousTraitant ||[];
var urlSousTraitRes = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectServer/Projects('1191c36b-f784-ec11-889c-00155dde6963')/ProjectResources?$select=Group,Name&$filter=Group%20ne%20null";
function main2(){
//////console.log(tasknm + " " + zoneTb)
$.ajax({url: urlSousTraitRes,   
                      
                                  method: "GET",
                                  dataType: "json",
                                  headers: {Accept: "application/json;odata=verbose"},       
                                  success: function(data) {     
                                    tablePaginationSousTraitant = tablePaginationSousTraitant.concat(data.d.results);
                                      if (data.d.__next) {
                                          urlSousTraitRes = data.d.__next;
                                          main2();
                                      }
                                                 


            $.each(tablePaginationSousTraitant, function(key, value) 
            {
              //idR.push(value.ResourceId);
                 var nomRes="";
               
                  
                     
                        nomRes=value.Name;

            
              $('#listedest').append($('<option>',
                              {
                                    text : nomRes   
                              }));
            

            var opt1 ={};
            $("#listedest > option").each(function () {
                      if(opt1[$(this).text()]) {
                          $(this).remove();
                        } else {
                      opt1[$(this).text()] = $(this).val(); }
                        });


            

    });

   
   }
});


}

_spBodyOnLoadFunctionNames.push("main2");






var IdProjetLoaded = "";
  
  
  function LoadId11(projectlink)
  {
    var urlAllProjet1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Id_Devis')/items?$select=Title,ID&$filter=Title eq '"+projectlink+"'&$Orderby=ID desc&$top=1";
     //console.log("nomprojectforid" + urlAllProjet1);
                $.ajax({url:urlAllProjet1,                           
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;
                    var listItemInfo = ""; 
                          var res1=0
                    var p1 = [];
        var nomprojectforid = "";
        var idDevis = "";
        
         
        $.each(dataResults, function(key, value) 
        {                 
                idDevis = value.ID; 
                nomprojectforid = value.Title; 
                console.log("la resultat est  " + value.ID);

        if((value.Title =="")||(value.ID ==""))
        {
            IdIncrement(projectlink);
        }

        });

        
        

         


        }
  });
  }  



  
  function LoadIdOnclick(urlAllProjet1)
  {
                $.ajax({url:urlAllProjet1,                           
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     

                    var dataResults = data.d.results;
                    var listItemInfo = ""; 
                          var res1=0
                    var p1 = [];

        $.each(dataResults, function(key, value) 
        {                 
                var idDevis = value.ID; 
                var nomprojectforid = value.Title; 
                 
                    var nomdeprojet = projectlink;
                    IdProjetLoaded=idDevis;

                    createItem(IdProjetLoaded);
                    createItemAtt(IdProjetLoaded);
                    Enregistrer_Devis(IdProjetLoaded);
                    createListItem(IdProjetLoaded);                   
                    $('#pcode1').val(idDevis);
        });
          
      }   
  });
  }  





//Enregistrer les données sur une liste pour la direction 
var siteUrl1 = "/PWA/";

function IdIncrement(nomprojectforid) {

    var clientContext = new SP.ClientContext(siteUrl1);
    var oList = clientContext.get_web().get_lists().getByTitle('Id_Devis');
        
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);
        
    var nomdeprojet = getSelectedText('nomprojet');

    oListItem.set_item('Title',nomdeprojet);

    oListItem.update();

    clientContext.load(oListItem);
        
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

var siteUrl112 = "/PWA/";

function IdIncrement1(nomdeProjetIdent) {

    var clientContext = new SP.ClientContext(siteUrl112);
    var oList = clientContext.get_web().get_lists().getByTitle('Id_Devis');
        
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);
        
    var nomdeprojet = getSelectedText('nomprojet');

    oListItem.set_item('Title',nomdeProjetIdent);

    oListItem.update();

    clientContext.load(oListItem);
        
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
    
}






  var genereAllAttachment = genereAllAttachment || [];
  var p1 = [];
  var urlAllAtt = _spPageContextInfo.webServerRelativeUrl + "/_api/web/lists/getbytitle('Liste_attachement')/items?$select=NumAttachement";
  function LoadIdAttachment() {
    $.ajax({
      url: urlAllAtt,
      method: "GET",
      dataType: "json",
      headers: { Accept: "application/json;odata=verbose" },
      success: function (data) {
        genereAllAttachment = genereAllAttachment.concat(data.d.results);
        if (data.d.__next) {
          urlAllAtt = data.d.__next;
          LoadIdAttachment();
        }
        var listItemInfo = "";
        var res1 = 0

        $.each(genereAllAttachment, function (key, value) {
          var idAtt = value.NumAttachement;

          if (idAtt != null) {
            var idAtt1 = idAtt;
            p1.push(parseFloat(idAtt1));
          }
          else {
            var idAtt1 = 1;
            p1.push(parseFloat(idAtt1));
          }

          Array.prototype.max = function () {
            return Math.max.apply(null, p1);

          };


          $('#UniqueCodeAttDyn').val(p1.max() + 1);

        });
      }
    });
  } _spBodyOnLoadFunctionNames.push("LoadIdAttachment");





   

function insertOneRow()
{
  var nomprojetTest = getSelectedText('nomprojet');
  var siteUrl3 = "/PWA/"+nomprojetTest+"/";
    $("#tableau tr").each(function(index) { 
            $("#insertionValeur").on("click", function(){
        var clientContext = new SP.ClientContext(siteUrl3);
    var oList = clientContext.get_web().get_lists().getByTitle('Devis_Enregistrer');
        
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);

      //A vérifier pour insertion d'un seul champs
      var sum = ($(this).closest('tr').find('.row_total').text());
      
   oListItem.set_item('prix_tot_ttc',sum);         
   oListItem.update();

    clientContext.load(oListItem);
        
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));

});
});
}





//Insertion des données du Tableau selon le filtrage saisi
function createItem(IdProjetLoaded)  
{  

              

               $(".rows").each(function(index) {  
                var ttc = "";
                var htaxe = "";
                var punit = 0;
                var qt = 0;
                var datecreation = "";
                
                var unit = "";
                var article="";
                var codear ="";
                var nomprojetTest="";
                var direction = "";
                var poles = "";
                var soustraitant = "";
                var taches = "";
                var tva = 0;
                var commentaire = "";
                var codeoracle = "";
                var chefprojet = "";
                var dateDevis = "";
                var delaiJ = 0 ;
                var delaiM = 0 ;
                var typeBC = "";
                var site = "";
                var montant_ht = "";
                var tva_montant = "";
                var montant_ttc = "";
                var sous_op = "";
                var zonePr = "";
                var siteprojet = "";
                var UniqueId = "";
                
                      if($(".row_quantity").is(":visible")){
                        punit += parseFloat($(this).find('.row_quantity').val()).toFixed(3);
                      }

                      if($(".row_quantity1").is(":visible")){
                        punit += parseFloat($(this).find('.row_quantity1').val()).toFixed(3);
                      }

                      if($(".row_quantity2").is(":visible")){
                        punit += parseFloat($(this).find('.row_quantity2').val()).toFixed(3);
                      }

                      if($(".row_quantity3").is(":visible")){
                        punit += parseFloat($(this).find('.row_quantity3').val()).toFixed(3);
                      }

                      if($(".row_quantity4").is(":visible")){
                        punit += parseFloat($(this).find('.row_quantity4').val()).toFixed(3);
                      }

                    UniqueId += document.getElementById('pcode1').value;
                    nomprojetTest = getSelectedText('nomprojet');
                    direction += $('#directionprojet').text();
                    poles += $('#poleprojet').text();
                    soustraitant += getSelectedText('listedest');
                    taches += getSelectedText('liste');
                    tva += $('#size').val();
                    commentaire += document.getElementById('comments').value;
                    codeoracle += $("#codeoracle").text();

                    zonePr = getSelectedText('zone');
                    //Enregister la phase du code Projet
                     
                    chefprojet += $("#chefprojet").text();
                    delaiJ += $('#dureeJours').val();
                    delaiM += $('#dureeMois').val();
                    sous_op += $('#SousOp').val();
                    typeBC += getSelectedText('operations');

                    montant_ht = $('#ht').text();
                    tva_montant = $('#tva').text();
                    montant_ttc = $('#ttc').text();


                    //Site de projet saisie manuelle 
                    siteprojet += document.getElementById('siteprojet').value;

                    datecreation += document.getElementById('start').value;
                    codear  += ($(this).closest('tr').find('.coders').text()); 
                    
                    article += ($(this).closest('tr').find('.resourceArticle').text());
                    unit += ($(this).closest('tr').find('.unit').text());
                    var region = ($(this).find('#SiteText').val());
                    qt = parseFloat($(this).find('#quantite').val());
                    //punit = parseFloat($(this).find('.row_quantity').val());
                    htaxe += ($(this).closest('tr').find('.row_total').text());
                    ttc += ($(this).closest('tr').find('#calculttc').text());

                    jQuery.noConflict();

                    $().SPServices(  
                    {  
                        operation: "UpdateListItems",  
                        async: true,  
                        webURL: "/PWA/"+projectlink+"/",  
                        batchCmd: "New",  
                        listName: "Liste_Articles",  
                        valuepairs: [  
                            ["code_article", codear],
                            ["article", article], 
                            ["unite", unit],
                            ["site_article",region],
                            ["quantite", qt],
                            ["prix_unit", punit],
                            ["prix_tot_ht", htaxe],
                            ["prix_tot_ttc", ttc],
                            ["uniqueCode",IdProjetLoaded]

                        ]  
                    });  
            });
}


function createItemAtt(IdProjetLoaded)  
{  
              
                $(".rows").each(function(index) {  
                var ttc = "";
                var htaxe = "";
                var punit = 0;
                var qt = 0;
                var datecreation = "";
                
                var unit = "";
                var article="";
                var codear ="";
                var nomprojetTest="";
                var direction = "";
                var poles = "";
                var soustraitant = "";
                var taches = "";
                var tva = 0;
                var commentaire = "";
                var codeoracle = "";
                var chefprojet = "";
                var dateDevis = "";
                var delaiJ = 0 ;
                var delaiM = 0 ;
                var typeBC = "";
                var site = "";
                var montant_ht = "";
                var tva_montant = "";
                var montant_ttc = "";
                var sous_op = "";
                var zonePr = "";
                var siteprojet = "";
                var UniqueId = "";
                var uniqueAtt = "";
                var qteRetirer=0;


                    if($(".row_quantity").is(":visible")){
                        punit += parseFloat($(this).find('.row_quantity').val()).toFixed(3);
                      }
                      if($(".row_quantity1").is(":visible")){
                        punit += parseFloat($(this).find('.row_quantity1').val()).toFixed(3);
                      }
                      if($(".row_quantity2").is(":visible")){
                        punit += parseFloat($(this).find('.row_quantity2').val()).toFixed(3);
                      }
                      if($(".row_quantity3").is(":visible")){
                        punit += parseFloat($(this).find('.row_quantity3').val()).toFixed(3);
                      }
                      if($(".row_quantity4").is(":visible")){
                        punit += parseFloat($(this).find('.row_quantity4').val()).toFixed(3);
                      }


                    UniqueId += document.getElementById('pcode1').value;
                    nomprojetTest = getSelectedText('nomprojet');
                    direction += $('#directionprojet').text();
                    poles += $('#poleprojet').text();
                    soustraitant += getSelectedText('listedest');
                    taches += getSelectedText('liste');
                    tva += $('#size').val();
                    commentaire += document.getElementById('comments').value;
                    codeoracle += $("#codeoracle").text();

                    zonePr = getSelectedText('zone');
                    //Enregister la phase du code Projet
                     
                    chefprojet += $("#chefprojet").text();
                    delaiJ += $('#dureeJours').val();
                    delaiM += $('#dureeMois').val();
                    sous_op += $('#SousOp').val();
                    typeBC += getSelectedText('operations');

                    montant_ht = $('#ht').text();
                    tva_montant = $('#tva').text();
                    montant_ttc = $('#ttc').text();

                    uniqueAtt = $('#UniqueCodeAttDyn').val();
                    console.log('numéro Liste_attachement' + uniqueAtt);
                   if((uniqueAtt =="")||(uniqueAtt ==null))
                    {
                      var uniqueAtt = "1";
                    }

                    //Site de projet saisie manuelle 
                    siteprojet += document.getElementById('siteprojet').value;

                    datecreation += document.getElementById('start').value;
                    codear  += ($(this).closest('tr').find('.coders').text()); 
                    article += ($(this).closest('tr').find('.resourceArticle').text());
                    unit += ($(this).closest('tr').find('.unit').text());
                    var region = ($(this).find('#SiteText').val());
                    qt = parseFloat($(this).find('#quantite').val());
                    //punit = parseFloat($(this).find('.row_quantity').val());
                    htaxe += ($(this).closest('tr').find('.row_total').text());
                    ttc += ($(this).closest('tr').find('#calculttc').text());

          jQuery.noConflict();
                    $().SPServices(  
                    {  
                        operation: "UpdateListItems",  
                        async: true,  
                        webURL: "/PWA/"+projectlink+"/",  
                        batchCmd: "New",  
                        listName: "Liste_attachement",  
                        valuepairs: [  
                            ["code_article", codear],
                            ["article", article], 
                            ["unite", unit],
                            ["site_article",region],
                            ["quantite", qt],
                            ["qteRestant",qt],
                            ["qteRetirer",qteRetirer],
                            ["prix_unit", punit],
                            ["prix_tot_ht", htaxe],
                            ["prix_tot_ttc", ttc],
                            ["uniqueCode",IdProjetLoaded],
                            ["NumAttachement", uniqueAtt]


                        ]  
                    });  
                        
                                  
            });
}









//Enreegistrement des données sur site de projet pour chaque Projet et chaque Devis


function Enregistrer_Devis(IdProjetLoaded)
{
  
  //var nomprojetTest = getSelectedText('nomprojet');
  var siteUrl2 = "/PWA/"+projectlink+"/";
    var clientContext = new SP.ClientContext(siteUrl2);
    var oList = clientContext.get_web().get_lists().getByTitle('Devis_Enregistrer');
        
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);
        

          //Enregistrer la phase Projet
            var nomdeprojet = getSelectedText('nomprojet');
            var direction = $('#directionprojet').text();
            var poles = $('#poleprojet').text();
            var soustraitant = getSelectedText('listedest');
            var commentaire = document.getElementById('comments').value;
            var taches = getSelectedText('liste'); 
            var tvaprojet = $('#size').val();
            var zonePr = getSelectedText('zone');

          //Enregister la phase du code Projet
            var codeoracle = $("#codeoracle").text(); 
            var chefProjet = $("#chefprojet").text();
            var start = document.getElementById('start').value;
            var delaiJ = $('#dureeJours').val();
            var delaiM = $('#dureeMois').val();
            var sous_op = $('#SousOp').val();
            var typeBC = getSelectedText('operations');
 

            //Site de projet saisie manuelle 
            var siteprojet = document.getElementById('siteprojet').value;

            var statusDevis = "Validé";
            //Enregistrer le tableau
            
            var uniqueId = document.getElementById('pcode1').value;

            //Enregistrer les prix générer par le Tableau
            var hors_tax = $('#ht').text();
            var tvam = $('#tva').text();
            var ttc = $('#ttc').text();
            
            oListItem.set_item('nomprojet',nomdeprojet);
            oListItem.set_item('direction',direction);
            oListItem.set_item('pole',poles);
            oListItem.set_item('sous_traitant',soustraitant);
            oListItem.set_item('tache',taches);
            oListItem.set_item('tva',tvaprojet);
            oListItem.set_item('commentaire',commentaire);

            oListItem.set_item('codeoracle',codeoracle);
            //oListItem.set_item('zone',zoneprojet);
            oListItem.set_item('chefprojet',chefProjet);
            oListItem.set_item('dateDevis',start);
            oListItem.set_item('delai_jour',delaiJ);
            oListItem.set_item('delai_mois',delaiM);
            oListItem.set_item('type_bc',typeBC);
            
            oListItem.set_item('site',siteprojet);
            oListItem.set_item('montant_ht',hors_tax);
            oListItem.set_item('tva_montant',tvam);
            oListItem.set_item('montant_ttc',ttc);
            oListItem.set_item('Zone',zonePr);
            oListItem.set_item('sous_operation',sous_op);
            oListItem.set_item('uniqueCode',IdProjetLoaded);


    oListItem.update();

    clientContext.load(oListItem);
        
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}







//Enregistrer les données sur une liste pour la direction 
var siteUrl1 = "/PWA/";

function createListItem(IdProjetLoaded) {


    var clientContext = new SP.ClientContext(siteUrl1);
    var oList = clientContext.get_web().get_lists().getByTitle('Liste_Devis_Traites');
        
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);
        
            //var nomdeprojet = getSelectedText('nomprojet');
            var nomdeprojet = projectlink;
            var codeoracle = $("#codeoracle").text(); 
            var start = document.getElementById('start').value;
            var direction = $('#directionprojet').text();
            var chefProjet = $("#chefprojet").text();
            var soustraitant = getSelectedText('listedest');
            var commentaire = document.getElementById('comments').value;
            var hors_tax = $('#ht').text();
            var tva = $('#tva').text();
            var ttc = $('#ttc').text();
            var uniqueId = document.getElementById('pcode1').value;
            var uniqueIdent = parseFloat(uniqueId).toFixed(0);
            
            var link = "https://sotetel.spps.tn/PWA/"+nomdeprojet+"/consultation_devis/Consulter_devis.aspx";


            oListItem.set_item('NomProjet',nomdeprojet);
            oListItem.set_item('CodeOracle',codeoracle);
            oListItem.set_item('dateDevis', start); 
            oListItem.set_item('ChefProjet',chefProjet);
            oListItem.set_item('Sous_Traitant',soustraitant);
            oListItem.set_item('Commentaires',commentaire);

            oListItem.set_item('montant_ht',hors_tax);
            oListItem.set_item('tva',tva);
            oListItem.set_item('montant_ttc',ttc);

            //oListItem.set_item('link',link);
            oListItem.set_item('Direction',direction);
            oListItem.set_item('uniqueCode',window.IdProjetLoaded);

            //console.log("The project has added");




 
    oListItem.update();

    clientContext.load(oListItem);
        
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}



$(document).ready(function(){
    $('#chk').click(function(){
            $("#tableau input:checkbox").each(function(){
                if (this.checked == false) {
                     $(this).parent().parent().remove();

                }
                return true;  
            });
            //$("#approuveValidation").show();
            
          /*$('#chk').prop('disabled',true);
          $('#chk').css('background-color','gray');*/

    });
    });

$(document).ready(function(){
    $('#approuveValidation').click(function(){
        var nomdeProjetIdent = getSelectedText('nomprojet');
          IdIncrement1(nomdeProjetIdent)
          
          $('#approuveValidation').hide();

            
                $('.loadingPage').addClass('show');
                $('#approuveValidation').hide();
                timer = setTimeout(function(){
                    $('.loadingPage').removeClass('show');
                    $('#modal-dialog').show();
                    jQuery(document).ready(function() {
                        jQuery('#overlay1').fadeOut(3000);
                    });

                },4000);
           

          
    });

});





$(document).ready(function() {
  $('#modal-dialog').click(function() {
    $('#overlay').fadeIn(300);  
  });
});

$(document).ready(function(){
    $('#modal-dialog').click(function(){

          $("#modal-dialog").hide();
          $("#chk").hide();

          /*Enregistrer_Devis();  createListItem(); createItem(); createItemAtt();*/
          var nomdeProjetIdent = getSelectedText('nomprojet');
          //IdIncrement1(nomdeProjetIdent);
          //LoadId11(nomdeProjetIdent)
          var urlAllProjet1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Id_Devis')/items?$select=Title,ID&$filter=Title eq '"+nomdeProjetIdent+"'&$Orderby=ID desc&$top=1";
    LoadIdOnclick(urlAllProjet1);
          setInterval('location.reload()', 25000);

});
});



document.getElementById("date").valueAsDate = new Date();


//Filter with TaskName
  function filtrerTableau()
   {
    var input, filte, table, tr, td, i;
    input = document.getElementById("liste");

    filter = input.value.toUpperCase();

    table = document.getElementById("tableau");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[6];

    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
      } else {
      tr[i].style.display = "none";
      }
    }       
    }
    var numRows = document.getElementById("tableau").rows.length;
  }

//Filter with Zone
  function filtrerTableauZone()
   {
    var input, filte, table, tr, td, i;
    input = document.getElementById("zone");

    filter = input.value.toUpperCase();

    table = document.getElementById("tableau");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[14];

    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
      } else {
      tr[i].style.display = "none";
      }
    }       
    }
    var numRows = document.getElementById("tableau").rows.length;
  }








//----------------------------------------------------------------------------

//Filter With quantities
$(document).change('#refresh_prices', function() {
  refreshPrices();
})

// function actuallissant les prix de tous les champs calculer automatiquement
function refreshPrices(){
  var totalPrice = 0;
  $('#tableau tr').each(function(){
    totalPrice += refreshRowPrice($(this));
   }); 
}





//function recalculant le prix d'un ligne et retournant le prix
function refreshRowPrice($row){
  // récupère le prix et la quantité
  var quantity = 0;
  var pourcentage = $('#size').val();
  if($(".row_quantity").is(":visible")){
    quantity = $row.find('.row_quantity').val();
  }
  if($(".row_quantity1").is(":visible")){
    quantity = $row.find('.row_quantity1').val();
  }
  if($(".row_quantity2").is(":visible")){
    quantity = $row.find('.row_quantity2').val();
  }
  if($(".row_quantity3").is(":visible")){
    quantity = $row.find('.row_quantity3').val();
  }
  if($(".row_quantity4").is(":visible")){
    quantity = $row.find('.row_quantity4').val();
  }
  var price = $row.find('.row_price').val(),
      
      rowPrice = price * quantity;

  var resultattext = parseInt(pourcentage)/100;

  var tot = (resultattext+1) * (rowPrice);

  $row.find('.row_total').text(rowPrice.toFixed(3));

  $row.find('#calculttc').text(tot.toFixed(3));
  return tot;
  return rowPrice;
}

//-------------------------------------------------------------------





//---------------------------------------------------------------------
//Calcul des lignes selectionnés selon checkbox list
function verifier()
{
    $('.data-check').click(function() {
        var sum = 0;
        var sum1 = 0;
        var sum2 = 0;
        var somme = 0;
        var somme1 = 0;
        var somme2 = 0;
        var TVAval = 0;
        var TVAval1 = 0;

        $('.data-check:checked').each(function() {
            sum += parseFloat($(this).closest('tr').find('.row_total').text());
            sum1 += parseFloat($(this).closest('tr').find('#calculttc').text());

            TVAval = Number($("#size").val());
            TVAval1 += Number($("#size").val());

            somme = sum.toFixed(3)
            somme1 = sum1.toFixed(3)
            somme2 = ((TVAval / 100) * sum).toFixed(3)

        });
        $('#ht').html(somme);
        $('#tva').html(somme2);
        $('#ttc').html(somme1);

    });


$('.rows').each(function() {
  var thisId = $(this).find('.zoneArticle').text();
  var thisId2 = $(this).find('.opArticles').text();
  var thisId1 = $(this).find('.coders').text();
  var thisCheckBox = $(this).find('#checkboxId');
  var sumVal = parseFloat($(this).find('#pu').text());

  var $rowsToGroup = $(this).nextAll('tr').filter(function() {
    return ($(this).find('.zoneArticle').text() === thisId && $(this).find('.coders').text() === thisId1);
  });
     
  $rowsToGroup.each(function() {
     $(this).remove();
  });

});





            
           
    
$('input[name="showHide"]').click(function() {
  var countChecked = document.querySelectorAll('input[name="showHide"]:checked').length;

  if(countChecked >=1)
  {
    $('#chk').show();
    }  else{
      $('#chk').hide();
    }

});

 

}


//---------------------------------------------------------------------

    $('#zone').change(function () {
          var somme = 0;
          var somme1 = 0;
          var somme2 = 0;
            var $selectedRow = $('#tableau').parent("td").parent("tr");
            $('input').filter(':checkbox').prop('checked',false);
            $('#ht').html(somme);
            $('#tva').html(somme2);
            $('#ttc').html(somme1);

            $selectedRow.css({
                "background-color": '',
                "color": "black"
            });
            $selected = $(this).val();
                var qteChecked = $(this).closest('tr').find('#quantite').val();
                if($selected !="ChoisirlaZone")
                {
                  $('#tableau tr').each(function(){
                        $(this).closest("tr").find("#quantite").prop('readonly', false);
                        $(this).closest("tr").find("#SiteText").prop('readonly', false);
                        $(this).closest("tr").find("#quantite").removeAttr('title');
                        $(this).closest("tr").find("#SiteText").removeAttr('title');
                    });
                }
    });





//---------------------------------------------------------------------

//This Function for Filter Table and show the Zone of Cost
function myFunction2() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("zone");
  filter = input.value.toUpperCase();
  if(filter == "ZONE 2")
  { 
    $('#tableau').show();
    $('td:nth-child(7)').show();
    $('td:nth-child(7),th:nth-child(7)').show();

    $('td:nth-child(6)').hide();
    $('td:nth-child(6),th:nth-child(6)').hide();
    $('td:nth-child(9)').hide();
    $('td:nth-child(9),th:nth-child(9)').hide();
    $('td:nth-child(10)').hide();
    $('td:nth-child(10),th:nth-child(10)').hide();
    $('td:nth-child(8)').hide();
    $('td:nth-child(8),th:nth-child(8)').hide();

    $('td:nth-child(16)').show();
    $('td:nth-child(16),th:nth-child(16)').show();
    var colmun = $('.row_quantity1').val();
    ////console.log('Affichage Zone 2' + colmun1);

  }


    if(filter == "ZONE 3")
  {
    $('#tableau').show();
    $('td:nth-child(7)').hide();
    $('td:nth-child(7),th:nth-child(7)').hide();

    $('td:nth-child(6)').hide();
    $('td:nth-child(6),th:nth-child(6)').hide();
    $('td:nth-child(9)').hide();
    $('td:nth-child(9),th:nth-child(9)').hide();
    $('td:nth-child(10)').hide();
    $('td:nth-child(10),th:nth-child(10)').hide();
    $('td:nth-child(8)').show();
    $('td:nth-child(8),th:nth-child(8)').show();

    $('td:nth-child(16)').show();
    $('td:nth-child(16),th:nth-child(16)').show();

    var colmun2 = $('.row_quantity2').val();
    ////console.log('Affichage Zone 3' + colmun2);
  }
  

    if(filter == "ZONE 4")
  {
    $('#tableau').show();
    $('td:nth-child(7)').hide();
    $('td:nth-child(7),th:nth-child(7)').hide();
    $('td:nth-child(6)').hide();
    $('td:nth-child(6),th:nth-child(6)').hide();
    $('td:nth-child(9)').show();
    $('td:nth-child(9),th:nth-child(9)').show();
    $('td:nth-child(10)').hide();
    $('td:nth-child(10),th:nth-child(10)').hide();
    $('td:nth-child(8)').hide();
    $('td:nth-child(8),th:nth-child(8)').hide();

    $('td:nth-child(16)').show();
    $('td:nth-child(16),th:nth-child(16)').show();
  }


    if(filter == "ZONE 5")
  {
    $('#tableau').show();
    $('td:nth-child(7)').hide();
    $('td:nth-child(7),th:nth-child(7)').hide();
    $('td:nth-child(6)').hide();
    $('td:nth-child(6),th:nth-child(6)').hide();
    $('td:nth-child(9)').hide();
    $('td:nth-child(9),th:nth-child(9)').hide();
    $('td:nth-child(10)').show();
    $('td:nth-child(10),th:nth-child(10)').show();
    $('td:nth-child(8)').hide();
    $('td:nth-child(8),th:nth-child(8)').hide();

    $('td:nth-child(16)').show();
    $('td:nth-child(16),th:nth-child(16)').show();
  }


    if(filter == "ZONE 1")
  {
    $('#tableau').show();
    $('td:nth-child(7)').hide();
    $('td:nth-child(7),th:nth-child(7)').hide();
    $('td:nth-child(6)').show();
    $('td:nth-child(6),th:nth-child(6)').show();
    $('td:nth-child(9)').hide();
    $('td:nth-child(9),th:nth-child(9)').hide();
    $('td:nth-child(10)').hide();
    $('td:nth-child(10),th:nth-child(10)').hide();
    $('td:nth-child(8)').hide();
    $('td:nth-child(8),th:nth-child(8)').hide();

    $('td:nth-child(16)').show();
    $('td:nth-child(16),th:nth-child(16)').show();
  }

    if(filter == "CHOISIR LA ZONE")
  { 
    $('#tableau').show();
    $('td:nth-child(7)').hide();
    $('td:nth-child(7),th:nth-child(7)').hide();
    $('td:nth-child(6)').hide();
    $('td:nth-child(6),th:nth-child(6)').hide();
    $('td:nth-child(9)').hide();
    $('td:nth-child(9),th:nth-child(9)').hide();
    $('td:nth-child(10)').hide();
    $('td:nth-child(10),th:nth-child(10)').hide();
    $('td:nth-child(8)').hide();
    $('td:nth-child(8),th:nth-child(8)').hide();

    $('td:nth-child(16)').hide();
    $('td:nth-child(16),th:nth-child(16)').hide();
  }


  table = document.getElementById("tableau");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[14];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
//---------------------------------------------------------------------

//Filter With Taks
function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("liste");
  filter = input.value.toUpperCase();
  table = document.getElementById("tableau");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[15];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


function test3()
{
  myFunction2();
}

