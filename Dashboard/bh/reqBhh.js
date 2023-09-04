        <script src="/sites/CapitalHumain/_catalogs/masterpage/jquery-1.7.2.min.js" type="text/javascript"></script>
        <script type="text/javascript">



        $(document).ready(function(){

          var oui=document.getElementById("Annuler_x0020_Requ_x00ea_te_37d82a69-e118-467d-a99c-db5085d927cd_$RadioButtonChoiceField1");
          var non=document.getElementById("Annuler_x0020_Requ_x00ea_te_37d82a69-e118-467d-a99c-db5085d927cd_$RadioButtonChoiceField0");
  if (non.checked) {
      if (!oui.checkboxed) {
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
        
          $('#Annuler_x0020_Requ_x00ea_te_37d82a69-e118-467d-a99c-db5085d927cd_ChoiceRadioTable input').on('change', function() {
                
                
                //const $select = document.querySelector('');
                
                if (oui.checked) {
                  console.log("Oui");
                  //$('#Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice').empty();
                   document.getElementById('Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice').value = 'Annulée'
                   document.getElementById('Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice').text = 'Annulée'
                  
          
                  //document.getElementById("").value =;

                }
                else if (non.checked) {
                  console.log("Non");
                
                  // document.getElementById('Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice').value = 'Déposée'
                  // document.getElementById('Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice').text = 'Déposée'
                }
            });
           
                  console.log("Non");
                
                  
                          $('nobr:contains("Annuler Requête")').closest('tr').hide();

                        var checkBox = document.getElementById('Approuv_x00e9__x0020_par_x0020_l_4f0ee03a-6d0d-4f70-a96a-c1fb458c398b_$BooleanField');

                        var checkboxed = document.getElementById('Approuv_x00e9__x0020_par_x0020_l_4f0ee03a-6d0d-4f70-a96a-c1fb458c398b_$BooleanField');





                        if ((document.getElementById("Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice").value =="Traitée")&&(checkBox.checked))
                        {
                          $('.ms-ButtonHeightWidth').hide();
                          $('.ms-cui-tabContainer').hide();
                        }
                        else
                        {
                            $('.ms-cui-tabContainer').show();
                        }
                        var creatBy=$(".ms-peopleux-userdisplink").first().text();
                        var loginName = $('.o365cs-me-tile-nophoto-username').text();
                        console.log('Login ' + loginName);
                         if ((loginName==creatBy)&&(document.getElementById("Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice").value =="Traitée")&&(checkboxed.checked==false)) {
                                                    $("nobr:contains('Approuvé par l'utilisateur')").closest('tr').show(); 
                                                    console.log("333"); 
                                                   }else {
                                                    $("nobr:contains('Approuvé par l'utilisateur')").closest('tr').hide();
                            document.getElementById("Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice").value ="Déposée";
                                                   }
                            if ((loginName==creatBy)&&(document.getElementById("Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice").value =="Déposée")) {
                              $('nobr:contains("Annuler Requête")').closest('tr').show();
                            }
                           

                            
                                  // if(document.getElementById("Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice").value =="Traitée"){
                       
                        //      $("nobr:contains('Approuvé par l'utilisateur')").closest('tr').hide();
                            
                        // }
                        
                       

                if(document.getElementById("Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice").value =="Traitée"){


                $("nobr:contains('Approuvé par l'utilisateur')").closest('tr').show();
                            document.getElementById("Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice").value ="Déposée";



                        $("nobr:contains('Approuvé par l'utilisateur')").closest('tr').show();
                          checkboxed.addEventListener('change', (event) => {
                              if(checkboxed.checked==true){
                                console.log('checked');
                                document.getElementById("Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice").value ="Traitée";
                                //$("nobr:contains('Approuvé par l'utilisateur')").closest('tr').show();
                              }   
                              else
                              {
                                console.log('not checked');
                                document.getElementById("Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice").value ="Déposée";
                              }
                              // else {
                              //   console.log('checked');
                              //   document.getElementById("Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice").value ="Traitée";
                              //   $("nobr:contains('Approuvé par l'utilisateur')").closest('tr').show();
                              // }
                          });
                        }
                    
                }

                           /* if (document.getElementById("Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice").value !="Traitée") {
                                                            $("nobr:contains('Approuvé par l'utilisateur')").closest('tr').hide();  
                                                           }
                                                           else
                                                           {
                                                            $("nobr:contains('Approuvé par l'utilisateur')").closest('tr').show();  
                                           }*/

  }else{
    document.getElementById('Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice').value = 'Annulée'
                   document.getElementById('Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice').text = 'Annulée'
    alert("Requête Annulée!!!");
    document.getElementById('Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice').value = 'Annulée'
                   document.getElementById('Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice').text = 'Annulée'
                   $('.ms-ButtonHeightWidth').hide();
                          $('.ms-cui-tabContainer').hide();
                          setTimeout(window.location.href = "http://fsharepoint/sites/CapitalHumain/Lists/Requtes/AllItems.aspx", 200);
    

  }
        });


        </script>