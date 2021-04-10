function maxmin(arr[],n){
    let min;
    let max;
    if (n == 1){
    min=arr[0];
    max=arr[0];
    return min,max;
    }

    if (n==2){
        if (arr[1] >arr[0]){
            min=arr[o];
            max=arr[1];
            return min,max;
        }       
    }

    for (let i = 2; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min,max;


}  
console.log(maxmin(arr[1,2],2));
