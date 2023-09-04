<script src="/sites/CapitalHumain/_catalogs/masterpage/jquery-1.7.2.min.js" type="text/javascript"></script>
<script type="text/javascript">
var loginName = "";
var userid = _spPageContextInfo.userId;
$(document).ready(function(){
  $('nobr:contains("Statut")').closest('tr').hide();  
  $('nobr:contains("Description Avis")').closest('tr').hide();
});
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



    
    var loginName = data.d.Title;

	var id = data.d.Id;
	radioButton01=document.getElementById('Statut_0025abe8-90f1-465f-a78d-82c8bf6f68a2_$RadioButtonChoiceField2');
  radioButton02=document.getElementById('Statut_0025abe8-90f1-465f-a78d-82c8bf6f68a2_$RadioButtonChoiceField3');
    if ((radioButton01.checked)||(radioButton02.checked)){

        $('.ms-ButtonHeightWidth').hide();
        $('.ms-cui-tabContainer').hide();
    }
    $('nobr:contains("Statut")').closest('tr').hide();  
    $('nobr:contains("Description Avis")').closest('tr').hide(); 
	loadDossPhaseEtudeCom(id,loginName);
	
		

	
    
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
                                var grp0="Traitement Service Social";
                                if (arrGrp.indexOf(grp0)>-1) {
                                  document.getElementById('Matricule_eb9e8fce-614d-4f55-b273-f69d2a1ae924_$LookupField').disabled = true;
                                  document.getElementById('Pr_x00e9_nom_x0020_et_x0020_Nom__00a918f1-6bf8-449d-bafa-b3aad662fd20_$TextField').disabled = true;
                                  document.getElementById('Niveau_x0020_d_x0027__x00e9_tude_f7bbe1da-efcd-4442-bb5c-5b37025e3ee6_$DropDownChoice').disabled = true;
                                  $('nobr:contains("Commentaires")').closest('tr').hide();
                                  $('nobr:contains("Statut")').closest('tr').show();  
                                  $('nobr:contains("Description Avis")').closest('tr').show(); 
                                }else{
                                  document.getElementById('Statut_0025abe8-90f1-465f-a78d-82c8bf6f68a2_$RadioButtonChoiceField3').disabled = true;
                                  document.getElementById('Statut_0025abe8-90f1-465f-a78d-82c8bf6f68a2_$RadioButtonChoiceField2').disabled = true;
                                  document.getElementById('Statut_0025abe8-90f1-465f-a78d-82c8bf6f68a2_$RadioButtonChoiceField1').disabled = true;

                                  document.getElementById('Statut_0025abe8-90f1-465f-a78d-82c8bf6f68a2_$RadioButtonChoiceField0').disabled = true;
 
                                }
                                                               
								  
								   
                        }

                    });
        }
 
      


	

        
  </script>