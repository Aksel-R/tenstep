
//*****************************************************Le filtrage ************************************************


function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function Remove_optionsForSprint()
{
$('#mylist2')
    .empty()
    .append('<option value="" selected>Les régions</option>');

}


     //var responsesprint1 = responsesprint1 || []; 
 



function MainFilterVDSLPOTS(){
  var sprint = document.getElementById("mylist3").value;

  console.log(sprint);

document.getElementById("mylist3").addEventListener("change", function(){
  //This input has changed
   console.log('This Value is', this.value);
});


if(sprint != "")
  {

//-----charger la liste des regions------



    var response7171 = response7171 || [];  // this variable is used for storing list items
  var url7171 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=TaskFinishDate,ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,DCT_DRT,TaskActualFinishDate&$filter=TaskName eq 'Survey' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
                                                    
    function GetListItemsSurveyVDSLPOTS(){
        return $.ajax({
            url: url7171,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response7171 = response7171.concat(data.d.results);
                if (data.d.__next) {
                    url7171 = data.d.__next;
                    GetListItemsSurveyVDSLPOTS();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Survey = 0;
                  var SurveyComplete = 0;
                  var SurveyCompletePercent = 0;
                  var SurveyCompleteInDeadlines=0;
                  var SurveyOutOfTime=0;
                  var SurveyCompleteInDeadlinesPercent=0;
                  var SurveyOutOfTimePercent=0;



                $.each(response7171, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    var ActualFFDate = moment(actualFinishDate).format('YYYY-MM-DD');

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskFinishDate;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                      

                     if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                    if(arrayCustomerID == "Survey")
                    {
                      sommes++;


                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            SurveyComplete++;
                            
                            if(moment(lateFinishDate).isSameOrBefore(ActualFFDate))
                            {
                              SurveyCompleteInDeadlines++;
                            } 

                          }


                    }
                    
                  }


                Survey =sommes;
                SurveyOutOfTime = SurveyComplete - SurveyCompleteInDeadlines;

                });
                
                       document.getElementById('verifier').innerHTML = Survey;
                  SurveyCompletePercent = (SurveyComplete / Survey)*100;
                SurveyCompleteInDeadlinesPercent=(SurveyCompleteInDeadlines/Survey)*100;
                SurveyOutOfTimePercent=(SurveyOutOfTime/Survey)*100;
        document.getElementById('SurveyComplete').innerHTML = SurveyComplete;
        document.getElementById('SurveyCompletePercent').innerHTML = parseFloat(SurveyCompletePercent).toFixed(0);
        document.getElementById('SurveyCompleteInDeadlines').innerHTML = parseFloat(SurveyCompleteInDeadlinesPercent).toFixed(0);
        document.getElementById('SurveyOutOfTime').innerHTML = parseFloat(SurveyOutOfTimePercent).toFixed(0);
                
                if(Survey == 0)
                {
                    document.getElementById('verifier').innerHTML = 0;
                    document.getElementById('SurveyComplete').innerHTML = 0;
                    document.getElementById('SurveyCompletePercent').innerHTML = 0;
                    document.getElementById('SurveyCompleteInDeadlines').innerHTML = 0;
                    document.getElementById('SurveyOutOfTime').innerHTML = 0;

                }
            }
        });
      }
GetListItemsSurveyVDSLPOTS();

var url616 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,DCT_DRT,TaskActualFinishDate,TaskFinishDate&$filter=TaskName%20eq%20%27Autorisation%27and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    var response616 = response616 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation(){
        return $.ajax({
            url: url616,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response616 = response616.concat(data.d.results);
                if (data.d.__next) {
                    url616 = data.d.__next;
                    GetListItemsAutorisation();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Autorisation = 0;
                  var AutorisationComplete = 0;
                  var AutorisationCompletePercent = 0;
                  var AutorisationCompleteInDeadlines=0;
                  var AutorisationOutOfTime=0;
                  var AutorisationCompleteInDeadlinesPercent=0;
                  var AutorisationOutOfTimePercent=0;



                $.each(response616, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    moment.locale('fr');
                      var finProjRéel;
                    var debutProjRéel;
                 var actualFinishDate=value.TaskActualFinishDate;
                    var ActualFFDate = moment(actualFinishDate).format('YYYY-MM-DD');
                    
                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskFinishDate;
                    var lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                    if(arrayCustomerID == "Autorisation")
                    {
                      sommes++;


                      var percentComplete = value.TaskPercentCompleted;
                          Autorisation++;
                          if(percentComplete =="100")
                          {
                            AutorisationComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(ActualFFDate))
                            {
                               AutorisationCompleteInDeadlines++;
                            }
                          }


                    }
                    
                  }


                Autorisation =sommes;
                AutorisationOutOfTime = AutorisationComplete - AutorisationCompleteInDeadlines;

                });
                
                    document.getElementById('Autorisation').innerHTML = Autorisation;
                    document.getElementById('AutorisationComplete').innerHTML = AutorisationComplete; 
                    AutorisationCompletePercent = (AutorisationComplete / Autorisation)*100;
                    document.getElementById('AutorisationCompletePercent').innerHTML = parseFloat(AutorisationCompletePercent).toFixed(0) ;   
                    AutorisationCompleteInDeadlinesPercent=(AutorisationCompleteInDeadlines/Autorisation)*100;
                    AutorisationOutOfTimePercent=(AutorisationOutOfTime/Autorisation)*100;
                    document.getElementById('AutorisationCompleteInDeadlines').innerHTML = parseFloat(AutorisationCompleteInDeadlinesPercent).toFixed(0) ;
                    document.getElementById('AutorisationOutOfTime').innerHTML =parseFloat(AutorisationCompletePercent).toFixed(0)- parseFloat(AutorisationCompleteInDeadlinesPercent).toFixed(0); 

                    if(Autorisation ==0)
                    {
                        document.getElementById('Autorisation').innerHTML = 0;
                        document.getElementById('AutorisationComplete').innerHTML = 0; 
                        document.getElementById('AutorisationCompletePercent').innerHTML = 0;   
                        document.getElementById('AutorisationCompleteInDeadlines').innerHTML = 0;
                        document.getElementById('AutorisationOutOfTime').innerHTML = 0; 

                    }

            }
        });
      }
GetListItemsAutorisation();

var url515 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,DCT_DRT,TaskActualFinishDate,TaskFinishDate&$filter=TaskName eq 'Génie Civil' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    var response515 = response515 || [];  // this variable is used for storing list items
    function GetListItemsGenieCivil(){
        return $.ajax({
            url: url515,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response515 = response515.concat(data.d.results);
                if (data.d.__next) {
                    url515 = data.d.__next;
                    GetListItemsGenieCivil();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var civil = 0;
                  var civilComplete = 0;
                  var civilCompletePercent = 0;
                  var civilCompleteInDeadlines=0;
                  var civilOutOfTime=0;
                  var civilCompleteInDeadlinesPercent=0;
                  var civilOutOfTimePercent=0;



                $.each(response515, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    moment.locale('fr');
                    var finProjRéel;
                    var debutProjRéel;

                      var actualFinishDate=value.TaskActualFinishDate;
                   var ActiFinishCivil = moment(actualFinishDate).format('YYYY-MM-DD');


                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskFinishDate;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                      

                  if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                  {
                        
                      if(arrayCustomerID == "Génie Civil")
                      {
                        sommes++;

                        var percentComplete = value.TaskPercentCompleted;
                            
                            if(percentComplete =="100")
                            {
                              civilComplete++;
                              if(moment(lateFinishDate).isSameOrBefore(ActiFinishCivil))
                              {
                                 civilCompleteInDeadlines++;
                              }
                            }


                      }
                    
                  }


                civil =sommes;
                civilOutOfTime = civilComplete-civilCompleteInDeadlines;
                });
                
                document.getElementById('gCivil').innerHTML = civil;
                document.getElementById('civilComplete').innerHTML = civilComplete; 
                civilCompletePercent = (civilComplete / civil)*100;
                document.getElementById('civilCompletePercent').innerHTML = parseFloat(civilCompletePercent).toFixed(0) ; 
                civilCompleteInDeadlinesPercent=(civilCompleteInDeadlines/civil)*100;
                civilOutOfTimePercent=(civilOutOfTime/civil)*100;
                document.getElementById('civilCompleteInDeadlines').innerHTML = parseFloat(civilCompleteInDeadlinesPercent).toFixed(0) ;
                document.getElementById('civilOutOfTime').innerHTML = parseFloat(civilCompletePercent).toFixed(0) -parseFloat(civilCompleteInDeadlinesPercent).toFixed(0);  

                if(civil == 0)
                {
                    document.getElementById('gCivil').innerHTML = 0;
                    document.getElementById('civilComplete').innerHTML = 0; 
                    document.getElementById('civilCompletePercent').innerHTML = 0; 
                    document.getElementById('civilCompleteInDeadlines').innerHTML = 0;
                    document.getElementById('civilOutOfTime').innerHTML = 0;  
                }



            }
        });
      }
GetListItemsGenieCivil();


var url414 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,DCT_DRT,TaskActualFinishDate,TaskFinishDate&$filter=TaskName eq 'Electrification' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    var response414 = response414 || [];  // this variable is used for storing list items
    function GetListItemsElectrification1111(){
        return $.ajax({
            url: url414,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response414 = response414.concat(data.d.results);
                if (data.d.__next) {
                    url414 = data.d.__next;
                    GetListItemsElectrification1111();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Electrification = 0;
                  var ElectrificationComplete = 0;
                  var ElectrificationCompletepercent = 0;
                  var ElectrificationCompleteInDeadlines=0;
                  var ElectrificationOutOfTime=0;
                  var ElectrificationCompleteInDeadlinesPercent=0;
                  var ElectrificationOutOfTimePercent=0;



                $.each(response414, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    moment.locale('fr');
                    var finProjRéel;
                    var debutProjRéel;

                      var actualFinishDate=value.TaskActualFinishDate;
                    var ActFinishElect = moment(actualFinishDate).format('YYYY-MM-DD');

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskFinishDate;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                    if(arrayCustomerID == "Electrification")
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            ElectrificationComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(ActFinishElect))
                            {
                               ElectrificationCompleteInDeadlines++;
                            }
                          }


                    }
                    
                  }


                Electrification =sommes;
                ElectrificationOutOfTime = ElectrificationComplete - ElectrificationCompleteInDeadlines;

                });
                
                    document.getElementById('Electrification').innerHTML = Electrification;
                    document.getElementById('ElectrificationComplete').innerHTML = ElectrificationComplete;
                    ElectrificationCompletepercent = (ElectrificationComplete / Electrification)*100;
                    document.getElementById('ElectrificationCompletepercent').innerHTML = parseFloat(ElectrificationCompletepercent).toFixed(0) ; 
                    ElectrificationCompleteInDeadlinesPercent=(ElectrificationCompleteInDeadlines/Electrification)*100;
                    ElectrificationOutOfTimePercent=(ElectrificationOutOfTime/Electrification)*100;
                    document.getElementById('ElectrificationCompleteInDeadlines').innerHTML = parseFloat(ElectrificationCompleteInDeadlinesPercent).toFixed(0) ;
                    document.getElementById('ElectrificationOutOfTime').innerHTML = parseFloat(ElectrificationCompletepercent).toFixed(0)- parseFloat(ElectrificationCompleteInDeadlinesPercent).toFixed(0);  

                if(Electrification == 0)
                {
                    document.getElementById('Electrification').innerHTML = 0;
                    document.getElementById('ElectrificationComplete').innerHTML = 0;
                    document.getElementById('ElectrificationCompletepercent').innerHTML = 0 ; 
                    document.getElementById('ElectrificationCompleteInDeadlines').innerHTML = 0 ;
                    document.getElementById('ElectrificationOutOfTime').innerHTML = 0;  
                }   


            }
        });
      }
GetListItemsElectrification1111();


var url313 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskActualFinishDate,TaskLateFinish,TaskFinishDate,DCT_DRT&$filter=TaskName%20eq%20%27Installation équipement%27 and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    var response313 = response313 || [];  // this variable is used for storing list items
    function GetListItemsInstallation(){
        return $.ajax({
            url: url313,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response313 = response313.concat(data.d.results);
                if (data.d.__next) {
                    url313 = data.d.__next;
                    GetListItemsInstallation();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Installation = 0;
                  var InstallationComplete=0;
                  var InstallationCompletePercent=0;
                  var InstallationCompleteInDeadlines=0;
                  var InstallationOutOfTime=0;
                  var InstallationCompleteInDeadlinesPercent=0;
                  var InstallationOutOfTimePercent=0;



                $.each(response313, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    var actualFinishDate=value.TaskActualFinishDate;
                 
                    var finProjRéel;
                    var debutProjRéel;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                  


                    var actualFinishDate=value.TaskActualFinishDate;
                    var InstallFinishdate = moment(actualFinishDate).format('YYYY-MM-DD');

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    

                    var lateFinish=value.TaskFinishDate;
                    var lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');

                    var Identifiant = value.ProjectId;
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                    
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            InstallationComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(InstallFinishdate))
                            {   
                              InstallationCompleteInDeadlines++;
                            }
                          }

                    
                    
                  }


                Installation =sommes;
                InstallationOutOfTime = InstallationComplete - InstallationCompleteInDeadlines;

                });
                
                  document.getElementById('Installation').innerHTML = Installation;

                  document.getElementById('InstallationComplete').innerHTML = InstallationComplete; 
                  InstallationCompletePercent = (InstallationComplete / Installation)*100;
                  document.getElementById('InstallationCompletePercent').innerHTML = parseFloat(InstallationCompletePercent).toFixed(0) ;   
                  InstallationCompleteInDeadlinesPercent=(InstallationCompleteInDeadlines/Installation)*100;
                  InstallationOutOfTimePercent=(InstallationOutOfTime/Installation)*100;
                  document.getElementById('InstallationCompleteInDeadlines').innerHTML = parseFloat(InstallationCompleteInDeadlinesPercent).toFixed(0) ;
                  document.getElementById('InstallationOutOfTime').innerHTML = parseFloat(InstallationCompletePercent).toFixed(0) -parseFloat(InstallationCompleteInDeadlinesPercent).toFixed(0) ;  

                if(Installation ==0)
                {
                    document.getElementById('Installation').innerHTML = 0;
                    document.getElementById('InstallationComplete').innerHTML = 0; 
                    document.getElementById('InstallationCompletePercent').innerHTML = 0 ;   
                    document.getElementById('InstallationCompleteInDeadlines').innerHTML = 0 ;
                    document.getElementById('InstallationOutOfTime').innerHTML = 0 ;  
                }


            }
        });
      }
GetListItemsInstallation();


var url212 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,DCT_DRT,TaskActualFinishDate,TaskFinishDate&$filter=TaskName%20eq%20%27Réception de site%27 and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    var response212 = response212 || [];  // this variable is used for storing list items
    function GetListItemsRecepSite(){
        return $.ajax({
            url: url212,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response212 = response212.concat(data.d.results);
                if (data.d.__next) {
                    url212 = data.d.__next;
                    GetListItemsRecepSite();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Reception = 0;
                  var ReceptionComplete = 0;
                  var ReceptionCompletePercent = 0;
                  var ReceptionCompleteInDeadlines=0;
                  var ReceptionOutOfTime=0;
                  var ReceptionCompleteInDeadlinesPercent=0;
                  var ReceptionOutOfTimePercent=0;



                $.each(response212, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    var actualFinishDate=value.TaskActualFinishDate;
                 
                    var finProjRéel;
                    var debutProjRéel;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                  



                   var actualFinishDate=value.TaskActualFinishDate;
                    var ReceptionFinishdateReal = moment(actualFinishDate).format('YYYY-MM-DD');

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    

                    var lateFinish=value.TaskFinishDate;
                    var lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');

                    var Identifiant = value.ProjectId;
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                    if(arrayCustomerID == "Réception de site")
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                        
                          if(percentComplete =="100")
                          {
                            ReceptionComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(ReceptionFinishdateReal)){
                            ReceptionCompleteInDeadlines++;
                          }
                          }

                    }
                    
                  }


                Reception =sommes;
                ReceptionOutOfTime = ReceptionComplete - ReceptionCompleteInDeadlines;

                });
                
                document.getElementById('Reception').innerHTML = Reception;

        document.getElementById('ReceptionComplete').innerHTML = ReceptionComplete; 
        ReceptionCompletePercent = (ReceptionComplete / Reception)*100;
        document.getElementById('ReceptionCompletePercent').innerHTML = parseFloat(ReceptionCompletePercent).toFixed(0) ;   
        ReceptionCompleteInDeadlinesPercent=(ReceptionCompleteInDeadlines/Reception)*100;
        ReceptionOutOfTimePercent=(ReceptionOutOfTime/Reception)*100;
        document.getElementById('ReceptionCompleteInDeadlines').innerHTML = parseFloat(ReceptionCompleteInDeadlinesPercent).toFixed(0) ;
        document.getElementById('ReceptionOutOfTime').innerHTML = parseFloat(ReceptionCompletePercent).toFixed(0) - parseFloat(ReceptionCompleteInDeadlinesPercent).toFixed(0)  ; 

                if(Reception ==0)
                {
                    document.getElementById('Reception').innerHTML = 0;
                    document.getElementById('ReceptionComplete').innerHTML = 0; 
                    document.getElementById('ReceptionCompletePercent').innerHTML = 0 ;   
                    document.getElementById('ReceptionCompleteInDeadlines').innerHTML = 0 ;
                    document.getElementById('ReceptionOutOfTime').innerHTML = 0; 
                }


            }
        });
      }
GetListItemsRecepSite();


var url111 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,TaskFinishDate,ProjectId,TaskPercentCompleted,TaskLateFinish,DCT_DRT,TaskActualFinishDate&$filter=TaskName%20eq%20%27Basculement%20et%20monitoring%27%20and%20Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    var response111 = response111 || [];  // this variable is used for storing list items
    function GetListItems(){
        return $.ajax({
            url: url111,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response111 = response111.concat(data.d.results);
                if (data.d.__next) {
                    url111 = data.d.__next;
                    GetListItems();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var SWAP = 0;
                  var SWAPComplete = 0;
                  var SWAPCompletePercent = 0;
                  var SWAPCompleteInDeadlines=0;
                  var SWAPOutOfTime=0;
                  var SWAPCompleteInDeadlinesPercent=0;
                  var SWAPOutOfTimePercent=0;



                $.each(response111, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
            
                 
                    var finProjRéel;
                    var debutProjRéel;

                    var finishDate=value.TaskActualFinishDate;
                    finProj=moment(finishDate).format('L');

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    
                    var actualFinishDate=value.TaskActualFinishDate;
                    var BasculementActualFinishdate = moment(actualFinishDate).format('YYYY-MM-DD');

                    var lateFinish=value.TaskFinishDate;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');

                    var Identifiant = value.ProjectId;
                      

                  if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      

                    if((arrayCustomerID == "Basculement et monitoring")||(arrayCustomerID == "Basculement et Monitoring"))
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            SWAPComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(BasculementActualFinishdate)){
                            SWAPCompleteInDeadlines++;
                          }
                          }

                    }
                    
                  }


                SWAP =sommes;
                SWAPOutOfTime = SWAPComplete-SWAPCompleteInDeadlines;

                });
                
                
                document.getElementById('SWAP').innerHTML = SWAP;
                document.getElementById('SWAPComplete').innerHTML = SWAPComplete; 
                SWAPCompletePercent = (SWAPComplete / SWAP)*100;
                document.getElementById('SWAPCompletePercent').innerHTML = parseFloat(SWAPCompletePercent).toFixed(0) ;     
                SWAPCompleteInDeadlinesPercent=(SWAPCompleteInDeadlines/SWAP)*100;
                SWAPOutOfTimePercent=(SWAPOutOfTime/SWAP)*100;
                document.getElementById('SWAPCompleteInDeadlines').innerHTML = parseFloat(SWAPCompleteInDeadlinesPercent).toFixed(0) ;
                document.getElementById('SWAPOutOfTime').innerHTML = parseFloat(SWAPCompletePercent).toFixed(0) -parseFloat(SWAPCompleteInDeadlinesPercent).toFixed(0);
            
             


            }
        });
      }
GetListItems();


var url818 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,DCT_DRT,TaskActualFinishDate,TaskFinishDate&$filter=TaskName%20eq%20%27Tirage%20FO%27 and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    var response818 = response818 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOSprint(){
        return $.ajax({
            url: url818,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response818 = response818.concat(data.d.results);
                if (data.d.__next) {
                    url818 = data.d.__next;
                    GetListItemsTirageFOSprint();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Tirage = 0;
                  var TirageComplete = 0;
                  var TirageCompletePercent = 0;
                  var TirageCompleteInDeadlines=0;
                  var TirageOutOfTime=0;
                  var TirageCompleteInDeadlinesPercent=0;
                  var TirageOutOfTimePercent=0;



                $.each(response818, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    var actualFinishDate=value.TaskActualFinishDate;
                    var finProjRéel = moment(actualFinishDate).format('YYYY-MM-DD');

                    var debutProjRéel;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                  



                    var finishDate=value.TaskFinishDate;
                    finProj=moment(finishDate).format('L');

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                    var Identifiant = value.ProjectId;
                      

                  if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                    if(arrayCustomerID == "Tirage FO")
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            TirageComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(finProjRéel)){
                            TirageCompleteInDeadlines++;
                          }
                          }

                    }
                    
                  }


                Tirage =sommes;
                TirageOutOfTime = TirageComplete - TirageCompleteInDeadlines;

                });
                
                document.getElementById('TirageFo').innerHTML = Tirage;

                document.getElementById('TirageComplete').innerHTML = TirageComplete; 
        TirageCompletePercent = (TirageComplete / Tirage)*100;
        document.getElementById('TirageCompletePercent').innerHTML = parseFloat(TirageCompletePercent).toFixed(0) ;     
        TirageCompleteInDeadlinesPercent=(TirageCompleteInDeadlines/Tirage)*100;
        TirageOutOfTimePercent=(TirageOutOfTime/Tirage)*100;
        document.getElementById('TirageCompleteInDeadlines').innerHTML = parseFloat(TirageCompleteInDeadlinesPercent).toFixed(0) ;
        document.getElementById('TirageOutOfTime').innerHTML = parseFloat(TirageOutOfTimePercent).toFixed(0);

                if(Tirage ==0)
                {
                    document.getElementById('TirageFo').innerHTML = 0;
                    document.getElementById('TirageComplete').innerHTML = 0; 
                    document.getElementById('TirageCompletePercent').innerHTML = 0 ;     
                    document.getElementById('TirageCompleteInDeadlines').innerHTML = 0 ;
                    document.getElementById('TirageOutOfTime').innerHTML = 0;
                }


            }
        });
      }
GetListItemsTirageFOSprint();


