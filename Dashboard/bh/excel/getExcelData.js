<!doctype html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!-- Meta, title, CSS, favicons, etc. -->
  
  <link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Dashboard/excel_BH/css/bootstrap.min.css" >
  <link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Dashboard/excel_BH/css/bootstrap.css" >
  <link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Dashboard/excel_BH/css/style.css" >
  <link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Dashboard/excel_BH/css/achevement.css"  >
  <link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Dashboard/excel_BH/css/w3.css" >
  <link rel="stylesheet" href="/sites/PWA/_catalogs/masterpage/Dashboard/excel_BH/css/fontawesome.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  


  <!-- Font Awesome -->
  <!-- NProgress -->
  <style type="text/css">
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
            border-radius: 1em;
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
  </style>



</head>
<body style="font-family: serif;">



 <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="border-radius: 5px; box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 100%);">
    <ul class="nav navbar-right top-nav"  style="padding-left: 0px; padding-right: 0px;width: 40%;">
        <h3 id="titre" style="color: white; float: left; margin-bottom: 0px;margin-top: 0px;">Test Affichage Nom & Note : 
        </h3>
    </ul>
    
</nav>
<div id="table-container"></div>


</body>
<script src="/sites/PWA/_catalogs/masterpage/Dashboard/excel_BH/javascript/jquery-3.5.1.js"></script>

<script src="/sites/PWA/_catalogs/masterpage/Dashboard/excel_BH/javascript/conToKM.js"></script>
<script src="/sites/PWA/_catalogs/masterpage/Dashboard/excel_BH/javascript/accessibility.js"></script>
<script type="/sites/PWA/_catalogs/masterpage/Dashboard/excel_BH/javascript/moment-with-locales.js"></script>
<script type="/sites/PWA/_catalogs/masterpage/Dashboard/excel_BH/javascript/custom.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.17.3/dist/xlsx.full.min.js"></script>



<script type="text/javascript"> 
var fileUrl = "/sites/PWA/Test_x0020_DCR/Test.xlsx";
var apiUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetFileByServerRelativeUrl('" + fileUrl + "')/$value";
$.ajax({
    url: apiUrl,
    method: "GET",
    headers: {
        "Accept": "application/octet-stream"
    },
    responseType: "arraybuffer",
    success: function (data) {
        var workbook = XLSX.read(data, {type: 'array'});

        var sheetName = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[sheetName];
        var json = XLSX.utils.sheet_to_json(worksheet, {header: 1});

        var table = $("<table>");
        $.each(json, function (i, row) {
          r=row[i]
          console.log('cel '+r[0])
            var $tr = $("<tr>");
            $.each(row, function (j, cell) {

                var $td = $("<td>").text(cell);
                $tr.append($td);
            });
            table.append($tr);
        });
        $("#table-container").empty().append(table);
    },
    error: function (error) {
        console.log(error);
    }
});




</script>
    
</body>