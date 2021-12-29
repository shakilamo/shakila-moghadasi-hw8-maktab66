function reshte(text){
    let araay=[]
    let araay2=[]
        araay.push(text.split(" "))
        for(let i=0;i<araay.length;i++){
            if(String(araay[i]).endsWith("ing")){
                araay2.push(araay[i])
            }
            return araay2
        }
    }                    
console.log(reshte("coming bringing letting sing"))