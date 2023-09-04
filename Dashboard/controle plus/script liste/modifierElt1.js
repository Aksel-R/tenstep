
<script src="/sites/CapitalHumain/_catalogs/masterpage/jquery-1.7.2.min.js" type="text/javascript"></script>

<script type="text/javascript">
var loginName = "";
var userid = _spPageContextInfo.userId;
setTimeout(GetCurrentUser,5);



function GetCurrentUser() {
var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";



var requestHeaders = { "accept" : "application/json;odata=verbose" };



$.ajax({
url : requestUri,
contentType : "application/json;odata=verbose",
headers : requestHeaders,
success : onSuccess,
error : onError
});
}



function onSuccess(data, request) {

  $('nobr:contains("Agence")').closest('tr').show();

  $('nobr:contains("Date Journée")').closest('tr').show();

    document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField0').disabled = true;

    document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField1').disabled = true;

  document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2').disabled = true;
    
    document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField3').disabled = true;

    document.getElementById("Agence_5f113607-b097-44e8-b2be-0fd836e3bc80_$LookupField").disabled = true;


document.getElementById("Date_x0020_Journ_x00e9_e_45e3763a-8af7-42ff-9969-265f64ea17d7_$DateTimeFieldDate").disabled = true;
document.getElementById("Date_x0020_r_x00e9_ception_x0020_0dfdfbd9-32fa-4f2f-aac0-2bd1226efe87_$DateTimeFieldDate").disabled = true;

document.getElementById("Directeur_x0020_Agence_ebe45843-68b8-4eca-85a0-cb1afcab13a6_$ClientPeoplePicker").disabled = true;

document.getElementById("Adjoint_x0020_Directeur_x0020_Ag_da955ff2-7fe5-40ec-beae-c966f9e0df18_$ClientPeoplePicker_HiddenInput").disabled = true;
    $('nobr:contains("Description avis DCPR")').closest('tr').hide(); 
$('nobr:contains("Avis DCPR")').closest('tr').hide(); 
    
    var loginName = data.d.Title;

  var id = data.d.Id;
  // mesAgences(loginName,id);
  loadDossPhaseEtudeCom(id,loginName);
  
    

    // document.getElementById("Ribbon.ListForm.Edit.Commit.Publish-Large").onclick = function(){
    //  radioButton2=document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2');
    //  if (radioButton2.checked){
    //    document.getElementById('Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_$RadioButtonChoiceField0').checked=true;
        
    //  }
    // }
     
    // document.getElementById("ctl00_ctl33_g_d2ddba10_cbe2_4ae5_b7d9_fcf872a497b6_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").onclick=function(){
    //  //    radioButton2=document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2');
    //  // if (radioButton2.checked){
    //    document.getElementById('Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_$RadioButtonChoiceField0').checked=true;
    //    console.log("Statut en cours")
    //     // }
   //  };
    
    $('#Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_ChoiceRadioTable input').on('change', function() {
        radioButton2=document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2');
      if (radioButton2.checked){
        document.getElementById('Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_$RadioButtonChoiceField0').checked=true;
        console.log("Statut en cours")
      } 
    });

    $('#Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_ChoiceRadioTable input').on('change', function() {
        radioButton3=document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2');
      if (radioButton3.checked){
        document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField0').checked=true;
        console.log("Avis DCPR en Instance")
      } 
    });
  
    // document.getElementById("Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_$RadioButtonChoiceField1").onclick=function(){
    //  //    radioButton2=document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2');
    //  // if (radioButton2.checked){
    //    document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField0').checked=true;
    //    console.log("Avis En instance");
    //  // }
   //  };
  
    
}



