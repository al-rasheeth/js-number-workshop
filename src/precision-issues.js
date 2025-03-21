export function precisionIssuesDemo() {
    console.log('=== Precision Issues in JavaScript ===');
    
    // Basic arithmetic issues
    console.log('Basic arithmetic issues:');
    console.log('0.1 + 0.2 =', 0.1 + 0.2);
    console.log('0.3 - 0.1 =', 0.3 - 0.1);
    
    // Currency calculations (problematic)
    console.log('\nCurrency calculations:');
    let price = 10.99;
    let quantity = 3;
    console.log('$10.99 × 3 =', price * quantity); // 32.97000000000001

    // Rounding issues
    console.log('\nRounding issues:');
    console.log('Math.round(2.675 * 100) / 100 =', Math.round(2.675 * 100) / 100); // 2.67 instead of 2.68

    // Large number precision loss
    console.log('\nLarge number precision:');
    let bigNum = 9007199254740992;
    console.log('9007199254740992 + 1 =', bigNum + 1); // Same number, precision lost
} 