window.addEventListener('load',function() {


				$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/ProjectWorkflowStageDataSet",			
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   
				$.each(dataResults, function(key, value) 
				{  
					var nom = value.PhaseName;


					if(nom)
						{
					
						$('#gouver').append($('<option>',
							 {
								text : nom
							  }));
							  
							  
						var opt = {};
                              $("#gouver > option").each(function () {
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
				
				});

//Type Projet
window.addEventListener('load',function() {


				$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",			
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   
				$.each(dataResults, function(key, value) 
				{  
					var nom = value.EnterpriseProjectTypeName;
						if(nom)
						{
						
					
						$('#projtype').append($('<option>',
							 {
								text : nom
							  }));
							  
							  
						var opt = {};
                              $("#projtype > option").each(function () {
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
				
				});


//ProjectOwner
window.addEventListener('load',function() {


				$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",			
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   
				$.each(dataResults, function(key, value) 
				{  
					var nom = value.ProjectOwnerName;
						if(nom)
						{
						
					
						$('#projowner').append($('<option>',
							 {
								text : nom
							  }));
							  
							  
						var opt = {};
                              $("#projowner > option").each(function () {
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
				
				});


//Department
window.addEventListener('load',function() {


				$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Projects",			
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   
				$.each(dataResults, function(key, value) 
				{  
					var nom = value.Servicesduprojet;
						if(nom)
						{
						
					
						$('#depart').append($('<option>',
							 {
								text : nom
							  }));
							  
							  
						var opt = {};
                              $("#depart > option").each(function () {
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
				
				});