let peoples = [{
        nama: "Azka",
        gender: "Female"
    },
    {
        name: "Dhio",
        gender: "Male"
    },
    {
        name: "Ammar",
        gender: "Male"
    }
];
//let females = peoples.filter(people =>{
//   return people.gender === "female";
//   });

//   console.log(...females);

let males = peoples.filter(people => {
    return people.gender === "Male";
});

console.log(...males);