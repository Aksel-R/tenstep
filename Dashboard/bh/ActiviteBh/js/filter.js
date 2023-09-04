function mainFilter() {
  var dirReg = document.getElementById("myList1").value;
  if (dirReg=="CENTRE D'AFFAIRES RETAIL KHEIREDDINE PACHA") {
    dirReg="CENTRE%20D%27%27AFFAIRES%20RETAIL%20KHEIREDDINE%20PACHA";
  }
    var controleuridd = document.getElementById("myList2").value;
    
    if ((dirReg=="")&&(controleuridd=="")) {
      window.location.reload();
    }else{
    var dirReg=dirReg.replace(/\\"/g, '"');
    var urlFilterSel="";
    var urlFilterSel2="";
    if ((dirReg!="")&&(controleuridd=="")) {
      urlFilterSel="?$filter=R_x00e9_gion_x0020_de_x0020_l_x0 eq'"+dirReg+"'";
      urlFilterSel2="?$filter=Direction_x0020_R_x00e9_gionale eq'"+dirReg+"'";
    }
    else if ((controleuridd!="")&&(dirReg=="")) {
      urlFilterSel="?$filter=AuthorId eq'"+controleuridd+"'";
    }else if ((dirReg!="")&&(controleuridd!="")) {
      urlFilterSel2="?$filter=Direction_x0020_R_x00e9_gionale eq'"+dirReg+"' and AuthorId eq'"+controleuridd+"'";
      urlFilterSel2="?$filter=Direction_x0020_R_x00e9_gionale eq'"+dirReg+"'";
    }
    console.log("urlFilterSel= "+urlFilterSel);

    loadPage(urlFilterSel,urlFilterSel2);
    

    
    
  }

}