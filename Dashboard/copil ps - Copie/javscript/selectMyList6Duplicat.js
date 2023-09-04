function selectMyList6(){

	$('#myList7').empty().append('<option value="" selected>Structure</option>');
	var urlFilterSelected6= "";

 var methodSel=document.getElementById("myList6").value;
  if (methodSel=="") {
          selectMyList5();
      }else{
        urlFilterSelected6+="%20and%20Typedegestion%20eq%27"+methodSel+"%27";
        var axeStrategique6=document.getElementById("myList1").value;
      if (axeStrategique6!="") {       
          urlFilterSelected6+="%20and%20AxeStrategique%20eq%27"+axeStrategique6+"%27";  
         
      }
      var chantierSel6=document.getElementById("myList2").value;
      if (chantierSel6!="") {
          urlFilterSelected6+="%20and%20Chantier%20eq%27"+chantierSel6+"%27";  
          
      }
      var programmeSel6=document.getElementById("myList8").value;
      if (programmeSel6!="") {
          urlFilterSelected6+="%20and%20Programme%20eq%27"+programmeSel6+"%27";  
         
      }
      var projetSel6=document.getElementById("myList3").value;
      if (projetSel6!="") {
          urlFilterSelected6+="%20and%20ProjectName%20eq%27"+projetSel6+"%27";  
           
      }
      var sponsorSel6=document.getElementById("myList4").value;
      if (sponsorSel6!="") {
          urlFilterSelected6+="%20and%20Sponsor%20eq%27"+sponsorSel6+"%27"; 
          
      }
      var cpSel6=document.getElementById("myList5").value;
      if (cpSel6!="") {
          urlFilterSelected6+="%20and%20ProjectOwnerName%20eq%27"+cpSel6+"%27";  
           
      }
        var responseRemplirSelectStructFilter6=responseRemplirSelectStructFilter6 || [];
        var urlRemplirSelectStructFilter6= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected6;
        function remplirSelectStructFilter6(){
          $.ajax({
                        url: urlRemplirSelectStructFilter6,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectStructFilter6 = responseRemplirSelectStructFilter6.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectStructFilter6 = data.d.__next;
                                remplirSelectStructFilter6();
                            }
                            
                            
                            $.each(responseRemplirSelectStructFilter6, function (key, value) {

                                if (value.Structuresimpliquees!=null) {
                                var structure=value.Structuresimpliquees;
                                
                                var words = structure.split(', ');
                                sortTab(words);
                                var myNewString="";
                                for(var i=0; i < words.length; i++){
                                  if(i==0){
                                    myNewString+=words[i];
                                  }else{
                                    myNewString+=", "+words[i];
                                  }

                                }
                                $('#myList7').append($('<option>',
                               {
                                  text : myNewString,
                                  value: myNewString
                                })); 
                                var opt6 = {};
                                  $("#myList7 > option").each(function () {
                                    if(opt6[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt6[$(this).text()] = $(this).val();
                                    }
                                   });
                               }
                            });
                            
                        }
                    });
        }
        remplirSelectStructFilter6();
      }
	   





        

        

}
