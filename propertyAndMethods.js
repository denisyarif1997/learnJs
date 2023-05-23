// Properti dan Method
// Di materi sebelumnya, Anda sudah tahu bahwa class (function constructor dalam JavaScript) merupakan sebuah object blueprint yang dapat membuat sebuah objek serupa lebih mudah. Dengan menggunakan class, kita bisa terhindar dari banyak duplikasi kode dalam membuat banyak objek sekaligus.

// Di dalam sebuah class, kita dapat mendefinisikan dua hal, yaitu properti dan method. Di materi kali ini kita akan membahas lebih detail mengenai keduanya.


// Properti
// Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sebuah instance class. Contohnya, jika Anda membuat class Car, properti adalah informasi yang sekiranya terdapat pada sebuah mobil seperti brand, color, maxSpeed, dan chasissNumber. Contoh lain, jika Anda membuat class Mail, secara umum propertinya adalah sender, receiver, subject, dan body.

class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = chassisNumber;
    }
  }
   
  class Mail {
    constructor(sender, receiver, subject, body) {
      this.sender = sender;
      this.receiver = receiver;
      this.subject = subject;
      this.body = body;
    }
  }