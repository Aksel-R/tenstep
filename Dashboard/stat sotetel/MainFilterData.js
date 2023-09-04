function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}


function FilterData()

{

    tableJalTer = document.getElementById("msTable");
     trJalTer = tableJalTer.getElementsByTagName("tr");
     if(trJalTer.length>0){         
          $('#msTable tbody').empty();
     }
     tableJalRet = document.getElementById("msTableer");
     trJalRet = tableJalRet.getElementsByTagName("tr");
     if(trJalRet.length>0){         
          $('#msTableer tbody').empty();
     }
     tableJalAv = document.getElementById("msTableav");
     trJalAv = tableJalAv.getElementsByTagName("tr");
     if(trJalAv.length>0){         
          $('#msTableav tbody').empty();
     }

      var idProjet = document.getElementById("mylist4").value;
      var nomProjects =  getSelectedText("mylist4");

      if((idProjet !="")&&(nomProjects !=""))
      {


function LoadChefProjet() {
               var data =  $.ajax({ url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectServer/Projects(guid'"+idProjet+"')/IncludeCustomFields/Owner",
                                                                                              
                type: "GET",
                dataType: "json",
                headers: {
                  "Accept": "application/json; odata=verbose"}});

                  var listItemInfo  = "";
                  var listItemInfo1 = "";
                
                data.done(function (data,textStatus, jqXHR){
                    if (data.d.results == undefined) {  
                        data.d.results = new Array();
                        data.d.results[0] = new Object();
                        data.d.results[0] = data.d.Title;
                        
                      
                        var chefProjet = data.d.Title;
                        
                         
              } 
              document.getElementById('chefProjet').innerHTML = chefProjet;

        });
                
    }

LoadChefProjet();






function LoadAllStartDateFinish() {
               var data =  $.ajax({ url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectServer/Projects(guid'"+idProjet+"')",
                                                                                              
                type: "GET",
                dataType: "json",
                headers: {
                  "Accept": "application/json; odata=verbose"}});

                            var dureeprojet;
                            var datedebut;
                            var datefin;
                            var diff1 = 0; 
                
                data.done(function (data,textStatus, jqXHR){
                    if (data.d.results == undefined) {  

                        data.d.results = new Array();
                        data.d.results[0] = new Object();
                        data.d.results[0] = data.d.Title;
                        data.d.results[0] = data.d.StartDate;
                        data.d.results[0] = data.d.FinishDate;
                    moment.locale('fr');
                      
                        datedebut = moment(data.d.StartDate);
                     datefin = moment(data.d.FinishDate);
                 
                        console.log("datedebut " + datedebut);
                        console.log("datefin " + datefin);
                 
                    diff1 = calculateBusinessDays(datedebut,datefin);
                    
                         
              document.getElementById('dureeProjet').innerHTML =diff1 ;
              } 

        });
                
    }

LoadAllStartDateFinish();


}

}