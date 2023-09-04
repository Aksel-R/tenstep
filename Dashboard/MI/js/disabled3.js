function disabled3(){

  
  var statProj1=document.getElementById("mylist3").value;
  if (statProj1!="") {
    
        $("#mylist4").attr('disabled','disabled');
        $("#objectif").attr('disabled','disabled');
    
  }else if (statProj1=="") {
    
        $("#mylist4").attr('disabled',false); 
        $("#objectif").attr('disabled',false);
    
  }
   
    
}
