class Solution {

   

    rowWithMax1s(arr, n, m){
  
    let r = 0;
  
    let c = m-1;
  
    let max_index = -1;
  
     
  
    while (r<n && c>=0) {
  
      if (arr[r][c] == 1){
  
      max_index = r;
  
      c = c-1;
  
        
  
      }
  
      else {
  
        r=r+1;
  
      }
  
    }
  
    return max_index;
  
    }
  
     
  
  }