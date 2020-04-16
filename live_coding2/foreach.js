let number = [2, 4, 6, 7];

//number.forEach(num => {
//  console.log(num);
//});

//let genap = number.filter(num => {
//   return num % 2 == 0;
//});

//console.log(genap);

let genap = number.find(num => {
    return num % 2 == 0;
});

console.log(genap);