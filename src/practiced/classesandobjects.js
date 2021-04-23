class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name
        this.age= age
    }

    getDescription(){
        return `Hi! My name is ${this.name} and age is ${this.age}`
    }


    getGreeting(){
        return `Hi! I am ${this.name}`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }

    hasMajor(){
        return !!this.major
    }

    getDescription(){
        let description = super.getDescription()

        if(this.hasMajor()){
            description += `Their major is ${this.major}`
        }
        return description

    }
}


class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGreeting(){
        let greetings = super.getGreeting()
        if(this.homeLocation){
            greetings += `, I am visiting from ${this.homeLocation}`
        }
        return greetings
    }
}

const nomad = new Traveler('Mathew mccoughney', 25, 'Bangalore')
console.log(nomad.getGreeting())