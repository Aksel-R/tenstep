
<script src="/sites/CapitalHumain/_catalogs/masterpage/jquery-1.7.2.min.js" type="text/javascript"></script>
<script type="text/javascript">
var loginName = "";
var userid = _spPageContextInfo.userId;
setTimeout(GetCurrentUser1,50);



function GetCurrentUser1() {
var requestUri1 = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";



var requestHeaders1 = { "accept" : "application/json;odata=verbose" };



$.ajax({
url : requestUri1,
contentType : "application/json;odata=verbose",
headers : requestHeaders1,
success : onSuccess,
error : onError
});
}



function onSuccess(data, request) {
var loginName = data.d.Title;

var id = data.d.Id;



    
    loadDossPhaseEtudeCom1(id,loginName);

}



function onError(error) {
alert(error);
}


                var responseDossPhaseEtudeCom1=responseDossPhaseEtudeCom1 || [];
        function loadDossPhaseEtudeCom1(id,loginName){
        var urlDossPhaseEtudeCom1= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/GetUserById('"+id+"')/Groups?";
         console.log(urlDossPhaseEtudeCom1);
          $.ajax({
                        url: urlDossPhaseEtudeCom1,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseDossPhaseEtudeCom1 = responseDossPhaseEtudeCom1.concat(data.d.results);
                            if (data.d.__next) {
                                urlDossPhaseEtudeCom1 = data.d.__next;
                                loadDossPhaseEtudeCom1(id,loginName);
                            }
                            
                          
                            //var creatBy=$(".ms-peopleux-userdisplink").first().text();
                            var OwnerTitle="";

                            var arrOWner=[];
                            var id = "";

                            $.each(responseDossPhaseEtudeCom1, function (key, value) {

                                //var titre=value.Title;
                                OwnerTitle = value.Title;
                                identGroup = value.Id;

                                
					                
                                                        
                               
                                     if (arrOWner.indexOf(identGroup)<0) {
                                        arrOWner.push(identGroup);
                                     }  
                                    

                                    
                                    
                              });
                     
                        }
                    });
        }
        





        </script>
