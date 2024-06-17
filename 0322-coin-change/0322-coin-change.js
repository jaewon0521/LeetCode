/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const table = Array(amount + 1).fill(Infinity);
    
    table[0] = 0;
    
    for(let curTable = 1; curTable <= amount; curTable++) {
        for(const coin of coins) {
            if(curTable - coin >= 0) {
                table[curTable] = Math.min(table[curTable], table[curTable - coin] + 1)
            }    
        }
    }
    
    return table[amount] > amount ? -1 : table[amount];
    
};