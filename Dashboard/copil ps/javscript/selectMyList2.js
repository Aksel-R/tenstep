function selectMyList2(){
  $('#myList8').empty().append('<option value="" selected>Programme</option>');
	$('#myList3').empty().append('<option value="" selected>Projet</option>');
	$('#myList4').empty().append('<option value="" selected>Sponsor</option>');
	$('#myList5').empty().append('<option value="" selected>Chef de projet</option>');
	$('#myList6').empty().append('<option value="" selected>Méthodologie</option>');
	$('#myList7').empty().append('<option value="" selected>Structure</option>');
	var urlFilterSelected2= "";

var chantierSel=document.getElementById("myList2").value;
  if (chantierSel=="") {
          selectMyList1();
      }else{
        urlFilterSelected2+="%20and%20Chantier%20eq%27"+chantierSel+"%27";
         var axeStrategique1=document.getElementById("myList1").value;
      if (axeStrategique1!="") {       
          urlFilterSelected2+="%20and%20AxeStrategique%20eq%27"+axeStrategique1+"%27";  
          
      }
        
        var responseSelectProgrammeFilter2=responseSelectProgrammeFilter2 || [];
        var urlSelectProgrammeFilter2= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected2+"&$orderby=Programme";
        function loadSelectProgrammeFilter2(){
          $.ajax({
                        url: urlSelectProgrammeFilter2,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseSelectProgrammeFilter2 = responseSelectProgrammeFilter2.concat(data.d.results);
                            if (data.d.__next) {
                                urlSelectProgrammeFilter2 = data.d.__next;
                                loadSelectProgrammeFilter2();
                            }
                            
                            

                            $.each(responseSelectProgrammeFilter2, function (key, value) {
                               if (value.Programme!=null) {
                                var programme=value.Programme;
                                $('#myList8').append($('<option>',
                               {
                                  text : programme,
                                  value:programme
                                })); 
                                var opt1 = {};
                                  $("#myList8 > option").each(function () {
                                    if(opt1[$(this).text()]) {
                                        $(this).remove();
                                    } else {
                                        opt1[$(this).text()] = $(this).val();
                                    }
                                   });
                               }
                               
                               
                               


                            });
                            
                        }
                    });
        }
        loadSelectProgrammeFilter2();

        var responseRemplirSelectProjectFilter2=responseRemplirSelectProjectFilter2 || [];
        var urlRemplirSelectProjectFilter2= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectName&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected2+"&$orderby=ProjectName,Chantier";
        function remplirSelectProjectFilter2(){
          $.ajax({
                        url: urlRemplirSelectProjectFilter2,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectProjectFilter2 = responseRemplirSelectProjectFilter2.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectProjectFilter2 = data.d.__next;
                                remplirSelectProjectFilter2();
                            }
                            
                            
                            $.each(responseRemplirSelectProjectFilter2, function (key, value) {
                                if (value.ProjectName!=null) {
                                    var nomP=value.ProjectName;
                                    var idp=value.ProjectId;
                                    $('#myList3').append($('<option>',
                                   {
                                      text : nomP,
                                      value:nomP
                                    })); 
                                    var opt2 = {};
                                      $("#myList3 > option").each(function () {
                                        if(opt2[$(this).text()]) {
                                            $(this).remove();
                                        } else {
                                            opt2[$(this).text()] = $(this).val();
                                        }
                                       });
                                   }
                            });
                            
                        }
                    });
        }
        remplirSelectProjectFilter2();
        var responseRemplirSelectSponsorFilter2=responseRemplirSelectSponsorFilter2 || [];
        var urlRemplirSelectSponsorFilter2= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,Sponsor&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected2+"&$orderby=Sponsor";
        function remplirSelectSponsorFilter2(){
          $.ajax({
                        url: urlRemplirSelectSponsorFilter2,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectSponsorFilter2 = responseRemplirSelectSponsorFilter2.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectSponsorFilter2 = data.d.__next;
                                remplirSelectSponsorFilter2();
                            }
                            
                            
                            $.each(responseRemplirSelectSponsorFilter2, function (key, value) {
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
        remplirSelectSponsorFilter2();
        var responseRemplirSelectCpFilter2=responseRemplirSelectCpFilter2 || [];
        var urlRemplirSelectCpFilter2= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectOwnerName&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected2+"&$orderby=ProjectOwnerName";
        function remplirSelectCpFilter2(){
          $.ajax({
                        url: urlRemplirSelectCpFilter2,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectCpFilter2 = responseRemplirSelectCpFilter2.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectCpFilter2 = data.d.__next;
                                remplirSelectCpFilter2();
                            }
                            
                            
                            $.each(responseRemplirSelectCpFilter2, function (key, value) {
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
        remplirSelectCpFilter2();


        var responseRemplirSelectMethFilter2=responseRemplirSelectMethFilter2 || [];
        var urlRemplirSelectMethFilter2= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Typedegestion&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected2+"&$orderby=Typedegestion";
        function remplirSelectMethFilter2(){
          $.ajax({
                        url: urlRemplirSelectMethFilter2,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectMethFilter2 = responseRemplirSelectMethFilter2.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectMethFilter2 = data.d.__next;
                                remplirSelectMethFilter2();
                            }
                            
                            
                            $.each(responseRemplirSelectMethFilter2, function (key, value) {

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
        remplirSelectMethFilter2();




        var responseRemplirSelectStructFilter2=responseRemplirSelectStructFilter2 || [];
        var urlRemplirSelectStructFilter2= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected2;
        function remplirSelectStructFilter2(){
          $.ajax({
                        url: urlRemplirSelectStructFilter2,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectStructFilter2 = responseRemplirSelectStructFilter2.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectStructFilter2 = data.d.__next;
                                remplirSelectStructFilter2();
                            }
                            
                            
                            $.each(responseRemplirSelectStructFilter2, function (key, value) {

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
        remplirSelectStructFilter2();

        
      }
	   

        

}