function onError(error) {
alert(error);
}

 var responseDossPhaseEtudeCom=responseDossPhaseEtudeCom || [];
        function loadDossPhaseEtudeCom(id,loginName){
//console.log("loginName= " + loginName);
        var urlDossPhaseEtudeCom= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/GetUserById('"+id+"')/Groups";
        //console.log(urlDossPhaseEtudeCom);
          $.ajax({
                        url: urlDossPhaseEtudeCom,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
responseDossPhaseEtudeCom = responseDossPhaseEtudeCom.concat(data.d.results);
if (data.d.__next) {
     urlDossPhaseEtudeCom = data.d.__next;
    loadDossPhaseEtudeCom(id,loginName);
    
}
                            
var loggedIn=$(".o365cs-me-tile-nophoto-username").first().text();  
//console.log("loggedIn= "+loggedIn);   

var creatBy=$(".ms-peopleux-userdisplink").first().text();
                                
                            var OwnerTitle="";
                            var arrGrp=[];
                            $.each(responseDossPhaseEtudeCom, function (key, value) {

                                var titre=value.Title;
                                
                                OwnerTitle = value.OwnerTitle;
                                console.log("loginName= "+loginName);
                                arrGrp.push(titre); 
                                                                 
                              });

                                 //console.log("arrGrp= "+arrGrp);  
                                var grp0="Contrôleurs Permanents Centraux";
                                 if (arrGrp.indexOf(grp0)>-1) {
                                  if (id!=578) {
                                    allDisabled();
                                  }
                                  
                                  radioButton1=document.getElementById('Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_$RadioButtonChoiceField1');

                                      if (radioButton1.checked){
                                        document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField0').disabled = false;

                                        document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField1').disabled = false;

                                        document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2').disabled = false;
                                        
                                        document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField3').disabled = false;

                                        //$('nobr:contains("Description avis DCPR")').closest('tr').show(); 
                                         
                                        console.log('Contrôleurs Permanents Centraux')


                                      }
                                    $('nobr:contains( "Agence")').closest('tr').show();
                                    //Agence_5f113607-b097-44e8-b2be-0fd836e3bc80_$LookupField

                                    
                                                      $('nobr:contains("Date Journée")').closest('tr').show();
                                                      $('nobr:contains("Directeur Agence")').closest('tr').show();
                                                      $('nobr:contains("Adjoint Directeur Agence")').closest('tr').show();
                                                      $('nobr:contains("Intérim")').closest('tr').hide();
                                                      //$('nobr:contains("Date réception de la Journée physique")').closest('tr').hide();
                                                      //$('nobr:contains("A. Vérification de la régularité des opérations effectuées au niveau des différentes positions du Point de Vente")').closest('tr').hide();
                                                      //$('nobr:contains("A.1. Pièces de base Correctement collectées")').closest('tr').hide();
                                                      // $('nobr:contains("Observation Point A.1")').closest('tr').hide();
                                                      // //$('nobr:contains("A.2. Pièces de Base dûment signées")').closest('tr').hide();
                                                      // $('nobr:contains("Observation Point A.2")').closest('tr').hide();
                                                      // //$('nobr:contains("A.3. Contrôle Exhaustif des Opérations")').closest('tr').hide();
                                                      // $('nobr:contains("Observation Point A.3")').closest('tr').hide();
                                                      // //$('nobr:contains("A.4 Signature des opérations de retrait")').closest('tr').hide();
                                                      // $('nobr:contains("Observation Point A.4")').closest('tr').hide();
                                                      // //$('nobr:contains("A.5 Conformité des crédits débloqués")').closest('tr').hide();
                                                      // $('nobr:contains("Observation Point A.5")').closest('tr').hide();
                                                      // //$('nobr:contains("A.6 Redressement des anomalies relevées")').closest('tr').hide();
                                                      // $('nobr:contains("Observation Point A.6")').closest('tr').hide();
                                                      // //$('nobr:contains("A.7 Signature des journaux de contrôle")').closest('tr').hide();
                                                      // $('nobr:contains("Observation Point A.7")').closest('tr').hide();
                                                      // //$('nobr:contains("A.8 Concordance des journaux de contrôle")').closest('tr').hide();
                                                      //  $('nobr:contains("Observation Point A.8")').closest('tr').hide();
                                                      //  //$('nobr:contains("B. Contrôle des arrêtés de caisse")').closest('tr').hide();
                                                      //  //$('nobr:contains("B.1. Conformité des Inventaires devises dinars")').closest('tr').hide();

                                                      //  $('nobr:contains("Observation Point B.1")').closest('tr').hide();
                                                      //   //$('nobr:contains("B.2. Alimentation Nivellement DAB GAB ")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point B.2")').closest('tr').hide();
                                                      //   $('nobr:contains("B.3 Alimentation Nivellement effectués par IBS")').closest('tr').show();
                                                      //   $('nobr:contains("Observation Point B.3")').closest('tr').hide();
                                                      //   //$('nobr:contains("B.4 Vérification des arrêtés de caisse ")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point B.4")').closest('tr').hide();
                                                      //   //$('nobr:contains("B.5. Signature des arrêtés de caisse")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point B.5")').closest('tr').hide();
                                                      //   //$('nobr:contains("B.6. Contrôle des inventaires de caisse")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point B.6")').closest('tr').hide();
                                                      //   //$('nobr:contains("B.7. Contrôle des éventuels écarts de caisse")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point B.7")').closest('tr').hide();
                                                      //   //$('nobr:contains("B.8. Rapports des éventuels écarts de caisse")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point B.8")').closest('tr').hide();
                                                      //   //$('nobr:contains("C. Vérification des journaux de contrôle de la journée")').closest('tr').hide();
                                                      //   //$('nobr:contains("C.1. Contrôle du journal des opérations annulées")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point C.1")').closest('tr').hide();
                                                      //   //$('nobr:contains("C.2. Contrôle du journal des opérations forcées")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point C.2")').closest('tr').hide();
                                                      //   //$('nobr:contains("C.3. Contrôle des opérations diverses")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point C.3")').closest('tr').hide();
                                                      //   //$('nobr:contains("C.4. Contrôle des opérations traitées manuellement")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point C.4")').closest('tr').hide();
                                                      //   $('nobr:contains("C.5. Contrôle des nouvelles ouvertures de comptes pour des besoins non professionnels")').closest('tr').show();

                                                      //   $('nobr:contains("Observation Point C.5")').closest('tr').hide();
                                                      //   //$('nobr:contains("C.6. Contrôle des placements")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point C.6")').closest('tr').hide();
                                                      //   //$('nobr:contains("C.7. Contrôle des états de la Télé-compensation")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point C.7")').closest('tr').hide();
                                                      //   //$('nobr:contains("C.8. Contrôle des chèques certifiés")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point C.8")').closest('tr').hide();
                                                      //   $('nobr:contains("C.9. Contrôle du journal de fonds")').closest('tr').hide();

                                                      //   $('nobr:contains("Observation Point C.9")').closest('tr').hide();
                                                      //   //$('nobr:contains("C.10. Contrôle des comptes d’attente")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point C.10")').closest('tr').hide();
                                                      //   //$('nobr:contains("C.11. Contrôle des dépassements en compte")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point C.11")').closest('tr').hide();
                                                      //   //$('nobr:contains("C.12. Contrôle de L’état de réactivation des «comptes dormants»")').closest('tr').hide();
                                                        
                                                       
                                                      //   $('nobr:contains("Observation Point C.12")').closest('tr').hide();
                                                        
                                                      //   //$('nobr:contains("D. Contrôle de la journée comptable")').closest('tr').hide();
                                                      //   //$('nobr:contains("D.1. Contrôle des écritures comptables manuelles")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point D.1")').closest('tr').hide();
                                                      //   //$('nobr:contains("D.2. Contrôle Solde des arrêtés de caisses")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point D.2")').closest('tr').hide();
                                                      //   //$('nobr:contains("D.3. Contrôle des écritures non générés")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point D.3")').closest('tr').hide();
                                                      //   //$('nobr:contains("D.4. Contrôle du journal de contrôle final")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point D.4")').closest('tr').hide();
                                                      //   //$('nobr:contains("D.5. Contrôle des comptes de liaisons électroniques")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point D.5")').closest('tr').hide();
                                                      //   //$('nobr:contains("E. Etablissement du compte rendu de contrôle")').closest('tr').hide();
                                                      //   //$('nobr:contains("E.1. Vérification du compte rendu de contrôle")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point E.1")').closest('tr').hide();
                                                      //   //$('nobr:contains("E.2. Contrôle des états récapitulatifs")').closest('tr').hide();
                                                      //   $('nobr:contains("Observation Point E.2")').closest('tr').hide();
                                                      //   //$('nobr:contains("Commentaires")').closest('tr').hide();
                                                        
                                                        
                                                        
                                                        $('nobr:contains("Statut Régional")').closest('tr').hide();
                                                        $('nobr:contains("Avis DCPR")').closest('tr').show();
                                                        //$("#B_x002e_3_x0020_Alimentation_x00").hide();
                                                        //$("#B_x002e_3_x0020_Alimentation_x00_72c158d1-e1fc-4b00-8fc1-779e47f235da_ChoiceRadioTable").hide();
                                                        $(".ms-metadata").hide();

                                                        //$("#C_x002e_5_x002e__x0020_Contr_x00").hide();
                                                        //$("#C_x002e_5_x002e__x0020_Contr_x00_4f293d85-b63e-46b2-ad2c-718d6f7b1f91_ChoiceRadioTable").hide();

                                                        //$("#C_x002e_9_x002e__x0020_Contr_x00").hide();
                                                        //$("#C_x002e_9_x002e__x0020_Contr_x00_d90531d2-f8d7-47de-9bbd-82a1c7562890_ChoiceRadioTable").hide();

                                                   }

                                 radioButton01=document.getElementById('Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_$RadioButtonChoiceField1');
                                 var grp1="Contrôleurs Régionaux";
                    //console.log("test "+arrGrp);
                    if ((radioButton01.checked)&&(arrGrp.indexOf(grp1)>-1)){

                      $('.ms-ButtonHeightWidth').hide();
                        $('.ms-cui-tabContainer').hide();
                    }
                        }
                    });
        }
 
      


