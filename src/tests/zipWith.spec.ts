import zipWith from "../zipWith";

test("Returns array of nums where each element is the sum of input arrays element at matching index", () => {
  const testFn = (num1: number, num2: number): number => num1 + num2;
  const arr1 = [1, 2, 3];
  const arr2 = [2, 2, 2];

  expect(zipWith(testFn, arr1, arr2)).toEqual([3, 4, 5]);
});

test("Handles 2 arrays of different types", () => {
  const testFn = (str: string, num: number) => num.toString() + " " + str;
  const arr1 = ["first", "second"];
  const arr2 = [1, 2];

  expect(zipWith(testFn, arr1, arr2)).toEqual(["1 first", "2 second"]);
});

test("Handles 2 arrays of different types, and arrays of varying lengths", () => {
  const testFn = (str: string, num: number) => num.toString() + " " + str;
  const arr1 = ["first", "second", "third"];
  const arr2 = [1, 2];

  expect(zipWith(testFn, arr1, arr2)).toEqual(["1 first", "2 second"]);
});
