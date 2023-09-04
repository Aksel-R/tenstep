function p1(){
    var urlFilterSelected= "";
  var countSelected=0;
  
  var axeStrategique=document.getElementById("myList1").value;
  if (axeStrategique!="") {       
      urlFilterSelected+="%20and%20AxeStrategique%20eq%27"+axeStrategique+"%27";  
      countSelected++;  
  }
  var chantierSel=document.getElementById("myList2").value;
  if (chantierSel!="") {
      urlFilterSelected+="%20and%20Chantier%20eq%27"+chantierSel+"%27";  
      countSelected++;  
  }
  var programmeSel=document.getElementById("myList8").value;
  if (programmeSel!="") {
      urlFilterSelected+="%20and%20Programme%20eq%27"+programmeSel+"%27";  
      countSelected++; 
  }
  var projetSel=document.getElementById("myList3").value;
  if (projetSel!="") {
      urlFilterSelected+="%20and%20ProjectName%20eq%27"+projetSel+"%27";  
      countSelected++;  
  }
  var sponsorSel=document.getElementById("myList4").value;
  if (sponsorSel!="") {
      urlFilterSelected+="%20and%20Sponsor%20eq%27"+sponsorSel+"%27"; 
      countSelected++;   
  }
  var cpSel=document.getElementById("myList5").value;
  if (cpSel!="") {
      urlFilterSelected+="%20and%20ProjectOwnerName%20eq%27"+cpSel+"%27";  
      countSelected++;  
  }
  var methodSel=document.getElementById("myList6").value;
  if (methodSel!="") {
      urlFilterSelected+="%20and%20Typedegestion%20eq%27"+methodSel+"%27";  
      countSelected++;  
  }
  var structureSel=document.getElementById("myList7").value;
  if (structureSel!=""){
    countSelected++; 
  }
        document.getElementById("modalTitle").innerHTML="Détails des projets";
    document.getElementById("modalTitle1").innerHTML= "Clôturés";
    document.getElementById("modalBody").innerHTML=
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Date début</th>'+
                                                        '<th style="text-align:center;">Date fin</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Coût</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };

    var responseAnalyseStatutClotureFilter = responseAnalyseStatutClotureFilter || [];
        var urlAnalyseStatutClotureFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectId,ProjectName,ProjectOwnerName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectCost&$filter=Sousprojet%20eq%27Non%27%20and%20Etatdeprojet%20eq%27Clôturé%27"+urlFilterSelected;
      
        function loadAnalyseStatutClotureFilter(){
            $.ajax({
                        url: urlAnalyseStatutClotureFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAnalyseStatutClotureFilter = responseAnalyseStatutClotureFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlAnalyseStatutClotureFilter = data.d.__next;
                                loadAnalyseStatutClotureFilter();
                            }
                            
                            

                            $.each(responseAnalyseStatutClotureFilter, function (key, value) {
                                 if (structureSel!=""){
                                        var structurePr=value.Structuresimpliquees;
                                      if (structurePr==null) {
                                        structurePr="";
                                      }
                                      var words = structurePr.split(', ');
                                        sortTab(words);
                                        var myNewString="";
                                        for(var i=0; i < words.length; i++){
                                          if(i==0){
                                            myNewString+=words[i];
                                          }else{
                                            myNewString+=", "+words[i];
                                          }

                                        }
                                        if (structureSel==myNewString){
                                          var NomP=value.ProjectName;
                                            var deb=value.ProjectStartDate;
                                            
                                            var debutP=moment(deb).format("DD-MM-YYYY");

                                            var fin=value.ProjectFinishDate;
                                            

                                            var finP=moment(fin).format("DD-MM-YYYY");
                                            var ach=value.ProjectPercentCompleted;
                                            var cost=value.ProjectCost;
                                            var chefProj=value.ProjectOwnerName;
                                           var tr;
                                              tr = $("<tr>");
                                              tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                              tr.append("<td>"+ chefProj +"</td>");
                                              tr.append("<td>"+ debutP+ "</td>"); //
                                              tr.append("<td>"+ finP + "</td>"); //4
                                              tr.append("<td>"+ ach +"</td>"); //5
                                              tr.append("<td>"+ cost +"</td>"); //5
                                                                     
                                              $('#tableProjStatut tbody').append(tr);

                                        }
                                      }else{
                                        var NomP=value.ProjectName;
                                        var deb=value.ProjectStartDate;
                                        
                                        var debutP=moment(deb).format("DD-MM-YYYY");

                                        var fin=value.ProjectFinishDate;
                                        

                                        var finP=moment(fin).format("DD-MM-YYYY");
                                        var ach=value.ProjectPercentCompleted;
                                        var cost=value.ProjectCost;
                                        var chefProj=value.ProjectOwnerName;
                                       var tr;
                                          tr = $("<tr>");
                                          tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                          tr.append("<td>"+ chefProj +"</td>");
                                          tr.append("<td>"+ debutP+ "</td>"); //
                                          tr.append("<td>"+ finP + "</td>"); //4
                                          tr.append("<td>"+ ach +"</td>"); //5
                                          tr.append("<td>"+ cost +"</td>"); //5
                                                                 
                                          $('#tableProjStatut tbody').append(tr);

                                      }
                                
                            });
                            
                        }
                    });
        }
        loadAnalyseStatutClotureFilter();
}


