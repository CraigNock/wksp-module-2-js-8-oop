// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.


class Cat {
    constructor(name, breed) {
        this.species = 'Cat';
        this.name = name;
        this.breed = breed || '';
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }
    sleep = (hours) => {
        this.tiredness -= hours;
        this.happiness += 20;
    }
    eat = (grams) => {
        this.hunger -= (grams * .2);
        this.happiness += 60;

    }
    play = (mins) => {
        this.loneliness -= (mins * 3);
        this.hunger += (mins * .5)
        this.happiness += 50;
    }
    timePass = (mins) => {
        this.tiredness += (mins * .2);
        this.hunger += (mins * .2);
        this.loneliness += (mins * .5);
        this.happiness -= (mins * .5);
    }
}

let boots = new Cat('Boots', 'Siamese');

boots.sleep(5);
boots.eat(50);
boots.play(20);


// B) Make Boots wait 20 minutes and call then console.log(boots);
boots.timePass(20);

console.log(boots);
