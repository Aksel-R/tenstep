//Table Project 
var LinkClient = _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects?$select=ProjectName,ProjectOwnerName,ProjectCost,ProjectStartDate,ProjectFinishDate,ProjectPercentCompleted";
  var responseAllClient = responseAllClient || [];
function LoadTableProjectsClient() {

            $.ajax({url: LinkClient,   
                        
                                    method: "GET",
                                    dataType: "json",
                                    headers: {Accept: "application/json;odata=verbose"},       
                                    success: function(data) { 
                                    responseAllClient = responseAllClient.concat(data.d.results);
                              if (data.d.__next) {
                                LinkClient = data.d.__next;
                                LoadTableProjectsClient();
                              }    
                                    
                                  
            $.each(responseAllClient, function(key, value) 
            {           
              moment.locale('fr');

                var nomProjet = value.ProjectName;
                var pOwner = value.ProjectOwnerName;

                var projStartDate = moment(value.ProjectStartDate).format('L');
                var projfinishdate = moment(value.ProjectFinishDate).format('L');
                var pourcetageDachevement = value.ProjectPercentCompleted;



                    var tr;
                    tr = $("<tr class='even pointer'>");
                        tr.append("<td>" + nomProjet +" </td>"); 
                        tr.append("<td>" + pOwner +" </td>"); 
                        tr.append("<td>" + projStartDate +" </td>"); 
                        tr.append("<td>" + projStartDate +" </td>"); 
                        tr.append("<td>" + projfinishdate +" </td>"); 
                        tr.append("<td>" + pourcetageDachevement + " % </td>"); 
                        tr.append("</tr>");
                    $('#Scooptab tbody').append(tr);
                        

            });
            $('#Scooptab').DataTable();

              
}   
});  

}                                  
  _spBodyOnLoadFunctionNames.push("LoadTableProjectsClient");

