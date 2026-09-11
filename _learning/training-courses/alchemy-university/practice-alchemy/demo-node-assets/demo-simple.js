// Simple Node.js demo - No API required
// Demonstrates JavaScript features and Node.js basics

console.log('🚀 Demo Simple de Node.js\n');

// 1. String manipulation
const message = 'Hello from Node.js!';
console.log('📝 String:', message.toUpperCase());

// 2. Array operations
const numbers = [1, 2, 3, 4, 5, 10, 15, 20];
const sum = numbers.reduce((a, b) => a + b, 0);
const avg = sum / numbers.length;
console.log(`\n📊 Array de números: ${numbers}`);
console.log(`   Suma: ${sum}`);
console.log(`   Promedio: ${avg}`);

// 3. Object manipulation
const user = {
    name: 'Alice',
    age: 30,
    skills: ['JavaScript', 'Node.js', 'React']
};
console.log('\n👤 Usuario:');
console.log(JSON.stringify(user, null, 2));

// 4. Date operations
const now = new Date();
console.log(`\n📅 Fecha actual: ${now.toISOString()}`);