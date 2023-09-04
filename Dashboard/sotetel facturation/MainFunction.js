
    	
//ShowPop_Up
$(document).ready(function() {
  $('.glyphicon').click(function() {
    $('#overlay').fadeIn(300);  
  });
  $('#close').click(function() {
    $('#overlay').fadeOut(300);
  });
});






//------------------------------------Show user group and group--------------------------------
$('#dateFormulaire').hide();
function getCurrentUserGroupColl(UserID)
{
  $.ajax
  ({
  url: _spPageContextInfo.webServerRelativeUrl + "/_api/web/GetUserById("+UserID+")/Groups",
  type: "GET",
  headers: { "Accept": "application/json; odata=verbose","X-RequestDigest": $("#__REQUESTDIGEST").val() },
  dataType: "json",
  async: true,
   success: function(data){
      /* get all group's title of current user. */
      var results = data.d.results;
      for(var i=0; i< results.length; i++)
      {
        if(results[i].Title == "Commercial")
        {       
            $('#dateFormulaire').show();
        }
            console.log(results[i].Title)
            /*var tr;
                    tr = $("<tr>");
                        tr.append("<td>" + results[i].Title + "</td>");         
                    $('#tableaux1').append(tr);
            <div class="table-responsive">
                      <table  id="tableaux1" class="table table-striped jambo_table bulk_action">
                        <thead>
                          <tr class="headings">
                            <th class="column-title">Groupe</th>
                          </tr>
                        </thead>                            
                      </table>
                    </div>
                    */

      }
      
                
  }
  });
}



function getCurrentUser()
{
 $.ajax
  ({
      url: "/sites/TSPWA/_api/web/CurrentUser",
      type: "GET",
      headers: { "Accept": "application/json; odata=verbose","X-RequestDigest": $("#__REQUESTDIGEST").val() },
      dataType: "json",
      async: true,
      success: function(data){
        getCurrentUserGroupColl(data.d.Id)
      }
  });
}  

$(document).ready(function()
{ 
    getCurrentUser();
});




//Récupération de ID de chaque site de Projet
var ProjectUID;
var ProjectUID1;
ExecuteOrDelayUntilScriptLoaded(getProjectUIDProperty, "sp.js"); 
 function getProjectUIDProperty() { 
                var ctx = new SP.ClientContext.get_current(); 
                this.web = ctx.get_web(); 
                this.props =  this.web.get_allProperties(); 
                ctx.load(this.web); 
                ctx.load(this.props);                    
                ctx.executeQueryAsync(Function.createDelegate(this, gotProperty), Function.createDelegate(this, failedGettingProperty)); 
            }             
function gotProperty() {                
                 ProjectUID = this.props.get_item('MSPWAPROJUID');
                 LoadProject(ProjectUID) ;

 

            }    
            function failedGettingProperty() { 
                alert('Error: ' + args.get_message());
            } 


function LoadProject(ProjectUID) {
  var responseProjectDetails=responseProjectDetails || [];
  var urlProjectDetails=_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$filter=ProjectId%20eq%20guid%27"+ProjectUID+"%27";
  console.log("url= "+urlProjectDetails);
  function loadProjectDetails(){
    $.ajax({url:  urlProjectDetails,          
       method: "GET",
       dataType: "json",
       headers: {Accept: "application/json;odata=verbose"},       
       success: function(data) {     
       responseProjectDetails = responseProjectDetails.concat(data.d.results);
       if (data.d.__next) {
          urlProjectDetails = data.d.__next;
          loadProjectDetails();
       }       
                                                  
                    
       $.each(responseProjectDetails, function(key, value){
        moment.locale('fr');

          var code=value.ProjectIdentifier;
          var projectName=value.ProjectName;
          var start=value.ProjectStartDate;
          var projStartDate = moment(start).format('DD-MM-YYYY');
          var po=value.ProjectOwnerName;
          var finish=value.ProjectFinishDate;
          var projFinishDate = moment(finish).format('DD-MM-YYYY');
          var montantGlAtt=parseFloat(value.ProjectCost).toFixed(0);
          var pourcentageReceptionP="";
          var pourcentageReceptionD="";
          var periodeGarantie=parseFloat(value.ProjectDuration).toFixed(0);
          var montantContractuel=parseFloat(value.ProjectCost).toFixed(0);

         document.getElementById("code").innerHTML=code;
         document.getElementById("nomProjet").innerHTML=projectName;
         document.getElementById("debutProjet").innerHTML=projStartDate;
         document.getElementById("poProjet").innerHTML=po;
         document.getElementById("finProjet").innerHTML=projFinishDate;
         document.getElementById("montantGAttachement").innerHTML=montantGlAtt;
         document.getElementById("receptionAttachement").innerHTML=pourcentageReceptionP;
         document.getElementById("receptionDef").innerHTML=pourcentageReceptionD;
         document.getElementById("periodeGarantie").innerHTML=periodeGarantie;
         document.getElementById("montantContractuel").innerHTML=montantContractuel;
       });
       

                     
  }   
});
  }
  loadProjectDetails();
              
}
