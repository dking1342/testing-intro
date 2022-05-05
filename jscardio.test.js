import { chunkArray, chunkArray2, isAnagram, reverseString } from "./jscardio";

// toBeDefined example
// reverse
test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});
// chunked
test("chunkArray function exists", () => {
    expect(chunkArray).toBeDefined();
});
test("isAnagram function exists", () => {
    expect(typeof isAnagram).toEqual("function");
});

  
// toEqual examples
// reverse
test("String reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
test("String reverses case insensitive", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});

// chunked
test("Chunk an array of 10 values with length of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const len = 2;
  const chunked = chunkArray(numbers, len);
  expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
});
// chunked2
test("Chunk an array of 3 values with length of 2", () => {
    const numbers = [1, 2, 3];
    const len = 2;
    const chunked = chunkArray2(numbers, len);
    expect(chunked).toEqual([[1, 2], [3]]);
});
test("Chunk an array of 5 values with length of 3", () => {
    const numbers = [1, 2, 3, 4, 5];
    const len = 3;
    const chunked = chunkArray2(numbers, len);
    expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
});
test("Chunk an array of 7 values with length of 4", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const len = 4;
    const chunked = chunkArray2(numbers, len);
    expect(chunked).toEqual([[1, 2, 3, 4], [5, 6, 7]]);
});


// anagram
test("cinema is an anagram of iceman", () => {
    expect(isAnagram("cinema", "iceman")).toBeTruthy();
});
test("dormitory is an anagram of dirty room", () => {
    expect(isAnagram("dormitory", "dirty room")).toBeTruthy();
});
test("hello is not an anagram of aloha", () => {
    expect(isAnagram("hello", "aloha")).toBeFalsy();
});