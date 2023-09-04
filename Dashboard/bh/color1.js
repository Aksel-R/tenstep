<!DOCTYPE html>
<html lang="en">

<head>
<style>
    
     .elementStyle {
        color: #6363ee;
        font-size: 11px;
        font-weight: bold;
        text-decoration: underline;
    }

</style>
</head>
<body id="page-top">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script type="text/javascript">
   //$('nobr:contains("A. Vérification de la régularité des opérations effectuées au niveau des différentes positions du Point de Vente")').closest('tr').hide();
 	function colrRows() {
 		
 		$(document).ready(function () {
	 		
			 $('.ms-formtable tbody tr').each(function () {
			 	// console.log("val0= "+$(this).closest('tr').find('td:eq(0)').value());
			  //   console.log("val1= "+$(this).closest('tr').find('td:eq(1)').value());
			   
			    if ($(this).closest('tr').find('td:eq(0)').text()=='A. Vérification de la régularité des opérations effectuées au niveau des différentes positions du Point de Vente') {
			    	$(this).closest('tr').find('td:eq(0)').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0) span').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0) span a').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0)').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0)').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0)').css('text-decoration','underline');

			    	$(this).closest('tr').find('td:eq(0) span').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0) span').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0) span').css('text-decoration','underline');

			    	$(this).closest('tr').find('td:eq(0) span a').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0) span a').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0) span a').css('text-decoration','underline');
			    }
			    if ($(this).closest('tr').find('td:eq(0)').text()=='B. Contrôle des arrêtés de caisse') {
			    	$(this).closest('tr').find('td:eq(0)').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0) span').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0) span a').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0)').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0)').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0)').css('text-decoration','underline');

			    	$(this).closest('tr').find('td:eq(0) span').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0) span').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0) span').css('text-decoration','underline');

			    	$(this).closest('tr').find('td:eq(0) span a').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0) span a').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0) span a').css('text-decoration','underline');
			    }

			    if ($(this).closest('tr').find('td:eq(0)').text()=='C. Vérification des journaux de contrôle de la journée') {
			    	$(this).closest('tr').find('td:eq(0)').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0) span').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0) span a').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0)').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0)').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0)').css('text-decoration','underline');

			    	$(this).closest('tr').find('td:eq(0) span').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0) span').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0) span').css('text-decoration','underline');

			    	$(this).closest('tr').find('td:eq(0) span a').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0) span a').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0) span a').css('text-decoration','underline');
			    }

			    if ($(this).closest('tr').find('td:eq(0)').text()=='D. Contrôle de la journée comptable') {
			    	$(this).closest('tr').find('td:eq(0)').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0) span').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0) span a').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0)').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0)').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0)').css('text-decoration','underline');

			    	$(this).closest('tr').find('td:eq(0) span').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0) span').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0) span').css('text-decoration','underline');

			    	$(this).closest('tr').find('td:eq(0) span a').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0) span a').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0) span a').css('text-decoration','underline');
			    }

			    if ($(this).closest('tr').find('td:eq(0)').text()=='E. Etablissement du compte rendu de contrôle') {
			    	$(this).closest('tr').find('td:eq(0)').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0) span').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0) span a').css('color','#6363ee');
			    	$(this).closest('tr').find('td:eq(0)').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0)').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0)').css('text-decoration','underline');

			    	$(this).closest('tr').find('td:eq(0) span').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0) span').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0) span').css('text-decoration','underline');

			    	$(this).closest('tr').find('td:eq(0) span a').css('font-size','14px');
			    	$(this).closest('tr').find('td:eq(0) span a').css('font-weight','bold');
			    	$(this).closest('tr').find('td:eq(0) span a').css('text-decoration','underline');
			    }
			    
			 });
		 });
 	}
 	colrRows()
 </script>
 </body>