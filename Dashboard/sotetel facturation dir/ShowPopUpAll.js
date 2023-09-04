
function AfficherArticlesPOPUPALL(projectName,identAttachement)
{


      

            tableaux = document.getElementById("tableauxDeFacturation");
            tr11 = tableaux.getElementsByTagName("tr");
            if(tr11.length>0){
            $('#tableauxDeFacturation tbody').empty();
            }


  var genereAllAttachmentConsult = genereAllAttachmentConsult || [];
var loadWBSUrlAttachmentConsult = _spPageContextInfo.siteAbsoluteUrl + "/"+projectName+"/_api/web/lists/getbytitle('Liste_Attachements')/items?$filter=Id eq '"+identAttachement+"'";

function RecuperationDataTableAttachmentConsult() {

        $.ajax({
                     url: loadWBSUrlAttachmentConsult,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            genereAllAttachmentConsult = genereAllAttachmentConsult.concat(data.d.results);
                                            if (data.d.__next) {
                                              loadWBSUrlAttachmentConsult = data.d.__next;
                                              RecuperationDataTableAttachmentConsult();
                                            }

                          var codeProjetImpr;
                          var ProjetImpr;
                          var ReceptionImpr;
                          var TVAImpr;

                          var AppelImpr;
                          var POImpr;
                          var ClientImpr;
                          var AttachementsImpr;
                          var beneficierImprr;          

                   $.each(genereAllAttachmentConsult, function(key, value) 
                    {
                      moment.locale('fr');
                        
                        ProjetImpr = $("#ProjectAttachement").text();
                        ReceptionImpr = value.PVRepEdit; 
                        beneficierImprr = value.Beneficier;
                        
                        AppelImpr =value.AppelIdent;
                        

                        ClientImpr =value.clientEdit;

                        AttachementsImpr =value.codeEdit;

                    });
                        
                        
                        $("#ProjetImpr").html(ProjetImpr);
                        $("#ReceptionImpr").html(ReceptionImpr);
                        $("#beneficierImpr").html(beneficierImprr);

                        $("#AppelImpr").html(AppelImpr);
                        
                        $("#ClientImpr").html(ClientImpr);
                        $("#AttachementsImpr").html(AttachementsImpr);


                                    //$("#RegionImpr").html(Region);

/*
                                    $("#ActiviteImpr").html(activiteTabImpr);
*/
               }
           });
    }
    RecuperationDataTableAttachmentConsult();







  //Récuperer des données du projet 
function GetDATAPoCodeProjet() {

        var data =  $.ajax({ url: _spPageContextInfo.webServerRelativeUrl + "/_api/ProjectData/[en-US]/Projects",
                                                                                               
            type: "GET",
            dataType: "json",
            headers: {
                "Accept": "application/json; odata=verbose"}});
                  var listItemInfoPO = "";
                  var listItemInfoCODEPROJET  = "";


                
                data.done(function (data,textStatus, jqXHR){

                    if (data.d.results == undefined) {  
                        data.d.results = new Array();
                        data.d.results[0] = new Object();

                        data.d.results[0] = data.d.CodeOracle;
                        data.d.results[0] = data.d.PO;


                        moment.locale('fr');

                        var codeProjetImpr = data.d.CodeOracle;
                        var POImpr = data.d.PO;



                    listItemInfoPO +=  POImpr;  
                    listItemInfoCODEPROJET  += codeProjetImpr;



                $("#codeProjetImpr").html(listItemInfoCODEPROJET);
                $("#POImpr").html(listItemInfoPO);


                

                

            }
        });
    }GetDATAPoCodeProjet();


  //console.log("ident " + ident);
  var tablePaginationArticleAttPOPUP = tablePaginationArticleAttPOPUP ||[]; 
   var UrlArticleLoadedAttPOPUP = _spPageContextInfo.webServerRelativeUrl + "/"+projectName+"/_api/web/lists/getbytitle('Liste_Article_Attachement')/items?$filter=id_Attachement eq '"+identAttachement+"'"; 
   
  function LoadAllArticleSavedRegistringAttPOPUP()
  {
    var sommePrixArticle=0;

    $.ajax({
                     url: UrlArticleLoadedAttPOPUP,
                                                                                               
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function (data) {
                                            tablePaginationArticleAttPOPUP = tablePaginationArticleAttPOPUP.concat(data.d.results);
                                            if (data.d.__next) {
                                              UrlArticleLoadedAttPOPUP = data.d.__next;
                                              LoadAllArticleSavedRegistringAttPOPUP();
                                            }

                                              var CodeArticleTab=[];
                                              var libArticleTab=[];
                                              var quantiteArticleTab=[];
                                              var prixVenteTab=[];
                                              var montantTotalTab=[];
                                              var montantTTCTab=[];
                                              var unityTab = [];
                                              var prixTVATAB = [];
                                              var tvaRsArticleTab = [];

                   $.each(tablePaginationArticleAttPOPUP, function(key, value) 
                    {
                      var CodeArticle = value.CodeArticle;
                      var unity = value.unity;
                      var MontantTVA = value.MontantTVA;
                      var tvaRsArticle = value.tvaRsArticle;
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

                      CodeArticleTab.push(CodeArticle);
                      libArticleTab.push(libArticle);
                      quantiteArticleTab.push(quantiteArticle);
                      prixVenteTab.push(prixVente);
                      montantTotalTab.push(montantTotal);
                      montantTTCTab.push(montantTTC);
                      unityTab.push(unity);
                      prixTVATAB.push(MontantTVA);
                      tvaRsArticleTab.push(tvaRsArticle);


                    });

                   TabFinalResourcesToPrintPOPUP(CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,montantTTCTab,unityTab,prixTVATAB,tvaRsArticleTab);

                   
          }   
          });

  }LoadAllArticleSavedRegistringAttPOPUP();


function TabFinalResourcesToPrintPOPUP(CodeArticleTab,libArticleTab,quantiteArticleTab,prixVenteTab,montantTotalTab,montantTTCTab,unityTab,prixTVATAB,tvaRsArticleTab)
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
                        tr.append("<td id=''>"+tvaRsArticleTab[i]+"%</td>");
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
      sum_TVA += $(this).children().eq(8).text() * 1;
      sum_TTC += $(this).children().eq(9).text() * 1;

    }); 

    $("#montantHTImpr").text(parseFloat(sum_HT).toFixed(3) + " DT");
    $("#montantTVAImpr").text(parseFloat(sum_TVA).toFixed(3) + " DT");
    $("#montantTTCImpr").text(parseFloat(sum_TTC).toFixed(3) + " DT");

  });


}


}