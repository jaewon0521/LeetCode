/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    
    let result = ''
    
    const sortStrs = strs.sort();
    
    const baseStr = sortStrs[0];
    
    
    
    for (let i = 0; i < baseStr.length; i++) {
        const prefix = baseStr.slice(0, i + 1)
        
        let flag = false;
       for(let j = 0; j < sortStrs.length; j++) {
           if(sortStrs[j].startsWith(prefix)) flag = true;
           else flag = false;
       }
        
        if(flag) result = prefix;
    }
    
    
    
    return result;
};