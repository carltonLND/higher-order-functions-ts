import collect from "../collect";

test("adds 'hello' to global array 5 times", () => {
  const testFn = () => {
    return "hello";
  };

  expect(collect(5, testFn)).toEqual([
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
  ]);
});

test("nothing should happen if number is less than 1", () => {
  const testFn = () => {
    return "hello";
  };

  expect(collect(0, testFn)).toEqual([]);
});
