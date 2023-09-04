
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

 <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/css/bootstrap.min.css" rel="stylesheet">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/css/bootstrap.css" rel="stylesheet">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/css/style.css" rel="stylesheet">
<link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/css/achevement.css" rel="stylesheet">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/css/dataTables.bootstrap4.min.css" rel="stylesheet">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/css/w3.css"  rel="stylesheet">
<link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/css/jquery.dataTables.min.css" rel="stylesheet">
    

    <!-- Bootstrap -->
   


  
   <!-- Compiled and minified CSS -->


<style>
element.style {
    fill: #00FF00;
    display: none;
}

.form-control-sm {
    min-height: 30px;
    max-height: 10px;
}

.custom-select-sm {
    
    padding: 0.375rem;
   
    font-size: 100%;
}


.dataTables_length select, .dataTables_filter input{
  border-color: #31752f;
outline: 0;

box-shadow: inset 0 2px 2px rgba(0,0,0,.075), 0 0 8px rgb(49 117 47);

}


text.highcharts-credits {
    display: none;
}
.highcharts-strong {
    font-weight: 100;
}

.highcharts-figure, .highcharts-data-table table {
    width:100%;
    margin: 1em auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #EBEBEB;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}
.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
}
.highcharts-data-table th {
  font-weight: 600;
    padding: 0.5em;
}
.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
    padding: 0.5em;
}
.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}
.highcharts-data-table tr:hover {
    background: #f1f7ff;
}


.card-title{
  text-align: center;
  font-size:19px;
}

.card-text{
    color: #424242;
    text-align: center;
     font-size:15px;
    
        }






.card-header {
    padding: 0.2rem ;
   
     

    
}
.card .card-body {
       padding: 0rem 0rem 0.5rem 0rem;
        text-align: center;

        
}
.card{
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);
  height:100px;
  background-color: #fafffa;




}

.ms-rtestate-field h5, h5.ms-rteElement-h5 {
    line-height: 1.6;
    color: #212529;
}




   #headercolor{
   	background:#31752f;
    background-color: #147d10;
	background-image: linear-gradient(225deg, #147d10 20%, #31752f 80%);

    padding:10px;
    margin: 0 0 10px 0;
    text-align:right;
    border-radius : 5px;
  }

    #headercolor span{
    float: left;
    padding-top: 10px;
  }

   #headercolor1{
    background:#4CAF50;
    padding:10px;
    margin: 0 0 10px 0;
    text-align:right;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
  }

    #headercolor1 span{
    float: left;
    padding-top: 10px;
  }


    .smallRisks {
    font-size: 140%;
    float: left;
    font-weight: bold;
    color : white;
  }

   .smallRisks1 {
    font-size: 140%;
    float: left;
    font-weight: bold;
    color : white;
  }

  #tableaux
{
   border-radius: 1em;
  overflow: hidden;
  width:100%;
   
}

   #tableaux th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #31752f;
    color: white;
  }
  .table-bordered>tbody>tr>td{
    border: 1px solid #31752f;
}

   #tableaux td, #tableaux th {
    border: 1px solid #ddd;
    padding: 8px;
  }


  #tableaux td{
    text-align:center;
  }
 

  #mylist1 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    font-size: 14px;
    width: 20%;
    padding: 12px 20px 12px 15px;
    border: 1px solid #ddd;
    margin-left:50px;
    border-radius : 5px;
  }

  #mylist2 {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 20%;
    font-size: 14px;
    padding: 12px 20px 12px 15px;
    border: 1px solid #ddd;
    border-radius : 5px;
  }


  .ms-rtestate-field h1, h1.ms-rteElement-H1, .ms-rtestate-field h2, h2.ms-rteElement-H2 {
    line-height: 1.4;
    color: #000;
}

option:empty
{
 display:none;
}

.ms-core-pageTitle 
{
      font-size: 2.77em;
      white-space: nowrap;
      display: none;
}



