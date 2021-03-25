interface Animal {
  type: string;
  name: string;
}

const animals: Animal[] = [
  { type: "fish", name: "nemo" },
  { type: "mammal", name: "monkey" },
  { type: "reptile", name: "snake" },
  { type: "fish", name: "squid" },
  { type: "mammal", name: "giraffe" }
];

// this function should return an array of animals with the type fish
export function getAllFish() {
  return animals.filter(({ type }) => type === "fish");
  // start editing after this line
  return animals;
  // end editing after this line
}
