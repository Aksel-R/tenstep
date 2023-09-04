<script src="/sites/GIB/_catalogs/masterpage/Library/jquery-1.7.2.min.js" type="text/javascript"></script>
<script type="text/javascript">
function setElement(){
    // titre = document.getElementById('Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField');
    // console.log("titre= "+titre);
    $('#Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField').disabled = true;
    // ref = document.getElementById('R_x00e9_f_x00e9_rence_e99c6cc1-820f-4ebf-abe5-eb068ee436e3_$TextField');
    // ref.disabled = true;
    $('#R_x00e9_f_x00e9_rence_e99c6cc1-820f-4ebf-abe5-eb068ee436e3_$TextField').disabled = true;
    // num = document.getElementById('Num_x00e9_ro_x0020_Domiciliation_a96fff49-1686-4435-b4d1-754b74b4d771_$TextField');
    // num.disabled = true; 
    $('#Num_x00e9_ro_x0020_Domiciliation_a96fff49-1686-4435-b4d1-754b74b4d771_$TextField').disabled = true;
    // radioButton0=document.getElementById('Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField3');
    // radioButton1=document.getElementById('Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField3');
    // radioButton2=document.getElementById('Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField3');
    if (($('#Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField3').checked)||($('#Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField3').checked)||($('#Statut_5b8ed65d-ac27-45c0-988c-362cd5fbbd06_$DropDownChoice').value =="Traitée")||($('#Validation_x0020_Avis_x0020_conf_1034c745-9c4f-4b33-8961-a359231e6145_$DropDownChoice').value =="Défavorable")) {
        $('.ms-ButtonHeightWidth').hide();
        $('.ms-cui-tabContainer').hide();
    }
}
setElement();
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
    

}



