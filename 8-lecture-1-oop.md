# 2.8.1 - OOP

---

What does this program do?

```js
const createAcc = () => {
    return { sum: 0 }
}
const inc = item => { item.sum = item.sum + 1 }

let a = createAcc();
let b = createAcc();

inc(b);

console.log(a.sum); // 0
console.log(b.sum); // 1
```

---

## What is OOP?

- The OOP paradigm consists of structuring your code around classes
- To know OOP is to know classes _more on this soon_

also

- A way to structure your program
- Some people hardly ever use it, others use it _everywhere_.

---

## Why you should learn OOP

OOP is really good for one thing: user interface libraries.

- React
- Vue
- Angular
- Standard Android UI library
- Standard iOS UI library

But what is a user interface library? _more on that soon_

---

## What is a class?

Class is yet another type.

Wait. What other types do you know?
// string number etc

---

## Defining a class

```js
// convention is to capitalize first letter of classes
class Car {

}
```

---

## First Rule of classes: `new`

If Car is a class, then we can use the `new` keyword to create a new object of that type.

```js
class Car {
  … // stuff goes here
}
let myCar = new Car();
let yourCar = new Car();
```

---

## Second Rule of classes: `constructor`

`new` also calls the `constructor` of the class.

_The `this` keyword refers to the new object._

```js
class Car {
    constructor(brandName, modelName) {
        this.type = 'automobile';
        // || just stops it returning undefined if argument not passed
        this.brand = brandName || '';
        this.model = modelName || '';
    }
}

let myCar = new Car("Toyota", 'corolla');
// mycar === {type: 'automobile', brand : "Toyota", model:'corolla'}
let yourCar = new Car("Honda");
```

---

```js
class Country {
    constructor(pop) {
        this.population = pop;
    }
}
let canada = new Country(30000);
let usa = new Country(400000);
```

---

```js
class City {
 constructor(p, n) {
     this.potholes = p;
     this.name = n;
  }
}
let montreal = new City(30000, "Montreal");
let sanFransisco = new City(3, "San Fransisco");

// What does the following output?
console.log(montreal);
console.log(sanFransisco);
```

---

## Third Rule of classes: method arrow functions

Every method arrow function of a class creates a function.
Every instance of a class has a property that matches the method name and refers to the function.

```js
class Car {
    // must use arrow functions (allows access to parent objects "this")
    noise = () => console.log("Vrooom");
}

let mazda = new Car();

mazda.noise();
// Vrooom
```

---

```js
class School {
    constructor(name) {
        this.name = name;
    }

    noise = () => {
        console.log(`At ${this.name}, students are learning.`)
    }
}
let concordiaBootcamps = new School('Concordia Bootcamps');

// What does the following output?
concordiaBootcamps.noise();
//At Concordia Bootcamps, students are learning.


// What do I have to type to output the name?
console.log(concordiaBootcamps.name);

```

---

```js
class Dog {
    constructor(voice) {
        this.voice = voice || 'borkbork';
    }
    noise = () => {
        console.log(this.voice);
    }
    coolOff = () => {
        console.log('pant');
    }
}

let mastiff = new Dog('bork');
let terrier = new Dog('yap');


//mastiff === {voice:'bork', noise:f(), coolOff:f()}
```

---

## Fourth Rule of classes

The context of the newly created functions is the newly created object.
In other words, the keyword `this` refers to the newly created object.

---

```js
class Dog {
    constructor(voice) {
        this.voice = voice;
    }
    noise = () => {
        console.log(this.voice);
    }
    coolOff = () => {
        console.log("pant ");
    }
}

let mastiff = new Dog('WOOF!');
let terrier = new Dog('yip!yip!');

mastiff.noise() // === WOOF!
```

---

```js
class Car {
    constructor(mileage) {
        this.status = mileage > 0 ? 'used' : 'new' ;
        this.mileage = mileage || 0;
    }
    // || to stop it breaking if no value given (defaults to 10)
    drive = (km) => { 
        this.mileage = this.mileage + km || 10 ;
        this.status = 'used';
    }
}
let myCar = new Car(10000);
myCar.drive(50); 
// adds 50 to milage
```

---

### Exercise

```js
// 1. Given this class, how would we represent its hunger level?
// 2. How could we represent varying hunger levels based on activity?
// 3. How about when it eats?
class Animal {
    constructor(name) {
        this.name = name;
        this.hungerLvl = 0;
    }

    play = () => {
        this.hungerLvl += 20;
    }
    eat = () => {
        this.hungerLvl -= 30;
    }
}



let hippo = new Animal('hippo');
```

---

## Inheritance

A class can inherit from another class.

---

```js
class Human {
    constructor() {
        this.species = "Homo Sapien";
    }
    dance = () => {
        console.log("disco time");
    }
}

// Declare a class that extends Human
//extends brings the methods; super() brings the constructor//
class Male extends Human {
    constructor(name) {
        super(); // call parent constructor to set the species //
        //(if not put, male will not inherit property 'species', but will still get 'dance()' (super is responsible for icluding the parent constructor))
        this.name = name;
    }
    greet = () => {
        console.log("I'm " + this.name);
    }
}

// Create a bob object that is a HUMAN MALE
let bob = new Male('Bob');
```

---

## Exercise 1

What is the output of these programs?

**See sample js files 1 to 6**

---