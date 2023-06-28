import map from "../map";

test("adds 1, returns new arr", () => {
  const testArr = [1, 2, 3];
  function testFunction(num: number): number {
    return num + 1;
  }

  expect(map(testArr, testFunction)).toEqual([2, 3, 4]);
  expect(testArr).toEqual([1, 2, 3]);
});

test("returns empty array if callback doesn't return", () => {
  const testArr = [1, 2, 3];
  function testFunction(): void {}

  expect(map(testArr, testFunction)).toEqual([]);
});

test("returns uppercase array", () => {
  const testArr = ["hello", "world"];
  function testFunction(str: string): string {
    return str.toUpperCase();
  }

  expect(map(testArr, testFunction)).toEqual(["HELLO", "WORLD"]);
});

test("returns array of array length properties", () => {
  const testArr = [[988], [441, 22], [12, 9, 123]];
  function testFunction(arr: any[]) {
    return arr.length;
  }

  expect(map(testArr, testFunction)).toEqual([1, 2, 3]);
});

test("returns array of num or null", () => {
  const testArr: number[] = [1, 2, 3, 4, 5];
  function testFunction(num: number): number | null {
    return num % 2 === 0 ? num : null;
  }

  expect(map(testArr, testFunction)).toEqual([null, 2, null, 4, null]);
});
