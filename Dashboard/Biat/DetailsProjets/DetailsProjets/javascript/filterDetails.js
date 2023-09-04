function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function mainfilter(){
      document.getElementById("loader-wrapper").style.display = "block";
      jQuery(document).ready(function() {
        jQuery('#loader-wrapper').fadeOut(5000);
        //jQuery('#wrapper').fadeIn(3000);
         
    });

                      

                      tableaux2 = document.getElementById("tableProjetDuCloture");
                      tr2 = tableaux2.getElementsByTagName("tr");
                      if(tr2.length>0){
                        $('#tableProjetDuCloture tbody').empty();                  
                      }

                     

      var urlFilterPortefeuille="";
      var nomPortefeuille =  getSelectedText("myList1");
      var nport=document.getElementById("myList1").value;
      if (nport!="") {
        document.getElementById("progTitle").innerHTML = '<i class="fa fa-dashboard"></i> ' + nomPortefeuille +'; ';
        urlFilterPortefeuille="&$filter=EnterpriseProjectTypeName%20eq%27"+nomPortefeuille+"%27";
      }
      //
      var progSelctedName1=getSelectedText("myList2");
      var nprog=document.getElementById("myList2").value;
      if (nprog!="") {
        var progn=progSelctedName1.replace("'", "''");
        document.getElementById("progTitle").innerHTML += progn +'; ';
        urlFilterPortefeuille+=" and Programme eq%27"+progn+"%27";
      }
      
      
      
      var typePrjt=getSelectedText("myList3");
      var Tproj=document.getElementById("myList3").value;
      if (Tproj!="") {
        document.getElementById("progTitle").innerHTML += typePrjt +'; ';
        urlFilterPortefeuille+=" and Sous_Portefeuilles eq%27"+typePrjt+"%27";
      }
      console.log("urlFilterPortefeuille= "+urlFilterPortefeuille);
      var responseTab=responseTab || [];
      var urlTab=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectDuration,ProjectName,ProjectStartDate,ProjectFinishDate,ProjectPercentCompleted,ProjectActualCost,ProjectActualWork"+urlFilterPortefeuille+"%20and%20Types_de_Projet%20eq%27Page_Maitre%27";
      console.log("urlTab= "+urlTab);
      function loadTab(){
           $.ajax({
              url: urlTab,
              method: "GET",
              dataType: "json",
              headers: { Accept: "application/json;odata=verbose" },
              success: function (data) {
                  responseTab = responseTab.concat(data.d.results);
                  var c=0;
                  if (data.d.__next) {
                    c++;
                      urlTab = data.d.__next;
                      loadTab();
                      
                  }
                  
                  
                  var arrId=[];
                  var arrProjNam=[];
                  var arrAch=[];
                  var arrStart=[];
                  var arrFin=[];
                  var arrCout=[];
                  var arrCharge=[];
                  var arrDuration=[];
                  var arrCoustConso=[];
                  var arrChargeConso=[];
                  
                  $.each(responseTab, function (key, value) {
                    
                    moment.locale('fr');
                    var id=value.ProjectId;
                    var nm=value.ProjectName;
                    
                    var ach=value.ProjectPercentCompleted;
                    ////console.log("stat= "+stat);
                    var deb=value.ProjectStartDate;
                    var debut=moment(deb);
                    var fin=value.ProjectFinishDate;
                    var finP=moment(fin);
                    var coutConso=value.ProjectActualCost;
                    var chargeConso=parseFloat(value.ProjectActualWork/8).toFixed(0);
                    var duree=parseFloat(value.ProjectDuration/8).toFixed(0);
                    if (arrId.indexOf(id)<0) {
                      arrId.push(id);
                      arrProjNam.push(nm);
                      arrAch.push(ach);
                      arrStart.push(debut);
                      arrFin.push(finP);
                      arrDuration.push(duree);
                      arrCoustConso.push(coutConso);
                      arrChargeConso.push(chargeConso);
                      arrCout.push("");
                      arrCharge.push("");                      
                    }
                    
                  });
                  
                  for (var i = 0; i < arrId.length; i++) {
                    loadBaselineTab(arrId[i],arrId,arrProjNam,arrAch,arrStart,arrFin,arrCout,arrCharge,arrDuration,arrCoustConso,arrChargeConso);
                  }
                  //document.getElementById("pourcentageConsBudgAnnuel").innerHTML = pourcentageConso+' <span class="text-gray">%</span>';
                  document.getElementById("nbProject").innerHTML =arrId.length+' <span class="text-gray">Projet(s)</span>';
                            
              }
          });
      }
      loadTab();

      function loadBaselineTab(projId,arrId,arrProjNam,arrAch,arrStart,arrFin,arrCout,arrCharge,arrDuration,arrCoustConso,arrChargeConso){
       
        var urlBaselineDelais=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$filter=ProjectId eq guid%27"+projId+"%27";
        ////console.log("urlBaselineDelais= "+urlBaselineDelais);
        function loadBaselineDelais(){
             $.ajax({
                url: urlBaselineDelais,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    var dataResults = data.d.results;
                    
              
                    
                    //finBaseProg debBaseProg
                    $.each(dataResults, function (key, value) {
                      moment.locale('fr');
                      var baseWork=parseFloat(value.ProjectBaselineWork/8).toFixed(1);
                      var baseCost=parseFloat(value.ProjectBaselineCost).toFixed(0);
                      arrCharge[arrId.indexOf(projId)]=baseWork;
                      arrCout[arrId.indexOf(projId)]=baseCost;
                    });
                    var trSuiv1;
                    trSuiv1 = $("<tr class='rows'/>");
                    trSuiv1.append("<td style='text-align:left; width: 25%;'>" + arrProjNam[arrId.indexOf(projId)] +"</td>");
                    trSuiv1.append("<td style='text-align:center;width: 3%; text-align: left;'><a href='https://attijaribanktn.sharepoint.com/sites/pwa/project%20detail%20pages/schedule.aspx?projuid="+projId+"&ret=0' id='redirectLink' target='_blank'><img src='/sites/pwa/_catalogs/masterpage/Dashboard/DetailsProjets/img/Link.png' class='img-rounded' alt='Cinque Terre' width='25px' height='25px'></a></td>");
                    trSuiv1.append("<td style='text-align:center;width: 9%;'>" + arrDuration[arrId.indexOf(projId)] +" </td>");
                    trSuiv1.append("<td style='text-align:center;width: 9%;'>" + moment(arrStart[arrId.indexOf(projId)]).format("DD/MM/YYYY") +"</td>");
                    trSuiv1.append("<td style='text-align:center;width: 9%;'>" + moment(arrFin[arrId.indexOf(projId)]).format("DD/MM/YYYY") +"</td>");
                    trSuiv1.append("<td style='text-align:center;width: 9%;'>" + arrAch[arrId.indexOf(projId)] +"</td>");
                    trSuiv1.append("<td style='text-align:center;width: 9%;'>" + conToMill(arrCout[arrId.indexOf(projId)]) +"</td>");
                    trSuiv1.append("<td style='text-align:center;width: 9%;'>" + conToMill(arrCoustConso[arrId.indexOf(projId)]) +"</td>");
                    trSuiv1.append("<td style='text-align:center;width: 9%;'>" + arrCharge[arrId.indexOf(projId)] +" </td>");
                    trSuiv1.append("<td style='text-align:center;width: 9%;'>" + conToMill(arrChargeConso[arrId.indexOf(projId)]) +"</td>");
                  
                    $('#tableProjetDuCloture').append(trSuiv1);
                    
                }

            });
        }
        loadBaselineDelais();
        
      }

}
