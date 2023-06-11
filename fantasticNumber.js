var isFascinating = function(n) {
    let dict ={};
    let o=2*n;
    let p=3*n;
    let re=n.toString().concat(o.toString()).concat(p.toString());
    let x=re.split('').sort()
    if(x.length >9){
        return false;
    }
    for(let i=1;i<10;i++){
        if(i !== parseInt(x[i-1])){
            return false;
        }
    } 
    return true; 
};
console.log(isFascinating(798))