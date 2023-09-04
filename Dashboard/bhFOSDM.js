<script src="/sites/CapitalHumain/_catalogs/masterpage/jquery-1.7.2.min.js" type="text/javascript"></script>
<script type="text/javascript">



function GetCurrentTab1(){
	var tbody = $('[id^="tbod"]');
	
	
	for (var i = 0; i < tbody.length; i++) {
		//console.log("tbody= "+tbody[i].innerHTML);


		var tr = tbody[i].getElementsByTagName("tr");
		for(var j=0; j< tr.length; j++)
		{
			var stat = tr[j].cells[15].innerHTML;
			console.log("stat= "+stat);
			if (stat=="Pending"){
				tr[j].cells[0].style.background='#065EF8';
				tr[j].cells[1].style.background='#065EF8';
				tr[j].cells[2].style.background='#065EF8';
				tr[j].cells[3].style.background='#065EF8';
				tr[j].cells[4].style.background='#065EF8';
				tr[j].cells[5].style.background='#065EF8';
				tr[j].cells[6].style.background='#065EF8';
				tr[j].cells[7].style.background='#065EF8';
				tr[j].cells[8].style.background='#065EF8';
				tr[j].cells[9].style.background='#065EF8';
				tr[j].cells[10].style.background='#065EF8';
				tr[j].cells[11].style.background='#065EF8';
				tr[j].cells[12].style.background='#065EF8';
				tr[j].cells[13].style.background='#065EF8';
				tr[j].cells[14].style.background='#065EF8';
				tr[j].cells[15].style.background='#065EF8';
				tr[j].cells[16].style.background='#065EF8';
				tr[j].cells[17].style.background='#065EF8';
				tr[j].cells[18].style.background='#065EF8';
				tr[j].cells[19].style.background='#065EF8';
				tr[j].cells[20].style.background='#065EF8';
				tr[j].cells[21].style.background='#065EF8';
				tr[j].cells[22].style.background='#065EF8';
				tr[j].cells[23].style.background='#065EF8';

				tr[j].cells[0].style.color='#ffffff';
				tr[j].cells[1].style.color='#ffffff';
				tr[j].cells[2].style.color='#ffffff';
				tr[j].cells[3].style.color='#ffffff';
				tr[j].cells[4].style.color='#ffffff';
				tr[j].cells[5].style.color='#ffffff';
				tr[j].cells[6].style.color='#ffffff';
				tr[j].cells[7].style.color='#ffffff';
				tr[j].cells[8].style.color='#ffffff';
				tr[j].cells[9].style.color='#ffffff';
				tr[j].cells[10].style.color='#ffffff';
				tr[j].cells[11].style.color='#ffffff';
				tr[j].cells[12].style.color='#ffffff';
				tr[j].cells[13].style.color='#ffffff';
				tr[j].cells[14].style.color='#ffffff';
				tr[j].cells[15].style.color='#ffffff';
				tr[j].cells[16].style.color='#ffffff';
				tr[j].cells[17].style.color='#ffffff';
				tr[j].cells[18].style.color='#ffffff';
				tr[j].cells[19].style.color='#ffffff';
				tr[j].cells[20].style.color='#ffffff';
				tr[j].cells[21].style.color='#ffffff';
				tr[j].cells[22].style.color='#ffffff';
				tr[j].cells[23].style.color='#ffffff';
			}if (stat=="Confirmée") {
				
				tr[j].cells[0].style.background='#FF0202';
				tr[j].cells[1].style.background='#FF0202';
				tr[j].cells[2].style.background='#FF0202';
				tr[j].cells[3].style.background='#FF0202';
				tr[j].cells[4].style.background='#FF0202';
				tr[j].cells[5].style.background='#FF0202';
				tr[j].cells[6].style.background='#FF0202';
				tr[j].cells[7].style.background='#FF0202';
				tr[j].cells[8].style.background='#FF0202';
				tr[j].cells[9].style.background='#FF0202';
				tr[j].cells[10].style.background='#FF0202';
				tr[j].cells[11].style.background='#FF0202';
				tr[j].cells[12].style.background='#FF0202';
				tr[j].cells[13].style.background='#FF0202';
				tr[j].cells[14].style.background='#FF0202';
				tr[j].cells[15].style.background='#FF0202';
				tr[j].cells[16].style.background='#FF0202';
				tr[j].cells[17].style.background='#FF0202';
				tr[j].cells[18].style.background='#FF0202';
				tr[j].cells[19].style.background='#FF0202';
				tr[j].cells[20].style.background='#FF0202';
				tr[j].cells[21].style.background='#FF0202';
				tr[j].cells[22].style.background='#FF0202';
				tr[j].cells[23].style.background='#FF0202';

				tr[j].cells[0].style.color='#ffffff';
				tr[j].cells[1].style.color='#ffffff';
				tr[j].cells[2].style.color='#ffffff';
				tr[j].cells[3].style.color='#ffffff';
				tr[j].cells[4].style.color='#ffffff';
				tr[j].cells[5].style.color='#ffffff';
				tr[j].cells[6].style.color='#ffffff';
				tr[j].cells[7].style.color='#ffffff';
				tr[j].cells[8].style.color='#ffffff';
				tr[j].cells[9].style.color='#ffffff';
				tr[j].cells[10].style.color='#ffffff';
				tr[j].cells[11].style.color='#ffffff';
				tr[j].cells[12].style.color='#ffffff';
				tr[j].cells[13].style.color='#ffffff';
				tr[j].cells[14].style.color='#ffffff';
				tr[j].cells[15].style.color='#ffffff';
				tr[j].cells[16].style.color='#ffffff';
				tr[j].cells[17].style.color='#ffffff';
				tr[j].cells[18].style.color='#ffffff';
				tr[j].cells[19].style.color='#ffffff';
				tr[j].cells[20].style.color='#ffffff';
				tr[j].cells[21].style.color='#ffffff';
				tr[j].cells[22].style.color='#ffffff';
				tr[j].cells[23].style.color='#ffffff';
			}
			
		}
	}
		 
}
	


setTimeout(GetCurrentTab1,1000);

</script>