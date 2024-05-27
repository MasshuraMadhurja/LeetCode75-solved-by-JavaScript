function productExceptSelf(nums) {
    const length = nums.length;
    const answer = new Array(length).fill(1);

    // First pass: Calculate prefix products (left products)
    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Second pass: Calculate suffix products (right products) and multiply
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
}
