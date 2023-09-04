
  function sortDataTimeLine(dateA,dataSet){
  var changed;
    moment.locale('fr');
    do{
        changed = false;
        for(var i=0; i < dateA.length-1; i++) {
            if(moment(dateA[i]).format("YYYY-MM-DD HH:mm:ss") > moment(dateA[i+1]).format("YYYY-MM-DD HH:mm:ss")) {
                var tmp = dateA[i];
                dateA[i] = dateA[i+1];
                dateA[i+1] = tmp;

                var tmp1 = dataSet[i];
                dataSet[i] = dataSet[i+1];
                dataSet[i+1] = tmp1;

                changed = true;
            }
        }
    } while(changed);
}

    function conToMill(num) {
if (num==0)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2))  : Math.sign(num)*Math.abs(num)
}
if (num<1000000 && num>999)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(2)) + 'K' : Math.sign(num)*Math.abs(num)
}
if (num<-999 && num>-1000000)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(2)) + 'K' : Math.sign(num)*Math.abs(num)
}
if (num<0 && num>-1000)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2)) : Math.sign(num)*Math.abs(num)
}
if (num>0 && num<1000)
{
     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1).toFixed(2)) : Math.sign(num)*Math.abs(num)
}
if (num>999999)
{
     return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(2)) + 'M' : Math.sign(num)*Math.abs(num)
}
if (num<-999999)
{
     return Math.abs(num) > 999999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(2)) + 'M' : Math.sign(num)*Math.abs(num)
}

}


function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}

