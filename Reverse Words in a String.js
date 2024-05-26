var reverseWords = function(s) {
    let arr=[];
    let w=[]
    let result="";
     w=s.split(" ").filter(word => word);
    for(i=0;i<w.length;i++){
      if(w[i]==w.length)
        {result+=w[w.length-1-i]
    }else{
        result+=w[w.length-1-i]+" "
    } 
        
    }

    return result.trim();
};
