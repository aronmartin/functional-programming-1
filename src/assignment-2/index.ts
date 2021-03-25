enum AnimalTypes {
  fish = "fish",
  mammal = "mammal",
  reptile = "reptile"
}

interface Animal {
  name: string;
  type: AnimalTypes;
}

interface Fish extends Animal {
  type: AnimalTypes.fish;
}

interface Mammal extends Animal {
  type: AnimalTypes.mammal;
}

interface Reptile extends Animal {
  type: AnimalTypes.reptile;
}

export const animals: Animal[] = [
  { type: AnimalTypes.fish, name: "nemo" },
  { type: AnimalTypes.mammal, name: "monkey" },
  { type: AnimalTypes.reptile, name: "snake" },
  { type: AnimalTypes.fish, name: "squid" },
  { type: AnimalTypes.mammal, name: "giraffe" }
];

export interface Zoo {
  mammalEnclosure: Mammal[];
  fishTank: Fish[];
  reptileEnclosure: Reptile[];
}

export const zoo: Zoo = {
  mammalEnclosure: [],
  fishTank: [],
  reptileEnclosure: []
};

enum AnimalEnclose {
  mammal = "mammalEnclosure",
  fish = "fishTank",
  reptile = "reptileEnclosure"
}

// this function should return a new Zoo object
// the challange is to get the correct animals in the correct enclosure
// extra challenge: try to do it with not so many iterations (hint use the enum)
export function addAnimalsToZoo(zoo: Zoo, animals: Animal[]) {
  return animals.reduce((acc: Zoo, animal: Animal) => {
    const key = AnimalEnclose[animal.type];
    return {
      ...acc,
      [key]: [...acc[key], animal]
    };
  }, zoo);
  // start editing after this line
  return zoo;
  // end editing after this line
}
