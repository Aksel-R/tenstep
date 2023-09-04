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
               var data =  $.ajax({ url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+ProjectUID+"')",
                                                                                                   
                

 

                         
              } 
        });
    }
_spBodyOnLoadFunctionNames.push("LoadProject");








console.log("url= "+_spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+ProjectUID+"')");
               //var data =  $.ajax({ url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects(guid'"+ProjectUID+"')",
                                                                                                     
                

 

                         
             // } 
        //});