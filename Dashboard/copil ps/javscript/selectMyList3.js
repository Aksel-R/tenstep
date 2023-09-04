function selectMyList3(){


	$('#myList4').empty().append('<option value="" selected>Sponsor</option>');
	$('#myList5').empty().append('<option value="" selected>Chef de projet</option>');
	$('#myList6').empty().append('<option value="" selected>Méthodologie</option>');
	$('#myList7').empty().append('<option value="" selected>Structure</option>');
	var urlFilterSelected3= "";

 var projetSel=document.getElementById("myList3").value;
  if (projetSel=="") {
          selectMyList8();
      }else{
        urlFilterSelected3+="%20and%20ProjectName%20eq%27"+projetSel+"%27";
        var axeStrategique3=document.getElementById("myList1").value;
      if (axeStrategique3!="") {       
          urlFilterSelected3+="%20and%20AxeStrategique%20eq%27"+axeStrategique3+"%27";  
            
      }
      var chantierSel3=document.getElementById("myList2").value;
      if (chantierSel3!="") {
          urlFilterSelected3+="%20and%20Chantier%20eq%27"+chantierSel3+"%27";  
            
      }
      var programmeSel3=document.getElementById("myList8").value;
      if (programmeSel3!="") {
          urlFilterSelected3+="%20and%20Programme%20eq%27"+programmeSel3+"%27";  
           
      }
        var responseRemplirSelectSponsorFilter3=responseRemplirSelectSponsorFilter3 || [];
        var urlRemplirSelectSponsorFilter3= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,Sponsor&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected3+"&$orderby=Sponsor";
        function remplirSelectSponsorFilter3(){
          $.ajax({
                        url: urlRemplirSelectSponsorFilter3,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectSponsorFilter3 = responseRemplirSelectSponsorFilter3.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectSponsorFilter3 = data.d.__next;
                                remplirSelectSponsorFilter3();
                            }
                            
                            
                            $.each(responseRemplirSelectSponsorFilter3, function (key, value) {
                                if (value.Sponsor!=null) {
                                          var sponsor=value.Sponsor;
                                          $('#myList4').append($('<option>',
                                         {
                                            text : sponsor,
                                            value:sponsor
                                          })); 
                                          var opt3 = {};
                                            $("#myList4 > option").each(function () {
                                              if(opt3[$(this).text()]) {
                                                  $(this).remove();
                                              } else {
                                                  opt3[$(this).text()] = $(this).val();
                                              }
                                             });
                                         }
                            });
                            
                        }
                    });
        }
        remplirSelectSponsorFilter3();
        var responseRemplirSelectCpFilter3=responseRemplirSelectCpFilter3 || [];
        var urlRemplirSelectCpFilter3= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectOwnerName&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected3+"&$orderby=ProjectOwnerName";
        function remplirSelectCpFilter3(){
          $.ajax({
                        url: urlRemplirSelectCpFilter3,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectCpFilter3 = responseRemplirSelectCpFilter3.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectCpFilter3 = data.d.__next;
                                remplirSelectCpFilter3();
                            }
                            
                            
                            $.each(responseRemplirSelectCpFilter3, function (key, value) {
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
        remplirSelectCpFilter3();


        var responseRemplirSelectMethFilter3=responseRemplirSelectMethFilter3 || [];
        var urlRemplirSelectMethFilter3= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Typedegestion&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected3+"&$orderby=Typedegestion";
        function remplirSelectMethFilter3(){
          $.ajax({
                        url: urlRemplirSelectMethFilter3,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectMethFilter3 = responseRemplirSelectMethFilter3.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectMethFilter3 = data.d.__next;
                                remplirSelectMethFilter3();
                            }
                            
                            
                            $.each(responseRemplirSelectMethFilter3, function (key, value) {

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
        remplirSelectMethFilter3();




        var responseRemplirSelectStructFilter3=responseRemplirSelectStructFilter3 || [];
        var urlRemplirSelectStructFilter3= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected3;
        function remplirSelectStructFilter3(){
          $.ajax({
                        url: urlRemplirSelectStructFilter3,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectStructFilter3 = responseRemplirSelectStructFilter3.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectStructFilter3 = data.d.__next;
                                remplirSelectStructFilter3();
                            }
                            
                            
                            $.each(responseRemplirSelectStructFilter3, function (key, value) {

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
        remplirSelectStructFilter3();

        
      }
	   

        
        
        

}
