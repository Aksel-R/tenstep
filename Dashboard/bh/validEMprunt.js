
<script src="/sites/CapitalHumain/_catalogs/masterpage/jquery-1.7.2.min.js" type="text/javascript"></script>
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
    var creatBy=$(".ms-peopleux-userdisplink").first().text();
    if ((document.getElementById("Statut_afefe370-cd94-4a5a-8418-c9f28af34bce_$DropDownChoice").value =="Rejetée")&&(creatBy==loginName)){
        document.getElementById("Statut_afefe370-cd94-4a5a-8418-c9f28af34bce_$DropDownChoice").value ="Déposée";
    }
    //$('nobr:contains("Statut")').closest('tr').hide();  
    

}



function onError(error) {
alert(error);
}


                var responseDossPhaseEtudeCom=responseDossPhaseEtudeCom || [];
        function loadDossPhaseEtudeCom(id,loginName){
        var urlDossPhaseEtudeCom= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/GetUserById('"+id+"')/Groups?";
         console.log(urlDossPhaseEtudeCom);
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
                            
                          
                            var creatBy=$(".ms-peopleux-userdisplink").first().text();
                            var OwnerTitle="";
                            $.each(responseDossPhaseEtudeCom, function (key, value) {

                                var titre=value.Title;
                                OwnerTitle = value.OwnerTitle;
                                //console.log("owner "+OwnerTitle );
                                if ((document.getElementById("Statut_afefe370-cd94-4a5a-8418-c9f28af34bce_$DropDownChoice").value =="Validée")&&(titre !="Validation Emprunt 2022"))
                                {
                                    $('.ms-ButtonHeightWidth').hide();
                                    $('.ms-cui-tabContainer').hide();
                                }
                                else if ((document.getElementById("Statut_afefe370-cd94-4a5a-8418-c9f28af34bce_$DropDownChoice").value !="Validée")||(titre =="Validation Emprunt 2022")) 
                                {
                                    $('.ms-cui-tabContainer').show();
                                    $('.ms-ButtonHeightWidth').show();
                                }
                                                        
                                

                                    if (titre =="Validation Emprunt 2022")  {
                                       //console.log(OwnerTitle);
                                        $('nobr:contains("Statut")').closest('tr').show();  
                                        $('nobr:contains("Description Avis DCCH")').closest('tr').show();
                                                        
                                                   
                                    }

                                    else  {
                                       //console.log(OwnerTitle);
                                        $('nobr:contains("Statut")').closest('tr').hide(); 
                                        $('nobr:contains("Description Avis DCCH")').closest('tr').hide(); 
                                                         
                                                        
                                                   
                                    }

                                    
                                    
                              });
                                      
                            
                        }
                    });
        }
        

        </script>
