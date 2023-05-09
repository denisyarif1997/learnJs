const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
  };

//   Kemudian untuk mengakses nilai dari properti object, kita dapat memanggil nama object lalu tanda titik dan diikuti nama propertinya. Contoh:

const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
  };
  
  console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
  console.log(`Umur saya ${user.age} tahun`);

//   Selain dot operator, kita juga bisa mengakses properti dari object menggunakan bracket atau tanda kurung siku.
  user[“home world”];
//   Untuk mengakses key yang memiliki spasi atau karakter khusus lainnya maka kita perlu menggunakan bracket seperti di atas.
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
  };
  
  console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
  console.log(`Umur saya ${user.age} tahun`);
  console.log(`Saya berasal dari ${user["home world"]}`);

// Setelah mempelajari bagaimana membuat object dan menampilkan property di dalamnya, 
// selanjutnya kita akan memodifikasi sebuah object.
// Untuk mengubah nilai properti di dalam object kita gunakan assignment operator (=).

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };
  
  spaceship.color = "Glossy red";
  spaceship["maxSpeed"] = 1300;
  console.log(spaceship);
// Tunggu dulu. Object spaceship dideklarasikan sebagai const, tetapi kenapa kita bisa mengubah nilainya?

// Yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi ulang nilai. Ketika membuat sebuah object, 
// kita tidak terikat dengan properti di dalamnya sehingga kita masih bisa memodifikasi nilainya. 
// Berbeda jika kita menginisialisasi ulang variabel dari object.

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };
   
  spaceship = { name: "New Millenium Falcon" }; // Error

//   etika kita mengubah object menggunakan assignment operator dan property/key-nya sudah ada, maka nilai di dalamnya akan tergantikan dengan nilai yang baru. Sedangkan, jika property dengan nama key yang ditentukan tidak ditemukan, maka property baru akan ditambahkan ke object.

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };
  
  spaceship.color = "Glossy red";
  spaceship["maxSpeed"] = 1300;
  spaceship.class = "Light freighter";
  
  console.log(spaceship);
  
  /* output
  {
    name: 'Millenium Falcon',
    manufacturer: 'Corellian Engineering Corporation',
    maxSpeed: 1300,
    color: 'Glossy red',
    class: 'Light freighter'
  }
  */

//   Kita juga dapat menghapus property pada object menggunakan keyword delete seperti berikut:

  const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };
  
  spaceship.color = "Glossy red";
  spaceship["maxSpeed"] = 1300;
  
  delete spaceship.manufacturer;
  
  console.log(spaceship);
  
  /* output
  { name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
   */