.ms-quicklaunchouter.ms-core-sideNavBox-removeLeftMargin {
    display: none;
}

























</style>

   </head>


      <div id="headercolor">
          <div>
            <label class="smallRisks">
              Issues Risks :&nbsp;
            </label>
              <label class="smallRisks" id="nomChantier"></label>
          </div>


            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist1" onchange="">
                 <option value="issues" selected >issues</option>
            </select>
            <select class="mdb-select md-form" style="color:black; font-weight:bold;" id="mylist2" onchange="">
                 <option value="issues" selected >Risks</option>
            </select>
           
       
      </div>
        

        <!-- top navigation -->
        
        <!-- /top navigation -->

        <!-- page content -->


        <div class="right_col" role="main">


 <div class="row"  id="detail-generale0" >

              <div class="col-sm-3 " style="max-width:20%;padding-right:5px">
    <div class="card bg-c-green order-card">
    <div class="card-header ">
    <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/counter.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title" >Nb Risk</h5>
     <p class="card-text" id="NbChantierPortefeuille"></p></div>
    
</div>
       <div class="card-body">
      
        
      </div>
    </div>
  </div>

       <div class="col-sm-3" style="max-width:20%;padding-right:5px;padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/counter.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Nb Problèmes</h5>
     <p class="card-text"id="NbProgrammePortefeuille"></p></div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>

       <div class="col-sm-3" style="max-width:20%;padding-right:5px;padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/counter.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Nb Projet</h5>
     <p class="card-text" id="NbProjetPortefeuille"></p></div>
    
</div>
       <div class="card-body">
      
        
      </div>
    </div>
  </div><div class="col-sm-3" style="max-width:20%;padding-right:5px;padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/bar-chart.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">% Achevement</h5>
    <p class="card-text" id="AchevementTotal" style="padding-bottom:0.6px"></p>

    </div>
     
</div>
      
    </div>
  </div>
            <div class="col-sm-3 " style="max-width:20%;padding-left:5px">
    <div class="card bg-c-green order-card">
    <div class="card-header ">
    <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/budget.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title" >Budget</h5>
     <p class="card-text" id="budgetportefeuille"></p></div>
    
</div>
       <div class="card-body">
      
        
      </div>
    </div>
  </div>
                    </div>



<div class="row" id="detail-generale1">


  <div class="col-sm-3" style="max-width:20%;padding-right:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/calendar.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Date Début</h5>
    <p class="card-text" id="DateDebutPortefeuille" style="margin-left:60px;"></p></div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>
    <div class="col-sm-3" style="max-width:20%;padding-right:5px;padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
<span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/calendar.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Date Fin</h5>
    <p class="card-text" id="DateFinPortefeuille" style="margin-left:60px;"	></p></div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>

<div class="col-sm-3" style="max-width:20%;padding-right:5px;padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/counting.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Nb Ressource</h5>
    <p class="card-text" id="Nbressourceportefeuille" ></p>

    </div>
     <div class="card-body">
      
        
      </div>
</div>
      
    </div>
  </div>
    
<div class="col-sm-3" style="max-width:20%;padding-right:5px;padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/analytics.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Maturité Planning</h5>
    <p class="card-text" id="Maturitéplanningportefeuille" style="margin-left:60px;"></p></div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>
    <div class="col-sm-3" style="max-width:20%;padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
<span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/flow-chart.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Glissement</h5>
    <p class="card-text" id="glissementportefeuille" style="margin-left:60px;"	></p></div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>

                    </div>
<div class="row"  id="detail-generale2" >

    
       <div class="col-sm-6" style="height:auto; min-height:100px;padding-right:5px">
    <div class="card  " >
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/solution.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Sponsor</h5>
     <p class="card-text"id="sponsorportefeuille"></p></div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>

       <div class="col-sm-6" style="height:auto; min-height:100px;padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/planning.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Direction Concernées</h5>
     <p class="card-text" id="directionConcernerportefeuille"></p></div>
    
