var canPlaceFlowers = function(flowerbed, n) {
    let count = 0; // Counter for new flowers

    for (let i = 0; i < flowerbed.length; i++) {
        // Check if the current position is empty and the adjacent positions are also empty or out of bounds
        if (flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            
            // Place a flower at the current position
            flowerbed[i] = 1;
            count++;
            
            // If we have placed enough flowers, return true
            if (count >= n) {
                return true;
            }

            // Skip the next spot since we can't place adjacent flowers
            i++;
        }
    }

    // After the loop, check if we could place enough flowers
    return count >= n;
};

// Test the function
let result = canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2);
console.log(result);
