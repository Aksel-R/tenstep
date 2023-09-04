function disabled1(){

  
      var annDebbb1=document.getElementById("mylist1").value;
      if (annDebbb1!="") {
        
            $("#objectif").attr('disabled',false);
            $("#mylist3").attr('disabled',false); 
            $("#mylist4").attr('disabled',false); 
        
      }else if (annDebbb1=="") {
       
            $("#objectif").attr('disabled',false);
            $("#mylist3").attr('disabled',false); 
            $("#mylist4").attr('disabled',false);
        
      }
      
    
}
