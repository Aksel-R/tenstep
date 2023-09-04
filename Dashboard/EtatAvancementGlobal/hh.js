var responseRisk=responseRisk || [];
        var urlRisk= _spPageContextInfo.siteAbsoluteUrl + "/"+nomProj+"/_api/web/lists/getByTitle('Risks')/items";
        function loadRisk(){
          $.ajax({
                        url: urlRisk,
                        method: "GET",
                        dataType: "json",
                        headers: { Accept: "application/json;odata=verbose" },
                        success: function (data) {
                            responseRisk = responseRisk.concat(data.d.results);
                            if (data.d.__next) {
                                urlRisk = data.d.__next;
                                loadRisk();
                            }
                            
                            
                           
                            $.each(responseRisk, function (key, value) {
                               
                            });
                            
                        }
                    });
        }
        loadRisk();

        Etat d'avancement des projets '

        /TTPWA/_catalogs/masterpage/Dashboard/EtatAvancementGlobal/etatAvancementGlobal.js

        /TTPWA/_catalogs/masterpage/Dashboard/chantier_comite_dashboard/comite_chantier.js


        standby ou abondonné


        style="transform: rotate(90deg);"


        if (isNaN(valPlanifie)){valPlanifie=0;}