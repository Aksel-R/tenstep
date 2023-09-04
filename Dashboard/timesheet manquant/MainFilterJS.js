function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}


function MainFilterResponsable(){
	var idRes = document.getElementById("mylist1").value;
     var ownerSelctedName=getSelectedText("mylist1");
     var responseDataTable = responseDataTable ||[];
// tableaux = document.getElementById("tableaux");
//      tr1 = tableaux.getElementsByTagName("tr");
//      if(tr1.length>0){         
//           $('#tableaux tbody').empty();
//      }

if (ownerSelctedName!="Responsable") {
  var tableaux = $('#tableaux').DataTable();
 
tableaux.clear().draw();

  var responseRessourceFilter = responseRessourceFilter ||[];
var urlRessourceFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?$select=ResourceName,Noméquipe,ResourceEmailAddress&$filter=ResourceName%20eq%27"+ownerSelctedName+"%27";

function LoadAllRessourceFilter() {

            $.ajax({url:  urlRessourceFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseRessourceFilter = responseRessourceFilter.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlRessourceFilter = data.d.__next;
                                            LoadAllRessourceFilter();
                                        }       
                                        var arrAllRessources=[];   
                                        var dirArr=[];
                                  var arrSunday=[];
            $.each(responseRessourceFilter, function(key, value) 
            {
              var mail=value.ResourceEmailAddress;
              if (mail!=null) {
                var nomRessource=value.ResourceName;
                    if (((nomRessource == "Ressource locale générique")||(nomRessource == "Ressource inconnue")||(nomRessource == "Ressource non affectée"))) {
                        nomRessource="";
                    }else{
                        arrAllRessources.push(nomRessource);
                        var direction="";
                        if (value.Noméquipe!=null) {
                          direction=value.Noméquipe;
                        }
                        dirArr.push(direction);
                    }
              }
                    
            });
            moment.locale('fr');
            var sunday = moment().startOf('year').day("Monday");
            var today=moment();
                        //console.log("sunday= "+moment(sunday).format('DD-MM-YYYY'));
                        if (sunday.date() > 8) sunday.add(8, 'd');
                        var month = sunday.year();
                        //console.log("month= "+month);
                        while ((month === sunday.year())&&(moment(sunday).isBefore(today))) {
                            //console.log("sunday.toString()= "+sunday.toString());
                            var days = sunday.toString();
                            sunday.add(7, 'd');
                            dayss = moment(days).add('days', -1).format('L');
                            arrSunday.push(days);
                        }
                        console.log("arrSunday= "+arrSunday.join());
                        for (var i = 0; i < arrSunday.length; i++) {
                          var periode=moment(arrSunday[i]).add('days', -1).format("YYYY-MM-DD");
                          var debutSemaine=arrSunday[i];
                          getRessourcesManquantsFilter(arrAllRessources,periode,debutSemaine,dirArr);
                        }
                  console.log("arrSunday length= "+arrSunday.length);

}   
});
}                                  
LoadAllRessourceFilter();

function getRessourcesManquantsFilter(arrAllRessources,periode,debutSemaine,dirArr){
    var responsegetRessourcesManquantsFilter = responsegetRessourcesManquantsFilter ||[];
    var urlgetRessourcesManquantsFilterFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetOwner,TimesheetApproverResourceName,PeriodStartDate,PeriodEndDate&$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27";
    //console.log("urlgetRessourcesManquantsFilterFilter= "+urlgetRessourcesManquantsFilterFilter);
    function LoadRessourcesManquantsFilter() {

                $.ajax({url:  urlgetRessourcesManquantsFilterFilter,          
                                        method: "GET",
                                        dataType: "json",
                                        headers: {Accept: "application/json;odata=verbose"},       
                                        success: function(data) {     
                                        responsegetRessourcesManquantsFilter = responsegetRessourcesManquantsFilter.concat(data.d.results);
                                            if (data.d.__next) {
                                                urlgetRessourcesManquantsFilterFilter = data.d.__next;
                                                LoadRessourcesManquantsFilter();
                                            }       
                                             
                                          
                              var arrRessValid=[];
                              var arrRessNonValid=[];
                              var debPer=moment(debutSemaine).add('days', -1).format("DD-MM-YYYY");
                              var finPer=moment(debutSemaine).add('days', 5).format("DD-MM-YYYY");
                              //var t = $('#tableaux').DataTable();
                $.each(responsegetRessourcesManquantsFilter, function(key, value) 
                {
                  moment.locale('fr');
                  var nomRessourceF=value.TimesheetOwner;
                  if (arrRessValid.indexOf(nomRessourceF)==-1) {
                    arrRessValid.push(nomRessourceF);
                  }
                   
                });
                var t = $('#tableaux').DataTable();
                for (var i = 0; i < arrAllRessources.length; i++) {
                  if (arrRessValid.indexOf(arrAllRessources[i])==-1)
                  arrRessNonValid.push(arrAllRessources[i]);
                t.row.add( [
                  dirArr[i],
                  '',
                  arrAllRessources[i],
                  debPer,
                  finPer
              ] ).draw( false );
                }
                console.log("arrRessNonValid= "+arrRessNonValid);

                /*for (var i = 0; i < arrRessNonValid.length; i++) {
                  
                  var tr;
                    tr = $("<tr>");
                        tr.append("<td style='text-align:left'></td>");//0
                        tr.append("<td></td>");//1                        
                        tr.append("<td>" + arrRessNonValid[i] + "</td>"); //2
                        tr.append("<td>"+debPer+"</td>"); //3
                        tr.append("<td>" + finPer+ "</td>"); //4
                        
                        $('#tableaux tbody').append(tr);
                }
                $('#tableaux').DataTable();*/
                    
                /*t.row.add( [
                  '',
                  '',
                  arrRessNonValid[i],
                  debPer,
                  finPer
              ] ).draw( false );*/
    }   
    });
    }         
    LoadRessourcesManquantsFilter(); 
}
}else if(ownerSelctedName=="Responsable"){
  var tableaux = $('#tableaux').DataTable();
 
tableaux.clear().draw();

   var responseRessourceFilterNone = responseRessourceFilterNone ||[];
var urlRessourceFilterNone = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?$select=ResourceName,Noméquipe,ResourceEmailAddress";

function LoadAllRessourceFilterNone() {

            $.ajax({url:  urlRessourceFilterNone,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseRessourceFilterNone = responseRessourceFilterNone.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlRessourceFilterNone = data.d.__next;
                                            LoadAllRessourceFilterNone();
                                        }       
                                        var arrAllRessources=[];   
                                        var dirArr=[];
                                  var arrSunday=[];
            $.each(responseRessourceFilterNone, function(key, value) 
            {
              var mail=value.ResourceEmailAddress;
              if (mail!=null) {
                var nomRessource=value.ResourceName;
                    if (((nomRessource == "Ressource locale générique")||(nomRessource == "Ressource inconnue")||(nomRessource == "Ressource non affectée"))) {
                        nomRessource="";
                    }else{
                        arrAllRessources.push(nomRessource);
                        var direction="";
                        if (value.Noméquipe!=null) {
                          direction=value.Noméquipe;
                        }
                        dirArr.push(direction);
                    }
              }
                    
            });
            moment.locale('fr');
            var sunday = moment().startOf('year').day("Monday");
            var today=moment();
                        //console.log("sunday= "+moment(sunday).format('DD-MM-YYYY'));
                        if (sunday.date() > 8) sunday.add(8, 'd');
                        var month = sunday.year();
                        //console.log("month= "+month);
                        while ((month === sunday.year())&&(moment(sunday).isBefore(today))) {
                            //console.log("sunday.toString()= "+sunday.toString());
                            var days = sunday.toString();
                            sunday.add(7, 'd');
                            dayss = moment(days).add('days', -1).format('L');
                            arrSunday.push(days);
                        }
                        console.log("arrSunday= "+arrSunday.join());
                        for (var i = 0; i < arrSunday.length; i++) {
                          var periode=moment(arrSunday[i]).add('days', -1).format("YYYY-MM-DD");
                          var debutSemaine=arrSunday[i];

                          getRessourcesManquantsFilterNone(arrAllRessources,periode,debutSemaine,dirArr);
                        }
                  console.log("arrSunday length= "+arrSunday.length);
                  console.log("dirArr= "+dirArr);

}   
});
}                                  
LoadAllRessourceFilterNone();