function MainFilterChantier(){
var idChantier = document.getElementById("mylist1").value;
  if (idChantier=="chantier") {
    $("#detail-generale0").css("display", "block");  
    $("#detail-generale1").css("display", "block");
    $("#detail-generale2").css("display", "block");
    $("#labelHeader").css("display", "none");
    document.getElementById("nomChantier").innerHTML="Plan stratégique TT 2018-2023";
    $("#chantier-details1").css("display", "none");
    $("#chantier-details2").css("display", "none");
    //$("#chantier-details3").css("display", "none");
    $("#chantier-details4").css("display", "none");
     $("#chantier-details5").css("display", "none")
    $("#programme-details1").css("display", "none");
    $("#programme-details2").css("display", "none");
    $("#programme-details3").css("display", "none");
    $("#programme-details4").css("display", "none");
    $("#programme-details5").css("display", "none")
  }else{
    $("#labelHeader").css("display", "block");
     
     var progSelctedName=getSelectedText("mylist1");

     var filtreIdChantier = document.getElementById("mylist1").value;
   


$("#detail-generale0").css("display", "none");  
$("#detail-generale1").css("display", "none");  
$("#detail-generale2").css("display", "none");  
;  
$("#chantier-details1").css("display", "block");
$("#chantier-details2").css("display", "block");
//$("#chantier-details3").css("display", "block");
$("#chantier-details4").css("display", "block");
$("#chantier-details5").css("display", "block");
$("#programme-details1").css("display", "none");
$("#programme-details2").css("display", "none");
$("#programme-details3").css("display", "none");
$("#programme-details4").css("display", "none");
$("#programme-details5").css("display", "none");

$('#mylist2').empty();
$('#mylist2').append('<option value="" selected disabled>Sous programme</option>');





var responseKPI = responseKPI ||[];
var urlKPI = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectDuration,ProjectBudgetCost,ProjectStartDate,ProjectFinishDate,ProjectPercentCompleted,ProjectOwnerName,Programme,Sous_Programme&$filter=Programme%20eq%27"+progSelctedName+"%27";
console.log("urlKPI= "+urlKPI);
  
function filterKPI(){
    $.ajax({url:  urlKPI,          
            method: "GET",
            dataType: "json",
            headers: {Accept: "application/json;odata=verbose"},       
            success: function(data) {     
            responseKPI = responseKPI.concat(data.d.results);
            if (data.d.__next) {
                urlKPI = data.d.__next;
                filterKPI();
            }  

    moment.locale('fr');
    var arrayDeb=[];
    var arrayFin=[];
    var countProj=0;
    var budgSum=0;
    var minStart;
    var dureeProj;
    var achSum=0;
    var arraysponsor=[];
    var arraydirection=[];
    var nbProgramme=0;
    var arrProg=[];
    var arrayDir = [];
    var arrayDir1=[];
    var arrayDiff=[];
    var sumDiff=0;
    var avgDiff=0;
    var arrSousProg=[]; 
    var nbProj=0;
    var nomProg="";
    $.each(responseKPI, function(key, value) 
    {   
      countProj++;
      var sousProg=value.Sous_Programme;
      if (sousProg!=null&&arrSousProg.indexOf(sousProg)<0) {
        arrSousProg.push(sousProg);
        
      }
      nomProg=value.Programme;
      var achevement=value.ProjectPercentCompleted;
      console.log("achevement= "+achevement);
      achSum+=parseInt(achevement);
      nbProj++;
      moment.locale('fr');
      projStartDate=value.ProjectStartDate;
      var debProj = moment(projStartDate);
      projfinshtDate=value.ProjectFinishDate;
      var finProj = moment(projfinshtDate);
      arrayDeb.push(debProj);
      arrayFin.push(finProj);
      var difPro=parseFloat(value.ProjectDuration/8);
      arrayDiff.push(difPro);
      

                                
      
              
    });
    minStart=moment(arrayDeb[0]);
      maxEnd=moment(arrayFin[0]);
    for (var j = 1; j < arrayFin.length ; j++) {
                                  
        //arrayDeb[i]
                                
        if (moment(maxEnd).isBefore(arrayFin[j])) {
          maxEnd=arrayFin[j];
        }
        if (moment(arrayDeb[j]).isBefore(minStart)) {
          minStart=arrayDeb[j];
        }
      }
      for (var j = 1; j < arrayDiff.length ; j++) {
        sumDiff+=parseInt(arrayDiff[j]);
      }
      avgDiff=parseFloat(moment(maxEnd).diff(moment(minStart), 'days', true)).toFixed(0);
      var debutProg=moment(minStart);
      var finProg=moment(maxEnd);
      var StartProg=moment(debutProg).format('DD/MM/YYYY');
      var FinishProg=moment(finProg).format('DD/MM/YYYY');
      nbSousProgramme=arrSousProg.length; 
      var achevementPer=0;
      if (countProj!=0) {
        achevementPer=parseInt(achSum/countProj);
      }
      
      document.getElementById("debutChantier").innerHTML=StartProg;
      document.getElementById("finChantier").innerHTML=FinishProg;
      document.getElementById("dureeChantier").innerHTML=avgDiff;
      document.getElementById("programCount").innerHTML=nbSousProgramme;
      document.getElementById("projCount11").innerHTML=countProj;
      document.getElementById("progName1").innerHTML=nomProg;
      document.getElementById("labelHeader").innerHTML="Programme : "; 
      document.getElementById("nomChantier").innerHTML=nomProg; 
       document.getElementById("achevementChantier").innerHTML="<p>"+achevementPer+"%<progress id='' max='100' value='"+achevementPer+"' style='width: 75%; background-color:green; height:10px;'></progress></p>";
  }
});
}
filterKPI();

var urlDateBaseGlissementFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]//ProjectBaselines?$select=ProjectId,ProjectBaselineFinishDate";
var responseBaseDateGlissementFilter = responseBaseDateGlissementFilter ||[];
function calculGlissementGlobalFilter(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG){
   $.ajax({url:  urlDateBaseGlissementFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseBaseDateGlissementFilter = responseBaseDateGlissementFilter.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDateBaseGlissementFilter = data.d.__next;
                                            calculGlissementGlobalFilter(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG);
                                        } 
                                        var durReel=[];
                                        var durRef=[];
                                        var glissArray=[];
                                        var avgGliss=0;
                                        var sumGliss=0;
                  
              
            $.each(responseBaseDateGlissementFilter, function(key, value) 
            { 
              var idProjBaseline=value.ProjectId;
              var finRefProj=value.ProjectBaselineFinishDate;
              for (var i =0; i<idProjetG.length; i++) {
                if (idProjBaseline==idProjetG[i]) {
                  dateFinRefG[i]=finRefProj;
                }
                //idProjetG[i]
              }

            });
             moment.locale('fr');
            

            
            
            for (var i = 0; i <dateFinRefG.length; i++) {
              if(dateFinRefG[i]!=""){
                var refFinish=moment(dateFinRefG[i]);
                var dateFin=moment(dateFinProjetG[i]);
                var daetDeb=moment(dateDebProjetG[i]);
                var realDuration=dateFin.diff(daetDeb,'days');
                var baseDuration=refFinish.diff(daetDeb,'days');
                var gliss=0;
                gliss=parseFloat(((realDuration-baseDuration)/realDuration)*100);
                if (gliss<0) {
                  gliss=0;
                }
                ////console.log("gliss= "+gliss);
                glissArray.push(gliss);
              }
            }
            ////console.log("glissArray= "+glissArray.join());
            for (var i = 0; i < glissArray.length; i++) {
              sumGliss+=parseFloat(glissArray[i])
            }
            ////console.log("sumGliss= "+ sumGliss);
            avgGliss=parseFloat(sumGliss/glissArray.length).toFixed(0);
            if(isNaN(avgGliss))
            {
              avgGliss=0;
            }
            ////console.log("avgGliss= "+avgGliss);
            document.getElementById("GlissementChantier").innerHTML=avgGliss+"%";
}           
});
}


var urlDateGlissementFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectStartDate,ProjectFinishDate&$filter=Programme%20eq%27"+progSelctedName+"%27";
var responseDateGlissementFilter = responseDateGlissementFilter ||[];

function getDateGlissementFilter(){
  $.ajax({url:  urlDateGlissementFilter,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseDateGlissementFilter = responseDateGlissementFilter.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDateGlissementFilter = data.d.__next;
                                            getDateGlissementFilter();
                                        } 
                var idProjetG=[];
                var dateDebProjetG=[];
                var dateFinProjetG=[];
                var dateFinRefG=[];
                  
            $.each(responseDateGlissementFilter, function(key, value) 
            { 
              
             
                var idP=value.ProjectId;
               var projStartDate=value.ProjectStartDate;
               var projfinshtDate=value.ProjectFinishDate;
               if (idProjetG.indexOf(idP)==-1) {
                idProjetG.push(idP);
                dateDebProjetG.push(projStartDate);
                dateFinProjetG.push(projfinshtDate);
                dateFinRefG.push("");
               }
              
               

            });
calculGlissementGlobalFilter(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG);


}   
});
}
getDateGlissementFilter();








  

//*********************************linetme*******************************

var responseTimeline = responseTimeline ||[];
var urlTimeline = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme,ProjectName,ProjectStartDate,Sous_Programme,ProjectFinishDate,ProjectOwnerName&$filter=Programme%20eq%27"+progSelctedName+"%27";
   function loadTimeLine(){

          $.ajax({url:  urlTimeline,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseTimeline = responseTimeline.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlTimeline = data.d.__next;
                                            loadTimeLine();
                                        }
                          var dureeProg;
                                                  
                          var datas=[];
                          var startArr=[];
            $.each(responseTimeline, function(key, value) 
            {
              moment.locale('fr');
               var nomProj=value.ProjectName;
               var dateDeb=value.ProjectStartDate;
             
               ////////console.log(dateDeb);
               var projStartDate = moment(dateDeb).format('L');
               var dateFin=value.ProjectFinishDate;
               var projFinishtDate = moment(dateFin).format('L');
               var projStartDate1 = moment(dateDeb);
               var projFinishtDate1 = moment(dateFin);
               var owner=value.ProjectOwnerName;
               var desc='Date début projet : '+projStartDate;

              var dureeProj = parseFloat(moment(projFinishtDate1).diff(moment(projStartDate1), 'days', true)).toFixed(0);
              var nomProj="<tspan style='fill:#00FF00'>● </tspan><strong>Projet : "+value.ProjectName+"</strong><br>Durée (j) : "+dureeProj;
              datas.push({
                label: nomProj,
                name: desc,
                description: owner
               });
              startArr.push(moment(dateDeb));


               
               
            });

            sortDataTimeLine(startArr,datas);
            Highcharts.chart('container', {
    chart: {
        type: 'timeline'
    },
    accessibility: {
        screenReaderSection: {
            beforeChartFormat: '<h5>{chartTitle}</h5>' +
                '<div>{typeDescription}</div>' +
                '<div><h2>{chartSubtitle}</h2></div>' +
                '<div>{chartLongdesc}</div>' +
                '<div>{viewTableButton}</div>'
        },
        point: {
            valueDescriptionFormat: '{index}. {point.label}. {point.description}.'
        }
    },
    xAxis: {
        
         visible: false,
         type: 'datetime'
         
          /*dateTimeLabelFormats: {
            
            year: '%Y'
        },*/
    },
    yAxis: {
        visible: false
    },
    title: {
        text: ''+progSelctedName+''
    },
    subtitle: {
        text: ''
    },
    colors: [
        '#4185F3',
        '#427CDD',
        '#406AB2',
        '#3E5A8E',
        '#3B4A68',
        '#363C46'
    ],
    series: [{
        data: datas
    }]
});
              
       }
  });
   }  
