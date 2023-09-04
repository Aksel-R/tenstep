function selectMyList3(){

	var urlFilter3Selected1= "";

	var chefProj=document.getElementById("projectowner").value;

  		if (chefProj!="") {
        	urlFilter3Selected1+="&$filter=OwnerName%20eq%27"+chefProj+"%27";
      	}else{
      		urlFilter3Selected1= "";
      		urlFilterSelected= "";
			countSelected=0;
      	}
}
