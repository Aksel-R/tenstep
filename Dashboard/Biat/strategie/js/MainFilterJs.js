function mainProgrammeFilter(){

    document.getElementById("overlay").style.display = "block";
      jQuery(document).ready(function() {
        jQuery('#overlay').fadeOut(2600);
        //jQuery('#wrapper').fadeIn(3000);
         
    });

  $("#programme-details1").css("display", "block");
  $("#programme-details2").css("display", "block");
  $("#programme-details3").css("display", "block");
  $("#programme-details4").css("display", "block");
  $("#programme-details5").css("display", "block");




  tableaux = document.getElementById("tableaux");
  tr1 = tableaux.getElementsByTagName("tr");
  if(tr1.length>0){         
       $('#tableaux tbody').empty();
  }

  var programmeSelctedName=getSelectedText("mylist2");
  
  var SousProgSelctedName=getSelectedText("mylist1");


if(programmeSelctedName !="")
{


    var responseProgrammeKPI = responseProgrammeKPI ||[];
     var urlProgrammeKPI = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=Programme%20eq %27"+programmeSelctedName+"%27%20and%20EnterpriseProjectTypeName%20eq %27"+SousProgSelctedName+"%27 and Types_de_Projet eq 'Page_Maitre'";
     //console.log("urlProgrammeKPI " + urlProgrammeKPI);
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

                          moment.locale('fr');

                          var sommeProjet = 0;

            $.each(responseProgrammeKPI, function(key, value) 
            {
                var nomProj = value.ProjectName;
                if(nomProj)
                {
                  sommeProjet++;
                }

            });
           

             
              document.getElementById("nbProjetProg").innerHTML = sommeProjet;

     }  
  });
}
filterProgrammeKPI();



    var responseProgrammeProjetKPI = responseProgrammeProjetKPI ||[];
     var urlProgrammeProjetKPI = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=Programme%20eq %27"+programmeSelctedName+"%27%20and%20EnterpriseProjectTypeName%20eq %27"+SousProgSelctedName+"%27 and Types_de_Projet eq 'Programme'";

     function filterProgrammeProjetKPI(){
          $.ajax({url:  urlProgrammeProjetKPI,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseProgrammeProjetKPI = responseProgrammeProjetKPI.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlProgrammeProjetKPI = data.d.__next;
                                            filterProgrammeProjetKPI();
                                        }  

                          moment.locale('fr');

                         var pourcentageAchev = 0;
                          var achevTotal=0;


                          var projCost = 0;
                          var projcostvariance = 0;
                          var projWork = 0;
                          var pworkvariance = 0;
                          var sommeCoutReel = 0;
                          var sommeCoutRestant = 0;
                          var ProjectActualWork=0;
                          var datedebutProg;
                          var datefinProg;
                          var dureeProj;
                          var ProjectDuration=0;
                          var ProjectName;
                          var achevementPer;
moment.locale('fr');
            $.each(responseProgrammeProjetKPI, function(key, value) 
            {
                        ProjectName = value.ProjectName;
                        var pCost = parseInt(value.ProjectCost);
                        var proActualWork = parseInt(value.ProjectActualWork);
                        var pcostVar = parseInt(value.ProjectCostVariance);
                        achevementPer = value.ProjectPercentCompleted;
                        var pwork = parseInt(value.ProjectActualWork);
                        var pwvariance = parseInt(value.ProjectWorkVariance);
                        var coutReel=parseFloat(value.ProjectActualCost).toFixed(0);

                        datedebutProg = moment(value.ProjectStartDate).format("DD-MM-YYYY");
                        datefinProg = moment(value.ProjectFinishDate).format("DD-MM-YYYY");

                        var datedebutProg1 = moment(value.ProjectStartDate);
                        var datefinProg1 = moment(value.ProjectFinishDate);

                        projCost = projCost + pCost;
                        projcostvariance = projcostvariance + pcostVar;
                        projWork = projWork + pwork;
                        pworkvariance = pworkvariance + pwvariance;
                        ProjectActualWork = ProjectActualWork + proActualWork;


                        sommeCoutReel=parseFloat(parseFloat(sommeCoutReel)+parseFloat(coutReel)).toFixed(0);

                        sommeCoutRestant = parseFloat(projCost).toFixed(0) - parseFloat(sommeCoutReel).toFixed(0);

                        dureeProj = parseFloat(moment(datedebutProg1).diff(moment(datefinProg1), 'days', true)).toFixed(0);

            });
           

              document.getElementById("CostProgramProj").innerHTML = conToMill(projCost);
              document.getElementById("CostProgramProjConsomme").innerHTML =conToMill(sommeCoutReel);
              document.getElementById("CostProgramProjRest").innerHTML =conToMill(sommeCoutRestant);
              document.getElementById("CostVarProgProj").innerHTML=conToMill(projcostvariance);

              document.getElementById("debutProgProj").innerHTML=datedebutProg;
              document.getElementById("finProgProj").innerHTML=datefinProg;
              document.getElementById("dureeProgProj").innerHTML=dureeProj;


              document.getElementById("TravailActualProgProj").innerHTML=conToMill(projWork);
              document.getElementById("varianceTravailProgProj").innerHTML=conToMill(pworkvariance);


              document.getElementById("achevementProgProj").innerHTML= "<p>"+achevementPer+"%<progress id='' max='100' value='"+achevementPer+"' style='width: 75%; background-color:green; height:10px;' ></progress></p>";
             

              document.getElementById("nomProgram").innerHTML=ProjectName;

     }  
  });
}
filterProgrammeProjetKPI();










