   function getSelectedText(elementId) {
      var elt = document.getElementById(elementId);
      return elt.options[elt.selectedIndex].text;
   }
    function mainFilter(){
      $('#tableaux tbody').empty();
      moment.locale('fr');
      
      var per = document.getElementById("debPeriode").value;
      var periode=moment(per).add('days', -1).format("YYYY-MM-DD");

      var datePerioodeSelect=document.getElementById("debPeriode").value;
      var typeOperationSelect=document.getElementById("typeOp").value;
      var responsableSelect=document.getElementById("responsable").value;
      var resourceSelect=document.getElementById("resourcePart").value;
      var categorieSelect=document.getElementById("categorie").value;
      var ressourceArr=$("#resourcePart").val();
      //console.log("datePerioodeSelect= '"+datePerioodeSelect+"'");
      //console.log("typeOperationSelect= '"+typeOperationSelect+"'");
      //console.log("responsableSelect= '"+responsableSelect+"'");
      //console.log("resourceSelect= '"+resourceSelect+"'");
      //console.log("categorieSelect= '"+categorieSelect+"'");
     
      if ((datePerioodeSelect!="")&&(typeOperationSelect=="")&&(responsableSelect=="")&&(categorieSelect=="")) {
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27";
      }else if ((datePerioodeSelect=="")&&(typeOperationSelect!="")&&(responsableSelect=="")&&(categorieSelect=="")) {
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=ProjectName%20eq%20%27"+typeOperationSelect+"%27";
      }
      else if ((datePerioodeSelect=="")&&(typeOperationSelect=="")&&(responsableSelect!="")&&(categorieSelect=="")) {
      
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27";
        //remplirRessources();
      }
      else if ((datePerioodeSelect=="")&&(typeOperationSelect=="")&&(responsableSelect=="")&&(categorieSelect!="")) {
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
      }
      else if ((datePerioodeSelect!="")&&(typeOperationSelect!="")&&(responsableSelect=="")&&(categorieSelect=="")) {
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27%20and%20ProjectName%20eq%20%27"+typeOperationSelect+"%27";
      }
      else if ((datePerioodeSelect=="")&&(typeOperationSelect!="")&&(responsableSelect!="")&&(categorieSelect=="")) {
        
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=ProjectName%20eq%20%27"+typeOperationSelect+"%27%20and%20TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27";
        //remplirRessources();
      }
      else if ((datePerioodeSelect!="")&&(typeOperationSelect=="")&&(responsableSelect!="")&&(categorieSelect=="")) {
        
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27%20and%20TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27";
        //remplirRessources();
      }
      else if ((datePerioodeSelect!="")&&(typeOperationSelect!="")&&(responsableSelect!="")&&(categorieSelect=="")) {
        
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27%20and%20ProjectName%20eq%20%27"+typeOperationSelect+"%27%20and%20TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27";
        //remplirRessources();
      }
      else if ((datePerioodeSelect!="")&&(typeOperationSelect!="")&&(responsableSelect=="")&&(categorieSelect!="")) {
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27%20and%20ProjectName%20eq%20%27"+typeOperationSelect+"%27%20and%20TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
      }
      else if ((datePerioodeSelect!="")&&(typeOperationSelect=="")&&(responsableSelect!="")&&(categorieSelect!="")) {
        
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27%20and%20TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27%20and%20TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
        //remplirRessources();
      }
      else if ((datePerioodeSelect=="")&&(typeOperationSelect!="")&&(responsableSelect!="")&&(categorieSelect!="")) {
        
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=ProjectName%20eq%20%27"+typeOperationSelect+"%27%20and%20TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27%20and%20TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
        //remplirRessources();
      }

      else if ((datePerioodeSelect=="")&&(typeOperationSelect=="")&&(responsableSelect!="")&&(categorieSelect!="")) {
        
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27%20and%20TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
        //remplirRessources();
      }
      else if ((datePerioodeSelect=="")&&(typeOperationSelect!="")&&(responsableSelect=="")&&(categorieSelect!="")) {
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=ProjectName%20eq%20%27"+typeOperationSelect+"%27%%20and%20TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
      }
      else if ((datePerioodeSelect!="")&&(typeOperationSelect=="")&&(responsableSelect=="")&&(categorieSelect!="")) {
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27%20and%20TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
      }
      else if ((datePerioodeSelect!="")&&(typeOperationSelect!="")&&(responsableSelect!="")&&(categorieSelect!="")) {
        
        var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27%20and%20ProjectName%20eq%20%27"+typeOperationSelect+"%27%20and%20TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27%20and%20TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
        //remplirRessources();
      }

     // console.log("Selected value is: "+$("#resourcePart").val());
      ////console.log("urlriode= "+urlPeriode);
      
      getFilterResult(urlPeriode,ressourceArr);
      if ((datePerioodeSelect=="")&&(typeOperationSelect=="")&&(responsableSelect=="")&&(categorieSelect=="")) {
        affichagePrincipal(ressourceArr);

      }
    }

