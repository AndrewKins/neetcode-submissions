class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
        console.log(s, "checkingsplit")
        let start = s[0];
        let end = s.length - 1;
    

        for(let i  = 0; i < s.length; i += 1){
            if(s[i] === s[end]){
                end--
            } else return false;
        }
        return true
    } 
}
