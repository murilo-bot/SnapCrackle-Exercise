function snapCrackle(maxValue){
   
    let str = [];

    for(let  i = 1; i <= maxValue; i++){

        if(i % 2 !== 0 && i % 5 === 0){
            str.push("SnapCrackle")
        }else if(i % 2 !== 0){
            str.push("Snap");
        }else if(i % 5 === 0){
            str.push("Crackle");
        }else if(i % 2 === 0 && i % 5 !== 0){
            str.push(i);
        }
        
    } 
    return str.join(", ");
}
snapCrackle()

function isPrime(n){
    for(let i = 2; i <n; i++)
    if(n % i === 0) {
        return false;
    }
    return n > 1;
}

function snapCracklePrime (maxValue){

    let str = [];    

    for(let  i = 1; i <= maxValue; i++){

        if(i % 2 !== 0 && i % 5 === 0 && isPrime(i)){
            str.push("SnapCracklePrime")
        }else if(i % 2 !== 0 && isPrime(i)){
            str.push("SnapPrime")
        }else if(i % 2 !== 0 && i % 5 === 0){
            str.push("SnapCrackle")
        }else if(i % 2 !== 0){
            str.push("Snap");
        }else if(i % 5 === 0){
            str.push("Crackle");
        }else if(i % 2 === 0 && i % 5 !== 0 && i !== 2){
            str.push(i);
        }
        
    }
    return str.join(", ");
}
snapCracklePrime()