var readline = require('readline-sync');
var a = readline.question('Masukkan bilangan bulat: ');
var b = readline.question('Masukkan bilangan riil: ');

console.log('Sebelum konversi tipe data');
console.log('Tipe a: '+ typeof a);
console.log('Tipe b: '+ typeof b);

var konversi_a = Number(a);
var konversi_b = Number(b);

console.log('Setelah konversi tipe data');
console.log('Tipe a: '+ typeof konversi_a);
console.log('Tipe b: '+ typeof konversi_b);