import { randomBetween } from "./example1";

const randomSpy = jest.spyOn(Math, "random");

describe("example1", () => {
  describe("when Math.random() returns 0", () => {
    beforeEach(() => {
      // code
      randomSpy.mockClear().mockReturnValue(0);
    });

    it("called with min=3 and max=5 return 3", () => {
      // expect(randomBetween(3, 5)).toBeGreaterThanOrEqual(3);
      expect(randomBetween(3, 5)).toBe(3);
      expect(randomSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("when Math.random() returns 0.5", () => {
    beforeEach(() => {
      // code
      randomSpy.mockClear().mockReturnValue(0.5);
    });

    it("called with min=3 and max=5 return 4", () => {
      expect(randomBetween(3, 5)).toBe(4);
      expect(randomSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("when Math.random() returns 0.9999", () => {
    beforeEach(() => {
      // code
      randomSpy.mockClear().mockImplementation(() => 0.9999);
    });

    it("called with min=3 and max=5 return 5", () => {
      expect(randomBetween(3, 5)).toBe(5);
      expect(randomSpy).toHaveBeenCalledTimes(1);
    });
  });
});
