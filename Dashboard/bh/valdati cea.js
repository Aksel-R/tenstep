<script src="/sites/GIB/_catalogs/masterpage/Library/jquery-1.7.2.min.js" type="text/javascript"></script>
<script type="text/javascript">

var loginName = "";
var userid = _spPageContextInfo.userId;
setTimeout(GetCurrentUser,50);



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


    loadDossPhaseEtudeCom(id,loginName);
    //$('nobr:contains("Statut")').closest('tr').hide();  
    radioButton1=document.getElementById('Statut_3a4292d4-d200-43aa-9c71-3000e36aba46_$RadioButtonChoiceField1');
    radioButton2=document.getElementById('Statut_3a4292d4-d200-43aa-9c71-3000e36aba46_$RadioButtonChoiceField3');

    radioButton3=document.getElementById('Statut_3a4292d4-d200-43aa-9c71-3000e36aba46_$RadioButtonChoiceField0');
    radioButton4=document.getElementById('Statut_3a4292d4-d200-43aa-9c71-3000e36aba46_$RadioButtonChoiceField2');
    
    if ((radioButton1.checked)||(radioButton2.checked)){
        console.log("trait");
        $('.ms-ButtonHeightWidth').hide();
        $('.ms-cui-tabContainer').hide();
    }
    if (radioButton4.checked) {
        radioButton3.checked = true;
        radioButton4.checked = false;
    }
    

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


                            var OwnerTitle="";
                            var arrGrp=[];
                            $.each(responseDossPhaseEtudeCom, function (key, value) {

                                var titre=value.Title;
                                //console.log("titre= "+titre);
                                OwnerTitle = value.OwnerTitle;
                                arrGrp.push(titre); 
                                                                 
                              });

                                 //console.log("arrGrp= "+arrGrp);  
                                 var grp0="Validation CEA";
                                 if (arrGrp.indexOf(grp0)>-1 )  {
                                        $('nobr:contains("Statut")').closest('tr').show();  
                                        $('nobr:contains("Observations")').closest('tr').show(); 
                                        

                                }else{
                                    $('nobr:contains("Statut")').closest('tr').hide();  
                                        $('nobr:contains("Observations")').closest('tr').hide();
                                }  
                                                                            
                               
                             
                                
                        }
                    });
        }
        

        </script>