function onError(error) {
alert(error);
}


                var responseDossPhaseEtudeCom=responseDossPhaseEtudeCom || [];
        function loadDossPhaseEtudeCom(id,loginName){
console.log("loginName= " + loginName);
        var urlDossPhaseEtudeCom= _spPageContextInfo.siteAbsoluteUrl + "/_api/web/GetUserById('"+id+"')/Groups";
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
                            
var loggedIn=$(".o365cs-me-tile-nophoto-username").first().text();  
console.log("loggedIn= "+loggedIn);   

var creatBy=$(".ms-peopleux-userdisplink").first().text();
                                if (creatBy==loggedIn) {
                                    $('nobr:contains("Statut")').closest('tr').show();  
                                    $('nobr:contains("Avis Domiciliation")').closest('tr').show();
                                    $('nobr:contains("Avis Conformité")').closest('tr').show(); 
                                    $('nobr:contains("Validation Avis conformité")').closest('tr').show(); 
                                    $('nobr:contains("Pièces jointes")').closest('tr').show();
                                } else{
                                    $('nobr:contains("Statut")').closest('tr').hide();  
                                    $('nobr:contains("Avis Domiciliation")').closest('tr').hide();
                                    $('nobr:contains("Avis Conformité")').closest('tr').hide(); 
                                    $('nobr:contains("Validation Avis conformité")').closest('tr').hide(); 
                                    $('nobr:contains("Pièces jointes")').closest('tr').hide();
                                } 
                            var OwnerTitle="";
                            var arrGrp=[];
                            $.each(responseDossPhaseEtudeCom, function (key, value) {

                                var titre=value.Title;
                                console.log("titre= "+titre);
                                OwnerTitle = value.OwnerTitle;
                                arrGrp.push(titre); 
                                                                 
                              });

                                 console.log("arrGrp= "+arrGrp);  
                                 var grp0="DomFinHS Saisie";
                                 if (arrGrp.indexOf(grp0)>-1 )  {
                                   

                                        $('nobr:contains("Statut")').closest('tr').hide();  
                                        $('nobr:contains("Avis Conformité")').closest('tr').hide(); 
                                        $('nobr:contains("Validation Avis conformité")').closest('tr').hide(); 
                                        $('nobr:contains("Pièces jointes")').closest('tr').hide();
                                        $('nobr:contains("Avis Domiciliation")').closest('tr').hide();
                                        $('nobr:contains("Motif Avis Domiciliation")').closest('tr').hide();
                                        $('nobr:contains("Motif Avis Responsable Conformité")').closest('tr').hide();

                                }  
                                 if (arrGrp.indexOf(grp0)>-1 )  {
                                    const titre1 = document.getElementById('Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField');
                                    titre1.disabled = false;
                                    const ref1 = document.getElementById('R_x00e9_f_x00e9_rence_e99c6cc1-820f-4ebf-abe5-eb068ee436e3_$TextField');
                                    ref1.disabled = false; 
                                    const num1 = document.getElementById('Num_x00e9_ro_x0020_Domiciliation_a96fff49-1686-4435-b4d1-754b74b4d771_$TextField');
                                    num1.disabled = false; 

                                        

                                }                                              
                                 var grp="DomFinHSApprobation"; 
                                 if (arrGrp.indexOf(grp)>-1 )  {
                                       
                                        $('nobr:contains("Statut")').closest('tr').hide();  
                                        $('nobr:contains("Avis Conformité")').closest('tr').hide(); 
                                        $('nobr:contains("Validation Avis conformité")').closest('tr').hide(); 
                                        $('nobr:contains("Pièces jointes")').closest('tr').hide();
                                        $('nobr:contains("Motif Avis Responsable Conformité")').closest('tr').hide(); 
                                        if (arrGrp.indexOf(grp0)>-1 ){
                                            $('nobr:contains("Avis Domiciliation")').closest('tr').show();
                                            $('nobr:contains("Motif Avis Domiciliation")').closest('tr').show();
                                        }
                                }
                                var grp1="DomFinHSConformité";
                                if (arrGrp.indexOf(grp1)>-1 )  {
                                       
                                        //const stat = document.getElementById('Statut_5b8ed65d-ac27-45c0-988c-362cd5fbbd06_$DropDownChoice');
                                        $('#Statut_5b8ed65d-ac27-45c0-988c-362cd5fbbd06_$DropDownChoice').disabled = true; 
                                        //var radio1=document.getElementById('Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField0'); 
                                        $('#Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField0').disabled = true; 
                                        //var radio2=document.getElementById('Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField1'); 
                                        $('#Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField1').disabled = true; 
                                        //var radio3=document.getElementById('Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField2'); 
                                        $('#Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField2').disabled = true; 
                                        //var radio4=document.getElementById('Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField3'); 
                                        $('#Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField3').disabled = true;  
                                        $('nobr:contains("Validation Avis conformité")').closest('tr').hide(); 
                                        $('nobr:contains("Pièces jointes")').closest('tr').hide(); 
                                }
                                var grp2="DomFinHSValidConformité";
                                if (arrGrp.indexOf(grp2)>-1 )  {
                                       
                                        //const stat = document.getElementById('Statut_5b8ed65d-ac27-45c0-988c-362cd5fbbd06_$DropDownChoice');
                                        $('#Statut_5b8ed65d-ac27-45c0-988c-362cd5fbbd06_$DropDownChoice').disabled = true; 
                                        //var radio1=document.getElementById('Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField0'); 
                                        $('#Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField0').disabled = true; 
                                        //var radio2=document.getElementById('Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField1'); 
                                        $('#Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField1').disabled = true; 
                                        //var radio3=document.getElementById('Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField2'); 
                                        $('#Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField2').disabled = true; 
                                        //var radio4=document.getElementById('Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField3'); 
                                        $('#Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField3').disabled = true;  

                                        //var radio5=document.getElementById('Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField0'); 
                                        $('#Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField0').disabled = true; 
                                        //var radio6=document.getElementById('Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField1'); 
                                        $('#Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField1').disabled = true; 
                                        //var radio7=document.getElementById('Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField2'); 
                                        $('#Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField2').disabled = true; 
                                        //var radio8=document.getElementById('Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField3'); 
                                        $('#Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField3').disabled = true;
                                        $('nobr:contains("Pièces jointes")').closest('tr').hide();
                                }
                                var grp3="DomFinHSTransferts";
                                if (arrGrp.indexOf(grp2)>-1 )  {
                                       
                                        //const valid = document.getElementById('Validation_x0020_Avis_x0020_conf_1034c745-9c4f-4b33-8961-a359231e6145_$DropDownChoice');
                                        $('#Validation_x0020_Avis_x0020_conf_1034c745-9c4f-4b33-8961-a359231e6145_$DropDownChoice').disabled = true; 
                                        //var radio1=document.getElementById('Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField0'); 
                                        $('#Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField0').disabled = true; 
                                        //var radio2=document.getElementById('Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField1'); 
                                        $('#Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField1').disabled = true; 
                                        //var radio3=document.getElementById('Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField2'); 
                                        $('#Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField2').disabled = true; 
                                        //var radio4=document.getElementById('Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField3'); 
                                        $('#Avis_x0020_Conformit_x00e9__383ab5d6-8fcf-4060-8a79-7305b72ee9c6_$RadioButtonChoiceField3').disabled = true;  

                                        //var radio5=document.getElementById('Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField0'); 
                                        $('#Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField0').disabled = true; 
                                        //var radio6=document.getElementById('Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField1'); 
                                        $('#Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField1').disabled = true; 
                                        //var radio7=document.getElementById('Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField2'); 
                                        $('#Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField2').disabled = true; 
                                        //var radio8=document.getElementById('Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField3'); 
                                        $('#Avis_x0020_Domiciliation_459934b4-6ad5-4e31-af40-e998283fd562_$RadioButtonChoiceField3').disabled = true;
                                        $('nobr:contains("Pièces jointes")').closest('tr').hide();
                                }
                        }
                    });
        }
        

        </script>