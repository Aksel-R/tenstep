
<script src="/sites/bhcom/_catalogs/masterpage/jquery/jquery.js" type="text/javascript"></script>
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
	
	mesAgences(loginName,id);

    //loadDossPhaseEtudeCom(id,loginName);
    $('nobr:contains("Avis DCP")').closest('tr').hide();  
    $('nobr:contains("Description avis DCP")').closest('tr').hide(); 
    $('nobr:contains("Annulée le dossier de control")').closest('tr').hide();

}



function onError(error) {
alert(error);
}

function mesAgences(loginName,id){
	var responseMesAgences=responseMesAgences||[];
	var urlAgences=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items";
    console.log("urlAgences= "+urlAgences);
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
                    }else if (!data.d.__next) {
                        
                        var arrMesAgences=[];
                        $.each(responseMesAgences, function (key, value) {
                            var listControleur=[];
                            ////console.log("va="+value.Contr_x00f4_leur_x0020_R_x00e9_gId.results);
                            listControleur=value.Contr_x00f4_leur_x0020_R_x00e9_gId.results;
                            var nomAgence=value.Title;
                            if (listControleur.indexOf(id)>-1) {
                            	arrMesAgences.push(nomAgence);
                            }
                        });
                       console.log("arrMesAgences= "+arrMesAgences);
                        
                        
                      	mySelect=document.getElementById('Agence_5f113607-b097-44e8-b2be-0fd836e3bc80_$LookupField');
                        removeFromSelect(mySelect, arrMesAgences);
                    }

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