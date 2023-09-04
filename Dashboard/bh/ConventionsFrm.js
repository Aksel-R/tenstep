
<head>
    <meta charset="utf-8">
    <link href="/sites/bhcom/_catalogs/masterpage/ConventionsFrm/css/jquery.dataTables.min.css" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    
<style>


.form-item__element {
  display: inline-block;
  padding: 0.5em;
  vertical-align: middle;
  background: #fff;
  border-radius: 4px;
  border: 1px solid gray;
  width:200px;
}

.form-item__element option {
  color: #000;
  font-size: 12pt ;
}


 .ms-core-overlay{
     background-color: white !important
 }

span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}


  #tableaux
{
   border-radius: 5px ;
  overflow: hidden;
  width:100%;
   
}


   #tableaux thead {
 background-color: #337ab7;
    border-color: #337ab7;
    color: white;
  }


.stat-digit{
    font-size: 25px;
    font-family: cursive;
}


.ms-rtestate-field h4, h4.ms-rteElement-H4 {
    line-height: 1.6;
    color: black;
}


.form-item__element {
  display: inline-block;
  padding: 0.5em;
  vertical-align: middle;
  background: #fff;
  color: black;
  border-radius: 4px;
  border: 1px solid gray;
  width:200px;
}

.form-item__element option {
  color: #000;
  font-size: 12pt ;
}


   .navbar{
 background-color: #337ab7;
    border-color: #337ab7;
    color: white;
    padding:10px;
    margin: 0 0 10px 0;
    text-align:left;
    border-radius : 5px ;
  }


    #mylist1 {
      background-repeat: no-repeat;
    width: 20%;
    text-align: center;
    font-size: 15px;
  
    border-radius : 5px;
  }

option:empty
{
 display:none;
}


.table-bordered>tbody>tr>td, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>td, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>thead>tr>th {
}




.glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: "Glyphicons Halflings";
    font-style: normal;
    font-weight: 200;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.w3-spin {
    animation: w3-spin 2s infinite linear;
}

.w3-jumbo {
    font-size: 25px!important;
    color:green;
}



span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}

.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
    display: none;
}

.fit-picture {
    width: 80px;
}

th {
    font-size: smaller;
}
table.dataTable thead th, table.dataTable thead td {
    padding: 0px 5px;
    border-bottom: 1px solid #111;
    text-align: center;
}

</style>	
</head>

<body>

 
  <nav class="navbar">
  <span class="navbar-brand mb-0 h3" style="font-size: 15px; font-weight: bold; color : #fff; padding: 5px;">Tableau Conventions Frm</span>
</nav>



                          <table id="tableaux" class="table table-striped table-bordered" >
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Titre</th>
                                <th>Logo</th>
                                <th>Catégorie</th>
                                <th>Crédit Direct <= 15ans:Taux</th>
                                <th>Crédit Direct <= 15ans:Durée</th>
                                <th>Crédit Direct > 15ans : Taux</th>
                                <th>Crédit Direct > 15ans : Durée</th>
                                <th>Crédit Personnel Taux</th>
                                <th>Crédit Personnel Durée</th>
                                <th>CMT Aménagement Taux</th>
                                <th>CMT Aménagement Durée</th>
                                <th>Crédit Achat Voiture Neuve Taux</th>
                                <th>Crédit Achat Voiture Neuve Durée</th>
                                <th>Crédit Achat Voiture Occasion taux</th>
                                <th>Crédit Achat Voiture Occasion Durée</th>
                                
                                
                                <th>Date Signature</th>
                                <th>Date Modification</th>
                                <th>Signataire BH Bank</th>
                                <th>Répertoire Physique</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                                      
                     
                    
    <script src="/sites/bhcom/_catalogs/masterpage/ConventionsFrm/javascript/jquery-3.5.1.js"></script>               
     <script src="/sites/bhcom/_catalogs/masterpage/ConventionsFrm/javascript/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/fixedheader/3.2.0/js/dataTables.fixedHeader.min.js"></script>
     <script src="/sites/bhcom/_catalogs/masterpage/ConventionsFrm/javascript/moment-with-locales.js"></script>               
     <script src="/sites/bhcom/_catalogs/masterpage/ConventionsFrm/javascript/custom.min.js"></script>
     <script src="/sites/bhcom/_catalogs/masterpage/ConventionsFrm/javascript/Chart.min.js"></script>
 