function p2(){
    var urlFilterSelected= "";
  var countSelected=0;
  
  var axeStrategique=document.getElementById("myList1").value;
  if (axeStrategique!="") {       
      urlFilterSelected+="%20and%20AxeStrategique%20eq%27"+axeStrategique+"%27";  
      countSelected++;  
  }
  var chantierSel=document.getElementById("myList2").value;
  if (chantierSel!="") {
      urlFilterSelected+="%20and%20Chantier%20eq%27"+chantierSel+"%27";  
      countSelected++;  
  }
  var programmeSel=document.getElementById("myList8").value;
  if (programmeSel!="") {
      urlFilterSelected+="%20and%20Programme%20eq%27"+programmeSel+"%27";  
      countSelected++; 
  }
  var projetSel=document.getElementById("myList3").value;
  if (projetSel!="") {
      urlFilterSelected+="%20and%20ProjectName%20eq%27"+projetSel+"%27";  
      countSelected++;  
  }
  var sponsorSel=document.getElementById("myList4").value;
  if (sponsorSel!="") {
      urlFilterSelected+="%20and%20Sponsor%20eq%27"+sponsorSel+"%27"; 
      countSelected++;   
  }
  var cpSel=document.getElementById("myList5").value;
  if (cpSel!="") {
      urlFilterSelected+="%20and%20ProjectOwnerName%20eq%27"+cpSel+"%27";  
      countSelected++;  
  }
  var methodSel=document.getElementById("myList6").value;
  if (methodSel!="") {
      urlFilterSelected+="%20and%20Typedegestion%20eq%27"+methodSel+"%27";  
      countSelected++;  
  }
  var structureSel=document.getElementById("myList7").value;
  if (structureSel!=""){
    countSelected++; 
  }
        document.getElementById("modalTitle").innerHTML="Détails des projets";
    document.getElementById("modalTitle1").innerHTML= "StandBy";
    document.getElementById("modalBody").innerHTML=
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Date début</th>'+
                                                        '<th style="text-align:center;">Date fin</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Coût</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };

    var responseAnalyseStatutArretFilter = responseAnalyseStatutArretFilter || [];
        var urlAnalyseStatutArretFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectId,ProjectName,ProjectOwnerName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectCost&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected;
      
        function loadAnalyseStatutArretFilter(){
            $.ajax({
                        url: urlAnalyseStatutArretFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAnalyseStatutArretFilter = responseAnalyseStatutArretFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlAnalyseStatutArretFilter = data.d.__next;
                                loadAnalyseStatutArretFilter();
                            }
                            
                            

                            $.each(responseAnalyseStatutArretFilter, function (key, value) {
                                 if (structureSel!=""){
                                        var structurePr=value.Structuresimpliquees;
                                      if (structurePr==null) {
                                        structurePr="";
                                      }
                                      var words = structurePr.split(', ');
                                        sortTab(words);
                                        var myNewString="";
                                        for(var i=0; i < words.length; i++){
                                          if(i==0){
                                            myNewString+=words[i];
                                          }else{
                                            myNewString+=", "+words[i];
                                          }

                                        }
                                        if (structureSel==myNewString){
                                          var statut=value.Etatdeprojet;
                                if (statut.indexOf("StandBy")>=0) {
                                  statut="StandBy";
                                  var NomP=value.ProjectName;
                                    var deb=value.ProjectStartDate;
                                    
                                    var debutP=moment(deb).format("DD-MM-YYYY");

                                    var fin=value.ProjectFinishDate;
                                    

                                    var finP=moment(fin).format("DD-MM-YYYY");
                                    var ach=value.ProjectPercentCompleted;
                                    var cost=value.ProjectCost;
                                    var chefProj=value.ProjectOwnerName;
                                   var tr;
                                      tr = $("<tr>");
                                      tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                      tr.append("<td>"+ chefProj +"</td>");
                                      tr.append("<td>"+ debutP+ "</td>"); //
                                      tr.append("<td>"+ finP + "</td>"); //4
                                      tr.append("<td>"+ ach +"</td>"); //5
                                      tr.append("<td>"+ cost +"</td>"); //5
                                                             
                                      $('#tableProjStatut tbody').append(tr);
                                    }
                                        }
                                      }else{
                                        var statut=value.Etatdeprojet;
                                        if (statut.indexOf("StandBy")>=0) {
                                          statut="StandBy";
                                          var NomP=value.ProjectName;
                                            var deb=value.ProjectStartDate;
                                            
                                            var debutP=moment(deb).format("DD-MM-YYYY");

                                            var fin=value.ProjectFinishDate;
                                            

                                            var finP=moment(fin).format("DD-MM-YYYY");
                                            var ach=value.ProjectPercentCompleted;
                                            var cost=value.ProjectCost;
                                            var chefProj=value.ProjectOwnerName;
                                           var tr;
                                              tr = $("<tr>");
                                              tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                              tr.append("<td>"+ chefProj +"</td>");
                                              tr.append("<td>"+ debutP+ "</td>"); //
                                              tr.append("<td>"+ finP + "</td>"); //4
                                              tr.append("<td>"+ ach +"</td>"); //5
                                              tr.append("<td>"+ cost +"</td>"); //5
                                                                     
                                              $('#tableProjStatut tbody').append(tr);
                                            }
                                        }
                                

                                

                            });
                            
                        }
                    });
        }
        loadAnalyseStatutArretFilter();
}  

