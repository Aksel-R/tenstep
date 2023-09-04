
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
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


}



function onError(error) {
alert(error);
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
                   console.log("arrMesAgences= "+arrMesAgences);
                    
                    
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