/**
 * This module demonstrates the usage of BigInt for handling large numbers
 * beyond Number.MAX_SAFE_INTEGER and its limitations.
 */
export function bigIntDemo() {
    console.log('=== BigInt Operations and Examples ===\n');

    // Creating BigInts
    console.log('1. Creating BigInt Values:');
    
    // Using BigInt constructor
    console.log('// Creating BigInt using constructor');
    const bigIntFromNumber = BigInt(123);
    console.log('BigInt(123):', bigIntFromNumber);
    
    // Using literal notation
    console.log('\n// Creating BigInt using literal notation');
    const bigIntLiteral = 123n;
    console.log('123n:', bigIntLiteral);

    // Large number operations
    console.log('\n2. Large Number Operations:');
    
    // Beyond MAX_SAFE_INTEGER
    console.log('// Operations beyond MAX_SAFE_INTEGER');
    const maxSafeInt = BigInt(Number.MAX_SAFE_INTEGER);
    console.log('MAX_SAFE_INTEGER + 1:', maxSafeInt + 1n);
    console.log('MAX_SAFE_INTEGER + 2:', maxSafeInt + 2n);

    // BigInt limitations
    console.log('\n3. BigInt Limitations:');
    
    // Cannot mix with regular numbers
    console.log('// Cannot mix BigInt with regular numbers');
    try {
        const result = 1n + 1;
    } catch (error) {
        console.log('Error mixing types:', error.message);
    }
    
    // No decimal points
    console.log('\n// BigInt cannot have decimal points');
    try {
        const decimal = BigInt(1.5);
    } catch (error) {
        console.log('Error with decimals:', error.message);
    }
} 