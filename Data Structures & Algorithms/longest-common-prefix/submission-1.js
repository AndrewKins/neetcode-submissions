class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        //loop through the first element of all strings in the array
        for(let i = 0; i < strs[0].length; i += 1){
            //compare each first string element to the rest of the strings
            for(let s of strs){
                if(i === s.length || s[i] !== strs[0][i]){
                //if reached the end of the string
                //The character at position i in s 
               //does not match the character at the same position in the first string.
               return s.slice(0, i);
                }
                

            }
        }
        return strs[0];
    }
}
