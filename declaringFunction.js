function greeting() {
    console.log("Good Morning!")
  }
  
  greeting();

  function greeting(name, language) {
    if(language === "English") {
      console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
      console.log(`Bonjour ${name}!`);
    } else {
      console.log(`Selamat Pagi ${name}!`);
    }
  }


  
  greeting("Harry", "French");

  function multiply(a, b) {
    return a * b;
  }
  
  let result = multiply(10, 2)
  console.log(result)




  function greeting(name, language) {
    if(language === "English") {
      return `Good Morning ${name}!`
    } else if (language === "French") {
      return `Bonjour ${name}!`;
    } else {
      return `Selamat Pagi ${name}!`;
    }
  }
  
  let greetingMessage = greeting("Harry", "French");
  console.log(greetingMessage);


  const greeting = function(name, language) {
    if(language === "English") {
      return "Good Morning " + name + "!";
    } else if (language === "French") {
      return "Bonjour " + name + "!";
    } else {
      return "Selamat Pagi " + name + "!";
    }
  }
  
  console.log(greeting('Ron', 'English'));