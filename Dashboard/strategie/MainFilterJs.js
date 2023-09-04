function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    return elt.options[elt.selectedIndex].text;
}


function mainProgrammeFilter(){
  var idPog = document.getElementById("mylist2").value;
     
  if (idPog=="programme") {
  $("#programme-details1").css("display", "none");
  $("#programme-details2").css("display", "none");
  $("#programme-details3").css("display", "none");
  $("#programme-details4").css("display", "none");
  $("#programme-details5").css("display", "none");
  }
  else
  {
    var progSelctedName=getSelectedText("mylist2");
  $("#programme-details1").css("display", "block");
  $("#programme-details2").css("display", "block");
  $("#programme-details3").css("display", "block");
  $("#programme-details4").css("display", "block");
  $("#programme-details5").css("display", "block");

  var idChantier = document.getElementById("mylist1").value;
     var chanSelctedName=getSelectedText("mylist1");

   
  var responseDataTable = responseDataTable ||[];
var urlData = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=Servicesduprojet%20eq%27"+chanSelctedName+"%27%20and%20EnterpriseProjectTypeName%20eq%27"+progSelctedName+"%27";


function loadtable(){
     tableaux = document.getElementById("tableaux");
     tr1 = tableaux.getElementsByTagName("tr");
     if(tr1.length>0){         
          $('#tableaux tbody').empty();
     }
  $.ajax({url:  urlData,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseDataTable = responseDataTable.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlData = data.d.__next;
                                            loadtable();
                                        }  
              var dataresult=[];
            $.each(responseDataTable, function(key, value){
              moment.locale('fr');
               var nomProj=value.ProjectName;
               var dateDeb=value.ProjectStartDate;
               var projStartDate = moment(dateDeb).format('YYYY-MM-DD');
               var dateFin=value.ProjectFinishDate;
               var projFinishtDate = moment(dateFin).format('YYYY-MM-DD');
               var achevement=value.ProjectPercentCompleted;
               var owner=value.ProjectOwnerName;
               var budg= value.ProjectBudgetCost;
                var budget = parseFloat(budg).toFixed(0);
                var idp=value.ProjectId;
              
               var tr;
                    tr = $("<tr>");
                        tr.append("<td style='text-align:left'>" + nomProj + "</td>");//0
                        tr.append("<td>" + projStartDate + "</td>");//1                        
                        tr.append("<td>" + projFinishtDate + "</td>"); //2
                        tr.append("<td>" + achevement+ "%</td>"); //3
                        tr.append("<td>" + owner+ "</td>"); //4
                        tr.append("<td>" + budget + "</td>"); //5
                        tr.append("<td>" + 0  + "</td>"); //6
                        //tr.append('<td> <button data-toggle="modal" data-target="#MODALWINDOW" onclick="return false;" class="btn btn-primary"> THE TRIGGER BUTTON</button> </td>'); //6
                        $('#tableaux tbody').append(tr);
                       
                                          statutP(idp);  
                                      });
       
            //$('#tableaux').DataTable();
          }
        });

}

loadtable();

function statutP(idP){
  var responseStatut = responseStatut ||[];
     var urlStatut = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectId%20eq%20guid%27"+idP+"%27";
     function loadStatuts(){
       $.ajax({url:  urlStatut,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseStatut = responseStatut.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlStatut = data.d.__next;
                                            loadStatuts();
                                        } 
                                        $.each(responseProgrammeKPI, function(key, value) 
                                      {
                                        var nomProj=value.ProjectId;
                                        var tr;
                                        tr = $("<tr>");
                                        tr.append("<td>" + nomProj + "</td>");//1
                                        $('#myTable tbody').append(tr);
                                      });



                                      }
                                    });
     }
     loadStatuts();
}


  var responseProgrammeKPI = responseProgrammeKPI ||[];
     var urlProgrammeKPI = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=Servicesduprojet%20eq%27"+chanSelctedName+"%27%20and%20EnterpriseProjectTypeName%20eq%27"+progSelctedName+"%27";
     
     function filterProgrammeKPI(){
          $.ajax({url:  urlProgrammeKPI,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseProgrammeKPI = responseProgrammeKPI.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlProgrammeKPI = data.d.__next;
                                            filterProgrammeKPI();
                                        }  
                                        var owner="";
                                        
                          var arrayDeb=[];
                          var arrayFin=[];
                          var countProgramme=0;
                          
                          var minStart;
                          var dureeProj;
                          var achSum1=0;
                          var achSum=0;
                        var ProjPerCompleted=0;
                        var projbudget=0;
                        var budgsum=0;
                        var arraysponsor=[];
                        var direction;
                          moment.locale('fr');
            $.each(responseProgrammeKPI, function(key, value) 
            {
               var chantier=value.EnterpriseProjectTypeName;
               document.getElementById("nomProgram").innerHTML=chantier;
               document.getElementById("progName").innerHTML=chantier;
               moment.locale('fr');
               projStartDate=value.ProjectStartDate;
               var debProj = moment(projStartDate);
               projfinshtDate=value.ProjectFinishDate;
               var finProj = moment(projfinshtDate);
               arrayDeb.push(debProj);
               arrayFin.push(finProj);
               countProgramme++;
               console.log("countProgramme="+countProgramme);
               //var pmostructure= value.PMOStructure;
               //var pmotranserve= value.PMOTransverse;
               sponsor= value.Sponsor;
               var sponsorindex= arraysponsor.indexOf(sponsor);
                if ((sponsor!="")&&(sponsor!=null)) {
                 
                  


                 if(sponsorindex == -1){
                  arraysponsor.push(sponsor);
                
                 }
                 }
              
               direction= value.Servicesduprojet;
               ProjPerCompleted= parseInt(value.ProjectPercentCompleted);
               projbudget= parseInt(value.ProjectBudgetCost);
               console.log("p= "+value.ProjectPercentCompleted)
               achSum1+=parseInt(ProjPerCompleted);
               budgsum+=parseInt(projbudget);            
             console.log("achSum="+ achSum1);
               owner=value.ProjectOwnerName;
               
            });
            console.log("arrayDeb= "+arrayDeb.join());
            console.log("arrayFin= "+arrayFin.join());
            console.log("achSum= "+achSum);
              achSum = achSum1;
                
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
              
              document.getElementById("debutProg").innerHTML=StartChant;
              document.getElementById("finProg").innerHTML=FinishChant;
              document.getElementById("dureeProg").innerHTML=dureeProj;
              document.getElementById("projCount1").innerHTML=countProgramme;
              document.getElementById("achevementProg").innerHTML= "<p>"+achevementPer+"%<progress id='' max='100' value='"+achevementPer+"' style='width: 75%; background-color:green; height:10px;' ></progress></p>";
              document.getElementById("Budgetprog").innerHTML=budgsum;
              document.getElementById("Sponsorprog").innerHTML=arraysponsor.join();
              document.getElementById("DirectionProg").innerHTML=direction;
              document.getElementById("PMOS1").innerHTML=owner;
              document.getElementById("PMOT1").innerHTML=owner;
       }
  });
}
filterProgrammeKPI();

}
}