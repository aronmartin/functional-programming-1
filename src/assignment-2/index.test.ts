import "jest";
import { addAnimalsToZoo, animals, zoo, Zoo } from ".";

describe("addAnimalsToZoo", () => {
  let result: Zoo;

  beforeEach(() => {
    result = addAnimalsToZoo(zoo, animals);
  });

  it("mammalEnclosure should only contain mammals", () => {
    const hasOnlyMammals = result.mammalEnclosure.every(({ type }) => "mammal");
    expect(hasOnlyMammals).toBe(true);
  });

  it("mammalEnclosure should contain all the mammals", () => {
    const amountOfMammals = result.mammalEnclosure.length;
    expect(amountOfMammals).toBe(2);
  });

  it("fishTank should only contain fish", () => {
    const hasOnlyFish = result.fishTank.every(({ type }) => "fish");
    expect(hasOnlyFish).toBe(true);
  });

  it("fishTank should contain all the fish", () => {
    const amountOfFish = result.fishTank.length;
    expect(amountOfFish).toBe(2);
  });

  it("reptileEnclosure should only contain reptiles", () => {
    const hasOnlyReptiles = result.reptileEnclosure.every(
      ({ type }) => "reptiles"
    );
    expect(hasOnlyReptiles).toBe(true);
  });

  it("reptileEnclosure should only contain reptiles", () => {
    const amountOfReptiles = result.reptileEnclosure.length;
    expect(amountOfReptiles).toBe(1);
  });
});