<script type="text/javascript">






    var urlTabConventionsFrm = _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('ConventionsFrm')/items";
    var responseTabConventionsFrm = responseTabConventionsFrm ||[];
    //console.log("urlTabConventionsFrm= "+urlTabConventionsFrm);
    function loadTabConventionsFrm(items, propertyName) {

                $.ajax({url:  urlTabConventionsFrm,          
                                        method: "GET",
                                        dataType: "json",
                                        headers: {Accept: "application/json;odata=verbose"},       
                                        success: function(data) {    
                                        //var dataResults = data.d.results; 
                                        responseTabConventionsFrm = responseTabConventionsFrm.concat(data.d.results);
                                            if (data.d.__next) {
                                                urlTabConventionsFrm = data.d.__next;
                                                loadTabConventionsFrm();
                                            }
                                          var table = $('#tableaux').DataTable();
 
                                            var rows = table
                                                .rows()
                                                .remove()
                                                .draw();
                              
                 var t = $('#tableaux').DataTable();

                 var arr = [];
                  var result = [];

                $.each(responseTabConventionsFrm, function(key, value) 
                {
                    
   
                  moment.locale('fr');
                  var titre="";
                  if (value.Title!=null) {
                    titre=value.Title;
                  }
                  
                  var categorie="";
                  if (value.Cat_x00e9_gorie!=null) {
                    categorie=value.Cat_x00e9_gorie;
                  }
                  var creditDirectInf15ansTaux="";
                  if (value.Cr_x00e9_dit_x0020_Direct_x0020_!=null) {
                    creditDirectInf15ansTaux=value.Cr_x00e9_dit_x0020_Direct_x0020_ ;
                  }
                  var creditDirectInf15ansDuree="";
                  if (value.Cr_x00e9_dit_x0020_Direct_x0020_1!=null) {
                    creditDirectInf15ansDuree=value.Cr_x00e9_dit_x0020_Direct_x0020_1 ;
                  }
                  var creditPersonnelTaux="";
                  if (value.Cr_x00e9_dit_x0020_Personnel_x00!=null) {
                    creditPersonnelTaux=value.Cr_x00e9_dit_x0020_Personnel_x00;
                  }
                  var creditPersonnelDuree="";
                  if (value.Cr_x00e9_dit_x0020_Personnel_x001!=null) {
                    creditPersonnelDuree=value.Cr_x00e9_dit_x0020_Personnel_x001;
                  }
                  var CTMAménagementTaux="";
                  if (value.CMT_x0020_Am_x00e9_nagement_x002!=null) {
                    CTMAménagementTaux=value.CMT_x0020_Am_x00e9_nagement_x002;
                  }
                  var CTMAménagementDuree="";
                  if (value.CMT_x0020_Am_x00e9_nagement_x0021!=null) {
                    CTMAménagementDuree=value.CMT_x0020_Am_x00e9_nagement_x0021;
                  }
                  var creditAchatVoitureNeuveTaux="";
                  if (value.Cr_x00e9_dit_x0020_Achat_x0020_V!=null) {
                    creditAchatVoitureNeuveTaux=value.Cr_x00e9_dit_x0020_Achat_x0020_V;
                  }
                  var creditAchatVoitureNeuveDuree="";
                  if (value.Cr_x00e9_dit_x0020_Achat_x0020_V1!=null) {
                    creditAchatVoitureNeuveDuree=value.Cr_x00e9_dit_x0020_Achat_x0020_V1;
                  }
                  var logo="";
                  if (value.Logo!=null) {
                    var url=value.Logo.Url;
                    logo='<img class="fit-picture" src="'+url+'" alt="Grapefruit slice atop a pile of other slices">';
                  }
                  var signataireBhBank="";
                  if (value.Signataire_x0020_BH_x0020_Bank!=null) {
                    signataireBhBank=value.Signataire_x0020_BH_x0020_Bank;
                  }
                  var signataireDuPartenaire="";
                  if (value.Signataire_x0020_du_x0020_Parten!=null) {
                    signataireDuPartenaire=value.Signataire_x0020_du_x0020_Parten;
                  }
                  var dateSign=value.Date_x0020_Signature;
                  var dateSignature= "";
                  if (dateSign!=null) {
                    dateSignature=moment(dateSign).format('L')
                  }
                  var creditAchatVoitureOccasionTaux="";
                  if (value.Cr_x00e9_dit_x0020_Achat_x0020_V0!=null) {
                    creditAchatVoitureOccasionTaux=value.Cr_x00e9_dit_x0020_Achat_x0020_V0;
                  }
                  var creditAchatVoitureOccasionDuree="";
                  if (value.Cr_x00e9_dit_x0020_Achat_x0020_V2!=null) {
                    creditAchatVoitureOccasionDuree=value.Cr_x00e9_dit_x0020_Achat_x0020_V2;
                  }
                  var dateModif=value.Date_x0020_Modification;
                  var dateModification="";
                  if (dateModif!=null) {
                    dateModification=moment(dateModif).format('L');
                  }
                  var creditSup15Taux="";
                  if (value.Cr_x00e9_dit_x0020_Direct_x0020_0!=null) {
                    creditSup15Taux=value.Cr_x00e9_dit_x0020_Direct_x0020_0;
                  }
                  var creditSup15Duree="";
                  if (value.Cr_x00e9_dit_x0020_Direct_x0020_2!=null) {
                    creditSup15Duree=value.Cr_x00e9_dit_x0020_Direct_x0020_2;
                  }
                  var repertoirePhysique="";
                  if (value.R_x00e9_pertoire_x0020_Physique!=null) {
                    repertoirePhysique=value.R_x00e9_pertoire_x0020_Physique;
                  }
                  var id=value.ID;
                   

                  var contentId=value.ContentTypeId;
                  var chemin='http://fsharepoint/sites/bhcom/_layouts/15/start.aspx#/Lists/ConventionsFrm/DispForm.aspx?ID='+id+'&Source=http%3A%2F%2Ffsharepoint%2Fsites%2Fbhcom%2FLists%2FConventionsFrm%2FAllItems%2Easpx%23InplviewHash096e2024%2Dbb68%2D4057%2Da86e%2Deb9b44dffdf9%3D&ContentTypeId='+contentId;
                  var chemin1='<a href="'+chemin+'">'+titre+'</a>';
                  t.row.add( [
                      id,
                      chemin1,
                      logo,
                      categorie,
                      creditDirectInf15ansTaux,
                      creditDirectInf15ansDuree,
                      creditSup15Taux,
                      creditSup15Duree,
                      creditPersonnelTaux,
                      creditPersonnelDuree,
                      CTMAménagementTaux,
                      CTMAménagementDuree,
                      creditAchatVoitureNeuveTaux,
                      creditAchatVoitureNeuveDuree,
                      creditAchatVoitureOccasionTaux,
                      creditAchatVoitureOccasionDuree,
                      
                      
                      dateSignature,
                      dateModification,
                      signataireBhBank,
                      repertoirePhysique
                  ] ).draw( false );
                   
               //signataireDuPartenaire,
                });


                
               
    }   
    });
    }         
    loadTabConventionsFrm(); 