function getRessourcesManquantsFilterNone(arrAllRessources,periode,debutSemaine,dirArr){
    var responsegetRessourcesManquantsFilterNone = responsegetRessourcesManquantsFilterNone ||[];
    var urlgetRessourcesManquantsFilterNone = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetOwner,TimesheetApproverResourceName,PeriodStartDate,PeriodEndDate&$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27";
    //console.log("urlgetRessourcesManquantsFilterNone= "+urlgetRessourcesManquantsFilterNone);
    function LoadRessourcesManquantsFilterNone() {

                $.ajax({url:  urlgetRessourcesManquantsFilterNone,          
                                        method: "GET",
                                        dataType: "json",
                                        headers: {Accept: "application/json;odata=verbose"},       
                                        success: function(data) {     
                                        responsegetRessourcesManquantsFilterNone = responsegetRessourcesManquantsFilterNone.concat(data.d.results);
                                            if (data.d.__next) {
                                                urlgetRessourcesManquantsFilterNone = data.d.__next;
                                                LoadRessourcesManquantsFilterNone();
                                            }       
                                             
                                          
                              var arrRessValid=[];
                              var arrRessNonValid=[];
                              var debPer=moment(debutSemaine).add('days', -1).format("DD-MM-YYYY");
                              var finPer=moment(debutSemaine).add('days', 5).format("DD-MM-YYYY");
                              //var t = $('#tableaux').DataTable();
                $.each(responsegetRessourcesManquantsFilterNone, function(key, value) 
                {
                  moment.locale('fr');
                  var nomRessourceF=value.TimesheetOwner;
                  if (arrRessValid.indexOf(nomRessourceF)==-1) {
                    arrRessValid.push(nomRessourceF);
                  }
                   
                });
                var t = $('#tableaux').DataTable();
                for (var i = 0; i < arrAllRessources.length; i++) {
                  if (arrRessValid.indexOf(arrAllRessources[i])==-1)
                  arrRessNonValid.push(arrAllRessources[i]);
                t.row.add( [
                  dirArr[i],
                  '',
                  arrAllRessources[i],
                  debPer,
                  finPer
              ] ).draw( false );
                }
                console.log("arrRessNonValid= "+arrRessNonValid);

                /*for (var i = 0; i < arrRessNonValid.length; i++) {
                  
                  var tr;
                    tr = $("<tr>");
                        tr.append("<td style='text-align:left'></td>");//0
                        tr.append("<td></td>");//1                        
                        tr.append("<td>" + arrRessNonValid[i] + "</td>"); //2
                        tr.append("<td>"+debPer+"</td>"); //3
                        tr.append("<td>" + finPer+ "</td>"); //4
                        
                        $('#tableaux tbody').append(tr);
                }
                $('#tableaux').DataTable();*/
                    
                /*t.row.add( [
                  '',
                  '',
                  arrRessNonValid[i],
                  debPer,
                  finPer
              ] ).draw( false );*/
    }   
    });
    }         
    LoadRessourcesManquantsFilterNone(); 
}
}


}