function p3(){
        var urlFilterSelected= "";
  var countSelected=0;
  
  var axeStrategique=document.getElementById("myList1").value;
  if (axeStrategique!="") {       
      urlFilterSelected+="%20and%20AxeStrategique%20eq%27"+axeStrategique+"%27";  
      countSelected++;  
  }
  var chantierSel=document.getElementById("myList2").value;
  if (chantierSel!="") {
      urlFilterSelected+="%20and%20Chantier%20eq%27"+chantierSel+"%27";  
      countSelected++;  
  }
  var programmeSel=document.getElementById("myList8").value;
  if (programmeSel!="") {
      urlFilterSelected+="%20and%20Programme%20eq%27"+programmeSel+"%27";  
      countSelected++; 
  }
  var projetSel=document.getElementById("myList3").value;
  if (projetSel!="") {
      urlFilterSelected+="%20and%20ProjectName%20eq%27"+projetSel+"%27";  
      countSelected++;  
  }
  var sponsorSel=document.getElementById("myList4").value;
  if (sponsorSel!="") {
      urlFilterSelected+="%20and%20Sponsor%20eq%27"+sponsorSel+"%27"; 
      countSelected++;   
  }
  var cpSel=document.getElementById("myList5").value;
  if (cpSel!="") {
      urlFilterSelected+="%20and%20ProjectOwnerName%20eq%27"+cpSel+"%27";  
      countSelected++;  
  }
  var methodSel=document.getElementById("myList6").value;
  if (methodSel!="") {
      urlFilterSelected+="%20and%20Typedegestion%20eq%27"+methodSel+"%27";  
      countSelected++;  
  }
  var structureSel=document.getElementById("myList7").value;
  if (structureSel!=""){
    countSelected++; 
  }
        document.getElementById("modalTitle").innerHTML="Détails des projets";
    document.getElementById("modalTitle1").innerHTML= "En cours";
    document.getElementById("modalBody").innerHTML=
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Date début</th>'+
                                                        '<th style="text-align:center;">Date fin</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Coût</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };

    var responseAnalyseStatutEnCoursFilter = responseAnalyseStatutEnCoursFilter || [];
        var urlAnalyseStatutEnCoursFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectId,ProjectName,ProjectOwnerName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectCost&$filter=Sousprojet%20eq%27Non%27%20and%20Etatdeprojet%20eq%27En cours%27"+urlFilterSelected;
      
        function loadAnalyseStatutEnCoursFilter(){
            $.ajax({
                        url: urlAnalyseStatutEnCoursFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAnalyseStatutEnCoursFilter = responseAnalyseStatutEnCoursFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlAnalyseStatutEnCoursFilter = data.d.__next;
                                loadAnalyseStatutEnCoursFilter();
                            }
                            
                            

                            $.each(responseAnalyseStatutEnCoursFilter, function (key, value) {
                                 if (structureSel!=""){
                                        var structurePr=value.Structuresimpliquees;
                                      if (structurePr==null) {
                                        structurePr="";
                                      }
                                      var words = structurePr.split(', ');
                                        sortTab(words);
                                        var myNewString="";
                                        for(var i=0; i < words.length; i++){
                                          if(i==0){
                                            myNewString+=words[i];
                                          }else{
                                            myNewString+=", "+words[i];
                                          }

                                        }
                                        if (structureSel==myNewString){
                                          statut="StandBy";
                                              var NomP=value.ProjectName;
                                            var deb=value.ProjectStartDate;
                                            
                                            var debutP=moment(deb).format("DD-MM-YYYY");

                                            var fin=value.ProjectFinishDate;
                                            

                                            var finP=moment(fin).format("DD-MM-YYYY");
                                            var ach=value.ProjectPercentCompleted;
                                            var cost=value.ProjectCost;
                                            var chefProj=value.ProjectOwnerName;
                                           var tr;
                                              tr = $("<tr>");
                                              tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                              tr.append("<td>"+ chefProj +"</td>");
                                              tr.append("<td>"+ debutP+ "</td>"); //
                                              tr.append("<td>"+ finP + "</td>"); //4
                                              tr.append("<td>"+ ach +"</td>"); //5
                                              tr.append("<td>"+ cost +"</td>"); //5
                                                                     
                                              $('#tableProjStatut tbody').append(tr);
                                        }
                                      }else{
                                        statut="StandBy";
                                  var NomP=value.ProjectName;
                                            var deb=value.ProjectStartDate;
                                            
                                            var debutP=moment(deb).format("DD-MM-YYYY");

                                            var fin=value.ProjectFinishDate;
                                            

                                            var finP=moment(fin).format("DD-MM-YYYY");
                                            var ach=value.ProjectPercentCompleted;
                                            var cost=value.ProjectCost;
                                            var chefProj=value.ProjectOwnerName;
                                           var tr;
                                              tr = $("<tr>");
                                              tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                              tr.append("<td>"+ chefProj +"</td>");
                                              tr.append("<td>"+ debutP+ "</td>"); //
                                              tr.append("<td>"+ finP + "</td>"); //4
                                              tr.append("<td>"+ ach +"</td>"); //5
                                              tr.append("<td>"+ cost +"</td>"); //5
                                                                     
                                              $('#tableProjStatut tbody').append(tr);
                                      }
                                
                                  
                              

                                

                            });
                            
                        }
                    });
        }
        loadAnalyseStatutEnCoursFilter();
}

