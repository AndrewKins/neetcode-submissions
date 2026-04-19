class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
     let maxProfit = 0;
     let l = 0;
     let r = 1;

     while(r < prices.length){
        if(prices[l] < prices[r]){
            let currProfit = (prices[r] - prices[l]);
            maxProfit = Math.max(maxProfit,currProfit);
        }
        if(prices[l] >= prices[r]){
            l = r;
        }
        r++
     }
     return maxProfit
    

    }
}
