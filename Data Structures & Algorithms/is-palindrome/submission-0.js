class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0; //start at first element.
    let right = s.length - 1; //start at last element.

    while (left < right) { 
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
    }
}
