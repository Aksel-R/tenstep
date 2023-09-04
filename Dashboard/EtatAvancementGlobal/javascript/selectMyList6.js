function selectMyList6(){

	$('#myList7').empty().append('<option value="" selected>Structure</option>');
	var urlFilterSelected6= "";

 var methodSel=document.getElementById("myList6").value;
  if (methodSel!="") {
          urlFilterSelected6+="&$filter=Typedegestion%20eq%27"+methodSel+"%27";
      }
	   





        var responseRemplirSelectStructFilter6=responseRemplirSelectStructFilter6 || [];
        var urlRemplirSelectStructFilter6= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees"+urlFilterSelected6;
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
