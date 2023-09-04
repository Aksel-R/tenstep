<!doctype html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!-- Meta, title, CSS, favicons, etc. -->
  
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/Dashboard/excel_BH/css/bootstrap.min.css" >
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/Dashboard/excel_BH/css/bootstrap.css" >
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/Dashboard/excel_BH/css/style.css" >
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/Dashboard/excel_BH/css/achevement.css"  >
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/Dashboard/excel_BH/css/w3.css" >
  <link rel="stylesheet" href="/sites/bhcom/_catalogs/masterpage/Dashboard/excel_BH/css/fontawesome.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  


  <!-- Font Awesome -->
  <!-- NProgress -->
  <style type="text/css">
    .ms-core-listMenu-verticalBox,
        .ms-core-listMenu-horizontalBox {
            font-size: 0.9em;
        }
  .navbar-inverse {
            background-color: #337ab7;
            border-color: #337ab7;
        }


        .btn-group-vertical>.btn-group:after,
        .btn-group-vertical>.btn-group:before,
        .btn-toolbar:after,
        .btn-toolbar:before,
        .clearfix:after,
        .clearfix:before,
        .container1-fluid:after,
        .container1-fluid:before,
        .container1:after,
        .container1:before,
        .dl-horizontal dd:after,
        .dl-horizontal dd:before,
        .form-horizontal .form-group:after,
        .form-horizontal .form-group:before,
        .modal-footer:after,
        .modal-footer:before,
        .modal-header:after,
        .modal-header:before,
        .nav:after,
        .nav:before,
        .navbar-collapse:after,
        .navbar-collapse:before,
        .navbar-header:after,
        .navbar-header:before,
        .navbar:after,
        .navbar:before,
        .pager:after,
        .pager:before,
        .panel-body:after,
        .panel-body:before,
        .row:after,
        .row:before {
            display: none;
            content: " ";
        }
        span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}
th {
    font-size: smaller;
}
text.highcharts-credits {
    display: none;
}
.panel-primary {
    border-color: #337ab7;
    box-shadow: 0px 4px 8px 0px rgb(0 0 0);
    border-radius: 6px;
}

.panel-primary>.panel-heading {
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
}

.header1 {
    
    border: solid;
    border-color: #99a6b1;
    
}


table {
            border-collapse: collapse;
            border-radius: 5px;
            overflow: hidden;
        }
       .tableFixHead thead th {
        position: sticky;
        top: 0;
      }
 .ms-rtestate-field h1, h1.ms-rteElement-H1, .ms-rtestate-field h2, h2.ms-rteElement-H2 {
    line-height: 1.4;
    color: #444444;
}
th {
    background-color: #337ab7;
    color: #fff;
}

.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
    display: none;
}
  </style>



</head>
<body style="font-family: serif;">



 <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="border-radius: 5px; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 100%);">
    <ul class="nav navbar-right top-nav"  style="padding-left: 0px; padding-right: 0px;width: 40%;">
        <h3 id="titre" style="color: white; float: left; margin-bottom: 0px;margin-top: 0px;">Recherche Notes Clients Par Identifiant : 
        </h3>
    </ul>
    
</nav>
<div class="x_panel" style="width:100%; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 50%);border-radius: 5px;">
  <div class="form-group">
      <label for="exampleInputEmail1"style="margin-bottom: 10px;margin-left: 10px;margin-top: 10px;">Identifiant</label>
      <input class="form-control form-control-lg" type="text" id="numInpt" placeholder="Identifiant"style="margin-left: 12px;width: 98%;"onkeypress="return event.keyCode != 13;"/>
      <small id="emailHelp" class="form-text text-muted"style="margin-left: 12px;">Veuillez insérer l'identifiant pour faire apparaître la raison sociale et la note appropriée.</small>
  </div>
  <input type="button" class="btn btn-primary" style="margin-bottom: 10px;margin-left: 10px;background-color: #337ab7;color: #fff;" id="btnGetValues" value="Recherche" />
</div>

<div id="tableContainer">
  <table class="table table-striped  jambo_table bulk_action no-footer-border" id="tableaux" style="margin-top: 15px;box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 100%);">
      <thead>
          <tr>
            <th style="border-radius:5px 0px 0px 0px;width: 10%; ">Identifiant</th>
            <th style="width: 25%;">Raison sociale</th>
            <th style="border-radius:0px 2px 0px 0px;width: 65%;">Note</th>                            
          </tr>
      </thead>
      <tbody></tbody>
  </table>
