function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]< arr[min]){
                min=j;
            }
        }
        if(min!==i){
            [arr[i],arr[min]]=[arr[min],arr[i]];
        }
    }
    return arr[6];
}
console.log(selection([4,5,6,3,-0,23,45,1]));  