class Student {
    constructor() {
        this.excitement = 1;
    }

    learn = () => {
        this.excitement = this.excitement  + 5;
    }
                //remember 'this' must be reference or it looks for functions outside 
    writeCode = () => { this.learn(); }
}

let bob = new Student();
bob.writeCode(); // bob.excitement === 6
console.log(bob);
console.log(bob.excitement);