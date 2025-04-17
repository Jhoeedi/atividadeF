function bubbleSort(array){
    const n = array.length;
    let swapped;
    
    do{
        swapped = false;
        for(let i = 0;i < n - 1;i++){
        if(array[i] > array[i+1])
        //Swap elements
        [array[i], array[i+1]]=
    [array[i+1], array[1]];
        swapped = true;
     }
    } while(swapped);
    
    return array
    }
    
    const array = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];
    const sortedArray = bubbleSort(array);
    
    console.log(sortedArray);//Output:[1, 2, 5, 7, 9, 32, 45, 49, 99, 97]