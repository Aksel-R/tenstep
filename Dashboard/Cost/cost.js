<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/css/bootstrap.min.css" rel="stylesheet">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/css/bootstrap.css" rel="stylesheet">
    <link href="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<style>


.form-item__element option {
  color: #444;
  font-size: 14pt ;
}

.form-item__element {

}

/* Header CSS*/


.card{
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);

  background-color: #fafffa;




}
 #headercolor{
    background:#202975;
    background-color: #061bcc;
    background-image: linear-gradient(225deg,#061bcc 20%,  #202975 80%);
    padding:10px;
    margin: 0 0 10px 0;
    text-align:right;
    border-radius : 5px ;
  }

 #headercolor span{
    float: left;
    padding-top: 10px;
  }

  .labeltimesheet {
    font-size: 130%;
    float: left;
    font-weight: bold;
    color : white;
     padding: 7px 5px 10px 0px;
  }

/*tableau CSS*/

 #tableaux
{  
  table-layout: fixed;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
  width:100%;
   
}
  #tableaux th {
  
    width: auto;
    padding: 8px;
  }

   #tableaux thead {
  
    background-color: #061bcc;
    font-size: 10px;
    color: white;
  }
 
 tr:nth-child(even){background-image: linear-gradient(225deg,#061bcc 20%,  #202975 80%);}

/*dropdown css*/

 #departement {
    background-color: white;
    background-repeat: no-repeat;
    width: 20%;
    font-size: 14px;
    padding: 10px 5px 10px 5px;
    border-radius : 5px;
  }

  #projecttype {
       background-color: white;
    background-repeat: no-repeat;
    width: 20%;
    font-size: 14px;
    padding: 10px 5px 10px 5px;
    border-radius : 5px;
  }

  #projectowner {
    background-color: white;
    background-repeat: no-repeat;
    width: 20%;
    font-size: 14px;
    padding: 10px 5px 10px 5px;
    border-radius :5px;
  }
  #covphase {
    background-color: white;
    background-repeat: no-repeat;
    width: 20%;
    font-size: 14px;
    padding: 10px 5px 10px 5px;
    border-radius : 5px;
  }



 .ms-core-overlay{
     background-color: white !important
 }
span#DeltaPlaceHolderPageTitleInTitleArea {
    display: none;
}
.stat-digit{
    font-size: 25px;
    font-family: cursive;
}
.ms-rtestate-field h4, h4.ms-rteElement-H4 {
    line-height: 1.6;
    color: black;
}
#container {
  margin: 20px;
  width: 400px;
  height: 200px;
}
</style>	
</head>