</div>
       <div class="card-body">
      
        
      </div>
    </div>
  </div>
    

        <div class="col-sm-12" style="height:auto; min-height:100px;padding-left:5px">

        <figure class="highcharts-figure">
    <div id="container"></div>
    
</figure>
    
  </div>

                    </div>







             <div class="row" style="display:none;" id="chantier-details1" >

              <div class="col-sm-3 " style="padding-right:5px;" >
    <div class="card  ">
    <div class="card-header ">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/construction-site.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title" >Chantier</h5>
    <p class="card-text" id="ChantierName1"></p>
    </div>
    
</div>
      <div class="card-body" >
      
        
      </div>
    </div>
  </div>

       <div class="col-sm-3" style="padding-right:5px;padding-left:5px" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/calendar.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Date Début</h5>
    <p class="card-text"id="debutChantier" style="margin-left:40px;"></p>
    </div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>

       <div class="col-sm-3" style="padding-right:5px;padding-left:5px" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/calendar.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Date Fin</h5>
    <p class="card-text" id="finChantier" style="margin-left:40px;"></p>
    </div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>

  <div class="col-sm-3" style="padding-left:5px" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/back-in-time.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Durée (j)</h5>
    <p class="card-text" id="dureeChantier"></p>
    </div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>
   

                    </div>


<div class="row" style="display:none;" id="chantier-details2" >

     <div class="col-sm-3"style="padding-right:5px;" >
   <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/bar-chart.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">% Achévement</h5>
    <p class="card-text" id="achevementChantier" style="padding-bottom:0.6px"></p>
    </div>
    
</div>
      
    </div>
  </div>
<div class="col-sm-3" style="padding-right:5px;padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/owner.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">PMO structure</h5>
     <p class="card-text" id="PMOS"></p>
    </div>
    
</div>
      <div class="card-body">
     
        
      </div>
    </div>
  </div>

  <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/owner.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">PMO Transverse</h5>
    <p class="card-text" id="PMOT"></p>
    </div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>
      <div class="col-sm-3" style="padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/budget.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Budget</h5>
    <p class="card-text" id="BudgetChantier" style="padding-bottom:0.5px"></p>
    </div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>

<div class="col-sm-3" style="padding-right:5px;" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/owner.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Nb Ressource</h5>
    <p class="card-text" id="RessourceChantier"></p>
    </div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>

       <div class="col-sm-3" style="padding-right:5px;padding-left:5px" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/symbol.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">NBR programmes</h5>
    <p class="card-text" id="programCount" style="padding-bottom:0.5px"></p>
    </div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>
<div class="col-sm-3" style="padding-right:5px;padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/analytics.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Maturité Planning</h5>
    <p class="card-text" id="MaturiteChantier" style="padding-bottom:0.5px"></p>
    </div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>
    <div class="col-sm-3" style="padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/flow-chart.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Glissement</h5>
    <p class="card-text" id="GlissementChantier" style="padding-bottom:0.5px"></p>
    </div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>

                    </div>
                    <div class="row" style="display:none;" id="chantier-details3" >
<div class="col-sm-6" style="padding-right:5px;" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/planning.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Direction Concernées</h5>
     <p class="card-text" id="DirectionChantier"></p>
    </div>
    
</div>
      <div class="card-body">
     
        
      </div>
    </div>
  </div>
    <div class="col-sm-6" style="padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/solution.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Sponsor</h5>
    <p class="card-text" id="SponsorChantier" ></p>
    </div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>
  
      


       


                    </div>
   
<div class="row" style="display:none;" id="chantier-details4" >
<figure class="highcharts-figure">
    <div id="container"></div>
    
</figure>

</div>


