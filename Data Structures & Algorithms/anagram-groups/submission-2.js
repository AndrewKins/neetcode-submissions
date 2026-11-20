class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        console.log
        // let sorted = strs.sort((a,b) => a - b);
        // console.log(sorted)
        let mergeWords = new Map();

        for(const ele of strs){
            let key = ele.split('').sort().join('');
            if(mergeWords.has(key)){
                mergeWords.get(key).push(ele)
            } else {
                mergeWords.set(key, [ele])
            }
        }
        return [...mergeWords.values()];

       
    }
}