function p4(){
            var urlFilterSelected= "";
  var countSelected=0;
  
  var axeStrategique=document.getElementById("myList1").value;
  if (axeStrategique!="") {       
      urlFilterSelected+="%20and%20AxeStrategique%20eq%27"+axeStrategique+"%27";  
      countSelected++;  
  }
  var chantierSel=document.getElementById("myList2").value;
  if (chantierSel!="") {
      urlFilterSelected+="%20and%20Chantier%20eq%27"+chantierSel+"%27";  
      countSelected++;  
  }
  var programmeSel=document.getElementById("myList8").value;
  if (programmeSel!="") {
      urlFilterSelected+="%20and%20Programme%20eq%27"+programmeSel+"%27";  
      countSelected++; 
  }
  var projetSel=document.getElementById("myList3").value;
  if (projetSel!="") {
      urlFilterSelected+="%20and%20ProjectName%20eq%27"+projetSel+"%27";  
      countSelected++;  
  }
  var sponsorSel=document.getElementById("myList4").value;
  if (sponsorSel!="") {
      urlFilterSelected+="%20and%20Sponsor%20eq%27"+sponsorSel+"%27"; 
      countSelected++;   
  }
  var cpSel=document.getElementById("myList5").value;
  if (cpSel!="") {
      urlFilterSelected+="%20and%20ProjectOwnerName%20eq%27"+cpSel+"%27";  
      countSelected++;  
  }
  var methodSel=document.getElementById("myList6").value;
  if (methodSel!="") {
      urlFilterSelected+="%20and%20Typedegestion%20eq%27"+methodSel+"%27";  
      countSelected++;  
  }
  var structureSel=document.getElementById("myList7").value;
  if (structureSel!=""){
    countSelected++; 
  }
        document.getElementById("modalTitle").innerHTML="Détails des projets";
    document.getElementById("modalTitle1").innerHTML= "En retard";
    document.getElementById("modalBody").innerHTML=
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Date début</th>'+
                                                        '<th style="text-align:center;">Date fin</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Coût</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };

    var responseAnalyseStatutRetardFilter = responseAnalyseStatutRetardFilter || [];
        var urlAnalyseStatutRetardFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectId,ProjectName,ProjectOwnerName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectCost&$filter=Sousprojet%20eq%27Non%27"+urlFilterSelected;
      
        function loadAnalyseStatutRetardFilter(){
            $.ajax({
                        url: urlAnalyseStatutRetardFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAnalyseStatutRetardFilter = responseAnalyseStatutRetardFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlAnalyseStatutRetardFilter = data.d.__next;
                                loadAnalyseStatutRetardFilter();
                            }
                            
                            

                            $.each(responseAnalyseStatutRetardFilter, function (key, value) {
                                 if (structureSel!=""){
                                        var structurePr=value.Structuresimpliquees;
                                      if (structurePr==null) {
                                        structurePr="";
                                      }
                                      var words = structurePr.split(', ');
                                        sortTab(words);
                                        var myNewString="";
                                        for(var i=0; i < words.length; i++){
                                          if(i==0){
                                            myNewString+=words[i];
                                          }else{
                                            myNewString+=", "+words[i];
                                          }

                                        }
                                        if (structureSel==myNewString){
                                          var statut=value.Etatdeprojet;
                                            var today=moment().format('DD-MM-YYYY');
                                               var fin=value.ProjectFinishDate;
                                                        

                                                        var finP=moment(fin).format("DD-MM-YYYY");
                                              var achevement=value.ProjectPercentCompleted;
                                              if ((moment(finP).isBefore(today))&&(achevement<100)) {
                                                
                                             
                                                          var NomP=value.ProjectName;
                                                        var deb=value.ProjectStartDate;
                                                        
                                                        var debutP=moment(deb).format("DD-MM-YYYY");

                                                       
                                                        var ach=value.ProjectPercentCompleted;
                                                        var cost=value.ProjectCost;
                                                        var chefProj=value.ProjectOwnerName;
                                                       var tr;
                                                          tr = $("<tr>");
                                                          tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                                          tr.append("<td>"+ chefProj +"</td>");
                                                          tr.append("<td>"+ debutP+ "</td>"); //
                                                          tr.append("<td>"+ finP + "</td>"); //4
                                                          tr.append("<td>"+ ach +"</td>"); //5
                                                          tr.append("<td>"+ cost +"</td>"); //5
                                                                                 
                                                          $('#tableProjStatut tbody').append(tr);
                                                        }

                                        }
                                      }else{
                                        var statut=value.Etatdeprojet;
                                                var today=moment().format('DD-MM-YYYY');
                                       var fin=value.ProjectFinishDate;
                                                

                                                var finP=moment(fin).format("DD-MM-YYYY");
                                      var achevement=value.ProjectPercentCompleted;
                                      if ((moment(finP).isBefore(today))&&(achevement<100)) {
                                        
                                     
                                                  var NomP=value.ProjectName;
                                                var deb=value.ProjectStartDate;
                                                
                                                var debutP=moment(deb).format("DD-MM-YYYY");

                                               
                                                var ach=value.ProjectPercentCompleted;
                                                var cost=value.ProjectCost;
                                                var chefProj=value.ProjectOwnerName;
                                               var tr;
                                                  tr = $("<tr>");
                                                  tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                                  tr.append("<td>"+ chefProj +"</td>");
                                                  tr.append("<td>"+ debutP+ "</td>"); //
                                                  tr.append("<td>"+ finP + "</td>"); //4
                                                  tr.append("<td>"+ ach +"</td>"); //5
                                                  tr.append("<td>"+ cost +"</td>"); //5
                                                                         
                                                  $('#tableProjStatut tbody').append(tr);
                                                }

                                      }
                                
                                

                            });
                            
                        }
                    });
        }
        loadAnalyseStatutRetardFilter();
}