function getFilterResult(urlPeriode,ressourceArr){
  console.log("ressourceArr= "+ressourceArr);
  
   var responsePeriode = responsePeriode ||[];
     
function loadTabTimeSheetWeek() {
 $.ajax({url:  urlPeriode,          
         method: "GET",
         dataType: "json",
         headers: {Accept: "application/json;odata=verbose"},       
         success: function(data) {     
         responsePeriode = responsePeriode.concat(data.d.results);
           if (data.d.__next) {
             urlPeriode = data.d.__next;
             loadTabTimeSheetWeek();
          } 
          var count=0;         
                    var nomTache;
                    var idFeuille;
var categorie;
var statut;
var nbHeursTotal;
var dateDebFeuille;
var debF;
var dateFinFeuille;
var finF;      
var collaborateur;
var count1=0;
            $.each(responsePeriode, function(key, value) 
            {
                moment.locale('fr');
                
                console.log("ressourceArr= "+ressourceArr.join());
              collaborateur=value.TimesheetOwner;
              var verif=false;
              for (var i = 0; i < ressourceArr.length; i++) {
                if (ressourceArr[i]==collaborateur) {
                  verif=true;
                }
                
              }
              
              if (verif==true) {

              
                var responsable=value.TimesheetApproverResourceName;
              if ((responsable == "Ressource locale générique")||(responsable == "Ressource inconnue")||(responsable == "Ressource non affectée")) {
                responsable = "";
              }
              idFeuille=value.TimesheetLineId;
              //////console.log("idFeuille= "+idFeuille);
              nomTache=value.TaskName;
              categorie=value.TimesheetClassName;
              statut=value.TimesheetStatus;
              nbHeursTotal=value.ActualWorkBillable;
              dateDebFeuille=value.PeriodStartDate;
              debF=moment(dateDebFeuille).format('DD-MM-YYYY');
              dateFinFeuille=value.PeriodEndDate;
              finF=moment(dateFinFeuille).format('DD-MM-YYYY');
              

              
                

              }else {
                return null;
                console.log("pfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
              }
           

              
            count1++;
            console.log("count1= "+count1);
              remplirTabPeriode(idFeuille,nomTache,categorie,statut,nbHeursTotal,debF,finF,collaborateur,responsable,dateDebFeuille);
 

            });
            
            
       }
  });
         }
        loadTabTimeSheetWeek();




function remplirTabPeriode(idFeuille,nomTache,categorie,statut,nbHeursTotal,debF,finF,collaborateur,responsable,dateDebFeuille){

    var responseTabTimeSheetPeriode = responseTabTimeSheetPeriode ||[];
     var urlTabTimeSheetPeriode = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLineActualDataSet?$select=TimeByDay,ActualWorkBillable,PlannedWork,ActualOvertimeWorkBillable,ActualOvertimeWorkNonBillable&$filter=TimesheetLineId%20eq%20guid%27"+idFeuille+"%27&$orderby= TimeByDay asc";
////console.log("url= "+urlTabTimeSheetPeriode);
function loadTabTimeSheetPeriode() {
 $.ajax({url:  urlTabTimeSheetPeriode,          
         method: "GET",
         dataType: "json",
         headers: {Accept: "application/json;odata=verbose"},       
         success: function(data) {     
         responseTabTimeSheetPeriode = responseTabTimeSheetPeriode.concat(data.d.results);
           if (data.d.__next) {
             urlTabTimeSheetPeriode = data.d.__next;
             loadTabTimeSheetPeriode();
          } 
          var arrPlanifier=[0,0,0,0,0,0,0];
          var arrActuel=[0,0,0,0,0,0,0];
          var arrDatFeuille=["","","","","","",""]; 
          var arrSupp=[0,0,0,0,0,0,0];       
          var jourSemaine=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
          //arrDatFeuille[0]=debF;
          //arrDatFeuille[6]= "";
          //var date6=moment(dateDebFeuille).add(1, 'day').format('DD-MM-YYYY')
          //////console.log("debF= "+debF);
          //////console.log("date6= "+date6);


            $.each(responseTabTimeSheetPeriode, function(key, value) 
            {
              moment.locale('fr');
             
                              var date=value.TimeByDay;
                  var dateFeuille=moment(date).format('DD-MM-YYYY');
                  var dayWeek=moment(date).format('dddd');
                  var travailAct=value.ActualWorkBillable;
                  var travailPlan=value.PlannedWork;
                  var travailSup1=value.ActualOvertimeWorkBillable;
                  var travailSup2=value.ActualOvertimeWorkNonBillable;
                  var travailSup=parseInt(travailSup1+travailSup2);
                  if (arrDatFeuille.indexOf(dateFeuille)==-1){
                    arrDatFeuille[jourSemaine.indexOf(dayWeek)]=dateFeuille;
                    jourSemaine[jourSemaine.indexOf(dayWeek)]=dayWeek;
                    arrPlanifier[jourSemaine.indexOf(dayWeek)]=travailPlan;
                    arrActuel[jourSemaine.indexOf(dayWeek)]=travailAct;
                    arrSupp[jourSemaine.indexOf(dayWeek)]=travailSup;
              }


               
            });
            var nbJrTravail=0;
            var totalActuel=0;
            for (var i = 0; i <arrActuel.length; i++) {
                totalActuel+=parseInt(arrActuel[i]);
                if (arrActuel[i]!=0) {
                    nbJrTravail+=1;
                }
            }
            var totalPlanifier=0;
            for (var i = 0; i <arrPlanifier.length; i++) {
                totalPlanifier+=parseInt(arrPlanifier[i]);
            }
            var totalSupp=0;
            for (var i = 0; i <arrSupp.length; i++) {
                totalSupp+=parseInt(arrSupp[i]);
            }
            console.log("totalPlanifier= "+totalPlanifier);
            console.log("totalActuel= "+totalActuel);
            console.log("collaborateur = "+collaborateur);
            console.log("idFeuille= "+idFeuille);
            console.log("date = "+arrDatFeuille.join());
            console.log("jourSemaine = "+jourSemaine.join());
            console.log("planifier = "+arrPlanifier.join());
            console.log("actuel = "+arrActuel.join());
            console.log("____________________________________________________________________");


             //var collaborateur=value.TimesheetOwner;
              //if (ressourceArr.indexOf(collaborateur)>-1){}
             
                var tr1;
                tr1 = $("<tr>");
                tr1.append("<td rowspan='4'>"+collaborateur+"</td>");
                tr1.append("<td rowspan='4'>"+responsable+"</td>");
                tr1.append("<td rowspan='4'>"+debF+"</td>");
                tr1.append("<td rowspan='4'>"+nomTache+"</td>");
                tr1.append("<td rowspan='4'>"+categorie+"</td>");
                if (statut=="Approuvée") {
                    tr1.append("<td rowspan='4' style='background: rgb(140 220 154);  font-size: 16px;'><i class='fa fa-check fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                }
                    if (statut=="En cours de réalisation") {
                        tr1.append("<td rowspan='4'style='background: rgb(255 172 101);  font-size: 16px;'><i class='fa fa-spinner fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                    }
                    if (statut=="Envoi en attente") {
                        tr1.append("<td rowspan='4'style='background: rgb(255 208 101);  font-size: 16px;'><i class='fa fa-spinner fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                    }
                    if (statut=="Soumise") {
                        tr1.append("<td rowspan='4'style='background: rgb(87 115 255);  font-size: 16px;'><i class='fa fa-paper-plane fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                    }
                        if (statut=="Rejetée") {
                        tr1.append("<td rowspan='4'style='background: rgb(255 122 122);  font-size: 16px;'><i class='fa fa-times fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                    } 
                
                tr1.append("<td rowspan='4'>"+nbJrTravail+"</td>");

                                tr1.append("<td style='text-align:center'><i class='fa fa-calendar' aria-hidden='true'></i>&nbsp;Date</td>");
                tr1.append("<td > </td>");
                tr1.append("<td >"+moment(dateDebFeuille).format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(1, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(2, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(3, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(4, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(5, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(6, 'day').format('DD-MM-YYYY')+"</td>");
                tr2 = $("<tr>");

                tr2.append("<td style='text-align:center'><i class='fa fa-tasks' ria-hidden='true'></i>&nbsp;Planifier</td>");
                tr2.append("<td >"+totalPlanifier+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[0])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[1])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[2])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[3])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[4])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[5])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[6])+"</td>");
                tr3 = $("<tr>");
                tr3.append("<td style='text-align:center'><i class='fa fa-clock-o' aria-hidden='true'></i>&nbsp;Actuel</td>");
                tr3.append("<td >"+totalActuel+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[0])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[1])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[2])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[3])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[4])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[5])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[6])+"</td>");
                tr4 = $("<tr>");
                tr4.append("<td style='text-align:center; width:8%'><i class='fa fa-calendar-plus-o' aria-hidden='true'></i>&nbsp;Supplémentaire</td>");
                tr4.append("<td >"+totalSupp+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[0])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[1])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[2])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[3])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[4])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[5])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[6])+"</td>");

     

                $('#tableaux').append(tr1);
                $('#tableaux').append(tr2);
                $('#tableaux').append(tr3); 
                $('#tableaux').append(tr4);
       }
  });
 

          
        }
     loadTabTimeSheetPeriode();   
}

}

   

   function affichagePrincipal(ressourceArr){
$('#tableaux tbody').empty();

    var responseTabTimeSheetWeekFilter1 = responseTabTimeSheetWeekFilter1 ||[];
     var urlTabTimeSheetWeekFilter1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines";
function loadTabTimeSheetWeekFilter() {
 $.ajax({url:  urlTabTimeSheetWeekFilter1,          
         method: "GET",
         dataType: "json",
         headers: {Accept: "application/json;odata=verbose"},       
         success: function(data) {     
         responseTabTimeSheetWeekFilter1 = responseTabTimeSheetWeekFilter1.concat(data.d.results);
           if (data.d.__next) {
             urlTabTimeSheetWeekFilter1 = data.d.__next;
             loadTabTimeSheetWeekFilter();
          } 
          var count=0;         
                          
            $.each(responseTabTimeSheetWeekFilter1, function(key, value) 
            {
                
                moment.locale('fr');
              var collaborateur=value.TimesheetOwner;
              var collaborateur=value.TimesheetOwner;
              var verif=false;
              for (var i = 0; i < ressourceArr.length; i++) {
                if (ressourceArr[i]==collaborateur) {
                  verif=true;
                }
                
              }
              
              if (verif==true){
                var responsable=value.TimesheetApproverResourceName;
              if ((responsable == "Ressource locale générique")||(responsable == "Ressource inconnue")||(responsable == "Ressource non affectée")) {
                responsable = "";
              }
              var idFeuille=value.TimesheetLineId;
              //////console.log("idFeuille= "+idFeuille);
              var nomTache=value.TaskName;
              var categorie=value.TimesheetClassName;
              var statut=value.TimesheetStatus;
              var nbHeursTotal=value.ActualWorkBillable;
              var dateDebFeuille=value.PeriodStartDate;
              var debF=moment(dateDebFeuille).format('DD-MM-YYYY');
              var dateFinFeuille=value.PeriodEndDate;
              var finF=moment(dateFinFeuille).format('DD-MM-YYYY');
              

 

              remplirTab(idFeuille,nomTache,categorie,statut,nbHeursTotal,debF,finF,collaborateur,responsable,dateDebFeuille);
              }
              
            


 

            });
            
       }
  });
         }
        loadTabTimeSheetWeekFilter();




function remplirTab(idFeuille,nomTache,categorie,statut,nbHeursTotal,debF,finF,collaborateur,responsable,dateDebFeuille){

    var responseTabTimeSheetPrincipal = responseTabTimeSheetPrincipal ||[];
     var urlTabTimeSheetPrincipal = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLineActualDataSet?$select=TimeByDay,ActualWorkBillable,PlannedWork,ActualOvertimeWorkBillable,ActualOvertimeWorkNonBillable&$filter=TimesheetLineId%20eq%20guid%27"+idFeuille+"%27&$orderby= TimeByDay asc";
////console.log("url= "+urlTabTimeSheet);
function loadTabTimeSheetPrincipal() {
 $.ajax({url:  urlTabTimeSheetPrincipal,          
         method: "GET",
         dataType: "json",
         headers: {Accept: "application/json;odata=verbose"},       
         success: function(data) {     
         responseTabTimeSheetPrincipal = responseTabTimeSheetPrincipal.concat(data.d.results);
           if (data.d.__next) {
             urlTabTimeSheetPrincipal = data.d.__next;
             loadTabTimeSheetPrincipal();
          } 
          var arrPlanifier=[0,0,0,0,0,0,0];
          var arrActuel=[0,0,0,0,0,0,0];
          var arrDatFeuille=["","","","","","",""]; 
          var arrSupp=[0,0,0,0,0,0,0];       
          var jourSemaine=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
          //arrDatFeuille[0]=debF;
          //arrDatFeuille[6]= "";
          //var date6=moment(dateDebFeuille).add(1, 'day').format('DD-MM-YYYY')
          //////console.log("debF= "+debF);
          //////console.log("date6= "+date6);


            $.each(responseTabTimeSheetPrincipal, function(key, value) 
            {
              moment.locale('fr');
              var date=value.TimeByDay;
              var dateFeuille=moment(date).format('DD-MM-YYYY');
              var dayWeek=moment(date).format('dddd');
              var travailAct=value.ActualWorkBillable;
              var travailPlan=value.PlannedWork;
              var travailSup1=value.ActualOvertimeWorkBillable;
              var travailSup2=value.ActualOvertimeWorkNonBillable;
              var travailSup=parseInt(travailSup1+travailSup2);
              if (arrDatFeuille.indexOf(dateFeuille)==-1){
                arrDatFeuille[jourSemaine.indexOf(dayWeek)]=dateFeuille;
                jourSemaine[jourSemaine.indexOf(dayWeek)]=dayWeek;
                arrPlanifier[jourSemaine.indexOf(dayWeek)]=travailPlan;
                arrActuel[jourSemaine.indexOf(dayWeek)]=travailAct;
                arrSupp[jourSemaine.indexOf(dayWeek)]=travailSup;
              }
               
            });
            var nbJrTravail=0;
            var totalActuel=0;
            for (var i = 0; i <arrActuel.length; i++) {
                totalActuel+=parseInt(arrActuel[i]);
                if (arrActuel[i]!=0) {
                    nbJrTravail+=1;
                }
            }
            var totalPlanifier=0;
            for (var i = 0; i <arrPlanifier.length; i++) {
                totalPlanifier+=parseInt(arrPlanifier[i]);
            }
            var totalSupp=0;
            for (var i = 0; i <arrSupp.length; i++) {
                totalSupp+=parseInt(arrSupp[i]);
            }
            ////console.log("totalPlanifier= "+totalPlanifier);
            ////console.log("totalActuel= "+totalActuel);
            ////console.log("collaborateur = "+collaborateur);
            ////console.log("idFeuille= "+idFeuille);
            ////console.log("date = "+arrDatFeuille.join());
            ////console.log("jourSemaine = "+jourSemaine.join());
            ////console.log("planifier = "+arrPlanifier.join());
            ////console.log("actuel = "+arrActuel.join());
            ////console.log("____________________________________________________________________");

             
                var tr1;
                tr1 = $("<tr>");
                tr1.append("<td rowspan='4'>"+collaborateur+"</td>");
                tr1.append("<td rowspan='4'>"+responsable+"</td>");
                tr1.append("<td rowspan='4'>"+debF+"</td>");
                tr1.append("<td rowspan='4'>"+nomTache+"</td>");
                tr1.append("<td rowspan='4'>"+categorie+"</td>");
                if (statut=="Approuvée") {
                    tr1.append("<td rowspan='4' style='background: rgb(140 220 154);  font-size: 16px;'><i class='fa fa-check fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                }
                    if (statut=="En cours de réalisation") {
                        tr1.append("<td rowspan='4'style='background: rgb(255 172 101);  font-size: 16px;'><i class='fa fa-spinner fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                    }
                    if (statut=="Envoi en attente") {
                        tr1.append("<td rowspan='4'style='background: rgb(255 208 101);  font-size: 16px;'><i class='fa fa-spinner fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                    }
                    if (statut=="Soumise") {
                        tr1.append("<td rowspan='4'style='background: rgb(87 115 255);  font-size: 16px;'><i class='fa fa-paper-plane fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                    }
                        if (statut=="Rejetée") {
                        tr1.append("<td rowspan='4'style='background: rgb(255 122 122);  font-size: 16px;'><i class='fa fa-times fa-2x' aria-hidden='true'></i><br>"+statut+"</td>");
                    } 
                
                tr1.append("<td rowspan='4'>"+nbJrTravail+"</td>");

                tr1.append("<td style='text-align:center'><i class='fa fa-calendar' aria-hidden='true'></i>&nbsp;Date</td>");
                tr1.append("<td > </td>");
                tr1.append("<td >"+moment(dateDebFeuille).format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(1, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(2, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(3, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(4, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(5, 'day').format('DD-MM-YYYY')+"</td>");
                tr1.append("<td >"+moment(dateDebFeuille).add(6, 'day').format('DD-MM-YYYY')+"</td>");
                tr2 = $("<tr>");

                tr2.append("<td style='text-align:center'><i class='fa fa-tasks' ria-hidden='true'></i>&nbsp;Planifier</td>");
                tr2.append("<td >"+totalPlanifier+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[0])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[1])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[2])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[3])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[4])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[5])+"</td>");
                tr2.append("<td >"+parseInt(arrPlanifier[6])+"</td>");
                tr3 = $("<tr>");
                tr3.append("<td style='text-align:center'><i class='fa fa-clock-o' aria-hidden='true'></i>&nbsp;Actuel</td>");
                tr3.append("<td >"+totalActuel+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[0])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[1])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[2])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[3])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[4])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[5])+"</td>");
                tr3.append("<td >"+parseInt(arrActuel[6])+"</td>");
                tr4 = $("<tr>");
                tr4.append("<td style='text-align:center; width:8%'><i class='fa fa-calendar-plus-o' aria-hidden='true'></i>&nbsp;Supplémentaire</td>");
                tr4.append("<td >"+totalSupp+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[0])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[1])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[2])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[3])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[4])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[5])+"</td>");
                tr4.append("<td >"+parseInt(arrSupp[6])+"</td>");

     

                $('#tableaux').append(tr1);
                $('#tableaux').append(tr2);
                $('#tableaux').append(tr3); 
                $('#tableaux').append(tr4);  
            
       }
  });
 

          
        }
        loadTabTimeSheetPrincipal();
}

        }


  function remplirRessources(){
    var responsableSelect=document.getElementById("responsable").value;

    $('#resourcePart').empty();
    if (responsableSelect!="") {
      var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$filter=TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27";
    }else{
      var urlPeriode=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines";
    }
    var responseCollaborateurFilter1 = responseCollaborateurFilter1 ||[];
     var urlCollaborateurFilter1 =  urlPeriode;
function loadCollaborateurFilter1() {
 $.ajax({url:  urlCollaborateurFilter1,          
         method: "GET",
         dataType: "json",
         headers: {Accept: "application/json;odata=verbose"},       
         success: function(data) {     
         responseCollaborateurFilter1 = responseCollaborateurFilter1.concat(data.d.results);
           if (data.d.__next) {
             urlCollaborateurFilter1 = data.d.__next;
             loadCollaborateurFilter1();
          } 
          var count=0;         
                          
            $.each(responseCollaborateurFilter1, function(key, value) 
            {
                         var nomPart = value.TimesheetOwner;

                        if (nomPart == "Ressource locale générique") {
                            var nomPart = "";
                        }
                        if (nomPart == "Ressource inconnue") {
                            var nomPart = "";
                        }
                        if (nomPart) {
                            optionText = nomPart;
                            optionValue = nomPart;

                            $('#resourcePart').append(`<option selected value="${optionValue}">
                                       ${optionText}
                                  </option>`);
                            var opt = {};
                            $("#resourcePart > option").each(function () {
                                if (opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            });
                        }
                        
                        });
            
       }
  });
         }
        loadCollaborateurFilter1();
  }
    