class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        //first check the length of both strings.
        if(s.length !== t.length){
            return false;
        }
        const string = new Map();
        const tstring = new Map();

        for(const ele of s){
            string.set(ele, (string.get(ele) || 0) + 1);
            //setting map frequency.
            //[element, undefinied character or 0]
            //[element, if char already in map then use that number.]
            //[increase the frequency count.]

        }

         for(const ele of t){
            tstring.set(ele, (tstring.get(ele) || 0) + 1);
        }

        if(string.size !== tstring.size){
            return false;
            //check map sizes
        }

        for(const [char,count] of string){
            if(tstring.get(char) !== count){
                
                return false;
            }
        }
        return true
    }

}
