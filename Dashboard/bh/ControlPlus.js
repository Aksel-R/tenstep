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

  $('nobr:contains("Agence")').closest('tr').hide();
  $('nobr:contains("Date Journée")').closest('tr').hide();

    document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField0').disabled = true;

    document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField1').disabled = true;

	document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2').disabled = true;
    
    document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField3').disabled = true;

    $('nobr:contains("Description avis DCPR")').closest('tr').hide(); 

    
    var loginName = data.d.Title;

	var id = data.d.Id;
	mesAgences(loginName,id);
	loadDossPhaseEtudeCom(id,loginName);
	
		

		// document.getElementById("Ribbon.ListForm.Edit.Commit.Publish-Large").onclick = function(){
		// 	radioButton2=document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2');
		// 	if (radioButton2.checked){
		// 		document.getElementById('Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_$RadioButtonChoiceField0').checked=true;
				
		// 	}
		// }
		 
		// document.getElementById("ctl00_ctl33_g_d2ddba10_cbe2_4ae5_b7d9_fcf872a497b6_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").onclick=function(){
		//  //  	radioButton2=document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2');
		// 	// if (radioButton2.checked){
		// 		document.getElementById('Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_$RadioButtonChoiceField0').checked=true;
		// 		console.log("Statut en cours")
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
		//  //  	radioButton2=document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2');
		// 	// if (radioButton2.checked){
		// 		document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField0').checked=true;
		// 		console.log("Avis En instance");
		// 	// }
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
                                arrGrp.push(titre); 
                                                                 
                              });

                                 //console.log("arrGrp= "+arrGrp);  
                                var grp0="Contrôleurs Permanents Centraux";
                                 if (arrGrp.indexOf(grp0)>-1 ){
                                 	radioButton1=document.getElementById('Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_$RadioButtonChoiceField1');

								    if (radioButton1.checked){
								    	document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField0').disabled = false;

									    document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField1').disabled = false;

										document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2').disabled = false;
									    
									    document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField3').disabled = false;

									    $('nobr:contains("Description avis DCPR")').closest('tr').show(); 


									}
									$('nobr:contains("Agence")').closest('tr').hide();
									$('nobr:contains("Date Journée")').closest('tr').hide();
									$('nobr:contains("Directeur Agence")').closest('tr').hide();
									$('nobr:contains("Adjoint Directeur Agence")').closest('tr').hide();
									$('nobr:contains("Intérim")').closest('tr').hide();
									$('nobr:contains("Date réception de la Journée physique")').closest('tr').hide();
									$('nobr:contains("A. Vérification de la régularité des opérations effectuées au niveau des différentes positions du Point de Vente")').closest('tr').hide();
									$('nobr:contains("A.1. Pièces de base Correctement collectées")').closest('tr').hide();
									$('nobr:contains("Observation Point A.1")').closest('tr').hide();
									$('nobr:contains("A.2. Pièces de Base dûment signées")').closest('tr').hide();
									$('nobr:contains("Observation Point A.2")').closest('tr').hide();
									$('nobr:contains("A.3. Contrôle Exhaustif des Opérations")').closest('tr').hide();
									$('nobr:contains("Observation Point A.3")').closest('tr').hide();
									$('nobr:contains("A.4 Signature des opérations de retrait")').closest('tr').hide();
									$('nobr:contains("Observation Point A.4")').closest('tr').hide();
									$('nobr:contains("A.5 Conformité des crédits débloqués")').closest('tr').hide();
									$('nobr:contains("Observation Point A.5")').closest('tr').hide();
									$('nobr:contains("A.6 Redressement des anomalies relevées")').closest('tr').hide();
									$('nobr:contains("Observation Point A.6")').closest('tr').hide();
									$('nobr:contains("A.7 Signature des journaux de contrôle")').closest('tr').hide();
									$('nobr:contains("Observation Point A.7")').closest('tr').hide();
                                    $('nobr:contains("A.8 Concordance des journaux de contrôle")').closest('tr').hide();
                                     $('nobr:contains("Observation Point A.8")').closest('tr').hide();
                                     $('nobr:contains("B. Contrôle des arrêtés de caisse")').closest('tr').hide();
                                     $('nobr:contains("B.1. Conformité des Inventaires devises dinars")').closest('tr').hide();

                                     $('nobr:contains("Observation Point B.1")').closest('tr').hide();
                                      $('nobr:contains("B.2. Alimentation Nivellement DAB GAB ")').closest('tr').hide();
                                      $('nobr:contains("Observation Point B.2")').closest('tr').hide();
                                     
                                      $('nobr:contains("Observation Point B.3")').closest('tr').hide();
                                      $('nobr:contains("B.4 Vérification des arrêtés de caisse ")').closest('tr').hide();
                                      $('nobr:contains("Observation Point B.4")').closest('tr').hide();
                                      $('nobr:contains("B.5. Signature des arrêtés de caisse")').closest('tr').hide();
                                      $('nobr:contains("Observation Point B.5")').closest('tr').hide();
                                      $('nobr:contains("B.6. Contrôle des inventaires de caisse")').closest('tr').hide();
                                      $('nobr:contains("Observation Point B.6")').closest('tr').hide();
                                      $('nobr:contains("B.7. Contrôle des éventuels écarts de caisse")').closest('tr').hide();
                                      $('nobr:contains("Observation Point B.7")').closest('tr').hide();
                                      $('nobr:contains("B.8. Rapports des éventuels écarts de caisse")').closest('tr').hide();
                                      $('nobr:contains("Observation Point B.8")').closest('tr').hide();
                                      $('nobr:contains("C. Vérification des journaux de contrôle de la journée")').closest('tr').hide();
                                      $('nobr:contains("C.1. Contrôle du journal des opérations annulées")').closest('tr').hide();
                                      $('nobr:contains("Observation Point C.1")').closest('tr').hide();
                                      $('nobr:contains("C.2. Contrôle du journal des opérations forcées")').closest('tr').hide();
                                      $('nobr:contains("Observation Point C.2")').closest('tr').hide();
                                      $('nobr:contains("C.3. Contrôle des opérations diverses")').closest('tr').hide();
                                      $('nobr:contains("Observation Point C.3")').closest('tr').hide();
                                      $('nobr:contains("C.4. Contrôle des opérations traitées manuellement")').closest('tr').hide();
                                      $('nobr:contains("Observation Point C.4")').closest('tr').hide();
                                      
                                      $('nobr:contains("Observation Point C.5")').closest('tr').hide();
                                      $('nobr:contains("C.6. Contrôle des placements")').closest('tr').hide();
                                      $('nobr:contains("Observation Point C.6")').closest('tr').hide();
                                      $('nobr:contains("C.7. Contrôle des états de la Télé-compensation")').closest('tr').hide();
                                      $('nobr:contains("Observation Point C.7")').closest('tr').hide();
                                      $('nobr:contains("C.8. Contrôle des chèques certifiés")').closest('tr').hide();
                                      $('nobr:contains("Observation Point C.8")').closest('tr').hide();
                                      
                                      $('nobr:contains("Observation Point C.9")').closest('tr').hide();
                                      $('nobr:contains("C.10. Contrôle des comptes d’attente")').closest('tr').hide();
                                      $('nobr:contains("Observation Point C.10")').closest('tr').hide();
                                      $('nobr:contains("C.11. Contrôle des dépassements en compte")').closest('tr').hide();
                                      $('nobr:contains("Observation Point C.11")').closest('tr').hide();
                                      $('nobr:contains("C.12. Contrôle de L’état de réactivation des «comptes dormants»")').closest('tr').hide();
                                      
                                     
                                      $('nobr:contains("Observation Point C.12")').closest('tr').hide();
                                      
                                      $('nobr:contains("D. Contrôle de la journée comptable")').closest('tr').hide();
                                      $('nobr:contains("D.1. Contrôle des écritures comptables manuelles")').closest('tr').hide();
                                      $('nobr:contains("Observation Point D.1")').closest('tr').hide();
                                      $('nobr:contains("D.2. Contrôle Solde des arrêtés de caisses")').closest('tr').hide();
                                      $('nobr:contains("Observation Point D.2")').closest('tr').hide();
                                      $('nobr:contains("D.3. Contrôle des écritures non générés")').closest('tr').hide();
                                      $('nobr:contains("Observation Point D.3")').closest('tr').hide();
                                      $('nobr:contains("D.4. Contrôle du journal de contrôle final")').closest('tr').hide();
                                      $('nobr:contains("Observation Point D.4")').closest('tr').hide();
                                      $('nobr:contains("D.5. Contrôle des comptes de liaisons électroniques")').closest('tr').hide();
                                      $('nobr:contains("Observation Point D.5")').closest('tr').hide();
                                      $('nobr:contains("E. Etablissement du compte rendu de contrôle")').closest('tr').hide();
                                      $('nobr:contains("E.1. Vérification du compte rendu de contrôle")').closest('tr').hide();
                                      $('nobr:contains("Observation Point E.1")').closest('tr').hide();
                                      $('nobr:contains("E.2. Contrôle des états récapitulatifs")').closest('tr').hide();
                                      $('nobr:contains("Observation Point E.2")').closest('tr').hide();
                                      $('nobr:contains("Commentaires")').closest('tr').hide();
                                      
                                      
                                      
                                      $('nobr:contains("Statut Régional")').closest('tr').hide();
                                      $("#B_x002e_3_x0020_Alimentation_x00").hide();
                                      $("#B_x002e_3_x0020_Alimentation_x00_72c158d1-e1fc-4b00-8fc1-779e47f235da_ChoiceRadioTable").hide();
                                      $(".ms-metadata").hide();

                                      $("#C_x002e_5_x002e__x0020_Contr_x00").hide();
                                      $("#C_x002e_5_x002e__x0020_Contr_x00_4f293d85-b63e-46b2-ad2c-718d6f7b1f91_ChoiceRadioTable").hide();

                                      $("#C_x002e_9_x002e__x0020_Contr_x00").hide();
                                      $("#C_x002e_9_x002e__x0020_Contr_x00_d90531d2-f8d7-47de-9bbd-82a1c7562890_ChoiceRadioTable").hide();

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
 
      


	function mesAgences(loginName,id){
	var responseMesAgences=responseMesAgences||[];
	var urlAgences=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items";
	function LoadMesAgences() {
            var nbre = 0;

            $.ajax({
                url: urlAgences,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseMesAgences = responseMesAgences.concat(data.d.results);
                    if (data.d.__next) {
                        urlAgences = data.d.__next;
                        LoadMesAgences();
                    }
                    var arrMesAgences=[];
                    $.each(responseMesAgences, function (key, value) {
                        var idControleur=value.Contr_x00f4_leur_x0020_R_x00e9_gId;
                        var nomAgence=value.Title;
                        if (id==idControleur) {
                        	arrMesAgences.push(nomAgence);
                        }
                    });
                   //console.log("arrMesAgences= "+arrMesAgences);
                    
                    
                  	mySelect=document.getElementById('Agence_5f113607-b097-44e8-b2be-0fd836e3bc80_$LookupField');
                    removeFromSelect(mySelect, arrMesAgences);
                }
            });
        }
        LoadMesAgences();
}

      function removeFromSelect(yourSelect, arrOptionsVal)
		{
		    $(yourSelect).find('option').filter(function(){
		         return arrOptionsVal.indexOf(this.text) == -1;
		    }).remove();      
		}       
  </script>