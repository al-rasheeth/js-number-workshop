export function basicNumbersDemo() {
    console.log('=== Basic Numbers in JavaScript ===');
    
    // Integer examples
    const maxSafeInteger = Number.MAX_SAFE_INTEGER;
    console.log('Maximum safe integer:', maxSafeInteger); // 9007199254740991
    console.log('Is 9007199254740991 safe?', Number.isSafeInteger(9007199254740991)); // true
    console.log('Is 9007199254740992 safe?', Number.isSafeInteger(9007199254740992)); // false

    // Floating point examples
    console.log('\nFloating point numbers:');
    console.log(0.1 + 0.2); // 0.30000000000000004
    console.log(0.1 + 0.2 === 0.3); // false

    // Scientific notation
    console.log('\nScientific notation:');
    console.log(1e-6); // 0.000001
    console.log(1e6);  // 1000000

    // Special values
    console.log('\nSpecial values:');
    console.log('Infinity:', Infinity);
    console.log('Negative Infinity:', -Infinity);
    console.log('Not a Number:', NaN);
    console.log('Is NaN equal to NaN?', NaN === NaN); // false
} 