const upperizednames = ["Dimas", "Wiidy", "Mamat"]
    .map(name => name.toUpperCase());

console.log(...upperizednames);

//deklarasi
function sayHello(greet) {
    console.log(`${greet}`);
}

//ekspresi
const sayName = function (name) {
    console.log(`Nama Saya $ {name}`);
}

const sayhello = greet => console.log(`${greet}`);

const sayname = name => console.log(`${greet}`);

["Dimas", "Wiidy", "Mamat"]
.forEach(name => console.log(`Nama Saya ${name}`));