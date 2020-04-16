let products = [{
        name: "Apel",
        type: "fruit"
    },
    {
        name: "Monitor",
        type: "Computer"
    },
    {
        name: "Mango",
        type: "fruit"
    },
    {
        name: "Table",
        type: "Furniture"
    },

];
//console.log(products.every(produk => produk.type === "fruit")
//);

console.log(products.some(produk => produk.type === "fruit"));