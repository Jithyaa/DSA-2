function bubbleSort(arr){
    let length=arr.length;
    for(let i=0;i<length;i++){
        for(let j=0;j<length-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort([-2,34,6,7,-1]));