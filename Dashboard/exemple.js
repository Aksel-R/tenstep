<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/css/bootstrap.min.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/css/bootstrap.css"  rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/css/style.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/css/achevement.css"  rel="stylesheet">
    <link  href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/css/dataTables.bootstrap4.min.css"  rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/css/w3.css" rel="stylesheet">
    <link href="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/css/jquery.dataTables.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <style>
    h1#pageTitle {
        display: none;
    }
    .modal {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  animation-name: show;
  animation-duration: 0.5s
}

.modal-content {
  position: relative;
  background-color: #fff;
  margin: 10% auto;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

@keyframes show {
  0% {
    display: none;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
}

.modal-header {
  padding: 12px;
  background-color: grey;
  color: white;
}

.modal-body {
  padding: 12px;
}

.modal-footer {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 12px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 16px;
}

.close:hover,
.close:focus {
  color: black;
  cursor: pointer;
}

    </style>
</head>

<body id="page-top">

 <div id="container" style="height: 400px"></div>

 <div id="demo-modal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <span class='close'>X</span>
      <h2>Modal Header</h2>
    </div>
    <div class="modal-body" id="modalBody">
      
      <p>Some other text...</p>
    </div>
    <div class="modal-footer">
      <h3>Modal Footer</h3>
    </div>
  </div>
</div>


<div class="tableFixHead" style="overflow-y:auto;height: 240px" >
                                            <table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjet1">
                                                <thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">
                                                    <tr>
                                                        <th style="text-align:center;">Nom de projet</th>
                                                        <th style="text-align:center;">% achèvement</th>
                                                        <th style="text-align:center;">Début</th>
                                                        <th style="text-align:center;">Fin</th>
                                                    </tr>
                                                </thead>
                                                <tbody>              
                                                </tbody>
                                            </table>
                                        </div>

<div class="col-sm-2" onclick="projetParstatut();" style="max-width: 14%;padding-right: 5px;padding-left: 5px;"><div class=" rounded-lg p-2 shadow" style="background-color: aliceblue;"> <h2 class="h6 font-weight-bold text-center mb-4" id="chartVal">Clôturés</h2><div class="progress mx-auto" data-value="22"> <span class="progress-left"><span class="progress-bar border-success" id="leftDegCloture"></span></span><span class="progress-right"><span class="progress-bar border-success" id="rightDegCloture" style="transform: rotate(79.2deg);"></span></span><div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center"><div class="h4 font-weight-bold">22<sup class="small">%</sup></div></div></div><!-- END --><!-- Demo info --><div class="row text-center mt-4"><div class="col-12"><div class="h4 font-weight-bold mb-0">18</div><span class="small text-gray">Projets</span></div><div class="col-6"></div></div><!-- END --></div></div>


<script  src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/javascript/jquery3.4.1.js"></script>
    <script  src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/javascript/Chart.min.js"></script>
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/ressourcesParProjet1/javascript/filter.js"></script>
    <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/Ressources_Projet/javascript/moment-with-locales.min.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <script type="text/javascript">

var modal = document.getElementById('demo-modal');
//var btn = document.getElementById('open-modal');
var close = modal.getElementsByClassName('close')[0];

function projetParstatut(){
    var stat=document.getElementById("chartVal").innerHTML;

    document.getElementById("modalBody").innerHTML=stat;
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
}









var responseSelectSponsor=responseSelectSponsor || [];
        var urlSelectSponsor= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Direction&$filter=Direction%20ne%20null";
        function loadSelectSponsor(){
          $.ajax({
                        url: urlSelectSponsor,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseSelectSponsor = responseSelectSponsor.concat(data.d.results);
                            if (data.d.__next) {
                                urlSelectSponsor = data.d.__next;
                                loadSelectSponsor();
                            }
                            
                            
                            var dataArray=[];
                            var directionArray=[];
                            $.each(responseSelectSponsor, function (key, value) {
                                var dir=value.Direction;
                                if (directionArray.indexOf(dir)<0) {
                                    directionArray.push(dir);
                                    dataArray.push(1);
                                }else{
                                    dataArray[directionArray.indexOf(dir)]+=1;
                                }
                            });
                            Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    xAxis: {
        categories: directionArray
    },

    plotOptions: {
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        //alert('Category: ' + this.category + ', value: ' + this.y);
                        var att1=this.category;
                        var att2=this.y;
                        openModal(att1,att2);
                    }
                }
            }
        }
    },

    series: [{
        data: dataArray
    }]
});
                        }
                    });
        }
        loadSelectSponsor();




