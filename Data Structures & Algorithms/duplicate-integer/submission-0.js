class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
   hasDuplicate = (nums) => {
        let hash = {};
        for(const ele of nums){
            if(hash[ele]){
                return true
            } 
            hash[ele] = true;
        }
        return false;
    }
}