loadTimeLine();
///********************load tab



var responseProg = responseProg ||[];
var urlProg = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Sous_Programme,ProjectId&$filter=Programme%20eq%27"+progSelctedName+"%27";


function loadProg(){
     tableaux = document.getElementById("tableaux");
     tr1 = tableaux.getElementsByTagName("tr");
     if(tr1.length>0){         
          $('#tableaux tbody').empty();
     }
  $.ajax({url:  urlProg,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseProg = responseProg.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlProg = data.d.__next;
                                            loadProg();
                                        }  
              var dataresult=[];
            $.each(responseProg, function(key, value){
              
                                var sousProg = value.Sous_Programme;  
                  
                
                  $('#mylist2').append($('<option>',
                           {
                              text : sousProg,
                              value : sousProg
                            })); 

                            var opt = {};
                              $("#mylist2 > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            });             
                                      });

           
          }
        });

}

loadProg();



// var urlNbrResourceFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectOwnerName&$filter=Chantier%20eq%27"+chanSelctedName+"%27";
// var responseNbrResourceFilter = responseNbrResourceFilter ||[];

// function LoadNumberResourceFilter()
// {
//   $.ajax({url:  urlNbrResourceFilter,          
//                                     method: "GET",
//                                     dataType: "json",
//                                     headers: {Accept: "application/json;odata=verbose"},       
//                                     success: function(data) {     
//                                     responseNbrResourceFilter = responseNbrResourceFilter.concat(data.d.results);
//                                         if (data.d.__next) {
//                                             urlNbrResourceFilter = data.d.__next;
//                                             LoadNumberResourceFilter();
//                                         } 
//                   var nomResource="";
//                   var uniq="";
//                   var TabRess = [];
                  
//             $.each(responseNbrResourceFilter, function(key, value) 
//             { 
//                nomResource = value.ProjectOwnerName;
//                if((nomResource !=null)&&(TabRess.indexOf(nomResource)==-1))
//                {
//                 TabRess.push(nomResource);
//                }



              


//             });

            

            

//             document.getElementById('RessourceChantier').innerHTML = TabRess.length;



// }   
// });

// }
// LoadNumberResourceFilter();











}






}













              
              











