/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    for(i=0;i<candies.length;i++){
   
   if(candies[i]=candies[0]){
    result.push(true);
   }
        else if(candies[i]+extraCandies>=candies[i-1]+extraCandies)
       { result.push(true);}  
        
        else {
            result.push(false);  
        }     
        
    }
    return result;
};
