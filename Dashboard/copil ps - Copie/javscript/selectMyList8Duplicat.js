function selectMyList8(){

	$('#myList3').empty().append('<option value="" selected>Projet</option>');
	$('#myList4').empty().append('<option value="" selected>Sponsor</option>');
	$('#myList5').empty().append('<option value="" selected>Chef de projet</option>');
	$('#myList6').empty().append('<option value="" selected>Méthodologie</option>');
	$('#myList7').empty().append('<option value="" selected>Structure</option>');
	var urlFilterSelected8= "";

var ProgrammeSel=document.getElementById("myList8").value;
  if (ProgrammeSel=="") {
          selectMyList2();
      }else{
        urlFilterSelected8+="%20and%20Programme%20eq%27"+ProgrammeSel+"%27";
        
        var axeStrategique8=document.getElementById("myList1").value;
      if (axeStrategique8!="") {       
          urlFilterSelected8+="%20and%20AxeStrategique%20eq%27"+axeStrategique8+"%27";  
            
      }
      var chantierSe8=document.getElementById("myList2").value;
      if (chantierSe8!="") {
          urlFilterSelected8+="%20and%20Chantier%20eq%27"+chantierSe8+"%27";  
           
      }

        var responseRemplirSelectProjectFilter8=responseRemplirSelectProjectFilter8 || [];
        var urlRemplirSelectProjectFilter8= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectName&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected8+"&$orderby=ProjectName,Chantier";
        function remplirSelectProjectFilter8(){
          $.ajax({
                        url: urlRemplirSelectProjectFilter8,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectProjectFilter8 = responseRemplirSelectProjectFilter8.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectProjectFilter8 = data.d.__next;
                                remplirSelectProjectFilter8();
                            }
                            
                            
                            $.each(responseRemplirSelectProjectFilter8, function (key, value) {
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
        remplirSelectProjectFilter8();
        var responseRemplirSelectSponsorFilter8=responseRemplirSelectSponsorFilter8 || [];
        var urlRemplirSelectSponsorFilter8= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,Sponsor&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected8+"&$orderby=Sponsor";
        function remplirSelectSponsorFilter8(){
          $.ajax({
                        url: urlRemplirSelectSponsorFilter8,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectSponsorFilter8 = responseRemplirSelectSponsorFilter8.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectSponsorFilter8 = data.d.__next;
                                remplirSelectSponsorFilter8();
                            }
                            
                            
                            $.each(responseRemplirSelectSponsorFilter8, function (key, value) {
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
        remplirSelectSponsorFilter8();
        var responseRemplirSelectCpFilter8=responseRemplirSelectCpFilter8 || [];
        var urlRemplirSelectCpFilter8= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectOwnerName&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected8+"&$orderby=ProjectOwnerName";
        function remplirSelectCpFilter8(){
          $.ajax({
                        url: urlRemplirSelectCpFilter8,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectCpFilter8 = responseRemplirSelectCpFilter8.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectCpFilter8 = data.d.__next;
                                remplirSelectCpFilter8();
                            }
                            
                            
                            $.each(responseRemplirSelectCpFilter8, function (key, value) {
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
        remplirSelectCpFilter8();


        var responseRemplirSelectMethFilter8=responseRemplirSelectMethFilter8 || [];
        var urlRemplirSelectMethFilter8= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Typedegestion&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected8+"&$orderby=Typedegestion";
        function remplirSelectMethFilter8(){
          $.ajax({
                        url: urlRemplirSelectMethFilter8,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectMethFilter8 = responseRemplirSelectMethFilter8.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectMethFilter8 = data.d.__next;
                                remplirSelectMethFilter8();
                            }
                            
                            
                            $.each(responseRemplirSelectMethFilter8, function (key, value) {

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
        remplirSelectMethFilter8();




        var responseRemplirSelectStructFilter8=responseRemplirSelectStructFilter8 || [];
        var urlRemplirSelectStructFilter8= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected8;
        function remplirSelectStructFilter8(){
          $.ajax({
                        url: urlRemplirSelectStructFilter8,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectStructFilter8 = responseRemplirSelectStructFilter8.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectStructFilter8 = data.d.__next;
                                remplirSelectStructFilter8();
                            }
                            
                            
                            $.each(responseRemplirSelectStructFilter8, function (key, value) {

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
        remplirSelectStructFilter8();

        
      }
	   

        

}
