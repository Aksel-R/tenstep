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
    $('nobr:contains("Statut")').closest('tr').hide();  
    $('nobr:contains("Résolution")').closest('tr').hide(); 
    

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

                                
                                                        
                                

                                    if ((titre =="Affaires Administratives")&&(creatBy!=OwnerTitle))  {
                                       //console.log(OwnerTitle);
                                        $('nobr:contains("Statut")').closest('tr').show();  
                                                        $('nobr:contains("Résolution")').closest('tr').show(); 
                                                        
                                                   
                                    }

                                    if ((titre =="Affaires Sociales")&&(creatBy!=OwnerTitle))  {
                                       //console.log(OwnerTitle);
                                        $('nobr:contains("Statut")').closest('tr').show();  
                                                        $('nobr:contains("Résolution")').closest('tr').show(); 
                                                        
                                                   
                                    }

                                    if ((titre =="Gestion des carrières")&&(creatBy!=OwnerTitle)) {
                                       //console.log(OwnerTitle);
                                        $('nobr:contains("Statut")').closest('tr').show();  
                                                        $('nobr:contains("Résolution")').closest('tr').show(); 
                                                        
                                                   
                                    }
                                    if ((titre =="Gestion de la Paie")&&(creatBy!=OwnerTitle)) {
                                       //console.log(OwnerTitle);
                                        $('nobr:contains("Statut")').closest('tr').show();  
                                                        $('nobr:contains("Résolution")').closest('tr').show(); 
                                                        
                                                   
                                    }
                                    if ((titre =="Développement des Compétences")&&(creatBy!=OwnerTitle)) {
                                       //console.log(OwnerTitle);
                                        $('nobr:contains("Statut")').closest('tr').show();  
                                                        $('nobr:contains("Résolution")').closest('tr').show(); 
                                                        
                                                   
                                    }
                                    
                              });

               
                            
                        }
                    });
        }
        

        </script>