<body>
        <div id="headercolor">
          <div>
            <label class="labeltimesheet">
             Costs
            </label>
          </div>

        <div>         
          <select class="form-item__element form-item__element--select" style="color:black; font-weight:bold;" id="departement" onchange="">
               <option selected="" value="">Département</option>
            </select>

            <select class="form-item__element form-item__element--select" style="color:black; font-weight:bold;" id="projecttype" onchange="filtrerTableau();">
               <option selected="" value="">Project type</option>
            </select>
               
            <select class="form-item__element form-item__element--select" style="color:black; font-weight:bold;" id="projectowner" onchange="filtrerTableau();">
               <option selected="" value="">Project owner</option>
            </select>

            <select class="form-item__element form-item__element--select" style="color:black; font-weight:bold;" id="covphase" onchange="filtrerTableau();">
               <option selected="" value="">Covernance phase</option>
            </select>
 
            </div>
            </div>
              <div class="row">
                            <div class="col-2" style="padding-right: 5px;">
                                 <div style="flex: 0 0 100%; max-width: 100%; margin-top:10px; ">
                                    <div class="card" style=" margin-bottom: 5px; height:20%">
                                        <div class="card-header">
                                            <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
                                                <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/img/counter.png'
                                                 class='img-rounded' alt='Cinque Terre' width='40px' 
                                                 height='40px'></span>
                                            </div>
                                            <div class="col">
                                                <h4 class="card-title">Resource number</h4>
                                                <p class="card-text" id="prcount"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div style="flex: 0 0 100%; max-width: 100%;margin-top:10px; margin-bottom:5px;">
                                    <div class="card" style=" margin-bottom: 5px; height:20%">
                                        <div class="card-header">
                                            <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
                                                <span class="card-widget__icon"><img
                                                        src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/img/checked.png'
                                                        class='img-rounded' alt='Cinque Terre' width='40px'
                                                        height='40px'></span>
                                            </div>
                                            <div class="col">
                                                <h4 class="card-title">Approuved</h4>
                                                <p class="card-text" id="prcost"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style="flex: 0 0 100%; max-width: 100%; margin-top:10px; margin-bottom:5px;">
                                    <div class="card" style=" margin-bottom: 5px; height:20%">
                                        <div class="card-header">
                                            <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
                                                <span class="card-widget__icon"><img
                                                        src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/img/label.png'
                                                        class='img-rounded' alt='Cinque Terre' width='40px'
                                                        height='40px'></span>
                                            </div>
                                            <div class="col">
                                                <h4 class="card-title">Reject</h4>
                                                <p class="card-text" id="cvariance"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style="flex: 0 0 100%; max-width: 100%; margin-top:10px; margin-bottom:5px;">
                                    <div class="card" style=" margin-bottom: 5px; height:20%">
                                        <div class="card-header">
                                            <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
                                                <span class="card-widget__icon"><img
                                                        src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/img/diskette.png'
                                                        class='img-rounded' alt='Cinque Terre' width='40px'
                                                        height='40px'></span>
                                            </div>
                                            <div class="col">
                                                <h4 class="card-title">Saved</h4>
                                                <p class="card-text" id="prwork"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style="flex: 0 0 100%; max-width: 100%; margin-top:10px; margin-bottom:5px;">
                                    <div class="card" style=" margin-bottom: 5px; height:20%">
                                        <div class="card-header">
                                            <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
                                                <span class="card-widget__icon"><img
                                                        src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/img/checklist.png'
                                                        class='img-rounded' alt='Cinque Terre' width='40px'
                                                        height='40px'></span>
                                            </div>
                                            <div class="col">
                                                <h4 class="card-title">Submissive</h4>
                                                <p class="card-text" id="wrvariance"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                   <div style="flex: 0 0 100%; max-width: 100%; margin-top:10px; margin-bottom:5px;">
                                    <div class="card" style=" margin-bottom: 5px; height:20%">
                                        <div class="card-header">
                                            <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
                                                <span class="card-widget__icon"><img
                                                        src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/img/checklist.png'
                                                        class='img-rounded' alt='Cinque Terre' width='40px'
                                                        height='40px'></span>
                                            </div>
                                            <div class="col">
                                                <h4 class="card-title">Submissive</h4>
                                                <p class="card-text" id="wrvariance"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                   <div style="flex: 0 0 100%; max-width: 100%; margin-top:10px; margin-bottom:5px;">
                                    <div class="card" style=" margin-bottom: 5px; height:20%">
                                        <div class="card-header">
                                            <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
                                                <span class="card-widget__icon"><img
                                                        src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/img/checklist.png'
                                                        class='img-rounded' alt='Cinque Terre' width='40px'
                                                        height='40px'></span>
                                            </div>
                                            <div class="col">
                                                <h4 class="card-title">Submissive</h4>
                                                <p class="card-text" id="wrvariance"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style="flex: 0 0 100%; max-width: 100%; margin-top:10px; margin-bottom:5px;">
                                    <div class="card  ">
                                        <div class="card-header">
                                            <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
                                                <span class="card-widget__icon"><img
                                                        src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/img/management.png'
                                                        class='img-rounded' alt='Cinque Terre' width='40px'
                                                        height='40px'></span>
                                            </div>
                                            <div class="col">
                                                <h4 class="card-title">Missing by responsible</h4>
                                                <p class="card-text" id="actRisk"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              </div>
                                     <div class="col-10" >
                                      <div class="row">
                                        <div class="col-7">
                                             <div style="flex: 0 0 100%; max-width: 100%; margin-top:10px; ">
                                    <div class="card" style=" margin-bottom: 5px; height:20%">
                                        <div class="card-header">
                                            <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
                                                <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/img/counter.png'
                                                 class='img-rounded' alt='Cinque Terre' width='40px' 
                                                 height='40px'></span>
                                            </div>
                                            <div class="col">
                                                <h4 class="card-title">Resource number</h4>
                                                <p class="card-text" id="prcount"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                   <div style="flex: 0 0 100%; max-width: 100%; margin-top:10px; ">
                                    <div class="card" style=" margin-bottom: 5px; height:20%">
                                        <div class="card-header">
                                            <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
                                                <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/img/counter.png'
                                                 class='img-rounded' alt='Cinque Terre' width='40px' 
                                                 height='40px'></span>
                                            </div>
                                            <div class="col">
                                                <h4 class="card-title">Resource number</h4>
                                                <p class="card-text" id="prcount"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                   <div style="flex: 0 0 100%; max-width: 100%; margin-top:10px; ">
                                    <div class="card" style=" margin-bottom: 5px; height:20%">
                                        <div class="card-header">
                                            <div class="col-sm-3" style="padding-right:5px;padding-left:5px">
                                                <span class="card-widget__icon"><img src='/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/img/counter.png'
                                                 class='img-rounded' alt='Cinque Terre' width='40px' 
                                                 height='40px'></span>
                                            </div>
                                            <div class="col">
                                                <h4 class="card-title">Resource number</h4>
                                                <p class="card-text" id="prcount"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                        </div>
                                        <div class="col-5 ">
                                          <div id="container"></div>

                                        </div>
                                      </div>
                                  <div class="row">
                                     <div class="x_content table-responsive" style="flex: 0 0 100%; max-width: 100%; margin-top:10px; ">
                                            <table id="tableaux" class="table table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Cost health>Project>Cost type</th>
                                                        <th style="text-align:center">Budget Cost</th>
                                                        <th style="text-align:center">Baseline Cost</th>
                                                        <th style="text-align:center">Eac(cost)</th>
                                                        <th style="text-align:center">Actual Cost</th>
                                                        <th style="text-align:center">Remaining Cost</th>
                                                        <th style="text-align:center">Cost Variance</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tableauxtbody"></tbody>
                                            </table>
                                        </div>
                                  </div> 
                                       
                                    </div>
                                </div>
                            

                         




                           

     <script type="text/javascript" src="https://momentjs.com/downloads/moment-with-locales.js"></script>
     <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/javascript/jquery3.4.1.js"></script>
     <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/javascript/custom.min.js"></script>
     <script src="/sites/DemoPWA/_catalogs/masterpage/Dashboard/Recapitulatif/javascript/Chart.min.js"></script>
   <script src="https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js"></script>
 
<script type="text/javascript">
 // progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.SemiCircle(container, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(0.95);  // Number from 0.0 to 1.0
</script>

</body>
</html>
