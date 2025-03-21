/**
 * This module demonstrates built-in JavaScript solutions for handling
 * number precision issues without external libraries.
 */
export function internalSolutionsDemo() {
    console.log('=== Native JavaScript Precision Solutions ===\n');

    // Using toFixed()
    console.log('1. Using toFixed():');
    
    // Format number with specific decimal places
    console.log('// Formatting numbers with specific decimal places');
    const sum = 0.1 + 0.2;
    console.log('(0.1 + 0.2).toFixed(2):', sum.toFixed(2));

    // Number.EPSILON for comparisons
    console.log('\n2. Using Number.EPSILON:');
    
    // Compare floating point numbers
    console.log('// Safe floating point comparison');
    const areEqual = (a, b) => Math.abs(a - b) < Number.EPSILON;
    console.log('0.1 + 0.2 ≈ 0.3:', areEqual(0.1 + 0.2, 0.3));

    // Multiplication and division technique
    console.log('\n3. Integer Multiplication Technique:');
    
    // Convert to integers for calculation
    console.log('// Converting to integers for precise calculation');
    const calculatePrice = (price, quantity) => {
        return (price * 100 * quantity) / 100;
    };
    console.log('0.1 × 3 (using integers):', calculatePrice(0.1, 3));

    // Using Math.round for precision
    console.log('\n4. Rounding Solutions:');
    
    // Proper rounding technique
    console.log('// Proper rounding for decimal places');
    const roundToDecimals = (number, decimals) => {
        const multiplier = Math.pow(10, decimals);
        return Math.round(number * multiplier) / multiplier;
    };
    console.log('Round 2.675 to 2 decimals:', roundToDecimals(2.675, 2));
} 