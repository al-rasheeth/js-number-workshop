/**
 * This module demonstrates common floating-point precision issues in JavaScript
 * and why they occur due to IEEE 754 standard limitations.
 */
export function precisionIssuesDemo() {
    console.log('=== Floating-Point Precision Issues ===\n');

    // Basic arithmetic precision issues
    console.log('1. Basic Arithmetic Precision:');
    
    // The classic 0.1 + 0.2 problem
    console.log('// Famous 0.1 + 0.2 issue due to binary floating-point');
    console.log('0.1 + 0.2:', 0.1 + 0.2); // 0.30000000000000004
    console.log('0.1 + 0.2 === 0.3:', 0.1 + 0.2 === 0.3); // false

    // Multiplication precision issues
    console.log('\n2. Multiplication Precision:');
    
    // Currency calculations
    console.log('// Currency calculation issues');
    const price = 0.1;
    console.log('0.1 × 3:', price * 3); // 0.30000000000000004

    // Division precision issues
    console.log('\n3. Division Precision:');
    
    // Recurring decimals
    console.log('// Division resulting in recurring decimals');
    console.log('1/3:', 1/3); // 0.3333333333333333
    console.log('(1/3) * 3:', (1/3) * 3); // 1 (but could be slightly off in some cases)

    // Rounding issues
    console.log('\n4. Rounding Issues:');
    
    // Problems with seemingly simple decimals
    console.log('// Rounding can produce unexpected results');
    console.log('Math.round(2.675 * 100) / 100:', Math.round(2.675 * 100) / 100); // 2.67 instead of 2.68
} 