// Constructor Function
// Kebanyakan paradigma OOP diterapkan pada class-based programming languages, seperti Java, C++, C#, dan bahasa pemrograman berbasis class lainnya. JavaScript sendiri bukanlah bahasa pemrograman berbasis class karena sebelum hadirnya sintaks ES6, JavaScript tidak mengenal class. Namun, walaupun demikian, konsep-konsep yang ada di OOP masih bisa diterapkan di JavaScript.

// JavaScript bukanlah class-based language, melainkan prototype-based language. Menariknya, konsep-konsep OOP yang memanfaatkan class seperti pewarisan dapat dilakukan dengan memanfaatkan prototype. Alih-alih menggunakan class, prototype-lah yang diadaptasi JavaScript.

// Kita akan membahas konsep pewarisan di beberapa materi mendatang, semantara kita fokus ke masalah sebelumnya, yaitu object blueprint.

// Pertanyaannya, bagaimana cara membuat object blueprint di JavaScript? Fitrahnya, object blueprint dapat dibuat dengan menggunakan constructor function yang tampak seperti ini.

function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
   
  Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
   
  Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
   
  Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
  }

//   Kode di atas merupakan contoh membuat object blueprint dari sebuah mobil. Anda bisa membuat objek mobil--yang merupakan instance dari Car--dengan memanfaatkan constructor function Car.

function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
   
  Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
   
  Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
   
  Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
  }
   
  // Membuat objek mobil dengan constructor function Car
  const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
  const car2 = new Car('Honda', 'Black', 180, 'ho-1');
  const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
   
  console.log(car1);
  console.log(car2);
  console.log(car3);
   
  car1.drive();
  car2.drive();
  car3.drive();
   
  /* Output
  Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
  Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
  Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
   
  Toyota Silver is driving
  Honda Black is driving
  Suzuki Red is driving
  */


//   Mungkin saat ini Anda bertanya-tanya, bagaimana bisa membuat sebuah objek dengan sebuah fungsi? Itulah salah satu kemampuan fungsi di JavaScript. Fungsi di atas bukanlah fungsi biasa, melainkan constructor function. Berikut beberapa perbedaan yang harus Anda perhatikan.

// Penamaan fungsi yang merupakan constructor function, secara konvensi harus ditulis dengan huruf kapital. Itulah alasan kami memberi nama fungsi tersebut Car, bukan car. Hal ini penting untuk Anda ikuti guna membedakan fungsi biasa dengan constructor function karena penggunaannya berbeda.
// Constructor function dapat memanfaatkan keywordthis yang bernilai objek (instance) dirinya sendiri. Keywordthis dapat dimanfaatkan untuk mengakses nilai properti atau method dari objek tersebut. Contoh, kami menggunakan keyword this untuk menetapkan nilai properti brand dari argumen fungsi. Selain itu, di dalam method drive, kami juga menggunakan this untuk mendapatkan nilai properti brand dan color.
// Constructor function memiliki internal property bernama prototype. Properti ini digunakan untuk mendefinisikan method-method yang akan dimiliki oleh objek yang dibuat. Alasan method perlu didefinisikan di dalam prototype agar mudah untuk diwarisi ketika melakukan pewarisan.
// Terakhir, agar fungsi mengembalikan sebuah objek, Anda harus memanggilnya dengan menambahkan keyword new. Contoh, pada kode di atas, perhatikan cara kami memanggil fungsi Car untuk membuat objek car1, car2, dan car3.
// Perlu Anda ingat bahwa constructor function hanya dapat dibuat dengan reguler function. Anda tidak dapat membuat constructor function dengan arrow function. Arrow function tidak dapat dipanggil dengan keyword new.

// Sintaks Class di ES6
// Sintaks JavaScript modern (ES6) menawarkan cara membuat 
// constructor function dengan menggunakan keyword class. 
// Hal ini membuat penerapan OOP di JavaScript mirip seperti 
// bahasa pemrograman berbasis class. Kita bisa menulis constructor 
// function Car dengan gaya class seperti ini.

class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = chassisNumber;
    }
   
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn() {
      console.log(`${this.brand} ${this.color} is turning`);
    }
  }
   
  // Membuat objek mobil dengan constructor function Car
  const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
  const car2 = new Car('Honda', 'Black', 180, 'ho-1');
  const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
   
  console.log(car1);
  console.log(car2);
  console.log(car3);
   
  car1.drive();
  car2.drive();
  car3.drive();

//   Jika Anda memiliki pengalaman di bahasa pemrograman C++, Java, atau C#, pembuatan class seperti di atas tentu lebih mudah dipahami, bukan? Memang inilah tujuan diciptakan sintaks class di JavaScript. Ia hadir untuk mempermudah penerapan OOP bagi developer yang memiliki latar belakang class-based language.

// Walaupun di JavaScript sudah hadir sintaks class, hal itu tidak membuat JavaScript menjadi class-based language. Faktanya, sintaks class di JavaScript hanyalah syntactic sugar atau cara alternatif dalam mendefinisikan constructor function. Untuk membuktikan hal tersebut, kita bisa mengecek tipe class melalui operator typeof.

class Car {};
console.log(typeof Car);
 
/* Output
function
*/

// Sekarang Anda sudah mengetahui cara membuat object blueprint di JavaScript dengan constructor function dan sintaks class. Di materi selanjutnya kita akan membahas mengenai properti dan method yang ada di dalam sebuah class atau constructor function.

// Catatan: Anda sudah mengetahui bahwa ada dua cara dalam membuat function constructor, yakni dengan keyword function dan class. Di materi selanjutnya kami hanya fokus menggunakan sintaks class agar memudahkan pemahaman.