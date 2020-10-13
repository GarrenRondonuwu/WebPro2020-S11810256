/* Desturisasi Array */



// --- Old way ---

// let buah = ["mangga", "pisang", "anggur"];



// let buah1 = buah[0];

// let buah2 = buah[1];

// let buah3 = buah[2];



// console.log(buah1); // Output: mangga

// console.log(buah2); // Output: pisang

// console.log(buah3); // Output: anggur

// console.log(hitung(1, 2, 3, 4, 5, 6, 7));



// --- New way ---

// let buah = ["mangga", "pisang", "anggur"];



// lakukan destrukturisasi array

// let [buah1, buah2, buah3] = buah;



// console.log(buah1); // Output: mangga

// console.log(buah2); // Output: pisang

// console.log(buah3); // Output: anggur



//Contoh Desktrkturisasi Array ES6

// let[firstName, , lastName, , Hobby] = ["Garren","G","Rondonuwu","Gaming","Sporting"]

// console.log(firstName);

// console.log(lastName);

// console.log(Hobby);



// Cara menukar 2 variable atau lebih

// --------- Cara Lama --------------

// let a = 10;

// let b = 20;



// variabel tambahan sementara

// let temp = a;

// a = b; // nilai a sekarang adalah 20

// b = temp; // nilai b sekarang adalah 10



// ------------ Cara Baru ------------

// let a = 10;

// let b = 20



// [a,b] = [b,a];

// nilai a sekarang adalah 20, dan nilai b adalah 10



// Destrukturisasi Objek

// -------- Cara Lama --------------

// let orang = {

//   nama: "Axel Arie",

//   umur: 25,

//   sudahMenikah: True

// };



// let nama = orang.nama;

// let umur = orang.umur;

// let sudahMenikah = orang.sudahMenikah;



// console.log(nama); // Output: Axel Arie

// console.log(umur); // Output: 25

// console.log(sudahMenikah); // Output: True



//--------- Cara Baru ---------

// let orang = {

//   nama: "Axel Arie",

//   umur: 25,

//   sudahMenikah: True

// };



// Destrukturisasi Objek

// let { nama, umur, statusMenikah } = orang;



// console.log(nama); // Output: Axel Arie

// console.log(umur); // Output: 25

// console.log(statusMenikah); // Output: undefined karena nama variabel dan properti berbeda



//Jika nama variablenya berbeda dengan nama properti :

// let {

//   namaProperti1: namaVariabelBaru1,

//   namaProperti2: namaVariabelBaru2

// } = namaObjek;



//CONTOH

// let orang = {

//   name: "Axel Arie",

//   age: 25,

// };



// buat variabel nama berisi nilai dari properti name pada orang

// buat variabel age berisi nilai dari properti umur pada orang

// let { name: nama, age: umur } = orang;



// console.log(nama); // Output: Axel Arie

// console.log(umur); // Output: 25



// DESKTRUKTURISASI OBJEK BERTINGKAT

// Contohnya seperti ini:

//let murid = {

//    kelas: "12b",

//    nama: ["Anton", "Agus", "Udin"],

//    prestasi: {

//      olahraga: "juara 1",

//      akademik: "juara 2"

//    }

//  };

  

//let {

//    prestasi: { olahraga }

//  } = murid;

  

//  console.log(olahraga); // Output: juara 1