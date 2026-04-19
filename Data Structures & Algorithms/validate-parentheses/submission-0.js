class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []; //stack is just an Array
        for(let i = 0; i < s.length; i += 1){
            let char = s[i]; //Each char in the Array.
            if(char === '{' || char === '(' || char === '['){
                stack.push(char) //If opening character - push that opening char into stack.
            } else {
                let prevVal = stack.pop();
                if(prevVal === "{" && char !== "}") return false; //if opening and closing char aren't the same
                if(prevVal === "(" && char !== ")") return false; //if opening and closing char aren't the same
                if(prevVal === "[" && char !== "]") return false; //if opening and closing char aren't the same
                 if(prevVal === undefined) return false; 
            }

        }
            return stack.length === 0;
    }
}