<div id="chantier-details5" style="display:none;">
  <div id="headercolor1">
          <div>
            <label class="smallRisks1">
               programme :&nbsp;
            </label>
              <label class="smallRisks1" id="nomProgram"></label>
          </div>
            <select class=" mdb-select md-form" style="color:black; font-weight:bold;" id="mylist2" onchange="mainProgrammeFilter();">
                 <option value="programme" selected >programme</option>
            </select>
      </div>

</div>

 <div class="row" style="display:none;" id="programme-details1" >

              <div class="col-sm-3 " style="padding-right:5px;">
    <div class="card  ">
    <div class="card-header ">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/monitoring.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title" >programme</h5>
     <p class="card-text" id="progName"></p>
    </div>
    
</div>
      <div class="card-body" >
     
        
      </div>
    </div>
  </div>




       <div class="col-sm-3" style="padding-right:5px;padding-left:5px" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/calendar.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Date Début</h5>
     <p class="card-text"id="debutProg" style="margin-left:40px;"></p>
    </div>
    
</div>
      <div class="card-body">
     
        
      </div>
    </div>
  </div>

       <div class="col-sm-3" style="padding-right:5px;padding-left:5px" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/calendar.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Date Fin</h5>
    <p class="card-text" id="finProg" style="margin-left:40px;"></p>
    </div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>

  <div class="col-sm-3" style="padding-left:5px" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/back-in-time.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Durée (j)</h5>
    <p class="card-text" id="dureeProg"></p>
    </div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>
                 <div class="col-sm-3" style="padding-right:5px;" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/bar-chart.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">% Achévement</h5>
    <p class="card-text" id="achevementProg" style="padding-bottom:0.6px"></p>
    </div>
    
</div>
    
    </div>
  </div>

<div class="col-sm-3" style="padding-right:5px;padding-left:5px" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/owner.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">PMO structure</h5>
    <p class="card-text" id="PMOS1"></p>
    </div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>

  <div class="col-sm-3"style="padding-right:5px;padding-left:5px" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/owner.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">PMO Transverse</h5></div>
    
</div>
      <div class="card-body">
      <p class="card-text" id="PMOT1"></p>
        
      </div>
    </div>
  </div>
   

       <div class="col-sm-3" style="padding-left:5px" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/budget.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Budget</h5>
     <p class="card-text" id="Budgetprog"></p>
    </div>
    
</div>
      <div class="card-body">
     
        
      </div>
    </div>
  </div>
        
                    </div>


              <div class="row" style="display:none;" id="programme-details2" >


        <div class="col-sm-3" style="padding-right:5px;" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/owner.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Nb Ressource</h5></div>
    
</div>
      <div class="card-body">
      <p class="card-text" id="RessourceProg"></p>
        
      </div>
    </div>
  </div>

       <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/symbol.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Nb projets</h5>
     <p class="card-text" id="projCount1"></p>
    </div>
    
</div>
      <div class="card-body">
     
        
      </div>
    </div>
  </div>
<div class="col-sm-3" style="padding-right:5px;padding-left:5px" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/analytics.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Maturité Planning</h5>
     <p class="card-text" id="MaturiteProg"></p>
    </div>
    
</div>
      <div class="card-body">
     
        
      </div>
    </div>
  </div>
         <div class="col-sm-3" style="padding-left:5px" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/flow-chart.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Glissement</h5>
     <p class="card-text" id="glissementprog"></p>
    </div>
    
</div>
      <div class="card-body">
     
        
      </div>
    </div>
  </div>

                    </div>


              <div class="row" style="display:none;" id="programme-details3" >
<div class="col-sm-6" style="padding-right:5px;" >
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/planning.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Direction Concernée</h5>
    <p class="card-text" id="DirectionProg"></p>
    </div>
    
