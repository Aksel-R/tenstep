
<head>
    <meta charset="utf-8">
    <link href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css" rel="stylesheet">
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
 background-image: linear-gradient(225deg,#ddeaf4 20%, #8fb8da 80%);
    color: black;
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


   #headercolor{
 background-image: linear-gradient(225deg,#ddeaf4 20%, #8fb8da 80%);
    padding:10px;
    margin: 0 0 10px 0;
    text-align:right;
    border-radius : 5px ;
  }

    #headercolor span{
    float: left;
    padding-top: 10px;
  }

     .smallRisks {
    font-size: 170%;
    float: left;
    font-weight: bold;
    color : #fff;
    padding: 5px;
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





</style>	
</head>

<body>

  <div id="headercolor">
          <div>
            <label class="smallRisks" > TIMESHEET MANQUANT :&nbsp; </label>
            <label class="smallRisks" id="nomChantier"></label>
          </div>
            <select class="form-item__element form-item__element--select" style="color:black;" id="mylist1" onchange="MainFilterResponsable();">
                 <option value="Responsable" selected >Responsable</option>
            </select>
  </div>

    
                   
                      
                     
                          <table id="tableaux" class="table table-striped table-bordered" >
                            <thead>
                              <tr>
                                <th>Direction</th>
                                <th>Responsable</th>
                                <th>Collaborateur</th>
                                <th>Date début</th>
                                <th>Date fin</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                                      
                     
                    
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>               
     <script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
     <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/timesheet_manquant/moment-with-locales.js"></script>               
     <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/timesheet_manquant/javascript/MainFilterJS.js"></script>
     <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/timesheet_manquant/javascript/custom.min.js"></script>
     <script src="/sites/PWAdemo/_catalogs/masterpage/Dashboard/timesheet_manquant/javascript/Chart.min.js"></script>
  
 



<script type="text/javascript">

var responseResponsableName = responseResponsableName ||[];
var urltimesheet= _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?$select=ResourceName,ResourceId,ResourceEmailAddress ";

function LoadAllResponsable() {

            $.ajax({url:  urltimesheet,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseResponsableName = responseResponsableName.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlChantier = data.d.__next;
                                            LoadAllResponsable();
                                        }          
                          
            $.each(responseResponsableName, function(key, value) 
            {           
              var mail=value.ResourceEmailAddress;
              if (mail!=null){
                 var responsable = value.ResourceName;  
                  var ownerId= value.ResourceId;  
                  
                    $('#mylist1').append($('<option>',
                             {
                                text : responsable,
                                value : ownerId
                              })); 

                              var opt = {};
                                $("#mylist1 > option").each(function () {
                                  if(opt[$(this).text()]) {
                                      $(this).remove();
                                  } else {
                                      opt[$(this).text()] = $(this).val();
                                  }


                            }); 
              }
                
               
                
                       
            });
}   
});
}                                  
LoadAllResponsable();
function loadTableTimesheetManquant(){
  var responseRessource = responseRessource ||[];
var urlRessource = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?$select=ResourceName,Noméquipe,ResourceEmailAddress";

function LoadAllRessource() {

            $.ajax({url:  urlRessource,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseRessource = responseRessource.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlRessource = data.d.__next;
                                            LoadAllRessource();
                                        }       
                                        var arrAllRessources=[];   
                                        var dirArr=[];
                                  var arrSunday=[];
            $.each(responseRessource, function(key, value) 
            {
              var mail=value.ResourceEmailAddress;
              if (mail!=null) {
                var nomRessource=value.ResourceName;
                    if (((nomRessource == "Ressource locale générique")||(nomRessource == "Ressource inconnue")||(nomRessource == "Ressource non affectée"))) {
                        nomRessource="";
                    }else{
                        arrAllRessources.push(nomRessource);
                        var direction="";
                        if (value.Noméquipe!=null) {
                          direction=value.Noméquipe;
                        }
                        dirArr.push(direction);
                    }
              }
            });
            moment.locale('fr');
            var sunday = moment().startOf('year').day("Monday");
            var today=moment();
                        //console.log("sunday= "+moment(sunday).format('DD-MM-YYYY'));
                        if (sunday.date() > 8) sunday.add(8, 'd');
                        var month = sunday.year();
                        //console.log("month= "+month);
                        while ((month === sunday.year())&&(moment(sunday).isBefore(today))) {
                            //console.log("sunday.toString()= "+sunday.toString());
                            var days = sunday.toString();
                            sunday.add(7, 'd');
                            dayss = moment(days).add('days', -1).format('L');
                            arrSunday.push(days);
                        }
                        console.log("arrSunday= "+arrSunday.join());
                        for (var i = 0; i < arrSunday.length; i++) {
                          var periode=moment(arrSunday[i]).add('days', -1).format("YYYY-MM-DD");
                          var debutSemaine=arrSunday[i];
                          getRessourcesManquants(arrAllRessources,periode,debutSemaine,dirArr);
                        }
                  console.log("arrSunday length= "+arrSunday.length);

}   
});
}                                  
LoadAllRessource();

