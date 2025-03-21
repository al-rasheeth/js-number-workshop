import Decimal from 'decimal.js';

export function decimalSolutionsDemo() {
    console.log('=== Decimal.js Solutions ===');
    
    // Basic arithmetic with Decimal.js
    console.log('Basic arithmetic:');
    const num1 = new Decimal(0.1);
    const num2 = new Decimal(0.2);
    console.log('0.1 + 0.2 =', num1.plus(num2).toString()); // "0.3"

    // Complex calculations
    console.log('\nComplex calculations:');
    const price = new Decimal(10.99);
    const quantity = new Decimal(3);
    console.log('$10.99 × 3 =', price.times(quantity).toString()); // "32.97"

    // High precision calculations
    console.log('\nHigh precision:');
    const result = new Decimal(1).div(new Decimal(3));
    console.log('1/3 with high precision:', result.toString()); // "0.3333333333333333333..."

    // Setting precision
    Decimal.set({ precision: 5 });
    console.log('\nControlled precision (5 digits):');
    console.log('1/3 =', new Decimal(1).div(new Decimal(3)).toString());
} 