var urlDateGlissementFilterProg = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectId,ProjectStartDate,ProjectFinishDate&$filter=Types_de_Projet eq 'Page_Maitre' and EnterpriseProjectTypeName%20eq%27"+SousProgSelctedName+"%27 and Programme eq '"+programmeSelctedName+"'";
var responseDateGlissementFilterProg = responseDateGlissementFilterProg ||[];

function getDateGlissementFilterProg(){
  $.ajax({url:  urlDateGlissementFilterProg,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseDateGlissementFilterProg = responseDateGlissementFilterProg.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDateGlissementFilterProg = data.d.__next;
                                            getDateGlissementFilterProg();
                                        } 
                var idProjetG=[];
                var dateDebProjetG=[];
                var dateFinProjetG=[];
                var dateFinRefG=[];
                  
            $.each(responseDateGlissementFilterProg, function(key, value) 
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
calculGlissementGlobalFilterProgramme(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG);



}   
});
}
getDateGlissementFilterProg();











var urlDateBaseGlissementFilterProgramme = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectBaselines?$select=ProjectId,ProjectBaselineFinishDate";
var responseBaseDateGlissementFilterProgramme = responseBaseDateGlissementFilterProgramme ||[];
function calculGlissementGlobalFilterProgramme(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG){
   $.ajax({url:  urlDateBaseGlissementFilterProgramme,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseBaseDateGlissementFilterProgramme = responseBaseDateGlissementFilterProgramme.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlDateBaseGlissementFilterProgramme = data.d.__next;
                                            calculGlissementGlobalFilterProgramme(idProjetG,dateDebProjetG,dateFinProjetG,dateFinRefG);
                                        } 
                                        var durReel=[];
                                        var durRef=[];
                                        var glissArray=[];
                                        var avgGliss=0;
                                        var sumGliss=0;
                  
              
            $.each(responseBaseDateGlissementFilterProgramme, function(key, value) 
            { 
              var idProjBaseline=value.ProjectId;
              var finRefProj=value.ProjectBaselineFinishDate;
              for (var i =0; i<idProjetG.length; i++) {
                if (idProjBaseline==idProjetG[i]) {
                  dateFinRefG[i]=finRefProj;
                }
                //idProjetG[i]
                //console.log("idProjetG " + finRefProj);
              }

            });
             moment.locale('fr');
            

            /* ////console.log("idProjetG = "+ idProjetG.join());
             ////console.log("dateDebProjetG = "+ dateDebProjetG.join());
            ////console.log("dateFinProjetG = "+ dateFinProjetG.join());
             ////console.log("dateFinRefG = "+ dateFinRefG.join());

             ////console.log("idProjetG length = "+ idProjetG.length);
             ////console.log("dateDebProjetG length = "+ dateDebProjetG.length);
             ////console.log("dateFinProjetG length = "+ dateFinProjetG.length);
             ////console.log("dateFinRefG length = "+ dateFinRefG.length);*/
            
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
            //////console.log("glissArray= "+glissArray.join());
            for (var i = 0; i < glissArray.length; i++) {
              sumGliss+=parseFloat(glissArray[i])
            }
            //////console.log("sumGliss= "+ sumGliss);
            avgGliss=parseFloat(sumGliss/glissArray.length).toFixed(0);
            if(isNaN(avgGliss))
            {
              avgGliss=0;
            }
            ////console.log("avgGliss est vérifier par la somme = "+avgGliss);
            document.getElementById("glissementprogProj").innerHTML=avgGliss+"%";
}           
});
}


         var responseTabProjFiltre2 = responseTabProjFiltre2 || [];
        var urlTabProjFiltre2 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=EnterpriseProjectTypeName%20eq%27"+SousProgSelctedName+"%27%20and%20Programme%20eq%27"+programmeSelctedName+"%27 and Types_de_Projet eq 'Page_Maitre'";
        //console.log(urlTabProjFiltre2);
        function LoadTableProjectsFiltre2() {
var sommeCoutReels = 0;
            var sommecoutRestant =0;
            $.ajax({
                url: urlTabProjFiltre2,

                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseTabProjFiltre2 = responseTabProjFiltre2.concat(data.d.results);
                    if (data.d.__next) {
                        urlTabProjFiltre2 = data.d.__next;
                        LoadTableProjectsFiltre2();
                    }
                    tableaux = document.getElementById("tableaux");
                    tr1 = tableaux.getElementsByTagName("tr");
                    if(tr1.length>0){
                    $('#tableaux tbody').empty();
                    }
                    $.each(responseTabProjFiltre2, function (key, value) {

                        var projetId = value.ProjectId;
                        var Types_des_projets = value.Types_des_projets;

                        if(Types_des_projets == null)
                        {
                            Types_des_projets = "Pas de Type de projet"
                        }

                        var Prog = "";
                        var Sous_Prog = "";
                        if (value.Programme == null) {
                            Prog = "Pas de programme assigné";
                        }
                        else{
                            Prog = value.Programme;
                        }
                         if (value.Sous_Programme == null) {
                            Sous_Prog = "Pas de sous programme assigné";
                        }
                        else{
                            Sous_Prog = value.Sous_Programme;
                        }
                        
                        var nomProjet = value.ProjectName;
                        var pOwner = value.ProjectOwnerName;
                        var projStartDate = value.ProjectStartDate;
                        var projfinishdate = value.ProjectFinishDate;
                        var projCost = parseFloat(value.ProjectCost).toFixed(3);
                        var prPercentCpl = parseFloat(value.ProjectPercentCompleted).toFixed(0);
                        var linkProjectSite = value.ProjectWorkspaceInternalUrl;
                        moment.locale('fr');
                        if (projStartDate != null) {
                            var projStartDate = moment(projStartDate).format('L');
                        }

                        if (projfinishdate != null) {
                            var projfinishdate = moment(projfinishdate).format('L');
                        }

                        var pType = value.EnterpriseProjectTypeName;
                        var drProject = value.Programme;
                        var projetPhase = value.ProjectPhase;


                        if ((projetPhase == null) || (projetPhase.toString() == "") || (projetPhase.toString() == "null")) {
                            projetPhase = "not assigned";
                        }

                        var coutReel=parseFloat(value.ProjectActualCost).toFixed(0);
                        sommeCoutReels=parseFloat(parseFloat(sommeCoutReels)+parseFloat(coutReel)).toFixed(0);

                        sommecoutRestant = parseFloat(projCost - sommeCoutReels).toFixed(0); 

                        
                        var pCost = parseInt(value.ProjectCost);
                        var pcostVar = parseInt(value.ProjectCostVariance);
                        var pwork = parseInt(value.ProjectWork);
                        var pwvariance = parseInt(value.ProjectWorkVariance);

                        var tr;
                        tr = $("<tr class='even pointer'>");
                        tr.append("<td>" + nomProjet + "</td>");//0
                        tr.append("<td><a href=https://m365x56447071.sharepoint.com/sites/Secteur_Bank/project%20detail%20pages/schedule.aspx?projuid="+projetId+"&ret=0 id='redirectLink' target='_blank'><img src='/sites/Secteur_Bank/_catalogs/masterpage/Dashboard/portFolioDashboard/img/link.png' class='img-rounded' alt='Cinque Terre' width='20px' height='20px'></a></td>");//1
                        tr.append("<td>" + Prog + "</td>"); //2
                        tr.append("<td>" + Types_des_projets + "</td>"); //2
                        tr.append("<td>" + pOwner + "</td>"); //2
                        tr.append("<td>" + projStartDate + "</td>"); //3
                        tr.append("<td>" + projfinishdate + "</td>"); //4
                        tr.append("<td>" + conToMill(projCost) + " </td>");//5
                        tr.append("<td>" + conToMill(sommeCoutReels) + " </td>");//5
                        tr.append("<td>" + conToMill(sommecoutRestant) + " </td>");//5


                        tr.append('<td style="text-align:center;font-size: medium;">'+prPercentCpl+'%<progress id="" max="100" value="'+prPercentCpl+'" style="width: 100%; height:2vh;"></progress></td>'); //10
                        tr.append("<td style='display:none;'>" + projetPhase + " </td>"); //11
                        tr.append("<td style='display:none;'>" + pType + " </td>"); //12
                        tr.append("<td style='display:none;'>" + drProject + " </td>"); //13
                        tr.append("<td style='display:none;'>" + pOwner + " </td>"); //14
                        tr.append("<td style='display:none;'>" + pCost + " </td>"); //15
                        tr.append("<td style='display:none;'>" + pcostVar + " </td>"); //16
                        tr.append("<td style='display:none;'>" + pwork + " </td>"); //17
                        tr.append("<td style='display:none;'>" + pwvariance + " </td>"); //18
                        tr.append("<td style='display:none;'>" + projetId + " </td>"); //19
                        $('#tableaux').append(tr);

                    });
                }
            });

        }
        LoadTableProjectsFiltre2();


        getPagination('#tableaux');

        function getPagination(table) {

            var lastPage = 1;

            $('#maxRows')
                .on('change', function (evt) {
                    //$('.paginationprev').html('');                      // reset pagination

                    lastPage = 1;
                    $('.pagination')
                        .find('li')
                        .slice(1, -1)
                        .remove();
                    var trnum = 0; // reset tr counter
                    var maxRows = parseInt($(this).val()); // get Max Rows from select option

                    if (maxRows == 5000) {
                        $('.pagination').hide();
                    } else {
                        $('.pagination').show();
                    }

                    var totalRows = $(table + ' tbody tr').length; // numbers of rows
                    $(table + ' tr:gt(0)').each(function () {
                        // each TR in  table and not the header
                        trnum++; // Start Counter
                        if (trnum > maxRows) {
                            // if tr number gt maxRows

                            $(this).hide(); // fade it out
                        }
                        if (trnum <= maxRows) {
                            $(this).show();
                        } // else fade in Important in case if it ..
                    }); //  was fade out to fade it in
                    if (totalRows > maxRows) {
                        // if tr total rows gt max rows option
                        var pagenum = Math.ceil(totalRows / maxRows); // ceil total(rows/maxrows) to get ..
                        //  numbers of pages
                        for (var i = 1; i <= pagenum;) {
                            // for each page append pagination li
                            $('.pagination #prev')
                                .before(
                                    '<li data-page="' +
                                    i +
                                    '">\
                                  <span>' +
                                    i++ +
                                    '<span class="sr-only">(current)</span></span>\
                                </li>'
                                )
                                .show();
                        } // end for i
                    } // end if row count > max rows
                    $('.pagination [data-page="1"]').addClass('active'); // add active class to the first li
                    $('.pagination li').on('click', function (evt) {
                        // on click each page
                        evt.stopImmediatePropagation();
                        evt.preventDefault();
                        var pageNum = $(this).attr('data-page'); // get it's number

                        var maxRows = parseInt($('#maxRows').val()); // get Max Rows from select option

                        if (pageNum == 'prev') {
                            if (lastPage == 1) {
                                return;
                            }
                            pageNum = --lastPage;
                        }
                        if (pageNum == 'next') {
                            if (lastPage == $('.pagination li').length - 2) {
                                return;
                            }
                            pageNum = ++lastPage;
                        }

                        lastPage = pageNum;
                        var trIndex = 0; // reset tr counter
                        $('.pagination li').removeClass('active'); // remove active class from all li
                        $('.pagination [data-page="' + lastPage + '"]').addClass('active'); // add active class to the clicked
                        // $(this).addClass('active');                  // add active class to the clicked
                        limitPagging();
                        $(table + ' tr:gt(0)').each(function () {
                            // each tr in table not the header
                            trIndex++; // tr index counter
                            // if tr index gt maxRows*pageNum or lt maxRows*pageNum-maxRows fade if out
                            if (
                                trIndex > maxRows * pageNum ||
                                trIndex <= maxRows * pageNum - maxRows
                            ) {
                                $(this).hide();
                            } else {
                                $(this).show();
                            } //else fade in
                        }); // end of for each tr in table
                    }); // end of on click pagination list
                    limitPagging();
                })
                .val(5000)
                .change();

            // end of on select change

            // END OF PAGINATION
        }

        function limitPagging() {
            // alert($('.pagination li').length)

            if ($('.pagination li').length > 7) {
                if ($('.pagination li.active').attr('data-page') <= 3) {
                    $('.pagination li:gt(5)').hide();
                    $('.pagination li:lt(5)').show();
                    $('.pagination [data-page="next"]').show();
                } if ($('.pagination li.active').attr('data-page') > 3) {
                    $('.pagination li:gt(0)').hide();
                    $('.pagination [data-page="next"]').show();
                    for (let i = (parseInt($('.pagination li.active').attr('data-page')) - 2); i <= (parseInt($('.pagination li.active').attr('data-page')) + 2); i++) {
                        $('.pagination [data-page="' + i + '"]').show();

                    }

                }
            }
        }

        $(function () {
            // Just to append id number for each row
            $('table tr:eq(20)').prepend('<th  style="display:none;"> ID </th>');

            var id = 0;

            $('table tr:gt(20)').each(function () {
                id++;
                $(this).prepend('<td style="display:none;">' + id + '</td>');
            });
        });







