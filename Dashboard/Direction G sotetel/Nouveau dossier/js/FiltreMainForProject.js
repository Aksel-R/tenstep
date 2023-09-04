

   function filtrerTableau()
  {
    var input, input2, input3, input4, filter, filter2, filter3, filter4, table, tr, td, td2, td3, td4, i, k;
    input = document.getElementById("filtreDirectionprojet");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];

    if (td){
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
      } else {
      tr[i].style.display = "none";
      }
    }       
    }
    var numRows = document.getElementById("myTable").rows.length;
  }
  filtrerTableau();

function MainFilterProjectCentre(){
  var ProjectSelected = document.getElementById("filtreDirectionprojet").value;

  ////console.log(ProjectSelecteds);

document.getElementById("filtreDirectionprojet").addEventListener("change", function(){
  //This input has changed
   //console.log('This Value is', this.value);
});

/*var ProjectSelected = encodeURIComponent(ProjectSelecteds.replace(/'/g, "''"));
//console.log(ProjectSelected+"Aprés enleve apostrophe");*/



if(ProjectSelected != "")
{
  document.getElementById("preload").style.display = 'block';



document.getElementById("body-container").style.display = 'none';

  $(function() {
  $(".preload").fadeOut(3000, function() {
    $(".body-container").fadeIn(1000);        
  });
});
var exercice=document.getElementById("exerciceDates").value;
    //console.log("exercice selectionner= "+exercice);
    var exercice1 = 0;

    exercice1 = parseInt(exercice)+1;



    var periodeUrl="";
    var periodeUrl1="";
    


 if (exercice!="") {
      periodeUrl="&$filter=ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27%20and%20ProjectStartDate%20le%20datetime%27"+exercice1+"-12-31T00:00:00.000%27%20or%20ProjectFinishDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27%20and%20ProjectFinishDate%20le%20datetime%27"+exercice1+"-12-31T00:00:00.000%27%20or%20ProjectStartDate%20le%20datetime%27"+exercice+"-01-01T00:00:00.000%27%20and%20ProjectFinishDate%20ge%20datetime%27"+exercice1+"-12-31T00:00:00.000%27";
      periodeUrl0="?$filter=ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27%20and%20ProjectStartDate%20le%20datetime%27"+exercice1+"-12-31T00:00:00.000%27%20or%20ProjectFinishDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27%20and%20ProjectFinishDate%20le%20datetime%27"+exercice1+"-12-31T00:00:00.000%27%20or%20ProjectStartDate%20le%20datetime%27"+exercice+"-01-01T00:00:00.000%27%20and%20ProjectFinishDate%20ge%20datetime%27"+exercice1+"-12-31T00:00:00.000%27";
      periodeUrl1="%20and%20ProjectStartDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27%20and%20ProjectStartDate%20le%20datetime%27"+exercice1+"-12-31T00:00:00.000%27%20or%20ProjectFinishDate%20ge%20datetime%27"+exercice+"-01-01T00:00:00.000%27%20and%20ProjectFinishDate%20le%20datetime%27"+exercice1+"-12-31T00:00:00.000%27%20or%20ProjectStartDate%20le%20datetime%27"+exercice+"-01-01T00:00:00.000%27%20and%20ProjectFinishDate%20ge%20datetime%27"+exercice1+"-12-31T00:00:00.000%27";
      
    }


$('#tittreTab1').hide();
  $('#tittreTab2').hide();
  $('#tittreTab3').show();

  $("#sous_direct1").hide(); 
      $("#sous_direct2").hide(); 
    $("#sous_direct3").show();


//Load Number Of All Project Somme sur EPPM




  var responseAllClientMProject = responseAllClientMProject || [];
function LoadTableProjectsClientFilterMProject() {

var LinkClient = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,Montant,ProjectDuration,Direction,ProjectCost,ProjectActualCost,ProjectWorkVariance,ProjectCostVariance,ProjectWork,ProjectFinishDate,ProjectStartDate,Client,ProjectOwnerName,ProjectPercentCompleted,ProjectName&$filter=ProjectId eq guid'"+ProjectSelected+"'";
            $.ajax({url: LinkClient,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseAllClientMProject = responseAllClientMProject.concat(data.d.results);
                              if (data.d.__next) {
                                LinkClient = data.d.__next;
                                LoadTableProjectsClientFilterMProject();
                              }    
                                   
                                var sumMont=0;
                                 var sumAch=0;
                                 var nbProj=0;
                                 var sumCost=0;
                                 var projcostvariance=0;
                                 projWork=0;
                                 var pworkvariance = 0;
                                  var arrIdProj=[];
                                  var arrClient=[];
                                  var arrProjectName=[];
                                  var arrLink=[];
                                  var arrCp=[];
                                  var arrMontantG=[];
                                  var arrCoutActuel=[];
                                  var arrDeb=[];
                                  var arrFin=[];
                                  var arrAch=[];
                                  var arrDir=[];
                                  var arrCostvariance=[];
                                  var arrProjWork=[];
                                  var arrPworkvariance=[];
                                  var arrMontantP=[];
                                  var borne1="";
                                  var borne2="";
                                  var montantGen=0;
                                  var coutActuel=0;
                                  var cout=0;
                                  if (exercice=="2018") {
                                    borne1=moment('2018-01-01').format('YYYY-MM-DD');
                                    borne2=moment('2018-12-31').format('YYYY-MM-DD');
                                  }
                                  else if (exercice=="2019") {
                                    borne1=moment('2019-01-01').format('YYYY-MM-DD');
                                    borne2=moment('2019-12-31').format('YYYY-MM-DD');
                                  }
                                  else if (exercice=="2020") {
                                    borne1=moment('2020-01-01').format('YYYY-MM-DD');
                                    borne2=moment('2020-12-31').format('YYYY-MM-DD');
                                  }
                                  else if (exercice=="2021") {
                                    borne1=moment('2021-01-01').format('YYYY-MM-DD');
                                    borne2=moment('2021-12-31').format('YYYY-MM-DD');
                                  }
                                  else if (exercice=="2022") {
                                    borne1=moment('2022-01-01').format('YYYY-MM-DD');
                                    borne2=moment('2022-12-31').format('YYYY-MM-DD');
                                  }
                                            
            $.each(responseAllClientMProject, function(key, value) 
            {    
                moment.locale('fr');
              var projStartDate = moment(value.ProjectStartDate).format('YYYY-MM-DD');
        var projfinishdate = moment(value.ProjectFinishDate).format('YYYY-MM-DD');
        if ( ( ( (projStartDate>=borne1)&&(projStartDate<=borne2) ) || ( (projfinishdate>=borne1)&&(projfinishdate<=borne2) ) ) || ( ( projStartDate<=borne1 ) && ( projfinishdate>=borne2 ) ) ) 
        {
          //console.log("projStartDate= "+projStartDate);
                                  //console.log('projfinishdate= '+projfinishdate);
          nbProj++;          
                var projCostes = 0;   
              

                var directProject = value.Direction;

                 if(directProject =="ServiceInfrastructure.RA&B")
                {
                  directProject = "ServiceInfrastructure.RA AND B";
                }
                else
                {

                  directProject = directProject;
                }
                var projectDuration=value.ProjectDuration;
                var client = value.Client;  
                var nomProjet = value.ProjectName;
                var pOwner = value.ProjectOwnerName;
                var projCostess = parseFloat(value.ProjectCost).toFixed(3);

               var  mont = parseFloat(value.ProjectCost);
               if(!isNaN(mont))
                  {                   
                    sumMont=parseFloat(parseFloat(sumMont)+parseFloat(mont));
                  } 
                 if(!isNaN(projCostess))
                  {
                    projCostes = projCostess;            
                    sumCost=parseFloat(parseFloat(sumCost)+parseFloat(projCostess));       
                  } 
                  var pcostVar = parseFloat(value.ProjectCostVariance);
                  projcostvariance = parseFloat(parseFloat(projcostvariance)+parseFloat(pcostVar));
                  var pwork = parseFloat(value.ProjectWork);
                  projWork= parseFloat(parseFloat(projWork)+ parseFloat(pwork));

                  var pwvariance = parseFloat(value.ProjectWorkVariance);
                  pworkvariance = parseFloat(parseFloat(pworkvariance) + parseFloat(pwvariance)).toFixed(2);
                  montantGen=parseFloat(value.Montant);
                  coutActuel=parseFloat(value.ProjectActualCost);
                  cout=parseFloat(value.ProjectCost);
                
        var projetTermine = parseFloat(value.ProjectPercentCompleted).toFixed(0);
        sumAch=parseFloat(parseFloat(sumAch)+parseFloat(projetTermine)).toFixed(0);
        var identifiantProjet = value.ProjectId;

        if(client == null)
        {
            client = "Pas de client sur ce projet";
           } 

           //var linkEch="<a href='https://sotetel.spps.tn/pwa/project%20detail%20pages/schedule.aspx?projuid="+identifiantProjet+"&ret=0' id='redirectLink' target='_blank'><img src='/PWA/_catalogs/masterpage/Dashboard/img/link.png' class='img-rounded' alt='Cinque Terre' width='20px' height='20px'></a>"

           arrIdProj.push(identifiantProjet);
            arrClient.push(client);
            arrProjectName.push(nomProjet);
            //arrLink.push(linkEch);
            arrCp.push(pOwner);
            arrMontantG.push(0);
            arrCoutActuel.push(0);
            arrDeb.push(projStartDate);
            arrFin.push(projfinishdate);
            arrAch.push(0);
            arrDir.push(directProject);
            arrCostvariance.push(0);
            arrProjWork.push(0);
            arrPworkvariance.push(0);
            loadTasksKPIs(identifiantProjet,arrIdProj,arrClient,arrProjectName,arrCp,arrMontantG,arrDeb,arrFin,arrAch,borne1,borne2,projectDuration,arrDir,arrCostvariance,arrProjWork,arrPworkvariance,arrCoutActuel,montantGen,coutActuel,cout);
                  
            
        }
                      
             var derniereModification = value.ProjectModifiedDate;

                  
                dModif = moment(derniereModification).format('DD-MM-YYYY'); 

            });
            //$('#myTable').DataTable();
            document.getElementById("lastdateupdate").style.display = 'block';
            document.getElementById("lastUpdate").innerHTML = dModif;
           
            document.getElementById("NombreProjet").innerHTML = nbProj;
              
}   
});  

}                                  
LoadTableProjectsClientFilterMProject();

function loadTasksKPIs(identifiantProjet,arrIdProj,arrClient,arrProjectName,arrCp,arrMontantG,arrDeb,arrFin,arrAch,borne1,borne2,projectDuration,arrDir,arrCostvariance,arrProjWork,arrPworkvariance,arrCoutActuel,montantGen,coutActuel,cout){

  var urlTasksKPIs=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=TaskActualCost,ProjectId,TaskStartDate,TaskFinishDate,TaskPercentCompleted,TaskDuration,TaskCost,TaskCostVariance,TaskWork,TaskWorkVariance&$filter=ProjectId%20eq%20guid%27"+identifiantProjet+"%27%20and%20TaskIsMilestone%20eq%20false";
  var responseTasksKPIs= responseTasksKPIs || [];
  function chrgerTab(){
    $.ajax({url: urlTasksKPIs,   
                        
            method: "GET",
            dataType: "json",
            headers: {Accept: "application/json;odata=verbose"},       
            success: function(data) { 
                responseTasksKPIs = responseTasksKPIs.concat(data.d.results);
                if (data.d.__next) {
                  urlTasksKPIs = data.d.__next;
                  chrgerTab();
                } 
                
                 var sumAch=0;
                 var sumCost=0;
                 var sumActCost=0;
                 var count1=0;
                 var sumcostVariance=0;
                 var sumWork=0;
                 var sumWorkVariance=0;
                 var idP="";      
              $.each(responseTasksKPIs, function(key, value) 
              {
                moment.locale('fr');
                idP=value.ProjectId;
                var debut=value.TaskStartDate;
                var debutTache=moment(debut).format('YYYY-MM-DD');
                var fin=value.TaskFinishDate;
                var finTache=moment(fin).format('YYYY-MM-DD');
               
                //****************************************************************************TaskCost ******************************************************** TaskActualCost ** montantGen coutActuel cout
                var ach=value.TaskPercentCompleted;
                var taskDuration=value.TaskDuration;
                var coutT=value.TaskCost;
                var coutAct=value.TaskActualCost;
                var coutVariance=value.TaskCostVariance;
                var travail=value.TaskWork;
                var travailVariance=value.TaskWorkVariance;
                
                if (debutTache>=borne1 && finTache<=borne2) {
                  console.log("ach= "+ach);
                  var coutT0=0;
                  var coutAct0=0;
                  sumAch=parseFloat(sumAch+ach);
                  if (cout!=0) {
                    coutT0=parseFloat((coutT/cout)*montantGen);
                    
                    coutAct0=(parseFloat(coutAct)*(ach/100))/parseFloat(cout)*montantGen;
                    
                  }
                  if (isNaN(coutT0)) {
                    coutT0=0;
                  }
                  sumCost=parseFloat(sumCost+coutT0);
                  if (isNaN(coutAct0)) {
                    coutAct0=0;
                  }
                  sumActCost=parseFloat(parseFloat(sumActCost+coutAct0));

                  sumcostVariance=parseFloat(parseFloat(sumcostVariance)+parseFloat(coutVariance*(ach/100)));
                  sumWork=parseFloat(parseFloat(sumWork)+parseFloat(travail*(ach/100)));
                  sumWorkVariance=parseFloat(parseFloat(sumWorkVariance)+parseFloat(travailVariance*(ach/100)));
                  count1++;
                }else if (debutTache<borne1 && finTache<=borne2 && finTache>borne1) {
                  console.log("ach= "+ach);
                  var diff1= calculateBusinessDays(borne1, finTache);
                  var diff2= calculateBusinessDays(debutTache, finTache);
                  var ach1=parseFloat(ach*(diff1/diff2));                  
                  sumAch=parseFloat(sumAch+ach1);
                  var coutT1=0;
                  var coutAct1=0;
                  if (cout!=0){
                    coutT1=parseFloat(coutT*(diff1/diff2)*(montantGen/cout));
                    
                    coutAct1=parseFloat(coutAct*(diff1/diff2)*(ach/100)*(montantGen/cout));
                  }
                  if (isNaN(coutT1)) {
                    coutT1=0;
                  }
                  sumCost=parseFloat(sumCost+coutT1);
                  if (isNaN(coutAct1)) {
                    coutAct1=0;
                  }
                  sumActCost=parseFloat(sumActCost+coutAct1);

                  var sumcostVariance1=parseFloat(coutVariance*(diff1/diff2)*(ach/100));
                  sumcostVariance=parseFloat(sumcostVariance+sumcostVariance1);

                  var sumWork1=parseFloat(travail*(diff1/diff2)*(ach/100));
                  sumWork=parseFloat(sumWork+sumWork1);

                  var sumWorkVariance1=parseFloat(travailVariance*(diff1/diff2)*(ach/100));
                  sumWorkVariance=parseFloat(sumWorkVariance+sumWorkVariance1);

                  count1++;
                }else if (debutTache>=borne1 && debutTache<borne2 && finTache>borne2) {
                  console.log("ach= "+ach);
                  var diff3=calculateBusinessDays(debutTache, borne2);
                  var diff4=calculateBusinessDays(debutTache, finTache);

                  var ach11=parseFloat(ach*(diff3/diff4));
                  sumAch=parseFloat(parseFloat(sumAch)+parseFloat(ach11));
                  var coutT11=0;
          var coutAct11=0;
                  if (cout!=0){
                    coutT11=parseFloat(coutT*(diff3/diff4)*(montantGen/cout));
                    
                    coutAct11=parseFloat(coutAct*(diff3/diff4)*(ach/100)*(montantGen/cout));
                  }
                  if (isNaN(coutT11)) {
                    coutT11=0;
                  }
                  sumCost=parseFloat(parseFloat(sumCost)+parseFloat(coutT11));
                  if (isNaN(coutAct11)) {
                    coutAct11=0;
                  }
                  sumActCost=parseFloat(parseFloat(sumActCost)+parseFloat(coutAct11));

                  var sumcostVariance11=parseFloat(coutVariance*(diff3/diff4)*(ach/100));
                  sumcostVariance=parseFloat(parseFloat(sumcostVariance)+parseFloat(sumcostVariance11));

                  var sumWork11=parseFloat(travail*(diff3/diff4)*(ach/100));
                  sumWork=parseFloat(parseFloat(sumWork)+parseFloat(sumWork11));

                  var sumWorkVariance11=parseFloat(travailVariance*(diff3/diff4)*(ach/100));
                  sumWorkVariance=parseFloat(parseFloat(sumWorkVariance)+parseFloat(sumWorkVariance11));

                  count1++;                  
                }else if (debutTache<borne1 && finTache>borne2) {
                  console.log("ach= "+ach);
                  var diff5=calculateBusinessDays(borne1,borne2);
                  var diff6=calculateBusinessDays(debutTache, finTache);

                  var ach111=parseFloat(ach*(diff5/diff6)*(ach/100));
                  sumAch=parseFloat(parseFloat(sumAch)+parseFloat(ach111));
                  var coutT111=0;
          var coutAct111=0;
                  if (cout!=0){
                    coutT111=parseFloat(coutT*(diff5/diff6)*(montantGen/cout));
                    
                    coutAct111=parseFloat(coutAct*(diff5/diff6)*(ach/100)*(montantGen/cout));
                  }
                  if (isNaN(coutT111)) {
                    coutT111=0;
                  }
                  sumCost=parseFloat(parseFloat(sumCost)+parseFloat(coutT111));
                  if (isNaN(coutAct111)) {
                    coutAct111=0;
                  }
                  sumActCost=parseFloat(parseFloat(sumActCost)+parseFloat(coutAct111));

                  var sumcostVariance111=parseFloat(coutT*(diff5/diff6)*(ach/100));
                  sumcostVariance=parseFloat(parseFloat(sumcostVariance)+parseFloat(sumcostVariance111));

                  var sumWork111=parseFloat(coutT*(diff5/diff6)*(ach/100));
                  sumWork=parseFloat(parseFloat(sumWork)+parseFloat(sumWork111));

                  var sumWorkVariance111=parseFloat(coutT*(diff5/diff6)*(ach/100));
                  sumWorkVariance=parseFloat(parseFloat(sumWorkVariance)+parseFloat(sumWorkVariance111));

                  count1++;
                  // console.log('-----------------------------');
                  // console.log("diff5= "+diff5);
                  // console.log("diff6= "+diff6);
                  // console.log("taskDuration= "+taskDuration/8);
                  // console.log("debut tâche1= "+debutTache);
                  // console.log("fin tâche1= "+finTache);
                  // console.log('-----------------------------');
                }
               
              });  
              var achProj=0;
              var montantP=0;
              if (count1!=0) {
                achproj=parseFloat(sumAch/count1);
                montantP=parseFloat(sumCost);
              }else{
                achproj=0;
                montantP=0;
              } 
              arrMontantG[arrIdProj.indexOf(idP)]=parseFloat(montantP).toFixed(0);
              arrCoutActuel[arrIdProj.indexOf(idP)]=parseFloat(sumActCost).toFixed(0);
              arrAch[arrIdProj.indexOf(idP)]=parseFloat(achproj).toFixed(0);
              arrCostvariance[arrIdProj.indexOf(idP)]=parseFloat(sumcostVariance).toFixed(0);
              arrProjWork[arrIdProj.indexOf(idP)]=parseFloat(sumWork).toFixed(0);
              arrPworkvariance[arrIdProj.indexOf(idP)]=parseFloat(sumWorkVariance).toFixed(0);
              tableaux1 = document.getElementById("myTable");
               tr2 = tableaux1.getElementsByTagName("tr");
               if(tr2.length>0){        
                    $('#myTable tbody').empty();
               }
               //-------------------------------sumActCost----------------------------
               var sumAchevement=0;
               var sumCouts=0;
               var sumCoutsVariance=0;
               var sumWorks=0;
               var sumWorksVariance=0;
               for (var i = 0; i < arrIdProj.length; i++) {
                 var tr;
                    tr = $("<tr class='even pointer'>");
                        tr.append("<td style='width: 14%; text-align: left;'>" +arrClient[i] +"</td>"); //1
                        tr.append("<td style='width: 18%; text-align: left;'>" + arrProjectName[i] +" </td>"); //11 //11
                        tr.append("<td><a href='https://sotetel.spps.tn/pwa/project%20detail%20pages/schedule.aspx?projuid="+arrIdProj[i]+"&ret=0' id='redirectLink' target='_blank'><img src='/PWA/_catalogs/masterpage/Dashboard/img/link.png' class='img-rounded' alt='Cinque Terre' width='20px' height='20px'></a></td>");

                        tr.append("<td style='width: 9%'>" + arrCp[i] +" </td>"); //12
                        tr.append("<td style='width: 10%'>" + conToMill(arrMontantG[i]) +" </td>"); //13
                        tr.append("<td style='width: 10%'>" + conToMill(arrCoutActuel[i]) +" </td>");
                        tr.append("<td style='width: 10%'>" + arrDeb[i] +"</td>"); //14
                        tr.append("<td style='width: 10%'>" + arrFin[i] +" </td>"); //15
                        tr.append('<td style="text-align:center;width: 16%">'+arrAch[i]+'%<progress id="" max="100" value="'+arrAch[i]+'" style="width: 100%"></progress></td>');
                        tr.append("<td style='display:none;'>"+arrDir[i]+"</td>"); //16
                        tr.append("</tr>");
                    $('#myTable tbody').append(tr);
                    sumAchevement=parseFloat(parseFloat(sumAchevement)+parseFloat(arrAch[i]));
                    sumCouts=parseFloat(parseFloat(sumCouts)+parseFloat(arrMontantG[i]));
                    sumCoutsVariance=parseFloat(parseFloat(sumCoutsVariance)+parseFloat(arrCostvariance[i]));
                    sumWorks=parseFloat(parseFloat(sumWorks)+parseFloat(arrProjWork[i]));
                    sumWorksVariance=parseFloat(parseFloat(sumWorksVariance)+parseFloat(arrPworkvariance[i]));
                     

               }
               // console.log("sumAchevement= "+sumAchevement);
                console.log("sumCouts= "+sumCouts);
                document.getElementById("MontantProjets").innerHTML = conToMill(parseFloat(sumCouts).toFixed(3)); 
               var moyAch=parseFloat(sumAchevement/arrIdProj.length).toFixed(0);
               if (isNaN(moyAch)) {
                  moyAch=0;
                }
               document.getElementById("prcount").innerHTML = arrIdProj.length;
               document.getElementById("prcost").innerHTML = conToMill(sumCouts);

               document.getElementById("cvariance").innerHTML = conToMill(parseFloat(sumCoutsVariance).toFixed(0));
               document.getElementById("prwork").innerHTML = conToMill(parseFloat(sumWorks).toFixed(0));
               document.getElementById("wrvariance").innerHTML = conToMill(parseFloat(sumWorksVariance).toFixed(0));

               document.getElementById("TauxAvancement").innerHTML = moyAch + "%";  
                document.getElementById("pourach").innerHTML=moyAch + "%";
                var valeurPercent =moyAch;
                $(".progress").attr("data-percentage", valeurPercent.toString());
              // console.log("sumAch= "+sumAch);  
              // console.log("count1= "+count1);  
              // console.log("ach= "+achproj);      

      }   
    });
  }
  chrgerTab();

}

  //Project Name achevevement des directions
  function DoughnutChartFilterMProject()
  {
    document.getElementById("chartCartBody").innerHTML = '<canvas id="projchart" style="margin-top: 40px;  "></canvas>'; 
      $.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectPercentCompleted,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectName&$filter=ProjectId eq guid'"+ProjectSelected+"'",

  method: "GET",
    headers: { "Accept": "application/json;odata=verbose"},
success: function (data) {
      var CalculPercent = 0;
      var DirecProj="";
      var CalculPercent1 = 0;
      var DirecProj1="";
      var CalculPercent2 = 0;
      var DirecProj2="";
      var CalculPercent3 = 0;
      var DirecProj3="";

      var nbrPr1=0;
      var nbrPr2=0;
      var nbrPr3=0;
      var nbrPr4=0;
      var borne1="";
      var borne2="";
      if (exercice=="2018") {
        borne1=moment('2018-01-01').format('YYYY-MM-DD');
        borne2=moment('2018-12-31').format('YYYY-MM-DD');
      }
      else if (exercice=="2019") {
        borne1=moment('2019-01-01').format('YYYY-MM-DD');
        borne2=moment('2019-12-31').format('YYYY-MM-DD');
      }
      else if (exercice=="2020") {
        borne1=moment('2020-01-01').format('YYYY-MM-DD');
        borne2=moment('2020-12-31').format('YYYY-MM-DD');
      }
      else if (exercice=="2021") {
        borne1=moment('2021-01-01').format('YYYY-MM-DD');
        borne2=moment('2021-12-31').format('YYYY-MM-DD');
      }
      else if (exercice=="2022") {
        borne1=moment('2022-01-01').format('YYYY-MM-DD');
        borne2=moment('2022-12-31').format('YYYY-MM-DD');
      }
      if (data.d.results.length > 0) {
        

            var pieValues = [];
            var pieLabels = [];
            var arrSumPourcentage = [];
            var arrDirection = [];
            var arrCountDirection = [];
            var idProj="";
            var arrAvgPourcentage = [];
            
            

            
            for (var i = 0; i < data.d.results.length; i++) {
              moment.locale('fr');
              var projStartDate = moment(data.d.results[i].ProjectStartDate).format('YYYY-MM-DD');
              var projfinishdate = moment(data.d.results[i].ProjectFinishDate).format('YYYY-MM-DD');
              if ( ( ( (projStartDate>=borne1)&&(projStartDate<=borne2) ) || ( (projfinishdate>=borne1)&&(projfinishdate<=borne2) ) ) || ( ( projStartDate<=borne1 ) && ( projfinishdate>=borne2 ) ) ){
                 idProj=data.d.results[i].ProjectId;
                 var dir="";

                    nomProjetDirection = data.d.results[i].ProjectName;
              if (arrDirection.indexOf(nomProjetDirection)<0) {
                arrDirection.push(nomProjetDirection);
                arrCountDirection.push(0);
                arrSumPourcentage.push(0);
                arrAvgPourcentage.push(0);
              }
              loadChartPercent(idProj,nomProjetDirection,arrDirection,arrCountDirection,arrSumPourcentage,arrAvgPourcentage,borne1,borne2);
        }

            }
                  
      
             pieLabels.push(DirecProj,DirecProj1,DirecProj2,DirecProj3);
          pieValues.push(parseFloat(CalculPercent/nbrPr1).toFixed(0),parseFloat(CalculPercent1/nbrPr2).toFixed(0),parseFloat(CalculPercent2/nbrPr3).toFixed(0),parseFloat(CalculPercent3/nbrPr4).toFixed(0));

           
            }
        },
        error: function (data) {
            
        }
    });
  }

