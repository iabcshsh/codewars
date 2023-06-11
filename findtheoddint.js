function findOdd(A) {
    //happy coding!
    let data={}
    A.forEach((a)=>{
      data[a]=(data[a]||0)+1
   })
    console.log(data)
    let h=0;
    let ke=undefined;
    for(k in data){
      if(data[k]>h){
        h=data[k];
        ke=k;
      }
    }
    return ke;
  }
console.log(findOdd([7]))