function p5(){
            var urlFilterSelected= "";
  var countSelected=0;
  
  var axeStrategique=document.getElementById("myList1").value;
  if (axeStrategique!="") {       
      urlFilterSelected+="%20and%20AxeStrategique%20eq%27"+axeStrategique+"%27";  
      countSelected++;  
  }
  var chantierSel=document.getElementById("myList2").value;
  if (chantierSel!="") {
      urlFilterSelected+="%20and%20Chantier%20eq%27"+chantierSel+"%27";  
      countSelected++;  
  }
  var programmeSel=document.getElementById("myList8").value;
  if (programmeSel!="") {
      urlFilterSelected+="%20and%20Programme%20eq%27"+programmeSel+"%27";  
      countSelected++; 
  }
  var projetSel=document.getElementById("myList3").value;
  if (projetSel!="") {
      urlFilterSelected+="%20and%20ProjectName%20eq%27"+projetSel+"%27";  
      countSelected++;  
  }
  var sponsorSel=document.getElementById("myList4").value;
  if (sponsorSel!="") {
      urlFilterSelected+="%20and%20Sponsor%20eq%27"+sponsorSel+"%27"; 
      countSelected++;   
  }
  var cpSel=document.getElementById("myList5").value;
  if (cpSel!="") {
      urlFilterSelected+="%20and%20ProjectOwnerName%20eq%27"+cpSel+"%27";  
      countSelected++;  
  }
  var methodSel=document.getElementById("myList6").value;
  if (methodSel!="") {
      urlFilterSelected+="%20and%20Typedegestion%20eq%27"+methodSel+"%27";  
      countSelected++;  
  }
  var structureSel=document.getElementById("myList7").value;
  if (structureSel!=""){
    countSelected++; 
  }
        document.getElementById("modalTitle").innerHTML="Détails des projets";
    document.getElementById("modalTitle1").innerHTML= "Abandonnés";
    document.getElementById("modalBody").innerHTML=
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Date début</th>'+
                                                        '<th style="text-align:center;">Date fin</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Coût</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };

    var responseAnalyseStatutAbandonneFilter = responseAnalyseStatutAbandonneFilter || [];
        var urlAnalyseStatutAbandonneFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectId,ProjectName,ProjectOwnerName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectCost&$filter=Sousprojet%20eq%27Non%27%20and%20Etatdeprojet%20eq%27Abandonné%27"+urlFilterSelected;
      
        function loadAnalyseStatutAbandonneFilter(){
            $.ajax({
                        url: urlAnalyseStatutAbandonneFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAnalyseStatutAbandonneFilter = responseAnalyseStatutAbandonneFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlAnalyseStatutAbandonneFilter = data.d.__next;
                                loadAnalyseStatutAbandonneFilter();
                            }
                            
                            

                            $.each(responseAnalyseStatutAbandonneFilter, function (key, value) {
                                
                        
                                 if (structureSel!=""){
                                        var structurePr=value.Structuresimpliquees;
                                      if (structurePr==null) {
                                        structurePr="";
                                      }
                                      var words = structurePr.split(', ');
                                        sortTab(words);
                                        var myNewString="";
                                        for(var i=0; i < words.length; i++){
                                          if(i==0){
                                            myNewString+=words[i];
                                          }else{
                                            myNewString+=", "+words[i];
                                          }

                                        }
                                        if (structureSel==myNewString){
                                          var NomP=value.ProjectName;
                                var deb=value.ProjectStartDate;
                                
                                var debutP=moment(deb).format("DD-MM-YYYY");

                               var fin=value.ProjectFinishDate;
                                

                                var finP=moment(fin).format("DD-MM-YYYY");
                                var ach=value.ProjectPercentCompleted;
                                var cost=value.ProjectCost;
                                var chefProj=value.ProjectOwnerName;
                               var tr;
                                  tr = $("<tr>");
                                  tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                  tr.append("<td>"+ chefProj +"</td>");
                                  tr.append("<td>"+ debutP+ "</td>"); //
                                  tr.append("<td>"+ finP + "</td>"); //4
                                  tr.append("<td>"+ ach +"</td>"); //5
                                  tr.append("<td>"+ cost +"</td>"); //5
                                                         
                                  $('#tableProjStatut tbody').append(tr);
                                
                                        }
                                      }else{
                                        var NomP=value.ProjectName;
                                var deb=value.ProjectStartDate;
                                
                                var debutP=moment(deb).format("DD-MM-YYYY");

                               var fin=value.ProjectFinishDate;
                                

                                var finP=moment(fin).format("DD-MM-YYYY");
                                var ach=value.ProjectPercentCompleted;
                                var cost=value.ProjectCost;
                                var chefProj=value.ProjectOwnerName;
                               var tr;
                                  tr = $("<tr>");
                                  tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                  tr.append("<td>"+ chefProj +"</td>");
                                  tr.append("<td>"+ debutP+ "</td>"); //
                                  tr.append("<td>"+ finP + "</td>"); //4
                                  tr.append("<td>"+ ach +"</td>"); //5
                                  tr.append("<td>"+ cost +"</td>"); //5
                                                         
                                  $('#tableProjStatut tbody').append(tr);
                                
                                      }
                                  

                                

                            });
                            
                        }
                    });
        }
        loadAnalyseStatutAbandonneFilter();
}
function p6(){
                var urlFilterSelected= "";
  var countSelected=0;
  
  var axeStrategique=document.getElementById("myList1").value;
  if (axeStrategique!="") {       
      urlFilterSelected+="%20and%20AxeStrategique%20eq%27"+axeStrategique+"%27";  
      countSelected++;  
  }
  var chantierSel=document.getElementById("myList2").value;
  if (chantierSel!="") {
      urlFilterSelected+="%20and%20Chantier%20eq%27"+chantierSel+"%27";  
      countSelected++;  
  }
  var programmeSel=document.getElementById("myList8").value;
  if (programmeSel!="") {
      urlFilterSelected+="%20and%20Programme%20eq%27"+programmeSel+"%27";  
      countSelected++; 
  }
  var projetSel=document.getElementById("myList3").value;
  if (projetSel!="") {
      urlFilterSelected+="%20and%20ProjectName%20eq%27"+projetSel+"%27";  
      countSelected++;  
  }
  var sponsorSel=document.getElementById("myList4").value;
  if (sponsorSel!="") {
      urlFilterSelected+="%20and%20Sponsor%20eq%27"+sponsorSel+"%27"; 
      countSelected++;   
  }
  var cpSel=document.getElementById("myList5").value;
  if (cpSel!="") {
      urlFilterSelected+="%20and%20ProjectOwnerName%20eq%27"+cpSel+"%27";  
      countSelected++;  
  }
  var methodSel=document.getElementById("myList6").value;
  if (methodSel!="") {
      urlFilterSelected+="%20and%20Typedegestion%20eq%27"+methodSel+"%27";  
      countSelected++;  
  }
  var structureSel=document.getElementById("myList7").value;
  if (structureSel!=""){
    countSelected++; 
  }
        document.getElementById("modalTitle").innerHTML="Détails des projets";
    document.getElementById("modalTitle1").innerHTML= "Planifiés";
    document.getElementById("modalBody").innerHTML=
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Date début</th>'+
                                                        '<th style="text-align:center;">Date fin</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Coût</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };

    var responseAnalyseStatutPlanifieFilter = responseAnalyseStatutPlanifieFilter || [];
        var urlAnalyseStatutPlanifieFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectId,ProjectName,ProjectOwnerName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectCost&$filter=Sousprojet%20eq%27Non%27%20and%20Etatdeprojet%20eq%27Planifié%27"+urlFilterSelected;
      
        function loadAnalyseStatutPlanifieFilter(){
            $.ajax({
                        url: urlAnalyseStatutPlanifieFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAnalyseStatutPlanifieFilter = responseAnalyseStatutPlanifieFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlAnalyseStatutPlanifieFilter = data.d.__next;
                                loadAnalyseStatutPlanifieFilter();
                            }
                            
                            

                            $.each(responseAnalyseStatutPlanifieFilter, function (key, value) {
                                
                                 if (structureSel!=""){
                                        var structurePr=value.Structuresimpliquees;
                                      if (structurePr==null) {
                                        structurePr="";
                                      }
                                      var words = structurePr.split(', ');
                                        sortTab(words);
                                        var myNewString="";
                                        for(var i=0; i < words.length; i++){
                                          if(i==0){
                                            myNewString+=words[i];
                                          }else{
                                            myNewString+=", "+words[i];
                                          }

                                        }
                                        if (structureSel==myNewString){
                                          var NomP=value.ProjectName;
                                var deb=value.ProjectStartDate;
                                
                                var debutP=moment(deb).format("DD-MM-YYYY");

                               var fin=value.ProjectFinishDate;
                                

                                var finP=moment(fin).format("DD-MM-YYYY");
                                var ach=value.ProjectPercentCompleted;
                                var cost=value.ProjectCost;
                                var chefProj=value.ProjectOwnerName;
                               var tr;
                                  tr = $("<tr>");
                                  tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                  tr.append("<td>"+ chefProj +"</td>");
                                  tr.append("<td>"+ debutP+ "</td>"); //
                                  tr.append("<td>"+ finP + "</td>"); //4
                                  tr.append("<td>"+ ach +"</td>"); //5
                                  tr.append("<td>"+ cost +"</td>"); //5
                                                         
                                  $('#tableProjStatut tbody').append(tr);
                                        }
                                      }else{
                                        var NomP=value.ProjectName;
                                var deb=value.ProjectStartDate;
                                
                                var debutP=moment(deb).format("DD-MM-YYYY");

                               var fin=value.ProjectFinishDate;
                                

                                var finP=moment(fin).format("DD-MM-YYYY");
                                var ach=value.ProjectPercentCompleted;
                                var cost=value.ProjectCost;
                                var chefProj=value.ProjectOwnerName;
                               var tr;
                                  tr = $("<tr>");
                                  tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                  tr.append("<td>"+ chefProj +"</td>");
                                  tr.append("<td>"+ debutP+ "</td>"); //
                                  tr.append("<td>"+ finP + "</td>"); //4
                                  tr.append("<td>"+ ach +"</td>"); //5
                                  tr.append("<td>"+ cost +"</td>"); //5
                                                         
                                  $('#tableProjStatut tbody').append(tr);
                                      }
                     
                                  
                                

                                

                            });
                            
                        }
                    });
        }
        loadAnalyseStatutPlanifieFilter();
}


