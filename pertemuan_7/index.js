/*JavaScript Conditional (Persyaratan)
------------------------------- */
//1. If, Else, Else if
   //a. if
   let Cari1 = "Garren";

   let customer1 = {
       nameCustomer: 'Garren',
       biodata:{
         address:'Maumbi',
         street: 'Jln.Manado-Bitung'
       },
       HasilCari:function(){
         if (this.nameCustomer == Cari1) {
           console.log(this.biodata.address);
         }
       }
     }
   
       //b. Condition Else if
     let Cari2 = "Garren";
     let customer2 = {
       nameCustomer1: 'Sven',
       biodata1:{
         address:'Sanger',
         street: 'Jln.Sanger Talaud',
               },
         customerName2: 'Garren',
         biodata2:{
           address:'Kawangkoan',
           street: 'Jln.Kacang Tore',
                 },
       Hasil:function(){
           if (customer2.nameCustomer1 == Cari2) {
             console.log(this.biodata1.address)
               }
           else if (Cari2 == customer2.customerName2) {
             console.log(this.biodata2.address)
           }
           else {
               console.log("Nama "+ Cari2 +" Tidak ada di dalam database")
               }
             }
        }; 
   customer1.HasilCari();
   customer2.Hasil();
   //2. Switch Case
   
     // studentName: 'Garren',
       // nilai: 80,
       //   studentName: 'Axel Arie',
       // nilai: 90 ,
       // studentName: 'Huskar',
       // nilai: 80,
       //   studentName: 'Troll',
       // nilai: 90 ,
       // studentName: 'Mirana',
       // nilai: 80,
       //   studentName: 'Traxex',
       // nilai: 90 ,
     function perbandingan() {
     let nilai;  
     let Student = "Garren";
         switch (Student) {
           case "Garren":
             nilai = 80;
             break;
           case "Axel Arie":
             nilai = 85;
             break;
           case "Huskar":
             nilai = 88;
             break;
           case "Troll":
             nilai = 87;
             break;
           default:
             nilai= "Traxex";
             }
             console.log(nilai);
        }; 
   customer1.HasilCari();
   customer2.Hasil();
   perbandingan();