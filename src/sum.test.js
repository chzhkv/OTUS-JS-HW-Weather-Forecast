import { sum } from "./sum";

describe("Sum", () => {
  it("should return sum of two numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
