class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        let obj = {
                "[": "]",
                "(": ")",
                "{": "}",
            };
        
        for (let i = 0; i < s.length; i += 1) {
            console.log(stack, "stackchecker")
            if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
                stack.push(obj[s[i]]);
            }
            if (s[i] === "]" || s[i] === ")" || s[i] === "}") {
                let ele = stack.pop();
                console.log(ele, "checker")

                if (s[i] === ele) {
                continue;
            }
    
                 return false;
            }
        } if(stack.length > 0) return false
        return true;
    }
}
