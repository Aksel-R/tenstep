var countries = [];

function unselect() {
    $.each($("#myList2 option:selected"), function () {
        countries.push($(this).val());
        //console.log("valeur= "+$(this).val());
        $(this).removeAttr("selected"); // <-- HERE
    });
}

function selectMyList1(){
	// document.getElementById("myList2").value="";
	// document.getElementById("myList3").value="";
	// document.getElementById("myList4").value="";
	// document.getElementById("myList5").value="";
	// document.getElementById("myList6").value="";
	// document.getElementById("myList7").value="";

  

  $('#myList2').empty().append('<option value="" selected>Chantier</option>');

  $('#myList8').empty().append('<option value="" selected>Programme</option>');
	
	$('#myList3').empty().append('<option value="" selected>Projet</option>');
	
	$('#myList4').empty().append('<option value="" selected>Sponsor</option>');
	
	$('#myList5').empty().append('<option value="" selected>Chef de projet</option>');
	
	$('#myList6').empty().append('<option value="" selected>Méthodologie</option>');
	
	$('#myList7').empty().append('<option value="" selected>Structure</option>');
	
	var urlFilter1Selected1= "";

	var chantierSel=document.getElementById("myList2").value;
	// //console.log("___________________________");
	// //console.log("chantierSel= "+chantierSel);
	// //console.log("___________________________");
	// unselect();
   $('#myList2').empty().append('<option value="" selected>Chantier</option>');
   chantierSel="";


	

var axeStrategique1=document.getElementById("myList1").value;
  		if (axeStrategique1!="") {
        	urlFilter1Selected1+=" and AxeStrategique%20eq%27"+axeStrategique1+"%27";
      	}else{
      		urlFilter1Selected1= "";
      		//urlFilterSelected= "";
			countSelected=0;
      	}
	   var responseRemplirSelectChantierFilter1=responseRemplirSelectChantierFilter1 || [];
        var urlRemplirSelectChantierFilter1= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,Chantier&$filter=Sousprojet%20eq%27Non%27"+urlFilter1Selected1+"&$orderby=Chantier";
        
        function remplirSelectChantierFilter1(){
          $.ajax({
                        url: urlRemplirSelectChantierFilter1,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectChantierFilter1 = responseRemplirSelectChantierFilter1.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectChantierFilter1 = data.d.__next;
                                remplirSelectChantierFilter1();
                            }
                            

                            $.each(responseRemplirSelectChantierFilter1, function (key, value) {
                                if (value.Chantier!=null) {
                                  var chantier=value.Chantier;
                                  
                                  $('#myList2').append($('<option>',
                                 {
                                    text : chantier,
                                    value:chantier,
                                    selected:false
                                  })); 
                                  var opt1 = {};
                                    $("#myList2 > option").each(function () {
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
        remplirSelectChantierFilter1();

                var responseSelectProgrammeFilter1=responseSelectProgrammeFilter1 || [];
        var urlSelectProgrammeFilter1= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme&$filter=Sousprojet%20eq%27Non%27"+urlFilter1Selected1+"&$orderby=Programme";
        function loadSelectProgrammeFilter1(){
          $.ajax({
                        url: urlSelectProgrammeFilter1,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseSelectProgrammeFilter1 = responseSelectProgrammeFilter1.concat(data.d.results);
                            if (data.d.__next) {
                                urlSelectProgrammeFilter1 = data.d.__next;
                                loadSelectProgrammeFilter1();
                            }
                            
                            

                            $.each(responseSelectProgrammeFilter1, function (key, value) {
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
        loadSelectProgrammeFilter1();

        var responseRemplirSelectProjectFilter1=responseRemplirSelectProjectFilter1 || [];
        var urlRemplirSelectProjectFilter1= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectName&$filter=Sousprojet%20eq%27Non%27"+urlFilter1Selected1+"&$orderby=ProjectName,Chantier";
        function remplirSelectProjectFilter1(){
          $.ajax({
                        url: urlRemplirSelectProjectFilter1,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectProjectFilter1 = responseRemplirSelectProjectFilter1.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectProjectFilter1 = data.d.__next;
                                remplirSelectProjectFilter1();
                            }
                            
                            
                            $.each(responseRemplirSelectProjectFilter1, function (key, value) {
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
        remplirSelectProjectFilter1();
        var responseRemplirSelectSponsorFilter1=responseRemplirSelectSponsorFilter1 || [];
        var urlRemplirSelectSponsorFilter1= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,Sponsor&$filter=Sousprojet%20eq%27Non%27"+urlFilter1Selected1+"&$orderby=Sponsor";
        function remplirSelectSponsorFilter1(){
          $.ajax({
                        url: urlRemplirSelectSponsorFilter1,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectSponsorFilter1 = responseRemplirSelectSponsorFilter1.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectSponsorFilter1 = data.d.__next;
                                remplirSelectSponsorFilter1();
                            }
                            
                            
                            $.each(responseRemplirSelectSponsorFilter1, function (key, value) {
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
        remplirSelectSponsorFilter1();
        var responseRemplirSelectCpFilter1=responseRemplirSelectCpFilter1 || [];
        var urlRemplirSelectCpFilter1= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectOwnerName&$filter=Sousprojet%20eq%27Non%27"+urlFilter1Selected1+"&$orderby=ProjectOwnerName";
        function remplirSelectCpFilter1(){
          $.ajax({
                        url: urlRemplirSelectCpFilter1,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectCpFilter1 = responseRemplirSelectCpFilter1.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectCpFilter1 = data.d.__next;
                                remplirSelectCpFilter1();
                            }
                            
                            
                            $.each(responseRemplirSelectCpFilter1, function (key, value) {
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
        remplirSelectCpFilter1();


        var responseRemplirSelectMethFilter1=responseRemplirSelectMethFilter1 || [];
        var urlRemplirSelectMethFilter1= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Typedegestion&$filter=Sousprojet%20eq%27Non%27"+urlFilter1Selected1+"&$orderby=Typedegestion";
        function remplirSelectMethFilter1(){
          $.ajax({
                        url: urlRemplirSelectMethFilter1,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectMethFilter1 = responseRemplirSelectMethFilter1.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectMethFilter1 = data.d.__next;
                                remplirSelectMethFilter1();
                            }
                            
                            
                            $.each(responseRemplirSelectMethFilter1, function (key, value) {

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
        remplirSelectMethFilter1();




        var responseRemplirSelectStructFilter1=responseRemplirSelectStructFilter1 || [];
        var urlRemplirSelectStructFilter1= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees&$filter=Sousprojet%20eq%27Non%27"+urlFilter1Selected1;
        function remplirSelectStructFilter1(){
          $.ajax({
                        url: urlRemplirSelectStructFilter1,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRemplirSelectStructFilter1 = responseRemplirSelectStructFilter1.concat(data.d.results);
                            if (data.d.__next) {
                                urlRemplirSelectStructFilter1 = data.d.__next;
                                remplirSelectStructFilter1();
                            }
                            
                            
                            $.each(responseRemplirSelectStructFilter1, function (key, value) {

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
        remplirSelectStructFilter1();

        

}
