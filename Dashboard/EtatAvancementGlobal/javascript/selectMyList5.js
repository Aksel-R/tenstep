function selectMyList5(){



	
	$('#myList6').empty().append('<option value="" selected>Méthodologie</option>');
	$('#myList7').empty().append('<option value="" selected>Structure</option>');
	var urlFilterSelected5= "";

 var cpSel=document.getElementById("myList5").value;
  if (cpSel!="") {
          urlFilterSelected5+="&$filter=ProjectOwnerName%20eq%27"+cpSel+"%27";
      }
	   

        
        
        
        


        var responseRemplirSelectMethFilter5=responseRemplirSelectMethFilter5 || [];
        var urlRemplirSelectMethFilter5= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Typedegestion"+urlFilterSelected5;
        function remplirSelectMethFilter5(){
          $.ajax({
                        url: urlRemplirSelectMethFilter5,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectMethFilter5 = responseRemplirSelectMethFilter5.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectMethFilter5 = data.d.__next;
                                remplirSelectMethFilter5();
                            }
                            
                            
                            $.each(responseRemplirSelectMethFilter5, function (key, value) {

                                if (value.Typedegestion!=null) {
                                        var methodologie=value.Typedegestion;
                                        $('#myList6').append($('<option>',
                                       {
                                          text : methodologie,
                                          value:methodologie
                                        })); 
                                        var opt5 = {};
                                          $("#myList6 > option").each(function () {
                                            if(opt5[$(this).text()]) {
                                                $(this).remove();
                                            } else {
                                                opt5[$(this).text()] = $(this).val();
                                            }
                                           });
                                       }
                            });
                            
                        }
                    });
        }
        remplirSelectMethFilter5();




        var responseRemplirSelectStructFilter5=responseRemplirSelectStructFilter5 || [];
        var urlRemplirSelectStructFilter5= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees"+urlFilterSelected5;
        function remplirSelectStructFilter5(){
          $.ajax({
                        url: urlRemplirSelectStructFilter5,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectStructFilter5 = responseRemplirSelectStructFilter5.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectStructFilter5 = data.d.__next;
                                remplirSelectStructFilter5();
                            }
                            
                            
                            $.each(responseRemplirSelectStructFilter5, function (key, value) {

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
        remplirSelectStructFilter5();

        

}
