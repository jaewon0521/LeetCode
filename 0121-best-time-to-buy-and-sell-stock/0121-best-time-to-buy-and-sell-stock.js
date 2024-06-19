/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let stock = 0;
    let buy = prices[0];
    
    for(let i = 1; i < prices.length; i++) {
        buy = Math.min(buy, prices[i-1]);
        stock = Math.max(prices[i]-buy, stock);
    }
    
    return stock;
};