class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
         let newArray = [];
         for(let i = 0; i < 2; i += 1){
            for(let ele of nums){
                newArray.push(ele)
            }
         } 
         return newArray;
    }
}
