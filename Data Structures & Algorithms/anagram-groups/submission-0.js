class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = {};
        for(let ele of strs){
            const sorted = ele.split('').sort().join('');
            if(!hash[sorted]){
                hash[sorted] = [];
            }
            hash[sorted].push(ele)
        }
        return Object.values(hash)
    }
}
