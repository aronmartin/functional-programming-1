import "jest";
import { getAllFish } from ".";

describe("getAllFish", () => {
  it("should only contain fish", () => {
    const result = getAllFish();
    expect(result.length && result.every(({ type }) => type === "fish")).toBe(
      true
    );
  });
});