//*********************************linetme*******************************

var responseTimelineProjProg = responseTimelineProjProg ||[];
var urlTimelineProjProg = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Programme,ProjectName,ProjectStartDate,ProjectFinishDate,ProjectOwnerName&$filter=Types_de_Projet eq 'Page_Maitre' and EnterpriseProjectTypeName eq '"+SousProgSelctedName+"' and Programme%20eq%27"+programmeSelctedName+"%27";
   //console.log("urlTimelineProjProg  " + urlTimelineProjProg);
   function loadTimeLineProjProg(){

          $.ajax({url:  urlTimelineProjProg,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseTimelineProjProg = responseTimelineProjProg.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlTimelineProjProg = data.d.__next;
                                            loadTimeLineProjProg();
                                        }
                          var dureeProg;
                                                  
                          var datas=[];
                          var startArr=[];
                       
            $.each(responseTimelineProjProg, function(key, value) 
            {
              moment.locale('fr');
               var nomProj=value.ProjectName;
               var dateDeb=value.ProjectStartDate;
               
             
              
               var projStartDate = moment(dateDeb).format('L');
               var dateFin=value.ProjectFinishDate;
               var projFinishtDate = moment(dateFin).format('L');
               var projStartDate1 = moment(dateDeb);
               var projFinishtDate1 = moment(dateFin);
               var owner=value.ProjectOwnerName;
               var desc='Date début programme: '+projStartDate + ' <br> ● Date fin programme: ' + projFinishtDate;

              var dureeProj = parseFloat(moment(projFinishtDate1).diff(moment(projStartDate1), 'days', true)).toFixed(0);
              var nomProj="<tspan style='fill:#00FF00'>● </tspan><strong>Nom de Projet : <br>"+value.ProjectName+"</strong><br>Durée (j) : "+dureeProj;
              datas.push({
                label: nomProj,
                name: desc,
                description: owner
               });
              startArr.push(moment(dateDeb));


               
               
            });

            sortDataTimeLine(startArr,datas);
            Highcharts.chart('container1', {
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
        text: ''+programmeSelctedName+''
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
    }]/*,
        responsive: {
        rules: [{
            condition: {
                maxWidth: 420
            }}]}*/




});
              
       }
  });
   }  
loadTimeLineProjProg();


}




}