function openModal(att1,att2){
    

    document.getElementById("modalBody").innerHTML=
    // When the user clicks the button, open the modal.
'<div class="tableFixHead" style="overflow-y:auto;height: 240px" >'+
                                            '<table class="table table-bordered table-hover table-striped" style="border-radius:15px" id="tableProjet">'+
                                                '<thead style="background-image: linear-gradient(225deg, #dce9f4 20%, #8eb8da 80%);color: black; ">'+
                                                    '<tr>'+
                                                        '<th style="text-align:center;">Nom de projet</th>'+
                                                        '<th style="text-align:center;">% achèvement</th>'+
                                                        '<th style="text-align:center;">Début</th>'+
                                                        '<th style="text-align:center;">Fin</th>'+
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
    // tableaux = document.getElementById("tableProjet");
    //  tr1 = tableaux.getElementsByTagName("tr");
    //  if(tr1.length>0){        
    //       $('#tableProjet tbody').empty();
    //  }

    var responseAnalyseStatut = responseAnalyseStatut || [];
        var urlAnalyseStatut = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate&$filter=Direction%20eq%20%27"+att1+"%27";
        function loadAnalyseStatut() {
            $.ajax({
                url: urlAnalyseStatut,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseAnalyseStatut = responseAnalyseStatut.concat(data.d.results);
                    if (data.d.__next) {
                        urlAnalyseStatut = data.d.__next;
                        loadAnalyseStatut();
                    }
                    $.each(responseAnalyseStatut, function (key, value) {
                        var nomP=value.ProjectName;
                        var achP=value.ProjectPercentCompleted;
                        var deb=value.ProjectStartDate;
                        var debutP=moment(deb).format("DD-MM-YYYY");
                        var fin=value.ProjectFinishDate;
                        var finP=moment(fin).format("DD-MM-YYYY");
                         var tr;
                         tr = $("<tr>");
                         tr.append("<td style='text-align:left'>" + nomP + "</td>");//0
                         tr.append("<td>" + achP+ "%</td>"); //
                         tr.append("<td>" + debutP + "</td>"); //4
                         tr.append("<td>"+ finP +"</td>"); //5
                         
                                
                         $('#tableProjet tbody').append(tr);
                    });
                    
                }
            });
        }
        loadAnalyseStatut();
}

    var responseAnalyseStatut1 = responseAnalyseStatut1 || [];
        var urlAnalyseStatut1 = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectPercentCompleted,ProjectStartDate,ProjectFinishDate";
        function loadAnalyseStatut1() {
            $.ajax({
                url: urlAnalyseStatut1,
                method: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" },
                success: function (data) {
                    responseAnalyseStatut1 = responseAnalyseStatut1.concat(data.d.results);
                    if (data.d.__next) {
                        urlAnalyseStatut1 = data.d.__next;
                        loadAnalyseStatut1();
                    }
                    $.each(responseAnalyseStatut1, function (key, value) {
                        var nomP=value.ProjectName;
                        var achP=value.ProjectPercentCompleted;
                        var deb=value.ProjectStartDate;
                        var debutP=moment(deb).format("DD-MM-YYYY");
                        var fin=value.ProjectFinishDate;
                        var finP=moment(fin).format("DD-MM-YYYY");
                         var tr;
                         tr = $("<tr>");
                         tr.append("<td style='text-align:left' onclick='opentablemodal()' id='cell1'>" + nomP + "</td>");//0
                         tr.append("<td>" + achP+ "%</td>"); //
                         tr.append("<td>" + debutP + "</td>"); //4
                         tr.append("<td>"+ finP +"</td>"); //5
                         
                                
                         $('#tableProjet1 tbody').append(tr);
                    });
                    
                }
            });
        }
        loadAnalyseStatut1();


        function opentablemodal(){
               var stat=document.getElementById("cell1").innerHTML;

    document.getElementById("modalBody").innerHTML=stat;
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

        }

        </script>
</body>

</html>