//**************************************************************************************************************



  window.sSwap8Sprint = moment("2020-02-17");
  sSwap8Sprint=moment(sSwap8Sprint).format("YYYY-MM-DD");

    var responseSurvey000 = responseSurvey000 || [];  // this variable is used for storing list items
 var urlSurveySprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap8Sprint+"' and TaskName eq 'Survey' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSurveysSprint(){

        moment.locale('fr');

        return $.ajax({
            url: urlSurveySprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey000 = responseSurvey000.concat(data.d.results);
                if (data.d.__next) {
                    urlSurveySprint = data.d.__next;
                    GetListItemsSurveysSprint();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseSurvey000, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }
                           
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
               
                ss1 = somme11;

              
               

                document.getElementById('survey1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsSurveysSprint();



  window.sSwap7Sprint = moment().day(-34);
  sSwap7Sprint=moment(sSwap7Sprint).format("YYYY-MM-DD");
    var responseSurvey111 = responseSurvey111 || [];  // this variable is used for storing list items
 var urlSurvey1Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap7Sprint+"' and TaskName eq 'Survey' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSurveys1Sprint(){

        moment.locale('fr');





        return $.ajax({
            url: urlSurvey1Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey111 = responseSurvey111.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey1Sprint = data.d.__next;
                    GetListItemsSurveys1Sprint();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseSurvey111, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                                    var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('survey2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsSurveys1Sprint();





  window.sSwap6Sprint = moment().day(-28);
  sSwap6Sprint=moment(sSwap6Sprint).format("YYYY-MM-DD");
    var responseSurvey222 = responseSurvey222 || [];  // this variable is used for storing list items
var urlSurvey2Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap6Sprint+"' and TaskName eq 'Survey' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSurveys2Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlSurvey2Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey222 = responseSurvey222.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey2Sprint = data.d.__next;
                    GetListItemsSurveys2Sprint();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseSurvey222, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                    var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('survey3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsSurveys2Sprint();



  window.sSwap5Sprint = moment().day(-20); 
  sSwap5Sprint=moment(sSwap5Sprint).format("YYYY-MM-DD");

    var responseSurvey333 = responseSurvey333 || [];  // this variable is used for storing list items
var urlSurvey3Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap5Sprint+"' and TaskName eq 'Survey' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    
    function GetListItemsSurveys3Sprint(){

        moment.locale('fr');

        return $.ajax({
            url: urlSurvey3Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey333 = responseSurvey333.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey3Sprint = data.d.__next;
                    GetListItemsSurveys3Sprint();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseSurvey333, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('survey4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsSurveys3Sprint();



  window.sSwap4Sprint = moment().day(-13);
  sSwap4Sprint=moment(sSwap4Sprint).format("YYYY-MM-DD");  

    var responseSurvey444 = responseSurvey444 || [];  // this variable is used for storing list items
var urlSurvey4Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap4Sprint+"' and TaskName eq 'Survey' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSurveys4Sprint(){

        moment.locale('fr');





        return $.ajax({
            url: urlSurvey4Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey444 = responseSurvey444.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey4Sprint = data.d.__next;
                    GetListItemsSurveys4Sprint();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseSurvey444, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('survey5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsSurveys4Sprint();


  window.sSwap3Sprint = moment().day(-6);
  sSwap3Sprint=moment(sSwap3Sprint).format("YYYY-MM-DD");

    var responseSurvey555 = responseSurvey555 || [];  // this variable is used for storing list items
var urlSurvey5Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap3Sprint+"' and TaskName eq 'Survey' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSurveys5Sprint(){

        moment.locale('fr');






        return $.ajax({
            url: urlSurvey5Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey555 = responseSurvey555.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey5Sprint = data.d.__next;
                    GetListItemsSurveys5Sprint();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseSurvey555, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                             var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                      
                    /*var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');*/


                });
                ss2 = somme11;                

                document.getElementById('survey6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsSurveys5Sprint();


  window.sSwap2Sprint = moment().day(1);
  sSwap2Sprint=moment(sSwap2Sprint).format("YYYY-MM-DD"); 

    var responseSurvey666 = responseSurvey666 || [];  // this variable is used for storing list items
var urlSurvey6Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap2Sprint+"' and TaskName eq 'Survey' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSurveys6Sprint(){

        moment.locale('fr');


        return $.ajax({
            url: urlSurvey6Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey666 = responseSurvey666.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey6Sprint = data.d.__next;
                    GetListItemsSurveys6Sprint();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseSurvey666, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('survey7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsSurveys6Sprint();


  window.sSwap1Sprint = moment().day(8); 
  sSwap1Sprint=moment(sSwap1Sprint).format("YYYY-MM-DD"); 

    var responseSurvey777 = responseSurvey777 || [];  // this variable is used for storing list items
  var urlSurvey7Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap1Sprint+"' and TaskName eq 'Survey' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSurveys7Sprint(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");



        return $.ajax({
            url: urlSurvey7Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey777 = responseSurvey777.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey7Sprint = data.d.__next;
                    GetListItemsSurveys7Sprint();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseSurvey777, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('survey8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsSurveys7Sprint();






    var responseGenie000 = responseGenie000 || [];  // this variable is used for storing list items
 var urlGenie8Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap8Sprint+"' and TaskName eq 'Génie Civil' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsGeniesSprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlGenie8Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie000 = responseGenie000.concat(data.d.results);
                if (data.d.__next) {
                    urlGenie8Sprint = data.d.__next;
                    GetListItemsGeniesSprint();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseGenie000, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                        
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');



                });
               
                ss1 = somme11;

              
               

                document.getElementById('GeniCivil1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsGeniesSprint();


    var responseGenie111 = responseGenie111 || [];  // this variable is used for storing list items
 var urlGenie7Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap7Sprint+"' and TaskName eq 'Génie Civil' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsGenies1Sprint(){

        moment.locale('fr');


        return $.ajax({
            url: urlGenie7Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie111 = responseGenie111.concat(data.d.results);
                if (data.d.__next) {
                    urlGenie7Sprint = data.d.__next;
                    GetListItemsGenies1Sprint();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseGenie111, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('GeniCivil2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsGenies1Sprint();




    var responseGenie222 = responseGenie222 || [];  // this variable is used for storing list items
var urlGenie6Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap6Sprint+"' and TaskName eq 'Génie Civil' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsGenies2Sprint(){

        moment.locale('fr');


        return $.ajax({
            url: urlGenie6Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie222 = responseGenie222.concat(data.d.results);
                if (data.d.__next) {
                    urlGenie6Sprint = data.d.__next;
                    GetListItemsGenies2Sprint();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseGenie222, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   

                });
                ss3 = somme11;


                

                document.getElementById('GeniCivil3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsGenies2Sprint();



    var responseGenie333 = responseGenie333 || [];  // this variable is used for storing list items
var urlGenie5Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap5Sprint+"' and TaskName eq 'Génie Civil' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsGenies3Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlGenie5Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie333 = responseGenie333.concat(data.d.results);
                if (data.d.__next) {
                    urlGenie5Sprint = data.d.__next;
                    GetListItemsGenies3Sprint();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseGenie333, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('GeniCivil4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsGenies3Sprint();





    var responseGenie444 = responseGenie444 || [];  // this variable is used for storing list items
var urlGenie4Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap4Sprint+"' and TaskName eq 'Génie Civil' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsGenies4Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlGenie4Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie444 = responseGenie444.concat(data.d.results);
                if (data.d.__next) {
                    urlGenie4Sprint = data.d.__next;
                    GetListItemsGenies4Sprint();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseGenie444, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('GeniCivil5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsGenies4Sprint();




    var responseGenie555 = responseGenie555 || [];  // this variable is used for storing list items
var urlGenie3Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap3Sprint+"' and TaskName eq 'Génie Civil' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsGenies5Sprint(){

        moment.locale('fr');




        return $.ajax({
            url: urlGenie3Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie555 = responseGenie555.concat(data.d.results);
                if (data.d.__next) {
                    urlGenie3Sprint = data.d.__next;
                    GetListItemsGenies5Sprint();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseGenie555, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('GeniCivil6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsGenies5Sprint();



    var responseGenie666 = responseGenie666 || [];  // this variable is used for storing list items
var urlGenie2Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap2Sprint+"' and TaskName eq 'Génie Civil' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsGenies6Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlGenie2Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie666 = responseGenie666.concat(data.d.results);
                if (data.d.__next) {
                    urlGenie2Sprint = data.d.__next;
                    GetListItemsGenies6Sprint();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseGenie666, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('GeniCivil7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsGenies6Sprint();



    var responseGenie777 = responseGenie777 || [];  // this variable is used for storing list items
  var urlGenie1Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap1Sprint+"' and TaskName eq 'Génie Civil' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsGenies7Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlGenie1Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie777 = responseGenie777.concat(data.d.results);
                if (data.d.__next) {
                    urlGenie1Sprint = data.d.__next;
                    GetListItemsGenies7Sprint();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseGenie777, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   



                });

                ss4 = somme11;

                document.getElementById('GeniCivil8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsGenies7Sprint();






    var responseInstallationEquip000 = responseInstallationEquip000 || [];  // this variable is used for storing list items
 var urlInstallation8Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap8Sprint+"' and TaskName eq 'Installation équipement' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsInstallationEquipSprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlInstallation8Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip000 = responseInstallationEquip000.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation8Sprint = data.d.__next;
                    GetListItemsInstallationEquipSprint();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseInstallationEquip000, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      



                });
               
                ss1 = somme11;

              
               

                document.getElementById('install1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsInstallationEquipSprint();

    var responseInstallationEquip111 = responseInstallationEquip111 || [];  // this variable is used for storing list items
 var urlInstallation7Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap7Sprint+"' and TaskName eq 'Installation équipement' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsInstallationEquip1Sprint(){

        moment.locale('fr');


        return $.ajax({
            url: urlInstallation7Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip111 = responseInstallationEquip111.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation7Sprint = data.d.__next;
                    GetListItemsInstallationEquip1Sprint();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseInstallationEquip111, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('install2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsInstallationEquip1Sprint();




    var responseInstallationEquip222 = responseInstallationEquip222 || [];  // this variable is used for storing list items
var urlInstallation6Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap6Sprint+"' and TaskName eq 'Installation équipement' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsInstallationEquip2Sprint(){

        moment.locale('fr');


        return $.ajax({
            url: urlInstallation6Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip222 = responseInstallationEquip222.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation6Sprint = data.d.__next;
                    GetListItemsInstallationEquip2Sprint();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseInstallationEquip222, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                });
                ss3 = somme11;


                

                document.getElementById('install3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsInstallationEquip2Sprint();



    var responseInstallationEquip333 = responseInstallationEquip333 || [];  // this variable is used for storing list items
var urlInstallation5Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap5Sprint+"' and TaskName eq 'Installation équipement' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsInstallationEquip3Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlInstallation5Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip333 = responseInstallationEquip333.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation5Sprint = data.d.__next;
                    GetListItemsInstallationEquip3Sprint();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseInstallationEquip333, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('install4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsInstallationEquip3Sprint();





    var responseInstallationEquip444 = responseInstallationEquip444 || [];  // this variable is used for storing list items
var urlInstallation4Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap4Sprint+"' and TaskName eq 'Installation équipement' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsInstallationEquip4Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlInstallation4Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip444 = responseInstallationEquip444.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation4Sprint = data.d.__next;
                    GetListItemsInstallationEquip4Sprint();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseInstallationEquip444, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('install5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsInstallationEquip4Sprint();




    var responseInstallationEquip555 = responseInstallationEquip555 || [];  // this variable is used for storing list items
var urlInstallation3Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap3Sprint+"' and TaskName eq 'Installation équipement' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsInstallationEquip5Sprint(){

        moment.locale('fr');




        return $.ajax({
            url: urlInstallation3Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip555 = responseInstallationEquip555.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation3Sprint = data.d.__next;
                    GetListItemsInstallationEquip5Sprint();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseInstallationEquip555, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('install6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsInstallationEquip5Sprint();



    var responseInstallationEquip666 = responseInstallationEquip666 || [];  // this variable is used for storing list items
var urlInstallation2Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap2Sprint+"' and TaskName eq 'Installation équipement' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsInstallationEquip6Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlInstallation2Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip666 = responseInstallationEquip666.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation2Sprint = data.d.__next;
                    GetListItemsInstallationEquip6Sprint();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseInstallationEquip666, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('install7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsInstallationEquip6Sprint();



    var responseInstallationEquip777 = responseInstallationEquip777 || [];  // this variable is used for storing list items
  var urlInstallation1Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap1Sprint+"' and TaskName eq 'Installation équipement' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsInstallationEquip7Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlInstallation1Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip777 = responseInstallationEquip777.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation1Sprint = data.d.__next;
                    GetListItemsInstallationEquip7Sprint();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseInstallationEquip777, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                           var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('install8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsInstallationEquip7Sprint();




   var responseAutorisation000 = responseAutorisation000 || [];  // this variable is used for storing list items
 var urlAutorisation8Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap8Sprint+"' and TaskName eq 'Autorisation' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsAutorisation1Sprint(){

 

        moment.locale('fr');


 


 

        return $.ajax({
            url: urlAutorisation8Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation000 = responseAutorisation000.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation8Sprint = data.d.__next;
                    GetListItemsAutorisation1Sprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation000, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation1').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation1Sprint();
















   var responseAutorisation111 = responseAutorisation111 || [];  // this variable is used for storing list items
 var urlAutorisation7Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap7Sprint+"' and TaskName eq 'Autorisation' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsAutorisationsSprint(){

 

        moment.locale('fr');


 


 

        return $.ajax({
            url: urlAutorisation7Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation111 = responseAutorisation111.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation7Sprint = data.d.__next;
                    GetListItemsAutorisationsSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation111, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      

 


                });
               
                ss1 = somme11;

                document.getElementById('Autorisation2').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisationsSprint();



















   var responseAutorisation222 = responseAutorisation222 || [];  // this variable is used for storing list items
 var urlAutorisation6Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap6Sprint+"' and TaskName eq 'Autorisation' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsAutorisation2sSprint(){

 

        moment.locale('fr');


 


 

        return $.ajax({
            url: urlAutorisation6Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation222 = responseAutorisation222.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation6Sprint = data.d.__next;
                    GetListItemsAutorisation2sSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation222, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation3').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation2sSprint();














   var responseAutorisation333 = responseAutorisation333 || [];  // this variable is used for storing list items
 var urlAutorisation5Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap5Sprint+"' and TaskName eq 'Autorisation' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsAutorisation3sSprint(){

        moment.locale('fr');


        return $.ajax({
            url: urlAutorisation5Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation333 = responseAutorisation333.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation5Sprint = data.d.__next;
                    GetListItemsAutorisation3sSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation333, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation4').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation3sSprint();













   var responseAutorisation444 = responseAutorisation444 || [];  // this variable is used for storing list items
 var urlAutorisation4Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap4Sprint+"' and TaskName eq 'Autorisation' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsAutorisation4sSprint(){

 

        moment.locale('fr');


        return $.ajax({
            url: urlAutorisation4Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation444 = responseAutorisation444.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation4Sprint = data.d.__next;
                    GetListItemsAutorisation4sSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation444, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      


                });
               
                ss1 = somme11;

                document.getElementById('Autorisation5').innerHTML =ss1;

            }
        });
      }
GetListItemsAutorisation4sSprint();











   var responseAutorisation555 = responseAutorisation555 || [];  // this variable is used for storing list items
 var urlAutorisation3Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap3Sprint+"' and TaskName eq 'Autorisation' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsAutorisation5sSprint(){

 

        moment.locale('fr');

 


 

        return $.ajax({
            url: urlAutorisation3Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation555 = responseAutorisation555.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation3Sprint = data.d.__next;
                    GetListItemsAutorisation5sSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation555, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                           var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  


                });
               
                ss1 = somme11;
 

                document.getElementById('Autorisation6').innerHTML =ss1;

            }
        });
      }
GetListItemsAutorisation5sSprint();










   var responseAutorisation666 = responseAutorisation666 || [];  // this variable is used for storing list items
 var urlAutorisation2Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap2Sprint+"' and TaskName eq 'Autorisation' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsAutorisation6sSprint(){

 

        moment.locale('fr');


 


 

        return $.ajax({
            url: urlAutorisation2Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation666 = responseAutorisation666.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation2Sprint = data.d.__next;
                    GetListItemsAutorisation6sSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation666, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                             var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  


                });
               
                ss1 = somme11;

                document.getElementById('Autorisation7').innerHTML =ss1;

            }
        });
      }
GetListItemsAutorisation6sSprint();










   var responseAutorisation777 = responseAutorisation777 || [];  // this variable is used for storing list items
 var urlAutorisation1Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap1Sprint+"' and TaskName eq 'Autorisation' and Ch_Sprint eq'"+sprint+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
    function GetListItemsAutorisation7sSprint(){

 

        moment.locale('fr');

        return $.ajax({
            url: urlAutorisation1Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation777 = responseAutorisation777.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation1Sprint = data.d.__next;
                    GetListItemsAutorisation7sSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation777, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   

                });
               
                ss1 = somme11;

                document.getElementById('Autorisation8').innerHTML =ss1;

            }
        });
      }
GetListItemsAutorisation7sSprint();









   var responseSwap000 = responseSwap000 || [];  // this variable is used for storing list items
 var urlSwap8Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap8Sprint+"' and TaskName eq 'Basculement et monitoring' and Ch_Sprint eq'"+sprint+"' or TaskActualStartDate lt datetime'"+sSwap8Sprint+"' and TaskName eq 'Basculement et monitoring' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSwap0sSprint(){

 

        moment.locale('fr');
       
        return $.ajax({
            url: urlSwap8Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap000 = responseSwap000.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap8Sprint = data.d.__next;
                    GetListItemsSwap0sSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap000, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                           var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   

                });
               
                ss1 = somme11;

                document.getElementById('SWAP1').innerHTML =ss1;
 

            }
        });
      }
GetListItemsSwap0sSprint();


   var responseSwap111 = responseSwap111 || [];  // this variable is used for storing list items
 var urlSwap7Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap7Sprint+"' and TaskName eq 'Basculement et monitoring' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSwapsSprint(){

 

        moment.locale('fr');
      

 


 

        return $.ajax({
            url: urlSwap7Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap111 = responseSwap111.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap7Sprint = data.d.__next;
                    GetListItemsSwapsSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap111, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }

                });
               
                ss1 = somme11;

                document.getElementById('SWAP2').innerHTML =ss1;
 

            }
        });
      }
GetListItemsSwapsSprint();








   var responseSwap222 = responseSwap222 || [];  // this variable is used for storing list items
 var urlSwap6Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap6Sprint+"' and TaskName eq 'Basculement et monitoring' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSwap2sSprint(){

 

        moment.locale('fr');


 


 

        return $.ajax({
            url: urlSwap6Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap222 = responseSwap222.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap6Sprint = data.d.__next;
                    GetListItemsSwap2sSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap222, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                               

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP3').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap2sSprint();














   var responseSwap333 = responseSwap333 || [];  // this variable is used for storing list items
 var urlSwap5Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap5Sprint+"' and TaskName eq 'Basculement et monitoring' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSwap3sSprint(){

 

        moment.locale('fr');

        return $.ajax({
            url: urlSwap5Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap333 = responseSwap333.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap5Sprint = data.d.__next;
                    GetListItemsSwap3sSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap333, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP4').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap3sSprint();













   var responseSwap444 = responseSwap444 || [];  // this variable is used for storing list items
 var urlSwap4Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap4Sprint+"' and TaskName eq 'Basculement et monitoring' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSwap4sSprint(){

 

        moment.locale('fr');
       
 


 

        return $.ajax({
            url: urlSwap4Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap444 = responseSwap444.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap4Sprint = data.d.__next;
                    GetListItemsSwap4sSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap444, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP5').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap4sSprint();











   var responseSwap555 = responseSwap555 || [];  // this variable is used for storing list items
 var urlSwap3Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap3Sprint+"' and TaskName eq 'Basculement et monitoring' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSwap5sSprint(){

 

        moment.locale('fr');
        

 

        return $.ajax({
            url: urlSwap3Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap555 = responseSwap555.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap3Sprint = data.d.__next;
                    GetListItemsSwap5sSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap555, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                           var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP6').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap5sSprint();










   var responseSwap666 = responseSwap666 || [];  // this variable is used for storing list items
 var urlSwap2Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap2Sprint+"' and TaskName eq 'Basculement et monitoring' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSwap6sSprint(){

 

        moment.locale('fr');
        


 

        return $.ajax({
            url: urlSwap2Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap666 = responseSwap666.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap2Sprint = data.d.__next;
                    GetListItemsSwap6sSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap666, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP7').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap6sSprint();










   var responseSwap777 = responseSwap777 || [];  // this variable is used for storing list items
 var urlSwap1Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap1Sprint+"' and TaskName eq 'Basculement et monitoring' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsSwap7sSprint(){

 

        moment.locale('fr');

        return $.ajax({
            url: urlSwap1Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap777 = responseSwap777.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap1Sprint = data.d.__next;
                    GetListItemsSwap7sSprint();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap777, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;



                document.getElementById('SWAP8').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap7sSprint();











    var responseTirageFO00000 = responseTirageFO00000 || [];  // this variable is used for storing list items
 var urlTirageFO8Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap8Sprint+"' and TaskName eq 'Tirage FO' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsTirageFOsSprint(){

        moment.locale('fr');




        return $.ajax({
            url: urlTirageFO8Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO00000 = responseTirageFO00000.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO8Sprint = data.d.__next;
                    GetListItemsTirageFOsSprint();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseTirageFO00000, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }
                           
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
               
                ss1 = somme11;

              
               

                document.getElementById('TirageFO1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsTirageFOsSprint();

    var responseTirageFO00011111 = responseTirageFO00011111 || [];  // this variable is used for storing list items
 var urlTirageFO7Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap7Sprint+"' and TaskName eq 'Tirage FO' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsTirageFOs1Sprint(){

        moment.locale('fr');


        return $.ajax({
            url: urlTirageFO7Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO00011111 = responseTirageFO00011111.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO7Sprint = data.d.__next;
                    GetListItemsTirageFOs1Sprint();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseTirageFO00011111, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                                    var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('TirageFO2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsTirageFOs1Sprint();




    var responseTirageFO00022222 = responseTirageFO00022222 || [];  // this variable is used for storing list items
var urlTirageFO6Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap6Sprint+"' and TaskName eq 'Tirage FO' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsTirageFOs2Sprint(){

        moment.locale('fr');


        return $.ajax({
            url: urlTirageFO6Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO00022222 = responseTirageFO00022222.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO6Sprint = data.d.__next;
                    GetListItemsTirageFOs2Sprint();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseTirageFO00022222, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                    var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('TirageFO3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsTirageFOs2Sprint();



    var responseTirageFO00033333 = responseTirageFO00033333 || [];  // this variable is used for storing list items
var urlTirageFO5Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap5Sprint+"' and TaskName eq 'Tirage FO' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsTirageFOs3Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlTirageFO5Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO00033333 = responseTirageFO00033333.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO5Sprint = data.d.__next;
                    GetListItemsTirageFOs3Sprint();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseTirageFO00033333, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('TirageFO4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsTirageFOs3Sprint();





    var responseTirageFO00044444 = responseTirageFO00044444 || [];  // this variable is used for storing list items
var urlTirageFO4Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap4Sprint+"' and TaskName eq 'Tirage FO' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsTirageFOs4Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlTirageFO4Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO00044444 = responseTirageFO00044444.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO4Sprint = data.d.__next;
                    GetListItemsTirageFOs4Sprint();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseTirageFO00044444, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('TirageFO5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsTirageFOs4Sprint();




    var responseTirageFO00055555 = responseTirageFO00055555 || [];  // this variable is used for storing list items
var urlTirageFO3Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap3Sprint+"' and TaskName eq 'Tirage FO' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsTirageFOs5Sprint(){

        moment.locale('fr');




        return $.ajax({
            url: urlTirageFO3Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO00055555 = responseTirageFO00055555.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO3Sprint = data.d.__next;
                    GetListItemsTirageFOs5Sprint();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseTirageFO00055555, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                             var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('TirageFO6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsTirageFOs5Sprint();



    var responseTirageFO0006666 = responseTirageFO0006666 || [];  // this variable is used for storing list items
var urlTirageFO2Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap2Sprint+"' and TaskName eq 'Tirage FO' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsTirageFOs6Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlTirageFO2Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO0006666 = responseTirageFO0006666.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO2Sprint = data.d.__next;
                    GetListItemsTirageFOs6Sprint();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseTirageFO0006666, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('TirageFO7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsTirageFOs6Sprint();



    var responseTirageFO0007777 = responseTirageFO0007777 || [];  // this variable is used for storing list items
  var urlTirageFO1Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap1Sprint+"' and TaskName eq 'Tirage FO' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsTirageFOs7Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlTirageFO1Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO0007777 = responseTirageFO0007777.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO1Sprint = data.d.__next;
                    GetListItemsTirageFOs7Sprint();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseTirageFO0007777, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  


                });

                ss4 = somme11;

                document.getElementById('TirageFO8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsTirageFOs7Sprint();





     var responseReceptSite00Sprint = responseReceptSite00Sprint || [];  // this variable is used for storing list items
 var urlReceptSitei8Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap8Sprint+"' and TaskName eq 'Réception de site' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsReceptSiteSprint(){

        moment.locale('fr');

        return $.ajax({
            url: urlReceptSitei8Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite00Sprint = responseReceptSite00Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei8Sprint = data.d.__next;
                    GetListItemsReceptSiteSprint();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseReceptSite00Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss2 = somme11;                

                document.getElementById('recptsite1').innerHTML =ss2;
  

            }
        });
      }
GetListItemsReceptSiteSprint();

    var responseReceptSite11Sprint = responseReceptSite11Sprint || [];  // this variable is used for storing list items
 var urlReceptSitei7Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap7Sprint+"' and TaskName eq 'Réception de site' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsReceptSite1Sprint(){

        moment.locale('fr');



        
        return $.ajax({
            url: urlReceptSitei7Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite11Sprint = responseReceptSite11Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei7Sprint = data.d.__next;
                    GetListItemsReceptSite1Sprint();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseReceptSite11Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss2 = somme11;                

                document.getElementById('recptsite2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsReceptSite1Sprint();




    var responseReceptSite22Sprint = responseReceptSite22Sprint || [];  // this variable is used for storing list items
var urlReceptSitei6Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap6Sprint+"' and TaskName eq 'Réception de site' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsReceptSite2Sprint(){

        moment.locale('fr');


        
        return $.ajax({
            url: urlReceptSitei6Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite22Sprint = responseReceptSite22Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei6Sprint = data.d.__next;
                    GetListItemsReceptSite2Sprint();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseReceptSite22Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;

                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   

                });
                ss3 = somme11;

                document.getElementById('recptsite3').innerHTML =ss3;

            }
        });
      }
GetListItemsReceptSite2Sprint();



    var responseReceptSite33Sprint = responseReceptSite33Sprint || [];  // this variable is used for storing list items
var urlReceptSitei5Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap5Sprint+"' and TaskName eq 'Réception de site' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsReceptSite3Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlReceptSitei5Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite33Sprint = responseReceptSite33Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei5Sprint = data.d.__next;
                    GetListItemsReceptSite3Sprint();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseReceptSite33Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });

                ss4 = somme11;

                document.getElementById('recptsite4').innerHTML =ss4;

            }
        });
      }
GetListItemsReceptSite3Sprint();





    var responseReceptSite44Sprint = responseReceptSite44Sprint || [];  // this variable is used for storing list items
var urlReceptSitei4Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap4Sprint+"' and TaskName eq 'Réception de site' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsReceptSite4Sprint(){

        moment.locale('fr');


        return $.ajax({
            url: urlReceptSitei4Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite44Sprint = responseReceptSite44Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei4Sprint = data.d.__next;
                    GetListItemsReceptSite4Sprint();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseReceptSite44Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                
                ss1 = somme11;

                document.getElementById('recptsite5').innerHTML =ss1;

            }
        });
      }
GetListItemsReceptSite4Sprint();




    var responseReceptSite55Sprint = responseReceptSite55Sprint || [];  // this variable is used for storing list items
var urlReceptSitei3Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap3Sprint+"' and TaskName eq 'Réception de site' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsReceptSite5Sprint(){

        moment.locale('fr');




        return $.ajax({
            url: urlReceptSitei3Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite55Sprint = responseReceptSite55Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei3Sprint = data.d.__next;
                    GetListItemsReceptSite5Sprint();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseReceptSite55Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss2 = somme11;                

                document.getElementById('recptsite6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsReceptSite5Sprint();



    var responseReceptSite66Sprint = responseReceptSite66Sprint || [];  // this variable is used for storing list items
var urlReceptSitei2Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap2Sprint+"' and TaskName eq 'Réception de site' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsReceptSite6Sprint(){

        moment.locale('fr');


        return $.ajax({
            url: urlReceptSitei2Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite66Sprint = responseReceptSite66Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei2Sprint = data.d.__next;
                    GetListItemsReceptSite6Sprint();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseReceptSite66Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;


                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('recptsite7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsReceptSite6Sprint();



    var responseReceptSite77Sprint = responseReceptSite77Sprint || [];  // this variable is used for storing list items
  var urlReceptSitei1Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap1Sprint+"' and TaskName eq 'Réception de site' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsReceptSite7Sprint(){

        moment.locale('fr');


        return $.ajax({
            url: urlReceptSitei1Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite77Sprint = responseReceptSite77Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei1Sprint = data.d.__next;
                    GetListItemsReceptSite7Sprint();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseReceptSite77Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   

                });

                ss4 = somme11;

                document.getElementById('recptsite8').innerHTML =ss4;

            }
        });
      }
GetListItemsReceptSite7Sprint();











  window.sSwap8Elecc = moment("2020-02-17");
  sSwap8Elecc=moment(sSwap8Elecc).format("YYYY-MM-DD");

    var responseElectrSprint = responseElectrSprint || [];  // this variable is used for storing list items
 var urlElectri8Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap8Elecc+"' and TaskName eq 'Electrification' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";


    function GetListItemsElectrSprint(){

        moment.locale('fr');




        return $.ajax({
            url: urlElectri8Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectrSprint = responseElectrSprint.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri8Sprint = data.d.__next;
                    GetListItemsElectrSprint();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseElectrSprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
            
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
        


                });
               
                ss1 = somme11;

                document.getElementById('ValElelect1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsElectrSprint();





  window.sSwap7Elecc = moment().day(-34);
  sSwap7Elecc=moment(sSwap7Elecc).format("YYYY-MM-DD");
    var responseElectr1Sprint = responseElectr1Sprint || [];  // this variable is used for storing list items
 var urlElectri7Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap7Elecc+"' and TaskName eq 'Electrification' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
  
    function GetListItemsElectr1Sprint(){

        moment.locale('fr');


        return $.ajax({
            url: urlElectri7Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr1Sprint = responseElectr1Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri7Sprint = data.d.__next;
                    GetListItemsElectr1Sprint();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseElectr1Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  


                });
                ss2 = somme11;                

                document.getElementById('ValElelect2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsElectr1Sprint();




  window.sSwap6Elecc = moment().day(-28);
  sSwap6Elecc=moment(sSwap6Elecc).format("YYYY-MM-DD");

    var responseElectr2Sprint = responseElectr2Sprint || [];  // this variable is used for storing list items
var urlElectri6Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap6Elecc+"' and TaskName eq 'Electrification' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsElectr2Sprint(){

        moment.locale('fr');



        return $.ajax({
            url: urlElectri6Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr2Sprint = responseElectr2Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri6Sprint = data.d.__next;
                    GetListItemsElectr2Sprint();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseElectr2Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;

                       var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('ValElelect3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsElectr2Sprint();



  window.sSwap5Elecc = moment().day(-20); 
  sSwap5Elecc=moment(sSwap5Elecc).format("YYYY-MM-DD");


    var responseElectr3Sprint = responseElectr3Sprint || [];  // this variable is used for storing list items
var urlElectri5Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap5Elecc+"' and TaskName eq 'Electrification' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsElectr3Sprint(){

        moment.locale('fr');


        return $.ajax({
            url: urlElectri5Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr3Sprint = responseElectr3Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri5Sprint = data.d.__next;
                    GetListItemsElectr3Sprint();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseElectr3Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });

                ss4 = somme11;

                document.getElementById('ValElelect4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsElectr3Sprint();






  window.sSwap4Elecc = moment().day(-13);
  sSwap4Elecc=moment(sSwap4Elecc).format("YYYY-MM-DD"); 
    var responseElectr4Sprint = responseElectr4Sprint || [];  // this variable is used for storing list items
var urlElectri4Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap4Elecc+"' and TaskName eq 'Electrification' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsElectr4Sprint(){

        moment.locale('fr');
        //console.log(todayss2);



        return $.ajax({
            url: urlElectri4Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr4Sprint = responseElectr4Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri4Sprint = data.d.__next;
                    GetListItemsElectr4Sprint();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseElectr4Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                
                ss1 = somme11;

                
               

                document.getElementById('ValElelect5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsElectr4Sprint();



 window.sSwap3Elecc = moment().day(-6);
  sSwap3Elecc=moment(sSwap3Elecc).format("YYYY-MM-DD");

    var responseElectr5Sprint = responseElectr5Sprint || [];  // this variable is used for storing list items
var urlElectri3Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap3Elecc+"' and TaskName eq 'Electrification' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsElectr5Sprint(){

        moment.locale('fr');


 


        return $.ajax({
            url: urlElectri3Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr5Sprint = responseElectr5Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri3Sprint = data.d.__next;
                    GetListItemsElectr5Sprint();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseElectr5Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  


                });
                ss2 = somme11;                

                document.getElementById('ValElelect6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsElectr5Sprint();



  window.sSwap2Elecc = moment().day(1);
  sSwap2Elecc=moment(sSwap2Elecc).format("YYYY-MM-DD"); 

    var responseElectr6Sprint = responseElectr6Sprint || [];  // this variable is used for storing list items
var urlElectri2Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap2Elecc+"' and TaskName eq 'Electrification' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsElectr6Sprint(){

        moment.locale('fr');


        return $.ajax({
            url: urlElectri2Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr6Sprint = responseElectr6Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri2Sprint = data.d.__next;
                    GetListItemsElectr6Sprint();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseElectr6Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskActualStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('ValElelect7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsElectr6Sprint();


  window.sSwap1Elecc = moment().day(8); 
  sSwap1Elecc=moment(sSwap1Elecc).format("YYYY-MM-DD"); 



    var responseElectr7Sprint = responseElectr7Sprint || [];  // this variable is used for storing list items
  var urlElectri1Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskActualStartDate lt datetime'"+sSwap1Elecc+"' and TaskName eq 'Electrification' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
    function GetListItemsElectr7Sprint(){

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");

        return $.ajax({
            url: urlElectri1Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr7Sprint = responseElectr7Sprint.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri1Sprint = data.d.__next;
                    GetListItemsElectr7Sprint();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseElectr7Sprint, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });

                ss4 = somme11;

                document.getElementById('ValElelect8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsElectr7Sprint();






//***************************************************************************Filtrage planifier réaliser********************************************************************

var urlPlaniRealSurveyFiltersprint11 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=TaskName eq 'Survey' and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
var responsePlanRealSurveyFiltersprint11= responsePlanRealSurveyFiltersprint11 || [];

function GetListItemsSurveyPlanRealFiltersprint11(){
  window.nextWeekEnd = moment().day(0); 
        return $.ajax({
            url: urlPlaniRealSurveyFiltersprint11,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealSurveyFiltersprint11 = responsePlanRealSurveyFiltersprint11.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealSurveyFiltersprint11 = data.d.__next;
                    GetListItemsSurveyPlanRealFiltersprint11();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;


                $.each(responsePlanRealSurveyFiltersprint11, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
           
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
    

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      


                    if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      sommes3++;
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                      var actualFinishDate=value.TaskActualFinishDate;
                      var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD');

                      sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                      
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('SurveyPlan').innerHTML = resultPlanife;
        document.getElementById('SurveyRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsSurveyPlanRealFiltersprint11();


var urlPlaniRealAutorisationFiltersprint1 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=(TaskName%20eq%20%27Autorisation%27) and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
var responsePlanRealAutorisationFiltersprint1= responsePlanRealAutorisationFiltersprint1 || [];

function GetListItemsPlanRealAutorisationFiltersprint1(){
  window.nextWeekEnd = moment().day(0); 
        return $.ajax({
            url: urlPlaniRealAutorisationFiltersprint1,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealAutorisationFiltersprint1 = responsePlanRealAutorisationFiltersprint1.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealAutorisationFiltersprint1 = data.d.__next;
                    GetListItemsPlanRealAutorisationFiltersprint1();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealAutorisationFiltersprint1, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                      sommes3++;
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                    var actualFinishDate=value.TaskActualFinishDate;
                    var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD');

                      sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                      
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('AutorisationPlan').innerHTML = resultPlanife;
        document.getElementById('AutorisationRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealAutorisationFiltersprint1();



var urlPlaniRealGenieCivil = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=(TaskName%20eq%20%27Génie Civil%27) and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
var responsePlanRealGenieCivil= responsePlanRealGenieCivil || [];

function GetListItemsPlanRealGenieCivilFiltersprint1(){
  window.nextWeekEnd = moment().day(0); 
        return $.ajax({
            url: urlPlaniRealGenieCivil,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealGenieCivil = responsePlanRealGenieCivil.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealGenieCivil = data.d.__next;
                    GetListItemsPlanRealGenieCivilFiltersprint1();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealGenieCivil, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      sommes3++;
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                    var actualFinishDate=value.TaskActualFinishDate;
                    var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD');

                      sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                      
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('gCivilPlan').innerHTML = resultPlanife;
        document.getElementById('civilRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealGenieCivilFiltersprint1();




var urlPlaniRealElectrificationFiltersprint1 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=(TaskName%20eq%20%27Electrification%27) and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
var responsePlanRealElectrificationFiltersprint1= responsePlanRealElectrificationFiltersprint1 || [];

function GetListItemsPlanRealElectrificationFiltersprint1(){
  window.nextWeekEnd = moment().day(0); 
        return $.ajax({
            url: urlPlaniRealElectrificationFiltersprint1,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealElectrificationFiltersprint1 = responsePlanRealElectrificationFiltersprint1.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealElectrificationFiltersprint1 = data.d.__next;
                    GetListItemsPlanRealElectrificationFiltersprint1();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;


                $.each(responsePlanRealElectrificationFiltersprint1, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      sommes3++;
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                    var actualFinishDate=value.TaskActualFinishDate;
                    var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD');

                      sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                      
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('ElectrificatioPlan').innerHTML = resultPlanife;
        document.getElementById('ElectrificationRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealElectrificationFiltersprint1();



var urlPlaniRealTirageFiltresprint1 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=(TaskName%20eq%20%27Tirage FO%27) and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
var responsePlanRealTirageFiltresprint1= responsePlanRealTirageFiltresprint1 || [];

function GetListItemsPlanRealTirageFiltersprint1(){
  window.nextWeekEnd = moment().day(0); 
        return $.ajax({
            url: urlPlaniRealTirageFiltresprint1,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealTirageFiltresprint1 = responsePlanRealTirageFiltresprint1.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealTirageFiltresprint1 = data.d.__next;
                    GetListItemsPlanRealTirageFiltersprint1();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealTirageFiltresprint1, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      sommes3++;
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                    var actualFinishDate=value.TaskActualFinishDate;
                    var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD');

                      sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                      
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('TirageFoPlan').innerHTML = resultPlanife;
        document.getElementById('TirageRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealTirageFiltersprint1();




var urlPlaniRealInstallFiltresprint1 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=TaskName%20eq%20%27Installation équipement%27 and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
var responsePlanRealInstallFiltresprint1= responsePlanRealInstallFiltresprint1 || [];

function GetListItemsPlanRealInstallFiltersprint1(){
  window.nextWeekEnd = moment().day(0); 
        return $.ajax({
            url: urlPlaniRealInstallFiltresprint1,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealInstallFiltresprint1 = responsePlanRealInstallFiltresprint1.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealInstallFiltresprint1 = data.d.__next;
                    GetListItemsPlanRealInstallFiltersprint1();
                }
                  var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealInstallFiltresprint1, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      sommes3++;
                      
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                    var actualFinishDate=value.TaskActualFinishDate;
                    var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD');

                      sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                      
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('InstallationPlannif').innerHTML = resultPlanife;
        document.getElementById('InstallationRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealInstallFiltersprint1();




var urlPlaniRealReceptionFiltersprint1 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=TaskName%20eq%20%27Réception%20de%20site%27%20and%20Ch_Sprint%20eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
var responsePlanRealReceptionFiltersprint1= responsePlanRealReceptionFiltersprint1 || [];

function GetListItemsPlanRealReceptionFiltersprint1(){
  window.nextWeekEnd = moment().day(0); 
        return $.ajax({
            url: urlPlaniRealReceptionFiltersprint1,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealReceptionFiltersprint1 = responsePlanRealReceptionFiltersprint1.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealReceptionFiltersprint1 = data.d.__next;
                    GetListItemsPlanRealReceptionFiltersprint1();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealReceptionFiltersprint1, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      sommes3++;
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                    var actualFinishDate=value.TaskActualFinishDate;
                    var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD');

                      sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                      
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('ReceptionPlan').innerHTML = resultPlanife;
        document.getElementById('ReceptionRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealReceptionFiltersprint1();





var urlPlaniRealBasculementFiltersprint1 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=TaskName%20eq%20%27Basculement et monitoring%27 and Ch_Sprint eq'"+sprint+"' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27";
var responsePlanRealBasculementFiltersprint1= responsePlanRealBasculementFiltersprint1 || [];

function GetListItemsPlanRealBasculementFiltersprint1(){
  window.nextWeekEnd = moment().day(0); 
        return $.ajax({
            url: urlPlaniRealBasculementFiltersprint1,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealBasculementFiltersprint1 = responsePlanRealBasculementFiltersprint1.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealBasculementFiltersprint1 = data.d.__next;
                    GetListItemsPlanRealBasculementFiltersprint1();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealBasculementFiltersprint1, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      sommes3++;
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                    var actualFinishDate=value.TaskActualFinishDate;
                    var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD');

                      sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                      
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('BasculementPlan').innerHTML = resultPlanife;
        document.getElementById('BasculementRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealBasculementFiltersprint1();




//*********************************************************************************************************************************

//---------------------------------------------------------POTS et VDSL -------------------------------------------------------------------------
 window.sSwap8VDSL = moment().day(-41);
  sSwap8VDSL=moment(sSwap8VDSL).format("YYYY-MM-DD");
var responseVDSL11 = responseVDSL11 || [];  // this variable is used for storing list items
  var urlVDSL8Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap8VDSL+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsVDSL11(){

 

        moment.locale('fr');


 

 

 var sommeVDSL=0;
                var VDSLSm = 0;


 

        return $.ajax({
            url: urlVDSL8Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL11 = responseVDSL11.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL8Sprint = data.d.__next;
                    GetListItemsVDSL11();
                }

 

                
            
 

                $.each(responseVDSL11, function(key, value)  {
              
                         var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        } 


                VDSLSm = sommeVDSL;

                });

                document.getElementById('VDSL1').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsVDSL11();


  window.sSwap7VDSL = moment().day(-34);
  sSwap7VDSL=moment(sSwap7VDSL).format("YYYY-MM-DD");

var responseVDSL22 = responseVDSL22 || [];  // this variable is used for storing list items
  var urlVDSL7Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap7VDSL+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsVDSL22(){

 

        moment.locale('fr');




 var sommeVDSL=0;
                var VDSLSm = 0;


 

        return $.ajax({
            url: urlVDSL7Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL22 = responseVDSL22.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL7Sprint = data.d.__next;
                    GetListItemsVDSL22();
                }

 

                
            
 

                $.each(responseVDSL22, function(key, value)  {
                      var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        } 
                      

                VDSLSm = sommeVDSL;

                });
               
                document.getElementById('VDSL2').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsVDSL22();



  window.sSwap6VDSL = moment().day(-28);
  sSwap6VDSL=moment(sSwap6VDSL).format("YYYY-MM-DD");

var responseVDSL33 = responseVDSL33 || [];  // this variable is used for storing list items
  var urlVDSL6Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap6VDSL+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsVDSL33(){

        moment.locale('fr');



 var sommeVDSL=0;
                var VDSLSm = 0;



        return $.ajax({
            url: urlVDSL6Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL33 = responseVDSL33.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL6Sprint = data.d.__next;
                    GetListItemsVDSL33();
                }

                $.each(responseVDSL33, function(key, value)  {
                      var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        } 

                VDSLSm = sommeVDSL;

                });

                document.getElementById('VDSL3').innerHTML =VDSLSm;
            }
        });
      }
GetListItemsVDSL33();



  window.sSwap5VDSL = moment().day(-20); 
  sSwap5VDSL=moment(sSwap5VDSL).format("YYYY-MM-DD");

var responseVDSL44 = responseVDSL44 || [];  // this variable is used for storing list items
  var urlVDSL5Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap5VDSL+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsVDSL44(){

 

  moment.locale('fr');


 var sommeVDSL=0;
                var VDSLSm = 0;



        return $.ajax({
            url: urlVDSL5Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL44 = responseVDSL44.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL5Sprint = data.d.__next;
                    GetListItemsVDSL44();
                }

                $.each(responseVDSL44, function(key, value)  {
                      var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        } 

                        VDSLSm = sommeVDSL;

                });

                document.getElementById('VDSL4').innerHTML =VDSLSm;
                
            }
        });
      }
GetListItemsVDSL44();


  window.sSwap4VDSL = moment().day(-13);
  sSwap4VDSL=moment(sSwap4VDSL).format("YYYY-MM-DD"); 

var responseVDSL55 = responseVDSL55 || [];  // this variable is used for storing list items
  var urlVDSL4Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap4VDSL+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsVDSL55(){

 

        moment.locale('fr');

 var sommeVDSL=0;
                var VDSLSm = 0;


 

        return $.ajax({
            url: urlVDSL4Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL55 = responseVDSL55.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL4Sprint = data.d.__next;
                    GetListItemsVDSL55();
                }

                $.each(responseVDSL55, function(key, value)  {
                      var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        } 

                VDSLSm = sommeVDSL;

                });

                document.getElementById('VDSL5').innerHTML =VDSLSm;
            }
        });
      }
GetListItemsVDSL55();





  window.sSwap3VDSL = moment().day(-6);
  sSwap3VDSL=moment(sSwap3VDSL).format("YYYY-MM-DD");
var responseVDSL66 = responseVDSL66 || [];  // this variable is used for storing list items
  var urlVDSL3Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap3VDSL+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsVDSL66(){

 

        moment.locale('fr');



 var sommeVDSL=0;
                var VDSLSm = 0;


 

        return $.ajax({
            url: urlVDSL3Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL66 = responseVDSL66.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL3Sprint = data.d.__next;
                    GetListItemsVDSL66();
                }

                $.each(responseVDSL66, function(key, value)  {
                      var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        } 

                VDSLSm = sommeVDSL;

                });

                document.getElementById('VDSL6').innerHTML =VDSLSm;
            }
        });
      }
GetListItemsVDSL66();



  window.sSwap2VDSL = moment().day(1);
  sSwap2VDSL=moment(sSwap2VDSL).format("YYYY-MM-DD");
var responseVDSL77 = responseVDSL77 || [];  // this variable is used for storing list items
  var urlVDSL2Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap2VDSL+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsVDSL77(){

 

        moment.locale('fr');
 

 var sommeVDSL=0;
                var VDSLSm = 0;


 

        return $.ajax({
            url: urlVDSL2Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL77 = responseVDSL77.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL2Sprint = data.d.__next;
                    GetListItemsVDSL77();
                }

                $.each(responseVDSL77, function(key, value)  {
                      var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        } 

                VDSLSm = sommeVDSL;

                });

                document.getElementById('VDSL7').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsVDSL77();






  window.sSwap1VDSL = moment().day(8); 
  sSwap1VDSL=moment(sSwap1VDSL).format("YYYY-MM-DD"); 
var responseVDSL88 = responseVDSL88 || [];  // this variable is used for storing list items
  var urlVDSL1Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap1VDSL+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsVDSL88(){

 

        moment.locale('fr');



 var sommeVDSL=0;
                var VDSLSm = 0;


 

        return $.ajax({
            url: urlVDSL1Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL88 = responseVDSL88.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL1Sprint = data.d.__next;
                    GetListItemsVDSL88();
                }
 

                $.each(responseVDSL88, function(key, value)  {
              
                            var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        }   

                VDSLSm = sommeVDSL;

                });

                document.getElementById('VDSL8').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsVDSL88();


//POTS *****************************


  window.sSwap8POTS = moment().day(-41);
  sSwap8POTS=moment(sSwap8POTS).format("YYYY-MM-DD");
var responsePOTS11 = responsePOTS11 || [];  // this variable is used for storing list items
  var urlPOTS8Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap8POTS+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsPOTS11(){

 

        moment.locale('fr');


 

 var sommePOTS=0;
                var VDSLSm = 0;


 

        return $.ajax({
            url: urlPOTS8Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS11 = responsePOTS11.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS8Sprint = data.d.__next;
                    GetListItemsPOTS11();
                }

                $.each(responsePOTS11, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;

                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   

                VDSLSm = sommePOTS;

                });

                document.getElementById('POTS1').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsPOTS11();




  window.sSwap7POTS = moment().day(-34);
  sSwap7POTS=moment(sSwap7POTS).format("YYYY-MM-DD");
var responsePOTS22 = responsePOTS22 || [];  // this variable is used for storing list items
  var urlPOTS7Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap7POTS+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsPOTS22(){

 

        moment.locale('fr');


 var sommePOTS=0;
                var VDSLSm = 0;


 

        return $.ajax({
            url: urlPOTS7Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS22 = responsePOTS22.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS7Sprint = data.d.__next;
                    GetListItemsPOTS22();
                }

                $.each(responsePOTS22, function(key, value)  {


                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   
                      
 

                VDSLSm = sommePOTS;

                });

                document.getElementById('POTS2').innerHTML =VDSLSm;
            }
        });
      }
GetListItemsPOTS22();



  window.sSwap6POTS = moment().day(-28);
  sSwap6POTS=moment(sSwap6POTS).format("YYYY-MM-DD");
var responsePOTS33 = responsePOTS33 || [];  // this variable is used for storing list items
  var urlPOTS6Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap6POTS+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsPOTS33(){

 

        moment.locale('fr');


 var sommePOTS=0;
                var VDSLSm = 0;



        return $.ajax({
            url: urlPOTS6Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS33 = responsePOTS33.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS6Sprint = data.d.__next;
                    GetListItemsPOTS33();
                }

 

                
            
 

                $.each(responsePOTS33, function(key, value)  {

                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   

                VDSLSm = sommePOTS;

                });

                document.getElementById('POTS3').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsPOTS33();




  window.sSwap5POTS = moment().day(-20); 
  sSwap5POTS=moment(sSwap5POTS).format("YYYY-MM-DD");
var responsePOTS44 = responsePOTS44 || [];  // this variable is used for storing list items
  var urlPOTS5Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap5POTS+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsPOTS44(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");


 



 var sommePOTS=0;
                var VDSLSm = 0;



        return $.ajax({
            url: urlPOTS5Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS44 = responsePOTS44.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS5Sprint = data.d.__next;
                    GetListItemsPOTS44();
                }

                $.each(responsePOTS44, function(key, value)  {

                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   

 

                VDSLSm = sommePOTS;

                });

                document.getElementById('POTS4').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsPOTS44();



  window.sSwap4POTS = moment().day(-13);
  sSwap4POTS=moment(sSwap4POTS).format("YYYY-MM-DD"); 

var responsePOTS55 = responsePOTS55 || [];  // this variable is used for storing list items
  var urlPOTS4Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap4POTS+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
 
    function GetListItemsPOTS55(){

 

        moment.locale('fr');


 var sommePOTS=0;
                var VDSLSm = 0;


 

        return $.ajax({
            url: urlPOTS4Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS55 = responsePOTS55.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS4Sprint = data.d.__next;
                    GetListItemsPOTS55();
                }

                $.each(responsePOTS55, function(key, value)  {

                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   

                VDSLSm = sommePOTS;

                });

                document.getElementById('POTS5').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsPOTS55();





  window.sSwap3POTS = moment().day(-6);
  sSwap3POTS=moment(sSwap3POTS).format("YYYY-MM-DD");

var responsePOTS66 = responsePOTS66 || [];  // this variable is used for storing list items
  var urlPOTS3Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap3POTS+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsPOTS66(){

 

        moment.locale('fr');


 var sommePOTS=0;
                var VDSLSm = 0;


 

        return $.ajax({
            url: urlPOTS3Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS66 = responsePOTS66.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS3Sprint = data.d.__next;
                    GetListItemsPOTS66();
                }

                $.each(responsePOTS66, function(key, value)  {

                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   

                VDSLSm = sommePOTS;

                });

                document.getElementById('POTS6').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsPOTS66();


  window.sSwap2POTS = moment().day(1);
  sSwap2POTS=moment(sSwap2POTS).format("YYYY-MM-DD");

var responsePOTS77 = responsePOTS77 || [];  // this variable is used for storing list items
  var urlPOTS2Sprint = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap2POTS+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsPOTS77(){

        moment.locale('fr');


 var sommePOTS=0;
                var VDSLSm = 0;


 

        return $.ajax({
            url: urlPOTS2Sprint,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS77 = responsePOTS77.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS2Sprint = data.d.__next;
                    GetListItemsPOTS77();
                }

                $.each(responsePOTS77, function(key, value)  {

                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   

 

                VDSLSm = sommePOTS;

                });
 

                document.getElementById('POTS7').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsPOTS77();



  window.sSwap1POTS = moment().day(8); 
  sSwap1POTS=moment(sSwap1POTS).format("YYYY-MM-DD"); 


var responsePOTS88 = responsePOTS88 || [];  // this variable is used for storing list items
  var urlPOTS1Filter = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap1POTS+"' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter' and ProjectId%20eq%20guid%272b8c6cc4-8581-eb11-a383-005056af8f76%27 and Ch_Sprint eq'"+sprint+"'";
    function GetListItemsPOTS88(){

 

        moment.locale('fr');



 var sommePOTS=0;
                var VDSLSm = 0;


 

        return $.ajax({
            url: urlPOTS1Filter,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS88 = responsePOTS88.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS1Filter = data.d.__next;
                    GetListItemsPOTS88();
                }

                $.each(responsePOTS88, function(key, value)  {

                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   
                      

                VDSLSm = sommePOTS;

                });
               
                document.getElementById('POTS8').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsPOTS88();

//*****************************************************************************************************************************************************************************


//*********************************************************************************************************************************





//filterIssuesBarchart();
setTimeout(filterIssuesBarchart,4000);
setTimeout(loadEvolutionParSemaine,9000);
setTimeout(loadEvolutionParSemaineInverse,12000);

}
//**************************************************************************************************************

if(sprint == "")
{

  
//**********************************************************************************************
//Avant filtrage
var url7 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Survey%27 and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
    var response7 = response7 || [];  // this variable is used for storing list items
    function GetListItemsSurvey(){
        return $.ajax({
            url: url7,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response7 = response7.concat(data.d.results);
                if (data.d.__next) {
                    url7 = data.d.__next;
                    GetListItemsSurvey();
                }
                  var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Survey = 0;
                  var SurveyComplete = 0;
                  var SurveyCompletePercent = 0;
                  var SurveyCompleteInDeadlines=0;
                  var SurveyOutOfTime=0;
                  var SurveyCompleteInDeadlinesPercent=0;
                  var SurveyOutOfTimePercent=0;

                  var SurveyNewValue=0;


                $.each(response7, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    var ActualFFDate = moment(actualFinishDate).format('YYYY-MM-DD');
                  
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
              

                    var lateFinish=value.TaskFinishDate;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                                         
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                                                     
                          if(percentComplete =="100")
                          {
                            SurveyComplete++;
                            
                            if(moment(lateFinishDate).isSameOrBefore(ActualFFDate))
                            {
                              SurveyCompleteInDeadlines++;
                            } 

                          }
                    }


                    Survey =sommes;
                    SurveyOutOfTime = SurveyComplete - SurveyCompleteInDeadlines; 

                });
                
        document.getElementById('verifier').innerHTML = Survey;
                  SurveyCompletePercent = (SurveyComplete / Survey)*100;
                SurveyCompleteInDeadlinesPercent=(SurveyCompleteInDeadlines/Survey)*100;
                SurveyOutOfTimePercent=(SurveyOutOfTime/Survey)*100;
        document.getElementById('SurveyComplete').innerHTML = SurveyComplete;
        document.getElementById('SurveyCompletePercent').innerHTML = parseFloat(SurveyCompletePercent).toFixed(0);
        document.getElementById('SurveyCompleteInDeadlines').innerHTML = parseFloat(SurveyCompleteInDeadlinesPercent).toFixed(0);
        document.getElementById('SurveyOutOfTime').innerHTML = parseFloat(SurveyOutOfTimePercent).toFixed(0);






            }
        });
      }
GetListItemsSurvey();


var url6 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Autorisation%27 and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
                                          
    var response6 = response6 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation(){
        return $.ajax({
            url: url6,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response6 = response6.concat(data.d.results);
                if (data.d.__next) {
                    url6 = data.d.__next;
                    GetListItemsAutorisation();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Autorisation = 0;
                  var AutorisationComplete = 0;
                  var AutorisationCompletePercent = 0;
                  var AutorisationCompleteInDeadlines=0;
                  var AutorisationOutOfTime=0;
                  var AutorisationCompleteInDeadlinesPercent=0;
                  var AutorisationOutOfTimePercent=0;



                $.each(response6, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    moment.locale('fr');
                      var finProjRéel;
                    var debutProjRéel;

                    var actualFinishDate=value.TaskActualFinishDate;
                    var ActualFFDate = moment(actualFinishDate).format('YYYY-MM-DD');
                    
                    var lateFinish=value.TaskFinishDate;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                    
                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    /*var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');*/
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                    
                      sommes++;


                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            AutorisationComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(ActualFFDate))
                            {
                               AutorisationCompleteInDeadlines++;
                            }
                          }
                    }



                Autorisation =sommes;
                AutorisationOutOfTime = AutorisationComplete - AutorisationCompleteInDeadlines;

                });
                
                   document.getElementById('Autorisation').innerHTML = Autorisation;
        AutorisationCompletePercent = (AutorisationComplete / Autorisation)*100;
        AutorisationCompleteInDeadlinesPercent=(AutorisationCompleteInDeadlines/Autorisation)*100;
        AutorisationOutOfTimePercent=(AutorisationOutOfTime/Autorisation)*100;
        document.getElementById('AutorisationComplete').innerHTML = AutorisationComplete; 
        document.getElementById('AutorisationCompletePercent').innerHTML = parseFloat(AutorisationCompletePercent).toFixed(0) ;   
        document.getElementById('AutorisationCompleteInDeadlines').innerHTML = parseFloat(AutorisationCompleteInDeadlinesPercent).toFixed(0) ;
        document.getElementById('AutorisationOutOfTime').innerHTML =parseFloat(AutorisationOutOfTimePercent).toFixed(0); 

            }
        });
      }
GetListItemsAutorisation();



 var url5 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Génie Civil%27 and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
    var response5 = response5 || [];  // this variable is used for storing list items
    function GetListItemsGenieCivil(){
        return $.ajax({
            url: url5,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response5 = response5.concat(data.d.results);
                if (data.d.__next) {
                    url5 = data.d.__next;
                    GetListItemsGenieCivil();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var civil = 0;
                  var civilComplete = 0;
                  var civilCompletePercent = 0;
                  var civilCompleteInDeadlines=0;
                  var civilOutOfTime=0;
                  var civilCompleteInDeadlinesPercent=0;
                  var civilOutOfTimePercent=0;



                $.each(response5, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    moment.locale('fr');
                    var finProjRéel;
                    var debutProjRéel;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                   
                   var actualFinishDate=value.TaskActualFinishDate;
                   var ActiFinishCivil = moment(actualFinishDate).format('YYYY-MM-DD');

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskFinishDate;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                    if(arrayCustomerID == "Génie Civil")
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            civilComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(ActiFinishCivil))
                            {
                               civilCompleteInDeadlines++;
                            }
                          }


                    }
                    
                  }


                civil =sommes;
                civilOutOfTime = civilComplete-civilCompleteInDeadlines;



                });
                
                  document.getElementById('gCivil').innerHTML = civil;
        document.getElementById('civilComplete').innerHTML = civilComplete; 
        civilCompletePercent = (civilComplete / civil)*100;
        document.getElementById('civilCompletePercent').innerHTML = parseFloat(civilCompletePercent).toFixed(0) ; 
        civilCompleteInDeadlinesPercent=(civilCompleteInDeadlines/civil)*100;
        civilOutOfTimePercent=(civilOutOfTime/civil)*100;
        document.getElementById('civilCompleteInDeadlines').innerHTML = parseFloat(civilCompleteInDeadlinesPercent).toFixed(0) ;
        document.getElementById('civilOutOfTime').innerHTML = parseFloat(civilOutOfTimePercent).toFixed(0);  

            }
        });
      }
GetListItemsGenieCivil();





 var url4 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,TaskActualFinishDate,TaskFinishDate&$filter=TaskName%20eq%20%27Electrification%27 and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
    var response4 = response4 || [];  // this variable is used for storing list items
    function GetListItemsElectrification(){
        return $.ajax({
            url: url4,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response4 = response4.concat(data.d.results);
                if (data.d.__next) {
                    url4 = data.d.__next;
                    GetListItemsElectrification();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Electrification = 0;
                  var ElectrificationComplete = 0;
                  var ElectrificationCompletepercent = 0;
                  var ElectrificationCompleteInDeadlines=0;
                  var ElectrificationOutOfTime=0;
                  var ElectrificationCompleteInDeadlinesPercent=0;
                  var ElectrificationOutOfTimePercent=0;



                $.each(response4, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    moment.locale('fr');
                    var finProjRéel;
                    var debutProjRéel;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);

                    var actualFinishDate=value.TaskActualFinishDate;
                    var ActFinishElect = moment(actualFinishDate).format('YYYY-MM-DD');

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskFinishDate;
                    var lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                    if(arrayCustomerID == "Electrification")
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            ElectrificationComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(ActFinishElect))
                            {
                               ElectrificationCompleteInDeadlines++;
                            }
                          }
                          


                    }
                    
                  }


                Electrification =sommes;
                ElectrificationOutOfTime = ElectrificationComplete - ElectrificationCompleteInDeadlines;

                });
                
                  document.getElementById('Electrification').innerHTML = Electrification;
        document.getElementById('ElectrificationComplete').innerHTML = ElectrificationComplete;
        ElectrificationCompletepercent = (ElectrificationComplete / Electrification)*100;
        document.getElementById('ElectrificationCompletepercent').innerHTML = parseFloat(ElectrificationCompletepercent).toFixed(0) ; 
        ElectrificationCompleteInDeadlinesPercent=(ElectrificationCompleteInDeadlines/Electrification)*100;
        ElectrificationOutOfTimePercent=(ElectrificationOutOfTime/Electrification)*100;
        document.getElementById('ElectrificationCompleteInDeadlines').innerHTML = parseFloat(ElectrificationCompleteInDeadlinesPercent).toFixed(0) ;
        document.getElementById('ElectrificationOutOfTime').innerHTML = parseFloat(ElectrificationOutOfTimePercent).toFixed(0);  

            }
        });
      }
GetListItemsElectrification();




 var url3 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskFinishDate,TaskActualFinishDate,TaskLateFinish&$filter=TaskName%20eq%20%27Installation équipement%27 and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
    var response3 = response3 || [];  // this variable is used for storing list items
    function GetListItemsInstallation(){
        return $.ajax({
            url: url3,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response3 = response3.concat(data.d.results);
                if (data.d.__next) {
                    url3 = data.d.__next;
                    GetListItemsInstallation();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Installation = 0;
                  var InstallationComplete=0;
                  var InstallationCompletePercent=0;
                  var InstallationCompleteInDeadlines=0;
                  var InstallationOutOfTime=0;
                  var InstallationCompleteInDeadlinesPercent=0;
                  var InstallationOutOfTimePercent=0;



                $.each(response3, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    var actualFinishDate=value.TaskActualFinishDate;
                    var InstallFinishdate = moment(actualFinishDate).format('YYYY-MM-DD');
                 
                    var finProjRéel;
                    var debutProjRéel;

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    

                    var lateFinish=value.TaskFinishDate;
                    var lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                    var Identifiant = value.ProjectId;
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                    if(arrayCustomerID == "Installation équipement")
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            InstallationComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(InstallFinishdate))
                            {   
                              InstallationCompleteInDeadlines++;
                            }
                          }

                    }
                    
                  }


                Installation =sommes;
                InstallationOutOfTime = InstallationComplete - InstallationCompleteInDeadlines;

                });
                
                  document.getElementById('Installation').innerHTML = Installation;

                  document.getElementById('InstallationComplete').innerHTML = InstallationComplete; 
                  InstallationCompletePercent = (InstallationComplete / Installation)*100;
                  document.getElementById('InstallationCompletePercent').innerHTML = parseFloat(InstallationCompletePercent).toFixed(0) ;   
                  InstallationCompleteInDeadlinesPercent=(InstallationCompleteInDeadlines/Installation)*100;
                  InstallationOutOfTimePercent=(InstallationOutOfTime/Installation)*100;
                  document.getElementById('InstallationCompleteInDeadlines').innerHTML = parseFloat(InstallationCompleteInDeadlinesPercent).toFixed(0) ;
                  document.getElementById('InstallationOutOfTime').innerHTML = parseFloat(InstallationOutOfTimePercent).toFixed(0);  

            }
        });
      }
GetListItemsInstallation();



 var url2 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Réception de site%27 and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
    var response2 = response2 || [];  // this variable is used for storing list items
    function GetListItemsRecepSite(){
        return $.ajax({
            url: url2,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response2 = response2.concat(data.d.results);
                if (data.d.__next) {
                    url2 = data.d.__next;
                    GetListItemsRecepSite();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Reception = 0;
                  var ReceptionComplete = 0;
                  var ReceptionCompletePercent = 0;
                  var ReceptionCompleteInDeadlines=0;
                  var ReceptionOutOfTime=0;
                  var ReceptionCompleteInDeadlinesPercent=0;
                  var ReceptionOutOfTimePercent=0;



                $.each(response2, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    var actualFinishDate=value.TaskActualFinishDate;
                    var ReceptionFinishdateReal = moment(actualFinishDate).format('YYYY-MM-DD');
                    var finProjRéel;
                    var debutProjRéel;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                  



                    var finishDate=value.TaskFinishDate;
                    finProj=moment(finishDate).format('L');

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    

                    var lateFinish=value.TaskFinishDate;
                    var lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                    var Identifiant = value.ProjectId;
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                    if(arrayCustomerID == "Réception de site")
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                        
                          if(percentComplete =="100")
                          {
                            ReceptionComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(ReceptionFinishdateReal)){
                            ReceptionCompleteInDeadlines++;
                          }
                          }

                    }
                    
                  }


                Reception =sommes;
                ReceptionOutOfTime = ReceptionComplete - ReceptionCompleteInDeadlines;

                });
                
                document.getElementById('Reception').innerHTML = Reception;

        document.getElementById('ReceptionComplete').innerHTML = ReceptionComplete; 
        ReceptionCompletePercent = (ReceptionComplete / Reception)*100;
        document.getElementById('ReceptionCompletePercent').innerHTML = parseFloat(ReceptionCompletePercent).toFixed(0) ;   
        ReceptionCompleteInDeadlinesPercent=(ReceptionCompleteInDeadlines/Reception)*100;
        ReceptionOutOfTimePercent=(ReceptionOutOfTime/Reception)*100;
        document.getElementById('ReceptionCompleteInDeadlines').innerHTML = parseFloat(ReceptionCompleteInDeadlinesPercent).toFixed(0) ;
        document.getElementById('ReceptionOutOfTime').innerHTML = parseFloat(ReceptionOutOfTimePercent).toFixed(0); 

            }
        });
      }
GetListItemsRecepSite();









 var url1 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Basculement%20et%20Monitoring%27%20and%20TaskName%20eq%20%27Basculement%20et%20monitoring%27 and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
    var response1 = response1 || [];  // this variable is used for storing list items
    function GetListItems(){
        return $.ajax({
            url: url1,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response1 = response1.concat(data.d.results);
                if (data.d.__next) {
                    url1 = data.d.__next;
                    GetListItems();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var SWAP = 0;
                  var SWAPComplete = 0;
                  var SWAPCompletePercent = 0;
                  var SWAPCompleteInDeadlines=0;
                  var SWAPOutOfTime=0;
                  var SWAPCompleteInDeadlinesPercent=0;
                  var SWAPOutOfTimePercent=0;



                $.each(response1, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    var actualFinishDate=value.TaskActualFinishDate;
                    var BasculementActualFinishdate = moment(actualFinishDate).format('YYYY-MM-DD');
                    var finProjRéel;
                    var debutProjRéel;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                  



                    

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    

                    var lateFinish=value.TaskFinishDate;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                    var Identifiant = value.ProjectId;
                      

                  if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                    if((arrayCustomerID == "Basculement et monitoring")||(arrayCustomerID == "Basculement et Monitoring"))
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            SWAPComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(BasculementActualFinishdate)){
                            SWAPCompleteInDeadlines++;
                          }
                          }

                    }
                    
                  }


                SWAP =sommes;
                SWAPOutOfTime = SWAPComplete-SWAPCompleteInDeadlines;

                });
                
                document.getElementById('SWAP').innerHTML = SWAP;

                document.getElementById('SWAPComplete').innerHTML = SWAPComplete; 
        SWAPCompletePercent = (SWAPComplete / SWAP)*100;
        document.getElementById('SWAPCompletePercent').innerHTML = parseFloat(SWAPCompletePercent).toFixed(0) ;     
        SWAPCompleteInDeadlinesPercent=(SWAPCompleteInDeadlines/SWAP)*100;
        SWAPOutOfTimePercent=(SWAPOutOfTime/SWAP)*100;
        document.getElementById('SWAPCompleteInDeadlines').innerHTML = parseFloat(SWAPCompleteInDeadlinesPercent).toFixed(0) ;
        document.getElementById('SWAPOutOfTime').innerHTML = parseFloat(SWAPOutOfTimePercent).toFixed(0);

            }
        });
      }
GetListItems();



 var url8 = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Tirage%20FO%27 and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
    var response8 = response8 || [];  // this variable is used for storing list items
    function GetListItemsTirageFO(){
        return $.ajax({
            url: url8,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                response8 = response8.concat(data.d.results);
                if (data.d.__next) {
                    url8 = data.d.__next;
                    GetListItemsTirageFO();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;


                  var Tirage = 0;
                  var TirageComplete = 0;
                  var TirageCompletePercent = 0;
                  var TirageCompleteInDeadlines=0;
                  var TirageOutOfTime=0;
                  var TirageCompleteInDeadlinesPercent=0;
                  var TirageOutOfTimePercent=0;



                $.each(response8, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  

                      //alert(count)
                      var idTask=value.TaskId;
                    var actualFinishDate=value.TaskActualFinishDate;
                    var finProjRéel = moment(actualFinishDate).format('YYYY-MM-DD');

                    var debutProjRéel;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                  



                    var finishDate=value.TaskFinishDate;
                    finProj=moment(finishDate).format('L');

                     var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('YYYY-MM-DD');
                    var Identifiant = value.ProjectId;
                      

                  if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                    if(arrayCustomerID == "Tirage FO")
                    {
                      sommes++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                          if(percentComplete =="100")
                          {
                            TirageComplete++;
                            if(moment(lateFinishDate).isSameOrBefore(finProjRéel)){
                            TirageCompleteInDeadlines++;
                          }
                          }

                    }
                    
                  }


                Tirage =sommes;
                TirageOutOfTime = TirageComplete - TirageCompleteInDeadlines;

                });
                
                document.getElementById('TirageFo').innerHTML = Tirage;

                document.getElementById('TirageComplete').innerHTML = TirageComplete; 
        TirageCompletePercent = (TirageComplete / Tirage)*100;
        document.getElementById('TirageCompletePercent').innerHTML = parseFloat(TirageCompletePercent).toFixed(0) ;     
        TirageCompleteInDeadlinesPercent=(TirageCompleteInDeadlines/Tirage)*100;
        TirageOutOfTimePercent=(TirageOutOfTime/Tirage)*100;
        document.getElementById('TirageCompleteInDeadlines').innerHTML = parseFloat(TirageCompleteInDeadlinesPercent).toFixed(0) ;
        document.getElementById('TirageOutOfTime').innerHTML = parseFloat(TirageOutOfTimePercent).toFixed(0);

            }
        });
      }
GetListItemsTirageFO();



 
 var todayss;
var todayss2;
var todayss3;
var ZONE_TUNIS_Ariana=0;
var ZONE_TUNIS_BenArous=0;
var ZONE_TUNIS_Tunis=0;
var ZONE_TUNIS_Manouba=0;
var ZONE_CENTRE_SidiBouzid=0;
var ZONE_CENTRE_Mahdia=0;
var ZONE_CENTRE_Monastir=0;
var ZONE_CENTRE_Sousse=0;
var ZONE_CENTRE_Kasserine=0;
var ZONE_CENTRE_Kairouan=0;
var ZONE_NORD_Kef=0;
var ZONE_NORD_Béja=0;
var ZONE_NORD_Bizerte=0;
var ZONE_NORD_Jendouba=0;
var ZONE_NORD_Nabeul=0;
var ZONE_NORD_Siliana=0;
var ZONE_NORD_Zaghouan=0;
var ZONE_SUD_Gabes=0;
var ZONE_SUD_Gafsa=0;
var ZONE_SUD_Kebili=0;
var ZONE_SUD_Médenine=0;
var ZONE_SUD_Sfax=0;
var ZONE_SUD_Tataouine=0;
var ZONE_SUD_Tozeur=0;


var responseFirstDate = responseFirstDate || []

function TablePrevisionInstallation()
{   

 





    window.nextWeek1 = moment().day(8);  
  window.nextWeek2 = moment().day(15); 

  window.todayss = moment().day(8);  
  window.todayss2 = moment().day(14); 

          
        //moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");
        nextWeek1=moment(nextWeek1).format('DD-MM-YYYY');
              document.getElementById('nextWeek1').innerHTML = nextWeek1; 
              //console.log("todayss: "+todayss);     

        //todayss2=moment(todayss2).format("YYYY-MM-DDThh:mm:ss");
         nextWeek2=moment(nextWeek2).format('DD-MM-YYYY');

              document.getElementById('nextWeek2').innerHTML = nextWeek2;   
          //console.log("todayss2: "+todayss2);
//2020-06-17T08:13:34Z
              
                window.todaysss = moment().day(8);
              var dateTimeFirst = moment(todayss).format("YYYY-MM-DDTHH:mm:ss");
              console.log("La date est"+ dateTimeFirst);
              var dateTimeLast = moment(todayss2).format("YYYY-MM-DDTHH:mm:ss");
              console.log("la deuxiéme date est" + dateTimeLast);
 var urlFirstDate = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=TaskStartDate ge datetime'"+dateTimeFirst+"' and TaskFinishDate lt datetime'"+dateTimeLast+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
              
              $.ajax({url: urlFirstDate, 
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data){
                                    responseFirstDate = responseFirstDate.concat(data.d.results);
                                    if (data.d.__next) {
                                        urlFirstDate = data.d.__next;
                                        TablePrevisionInstallation();
                                    } 

                                  
            $.each(responseFirstDate, function(key, value) 
            {           
                 moment.locale('fr');
                  
                    var Identifiant = value.ProjectId;
                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                    var task = value.TaskName;
                    
                      
                      
                      var drt=value.DCT_DRT;


                     var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskFinishDate;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);

                     
                      var actualStartDate=value.TaskStartDate;
                        debutTask=moment(actualStartDate).format('L');
                      
                      /*if(((moment(debutTask).isAfter(todayss))&&(moment(debutTask).isBefore(todayss2)))){*/
                                       /* if(task == 'Installation équipement')
                                        {*/
                                            if(drt == "ZONE TUNIS.Ariana"){
                                                ZONE_TUNIS_Ariana++;
                                            }
                                               
                                               
                                            if(drt == "ZONE TUNIS.Ben Arous"){
                                                ZONE_TUNIS_BenArous++;
                                            }
                                               
                                            if(drt == "ZONE TUNIS.Tunis"){
                                                 ZONE_TUNIS_Tunis++;
                                            }
                                               
                                               
                                            if(drt == "ZONE TUNIS.Manouba"){
                                                ZONE_TUNIS_Manouba++;
                                            }
                                           
                                            if(drt == "ZONE CENTRE.Sidi Bouzid"){
                                                ZONE_CENTRE_SidiBouzid++;
                                            }
                                           
                                            if(drt == "ZONE CENTRE.Mahdia"){
                                                ZONE_CENTRE_Mahdia++;
                                            }
                                           
                                            if(drt == "ZONE CENTRE.Monastir"){
                                                ZONE_CENTRE_Monastir++;
                                            }
                                       
                                            if(drt == "ZONE CENTRE.Sousse"){
                                                ZONE_CENTRE_Sousse++;    
                                            }
                                           
                                            if(drt == "ZONE CENTRE.Kasserine"){
                                                 ZONE_CENTRE_Kasserine++;

                                            }
                                           
                                            if(drt == "ZONE CENTRE.Kairouan"){
                                                 ZONE_CENTRE_Kairouan++;
                                            }
                                           
                                            if(drt == "ZONE NORD.Kef"){
                                                ZONE_NORD_Kef++;  
                                            }
                                           
                                           
                                            if(drt == "ZONE NORD.Béja"){
                                                ZONE_NORD_Béja++;   
                                                /*console.log("Nom de la tache est "+task);
                                                console.log("debutTask: "+debutTask); */
                                            }
                                           
                                            if(drt == "ZONE NORD.Bizerte"){
                                                ZONE_NORD_Bizerte++;    
                                            }
                                           
                                            if(drt == "ZONE NORD.Jendouba"){
                                                ZONE_NORD_Jendouba++;    
                                            }
                                           
                                           
                                            if(drt == "ZONE NORD.Nabeul"){
                                                ZONE_NORD_Nabeul++;    
                                            }
                                           
                                            if(drt == "ZONE NORD.Siliana"){
                                                ZONE_NORD_Siliana++;    
                                            }
                                           
                                            if(drt == "ZONE NORD.Zaghouan"){
                                                ZONE_NORD_Zaghouan++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Gabes"){
                                                ZONE_SUD_Gabes++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Gafsa"){
                                                ZONE_SUD_Gafsa++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Kebili"){
                                                ZONE_SUD_Kebili++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Médenine"){
                                                ZONE_SUD_Médenine++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Sfax"){
                                                ZONE_SUD_Sfax++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Tataouine"){
                                                ZONE_SUD_Tataouine++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Tozeur"){
                                                ZONE_SUD_Tozeur++;    
                                            }
                                          //}
                     // }               
                      

                                    
                                    
                              
                    
                    }
                    
            });

                    document.getElementById('ArianaS1').innerHTML =ZONE_TUNIS_Ariana;
                    document.getElementById('BenArousS1').innerHTML =ZONE_TUNIS_BenArous;
                    document.getElementById('TunisS1').innerHTML =ZONE_TUNIS_Tunis;
                    document.getElementById('ManoubaS1').innerHTML =ZONE_TUNIS_Manouba;
                    document.getElementById('SidiBouzidS1').innerHTML =ZONE_CENTRE_SidiBouzid;
                    document.getElementById('MahdiaS1').innerHTML =ZONE_CENTRE_Mahdia;
                    document.getElementById('MonastirS1').innerHTML =ZONE_CENTRE_Monastir;
                    document.getElementById('SousseS1').innerHTML =ZONE_CENTRE_Sousse;
                    document.getElementById('KasserineS1').innerHTML =ZONE_CENTRE_Kasserine;
                    document.getElementById('KairouanS1').innerHTML =ZONE_CENTRE_Kairouan;
                    document.getElementById('KefS1').innerHTML =ZONE_NORD_Kef;
                    document.getElementById('BéjaS1').innerHTML =ZONE_NORD_Béja;
                    document.getElementById('BizerteS1').innerHTML =ZONE_NORD_Bizerte;
                    document.getElementById('JendoubaS1').innerHTML =ZONE_NORD_Jendouba;
                    document.getElementById('NabeulS1').innerHTML =ZONE_NORD_Nabeul;
                    document.getElementById('SilianaS1').innerHTML =ZONE_NORD_Siliana;
                    document.getElementById('ZaghouanS1').innerHTML =ZONE_NORD_Zaghouan;
                    document.getElementById('GabesS1').innerHTML =ZONE_SUD_Gabes;
                    document.getElementById('GafsaS1').innerHTML =ZONE_SUD_Gafsa;
                    document.getElementById('KebiliS1').innerHTML =ZONE_SUD_Kebili;
                    document.getElementById('MédenineS1').innerHTML =ZONE_SUD_Médenine;
                    document.getElementById('SfaxS1').innerHTML =ZONE_SUD_Sfax;
                    document.getElementById('TataouineS1').innerHTML =ZONE_SUD_Tataouine;
                    document.getElementById('TozeurS1').innerHTML =ZONE_SUD_Tozeur;

                  
}   
});



}
TablePrevisionInstallation();
//setTimeout(TablePrevisionInstallation, 10000);

//******************************************************************************************************
var ZONE_TUNIS_BenArous1=0;
var ZONE_TUNIS_Tunis1=0;
var ZONE_TUNIS_Manouba1=0;
var ZONE_CENTRE_SidiBouzid1=0;
var ZONE_CENTRE_Mahdia1=0;
var ZONE_CENTRE_Monastir1=0;
var ZONE_CENTRE_Sousse1=0;
var ZONE_CENTRE_Kasserine1=0;
var ZONE_CENTRE_Kairouan1=0;
var ZONE_NORD_Kef1=0;
var ZONE_NORD_Béja1=0;
var ZONE_NORD_Bizerte1=0;
var ZONE_NORD_Jendouba1=0;
var ZONE_NORD_Nabeul1=0;
var ZONE_NORD_Siliana1=0;
var ZONE_NORD_Zaghouan1=0;
var ZONE_SUD_Gabes1=0;
var ZONE_SUD_Gafsa1=0;
var ZONE_SUD_Kebili1=0;
var ZONE_SUD_Médenine1=0;
var ZONE_SUD_Sfax1=0;
var ZONE_SUD_Tataouine1=0;
var ZONE_SUD_Tozeur1=0;

var responseSecondDate = responseSecondDate || [];

function TablePrevisionInstallationSecondDate()
{   
 
  window.todayss4 = moment().day(15); 
  window.todayss5 = moment().day(21);
          

              
                
              var dateTimeFirsts = moment(todayss4).format("YYYY-MM-DDTHH:mm:ss");
              console.log(dateTimeFirsts);
      
              var dateTimeLasts = moment(todayss5).format("YYYY-MM-DDTHH:mm:ss");
              console.log(dateTimeLasts);

              var urlSecondDate = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$filter=TaskStartDate ge datetime'"+dateTimeFirsts+"' and TaskFinishDate lt datetime'"+dateTimeLasts+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
                //$.ajax({url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/Tasks", 
              $.ajax({url: urlSecondDate, 
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data){
                                    responseSecondDate = responseSecondDate.concat(data.d.results);
                                    if (data.d.__next) {
                                        urlSecondDate = data.d.__next;
                                        TablePrevisionInstallationSecondDate();
                                    } 

                          var listItemInfo = ""; 
                            var ZONE_TUNIS_Ariana1=0;




            $.each(responseSecondDate, function(key, value) 
            {           
                 moment.locale('fr');
                  
                    
                     var Identifiant = value.ProjectId;
                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                    var task = value.TaskName;
                      
                      var drt=value.DCT_DRT;
                     
                     var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskFinishDate;

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);

                     
                      var actualStartDate=value.TaskStartDate;
                        debutTask=moment(actualStartDate).format('L');


                        if(task == 'Installation équipement')
                          {
                         if(drt == "ZONE TUNIS.Ariana"){
                                            ZONE_TUNIS_Ariana1++;
                                        }
                                           
                                           
                                        if(drt == "ZONE TUNIS.Ben Arous"){
                                            ZONE_TUNIS_BenArous1++;
                                        }
                                           
                                        if(drt == "ZONE TUNIS.Tunis"){
                                             ZONE_TUNIS_Tunis1++;
                                        }
                                           
                                           
                                        if(drt == "ZONE TUNIS.Manouba"){
                                            ZONE_TUNIS_Manouba1++;
                                        }
                                           
                                            if(drt == "ZONE CENTRE.Sidi Bouzid"){
                                                ZONE_CENTRE_SidiBouzid1++;
                                            }
                                           
                                            if(drt == "ZONE CENTRE.Mahdia"){
                                                ZONE_CENTRE_Mahdia1++;
                                            }
                                           
                                            if(drt == "ZONE CENTRE.Monastir"){
                                                ZONE_CENTRE_Monastir1++;
                                            }
                                       
                                            if(drt == "ZONE CENTRE.Sousse"){
                                                ZONE_CENTRE_Sousse1++;    
                                            }
                                           
                                            if(drt == "ZONE CENTRE.Kasserine"){
                                                 ZONE_CENTRE_Kasserine1++;

                                            }
                                           
                                            if(drt == "ZONE CENTRE.Kairouan"){
                                                 ZONE_CENTRE_Kairouan1++;
                                            }
                                           
                                            if(drt == "ZONE NORD.Kef"){
                                                ZONE_NORD_Kef1++;  
                                            }
                                           
                                           
                                            if(drt == "ZONE NORD.Béja"){
                                                ZONE_NORD_Béja1++;    
                                            }
                                           
                                            if(drt == "ZONE NORD.Bizerte"){
                                                ZONE_NORD_Bizerte1++;    
                                            }
                                           
                                            if(drt == "ZONE NORD.Jendouba"){
                                                ZONE_NORD_Jendouba1++;    
                                            }
                                           
                                           
                                            if(drt == "ZONE NORD.Nabeul"){
                                                ZONE_NORD_Nabeul1++;    
                                            }
                                           
                                            if(drt == "ZONE NORD.Siliana"){
                                                ZONE_NORD_Siliana1++;    
                                            }
                                           
                                            if(drt == "ZONE NORD.Zaghouan"){
                                                ZONE_NORD_Zaghouan1++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Gabes"){
                                                ZONE_SUD_Gabes1++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Gafsa"){
                                                ZONE_SUD_Gafsa1++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Kebili"){
                                                ZONE_SUD_Kebili1++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Médenine"){
                                                ZONE_SUD_Médenine1++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Sfax"){
                                                ZONE_SUD_Sfax1++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Tataouine"){
                                                ZONE_SUD_Tataouine1++;    
                                            }
                                           
                                            if(drt == "ZONE SUD.Tozeur"){
                                                ZONE_SUD_Tozeur1++;    
                                            }
                                        }
                          } 
                    
            });


                    document.getElementById('ArianaS2').innerHTML =ZONE_TUNIS_Ariana1;
                    document.getElementById('BenArousS2').innerHTML =ZONE_TUNIS_BenArous1;
                    document.getElementById('TunisS2').innerHTML =ZONE_TUNIS_Tunis1;
                    document.getElementById('ManoubaS2').innerHTML =ZONE_TUNIS_Manouba1;
                    document.getElementById('SidiBouzidS2').innerHTML =ZONE_CENTRE_SidiBouzid1;
                    document.getElementById('MahdiaS2').innerHTML =ZONE_CENTRE_Mahdia1;
                    document.getElementById('MonastirS2').innerHTML =ZONE_CENTRE_Monastir1;
                    document.getElementById('SousseS2').innerHTML =ZONE_CENTRE_Sousse1;
                    document.getElementById('KasserineS2').innerHTML =ZONE_CENTRE_Kasserine1;
                    document.getElementById('KairouanS2').innerHTML =ZONE_CENTRE_Kairouan1;
                    document.getElementById('KefS2').innerHTML =ZONE_NORD_Kef1;
                    document.getElementById('BéjaS2').innerHTML =ZONE_NORD_Béja1;
                    document.getElementById('BizerteS2').innerHTML =ZONE_NORD_Bizerte1;
                    document.getElementById('JendoubaS2').innerHTML =ZONE_NORD_Jendouba1;
                    document.getElementById('NabeulS2').innerHTML =ZONE_NORD_Nabeul1;
                    document.getElementById('SilianaS2').innerHTML =ZONE_NORD_Siliana1;
                    document.getElementById('ZaghouanS2').innerHTML =ZONE_NORD_Zaghouan1;
                    document.getElementById('GabesS2').innerHTML =ZONE_SUD_Gabes1;
                    document.getElementById('GafsaS2').innerHTML =ZONE_SUD_Gafsa1;
                    document.getElementById('KebiliS2').innerHTML =ZONE_SUD_Kebili1;
                    document.getElementById('MédenineS2').innerHTML =ZONE_SUD_Médenine1;
                    document.getElementById('SfaxS2').innerHTML =ZONE_SUD_Sfax1;
                    document.getElementById('TataouineS2').innerHTML =ZONE_SUD_Tataouine1;
                    document.getElementById('TozeurS2').innerHTML =ZONE_SUD_Tozeur1;
}   
});



}
TablePrevisionInstallationSecondDate();


//******************************************************************************************************




  window.sSwap8Survey = moment("2020-02-17");
  sSwap8Survey=moment(sSwap8Survey).format("YYYY-MM-DD");
    var responseSurvey = responseSurvey || [];  // this variable is used for storing list items
 var urlSurvey8Filter = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap8Survey+"' and TaskName eq 'Survey' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
    function GetListItemsSurveys(){

        moment.locale('fr');





        return $.ajax({
            url: urlSurvey8Filter,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey = responseSurvey.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey8Filter = data.d.__next;
                    GetListItemsSurveys();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseSurvey, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }
                           
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
               
                ss1 = somme11;

              
               

                document.getElementById('survey1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsSurveys();



  window.sSwap7Survey = moment().day(-34);
  sSwap7Survey=moment(sSwap7Survey).format("YYYY-MM-DD");


 var urlSurvey7Survey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap7Survey+"' and TaskName eq 'Survey' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
     var responseSurvey1 = responseSurvey1 || [];  // this variable is used for storing list items
    function GetListItemsSurveys1(){

        moment.locale('fr');
       return $.ajax({
            url: urlSurvey7Survey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey1 = responseSurvey1.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey7Survey = data.d.__next;
                    GetListItemsSurveys1();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseSurvey1, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                                    var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('survey2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsSurveys1();


window.sSwap6Survey = moment().day(-28);
  sSwap6Survey=moment(sSwap6Survey).format("YYYY-MM-DD");

var urlSurvey6Survey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap6Survey+"' and TaskName eq 'Survey' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
        


    var responseSurvey2 = responseSurvey2 || [];  // this variable is used for storing list items
    function GetListItemsSurveys2(){

        moment.locale('fr');
    

  
        return $.ajax({
            url: urlSurvey6Survey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey2 = responseSurvey2.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey6Survey = data.d.__next;
                    GetListItemsSurveys2();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseSurvey2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                    var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('survey3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsSurveys2();


 window.sSwap5Survey = moment().day(-20); 
  sSwap5Survey=moment(sSwap5Survey).format("YYYY-MM-DD");


var urlSurvey5Survey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap5Survey+"' and TaskName eq 'Survey' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";


    var responseSurvey3 = responseSurvey3 || [];  // this variable is used for storing list items
    function GetListItemsSurveys3(){

        moment.locale('fr');
         

 
        return $.ajax({
            url: urlSurvey5Survey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey3 = responseSurvey3.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey5Survey = data.d.__next;
                    GetListItemsSurveys3();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseSurvey3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('survey4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsSurveys3();



 window.sSwap4Survey = moment().day(-13);
  sSwap4Survey=moment(sSwap4Survey).format("YYYY-MM-DD");  

var urlSurvey4Survey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap4Survey+"' and TaskName eq 'Survey' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";


    var responseSurvey4 = responseSurvey4 || [];  // this variable is used for storing list items
    function GetListItemsSurveys4(){

        moment.locale('fr');
        
 
        return $.ajax({
            url: urlSurvey4Survey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey4 = responseSurvey4.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey4Survey = data.d.__next;
                    GetListItemsSurveys4();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseSurvey4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('survey5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsSurveys4();

  window.sSwap3Survey = moment().day(-6);
  sSwap3Survey=moment(sSwap3Survey).format("YYYY-MM-DD");

var urlSurvey3Survey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap3Survey+"' and TaskName eq 'Survey' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";


    var responseSurvey5 = responseSurvey5 || [];  // this variable is used for storing list items
    function GetListItemsSurveys5(){

        moment.locale('fr');
       


        return $.ajax({
            url: urlSurvey3Survey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey5 = responseSurvey5.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey3Survey = data.d.__next;
                    GetListItemsSurveys5();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseSurvey5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                             var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('survey6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsSurveys5();

  window.sSwap2Survey = moment().day(1);
  sSwap2Survey=moment(sSwap2Survey).format("YYYY-MM-DD"); 


var urlSurvey2Survey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap2Survey+"' and TaskName eq 'Survey' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";


    var responseSurvey6 = responseSurvey6 || [];  // this variable is used for storing list items
    function GetListItemsSurveys6(){

        moment.locale('fr');
        

        return $.ajax({
            url: urlSurvey2Survey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey6 = responseSurvey6.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey2Survey = data.d.__next;
                    GetListItemsSurveys6();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseSurvey6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('survey7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsSurveys6();


  window.sSwap1Survey = moment().day(8); 
  sSwap1Survey=moment(sSwap1Survey).format("YYYY-MM-DD"); 

  var urlSurvey1Survey = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap1Survey+"' and TaskName eq 'Survey' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseSurvey7 = responseSurvey7 || [];  // this variable is used for storing list items
    function GetListItemsSurveys7(){

        moment.locale('fr');
        

        return $.ajax({
            url: urlSurvey1Survey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSurvey7 = responseSurvey7.concat(data.d.results);
                if (data.d.__next) {
                    urlSurvey1Survey = data.d.__next;
                    GetListItemsSurveys7();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseSurvey7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('survey8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsSurveys7();




  window.sSwap8Genies = moment("2020-02-17");
  sSwap8Genies=moment(sSwap8Genies).format("YYYY-MM-DD");
 var urlGenies8Genies = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap8Genies+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";


    var responseGenie = responseGenie || [];  // this variable is used for storing list items
    function GetListItemsGenies(){

        moment.locale('fr');
        


        return $.ajax({
            url: urlGenies8Genies,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie = responseGenie.concat(data.d.results);
                if (data.d.__next) {
                    urlGenies8Genies = data.d.__next;
                    GetListItemsGenies();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseGenie, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                        
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');



                });
               
                ss1 = somme11;

              
               

                document.getElementById('GeniCivil1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsGenies();

  window.sSwap7Genies = moment().day(-34);
  sSwap7Genies=moment(sSwap7Genies).format("YYYY-MM-DD");

  

 var urlGenies7Genies = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap7Genies+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
     
    var responseGenie1 = responseGenie1 || [];  // this variable is used for storing list items
    function GetListItemsGenies1(){

        moment.locale('fr');
        

 
        return $.ajax({
            url: urlGenies7Genies,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie1 = responseGenie1.concat(data.d.results);
                if (data.d.__next) {
                    urlGenies7Genies = data.d.__next;
                    GetListItemsGenies1();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseGenie1, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('GeniCivil2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsGenies1();



  window.sSwap6Genies = moment().day(-28);
  sSwap6Genies=moment(sSwap6Genies).format("YYYY-MM-DD");

var urlGenies6Genies = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap6Genies+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
        
    var responseGenie2 = responseGenie2 || [];  // this variable is used for storing list items
    function GetListItemsGenies2(){

        moment.locale('fr');
        
     return $.ajax({
            url: urlGenies6Genies,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie2 = responseGenie2.concat(data.d.results);
                if (data.d.__next) {
                    urlGenies6Genies = data.d.__next;
                    GetListItemsGenies2();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseGenie2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   

                });
                ss3 = somme11;


                

                document.getElementById('GeniCivil3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsGenies2();

       
  window.sSwap5Genies = moment().day(-20); 
  sSwap5Genies=moment(sSwap5Genies).format("YYYY-MM-DD");

var urlGenies5Genies = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap5Genies+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";


    var responseGenie3 = responseGenie3 || [];  // this variable is used for storing list items
    function GetListItemsGenies3(){

        moment.locale('fr');

        return $.ajax({
            url: urlGenies5Genies,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie3 = responseGenie3.concat(data.d.results);
                if (data.d.__next) {
                    urlGenies5Genies = data.d.__next;
                    GetListItemsGenies3();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseGenie3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('GeniCivil4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsGenies3();



  window.sSwap4Genies = moment().day(-13);
  sSwap4Genies=moment(sSwap4Genies).format("YYYY-MM-DD");  
var urlGenies4Genies = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap4Genies+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";


    var responseGenie4 = responseGenie4 || [];  // this variable is used for storing list items
    function GetListItemsGenies4(){

        moment.locale('fr');
 

        return $.ajax({
            url: urlGenies4Genies,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie4 = responseGenie4.concat(data.d.results);
                if (data.d.__next) {
                    urlGenies4Genies = data.d.__next;
                    GetListItemsGenies4();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseGenie4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('GeniCivil5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsGenies4();



  window.sSwap3Genies = moment().day(-6);
  sSwap3Genies=moment(sSwap3Genies).format("YYYY-MM-DD");

var urlGenies3Genies = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap3Genies+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseGenie5 = responseGenie5 || [];  // this variable is used for storing list items
    function GetListItemsGenies5(){

        moment.locale('fr');
 


        return $.ajax({
            url: urlGenies3Genies,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie5 = responseGenie5.concat(data.d.results);
                if (data.d.__next) {
                    urlGenies3Genies = data.d.__next;
                    GetListItemsGenies5();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseGenie5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('GeniCivil6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsGenies5();


  window.sSwap2Genies = moment().day(1);
  sSwap2Genies=moment(sSwap2Genies).format("YYYY-MM-DD"); 



var urlGenies2Genies = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap2Genies+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";


    var responseGenie6 = responseGenie6 || [];  // this variable is used for storing list items
    function GetListItemsGenies6(){

        moment.locale('fr');

        return $.ajax({
            url: urlGenies2Genies,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie6 = responseGenie6.concat(data.d.results);
                if (data.d.__next) {
                    urlGenies2Genies = data.d.__next;
                    GetListItemsGenies6();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseGenie6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('GeniCivil7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsGenies6();

  window.sSwap1Genies = moment().day(8); 
  sSwap1Genies=moment(sSwap1Genies).format("YYYY-MM-DD"); 


  var urlGenies1Genies = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap1Genies+"' and TaskName eq 'Génie Civil' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

      

    var responseGenie7 = responseGenie7 || [];  // this variable is used for storing list items
    function GetListItemsGenies7(){

        moment.locale('fr');
       
  return $.ajax({
            url: urlGenies1Genies,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseGenie7 = responseGenie7.concat(data.d.results);
                if (data.d.__next) {
                    urlGenies1Genies = data.d.__next;
                    GetListItemsGenies7();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseGenie7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('GeniCivil8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsGenies7();





     
  window.sSwap8Installation = moment("2020-02-17");
  sSwap8Installation=moment(sSwap8Installation).format("YYYY-MM-DD");

 var urlInstallation8Installation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap8Installation+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseInstallationEquip = responseInstallationEquip || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip(){

        moment.locale('fr');
  
        return $.ajax({
            url: urlInstallation8Installation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip = responseInstallationEquip.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation8Installation = data.d.__next;
                    GetListItemsInstallationEquip();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseInstallationEquip, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
               
                ss1 = somme11;

              
               

                document.getElementById('install1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsInstallationEquip();

  window.sSwap7Installation = moment().day(-34);
  sSwap7Installation=moment(sSwap7Installation).format("YYYY-MM-DD");
 var urlInstallation7Installation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap7Installation+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
     
    var responseInstallationEquip1 = responseInstallationEquip1 || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip1(){

        moment.locale('fr');
        
   
        return $.ajax({
            url: urlInstallation7Installation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip1 = responseInstallationEquip1.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation7Installation = data.d.__next;
                    GetListItemsInstallationEquip1();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseInstallationEquip1, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('install2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsInstallationEquip1();



 window.sSwap6Installation = moment().day(-28);
  sSwap6Installation=moment(sSwap6Installation).format("YYYY-MM-DD");

var urlInstallation6Installation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap6Installation+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
 
    var responseInstallationEquip2 = responseInstallationEquip2 || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip2(){

        moment.locale('fr');
        
        return $.ajax({
            url: urlInstallation6Installation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip2 = responseInstallationEquip2.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation6Installation = data.d.__next;
                    GetListItemsInstallationEquip2();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseInstallationEquip2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                });
                ss3 = somme11;


                

                document.getElementById('install3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsInstallationEquip2();


window.sSwap5Installation = moment().day(-20); 
  sSwap5Installation=moment(sSwap5Installation).format("YYYY-MM-DD");

var urlInstallation5Installation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap5Installation+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseInstallationEquip3 = responseInstallationEquip3 || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip3(){

        moment.locale('fr');
       

  
        return $.ajax({
            url: urlInstallation5Installation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip3 = responseInstallationEquip3.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation5Installation = data.d.__next;
                    GetListItemsInstallationEquip3();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseInstallationEquip3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('install4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsInstallationEquip3();




      
  window.sSwap4Installation = moment().day(-13);
  sSwap4Installation=moment(sSwap4Installation).format("YYYY-MM-DD"); 


var urlInstallation4Installation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap4Installation+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseInstallationEquip4 = responseInstallationEquip4 || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip4(){

        moment.locale('fr');

        return $.ajax({
            url: urlInstallation4Installation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip4 = responseInstallationEquip4.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation4Installation = data.d.__next;
                    GetListItemsInstallationEquip4();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseInstallationEquip4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('install5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsInstallationEquip4();


 window.sSwap3Installation = moment().day(-6);
  sSwap3Installation=moment(sSwap3Installation).format("YYYY-MM-DD");


var urlInstallation3Installation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap3Installation+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseInstallationEquip5 = responseInstallationEquip5 || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip5(){

        moment.locale('fr');
       
        return $.ajax({
            url: urlInstallation3Installation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip5 = responseInstallationEquip5.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation3Installation = data.d.__next;
                    GetListItemsInstallationEquip5();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseInstallationEquip5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('install6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsInstallationEquip5();


  window.sSwap2Installation = moment().day(1);
  sSwap2Installation=moment(sSwap2Installation).format("YYYY-MM-DD"); 
var urlInstallation2Installation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap2Installation+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseInstallationEquip6 = responseInstallationEquip6 || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip6(){

        moment.locale('fr');
        
        return $.ajax({
            url: urlInstallation2Installation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip6 = responseInstallationEquip6.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation2Installation = data.d.__next;
                    GetListItemsInstallationEquip6();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseInstallationEquip6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('install7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsInstallationEquip6();


  window.sSwap1Installation = moment().day(8); 
  sSwap1Installation=moment(sSwap1Installation).format("YYYY-MM-DD"); 

  var urlInstallation1Installation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap1Installation+"' and TaskName eq 'Installation équipement' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseInstallationEquip7 = responseInstallationEquip7 || [];  // this variable is used for storing list items
    function GetListItemsInstallationEquip7(){

        moment.locale('fr');
       

        return $.ajax({
            url: urlInstallation1Installation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseInstallationEquip7 = responseInstallationEquip7.concat(data.d.results);
                if (data.d.__next) {
                    urlInstallation1Installation = data.d.__next;
                    GetListItemsInstallationEquip7();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseInstallationEquip7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                           var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('install8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsInstallationEquip7();

      
  window.sSwap8Autorisation = moment("2020-02-17");
  sSwap8Autorisation=moment(sSwap8Autorisation).format("YYYY-MM-DD");

 

 var urlAutorisation8Autorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap8Autorisation+"' and TaskName eq 'Autorisation' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";



   var responseAutorisation0 = responseAutorisation0 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation1(){

 

        moment.locale('fr');
  
 

        return $.ajax({
            url: urlAutorisation8Autorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation0 = responseAutorisation0.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation8Autorisation = data.d.__next;
                    GetListItemsAutorisation1();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation0, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation1').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation1();














  window.sSwap7Autorisation = moment().day(-34);
  sSwap7Autorisation=moment(sSwap7Autorisation).format("YYYY-MM-DD");

 var urlAutorisation7Autorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap7Autorisation+"' and TaskName eq 'Autorisation' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

 

   var responseAutorisation = responseAutorisation || [];  // this variable is used for storing list items
    function GetListItemsAutorisations(){

 

        moment.locale('fr');
     


        return $.ajax({
            url: urlAutorisation7Autorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation = responseAutorisation.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation7Autorisation = data.d.__next;
                    GetListItemsAutorisations();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation2').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisations();

















  window.sSwap6Autorisation = moment().day(-28);
  sSwap6Autorisation=moment(sSwap6Autorisation).format("YYYY-MM-DD");
 var urlAutorisation6Autorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap6Autorisation+"' and TaskName eq 'Autorisation' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

 var responseAutorisation2 = responseAutorisation2 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation2s(){

 

        moment.locale('fr');
  



        return $.ajax({
            url: urlAutorisation6Autorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation2 = responseAutorisation2.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation6Autorisation = data.d.__next;
                    GetListItemsAutorisation2s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation3').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation2s();












  window.sSwap5Autorisation = moment().day(-20); 
  sSwap5Autorisation=moment(sSwap5Autorisation).format("YYYY-MM-DD");

 var urlAutorisation5Autorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap5Autorisation+"' and TaskName eq 'Autorisation' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

 
   var responseAutorisation3 = responseAutorisation3 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation3s(){

 

        moment.locale('fr');
      


        return $.ajax({
            url: urlAutorisation5Autorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation3 = responseAutorisation3.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation5Autorisation = data.d.__next;
                    GetListItemsAutorisation3s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation4').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation3s();










 
  window.sSwap4Autorisation = moment().day(-13);
  sSwap4Autorisation=moment(sSwap4Autorisation).format("YYYY-MM-DD"); 

 var urlAutorisation4Autorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap4Autorisation+"' and TaskName eq 'Autorisation' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

 


   var responseAutorisation4 = responseAutorisation4 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation4s(){

 

        moment.locale('fr');


        return $.ajax({
            url: urlAutorisation4Autorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation4 = responseAutorisation4.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation4Autorisation = data.d.__next;
                    GetListItemsAutorisation4s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation5').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation4s();








 window.sSwap3Autorisation = moment().day(-6);
  sSwap3Autorisation=moment(sSwap3Autorisation).format("YYYY-MM-DD");

 var urlAutorisation3Autorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap3Autorisation+"' and TaskName eq 'Autorisation' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

   var responseAutorisation5 = responseAutorisation5 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation5s(){

 

        moment.locale('fr');

 
 

        return $.ajax({
            url: urlAutorisation3Autorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation5 = responseAutorisation5.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation3Autorisation = data.d.__next;
                    GetListItemsAutorisation5s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                           var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation6').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation5s();








  window.sSwap2Autorisation = moment().day(1);
  sSwap2Autorisation=moment(sSwap2Autorisation).format("YYYY-MM-DD"); 

 var urlAutorisation2Autorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap2Autorisation+"' and TaskName eq 'Autorisation' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

 


   var responseAutorisation6 = responseAutorisation6 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation6s(){

 

        moment.locale('fr');
      

        return $.ajax({
            url: urlAutorisation2Autorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation6 = responseAutorisation6.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation2Autorisation = data.d.__next;
                    GetListItemsAutorisation6s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                             var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation7').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation6s();








 window.sSwap1Autorisation = moment().day(8); 
  sSwap1Autorisation=moment(sSwap1Autorisation).format("YYYY-MM-DD");

 
 var urlAutorisation1Autorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap1Autorisation+"' and TaskName eq 'Autorisation' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

 

   var responseAutorisation7 = responseAutorisation7 || [];  // this variable is used for storing list items
    function GetListItemsAutorisation7s(){

 

        moment.locale('fr');
        


        return $.ajax({
            url: urlAutorisation1Autorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseAutorisation7 = responseAutorisation7.concat(data.d.results);
                if (data.d.__next) {
                    urlAutorisation1Autorisation = data.d.__next;
                    GetListItemsAutorisation7s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseAutorisation7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('Autorisation8').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsAutorisation7s();







  window.sSwap8Swap = moment("2020-02-17");
  sSwap8Swap=moment(sSwap8Swap).format("YYYY-MM-DD");

 

 var urlSwap8Swap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap8Swap+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

 

   var responseSwap0 = responseSwap0 || [];  // this variable is used for storing list items
    function GetListItemsSwap0s(){

 

        moment.locale('fr');



        return $.ajax({
            url: urlSwap8Swap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap0 = responseSwap0.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap8Swap = data.d.__next;
                    GetListItemsSwap0s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap0, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                           var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP1').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap0s();














      
  window.sSwap7Swap = moment().day(-34);
  sSwap7Swap=moment(sSwap7Swap).format("YYYY-MM-DD");

 var urlSwap7Swap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap7Swap+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
   var responseSwap = responseSwap || [];  // this variable is used for storing list items
    function GetListItemsSwaps(){

 

        moment.locale('fr');


        return $.ajax({
            url: urlSwap7Swap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap = responseSwap.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap7Swap = data.d.__next;
                    GetListItemsSwaps();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }

                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP2').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwaps();

















  window.sSwap6Swap = moment().day(-28);
  sSwap6Swap=moment(sSwap6Swap).format("YYYY-MM-DD");
var urlSwap6Swap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap6Swap+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
   var responseSwap2 = responseSwap2 || [];  // this variable is used for storing list items
    function GetListItemsSwap2s(){

 

        moment.locale('fr');
      

        return $.ajax({
            url: urlSwap6Swap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap2 = responseSwap2.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap6Swap = data.d.__next;
                    GetListItemsSwap2s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                               

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP3').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap2s();













  window.sSwap5Swap = moment().day(-20); 
  sSwap5Swap=moment(sSwap5Swap).format("YYYY-MM-DD");

 
 var urlSwap5Swap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap5Swap+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

 
   var responseSwap3 = responseSwap3 || [];  // this variable is used for storing list items
    function GetListItemsSwap3s(){
        moment.locale('fr');
     
        return $.ajax({
            url: urlSwap5Swap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap3 = responseSwap3.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap5Swap = data.d.__next;
                    GetListItemsSwap3s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP4').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap3s();











  window.sSwap4Swap = moment().day(-13);
  sSwap4Swap=moment(sSwap4Swap).format("YYYY-MM-DD"); 

 var urlSwap4Swap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap4Swap+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
    var responseSwap4 = responseSwap4 || [];  // this variable is used for storing list items
    function GetListItemsSwap4s(){

 

        moment.locale('fr');
   

        return $.ajax({
            url: urlSwap4Swap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap4 = responseSwap4.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap4Swap = data.d.__next;
                    GetListItemsSwap4s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP5').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap4s();









 
  window.sSwap3Swap = moment().day(-6);
  sSwap3Swap=moment(sSwap3Swap).format("YYYY-MM-DD");

 var urlSwap3Swap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap3Swap+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

 

   var responseSwap5 = responseSwap5 || [];  // this variable is used for storing list items
    function GetListItemsSwap5s(){

 

        moment.locale('fr');
  

        return $.ajax({
            url: urlSwap3Swap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap5 = responseSwap5.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap3Swap = data.d.__next;
                    GetListItemsSwap5s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                           var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP6').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap5s();







    
  window.sSwap2Swap = moment().day(1);
  sSwap2Swap=moment(sSwap2Swap).format("YYYY-MM-DD");

 
 var urlSwap2Swap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap2Swap+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

 


   var responseSwap6 = responseSwap6 || [];  // this variable is used for storing list items
    function GetListItemsSwap6s(){

 

        moment.locale('fr');


        return $.ajax({
            url: urlSwap2Swap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap6 = responseSwap6.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap2Swap = data.d.__next;
                    GetListItemsSwap6s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP7').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap6s();




 window.sSwap1Swap = moment().day(8); 
  sSwap1Swap=moment(sSwap1Swap).format("YYYY-MM-DD"); 

 var urlSwap1Swap = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap1Swap+"' and TaskName eq 'Basculement et monitoring' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

 
   var responseSwap7 = responseSwap7 || [];  // this variable is used for storing list items
    function GetListItemsSwap7s(){

 

        moment.locale('fr');
       
 

        return $.ajax({
            url: urlSwap1Swap,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseSwap7 = responseSwap7.concat(data.d.results);
                if (data.d.__next) {
                    urlSwap1Swap = data.d.__next;
                    GetListItemsSwap7s();
                }

 

                var somme11=0;
                var ss1 = 0;

 

                $.each(responseSwap7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

 


                });
               
                ss1 = somme11;

 

              
               

 

                document.getElementById('SWAP8').innerHTML =ss1;
                
  

 

            }
        });
      }
GetListItemsSwap7s();





 window.sSwap8Electr = moment("2020-02-17");
  sSwap8Electr=moment(sSwap8Electr).format("YYYY-MM-DD");

 var urlElectri8Electr = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap8Electr+"' and TaskName eq 'Electrification' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseElectr = responseElectr || [];  // this variable is used for storing list items
    function GetListItemsElectr(){

        moment.locale('fr');
      
 
        return $.ajax({
            url: urlElectri8Electr,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr = responseElectr.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri8Electr = data.d.__next;
                    GetListItemsElectr();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseElectr, function(key, value)  {
                    var nomProjets = value.ProjectName;
            
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
        


                });
               
                ss1 = somme11;
                console.log("La valeur de electrification est " +  ss1);
                document.getElementById('ValElelect1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsElectr();


  window.sSwap7Electr = moment().day(-34);
  sSwap7Electr=moment(sSwap7Electr).format("YYYY-MM-DD");

 var urlElectri7Electr = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap7Electr+"' and TaskName eq 'Electrification' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
   
    var responseElectr1 = responseElectr1 || [];  // this variable is used for storing list items
    function GetListItemsElectr1(){

        moment.locale('fr');
       
 
     
        return $.ajax({
            url: urlElectri7Electr,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr1 = responseElectr1.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri7Electr = data.d.__next;
                    GetListItemsElectr1();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseElectr1, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('ValElelect2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsElectr1();


window.sSwap6Electr = moment().day(-28);
  sSwap6Electr=moment(sSwap6Electr).format("YYYY-MM-DD");

var urlElectri6Electr = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap6Electr+"' and TaskName eq 'Electrification' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
       

    var responseElectr2 = responseElectr2 || [];  // this variable is used for storing list items
    function GetListItemsElectr2(){

        moment.locale('fr');
   
  
        return $.ajax({
            url: urlElectri6Electr,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr2 = responseElectr2.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri6Electr = data.d.__next;
                    GetListItemsElectr2();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseElectr2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                       var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('ValElelect3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsElectr2();


  window.sSwap5Electr = moment().day(-20); 
  sSwap5Electr=moment(sSwap5Electr).format("YYYY-MM-DD");


var urlElectri5Electr = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap5Electr+"' and TaskName eq 'Electrification' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
  
    var responseElectr3 = responseElectr3 || [];  // this variable is used for storing list items
    function GetListItemsElectr3(){

        moment.locale('fr');
  

      return $.ajax({
            url: urlElectri5Electr,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr3 = responseElectr3.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri5Electr = data.d.__next;
                    GetListItemsElectr3();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseElectr3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('ValElelect4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsElectr3();



     
  window.sSwap4Electr = moment().day(-13);
  sSwap4Electr=moment(sSwap4Electr).format("YYYY-MM-DD"); 

var urlElectri4Electr = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap4Electr+"' and TaskName eq 'Electrification' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";



    var responseElectr4 = responseElectr4 || [];  // this variable is used for storing list items
    function GetListItemsElectr4(){

        moment.locale('fr');
        return $.ajax({
            url: urlElectri4Electr,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr4 = responseElectr4.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri4Electr = data.d.__next;
                    GetListItemsElectr4();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseElectr4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('ValElelect5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsElectr4();



  window.sSwap3Electr = moment().day(-6);
  sSwap3Electr=moment(sSwap3Electr).format("YYYY-MM-DD");
var urlElectri3Electr = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap3Electr+"' and TaskName eq 'Electrification' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseElectr5 = responseElectr5 || [];  // this variable is used for storing list items
    function GetListItemsElectr5(){

        moment.locale('fr');
      


        return $.ajax({
            url: urlElectri3Electr,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr5 = responseElectr5.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri3Electr = data.d.__next;
                    GetListItemsElectr5();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseElectr5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('ValElelect6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsElectr5();


    window.sSwap2Electr = moment().day(1);
  sSwap2Electr=moment(sSwap2Electr).format("YYYY-MM-DD"); 
var urlElectri2Electr = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap2Electr+"' and TaskName eq 'Electrification' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

   
    var responseElectr6 = responseElectr6 || [];  // this variable is used for storing list items
    function GetListItemsElectr6(){

        moment.locale('fr');
     
       return $.ajax({
            url: urlElectri2Electr,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr6 = responseElectr6.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri2Electr = data.d.__next;
                    GetListItemsElectr6();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseElectr6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                            var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('ValElelect7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsElectr6();


window.sSwap1Electr = moment().day(8); 
  sSwap1Electr=moment(sSwap1Electr).format("YYYY-MM-DD"); 

  var urlElectri1Electr = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap1Electr+"' and TaskName eq 'Electrification' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseElectr7 = responseElectr7 || [];  // this variable is used for storing list items
    function GetListItemsElectr7(){

        moment.locale('fr');
        
  
        return $.ajax({
            url: urlElectri1Electr,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseElectr7 = responseElectr7.concat(data.d.results);
                if (data.d.__next) {
                    urlElectri1Electr = data.d.__next;
                    GetListItemsElectr7();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseElectr7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('ValElelect8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsElectr7();

   
  window.sSwap8ReceptSitei = moment("2020-02-17");
  sSwap8ReceptSitei=moment(sSwap8ReceptSitei).format("YYYY-MM-DD");

 var urlReceptSitei8ReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap8ReceptSitei+"' and TaskName eq 'Réception de site' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
        
     var responseReceptSite = responseReceptSite || [];  // this variable is used for storing list items
    function GetListItemsReceptSite(){

        moment.locale('fr');
    return $.ajax({
            url: urlReceptSitei8ReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite = responseReceptSite.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei8ReceptSitei = data.d.__next;
                    GetListItemsReceptSite();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseReceptSite, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('recptsite1').innerHTML =ss2;
  

            }
        });
      }
GetListItemsReceptSite();
       
  window.sSwap7ReceptSitei = moment().day(-34);
  sSwap7ReceptSitei=moment(sSwap7ReceptSitei).format("YYYY-MM-DD");
  var urlReceptSitei7ReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap7ReceptSitei+"' and TaskName eq 'Réception de site' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
     
    var responseReceptSite1 = responseReceptSite1 || [];  // this variable is used for storing list items
    function GetListItemsReceptSite1(){

        moment.locale('fr');
   
        return $.ajax({
            url: urlReceptSitei7ReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite1 = responseReceptSite1.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei7ReceptSitei = data.d.__next;
                    GetListItemsReceptSite1();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseReceptSite1, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('recptsite2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsReceptSite1();



      
  window.sSwap6ReceptSitei = moment().day(-28);
  sSwap6ReceptSitei=moment(sSwap6ReceptSitei).format("YYYY-MM-DD");

var urlReceptSitei6ReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap6ReceptSitei+"' and TaskName eq 'Réception de site' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
       
    var responseReceptSite2 = responseReceptSite2 || [];  // this variable is used for storing list items
    function GetListItemsReceptSite2(){

        moment.locale('fr');
 return $.ajax({
            url: urlReceptSitei6ReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite2 = responseReceptSite2.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei6ReceptSitei = data.d.__next;
                    GetListItemsReceptSite2();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseReceptSite2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   

                });
                ss3 = somme11;


                

                document.getElementById('recptsite3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsReceptSite2();


  window.sSwap5ReceptSitei = moment().day(-20); 
  sSwap5ReceptSitei=moment(sSwap5ReceptSitei).format("YYYY-MM-DD");
var urlReceptSitei5ReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap5ReceptSitei+"' and TaskName eq 'Réception de site' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
    var responseReceptSite3 = responseReceptSite3 || [];  // this variable is used for storing list items
    function GetListItemsReceptSite3(){

        moment.locale('fr');
       

        return $.ajax({
            url: urlReceptSitei5ReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite3 = responseReceptSite3.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei5ReceptSitei = data.d.__next;
                    GetListItemsReceptSite3();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseReceptSite3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('recptsite4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsReceptSite3();




  
  window.sSwap4ReceptSitei = moment().day(-13);
  sSwap4ReceptSitei=moment(sSwap4ReceptSitei).format("YYYY-MM-DD"); 

var urlReceptSitei4ReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap4ReceptSitei+"' and TaskName eq 'Réception de site' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

  
    var responseReceptSite4 = responseReceptSite4 || [];  // this variable is used for storing list items
    function GetListItemsReceptSite4(){

        moment.locale('fr');
       return $.ajax({
            url: urlReceptSitei4ReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite4 = responseReceptSite4.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei4ReceptSitei = data.d.__next;
                    GetListItemsReceptSite4();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseReceptSite4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                         var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('recptsite5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsReceptSite4();



 window.sSwap3ReceptSitei = moment().day(-6);
  sSwap3ReceptSitei=moment(sSwap3ReceptSitei).format("YYYY-MM-DD");
 
var urlReceptSitei3ReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap3ReceptSitei+"' and TaskName eq 'Réception de site' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
    var responseReceptSite5 = responseReceptSite5 || [];  // this variable is used for storing list items
    function GetListItemsReceptSite5(){

        moment.locale('fr');

        return $.ajax({
            url: urlReceptSitei3ReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite5 = responseReceptSite5.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei3ReceptSitei = data.d.__next;
                    GetListItemsReceptSite5();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseReceptSite5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('recptsite6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsReceptSite5();

  window.sSwap2ReceptSitei = moment().day(1);
  sSwap2ReceptSitei=moment(sSwap2ReceptSitei).format("YYYY-MM-DD"); 
var urlReceptSitei2ReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap2ReceptSitei+"' and TaskName eq 'Réception de site' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";


    var responseReceptSite6 = responseReceptSite6 || [];  // this variable is used for storing list items
    function GetListItemsReceptSite6(){

        moment.locale('fr');
      
        return $.ajax({
            url: urlReceptSitei2ReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite6 = responseReceptSite6.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei2ReceptSitei = data.d.__next;
                    GetListItemsReceptSite6();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseReceptSite6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                        var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('recptsite7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsReceptSite6();


  window.sSwap1ReceptSitei = moment().day(8); 
  sSwap1ReceptSitei=moment(sSwap1ReceptSitei).format("YYYY-MM-DD"); 

  var urlReceptSitei1ReceptSitei = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap1ReceptSitei+"' and TaskName eq 'Réception de site' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseReceptSite7 = responseReceptSite7 || [];  // this variable is used for storing list items
    function GetListItemsReceptSite7(){

        moment.locale('fr');
       

        return $.ajax({
            url: urlReceptSitei1ReceptSitei,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseReceptSite7 = responseReceptSite7.concat(data.d.results);
                if (data.d.__next) {
                    urlReceptSitei1ReceptSitei = data.d.__next;
                    GetListItemsReceptSite7();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseReceptSite7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                          var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }   
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('recptsite8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsReceptSite7();


  
  window.sSwap8TirageFO = moment("2020-02-17");
  sSwap8TirageFO=moment(sSwap8TirageFO).format("YYYY-MM-DD");

 var urlTirageFO8TirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap8TirageFO+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseTirageFO = responseTirageFO || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs(){

        moment.locale('fr');
    
        return $.ajax({
            url: urlTirageFO8TirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO = responseTirageFO.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO8TirageFO = data.d.__next;
                    GetListItemsTirageFOs();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseTirageFO, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }
                           
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
               
                ss1 = somme11;

              
               

                document.getElementById('TirageFO1').innerHTML =ss1;
                
  

            }
        });
      }
GetListItemsTirageFOs();
window.sSwap7TirageFO = moment().day(-34);
  sSwap7TirageFO=moment(sSwap7TirageFO).format("YYYY-MM-DD");

 var urlTirageFO7TirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap7TirageFO+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
     
    var responseTirageFO1 = responseTirageFO1 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs1(){

        moment.locale('fr');
    
        return $.ajax({
            url: urlTirageFO7TirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO1 = responseTirageFO1.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO7TirageFO = data.d.__next;
                    GetListItemsTirageFOs1();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseTirageFO1, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                                    var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('TirageFO2').innerHTML =ss2;
  

            }
        });
      }
GetListItemsTirageFOs1();



  window.sSwap6TirageFO = moment().day(-28);
  sSwap6TirageFO=moment(sSwap6TirageFO).format("YYYY-MM-DD");
var urlTirageFO6TirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap6TirageFO+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
        
    var responseTirageFO2 = responseTirageFO2 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs2(){

        moment.locale('fr');
   

        return $.ajax({
            url: urlTirageFO6TirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO2 = responseTirageFO2.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO6TirageFO = data.d.__next;
                    GetListItemsTirageFOs2();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseTirageFO2, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                    var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('TirageFO3').innerHTML =ss3;

  

            }
        });
      }
GetListItemsTirageFOs2();


      
  window.sSwap5TirageFO = moment().day(-20); 
  sSwap5TirageFO=moment(sSwap5TirageFO).format("YYYY-MM-DD");

var urlTirageFO5TirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap5TirageFO+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

     
    var responseTirageFO3 = responseTirageFO3 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs3(){

        moment.locale('fr');
   return $.ajax({
            url: urlTirageFO5TirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO3 = responseTirageFO3.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO5TirageFO = data.d.__next;
                    GetListItemsTirageFOs3();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseTirageFO3, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('TirageFO4').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsTirageFOs3();




  window.sSwap4TirageFO = moment().day(-13);
  sSwap4TirageFO=moment(sSwap4TirageFO).format("YYYY-MM-DD");  

var urlTirageFO4TirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap4TirageFO+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseTirageFO4 = responseTirageFO4 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs4(){

        moment.locale('fr');
        

        return $.ajax({
            url: urlTirageFO4TirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO4 = responseTirageFO4.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO4TirageFO = data.d.__next;
                    GetListItemsTirageFOs4();
                }

                var somme11=0;
                var ss1 = 0;

                $.each(responseTirageFO4, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                
                ss1 = somme11;

                
               

                document.getElementById('TirageFO5').innerHTML =ss1;
               
  

            }
        });
      }
GetListItemsTirageFOs4();



  window.sSwap3TirageFO = moment().day(-6);
  sSwap3TirageFO=moment(sSwap3TirageFO).format("YYYY-MM-DD");

var urlTirageFO3TirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap3TirageFO+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseTirageFO5 = responseTirageFO5 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs5(){

        moment.locale('fr');


        return $.ajax({
            url: urlTirageFO3TirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO5 = responseTirageFO5.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO3TirageFO = data.d.__next;
                    GetListItemsTirageFOs5();
                }

                var somme11=0;
                var ss2 = 0;

                $.each(responseTirageFO5, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                             var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        } 
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });
                ss2 = somme11;                

                document.getElementById('TirageFO6').innerHTML =ss2;
  

            }
        });
      }
GetListItemsTirageFOs5();


  window.sSwap2TirageFO = moment().day(1);
  sSwap2TirageFO=moment(sSwap2TirageFO).format("YYYY-MM-DD"); 
var urlTirageFO2TirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap2TirageFO+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseTirageFO6 = responseTirageFO6 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs6(){

        moment.locale('fr');

        return $.ajax({
            url: urlTirageFO2TirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO6 = responseTirageFO6.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO2TirageFO = data.d.__next;
                    GetListItemsTirageFOs6();
                }

                var somme11=0;
                var ss3 = 0;

                $.each(responseTirageFO6, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');

                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  

                });
                ss3 = somme11;


                

                document.getElementById('TirageFO7').innerHTML =ss3;

  

            }
        });
      }
GetListItemsTirageFOs6();


  window.sSwap1TirageFO = moment().day(8); 
  sSwap1TirageFO=moment(sSwap1TirageFO).format("YYYY-MM-DD"); 
 var urlTirageFO1TirageFO = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$inlinecount=allpages&$select=TaskPercentCompleted&$filter=TaskStartDate lt datetime'"+sSwap1TirageFO+"' and TaskName eq 'Tirage FO' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";

    var responseTirageFO7 = responseTirageFO7 || [];  // this variable is used for storing list items
    function GetListItemsTirageFOs7(){

        moment.locale('fr');
        

        return $.ajax({
            url: urlTirageFO1TirageFO,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseTirageFO7 = responseTirageFO7.concat(data.d.results);
                if (data.d.__next) {
                    urlTirageFO1TirageFO = data.d.__next;
                    GetListItemsTirageFOs7();
                }

                var somme11=0;
                var ss4 = 0;

                $.each(responseTirageFO7, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                              var percentComplete = value.TaskPercentCompleted;
                        if(percentComplete == "100")
                        {
                              somme11++;  
                        }  
                      
                    var task=value.TaskName;
                    var actualStartDate=value.TaskStartDate;
                    var prcComplete=value.TaskPercentWorkCompleted;
                    var debutTask2=moment(actualStartDate).format('L');


                });

                ss4 = somme11;

                document.getElementById('TirageFO8').innerHTML =ss4;

                
  

            }
        });
      }
GetListItemsTirageFOs7();




//---------------------------------------------------------POTS et VDSL -------------------------------------------------------------------------
  window.sSwap8VDSL8VDS = moment().day(-41);
  sSwap8VDSL8VDS=moment(sSwap8VDSL8VDS).format("YYYY-MM-DD");
 var urlVDSL8VDSL = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap8VDSL8VDS+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

var responseVDSL1 = responseVDSL1 || [];  // this variable is used for storing list items
    function GetListItemsVDSL1(){
        moment.locale('fr');
 var sommeVDSL=0;
                var VDSLSm = 0;
        return $.ajax({
            url: urlVDSL8VDSL,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL1 = responseVDSL1.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL8VDSL = data.d.__next;
                    GetListItemsVDSL1();
                }

 

                
            
 

                $.each(responseVDSL1, function(key, value)  {
              
                         var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        } 


                VDSLSm = sommeVDSL;

                });

                document.getElementById('VDSL1').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsVDSL1();


window.sSwap7VDSL7VDSL = moment().day(-34);
  sSwap7VDSL7VDSL=moment(sSwap7VDSL7VDSL).format("YYYY-MM-DD");

  var urlVDSL17VDSL = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap7VDSL7VDSL+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

 
var responseVDSL2 = responseVDSL2 || [];  // this variable is used for storing list items
    function GetListItemsVDSL2(){

 

        moment.locale('fr');

 var sommeVDSL=0;
                var VDSLSm = 0;

        return $.ajax({
            url: urlVDSL17VDSL,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL2 = responseVDSL2.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL17VDSL = data.d.__next;
                    GetListItemsVDSL2();
                }
                $.each(responseVDSL2, function(key, value)  {
                      var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        } 
                VDSLSm = sommeVDSL;

                });
               document.getElementById('VDSL2').innerHTML =VDSLSm;
                
  

 

            }
        });
      }
GetListItemsVDSL2();

 window.sSwap6VDSL6VDSL = moment().day(-28);
  sSwap6VDSL6VDSL=moment(sSwap6VDSL6VDSL).format("YYYY-MM-DD");

var urlVDSL6VDSL = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap6VDSL6VDSL+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

var responseVDSL3 = responseVDSL3 || [];  // this variable is used for storing list items
    function GetListItemsVDSL3(){
        moment.locale('fr');
  var sommeVDSL=0;
                var VDSLSm = 0;

          return $.ajax({
            url: urlVDSL6VDSL,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL3 = responseVDSL3.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL6VDSL = data.d.__next;
                    GetListItemsVDSL3();
                }
                $.each(responseVDSL3, function(key, value)  {
                      var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        } 
                      
                VDSLSm = sommeVDSL;

                });
               
                document.getElementById('VDSL3').innerHTML =VDSLSm;
            }
        });
      }
GetListItemsVDSL3();


 window.sSwap5VDSL5VDSL = moment().day(-20); 
  sSwap5VDSL5VDSL=moment(sSwap5VDSL5VDSL).format("YYYY-MM-DD");

var urlVDSL5VDSL = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap5VDSL5VDSL+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

var responseVDSL4 = responseVDSL4 || [];  // this variable is used for storing list items
    function GetListItemsVDSL4(){
     moment.locale('fr'); 
 var sommeVDSL=0;
  var VDSLSm = 0;
        return $.ajax({
            url: urlVDSL5VDSL,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL4 = responseVDSL4.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL5VDSL = data.d.__next;
                    GetListItemsVDSL4();
                }

                $.each(responseVDSL4, function(key, value)  {
                      var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        } 

                        VDSLSm = sommeVDSL;

                });

                document.getElementById('VDSL4').innerHTML =VDSLSm;
                
            }
        });
      }
GetListItemsVDSL4();

window.sSwap4VDSL4VDSL = moment().day(-13);
  sSwap4VDSL4VDSL=moment(sSwap4VDSL4VDSL).format("YYYY-MM-DD"); 

var urlVDSL4VDSL = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap4VDSL4VDSL+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

 
var responseVDSL5 = responseVDSL5 || [];  // this variable is used for storing list items
    function GetListItemsVDSL5(){

        moment.locale('fr');
  
 var sommeVDSL=0;
 var VDSLSm = 0;
        return $.ajax({
            url: urlVDSL4VDSL,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL5 = responseVDSL5.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL4VDSL = data.d.__next;
                    GetListItemsVDSL5();
                }

 

                
            
 

                $.each(responseVDSL5, function(key, value)  {
                      var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        } 

                VDSLSm = sommeVDSL;

                });

                document.getElementById('VDSL5').innerHTML =VDSLSm;
            }
        });
      }
GetListItemsVDSL5();



window.sSwap3VDSL3VDSL = moment().day(-6);
  sSwap3VDSL3VDSL=moment(sSwap3VDSL3VDSL).format("YYYY-MM-DD");

 var urlVDSL3VDSL = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap3VDSL3VDSL+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

var responseVDSL6 = responseVDSL6 || [];  // this variable is used for storing list items
    function GetListItemsVDSL6(){

 

        moment.locale('fr');

 var sommeVDSL=0;
                var VDSLSm = 0;


        return $.ajax({
            url: urlVDSL3VDSL,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL6 = responseVDSL6.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL3VDSL = data.d.__next;
                    GetListItemsVDSL6();
                }

 

                
            
 

                $.each(responseVDSL6, function(key, value)  {
                      var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        } 

                VDSLSm = sommeVDSL;

                });

                document.getElementById('VDSL6').innerHTML =VDSLSm;
            }
        });
      }
GetListItemsVDSL6();

window.sSwap2VDSL2VDSL = moment().day(1);
  sSwap2VDSL2VDSL=moment(sSwap2VDSL2VDSL).format("YYYY-MM-DD");

 var urlVDSL2VDSL = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap2VDSL2VDSL+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

var responseVDSL7 = responseVDSL7 || [];  // this variable is used for storing list items
    function GetListItemsVDSL7(){

 

        moment.locale('fr');
 

 var sommeVDSL=0;
                var VDSLSm = 0;

 

        return $.ajax({
            url: urlVDSL2VDSL,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL7 = responseVDSL7.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL2VDSL = data.d.__next;
                    GetListItemsVDSL7();
                }

                $.each(responseVDSL7, function(key, value)  {
                      var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        } 

                VDSLSm = sommeVDSL;

                });

                document.getElementById('VDSL7').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsVDSL7();




window.sSwap1VDSL1VDSL = moment().day(8); 
  sSwap1VDSL1VDSL=moment(sSwap1VDSL1VDSL).format("YYYY-MM-DD"); 
var urlVDSL1VDSL = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_VDSL&$filter=TaskStartDate lt datetime'"+sSwap1VDSL1VDSL+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";
var responseVDSL8 = responseVDSL8 || [];  // this variable is used for storing list items
    function GetListItemsVDSL8(){

 

        moment.locale('fr');

  

 var sommeVDSL=0;
                var VDSLSm = 0;

  
        return $.ajax({
            url: urlVDSL1VDSL,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responseVDSL8 = responseVDSL8.concat(data.d.results);
                if (data.d.__next) {
                    urlVDSL1VDSL = data.d.__next;
                    GetListItemsVDSL8();
                }
 

                $.each(responseVDSL8, function(key, value)  {
              
                            var work = parseInt(value.DCT_VDSL);
                        if(work != 0)
                        {
                              sommeVDSL = sommeVDSL + work;  
                        }   

                VDSLSm = sommeVDSL;

                });

                document.getElementById('VDSL8').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsVDSL8();


//POTS *****************************
window.sSwap8POTS8POTS = moment().day(-41);
  sSwap8POTS8POTS=moment(sSwap8POTS8POTS).format("YYYY-MM-DD");

var urlPOTS8POTS = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap8POTS8POTS+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

var responsePOTS1 = responsePOTS1 || [];  // this variable is used for storing list items
    function GetListItemsPOTS1(){

 

        moment.locale('fr');

 var sommePOTS=0;
                var VDSLSm = 0;
 

        return $.ajax({
            url: urlPOTS8POTS,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS1 = responsePOTS1.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS8POTS = data.d.__next;
                    GetListItemsPOTS1();
                }

                $.each(responsePOTS1, function(key, value)  {
                    var nomProjets = value.ProjectName;
               
                      var Identifiant = value.ProjectId;
                      
                            var percentComplete = value.TaskPercentCompleted;

                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   

                VDSLSm = sommePOTS;

                });

                document.getElementById('POTS1').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsPOTS1();


 window.sSwap7POTS7POTS = moment().day(-34);
  sSwap7POTS7POTS=moment(sSwap7POTS7POTS).format("YYYY-MM-DD");
 var urlPOTS7POTS = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap7POTS7POTS+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

var responsePOTS2 = responsePOTS2 || [];  // this variable is used for storing list items
    function GetListItemsPOTS2(){

 

        moment.locale('fr');

 
 var sommePOTS=0;
                var VDSLSm = 0;

 

        return $.ajax({
            url: urlPOTS7POTS,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS2 = responsePOTS2.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS7POTS = data.d.__next;
                    GetListItemsPOTS2();
                }

                $.each(responsePOTS2, function(key, value)  {


                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   
                      
 

                VDSLSm = sommePOTS;

                });

                document.getElementById('POTS2').innerHTML =VDSLSm;
            }
        });
      }
GetListItemsPOTS2();

window.sSwap6POTS6POTS = moment().day(-28);
  sSwap6POTS6POTS=moment(sSwap6POTS6POTS).format("YYYY-MM-DD");


  var urlPOTS6POTS = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap6POTS6POTS+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

var responsePOTS3 = responsePOTS3 || [];  // this variable is used for storing list items
    function GetListItemsPOTS3(){

 

        moment.locale('fr');

  

 var sommePOTS=0;
                var VDSLSm = 0;


        return $.ajax({
            url: urlPOTS6POTS,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS3 = responsePOTS3.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS6POTS = data.d.__next;
                    GetListItemsPOTS3();
                }

 

                
            
 

                $.each(responsePOTS3, function(key, value)  {

                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   

                VDSLSm = sommePOTS;

                });

                document.getElementById('POTS3').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsPOTS3();



  window.sSwap5POTS5POTS = moment().day(-20); 
  sSwap5POTS5POTS=moment(sSwap5POTS5POTS).format("YYYY-MM-DD");


  var urlPOTS5POTS = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap5POTS5POTS+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

var responsePOTS4 = responsePOTS4 || [];  // this variable is used for storing list items
    function GetListItemsPOTS4(){

 

        moment.locale('fr');
        //console.log(todayss2);
        //todayss=moment(todayss).format("YYYY-MM-DDThh:mm:ss");


 



 var sommePOTS=0;
                var VDSLSm = 0;


        return $.ajax({
            url: urlPOTS5POTS,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS4 = responsePOTS4.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS5POTS = data.d.__next;
                    GetListItemsPOTS4();
                }

                $.each(responsePOTS4, function(key, value)  {

                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   

 

                VDSLSm = sommePOTS;

                });

                document.getElementById('POTS4').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsPOTS4();


  window.sSwap4POTS4POTS = moment().day(-13);
  sSwap4POTS4POTS=moment(sSwap4POTS4POTS).format("YYYY-MM-DD"); 

 

  var urlPOTS4POTS = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap4POTS4POTS+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

var responsePOTS5 = responsePOTS5 || [];  // this variable is used for storing list items
    function GetListItemsPOTS5(){

 

        moment.locale('fr');



 var sommePOTS=0;
                var VDSLSm = 0;

 

        return $.ajax({
            url: urlPOTS4POTS,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS5 = responsePOTS5.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS4POTS = data.d.__next;
                    GetListItemsPOTS5();
                }

                $.each(responsePOTS5, function(key, value)  {

                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   

                VDSLSm = sommePOTS;

                });

                document.getElementById('POTS5').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsPOTS5();



  window.sSwap3POTS3POTS = moment().day(-6);
  sSwap3POTS3POTS=moment(sSwap3POTS3POTS).format("YYYY-MM-DD");


  var urlPOTS3POTS = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap3POTS3POTS+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

var responsePOTS6 = responsePOTS6 || [];  // this variable is used for storing list items
    function GetListItemsPOTS6(){

 

        moment.locale('fr');




 var sommePOTS=0;
                var VDSLSm = 0;

 

        return $.ajax({
            url: urlPOTS3POTS,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS6 = responsePOTS6.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS3POTS = data.d.__next;
                    GetListItemsPOTS6();
                }

                $.each(responsePOTS6, function(key, value)  {

                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   

                VDSLSm = sommePOTS;

                });

                document.getElementById('POTS6').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsPOTS6();

 window.sSwap2POTS2POTS = moment().day(1);
  sSwap2POTS2POTS=moment(sSwap2POTS2POTS).format("YYYY-MM-DD");


  var urlPOTS2POTS = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap2POTS2POTS+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

var responsePOTS7 = responsePOTS7 || [];  // this variable is used for storing list items
    function GetListItemsPOTS7(){

        moment.locale('fr');

 

 var sommePOTS=0;
                var VDSLSm = 0;

 

        return $.ajax({
            url: urlPOTS2POTS,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS7 = responsePOTS7.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS2POTS = data.d.__next;
                    GetListItemsPOTS7();
                }

                $.each(responsePOTS7, function(key, value)  {

                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   

 

                VDSLSm = sommePOTS;

                });
 

                document.getElementById('POTS7').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsPOTS7();



window.sSwap1POTS1POTS = moment().day(8); 
  sSwap1POTS1POTS=moment(sSwap1POTS1POTS).format("YYYY-MM-DD"); 


  var urlPOTS1POTS = _spPageContextInfo.webAbsoluteUrl + "/_api/projectdata/[en-US]/Tasks?$select=DCT_POTS&$filter=TaskStartDate lt datetime'"+sSwap1POTS1POTS+"' and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76' and TaskPercentCompleted eq 100 and TaskName eq 'Fin de Mise en place Shelter'";

 

var responsePOTS8 = responsePOTS8 || [];  // this variable is used for storing list items
    function GetListItemsPOTS8(){

 

        moment.locale('fr');
  


 var sommePOTS=0;
                var VDSLSm = 0;


        return $.ajax({
            url: urlPOTS1POTS,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePOTS8 = responsePOTS8.concat(data.d.results);
                if (data.d.__next) {
                    urlPOTS1POTS = data.d.__next;
                    GetListItemsPOTS8();
                }

                $.each(responsePOTS8, function(key, value)  {

                        if(value.DCT_POTS !=null)
                          {
                            var work = parseInt(value.DCT_POTS);
                              sommePOTS = sommePOTS + work;  
                          }else{
                            var work =0;
                          }   
                      

                VDSLSm = sommePOTS;

                });
               
                document.getElementById('POTS8').innerHTML =VDSLSm;

            }
        });
      }
GetListItemsPOTS8();


///***************************************************************************************************************************************************





//***********************************************************Function planifé réalisés*******************************************




var TaskBaselineSurvey="";
var ProjectBaselineId="";
var urlPlaniRealSurvey = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Survey%27 and ProjectId eq guid'2b8c6cc4-8581-eb11-a383-005056af8f76'";
var responsePlanRealSurvey= responsePlanRealSurvey || [];

function GetListItemsPlanRealSurvey(){
  window.nextWeekEnd = moment().day(0); 
        return $.ajax({
            url: urlPlaniRealSurvey,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealSurvey = responsePlanRealSurvey.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniReal = data.d.__next;
                    GetListItemsPlanRealSurvey();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealSurvey, function(key, value)  {

                

                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;




                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {


                      

                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                    var actualFinishDate=value.TaskActualFinishDate;
                    var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD');

                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                      
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }

                          if(percentComplete !="100")
                          {
                            SurveyInOutTime(Identifiant,idTask); 
                          }
                          else
                          {
                            document.getElementById('SurveyPlan').innerHTML = 0;
                          }
                     
                    }

                        
                          

                resultRealises =sommes1;
                //resultPlanife = sommes2;


                });

        //document.getElementById('SurveyPlan').innerHTML = resultPlanife;
        document.getElementById('SurveyRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealSurvey();

function SurveyInOutTime(Identifiant,idTask){
  
  window.nextWeekEnd = moment().day(0); 
 
   som=document.getElementById("SurveyPlan").innerHTML;

  
  $.ajax({url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                if(base =="0")
                {
                  som++;
                  console.log('Apres les valeurs window Task: ' + Tasknom);
                }
              }
          
              sommes=som;
            });
            
            document.getElementById("SurveyPlan").innerHTML = sommes;

          }
        });
  
}
SurveyInOutTime();
//********************************************************************************************************************************************


var urlPlaniRealAutorisation = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Autorisation%27";
var responsePlanRealAutorisation= responsePlanRealAutorisation || [];

function GetListItemsPlanRealAutorisation(){
  window.nextWeekEnd = moment().day(0);
        return $.ajax({
            url: urlPlaniRealAutorisation,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealAutorisation = responsePlanRealAutorisation.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealAutorisation = data.d.__next;
                    GetListItemsPlanRealAutorisation();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealAutorisation, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    

                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                    var actualFinishDate=value.TaskActualFinishDate;
                    var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD');  
                      
                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }

                          if(percentComplete !="100")
                          {
                            AutorisationInOutTime(Identifiant,idTask); 
                          }
                          else
                          {
                            document.getElementById('AutorisationPlan').innerHTML = 0;
                          }
                    }


                resultRealises =sommes1;
                //resultPlanife = sommes2;


                });

        //document.getElementById('AutorisationPlan').innerHTML = resultPlanife;
        document.getElementById('AutorisationRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealAutorisation();

function AutorisationInOutTime(Identifiant,idTask){
  
  window.nextWeekEndAutorisation = moment().day(0); 
 
   somAutorisation=document.getElementById("AutorisationPlan").innerHTML;

  
  $.ajax({url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEndAutorisation).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                if(base =="0")
                {
                  console.log('Apres les valeurs window Task: ' + Tasknom);
                  somAutorisation++;
                }
              }
          
              sommes=somAutorisation;
            });
            
            document.getElementById("AutorisationPlan").innerHTML = sommes;

          }
        });
  
}
AutorisationInOutTime();

//***************************************************************************************************************************



var urlPlaniRealGenieCivil = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Génie Civil%27";
var responsePlanRealGenieCivil= responsePlanRealGenieCivil || [];

function GetListItemsPlanRealGenieCivil(){
  window.nextWeekEnd = moment().day(0);
        return $.ajax({
            url: urlPlaniRealGenieCivil,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealGenieCivil = responsePlanRealGenieCivil.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealGenieCivil = data.d.__next;
                    GetListItemsPlanRealGenieCivil();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealGenieCivil, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                    var actualFinishDate=value.TaskActualFinishDate;
                    var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD');  
                      
                      sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }

                          /*if(percentComplete !="100")
                          {
                            GenieCivilInOutTime(Identifiant,idTask); 
                          }
                          else
                          {
                            document.getElementById('gCivilPlan').innerHTML = 0;
                          }*/
                    }


                resultRealises =sommes1;
                resultPlanife = sommes2-resultRealises;


                });

        document.getElementById('gCivilPlan').innerHTML = resultPlanife;
        document.getElementById('civilRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealGenieCivil();

/*
function GenieCivilInOutTime(Identifiant,idTask){
  
  window.nextWeekEndGenie = moment().day(0); 
 
   somGenie=document.getElementById("gCivilPlan").innerHTML;

  
  $.ajax({url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEndGenie).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                if(base =="0")
                {
                  console.log('Apres les valeurs window Task: ' + Tasknom);
                  somGenie++;
                }
              }
          
              sommes=somGenie;
            });
            
            document.getElementById("gCivilPlan").innerHTML = sommes;

          }
        });
  
}
GenieCivilInOutTime();
*/
//***********************************************************************************************************************


var urlPlaniRealElectrification = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Electrification%27";
var responsePlanRealElectrification= responsePlanRealElectrification || [];

function GetListItemsPlanRealElectrification(){
  window.nextWeekEnd = moment().day(0);
        return $.ajax({
            url: urlPlaniRealElectrification,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealElectrification = responsePlanRealElectrification.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealElectrification = data.d.__next;
                    GetListItemsPlanRealElectrification();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealElectrification, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    
                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      sommes3++;
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                      var actualFinishDate=value.TaskActualFinishDate;
                      var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD'); 
                      
                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }

                          
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('ElectrificatioPlan').innerHTML = resultPlanife;
        document.getElementById('ElectrificationRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealElectrification();

/*function ElectrificatioPlanInOutTime(Identifiant,idTask){
  
  window.nextWeekEndElectrification = moment().day(0); 
 
   somElectrification=document.getElementById("ElectrificatioPlan").innerHTML;

  
  $.ajax({url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEndElectrification).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                if(base == "0")
                {
                  console.log('Apres les valeurs window Task: ' + Tasknom);
                  somElectrification++;
                }
              }
          
              sommes=somElectrification;
            });
            
            document.getElementById("ElectrificatioPlan").innerHTML = sommes;

          }
        });
  
}
ElectrificatioPlanInOutTime();*/
//****************************************************************************************************************



var urlPlaniRealTirage = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=startswith(TaskName,'tirage fo')";
var responsePlanRealTirage= responsePlanRealTirage || [];

function GetListItemsPlanRealTirage(){
  window.nextWeekEnd = moment().day(0);
        return $.ajax({
            url: urlPlaniRealTirage,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealTirage = responsePlanRealTirage.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealTirage = data.d.__next;
                    GetListItemsPlanRealTirage();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealTirage, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      sommes3++
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                      var actualFinishDate=value.TaskActualFinishDate;
                      var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD'); 

                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }

                          
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('TirageFoPlan').innerHTML = resultPlanife;
        document.getElementById('TirageRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealTirage();

/*function TiragePlanInOutTime(Identifiant,idTask){
  
  window.nextWeekEndTirage = moment().day(0); 
 
   somTirageFO=document.getElementById("TirageFoPlan").innerHTML;

  
  $.ajax({url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEndTirage).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                if(base =="0")
                {
                  console.log('Apres les valeurs window Task: ' + Tasknom);
                  somTirageFO++;
                }
              }
          
              sommes=somTirageFO;
            });
            
            document.getElementById("TirageFoPlan").innerHTML = sommes;

          }
        });
  
}
TiragePlanInOutTime();*/
//****************************************************************************************************************

var urlPlaniRealInstall = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Installation%20équipement%27";
var responsePlanRealInstall= responsePlanRealInstall || [];

function GetListItemsPlanRealInstall(){
  window.nextWeekEnd = moment().day(0);
        return $.ajax({
            url: urlPlaniRealInstall,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealInstall = responsePlanRealInstall.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealInstall = data.d.__next;
                    GetListItemsPlanRealInstall();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealInstall, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;

                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                      sommes3++;
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                      var actualFinishDate=value.TaskActualFinishDate;
                      var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD'); 

                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }

                        

                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('InstallationPlannif').innerHTML = resultPlanife;
        document.getElementById('InstallationRealiser').innerHTML = resultRealises ;
        
            }
        });
      }

GetListItemsPlanRealInstall();


/*
function InstallationPlanInOutTime(Identifiant,idTask){
  
  window.nextWeekEnd = moment().day(0); 
 
   som=document.getElementById("InstallationPlannif").innerHTML;

  
  $.ajax({url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines",   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                
                if(base == "0")
                {
                  console.log('Apres les valeurs window Task: ' + Tasknom);
                  som++;
                }
              }
          
              sommes=som;
            });
            
            document.getElementById("InstallationPlannif").innerHTML = sommes;

          }
        });
  
}
InstallationPlanInOutTime();*/

//****************************************************************************************************************





var responsePlanRealReception= responsePlanRealReception || [];
var urlPlaniRealReception = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Réception de site%27";

function GetListItemsPlanRealReception(){
  window.nextWeekEnd = moment().day(0);
        return $.ajax({
            url: urlPlaniRealReception,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealReception = responsePlanRealReception.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealReception = data.d.__next;
                    GetListItemsPlanRealReception();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealReception, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                    var actualFinishDate=value.TaskActualFinishDate;
                    //getTaskDates(idTask,debutProjRéel,finProjRéel);
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
                    //console.log("earlyFinishDare: "+earlyFinishDare);

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      
                      sommes3++;
                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                      var actualFinishDate=value.TaskActualFinishDate;
                      var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD'); 

                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }
                          

                          
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('ReceptionPlan').innerHTML = resultPlanife;
        document.getElementById('ReceptionRealiser').innerHTML = resultRealises ;
        
            }
        });
      }
GetListItemsPlanRealReception();

/*
function ReceptionPlanInOutTime(Identifiant,idTask){
  
 
  window.nextWeekEndRec = moment().day(0); 
   somReception=document.getElementById("ReceptionPlan").innerHTML;

  
  $.ajax({url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/%5Ben-US%5D/Tasks(ProjectId=guid'"+Identifiant+"',TaskId=guid'"+idTask+"')/Baselines?$select=TaskBaselineFinishDate,TaskName,BaselineNumber",                       
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    var dataResults = data.d.results;
                          var listItemInfo2 = "";
                          var sommes=0;            
            $.each(dataResults, function(key, value) 
            {
              moment.locale('fr'); 
              var baseStartDate=value.TaskBaselineStartDate;
              var Tasknom = value.TaskName;
              var base = value.BaselineNumber;
              var baselineStartDate=moment(baseStartDate).format('L');


              var mmEnd = moment(window.nextWeekEndRec).format('YYYY-MM-DD');
              var baseFiniDate=value.TaskBaselineFinishDate;
              var baselineFinishDate=moment(baseFiniDate).format('YYYY-MM-DD');

              if(moment(baselineFinishDate).isSameOrBefore(mmEnd))
              {
                if(base == "0")
                {
                  console.log('Apres les valeurs window Task: ' + Tasknom);
                  somReception++;
                }
              }
              else if((base !="0")||(base !="1") &&(moment(baselineFinishDate).isSameOrBefore(mmEnd)))
              {
                somReception++;
              }
          
              sommes=somReception;
            });
            
            document.getElementById("ReceptionPlan").innerHTML = sommes;

          }
        });
  
}
ReceptionPlanInOutTime();*/
//****************************************************************************************************************



var responsePlanRealBasculement= responsePlanRealBasculement || [];
var urlPlaniRealBasculement = _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectName,TaskName,ProjectId,TaskId,TaskPercentCompleted,TaskLateFinish,TaskFinishDate,TaskActualFinishDate&$filter=TaskName%20eq%20%27Basculement et monitoring%27";

function GetListItemsPlanRealBasculement(){
  window.nextWeekEnd = moment().day(0);
        return $.ajax({
            url: urlPlaniRealBasculement,  
            method: "GET",  
            headers: {  
                "Accept": "application/json; odata=verbose"  
            },
            success: function(data){
                responsePlanRealBasculement = responsePlanRealBasculement.concat(data.d.results);
                if (data.d.__next) {
                    urlPlaniRealBasculement = data.d.__next;
                    GetListItemsPlanRealBasculement();
                }
                var resultat=0;
                  var sommes=0;
                  var sommes1=0;
                  var sommes2=0;
                  var sommes3=0;

                  var resultPlanife = 0;
                  var resultRealises = 0;





                $.each(responsePlanRealBasculement, function(key, value)  {
                    var nomProjets = value.ProjectName;
                      var arrayCustomerID = value.TaskName;
                      var Identifiant = value.ProjectId;

                    var count = value.__count; 
                  
                   
                    moment.locale('fr');
                    //var actualFinishDate=value.TaskActualFinishDate;
                    var idTask=value.TaskId;
                    var finProjRéel;
                    var debutProjRéel;
                 
                    var earlyFinish=value.TaskEarlyFinish;
                    earlyFinishDare=moment(earlyFinish).format('L');
     

                    var lateFinish=value.TaskLateFinish;
                    lateFinishDate=moment(lateFinish).format('L');
                      

                   if(Identifiant == "2b8c6cc4-8581-eb11-a383-005056af8f76")
                    {
                      sommes3++

                      var mmEnd = moment(window.nextWeekEnd).format('YYYY-MM-DD');
                      var actualFinishDate=value.TaskActualFinishDate;
                      var actualfinishdateCompare = moment(actualFinishDate).format('YYYY-MM-DD'); 

                      //sommes2++;

                      var percentComplete = value.TaskPercentCompleted;
                          
                           
                          if(percentComplete =="100")
                          {
                            if(moment(actualfinishdateCompare).isSameOrBefore(mmEnd))
                            {
                              sommes1++;
                            }
                          }
                          
                    }


                resultRealises =sommes1;
                resultPlanife = sommes3-resultRealises;


                });

        document.getElementById('BasculementPlan').innerHTML = resultPlanife;
        document.getElementById('BasculementRealiser').innerHTML = resultRealises;
        
            }
        });
      }
GetListItemsPlanRealBasculement();




setTimeout(filterIssuesBarchart,15000);
setTimeout(loadEvolutionParSemaine,21000);
setTimeout(loadEvolutionParSemaineInverse,22000);

}





}

