</div>
      <div class="card-body">
      
        
      </div>
    </div>
  </div>

  <div class="col-sm-6" style="padding-left:5px">
    <div class="card  ">
    <div class="card-header">
    <div class="col-sm-3">
    <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/img/solution.png' class='img-rounded' alt='Cinque Terre' width='40px' height='40px'></span>
      </div>
    <div class="col"><h5 class="card-title">Sponsor</h5>
     <p class="card-text" id="Sponsorprog"></p>
    </div>
    
</div>
      <div class="card-body">
     
        
      </div>
    </div>
  </div>
      
   

       
      

       

      


                    </div>

<div class="row"  id="programme-details4" style="display:none;">
<div class="x_content table-responsive">
<table  class="table table-striped table-bordered" id="tableaux">
<thead>
  <tr>
    
    <th>Projet</th>
    <th>Date Début</th>
    <th>Date Fin</th>
     <th>% Achevement</th>
    <th>Chef de projet</th>
    <th>Budget</th>
    <th>Glissement</th>
  </tr>
    </thead>
    <tbody></tbody>
</table>
</div>
</div>



   
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/javascript/MainFunctionJS.js"></script>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/javascript/MainFilterJs.js"></script>

<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/javascript/jquery3.4.1.js"></script>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/javascript/jquery.dataTables.min.js"></script>

<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/javascript/dataTables.bootstrap4.min.js"></script>
<script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script> 
   <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/javascript/Chart.min.js"></script>
   <script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>
   
     <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/javascript/custom.min.js"></script>
     
 <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/javascript/highcharts.js"></script>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/javascript/timeline.js"></script>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/javascript/exporting.js"></script>
<script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Strategie/javascript/accessibility.js"></script>


<script type="text/javascript">
//*********************************chantier*******************************
var responseChantierName = responseChantierName ||[];
var urlChantier = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=Servicesduprojet,ProjectId";