function getRessourcesManquants(arrAllRessources,periode,debutSemaine,dirArr){
    var responseGetRessourcesManquants = responseGetRessourcesManquants ||[];
    var urlGetRessourcesManquants = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/TimesheetLines?$select=TimesheetOwner,TimesheetApproverResourceName,PeriodStartDate,PeriodEndDate&$filter=PeriodStartDate%20eq%20datetime%27"+periode+"%27";
    //console.log("urlGetRessourcesManquants= "+urlGetRessourcesManquants);
    function LoadRessourcesManquants() {

                $.ajax({url:  urlGetRessourcesManquants,          
                                        method: "GET",
                                        dataType: "json",
                                        headers: {Accept: "application/json;odata=verbose"},       
                                        success: function(data) {     
                                        responseGetRessourcesManquants = responseGetRessourcesManquants.concat(data.d.results);
                                            if (data.d.__next) {
                                                urlGetRessourcesManquants = data.d.__next;
                                                LoadRessourcesManquants();
                                            }       
                                             
                                          
                              var arrRessValid=[];
                              var arrRessNonValid=[];
                              var debPer=moment(debutSemaine).add('days', -1).format("DD-MM-YYYY");
                              var finPer=moment(debutSemaine).add('days', 5).format("DD-MM-YYYY");
                              //var t = $('#tableaux').DataTable();
                $.each(responseGetRessourcesManquants, function(key, value) 
                {
                  moment.locale('fr');
                  var nomRessourceF=value.TimesheetOwner;
                  if (arrRessValid.indexOf(nomRessourceF)==-1) {
                    arrRessValid.push(nomRessourceF);
                  }
                   
                });
                var t = $('#tableaux').DataTable();
                for (var i = 0; i < arrAllRessources.length; i++) {
                  if (arrRessValid.indexOf(arrAllRessources[i])==-1)
                  arrRessNonValid.push(arrAllRessources[i]);
                t.row.add( [
                  dirArr[i],
                  '',
                  arrAllRessources[i],
                  debPer,
                  finPer
              ] ).draw( false );
                }
                console.log("arrRessNonValid= "+arrRessNonValid);

                /*for (var i = 0; i < arrRessNonValid.length; i++) {
                  
                  var tr;
                    tr = $("<tr>");
                        tr.append("<td style='text-align:left'></td>");//0
                        tr.append("<td></td>");//1                        
                        tr.append("<td>" + arrRessNonValid[i] + "</td>"); //2
                        tr.append("<td>"+debPer+"</td>"); //3
                        tr.append("<td>" + finPer+ "</td>"); //4
                        
                        $('#tableaux tbody').append(tr);
                }
                $('#tableaux').DataTable();*/
                    
                /*t.row.add( [
                  '',
                  '',
                  arrRessNonValid[i],
                  debPer,
                  finPer
              ] ).draw( false );*/
    }   
    });
    }         
    LoadRessourcesManquants(); 
}
}
loadTableTimesheetManquant();
</script>