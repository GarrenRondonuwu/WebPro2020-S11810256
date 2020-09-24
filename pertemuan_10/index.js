// var, let, const

// let nama = "Garren"
// let nama = "Rondonuwu"

//console.log(nama);

//scope dalam javascript
//1. Function scope (var)
//2. Block scope

// for (var i=0;i<10;i++)
//{
//    console.log(i);
//}

//function tes(){
//    for (var i=0; i<10; i++)
//    {
//        console.log(i);
//    }
//}
//tes();
//console.log(i);

//console.log(i);

//{
//let i;
//for (i=0; i<10; i++)
//{
//   console.log(i);
//}
//}
//console.log(i);

//template Literal

const person = {
    firstName : "Garren",
    lastName : "Rondonuwu",
    age : 20,
};

console.log("Kita pe nama" + person.firstName + " " + person.lastName + " " + "kita pe umur" + person.age )
console.log('Kita pe nama ${person.firstName} ${person.lastName}. Kita pe Umur ${person.age}');
