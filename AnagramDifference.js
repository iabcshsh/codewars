function anagramDifference(w1,w2){
    //..
   let dictionary={};
   w1.split('').forEach((a)=>{
     dictionary[a]=(dictionary[a] || 0)+1;
   })
   let count=0;
   w2.split('').forEach((a)=>{
     if(dictionary[a]>0 && dictionary[a]){
       dictionary[a]-=1;
     }else{
      count++;
     }
   })
   for(let k in dictionary){
     count+=dictionary[k]
   }
   return count;
 }
console.log(anagramDifference('codewars','hackerrank')) 