/**
 * This module focuses specifically on number parsing operations and challenges
 * in JavaScript, demonstrating various methods and their behaviors.
 */
export function numberParsingDemo() {
    console.log('=== Number Parsing Operations ===\n');

    // String to number conversion methods
    console.log('1. Basic Number Parsing:');
    
    // Using Number() constructor
    console.log('// Number() constructor - converts to number or NaN');
    console.log('Number("123"):', Number("123"));
    console.log('Number("12.34"):', Number("12.34"));
    console.log('Number("abc"):', Number("abc")); // NaN
    
    // Using parseInt()
    console.log('\n// parseInt() - converts to integer, stops at invalid chars');
    console.log('parseInt("123"):', parseInt("123"));
    console.log('parseInt("12.34"):', parseInt("12.34")); // Only returns 12
    console.log('parseInt("123abc"):', parseInt("123abc")); // Returns 123
    
    // Using parseFloat()
    console.log('\n// parseFloat() - converts to float, stops at invalid chars');
    console.log('parseFloat("12.34"):', parseFloat("12.34"));
    console.log('parseFloat("12.34.56"):', parseFloat("12.34.56")); // Returns 12.34

    // Radix parsing
    console.log('\n2. Parsing with Different Radixes:');
    
    // Binary parsing
    console.log('// Parsing binary numbers');
    console.log('parseInt("1010", 2):', parseInt("1010", 2)); // 10 in decimal
    
    // Octal parsing
    console.log('\n// Parsing octal numbers');
    console.log('parseInt("070", 8):', parseInt("070", 8)); // 56 in decimal
    
    // Hexadecimal parsing
    console.log('\n// Parsing hexadecimal numbers');
    console.log('parseInt("FF", 16):', parseInt("FF", 16)); // 255 in decimal

    // Locale-specific parsing
    console.log('\n3. Locale-Specific Number Parsing:');
    
    // Using Intl.NumberFormat
    console.log('// Parsing numbers with different locale formats');
    const usFormatter = new Intl.NumberFormat('en-US');
    const deFormatter = new Intl.NumberFormat('de-DE');
    
    console.log('US format:', usFormatter.format(1234.56)); // 1,234.56
    console.log('German format:', deFormatter.format(1234.56)); // 1.234,56
} 