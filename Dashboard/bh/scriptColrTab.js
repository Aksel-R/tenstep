<script src="/sites/CapitalHumain/_catalogs/masterpage/jquery-1.7.2.min.js" type="text/javascript"></script>
<script type="text/javascript">



$(document).ready(function () {
$('.ms-listviewtable tbody tr').each(function () {

//$(this).closest('tr').find('td:eq(7)').css("pointer-events", "none");


var stat = $(this).closest('tr').find('td:eq(15)').text(); 

//$("#boutonBlack").attr("disabled", true);
console.log(stat);
if (stat=="Pending") {
	$(this).closest('tr').find('td:eq(0)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(1)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(2)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(3)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(4)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(5)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(6)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(7)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(8)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(9)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(10)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(11)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(12)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(13)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(14)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(15)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(16)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(17)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(18)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(19)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(20)').css('color','#065EF8');
	$(this).closest('tr').find('td:eq(21)').css('color','#065EF8');
}
if (stat=="Confirmée") {
	$(this).closest('tr').find('td:eq(0)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(1)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(2)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(3)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(4)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(5)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(6)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(7)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(8)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(9)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(10)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(11)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(12)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(13)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(14)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(15)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(16)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(17)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(18)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(19)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(20)').css('color','#FF0202');
	$(this).closest('tr').find('td:eq(21)').css('color','#FF0202');
	
}
// if (thisId != "Traitée") {
// $(this).closest('tr').find('td:eq(7)').css("pointer-events", "none");
// }


});
});


</script>