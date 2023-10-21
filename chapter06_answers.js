const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe: function() {
        return `${this.name} has ${this.health}, ${this.strength} strength, and ${this.xp} XP points`;
    }
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learns a new skill
aurora.xp += 15;

console.log(aurora.describe());

const dog = {
    name:"Fang",
    species:"boarhound",
    size:75,
    bark:function(){
        return "Grrr! Grrr!"
    }
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

const r = Number(prompt("Enter the circle radius:"));
const circle = {
    circumference:function(){
        return Math.PI * 2 * r
    },
    area:function(){
        return Math.PI * r * r 
    }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

const account = {
    name: "Alex",
    balance: 0,
    credit: function(amount) {
        this.balance += amount;
    },
    describe: function() {
        return `Owner: ${this.name}, balance ${this.balance}`;
    }
};

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());
