//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavoriteFoods(person) {
    for (let food in person) {
      if (Array.isArray(person[food])) {
        console.log(`${food}:`);
        for (let i = 0; i < person[food].length; i++) {
          console.log(`- ${person[food][i]}`);
        }
      } else if (typeof person[food] === 'object') {
        console.log(`${food}:`);
        for (let innerKey in person[food][0]) {
          console.log(`- ${person[food][0][innerKey]}`);
        }
      } else {
        console.log(`${food}: ${person[food]}`);
      }
    }
  }
  
  displayFavoriteFoods(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.printInfo = () => {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
    this.addAge = (years) => {
      this.age += years;
    };
  }
  
  let person1 = new Person('John', 30);
  let person2 = new Person('Jane', 25);
  
  person1.printInfo();
  person2.printInfo();
  
  person1.addAge(3);
  
  console.log('After adding 3 years to John\'s age:');
  person1.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function stringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
          resolve('Big Word!');
      } else {
          reject('Small Number');
      }
  });
}

stringLength('Hello World')
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

stringLength('Hello')
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
