class Animal {
    constructor (name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} ate`);
    }
}

class SwimmingAnimal extends Animal {
    swim() {
        console.log(`${this.name} swam`);
    }
}

class LandAnimal extends Animal {
    walk() {
        console.log(`${this.name} walked`);
    }
}


function canEat(self) {
    return {
        eat: () => console.log(`${self.name} ate`)
    }
}

function canSwim(self) {
    return {
        swim: () => console.log(`${self.name} swam`)
    }
}

function canWalk(self) {
    return {
        walk: () => console.log(`${self.name} walked`)
    }
}

function amphibian(name) {
    const self = {
        name
    }
    return Object.assign(self, canEat(self), canSwim(self), canWalk(self))
}