//  function mesAgences(loginName,id){
//  var responseMesAgences=responseMesAgences||[];
//  var urlAgences=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items";
//  function LoadMesAgences() {
//             var nbre = 0;

//             $.ajax({
//                 url: urlAgences,
//                 method: "GET",
//                 dataType: "json",
//                 headers: { Accept: "application/json;odata=verbose" },
//                 success: function (data) {
//                     responseMesAgences = responseMesAgences.concat(data.d.results);
//                     if (data.d.__next) {
//                         urlAgences = data.d.__next;
//                         LoadMesAgences();
//                     }
//                     var arrMesAgences=[];
//                     $.each(responseMesAgences, function (key, value) {
//                         var idControleur=value.Contr_x00f4_leur_x0020_R_x00e9_gId;
//                         var nomAgence=value.Title;
//                         if (id==idControleur) {
//                          arrMesAgences.push(nomAgence);
//                         }
//                     });
//                    //console.log("arrMesAgences= "+arrMesAgences);
                    
                    
//                    mySelect=document.getElementById('Agence_5f113607-b097-44e8-b2be-0fd836e3bc80_$LookupField');
//                     removeFromSelect(mySelect, arrMesAgences);
//                 }
//             });
//         }
//         LoadMesAgences();
// }

//       function removeFromSelect(yourSelect, arrOptionsVal)
//    {
//        $(yourSelect).find('option').filter(function(){
//             return arrOptionsVal.indexOf(this.text) == -1;
//        }).remove();      
//    } 


