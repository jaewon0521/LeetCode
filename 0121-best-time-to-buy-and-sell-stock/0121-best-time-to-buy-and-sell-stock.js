/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];

        if (price < minPrice) {
            minPrice = price;

        } else {
            maxProfit = Math.max(maxProfit, price - minPrice);

        }
    }
    return maxProfit;
};

// [7,1,5,3,6,4]
