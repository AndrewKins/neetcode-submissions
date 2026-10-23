class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        for(let i = 1; i < prices.length; i += 1){
            const today = prices[i];
            const yesterday = prices[i - 1];

            if(today > yesterday){
                profit += today - yesterday;
            }
        }

        return profit
         
    }
}
