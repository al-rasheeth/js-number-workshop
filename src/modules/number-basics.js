/**
 * This module demonstrates the fundamental concepts of numbers in JavaScript
 * including different types of numbers, their limits, and special values.
 */
export function numberBasicsDemo() {
    console.log('=== JavaScript Number Fundamentals ===\n');

    // Demonstrate number system basics
    console.log('1. Number System Basics:');
    
    // JavaScript uses 64-bit floating-point numbers (IEEE 754)
    console.log('// All numbers in JavaScript are 64-bit floating-point');
    const regularNumber = 42;
    console.log(`typeof ${regularNumber}:`, typeof regularNumber); // 'number'

    // Demonstrate number limits
    console.log('\n2. Number Limits:');
    
    // Maximum safe integer (2^53 - 1)
    console.log('// Largest integer that can be safely represented');
    console.log('Number.MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);
    
    // Minimum safe integer (-(2^53 - 1))
    console.log('// Smallest integer that can be safely represented');
    console.log('Number.MIN_SAFE_INTEGER:', Number.MIN_SAFE_INTEGER);
    
    // Maximum number value
    console.log('// Largest possible number value');
    console.log('Number.MAX_VALUE:', Number.MAX_VALUE);

    // Special numeric values
    console.log('\n3. Special Numeric Values:');
    
    // Infinity represents numbers larger than MAX_VALUE
    console.log('// Infinity - result of overflow or division by zero');
    console.log('Infinity:', Infinity);
    console.log('1/0:', 1/0);
    
    // NaN (Not a Number) represents invalid numeric operations
    console.log('\n// NaN - result of invalid numeric operations');
    console.log('0/0:', 0/0);
    console.log('Math.sqrt(-1):', Math.sqrt(-1));
    
    // Number representations
    console.log('\n4. Number Representations:');
    
    // Scientific notation
    console.log('// Scientific notation for very large/small numbers');
    console.log('1e5:', 1e5);  // 100000
    console.log('1e-5:', 1e-5); // 0.00001
    
    // Binary and Hexadecimal
    console.log('\n// Binary and Hexadecimal representations');
    console.log('Binary (0b1010):', 0b1010); // 10 in decimal
    console.log('Hexadecimal (0xFF):', 0xFF); // 255 in decimal
} 