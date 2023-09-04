 <script src="/sites/CapitalHumain/_catalogs/masterpage/jquery-1.7.2.min.js" type="text/javascript"></script>
        <script type="text/javascript">



        $(document).ready(function(){



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

           /* if (document.getElementById("Statut_8a5562ea-e5b8-42da-b6f1-017c9b4279fe_$DropDownChoice").value !="Traitée") {
                                            $("nobr:contains('Approuvé par l'utilisateur')").closest('tr').hide();  
                                           }
                                           else
                                           {
                                            $("nobr:contains('Approuvé par l'utilisateur')").closest('tr').show();  
                                           }*/


        });


        </script>