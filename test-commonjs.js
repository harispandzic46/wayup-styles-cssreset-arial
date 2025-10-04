// Test CommonJS import
const cssReset = require('./dist/index.js');
console.log('CommonJS import successful!');
console.log('CSS Reset length:', cssReset.length);
console.log('First 100 characters:', cssReset.substring(0, 100));
