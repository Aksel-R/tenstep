function disabled4(){


  var natProj1=document.getElementById("mylist4").value;
  if (natProj1!="") {
    
        $("#mylist3").attr('disabled','disabled');
        $("#objectif").attr('disabled','disabled');
    
  }else if(natProj1==""){
    
        $("#mylist3").attr('disabled',false); 
        $("#objectif").attr('disabled',false);
    
  }
 
}
