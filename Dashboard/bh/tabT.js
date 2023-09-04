<script src="/sites/CapitalHumain/_catalogs/masterpage/jquery-1.7.2.min.js" type="text/javascript"></script>
<script src="/sites/CapitalHumain/_catalogs/masterpage/moment-with-locales.min.js" type="text/javascript"></script>
<script type="text/javascript">



$(document).ready(function () {
	moment.locale('fr');
	var jourComp=moment();
	console.log("jourComp= "+moment(jourComp).format("DD/MM/YYYY"));
	$('.ms-listviewtable tbody tr').each(function () {

	//$(this).closest('tr').find('td:eq(7)').css("pointer-events", "none");

		var dateP="";
		dateP = $(this).closest('tr').find('td:eq(8)').text();
		console.log("dateP= "+dateP)
		var dateR="";
		dateR= $(this).closest('tr').find('td:eq(9)').text();
	
		
		
		if ((dateR=="")&&(dateP!="")) {
			var date="";
			date=moment($(this).closest('tr').find('td:eq(8)').text(),'DD/MM/YYYY');
			console.log("date= "+date)
			var datePrevison=moment(date);
			var newDateP=moment(datePrevison).add(-2, 'days');
			console.log("datePrevison= "+datePrevison);
			console.log("newDateP= "+newDateP);
			if (moment(jourComp).isAfter(newDateP)) {
			
				
				$(this).closest('tr').find('td:eq(8)').css('color','#fff');//
				$(this).closest('tr').find('td:eq(8)').css('background-color','#e51400');
			}
		}else{
			$(this).closest('tr').find('td:eq(8)').css('color','#000');//
				$(this).closest('tr').find('td:eq(8)').css('background-color','#fff');
		}

	//$("#boutonBlack").attr("disabled", true);

	});
});


</script>