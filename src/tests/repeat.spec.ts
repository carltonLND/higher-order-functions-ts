import repeat from "../repeat";

test("adds 'hello' to global array 5 times", () => {
  const globalArray: string[] = [];

  const testFn = () => {
    globalArray.push("hello");
  };

  repeat(5, testFn);
  expect(globalArray).toEqual(["hello", "hello", "hello", "hello", "hello"]);
});

test("nothing should happen if number is less than 1", () => {
  const globalArray: string[] = [];

  const testFn = () => {
    globalArray.push("hello");
  };

  repeat(0, testFn);
  expect(globalArray).toEqual([]);
});
