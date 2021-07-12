var searchInsert = function (nums, target) {
    var index;
    for (var i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            index = i
            break;
        }
    }
    if (index === undefined) {
        index = nums.length
    }
    return index;
};

searchInsert([1, 3, 5, 6], 0)