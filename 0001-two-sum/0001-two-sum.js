/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsObj = {};
    
    for(let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let match = target - current;
        
        if(match in numsObj) {
            return [i, numsObj[match]];
        } else {
            numsObj[current] = i;
        }
    }
};