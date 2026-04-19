class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for(let ele of nums){
            if(!map.has(ele)){
                map.set(ele,0);
            } 
            map.set(ele, map.get(ele) + 1);
        }
        const freqEle = Array.from(map);

        freqEle.sort((a,b) => b[1] - a[1])

        let mostFreqEle = freqEle.slice(0,k).map(ele => Number(ele[0]));
        return mostFreqEle;
    }
}
