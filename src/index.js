module.exports = function longestConsecutiveLength(array) {
    if (array.length==1) {
        return(1);
    }
    if (array.length==0) {
        return(0);
    }
    function num(a, b) {
      if (a > b) {return(1);}
      if (a < b) {return(-1);}
    }
    array.sort(num);
    var max=1, oldMax=1;
    for (var i=0; i < array.length-1; i++) {
        if (array[i]+1==array[i+1]) {
            
            max++;
        }
        if (array[i+1]-1>array[i]) {
            if (oldMax<max) {
                oldMax=max;
            }
            max=1;
            if (oldMax>array.length-i+1) {
                return(oldMax);
            }
        }
    }
        
    return(oldMax);
}