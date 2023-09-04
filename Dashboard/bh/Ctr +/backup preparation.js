<script src="/sites/CapitalHumain/_catalogs/masterpage/jquery-1.7.2.min.js" type="text/javascript"></script>
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

	
		

		// document.getElementById("Ribbon.ListForm.Edit.Commit.Publish-Large").onclick = function(){
		// 	radioButton2=document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2');
		// 	if (radioButton2.checked){
		// 		document.getElementById('Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_$RadioButtonChoiceField0').checked=true;
				
		// 	}
		// }
		 
		// document.getElementById("ctl00_ctl33_g_d2ddba10_cbe2_4ae5_b7d9_fcf872a497b6_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").onclick=function(){
		//  //  	radioButton2=document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2');
		// 	// if (radioButton2.checked){
		// 		document.getElementById('Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_$RadioButtonChoiceField0').checked=true;
		// 		console.log("Statut en cours")
		//     // }
	 //  };
		
		$('#Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_ChoiceRadioTable input').on('change', function() {
   			radioButton2=document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2');
			if (radioButton2.checked){
				document.getElementById('Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_$RadioButtonChoiceField0').checked=true;
				console.log("Statut en cours")
			} 
		});

		$('#Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_ChoiceRadioTable input').on('change', function() {
   			radioButton3=document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2');
			if (radioButton3.checked){
				document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField0').checked=true;
				console.log("Avis DCPR en Instance")
			} 
		});
  
		// document.getElementById("Statut_x0020_R_x00e9_gional_dfde4522-0a29-416a-adf4-95e65b15634b_$RadioButtonChoiceField1").onclick=function(){
		//  //  	radioButton2=document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField2');
		// 	// if (radioButton2.checked){
		// 		document.getElementById('Avis_x0020_DCP_a9bdb834-f4aa-442c-8d28-617095a4e78c_$RadioButtonChoiceField0').checked=true;
		// 		console.log("Avis En instance");
		// 	// }
	 //  };
	
    
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
                    if (!data.d.__next){
                    	var arrMesAgences=[];
	                    $.each(responseMesAgences, function (key, value) {
	                        var idControleur=value.Contr_x00f4_leur_x0020_R_x00e9_gId.results;
	                        console.log("idControleur= "+idControleur)
	                        console.log("id= "+id)
	                        var nomAgence=value.Title;
	                        for (var i = 0; i < idControleur.length; i++) {
	                          if (idControleur[i]==id) {
	                            arrMesAgences.push(nomAgence);
	                          }
	                        }
	                        
	                    });
	                   //console.log("arrMesAgences= "+arrMesAgences);
	                    
	                    console.log("aggg= "+arrMesAgences)
	                  	mySelect=document.getElementById('Agence_91dfe8ec-35cb-4af3-bef5-32d6570cbaa9_$LookupField');
	                  	console.log("selaggg= "+mySelect);
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