$(document).ready(function () {
    // Setup - add a text input to each footer cell
    $('#tableaux thead tr')
        .clone(false)
        .addClass('filters')
        .appendTo('#tableaux thead');
 
    var table = $('#tableaux').DataTable({
        orderCellsTop: true,
        fixedHeader: true,
        initComplete: function () {
            var api = this.api();
 
            // For each column
            api
                .columns()
                .eq(0)
                .each(function (colIdx) {
                    // Set the header cell to contain the input element
                    var cell = $('.filters th').eq(
                        $(api.column(colIdx).header()).index()
                    );
                    var title = $(cell).text();
                    $(cell).html('<input type="text" placeholder="' + title + '" />');
 
                    // On every keypress in this input
                    $(
                        'input',
                        $('.filters th').eq($(api.column(colIdx).header()).index())
                    )
                        .off('keyup change')
                        .on('keyup change', function (e) {
                            e.stopPropagation();
 
                            // Get the search value
                            $(this).attr('title', $(this).val());
                            var regexr = '({search})'; //$(this).parents('th').find('select').val();
 
                            var cursorPosition = this.selectionStart;
                            // Search the column for that value
                            api
                                .column(colIdx)
                                .search(
                                    this.value != ''
                                        ? regexr.replace('{search}', '(((' + this.value + ')))')
                                        : '',
                                    this.value != '',
                                    this.value == ''
                                )
                                .draw();
 
                            $(this)
                                .focus()[0]
                                .setSelectionRange(cursorPosition, cursorPosition);
                        });
                });
        },
    });
});



</script>