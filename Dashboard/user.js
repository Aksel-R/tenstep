<script src="/sites/CapitalHumain/_catalogs/masterpage/jquery-1.7.2.min.js" type="text/javascript"></script>
<script type="text/javascript">
var loginName = "";
var userid = _spPageContextInfo.userId;
setTimeout(GetCurrentUser,2000);





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




loadDossPhaseEtudeCom(id);
$('nobr:contains("Statut")').closest('tr').hide();
$('nobr:contains("Résolution")').closest('tr').hide();



}






function onError(error) {
alert(error);
}




var responseDossPhaseEtudeCom=responseDossPhaseEtudeCom || [];
function loadDossPhaseEtudeCom(id){
var urlDossPhaseEtudeCom= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/GetUserById('"+id+"')/Groups?";
$.ajax({
url: urlDossPhaseEtudeCom,
method: "GET",
dataType: "json",
headers: { Accept: "application/json;odata=verbose" },
success: function (data) {
responseDossPhaseEtudeCom = responseDossPhaseEtudeCom.concat(data.d.results);
if (data.d.__next) {
urlDossPhaseEtudeCom = data.d.__next;
loadDossPhaseEtudeCom(id);
}





$.each(responseDossPhaseEtudeCom, function (key, value) {



var titre=value.Title;
var OwnerTitle = value.OwnerTitle;






if (titre =="Affaires Administratives") {
//console.log(OwnerTitle);
$('nobr:contains("Statut")').closest('tr').show();
$('nobr:contains("Résolution")').closest('tr').show();


}



if (titre =="Affaires Sociales") {
//console.log(OwnerTitle);
$('nobr:contains("Statut")').closest('tr').show();
$('nobr:contains("Résolution")').closest('tr').show();


}



if (titre =="Gestion des carrières") {
//console.log(OwnerTitle);
$('nobr:contains("Statut")').closest('tr').show();
$('nobr:contains("Résolution")').closest('tr').show();


}








}




);







}
});
}



</script>