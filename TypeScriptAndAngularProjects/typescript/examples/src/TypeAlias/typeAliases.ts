
type NumberAlias = number;

type Mammal = {
    name: string;
    produceMilk(): void;
}

type EggLayer = {
    name: string;
    layEggs(): void;
}

// The union type will only safely have
//   properties which are common
type Animal = Mammal | EggLayer;

// The intersection type will have properties from
//   both types
type Platypus = Mammal & EggLayer;

function isMammal(creature: Animal): creature is Mammal {
    return  (<Mammal>creature).produceMilk !== undefined;
}

export function runDemo() {
    let creature1: Platypus = <any>null;

    console.log(creature1.name);
    creature1.produceMilk();
    creature1.layEggs();


    let creature2: Animal = <any>null;
    console.log(creature2.name);
    // creature2.produceMilk();  // Invalid
    // creature2.layEggs();      // Invalid

    if (isMammal(creature2)) {
        creature2.produceMilk();
    }
    else {
        creature2.layEggs();
    }
}
