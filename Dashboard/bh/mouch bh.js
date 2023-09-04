<script src="/sites/trapsa/_catalogs/masterpage/javascript_bib/jquery-1.7.2.min.js" type="text/javascript"></script>
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

  
    
    var loginName = data.d.Title;

	var id = data.d.Id;
	// mesAgences(loginName,id);
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
                                console.log("loginName= "+loginName);
                                arrGrp.push(titre); 
                                                                 
                              });

                                 //console.log("arrGrp= "+arrGrp);  
                                var grp0="Direction";//direction
                                var grp1="Service";//service affect
                                var grp2="Personne";//statut
                                 if (arrGrp.indexOf(grp0)>-1 ){
                                 	document.getElementById('Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField').disabled = true;
                                  document.getElementById('Description_4eeb303b-e3c2-4164-a436-9e71ec4f8478_$TextField').disabled = true;
                                  document.getElementById('Sercvice_49e846a4-8f36-4588-a23e-cdea395af9ec_$DropDownChoice').disabled = true;
                                  $('nobr:contains("Affecté à")').closest('tr').hide();
                                  document.getElementById('Statut_785e0bc3-feae-49a5-947a-9cc6f96a677f_$DropDownChoice').disabled = true;
                                 }
                                 else if (arrGrp.indexOf(grp1)>-1 ){
                                  document.getElementById('Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField').disabled = true;
                                  document.getElementById('Description_4eeb303b-e3c2-4164-a436-9e71ec4f8478_$TextField').disabled = true;
                                  document.getElementById('Direction_e37ea771-cd4b-465b-af67-d4c7e5a6ad7a_$DropDownChoice').disabled = true;
                                  
                                  document.getElementById('Statut_785e0bc3-feae-49a5-947a-9cc6f96a677f_$DropDownChoice').disabled = true;
                                 }
                                 else if (arrGrp.indexOf(grp1)>-1 ){
                                  document.getElementById('Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField').disabled = true;
                                  document.getElementById('Description_4eeb303b-e3c2-4164-a436-9e71ec4f8478_$TextField').disabled = true;
                                  document.getElementById('Sercvice_49e846a4-8f36-4588-a23e-cdea395af9ec_$DropDownChoice').disabled = true;
                                  $('nobr:contains("Affecté à")').closest('tr').hide();
                                  document.getElementById('Direction_e37ea771-cd4b-465b-af67-d4c7e5a6ad7a_$DropDownChoice').disabled = true;
                                 }

                                 
								    
                        }
                    });
        }
 
      


     
  </script>