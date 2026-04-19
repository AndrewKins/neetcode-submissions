class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];
        let start = 1;
        for(let i = 0; i < nums.length; i += 1){
            res.push(start);
            start = start*nums[i]; //1 * 1, then any other element after
        }

        let start2 = 1;
        for(let i = nums.length-1; i >= 0; i--){
            res[i] = start2*res[i];
            start2 = start2*nums[i];
        }
        return res;
    }
}