</div>


</body>
<script src="/sites/bhcom/_catalogs/masterpage/Dashboard/excel_BH/javascript/jquery-3.5.1.js"></script>

<script src="/sites/bhcom/_catalogs/masterpage/Dashboard/excel_BH/javascript/conToKM.js"></script>
<script src="/sites/bhcom/_catalogs/masterpage/Dashboard/excel_BH/javascript/accessibility.js"></script>
<script type="/sites/bhcom/_catalogs/masterpage/Dashboard/excel_BH/javascript/moment-with-locales.js"></script>
<script type="/sites/bhcom/_catalogs/masterpage/Dashboard/excel_BH/javascript/custom.min.js"></script>
<script type="text/javascript" src="https://oss.sheetjs.com/sheetjs/xlsx.full.min.js"></script>

<script type="text/javascript"> 
   $('#btnGetValues').click(function () {
    $('#tableaux tbody').empty();
    
        
        $num=$('#numInpt').val();
        var responseSearsh=responseSearsh||[];
        var urlSearsh=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Notation')/items?$filter=Title%20eq%27"+$num+"%27";
        console.log('urlSearsh= '+urlSearsh);
        function loadSearsh() {
                  var nbre = 0;

                  $.ajax({
                      url: urlSearsh,
                      method: "GET",
                      dataType: "json",
                      headers: { Accept: "application/json;odata=verbose" },
                      success: function (data) {
                          responseSearsh = responseSearsh.concat(data.d.results);
                          if (data.d.__next) {
                              urlSearsh = data.d.__next;
                              loadSearsh();
                          }

                          if (!(data.d.__next)){
                            if (responseSearsh.length==0) {
                              var id=$num;
                              if (id=="") {
                                alert("Veuillez insérer l'identifiant pour faire apparaître la raison sociale et la note appropriée.");
                              }else
                              alert("Aucun élément n'est associé au numéro d'identification "+id);
                            }
                            
                            $.each(responseSearsh, function (key, value) {
                                var nom= value.Raison_x0020_sociale;
                                var note=value.Note_x0020_2022;
                                var tr;
                                tr = $("<tr class='even pointer'>");
                                tr.append("<td>" + $num + "</td>");
                                tr.append("<td>" + nom + "</td>");
                                tr.append("<td>" + note + "</td>");
                                $('#tableaux').append(tr);
                            });
                            
                          }
                          
                          
                      }
                  });
              }
              loadSearsh();
    });
   var input = document.getElementById("numInpt");
    input.addEventListener("keypress", function(event) {
      if(event.which == 13) 
      {
        $('#tableaux tbody').empty();
        $num=$('#numInpt').val();
        var responseSearsh=responseSearsh||[];
        var urlSearsh=_spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('Notation')/items?$filter=Title%20eq%27"+$num+"%27";
        console.log('urlSearsh= '+urlSearsh);
        function loadSearsh() {
                  var nbre = 0;

                  $.ajax({
                      url: urlSearsh,
                      method: "GET",
                      dataType: "json",
                      headers: { Accept: "application/json;odata=verbose" },
                      success: function (data) {
                          responseSearsh = responseSearsh.concat(data.d.results);
                          if (data.d.__next) {
                              urlSearsh = data.d.__next;
                              loadSearsh();
                          }
                          if (!(data.d.__next)){
                            
                            if (responseSearsh.length==0) {
                              var id=$num;
                              if (id=="") {
                                alert("Veuillez insérer l'identifiant pour faire apparaître la raison sociale et la note appropriée.");
                              }else
                              alert("Aucun élément n'est associé au numéro d'identification "+id);
                            }
                            $.each(responseSearsh, function (key, value) {
                                var nom= value.Raison_x0020_sociale;
                                var note=value.Note_x0020_2022;
                                var tr;
                                tr = $("<tr class='even pointer'>");
                                tr.append("<td>" + $num + "</td>");
                                tr.append("<td>" + nom + "</td>");
                                tr.append("<td>" + note + "</td>");
                                $('#tableaux').append(tr);
                            });
                            
                          }
                          
                          
                      }
                  });
              }
              loadSearsh();
      }
      
    });
</script>
    
</body>