function p7(){
                var urlFilterSelected= "";
  var countSelected=0;
  
  var axeStrategique=document.getElementById("myList1").value;
  if (axeStrategique!="") {       
      urlFilterSelected+="%20and%20AxeStrategique%20eq%27"+axeStrategique+"%27";  
      countSelected++;  
  }
  var chantierSel=document.getElementById("myList2").value;
  if (chantierSel!="") {
      urlFilterSelected+="%20and%20Chantier%20eq%27"+chantierSel+"%27";  
      countSelected++;  
  }
  var programmeSel=document.getElementById("myList8").value;
  if (programmeSel!="") {
      urlFilterSelected+="%20and%20Programme%20eq%27"+programmeSel+"%27";  
      countSelected++; 
  }
  var projetSel=document.getElementById("myList3").value;
  if (projetSel!="") {
      urlFilterSelected+="%20and%20ProjectName%20eq%27"+projetSel+"%27";  
      countSelected++;  
  }
  var sponsorSel=document.getElementById("myList4").value;
  if (sponsorSel!="") {
      urlFilterSelected+="%20and%20Sponsor%20eq%27"+sponsorSel+"%27"; 
      countSelected++;   
  }
  var cpSel=document.getElementById("myList5").value;
  if (cpSel!="") {
      urlFilterSelected+="%20and%20ProjectOwnerName%20eq%27"+cpSel+"%27";  
      countSelected++;  
  }
  var methodSel=document.getElementById("myList6").value;
  if (methodSel!="") {
      urlFilterSelected+="%20and%20Typedegestion%20eq%27"+methodSel+"%27";  
      countSelected++;  
  }
  var structureSel=document.getElementById("myList7").value;
  if (structureSel!=""){
    countSelected++; 
  }
        document.getElementById("modalTitle").innerHTML="Détails des projets";
    document.getElementById("modalTitle1").innerHTML= "Projet terminés J-90";
    document.getElementById("modalBody").innerHTML=
'<div class="tableFixHead" style="overflow-y:auto;min-height: 50px;max-height: 430px;" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjStatut">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">Chef de projet</th>'+
                                                        '<th style="text-align:center;">Date début</th>'+
                                                        '<th style="text-align:center;">Date fin</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Coût</th>'+
                                                    '</tr>'+
                                                '</thead>'+
                                                '<tbody>'+               
                                                '</tbody>'+
                                            '</table>'+
                                        '</div>';

      modal.style.display = 'block';


    // When the user clicks on 'X', close the modal
    close.onclick = function() {
      modal.style.display = 'none';
    };

    // When the user clicks outside the modal -- close it.
    window.onclick = function(event) {
      if (event.target == modal) {
        // Which means he clicked somewhere in the modal (background area), but not target = modal-content
        modal.style.display = 'none';
      }
    };

    var responseAnalyseStatut90JrsFilter = responseAnalyseStatut90JrsFilter || [];
        var urlAnalyseStatut90JrsFilter = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Structuresimpliquees,ProjectId,ProjectName,ProjectOwnerName,Etatdeprojet,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate,ProjectCost&$filter=Sousprojet%20eq%27Non%27%20and%20Etatdeprojet%20eq%27Clôturé%27"+urlFilterSelected;
      console.log("urlAnalyseStatut90JrsFilter= "+urlAnalyseStatut90JrsFilter);
        function loadAnalyseStatut90JrsFilter(){
            $.ajax({
                        url: urlAnalyseStatut90JrsFilter,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseAnalyseStatut90JrsFilter = responseAnalyseStatut90JrsFilter.concat(data.d.results);
                            if (data.d.__next) {
                                urlAnalyseStatut90JrsFilter = data.d.__next;
                                loadAnalyseStatut90JrsFilter();
                            }
                            
                            

                            $.each(responseAnalyseStatut90JrsFilter, function (key, value) {
                                 if (structureSel!=""){
                                        var structurePr=value.Structuresimpliquees;
                                      if (structurePr==null) {
                                        structurePr="";
                                      }
                                      var words = structurePr.split(', ');
                                        sortTab(words);
                                        var myNewString="";
                                        for(var i=0; i < words.length; i++){
                                          if(i==0){
                                            myNewString+=words[i];
                                          }else{
                                            myNewString+=", "+words[i];
                                          }

                                        }
                                        if (structureSel==myNewString){
                                          moment.locale('fr');
                                var dateJour=moment().format('YYYY-MM-DD');
                                var moisPrec=moment().add('days',-90).format('YYYY-MM-DD');
                                var fin=value.ProjectFinishDate;
                                var finishFormatMoment=moment(fin).format('YYYY-MM-DD');
                              
                                if (moment(finishFormatMoment).isBetween(moisPrec, dateJour)){
                                    
                                    var NomP=value.ProjectName;
                                
                                    var deb=value.ProjectStartDate;
                                    
                                    var debutP=moment(deb).format("DD-MM-YYYY");

                                   
                                    

                                    var finP=moment(fin).format("DD-MM-YYYY");
                                    var ach=value.ProjectPercentCompleted;
                                    var cost=value.ProjectCost;
                                    var chefProj=value.ProjectOwnerName;
                                   var tr;
                                      tr = $("<tr>");
                                      tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                      tr.append("<td>"+ chefProj +"</td>");
                                      tr.append("<td>"+ debutP+ "</td>"); //
                                      tr.append("<td>"+ finP + "</td>"); //4
                                      tr.append("<td>"+ ach +"</td>"); //5
                                      tr.append("<td>"+ cost +"</td>"); //5
                                                             
                                      $('#tableProjStatut tbody').append(tr);
                                }
                                        }
                                      }else{
                                        moment.locale('fr');
                                var dateJour=moment().format('YYYY-MM-DD');
                                var moisPrec=moment().add('days',-90).format('YYYY-MM-DD');
                                var fin=value.ProjectFinishDate;
                                var finishFormatMoment=moment(fin).format('YYYY-MM-DD');
                                
                                if (moment(finishFormatMoment).isBetween(moisPrec, dateJour)){
                                    
                                    var NomP=value.ProjectName;
                                
                                    var deb=value.ProjectStartDate;
                                    
                                    var debutP=moment(deb).format("DD-MM-YYYY");

                                   
                                    

                                    var finP=moment(fin).format("DD-MM-YYYY");
                                    var ach=value.ProjectPercentCompleted;
                                    var cost=value.ProjectCost;
                                    var chefProj=value.ProjectOwnerName;
                                   var tr;
                                      tr = $("<tr>");
                                      tr.append("<td style='text-align:left'>" + NomP + "</td>");//0
                                      tr.append("<td>"+ chefProj +"</td>");
                                      tr.append("<td>"+ debutP+ "</td>"); //
                                      tr.append("<td>"+ finP + "</td>"); //4
                                      tr.append("<td>"+ ach +"</td>"); //5
                                      tr.append("<td>"+ cost +"</td>"); //5
                                                             
                                      $('#tableProjStatut tbody').append(tr);
                                }
                                      }
                                
                                  
                                

                                

                            });
                            
                        }
                    });
        }
        loadAnalyseStatut90JrsFilter();
}
