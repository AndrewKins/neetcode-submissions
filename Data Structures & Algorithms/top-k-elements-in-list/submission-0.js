class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    topKFrequent(nums, k) {
        let hash = {};
        for(const ele of nums){
            if(!hash[ele]){ //if element are not in hash
                hash[ele] = 0; //set frequency to 0.
            } 
            hash[ele] += 1; //continue iterating and add one to the frequency counter.
        }
        const freqEle = Object.entries(hash); //Turn elements into an array. Key(String) Values(Numbers)
        console.log(freqEle)

        freqEle.sort((a,b) => b[1] - a[1]); //Sort Elements in Descending order.

        let mostFreqEle = freqEle.slice(0,k).map(ele => Number(ele[0]))
        //Slice from the first element to (K). 
        //Map through the e,ements and turn the keys back into numbers.
        return mostFreqEle
    }
}


