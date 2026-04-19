class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = new Map();
        for(let i = 0; i < nums.length; i += 1){
            //start from the first index, keep going until we reach the end. iterate by 1;
            //loop through the nums.
            const complement = target - nums[i];
            //subtract the target from each element during the loop.
            if(hash.has(complement)){
                return [hash.get(complement), i] //return the number itself and its index. (not the frequency.)
            }
            hash.set(nums[i], i);
        }
    }
}