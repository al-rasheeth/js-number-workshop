/**
 * This module demonstrates using the Decimal.js library for precise
 * decimal arithmetic operations.
 */
import Decimal from 'decimal.js';

export function decimalSolutionsDemo() {
    console.log('=== Decimal.js Precision Solutions ===\n');

    // Basic arithmetic with Decimal.js
    console.log('1. Basic Decimal.js Operations:');
    
    // Addition with precise results
    console.log('// Precise addition with Decimal.js');
    const num1 = new Decimal(0.1);
    const num2 = new Decimal(0.2);
    console.log('0.1 + 0.2:', num1.plus(num2).toString()); // Exactly 0.3

    // Setting precision
    console.log('\n2. Controlling Precision:');
    
    // Configure decimal places
    console.log('// Setting specific precision');
    Decimal.set({ precision: 20 });
    const third = new Decimal(1).div(3);
    console.log('1/3 with 20 digits:', third.toString());

    // Currency calculations
    console.log('\n3. Currency Calculations:');
    
    // Precise monetary calculations
    console.log('// Precise monetary operations');
    const price = new Decimal(10.99);
    const quantity = new Decimal(3);
    console.log('$10.99 × 3:', price.times(quantity).toString());

    // Complex calculations
    console.log('\n4. Complex Calculations:');
    
    // Multiple operations maintaining precision
    console.log('// Multiple operations with maintained precision');
    const result = new Decimal(0.1)
        .plus(0.2)
        .times(3)
        .div(0.3);
    console.log('(0.1 + 0.2) × 3 ÷ 0.3:', result.toString());
} 