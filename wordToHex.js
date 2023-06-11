function wordsToHex(words) {
    //YOU CAN DO IT!
     let arr=words.split(" ").map((a)=>a.split(''));
    let res=[]
    arr.forEach((a)=>{
    let count=0;
     let hex="#"
      a.forEach((char)=>{
        if(count<3){
        hex+=char.charCodeAt(0).toString(16)
          count++;
        }
    })
      if(hex.length<7){
        let l=hex.length;
        while(l<7){
          hex+="0"
        }
      }
      res.push(hex)
    })
    console.log(res)
    return res;
  }
  console.log(wordsToHex("Hello, my name is Gary and I like cheese."))