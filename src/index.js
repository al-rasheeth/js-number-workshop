import { numberBasicsDemo } from './modules/number-basics.js';
import { numberParsingDemo } from './modules/number-parsing.js';
import { precisionIssuesDemo } from './modules/precision-issues.js';
import { bigIntDemo } from './modules/bigint-examples.js';
import { internalSolutionsDemo } from './modules/internal-solutions.js';
import { decimalSolutionsDemo } from './modules/decimal-solutions.js';

console.log('JavaScript Number Precision Workshop\n');
console.log('This workshop demonstrates various aspects of JavaScript number handling,');
console.log('from basic concepts to precision issues and their solutions.\n');

// Run demos in logical progression
console.log('='.repeat(80));
numberBasicsDemo();

console.log('\n' + '='.repeat(80));
numberParsingDemo();

console.log('\n' + '='.repeat(80));
precisionIssuesDemo();

console.log('\n' + '='.repeat(80));
bigIntDemo();

console.log('\n' + '='.repeat(80));
internalSolutionsDemo();

console.log('\n' + '='.repeat(80));
decimalSolutionsDemo();
console.log('\n' + '='.repeat(80));