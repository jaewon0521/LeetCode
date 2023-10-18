/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    const count = {};

    for(let w of word) {
        count[w] = (count[w] || 0) + 1;
    }

    for(let k in count) {
        const newCnt = {...count};
        if(--newCnt[k] === 0) delete newCnt[k];
        if(new Set([...Object.values(newCnt)]).size === 1) return true;
    }
    return false;
    
};