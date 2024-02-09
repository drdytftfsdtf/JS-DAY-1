
var array  = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
var target = 12;


function addition(array, target) {
    for(var i=0; i<=array.length-2; i++){
        for( var j=i+1; j<=array.length-1; j++ ){
            if (array [i] + array [j] === target){
                console.log  (array[i],  array[j]) 


            }


        }
        
        
    }


}
addition (array,target)