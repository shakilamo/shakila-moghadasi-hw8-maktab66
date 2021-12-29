function reshte(text){
    let araay=[]
    let araay2=[]
        araay.push(text.split(" "))
        for(let i=0;i>araay.length;i++){
            for(let j=araay[i].length;j>=0;j--){
            if((araay[i][0]==="j")&(araay[i][1]==="n")&(araay[i][2]==="i")&(araay.length>=5)){
                araay2.push(araay[i])
            }
        }
    return araay2
}
}
console.log(reshte("coming bringing letting sing"))
