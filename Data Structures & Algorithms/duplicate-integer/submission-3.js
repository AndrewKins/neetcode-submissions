class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const check = new Set();
        for(const num of nums){
            if(check.has(num)){
                return true;
            }
            check.add(num);
        }
        return false
        
    }
}
