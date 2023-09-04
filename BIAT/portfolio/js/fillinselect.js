window.addEventListener('load',function() {


				$.ajax({url: _spPageContextInfo.siteAbsoluteUrl + "/_api/ProjectData/[en-US]/Resources?$orderby=ResourceName",			
										method: "GET",
										dataType: "json",
										headers: {Accept: "application/json;odata=verbose"},       
										success: function(data) {     
										var dataResults = data.d.results;
										
			   var listItemInfo ="";
				$.each(dataResults, function(key, value) 
				{  
					var nom = value.ResourceName;
					var id = value.ResourceId;

						
						
						
						if(nom!=null)
						{
							nom = nom;

						
						$('#select').append($('<option>',
							 {
								text : nom,
								value : id
							  }));
							  
							  
						var opt = {};
                              $("#select > option").each(function () {
                                if(opt[$(this).text()]) {
                                    $(this).remove();
                                } else {
                                    opt[$(this).text()] = $(this).val();
                                }
                            });
						}
				});
				document.getElementById("select").selectedIndex = "0";
				MainFunction();
										}
										
				});
				
				});