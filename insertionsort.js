function insertionS(array){
    for(let i=1;i<array.length;i++){
      let temp = array[i];
      j = i-1;
      while(j>=0 && temp < array[j]){
          array[j+1] = array[j];
          j--;
      }
      array[j+1] = temp;
    }
    return array;
  }
  console.log(insertionS([-1,34,56,4,7,-45]));

