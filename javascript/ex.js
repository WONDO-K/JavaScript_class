const arr = [1,2,3,4,5,6,7,8]

const counts = arr.reduce((acc,curr) => {
    if (curr%2===0){
        if (acc['짝수'] === undefined){
            acc['짝수'] = 1
        }else{
            acc['짝수'] +=1
        }
    } else{
        if (acc['홀수'] === undefined){
            acc['홀수'] =1
        } else{
            acc['홀수'] +=1    
        }
    }
    return acc
},{}) 

console.log(counts);