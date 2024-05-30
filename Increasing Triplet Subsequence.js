
var increasingTriplet = function (nums) {
    let min = nums[0];

    let min2 = Number.MAX_SAFE_INTEGER;

    for (var i = 1; i < nums.length; i++) {
        if (nums[i] <= min) {
            min = nums[i];
        } else if (nums[i] <= min2) {
            min2 = nums[i];
        } else {
            return true;
        }
    }
    return false;
};
