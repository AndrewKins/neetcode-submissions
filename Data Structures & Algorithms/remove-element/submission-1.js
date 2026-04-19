class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
      let k = 0; //the position
      for(let i = 0; i < nums.length; i += 1){
        //loop from the beginning of the array
        if(nums[i] !== val){
            //if first element is not equal to val.
            nums[k++] = nums[i];
            //Move the first pointer to the current element which is the second and so on.
        }
      }
       return k;
    }
}
