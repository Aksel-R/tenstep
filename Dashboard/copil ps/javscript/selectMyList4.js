function selectMyList4(){



	$('#myList5').empty().append('<option value="" selected>Chef de projet</option>');
	$('#myList6').empty().append('<option value="" selected>Méthodologie</option>');
	$('#myList7').empty().append('<option value="" selected>Structure</option>');
	var urlFilterSelected4= "";

 var sponsorSel=document.getElementById("myList4").value;
  if (sponsorSel=="") {
          selectMyList3();
      }else{
        urlFilterSelected4+="%20and%20Sponsor%20eq%27"+sponsorSel+"%27";
        var axeStrategique4=document.getElementById("myList1").value;
        if (axeStrategique4!="") {       
            urlFilterSelected4+="%20and%20AxeStrategique%20eq%27"+axeStrategique4+"%27";  
             
        }
        var chantierSel4=document.getElementById("myList2").value;
        if (chantierSel4!="") {
            urlFilterSelected4+="%20and%20Chantier%20eq%27"+chantierSel4+"%27";  
              
        }
        var programmeSel4=document.getElementById("myList8").value;
        if (programmeSel4!="") {
            urlFilterSelected4+="%20and%20Programme%20eq%27"+programmeSel4+"%27";  
            
        }
        var projetSel4=document.getElementById("myList3").value;
        if (projetSel4!="") {
            urlFilterSelected4+="%20and%20ProjectName%20eq%27"+projetSel4+"%27";  
              
        }
        var responseRemplirSelectCpFilter4=responseRemplirSelectCpFilter4 || [];
        var urlRemplirSelectCpFilter4= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectOwnerName&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected4+"&$orderby=ProjectOwnerName";
        function remplirSelectCpFilter4(){
          $.ajax({
                        url: urlRemplirSelectCpFilter4,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectCpFilter4 = responseRemplirSelectCpFilter4.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectCpFilter4 = data.d.__next;
                                remplirSelectCpFilter4();
                            }
                            
                            
                            $.each(responseRemplirSelectCpFilter4, function (key, value) {
                              if (value.ProjectOwnerName!=null) {
                                        var owner=value.ProjectOwnerName;
                                        $('#myList5').append($('<option>',
                                       {
                                          text : owner,
                                          value:owner
                                        })); 
                                        var opt4 = {};
                                          $("#myList5 > option").each(function () {
                                            if(opt4[$(this).text()]) {
                                                $(this).remove();
                                            } else {
                                                opt4[$(this).text()] = $(this).val();
                                            }
                                           });
                                       }
                            });
                            
                        }
                    });
        }
        remplirSelectCpFilter4();


        var responseRemplirSelectMethFilter4=responseRemplirSelectMethFilter4 || [];
        var urlRemplirSelectMethFilter4= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Typedegestion&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected4+"&$orderby=Typedegestion";
        function remplirSelectMethFilter4(){
          $.ajax({
                        url: urlRemplirSelectMethFilter4,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectMethFilter4 = responseRemplirSelectMethFilter4.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectMethFilter4 = data.d.__next;
                                remplirSelectMethFilter4();
                            }
                            
                            
                            $.each(responseRemplirSelectMethFilter4, function (key, value) {

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
        remplirSelectMethFilter4();




        var responseRemplirSelectStructFilter4=responseRemplirSelectStructFilter4 || [];
        var urlRemplirSelectStructFilter4= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected4;
        function remplirSelectStructFilter4(){
          $.ajax({
                        url: urlRemplirSelectStructFilter4,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectStructFilter4 = responseRemplirSelectStructFilter4.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectStructFilter4 = data.d.__next;
                                remplirSelectStructFilter4();
                            }
                            
                            
                            $.each(responseRemplirSelectStructFilter4, function (key, value) {

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
        remplirSelectStructFilter4();
      }
	   

        
        
        
        

        

}
