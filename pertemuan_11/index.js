//Arrow Fungsion

//1. fungsi dengan menggunakan parameter
const operasiPenjumlahan = (bilangan1, bilangan2) =>
  {
    const hasil =  bilangan1 + bilangan2;
    return hasil;
  };
  const operasiPengurangan = (bilangan1, bilangan2) =>
  {
    const hasil =  bilangan1 - bilangan2;
    return hasil;
  };
  console.log(operasiPenjumlahan(3, 4)); // Output: 7
  console.log(operasiPengurangan(10,5)); // output: 5

// 2. fungsi yang tidak menggunakan parameter
const namaJenisAnjing = () => 
  {
    const anjing = ["Herder", "Pitbull", "Rottweiler"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
  }
const jenisAnjing2 = () => 
  {
    const anjing = ["Bulldog", "Retriver", "Siberian"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
  }
  console.log(namaJenisAnjing());
  console.log(jenisAnjing2()); 