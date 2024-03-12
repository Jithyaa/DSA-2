function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    let leftArr=arr.slice(0,mid);
    let rightArr=arr.slice(mid);
    return merge(mergeSort(leftArr),mergeSort(rightArr));
}
function merge(leftArr,rightArr){
    let sortArr=[];
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortArr.push(leftArr.shift())
        }else{
            sortArr.push(rightArr.shift())
        }
    }
    return [...sortArr,...leftArr,...rightArr]
}
let arr=[3,4,6,7,-9];
console.log(mergeSort(arr));