function LoadAllChantier() {

            $.ajax({url:  urlChantier,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseChantierName = responseChantierName.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlChantier = data.d.__next;
                                            LoadAllChantier();
                                        }          
                          
            $.each(responseChantierName, function(key, value) 
            {           
                
                var chantier = value.Servicesduprojet;  
                var prId= value.ProjectId;  
                
                  $('#mylist1').append($('<option>',
                           {
                              text : chantier,
                              value : prId
                            })); 

                            var opt = {};
                              $("#mylist1 > option").each(function () {
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
LoadAllChantier();


var responseProjectData = responseProjectData ||[];
var urlProjectData = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects";

function LoadGeneralData(){

$.ajax({url:  urlProjectData,          
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) {     
                                    responseProjectData = responseProjectData.concat(data.d.results);
                                        if (data.d.__next) {
                                            urlProjectData = data.d.__next;
                                            LoadGeneralData();
                                        }   
                                        var incChant=[];
                                        var nbchantier=0;
                                        var nbprogramme=0;
                                        var nbprojet=0;
                                        var sumAchProjet=0;
                                        var arrayDeb=[];
                        			    var arrayFin=[];
                        			    var minStart;
                        			    var tabchantier=[];
                        			    var tabpercent=[];
                        			    var budgSum=0;
                        			    var tabmoy=[];
                        			    var arraysponsor=[];
                        			    var j=1;
                        			    var i= 0;
                        			    var sumbudget=0;


            $.each(responseProjectData, function(key, value) 
            {           

                var chantier = value.Servicesduprojet;  
                var programme = value.EnterpriseProjectTypeName;
                var projet = value.ProjectName;
                
                var ach=0;
                if (value.ProjectPercentCompleted!=null) {
                	ach=parseInt(value.ProjectPercentCompleted);
                }  
                

                var chantierindex= tabchantier.indexOf(chantier);

                 if ((chantier!="")&&(chantier!=null)) {
                 
                 	


                 if(chantierindex == -1){
                 	tabchantier.push(chantier);
                 	
                 	tabpercent.push(ach);
                 	incChant.push(1);
                 	//tabcount.push(parseInt(j));
                 	//console.log("tabcount= "+tabcount.join());
                 	
                 }else
                 {
                 	tabpercent[tabchantier.indexOf(chantier)]=tabpercent[tabchantier.indexOf(chantier)]+parseInt(ach);
                 	incChant[tabchantier.indexOf(chantier)]+=1;
                 	//tabcount=tabcount[tabchantier.indexOf(chantier)]+1;
                 }


 if ((programme!="")&&(programme!=null)) {


                  nbprogramme++;
				  var budget= parseInt(value.ProjectBudgetCost);
				  sumbudget+=budget;

                    var sponsor= value.Sponsor;
               var sponsorindex= arraysponsor.indexOf(sponsor);
                if ((sponsor!="")&&(sponsor!=null)) {
                 
                  


                 if(sponsorindex == -1){
                  arraysponsor.push(sponsor);
                
                 }
                 }
                 
               
                 }
         nbchantier=tabchantier.length;         		
}

if ((projet!="")&&(projet!=null)) {
                 
                  
                 nbprojet++;
                 }


                

                

               projStartDate=value.ProjectStartDate;
               var debProj = moment(projStartDate);
               projfinshtDate=value.ProjectFinishDate;
               var finProj = moment(projfinshtDate);
               arrayDeb.push(debProj);
               arrayFin.push(finProj);
                  
                
                sumAchProjet+=parseInt(ach);

                

                
            });
            console.log("tabchantier= "+tabchantier.join());
console.log("tabpercent= "+tabpercent.join());
console.log("incChant= "+incChant.join());

for(var c=0;c<tabchantier.length;c++){

	tabmoy[c]=parseFloat(tabpercent[c]/incChant[c]);
}

console.log("tabmoy= "+tabmoy.join());
var sum=0;
var avg=0;
for(var k=0;k<tabmoy.length;k++){
sum+=parseFloat(tabmoy[k]);
}
avg=parseFloat(sum/tabmoy.length).toFixed(0);
console.log("avg= "+avg);


				minStart="";
              	
                
                minStart=moment(arrayDeb[0]);

                maxEnd=moment(arrayFin[0]);
                 for (var j = 1; j < arrayFin.length ; j++) {
                                  
                                  //arrayDeb[i]
                                
                                 if (moment(maxEnd).isBefore(arrayFin[j])) {
                                    maxEnd=arrayFin[j];
                                    //console.log("maxEnd= "+maxEnd);
                                    //console.log("arrayFin[j]= "+arrayFin[j]);
                                  }
                                  if (moment(arrayDeb[j]).isBefore(minStart)) {
                    minStart=arrayDeb[j];
                   // console.log("minStart= "+minStart);
                   // console.log("arrayDeb[j]= "+arrayDeb[j]);
                  }
                                }
                                moment.locale('fr');
              var debutChant=moment(minStart);
              var finChant=moment(maxEnd);
              var StartChant=moment(debutChant).format('DD/MM/YYYY');
              var FinishChant=moment(finChant).format('DD/MM/YYYY');
              console.log("sumAchProjet="+sumAchProjet);
			  console.log("nbprojet="+nbprojet);
			  
            document.getElementById("NbChantierPortefeuille").innerHTML=nbchantier;
            document.getElementById("NbProgrammePortefeuille").innerHTML=nbprogramme;
            document.getElementById("NbProjetPortefeuille").innerHTML=nbprojet;
            document.getElementById("AchevementTotal").innerHTML="<p>"+avg+"% <progress id='' max='100' value='"+avg+"' style='width: 60%; height:10px;  background-color:green;'></progress></p>";
            document.getElementById("DateDebutPortefeuille").innerHTML=StartChant;
            document.getElementById("DateFinPortefeuille").innerHTML=FinishChant;
            document.getElementById("budgetportefeuille").innerHTML=sumbudget;
             document.getElementById("sponsorportefeuille").innerHTML=arraysponsor.join();

            
}   
});

}
LoadGeneralData();





</script>