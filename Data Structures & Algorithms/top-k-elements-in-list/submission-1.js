class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hash = {};
        for(const ele of nums){
            if(!hash[ele]){
                hash[ele] = 0;
            }
            hash[ele] += 1;
        }
        const freqEle = Object.entries(hash); //Turns elements into an array.

        freqEle.sort((a, b) => b[1] - a[1]);

         let mostFreqEle = freqEle.slice(0,k).map(ele => Number(ele[0]));

         return mostFreqEle;
    }
}
