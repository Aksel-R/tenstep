
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
  
    $("#chantier-details1").css("display", "none");
    $("#chantier-details2").css("display", "none");
    $("#chantier-details3").css("display", "none");
    $("#chantier-details4").css("display", "none");
    $("#chantier-details5").css("display", "none");
    $("#programme-details1").css("display", "none");
    $("#programme-details2").css("display", "none");
    $("#programme-details3").css("display", "none");
    $("#programme-details4").css("display", "none");
    $("#programme-details5").css("display", "none");
   
  }else{
     
     var chanSelctedName=getSelectedText("mylist1");
$("#detail-generale0").css("display", "none");  
$("#detail-generale1").css("display", "none");  
$("#detail-generale2").css("display", "none");  
$("#chantier-details1").css("display", "block");
$("#chantier-details2").css("display", "block");
$("#chantier-details3").css("display", "block");
$("#chantier-details4").css("display", "block");
$("#chantier-details5").css("display", "block");
$("#programme-details1").css("display", "none");
$("#programme-details2").css("display", "none");
$("#programme-details3").css("display", "none");
$("#programme-details4").css("display", "none");
$("#programme-details5").css("display", "none");

$('#mylist2').empty();
$('#mylist2').append('<option value="programme" selected >programme</option>');
   // ////console.log("idChantier= "+idChantier);
    
   // ////console.log("chanSelctedName= "+chanSelctedName);



  var responseKPI = responseKPI ||[];
  var urlKPI = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=Servicesduprojet%20eq%27"+chanSelctedName+"%27";
     
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
                                        var owner="";
                                        
                          var arrayDeb=[];
                          var arrayFin=[];
                          var countProgramme=0;
                          var budgSum=0;
                          var minStart;
                          var dureeProj;
                          var achSum=0;
                          var arraysponsor=[];
                          var arraydirection=[];
                          moment.locale('fr');
            $.each(responseKPI, function(key, value) 
            {   
               var budget= parseInt(value.ProjectBudgetCost);
               var sponsor1= value.Sponsor;
               var sponsorindex= arraysponsor.indexOf(sponsor1);
                if ((sponsor1!="")&&(sponsor1!=null)) {
                 
                  


                 if(sponsorindex == -1){
                  arraysponsor.push(sponsor1);
                
                 }
                 }
               
               console.log("sponsor="+sponsor1);
               var chantier=value.Servicesduprojet;
               var direction= value.Servicesduprojet;


               var directionindex= arraydirection.indexOf(direction);

                 if ((direction!="")&&(direction!=null)) {
                 
                  


                 if(directionindex == -1){
                  arraydirection.push(direction);
                
                 }
                 }

               document.getElementById("ChantierName1").innerHTML=chantier;
               document.getElementById("nomChantier").innerHTML=chantier;
               moment.locale('fr');
               projStartDate=value.ProjectStartDate;
               var debProj = moment(projStartDate);
               projfinshtDate=value.ProjectFinishDate;
               var finProj = moment(projfinshtDate);
               arrayDeb.push(debProj);
               arrayFin.push(finProj);
               countProgramme++;
               budgSum+=budget;
               //var pmostructure= value.PMOStructure;
               //var pmotranserve= value.PMOTransverse;

               achSum+=parseInt(value.ProjectPercentCompleted);
                console.log("achSum="+ achSum);            
             
               owner=value.ProjectOwnerName;
               
            });
           
              
                
                 minStart="";
              
                
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
              

              

              
              
              moment.locale('fr');
              var debutChant=moment(minStart);
              var finChant=moment(maxEnd);
              var StartChant=moment(debutChant).format('DD/MM/YYYY');
              var FinishChant=moment(finChant).format('DD/MM/YYYY');
              
             var achevementPer=parseInt(achSum/countProgramme);

             if ((minStart!="")&&(maxEnd!="")) {
              var dureeProj = parseFloat(moment(finChant).diff(moment(debutChant), 'days', true)).toFixed(0);

            }else
            var dureeProj="";
              
              document.getElementById("debutChantier").innerHTML=StartChant;
              document.getElementById("finChantier").innerHTML=FinishChant;
              document.getElementById("dureeChantier").innerHTML=dureeProj;
              document.getElementById("programCount").innerHTML=countProgramme;
              document.getElementById("achevementChantier").innerHTML="<p>"+achevementPer+"%<progress id='' max='100' value='"+achevementPer+"' style='width: 75%; background-color:green; height:10px;'></progress></p>";
              document.getElementById("PMOS").innerHTML=owner;
              document.getElementById("PMOT").innerHTML=owner;
              
              document.getElementById("BudgetChantier").innerHTML=budgSum;
              document.getElementById("SponsorChantier").innerHTML=arraysponsor.join();
              document.getElementById("DirectionChantier").innerHTML=arraydirection.join();

       }
  });
}
filterKPI();



//*********************************linetme*******************************

var responseTimeline = responseTimeline ||[];
var urlTimeline = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=Servicesduprojet%20eq%27"+chanSelctedName+"%27";
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
               var nomProj=value.EnterpriseProjectTypeName;
               var dateDeb=value.ProjectStartDate;
               var nomChantier=value.Servicesduprojet; 
               ////console.log(dateDeb);
               var projStartDate = moment(dateDeb).format('L');
               var dateFin=value.ProjectFinishDate;
               var projFinishtDate = moment(dateFin).format('L');
               var projStartDate1 = moment(dateDeb);
               var projFinishtDate1 = moment(dateFin);
               var owner=value.ProjectOwnerName;
               var desc='Date Début Programme : '+projStartDate;

              var dureeProj = parseFloat(moment(projFinishtDate1).diff(moment(projStartDate1), 'days', true)).toFixed(0);
              var nomProj="<tspan style='fill:#00FF00'>● </tspan><strong>Programme : "+value.EnterpriseProjectTypeName+"</strong><br> durée (j) : "+dureeProj;
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
        visible: false
    },
    yAxis: {
        visible: false
    },
    title: {
        text: ''+chanSelctedName+''
    },
    subtitle: {
        text: ''
    },
    colors: [
        '#92C18F',
        '#92C18F',
        '#92C18F',
        '#92C18F',
        '#92C18F',
        '#92C18F'
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
var urlProg = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=Servicesduprojet%20eq%27"+chanSelctedName+"%27";


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
              
                                var program = value.EnterpriseProjectTypeName;  
                var prId= value.ProjectId;  
                
                  $('#mylist2').append($('<option>',
                           {
                              text : program,
                              value : prId
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












}






}













							
							











