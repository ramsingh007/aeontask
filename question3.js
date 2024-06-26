
/**
* @param {number[]} numbers
* @param {number} target
* @return {number[]}
*/
const twoSum = function(numbers, target) {
    const result = [];  // Initialize an empty array to store result indices
    
    numbers.forEach((num1, index1) => {  // Iterate over each element in the array
        numbers.slice(index1 + 1).forEach((num2, index2) => {  // Iterate over subsequent elements
            if (num1 + num2 === target && result.length === 0) {
                // If the sum of num1 and num2 equals target and result is empty
                result.push(index1 + 1, index1 + index2 + 2);  // Push indices to result array
            }
        });
    });
    
    return result;  // Return the result array
};
console.log("numbers [4, 11, 17, 25] target 21, Answer: ", twoSum([4, 11, 17, 25], 21));
console.log("numbers [0, 1, 2, 2, 3, 5] target 4  Answer: ",twoSum([0, 1, 2, 2, 3, 5], 4));
console.log("numbers [-1, 0] target -1  Answer: ",twoSum([-1, 0], -1))