function allDisabled() {
  $(document).ready(function(){
        //-----------A.1
        $('input#Pi_x00e8_ces_x0020_de_x0020_base_577a5e86-a166-453e-a801-9a6f13729368_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#Pi_x00e8_ces_x0020_de_x0020_base_577a5e86-a166-453e-a801-9a6f13729368_$RadioButtonChoiceField1').prop( "disabled", true );        
        $('input#Motifs_x0020_Non_x002d_Conformit_b6b4ecbe-3595-4310-b4f7-6d6fce1c3bea_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit_b6b4ecbe-3595-4310-b4f7-6d6fce1c3bea_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit_b6b4ecbe-3595-4310-b4f7-6d6fce1c3bea_MultiChoiceOption_2').prop( "disabled", true );
        //-------------------A.2
        $('input#_x0032__x002e__x0020_Pi_x00e8_ce_24ed743d-e387-4263-9b5c-3d49a6a39c38_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#_x0032__x002e__x0020_Pi_x00e8_ce_24ed743d-e387-4263-9b5c-3d49a6a39c38_$RadioButtonChoiceField1').prop( "disabled", true );   
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_3').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_4').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_5').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_6').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_7').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_8').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_9').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_10').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_11').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_12').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_13').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_14').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_15').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_16').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_17').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_18').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_19').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52d_MultiChoiceOption_20').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit0_12ce18ad-86f8-40a6-a2ac-e8e2041ef52dFillInRadio').prop( "disabled", true );
        //-----------A.3
        $('input#Contr_x00f4_le_x0020_Exhaustif_x_e100cf71-8d03-44f4-86c8-756020a6d531_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#Contr_x00f4_le_x0020_Exhaustif_x_e100cf71-8d03-44f4-86c8-756020a6d531_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit1_6d9a3d3e-66e7-4e62-a9d1-5401ead17a40_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit1_6d9a3d3e-66e7-4e62-a9d1-5401ead17a40_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit1_6d9a3d3e-66e7-4e62-a9d1-5401ead17a40_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit1_6d9a3d3e-66e7-4e62-a9d1-5401ead17a40_MultiChoiceOption_3').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit1_6d9a3d3e-66e7-4e62-a9d1-5401ead17a40_MultiChoiceOption_4').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit1_6d9a3d3e-66e7-4e62-a9d1-5401ead17a40_MultiChoiceOption_5').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit1_6d9a3d3e-66e7-4e62-a9d1-5401ead17a40_MultiChoiceOption_6').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit1_6d9a3d3e-66e7-4e62-a9d1-5401ead17a40_MultiChoiceOption_7').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit1_6d9a3d3e-66e7-4e62-a9d1-5401ead17a40_MultiChoiceOption_8').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit1_6d9a3d3e-66e7-4e62-a9d1-5401ead17a40_MultiChoiceOption_9').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit1_6d9a3d3e-66e7-4e62-a9d1-5401ead17a40_MultiChoiceOption_10').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit1_6d9a3d3e-66e7-4e62-a9d1-5401ead17a40FillInRadio').prop( "disabled", true );
        //-----------A.4
        $('input#A_x002e_4_x0020_Signature_x0020__5ffd74d9-cb15-42cc-9480-3710bba7e812_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#A_x002e_4_x0020_Signature_x0020__5ffd74d9-cb15-42cc-9480-3710bba7e812_$RadioButtonChoiceField1').prop( "disabled", true );   
        $('input#Motifs_x0020_Non_x002d_Conformit2_50094f2c-a729-42aa-84aa-0d4788ee0a85_MultiChoiceOption_0').prop( "disabled", true );
        //-----------A.5
        $('input#A_x002e_5_x0020_Conformit_x00e9__af6a83a6-f259-43b4-b2c2-e0936a8d2333_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#A_x002e_5_x0020_Conformit_x00e9__af6a83a6-f259-43b4-b2c2-e0936a8d2333_$RadioButtonChoiceField1').prop( "disabled", true );   
        $('input#Motifs_x0020_Non_x002d_Conformit3_206cdbce-c6c0-4a69-b09b-75bca661447f_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit3_206cdbce-c6c0-4a69-b09b-75bca661447f_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit3_206cdbce-c6c0-4a69-b09b-75bca661447f_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit3_206cdbce-c6c0-4a69-b09b-75bca661447f_MultiChoiceOption_3').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit3_206cdbce-c6c0-4a69-b09b-75bca661447f_MultiChoiceOption_4').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit3_206cdbce-c6c0-4a69-b09b-75bca661447f_MultiChoiceOption_5').prop( "disabled", true );
        //-----------A.6
        $('input#A_x002e_6_x0020_Redressement_x00_c53e891e-f336-4726-b184-585386543d69_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#A_x002e_6_x0020_Redressement_x00_c53e891e-f336-4726-b184-585386543d69_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit4_e418815f-cc30-434f-946b-90dcd40a7085_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit4_e418815f-cc30-434f-946b-90dcd40a7085_MultiChoiceOption_1').prop( "disabled", true );
        //-----------A.7
        $('input#A_x002e_7_x0020_Signature_x0020__fd6c834f-0456-4097-9453-2e10defa2be7_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#A_x002e_7_x0020_Signature_x0020__fd6c834f-0456-4097-9453-2e10defa2be7_$RadioButtonChoiceField1').prop( "disabled", true );   
        $('input#Motifs_x0020_Non_x002d_Conformit5_0c6da0b4-da9d-47d7-9c24-d2b4db1e7466_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit5_0c6da0b4-da9d-47d7-9c24-d2b4db1e7466_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit5_0c6da0b4-da9d-47d7-9c24-d2b4db1e7466_MultiChoiceOption_2').prop( "disabled", true );
        //-----------A.8
        $('input#A_x002e_8_x0020_Concordance_x002_86ec00c3-38f0-4931-9762-5ec8cc489f70_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#A_x002e_8_x0020_Concordance_x002_86ec00c3-38f0-4931-9762-5ec8cc489f70_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit6_1acaeb3f-e8b8-4a59-b470-e0613c4578e3_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit6_1acaeb3f-e8b8-4a59-b470-e0613c4578e3_MultiChoiceOption_1').prop( "disabled", true );
        //-----------B.1
        $('input#B_x002e_1_x002e__x0020_Conformit_57b7ebee-c3bd-4e7f-af0f-0ef139d21281_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#B_x002e_1_x002e__x0020_Conformit_57b7ebee-c3bd-4e7f-af0f-0ef139d21281_$RadioButtonChoiceField1').prop( "disabled", true );   
        $('input#Motifs_x0020_Non_x002d_Conformit7_49439aed-d5c7-4087-ab26-301260893313_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit7_49439aed-d5c7-4087-ab26-301260893313_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit7_49439aed-d5c7-4087-ab26-301260893313_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit7_49439aed-d5c7-4087-ab26-301260893313_MultiChoiceOption_3').prop( "disabled", true );
        //-----------B.2
        $('input#B_x002e_2_x002e__x0020_Alimentat_ee61cd21-6227-4772-82d2-8a3c16d31541_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#B_x002e_2_x002e__x0020_Alimentat_ee61cd21-6227-4772-82d2-8a3c16d31541_$RadioButtonChoiceField1').prop( "disabled", true );   
        $('input#Motifs_x0020_Non_x002d_Conformit8_449c28cf-6a91-4db4-991b-85fa7f6e02e1_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit8_449c28cf-6a91-4db4-991b-85fa7f6e02e1_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit8_449c28cf-6a91-4db4-991b-85fa7f6e02e1_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit8_449c28cf-6a91-4db4-991b-85fa7f6e02e1_MultiChoiceOption_3').prop( "disabled", true );
        //-----------B.3
        $('input#B_x002e_3_x0020_Alimentation_x00_72c158d1-e1fc-4b00-8fc1-779e47f235da_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#B_x002e_3_x0020_Alimentation_x00_72c158d1-e1fc-4b00-8fc1-779e47f235da_$RadioButtonChoiceField1').prop( "disabled", true );   
        $('input#Motifs_x0020_Non_x002d_Conformit9_57737278-6dd0-4297-87bf-4399f1e1c847_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit9_57737278-6dd0-4297-87bf-4399f1e1c847_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit9_57737278-6dd0-4297-87bf-4399f1e1c847_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit9_57737278-6dd0-4297-87bf-4399f1e1c847_MultiChoiceOption_3').prop( "disabled", true );
        //-----------B.4
        $('input#B_x002e_4_x0020_V_x00e9_rificati_ce89894c-4b4a-4fb9-aa5d-b60f3070d7ca_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#B_x002e_4_x0020_V_x00e9_rificati_ce89894c-4b4a-4fb9-aa5d-b60f3070d7ca_$RadioButtonChoiceField1').prop( "disabled", true );   
        $('input#Motifs_x0020_Non_x002d_Conformit10_66a9a208-0e5e-4572-bae5-7b03ae26f0b2_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit10_66a9a208-0e5e-4572-bae5-7b03ae26f0b2_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit10_66a9a208-0e5e-4572-bae5-7b03ae26f0b2_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit10_66a9a208-0e5e-4572-bae5-7b03ae26f0b2_MultiChoiceOption_3').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit10_66a9a208-0e5e-4572-bae5-7b03ae26f0b2_MultiChoiceOption_4').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit10_66a9a208-0e5e-4572-bae5-7b03ae26f0b2_MultiChoiceOption_5').prop( "disabled", true );
        //-----------B.5
        $('input#B_x002e_7_x002e__x0020_Contr_x00_f4ae95db-d0d0-41ee-a900-6bfd8dd6e5ef_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#B_x002e_7_x002e__x0020_Contr_x00_f4ae95db-d0d0-41ee-a900-6bfd8dd6e5ef_$RadioButtonChoiceField1').prop( "disabled", true ); 
        $('input#Motifs_x0020_Non_x002d_Conformit11_92b41ce2-a064-4bc7-81d8-d647d33ee1e2_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit11_92b41ce2-a064-4bc7-81d8-d647d33ee1e2_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit11_92b41ce2-a064-4bc7-81d8-d647d33ee1e2_MultiChoiceOption_2').prop( "disabled", true );
        //-----------B.6
        $('input#B_x002e_8_x002e__x0020_Rapports__07c86ee3-865a-455c-8da8-37c71a70e1a9_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#B_x002e_8_x002e__x0020_Rapports__07c86ee3-865a-455c-8da8-37c71a70e1a9_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit12_d0afaf93-7e82-4fd3-84a0-b38a85e537cb_MultiChoiceOption_0').prop( "disabled", true );
        //-----------C.1
        $('input#C_x002e_1_x002e__x0020_Contr_x00_83f65b15-ba70-4caf-aaa5-aeddc3dd8d13_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#C_x002e_1_x002e__x0020_Contr_x00_83f65b15-ba70-4caf-aaa5-aeddc3dd8d13_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit13_7e61f6cf-99b5-47db-a591-e88ee9775f8d_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit13_7e61f6cf-99b5-47db-a591-e88ee9775f8d_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit13_7e61f6cf-99b5-47db-a591-e88ee9775f8d_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit13_7e61f6cf-99b5-47db-a591-e88ee9775f8d_MultiChoiceOption_3').prop( "disabled", true );
        //-----------C.2
        $('input#C_x002e_2_x002e__x0020_Contr_x00_7262cf69-0bc2-48be-b4ff-dad268dcc4a5_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#C_x002e_2_x002e__x0020_Contr_x00_7262cf69-0bc2-48be-b4ff-dad268dcc4a5_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit14_65e44b6e-71da-452e-8df9-dcfb20d6b272_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit14_65e44b6e-71da-452e-8df9-dcfb20d6b272_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit14_65e44b6e-71da-452e-8df9-dcfb20d6b272_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit14_65e44b6e-71da-452e-8df9-dcfb20d6b272_MultiChoiceOption_3').prop( "disabled", true );
        //-----------C.3
        $('input#C_x002e_3_x002e__x0020_Contr_x00_ffe7b2f3-dcc7-442b-af03-1c8c8aced7e3_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#C_x002e_3_x002e__x0020_Contr_x00_ffe7b2f3-dcc7-442b-af03-1c8c8aced7e3_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit15_eed589a2-d1d3-4c3e-84b2-77de75d56aca_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit15_eed589a2-d1d3-4c3e-84b2-77de75d56aca_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit15_eed589a2-d1d3-4c3e-84b2-77de75d56aca_MultiChoiceOption_2').prop( "disabled", true );
        //-----------C.4
        $('input#C_x002e_4_x002e__x0020_Contr_x00_eb5b32bb-aeaf-474d-a69b-ba75c92f688f_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#C_x002e_4_x002e__x0020_Contr_x00_eb5b32bb-aeaf-474d-a69b-ba75c92f688f_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit16_af57f052-9317-4d7f-b1bd-3a94615dbfea_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit16_af57f052-9317-4d7f-b1bd-3a94615dbfea_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit16_af57f052-9317-4d7f-b1bd-3a94615dbfea_MultiChoiceOption_2').prop( "disabled", true );
        //-----------C.5
        $('input#C_x002e_5_x002e__x0020_Contr_x00_4f293d85-b63e-46b2-ad2c-718d6f7b1f91_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#C_x002e_5_x002e__x0020_Contr_x00_4f293d85-b63e-46b2-ad2c-718d6f7b1f91_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit17_c9135755-b342-4c90-b4f9-508f7d854022_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit17_c9135755-b342-4c90-b4f9-508f7d854022_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit17_c9135755-b342-4c90-b4f9-508f7d854022_MultiChoiceOption_2').prop( "disabled", true );
        //-----------C.6
        $('input#C_x002e_6_x002e__x0020_Contr_x00_5fd95118-1ae6-45bd-a8f3-b4cc4ea51886_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#C_x002e_6_x002e__x0020_Contr_x00_5fd95118-1ae6-45bd-a8f3-b4cc4ea51886_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit18_de5354a7-d463-4f81-b1f6-b1c73a030873_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit18_de5354a7-d463-4f81-b1f6-b1c73a030873_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit18_de5354a7-d463-4f81-b1f6-b1c73a030873_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit18_de5354a7-d463-4f81-b1f6-b1c73a030873_MultiChoiceOption_3').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit18_de5354a7-d463-4f81-b1f6-b1c73a030873_MultiChoiceOption_4').prop( "disabled", true );
        //-----------C.7
        $('input#C_x002e_7_x002e__x0020_Contr_x00_ad8595bd-5f99-4c08-b576-db1a01b4ecd5_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#C_x002e_7_x002e__x0020_Contr_x00_ad8595bd-5f99-4c08-b576-db1a01b4ecd5_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit19_f5967da3-8bf1-494f-864c-deb02e2e1b22_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit19_f5967da3-8bf1-494f-864c-deb02e2e1b22_MultiChoiceOption_1').prop( "disabled", true );
        //-----------C.8
        $('input#C_x002e_8_x002e__x0020_Contr_x00_4ffbd96f-5d49-4b8c-8000-d221750dba9b_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#C_x002e_8_x002e__x0020_Contr_x00_4ffbd96f-5d49-4b8c-8000-d221750dba9b_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit20_6c7cc9b9-3608-484b-8e7f-5b96b7aa8ecb_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit20_6c7cc9b9-3608-484b-8e7f-5b96b7aa8ecb_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit20_6c7cc9b9-3608-484b-8e7f-5b96b7aa8ecb_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit20_6c7cc9b9-3608-484b-8e7f-5b96b7aa8ecb_MultiChoiceOption_3').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit20_6c7cc9b9-3608-484b-8e7f-5b96b7aa8ecb_MultiChoiceOption_4').prop( "disabled", true );
        //-----------C.9
        $('input#C_x002e_9_x002e__x0020_Contr_x00_d90531d2-f8d7-47de-9bbd-82a1c7562890_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#C_x002e_9_x002e__x0020_Contr_x00_d90531d2-f8d7-47de-9bbd-82a1c7562890_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit21_6e8b63ac-389a-4682-b4a6-02bdfbb24943_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit21_6e8b63ac-389a-4682-b4a6-02bdfbb24943_MultiChoiceOption_1').prop( "disabled", true );
        //-----------C.10
        $('input#C_x002e_10_x002e__x0020_Contr_x0_c1119c5d-7ad0-42a1-acc8-4688fe3e20c8_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#C_x002e_10_x002e__x0020_Contr_x0_c1119c5d-7ad0-42a1-acc8-4688fe3e20c8_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit22_086070b9-cc8f-4e11-8f4f-336dfdebf8a3_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit22_086070b9-cc8f-4e11-8f4f-336dfdebf8a3_MultiChoiceOption_1').prop( "disabled", true );
        //-----------C.11
        $('input#C_x002e_11_x002e__x0020_Contr_x0_c5f64541-d46b-44a3-a248-2791f75594ab_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#C_x002e_11_x002e__x0020_Contr_x0_c5f64541-d46b-44a3-a248-2791f75594ab_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit23_849a3a21-f071-4535-976a-8bf692043248_MultiChoiceOption_0').prop( "disabled", true );
        //-----------C.12
        $('input#C_x002e_12_x002e__x0020_Contr_x0_fec990f6-bea4-4a0e-83e7-0a466ab92626_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#C_x002e_12_x002e__x0020_Contr_x0_fec990f6-bea4-4a0e-83e7-0a466ab92626_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit24_7cfb3024-ebe2-4e0c-b4e7-dbdce74fb41a_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit24_7cfb3024-ebe2-4e0c-b4e7-dbdce74fb41a_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit24_7cfb3024-ebe2-4e0c-b4e7-dbdce74fb41a_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit24_7cfb3024-ebe2-4e0c-b4e7-dbdce74fb41a_MultiChoiceOption_3').prop( "disabled", true );
        //-----------D.1
        $('input#D_x002e_1_x002e__x0020_Contr_x00_128de752-c4b0-4552-9d5e-4630904c7ff4_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#D_x002e_1_x002e__x0020_Contr_x00_128de752-c4b0-4552-9d5e-4630904c7ff4_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit25_4cc32917-70a9-4bfd-9f02-3d2c1e28890f_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit25_4cc32917-70a9-4bfd-9f02-3d2c1e28890f_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit25_4cc32917-70a9-4bfd-9f02-3d2c1e28890f_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit25_4cc32917-70a9-4bfd-9f02-3d2c1e28890f_MultiChoiceOption_3').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit25_4cc32917-70a9-4bfd-9f02-3d2c1e28890f_MultiChoiceOption_4').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit25_4cc32917-70a9-4bfd-9f02-3d2c1e28890f_MultiChoiceOption_5').prop( "disabled", true );
        //-----------D.2
        $('input#D_x002e_2_x002e__x0020_Contr_x00_a41bf883-9b0b-4d2e-bf85-4381e39648ee_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#D_x002e_2_x002e__x0020_Contr_x00_a41bf883-9b0b-4d2e-bf85-4381e39648ee_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit26_3881c1e1-0c42-4a9f-af62-8f216b5b8783_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit26_3881c1e1-0c42-4a9f-af62-8f216b5b8783_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit26_3881c1e1-0c42-4a9f-af62-8f216b5b8783_MultiChoiceOption_2').prop( "disabled", true );
        //-----------D.3
        $('input#D_x002e_3_x002e__x0020_Contr_x00_d55aff1b-bea4-4778-acfb-ce28abb80cdf_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#D_x002e_3_x002e__x0020_Contr_x00_d55aff1b-bea4-4778-acfb-ce28abb80cdf_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit27_a4c36a9d-83ef-4034-9a2e-ae92050125f1_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit27_a4c36a9d-83ef-4034-9a2e-ae92050125f1_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit27_a4c36a9d-83ef-4034-9a2e-ae92050125f1_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit27_a4c36a9d-83ef-4034-9a2e-ae92050125f1_MultiChoiceOption_3').prop( "disabled", true );
        //-----------D.4
        $('input#D_x002e_4_x002e__x0020_Contr_x00_a20eed36-83f6-4cff-ae07-2100d5a3c7ff_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#D_x002e_4_x002e__x0020_Contr_x00_a20eed36-83f6-4cff-ae07-2100d5a3c7ff_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit28_e45f49ef-f528-46ef-a2a6-2573406f735c_MultiChoiceOption_0').prop( "disabled", true );
        //-----------E.1
        $('input#E_x002e_1_x002e__x0020_V_x00e9_r_30bdff77-4b46-4193-94e2-9bc84bf27fba_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#E_x002e_1_x002e__x0020_V_x00e9_r_30bdff77-4b46-4193-94e2-9bc84bf27fba_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit29_b77dccbe-19bd-4e82-99f9-f0c0cd3cd80d_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit29_b77dccbe-19bd-4e82-99f9-f0c0cd3cd80d_MultiChoiceOption_1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit29_b77dccbe-19bd-4e82-99f9-f0c0cd3cd80d_MultiChoiceOption_2').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit29_b77dccbe-19bd-4e82-99f9-f0c0cd3cd80d_MultiChoiceOption_3').prop( "disabled", true );
        //-----------E.2
        $('input#E_x002e_2_x002e__x0020_Contr_x00_1e3be103-26eb-4f47-a7a8-c07f6917d75a_$RadioButtonChoiceField0').prop( "disabled", true );
        $('input#E_x002e_2_x002e__x0020_Contr_x00_1e3be103-26eb-4f47-a7a8-c07f6917d75a_$RadioButtonChoiceField1').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit30_10bedd5b-35c7-4962-83b5-4c455468c5d0_MultiChoiceOption_0').prop( "disabled", true );
        $('input#Motifs_x0020_Non_x002d_Conformit30_10bedd5b-35c7-4962-83b5-4c455468c5d0_MultiChoiceOption_1').prop( "disabled", true );
    });
}      
  </script>