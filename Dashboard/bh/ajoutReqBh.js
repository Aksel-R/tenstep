<script src="/sites/CapitalHumain/_catalogs/masterpage/jquery-1.7.2.min.js" 
 type="text/javascript"></script>
<script type="text/javascript">


$(document).ready(function(){
  var str="Approuvé par l'utilisateur";
  $('nobr:contains("'+str+'")').closest('tr').hide();
  $('nobr:contains("Annuler Requête")').closest('tr').hide();
});
var loginName = "";
var userid = _spPageContextInfo.userId;
setTimeout(GetCurrentUser,10);

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
    
        if(loginName)
        {
        	$(document).ready(function(){
           		$('nobr:contains("Statut")').closest('tr').hide();  
			$('nobr:contains("Résolution")').closest('tr').hide();  
           	});
        }
}


function onError(error) {
  alert(error);
}



</script>