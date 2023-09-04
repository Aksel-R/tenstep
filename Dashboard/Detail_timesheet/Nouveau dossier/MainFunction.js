  var count0=0;
   function mainFilter1(){
   	count0++;
   	console.log("count0= "+count0);
      $('#tableaux tbody').empty();
      moment.locale('fr');
      
      var periode = document.getElementById("debPeriode").value;
     // var periode=moment(per).add('days', -1).format("YYYY-MM-DD");

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
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27";
    getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
      }else if ((datePerioodeSelect=="")&&(typeOperationSelect!="")&&(responsableSelect=="")&&(categorieSelect=="")) {
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=ProjectName%20eq%20%27"+typeOperationSelect+"%27";
      getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
      }
      else if ((datePerioodeSelect=="")&&(typeOperationSelect=="")&&(responsableSelect!="")&&(categorieSelect=="")) {
      
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27";
        //remplirRessources();
        getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
      }
      else if ((datePerioodeSelect=="")&&(typeOperationSelect=="")&&(responsableSelect=="")&&(categorieSelect!="")) {
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
      }
      else if ((datePerioodeSelect!="")&&(typeOperationSelect!="")&&(responsableSelect=="")&&(categorieSelect=="")) {
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27%20and%20ProjectName%20eq%20%27"+typeOperationSelect+"%27";
      getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
      }
      else if ((datePerioodeSelect=="")&&(typeOperationSelect!="")&&(responsableSelect!="")&&(categorieSelect=="")) {
        
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=ProjectName%20eq%20%27"+typeOperationSelect+"%27%20and%20TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27";
        //remplirRessources();
      getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
      }
      else if ((datePerioodeSelect!="")&&(typeOperationSelect=="")&&(responsableSelect!="")&&(categorieSelect=="")) {
        
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27%20and%20TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27";
        //remplirRessources();
      getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
      }
      else if ((datePerioodeSelect!="")&&(typeOperationSelect!="")&&(responsableSelect!="")&&(categorieSelect=="")) {
        
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27%20and%20ProjectName%20eq%20%27"+typeOperationSelect+"%27%20and%20TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27";
        //remplirRessources();
        getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
      }
      else if ((datePerioodeSelect!="")&&(typeOperationSelect!="")&&(responsableSelect=="")&&(categorieSelect!="")) {
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27%20and%20ProjectName%20eq%20%27"+typeOperationSelect+"%27%20and%20TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
      getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
      }
      else if ((datePerioodeSelect!="")&&(typeOperationSelect=="")&&(responsableSelect!="")&&(categorieSelect!="")) {
        
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27%20and%20TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27%20and%20TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
        //remplirRessources();
      getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
      }
      else if ((datePerioodeSelect=="")&&(typeOperationSelect!="")&&(responsableSelect!="")&&(categorieSelect!="")) {
        
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=ProjectName%20eq%20%27"+typeOperationSelect+"%27%20and%20TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27%20and%20TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
        //remplirRessources();
      getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
      }

      else if ((datePerioodeSelect=="")&&(typeOperationSelect=="")&&(responsableSelect!="")&&(categorieSelect!="")) {
        
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27%20and%20TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
        //remplirRessources();
      getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
      }
      else if ((datePerioodeSelect=="")&&(typeOperationSelect!="")&&(responsableSelect=="")&&(categorieSelect!="")) {
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=ProjectName%20eq%20%27"+typeOperationSelect+"%27%%20and%20TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
      getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
      }
      else if ((datePerioodeSelect!="")&&(typeOperationSelect=="")&&(responsableSelect=="")&&(categorieSelect!="")) {
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27%20and%20TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
      getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
      }
      else if ((datePerioodeSelect!="")&&(typeOperationSelect!="")&&(responsableSelect!="")&&(categorieSelect!="")) {
        
        var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetLineId,TaskName,TimesheetClassName,TimesheetStatus,ActualWorkBillable,PeriodStartDate,PeriodEndDate&$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27%20and%20ProjectName%20eq%20%27"+typeOperationSelect+"%27%20and%20TimesheetApproverResourceName%20eq%20%27"+responsableSelect+"%27%20and%20TimesheetClassName%20eq%20%27"+categorieSelect+"%27";
        //remplirRessources();
        getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
      }

     // console.log("Selected value is: "+$("#resourcePart").val());
      ////console.log("urlriode= "+urlPeriodeMultipleFilter);
      //var arrMultiple=[];
      
      if ((datePerioodeSelect=="")&&(typeOperationSelect=="")&&(responsableSelect=="")&&(categorieSelect=="")) {

      	var urlPeriodeMultipleFilter=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines";

        getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr);
        console.log("___________________________________________________________________________________________________________________________________________________________________________________________________");
        console.log("urlPeriodeMultipleFilter= "+urlPeriodeMultipleFilter);
        console.log("___________________________________________________________________________________________________________________________________________________________________________________________________");
      
      }
   
    }


    function getFilterResultMultipleFilter(urlPeriodeMultipleFilter,ressourceArr){
  console.log("ressourceArr= "+ressourceArr);
  
   var responsePeriodeMultipleFilter = responsePeriodeMultipleFilter ||[];
     
function loadTabTimeSheetWeekMultipleFilter() {
 $.ajax({url:  urlPeriodeMultipleFilter,          
         method: "GET",
         dataType: "json",
         headers: {Accept: "application/json;odata=verbose"},       
         success: function(data) {     
         responsePeriodeMultipleFilter = responsePeriodeMultipleFilter.concat(data.d.results);
           if (data.d.__next) {
             urlPeriodeMultipleFilter = data.d.__next;
             loadTabTimeSheetWeekMultipleFilter();
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
$('#tableaux tbody').empty();

            $.each(responsePeriodeMultipleFilter, function(key, value) 
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
                return;
                console.log("pfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
              }
           

              
            count1++;
            console.log("count1= "+count1);
              remplirTabPeriodeMultipleFilter(idFeuille,nomTache,categorie,statut,nbHeursTotal,debF,finF,collaborateur,responsable,dateDebFeuille);
 	

            });
            
            
       }
  });
         }
        loadTabTimeSheetWeekMultipleFilter();




function remplirTabPeriodeMultipleFilter(idFeuille,nomTache,categorie,statut,nbHeursTotal,debF,finF,collaborateur,responsable,dateDebFeuille){

    var responseTabTimeSheetPeriodeMultipleFilter = responseTabTimeSheetPeriodeMultipleFilter ||[];
     var urlTabTimeSheetPeriodeMultipleFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLineActualDataSet?$filter=TimesheetLineId%20eq%20guid%27"+idFeuille+"%27&$orderby= TimeByDay asc";
////console.log("url= "+urlTabTimeSheetPeriodeMultipleFilter);
function loadTabTimeSheetPeriodeMultipleFilter() {
 $.ajax({url:  urlTabTimeSheetPeriodeMultipleFilter,          
         method: "GET",
         dataType: "json",
         headers: {Accept: "application/json;odata=verbose"},       
         success: function(data) {     
         responseTabTimeSheetPeriodeMultipleFilter = responseTabTimeSheetPeriodeMultipleFilter.concat(data.d.results);
           if (data.d.__next) {
             urlTabTimeSheetPeriodeMultipleFilter = data.d.__next;
             loadTabTimeSheetPeriodeMultipleFilter();
          } 
          var arrID=[];
          var arrPlanifier=[0,0,0,0,0,0,0];
          var arrActuel=[0,0,0,0,0,0,0];
          var arrDatFeuille=["","","","","","",""]; 
          var arrSupp=[0,0,0,0,0,0,0];       
          var jourSemaine=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
          //arrDatFeuille[0]=debF;
          //arrDatFeuille[6]= "";
          //var date6=moment(dateDebFeuille).add(1, 'day').format('DD-MM-YYYY')
          //////console.log("debF= "+debF);
          //////console.log("date6= "+date6);


            $.each(responseTabTimeSheetPeriodeMultipleFilter, function(key, value) 
            {
              moment.locale('fr');
             var idTime=value.TimesheetLineId;
                              var date=value.TimeByDay;
                              var ass="id: "+idTime+",NomC: "+collaborateur+",res: "+responsable+",dateFF: "+dateFeuille+",nTache: "+nomTache+",catt: "+categorie+",st: "+statut;
                  var dateFeuille=moment(date).format('DD-MM-YYYY');
                  var dayWeek=moment(date).format('dddd');
                  var travailAct=value.ActualWorkBillable;
                  var travailPlan=value.PlannedWork;
                  var travailSup1=value.ActualOvertimeWorkBillable;
                  var travailSup2=value.ActualOvertimeWorkNonBillable;
                  var travailSup=parseInt(travailSup1+travailSup2);
                  if (arrDatFeuille.indexOf(dateFeuille)==-1) {
                  	arrID.push(idTime);
                    arrDatFeuille[jourSemaine.indexOf(dayWeek)]=dateFeuille;
                    jourSemaine[jourSemaine.indexOf(dayWeek)]=dayWeek;
                    arrPlanifier[jourSemaine.indexOf(dayWeek)]=travailPlan;
                    arrActuel[jourSemaine.indexOf(dayWeek)]=travailAct;
                    arrSupp[jourSemaine.indexOf(dayWeek)]=travailSup;
                    //arrMultiple.push(ass);
              }
              //console.log("arrMultiple= "+arrMultiple);

               
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
            removeDuplicateRows($('tableaux'));
       }
  });
 

          
        }
     loadTabTimeSheetPeriodeMultipleFilter(); 

}

}

function removeDuplicateRows($table){
    function getVisibleRowText($row){
        return $row.find('td:visible').text().toLowerCase();
    }

    $table.find('tr').each(function(index, row){
        var $row = $(row);
        $row.nextAll('tr').each(function(index, next){
            var $next = $(next);
            if(getVisibleRowText($next) == getVisibleRowText($row))
                $next.remove();
        })
    });
}

