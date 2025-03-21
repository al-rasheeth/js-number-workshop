export function numberParsingDemo() {
    console.log('=== Number Parsing and Challenges ===');

    // Basic parsing examples
    console.log('1. Basic Parsing:');
    console.log('parseInt("123"):', parseInt("123")); // 123
    console.log('parseFloat("123.45"):', parseFloat("123.45")); // 123.45
    
    // Parsing challenges
    console.log('\n2. Parsing Challenges:');
    console.log('parseInt("08"):', parseInt("08")); // 8 (but in older JS versions could be 0 due to octal)
    console.log('parseInt("09"):', parseInt("09")); // 9 (but in older JS versions could be 0 due to octal)
    console.log('parseInt("0x10"):', parseInt("0x10")); // 16 (hex)
    console.log('parseInt("10", 16):', parseInt("10", 16)); // 16 (explicit hex)
    
    // Number constructor vs parseInt
    console.log('\n3. Number() vs parseInt():');
    console.log('Number("123.45"):', Number("123.45")); // 123.45
    console.log('parseInt("123.45"):', parseInt("123.45")); // 123
    console.log('Number("123abc"):', Number("123abc")); // NaN
    console.log('parseInt("123abc"):', parseInt("123abc")); // 123
    
    // BigInt examples
    console.log('\n4. BigInt Examples:');
    const maxNumber = Number.MAX_SAFE_INTEGER;
    console.log('Max safe integer:', maxNumber);
    
    const bigIntValue = BigInt(maxNumber) + BigInt(1);
    console.log('BigInt value:', bigIntValue);
    console.log('Is BigInt?', typeof bigIntValue === 'bigint');
    
    // BigInt operations
    console.log('\n5. BigInt Operations:');
    const bigInt1 = BigInt("9007199254740991");
    const bigInt2 = BigInt("9007199254740992");
    console.log('BigInt addition:', bigInt1 + bigInt2);
    console.log('BigInt multiplication:', bigInt1 * BigInt(2));
    
    // BigInt limitations
    console.log('\n6. BigInt Limitations:');
    try {
        console.log('Mixing BigInt with regular numbers:');
        const result = BigInt(10) + 10; // This will throw TypeError
    } catch (error) {
        console.log('Error:', error.message);
    }
    
    // Decimal place challenges
    console.log('\n7. Decimal Place Challenges:');
    console.log('0.1 + 0.2:', 0.1 + 0.2);
    console.log('(0.1 + 0.2).toFixed(1):', (0.1 + 0.2).toFixed(1));
    console.log('Number((0.1 + 0.2).toFixed(1)):', Number((0.1 + 0.2).toFixed(1)));
    
    // Locale-specific parsing
    console.log('\n8. Locale-specific Parsing:');
    const europeanNumber = "1.234,56";
    console.log('European number format:', europeanNumber);
    console.log('Parsed with parseFloat:', parseFloat(europeanNumber)); // Incorrect parsing
    console.log('Using Intl.NumberFormat:', new Intl.NumberFormat('de-DE').format(1234.56));
    
    // Scientific notation
    console.log('\n9. Scientific Notation:');
    console.log('1e-6:', 1e-6);
    console.log('Number("1e-6"):', Number("1e-6"));
    console.log('parseFloat("1e-6"):', parseFloat("1e-6"));
} 