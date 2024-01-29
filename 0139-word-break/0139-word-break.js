/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
   const dp = []
   dp[0] = true;

   for(let i = 0; i <= s.length; i++) {
       if(dp[i]) {
           for(let word of wordDict) {
               if(s.slice(i, i + word.length) === word) {
                   dp[i + word.length] = true;
               } 
           }
       }
   }

   return dp[s.length] ? dp[s.length] : false
};