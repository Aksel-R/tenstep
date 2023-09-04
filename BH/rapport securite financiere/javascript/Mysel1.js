function remplirSel() {
	var dirReg = document.getElementById("myList1").value;

  	if (dirReg!="") {
  		var urlSelected="";
  		var urlSelected2="";
  		if (dirReg!="") {
  			urlSelected+=" and R_x00e9_gion_x0020_de_x0020_l_x0 eq'"+dirReg+"'";
  			urlSelected2+="&$filter=Direction_x0020_R_x00e9_gionale eq'"+dirReg+"'";
  		}
  		

		  $('#myList2').empty();
		  $('#myList2').append('<option value="" selected>Contrôleur</option>');
		   var responseControleurFilter1=responseControleurFilter1||[];
  var urlControleurFilter1=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Agences')/items?$select=Contr_x00f4_leur_x0020_R_x00e9_gId"+urlSelected2;
  //////////////////console.log.log('urlControleurFilter1= '+urlControleurFilter1);
  function LoadControleurFilter1() {
            var nbre = 0;


            $.ajax({
                url: urlControleurFilter1,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseControleurFilter1 = responseControleurFilter1.concat(data.d.results);
                    if (data.d.__next) {
                        urlControleurFilter1 = data.d.__next;
                        LoadControleurFilter1();
                    }
                    if (!data.d.__next) {
                      var arrControlleurId=[];
                      var arrControlleurNom=[];
                      var arrJourControl=[];
                      var arrAvgControlJr=[];
                      var nbJournee=0;
                      $.each(responseControleurFilter1, function (key, value) {
                        var listControleur=[];
                        ////console.log("va="+value.Contr_x00f4_leur_x0020_R_x00e9_gId.results);
                        listControleur=value.Contr_x00f4_leur_x0020_R_x00e9_gId.results;
                         for (var i = 0; i < listControleur.length; i++) {
                          ////console.log(listControleur[i]);
                            if (arrControlleurId.indexOf(listControleur[i])==-1) {
                              arrControlleurId.push(listControleur[i]);
                              arrControlleurNom.push("");
                              arrJourControl.push(0);
                              arrAvgControlJr.push(0);
                            }
                          }
                      });
                     
                      //console.log("arrControlleurId= "+arrControlleurId);
                      for (var i = 0; i < arrControlleurId.length; i++) {
                        remplirArrControleurFilter1(arrControlleurId[i],arrControlleurId,arrControlleurNom,i,nbJournee,arrJourControl,arrAvgControlJr);
                      }
                    }
                    
                  
                    
                    
                }
            });
        }
        LoadControleurFilter1();
        
        function remplirArrControleurFilter1(userid,arrControlleurId,arrControlleurNom,count,nbJournee,arrJourControl,arrAvgControlJr) {
          var urlCurrUserFilter1=_spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";
          var responseCurrUserFilter1=responseCurrUserFilter1||[];
          function putCurrUserFilter1() {
            $.ajax({
                url: urlCurrUserFilter1,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseCurrUserFilter1 = responseCurrUserFilter1.concat(data.d.results);
                    if (data.d.__next) {
                        urlCurrUserFilter1 = data.d.__next;
                        putCurrUserFilter1();
                    }
                    ////console.log("Title= "+data.d.Title)
                        var nomU=data.d.Title;
                        arrControlleurNom[arrControlleurId.indexOf(userid)]=nomU;
                    // if (!data.d.__next) {
                    //   $.each(responseCurrUserFilter1, function (key, value) {

                    //   });
                     
                    // }
                    if (count==arrControlleurNom.length-1) {
                      rempliSel2Filter1(arrControlleurNom,arrControlleurId);
                      
                      

                    }
                   
                    
                    
                }
            });
          }
          putCurrUserFilter1();
        }
        function rempliSel2Filter1(arrControlleurNom,arrControlleurId) {
  for (var i = 0; i < arrControlleurNom.length; i++) {
    if (arrControlleurNom!="") {                          
      $('#myList2').append($('<option>',
        {
          text : arrControlleurNom[i],
          value: arrControlleurId[i]
        })); 
    }
  }
}
  	}
}