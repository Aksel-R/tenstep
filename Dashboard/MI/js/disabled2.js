function disabled2(){

  var catProj1=document.getElementById("objectif").value;
  if (catProj1!="") {
    
        console.log("catProj1")
        $("#mylist3").attr('disabled','disabled'); 
        $("#mylist4").attr('disabled','disabled');
    
  }else if (catProj1==""){
    
        $("#mylist3").attr('disabled',false); 
        $("#mylist4").attr('disabled',false);
    
  }
  
  
    
}
