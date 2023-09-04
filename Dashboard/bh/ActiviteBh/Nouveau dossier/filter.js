function mainFilter() {
  var dirReg = document.getElementById("myList1").value;
  var agence = document.getElementById("myList2").value;
  if (dirReg=="CENTRE D'AFFAIRES RETAIL KHEIREDDINE PACHA") {
    dirReg="CENTRE%20D%27%27AFFAIRES%20RETAIL%20KHEIREDDINE%20PACHA";
  }

    if (dirReg=="CENTRE D'AFFAIRES HEDI NOUIRA") {
    dirReg="CENTRE D%27%27AFFAIRES HEDI NOUIRA";
  }


    
    if ((dirReg=="")) {
      window.location.reload();
    }else{
    if ((dirReg!="")&&(agence=="")) {
      $('#myList2').prop( "disabled", false );
      urlFilterControle="?$filter=R_x00e9_gion_x0020_de_x0020_l_x0 eq'"+dirReg+"'";
      urlFilterAgence="?$filter=Direction_x0020_R_x00e9_gionale eq'"+dirReg+"'";
    }
    else  if ((dirReg!="")&&(agence!="")) {
      urlFilterControle="?$filter=R_x00e9_gion_x0020_de_x0020_l_x0 eq'"+dirReg+"' and AgenceId eq'"+agence+"'";
      urlFilterAgence="?$filter=Direction_x0020_R_x00e9_gionale eq'"+dirReg+"' and ID eq'"+agence+"'";
    }
    console.log("urlFilterControle= "+urlFilterControle);

    loadPage(urlFilterControle,urlFilterAgence);
    

    
    
  }

}