DoughnutChartFilterMProject();
function loadChartPercent(idProj,dir,arrDir,arrCountDirection,arrSumPourcentage,arrAvgPourcentage,borne1,borne2){
  var urlTasksChart=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Tasks?$select=ProjectId,TaskStartDate,TaskFinishDate,TaskPercentCompleted,TaskDuration,TaskCost,TaskCostVariance,TaskWork,TaskWorkVariance&$filter=ProjectId%20eq%20guid%27"+idProj+"%27%20and%20TaskIsMilestone%20eq%20false";
  var responseTasksChart= responseTasksChart || [];
  function chrgerChart(){
    $.ajax({url: urlTasksChart,   
                        
            method: "GET",
            dataType: "json",
            headers: {Accept: "application/json;odata=verbose"},       
            success: function(data) { 
                responseTasksChart = responseTasksChart.concat(data.d.results);
                if (data.d.__next) {
                  urlTasksChart = data.d.__next;
                  chrgerChart();
                } 
                
                 var sumAch=0;
                 var sumCost=0;
                 var count1=0;
                 var sumcostVariance=0;
                 var sumWork=0;
                 var sumWorkVariance=0;
                 var idP="";      
              $.each(responseTasksChart, function(key, value) 
              {
                moment.locale('fr');
                idP=value.ProjectId;
                var debut=value.TaskStartDate;
                var debutTache=moment(debut).format('YYYY-MM-DD');
                var fin=value.TaskFinishDate;
                var finTache=moment(fin).format('YYYY-MM-DD');
                var ach=value.TaskPercentCompleted;
                var taskDuration=value.TaskDuration;
                var coutT=value.TaskCost;
                var coutVariance=value.TaskCostVariance;
                var travail=value.TaskWork;
                var travailVariance=value.TaskWorkVariance;
                if (debutTache>=borne1 && finTache<=borne2) {
                  
                  sumAch=parseFloat(sumAch+ach);
                  
                  count1++;
                }else if (debutTache<borne1 && finTache<=borne2 && finTache>borne1) {
                  
                  var diff1= calculateBusinessDays(borne1, finTache);
                  var diff2= calculateBusinessDays(debutTache, finTache);
                  var ach1=parseFloat(ach*(diff1/diff2));                  
                  sumAch=parseFloat(sumAch+ach1);

                  

                  count1++;
                }else if (debutTache>=borne1 && debutTache<borne2 && finTache>borne2) {
                  var diff3=calculateBusinessDays(debutTache, borne2);
                  var diff4=calculateBusinessDays(debutTache, finTache);

                  var ach11=parseFloat(ach*(diff3/diff4));
                  sumAch=parseFloat(parseFloat(sumAch)+parseFloat(ach11));

                  

                  count1++;                  
                }else if (debutTache<borne1 && finTache>borne2) {
                  var diff5=calculateBusinessDays(borne1,borne2);
                  var diff6=calculateBusinessDays(debutTache, finTache);

                  var ach111=parseFloat(ach*(diff5/diff6));
                  sumAch=parseFloat(parseFloat(sumAch)+parseFloat(ach111));

                 

                  count1++;
                  // console.log('-----------------------------');
                  // console.log("diff5= "+diff5);
                  // console.log("diff6= "+diff6);
                  // console.log("taskDuration= "+taskDuration/8);
                  // console.log("debut tâche1= "+debutTache);
                  // console.log("fin tâche1= "+finTache);
                  // console.log('-----------------------------');
                }
                
              });  
              var achProj=0;
              var montantP=0;
              if (count1!=0) {
                achproj=parseFloat(sumAch/count1);
              }else{
                achproj=0;
              }
              arrSumPourcentage[arrDir.indexOf(dir)]=parseFloat(parseFloat(arrSumPourcentage[arrDir.indexOf(dir)])+parseFloat(achproj));
              arrCountDirection[arrDir.indexOf(dir)]=parseFloat(parseFloat(arrCountDirection[arrDir.indexOf(dir)])+1);
              for (var i = 0; i < arrDir.length; i++) {
                arrAvgPourcentage[i]=0;
                if (arrCountDirection[i]!=0) {
                  arrAvgPourcentage[i]=parseFloat(parseFloat(arrSumPourcentage[i])/parseFloat(arrCountDirection[i])).toFixed(0)
                }
              }
                    var ctx1 = document.getElementById("projchart");
                    ctx1.width=450;
                    if (window.myPieChart1 != undefined)
                    {
                      window.myPieChart1.destroy();
                    }

                    var ValeurMax = 100;

                    window.myPieChart1 = new Chart(ctx1, {
                      type: 'horizontalBar',
                      data: {
                        labels: arrDir ,
                        datasets: [{
                          data: arrAvgPourcentage,
                          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                              "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                              "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                              "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                              "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                              "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                              "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                              "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                              "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                              "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",
                              "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
                        }]
                      },
                      options:{
                        responsive: true,
                      
                      legend: { display: false },
                        plugins:{
                      labels: {
                        render: 'label',
                        fontColor: '#000',
                        position: 'outside'
                      }
                    },

                        scales: {
                            xAxes: [{
                              display: true,
                              ticks: {
                                        beginAtZero:true,
                                        min: 0,
                                        max: 100
                                    },
                              scaleLabel: {
                                display: true,
                                labelString: '% Pourcentage achévevement'
                              },
                          
                            }],
                            yAxes: [{
                              display: true,
                              //type: 'logarithmic',
                              scaleLabel: {
                                  display: true,
                                  labelString: 'Noms des projets'
                                },

                            }]
                          }  },
                    });

      }   
    });
  }
  chrgerChart();
}




//Load Number Of All Issues
function LoadProblemFilter()
{
  var nbreIssue = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Issues?&$filter=ProjectId eq guid'"+ProjectSelected+"'",     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;              
          
            $.each(dataResults, function(key, value) 
            {
                 var titreIssue = value.Title;
                 if(titreIssue != null)
                  {
                    nbreIssue ++;
                  }
                  
            });  
            document.getElementById("actIssue").innerHTML = nbreIssue;             
        }
});
}
LoadProblemFilter();


//Load Number Of All Risks
function LoadRisksFilter()
{
  var nbreRisks = 0;

  $.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Risks?&$filter=ProjectId eq guid'"+ProjectSelected+"'",     
                    method: "GET",
                    dataType: "json",
                    headers: {Accept: "application/json;odata=verbose"},       
                    success: function(data) {     
                    var dataResults = data.d.results;              
          
            $.each(dataResults, function(key, value) 
            {
                 var titreRisks = value.Title;
                 if(titreRisks != null)
                  {
                    nbreRisks ++;
                  }
                  
            });  
            document.getElementById("actRisk").innerHTML = nbreRisks;             
        }
});
}
LoadRisksFilter();


}


//******************************************************************End Of Filter*************************************************************
else
{

MainFilterDirectionProject();
}

}